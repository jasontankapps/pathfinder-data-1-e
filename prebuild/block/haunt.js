const makeHauntBlock = ({marked2, flags, convertEncodedInfo, id, maybeClear, text, attrs, logError}) => {
	const {
		notice, hp, weak, trigger, reset,
		start
	} = attrs;
	//
	// START CODE
	//
	const output = [
		`${maybeClear}<HauntInfo${start ? " start" : ""} id="${id}"`
	];
	//
	// CREATE NOTICE LINE
	//
	if(!notice) {
		logError("---> missing haunt notice DC");
	} else {
		output.push(
			` notice=${JSON.stringify(notice)}`
		);
	}
	//
	// CREATE HP AND WEAKNESSES
	//
	if(!hp) {
		logError("---> missing haunt hp");
	}
	hp && output.push(` hp="${hp}"`);
	weak && output.push(` weak={<>${marked2.parseInline(convertEncodedInfo(weak))}</>}`);
	//
	// CREATE TRIGGER AND RESET
	//
	output.push(
		` trigger="${trigger}" reset="${reset}"`
	);
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
	while(m = potential.match(/(^.*?)=\{<>([^<>"]+)<[/]>\}(.*$)/)) {
		const [,pre,text,post] = m;
		final = final + `${pre}="${text}"`;
		potential = post;
	}
	return final + potential + "\n";
};

export default makeHauntBlock;
