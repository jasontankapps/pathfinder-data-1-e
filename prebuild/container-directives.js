import checkForEncodedLink, { convertTextToLink } from './tests/checkForEncodedLink.js';
import makeAbilityBlock from './block/ab.js';

const convertEncodedInfo = (input) => {
	let m;
	let test = input.replace(/\n/g, "-=NR=-");
	let output = "";
	while(m = checkForEncodedLink(test)) {
		const {pre, link, text, post} = m;
		output += `${pre}[${text}](${link})`;
		test = post;
	}
	return (output + test)
		.replace(/&(times|quot|emsp|[nm]dash|deg|amp|shy|[dD]agger|[aeiou](?:acute|grave|circ|uml)|#[0-9]+|#x[0-9a-fA-F]+)&/g, "&$1;")
		.replace(/-=NR=-/g, "\n");
};

const convertLinks = (input) => {
	let m;
	let test = input.replace(/\n/g, "-=NR=-");
	let output = "";
	while(m = checkForEncodedLink(test)) {
		const {pre, link, text, post} = m;
		output += `${pre}[${text}](${link})`;
		test = post;
	}
	return (output + test)
		.replaceAll("-=NR=-", "\n");
};

const convertEntities = (input) => {
	return (input)
		.replace(/&(times|quot|emsp|[nm]dash|deg|amp|shy|[dD]agger|[aeiou](?:acute|grave|circ|uml)|#[0-9]+|#x[0-9a-fA-F]+)&/g, "&$1;");
};

const getContainerDirectives = (globalVariable, marker = ":::") => {
	const $ = globalVariable;
	return {
		level: "container",
		marker,
		renderer: (token) => {
			const {prefix, flags, makeNewMarkedInstance, removeCurlyBrackets, addToJumpList} = $;
			const {text = "", attrs = {}, meta} = token;
			const {jl} = attrs;
			const n = meta.name;
			// variables used by pass-throughs
			let link, label, icon, title, id;
			switch(n) {
				case "ab": {
					const marked2 = makeNewMarkedInstance();
					flags.ability = true;
					const {logError} = $;
					const {title, action, ...etc} = attrs;
					if(!action) {
						logError("Missing action attribute in :::ab");
					}
					let text2 = text;
					const myAttrs = {
						containerInfo: {
							action,
							contents: removeCurlyBrackets(
									marked2.parse(text2), true
								)
						},
						...etc
					};
					const jlid = (
						attrs.id
						|| title.toLowerCase().replace(/ +/g, "-").replace(/[^-a-z0-9]/g, "")
					);
					if(jl) {
						addToJumpList(title, prefix + jlid, jl);
					}
					return makeAbilityBlock({
						marked2,
						prefix,
						jlid,
						text: title,
						convertEncodedInfo,
						maybeClear: "",
						flags,
						attrs: myAttrs,
						logError
					});
				}
				case "item": {
					flags.item = true;
					flags.label = true;
					const marked2 = makeNewMarkedInstance();
					return (
						`<IonItem className="mainItem basic"><IonLabel>${
							removeCurlyBrackets(marked2.parse(text))
						}</IonLabel></IonItem>`
					);
				}
				case "block": {
					flags.block = true;
					const marked2 = makeNewMarkedInstance();
					const {title, hl, classes, size, clear, jl} = attrs;
					let base = "";
					switch(size) {
						case "minimal": // min-content :: 1
						case "simple":  // max-content :: 1
						case "tiny":  // 1 :: 7
						case "big":   // 2 :: 3
						case "giant": // 7 :: 1
						case "small": // 1 :: 5
							base = ` size="${size}"`;
					}
					const props = (
						base
					) + (
						hl ? " hl" : ""
					) + (
						classes ? ` classes="${classes}"` : ""
					);
					let id = "";
					if(title && jl) {
						id = (
							attrs.id
							|| title.toLowerCase()
								.replace(/ +/g, "-")
								.replace(/[^-a-z0-9]/g, "")
						);
						addToJumpList(title, prefix + id, jl);
					}
					return (
						(clear ? `<div style={{clear:"both"}}></div>\n` : "") + 
						(title ? (
							`<Block titled${props}><Row><Cell${id ? ` id="${id}"` : ""}>${
								convertEntities(marked2.parse(convertLinks(title)))
							}</Cell></Row>${
								convertEntities(marked2.parse(convertLinks(text)))
							}</Block>\n`
						) : (
							`<Block${props}>${
								convertEntities(marked2.parse(convertLinks(text)))
							}</Block>\n`
						))
					);
				}
				case "group": {
					const marked2 = makeNewMarkedInstance();
					return `<div className="semiheaderGroup">${marked2.parse(text)}</div>\n`;
				}
				case "fakeFootnotes": {
					const marked2 = makeNewMarkedInstance();
					return (
						`<section data-footnotes><h3 id="${
							$.prefix
						}label">Footnotes</h3><ol>${
							removeCurlyBrackets(marked2.parseInline(text))
						}</ol></section>`
					);
				}
				case "aside": {
					const marked2 = makeNewMarkedInstance();
					return (
						`<aside>${removeCurlyBrackets(marked2.parse(text))}</aside>`
					);
				}
				case "compress": {
					const marked2 = makeNewMarkedInstance();
					return (
						`<div className="compressed">${removeCurlyBrackets(marked2.parse(text))}</div>`
					);
				}
				case "stamina": {
					link = "/feat/combat_stamina";
					icon = "shield-bash.svg";
					label = "Combat Tricks and Stamina";
					id = prefix + "combat_trick";
					jl && addToJumpList("Combat Trick", id, jl);
					title = `<th scope="col"${
						id ? ` id="${id}" data-hash-target` : ""
					}>Combat Trick</th></tr><tr>`;
					// Pass-through
				}
				case "elephant": {
					link = link || "/rule/the_elephant_in_the_room";
					icon = icon || "elephant.svg";
					label = label || "The Elephant in the Room";
					// Pass-through
				}
				case "mythic": {
					link = link || "/rule/mythic_feats";
					icon = icon || "ancient-sword.svg";
					label = label || "Mythic Rules";
					if(!title) {
						const t = attrs.title;
						if(t) {
							if(jl) {
								id = prefix + convertTextToLink(t);
								addToJumpList(t, id, jl);
							}
							title = `<th scope="col"${id ? ` id="${id}" data-hash-target` : ""}>${t}</th></tr><tr>`;
						} else {
							title = "";
						}
					}
					const rowspan = title ? ` rowSpan={2}` : "";
					const marked2 = makeNewMarkedInstance();
					flags.thlink = true;
					flags.icon = true;
					return (
						`<div className="sideNoteWrap singular optional ${
							n
						}"><table><tbody><tr><ThLink scope="row" to="${
							link
						}"${
							rowspan
						}><IonIcon aria-label="${
							label
						}" icon="/icons/${
							icon
						}" /></ThLink>${
							title
						}<td>${
							removeCurlyBrackets(marked2.parse(text))
						}</td></tr></tbody></table></div>`
					);
				}
				case "div": {
					const {className} = attrs;
					const marked2 = makeNewMarkedInstance();
					return (
						`<div${className ? ` className="${className}"` : ""}>\n${removeCurlyBrackets(marked2.parse(text))}\n</div>\n`
					);
				}
				case "blockquote": {
					// Known tag
					return false;
				}
			}
			console.log("missing container directive [", n, "] in [", prefix, "]");
			return false;
		}
	};
};

export default getContainerDirectives;
