import fs from 'fs';
import { Marked } from 'marked';
import markedFootnote from 'marked-footnote';
import { gfmHeadingId } from "marked-gfm-heading-id";
import { createDirectives, presetDirectiveConfigs } from 'marked-directive';
import basic_data_groups from './basic_data_groups.js';
import checkForEncodedLink from './tests/checkForEncodedLink.js';
import featTreeData from './json/feat_tree_data.json' with {type: 'json'};
import featInfo from './src/json/_data__all_links.json' with {type: 'json'};

// Handle implicit jumplists
const jl = (flags, text, id) => {
	const jl = flags.implicitJumplist || [];
	flags.implicitJumplist = [...jl, [text, id]];
};

const alternateBlocks = {
	level: "block",
	marker: "::",
	renderer: (token, flags, prefix, marked) => {
		const {text, attrs = {}, meta} = token;
		const {id, ind, rev, to, end, endem, bottom} = attrs;
		const n = meta.name || "";
		if(n === "mh") {
			const {cr, mr} = attrs;
			if(cr || mr) {
				const ender = (cr && mr) ? `CR ${cr}/MR ${mr}` : (cr ? `CR ${cr}` : `MR ${mr}`);
				return `<p className="statblockHeaderFull"><span>${text}</span><span>${ender}</span></p>\n`;
			}
			return `<p className="statblockHeader">${text}</p>\n`;
		} else if (n === "sh") {
			return `<p className="statblockSubHeader">${text}</p>\n`;
		} else if (n === "fh") {
			const {sub} = attrs;
			if(sub) {
				return `<div className="headerLike"><div>${text}</div><div className="sub">${sub}</div></div>\n`;
			}
			return `<div className="headerLike">${text}</div>\n`;
		} else if (n === "mhr") {
			flags.divider = true;
			return `<IonItemDivider className="mainItem divider"></IonItemDivider>`;
		} else if (n === "mainheader") {
			flags.divider = true;
			flags.label = true;
			return `<IonItemDivider className="mainItem"${id ? ` id="${prefix}${id}"` : ""}><IonLabel>${text}</IonLabel></IonItemDivider>`;
		} else if (n === "main") {
			flags.mainlink = true;
			let cn;
			let output = "<MainLink ";
			if(to) {
				output = output + `to="/${to}" `;
			}
			if(ind) {
				cn = "indented";
			} else if(rev) {
				cn = "reversed";
			}
			if(cn) {
				output = output + `className="${cn}" `;
			}
			if(end) {
				output = output + `end="${end}" `;
			}
			if(endem) {
				output = output + `endem="${endem}" `;
			}
			if(bottom) {
				output = output + `bottom="${bottom}" `;
			}
			return `${output}info="${text}" />`;
		} else if ("h2h3h4h5h6".indexOf(n) >= 0) {
			if(attrs.jl) {
				const id = prefix + (attrs.id || text.toLowerCase().replace(/ +/g, "-").replace(/[^-a-z0-9]/g, ""));
				jl(flags, text, id);
				if(attrs.extra) {
					return `<${n} id="${id}">${text} ${attrs.extra}</${n}>\n`;
				}
				return `<${n} id="${id}">${text}</${n}>\n`;
			}
			return `<${n}>${text}</${n}>`;
		}
		return false;
	}
};

const getAlternateBlocks = (flags, prefix, marked) => {
	return {...alternateBlocks, renderer: (token) => alternateBlocks.renderer(token, flags, prefix, marked)};
}

