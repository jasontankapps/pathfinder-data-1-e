import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
const _frozen_shadow = {title: "Frozen Shadow", jsx: <><h2 id="arc-ninja-frozen_shadow-frozen-shadow">Frozen Shadow</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 38</Link><br/>Frozen shadows belong to a rare ninja clan operating in Avistan, having migrated to the Lands of the Linnorm Kings decades ago. Most members are Tian, Ulfen, and Varki humans, and they work as thieves, power brokers, and spies loosely guided by secretive masters with unknown agendas.</p>
<Ability icon={["skills"]} id="arc-ninja-frozen_shadow-undefined">
<Pair id="arc-ninja-frozen_shadow-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/survival">Survival</Link> (WIS)</Pair>
<Pair title="Removed Skills">Diplomacy</Pair></Ability>
<Ability id="arc-ninja-frozen_shadow-hardy-killer-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-ninja-frozen_shadow-hardy-killer-ex">Hardy Killer (Ex)</Pair>
<Pair hl title="Replaces">Ability to treat Acrobatics jump checks as if he had a running start, ability to reduce Acrobatics jump checks by half</Pair>
<Pair hl title="Alters">Ki pool</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A frozen shadow has become incredibly inured to his surrounding climate. At the beginning of any day, the frozen shadow can spend 1 point from his ki pool to benefit from the effects of an <Link to="/spell/endure_elements">endure elements</Link> spell.</Pair>
</Ability>
<Ability id="arc-ninja-frozen_shadow-track-victim-ex" icon={["upgrade","stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ninja-frozen_shadow-track-victim-ex">Track Victim (Ex)</Pair>
<Pair hl title="Replaces">Uncanny dodge</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A frozen shadow adds half his ninja level on Survival checks to follow tracks and on Perception checks to see through disguises. Additionally, if the frozen shadow sees a creature that has changed its appearance using the Disguise skill, he can always attempt a Perception check to see through the disguise, even if the disguised creature did nothing to draw attention to itself.</Pair>
<Pair title="Special">The frozen shadow also gains a +2 bonus to Will saving throws when attempting to disbelieve an illusion affecting a creature or creatures.</Pair>
</Ability>
<Ability id="arc-ninja-frozen_shadow-swift-tracker-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-ninja-frozen_shadow-swift-tracker-ex">Swift Tracker (Ex)</Pair>
<Pair hl title="Replaces">Improved uncanny dodge</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A frozen shadow can move at his normal speed while using Survival to follow tracks without taking the normal -5 penalty. He takes only a -10 penalty (instead of the normal -20) when moving up to twice his normal speed while tracking.</Pair>
<Pair title="Special">Additionally, his bonus on Will saving throws to disbelieve illusions affecting a creature or creatures increases to +4.</Pair>
</Ability>
<p><strong className="hl">Ninja Tricks:</strong> The following ninja tricks complement the frozen shadow archetype: <Link to="/ninjatrick/bleeding_attack">bleeding attack</Link>, <Link to="/ninjatrick/darkvision">darkvision</Link>, <Link to="/ninjatrick/deadly_range">deadly range</Link>, <Link to="/ninjatrick/fast_stealth">fast stealth</Link>, <Link to="/ninjatrick/hidden_weapons">hidden weapons</Link>, <Link to="/ninjatrick/sudden_disguise">sudden disguise</Link>, <Link to="/ninjatrick/vanishing_trick">vanishing trick</Link>, and <Link to="/ninjatrick/wall_climber">wall climber</Link>.</p>
<p><strong className="hl">Advanced Ninja Tricks:</strong> The following advanced ninja tricks complement the frozen shadow archetype: <Link to="/ninjatrick/assassinate">assassinate</Link>, <Link to="/ninjatrick/ghost_step">ghost step</Link>, <Link to="/ninjatrick/invisible_blade">invisible blade</Link>, <Link to="/ninjatrick/master_disguise">master disguise</Link>, and <Link to="/ninjatrick/see_the_unseen">see the unseen</Link>.</p>
</>};
const _gunpowder_bombardier = {title: "Gunpowder Bombardier", jsx: <><h2 id="arc-ninja-gunpowder_bombardier-gunpowder-bombardier">Gunpowder Bombardier</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 30</Link><br/><Link to="/race/ratfolk">Ratfolk</Link> assassins and other ninjas with an affinity for gunpowder demonstrate masterful control of bombs, using the explosives to inflict major damage or impair their foes.</p>
<Ability id="arc-ninja-gunpowder_bombardier-gunpowder-bomb-ex" icon={["bowman"]}>
<Pair single id="arc-ninja-gunpowder_bombardier-gunpowder-bomb-ex">Gunpowder Bomb (Ex)</Pair>
<Pair hl title="Replaces">Ninja trick gained at 2nd level</Pair>
<Pair hl title="Alters">Ki pool</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A gunpowder bombardier can expend 1 ki point to throw a gunpowder bomb at a <Link to="/rule/grid_intersection">grid intersection</Link> as a ranged attack against AC 5 with a range of 20 feet. The gunpowder bomb deals 1d6 points of bludgeoning damage to all creatures in a 10-foot-radius <Link to="/misc/burst">burst</Link>, which can be increased to 20 feet by spending 1 additional ki point. A creature in the bomb's radius can attempt a Reflex save (DC = 10 + half the gunpowder bombardier's ninja level + her Dexterity modifier) for half damage.</Pair>
<Pair title="At 5th Level">The damage becomes 2d6.</Pair>
<Pair title="At 7th Level">The damage increases to 3d6.</Pair>
<Pair title="At 9th Level">The damage becomes 4d6.</Pair>
<Pair title="At 11th Level">The damage increases to 5d6.</Pair>
<Pair title="At 13th Level">The damage becomes 6d6.</Pair>
<Pair title="At 15th Level">The damage increases to 7d6.</Pair>
<Pair title="At 17th Level">The damage becomes 8d6.</Pair>
<Pair title="At 19th Level">The damage increases to 9d6.</Pair>
</Ability>
<Ability id="arc-ninja-gunpowder_bombardier-explosive-impairment-su" icon={["armor-downgrade"]}>
<Pair single id="arc-ninja-gunpowder_bombardier-explosive-impairment-su">Explosive Impairment (Su)</Pair>
<Pair hl title="Replaces">Uncanny dodge</Pair>
<Pair title="At 4th Level">A gunpowder bombardier can imbue her <em>gunpowder bombs</em> with impairing effects. By spending 1 additional ki point when she throws a <em>gunpowder bomb,</em> the gunpowder bombardier can cause her bomb to inflict one of the following conditions, in addition to dealing its normal damage, for a number of rounds equal to <Link to="/misc/half">half</Link> her ninja level: <Link to="/misc/dazzled">dazzled</Link>, <Link to="/misc/deafened">deafened</Link>, <Link to="/rule/entangled">entangled</Link>, or <Link to="/misc/shaken">shaken</Link>.</Pair>
<Pair title="At 8th Level">She adds <Link to="/misc/nauseated">nauseated</Link> and <Link to="/misc/stunned">stunned</Link> to the list of conditions her bombs can inflict.</Pair>
<Pair title="Special">A creature that succeeds at the Reflex save to halve the damage also negates the condition inflicted by the <em>gunpowder bomb.</em></Pair>
</Ability>
<Ability id="arc-ninja-gunpowder_bombardier-delayed-explosive-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ninja-gunpowder_bombardier-delayed-explosive-ex">Delayed Explosive (Ex)</Pair>
<Pair hl title="Replaces">Improved uncanny dodge</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Standard Action">A gunpowder bombardier can plant a <em>gunpowder bomb</em> and delay its explosion. She can place a <em>gunpowder bomb</em> - adding effects as she would if she were throwing the <em>gunpowder bomb,</em> and spending the requisite ki points - and specify a number of rounds after which the bomb will detonate, up to a maximum number of rounds equal to the gunpowder bombardier's ninja level.</Pair>
<Pair title="Special">If the bomb is touched or moved by another creature, it detonates immediately. The gunpowder bombardier can have only one delayed explosive active at a time; planting another <em>gunpowder bomb</em> renders the previous bomb inert.</Pair>
</Ability>
</>};
const _hunting_serpent = {title: "Hunting Serpent", jsx: <><h2 id="arc-ninja-hunting_serpent-hunting-serpent">Hunting Serpent</h2>
<p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex pg. 104</Link><br/>The order dispatches specially trained killers to hunt relentlessly and fight from the shadows.</p>
<Ability icon={["skills"]} id="arc-ninja-hunting_serpent-undefined">
<Pair id="arc-ninja-hunting_serpent-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/survival">Survival</Link> (WIS)</Pair>
<Pair title="Removed Skills">Knowledge (nobility)</Pair></Ability>
<Ability id="arc-ninja-hunting_serpent-relentless-pursuit-ex" icon={["upgrade"]}>
<Pair single id="arc-ninja-hunting_serpent-relentless-pursuit-ex">Relentless Pursuit (Ex)</Pair>
<Pair hl title="Replaces">No trace</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A hunting serpent gains a bonus on Diplomacy checks to gather information and on Survival checks to identify or follow tracks. The bonus is equal to <Link to="/misc/one_third">one-third</Link> of her ninja level.</Pair>
</Ability>
<Ability id="arc-ninja-hunting_serpent-death-mark-ex" icon={["upgrade"]}>
<Pair single id="arc-ninja-hunting_serpent-death-mark-ex">Death Mark (Ex)</Pair>
<Pair hl title="Replaces">Uncanny dodge, improved uncanny dodge, ninja tricks gained at 12th and 16th levels</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Swift Action">Once per day, a hunting serpent can mark an opponent damaged by her sneak attack for death. A hunting serpent gains a +1 competence bonus on attack and damage rolls against an opponent affected by <em>death mark</em> as well as on Survival checks to track the marked creature.</Pair>
<Pair title="At 8th Level">The ninja may use <em>death mark</em> 2 times a day, and the bonuses increase to +2.</Pair>
<Pair title="At 12th Level">The ninja may use <em>death mark</em> 3 times a day, and the bonuses increase to +3.</Pair>
<Pair title="At 16th Level">The ninja may use <em>death mark</em> 4 times a day, and the bonuses increase to +4.</Pair>
<Pair title="Special">The effects of <em>death mark</em> last for 24 hours, until the marked creature is slain, or until the hunting serpent chooses to mark another creature, whichever comes first.</Pair>
</Ability>
<Ability id="arc-ninja-hunting_serpent-certain-demise-ex" icon={["upgrade"]}>
<Pair single id="arc-ninja-hunting_serpent-certain-demise-ex">Certain Demise (Ex)</Pair>
<Pair hl title="Replaces">Ninja trick gained at 10th level</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">The hunting serpent's sneak attack damage applies on the first attack she makes each round against the target of her <em>death mark</em> ability, even if it normally wouldn't.</Pair>
<Pair title="Special">Other effects that trigger on a sneak attack do not apply with this ability.</Pair>
</Ability>
</>};
const _mask_of_the_living_god = {title: "Mask of the Living God", jsx: <><h2 id="arc-ninja-mask_of_the_living_god-mask-of-the-living-god">Mask of the Living God</h2>
<p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 20</Link><br/>When the Living God needs to silence the voices of those heretics who question too loudly, these enforcers are the tools he employs.</p>
<Ability id="arc-ninja-mask_of_the_living_god-weapon-and-armor-proficiencies" icon={["stairs-goal"]}>
<Pair single id="arc-ninja-mask_of_the_living_god-weapon-and-armor-proficiencies">Weapon and Armor Proficiencies</Pair>
<Pair hl title="Alters">Weapon and armor proficiency</Pair>
<Pair title="Info">In addition to having the ninja's normal weapon and armor proficiencies, the mask of the Living God is proficient with <Link to="/eq-weapon/bolas">bolas</Link>, <Link to="/eq-weapon/sap">saps</Link>, and <Link to="/eq-weapon/whip">whips</Link>.</Pair>
</Ability>
<Ability id="arc-ninja-mask_of_the_living_god-mask-ex" icon={["hazard-sign"]}>
<Pair single id="arc-ninja-mask_of_the_living_god-mask-ex">Mask (Ex)</Pair>
<Pair title="Ability">A mask of the Living God has a mask that is a symbol of his faith and the myriad powers invested in him. Abilities granted by this class other than <em>undercover faith</em> function only while the mask of the Living God is wearing his mask. Putting on or removing this mask is a <strong className="hl">move action</strong>.</Pair>
</Ability>
<Ability id="arc-ninja-mask_of_the_living_god-undercover-faith-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ninja-mask_of_the_living_god-undercover-faith-ex">Undercover Faith (Ex)</Pair>
<Pair hl title="Replaces">Poison use</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">When not wearing his mask, a mask of the Living God can take on an utterly mundane identity as if he were a <Link to="/class/vigilante">vigilante</Link> with the <Link to="/soctalent/many_guises">many guises</Link> social talent. While in a mundane identity, the mask of the Living God cannot wear his mask; putting it on while in a mundane identity immediately ends the mundane identity and its effects.</Pair>
<Pair title="Special">Changing into this mundane identity takes 1 minute and must be done out of sight to preserve the mask of the Living God's secret. The time it takes the mask of the Living God to change into a mundane identity cannot be decreased.</Pair>
</Ability>
<Ability id="arc-ninja-mask_of_the_living_god-expurgate-sp" icon={["armor-downgrade"]}>
<Pair single id="arc-ninja-mask_of_the_living_god-expurgate-sp" flavor="The role of a mask of the Living God is to silence heretics and blasphemers, and he is an expert at rendering even the most glib of his foes into babbling fools.">Expurgate (Sp)</Pair>
<Pair hl title="Replaces">Spend ki to make an additional attack</Pair>
<Pair hl title="Alters">Ki pool</Pair>
<Pair title="At 2nd Level">When he deals damage to a target, he can expend 1 point from his ki pool to affect that target as if he had cast <Link to="/spell/fumbletongue">fumbletongue</Link>, using his ninja level as his caster level. The target can attempt a Will saving throw (DC = 10 + half the ninja's level + his Charisma modifier) to negate this effect.</Pair>
<Pair title="At 6th Level">The target of this ability is instead struck entirely mute for 1d4 rounds unless it succeeds at a Will saving throw.</Pair>
</Ability>
<Ability id="arc-ninja-mask_of_the_living_god-stern-gaze-ex" icon={["upgrade"]}>
<Pair single id="arc-ninja-mask_of_the_living_god-stern-gaze-ex" flavor="A mask of the Living God is trained to sense deception and strike fear into the hearts of his foes.">Stern Gaze (Ex)</Pair>
<Pair hl title="Replaces">No trace</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">He gains a morale bonus equal to <Link to="/misc/half">half</Link> his ninja level on Intimidate and Sense Motive checks.</Pair>
</Ability>
<p><strong className="hl">Ninja Tricks:</strong> The following ninja tricks complement the mask of the Living God archetype: <Link to="/ninjatrick/forgotten_trick">forgotten trick</Link>, <Link to="/ninjatrick/kamikaze">kamikaze</Link>, <Link to="/ninjatrick/unarmed_combat_training">unarmed combat training</Link>, <Link to="/ninjatrick/vanishing_trick">vanishing trick</Link>, <Link to="/ninjatrick/weapon_training">weapon training</Link>.</p>
<p><strong className="hl">Master Tricks:</strong> The following master tricks complement the mask of the Living God: <Link to="/ninjatrick/ghost_step">ghost step</Link>, <Link to="/ninjatrick/see_the_unseen">see the unseen</Link>, and <Link to="/ninjatrick/shadow_split">shadow split</Link>.</p>
</>};
const _petal_ninja = {title: "Petal Ninja", jsx: <><h2 id="arc-ninja-petal_ninja-petal-ninja">Petal Ninja</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 13</Link><br/>Petal ninjas are a secretive clan of <Link to="/race/ghoran">ghoran</Link> infiltrators, in touch with their plant-like nature to the point where they can change their forms, allowing them access into places that were previously impossible to reach.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-ninja-petal_ninja--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/ghoran">Ghoran</Link></td></tr></tbody></table></ScrollContainer></div><Ability icon={["skills"]} id="arc-ninja-petal_ninja-undefined">
<Pair id="arc-ninja-petal_ninja-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/heal">Heal</Link> (WIS)</Pair>
<Pair title="Removed Skills">Appraise</Pair></Ability>
<Ability id="arc-ninja-petal_ninja-blossom-shower-ex" icon={["stairs-goal","armor-upgrade","armor-downgrade"]}>
<Pair single id="arc-ninja-petal_ninja-blossom-shower-ex">Blossom Shower (Ex)</Pair>
<Pair hl title="Replaces">Ninja trick gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Standard Action">A petal ninja can spend 1 ki point to create a <Link to="/misc/burst">burst</Link> of flower petals in a 15-foot radius centered on a point within 20 feet. A blossom shower lasts for a number of rounds equal to half the petal ninja's level (minimum 1 round).</Pair>
<Pair title="Ability"><p>When activating a blossom shower, the petal ninja forgoes a number of sneak attack dice to determine the shower's effects, as noted below. These sneak attack dice are unavailable for the duration of the blossom shower and are regained when the effect ends. If an effect requires a saving throw, the DC is equal to 10 + twice the number of sneak attack dice expended + the petal ninja's Charisma modifier. The petal ninja can choose to create a lesser effect even if she expends more dice than required. For example, she can expend 4 sneak attack dice, but impart the effect of 3 sneak attack dice. The shower does not affect the petal ninja herself, apart from the concealment granted by using 1 sneak attack die.</p>
<ScrollContainer id="arc-ninja-petal_ninja--table-1"><table>
<thead>
<tr>
<th>Sneak Attack Dice</th>
<th>Effect</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>Creatures within the radius gain <Link to="/rule/concealment">concealment</Link> (20% miss chance).</td>
</tr>
<tr>
<td>2</td>
<td>As 1 sneak attack die, except each creature in the radius must succeed at a Will save or be <Link to="/misc/dazzled">dazzled</Link> for 1d6 rounds.</td>
</tr>
<tr>
<td>3</td>
<td>As 2 sneak attack dice, except creatures are <Link to="/misc/sickened">sickened</Link> on a failed save.</td>
</tr>
<tr>
<td>4</td>
<td>As 2 sneak attack dice, except creatures are <Link to="/misc/fascinated">fascinated</Link> on a failed save.</td>
</tr>
<tr>
<td>5</td>
<td>As 2 sneak attack dice, except creatures are <Link to="/misc/staggered">staggered</Link> on a failed save.</td>
</tr>
<tr>
<td>6</td>
<td>As 2 sneak attack dice, except creatures are <Link to="/misc/nauseated">nauseated</Link> on a failed save.</td>
</tr>
</tbody></table></ScrollContainer>
</Pair>
</Ability>
<Ability id="arc-ninja-petal_ninja-burst-of-blossoms-su" icon={["magic-swirl","upgrade"]}>
<Pair single id="arc-ninja-petal_ninja-burst-of-blossoms-su" flavor="A petal ninja gains the ability to transform into a cloud of blossoms.">Burst of Blossoms (Su)</Pair>
<Pair hl title="Replaces">No trace, uncanny dodge, improved uncanny dodge</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Standard Action">By spending 1 point from her ki pool, a petal ninja can take the form of a cloud of blossoms, becoming insubstantial for 1 round, as <Link to="/spell/gaseous_form">gaseous form</Link>. While insubstantial she also gains a +4 circumstance bonus on Stealth checks.</Pair>
<Pair title="At 8th Level">The duration increases to a number of rounds equal to 1 plus the petal ninja's Charisma modifier.</Pair>
</Ability>
<Ability id="arc-ninja-petal_ninja-sundial-su" icon={["magic-swirl"]}>
<Pair single id="arc-ninja-petal_ninja-sundial-su">Sundial (Su)</Pair>
<Pair hl title="Replaces">Light steps</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Move-Equivalent Action">The petal ninja can change the lighting in a 30-foot-radius <Link to="/misc/emanation">emanation</Link> centered on herself. For every ki point she spends, the <Link to="/rule/light_level">light levels</Link> change by one step (from darkness to dim light, normal light, and bright light, and vice versa). This change remains in effect for 1 minute.</Pair>
</Ability>
</>};
export default {frozen_shadow:_frozen_shadow,gunpowder_bombardier:_gunpowder_bombardier,hunting_serpent:_hunting_serpent,mask_of_the_living_god:_mask_of_the_living_god,petal_ninja:_petal_ninja}