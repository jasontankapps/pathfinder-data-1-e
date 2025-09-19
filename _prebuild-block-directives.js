import checkForEncodedLink from './tests/checkForEncodedLink.js';

const churn = (n, attrs, list, logError) => {
	const found = [];
	const listing = new Set(list);
	Object.keys(attrs).forEach(key => {
		if(!listing.has(key)) {
			found.push([key, attrs[key]]);
		}
	});
	if(found.length) {
		logError("\n" + found.map(([key, value]) => `--> ::${n}{${key}=${JSON.stringify(value)}}`).join("\n"));
	}
};
const linker = (input) => {
	let m;
	let test = input;
	let output = "";
	while(m = checkForEncodedLink(test, {percent: true})) {
		const [pre, fulllink, text, post] = m;
		output = output + `${pre}[${text}](${fulllink})`;
		test = post;
	}
	return output + test;
};
const constructDC = ({ dcF, dcW, dcR, dcYou, dcIt, dcPoss, dcLev, dcHD, dcMod }) => {
	if(!(dcF || dcW || dcR || dcLev || dcHD)) {
		return "";
	}
	const parts = [ "10 + 1/2" ];
	dcF && parts.unshift("Fort");
	dcW && parts.unshift("Will");
	dcR && parts.unshift("Refl");
	const pre = dcYou ? "your" : "the";
	const pre2 = dcYou ? "your" : dcIt || "their";
	const post = dcPoss || (dcYou ? "" : "'s");
	if(dcLev) {
		parts.push(
			`${pre} ${dcLev}${post} level + ${pre2}`
		);
	} else {
		parts.push(
			`${pre} ${dcHD}${post} HD + ${pre2}`
		);
	}
	parts.push(dcMod, "modifier");
	return parts.filter(x => x).join(" ");
};
const convertIniSec = (attrs, prefix) => {
	const out = {};
	const x = prefix.length;
	let flag = false;
	Object.keys(attrs).forEach(key => {
		if(key.indexOf(prefix) === 0) {
			out[prefix.slice(x)] = attrs[key];
			flag = true;
		}
	});
	return flag && out;
};
const constructEffect = (attrs) => {
	const {
		effStr, effStrD, effDex, effDexD, effCon, effConD,
		effInt, effIntD, effWis, effWisD, effCha, effChaD,
		effExtra, effOr
	} = attrs;
	const output = [];
	let flag = false;
	let linked = false;
	const link = (input) => {
		flag = true;
		if(linked) {
			return input;
		}
		linked = true;
		return `{rule/${input}}`;
	};
	if(effStr) {
		output.push(`${effStr} ${link("Str damage")}`);
	}
	if(effStrD) {
		output.push(`${effStrD} ${link("Str drain")}`);
	}
	if(effDex) {
		output.push(`${effDex} ${link("Dex damage")}`);
	}
	if(effDexD) {
		output.push(`${effDexD} ${link("Dex drain")}`);
	}
	if(effCon) {
		output.push(`${effCon} ${link("Con damage")}`);
	}
	if(effConD) {
		output.push(`${effConD} ${link("Con drain")}`);
	}
	if(effInt) {
		output.push(`${effInt} ${link("Int damage")}`);
	}
	if(effIntD) {
		output.push(`${effIntD} ${link("Int drain")}`);
	}
	if(effWis) {
		output.push(`${effWis} ${link("Wis damage")}`);
	}
	if(effWisD) {
		output.push(`${effWisD} ${link("Wis drain")}`);
	}
	if(effCha) {
		output.push(`${effCha} ${link("Cha damage")}`);
	}
	if(effChaD) {
		output.push(`${effChaD} ${link("Cha drain")}`);
	}
	if(effExtra) {
		flag = true;
		output.push(effExtra);
	}
	if(!flag) {
		return flag;
	}
	const last = output.pop();
	if(output.length) {
		return linker(output.join(", ") + (effOr ? "or " : "and ") + last);
	}
	return linker(last);
};

