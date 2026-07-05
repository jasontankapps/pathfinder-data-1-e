import isALink from "../get-all-links.js";
import { convertTextToLink } from "../tests/checkForEncodedLink.js";

const makeRoomBlock = ({marked2, convertEncodedInfo, id, maybeClear, text, attrs, logError}) => {
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
		`${maybeClear}<RoomInfo id="${id}"`
	];
	//
	// CONFIGURE EARNINGS
	//
	if(earnings) {
		output.push(`earnings="${earnings}"`)
	} else {
		const earn = [];
		eGoods && earn.push(`eGoods`);
		eInfluence && earn.push(`eInf`);
		eLabor && earn.push(`eLabor`);
		eMagic && earn.push(`eMagic`);
		eGp && earn.push(`eGp`);
		if(earn.length > 0) {
			if(!e) {
				logError("---> Missing `e` earnings value");
			} else {
				output.push(`e={${e}}`, ...earn);
			}
		}
	}
	//
	// BENEFIT
	//
	benefit && output.push(
		`benefit={<>${marked2.parseInline(convertEncodedInfo(benefit))}</>}`
	);
	//
	// CONFIGURE CREATION COSTS
	//
	const costs = [];
	if(create) {
		output.push(`create="${create}"`)
	} else if (!c) {
		logError("---> Missing `c` create value");
	} else {
		cGoods && output.push(`cGoods={${cGoods}}`);
		cInfluence && output.push(`cInf={${cInfluence}}`);
		cLabor && output.push(`cLabor={${cLabor}}`);
		cMagic && output.push(`cMagic={${cMagic}}`);
		output.push(`c={${c}}`);
	}
	//
	// CONFIGURE TIME AND SIZE
	//
	output.push(
		t ? `t={${t}}` : `time="${time}"`,
		s ? `s={${s}}` : (size ? `size="${size}"` : `s1={${s1}} s2={${s2}}`)
	);
	//
	// UPGRADES FROM/TO
	//
	if(from) {
		from.split("~").every(bit => {
			if(!isALink("misc", convertTextToLink(bit))) {
				logError(`::room Unable to find [misc/${bit}]`);
				return false;
			}
			return true;
		}) && output.push(`from="${from}"`);
	}
	if(to) {
		to.split("~").every(bit => {
			if(!isALink("misc", convertTextToLink(bit))) {
				logError(`::room Unable to find [misc/${bit}]`);
				return false;
			}
			return true;
		}) && output.push(`to="${to}"`);
	}
	//
	// ADD A TITLE LINE IF NEEDED
	//
	let potential = output.join(" ") + (text ? `>${text}</RoomInfo>` : " />");
	let final = "";
	let m;
	while(m = potential.match(/(^.*?)=\{(?:<>|")([^<>"]+)(?:<[/]>|")\}(.*$)/)) {
		const [,pre,text,post] = m;
		final = final + `${pre}="${text}"`;
		potential = post;
	}
	return final + potential + "\n";
}

export default makeRoomBlock;
