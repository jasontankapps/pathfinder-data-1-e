const clean = (bit) => bit.replace(/\*/g, "").replace(/%%[-a-z_]+[/]([^%]+)%%/g, "$1");

const makeMonsterDefenseBlock = (marked2, linker, maybeClear, attrs, logError) => {
	const {
		ac, mod,
		hp, fh, regen,
		fort, ref, will,
		chanRes, fortif, split, ink, pBlood, trapS,
		unstop, blockAt, rockCt, secSave,
		ferocity, amorph, aav, incorp, noB,
		oozeT, undeadT, constructT, plantT,
		eva, impEva, unc, impUnc,
		def, dr, immune, resist, sr,
		weak, vulner
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
	const deff = [];
	if(def) {
		//line = `**Defensive Abilities** ${def}`;
		def.split(/~/).forEach(bit => {
			deff.push([clean(bit), bit]);
		});
	}
	if(chanRes) {
		deff.push([`channel resistance ${chanRes}`, `{umr/channel resistance} ${chanRes}`]);
	}
	if(fortif) {
		deff.push([`fortification (${fortif})`, `{umr/fortification} (${fortif})`]);
	}
	if(split) {
		deff.push([`split (${split})`, `{umr/split} (${split})`]);
	}
	if(ink) {
		deff.push([`ink cloud (${ink}-ft. radius})`, `{umr/ink cloud} (${ink}-ft. radius})`]);
	}
	if(pBlood) {
		deff.push([`poisonous blood (${pBlood})`, `{umr/poisonous blood} ({eq-poison/${pBlood}})`]);
	}
	if(trapS) {
		deff.push([`trap sense ${trapS}`, `{ability/trap sense} ${trapS}`]);
	}
	if(unstop) {
		deff.push([`unstoppable`, `{umr/unstoppable}`]);
	}
	if(blockAt) {
		deff.push([`block attacks`, `{umr/block attacks}`]);
	}
	if(rockCt) {
		deff.push([`rock catching`, `{umr/rock catching}`]);
	}
	if(secSave) {
		deff.push([`second save`, `{umr/second save}`]);
	}
	if(ferocity) {
		deff.push([`ferocity`, `{umr/ferocity}`]);
	}
	if(amorph) {
		deff.push([`amorphous`, `{umr/amorphous}`]);
	}
	if(aav) {
		deff.push([`all-around vision`, `{umr/all-around vision}`]);
	}
	if(incorp) {
		deff.push([`incorporeal`, `{umr/incorporeal}`]);
	}
	if(noB) {
		deff.push([`no breath`, `{umr/no breath}`]);
	}
	if(oozeT) {
		deff.push([`ooze traits`, `{umr/ooze traits}`]);
	}
	if(undeadT) {
		deff.push([`undead traits`, `{umr/undead traits}`]);
	}
	if(constructT) {
		deff.push([`construct traits`, `{umr/construct traits}`]);
	}
	if(plantT) {
		deff.push([`plant traits`, `{umr/plant traits}`]);
	}
	if(eva) {
		deff.push([`evasion`, `{ability/evasion}`]);
	}
	if(unc) {
		deff.push([`uncanny dodge`, `{ability/uncanny dodge}`]);
	}
	if(impEva) {
		deff.push([`improved evasion`, `{ability/improved evasion}`]);
	}
	if(impUnc) {
		deff.push([`improved uncanny dodge`, `{ability/improved uncanny dodge}`]);
	}
	if(deff.length > 0) {
		line = `**Defensive Abilities** ${deff.sort((a, b) => a[0].localeCompare(b[0])).map(d => d[1]).join(", ")}`
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
	line && output.push(doParse(line));
	//
	// WEAKNESSES LINE
	//
	const w = [];
	if(vulner) {
		w.push([`vulnerable to ${clean(vulner)}`, `{umr/vulnerable} to ${vulner}`])
	}
	if(weak) {
		weak.split(/~/).forEach(bit => w.push([clean(bit), bit]));
	}
	if(w.length > 0) {
		output.push(
			doParse(`**Weaknesses** ${w.sort((a, b) => a[0].localeCompare(b[0])).map(ww => ww[1]).join(", ")}`)
		);
	}
	return `${maybeClear}<p className="statblockSubHeader">Defense</p>\n<p>${output.join("<br>")}</p>`;
};

export default makeMonsterDefenseBlock;
