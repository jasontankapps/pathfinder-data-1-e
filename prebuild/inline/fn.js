import checkForEncodedLink from "../tests/checkForEncodedLink.js";

const convertEncodedInfo = (input) => {
	let m;
	let test = input;
	let output = "";
	while(m = checkForEncodedLink(test)) {
		const {pre, link, text, post} = m;
		output = output + `${pre}[${text}](${link})`;
		test = post;
	}
	return (output + test)
		.replace(/&(times|quot|[nm]dash|deg|[dD]agger|#[0-9]+|#x[0-9a-fA-F]+)&/g, "&$1;");
};

const fn = ({text, from, multi, prefix, makeNewMarkedInstance, flags}) => {
	// Fake footnotes
	flags.innerlink = true;
	if(from) {
		// This is the main footnote itself.
		const marked2 = makeNewMarkedInstance();
		const id = `${prefix}fake-fn-${from}`;
		const final = [
			`<InnerLink aria-label="Back to reference ${from}" id="backlink-${id}" data-hash-target to="${id}">↩</InnerLink>`
		];
		let m = Number(multi) || 0;
		let n = 2;
		while(n <= m) {
			const id2 = `${id}.${n}`;
			final.push(`<InnerLink aria-label="Back to reference ${from}" id="backlink-${id2}" data-hash-target to="${id2}">↩<sup>${n}</sup></InnerLink>`);
			n++;
		}
		return `<li id="${id}-target"><p>${marked2.parseInline(convertEncodedInfo(text))} ${final.join(" ")}</p></li>`;
	}
	// This is the pointer to the footnote.
	const m = text.match(/^(.+)-([0-9]+)$/)
	if(m) {
		// Multiple pointers to same footnote.
		const id = `${prefix}fake-fn-${m[1]}`;
		return `<sup><InnerLink showBacklink="backlink-${id}.${m[2]}" id="${id}.${m[2]}" data-hash-target to="${id}-target">${m[1]}</InnerLink></sup>`;
	}
	const id = `${prefix}fake-fn-${text}${multi ? `.${multi}` : ""}`;
	return `<sup><InnerLink showBacklink="backlink-${id}" id="${id}" data-hash-target to="${id}-target">${text}</InnerLink></sup>`;
};

export default fn;
