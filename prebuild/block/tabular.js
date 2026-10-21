const makeTabularBlock = ({marked2, convertEncodedInfo, maybeClear, attrs, logError}) => {
	const {
		format, id = "", ...etc
	} = attrs;
	//
	// START CODE
	//
	const output = [
		`${maybeClear}<Tabular`
	];
	//
	// SAVE FORMAT AND ID
	//
	if(!format) {
		logError("---> Missing format")
	}
	output.push(`format="${format}"`);
	id && output.push(`id="${id}"`);
	//
	// ADD OTHER PROPS
	//
	Object.entries(etc).forEach(([prop, value]) => {
		output.push(`${prop}={<>${marked2.parseInline(convertEncodedInfo(value))}</>}`)
	});
	//
	// TURN ANY PROPS THAT DON'T NEED TO BE FRAGMENTS INTO SIMPLE STRINGS
	//
	let potential = output.join(" ") + " />";
	let final = "";
	let m;
	while(m = potential.match(/(^.*?)=\{(?:<>|")([^<>"]+)(?:<[/]>|")\}(.*$)/)) {
		const [,pre,text,post] = m;
		final = final + `${pre}="${text}"`;
		potential = post;
	}
	return final + potential + "\n";
}

export default makeTabularBlock;
