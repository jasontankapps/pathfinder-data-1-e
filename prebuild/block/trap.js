const makeTrapBlock = (marked2, flags, linker, id, maybeClear, text, attrs, logError) => {
	const {
		cr, magic, mechanical, terrain,
		pdc, dddc, trigger,
		manual, automatic, repair, eff,
		start
	} = attrs;
	let rows = 0;
	//
	// START CODE
	//
	const output = [
		`${maybeClear}<div className="sideNoteWrap${start ? " startAlign" : ""}">`,
		`<table><tbody>`
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
	// CONFIGURE TYPE AND CR
	//
	let type = magic || mechanical || "";
	if(!type) {
		logError("---> Missing trap type");
	}
	if(cr === undefined) {
		logError("---> Missing trap CR");
	}
	rows++
	output.push(
		"<tr>",
		`<th id="${id}-type">Type</th>`,
		`<td headers="${id}-type">${type}</td>`,
		`<th id="${id}-cr">CR</th>`,
		`<td headers="${id}-cr">${cr}</td>`,
		"</tr>"
	);
	//
	// CREATE ASSOCIATED TERRAINS
	//
	if(terrain) {
		rows++;
		output.push(
			`<tr><th scope="row">Terrain</th><td colSpan={3}>${terrain}</td></tr>`
		);
	}
	//
	// CREATE DCS
	//
	rows += 2;
	output.push(
		"<tr>",
		`<th scope="row" colSpan={2}>Perception DC</th>`,
		`<td colSpan={2}>${pdc}</td>`,
		"</tr><tr>",
		`<th scope="row" colSpan={2}>Disable Device DC</th>`,
		`<td colSpan={2}>${dddc}</td>`,
		"</tr>"
	);
	//
	// CREATE TRIGGER AND RESET
	//
	const reset = automatic || manual || repair || "none";
	rows++;
	output.push(
		"<tr>",
		`<th id="${id}-trigger">Trigger</th>`,
		`<td headers="${id}-trigger">${trigger}</td>`,
		`<th id="${id}-reset">Reset</th>`,
		`<td headers="${id}-reset">${reset}</td>`,
		"</tr>"
	);
	//
	// CONFIGURE EFFECTS
	//
	rows++;
	output.push(
		`<tr><td colSpan={4}><strong>Effect:</strong> ${marked2.parseInline(linker(eff))}</td></tr>`
	);
	//
	// ADD TRAP ICON
	//
	flags.icon = true;
	flags.thlink = true;
	output.splice(3, 0, `<ThLink scope="row" rowSpan={${rows}} to="/rule/elements_of_a_trap"><IonIcon aria-label="Trap" icon="/icons/wolf-trap.svg" /></ThLink>`)
	//
	// END CODE BLOCK	
	//
	output.push(
		`</tbody></table></div>`
	);
	return output.join("");
}

export default makeTrapBlock;
