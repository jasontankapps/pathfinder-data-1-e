// Below needs to be copied to tests/checkForEncodedLink.js (minus Typescript) when changed
interface Options {
	basic?: boolean
	bare?: boolean
}
interface EncodedLinkOutput {
	pre: string
	link: string
	text: string
	post: string
	protocol: string
	property: string
	original: string
}
export const checkForEncodedLink = (input: string, options: Options = {}): false | EncodedLinkOutput => {
	const { basic, bare } = options;
	let m = input.match(
		bare ? /^([-a-z_]+)[/](.+)($)/
		: /(^.*?)(‹+)([-a-z_]*)[/]([^›]*)›+(.*$)/
	);
	const m2 = basic && input.match(/(^.*?)\[([^\]]+)\]\(([-a-z_]+)[/]([^)]+)\)(.*$)/);
	if(!m && !m2) {
		return false;
	} else if (bare && m) {
		// rearrange `m`, starting with: [full, protocol, matchedx]
		const full = m.shift()!;
		m.unshift(full, "", "");
		m.push("");
		// `m` is now [full, ""(pre), ""(startbrackets), protocol, matchedx, ""(post)]
	} else if (m2) {
		// See if we have a ‹match›, then figure out who has the earlier match.
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
	const [, pre, startbrackets, protocol, matchedx, post] = m!;
	if (startbrackets === "‹‹") {
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

// Basic link format:
//   ‹rule/Link text› => [Link text](rule/link_text)
// The first part, up to and including the slash, is used verbatim.
// The rest of the text is converted to a link following these steps:
//   All letters are converted to lowercase
//   Spaces and dashes are turned into underscores
//   All other non-letter, non-number, non-underscore characters are deleted
// Advanced forms:
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

const convertLinks = (input: string[]): string => {
	// Converts ‹some/Link: Text/s› into [Link: Texts](some/link_text)
	let output: string[] = [];
	let m: false | EncodedLinkOutput = false;
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
	return output.join("\n");
};

export const convertTextToLink = (input: string) => {
	// Converts "Bob's link-text/stuff" to "bobs_link_text_stuff"
	// * Use checkForEncodedLink for proper formatting of «»<> stuff
	return input.toLowerCase().replace(/[-_ /]/g, "_").replace(/[^0-9_a-z]/g, "");
};

export default convertLinks;
