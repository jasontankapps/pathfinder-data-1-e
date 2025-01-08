import { basic_data_by_link } from '../basic_data_groups.js';
import checkForBadTables from './checkForBadTables.js';

const { rule: rules } = basic_data_by_link;


function isGood(value) {
	const msg = [ "\n...beginning test: [rules]\n" ];
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
			msg.push(`Basic problem with ${prop}`);
			return true;
		} else if (prop === "not_found") {
			// Skip
			return false;
		} else if (test.siblings) {
			const siblings = test.siblings;
			if(!Array.isArray(siblings)) {
				msg.push(`Bad ${prop}.siblings`);
				return true;
			} else if (siblings.some(bit => {
				if(!rules[bit]) {
					return true;
				} else if(!rules[bit].siblings || rules[bit].siblings.indexOf(prop) < 0) {
					found = true;
					msg.push(`${prop}.siblings => ${bit} is not reciprocal`);
					return true;
				}
				return false;
			})) {
				found || msg.push(`Bad ${prop}.siblings`);
				return true;
			}
		}
		if (test.parent_topics) {
			const parents = test.parent_topics;
			const max = parents.length - 1;
			if(!Array.isArray(parents)) {
				msg.push(`Bad ${prop}.parent_topics`);
				return true;
			} else {
				const parentProp = parents.slice(-1).pop() || "";
				const immediateParent = rules[parentProp];
				if(!immediateParent) {
					msg.push(`${prop}.parent_topics contains invalid "${parentProp}"`);
					return true;
				}
				const ancestry = parents.slice(0, -1).join(",");
				if((immediateParent.parent_topics || []).join(",") !== ancestry) {
					msg.push(`${prop}.parent_topics does not correspond to ${parentProp}.parent_topics`);
					return true;
				} else if ((immediateParent.subtopics || []).indexOf(prop) < 0) {
					msg.push(`${prop} not found in ${parentProp}.subtopics`);
					return true;
				}
			}
		}
		if (test.subtopics) {
			const subtopics = test.subtopics;
			if(!Array.isArray(subtopics)) {
				msg.push(`Bad ${prop}.subtopics`);
				return true;
			}
			const subbies = subtopics.join(" ");
			if (subtopics.some(bit => {
				const rb = rules[bit];
				if(!rb) {
					return true;
				}
				if(!rb.parent_topics || rb.parent_topics.indexOf(prop) !== (rb.parent_topics.length - 1)) {
					found = true;
					msg.push(`${prop}.subtopics => ${bit} is not reciprocal`);
					return true;
				}
				const siblings = rb.siblings;
				if (!siblings || !Array.isArray(siblings)) {
					found = true;
					msg.push(`${bit} does not have a valid siblings property despite heritage from ${prop}`);
					return true;
				} else if (subbies !== siblings.join(" ")) {
					found = true;
					msg.push(`${bit}.siblings !== ${prop}.subtopics`);
					return true;
				}
				return false;
			})) {
				found || msg.push(`Bad ${prop}.subtopics`);
				return true;
			}
		}
		if (test.tables) {
			const result = checkForBadTables(test.tables, "rules." + prop);
			result && msg.push(result);
			return result;
		}
		return false;
	})) {
		msg.push("Test passed.");
	} else { found = true; }
	return [found, "rules", msg];
}

// isGood(rules);

const rulesTest = () => isGood(rules);

export default rulesTest;
