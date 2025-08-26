import basic_data_groups from '../basic_data_groups.js';
import { convertSpecialTextToLink, convertTextToLink } from './checkForEncodedLink.js';

const checkForSourceLinks = (desc) => {
	const found = [];
	const single = /^.*?(?:\]\(source[/]([a-z_0-9]+)\)|\{source[/]([^\}]+)\})(.*$)/;
	const multi = /^>*\{SOURCE ([^\}]+)\}(?:  )?$/;
	// Template headers store source information
	const th = /^::th\[[^\]]+\]\{[^\}]*\bsc="([^"}]+)"[^}]+\}?$/;
	desc.forEach(line => {
		let m = line.match(multi) || line.match(th);
		if(m) {
			const sources = m[1].split(";");
			while(sources.length) {
				const s = sources.shift();
				const [source] = s.split("/");
				found.push(convertTextToLink(source));
			}
		} else {
			let test = line;
			while(m = test.match(single)) {
				const [, bracket, curly, post] = m;
				test = post;
				found.push(bracket || convertSpecialTextToLink(curly));
			}
		}
	});
	return found;
};

const sourcesTest = () => {
	const $info = {...basic_data_groups};
	delete $info.sources;
	const result = [];
	Object.entries($info).forEach((pair) => {
		const [prop, file] = pair;
		const msg = [];
		const data = {...file.data};
		delete data.not_found;
		Object.entries(data).forEach((pair) => {
			const [item, entry] = pair;
			const {sources: s, compileFrom, copyof, alternateOf, redirect, description = []} = entry;
			if(redirect || copyof || alternateOf) {
				// These properties indicate we don't need to check sources or descriptions here.
				return;
			} else if(compileFrom) {
				const { targets = [] } = compileFrom;
				targets.forEach(bit => {
					if(Array.isArray(bit)) {
						// Add raw text from the compileFrom property to
						//   the description so we can check for links.
						description.push(...bit);
					}
				});
			}
			if (description.some(line =>
				line.match(/^>*[^>].*\{SOURCE/)
				|| line.match(/^>*\{SOURCE[^}]+\}(?!  $).+$/)
			)) {
				msg.push(`<+> ${item} has bad {SOURCE} multisource`);
				// No point in going further since the error will probably mess with the other things.
				return;
			}
			const sources = s ? s.map(x => convertTextToLink(x)) : [];
			const found = checkForSourceLinks(description);
			const fSet = new Set(found);
			const sSet = new Set(sources);
			const diff = new Set(sources.filter(x => !fSet.has(x)));
			const diff2 = new Set(found.filter(x => !sSet.has(x)));
			if(diff.size) {
				msg.push(`+ ${item}.sources contains [${[...diff].join("] [")}]`);
			}
			if(diff2.size) {
				msg.push(`- ${item}.sources missing [${[...diff2].join("] [")}]`);
			}
		});
		if(msg.length) {
			result.push(`>>\n>>${prop}\n>>\n\n  ${msg.join("\n  ")}\n\n\n`);
		}
	});
	return [result.length > 0, "sources", result];
};

export default sourcesTest;
