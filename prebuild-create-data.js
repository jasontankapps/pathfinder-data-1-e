import fs from 'fs';
import { Marked } from 'marked';
import markedFootnote from 'marked-footnote';
import { gfmHeadingId } from "marked-gfm-heading-id";
import { createDirectives, presetDirectiveConfigs } from 'marked-directive';
import basic_data_groups, { basic_data_by_link, templates_by_link } from './basic_data_groups.js';
import checkForEncodedLink, { convertTextToLink } from './tests/checkForEncodedLink.js';
import featTreeData from './json/feat_tree_data.json' with {type: 'json'};
import featInfo from './src/json/_data__all_links.json' with {type: 'json'};
import colorJSON from './json/colors.json' with {type: 'json'};

// Globally available variables

const $ = {
	flags: {},
	prefix: "",
	errorCount: 0,
	savedCount: 0,
	redirects: {}
};

const footnoteNames = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@&%#;?_=+~".split('');

// Get file contents
const get = (filename, logError = false) => {
	try {
		return fs.readFileSync(filename, 'utf8');
	} catch (err) {
		if (err.code === 'ENOENT') {
			logError && console.error(filename + ' does not exist');
			return "";
		}
		throw err;
	}
};

// Colors section
(() => {
	const {light, dark} = colorJSON;
	const colors = Object.keys(light).filter(c => c.match(/^[a-z]+$/));
	const filename = './src/store/generated/__colors.tsx';
	const output =
		`export type Color = "${colors.join('" | "')}";\n\n`
		+`type ColorObject = {[key in Color]: string};\n\n`
		+ `export const lightColors: ColorObject = {\n\t${colors.map(key => {
			return `"${key}": "${light[key]}"`;
		}).join(",\n\t")}\n};\n\n`
		+ `export const darkColors: ColorObject = {\n\t${colors.map(key => {
			return `"${key}": "${dark[key]}"`;
		}).join(",\n\t")}\n};\n`
	;
	const test = get(filename).trim();
	if(test !== output.trim()) {
		fs.writeFileSync(filename, output);
		console.log(`Saved ${filename}`);
		$.savedCount++;
	} else {
		console.log(`UNCHANGED ${filename}`);
	}
})();
(() => {
	const {light, dark} = colorJSON;
	const colors = Object.keys(light);
	const filename = './src/components/__Bookmarks.css';
	const prefix = `ion-icon, ion-item, ion-text ion-toggle {\n`;
	const output =
		`${prefix}\t${colors.map(c => `--${c}: ${light[c]}`).join(";\n\t")};\n}\n\n`
		+`@media (prefers-color-scheme: dark) {\n\t${prefix}\t\t`
		+`${colors.map(c => `--${c}: ${dark[c]}`).join(";\n\t\t")};\n\t}\n}\n`
	;
	const test = get(filename).trim();
	if(test !== output.trim()) {
		fs.writeFileSync(filename, output);
		console.log(`Saved ${filename}`);
		$.savedCount++;
	} else {
		console.log(`UNCHANGED ${filename}`);
	}
})();

// Handle implicit jumplists
const jl = (text, id) => {
	const jl = $.flags.implicitJumplist || [];
	$.flags.implicitJumplist = [...jl, [text, id] ];
};

const alternateBlocks = {
	level: "block",
	marker: "::",
	renderer: (token) => {
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
			$.flags.divider = true;
			return `<IonItemDivider className="mainItem divider"></IonItemDivider>`;
		} else if (n === "mainheader") {
			$.flags.divider = true;
			$.flags.label = true;
			return `<IonItemDivider className="mainItem"${id ? ` id="${$.prefix}${id}"` : ""}><IonLabel>${text}</IonLabel></IonItemDivider>`;
		} else if (n === "main") {
			$.flags.mainlink = true;
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
				const id = $.prefix + (attrs.id || text.toLowerCase().replace(/ +/g, "-").replace(/[^-a-z0-9]/g, ""));
				jl(text, id);
				if(attrs.extra) {
					return `<${n} id="${id}">${text} ${attrs.extra}</${n}>\n`;
				}
				return `<${n} id="${id}">${text}</${n}>\n`;
			}
			return `<${n}>${text}</${n}>`;
		} else if ("hl2hl3hl4hl5hl6".indexOf(n) >= 0) {
			const m = checkForEncodedLink(text, { bare: true });
			const t = "h" + n.slice(-1);
			if(!m) {
				console.log(`Bad ::${n} => [${text}]`);
				$.errorCount++;
				return `<${t}>${text}</${t}>\n`;
			}
			$.flags.link = true;
			const { pre, post, extra } = attrs;
			const [, link, linktext] = m;
			let inner = `<Link to="${link}">${linktext}</Link>`;
			if(pre) {
				inner = pre + inner;
			}
			if(post) {
				inner = inner + post;
			}
			if(extra) {
				inner = `${inner} ${extra}`;
			}
			if(attrs.jl) {
				const id = $.prefix + (attrs.id || linktext.toLowerCase().replace(/ +/g, "-").replace(/[^-a-z0-9]/g, ""));
				jl(linktext, id);
				return `<${t} id="${id}">${inner}</${t}>\n`;
			}
			return `<${t}>${inner}</${t}>`;
		}
		return false;
	}
};

