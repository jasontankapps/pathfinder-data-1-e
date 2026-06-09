const engJoin = (input) => {
	const l = input.length;
	if(l > 2) {
		const final = input.pop();
		return input.join(", ") + ", and " + final;
	} else if (l === 2) {
		return input.join(" and ");
	}
	return input[0];
};

const makeRacialTraitsBlock = ({maybeClear, plural, main, convert, logError}) => {
	if(!plural) {
		logError("Missing PLURAL attribute in ::rtraits.");
		return "[Error]";
	}
	const needsArg = (input, what) => {
		const x = input.shift();
		if(x === undefined) {
			logError(`Missing argument for [${what}].`);
			return "MISSING";
		}
		return x;
	};
	//
	// START CODE
	//
	const output = [];
	//
	// PARSE MAIN
	//
	main.split("~").forEach(bit => {
		const [what, ...data] = bit.split("|");
		switch(what) {
			case "LANGX": {
				const pre = data.shift();
				output.push([
					"Languages",
					`${pre} ${plural} with high Intelligence scores can choose ${
						data[0] === "ANY"
							? "any ‹misc/languages› they want (except secret languages, such as Druidic)"
							: `from the following bonus languages: ${engJoin(data)}`
					}.`]);
				break;
			}
			case "LANG": {
				const split = data.indexOf("");
				const pre = data.slice(0, split);
				const post = data.slice(split + 1);
				output.push([
					"Languages",
					`${plural} begin play speaking ${
						engJoin(pre)
					}. ${plural} with high Intelligence scores can choose ${
						post[0] === "ANY"
							? "any ‹misc/languages› they want (except secret languages, such as Druidic)"
							: `from the following bonus languages: ${engJoin(post)}`
					}.`]);
				break;
			}
			case "SPEED": {
				const next = data.shift();
				switch (next) {
					case "normal":
						output.push(["Normal Speed", `${plural} have a base speed of 30 feet.`]);
						break;
					case "normalLand":
						output.push(["Normal Speed", `${plural} have a base speed of 30 feet on land.`]);
						break;
					case "slow":
						output.push(["Slow Speed", `${plural} have a base speed of ${data.shift() || 20} feet.`]);
						break;
					default:
						logError(`Bad SPEED [${next}]`);
				}
				break;
			}
			case "CLIMB": {
				output.push(["Natural Climber", `${plural} have a climb speed of ${needsArg(data, what)} feet.`]);
				break;
			}
			case "FSWIM": {
				output.push(["Fast Swimmer", `${plural} have a swim speed of 60 feet.`]);
				break;
			}
			case "SWIM": {
				output.push(["Swim Speed", `${plural} have a swim speed of ${needsArg(data, what)} feet.`]);
				break;
			}
			case "SWIM+": {
				output.push(["Swim Speed", `${plural} have a swim speed of 30 feet, can move in water without making Swim checks, and always treat Swim as a class skill.`]);
				break;
			}
			case "MEDIUM": {
				output.push(["Medium", `${plural} are Medium creatures and have no bonuses or penalties due to their size.`]);
				break;
			}
			case "SMALL": {
				output.push(["Small", `${plural} are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, a -1 penalty on combat maneuver checks and to their Combat Maneuver Defense, and a +4 size bonus on Stealth checks.`]);
				break;
			}
			case "NATOUT": {
				output.push(["Native Outsider", `${plural} are ‹type/outsider«s› with the ‹subtype/native› subtype.`]);
				break;
			}
			case "MONHUM": {
				const maybe = data.shift();
				output.push(["Monstrous Humanoid", `${plural} are ‹type/monstrous humanoid«s›${maybe ? ` with the ‹subtype/${maybe}› subtype.` : ""}`]);
				break;
			}
			case "HUM": {
				const subs = data.map(bit => `‹subtype/${bit}›`).join(" and ");
				output.push(["Humanoid", `${plural} are ‹type/humanoid«s› with the ${subs} subtype${data.length > 1 ? "s" : ""}.`])
				break;
			}
			case "LSENS":
				output.push(["Light Sensitivity", `${plural} are ‹misc/dazzled› in areas of bright light.`]);
				break;
			case "LSUN":
				output.push(["Light Sensitivity", `${plural} are ‹misc/dazzled› in areas of bright sunlight or within the radius of a ‹spell/daylight› spell.`]);
				break;
			case "DV":
				output.push(["Darkvision", `${plural} can see in the dark up to 60 feet.`]);
				break;
			case "SDV":
				output.push(["Superior Darkvision", `${plural} can see in the dark up to 120 feet.`]);
				break;
			case "LLV":
				output.push(["Low-Light Vision", `${plural} can see twice as far as humans in conditions of dim light.`]);
				break;
			case "NATARM":
				output.push(["Natural Armor", `${plural} have a +${needsArg(data, what)} natural armor bonus.`]);
				break;
			case "KEENSEN":
				output.push(["Keen Senses", `${plural} receive a +2 racial bonus on Perception checks.`]);
				break;
			default:
				output.push([what, data[0] || ""]);
		}
	});
	return `${maybeClear}<div className="striped hanging">\n${output.map(pair => {
		const [title, text] = pair;
		return `<Duo title="${title}">${convert(text)}</Duo>`;
	}).join("\n")}\n</div>\n`
}

/*
NATARM|# - Natural Armor - Xs have a +# natural armor bonus.
KEENSEN - Keen Senses - Xs receive a +2 racial bonus on Perception checks.
*/

export default makeRacialTraitsBlock;
