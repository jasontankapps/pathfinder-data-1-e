import { convertTextToLink } from './tests/checkForEncodedLink.js';

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
			let link, label, icon, title, id;
			switch(n) {
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
				case "fakeFootnotes": {
					const marked2 = makeNewMarkedInstance();
					return (
						`<section data-footnotes><h3 id="${$.prefix}label">Footnotes</h3><ol>${removeCurlyBrackets(marked2.parseInline(text))}</ol></section>`
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
				case "div": {
					const { className = "" } = attrs;
					const marked2 = makeNewMarkedInstance();
					return (
						`<div className="${className}">${removeCurlyBrackets(marked2.parse(text))}</div>`
					);
				}
				case "stamina": {
					link = "/feat/combat_stamina";
					icon = "shield-bash.svg";
					label = "Combat Tricks and Stamina";
					id = prefix + "combat_trick";
					jl && addToJumpList("Combat Trick", id, jl);
					title = `<th scope="col"${id ? ` id="${id}" data-hash-target` : ""}>Combat Trick</th></tr><tr>`;
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
						`<div className="sideNoteWrap singular optional ${n}"><table><tbody><tr><ThLink scope="row" to="${link}"${rowspan}><IonIcon aria-label="${label}" icon="/icons/${icon}" /></ThLink>${title}<td>${removeCurlyBrackets(marked2.parse(text))}</td></tr></tbody></table></div>`
					);
				}
			}
			return false;
		}
	};
};

export default getContainerDirectives;
