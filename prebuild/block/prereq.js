import { convertTextToLink } from '../tests/checkForEncodedLink.js';

const handleInfo = (m, list, info, sep, flags, convertEncodedInfo) => {
	const [title, prefix] = info.split(sep);
	const output = [ ];
	if(title) {
		output.push(`<strong>${title}:</strong>`);
	}
	if(prefix) {
		flags.link = true;
		const things = list.split(sep);
		const items = things.map(thing => {
			return `<Link to="/${prefix}/${convertTextToLink(thing)}">${thing}</Link>`;
		});
		output.push(items.join(", "));
	} else {
		output.push(m.parseInline(convertEncodedInfo(list)));
	}
	return output.join(" ");
};

const makePrerequisiteBlock = (marked2, flags, maybeClear, attrs, convertEncodedInfo) => {
	const {
		l, c, r,
		g1, g1info,
		other, sep = "~"
	} = attrs;
	//
	// START CODE
	//
	const lines = [];
	//
	// CHECK FOR LEVEL REQUIREMENT
	//
	if(l) {
		let nth = "th";
		// should never be 1
		if(l === 3) {
			nth = "rd";
		} else if (l === 2) {
			nth = "nd";
		}
		if(c) {
			lines.push(`${l}${nth} level ${c}`);
		} else {
			lines.push(`${l}${nth} level`);
		}
	}
	if(r) {
		flags.link = true;
		lines.push(`<Link to="/race/${convertTextToLink(r)}">${r}</Link>`)
	}
	if(g1 && g1info) {
		lines.push(handleInfo(marked2, g1, g1info, sep, flags, convertEncodedInfo));
	}
	if(other) {
		lines.push(marked2.parseInline(convertEncodedInfo(other)));
	}
	//
	// MAYBE END EARLY
	//
	if(lines.length === 0) {
		return "";
	}
	// PREPARE OUTPUT
	const output = [
		`${maybeClear}<div className="sideNoteWrap startAlign singular delist">`,
		`<table><tbody><tr>`
	];
	//
	// ADD PREREQ ICON
	//
	flags.icon = true;
	flags.thlink = true;
	output.push(`<ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink>`);
	//
	// ADD PREREQUISITES
	//
	if(lines.length > 1) {
		output.push(`<td><ul><li>${lines.join("</li><li>")}</li></ul></td>`);
	} else {
		output.push(`<td>${lines[0]}</td>`);
	}
	//
	// END CODE BLOCK	
	//
	output.push(
		`</tr></tbody></table></div>`
	);
	return output.join("");
}

export default makePrerequisiteBlock;
