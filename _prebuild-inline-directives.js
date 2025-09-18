import checkForEncodedLink from './tests/checkForEncodedLink.js';

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
					// hll
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
				const marked2 = makeNewMarkedInstance();
				const id = maybeJL(attrs, text);
				return `<strong className="hl"${id ? ` id="${id}" data-hash-target` : ""}>${marked2.parseInline(text)}</strong>`;
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
			const id = prefix + (attrs.id || text.replace(/ +/g, "-").toLowerCase().replace(/[^-a-z0-9]/g, ""));
			// implicit jumplist
			attrs.jl && addToJumpList(text, id, attrs.jl);
			return `<${tag} id="${id}" data-hash-target>${marked2.parseInline(text)}</${tag}>`;
		}
	}
};

export default getInlineDirectives;
