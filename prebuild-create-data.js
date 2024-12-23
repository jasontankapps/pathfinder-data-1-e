import fs from 'fs';
import { Marked } from 'marked';
import markedFootnote from 'marked-footnote';
import { gfmHeadingId } from "marked-gfm-heading-id";
import basic_data_groups from './basic_data_groups.js';
import checkForEncodedLink from './tests/checkForEncodedLink.js';

// Converts {some/Link: Text/s} into [Link: Texts](some/link_text)
const convertLinks = (input) => {
	let output = [];
	let m = null;
	input.forEach(line => {
		let converted = "";
		let base = line;
		while(m = checkForEncodedLink(base)) {
			const [pre, link, text, post] = m;
			converted = converted + `${pre}[${text}](${link})`;
			base = post;
		}
		output.push(converted + base);
	});
	return output;
};
// Converts 'Source Title/1' to [Source Title pg. 1](source/source_title)
//    and 'Source Title' to [Source Title](source/source_title)
const makeSourceLink = (sourceInfo) => {
	const m = sourceInfo.match(/(.+?)\/([0-9]+)/);
	const source = m ? m[1] : sourceInfo;
	const sourceText = m ? `${source} pg. ${m[2]}` : source;
	const link = source.toLowerCase().replace(/[ -]/g, "_").replace(/[^-a-z_0-9]/g, "");
	return `[${sourceText}](source/${link})`;
};
// Renderer object for Marked
const renderer = (flags, prefix) => {
	return {
		renderer: {
			// Changes <a> to <Link> and <InnerLink> as needed, updating `flags` to note the outside Tags being used
			link: ({href, text}) => {
				if (href.match(/^http/)) {
					return `<a href="${href}">${text}</a>`;
				} else if(href.match(/^\//)) {
					// Initial slash indicates this needs a ripple, updating `flags` to note the outside Tag being used
					flags.link = true;
					flags.ripple = true;
					return `<Link to="${href}">${text}<IonRippleEffect /></Link>`;
				} else if (href.match(/^#/)) {
					// Hash indicates internal link, updating `flags` to note the outside Tag being used
//					console.log(id, href);
					flags.innerlink = true;
					return `<InnerLink to="${prefix}${href.slice(1)}">${text}</InnerLink>`;
				}
				flags.link = true;
				return `<Link to="/${href}">${text}</Link>`;
			}
		}
	};
};
// Preprocessor object for Marked
const preprocess = () => {
	return (text) => {
		let output = [];
		// Changes {SOURCE Source Title/1;Source Title} using makeSourceLink() above
		text.split(/\n/).forEach(line => {
			let m = false;
			let newline = "";
			let tester = line;
			while(m = tester.match(/^(.*)\{SOURCE ([^}]+?)\}(.*)$/)) {
				const sources = m[2].split(/;/).map(source => makeSourceLink(source));
				newline = newline + `${m[1]}**Sources** ${sources.join(", ")}`;
				tester = m[3];
			}
			// The code below escapes extraneous curly brackets
			tester = `${newline}${tester}`;
			newline = "";
			while(m = tester.match(/^(.*?)\{(jumplist [^}]+|table[0-9]|[-a-z_]+\/[^}]+)\}(.*)$/)) {
				newline = newline + `${m[1]}BEGIN<${m[2]}>END`;
				tester = m[3];
			}
			tester = `${newline}${tester}`;
			newline = "";
			while(m = tester.match(/^(.*?)([{}])(.*)$/)) {
				newline = newline + `${m[1]}${m[2] === "{" ? "&#123;" : "&#125;"}`;
				console.log(`ERROR: Extraneous brackets: "${m[1]}${m[2]}"`);
				tester = m[3];
			}
			tester = `${newline}${tester}`;
			newline = "";
			while(m = tester.match(/^(.*?)BEGIN<(.+?)>END(.*)$/)) {
				newline = newline + `${m[1]}\{${m[2]}\}`;
				tester = m[3];
			}
			output.push(`${newline}${tester}`);
		});
		return output.join("\n");
	}
};
// Postprocessor object for Marked, updating `flags` to note the outside Tags being used
const postprocess = (prefix, tables, flags) => {
	return (html) => {
		let text = html
			// Condense multiple newlines (and whitespace) into a single newline,
			//   and temporarily hide them so that regexes work better
			.replace(/([ \t]*\n[ \t]*)+/g, "%%% split here %%%")
//			// Remove unneeded newlines between HTML tags
//			.replace(/>\s*%%% split here %%%\s*</g, "><")
//			// Remove <section> tag (introduced by footnotes extension)
//			.replace(/<\/?section[^>]*>/g, "")
			// Remove invalid `class` attributes (introduced by footnotes extension)
			.replace(/ class="[^"]*"/g, "")
			// Redo Footnotes header
			.replace(/<h2([^>]+)>Footnotes<\/h2>/g, "<h3$1>Footnotes</h3>")
			// Replace unneeded HTML entity for the apostrophe
			.replace(/&#39;/g, "'")
			// Replace unneeded HTML entity for the quotation mark
			.replace(/&quot;/g, "\"")
			// Remove whitespace at start and end
			.trim()
		let output = "";
		let m = false;
		//<sup><a id="footnotey-ref-H" href="#footnotey-H" data-footnotey-ref aria-describedby="footnotey-label">1</a></sup>
		//Redo footnotes into <InnerLink>s
		const matcher = new RegExp(`^(.*?)<sup><a id="${prefix}([^"]+)" href="#${prefix}([^"]+)"[^>]*>(.*?)</a></sup>(.*)$`);
		const footnotedata = {};
		while(m = text.match(matcher)) {
			const [x, pre, id, to, linktext, post] = m;
			if(!footnotedata[id]) {
				footnotedata[id] = 0;
			}
			const notenumber = ++footnotedata[id];
			output = output + `${pre}<sup><InnerLink id="${prefix}${id}-${notenumber}" to="${prefix}${to}">${linktext}</InnerLink></sup>`;
			text = post;
			flags.innerlink = true;
		}
		text = output + text;
		output = "";
		//<a href="#footnote-prefix-ref-H" data-footnote-prefix-backref aria-label="Back to reference H">↩</a>
		//Redo footnotes into <InnerLink>s
		const backmatcher = new RegExp(`^(.*?)<a href="#${prefix}([^"]+)"[^>]*?( aria-label="[^"]*)"[^>]*?>(.*?(?:<sup>([0-9]+)</sup>)?)</a>(.*)$`);
		while(m = text.match(backmatcher)) {
			const [x, pre, to, aria, linktext, linknumber, post] = m;
			const notenumber = linknumber || "1";
			output = output + `${pre}<InnerLink to="${prefix}${to}-${notenumber}"${aria}-${notenumber}">${linktext}</InnerLink>`;
			text = post;
			flags.innerlink = true;
		}
		text = output + text;
		output = "";
		//{jumplist header / etc}
		//Create JumpLists out of the plain-text code
		while(m = text.match(/^(.*?)<p>\{jumplist (.+)\}<\/p>(.*)$/)) {
			const [x, pre, jumplist, post] = m;
			output = output + `${pre}<div className="jumpList" id="${prefix}jumplist"><h2>Jump to:</h2><ul>`;
			jumplist.split(/ +\/ +/).forEach(input => {
				const hash = input.replace(/ +/g, "-").toLowerCase().replace(/[^-a-z0-9]/g, "");
				output = output + `<li tabIndex={0} role="link" onKeyDown={(e)=>e.key==="Enter"&&jumpScroller("${prefix}${hash}")} onClick={()=>jumpScroller("${prefix}${hash}")}>${input} &#8269;</li>`;
			});
			output = output + `</ul></div>`;
			text = post;
			flags.jumplist = true;
		}
		text = output + text;
		output = "";
		//{table0}
		//Add <DisplayTable> for plain-text table refs.
		while(m = text.match(/^(.*?)<p>\{table([0-9]+)\}<\/p>(.*)$/)) {
			const [x, pre, table, post] = m;
			output = output + pre;
			const index = parseInt(table);
			if(index >= 0 && tables && index < tables.length) {
				output = output + `<DisplayTable table={${JSON.stringify(tables[index])}} />`;
				flags.displaytable = true;
			} else {
				console.log(`ERROR: Bad Table: "{table${table}}" in ${prefix}`);
				output = output + `<p><code>\{table${table}\}</code></p>`;
			}
			text = post;
		}
		text = output + text;
		output = "";
		//<table>
		//Add "tableWrap" <div> around <table> so it can scroll horizontally
		while(m = text.match(/^(.*?)(<table>.+?<\/table>)(.*)$/)) {
			const [x, pre, table, post] = m;
			output = output + `${pre}<div className="tableWrap">${table}</div>`;
			text = post;
		}
		text = output + text;
		output = "";
		//<td>
		//Add "ion-activatable" class to <td>
		while(m = text.match(/^(.*?)<td>(.*?<\/td>)(.*)$/)) {
			const [x, pre, table, post] = m;
			output = output + `${pre}<td className="ion-activatable">${table}`;
			text = post;
		}
		text = output + text;
		output = "";
		//<br> and <hr>
		//Reformat <br> and <hr> into JSX <br/> and <hr/>
		while(m = text.match(/^(.*?)(<[bh]r[^>]*)(?<!\/)>(.*)$/)) {
			const [x, pre, br, post] = m;
			output = output + `${pre}${br}/>`;
			text = post;
		}
		output = output + text;
		//Restore newlines
		return output.replace(/%%% split here %%%/g, "\n");
	};
};

// Convert markdown code into HTML, updating `flags` to note the outside Tags being used
const convertDescription = (desc, prefix, tables) => {
	const marked = new Marked();
	const flags = {};
	marked.use({ gfm: true, hooks: {postprocess: postprocess(prefix, tables, flags), preprocess: preprocess()} });
	marked.use(markedFootnote({prefixId: prefix}));
	marked.use(gfmHeadingId({prefix}));
	marked.use(renderer(flags, prefix));
	const parsed = marked.parse(convertLinks(desc).join("\n"));
	return [`<>${parsed}</>`, flags];
};

// Convert markdown code into HTML for main#.json description, updating `flags` to note the outside Tags being used
const convertMainDescription = (desc, prefix, tables, singleTable) => {
	const marked = new Marked();
	const baseClass = "mainItem" + (singleTable ? " singleTable" : "");
	let output = "";
	const flags = {};
	marked.use({ gfm: true, hooks: {postprocess: postprocess(prefix, tables, flags), preprocess: preprocess()} });
	marked.use(markedFootnote({prefixId: prefix}));
	marked.use(gfmHeadingId({prefix}));
	marked.use(renderer(flags, prefix));
	desc.forEach(portion => {
		if(typeof portion === "string") {
			let m;
			if(m = portion.match(/^(#+) (.+)$/)) {
				switch(m[1].length) {
					case 1:
						// # Divider or Section-Title text ! optional-id
						let id = "";
						let text = m[2];
						const point = text.match(/(^.+?) ! (.+$)/);
						if(point) {
							id = point[2];
							text = point[1];
						}
						output = output + `<IonItemDivider className="mainItem"${id ? ` id="${prefix}${id}"` : ""}><IonLabel>${text}</IonLabel></IonItemDivider>`;
						flags.divider = true;
						flags.label = true;
						break;
					case 2:
						// ## link/text Title of the link
						// ## link/text Title of the link // Extra text at end of line
						// ## link/text Title of the link || Extra text underneath title
						output = output + `<MainLink info="${m[2]}" />`;
						flags.mainlink = true;
						break;
					case 3:
						// ### link/text Title of the link
						// ### link/text Title of the link // Extra text at end of line
						// ### link/text Title of the link || Extra text underneath title
						output = output + `<MainLink info="${m[2]}" className="indented" />`;
						flags.mainlink = true;
						break;
					case 6:
						// ###### link/text Title of the link
						// ###### link/text Title of the link // Extra text at end of line
						// ###### link/text Title of the link || Extra text underneath title
						output = output + `<MainLink info="${m[2]}" className="reversed" />`;
						flags.mainlink = true;
						break;
					default:
						// Errors
						output = output + `<IonItem><IonLabel>[Error 101: ${m[2]}]</IonLabel></IonItem>`;
						flags.item = true;
						flags.label = true;
				}
			} else if (portion === "---") {
				// Turns a horizontal rule to a Divider
				output = output + `<IonItemDivider className="mainItem divider"></IonItemDivider>`;
				flags.divider = true;
			} else if (portion) {
				// Error
				output = output + `<IonItem><IonLabel>[Error 102: ${portion}]</IonLabel></IonItem>`;
				flags.item = true;
				flags.label = true;
			}
		} else {
			// An array portion of a main.json description is treated as a "normal" description.
			output = output + `<IonItem className="${baseClass} basic"><IonLabel>${marked.parse(convertLinks(portion).join("\n"))}</IonLabel></IonItem>`;
			flags.item = true;
			flags.label = true;
		}
	});
	flags.list = true;
	return [`<IonList lines="full">${output}</IonList>`, flags];
};

const createItem = (info, prop) => {
	const { title, description, sources, parent_topics, siblings, subtopics, subhierarchy } = info;
	let output = `const _${prop} = {title: "${title}", sources: ${sources ? JSON.stringify(sources) : "[]"}`;
	parent_topics && (output = output + `, parent_topics: ${JSON.stringify(parent_topics)}`);
	siblings && (output = output + `, siblings: ${JSON.stringify(siblings)}`);
	subtopics && (output = output + `, subtopics: ${JSON.stringify(subtopics)}`);
	subhierarchy && (output = output + `, subhierarchy: ${JSON.stringify(subhierarchy)}`);
	output = output + `, jsx: ${description}};`;
	return output;
};

const createCopyItem = (info, prop, copy) => {
	const { title, sources, parent_topics, siblings, subtopics, subhierarchy } = info;
	let output = `const _${prop} = {..._${copy}`;
	title && (output = output + `, title: "${title}"`);
	sources && (output = output + `, sources: ${JSON.stringify(sources)}`);
	parent_topics && (output = output + `, parent_topics: ${JSON.stringify(parent_topics)}`);
	siblings && (output = output + `, siblings: ${JSON.stringify(siblings)}`);
	subtopics && (output = output + `, subtopics: ${JSON.stringify(subtopics)}`);
	subhierarchy && (output = output + `, subhierarchy: ${JSON.stringify(subhierarchy)}`);
	return output + "};";
};

const all_usable_groups = {...basic_data_groups};
// Ignoring sources, they are a special case
delete all_usable_groups["sources"];
const number_of_groups = Object.keys(all_usable_groups).length;

// If entities are used inside links inside tables.data, they must be converted before being saved to a file.
const entities_in_tables = [
	// [
	//   matching RegExp,
	//   replacement RegExp with global flag,
	//   code point to be the replacement (a number)
	// ]
	[/\{[^}]+&eacute;/, /&eacute;/g, 0x00E9],
	[/\{[^}]+&times;/, /&times;/g, 0x00D7]
];

// DO THE THINGS
//   Create all files, including ___link.tsx files.
Object.values(all_usable_groups).forEach((group, groupindex) => {
//Object.values({"main01": all_usable_groups["main01"]}).forEach((group, groupindex) => {
	const {data, datatype, link, num} = group;
	const final = [];
	const baselink = num ? `${link}${num}` : link;
	const copies = [];
	const copyRecord = {};
	const flags = {};
	Object.entries(data).forEach(([prop, value]) => {
		const {
			name: n, title: t, description: d, copyof,
			sources, tables, singleTable, previous,
			parent_topics, subtopics, siblings,
			subhierarchy
		} = value;
		// Convert entities in tables
		tables && entities_in_tables.forEach(([matcher, replacer, codepoint]) => {
			tables.forEach((table, ti) => {
				table.data.forEach((row, ri) => {
					row.forEach((col, ci) => {
						if(typeof col === "string") {
							// Don't bother testing non-strings
							if (col.match(matcher)) {
								const fixed = col.replace(replacer, String.fromCharCode(codepoint));
								tables[ti].data[ri][ci] = fixed;
							}
						} else if (Array.isArray(col) && col[1].match(matcher)) {
							// The second half of an array in this context is always a displayed string
							const fixed = col[1].replace(replacer, String.fromCharCode(codepoint));
							tables[ti].data[ri][ci][1] = fixed;
						}
					})
				})
			})
		})
		const info = { sources };
		let converted = [undefined, {}];
		switch (datatype) {
			case "main":
				info.title = t;
				info.subhierarchy = previous;
				copyof || (converted = convertMainDescription(d, `${link}-${prop}-`, tables, singleTable));
				break;
			case "rule":
				info.parent_topics = parent_topics;
				info.subtopics = subtopics;
				info.siblings = siblings;
				// passes through
			default:
				info.title = n;
				info.subhierarchy = subhierarchy;
				copyof || (d && (converted = convertDescription(d, `${link}-${prop}-`, tables)));
		}
		const [convertedDescription, newflags] = converted;
		convertedDescription !== undefined && (info.description = convertedDescription);
		Object.keys(newflags).forEach((flag) => {flags[flag] = true});
		if(copyof) {
			copies.push([prop, copyof, {...info}]);
		} else {
			copyRecord[prop] = true;
			final.push([prop, createItem(info, prop)]);
		}
	});
	let changed;
	let remaining = [...copies];
	do {
		changed = false;
		const missing = [];
		remaining.forEach(([prop, copyof, info]) => {
			if(copyRecord[copyof]) {
				final.push([prop, createCopyItem(info, prop, copyof)]);
				copyRecord[prop] = true;
				changed = true;
			} else {
				missing.push([prop, copyof, info]);
				//console.log(`MISSING "${copyof}" property in ${prop}.copyof`);
			}
		});
		remaining = missing;
	} while ((remaining.length > 0) && changed);
	remaining.forEach(([prop, copyof, info]) => {
		console.log(`MISSING "${copyof}" property in ${prop}.copyof`);
	});
	const imports = [];
	const ionic = [];
	// Check flags for Ionic components
	flags.list && ionic.push("IonList");
	flags.item && ionic.push("IonItem");
	flags.label && ionic.push("IonLabel");
	flags.divider && ionic.push("IonItemDivider");
	flags.ripple && ionic.push("IonRippleEffect");
	ionic.length > 0 && imports.push(`import {${ionic.join(",")}} from '@ionic/react';`);
	// Check flags for other components
	flags.displaytable && imports.push(`import DisplayTable from '../../components/DisplayTable';`);
	flags.link && imports.push(`import Link from '../../components/Link';`);
	flags.mainlink && imports.push(`import MainLink from '../../components/MainLink';`);
	flags.innerlink && imports.push(`import InnerLink from '../../components/InnerLink';`);
	flags.jumplist && imports.push(
		"const jumpScroller=(id:string)=>{let el=document.getElementById(id);let w=el&&el.parentElement;while(w&&w.tagName.toUpperCase()!==\"ION-CONTENT\"){w=w.parentElement}const yCoordinate=el?el.getBoundingClientRect().top+window.scrollY:80;w&&(w as HTMLIonContentElement).scrollByPoint(0,yCoordinate-80,500)};"
	);
	// Add saved info;
	const allprops = [];
	const output = imports.concat(final.map(([prop, object]) => {
		allprops.push(prop);
		if(flags.jumplist && object.match(/="jumpList"/)) {
			return object.replace(/\{title:/, "{hasJL:true,title:");
		}
		return object;
	}));
	// Add an export
	output.push(`export default {${allprops.map(prop => `${prop}:_${prop}`).join(",")}}`);
	// Write that file
	fs.writeFileSync(`./src/pages/subpages/__${baselink}.tsx`, output.join("\n"));
	// Announce success
	console.log(`Saved ./src/pages/subpages/__${baselink}.tsx (${groupindex + 1} of ${number_of_groups})`);
});
