import { convertSpecialTextToLink, getCleanText } from '../tests/checkForEncodedLink.js';

const handleInfo = (m, list, title, prefix, sep, flags, convertEncodedInfo) => {
	const output = [ ];
	if(title) {
		output.push(`<strong>${title}:</strong>`);
	}
	if(prefix) {
		flags.link = true;
		const things = list.split(sep);
		const items = things.map(thing => {
			return `<Link to="/${prefix}/${convertSpecialTextToLink(thing)}">${getCleanText(thing)}</Link>`;
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
		g1, g1title, g1protocol,
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
	//
	// CHECK FOR RACE REQUIREMENT
	//
	if(r) {
		flags.link = true;
		lines.push(`<Link to="/race/${convertSpecialTextToLink(r)}">${getCleanText(r)}</Link>`)
	}
	//
	// CHECK FOR SPECIAL REQUIREMENT
	//
	if(g1 && g1protocol) {
		lines.push(handleInfo(marked2, g1, g1title, g1protocol, sep, flags, convertEncodedInfo));
	}
	//
	// OTHER REQUIREMENTS
	//
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
