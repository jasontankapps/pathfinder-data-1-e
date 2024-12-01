import spells1 from '../json/spells.json' assert {type: 'json'};
import spells2 from '../json/spells2.json' assert {type: 'json'};
import spells3 from '../json/spells3.json' assert {type: 'json'};
import spells4 from '../json/spells4.json' assert {type: 'json'};
import spells5 from '../json/spells5.json' assert {type: 'json'};
import spells6 from '../json/spells6.json' assert {type: 'json'};
import spells7 from '../json/spells7.json' assert {type: 'json'};
import spells8 from '../json/spells8.json' assert {type: 'json'};
import spells9 from '../json/spells9.json' assert {type: 'json'};
import spells10 from '../json/spells10.json' assert {type: 'json'};
import spells11 from '../json/spells11.json' assert {type: 'json'};
import spells12 from '../json/occult_rituals.json' assert {type: 'json'};
import spelldef from '../json/spell_definitions.json' assert {type: 'json'};
import races1 from '../json/races.json' assert {type: 'json'};
import races2 from '../json/races2.json' assert {type: 'json'};
import monsters1 from '../json/monsters_unique.json' assert {type: 'json'};
import monsters2 from '../json/monsters_unique2.json' assert {type: 'json'};
import monsters3 from '../json/monsters_unique3.json' assert {type: 'json'};
import monsters4 from '../json/mythic_monsters.json' assert {type: 'json'};
import monsters5 from '../json/monsters01.json' assert {type: 'json'};
import monsters6 from '../json/monsters02.json' assert {type: 'json'};
import monsters7 from '../json/monsters03.json' assert {type: 'json'};
import monsters8 from '../json/monsters04.json' assert {type: 'json'};
import monsters9 from '../json/monsters05.json' assert {type: 'json'};
import monsters10 from '../json/monsters06.json' assert {type: 'json'};
import monsters11 from '../json/monsters07.json' assert {type: 'json'};
import monsters12 from '../json/monsters08.json' assert {type: 'json'};
import monsters13 from '../json/monsters09.json' assert {type: 'json'};
import monsters14 from '../json/monsters10.json' assert {type: 'json'};
import monsters15 from '../json/monsters11.json' assert {type: 'json'};
import monsters16 from '../json/monsters12.json' assert {type: 'json'};
import monsters17 from '../json/monsters13.json' assert {type: 'json'};
import monsters18 from '../json/monsters14.json' assert {type: 'json'};
import monsters19 from '../json/monsters15.json' assert {type: 'json'};
import monsters20 from '../json/monsters16.json' assert {type: 'json'};
import monsters21 from '../json/monsters17.json' assert {type: 'json'};
import monsters22 from '../json/monsters18.json' assert {type: 'json'};
import monsters23 from '../json/monsters19.json' assert {type: 'json'};
import monsters24 from '../json/monsters20.json' assert {type: 'json'};
import monsters25 from '../json/monsters21.json' assert {type: 'json'};
import monsters26 from '../json/monsters22.json' assert {type: 'json'};
import monsters27 from '../json/monsters23.json' assert {type: 'json'};
import monsters28 from '../json/monsters24.json' assert {type: 'json'};
import monsters29 from '../json/monsters25.json' assert {type: 'json'};
import npcs1 from '../json/npcs.json' assert {type: 'json'};
import npcs2 from '../json/npcs2.json' assert {type: 'json'};
import npcs3 from '../json/npcs3.json' assert {type: 'json'};
import npcs4 from '../json/npcs4.json' assert {type: 'json'};
import faiths1 from '../json/faiths.json' assert {type: 'json'};
import faiths2 from '../json/faiths2.json' assert {type: 'json'};
import faiths3 from '../json/faiths3.json' assert {type: 'json'};
import feats1 from '../json/feats.json' assert {type: 'json'};
import feats2 from '../json/feats2.json' assert {type: 'json'};
import feats3 from '../json/feats3.json' assert {type: 'json'};
import feats4 from '../json/feats4.json' assert {type: 'json'};
import feats5 from '../json/feats5.json' assert {type: 'json'};
import feats6 from '../json/feats6.json' assert {type: 'json'};
import feats7 from '../json/feats7.json' assert {type: 'json'};
import feats8 from '../json/feats8.json' assert {type: 'json'};
import traits1 from '../json/traits.json' assert {type: 'json'};
import traits2 from '../json/traits2.json' assert {type: 'json'};
import traits3 from '../json/traits3.json' assert {type: 'json'};
import classAbs1 from '../json/class_abilities.json' assert {type: 'json'};
import classAbs2 from '../json/class_abilities2.json' assert {type: 'json'};
import classAbs3 from '../json/class_abilities3.json' assert {type: 'json'};
import other1 from '../json/prestige_classes.json' assert {type: 'json'};
import other2 from '../json/prestige_classes2.json' assert {type: 'json'};
import other3 from '../json/prestige_classes3.json' assert {type: 'json'};
import other4 from '../json/sidekicks.json' assert {type: 'json'};
import other5 from '../json/npc_classes.json' assert {type: 'json'};
import umr from '../json/umr.json' assert {type: 'json'};
import traps from '../json/traps.json' assert {type: 'json'};
import skills from '../json/skills.json' assert {type: 'json'};

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

// basics.forEach((data, i) => isGood(data, whats[i]));

const basicsTest = () => basics.map((data, i) => isGood(data, whats[i]));

export default basicsTest;
