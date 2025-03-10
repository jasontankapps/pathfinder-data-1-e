import { basic_data_by_link } from '../basic_data_groups.js';
import checkForBadTables from './checkForBadTables.js';

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
			|| (test.backwardsLink && (
				!Array.isArray(test.backwardsLink)
				|| test.backwardsLink.length !== 2
				|| test.backwardsLink.some(bit => typeof bit !== "string")
			))
		) {
			found || msg.push(`Basic problem with ${prop}`);
			found = true;
			return true;
		} else if (test.tables) {
			const result = checkForBadTables(test.tables, what + "." + prop);
			result && msg.push(result);
			return result;
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
