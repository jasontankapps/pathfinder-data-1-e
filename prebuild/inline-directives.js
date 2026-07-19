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
				const m = tag.slice(2).match(/([23456])([mfy])(p)?([0-9])?-([^- ]+)(-x)?$/);
				if(!m) {
					logError(`Invalid [${tag}].`);
					return "";
				}
				const [, n, g, p, x, c, nolink] = m;
				const extra = x ? `${x} + ` : ""
				const amount = n === "2" ? "half" : `one-${
					n === "3" ? "third" : (
						n === "4" ? "fourth" : (
							n === "5" ? "fifth" : "sixth"
						))
				}`;
				const pronoun = g === "m" ? "his" : (g === "f" ? "her" : "your");
				flags.link = true;
				const link = nolink  ? amount : `<Link to="/misc/${amount.replace(/-/g, "_")}">${amount}</Link>`;
				return `${p ? "These bonuses are" : "This bonus is"} equal to ${extra}${link} of ${pronoun} ${c} level`;
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
						.replace(/&(times|quot|[nm]dash|deg|[dD]agger|#[0-9]+|#x[0-9a-fA-F]+)&/g, "&$1;");
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
			} else if (tag === "altCapstoneDesc") {
				flags.link = true;
				return "When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to=\"/ability/capstones\">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.";
			} else if (tag === "archetypeDesc") {
				flags.link = true;
				return "From the noble paladin to the skillful rogue, each class draws upon a central archetype. Yet, beyond that basic concept exists the potential for innumerable interpretations, details, and refinements; and some archetypes prove pervasive and exciting enough to see use in play time and time again. To help players interested in creating iconic fantasy characters, <strong className=\"hl\"><Link to=\"/rule/archetypes\">archetypes</Link></strong> were introduced. These optional features represent a unique view of what a class deliberately designed to capture a specific character archetype might become. While the types of options presented for each class differ, each subsystem is customized to best serve that class, emulate the abilities and talents of classic fantasy archetypes, and expand players' freedom to design exactly the characters they desire."
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
