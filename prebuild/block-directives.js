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

const churn = (n, attrs, list, logError) => {
	const found = [];
	const listing = new Set(list);
	Object.keys(attrs).forEach(key => {
		if(!listing.has(key)) {
			found.push([key, attrs[key]]);
		}
	});
	if(found.length) {
		logError("\n" + found.map(([key, value]) => `--> ::${n}{${key}=${JSON.stringify(value)}}`).join("\n"));
	}
};
const linker = (input) => {
	let m;
	let test = input;
	let output = "";
	while(m = checkForEncodedLink(test, {percent: true})) {
		const [pre, fulllink, text, post] = m;
		output = output + `${pre}[${text}](${fulllink})`;
		test = post;
	}
	return (output + test).replace(/&(times|quot|mdash|#[0-9]+)&/g, "&$1;");
};

const getBlockDirectives = (globalVariable, marker = "::") => {
	const $ = globalVariable;
	const linkify = (input) => input.toLowerCase().replace(/ +/g, "-").replace(/[^-a-z0-9]/g, "");
	return {
		level: "block",
		marker,
		renderer: (token) => {
			const {prefix, flags, addToJumpList, logError, makeNewMarkedInstance, removeCurlyBrackets, parseSOURCE} = $;
			const {text, attrs = {}, meta} = token;
			const n = meta.name || "";
			const maybeClear = attrs.clear ? `<div style={{clear:"both"}}></div>` : "";
			if(n === "gh") {
				// General Header
				churn(n, attrs, ["clear"], logError);
				return `${maybeClear}<p className="statblockHeader">${text}</p>\n`;
			} else if (n === "mh") {
				// Monster Header
				churn(n, attrs, ["cr", "mr", "clear", "jl", "id"], logError);
				const {cr, mr, jl} = attrs;
				let filler = "";
				if(jl) {
					const id = prefix + (attrs.id || linkify(text));
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
				churn(n, attrs, ["clear"], logError);
				return `${maybeClear}<p className="statblockSubHeader">${text}</p>\n`;
			} else if (n === "th") {
				// Template Header
				churn(n, attrs, ["clear", "cr", "source", "acquired", "inherited", "simple", "summonable", "maybesummon"], logError);
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
				churn(n, attrs, ["clear", "sub"], logError);
				const {sub} = attrs;
				if(sub) {
					return `${maybeClear}<div className="headerLike"><div>${text}</div><div className="sub">${sub}</div></div>\n`;
				}
				return `${maybeClear}<div className="headerLike">${text}</div>\n`;
			} else if (n === "ph") {
				// Plane Header
				churn(n, attrs, ["clear", "sub", "desc", "cat"], logError);
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
				churn(n, attrs, ["clear"], logError);
				flags.divider = true;
				return `${maybeClear}<IonItemDivider className="mainItem divider"></IonItemDivider>`;
			} else if (n === "mainheader") {
				churn(n, attrs, ["clear", "id"], logError);
				flags.divider = true;
				flags.label = true;
				return `${maybeClear}<IonItemDivider className="mainItem"${attrs.id ? ` id="${prefix}${attrs.id}"` : ""}><IonLabel>${text}</IonLabel></IonItemDivider>`;
			} else if (n === "main") {
				churn(n, attrs, ["clear", "ind", "rev", "to", "end", "endem", "bottom"], logError);
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
				churn(n, attrs, ["clear","jl","id","extra"], logError);
				if(attrs.jl) {
					const id = prefix + (attrs.id || linkify(text));
					addToJumpList(text, id, attrs.jl);
					if(attrs.extra) {
						return `${maybeClear}<${n} id="${id}" data-hash-target>${text} ${attrs.extra}</${n}>\n`;
					}
					return `${maybeClear}<${n} id="${id}" data-hash-target>${text}</${n}>\n`;
				}
				return `${maybeClear}<${n}>${text}</${n}>`;
			} else if ("hl2hl3hl4hl5hl6".indexOf(n) >= 0) {
				churn(n, attrs, ["clear","pre","post","extra","jl","id"], logError);
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
					const id = prefix + (attrs.id || linkify(linktext));
					addToJumpList(linktext, id, attrs.jl);
					return `${maybeClear}<${t} id="${id}" data-hash-target>${inner}</${t}>\n`;
				}
				return `${maybeClear}<${t}>${inner}</${t}>`;
			} else if (n === "prereq") {
				churn(n, attrs, [
					"clear","l","c","r",
					"g1","g1info",
					"other","sep"
				], logError);
				const marked2 = makeNewMarkedInstance();
				return makePrerequisiteBlock(marked2, flags, maybeClear, attrs, linker);
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
					"effStr", "effStrD", "effDex", "effDexD", "effCon", "effConD",
					"effInt", "effIntD", "effWis", "effWisD", "effCha", "effChaD",
					"effExtra", "effOr",
					"ineffStr", "ineffStrD", "ineffDex", "ineffDexD", "ineffCon", "ineffConD",
					"ineffInt", "ineffIntD", "ineffWis", "ineffWisD", "ineffCha", "ineffChaD",
					"ineffExtra", "ineffOr",
					"seceffStr", "seceffStrD", "seceffDex", "seceffDexD", "seceffCon", "seceffConD",
					"seceffInt", "seceffIntD", "seceffWis", "seceffWisD", "seceffCha", "seceffChaD",
					"seceffExtra", "seceffOr",
					"cure","cure1","cure2","cure2c","cure3","cure3c",
					"extra","start","nolink"
				], logError);
				const marked2 = makeNewMarkedInstance();
				return makeAfflictionBlock(marked2, flags, linker, maybeClear, text, attrs, logError);
			} else if (n === "drug") {
				// Drug
				churn(n, attrs, [
					"clear","type",
					"addict","minor","moderate","severe","dc",
					"price","eff1","eff2",
					"dmg","dmgStr","dmgDex","dmgCon","dmgInt","dmgWis","dmgCha",
					"start"
				], logError);
				const marked2 = makeNewMarkedInstance();
				const id = prefix + linkify(text + "-haunt");
				return makeDrugBlock(marked2, flags, linker, id, maybeClear, text, attrs, logError);
			} else if (n === "trap") {
				// Trap
				churn(n, attrs, [
					"cr", "magic", "mechanical", "terrain",
					"pdc", "dddc", "trigger",
					"manual", "automatic", "repair", "eff",
					"start", "clear"
				], logError);
				const marked2 = makeNewMarkedInstance();
				const id = prefix + linkify(text + "-haunt");
				return makeTrapBlock(marked2, flags, linker, id, maybeClear, text, attrs, logError);
			} else if (n === "haunt") {
				// Haunt
				churn(n, attrs, [
					"notice", "hp", "weak", "trigger", "reset",
					"start", "clear"
				], logError);
				const marked2 = makeNewMarkedInstance();
				const id = prefix + linkify(text + "-haunt");
				return makeHauntBlock(marked2, flags, linker, id, maybeClear, text, attrs, logError);
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
				], logError);
				const marked2 = makeNewMarkedInstance();
				return makeSpellBlock(marked2, parseSOURCE, linker, maybeClear, attrs, logError);
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
				], logError);
				const marked2 = makeNewMarkedInstance();
				return makeMonsterInfoBlock(marked2, parseSOURCE, linker, maybeClear, attrs, text, logError);
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
				], logError);
				const marked2 = makeNewMarkedInstance();
				return makeMonsterDefenseBlock(marked2, linker, maybeClear, attrs, logError);
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
				], logError);
				const marked2 = makeNewMarkedInstance();
				return makeMonsterOffenseBlock(marked2, linker, maybeClear, attrs, logError);
			} else if (n === "mspell") {
				churn(n, attrs, [
					"clear", "cl", "con",
					"sla", "atWill", "constant", "day", "hour", "week", "month", "year", "other",
					"l0", "l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8", "l9",
					"prep", "ex", "know",
					"psy", "psyMag", "pe", "peP",
					"title", "data", "newLine",
					"next"
				], logError);
				const marked2 = makeNewMarkedInstance();
				return makeMonsterSpellBlock(marked2, linker, maybeClear, attrs, logError);
			} else if (n === "mfn") {
				churn(n, attrs, ["clear"], logError);
				const marked2 = makeNewMarkedInstance();
				return makeMonsterFootnoteBlock(marked2, linker, text);
			} else if (n === "mstats") {
				churn(n, attrs, [
					"clear", "str", "dex", "con", "int", "wis", "cha",
					"bab", "cmb", "cmd",
					"feats", "skills", "racial", "lang", "sq",
					"combat", "othergear", "gear",
					"faith", "next"
				], logError);
				const marked2 = makeNewMarkedInstance();
				return makeMonsterStatisticsBlock(marked2, linker, maybeClear, attrs, logError);
			} else if (n === "meco") {
				churn(n, attrs, [ "clear", "env", "org", "treasure" ], logError);
				const marked2 = makeNewMarkedInstance();
				return makeMonsterEcologyBlock(marked2, linker, maybeClear, attrs, logError);
			} else if (n === "archetype") {
				// Archetype
				churn(n, attrs, ["clear", "c", "r", "e"], logError);
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
					+ `<p>${removeCurlyBrackets(marked2.parseInline(linker(e)), true)}</p>`
					+ `</div>\n`
				);
			}
			return false;
		}
	};
};

export default getBlockDirectives;
