import isALink from "../get-all-links.js";
import { getCleanText, convertSpecialTextToLink } from "../tests/checkForEncodedLink.js";

const linkify = (thing) => convertSpecialTextToLink(thing.replace(/#[A-Z]/g, ""));

export const makeMonsterStatisticsBlock = (marked2, convertEncodedInfo, maybeClear, attrs, logError) => {
	const {
		str, dex, con, int, wis, cha,
		bab, cmb, cmd,
		feats, skills, racial, lang, sq,
		combat, othergear, gear,
		faith, next
	} = attrs;
	const output = [];
	const doParse = (input) => marked2
		.parseInline(convertEncodedInfo(input))
		.replace(/((?:#(?:[A-Z]))+)<[/]Link>/g, "</Link>$1")
		.replace(/#([A-Z])/g, "<sup>$1</sup>")
		.replace(/<[/]em>, <em>/g, ", ");
	const parseFeats = (input) => {
		const all = input.split(/~/);
		const found = [];
		while(all.length) {
			const item = all.shift();
			let test = "";
			let m = item.match(/^!(.+)$/);
			if(m) {
				found.push(m[1]);
			} else if(m = item.match(/^(.+?)=(.+)$/)) {
				test = linkify(m[1]);
				found.push(`[${getCleanText(m[1])}](feat/${test}) (${m[2]})`);
			} else {
				test = linkify(item);
				found.push(`[${getCleanText(item)}](feat/${test})`);
			}
			if(test && !isALink("feat", test)) {
				logError(`Bad feat [${test}]`);
			}
		}
		return found.join(", ");
	};
	//
	// ATTRIBUTES LINE
	//
	output.push(`<strong>Str</strong> ${str}, <strong>Dex</strong> ${dex}, <strong>Con</strong> ${con}, <strong>Int</strong> ${int}, <strong>Wis</strong> ${wis}, <strong>Cha</strong> ${cha}`)
	//
	// BAB/CMB/CMD LINE
	//
	output.push(`<strong>Base Atk</strong> ${bab}; <strong>CMB</strong> ${cmb}; <strong>CMD</strong> ${cmd}`)
	//
	// FEATS LINE
	//
	if(feats) {
		output.push(doParse(`**Feats** ${parseFeats(feats)}`));
	}
	//
	// SKILLS LINE
	//
	if(skills) {
		output.push(`<strong>Skills</strong> ${skills.split(/~/).join(", ")}${racial ? `; <strong>Racial Modifiers</strong> ${racial}` : ""}`);
	}
	//
	// LANGUAGES LINE
	//
	if(lang) {
		output.push(doParse(`**Languages** ${lang}`));
	}
	//
	// SQ LINE
	//
	if(sq) {
		output.push(doParse(`**SQ** ${sq}`));
	}
	//
	// COMBAT/OTHER GEAR LINE
	//
	if(combat) {
		output.push(doParse(`**Combat Gear** ${combat}${othergear ? `; **Other Gear** ${othergear}` : ""}`));
	} else if (gear) {
		output.push(doParse(`**Gear** ${gear}`));
	}
	//
	// FAITH LINE
	//
	if(faith) {
		output.push(doParse(`**Faith Link** [${faith}](faith/${linkify(faith)})`));
	}
	return `${maybeClear}<p className="statblockSubHeader">Statistics</p>\n<p${next ? ' className="no-bottom-margin"' : ""}>${output.join("<br>")}</p>`;
};

export default makeMonsterStatisticsBlock;
