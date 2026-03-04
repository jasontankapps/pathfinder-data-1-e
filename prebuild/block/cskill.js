const getSkillBaseAtt = (input, logError) => {
	switch(input) {
		case "acro":
			return "‹skill/Acrobatics› (DEX)";
		case "app":
			return "‹skill/Appraise› (INT)";
		case "bluff":
			return "‹skill/Bluff› (CHA)";
		case "climb":
			return "‹skill/Climb› (STR)";
		case "craft":
			return "‹skill/Craft› (INT)";
		case "diplo":
			return "‹skill/Diplomacy› (CHA)";
		case "dis":
			return "‹skill/Disguise› (CHA)";
		case "ddev":
			return "‹skill/Disable Device› (DEX)";
		case "ea":
			return "‹skill/Escape Artist› (DEX)";
		case "fly":
			return "‹skill/Fly› (DEX)";
		case "ha":
			return "‹skill/Handle Animal› (CHA)";
		case "heal":
			return "‹skill/Heal› (WIS)";
		case "intm":
			return "‹skill/Intimidate› (CHA)";
		case "ka":
			return "‹skill/Knowledge (arcana)› (INT)";
		case "kd":
			return "‹skill/Knowledge (dungeoneering)› (INT)";
		case "ke":
			return "‹skill/Knowledge (engineering)› (INT)";
		case "kg":
			return "‹skill/Knowledge (geography)› (INT)";
		case "kh":
			return "‹skill/Knowledge (history)› (INT)";
		case "kl":
			return "‹skill/Knowledge (local)› (INT)";
		case "kna":
			return "‹skill/Knowledge (nature)› (INT)";
		case "kno":
			return "‹skill/Knowledge (nobility)› (INT)";
		case "kp":
			return "‹skill/Knowledge (planes)› (INT)";
		case "kr":
			return "‹skill/Knowledge (religion)› (INT)";
		case "ling":
			return "‹skill/Linguistics› (INT)";
		case "per":
			return "‹skill/Perception› (WIS)";
		case "perf":
			return "‹skill/Perform› (CHA)";
		case "prof":
			return "‹skill/Profession› (WIS)";
		case "ride":
			return "‹skill/Ride› (DEX)";
		case "sm":
			return "‹skill/Sense Motive› (WIS)";
		case "soh":
			return "‹skill/Sleight of Hand› (DEX)";
		case "spc":
			return "‹skill/Spellcraft› (INT)";
		case "stl":
			return "‹skill/Stealth› (DEX)";
		case "sur":
			return "‹skill/Survival› (WIS)";
		case "swim":
			return "‹skill/Swim› (STR)";
		case "umd":
			return "‹skill/Use Magic Device› (CHA)";
	}
	if(input.match(/^[a-z]+$/)) {
		logError(`Unknown skill abbrevation [${input}]`);
	}
	return input;
};

const getSkill = (input, logError) => {
	switch(input) {
		case "acro":
			return "Acrobatics";
		case "app":
			return "Appraise";
		case "bluff":
			return "Bluff";
		case "climb":
			return "Climb";
		case "craft":
			return "Craft";
		case "diplo":
			return "Diplomacy";
		case "dis":
			return "Disguise";
		case "ddev":
			return "Disable Device";
		case "ea":
			return "Escape Artist";
		case "fly":
			return "Fly";
		case "ha":
			return "Handle Animal";
		case "heal":
			return "Heal";
		case "intm":
			return "Intimidate";
		case "ka":
			return "Knowledge (arcana)";
		case "kd":
			return "Knowledge (dungeoneering)";
		case "ke":
			return "Knowledge (engineering)";
		case "kg":
			return "Knowledge (geography)";
		case "kh":
			return "Knowledge (history)";
		case "kl":
			return "Knowledge (local)";
		case "kna":
			return "Knowledge (nature)";
		case "kno":
			return "Knowledge (nobility)";
		case "kp":
			return "Knowledge (planes)";
		case "kr":
			return "Knowledge (religion)";
		case "ling":
			return "Linguistics";
		case "per":
			return "Perception";
		case "perf":
			return "Perform";
		case "prof":
			return "Profession";
		case "ride":
			return "Ride";
		case "sm":
			return "Sense Motive";
		case "soh":
			return "Sleight of Hand";
		case "spc":
			return "Spellcraft";
		case "stl":
			return "Stealth";
		case "sur":
			return "Survival";
		case "swim":
			return "Swim";
		case "umd":
			return "Use Magic Device";
	}
	if(input.match(/[^‹›]/)) {
		logError(`Unknown skill abbrevation [${input}]`);
	}
	return input;
};

const makeClassSkillsAbilityBlock = ({
	marked2,
	prefix,
	text,
	convertEncodedInfo,
	maybeClear,
	attrs,
	logError
}) => {
	const {
		gain, lose, pre, post, preTitle, postTitle, id
	} = attrs;
	const doParse = (input) => {
		return marked2.parseInline(convertEncodedInfo(input));
	};
	const contents = [];
	if(pre) {
		contents.push([
			preTitle || "Info",
			pre
		]);
	}
	if(gain) {
		contents.push([
			"New Class Skills",
			gain.split(/~/).map(g => getSkillBaseAtt(g, logError)).join(", ")
		]);
	}
	if(lose) {
		contents.push([
			"Removed Skills",
			lose.split(/~/).map(g => getSkill(g, logError)).join(", ")
		]);
	}
	if(post) {
		contents.push([
			postTitle || "Info",
			post
		]);
	}

	return `${maybeClear}<div className="ability p">`
		+ `<div className="abIcon"><Link to="/icons/skills"><IonIcon icon="/icons/skills.svg" color="secondary" /></Link></div>\n`
		+ `<div className="title abSingle" id="${
			prefix + id
		}" data-hash-target><div className="box">${
			text ? doParse(text) : "Class Skills"
		}</div></div>\n`
		+ '<div className="abPair">'
		+ '<div className="abStart"><div className="box hl">Alters</div></div>'
		+ '<div className="abEnd"><div className="box">Class skills</div></div>'
		+ "</div>"
		+ `${contents.map(pair => {
			const [title, info] = pair;
			return (
				'<div className="abPair">'
				+ '<div className="abStart"><div className="box">'
				+ title
				+ "</div></div>"
				+ '<div className="abEnd"><div className="box">'
				+ doParse(info)
				+ "</div></div>"
				+ "</div>"
			);
		}).join("\n")}</div>\n`;
};

export default makeClassSkillsAbilityBlock;