const getBlockDirectives = (globalVariable, marker = "::") => {
	const $ = globalVariable;
	const linkify = (input) => input.toLowerCase().replace(/ +/g, "-").replace(/[^-a-z0-9]/g, "");
	return {
		level: "block",
		marker,
		renderer: (token) => {
			const {prefix, flags, addToJumpList, logError, makeNewMarkedInstance, parseSOURCE} = $;
			const {text, attrs = {}, meta} = token;
			const n = meta.name || "";
			const maybeClear = attrs.clear ? `<div style={{clear:"both"}}></div>` : "";
			if(n === "gh") {
				// General Header
				churn(n, attrs, ["clear"], logError);
				return `${maybeClear}<p className="statblockHeader">${text}</p>\n`;
			} else if (n === "mh") {
				// Monster Header
				churn(n, attrs, ["cr", "mr", "clear"], logError);
				const {cr, mr} = attrs;
				if(cr || mr) {
					const ender = (cr && mr) ? `CR ${cr}/MR ${mr}` : (cr ? `CR ${cr}` : `MR ${mr}`);
					return `${maybeClear}<p className="statblockHeaderFull"><span>${text}</span><span>${ender}</span></p>\n`;
				}
				return `${maybeClear}<p className="statblockHeader">${text}</p>\n`;
			} else if (n === "sh") {
				// Subheader
				churn(n, attrs, ["clear"], logError);
				return `${maybeClear}<p className="statblockSubHeader">${text}</p>\n`;
			} else if (n === "th") {
				// Template Header
				churn(n, attrs, ["clear", "cr", "sc", "acquired", "inherited", "simple", "summonable", "maybesummon"], logError);
				const {cr, sc, acquired, inherited, simple, summonable, maybesummon} = attrs;
				const head = `<div style={{clear:"both"}}></div><p className="statblockHeaderFull">`
					+ `<span>${text}</span><span>CR ${cr}</span></p>\n`;
				const marked2 = makeNewMarkedInstance();
				const sourcing = marked2.parseInline(parseSOURCE(sc, true));
				const typing = acquired && inherited ? "Both" : acquired ? "Acquired" : "Inherited";
				const simp = simple ? "Yes" : "No";
				const summons = summonable ? "Yes" : (maybesummon ? "See Text" : "No");
				return `${head}<p>${sourcing}<br/>`
					+`<strong>Acquired/Inherited Template</strong> ${typing}<br/>`
					+`<strong>Simple Template</strong> ${simp}<br/>`
					+`<strong>Usable with Summons</strong> ${summons}</p>\n`;
			} else if (n === "fh") {
				// Faith Header
				churn(n, attrs, ["clear", "sub"], logError);
				const {sub} = attrs;
				if(sub) {
					return `${maybeClear}<div className="headerLike"><div>${text}</div><div className="sub">${sub}</div></div>\n`;
				}
				return `${maybeClear}<div className="headerLike">${text}</div>\n`;
			} else if (n === "ph") {
				// Plane Header
				churn(n, attrs, ["clear", "sub", "desc", "cat"], logError);
				const {sub, desc, cat} = attrs;
				let main = `<p className="statblockHeader"><span>${text}</span></p>`;
				if(sub) {
					main = `<p className="statblockHeader withSub"><span>${text}</span></p><div className="sub">${sub}</div>`;
				}
				if(desc) {
					main = main + `<div className="indent"><em>${desc}</em></div>`;
				}
				if(cat) {
					main = main + `<div><strong>Category</strong> ${cat}</div>`;
				}
				return maybeClear + main + "\n";
			} else if (n === "mhr") {
				// Main page Horizontal rule
				churn(n, attrs, ["clear"], logError);
				flags.divider = true;
				return `${maybeClear}<IonItemDivider className="mainItem divider"></IonItemDivider>`;
			} else if (n === "mainheader") {
				churn(n, attrs, ["clear", "id"], logError);
				flags.divider = true;
				flags.label = true;
				return `${maybeClear}<IonItemDivider className="mainItem"${attrs.id ? ` id="${prefix}${attrs.id}"` : ""}><IonLabel>${text}</IonLabel></IonItemDivider>`;
			} else if (n === "main") {
				churn(n, attrs, ["clear", "ind", "rev", "to", "end", "endem", "bottom"], logError);
				const {ind, rev, to, end, endem, bottom} = attrs;
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
				return `${maybeClear}${output}info="${text}" />`;
			} else if ("h2h3h4h5h6".indexOf(n) >= 0) {
				churn(n, attrs, ["clear","jl","id","extra"], logError);
				if(attrs.jl) {
					const id = prefix + (attrs.id || linkify(text));
					addToJumpList(text, id, attrs.jl);
					if(attrs.extra) {
						return `${maybeClear}<${n} id="${id}" data-hash-target>${text} ${attrs.extra}</${n}>\n`;
					}
					return `${maybeClear}<${n} id="${id}" data-hash-target>${text}</${n}>\n`;
				}
				return `${maybeClear}<${n}>${text}</${n}>`;
			} else if ("hl2hl3hl4hl5hl6".indexOf(n) >= 0) {
				churn(n, attrs, ["clear","pre","post","extra","jl","id"], logError);
				const m = checkForEncodedLink(text, { bare: true });
				const t = "h" + n.slice(-1);
				if(!m) {
					logError(`Bad ::${n} => [${text}]`);
					return `${maybeClear}<${t}>${text}</${t}>\n`;
				}
				flags.link = true;
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
					const id = prefix + (attrs.id || linkify(linktext));
					addToJumpList(linktext, id, attrs.jl);
					return `${maybeClear}<${t} id="${id}" data-hash-target>${inner}</${t}>\n`;
				}
				return `${maybeClear}<${t}>${inner}</${t}>`;
			} else if (n === "aff") {
				churn(n, attrs, [
					"clear","poison","curse","infest","disease",
					"type","save","saveF","saveW","onset",
					"dcF","dcW","dcR","dcYou","dcIt","dcPoss","dcLev","dcHD","dcMod",
					"freq","freqR","freqM","freqH","freqD",
					"eff","ineff","seceff",
					"effStr", "effStrD", "effDex", "effDexD", "effCon", "effConD",
					"effInt", "effIntD", "effWis", "effWisD", "effCha", "effChaD",
					"effExtra", "effOr",
					"ineffStr", "ineffStrD", "ineffDex", "ineffDexD", "ineffCon", "ineffConD",
					"ineffInt", "ineffIntD", "ineffWis", "ineffWisD", "ineffCha", "ineffChaD",
					"ineffExtra", "ineffOr",
					"seceffStr", "seceffStrD", "seceffDex", "seceffDexD", "seceffCon", "seceffConD",
					"seceffInt", "seceffIntD", "seceffWis", "seceffWisD", "seceffCha", "seceffChaD",
					"seceffExtra", "seceffOr",
					"cure","cure1","cure2","cure2c",
					"extra","start"
				], logError);
				// Affliction
				const {
					poison, curse, infest, disease,
					type, save, saveF, saveW, onset,
					freq, freqR, freqM, freqH, freqD,
					eff, ineff, seceff,
					cure, cure1, cure2, cure2c,
					extra, start
				} = attrs;
				const marked2 = makeNewMarkedInstance();
				//
				// START CODE
				//
				const output = [
					`<div className="afflictionWrap${start ? " startAlign" : ""}">`,
					"<table><tbody>"
				];
				//
				// ADD A TITLE LINE IF NEEDED
				//
				if(text) {
					output.push(
						`<tr><th colSpan={4} scope="col" className="title">${text}</th></tr>`
					);
				}
				//
				// CONFIGURE TYPE BOX
				//
				let supertype = poison ? "Poison" : curse ? "Curse" : infest ? "Infestation" : disease ? "Disease" : "";
				if(type && supertype) {
					supertype = supertype + "; " + type;
				} else if (type) {
					supertype = type;
				}
				//
				// CREATE UNIQUE ID
				//
				const id = prefix + linkify(text + "-" + supertype);
				//
				// CONFIGURE SAVE DC
				//
				const saveDC = save || (
					saveF ? `Fort ${saveF}` : saveW ? `Will ${saveW}` : constructDC(attrs)
				);
				if(save && (saveF || saveW)) {
					logError("---> Invalid saveF or saveW")
				}
				//
				// CONFIGURE FREQUENCY
				//
				let frequency = freq;
				if(!freq) {
					//freqR, freqM, freqH, freqD,
					const unit = freqR ? "round" : (
						freqM ? "minute" : (
							freqH ? "hour": (
								freqD ? "day" : ""
							)
						)
					);
					if(unit) {
						frequency = `1/${unit} for ${freqR || freqM | freqH || freqD} ${unit}s`;
					}
				} else {
					if(freqR || freqM || freqH || freqD) {
						logError("---> Invalid freqR, freqM, freqH, or freqD")
					}
				}
				//
				// ADD TYPE, SAVE DC, ONSET, FREQUENCY
				//
				output.push(
					"<tr>",
					`<th id="${id}-type">Type</th>`,
					`<td headers="${id}-type">${supertype}</td>`,
					`<th id="${id}-save">Save DC</th>`,
					`<td headers="${id}-save">${saveDC}</td>`,
					"</tr><tr>",
					`<th id="${id}-onset">Onset</th>`,
					`<td headers="${id}-onset">${onset || "immediate"}</td>`,
					`<th id="${id}-freq">Frequency</th>`,
					`<td headers="${id}-freq">${frequency}</td>`,
					"</tr><tr>"
				);
				//
				// CONFIGURE EFFECTS
				//
				if(eff || (ineff && seceff)) {
					if(eff) {
						// BASIC EFFECT TEXT
						output.push(
							`<th scope="row">Effect</th>`,
							`<td colSpan={3}>${marked2.parseInline(linker(eff))}</td>`
						);
						if(ineff || seceff) {
							logError(`---> ineff/seceff used when eff present`)
						}
					} else {
						// INITIAL AND SECONDARY EFFECT TEXTS
						output.push(
							`<th id="${id}-ineff">Initial Effect</th>`,
							`<td headers="${id}-ineff">${marked2.parseInline(linker(ineff))}</td>`,
							`<th id="${id}-seceff">Secondary Effect</th>`,
							`<td headers="${id}-seceff">${marked2.parseInline(linker(seceff))}</td>`
						);
					}
				} else {
					if(ineff || seceff) {
						logError(`---> ${ineff ? "ineff" : "seceff"} used without other paired prop`)
					}
					//
					// USE ATTRS TO FIND EFFECTS
					// AND/OR INITIAL/SECONDARY EFFECTS
					//
					const ee = constructEffect(attrs);
					if(ee) {
						output.push(
							`<th scope="row">Effect</th>`,
							`<td colSpan={3}>${marked2.parseInline(ee)}</td>`
						);
					} else {
						const i = convertIniSec(attrs, "in");
						const s = convertIniSec(attrs, "sec");
						const ii = i && constructEffect(i);
						const ss = s && constructEffect(s);
						if(ii && ss) {
							output.push(
								`<th id="${id}-ineff">Initial Effect</th>`,
								`<td headers="${id}-ineff">${marked2.parseInline(ii)}</td>`,
								`<th id="${id}-seceff">Secondary Effect</th>`,
								`<td headers="${id}-seceff">${marked2.parseInline(ss)}</td>`
							);
						}
					}
				}
				//
				// CONFIGURE CURE LINE
				//
				const cureLine = cure ? marked2.parseInline(linker(cure)) : (
					cure1 ? "1 save" : (
						cure2 ? "2 saves" : (
							cure2c ? "2 consecutive saves" : ""
						)
					)
				);
				if(cure) {
					if(cure1 || cure2 || cure2c) {
						logError(`---> extra cure# prop`)
					}
				}
				if(cureLine) {
					output.push(
						`</tr><tr>`,
						`<th scope="row">Cure</th>`,
						`<td colSpan={3}>${cureLine}</td>`,
						"</tr>"
					);
				} else {
					output.push("</tr>");
				}
				//
				// ADD EXTRA INFO
				//
				if(extra) {
					output.push(
						`<tr><td colSpan={4}>${extra}</td></tr>`
					);
				}
				//
				// END CODE BLOCK	
				//
				output.push(
					`</tbody></table></div>`
				);
				return output.join("");
			}
			return false;
		}
	};
}


export default getBlockDirectives;
