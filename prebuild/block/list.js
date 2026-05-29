import { convertTextToLink, convertSpecialTextToLink, getCleanText } from '../tests/checkForEncodedLink.js';

// ::list[Header]{all="one~two|parenthetical~three..." link="protocol" and?="and" hl? sep?="~" comma?=", "}
export const makeListBlock = ({
	text,
	maybeClear,
	attrs,
	logError,
	marked2,
	convertEncodedInfo,
	inline = false
}) => {
	const {
		all, link, and, hl, em,
		end = "",
		sep = "~",
		comma = ", ",
		special
	} = attrs;
	//
	// SANITY CHECK
	//
	if(!all) {
		logError("Missing `all` property");
	} else if(!link) {
		logError("Missing `link` property");
	}
	//
	// HEADER
	//
	const head = `${maybeClear}${inline ? "" : "<p>"}<strong${hl ? ` className="hl"` : ""}>${em ? "<em>" : ""}${text}:${em ? "</em>" : ""}</strong>`;
	const tail = end + (inline ? "" : "</p>");
	//
	// CONSTRUCT LINKS
	//
	const func = special ? convertSpecialTextToLink : convertTextToLink
	const func2 = special ? getCleanText : (x) => x;
	const output = all.split(sep).map(item => {
		const [base, parens] = item.split(/\|/);
		const extra = parens ? ` (${marked2.parseInline(convertEncodedInfo(parens))})` : "";
		return `<Link to="/${link}/${func(base)}">${func2(base)}</Link>${extra}`;
	});
	if(and) {
		// Return list with 'and' if needed
		if(output.length >= 3) {
			const pop = output.pop();
			return head + " " + output.join(comma) + comma + `${and} ` + pop + tail;
		} else if (output.length === 2) {
			return `${head} ${output[0]}${and ? ` ${and}` : comma} ${output[1]}${tail}`;
		}
	}
	return head + " " + output.join(comma) + tail;

};

export default makeListBlock;
