import { convertTextToLink } from '../tests/checkForEncodedLink.js';

const constructAlignmentTable = ({any, lg, ln, le, ng, n, ne, cg, cn, ce}) => {
	const lit = (al) => any || al ? " data-lit" : "";
	return `<table className="basic alignment"><tbody>`
		+ `<tr><td${lit(lg)}>LG</td><td${lit(ln)}>LN</td><td${lit(le)}>LE</td></tr>`
		+ `<tr><td${lit(ng)}>NG</td><td${lit(n)}>N</td><td${lit(ne)}>NE</td></tr>`
		+ `<tr><td${lit(cg)}>CG</td><td${lit(cn)}>CN</td><td${lit(ce)}>CE</td></tr>`
		+ "</tbody></table>";
};

export const makeClassBlock = ({maybeClear, attrs, marked2, convertEncodedInfo}) => {
	const {
		al, any, alSpecial,
		lg, ln, le, ng, n, ne, cg, cn, ce,
		hd, wealth, parent, skp,
		acro, app, bluff, climb, craft, diplo,
		dis, ddev, ea, fly, ha, heal, intm,
		ka, kd, ke, kg, kh, kl, kna, kno, kp, kr,
		ling, per, perf, prof, ride, sm, soh,
		spc, stl, sur, swim, umd
	} = attrs;
	//
	// START CODE
	//
	const output = [
		`${maybeClear}<table className=\"class\"><tbody>`
	];
	//
	// ALIGNMENT
	//
	output.push(`<tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex">${
		al ? `<span>${al}</span>` : ""
	}${
		alSpecial ? "" : constructAlignmentTable({any, lg, ln, le, ng, n, ne, cg, cn, ce})
	}</div></td></tr>`);
	//
	// HIT DIE
	//
	output.push(`<tr><th scope="row">Hit Die</th><td colSpan={2}>d${hd}</td></tr>`);
	//
	// PARENT(S)
	//
	parent && output.push(`<tr><th scope="row">Parent Class(es)</th><td colSpan={2}>${marked2.parseInline(convertEncodedInfo(parent))}</td></tr>`);
	//
	// WEALTH
	//
	const av = Math.floor(Number(wealth) * 10 * 7 / 2);
	output.push(`<tr><th scope="row">Starting Wealth</th><td colSpan={2}>${wealth}d6 &times; 10 gp (average ${av} gp)</td></tr>`);
	//
	// SKILL POINTS
	//
	output.push(`<tr><th scope="row">Skill Points per Level</th><td colSpan={2}>${skp} + Int modifier</td></tr>`);
	//
	// CLASS SKILLS
	//
	const cha = [
		["Bluff", bluff],
		["Diplomacy", diplo],
		["Disguise", dis],
		["Handle Animal", ha],
		["Intimidate", intm],
		["Perform (any)", perf],
		["Use Magic Device", umd]
	].filter(x => x[1]);
	const dex = [
		["Acrobatics", acro],
		["Disable Device", ddev],
		["Escape Artist", ea],
		["Fly", fly],
		["Ride", ride],
		["Sleight of Hand", soh],
		["Stealth", stl]
	].filter(x => x[1]);
	const int = [
		["Appraise", app],
		["Craft (any)", craft],
		["Knowledge (arcana)", ka],
		["Knowledge (dungeoneering)", kd],
		["Knowledge (engineering)", ke],
		["Knowledge (geography)", kg],
		["Knowledge (history)", kh],
		["Knowledge (local)", kl],
		["Knowledge (nature)", kna],
		["Knowledge (nobility)", kno],
		["Knowledge (planes)", kp],
		["Knowledge (religion)", kr],
		["Linguistics", ling],
		["Spellcraft", spc]
	].filter(x => x[1]);
	const str = [
		["Climb", climb],
		["Swim", swim]
	].filter(x => x[1]);
	const wis = [
		["Heal", heal],
		["Perception", per],
		["Profession (any)", prof],
		["Sense Motive", sm],
		["Survival", sur]
	].filter(x => x[1]);
	const all = [["(STR)", str], ["(DEX)", dex], ["(INT)", int], ["(WIS)", wis], ["(CHA)", cha]].filter(x => x[1].length > 0);
	output.push(`<tr><th scope="row" rowSpan={${all.length}} className="sw">Class Skills</th>`);
	let found = false;
	while(all.length > 0) {
		const [stat, skills] = all.shift();
		output.push(`${found ? "<tr>" : ""}<td>${
			skills
				.map(x => x[0])
				.map(x => `<Link to="/skill/${convertTextToLink(x)}">${x}</Link>`)
				.join(", ")
		}</td><td className="c${all.length > 0 ? "" : " se"}">${stat}</td></tr>`);
		found = true;
	}
	//
	// END CODE BLOCK	
	//
	output.push(
		`</tbody></table>`
	);
	return output.join("") + "\n";
}

