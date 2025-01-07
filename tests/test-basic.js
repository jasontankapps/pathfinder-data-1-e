import { basic_data_by_link } from '../basic_data_groups.js';

const {
	spell, spelldef, monster, npc, race,
	faith, feat, trait, family, template,
	subtype, type: mtype, ability,
	prestigeclass, sidekick, npcclass,
	umr, trap, skill, arcaneschool,
	aspect, bardicmasterpiece, blessing,
	bloodragerbloodline, oraclecurse,
	discipline, domain, druidcompanion,
	druiddomain, emotionalfocus, exploit,
	greaterexploit, hellknightorder,
	implement, inquisition, kinetic,
	legendaryspirit, magusarcana, mystery,
	oath, order, outsiderspirit, ragepower,
	shamanspirit, sorcererbloodline,
	spirit, stanceragepower
} = basic_data_by_link;

const basics = [
	spell,
	spelldef,
	monster,
	family,
	template,
	{...mtype, ...subtype},
	npc,
	race,
	faith,
	feat,
	trait,
	ability,
	{...prestigeclass, ...sidekick, ...npcclass},
	umr,
	trap,
	skill,
	arcaneschool,
	aspect,
	bardicmasterpiece,
	blessing,
	bloodragerbloodline,
	oraclecurse,
	discipline,
	domain,
	druidcompanion,
	druiddomain,
	emotionalfocus,
	{...exploit, ...greaterexploit},
	hellknightorder,
	implement,
	inquisition,
	kinetic,
	magusarcana,
	mystery,
	oath,
	order,
	{...ragepower, ...stanceragepower},
	shamanspirit,
	sorcererbloodline,
	{...spirit, ...outsiderspirit, ...legendaryspirit}
];

const whats = [
	"spells",
	"spell definitions",
	"monsters",
	"monster families",
	"monster templates",
	"creature types/subtypes",
	"npcs",
	"races",
	"faiths",
	"feats",
	"traits",
	"class abilities",
	"\"other\" classes",
	"universal monster rules",
	"traps",
	"skills",
	"arcane schools",
	"shifter aspects",
	"bardic masterpieces",
	"warpriest blessings",
	"bloodrager bloodlines",
	"oracle curses",
	"psychic disciplines",
	"domains",
	"druid companions",
	"druid domains",
	"phantom emotional foci",
	"arcanist exploits",
	"hellknight orders",
	"occultist implements",
	"inquisitions",
	"kinetic wild talents",
	"magus arcana",
	"oracle mysteries",
	"oaths",
	"cavalier/samurai orders",
	"rage powers",
	"shaman spirits",
	"sorcerer bloodlines",
	"medium spirits"
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
		return [true, what, msg];
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
						const { id, headers, types, alignments, sizes, data, initialColumn, nullValue, filter } = table;
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
							filter && (
								!Array.isArray(filter)
								|| filter.some(f => {
									if(!f || typeof f !== "object") {
										return true;
									} else if (f.col === undefined) {
										found = true;
										msg.push(`Filter missing "col" prop in ${prop}.tables[${i}]`);
										return true;
									} else if (f.range && (
										!Array.isArray(f.range)
										|| f.range.length !== 2
										|| f.range.some(s => typeof(s) !== "number")
										|| f.range[0] >= f.range[1]
									)) {
										found = true;
										msg.push(`Filter has incorrect "range" prop in ${prop}.tables[${i}]`);
										return true;
									} else if (f.equals && (!Array.isArray(f.equals) || f.equals.some(x => typeof x !== "string" && typeof x !== "number"))) {
										found = true;
										msg.push(`Filter has bad "equals" prop in ${prop}.tables[${i}]`);
										return true;
									} else if (f.has && (!Array.isArray(f.has) || f.has.some(x => typeof x !== "string"))) {
										found = true;
										msg.push(`Filter has bad "has" prop in ${prop}.tables[${i}]`);
										return true;
									} else if (f.labels && (!Array.isArray(f.labels) || f.labels.some(x => typeof x !== "string"))) {
										found = true;
										msg.push(`Filter has bad "labels" prop in ${prop}.tables[${i}]`);
										return true;
									}
									return false;
								})
							)
						) {
							if(!found) {
								msg.push(`Bad filter property at ${prop}.tables[${i}]`);
							}
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
	} else {
		found = true;
	}
	return [found, what, msg];
}

// basics.forEach((data, i) => isGood(data, whats[i]));

const basicsTest = () => basics.map((data, i) => isGood(data, whats[i]));

export default basicsTest;
