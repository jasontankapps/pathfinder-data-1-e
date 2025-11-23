import isALink from "../get-all-links.js";
import { convertTextToLink } from "../tests/checkForEncodedLink.js";

const linkify = (spell) => convertTextToLink(spell.replace(/#[A-Z0-9]/g, ""));

export const makeMonsterOffenseBlock = (marked2, convertEncodedInfo, maybeClear, attrs, logError) => {
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
	//
	// SPEED LINE
	//
	const speeds = [];
	if(sp) {
		speeds.push(`${sp} ft.${spP ? ` (${spP})` : ""}`);
	}
	if(br) {
		speeds.push(`burrow ${br} ft.${brP ? ` (${brP})` : ""}`);
	}
	if(cl) {
		speeds.push(`climb ${cl} ft.${clP ? ` (${clP})` : ""}`);
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
			logError("Missing fly speed maneuverability");
		}
		speeds.push(`fly ${fl} ft.${p ? ` (${p})` : ""}`);
	}
	if(jet) {
		speeds.push(`‹umr/jet› ${jet} ft.`);
	}
	if(sw) {
		speeds.push(`swim ${sw} ft.${swP ? ` (${swP})` : ""}`);
	}
	if(spOther) {
		speeds.push(spOther);
	}
	const finalspeed = "**Speed** " + speeds.join(", ") + (spExtra ? ("; " + spExtra) : "");
	output.push(doParse(finalspeed));
	//
	// MELEE, RANGED LINES
	//
	if(melee) {
		output.push(doParse(`**Melee** ${melee}`));
	}
	if(ranged) {
		output.push(doParse(`**Ranged** ${ranged}`));
	}
	//
	// SPACE/REACH LINE
	//
	if(space && reach) {
		output.push(doParse(`**Space** ${space}, **Reach** ${reach}` + (reachP ? ` (${reachP})` : "")));
	}
	//
	// SPECIAL ATTACKS LINE
	//
	const spAtt = [];
	if(specAtt) {
		spAtt.push(...specAtt.split("~").map(x => {
			const clean = x.replace(/%%[-a-z_]+[/]([^%]+?)%%/g, "$1").replace(/[^-a-zA-Z 0-9]/g, "");
			return [clean, x];
		}));
	}
	if(attach) {
		spAtt.push(["attach", "‹umr/attach›"]);
	}
	if(bleed && bleed === "bleed") {
		spAtt.push(["bleed", `‹umr/bleed›`]);
	} else if (bleed) {
		spAtt.push(["bleed", `‹umr/bleed› (${bleed})`]);
	}
	if(bDrain) {
		spAtt.push(["blood drain", `‹umr/blood drain› (${bDrain})`]);
	}
	if(bloodRage) {
		spAtt.push(["blood rage", "‹umr/blood rage›"]);
	}
	if(brWeap) {
		spAtt.push(["breath weapon", `‹umr/breath weapon› (${brWeap})`]);
	}
	if(burn) {
		spAtt.push(["burn", `‹umr/burn› (${burn})`]);
	}
	if(capsize && capsize === "capsize") {
		spAtt.push(["capsize", `‹umr/capsize›`]);
	} else if (capsize) {
		spAtt.push(["capsize", `‹umr/capsize› (${capsize})`]);
	}
	if(chEn) {
		spAtt.push(["channel energy", `‹ability/channel energy› (${chEn})`]);
	}
	if(chNEn) {
		spAtt.push(["channel negative energy", `‹ability/channel negative energy› (${chNEn})`]);
	}
	if(chPEn) {
		spAtt.push(["channel positive energy", `‹ability/channel positive energy› (${chPEn})`]);
	}
	if(constrict && constrict === "constrict") {
		spAtt.push(["constrict", `‹umr/constrict›`]);
	} else if (constrict) {
		spAtt.push(["constrict", `‹umr/constrict› (${constrict})`]);
	}
	if(distraction && distraction === "distraction") {
		spAtt.push(["distraction", `‹umr/distraction›`]);
	} else if (distraction) {
		spAtt.push(["distraction", `‹umr/distraction› (${distraction})`]);
	}
	if(eDrain) {
		spAtt.push(["energy drain", `‹umr/energy drain› (${eDrain})`]);
	}
	if(engulf) {
		spAtt.push(["engulf", `‹umr/engulf› (${engulf})`]);
	}
	if(entrap) {
		spAtt.push(["entrap", `‹umr/entrap› (${entrap})`]);
	}
	if(fSwallow) {
		spAtt.push(["fast swallow", "‹umr/fast swallow›"]);
	}
	if(favEn) {
		spAtt.push(["favored enemy", `‹ability/favored enemy› (${favEn})`]);
	}
	if(ferocity) {
		spAtt.push(["ferocity", "‹umr/ferocity›"]);
	}
	if(gaze) {
		spAtt.push(["gaze", "‹umr/gaze›"]);
	}
	if(grab && grab === "grab") {
		spAtt.push(["grab", `‹umr/grab›`]);
	} else if (grab) {
		spAtt.push(["grab", `‹umr/grab› (${grab})`]);
	}
	if(heat && heat === "heat") {
		spAtt.push(["heat", `‹umr/heat›`]);
	} else if (heat) {
		spAtt.push(["heat", `‹umr/heat› (${heat})`]);
	}
	if(mMagic) {
		spAtt.push(["mythic magic", `‹umr/mythic magic› (${mMagic})`]);
	}
	if(mPower) {
		spAtt.push(["mythic power", `‹umr/mythic power› (${mPower})`]);
	}
	if(paralysis) {
		spAtt.push(["paralysis", `‹umr/paralysis› (${paralysis})`]);
	}
	if(powCh) {
		spAtt.push(["powerful charge", `‹umr/powerful charge› (${powCh})`]);
	}
	if(pounce) {
		spAtt.push(["pounce", "‹umr/pounce›"]);
	}
	if(pull) {
		spAtt.push(["pull", `‹umr/pull› (${pull})`]);
	}
	if(push && push === "push") {
		spAtt.push(["push", `‹umr/push›`]);
	} else if (push) {
		spAtt.push(["push", `‹umr/push› (${push})`]);
	}
	if(rake) {
		spAtt.push(["rake", `‹umr/rake› (${rake})`]);
	}
	if(rend) {
		spAtt.push(["rend", `‹umr/rend› (${rend})`]);
	}
	if(rockTh) {
		spAtt.push(["rock throwing", `‹umr/rock throwing› (${rockTh})`]);
	}
	if(smother) {
		spAtt.push(["smother", "‹umr/smother›"]);
	}
	if(sneak) {
		spAtt.push(["sneak attack", `‹ability/sneak attack› (${sneak})`]);
	}
	if(strangle) {
		spAtt.push(["strangle", "‹umr/strangle›"]);
	}
	if(swallow && swallow === "swallow") {
		spAtt.push(["swallow whole", `‹umr/swallow whole›`]);
	} else if (swallow) {
		spAtt.push(["swallow whole", `‹umr/swallow whole› (${swallow})`]);
	}
	if(trample) {
		spAtt.push(["trample", `‹umr/trample› (${trample})`]);
	}
	if(web && web === "web") {
		spAtt.push(["web", `‹umr/web›`]);
	} else if (web) {
		spAtt.push(["web", `‹umr/web› (${web})`]);
	}
	if(whirlwind) {
		spAtt.push(["whirlwind", `‹umr/whirlwind› (${whirlwind})`]);
	}
	if(spAtt.length > 0) {
		spAtt.sort((a,b) => a[0].localeCompare(b[0]));
		output.push(doParse(`**Special Attacks** ${spAtt.map(sa => sa[1]).join(", ")}`));
	}
	return `${maybeClear}<p className="statblockSubHeader">Offense</p>\n<p${next ? ' className="no-bottom-margin"' : ""}>${output.join("<br>")}</p>`;
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
	const all = text.split(/\|/);
	const output = [];
	all.forEach(line => {
		const [id, text = ""] = line.split(/~/);
		output.push(`<sup><strong>${id}</strong></sup> ` + marked2.parseInline(convertEncodedInfo(text)));
	});
	return `<blockquote className="no-top-margin">${output.join("<br>")}</blockquote>`;
};
