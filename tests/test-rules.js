import rules1 from '../src/json/rules.json' assert {type: 'json'};
import rules2 from '../src/json/rules2.json' assert {type: 'json'};
import rules3 from '../src/json/rules3.json' assert {type: 'json'};
import rules4 from '../src/json/rules4.json' assert {type: 'json'};
import rules5 from '../src/json/rules5.json' assert {type: 'json'};
import rules6 from '../src/json/rules6.json' assert {type: 'json'};
import rules7 from '../src/json/rules7.json' assert {type: 'json'};
import rules8 from '../src/json/rules8.json' assert {type: 'json'};
import rules9 from '../src/json/rules9.json' assert {type: 'json'};
import rules10 from '../src/json/rules10.json' assert {type: 'json'};
import rules11 from '../src/json/rules11.json' assert {type: 'json'};
import rules12 from '../src/json/rules12.json' assert {type: 'json'};
import rules13 from '../src/json/rules13.json' assert {type: 'json'};
import rules14 from '../src/json/rules14.json' assert {type: 'json'};
import rules15 from '../src/json/rules15.json' assert {type: 'json'};
import rules16 from '../src/json/rules16.json' assert {type: 'json'};

const rules = {
	...rules1, ...rules2, ...rules3, ...rules4,
	...rules5, ...rules6, ...rules7, ...rules8,
	...rules9, ...rules10, ...rules11, ...rules12,
	...rules13, ...rules14, ...rules15, ...rules16
};

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
					msg.push(`${prop}.siblings => ${bit} is not reciprocal`)
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
			} else if (subtopics.some(bit => {
				if(!rules[bit]) {
					return true;
				}
				const rb = rules[bit];
				if(!rb.parent_topics || rb.parent_topics.indexOf(prop) < 0) {
					found = true;
					msg.push(`${prop}.subtopics => ${bit} is not reciprocal`)
					return true;
				} else if (!rb.siblings || !Array.isArray(rb.siblings)) {
					found = true;
					msg.push(`${bit} does not have a siblings property`)
					return true;
				}
				return false;
			})) {
				found || msg.push(`Bad ${prop}.subtopics`);
				return true;
			}
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
