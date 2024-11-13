export const convertLinks = (input: string[]): string => {
	// Converts {some/Link: Text} into [Link: Text](some/link_text)
	let output: string[] = [];
	let m: RegExpMatchArray | null = null;
	input.forEach(line => {
		let converted = "";
		let base = line;
		while(m = base.match(/(^.*?)\{([-a-z]+)\/([^}]+)\}(.*$)/)) {
			const link = m[3].toLowerCase().replace(/ /g, "_").replace(/[^-a-z_0-9]/g, "");
			base = m[4];
			converted = converted + `${m[1]}[${m[3]}](${m[2]}/${link})`;
		}
		output.push(converted + base);
	});
	return output.join("\n");
};

export default convertLinks;
