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
			const { hasAlternateText } = flags;
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
				flags.link = true;
				flags.ripple = true;
				const m = checkForEncodedLink(text, { bare: true });
				if(m) {
					const [, link, text] = m;
					if(tag === "ripple") {
						return `<Link to="/${link}">${text}<IonRippleEffect /></Link>`;
					}
					// hll - highlighted link
					const id = maybeJL(attrs, text);
					return `<strong className="hl"${id ? ` id="${id}" data-hash-target` : ""}><Link to="/${link}">${text}</Link></strong>`
				}
				logError(`Bad @${tag} => [${text}]`);
				tag = "b";
			} else if(
				(tag === "primary" && !hasAlternateText)
				|| (tag === "alternate" && hasAlternateText)
			) {
				// Do some minor MD replacements for bold/italics.
				const marked2 = makeNewMarkedInstance();
				return marked2.parseInline(text);
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
			} else if (tag === "FN") {
				// Fake footnotes
				const { from } = attrs;
				return fn({text, prefix, from, makeNewMarkedInstance, flags});
			} else if (tag.startsWith("FN")) {
				// Fake footnotes
				const { from } = attrs;
				return fn({text: tag.slice(2), prefix, from, makeNewMarkedInstance, flags});
			} else if (tag === "list") {
				return makeListBlock({
					text,
					attrs,
					logError,
					inline: true,
					maybeClear: ""
				});
			} else if (tag === "altCapstoneDesc") {
				flags.link = true;
				return "When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to=\"/ability/capstones\">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.";
			}
			switch(tag) {
				case "primary":
				case "alternate":
					// This should be ignored in this context
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
