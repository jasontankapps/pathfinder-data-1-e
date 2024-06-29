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
	console.log("\n...beginning rules test\n");
	let found = false;
	if(Object.entries(value).some(([prop, value]) => {
		const test = value;
		if(
			!test
			|| typeof test !== "object"
			|| typeof test.name !== "string"
			|| !Array.isArray(test.description)
			|| test.description.some(line => typeof line !== "string")
		) {
			console.log(`Basic problem with ${prop}`);
			return true;
		} else if (prop === "not_found") {
			// Skip
		} else if (test.siblings) {
			const x = test.siblings;
			if(!Array.isArray(x)) {
				console.log(`Bad ${prop}.siblings`);
				return true;
			} else if (x.some(bit => {
				if(!rules[bit]) {
					return true;
				} else if(!rules[bit].siblings || rules[bit].siblings.indexOf(prop) < 0) {
					found = true;
					console.log(`${prop}.siblings => ${bit} is not reciprocal`)
					return true;
				}
				return false;
			})) {
				found || console.log(`Bad ${prop}.siblings`);
				return true;
			}
		} else if (test.parent_topics) {
			const x = test.parent_topics;
			const max = x.length - 1;
			if(!Array.isArray(x)) {
				console.log(`Bad ${prop}.parent_topics`);
				return true;
			} else if (x.some((bit, i) => {
				if(!rules[bit]) {
					return true;
				} else if(i === max && (!rules[bit].subtopics || rules[bit].subtopics.indexOf(prop) < 0)) {
					found = true;
					console.log(`${prop}.parent_topics => ${bit} is not reciprocal`)
					return true;
				}
				return false;
			})) {
				found || console.log(`Bad ${prop}.parent_topics`);
				return true;
			}
		} else if (test.subtopics) {
			const x = test.subtopics;
			if(!Array.isArray(x)) {
				console.log(`Bad ${prop}.subtopics`);
				return true;
			} else if (x.some(bit => {
				if(!rules[bit]) {
					return true;
				} else if(!rules[bit].parent_topics || rules[bit].parent_topics.indexOf(prop) < 0) {
					found = true;
					console.log(`${prop}.subtopics => ${bit} is not reciprocal`)
					return true;
				}
				return false;
			})) {
				found || console.log(`Bad ${prop}.subtopics`);
				return true;
			}
		}
		return false;
	})) {
		return;
	}
	console.log("Test passed.");
}

isGood(rules);