const getAlternateBlocks = () => {
	return alternateBlocks;
}

const specialContainerBlocks = {
	level: "container",
	marker: ":::",
	renderer: (token) => {
		const {text = "", attrs = {}, meta} = token;
		const n = meta.name;
		const { c = "" } = attrs;
		let marked2;
		switch(n) {
			case "archetype":
				const trimmed = text.trim();
				const [ title = "", repl = "", desc = "" ] = trimmed.split(/\n+/);
				const link = convertTextToLink(title);
				$.flags.link = true;
				return `<div className="archetype">`
					+ `<p><Link to="/arc-${c}/${link}">${title}</Link></p>`
					+ `<p><strong>Modifes or Replaces:</strong> ${repl}</p>`
					+ `<p>${desc}</p>`
					+ `</div>\n`;
			case "item":
				$.flags.item = true;
				$.flags.label = true;
				marked2 = makeNewMarkedInstance();
				return (
					`<IonItem className="mainItem basic"><IonLabel>${
						removeCurlyBrackets(marked2.parse(text))
					}</IonLabel></IonItem>`
				);
			case "aside":
				marked2 = makeNewMarkedInstance();
				return (
					`<${n}>${
						removeCurlyBrackets(marked2.parse(text))
					}</${n}>`
				);
		}
		return false;
	}
};

const getSpecialContainerBlocks = () => {
	return specialContainerBlocks;
};
const getDuplicateSpecialContainerBlocks = () => {
	return {
		...specialContainerBlocks,
		marker: ";;;"
	};
};

