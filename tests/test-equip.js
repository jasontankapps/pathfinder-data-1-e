import ar from '../src/json/equipment_alchemical_reagents.json' assert {type: 'json'};
import armor from '../src/json/equipment_armor.json' assert {type: 'json'};
import ae from '../src/json/equipment_armor_enhancements.json' assert {type: 'json'};
import misc1 from '../src/json/equipment_misc.json' assert {type: 'json'};
import misc2 from '../src/json/equipment_misc2.json' assert {type: 'json'};
import misc3 from '../src/json/equipment_misc3.json' assert {type: 'json'};
import poi from '../src/json/equipment_poisons.json' assert {type: 'json'};
import se from '../src/json/equipment_siege_engines.json' assert {type: 'json'};
import sm from '../src/json/equipment_special_materials.json' assert {type: 'json'};
import sb from '../src/json/equipment_spellbooks.json' assert {type: 'json'};
import ta from '../src/json/equipment_tech_armor.json' assert {type: 'json'};
import tf from '../src/json/equipment_tech_artifacts.json' assert {type: 'json'};
import tc from '../src/json/equipment_tech_cybertech.json' assert {type: 'json'};
import tm from '../src/json/equipment_tech_misc.json' assert {type: 'json'};
import tp from '../src/json/equipment_tech_pharmaceuticals.json' assert {type: 'json'};
import tw from '../src/json/equipment_tech_weapons.json' assert {type: 'json'};
import weap from '../src/json/equipment_weapons.json' assert {type: 'json'};
import we from '../src/json/equipment_weapon_enhancements.json' assert {type: 'json'};

const equipment = [
	ar,
	armor,
	ae, {...misc1, ...misc2, ...misc3}, poi, se, sm, sb,
	ta, tf, tc, tm, tp, tw,
	weap, we
];

const whats = [
	"alchemical reagents",
	"armor",
	"armor enhancements",
	"misc",
	"poison",
	"siege engines",
	"special materials",
	"spellbooks",
	"tech armor",
	"tech artifacts",
	"tech cybertech",
	"tech misc",
	"tech pharmaceuticals",
	"tech weapons",
	"weapons",
	"weapon enhancements"
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

equipment.forEach((data, i) => isGood(data, whats[i]));
