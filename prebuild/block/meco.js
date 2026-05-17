import noteTags from "../noteTags.js";

const parseTreasure = (type, input, flags) => {
	const incoming = input.split(/~/);
	const items = [];
	let final = false;
	incoming.forEach(item => {
		if(item.startsWith("!")) {
			final = noteTags(flags, item.slice(1));
			return;
		}
		const bits = item.split(/\|/);
		items.push(bits);
	});
	return final ? { [type]: items, final } : { [type]: items };
};

export const makeMonsterEcologyBlock = ({marked2, flags, convertEncodedInfo, maybeClear, attrs, logError, id}) => {
	const {
		env, org, treasure
	} = attrs;
	const output = [];
	const doConvert = (input, stringify = true) => noteTags(flags, marked2.parseInline(convertEncodedInfo(input)), stringify);
	//
	// ENVIRONMENT LINE
	//
	if(env) {
		output.push(`env={${doConvert(env)}}`.replace(/\{"([^"]+)"\}/g, '"$1"'));
	} else {
		logError("Missing environment");
		return "<Header sub>Ecology</Header>\n<p>Error.</p>\n";
	}
	//
	// ORGANIZATION LINE
	//
	org && output.push(`org={${doConvert(org)}}`.replace(/\{"([^"]+)"\}/g, '"$1"'));
	//
	// TREASURE LINE
	//
	if(treasure) {
		const m = treasure.match(/^([SDTXIN!])(?:=(.*))?$/);
		if(m) {
			const [,type,parens] = m;
			if(parens) {
				const p = type === "!" ? "other" : type;
				output.push(`treasure={${
					type === "!"
						? `{"other":${doConvert(parens)}}`
						: JSON.stringify(parseTreasure(p, parens, flags))
				}}`)
			}
			//
		} else {
			output.push(`treasure={{"${treasure}": false}}`);
		}
	}
	return `${maybeClear}<Header sub>Ecology</Header>\n<Ecology id="${id + "-eco"}" ${output.join(" ")} />\n`;
};

export default makeMonsterEcologyBlock;
