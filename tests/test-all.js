import archTest from './test-archetypes.js';
import basicsTest from './test-basic.js';
import classTest from './test-classes.js';
import equipTest from './test-equip.js';
import magicTest from './test-magic.js';
import mainTest from './test-main.js';
import rulesTest from './test-rules.js';
import linksTest from './test-links.js';

const data = [
	...basicsTest(),
	classTest(),
	...equipTest(),
	...magicTest(),
	mainTest(),
	rulesTest(),
	...archTest(),
	linksTest()
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

output.unshift(`OK: ${ok.sort().join(", ")}.`);

console.log(output.join("\n\n"));
