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
		id, icon, l,
		l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,
		l11,l12,l13,l14,l15,l16,l17,l18,l19,l20,
		s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,
		s11,s12,s13,s14,s15,s16,s17,s18,s19,s20,
		i0,imp1,imp2,imp3,imp4,imp5,imp6,imp7,imp8,imp9,imp10,
		imp11,imp12,imp13,imp14,imp15,imp16,imp17,imp18,imp19,imp20,
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
		return (icon || "").split("-").map(i => {
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
				case "roll": { // change to how you roll dice
					return "rolling-dices";
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
	if(
		s0 || s1 || s2 || s3 || s4 || s5 || s6 || s7 || s8 || s9 || s10
		|| s11 || s12 || s13 || s14 || s15 || s16 || s17 || s18 || s19 || s20
	) {
		// Spells granted based on character level
		// Title should indicate how the spells are gained, what the level column means, etc.
		[s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19,s20]
			.forEach((bit, i) => {
				if(!bit) {
					return;
				}
				const spells = bit.split(/~~/).map(line => {
					const [text, extra] = line.split(/~/);
					return `{spell/${text}}${extra || ""}`;
				}).join(", ");
				const level = i && ordinal(i);
				output.push(
					`<div className="abPair">`
					+ `<div className="abStart plain">${level}</div>`
					+ `<div className="abEnd simple">${doParse(spells)}</div></div>`
				);
			}
		);
	} else if(
		l1 || l2 || l3 || l4 || l5 || l6 || l7 || l8 || l9 || l10
		|| l11 || l12 || l13 || l14 || l15 || l16 || l17 || l18 || l19 || l20
	) {
		// Levels show increasing abilities based on level
		[l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,l18,l19,l20]
			.forEach((text, i) => {
				if(!text) {
					return;
				}
				const level = ordinal(i + 1);
				output.push(
					`<div className="abPair">`
					+ `<div className="abStart">At ${level} Level</div>`
					+ `<div className="abEnd">${doParse(text)}</div></div>`
				);
			}
		);
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
	if(
		imp1 || imp2 || imp3 || imp4 || imp5 || imp6 || imp7 || imp8 || imp9 || imp10
		|| imp11 || imp12 || imp13 || imp14 || imp15 || imp16 || imp17 || imp18 || imp19 || imp20
	) {
		[
			imp1,imp2,imp3,imp4,imp5,imp6,imp7,imp8,imp9,imp10,
			imp11,imp12,imp13,imp14,imp15,imp16,imp17,imp18,imp19,imp20
		].forEach((text, i) => {
			if(!text) {
				return;
			}
			const level = ordinal(i + 1);
			output.push(
				`<div className="abPair">`
				+ `<div className="abStart">At ${level} Level</div>`
				+ `<div className="abEnd">${doParse(text)}</div></div>`
			);
		});
	}

	return `${maybeClear}<div className="ability p">`
		+ `<div className="abIcon"><Link to="/icons">${iconBox}</Link></div>`
		+ `${output.join("\n")}</div>`;
};

export default makeAbilityBlock;
