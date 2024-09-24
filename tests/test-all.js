import archTest from './test-archetypes.js';
import basicsTest from './test-basic.js';
import classTest from './test-classes.js';
import equipTest from './test-equip.js';
import magicTest from './test-magic.js';
import mainTest from './test-main.js';
import rulesTest from './test-rules.js';

console.log(
	basicsTest() + "\n",
	classTest() + "\n",
	equipTest() + "\n",
	magicTest() + "\n",
	mainTest() + "\n",
	rulesTest() + "\n",
	archTest() + "\n",
);
