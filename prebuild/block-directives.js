import checkForEncodedLink, { convertTextToLink } from './tests/checkForEncodedLink.js';
import makeAfflictionBlock from './block/aff.js';
import makeDrugBlock from './block/drug.js';
import makeTrapBlock from './block/trap.js';
import makeHauntBlock from './block/haunt.js';
import makeSpellBlock from './block/spell.js'
import makeMonsterInfoBlock from './block/minfo.js';
import makeMonsterDefenseBlock from './block/mdefense.js';
import { makeMonsterFootnoteBlock, makeMonsterOffenseBlock, makeMonsterSpellBlock } from './block/moffense.js';
import makeMonsterStatisticsBlock from './block/mstats.js';
import makeMonsterEcologyBlock from './block/meco.js';
import makePrerequisiteBlock from './block/prereq.js';
import makeAbilityBlock from './block/ab.js';
import makeSpellAbilityBlock from './block/spellAb.js';
import makeSpellListBlock from './block/spelllist.js';
import makeListBlock from './block/list.js';
import { makeClassBlock, makeProfBlock } from './block/class.js';
import makeCapstoneBlock from './block/altCapstone.js';

const churn = (n, attrs, list, regex, logError) => {
	const found = [];
	const listing = new Set(list);
	Object.keys(attrs).forEach(key => {
		if(!listing.has(key)) {
			if(regex.length === 0 || regex.every(rx => !key.match(rx))) {
				found.push([key, attrs[key]]);
			}
		}
	});
	if(found.length) {
		logError("\n" + found.map(([key, value]) => `--> ::${n}{${key}=${JSON.stringify(value)}}`).join("\n"));
	}
};
const convertEncodedInfo = (input) => {
	let m;
	let test = input;
	let output = "";
	while(m = checkForEncodedLink(test)) {
		const [pre, fulllink, text, post] = m;
		output = output + `${pre}[${text}](${fulllink})`;
		test = post;
	}
	return (output + test).replace(/&(times|quot|mdash|#[0-9]+|#x[0-9a-fA-F]+)&/g, "&$1;");
};

const getBlockDirectives = (globalVariable, marker = "::") => {
	const $ = globalVariable;
	const makeValidID = (input) => input.toLowerCase().replace(/ +/g, "-").replace(/[^-a-z0-9]/g, "");
	return {
		level: "block",
		marker,
		renderer: (token) => {
			const {prefix, flags, temp, addToJumpList, logError, makeNewMarkedInstance, removeCurlyBrackets, parseSOURCE} = $;
			const {text, attrs = {}, meta} = token;
			const n = meta.name || "";
			const maybeClear = attrs.clear ? `<div style={{clear:"both"}}></div>` : "";
			if(n === "gh") {
				// General Header
				churn(n, attrs, ["clear"], [], logError);
				return `${maybeClear}<p className="statblockHeader">${text}</p>\n`;
			} else if (n === "mh") {
				// Monster Header
				churn(n, attrs, ["cr", "mr", "clear", "jl", "id"], [], logError);
				const {cr, mr, jl} = attrs;
				let filler = "";
				if(jl) {
					const id = prefix + (attrs.id || makeValidID(text));
					addToJumpList(text, id, jl);
					filler = ` id="${id}" data-hash-target`;
				}
				if(cr || mr) {
					const ender = (cr && mr) ? `CR ${cr}/MR ${mr}` : (cr ? `CR ${cr}` : `MR ${mr}`);
					return `${maybeClear}<p className="statblockHeaderFull"${filler}><span>${text}</span><span>${ender}</span></p>\n`;
				}
				return `${maybeClear}<p className="statblockHeader"${filler}>${text}</p>\n`;
			} else if (n === "sh") {
				// Subheader
				churn(n, attrs, ["clear"], [], logError);
				return `${maybeClear}<p className="statblockSubHeader">${text}</p>\n`;
			} else if (n === "th") {
				// Template Header
				churn(n, attrs, ["clear", "cr", "source", "acquired", "inherited", "simple", "summonable", "maybesummon"], [], logError);
				const {cr, source, acquired, inherited, simple, summonable, maybesummon} = attrs;
				const head = `<div style={{clear:"both"}}></div><p className="statblockHeaderFull">`
					+ `<span>${text}</span><span>CR ${cr}</span></p>\n`;
				const marked2 = makeNewMarkedInstance();
				const sourcing = marked2.parseInline(parseSOURCE(source, true));
				const typing = acquired && inherited ? "Both" : acquired ? "Acquired" : "Inherited";
				const simp = simple ? "Yes" : "No";
				const summons = summonable ? "Yes" : (maybesummon ? "See Text" : "No");
				return `${head}<p>${sourcing}<br/>`
					+`<strong>Acquired/Inherited Template</strong> ${typing}<br/>`
					+`<strong>Simple Template</strong> ${simp}<br/>`
					+`<strong>Usable with Summons</strong> ${summons}</p>\n`;
			} else if (n === "fh") {
				// Faith Header
				churn(n, attrs, ["clear", "sub"], [], logError);
				const {sub} = attrs;
				if(sub) {
					return `${maybeClear}<div className="headerLike"><div>${text}</div><div className="sub">${sub}</div></div>\n`;
				}
				return `${maybeClear}<div className="headerLike">${text}</div>\n`;
			} else if (n === "ph") {
				// Plane Header
				churn(n, attrs, ["clear", "sub", "desc", "cat"], [], logError);
				const {sub, desc, cat} = attrs;
				let main = `<p className="statblockHeader"><span>${text}</span></p>`;
				if(sub) {
					main = `<p className="statblockHeader withSub"><span>${text}</span></p><div className="sub">${sub}</div>`;
				}
				if(desc) {
					main = main + `<div className="indent"><em>${desc}</em></div>`;
				}
				if(cat) {
					main = main + `<div><strong>Category</strong> ${cat}</div>`;
				}
				return maybeClear + main + "\n";
			} else if (n === "mhr") {
				// Main page Horizontal rule
				churn(n, attrs, ["clear"], [], logError);
				flags.divider = true;
				return `${maybeClear}<IonItemDivider className="mainItem divider"></IonItemDivider>`;
			} else if (n === "mainheader") {
				churn(n, attrs, ["clear", "id"], [], logError);
				flags.divider = true;
				flags.label = true;
				return `${maybeClear}<IonItemDivider className="mainItem"${attrs.id ? ` id="${prefix}${attrs.id}"` : ""}><IonLabel>${text}</IonLabel></IonItemDivider>`;
			} else if (n === "main") {
				churn(n, attrs, ["clear", "ind", "rev", "to", "end", "endem", "bottom"], [], logError);
				const {ind, rev, to, end, endem, bottom} = attrs;
				flags.mainlink = true;
				let cn;
				let output = "<MainLink ";
				if(to) {
					output = output + `to="/${to}" `;
				}
				if(ind) {
					cn = "indented";
				} else if(rev) {
					cn = "reversed";
				}
				if(cn) {
					output = output + `className="${cn}" `;
				}
				if(end) {
					output = output + `end="${end}" `;
				}
				if(endem) {
					output = output + `endem="${endem}" `;
				}
				if(bottom) {
					output = output + `bottom="${bottom}" `;
				}
				return `${maybeClear}${output}info="${text}" />`;
			} else if ("h2h3h4h5h6".indexOf(n) >= 0) {
				churn(n, attrs, ["clear","jl","id","extra"], [], logError);
				if(attrs.jl) {
					const id = prefix + (attrs.id || makeValidID(text));
					addToJumpList(text, id, attrs.jl);
					if(attrs.extra) {
						return `${maybeClear}<${n} id="${id}" data-hash-target>${text} ${attrs.extra}</${n}>\n`;
					}
					return `${maybeClear}<${n} id="${id}" data-hash-target>${text}</${n}>\n`;
				}
				return `${maybeClear}<${n}>${text}</${n}>`;
			} else if ("hl2hl3hl4hl5hl6".indexOf(n) >= 0) {
				churn(n, attrs, ["clear","pre","post","extra","jl","id"], [], logError);
				const m = checkForEncodedLink(text, { bare: true });
				const t = "h" + n.slice(-1);
				if(!m) {
					logError(`Bad ::${n} => [${text}]`);
					return `${maybeClear}<${t}>${text}</${t}>\n`;
				}
				flags.link = true;
				const { pre, post, extra } = attrs;
				const [, link, linktext] = m;
				let inner = `<Link to="${link}">${linktext}</Link>`;
				if(pre) {
					inner = pre + inner;
				}
				if(post) {
					inner = inner + post;
				}
				if(extra) {
					inner = `${inner} ${extra}`;
				}
				if(attrs.jl) {
					const id = prefix + (attrs.id || makeValidID(linktext));
					addToJumpList(linktext, id, attrs.jl);
					return `${maybeClear}<${t} id="${id}" data-hash-target>${inner}</${t}>\n`;
				}
				return `${maybeClear}<${t}>${inner}</${t}>`;
			} else if (n === "prereq") {
				churn(n, attrs, [
					"clear","l","c","r",
					"g1","g1info",
					"other","sep"
				], [], logError);
				const marked2 = makeNewMarkedInstance();
				return makePrerequisiteBlock(marked2, flags, maybeClear, attrs, convertEncodedInfo);
			} else if (n === "aff") {
				// Affliction
				churn(n, attrs, [
					"iconP", "iconI", "iconC", "iconD", "iconA",
					"clear","poison","curse","infest","disease",
					"type","save","saveF","saveW","onset",
					"dcF","dcW","dcR","dcYou","dcIt","dcPoss","dcLev","dcHD","dcMod",
					"track", "trackmod",
					"freq","freqR","freqM","freqH","freqD",
					"eff","ineff","seceff",
					"cure","cure1","cure2","cure2c","cure3","cure3c",
					"extra","start","nolink"
				], [ /^(in|sec)?eff((Str|Int|Dex|Con|Wis|Cha)D?|Extra|Or)$/ ], logError);
				const marked2 = makeNewMarkedInstance();
				return makeAfflictionBlock(marked2, flags, convertEncodedInfo, maybeClear, text, attrs, logError);
			} else if (n === "drug") {
				// Drug
				churn(n, attrs, [
					"clear","type",
					"addict","minor","moderate","severe","dc",
					"price","eff1","eff2",
					"dmg","dmgStr","dmgDex","dmgCon","dmgInt","dmgWis","dmgCha",
					"start"
				], [], logError);
				const marked2 = makeNewMarkedInstance();
				const id = prefix + makeValidID(text + "-haunt");
				return makeDrugBlock(marked2, flags, convertEncodedInfo, id, maybeClear, text, attrs, logError);
			} else if (n === "trap") {
				// Trap
				churn(n, attrs, [
					"cr", "magic", "mechanical", "terrain",
					"pdc", "dddc", "trigger",
					"manual", "automatic", "repair", "eff",
					"start", "clear"
				], [], logError);
				const marked2 = makeNewMarkedInstance();
				const id = prefix + makeValidID(text + "-haunt");
				return makeTrapBlock(marked2, flags, convertEncodedInfo, id, maybeClear, text, attrs, logError);
			} else if (n === "haunt") {
				// Haunt
				churn(n, attrs, [
					"notice", "hp", "weak", "trigger", "reset",
					"start", "clear"
				], [], logError);
				const marked2 = makeNewMarkedInstance();
				const id = prefix + makeValidID(text + "-haunt");
				return makeHauntBlock(marked2, flags, convertEncodedInfo, id, maybeClear, text, attrs, logError);
			} else if (n === "spell") {
				// Spell
				churn(n, attrs, [
					"clear", "source",
					"school", "enchantment", "compulsion", "mindAffecting", "abjuration", "force",
					"conjuration", "creation", "acid", "air", "calling", "chaotic", "charm", "cold",
					"curse", "darkness", "death", "disease", "divination", "draconic", "earth",
					"electricity", "emotion", "evil", "evocation", "fear", "figment", "fire",
					"glamer", "good", "haunted", "healing", "illusion", "languageDependent",
					"lawful", "light", "meditative", "necromancy", "pain", "pattern", "phantasm",
					"poison", "polymorph", "ruse", "scrying", "shadowDesc", "shadowSub", "sonic",
					"summoning", "teleportation", "transmutation", "universal", "water",
					"adp", "alc", "ant", "arc", "bld", "brd", "clr", "drd",
					"hnt", "inq", "inv", "mag", "med", "mes", "occ", "orc",
					"pal", "psy", "rgr", "rma", "sha", "skd", "sor", "spr",
					"sum", "usm", "war", "wit", "wiz", "faith",
					"ct", "ctFRA", "ctIm", "ctSw", "ctSt", "ctH", "ctM", "ctR",
					"cV", "cS", "cDF", "cMp", "cF", "cFDF", "cFDFp", "cFp",
					"cM", "cMDF", "cMDFp", "cSpecial", "cText",
					"r", "rTouch", "rPers", "rClose", "rFt", "rLong", "rMed", "rText",
					"target", "area", "areaOrTarget", "effect", "targetOrArea", "targetOrTargets", "targets",
					"dur", "durML", "durH", "durD", "durC", "durCon", "durDL",
					"durHL", "durI", "durM", "durP", "durR", "durRL",
					"save", "saveNo", "fort", "fortHalf", "fortPartial",
					"refl", "reflHalf", "reflPartial", "will", "willDisbelief",
					"willHalf", "willPartial", "svHarmless", "svObject",
					"sr", "srY", "srN", "srHarmless", "srObject",
					"harmless", "object"
				], [], logError);
				const marked2 = makeNewMarkedInstance();
				return makeSpellBlock(marked2, parseSOURCE, convertEncodedInfo, maybeClear, attrs, logError);
			} else if (n === "spelldeitynote") {
				const marked2 = makeNewMarkedInstance();
				return (
					`<aside>${marked2.parse("Some spells are more common among the worshipers of a god. Worshipers of a spell's associated deity always treat the spell as common, and need not research it in order to prepare or learn it. This spell is available to members of other faiths, though some temples or religious organizations may proscribe the use of specific spells. -- [Inner Sea Gods pg. 228](source/inner_sea_gods)")}</aside>`
				);
			} else if (n === "minfo") {
				churn(n, attrs, [
					"clear", "source", "xp", "al", "lg", "ln", "le", "ng", "n", "ne", "cg", "cn", "ce",
					"fine", "diminutive", "tiny", "small", "medium", "large", "huge", "gargantuan", "colossal",
					"aberration", "animal", "construct", "dragon", "fey", "humanoid", "magicalBeast",
						"monstrousHumanoid", "ooze", "outsider", "plant", "undead", "vermin",
					"subs", "subtypes", "init",
					"sen", "senSpell", "dv", "llv", "keenScent", "scent", "thoughtsense", "greensight", "lifesense",
						"xray", "aav", "mistsight", "sid", "blindsight", "blindsense", "tremorsense", "pcp",
					"aura"
				], [], logError);
				const marked2 = makeNewMarkedInstance();
				return makeMonsterInfoBlock(marked2, parseSOURCE, convertEncodedInfo, maybeClear, attrs, text, logError);
			} else if (n === "mdefense") {
				churn(n, attrs, [
					"clear", "ac", "mod",
					"hp", "hpRaw", "fh", "regen",
					"fort", "ref", "will",
					"def", "dr", "immune", "resist", "sr",
					"chanRes", "fortif", "split", "ink", "pBlood", "trapS",
					"unstop", "blockAt", "rockCt", "secSave",
					"ferocity", "amorph", "aav", "incorp", "noB",
					"eva", "impEva", "unc", "impUnc",
					"weak", "vulner"
				], [], logError);
				const marked2 = makeNewMarkedInstance();
				return makeMonsterDefenseBlock(marked2, convertEncodedInfo, maybeClear, attrs, logError);
			} else if (n === "moffense") {
				churn(n, attrs, [
					"clear", "sp", "spP", "br", "brP", "cl", "clP", "sw", "swP",
					"fl", "flP", "clumsy", "poor", "average", "good", "perfect",
					"jet", "spOther", "spExtra",
					"melee",
					"ranged",
					"space", "reach", "reachP",
					"specAtt", "bDrain", "bleed", "brWeap", "burn", "capsize",
					"chEn", "chNEn", "chPEn", "constrict", "distraction",
					"eDrain", "engulf", "entrap", "favEn", "grab", "heat",
					"mMagic", "mPower", "paralysis", "powCh", "pull", "push",
					"rake", "rend", "rockTh", "sneak", "swallow", "trample",
					"web", "whirlwind",
					"attach", "bloodRage", "fSwallow", "ferocity", "gaze",
					"pounce", "smother", "strangle",
					"next"
				], [], logError);
				const marked2 = makeNewMarkedInstance();
				return makeMonsterOffenseBlock(marked2, convertEncodedInfo, maybeClear, attrs, logError);
			} else if (n === "mspell") {
				churn(n, attrs, [
					"clear", "cl", "con",
					"sla", "atWill", "constant", "day", "hour", "week", "month", "year", "other",
					"prep", "ex", "know",
					"psy", "psyMag", "pe", "peP",
					"title", "data", "newLine",
					"next"
				], [ /^l[0-9]$/ ], logError);
				const marked2 = makeNewMarkedInstance();
				return makeMonsterSpellBlock(marked2, convertEncodedInfo, maybeClear, attrs, logError);
			} else if (n === "mfn") {
				churn(n, attrs, ["clear"], [], logError);
				const marked2 = makeNewMarkedInstance();
				return makeMonsterFootnoteBlock(marked2, convertEncodedInfo, text);
			} else if (n === "mstats") {
				churn(n, attrs, [
					"clear", "str", "dex", "con", "int", "wis", "cha",
					"bab", "cmb", "cmd",
					"feats", "skills", "racial", "lang", "sq",
					"combat", "othergear", "gear",
					"faith", "next"
				], [], logError);
				const marked2 = makeNewMarkedInstance();
				return makeMonsterStatisticsBlock(marked2, convertEncodedInfo, maybeClear, attrs, logError);
			} else if (n === "meco") {
				churn(n, attrs, [ "clear", "env", "org", "treasure" ], [], logError);
				const marked2 = makeNewMarkedInstance();
				return makeMonsterEcologyBlock(marked2, convertEncodedInfo, maybeClear, attrs, logError);
			} else if (n === "archetype") {
				// Archetype
				churn(n, attrs, ["clear", "c", "r", "e"], [], logError);
				const {c, r, e} = attrs;
				flags.link = true;
				const link = convertTextToLink(text);
				const marked2 = makeNewMarkedInstance();
				if(!r) { logError("Missing r in " + text) }
				if(!e) { logError("Missing e in "+ text) }
				return (
					`<div className="archetype">`
					+ `<p><Link to="/arc-${c}/${link}">${text}</Link></p>`
					+ `<p><strong>Modifies or Replaces:</strong> ${removeCurlyBrackets(marked2.parseInline(r), true)}</p>`
					+ `<p>${removeCurlyBrackets(marked2.parseInline(convertEncodedInfo(e)), true)}</p>`
					+ `</div>\n`
				);
			} else if (n === "ab") {
				churn(n, attrs, [
					"clear", "jl", "id", "flavor",
					"sub", "head", "icon",
					"l", "imp",
					"standard", "swift", "immediate",
					"fullround", "move", "free",
					"provokes", "special",
					"ability", "passive",
					"order",
					"usage", "useNC",
					"useL", "useM",
					"useL3",
					"useUnit"
				], [
					/^(([sl]|imp)(1?[1-9]|[12]0)|s0)$/,
					/^use(Mod|Inc)[1-9]?$/,
					/^h(Special|Standard|Swift|Ability|Free|Fullround|Imp|Immediate|Passive|Move)$/
				], logError);
				flags.icon = true;
				flags.link = true;
				const marked2 = makeNewMarkedInstance();
				const jlid = prefix + (attrs.id || makeValidID(text));
				if(attrs.jl) {
					addToJumpList(text, jlid, attrs.jl);
				}
				return makeAbilityBlock({
					marked2, prefix, jlid, text,
					convertEncodedInfo, maybeClear,
					attrs, logError
				});
			} else if (n === "spellAb") {
				churn(n, attrs, [
					"stat", "m",
					"learn", "prepare",
					"zeroMsg",
					"type", "caster",
					"alignLimit",
					"spontaneous",
					"occultist", "bard", "skald",
					"ritualDivine", "choice", "druid", "meditate", "shaman", "oracle", "medium",
					"ritualArcane", "witch",
					"limited", "limitedFull", "cureInflict", "summonNature",
					"trade", "tradeLimit"
				], [], logError);
				flags.icon = true;
				flags.link = true;
				const jlid = prefix + "spells";
				addToJumpList("Spells", jlid, "jl");
				return makeSpellAbilityBlock({
					prefix, jlid, logError,
					maybeClear, attrs
				});
			} else if (n === "list") {
				churn(n, attrs, [
					"clear", "all", "link", "and",
					"hl", "sep", "comma"
				], [], logError);
				attrs.link && (flags.link = true);
				return makeListBlock({
					text, maybeClear,
					attrs, logError
				});
			} else if (n === "spelllist") {
				churn(n, attrs, [
					"clear", "all", "all0", "save", "from", "extra"
				], [ /^l[0-9]$/ ], logError);
				flags.icon = true;
				flags.link = true;
				const marked2 = makeNewMarkedInstance();
				return makeSpellListBlock({
					marked2, text, convertEncodedInfo,
					maybeClear, attrs, temp
				});
			} else if (n === "class") {
				churn(n, attrs, [
 					"clear", "al", "any", "noAlignmentTable",
					"lg", "ln", "le", "ng", "n", "ne", "cg", "cn", "ce",
					"hd", "parent", "wealth", "skp",
					"acro", "app", "bluff", "climb", "craft", "diplo",
					"dis", "ddev", "ea", "fly", "ha", "heal", "intm",
					"ka", "kd", "ke", "kg", "kh", "kl", "kna", "kno", "kp", "kr",
					"ling", "per", "perf", "prof", "ride", "sm", "soh",
					"spc", "stl", "sur", "swim", "umd", "skillNote"
				], [], logError);
				const marked2 = makeNewMarkedInstance();
				flags.link = true;
				return makeClassBlock({maybeClear, attrs, marked2, convertEncodedInfo});
			} else if (n === "prof") {
				churn(n, attrs, [
 					"clear",
					"simple", "martial", "weaps", "wExtra",
					"light", "medium", "heavy",
					"shields", "tower", "aExtra",
					"extra"
				], [], logError);
				const marked2 = makeNewMarkedInstance();
				return makeProfBlock({maybeClear, attrs, marked2, flags, convertEncodedInfo})
			} else if (n === "cantrips") {
				churn(n, attrs, ["c", "p", "clear"], [], logError);
				const {c = "cantrips", p} = attrs;
				const type = (c === "knacks") ? "psychic" : ((c === "orisons") ? "divine" : "arcane");
				const text = c.slice(0,1).toUpperCase() + c.slice(1);
				const prepcast = p ? "prepared" : "cast";
				flags.icon = true;
				flags.link = true;
				return makeAbilityBlock({
					maybeClear, prefix, logError, text,
					marked2: { parseInline: (x) => x },
					jlid: prefix + (attrs.id || makeValidID(text)),
					convertEncodedInfo: (x) => x,
					attrs: {
						l: 1,
						icon: "magic",
						ability: `You learn a number of ${c}, or 0-level ${type} spells. These spells are ${prepcast} like any other spell, but they ${p ? "are not expended when cast and may" : "don't consume slots and can"} be used again. ${text} ${prepcast} using other spell slots, such as those due to metamagic feats, ${p ? "are expended" : "consume slots"} normally.`
					}
				});
			} else if (n === "altCapstone") {
				churn(n, attrs, [
					"clear", "capstone",
					"deepMagics", "walkingLibrary", "greatBeast",
					"oldDogNewTricks", "kiSage", "theRightSpot",
					"archFamiliar", "soulChannel"
				], [], logError);
				const marked2 = makeNewMarkedInstance();
				return makeCapstoneBlock({
					marked2, text,
					convertEncodedInfo,
					maybeClear, attrs
				});
			}
			return false;
		}
	};
};

export default getBlockDirectives;
