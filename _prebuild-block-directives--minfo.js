const makeMonsterInfoBlock = (marked2, parseSOURCE, linker, maybeClear, attrs, text, logError) => {
	const {
		source, xp, al, lg, ln, le, ng, n, ne, cg, cn, ce,
		fine, diminutive, tiny, small, medium, large, huge, gargantuan, colossal,
		aberration, animal, construct, dragon, fey, humanoid, magicalBeast,
			monstrousHumanoid, ooze, outsider, plant, undead, vermin,
		subs, subtypes, init,
		sen, senSpell, dv, llv, keenScent, scent, thoughtsense, greensight, lifesense,
			xray, aav, mistsight, sid, blindsight, blindsense, tremorsense, pcp,
		aura
	} = attrs;
	const output = [];
	const doParse = (input) => marked2.parseInline(linker(input));
	if(source) {
		output.push(marked2.parseInline(parseSOURCE(source, true)));
	}
	//
	// XP LINE
	//
	if(xp !== undefined) {
		output.push(`<strong>XP</strong> ${xp}`);
	} else {
		logError("Missing XP")
	}
	//
	// RACE/CLASS LINE
	//
	if(text) {
		output.push(doParse(text));
	}
	//
	// ALIGNMENT/SIZE/TYPE LINE
	//
	let line = "";
	if(al) { line = al + " "; }
	else if(lg) { line = "LG "; }
	else if(ln) { line = "LN "; }
	else if(le) { line = "LE "; }
	else if(ng) { line = "NG "; }
	else if(n) { line = "N "; }
	else if(ne) { line = "NE "; }
	else if(cg) { line = "CG "; }
	else if(cn) { line = "CN "; }
	else if(ce) { line = "CE "; }
	else {
		logError("Missing alignment");
	}
	if(fine) { line = line + "Fine "; }
	else if(diminutive) { line = line + "Diminutive "; }
	else if(tiny) { line = line + "Tiny "; }
	else if(small) { line = line + "Small "; }
	else if(medium) { line = line + "Medium "; }
	else if(large) { line = line + "Large "; }
	else if(huge) { line = line + "Huge "; }
	else if(gargantuan) { line = line + "Gargantuan "; }
	else if(colossal) { line = line + "Colossal "; }
	else {
		logError("Missing size");
	}
	if(aberration) { line = line + "{type/aberration}"; }
	else if(animal) { line = line + "{type/animal}"; }
	else if(construct) { line = line + "{type/construct}"; }
	else if(dragon) { line = line + "{type/dragon}"; }
	else if(fey) { line = line + "{type/fey}"; }
	else if(humanoid) { line = line + "{type/humanoid}"; }
	else if(magicalBeast) { line = line + "{type/magical beast}"; }
	else if(monstrousHumanoid) { line = line + "{type/monstrous humanoid}"; }
	else if(ooze) { line = line + "{type/ooze}"; }
	else if(outsider) { line = line + "{type/outsider}"; }
	else if(plant) { line = line + "{type/plant}"; }
	else if(undead) { line = line + "{type/undead}"; }
	else if(vermin) { line = line + "{type/vermin}"; }
	else {
		logError("Missing type");
	}
	if(subtypes) {
		line = line + " (" + subtypes + ")";
	} else if (subs) {
		const s = subs.split(/,/);
		line = line
			+ " ("
			+ s.map(
				sub => {
					let m;
					if(sub.match(/^(automaton|boggard|charau-ka|dhampir|gnoll|herald|kuru|lashunta|skulk|strix|syrinx|tengu|triaxian|udaeus|varies)$/)) {
						// No subtype entry exists
						return sub;
					} else if (m = sub.match(/^augmented:(.+)$/)) {
						return `{subtype/augmented} {type/${m[1]}}`;
					} else {
						return `{subtype/${sub}}`;
					}
				}
			).join(", ")
			+ ")";
	}
	output.push(doParse(line));
	//
	// INITIATIVE/SENSES LINE
	//
	line = "";
	if(init !== undefined) {
		line = `<strong>Init</strong> ${init}`;
	} else {
		logError("No initiative");
	}
	const senses = sen ? sen.split(/,/).map(x => [x, x]) : [];
	if(senSpell) { senses.push(...senSpell.split(/,/).map(x => [x, `*${x}*`])) }
	if(dv) { senses.push(["darkvision", `darkvision ${dv} ft.`]); }
	if(llv) { senses.push(["low-light vision", "low-light vision"]); }
	if(keenScent) {
		if(keenScent === true) { senses.push(["keen scent", `{umr/keen scent}`]);}
		else { senses.push(["keen scent", `{umr/keen scent} ${keenScent} ft.`]); }
	}
	if(scent) { senses.push(["scent", `{umr/scent}`]); }
	if(thoughtsense) { senses.push(["thoughtsense", `{umr/thoughtsense} ${thoughtsense} ft.`]); }
	if(greensight) {
		if(greensight === true) { senses.push(["greensight", `{umr/greensight}`]);}
		else { senses.push(["greensight", `{umr/greensight} ${greensight} ft.`]); }
	}
	if(lifesense) {
		if(lifesense === true) { senses.push(["lifesense", `{umr/lifesense}`]);}
		else { senses.push(["lifesense", `{umr/lifesense} ${lifesense} ft.`]); }
	}
	if(blindsight) { senses.push(["blindsight", `{umr/blindsight} ${blindsight} ft.`]); }
	if(blindsense) { senses.push(["blindsense", `{umr/blindsense} ${blindsense} ft.`]); }
	if(tremorsense) { senses.push(["tremorsense", `{umr/tremorsense} ${tremorsense} ft.`]); }
	if(mistsight) { senses.push(["mistsight", `{umr/mistsight}`]); }
	if(xray) { senses.push(["x-ray vision", "{umr/x-ray vision}"]); }
	if(aav) { senses.push(["all-around vision", `{umr/all-around vision}`]); }
	if(sid) { senses.push(["see in darkness", `{umr/see in darkness}`]); }
	if(senses.length) {
		line =
			line
			+ "; **Senses** "
			+ senses
				.sort((a, b) => a[0].localeCompare(b[0]))
				.map(x => x[1])
				.join(", ")
				.replace(/\*, \*/g, ", ")
				.replace(/\*,/g, ",*")
	}
	if(pcp !== undefined) {
		line = line + `; Perception ${pcp}`;
	}
	line && output.push(doParse(line));
	//
	// AURA LINE
	//
	if(aura) {
		output.push(doParse(`**Aura** ${aura}`));
	}
	return `${maybeClear}<p>${output.join("<br>")}</p>`;
};

export default makeMonsterInfoBlock;
