#!/usr/bin/env node
import fs from 'fs';
import { Marked } from 'marked';
import markedFootnote from 'marked-footnote';
import { gfmHeadingId } from "marked-gfm-heading-id";
import { createDirectives, presetDirectiveConfigs } from 'marked-directive';
import basic_data_groups, { basic_data_by_link, templates_by_link } from './prebuild/basic_data_groups.js';
import checkForEncodedLink, { convertTextToLink } from './prebuild/tests/checkForEncodedLink.js';
import featTreeData from './json/feat_tree_data.json' with {type: 'json'};
import featInfo from './prebuild/__featNames.json' with {type: 'json'};
import colorJSON from './json/colors.json' with {type: 'json'};
import getInlineDirectives from './prebuild/inline-directives.js';
import getBlockDirectives from './prebuild/block-directives.js';
import getContainerDirectives from './prebuild/container-directives.js';

// Console log error
const logError = (...message) => {
	$.errorCount++;
	console.log(`[${$.current}]:`, ...message);
};

// Handle implicit jumplists
const addToJumpList = (text, id, possibleText) => {
	const jl = $.flags.implicitJumplist || [];
	let newText = text;
	if(typeof possibleText === "string") {
		switch(possibleText) {
			case "jl":
				// Ignore
				break;
			case "strip":
				// Remove non-alphanumerics and parentheticals at end
				newText = text.replace(/( +\(.+?\))*([^-a-zA-Z0-9])*$/, "");
				break;
			default:
				newText = possibleText;
		}
	}
	$.flags.implicitJumplist = [...jl, [newText, id] ];
};

const makeNewMarkedInstance = (initialUse = { gfm: true }, ...midArguments) => {
	const marked = new Marked();
	marked.use(initialUse);
	marked.use(createDirectives([
		...presetDirectiveConfigs,
		getBlockDirectives($, "::"),
		getContainerDirectives($, ":::"),
		getContainerDirectives($, ";;;"),
		getInlineDirectives($, "@")
	]));
	midArguments.forEach(option => marked.use(option));
	marked.use(gfmHeadingId({prefix: $.prefix}));
	marked.use(renderer(marked));
	return marked;
};

const parseSOURCE = (input, plain = false) => {
	// Changes {SOURCE Source Title/1;Source Title} using makeSourceLink() below
	let m = false;
	let newline = "";
	let tester = plain ? `‹SOURCE ${input}›` : input;
	while(m = tester.match(/^(.*)‹SOURCE ([^›]+?)›(.*)$/)) {
		const sources = m[2].split(/;/).map(source => makeSourceLink(source));
		newline = newline + `${m[1]}**Sources** ${sources.join(", ")}`;
		tester = m[3];
	}
	return newline + tester;
};

// Remove curly brackets
const removeCurlyBrackets = (input, inlineText) => {
	const replacer = (input) => input.replace(/\{/g, "&#123;").replace(/\}/g, "&#125;");
	const obfuscate = (input) => {
		return input
			.replace(/\n/g, "<span data-hiding></span>")
			.replace(/Span=\{([0-9]+)\}/g, "Span-=SpanNum$1=-")
			.replace(/=>/g, "-=ARROW=-")
			.split(/‹+/).map((bit, i) => {
				let m;
				if(i === 0) {
					//ignore
					return bit;
				} else if (m = bit.match(/(^.*?›+)(.*$)/)) {
					// Obfuscate <> inside of ‹links›
					const [, pre, post] = m;
					return pre.replace(/</g, "-=LEFT=-").replace(/>/g, "-=RIGHT=-") + post;
				}
				logError("Huh?", bit);
				return bit;
			}).join("‹");
	};
	const deobfuscate = input => input
		.replace(/-=LEFT=-/g, "<")
		.replace(/-=RIGHT=-/g, ">")
		.replace(/-=ARROW=-/g, "=>")
		.replace(/-=SpanNum([0-9]+)=-/g, "={$1}")
		.replace(/<span data-hiding><[/]span>/g, "\n");
	let test = obfuscate(input);
	let m;
	let final = "";
	if(inlineText) {
		if(m = test.match(/^(.+)(<.*)?$/)) {
			const [, content, next] = m;
			final = replacer(content);
			test = next || "";
		}
	}
	while(test && (m = test.match(/(^<.*?>)([^<]*)(.*$)/))) {
		const [, tag, content, etc] = m;
		final = final + tag + replacer(content);
		test = etc;
	}
	if(test) {
		if(inlineText) {
			final = final + replacer(test);
		} else {
			logError(`Incomplete tag? <${input}>\n>> ${test}`);
		}
	}
	return deobfuscate(final);

};

