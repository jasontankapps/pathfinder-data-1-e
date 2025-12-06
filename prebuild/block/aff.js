const constructDC = ({ dcF, dcW, dcR, dcYou, dcIt, dcPoss, dcLev, dcHD, dcMod }) => {
	if(!(dcF || dcW || dcR) || !(dcLev || dcHD)) {
		return "";
	}
	const parts = [ "10 + 1/2" ];
	dcF && parts.unshift("Fort");
	dcW && parts.unshift("Will");
	dcR && parts.unshift("Refl");
	const pre = dcYou ? "your" : "the";
	const pre2 = dcYou ? "your" : dcIt || "their";
	const post = dcPoss || (dcYou ? "" : "'s");
	if(dcLev) {
		parts.push(
			`${pre} ${dcLev}${post} level + ${pre2}`
		);
	} else {
		parts.push(
			`${pre} ${dcHD}${post} HD + ${pre2}`
		);
	}
	parts.push(dcMod, "modifier");
	return parts.filter(x => x).join(" ");
};
const convertIniSec = (attrs, prefix) => {
	const out = {};
	const x = prefix.length;
	let flag = false;
	Object.keys(attrs).forEach(key => {
		if(key.indexOf(prefix) === 0) {
			out[prefix.slice(x)] = attrs[key];
			flag = true;
		}
	});
	return flag && out;
};
const constructEffect = (attrs, convertEncodedInfo) => {
	const {
		effStr, effStrD, effDex, effDexD, effCon, effConD,
		effInt, effIntD, effWis, effWisD, effCha, effChaD,
		effExtra, effOr
	} = attrs;
	const output = [];
	let flag = false;
	let linked = false;
	const link = (input) => {
		flag = true;
		if(linked) {
			return input;
		}
		linked = true;
		return `‹rule/${input}›`;
	};
	if(effStr) {
		output.push(`${effStr} ${link("Str damage")}`);
	}
	if(effStrD) {
		output.push(`${effStrD} ${link("Str drain")}`);
	}
	if(effDex) {
		output.push(`${effDex} ${link("Dex damage")}`);
	}
	if(effDexD) {
		output.push(`${effDexD} ${link("Dex drain")}`);
	}
	if(effCon) {
		output.push(`${effCon} ${link("Con damage")}`);
	}
	if(effConD) {
		output.push(`${effConD} ${link("Con drain")}`);
	}
	if(effInt) {
		output.push(`${effInt} ${link("Int damage")}`);
	}
	if(effIntD) {
		output.push(`${effIntD} ${link("Int drain")}`);
	}
	if(effWis) {
		output.push(`${effWis} ${link("Wis damage")}`);
	}
	if(effWisD) {
		output.push(`${effWisD} ${link("Wis drain")}`);
	}
	if(effCha) {
		output.push(`${effCha} ${link("Cha damage")}`);
	}
	if(effChaD) {
		output.push(`${effChaD} ${link("Cha drain")}`);
	}
	if(effExtra) {
		flag = true;
		output.push(effExtra);
	}
	if(!flag) {
		return flag;
	}
	const last = output.pop();
	if(output.length) {
		return convertEncodedInfo(output.join(", ") + (
			output.length > 2 ? "," : ""
		) + (
			effOr ? (
				effOr === "effOr" ? " or " : effOr
			) : " and "
		) + last);
	}
	return convertEncodedInfo(last);
};

