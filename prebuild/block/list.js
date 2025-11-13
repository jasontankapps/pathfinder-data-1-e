import { convertTextToLink } from '../tests/checkForEncodedLink.js';

export const makeListBlock = ({
	text,
	maybeClear,
	attrs,
	logError,
	inline = false
}) => {
	const {
		all, link, and, hl,
		sep = "~",
		comma = ", "
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
	const head = `${maybeClear}${inline ? "" : "<p>"}<strong${hl ? ` className="hl"` : ""}>${text}:</strong>`;
	//
	// CONSTRUCT LINKS
	//
	const output = all.split(sep).map(item => 
		`<Link to="/${link}/${convertTextToLink(item)}">${item}</Link>`
	);
	if(and && output.length >= 3) {
		// Return list with 'and' if needed
		const pop = output.pop();
		return head + " " + output.join(comma) + comma + "and " + pop + (inline ? "" : "</p>");
	}
	return head + " " + output.join(comma) + (inline ? "" : "</p>");

};

export default makeListBlock;
