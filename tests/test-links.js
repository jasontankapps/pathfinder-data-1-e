import { basic_data_by_link } from '../basic_data_groups.js';
import checkForEncodedLink from './checkForEncodedLink.js';

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
	archetypeunchained_monk,
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
	bardicmasterpiece,
	blessing,
	bloodragerbloodline,
	oraclecurse,
	discipline,
	domain,
	druidcompanion,
	druiddomain,
	emotionalfocus,
	exploit,
	greaterexploit,
	hellknightorder,
	implement,
	inquisition,
	kinetic,
	legendaryspirit,
	magusarcana,
	mystery,
	oath,
	order,
	outsiderspirit,
	ragepower,
	shamanspirit,
	sorcererbloodline,
	spirit,
	stanceragepower,
	constructmod,
	corruption,
	curse,
	disease,
	drug,
	equipmentreagent,
	equipmentarmor,
	equipmentarmorenhancement,
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
	equipmentweaponenhancement,
	haunt,
	infestation,
	madness,
	magicaltar,
	magicarmor,
	magicimplant,
	magictalisman,
	magicaugmentation,
	magicenhancement,
	magicfavor,
	magicfleshcrafting,
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
	equipmentmisc,
	faith,
	feat,
	magicartifact,
	magicweapon,
	magicwondrous,
	main,
	monster,
	template,
	npc,
	prestigeclass,
	race,
	rule,
	spell,
	trait,
	family
} = basic_data_by_link;

const all = [
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
	["arc-unchained_monk", archetypeunchained_monk], ["arc-ninja", archetypeninja],
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
	["bardicmasterpiece", bardicmasterpiece], ["blessing", blessing],
	["bloodragerbloodline", bloodragerbloodline], ["oraclecurse", oraclecurse],
	["discipline", discipline], ["domain", domain], ["druidcompanion", druidcompanion],
	["druiddomain", druiddomain], ["emotionalfocus", emotionalfocus], ["exploit", exploit],
	["greaterexploit", greaterexploit], ["hellknightorder", hellknightorder],
	["implement", implement], ["inquisition", inquisition], ["kinetic", kinetic],
	["legendaryspirit", legendaryspirit], ["magusarcana", magusarcana], ["mystery", mystery],
	["oath", oath], ["order", order], ["ragepower", ragepower], ["shamanspirit", shamanspirit],
	["sorcererbloodline", sorcererbloodline], ["spirit", spirit],
	["stanceragepower", stanceragepower], ["constructmod", constructmod],
	["corruption", corruption], ["curse", curse], ["disease", disease], ["drug", drug],
	["eq-reagent", equipmentreagent], ["eq-armor", equipmentarmor],
	["eq-armorenh", equipmentarmorenhancement],
	["eq-poison", equipmentpoison], ["eq-siegeengine", equipmentsiegeengine],
	["eq-material", equipmentmaterial], ["eq-spellbook", equipmentspellbook],
	["tech-armor", techarmor], ["tech-artifact", techartifact], ["tech-cybertech", techcybertech],
	["tech-misc", techmisc], ["tech-pharmaceutical", techpharmaceutical],
	["tech-weapon", techweapon], ["eq-weapon", equipmentweapon],
	["eq-weaponenh", equipmentweaponenhancement], ["haunt", haunt],
	["infestation", infestation], ["madness", madness], ["magic-altar", magicaltar],
	["magic-armor", magicarmor], ["magic-implant", magicimplant], ["magic-talisman", magictalisman],
	["magic-augmentation", magicaugmentation], ["magic-enhancement", magicenhancement],
	["magic-favor", magicfavor], ["magic-fleshcrafting", magicfleshcrafting],
	["magic-graft", magicgraft], ["magic-poison", magicpoison], ["magic-ioun", magicioun],
	["magic-fetish", magicfetish], ["magic-necrograft", magicnecrograft],
	["magic-necrotoxin", magicnecrotoxin], ["magic-plant", magicplant], ["magic-relic", magicrelic],
	["magic-ring", magicring], ["magic-rod", magicrod], ["magic-set", magicset],
	["magic-piercing", magicpiercing], ["magic-staff", magicstaff], ["magic-tattoo", magictattoo],
	["magic-throne", magicthrone], ["subtype", subtype], ["type", mtype], ["npcclass", npcclass],
	["sidekick", sidekick], ["skill", skill], ["spelldef", spelldef], ["trap", trap],
	["umr", umr], ["outsiderspirit", outsiderspirit], ["ability", ability],
	["eq-misc", equipmentmisc], ["faith", faith], ["feat", feat],
	["magic-artifact", magicartifact], ["magic-weapon", magicweapon],
	["magic-wondrous", magicwondrous], ["monster", monster], ["template", template],
	["rule", rule], ["spell", spell], ["npc", npc], ["prestigeclass", prestigeclass],
	["race", race], ["trait", trait], ["class", classes], ["family", family],
	// this final one has a third array member
	["main", main, "arraydescs"]
];

