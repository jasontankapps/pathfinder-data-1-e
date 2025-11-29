import ordinal from "../ordinal.js";
import writtenNumber from "written-number";

const abPairOpen = 	'<div className="abPair">';
const abPairStartOpen = '<div className="abStart"><div className="box">';
const abPairEndOpen = '<div className="abEnd"><div className="box">';
const abPairPartClose = "</div></div>";
const abPairClose = "</div>";

export const makeAbilityBlock = ({
	marked2,
	prefix,
	jlid,
	text,
	convertEncodedInfo,
	maybeClear,
	attrs,
	logError
}) => {
	const {
		id, sub, head, icon, l, flavor,
		l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,
		l11,l12,l13,l14,l15,l16,l17,l18,l19,l20,
		s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,
		s11,s12,s13,s14,s15,s16,s17,s18,s19,s20,
		imp1,imp2,imp3,imp4,imp5,imp6,imp7,imp8,imp9,imp10,
		imp11,imp12,imp13,imp14,imp15,imp16,imp17,imp18,imp19,imp20,
		standard, swift, immediate,
		fullround, move, free,
		provokes, special,
		passive, ability,
		order,
		usage, useNC,
		useL, useM, useInc, useL3, // default useUnit is "round"
		useMod, useMod3, useMod4, // default useUnit is "time"
		useUnit,
		containerInfo
	} = attrs;
	const output = [];
	const doParse = (input) => marked2.parseInline(convertEncodedInfo(input));
	//
	// DETERMINE ANY USAGE LIMITS
	//
	const use = (() => {
		const base = (() => {
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
			} else if (useMod4) {
				const unit = useUnit || "time";
				return [`4 + ${useMod4} modifier ${unit}s/day`, unit]
				//4 + Cha modifier times/day
			}
			return null;
		})();
		if(!base) {
			return base;
		}
		const [u, unit] = base;
		const min = !useM ? "" : (
			useM === "useM" ? " (minimum 1)" : ` (minimum ${useM})`
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
		return `${u}${min}${consecutive()}`;
	})();
	//
	// CHECK ABILITIES
	//
	if(order) {
		const map = {
			s: standard,
			w: swift,
			i: immediate,
			r: fullround,
			m: move,
			f: free,
			p: passive,
			a: ability,
			u: use
		};
		const missing = [];
		order.split("").forEach(x => {
			if(!map[x]) { missing.push(`"order" prop declares missing value [${x}]`) } else { delete map[x]; }
		});
		Object.entries(map).forEach(([a, v]) => {
			v && missing.push(`"order" prop missing value [${a}]`);
		});
		while(missing.length > 0) {
			logError(`[${text}] ` + missing.shift());
		}
	} else {
		const all = [standard, swift, immediate, fullround, move, free, passive, ability].filter(x => x);
		if(all.length > 1) {
			logError(`${all.length} abilities found, but no "order" prop was given.`);
		}
	}
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
			logError(`---> Missing or invalid icon [${i}][${text}]`);
			return "confirmed";
		});
	};
	const iconBox = svg().map(svg => `<IonIcon icon="/icons/${svg}.svg" color="secondary" />`).join("");
	//
	// TITLE
	//
	output.push(`<div className="title abSingle" id="${
		jlid || prefix + id
	}" data-hash-target><div className="box">${
		doParse(text)
	}</div>${
		flavor ? `<div className="flavor">${doParse(flavor)}</div>` : ""
	}</div>`);
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
					return `‹spell/${text}›${extra || ""}`;
				}).join(", ");
				const level = i && ordinal(i);
				output.push(
					abPairOpen
					+ `<div className="abStart plain"><div className="box">${level}`
					+ abPairPartClose
					+ `<div className="abEnd simple"><div className="box">${doParse(spells)}`
					+ abPairPartClose
					+ abPairClose
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
					abPairOpen
					+ abPairStartOpen
					+ `At ${level} Level`
					+ abPairPartClose
					+ abPairEndOpen
					+ doParse(text)
					+ abPairPartClose
					+ abPairClose
				);
			}
		);
	} else if (l) {
		// A single level shows when the ability is gained
		output.push(
			abPairOpen
			+ abPairStartOpen
			+ "Gained"
			+ abPairPartClose
			+ abPairEndOpen
			+ `At ${ordinal(l)} Level`
			+ abPairPartClose
			+ abPairClose
		);
	}
	//
	// ACTION
	//
	if(containerInfo) {
		// This was pre-parsed and passed in from container-directives.
		const {ability, contents} = containerInfo;
		output.push(
			abPairOpen
			+ abPairStartOpen
			+ ability
			+ abPairPartClose
			+ abPairEndOpen
			+ contents
			+ abPairPartClose
			+ abPairClose
		);
	} else if (order) {
		const path = order.split("");
		path.forEach(ab => {
			let title = "", what = "";
			switch(ab) {
				case "u":
					title = "Usage";
					what = use;
					break;
				case "s":
					title = "Standard Action";
					what = standard;
					break;
				case "m":
					title = "Move-Equivalent Action";
					what = move;
					break;
				case "w":
					title = "Swift Action";
					what = swift;
					break;
				case "i":
					title = "Immediate Action";
					what = immediate;
					break;
				case "r":
					title = "Full-Round Action";
					what = fullround;
					break;
				case "f":
					title = "Free Action";
					what = free;
					break;
				case "p":
					title = "Passive Ability";
					what = passive;
					break;
				case "a":
					title = "Ability";
					what = ability;
					break;
				default:
					logError(`Invalid token [${ab}] in order attribute [${text}]`);
					return;
			}
		output.push(
				abPairOpen
				+ abPairStartOpen
				+ title
				+ abPairPartClose
				+ abPairEndOpen
				+ doParse(what)
				+ abPairPartClose
				+ abPairClose
			);
		});
	} else {
		if(use) {
			output.push(
				abPairOpen
				+ abPairStartOpen
				+ "Usage"
				+ abPairPartClose
				+ abPairEndOpen
				+ use
				+ abPairPartClose
				+ abPairClose
			);
		}
		if(standard || swift || fullround || move || immediate || free) {
			output.push(
					abPairOpen
					+ abPairStartOpen
					+ (
						standard ? "Standard" : (
							swift ? "Swift" : (
								fullround ? "Full-Round" : (
									move ? "Move-Equivalent" : (
										immediate ? "Immediate" : "Free"
									)
								)
							)
						)
					)
					+ " Action"
					+ abPairPartClose
					+ abPairEndOpen
					+ doParse(standard || swift || fullround || move || immediate || free)
					+ abPairPartClose
					+ abPairClose
				);
		} else if (passive || ability) {
			output.push(
					abPairOpen
					+ abPairStartOpen
					+ (passive ? "Passive " : "")
					+ "Ability"
					+ abPairPartClose
					+ abPairEndOpen
					+ doParse(passive || ability)
					+ abPairPartClose
					+ abPairClose
				);
		}
	}
	//
	// PROVOKES ATTACK OF OPPORTUNITY
	//
	if(provokes) {
		output.push(
				abPairOpen
				+ abPairStartOpen
				+ 'Provokes <Link to="/rule/aoo">AoO?</Link>'
				+ abPairPartClose
				+ abPairEndOpen
				+ (
					provokes === "provokes" ? "Yes" : doParse(provokes)
				)
				+ abPairPartClose
				+ abPairClose
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
				abPairOpen
				+ abPairStartOpen
				+ `At ${level} Level`
				+ abPairPartClose
				+ abPairEndOpen
				+ doParse(text)
				+ abPairPartClose
				+ abPairClose
			);
		});
	}
	if(special) {
		output.push(
				abPairOpen
				+ abPairStartOpen
				+ "Special"
				+ abPairPartClose
				+ abPairEndOpen
				+ doParse(special)
				+ abPairPartClose
				+ abPairClose
			);
	}

	return `${maybeClear}<div className="ability ${sub ? "subAbility" : (head ? "hasSubs" : "p")}">`
		+ `<div className="abIcon"><Link to="/icons">${iconBox}</Link></div>\n`
		+ `${output.join("\n")}</div>\n`;
};

export default makeAbilityBlock;
