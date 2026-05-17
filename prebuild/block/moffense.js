import isALink from "../get-all-links.js";
import noteTags from "../noteTags.js";
import ordinal from "../ordinal.js";
import { convertTextToLink } from "../tests/checkForEncodedLink.js";

const linkify = (spell) => convertTextToLink(spell.replace(/#[A-Z0-9]/g, ""));

const parseChEn = (input, x) => {
	const output = {};
	let m;
	input.split(/, /).forEach(bit => {
		if(m = bit.match(/([0-9]+)[/]day/)) {
			output.perDay = Math.round(Number(m[1]));
		} else if(m = bit.match(/([0-9]+)d6/)) {
			output.d6 = Math.round(Number(m[1]));
		} else if(m = bit.match(/DC ([0-9]+)/)) {
			output.dc = Math.round(Number(m[1]));
		} else if (bit === "command undead only") {
			output.d6 = "command";
		} else {
			output.misc = bit
		}
	});
	if(x !== undefined) {
		output.pos = x;
	}
	return output;
};

export const makeMonsterOffenseBlock = ({marked2, flags, convertEncodedInfo, maybeClear, attrs, id, logError}) => {
	const {
		sp, spP, br, brP, cl, clP, sw, swP,
		fl, flP, clumsy, poor, average, good, perfect,
		jet, spOther, spExtra,
		melee,
		ranged,
		space, reach, reachP,
		specAtt, bDrain, bleed, brWeap, burn, capsize,
		chEn, chNEn, chPEn, constrict, distraction,
		eDrain, engulf, entrap, favEn, grab, heat,
		mMagic, mPower, paralysis, powCh, pull, push,
		rake, rend, rockTh, sneak, swallow, trample,
		web, whirlwind,
		attach, bloodRage, fSwallow, ferocity, gaze,
		pounce, smother, strangle,
		next
	} = attrs;
	const output = [];
	const doParse = (input) => marked2.parseInline(convertEncodedInfo(input));
	let flag = true;
	const log = (...lines) => {
		flag = false;
		logError(...lines);
	};
	const doConvert = (input, stringify = true) => noteTags(flags, marked2.parseInline(convertEncodedInfo(input)), stringify);
	//
	// SPEED LINE
	//
	if(sp) {
		output.push(`sp={${sp}}`);
		// only spP and flP have embedded html
		spP && output.push(`spP={${doConvert(spP)}}`.replace(/\{"([^"]+)"\}/g, '"$1"'));
	}
	if(br) {
		output.push(`br={${br}}`);
		brP && output.push(`brP="${brP}"`);
	}
	if(cl) {
		output.push(`cl={${cl}}`);
		clP && output.push(`clP="${clP}"`);
	}
	if(fl) {
		let p = "";
		if(flP) {
			p = flP;
		} else if (clumsy) {
			p = "clumsy";
		} else if (poor) {
			p = "poor";
		} else if (average) {
			p = "average";
		} else if (good) {
			p = "good";
		} else if (perfect) {
			p = "perfect";
		} else {
			log("Missing fly speed maneuverability");
		}
		output.push(`fl={${fl}}`);
		// only spP and flP have embedded html
		p && output.push(`flP={${doConvert(p)}}`.replace(/\{"([^"]+)"\}/g, '"$1"'));
	}
	if(jet) {
		output.push(`br={${br}}`);
		brP && output.push(`brP="${brP}"`);
	}
	if(sw) {
		output.push(`sw={${sw}}`);
		swP && output.push(`swP="${swP}"`);
	}
	spOther && output.push(`spOther="${spOther}"`);
	spExtra && output.push(`spExtra={${doConvert(spExtra)}}`.replace(/\{"([^"]+)"\}/g, '"$1"'));
	//
	// MELEE, RANGED LINES
	//
	melee && output.push(`melee={${doConvert(melee)}}`.replace(/\{"([^"]+)"\}/g, '"$1"'));
	ranged && output.push(`ranged={${doConvert(ranged)}}`.replace(/\{"([^"]+)"\}/g, '"$1"'));
	//
	// SPACE/REACH LINE
	//
	if(space !== undefined && reach !== undefined) {
		output.push(`space={"${space}"} reach={"${reach}"}`);
		reachP && output.push(`reachP={"${reachP}"}`);
	} else if (space !== undefined || reach !== undefined) {
		log("Space or Reach property provided without its counterpart.");
	}
	//
	// SPECIAL ATTACKS LINE
	//
	if(specAtt) {
		const spAtt = [];
		spAtt.push(...specAtt.split("~").map(x => {
			const clean = x.replace(/‹[-a-z_]+[/]([^›]+?)›/g, "$1").replace(/[^-a-zA-Z 0-9]/g, "");
			return [clean, doConvert(x, false)];
		}));
		output.push(`specAtt={${JSON.stringify(spAtt)}}`);
	}
	attach && output.push("attach");
	if(bleed && bleed === "bleed") {
		output.push("bleed");
	} else if (bleed !== undefined) {
		output.push(`bleed="${bleed}"`);
	}
	bDrain && output.push(`bDrain="${bDrain}"`);
	bloodRage && output.push("bloodRage");
	brWeap && output.push(`brWeap={${doConvert(brWeap)}}`.replace(/\{"([^"]+)"\}/g, '"$1"'));
	burn && output.push(`burn="${burn}"`);
	if(capsize && capsize === "capsize") {
		output.push("capsize");
	} else if (capsize) {
		output.push(`capsize={${capsize}}`);
	}
	chEn && output.push(`chEn={${JSON.stringify(parseChEn(chEn))}}`);
	chNEn && output.push(`chEn={${JSON.stringify(parseChEn(chNEn, false))}}`);
	chPEn && output.push(`chEn={${JSON.stringify(parseChEn(chPEn), true)}}`);
	if(constrict && constrict === "constrict") {
		output.push("constrict");
	} else if (constrict) {
		output.push(`constrict="${constrict}"`);
	}
	if(distraction && distraction === "distraction") {
		output.push("distraction");
	} else if (distraction) {
		if(typeof distraction === "number" || distraction.match(/^[0-9]+$/)) {
			output.push(`distraction={${distraction}}`);
		} else {
			output.push(`distraction="${distraction}"`);
		}
	}
	eDrain && output.push(`eDrain="${eDrain}"`);
	engulf && output.push(`engulf="${engulf}"`);
	entrap && output.push(`entrap="${entrap}"`);
	fSwallow && output.push("fSwallow");
	favEn && output.push(`favEn="${favEn}"`);
	ferocity && output.push("ferocity");
	gaze && output.push("gaze");
	if(grab && grab === "grab") {
		output.push("grab");
	} else if (grab) {
		output.push(`grab="${grab}"`);
	}
	if(heat && heat === "heat") {
		output.push("heat");
	} else if (heat) {
		output.push(`heat="${heat}"`);
	}
	mMagic && output.push(`mMagic="${mMagic}"`);
	mPower && output.push(`mPower="${mPower}"`);
	paralysis && output.push(`paralysis="${paralysis}"`);
	powCh && output.push(`powCh="${powCh}"`);
	pounce && output.push("pounce");
	pull && output.push(`pull="${pull}"`);
	if(push && push === "push") {
		output.push("push");
	} else if (push) {
		output.push(`push="${push}"`);
	}
	rake && output.push(`rake="${rake}"`);
	rend && output.push(`rend="${rend}"`);
	rockTh && output.push(`rockTh="${rockTh}"`);
	smother && output.push("smother");
	sneak && output.push(`sneak="${sneak}"`);
	strangle && output.push("strangle");
	if(swallow && swallow === "swallow") {
		output.push("swallow");
	} else if (swallow) {
		output.push(`swallow="${swallow}"`);
	}
	trample && output.push(`trample="${trample}"`);
	if(web && web === "web") {
		output.push("web");
	} else if (web) {
		output.push(`web="${web}"`);
	}
	whirlwind && output.push(`whirlwind="${whirlwind}"`);
	next && output.push("hasNeighbor");
	return flag ? `${maybeClear}<Offense id="${id}" ${output.join(" ")} />\n` : "<Header sub>Offense</Header><p><em>Error.</em></p>\n";
};

const checkIfDupe = (input, $collection) => {
	const test = input.toLowerCase();
	if($collection[test]) {
		return `*${input}*`;
	}
	$collection[test] = true;
	return false;
};

export const makeMonsterSpellBlock = ({marked2, convertEncodedInfo, maybeClear, attrs, logError, flags, id}) => {
	const {
		cl, con,
		sla, atWill, constant, day, hour, week, month, year, other,
		l0, l1, l2, l3, l4, l5, l6, l7, l8, l9,
		prep, ex, know,
		psy, psyMag, pe, peP,
		title, data, newLine,
		next
	} = attrs;
	const output = [];
	let flag = true;
	const log = (...lines) => {
		flag = false;
		logError(...lines);
	};
	const doConvert = (input, stringify = true) => noteTags(flags, marked2.parseInline(convertEncodedInfo(input)), stringify);
	const casterlevel = data ? 1 : Number(cl);
	if(casterlevel !== casterlevel || casterlevel < 1) {
		log(`Invalid caster level [${cl}]`);
		return "";
	}
	const CL = Math.floor(casterlevel);
	const $spells = flags.$spells || {};
	const $feats = flags.$feats || {};
	const parseSpells = (input) => {
		const all = input.split(/~/);
		const found = [];
		let pre = undefined, post = undefined;
		while(all.length) {
			const shifted = all.shift();
			let test = "";
			let notes = "";
			let m = shifted.match(/^(.*)((?:#(?:[A-Z0-9]))+)(.*)$/);
			const item = (() => {
				if(m) {
					const [, pre, found, post] = m;
					let test = found;
					let q;
					while(q = test.match(/^#(.)(.*)$/)) {
						notes = notes + `<sup>${Number(q[1]) ? ordinal(q[1]) : q[1]}</sup>`;
						test = q[2];
					}
					return pre + post;
				}
				return shifted;
			})();
			if(m = item.match(/^!(.+)(?:\|(.+))?$/)) {
				// !html text
				found.push(m[2] ? `${m[1]}${notes} (${m[2]})` : m[1] + notes);
			} else if(m = item.match(/^&S (.+)$/)) {
				// &S summon info
				const prefix = checkIfDupe("summon", $feats) || "[summon](umr/summon)";
				found.push(`${prefix}${notes} (${m[1]})`);
			} else if(m = item.match(/^&([A-Z&]+)(?: (.+)(?:\|(.+)))$/)) {
				// &Q, &maximized, etc
				const [, f, sp, parens] = m;
				let prefix = "";
				if(f === "Q&EM") {
					prefix = (checkIfDupe("quickened", $feats) || "[quickened](feat/quicken_spell)")
						+ " "
						+ (checkIfDupe("empowered", $feats) || "[empowered](feat/empower_spell)");
				} else {
					const feat = f === "Q" ? "quickened" : (
						f === "EM" ? "empowered" : (
							f === "EX" ? "extended" : f
						)
					);
					prefix = checkIfDupe(feat, $feats) || `[${feat}](feat/${linkify(feat)})`;
				}
				const link = linkify(sp);
				const spell = isALink(link) ? (
					checkIfDupe(sp, $spells) || `[${sp}](spell/${link})`
				) : (
					`*${sp}*`
				);
				found.push(`${prefix} ${spell}${notes}` + (parens ? ` (${parens})` : ""));
			} else if(m = item.match(/^\^(.+)$/)) {
				pre = m[1] + " ";
			} else if(m = item.match(/^\$(.+)$/)) {
				post = m[1];
			} else if((m = item.match(/^(.+?)\|(.+)$/)) && isALink("spell", m[1])) {
				test = linkify(m[1]);
				if(isALink("spell", test)) {
					const text = checkIfDupe(m[1], $spells) || `[${m[1]}](spell/${test})`;
					found.push(`${text}${notes} (${m[2]})`);
				} else {
					found.push(`*${m[1]}*${notes} (${m[2]})`);
				}
			} else {
				test = linkify(item);
				if(isALink("spell", test)) {
					found.push((checkIfDupe(item, $spells) || `[${item}](spell/${test})`) + notes);
				} else {
					found.push(`*${item}*${notes}`);
				}
			}
		}
		return (pre || "")
			+ found.join(", ")
				.replace(/<[/]sup><sup>/g, " ")
				.replace(/<[/]([^<>]+)>, <\1>/g, ", ")
				.replace(/<[/]([^<>]+)>,/g, ",</$1>")
			+ (post || "");
	};
	//
	// SPELL-LIKE ABILITIES
	//
	if(sla) {
		const obj = [`"cl":${CL}`];
		const content = [];
		con && obj.push(`"con":"${con}"`);
		if(sla !== "sla") {
			obj.push(`"sla":"${sla}"`);
		}
		if(constant) {
			content.push(`{"constant":true,"content":${doConvert(parseSpells(constant))}}`);
		}
		if(atWill) {
			content.push(`{"will":true,"content":${doConvert(parseSpells(atWill))}}`);
		}
		if(hour) {
			content.push(`{"per":"hour","content":${doConvert(parseSpells(hour))}}`);
		}
		if(day) {
			const days = day.split(/~~/);
			days.forEach(d => {
				const [, times, spells] = d.match(/^([^~]+)~(.+)$/);
				content.push(`{"day":${
					Math.round(Number(times) || 0)
				},"content":${
					doConvert(parseSpells(spells))
				}}`);
			});
		}
		if(week) {
			content.push(`{"per":"week","content":${doConvert(parseSpells(week))}}`);
		}
		if(month) {
			content.push(`{"per":"month","content":${doConvert(parseSpells(month))}}`);
		}
		if(year) {
			content.push(`{"per":"year","content":${doConvert(parseSpells(year))}}`);
		}
		if(other) {
			const [, duration, spells] = other.match(/^([^~]+)~(.+)$/);
			content.push(`{"other":"${duration}","content":${doConvert(parseSpells(spells))}}`);
		}
		obj.push(`"content":[${content.join(",")}]`);
		output.push(`sla={{${obj.join(",")}}}`);
	}
	//
	// PREPARED SPELLS/EXTRACTS
	//
	if(prep || ex) {
		const obj = [`"cl":${CL}`];
		con && obj.push(`"con":"${con}"`);
		ex ? (ex === "ex" || obj.push(`"ex":"${ex}"`)) : (prep === "prep" || obj.push(`"prep":"${prep}"`));
		if(l9) {
			obj.push(`"l9":${doConvert(parseSpells(l9))}`);
		}
		if(l8) {
			obj.push(`"l8":${doConvert(parseSpells(l8))}`);
		}
		if(l7) {
			obj.push(`"l7":${doConvert(parseSpells(l7))}`);
		}
		if(l6) {
			obj.push(`"l6":${doConvert(parseSpells(l6))}`);
		}
		if(l5) {
			obj.push(`"l5":${doConvert(parseSpells(l5))}`);
		}
		if(l4) {
			obj.push(`"l4":${doConvert(parseSpells(l4))}`);
		}
		if(l3) {
			obj.push(`"l3":${doConvert(parseSpells(l3))}`);
		}
		if(l2) {
			obj.push(`"l2":${doConvert(parseSpells(l2))}`);
		}
		if(l1) {
			obj.push(`"l1":${doConvert(parseSpells(l1))}`);
		}
		if(l0) {
			obj.push(`"l0":${doConvert(parseSpells(l0))}`);
		}
		output.push((ex ? "ex" : "prep") + `={{${obj.join(",")}}}`);
	}
	//
	// KNOWN SPELLS
	//
	if(know) {
		const obj = [`"cl":${CL}`];
		con && obj.push(`"con":"${con}"`);
		know !== "know" && obj.push(`"known":"${know}"`);
		const convert = (line, num) => {
			const [, times, spells] = line.match(/^([^~]+)~(.+)$/);
			const t = times === "at will" ? 0 : Number(times);
			if(t !== t || t < 0) {
				log(`Invalid number of times in ${num}: [${times}]`);
			}
			obj.push(`"${num}":[${Math.floor(t)},${doConvert(parseSpells(spells))}]`);
		};
		l9 && convert(l9, "l9");
		l8 && convert(l8, "l8");
		l7 && convert(l7, "l7");
		l6 && convert(l6, "l6");
		l5 && convert(l5, "l5");
		l4 && convert(l4, "l4");
		l3 && convert(l3, "l3");
		l2 && convert(l2, "l2");
		l1 && convert(l1, "l1");
		l0 && convert(l0, "l0");
		if(!flag) {
			return "";
		}
		output.push(`known={{${obj.join(",")}}}`);
	}
	//
	// PSYCHIC MAGIC
	//
	if(psy) {
		const x = Number(pe);
		if(x !== x || x < 0) {
			log(`Invalid PE [${pe}]`);
			return "";
		}
		const obj = [
			`"pe":${Math.floor(x)}`,
			`"cl":${CL}`,
			`"content":${doConvert(parseSpells(psyMag))}`
		];
		con && obj.push(`"con":"${con}"`);
		peP && obj.push(`"peP":${doConvert(peP)}`);
		output.push(`psy={{${obj.join(",")}}}`);
	}
	//
	// OTHER LINES (domain, patron, opp. schools, etc.)
	//
	if(title) {
		const info = [];
		if(newLine) {
			info.push(
				doConvert(`**${title}**`),
				...data.split(/~/).map(bit => doConvert(bit))
			);
		} else {
			info.push(doConvert(`**${title}** ${data}`));
		}
		output.push(`other={["${title}",[${info.join(",")}]]}`);
	}
	flags.$feats = $feats;
	flags.$spells = $spells;
	let count = flags.$spellblocks || 0;
	count++;
	flags.$spellblocks = count;
	next && output.push("hasNeighbor");
	return `${maybeClear}<SpellBlock id="${id}-monster-spellblock-${count}" ${output.join(" ")} />\n`;
};

export const makeMonsterFootnoteBlock = ({marked2, convertEncodedInfo, text}) => {
	// all="1~Footnote one.|2~Footnote two..."
	const all = text.split(/\|/);
	const output = [];
	all.forEach(line => {
		const [id, text = ""] = line.split(/~/);
		output.push(`<sup><strong>${id}</strong></sup> ` + marked2.parseInline(convertEncodedInfo(text)));
	});
	return `<blockquote className="no-top-margin">${output.join("<br>")}</blockquote>\n`;
};
