import checkForEncodedLink, { convertTextToLink } from './checkForEncodedLink.js';
import featTreeData from '../../json/feat_tree_data.json' with {type: 'json'};
import { $All as a, $KnownProps } from '../get-all-links.js';

const [ sources, ...$All ] = a;

const [ , source ] = sources;

const checkForMalformedLinks = (line) => {
	let m;
	// 1: what follows isn't a ‹valid/link›
	// 2: what follows isn't a SOURCE tag, jumplist marker, or table reference
	//                            1                 2
	if(m = line.match(/‹(?![-a-z_]+[/][^›]+›)(?!SOURCE|table[0-9]+|jumplist).{0,10}/)) {
		return `Malformed ‹link›: ${m[0]}\n\t\t => "${line}"`;
	}
	// 1: has the markdown link format ](
	//      AND
	// 2:   is NOT (settings), which is a valid link
	// 3:   immediately ends like ]()
	// 4:   or is followed by an invalid link prefix like ](Some.thing/
	// 5:   or has a valid link prefix but immediately ends like ](prefix/) or ](prefix)
	//                        1      2         3      4            5
	else if(m = line.match(/\]\((?!settings\))(\)|[^-a-z_]+[/]|[-a-z_]+[/]?\))/)) {
		return `Malformed [link]: ${m[0]}\n\t\t => "${line}"`;
	}
	// 1: Checks for extraneous ›s at the end of a valid link
	// 2: Checks for extraneous ‹s at the start of a valid link
	//                        1                        2
	else if(m = line.match(/‹+[-a-z_]+[/][^›]+›{2,}|‹{2,}[-a-z_]+[/][^›]+›+/)) {
		return `Possibly malformed link: ${m[0]}\n\t\t => "${line}"`
	}
	// Checks for [‹turducken/links›](turducken/links)
	else if(m = line.match(/\[‹[-a-z_]+[/][^›]+›\]\([-a-z_]+[/][a-z_0-9]+\)/)) {
		return `Double-encoded link: ${m[0]}\n\t\t => "${line}"`
	}
};

const parseTree = (tree) => {
	const feats = $KnownProps.feat;
	const found = new Set();
	tree.forEach(leaf => {
		const {prop, coparents = [], coparentsNolink = [], leaves = []} = leaf;
		if(!feats[prop]) {
			found.add(prop);
		}
		coparents.concat(coparentsNolink).forEach(p => (!feats[p] && found.add(p)));
		parseTree(leaves).forEach(l => found.add(l));
	});
	return [...found];
};

