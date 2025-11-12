import ordinal from "../ordinal.js";

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
	temp
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
	if(all || all0) {
		const incoming = (all || all0).split(/~/);
		const mod = all ? 1 : 0;
		for(let c = 0; c <= 9; c++) {
			if(all && !c) {
				continue;
			}
			const cc = c - mod;
			const x = String(c);
			const [spell, paren] = incoming[cc].split("|");
			base[x] = [spell, paren];
			output.push(
				`<th scope="row">${ordinal(c)}</th><td>`
				+ marked2.parseInline(`@ripple[spell/${spell}]`)
				+ `${paren ? ` (${doParse(paren)})` : ""}</td>`
			);
		}
	} else {
		// Base should have the info already (if any)
		const pairs = [[0, l0], [1, l1], [2, l2], [3, l3], [4, l4], [5, l5], [6, l6], [7, l7], [8, l8], [9, l9]];
		pairs.forEach(([n, incoming]) => {
			const x = String(n);
			if(incoming) {
				const [spell, paren] = incoming.split("|");
				base[x] = [spell, paren];
			}
			const now = base[x];
			if(now) {
				const [spell, paren] = now;
				output.push(
					`<th scope="row">${ordinal(n)}</th><td>`
					+ ((from && incoming)
						? (
							marked2.parseInline(`@ripple[spell/${spell}]`)
							+ `${paren ? ` (${doParse(paren)})` : ""}`
						)
						: (
							`<em>${spell}`
							+ `${paren ? ` (${doParse(paren)})` : ""}</em>`
						)
					)
					+ `</td>`
				);
			}
		})
	}
	if(save) {
		temp[save] = base;
	}
	if(extra) {
		output.push(`<td colSpan={2}>${doParse(extra)}</td>`);
	}

	return `${maybeClear}<table className="basic spellList">`
		+ (text ? `<thead><tr><th colSpan={2}>${doParse(text)}</th></tr></thead>` : "")
		+ `<tbody><tr>`
		+ `${output.join("</tr>\n<tr>")}</tr></tbody></table>`;
};

export default makeSpellListBlock;
