import { basic_data_by_link } from '../basic_data_groups.js';
import checkForBadTables from './checkForBadTables.js';

const {
	archetypecompanion,
	archetypefamiliar,
	archetypealchemist,
	archetypeantipaladin,
	archetypearcanist,
	archetypebarbarian,
	archetypebard,
	archetypebloodrager,
	archetypebrawler,
	archetypecavalier,
	archetypecleric,
	archetypedruid,
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
	archetypewizard
} = basic_data_by_link;

const arch = [
	archetypecompanion,
	archetypefamiliar,
	archetypealchemist,
	archetypeantipaladin,
	archetypearcanist,
	archetypebarbarian,
	archetypebard,
	archetypebloodrager,
	archetypebrawler,
	archetypecavalier,
	archetypecleric,
	archetypedruid,
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
	archetypewizard
];

const whats = [
	"archetypes: animal companion",
	"archetypes: familiar",
	"archetypes: alchemist",
	"archetypes: antipaladin",
	"archetypes: arcanist",
	"archetypes: barbarian",
	"archetypes: bard",
	"archetypes: bloodrager",
	"archetypes: brawler",
	"archetypes: cavalier",
	"archetypes: cleric",
	"archetypes: druid",
	"archetypes: fighter",
	"archetypes: gunslinger",
	"archetypes: hunter",
	"archetypes: inquisitor",
	"archetypes: investigator",
	"archetypes: kineticist",
	"archetypes: magus",
	"archetypes: medium",
	"archetypes: mesmerist",
	"archetypes: monk",
	"archetypes: unchained monk",
	"archetypes: ninja",
	"archetypes: occultist",
	"archetypes: oracle",
	"archetypes: paladin",
	"archetypes: psychic",
	"archetypes: ranger",
	"archetypes: rogue",
	"archetypes: samurai",
	"archetypes: shaman",
	"archetypes: shifter",
	"archetypes: skald",
	"archetypes: slayer",
	"archetypes: sorcerer",
	"archetypes: spiritualist",
	"archetypes: summoner",
	"archetypes: unchained summoner",
	"archetypes: swashbuckler",
	"archetypes: vigilante",
	"archetypes: warpriest",
	"archetypes: witch",
	"archetypes: wizard"
];

function isGood(archValue, what) {
	const msg = [ "\n...beginning test: [" + what + "]\n" ];
	let found = false;
	if(!Object.entries(archValue).some(([prop, value]) => {
		const test = value;
		if(test && test.alternateOf) {
			const {alternateOf} = test;
			if(!alternateOf|| alternateOf === prop || !archValue[alternateOf] || archValue[alternateOf].alternateOf ) {
				msg.push("Invalid alternateOf property of " + prop);
				found = true;
				return true;
			}
		} else if (
			(Object.keys(test).sort().join(" ") !== "description name sources")
			? (found = "extra property on object " + prop) : false
		) {
			msg.push(found || `Basic problem with ${prop}`);
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
	} else { found = true; }
	return [found, what, msg];
}

// isGood(arch);
const archTest = () => arch.map((a, i) => isGood(a, whats[i]));

export default archTest;
