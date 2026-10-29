import { FC } from 'react';
import Link from './Link';
import Tabular from './Tabular';

interface MessageProps {
	spelldeitynote?: boolean
	altCapstoneDesc?: boolean
	archetypeDesc?: boolean
	lesserOrders?: boolean
	lamellar?: boolean
	lightShield?: boolean
	heavyShield?: boolean
	tearaway?: boolean
}

const Message: FC<MessageProps> = (props) => {
	const {
		spelldeitynote, altCapstoneDesc, archetypeDesc,
		lesserOrders, lamellar, lightShield, heavyShield,
		tearaway
	} = props;
	if(spelldeitynote) {
		return <aside>Some spells are more common among the worshipers of a god. Worshipers of a spell's associated deity always treat the spell as common, and need not research it in order to prepare or learn it. This spell is available to members of other faiths, though some temples or religious organizations may proscribe the use of specific spells. -- <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 228</Link></aside>;
	} else if (altCapstoneDesc) {
		return <p><strong>Source</strong> <Link to="/source/advanced_players_guide">Chronicle of Legends</Link> pg. 28<br />When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>;
	} else if (archetypeDesc) {
		return <>
			<p><strong>Source</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> pg. 72<br />From the noble paladin to the skillful rogue, each class draws upon a central archetype. Yet, beyond that basic concept exists the potential for innumerable interpretations, details, and refinements; and some archetypes prove pervasive and exciting enough to see use in play time and time again.</p>
			<p>To help players interested in creating iconic fantasy characters, <strong className="hl"><Link to="/rule/archetypes">archetypes</Link></strong> were introduced. These optional features represent a unique view of what a class deliberately designed to capture a specific character archetype might become. While the types of options presented for each class differ, each subsystem is customized to best serve that class, emulate the abilities and talents of classic fantasy archetypes, and expand players' freedom to design exactly the characters they desire.</p>
		</>;
	} else if (lesserOrders) {
		return <>
			<h3>Lesser Orders</h3>
			<p>Lesser Hellknight orders usually consist of only a few dozen members. Some are long-lived remnant groups that the major orders have sanctioned. Others are offshoots of the larger orders. Still others are pretenders; they are Hellknights in name only, but consider themselves no less legitimate than any of the other orders. Regardless of their status, lesser orders are not represented in the Council of Lictors unless their leaders are specifically invited to attend, usually to serve a specific advisory or other tertiary role in the gathering. However, despite all of this, the Hellknights of major orders do not look down upon members of minor orders - after all, doing so would show a lack of emotional discipline - but neither do they go out of their way to aid them, as they might assist members of major orders. The Hellknights of major orders often closely watch the members of minor orders, holding them accountable not just for crimes but for deeds that might tarnish the Hellknight name.</p>
			<p>Each entry notes the major order to which it is most similar. This analogous order does not necessarily share any special relationship with the lesser order, but players who wish to create a character who is a member of a lesser order should look to the corresponding order to fill in specifics that these summaries don't detail, such as the boons accessible through the <Link to="/feat/hellknight_obedience">Hellknight Obedience</Link> feat.</p>
		</>;
	} else if (lamellar) {
		return (
			<p><Link to="/eq-armor/lamellar">Lamellar</Link> is a type of armor in which small plates of various types of materials are strung together in parallel rows using fine cord. Lamellar plates can be constructed from lacquered leather, horn, or even stone, though suits of iron and steel are the most common. Lamellar armor can be crafted into various shapes, including partial pieces such as breastplates, greaves, or even entire coats. The properties of specific suits and pieces of lamellar armor are determined by their material.</p>
		);
	} else if (lightShield || heavyShield) {
		const size = lightShield ? "light" : "heavy";
		const type = lightShield ? "light" : "one-handed";
		return (
			<p><strong className="hl">Shield Bash Attacks:</strong> You can bash an opponent with a {size} shield. Used this way, a {size} shield is a martial bludgeoning weapon. For the purpose of penalties on attack rolls, treat a {size} shield as a {type} weapon. If you use your shield as a weapon, you lose its AC bonus until your next turn. An enhancement bonus on a shield does not improve the effectiveness of a shield bash made with it, but the shield can be made into a magic weapon in its own right.</p>
		);
	} else if (tearaway) {
		return (<>
			<h3>Tear-Away Clothing</h3>
			<p><Link to="/source/ultimate_equipment">Ultimate Equipment</Link> pg. 89; <Link to="/source/adventurers_armory">Adventurer's Armory</Link> pg. 19</p>
			<Tabular format="misc" a={5} b={0} c="M" d="cloth" />
			<p>Sneaks and thieves know the value of a good disguise. The ability to remove that disguise in a hurry, thus revealing the next layer of disguise, is nearly as valuable. Tear-away clothing is generally loose fitting and allows another layer of clothing to be worn underneath. The seams on this clothing are designed to break easily, making it a simple matter (a @HL[standard action]) to remove these items and walk away with none the wiser. Any outfit can be crafted as tear-away clothing for an additional price.</p>
		</>);
	}
	return (
		<p>MISSING MESSAGE</p>
	);
};

export default Message;
