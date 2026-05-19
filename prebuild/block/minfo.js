import noteTags from "../noteTags.js";

const makeMonsterInfoBlock = ({marked2, flags, parseSOURCE, convertEncodedInfo, maybeClear, attrs, id, text, logError}) => {
	const {
		source, xp, al, lg, ln, le, ng, n, ne, cg, cn, ce,
		fine, diminutive, tiny, small, medium, large, huge, gargantuan, colossal,
		aberration, animal, construct, dragon, fey, humanoid, magicalBeast,
			monstrousHumanoid, ooze, outsider, plant, undead, vermin,
		subs, othersubs, augment, subtypes, init,
		sen, senSpell, dv, llv, keenScent, scent, thoughtsense, greensight, lifesense,
			xray, aav, mistsight, sid, blindsight, blindsightParens, blindsense,
			tremorsense, tremorParens, pcp,
		aura
	} = attrs;
	const output = [];
	const doConvert = (input, stringify = true) => noteTags(flags, marked2.parseInline(convertEncodedInfo(input)), stringify);
	let flag = true;
	const log = (...lines) => {
		flag = false;
		logError(...lines);
	};
	if(source) {
		output.push(`source={${JSON.stringify(source.split(";").map(bit => {
			const [s, p] = bit.split(/[/]/);
			return p !== undefined ? [s, Math.round(Number(p))] : [s];
		}))}}`);
	}
	//
	// XP LINE
	//
	if(xp !== undefined) {
		output.push(`xp="${xp}"`);
	} else {
		log("Missing XP");
	}
	//
	// RACE/CLASS LINE
	//
	if(text) {
		output.push(`text={${doConvert(text)}}`);
	}
	//
	// ALIGNMENT/SIZE/TYPE LINE
	//
	if(al) { output.push(`al={"${al}"}`); }
	else if(lg) { output.push("lg"); }
	else if(ln) { output.push("ln"); }
	else if(le) { output.push("le"); }
	else if(ng) { output.push("ng"); }
	else if(n) { output.push("n"); }
	else if(ne) { output.push("ne"); }
	else if(cg) { output.push("cg"); }
	else if(cn) { output.push("cn"); }
	else if(ce) { output.push("ce"); }
	else {
		log("Missing alignment");
	}
	if(fine) { output.push("fine"); }
	else if(diminutive) { output.push("diminutive"); }
	else if(tiny) { output.push("tiny"); }
	else if(small) { output.push("small"); }
	else if(medium) { output.push("medium"); }
	else if(large) { output.push("large"); }
	else if(huge) { output.push("huge"); }
	else if(gargantuan) { output.push("gargantuan"); }
	else if(colossal) { output.push("colossal"); }
	else {
		log("Missing size");
	}
	if(aberration) { output.push("aberration"); }
	else if(animal) { output.push("animal"); }
	else if(construct) { output.push("construct"); }
	else if(dragon) { output.push("dragon"); }
	else if(fey) { output.push("fey"); }
	else if(humanoid) { output.push("humanoid"); }
	else if(magicalBeast) { output.push("magicalBeast"); }
	else if(monstrousHumanoid) { output.push("monstrousHumanoid"); }
	else if(ooze) { output.push("ooze"); }
	else if(outsider) { output.push("outsider"); }
	else if(plant) { output.push("plant"); }
	else if(undead) { output.push("undead"); }
	else if(vermin) { output.push("vermin"); }
	else {
		log("Missing type");
	}
	if(subtypes) {
		output.push(`subtypes={${doConvert(subtypes)}}`);
	} else {
		const found = [];
		if(augment) {
			output.push(`augment="${augment}"`);
		}
		if (subs) {
			const s = subs.split(/~/);
			output.push(`subs={${JSON.stringify(s)}}`)
		}
		if(othersubs) {
			const s = othersubs.split(/~/);
			output.push(`othersubs={${JSON.stringify(s)}}`)
		}
	}
	//
	// INITIATIVE/SENSES LINE
	//
	if(init !== undefined) {
		if(typeof init === "number") {
			output.push(`init={${init}}`);
		} else {
			const m = init.match(/^(?:\+|(-))([0-9]+)$/);
			if(m) {
				const [, s, n] = m;
				output.push(`init={${(s || "") + n}}`);
			} else {
				output.push(`init={${noteTags(flags, init, true)}}`.replace(/\{"([^"]+)"\}/g, '"$1"'));
			}
		}
	} else {
		log("No initiative");
	}
	if(sen) {
		output.push(`sen={${JSON.stringify(sen.split(/~/).map(e => doConvert(e, false)))}}`);
	}
	if(senSpell) { output.push(`senSpell={${JSON.stringify(senSpell.split(/~/))}}`) }
	if(dv) { output.push(`dv={${dv}}`); }
	if(llv) { output.push("llv"); }
	if(keenScent) {
		output.push(keenScent === "keenScent" ? "keenScent" : `keenScent={${keenScent}}`);
	}
	if(scent) { output.push("scent"); }
	if(thoughtsense) { output.push(
		thoughtsense !== "thoughtsense"
			? `thoughtsense={${thoughtsense}}`
			: "thoughtsense"
	); }
	if(greensight) {
		output.push(greensight === "greensight" ? "greensight" : `greensight={${greensight}}`);
	}
	if(lifesense) {
		output.push(lifesense === "lifesense" ? "lifesense" : `lifesense={${lifesense}}`);
	}
	if(blindsight) { output.push(`blindsight={${blindsight}}`); }
	if(blindsightParens) { output.push(`blindsightParens={${doConvert(blindsightParens)}}`); }
	if(blindsense) { output.push(`blindsense={${blindsense}}`); }
	if(tremorsense) { output.push(tremorsense === "tremorsense" ? `tremorsense` : `tremorsense={${tremorsense}}`); }
	if(tremorParens) { output.push(`tremorParens={${doConvert(tremorParens)}}`); }
	if(mistsight) { output.push("mistsight"); }
	if(xray) { output.push("xray"); }
	if(aav) { output.push("aav"); }
	if(sid) { output.push("sid"); }
	if(pcp !== undefined) {
		if(typeof pcp === "number") {
			output.push(`pcp={${pcp}}`);
		} else {
			const m = pcp.match(/^(?:\+|(-))([0-9]+)$/);
			if(m) {
				const [, s, n] = m;
				output.push(`pcp={${(s || "") + n}}`);
			} else {
				output.push(`pcp="${pcp}"`);
			}
		}
	} else {
		log("Missing pcp");
	}
	//
	// AURA LINE
	//
	if(aura) {
		output.push(`aura={${doConvert(aura)}}`)
	}
	//
	// DONE
	//
	if(flag) {
		return `${maybeClear}<Info id="${id}" ${output.join(" ")} />\n`;
	}
	return "<p><em>Error fetching basic info.</em></p>\n";
};

export default makeMonsterInfoBlock;
