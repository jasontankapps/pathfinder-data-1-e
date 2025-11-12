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
		l, levels, spells, imp,
		standard, swift, immediate,
		passive, ability,
		usage, useNC
	} = attrs;
	const output = [];
	const doParse = (input) => marked2.parseInline(convertEncodedInfo(input));
	//
	// CONSTRUCT ICON
	//
	const svg = (() => {
		switch(icon) {
			case "melee": { // melee attack, combat maneuver
				return "mailed-fist";
			}
			case "touch": { // touch attack
				return "magic-palm";
			}
			case "magic": { // cast a spell
				return "magic-swirl";
			}
			case "zap": { // ranged touch attack
				return "bolt-spell-cast";
			}
			case "line": { // line attack
				return "barbed-arrow";
			}
			case "ranged": { // ranged physical attack
				return "bowman";
			}
			case "def": { // defensive ability
				return "armor-upgrade";
			}
			case "learn": { // gain a spell
				return "spell-book";
			}
			case "aura": { // aura
				return "abstract-091";
			}
			case "power": { // gain a new ability or companion
				return "muscle-up";
			}
			case "boost": { // boost your own abilities, or an ally's
				return "embraced-energy";
			}
			case "care": { // aid another
				return "cherish";
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
	if(spells) {
		// Spells granted based on level
		spells.split(/~~/).forEach((bit, i) => {
			const [lev, text] = bit.split(/~/);
			const level = ordinal(lev);
			output.push(
				`<div className="abPair">`
				+ `<div className="abStart plain">${level}</div>`
				+ `<div className="abEnd simple">${doParse(`{spell/${text}}`)}</div></div>`
			);
		});
	} else if(levels) {
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
	if(swift || standard || immediate) {
		output.push(
				`<div className="abPair">`
				+ `<div className="abStart">${swift ? "Swift" : (immediate ? "Immediate" : "Standard")} Action</div>`
				+ `<div className="abEnd">${doParse(swift || standard || immediate)}</div></div>`
			);
	} else if (passive || ability) {
		output.push(
				`<div className="abPair">`
				+ `<div className="abStart">${passive ? "Passive " : ""}Ability</div>`
				+ `<div className="abEnd">${doParse(passive || ability)}</div></div>`
			);
	}
	//
	// LEVEL-BASED ACTION IMPROVEMENTS
	//
	if(imp) {
		const improvements = imp.split(/~~/);
		improvements.forEach(bit => {
			const [lv, text] = bit.split(/~/);
			output.push(
					`<div className="abPair">`
					+ `<div className="abStart">At ${ordinal(lv)} Level</div>`
					+ `<div className="abEnd">${doParse(text)}</div></div>`
				);
		});
	}

	return `${maybeClear}<div className="ability p">`
		+ `<div className="abIcon">${iconBox}</div>`
		+ `${output.join("\n")}</div>`;
};

export default makeAbilityBlock;
