const makeRoomBlock = ({marked2, convertEncodedInfo, id, maybeClear, text, attrs, logError, team}) => {
	const {
		eGp, eGoods, eMagic, eInfluence, eLabor, e,
		cGoods, cMagic, cInfluence, cLabor, c,
		benefit, t, s1, s2, s,
		earnings, create, time, size,
		to, from
	} = attrs;
	//
	// START CODE
	//
	const output = [
		`${maybeClear}<div className="sideNoteWrap startAlign noIcon">`,
		`<table><tbody>`
	];
	//
	// ADD A TITLE LINE IF NEEDED
	//
	if(text) {
		output.push(
			"<tr>",
			`<th colSpan={4} scope="col" className="title">${text}</th>`,
			"</tr>"
		);
	}
	//
	// CONFIGURE EARNINGS
	//
	const earn = [];
	if(earnings) {
		earn.push(earnings);
	} else {
		eGp && earn.push("gp");
		eGoods && earn.push("Goods");
		eInfluence && earn.push("Influence");
		eLabor && earn.push("Labor");
		eMagic && earn.push("Magic");
		if(earn.length > 0) {
			if(!e) {
				logError("---> Missing `e` earnings value");
			} else {
				const pop = earn.pop();
				if(!pop) {
					logError("---> Missing ALL earnings?");
				} else {
					earn.push(`${earn.length ? "or " : ""}${pop} +${e}`);
				}
			}
		}
	}
	earn.length && output.push(
		`<tr><th scope="row">Earnings</th><td colSpan={3}>${
			earn.length === 2 ? earn.join(" ") : earn.join(", ")
		}</td></tr>`
	);
	//
	// BENEFIT
	//
	benefit && output.push(
		`<tr><th scope="row">Benefit</th><td colSpan={3}>${marked2.parseInline(convertEncodedInfo(benefit))}</td></tr>`
	);
	//
	// CONFIGURE CREATION COSTS
	//
	const costs = [];
	if(create) {
		costs.push(create);
		costs.length && output.push(
			`<tr><th scope="row">Create</th><td colSpan={3}>${create}</td></tr>`
		);
	} else if (!c) {
		logError("---> Missing `c` create value");
	} else {
		cGoods && costs.push(`${cGoods} Goods`);
		cInfluence && costs.push(`${cInfluence} Influence`);
		cLabor && costs.push(`${cLabor} Labor`);
		cMagic && costs.push(`${cMagic} Magic`);
		costs.length && output.push(
			`<tr><th scope="row">Create</th><td colSpan={3}>${
				costs.join(", ")
			} (${
				Intl.NumberFormat("en-US").format(c)
			} gp)</td></tr>`
		);
	}
	//
	// CONFIGURE TIME AND SIZE
	//
	output.push(
		`<tr>`,
		`<th id="${id}-time">Time</th>`,
		`<td headers=\"${id}-time">${time || `${t} days`}</td>`,
		`<th id="${id}-size">Size</th>`,
		`<td headers="${id}-size">${
			team ? (s === 1 ? "1 person" : `${s} people`) : (size || `${s1}-${s2} squares`)
		}</td>`,
		`</tr>`
	);
	//
	// UPGRADES FROM/TO
	//
	from && output.push(
		`<tr><th scope="row">Upgrades From</th><td colSpan={3}>${
			marked2.parseInline(convertEncodedInfo(
				from.split(/~/).map(bit => `‹misc/${bit}›`).join(", ")
			))
		}</td></tr>`
	);
	to && output.push(
		`<tr><th scope="row">Upgrades To</th><td colSpan={3}>${
			marked2.parseInline(convertEncodedInfo(
				to.split(/~/).map(bit => `‹misc/${bit}›`).join(", ")
			))
		}</td></tr>`
	);
	//
	// END CODE BLOCK	
	//
	output.push(
		`</tbody></table></div>`
	);
	return output.join("");
}

export default makeRoomBlock;