const inlineTags = {
	level: "inline",
	marker: ":",
	renderer: (token) => {
		const {text = "", attrs = {}, meta} = token;
		const { hasAlternateText } = $.flags;
		const maybeJL = (attrs, text) => {
			if(attrs.jl) {
				// Add as jumplist
				const id = $.prefix + (
					attrs.id
					|| text
						.replace(/ +/g, "-")
						.toLowerCase()
						.replace(/[^-a-z0-9]/g, "")
				);
				jl(text, id);
				return id;
			}
		};
		let tag = meta.name;
		if(tag === "ripple" || tag === "hll") {
			// :ripple[link/Text]
			$.flags.link = true;
			$.flags.ripple = true;
			const m = checkForEncodedLink(text, { bare: true });
			if(m) {
				const [, link, text] = m;
				if(tag === "ripple") {
					return `<Link to="/${link}">${text}<IonRippleEffect /></Link>`;
				}
				// hll
				const id = maybeJL(attrs, text);
				return `<strong className="hl"${id ? ` id="${id}"` : ""}><Link to="/${link}">${text}</Link></strong>`
			}
			console.log(`Bad :${tag} => [${text}]`);
			$.errorCount++;
			tag = "b";
		} else if(
			(tag === "primary" && !hasAlternateText)
			|| (tag === "alternate" && hasAlternateText)
		) {
			// Do some minor MD replacements for bold/italics.
			const marked2 = makeNewMarkedInstance();
			return marked2.parseInline(text);
		} else if (tag === "hl" || tag === "HL") {
			const marked2 = makeNewMarkedInstance();
			const id = maybeJL(attrs, text);
			return `<strong className="hl"${id ? ` id="${id}"` : ""}>${marked2.parseInline(text)}</strong>`;
		}
		switch(tag) {
			case "primary":
			case "alternate":
				return "";
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
		const marked2 = makeNewMarkedInstance();
		const s = attrs.s || "/";
		const texts = text.split(s);
		const id = $.prefix + (attrs.id || texts[0].replace(/ +/g, "-").toLowerCase().replace(/[^-a-z0-9]/g, ""));
		// implicit jumplist
		attrs.jl && jl(texts[0], id);
		return `<${tag} id="${id}">${marked2.parseInline(texts.join(""))}</${tag}>`;
	}
};

const getInlineTags = () => {
	return inlineTags;
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
	const m = sourceInfo.match(/(.+?)[/]([-, 0-9]+)/);
	const source = m ? m[1] : sourceInfo;
	const sourceText = m ? `${source} pg. ${m[2]}` : source;
	const link = source.toLowerCase().replace(/[- ]/g, "_").replace(/[^-a-z_0-9]/g, "");
	return `[${sourceText}](source/${link})`;
};
// Renderer object for Marked
const renderer = () => {
	return {
		renderer: {
			// Changes <a> to <Link> and <InnerLink> as needed, updating `$.flags` to note the outside Tags being used
			link: ({href, text}) => {
				if (href.match(/^http/)) {
					return `<a href="${href}">${text}</a>`;
				} else if (href.match(/^#/)) {
					// Hash indicates internal link, updating `$.flags` to note the outside Tag being used
//					console.log(id, href);
					$.flags.innerlink = true;
					return `<InnerLink to="${$.prefix}${href.slice(1)}">${text}</InnerLink>`;
				}
				$.flags.link = true;
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
			while(m = tester.match(/^(.*)(?:\{|&#123;)SOURCE ([^}]+?)(?:\}|&#125;)(.*)$/)) {
				const sources = m[2].split(/;/).map(source => makeSourceLink(source));
				newline = newline + `${m[1]}**Sources** ${sources.join(", ")}`;
				tester = m[3];
			}
			output.push(`${newline}${tester}`);
		});
		return output.join("\n");
	}
};
// Postprocessor object for Marked, updating `$.flags` to note the outside Tags being used
const postprocess = (tables) => {
	let counter = 0;
	return (html) => {
		let text = html
			// Condense multiple newlines (and whitespace) into a single newline,
			//   and temporarily hide them so that regexes work better
			.replace(/([ \t]*\n[ \t]*)+/g, "%%% split here %%%")
//			// Remove unneeded newlines between HTML tags
//			.replace(/>\s*%%% split here %%%\s*</g, "><")
//			// Remove <section> tag (introduced by footnotes extension)
//			.replace(/<[/]?section[^>]*>/g, "")
			// Remove invalid `class` attributes (introduced by footnotes extension)
			.replace(/ class="[^"]*"/g, "")
			// Redo Footnotes header
			.replace(/<h2([^>]+)>Footnotes<[/]h2>/g, "<h3$1>Footnotes</h3>")
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
		const matcher = new RegExp(`^(.*?)<sup><a id="${$.prefix}([^"]+)" href="#${$.prefix}([^"]+)"[^>]*>(.*?)</a></sup>(.*)$`);
		const footnotedata = {};
		while(m = text.match(matcher)) {
			const [, pre, id, to, linktext, post] = m;
			if(!footnotedata[id]) {
				footnotedata[id] = 0;
			}
			const noteNumber = ++footnotedata[id];
			output = output + `${pre}<sup><InnerLink showBacklink="backlink-${$.prefix}${id}-${noteNumber}" id="${$.prefix}${id}-${noteNumber}" to="${$.prefix}${to}">${linktext}</InnerLink></sup>`;
			text = post;
			$.flags.innerlink = true;
		}
		text = output + text;
		output = "";
		//<a href="#footnote-prefix-ref-H" data-footnote-prefix-backref aria-label="Back to reference H">↩</a>
		//Redo footnotes into <InnerLink>s
		const backmatcher = new RegExp(`^(.*?)<a href="#${$.prefix}([^"]+)"[^>]*?( aria-label="[^"]*)"[^>]*?>(.*?(?:<sup>([0-9]+)</sup>)?)</a>(.*)$`);
		while(m = text.match(backmatcher)) {
			const [, pre, to, aria, linktext, linknumber, post] = m;
			const noteNumber = linknumber || "1";
			output = output + `${pre}<InnerLink id="backlink-${$.prefix}${to}-${noteNumber}" to="${$.prefix}${to}-${noteNumber}"${aria}-${noteNumber}">${linktext}</InnerLink>`;
			text = post;
			$.flags.innerlink = true;
		}
		text = output + text;
		output = "";
		//{jumplist header / etc}
		//Create JumpLists out of the plain-text code
		while(m = text.match(/^(.*?)<p>(?:\{|&#123;)jumplist ([^}]+)(?:\}|&#125;)<[/]p>(.*)$/)) {
			const [, pre, jumplist, post] = m;
			output = output + `${pre}<div className="jumpList" id="${$.prefix}jumplist"><h2>Jump to:</h2><ul>`;
			jumplist.split(/ +[/] +/).forEach(input => {
				const hash = input.replace(/ +/g, "-").toLowerCase().replace(/[^-a-z0-9]/g, "");
				output = output + `<li tabIndex={0} role="link" onKeyDown={(e)=>e.key==="Enter"&&jumpScroller("${$.prefix}${hash}")} onClick={()=>jumpScroller("${$.prefix}${hash}")}>${input}</li>`;
			});
			output = output + `</ul></div>`;
			text = post;
			$.flags.jumplist = true;
		}
		text = output + text;
		output = "";
		//{table0}
		//Add <DisplayTable> for plain-text table refs.
		// Check for curly brackets or their HTML entities, as they may get accidentally converted along the way.
		while(m = text.match(/^(.*?)<p>(?:\{|&#123;)table([0-9]+)(?:\}|&#125;)<[/]p>(.*)$/)) {
			const [, pre, table, post] = m;
			output = output + pre;
			const index = parseInt(table);
			if(index >= 0 && tables && index < tables.length) {
				output = output + `<DisplayTable table={${JSON.stringify(tables[index])}} />`;
				$.flags.displaytable = true;
			} else {
				console.log(`ERROR: Bad Table: "{table${table}}" in ${$.prefix}`);
				output = output + `<p><code>\{table${table}\}</code></p>`;
				$.errorCount++;
			}
			text = post;
		}
		text = output + text;
		output = "";
		//<table>
		//Add "tableWrap" <div> around <table> so it can be contained to one pageview and scroll horizontally
		while(m = text.match(/^(.*?)(<table>.+?<[/]table>)(.*)$/)) {
			const [, pre, table, post] = m;
			output = output + `${pre}<ScrollContainer id="${`${$.prefix}-table-${counter++}`}">${table}</ScrollContainer>`;
			text = post;
			$.flags.scrollContainer = true;
		}
		text = output + text;
		output = "";
		//<td>
		//Add "ion-activatable" class to <td>
		while(m = text.match(/^(.*?)<td( align="[^"]+")?>(.*?<[/]td>)(.*)$/)) {
			const [, pre, align, td, post] = m;
			output = output + `${pre}<td${align || ""} className="ion-activatable">${td}`;
			text = post;
		}
		text = output + text;
		output = "";
		//<br> and <hr>
		//Reformat <br> and <hr> into JSX <br/> and <hr/>
		while(m = text.match(/^(.*?)(<[bh]r[^>]*)(?<![/])>(.*)$/)) {
			const [, pre, br, post] = m;
			output = output + `${pre}${br}/>`;
			text = post;
		}
		output = output + text;
		//Create implicit jumplists
		if($.flags.implicitJumplist) {
			let pre = `<div className="jumpList" id="${$.prefix}jumplist"><h2>Jump to:</h2><ul>`;
			$.flags.implicitJumplist.forEach(pair => {
				const [text, id] = pair;
				pre = pre + `<li tabIndex={0} role="link" onKeyDown={(e)=>e.key==="Enter"&&jumpScroller("${id}")} onClick={()=>jumpScroller("${id}")}>${text}</li>`;
			});
			pre = pre + `</ul></div>`;
			$.flags.jumplist = true;
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
			const [, tag, content, etc] = m;
			final = final + tag + content.replace(/\{/g, "&#123;").replace(/\}/g, "&#125;");
			test = etc;
		}
		if(test) {
			console.log("ERROR, non-complete tag?: " + line);
			console.log(">> " + test);
			$.errorCount++;
		}
		return final;
	}).join("\n");
};

const makeNewMarkedInstance = (initialUse = { gfm: true }, ...midArguments) => {
	const marked = new Marked();
	marked.use(initialUse);
	marked.use(createDirectives([
		...presetDirectiveConfigs,
		getAlternateBlocks(),
		getSpecialContainerBlocks(),
		getDuplicateSpecialContainerBlocks(),
		getInlineTags()
	]));
	midArguments.forEach(option => marked.use(option));
	marked.use(gfmHeadingId({prefix: $.prefix}));
	marked.use(renderer());
	return marked;
};

// Convert markdown code into HTML, updating `$.flags` to note the outside Tags being used
const convertDescription = (temporaryFlags, desc, prefix, tables, openTag = "", closeTag = "") => {
	$.prefix = prefix;
	$.flags = {...temporaryFlags};
	const marked = makeNewMarkedInstance(
		{
			gfm: true,
			hooks: {
				postprocess: postprocess(tables),
				preprocess: preprocess()
			}
		},
		// Add footnotes to this primary instance.
		markedFootnote({prefixId: prefix})
	);

	// Parse the text
	const parsed = marked.parse(convertLinks(desc).join("\n"));
	// Remove temporary flags from the output.
	const flags = {...$.flags};
	Object.keys(temporaryFlags).forEach(prop => {
		delete flags[prop];
	});
	// Return the parsed output, plus flags.
	return [`<${openTag}>${removeCurlyBrackets(parsed)}</${closeTag}>`, flags];
};

const parseTemplate = (template, title, suffix, sourceText, desc, split = true) => {
	// !-DESC-! becomes the entry description
	// !-TITLE-! becomes the entry title
	// !-SUFFIX-! becomes the entry nameSuffix
	// !-SOURCE-! becomes a {SOURCE ...} line
	// !-N-! is a newline
	// !-^S-! is a footnote leading to Source info (not handled in this function)
	// !-BQ-! is a MarkDown blockquote notation (not handled in this function)
	// ??SOURCE:...?? only adds "..." if a Source exists
	// ??SUFFIX:...?? only adds "..." if a nameSuffix exists
	let constructed = template;
	let m;
	while(m = constructed.match(/^(.*?)\?\?([A-Z]+):(.+?)\?\?(.*$)/)) {
		const [, pre, looking, maybe, post] = m;
		if(
			(looking === "SOURCE" && sourceText)
			|| (looking === "SUFFIX" && suffix)
		) {
			constructed = `${pre}${maybe}${post}`;
		} else {
			constructed = `${pre}${post}`;
		}
	}
	constructed = constructed
		.replace(/!-DESC-!/g, desc.join("!-N-!"))
		.replace(/!-TITLE-!/g, title)
		.replace(/!-SUFFIX-!/g, suffix)
		.replace(/!-SOURCE-!/g, sourceText);

	return split ? constructed.split(/!-N-!/) : constructed;
};

// Convert markdown code into HTML, updating `$.flags` to note the outside Tags being used
const convertCompileableDescription = (
	temporaryFlags, template, d, title, suffix,
	prefix, compilationSources,
	openTag = "", closeTag = ""
) => {
	const desc = [...d];
	$.prefix = prefix;
	$.flags = {...temporaryFlags};
	const marked = makeNewMarkedInstance(
		{
			gfm: true,
			hooks: {
				postprocess: postprocess([]),
				preprocess: preprocess()
			}
		},
		// Add footnotes to this primary instance.
		markedFootnote({prefixId: prefix})
	);

	// Handle sources
	const sources = [];
	const dSource = [];
	compilationSources.forEach(s => {
		const [title, pg] = s;
		if(pg) {
			dSource.push(`${title}/${pg}`);
		} else {
			dSource.push(title);
		}
		sources.push(title);
	});
	const sourceText = dSource.length > 0 ? `{SOURCE ${dSource.join(";")}}` : "";

	// Parse the text
	const parsed = marked.parse(
		convertLinks(parseTemplate(template, title, suffix, sourceText, desc)).join("\n")
	);
	// Remove temporary flags from the output.
	const flags = {...$.flags};
	Object.keys(temporaryFlags).forEach(prop => {
		delete flags[prop];
	});
	// Return the parsed output, plus flags, plus source list.
	return [`<${openTag}>${removeCurlyBrackets(parsed)}</${closeTag}>`, flags, sources];
};

// Convert markdown code into HTML, updating `$.flags` to note the outside Tags being used
const compile = (compileFrom, prefix, temporaryFlags, openTag, closeTag) => {
	const { source, targets } = compileFrom;
	const {not_found, ...found} = basic_data_by_link[source];
	const desc = [];
	const footnotes = { count: 0, found: [] };
	targets.forEach(info => {
		if(Array.isArray(info)) {
			desc.push(...info);
		} else {
			const { limit, pre, join, post, modifyDescription = {}, template } = info;
			const [ender, ...mid] = join;
			const beginner = mid.pop();
			const { regex, replacement } = modifyDescription;
			const pool = [];
			if(typeof limit === "string") {
				Object.values(found).forEach(v => {
					v.category === limit && pool.push(v);
				});
			} else if(limit.uncategorized) {
				Object.values(found).forEach(v => {
					v.category === undefined && !v.copyof && pool.push(v);
				});
			} else if (limit.omit) {
				Object.entries(found).forEach(([prop, v]) => {
					(limit.omit.indexOf(prop) === -1) && pool.push(v);
				});
			} else if (limit.only) {
				pool.push(...limit.only.map(prop => found[prop]));
			}
			if(!pool.length) {
				desc.push("[ERROR: Limit not found]");
				return;
			}
			const compilation = [];
			const rx = regex && new RegExp(`^${regex}$`);
			const max = pool.length - 1;
			pool.forEach((obj, i) => {
				const level = obj.level || 0;
				let bq = "";
				let l = level;
				while(l > 0) {
					bq = bq + ">";
					l--;
				}
				// Handle the end-bits of `join`
				const d = obj.description.map(
					(line, j) => bq + (i || j ? "" : beginner) + line
				).join("!-N-!") + (i === max ? "" : ender);
				const sources = temporaryFlags.mainCompilation ? obj.compilationSources.map(arr => {
					// main pages don't handle footnotes well, so ignore them
					const [title, pg] = arr;
					return pg === undefined ? title : `${title}/${pg}`;
				}) : obj.compilationSources.map(arr => {
					// set up footnotes info
					const [title, pg] = arr;
					const detail = pg ? `{source/${title}/ pg. ${pg}}` : `{source/${title}}`;
					if(!footnotes[detail]) {
						const plain = pg ? `${title} pg. ${pg}` : title;
						footnotes[detail] = `[^${footnoteNames[footnotes.count++]}]`;
						footnotes.found.push([footnotes[detail], detail, plain, title]);
					}
					return footnotes[detail];
				});
				const dd = (rx ? d.replace(rx, replacement) : d).split(/!-N-!/);
				const parsing = parseTemplate(template, obj.name, obj.nameSuffix, `{SOURCE ${sources.join(";")}}`, dd, false);
				const final = parsing
					.replace(/!-\^S-!/g, sources.join(" "))
					.replace(/!-BQ-!/g, bq);
				if(level && (i !== max)) {
					const next = pool[i + 1].level;
					if(next >= level) {
						// next level is equal or bigger
						compilation.push(final, ...mid.map(line => bq + line));
					} else if (next) {
						// next level is smaller, but still nonzero
						const bq2 = bq.slice(1);
						compilation.push(final, ...mid.map(line => bq2 + line));
					} else {
						// next level is zero
						compilation.push(final, ...mid);
					}
				} else {
					compilation.push(final);
					i !== max && compilation.push(...mid);
				}
			});
			if(pre && compilation.length) {
				const bit = compilation.shift();
				compilation.unshift(pre + bit);
			}
			if(post && compilation.length) {
				const bit = compilation.pop();
				compilation.push(bit + post);
			}
			const final = compilation.join("!-N-!");
			desc.push(...final.split("!-N-!"));
		}
	});
	const keep = [];
	if(footnotes.count) {
		const noted = {};
		desc.push("");
		footnotes.found.forEach(fn => {
			const [letter, link, plain, title] = fn;
			if(noted[title]) {
				desc.push(`${letter}: ${plain}`);
			} else {
				desc.push(`${letter}: ${link}`);
				noted[title] = true;
				keep.push(title);
			}
		});
	}
	return [keep, ...convertDescription(temporaryFlags, desc, prefix, [], openTag, closeTag)];
};

const createItem = (info, prop) => {
	const { title, description, sources, parent_topics, siblings, subtopics, topLink, noFinder, addenda, disambiguation } = info;
	let output = `const _${prop} = {title: "${title}", sources: ${sources ? JSON.stringify(sources) : "[]"}`;
	parent_topics && (output = output + `, parent_topics: ${JSON.stringify(parent_topics)}`);
	siblings && (output = output + `, siblings: ${JSON.stringify(siblings)}`);
	subtopics && (output = output + `, subtopics: ${JSON.stringify(subtopics)}`);
	topLink && (output = output + `, topLink: ${JSON.stringify(topLink)}`);
	noFinder && (output = output + ", noFinder: true");
	addenda && (output = output + `, addenda: ${JSON.stringify(addenda)}`);
	disambiguation && (output = output + `, notBookmarkable: true`);
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
			$.errorCount++;
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
					if(!title) {
						$.errorCount++;
						return `<strong>ERROR</strong> trying to find "${cp}".`
					}
					const id = ids.join("-") + `-${prop}-coparent-${cp}`;
					return `<span className="coparent" id="${id}"><InnerLink mid to="${anchor + cp}">${title}</InnerLink></span>`;
				}).join(", "),
				(coparentsNolink || []).map(cp => {
					const title = getFeatName(cp);
					if(!title) {
						$.errorCount++;
						return `<strong>ERROR</strong> trying to find "${cp}".`
					}
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
].join("\n").trim();;

let testfile = get(`./src/pages/subpages/__feat_tree_page.tsx`).trim();

if(testfile === featTreePage) {
	console.log(`UNCHANGED: ./src/pages/subpages/__feat_tree_page.tsx`);
} else {
	// Write that file
	fs.writeFileSync(`./src/pages/subpages/__feat_tree_page.tsx`, featTreePage);
	// Announce success
	console.log(`Saved ./src/pages/subpages/__feat_tree_page.tsx`);
	$.savedCount++;
}

if($.errorCount) {
	console.log(`>> Found [${$.errorCount}] errors in feat tree.`);
	$.errorCount = 0;
}

//   Create all other files, including ___link.tsx files.
Object.values(all_usable_groups).forEach((group, groupindex) => {
//Object.values({"main01": all_usable_groups["main01"]}).forEach((group, groupindex) => {
	const {
		data,
		datatype,
		link,
		num
	} = group;
	const final = [];
	const baselink = num ? `${link}${num}` : link;
	const copies = [];
	const copyRecord = {};
	const groupFlags = {};
	const template = templates_by_link[link] || templates_by_link._basic;
	Object.entries(data).forEach(([prop, value]) => {
		// Temporary flags should NEVER match regular flags.
		const temporaryFlags = {};
		// Handle alternateOf
		let base;
		if(value.alternateOf) {
			temporaryFlags.hasAlternateText = true;
			base = {...data[value.alternateOf], ...value};
		} else {
			base = value;
		}
		// Get data
		const {
			name: n, title: t, description: d, copyof,
			sources, tables, topLink, parent_topics,
			subtopics, siblings, noFinder,
			nameSuffix, compilationSources,
			compileFrom, addenda, disambiguation
		} = base;
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
				groupFlags.list = true;
				if (compileFrom && !copyof) {
					temporaryFlags.mainCompilation = true;
					converted = compile(compileFrom, `${link}-${prop}-`, temporaryFlags, "IonList lines=\"full\"", "IonList");
					const newSources = [...info.sources, ...converted.shift()];
					let x = null;
					info.sources = newSources.sort().filter(source => {
						if(source === x) {
							return false;
						}
						x = source;
						return true;
					});
				} else if (!copyof) {
					converted = convertDescription(temporaryFlags, d, `${link}-${prop}-`, tables, "IonList lines=\"full\"", "IonList");
				}
				break;
			case "compileable":
				info.title = n;
				info.topLink = topLink;
				info.addenda = addenda;
				converted = convertCompileableDescription(
					temporaryFlags,
					template,
					d,
					n,
					nameSuffix,
					`${link}-${prop}-`,
					compilationSources
				);
				info.sources = converted.pop();
				break;
			case "rule":
				info.parent_topics = parent_topics;
				info.subtopics = subtopics;
				info.siblings = siblings;
				// passes through
			default:
				info.title = n;
				info.topLink = topLink;
				if(!copyof) {
					if(d) {
						converted = convertDescription(temporaryFlags, d, `${link}-${prop}-`, tables);
					} else if (compileFrom) {
						converted = compile(compileFrom, `${link}-${prop}-`, temporaryFlags);
						const newSources = [...info.sources, ...converted.shift()];
						let x = null;
						info.sources = newSources.sort().filter(source => {
							if(source === x) {
								return false;
							}
							x = source;
							return true;
						});
					} else {
						console.log(`ERROR: ${link}/${prop} does not have a description or a compileFrom property.`);
						$.errorCount++;
						converted = [ "ERROR: This entry has no description.", {} ];
					}
				}
		}
		const [convertedDescription, newflags] = converted;
		convertedDescription !== undefined && (info.description = convertedDescription);
		info.noFinder = noFinder;
		info.disambiguation = disambiguation;
		Object.keys(newflags).forEach((flag) => {groupFlags[flag] = true});
		if(copyof) {
			copies.push([prop, copyof, {...info}]);
		} else {
			copyRecord[prop] = true;
			final.push([prop, createItem(info, prop)]);
		}
	});
	let somethingChanged;
	let remaining = [...copies];
	do {
		somethingChanged = false;
		const missing = [];
		remaining.forEach(([prop, copyof, info]) => {
			if(copyRecord[copyof]) {
				if(Object.entries(info).filter(pair => pair[1] !== undefined).length === 0) {
					// This is a bare redirect.
					$.redirects[`${link}/${prop}`] = `${link}/${copyof}`;
				} else {
					final.push([prop, createCopyItem(info, prop, copyof)]);
					copyRecord[prop] = true;
				}
				somethingChanged = true;
			} else {
				missing.push([prop, copyof, info]);
			}
		});
		remaining = missing;
	} while ((remaining.length > 0) && somethingChanged);
	remaining.forEach(([prop, copyof]) => {
		console.log(`MISSING "${copyof}" property in ${prop}.copyof`);
		$.errorCount++;
	});
	const imports = [];
	const ionic = [];
	// Check groupFlags for Ionic components
	groupFlags.list && ionic.push("IonList");
	groupFlags.item && ionic.push("IonItem");
	groupFlags.label && ionic.push("IonLabel");
	groupFlags.divider && ionic.push("IonItemDivider");
	groupFlags.ripple && ionic.push("IonRippleEffect");
	ionic.length > 0 && imports.push(`import {${ionic.join(",")}} from '@ionic/react';`);
	// Check groupFlags for other components
	groupFlags.displaytable && imports.push(`import DisplayTable from '../../components/DisplayTable';`);
	groupFlags.link && imports.push(`import Link from '../../components/Link';`);
	groupFlags.mainlink && imports.push(`import MainLink from '../../components/MainLink';`);
	groupFlags.innerlink && imports.push(`import InnerLink from '../../components/InnerLink';`);
	groupFlags.scrollContainer && imports.push(`import ScrollContainer from '../../components/ScrollContainer';`);
	groupFlags.jumplist && imports.push(
		"const jumpScroller=(id:string)=>{let el=document.getElementById(id);if(el){el.classList.add(\"highlight\");setTimeout(()=>el.classList.remove(\"highlight\"),500)}let w=el&&el.parentElement;while(w&&w.tagName.toUpperCase()!==\"ION-CONTENT\"){w=w.parentElement}const yCoordinate=el?el.getBoundingClientRect().top+window.scrollY:80;w&&(w as HTMLIonContentElement).scrollByPoint(0,yCoordinate-80,500)};"
	);
	// Add saved info;
	const allprops = [];
	const output = imports.concat(final.map(([prop, object]) => {
		allprops.push(prop);
		if(groupFlags.jumplist && object.match(/="jumpList"/)) {
			return object.replace(/\{title:/, "{hasJL:true,title:");
		}
		return object;
	}));
	// Add an export
	output.push(`export default {${allprops.map(prop => `${prop}:_${prop}`).join(",")}}`);

	const filename = `./src/pages/subpages/__${baselink}.tsx`;
	testfile = get(filename).trim();
	const theOutput = output.join("\n").trim();

	if(testfile === theOutput) {
		console.log(`UNCHANGED: ${filename} (${groupindex + 1} of ${number_of_groups})`);
	} else {
		// Write that file
		fs.writeFileSync(filename, theOutput);
		// Announce success
		console.log(`Saved ${filename} (${groupindex + 1} of ${number_of_groups})`);
		$.savedCount++;
	}
});

const filename = `./src/json/_data__redirects.json`;
testfile = get(filename).trim();
const theOutput = JSON.stringify($.redirects).trim();
if(testfile === theOutput) {
	console.log(`UNCHANGED: ${filename}`);
} else {
	// Write that file
	fs.writeFileSync(filename, theOutput);
	// Announce success
	console.log(`Saved ${filename}`);
	$.savedCount++;
}

console.log(`\n\n>> Saved [${$.savedCount}] files (out of ${number_of_groups + 4}).`);

if($.errorCount) {
	console.log(`\n\n>> Found [${$.errorCount}] errors.`);
}
