import isALink from './prebuild/get-all-links.js';
import { globSync as glob } from 'glob';
import fs from 'fs';

const generated = glob('./src/**/_GEN_*.tsx').map(x => "./" + x.replace(/[\\]+/g, "/")).sort();

const total = generated.length;

console.log(`FOUND: ${total} files.`);

let errors = 0;
let count = 0;

generated.forEach((file, i) => {
//	const flag = file.match(/_GEN_ability2/);
	const text = fs.readFileSync(file, 'utf8').replace(/[\n\r]/g, "");
	let test = text;
	let m;
	while(m = test.match(/^.*?<Link [^>]*\bto="[/]?([^"/]+)[/]([^"]+)"[^>]*>(.*)$/)) {
		const [, protocol, property, next] = m;
		test = next;
		if(protocol !== "icons" && !isALink(protocol, property)) {
			console.log(`INVALID LINK IN (${i + 1}) [${file}]\n\t${protocol}/${property}`);
			errors++;
			count = 0;
		}
	}
	if(++count === 50) {
		count = 0;
		console.log(`...passing file ${i + 1} of ${total}`);
	}
});

console.log(`FINISHED with ${errors} errors.`);
