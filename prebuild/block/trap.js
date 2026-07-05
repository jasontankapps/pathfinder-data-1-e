const makeTrapBlock = ({marked2, flags, convertEncodedInfo, id, maybeClear, text, attrs, logError}) => {
	const {
		cr, magic, mechanical, terrain,
		pdc, dddc, trigger,
		manual, automatic, repair, eff,
		start
	} = attrs;
	//
	// START CODE
	//
	const output = [
		`${maybeClear}<TrapInfo${start ? " start" : ""} id="${id}"`
	];
	//
	// CONFIGURE TYPE AND CR
	//
	if(!(magic || mechanical)) {
		logError("---> Missing trap type");
	}
	if(cr === undefined) {
		logError("---> Missing trap CR");
	}
	magic && output.push(" magic");
	output.push(` cr="${cr}"`);
	//
	// CREATE ASSOCIATED TERRAINS
	//
	if(terrain) {
		output.push(` terrain=${JSON.stringify(terrain)}`);
	}
	//
	// CREATE DCS
	//
	output.push(
		` pdc="${pdc}" dddc="${dddc}"`
	);
	//
	// CREATE TRIGGER AND RESET
	//
	const reset = automatic || manual || repair;
	reset && output.push(" " + reset);
	output.push(
		` trigger=${JSON.stringify(trigger)}`
	);
	//
	// CONFIGURE EFFECTS
	//
	if(eff === undefined) {
		logError("---> Missing trap effect");
	} else {
		output.push(
			` eff={<>${marked2.parseInline(convertEncodedInfo(eff))}</>}`
		);
	}
	//
	// ADD A TITLE LINE IF NEEDED
	//
	if(text) {
		output.push(`>${text}</TrapInfo>`);
	} else {
		output.push(" />");
	}
	let potential = output.join("");
	let final = "";
	let m;
	while(m = potential.match(/(^.*?)=\{(?:<>|")([^<>"]+)(?:<[/]>|")\}(.*$)/)) {
		const [,pre,text,post] = m;
		final = final + `${pre}="${text}"`;
		potential = post;
	}
	return final + potential + "\n";
}

export default makeTrapBlock;
