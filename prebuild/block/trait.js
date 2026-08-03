import ordinal from "../ordinal.js";
import writtenNumber from "written-number";
import romans from "romans";
import checkForEncodedLink, { convertTextToLink } from "../tests/checkForEncodedLink.js";
import noteTags from "../noteTags.js";
import isALink from "../get-all-links.js";

const parseAtts = (attrs, hl) => {
	const {
		standard, move, free, immediate, swift,
		passive, ability, ability2, ability3,
		fullround, note, choice, benefit, normal,
		goal, compbenefit, info, x, y, z, X, Y, Z
	} = attrs;
	if(passive) {
		return [passive, "Passive Ability", hl.indexOf("p")];
	} else if (ability || ability2 || ability3) {
		return [ability || ability2 || ability3, "Ability", hl.indexOf(
			ability ? "a" : (ability2 ? "2" : "3")
		)];
	} else if (standard) {
		return [standard, "Standard Action", hl.indexOf("s")];
	} else if (swift) {
		return [swift, "Swift Action", hl.indexOf("w")];
	} else if (move) {
		return [move, "Move-Equivalent Action", hl.indexOf("m")];
	} else if (fullround) {
		return [fullround, "Full-Round Action", hl.indexOf("r")];
	} else if (immediate) {
		return [immediate, "Immediate Action", hl.indexOf("i")];
	} else if (free) {
		return [free, "Free Action", hl.indexOf("f")];
	} else if (info) {
		return [info, "Info", hl.indexOf("n")];
	} else if (note) {
		return [note, "Note", hl.indexOf("N")];
	} else if (choice) {
		return [choice, "Choice", hl.indexOf("c")];
	} else if (benefit) {
		return [choice, "Benefit", hl.indexOf("ben")];
	} else if (normal) {
		return [normal, "Normal", hl.indexOf("normal")];
	} else if (goal) {
		return [goal, "Goal", hl.indexOf("goal")];
	} else if (compbenefit) {
		return [compbenefit, "Completion Benefit", hl.indexOf("compben")];
	} else if (x || y || z || X || Y || Z) {
		// These are already in [info, "title", index] format
		return (x || y || z || X || Y || Z);
	}
	return false;
};

const parseXYZ = (etc, logError, hl) => {
	const result = {};
	Object.entries(etc).forEach(([key, value]) => {
		const v = typeof value === "number" ? String(value) : value;
		["x","y","z","X","Y","Z"].some(x => {
			if(key.startsWith(x)) {
				if(result[x]) {
					logError(`Duplicate ${x}... attr`);
				}
				result[x] = [v, key.slice(1).replace(/_/g, " "), hl.indexOf(x)];
				return true;
			}
			return false;
		});
	});
	return result;
};


let $swap = "";
let $swaps = "";
const resetSwaps = () => {
	$swap = "";
	$swaps = "";
};
const swap = ({plural, descriptor}) => {
	if(descriptor) {
		const next = descriptor.shift();
		descriptor.push(next);
		return next;
	} else if(plural) {
		$swaps = ($swaps === "become") ? "increase to" : "become";
		return $swaps;
	}
	$swap = ($swap === "becomes") ? "increases to" : "becomes";
	return $swap;
};

const makeMax = (incrementMax, logError) => {
	if(!incrementMax) {
		return 20;
	}
	const m = Number(incrementMax);
	if(m != m || m < 2 || m > 20) {
		logError(`Invalid value [${incrementMax}] for \`incrementMax\` attr.`);
		return 20;
	}
	return Math.floor(m);
};

const makeTraitBlock = ({
	marked2,
	prefix,
	jlid,
	text: txt,
	convertEncodedInfo,
	maybeClear,
	flags,
	attrs,
	logError
}) => {
	const {
		id, type, req, flavor,
		campaign, religion, region,
		title, benefit,
		sub, head, subs, indent
	} = attrs;
	const text = txt || title;
	resetSwaps();
	const output = [];
	const doParse = (input, split) =>
			split && (input.indexOf("~~~") > -1)
				? marked2.parse(convertEncodedInfo(input).split("~~~").join("\n\n"))
				: marked2.parseInline(convertEncodedInfo(input));

/*
	"## !-TITLE-!??SUFFIX: !-SUFFIX-!??!-N-!!-N-!!-DESC-!??SOURCE:!-N-!!-N-!>!-SOURCE-!??",
	"[*]{2}(Type|Campaign|Requirements|Religion|Region):[*]{2}",
	"TYPES: Combat|Faith|Social|Magic|Campaign|Equipment|Family|Mount|Religion|Drawback|Cosmic|Regional|Race"
*/
	//
	// CONSTRUCT ICON
	//
	const icon = () => {
		switch(type) {
			case "Combat": {
				return "crossed-sabres";
			}
			case "Faith": {
				return "bolt-eye";
			}
			case "Social": {
				return "village";
			}
			case "Magic": {
				return "magic-swirl";
			}
			case "Campaign": {
				return "treasure-map";
			}
			case "Equipment": {
				return "battle-gear";
			}
			case "Family": {
				return "relationship-bounds";
			}
			case "Mount": {
				return "cavalry";
			}
			case "Regional": {
				return "planet-conquest";
			}
			case "Religion": {
				return "prayer";
			}
			case "Drawback": {
				return "broken-shield";
			}
			case "Cosmic": {
				return "night-sky";
			}
			case "Race": {
				return "person";
			}
		}
		logError(`---> Missing or invalid icon [${i}][${text}]`);
		return "confirmed";
	};

	//
	// TITLE
	//
	const abId = jlid || id;
	output.push(`<Pair single id="${abId}">${doParse(text, false)}</Pair>`);
	//
	// TYPE
	//
	type && output.push(
		`<Pair title="Type">`
		+ doParse(type, false)
		+ "</Pair>"
	);
	//
	// CAMPAIGN, RELIGION, REGION
	//
	if(campaign || religion || region) {
		output.push(`<div className="multipair">`);
		campaign && output.push(
			`<Pair title="Camapign" hl>`
			+ doParse(campaign, false)
			+ "</Pair>"
		);
		religion && output.push(
			`<Pair title="Religion" hl>`
			+ doParse(religion, false)
			+ "</Pair>"
		);
		region && output.push(
			`<Pair title="Region" hl>`
			+ doParse(region, false)
			+ "</Pair>"
		);
		output.push("</div>");
	}
	//
	// REQUIREMENTS
	//
	req && output.push(
		`<Pair title="Requirements" hl>`
		+ doParse(req, false)
		+ "</Pair>"
	);
	//
	// FLAVOR TEXT
	//
	flavor && output.push(
		`<Pair single="flavor">`
		+ doParse(flavor, false)
		+ "</Pair>"
	);
	//
	// BENEFIT
	//
	benefit && output.push(
		`<Pair single="benefit">`
		+ doParse(benefit, true)
		+ "</Pair>"
	);
	if(subs) {
		subs.split(/(?<!~)~~(?!~)/).forEach(bit => {
			const [title, body] = bit.split(/(?<!~)~(?!~)/);
			output.push(
				`<Pair title="${title}">`
				+ doParse(body, true)
				+ "</Pair>"
			);
		});
	}

	return `${maybeClear}<Ability id="${abId}" extraClasses="trait${
		(sub ? " subTrait" : "")
		+ (head ? " hasSubs" : "")
		+ (indent? " indent" : "")
	}" icon={${type ? `["${icon()}"]` : "[]"}}>\n`
		+ `${output.join("\n")}\n</Ability>\n`;
};

export default makeTraitBlock;
