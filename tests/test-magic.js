import { basic_data_by_link } from '../basic_data_groups.js';
import checkForBadTables from './checkForBadTables.js';

const {
	magicarmor,
	magicartifact,
	magicenh,
	magicioun,
	magicring,
	magicrod,
	magicstaff,
	magicweapon,
	magicwondrous,
	magicaltar,
	magicimplant,
	magictalisman,
	magicaugmentation,
	magicfavor,
	magicfleshcrafting,
	magicgraft,
	magicpoison,
	magicfetish,
	magicnecrograft,
	magicnecrotoxin,
	magicplant,
	magicrelic,
	magicpiercing,
	magicset,
	magicthrone,
	magictattoo
} = basic_data_by_link;

const magic = [
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
		...magicaugmentation,
		...magicfavor,
		...magicfleshcrafting,
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
	}
];

const whats = [
	"magic armor",
	"artifacts",
	"magical enhancements",
	"ioun stones",
	"magic rings",
	"magic rods",
	"magic staves",
	"magic weapons",
	"wondrous items",
	"misc. magic items"
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
		) {
			found || msg.push(`Basic problem with ${prop}`);
			found = true;
			return true;
		} else if (test.tables && (!copyof || etc.tables)) { // ignore copies without tables, as we've already scanned them
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

// magic.forEach((data, i) => isGood(data, whats[i]));

const magicTest = () => magic.map((data, i) => isGood(data, whats[i]));

export default magicTest;

