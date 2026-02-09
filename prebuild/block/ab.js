import ordinal from "../ordinal.js";
import writtenNumber from "written-number";

const abPairOpen = 	'<div className="abPair">';
const abPairStartOpen = '<div className="abStart"><div className="box">';
const abPairEndOpen = '<div className="abEnd"><div className="box">';
const abPairPartClose = "</div></div>";
const abPairClose = "</div>";

const parseAtts = (attrs) => {
	const {standard, move, free, immediate, swift, passive, ability, fullround, note, choice} = attrs;
	if(passive) {
		return [passive, "Passive Ability"];
	} else if (ability) {
		return [ability, "Ability"];
	} else if (standard) {
		return [standard, "Standard Action"];
	} else if (swift) {
		return [swift, "Swift Action"];
	} else if (move) {
		return [move, "Move-Equivalent Action"];
	} else if (fullround) {
		return [fullround, "Full-Round Action"];
	} else if (immediate) {
		return [immediate, "Immediate Action"];
	} else if (free) {
		return [free, "Free Action"];
	} else if (note) {
		return [note, "Info"];
	} else if (choice) {
		return [choice, "Choice"];
	}
	return false;
};

const mash = (previous, input) => {
	if(previous) {
		return `${input} ${previous}`;
	}
	return input;
};

