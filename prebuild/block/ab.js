import ordinal from "../ordinal.js";
import writtenNumber from "written-number";
import romans from "romans";
import checkForEncodedLink from "../tests/checkForEncodedLink.js";
import noteTags from "../noteTags.js";

const parseAtts = (attrs) => {
	const {
		standard, move, free, immediate, swift,
		passive, ability, ability2, ability3,
		fullround, note, choice, benefit, normal,
		goal, compbenefit, info, x, y, z, X, Y, Z
	} = attrs;
	if(passive) {
		return [passive, "Passive Ability"];
	} else if (ability || ability2 || ability3) {
		return [ability || ability2 || ability3, "Ability"];
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
	} else if (info) {
		return [info, "Info"];
	} else if (note) {
		return [note, "Note"];
	} else if (choice) {
		return [choice, "Choice"];
	} else if (benefit) {
		return [choice, "Benefit"];
	} else if (normal) {
		return [normal, "Normal"];
	} else if (goal) {
		return [goal, "Goal"];
	} else if (compbenefit) {
		return [compbenefit, "Completion Benefit"];
	} else if (x || y || z || X || Y || Z) {
		// These are already in [info, "title"] format
		return (x || y || z || X || Y || Z);
	}
	return false;
};

const parseXYZ = (etc, logError) => {
	const result = {};
	Object.values(etc).forEach(([key, value]) => {
		["x","y","z","X","Y","Z"].some(x => {
			if(key.startsWith(x)) {
				if(result[x]) {
					logError(`Duplicate ${x}... attr`);
				}
				result[x] = [value, key.slice(1).replace(/_/g, " ")];
				return true;
			}
			return false;
		});
	});
	return result;
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
	flags,
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
		incrementMulti,incrementMax,incrementRoman,
		incrementUse,
		repeat, repeatAt,
		standard, swift, immediate,
		fullround, move, free,
		provokes, special,
		info, choice, note,
		passive, ability, ability2, ability3,
		benefit, normal, goal, compbenefit,
		order,
		usage, useNC,
		useL, useM, // default useUnit is "round"
		useLMod, useMod, useInc, // default useUnit is "time"
		useF,
		useUnit,
		containerInfo,
		replace, alter, type, prereq,
		...etc
	} = attrs;
	const {x, y, z, X, Y, Z} = parseXYZ(etc, logError);
	resetSwaps();
	const output = [];
	const doParse = (input, split) =>
			split && (input.indexOf("~~~") > -1)
				? marked2.parse(convertEncodedInfo(input).split("~~~").join("\n\n"))
				: marked2.parseInline(convertEncodedInfo(input));
	//
	// DETERMINE ANY USAGE LIMITS
	//
	const use = (() => {
		const base = (() => {
			if (usage) {
				return [doParse(usage, false), useUnit || "round"];
			} else if (useInc) {
				const [levelClass, levelInterval, startFromLevel, initial = "1"] = useInc.split("~");
				const starting = Math.round(Number(initial) || 1);
				const interval = Math.round(Number(levelInterval));
				const unit = useUnit || "time";
				const plurality = starting === 1 ? "" : "s";
				if(!startFromLevel) {
					//useInc=cleric~2 =>
					//1 time/day per two cleric levels
					return [
						`${starting} ${unit + plurality}/day per ${
							writtenNumber(interval)
						} ${levelClass} levels`,
						unit
					];
				} else if(startFromLevel === "+") {
					//useInc=cleric~3~+ =>
					//1 time/day + 1 per three cleric levels
					//useInc=cleric~3~+~3 =>
					//3 times/day + 1 per three cleric levels
					return [
						`${starting} ${unit + plurality}/day + 1 per ${
							writtenNumber(interval)
						} ${levelClass} levels`,
						unit
					];
				}
				//useInc=cleric~4~8 =>
				//1 time/day + 1 per four cleric levels beyond 8th
				//useInc=cleric~4~8~3 =>
				//3 times/day + 1 per four cleric levels beyond 8th
				return [
					`${starting} ${unit + plurality}/day + 1 per ${
						writtenNumber(interval)
					} ${levelClass} levels beyond ${ordinal(startFromLevel)}`,
					unit
				];
			} else if (useL) {
				const [cls, amt = "1"] = useL.split("~");
				const [clss, plus] = cls.split(/(?<![0-9])(?=[0-9]+)/);
				const unit = useUnit || "round";
				const amount = Math.round(Number(amt));
				if(!amount || amount < 0) {
					logError(`Invalid amount [${amount}] from useL=\"${useL}\".`);
					return [`1 ${unit}/day per ${clss} level`, unit];
				} else if(plus) {
					return [`${plus} ${unit}${
						plus == 1 ? "" : "s"  // Note this is NOT strict equality: that's on purpose
					}/day + ${amount} ${unit}${
						amount === 1 ? "" : "s"
					} per ${clss} level`, unit];
					//useL=cleric3
					//3 rounds/day + 1 per cleric level
					//useL=hunter10~1
					//10 rounds/day + 1 per hunter level
				}
				return [`${amount} ${unit}${amount === 1 ? "" : "s"}/day per ${clss} level`, unit];
				//useL=cleric
				//1 round/day per cleric level
				//useL=hunter~10
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
			} else if (useLMod) {
				const unit = useUnit || "time";
				const m = useLMod.match(/([^~]+)~(.*?)([0-9]*)$/);
				if(!m) {
					logError(`Invalid useLMod attribute [${useLMod}]`);
					return [`1 ${unit}/ERROR`, unit];
				}
				const [, clss, mod, plus] = m;
				return [`${
					plus ? `${plus} + ${clss}`
						: (clss.slice(0,1).toUpperCase() + clss.slice(1))
				} level + ${mod} modifier ${unit}s/day`, unit];
				//useLMod=slayer~Charisma
				//Slayer level + Charisma modifier times/day
				//useLMod=slayer~Charisma3
				//3 + Slayer level + Charisma modifier times/day
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
		const formula = (() => {
			if(!useF) {
				return "";
			}
			// Do formula stuff
			// useF=
				// start level
				// ~start value
				// ~level incrementer? (defaults to the start level)
				// ~value incrementer? (defaults to 1)
				// ~start level by increment? (if the next level is different from start level + increment)
				// ~value at this increment? (if different from start value + increment)
				// ~max level? (defaults to 20)
				// +text (extra static bonus added to the beginning of the line)
			// Ex: Gained at 3rd level, 1 + 1 for every five levels total
				// useF=3~1~5~~5
			// Ex: Gained at 12th level, 1 + 1 per every three levels afterward
				// useF=12~4~3
			// Ex: Gained at first level, 3 + 2 per level afterward
				// useF=1~3~1~2+ Charisma modifier
					// "Charisma modifier + # units/day"
			const [formula, plus] = useF.split("+")
			const rawUseF = formula.split("~");
			const [ startLevel, startValue, lIncTemp, vIncTemp, beginLevel, initialValue, maxTemp ] = rawUseF.map(
				text => Math.round(Number(text) || 0)
			);
			if(!startLevel || !startValue) {
				logError(`Malformed useF formula ${JSON.stringify(rawUseF.slice(0, 2))}`);
				return "";
			} else if (startLevel < 1 || startLevel > 20) {
				logError(`Invalid start level in useF (${startLevel}, from "${rawUseF[0]}")`);
				return "";
			}
			const levelInc = lIncTemp || startLevel;
			if(levelInc <= 0) {
				logError(`Invalid level incrementer in useF (${levelInc}, from "${rawUseF[2]}")`);
				return "";
			}
			const valueInc = vIncTemp || 1;
			const max = maxTemp || 20;
			if(max <= startLevel) {
				logError(`Invalid max in useF (${max} is not greater than ${startLevel})`);
				return "";
			}
			// Turn this into something usable by ByLevelPop [[1, 2], [4, 3], [8, 4], ...]
			const arrayFormula = [ [startLevel, startValue] ];
			let level = beginLevel || (startLevel + levelInc);
			let value = initialValue || (startValue + valueInc);
			while(level <= max) {
				arrayFormula.push([level, value]);
				level += levelInc;
				value += valueInc;
			}
			flags.bylevelpop = true;
			return `<ByLevelPop levels={${
				JSON.stringify(arrayFormula)
			}}${
				plus ? ` preText="${plus} + "` : ""
			} unit="${unit}" postText="/day" />`;
		})();
		const consecutive = () => {
			if(useNC) {
				if (useNC === "useNC") {
					return `; these ${unit}s need not be consecutive`;
				}
				return `; these ${unit}s need not be consecutive, but they must be spent in ${useNC}-${unit} increments`;
			}
			return "";
		};
		return `${text}${min}${consecutive()}${formula}`;
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
			"2": ability2,
			"3": ability3,
			u: use,
			n: info,
			N: note,
			c: choice,
			C: containerInfo,
			x,
			y,
			z,
			X,
			Y,
			Z
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
			move, free, passive, ability, ability2,
			ability3, info, choice, benefit, normal,
			goal, compbenefit, containerInfo,
			x, y, z, X, Y, Z
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
					return "aura";
				}
				case "power": { // gain a new ability or companion
					return "stairs-goal";
				}
				case "boost": { // boost your own abilities, or an ally's
					return "upgrade";
				}
				case "aid": { // aid another
					return "remedy";
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
	const iconBox = svg();
	//
	// TITLE
	//

	const maybeFlavor = () => {
		return flavor ? ` flavor={${noteTags(flags, doParse(flavor, false), true)}}`.replace(/\{"([^"]+)"\}/g, '"$1"') : "";
	};
	const abId = jlid || prefix + id;
	output.push(`<Pair single id="${abId}"${maybeFlavor()}>${doParse(text, false)}</Pair>`);
	//
	// TYPE/CATEGORY
	//
	type && output.push(
		`<Pair title="Type">`
		+ doParse(type, false)
		+ "</Pair>"
	);
	//
	// PREREQUISITES
	//
	prereq && output.push(
			`<Pair title="Prerequisites">`
			+ doParse(prereq, false)
			+ "</Pair>"
		);
	//
	// REPLACES/ALTERS ABILITY
	//
	if(replace) {
		output.push(
			`<Pair hl title="Replaces">`
			+ doParse(replace.replace(/~/g, ", "), false)
			+ "</Pair>"
		);
	}
	if(alter) {
		output.push(
			`<Pair hl title="Alters">`
			+ doParse(alter.replace(/~/g, ", "), false)
			+ "</Pair>"
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
					`<Pair title="At ${level} Level">`
					+ doParse(text, true)
					+ "</Pair>"
				);
			}
		);
		if(l) {
			logError("Error: contains \`l\` attribute (ignored) with one or more \`l#\` attributes.");
		}
	} else if (l) {
		// A single level shows when the ability is gained
		output.push(
			`<Pair title="Gained">`
			+ `At ${ordinal(l)} Level`
			+ "</Pair>"
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
				case "3":
					what = ability3;
					// pass-through
				case "2":
					what = what || ability2;
					// pass-through
				case "a":
					title = "Ability";
					what = what || ability;
					break;
				case "n":
					title = "Info";
					what = info;
					break;
				case "N":
					title = "Note";
					what = info;
					break;
				case "c":
					title = "Choice";
					what = choice;
					break;
				case "x":
					title = x[1];
					what = x[0];
					break;
				case "y":
					title = y[1];
					what = y[0];
					break;
				case "z":
					title = z[1];
					what = z[0];
					break;
				case "X":
					title = X[1];
					what = X[0];
					break;
				case "Y":
					title = Y[1];
					what = Y[0];
					break;
				case "Z":
					title = Z[1];
					what = Z[0];
					break;
				default:
					logError(`Invalid token [${ab}] in order attribute [${text}]`);
					return;
			}
			output.push(
				`<Pair title="${title}">`
				+ (parsed ? what : doParse(what || "MISSING", true))
				+ "</Pair>"
			);
		});
	} else {
		if(use) {
			output.push(
				`<Pair title="Usage">`
				+ use
				+ "</Pair>"
			);
		}
		if(containerInfo) {
			// This was pre-parsed and passed in from container-directives.
			const {action, contents} = containerInfo;
			output.push(
				`<Pair title="${action}">`
				+ contents
				+ "</Pair>"
			);
		} else {
			const ab = parseAtts({...attrs, x, y, z, X, Y, Z});
			if(ab) {
				const [description, title] = ab;
				output.push(
					`<Pair title="${title}">`
					+ doParse(description, true)
					+ "</Pair>"
				);
			}
		}
	}
	//
	// PROVOKES ATTACK OF OPPORTUNITY
	//
	if(provokes) {
		output.push(
				`<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>`
				+ (
					provokes === "provokes" ? "Yes" : provokes
				)
				+ "</Pair>"
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
				const spells = bit.split("~~").map(line => {
					const [text, extra] = line.split("~");
					return `‹spell/${text}›${extra || ""}`;
				}).join(", ");
				const level = i && ordinal(i);
				output.push(
					`<Pair plain title="${level}">`
					+ doParse(spells, false)
					+ "</Pair>"
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
		|| incrementMulti || incrementMax || incrementRoman || incrementUse || repeat || repeatAt
	) {
		const imps = [imp1,imp2,imp3,imp4,imp5,imp6,imp7,imp8,imp9,imp10,imp11,imp12,imp13,imp14,imp15,imp16,imp17,imp18,imp19,imp20];
		if(repeat) {
			// msg ~ lev start ~ lev inc (~ lev max)? ~~ msg... ~~ msg...
			const all = repeat.split("~~");
			while(all.length > 0) {
				const [msg, starter, increment = 1, maximum = 20] = all.shift().split("~");
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
			const all = repeatAt.split("~~");
			while(all.length > 0) {
				const [msg, ...etc] = all.shift().split("~");
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
			// msg ~ msg ~ ... ~ lev start / lev inc? / lev max? ; b start? / b inc? / ORD? ; ... ~~ ...
			const messages = incrementMulti.split("~~");
			messages.forEach(bit => {
				const message = bit.split("~");
				const bonuses = [];
				const [levelData, ...incrementData] = (message.pop() || "").trim().split(/ *; */);
				const [start, add = 1, maxlev = undefined] = levelData.split("/").map((x, i) => {
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
				const max = makeMax(maxlev || incrementMax, logError);
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
						msg += joiner + etc.shift();
						bonus += inc;
						bonuses.push([bonus, inc, ord]);
					} while(etc.length > 0);
					imps[i] = `${msg}${imps[i] ? " " + imps[i] : ""}`;
				}
			});
			increment && logError("Extraneous `increment` attribute while using `incrementMulti`.");
			incrementPlain && logError("Extraneous `incrementPlain` attribute while using `incrementMulti`.");
			incrementOrd && logError("Extraneous `incrementOrd` attribute while using `incrementMulti`.");
			incrementAt && logError("Extraneous `incrementAt` attribute while using `incrementMulti`.");
			incrementRoman && logError("Extraneous `incrementRoman` attribute while using `incrementMulti`.");
			incrementEnd && logError("Extraneous `incrementEnd` attribute while using `incrementMulti`.");
			incrementDesc && logError("Extraneous `incrementDesc` attribute while using `incrementMulti`.");
			incrementUse && logError("Extraneous `incrementUse` attribute while using `incrementMulti`.");
		} else if (incrementUse) {
			// who ~ lev start ~ lev inc ~ b start (defaults to 2) ~ be inc (defaults to 1)
			const [who, ...etc] = incrementUse.split("~");
			const mid = incrementDesc || "can use this ability";
			const end = incrementEnd || " times/day.";
			const max = makeMax(incrementMax, logError);
			if(etc.length < 2) {
				logError(`Invalid length of \`incrementUse\` attribute.`);
				etc.push("1", "1", "1"); // pad it out
			}
			const [start, add, bb = 2, bi = 1] = etc.map((e, i) => {
				const n = Number(e);
				if(!n && (i || n !== n)) {
					// `start` can be 0
					logError(`Invalid value [${e}] in \`incrementUse\` attribute [index ${i}].`);
					return 1;
				}
				return Math.floor(n);
			});
			let bonus = bb,
				inc = bi,
				level = start + add;
			if(level <= 0) {
				logError(`Invalid level formula in \`incrementUse\` attribute: [${etc[0]} + ${etc[1]} = ${level}]`);
				level = 25;
			} else if (add <= 0) {
				logError(`Invalid level increment [${add}] in \`incrementUse\` attribute.`);
				level = 25;
			} else if (bonus < 0 || bi < 1) {
				logError(`Invalid bonus [${bonus}] and/or increment [${bi}] in \`incrementUse\` attribute.`);
				level = 25;
			}
			const ats = [];
			while (level <= max) {
				ats.push(level);
				level += add;
			}
			ats.sort((a,b) => (a - b));
			let last = 0;
			const descriptor = mid && mid.split("~");
			while(ats.length > 0) {
				const next = ats.shift();
				if(next === last) {
					logError(`Duplicate value [${next}] in \`incrementUse\` attribute.`);
				} else {
					const i = next - 1;
					const b = (
						incrementRoman ? romans.romanize(bonus)
						: (
							incrementOrd ? ordinal(bonus)
							: bonus
						)
					);
					imps[i] = `${who} ${swap({descriptor})} ${b}${end}${imps[i] ? " " + imps[i] : ""}`;
					last = next;
					bonus += inc;
				}
			}
		} else if (increment || incrementPlain || incrementAt || incrementOrd || incrementRoman) {
			// msg ~ lev start ~ lev inc ~ b start (defaults to 2) ~ b inc (defaults to 1)
			//      increment "(p!)?This bonus~Ls~Li~Bs?~Bi?" (also incrementPlain, -Ord, and -Roman)
			//    incrementAt "(p!)?This bonus~L1~L2~L3...~Bs/Bi?"
			//   OR incrementPlain/incrementOrd can be used as a flag with `increment` OR `incrementAt`
			const [message, ...etc] = (
				incrementAt || increment || incrementPlain || incrementOrd || incrementRoman
			).split("~");
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
				const bonuses = (etc.pop() || "").split("/");
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
				//increment || incrementPlain || incrementOrd || incrementRoman
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
				if(incrementRoman && (bonus <= 0)) {
					logError(`Invalid bonus for the \`incrementRoman\` attribute: [${bonus}]`);
					bonus = Math.abs(bonus) || 1;
				}
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
			const descriptor = incrementDesc && incrementDesc.split("~");
			while(ats.length > 0) {
				const next = ats.shift();
				if(next === last) {
					logError(`Duplicate value [${next}] in \`increment\` attribute.`);
				} else {
					const i = next - 1;
					const b = (
						incrementRoman ? romans.romanize(bonus)
						: (
							incrementOrd ? ordinal(bonus)
							: (
								(incrementPlain || (bonus <= 0)) ? bonus
								: "+" + bonus
							)
						)
					);
					imps[i] = `${msg} ${swap({plural, descriptor})} ${b}${end}${imps[i] ? " " + imps[i] : ""}`;
					last = next;
					bonus += inc;
				}
			}
		} else {
			incrementMax && logError("Extraneous `incrementMax` attribute.");
			incrementEnd && logError("Extraneous `incrementEnd` attribute.");
			incrementDesc && logError("Extraneous `incrementDesc` attribute.");
		}
		imps.forEach((text, i) => {
			if(!text) {
				return;
			}
			output.push(
				`<Pair title="At ${ordinal(i + 1)} Level">`
				+ doParse(text, true)
				+ "</Pair>"
			);
		});
	}
	//
	// SPECIAL
	//
	if(special) {
		output.push(
				`<Pair title="Special">`
				+ doParse(special, true)
				+ "</Pair>"
			);
	}

	const indentation = indent ? (indent === "indent" ? 1 : Number(indent)) : 0;
	const extraClasses = (
		sub ? "subAbility numbered" : (
			next ? "subAbility" : (
				head ? "hasSubs" : ""
			)
		)
		+ (
			indentation ?
				((sub || next || head) ? " " : "") + (indentation === 1 ? "indent" : "indent2")
				: ""
		)
	);

	return `${maybeClear}<Ability id="${abId}" ${
			extraClasses ? `extraClasses="${extraClasses}" ` : ""
		}icon={${JSON.stringify(iconBox)}}>\n`
		+ `${output.join("\n")}\n</Ability>\n`;
};

export default makeAbilityBlock;
