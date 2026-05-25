const getSkillBaseAtt = (potentialSkill, logError) => {
	const [input, subskill] = potentialSkill.split(/[|]/);
	const specific = subskill ? `(${subskill}) ` : ""
	switch(input) {
		case "acro":
			return `‹skill/Acrobatics› ${specific}(DEX)`;
		case "app":
			return `‹skill/Appraise› ${specific}(INT)`;
		case "bluff":
			return `‹skill/Bluff› ${specific}(CHA)`;
		case "climb":
			return `‹skill/Climb› ${specific}(STR)`;
		case "craft":
			return `‹skill/Craft› ${specific}(INT)`;
		case "diplo":
			return `‹skill/Diplomacy› ${specific}(CHA)`;
		case "dis":
			return `‹skill/Disguise› ${specific}(CHA)`;
		case "dd":
			return `‹skill/Disable Device› ${specific}(DEX)`;
		case "ea":
			return `‹skill/Escape Artist› ${specific}(DEX)`;
		case "fly":
			return `‹skill/Fly› ${specific}(DEX)`;
		case "ha":
			return `‹skill/Handle Animal› ${specific}(CHA)`;
		case "heal":
			return `‹skill/Heal› ${specific}(WIS)`;
		case "intm":
			return `‹skill/Intimidate› ${specific}(CHA)`;
		case "ka":
			return `‹skill/Knowledge (arcana)› ${specific}(INT)`;
		case "kd":
			return `‹skill/Knowledge (dungeoneering)› ${specific}(INT)`;
		case "ke":
			return `‹skill/Knowledge (engineering)› ${specific}(INT)`;
		case "kg":
			return `‹skill/Knowledge (geography)› ${specific}(INT)`;
		case "kh":
			return `‹skill/Knowledge (history)› ${specific}(INT)`;
		case "kl":
			return `‹skill/Knowledge (local)› ${specific}(INT)`;
		case "kna":
			return `‹skill/Knowledge (nature)› ${specific}(INT)`;
		case "kno":
			return `‹skill/Knowledge (nobility)› ${specific}(INT)`;
		case "kp":
			return `‹skill/Knowledge (planes)› ${specific}(INT)`;
		case "kr":
			return `‹skill/Knowledge (religion)› ${specific}(INT)`;
		case "ling":
			return `‹skill/Linguistics› ${specific}(INT)`;
		case "per":
			return `‹skill/Perception› ${specific}(WIS)`;
		case "perf":
			return `‹skill/Perform› ${specific}(CHA)`;
		case "prof":
			return `‹skill/Profession› ${specific}(WIS)`;
		case "ride":
			return `‹skill/Ride› ${specific}(DEX)`;
		case "sm":
			return `‹skill/Sense Motive› ${specific}(WIS)`;
		case "soh":
			return `‹skill/Sleight of Hand› ${specific}(DEX)`;
		case "spc":
			return `‹skill/Spellcraft› ${specific}(INT)`;
		case "stl":
			return `‹skill/Stealth› ${specific}(DEX)`;
		case "sur":
			return `‹skill/Survival› ${specific}(WIS)`;
		case "swim":
			return `‹skill/Swim› ${specific}(STR)`;
		case "umd":
			return `‹skill/Use Magic Device› ${specific}(CHA)`;
	}
	if(input.match(/^[a-z]+$/)) {
		logError(`Unknown skill abbrevation [${input}]`);
	}
	return input;
};

const getSkill = (potentialSkill, logError) => {
	const [input, subskill] = potentialSkill.split(/[|]/);
	const specific = subskill ? ` (${subskill})` : ""
	switch(input) {
		case "acro":
			return "Acrobatics" + specific;
		case "app":
			return "Appraise" + specific;
		case "bluff":
			return "Bluff" + specific;
		case "climb":
			return "Climb" + specific;
		case "craft":
			return "Craft" + specific;
		case "diplo":
			return "Diplomacy" + specific;
		case "dis":
			return "Disguise" + specific;
		case "dd":
			return "Disable Device" + specific;
		case "ea":
			return "Escape Artist" + specific;
		case "fly":
			return "Fly" + specific;
		case "ha":
			return "Handle Animal" + specific;
		case "heal":
			return "Heal" + specific;
		case "intm":
			return "Intimidate" + specific;
		case "ka":
			return "Knowledge (arcana)" + specific;
		case "kd":
			return "Knowledge (dungeoneering)" + specific;
		case "ke":
			return "Knowledge (engineering)" + specific;
		case "kg":
			return "Knowledge (geography)" + specific;
		case "kh":
			return "Knowledge (history)" + specific;
		case "kl":
			return "Knowledge (local)" + specific;
		case "kna":
			return "Knowledge (nature)" + specific;
		case "kno":
			return "Knowledge (nobility)" + specific;
		case "kp":
			return "Knowledge (planes)" + specific;
		case "kr":
			return "Knowledge (religion)" + specific;
		case "ling":
			return "Linguistics" + specific;
		case "per":
			return "Perception" + specific;
		case "perf":
			return "Perform" + specific;
		case "prof":
			return "Profession" + specific;
		case "ride":
			return "Ride" + specific;
		case "sm":
			return "Sense Motive" + specific;
		case "soh":
			return "Sleight of Hand" + specific;
		case "spc":
			return "Spellcraft" + specific;
		case "stl":
			return "Stealth" + specific;
		case "sur":
			return "Survival" + specific;
		case "swim":
			return "Swim" + specific;
		case "umd":
			return "Use Magic Device" + specific;
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
		gain, lose, pre, post, preTitle, postTitle, id, preHL, postHL, noAlter
	} = attrs;
	const doParse = (input) => {
		return marked2.parseInline(convertEncodedInfo(input));
	};
	const contents = [];
	if(pre) {
		contents.push([
			preTitle || "Info",
			pre,
			!!preHL
		]);
	}
	if(gain) {
		contents.push([
			"New Class Skills",
			gain.split(/~/).map(g => getSkillBaseAtt(g, logError)).join(", "),
			false
		]);
	}
	if(lose) {
		contents.push([
			"Removed Skills",
			lose.split(/~/).map(g => getSkill(g, logError)).join(", "),
			false
		]);
	}
	if(post) {
		contents.push([
			postTitle || "Info",
			post,
			!!postHL
		]);
	}

	const abId = prefix + id;

	return `${maybeClear}<Ability icon={["skills"]} id="${abId}">\n`
		+ `<Pair id="${abId}" single>${
			text ? doParse(text) : "Class Skills"
		}</Pair>\n`
		+ (noAlter ? "" : '<Pair title="Alters" hl>Class skills</Pair>')
		+ `${contents.map(pair => {
			const [title, info, hl] = pair;
			return (
				`<Pair title="${title}"${hl ? " hl" : ""}>`
				+ doParse(info)
				+ "</Pair>"
			);
		}).join("\n")}</Ability>\n`;
};

export default makeClassSkillsAbilityBlock;
