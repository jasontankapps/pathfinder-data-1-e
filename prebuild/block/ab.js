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

let $swap = "";
let $swaps = "";
const resetSwaps = () => {
	$swap = "";
	$swaps = "";
};
const swap = ({plural, descriptor}) => {
	if(descriptor) {
		const next = descriptor.shift();
		descriptor.push(next);
		return next;
	} else if(plural) {
		$swaps = ($swaps === "become") ? "increase to" : "become";
		return $swaps;
	}
	$swap = ($swap === "becomes") ? "increases to" : "becomes";
	return $swap;
};

const makeMax = (incrementMax, logError) => {
	if(!incrementMax) {
		return 20;
	}
	const m = Number(incrementMax);
	if(m != m || m < 2 || m > 20) {
		logError(`Invalid value [${incrementMax}] for \`incrementMax\` attr.`);
		return 20;
	}
	return Math.floor(m);
};

const makeAbilityBlock = ({
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
		increment,incrementAt,incrementEnd,
		incrementPlain,incrementDesc,incrementOrd,
		incrementMulti, incrementMax,
		repeat, repeatAt,
		standard, swift, immediate,
		fullround, move, free,
		provokes, special, note, choice,
		passive, ability,
		order,
		usage, useNC,
		useL, useM, useL3, // default useUnit is "round"
		useMod, useInc, // default useUnit is "time"
		useUnit,
		containerInfo,
		replace, alter, type, prereq
	} = attrs;
	resetSwaps();
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
				const [clss, amt = "1"] = useL.split(/~/);
				const unit = useUnit || "round";
				const amount = Math.round(Number(amt));
				if(!amount || amount < 0) {
					logError(`Invalid amount [${amount}] from useL=\"${useL}\".`);
					return [`1 ${unit}/day per ${clss} level`, unit];
				}
				return [`${amount} ${unit}${amount === 1 ? "" : "s"}/day per ${clss} level`, unit];
				//useL=cleric
				//1 round/day per cleric level
				//useL="hunter~10"
				//10 rounds/day per hunter level
			} else if (useMod) {
				const unit = useUnit || "time";
				const [mod, plus] = useMod.split(/(?<![0-9])(?=[0-9]+)/);
				if(plus) {
					return [`${plus} + ${mod} modifier ${unit}s/day`, unit];
					//useMod=Wis1
					//1 + Wis modifier times/day
				}
				return [`${mod} modifier ${unit}s/day`, unit];
				//useMod=Wis
				//Wis modifier times/day
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
					return "upgrade";
				}
				case "aid": { // aid another
					return "heart-plus";
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
	// LEVEL-BASED IMPROVEMENTS, REPEAT, INCREMENT
	//
	if(
		imp1 || imp2 || imp3 || imp4 || imp5 || imp6 || imp7 || imp8 || imp9 || imp10
		|| imp11 || imp12 || imp13 || imp14 || imp15 || imp16 || imp17 || imp18 || imp19 || imp20
		|| increment || incrementAt || incrementEnd || incrementPlain || incrementOrd || incrementDesc
		|| incrementMulti || incrementMax || repeat || repeatAt
	) {
		const imps = [imp1,imp2,imp3,imp4,imp5,imp6,imp7,imp8,imp9,imp10,imp11,imp12,imp13,imp14,imp15,imp16,imp17,imp18,imp19,imp20];
		if(repeat) {
			// msg ~ lev start ~ lev inc (~ lev max)? ~~ msg... ~~ msg...
			const all = repeat.split(/~~/);
			while(all.length > 0) {
				const [msg, starter, increment = 1, maximum = 20] = all.shift().split(/~/);
				const m = Number(maximum);
				let max = 20;
				if(m !== m || m < 2 || m >= 21) {
					logError(`Invalid maximum level in \`repeat\` attribute [${maximum}].`);
				} else {
					max = Math.floor(m);
				}
				const l = Number(starter);
				if(l !== l || l > max) {
					logError(`Invalid level in \`repeat\` attribute [${starter}].`);
					continue;
				}
				const i = Number(increment);
				if(i !== i || i < 1) {
					logError(`Invalid increment in \`repeat\` attribute [${increment}].`);
					continue;
				}
				let level = Math.floor(l) - 1; // imps array is 0-based
				const inc = Math.floor(i);
				while(level < max) {
					imps[level] = `${msg}${imps[level] ? " " + imps[level] : ""}`;
					level += inc;
				}
			}
		}
		if(repeatAt) {
			// msg ~ lev ~ lev ~ lev... ~~ msg ~ lev... ...
			const all = repeatAt.split(/~~/);
			while(all.length > 0) {
				const [msg, ...etc] = all.shift().split(/~/);
				etc.map(e => {
					const x = Number(e);
					if(l !== l || l >= 21 || l < 1) {
						logError(`Invalid level in \`repeatAt\` attribute [${e}].`);
						return false;
					}
					return Math.floor(x);
				}).filter(e => e).forEach(level => {
					const lv = level - 1;  // imps is a 0-based array
					imps[lv] = `${msg}${imps[lv] ? " " + imps[lv] : ""}`;
				});
			}
		}
		if(incrementMulti) {
			// msg ~ msg ~ ... ~ lev start / lev inc? ; b start? / b inc? / ORD? ; ...
			const message = incrementMulti.split(/~/);
			const bonuses = [];
			const [levelData, ...incrementData] = (message.pop() || "").trim().split(/ *; */);
			const [start, add = 1] = levelData.split(/[/]/).map((x, i) => {
				const n = Number(x);
				if(!n && (i || n !== n)) {
					// `start` can be 0
					logError(`Invalid level value [${x}] in \`incrementMulti\` attribute [index ${i}].`);
					return 1;
				}
				return Math.floor(n);
			});
			incrementData.forEach(line => {
				const [bs, bi, ord] = line.trim().split(/ *[/] */);
				let s = Number(bs || 2);
				if(s !== s || !s) {
					logError(`Invalid bonus start [${bs}] in \`incrementMulti\` attribute.`);
					s = 2;
				}
				let i = Number(bi || 1);
				if(i !== i || !i) {
					logError(`Invalid bonus increment [${bi}] in \`incrementMulti\` attribute.`);
					i = 1;
				}
				const ordinal = ord ? ord.trim().toUpperCase() === "ORD" : false;
				bonuses.push([s, i, ordinal]);
			});
			if(!bonuses.length) {
				logError(`No bonuses present in \`incrementMulti\` attribute.`);
				bonuses.push([2, 1, false]);
			}
			while(bonuses.length + 1 < message.length) {
				// Pad out insufficient bonuses
				const target = message.length - 1;
				const dupes = [];
				bonuses.forEach(b => { dupes.push([...b]) });
				while(bonuses.length < target && dupes.length > 0) {
					bonuses.push(dupes.shift());
				}
			}
			const max = makeMax(incrementMax, logError);
			let level = start + add;
			if(level <= 0) {
				logError(`Invalid level formula in \`incrementMulti\` attribute`);
				level = 25;
			} else if (add <= 0) {
				logError(`Invalid level increment in \`incrementMulti\` attribute.`);
				level = 25;
			}
			const ats = [];
			while (level <= max) {
				ats.push(level);
				level += add;
			}
			ats.sort((a,b) => (a - b));
			while(ats.length > 0) {
				const next = ats.shift();
				const i = next - 1;
				let [msg, ...etc] = message;
				do {
					let [bonus, inc, ord] = bonuses.shift();
					const joiner = ord ? ordinal(bonus) : String(bonus);
					msg = msg + joiner + etc.shift();
					bonus += inc;
					bonuses.push([bonus, inc, ord]);
				} while(etc.length > 0);
				imps[i] = `${msg}${imps[i] ? " " + imps[i] : ""}`;
			}
		} else if (increment || incrementPlain || incrementAt || incrementOrd) {
			// msg ~ lev start ~ lev inc ~ b start ~ b inc
			//      increment "(p!)?This bonus~Ls~Li~Bs?~Bi?" (also incrementPlain and incrementOrd)
			//    incrementAt "(p!)?This bonus~L1~L2~L3...~Bs/Bi?"
			//   OR incrementPlain/incrementOrd can be used as a flag with `increment` OR `incrementAt`
			const [message, ...etc] = (incrementAt || increment || incrementPlain || incrementOrd).split(/~/);
			let plural = false;
			const msg = (() => {
				if(message.startsWith("p!")) {
					plural = true;
					return message.slice(2);
				}
				return message;
			})();
			const end = incrementEnd || ".";
			const ats = [];
			let bonus = 0;
			let inc = 0;
			const max = makeMax(incrementMax, logError);
			if(incrementAt) {
				const bonuses = (etc.pop() || "").split(/[/]/);
				const [bb, bi = 1] = bonuses.map(b => {
					const n = Number(b);
					if(!n) {
						logError(`Invalid value [${b}] at end of \`incrementAt\` attribute.`);
						return 1;
					}
					return Math.floor(n);
				});
				bonus = bb;
				inc = bi;
				ats.push(...etc.map((e, i) => {
					const n = Number(e);
					if(!n || n < 0 || n > max) {
						logError(`Invalid value [${e}] in \`incrementAt\` attribute [index ${i}].`);
						return 0;
					}
					return Math.floor(n);
				}).filter(n => n));
			} else {
				//increment || incrementPlain || incrementOrd
				if(etc.length < 2) {
					logError(`Invalid length of \`increment\` attribute.`);
					etc.push("1", "1", "1"); // pad it out
				}
				const [start, add, bb = 2, bi = 1] = etc.map((e, i) => {
					const n = Number(e);
					if(!n && (i || n !== n)) {
						// `start` can be 0
						logError(`Invalid value [${e}] in \`increment\` attribute [index ${i}].`);
						return 1;
					}
					return Math.floor(n);
				});
				bonus = bb;
				inc = bi;
				let level = start + add;
				if(level <= 0) {
					logError(`Invalid level formula in \`increment\` attribute: [${etc[0]} + ${etc[1]} = ${level}]`);
					level = 25;
				} else if (add <= 0) {
					logError(`Invalid level increment [${add}] in \`increment\` attribute.`);
					level = 25;
				}
				while (level <= max) {
					ats.push(level);
					level += add;
				}
			}
			ats.sort((a,b) => (a - b));
			let last = 0;
			const descriptor = incrementDesc && incrementDesc.split(/~/);
			while(ats.length > 0) {
				const next = ats.shift();
				if(next === last) {
					logError(`Duplicate value [${next}] in \`increment\` attribute.`);
				} else {
					const i = next - 1;
					const b = incrementOrd ? ordinal(bonus) : ((incrementPlain || (bonus <= 0)) ? bonus : "+" + bonus);
					imps[i] = `${msg} ${swap({plural, descriptor})} ${b}${end}${imps[i] ? " " + imps[i] : ""}`;
					last = next;
					bonus += inc;
				}
			}
		} else {
			if (incrementMax) {
				logError("Extraneous `incrementMax` attribute.")
			}
			if (incrementEnd) {
				logError("Extraneous `incrementEnd` attribute.")
			}
			if (incrementDesc) {
				logError("Extraneous `incrementDesc` attribute.")
			}
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
