// Basic link format:
//   ‹rule/Link text› => [Link text](rule/link_text)
// The first part, up to and including the slash, is used verbatim.
// The rest of the text is converted to a link following these steps:
//   All letters are converted to lowercase
//   Spaces and dashes are turned into underscores
//   All other non-letter, non-number, non-underscore characters are deleted
// Advanced forms:
//   Doubling the angle quotes indicates the link should be converted verbatim
//     ‹‹has been decided/#ruling›› => [has been decided](#ruling)
//   Using an actual slash in the text is possible, and it gets converted to an underscore in the link:
//     ‹rule/Link/Text› => [Link/Text](rule/link_text)
//   An unmatched « at the end appends to the text, not the link:
//     ‹rule/Link« plus additional text› => [Link plus additional text](rule/link)
//   Using an unmatched » at the beginning prepends text:
//     ‹rule/Additional text »link› => [Additional text link](rule/link)
//   Using an unmatched < at the end appends link-formatted text to the link:
//     ‹rule/Link<_2› => [Link](rule/link_2)
//   Using an unmatched > at the start prepends link-formatted text to the link:
//     ‹rule/special_>Link› => [Link](rule/special_link)
//   Using «angle quotes» removes text from a link, but preserves it in the text:
//     ‹rule/rule«s» of cool› => [rules of cool](rule/rule_of_cool)
//   Using <angle brackets> adds text to a link, but not in the text:
//     ‹rule/something <with_a_>complicated<_name› => [something complicated](rule/something_with_a_complicated_name)
// The advanced forms can be used together.
//   ‹rule/special_>Pre »Link/Text« Stuff<_info› => [Pre Link/Text Stuff](rule/special_link_text_info)

// Below needs to be copied to src/components/convertLinks.tsx (with Typescript) when changed

const checkForEncodedLink = (input, options = {}) => {
	const { basic, bare, testing } = options;
	let m = input.match(
		bare ? /^([-a-z_]+?)[/](.+)($)/       // [ full, protocol, matchedx ]
		: /(^.*?)(‹+)([-a-z_]+|(?<=‹‹)[^‹›/]+)[/]([^›]*)›+(.*$)/ // [ full, pre, startbracket, protocol, matchedx, post ]
	);
	const m2 = basic && input.match(
		/(^.*?)\[([^\]]+)\]\(([-a-z_]+)[/]([^)]+)\)(.*$)/
	); // [ pre, text, protocol, link, post ]
	if(!m && !m2) {
		return false;
	} else if (bare && m) {
		// rearrange `m`, starting with: [full, protocol, matchedx]
		const full = m.shift();
		m.unshift(full, "", "‹");
		m.push("");
		// `m` is now [fullmatch(ignored), ""(pre), "‹"(startbracket), protocol, matchedx, ""(post)]
	} else if (m2) {
		// See if we have a ‹match›, and if so figure out who has the earlier match.
		if(!m || (m[1].length > m2[1].length)) {
			// [match] wins
			const [, pre, text, protocol, property, post] = m2;
			return {
				pre,
				link: `${protocol}/${property}`,
				text,
				post,
				protocol,
				property,
				original: `[${text}](${protocol}/${property})`
			};
		}
	}
	const [, pre, startbracket, protocol, matchedx, post] = m;
	if(!testing) {
		// Check for links inside props of directives. DO NOT expand them.
		let toFindTheEnd = null;
		if(!basic || !bare) {
			if (pre.match(/="[^"]*$/)) {
				toFindTheEnd = /^([^"]*")(.*$)/;
			} else if (pre.match(/(::|;;;|@)[a-zA-Z0-9]+\[[^\]]*$/)) {
				toFindTheEnd = /^([^\]]*\])(.*$)/;
			}
		}
		if(toFindTheEnd) {
			// We found one. Run the excess through the wringer again.
			const findEndOfProp = post.match(toFindTheEnd);
			if(!findEndOfProp) {
				console.log("ERROR FINDING END OF PROP");
				console.log(pre);
				console.log(post);
				return false;
			}
			const [, endOfProp, next] = findEndOfProp;
			const mm = checkForEncodedLink(next, {});
			if(!mm) {
				return false;
			}
			const {pre: xpre, ...etc} = mm;
			return {
				pre: pre + `${protocol}/${matchedx}` + endOfProp + xpre,
				...etc
			};
		}
	}
	if (startbracket === "‹‹") {
		// This is a verbatim link
		// Sub in main.main as a fake link so we fool the invalidity tests
		return {
			pre,
			link: matchedx,
			text: protocol,
			post,
			protocol: "main",
			property: "main",
			original: `‹‹${protocol}/${matchedx}››`
		};
	}
	let matched = matchedx, linkpre = "", linkpost = "", textpre = "", textpost = "";
	// pre_>link
	if(m = matched.match(/(^[^<]*?)>(.*$)/)) {
		matched = m[2];
		linkpre = m[1];
	}
	// post<_link
	if(m = matched.match(/(^.*)<([^>]*$)/)) {
		matched = m[1];
		linkpost = m[2];
	}
	// pre»text
	if(m = matched.match(/(^[^«]*?)»(.*$)/)) {
		matched = m[2];
		textpre = m[1];
	}
	// post«text
	if(m = matched.match(/(^.*?)«([^»]*$)/)) {
		matched = m[1];
		textpost = m[2];
	}
	// enclosed «extra»<link_and> text
	let temp = matched;
	let linkmatched = "";
	matched = "";
	while(m = temp.match(/^(.*?)(?:«(.*?)»|<(.*?)>)(.*)$/)) {
		const [, pre, extraText, extraLink, post] = m;
		matched = matched + pre + (extraText || "");
		linkmatched = linkmatched + pre + (extraLink || "");
		temp = post;
	}
	matched = matched + temp;
	linkmatched = linkmatched + temp;
	const text = `${textpre}${matched}${textpost}`;
	const property = `${linkpre}${linkmatched}${linkpost}`
		.replace(/[- /]/g, "_")
		.toLowerCase()
		.replace(/[^a-z0-9_]/g, "");
	return {
		pre,
		link: `${protocol}/${property}`,
		text,
		post,
		protocol,
		property,
		original: `‹${protocol}/${matchedx}›`
	};
};

