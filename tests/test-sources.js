import basic_data_groups from '../basic_data_groups.js';
import { convertSpecialTextToLink, convertTextToLink } from './checkForEncodedLink.js';

const checkForSourceLinks = (desc) => {
	const found = [];
	const single = /^.*?(?:\]\(source[/]([a-z_0-9]+)\)|\{source[/]([^\}]+)\})(.*$)/;
	const multi = /^>*\{SOURCE ([^\}]+)\}(?:  )?$/;
	desc.forEach(line => {
		let m = line.match(multi);
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
			const {sources: s, compilationSources, copyof, alternateOf, redirect, description = []} = entry;
			if (description.some(line =>
				line.match(/^>*[^>].*\{SOURCE/)
				|| line.match(/^>*\{SOURCE[^}]+\}(?!  $).+$/)
			)) {
				msg.push(`<+> ${prop}.${item} has bad {SOURCE} multisource`);
				// No point in going further since the error will probably mess with the other things.
				return;
			}
			const sources = s ? s.map(x => convertTextToLink(x)) : [];
			if(!s && !compilationSources && !copyof && !alternateOf && !redirect) {
				//msg.push(`Missing ${prop}.${item}.sources or .compilationSources`);
				return;
			} else if (compilationSources) {
				// comp sources are auto-added to the text in post, no need to check
			}
			const found = checkForSourceLinks(description);
			const fSet = new Set(found);
			const sSet = new Set(sources);
			const diff = sources.filter(x => !fSet.has(x));
			const diff2 = found.filter(x => !sSet.has(x));
			if(diff.length) {
				msg.push(`+ ${prop}.${item}.sources contains [${diff.join("] [")}]`);
			}
			if(diff2.length) {
				msg.push(`- ${prop}.${item}.sources missing [${diff2.join("] [")}]`);
			}
		});
		if(msg.length) {
			result.push(`>>\n>>${prop}\n>>\n\n  ${msg.join("\n  ")}\n\n\n`);
		}
	});
	return [!!result.length, "sources", result];
};

export default sourcesTest;
