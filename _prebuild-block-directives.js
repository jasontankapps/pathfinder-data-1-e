import checkForEncodedLink from './tests/checkForEncodedLink.js';

const getBlockDirectives = (globalVariable, marker = "::") => {
	const $ = globalVariable;
	return {
		level: "block",
		marker,
		renderer: (token) => {
			const {prefix, flags, addToJumpList, logError, makeNewMarkedInstance, parseSOURCE} = $;
			const {text, attrs = {}, meta} = token;
			const {id, ind, rev, to, end, endem, bottom} = attrs;
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
				return `${maybeClear}<IonItemDivider className="mainItem"${id ? ` id="${prefix}${id}"` : ""}><IonLabel>${text}</IonLabel></IonItemDivider>`;
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
				return `${maybeClear}${output}info="${text}" />`;
			} else if ("h2h3h4h5h6".indexOf(n) >= 0) {
				if(attrs.jl) {
					const id = prefix + (attrs.id || text.toLowerCase().replace(/ +/g, "-").replace(/[^-a-z0-9]/g, ""));
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
					const id = prefix + (attrs.id || linktext.toLowerCase().replace(/ +/g, "-").replace(/[^-a-z0-9]/g, ""));
					addToJumpList(linktext, id, attrs.jl);
					return `${maybeClear}<${t} id="${id}" data-hash-target>${inner}</${t}>\n`;
				}
				return `${maybeClear}<${t}>${inner}</${t}>`;
			}
			return false;
		}
	};
}


export default getBlockDirectives;
