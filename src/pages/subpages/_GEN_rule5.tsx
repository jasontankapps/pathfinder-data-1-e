import {IonRippleEffect} from '@ionic/react';
import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _combat = {title: "Combat", subtopics: ["how_combat_works","combat_statistics","actions_in_combat","injury_and_death","movement_position_and_distance","big_and_little_creatures_in_combat","combat_modifiers","special_attacks","conditions","special_abilities_2"], jsx: <><p>These topics provide an overview of combat in the Pathfinder game.</p>
</>};
const _how_combat_works = {title: "How Combat Works", parent_topics: ["combat"], siblings: ["how_combat_works","combat_statistics","actions_in_combat","injury_and_death","movement_position_and_distance","big_and_little_creatures_in_combat","combat_modifiers","special_attacks","conditions","special_abilities_2"], subtopics: ["the_combat_round","initiative","surprise"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 178</Link></p>
<p>Combat is cyclical; everybody acts in turn in a regular cycle of rounds. Combat follows this sequence:</p>
<ol>
<li><p>When combat begins, all combatants roll initiative.</p>
</li>
<li><p>Determine which characters are aware of their opponents. These characters can act during a surprise round. If all the characters are aware of their opponents, proceed with normal rounds. See the surprise section for more information.</p>
</li>
<li><p>After the surprise round (if any), all combatants are ready to being the first normal round of combat.</p>
</li>
<li><p>Combatants act in initiative order (highest to lowest).</p>
</li>
<li><p>When everyone has had a turn, the next round begins with the combatant with the highest initiative, and steps 4 and 5 repeat until combat ends.</p>
</li>
</ol>
</>};
const _the_combat_round = {title: "The Combat Round", parent_topics: ["combat","how_combat_works"], siblings: ["the_combat_round","initiative","surprise"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 178</Link></p>
<p>Each round represents 6 seconds in the game world; there are 10 rounds in a minute of combat. A round normally allows each character involved in a combat situation to act.</p>
<p>Each round's activity begins with the character with the highest initiative result and then proceeds in order. When a character's turn comes up in the initiative sequence, that character performs his entire round's worth of actions. (For exceptions, see Attacks of Opportunity and Special Initiative Actions.)</p>
<p>When the rules refer to a "full round", they usually mean a span of time from a particular initiative count in one round to the same initiative count in the next round. Effects that last a certain number of rounds end just before the same initiative count that they began on.</p>
</>};
const _initiative = {title: "Initiative", parent_topics: ["combat","how_combat_works"], siblings: ["the_combat_round","initiative","surprise"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 178</Link></p>
<p>At the start of a battle, each combatant makes an initiative check. An initiative check is a Dexterity check. Each character applies his or her Dexterity modifier to the roll, as well as other modifiers from feats, spells, and other effects. Characters act in order, counting down from the highest result to the lowest. In every round that follows, the characters act in the same order (unless a character takes an action that results in his or her initiative changing; see Special Initiative Actions).</p>
<p>If two or more combatants have the same initiative check result, the combatants who are tied act in order of total initiative modifier (highest first). If there is still a tie, the tied characters should roll to determine which one of them goes before the other.</p>
<p><strong className="hl">Flat-Footed:</strong> At the start of a battle, before you have had a chance to act (specifically, before your first regular turn in the initiative order), you are flat-footed. You can't use your Dexterity bonus to AC (if any) while flat-footed. Barbarians and rogues of high enough level have the uncanny dodge extraordinary ability, which means that they cannot be caught flat-footed. Characters with uncanny dodge retain their Dexterity bonus to their AC and can make attacks of opportunity before they have acted in the first round of combat. A flat-footed character can't make attacks of opportunity, unless he has the <Link to="/feat/combat_reflexes">Combat Reflexes</Link> feat.</p>
<p><strong className="hl">Inaction:</strong> Even if you can't take actions, you retain your initiative score for the duration of the encounter.</p>
</>};
const _surprise = {title: "Surprise Round", parent_topics: ["combat","how_combat_works"], siblings: ["the_combat_round","initiative","surprise"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 178</Link></p>
<p>When a combat starts, if you are not aware of your opponents and they are aware of you, you're surprised.</p>
<p>Sometimes all the combatants on a side are aware of their opponents, sometimes none are, and sometimes only some of them are. Sometimes a few combatants on each side are aware and the other combatants on each side are unaware.</p>
<p>Determining awareness may call for Perception checks or other checks.</p>
<p><strong className="hl">The Surprise Round:</strong> If some but not all of the combatants are aware of their opponents, a surprise round happens before regular rounds begin. In initiative order (highest to lowest), combatants who started the battle aware of their opponents each take a standard or move action during the surprise round. You can also take free actions during the surprise round. If no one or everyone is surprised, no surprise round occurs.</p>
<p><strong className="hl">Unaware Combatants:</strong> Combatants who are unaware at the start of battle don't get to act in the surprise round. Unaware combatants are flat-footed because they have not acted yet, so they lose any Dexterity bonus to AC.</p>
</>};
const _combat_statistics = {title: "Combat Statistics", parent_topics: ["combat"], siblings: ["how_combat_works","combat_statistics","actions_in_combat","injury_and_death","movement_position_and_distance","big_and_little_creatures_in_combat","combat_modifiers","special_attacks","conditions","special_abilities_2"], subtopics: ["attack_roll","armor_class","damage","hit_points","attacks_of_opportunity","speed","saving_throws"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 178</Link></p>
<p>This section summarizes the statistics that determine success in combat, then details how to use them.</p>
</>};
const _attack_roll = {title: "Attack Roll and Attack Bonus", parent_topics: ["combat","combat_statistics"], siblings: ["attack_roll","armor_class","damage","hit_points","attacks_of_opportunity","speed","saving_throws"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 178</Link></p>
<p>An attack roll represents your attempt to strike your opponent on your turn in a round. When you make an attack roll, you roll a d20 and add your attack bonus. (Other modifiers may also apply to this roll.) If your result equals or beats the target's Armor Class, you hit and deal damage.</p>
<p><strong className="hl">Automatic Misses and Hits:</strong> A natural 1 (the d20 comes up 1) on an attack roll is always a miss. A natural 20 (the d20 comes up 20) is always a hit. A natural 20 is also a threat - a possible critical hit (see <Link to="/rule/attack">the attack action</Link>).</p>
<p>Your attack bonus with a melee weapon is the following:</p>
<blockquote>
<p>Base attack bonus + Strength modifier + size modifier</p>
</blockquote>
<p>With a ranged weapon, your attack bonus is the following:</p>
<blockquote>
<p>Base attack bonus + Dexterity modifier + size modifier + range penalty</p>
</blockquote>
</>};
const _armor_class = {title: "Armor Class", parent_topics: ["combat","combat_statistics"], siblings: ["attack_roll","armor_class","damage","hit_points","attacks_of_opportunity","speed","saving_throws"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 179</Link></p>
<p>Your Armor Class (AC) represents how hard it is for opponents to land a solid, damaging blow on you. It's the attack roll result that an opponent needs to achieve to hit you. Your AC is equal to the following:</p>
<blockquote>
<p>10 + armor bonus + shield bonus + Dexterity modifier + other modifiers</p>
</blockquote>
<p>Note that armor limits your Dexterity bonus, so if you're wearing armor, you might not be able to apply your whole Dexterity bonus to your AC.</p>
<p>Sometimes you can't use your Dexterity bonus (if you have one). If you can't react to a blow, you can't use your Dexterity bonus to AC. If you don't have a Dexterity bonus, your AC does not change.</p>
<h3 id="rule-armor_class-other-modifiers">Other Modifiers</h3>
<p>Many other factors modify your AC.</p>
<p><strong className="hl">Enhancement Bonuses:</strong> Enhancement bonuses apply to your armor to increase the armor bonus it provides.</p>
<p><strong className="hl">Deflection Bonus:</strong> Magical deflection effects ward off attacks and improve your AC.</p>
<p><strong className="hl">Natural Armor:</strong> If your race has a tough hide, scales, or thick skin you receive a bonus to your AC.</p>
<p><strong className="hl">Dodge Bonuses:</strong> Dodge bonuses represent actively avoiding blows. Any situation that denies you your Dexterity bonus also denies you dodge bonuses. (Wearing armor, however, does not limit these bonuses the way it limits a Dexterity bonus to AC.) Unlike most sorts of bonuses, dodge bonuses stack with each other.</p>
<p><strong className="hl">Size Modifier:</strong> You receive a bonus or penalty to your AC based on your size.</p>
<h3 id="rule-armor_class-table-8-1-size-modifiers">Table 8-1: Size Modifiers</h3>
<ScrollContainer id="rule-armor_class--table-0"><table>
<thead>
<tr>
<th>Size</th>
<th>Size Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Colossal</td>
<td>-8</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>-4</td>
</tr>
<tr>
<td>Huge</td>
<td>-2</td>
</tr>
<tr>
<td>Large</td>
<td>-1</td>
</tr>
<tr>
<td>Medium</td>
<td>+0</td>
</tr>
<tr>
<td>Small</td>
<td>+1</td>
</tr>
<tr>
<td>Tiny</td>
<td>+2</td>
</tr>
<tr>
<td>Diminutive</td>
<td>+4</td>
</tr>
<tr>
<td>Fine</td>
<td>+8</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Touch Attacks:</strong> Some attacks completely disregard armor, including shields and natural armor - the aggressor need only touch a foe for such an attack to take full effect. In these cases, the attacker makes a touch attack roll (either ranged or melee). When you are the target of a touch attack, your AC doesn't include any armor bonus, shield bonus, or natural armor bonus. All other modifiers, such as your size modifier, Dexterity modifier, and deflection bonus (if any) apply normally.</p>
<p>Some creatures have the ability to make incorporeal touch attacks. These attacks bypass solid objects, such as armor and shields, by passing through them. Incorporeal touch attacks work similarly to normal touch attacks except that they also ignore cover bonuses. Incorporeal touch attacks do not ignore armor bonuses granted by force effects, such as <Link to="/spell/mage_armor">mage armor</Link> and <Link to="/magic-wondrous/bracers_of_armor">bracers of armor</Link>.</p>
</>};
const _damage = {title: "Damage", parent_topics: ["combat","combat_statistics"], siblings: ["attack_roll","armor_class","damage","hit_points","attacks_of_opportunity","speed","saving_throws"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 179</Link></p>
<p>If your attack succeeds, you deal damage. The type of weapon used determines the amount of damage you deal. Damage reduces a target's current hit points.</p>
<p><strong className="hl">Minimum Damage:</strong> If penalties reduce the damage result to less than 1, a hit still deals 1 point of nonlethal damage (see <Link to="/rule/nonlethal_damage">Nonlethal Damage</Link>).</p>
<p><strong className="hl">Strength Bonus:</strong> When you hit with a melee or thrown weapon, including a sling, add your Strength modifier to the damage result. A Strength penalty, but not a bonus, applies on damage rolls made with a bow that is not a composite bow.</p>
<p><strong className="hl">Off-Hand Weapon:</strong> When you deal damage with a weapon in your off hand, you add only 1/2 your Strength bonus. If you have a Strength penalty, the entire penalty applies.</p>
<p><strong className="hl">Wielding a Weapon Two-Handed:</strong> When you deal damage with a weapon that you are wielding two-handed, you add 1-1/2 times your Strength bonus (Strength penalties are not multiplied). You don't get this higher Strength bonus, however, when using a light weapon with two hands.</p>
<p><strong className="hl">Multiplying Damage:</strong> Sometimes you multiply damage by some factor, such as on a critical hit. Roll the damage (with all modifiers) multiple times and total the results.</p>
<p><strong>Note:</strong> When you multiply damage more than once, each multiplier works off the original, unmultiplied damage. So if you are asked to double the damage twice, the end result is three times the normal damage.</p>
<p><strong className="hl">Exception:</strong> Extra damage dice over and above a weapon's normal damage are never multiplied.</p>
<p><strong className="hl">Ability Damage:</strong> Certain creatures and magical effects can cause temporary or permanent ability damage (a reduction to an ability score). <Link to="/rule/ability_damage_drain">Rules covering ability damage are found here</Link>.</p>
</>};
const _hit_points = {title: "Hit Points", parent_topics: ["combat","combat_statistics"], siblings: ["attack_roll","armor_class","damage","hit_points","attacks_of_opportunity","speed","saving_throws"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 179</Link></p>
<p>When your hit point total reaches 0, you're <Link to="/rule/disabled_0_hit_points">disabled</Link>. When it reaches -1, you're <Link to="/rule/dying_negative_hit_points">dying</Link>. When it gets to a negative amount equal to your Constitution score, you're <Link to="/rule/dead">dead</Link>.</p>
</>};
const _attacks_of_opportunity = {title: "Attacks of Opportunity", parent_topics: ["combat","combat_statistics"], siblings: ["attack_roll","armor_class","damage","hit_points","attacks_of_opportunity","speed","saving_throws"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 180</Link></p>
<p>Sometimes a combatant in a melee lets her guard down or takes a reckless action. In this case, combatants near her can take advantage of her lapse in defense to attack her for free. These free attacks are called attacks of opportunity (AoO). See the Attacks of Opportunity diagram [in the physical book, page 181] for an example of how they work.</p>
<p><strong className="hl">Threatened Squares:</strong> You threaten all squares into which you can make a melee attack, even when it is not your turn. Generally, that means everything in all squares adjacent to your space (including diagonally). An enemy that takes certain actions while in a threatened square provokes an AoO from you. If you're unarmed, you don't normally threaten any squares and thus can't make AoOs.</p>
<p><strong className="hl">Reach Weapons:</strong> Most creatures of Medium or smaller size have a reach of only 5 feet. This means that they can make melee attacks only against creatures up to 5 feet (1 square) away. However, Small and Medium creatures wielding reach weapons threaten more squares than a typical creature. In addition, most creatures larger than Medium have a <Link to="/rule/big_and_little_creatures_in_combat">natural reach</Link> of 10 feet or more.</p>
<p><strong className="hl">Provoking an Attack of Opportunity:</strong> Two kinds of actions can provoke AoOs: moving out of a threatened square and performing certain actions within a threatened square.</p>
<p><strong className="hl">Moving:</strong> Moving out of a threatened square usually provokes AoOs from threatening opponents. There are two common methods of avoiding such an attack - the 5-foot step and the withdraw action.</p>
<p><strong className="hl">Performing a Distracting Act:</strong> Some actions, when performed in a threatened square, provoke AoOs as you divert your attention from the battle. Many of the actions that provoke attacks of opportunity are noted in their respective sections: <Link to="/rule/standard_actions">standard actions</Link>, <Link to="/rule/move_actions">move actions</Link>, <Link to="/rule/full_round_actions">full-round actions</Link>, <Link to="/rule/free_actions">free actions</Link>, <Link to="/rule/swift_and_immediate_actions">swift actions, immediate actions</Link>, and <Link to="/rule/miscellaneous_actions">miscellaneous actions</Link>. They are summarized in the list below.</p>
<p>Remember that even actions that normally provoke AoOs may have exceptions to this rule.</p>
<p><strong className="hl">Making an Attack of Opportunity:</strong> An attack of opportunity is a single melee attack, and most characters can only make one per round. You don't have to make an attack of opportunity if you don't want to. You make your attack of opportunity at your normal attack bonus, even if you've already attacked in the round.</p>
<p>An attack of opportunity "interrupts" the normal flow of actions in the round. If an attack of opportunity is provoked, immediately resolve the attack of opportunity, then continue with the next character's turn (or complete the current turn, if the attack of opportunity was provoked in the midst of a character's turn).</p>
<p><strong className="hl">Combat Reflexes and Additional Attacks of Opportunity:</strong> If you have the <Link to="/feat/combat_reflexes">Combat Reflexes</Link> feat, you can add your Dexterity bonus to the number of AoOs you can make in a round. This feat does not let you make more than one attack for a given opportunity, but if the same opponent provokes two AoOs from you, you could make two separate attacks of opportunity (since each one represents a different opportunity). Moving out of more than one square threatened by the same opponent in the same round doesn't count as more than one opportunity for that opponent. All these attacks are at your full normal attack bonus.</p>
<h3 id="rule-attacks_of_opportunity-actions-that-provoke-attacks-of-opportunity">Actions That Provoke Attacks of Opportunity</h3>
<ul>
<li>Make a ranged or unarmed attack</li>
<li>Prepare to throw a splash weapon</li>
<li>Drink a potion or apply an oil</li>
<li>Cast a spell, read a scroll, or use a spell-like ability</li>
<li>Load a crossbow</li>
<li>Move a heavy item</li>
<li>Pick up an item, or retrieve a stored item</li>
<li>Use a <Link to="/main/skills">skill</Link> that takes 1 action or longer (usually; some exceptions apply)</li>
<li>Move out of a threatened square (including running)</li>
<li>Light a torch with a tindertwig</li>
<li>Control a frightened mount</li>
<li>Stand up from a prone position</li>
<li>Sheathe a weapon</li>
<li>Deliver a coup de grace</li>
<li>Escape from a net</li>
<li>Lock/unlock a weapon in a locked gauntlet</li>
<li>Use Aid Another to assist with an action that provokes an AoO</li>
</ul>
</>};
const _speed = {title: "Speed", parent_topics: ["combat","combat_statistics"], siblings: ["attack_roll","armor_class","damage","hit_points","attacks_of_opportunity","speed","saving_throws"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 180</Link></p>
<p>Your speed tells you how far you can move in a round and still do something, such as attack or cast a spell. Your speed depends mostly on your size and your armor. Dwarves, gnomes, and halflings have a speed of 20 feet (4 squares), or 15 feet (3 squares) when wearing medium or heavy armor (except for dwarves, who move 20 feet in any armor).</p>
<p>Humans, elves, half-elves, half-orcs, and most humanoid monsters have a speed of 30 feet (6 squares), or 20 feet (4 squares) in medium or heavy armor.</p>
<p>If you use two move actions in a round (sometimes called a "double move" action), you can move up to double your speed. If you spend the entire round running, you can move up to quadruple your speed (or triple if you are in heavy armor).</p>
</>};
const _saving_throws = {title: "Saving Throws", parent_topics: ["combat","combat_statistics"], siblings: ["attack_roll","armor_class","damage","hit_points","attacks_of_opportunity","speed","saving_throws"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 180</Link></p>
<p>Generally, when you are subject to an unusual or magical attack, you get a saving throw to avoid or reduce the effect. Like an attack roll, a saving throw is a d20 roll plus a bonus based on your class and level, and an associated ability score. Your saving throw modifier is:</p>
<blockquote>
<p>Base save bonus + ability modifier</p>
</blockquote>
<p><strong className="hl">Saving Throw Types:</strong> The three different kinds of saving throws are Fortitude, Reflex, and Will:</p>
<p><strong className="hl">Fortitude:</strong> These saves measure your ability to stand up to physical punishment or attacks against your vitality and health. Apply your Constitution modifier to your Fortitude saving throws.</p>
<p><strong className="hl">Reflex:</strong> These saves test your ability to dodge area attacks and unexpected situations. Apply your Dexterity modifier to your Reflex saving throws.</p>
<p><strong className="hl">Will:</strong> These saves reflect your resistance to mental influence as well as many magical effects. Apply your Wisdom modifier to your Will saving throws.</p>
<p><strong className="hl">Saving Throw Difficulty Class:</strong> The DC for a save is determined by the attack itself.</p>
<p><strong className="hl">Automatic Failures and Successes:</strong> A natural 1 (the d20 comes up 1) on a saving throw is always a failure (and may cause damage to exposed items; see <Link to="/rule/saving_throw">Items Surviving after a Saving Throw</Link>). A natural 20 (the d20 comes up 20) is always a success.</p>
</>};
const _actions_in_combat = {title: "Actions in Combat", parent_topics: ["combat"], siblings: ["how_combat_works","combat_statistics","actions_in_combat","injury_and_death","movement_position_and_distance","big_and_little_creatures_in_combat","combat_modifiers","special_attacks","conditions","special_abilities_2"], subtopics: ["standard_actions","move_actions","full_round_actions","free_actions","swift_and_immediate_actions","miscellaneous_actions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 181</Link></p>
<p>During one turn, there are a wide variety of actions that your character can perform, from swinging a sword to casting a spell.</p>
<h3 id="rule-actions_in_combat-action-types">Action Types</h3>
<p>An action's type essentially tells you how long the action takes to perform (within the framework of the 6-second combat round) and how movement is treated. There are six types of actions: standard actions, move actions, full-round actions, swift actions, immediate actions, and free actions.</p>
<p>In a normal round, you can perform a standard action and a move action, or you can perform a full-round action. You can also perform one swift action and one or more free actions. You can always take a move action in place of a standard action.</p>
<p>In some situations (such as in a surprise round), you may be limited to taking only a single move action or standard action.</p>
<p><strong className="hl">Standard Action:</strong> A standard action allows you to do something, most commonly to make an attack or cast a spell. See <Link to="/rule/standard_actions">this table</Link> for other standard actions.</p>
<p><strong className="hl">Move Action:</strong> A move action allows you to move up to your speed or perform an action that takes a similar amount of time. See <Link to="/rule/move_actions">this table</Link> for other move actions.</p>
<p>You can take a move action in place of a standard action. If you move no actual distance in a round (commonly because you have swapped your move action for one or more equivalent actions), you can take one 5-foot step either before, during, or after the action.</p>
<p><strong className="hl">Full-Round Action:</strong> A full-round action consumes all your effort during a round. The only movement you can take during a full-round action is a 5-foot step before, during, or after the action. You can also perform free actions and swift actions (see below). See <Link to="/rule/full_round_actions">this table</Link> for a list of full-round actions.</p>
<p>Some full-round actions do not allow you to take a 5-foot step.</p>
<p>Some full-round actions can be taken as standard actions, but only in situations when you are limited to performing only a standard action during your round. The descriptions of specific actions detail which actions allow this option.</p>
<p><strong className="hl">Free Action:</strong> Free actions consume a very small amount of time and effort. You can perform one or more free actions while taking another action normally. However, there are reasonable limits on what you can really do for free, as decided by the GM.</p>
<p><strong className="hl">Swift Action:</strong> A swift action consumes a very small amount of time, but represents a larger expenditure of effort and energy than a free action. You can perform only a single swift action per turn.</p>
<p><strong className="hl">Immediate Action:</strong> An immediate action is very similar to a swift action, but can be performed at any time - even if it's not your turn.</p>
<p><strong className="hl">Not an Action:</strong> Some activities are so minor that they are not even considered free actions. They literally don't take any time at all to do and are considered an inherent part of doing something else, such as nocking an arrow as part of an attack with a bow.</p>
<p><strong className="hl">Restricted Activity:</strong> In some situations, you may be unable to take a full round's worth of actions. In such cases, you are restricted to taking only a single standard action or a single move action (plus free and swift actions as normal). You can't take a full-round action (though you can start or complete a full-round action by using a standard action; see below).</p>
</>};
const _standard_actions = {title: "Standard Actions", parent_topics: ["combat","actions_in_combat"], siblings: ["standard_actions","move_actions","full_round_actions","free_actions","swift_and_immediate_actions","miscellaneous_actions"], subtopics: ["attack","activate_magic_item","cast_a_spell","use_special_ability","other_standard_actions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 182</Link></p>
<p>Most of the common actions characters take, aside from movement, fall into the realm of standard actions.</p>
<ScrollContainer id="rule-standard_actions--table-0"><table>
<thead>
<tr>
<th>Standard Action</th>
<th>Attack of Opportunity<sup><InnerLink showBacklink="backlink-rule-standard_actions-ref-1-1" id="rule-standard_actions-ref-1-1" data-hash-target to="rule-standard_actions-1">1</InnerLink></sup></th>
</tr>
</thead>
<tbody><tr>
<td>Attack (melee)</td>
<td>No</td>
</tr>
<tr>
<td>Attack (ranged)</td>
<td>Yes</td>
</tr>
<tr>
<td>Attack (unarmed)</td>
<td>Yes</td>
</tr>
<tr>
<td>Activate a magic item other than a potion or oil</td>
<td>No</td>
</tr>
<tr>
<td>Aid another</td>
<td>Maybe<sup><InnerLink showBacklink="backlink-rule-standard_actions-ref-2-1" id="rule-standard_actions-ref-2-1" data-hash-target to="rule-standard_actions-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>Cast a spell (1 standard action casting time)</td>
<td>Yes</td>
</tr>
<tr>
<td>Channel energy</td>
<td>No</td>
</tr>
<tr>
<td>Concentration to maintain an active spell</td>
<td>No</td>
</tr>
<tr>
<td>Dismiss a spell</td>
<td>No</td>
</tr>
<tr>
<td>Draw a hidden weapon (see <Link to="/skill/sleight_of_hand">Sleight of Hand</Link>)</td>
<td>No</td>
</tr>
<tr>
<td>Drink a potion or apply an oil</td>
<td>Yes</td>
</tr>
<tr>
<td>Escape a grapple</td>
<td>No</td>
</tr>
<tr>
<td>Feint</td>
<td>No</td>
</tr>
<tr>
<td>Light a torch with a tindertwig</td>
<td>Yes</td>
</tr>
<tr>
<td>Lower spell resistance</td>
<td>No</td>
</tr>
<tr>
<td>Read a scroll</td>
<td>Yes</td>
</tr>
<tr>
<td>Ready (triggers a standard action)</td>
<td>No</td>
</tr>
<tr>
<td>Stabilize a dying friend (see <Link to="/skill/heal">Heal</Link>)</td>
<td>Yes</td>
</tr>
<tr>
<td>Total defense</td>
<td>No</td>
</tr>
<tr>
<td>Use extraordinary ability</td>
<td>No</td>
</tr>
<tr>
<td>Use skill that takes 1 action</td>
<td>Usually</td>
</tr>
<tr>
<td>Use spell-like ability</td>
<td>Yes</td>
</tr>
<tr>
<td>Use supernatural ability</td>
<td>No</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-standard_actions-label">Footnotes</h3>
<ol>
<li id="rule-standard_actions-1">
<p>Regardless of the action, if you move out of a threatened square, you usually provoke an attack of opportunity. This column indicates whether the action itself, not moving, provokes an attack of opportunity. <InnerLink id="backlink-rule-standard_actions-ref-1-1" data-hash-target to="rule-standard_actions-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="rule-standard_actions-2">
<p>If you aid someone performing an action that would normally provoke an attack of opportunity, then the act of aiding another provokes an attack of opportunity as well. <InnerLink id="backlink-rule-standard_actions-ref-2-1" data-hash-target to="rule-standard_actions-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _attack = {title: "Attack", parent_topics: ["combat","actions_in_combat","standard_actions"], siblings: ["attack","activate_magic_item","cast_a_spell","use_special_ability","other_standard_actions"], subtopics: ["melee_and_ranged_attacks","natural_attacks","multiple_attacks_and_fighting_defensively","critical_hits"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 182</Link></p>
<p>Making an attack is a standard action.</p>
</>};
const _melee_and_ranged_attacks = {title: "Melee and Ranged Attacks", parent_topics: ["combat","actions_in_combat","standard_actions","attack"], siblings: ["melee_and_ranged_attacks","natural_attacks","multiple_attacks_and_fighting_defensively","critical_hits"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 182</Link></p>
<p><strong className="hl">Melee Attacks:</strong> With a normal melee weapon, you can strike any opponent within 5 feet. (Opponents within 5 feet are considered adjacent to you.) Some melee weapons have <Link to="/misc/reach">reach</Link>, as indicated in their descriptions. With a typical reach weapon, you can strike opponents 10 feet away, but you can't strike adjacent foes (those within 5 feet).</p>
<p><strong className="hl">Unarmed Attacks:</strong> Striking for damage with punches, kicks, and head butts is much like attacking with a melee weapon, except for the following:</p>
<blockquote>
<p><strong className="hl">Attacks of Opportunity:</strong> Attacking unarmed provokes an attack of opportunity from the character you attack, provided she is armed. The attack of opportunity comes before your attack. An unarmed attack does not provoke attacks of opportunity from other foes, nor does it provoke an attack of opportunity from an unarmed foe.</p>
<p>An unarmed character can't take attacks of opportunity (but see "Armed" Unarmed Attacks, below).</p>
<p><strong className="hl">"Armed" Unarmed Attacks:</strong> Sometimes a character's or creature's unarmed attack counts as an armed attack. A <Link to="/class/monk">monk</Link>, a character with the <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> feat, a spellcaster delivering a touch attack spell, and a creature with natural physical weapons all count as being armed (see <Link to="/rule/natural_attacks">natural attacks</Link>).</p>
<p>Note that being armed counts for both offense and defense (the character can make attacks of opportunity).</p>
<p><strong className="hl">Unarmed Strike Damage:</strong> An unarmed strike from a Medium character deals 1d3 points of bludgeoning damage (plus your Strength modifier, as normal). A Small character's unarmed strike deals 1d2 points of bludgeoning damage, while a Large character's unarmed strike deals 1d4 points of bludgeoning damage. All damage from unarmed strikes is nonlethal damage. Unarmed strikes count as light weapons (for purposes of <Link to="/rule/two_weapon_fighting">two-weapon attack</Link> penalties and so on).</p>
<p><strong className="hl">Dealing Lethal Damage:</strong> You can specify that your unarmed strike will deal lethal damage before you make your attack roll, but you take a -4 penalty on your attack roll. If you have the Improved Unarmed Strike feat, you can deal lethal damage with an unarmed strike without taking a penalty on the attack roll.</p>
</blockquote>
<p><strong className="hl">Ranged Attacks:</strong> With a ranged weapon, you can shoot or throw at any target that is within the weapon's maximum range and in line of sight. The maximum range for a thrown weapon is five range increments. For projectile weapons, it is 10 range increments. Some ranged weapons have shorter maximum ranges, as specified in their descriptions.</p>
<blockquote>
<p><strong className="hl">Shooting or Throwing into a Melee:</strong> If you shoot or throw a ranged weapon at a target engaged in melee with a friendly character, you take a -4 penalty on your attack roll. Two characters are engaged in melee if they are enemies of each other and either threatens the other. (An unconscious or otherwise immobilized character is not considered engaged unless he is actually being attacked.) If your target (or the part of your target you're aiming at, if it's a big target) is at least 10 feet away from the nearest friendly character, you can avoid the -4 penalty, even if the creature you're aiming at is engaged in melee with a friendly character.</p>
<p>If your target is two size categories larger than the friendly characters it is engaged with, this penalty is reduced to -2. There is no penalty for firing at a creature that is three size categories larger than the friendly characters it is engaged with.</p>
</blockquote>
<p><strong className="hl">Precise Shot:</strong> If you have the <Link to="/feat/precise_shot">Precise Shot</Link> feat, you don't take this penalty.</p>
</>};
const _natural_attacks = {title: "Natural Attacks", parent_topics: ["combat","actions_in_combat","standard_actions","attack"], siblings: ["melee_and_ranged_attacks","natural_attacks","multiple_attacks_and_fighting_defensively","critical_hits"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 182</Link></p>
<p>Attacks made with natural weapons, such as claws and bites, are melee attacks that can be made against any creature within your reach (usually 5 feet). These attacks are made using your full attack bonus and deal an amount of damage that depends on their type (plus your Strength modifier, as normal). You do not receive additional natural attacks for a high base attack bonus. Instead, you receive additional attack rolls for multiple limb and body parts capable of making the attack (as noted by the race or ability that grants the attacks). If you possess only one natural attack (such as a bite - two claw attacks do not qualify), you add 1-1/2 times your Strength bonus on damage rolls made with that attack.</p>
<p>Some natural attacks are denoted as secondary natural attacks, such as tails and wings. Attacks with secondary natural attacks are made using your base attack bonus minus 5. These attacks deal an amount of damage depending on their type, but you only add half your Strength modifier on damage rolls.</p>
<p>You can make attacks with natural weapons in combination with attacks made with a melee weapon and unarmed strikes, so long as a different limb is used for each attack. For example, you cannot make a claw attack and also use that hand to make attacks with a longsword. When you make additional attacks in this way, all of your natural attacks are treated as secondary natural attacks, using your base attack bonus minus 5 and adding only 1/2 of your Strength modifier on damage rolls. Feats such as <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link> and <Link to="/feat/multiattack">Multiattack</Link> can reduce these penalties.</p>
</>};
const _multiple_attacks_and_fighting_defensively = {title: "Multiple Attacks and Fighting Defensively", parent_topics: ["combat","actions_in_combat","standard_actions","attack"], siblings: ["melee_and_ranged_attacks","natural_attacks","multiple_attacks_and_fighting_defensively","critical_hits"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 184</Link></p>
<p><strong className="hl">Multiple Attacks:</strong> A character who can make more than one attack per round must use the <Link to="/rule/full_attack">full-attack action</Link> in order to get more than one attack.</p>
<p><strong className="hl">Fighting Defensively as a Standard Action:</strong> You can choose to fight defensively when attacking. If you do so, you take a -4 penalty on all attacks in a round to gain a +2 dodge bonus to AC until the start of your next turn.</p>
</>};
const _critical_hits = {title: "Critical Hits", parent_topics: ["combat","actions_in_combat","standard_actions","attack"], siblings: ["melee_and_ranged_attacks","natural_attacks","multiple_attacks_and_fighting_defensively","critical_hits"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 184</Link></p>
<p>When you make an attack roll and get a natural 20 (the d20 shows 20), you hit regardless of your target's Armor Class, and you have scored a "threat," meaning the hit might be a critical hit (or "crit"). To find out if it's a critical hit, you immediately make an attempt to "confirm" the critical hit - another attack roll with all the same modifiers as the attack roll you just made. If the confirmation roll also results in a hit against the target's AC, your original hit is a critical hit. (The critical roll just needs to hit to give you a crit, it doesn't need to come up 20 again.) If the confirmation roll is a miss, then your hit is just a regular hit.</p>
<p>A critical hit means that you roll your damage more than once, with all your usual bonuses, and add the rolls together. Unless otherwise specified, the threat range for a critical hit on an attack roll is 20, and the multiplier is &times;2.</p>
<blockquote>
<p><strong className="hl">Exception:</strong> <Link to="/misc/precision_damage">Precision damage</Link> (such as from a rogue's <Link to="/ability/sneak_attack">sneak attack</Link> class feature) and additional damage dice from weapon special abilities (such as <Link to="/magic-enh/flaming">flaming</Link>) are not multiplied when you score a critical hit.</p>
</blockquote>
<p><strong className="hl">Increased Threat Range:</strong> Sometimes your threat range is greater than 20. That is, you can score a threat on a lower number. In such cases, a roll of lower than 20 is not an automatic hit. Any attack roll that doesn't result in a hit is not a threat.</p>
<p><strong className="hl">Increased Critical Multiplier:</strong> Some weapons deal better than double damage on a critical hit.</p>
<p><strong className="hl">Spells and Critical Hits:</strong> A spell that requires an attack roll can score a critical hit. A spell attack that requires no attack roll cannot score a critical hit. If a spell causes <Link to="/rule/ability_damage_drain">ability damage or drain</Link>, the damage or drain is doubled on a critical hit.</p>
</>};
const _activate_magic_item = {title: "Activate Magic Item", parent_topics: ["combat","actions_in_combat","standard_actions"], siblings: ["attack","activate_magic_item","cast_a_spell","use_special_ability","other_standard_actions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 183</Link></p>
<p>Many magic items don't need to be activated. Certain magic items, however, do need to be activated, especially potions, scrolls, wands, rods, and staves. Unless otherwise noted, activating a magic item is a standard action.</p>
<p><strong className="hl">Spell Completion Items:</strong> <Link to="/rule/using_items">Activating a spell completion item</Link> is the equivalent of casting a spell. It requires concentration and provokes attacks of opportunity. You lose the spell if your concentration is broken, and you can attempt to activate the item while on the defensive, as with casting a spell.</p>
<p><strong className="hl">Spell Trigger, Command Word, or Use-Activated Items:</strong> Activating any of these kinds of items does not require concentration and does not provoke attacks of opportunity.</p>
</>};
const _cast_a_spell = {title: "Cast a Spell", parent_topics: ["combat","actions_in_combat","standard_actions"], siblings: ["attack","activate_magic_item","cast_a_spell","use_special_ability","other_standard_actions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 183</Link></p>
<p>Most spells require 1 standard action to cast. You can cast such a spell either before or after you take a move action.</p>
<p><strong>Note:</strong> You retain your Dexterity bonus to AC while casting.</p>
<p><strong className="hl">Spell Components:</strong> To cast a spell with a verbal (V) component, your character must speak in a firm voice. If you're gagged or in the area of a <Link to="/spell/silence">silence</Link> spell, you can't cast such a spell. A spellcaster who has been <Link to="/misc/deafened">deafened</Link> has a 20% chance to spoil any spell he tries to cast if that spell has a verbal component.</p>
<p>To cast a spell with a somatic (S) component, you must gesture freely with at least one hand. You can't cast a spell of this type while bound, grappling, or with both your hands full or occupied.</p>
<p>To cast a spell with a material (M), focus (F), or divine focus (DF) component, you have to have the proper materials, as described by the spell. Unless these components are elaborate, preparing them is a free action. For material components and focuses whose costs are not listed in the spell description, you can assume that you have them if you have your spell component pouch.</p>
<p><strong className="hl">Concentration:</strong> You must concentrate to cast a spell. If you can't concentrate, you can't cast a spell. If you start casting a spell but something interferes with your concentration, you must make a <Link to="/rule/concentration">concentration</Link> check or lose the spell. The check's DC depends on what is threatening your concentration. If you fail, the spell fizzles with no effect. If you prepare spells, it is lost from preparation. If you cast at will, it counts against your daily limit of spells even though you did not cast it successfully.</p>
<p><strong className="hl">Concentrating to Maintain a Spell:</strong> Some spells require continued concentration to keep them going. Concentrating to maintain a spell is a standard action that doesn't provoke an attack of opportunity. Anything that could break your concentration when casting a spell can keep you from concentrating to maintain a spell. If your concentration breaks, the spell ends.</p>
<p><strong className="hl">Casting Time:</strong> Most spells have a casting time of 1 standard action. A spell cast in this manner immediately takes effect.</p>
<p><strong className="hl">Attacks of Opportunity:</strong> Generally, if you cast a spell, you provoke attacks of opportunity from threatening enemies. If you take damage from an attack of opportunity, you must make a concentration check (DC 10 + points of damage taken + the spell's level) or lose the spell. Spells that require only a swift action to cast don't provoke attacks of opportunity.</p>
<p><strong className="hl">Casting on the Defensive:</strong> Casting a spell while on the defensive does not provoke an attack of opportunity. It does, however, require a concentration check (DC 15 + double the spell's level) to successfully cast the spell. Failure means that you lose the spell.</p>
<p><strong className="hl">Touch Spells in Combat:</strong> Many spells have a range of touch. To use these spells, you cast the spell and then touch the subject. In the same round that you cast the spell, you may also touch (or attempt to touch) as a free action. You may take your move before casting the spell, after touching the target, or between casting the spell and touching the target. You can automatically touch one friend or use the spell on yourself, but to touch an opponent, you must succeed on an attack roll.</p>
<p><strong className="hl">Touch Attacks:</strong> Touching an opponent with a touch spell is considered to be an armed attack and therefore does not provoke attacks of opportunity. The act of casting a spell, however, does provoke an attack of opportunity. Touch attacks come in two types: melee touch attacks and ranged touch attacks. You can score critical hits with either type of attack as long as the spell deals damage. Your opponent's AC against a touch attack does not include any armor bonus, shield bonus, or natural armor bonus. His size modifier, Dexterity modifier, and deflection bonus (if any) all apply normally.</p>
<p><strong className="hl">Holding the Charge:</strong> If you don't discharge the spell in the round when you cast the spell, you can hold the charge indefinitely. You can continue to make touch attacks round after round. If you touch anything or anyone while holding a charge, even unintentionally, the spell discharges. If you cast another spell, the touch spell dissipates. You can touch one friend as a standard action or up to six friends as a full-round action. Alternatively, you may make a normal unarmed attack (or an attack with a natural weapon) while holding a charge. In this case, you aren't considered armed and you provoke attacks of opportunity as normal for the attack. If your unarmed attack or natural weapon attack normally doesn't provoke attacks of opportunity, neither does this attack. If the attack hits, you deal normal damage for your unarmed attack or natural weapon and the spell discharges. If the attack misses, you are still holding the charge.</p>
<p><strong className="hl">Ranged Touch Spells in Combat:</strong> Some spells allow you to make a ranged touch attack as part of the casting of the spell. These attacks are made as part of the spell and do not require a separate action. Ranged touch attacks provoke an attack of opportunity, even if the spell that causes the attacks was cast defensively. Unless otherwise noted, ranged touch attacks cannot be held until a later turn.</p>
<p><strong className="hl">Dismiss a Spell:</strong> Dismissing an active spell is a standard action that doesn't provoke attacks of opportunity.</p>
</>};
const _use_special_ability = {title: "Use Special Ability", parent_topics: ["combat","actions_in_combat","standard_actions"], siblings: ["attack","activate_magic_item","cast_a_spell","use_special_ability","other_standard_actions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 186</Link></p>
<p>Using a special ability is usually a standard action, but whether it is a standard action, a full-round action, or not an action at all is defined by the ability.</p>
<p><strong className="hl">Spell-Like Abilities (Sp):</strong> Using a spell-like ability works like casting a spell in that it requires concentration and provokes attacks of opportunity. Spell-like abilities can be disrupted. If your concentration is broken, the attempt to use the ability fails, but the attempt counts as if you had used the ability. The casting time of a spell-like ability is 1 standard action, unless the ability description notes otherwise.</p>
<p><strong className="hl">Using a Spell-Like Ability on the Defensive:</strong> You may attempt to use a spell-like ability on the defensive, just as with casting a spell. If the <Link to="/rule/concentration">concentration</Link> check (DC 15 + double the spell's level) fails, you can't use the ability, but the attempt counts as if you had used the ability.</p>
<p><strong className="hl">Supernatural Abilities (Su):</strong> Using a supernatural ability is usually a standard action (unless defined otherwise by the ability's description). Its use cannot be disrupted, does not require concentration, and does not provoke attacks of opportunity.</p>
<p><strong className="hl">Extraordinary Abilities (Ex):</strong> Using an extraordinary ability is usually not an action because most extraordinary abilities automatically happen in a reactive fashion. Those extraordinary abilities that are actions are usually standard actions that cannot be disrupted, do not require concentration, and do not provoke attacks of opportunity.</p>
</>};
const _other_standard_actions = {title: "Other Standard Actions", parent_topics: ["combat","actions_in_combat","standard_actions"], siblings: ["attack","activate_magic_item","cast_a_spell","use_special_ability","other_standard_actions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 185</Link></p>
<p>The <strong className="hl">start full-round action</strong> standard action lets you start undertaking a full-round action, which you can complete in the following round by using another standard action (<strong className="hl">complete full-round action</strong>). You can't use this action to start or complete a full attack, charge, run, or withdraw.</p>
<p><strong className="hl">Total defense</strong> lets you defend yourself as a standard action. You get a +4 dodge bonus to your AC for 1 round. Your AC improves at the start of this action. You can't combine total defense with fighting defensively or with the benefit of the <Link to="/feat/combat_expertise">Combat Expertise</Link> feat. You can't make attacks of opportunity while using total defense.</p>
</>};
const _move_actions = {title: "Move Actions", parent_topics: ["combat","actions_in_combat"], siblings: ["standard_actions","move_actions","full_round_actions","free_actions","swift_and_immediate_actions","miscellaneous_actions"], subtopics: ["move","draw_or_sheathe_a_weapon","mount_dismount_a_steed","ready_or_drop_a_shield","other_move_actions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 186</Link></p>
<p>With the exception of specific movement-related skills, most move actions don't require a check.</p>
<ScrollContainer id="rule-move_actions--table-0"><table>
<thead>
<tr>
<th>Move Action</th>
<th>Attack of Opportunity<sup><InnerLink showBacklink="backlink-rule-move_actions-ref-1-1" id="rule-move_actions-ref-1-1" data-hash-target to="rule-move_actions-1">1</InnerLink></sup></th>
</tr>
</thead>
<tbody><tr>
<td>Move</td>
<td>Yes</td>
</tr>
<tr>
<td>Control a frightened mount</td>
<td>Yes</td>
</tr>
<tr>
<td>Direct or redirect an active spell</td>
<td>No</td>
</tr>
<tr>
<td>Draw a weapon<sup><InnerLink showBacklink="backlink-rule-move_actions-ref-2-1" id="rule-move_actions-ref-2-1" data-hash-target to="rule-move_actions-2">2</InnerLink></sup></td>
<td>No</td>
</tr>
<tr>
<td>Load a hand crossbow or light crossbow</td>
<td>Yes</td>
</tr>
<tr>
<td>Open or close a door</td>
<td>No</td>
</tr>
<tr>
<td>Mount/dismount a steed</td>
<td>No</td>
</tr>
<tr>
<td>Move a heavy object</td>
<td>Yes</td>
</tr>
<tr>
<td>Pick up an item</td>
<td>Yes</td>
</tr>
<tr>
<td>Sheathe a weapon</td>
<td>Yes</td>
</tr>
<tr>
<td>Stand up from prone</td>
<td>Yes</td>
</tr>
<tr>
<td>Ready or drop a shield<sup><InnerLink showBacklink="backlink-rule-move_actions-ref-2-2" id="rule-move_actions-ref-2-2" data-hash-target to="rule-move_actions-2">2</InnerLink></sup></td>
<td>No</td>
</tr>
<tr>
<td>Retrieve a stored item</td>
<td>Yes</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-move_actions-label">Footnotes</h3>
<ol>
<li id="rule-move_actions-1">
<p>Regardless of the action, if you move out of a threatened square, you usually provoke an attack of opportunity. This column indicates whether the action itself, not moving, provokes an attack of opportunity. <InnerLink id="backlink-rule-move_actions-ref-1-1" data-hash-target to="rule-move_actions-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="rule-move_actions-2">
<p>If you have a base attack bonus of +1 or higher, you can combine one of these actions with a regular move. If you have the <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link> feat, you can draw two light or one-handed weapons in the time it would normally take you to draw one. <InnerLink id="backlink-rule-move_actions-ref-2-1" data-hash-target to="rule-move_actions-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink> <InnerLink id="backlink-rule-move_actions-ref-2-2" data-hash-target to="rule-move_actions-ref-2-2" aria-label="Back to reference 2-2">↩<sup>2</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
const _move = {title: "Move", parent_topics: ["combat","actions_in_combat","move_actions"], siblings: ["move","draw_or_sheathe_a_weapon","mount_dismount_a_steed","ready_or_drop_a_shield","other_move_actions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 186</Link></p>
<p>The simplest move action is moving your speed. If you take this kind of move action during your turn, you can't also take a 5-foot step.</p>
<p>Many non-standard modes of movement are covered under this category, including climbing (up to one-quarter of your speed) and swimming (up to one-quarter of your speed).</p>
<p><strong className="hl">Accelerated Climbing:</strong> You can climb at half your speed as a move action by accepting a -5 penalty on your Climb check.</p>
<p><strong className="hl">Crawling:</strong> You can crawl 5 feet as a move action. Crawling incurs attacks of opportunity from any attackers who threaten you at any point of your crawl. A crawling character is considered prone and must take a move action to stand up, provoking an attack of opportunity.</p>
</>};
const _draw_or_sheathe_a_weapon = {title: "Draw or Sheathe a Weapon", parent_topics: ["combat","actions_in_combat","move_actions"], siblings: ["move","draw_or_sheathe_a_weapon","mount_dismount_a_steed","ready_or_drop_a_shield","other_move_actions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 186</Link></p>
<p>Drawing a weapon so that you can use it in combat, or putting it away so that you have a free hand, requires a move action. This action also applies to weapon-like objects carried in easy reach, such as wands. If your weapon or weapon-like object is stored in a pack or otherwise out of easy reach, treat this action as retrieving a stored item.</p>
<p>If you have a base attack bonus of +1 or higher, you may draw a weapon as a free action combined with a regular move. If you have the <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link> feat, you can draw two light or one-handed weapons in the time it would normally take you to draw one.</p>
<p>Drawing ammunition for use with a ranged weapon (such as arrows, bolts, sling bullets, or shuriken) is a free action.</p>
</>};
const _mount_dismount_a_steed = {title: "Mount/Dismount a Steed", parent_topics: ["combat","actions_in_combat","move_actions"], siblings: ["move","draw_or_sheathe_a_weapon","mount_dismount_a_steed","ready_or_drop_a_shield","other_move_actions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 187</Link></p>
<p>Mounting or dismounting a steed requires a move action.</p>
<p><strong className="hl">Fast Mount or Dismount:</strong> You can mount or dismount as a free action with a DC 20 Ride check. If you fail the check, mounting or dismounting is a move action instead. You can't attempt a fast mount or fast dismount unless you can perform the mount or dismount as a move action in the current round.</p>
</>};
const _ready_or_drop_a_shield = {title: "Ready or Drop a Shield", parent_topics: ["combat","actions_in_combat","move_actions"], siblings: ["move","draw_or_sheathe_a_weapon","mount_dismount_a_steed","ready_or_drop_a_shield","other_move_actions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 187</Link></p>
<p>Strapping a shield to your arm to gain its shield bonus to your AC, or unstrapping and dropping a shield so you can use your shield hand for another purpose, requires a move action. If you have a base attack bonus of +1 or higher, you can ready or drop a shield as a free action combined with a regular move. Dropping a carried (but not worn) shield is a free action.</p>
</>};
const _other_move_actions = {title: "Other Move Actions", parent_topics: ["combat","actions_in_combat","move_actions"], siblings: ["move","draw_or_sheathe_a_weapon","mount_dismount_a_steed","ready_or_drop_a_shield","other_move_actions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 187</Link></p>
<p>Moving or manipulating an item is usually a move action. This includes retrieving or putting away a stored item, picking up an item, moving a heavy object, and opening a door. Examples of this kind of action, along with whether they incur an attack of opportunity, are given in <Link to="/rule/move_actions">the table here</Link>.</p>
<p>Some spells allow you to redirect the effect to new targets or areas after you cast the spell. <strong className="hl">Redirecting a spell</strong> requires a move action and does not provoke attacks of opportunity or require concentration.</p>
<p><strong className="hl">Standing up</strong> from a prone position requires a move action and provokes attacks of opportunity.</p>
</>};
const _full_round_actions = {title: "Full-Round Actions", parent_topics: ["combat","actions_in_combat"], siblings: ["standard_actions","move_actions","full_round_actions","free_actions","swift_and_immediate_actions","miscellaneous_actions"], subtopics: ["full_attack","cast_a_spell_2","run","withdraw","other_full_round_actions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 187</Link></p>
<p>A full-round action requires an entire round to complete. Thus, it can't be coupled with a standard or a move action, though if it does not involve moving any distance, you can take a 5-foot step.</p>
<ScrollContainer id="rule-full_round_actions--table-0"><table>
<thead>
<tr>
<th>Full-Round Action</th>
<th>Attack of Opportunity<sup><InnerLink showBacklink="backlink-rule-full_round_actions-ref-1-1" id="rule-full_round_actions-ref-1-1" data-hash-target to="rule-full_round_actions-1">1</InnerLink></sup></th>
</tr>
</thead>
<tbody><tr>
<td>Full attack</td>
<td>No</td>
</tr>
<tr>
<td>Charge<sup><InnerLink showBacklink="backlink-rule-full_round_actions-ref-2-1" id="rule-full_round_actions-ref-2-1" data-hash-target to="rule-full_round_actions-2">2</InnerLink></sup></td>
<td>No</td>
</tr>
<tr>
<td>Deliver coup de grace</td>
<td>Yes</td>
</tr>
<tr>
<td>Escape from a net</td>
<td>Yes</td>
</tr>
<tr>
<td>Extinguish flames</td>
<td>No</td>
</tr>
<tr>
<td>Light a torch</td>
<td>Yes</td>
</tr>
<tr>
<td>Load a heavy or repeating crossbow</td>
<td>Yes</td>
</tr>
<tr>
<td>Lock or unlock weapon in locked gauntlet</td>
<td>Yes</td>
</tr>
<tr>
<td>Prepare to throw splash weapon</td>
<td>Yes</td>
</tr>
<tr>
<td>Run</td>
<td>Yes</td>
</tr>
<tr>
<td>Use skill that takes 1 round</td>
<td>Usually</td>
</tr>
<tr>
<td>Use a touch spell on up to six friends</td>
<td>Yes</td>
</tr>
<tr>
<td>Withdraw<sup><InnerLink showBacklink="backlink-rule-full_round_actions-ref-2-2" id="rule-full_round_actions-ref-2-2" data-hash-target to="rule-full_round_actions-2">2</InnerLink></sup></td>
<td>No</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-full_round_actions-label">Footnotes</h3>
<ol>
<li id="rule-full_round_actions-1">
<p>Regardless of the action, if you move out of a threatened square, you usually provoke an attack of opportunity. This column indicates whether the action itself, not moving, provokes an attack of opportunity. <InnerLink id="backlink-rule-full_round_actions-ref-1-1" data-hash-target to="rule-full_round_actions-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="rule-full_round_actions-2">
<p>May be taken as a standard action if you are limited to taking only a single action in a round. <InnerLink id="backlink-rule-full_round_actions-ref-2-1" data-hash-target to="rule-full_round_actions-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink> <InnerLink id="backlink-rule-full_round_actions-ref-2-2" data-hash-target to="rule-full_round_actions-ref-2-2" aria-label="Back to reference 2-2">↩<sup>2</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
const _full_attack = {title: "Full Attack", parent_topics: ["combat","actions_in_combat","full_round_actions"], siblings: ["full_attack","cast_a_spell_2","run","withdraw","other_full_round_actions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 187</Link></p>
<p>If you get more than one attack per round because your base attack bonus is high enough, because you fight with two weapons or a double weapon, or for some special reason, you must use a full-round action to get your additional attacks. You do not need to specify the targets of your attacks ahead of time. You can see how the earlier attacks turn out before assigning the later ones.</p>
<p>The only movement you can take during a full attack is a 5-foot step. You may take the step before, after, or between your attacks.</p>
<p>If you get multiple attacks because your <Link to="/rule/common_terms">base attack bonus</Link> is high enough, you must make the attacks in order from highest bonus to lowest. If you are using two weapons, you can strike with either weapon first. If you are using a double weapon, you can strike with either part of the weapon first.</p>
<p><strong className="hl">Deciding between an Attack or a Full Attack:</strong> After your first attack, you can decide to take a move action instead of making your remaining attacks, depending on how the first attack turns out and assuming you have not already taken a move action this round. If you've already taken a 5-foot step, you can't use your move action to move any distance, but you could still use a different kind of move action.</p>
<p><strong className="hl">Fighting Defensively as a Full-Round Action:</strong> You can choose to fight defensively when taking a full-attack action. If you do so, you take a -4 penalty on all attacks in a round to gain a +2 dodge bonus to AC until the start of your next turn.</p>
</>};
const _cast_a_spell_2 = {title: "Cast a Spell (Full-Round Action)", parent_topics: ["combat","actions_in_combat","full_round_actions"], siblings: ["full_attack","cast_a_spell_2","run","withdraw","other_full_round_actions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 187</Link></p>
<p>A spell that takes one round to cast is a full-round action. It comes into effect just before the beginning of your turn in the round after you began casting the spell. You then act normally after the spell is completed.</p>
<p>A spell that takes 1 minute to cast comes into effect just before your turn 1 minute later (and for each of those 10 rounds, you are casting a spell as a full-round action). These actions must be consecutive and uninterrupted, or the spell automatically fails.</p>
<p>When you begin a spell that takes 1 round or longer to cast, you must continue the invocations, gestures, and concentration from 1 round to just before your turn in the next round (at least). If you lose concentration after starting the spell and before it is complete, you lose the spell. You only provoke attacks of opportunity when you begin casting a spell, even though you might continue casting for at least 1 full round. While casting a spell, you don't threaten any squares around you.</p>
<p>This action is otherwise identical to the cast a spell action described under Standard Actions.</p>
<p><strong className="hl">Casting a Metamagic Spell:</strong> Sorcerers and bards must take more time to cast a metamagic spell (one enhanced by a <Link to="/main/metamagic_feat">metamagic feat</Link> than a regular spell. If a spell's normal casting time is 1 standard action, casting a metamagic version of the spell is a full-round action for a sorcerer or bard (except for spells modified by the <Link to="/feat/quicken_spell">Quicken Spell</Link> feat, which take 1 swift action to cast). Note that this isn't the same as a spell with a 1-round casting time. Spells that take a full-round action to cast take effect in the same round that you begin casting, and you are not required to continue the invocations, gestures, and concentration until your next turn. For spells with a longer casting time, it takes an extra full-round action to cast the metamagic spell.</p>
<p>Clerics and druids must take more time to spontaneously cast a metamagic version of a cure, inflict, or summon spell. Spontaneously casting a metamagic version of a spell with a casting time of 1 standard action is a full-round action, and spells with longer casting times take an extra full-round action to cast.</p>
</>};
const _run = {title: "Run", parent_topics: ["combat","actions_in_combat","full_round_actions"], siblings: ["full_attack","cast_a_spell_2","run","withdraw","other_full_round_actions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 188</Link></p>
<p>You can run as a full-round action. If you do, you do not also get a 5-foot step. When you run, you can move up to four times your speed in a straight line (or three times your speed if you're in heavy armor). You lose any Dexterity bonus to AC unless you have the <Link to="/feat/run">Run</Link> feat.</p>
<p>You can run for a number of rounds equal to your Constitution score, but after that you must make a DC 10 Constitution check to continue running. You must check again each round in which you continue to run, and the DC of this check increases by 1 for each check you have made. When you fail this check, you must stop running. A character who has run to his limit must rest for 1 minute (10 rounds) before running again. During a rest period, a character can move no faster than a normal move action.</p>
<p>You can't run across difficult terrain or if you can't see where you're going.</p>
<p>A run represents a speed of about 13 miles per hour for an unencumbered human.</p>
</>};
const _withdraw = {title: "Withdraw", parent_topics: ["combat","actions_in_combat","full_round_actions"], siblings: ["full_attack","cast_a_spell_2","run","withdraw","other_full_round_actions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 188</Link></p>
<p>Withdrawing from melee combat is a full-round action. When you withdraw, you can move up to double your speed. The square you start out in is not considered threatened by any opponent you can see, and therefore visible enemies do not get attacks of opportunity against you when you move from that square. Invisible enemies still get attacks of opportunity against you, and you can't withdraw from combat if you're blinded. You can't take a 5-foot step during the same round in which you withdraw.</p>
<p>If, during the process of withdrawing, you move out of a threatened square (other than the one you started in), enemies get attacks of opportunity as normal.</p>
<p>You may not withdraw using a form of movement for which you don't have a listed speed.</p>
<p>Note that despite the name of this action, you don't actually have to leave combat entirely.</p>
<p><strong className="hl">Restricted Withdraw:</strong> If you are limited to taking only a standard action each round you can withdraw as a standard action. In this case, you may move up to your speed.</p>
</>};
const _other_full_round_actions = {title: "Other Full-Round Actions", parent_topics: ["combat","actions_in_combat","full_round_actions"], siblings: ["full_attack","cast_a_spell_2","run","withdraw","other_full_round_actions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 188</Link></p>
<p>In some situations, your movement may be so hampered that you don't have sufficient speed even to move 5 feet (a single square). In such a case, you may spend a full-round action to <strong className="hl">move 5 feet</strong> (1 square) in any direction, even diagonally. Even though this looks like a 5-foot step, it's not, and thus it provokes attacks of opportunity normally.</p>
<p><strong className="hl">Using a special ability</strong> is usually a standard action, but some may be full-round actions, as defined by the ability.</p>
</>};
const _free_actions = {title: "Free Actions", parent_topics: ["combat","actions_in_combat"], siblings: ["standard_actions","move_actions","full_round_actions","free_actions","swift_and_immediate_actions","miscellaneous_actions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 188</Link></p>
<p>Free actions don't take any time at all, though there may be limits to the number of free actions you can perform in a turn. Free actions rarely incur attacks of opportunity. Some common free actions are described below.</p>
<ScrollContainer id="rule-free_actions--table-0"><table>
<thead>
<tr>
<th>Free Action</th>
<th>Attack of Opportunity<sup><InnerLink showBacklink="backlink-rule-free_actions-ref-1-1" id="rule-free_actions-ref-1-1" data-hash-target to="rule-free_actions-1">1</InnerLink></sup></th>
</tr>
</thead>
<tbody><tr>
<td>Ceasing concentration on a spell</td>
<td>No</td>
</tr>
<tr>
<td>Dropping an item in your space or into an adjacent square</td>
<td>No</td>
</tr>
<tr>
<td>Dropping to a prone position in your space</td>
<td>No</td>
</tr>
<tr>
<td>Prepare spell components to cast spell<sup><InnerLink showBacklink="backlink-rule-free_actions-ref-2-1" id="rule-free_actions-ref-2-1" data-hash-target to="rule-free_actions-2">2</InnerLink></sup></td>
<td>No</td>
</tr>
<tr>
<td>Speak<sup><InnerLink showBacklink="backlink-rule-free_actions-ref-3-1" id="rule-free_actions-ref-3-1" data-hash-target to="rule-free_actions-3">3</InnerLink></sup></td>
<td>No</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-free_actions-label">Footnotes</h3>
<ol>
<li id="rule-free_actions-1">
<p>Regardless of the action, if you move out of a threatened square, you usually provoke an attack of opportunity. This column indicates whether the action itself, not moving, provokes an attack of opportunity. <InnerLink id="backlink-rule-free_actions-ref-1-1" data-hash-target to="rule-free_actions-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="rule-free_actions-2">
<p>Unless the component is an extremely large or awkward item. <InnerLink id="backlink-rule-free_actions-ref-2-1" data-hash-target to="rule-free_actions-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="rule-free_actions-3">
<p>In general, speaking is a free action that you can perform even when it isn't your turn. Speaking more than a few sentences is generally beyond the limit of a free action. <InnerLink id="backlink-rule-free_actions-ref-3-1" data-hash-target to="rule-free_actions-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _swift_and_immediate_actions = {title: "Swift and Immediate Actions", parent_topics: ["combat","actions_in_combat"], siblings: ["standard_actions","move_actions","full_round_actions","free_actions","swift_and_immediate_actions","miscellaneous_actions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 188</Link></p>
<p>A <strong className="hl">swift action</strong> consumes a very small amount of time, but represents a larger expenditure of effort than a free action. You can perform one swift action per turn without affecting your ability to perform other actions. In that regard, a swift action is like a free action. You can, however, perform only one single swift action per turn, regardless of what other actions you take. You can take a swift action anytime you would normally be allowed to take a free action. Swift actions usually involve spellcasting, activating a feat, or the activation of magic items.</p>
<ScrollContainer id="rule-swift_and_immediate_actions--table-0"><table>
<thead>
<tr>
<th>Swift Action</th>
<th>Attack of Opportunity<sup><InnerLink showBacklink="backlink-rule-swift_and_immediate_actions-ref-1-1" id="rule-swift_and_immediate_actions-ref-1-1" data-hash-target to="rule-swift_and_immediate_actions-1">1</InnerLink></sup></th>
</tr>
</thead>
<tbody><tr>
<td>Cast a quickened spell<sup><InnerLink showBacklink="backlink-rule-swift_and_immediate_actions-ref-2-1" id="rule-swift_and_immediate_actions-ref-2-1" data-hash-target to="rule-swift_and_immediate_actions-2">2</InnerLink></sup></td>
<td>No</td>
</tr>
</tbody></table></ScrollContainer>
<p>Much like a swift action, an <strong className="hl">immediate action</strong> consumes a very small amount of time but represents a larger expenditure of effort and energy than a free action. However, unlike a swift action, an immediate action can be performed at any time - even if it's not your turn. Casting feather fall is an immediate action, since the spell can be cast at any time.</p>
<p>Using an immediate action on your turn is the same as using a swift action and counts as your swift action for that turn. You cannot use another immediate action or a swift action until after your next turn if you have used an immediate action when it is not currently your turn (effectively, using an immediate action before your turn is equivalent to using your swift action for the coming turn). You also cannot use an immediate action if you are flat-footed.</p>
<ScrollContainer id="rule-swift_and_immediate_actions--table-1"><table>
<thead>
<tr>
<th>Immediate Action</th>
<th>Attack of Opportunity<sup><InnerLink showBacklink="backlink-rule-swift_and_immediate_actions-ref-3-1" id="rule-swift_and_immediate_actions-ref-3-1" data-hash-target to="rule-swift_and_immediate_actions-3">3</InnerLink></sup></th>
</tr>
</thead>
<tbody><tr>
<td>Cast <Link to="/spell/feather_fall">feather fall</Link></td>
<td>No</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-swift_and_immediate_actions-label">Footnotes</h3>
<ol>
<li id="rule-swift_and_immediate_actions-1">
<p>Regardless of the action, if you move out of a threatened square, you usually provoke an attack of opportunity. This column indicates whether the action itself, not moving, provokes an attack of opportunity. <InnerLink id="backlink-rule-swift_and_immediate_actions-ref-1-1" data-hash-target to="rule-swift_and_immediate_actions-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="rule-swift_and_immediate_actions-2">
<p>You can cast a quickened spell (see the <Link to="/feat/quicken_spell">Quicken Spell</Link> feat), or any spell whose casting time is designated as a free or swift action, as a swift action. Only one such spell can be cast in any round, and such spells don't count toward your normal limit of one spell per round. Casting a spell as a swift action doesn't incur an attack of opportunity. <InnerLink id="backlink-rule-swift_and_immediate_actions-ref-2-1" data-hash-target to="rule-swift_and_immediate_actions-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="rule-swift_and_immediate_actions-3">
<p>Regardless of the action, if you move out of a threatened square, you usually provoke an attack of opportunity. This column indicates whether the action itself, not moving, provokes an attack of opportunity. <InnerLink id="backlink-rule-swift_and_immediate_actions-ref-3-1" data-hash-target to="rule-swift_and_immediate_actions-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _miscellaneous_actions = {title: "Miscellaneous Actions", parent_topics: ["combat","actions_in_combat"], siblings: ["standard_actions","move_actions","full_round_actions","free_actions","swift_and_immediate_actions","miscellaneous_actions"], subtopics: ["ready","delay","take_5_foot_step"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 189</Link></p>
<p>The following actions take a variable amount of time to accomplish or otherwise work differently than other actions.</p>
<ScrollContainer id="rule-miscellaneous_actions--table-0"><table>
<thead>
<tr>
<th>Action</th>
<th>Attack of Opportunity<sup><InnerLink showBacklink="backlink-rule-miscellaneous_actions-ref-1-1" id="rule-miscellaneous_actions-ref-1-1" data-hash-target to="rule-miscellaneous_actions-1">1</InnerLink></sup></th>
</tr>
</thead>
<tbody><tr>
<td>Ready</td>
<td>No<sup><InnerLink showBacklink="backlink-rule-miscellaneous_actions-ref-2-1" id="rule-miscellaneous_actions-ref-2-1" data-hash-target to="rule-miscellaneous_actions-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>Delay</td>
<td>No</td>
</tr>
<tr>
<td>5-foot step</td>
<td>No</td>
</tr>
<tr>
<td>Perform a combat maneuver<sup><InnerLink showBacklink="backlink-rule-miscellaneous_actions-ref-3-1" id="rule-miscellaneous_actions-ref-3-1" data-hash-target to="rule-miscellaneous_actions-3">3</InnerLink></sup></td>
<td>Yes</td>
</tr>
<tr>
<td>Use feat<sup><InnerLink showBacklink="backlink-rule-miscellaneous_actions-ref-4-1" id="rule-miscellaneous_actions-ref-4-1" data-hash-target to="rule-miscellaneous_actions-4">4</InnerLink></sup> or skill<sup><InnerLink showBacklink="backlink-rule-miscellaneous_actions-ref-5-1" id="rule-miscellaneous_actions-ref-5-1" data-hash-target to="rule-miscellaneous_actions-5">5</InnerLink></sup></td>
<td>Varies</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-miscellaneous_actions-label">Footnotes</h3>
<ol>
<li id="rule-miscellaneous_actions-1">
<p>Regardless of the action, if you move out of a threatened square, you usually provoke an attack of opportunity. This column indicates whether the action itself, not moving, provokes an attack of opportunity. <InnerLink id="backlink-rule-miscellaneous_actions-ref-1-1" data-hash-target to="rule-miscellaneous_actions-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="rule-miscellaneous_actions-2">
<p>Readying does not provoke an attack of opportunity, but the readied action may when it occurs. <InnerLink id="backlink-rule-miscellaneous_actions-ref-2-1" data-hash-target to="rule-miscellaneous_actions-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="rule-miscellaneous_actions-3">
<p>Some combat maneuvers substitute for a melee attack, not an action. As melee attacks, they can be used once in an attack or charge action, one or more times in a full-attack action, or even as an attack of opportunity. Others are used as a separate action. <InnerLink id="backlink-rule-miscellaneous_actions-ref-3-1" data-hash-target to="rule-miscellaneous_actions-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
<li id="rule-miscellaneous_actions-4">
<p>Certain feats let you take special actions in combat. Other feats do not require actions themselves, but they give you a bonus when attempting something you can already do. Some feats are not meant to be used within the framework of combat. The individual feat descriptions tell you what you need to know about them. <InnerLink id="backlink-rule-miscellaneous_actions-ref-4-1" data-hash-target to="rule-miscellaneous_actions-ref-4-1" aria-label="Back to reference 4-1">↩</InnerLink></p>
</li>
<li id="rule-miscellaneous_actions-5">
<p>Most skill uses are standard actions, but some might be move actions, full-round actions, free actions, or something else entirely. The individual skill descriptions tell you what sorts of actions are required to perform skills. <InnerLink id="backlink-rule-miscellaneous_actions-ref-5-1" data-hash-target to="rule-miscellaneous_actions-ref-5-1" aria-label="Back to reference 5-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _take_5_foot_step = {title: "Take 5-Foot Step", parent_topics: ["combat","actions_in_combat","miscellaneous_actions"], siblings: ["ready","delay","take_5_foot_step"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 189</Link></p>
<p>You can move 5 feet in any round when you don't perform any other kind of movement. Taking this <strong className="hl">5-foot step</strong> never provokes an attack of opportunity. You can't take more than one 5-foot step in a round, and you can't take a 5-foot step in the same round that you move any distance. You can take a 5-foot step before, during, or after your other actions in the round.</p>
<p>You can only take a 5-foot-step if your movement isn't hampered by difficult terrain or darkness. Any creature with a speed of 5 feet or less can't take a 5-foot step, since moving even 5 feet requires a move action for such a slow creature.</p>
<p>You may not take a 5-foot step using a form of movement for which you do not have a listed speed.</p>
</>};
const _injury_and_death = {title: "Injury and Death", parent_topics: ["combat"], siblings: ["how_combat_works","combat_statistics","actions_in_combat","injury_and_death","movement_position_and_distance","big_and_little_creatures_in_combat","combat_modifiers","special_attacks","conditions","special_abilities_2"], subtopics: ["loss_of_hit_points","disabled_0_hit_points","dying_negative_hit_points","dead","stable_characters_and_recovery","healing","temporary_hit_points","nonlethal_damage"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 189</Link></p>
<p>Your hit points measure how hard you are to kill. No matter how many hit points you lose, your character isn't hindered in any way until your hit points drop to 0 or lower.</p>
</>};
const _loss_of_hit_points = {title: "Loss of Hit Points", parent_topics: ["combat","injury_and_death"], siblings: ["loss_of_hit_points","disabled_0_hit_points","dying_negative_hit_points","dead","stable_characters_and_recovery","healing","temporary_hit_points","nonlethal_damage"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 189</Link></p>
<p>The most common way that your character gets hurt is to take lethal damage and lose hit points.</p>
<p><strong className="hl">What Hit Points Represent:</strong> Hit points mean two things in the game world: the ability to take physical punishment and keep going, and the ability to turn a serious blow into a less serious one.</p>
<p><strong className="hl">Effects of Hit Point Damage:</strong> Damage doesn't slow you down until your current hit points reach 0 or lower. At 0 hit points, you're disabled.</p>
<p>If your hit point total is negative, but not equal to or greater than your Constitution score, you are unconscious and dying.</p>
<p>When your negative hit point total is equal to your Constitution, you're dead.</p>
<p><strong className="hl">Massive Damage (Optional Rule):</strong> If you ever sustain a single attack that deals an amount of damage equal to half your total hit points (minimum 50 points of damage) or more and it doesn't kill you outright, you must make a DC 15 Fortitude save. If this saving throw fails, you die regardless of your current hit points. If you take half your total hit points or more in damage from multiple attacks, no one of which dealt more than half your total hit points (minimum 50), the massive damage rule does not apply.</p>
</>};
const _disabled_0_hit_points = {title: "Disabled (0 Hit Points)", parent_topics: ["combat","injury_and_death"], siblings: ["loss_of_hit_points","disabled_0_hit_points","dying_negative_hit_points","dead","stable_characters_and_recovery","healing","temporary_hit_points","nonlethal_damage"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 189</Link></p>
<p>When your current hit point total drops to exactly 0, you are disabled.</p>
<p>You gain the <Link to="/misc/staggered">staggered</Link> condition and can only take a single move or standard action each turn (but not both, nor can you take full-round actions). You can take move actions without further injuring yourself, but if you perform any standard action (or any other strenuous action) you take 1 point of damage after completing the act. Unless your activity increased your hit points, you are now at -1 hit points and dying.</p>
<p>Healing that raises your hit points above 0 makes you fully functional again, just as if you'd never been reduced to 0 or fewer hit points.</p>
<p>You can also become <Link to="/misc/disabled">disabled</Link> when recovering from dying. In this case, it's a step toward recovery, and you can have fewer than 0 hit points (see <Link to="/rule/stable_characters_and_recovery">Stable Characters and Recovery</Link>).</p>
</>};
const _dying_negative_hit_points = {title: "Dying (Negative Hit Points)", parent_topics: ["combat","injury_and_death"], siblings: ["loss_of_hit_points","disabled_0_hit_points","dying_negative_hit_points","dead","stable_characters_and_recovery","healing","temporary_hit_points","nonlethal_damage"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 189</Link></p>
<p>If your hit point total is negative, but not equal to or greater than your Constitution score, you're dying.</p>
<p>A dying character immediately falls unconscious and can take no actions.</p>
<p>A dying character loses 1 hit point every round. This continues until the character dies or becomes stable.</p>
</>};
const _dead = {title: "Dead", parent_topics: ["combat","injury_and_death"], siblings: ["loss_of_hit_points","disabled_0_hit_points","dying_negative_hit_points","dead","stable_characters_and_recovery","healing","temporary_hit_points","nonlethal_damage"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 190</Link></p>
<p>When your character's current hit points drop to a negative amount equal to his Constitution score or lower, or if he succumbs to <Link to="/rule/loss_of_hit_points">massive damage</Link>, he's dead. A character can also die from taking <Link to="/rule/ability_damage">ability damage</Link> or suffering an ability drain that reduces his Constitution score to 0.</p>
<p>Certain types of powerful magic, such as <Link to="/spell/raise_dead">raise dead</Link> and <Link to="/spell/resurrection">resurrection</Link>, can restore life to a dead character.</p>
</>};
const _stable_characters_and_recovery = {title: "Stable Characters and Recovery", parent_topics: ["combat","injury_and_death"], siblings: ["loss_of_hit_points","disabled_0_hit_points","dying_negative_hit_points","dead","stable_characters_and_recovery","healing","temporary_hit_points","nonlethal_damage"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 190</Link></p>
<p>On the character's next turn, after being reduced to negative hit points (but not dead), and on all subsequent turns, the character must make a DC 10 Constitution check to become stable. The character takes a penalty on this roll equal to his negative hit point total. A character that is stable does not need to make this check. A natural 20 on this check is an automatic success. If the character fails this check, he loses 1 hit point. An unconscious or dying character cannot use any special action that changes the initiative count on which his action occurs.</p>
<p>Characters taking continuous damage, such as from an acid arrow or a bleed effect, automatically fail all Constitution checks made to stabilize. Such characters lose 1 hit point per round in addition to the continuous damage.</p>
<p>You can keep a dying character from losing any more hit points and make him stable with a DC 15 Heal check. If any sort of healing cures the dying character of even 1 point of damage, he becomes stable and stops losing hit points.</p>
<p>Healing that raises the dying character's hit points to 0 makes him conscious and disabled. Healing that raises his hit points to 1 or more makes him fully functional again, just as if he'd never been reduced to 0 or lower. A spellcaster retains the spellcasting capability she had before dropping below 0 hit points.</p>
<p>A stable character who has been tended by a healer or who has been magically healed eventually regains consciousness and recovers hit points naturally. If the character has no one to tend him, however, his life is still in danger, and he may yet slip away.</p>
<p><strong className="hl">Recovering with Help:</strong> One hour after a tended, dying character becomes stable, the character must make a DC 10 Constitution check to become conscious. The character takes a penalty on this roll equal to his negative hit point total. Conscious characters with negative hit point totals are treated as <Link to="/rule/disabled_0_hit_points">disabled</Link> characters. If the character remains unconscious, he receives another check every hour to regain consciousness. A natural 20 on this check is an automatic success. Even if unconscious, the character recovers hit points naturally. He automatically regains consciousness when his hit points rise to 1 or higher.</p>
<p><strong className="hl">Recovering without Help:</strong> A severely wounded character left alone usually dies. He has a small chance of recovering on his own. Treat such characters as those attempting to recover with help, but every failed Constitution check to regain consciousness results in the loss of 1 hit point. An unaided character does not recover hit points naturally. Once conscious, the character can make a DC 10 Constitution check once per day, after resting for 8 hours, to begin recovering hit points naturally. The character takes a penalty on this roll equal to his negative hit point total. Failing this check causes the character to lose 1 hit point, but this does not cause the character to become unconscious. Once a character makes this check, he continues to heal naturally and is no longer in danger of losing hit points naturally.</p>
</>};
const _healing = {title: "Healing", parent_topics: ["combat","injury_and_death"], siblings: ["loss_of_hit_points","disabled_0_hit_points","dying_negative_hit_points","dead","stable_characters_and_recovery","healing","temporary_hit_points","nonlethal_damage"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 191</Link></p>
<p>After taking damage, you can recover hit points through natural healing or through magical healing. In any case, you can't regain hit points past your full normal hit point total.</p>
<p><strong className="hl">Natural Healing:</strong> With a full night's rest (8 hours of sleep or more), you recover 1 hit point per character level. Any significant interruption during your rest prevents you from healing that night.</p>
<p>If you undergo complete bed rest for an entire day and night, you recover twice your character level in hit points.</p>
<p><strong className="hl">Magical Healing:</strong> Various abilities and spells can restore hit points.</p>
<p><strong className="hl">Healing Limits:</strong> You can never recover more hit points than you lost. Magical healing won't raise your current hit points higher than your full normal hit point total.</p>
<p><strong className="hl">Healing Ability Damage:</strong> Temporary <Link to="/rule/ability_damage">ability damage</Link> returns at the rate of 1 point per night of rest (8 hours) for each affected ability score. Complete bed rest restores 2 points per day (24 hours) for each affected ability score.</p>
</>};
const _temporary_hit_points = {title: "Temporary Hit Points", parent_topics: ["combat","injury_and_death"], siblings: ["loss_of_hit_points","disabled_0_hit_points","dying_negative_hit_points","dead","stable_characters_and_recovery","healing","temporary_hit_points","nonlethal_damage"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 191</Link></p>
<p>Certain effects give a character temporary hit points. These hit points are in addition to the character's current hit point total and any damage taken by the character is subtracted from these hit points first. Any damage in excess of a character's temporary hit points is applied to his current hit points as normal. If the effect that grants the temporary hit points ends or is dispelled, any remaining temporary hit points go away. The damage they sustained is not transferred to the character's current hit points.</p>
<p>When temporary hit points are lost, they cannot be restored as real hit points can be, even by magic.</p>
<p><strong className="hl">Increases in Constitution Score and Current Hit Points:</strong> An increase in a character's Constitution score, even a temporary one, can give her more hit points (an effective hit point increase), but these are not temporary hit points. They can be restored, and they are not lost first as temporary hit points are.</p>
</>};
const _nonlethal_damage = {title: "Nonlethal Damage", parent_topics: ["combat","injury_and_death"], siblings: ["loss_of_hit_points","disabled_0_hit_points","dying_negative_hit_points","dead","stable_characters_and_recovery","healing","temporary_hit_points","nonlethal_damage"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 191</Link></p>
<p>Nonlethal damage represents harm to a character that is not life-threatening. Unlike normal damage, nonlethal damage is healed quickly with rest.</p>
<p><strong className="hl">Dealing Nonlethal Damage:</strong> Certain attacks deal nonlethal damage. Other effects, such as heat or being exhausted, also deal nonlethal damage. When you take nonlethal damage, keep a running total of how much you've accumulated. Do not deduct the nonlethal damage number from your current hit points. It is not "real" damage. Instead, when your nonlethal damage equals your current hit points, you're staggered (see below), and when it exceeds your current hit points, you fall unconscious.</p>
<p><strong className="hl">Nonlethal Damage with a Weapon that Deals Lethal Damage:</strong> You can use a melee weapon that deals lethal damage to deal nonlethal damage instead, but you take a -4 penalty on your attack roll.</p>
<p><strong className="hl">Lethal Damage with a Weapon that Deals Nonlethal Damage:</strong> You can use a weapon that deals nonlethal damage, including an unarmed strike, to deal lethal damage instead, but you take a -4 penalty on your attack roll.</p>
<p><strong className="hl">Staggered and Unconscious:</strong> When your nonlethal damage equals your current hit points, you're <Link to="/misc/staggered">staggered</Link>. You can only take a standard action or a move action in each round (in addition to free, immediate, and swift actions). You cease being staggered when your current hit points once again exceed your nonlethal damage. When your nonlethal damage exceeds your current hit points, you fall <Link to="/misc/unconscious">unconscious</Link>. While unconscious, you are <Link to="/misc/helpless">helpless</Link>.</p>
<p>Spellcasters who fall unconscious retain any spellcasting ability they had before going unconscious.</p>
<p>If a creature's nonlethal damage is equal to his total maximum hit points (not his current hit points), all further nonlethal damage is treated as lethal damage. This does not apply to creatures with <Link to="/umr/regeneration">regeneration</Link>. Such creatures simply accrue additional nonlethal damage, increasing the amount of time they remain unconscious.</p>
<p><strong className="hl">Healing Nonlethal Damage:</strong> You heal nonlethal damage at the rate of 1 hit point per hour per character level. When a spell or ability cures hit point damage, it also removes an equal amount of nonlethal damage.</p>
</>};
const _movement_position_and_distance = {title: "Movement, Position, and Distance", parent_topics: ["combat"], siblings: ["how_combat_works","combat_statistics","actions_in_combat","injury_and_death","movement_position_and_distance","big_and_little_creatures_in_combat","combat_modifiers","special_attacks","conditions","special_abilities_2"], subtopics: ["measuring_distance","moving_through_a_square","terrain_and_obstacles","special_movement_rules"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 192</Link></p>
<p>Your speed is determined by your race and your armor (see Table 8-3). Your speed while unarmored is your base land speed.</p>
<p><strong className="hl">Encumbrance:</strong> A character <Link to="/rule/encumbered">encumbered</Link> by carrying treasure, a large amount of gear, or fallen comrades may move slower than normal.</p>
<p><strong className="hl">Hampered Movement:</strong> Difficult terrain, obstacles, or poor visibility can hamper movement.</p>
<p><strong className="hl">Movement in Combat:</strong> Generally, you can move your speed in a round and still do something (take a move action and a standard action).</p>
<p>If you do nothing but move (that is, if you use both of your actions in a round to move your speed), you can move double your speed.</p>
<p>If you spend the entire round running, you can move quadruple your speed (or three times your speed in heavy armor). If you do something that requires a full round, you can only take a 5-foot step.</p>
<p><strong className="hl">Bonuses to Speed:</strong> A barbarian has a +10-foot bonus to her speed (unless she's wearing heavy armor). Experienced monks also have higher speed (unless they're wearing armor of any sort). In addition, many spells and magic items can affect a character's speed. Always apply any modifiers to a character's speed before adjusting the character's speed based on armor or encumbrance, and remember that multiple bonuses of the same type to a character's speed don't stack.</p>
<h3 id="rule-movement_position_and_distance-table-8-3-tactical-speed">Table 8-3: Tactical Speed</h3>
<ScrollContainer id="rule-movement_position_and_distance--table-0"><table>
<thead>
<tr>
<th>Race</th>
<th>No Armor or Light Armor</th>
<th>Medium or Heavy Armor</th>
</tr>
</thead>
<tbody><tr>
<td>Human, elf, half-elf, half-orc</td>
<td>30 ft. (6 squares)</td>
<td>20 ft. (4 squares)</td>
</tr>
<tr>
<td>Dwarf</td>
<td>20 ft. (4 squares)</td>
<td>20 ft. (4 squares)</td>
</tr>
<tr>
<td>Gnome, halfling</td>
<td>20 ft. (4 squares)</td>
<td>15 ft. (3 squares)</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _measuring_distance = {title: "Measuring Distance", parent_topics: ["combat","movement_position_and_distance"], siblings: ["measuring_distance","moving_through_a_square","terrain_and_obstacles","special_movement_rules"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 192</Link></p>
<p>As a general rule, distance is measured assuming that 1 square equals 5 feet.</p>
<p><strong className="hl">Diagonals:</strong> When measuring distance, the first diagonal counts as 1 square, the second counts as 2 squares, the third counts as 1, the fourth as 2, and so on. You can't move diagonally past a corner (even by taking a 5-foot step). You can move diagonally past a creature, even an opponent.</p>
<p>You can also move diagonally past other impassable obstacles, such as pits.</p>
<p><strong className="hl">Closest Creature:</strong> When it's important to determine the closest square or creature to a location, if two squares or creatures are equally close, randomly determine which one counts as closest by rolling a die.</p>
</>};
const _moving_through_a_square = {title: "Moving Through a Square", parent_topics: ["combat","movement_position_and_distance"], siblings: ["measuring_distance","moving_through_a_square","terrain_and_obstacles","special_movement_rules"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 193</Link></p>
<p>You can move through an unoccupied square without difficulty in most circumstances. Difficult terrain and a number of spell effects might hamper your movement through open spaces.</p>
<p><strong className="hl">Friend:</strong> You can move through a square occupied by a friendly character, unless you are charging. When you move through a square occupied by a friendly character, that character doesn't provide you with <Link to="/rule/cover">cover</Link>.</p>
<p><strong className="hl">Opponent:</strong> You can't move through a square occupied by an opponent unless the opponent is helpless. You can move through a square occupied by a helpless opponent without penalty. Some creatures, particularly very large ones, may present an obstacle even when helpless. In such cases, each square you move through counts as 2 squares.</p>
<p><strong className="hl">Ending Your Movement:</strong> You can't end your movement in the same square as another creature unless it is helpless.</p>
<p><strong className="hl">Overrun:</strong> During your movement, you can attempt to <Link to="/rule/overrun">move through a square</Link> occupied by an opponent.</p>
<p><strong className="hl">Tumbling:</strong> A trained character can attempt to use <Link to="/skill/acrobatics">Acrobatics</Link> to move through a square occupied by an opponent.</p>
<p><strong className="hl">Very Small Creature:</strong> A Fine, Diminutive, or Tiny creature can move into or through an occupied square. The creature provokes attacks of opportunity when doing so.</p>
<p><strong className="hl">Square Occupied by Creature Three Sizes Larger or Smaller:</strong> Any creature can move through a square occupied by a creature three size categories larger than itself.</p>
<p>A big creature can move through a square occupied by a creature three size categories smaller than it is. Creatures moving through squares occupied by other creatures provoke attacks of opportunity from those creatures.</p>
<p><strong className="hl">Designated Exceptions:</strong> Some creatures break the above rules. A creature that completely fills the squares it occupies cannot be moved past, even with the Acrobatics skill or similar special abilities.</p>
</>};
const _terrain_and_obstacles = {title: "Difficult Terrain and Obstacles", parent_topics: ["combat","movement_position_and_distance"], siblings: ["measuring_distance","moving_through_a_square","terrain_and_obstacles","special_movement_rules"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 193</Link></p>
<p>From tangled plants to broken stone, there are a number of terrain features that can affect your movement.</p>
<p><strong className="hl">Difficult Terrain:</strong> Difficult terrain, such as heavy undergrowth, broken ground, or steep stairs, hampers movement. Each square of difficult terrain counts as 2 squares of movement. Each diagonal move into a difficult terrain square counts as 3 squares. You can't run or charge across difficult terrain.</p>
<p>If you occupy squares with different kinds of terrain, you can move only as fast as the most difficult terrain you occupy will allow.</p>
<p>Flying and incorporeal creatures are not hampered by difficult terrain.</p>
<p><strong className="hl">Obstacles:</strong> Like difficult terrain, obstacles can hamper movement. If an obstacle hampers movement but doesn't completely block it, each obstructed square or obstacle between squares counts as 2 squares of movement. You must pay this cost to cross the obstacle, in addition to the cost to move into the square on the other side. If you don't have sufficient movement to cross the obstacle and move into the square on the other side, you can't cross it. Some obstacles may also require a skill check to cross.</p>
<p>On the other hand, some obstacles block movement entirely. A character can't move through a blocking obstacle.</p>
<p>Flying and incorporeal creatures are able to avoid most obstacles.</p>
<p><strong className="hl">Squeezing:</strong> In some cases, you may have to squeeze into or through an area that isn't as wide as the space you take up. You can squeeze through or into a space that is at least half as wide as your normal space. Each move into or through a narrow space counts as if it were 2 squares, and while squeezed in a narrow space, you take a -4 penalty on attack rolls and a -4 penalty to AC.</p>
<p>When a Large creature (which normally takes up 4 squares) squeezes into a space that's 1 square wide, the creature's miniature figure occupies 2 squares, centered on the line between the 2 squares. For a bigger creature, center the creature likewise in the area it squeezes into.</p>
<p>A creature can squeeze past a creature while moving but it can't end its movement in an occupied square.</p>
<p>To squeeze through or into a space less than half your space's width, you must use the Escape Artist skill. You can't attack while using Escape Artist to squeeze through or into a narrow space, you take a -4 penalty to AC, and you lose any Dexterity bonus to AC.</p>
</>};
const _special_movement_rules = {title: "Special Movement Rules", parent_topics: ["combat","movement_position_and_distance"], siblings: ["measuring_distance","moving_through_a_square","terrain_and_obstacles","special_movement_rules"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 194</Link></p>
<p>These rules cover special movement situations.</p>
<p><strong className="hl">Accidentally Ending Movement in an Illegal Space:</strong> Sometimes a character ends its movement while moving through a space where it's not allowed to stop. When that happens, put your miniature in the last legal position you occupied, or the closest legal position, if there's a legal position that's closer.</p>
<p><strong className="hl">Double Movement Cost:</strong> When your movement is hampered in some way, your movement usually costs double. For example, each square of movement through difficult terrain counts as 2 squares, and each diagonal move through such terrain counts as 3 squares (just as two diagonal moves normally do).</p>
<p>If movement cost is doubled twice, then each square counts as 4 squares (or as 6 squares if moving diagonally). If movement cost is doubled three times, then each square counts as 8 squares (12 if diagonal) and so on. This is an exception to the general rule that two doublings are equivalent to a tripling.</p>
<p><strong className="hl">Minimum Movement:</strong> Despite whatever penalties to movement you might have, you can take a full-round action to move 5 feet (1 square) in any direction, even diagonally. This rule doesn't allow you to move through impassable terrain or to move when all movement is prohibited. Such movement provokes attacks of opportunity as normal (despite the distance covered, this move isn't a 5-foot step).</p>
</>};
const _big_and_little_creatures_in_combat = {title: "Big and Little Creatures in Combat", parent_topics: ["combat"], siblings: ["how_combat_works","combat_statistics","actions_in_combat","injury_and_death","movement_position_and_distance","big_and_little_creatures_in_combat","combat_modifiers","special_attacks","conditions","special_abilities_2"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 194</Link></p>
<p>Creatures smaller than Small or larger than Medium have special rules relating to position.</p>
<p><strong className="hl">Tiny, Diminutive, and Fine Creatures:</strong> Very small creatures take up less than 1 square of space. This means that more than one such creature can fit into a single square. A Tiny creature typically occupies a space only 2-1/2 feet across, so four can fit into a single square. 25 Diminutive creatures or 100 Fine creatures can fit into a single square. Creatures that take up less than 1 square of space typically have a natural reach of 0 feet, meaning they can't reach into adjacent squares. They must enter an opponent's square to attack in melee. This provokes an attack of opportunity from the opponent. You can attack into your own square if you need to, so you can attack such creatures normally. Since they have no natural reach, they do not threaten the squares around them. You can move past them without provoking attacks of opportunity. They also can't flank an enemy.</p>
<p><strong className="hl">Large, Huge, Gargantuan, and Colossal Creatures:</strong> Very large creatures take up more than 1 square.</p>
<p>Creatures that take up more than 1 square typically have a natural reach of 10 feet or more, meaning that they can reach targets even if they aren't in adjacent squares.</p>
<p>Unlike when someone uses a reach weapon, a creature with greater than normal natural reach (more than 5 feet) still threatens squares adjacent to it. A creature with greater than normal natural reach usually gets an attack of opportunity against you if you approach it, because you must enter and move within the range of its reach before you can attack it. This attack of opportunity is not provoked if you take a 5-foot step.</p>
<p>Large or larger creatures using reach weapons can strike up to double their natural reach but can't strike at their natural reach or less.</p>
<h3 id="rule-big_and_little_creatures_in_combat-table-8-4-creature-size-and-scale">Table 8-4: Creature Size and Scale</h3>
<ScrollContainer id="rule-big_and_little_creatures_in_combat--table-0"><table>
<thead>
<tr>
<th>Creature Size</th>
<th>Space<sup><InnerLink showBacklink="backlink-rule-big_and_little_creatures_in_combat-ref-1-1" id="rule-big_and_little_creatures_in_combat-ref-1-1" data-hash-target to="rule-big_and_little_creatures_in_combat-1">1</InnerLink></sup></th>
<th>Natural Reach<sup><InnerLink showBacklink="backlink-rule-big_and_little_creatures_in_combat-ref-1-2" id="rule-big_and_little_creatures_in_combat-ref-1-2" data-hash-target to="rule-big_and_little_creatures_in_combat-1">1</InnerLink></sup></th>
</tr>
</thead>
<tbody><tr>
<td>Fine</td>
<td>1/2 ft.</td>
<td>0</td>
</tr>
<tr>
<td>Diminutive</td>
<td>1 ft.</td>
<td>0</td>
</tr>
<tr>
<td>Tiny</td>
<td>2-1/2 ft.</td>
<td>0</td>
</tr>
<tr>
<td>Small</td>
<td>5 ft.</td>
<td>5 ft.</td>
</tr>
<tr>
<td>Medium</td>
<td>5 ft.</td>
<td>5 ft.</td>
</tr>
<tr>
<td>Large (tall)</td>
<td>10 ft.</td>
<td>10 ft.</td>
</tr>
<tr>
<td>Large (long)</td>
<td>10 ft.</td>
<td>5 ft.</td>
</tr>
<tr>
<td>Huge (tall)</td>
<td>15 ft.</td>
<td>15 ft.</td>
</tr>
<tr>
<td>Huge (long)</td>
<td>15 ft.</td>
<td>10 ft.</td>
</tr>
<tr>
<td>Gargantuan (tall)</td>
<td>20 ft.</td>
<td>20 ft.</td>
</tr>
<tr>
<td>Gargantuan (long)</td>
<td>20 ft.</td>
<td>15 ft.</td>
</tr>
<tr>
<td>Colossal (tall)</td>
<td>30 ft.</td>
<td>30 ft.</td>
</tr>
<tr>
<td>Colossal (long)</td>
<td>30 ft.</td>
<td>20 ft.</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-big_and_little_creatures_in_combat-label">Footnotes</h3>
<ol>
<li id="rule-big_and_little_creatures_in_combat-1">
<p>These values are typical for creatures of the indicated size. Some exceptions exist. <InnerLink id="backlink-rule-big_and_little_creatures_in_combat-ref-1-1" data-hash-target to="rule-big_and_little_creatures_in_combat-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink> <InnerLink id="backlink-rule-big_and_little_creatures_in_combat-ref-1-2" data-hash-target to="rule-big_and_little_creatures_in_combat-ref-1-2" aria-label="Back to reference 1-2">↩<sup>2</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
const _combat_modifiers = {title: "Combat Modifiers", parent_topics: ["combat"], siblings: ["how_combat_works","combat_statistics","actions_in_combat","injury_and_death","movement_position_and_distance","big_and_little_creatures_in_combat","combat_modifiers","special_attacks","conditions","special_abilities_2"], subtopics: ["cover","concealment","flanking","helpless_defenders"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 195</Link></p>
<p>A number of factors and conditions can influence an attack roll. Many of these situations grant a bonus or penalty on attack rolls or to a defender's Armor Class.</p>
<h3 id="rule-combat_modifiers-table-8-5-attack-roll-modifiers">Table 8-5: Attack Roll Modifiers</h3>
<ScrollContainer id="rule-combat_modifiers--table-0"><table>
<thead>
<tr>
<th>Attacker is...</th>
<th>Melee</th>
<th>Ranged</th>
</tr>
</thead>
<tbody><tr>
<td>Dazzled</td>
<td>-1</td>
<td>-1</td>
</tr>
<tr>
<td>Entangled</td>
<td>-2<sup><InnerLink showBacklink="backlink-rule-combat_modifiers-ref-1-1" id="rule-combat_modifiers-ref-1-1" data-hash-target to="rule-combat_modifiers-1">1</InnerLink></sup></td>
<td>-2<sup><InnerLink showBacklink="backlink-rule-combat_modifiers-ref-1-2" id="rule-combat_modifiers-ref-1-2" data-hash-target to="rule-combat_modifiers-1">1</InnerLink></sup></td>
</tr>
<tr>
<td>Flanking defender</td>
<td>+2</td>
<td>-</td>
</tr>
<tr>
<td>Invisible</td>
<td>+2<sup><InnerLink showBacklink="backlink-rule-combat_modifiers-ref-2-1" id="rule-combat_modifiers-ref-2-1" data-hash-target to="rule-combat_modifiers-2">2</InnerLink></sup></td>
<td>+2<sup><InnerLink showBacklink="backlink-rule-combat_modifiers-ref-2-2" id="rule-combat_modifiers-ref-2-2" data-hash-target to="rule-combat_modifiers-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>On higher ground</td>
<td>+1</td>
<td>+0</td>
</tr>
<tr>
<td>Prone</td>
<td>-4</td>
<td>-<sup><InnerLink showBacklink="backlink-rule-combat_modifiers-ref-3-1" id="rule-combat_modifiers-ref-3-1" data-hash-target to="rule-combat_modifiers-3">3</InnerLink></sup></td>
</tr>
<tr>
<td>Shaken or frightened</td>
<td>-2</td>
<td>-2</td>
</tr>
<tr>
<td>Squeezing through a space</td>
<td>-4</td>
<td>-4</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-combat_modifiers-table-8-6-armor-class-modifiers">Table 8-6: Armor Class Modifiers</h3>
<ScrollContainer id="rule-combat_modifiers--table-1"><table>
<thead>
<tr>
<th>Defender is...</th>
<th>Melee</th>
<th>Ranged</th>
</tr>
</thead>
<tbody><tr>
<td>Behind cover</td>
<td>+4</td>
<td>+4</td>
</tr>
<tr>
<td>Blinded</td>
<td>-2<sup><InnerLink showBacklink="backlink-rule-combat_modifiers-ref-4-1" id="rule-combat_modifiers-ref-4-1" data-hash-target to="rule-combat_modifiers-4">4</InnerLink></sup></td>
<td>-2<sup><InnerLink showBacklink="backlink-rule-combat_modifiers-ref-4-2" id="rule-combat_modifiers-ref-4-2" data-hash-target to="rule-combat_modifiers-4">4</InnerLink></sup></td>
</tr>
<tr>
<td>Concealed or invisible</td>
<td>See Concealment</td>
<td>See Concealment</td>
</tr>
<tr>
<td>Cowering</td>
<td>-2<sup><InnerLink showBacklink="backlink-rule-combat_modifiers-ref-4-3" id="rule-combat_modifiers-ref-4-3" data-hash-target to="rule-combat_modifiers-4">4</InnerLink></sup></td>
<td>-2<sup><InnerLink showBacklink="backlink-rule-combat_modifiers-ref-4-4" id="rule-combat_modifiers-ref-4-4" data-hash-target to="rule-combat_modifiers-4">4</InnerLink></sup></td>
</tr>
<tr>
<td>Entangled</td>
<td>+0<sup><InnerLink showBacklink="backlink-rule-combat_modifiers-ref-2-3" id="rule-combat_modifiers-ref-2-3" data-hash-target to="rule-combat_modifiers-2">2</InnerLink></sup></td>
<td>+0<sup><InnerLink showBacklink="backlink-rule-combat_modifiers-ref-2-4" id="rule-combat_modifiers-ref-2-4" data-hash-target to="rule-combat_modifiers-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>Flat-footed</td>
<td>+0<sup><InnerLink showBacklink="backlink-rule-combat_modifiers-ref-4-5" id="rule-combat_modifiers-ref-4-5" data-hash-target to="rule-combat_modifiers-4">4</InnerLink></sup></td>
<td>+0<sup><InnerLink showBacklink="backlink-rule-combat_modifiers-ref-4-6" id="rule-combat_modifiers-ref-4-6" data-hash-target to="rule-combat_modifiers-4">4</InnerLink></sup></td>
</tr>
<tr>
<td>Grappling (but the attacker is not)</td>
<td>+0</td>
<td>+0</td>
</tr>
<tr>
<td>Helpless</td>
<td>-4<sup><InnerLink showBacklink="backlink-rule-combat_modifiers-ref-5-1" id="rule-combat_modifiers-ref-5-1" data-hash-target to="rule-combat_modifiers-5">5</InnerLink></sup></td>
<td>+0<sup><InnerLink showBacklink="backlink-rule-combat_modifiers-ref-5-2" id="rule-combat_modifiers-ref-5-2" data-hash-target to="rule-combat_modifiers-5">5</InnerLink></sup></td>
</tr>
<tr>
<td>Kneeling or sitting</td>
<td>-2</td>
<td>+2</td>
</tr>
<tr>
<td>Pinned</td>
<td>-4<sup><InnerLink showBacklink="backlink-rule-combat_modifiers-ref-5-3" id="rule-combat_modifiers-ref-5-3" data-hash-target to="rule-combat_modifiers-5">5</InnerLink></sup></td>
<td>+0<sup><InnerLink showBacklink="backlink-rule-combat_modifiers-ref-5-4" id="rule-combat_modifiers-ref-5-4" data-hash-target to="rule-combat_modifiers-5">5</InnerLink></sup></td>
</tr>
<tr>
<td>Prone</td>
<td>-4</td>
<td>+4</td>
</tr>
<tr>
<td>Squeezing through a space</td>
<td>-4</td>
<td>-4</td>
</tr>
<tr>
<td>Stunned</td>
<td>-2<sup><InnerLink showBacklink="backlink-rule-combat_modifiers-ref-4-7" id="rule-combat_modifiers-ref-4-7" data-hash-target to="rule-combat_modifiers-4">4</InnerLink></sup></td>
<td>-2<sup><InnerLink showBacklink="backlink-rule-combat_modifiers-ref-4-8" id="rule-combat_modifiers-ref-4-8" data-hash-target to="rule-combat_modifiers-4">4</InnerLink></sup></td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-combat_modifiers-label">Footnotes</h3>
<ol>
<li id="rule-combat_modifiers-1">
<p>An entangled character also takes a -4 penalty to Dexterity, which may affect his attack roll. <InnerLink id="backlink-rule-combat_modifiers-ref-1-1" data-hash-target to="rule-combat_modifiers-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink> <InnerLink id="backlink-rule-combat_modifiers-ref-1-2" data-hash-target to="rule-combat_modifiers-ref-1-2" aria-label="Back to reference 1-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="rule-combat_modifiers-2">
<p>The defender loses any Dexterity bonus to AC. <InnerLink id="backlink-rule-combat_modifiers-ref-2-1" data-hash-target to="rule-combat_modifiers-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink> <InnerLink id="backlink-rule-combat_modifiers-ref-2-2" data-hash-target to="rule-combat_modifiers-ref-2-2" aria-label="Back to reference 2-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-combat_modifiers-ref-2-3" data-hash-target to="rule-combat_modifiers-ref-2-3" aria-label="Back to reference 2-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-rule-combat_modifiers-ref-2-4" data-hash-target to="rule-combat_modifiers-ref-2-4" aria-label="Back to reference 2-4">↩<sup>4</sup></InnerLink></p>
</li>
<li id="rule-combat_modifiers-3">
<p>Most ranged weapons can't be used while the attacker is prone, but you can use a crossbow or shuriken while prone at no penalty. <InnerLink id="backlink-rule-combat_modifiers-ref-3-1" data-hash-target to="rule-combat_modifiers-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
<li id="rule-combat_modifiers-4">
<p>The defender loses any Dexterity bonus to AC. <InnerLink id="backlink-rule-combat_modifiers-ref-4-1" data-hash-target to="rule-combat_modifiers-ref-4-1" aria-label="Back to reference 4-1">↩</InnerLink> <InnerLink id="backlink-rule-combat_modifiers-ref-4-2" data-hash-target to="rule-combat_modifiers-ref-4-2" aria-label="Back to reference 4-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-combat_modifiers-ref-4-3" data-hash-target to="rule-combat_modifiers-ref-4-3" aria-label="Back to reference 4-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-rule-combat_modifiers-ref-4-4" data-hash-target to="rule-combat_modifiers-ref-4-4" aria-label="Back to reference 4-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-rule-combat_modifiers-ref-4-5" data-hash-target to="rule-combat_modifiers-ref-4-5" aria-label="Back to reference 4-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-rule-combat_modifiers-ref-4-6" data-hash-target to="rule-combat_modifiers-ref-4-6" aria-label="Back to reference 4-6">↩<sup>6</sup></InnerLink> <InnerLink id="backlink-rule-combat_modifiers-ref-4-7" data-hash-target to="rule-combat_modifiers-ref-4-7" aria-label="Back to reference 4-7">↩<sup>7</sup></InnerLink> <InnerLink id="backlink-rule-combat_modifiers-ref-4-8" data-hash-target to="rule-combat_modifiers-ref-4-8" aria-label="Back to reference 4-8">↩<sup>8</sup></InnerLink></p>
</li>
<li id="rule-combat_modifiers-5">
<p>The defender is denied his Dexterity bonus to his Armor Class. <InnerLink id="backlink-rule-combat_modifiers-ref-5-1" data-hash-target to="rule-combat_modifiers-ref-5-1" aria-label="Back to reference 5-1">↩</InnerLink> <InnerLink id="backlink-rule-combat_modifiers-ref-5-2" data-hash-target to="rule-combat_modifiers-ref-5-2" aria-label="Back to reference 5-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-combat_modifiers-ref-5-3" data-hash-target to="rule-combat_modifiers-ref-5-3" aria-label="Back to reference 5-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-rule-combat_modifiers-ref-5-4" data-hash-target to="rule-combat_modifiers-ref-5-4" aria-label="Back to reference 5-4">↩<sup>4</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
const _cover = {title: "Cover", parent_topics: ["combat","combat_modifiers"], siblings: ["cover","concealment","flanking","helpless_defenders"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 195</Link></p>
<p>To determine whether your target has cover from your ranged attack, choose a corner of your square. If any line from this corner to any corner of the target's square passes through a square or border that blocks line of effect or provides cover, or through a square occupied by a creature, the target has cover (+4 to AC).</p>
<p>When making a melee attack against an adjacent target, your target has cover if any line from any corner of your square to the target's square goes through a wall (including a low wall). When making a melee attack against a target that isn't adjacent to you (such as with a reach weapon), use the rules for determining cover from ranged attacks.</p>
<p><strong className="hl">Low Obstacles and Cover:</strong> A low obstacle (such as a wall no higher than half your height) provides cover, but only to creatures within 30 feet (6 squares) of it. The attacker can ignore the cover if he's closer to the obstacle than his target.</p>
<p><strong className="hl">Cover and Attacks of Opportunity:</strong> You can't execute an attack of opportunity against an opponent with cover relative to you.</p>
<p><strong className="hl">Cover and Reflex Saves:</strong> Cover grants you a +2 bonus on Reflex saves against attacks that originate or burst out from a point on the other side of the cover from you. Note that spread effects can extend around corners and thus negate this cover bonus.</p>
<p><strong className="hl">Cover and Stealth Checks:</strong> You can use cover to make a Stealth check. Without cover, you usually need <Link to="/rule/concealment">concealment</Link> to make a Stealth check.</p>
<p><strong className="hl">Soft Cover:</strong> Creatures, even your enemies, can provide you with cover against ranged attacks, giving you a +4 bonus to AC. However, such soft cover provides no bonus on Reflex saves, nor does soft cover allow you to make a Stealth check.</p>
<p><strong className="hl">Big Creatures and Cover:</strong> Any creature with a space larger than 5 feet (1 square) determines cover against melee attacks slightly differently than smaller creatures do. Such a creature can choose any square that it occupies to determine if an opponent has cover against its melee attacks. Similarly, when making a melee attack against such a creature, you can pick any of the squares it occupies to determine if it has cover against you.</p>
<p><strong className="hl">Partial Cover:</strong> If a creature has cover, but more than half the creature is visible, its cover bonus is reduced to a +2 to AC and a +1 bonus on Reflex saving throws. This partial cover is subject to the GM's discretion.</p>
<p><strong className="hl">Total Cover:</strong> If you don't have line of effect to your target (that is, you cannot draw any line from your square to your target's square without crossing a solid barrier), he is considered to have total cover from you. You can't make an attack against a target that has total cover.</p>
<p><strong className="hl">Improved Cover:</strong> In some cases, such as attacking a target hiding behind an arrowslit, cover may provide a greater bonus to AC and Reflex saves. In such situations, the normal cover bonuses to AC and Reflex saves can be doubled (to +8 and +4, respectively). A creature with this improved cover effectively gains improved evasion against any attack to which the Reflex save bonus applies. Furthermore, improved cover provides a +10 bonus on Stealth checks.</p>
</>};
const _concealment = {title: "Concealment", parent_topics: ["combat","combat_modifiers"], siblings: ["cover","concealment","flanking","helpless_defenders"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 196</Link></p>
<p>To determine whether your target has concealment from your ranged attack, choose a corner of your square. If any line from this corner to any corner of the target's square passes through a square or border that provides concealment, the target has concealment.</p>
<p>When making a melee attack against an adjacent target, your target has concealment if his space is entirely within an effect that grants concealment. When making a melee attack against a target that isn't adjacent to you, use the rules for determining concealment from ranged attacks.</p>
<p>In addition, some magical effects provide concealment against all attacks, regardless of whether any intervening concealment exists.</p>
<p><strong className="hl">Concealment Miss Chance:</strong> Concealment gives the subject of a successful attack a 20% chance that the attacker missed because of the concealment. Make the attack normally - if the attacker hits, the defender must make a miss chance d% roll to avoid being struck. Multiple concealment conditions do not stack.</p>
<p><strong className="hl">Concealment and Stealth Checks:</strong> You can use concealment to make a Stealth check. Without concealment, you usually need cover to make a Stealth check.</p>
<p><strong className="hl">Total Concealment:</strong> If you have line of effect to a target but not line of sight, he is considered to have total concealment from you. You can't attack an opponent that has total concealment, though you can attack into a square that you think he occupies. A successful attack into a square occupied by an enemy with total concealment has a 50% miss chance (instead of the normal 20% miss chance for an opponent with concealment).</p>
<p>You can't execute an attack of opportunity against an opponent with total concealment, even if you know what square or squares the opponent occupies.</p>
<p><strong className="hl">Ignoring Concealment:</strong> Concealment isn't always effective. An area of dim lighting or darkness doesn't provide any concealment against an opponent with darkvision. Characters with low-light vision can see clearly for a greater distance than other characters with the same light source. Although invisibility provides total concealment, sighted opponents may still make Perception checks to notice the location of an invisible character. An invisible character gains a +20 bonus on Stealth checks if moving, or a +40 bonus on Stealth checks when not moving (even though opponents can't see you, they might be able to figure out where you are from other visual or auditory clues).</p>
<p><strong className="hl">Varying Degrees of Concealment:</strong> Certain situations may provide more or less than typical concealment, and modify the miss chance accordingly.</p>
</>};
const _flanking = {title: "Flanking", parent_topics: ["combat","combat_modifiers"], siblings: ["cover","concealment","flanking","helpless_defenders"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 197</Link></p>
<p>When making a melee attack, you get a +2 flanking bonus if your opponent is threatened by another enemy character or creature on its opposite border or opposite corner.</p>
<p>When in doubt about whether two characters flank an opponent in the middle, trace an imaginary line between the two attackers' centers. If the line passes through opposite borders of the opponent's space (including corners of those borders), then the opponent is flanked.</p>
<p><strong className="hl">Exception:</strong> If a flanker takes up more than 1 square, it gets the flanking bonus if any square it occupies counts for flanking.</p>
<p>Only a creature or character that threatens the defender can help an attacker get a flanking bonus.</p>
<p>Creatures with a reach of 0 feet can't flank an opponent.</p>
</>};
const _helpless_defenders = {title: "Helpless Defenders", parent_topics: ["combat","combat_modifiers"], siblings: ["cover","concealment","flanking","helpless_defenders"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 197</Link></p>
<p>A helpless opponent is someone who is bound, sleeping, paralyzed, unconscious, or otherwise at your mercy.</p>
<p><strong className="hl">Regular Attack:</strong> A helpless character takes a -4 penalty to AC against melee attacks. In addition, a helpless character is treated as having a Dexterity of 0, giving him a -5 penalty to AC against both melee and ranged attacks (for a total of -9 against melee and -5 against ranged). A helpless character is also flat-footed.</p>
<p><strong className="hl">Coup de Grace:</strong> As a full-round action, you can use a melee weapon to deliver a coup de grace (pronounced "coo day grahs") to a helpless opponent. You can also use a bow or crossbow, provided you are adjacent to the target.</p>
<p>You automatically hit and score a critical hit. If the defender survives the damage, he must make a Fortitude save (DC 10 + damage dealt) or die. A rogue also gets her extra sneak attack damage against a helpless opponent when delivering a coup de grace.</p>
<p>Delivering a coup de grace provokes attacks of opportunity from threatening opponents.</p>
<p>You can't deliver a coup de grace against a creature that is immune to critical hits. You can deliver a coup de grace against a creature with total <Link to="/rule/concealment">concealment</Link>, but doing this requires two consecutive full-round actions (one to "find" the creature once you've determined what square it's in, and one to deliver the coup de grace).</p>
</>};
const _special_attacks = {title: "Special Attacks", parent_topics: ["combat"], siblings: ["how_combat_works","combat_statistics","actions_in_combat","injury_and_death","movement_position_and_distance","big_and_little_creatures_in_combat","combat_modifiers","special_attacks","conditions","special_abilities_2"], subtopics: ["aid_another_2","charge","combat_maneuvers","feint","mounted_combat","throw_splash_weapon","two_weapon_fighting"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 197</Link></p>
<p>This section discusses all of the various standard maneuvers you can perform during combat other than normal attacks, casting spells, or using other class abilities. Some of these special attacks can be made as part of another action (such as an attack) or as an attack of opportunity.</p>
</>};
const _aid_another_2 = {title: "Aid Another", parent_topics: ["combat","special_attacks"], siblings: ["aid_another_2","charge","combat_maneuvers","feint","mounted_combat","throw_splash_weapon","two_weapon_fighting"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 197</Link></p>
<p>In melee combat, you can help a friend attack or defend by distracting or interfering with an opponent. If you're in position to make a melee attack on an opponent that is engaging a friend in melee combat, you can attempt to aid your friend as a standard action. You make an attack roll against AC 10. If you succeed, your friend gains either a +2 bonus on his next attack roll against that opponent or a +2 bonus to AC against that opponent's next attack (your choice), as long as that attack comes before the beginning of your next turn. Multiple characters can aid the same friend, and similar bonuses stack.</p>
<p>You can also use this standard action to help a friend in other ways, such as when he is affected by a spell, or to assist another character's skill check.</p>
<p>Also see: <Link to="/rule/aid_another">Aid Another</Link> (in the Skills section).</p>
</>};
const _charge = {title: "Charge", parent_topics: ["combat","special_attacks"], siblings: ["aid_another_2","charge","combat_maneuvers","feint","mounted_combat","throw_splash_weapon","two_weapon_fighting"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 198</Link></p>
<p>Charging is a special full-round action that allows you to move up to twice your speed and attack during the action. Charging, however, carries tight restrictions on how you can move.</p>
<p><strong className="hl">Movement During a Charge:</strong> You must move before your attack, not after. You must move at least 10 feet (2 squares) and may move up to double your speed directly toward the designated opponent. If you move a distance equal to your speed or less, you can also draw a weapon during a charge attack if your base attack bonus is at least +1. You must have a clear path toward the opponent, and nothing can hinder your movement (such as difficult terrain or obstacles). You must move to the closest space from which you can attack the opponent. If this space is occupied or otherwise blocked, you can't charge. If any line from your starting space to the ending space passes through a square that blocks movement, slows movement, or contains a creature (even an ally), you can't charge. Helpless creatures don't stop a charge.</p>
<p>If you don't have line of sight to the opponent at the start of your turn, you can't charge that opponent.</p>
<p>You can't take a 5-foot step in the same round as a charge. If you are able to take only a standard action on your turn, you can still charge, but you are only allowed to move up to your speed (instead of up to double your speed) and you cannot draw a weapon unless you possess the <Link to="/feat/quick_draw">Quick Draw</Link> feat. You can't use this option unless you are restricted to taking only a standard action on your turn.</p>
<p><strong className="hl">Attacking on a Charge:</strong> After moving, you may make a single melee attack. You get a +2 bonus on the attack roll and take a -2 penalty to your AC until the start of your next turn.</p>
<p>A charging character gets a +2 bonus on combat maneuver attack rolls made to <Link to="/rule/bull_rush">bull rush</Link> an opponent.</p>
<p>Even if you have extra attacks, such as from having a high enough base attack bonus or from using multiple weapons, you only get to make one attack during a charge.</p>
<p><strong className="hl">Lances and Charge Attacks:</strong> A lance deals double damage if employed by a mounted character in a charge.</p>
<p><strong className="hl">Weapons Readied against a Charge:</strong> Spears, tridents, and other weapons with the brace feature deal double damage when readied (set) and used against a charging character.</p>
</>};
const _combat_maneuvers = {title: "Combat Maneuvers", parent_topics: ["combat","special_attacks"], siblings: ["aid_another_2","charge","combat_maneuvers","feint","mounted_combat","throw_splash_weapon","two_weapon_fighting"], subtopics: ["bull_rush","dirty_trick","disarm","drag","grapple","overrun","reposition","steal","sunder","trip"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 198</Link></p>
<p>During combat, you can attempt to perform a number of maneuvers that can hinder or even cripple your foe, including bull rush, disarm, grapple, overrun, sunder, and trip. Although these maneuvers have vastly different results, they all use a similar mechanic to determine success.</p>
<p><strong className="hl">Combat Maneuver Bonus:</strong> Each character and creature has a Combat Maneuver Bonus (or CMB) that represents its skill at performing combat maneuvers. A creature's CMB is determined using the following formula:</p>
<blockquote>
<p>CMB = Base attack bonus + Strength modifier + special size modifier</p>
</blockquote>
<p>Creatures that are size Tiny or smaller use their Dexterity modifier in place of their Strength modifier to determine their CMB. The special size modifier for a creature's Combat Maneuver Bonus is as follows: Fine -8, Diminutive -4, Tiny -2, Small -1, Medium +0, Large +1, Huge +2, Gargantuan +4, Colossal +8. Some feats and abilities grant a bonus to your CMB when performing specific maneuvers.</p>
<p><strong className="hl">Performing a Combat Maneuver:</strong> When performing a combat maneuver, you must use an action appropriate to the maneuver you are attempting to perform. While many combat maneuvers can be performed as part of an attack action, full-attack action, or attack of opportunity (in place of a melee attack), others require a specific action. Unless otherwise noted, performing a combat maneuver provokes an attack of opportunity from the target of the maneuver. If you are hit by the target, you take the damage normally and apply that amount as a penalty to the attack roll to perform the maneuver. If your target is immobilized, unconscious, or otherwise incapacitated, your maneuver automatically succeeds (treat as if you rolled a natural 20 on the attack roll). If your target is stunned, you receive a +4 bonus on your attack roll to perform a combat maneuver against it.</p>
<p>When you attempt to perform a combat maneuver, make an attack roll and add your CMB in place of your normal attack bonus. Add any bonuses you currently have on attack rolls due to spells, feats, and other effects. These bonuses must be applicable to the weapon or attack used to perform the maneuver. The DC of this maneuver is your target's Combat Maneuver Defense. Combat maneuvers are attack rolls, so you must roll for <Link to="/rule/concealment">concealment</Link> and take any other penalties that would normally apply to an attack roll.</p>
<p><strong className="hl">Combat Maneuver Defense:</strong> Each character and creature has a Combat Maneuver Defense (or CMD) that represents its ability to resist combat maneuvers. A creature's CMD is determined using the following formula:</p>
<blockquote>
<p>CMD = 10 + Base attack bonus + Strength modifier + Dexterity modifier + special size modifier</p>
</blockquote>
<ScrollContainer id="rule-combat_maneuvers--table-0"><table>
<thead>
<tr>
<th>Size</th>
<th>Special Size Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Fine</td>
<td>-8</td>
</tr>
<tr>
<td>Diminutive</td>
<td>-4</td>
</tr>
<tr>
<td>Tiny</td>
<td>-2</td>
</tr>
<tr>
<td>Small</td>
<td>-1</td>
</tr>
<tr>
<td>Medium</td>
<td>+0</td>
</tr>
<tr>
<td>Large</td>
<td>+1</td>
</tr>
<tr>
<td>Huge</td>
<td>+2</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>+4</td>
</tr>
<tr>
<td>Colossal</td>
<td>+8</td>
</tr>
</tbody></table></ScrollContainer>
<p>Some feats and abilities grant a bonus to your CMD when resisting specific maneuvers. A creature can also add any circumstance, deflection, dodge, insight, luck, morale, profane, and sacred bonuses to AC to its CMD. Any penalties to a creature's AC also apply to its CMD. A flat-footed creature does not add its Dexterity bonus to its CMD.</p>
<p><strong className="hl">Determine Success:</strong> If your attack roll equals or exceeds the CMD of the target, your maneuver is a success and has the listed effect. Some maneuvers, such as bull rush, have varying levels of success depending on how much your attack roll exceeds the target's CMD. Rolling a natural 20 while attempting a combat maneuver is always a success (except when attempting to escape from bonds), while rolling a natural 1 is always a failure.</p>
</>};
const _bull_rush = {title: "Bull Rush", parent_topics: ["combat","special_attacks","combat_maneuvers"], siblings: ["bull_rush","dirty_trick","disarm","drag","grapple","overrun","reposition","steal","sunder","trip"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 199</Link></p>
<p>You can make a bull rush as a standard action or as part of a charge, in place of the melee attack. You can only bull rush an opponent who is no more than one size category larger than you. A bull rush attempts to push an opponent straight back without doing any harm. If you do not have the <Link to="/feat/improved_bull_rush">Improved Bull Rush</Link> feat, or a similar ability, initiating a bull rush provokes an attack of opportunity from the target of your maneuver.</p>
<p>If your attack is successful, your target is pushed back 5 feet. For every 5 by which your attack exceeds your opponent's CMD you can push the target back an additional 5 feet. You can move with the target if you wish but you must have the available movement to do so. If your attack fails, your movement ends in front of the target.</p>
<p>An enemy being moved by a bull rush does not provoke an attack of opportunity because of the movement unless you possess the <Link to="/feat/greater_bull_rush">Greater Bull Rush</Link> feat. You cannot bull rush a creature into a square that is occupied by a solid object or obstacle. If there is another creature in the way of your bull rush, you must immediately make a combat maneuver check to bull rush that creature. You take a -4 penalty on this check for each creature being pushed beyond the first. If you are successful, you can continue to push the creatures a distance equal to the lesser result. For example, if a fighter bull rushes a goblin for a total of 15 feet, but there is another goblin 5 feet behind the first, he must make another combat maneuver check against the second goblin after having pushed the first 5 feet. If his check reveals that he can push the second goblin a total of 20 feet, he can continue to push both goblins another 10 feet (since the first goblin will have moved a total of 15 feet).</p>
</>};
const _dirty_trick = {title: "Dirty Trick", parent_topics: ["combat","special_attacks","combat_maneuvers"], siblings: ["bull_rush","dirty_trick","disarm","drag","grapple","overrun","reposition","steal","sunder","trip"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 321</Link></p>
<p>You can attempt to hinder a foe in melee as a standard action. This maneuver covers any sort of situational attack that imposes a penalty on a foe for a short period of time. Examples include kicking sand into an opponent's face to blind him for 1 round, pulling down an enemy's pants to halve his speed, or hitting a foe in a sensitive spot to make him sickened for a round. The GM is the arbiter of what can be accomplished with this maneuver, but it cannot be used to impose a permanent penalty, and the results can be undone if the target spends a move action. If you do not have the <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link> feat or a similar ability, attempting a dirty trick provokes an attack of opportunity from the target of your maneuver.</p>
<p>If your attack is successful, the target takes a penalty. The penalty is limited to one of the following conditions: blinded, dazzled, deafened, entangled, shaken, or sickened. This condition lasts for 1 round. For every 5 by which your attack exceeds your opponent's CMD, the penalty lasts 1 additional round. This penalty can usually be removed if the target spends a move action. If you possess the <Link to="/feat/greater_dirty_trick">Greater Dirty Trick</Link> feat, the penalty lasts for 1d4 rounds, plus 1 round for every 5 by which your attack exceeds your opponent's CMD. In addition, removing the condition requires the target to spend a standard action.</p>
</>};
const _disarm = {title: "Disarm", parent_topics: ["combat","special_attacks","combat_maneuvers"], siblings: ["bull_rush","dirty_trick","disarm","drag","grapple","overrun","reposition","steal","sunder","trip"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 199</Link></p>
<p>You can attempt to disarm your opponent in place of a melee attack. If you do not have the <Link to="/feat/improved_disarm">Improved Disarm</Link> feat, or a similar ability, attempting to disarm a foe provokes an attack of opportunity from the target of your maneuver. Attempting to disarm a foe while unarmed imposes a -4 penalty on the attack.</p>
<p>If your attack is successful, your target drops one item it is carrying of your choice (even if the item is wielded with two hands). If your attack exceeds the CMD of the target by 10 or more, the target drops the items it is carrying in both hands (maximum two items if the target has more than two hands). If your attack fails by 10 or more, you drop the weapon that you were using to attempt the disarm. If you successfully disarm your opponent without using a weapon, you may automatically pick up the item dropped.</p>
</>};
const _drag = {title: "Drag", parent_topics: ["combat","special_attacks","combat_maneuvers"], siblings: ["bull_rush","dirty_trick","disarm","drag","grapple","overrun","reposition","steal","sunder","trip"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 321</Link></p>
<p>You can attempt to drag a foe as a standard action. You can only drag an opponent who is no more than one size category larger than you. The aim of this maneuver is to drag a foe in a straight line behind you without doing any harm. If you do not have the <Link to="/feat/improved_drag">Improved Drag</Link> feat or a similar ability, initiating a drag provokes an attack of opportunity from the target of your maneuver.</p>
<p>If your attack is successful, both you and your target are moved 5 feet back, with your opponent occupying your original space and you in the space behind that in a straight line. For every 5 by which your attack exceeds your opponent's CMD, you can drag the target back an additional 5 feet. You must be able to move with the target to perform this maneuver. If you do not have enough movement, the drag goes to the maximum amount of movement available to you and ends.</p>
<p>An enemy being moved by a drag does not provoke an attack of opportunity because of the movement unless you possess the <Link to="/feat/greater_drag">Greater Drag</Link> feat. You cannot move a creature into a square that is occupied by a solid object or obstacle. If there is another creature in the way of your movement, the drag ends adjacent to that creature.</p>
<p><strong className="hl">Stability:</strong> Some characters or types of creatures prove particularly sure-footed, making them more difficult to overthrow and move around the battlefield. Any racial ability that grants a bonus to CMD versus bull rush attempts grants the same bonus against drag combat maneuvers.</p>
</>};
const _grapple = {title: "Grapple", parent_topics: ["combat","special_attacks","combat_maneuvers"], siblings: ["bull_rush","dirty_trick","disarm","drag","grapple","overrun","reposition","steal","sunder","trip"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 199</Link></p>
<p>As a standard action, you can attempt to grapple a foe, hindering his combat options. If you do not have <Link to="/feat/improved_grapple">Improved Grapple</Link>, grab, or a similar ability, attempting to grapple a foe provokes an attack of opportunity from the target of your maneuver. Humanoid creatures without two free hands attempting to grapple a foe take a -4 penalty on the combat maneuver roll. If successful, both you and the target gain the <Link to="/rule/grapple_conditions">grappled condition</Link>. If you successfully grapple a creature that is not adjacent to you, move that creature to an adjacent open space (if no space is available, your grapple fails). Although both creatures have the grappled condition, you can, as the creature that initiated the grapple, release the grapple as a free action, removing the condition from both you and the target. If you do not release the grapple, you must continue to make a check each round, as a standard action, to maintain the hold. If your target does not break the grapple, you get a +5 circumstance bonus on grapple checks made against the same target in subsequent rounds. Once you are grappling an opponent, a successful check allows you to continue grappling the foe, and also allows you to perform one of the following actions (as part of the standard action spent to maintain the grapple).</p>
<p><strong className="hl">Move:</strong> You can move both yourself and your target up to half your speed. At the end of your movement, you can place your target in any square adjacent to you. If you attempt to place your foe in a hazardous location, such as in a wall of fire or over a pit, the target receives a free attempt to break your grapple with a +4 bonus.</p>
<p><strong className="hl">Damage:</strong> You can inflict damage to your target equal to your unarmed strike, a natural attack, or an attack made with armor spikes or a light or one-handed weapon. This damage can be either lethal or nonlethal.</p>
<p><strong className="hl">Pin:</strong> You can give your opponent the <Link to="/rule/grapple_conditions">pinned condition</Link>. Despite pinning your opponent, you still only have the grappled condition, but you lose your Dexterity bonus to AC.</p>
<p><strong className="hl">Tie Up:</strong> If you have your target pinned, otherwise restrained, or unconscious, you can use rope to tie him up. This works like a pin effect, but the DC to escape the bonds is equal to 20 + your Combat Maneuver Bonus (instead of your CMD). The ropes do not need to make a check every round to maintain the pin. If you are grappling the target, you can attempt to tie him up in ropes, but doing so requires a combat maneuver check at a -10 penalty. If the DC to escape from these bindings is higher than 20 + the target's CMB, the target cannot escape from the bonds, even with a natural 20 on the check.</p>
<p><strong className="hl">If You Are Grappled:</strong> If you are grappled, you can attempt to break the grapple as a standard action by making a combat maneuver check (DC equal to your opponent's CMD; this does not provoke an attack of opportunity) or Escape Artist check (with a DC equal to your opponent's CMD). If you succeed, you break the grapple and can act normally. Alternatively, if you succeed, you can become the grappler, grappling the other creature (meaning that the other creature cannot freely release the grapple without making a combat maneuver check, while you can). Instead of attempting to break or reverse the grapple, you can take any action that doesn't require two hands to perform, such as cast a spell or make an attack or full attack with a light or one-handed weapon against any creature within your reach, including the creature that is grappling you. See the grappled condition for additional details. If you are pinned, your actions are very limited. See the pinned condition for additional details.</p>
<p><strong className="hl">Multiple Creatures:</strong> Multiple creatures can attempt to grapple one target. The creature that first initiates the grapple is the only one that makes a check, with a +2 bonus for each creature that assists in the grapple (using the <Link to="/rule/aid_another">Aid Another</Link> action). Multiple creatures can also assist another creature in breaking free from a grapple, with each creature that assists (using the Aid Another action) granting a +2 bonus on the grappled creature's combat maneuver check.</p>
</>};
const _overrun = {title: "Overrun", parent_topics: ["combat","special_attacks","combat_maneuvers"], siblings: ["bull_rush","dirty_trick","disarm","drag","grapple","overrun","reposition","steal","sunder","trip"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 201</Link></p>
<p>As a standard action, taken during your move or as part of a charge, you can attempt to overrun your target, moving through its square. You can only overrun an opponent who is no more than one size category larger than you. If you do not have the <Link to="/feat/improved_overrun">Improved Overrun</Link> feat, or a similar ability, initiating an overrun provokes an attack of opportunity from the target of your maneuver. If your overrun attempt fails, you stop in the space directly in front of the opponent, or the nearest open space in front of the creature if there are other creatures occupying that space.</p>
<p>When you attempt to overrun a target, it can choose to avoid you, allowing you to pass through its square without requiring an attack. If your target does not avoid you, make a combat maneuver check as normal. If your maneuver is successful, you move through the target's space. If your attack exceeds your opponent's CMD by 5 or more, you move through the target's space and the target is knocked prone. If the target has more than two legs, add +2 to the DC of the combat maneuver attack roll for each additional leg it has.</p>
</>};
const _reposition = {title: "Reposition", parent_topics: ["combat","special_attacks","combat_maneuvers"], siblings: ["bull_rush","dirty_trick","disarm","drag","grapple","overrun","reposition","steal","sunder","trip"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 322</Link></p>
<p>You can attempt to reposition a foe to a different location as a standard action. You can only reposition an opponent that is no more than one size category larger than you. A reposition attempts to force a foe to move to a different position in relation to your location without doing any harm. If you do not have the <Link to="/feat/improved_reposition">Improved Reposition</Link> feat or a similar ability, attempting to reposition a foe provokes an attack of opportunity from the target of your maneuver. You cannot use this maneuver to move a foe into a space that is intrinsically dangerous, such as a pit or <Link to="/spell/wall_of_fire">wall of fire</Link>.</p>
<p>If your attack is successful, you may move your target 5 feet to a new location. For every 5 by which your attack exceeds your opponent's CMD, you can move the target an additional 5 feet. The target must remain within your reach at all times during this movement, except for the final 5 feet of movement, which can be to a space adjacent to your reach.</p>
<p>An enemy being moved by a reposition does not provoke an attack of opportunity because of the movement unless you possess the <Link to="/feat/greater_reposition">Greater Reposition</Link> feat. You cannot move a creature into a square that is occupied by a solid object or obstacle.</p>
</>};
const _steal = {title: "Steal", parent_topics: ["combat","special_attacks","combat_maneuvers"], siblings: ["bull_rush","dirty_trick","disarm","drag","grapple","overrun","reposition","steal","sunder","trip"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 322</Link></p>
<p>You can attempt to take an item from a foe as a standard action. This maneuver can be used in melee to take any item that is neither held nor hidden in a bag or pack. You must have at least one hand free (holding nothing) to attempt this maneuver. You must select the item to be taken before the check is made. Items that are simply tucked into a belt or loosely attached (such as brooches or necklaces) are the easiest to take. Items fastened to a foe (such as cloaks, sheathed weapons, or pouches) are more difficult to take, and give the opponent a +5 bonus (or greater) to his CMD. Items that are closely worn (such as armor, backpacks, boots, clothing, or rings) cannot be taken with this maneuver. Items held in the hands (such as wielded weapons or wands) also cannot be taken with the steal maneuver - you must use the disarm combat maneuver instead. The GM is the final arbiter of what items can be taken. If you do not have the <Link to="/feat/improved_steal">Improved Steal</Link> feat or a similar ability, attempting to steal an object provokes an attack of opportunity from the target of your maneuver.</p>
<p>Although this maneuver can only be performed if the target is within your reach, you can use a whip to steal an object from a target within range with a -4 penalty on the attack roll.</p>
<p>If your attack is successful, you may take one item from your opponent. You must be able to reach the item to be taken (subject to GM discretion). Your enemy is immediately aware of this theft unless you possess the <Link to="/feat/greater_steal">Greater Steal</Link> feat.</p>
</>};
const _sunder = {title: "Sunder", parent_topics: ["combat","special_attacks","combat_maneuvers"], siblings: ["bull_rush","dirty_trick","disarm","drag","grapple","overrun","reposition","steal","sunder","trip"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 201</Link></p>
<p>You can attempt to sunder an item held or worn by your opponent as part of an attack action in place of a melee attack. If you do not have the <Link to="/feat/improved_sunder">Improved Sunder</Link> feat, or a similar ability, attempting to sunder an item provokes an attack of opportunity from the target of your maneuver.</p>
<p>If your attack is successful, you deal damage to the item normally. Damage that exceeds the object's Hardness is subtracted from its hit points. If an object has equal to or less than half its total hit points remaining, it gains the <Link to="/misc/broken">broken condition</Link>. If the damage you deal would reduce the object to less than 0 hit points, you can choose to destroy it. If you do not choose to destroy it, the object is left with only 1 hit point and the broken condition.</p>
</>};
const _trip = {title: "Trip", parent_topics: ["combat","special_attacks","combat_maneuvers"], siblings: ["bull_rush","dirty_trick","disarm","drag","grapple","overrun","reposition","steal","sunder","trip"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 201</Link></p>
<p>You can attempt to trip your opponent in place of a melee attack. You can only trip an opponent who is no more than one size category larger than you. If you do not have the <Link to="/feat/improved_trip">Improved Trip</Link> feat, or a similar ability, initiating a trip provokes an attack of opportunity from the target of your maneuver.</p>
<p>If your attack exceeds the target's CMD, the target is knocked prone. If your attack fails by 10 or more, you are knocked prone instead. If the target has more than two legs, add +2 to the DC of the combat maneuver attack roll for each additional leg it has. Some creatures - such as oozes, creatures without legs, and flying creatures - cannot be tripped.</p>
</>};
const _feint = {title: "Feint", parent_topics: ["combat","special_attacks"], siblings: ["aid_another_2","charge","combat_maneuvers","feint","mounted_combat","throw_splash_weapon","two_weapon_fighting"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 201</Link></p>
<p>Feinting is a standard action. To feint, make a Bluff skill check. The DC of this check is equal to 10 + your opponent's base attack bonus + your opponent's Wisdom modifier. If your opponent is trained in Sense Motive, the DC is instead equal to 10 + your opponent's Sense Motive bonus, if higher. If successful, the next melee attack you make against the target does not allow him to use his Dexterity bonus to AC (if any). This attack must be made on or before your next turn.</p>
<p>When feinting against a non-humanoid you take a -4 penalty. Against a creature of animal Intelligence (1 or 2), you take a -8 penalty. Against a creature lacking an Intelligence score, it's impossible. Feinting in combat does not provoke attacks of opportunity.</p>
<p><strong className="hl">Feinting as a Move Action:</strong> With the <Link to="/feat/improved_feint">Improved Feint</Link> feat, you can attempt a feint as a move action.</p>
</>};
const _mounted_combat = {title: "Mounted Combat", parent_topics: ["combat","special_attacks"], siblings: ["aid_another_2","charge","combat_maneuvers","feint","mounted_combat","throw_splash_weapon","two_weapon_fighting"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 201</Link></p>
<p>These rules cover being mounted on a horse in combat but can also be applied to more unusual steeds, such as a griffon or dragon.</p>
<p><strong className="hl">Mounts in Combat:</strong> Horses, ponies, and riding dogs can serve readily as combat steeds. Mounts that do not possess combat training (see <Link to="/skill/handle_animal">Handle Animal</Link>) are frightened by combat. If you don't dismount, you must make a DC 20 <Link to="/skill/ride">Ride</Link> check each round as a move action to control such a mount. If you succeed, you can perform a standard action after the move action. If you fail, the move action becomes a full-round action, and you can't do anything else until your next turn.</p>
<p>Your mount acts on your initiative count as you direct it. You move at its speed, but the mount uses its action to move. A horse (not a pony) is a Large creature and thus takes up a space 10 feet (2 squares) across. For simplicity, assume that you share your mount's space during combat.</p>
<p><strong className="hl">Combat while Mounted:</strong> With a DC 5 Ride check, you can guide your mount with your knees so as to use both hands to attack or defend yourself. This is a free action.</p>
<p>When you attack a creature smaller than your mount that is on foot, you get the +1 bonus on melee attacks for being on higher ground. If your mount moves more than 5 feet, you can only make a single melee attack. Essentially, you have to wait until the mount gets to your enemy before attacking, so you can't make a full attack. Even at your mount's full speed, you don't take any penalty on melee attacks while mounted.</p>
<p>If your mount charges, you also take the AC penalty associated with a charge. If you make an attack at the end of the charge, you receive the bonus gained from the charge. When charging on horseback, you deal double damage with a lance (see <Link to="/rule/charge">Charge</Link>).</p>
<p>You can use ranged weapons while your mount is taking a double move, but at a -4 penalty on the attack roll. You can use ranged weapons while your mount is running (quadruple speed) at a -8 penalty. In either case, you make the attack roll when your mount has completed half its movement. You can make a full attack with a ranged weapon while your mount is moving. Likewise, you can take move actions normally.</p>
<p><strong className="hl">Casting Spells While Mounted:</strong> You can cast a spell normally if your mount moves up to a normal move (its speed) either before or after you cast. If you have your mount move both before and after you cast a spell, then you're casting the spell while the mount is moving, and you have to make a <Link to="/rule/concentration">concentration</Link> check due to the vigorous motion (DC 10 + spell level) or lose the spell. If the mount is running (quadruple speed), you can cast a spell when your mount has moved up to twice its speed, but your concentration check is more difficult due to the violent motion (DC 15 + spell level).</p>
<p><strong className="hl">If Your Mount Falls in Battle:</strong> If your mount falls, you have to succeed on a DC 15 Ride check to make a soft fall and take no damage. If the check fails, you take 1d6 points of damage.</p>
<p><strong className="hl">If You Are Dropped:</strong> If you are knocked unconscious, you have a 50% chance to stay in the saddle (75% if you're in a military saddle). Otherwise you fall and take 1d6 points of damage. Without you to guide it, your mount avoids combat.</p>
</>};
const _throw_splash_weapon = {title: "Throw Splash Weapon", parent_topics: ["combat","special_attacks"], siblings: ["aid_another_2","charge","combat_maneuvers","feint","mounted_combat","throw_splash_weapon","two_weapon_fighting"], subtopics: ["greater_splash_weapon"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 202</Link></p>
<p>A splash weapon is a ranged weapon that breaks on impact, splashing or scattering its contents over its target and nearby creatures or objects. To attack with a splash weapon, make a ranged touch attack against the target. Thrown splash weapons require no weapon proficiency, so you don't take the -4 nonproficiency penalty. A hit deals direct hit damage to the target and splash damage to all creatures within 5 feet of the target. If the target is Large or larger, you choose one of its squares and the splash damage affects creatures within 5 feet of that square. Splash weapons cannot deal precision-based damage (such as sneak attack).</p>
<p>You can instead target a specific grid intersection. Treat this as a ranged attack against AC 5. However, if you target a grid intersection, creatures in all adjacent squares are dealt the splash damage, and the direct hit damage is not dealt to any creature. You can't target a grid intersection occupied by a creature, such as a Large or larger creature; in this case, you're aiming at the creature.</p>
<p>If you miss the target (whether aiming at a creature or a grid intersection), roll 1d8. This determines the misdirection of the throw, with 1 falling short (off-target in a straight line toward the thrower), and 2 through 8 rotating around the target creature or grid intersection in a clockwise direction. Then, count a number of squares in the indicated direction equal to the range increment of the throw. After you determine where the weapon landed, it deals splash damage to all creatures in that square and in all adjacent squares.</p>
</>};
const _greater_splash_weapon = {title: "Greater Splash Weapon", parent_topics: ["combat","special_attacks","throw_splash_weapon"], siblings: ["greater_splash_weapon"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_91_battle_of_bloodmarch_hills">Pathfinder #91: Battle of Bloodmarch Hills pg. 72</Link></p>
<p>This splash weapon works in some ways like a normal splash weapon, but its effects cover a larger area. Like a normal splash weapon, a greater splash weapon requires no weapon proficiency, and you throw it by making a ranged touch attack. A hit deals direct hit damage to the target and to creatures and objects in squares within 5 feet of that target. It then deals splash damage to all creatures within 10 feet of the target. If the target takes up more than a 5-foot square, you can chose one of its squares as the center of the effect. The direct damage affects the squares normally, so a Large or larger creature could take both the direct damage and the splash damage depending on the square you choose. The splash damage for a greater splash weapon is 5 points of the appropriate damage type for the weapon.</p>
<p>Like a normal splash weapon, you can also choose to target a specific grid intersection (treating it as a ranged attack against AC 5). If it hits, the greater splash weapon deals direct damage to creatures and objects in squares within 5 feet of the targeted intersection, and splash damage to creatures within 10 feet of the targeted intersection. As with a normal splash weapon, you cannot target a grid intersection occupied by a creature.</p>
<p>Greater splash weapons can be thrown as if they were a rock using the <Link to="/umr/rock_throwing">rock throwing universal monster rule</Link>, and caught with rock catching, though the DC to catch a greater splash weapon is 10 higher than normal due to its fragile and volatile nature. If a creature fails its Reflex saving throw to catch a greater splash weapon, the weapon automatically breaks, treating the creature attempting to catch it as the splash weapon's target.</p>
<p>A greater splash weapon can be used only by Large or larger creatures, though it can be used as ammunition in a catapult or trebuchet. When used as ammunition in one of these siege engines, use the range for the engine rather than the greater splash weapon's range.</p>
</>};
const _two_weapon_fighting = {title: "Two-Weapon Fighting", parent_topics: ["combat","special_attacks"], siblings: ["aid_another_2","charge","combat_maneuvers","feint","mounted_combat","throw_splash_weapon","two_weapon_fighting"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 202</Link></p>
<p>If you wield a second weapon in your off hand, you can get one extra attack per round with that weapon. You suffer a -6 penalty with your regular attack or attacks with your primary hand and a -10 penalty to the attack with your off hand when you fight this way. You can reduce these penalties in two ways. First, if your off-hand weapon is light, the penalties are reduced by 2 each. An unarmed strike is always considered light. Second, the <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link> feat lessens the primary hand penalty by 2, and the off-hand penalty by 6.</p>
<p>Table 8-7 summarizes the interaction of all these factors.</p>
<p><strong className="hl">Double Weapons:</strong> You can use a double weapon to make an extra attack with the off-hand end of the weapon as if you were fighting with two weapons. The penalties apply as if the off-hand end of the weapon was a light weapon.</p>
<p><strong className="hl">Thrown Weapons:</strong> The same rules apply when you throw a weapon from each hand. Treat a dart or shuriken as a light weapon when used in this manner, and treat a bolas, javelin, net, or sling as a one-handed weapon.</p>
<h3 id="rule-two_weapon_fighting-table-8-7-two-weapon-fighting-penalties">Table 8-7: Two-Weapon Fighting Penalties</h3>
<ScrollContainer id="rule-two_weapon_fighting--table-0"><table>
<thead>
<tr>
<th>Circumstances</th>
<th>Primary Hand</th>
<th>Off Hand</th>
</tr>
</thead>
<tbody><tr>
<td>Normal penalties</td>
<td>-6</td>
<td>-10</td>
</tr>
<tr>
<td>Off-hand weapon is light</td>
<td>-4</td>
<td>-8</td>
</tr>
<tr>
<td>Two-Weapon Fighting feat</td>
<td>-4</td>
<td>-4</td>
</tr>
<tr>
<td>Off-hand weapon is light and Two-Weapon Fighting feat</td>
<td>-2</td>
<td>-2</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _delay = {title: "Delay", parent_topics: ["combat","actions_in_combat","miscellaneous_actions"], siblings: ["ready","delay","take_5_foot_step"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 203</Link></p>
<p>By choosing to delay, you take no action and then act normally on whatever initiative count you decide to act. When you delay, you voluntarily reduce your own initiative result for the rest of the combat. When your new, lower initiative count comes up later in the same round, you can act normally. You can specify this new initiative result or just wait until some time later in the round and act then, thus fixing your new initiative count at that point.</p>
<p>You never get back the time you spend waiting to see what's going to happen. You also can't interrupt anyone else's action (as you can with a readied action).</p>
<p><strong className="hl">Initiative Consequences of Delaying:</strong> Your initiative result becomes the count on which you took the delayed action. If you come to your next action and have not yet performed an action, you don't get to take a delayed action (though you can delay again).</p>
<p>If you take a delayed action in the next round, before your regular turn comes up, your initiative count rises to that new point in the order of battle, and you do not get your regular action that round.</p>
</>};
const _ready = {title: "Ready", parent_topics: ["combat","actions_in_combat","miscellaneous_actions"], siblings: ["ready","delay","take_5_foot_step"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 203</Link></p>
<p>The ready action lets you prepare to take an action later, after your turn is over but before your next one has begun. Readying is a standard action. It does not provoke an attack of opportunity (though the action that you ready might do so).</p>
<p><strong className="hl">Readying an Action:</strong> You can ready a standard action, a move action, a swift action, or a free action. To do so, specify the action you will take and the conditions under which you will take it. Then, anytime before your next action, you may take the readied action in response to that condition. The action occurs just before the action that triggers it. If the triggered action is part of another character's activities, you interrupt the other character. Assuming he is still capable of doing so, he continues his actions once you complete your readied action. Your initiative result changes. For the rest of the encounter, your initiative result is the count on which you took the readied action, and you act immediately ahead of the character whose action triggered your readied action.</p>
<p>You can take a 5-foot step as part of your readied action, but only if you don't otherwise move any distance during the round.</p>
<p><strong className="hl">Initiative Consequences of Readying:</strong> Your initiative result becomes the count on which you took the readied action. If you come to your next action and have not yet performed your readied action, you don't get to take the readied action (though you can ready the same action again). If you take your readied action in the next round, before your regular turn comes up, your initiative count rises to that new point in the order of battle, and you do not get your regular action that round.</p>
<p><strong className="hl">Distracting Spellcasters:</strong> You can ready an attack against a spellcaster with the trigger "if she starts casting a spell." If you damage the spellcaster, she may lose the spell she was trying to cast (as determined by her <Link to="/rule/concentration">concentration</Link> check result).</p>
<p><strong className="hl">Readying to Counterspell:</strong> You may ready a counterspell against a spellcaster (often with the trigger "if she starts casting a spell"). In this case, when the spellcaster starts a spell, you get a chance to identify it with a Spellcraft check (DC 15 + spell level). If you do, and if you can cast that same spell (and are able to cast it and have it prepared, if you prepare spells), you can cast the spell as a counterspell and automatically ruin the other spellcaster's spell. Counterspelling works even if one spell is divine and the other arcane. A spellcaster can use <Link to="/spell/dispel_magic">dispel magic</Link> to counterspell another spellcaster, but it doesn't always work (see the spell description).</p>
<p><strong className="hl">Readying a Weapon against a Charge:</strong> You can ready weapons with the brace feature, setting them to receive charges. A readied weapon of this type deals double damage if you score a hit with it against a charging character.</p>
</>};
const _conditions = {title: "Conditions", parent_topics: ["combat"], siblings: ["how_combat_works","combat_statistics","actions_in_combat","injury_and_death","movement_position_and_distance","big_and_little_creatures_in_combat","combat_modifiers","special_attacks","conditions","special_abilities_2"], subtopics: ["awareness_conditions","bleed","broken_and_fragile","dying_conditions","energy_drained","entangled","exhaustion_conditions","fear_conditions","flat_footed","grapple_conditions","incorporeal","invisible","sickened_conditions","paralyzed","petrified","prone"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 565</Link></p>
<p>If more than one condition affects a character, apply them all. If effects can't combine, apply the most severe effect.</p>
<blockquote>
<p><strong>Awareness Conditions</strong> include Blinded, Confused, Dazed, Dazzled, Deafened, Fascinated, Helpless, Staggered, Stunned, and Unconscious.</p>
<p><strong>Dying Conditions</strong> comprise Disabled, Dying, Stable, and Dead.</p>
<p>The <strong>Exhaustion Conditions</strong> are Fatigued and Exhausted.</p>
<p><strong>Fear Conditions</strong> include Shaken, Frightened, Panicked, and Cowering.</p>
<p><strong>Grapple Conditions</strong> are Grappled and Pinned.</p>
<p>The <strong>Sickened Conditions</strong> are Sickened and Nauseated.</p>
</blockquote>
<p><em>Note: The condition groups above are not official terms from the rules. They were created for this app in order to better present the underlying information.</em></p>
</>};
const _awareness_conditions = {title: "Awareness Conditions", parent_topics: ["combat","conditions"], siblings: ["awareness_conditions","bleed","broken_and_fragile","dying_conditions","energy_drained","entangled","exhaustion_conditions","fear_conditions","flat_footed","grapple_conditions","incorporeal","invisible","sickened_conditions","paralyzed","petrified","prone"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 565</Link></p>
<p><strong className="hl">Blinded:</strong> The creature cannot see. It takes a -2 penalty to Armor Class, loses its Dexterity bonus to AC (if any), and takes a -4 penalty on most Strength- and Dexterity-based skill checks and on opposed Perception skill checks. All checks and activities that rely on vision (such as reading and Perception checks based on sight) automatically fail. All opponents are considered to have total concealment (50% miss chance) against the blinded character. Blind creatures must make a DC 10 Acrobatics skill check to move faster than half speed. Creatures that fail this check fall prone. Characters who remain blinded for a long time grow accustomed to these drawbacks and can overcome some of them. Also see: <Link to="/rule/darkness">Darkness</Link>.</p>
<p><strong className="hl">Confused:</strong> A confused creature is mentally befuddled and cannot act normally. A confused creature cannot tell the difference between ally and foe, treating all creatures as enemies. Allies wishing to cast a beneficial spell that requires a touch on a confused creature must succeed on a melee touch attack. If a confused creature is attacked, it attacks the creature that last attacked it until that creature is dead or out of sight.</p>
<p>Roll on the following table at the beginning of each confused subject's turn each round to see what the subject does in that round.</p>
<ScrollContainer id="rule-awareness_conditions--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td>01-25</td>
<td>Act normally.</td>
</tr>
<tr>
<td>26-50</td>
<td>Do nothing but babble incoherently.</td>
</tr>
<tr>
<td>51-75</td>
<td>Deal 1d8 points of damage + Str modifier to self with item in hand.</td>
</tr>
<tr>
<td>76-100</td>
<td>Attack nearest creature (for this purpose, a familiar counts as part of the subject's self).</td>
</tr>
</tbody></table></ScrollContainer>
<p>A confused creature who can't carry out the indicated action does nothing but babble incoherently. Attackers are not at any special advantage when attacking a confused creature. Any confused creature who is attacked automatically attacks its attackers on its next turn, as long as it is still confused when its turn comes. Note that a confused creature will not make attacks of opportunity against anything that it is not already devoted to attacking (either because of its most recent action or because it has just been attacked).</p>
<p><strong className="hl">Dazed:</strong> The creature is unable to act normally. A dazed creature can take no actions, but has no penalty to AC. A dazed condition typically lasts 1 round.</p>
<p><strong className="hl">Dazzled:</strong> The creature is unable to see well because of overstimulation of the eyes. A dazzled creature takes a -1 penalty on attack rolls and sight-based Perception checks.</p>
<p><strong className="hl">Deafened:</strong> A deafened character cannot hear. He takes a -4 penalty on initiative checks, automatically fails Perception checks based on sound, takes a -4 penalty on opposed Perception checks, and has a 20% chance of spell failure when casting spells with verbal components. Characters who remain deafened for a long time grow accustomed to these drawbacks and can overcome some of them.</p>
<p><strong className="hl">Fascinated:</strong> A fascinated creature is entranced by a supernatural or spell effect. The creature stands or sits quietly, taking no actions other than to pay attention to the fascinating effect, for as long as the effect lasts. It takes a -4 penalty on skill checks made as reactions, such as Perception checks. Any potential threat, such as a hostile creature approaching, allows the fascinated creature a new saving throw against the fascinating effect. Any obvious threat, such as someone drawing a weapon, casting a spell, or aiming a ranged weapon at the fascinated creature, automatically breaks the effect. A fascinated creature's ally may shake it free of the spell as a standard action.</p>
<p><strong className="hl">Helpless:</strong> A helpless character is paralyzed, held, bound, sleeping, unconscious, or otherwise completely at an opponent's mercy. A helpless target is treated as having a Dexterity of 0 (-5 modifier). Melee attacks against a helpless target get a +4 bonus (equivalent to attacking a prone target). Ranged attacks get no special bonus against helpless targets. Rogues can sneak attack helpless targets.</p>
<p>As a full-round action, an enemy can use a melee weapon to deliver a coup de grace to a helpless foe. An enemy can also use a bow or crossbow, provided he is adjacent to the target. The attacker automatically hits and scores a critical hit. (A rogue also gets his sneak attack damage bonus against a helpless foe when delivering a coup de grace.) If the defender survives, he must make a Fortitude save (DC 10 + damage dealt) or die. Delivering a coup de grace provokes attacks of opportunity.</p>
<p>Creatures that are immune to critical hits do not take critical damage, nor do they need to make Fortitude saves to avoid being killed by a coup de grace.</p>
<p><strong className="hl">Staggered:</strong> A staggered creature may take a single move action or standard action each round (but not both, nor can he take full-round actions). A staggered creature can still take free, swift, and immediate actions. A creature with nonlethal damage exactly equal to its current hit points gains the staggered condition.</p>
<p><strong className="hl">Stunned:</strong> A stunned creature drops everything held, can't take actions, takes a -2 penalty to AC, and loses its Dexterity bonus to AC (if any).</p>
<p><strong className="hl">Unconscious:</strong> Unconscious creatures are knocked out and helpless. Unconsciousness can result from having negative hit points (but not more than the creature's Constitution score), or from nonlethal damage in excess of current hit points.</p>
</>};
const _broken_and_fragile = {title: "Broken and Fragile", parent_topics: ["combat","conditions"], siblings: ["awareness_conditions","bleed","broken_and_fragile","dying_conditions","energy_drained","entangled","exhaustion_conditions","fear_conditions","flat_footed","grapple_conditions","incorporeal","invisible","sickened_conditions","paralyzed","petrified","prone"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 565</Link></p>
<p><strong className="hl">Broken:</strong> Items that have taken damage in excess of half their total hit points gain the broken condition, meaning they are less effective at their designated task. The broken condition has the following effects, depending upon the item.</p>
<ul>
<li>If the item is a weapon, any attacks made with the item suffer a -2 penalty on attack and damage rolls. Such weapons only score a critical hit on a natural 20 and only deal &times;2 damage on a confirmed critical hit.</li>
<li>If the item is a suit of armor or a shield, the bonus it grants to AC is halved, rounding down. Broken armor doubles its armor check penalty on skills.</li>
<li>If the item is a tool needed for a skill, any skill check made with the item takes a -2 penalty.</li>
<li>If the item is a wand or staff, it uses up twice as many charges when used.</li>
<li>If the item does not fit into any of these categories, the broken condition has no effect on its use.</li>
</ul>
<p>Items with the broken condition, regardless of type, are worth 75% of their normal value. If the item is magical, it can only be repaired with a mending or make whole spell cast by a character with a caster level equal to or higher than the item's. Items lose the broken condition if the spell restores the object to half its original hit points or higher. Non-magical items can be repaired in a similar fashion, or through the Craft skill used to create it. Generally speaking, this requires a DC 20 Craft check and 1 hour of work per point of damage to be repaired. Most craftsmen charge one-tenth the item's total cost to repair such damage (more if the item is badly damaged or ruined).</p>
<p>Both firearms and <em>fragile</em> weapons (see below) include effects that grant a weapon the broken condition without the weapon explicitly taking damage. If a weapon gains the broken condition from an effect, that weapon is considered to have taken damage equal to half its hit points +1. This damage is repaired either by something that addresses the effect that granted the weapon the broken condition (like quick clear in the case of firearm misfires or the Field Repair feat in the case of weapons with the fragile quality) or by the normal method for recovering item hit points (detailed in the broken condition description). When an effect that grants the broken condition is removed, the weapon regains the hit points it lost when the broken condition was applied.</p>
<p>Damage done by an attack against a weapon cannot be repaired by an effect that removes the broken condition.</p>
<p><strong className="hl">Fragile</strong>: Fragile weapons and armor cannot take the beating that sturdier weapons can. A fragile weapon gains the broken condition if the wielder rolls a natural 1 on an attack roll with the weapon. If a fragile weapon is already broken, the roll of a natural 1 destroys it instead.</p>
<p>Armor with the fragile quality falls apart when hit with heavy blows. If an attacker hits a creature wearing fragile armor with an attack roll of a natural 20 and confirms the critical hit (even if the creature is immune to critical hits), the armor gains the broken condition. If already broken, the armor is destroyed instead. Fragile armor is not broken or destroyed by critical threats that are not generated by natural 20s, so if a creature wielding a weapon with a 19-20 or 18-20 critical range scores a critical hit on the wearer of this armor with a roll of less than a natural 20, that critical hit has no chance to break or destroy the armor.</p>
<p>Masterwork and magical fragile weapons and armor lack these flaws unless otherwise noted in the item description or the special material description.</p>
</>};
const _bleed = {title: "Bleed", parent_topics: ["combat","conditions"], siblings: ["awareness_conditions","bleed","broken_and_fragile","dying_conditions","energy_drained","entangled","exhaustion_conditions","fear_conditions","flat_footed","grapple_conditions","incorporeal","invisible","sickened_conditions","paralyzed","petrified","prone"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 565</Link></p>
<p>A creature that is taking bleed damage takes the listed amount of damage at the beginning of its turn. Bleeding can be stopped by a DC 15 Heal check or through the application of any spell that cures hit point damage (even if the bleed is ability damage). Some bleed effects cause <Link to="/rule/ability_damage_drain">ability damage or even ability drain</Link>. Bleed effects do not stack with each other unless they deal different kinds of damage. When two or more bleed effects deal the same kind of damage, take the worse effect. In this case, ability drain is worse than ability damage.</p>
</>};
const _dying_conditions = {title: "Dying Conditions", parent_topics: ["combat","conditions"], siblings: ["awareness_conditions","bleed","broken_and_fragile","dying_conditions","energy_drained","entangled","exhaustion_conditions","fear_conditions","flat_footed","grapple_conditions","incorporeal","invisible","sickened_conditions","paralyzed","petrified","prone"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 566</Link></p>
<p><strong className="hl">Dead:</strong> The character's hit points are reduced to a negative amount equal to his Constitution score, his Constitution drops to 0, or he is killed outright by a spell or effect. The character's soul leaves his body. Dead characters cannot benefit from normal or magical healing, but they can be restored to life via magic. A dead body decays normally unless magically preserved, but magic that restores a dead character to life also restores the body either to full health or to its condition at the time of death (depending on the spell or device). Either way, resurrected characters need not worry about rigor mortis, decomposition, and other conditions that affect dead bodies.</p>
<p><strong className="hl">Disabled:</strong> A character with 0 hit points, or one who has negative hit points but has become stable and conscious, is disabled. A disabled character may take a single move action or standard action each round (but not both, nor can he take full-round actions, but he can still take swift, immediate, and free actions). He moves at half speed. Taking move actions doesn't risk further injury, but performing any standard action (or any other action the GM deems strenuous, including some free actions such as casting a quickened spell) deals 1 point of damage after the completion of the act. Unless the action increased the disabled character's hit points, he is now in negative hit points and dying.</p>
<p>A disabled character with negative hit points recovers hit points naturally if he is being helped. Otherwise, each day he can attempt a DC 10 Constitution check after resting for 8 hours, to begin recovering hit points naturally. The character takes a penalty on this roll equal to his negative hit point total. Failing this check causes the character to lose 1 hit point, but this does not cause the character to become unconscious. Once a character makes this check, he continues to heal naturally and is no longer in danger of losing hit points naturally.</p>
<p><strong className="hl">Dying:</strong> A dying creature is unconscious and near death. Creatures that have negative hit points and have not stabilized are dying. A dying creature can take no actions. On the character's next turn, after being reduced to negative hit points (but not dead), and on all subsequent turns, the character must make a DC 10 Constitution check to become stable. The character takes a penalty on this roll equal to his negative hit point total. A character that is stable does not need to make this check. A natural 20 on this check is an automatic success. If the character fails this check, he loses 1 hit point. If a dying creature has an amount of negative hit points equal to its Constitution score, it dies.</p>
<p><strong className="hl">Stable:</strong> A character who was dying but who has stopped losing hit points each round and still has negative hit points is stable. The character is no longer dying, but is still unconscious. If the character has become stable because of aid from another character (such as a Heal check or magical healing), then the character no longer loses hit points. The character can make a DC 10 Constitution check each hour to become conscious and disabled (even though his hit points are still negative). The character takes a penalty on this roll equal to his negative hit point total.</p>
<p>If a character has become stable on his own and hasn't had help, he is still at risk of losing hit points. Each hour he can make a Constitution check to become stable (as a character that has received aid), but each failed check causes him to lose 1 hit point.</p>
</>};
const _energy_drained = {title: "Energy Drained", parent_topics: ["combat","conditions"], siblings: ["awareness_conditions","bleed","broken_and_fragile","dying_conditions","energy_drained","entangled","exhaustion_conditions","fear_conditions","flat_footed","grapple_conditions","incorporeal","invisible","sickened_conditions","paralyzed","petrified","prone"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 567</Link></p>
<p><strong className="hl">Energy Drained:</strong> The character gains one or more negative levels, which might become permanent. If the subject has at least as many negative levels as Hit Dice, he dies. See <Link to="/rule/energy_drain_and_negative_levels">Energy Drain and Negative levels</Link> more information.</p>
</>};
const _entangled = {title: "Entangled", parent_topics: ["combat","conditions"], siblings: ["awareness_conditions","bleed","broken_and_fragile","dying_conditions","energy_drained","entangled","exhaustion_conditions","fear_conditions","flat_footed","grapple_conditions","incorporeal","invisible","sickened_conditions","paralyzed","petrified","prone"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 567</Link></p>
<p><strong className="hl">Entangled:</strong> The character is ensnared. Being entangled impedes movement, but does not entirely prevent it unless the bonds are anchored to an immobile object or tethered by an opposing force. An entangled creature moves at half speed, cannot run or charge, and takes a -2 penalty on all attack rolls and a -4 penalty to Dexterity. An entangled character who attempts to cast a spell must make a <Link to="/rule/concentration">concentration</Link> check (DC 15 + spell level) or lose the spell.</p>
</>};
const _exhaustion_conditions = {title: "Exhaustion Conditions", parent_topics: ["combat","conditions"], siblings: ["awareness_conditions","bleed","broken_and_fragile","dying_conditions","energy_drained","entangled","exhaustion_conditions","fear_conditions","flat_footed","grapple_conditions","incorporeal","invisible","sickened_conditions","paralyzed","petrified","prone"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 567</Link></p>
<p><strong className="hl">Exhausted:</strong> An exhausted character moves at half speed, cannot run or charge, and takes a -6 penalty to Strength and Dexterity. After 1 hour of complete rest, an exhausted character becomes fatigued. A fatigued character becomes exhausted by doing something else that would normally cause fatigue.</p>
<p><strong className="hl">Fatigued:</strong> A fatigued character can neither run nor charge and takes a -2 penalty to Strength and Dexterity. Doing anything that would normally cause fatigue causes the fatigued character to become exhausted. After 8 hours of complete rest, fatigued characters are no longer fatigued.</p>
</>};
const _fear_conditions = {title: "Fear Conditions", parent_topics: ["combat","conditions"], siblings: ["awareness_conditions","bleed","broken_and_fragile","dying_conditions","energy_drained","entangled","exhaustion_conditions","fear_conditions","flat_footed","grapple_conditions","incorporeal","invisible","sickened_conditions","paralyzed","petrified","prone"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 566</Link></p>
<p><strong className="hl">Cowering:</strong> The character is frozen in fear and can take no actions. A cowering character takes a -2 penalty to Armor Class and loses his Dexterity bonus (if any).</p>
<p><strong className="hl">Frightened:</strong> A frightened creature flees from the source of its fear as best it can. If unable to flee, it may fight. A frightened creature takes a -2 penalty on all attack rolls, saving throws, skill checks, and ability checks. A frightened creature can use special abilities, including spells, to flee; indeed, the creature must use such means if they are the only way to escape.</p>
<p>Frightened is like shaken, except that the creature must flee if possible. Panicked is a more extreme state of fear.</p>
<p><strong className="hl">Panicked:</strong> A panicked creature must drop anything it holds and flee at top speed from the source of its fear, as well as any other dangers it encounters, along a random path. It can't take any other actions. In addition, the creature takes a -2 penalty on all saving throws, skill checks, and ability checks. If cornered, a panicked creature cowers and does not attack, typically using the total defense action in combat. A panicked creature can use special abilities, including spells, to flee; indeed, the creature must use such means if they are the only way to escape.</p>
<p>Panicked is a more extreme state of fear than shaken or frightened.</p>
<p><strong className="hl">Shaken:</strong> A shaken character takes a -2 penalty on attack rolls, saving throws, skill checks, and ability checks. Shaken is a less severe state of fear than frightened or panicked.</p>
</>};
const _flat_footed = {title: "Flat-Footed", parent_topics: ["combat","conditions"], siblings: ["awareness_conditions","bleed","broken_and_fragile","dying_conditions","energy_drained","entangled","exhaustion_conditions","fear_conditions","flat_footed","grapple_conditions","incorporeal","invisible","sickened_conditions","paralyzed","petrified","prone"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 567</Link></p>
<p><strong className="hl">Flat-Footed:</strong> A character who has not yet acted during a combat is flat-footed, unable to react normally to the situation. A flat-footed character loses his Dexterity bonus to AC (if any) and cannot make attacks of opportunity.</p>
</>};
const _grapple_conditions = {title: "Grapple Conditions", parent_topics: ["combat","conditions"], siblings: ["awareness_conditions","bleed","broken_and_fragile","dying_conditions","energy_drained","entangled","exhaustion_conditions","fear_conditions","flat_footed","grapple_conditions","incorporeal","invisible","sickened_conditions","paralyzed","petrified","prone"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 567</Link></p>
<p><strong className="hl">Grappled:</strong> A grappled creature is restrained by a creature, trap, or effect. Grappled creatures cannot move and take a -4 penalty to Dexterity. A grappled creature takes a -2 penalty on all attack rolls and combat maneuver checks, except those made to grapple or escape a grapple. In addition, grappled creatures can take no action that requires two hands to perform. A grappled character who attempts to cast a spell or use a spell-like ability must make a concentration check (DC 10 + grappler's CMB + spell level, see <Link to="/rule/concentration">Concentration</Link>), or lose the spell. Grappled creatures cannot make attacks of opportunity.</p>
<p>A grappled creature cannot use Stealth to hide from the creature grappling it, even if a special ability, such as hide in plain sight, would normally allow it to do so. If a grappled creature becomes invisible, through a spell or other ability, it gains a +2 circumstance bonus on its CMD to avoid being grappled, but receives no other benefit.</p>
<p><strong className="hl">Pinned:</strong> A pinned creature is tightly bound and can take few actions. A pinned creature cannot move and is denied its Dexterity bonus. A pinned character also takes an additional -4 penalty to his Armor Class. A pinned creature is limited in the actions that it can take. A pinned creature can always attempt to free itself, usually through a combat maneuver check or Escape Artist check. A pinned creature can take verbal and mental actions, but cannot cast any spells that require a somatic or material component. A pinned character who attempts to cast a spell or use a spell-like ability must make a concentration check (DC 10 + grappler's CMB + spell level) or lose the spell. Pinned is a more severe version of grappled, and their effects do not stack.</p>
</>};
const _incorporeal = {title: "Incorporeal", parent_topics: ["combat","conditions"], siblings: ["awareness_conditions","bleed","broken_and_fragile","dying_conditions","energy_drained","entangled","exhaustion_conditions","fear_conditions","flat_footed","grapple_conditions","incorporeal","invisible","sickened_conditions","paralyzed","petrified","prone"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 567</Link></p>
<p><strong className="hl">Incorporeal:</strong> Creatures with the incorporeal condition do not have a physical body. Incorporeal creatures are immune to all nonmagical attack forms. Incorporeal creatures take half damage (50%) from magic weapons, spells, spell-like effects, and supernatural effects. Incorporeal creatures take full damage from other incorporeal creatures and effects, as well as all force effects.</p>
</>};
const _invisible = {title: "Invisible", parent_topics: ["combat","conditions"], siblings: ["awareness_conditions","bleed","broken_and_fragile","dying_conditions","energy_drained","entangled","exhaustion_conditions","fear_conditions","flat_footed","grapple_conditions","incorporeal","invisible","sickened_conditions","paralyzed","petrified","prone"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 567</Link></p>
<p><strong className="hl">Invisible:</strong> Invisible creatures are visually undetectable. An invisible creature gains a +2 bonus on attack rolls against a sighted opponent, and ignores its opponent's Dexterity bonus to AC (if any). See <Link to="/rule/invisibility">Invisibility</Link>, under Special Abilities.</p>
</>};
const _sickened_conditions = {title: "Sickened Conditions", parent_topics: ["combat","conditions"], siblings: ["awareness_conditions","bleed","broken_and_fragile","dying_conditions","energy_drained","entangled","exhaustion_conditions","fear_conditions","flat_footed","grapple_conditions","incorporeal","invisible","sickened_conditions","paralyzed","petrified","prone"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 568</Link></p>
<p><strong className="hl">Nauseated:</strong> Creatures with the nauseated condition experience stomach distress. Nauseated creatures are unable to attack, cast spells, concentrate on spells, or do anything else requiring attention. The only action such a character can take is a single move action per turn.</p>
<p><strong className="hl">Sickened:</strong> The character takes a -2 penalty on all attack rolls, weapon damage rolls, saving throws, skill checks, and ability checks.</p>
</>};
const _paralyzed = {title: "Paralyzed", parent_topics: ["combat","conditions"], siblings: ["awareness_conditions","bleed","broken_and_fragile","dying_conditions","energy_drained","entangled","exhaustion_conditions","fear_conditions","flat_footed","grapple_conditions","incorporeal","invisible","sickened_conditions","paralyzed","petrified","prone"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 568</Link></p>
<p><strong className="hl">Paralyzed:</strong> A paralyzed character is frozen in place and unable to move or act. A paralyzed character has effective Dexterity and Strength scores of 0 and is helpless, but can take purely mental actions. A winged creature flying in the air at the time that it becomes paralyzed cannot flap its wings and falls. A paralyzed swimmer can't swim and may drown. A creature can move through a space occupied by a paralyzed creature - ally or not. Each square occupied by a paralyzed creature, however, counts as 2 squares to move through.</p>
</>};
const _petrified = {title: "Petrified", parent_topics: ["combat","conditions"], siblings: ["awareness_conditions","bleed","broken_and_fragile","dying_conditions","energy_drained","entangled","exhaustion_conditions","fear_conditions","flat_footed","grapple_conditions","incorporeal","invisible","sickened_conditions","paralyzed","petrified","prone"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 568</Link></p>
<p><strong className="hl">Petrified:</strong> A petrified character has been turned to stone and is considered unconscious. If a petrified character cracks or breaks, but the broken pieces are joined with the body as he returns to flesh, he is unharmed. If the character's petrified body is incomplete when it returns to flesh, the body is likewise incomplete and there is some amount of permanent hit point loss and/or debilitation.</p>
</>};
const _prone = {title: "Prone", parent_topics: ["combat","conditions"], siblings: ["awareness_conditions","bleed","broken_and_fragile","dying_conditions","energy_drained","entangled","exhaustion_conditions","fear_conditions","flat_footed","grapple_conditions","incorporeal","invisible","sickened_conditions","paralyzed","petrified","prone"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 568</Link></p>
<p><strong className="hl">Prone:</strong> The character is lying on the ground. A prone attacker has a -4 penalty on melee attack rolls and cannot use a ranged weapon (except for a crossbow). A prone defender gains a +4 bonus to Armor Class against ranged attacks, but takes a -4 penalty to AC against melee attacks.</p>
<p>Standing up is a move-equivalent action that provokes an attack of opportunity.</p>
</>};
const _special_abilities_2 = {title: "Special Abilities", parent_topics: ["combat"], siblings: ["how_combat_works","combat_statistics","actions_in_combat","injury_and_death","movement_position_and_distance","big_and_little_creatures_in_combat","combat_modifiers","special_attacks","conditions","special_abilities_2"], subtopics: ["ability_score_bonuses","ability_damage_drain","afflictions","blindsight_and_blindsense","channel_resistance","charm_and_compulsion","damage_reduction","darkvision","death_attacks","energy_drain_and_negative_levels","energy_immunity_and_vulnerability","fear","invisibility","low_light_vision","paralysis","scent","spell_resistance_2"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 554</Link></p>
<p>The following special abilities include rules commonly used by a number of creatures, spells, and traps.</p>
<p><strong className="hl">Extraordinary Abilities (Ex):</strong> Extraordinary abilities are nonmagical. They are, however, not something that just anyone can do or even learn to do without extensive training. Effects or areas that suppress or negate magic have no effect on extraordinary abilities.</p>
<p><strong className="hl">Spell-Like Abilities (Sp):</strong> Spell-like abilities, as the name implies, are magical abilities that are very much like spells. Spell-like abilities are subject to spell resistance and <Link to="/spell/dispel_magic">dispel magic</Link>. They do not function in areas where magic is suppressed or negated (such as an <Link to="/spell/antimagic_field">antimagic field</Link>). Spell-like abilities can be dispelled, but they cannot be counterspelled or used to counterspell.</p>
<p><strong className="hl">Supernatural Abilities (Su):</strong> Supernatural abilities are magical but not spell-like. Supernatural abilities are not subject to spell resistance and do not function in areas where magic is suppressed or negated (such as an antimagic field). A supernatural ability's effect cannot be dispelled and is not subject to counterspells. See Table 16-1 for a summary of the types of special abilities.</p>
<h3 id="rule-special_abilities_2-table-16-1-special-ability-types">Table 16-1: Special Ability Types</h3>
<ScrollContainer id="rule-special_abilities_2--table-0"><table>
<thead>
<tr>
<th>Ability</th>
<th>Extraordinary</th>
<th>Spell-Like</th>
<th>Supernatural</th>
</tr>
</thead>
<tbody><tr>
<td>Dispel</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>Spell resistance</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>Antimagic field</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>Attack of opportunity</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Dispel:</strong> Can <Link to="/spell/dispel_magic">dispel magic</Link> and similar spells dispel the effects of abilities of that type?</p>
<p><strong className="hl">Spell Resistance:</strong> Does spell resistance protect a creature from these abilities?</p>
<p><strong className="hl">Antimagic Field:</strong> Does an antimagic field or similar magic suppress the ability?</p>
<p><strong className="hl">Attack of Opportunity:</strong> Does using the ability provoke attacks of opportunity the way that casting a spell does?</p>
</>};
const _ability_score_bonuses = {title: "Ability Score Bonuses", parent_topics: ["combat","special_abilities_2"], siblings: ["ability_score_bonuses","ability_damage_drain","afflictions","blindsight_and_blindsense","channel_resistance","charm_and_compulsion","damage_reduction","darkvision","death_attacks","energy_drain_and_negative_levels","energy_immunity_and_vulnerability","fear","invisibility","low_light_vision","paralysis","scent","spell_resistance_2"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 554</Link></p>
<p>Some spells and abilities increase your ability scores. Ability score increases with a duration of 1 day or less give only <strong>temporary bonuses.</strong> For every two points of increase to a single ability, apply a +1 bonus to the skills and statistics listed with the relevant ability.</p>
<p><strong className="hl">Strength:</strong> Temporary increases to your Strength score give you a bonus on Strength-based skill checks, melee attack rolls, and weapon damage rolls (if they rely on Strength). The bonus also applies to your Combat Maneuver Bonus (if you are Small or larger) and to your Combat Maneuver Defense.</p>
<p><strong className="hl">Dexterity:</strong> Temporary increases to your Dexterity score give you a bonus on Dexterity-based skill checks, ranged attack rolls, initiative checks, and Reflex saving throws. The bonus also applies to your Armor Class, your Combat Maneuver Bonus (if you are Tiny or smaller), and your Combat Maneuver Defense.</p>
<p><strong className="hl">Constitution:</strong> Temporary increases to your Constitution score give you a bonus on your Fortitude saving throws. In addition, multiply your total Hit Dice by this bonus and add that amount to your current and total hit points. When the bonus ends, remove this total from your current and total hit points.</p>
<p><strong className="hl">Intelligence:</strong> Temporary increases to your Intelligence score give you a bonus on Intelligence-based skill checks. This bonus also applies to any spell DCs based on Intelligence.</p>
<p><strong className="hl">Wisdom:</strong> Temporary increases to your Wisdom score give you a bonus on Wisdom-based skill checks and Will saving throws. This bonus also applies to any spell DCs based on Wisdom.</p>
<p><strong className="hl">Charisma:</strong> Temporary increases to your Charisma score give you a bonus on Charisma-based skill checks. This bonus also applies to any spell DCs based on Charisma and the DC to resist your channeled energy.</p>
<p><strong className="hl">Permanent Bonuses:</strong> Ability bonuses with a duration greater than 1 day actually increase the relevant ability score after 24 hours. Modify all skills and statistics related to that ability. This might cause you to gain skill points, hit points, and other bonuses. These bonuses should be noted separately in case they are removed.</p>
</>};
const _ability_damage_drain = {title: "Ability Score Damage, Penalty, and Drain", parent_topics: ["combat","special_abilities_2"], siblings: ["ability_score_bonuses","ability_damage_drain","afflictions","blindsight_and_blindsense","channel_resistance","charm_and_compulsion","damage_reduction","darkvision","death_attacks","energy_drain_and_negative_levels","energy_immunity_and_vulnerability","fear","invisibility","low_light_vision","paralysis","scent","spell_resistance_2"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 555</Link></p>
<p>Diseases, poisons, spells, and other abilities can all deal damage directly to your ability scores. This damage does not actually reduce an ability, but it does apply a penalty to the skills and statistics that are based on that ability.</p>
<p>For every 2 points of damage you take to a single ability, apply a -1 penalty to skills and statistics listed with the relevant ability. If the amount of ability damage you have taken equals or exceeds your ability score, you immediately fall unconscious until the damage is less than your ability score. The only exception to this is your Constitution score. If the damage to your Constitution is equal to or greater than your Constitution score, you die. Unless otherwise noted, damage to your ability scores is healed at the rate of 1 per day to each ability score that has been damaged. Ability damage can be healed through the use of spells, such as lesser restoration.</p>
<p>Some spells and abilities cause you to take an ability penalty for a limited amount of time. While in effect, these penalties function just like ability damage, but they cannot cause you to fall unconscious or die. In essence, penalties cannot decrease your ability score to less than 1.</p>
<p><strong className="hl">Strength:</strong> Damage to your Strength score causes you to take penalties on Strength-based skill checks, melee attack rolls, and weapon damage rolls (if they rely on Strength). The penalty also applies to your Combat Maneuver Bonus (if you are Small or larger) and your Combat Maneuver Defense.</p>
<p><strong className="hl">Dexterity:</strong> Damage to your Dexterity score causes you to take penalties on Dexterity-based skill checks, ranged attack rolls, initiative checks, and Reflex saving throws. The penalty also applies to your Armor Class, your Combat Maneuver Bonus (if you are Tiny or smaller), and to your Combat Maneuver Defense.</p>
<p><strong className="hl">Constitution:</strong> Damage to your Constitution score causes you to take penalties on your Fortitude saving throws. In addition, multiply your total Hit Dice by this penalty and subtract that amount from your current and total hit points. Lost hit points are restored when the damage to your Constitution is healed.</p>
<p><strong className="hl">Intelligence:</strong> Damage to your Intelligence score causes you to take penalties on Intelligence-based skill checks. This penalty also applies to any spell DCs based on Intelligence.</p>
<p><strong className="hl">Wisdom:</strong> Damage to your Wisdom score causes you to take penalties on Wisdom-based skill checks and Will saving throws. This penalty also applies to any spell DCs based on Wisdom.</p>
<p><strong className="hl">Charisma:</strong> Damage to your Charisma score causes you to take penalties on Charisma-based skill checks. This penalty also applies to any spell DCs based off Charisma and the DC to resist your channeled energy.</p>
<h3 id="rule-ability_damage_drain-ability-drain">Ability Drain</h3>
<p>Ability drain actually reduces the relevant ability score. Modify all skills and statistics related to that ability. This might cause you to lose skill points, hit points, and other bonuses. Ability drain can be healed through the use of spells such as <Link to="/spell/restoration">restoration</Link>.</p>
</>};
const _afflictions = {title: "Afflictions", parent_topics: ["combat","special_abilities_2"], siblings: ["ability_score_bonuses","ability_damage_drain","afflictions","blindsight_and_blindsense","channel_resistance","charm_and_compulsion","damage_reduction","darkvision","death_attacks","energy_drain_and_negative_levels","energy_immunity_and_vulnerability","fear","invisibility","low_light_vision","paralysis","scent","spell_resistance_2"], subtopics: ["curses","diseases","infestations","poison"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 555</Link></p>
<p>From curses to poisons to diseases, there are a number of afflictions that can affect a creature. While each of these afflictions has a different effect, they all function using the same basic system. All afflictions grant a saving throw when they are contracted. If successful, the creature does not suffer from the affliction and does not need to make any further rolls. If the saving throw is a failure, the creature falls victim to the affliction and must deal with its effects.</p>
<p>Afflictions require a creature to make a saving throw after a period of time to avoid taking certain penalties. With most afflictions, if a number of saving throws are made consecutively, the affliction is removed and no further saves are necessary. Some afflictions, usually supernatural ones, cannot be cured through saving throws alone and require the aid of powerful magic to remove.</p>
<p>Each affliction is presented as a short block of information to help you better adjudicate its results.</p>
<p><strong className="hl">Name:</strong> This is the name of the affliction.</p>
<p><strong className="hl">Type:</strong> This is the type of the affliction, such as curse, disease, or poison. It might also include the means by which it is contracted, such as contact, ingestion, inhalation, injury, spell, or trap.</p>
<p><strong className="hl">Save:</strong> This gives the type of save necessary to avoid contracting the affliction, as well as the DC of that save. Unless otherwise noted, this is also the save to avoid the affliction's effects once it is contracted, as well as the DC of any caster level checks needed to end the affliction through magic, such as <Link to="/spell/remove_curse">remove curse</Link> or <Link to="/spell/neutralize_poison">neutralize poison</Link>.</p>
<p><strong className="hl">Onset:</strong> Some afflictions have a variable amount of time before they set in. Creatures that come in contact with an affliction with an onset time must make a saving throw immediately. Success means that the affliction is avoided and no further saving throws must be made. Failure means that the creature has contracted the affliction and must begin making additional saves after the onset period has elapsed. The affliction's effect does not occur until after the onset period has elapsed and then only if further saving throws are failed.</p>
<p><strong className="hl">Frequency:</strong> This is how often the periodic saving throw must be attempted after the affliction has been contracted (after the onset time, if the affliction has any). While some afflictions last until they are cured, others end prematurely, even if the character is not cured through other means. If an affliction ends after a set amount of time, it will be noted in the frequency. For example, a disease with a frequency of <em>1/day</em> lasts until cured, but a poison with a frequency of <em>1/round for 6 rounds</em> ends after 6 rounds have passed.</p>
<p>Afflictions without a frequency occur only once, immediately upon contraction (or after the onset time if one is listed).</p>
<p><strong className="hl">Effect:</strong> This is the effect that the character suffers each time if he fails his saving throw against the affliction. Most afflictions cause <Link to="/rule/ability_damage">ability damage</Link> or hit point damage. These effects are cumulative, but they can be cured normally. Other afflictions cause the creature to take penalties or other effects. These effects are sometimes cumulative, with the rest only affecting the creature if it failed its most recent save. Some afflictions have different effects after the first save is failed. These afflictions have an initial effect, which occurs when the first save is failed, and a secondary effect, when additional saves are failed, as noted in the text. Hit point and ability score damage caused by an affliction cannot be healed naturally while the affliction persists.</p>
<p><strong className="hl">Cure:</strong> This tells you how the affliction is cured. Commonly, this is a number of saving throws that must be made consecutively. Even if the affliction has a limited frequency, it might be cured prematurely if enough saving throws are made. Hit point damage and ability score damage is not removed when an affliction is cured. Such damage must be healed normally. Afflictions without a cure entry can only be cured through powerful spells, such as <Link to="/spell/neutralize_poison">neutralize poison</Link> and <Link to="/spell/remove_curse">remove curse</Link>. No matter how many saving throws are made, these afflictions continue to affect the target.</p>
<p><strong className="hl">Example:</strong> Valeros has been exposed to the <Link to="/disease/red_ache">red ache</Link> disease. He failed a DC 15 Fortitude save to avoid contracting it, so after the onset period of 1d3 days has passed, he must make another DC 15 Fortitude save to avoid taking 1d6 points of Strength damage. From this point onward, he must make a DC 15 Fortitude save each day (according to the disease's frequency) to avoid further Strength damage. If, on two consecutive days, he makes his Fortitude saves, he is cured of the disease and any damage it caused begins to heal as normal.</p>
</>};
const _curses = {title: "Curses", parent_topics: ["combat","special_abilities_2","afflictions"], siblings: ["curses","diseases","infestations","poison"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 556</Link></p>
<p>Careless rogues plundering a tomb, drunken heroes insulting a powerful wizard, and foolhardy adventurers who pick up ancient swords all might suffer from curses. These magic afflictions can have a wide variety of effects, from a simple penalty to certain checks to transforming the victim into a toad. Some even cause the afflicted to slowly rot away, leaving nothing behind but dust. Unlike other afflictions, most curses cannot be cured through a number of successful saving throws. Curses can be cured through magic, however, usually via spells such as <Link to="/spell/remove_curse">remove curse</Link> and <Link to="/spell/break_enchantment">break enchantment</Link>. While some curses cause a progressive deterioration, others inflict a static penalty from the moment they are contracted, neither fading over time nor growing worse. In addition, there are a number of magic items that act like curses.</p>
<p>Curses use the same stat blocks as other <Link to="/rule/afflictions">afflictions</Link>.</p>
<ScrollContainer id="rule-curses--table-0"><table>
<thead>
<tr>
<th>Curse</th>
<th>Saving Throw</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/curse/baleful_polymorph_spell">Baleful Polymorph Spell<IonRippleEffect /></Link></td>
<td>Fortitude DC 17</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/bestow_curse_trap">Bestow Curse Trap<IonRippleEffect /></Link></td>
<td>Will DC 14</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/blasted_vitality">Blasted Vitality<IonRippleEffect /></Link></td>
<td>Fortitude DC 19</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/curse_of_bestial_dreams">Curse of Bestial Dreams<IonRippleEffect /></Link></td>
<td>Will DC 20</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/curse_of_the_ages">Curse of the Ages<IonRippleEffect /></Link></td>
<td>Will DC 17</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/cursed_earth">Cursed Earth<IonRippleEffect /></Link></td>
<td>Will DC 23</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/endless_night">Endless Night<IonRippleEffect /></Link></td>
<td>Will DC 22</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/haunting_major">Haunting, Major<IonRippleEffect /></Link></td>
<td>Will DC 17</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/haunting_minor">Haunting, Minor<IonRippleEffect /></Link></td>
<td>Will DC 13</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/hunt_of_the_ankou">Hunt of the Ankou<IonRippleEffect /></Link></td>
<td>Will DC 22</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/hunt_of_the_bogeyman">Hunt of the Bogeyman<IonRippleEffect /></Link></td>
<td>Will DC 19</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/jealous_structure">Jealous Structure<IonRippleEffect /></Link></td>
<td>Will DC 19</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/mummy_rot">Mummy Rot<IonRippleEffect /></Link></td>
<td>Fortitude DC 16</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/perilous_demesne_grand">Perilous Demesne, Grand<IonRippleEffect /></Link></td>
<td>Will DC 22</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/perilous_demesne_greater">Perilous Demesne, Greater<IonRippleEffect /></Link></td>
<td>Will DC 19</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/perilous_demesne_major">Perilous Demesne, Major<IonRippleEffect /></Link></td>
<td>Will DC 16</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/perilous_demesne_minor">Perilous Demesne, Minor<IonRippleEffect /></Link></td>
<td>Will DC 13</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/sealed_fate">Sealed Fate<IonRippleEffect /></Link></td>
<td>Will DC 23</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/shattered_self">Shattered Self<IonRippleEffect /></Link></td>
<td>Will DC 20</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/tormenting_visions">Tormenting Visions<IonRippleEffect /></Link></td>
<td>Will DC 15</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/unluck">Unluck<IonRippleEffect /></Link></td>
<td>Will DC 20</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/unseasonable_weather">Unseasonable Weather<IonRippleEffect /></Link></td>
<td>Will DC 23</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/weeping_wound">Weeping Wound<IonRippleEffect /></Link></td>
<td>Fortitude DC 14</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/curse/werewolf_lycanthropy">Werewolf Lycanthropy<IonRippleEffect /></Link></td>
<td>Fortitude DC 15</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _diseases = {title: "Diseases", parent_topics: ["combat","special_abilities_2","afflictions"], siblings: ["curses","diseases","infestations","poison"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 557</Link></p>
<p>From a widespread plague to the bite of a dire rat, disease is a serious threat to common folk and adventurers alike. Diseases rarely have a limited frequency, but most have a lengthy onset time. This onset time can also be variable. Most diseases can be cured by a number of consecutive saving throws or by spells such as <Link to="/spell/remove_disease">remove disease</Link>.</p>
<p>Diseases use the same stat blocks as other <Link to="/rule/afflictions">afflictions</Link>.</p>
<ScrollContainer id="rule-diseases--table-0"><table>
<thead>
<tr>
<th>Disease</th>
<th>Saving Throw</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/disease/pallid_gift">Pallid Gift<IonRippleEffect /></Link></td>
<td>DC 10+ (see description)</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/bonecrusher_dengue">Bonecrusher (Dengue)<IonRippleEffect /></Link></td>
<td>DC 12</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/filth_fever">Filth Fever<IonRippleEffect /></Link></td>
<td>DC 12</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/fungal_flu">Fungal Flu<IonRippleEffect /></Link></td>
<td>DC 12</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/leprosy">Leprosy<IonRippleEffect /></Link></td>
<td>DC 12 (negates; DC 20 to avoid effects)</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/mindfire">Mindfire<IonRippleEffect /></Link></td>
<td>DC 12</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/cowards_mark">Coward's Mark<IonRippleEffect /></Link></td>
<td>DC 13</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/ghoul_fever">Ghoul Fever<IonRippleEffect /></Link></td>
<td>DC 13</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/green_haze">Green Haze<IonRippleEffect /></Link></td>
<td>DC 13</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/shakes">Shakes<IonRippleEffect /></Link></td>
<td>DC 13</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/bluespit">Bluespit<IonRippleEffect /></Link></td>
<td>DC 14</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/brainworms">Brainworms<IonRippleEffect /></Link></td>
<td>DC 14</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/devil_chills">Devil Chills<IonRippleEffect /></Link></td>
<td>DC 14</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/rabies">Rabies<IonRippleEffect /></Link></td>
<td>DC 14</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/sleeping_sickness">Sleeping Sickness<IonRippleEffect /></Link></td>
<td>DC 14</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/slimy_doom">Slimy Doom<IonRippleEffect /></Link></td>
<td>DC 14</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/tetanus">Tetanus<IonRippleEffect /></Link></td>
<td>DC 14</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/glacier_plague">Glacier Plague<IonRippleEffect /></Link></td>
<td>DC 15</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/greenscale">Greenscale<IonRippleEffect /></Link></td>
<td>DC 15</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/moxixs_delectation">Moxix's Delectation<IonRippleEffect /></Link></td>
<td>DC 15</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/red_ache">Red Ache<IonRippleEffect /></Link></td>
<td>DC 15</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/spellscar_fever">Spellscar Fever<IonRippleEffect /></Link></td>
<td>DC 15 (+1 per previous save)</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/the_tainted_plague">The Tainted Plague<IonRippleEffect /></Link></td>
<td>DC 15 (see description)</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/blinding_sickness">Blinding Sickness<IonRippleEffect /></Link></td>
<td>DC 16</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/blood_veil">Blood Veil<IonRippleEffect /></Link></td>
<td>DC 16</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/bonechill">Bonechill<IonRippleEffect /></Link></td>
<td>DC 16</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/boot_soup">Boot Soup<IonRippleEffect /></Link></td>
<td>DC 16</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/cackle_fever">Cackle Fever<IonRippleEffect /></Link></td>
<td>DC 16</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/dvezda_plague">Dvezda Plague<IonRippleEffect /></Link></td>
<td>DC 16</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/dysentary">Dysentary<IonRippleEffect /></Link></td>
<td>DC 16</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/final_rest">Final Rest<IonRippleEffect /></Link></td>
<td>DC 16</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/pulsing_puffs">Pulsing Puffs<IonRippleEffect /></Link></td>
<td>DC 16</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/the_scales">The Scales<IonRippleEffect /></Link></td>
<td>DC 16</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/bubonic_plague">Bubonic Plague<IonRippleEffect /></Link></td>
<td>DC 17</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/chillbane_fever">Chillbane Fever<IonRippleEffect /></Link></td>
<td>DC 17</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/firegut">Firegut<IonRippleEffect /></Link></td>
<td>DC 17</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/shattermind">Shattermind<IonRippleEffect /></Link></td>
<td>DC 17</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/demon_fever">Demon Fever<IonRippleEffect /></Link></td>
<td>DC 18</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/demonplague">Demonplague<IonRippleEffect /></Link></td>
<td>DC 18</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/malaria_jungle_fever">Malaria (Jungle Fever)<IonRippleEffect /></Link></td>
<td>DC 18</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/red_drip">Red Drip<IonRippleEffect /></Link></td>
<td>DC 18</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/eidite_sickness">Eidite sickness<IonRippleEffect /></Link></td>
<td>DC 20</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/ergia">Ergia<IonRippleEffect /></Link></td>
<td>DC 20</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/scarlet_leprosy">Scarlet Leprosy<IonRippleEffect /></Link></td>
<td>DC 20</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/vorels_phage">Vorel's Phage<IonRippleEffect /></Link></td>
<td>DC 20</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/blightburn_sickness">Blightburn Sickness<IonRippleEffect /></Link></td>
<td>DC 22</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/crypt_fever">Crypt Fever<IonRippleEffect /></Link></td>
<td>DC 22</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/disease/daemonic_wasting">Daemonic Wasting<IonRippleEffect /></Link></td>
<td>DC 23</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _infestations = {title: "Infestations", parent_topics: ["combat","special_abilities_2","afflictions"], siblings: ["curses","diseases","infestations","poison"], jsx: <><p><strong>Sources</strong> <Link to="/source/gamemastery_guide">GameMastery Guide pg. 245</Link></p>
<p>Parasites such as ear seekers or rot grubs cause infestations, a type of affliction similar to diseases. Infestations can only be cured through specific means; no matter how many saving throws are made, the infestation continues to afflict the target. While a <Link to="/spell/remove_disease">remove disease</Link> spell (or similar effect) instantly halts an infestation, immunity to disease offers no protection, as the infestation itself is caused by parasites. Infestations can afflict <Link to="/race/android">androids</Link> despite their artificial nature and immunity to disease, but they can't afflict nonliving creatures such as undead.</p>
<p>Infestations use the same stat blocks as other <Link to="/rule/afflictions">afflictions</Link>.</p>
<ScrollContainer id="rule-infestations--table-0"><table>
<thead>
<tr>
<th>Infestation</th>
<th>Fortitude DC</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/infestation/ear_seekers">Ear Seekers<IonRippleEffect /></Link></td>
<td>15</td>
<td>Ear seekers are tiny, pale-colored worms that dwell in rotting wood or other organic detritus.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/infestation/fractal_etch">Fractal Etch<IonRippleEffect /></Link></td>
<td>15</td>
<td>The nanites behind this affliction scrub away the folds of the brain</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/infestation/rot_grubs">Rot Grubs<IonRippleEffect /></Link></td>
<td>17</td>
<td>Rot grubs are nauseating parasites that feed on flesh and nest in corpses.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/infestation/soldiers_peace">Soldier's Peace<IonRippleEffect /></Link></td>
<td>15</td>
<td>These nanites settle in the brain, where they inflict crippling pain in response to violent acts and thoughts.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/infestation/thought_crawlers">Thought Crawlers<IonRippleEffect /></Link></td>
<td>16</td>
<td>These parasitic worms live in cerebrospinal fluid, causing an escalating progression of debilitating neurological symptoms.</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _poison = {title: "Poison", parent_topics: ["combat","special_abilities_2","afflictions"], siblings: ["curses","diseases","infestations","poison"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 557</Link>, <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 51</Link></p>
<p>No other affliction is so prevalent as poison. From the fangs of a viper to the ichor-stained assassin's blade, poison is a constant threat. Poisons can be cured by successful saving throws and spells such as neutralize poison.</p>
<p>Poisons use the same stat blocks as other <Link to="/rule/afflictions">afflictions</Link>.</p>
<h3 id="rule-poison-types-of-poison">Types of Poison</h3>
<p><strong className="hl">Contact poisons</strong> are contracted the moment someone touches the poison with his bare skin. Such poisons can be used as injury poisons. Contact poisons usually have an onset time of 1 minute and a frequency of 1 minute.</p>
<p><strong className="hl">Ingested poisons</strong> are contracted when a creature eats or drinks the poison. Ingested poisons usually have an onset time of 10 minutes and a frequency of 1 minute.</p>
<p><strong className="hl">Injury poisons</strong> are primarily contracted through the attacks of certain creatures and through weapons coated in the toxin. Injury poisons do not usually have an onset time and have a frequency of 1 round.</p>
<p><strong className="hl">Inhaled poisons</strong> are contracted the moment a creature enters an area containing such poisons. Most inhaled poisons fill a volume equal to a 10-foot cube per dose. Creatures can attempt to <Link to="/misc/hold_their_breath">hold their breath</Link> while inside to avoid inhaling the toxin. Creatures holding their breaths receive a 50% chance of not having to make a Fortitude save each round. Note that a character that would normally suffocate while attempting to hold its breath instead begins to breathe normally again.</p>
<p><strong className="hl">Triggered Poisons:</strong> Numerous Inner Sea poisons are designed to take effect only after exposure to a particular stimulus. Poisons with onset triggers list the specific triggers in their Onset entries (rather than a number of rounds, minutes, or days). A character who fails his Fortitude saving throw upon exposure doesn't start attempting saving throws against the poison's effects until exposed to the listed stimulus.</p>
<p>Some triggered poisons have initial and secondary effects. The first time after an affected character triggers the poison and fails a saving throw to resist the poison, the character suffers the initial effect. If the affected character fails any subsequent saving throws, he suffers the secondary effect. Unless noted otherwise, a triggered poison that isn't triggered after 1 day has no effect.</p>
<h3 id="rule-poison-multiple-doses">Multiple Doses</h3>
<p>Unlike other afflictions, multiple doses of the same poison stack. Poisons delivered by injury and contact cannot inflict more than one dose of poison at a time, but inhaled and ingested poisons can inflict multiple doses at once. Each additional dose extends the total duration of the poison (as noted under frequency) by half its total duration. In addition, each dose of poison increases the DC to resist the poison by +2. This increase is cumulative. Multiple doses do not alter the cure conditions of the poison, and meeting these conditions ends the affliction for all the doses. For example, a character is bit three times in the same round by a trio of Medium monstrous spiders, injecting him with three doses of Medium spider venom. The unfortunate character must make a DC 18 Fortitude save for the next 8 rounds. Fortunately, just one successful save cures the character of all three doses of the poison.</p>
<h3 id="rule-poison-using-and-making-poison">Using and Making Poison</h3>
<p>Applying poison to a weapon or single piece of ammunition is a standard action. Whenever a character applies or readies a poison for use there is a 5% chance that he exposes himself to the poison and must save against the poison as normal. This does not consume the dose of poison. Whenever a character attacks with a poisoned weapon, if the attack roll results in a natural 1, he exposes himself to the poison. This poison is consumed when the weapon strikes a creature or is touched by the wielder. Characters with the <Link to="/ability/poison_use">poison use</Link> class feature do not risk accidentally poisoning themselves.</p>
<p>Poisons can be made using Craft (alchemy). The DC to make a poison is equal to its Fortitude save DC. Rolling a natural 1 on a Craft skill check while making a poison exposes the crafter to the poison. Crafters with the poison use class feature do not risk poisoning themselves when using Craft to make poison.</p>
<p>Poisons are listed <Link to="/main/equipment_poisons">in the equipment section</Link>.</p>
</>};
const _blindsight_and_blindsense = {title: "Blindsight and Blindsense", parent_topics: ["combat","special_abilities_2"], siblings: ["ability_score_bonuses","ability_damage_drain","afflictions","blindsight_and_blindsense","channel_resistance","charm_and_compulsion","damage_reduction","darkvision","death_attacks","energy_drain_and_negative_levels","energy_immunity_and_vulnerability","fear","invisibility","low_light_vision","paralysis","scent","spell_resistance_2"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 560</Link></p>
<p>Some creatures possess <strong className="hl">blindsight,</strong> the extraordinary ability to use a nonvisual sense (or a combination of senses) to operate effectively without vision. Such senses may include sensitivity to vibrations, acute scent, keen hearing, or echolocation. This makes invisibility and <Link to="/rule/concealment">concealment</Link> (even magical darkness) irrelevant to the creature (though it still can't see ethereal creatures). This ability operates out to a range specified in the creature description.</p>
<ul>
<li>Blindsight never allows a creature to distinguish color or visual contrast. A creature cannot read with blindsight.</li>
<li>Blindsight does not subject a creature to gaze attacks (even though darkvision does).</li>
<li>Blinding attacks do not penalize creatures that use blindsight.</li>
<li>Deafening attacks thwart blindsight if it relies on hearing.</li>
<li>Blindsight works underwater but not in a vacuum.</li>
<li>Blindsight negates displacement and blur effects.</li>
</ul>
<p><strong className="hl">Blindsense:</strong> Other creatures have blindsense, a lesser ability that lets the creature notice things it cannot see, but without the precision of blindsight. The creature with blindsense usually does not need to make Perception checks to notice and locate creatures within range of its blindsense ability, provided that it has line of effect to that creature. Any opponent that cannot be seen has total concealment (50% miss chance) against a creature with blindsense, and the blindsensing creature still has the normal miss chance when attacking foes that have concealment. Visibility still affects the movement of a creature with blindsense. A creature with blindsense is still denied its Dexterity bonus to Armor Class against attacks from creatures it cannot see.</p>
</>};
const _channel_resistance = {title: "Channel Resistance", parent_topics: ["combat","special_abilities_2"], siblings: ["ability_score_bonuses","ability_damage_drain","afflictions","blindsight_and_blindsense","channel_resistance","charm_and_compulsion","damage_reduction","darkvision","death_attacks","energy_drain_and_negative_levels","energy_immunity_and_vulnerability","fear","invisibility","low_light_vision","paralysis","scent","spell_resistance_2"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 561</Link></p>
<p>Creatures with channel resistance gain a bonus on Will saves made against channeled energy. They add their bonus to any Will saves made to halve the damage and resist the effect.</p>
</>};
const _charm_and_compulsion = {title: "Charm and Compulsion", parent_topics: ["combat","special_abilities_2"], siblings: ["ability_score_bonuses","ability_damage_drain","afflictions","blindsight_and_blindsense","channel_resistance","charm_and_compulsion","damage_reduction","darkvision","death_attacks","energy_drain_and_negative_levels","energy_immunity_and_vulnerability","fear","invisibility","low_light_vision","paralysis","scent","spell_resistance_2"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 561</Link></p>
<p>Many abilities and spells can cloud the minds of characters and monsters, leaving them unable to tell friend from foe - or worse yet, deceiving them into thinking that their former friends are now their worst enemies. Two general types of enchantments affect characters and creatures: charms and compulsions.</p>
<p><strong className="hl">Charming</strong> another creature gives the charming character the ability to befriend and suggest courses of action to his minion, but the servitude is not absolute or mindless. Charms of this type include the various charm spells and some monster abilities. Essentially, a charmed character retains free will but makes choices according to a skewed view of the world.</p>
<ul>
<li>A charmed creature doesn't gain any magical ability to understand his new friend's language.</li>
<li>A charmed character retains his original alignment and allegiances, generally with the exception that he now regards the charming creature as a dear friend and will give great weight to his suggestions and directions.</li>
<li>A charmed character fights his former allies only if they threaten his new friend, and even then he uses the least lethal means at his disposal as long as these tactics show any possibility of success (just as he would in a fight with an actual friend).</li>
<li>A charmed character is entitled to an opposed Charisma check against his master in order to resist instructions or commands that would make him do something he wouldn't normally do even for a close friend. If he succeeds, he decides not to go along with that order but remains charmed.</li>
<li>A charmed character never obeys a command that is obviously suicidal or grievously harmful to him.</li>
<li>If the charming creature commands his minion to do something that the influenced character would be violently opposed to, the subject may attempt a new saving throw to break free of the influence altogether.</li>
<li>A charmed character who is openly attacked by the creature who charmed him or by that creature's apparent allies is automatically freed of the spell or effect.</li>
</ul>
<p><strong className="hl">Compulsion</strong> is a different matter altogether. A compulsion overrides the subject's free will in some way or simply changes the way the subject's mind works. A charm makes the subject a friend of the caster; a compulsion makes the subject obey the caster.</p>
<p>Regardless of whether a character is charmed or compelled, he does not volunteer information or tactics that his master doesn't ask for.</p>
</>};
const _damage_reduction = {title: "Damage Reduction", parent_topics: ["combat","special_abilities_2"], siblings: ["ability_score_bonuses","ability_damage_drain","afflictions","blindsight_and_blindsense","channel_resistance","charm_and_compulsion","damage_reduction","darkvision","death_attacks","energy_drain_and_negative_levels","energy_immunity_and_vulnerability","fear","invisibility","low_light_vision","paralysis","scent","spell_resistance_2"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 561</Link></p>
<p>Some magic creatures have the supernatural ability to instantly heal damage from weapons or ignore blows altogether as though they were invulnerable.</p>
<p>The numerical part of a creature's damage reduction (or DR) is the amount of damage the creature ignores from normal attacks. Usually, a certain type of weapon can overcome this reduction (see Overcoming DR). This information is separated from the damage reduction number by a slash. For example, DR 5/magic means that a creature takes 5 less points of damage from all weapons that are not magic. If a dash follows the slash, then the damage reduction is effective against any attack that does not ignore damage reduction.</p>
<p>Some DR has multiple parts, separated by an "and" or an "or". An attack must have <strong>all</strong> qualities of an "and" DR in order to bypass it (e.g. a <Link to="/template/lich">lich's</Link> DR 15/bludgeoning and magic), but needs only <strong>one</strong> quality of an "or" DR to get through (e.g. a <Link to="/monster/dretch">dretch's</Link> DR 5/cold iron or good).</p>
<p>Whenever damage reduction completely negates the damage from an attack, it also negates most special effects that accompany the attack, such as injury poison, a monk's stunning, and injury-based disease. Damage reduction does not negate touch attacks, energy damage dealt along with an attack, or energy drains. Nor does it affect poisons or diseases delivered by inhalation, ingestion, or contact.</p>
<p>Attacks that deal no damage because of the target's damage reduction do not disrupt spells.</p>
<p>Spells, spell-like abilities, and energy attacks (even nonmagical fire) ignore damage reduction.</p>
<p>Sometimes damage reduction represents instant healing. Sometimes it represents the creature's tough hide or body. In either case, other characters can see that conventional attacks won't work.</p>
<p>If a creature has damage reduction from more than one source, the two forms of damage reduction do not stack. Instead, the creature gets the benefit of the best damage reduction in a given situation.</p>
<p><strong className="hl">Overcoming DR:</strong> Damage reduction may be overcome by special materials, magic weapons (any weapon with a +1 or higher enhancement bonus, not counting the enhancement from masterwork quality), certain types of weapons (such as slashing or bludgeoning), and weapons imbued with an alignment.</p>
<p>Ammunition fired from a projectile weapon with an enhancement bonus of +1 or higher is treated as a magic weapon for the purpose of overcoming damage reduction. Similarly, ammunition fired from a projectile weapon with an alignment gains the alignment of that projectile weapon (in addition to any alignment it may already have).</p>
<p>Weapons with an enhancement bonus of +3 or greater can ignore some types of damage reduction, regardless of their actual material or alignment. The following table shows what type of enhancement bonus is needed to overcome some common types of damage reduction.</p>
<ScrollContainer id="rule-damage_reduction--table-0"><table>
<thead>
<tr>
<th>DR Type</th>
<th>Weapon Enhancement Bonus Equivalent</th>
</tr>
</thead>
<tbody><tr>
<td>Cold Iron/Silver</td>
<td>+3</td>
</tr>
<tr>
<td>Adamantine<sup><InnerLink showBacklink="backlink-rule-damage_reduction-ref-1-1" id="rule-damage_reduction-ref-1-1" data-hash-target to="rule-damage_reduction-1">1</InnerLink></sup></td>
<td>+4</td>
</tr>
<tr>
<td>Alignment-based</td>
<td>+5</td>
</tr>
</tbody></table></ScrollContainer>
<p><Link to="/rule/weapon_descriptions">Some weapons</Link> deal damage of multiple types. If a weapon causes two types of damage, the type it deals is not half one type and half another; all damage caused is of both types. Therefore, a creature would have to be immune to both types of damage to ignore any of the damage caused by such a weapon (e.g. a +3 <Link to="/eq-weapon/morningstar">morningstar</Link> [B and P damage] deals full damage to a lich).</p>
<p>In other cases, a weapon can deal either of two types of damage. In a situation where the damage type is significant, the wielder can choose which type of damage to deal with such a weapon (e.g. a +3 <Link to="/eq-weapon/lucerne_hammer">lucerne hammer</Link> [B or P damage] only overcomes a lich's DR when used to deal bludgeoning damage).</p>
<section data-footnotes>
<h3 id="rule-damage_reduction-label">Footnotes</h3>
<ol>
<li id="rule-damage_reduction-1">
<p>Note that this does not give the ability to ignore hardness, like an actual <Link to="/eq-material/adamantine">adamantine</Link> weapon does <InnerLink id="backlink-rule-damage_reduction-ref-1-1" data-hash-target to="rule-damage_reduction-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _darkvision = {title: "Darkvision", parent_topics: ["combat","special_abilities_2"], siblings: ["ability_score_bonuses","ability_damage_drain","afflictions","blindsight_and_blindsense","channel_resistance","charm_and_compulsion","damage_reduction","darkvision","death_attacks","energy_drain_and_negative_levels","energy_immunity_and_vulnerability","fear","invisibility","low_light_vision","paralysis","scent","spell_resistance_2"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 562</Link></p>
<p>Darkvision is the extraordinary ability to see with no light source at all, out to a range specified for the creature. Darkvision is black-and-white only (colors cannot be discerned). It does not allow characters to see anything that they could not see otherwise-invisible objects are still invisible, and illusions are still visible as what they seem to be. Likewise, darkvision subjects a creature to gaze attacks normally. The presence of light does not spoil darkvision.</p>
</>};
const _death_attacks = {title: "Death Attacks", parent_topics: ["combat","special_abilities_2"], siblings: ["ability_score_bonuses","ability_damage_drain","afflictions","blindsight_and_blindsense","channel_resistance","charm_and_compulsion","damage_reduction","darkvision","death_attacks","energy_drain_and_negative_levels","energy_immunity_and_vulnerability","fear","invisibility","low_light_vision","paralysis","scent","spell_resistance_2"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 562</Link></p>
<p>In most cases, a death attack allows the victim a Fortitude save to avoid the effect, but if the save fails, the creature takes a large amount of damage, which might cause it to die instantly.</p>
<ul>
<li>Raise dead doesn't work on someone killed by a death attack or effect.</li>
<li>Death attacks slay instantly. A victim cannot be made stable and thereby kept alive.</li>
<li>In case it matters, a dead character, no matter how he died, has hit points equal to or less than his negative Constitution score.</li>
<li>The spell death ward protects against these attacks.</li>
</ul>
</>};
const _energy_drain_and_negative_levels = {title: "Energy Drain and Negative Levels", parent_topics: ["combat","special_abilities_2"], siblings: ["ability_score_bonuses","ability_damage_drain","afflictions","blindsight_and_blindsense","channel_resistance","charm_and_compulsion","damage_reduction","darkvision","death_attacks","energy_drain_and_negative_levels","energy_immunity_and_vulnerability","fear","invisibility","low_light_vision","paralysis","scent","spell_resistance_2"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 562</Link></p>
<p>Some spells and a number of undead creatures have the ability to drain away life and energy; this dreadful attack results in "negative levels." These cause a character to take a number of penalties.</p>
<p>For each negative level a creature has, it takes a cumulative -1 penalty on all ability checks, attack rolls, combat maneuver checks, Combat Maneuver Defense, saving throws, and skill checks. In addition, the creature reduces its current and total hit points by 5 for each negative level it possesses. The creature is also treated as one level lower for the purpose of level-dependent variables (such as spellcasting) for each negative level possessed. Spellcasters do not lose any prepared spells or slots as a result of negative levels. If a creature's negative levels equal or exceed its total Hit Dice, it dies.</p>
<p>A creature with temporary negative levels receives a new saving throw to remove the negative level each day. The DC of this save is the same as the effect that caused the negative levels.</p>
<p>Some abilities and spells (such as <Link to="/spell/raise_dead">raise dead</Link>) bestow permanent level drain on a creature. These are treated just like temporary negative levels, but they do not allow a new save each day to remove them. Level drain can be removed through spells like <Link to="/spell/restoration">restoration</Link>. Permanent negative levels remain after a dead creature is restored to life. A creature whose permanent negative levels equal its Hit Dice cannot be brought back to life through spells like <em>raise dead</em> and <Link to="/spell/resurrection">resurrection</Link> without also receiving a restoration spell, cast the round after it is restored to life.</p>
</>};
const _energy_immunity_and_vulnerability = {title: "Energy Immunity, Vulnerability, and Resistance", parent_topics: ["combat","special_abilities_2"], siblings: ["ability_score_bonuses","ability_damage_drain","afflictions","blindsight_and_blindsense","channel_resistance","charm_and_compulsion","damage_reduction","darkvision","death_attacks","energy_drain_and_negative_levels","energy_immunity_and_vulnerability","fear","invisibility","low_light_vision","paralysis","scent","spell_resistance_2"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 563</Link></p>
<p>A creature with <strong className="hl">energy immunity</strong> never takes damage from that energy type. <strong className="hl">Vulnerability</strong> means the creature takes half again as much (+50%) damage as normal from that energy type, regardless of whether a saving throw is allowed or if the save is a success or failure.</p>
<p>A creature with <strong className="hl">energy resistance</strong> has the ability (usually extraordinary) to ignore some damage of a certain type per attack, but it does not have total immunity.</p>
<p>Each resistance ability is defined by what energy type it resists and how many points of damage are resisted. It doesn't matter whether the damage has a mundane or magical source.</p>
<p>When resistance completely negates the damage from an energy attack, the attack does not disrupt a spell. This resistance does not stack with the resistance that a spell might provide.</p>
</>};
const _fear = {title: "Fear", parent_topics: ["combat","special_abilities_2"], siblings: ["ability_score_bonuses","ability_damage_drain","afflictions","blindsight_and_blindsense","channel_resistance","charm_and_compulsion","damage_reduction","darkvision","death_attacks","energy_drain_and_negative_levels","energy_immunity_and_vulnerability","fear","invisibility","low_light_vision","paralysis","scent","spell_resistance_2"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 564</Link></p>
<p>Spells, magic items, and certain monsters can affect characters with fear. In most cases, the character makes a Will saving throw to resist this effect, and a failed roll means that the character is shaken, frightened, or panicked.</p>
<p><strong className="hl">Shaken:</strong> Characters who are shaken take a -2 penalty on attack rolls, saving throws, skill checks, and ability checks.</p>
<p><strong className="hl">Frightened:</strong> Characters who are frightened are shaken, and in addition they flee from the source of their fear as quickly as they can. They can choose the paths of their flight. Other than that stipulation, once they are out of sight (or hearing) of the source of their fear, they can act as they want. If the duration of their fear continues, however, characters can be forced to flee if the source of their fear presents itself again. Characters unable to flee can fight (though they are still shaken).</p>
<p><strong className="hl">Panicked:</strong> Characters who are panicked are shaken, and they run away from the source of their fear as quickly as they can, dropping whatever they are holding. Other than running away from the source, their paths are random. They flee from all other dangers that confront them rather than facing those dangers. Once they are out of sight (or hearing) of any source of danger, they can act as they want. Panicked characters cower if they are prevented from fleeing.</p>
<p><strong className="hl">Becoming Even More Fearful:</strong> Fear effects are cumulative. A shaken character who is made shaken again becomes frightened, and a shaken character who is made frightened becomes panicked instead. A frightened character who is made shaken or frightened becomes panicked instead.</p>
</>};
const _invisibility = {title: "Invisibility", parent_topics: ["combat","special_abilities_2"], siblings: ["ability_score_bonuses","ability_damage_drain","afflictions","blindsight_and_blindsense","channel_resistance","charm_and_compulsion","damage_reduction","darkvision","death_attacks","energy_drain_and_negative_levels","energy_immunity_and_vulnerability","fear","invisibility","low_light_vision","paralysis","scent","spell_resistance_2"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 564</Link></p>
<p>The ability to move about unseen is not foolproof. While they can't be seen, invisible creatures can be heard, smelled, or felt.</p>
<p>Invisibility makes a creature undetectable by vision, including darkvision.</p>
<p>Invisibility does not, by itself, make a creature immune to critical hits, but it does make the creature immune to extra damage from being a ranger's <Link to="/ability/favored_enemy">favored enemy</Link> and from sneak attacks.</p>
<p>A creature can generally notice the presence of an active invisible creature within 30 feet with a DC 20 Perception check. The observer gains a hunch that "something's there" but can't see it or target it accurately with an attack. It's practically impossible (+20 DC) to pinpoint an invisible creature's location with a Perception check. Even once a character has pinpointed the square that contains an invisible creature, the creature still benefits from total concealment (50% miss chance). There are a number of modifiers that can be applied to this DC if the invisible creature is moving or engaged in a noisy activity.</p>
<ScrollContainer id="rule-invisibility--table-0"><table>
<thead>
<tr>
<th>Invisible Creature is...</th>
<th>Perception DC Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>In combat or speaking</td>
<td>-20</td>
</tr>
<tr>
<td>Moving at half speed</td>
<td>-5</td>
</tr>
<tr>
<td>Moving at full speed</td>
<td>-10</td>
</tr>
<tr>
<td>Running or charging</td>
<td>-20</td>
</tr>
<tr>
<td>Not moving</td>
<td>+20</td>
</tr>
<tr>
<td>Using Stealth</td>
<td>Stealth Check +20</td>
</tr>
<tr>
<td>Some distance away</td>
<td>+1 per 10 feet</td>
</tr>
<tr>
<td>Behind an obstacle (door)</td>
<td>+5</td>
</tr>
<tr>
<td>Behind an obstacle (stone wall)</td>
<td>+15</td>
</tr>
</tbody></table></ScrollContainer>
<p>A creature can grope about to find an invisible creature. A character can make a touch attack with his hands or a weapon into two adjacent 5-foot squares using a standard action. If an invisible target is in the designated area, there is a 50% miss chance on the touch attack. If successful, the groping character deals no damage but has successfully pinpointed the invisible creature's current location. If the invisible creature moves, its location, obviously, is once again unknown.</p>
<p>If an invisible creature strikes a character, the character struck knows the location of the creature that struck him (until, of course, the invisible creature moves). The only exception is if the invisible creature has a reach greater than 5 feet. In this case, the struck character knows the general location of the creature but has not pinpointed the exact location.</p>
<p>If a character tries to attack an invisible creature whose location he has pinpointed, he attacks normally, but the invisible creature still benefits from full <Link to="/rule/concealment">concealment</Link> (and thus a 50% miss chance). A particularly large and slow invisible creature might get a smaller miss chance.</p>
<p>If a character tries to attack an invisible creature whose location he has not pinpointed, have the player choose the space where the character will direct the attack. If the invisible creature is there, conduct the attack normally. If the enemy's not there, roll the miss chance as if it were there and tell him that the character has missed, regardless of the result. That way the player doesn't know whether the attack missed because the enemy's not there or because you successfully rolled the miss chance.</p>
<p>If an invisible character picks up a visible object, the object remains visible. An invisible creature can pick up a small visible item and hide it on his person (tucked in a pocket or behind a cloak) and render it effectively invisible. One could coat an invisible object with flour to at least keep track of its position (until the flour falls off or blows away).</p>
<p>Invisible creatures leave tracks. They can be tracked normally. Footprints in sand, mud, or other soft surfaces can give enemies clues to an invisible creature's location.</p>
<p>An invisible creature in the water displaces water, revealing its location. The invisible creature, however, is still hard to see and benefits from concealment.</p>
<p>A creature with the <Link to="/umr/scent">scent</Link> ability can detect an invisible creature as it would a visible one.</p>
<p>A creature with the <Link to="/feat/blind_fight">Blind-Fight</Link> feat has a better chance to hit an invisible creature. Roll the miss chance twice, and he misses only if both rolls indicate a miss. (Alternatively, make one 25% miss chance roll rather than two 50% miss chance rolls.)</p>
<p>A creature with <Link to="/rule/blindsight_and_blindsense">blindsight</Link> can attack (and otherwise interact with) creatures regardless of invisibility.</p>
<p>An invisible burning torch still gives off light, as does an invisible object with a light or similar spell cast upon it.</p>
<p>Ethereal creatures (such as ghosts) are invisible. Since ethereal creatures are not materially present, Perception checks, scent, Blind-Fight, and blindsight don't help locate them. Incorporeal creatures are often invisible. Scent, Blind-Fight, and blindsight don't help creatures find or attack invisible, incorporeal creatures, but Perception checks can help.</p>
<p>Invisible creatures cannot use gaze attacks.</p>
<p>Invisibility does not thwart divination spells.</p>
<p>Since some creatures can detect or even see invisible creatures, it is helpful to be able to hide even when invisible.</p>
</>};
const _low_light_vision = {title: "Low-Light Vision", parent_topics: ["combat","special_abilities_2"], siblings: ["ability_score_bonuses","ability_damage_drain","afflictions","blindsight_and_blindsense","channel_resistance","charm_and_compulsion","damage_reduction","darkvision","death_attacks","energy_drain_and_negative_levels","energy_immunity_and_vulnerability","fear","invisibility","low_light_vision","paralysis","scent","spell_resistance_2"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 565</Link></p>
<p>Characters with low-light vision have eyes that are so sensitive to light that they can see twice as far as normal in dim light. Low-light vision is color vision. A spellcaster with low-light vision can read a scroll as long as even the tiniest candle flame is next to him as a source of light. Characters with low-light vision can see outdoors on a moonlit night as well as they can during the day.</p>
</>};
const _paralysis = {title: "Paralysis", parent_topics: ["combat","special_abilities_2"], siblings: ["ability_score_bonuses","ability_damage_drain","afflictions","blindsight_and_blindsense","channel_resistance","charm_and_compulsion","damage_reduction","darkvision","death_attacks","energy_drain_and_negative_levels","energy_immunity_and_vulnerability","fear","invisibility","low_light_vision","paralysis","scent","spell_resistance_2"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 565</Link></p>
<p>Some monsters and spells have the supernatural or spell-like ability to paralyze their victims, immobilizing them through magical means. Paralysis from poison is discussed in the Afflictions section.</p>
<p>A <Link to="/rule/paralyzed">paralyzed</Link> character cannot move, speak, or take any physical action. He is rooted to the spot, frozen and helpless. Not even friends can move his limbs. He may take purely mental actions, such as casting a spell with no components.</p>
<p>A winged creature flying in the air at the time that it becomes paralyzed cannot flap its wings and falls. A swimmer can't swim and may drown.</p>
</>};
const _scent = {title: "Scent", parent_topics: ["combat","special_abilities_2"], siblings: ["ability_score_bonuses","ability_damage_drain","afflictions","blindsight_and_blindsense","channel_resistance","charm_and_compulsion","damage_reduction","darkvision","death_attacks","energy_drain_and_negative_levels","energy_immunity_and_vulnerability","fear","invisibility","low_light_vision","paralysis","scent","spell_resistance_2"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 565</Link></p>
<p>This extraordinary ability lets a creature detect approaching enemies, sniff out hidden foes, and track by sense of smell.</p>
<p>A creature with the <Link to="/umr/scent">scent</Link> ability can detect opponents by sense of smell, generally within 30 feet. If the opponent is upwind, the range is 60 feet. If it is downwind, the range is 15 feet. Strong scents, such as smoke or rotting garbage, can be detected at twice the ranges noted above. Overpowering scents, such as skunk musk or troglodyte stench, can be detected at three times these ranges.</p>
<p>The creature detects another creature's presence but not its specific location. Noting the direction of the scent is a move action. If the creature moves within 5 feet (1 square) of the scent's source, the creature can pinpoint the area that the source occupies, even if it cannot be seen.</p>
<p>A creature with the Survival skill and the scent ability can follow tracks by smell, making a Survival check to find or follow a track. A creature with the scent ability can attempt to follow tracks using Survival untrained. The typical DC for a fresh trail is 10. The DC increases or decreases depending on how strong the quarry's odor is, the number of creatures, and the age of the trail. For each hour that the trail is cold, the DC increases by 2. The ability otherwise follows the rules for the Survival skill in regards to tracking. Creatures tracking by scent ignore the effects of surface conditions and poor visibility.</p>
<p>Creatures with the scent ability can identify familiar odors just as humans do familiar sights.</p>
<p>Water, particularly running water, ruins a trail for air-breathing creatures. Water-breathing creatures that have the scent ability, however, can use it in the water easily.</p>
<p>False, powerful odors can easily mask other scents. The presence of such an odor completely spoils the ability to properly detect or identify creatures, and the base Survival DC to track becomes 20 rather than 10.</p>
</>};
const _spell_resistance_2 = {title: "Spell Resistance", parent_topics: ["combat","special_abilities_2"], siblings: ["ability_score_bonuses","ability_damage_drain","afflictions","blindsight_and_blindsense","channel_resistance","charm_and_compulsion","damage_reduction","darkvision","death_attacks","energy_drain_and_negative_levels","energy_immunity_and_vulnerability","fear","invisibility","low_light_vision","paralysis","scent","spell_resistance_2"], subtopics: ["when_spell_resistance_applies","successful_spell_resistance"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 565</Link></p>
<p>Spell resistance is the extraordinary ability to avoid being affected by spells. Some spells also grant spell resistance.</p>
<p>To affect a creature that has spell resistance, a spellcaster must make a caster level check (1d20 + caster level) at least equal to the creature's spell resistance. The defender's spell resistance is like an Armor Class against magical attacks. If the caster fails the check, the spell doesn't affect the creature. The possessor does not have to do anything special to use spell resistance. The creature need not even be aware of the threat for its spell resistance to operate.</p>
<p>Only spells and spell-like abilities are subject to spell resistance. Extraordinary and supernatural abilities (including enhancement bonuses on magic weapons) are not. A creature can have some abilities that are subject to spell resistance and some that are not. Even some spells ignore spell resistance; see When Spell Resistance Applies, below.</p>
<p>A creature can voluntarily lower its spell resistance. Doing so is a standard action that does not provoke an attack of opportunity. Once a creature lowers its resistance, it remains down until the creature's next turn. At the beginning of the creature's next turn, the creature's spell resistance automatically returns unless the creature intentionally keeps it down (also a standard action that does not provoke an attack of opportunity).</p>
<p>A creature's spell resistance never interferes with its own spells, items, or abilities.</p>
<p>A creature with spell resistance cannot impart this power to others by touching them or standing in their midst. Only the rarest of creatures and a few magic items have the ability to bestow spell resistance upon another.</p>
<p>Spell resistance does not stack, but rather overlaps.</p>
</>};
const _when_spell_resistance_applies = {title: "When Spell Resistance Applies", parent_topics: ["combat","special_abilities_2","spell_resistance_2"], siblings: ["when_spell_resistance_applies","successful_spell_resistance"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 566</Link></p>
<p>Each spell includes an entry that indicates whether spell resistance applies to the spell. In general, whether spell resistance applies depends on what the spell does.</p>
<p><strong className="hl">Targeted Spells:</strong> Spell resistance applies if the spell is targeted at the creature. Some individually targeted spells can be directed at several creatures simultaneously. In such cases, a creature's spell resistance applies only to the portion of the spell actually targeted at that creature. If several different resistant creatures are subjected to such a spell, each checks its spell resistance separately.</p>
<p><strong className="hl">Area Spells:</strong> Spell resistance applies if the resistant creature is within the spell's area. It protects the resistant creature without affecting the spell itself.</p>
<p><strong className="hl">Effect Spells:</strong> Most effect spells summon or create something and are not subject to spell resistance. Sometimes, however, spell resistance applies to effect spells, usually to those that act upon a creature more or less directly.</p>
<p>Spell resistance can protect a creature from a spell that's already been cast. Check spell resistance when the creature is first affected by the spell.</p>
<p>Check spell resistance only once for any particular casting of a spell or use of a spell-like ability. If spell resistance fails the first time, it fails each time the creature encounters that same casting of the spell. Likewise, if the spell resistance succeeds the first time, it always succeeds. If the creature has voluntarily lowered its spell resistance and is then subjected to a spell, the creature still has a single chance to resist that spell later, when its spell resistance is back up.</p>
<p>Spell resistance has no effect unless the energy created or released by the spell actually goes to work on the resistant creature's mind or body. If the spell acts on anything else and the creature is affected as a consequence, no roll is required. Spell-resistant creatures can be harmed by a spell when they are not being directly affected.</p>
<p>Spell resistance does not apply if an effect fools the creature's senses or reveals something about the creature.</p>
<p>Magic actually has to be working for spell resistance to apply. Spells that have instantaneous durations but lasting results aren't subject to spell resistance unless the resistant creature is exposed to the spell the instant it is cast.</p>
</>};
const _successful_spell_resistance = {title: "Successful Spell Resistance", parent_topics: ["combat","special_abilities_2","spell_resistance_2"], siblings: ["when_spell_resistance_applies","successful_spell_resistance"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 567</Link></p>
<p>Spell resistance prevents a spell or a spell-like ability from affecting or harming the resistant creature, but it never removes a magical effect from another creature or negates a spell's effect on another creature. Spell resistance prevents a spell from disrupting another spell.</p>
<p>Against an ongoing spell that has already been cast, a failed check against spell resistance allows the resistant creature to ignore any effect the spell might have. The magic continues to affect others normally</p>
</>};
export default {combat:_combat,how_combat_works:_how_combat_works,the_combat_round:_the_combat_round,initiative:_initiative,surprise:_surprise,combat_statistics:_combat_statistics,attack_roll:_attack_roll,armor_class:_armor_class,damage:_damage,hit_points:_hit_points,attacks_of_opportunity:_attacks_of_opportunity,speed:_speed,saving_throws:_saving_throws,actions_in_combat:_actions_in_combat,standard_actions:_standard_actions,attack:_attack,melee_and_ranged_attacks:_melee_and_ranged_attacks,natural_attacks:_natural_attacks,multiple_attacks_and_fighting_defensively:_multiple_attacks_and_fighting_defensively,critical_hits:_critical_hits,activate_magic_item:_activate_magic_item,cast_a_spell:_cast_a_spell,use_special_ability:_use_special_ability,other_standard_actions:_other_standard_actions,move_actions:_move_actions,move:_move,draw_or_sheathe_a_weapon:_draw_or_sheathe_a_weapon,mount_dismount_a_steed:_mount_dismount_a_steed,ready_or_drop_a_shield:_ready_or_drop_a_shield,other_move_actions:_other_move_actions,full_round_actions:_full_round_actions,full_attack:_full_attack,cast_a_spell_2:_cast_a_spell_2,run:_run,withdraw:_withdraw,other_full_round_actions:_other_full_round_actions,free_actions:_free_actions,swift_and_immediate_actions:_swift_and_immediate_actions,miscellaneous_actions:_miscellaneous_actions,take_5_foot_step:_take_5_foot_step,injury_and_death:_injury_and_death,loss_of_hit_points:_loss_of_hit_points,disabled_0_hit_points:_disabled_0_hit_points,dying_negative_hit_points:_dying_negative_hit_points,dead:_dead,stable_characters_and_recovery:_stable_characters_and_recovery,healing:_healing,temporary_hit_points:_temporary_hit_points,nonlethal_damage:_nonlethal_damage,movement_position_and_distance:_movement_position_and_distance,measuring_distance:_measuring_distance,moving_through_a_square:_moving_through_a_square,terrain_and_obstacles:_terrain_and_obstacles,special_movement_rules:_special_movement_rules,big_and_little_creatures_in_combat:_big_and_little_creatures_in_combat,combat_modifiers:_combat_modifiers,cover:_cover,concealment:_concealment,flanking:_flanking,helpless_defenders:_helpless_defenders,special_attacks:_special_attacks,aid_another_2:_aid_another_2,charge:_charge,combat_maneuvers:_combat_maneuvers,bull_rush:_bull_rush,dirty_trick:_dirty_trick,disarm:_disarm,drag:_drag,grapple:_grapple,overrun:_overrun,reposition:_reposition,steal:_steal,sunder:_sunder,trip:_trip,feint:_feint,mounted_combat:_mounted_combat,throw_splash_weapon:_throw_splash_weapon,greater_splash_weapon:_greater_splash_weapon,two_weapon_fighting:_two_weapon_fighting,delay:_delay,ready:_ready,conditions:_conditions,awareness_conditions:_awareness_conditions,broken_and_fragile:_broken_and_fragile,bleed:_bleed,dying_conditions:_dying_conditions,energy_drained:_energy_drained,entangled:_entangled,exhaustion_conditions:_exhaustion_conditions,fear_conditions:_fear_conditions,flat_footed:_flat_footed,grapple_conditions:_grapple_conditions,incorporeal:_incorporeal,invisible:_invisible,sickened_conditions:_sickened_conditions,paralyzed:_paralyzed,petrified:_petrified,prone:_prone,special_abilities_2:_special_abilities_2,ability_score_bonuses:_ability_score_bonuses,ability_damage_drain:_ability_damage_drain,afflictions:_afflictions,curses:_curses,diseases:_diseases,infestations:_infestations,poison:_poison,blindsight_and_blindsense:_blindsight_and_blindsense,channel_resistance:_channel_resistance,charm_and_compulsion:_charm_and_compulsion,damage_reduction:_damage_reduction,darkvision:_darkvision,death_attacks:_death_attacks,energy_drain_and_negative_levels:_energy_drain_and_negative_levels,energy_immunity_and_vulnerability:_energy_immunity_and_vulnerability,fear:_fear,invisibility:_invisibility,low_light_vision:_low_light_vision,paralysis:_paralysis,scent:_scent,spell_resistance_2:_spell_resistance_2,when_spell_resistance_applies:_when_spell_resistance_applies,successful_spell_resistance:_successful_spell_resistance}