import { basic_data_by_link } from '../basic_data_groups.js';
import checkForBadTables from './checkForBadTables.js';

const { class: classes } = basic_data_by_link;

function isGood(value) {
	const msg = [ "\n...beginning test: [classes]\n" ];
	let found = false;
	if(!Object.entries(value).some(([prop, value]) => {
		const test = value;
		if(
			!test
			|| typeof test !== "object"
			|| typeof test.name !== "string"
			|| !Array.isArray(test.description)
			|| test.description.some(line => typeof line !== "string")
		) {
			found || msg.push(`Basic problem with ${prop}`);
			found = true;
			return true;
		} else if (test.tables) {
			const result = checkForBadTables(test.tables, "classes." + prop);
			result && msg.push(result);
			return result;
		}
		return false;
	})) {
		msg.push("Test passed.");
	} else { found = true; }
	return [found, "all PC classes", msg];
}

// isGood(classes);

const classTest = () => isGood(classes);

export default classTest;