// Globally available variables and functions
const $ = {
	flags: {},
	temp: {},
	prefix: "",
	current: "",
	errorCount: 0,
	savedCount: 0,
	parsedCount: 0,
	unsavedCount: 0,
	limit: false,
	logError,
	addToJumpList,
	makeNewMarkedInstance,
	parseSOURCE,
	removeCurlyBrackets
};
const footnoteNames = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split('');
footnoteNames.push(...footnoteNames.map(x => x + x));

// Parse command-line arguments
process.argv.forEach(bit => {
	if(!bit.match(/^[A-Z]:[\\/]/)) {
		// Ignore file stuff
		if(!$.limit) {
			// If any limits are found, assume we're skipping colors and feat tree
			$.limit = [];
			$.skipColors = true;
			$.skipFeatTree = true;
		}
		let m;
		if(bit === "CSS") {
			// restore colors
			$.skipColors = false;
		} else if(bit === "TREE") {
			// restore feat tree
			$.skipFeatTree = false;
		} else if (m = bit.match(/^regex=(.+)$/)) {
			$.limit.push(new RegExp(m[1]));
		} else {
			$.limit.push(bit);
		}
	}
});

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
$.skipColors || (() => {
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
	$.parsedCount++;
})();
$.skipColors || (() => {
	const {light, dark} = colorJSON;
	const colors = Object.keys(light);
	const filename = './src/components/__Bookmarks.css';
	const prefix = `ion-icon, ion-item, ion-text, ion-toggle {\n`;
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
	$.parsedCount++;
})();

