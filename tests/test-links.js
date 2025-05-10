import { basic_data_by_link } from '../basic_data_groups.js';
import checkForEncodedLink from './checkForEncodedLink.js';
import featTreeData from '../json/feat_tree_data.json' with {type: 'json'};

const {
	source: allsources,
	archetypealchemist,
	archetypeantipaladin,
	archetypearcanist,
	archetypebarbarian,
	archetypebard,
	archetypebloodrager,
	archetypebrawler,
	archetypecavalier,
	archetypecleric,
	archetypecompanion,
	archetypedruid,
	archetypefamiliar,
	archetypefighter,
	archetypegunslinger,
	archetypehunter,
	archetypeinquisitor,
	archetypeinvestigator,
	archetypekineticist,
	archetypemagus,
	archetypemedium,
	archetypemesmerist,
	archetypemonk,
	archetypeninja,
	archetypeoccultist,
	archetypeoracle,
	archetypepaladin,
	archetypepsychic,
	archetyperanger,
	archetyperogue,
	archetypesamurai,
	archetypeshaman,
	archetypeshifter,
	archetypeskald,
	archetypeslayer,
	archetypesorcerer,
	archetypespiritualist,
	archetypesummoner,
	archetypeunchained_summoner,
	archetypeswashbuckler,
	archetypevigilante,
	archetypewarpriest,
	archetypewitch,
	archetypewizard,
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
	constructmod,
	corruption,
	curse,
	disease,
	drug,
	eqreagent,
	eqarmor,
	eqarmorenh,
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
	haunt,
	infestation,
	madness,
	magicaltar,
	magicarmor,
	magicimplant,
	magictalisman,
	magicaug,
	magicenh,
	magicfavor,
	magicfleshcraft,
	magicgraft,
	magicpoison,
	magicioun,
	magicfetish,
	magicnecrograft,
	magicnecrotoxin,
	magicplant,
	magicrelic,
	magicring,
	magicrod,
	magicset,
	magicpiercing,
	magicstaff,
	magictattoo,
	magicthrone,
	misc,
	subtype,
	type: mtype,
	npcclass,
	sidekick,
	skill,
	spelldef,
	trap,
	umr,
	ability,
	class: classes,
	eqmisc,
	faith,
	feat,
	magicartifact,
	magicweapon,
	magicwondrous,
	main,
	monster,
	template,
	npc,
	pclass,
	race,
	rule,
	spell,
	trait,
	family,
	talent,
	slayertalent,
	invtalent,
	soctalent,
	vigtalent,
	trick,
	stare,
	ninjatrick,
	hex,
	shamanhex,
	discovery,
	arcanedisc,
	phrenicamp,
	deed,
	swashdeed,
	hkdiscipline,
	kipower,
	stylestrike,
	evolution,
	unchevolution,
	eidolon,
	patron,
	rangertrap
} = basic_data_by_link;

