import { basic_data_by_link } from '../basic_data_groups.js';

const {
	equipmentreagent,
	equipmentarmor,
	equipmentarmorenhancement,
	equipmentmisc,
	equipmentpoison,
	equipmentsiegeengine,
	equipmentmaterial,
	equipmentspellbook,
	techarmor,
	techartifact,
	techcybertech,
	techmisc,
	techpharmaceutical,
	techweapon,
	equipmentweapon,
	equipmentweaponenhancement
} = basic_data_by_link;

const equipment = [
	equipmentreagent,
	equipmentarmor,
	equipmentarmorenhancement,
	equipmentmisc,
	equipmentpoison,
	equipmentsiegeengine,
	equipmentmaterial,
	equipmentspellbook,
	techarmor,
	techartifact,
	techcybertech,
	techmisc,
	techpharmaceutical,
	techweapon,
	equipmentweapon,
	equipmentweaponenhancement
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
	const msg = [ "\n...beginning test: [" + what + "]\n" ];
	if(!object.not_found) {
		msg.push("Missing 'not_found' entry.");
		return msg;
	}
	let found = false;
	if(!Object.entries(object).some(([prop, value]) => {
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
						msg.push(`Bad info at ${prop}.subhierarchy[${i}]`);
						return true;
					}
				})
			))
			|| (test.tables && (
				!Array.isArray(test.tables)
				|| test.tables.some((table, i) => {
					if(typeof table !== "object") {
						found = true;
						msg.push(`Non-object table at ${prop}.tables[${i}]`)
						return true;
					} else {
						const { id, headers, types, alignments, data, sizes, initialColumn, nullValue } = table;
						if(
							typeof id !== "string"
							|| typeof initialColumn !== "number"
							|| !Array.isArray(headers)
							|| !Array.isArray(types)
							|| !Array.isArray(data)
							|| (nullValue && typeof nullValue !== "string")
						) {
							found = true;
							msg.push(`Simple table error at ${prop}.tables[${i}]`)
							return true;
						} else if (
							headers.length !== types.length
							|| headers.some(header => typeof header !== "string")
							|| types.some(type => ["gp", "gp+", "lbs", "lbs+", "bonus", "num", null, 0].indexOf(type) === -1)
						) {
							found = true;
							msg.push(`Header/type table error at ${prop}.tables[${i}]`)
							return true;
						} else if (
							alignments !== undefined && (
								!Array.isArray(alignments)
								|| alignments.length !== types.length
								|| alignments.some(align => [null, true, false].indexOf(align) === -1)
							)
						) {
							found = true;
							msg.push(`Alignment array table error at ${prop}.tables[${i}]`)
							return true;
						} else if (
							sizes !== undefined && (
								Array.isArray(sizes) ?
									sizes.length !== types.length
									|| sizes.some(size => typeof size !== "number")
								: typeof sizes !== "number"
							)
						) {
							found = true;
							msg.push(`Error with sizes property at ${prop}.tables[${i}]`)
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
										msg.push(`Invalid "main" entry at ${prop}.tables[${i}][${j}][${k}] -> ${line}`);
										return true;
									}
								})
							) {
								found || msg.push(`Invalid "main" entry at ${prop}.tables[${i}][${j}] -> ${line}`);
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
			found || msg.push(`Basic problem with ${prop}`);
			found = true;
			return true;
		}
		return false;
	})) {
		msg.push("Test passed.");
	} else { found = true; }
	return [found, what, msg];
}

// equipment.forEach((data, i) => isGood(data, whats[i]));

const equipTest = () => equipment.map((data, i) => isGood(data, whats[i]));

export default equipTest;
