import ordinal from "../ordinal.js";
import writtenNumber from "written-number";
import romans from "romans";
import checkForEncodedLink, { convertTextToLink } from "../tests/checkForEncodedLink.js";
import noteTags from "../noteTags.js";
import isALink from "../get-all-links.js";

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
		sub, head, subs, surs, indent,
		singleBreaks
	} = attrs;
	const text = txt || title;
	const output = [];
	const joiner = singleBreaks ? "\n" : "\n\n"
	const doParse = (input, split) =>
			split && (input.indexOf("~~~") > -1)
				? marked2.parse(convertEncodedInfo(input).split("~~~").join(joiner))
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
	//
	// REQUIREMENTS
	//
	req && output.push(
		`<Pair title="Requirements" hl>`
		+ doParse(req, false)
		+ "</Pair>"
	);
	//
	// SURS
	//
	if(surs) {
		surs.split(/(?<!~)~~(?!~)/).forEach(bit => {
			const [title, body, hl] = bit.split(/(?<!~)~(?!~)/);
			output.push(
				`<Pair title="${title}"${hl ? " hl" : ""}>`
				+ doParse(body, true)
				+ "</Pair>"
			);
		});
	}
	//
	// FLAVOR TEXT
	//
	flavor && output.push(
		`<Pair single="flavor" id="${abId + "-flavor"}">`
		+ doParse(flavor, false)
		+ "</Pair>"
	);
	//
	// BENEFIT
	//
	benefit && output.push(
		`<Pair single="benefit" id="${abId + "-benefit"}">`
		+ doParse(benefit, true)
		+ "</Pair>"
	);
	//
	// SUBS
	//
	if(subs) {
		subs.split(/(?<!~)~~(?!~)/).forEach(bit => {
			const [title, body, hl] = bit.split(/(?<!~)~(?!~)/);
			output.push(
				`<Pair title="${title}"${hl ? " hl" : ""}>`
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