const $All = [
	["main", main],
	["arc-alchemist", archetypealchemist], ["arc-antipaladin", archetypeantipaladin],
	["arc-arcanist", archetypearcanist], ["arc-barbarian", archetypebarbarian],
	["arc-bard", archetypebard], ["arc-bloodrager", archetypebloodrager],
	["arc-brawler", archetypebrawler], ["arc-cavalier", archetypecavalier],
	["arc-cleric", archetypecleric], ["arc-companion", archetypecompanion],
	["arc-druid", archetypedruid], ["arc-familiar", archetypefamiliar],
	["arc-fighter", archetypefighter], ["arc-gunslinger", archetypegunslinger],
	["arc-hunter", archetypehunter], ["arc-inquisitor", archetypeinquisitor],
	["arc-investigator", archetypeinvestigator], ["arc-kineticist", archetypekineticist],
	["arc-magus", archetypemagus], ["arc-medium", archetypemedium],
	["arc-mesmerist", archetypemesmerist], ["arc-monk", archetypemonk],
	["arc-ninja", archetypeninja],
	["arc-occultist", archetypeoccultist], ["arc-oracle", archetypeoracle],
	["arc-paladin", archetypepaladin], ["arc-psychic", archetypepsychic],
	["arc-ranger", archetyperanger], ["arc-rogue", archetyperogue],
	["arc-samurai", archetypesamurai], ["arc-shaman", archetypeshaman],
	["arc-shifter", archetypeshifter], ["arc-skald", archetypeskald],
	["arc-slayer", archetypeslayer], ["arc-sorcerer", archetypesorcerer],
	["arc-spiritualist", archetypespiritualist], ["arc-summoner", archetypesummoner],
	["arc-unchained_summoner", archetypeunchained_summoner],
	["arc-swashbuckler", archetypeswashbuckler], ["arc-vigilante", archetypevigilante],
	["arc-warpriest", archetypewarpriest], ["arc-witch", archetypewitch],
	["arc-wizard", archetypewizard], ["arcaneschool", arcaneschool], ["aspect", aspect],
	["masterpiece", masterpiece], ["performance", performance], ["blessing", blessing],
	["blrgbloodline", blrgbloodline], ["oraclecurse", oraclecurse],
	["discipline", discipline], ["domain", domain], ["druidcompanion", druidcompanion],
	["druiddomain", druiddomain], ["emotionalfocus", emotionalfocus],
	["exploit", exploit], ["hkorder", hkorder],
	["implement", implement], ["inquisition", inquisition], ["kinetic", kinetic],
	["arcana", arcana], ["mystery", mystery],
	["oath", oath], ["order", order], ["ragepower", ragepower], ["shamanspirit", shamanspirit],
	["sorcbloodline", sorcbloodline], ["spirit", spirit],
	["constructmod", constructmod], ["corruption", corruption],
	["curse", curse], ["disease", disease], ["drug", drug],
	["eq-reagent", eqreagent], ["eq-armor", eqarmor], ["eq-armorenh", eqarmorenh],
	["eq-poison", eqpoison], ["eq-siegeengine", eqsiegeengine],
	["eq-material", eqmaterial], ["eq-spellbook", eqspellbook],
	["tech-armor", techarmor], ["tech-artifact", techartifact], ["tech-cyber", techcyber],
	["tech-misc", techmisc], ["tech-pharma", techpharma],
	["tech-weapon", techweapon], ["eq-weapon", eqweapon],
	["eq-weaponenh", eqweaponenh], ["haunt", haunt],
	["infestation", infestation], ["madness", madness], ["magic-altar", magicaltar],
	["magic-armor", magicarmor], ["magic-implant", magicimplant], ["magic-talisman", magictalisman],
	["magic-aug", magicaug], ["magic-enh", magicenh],
	["magic-favor", magicfavor], ["magic-fleshcraft", magicfleshcraft],
	["magic-graft", magicgraft], ["magic-poison", magicpoison], ["magic-ioun", magicioun],
	["magic-fetish", magicfetish], ["magic-necrograft", magicnecrograft],
	["magic-necrotoxin", magicnecrotoxin], ["magic-plant", magicplant], ["magic-relic", magicrelic],
	["magic-ring", magicring], ["magic-rod", magicrod], ["magic-set", magicset],
	["magic-piercing", magicpiercing], ["magic-staff", magicstaff], ["magic-tattoo", magictattoo],
	["magic-throne", magicthrone], ["misc", misc], ["subtype", subtype], ["type", mtype],
	["npcclass", npcclass], ["sidekick", sidekick],
	["skill", skill], ["spelldef", spelldef], ["trap", trap],
	["umr", umr], ["ability", ability],
	["eq-misc", eqmisc], ["faith", faith], ["feat", feat],
	["magic-artifact", magicartifact], ["magic-weapon", magicweapon],
	["magic-wondrous", magicwondrous], ["monster", monster], ["template", template],
	["rule", rule], ["spell", spell], ["npc", npc], ["pclass", pclass],
	["race", race], ["trait", trait], ["class", classes], ["family", family],
	["talent", talent],	["slayertalent", slayertalent],	["invtalent", invtalent],
	["soctalent", soctalent], ["vigtalent", vigtalent],
	["trick", trick], ["ninjatrick", ninjatrick], ["hex", hex], ["shamanhex", shamanhex],
	["discovery", discovery], ["arcanedisc", arcanedisc],
	["stare", stare], ["phrenicamp", phrenicamp],
	["deed", deed], ["swashdeed", swashdeed], ["hkdiscipline", hkdiscipline],
	["kipower", kipower], ["stylestrike", stylestrike],
	["evolution", evolution], ["unchevolution", unchevolution],
	["eidolon", eidolon], ["patron", patron], ["rangertrap", rangertrap]
];

const $KnownProps = {};

$All.forEach(([link, object]) => {
	// Create master list of links
	$KnownProps[link] = {};
	Object.keys(object).forEach(key => ($KnownProps[link][key] = true));
});

// Ex:
//    $KnownProps.race.ratfolk = true
//    $KnownProps.race.rat = undefined

const parseTree = (tree) => {
	const feats = $KnownProps.feat;
	const found = new Set();
	tree.forEach(leaf => {
		const {prop, coparents = [], coparentsNolink = [], leaves = []} = leaf;
		if(!feats[prop]) {
			found.add(prop);
		}
		coparents.concat(coparentsNolink).forEach(p => (!feats[p] && found.add(p)));
		parseTree(leaves).forEach(l => found.add(l));
	});
	return [...found];
};

