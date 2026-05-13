import convertToHtmlArrayKludge from "../convertToHtmlArrayKludge.js";
import isALink from "../get-all-links.js";
import { getCleanText, convertSpecialTextToLink } from "../tests/checkForEncodedLink.js";

const linkify = (thing) => convertSpecialTextToLink(thing.replace(/#[A-Z]/g, ""));

export const makeMonsterStatisticsBlock = ({id, marked2, convertEncodedInfo, maybeClear, attrs, logError}) => {
	const {
		str, dex, con, int, wis, cha,
		bab, cmb, cmd,
		feats, skills, racial, lang, sq,
		combat, othergear, gear,
		faith, next
	} = attrs;
	const output = [];
	let flag = true;
	const log = (...args) => {
		flag = true;
		logError(...args);
	};
	const doConvert = (input, stringify = false) => convertToHtmlArrayKludge(doParse(input), stringify);
	const doParse = (input) => marked2
		.parseInline(convertEncodedInfo(input))
		.replace(/((?:#(?:[A-Z]))+)<[/]Link>/g, "</Link><sup>$1</sup>")
		.replace(/#([A-Z])/g, "<sup>$1</sup>")
		.replace(/<[/]([a-z]+)>, <\1>/g, ", ");
	const parseFeats = (input) => {
		const all = input.split(/~/);
		const found = [];
		while(all.length) {
			const item = all.shift();
			let m = item.match(/^!(.+)$/);
			if(m) {
				found.push(doConvert(m[1]));
			} else if(m = item.match(/^(M[/])?(.+?)(?:#([A-Z]))?(?:[|](.+))?$/)) {
				const [,mythic,feat,fn,parens] = m;
				const test = linkify(feat);
				if(!isALink("feat", test)) {
					log(`Bad feat [${test}]`);
				} else if(!mythic && !fn && !parens) {
					found.push(feat);
				} else {
					const data = [];
					mythic && data.push("M");
					data.push(feat);
					if(fn && parens) {
						data.push(doConvert(`<sup>${fn}</sup> (${parens})`));
					} else if(fn) {
						data.push(doConvert(`<sup>${fn}</sup>`));
					} else if(parens) {
						data.push(doConvert(` (${parens})`));
					}
				}
			} else {
				log(`Unable to parse feat [${item}]`);
			}
		}
		return found;
	};
	//
	// ATTRIBUTES LINE
	//
//	output.push(`<strong>Str</strong> ${str}, <strong>Dex</strong> ${dex}, <strong>Con</strong> ${con}, <strong>Int</strong> ${int}, <strong>Wis</strong> ${wis}, <strong>Cha</strong> ${cha}`);
	const atts = [];
	if(str === "-") {
		atts.push(0);
	} else if (typeof str === "string") {
		const m = str.match(/^- \(([0-9]+) while corporeal\)/);
		if(m) {
			atts.push(0 - Math.floor(Number(m[1])));
		} else {
			log(`Invalid str [${str}]`);
		}
	} else if(typeof str !== "number" || str <= 0) {
		log(`Invalid str [${str}]`);
	} else {
		atts.push(str);
	}
	if(typeof dex === "number" && dex >= 1) {
		atts.push(dex);
	} else {
		log(`Invalid dex [${dex}]`);
	}
	if(typeof con === "number" && con >= 1) {
		atts.push(con)
	} else if (con === "-") {
		atts.push(0);
	} else {
		log(`Invalid con [${con}]`);
	}
	if(typeof int === "number" && int >= 1) {
		atts.push(int);
	} else if (int === "-") {
		atts.push(0);
	} else {
		log(`Invalid int [${int}]`);
	}
	if(typeof wis === "number" && wis >= 1) {
		atts.push(wis);
	} else {
		log(`Invalid wis [${wis}]`);
	}
	if(typeof cha === "number" && cha >= 1) {
		atts.push(cha);
	} else {
		log(`Invalid cha [${cha}]`);
	}
	output.push(`atts={[${atts.join(",")}]}`);
	//
	// BAB/CMB/CMD LINE
	//
//	output.push(`<strong>Base Atk</strong> ${bab}; <strong>CMB</strong> ${cmb}; <strong>CMD</strong> ${cmd}`)
	if(typeof bab === "number") {
		output.push(`bab={${bab}}`);
	} else if (bab.startsWith("+")) {
		output.push(`bab={${Math.floor(Number(bab.slice(1)))}}`);
	}
	if(typeof cmb === "number") {
		output.push(`cmb={${cmb}}`);
	} else if(cmb === "-") {
		output.push("cmb={null}")
	} else {
		const m = cmb.match(/^\+?(-?[0-9]+)(?: \((.*)\))?$/);
		if(m) {
			output.push(`cmb={${Math.floor(Number(m[1]))}}`);
			m[2] && output.push(`cmbP="${m[2]}"`);
		} else {
			log(`Invalid cmb format [${cmb}]`);
		}
	}
	if(typeof cmd === "number") {
		output.push(`cmd={${cmd}}`);
	} else if(cmd === "-") {
		output.push("cmd={null}")
	} else {
		const m = cmd.match(/^(-?[0-9]+)(?: \((.*)\))$/);
		if(m) {
			output.push(`cmd={${Math.floor(Number(m[1]))}}`);
			m[2] && output.push(`cmdP="${m[2]}"`);
		} else {
			log(`Invalid cmd format [${cmd}]`);
		}
	}
	//
	// FEATS LINE
	//
	if(feats) {
		output.push(`feats={${JSON.stringify(parseFeats(feats))}}`);
	}
	//
	// SKILLS LINE
	//
	if(skills) {
//		output.push(`<strong>Skills</strong> ${skills.split(/~/).join(", ")}${racial ? `; <strong>Racial Modifiers</strong> ${racial}` : ""}`);
		const total = {};
		const s = skills.split(/~/);
		s.forEach(skill => {
			const [sk, ...data] = skill.split(/[|]/);
			const obj = {};
			switch(sk) {
				case "craft":
				case "perf":
				case "prof":
				case "k":{
					const ps = ["of", "b", "p"];
					while(data.length > 0) {
						const p = ps.shift();
						const v = data.shift();
						if(p === "b" && v) {
							obj.b = Math.floor(Number(v));
						} else if (v) {
							obj[p] = v;
						}
					}
					break;
				}
				default: {
					const ps = ["b", "p"];
					while(data.length > 0) {
						const p = ps.shift();
						const v = data.shift();
						if(p === "b" && v) {
							obj.b = Math.floor(Number(v));
						} else if (v) {
							obj[p] = v;
						}
					}
				}
			}
			total[sk] = obj;
		});
		output.push(`skills={${
			JSON.stringify(total)
		}}`);
		racial && output.push(`racial="${racial}"`)
	} else if (racial) {
		log("Extraneous racial prop without skills prop");
	}
	//
	// LANGUAGES LINE
	//
	if(lang) {
		if(lang === "none") {
			output.push(`lang={null}`);
		} else {
			const found = [];
			const [normal, special] = lang.split(/~~/);
			normal.split(/~/).forEach(l => {
				if(l.match(/^(A[bkquOnz]?|ALL|[BEONU]|C[ey]?|D[Frw]?|G[lmb]?|Ht?|Ig?|Po?|S[hx]?|Th?)X?$/)) {
					found.push(l);
				} else {
					found.push([doConvert(l)]);
				}
			});
			if(special) {
				found.push(";", [doConvert(special)]);
			}
			output.push(`lang={${JSON.stringify(found)}}`);
		}
	}
	//
	// SQ LINE
	//
	if(sq) {
		output.push(`sq={${doConvert(sq, true)}}`);
	}
	//
	// COMBAT/OTHER GEAR LINE
	//
	if(combat) {
		output.push(`combat={${doConvert(combat, true)}}`);
		othergear && output.push(`othergear={${doConvert(othergear, true)}}`);
	} else if (gear) {
		output.push(`gear={${doConvert(gear, true)}}`);
		othergear && log("Extraneous othergear prop");
	} else if (othergear) {
		log("Extraneous othergear prop");
	}
	//
	// FAITH LINE
	//
	faith && output.push(`faith="${faith}"`);
	next && output.push("hasNeighbor");
	return flag ?
		`${maybeClear}<Header sub>Statistics</Header>\n<Stats id="${id}" ${output.join(" ")} />\n`
	: "<Header sub>Statistics</Header><p><em>Error.</em></p>\n";
};

export default makeMonsterStatisticsBlock;
