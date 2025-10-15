const makeMonsterDefenseBlock = (marked2, linker, maybeClear, attrs, logError) => {
	const {
		ac, mod,
		hp, fh, regen,
		fort, ref, will,
		def, dr, immune, resist, sr,
		weak
	} = attrs;
	const output = [];
	const doParse = (input) => marked2.parseInline(linker(input));
	//
	// AC LINE
	//
	if(ac) {
		const [all, touch, ff] = ac.split("/");
		output.push(`<strong>AC</strong> ${all}, touch ${touch}, flat-footed ${ff}${mod ? ` (${mod})` : ""}`);
	} else {
		logError("Missing AC")
	}
	//
	// HP LINE
	//
	if(hp) {
		let line = `<strong>hp</strong> ${hp}`;
		if(fh) {
			line = line + doParse(`; %%umr/fast healing%% ${fh}`);
		}
		if(regen) {
			line = line + doParse(`; %%umr/regeneration%% ${regen}`);
		}
		output.push(line);
	} else {
		logError("Missing hp")
	}
	//
	// SAVING THROWS LINE
	//
	let line = "";
	if(fort) {
		line = `<strong>Fort</strong> ${fort}`;
	} else {
		logError("Missing fortitude save");
	}
	if(ref) {
		line = line + `, <strong>Reflex</strong> ${ref}`;
	} else {
		logError("Missing reflex save");
	}
	if(will) {
		line = line + `, <strong>Will</strong> ${will}`;
	} else {
		logError("Missing will save");
	}
	output.push(line);
	//
	// DEFENSES LINE
	//
	line = "";
	if(def) {
		line = `**Defensive Abilities** ${def}`;
	}
	if(dr) {
		line = (line ? line + "; " : "") + `**DR** ${dr}`;
	}
	if(immune) {
		line = (line ? line + "; " : "") + `**Immune** ${immune}`;
	}
	if(resist) {
		line = (line ? line + "; " : "") + `**Resist** ${resist}`;
	}
	if(sr) {
		line = (line ? line + "; " : "") + `**SR** ${sr}`;
	}
	output.push(doParse(line));
	//
	// WEAKNESSES LINE
	//
	if(weak) {
		output.push(doParse(`**Weaknesses** ${weak}`));
	}
	return `${maybeClear}<p className="statblockSubHeader">Defense</p>\n<p>${output.join("<br>")}</p>`;
};

export default makeMonsterDefenseBlock;
