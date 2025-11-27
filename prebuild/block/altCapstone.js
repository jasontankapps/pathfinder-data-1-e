import ordinal from "../ordinal.js";
import writtenNumber from "written-number";

const abPairOpen = 	'<div className="abPair">';
const abPairStartOpen = '<div className="abStart"><div className="box">';
const abPairEndOpen = '<div className="abEnd"><div className="box">';
const abPairPartClose = "</div></div>";
const abPairClose = "</div>";

const all = [
	[ "Perfect Body, Flawless Mind (Ex)", "At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability." ],
	[ "The Boss (Ex)", "At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the ‹feat/Leadership› feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability." ],
	[ "With This Sword (Ex)", "At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a ‹rule/minor »artifact<s› and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability." ],
	[ "Won't Stay Dead (Ex)", "At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability." ]
];
const caps = {
	"deepMagics": ["Deep Magics (Su)", "At 20th level, the character's repertoire of spells deepens dramatically. She gains an additional spell known for each spell level she can cast. A character of any class with spells known can select this capstone." ],
	"walkingLibrary": ["Walking Library (Ex)", "At 20th level, the character becomes a small, mobile athenaeum of occult scraps and lore. The character adds 100 spell levels' worth of spells to his spellbook or familiar and gains a +4 insight bonus on all Knowledge skills. Characters of any class that prepares spells from a spellbook or familiar can select this ability." ],
	"greatBeast": ["Great Beast (Su)", "At 20th level, the character's ‹sidekick/animal companion› is a paragon of its kind - a hero and legend in its own right. The animal companion's Strength, Dexterity, Constitution, and Wisdom scores each increase by 4. This capstone is available to any class with an animal companion." ],
	"oldDogNewTricks": ["Old Dog, New Tricks (Ex)", "At 20th level, the character shows that a true warrior always has one more surprise the enemy hasn't seen. The character gains four ‹main/combat feat«s›. This capstone is available to characters of any class that gains at least four bonus combat feats." ],
	"kiSage": ["Ki Sage (Su)", "At 20th level, the character is fully attuned to his own body and the ki that flows within. The character gains two ‹ability/ki powers› from those available to the unchained monk, treating his character level as his monk level for the purpose of any requirements. In addition, his ki pool increases by four. This capstone is available to any class with a ki pool." ],
	"theRightSpot": ["The Right Spot (Ex)", "At 20th level, the character can hit an opponent's weak spot effortlessly. Once per round, the character can apply her sneak attack damage to an attack, even if the target is not flanked or denied its Dexterity bonus to AC. This does not allow the character to sneak attack targets that are immune to sneak attacks (such as oozes). This capstone is available for any class with the sneak attack class feature." ],
	"archFamiliar": ["Arch-Familiar (Su)", "At 20th level, the character's familiar is smarter and savvier than plenty of adventurers - and also more dangerous! The familiar's Intelligence increases by 5, and it gains 12 spells levels' worth of spell-like abilities (for example, three daily castings of ‹spell/greater invisibility›), drawn from spells its master can cast and using its master's caster levels, DCs, and so forth. This capstone is available to any class with a familiar." ],
	"soulChannel": ["Soul Channel (Su)", "At 20th level, the character can channel energy six additional times per day, and her channel energy dice increase by one step. This capstone is available to characters with the channel energy class feature." ],
};

export const makeCapstoneBlock = ({
	marked2,
	text,
	convertEncodedInfo,
	maybeClear,
	attrs
}) => {
	const {
		capstone,
		deepMagics, walkingLibrary, greatBeast,
		oldDogNewTricks, kiSage, theRightSpot,
		archFamiliar, soulChannel
	} = attrs;
	const output = [
		"<table><thead><tr><th scope=\"col\">Capstone</th><th scope=\"col\">Benefit</th></tr></thead>\n<tbody>"
	];
	const doParse = (input) => marked2.parseInline(convertEncodedInfo(input));

	const capstones = [...all];
	deepMagics && capstones.push(caps.deepMagics);
	walkingLibrary && capstones.push(caps.walkingLibrary);
	greatBeast && capstones.push(caps.greatBeast);
	oldDogNewTricks && capstones.push(caps.oldDogNewTricks);
	kiSage && capstones.push(caps.kiSage);
	theRightSpot && capstones.push(caps.theRightSpot);
	archFamiliar && capstones.push(caps.archFamiliar);
	soulChannel && capstones.push(caps.soulChannel);
	capstones.push([text, capstone]);
	capstones.sort((a, b) => a[0].localeCompare(b[0]));

	capstones.forEach(([title, benefit]) => {
		output.push(`<tr><td>${title}</td><td>${doParse(benefit)}</td></tr>`);
	});

	return `${maybeClear}${output.join("\n")}\n</tbody></table>\n`;
};

export default makeCapstoneBlock;
