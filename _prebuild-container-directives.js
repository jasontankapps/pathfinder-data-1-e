import { convertTextToLink } from './tests/checkForEncodedLink.js';

const getContainerDirectives = (globalVariable, marker = ":::") => {
	const $ = globalVariable;
		return {
		level: "container",
		marker,
		renderer: (token) => {
			const {flags, makeNewMarkedInstance, removeCurlyBrackets} = $;
			const {text = "", attrs = {}, meta} = token;
			const n = meta.name;
			let link, label, icon;
			switch(n) {
				case "archetype": {
					const { c = "" } = attrs;
					const trimmed = text.trim();
					const [ title = "", repl = "", desc = "" ] = trimmed.split(/\n+/);
					const link = convertTextToLink(title);
					flags.link = true;
					const marked2 = makeNewMarkedInstance();
					return `<div className="archetype">`
						+ `<p><Link to="/arc-${c}/${link}">${removeCurlyBrackets(marked2.parseInline(title), true)}</Link></p>`
						+ `<p><strong>Modifes or Replaces:</strong> ${removeCurlyBrackets(marked2.parseInline(repl), true)}</p>`
						+ `<p>${removeCurlyBrackets(marked2.parseInline(desc), true)}</p>`
						+ `</div>\n`;
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
				case "elephant": {
					link = "/rule/the_elephant_in_the_room";
					icon = "elephant.svg";
					label = "The Elephant in the Room";
					// Pass-through
				}
				case "mythic": {
					link = link || "/rule/mythic_rules";
					icon = icon || "ancient-sword.svg";
					label = label || "Mythic Rules";
					// Pass-through
				}
				case "stamina": {
					link = link || "/feat/combat_stamina";
					icon = icon || "shield-bash.svg";
					label = label || "Combat Tricks and Stamina";
					const title = attrs.title ? `<th scope="col">${attrs.title}</th></tr><tr>` : "";
					const rowspan = title ? ` rowSpan={2}` : "";
					const marked2 = makeNewMarkedInstance();
					flags.thlink = true;
					flags.icon = true;
					return (
						`<div className="sideNoteWrap singular"><table><tbody><tr><ThLink scope="row" to="${link}"${rowspan}><IonIcon aria-label="${label}" icon="/icons/${icon}" /></ThLink>${title}<td>${removeCurlyBrackets(marked2.parse(text))}</td></tr></tbody></table></div>`
					);
				}
			}
			return false;
		}
	};
};

export default getContainerDirectives;
