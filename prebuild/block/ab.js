import ordinal from "../ordinal.js";
import writtenNumber from "written-number";

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
		fullround, move, free,
		provokes, special,
		passive, ability,
		usage, useNC,
		useL, useM, useInc, useL3, // default useUnit is "round"
		useMod, useMod3, // default useUnit is "time"
		useUnit,
		containerInfo
	} = attrs;
	const output = [];
	const doParse = (input) => marked2.parseInline(convertEncodedInfo(input));
	//
	// CONSTRUCT ICON
	//
	const svg = () => {
		return icon.split("-").map(i => {
			switch(i) {
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
					return "smoking-finger";
				}
				case "line": { // line attack
					return "barbed-arrow";
				}
				case "cone": { // cone-shaped attack
					return "tornado-discs";
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
				case "aid": { // aid another
					return "cherish";
				}
				case "protect": { // protect another
					return "shield-reflect";
				}
				case "lower": { // lower another's defenses
					return "armor-downgrade";
				}
			}
			logError(`---> Missing or invalid icon [${i}]`);
			return "confirmed";
		});
	};
	const iconBox = svg().map(svg => `<IonIcon icon="/icons/${svg}.svg" color="secondary" />`).join("");
	//
	// TITLE
	//
	output.push(`<div className="title abSingle" id="${prefix}${id}" data-hash-target>${doParse(text)}</div>`);
	//
	// LEVEL-BASED NOTES
	//
	if(spells) {
		// Spells granted based on character level
		// Title should indicate how the spells are gained, what the level column means, etc.
		spells.split(/~~/).forEach((bit) => {
			const [lev, text, extra] = bit.split(/~/);
			const level = ordinal(lev);
			output.push(
				`<div className="abPair">`
				+ `<div className="abStart plain">${level}</div>`
				+ `<div className="abEnd simple">${doParse(`{spell/${text}}`)}${extra || ""}</div></div>`
			);
		});
	} else if(levels) {
		// Levels show increasing abilities based on level
		levels.split(/~~/).forEach((bit) => {
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
	const use = (() => {
		if (usage) {
			return [doParse(usage), "error"];
		} else if (useInc) {
			const [inc, clss, base] = useInc.split(/~/);
			const unit = useUnit || "round";
			if(!base) {
				return [`1 ${unit}/day per ${writtenNumber(Number(inc))} ${clss} levels`, unit];
				//useInc=2~cleric =>
				//1 round/day per two cleric levels
			}
			return [
				`1 ${unit}/day + 1 per ${
					writtenNumber(Number(inc))
				} ${clss} levels beyond ${ordinal(base)}`,
				unit
			];
			//useInc=4~cleric~8 =>
			//1 time/day + 1 per four cleric levels beyond 8th
		} else if (useL3) {
			const unit = useUnit || "round";
			return [`3 ${unit}s/day + 1 ${unit} per ${useL3} level`, unit];
			//3 rounds/day + 1 round per cleric level
		} else if (useL) {
			const unit = useUnit || "round";
			return [`1 ${unit}/day per ${useL} level`, unit];
			//1 round/day per cleric level
		} else if (useMod) {
			const unit = useUnit || "time";
			return [`${useMod} modifier ${unit}s/day`, unit]
			//Wis modifier times/day
		} else if (useMod3) {
			const unit = useUnit || "time";
			return [`3 + ${useMod3} modifier ${unit}s/day`, unit]
			//3 + Wis modifier times/day
		}
		return null;
	})();
	if(use) {
		const [usage, unit] = use;
		const min = !useM ? "" : (
			useM === "useM" ? " (minimum 1)" : `(minimum ${useM})`
		);
		const consecutive = () => {
			if(useNC) {
				if (useNC === "useNC") {
					return `; these ${unit}s need not be consecutive`;
				}
				return `; these ${unit}s need not be consecutive, but they must be spent in ${useNC}-${unit} increments`;
			}
			return "";
		};
		output.push(
				`<div className="abPair">`
				+ `<div className="abStart">Usage</div>`
				+ `<div className="abEnd">${usage}${min}${consecutive()}</div></div>`
			);
	}
	//
	// ACTION
	//
	if(containerInfo) {
		// This was pre-parsed and passed in from container-directives.
		const {ability, contents} = containerInfo;
		output.push(
			`<div className="abPair">`
			+ `<div className="abStart">${ability}</div>`
			+ `<div className="abEnd">${contents}</div></div>`
		);
	} else if(standard || swift || fullround || move || immediate || free) {
		output.push(
				`<div className="abPair">`
				+ `<div className="abStart">${
					standard ? "Standard" : (
						swift ? "Swift" : (
							fullround ? "Full-Round" : (
								move ? "Move-Equivalent" : (
									immediate ? "Immediate" : "Free"
								)
							)
						)
					)
				} Action</div>`
				+ `<div className="abEnd">${
					doParse(standard || swift || fullround || move || immediate || free)
				}</div></div>`
			);
	} else if (passive || ability) {
		output.push(
				`<div className="abPair">`
				+ `<div className="abStart">${passive ? "Passive " : ""}Ability</div>`
				+ `<div className="abEnd">${doParse(passive || ability)}</div></div>`
			);
	}
	if(special) {
		output.push(
				`<div className="abPair">`
				+ `<div className="abStart">Special</div>`
				+ `<div className="abEnd">${doParse(special)}</div></div>`
			);
	}
	//
	// PROVOKES ATTACK OF OPPORTUNITY
	//
	if(provokes) {
		output.push(
				`<div className="abPair">`
				+ `<div className="abStart">Provokes <Link to="/rule/aoo">AoO?</Link></div>`
				+ `<div className="abEnd">${
					provokes === "provokes" ? "Yes" : doParse(provokes)
				}</div></div>`
			);
	}
	//
	// LEVEL-BASED ACTION IMPROVEMENTS
	//
	if(imp) {
		const improvements = imp.split(/~~/);
		improvements.forEach(bit => {
			const [lv, text = ""] = bit.split(/~/);
			output.push(
					`<div className="abPair">`
					+ `<div className="abStart">At ${ordinal(lv)} Level</div>`
					+ `<div className="abEnd">${doParse(text)}</div></div>`
				);
		});
	}

	return `${maybeClear}<div className="ability p">`
		+ `<div className="abIcon"><Link to="/icons">${iconBox}</Link></div>`
		+ `${output.join("\n")}</div>`;
};

export default makeAbilityBlock;
