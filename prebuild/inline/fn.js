import checkForEncodedLink from "../tests/checkForEncodedLink.js";

const convertEncodedInfo = (input) => {
	let m;
	let test = input;
	let output = "";
	while(m = checkForEncodedLink(test)) {
		const [pre, fulllink, text, post] = m;
		output = output + `${pre}[${text}](${fulllink})`;
		test = post;
	}
	return (output + test)
		.replace(/&(times|quot|[nm]dash|deg|[dD]agger|#[0-9]+|#x[0-9a-fA-F]+)&/g, "&$1;");
};

const fn = ({text, from, prefix, makeNewMarkedInstance, flags}) => {
	// Fake footnotes
	flags.innerlink = true;
	if(from) {
		const marked2 = makeNewMarkedInstance();
		const id = `${prefix}fake-fn-${from}`;
		return `<li id="${id}-target"><p>${marked2.parseInline(convertEncodedInfo(text))} <InnerLink aria-label="Back to reference ${from}" id="backlink-${id}" data-hash-target to="${id}">↩</InnerLink></p></li>`;
	}
	const id = `${prefix}fake-fn-${text}`;
	return `<sup><InnerLink showBacklink="backlink-${id}" id="${id}" data-hash-target to="${id}-target">${text}</InnerLink></sup>`;
};

export default fn;
