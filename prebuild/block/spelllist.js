import ordinal from "../ordinal.js";
import { convertTextToLink } from "../tests/checkForEncodedLink.js";

const $all0 = {
	"0": undefined,
	"1": undefined,
	"2": undefined,
	"3": undefined,
	"4": undefined,
	"5": undefined,
	"6": undefined,
	"7": undefined,
	"8": undefined,
	"9": undefined
};
const $all = {...$all0};
delete $all["0"];

export const makeSpellListBlock = ({
	marked2,
	text,
	convertEncodedInfo,
	maybeClear,
	attrs,
	temp,
	id
}) => {
	const {
		all, all0, save, from, extra,
		l1, l2, l3,
		l4, l5, l6,
		l7, l8, l9, l0
	} = attrs;
	const output = [];
	const doParse = (input) => marked2.parseInline(convertEncodedInfo(input));
	const base = {...(from ? temp[from] : (all ? $all : $all0))};
	if(from) {
		output.push(`count={${++temp[from].count}}`);
	}
	if(all || all0) {
		const incoming = (all || all0).split("~");
		const links = [];
		for(let c = 0; c <= 9; c++) {
			if(all && !c) {
				incoming.unshift(null);
				continue;
			}
			const [spell, paren] = incoming[c].split("|");
			base[String(c)] = [spell, paren];
			const final = [`${c},"${spell}","${convertTextToLink(spell)}"`];
			paren && final.push(`<>${doParse(paren)}</>`);
			links.push(`[${final.join(",")}]`);
		}
		all0 && output.push("all0");
		output.push(`links={[${links.join(",")}]}`)
	} else {
		// Base should have the info already (if any)
		const pairs = [[0, l0], [1, l1], [2, l2], [3, l3], [4, l4], [5, l5], [6, l6], [7, l7], [8, l8], [9, l9]];
		const links = [];
		pairs.forEach(([n, incoming]) => {
			const x = String(n);
			if(incoming) {
				const [spell, paren] = incoming.split("|");
				base[x] = [spell, paren];
			}
			const now = base[x];
			if(now) {
				const [spell, paren] = now;
				const final = [`${n},"${spell}"`];
				final.push(
					(from && incoming) ? `"${convertTextToLink(spell)}"` : "false"
				);
				paren && final.push(`<>${doParse(paren)}</>`);
				links.push(`[${final.join(",")}]`);
			}
		});
		output.push(`links={[${links.join(",")}]}`)
	}
	if(save) {
		temp[save] = {...base, count: 0};
	}
	if(extra) {
		output.push(`extra={<>${doParse(extra)}</>}`);
	}

	return `${maybeClear}<SpellList id="${id}" ${output.join(" ")}>${text}</SpellList>\n`;
};

export default makeSpellListBlock;
