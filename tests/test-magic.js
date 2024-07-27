import magic_altar from '../src/json/magic_altar.json' assert {type: 'json'};
import magic_armor from '../src/json/magic_armor.json' assert {type: 'json'};
import magic_artifact1 from '../src/json/magic_artifact.json' assert {type: 'json'};
import magic_artifact2 from '../src/json/magic_artifact2.json' assert {type: 'json'};
import magic_demonic_implants from '../src/json/magic_demonic_implants.json' assert {type: 'json'};
import magic_devil_talismans from '../src/json/magic_devil_talismans.json' assert {type: 'json'};
import magic_elemental_augmentations from '../src/json/magic_elemental_augmentations.json' assert {type: 'json'};
import magic_enhancements from '../src/json/magic_enhancements.json' assert {type: 'json'};
import magic_favor from '../src/json/magic_favor.json' assert {type: 'json'};
import magic_fleshcrafting from '../src/json/magic_fleshcrafting.json' assert {type: 'json'};
import magic_fungal_grafts from '../src/json/magic_fungal_grafts.json' assert {type: 'json'};
import magic_infused_poisons from '../src/json/magic_infused_poisons.json' assert {type: 'json'};
import magic_ioun_stones from '../src/json/magic_ioun_stones.json' assert {type: 'json'};
import magic_juju_fetishes from '../src/json/magic_juju_fetishes.json' assert {type: 'json'};
import magic_necrografts from '../src/json/magic_necrografts.json' assert {type: 'json'};
import magic_necrotoxins from '../src/json/magic_necrotoxins.json' assert {type: 'json'};
import magic_plant from '../src/json/magic_plant.json' assert {type: 'json'};
import magic_relics from '../src/json/magic_relics.json' assert {type: 'json'};
import magic_ring from '../src/json/magic_ring.json' assert {type: 'json'};
import magic_rod from '../src/json/magic_rod.json' assert {type: 'json'};
import magic_set from '../src/json/magic_set.json' assert {type: 'json'};
import magic_shadow_piercings from '../src/json/magic_shadow_piercings.json' assert {type: 'json'};
import magic_staff from '../src/json/magic_staff.json' assert {type: 'json'};
import magic_tattoo from '../src/json/magic_tattoo.json' assert {type: 'json'};
import magic_throne from '../src/json/magic_throne.json' assert {type: 'json'};
import magic_weapon1 from '../src/json/magic_weapon.json' assert {type: 'json'};
import magic_weapon2 from '../src/json/magic_weapon2.json' assert {type: 'json'};
import magic_wondrous1 from '../src/json/magic_wondrous.json' assert {type: 'json'};
import magic_wondrous2 from '../src/json/magic_wondrous2.json' assert {type: 'json'};
import magic_wondrous3 from '../src/json/magic_wondrous3.json' assert {type: 'json'};
import magic_wondrous4 from '../src/json/magic_wondrous4.json' assert {type: 'json'};
import magic_wondrous5 from '../src/json/magic_wondrous5.json' assert {type: 'json'};
import magic_wondrous6 from '../src/json/magic_wondrous6.json' assert {type: 'json'};
import magic_wondrous7 from '../src/json/magic_wondrous7.json' assert {type: 'json'};

const magic = [
	magic_armor,
	{
		...magic_altar,
		...magic_demonic_implants,
		...magic_devil_talismans,
		...magic_elemental_augmentations,
		...magic_favor,
		...magic_fleshcrafting,
		...magic_fungal_grafts,
		...magic_infused_poisons,
		...magic_juju_fetishes,
		...magic_necrografts,
		...magic_necrotoxins,
		...magic_plant,
		...magic_relics,
		...magic_shadow_piercings,
		...magic_set,
		...magic_throne,
		...magic_tattoo,
	},
	{...magic_artifact1, ...magic_artifact2},
	magic_enhancements,
	magic_ioun_stones,
	magic_ring,
	magic_rod,
	magic_staff,
	{...magic_weapon1, ...magic_weapon2},
	{
		...magic_wondrous1, ...magic_wondrous2, ...magic_wondrous3, ...magic_wondrous4, ...magic_wondrous5,
		...magic_wondrous6, ...magic_wondrous7
	}
];

const whats = [
	"magic_armor",
	"magic_misc",
	"magic_artifact",
	"magic_enhancements",
	"magic_ioun_stones",
	"magic_ring",
	"magic_rod",
	"magic_staff",
	"magic_weapon",
	"magic_wondrous"
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

magic.forEach((data, i) => isGood(data, whats[i]));

/*const set = new Set();
const record = {};

magic.forEach((data, i) => {
	Object.keys(data).forEach(prop => {
		if(prop === "unknown") {
			return;
		} else if (set.has(prop)) {
			console.log(`${whats[i]}.${prop} duplicates ${whats[record[prop]]}`);
		} else {
			set.add(prop);
			record[prop] = i;
		}
	});
});*/
