import checkForEncodedLink, { convertTextToLink } from './tests/checkForEncodedLink.js';
import makeSpellBlock from './_prebuild-block-directives--spell.js'
import makeMonsterInfoBlock from './_prebuild-block-directives--minfo.js';

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
	return (output + test).replace(/&(times|quot|mdash|#[0-9]+)&/g, "&$1;");
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
		return linker(output.join(", ") + (
			output.length > 2 ? "," : ""
		) + (
			effOr ? (
				effOr === "effOr" ? " or " : effOr
			) : " and "
		) + last);
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
			const {prefix, flags, addToJumpList, logError, makeNewMarkedInstance, removeCurlyBrackets, parseSOURCE} = $;
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
				churn(n, attrs, ["clear", "cr", "source", "acquired", "inherited", "simple", "summonable", "maybesummon"], logError);
				const {cr, source, acquired, inherited, simple, summonable, maybesummon} = attrs;
				const head = `<div style={{clear:"both"}}></div><p className="statblockHeaderFull">`
					+ `<span>${text}</span><span>CR ${cr}</span></p>\n`;
				const marked2 = makeNewMarkedInstance();
				const sourcing = marked2.parseInline(parseSOURCE(source, true));
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
				// Affliction
				churn(n, attrs, [
					"iconP", "iconI", "iconC", "iconD", "iconA",
					"clear","poison","curse","infest","disease",
					"type","save","saveF","saveW","onset",
					"dcF","dcW","dcR","dcYou","dcIt","dcPoss","dcLev","dcHD","dcMod",
					"track", "trackmod",
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
					"cure","cure1","cure2","cure2c","cure3","cure3c",
					"extra","start","nolink"
				], logError);
				const {
					iconP, iconI, iconC, iconD, iconA,
					poison, curse, infest, disease,
					type, save, saveF, saveW, onset,
					track, trackmod,
					freq, freqR, freqM, freqH, freqD,
					eff, ineff, seceff,
					cure, cure1, cure2, cure2c, cure3, cure3c,
					extra, start, nolink
				} = attrs;
				const marked2 = makeNewMarkedInstance();
				//
				// START CODE
				//
				let rows = 2;
				const output = [
					`${maybeClear}<div className="sideNoteWrap${start ? " startAlign" : ""}">`,
					`<table className="noWrap"><tbody>`
				];
				//
				// ADD A TITLE LINE IF NEEDED
				//
				if(text) {
					rows++;
					output.push(
						"<tr>",
						`<th colSpan={4} scope="col" className="title">${text}</th>`,
						"</tr>"
					);
				}
				//
				// CONFIGURE TYPE BOX
				//
				let supertype = poison ? "Poison" : curse ? "Curse" : infest ? "Infestation" : disease ? "Disease" : "Affliction";
				if(type && supertype) {
					supertype = supertype + "; " + type;
				} else if (type) {
					supertype = type;
				}
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
				// ADD TYPE, SAVE DC
				//
				rows += 2;
				output.push(
					"<tr>",
					`<th scope="row">Type</th>`,
					`<td colSpan={3}>${supertype}</td>`,
					"</tr><tr>",
					`<th scope="row">Save DC</th>`,
					`<td colSpan={3}>${saveDC}</td>`,
					"</tr>"
				);
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
				// ADD ONSET, TRACK, FREQUENCY (if needed)
				//
				output.push("<tr>");
				if(frequency) {
					if(track && onset) {
						rows += 2;
						output.push(
							`<th scope="row">Onset</th>`,
							`<td colSpan={3}>${onset}</td>`,
							"</tr><tr>",
							`<th scope="row">Frequency</th>`,
							`<td colSpan={3}>${frequency}</td>`,
							"</tr><tr>",
							`<th scope="row">Track</th>`,
							`<td colSpan={3}>${marked2.parseInline(linker(track))}</td>`,
							"</tr><tr>"
						);
					} else if (track) {
						rows++;
						output.push(
							`<th scope="row">Frequency</th>`,
							`<td colSpan={3}>${frequency}</td>`,
							"</tr><tr>",
							`<th scope="row">Track</th>`,
							`<td colSpan={3}>${marked2.parseInline(linker(track))}</td>`,
							"</tr><tr>"
						);
					} else {
						rows += 2;
						output.push(
							`<th scope="row">Onset</th>`,
							`<td colSpan={3}>${onset || "immediate"}</td>`,
							"</tr><tr>",
							`<th scope="row">Frequency</th>`,
							`<td colSpan={3}>${frequency}</td>`,
							"</tr><tr>"
						);
					}
					if(trackmod) {
						rows++;
						output.push(
							`<th scope="row">Track</th>`,
							`<td colSpan={3}>${marked2.parseInline(linker(trackmod))}</td>`,
							"</tr><tr>"
						);
					}
				}
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
						rows++;
					} else {
						// INITIAL AND SECONDARY EFFECT TEXTS
						output.push(
							`<th scope="row">Initial Effect</th>`,
							`<td colSpan={3}>${marked2.parseInline(linker(ineff))}</td>`,
							"</tr><tr>",
							`<th scope="row">Secondary Effect</th>`,
							`<td colSpan={3}>${marked2.parseInline(linker(seceff))}</td>`
						);
						rows += 2;
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
						rows++;
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
							rows += 2;
							output.push(
								`<th scope="row">Initial Effect</th>`,
								`<td colSpan={3}>${marked2.parseInline(ii)}</td>`,
								"</tr><tr>",
								`<th scope="row">Secondary Effect</th>`,
								`<td colSpan={3}>${marked2.parseInline(ss)}</td>`
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
							cure2c ? "2 consecutive saves" : (
								cure3 ? "3 saves" : (
									cure3c ? "3 consecutive saves" : ""
								)
							)
						)
					)
				);
				if(cure) {
					if(cure1 || cure2 || cure2c || cure3 || cure3c) {
						logError(`---> extra cure# prop`)
					}
				}
				if(cureLine) {
					rows++;
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
					rows++;
					output.push(
						`<tr><td colSpan={4} className=\"extra\">${marked2.parseInline(linker(extra))}</td></tr>`
					);
				}
				//
				// ADD ICON
				//
				const icon = iconP ? ["Poison", "poison-bottle.svg", "/rule/poison"] : (
					iconD ? ["Disease", "paramecia.svg", "/rule/diseases"] : (
						iconC ? ["Curse", "death-note.svg", "/rule/curses"] : (
							iconI ? ["Infestation", "infested-mass.svg", "/rule/infestations"] : (
								iconA ? ["Affliction", "tumor.svg", "/rule/afflictions"] : false
							)
						)
					)
				);
				if(icon) {
					flags.icon = true;
					if(nolink) {
						output.splice(3, 0, `<th scope="row" rowSpan={${rows}}><IonIcon aria-label="${icon[0]}" icon="/icons/${icon[1]}" /></th>`);
					} else {
						flags.thlink = true;
						output.splice(3, 0, `<ThLink scope="row" rowSpan={${rows}} to="${icon[2]}"><IonIcon aria-label="${icon[0]}" icon="/icons/${icon[1]}" /></ThLink>`);
					}
				} else {
					logError(`---> missing icon property`);
				}
				//
				// END CODE BLOCK	
				//
				output.push(
					`</tbody></table></div>`
				);
				return output.join("");
			} else if (n === "drug") {
				// Drug
				churn(n, attrs, [
					"clear","type",
					"addict","minor","moderate","severe","dc",
					"price","eff1","eff2",
					"dmg","dmgStr","dmgDex","dmgCon","dmgInt","dmgWis","dmgCha",
					"start"
				], logError);
				const {
					type, addict, minor, moderate, severe, dc,
					price, eff1, eff2,
					dmg, dmgStr, dmgDex, dmgCon, dmgInt, dmgWis, dmgCha,
					start
				} = attrs;
				let rows = 0;
				const marked2 = makeNewMarkedInstance();
				//
				// START CODE
				//
				const output = [
					`${maybeClear}<div className="sideNoteWrap${start ? " startAlign" : ""}">`,
					`<table className="noWrap"><tbody>`
				];
				//
				// ADD A TITLE LINE IF NEEDED
				//
				if(text) {
					rows++;
					output.push(
						"<tr>",
						`<th colSpan={4} scope="col" className="title">${text}</th>`,
						"</tr>"
					);
				}
				//
				// CONFIGURE ADDICTION BOX
				//
				let addiction = minor || moderate || severe || addict || "";
				if(!addiction) {
					logError("---> Missing addiction line");
				} else if (dc) {
					addiction = addiction.concat(", Fortitude DC ", dc);
				} else {
					logError("---> Missing DC for addiction")
				}
				//
				// CONFIGURE PRICE
				//
				let gp = Number.parseFloat(price);
				let cost = "";
				if(gp !== gp || gp < 0) {
					cost = "[invalid]";
					logError("---> Bad price");
				} else if (Math.floor(gp) === gp) {
					cost = `${gp} gp`;
				} else {
					gp = gp * 10;
					if (Math.floor(gp) === gp) {
						cost = `${gp} sp`;
					} else {
						cost = `${gp * 10} cp`;
					}
				}
				//
				// CREATE UNIQUE ID
				//
				const id = prefix + linkify(text + "-" + type);
				//
				// ADD TYPE, ADDICTION, SAVE DC, PRICE
				//
				rows += 2;
				output.push(
					"<tr>",
					`<th id="${id}-type">Type</th>`,
					`<td headers="${id}-type">${type}</td>`,
					`<th id="${id}-addict">Addiction</th>`,
					`<td headers="${id}-addict">${addiction}</td>`,
					"</tr><tr>",
					`<th scope="row">Price</th>`,
					`<td colSpan={3}>${cost}</td>`,
					"</tr>"
				);
				//
				// CONFIGURE EFFECTS
				//
				[eff1, eff2].filter(x => x).forEach(eff => {
					rows++;
					output.push(
						"<tr>",
						`<th scope="row">Effect</th>`,
						`<td colSpan={3}>${marked2.parseInline(linker(eff))}</td>`,
						"</tr>"
					);
				});
				//
				// CONFIGURE DAMAGE
				//
				const damage = [];
				if(dmgStr) {
					damage.push(`${dmgStr} Str`);
				}
				if(dmgDex) {
					damage.push(`${dmgDex} Dex`);
				}
				if(dmgCon) {
					damage.push(`${dmgCon} Con`);
				}
				if(dmgInt) {
					damage.push(`${dmgInt} Int`);
				}
				if(dmgWis) {
					damage.push(`${dmgWis} Wis`);
				}
				if(dmgCha) {
					damage.push(`${dmgCha} Cha`);
				}
				if(dmg) {
					damage.push(dmg);
				}
				const last = damage.pop();
				let td = "";
				if(damage.length === 1) {
					td = `${damage[0]} and ${last}`;
				} else if(damage.length > 1) {
					td = `${damage.join(", ")}, and ${last}`;
				} else if(last) {
					td = last;
				} else {
					td = `MISSING`;
					logError(`---> Missing damage`);
				}
				rows++;
				output.push(
					"<tr>",
					`<th scope="row"><Link to="/rule/ability_damage">Damage</Link></th>`,
					`<td colSpan={3}>${td}</td>`,
					"</tr>"
				);
				//
				// ADD DRUG ICON
				//
				flags.icon = true;
				flags.thlink = true;
				output.splice(3, 0, `<ThLink scope="row" rowSpan={${rows}} to="/rule/drugs"><IonIcon aria-label="Drug" icon="/icons/syringe.svg" /></ThLink>`)
				//
				// END CODE BLOCK	
				//
				output.push(
					`</tbody></table></div>`
				);
				return output.join("");
			} else if (n === "trap") {
				// Trap
				churn(n, attrs, [
					"cr", "magic", "mechanical", "terrain",
					"pdc", "dddc", "trigger",
					"manual", "automatic", "repair", "eff",
					"start", "clear"
				], logError);
				const {
					cr, magic, mechanical, terrain,
					pdc, dddc, trigger,
					manual, automatic, repair, eff,
					start
				} = attrs;
				let rows = 0;
				const marked2 = makeNewMarkedInstance();
				//
				// START CODE
				//
				const output = [
					`${maybeClear}<div className="sideNoteWrap${start ? " startAlign" : ""}">`,
					`<table className="noWrap"><tbody>`
				];
				//
				// CREATE UNIQUE ID
				//
				const id = prefix + linkify(text + "-trap");
				//
				// ADD A TITLE LINE IF NEEDED
				//
				if(text) {
					rows++;
					output.push(
						"<tr>",
						`<th colSpan={4} scope="col" className="title">${text}</th>`,
						"</tr>"
					);
				}
				//
				// CONFIGURE TYPE AND CR
				//
				let type = magic || mechanical || "";
				if(!type) {
					logError("---> Missing trap type");
				}
				if(cr === undefined) {
					logError("---> Missing trap CR");
				}
				rows++
				output.push(
					"<tr>",
					`<th id="${id}-type">Type</th>`,
					`<td headers="${id}-type">${type}</td>`,
					`<th id="${id}-cr">CR</th>`,
					`<td headers="${id}-cr">${cr}</td>`,
					"</tr>"
				);
				//
				// CREATE ASSOCIATED TERRAINS
				//
				if(terrain) {
					rows++;
					output.push(
						`<tr><th scope="row">Terrain</th><td colSpan={3}>${terrain}</td></tr>`
					);
				}
				//
				// CREATE DCS
				//
				rows += 2;
				output.push(
					"<tr>",
					`<th scope="row" colSpan={2}>Perception DC</th>`,
					`<td colSpan={2}>${pdc}</td>`,
					"</tr><tr>",
					`<th scope="row" colSpan={2}>Disable Device DC</th>`,
					`<td colSpan={2}>${dddc}</td>`,
					"</tr>"
				);
				//
				// CREATE TRIGGER AND RESET
				//
				const reset = automatic || manual || repair || "none";
				rows++;
				output.push(
					"<tr>",
					`<th id="${id}-trigger">Trigger</th>`,
					`<td headers="${id}-trigger">${trigger}</td>`,
					`<th id="${id}-reset">Reset</th>`,
					`<td headers="${id}-reset">${reset}</td>`,
					"</tr>"
				);
				//
				// CONFIGURE EFFECTS
				//
				rows++;
				output.push(
					`<tr><td colSpan={4}><strong>Effect:</strong> ${marked2.parseInline(linker(eff))}</td></tr>`
				);
				//
				// ADD TRAP ICON
				//
				flags.icon = true;
				flags.thlink = true;
				output.splice(3, 0, `<ThLink scope="row" rowSpan={${rows}} to="/rule/elements_of_a_trap"><IonIcon aria-label="Trap" icon="/icons/wolf-trap.svg" /></ThLink>`)
				//
				// END CODE BLOCK	
				//
				output.push(
					`</tbody></table></div>`
				);
				return output.join("");
			} else if (n === "haunt") {
				// Haunt
				churn(n, attrs, [
					"notice", "hp", "weak", "trigger", "reset",
					"start", "clear"
				], logError);
				const {
					notice, hp, weak, trigger, reset,
					start
				} = attrs;
				let rows = 0;
				const marked2 = makeNewMarkedInstance();
				//
				// START CODE
				//
				const output = [
					`${maybeClear}<div className="sideNoteWrap${start ? " startAlign" : ""}">`,
					`<table className="noWrap"><tbody>`
				];
				//
				// CREATE UNIQUE ID
				//
				const id = prefix + linkify(text + "-haunt");
				//
				// ADD A TITLE LINE IF NEEDED
				//
				if(text) {
					rows++;
					output.push(
						"<tr>",
						`<th colSpan={5} scope="col" className="title">${text}</th>`,
						"</tr>"
					);
				}
				//
				// CREATE NOTICE LINE
				//
				if(!notice) {
					logError("---> missing haunt notice DC");
				} else {
					rows++;
					output.push(
						"<tr>",
						`<th scope="row" colSpan={2}>Notice</th><td colSpan={3}>${notice}</td>`,
						"</tr>"
					);
				}
				//
				// CREATE HP AND WEAKNESSES
				//
				if(!hp) {
					logError("---> missing haunt hp");
				} else if (weak) {
					rows++;
					output.push(
						"<tr>",
						`<th id="${id}-hp">hp</th><td>${hp}</td>`,
						`<th id="${id}-weak">Weaknesses</th><td colSpan={2}>${marked2.parseInline(linker(weak))}</td>`,
						"</tr>"
					);
				} else {
					rows++;
					output.push(
						"<tr>",
						`<th scope="row">hp</th><td colSpan={4}>${hp}</td>`,
						"</tr>"
					);
				}
				//
				// CREATE TRIGGER AND RESET
				//
				rows++;
				output.push(
					"<tr>",
					`<th id="${id}-trigger" colSpan={2}>Trigger</th>`,
					`<td headers="${id}-trigger">${trigger}</td>`,
					`<th id="${id}-reset">Reset</th>`,
					`<td headers="${id}-reset">${reset}</td>`,
					"</tr>"
				);
				//
				// ADD HAUNT ICON
				//
				flags.icon = true;
				flags.thlink = true;
				output.splice(3, 0, `<ThLink scope="row" rowSpan={${rows}} to="/rule/elements_of_a_haunt"><IonIcon aria-label="Haunt" icon="/icons/ghost.svg" /></ThLink>`)
				//
				// END CODE BLOCK	
				//
				output.push(
					`</tbody></table></div>`
				);
				return output.join("");
			} else if (n === "spell") {
				// Spell
				churn(n, attrs, [
					"clear", "source",
					"school", "enchantment", "compulsion", "mindAffecting", "abjuration", "force",
					"conjuration", "creation", "acid", "air", "calling", "chaotic", "charm", "cold",
					"curse", "darkness", "death", "disease", "divination", "draconic", "earth",
					"electricity", "emotion", "evil", "evocation", "fear", "figment", "fire",
					"glamer", "good", "haunted", "healing", "illusion", "languageDependent",
					"lawful", "light", "meditative", "necromancy", "pain", "pattern", "phantasm",
					"poison", "polymorph", "ruse", "scrying", "shadowDesc", "shadowSub", "sonic",
					"summoning", "teleportation", "transmutation", "universal", "water",
					"adp", "alc", "ant", "arc", "bld", "brd", "clr", "drd",
					"hnt", "inq", "inv", "mag", "med", "mes", "occ", "orc",
					"pal", "psy", "rgr", "rma", "sha", "skd", "sor", "spr",
					"sum", "usm", "war", "wit", "wiz", "faith",
					"ct", "ctFRA", "ctIm", "ctSw", "ctSt", "ctH", "ctM", "ctR",
					"cV", "cS", "cDF", "cMp", "cF", "cFDF", "cFDFp", "cFp",
					"cM", "cMDF", "cMDFp", "cSpecial", "cText",
					"r", "rTouch", "rPers", "rClose", "rFt", "rLong", "rMed", "rText",
					"target", "area", "areaOrTarget", "effect", "targetOrArea", "targetOrTargets", "targets",
					"dur", "durML", "durH", "durD", "durC", "durCon", "durDL",
					"durHL", "durI", "durM", "durP", "durR", "durRL",
					"save", "saveNo", "fort", "fortHalf", "fortPartial",
					"refl", "reflHalf", "reflPartial", "will", "willDisbelief",
					"willHalf", "willPartial", "svHarmless", "svObject",
					"sr", "srY", "srN", "srHarmless", "srObject",
					"harmless", "object"
				], logError);
				const marked2 = makeNewMarkedInstance();
				return makeSpellBlock(marked2, parseSOURCE, linker, maybeClear, attrs, logError);
			} else if (n === "spelldeitynote") {
				const marked2 = makeNewMarkedInstance();
				return (
					`<aside>${marked2.parse("Some spells are more common among the worshipers of a god. Worshipers of a spell's associated deity always treat the spell as common, and need not research it in order to prepare or learn it. This spell is available to members of other faiths, though some temples or religious organizations may proscribe the use of specific spells. -- [Inner Sea Gods pg. 228](source/inner_sea_gods)")}</aside>`
				);
			} else if (n === "minfo") {
				churn(n, attrs, [
					"source", "xp", "al", "lg", "ln", "le", "ng", "n", "ne", "cg", "cn", "ce",
					"fine", "diminutive", "tiny", "small", "medium", "large", "huge", "gargantuan", "colossal",
					"aberration", "animal", "construct", "dragon", "fey", "humanoid", "magicalBeast",
						"monstrousHumanoid", "ooze", "outsider", "plant", "undead", "vermin",
					"subs", "subtypes", "init",
					"sen", "senSpell", "dv", "llv", "keenScent", "scent", "thoughtsense", "greensight", "lifesense",
						"xray", "aav", "mistsight", "sid", "blindsight", "blindsense", "tremorsense", "pcp",
					"aura"
				], logError);
				const marked2 = makeNewMarkedInstance();
				return makeMonsterInfoBlock(marked2, parseSOURCE, linker, maybeClear, attrs, text, logError, setty);
			} else if (n === "archetype") {
				// Archetype
				churn(n, attrs, ["clear", "c", "r", "e"], logError);
				const {c, r, e} = attrs;
				flags.link = true;
				const link = convertTextToLink(text);
				const marked2 = makeNewMarkedInstance();
				if(!r) { logError("Missing r in " + text) }
				if(!e) { logError("Missing e in "+ text) }
				return (
					`<div className="archetype">`
					+ `<p><Link to="/arc-${c}/${link}">${text}</Link></p>`
					+ `<p><strong>Modifies or Replaces:</strong> ${removeCurlyBrackets(marked2.parseInline(r), true)}</p>`
					+ `<p>${removeCurlyBrackets(marked2.parseInline(linker(e)), true)}</p>`
					+ `</div>\n`
				);
			}
			return false;
		}
	};
};

export default getBlockDirectives;
