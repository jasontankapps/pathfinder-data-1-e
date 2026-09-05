const makeKineticTalentBlock = ({marked2, convertEncodedInfo, id, maybeClear, attrs, logError}) => {
	const {
		el, type, l, burn, prereq, assoc, btype, dmg, save, sr, source
	} = attrs;
	//
	// START CODE
	//
	const output = [
		`${maybeClear}<Kinetic id="${id}"`
	];
	//
	// CONFIGURE ELEMENT, TYPE, LEVEL, AND BURN
	//
	if(!source) {
		logError("---> Missing sources");
		output.push(` source={[]}`);
	} else {
		const sources = [];
		source.split("~").forEach(bit => {
			const [s, pg] = bit.split("/");
			sources.push(`["${s}", ${pg}]`);
		});
		output.push(` source={[${sources.join(",")}]}`);
	}
	if(!el) {
		logError("---> Missing element");
		output.push(` el="MISSING"`);
	} else {
		output.push(` el="${el}"`);
	}
	if(!type) {
		logError("---> Missing type");
		output.push(` type="MISSING"`);
	} else {
		output.push(` type="${type}"`);
	}
	if(l === undefined) {
		logError("---> Missing level");
		output.push(` l={1}`);
	} else {
		const ll = Number(l);
		if(ll !== ll || ll < 0 || ll > 9 || Math.floor(ll) !== ll) {
			logError("---> Invalid level");
			output.push(` l={0}`);
		} else {
			output.push(` l={${ll}}`);
		}
	}
	if(burn === undefined) {
		logError("---> Missing burn");
		output.push(` burn="${0}"`);
	} else {
		const bb = Number(burn);
		if(bb !== bb || bb < 0 || bb > 4 || Math.floor(bb) !== bb) {
			logError("---> Invalid burn");
			output.push(` burn="${0}"`);
		} else {
			output.push(` burn={${bb}}`);
		}
	}
	//
	// CHECK FOR PREREQS
	//
	if(prereq) {
		output.push(` prereq={<>${marked2.parseInline(convertEncodedInfo(prereq))}</>}`);
	}
	//
	// CHECK FOR ASSOCIATED BLASTS
	//
	if(assoc) {
		output.push(` assoc={<>${marked2.parseInline(convertEncodedInfo(assoc))}</>}`);
	}
	//
	// CHECK FOR BLAST TYPE AND DAMAGE
	//
	if(btype && dmg) {
		output.push(` btype="${btype}" dmg="${dmg}"`);
	} else if (btype || dmg) {
		logError(`---> Btype or Dmg present without its pair`);
	}
	//
	// CHECK FOR SAVE AND MAYBE SR
	//
	if(save) {
		output.push(` save="${save}"`);
		sr && output.push(` sr="${sr}"`);
	} else if (sr) {
		logError("---> SR present without Save");
	}
	let potential = output.join("") + " />";
	let final = "";
	let m;
	while(m = potential.match(/(^.*?)=\{(?:<>|")([^<>"]+)(?:<[/]>|")\}(.*$)/)) {
		const [,pre,text,post] = m;
		final = final + `${pre}="${text}"`;
		potential = post;
	}
	return final + potential + "\n";
}

export default makeKineticTalentBlock;
