import main1 from '../src/json/rules.json' assert {type: 'json'};
import main2 from '../src/json/rules2.json' assert {type: 'json'};
import main3 from '../src/json/rules3.json' assert {type: 'json'};
import main4 from '../src/json/rules4.json' assert {type: 'json'};

const main = {...main1, ...main2, ...main3, ...main4};

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
		} else if (prop === "unknown") {
			// Skip
		} else if (test.siblings) {
			const x = test.siblings;
			if(!Array.isArray(x)) {
				console.log(`Bad ${prop}.siblings`);
				return true;
			} else if (x.some(bit => {
				if(!main[bit]) {
					return true;
				} else if(!main[bit].siblings || main[bit].siblings.indexOf(prop) < 0) {
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
				if(!main[bit]) {
					return true;
				} else if(i === max && (!main[bit].subtopics || main[bit].subtopics.indexOf(prop) < 0)) {
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
				if(!main[bit]) {
					return true;
				} else if(!main[bit].parent_topics || main[bit].parent_topics.indexOf(prop) < 0) {
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

isGood(main);
