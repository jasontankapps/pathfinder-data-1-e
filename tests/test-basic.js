import spells1 from '../src/json/spells.json' assert {type: 'json'};
import spells2 from '../src/json/spells2.json' assert {type: 'json'};
import spells3 from '../src/json/spells3.json' assert {type: 'json'};
import spells4 from '../src/json/spells4.json' assert {type: 'json'};
import spells5 from '../src/json/spells5.json' assert {type: 'json'};
import spells6 from '../src/json/spells6.json' assert {type: 'json'};
import spells7 from '../src/json/spells7.json' assert {type: 'json'};
import spells8 from '../src/json/spells8.json' assert {type: 'json'};
import spells9 from '../src/json/spells9.json' assert {type: 'json'};
import spells10 from '../src/json/spells10.json' assert {type: 'json'};
import spells11 from '../src/json/spells11.json' assert {type: 'json'};
import spells12 from '../src/json/occult_rituals.json' assert {type: 'json'};
import spelldef from '../src/json/spell_definitions.json' assert {type: 'json'};
import races1 from '../src/json/races.json' assert {type: 'json'};
import races2 from '../src/json/races2.json' assert {type: 'json'};
import monsters1 from '../src/json/monsters_unique.json' assert {type: 'json'};
import monsters2 from '../src/json/monsters_unique2.json' assert {type: 'json'};
import monsters3 from '../src/json/monsters_unique3.json' assert {type: 'json'};
import monsters4 from '../src/json/mythic_monsters.json' assert {type: 'json'};
import monsters5 from '../src/json/monsters01.json' assert {type: 'json'};
import monsters6 from '../src/json/monsters02.json' assert {type: 'json'};
import monsters7 from '../src/json/monsters03.json' assert {type: 'json'};
import monsters8 from '../src/json/monsters04.json' assert {type: 'json'};
import monsters9 from '../src/json/monsters05.json' assert {type: 'json'};
import monsters10 from '../src/json/monsters06.json' assert {type: 'json'};
import monsters11 from '../src/json/monsters07.json' assert {type: 'json'};
import monsters12 from '../src/json/monsters08.json' assert {type: 'json'};
import monsters13 from '../src/json/monsters09.json' assert {type: 'json'};
import monsters14 from '../src/json/monsters10.json' assert {type: 'json'};
import monsters15 from '../src/json/monsters11.json' assert {type: 'json'};
import monsters16 from '../src/json/monsters12.json' assert {type: 'json'};
import monsters17 from '../src/json/monsters13.json' assert {type: 'json'};
import monsters18 from '../src/json/monsters14.json' assert {type: 'json'};
import monsters19 from '../src/json/monsters15.json' assert {type: 'json'};
import monsters20 from '../src/json/monsters16.json' assert {type: 'json'};
import monsters21 from '../src/json/monsters17.json' assert {type: 'json'};
import monsters22 from '../src/json/monsters18.json' assert {type: 'json'};
import monsters23 from '../src/json/monsters19.json' assert {type: 'json'};
import monsters24 from '../src/json/monsters20.json' assert {type: 'json'};
import monsters25 from '../src/json/monsters21.json' assert {type: 'json'};
import monsters26 from '../src/json/monsters22.json' assert {type: 'json'};
import monsters27 from '../src/json/monsters23.json' assert {type: 'json'};
import monsters28 from '../src/json/monsters24.json' assert {type: 'json'};
import monsters29 from '../src/json/monsters25.json' assert {type: 'json'};
import npcs1 from '../src/json/npcs.json' assert {type: 'json'};
import npcs2 from '../src/json/npcs2.json' assert {type: 'json'};
import npcs3 from '../src/json/npcs3.json' assert {type: 'json'};
import npcs4 from '../src/json/npcs4.json' assert {type: 'json'};
import faiths1 from '../src/json/faiths.json' assert {type: 'json'};
import faiths2 from '../src/json/faiths2.json' assert {type: 'json'};
import faiths3 from '../src/json/faiths3.json' assert {type: 'json'};
import feats1 from '../src/json/feats.json' assert {type: 'json'};
import feats2 from '../src/json/feats2.json' assert {type: 'json'};
import feats3 from '../src/json/feats3.json' assert {type: 'json'};
import feats4 from '../src/json/feats4.json' assert {type: 'json'};
import feats5 from '../src/json/feats5.json' assert {type: 'json'};
import feats6 from '../src/json/feats6.json' assert {type: 'json'};
import feats7 from '../src/json/feats7.json' assert {type: 'json'};
import feats8 from '../src/json/feats8.json' assert {type: 'json'};
import traits1 from '../src/json/traits.json' assert {type: 'json'};
import traits2 from '../src/json/traits2.json' assert {type: 'json'};
import traits3 from '../src/json/traits3.json' assert {type: 'json'};
import classAbs1 from '../src/json/class_abilities.json' assert {type: 'json'};
import classAbs2 from '../src/json/class_abilities2.json' assert {type: 'json'};
import classAbs3 from '../src/json/class_abilities3.json' assert {type: 'json'};
import other1 from '../src/json/prestige_classes.json' assert {type: 'json'};
import other2 from '../src/json/prestige_classes2.json' assert {type: 'json'};
import other3 from '../src/json/prestige_classes3.json' assert {type: 'json'};
import other4 from '../src/json/sidekicks.json' assert {type: 'json'};
import other5 from '../src/json/npc_classes.json' assert {type: 'json'};
import umr from '../src/json/umr.json' assert {type: 'json'};
import traps from '../src/json/traps.json' assert {type: 'json'};
import skills from '../src/json/skills.json' assert {type: 'json'};

