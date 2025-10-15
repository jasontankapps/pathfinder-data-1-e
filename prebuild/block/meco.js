import isALink from "../get-all-links.js";
import { getCleanText, convertSpecialTextToLink } from "../tests/checkForEncodedLink.js";

const linkify = (thing) => convertSpecialTextToLink(thing.replace(/#[A-Z]/g, ""));

export const makeMonsterStatisticsBlock = (marked2, linker, maybeClear, attrs, logError) => {
	const {
		env, org, treasure
	} = attrs;
	const output = [];
	const doParse = (input) => marked2.parseInline(linker(input));
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
	// ENVIRONMENT LINE
	//
	if(env) {
		output.push(doParse(`**Environment** ${env}`));
	} else {
		logError("Missing environment");
	}
	//
	// ORGANIZATION LINE
	//
	org && output.push(doParse(`**Organization** ${org}`));
	//
	// TREASURE LINE
	//
	const m = treasure && treasure.match(/^(standard|double|triple|none|incidental|npc)?=(.+$)/);
	if(m) {
		const [,type,parenthetical] = m;
		const t = type === "npc" ? "NPC gear" : (type || false);
		output.push(doParse(`**Treasure** ${t ? `%%rule/${t}%% (${parenthetical})` : parenthetical}`));
	}
	return `${maybeClear}<p className="statblockSubHeader">Ecology</p>\n<p>${output.join("<br>")}</p>`;
};

export default makeMonsterStatisticsBlock;
