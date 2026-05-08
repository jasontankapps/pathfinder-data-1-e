const convertQuotes = (input) => {
	const q = input.match(/"|&quot[&;]/);
	const a = input.match(/'|&(apos|#39)[&;]/);
	if (q && a) {
		return "`" + input + "`";
	} else if(q) {
		return "'" + input + "'";
	}
	return `"${input}"`;
};

const convertToHtmlArrayKludge = (input) => {
	if(!input || !input.match(/[<>‹›]/)) {
		return convertQuotes(input || "");
	}
	let m;
	let test = input;
	const output = [];
	while(m = test.match(/^(.*?)<([^ <>]+) ?([^<>]*)>([^<>]*)<[/]\2>(.*)$/)) {
		const [, pre, tag, p, content, post] = m;
		const props = {};
		if(p) {
			let test = p;
			while(m = test.match(/^([^=]+)="([^"]*)"(.*)$/)) {
				const [, att, value, post] = m;
				test = post;
				props[att] = value;
			}
		}
		output.push(pre, {
			tag,
			content,
			props
		});
		test = post;
	}
	const cycle = [...output, test];
	const output2 = [];
	while(cycle.length > 0) {
		const bit = cycle.shift();
		if(typeof bit !== "string") {
			output2.push(bit);
			continue;
		}
		let test = bit;
		while(m = checkForEncodedLink(test)) {
			const { pre, link, text, post } = m;
			output2.push(pre, {
				tag: "Link",
				props: {to: "/" + link},
				content: text
			});
			test = post;
		}
		test && output2.push(test);
	}
	return JSON.stringify(output2);
};

export default convertToHtmlArrayKludge;