const testLinks = () => {
	const msg = [ "\n...beginning link validation tests\n" ];
	let found = false;
	$All.forEach(([link, object]) => {
		// validate links
		// `invalid links in ${link} files:`
		const invalid = [];
		Object.keys(object).forEach(prop => {
			const {sources, tables, description, topLink} = object[prop];
			if(sources !== undefined) {
				if(!sources || !Array.isArray(sources)) {
					msg.push(`\tINVALID ${prop}.sources`);
				} else {
					sources.every(s => {
						if(typeof s !== "string") {
							msg.push(`\tINVALID entry in ${prop}.sources`);
							return false;
						} else if (!allsources[s]) {
							msg.push(`\tINVALID source "${s}" in ${prop}.sources`);
						}
						return true;
					});
				}
			}
			const TESTING = description ? (Array.isArray(description) ? [...description] : [description]) : [];
			const z = (tables || []);
			if(z && !Array.isArray(z)) {
				console.log(">>"+link+">>"+JSON.stringify(z));
			}
			(tables || []).forEach(table => {
				const ripples = table.ripples || [];
				table.data.forEach(row => {
					Array.isArray(row) && TESTING.push(...row.map((bit, i) => {
						if(Array.isArray(bit)) {
							if(bit.length === 3) {
								return `[](${bit[1]})`;
							} else if (ripples.indexOf(i) > -1) {
								return `[](${bit[0]})`;
							}
							const temp = bit[1];
							return typeof temp === "string" ? temp : null;
						}
						return typeof bit === "string" ? bit : null;
					}).filter(bit => bit !== null)); //test new tables
				});
			});
			TESTING.forEach(line => {
				let temp = line;
				let m = false;
				while(m = temp.match(/\]\([/]?([^)]+)[/]([^)/]+)\)(.*$)/)) {
					// Checking [Links](whatever/link)
					if(m) {
						if(m[1] === "source") {
							if(!allsources[m[2]]) {
								invalid.push(m[1] + "/" + m[2]);
							}
						} else if (m[1].match(/^http/)) {
							// Skip
						} else if(!$KnownProps[m[1]] || !$KnownProps[m[1]][m[2]]) {
							invalid.push(m[1] + "/" + m[2]);
						}
						temp = m[3];
					}
				}
				temp = line;
				while(m = temp.match(/\{SOURCE ([^}]+)\}(.*$)/)) {
					// Testing {SOURCE Title/##}
					if (m) {
						m[1].split(/;/).forEach(bit => {
							const xx = bit.match(/([^/]+)([/][-, 0-9]+)?$/);
							if(!xx) {
								msg.push(`\t{SOURCE} error [${bit}]`);
							} else if (!allsources[xx[1]]) {
								invalid.push("{SOURCE " + xx[1] + "}");
							}
						});
						temp = m[2];
					}
				}
				temp = line;
				while(m = temp.match(/::main\[.+?\]\{.*?\bto=([-a-z_]+)[/]([a-z_0-9]+).*?\}(.*$)/)) {
					// Testing ::main[text]{to=some/where}
					if(m[1] === "source") {
						if(!allsources[m[2]]) {
							invalid.push(m[1] + "/" + m[2]);
						}
					} else if(!$KnownProps[m[1]] || !$KnownProps[m[1]][m[2]]) {
						invalid.push(`to=${m[1]}/${m[2]}`);
					}
					temp = m[3];
				}
				temp = line;
				while(m = temp.match(/:ripple\[(.+?)(?<!\\)\](.*$)/)) {
					// Testing :ripple[link/text]
					const q = checkForEncodedLink(m[1].replace(/\\/g, ""), { bare: true });
					if(!q) {
						invalid.push(`:ripple[${m[1]}]`)
					} else {
						let [, link, , , protocol, property] = q;
						if(protocol === "source") {
							if(!allsources[property]) {
								invalid.push(`:ripple[${link}]`);
							}
						} else if(!$KnownProps[protocol] || !$KnownProps[protocol][property]) {
							invalid.push(`:ripple[${link}]`);
						}
					}
					temp = m[2];
				}
				temp = line;
				while(m = checkForEncodedLink(temp)) {
					// m = [...post, protocol, property, fullmatch]
					const property = (m.pop() || 1) && m.pop();
					const protocol = m.pop();
					const potential = `{${protocol}/${property}}`;
					if(protocol === "source") {
						if(!allsources[property]) {
							invalid.push(potential);
						}
					} else if (!$KnownProps[protocol] || !$KnownProps[protocol][property]) {
						invalid.push(potential)
					}
					temp = m.pop();
				}
			});
			if(topLink) {
				const [ title, link ] = topLink;
				const m = link.match(/^([-a-z0-9_]+)[/]([a-z_0-9]+)$/);
				if(!m || (!$KnownProps[m[1]] || !$KnownProps[m[1]][m[2]])) {
					invalid.push(`[ "${title}", "${link}" ]`);
				}
			}
		});
		(invalid.length > 0) && msg.push(`\tInvalid links in ${link} files:`, ...invalid.map(x => `\t\t${x}`));
		msg.length > 1 && (found = true);
	});
	const bad = parseTree(featTreeData);
	if(bad.length > 0) {
		found = true;
		msg.push(`\tInvalid links in feat_tree_data.json:`, ...bad.map(x => `\t\t${x}`));
	}
	return [found, "valid links", [...msg, "", "-- Done.\n\n"]];
}

export default testLinks;
