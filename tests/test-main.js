import { basic_data_by_link } from '../basic_data_groups.js';
import checkForBadTables from './checkForBadTables.js';

const { main } = basic_data_by_link;

function isGood(value) {
	const msg = [ "\n...beginning test: [main]\n" ];
	let found = false;
	if(!Object.entries(value).some(([prop, value]) => {
		const test = value;
		if(
			!test
			|| typeof test !== "object"
			|| typeof test.title !== "string"
			|| !Array.isArray(test.description)
			|| test.description.some(line => {
				if(!line || typeof line === "string") {
					return false;
				} else if (!Array.isArray(line)) {
					return true;
				}
				return line.some(inner => typeof inner !== "string");
			})
			|| (test.previous && (
				!Array.isArray(test.previous)
				|| test.previous.some((pair, i) => {
					if (
						!Array.isArray(pair) || pair.length !== 2
						|| typeof pair[0] !== "string"
						|| typeof pair[1] !== "string"
					) {
						found = true;
						msg.push(`Bad info at ${prop}.previous[${i}]`);
						return true;
					}
				})
			))
		) {
			found || msg.push(`Basic problem with ${prop}`);
			found = true;
			return true;
		} else if (test.tables) {
			const result = checkForBadTables(test.tables, "main." + prop);
			result && msg.push(result);
			return result;
		}
		return false;
	})) {
		msg.push("Test passed.");
	} else { found = true; }
	return [found, "\"Main\" files", msg];
}

// isGood(main);

const mainTest = () => isGood(main);

export default mainTest;
