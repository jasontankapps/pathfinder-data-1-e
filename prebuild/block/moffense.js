import isALink from "../get-all-links.js";
import convertToHtmlArrayKludge from "../convertToHtmlArrayKludge.js";
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

export const makeMonsterOffenseBlock = ({marked2, convertEncodedInfo, maybeClear, attrs, id, logError}) => {
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
	const doConvert = (input, stringify = true) => convertToHtmlArrayKludge(marked2.parseInline(convertEncodedInfo(input)), stringify);
	//
	// SPEED LINE
	//
	if(sp) {
		output.push(`sp={${sp}}`);
		// only spP and flP have embedded html
		spP && output.push(`spP={${doConvert(spP)}}`);
	}
	if(br) {
		output.push(`br={${br}}`);
		brP && output.push(`brP={"${brP}"}`);
	}
	if(cl) {
		output.push(`cl={${cl}}`);
		clP && output.push(`clP={"${clP}"}`);
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
		p && output.push(`flP={${doConvert(p)}}`);
	}
	if(jet) {
		output.push(`br={${br}}`);
		brP && output.push(`brP={"${brP}"}`);
	}
	if(sw) {
		output.push(`sw={${sw}}`);
		swP && output.push(`swP={"${swP}"}`);
	}
	spOther && output.push(`spOther="${spOther}"`);
	spExtra && output.push(`spExtra={${doConvert(spExtra)}}`);
	//
	// MELEE, RANGED LINES
	//
	melee && output.push(`melee={${doConvert(melee)}}`);
	ranged && output.push(`ranged={${doConvert(ranged)}}`);
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
	brWeap && output.push(`brWeap={${doConvert(brWeap)}}`);
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
	return flag ? `${maybeClear}<Offense id="${id}" ${output.join(" ")} />\n` : "";
};