export const convertTextToLink = (input) => {
	return input.toLowerCase().replace(/[-_ /]/g, "_").replace(/[^0-9_a-z]/g, "");
};

export const convertSpecialTextToLink = (input) => {
	let m, matched = input;
	let linkpre = "", linkpost = "";
	// pre_>link
	if(m = matched.match(/(^[^<]*?)>(.*$)/)) {
		linkpre = m[1];
		matched = m[2];
	}
	// post<_link
	if(m = matched.match(/(^.*)<([^>]*$)/)) {
		matched = m[1];
		linkpost = m[2];
	}
	// pre»text
	if(m = matched.match(/(^[^«]*?)»(.*$)/)) {
		matched = m[2];
	}
	// post«text
	if(m = matched.match(/(^.*?)«([^»]*$)/)) {
		matched = m[1];
	}
	// enclosed «extra»<link_and> text
	let temp = matched;
	let linkmatched = "";
	matched = "";
	while(m = temp.match(/^(.*?)(?:«(.*?)»|<(.*?)>)(.*)$/)) {
		const [, pre, , extraLink, post] = m;
		linkmatched = linkmatched + pre + (extraLink || "");
		temp = post;
	}
	linkmatched = linkmatched + temp;
	return convertTextToLink(linkpre + linkmatched + linkpost);
};

export const getCleanText = (input) => {
	let m, matched = input;
	// pre_>link
	if(m = matched.match(/(^[^<]*?)>(.*$)/)) {
		matched = m[2];
	}
	// post<_link
	if(m = matched.match(/(^.*)<([^>]*$)/)) {
		matched = m[1];
	}
	// pre»text
	if(m = matched.match(/(^[^«]*?)»(.*$)/)) {
		matched = m[1] + m[2];
	}
	// post«text
	if(m = matched.match(/(^.*?)«([^»]*$)/)) {
		matched = m[1] + m[2];
	}
	// enclosed «extra»<link_and> text
	let temp = matched;
	let textmatched = "";
	matched = "";
	while(m = temp.match(/^(.*?)(?:«(.*?)»|<(.*?)>)(.*)$/)) {
		const [, pre, bracketed, , post] = m;
		textmatched = textmatched + pre + (bracketed || "");
		temp = post;
	}
	return textmatched + temp;
};

export default checkForEncodedLink;
