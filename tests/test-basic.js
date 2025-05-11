import { basic_data_by_link } from '../basic_data_groups.js';
import checkForBadTables from './checkForBadTables.js';

const {
	spell, spelldef, monster, npc, race,
	faith, feat, trait, family, template,
	subtype, type: mtype, ability,
	pclass, sidekick, npcclass,
	umr, trap, skill, arcaneschool,
	aspect, masterpiece, blessing,
	blrgbloodline, oraclecurse,
	discipline, domain, druidcompanion,
	druiddomain, emotionalfocus,
	exploit, hkorder, performance,
	implement, inquisition, kinetic,
	arcana, mystery,
	oath, order, ragepower,
	shamanspirit, sorcbloodline,
	spirit, discovery, eidolon,
	patron, arcanedisc,
	rangertrap, evolution, stylestrike,
	unchevolution, kipower, deed,
	swashdeed, hkdiscipline, talent,
	phrenicamp, vigtalent,
	slayertalent, trick, stare, hex,
	soctalent, invtalent,
	ninjatrick, shamanhex, class: classes,
	eqreagent, eqarmor, eqarmorenh, eqmisc,
	eqpoison, eqsiegeengine, eqmaterial,
	eqspellbook, techarmor, techartifact,
	techcyber, techmisc,
	techpharma, techweapon,
	eqweapon, eqweaponenh, magicarmor,
	magicartifact, magicenh, magicioun,
	magicring, magicrod, magicstaff,
	magicweapon, magicwondrous, magicaltar,
	magicimplant, magictalisman,
	magicaug, magicfavor,
	magicfleshcraft, magicgraft,
	magicpoison, magicfetish,
	magicnecrograft, magicnecrotoxin,
	magicplant, magicrelic, magicpiercing,
	magicset, magicthrone, magictattoo,
	main, misc
} = basic_data_by_link;

const $Basics = [
	main,
	classes,
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
	{...pclass, ...sidekick, ...npcclass},
	umr,
	trap,
	skill,
	arcaneschool,
	aspect,
	masterpiece,
	performance,
	blessing,
	blrgbloodline,
	oraclecurse,
	discipline,
	domain,
	druidcompanion,
	druiddomain,
	emotionalfocus,
	exploit,
	hkorder,
	implement,
	inquisition,
	kinetic,
	arcana,
	mystery,
	oath,
	order,
	ragepower,
	shamanspirit,
	sorcbloodline,
	spirit,
	discovery,
	eidolon,
	patron,
	rangertrap,
	evolution,
	unchevolution,
	stylestrike,
	kipower,
	deed,
	swashdeed,
	hkdiscipline,
	phrenicamp,
	vigtalent,
	talent,
	slayertalent,
	trick,
	stare,
	soctalent,
	invtalent,
	ninjatrick,
	hex,
	shamanhex,
	arcanedisc,
	eqreagent,
	eqarmor,
	eqarmorenh,
	eqmisc,
	eqpoison,
	eqsiegeengine,
	eqmaterial,
	eqspellbook,
	techarmor,
	techartifact,
	techcyber,
	techmisc,
	techpharma,
	techweapon,
	eqweapon,
	eqweaponenh,
	magicarmor,
	magicartifact,
	magicenh,
	magicioun,
	magicring,
	magicrod,
	magicstaff,
	magicweapon,
	magicwondrous,
	{
		...magicaltar,
		...magicimplant,
		...magictalisman,
		...magicaug,
		...magicfavor,
		...magicfleshcraft,
		...magicgraft,
		...magicpoison,
		...magicfetish,
		...magicnecrograft,
		...magicnecrotoxin,
		...magicplant,
		...magicrelic,
		...magicpiercing,
		...magicset,
		...magicthrone,
		...magictattoo
	},
	misc
];

const $Whats = [
	"\"Main\" files",
	"PC classes",
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
	"NPC classes and sidekicks",
	"universal monster rules",
	"traps",
	"skills",
	"arcane schools",
	"shifter aspects",
	"bardic masterpieces",
	"bardic performances",
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
	"medium spirits",
	"alchemist discoveries",
	"unchained eidolon subtypes",
	"witch patrons",
	"ranger traps",
	"eidolon evolutions",
	"unchained eidolon evolutions",
	"style strikes",
	"ki powers",
	"gunslinger deeds",
	"swashbuckler deeds",
	"hellknight disciplines",
	"phrenic amplifications",
	"vigilante talents",
	"social talents",
	"investigator talents",
	"rogue talents",
	"slayer talents",
	"mesmerist tricks",
	"bold stares",
	"ninja tricks",
	"witch hexes",
	"shaman hexes",
	"arcane discoveries",
	"alchemical reagents",
	"armor",
	"armor enhancements",
	"misc. equipment",
	"poison",
	"siege engines",
	"special materials",
	"spellbooks",
	"tech armor",
	"tech artifacts",
	"tech cybertech",
	"tech (misc.)",
	"tech pharmaceuticals",
	"tech weapons",
	"weapons",
	"weapon enhancements",
	"magic armor",
	"artifacts",
	"magical enhancements",
	"ioun stones",
	"magic rings",
	"magic rods",
	"magic staves",
	"magic weapons",
	"wondrous items",
	"misc. magic items",
	"misc. topics"
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

function isGood(object, what, index) {
	const msg = [ "\n...beginning test: [" + what + "]\n" ];
	if(index && !object.not_found) {
		// Ignore index 0 - main.json files do not need not_found props
		msg.push("Missing 'not_found' entry.");
		return [true, what, msg];
	}
	let found = false;
	if(!Object.entries(object).some(([prop, value]) => {
		const { copyof, ...etc } = value;
		const test = copyof ? getCopyOf(object, copyof, etc) : etc;
		if(test && test.alternateOf) {
			const {alternateOf} = test;
			if(!alternateOf|| alternateOf === prop || !object[alternateOf] || object[alternateOf].alternateOf ) {
				msg.push("Invalid alternateOf property of " + prop);
				found = true;
				return true;
			}
		} else if (!copyof && test.tables) {
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

// $Basics.forEach((data, i) => isGood(data, $Whats[i]));

const basicsTest = () => $Basics.map((data, i) => isGood(data, $Whats[i], i));

export default basicsTest;