const specialContainerBlocks = {
	level: "container",
	marker: ":::",
	renderer: (token, flags = {}, marked) => {
		const {text = "", attrs = {}, meta} = token;
		const n = meta.name;
		const { c = "" } = attrs;
		switch(n) {
			case "archetype":
				const trimmed = text.trim();
				const [ title = "", repl = "", desc = "" ] = trimmed.split(/\n+/);
				const link = title.toLowerCase().replace(/[-/_ ]/g, "_").replace(/[^a-z_0-9]/g, "");
				flags.link = true;
				return `<div className="archetype">`
					+ `<p><Link to="/arc-${c}/${link}">${title}</Link></p>`
					+ `<p><strong>Modifes or Replaces:</strong> ${repl}</p>`
					+ `<p>${desc}</p>`
					+ `</div>\n`;
			case "item":
				flags.item = true;
				flags.label = true;
				return (
					`<IonItem className="mainItem basic"><IonLabel>${
						removeCurlyBrackets(marked.parse(text))
					}</IonLabel></IonItem>`
				);
		}
		return false;
	}
};

const getSpecialContainerBlocks = (flags, marked) => {
	return {...specialContainerBlocks, renderer: (token) => specialContainerBlocks.renderer(token, flags, marked)};
};

const inlineTags = {
	level: "inline",
	marker: ":",
	renderer: (token, prefix, flags) => {
		const {text = "", attrs = {}, meta} = token;
		let tag = meta.name;
		const s = attrs.s || "/";
		const texts = text.split(s);
		const id = prefix + (attrs.id || texts[0].replace(/ +/g, "-").toLowerCase().replace(/[^-a-z0-9]/g, ""));
		switch(tag) {
			case "b":
				tag = "strong";
				break;
			case "i":
				tag = "em";
				break;
			case "strong":
			case "span":
			case "em":
				break;
			default:
				return false;
		}
		// implicit jumplist
		attrs.jl && jl(flags, texts[0], id);
		return `<${tag} id="${id}">${texts.join("")}</${tag}>`;
	}
};

