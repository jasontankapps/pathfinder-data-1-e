const getSkillBaseAtt = (input) => {
	if(input.match(/wim|limb/)) {
		return " (STR)";
	} else if (input.match(/nowledge|pprai|raft|inguis/)) {
		return " (INT)";
	} else if (input.match(/eal\b|ercept|rofess|otive|urvival/)) {
		return " (WIS)";
	} else if (input.match(/crobat|isable|scape|[Ff]ly|[rR]ide|leight|tealth/)) {
		return " (DEX)";
	}
	return " (CHA)";
};

const makeClassSkillsAbilityBlock = ({
	marked2,
	prefix,
	text,
	convertEncodedInfo,
	maybeClear,
	attrs
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
			gain.split(/~/).map(g => `‹skill/${g}›${getSkillBaseAtt(g)}`).join(", ")
		]);
	}
	if(lose) {
		contents.push([
			"Removed Skills",
			lose
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
