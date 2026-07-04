const makeDrugBlock = ({marked2, flags, convertEncodedInfo, id, maybeClear, text, attrs, logError}) => {
	const {
		type, addict, minor, moderate, severe, dc,
		price, eff1, eff2,
		dmg, dmgStr, dmgDex, dmgCon, dmgInt, dmgWis, dmgCha,
		start
	} = attrs;
	//
	// START CODE
	//
	const output = [
		`${maybeClear}<DrugInfo${start ? " start" : ""}`
	];
	//
	// CONFIGURE ADDICTION BOX
	//
	let addiction = minor || moderate || severe || addict || "";
	if(!addiction) {
		logError("---> Missing addiction line");
	} else if (dc) {
		output.push(
			` addict="${minor || moderate || severe || addict}"`,
			` dc={${dc}}`
		);
	} else {
		logError("---> Missing DC for addiction")
	}
	//
	// CONFIGURE PRICE
	//
	output.push(` gp={${price}}`);
	//
	// ADD TYPE
	//
	output.push(` type="${type}"`);
	//
	// CONFIGURE EFFECTS
	//
	eff1 && output.push(` eff1={<>${marked2.parseInline(convertEncodedInfo(eff1))}</>}`);
	eff2 && output.push(` eff2={<>${marked2.parseInline(convertEncodedInfo(eff2))}</>}`);
	//
	// CONFIGURE DAMAGE
	//
	const damage = [];
	if(dmgStr) {
		damage.push(`${dmgStr} Str`);
	}
	if(dmgDex) {
		damage.push(`${dmgDex} Dex`);
	}
	if(dmgCon) {
		damage.push(`${dmgCon} Con`);
	}
	if(dmgInt) {
		damage.push(`${dmgInt} Int`);
	}
	if(dmgWis) {
		damage.push(`${dmgWis} Wis`);
	}
	if(dmgCha) {
		damage.push(`${dmgCha} Cha`);
	}
	if(dmg) {
		damage.push(dmg);
	}
	if(damage.length === 0) {
		console.log(`---> Missing damage`);
	} else {
		output.push(` dmg={${JSON.stringify(damage)}}`);
	}
	//
	// ADD A TITLE LINE IF NEEDED
	//
	if(text) {
		output.push(`>${text}</DrugInfo>`);
	} else {
		output.push(" />");
	}
	let potential = output.join("");
	let final = "";
	let m;
	while(m = potential.match(/(^.*?)=\{<>([^<>"]+)<[/]>\}(.*$)/)) {
		const [,pre,text,post] = m;
		final = final + `${pre}="${text}"`;
		potential = post;
	}
	return final + potential + "\n";
}

export default makeDrugBlock;