const known_props = {};

all.forEach(([link, object]) => {
	// Create master list of links
	known_props[link] = {};
	Object.keys(object).forEach(key => (known_props[link][key] = true));
});

// Ex:
//    known_props.race.ratfolk = true
//    known_props.race.rat = undefined


const testLinks = () => {
	const msg = [ "\n...beginning link validation tests\n" ];
	let found = false;
	all.forEach(([link, object, special]) => {
		// validate links
		// `invalid links in ${link} files:`
		const invalid = [];
		Object.keys(object).forEach(prop => {
			const {sources, tables, description, topLink, previous = [], subhierarchy = []} = object[prop];
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
			switch(special) {
				case "arraydescs":
					const hold = [];
					while(TESTING.length > 0) {
						const line = TESTING.shift();
						if(Array.isArray(line)) {
							hold.push(...line);
						} else {
							const m = line.match(/^#{2,6} ([^ ]+)/);
							if(m) {
								const link = m[1];
								if((link.indexOf("/") === -1) && link !== "about") {
									msg.push(`\tPOSSIBLE bad main-page link: "${link}"`);
								} else {
									hold.push(`[main-page link](${link})`);
								}
							}
						}
					}
					TESTING.push(...hold);
					break;
			}
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
				while(m = temp.match(/\]\(\/?([^)]+)\/([^)/]+)\)(.*$)/)) {
					// Checking [Links](whatever/link)
					if(m) {
						if(m[1] === "source") {
							if(!allsources[m[2]]) {
								invalid.push(m[1] + "/" + m[2]);
							}
						} else if (m[1].match(/^http/)) {
							// Skip
						} else if(!known_props[m[1]] || !known_props[m[1]][m[2]]) {
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
							const xx = bit.match(/([^/]+)(\/[0-9]*)?$/);
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
				while(m = checkForEncodedLink(temp)) {
					// m = [...post, protocol, property]
					const property = m.pop();
					const protocol = m.pop();
					const potential = `{${protocol}/${property}}`;
					if(protocol === "source") {
						if(!allsources[property]) {
							invalid.push(potential);
						}
					} else if (!known_props[protocol] || !known_props[protocol][property]) {
						invalid.push(potential)
					}
					temp = m.pop();
				}
			});
			const hierarchies = [...subhierarchy, ...previous];
			topLink && hierarchies.unshift(topLink);
			hierarchies.forEach(pair => {
				const [ title, link ] = pair;
				const m = link.match(/^([-a-z0-9_]+)\/([a-z_0-9]+)$/);
				if(!m || (!known_props[m[1]] || !known_props[m[1]][m[2]])) {
					invalid.push(`[ "${title}", "${link}" ]`);
				}
			});
		});
		(invalid.length > 0) && msg.push(`\tInvalid links in ${link} files:`, ...invalid.map(x => `\t\t${x}`));
		msg.length > 1 && (found = true);
	});
	return [found, "valid links", [...msg, "", "-- Done.\n\n"]];
}

export default testLinks;
