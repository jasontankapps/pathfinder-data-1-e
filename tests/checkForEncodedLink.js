// Basic link format:
//   {rule/Link text} => [Link text](rule/link_text)
// The first part, up to and including the slash, is used verbatim.
// The rest of the text is converted to a link following these steps:
//   All letters are converted to lowercase
//   Spaces and dashes are turned into underscores
//   All other non-letter, non-number, non-underscore ccharacters are deleted
// Advanced forms:
//   A second slash adds to the text, not the link:
//     {rule/Link/ plus additional text} => [Link plus additional text](rule/link)
//   Using an actual slash in the text is possible, and it gets converted to an underscore in the link:
//     {rule/Link//Text} => [Link/Text](rule/link_text)
//   Using a pipe works like slash, but in reverse:
//     {rule/Additional text |link} => [Additional text link](rule/link)
//   Using > appends link-formatted text to the link:
//     {rule/Link>_2} => [Link](rule/link_2)
//   Using < prepends link-formatted text to the link:
//     {rule/special_<Link} => [Link](rule/special_link)
// The advanced forms can be used together in the order <|/>
//   {rule/special_<Pre |Link//Text/ Stuff>_info} => [Pre Link/Text Stuff](rule/special_link_text_info)

const checkForEncodedLink = (input) => {
	let m = input.match(/(^.*?)\{([-a-z_]+)\/([^}]+)\}(.*$)/);
	if(!m) {
		return false;
	}
	const [x, pre, protocol, matchedx, post] = m;
	let matched = matchedx, linkpre = "", linkpost = "", textpre = "", textpost = "";
	if(m = matched.match(/(^.+?)<(.+$)/)) {
		matched = m[2];
		linkpre = m[1];
	}
	if(m = matched.match(/(^.+)>(.+$)/)) {
		matched = m[1];
		linkpost = m[2];
	}
	while(m = matched.match(/(^.+?)\/\/(.+$)/)) {
		matched = `${m[1]}=slAsh=${m[2]}`;
	}
	if(m = matched.match(/(^.+?)\|(.+$)/)) {
		matched = m[2];
		textpre = m[1];
	}
	if(m = matched.match(/(^.+?)\/(.+$)/)) {
		matched = m[1];
		textpost = m[2];
	}
	const text = `${textpre}${matched}${textpost}`
		.replace(/=slAsh=/g, "/");
	const property = `${linkpre}${matched}${linkpost}`
		.replace(/[- ]|=slAsh=/g, "_")
		.toLowerCase()
		.replace(/[^a-z0-9_]/g, "");
	return [pre, `${protocol}/${property}`, text, post, protocol, property];
};

export default checkForEncodedLink;
