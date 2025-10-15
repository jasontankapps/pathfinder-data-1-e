const makeDrugBlock = (marked2, flags, linker, id, maybeClear, text, attrs, logError) => {
	const {
		type, addict, minor, moderate, severe, dc,
		price, eff1, eff2,
		dmg, dmgStr, dmgDex, dmgCon, dmgInt, dmgWis, dmgCha,
		start
	} = attrs;
	let rows = 0;
	//
	// START CODE
	//
	const output = [
		`${maybeClear}<div className="sideNoteWrap${start ? " startAlign" : ""}">`,
		`<table className="noWrap"><tbody>`
	];
	//
	// ADD A TITLE LINE IF NEEDED
	//
	if(text) {
		rows++;
		output.push(
			"<tr>",
			`<th colSpan={4} scope="col" className="title">${text}</th>`,
			"</tr>"
		);
	}
	//
	// CONFIGURE ADDICTION BOX
	//
	let addiction = minor || moderate || severe || addict || "";
	if(!addiction) {
		logError("---> Missing addiction line");
	} else if (dc) {
		addiction = addiction.concat(", Fortitude DC ", dc);
	} else {
		logError("---> Missing DC for addiction")
	}
	//
	// CONFIGURE PRICE
	//
	let gp = Number.parseFloat(price);
	let cost = "";
	if(gp !== gp || gp < 0) {
		cost = "[invalid]";
		logError("---> Bad price");
	} else if (Math.floor(gp) === gp) {
		cost = `${gp} gp`;
	} else {
		gp = gp * 10;
		if (Math.floor(gp) === gp) {
			cost = `${gp} sp`;
		} else {
			cost = `${gp * 10} cp`;
		}
	}
	//
	// ADD TYPE, ADDICTION, SAVE DC, PRICE
	//
	rows += 2;
	output.push(
		"<tr>",
		`<th id="${id}-type">Type</th>`,
		`<td headers="${id}-type">${type}</td>`,
		`<th id="${id}-addict">Addiction</th>`,
		`<td headers="${id}-addict">${addiction}</td>`,
		"</tr><tr>",
		`<th scope="row">Price</th>`,
		`<td colSpan={3}>${cost}</td>`,
		"</tr>"
	);
	//
	// CONFIGURE EFFECTS
	//
	[eff1, eff2].filter(x => x).forEach(eff => {
		rows++;
		output.push(
			"<tr>",
			`<th scope="row">Effect</th>`,
			`<td colSpan={3}>${marked2.parseInline(linker(eff))}</td>`,
			"</tr>"
		);
	});
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
	const last = damage.pop();
	let td = "";
	if(damage.length === 1) {
		td = `${damage[0]} and ${last}`;
	} else if(damage.length > 1) {
		td = `${damage.join(", ")}, and ${last}`;
	} else if(last) {
		td = last;
	} else {
		td = `MISSING`;
		logError(`---> Missing damage`);
	}
	rows++;
	output.push(
		"<tr>",
		`<th scope="row"><Link to="/rule/ability_damage">Damage</Link></th>`,
		`<td colSpan={3}>${td}</td>`,
		"</tr>"
	);
	//
	// ADD DRUG ICON
	//
	flags.icon = true;
	flags.thlink = true;
	output.splice(3, 0, `<ThLink scope="row" rowSpan={${rows}} to="/rule/drugs"><IonIcon aria-label="Drug" icon="/icons/syringe.svg" /></ThLink>`)
	//
	// END CODE BLOCK	
	//
	output.push(
		`</tbody></table></div>`
	);
	return output.join("");
}

export default makeDrugBlock;