let $swap = "";
let $swaps = "";
const swap = (plural, decreasing) => {
	if(plural) {
		$swaps = ($swaps === "become") ? `${decreasing ? "de" : "in"}crease to` : "become";
		return $swaps;
	}
	$swap = ($swap === "becomes") ? `${decreasing ? "de" : "in"}creases to` : "becomes";
	return $swap;
};

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
		id, sub, head, next, icon, l, flavor, indent,
		l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,
		l11,l12,l13,l14,l15,l16,l17,l18,l19,l20,
		s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,
		s11,s12,s13,s14,s15,s16,s17,s18,s19,s20,
		imp1,imp2,imp3,imp4,imp5,imp6,imp7,imp8,imp9,imp10,
		imp11,imp12,imp13,imp14,imp15,imp16,imp17,imp18,imp19,imp20,
		repeat,repeatAt,repeatEnd,repeatPlain,
		standard, swift, immediate,
		fullround, move, free,
		provokes, special, note, choice,
		passive, ability,
		order,
		usage, useNC,
		useL, useM, useInc, useL3, // default useUnit is "round"
		useMod, useMod1, useMod3, useMod4, // default useUnit is "time"
		useUnit,
		containerInfo,
		replace, alter, type, prereq
	} = attrs;
	const output = [];
	const doParse = (input) => {
		return marked2.parseInline(convertEncodedInfo(input));
	};
	//
	// DETERMINE ANY USAGE LIMITS
	//
	const use = (() => {
		const base = (() => {
			if (usage) {
				return [doParse(usage), useUnit || "round"];
			} else if (useInc) {
				const [levelInterval, levelClass, startFromLevel, initial = "1"] = useInc.split(/~/);
				const starting = Number(initial) || 1;
				const unit = useUnit || "time";
				const plurality = starting === 1 ? "" : "s";
				if(!startFromLevel) {
					//useInc=2~cleric =>
					//1 time/day per two cleric levels
					return [
						`${starting} ${unit + plurality}/day per ${
							writtenNumber(Number(levelInterval))
						} ${levelClass} levels`,
						unit
					];
				} else if(startFromLevel === "+") {
					//useInc=3~cleric~+ =>
					//1 time/day + 1 per three cleric levels
					//useInc=3~cleric~+~3 =>
					//3 times/day + 1 per three cleric levels
					return [
						`${starting} ${unit + plurality}/day + 1 per ${
							writtenNumber(Number(levelInterval))
						} ${levelClass} levels`,
						unit
					];
				}
				//useInc=4~cleric~8 =>
				//1 time/day + 1 per four cleric levels beyond 8th
				//useInc=4~cleric~8~3 =>
				//3 times/day + 1 per four cleric levels beyond 8th
				return [
					`${starting} ${unit + plurality}/day + 1 per ${
						writtenNumber(Number(levelInterval))
					} ${levelClass} levels beyond ${ordinal(startFromLevel)}`,
					unit
				];
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
			} else if (useMod1) {
				const unit = useUnit || "time";
				return [`1 + ${useMod1} modifier ${unit}s/day`, unit]
				//3 + Wis modifier times/day
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
		const [text, unit] = base;
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
		return `${text}${min}${consecutive()}`;
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
			u: use,
			n: note,
			c: choice,
			C: containerInfo
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
		const all = [
			standard, swift, immediate, fullround,
			move, free, passive, ability, note,
			choice, containerInfo
		].filter(x => x);
		if(all.length > 1) {
			logError(`${all.length} abilities found, but no "order" prop was given. [${text}]`);
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
					return "stairs-goal";
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
				case "down": { // a strict downgrade of your own abilities
					return "broken-shield";
				}
				case "skill": { // modifying class skills
					return "skills";
				}
				case "info": { // just a simple note
					return "info";
				}
				case "warning": {
					return "hazard-sign";
				}
			}
			logError(`---> Missing or invalid icon [${i}][${text}]`);
			return "confirmed";
		});
	};
	const iconBox = svg().map(svg => `<Link to="/icons/${svg}"><IonIcon icon="/icons/${svg}.svg" color="secondary" /></Link>`).join("");
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
	// TYPE/CATEGORY
	//
	type && output.push(
			abPairOpen
			+ abPairStartOpen
			+ "Type"
			+ abPairPartClose
			+ '<div className="abEnd"><div className="box hl">'
			+ doParse(type)
			+ abPairPartClose
			+ abPairClose
		);
	//
	// PREREQUISITES
	//
	prereq && output.push(
			abPairOpen
			+ abPairStartOpen
			+ "Prerequisites"
			+ abPairPartClose
			+ abPairEndOpen
			+ doParse(prereq)
			+ abPairPartClose
			+ abPairClose
		);
	//
	// REPLACES/ALTERS ABILITY
	//
	if(replace) {
		output.push(
			abPairOpen
			+ `<div className="abStart"><div className="box hl">Replaces`
			+ abPairPartClose
			+ abPairEndOpen
			+ doParse(replace.replace(/~/g, ", "))
			+ abPairPartClose
			+ abPairClose
		);
	}
	if(alter) {
		output.push(
			abPairOpen
			+ `<div className="abStart"><div className="box hl">Alters`
			+ abPairPartClose
			+ abPairEndOpen
			+ doParse(alter.replace(/~/g, ", "))
			+ abPairPartClose
			+ abPairClose
		);
	}
	//
	// LEVEL-BASED NOTES
	//
	if(
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
	if (order) {
		const path = order.split("");
		path.forEach(ab => {
			let title = "", what = "", parsed = false;
			switch(ab) {
				case "C": {
					const {action, contents} = containerInfo;
					title = action;
					what = contents;
					parsed = true;
					break;
				}
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
				case "n":
					title = "Info";
					what = note;
					break;
				case "c":
					title = "Choice";
					what = choice;
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
				+ (parsed ? what : doParse(what || "MISSING"))
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
		if(containerInfo) {
			// This was pre-parsed and passed in from container-directives.
			const {action, contents} = containerInfo;
			output.push(
				abPairOpen
				+ abPairStartOpen
				+ action
				+ abPairPartClose
				+ abPairEndOpen
				+ contents
				+ abPairPartClose
				+ abPairClose
			);
		} else {
			const ab = parseAtts(attrs);
			if(ab) {
				const [description, title] = ab;
				output.push(
					abPairOpen
					+ abPairStartOpen
					+ title
					+ abPairPartClose
					+ abPairEndOpen
					+ doParse(description)
					+ abPairPartClose
					+ abPairClose
				);
			}
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
	// LEVEL-BASED SPELLS
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
	}
	//
	// LEVEL-BASED IMPROVEMENTS, REPEAT
	//
	if(
		imp1 || imp2 || imp3 || imp4 || imp5 || imp6 || imp7 || imp8 || imp9 || imp10
		|| imp11 || imp12 || imp13 || imp14 || imp15 || imp16 || imp17 || imp18 || imp19 || imp20
		|| repeat || repeatAt || repeatEnd || repeatPlain
	) {
		const imps = [imp1,imp2,imp3,imp4,imp5,imp6,imp7,imp8,imp9,imp10,imp11,imp12,imp13,imp14,imp15,imp16,imp17,imp18,imp19,imp20];
		if(repeat || repeatPlain || repeatAt) {
			// msg, lev start, lev inc, b start, b inc
			//      repeat "(p!)?This bonus~Ls~Li~Bs~Bi?"
			//    repeatAt "(p!)?This bonus~L1~L2~L3...~Bs/Bi?"
			// repeatPlain "(p!)?This amount~Ls~Li~Bs~Bi?"
			//   OR repeatPlain can be used as a flag with `repeat`
			const [message, ...etc] = (repeat || repeatPlain || repeatAt).split(/~/);
			let plural = false;
			const msg = (() => {
				if(message.startsWith("p!")) {
					plural = true;
					return message.slice(2);
				}
				return message;
			})();
			const end = repeatEnd || ".";
			const ats = [];
			let bonus = 0;
			let inc = 0;
			if(repeat || repeatPlain) {
				if(etc.length < 3) {
					logError(`Invalid length of \`repeat\` attribute.`);
					etc.push("1", "1", "1");
				}
				const [start, add, bb, bi = 1] = etc.map((e, i) => {
					const n = Math.floor(Number(e));
					if(!n && i) {
						// `start` can be 0
						logError(`Invalid value [${e}] in \`repeat\` attribute.`);
						return 1;
					}
					return n;
				});
				bonus = bb;
				inc = bi;
				let level = start + add;
				if(level <= 0) {
					logError(`Invalid level formula in \`repeat\` attribute: [${etc[0]} + ${etc[1]} = ${level}]`);
					level = 25;
				} else if (add <= 0) {
					logError(`Invalid level increment [${add}] in \`repeat\` attribute.`);
					level = 25;
				}
				while (level <= 20) {
					ats.push(level);
					level += add;
				}
			} else {
				const bonuses = (etc.pop() || "").split(/[/]/);
				const [bb, bi = 1] = bonuses.map(b => {
					const n = Math.floor(Number(b));
					if(!n) {
						logError(`Invalid value [${b}] in \`repeat\` attribute.`);
						return 1;
					}
					return n;
				});
				bonus = bb;
				inc = bi;
				ats.push(...etc.map(e => {
					const n = Math.floor(Number(e));
					if(!n || n < 0 || n > 20) {
						logError(`Invalid value [${e}] in \`repeatAt\` attribute.`);
						return 0;
					}
					return n;
				}).filter(n => n));
			}
			ats.sort((a,b) => (a - b));
			let last = 0;
			const decreasing = inc < 0;
			while(ats.length > 0) {
				const next = ats.shift();
				if(next === last) {
					logError(`Duplicate value [${next}] in \`repeatAt\` attribute.`);
				} else {
					const i = next - 1;
					const b = (repeatPlain || (bonus <= 0)) ? bonus : "+" + bonus;
					imps[i] = mash(imps[i], `${msg} ${swap(plural, decreasing)} ${b}${end}`);
					last = next;
					bonus += inc;
				}
			}
		} else if (repeatEnd) {
			logError("Extraneous `repeatEnd` attribute.")
		}
		imps.forEach((text, i) => {
			if(!text) {
				return;
			}
			output.push(
				abPairOpen
				+ abPairStartOpen
				+ `At ${ordinal(i + 1)} Level`
				+ abPairPartClose
				+ abPairEndOpen
				+ doParse(text)
				+ abPairPartClose
				+ abPairClose
			);
		});
	}
	//
	// SPECIAL
	//
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

	const indentation = indent ? (indent === "indent" ? 1 : Number(indent)) : 0;

	return `${maybeClear}<div className="ability ${
			sub ? "subAbility numbered" : (next ? "subAbility" : (head ? "hasSubs" : "p"))
		}${
			indentation ? (indentation === 1 ? " indent" : " indent2") : ""
		}">`
		+ `<div className="abIcon">${iconBox}</div>\n`
		+ `${output.join("\n")}</div>\n`;
};

export default makeAbilityBlock;