const basics = [
	{
		...spells1, ...spells2, ...spells3, ...spells4, ...spells5,
		...spells6, ...spells7, ...spells8, ...spells9, ...spells10,
		...spells11, ...spells12
	},
	spelldef,
	{
		...monsters1, ...monsters2, ...monsters3, ...monsters4, ...monsters5,
		...monsters6, ...monsters7, ...monsters8, ...monsters9, ...monsters10,
		...monsters11, ...monsters12, ...monsters13, ...monsters14, ...monsters15,
		...monsters16, ...monsters17, ...monsters18, ...monsters19, ...monsters20,
		...monsters21, ...monsters22, ...monsters23, ...monsters24, ...monsters25,
		...monsters26, ...monsters27, ...monsters28, ...monsters29
	},
	{...npcs1, ...npcs2, ...npcs3, ...npcs4},
	{...races1, ...races2},
	{...faiths1, ...faiths2, ...faiths3},
	{...feats1, ...feats2, ...feats3, ...feats4, ...feats5, ...feats6, ...feats7, ...feats8},
	{...traits1, ...traits2, ...traits3},
	{...classAbs1, ...classAbs2, ...classAbs3},
	{...other1, ...other2, ...other3, ...other4, ...other5},
	umr,
	traps,
	skills
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
	"class abilities",
	"\"other\" classes",
	"universal monster rules",
	"traps",
	"skills"
];

function getCopyOf (object, copiedProp, etc, counter = 0) {
	(counter > 80) && console.log(`${copiedProp}, ${Object.keys(etc).join(", ")}`);
	const maybe = object[copiedProp];
	if(!maybe) { return false; }
	const final = {...maybe, ...etc};
	if(final.copyof) {
		if(counter > 100) {
			console.log(`Death spiral loop checking "${copiedProp}".`);
			return false;
		}
		const { copyof, ...rest } = final
		return getCopyOf(object, copyof, rest, counter + 1);
	}
	return final;
}

function isGood(object, what) {
	console.log("\n...beginning test: [" + what + "]\n");
	if(!object.not_found) {
		console.log("Missing 'not_found' entry.");
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
							|| (nullValue && typeof nullValue !== "string")
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
