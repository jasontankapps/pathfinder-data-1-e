import { convertTextToLink } from '../tests/checkForEncodedLink.js';

// ::link[Header]{all="one~two~three..." link="protocol" and? hl? sep?="~" comma?=", "}
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
	const tail = inline ? "" : "</p>";
	//
	// CONSTRUCT LINKS
	//
	const output = all.split(sep).map(item => 
		`<Link to="/${link}/${convertTextToLink(item)}">${item}</Link>`
	);
	if(and) {
		// Return list with 'and' if needed
		if(output.length >= 3) {
			const pop = output.pop();
			return head + " " + output.join(comma) + comma + "and " + pop + tail;
		} else if (output.length === 2) {
			return `${head} ${output[0]}${and ? " and" : comma} ${output[1]}${tail}`;
		}
	}
	return head + " " + output.join(comma) + tail;

};

export default makeListBlock;
