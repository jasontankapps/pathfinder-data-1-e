import checkForEncodedLink from './tests/checkForEncodedLink.js';

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
				return `${maybeClear}<p className="statblockHeader">${text}</p>\n`;
			} else if (n === "mh") {
				// Monster Header
				const {cr, mr} = attrs;
				if(cr || mr) {
					const ender = (cr && mr) ? `CR ${cr}/MR ${mr}` : (cr ? `CR ${cr}` : `MR ${mr}`);
					return `${maybeClear}<p className="statblockHeaderFull"><span>${text}</span><span>${ender}</span></p>\n`;
				}
				return `${maybeClear}<p className="statblockHeader">${text}</p>\n`;
			} else if (n === "sh") {
				// Subheader
				return `${maybeClear}<p className="statblockSubHeader">${text}</p>\n`;
			} else if (n === "th") {
				// Template Header
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
				const {sub} = attrs;
				if(sub) {
					return `${maybeClear}<div className="headerLike"><div>${text}</div><div className="sub">${sub}</div></div>\n`;
				}
				return `${maybeClear}<div className="headerLike">${text}</div>\n`;
			} else if (n === "ph") {
				// Plane Header
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
				flags.divider = true;
				return `${maybeClear}<IonItemDivider className="mainItem divider"></IonItemDivider>`;
			} else if (n === "mainheader") {
				flags.divider = true;
				flags.label = true;
				return `${maybeClear}<IonItemDivider className="mainItem"${attrs.id ? ` id="${prefix}${attrs.id}"` : ""}><IonLabel>${text}</IonLabel></IonItemDivider>`;
			} else if (n === "main") {
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
				const {
					poison, curse, infest, disease,
					type, save, saveF, onset,
					freq, freqR, freqM, freqH, freqD,
					eff, ineff, seceff,
					cure, cure1, cure2, cure2c,
					extra
				} = attrs;
				const marked2 = makeNewMarkedInstance();
				const output = [
					`<div className="afflictionWrap">`,
					"<table><tbody>"
				];
				if(text) {
					output.push(
						`<tr><th colSpan={4} scope="col" className="title">${text}</th></tr>`
					);
				}
				let supertype = poison ? "Poison" : curse ? "Curse" : infest ? "Infestation" : disease ? "Disease": "";
				if(type && supertype) {
					supertype = supertype + "; " + type;
				} else if (type) {
					supertype = type;
				}
				const id = prefix + linkify(text + "-" + supertype);
				const saveDC = save || (
					saveF ? `Fort ${saveF}` : `-`
				);
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
				}
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
				const linker = (input) => {
					let m;
					let test = input;
					let output = "";
					while(m = test.match(/^(.*?)%%(.+?)%%(.*$)/)) {
						const [, pre, link, post] = m;
						output = output + `${pre}{${link}}`;
						test = post;
					}
					test = output + test;
					output = "";
					while(m = checkForEncodedLink(test)) {
						const [pre, fulllink, text, post] = m;
						output = output + `${pre}[${text}](${fulllink})`;
						test = post;
					}
					return output + test;
				};
				if(eff) {
					output.push(
						`<th scope="row">Effect</th>`,
						`<td colSpan={3}>${marked2.parseInline(linker(eff))}</td>`
					);
				}
				if(ineff && seceff) {
					output.push(
						`<th id="${id}-ineff">Initial Effect</th>`,
						`<td headers="${id}-ineff">${marked2.parseInline(linker(ineff))}</td>`,
						`<th id="${id}-seceff">Secondary Effect</th>`,
						`<td headers="${id}-seceff">${marked2.parseInline(linker(seceff))}</td>`
					);
				}
				const cureLine = cure ? marked2.parseInline(linker(cure)) : (
					cure1 ? "1 save" : (
						cure2 ? "2 saves" : (
							cure2c ? "2 consecutive saves" : ""
						)
					)
				);
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
				if(extra) {
					output.push(
						`<tr><td colSpan={4}>${extra}</td></tr>`
					);
				}
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
