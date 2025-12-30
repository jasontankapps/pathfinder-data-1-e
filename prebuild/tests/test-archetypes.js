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

function isGood(archValue, what) {
	const msg = [ "\n...beginning test: [" + what + "]\n" ];
	let found = false;
	if(!Object.entries(archValue).some(([prop, value]) => {
		const {copyof, redirect, ...etc} = value;
		if(redirect) {
			if(!archValue[redirect]) {
				msg.push("Invalid redirect property of " + prop);
				found = true;
				return true;
			}
			return false;
		}
		const test = copyof ? getCopyOf(archValue, copyof, etc) : etc;
		if(copyof && test && test.redirect) {
			msg.push(`Invalid ${prop}.copyof => ${copyof} has redirect property`);
			found = true;
			return true;
		}
		const {alternateOf, tables} = test || {};
		if(test && alternateOf) {
			if(!alternateOf|| alternateOf === prop || !archValue[alternateOf] || archValue[alternateOf].alternateOf ) {
				msg.push("Invalid alternateOf property of " + prop);
				found = true;
				return true;
			}
		} else if (
			(![
				"description name sources",
				"compileFrom name sources"
			].includes(Object.keys(test).sort().join(" ")))
				? (found = "extra property on object " + prop)
				: false
		) {
			msg.push(found || `Basic problem with ${prop}`);
			found = true;
			return true;
		} else if (tables) {
			const result = checkForBadTables(tables, what + "." + prop);
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

// isGood(arch);
const archTest = (specifics) => {
	if(specifics) {
		return specifics.map(([a, i]) => isGood(a, i));
	}
	return arch.map((a, i) => isGood(a, whats[i]));
};

export default archTest;