// Converts {some/Link: Text/s} into [Link: Texts](some/link_text)
const convertLinks = (input) => {
	let output = [];
	let m = null;
	input.forEach(line => {
		let converted = "";
		let base = line;
		while(m = checkForEncodedLink(base)) {
			const {pre, link, text, post} = m;
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
	const link = convertTextToLink(source);
	return `[${sourceText}](source/${link})`;
};
// Renderer object for Marked
const renderer = (instance) => {
	const parseAndClean = (text) => {
		if(text.match(/^(https?:[/]{2})?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&/=]*)$/)) {
			// GFM-Markdown will try to create a link for any URL-resembling text.
			// We don't want this.
			return text;
		}
		return instance
			.parseInline(text)
			.replace(/<div className="jumpList".*?<[/]div>/g, "");
	};
	return {
		renderer: {
			// Changes <a> to <Link> and <InnerLink> as needed, updating `$.flags` to note the outside Tags being used
			link: ({href, text}) => {
				const parsedText = parseAndClean(text);
				if (href.match(/^http/)) {
					return `<a href="${href}">${parsedText}</a>`;
				} else if (href.match(/^#/)) {
					// Hash indicates internal link, updating `$.flags` to note the outside Tag being used
					$.flags.innerlink = true;
					return `<InnerLink toTop to="${$.prefix}${href.slice(1)}">${parsedText}</InnerLink>`;
				}
				$.flags.link = true;
				return `<Link to="/${href}">${parsedText}</Link>`;
			},
			// Fixes <ol start="4"> to <ol start={4}>
			// Decided to fix this in postprocess
			// Archiving in case I need to remember how these things work
			/*
			list: (token) => {
				const ordered = token.ordered;
				const start = token.start;

				let body = '';
				for (let j = 0; j < token.items.length; j++) {
					const item = token.items[j];
					const parsed = parseAndClean(item.text);
					body += "<li>" + parsed + "</li>\n";
				}

				const type = ordered ? 'ol' : 'ul';
				const startAttr = (ordered && start !== 1) ? (' start={' + start + '}') : '';
				return '<' + type + startAttr + '>\n' + body + '</' + type + '>\n';
			}
			*/
		}
	};
};
// Preprocessor object for Marked
const preprocess = () => {
	return (text) => {
		let output = [];
		text.split(/\n/).forEach(line => output.push(parseSOURCE(line)));
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
			// Replace unneeded HTML entity for the open and close brackets
			.replace(/&#91;/g, "[").replace(/&#93;/g, "]")
			// Fix incorrect React syntax on ordered lists
			.replace(/(<ol [^>]*start=)"([0-9])"([^>]*>)/g, "$1{$2}$3")
			// Remove whitespace at start and end
			.trim();
		let output = "";
		let m = false;
		const { prefix, flags } = $;
		//<sup><a id="footnotey-ref-H" href="#footnotey-H" data-footnotey-ref aria-describedby="footnotey-label">1</a></sup>
		//Redo footnotes into <InnerLink>s
		const matcher = new RegExp(
			// pre                        id
			`^(.*?)<sup><a id="${prefix}([^"]+?)(?:(?<!-ref)-[0-9]+)?" `
			//                   to         linktext        post
			+ `href="#${prefix}([^"]+)"[^>]*>(.*?)</a></sup>(.*)$`
		);
		const footnotedata = {};
		while(m = text.match(matcher)) {
			const [, pre, id, to, linktext, post] = m;
			if(!footnotedata[id]) {
				footnotedata[id] = 0;
			}
			const noteNumber = ++footnotedata[id];
			output = output + `${pre}<sup><InnerLink showBacklink="backlink-${prefix}${id}-${noteNumber}" id="${prefix}${id}-${noteNumber}" data-hash-target to="${prefix}${to}">${linktext}</InnerLink></sup>`;
			text = post;
			flags.innerlink = true;
		}
		text = output + text;
		output = "";
		//<a href="#footnote-prefix-ref-H" data-footnote-prefix-backref aria-label="Back to reference H">↩</a>
		//Redo footnotes into <InnerLink>s
		const backmatcher =
			new RegExp(
				// pre                     to
				`^(.*?)<a href="#${prefix}([^"]+?)(?:(?<!-ref)-[0-9]+)?"[^>]*?`
				//  aria linktext                         linknumber?           post
				+ `( aria-label="[^"]*)"[^>]*?>(.*?(?:<sup>([0-9]+)</sup>)?)</a>(.*)$`
			);
		while(m = text.match(backmatcher)) {
			const [, pre, to, aria, linktext, linknumber, post] = m;
			const noteNumber = linknumber || "1";
			output = output + `${pre}<InnerLink id="backlink-${prefix}${to}-${noteNumber}" data-hash-target to="${prefix}${to}-${noteNumber}"${aria}-${noteNumber}">${linktext}</InnerLink>`;
			text = post;
			flags.innerlink = true;
		}
		text = output + text;
		output = "";
		//{table0}
		//Add <DisplayTable> for plain-text table refs.
		// Check for curly brackets or their HTML entities, as they may get accidentally converted along the way.
		while(m = text.match(/^(.*?)<p>‹table([0-9]+)›<[/]p>(.*)$/)) {
			const [, pre, table, post] = m;
			output = output + pre;
			const index = parseInt(table);
			if(index >= 0 && tables && index < tables.length) {
				output = output + `<DisplayTable table={${JSON.stringify(tables[index])}} />`;
				flags.displaytable = true;
			} else {
				output = output + `<p><code>‹table${table}›</code></p>`;
				logError(`ERROR: Bad Table: "‹table${table}›" in ${prefix}`);
			}
			text = post;
		}
		text = output + text;
		output = "";
		//<table>
		//Add "tableWrap" <div> around plain <table>s so they can be contained to one pageview and scroll horizontally
		while(m = text.match(/^(.*?)(<table>.+?<[/]table>)(.*)$/)) {
			const [, pre, table, post] = m;
			output = output + `${pre}<ScrollContainer id="${`${prefix}-table-${counter++}`}">${table}</ScrollContainer>`;
			text = post;
			flags.scrollContainer = true;
		}
		text = output + text;
		output = "";
		//<td>
		//Add "ion-activatable" class to <td> where needed
		//<Link to="/${link}">${text}<IonRippleEffect /></Link>
		//   /^(.*?)<td( align="[^"]+")?>(.*?<[/]td>)(.*)$/
		while(m = text.match(
			/^(.*?)<td( align="[^"]+")?>(\s*<Link to="[^"]+">[^<]+<IonRippleEffect [/]><[/]Link>\s*<[/]td>)(.*)$/)
		) {
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
		if(flags.implicitJumplist) {
			// WHY isn't this just InnerLink??
			let div = `<div className="jumpList" id="${prefix}jumplist"><h2>Jump to:</h2><ul>`;
			flags.implicitJumplist.forEach(pair => {
				const [text, id] = pair;
				div = div + `<li><InnerLink toTop to="${id}">${text}</InnerLink></li>`;
			});
			div = div + `</ul></div>`;
			flags.jumplist = true;
			// Use a marker if a jumplist needs to be placed specially.
			const m = output.match(/^(.*)<p>‹jumplist›<[/]p>(.*)$/);
			if(m) {
				const [, one, two] = m;
				output = one + div + two;
			} else {
				output = div + output;
			}
		}
		//Restore newlines
		return output.replace(/%%% split here %%%/g, "\n");
	};
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

// Convert compilation templates into descriptions
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
	const dSource = [];
	compilationSources.forEach(s => {
		const [title, pg] = s;
		if(pg) {
			dSource.push(`${title}/${pg}`);
		} else {
			dSource.push(title);
		}
	});
	const sourceText = dSource.length > 0 ? `‹SOURCE ${dSource.join(";")}›` : "";

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
	return [`<${openTag}>${removeCurlyBrackets(parsed)}</${closeTag}>`, flags];
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
			const { limit, sort, pre, join, post, modifyDescription = {}, template } = info;
			const [ender, ...mid] = join;
			const beginner = mid.pop();
			const { regex, replacement } = modifyDescription;
			const pool = [];
			if(typeof limit === "string") {
				Object.values(found).forEach(v => {
					v.category === limit && !v.redirect && pool.push(v);
				});
			} else if(limit.regex) {
				const rx = new RegExp(limit.regex);
				Object.values(found).forEach(v => {
					!v.redirect && v.category.match(rx) && pool.push(v);
				});
			} else if(limit.uncategorized) {
				Object.values(found).forEach(v => {
					v.category === undefined && !v.redirect && !v.copyof && pool.push(v);
				});
			} else if (limit.omit) {
				Object.entries(found).forEach(([prop, v]) => {
					!limit.omit.includes(prop) && !v.redirect && !v.copyof && pool.push(v);
				});
			} else if (limit.only) {
				pool.push(...limit.only.map(prop => found[prop]));
			}
			if(!pool.length) {
				desc.push("[ERROR: Limit not found]");
				return;
			}
			if(sort) {
				sort.toReversed().forEach(method => {
					const sorter = (
						method === "match"
							? (
								// match
								(a, b) => {
									const rx = new RegExp(limit.regex || "^.*");
									const x = (a.category.match(rx) || [""])[0];
									const y = (b.category.match(rx) || [""])[0];
									return x.localeCompare(y);
								}
							)
							: method === "name"
								? (
									// name
									(a, b) => a.name.localeCompare(b.name)
								)
								: (
									// category
									(a, b) => a.category.localeCompare(b.category)
								)
					);
					pool.sort(sorter);
				});
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
					const detail = pg ? `‹source/${title}« pg. ${pg}›` : `‹source/${title}›`;
					if(!footnotes[detail]) {
						const plain = pg ? `${title} pg. ${pg}` : title;
						footnotes[detail] = `[^${footnoteNames[footnotes.count++]}]`;
						footnotes.found.push([footnotes[detail], detail, plain, title]);
					}
					return footnotes[detail];
				});
				const dd = (rx ? d.replace(rx, replacement) : d).split(/!-N-!/);
				const parsing = parseTemplate(
					template,
					obj.name,
					obj.nameSuffix,
					`‹SOURCE ${sources.join(";")}›`,
					dd,
					false
				);
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
	if(footnotes.count > 0) {
		const noted = {};
		desc.push("");
		footnotes.found.forEach(fn => {
			const [letter, link, plain, title] = fn;
			if(noted[title]) {
				desc.push(`${letter}: ${plain}`);
			} else {
				desc.push(`${letter}: ${link}`);
				noted[title] = true;
			}
		});
	}
	return convertDescription(temporaryFlags, desc, prefix, [], openTag, closeTag);
};

const createItem = (info, prop) => {
	const { title, description, parent_topics, siblings, subtopics, topLink, noFinder, addenda, tree, disambiguation, className } = info;
	let output = `const _${prop} = {title: "${title}"`;
	parent_topics && (output = output + `, parent_topics: ${JSON.stringify(parent_topics)}`);
	siblings && (output = output + `, siblings: ${JSON.stringify(siblings)}`);
	subtopics && (output = output + `, subtopics: ${JSON.stringify(subtopics)}`);
	topLink && (output = output + `, topLink: ${JSON.stringify(topLink)}`);
	noFinder && (output = output + ", noFinder: true");
	addenda && (output = output + `, addenda: ${JSON.stringify(addenda)}`);
	tree && (output = output + `, tree: ${JSON.stringify(tree)}`);
	className && (output = output + `, className: "${className}"`);
	disambiguation && (output = output + `, notBookmarkable: true`);
	output = output + `, jsx: ${description}};`;
	return output;
};

const createCopyItem = (info, prop, copy) => {
	const { title, parent_topics, siblings, subtopics, topLink, noFinder, className } = info;
	let output = `const _${prop} = {..._${copy}`;
	title && (output = output + `, title: "${title}"`);
	parent_topics && (output = output + `, parent_topics: ${JSON.stringify(parent_topics)}`);
	siblings && (output = output + `, siblings: ${JSON.stringify(siblings)}`);
	subtopics && (output = output + `, subtopics: ${JSON.stringify(subtopics)}`);
	topLink && (output = output + `, topLink: ${JSON.stringify(topLink)}`);
	noFinder && (output = output + ", noFinder: true");
	className && (output = output + `, className: "${className}"`);
	return output + "};";
};

// If entities are used inside links inside tables.data, they must be converted before being saved to a file.
const entities_in_tables = [
	// [
	//   matching RegExp,
	//   replacement RegExp with global flag,
	//   code point to be the replacement (a number)
	// ]
	[/‹[^›]+&dagger;/, /&dagger;/g, 0x2020],
	[/‹[^›]+&Dagger;/, /&Dagger;/g, 0x2021],
	[/‹[^›]+&eacute;/, /&eacute;/g, 0x00E9],
	[/‹[^›]+&times;/, /&times;/g, 0x00D7]
];

// DO THE THINGS
if(!$.skipFeatTree) {
	const getFeatName = (prop) => {
		return featInfo[`feat/${prop}`] || false;
	};
	const parseFeatTree = (tree, ids = []) => {
		const anchor = "featTreePageAnchor-";
		const output = [];
		tree.forEach(branch => {
			const { prop, coparents, coparentsNolink, primary, leaves } = branch;
			$.current = "Feat Tree: " + prop;
			const link = "feat/" + prop;
			const title = getFeatName(prop);
			if(!title) {
				logError(`Cannot find tree.`);
				return output.push(`<div><strong>ERROR</strong> trying to find "${prop}".</div>`);
			}
			const id = primary ? (anchor + prop) : undefined;
			output.push(
				`<div className="leaf${(coparents ? " hasCoparents" : "")}"${id ? ` id="${id}"` : ""}>`,
				`<div className="leafName">${ids.length === 0 ? "" : String.fromCharCode(10551) + " "}`,
				`<Link to="/${link}">${title}</Link></div>`
			);
//			id && output.push(`<div id="${"dummy-" + id}"></div>`);
			if(coparents) {
				output.push(
					`<div className="coparents"><strong>Also requires:</strong> `,
					coparents.map(cp => {
						const title = getFeatName(cp);
						if(!title) {
							logError(`Couldn't find coparent "${cp}".`)
							return `<strong>ERROR</strong> trying to find "${cp}".`
						}
						const id = ids.join("-") + `-${prop}-coparent-${cp}`;
						return coparentsNolink ? `<span className="coparent">${title}</span>` : `<span className="coparent" id="${id}"><InnerLink toCenter to="${anchor + cp}">${title}</InnerLink></span>`;
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
	].join("\n").trim();

	const testfile = get(`./src/pages/subpages/__feat_tree_page.tsx`).trim();

	if(testfile === featTreePage) {
		console.log(`UNCHANGED: ./src/pages/subpages/__feat_tree_page.tsx`);
	} else {
		// Write that file
		fs.writeFileSync(`./src/pages/subpages/__feat_tree_page.tsx`, featTreePage);
		// Announce success
		console.log(`Saved ./src/pages/subpages/__feat_tree_page.tsx`);
		$.savedCount++;
	}
	$.parsedCount++;
}

if($.errorCount) {
	console.log(`>> Found [${$.errorCount}] errors in feat tree.`);
	$.errorCount = 0;
}

// Detemine what we're parsing
const getParsing = () => {
	const groups = {...basic_data_groups};
	// Ignoring sources, they are a special case
	delete groups["sources"];
	if(!$.limit) {
		return [groups, Object.keys(groups).length];
	}
	const newGroups = {};
	const rx = [];
	let count = 0;
	$.limit.forEach(prop => {
		if(typeof prop !== "string") {
			rx.push(prop);
		} else if(groups[prop]) {
			newGroups[prop] = groups[prop];
			count++;
		} else {
			logError(`CANNOT FIND: ["${prop}"]`);
		}
	});
	if(rx.length > 0) {
		Object.keys(groups).forEach(prop => {
			if(newGroups[prop]) { return; /* SKIP! */ }
			if(rx.some(regex => prop.match(regex))) {
				count++;
				newGroups[prop] = groups[prop];
				console.log("Matched " + prop);
			}
		});
	}
	return [newGroups, count];
};
const [all_usable_groups, number_of_groups] = getParsing();

//   Create all other files, including ___link.tsx files.
Object.entries(all_usable_groups).forEach((pairing, groupindex) => {
	const [groupProp, group] = pairing;
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
		$.current = `${groupProp}/${prop}`;
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
			tables, topLink, parent_topics,
			subtopics, siblings, noFinder, className,
			nameSuffix, compilationSources, redirect,
			compileFrom, addenda, disambiguation, tree
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
		const info = { className };
		let converted = [undefined, {}];
		switch (datatype) {
			case "main":
				info.title = t;
				groupFlags.list = true;
				if (compileFrom && !copyof && !redirect) {
					temporaryFlags.mainCompilation = true;
					converted = compile(compileFrom, `${link}-${prop}-`, temporaryFlags, "IonList lines=\"full\"", "IonList");
				} else if (!copyof && !redirect) {
					converted = convertDescription(temporaryFlags, d, `${link}-${prop}-`, tables, "IonList lines=\"full\"", "IonList");
				}
				break;
			case "compileable":
				if(!redirect) {
					info.title = n;
					info.topLink = topLink;
					info.addenda = addenda;
					info.tree = tree;
					converted = convertCompileableDescription(
						temporaryFlags,
						template,
						d,
						n,
						nameSuffix,
						`${link}-${prop}-`,
						compilationSources
					);
				}
				break;
			case "rule":
				info.parent_topics = parent_topics;
				info.subtopics = subtopics;
				info.siblings = siblings;
				// passes through
			default:
				info.title = n;
				info.topLink = topLink;
				if(!copyof && !redirect) {
					if(d) {
						converted = convertDescription(temporaryFlags, d, `${link}-${prop}-`, tables);
					} else if (compileFrom) {
						converted = compile(compileFrom, `${link}-${prop}-`, temporaryFlags, `div className="compilation"`, "div");
					} else {
						logError(`ERROR: ${link}/${prop} does not have a description or a compileFrom property.`);
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
		} else if (!redirect) {
			copyRecord[prop] = true;
			final.push([prop, createItem(info, prop)]);
		}
	});
	$.current = groupProp;
	let somethingChanged;
	let remaining = [...copies];
	do {
		somethingChanged = false;
		const missing = [];
		remaining.forEach(([prop, copyof, info]) => {
			if(copyRecord[copyof]) {
				final.push([prop, createCopyItem(info, prop, copyof)]);
				copyRecord[prop] = true;
				somethingChanged = true;
			} else {
				missing.push([prop, copyof, info]);
			}
		});
		remaining = missing;
	} while ((remaining.length > 0) && somethingChanged);
	remaining.forEach(([prop, copyof]) => {
		logError(`MISSING "${copyof}" property in ${prop}.copyof`);
	});
	const imports = [];
	const ionic = [];
	// Check groupFlags for Ionic components
	groupFlags.list && ionic.push("IonList");
	groupFlags.item && ionic.push("IonItem");
	groupFlags.label && ionic.push("IonLabel");
	groupFlags.divider && ionic.push("IonItemDivider");
	groupFlags.ripple && ionic.push("IonRippleEffect");
	groupFlags.icon && ionic.push("IonIcon");
	ionic.length > 0 && imports.push(`import {${ionic.join(",")}} from '@ionic/react';`);
	// Check groupFlags for other components
	groupFlags.displaytable && imports.push(`import DisplayTable from '../../components/DisplayTable';`);
	groupFlags.link && groupFlags.thlink && imports.push(`import Link, {ThLink} from '../../components/Link';`);
	groupFlags.link && !groupFlags.thlink && imports.push(`import Link from '../../components/Link';`);
	!groupFlags.link && groupFlags.thlink && imports.push(`import {ThLink} from '../../components/Link';`);
	groupFlags.mainlink && imports.push(`import MainLink from '../../components/MainLink';`);
	groupFlags.innerlink && imports.push(`import InnerLink from '../../components/InnerLink';`);
	groupFlags.scrollContainer && imports.push(`import ScrollContainer from '../../components/ScrollContainer';`);
	(flags.innerlink || flags.jumplist) && imports.push(`import InnerLink from '../../components/InnerLink';`);
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
	const testfile = get(filename).trim();
	const theOutput = output.join("\n").trim();

	if(testfile === theOutput) {
		//console.log(`UNCHANGED: ${filename} (${groupindex + 1} of ${number_of_groups})`);
		//return;
		$.unsavedCount++;
		if($.unsavedCount === 25) {
			console.log(`... (passing ${groupindex + 1} of ${number_of_groups})`);
			$.unsavedCount = 0;
		}
	} else {
		$.unsavedCount = 0;
		// Write that file
		fs.writeFileSync(filename, theOutput);
		// Announce success
		console.log(`Saved ${filename} (${groupindex + 1} of ${number_of_groups})`);
		$.savedCount++;
	}
	$.parsedCount++;
});

console.log(`\n\n>> Saved [${$.savedCount}] new files (out of ${$.parsedCount}).`);

if($.errorCount) {
	console.log(`\n\n>> Found [${$.errorCount}] errors.`);
}
