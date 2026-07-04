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
	if(effDex) {
		output.push(`${effDex} ${link("Dex damage")}`);
	}
	if(effCon) {
		output.push(`${effCon} ${link("Con damage")}`);
	}
	if(effInt) {
		output.push(`${effInt} ${link("Int damage")}`);
	}
	if(effWis) {
		output.push(`${effWis} ${link("Wis damage")}`);
	}
	if(effCha) {
		output.push(`${effCha} ${link("Cha damage")}`);
	}
	if(effStrD) {
		output.push(`${effStrD} ${link("Str drain")}`);
	}
	if(effDexD) {
		output.push(`${effDexD} ${link("Dex drain")}`);
	}
	if(effConD) {
		output.push(`${effConD} ${link("Con drain")}`);
	}
	if(effIntD) {
		output.push(`${effIntD} ${link("Int drain")}`);
	}
	if(effWisD) {
		output.push(`${effWisD} ${link("Wis drain")}`);
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

const makeAfflictionBlock = ({marked2, flags, convertEncodedInfo, maybeClear, text, attrs, logError}) => {
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
	const output = [
		`${maybeClear}<AffInfo` + (start ? " start" : "")
	];
	//
	// CONFIGURE TYPE BOX
	//
	let supertype = poison ? "Poison" : curse ? "Curse" : infest ? "Infestation" : disease ? "Disease" : "";
	if(type && supertype) {
		supertype += "; " + type;
	} else if (type) {
		supertype = type;
	} else if (!supertype) {
		supertype = "Affliction";
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
	output.push(
		` type="${supertype}" save="${saveDC}"`
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
	if(frequency) {
		output.push(` freq="${frequency}"`);
		onset && output.push(` onset="${onset}"`);
		track && output.push(` track={<>${marked2.parseInline(convertEncodedInfo(track))}</>}`);
		trackmod && output.push(` track2="${trackmod}"`);
	}
	//
	// CONFIGURE EFFECTS
	//
	if(eff || (ineff && seceff)) {
		if(eff) {
			// BASIC EFFECT TEXT
			output.push(
				` eff={<>${marked2.parseInline(convertEncodedInfo(eff))}</>}`
			);
			if(ineff || seceff) {
				logError(`---> ineff/seceff used when eff present`)
			}
		} else {
			// INITIAL AND SECONDARY EFFECT TEXTS
			output.push(
				` eff1={<>${marked2.parseInline(convertEncodedInfo(ineff))}</>}`,
				` eff2={<>${marked2.parseInline(convertEncodedInfo(seceff))}</>}`
			);
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
			output.push(
				` eff={<>${marked2.parseInline(ee)}</>}`
			);
		} else {
			const i = convertIniSec(attrs, "in");
			const s = convertIniSec(attrs, "sec");
			const ii = i && constructEffect(i, convertEncodedInfo);
			const ss = s && constructEffect(s, convertEncodedInfo);
			if(ii && ss) {
				output.push(
					` eff1={<>${marked2.parseInline(convertEncodedInfo(ii))}</>}`,
					` eff2={<>${marked2.parseInline(convertEncodedInfo(ss))}</>}`
				);
			}
		}
	}
	//
	// CONFIGURE CURE LINE
	//
	if(cure) {
		if(cure1 || cure2 || cure2c || cure3 || cure3c) {
			logError(`---> extra cure# prop`)
		}
		output.push(` cure={<>${marked2.parseInline(convertEncodedInfo(cure))}</>}`);
	} else if (cure1 || cure2 || cure2c || cure3 || cure3c) {
		output.push(" " + (cure1 || cure2 || cure2c || cure3 || cure3c));
	}
	//
	// ADD EXTRA INFO
	//
	if(extra) {
		output.push(
			` extra={<>${marked2.parseInline(convertEncodedInfo(extra))}</>}`
		);
	}
	//
	// ADD ICON
	//
	const icon = iconP ? "p" : (
		iconD ? "d" : (
			iconC ? "c" : (
				iconI ? "i" : (
					iconA ? "a" : false
				)
			)
		)
	);
	if(icon) {
		output.push(` icon="${icon}"`);
		nolink && output.push(" nolink");
	} else {
		logError(`---> missing icon property`);
	}
	//
	// ADD A TITLE LINE IF NEEDED
	//
	if(text) {
		output.push(`>${text}</AffInfo>`);
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

export default makeAfflictionBlock;
