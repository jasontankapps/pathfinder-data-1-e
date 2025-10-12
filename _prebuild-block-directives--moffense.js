/*
::mspell

sla cl con atWill constant day hour week month year other

know cl con l0-l9 next

prep cl con l0-l9 next

ex cl con l0-9 next

psy cl con pe peP psyMag next

title data next

*/


const makeMonsterOffenseBlock = (marked2, linker, maybeClear, attrs, logError) => {
	const {
		sp, spP, br, brP, cl, clP, sw, swP,
		fl, flP, clumsy, poor, average, good, perfect,
		jet, spOther, spExtra, //speed
		melee,
		ranged,
		space, reach, reachP, //space
		specAtt, bDrain, bleed, brWeap, burn, capsize,
		chEn, chNEn, chPEn, constrict, distraction,
		eDrain, engulf, entrap, favEn, grab, heat,
		mMagic, mPower, paralysis, powCh, pull, push,
		rake, rend, rockTh, sneak, swallow, trample,
		web, whirlwind, //special attacks (w/possible text)
		attach, bloodRage, fSwallow, ferocity, gaze,
		pounce, smother, strangle, //special attacks (no extra text)
		next
	} = attrs;
	const output = [];
	const doParse = (input) => marked2.parseInline(linker(input));
	//
	// SPEED LINE
	//
	const speeds = [];
	if(sp) {
		speeds.push(`${sp} ft.${spP ? ` (${spP})` : ""}`);
	}
	if(br) {
		speeds.push(`burrow ${br} ft.${brP ? ` (${brP})` : ""}`);
	}
	if(cl) {
		speeds.push(`climb ${cl} ft.${clP ? ` (${clP})` : ""}`);
	}
	if(fl) {
		let p = "";
		if(flP) {
			p = flP;
		} else if (clumsy) {
			p = "clumsy";
		} else if (poor) {
			p = "poor";
		} else if (average) {
			p = "average";
		} else if (good) {
			p = "good";
		} else if (perfect) {
			p = "perfect";
		} else {
			logError("Missing fly speed maneuverability");
		}
		speeds.push(`fly ${fl} ft.${p ? ` (${p})` : ""}`);
	}
	if(jet) {
		speeds.push(`{umr/jet} ${jet} ft.`);
	}
	if(sw) {
		speeds.push(`swim ${sw} ft.${swP ? ` (${swP})` : ""}`);
	}
	if(spOther) {
		speeds.push(spOther);
	}
	const finalspeed = "**Speed** " + speeds.join(", ") + (spExtra ? ("; " + spExtra) : "");
	output.push(doParse(finalspeed));
	//
	// MELEE, RANGED LINES
	//
	if(melee) {
		output.push(`**Melee** ${melee}`);
	}
	if(ranged) {
		output.push(`**Ranged** ${ranged}`);
	}
	//
	// SPACE/REACH LINE
	//
	if(space && reach) {
		output.push(doParse(`**Space** ${space}, **Reach** ${reach}` + (reachP ? ` (${reachP})` : "")));
	}
	//
	// SPECIAL ATTACKS LINE
	//
	const spAtt = [];
	if(specAtt) {
		spAtt.push(...specAtt.split("~").map(x => {
			const clean = x.replace(/%%[-a-z_]+[/]([^%]+?)%%/g, "$1").replace(/[^-a-zA-Z 0-9]/g, "");
			return [clean, x];
		}));
	}
	/*TEXT (possibly)
		bDrain, bleed, brWeap, burn, capsize,
		chEn, chNEn, chPEn, constrict, distraction,
		eDrain, engulf, entrap, favEn, grab, heat,
		mMagic, mPower, paralysis, powCh, pull, push,
		rake, rend, rockTh, sneak, swallow, trample,
		web, whirlwind
		if(web === "web") { umr/web only } else { ... }
	*/
	/*NON-TEXT
		attach, bloodRage, fSwallow, ferocity, gaze,
		pounce, smother, strangle */
	spAtt.sort((a,b) => a[0].localeCompare(b[0]));
	return `${maybeClear}<p${next ? ' className="no-bottom-margin"' : ""}>${output.join("<br>")}</p>`;
};

export default makeMonsterOffenseBlock;