export const makeProfBlock = ({maybeClear, attrs, marked2, flags, convertEncodedInfo}) => {
	const {
		simple, martial, weaps = "",
		wExtra,
		light, medium, heavy,
		shields, tower, aExtra,
		extra
	} = attrs;
	//
	// START CODE
	//
	const output = [
		`${maybeClear}<table className="class p">`,
		`<thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead>`,
		"<tbody>"
	];
	const wL = [];
	if(simple) {
		wL.push(`All <Link to="/main/equipment_weapons_simple">simple weapons</Link>`);
		flags.link = true;
	}
	if(martial) {
		wL.push(`All <Link to="/main/equipment_weapons_martial">martial weapons</Link>`);
		flags.link = true;
	}
	const w = weaps.split(/~/).map(wp => {
		if(!wp) {
			return "";
		} else if(wp.slice(0,1) === "!") {
			return marked2.parseInline(convertEncodedInfo(wp.slice(1)));
		}
		flags.link = true;
		return `<Link to="/eq-weapon/${convertTextToLink(wp)}">${wp}</Link>`;
	}).filter(x => x);
	output.push(
		`<tr><th scope="row" rowSpan={${
			wL.length + Math.ceil(w.length / 2) + (wExtra ? 1 : 0)
		}}>Weapons</th>`
	);
	let pastFirstLine = false;
	while(wL.length > 0) {
		// 
		output.push(`${pastFirstLine ? "<tr>" : ""}<td colSpan={2}>${wL.shift()}</td></tr>`);
		pastFirstLine = true;
	}
	while(w.length > 0) {
		const one = w.shift();
		const two = w.shift();
		if(two) {
			// Both present
			output.push(`${pastFirstLine ? "<tr>" : ""}<td>${one}</td><td>${two}</td></tr>`);
		} else {
			// Only one present
			output.push(`${pastFirstLine ? "<tr>" : ""}<td colSpan={2}>${one}</td></tr>`);
		}
		pastFirstLine = true;
	}
	if(wExtra) {
		output.push(`${pastFirstLine ? "<tr>" : ""}<td colSpan={2}>${marked2.parseInline(convertEncodedInfo(wExtra))}</td></tr>`);
		pastFirstLine = true;
	}
	output.push(`<tr><th>Light Armor?</th><td colSpan={2}>${light ? "Yes" : "No"}</td></tr>`);
	output.push(`<tr><th>Medium Armor?</th><td colSpan={2}>${medium ? "Yes" : "No"}</td></tr>`);
	output.push(`<tr><th>Heavy Armor?</th><td colSpan={2}>${heavy ? "Yes" : "No"}</td></tr>`);
	output.push(`<tr><th${
		extra || aExtra ? "" : ` className="sw"`
	}>Shields?</th><td colSpan={2}${
		extra || aExtra ? "" : ` className="se"`
	}>${
		shields === "shields" ? (
			tower ? "Yes, including tower shields" : "Yes, except tower shields"
		) : (
			shields ? marked2.parseInline(convertEncodedInfo(shields)) : "No"
		)
	}</td></tr>`);
	if(aExtra) {
		output.push(`<tr><th${
			extra ? "" : ` className="sw"`
		}>Armor</th><td colSpan={2}${
			extra ? "" : ` className="se"`
		}>${
			marked2.parseInline(convertEncodedInfo(aExtra))
		}</td></tr>`);
	}
	if(extra) {
		output.push(`<tr><td colSpan={3} className="sw se">${
			marked2.parseInline(convertEncodedInfo(extra))
		}</td></tr>`)
	}
	return output.join("") + `</tbody></table>\n`;
};
