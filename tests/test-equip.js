import { basic_data_by_link } from '../basic_data_groups.js';
import checkForBadTables from './checkForBadTables.js';

const {
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
	techcybertech,
	techmisc,
	techpharmaceutical,
	techweapon,
	eqweapon,
	eqweaponenh
} = basic_data_by_link;

const equipment = [
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
	techcybertech,
	techmisc,
	techpharmaceutical,
	techweapon,
	eqweapon,
	eqweaponenh
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
	} else { found = true; }
	return [found, what, msg];
}

// equipment.forEach((data, i) => isGood(data, whats[i]));

const equipTest = () => equipment.map((data, i) => isGood(data, whats[i]));

export default equipTest;