const testLinks = () => {
	const msg = [ "\n...beginning link validation tests\n" ];
	let found = false;
	$All.forEach(([link, object]) => {
		// validate links
		// `invalid links in ${link} files:`
		const invalid = [];
		Object.keys(object).forEach(prop => {
			const {sources: s, tables, description, topLink} = object[prop];
			// Test sources property
			if(s !== undefined) {
				if(!s || !Array.isArray(s)) {
					msg.push(`\tINVALID ${prop}.sources`);
				} else {
					s.every(s => {
						if(typeof s !== "string") {
							msg.push(`\tINVALID entry in ${prop}.sources`);
							return false;
						} else if (!source[convertTextToLink(s)]) {
							msg.push(`\tINVALID source "${s}" in ${prop}.sources`);
						}
						return true;
					});
				}
			}
			// Set up description for testing
			const TESTING = description ? (Array.isArray(description) ? [...description] : [description]) : [];
			const z = (tables || []);
			if(z && !Array.isArray(z)) {
				console.log(">>"+link+">>"+JSON.stringify(z));
			}
			// Go through tables and stage info for testing
			(tables || []).forEach(table => {
				table.data.forEach(row => {
					Array.isArray(row) && TESTING.push(...row.map((bit, i) => {
						const test = Array.isArray(bit) ? bit[1] : bit;
						return typeof test === "string" ? test : null;
					}).filter(bit => bit !== null));
				});
			});
			// Test the plain text
			TESTING.forEach(line => {
				let temp = line;
				let m = false;
				// Checking [Links](whatever/link)
				while(m = temp.match(/\]\([/]?([^)]+)[/]([^)/]+)\)(.*$)/)) {
					if(m) {
						const [, protocol, text] = m;
						const link = convertTextToLink(text);
						if(protocol === "source") {
							if(!source[link]) {
								invalid.push(protocol + "/" + text);
							}
						} else if (protocol.match(/^http/)) {
							// Skip
						} else if(!$KnownProps[protocol] || !$KnownProps[protocol][link]) {
							invalid.push(protocol + "/" + text);
						}
						temp = m[3];
					}
				}
				temp = line;
				// Testing ‹SOURCE Title/##›
				while(m = temp.match(/‹SOURCE ([^›]+)›(.*$)/)) {
					if (m) {
						m[1].split(/;/).forEach(bit => {
							const xx = bit.match(/([^/]+)([/][-, 0-9]+)?$/);
							if(!xx) {
								msg.push(`\t‹SOURCE› error [${bit}]`);
							} else if (!source[convertTextToLink(xx[1])]) {
								invalid.push("‹SOURCE " + xx[1] + "›");
							}
						});
						temp = m[2];
					}
				}
				temp = line;
				// Testing ::main[text]{to=some/where}
				while(m = temp.match(/::main\[.+?\]‹.*?\bto=([-a-z_]+)[/]([a-z_0-9]+).*?›(.*$)/)) {
					if(m[1] === "source") {
						if(!source[m[2]]) {
							invalid.push(m[1] + "/" + m[2]);
						}
					} else if(!$KnownProps[m[1]] || !$KnownProps[m[1]][m[2]]) {
						invalid.push(`to=${m[1]}/${m[2]}`);
					}
					temp = m[3];
				}
				temp = line;
				// Testing @ripple[link/text] and @ripple[link/text]
				while(m = temp.match(/@(ripple|hll)\[(.+?)(?<!\\)\](.*$)/)) {
					const q = checkForEncodedLink(m[2].replace(/\\/g, ""), { bare: true });
					if(!q) {
						invalid.push(`@${m[1]}[${m[2]}]`)
					} else {
						let [, link, , , protocol, property] = q;
						if(protocol === "source") {
							if(!source[property]) {
								invalid.push(`@${m[1]}[${link}]`);
							}
						} else if(!$KnownProps[protocol] || !$KnownProps[protocol][property]) {
							invalid.push(`@${m[1]}[${link}]`);
						}
					}
					temp = m[2];
				}
				temp = line;
				// Testing for ‹link/text›
				while(m = checkForEncodedLink(temp, {testing: true})) {
					// [pre, `${protocol}/${property}`, text, post, protocol, property, `‹${protocol}/${matchedx}›`]
					const [ , potential, , post, protocol, property, fulltext ] = m;
					if(protocol === "source") {
						if(!source[property]) {
							invalid.push(fulltext === `{${potential}}` ? fulltext : `${fulltext} => ${potential}`);
						}
					} else if (!$KnownProps[protocol] || !$KnownProps[protocol][property]) {
						invalid.push(fulltext === `‹${potential}›` ? fulltext : `${fulltext} => ${potential}`)
					}
					temp = post;
				}
				const malformed = checkForMalformedLinks(line);
				if(malformed) {
					msg.push(malformed);
				}
			});
			// Test validity of topLink properties
			if(topLink) {
				const [ title, link ] = topLink;
				const m = link.match(/^([-a-z0-9_]+)[/]([a-z_0-9]+)$/);
				if(!m || (!$KnownProps[m[1]] || !$KnownProps[m[1]][m[2]])) {
					invalid.push(`[ "${title}", "${link}" ]`);
				}
			}
		});
		(invalid.length > 0) && msg.push(`\tInvalid links in ${link} files:`, ...invalid.map(x => `\t\t${x}`));
		msg.length > 1 && (found = true);
	});
	const bad = parseTree(featTreeData);
	if(bad.length > 0) {
		found = true;
		msg.push(`\tInvalid links in feat_tree_data.json:`, ...bad.map(x => `\t\t${x}`));
	}
	return [found, "valid links", [...msg, "", "-- Done.\n\n"]];
}

export default testLinks;
