export const makeMonsterEcologyBlock = (marked2, convertEncodedInfo, maybeClear, attrs, logError) => {
	const {
		env, org, treasure
	} = attrs;
	const output = [];
	const doParse = (input) => marked2.parseInline(convertEncodedInfo(input));
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
		output.push(doParse(`**Treasure** ${t ? `‹rule/${t}› (${parenthetical})` : parenthetical}`));
	}
	return `${maybeClear}<p className="statblockSubHeader">Ecology</p>\n<p>${output.join("<br>")}</p>`;
};

export default makeMonsterEcologyBlock;
