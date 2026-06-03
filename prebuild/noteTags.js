import checkForEncodedLink from "./tests/checkForEncodedLink.js";

// This modifies the flags variable to note any special <tags> being used.
const noteTags = (flags, input, stringify = false) => {
	if(!input || !input.match(/[<>‹›]/)) {
		return stringify ? JSON.stringify(input || "") : (input || "");
	}
	let m;
	let test = input;
	let found = false;
	const output = [];
	while(!found && (m = test.match(/^(.*?)<([^ <>/]+) ?[^<>]*>(.*)$/))) {
		const [, pre, tag, post] = m;
		found = true;
		if(tag === "Link") {
			flags.link = true;
		} else if(tag === "InnerLink") {
			flags.innerlink = true;
		} else {
			found = false;
		}
		test = post;
	}
	test = input;
	if(checkForEncodedLink(test)) {
		flags.link = true;
		found = true;
	}
	if(stringify && !input.match(/^<([^ ]+)(?!.*<\1).*<[/]\1>$/)) {
		return `<>${input}</>`;
	}
	return input;
};

export default noteTags;
