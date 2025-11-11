const makeHauntBlock = (marked2, flags, convertEncodedInfo, id, maybeClear, text, attrs, logError) => {
	const {
		notice, hp, weak, trigger, reset,
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
			`<th colSpan={5} scope="col" className="title">${text}</th>`,
			"</tr>"
		);
	}
	//
	// CREATE NOTICE LINE
	//
	if(!notice) {
		logError("---> missing haunt notice DC");
	} else {
		rows++;
		output.push(
			"<tr>",
			`<th scope="row" colSpan={2}>Notice</th><td colSpan={3}>${notice}</td>`,
			"</tr>"
		);
	}
	//
	// CREATE HP AND WEAKNESSES
	//
	if(!hp) {
		logError("---> missing haunt hp");
	} else if (weak) {
		rows++;
		output.push(
			"<tr>",
			`<th id="${id}-hp">hp</th><td>${hp}</td>`,
			`<th id="${id}-weak">Weaknesses</th><td colSpan={2}>${marked2.parseInline(convertEncodedInfo(weak))}</td>`,
			"</tr>"
		);
	} else {
		rows++;
		output.push(
			"<tr>",
			`<th scope="row">hp</th><td colSpan={4}>${hp}</td>`,
			"</tr>"
		);
	}
	//
	// CREATE TRIGGER AND RESET
	//
	rows++;
	output.push(
		"<tr>",
		`<th id="${id}-trigger" colSpan={2}>Trigger</th>`,
		`<td headers="${id}-trigger">${trigger}</td>`,
		`<th id="${id}-reset">Reset</th>`,
		`<td headers="${id}-reset">${reset}</td>`,
		"</tr>"
	);
	//
	// ADD HAUNT ICON
	//
	flags.icon = true;
	flags.thlink = true;
	output.splice(3, 0, `<ThLink scope="row" rowSpan={${rows}} to="/rule/elements_of_a_haunt"><IonIcon aria-label="Haunt" icon="/icons/ghost.svg" /></ThLink>`)
	//
	// END CODE BLOCK	
	//
	output.push(
		`</tbody></table></div>`
	);
	return output.join("");
};

export default makeHauntBlock;