export const makeMonsterSpellBlock = (marked2, convertEncodedInfo, maybeClear, attrs, logError) => {
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
	const doParse = (input) => marked2.parseInline(convertEncodedInfo(input));
	const CL = `${cl}${cl === 1 ? "st" : (cl === 2 ? "nd" : (cl === 3 ? "rd" : "th"))}`;
	const parseSpells = (input) => {
		const all = input.split(/~/);
		const found = [];
		let pre = "", post = "";
		while(all.length) {
			const item = all.shift();
			let test = "";
			let m = item.match(/^!(.+)$/);
			if(m) {
				found.push(m[1]);
			} else if(m = item.match(/^\^(.+)$/)) {
				pre = m[1] + " ";
			} else if(m = item.match(/^\$(.+)$/)) {
				post = m[1];
			} else if(m = item.match(/^(.+?)\|(.+)$/)) {
				test = linkify(m[1]);
				found.push(`[${m[1]}](spell/${test}) (${m[2]})`);
			} else {
				test = linkify(item);
				found.push(`[${item}](spell/${test})`);
			}
			if(test && !isALink("spell", test)) {
				logError(`Bad spell [${test}]`);
			}
		}
		return pre + found.map(
			f => doParse(f)
				.replace(/((?:#(?:[A-Z0-9]))+)<[/]Link>/g, "</Link>$1")
				.replace(/#([A-Z])/g, "<sup>$1</sup>")
				.replace(/#1\b/g, "<sup>1st</sup>")
				.replace(/#2\b/g, "<sup>2nd</sup>")
				.replace(/#3\b/g, "<sup>3rd</sup>")
				.replace(/#([4-9])/g, "<sup>$1th</sup>")
		).join(", ").replace(/<[/]sup><sup>/g, " ")
			.replace(/<[/]em>, <em>/g, ", ")
			.replace(/<[/]em>,/g, ",</em>")
		+ post;
	};
	//
	// SPELL-LIKE ABILITIES
	//
	if(sla) {
		output.push(`<strong>${sla !== "sla" ? sla + " " : ""}Spell-Like Abilities</strong> (CL ${CL}${con ? `; concentration ${con}` : ""})`);
		if(constant) {
			output.push("<em>Constant</em>-" + parseSpells(constant));
		}
		if(atWill) {
			output.push("<em>At will</em>-" + parseSpells(atWill));
		}
		if(hour) {
			output.push("<em>1/hour</em>-" + parseSpells(hour));
		}
		if(day) {
			const days = day.split(/~~/);
			days.forEach(d => {
				const [, times, spells] = d.match(/^([^~]+)~(.+)$/);
				output.push(`<em>${times}/day</em>-` + parseSpells(spells));
			});
		}
		if(week) {
			output.push("<em>1/week</em>-" + parseSpells(week));
		}
		if(month) {
			output.push("<em>1/month</em>-" + parseSpells(month));
		}
		if(year) {
			output.push("<em>1/year</em>-" + parseSpells(year));
		}
		if(other) {
			const [, duration, spells] = other.match(/^([^~]+)~(.+)$/);
			output.push(`<em>${duration}</em>-` + parseSpells(spells));
		}
	}
	//
	// PREPARED SPELLS/EXTRACTS
	//
	if(prep || ex) {
		prep && output.push(`<strong>${prep !== "prep" ? prep + " " : ""}Spells Prepared</strong> (CL ${CL}${con ? `; concentration ${con}` : ""})`);
		ex && output.push(`<strong>${ex !== "ex" ? ex + " " : ""}Extracts Prepared</strong> (CL ${CL}${con ? `; concentration ${con}` : ""})`);
		if(l9) {
			output.push("<em>9th</em>-" + parseSpells(l9));
		}
		if(l8) {
			output.push("<em>8th</em>-" + parseSpells(l8));
		}
		if(l7) {
			output.push("<em>7th</em>-" + parseSpells(l7));
		}
		if(l6) {
			output.push("<em>6th</em>-" + parseSpells(l6));
		}
		if(l5) {
			output.push("<em>5th</em>-" + parseSpells(l5));
		}
		if(l4) {
			output.push("<em>4th</em>-" + parseSpells(l4));
		}
		if(l3) {
			output.push("<em>3rd</em>-" + parseSpells(l3));
		}
		if(l2) {
			output.push("<em>2nd</em>-" + parseSpells(l2));
		}
		if(l1) {
			output.push("<em>1st</em>-" + parseSpells(l1));
		}
		if(l0) {
			output.push("<em>0 (at will)</em>-" + parseSpells(l0));
		}
	}
	//
	// KNOWN SPELLS
	//
	if(know) {
		output.push(`<strong>${know !== "know" ? know + " " : ""}Spells Known</strong> (CL ${CL}${con ? `; concentration ${con}` : ""})`);
		const convert = (line, num) => {
			const [, times, spells] = line.match(/^([^~]+)~(.+)$/);
			output.push(`<em>${num} (${times})</em>-` + parseSpells(spells));
		};
		l9 && convert(l9, "9th");
		l8 && convert(l8, "8th");
		l7 && convert(l7, "7th");
		l6 && convert(l6, "6th");
		l5 && convert(l5, "5th");
		l4 && convert(l4, "4th");
		l3 && convert(l3, "3rd");
		l2 && convert(l2, "2nd");
		l1 && convert(l1, "1st");
		l0 && convert(l0, "0");
	}
	//
	// PSYCHIC MAGIC
	//
	if(psy) {
		output.push(`<strong>Psychic Magic</strong> (CL ${CL}${con ? `; concentration ${con}` : ""})`);
		output.push(`<em>${pe} PE${peP ? ` (${peP})` : ""}</em>-` + parseSpells(psyMag));
	}
	//
	// OTHER LINES (domain, patron, opp. schools, etc.)
	//
	if(title) {
		if(newLine) {
			output.push(
				`<strong>${title}</strong>`,
				...data.split(/~/).map(d => doParse(d))
			);
		} else {
			output.push(doParse(`**${title}** ${data}`));
		}
	}
	return `${maybeClear}<p className="no-top-margin${next ? ' no-bottom-margin' : ""}">${output.join("<br>")}</p>`;
};

export const makeMonsterFootnoteBlock = (marked2, convertEncodedInfo, text) => {
	// all="1~Footnote one.|2~Footnote two..."
	const all = text.split(/\|/);
	const output = [];
	all.forEach(line => {
		const [id, text = ""] = line.split(/~/);
		output.push(`<sup><strong>${id}</strong></sup> ` + marked2.parseInline(convertEncodedInfo(text)));
	});
	return `<blockquote className="no-top-margin">${output.join("<br>")}</blockquote>`;
};