const makeAfflictionBlock = (marked2, flags, convertEncodedInfo, maybeClear, text, attrs, logError) => {
	const {
		iconP, iconI, iconC, iconD, iconA,
		poison, curse, infest, disease,
		type, save, saveF, saveW, onset,
		track, trackmod,
		freq, freqR, freqM, freqH, freqD,
		eff, ineff, seceff,
		cure, cure1, cure2, cure2c, cure3, cure3c,
		extra, start, nolink
	} = attrs;
	//
	// START CODE
	//
	let rows = 2;
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
	// CONFIGURE TYPE BOX
	//
	let supertype = poison ? "Poison" : curse ? "Curse" : infest ? "Infestation" : disease ? "Disease" : "Affliction";
	if(type && supertype) {
		supertype = supertype + "; " + type;
	} else if (type) {
		supertype = type;
	}
	//
	// CONFIGURE SAVE DC
	//
	const saveDC = save || (
		saveF ? `Fort ${saveF}` : saveW ? `Will ${saveW}` : constructDC(attrs)
	);
	if(save && (saveF || saveW)) {
		logError("---> Invalid saveF or saveW")
	}
	//
	// ADD TYPE, SAVE DC
	//
	rows += 2;
	output.push(
		"<tr>",
		`<th scope="row">Type</th>`,
		`<td colSpan={3}>${supertype}</td>`,
		"</tr><tr>",
		`<th scope="row">Save DC</th>`,
		`<td colSpan={3}>${saveDC}</td>`,
		"</tr>"
	);
	//
	// CONFIGURE FREQUENCY
	//
	let frequency = freq;
	if(!freq) {
		//freqR, freqM, freqH, freqD,
		const unit = freqR ? "round" : (
			freqM ? "minute" : (
				freqH ? "hour": (
					freqD ? "day" : ""
				)
			)
		);
		if(unit) {
			frequency = `1/${unit} for ${freqR || freqM | freqH || freqD} ${unit}s`;
		}
	} else {
		if(freqR || freqM || freqH || freqD) {
			logError("---> Invalid freqR, freqM, freqH, or freqD")
		}
	}
	//
	// ADD ONSET, TRACK, FREQUENCY (if needed)
	//
	output.push("<tr>");
	if(frequency) {
		if(track && onset) {
			rows += 2;
			output.push(
				`<th scope="row">Onset</th>`,
				`<td colSpan={3}>${onset}</td>`,
				"</tr><tr>",
				`<th scope="row">Frequency</th>`,
				`<td colSpan={3}>${frequency}</td>`,
				"</tr><tr>",
				`<th scope="row">Track</th>`,
				`<td colSpan={3}>${marked2.parseInline(convertEncodedInfo(track))}</td>`,
				"</tr><tr>"
			);
		} else if (track) {
			rows++;
			output.push(
				`<th scope="row">Frequency</th>`,
				`<td colSpan={3}>${frequency}</td>`,
				"</tr><tr>",
				`<th scope="row">Track</th>`,
				`<td colSpan={3}>${marked2.parseInline(convertEncodedInfo(track))}</td>`,
				"</tr><tr>"
			);
		} else {
			rows += 2;
			output.push(
				`<th scope="row">Onset</th>`,
				`<td colSpan={3}>${onset || "immediate"}</td>`,
				"</tr><tr>",
				`<th scope="row">Frequency</th>`,
				`<td colSpan={3}>${frequency}</td>`,
				"</tr><tr>"
			);
		}
		if(trackmod) {
			rows++;
			output.push(
				`<th scope="row">Track</th>`,
				`<td colSpan={3}>${marked2.parseInline(convertEncodedInfo(trackmod))}</td>`,
				"</tr><tr>"
			);
		}
	}
	//
	// CONFIGURE EFFECTS
	//
	if(eff || (ineff && seceff)) {
		if(eff) {
			// BASIC EFFECT TEXT
			output.push(
				`<th scope="row">Effect</th>`,
				`<td colSpan={3}>${marked2.parseInline(convertEncodedInfo(eff))}</td>`
			);
			if(ineff || seceff) {
				logError(`---> ineff/seceff used when eff present`)
			}
			rows++;
		} else {
			// INITIAL AND SECONDARY EFFECT TEXTS
			output.push(
				`<th scope="row">Initial Effect</th>`,
				`<td colSpan={3}>${marked2.parseInline(convertEncodedInfo(ineff))}</td>`,
				"</tr><tr>",
				`<th scope="row">Secondary Effect</th>`,
				`<td colSpan={3}>${marked2.parseInline(convertEncodedInfo(seceff))}</td>`
			);
			rows += 2;
		}
	} else {
		if(ineff || seceff) {
			logError(`---> ${ineff ? "ineff" : "seceff"} used without other paired prop`)
		}
		//
		// USE ATTRS TO FIND EFFECTS
		// AND/OR INITIAL/SECONDARY EFFECTS
		//
		const ee = constructEffect(attrs, convertEncodedInfo);
		if(ee) {
			rows++;
			output.push(
				`<th scope="row">Effect</th>`,
				`<td colSpan={3}>${marked2.parseInline(ee)}</td>`
			);
		} else {
			const i = convertIniSec(attrs, "in");
			const s = convertIniSec(attrs, "sec");
			const ii = i && constructEffect(i, convertEncodedInfo);
			const ss = s && constructEffect(s, convertEncodedInfo);
			if(ii && ss) {
				rows += 2;
				output.push(
					`<th scope="row">Initial Effect</th>`,
					`<td colSpan={3}>${marked2.parseInline(ii)}</td>`,
					"</tr><tr>",
					`<th scope="row">Secondary Effect</th>`,
					`<td colSpan={3}>${marked2.parseInline(ss)}</td>`
				);
			}
		}
	}
	//
	// CONFIGURE CURE LINE
	//
	const cureLine = cure ? marked2.parseInline(convertEncodedInfo(cure)) : (
		cure1 ? "1 save" : (
			cure2 ? "2 saves" : (
				cure2c ? "2 consecutive saves" : (
					cure3 ? "3 saves" : (
						cure3c ? "3 consecutive saves" : ""
					)
				)
			)
		)
	);
	if(cure) {
		if(cure1 || cure2 || cure2c || cure3 || cure3c) {
			logError(`---> extra cure# prop`)
		}
	}
	if(cureLine) {
		rows++;
		output.push(
			`</tr><tr>`,
			`<th scope="row">Cure</th>`,
			`<td colSpan={3}>${cureLine}</td>`,
			"</tr>"
		);
	} else {
		output.push("</tr>");
	}
	//
	// ADD EXTRA INFO
	//
	if(extra) {
		rows++;
		output.push(
			`<tr><td colSpan={4} className=\"extra\">${marked2.parseInline(convertEncodedInfo(extra))}</td></tr>`
		);
	}
	//
	// ADD ICON
	//
	const icon = iconP ? ["Poison", "poison-bottle.svg", "/rule/poison"] : (
		iconD ? ["Disease", "paramecia.svg", "/rule/diseases"] : (
			iconC ? ["Curse", "death-note.svg", "/rule/curses"] : (
				iconI ? ["Infestation", "infested-mass.svg", "/rule/infestations"] : (
					iconA ? ["Affliction", "tumor.svg", "/rule/afflictions"] : false
				)
			)
		)
	);
	if(icon) {
		flags.icon = true;
		if(nolink) {
			output.splice(3, 0, `<th scope="row" rowSpan={${rows}}><IonIcon aria-label="${icon[0]}" icon="/icons/${icon[1]}" /></th>`);
		} else {
			flags.thlink = true;
			output.splice(3, 0, `<ThLink scope="row" rowSpan={${rows}} to="${icon[2]}"><IonIcon aria-label="${icon[0]}" icon="/icons/${icon[1]}" /></ThLink>`);
		}
	} else {
		logError(`---> missing icon property`);
	}
	//
	// END CODE BLOCK	
	//
	output.push(
		`</tbody></table></div>`
	);
	return output.join("");
}

export default makeAfflictionBlock;
