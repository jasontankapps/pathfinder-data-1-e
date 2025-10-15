#!/usr/bin/env node
import archTest from './prebuild/tests/test-archetypes.js';
import basicsTest from './prebuild/tests/test-basic.js';
import rulesTest from './prebuild/tests/test-rules.js';
import linksTest from './prebuild/tests/test-links.js';
import sourcesTest from './prebuild/tests/test-sources.js';

const $ = {};
// Parse command-line arguments
process.argv.forEach(bit => {
	if(!bit.match(/^[A-Z]:[\\/]/)) {
		// Ignore file stuff
		if(bit === "verbose" || bit === "v") {
			// show giant list of okay JSONs
			$.verbose = true;
		}
	}
});

const data = [
	...basicsTest(),
	rulesTest(),
	...archTest(),
	linksTest(),
	sourcesTest()
];

const output = [];

const ok = [];

data.forEach(result => {
	const [error, type, msg] = result;
	if(error) {
		output.push(msg.join("\n"));
	} else {
		ok.push(type);
	}
});

if($.verbose) {
	output.unshift(`OK: ${ok.sort((a, b) => a.localeCompare(b, { sensitivity: "base" })).join(", ")}.`);
} else {
	output.unshift(`OK: ${ok.length} categories of JSONs.`);
}
console.log(output.join("\n\n"));
