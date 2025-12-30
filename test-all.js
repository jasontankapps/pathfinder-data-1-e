#!/usr/bin/env node
import archTest from './prebuild/tests/test-archetypes.js';
import basicsTest from './prebuild/tests/test-basic.js';
import rulesTest from './prebuild/tests/test-rules.js';
import linksTest from './prebuild/tests/test-links.js';
import sourcesTest from './prebuild/tests/test-sources.js';

const $ = {
	other: [],
	patterns: [],
	verbose: false,
	specifics: false,
	tree: false
};
// Parse command-line arguments
process.argv.forEach(bit => {
	if(!bit.match(/^[A-Z]:[\\/]/)) {
		// Ignore file stuff
		let m;
		if(bit === "verbose" || bit === "v") {
			// show giant list of okay JSONs
			$.verbose = true;
		} else {
			$.specifics = true;
			if (bit === "tree") {
				$.tree = true;
			} else if (m = bit.match(/^regex=(.+)$/)) {
				$.patterns.push([new RegExp(m[1]), m[1]]);
			} else {
				$.other.push(bit);
			}
		}
	}
});

const {data, rules, arcs, matched, notfound, found} = basicsTest($.other, $.patterns, $.tree);
if(matched && matched.length) {
	console.log(`MATCHED: [ ${matched.join(", ")} ]\n`);
}
if(notfound && notfound.length) {
	console.log(`NOT FOUND: [ ${notfound.join(", ")} ]\n`);
}
if($.specifics) {
	rules && rules.length && data.push(rulesTest(rules));
	arcs && arcs.length && data.push(...archTest(arcs));
	((found && found.length) || $.tree) && data.push(linksTest((found || []).map(f => [f[1], f[0]]), $.tree));
	found && found.length && data.push(sourcesTest(found));
} else {
	data.push(
		rulesTest(),
		...archTest(),
		linksTest(),
		sourcesTest()
	);
}

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
	output.unshift(`OK: ${ok.length} tests.`);
}
console.log(output.join("\n\n"));
