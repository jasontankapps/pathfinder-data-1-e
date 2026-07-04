const makeSpellBlock = (marked2, parseSOURCE, convertEncodedInfo, maybeClear, attrs, logError) => {
	const {
		id, source, school,
		abjuration, conjuration, divination, enchantment, evocation,
			illusion, necromancy, transmutation, universal,
		calling, charm, compulsion, creation, figment, glamer, healing,
			pattern, phantasm, polymorph, scrying, shadowSub, summoning, teleportation,
		acid, air, chaotic, cold, curse, darkness, death,
			disease, draconic, earth, electricity, emotion,
			evil, fear, fire, force, good, haunted, languageDependent,
			lawful, light, meditative, mindAffecting, pain,
			poison, ruse, shadowDesc, sonic, water,
		adp, alc, ant, arc, bld, brd, clr, drd, hnt, inq, inv, mag, med, mes, occ,
			orc, pal, psy, rgr, rma, sha, skd, sor, spr, sum, usm, war, wit, wiz, faith,
		ct, ctFRA, ctIm, ctSw, ctSt, ctH, ctM, ctR,
		cV, cS, cDF, cMp, cF, cFDF, cFDFp, cFp, cM, cMDF, cMDFp, cSpecial, cText,
		r, rTouch, rPers, rClose, rFt, rLong, rMed, rText,
		target, area, areaOrTarget, effect, targetOrArea, targetOrTargets, targets,
		dur, durML, durH, durD, durC, durCon, durDL, durHL, durI, durM, durP, durR, durRL,
		save, saveNo,
			fort, fortHalf, fortPartial,
			refl, reflHalf, reflPartial,
			will, willDisbelief, willHalf, willPartial,
			svHarmless, svObject,
		sr, srY, srN, srHarmless, srObject,
		harmless, object
	} = attrs;
	const output = [` id="${id}"`];
	const doParse = (input) => marked2.parseInline(convertEncodedInfo(input));
	if(source) {
		output.push(` source="${source}"`);
	}
	//
	// SCHOOL SECTION
	//
	if(school) {
		output.push(` school={<>${doParse(school)}</>}`);
	} else {
		let c = 0;
		let school = "";
		const subs = [];
		const desc = [];
		if(abjuration) { school = "abjur"; c++; }
		if(conjuration) { school = "conj"; c++; }
		if(divination) { school = "div"; c++; }
		if(enchantment) { school = "ench"; c++; }
		if(evocation) { school = "evo"; c++; }
		if(illusion) { school = "ill"; c++; }
		if(necromancy) { school = "necro"; c++; }
		if(transmutation) { school = "trans"; c++; }
		if(universal) { school = "uni"; c++; }
		output.push(` school="${school}"`);
		if(c !== 1) {
			logError(`Found ${c} schools instead of 1`);
		}

		if(calling) { subs.push("call"); }
		if(charm) { subs.push("charm"); }
		if(compulsion) { subs.push("comp"); }
		if(creation) { subs.push("creat"); }
		if(figment) { subs.push("fig"); }
		if(glamer) { subs.push("glamer"); }
		if(healing) { subs.push("heal"); }
		if(pattern) { subs.push("pat"); }
		if(phantasm) { subs.push("phan"); }
		if(polymorph) { subs.push("poly"); }
		if(scrying) { subs.push("scry"); }
		if(shadowSub) { subs.push("shadow"); }
		if(summoning) { subs.push("sum"); }
		if(teleportation) { subs.push("tele"); }
		subs.length > 0 && output.push(` subschools={${JSON.stringify(subs)}}`)

		if(acid) { desc.push("acid"); }
		if(air) { desc.push("air"); }
		if(chaotic) { desc.push("chaotic"); }
		if(cold) { desc.push("cold"); }
		if(curse) { desc.push("curse"); }
		if(darkness) { desc.push("dark"); }
		if(death) { desc.push("death"); }
		if(disease) { desc.push("dis"); }
		if(draconic) { desc.push("drac"); }
		if(earth) { desc.push("earth"); }
		if(electricity) { desc.push("elec"); }
		if(emotion) { desc.push("emo"); }
		if(evil) { desc.push("evil"); }
		if(fear) { desc.push("fear"); }
		if(fire) { desc.push("fire"); }
		if(force) { desc.push("force"); }
		if(good) { desc.push("good"); }
		if(haunted) { desc.push("haunt"); }
		if(languageDependent) { desc.push("lang"); }
		if(lawful) { desc.push("lawful"); }
		if(light) { desc.push("light"); }
		if(meditative) { desc.push("medi"); }
		if(mindAffecting) { desc.push("mind"); }
		if(pain) { desc.push("pain"); }
		if(poison) { desc.push("poi"); }
		if(ruse) { desc.push("ruse"); }
		if(shadowDesc) { desc.push("shadow"); }
		if(sonic) { desc.push("sonic"); }
		if(water) { desc.push("water"); }
		desc.length > 0 && output.push(` descriptors={${JSON.stringify(desc)}}`)

	}
	//
	// LEVEL SECTION
	//
	const levels = [];
	if(adp !== undefined) { levels.push(` adp={${adp}}`); }
	if(alc !== undefined) { levels.push(` alc={${alc}}`); }
	if(ant !== undefined) { levels.push(` ant={${ant}}`); }
	if(arc !== undefined) { levels.push(` arc={${arc}}`); }
	if(bld !== undefined) { levels.push(` bld={${bld}}`); }
	if(brd !== undefined) { levels.push(` brd={${brd}}`); }
	if(clr !== undefined) { levels.push(` clr={${clr}}`); }
	if(drd !== undefined) { levels.push(` drd={${drd}}`); }
	if(hnt !== undefined) { levels.push(` hnt={${hnt}}`); }
	if(inq !== undefined) { levels.push(` inq={${inq}}`); }
	if(inv !== undefined) { levels.push(` inv={${inv}}`); }
	if(mag !== undefined) { levels.push(` mag={${mag}}`); }
	if(med !== undefined) { levels.push(` med={${med}}`); }
	if(mes !== undefined) { levels.push(` mes={${mes}}`); }
	if(occ !== undefined) { levels.push(` occ={${occ}}`); }
	if(orc !== undefined) { levels.push(` orc={${orc}}`); }
	if(pal !== undefined) { levels.push(` pal={${pal}}`); }
	if(psy !== undefined) { levels.push(` psy={${psy}}`); }
	if(rgr !== undefined) { levels.push(` rgr={${rgr}}`); }
	if(rma !== undefined) { levels.push(` rma={${rma}}`); }
	if(sha !== undefined) { levels.push(` sha={${sha}}`); }
	if(skd !== undefined) { levels.push(` skd={${skd}}`); }
	if(sor !== undefined) { levels.push(` sor={${sor}}`); }
	if(spr !== undefined) { levels.push(` spr={${spr}}`); }
	if(sum !== undefined) { levels.push(` sum={${sum}}`); }
	if(usm !== undefined) { levels.push(` usm={${usm}}`); }
	if(war !== undefined) { levels.push(` war={${war}}`); }
	if(wit !== undefined) { levels.push(` wit={${wit}}`); }
	if(wiz !== undefined) { levels.push(` wiz={${wiz}}`); }
	if(levels.length === 0) {
		logError(`Missing spellcasting output`);
	} else {
		output.push(...levels);
	}
	if(faith) {
		output.push(` faith="${faith}"`);
	}
	//
	// CASTING TIME SECTION
	//
	if(ct) {
		output.push(` ct={<>${doParse(ct)}</>}`);
	} else {
		let time = "";
		let c = 0;
		if(ctFRA) { time = "1 full-round action"; c++; }
		if(ctIm) { time = "1 immediate action"; c++; }
		if(ctSw) { time = "1 swift action"; c++; }
		if(ctSt) { time = "1 standard action"; c++; }
		if(ctH !== undefined) { time = `${ctH} hour${ctH === 1 ? "" : "s"}`; c++; }
		if(ctM !== undefined) { time = `${ctM} minute${ctM === 1 ? "" : "s"}`; c++; }
		if(ctR !== undefined) { time = `${ctR} round${ctR === 1 ? "" : "s"}`; c++; }
		if(c !== 1) {
			logError(`Found ${c} casting time notations instead of 1`);
		}
		output.push(` ct="${time}"`);
	}
	//
	// COMPONENTS SECTION
	//
	if(cSpecial) {
		output.push(` comp={<>${doParse(cSpecial)}</>}`);
	} else {
		const comps = [];
		if(cV) { comps.push("V"); }
		if(cS) { comps.push("S"); }
		if(cM) { comps.push("M"); }
		if(cMp) { comps.push(doParse(`M (${cMp})`)); }
		if(cF) { comps.push("F"); }
		if(cFp) { comps.push(doParse(`F (${cFp})`)); }
		if(cDF) { comps.push("DF"); }
		if(cMDF) { comps.push("M/DF"); }
		if(cFDF) { comps.push("F/DF"); }
		if(cMDFp) { comps.push(doParse(`M/DF (${cMDFp})`)); }
		if(cFDFp) { comps.push(doParse(`F/DF (${cFDFp})`)); }
		if(comps.length === 0) {
			logError(`No components provided`);
		} else if(cText) {
			const pop = comps.pop() || "huh?";
			comps.push(`${pop}; see text`);
		}
		if(comps.length && (
			(cM && cMp)
			|| (cM && cMDF)
			|| (cM && cMDFp)
			|| (cMp && cMDF)
			|| (cMp && cMDFp)
			|| (cMDF && cMDFp) // multiple material components

			|| (cF && cFp)
			|| (cF && cFDFp)
			|| (cF && cFDF)
			|| (cFDF && cFDFp)
			|| (cFp && cFDF)
			|| (cFDFp && cFp) // multiple foci

			|| (cDF && cMDF)
			|| (cDF && cFDFp)
			|| (cDF && cFDF)
			|| (cMDF && cFDF)
			|| (cMDF && cFDFp) // multiple divine foci
		)) {
			logError(`Found multiple components`);
		}
		output.push(` comp={<>${comps.join(", ")}</>}`);
	}
	//
	// RANGE SECTION
	//
	if(r) {
		output.push(` r={<>${doParse(r)}</>}`);
	} else {
		let range = false;
		if(rTouch) { range++; output.push(" rTouch"); }
		if(rPers) { range++; output.push(" rPers"); }
		if(rClose) { range++; output.push(" rClose"); }
		if(rFt !== undefined) { range = true; output.push(` rFt={${rFt}}`); }
		if(rLong) { range++; output.push(" rLong"); }
		if(rMed) { range++; output.push(" rMed"); }
		if(rText) { range++; output.push(" rText"); }
		if(!range) {
			logError("Missing a range parameter");
		}
	}
	//
	// TARGET/AREA/EFFECT SECTION
	//
	target && output.push(` target={<>${doParse(target)}</>}`);
	targets && output.push(` targets={<>${doParse(targets)}</>}`);
	targetOrTargets && output.push(` targetOrTargets={<>${doParse(targetOrTargets)}</>}`);
	area && output.push(` area={<>${doParse(area)}</>}`);
	areaOrTarget && output.push(` areaOrTarget={<>${doParse(areaOrTarget)}</>}`);
	targetOrArea && output.push(` targetOrArea={<>${doParse(targetOrArea)}</>}`);
	effect && output.push(` effect={<>${doParse(effect)}</>}`);
	//
	// DURATION SECTION
	//
	if(dur) {
		output.push(` dur={<>${doParse(dur)}</>}`);
	} else {
		let c = 0;
		let dur = "";
		if(durR) { dur = `${durR} round${durR === 1 ? "" : "s"}`; c++; }
		else if (durM) { dur = `${durM} minute${durM === 1 ? "" : "s"}`; c++; }
		else if (durH) { dur = `${durH} hour${durH === 1 ? "" : "s"}`; c++; }
		else if (durC) { dur = `concentration`; c++; }
		else if (durCon) { dur = doParse(`concentration${durCon}`); c++; }
		else if (durI) { dur = `instantaneous`; c++; }
		else if (durP) { dur = `permanent`; c++; }
		else if (durRL) { dur = `${durRL} round${durRL === 1 ? "" : "s"}/level`; c++; }
		else if (durML) { dur = `${durML} minute${durML === 1 ? "" : "s"}/level`; c++; }
		else if (durHL) { dur = `${durHL} hour${durHL === 1 ? "" : "s"}/level`; c++; }
		else if (durDL) { dur = `${durDL} day${durDL === 1 ? "" : "s"}/level`; c++; }
		if(c !== 1) {
			logError(`Found ${c} duration notations instead of 1`);
		}
		if(durD) {
			dur += " (D)";
		}
		output.push(` dur={<>${dur}</>}`);
	}
	//
	// SAVE/SR SECTION
	//
	let saving = "";
	if(save) {
		saving = doParse(save);
	} else if (saveNo) {
		saving = "none";
	} else if (fort) {
		saving = "Fortitude negates";
	} else if (fortHalf) {
		saving = "Fortitude half";
	} else if (fortPartial) {
		saving = "Fortitude partial";
	} else if (will) {
		saving = "Will negates";
	} else if (willDisbelief) {
		saving = "Will disbelief";
	} else if (willHalf) {
		saving = "Will half";
	} else if (willPartial) {
		saving = "Will partial";
	} else if (refl) {
		saving = "Reflex negates";
	} else if (reflHalf) {
		saving = "Reflex half";
	} else if (reflPartial) {
		saving = "Reflex partial";
	}
	const mods1 = [];
	(svObject || object) && mods1.push("object");
	(svHarmless || harmless) && mods1.push("harmless");
	if(mods1.length > 0) {
		saving += ` (${mods1.join(", ")})`
	}
	let resist = "";
	if(sr) {
		resist = doParse(sr);
	} else if (srY) {
		resist = "yes"
	} else if (srN) {
		resist = "no"
	}
	const mods2 = [];
	(srObject || object) && mods2.push("object");
	(srHarmless || harmless) && mods2.push("harmless");
	if(mods2.length > 0) {
		resist += ` (${mods2.join(", ")})`
	}
	saving && output.push(` save={<>${saving}</>}`);
	resist && output.push(` resist={<>${resist}</>}`);
	if(!(saving && resist) && (saving || resist)) {
		logError(`Missing ${resist ? "saving throw" : "spell resistance"} info`)
	}
	let spellinfo = `${maybeClear}<SpellInfo${output.join("")} />`;
	let final = "";
	let m;
	while(m = spellinfo.match(/(^.*?)=\{<>([^<>"]+)<[/]>\}(.*$)/)) {
		const [,pre,text,post] = m;
		final = final + `${pre}="${text}"`;
		spellinfo = post;
	}
	return final + spellinfo + "\n";
};

export default makeSpellBlock;
