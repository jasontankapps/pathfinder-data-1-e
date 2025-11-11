import ordinal from "../ordinal.js";

export const makeAbilityBlock = ({
	marked2,
	prefix,
	text,
	convertEncodedInfo,
	maybeClear,
	attrs,
	logError
}) => {
	const {
		id, icon,
		l, levels,
		standard, swift,
		usage, useNC
	} = attrs;
	const output = [];
	const doParse = (input) => marked2.parseInline(convertEncodedInfo(input));
	//
	// CONSTRUCT ICON
	//
	const svg = (() => {
		switch(icon) {
			case "melee": {
				return "mailed-fist";
			}
			case "magic": {
				return "magic-swirl";
			}
			case "zap": {
				return "bolt-spell-cast";
			}
			case "line": {
				return "barbed-arrow";
			}
			case "ranged": {
				return "bowman";
			}
			case "def": {
				return "armor-upgrade";
			}
		}
		logError("---> Missing icon");
		return "confirmed";
	})();
	const iconBox = `<Link to="/icons"><IonIcon icon="/icons/${svg}.svg" color="tertiary" /></Link>`;
	//
	// TITLE
	//
	output.push(`<div className="title abSingle" id="${prefix}${id}" data-hash-target>${doParse(text)}</div>`);
	//
	// LEVEL-BASED NOTES
	//
	if(levels) {
		// Levels show increasing abilities based on level
		levels.split(/~~/).forEach((bit, i) => {
			const [lev, text] = bit.split(/~/);
			const level = ordinal(lev);
			output.push(
				`<div className="abPair">`
				+ `<div className="abStart">At ${level} Level</div>`
				+ `<div className="abEnd">${doParse(text)}</div></div>`
			);
		});
	} else if (l) {
		// A single level shows when the ability is gained
		output.push(
			`<div className="abPair">`
			+ `<div className="abStart">Gained at</div>`
			+ `<div className="abEnd">${ordinal(l)} Level</div></div>`
		);
	}
	//
	// DETERMINE ANY USAGE LIMITS
	//
	if(usage) {
		const consecutive = useNC ? "; these rounds need not be consecutive" : "";
		output.push(
				`<div className="abPair">`
				+ `<div className="abStart">Usage</div>`
				+ `<div className="abEnd">${doParse(usage)}`
				+ `${consecutive}</div></div>`
			);
	}
	//
	// ACTION
	//
	if(swift || standard) {
		output.push(
				`<div className="abPair">`
				+ `<div className="abStart">${swift ? "Swift" : "Standard"} Action</div>`
				+ `<div className="abEnd">${doParse(swift || standard)}</div></div>`
			);
	}

	return `${maybeClear}<div className="ability p">`
		+ `<div className="abIcon">${iconBox}</div>`
		+ `${output.join("\n")}</div>`;
};

export default makeAbilityBlock;
