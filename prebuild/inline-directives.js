import checkForEncodedLink from './tests/checkForEncodedLink.js';
import makeListBlock from './block/list.js';
import fn from './inline/fn.js';

const getInlineDirectives = (globalVariable, marker = "@") => {
	const $ = globalVariable;
	return {
		level: "inline",
		marker,
		renderer: (token) => {
			const {prefix, flags, addToJumpList, logError, makeNewMarkedInstance} = $;
			const {text = "", attrs = {}, meta} = token;
			const maybeJL = (attrs, text) => {
				if(attrs.jl) {
					// Add as jumplist
					const id = prefix + (
						attrs.id
						|| text
							.replace(/ +/g, "-")
							.toLowerCase()
							.replace(/[^-a-z0-9]/g, "")
					);
					addToJumpList(text, id, attrs.jl);
					return id;
				}
			};
			let tag = meta.name;
			if(tag === "ripple" || tag === "hll") {
				// @ripple[link/Text]
				const m = checkForEncodedLink(text, { bare: true });
				if(m) {
					flags.link = true;
					const {link, text} = m;
					if(tag === "ripple") {
						flags.ripple = true;
						return `<Link to="/${link}">${text}<IonRippleEffect /></Link>`;
					}
					// hll - highlighted link
					const id = maybeJL(attrs, text);
					return `<strong className="hl"${id ? ` id="${id}" data-hash-target` : ""}><Link to="/${link}">${text}</Link></strong>`
				}
				logError(`Bad @${tag} => [${text}]`);
				tag = "b";
			} else if (tag === "hl" || tag === "HL") {
				// Highlight
				const marked2 = makeNewMarkedInstance();
				const id = maybeJL(attrs, text);
				return `<strong className="hl"${id ? ` id="${id}" data-hash-target` : ""}>${marked2.parseInline(text)}</strong>`;
			} else if (tag.startsWith("HL")) {
				// Highlight
				const marked2 = makeNewMarkedInstance();
				const txt = tag.slice(2).replace(/_/g, " ");
				return `<strong className="hl">${marked2.parseInline(txt)}</strong>`;
			} else if (tag.startsWith("LINK")) {
				// Inner link
				const marked2 = makeNewMarkedInstance();
				const base = tag.slice(4);
				const txt = base.replace(/_/g, " ");
				const id = prefix + (attrs.id || base.toLowerCase().replace(/_+/g, "-").replace(/[^-a-z0-9]/g, ""));
				flags.innerlink = true;
				return `<InnerLink toTop to="${id}">${marked2.parseInline(txt)}</InnerLink>`;
			} else if (tag === "FN") {
				// Fake footnotes
				const { from, multi } = attrs;
				return fn({text, prefix, from, multi, makeNewMarkedInstance, flags});
			} else if (tag.startsWith("FN")) {
				// Fake footnotes
				const { from, multi } = attrs;
				return fn({text: tag.slice(2), prefix, from, multi, makeNewMarkedInstance, flags});
			} else if (tag.startsWith("B-")) {
				// Bonus equal to fraction of level
				//  @B-#[mfy]p?(#)-class(-x)?
				//  @B-3m-cleric => This bonus...one-third of his cleric level (linked to misc/one_third)
				//  @B-3yp-cleric => These bonuses...one-third of your cleric level (linked to misc/one_third)
				//  @B-3f1-cleric-x => This bonus...1 + one-third of her cleric level (no link)
				//  @B-number-3f-cleric-x => This number...one-third of her cleric level (no link)
				// _ in the class gets transformed into a space
				const m = tag.slice(2).match(/(?:([^- ]+)-)?([23456])([mfytan])(p)?([0-9])?-([^- ]+)(-x)?$/);
				if(!m) {
					logError(`Invalid [${tag}].`);
					return "";
				}
				const [, what, n, g, p, x, c, nolink] = m;
				const extra = x ? `${x} + ` : ""
				const amount = n === "2" ? "half" : `one-${
					n === "3" ? "third" : (
						n === "4" ? "fourth" : (
							n === "5" ? "fifth" : "sixth"
						))
				}`;
				const pronoun = (
					g === "m" ? "his" : (
						g === "f" ? "her" : (
							g === "y" ? "your" : (
								g === "t" ? "the" : (
									g === "a" ? "a" : "an" // "n"
								)
							)
						)
					)
				);
				const apos = ["t", "a", "n"].includes(g) ? "'s" : "";
				// the/a/an should indicate possessive
				flags.link = true;
				const link = nolink  ? amount : `<Link to="/misc/${amount.replace(/-/g, "_")}">${amount}</Link>`;
				const beginning = p ? `These ${what || "bonuses"} are` : `This ${what || "bonus"} is`;
				return `${beginning} equal to ${extra}${link} of ${pronoun} ${c.replaceAll("_", " ")}${apos} level`;
			} else if (tag === "list") {
				const convertEncodedInfo = (input) => {
					let m;
					let test = input;
					let output = "";
					while(m = checkForEncodedLink(test)) {
						const {pre, link, text, post} = m;
						output += `${pre}[${text}](${link})`;
						test = post;
					}
					return (output + test)
						.replace(/&(times|quot|emsp|[nm]dash|frac1[23456]|deg|amp|shy|[dD]agger|[aeiou](?:acute|grave|circ|uml)|#[0-9]+|#x[0-9a-fA-F]+)&/g, "&$1;");
				};
				return makeListBlock({
					text,
					attrs,
					logError,
					inline: true,
					maybeClear: "",
					marked2: makeNewMarkedInstance(),
					convertEncodedInfo
				});
			}
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
			// We are either strong, em, or span
			const marked2 = makeNewMarkedInstance();
			const id = prefix + (attrs.id || text.replace(/ +/g, "-").toLowerCase().replace(/[^-a-z0-9]/g, ""));
			// implicit jumplist
			attrs.jl && addToJumpList(text, id, attrs.jl);
			return `<${tag} id="${id}" data-hash-target>${marked2.parseInline(text)}</${tag}>`;
		}
	}
};

export default getInlineDirectives;
