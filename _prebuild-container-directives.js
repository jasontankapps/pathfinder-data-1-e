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
					const marked2 = makeNewMarkedInstance();
					flags.thlink = true;
					flags.icon = true;
					return (
						`<div className="sideNoteWrap elephant"><table><tbody><tr><ThLink scope="row" to="/rule/the_elephant_in_the_room"><IonIcon aria-label="The Elephant in the Room" icon="/icons/elephant.svg" /></ThLink><td>${removeCurlyBrackets(marked2.parse(text))}</td></tr></tbody></table></div>`
					);
				}
			}
			return false;
		}
	};
};

export default getContainerDirectives;
