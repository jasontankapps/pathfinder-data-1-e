import spells1 from '../src/json/spells.json' assert {type: 'json'};
import spells2 from '../src/json/spells2.json' assert {type: 'json'};
import spells3 from '../src/json/spells3.json' assert {type: 'json'};
import spells4 from '../src/json/occult_rituals.json' assert {type: 'json'};
import spelldef from '../src/json/spell_definitions.json' assert {type: 'json'};
import races from '../src/json/races.json' assert {type: 'json'};
import monsters1 from '../src/json/monsters1.json' assert {type: 'json'};
import monsters2 from '../src/json/monsters2.json' assert {type: 'json'};
import monsters3 from '../src/json/monsters3.json' assert {type: 'json'};
import monsters4 from '../src/json/monsters4.json' assert {type: 'json'};
import monsters5 from '../src/json/monsters5.json' assert {type: 'json'};
import monsters6 from '../src/json/monsters_unique.json' assert {type: 'json'};
import monsters7 from '../src/json/mythic_monsters.json' assert {type: 'json'};
import npcs from '../src/json/npcs.json' assert {type: 'json'};
import faiths from '../src/json/faiths.json' assert {type: 'json'};
import feats from '../src/json/feats.json' assert {type: 'json'};
import traits from '../src/json/traits.json' assert {type: 'json'};
import classAbs from '../src/json/class_abilities.json' assert {type: 'json'};

const basics = [
	{...spells1, ...spells2, ...spells3, ...spells4},
	spelldef,
	{...monsters1, ...monsters2, ...monsters3, ...monsters4, ...monsters5, ...monsters6, ...monsters7},
	npcs,
	races,
	faiths,
	feats,
	traits,
	classAbs
];

const whats = [
	"spells",
	"spell definitions",
	"monsters",
	"npcs",
	"races",
	"faiths",
	"feats",
	"traits",
	"class abilities"
];

function getCopyOf (object, what, etc) {
	const maybe = object[what];
	if(!maybe) { return false; }
	const final = {...maybe, ...etc};
	if(final.copyof) {
		const { copyof, ...rest } = final
		return getCopyOf(object, copyof, rest);
	}
	return final;
}

function isGood(object, what) {
	console.log("\n...beginning test: [" + what + "]\n");
	if(!object.unknown) {
		console.log("Missing 'unknown' entry.");
		return;
	}
	let found = false;
	if(Object.entries(object).some(([prop, value]) => {
		const { copyof, ...etc } = value;
		const test = copyof ? getCopyOf(object, copyof, etc) : etc;
		if(
			!test
			|| typeof test !== "object"
			|| typeof test.name !== "string"
			|| !Array.isArray(test.sources)
			|| test.sources.some(line => typeof line !== "string")
			|| !Array.isArray(test.description)
			|| test.description.some(line => typeof line !== "string")
			|| (test.subhierarchy && (
				!Array.isArray(test.subhierarchy)
				|| test.subhierarchy.some((pair, i) => {
					if (
						!Array.isArray(pair) || pair.length !== 2
						|| typeof pair[0] !== "string"
						|| typeof pair[1] !== "string"
					) {
						found = true;
						console.log(`Bad info at ${prop}.subhierarchy[${i}]`);
						return true;
					}
				})
			))
			|| (test.tables && (
				!Array.isArray(test.tables)
				|| test.tables.some((table, i) => {
					if(typeof table !== "object") {
						found = true;
						console.log(`Non-object table at ${prop}.tables[${i}]`)
						return true;
					} else {
						const { id, headers, types, data, initialColumn, className, nullValue } = table;
						if(
							typeof id !== "string"
							|| typeof className !== "string"
							|| typeof initialColumn !== "number"
							|| !Array.isArray(headers)
							|| !Array.isArray(types)
							|| !Array.isArray(data)
						) {
							found = true;
							console.log(`Simple table error at ${prop}.tables[${i}]`)
							return true;
						} else if (
							headers.length !== types.length
							|| headers.some(header => typeof header !== "string")
							|| types.some(type => ["gp", "gp+", "lbs", "lbs+", "bonus", "num", null, 0].indexOf(type) === -1)
						) {
							found = true;
							console.log(`Header/type table error at ${prop}.tables[${i}]`)
							return true;
						} else if (data.some((line, j) => {
							if(
								!Array.isArray(line)
								|| line.length !== headers.length
								|| line.some((bit, k) => {
									if(
										bit !== null
										&& typeof bit !== "string"
										&& typeof bit !== "number"
										&& (
											!Array.isArray(bit)
											|| bit.length !== 2
											|| typeof bit[1] !== "string"
											|| (
												typeof bit[0] !== "string"
												&& typeof bit[0] !== "number"
										))
									) {
										found = true;
										console.log(`Invalid "main" entry at ${prop}.tables[${i}][${j}][${k}] -> ${line}`);
										return true;
									}
								})
							) {
								found || console.log(`Invalid "main" entry at ${prop}.tables[${i}][${j}] -> ${line}`);
								found = true;
								return true;
							}
						})) {
							return true;
						}
					}
					return false;
				})
			))
		) {
			found || console.log(`Basic problem with ${prop}`);
			found = true;
			return true;
		}
		return false;
	})) {
		return;
	}
	console.log("Test passed.");
}

basics.forEach((data, i) => isGood(data, whats[i]));