const getInlineTags = (flags, prefix) => {
	return {...inlineTags, renderer: (token) => inlineTags.renderer(token, prefix, flags)};
};

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
	const m = sourceInfo.match(/(.+?)\/([-, 0-9]+)/);
	const source = m ? m[1] : sourceInfo;
	const sourceText = m ? `${source} pg. ${m[2]}` : source;
	const link = source.toLowerCase().replace(/[- ]/g, "_").replace(/[^-a-z_0-9]/g, "");
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
			output.push(`${newline}${tester}`);
		});
		return output.join("\n");
	}
};
// Postprocessor object for Marked, updating `flags` to note the outside Tags being used
const postprocess = (prefix, tables, flags) => {
	let counter = 0;
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
		while(m = text.match(/^(.*?)<p>\{jumplist ([^}]+)\}<\/p>(.*)$/)) {
			const [x, pre, jumplist, post] = m;
			output = output + `${pre}<div className="jumpList" id="${prefix}jumplist"><h2>Jump to:</h2><ul>`;
			jumplist.split(/ +\/ +/).forEach(input => {
				const hash = input.replace(/ +/g, "-").toLowerCase().replace(/[^-a-z0-9]/g, "");
				output = output + `<li tabIndex={0} role="link" onKeyDown={(e)=>e.key==="Enter"&&jumpScroller("${prefix}${hash}")} onClick={()=>jumpScroller("${prefix}${hash}")}>${input}</li>`;
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
		//Add "tableWrap" <div> around <table> so it can be contained to one pageview and scroll horizontally
		while(m = text.match(/^(.*?)(<table>.+?<\/table>)(.*)$/)) {
			const [x, pre, table, post] = m;
			output = output + `${pre}<ScrollContainer id="${`${prefix}-table-${counter++}`}">${table}</ScrollContainer>`;
			text = post;
			flags.scrollContainer = true;
		}
		text = output + text;
		output = "";
		//<td>
		//Add "ion-activatable" class to <td>
		while(m = text.match(/^(.*?)<td>(.*?<\/td>)(.*)$/)) {
			const [x, pre, td, post] = m;
			output = output + `${pre}<td className="ion-activatable">${td}`;
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
		//Create implicit jumplists
		if(flags.implicitJumplist) {
			const info = flags.implicitJumplist;
			let pre = `<div className="jumpList" id="${prefix}jumplist"><h2>Jump to:</h2><ul>`;
			info.forEach(pair => {
				const [text, id] = pair;
				pre = pre + `<li tabIndex={0} role="link" onKeyDown={(e)=>e.key==="Enter"&&jumpScroller("${id}")} onClick={()=>jumpScroller("${id}")}>${text}</li>`;
			});
			pre = pre + `</ul></div>`;
			flags.jumplist = true;
			output = pre + output;
		}
		//Restore newlines
		return output.replace(/%%% split here %%%/g, "\n");
	};
};

// Remove curly brackets
const removeCurlyBrackets = (input) => {
	return input.split(/\n/).map(line => {
		let test = line;
		let m;
		let final = "";
		while(test && (m = test.match(/(^<.*?(?<!=)>(?![a-z_0-9]+\}))([^<]*)(.*$)/))) {
			const [x, tag, content, etc] = m;
			final = final + tag + content.replace(/\{/g, "&#123;").replace(/\}/g, "&#125;");
			test = etc;
		}
		if(test) {
			console.log("ERROR, non-complete tag?: " + line);
			console.log(">> " + test);
		}
		return final;
	}).join("\n");
};

// Convert markdown code into HTML, updating `flags` to note the outside Tags being used
const convertDescription = (desc, prefix, tables, openTag = "", closeTag = "") => {
	const marked = new Marked();
	const marked2 = new Marked();
	const flags = {};

	marked2.use({ gfm: true, hooks: {postprocess: postprocess(prefix, tables, flags), preprocess: preprocess()} });
	marked2.use(markedFootnote({prefixId: prefix}));
	marked2.use(gfmHeadingId({prefix}));
	marked2.use(renderer(flags, prefix));

	marked.use({ gfm: true, hooks: {postprocess: postprocess(prefix, tables, flags), preprocess: preprocess()} });
	marked.use(createDirectives([
		...presetDirectiveConfigs,
		getAlternateBlocks(flags, prefix, marked),
		getSpecialContainerBlocks(flags, marked),
		getInlineTags(flags, prefix)
	]));
	marked.use(markedFootnote({prefixId: prefix}));
	marked.use(gfmHeadingId({prefix}));
	marked.use(renderer(flags, prefix));
	const parsed = marked.parse(convertLinks(desc).join("\n"));
	return [`<${openTag}>${removeCurlyBrackets(parsed)}</${closeTag}>`, flags];
};

const createItem = (info, prop) => {
	const { title, description, sources, parent_topics, siblings, subtopics, topLink, noFinder } = info;
	let output = `const _${prop} = {title: "${title}", sources: ${sources ? JSON.stringify(sources) : "[]"}`;
	parent_topics && (output = output + `, parent_topics: ${JSON.stringify(parent_topics)}`);
	siblings && (output = output + `, siblings: ${JSON.stringify(siblings)}`);
	subtopics && (output = output + `, subtopics: ${JSON.stringify(subtopics)}`);
	topLink && (output = output + `, topLink: ${JSON.stringify(topLink)}`);
	noFinder && (output = output + ", noFinder: true");
	output = output + `, jsx: ${description}};`;
	return output;
};

const createCopyItem = (info, prop, copy) => {
	const { title, sources, parent_topics, siblings, subtopics, topLink, noFinder } = info;
	let output = `const _${prop} = {..._${copy}`;
	title && (output = output + `, title: "${title}"`);
	sources && (output = output + `, sources: ${JSON.stringify(sources)}`);
	parent_topics && (output = output + `, parent_topics: ${JSON.stringify(parent_topics)}`);
	siblings && (output = output + `, siblings: ${JSON.stringify(siblings)}`);
	subtopics && (output = output + `, subtopics: ${JSON.stringify(subtopics)}`);
	topLink && (output = output + `, topLink: ${JSON.stringify(topLink)}`);
	noFinder && (output = output + ", noFinder: true");
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
	[/\{[^}]+&dagger;/, /&dagger;/g, 0x2020],
	[/\{[^}]+&Dagger;/, /&Dagger;/g, 0x2021],
	[/\{[^}]+&eacute;/, /&eacute;/g, 0x00E9],
	[/\{[^}]+&times;/, /&times;/g, 0x00D7]
];

// DO THE THINGS
const getFeatName = (prop) => {
	return featInfo[`feat/${prop}`] || false;
};
const parseFeatTree = (tree, ids = []) => {
	const anchor = "featTreePageAnchor-";
	const output = [];
	tree.forEach(branch => {
		const { prop, coparents, coparentsNolink, primary, leaves } = branch;
		const link = "feat/" + prop;
		const title = getFeatName(prop);
		if(!title) {
			return output.push(`<div><strong>ERROR</strong> trying to find "${prop}".</div>`);
		}
		const id = primary ? (anchor + prop) : undefined;
		const hasCoparents = coparents || coparentsNolink;
		output.push(
			`<div className="leaf${(hasCoparents ? " hasCoparents" : "")}"${id ? ` id="${id}"` : ""}>`,
			`<div className="leafName">${ids.length === 0 ? "" : String.fromCharCode(10551) + " "}`,
			`<Link to="/${link}">${title}</Link></div>`
		);
//		id && output.push(`<div id="${"dummy-" + id}"></div>`);
		if(hasCoparents) {
			output.push(
				`<div className="coparents"><strong>Also requires:</strong> `,
				(coparents || []).map(cp => {
					const title = getFeatName(cp);
					if(!title) { return `<strong>ERROR</strong> trying to find "${cp}".` }
					const id = ids.join("-") + `-${prop}-coparent-${cp}`;
					return `<span className="coparent" id="${id}"><InnerLink mid to="${anchor + cp}">${title}</InnerLink></span>`;
				}).join(", "),
				(coparentsNolink || []).map(cp => {
					const title = getFeatName(cp);
					if(!title) { return `<strong>ERROR</strong> trying to find "${cp}".` }
					return `<span className="coparent">${title}</span>`;
				}).join(", "),
				"</div>"
			);
		} else if (ids.length === 0) {
			output.push(`<div className="coparents"><strong>Base Feat</strong></div>`);
		}
		leaves && output.push(parseFeatTree(leaves, [...ids, prop]));
		output.push("</div>");
	});
	return output.join("");
};

const featTreePage = [
	"import Link from '../../components/Link';",
	"import InnerLink from '../../components/InnerLink';",
	"const jsx=<>"
		//+ parseFeatTree(featTreeData)
		+ featTreeData.map(ftd => `<section>${parseFeatTree([ftd])}</section>`).join("")
		+ "</>;",
	"export default jsx;"
];

// Write that file
fs.writeFileSync(`./src/pages/subpages/__feat_tree_page.tsx`, featTreePage.join("\n"));
// Announce success
console.log(`Saved ./src/pages/subpages/__feat_tree_page.tsx`);

//   Create all other files, including ___link.tsx files.
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
			sources, tables, topLink, parent_topics,
			subtopics, siblings, noFinder
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
				flags.list = true;
				copyof || (converted = convertDescription(d, `${link}-${prop}-`, tables, "IonList lines=\"full\"", "IonList"));
				break;
			case "rule":
				info.parent_topics = parent_topics;
				info.subtopics = subtopics;
				info.siblings = siblings;
				// passes through
			default:
				info.title = n;
				info.topLink = topLink;
				copyof || (d && (converted = convertDescription(d, `${link}-${prop}-`, tables)));
		}
		const [convertedDescription, newflags] = converted;
		convertedDescription !== undefined && (info.description = convertedDescription);
		info.noFinder = noFinder;
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
	flags.scrollContainer && imports.push(`import ScrollContainer from '../../components/ScrollContainer';`);
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
