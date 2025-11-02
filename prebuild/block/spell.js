const makeSpellBlock = (marked2, parseSOURCE, linker, maybeClear, attrs, logError) => {
	const {
		source, school,
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
	const output = [];
	const doParse = (input) => marked2.parseInline(linker(input));
	if(source) {
		output.push(marked2.parseInline(parseSOURCE(source, true)));
	}
	//
	// SCHOOL SECTION
	//
	if(school) {
		output.push(doParse(`**School** ${school}`));
	} else {
		let c = 0;
		let school = "";
		const subs = [];
		const desc = [];
		if(abjuration) { school = "abjuration"; c++; }
		if(conjuration) { school = "conjuration"; c++; }
		if(divination) { school = "divination"; c++; }
		if(enchantment) { school = "enchantment"; c++; }
		if(evocation) { school = "evocation"; c++; }
		if(illusion) { school = "illusion"; c++; }
		if(necromancy) { school = "necromancy"; c++; }
		if(transmutation) { school = "transmutation"; c++; }
		if(universal) { school = "universal"; c++; }
		if(c !== 1) {
			logError(`Found ${c} schools instead of 1`);
		}

		if(calling) { subs.push("calling"); }
		if(charm) { subs.push("charm"); }
		if(compulsion) { subs.push("compulsion"); }
		if(creation) { subs.push("creation"); }
		if(figment) { subs.push("figment"); }
		if(glamer) { subs.push("glamer"); }
		if(healing) { subs.push("healing"); }
		if(pattern) { subs.push("pattern"); }
		if(phantasm) { subs.push("phantasm"); }
		if(polymorph) { subs.push("polymorph"); }
		if(scrying) { subs.push("scrying"); }
		if(shadowSub) { subs.push("shadow>_subschool"); }
		if(summoning) { subs.push("summoning"); }
		if(teleportation) { subs.push("teleportation"); }

		if(acid) { desc.push("acid"); }
		if(air) { desc.push("air"); }
		if(chaotic) { desc.push("chaotic"); }
		if(cold) { desc.push("cold"); }
		if(curse) { desc.push("curse"); }
		if(darkness) { desc.push("darkness"); }
		if(death) { desc.push("death"); }
		if(disease) { desc.push("disease"); }
		if(draconic) { desc.push("draconic"); }
		if(earth) { desc.push("earth"); }
		if(electricity) { desc.push("electricity"); }
		if(emotion) { desc.push("emotion"); }
		if(evil) { desc.push("evil"); }
		if(fear) { desc.push("fear"); }
		if(fire) { desc.push("fire"); }
		if(force) { desc.push("force"); }
		if(good) { desc.push("good"); }
		if(haunted) { desc.push("haunted"); }
		if(languageDependent) { desc.push("language-dependent"); }
		if(lawful) { desc.push("lawful"); }
		if(light) { desc.push("light"); }
		if(meditative) { desc.push("meditative"); }
		if(mindAffecting) { desc.push("mind-affecting"); }
		if(pain) { desc.push("pain"); }
		if(poison) { desc.push("poison"); }
		if(ruse) { desc.push("ruse"); }
		if(shadowDesc) { desc.push("shadow>_descriptor"); }
		if(sonic) { desc.push("sonic"); }
		if(water) { desc.push("water"); }

		const all = [`**School** {spelldef/${school}}`];
		if(subs.length) {
			all.push(`({spelldef/${subs.join(`}, {spelldef/`)}})`);
		}
		if(desc.length) {
			all.push(`[{spelldef/${desc.join(`}, {spelldef/`)}}]`);
		}
		output.push(doParse(all.join(" ")));
	}
	//
	// LEVEL SECTION
	//
	const levels = [];
	if(adp !== undefined) { levels.push("adept " + adp); }
	if(alc !== undefined) { levels.push("alchemist " + alc); }
	if(ant !== undefined) { levels.push("antipaladin " + ant); }
	if(arc !== undefined) { levels.push("arcanist " + arc); }
	if(bld !== undefined) { levels.push("bloodrager " + bld); }
	if(brd !== undefined) { levels.push("bard " + brd); }
	if(clr !== undefined) { levels.push("cleric " + clr); }
	if(drd !== undefined) { levels.push("druid " + drd); }
	if(hnt !== undefined) { levels.push("hunter " + hnt); }
	if(inq !== undefined) { levels.push("inquisitor " + inq); }
	if(inv !== undefined) { levels.push("investigator " + inv); }
	if(mag !== undefined) { levels.push("magus " + mag); }
	if(med !== undefined) { levels.push("medium " + med); }
	if(mes !== undefined) { levels.push("mesmerist " + mes); }
	if(occ !== undefined) { levels.push("occultist " + occ); }
	if(orc !== undefined) { levels.push("oracle " + orc); }
	if(pal !== undefined) { levels.push("paladin " + pal); }
	if(psy !== undefined) { levels.push("psychic " + psy); }
	if(rgr !== undefined) { levels.push("ranger " + rgr); }
	if(rma !== undefined) { levels.push("red mantis assassin " + rma); }
	if(sha !== undefined) { levels.push("shaman " + sha); }
	if(skd !== undefined) { levels.push("skald " + skd); }
	if(sor !== undefined) { levels.push("sorcerer " + sor); }
	if(spr !== undefined) { levels.push("spiritualist " + spr); }
	if(sum !== undefined) { levels.push("summoner " + sum); }
	if(usm !== undefined) { levels.push("unchained summoner " + usm); }
	if(war !== undefined) { levels.push("warpriest " + war); }
	if(wit !== undefined) { levels.push("witch " + wit); }
	if(wiz !== undefined) { levels.push("wizard " + wiz); }
	if(levels.length === 0) {
		logError(`Missing spellcasting levels`);
	}
	if(faith) {
		const pop = levels.pop() || "none";
		levels.push(`${pop} (${faith}; see below)`);
	}
	const pop = output.pop() || "No school?";
	output.push(`${pop}; <strong>Level</strong> ${levels.join(", ")}`);
	//
	// CASTING TIME SECTION
	//
	if(ct) {
		output.push(doParse(`**Casting Time** ${ct}`));
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
		output.push(`<strong>Casting Time</strong> ${time}`);
	}
	//
	// COMPONENTS SECTION
	//
	if(cSpecial) {
		output.push(doParse(`**Components** ${cSpecial}`));
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
			|| (cFDFp && cFp) // multiple foci

			|| (cDF && cMDF)
			|| (cDF && cFDFp) // multiple divine foci
		)) {
			logError(`Found multiple components`);
		}
		output.push(`<strong>Components</strong> ${comps.join(", ")}`);
	}
	//
	// RANGE SECTION
	//
	if(r) {
		output.push(doParse(`**Range** ${r}`));
	} else {
		let range = "";
		if(rTouch) { range = "touch"; }
		if(rPers) { range = "personal"; }
		if(rClose) { range = "close (25 ft. + 5 ft./2 levels)"; }
		if(rFt !== undefined) { range = `${rFt} ft.`; }
		if(rLong) { range = "long (400 ft. + 40 ft./level)"; }
		if(rMed) { range = "medium (100 ft. + 10 ft./level)"; }
		if(rText) { range = "see text"; }
		if(!range) {
			logError("Missing a range parameter");
		} else {
			output.push(`<strong>Range</strong> ${range}`);
		}
	}
	//
	// TARGET/AREA/EFFECT SECTION
	//
	if(target) {
		output.push(doParse(`**Target** ${target}`));
	} else if(targets) {
		output.push(doParse(`**Targets** ${targets}`));
	} else if(targetOrTargets) {
		output.push(doParse(`**Target or Targets** ${targetOrTargets}`));
	}
	if(area) {
		output.push(doParse(`**Area** ${area}`));
	} else if(areaOrTarget) {
		output.push(doParse(`**Area or Target** ${areaOrTarget}`));
	} else if(targetOrArea) {
		output.push(doParse(`**Target or Area** ${targetOrArea}`));
	}
	if(effect) {
		output.push(doParse(`**Effect** ${effect}`));
	}
	//
	// DURATION SECTION
	//
	if(dur) {
		output.push(doParse(`**Duration** ${dur}`));
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
			dur = dur + " (D)";
		}
		output.push(`<strong>Duration</strong> ${dur}`);
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
		saving = saving + ` (${mods1.join(", ")})`
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
		resist = resist + ` (${mods2.join(", ")})`
	}
	if(saving && resist) {
		output.push(`<strong>Saving Throw</strong> ${saving}; <strong>Spell Resistance</strong> ${resist}`);
	} else if (saving || resist) {
		logError("Missing either saving throw or spell resistance info")
	}
	return `${maybeClear}<p>${output.join("<br>")}</p>`;
};

export default makeSpellBlock;
