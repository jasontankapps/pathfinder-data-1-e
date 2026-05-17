import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _abendego_diver = {title: "Abendego Diver", jsx: <><h2 id="arc-ranger-abendego_diver-abendego-diver">Abendego Diver</h2>
<p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 12</Link><br/>Named for the vicious and unending storm in the southern Arcadian Ocean, Abendego divers have pushed their bodies to their limits, holding their breath to expand their lung capacity and swimming until ocean travel is second nature to them.</p>
<Ability id="arc-ranger-abendego_diver-weapon-and-armor-proficiency" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-ranger-abendego_diver-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Alters">Weapon and armor proficiencies</Pair>
<Pair title="Info">An Abendego diver is not proficient with shields but is proficient with <Link to="/eq-weapon/harpoon">harpoons</Link> and <Link to="/eq-weapon/net">nets</Link>.</Pair>
</Ability>
<Ability id="arc-ranger-abendego_diver-oceans-blessing" icon={["spell-book"]}>
<Pair single id="arc-ranger-abendego_diver-oceans-blessing">Ocean's Blessing</Pair>
<Pair hl title="Replaces">Track</Pair>
<Pair title="Ability">An Abendego diver adds the following spells to his ranger spell list at the listed spell level. He still must select them as spells known, as normal.</Pair>
<Pair plain title="1st"><Link to="/spell/hydraulic_push">Hydraulic push</Link>, <Link to="/spell/wave_shield">wave shield</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/buoyancy">Buoyancy</Link>, <Link to="/spell/elemental_speech">elemental speech</Link> (water only), <Link to="/spell/river_whip">river whip</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/hydraulic_torrent">Hydraulic torrent</Link>, <Link to="/spell/water_breathing">water breathing</Link></Pair>
<Pair plain title="4th"><Link to="/spell/control_water">Control water</Link>, <Link to="/spell/ride_the_waves">ride the waves</Link></Pair>
</Ability>
<Ability id="arc-ranger-abendego_diver-deep-diver-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-abendego_diver-deep-diver-ex">Deep Diver (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">An Abendego diver can <Link to="/misc/hold_his_breath">hold his breath</Link> for twice as long as usual (4 rounds &times; his Constitution score instead of the normal &times;2).</Pair>
</Ability>
<Ability id="arc-ranger-abendego_diver-aquatic-terrain-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-abendego_diver-aquatic-terrain-ex">Aquatic Terrain (Ex)</Pair>
<Pair hl title="Replaces">Favored terrain</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">An Abendego diver gains a +2 bonus on initiative checks and Knowledge (geography), Perception, Stealth, and Survival skill checks while underwater.</Pair>
<Pair title="At 8th Level">These bonuses become +4.</Pair>
<Pair title="At 13th Level">These bonuses increase to +6.</Pair>
<Pair title="At 18th Level">These bonuses become +8.</Pair>
</Ability>
<Ability id="arc-ranger-abendego_diver-aquatic-adaptation-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-abendego_diver-aquatic-adaptation-ex">Aquatic Adaptation (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">An Abendego diver gains a swim speed equal to his unmodified base speed. If he already has a swim speed, his swim speed increases by 10 feet.</Pair>
<Pair title="Special">Because he has a swim speed, he gains the standard +8 bonus on Swim checks to perform a special action or evade a hazard, the ability to take 10 on a Swim check even if distracted or threatened, and the ability to use the run action while swimming if he swims in a straight line.</Pair>
</Ability>
<Ability id="arc-ranger-abendego_diver-shark-sense-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-abendego_diver-shark-sense-ex">Shark Sense (Ex)</Pair>
<Pair hl title="Replaces">Swift tracker</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">An Abendego diver gains the <Link to="/umr/scent">scent</Link> ability while underwater.</Pair>
</Ability>
<Ability id="arc-ranger-abendego_diver-killer-of-the-deep-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-abendego_diver-killer-of-the-deep-ex" flavor="An Abendego diver is peerless at detecting prey underwater and delivering killing blows.">Killer of the Deep (Ex)</Pair>
<Pair hl title="Replaces">Master hunter</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">He can notice other creatures by scent in a 180-foot radius underwater and can detect blood in the water up to a mile away.</Pair>
<Pair title="Standard Action">He can make a single attack against a <em>favored enemy</em> at his full attack bonus while underwater. If the attack hits, the target takes damage normally and must succeed at a Fortitude save or die. The DC of this save is equal to 10 + half the ranger's level + the ranger's Wisdom modifier. An Abendego diver can instead deal an additional amount of nonlethal damage equal to the creature's current hit points. A successful save negates this damage. An Abendego diver can use this ability once per day against each of his <em>favored enemy</em> types but not against the same creature more than once in a 24-hour period.</Pair>
</Ability>
</>};
const _battle_scout = {title: "Battle Scout", jsx: <><h2 id="arc-ranger-battle_scout-battle-scout">Battle Scout</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 66</Link><br/>Armies need clean water, safe routes, and intelligence about their enemies. Though regular outdoorsmen might suffice in many cases, some large forces look to battle scouts to keep the body of their troops safe and prepared for the terrain and whatever dangers that terrain hides.</p>
<Ability id="arc-ranger-battle_scout-hunters-bond-ex" icon={["broken-shield"]}>
<Pair single id="arc-ranger-battle_scout-hunters-bond-ex">Hunter's Bond (Ex)</Pair>
<Pair hl title="Alters">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Info">When a battle scout gains the <em>hunter's bond</em> ability, he must choose to bond with his companions. Battle scouts do not have animal companions.</Pair>
</Ability>
<Ability id="arc-ranger-battle_scout-advantageous-terrain-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-battle_scout-advantageous-terrain-ex">Advantageous Terrain (Ex)</Pair>
<Pair hl title="Replaces">2nd favored enemy</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">When a battle scout is within one of his <em>favored terrains,</em> he can spend up to 3 consecutive rounds studying an area of terrain to gain the benefits below. Each round of studying terrain is a <strong className="hl">standard action</strong>. During the first round of studying terrain, the battle scout designates a 60-foot-radius-<Link to="/misc/burst">burst</Link> area from a single square within line of sight. Depending on how many rounds the battle scout spends studying the area, he or his allies gain the following benefits for 10 minutes per ranger level he possesses. (For example, if he spends 2 rounds, he or his allies gain the first two benefits.)</Pair>
</Ability>
<Ability id="arc-ranger-battle_scout-1st-round" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-ranger-battle_scout-1st-round">1st Round</Pair>
<Pair title="Passive Ability">Allies within line of sight and that can hear the battle scout gain a +2 bonus on initiative checks while within the <em>advantageous terrain</em> area.</Pair>
</Ability>
<Ability id="arc-ranger-battle_scout-2nd-round" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-ranger-battle_scout-2nd-round">2nd Round</Pair>
<Pair title="Passive Ability">Allies within line of sight and that can hear the battle scout gain a +2 on Perception, Stealth, and Survival checks while within the <em>advantageous terrain</em> area.</Pair>
</Ability>
<Ability id="arc-ranger-battle_scout-3rd-round" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-ranger-battle_scout-3rd-round">3rd Round</Pair>
<Pair title="Ability">The battle scout's movement is not hampered by <Link to="/rule/difficult_terrain">difficult terrain</Link> while within the <em>advantageous terrain</em> area. Furthermore, the battle scout can take 10 on Climb and Swim checks and checks to jump while within the area, even when in immediate danger or distracted.</Pair>
</Ability>
<Ability id="arc-ranger-battle_scout-infiltration-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-battle_scout-infiltration-ex">Infiltration (Ex)</Pair>
<Pair hl title="Replaces">3rd favored enemy</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">Once per day, a battle scout can choose a single terrain type that is not his <em>favored terrain.</em> For the next hour per ranger level, he treats that terrain as if it were one of his <em>favored terrains.</em></Pair>
</Ability>
<Ability id="arc-ranger-battle_scout-superior-tactics-ex" icon={["rolling-dices"]}>
<Pair single id="arc-ranger-battle_scout-superior-tactics-ex">Superior Tactics (Ex)</Pair>
<Pair hl title="Replaces">4th favored enemy</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">Once per day, after a battle scout and his allies roll initiative, the battle scout can arrange his and his allies' initiative rolls any way he wishes. If he has already taken 3 rounds to scout out the terrain with his <em>advantageous terrain</em> ability and both he and his allies are within the effect area, they gain a +2 bonus to initiative checks. Using this ability is not an action.</Pair>
</Ability>
<Ability id="arc-ranger-battle_scout-perfect-advantage-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-battle_scout-perfect-advantage-ex">Perfect Advantage (Ex)</Pair>
<Pair hl title="Replaces">Master hunter</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">When using his <em>advantageous terrain</em> ability, a battle scout needs only to study the terrain as a <strong className="hl">standard action</strong> to gain all of the benefits. Furthermore, the area of his <em>advantageous terrain</em> increases to a 1-mile-radius <Link to="/misc/spread">spread</Link> from the single square within line of sight.</Pair>
</Ability>
</>};
const _beast_master = {title: "Beast Master", jsx: <><h2 id="arc-ranger-beast_master-beast-master">Beast Master</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 124</Link><br/>Some rangers, particularly those in primitive lands or who were raised by animals, have unusually strong bonds with animals. Unique among rangers, they can bond with multiple animals of any kind, creating a menagerie of wild yet loyal creatures, like a strange family. A beast master has the following class features.</p>
<Ability icon={["skills"]} id="arc-ranger-beast_master-undefined">
<Pair id="arc-ranger-beast_master-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX), <Link to="/skill/escape_artist">Escape Artist</Link> (DEX)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering), Knowledge (geography), Profession, Spellcraft</Pair></Ability>
<Ability id="arc-ranger-beast_master-animal-companion-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-beast_master-animal-companion-ex">Animal Companion (Ex)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A beast master forms a close bond with an <Link to="/sidekick/animal_companion">animal companion</Link>.<sup><InnerLink showBacklink="backlink-arc-ranger-beast_master-fake-fn-1" id="arc-ranger-beast_master-fake-fn-1" data-hash-target to="arc-ranger-beast_master-fake-fn-1-target">1</InnerLink></sup> This ability functions like the druid <Link to="/ability/animal_companion">animal companion</Link> ability except that the ranger's effective druid level is equal to his ranger level - 3. The ranger gains a +2 bonus on <em>wild empathy</em> and Handle Animal checks made regarding his animal companion. Unlike a normal ranger, a beast master's choice of animal companion is not limited to a subset of all possibile animal companion choices - he may choose freely among all animal companion choices, just as a druid can.</Pair>
<Pair title="Info">The beast master may have more than one animal companion, but he must divide up his effective druid level between his companions to determine the abilities of each companion. For example, a beast master with an effective druid level of 4 can have one 4th-level companion, two 2nd-level companions, or one 1st-level and one 3rd-level companion.</Pair>
<Pair title="Ability">Each time a beast master's effective druid level increases, he must decide how to allocate the increase among his animal companions (including the option of adding a new 1st-level companion). Once an effective druid level is allocated to a particular companion, it cannot be redistributed while that companion is in the ranger's service (he must release a companion or wait until a companion dies to allocate its levels to another companion).</Pair>
<Pair title="Special">The <em>share spells</em> animal companion ability does not give the ranger the ability to cast a single spell so that it affects all of his animal companions.</Pair>
</Ability>
<Ability id="arc-ranger-beast_master-improved-empathic-link-su" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-beast_master-improved-empathic-link-su">Improved Empathic Link (Su)</Pair>
<Pair hl title="Replaces">6th-level combat style feat</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">The beast master gains<sup><InnerLink showBacklink="backlink-arc-ranger-beast_master-fake-fn-1.2" id="arc-ranger-beast_master-fake-fn-1.2" data-hash-target to="arc-ranger-beast_master-fake-fn-1-target">1</InnerLink></sup> an empathic link with all of his animal companions. This functions like an empathic link with a <Link to="/sidekick/familiar">familiar</Link>, except the ranger can also see through a companion's eyes as a <strong className="hl">swift action</strong>, maintaining this connection as long as he likes (as long as the companion is within 1 mile) and ending it as a <strong className="hl">free action</strong>.</Pair>
<Pair title="Special">The ranger can only see through the eyes of one companion at a time, and is <Link to="/misc/blinded">blinded</Link> while maintaining this connection.</Pair>
</Ability>
<Ability id="arc-ranger-beast_master-strong-bond-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-beast_master-strong-bond-ex">Strong Bond (Ex)</Pair>
<Pair hl title="Replaces">Camouflage</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">The ranger strengthens his bond with his animal companions. The ranger's effective druid level for his animal companions is now equal to his ranger level; he may immediately allocate these additional levels to his companions as he sees fit.</Pair>
</Ability>
<section data-footnotes><h3 id="arc-ranger-beast_master-label">Footnotes</h3><ol>
<li id="arc-ranger-beast_master-fake-fn-1-target"><p>The text does not specify when these abilities are granted. The listed levels are an educated guess, equal to the same level of the features they are replacing. <InnerLink aria-label="Back to reference 1" id="backlink-arc-ranger-beast_master-fake-fn-1" data-hash-target to="arc-ranger-beast_master-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-arc-ranger-beast_master-fake-fn-1.2" data-hash-target to="arc-ranger-beast_master-fake-fn-1.2">↩<sup>2</sup></InnerLink></p></li>
</ol></section></>};
const _blightwarden = {title: "Blightwarden", jsx: <><h2 id="arc-ranger-blightwarden-blightwarden">Blightwarden</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 17</Link><br/>Some rangers feel so closely connected to their homelands that they stand as guardians against pervasive corruptions that pervert those lands beyond the point of recognition.</p>
<Ability id="arc-ranger-blightwarden-hunt-the-blighted-ex" icon={["broken-shield"]}>
<Pair single id="arc-ranger-blightwarden-hunt-the-blighted-ex">Hunt the Blighted (Ex)</Pair>
<Pair hl title="Alters">Favored enemy</Pair>
<Pair title="Info">A blightwarden's first <em>favored enemy</em> is always a special type of creature: <em>blighted.</em> His bonuses from his first <em>favored enemy</em> apply to creatures with one or more of the following templates: <Link to="/template/blighted_fey">blighted fey</Link>, <Link to="/template/fungal_creature">fungal creature</Link>, <Link to="/template/fungoid">fungoid</Link>, <Link to="/template/mana_wastes_mutant">Mana Wastes mutant</Link>, <Link to="/template/mutant">mutant</Link>, <Link to="/template/mutant_goblin">mutant goblin</Link>, and <Link to="/template/plagued_beast">plagued beast</Link>. Additionally, the bonuses apply against creatures with the <Link to="/subtype/blight">blight</Link> subtype.</Pair>
<Pair title="Special">Each time the blightwarden gains a new <em>favored enemy,</em> his additional +2 bonus always applies to this first <em>favored enemy.</em></Pair>
</Ability>
<Ability id="arc-ranger-blightwarden-emulate-taint-ex-su-or-sp" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-blightwarden-emulate-taint-ex-su-or-sp">Emulate Taint (Ex, Su, or Sp)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Standard Action"><p>Once per day, a blightwarden can examine visible evidence of a creature that has been affected by a natural or supernatural blight. This might include visible tracks left by a creature with the <em>fungal creature</em> template, or a dead creature with the <em>blighted fey</em> template, or any similar evidence left by any creature as described in the <em>hunt the blighted</em> ability.</p>
<p>When the blightwarden does this, for the next 24 hours, he can use any one extraordinary, supernatural, or spell-like ability granted by the template (or the <em>blight</em> subtype) for a number of minutes equal to his ranger level. This duration need not be used all at once, but they must be spent in 1-minute increments. Saving throw DCs for this ability are calculated as if the blightwarden had the relevant template (for example, the DC of an ability from the <em>blighted fey</em> template would be equal to 10 + half the blightwarden's Hit Dice + his Constitution modifier). He cannot use abilities that would create a permanent effect beyond this ability's duration, and can never use more than one ability from a template or subtype in this way during a single 24-hour period.</p>
<p>For example, the blightwarden cannot use a blighted ooze's <em>cursed domain</em> ability to create a <em>domain of evil.</em> However, the blightwarden could gain a <em>blighted fey's thorn throw</em> ability for a number of minutes equal to his ranger level (in this case, the blightwarden would gain a thorn attack for that duration).</p>
</Pair>
</Ability>
<Ability id="arc-ranger-blightwarden-blightwalker-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-ranger-blightwarden-blightwalker-ex">Blightwalker (Ex)</Pair>
<Pair hl title="Replaces">1st favored terrain</Pair>
<Pair hl title="Alters">Favored terrain</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A blightwarden gains a +2 bonus on initiative checks and Knowledge (geography), Perception, Stealth, and Survival checks when in areas afflicted by a natural or supernatural blight. In addition, the blightwarden adds this bonus to ability checks, saving throws, and skill checks to avoid natural and supernatural hazards in blighted areas. A blightwarden traveling through blighted areas leaves no trail and cannot be tracked (though he can leave a trail if he chooses).</Pair>
<Pair title="Choice">The blightwarden can choose to improve this bonus in place of improving a <em>favored terrain</em> bonus.</Pair>
<Pair title="Special">Blighted areas include <Link to="/rule/cursed_land">cursed lands</Link>, <Link to="/rule/domains_of_evil">domains of evil</Link>, regions negatively affected by a spell or ability that affects at least a 300-square-foot area, or regions where a specific <Link to="/rule/afflictions">affliction</Link> is prevalent.</Pair>
</Ability>
<Ability id="arc-ranger-blightwarden-resist-corruption-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-blightwarden-resist-corruption-ex">Resist Corruption (Ex)</Pair>
<Pair hl title="Replaces">Endurance</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A blightwarden gains a +2 bonus on saving throws against curses, diseases, mind-affecting effects, poisons, and transmutation effects.</Pair>
</Ability>
</>};
const _bow_nomad = {title: "Bow Nomad", jsx: <><h2 id="arc-ranger-bow_nomad-bow-nomad">Bow Nomad</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_stars">People of the Stars pg. 8</Link><br/>Thanks to their four arms, kasathas can master a combat form native to their home world and rarely witnessed on Golarion - wielding two bows at once. This archetype is available to kasathas (and to other races with four or more arms at the GM's discretion).</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-ranger-bow_nomad--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/kasatha">Kasatha</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-ranger-bow_nomad-twin-bows-ex" icon={["bowman"]}>
<Pair single id="arc-ranger-bow_nomad-twin-bows-ex">Twin Bows (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A bow nomad can simultaneously wield a combination of two of any of the following ranged weapons: <Link to="/eq-weapon/shortbow">shortbow</Link>, <Link to="/eq-weapon/longbow">longbow</Link>, and their <Link to="/eq-weapon/composite_bow">composite versions</Link>.</Pair>
<Pair title="Special">When a bow nomad makes a full attack with two bows, two-weapon penalties apply and can be offset with Two-Weapon Fighting feats. Since bows aren't light weapons, a bow nomad with <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link> takes a -4 penalty on attacks with each of her bows. Extra attacks from other sources, such as those granted by <Link to="/feat/manyshot">Manyshot</Link> or <Link to="/feat/rapid_shot">Rapid Shot</Link>, can be applied to only one of the wielded bows per round.</Pair>
</Ability>
<Ability id="arc-ranger-bow_nomad-combat-style-ex" icon={["broken-shield"]}>
<Pair single id="arc-ranger-bow_nomad-combat-style-ex">Combat Style (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Choice">A bow nomad must select archery as her <Link to="/ability/combat_styles">combat style</Link>.</Pair>
</Ability>
<Ability id="arc-ranger-bow_nomad-agile-maneuvers" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-bow_nomad-agile-maneuvers">Agile Maneuvers</Pair>
<Pair hl title="Replaces">Endurance</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A bow nomad gains <Link to="/feat/agile_maneuvers">Agile Maneuvers</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-ranger-bow_nomad-trick-shot-ex" extraClasses="hasSubs" icon={["bowman"]}>
<Pair single id="arc-ranger-bow_nomad-trick-shot-ex">Trick Shot (Ex)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A bow nomad can make a number of <em>trick shots</em> per day equal to 1/2 her ranger level + her Dexterity modifier. Unless otherwise noted, making a <em>trick shot</em> is a <strong className="hl">standard action</strong> that provokes attacks of opportunity.</Pair>
</Ability>
<Ability id="arc-ranger-bow_nomad-deflecting-arrow" extraClasses="subAbility" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="arc-ranger-bow_nomad-deflecting-arrow">Deflecting Arrow</Pair>
<Pair title="Immediate Action">A bow nomad can deflect a single ranged attack. This ability functions as the <Link to="/feat/deflect_arrows">Deflect Arrows</Link> feat, except the bow nomad need not have a hand free and can deflect an attack targeting any creature within 30 feet.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
</Ability>
<Ability id="arc-ranger-bow_nomad-hampering-strike" extraClasses="subAbility" icon={["bowman"]}>
<Pair single id="arc-ranger-bow_nomad-hampering-strike">Hampering Strike</Pair>
<Pair title="Prerequisites">8th-level ranger</Pair>
<Pair title="Ability">A bow nomad can attempt to <Link to="/rule/disarm">disarm</Link> or <Link to="/rule/trip">trip</Link> an opponent within 30 feet in place of a ranged attack, with a -4 penalty on the combat maneuver check.</Pair>
</Ability>
<Ability id="arc-ranger-bow_nomad-pinning-strike" extraClasses="subAbility" icon={["bowman"]}>
<Pair single id="arc-ranger-bow_nomad-pinning-strike">Pinning Strike</Pair>
<Pair title="Prerequisites">13th-level ranger</Pair>
<Pair title="Ability">A bow nomad can attempt to pin a Large or smaller opponent's limb or clothing to the ground or a wall in place of an attack. If the bow nomad's attack roll exceeds her opponent's CMD, the opponent is pinned and cannot move from its current position. As a <strong className="hl">move action</strong>, the opponent can attempt a Strength check to free itself (DC = 10 + 1/2 the bow nomad's ranger level + her Strength modifier).</Pair>
<Pair title="Special">Only creatures adjacent to a solid, anchored, penetrable surface can be affected by this ability.</Pair>
</Ability>
<Ability id="arc-ranger-bow_nomad-exploit-the-gap" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-ranger-bow_nomad-exploit-the-gap" flavor="A bow nomad can exploit the natural weaknesses of her foes.">Exploit the Gap</Pair>
<Pair title="Prerequisites">18th-level ranger</Pair>
<Pair hl title="Replaces">Favored terrain</Pair>
<Pair title="Ability">When a bow nomad makes a full attack with her twin bows, each arrow that deals damage in that attack also reduces the target's natural armor bonus (if any) by 1 (to a minimum of 0) for 1 round.</Pair>
</Ability>
<Ability id="arc-ranger-bow_nomad-focused-fire-ex" icon={["broken-shield"]}>
<Pair single id="arc-ranger-bow_nomad-focused-fire-ex">Focused Fire (Ex)</Pair>
<Pair hl title="Replaces">Camouflage, hide in plain sight</Pair>
<Pair hl title="Alters">6th-level combat style feat</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Choice">The bow nomad must select the Manyshot feat as her 6th-level combat style feat.</Pair>
<Pair title="Ability">In addition to the normal benefit of Manyshot, the bow nomad can specify the bow in her off hands as the source of the second arrow (<Link to="/misc/precision_damage">precision damage</Link> and critical damage are still only added once). The bow nomad takes no two-weapon penalties when using this ability, but she cannot use it and Two-Weapon Fighting in the same round. The nomad can still choose to use Manyshot in the normal manner.</Pair>
<Pair title="Special">At 11th and 16th level, the bow nomad can apply this ability to each of her iterative attacks.</Pair>
</Ability>
</>};
const _cinderwalker = {title: "Cinderwalker", jsx: <><h2 id="arc-ranger-cinderwalker-cinderwalker">Cinderwalker</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_95_anvil_of_fire">Pathfinder #95: Anvil of Fire pg. 72</Link><br/>Cinderwalkers traverse burning wastelands and restless mountains, thriving in lands most creatures avoid.</p>
<Ability id="arc-ranger-cinderwalker-born-to-the-fire-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-ranger-cinderwalker-born-to-the-fire-ex">Born to the Fire (Ex)</Pair>
<Pair hl title="Replaces">1st favored terrain, wild empathy</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A cinderwalker gains a +2 bonus on initiative checks and Knowledge (geography), Perception, Stealth, and Survival checks when in volcanic or geothermally active areas. Such areas include calderas, hot springs, lava plains, and volcanically formed hills or mountains. In addition, the cinderwalker adds this bonus on any ability checks, saving throws, or skill checks to avoid geothermal or volcanic hazards. A cinderwalker traveling through volcanic or geothermally active areas leaves no trail and cannot be tracked (though he can leave a trail if he chooses).</Pair>
<Pair title="Special">The cinderwalker can choose to improve this bonus in place of improving a <em>favored terrain</em> bonus.</Pair>
</Ability>
<Ability id="arc-ranger-cinderwalker-inured-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-cinderwalker-inured-ex">Inured (Ex)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A cinderwalker gains the benefits of <Link to="/spell/endure_elements">endure elements</Link> against hot environments.</Pair>
<Pair title="At 8th Level">The cinderwalker gains fire resistance 10.</Pair>
<Pair title="At 12th Level">The fire resistance increases to 20.</Pair>
<Pair title="At 16th Level">The fire resistance increases to 30.</Pair>
<Pair title="At 20th Level">He gains immunity to fire.</Pair>
</Ability>
<Ability id="arc-ranger-cinderwalker-cinderwalk-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-ranger-cinderwalker-cinderwalk-ex">Cinderwalk (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A cinderwalker can move through any sort of solid volcanic terrain (such as ash, cooled lava, or volcanic rock) at his normal speed and without taking damage or suffering any other impairment.</Pair>
<Pair title="Passive Ability">The cinderwalker ignores fire damage from being near heat sources and touching heated surfaces (but not from immersion).</Pair>
</Ability>
</>};
const _code_runner = {title: "Code Runner", jsx: <><h2 id="arc-ranger-code_runner-code-runner">Code Runner</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 40</Link><br/>A code runner specializes in the subtle and speedy transfer of secret messages. He performs long runs between distant lands, sometimes spanning continents and often traversing difficult terrain. He trains his mind both to memorize long messages and to resist any attempts to steal his covert communiques.</p>
<Ability icon={["skills"]} id="arc-ranger-code_runner-undefined">
<Pair id="arc-ranger-code_runner-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/linguistics">Linguistics</Link> (INT)</Pair>
<Pair title="Removed Skills">Handle Animal, Heal</Pair></Ability>
<Ability id="arc-ranger-code_runner-mnemonic-genius-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-code_runner-mnemonic-genius-ex" flavor="A code runner learns to memorize and accurately recall information, even if he does not speak or understand the language in which the information was presented.">Mnemonic Genius (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Ability">The code runner can spend 1 hour and attempt a DC 15 Linguistics check to memorize a single passage of up to 150 words of information in a language he speaks. For every 5 by which he exceeds the DC, he can memorize 150 additional words. The DC is increased by 10 if the message is encoded or in a language he doesn't understand.</Pair>
<Pair title="Special">A code runner can memorize one such message at any given time. If he fails to memorize a message, he can retry as many times as he wants, as long as he spends 1 hour each time. Once a message has been memorized, he can recall it with perfect accuracy until he memorizes a different message.</Pair>
</Ability>
<Ability id="arc-ranger-code_runner-resist-interrogation-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-code_runner-resist-interrogation-ex">Resist Interrogation (Ex)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="At 4th Level">A code runner gains a bonus equal to half his ranger level on saving throws against divination effects.</Pair>
<Pair title="At 11th Level">If he succeeds at a saving throw against a divination effect that would grant its caster knowledge or information, the caster is not aware that the saving throw was successful, and the code runner can attempt a Bluff check opposed by the caster's Sense Motive check in order to send false information to the caster.</Pair>
</Ability>
</>};
const _corpse_hunter = {title: "Corpse Hunter", jsx: <><h2 id="arc-ranger-corpse_hunter-corpse-hunter">Corpse Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/undead_slayers_handbook">Undead Slayer's Handbook pg. 24</Link><br/>Many rangers count the undead among their <em>favored enemies,</em> but some make a full-time job out of hunting down and destroying these walking corpses. A corpse hunter has the following class features.</p>
<Ability icon={["skills"]} id="arc-ranger-corpse_hunter-undefined">
<Pair id="arc-ranger-corpse_hunter-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_religion">Knowledge (religion)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (nature)</Pair></Ability>
<Ability id="arc-ranger-corpse_hunter-spells" icon={["spell-book"]}>
<Pair single id="arc-ranger-corpse_hunter-spells">Spells</Pair>
<Pair title="Info">In addition to the default spells on the ranger spell list, a corpse hunter adds the following to his list of spells at the indicated spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/bless_water">Bless water</Link>, <Link to="/spell/detect_undead">detect undead</Link>, <Link to="/spell/hide_from_undead">hide from undead</Link>, <Link to="/spell/sanctify_corpse">sanctify corpse</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/halt_undead">Halt undead</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/speak_with_dead">Speak with dead</Link></Pair>
<Pair plain title="4th"><Link to="/spell/searing_light">Searing light</Link></Pair>
</Ability>
<Ability id="arc-ranger-corpse_hunter-undead-exterminator" icon={["broken-shield"]}>
<Pair single id="arc-ranger-corpse_hunter-undead-exterminator">Undead Exterminator</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Info">A corpse hunter must select undead as his first and only <em>favored enemy,</em> granting him a +2 bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks when dealing with creatures of the undead type and a +2 bonus on weapon attack and damage rolls against undead.</Pair>
<Pair title="At 5th Level">He does not gain an additional <em>favored enemy,</em> but his bonuses against undead become +4.</Pair>
<Pair title="At 10th Level">He does not gain an additional <em>favored enemy,</em> but his bonuses against undead increase to +6.</Pair>
<Pair title="At 15th Level">He does not gain an additional <em>favored enemy,</em> but his bonuses against undead become +8.</Pair>
<Pair title="At 20th Level">He does not gain an additional <em>favored enemy,</em> but his bonuses against undead increase to +10.</Pair>
</Ability>
<Ability id="arc-ranger-corpse_hunter-disrupt-control-su" icon={["mailed-fist","smoking-finger"]}>
<Pair single id="arc-ranger-corpse_hunter-disrupt-control-su" flavor="A corpse hunter can infuse his attacks with divine power capable of harming an undead creature as well as its controller.">Disrupt Control (Su)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">1 time/day per five ranger levels<ByLevelPop levels={[[5,1],[10,2],[15,3],[20,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Standard Action">The corpse hunter can make a single melee attack against an undead creature, or a single ranged attack against an undead creature within 30 feet. If the attack is successful, he deals 1d4 points of <Link to="/rule/charisma_damage">Charisma damage</Link> to the target undead creature in addition to normal damage. If the target undead creature is being controlled by another creature within 120 feet, the controller takes 1d4 points of Charisma damage as well; unlike the initial target, the controller may attempt a Will save (DC = 10 + 1/2 the corpse hunter's class level + the corpse hunter's Wisdom modifier) to halve the damage she would take from this attack.</Pair>
<Pair title="At 10th Level">The amount of Charisma damage dealt increases to 1d6.</Pair>
<Pair title="At 15th Level">The amount of Charisma damage dealt increases to 1d8.</Pair>
<Pair title="At 20th Level">The amount of Charisma damage dealt increases to 2d4.</Pair>
</Ability>
<Ability id="arc-ranger-corpse_hunter-graveyard-stride-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-corpse_hunter-graveyard-stride-ex">Graveyard Stride (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">A corpse hunter may move easily through <Link to="/rule/difficult_terrain">difficult terrain</Link> in areas where corpses are interred, such as graveyards, catacombs, crypts, or necropolises. When in such an environment, the corpse hunter may move at his normal speed without taking damage or suffering any impairment, although any magical effects and enchantments that impair movement still affect him.</Pair>
</Ability>
<Ability id="arc-ranger-corpse_hunter-incorporeal-armament-su" icon={["upgrade"]}>
<Pair single id="arc-ranger-corpse_hunter-incorporeal-armament-su" flavor="A corpse hunter can channel his will into any weapon he wields, making it effective against incorporeal undead.">Incorporeal Armament (Su)</Pair>
<Pair hl title="Replaces">Swift tracker</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Swift Action">A corpse hunter may imbue a single wielded weapon with the <Link to="/magic-enh/ghost_touch">ghost touch</Link> special ability, causing it to deal damage normally against incorporeal creatures.</Pair>
<Pair title="Usage">2 rounds/day per ranger level; these rounds need not be consecutive</Pair>
<Pair title="Free Action">The corpse hunter can end this ability.</Pair>
</Ability>
</>};
const _dandy = {title: "Dandy", jsx: <><h2 id="arc-ranger-dandy-dandy">Dandy</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 41</Link><br/>The antithesis of the gruff and wild woodsmen, a dandy takes effort to master the subtle etiquette of noble courts, the whispers of dark rumors, and the customs of the cultured world. Nonetheless, he is still a ranger at heart, and he hunts for rumors and gossip throughout the grand ballrooms of the wealthy and powerful just as most rangers hunt for enemies in the wilderness.</p>
<Ability icon={["skills"]} id="arc-ranger-dandy-undefined">
<Pair id="arc-ranger-dandy-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT), <Link to="/skill/sense_motive">Sense Motive</Link> (WIS)</Pair>
<Pair title="Removed Skills">Handle Animal, Knowledge (dungeoneering), Knowledge (geography), Knowledge (nature), Survival</Pair></Ability>
<Ability id="arc-ranger-dandy-favored-nation-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-dandy-favored-nation-ex">Favored Nation (Ex)</Pair>
<Pair hl title="Replaces">Favored enemy</Pair>
<Pair title="Choice">Each time he would select a <em>favored enemy,</em> a dandy instead selects a country with whose courtly graces he is wholly versed and studied. He gains a +2 bonus on Bluff, Diplomacy, Knowledge, Perception, Sense Motive, and Survival checks against courtiers, officials, nobles, and gentry from that nation. Likewise, he gains a +2 bonus on weapon attack and damage rolls against them.</Pair>
<Pair title="Ability">A dandy can attempt the appropriate Knowledge checks untrained to identify such people from the selected country.</Pair>
<Pair title="Special">A dandy gains additional favored nations, and can increase the bonuses of one of his current favored nations, in the same way he would with a normal ranger's <em>favored enemy.</em></Pair>
</Ability>
<Ability id="arc-ranger-dandy-rumor-empathy-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-dandy-rumor-empathy-ex">Rumor Empathy (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Ability"><p>A dandy can alter the flow and spread of <Link to="/rule/rumors">rumors</Link> in his favor. This functions similarly to <em>wild empathy,</em> except that it takes 1 day (8 hours of work), instead of 1 minute, and it affects the general tenor of a rumor instead of a wild animal.</p>
<p>A successful <em>rumor empathy</em> check allows the dandy to increase or decrease the rumor's tone by one step. For example, he could make an indifferent rumor friendly and thus positive toward its target, or an unfriendly rumor hostile and thus even more negative toward its target than it was originally.</p>
<p>The difficulty of influencing a rumor depends on the size of the community in which it is spreading. The DC of the check is 15 in a village or smaller settlement. This DC increases by 5 and the number of days required to attempt the check increases by 2 for every <Link to="/rule/settlements_and_districts">settlement size category</Link> larger than a village - to a maximum of DC 40 and 11 days to affect a rumor spreading through an entire metropolis.</p>
<p>If the rumor is only spreading through a smaller segment of the population, such as the elven district in a larger metropolis, use the population of that smaller segment to determine the DC and number of days of work required to use <em>rumor empathy.</em> The DC also increases by 10 if the rumor is about the dandy himself, since the dandy is obviously a biased source with respects to rumors about his own person.</p>
</Pair>
</Ability>
<Ability id="arc-ranger-dandy-favored-terrain-ex" icon={["broken-shield"]}>
<Pair single id="arc-ranger-dandy-favored-terrain-ex">Favored Terrain (Ex)</Pair>
<Pair hl title="Alters">Favored terrain</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A dandy gains <em>favored terrain (urban),</em> and though the ability continues to increase at the same levels, he doesn't add additional terrains.</Pair>
<Pair title="At 8th Level">Whenever he is at a courtly function or party, his <em>favored terrain</em> bonuses increase by an additional 2.</Pair>
</Ability>
<Ability id="arc-ranger-dandy-hobnob-ex" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-ranger-dandy-hobnob-ex">Hobnob (Ex)</Pair>
<Pair hl title="Alters">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Info">A dandy must choose his allies as his <em>hunter's bond,</em> not an animal companion.</Pair>
<Pair title="Ability">In addition to the usual <em>hunter's bond</em> ability, the dandy can spend 10 minutes at a particular event or party hobnobbing and introducing his allies to the right people in order to provide them with half the skill bonuses of his favored nation (though not the bonuses on attack and damage rolls) for the duration of the event.</Pair>
</Ability>
<Ability id="arc-ranger-dandy-dandy-spells-su" icon={["magic-swirl"]}>
<Pair single id="arc-ranger-dandy-dandy-spells-su" flavor="The dandy gains a different sort of spellcasting than most rangers.">Dandy Spells (Su)</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Info">A dandy uses his Charisma instead of his Wisdom to determine spells per day, DCs, and other factors related to spellcasting. He casts spells spontaneously from the <Link to="/main/bard_spell">bard spell list</Link> (rather than the ranger spell list) with the same number of spells known and spells per day as a <Link to="/class/medium">medium</Link> of his ranger level.</Pair>
</Ability>
<Ability id="arc-ranger-dandy-party-crasher-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-dandy-party-crasher-ex">Party Crasher (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">The dandy is able to finagle his way into fancy parties, kings' balls, and other social events meant for the cream of society. To do so, he must attempt a DC 25 Diplomacy check, which takes 1d4 hours. If he succeeds, he finds himself an invitation, an invitee looking for a date, a staff member willing to look the other way, or some other way to enter the party. This does not allow him to break into restricted areas or to infiltrate strictly closed gatherings, such as secret meetings; it only allows him access to social events.</Pair>
</Ability>
</>};
const _darklands_sailor = {title: "Darklands Sailor", jsx: <><h2 id="arc-ranger-darklands_sailor-darklands-sailor">Darklands Sailor</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_darklands">Heroes of the Darklands pg. 27</Link><br/>Those plying the lightless waters of the Darklands learn to use sound to augment their compromised vision, providing insight into the hazards lurking below the surface. A Darklands sailor has the following class features.</p>
<Ability id="arc-ranger-darklands_sailor-skilled-pilot-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-darklands_sailor-skilled-pilot-ex">Skilled Pilot (Ex)</Pair>
<Pair hl title="Replaces">Track</Pair>
<Pair title="Ability">A Darklands sailor adds half his level (minimum 1) to Profession (sailor) and Survival checks to navigate or avoid natural hazards in subterranean waterways.</Pair>
</Ability>
<Ability id="arc-ranger-darklands_sailor-keen-ear-ex" icon={["armor-upgrade","stairs-goal","hazard-sign"]}>
<Pair single id="arc-ranger-darklands_sailor-keen-ear-ex" flavor="A Darklands sailor learns how to use sound to compensate for poor visibility when facing threats above and below the water.">Keen Ear (Ex)</Pair>
<Pair hl title="Replaces">Favored terrain</Pair>
<Pair title="At 3rd Level">He gains the <Link to="/ability/uncanny_dodge">uncanny dodge</Link> rogue ability when underground and either swimming or aboard a boat.</Pair>
<Pair title="At 8th Level">He gains <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link> under these conditions, treating his Darklands sailor level as his effective rogue level for the purpose of denying an enemy's sneak attacks.</Pair>
<Pair title="At 13th Level">He gains <Link to="/umr/blindsense">blindsense</Link> with a range of 30 feet against creatures touching water.</Pair>
<Pair title="At 18th Level">His blindsense range increases to 60 feet or equal to the range of his darkvision, whichever is greater.</Pair>
<Pair title="Special">If the Darklands sailor becomes <Link to="/misc/deafened">deafened</Link>, he loses all benefits of this ability until his hearing is restored.</Pair>
</Ability>
<Ability id="arc-ranger-darklands_sailor-quick-swim-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-darklands_sailor-quick-swim-ex">Quick Swim (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Move-Equivalent Action">A Darklands sailor can swim at his full speed without penalty.</Pair>
</Ability>
<Ability id="arc-ranger-darklands_sailor-subsonic-warning-ex" icon={["shield-reflect","upgrade"]}>
<Pair single id="arc-ranger-darklands_sailor-subsonic-warning-ex">Subsonic Warning (Ex)</Pair>
<Pair hl title="Replaces">Swift tracker</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">Wisdom modifier rounds/day; these rounds need not be consecutive</Pair>
<Pair title="Swift Action">A Darklands sailor can provide the benefits of his <em>keen ear</em> ability to the subjects of his <em>hunter's bond.</em></Pair>
<Pair title="Special">A deafened creature can't benefit from a Darklands sailor's subsonic warning.</Pair>
</Ability>
<Ability id="arc-ranger-darklands_sailor-hidden-depths-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-darklands_sailor-hidden-depths-ex">Hidden Depths (Ex)</Pair>
<Pair hl title="Replaces">Camouflage, hide in plain sight</Pair>
<Pair title="At 12th Level">A Darklands sailor can use the Stealth skill to hide while underground or underwater, even if he doesn't have cover or concealment.</Pair>
<Pair title="At 17th Level">He can use the Stealth skill even while being observed when underground or underwater.</Pair>
</Ability>
</>};
const _deep_walker = {title: "Deep Walker", jsx: <><h2 id="arc-ranger-deep_walker-deep-walker">Deep Walker</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 66</Link><br/>Some rangers devote their lives to the woods, becoming hunters, protectors, and wilderness guides among its diverse terrain types. The deep walker is instead a master of the strange terrain of the deep earth, exploring its caverns and caves, becoming a master of the dark corridors most surface dwellers fear to explore - and perhaps the reason they fear to explore them.</p>
<Ability id="arc-ranger-deep_walker-deep-knowledge-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-deep_walker-deep-knowledge-ex">Deep Knowledge (Ex)</Pair>
<Pair hl title="Replaces">Favored terrain</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A deep walker gains a +2 bonus on initiative checks and Knowledge (dungeoneering), Perception, Stealth, and Survival skill checks while underground (in caves and dungeons).</Pair>
<Pair title="At 8th Level">The bonus becomes +5.</Pair>
<Pair title="At 13th Level">The bonus increases to +8.</Pair>
<Pair title="At 18th Level">The bonus becomes +11.</Pair>
</Ability>
<Ability id="arc-ranger-deep_walker-rock-hopper-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-deep_walker-rock-hopper-ex" flavor="A deep walker instinctively grasps for the most stable surfaces and holds on tighter while moving over underground rock and stone.">Rock Hopper (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">The deep walker gains a +5 bonus on all Acrobatics and Climb checks made to traverse underground terrain. Furthermore, the deep walker ignores <Link to="/rule/difficult_terrain">difficult terrain</Link> created by underground terrain and subterranean flora.</Pair>
</Ability>
<Ability id="arc-ranger-deep_walker-deep-walker-camouflage-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-deep_walker-deep-walker-camouflage-ex">Deep Walker Camouflage (Ex)</Pair>
<Pair hl title="Replaces">Camouflage</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">A deep walker can use the Stealth skill to hide in underground environments, even if the terrain does not grant cover or concealment.</Pair>
</Ability>
<Ability id="arc-ranger-deep_walker-one-with-the-stone-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-deep_walker-one-with-the-stone-ex">One with the Stone (Ex)</Pair>
<Pair hl title="Replaces">Hide in plain sight</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">A deep walker can use the Stealth skill while he is underground, even when being observed.</Pair>
</Ability>
</>};
const _divine_tracker = {title: "Divine Tracker", jsx: <><h2 id="arc-ranger-divine_tracker-divine-tracker">Divine Tracker</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 108</Link><br/>Blessed by his deity, a divine tracker hunts down those he deems deserving of his retribution. His weapon is likely to find purchase in his <em>favored enemy.</em></p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-ranger-divine_tracker--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>A divine tracker's alignment must be within one step of his deity's, along either the law/chaos axis or the good/evil axis</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-ranger-divine_tracker-favored-weapon" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-divine_tracker-favored-weapon">Favored Weapon</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A divine tracker becomes proficient with the favored weapon of his deity. If his deity's favored weapon is unarmed strike, he instead gains <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-ranger-divine_tracker-blessings-su" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-divine_tracker-blessings-su" flavor="A divine tracker forms a close bond with his deity's ethos.">Blessings (Su)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Choice">He selects two warpriest <Link to="/ability/domains">domains</Link> from among the domains granted by his deity, and gains the minor <Link to="/ability/blessings">blessings</Link> of those domains. A divine tracker can select an alignment domain (Chaos, Evil, Good, or Law) only if his alignment matches that domain. A divine tracker uses his ranger level as his warpriest level to determine the effect of the blessing.</Pair>
<Pair title="At 13th Level">A divine tracker gains the major blessing from both of his domains.</Pair>
<Pair title="Special">If a divine tracker isn't devoted to a particular deity, he still selects two blessings to represent his spiritual inclinations and abilities, subject to GM approval. The restriction on alignment domains still applies.</Pair>
</Ability>
</>};
const _dragon_hunter = {title: "Dragon Hunter", jsx: <><h2 id="arc-ranger-dragon_hunter-dragon-hunter">Dragon Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/dragonslayers_handbook">Dragonslayer's Handbook pg. 22</Link><br/>The quintessential dragonslayers, dragon hunters are experts at forging through the wilds in search of great wyrms. Dragon hunters have the following class features.</p>
<Ability icon={["skills"]} id="arc-ranger-dragon_hunter-undefined">
<Pair id="arc-ranger-dragon_hunter-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT)</Pair></Ability>
<Ability id="arc-ranger-dragon_hunter-predatory-deduction-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-dragon_hunter-predatory-deduction-ex">Predatory Deduction (Ex)</Pair>
<Pair hl title="Replaces">Track</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">When a dragon hunter successfully uses Survival to spot the trail of a creature of the dragon type, the hunter may attempt an immediate DC 15 Knowledge (arcana) check. On a success, the dragon hunter is able to deduce the species, age category, size, and color of the dragon.</Pair>
<Pair title="Special">If the trail is less than 48 hours old, the dragon hunter gains a +2 circumstance bonus on the Knowledge check.</Pair>
</Ability>
<Ability id="arc-ranger-dragon_hunter-wyrm-hatred-ex" icon={["info"]}>
<Pair single id="arc-ranger-dragon_hunter-wyrm-hatred-ex">Wyrm Hatred (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A dragon hunter must select dragons as his <em>favored enemy,</em> granting him a +2 bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks against creatures of the dragon type. He also gains +2 bonuses on weapon attack and damage rolls against them.</Pair>
<Pair title="At 5th Level">These bonuses become +4.</Pair>
<Pair title="At 10th Level">These bonuses increase to +6.</Pair>
<Pair title="At 15th Level">These bonuses become +8.</Pair>
<Pair title="At 20th Level">These bonuses increase to +10.</Pair>
</Ability>
<Ability id="arc-ranger-dragon_hunter-dragoncrafting-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-dragon_hunter-dragoncrafting-ex">Dragoncrafting (Ex)</Pair>
<Pair hl title="Replaces">5th-level favored enemy</Pair>
<Pair title="At 5th Level">Dragon hunters are experts not only at tracking and killing dragons, but also at using dragon bodies to craft unique equipment. A dragon hunter gains <Link to="/feat/dragoncrafting">Dragoncrafting</Link> as a bonus feat, even if she does not meet the prerequisites.</Pair>
</Ability>
<Ability id="arc-ranger-dragon_hunter-undaunted-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-dragon_hunter-undaunted-ex">Undaunted (Ex)</Pair>
<Pair hl title="Replaces">10th-level favored enemy</Pair>
<Pair title="At 10th Level">A dragon hunter gains a +4 bonus on Will saves made to resist mind-affecting fear effects, Reflex saves made to avoid damage from breath weapons, Reflex saves made to avoid crush attacks, and Reflex saves made to avoid damage from tail sweep attacks.</Pair>
</Ability>
<Ability id="arc-ranger-dragon_hunter-expert-dragoncrafter-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-dragon_hunter-expert-dragoncrafter-ex">Expert Dragoncrafter (Ex)</Pair>
<Pair hl title="Replaces">15th-level favored enemy</Pair>
<Pair title="At 15th Level">A dragon hunter may take 10 on Heal and Craft skill checks to harvest dragoncraft materials and to create dragoncraft items. Additionally, the amount of time required to create a dragoncraft item is reduced by half.</Pair>
</Ability>
<Ability id="arc-ranger-dragon_hunter-elemental-resilience-su" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-dragon_hunter-elemental-resilience-su">Elemental Resilience (Su)</Pair>
<Pair hl title="Replaces">20th-level favored enemy</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Usage">Once per day</Pair>
<Pair title="Ability">A dragon hunter gains energy <Link to="/umr/resistance">resistance</Link> 30 against a single energy type for 1 hour. The energy types he may choose are acid, cold, electricity, and fire.</Pair>
</Ability>
</>};
const _drake_warden = {title: "Drake Warden", jsx: <><h2 id="arc-ranger-drake_warden-drake-warden">Drake Warden</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 24</Link><br/>Some rangers specialize in dealing with rambunctious younger drakes, protecting them and teaching them to tolerate, and even trust, humanoid creatures. These drake wardens follow and pass along secret techniques for raising drakes effectively, and thanks to their methods, their drakes are both fiercely loyal and extremely useful for scouting and stealth missions.</p>
<Ability id="arc-ranger-drake_warden-young-drake" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-ranger-drake_warden-young-drake">Young Drake</Pair>
<Pair hl title="Replaces">Hunter's bond, 2nd favored enemy, swift tracker</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A drake warden gains a <Link to="/sidekick/drake">drake companion</Link> instead of an animal companion, but his effective charge's level is equal to his ranger level - 3.</Pair>
<Pair title="At 12th Level">The drake does not increase in size.</Pair>
<Pair title="At 14th Level">The drake does not gain <em>drake powers</em> at this level.</Pair>
<Pair title="At 16th Level">The drake does not increase in size.</Pair>
<Pair title="At 18th Level">The drake does not gain <em>drake powers</em> at this level.</Pair>
<Pair title="At 20th Level">The drake does not increase in size.</Pair>
</Ability>
</>};
const _dungeon_rover = {title: "Dungeon Rover", jsx: <><h2 id="arc-ranger-dungeon_rover-dungeon-rover">Dungeon Rover</h2>
<p><strong>Sources</strong> <Link to="/source/dungeoneers_handbook">Dungeoneer's Handbook pg. 22</Link><br/>These rangers specialize in surviving hostile subterranean environs. They are well equipped to avoid traps, spot secret passages, and deal with inimical dungeon tenants.</p>
<Ability icon={["skills"]} id="arc-ranger-dungeon_rover-undefined">
<Pair id="arc-ranger-dungeon_rover-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/disable_device">Disable Device</Link> (DEX), <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT)</Pair>
<Pair title="Removed Skills">Ride</Pair></Ability>
<Ability id="arc-ranger-dungeon_rover-stone-scouting-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-dungeon_rover-stone-scouting-ex">Stone Scouting (Ex)</Pair>
<Pair hl title="Replaces">Track</Pair>
<Pair title="Passive Ability">A dungeon rover gains a +2 bonus on Perception checks to notice underground environmental hazards, including traps, potential cave-ins, and dangerous flora. A dungeon rover receives a check to notice these hazards whenever he passes within 10 feet of them, whether or not he is actively looking.</Pair>
</Ability>
<Ability id="arc-ranger-dungeon_rover-vermin-affinity-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-dungeon_rover-vermin-affinity-ex">Vermin Affinity (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Ability">A dungeon rover gains the ability to improve the attitude of mindless subterranean creatures. This ability functions as the <Link to="/ability/wild_empathy">wild empathy</Link> class feature, except a dungeon rover can influence any vermin (even those without Intelligence scores) instead of animals. Additionally, a dungeon rover can influence oozes with a -4 penalty on his vermin affinity check.</Pair>
</Ability>
<Ability id="arc-ranger-dungeon_rover-dungeon-ally-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-dungeon_rover-dungeon-ally-ex">Dungeon Ally (Ex)</Pair>
<Pair hl title="Alters">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A dungeon rover may select a <Link to="/companion/giant_slug">giant slug</Link>, a <Link to="/companion/giant_centipede">giant centipede</Link>, a <Link to="/companion/goblin_dog">goblin dog</Link>, a <Link to="/companion/giant_scorpion">giant scorpion</Link>, or any poisonous snake (<Link to="/companion/reef_snake">reef snake</Link>, <Link to="/companion/riding_python">riding python</Link>, <Link to="/companion/spitting_cobra">spitting cobra</Link>, or <Link to="/companion/viper">viper</Link>) as his <Link to="/sidekick/animal_companion">animal companion</Link>, in addition to the usual animal companion options available to rangers with the <em>hunter's bond</em> class feature.</Pair>
</Ability>
<Ability id="arc-ranger-dungeon_rover-subterranean-stride-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-dungeon_rover-subterranean-stride-ex">Subterranean Stride (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">A dungeon rover is never slowed by <Link to="/rule/difficult_terrain">difficult terrain</Link> while underground. However, areas that are enchanted or magically manipulated to impede motion still affect him.</Pair>
</Ability>
<Ability id="arc-ranger-dungeon_rover-improved-stone-scouting-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-dungeon_rover-improved-stone-scouting-ex">Improved Stone Scouting (Ex)</Pair>
<Pair hl title="Replaces">Swift tracker</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">A dungeon rover's bonus on Perception checks to notice underground environmental hazards increases to +4. Additionally, the rover receives a check to notice these irregularities whenever he passes within 15 feet of them.</Pair>
</Ability>
</>};
const _dusk_stalker = {title: "Dusk Stalker", jsx: <><h2 id="arc-ranger-dusk_stalker-dusk-stalker">Dusk Stalker</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 110</Link><br/>Hunters and guides through the Shadow Plane, dusk stalkers are rangers that thrive in shadow. Adept at hunting in dusk, darkness, and twilight, these rangers excel at manipulating shadows.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-ranger-dusk_stalker--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/fetchling">Fetchling</Link></td></tr></tbody></table></ScrollContainer></div><Ability icon={["skills"]} id="arc-ranger-dusk_stalker-undefined">
<Pair id="arc-ranger-dusk_stalker-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (nature)</Pair></Ability>
<Ability id="arc-ranger-dusk_stalker-shadow-guide" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-ranger-dusk_stalker-shadow-guide">Shadow Guide</Pair>
<Pair hl title="Alters">Favored terrain</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Info">When a dusk stalker gains the <em>favored terrain</em> ability, that ability is modified in the following ways.</Pair>
<Pair title="Ability">A dusk stalker picks his primary terrain normally, but only gains a +1 bonus on those checks while on a plane other than the Shadow Plane, and gains a +3 bonus on those checks while on the Shadow Plane.</Pair>
<Pair title="Special">Each time he chooses to add a bonus in a <em>favored terrain,</em> he gains a +1 bonus on those checks while on a plane other than the Shadow Plane, and gains a +3 bonus on those checks while on the Shadow Plane.</Pair>
</Ability>
<Ability id="arc-ranger-dusk_stalker-shadow-bond-su" icon={["armor-upgrade","armor-downgrade"]}>
<Pair single id="arc-ranger-dusk_stalker-shadow-bond-su" flavor="A dusk stalker creates a mystical bond with shadows.">Shadow Bond (Su)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">The shadows around a dusk stalker weave and swirl, confusing his enemies. When a dusk stalker is fighting in <Link to="/rule/dim_light">dim light</Link> or darkness (magical or otherwise), he gains a +4 insight bonus on Acrobatics checks made to move through an enemy's threatened area or through its space.</Pair>
<Pair title="Ability">The dusk stalker can manipulate shadows in a 5-foot square within 30 feet. That square must be in an area of dim light or darkness (magical or otherwise). Enemies with an Intelligence score within or adjacent to that 5-foot square take a -2 penalty to AC and on Reflex saving throws. The harassing shadows last for 1 round. This is a mind-affecting fear effect.</Pair>
<Pair title="Usage">Wisdom modifier times/day</Pair>
</Ability>
<Ability id="arc-ranger-dusk_stalker-dark-sight-su" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-dusk_stalker-dark-sight-su">Dark Sight (Su)</Pair>
<Pair hl title="Replaces">Camouflage</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">A dusk stalker gains the <Link to="/umr/see_in_darkness">see in darkness</Link> ability.</Pair>
</Ability>
</>};
const _elemental_envoy = {title: "Elemental Envoy", jsx: <><h2 id="arc-ranger-elemental_envoy-elemental-envoy">Elemental Envoy</h2>
<p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 5</Link><br/>An elemental envoy travels the Elemental Planes. He has learned to protect himself from their many dangers, and he models his fighting style after their teachings.</p>
<Ability id="arc-ranger-elemental_envoy-planar-combatant-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-elemental_envoy-planar-combatant-ex">Planar Combatant (Ex)</Pair>
<Pair hl title="Alters">Combat style feats</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">An elemental envoy must choose the elemental combat style of the <Link to="/arc-monk/elemental_monk">elemental monk</Link> archetype, choosing his combat style feats from those mentioned in the <em>Genie Style</em> ability of that archetype.</Pair>
</Ability>
<Ability id="arc-ranger-elemental_envoy-genie-style-ex-sp" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-elemental_envoy-genie-style-ex-sp" flavor="Relevant text from the elemental monk archetype">Genie Style (Ex, Sp)</Pair>
<Pair title="At 2nd Level">As a <strong className="hl">swift action</strong> an elemental monk can gain the benefits of one of the following style feats, based on one of the five types of genies. When she does so, she automatically enters that feat's stance: <Link to="/feat/djinni_style">Djinni Style</Link>, <Link to="/feat/efreeti_style">Efreeti Style</Link>, <Link to="/feat/janni_style">Janni Style</Link>, <Link to="/feat/marid_style">Marid Style</Link>, or <Link to="/feat/shaitan_style">Shaitan Style</Link>.</Pair>
<Pair title="At 6th Level">While the elemental monk is using a genie style feat, she also gains the benefits of a feat from the following list, as appropriate for that style's feat path: <Link to="/feat/djinni_spirit">Djinni Spirit</Link>, <Link to="/feat/efreeti_stance">Efreeti Stance</Link>, <Link to="/feat/janni_tempest">Janni Tempest</Link>, <Link to="/feat/marid_spirit">Marid Spirit</Link>, and <Link to="/feat/shaitan_skin">Shaitan Skin</Link>.</Pair>
<Pair title="At 10th Level">While the elemental monk is using a genie style feat, she also gains the benefits of a feat from the following list, as appropriate for that style's feat path: <Link to="/feat/djinni_spin">Djinni Spin</Link>, <Link to="/feat/efreeti_touch">Efreeti Touch</Link>, <Link to="/feat/janni_rush">Janni Rush</Link>, <Link to="/feat/marid_coldsnap">Marid Coldsnap</Link>, and <Link to="/feat/shaitan_earthblast">Shaitan Earthblast</Link>.</Pair>
</Ability>
<Ability id="arc-ranger-elemental_envoy-elemental-explorer-ex" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-ranger-elemental_envoy-elemental-explorer-ex">Elemental Explorer (Ex)</Pair>
<Pair hl title="Alters">Favored terrain</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Info">Instead of selecting a <em>favored terrain,</em> an elemental envoy gains the typical <em>favored terrain</em> bonuses when traveling on the Plane of Air, Plane of Earth, Plane of Fire, and Plane of Water, except the elemental envoy gains a bonus on Knowledge (planes) checks instead of Knowledge (geography) checks.</Pair>
<Pair title="At 8th Level">He does not select an additional <em>favored terrain,</em> but his <em>favored terrain</em> bonuses increase by 2.</Pair>
<Pair title="At 13th Level">He does not select an additional <em>favored terrain,</em> but his <em>favored terrain</em> bonuses increase by 2.</Pair>
<Pair title="At 18th Level">He does not select an additional <em>favored terrain,</em> but his <em>favored terrain</em> bonuses increase by 2.</Pair>
</Ability>
</>};
const _falconer = {title: "Falconer", jsx: <><h2 id="arc-ranger-falconer-falconer">Falconer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 67</Link><br/>Rangers have always enjoyed a special bond with a specific animal, but the falconer takes this bond to a deeper level. Falconers begin with their companion earlier than other rangers, and have the ability to teach their companions special tricks.</p>
<Ability id="arc-ranger-falconer-feathered-companion-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-falconer-feathered-companion-ex">Feathered Companion (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A falconer earns the trust and companionship of a bird of prey. The bird can be of any type of large hunting or scavenging bird (even a vulture). This ability functions like the druid <Link to="/ability/animal_companion">animal companion</Link> ability (which is part of the <em>nature bond</em> class feature), but the falconer must take the <Link to="/companion/bird">bird</Link> (or <Link to="/companion/falcon">falcon</Link>) <Link to="/sidekick/animal_companion">animal companion</Link>, and that companion has only half the normal hit points.</Pair>
<Pair title="Special">The falconer cannot teach the bird of prey the <em>work</em> trick, but can teach it either the <em>roam</em> or <em>distract</em> trick for free. Whichever trick the falconer does not pick then can be picked as a trick later.</Pair>
</Ability>
<Ability id="arc-ranger-falconer-roam-dc-15" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-falconer-roam-dc-15">Roam (DC 15)</Pair>
<Pair title="Ability">The falconer can let his animal companion loose to roam and forage. He must let it roam for no more than a week. When the falconer lets it roam, it agrees to return to the place he let it loose within the time period he designates.</Pair>
</Ability>
<Ability id="arc-ranger-falconer-distract-dc-20-bird-only" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-ranger-falconer-distract-dc-20-bird-only">Distract (DC 20; bird only)</Pair>
<Pair title="Ability">The animal companion flutters wildly around any enemy it would normally attack with the <em>attack</em> trick. It makes an attack roll against that enemy. On a hit, the enemy is <Link to="/misc/shaken">shaken</Link> for 1 round.</Pair>
</Ability>
<Ability id="arc-ranger-falconer-hunters-bond-ex" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-ranger-falconer-hunters-bond-ex">Hunter's Bond (Ex)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A falconer must select an animal companion when he gains <em>hunter's bond.</em> He does not gain a new companion at 4th level; rather, his feathered companion gains full hit points.</Pair>
</Ability>
<Ability id="arc-ranger-falconer-swoop-for-the-kill-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-falconer-swoop-for-the-kill-ex">Swoop for the Kill (Ex)</Pair>
<Pair hl title="Replaces">6th-level combat style feat</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">When outdoors, a falconer can direct his feathered companion to strike an enemy from high above. His feathered companion gains the following trick as a bonus trick.</Pair>
</Ability>
<Ability id="arc-ranger-falconer-swooping-charge-dc-20-bird" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-ranger-falconer-swooping-charge-dc-20-bird">Swooping Charge (DC 20; bird)</Pair>
<Pair title="Ability">The falconer's bird companion flies up and then swoops down into a charge. To perform this trick, the companion must be able to fly, and it must be outdoors or someplace with enough room for the bird to fly great distances in (a grand cathedral may have enough room, but dungeons usually do not). It spends a <strong className="hl">full-round action</strong> flying to a high vantage point, and on the next round makes a <Link to="/rule/charge">charge</Link> attack upon an enemy the falconer designates. If that charge attack hits, the bird deals 2d4 points of damage instead of 1d4 with its bite and gains a &times;4 critical modifier when making the attack. If the bird hits, the target is <Link to="/misc/staggered">staggered</Link> for 1 round.</Pair>
</Ability>
</>};
const _flamewarden = {title: "Flamewarden", jsx: <><h2 id="arc-ranger-flamewarden-flamewarden">Flamewarden</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 72</Link><br/>Emulating the blazing phoenix, flamewardens sweep through the world like a selective forest fire, burning away corruption, evil, and those who cling to decay.</p>
<Ability id="arc-ranger-flamewarden-touch-of-flame-su" icon={["upgrade"]}>
<Pair single id="arc-ranger-flamewarden-touch-of-flame-su" flavor="A flamewarden can cause his weapons to burst into flame.">Touch of Flame (Su)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Standard Action">The ranger can grant a single weapon he holds the <Link to="/magic-enh/flaming">flaming</Link> special ability for 1 minute; while under this effect, the weapon counts as magic for the purpose of overcoming damage reduction.</Pair>
<Pair title="At 12th Level">Weapons affected by this ability gain the <Link to="/magic-enh/flaming_burst">flaming burst</Link> special ability instead.</Pair>
</Ability>
<Ability id="arc-ranger-flamewarden-spells" icon={["spell-book"]}>
<Pair single id="arc-ranger-flamewarden-spells">Spells</Pair>
<Pair hl title="Alters">Spells</Pair>
<Pair title="Info">A flamewarden can prepare spells from the <Link to="/main/spells_druid">druid list</Link> that have the fire descriptor.</Pair>
</Ability>
<Ability id="arc-ranger-flamewarden-stoking-the-embers-sp" icon={["heart-plus"]}>
<Pair single id="arc-ranger-flamewarden-stoking-the-embers-sp" flavor="A flamewarden can fan the last spark of a recently slain creature's life force back into a full flame.">Stoking the Embers (Sp)</Pair>
<Pair hl title="Replaces">Evasion</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Standard Action">Once per day, a flamewarden can touch the corpse of a creature that has died within 1 round to grant it the effects of <Link to="/spell/breath_of_life">breath of life</Link>.</Pair>
</Ability>
<Ability id="arc-ranger-flamewarden-burning-renewal-su" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-flamewarden-burning-renewal-su" flavor="A flamewarden can use the cleansing power of fire to remove afflictions from his body, mind, and soul.">Burning Renewal (Su)</Pair>
<Pair hl title="Replaces">Camouflage</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Ability">When the flamewarden takes 5 or more points of fire damage, he can remove one of the following conditions: fatigued, shaken, or sickened. Alternatively, he can remove 1 point of <Link to="/rule/ability_damage">ability damage</Link> or drain from an ability score of his choice.</Pair>
<Pair title="Ability">If the flamewarden takes 10 or more points of fire damage, he can remove one of the following conditions: exhausted, frightened, or nauseated. Alternatively, he can remove 1d6 points of ability damage or drain from an ability score of his choice.</Pair>
<Pair title="Special">The ranger can use this ability only once each time he takes fire damage, regardless of how much damage it deals over the required amount. If the flamewarden has fire <Link to="/umr/resistance">resistance</Link> or <Link to="/umr/immunity">immunity</Link> to fire, fire damage he would have otherwise taken still counts toward activating <em>burning renewal.</em></Pair>
</Ability>
<Ability id="arc-ranger-flamewarden-phoenix-rising-su" icon={["abstract-091","magic-swirl","heart-plus"]}>
<Pair single id="arc-ranger-flamewarden-phoenix-rising-su">Phoenix Rising (Su)</Pair>
<Pair hl title="Replaces">Improved evasion, master hunter</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Passive Ability">If a flamewarden dies, his body explodes in a conflagration in a 20-foot <Link to="/misc/spread">spread</Link>. Each hostile creature in the area takes 10d6 points of fire damage unless it succeeds at a Reflex save (DC = 10 + half the ranger's level + his Constitution modifier) for half damage. The flames don't harm the flamewarden's allies, who instead are healed 5d6 points of damage, and any poisons they are currently suffering are neutralized as per <Link to="/spell/neutralize_poison">neutralize poison</Link>. The flamewarden's body is reduced to ashes by the explosion.</Pair>
<Pair title="At 20th Level">The flamewarden gains immunity to fire, and once per week, the flamewarden rises from the ashes of his own destruction 1 round after dying. The flamewarden's body re-forms with all his equipment, and he returns to life with half his maximum hit points. Any ability scores that were 0 become 1, and nonmagical diseases and poisons are cured. A <Link to="/spell/limited_wish">limited wish</Link>, <Link to="/spell/miracle">miracle</Link>, or <Link to="/spell/wish">wish</Link> spell cast before he rises from the ashes prevents him from doing so, as does the area of an <Link to="/spell/unhallow">unhallow</Link> effect.</Pair>
</Ability>
</>};
const _fortune_finder = {title: "Fortune-Finder", jsx: <><h2 id="arc-ranger-fortune_finder-fortune-finder">Fortune-Finder</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 29</Link><br/>Vanaras often leave home to seek fortune and sate their curiosity regarding the mysterious lands that lie beyond their native territories. The most skilled of these thrillseekers are called ba-sadhaks, or fortune-finders. So successful have these canny explorers been at exploring Golarion at large that the secrets of their success are closely guarded, resulting in only extremely rare non-vanaran fortune-finders.</p>
<Ability id="arc-ranger-fortune_finder-hinterlander-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-fortune_finder-hinterlander-ex">Hinterlander (Ex)</Pair>
<Pair hl title="Replaces">Track</Pair>
<Pair title="Passive Ability">A fortune-finder adds 1/2 his level (minimum 1) on all Climb and Swim checks.</Pair>
</Ability>
<Ability id="arc-ranger-fortune_finder-adaptable-study-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-fortune_finder-adaptable-study-ex" flavor="A fortune-finder can adapt and orient himself to new environments and new enemies.">Adaptable Study (Ex)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">He gains a +1 bonus on initiative checks and Knowledge (geography), Perception, Stealth, and Survival checks whenever he is in a terrain he hasn't selected as one of his <em>favored terrains.</em> He leaves no trail and can't be tracked in any such terrain (though he can leave a trail if he so chooses).</Pair>
<Pair title="Move-Equivalent Action">The fortune-finder can study an opponent he can see. He then gains a bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks attempted against that opponent, as well as on weapon attack and damage rolls against it. The bonus is equal to half the fortune-finder's highest <em>favored enemy</em> bonus.</Pair>
<Pair title="Special">A fortune-finder can't attempt Knowledge checks untrained to identify an opponent he has studied with <em>adaptable study.</em> Bonuses from <em>adaptable study</em> don't stack with those from the <em>favored enemy</em> ability. The ranger can study only a single target at a time.</Pair>
</Ability>
<Ability id="arc-ranger-fortune_finder-trailblazer-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-fortune_finder-trailblazer-ex">Trailblazer (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A fortune-finder can move through any sort of <Link to="/rule/difficult_terrain">difficult terrain</Link> at his normal speed. Terrain that is enchanted or magically manipulated to impede movement, however, still affects the fortune-finder.</Pair>
</Ability>
<Ability id="arc-ranger-fortune_finder-fast-study-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-fortune_finder-fast-study-ex">Fast Study (Ex)</Pair>
<Pair hl title="Replaces">Quarry, improved quarry</Pair>
<Pair title="At 11th Level">A fortune-finder can study an opponent using <em>adaptable study</em> as a <strong className="hl">swift</strong> or <strong className="hl">move action</strong>. In addition to this, he can maintain bonuses from <em>adaptable study</em> against one additional opponent.</Pair>
<Pair title="At 19th Level">He can study an opponent using <em>adaptable study</em> as an <strong className="hl">immediate</strong>, <strong className="hl">swift</strong>, or <strong className="hl">move</strong> action and can maintain the bonuses from <em>adaptable study</em> against a total of three opponents.</Pair>
</Ability>
<Ability id="arc-ranger-fortune_finder-master-explorer-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-fortune_finder-master-explorer-ex" flavor="A fortune-finder becomes a master explorer.">Master Explorer (Ex)</Pair>
<Pair hl title="Replaces">Master hunter</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">He can move through any sort of terrain that impedes movement at his full speed, even if it is enchanted or magically manipulated to impede motion.</Pair>
<Pair title="Full-Round Action">He can study one opponent he can see and has already studied with <em>adaptable study,</em> increasing the benefits he gains from that ability to equal his full <em>favored enemy</em> bonus.</Pair>
</Ability>
</>};
const _freebooter = {title: "Freebooter", jsx: <><h2 id="arc-ranger-freebooter-freebooter">Freebooter</h2>
<p><strong>Sources</strong> <Link to="/source/pirates_of_the_inner_sea">Pirates of the Inner Sea pg. 23</Link><br/>A freebooter is a natural leader, a pirate who works well with a variety of people and in a variety of roles. Her specialized combat tactics help organize and direct a crew, and freebooters' talents are in high demand. Most freebooters work as independent agents. A freebooter signs on with a crew when she feels the urge to travel, and often moves to a new ship when her contract ends.</p>
<Ability id="arc-ranger-freebooter-freebooters-bane-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-freebooter-freebooters-bane-ex">Freebooter's Bane (Ex)</Pair>
<Pair hl title="Replaces">Favored enemy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Move-Equivalent Action">The freebooter can indicate an enemy in combat and rally her allies to focus on that target. The freebooter and her allies gain a +1 bonus on weapon attack and damage rolls against the target. This ability applies only to allies who can see or hear the freebooter and who are within 30 feet of the freebooter at the time she activates this ability.</Pair>
<Pair title="At 5th Level">The bonus becomes +2.</Pair>
<Pair title="At 10th Level">The bonus increases to +3.</Pair>
<Pair title="At 15th Level">The bonus becomes +4.</Pair>
<Pair title="At 20th Level">The bonus increases to +5.</Pair>
<Pair title="Special">The <em>freebooter's bane</em> lasts until the target dies or the freebooter selects a new target.</Pair>
</Ability>
<Ability id="arc-ranger-freebooter-freebooters-bond-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-freebooter-freebooters-bond-ex">Freebooter's Bond (Ex)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A freebooter forms a bond with her crewmates. This bond allows her to spend a <strong className="hl">move action</strong> to grant her allies extra combat prowess when they work as a team. All allies within 30 feet who can see or hear the freebooter gain an additional +2 bonus on attack rolls when <Link to="/rule/flanking">flanking</Link> with the freebooter or with another ally affected by this ability.</Pair>
</Ability>
<Ability id="arc-ranger-freebooter-fast-swimmer-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-freebooter-fast-swimmer-ex">Fast Swimmer (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A freebooter may swim half her speed as a <strong className="hl">move action</strong> or her normal speed as a <strong className="hl">full-round action</strong> with a successful Swim check.</Pair>
<Pair title="Passive Ability">The freebooter gains a +2 bonus on Swim checks.</Pair>
</Ability>
</>};
const _galvanic_saboteur = {title: "Galvanic Saboteur", jsx: <><h2 id="arc-ranger-galvanic_saboteur-galvanic-saboteur">Galvanic Saboteur</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_river">People of the River pg. 25</Link><br/>The transformation of the great warlord Kevoth-Kul into the hedonistic Black Sovereign a few decades ago was difficult for the people of Numeria to accept. Many Kellid locals blame Kevoth-Kul's change on the influence of the Technic League and view both the League and their mechanical minions with a mix of fear and distrust. Some Kellid rangers have since developed skills to defeat the League's robotic enforcers and devious arcanists.</p>
<Ability icon={["skills"]} id="arc-ranger-galvanic_saboteur-undefined">
<Pair id="arc-ranger-galvanic_saboteur-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/disable_device">Disable Device</Link> (DEX), <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT)</Pair>
<Pair title="Removed Skills">Handle Animal, Knowledge (dungeoneering)</Pair></Ability>
<Ability id="arc-ranger-galvanic_saboteur-favored-enemy-ex" icon={["broken-shield"]}>
<Pair single id="arc-ranger-galvanic_saboteur-favored-enemy-ex">Favored Enemy (Ex)</Pair>
<Pair hl title="Alters">Favored enemy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">A galvanic saboteur must select construct creatures as his first <em>favored enemy.</em></Pair>
</Ability>
<Ability id="arc-ranger-galvanic_saboteur-reprogram-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-galvanic_saboteur-reprogram-ex">Reprogram (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A galvanic saboteur can improve the initial attitude of a mindless construct. This ability functions as <Link to="/ability/wild_empathy">wild empathy</Link>, except only against mindless constructs. The ranger can use this ability against constructs with an Intelligence score, but he takes a -4 penalty on the check.</Pair>
</Ability>
<Ability id="arc-ranger-galvanic_saboteur-lucky-dodge-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-galvanic_saboteur-lucky-dodge-ex" flavor="A galvanic saboteur can dodge the precise attacks of even the most technologically advanced foes.">Lucky Dodge (Ex)</Pair>
<Pair hl title="Replaces">Favored terrain</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">The ranger gains a luck bonus to AC against attacks that target his touch AC as long as his opponent's type matches that of his first <em>favored enemy.</em> This luck bonus is equal to 1/2 the ranger's <em>favored enemy</em> bonus against that creature type.</Pair>
<Pair title="At 8th Level">The ranger gains this luck bonus to AC against attacks that target his touch AC as long as his opponent's type matches his 2nd <em>favored enemy.</em></Pair>
<Pair title="At 13th Level">The ranger gains this luck bonus to AC against attacks that target his touch AC as long as his opponent's type matches his 3rd <em>favored enemy.</em></Pair>
<Pair title="At 18th Level">The ranger gains this luck bonus to AC against attacks that target his touch AC as long as his opponent's type matches his 4th <em>favored enemy.</em></Pair>
<Pair title="Special">A galvanic saboteur's animal companion (if he chose one for his <em>hunter's bond</em>) also gains this luck bonus.</Pair>
</Ability>
<Ability id="arc-ranger-galvanic_saboteur-technological-trapsmith-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-galvanic_saboteur-technological-trapsmith-ex">Technological Trapsmith (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability"><p>A galvanic saboteur can rig technological traps using the remains of destroyed constructs with the clockwork or robot subtype. To successfully rig such a trap, the ranger must spend 1 minute working on the destroyed construct and succeed at a Disable Device check (DC = 10 + the construct's HD). On a failure, the trap doesn't function and the construct's remains are ruined. On a success, the ranger creates a mechanical trap with the following statistics.</p>
<div className="sideNoteWrap"><ScrollContainer id="arc-ranger-galvanic_saboteur--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={6} to="/rule/elements_of_a_trap"><IonIcon aria-label="Trap" icon="/icons/wolf-trap.svg" /></ThLink><th colSpan={4} scope="col" className="title">Rigged Construct Trap</th></tr><tr><th id="arc-ranger-galvanic_saboteur-rigged-construct-trap-haunt-type">Type</th><td headers="arc-ranger-galvanic_saboteur-rigged-construct-trap-haunt-type">mechanical</td><th id="arc-ranger-galvanic_saboteur-rigged-construct-trap-haunt-cr">CR</th><td headers="arc-ranger-galvanic_saboteur-rigged-construct-trap-haunt-cr">Variable</td></tr><tr><th scope="row" colSpan={2}>Perception DC</th><td colSpan={2}>20</td></tr><tr><th scope="row" colSpan={2}>Disable Device DC</th><td colSpan={2}>20</td></tr><tr><th id="arc-ranger-galvanic_saboteur-rigged-construct-trap-haunt-trigger">Trigger</th><td headers="arc-ranger-galvanic_saboteur-rigged-construct-trap-haunt-trigger">location (all spaces occupied by the construct's remains)</td><th id="arc-ranger-galvanic_saboteur-rigged-construct-trap-haunt-reset">Reset</th><td headers="arc-ranger-galvanic_saboteur-rigged-construct-trap-haunt-reset">none</td></tr><tr><td colSpan={4}><strong>Effect:</strong> blast of electricity (1d6 electricity damage/2 HD of construct); Reflex negates (DC = 10 + 1/2 the ranger's level + his Intelligence modifier); multiple targets (all targets within 5 ft. of construct's remains)</td></tr></tbody></table></ScrollContainer></div><p>Other types of destroyed constructs can serve as suitable materials for a rigged construct trap (at the GM's discretion). Constructs destroyed by <Link to="/spell/disintegrate">disintegrate</Link> or similar effects that leave no intact remains cannot be used to create a rigged construct trap.</p>
</Pair>
</Ability>
<Ability id="arc-ranger-galvanic_saboteur-static-strike-ex" icon={["mailed-fist"]}>
<Pair single id="arc-ranger-galvanic_saboteur-static-strike-ex" flavor="The galvanic saboteur has gathered enough parts and scrap from his constructed enemies that he can infuse some of his attacks with a bit of their alien energy.">Static Strike (Ex)</Pair>
<Pair hl title="Replaces">Swift tracker, camouflage</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Standard Action">Once per day, the ranger can make a <em>static strike</em> as a melee attack at his full base attack bonus. If the attack hits, it deals an additional 1d6 points of electricity damage and the ranger can make an additional attack at his full base attack bonus against a foe that is adjacent to the previous foe and still within his reach, as if he had <Link to="/feat/cleave">Cleave</Link>, except he doesn't take a -2 penalty to his AC and the second attack deals an additional 2d6 points of electricity damage.</Pair>
<Pair title="At 12th Level">The ranger can continue to make attacks against adjacent creatures, as if he had <Link to="/feat/great_cleave">Great Cleave</Link>, with each hit increasing the amount of electricity damage dealt to the next foe in line.</Pair>
<Pair title="At 14th Level">The ranger can use this ability twice per day.</Pair>
<Pair title="At 20th Level">The ranger can use this ability three times per day.</Pair>
</Ability>
<Ability id="arc-ranger-galvanic_saboteur-sensor-evasion-su" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-galvanic_saboteur-sensor-evasion-su" flavor="A galvanic saboteur has mastered the art of evading technological and magical observation.">Sensor Evasion (Su)</Pair>
<Pair hl title="Replaces">Hide in plain sight</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">He can use the Stealth skill against constructs and magical sensors (such as those created by <Link to="/spell/arcane_eye">arcane eye</Link> or <Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link>) even while being observed.</Pair>
</Ability>
</>};
const _groom = {title: "Groom", jsx: <><h2 id="arc-ranger-groom-groom">Groom</h2>
<p><strong>Sources</strong> <Link to="/source/dungeoneers_handbook">Dungeoneer's Handbook pg. 21</Link><br/>The groom attends to the needs of the party's mounts and beasts of burden during their adventures, and guards these animals while the party goes underground.</p>
<Ability id="arc-ranger-groom-hide-the-horses-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-groom-hide-the-horses-ex" flavor="A groom finds the best place to stable and conceal a party's mounts while the group explores a dungeon.">Hide the Horses (Ex)</Pair>
<Pair hl title="Replaces">Track</Pair>
<Pair title="Passive Ability">A groom adds half her level (minimum 1) on Stealth skill checks for both herself and the mounts she's hiding while she is concealing a party's mounts.</Pair>
</Ability>
<Ability id="arc-ranger-groom-horse-whisperer-su" icon={["magic-swirl"]}>
<Pair single id="arc-ranger-groom-horse-whisperer-su">Horse Whisperer (Su)</Pair>
<Pair hl title="Replaces">Endurance</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A groom can use <Link to="/spell/speak_with_animals">speak with animals</Link> at will, but can use this power only on horses, riding dogs, and other mounts of the animal type.</Pair>
</Ability>
<Ability id="arc-ranger-groom-scout-the-area-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-ranger-groom-scout-the-area-ex">Scout the Area (Ex)</Pair>
<Pair hl title="Replaces">1st favored terrain</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A groom gains a +4 bonus on Knowledge (local) checks.</Pair>
<Pair title="Ability">She always knows where to find the nearest expert or spellcaster who can provide a particular service, such as the nearest source of <Link to="/spell/raise_dead">raise dead</Link>.</Pair>
</Ability>
</>};
const _guide = {title: "Guide", jsx: <><h2 id="arc-ranger-guide-guide">Guide</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 125</Link><br/>Many rangers are loners, but some choose to use their familiarity with the land to guide others safely through the wilderness. The guide forgoes a <em>favored enemy</em> to focus on the task or foe at hand, and can pass his knowledge and luck on to his charges. A guide has the following class features.</p>
<Ability id="arc-ranger-guide-rangers-focus-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-guide-rangers-focus-ex">Ranger's Focus (Ex)</Pair>
<Pair hl title="Replaces">Favored enemy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">1 time/day + 1 per three ranger levels beyond 1st<ByLevelPop levels={[[1,1],[4,2],[7,3],[10,4],[13,5],[16,6],[19,7]]} unit="time" postText="/day" /></Pair>
<Pair title="Swift Action">The guide can focus on a single enemy within line of sight. That creature remains the ranger's focus until it is reduced to 0 or fewer hit points or surrenders, or until the ranger designates a new focus, whichever occurs first. The ranger gains a +2 bonus on attack and damage rolls against the target of his focus.</Pair>
<Pair title="At 5th Level">This bonus becomes +4.</Pair>
<Pair title="At 10th Level">This bonus increases to +6.</Pair>
<Pair title="At 15th Level">This bonus becomes +8.</Pair>
<Pair title="At 20th Level">This bonus increases to +10.</Pair>
</Ability>
<Ability id="arc-ranger-guide-terrain-bond-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-ranger-guide-terrain-bond-ex" flavor="The guide forms a bond with the land itself, enabling him to direct others in such terrain.">Terrain Bond (Ex)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">When in his <em>favored terrain,</em> the ranger grants all allies within line of sight and that can hear him a +2 bonus on initiative checks and Perception, Stealth, and Survival skill checks.</Pair>
<Pair title="Ability">As long as they travel with him, the ranger's allies leave no trail and can't be tracked. The ranger can choose for the group to leave a trail, or even specific members of the group to leave a trail if he so desires.</Pair>
</Ability>
<Ability id="arc-ranger-guide-rangers-luck-ex" icon={["rolling-dices"]}>
<Pair single id="arc-ranger-guide-rangers-luck-ex">Ranger's Luck (Ex)</Pair>
<Pair hl title="Replaces">Evasion</Pair>
<Pair title="At 9th Level">The guide can either reroll one of his attack rolls or force an enemy who just hit him with an attack to reroll the attack roll. The ranger must take the result of the second roll even if it is worse.</Pair>
<Pair title="Usage">1 time/day + 1 per five ranger levels beyond 9th<ByLevelPop levels={[[9,1],[14,2],[19,3]]} unit="time" postText="/day" /></Pair>
</Ability>
<Ability id="arc-ranger-guide-inspired-moment-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-ranger-guide-inspired-moment-ex">Inspired Moment (Ex)</Pair>
<Pair hl title="Replaces">Quarry, improved quarry</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Free Action">The guide can have an inspired moment once per day. The ranger gains the following benefits until the end of his next turn. His speed increases by 10 feet. He can take an extra <strong className="hl">move</strong> or <strong className="hl">swift action</strong> on his turn. He gains a +4 bonus to AC and on attack rolls, skill checks, or ability checks. Finally, he automatically confirms any critical threat he scores.</Pair>
<Pair title="At 19th Level">He can use this ability twice a day.</Pair>
</Ability>
<Ability id="arc-ranger-guide-improved-rangers-luck-ex" icon={["rolling-dices","upgrade"]}>
<Pair single id="arc-ranger-guide-improved-rangers-luck-ex">Improved Ranger's Luck (Ex)</Pair>
<Pair hl title="Replaces">Improved evasion</Pair>
<Pair title="At 16th Level">The ranger's luck increases. He gains a +4 bonus on his rerolls made with the <em>ranger's luck</em> ability, or if he forces an enemy to reroll an attack, that enemy takes a -4 penalty on the roll. This bonus or penalty is also applied on any roll to confirm critical hits.</Pair>
</Ability>
</>};
const _guildbreaker = {title: "Guildbreaker", jsx: <><h2 id="arc-ranger-guildbreaker-guildbreaker">Guildbreaker</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 41</Link><br/>Some rangers aren't the type to put their steel and sweat behind fighting particular kinds of creatures. Instead, these shrewd warriors alter their focus and dedicate their efforts to dismantling enemy organizations. Guildbreakers stoke their enmity for their foes, and they train to track the movements of rival organizations, and even to infiltrate these groups to gather secret intelligence.</p>
<Ability icon={["skills"]} id="arc-ranger-guildbreaker-undefined">
<Pair id="arc-ranger-guildbreaker-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/disguise">Disguise</Link> (CHA), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT)</Pair>
<Pair title="Removed Skills">Handle Animal, Heal, Knowledge (geography)</Pair></Ability>
<Ability id="arc-ranger-guildbreaker-favored-organization-ex" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-ranger-guildbreaker-favored-organization-ex">Favored Organization (Ex)</Pair>
<Pair hl title="Alters">Favored enemy</Pair>
<Pair title="Ability">When a guildbreaker selects a <em>favored enemy,</em> he can opt to select a specific organization, such as a particular thieves' guild, in lieu of a specific creature type. The guildbreaker must select this option for his first <em>favored enemy,</em> but he can choose either option for his later <em>favored enemies.</em></Pair>
<Pair title="Special">The guildbreaker's bonuses from <em>favored enemy</em> apply against official members of this organization regardless of their creature type, but not against the organization's allies, paid mercenaries, or forced labor. This ability only applies if the guildbreaker knows that the target is a member of the organization.</Pair>
</Ability>
<Ability id="arc-ranger-guildbreaker-read-the-city-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-guildbreaker-read-the-city-ex" flavor="A guildbreaker spends most of his time in cities and large population centers. As a result, he gains an innate sense of comings and goings in the hustle around him.">Read the City (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Ability">When in an urban environment, a guildbreaker can use the Survival skill to gather information, but only about the movements of creatures and what sort of people (races, social classes, predominant professions, and the like) occupy the community. Unlike with the normal way to gather information, the guildbreaker studies the signs of the city instead of asking around, so it doesn't spread word about the nature of his questions to others.</Pair>
</Ability>
<Ability id="arc-ranger-guildbreaker-deep-cover-ex-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-ranger-guildbreaker-deep-cover-ex-su" flavor="Guildbreakers may work to dismantle their enemies' power structures from within, and they know how to gather resources and the necessary trappings in order to masquerade as a member of those organizations.">Deep Cover (Ex, Su)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A guildbreaker adds a circumstance bonus equal to twice his <em>favored organization</em> bonus to all Bluff and Disguise checks to appear to be a member of the organization (this does not apply on Disguise checks to change his appearance and replace a specific member, but rather to checks related to appear to be a general member of the organization).</Pair>
<Pair title="Special"><p>The bonus on Bluff checks from <em>deep cover</em> stacks with the guildbreaker's overall bonus from <em>favored organization</em> if the person he is attempting to deceive is also a member of that organization.</p>
<p>A guildbreaker posing as a member of one of his <em>favored enemy</em> organizations automatically defeats truth-telling magic (as if under the effects of <Link to="/spell/glibness">glibness</Link>), but only for the purpose of claiming to be a member of the organization. Truth-telling magic can still expose him with a more indirect question, such as a member of a non-religious evil organization asking the guildbreaker for the identity of his patron deity.</p>
</Pair>
</Ability>
<Ability id="arc-ranger-guildbreaker-crowd-stride-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-guildbreaker-crowd-stride-ex">Crowd Stride (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="At 7th Level">A guildbreaker can slip through crowded streets with ease. His movement speed is not reduced when moving through a crowd.</Pair>
</Ability>
</>};
const _hooded_champion = {title: "Hooded Champion", jsx: <><h2 id="arc-ranger-hooded_champion-hooded-champion">Hooded Champion</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 108</Link><br/>The hooded champion lives on the periphery of civilized lands, and is often at odds with the forces of law and order. He is frequently a hero of oppressed peoples, lurking in the woods near their homes and trying to right the injustices inflicted upon them by the wealthy and powerful.</p>
<Ability id="arc-ranger-hooded_champion-panache-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-hooded_champion-panache-ex">Panache (Ex)</Pair>
<Pair hl title="Replaces">Favored enemy at 1st level</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">The hooded champion gains the <Link to="/class/swashbuckler">swashbuckler's</Link> panache class feature. He regains panache through critical hits and killing blows when using a bow of any kind, rather than when using a light or one-handed piercing melee weapon.</Pair>
<Pair title="Special">If the hooded champion has this ability and the panache ability from another class or archetype, the panache points from the two sources do not stack, but the hooded champion regains panache in any way either class feature allows him to. For example, a character with a Charisma score of 16 who has both the hooded champion's and the swashbuckler's panache has a base of 3 panache points, and regains panache from critical hits and killing blows from both bows and light or one-handed piercing melee weapons.</Pair>
</Ability>
<Ability id="arc-ranger-hooded_champion-panache-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-hooded_champion-panache-ex" flavor="Text from the swashbuckler ability">Panache (Ex)</Pair>
<Pair title="Ability"><p>At the start of each day, you gain a number of panache points equal to your Charisma modifier (minimum 1). Your panache goes up or down throughout the day, but usually cannot go higher than your Charisma modifier (minimum 1), though feats and magic items can affect this maximum. You spend panache to accomplish deeds, and regain panache in the following ways.</p>
<p>Each time you confirm a critical hit, you regain 1 panache point. Confirming a critical hit on a <Link to="/misc/helpless">helpless</Link> or unaware creature or a creature that has fewer Hit Dice than <Link to="/misc/half">half</Link> your character level doesn't restore panache.</p>
<p>When you reduce a creature to 0 or fewer hit points while in combat, you regain 1 panache point. Destroying an unattended object, reducing a helpless or unaware creature to 0 or fewer hit points, or reducing a creature that has fewer Hit Dice than half your character level to 0 or fewer hit points doesn't restore any panache.</p>
</Pair>
</Ability>
<Ability id="arc-ranger-hooded_champion-deeds" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-hooded_champion-deeds">Deeds</Pair>
<Pair title="At 1st Level">The hooded champion gains the swashbuckler's <Link to="/swashdeed/derring_do">derring-do</Link> and <Link to="/swashdeed/dodging_panache">dodging panache</Link> deeds, as well as the <em>dead aim</em> deed, below.</Pair>
<Pair title="At 3rd Level">The hooded champion gains the swashbuckler's <Link to="/swashdeed/kip_up">kip-up</Link> deed, as well as the <em>hooded champion's initiative</em> deed below.</Pair>
<Pair title="Special">For all deeds, treat the hooded champion's ranger level as his swashbuckler level.</Pair>
</Ability>
<Ability id="arc-ranger-hooded_champion-dead-aim-ex" extraClasses="subAbility" icon={["smoking-finger"]}>
<Pair single id="arc-ranger-hooded_champion-dead-aim-ex">Dead Aim (Ex)</Pair>
<Pair title="At 1st Level">The hooded champion's can spend 1 panache point when making a single ranged attack (not a full attack) with a bow to make a ranged touch attack instead. The target must be in the bow's first range increment.</Pair>
</Ability>
<Ability id="arc-ranger-hooded_champion-hooded-champions-initiative-ex" extraClasses="subAbility" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-ranger-hooded_champion-hooded-champions-initiative-ex">Hooded Champion's Initiative (Ex)</Pair>
<Pair title="At 3rd Level">While the hooded champion has at least 1 panache point, he gains a +2 bonus on initiative checks. In addition, if he has the <Link to="/feat/quick_draw">Quick Draw</Link> feat, his hands are free and unrestrained, and his weapon isn't hidden, he can draw a single bow as part of the initiative check.</Pair>
</Ability>
<Ability id="arc-ranger-hooded_champion-combat-style" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-ranger-hooded_champion-combat-style">Combat Style</Pair>
<Pair hl title="Replaces">Wild empathy, endurance, evasion, improved evasion</Pair>
<Pair title="At 2nd Level">The hooded champion must select the archery <Link to="/ability/combat_styles">combat style</Link>.</Pair>
<Pair title="At 9th Level">The hooded champion gains the <Link to="/swashdeed/swashbucklers_grace">swashbuckler's grace</Link> and <Link to="/swashdeed/evasive">evasive</Link> deeds.</Pair>
<Pair title="At 16th Level">The hooded champion gains the <Link to="/swashdeed/swashbucklers_edge">swashbuckler's edge</Link> and <Link to="/swashdeed/cheat_death">cheat death</Link> deeds.</Pair>
</Ability>
</>};
const _horse_lord = {title: "Horse Lord", jsx: <><h2 id="arc-ranger-horse_lord-horse-lord">Horse Lord</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 125</Link><br/>Rangers of the plains use horses or other riding beasts to hunt their lands, forging a near-mystical relationship with their mounts. Horse lords are unparalleled mounted combatants, the envy of even the most dedicated cavalier. Though called "horse lords" as a generic term, these rangers are not restricted to horses for their animal companions - any creature the ranger can ride is included in these abilities. A horse lord has the following class features.</p>
<Ability id="arc-ranger-horse_lord-combat-style-feat-ex" icon={["broken-shield"]}>
<Pair single id="arc-ranger-horse_lord-combat-style-feat-ex">Combat Style Feat (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Choice">A horse lord must choose the mounted <Link to="/ability/combat_styles">combat style</Link>.</Pair>
</Ability>
<Ability id="arc-ranger-horse_lord-mounted-bond-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-ranger-horse_lord-mounted-bond-ex">Mounted Bond (Ex)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">The horse lord forms a bond with an animal he can use as a mount, which becomes his <Link to="/sidekick/animal_companion">animal companion</Link>. A Medium ranger can select a <Link to="/companion/camel">camel</Link> or a <Link to="/companion/horse">horse</Link>. A small ranger can select a <Link to="/companion/pony">pony</Link> or <Link to="/companion/wolf">wolf</Link>, but can also select a <Link to="/companion/boar">boar</Link> or <Link to="/companion/dog">dog</Link> if he is at least 7th level. This ability functions like the druid <Link to="/ability/animal_companion">animal companion</Link> ability except that the ranger's effective druid level is equal to his ranger level - 3.</Pair>
<Pair title="Passive Ability">The ranger gains a +2 bonus on Handle Animal and Ride checks with his animal companion mount.</Pair>
</Ability>
<Ability id="arc-ranger-horse_lord-strong-bond-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-horse_lord-strong-bond-ex" flavor="The horse lord strengthens his bond with his mount.">Strong Bond (Ex)</Pair>
<Pair hl title="Replaces">Camouflage</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">The ranger's effective druid level for his mount is now equal to his ranger level.</Pair>
</Ability>
<Ability id="arc-ranger-horse_lord-spiritual-bond-su" icon={["upgrade","shield-reflect"]}>
<Pair single id="arc-ranger-horse_lord-spiritual-bond-su">Spiritual Bond (Su)</Pair>
<Pair hl title="Replaces">Hide in plain sight</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">The horse lord can grant his animal companion <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to his ranger level once per day. While these temporary hit points last, when his mount is within 30 feet of the him, he can choose to share the damage taken by his mount as if using <Link to="/spell/shield_other">shield other</Link>.</Pair>
</Ability>
</>};
const _ilsurian_archer = {title: "Ilsurian Archer", jsx: <><h2 id="arc-ranger-ilsurian_archer-ilsurian-archer">Ilsurian Archer</h2>
<p><strong>Sources</strong> <Link to="/source/weapon_masters_handbook">Weapon Master's Handbook pg. 6</Link><br/>Ilsurian archers maintain the strong tradition of archery first developed by soldiers in the service of Ilsur, who raised a small army with which he intended to overthrow the monarch of Korvosa after the fall of the Chelish Empire. Though Ilsur's Arena teaches only the basics of these techniques, a few dedicated students strive toward true mastery in each generation.</p>
<Ability id="arc-ranger-ilsurian_archer-bullseye-shot-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-ilsurian_archer-bullseye-shot-ex">Bullseye Shot (Ex)</Pair>
<Pair hl title="Replaces">Track, wild empathy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">An Ilsurian archer gains <Link to="/feat/bullseye_shot">Bullseye Shot</Link> as a bonus feat. He need not meet its prerequisites.</Pair>
</Ability>
<Ability id="arc-ranger-ilsurian_archer-archery-style-ex" icon={["broken-shield"]}>
<Pair single id="arc-ranger-ilsurian_archer-archery-style-ex">Archery Style (Ex)</Pair>
<Pair hl title="Alters">Combat style</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Choice">An Ilsurian archer must select the archery <Link to="/ability/combat_styles">combat style</Link>.</Pair>
</Ability>
<Ability id="arc-ranger-ilsurian_archer-vicious-aim-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-ilsurian_archer-vicious-aim-ex">Vicious Aim (Ex)</Pair>
<Pair hl title="Replaces">Spellcasting ability</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">An Ilsurian archer adds half his highest <em>favored enemy</em> bonus to all attack rolls and damage rolls for attacks made with ranged weapons. This does not stack with his normal <em>favored enemy</em> bonus when targeting a creature that qualifies as a <em>favored enemy.</em></Pair>
</Ability>
<Ability id="arc-ranger-ilsurian_archer-iomedaes-influence-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-ilsurian_archer-iomedaes-influence-ex">Iomedae's Influence (Ex)</Pair>
<Pair hl title="Replaces">Swift tracking</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">An Ilsurian archer gains <Link to="/feat/weapon_focus">Weapon Focus</Link> (longsword) as a bonus feat, due to the influence the church of <Link to="/faith/iomedae">Iomedae</Link> has over Ilsurian causes.</Pair>
</Ability>
<Ability id="arc-ranger-ilsurian_archer-pinpoint-targeting-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-ilsurian_archer-pinpoint-targeting-ex">Pinpoint Targeting (Ex)</Pair>
<Pair hl title="Replaces">Quarry</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">An Ilsurian ranger gains <Link to="/feat/pinpoint_targeting">Pinpoint Targeting</Link> as a bonus feat, even if he does not meet its prerequisites.</Pair>
</Ability>
<Ability id="arc-ranger-ilsurian_archer-quarry-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-ilsurian_archer-quarry-ex">Quarry (Ex)</Pair>
<Pair hl title="Replaces">Improved quarry</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Ability">An Ilsurian ranger gains the <em>quarry</em> class feature.</Pair>
</Ability>
</>};
const _infiltrator = {title: "Infiltrator", jsx: <><h2 id="arc-ranger-infiltrator-infiltrator">Infiltrator</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 125</Link><br/>Some rangers study their <em>favored enemies</em> and learn their ways, applying this knowledge to their own abilities and using their foes' strengths against them. Infiltrators are willing to walk a mile in an enemy's shoes so as to learn eveything there is to know about their foes in order to more effectively hunt and kill them.</p>
<Ability id="arc-ranger-infiltrator-adaptation-ex" extraClasses="hasSubs" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-adaptation-ex" flavor="An infiltrator learns how to copy the unusual abilities of his prey.">Adaptation (Ex)</Pair>
<Pair hl title="Replaces">Favored terrain</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">10 minutes/day per ranger level; these minutes need not be consecutive, but they must be spent in 10-minute increments</Pair>
<Pair title="Ability">He chooses one type of creature he has selected as a <em>favored enemy,</em> such as "aberrations." The ranger selects one ability or feat from the adaptation list for that type (see below). If the adaptation requires the ranger to make a more specific choice (such as what skill to use with <Link to="/feat/skill_focus">Skill Focus</Link>), this choice is permanent and cannot be changed.</Pair>
<Pair title="At 8th Level">The ranger chooses another one of his <em>favored enemy</em> types and selects one adaptation from that type's list, as well as an additional adaptation from any one list of a creature type he's selected (including the one just chosen, if so desired).</Pair>
<Pair title="At 13th Level">The ranger chooses another one of his <em>favored enemy</em> types and selects one adaptation from that type's list, as well as an additional adaptation from any one list of a creature type he's selected (including the one just chosen, if so desired).</Pair>
<Pair title="At 15th Level">The ranger chooses another one of his <em>favored enemy</em> types and selects one adaptation from that type's list, as well as an additional adaptation from any one list of a creature type he's selected (including the one just chosen, if so desired).</Pair>
<Pair title="Special">The infiltrator can only use one adaptation at a time. The ranger can use the <em>camouflage</em> and <em>hide in plain sight</em> class features whenever he is using adaptations.</Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-aberration" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-aberration">Aberration</Pair>
<Pair title="Choice"><Link to="/umr/amphibious">amphibious</Link>, darkvision 60 ft., <Link to="/feat/iron_will">Iron Will</Link>, natural armor +2.</Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-animal" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-animal">Animal</Pair>
<Pair title="Choice">climb 15 ft., darkvision 60 ft., <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, low-light vision, natural armor (+2), swim 15 ft.</Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-construct" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-construct">Construct</Pair>
<Pair title="Choice">darkvision 60 ft., Great Fortitude, Lightning Reflexes, low-light vision.</Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-dragon" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-dragon">Dragon</Pair>
<Pair title="Choice">darkvision 60 ft., Great Fortitude, Iron Will, Lightning Reflexes, low-light vision, <Link to="/feat/lunge">Lunge</Link>.</Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-fey" extraClasses="subAbility" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="arc-ranger-infiltrator-fey">Fey</Pair>
<Pair title="Choice">Iron Will, Lightning Reflexes, low-light vision.</Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-humanoid-aquatic" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-humanoid-aquatic">Humanoid (aquatic)</Pair>
<Pair title="Choice">low-light vision, natural armor +2, darkvision, swim 15 ft.</Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-humanoid-dwarf" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-humanoid-dwarf">Humanoid (dwarf)</Pair>
<Pair title="Choice">darkvision 60 ft., <em><Link to="/race/dwarf">defensive training</Link>, greed, hatred, hardy, slow and steady, stability, stonecunning, weapon familiarity.</em></Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-humanoid-elf" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-humanoid-elf">Humanoid (elf)</Pair>
<Pair title="Choice"><em><Link to="/race/half_elf">elf</Link> blood,</em> low-light vision, <em><Link to="/race/elven">elven</Link> immunities, elven magic, keen senses,</em> Skill Focus (choose one skill), <em>weapon familiarity.</em></Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-humanoid-giant" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-humanoid-giant">Humanoid (giant)</Pair>
<Pair title="Choice">low-light vision, Lunge, natural armor +2, <Link to="/umr/resist">resist</Link> energy 10 (choose cold, electricity, or fire), <Link to="/feat/throw_anything">Throw Anything</Link>.</Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-humanoid-gnoll" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-humanoid-gnoll">Humanoid (gnoll)</Pair>
<Pair title="Choice">darkvision 60 ft., <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link> (<Link to="/eq-weapon/dire_flail">dire flail</Link>), natural armor +2.</Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-humanoid-gnome" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-humanoid-gnome">Humanoid (gnome)</Pair>
<Pair title="Choice">defensive training, <em><Link to="/race/gnome">gnome</Link> magic, hatred, illusion resistance, keen senses, low-light vision, obsessive, weapon familiarity.</em></Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-humanoid-goblinoid" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-humanoid-goblinoid">Humanoid (goblinoid)</Pair>
<Pair title="Choice">darkvision 60 ft., goblin fast,<sup><InnerLink showBacklink="backlink-arc-ranger-infiltrator-fake-fn-1" id="arc-ranger-infiltrator-fake-fn-1" data-hash-target to="arc-ranger-infiltrator-fake-fn-1-target">1</InnerLink></sup> Skill Focus (Stealth), natural armor (+2).</Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-humanoid-halfling" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-humanoid-halfling">Humanoid (halfling)</Pair>
<Pair title="Choice"><em>fearless, <Link to="/race/halfling">halfling</Link> luck, keen senses, sure-footed, weapon familiarity.</em></Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-humanoid-human" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-humanoid-human">Humanoid (human)</Pair>
<Pair title="Choice">Great Fortitude, Iron Will, Lightning Reflexes, Skill Focus (choose one skill).</Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-humanoid-orc" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-humanoid-orc">Humanoid (orc)</Pair>
<Pair title="Choice">darkvision 60 ft., <Link to="/umr/ferocity">ferocity</Link>, <em><Link to="/race/half_orc">intimidating</Link>, orc blood, weapon familiarity.</em></Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-humanoid-reptilian" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-humanoid-reptilian">Humanoid (reptilian)</Pair>
<Pair title="Choice">darkvision 60 ft., <em>kobold fast</em> (as goblin fast<sup><InnerLink showBacklink="backlink-arc-ranger-infiltrator-fake-fn-1.2" id="arc-ranger-infiltrator-fake-fn-1.2" data-hash-target to="arc-ranger-infiltrator-fake-fn-1-target">1</InnerLink></sup>), <Link to="/monster/lizardfolk">lizardfolk</Link> <em>hold breath,</em> natural armor +2, Skill Focus (choose Acrobatics, Perception, or Stealth).</Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-magical-beast" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-magical-beast">Magical Beast</Pair>
<Pair title="Choice">darkvision 60 ft., Great Fortitude, low-light vision, natural armor +2.</Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-monstrous-humanoid" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-monstrous-humanoid">Monstrous Humanoid</Pair>
<Pair title="Choice">darkvision 60 ft., Lightning Reflexes, low-light vision, natural armor +2.</Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-ooze" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-ooze">Ooze</Pair>
<Pair title="Choice">acid resistance 10, Great Fortitude, Iron Will, Skill Focus (choose Climb, Escape Artist, or Perception).</Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-outsider" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-outsider">Outsider</Pair>
<Pair title="Choice">darkvision 60 ft., energy resistance 5 (choose one type of energy from acid, cold, electricity, or fire), Great Fortitude, Iron Will, Lightning Reflexes.</Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-plant" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-plant">Plant</Pair>
<Pair title="Choice">low-light vision, Great Fortitude, Iron Will.</Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-undead" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-undead">Undead</Pair>
<Pair title="Choice">darkvision 60 ft., Great Fortitude, Iron Will, natural armor (+2). Skill Focus (Stealth).</Pair>
</Ability>
<Ability id="arc-ranger-infiltrator-vermin" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-infiltrator-vermin">Vermin</Pair>
<Pair title="Choice">climb 15 ft., darkvision 60 ft., Great Fortitude, Iron Will, swim 15 ft.</Pair>
</Ability>
<section data-footnotes><h3 id="arc-ranger-infiltrator-label">Footnotes</h3><ol>
<li id="arc-ranger-infiltrator-fake-fn-1-target"><p>"Goblin fast" is not listed anywhere. It likely refers to a <Link to="/monster/goblin">goblin's</Link> base speed of 30 feet, which is +10 feet faster than most Small creatures and races. Consult your GM. <InnerLink aria-label="Back to reference 1" id="backlink-arc-ranger-infiltrator-fake-fn-1" data-hash-target to="arc-ranger-infiltrator-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-arc-ranger-infiltrator-fake-fn-1.2" data-hash-target to="arc-ranger-infiltrator-fake-fn-1.2">↩<sup>2</sup></InnerLink></p></li>
</ol></section></>};
const _jungle_lord = {title: "Jungle Lord", jsx: <><h2 id="arc-ranger-jungle_lord-jungle-lord">Jungle Lord</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_worldscape_4">Pathfinder Worldscape #4 pg. 25</Link><br/>Whether raised from birth under the jungle canopy in a native tribe or settlement, marooned as a child and reared by animals, or simply an ordinary person lost in the trackless tangle and forced to thrive in the wilderness or die, jungle lords are tempered by their harsh and unforgiving environments into something more than ordinary men and women. Their ordeals and experiences combine the physical prowess gained as a result of life hunting dangerous beasts with the wisdom gained from surviving countless natural dangers to earn them the respect of the jungle's denizens, man and animal alike.</p>
<Ability icon={["skills"]} id="arc-ranger-jungle_lord-undefined">
<Pair id="arc-ranger-jungle_lord-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX), <Link to="/skill/linguistics">Linguistics</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering), Spellcraft</Pair></Ability>
<Ability id="arc-ranger-jungle_lord-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-ranger-jungle_lord-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Weapon and armor proficiencies</Pair>
<Pair title="Ability">A jungle lord is proficient with the <Link to="/eq-weapon/dagger">dagger</Link>, <Link to="/eq-weapon/battleaxe">battleaxe</Link>, <Link to="/eq-weapon/blowgun">blowgun</Link>, <Link to="/eq-weapon/bolas">bolas</Link>, <Link to="/eq-weapon/club">club</Link>, <Link to="/eq-weapon/greatclub">greatclub</Link>, <Link to="/eq-weapon/handaxe">handaxe</Link>, <Link to="/eq-weapon/kukri">kukri</Link>, <Link to="/eq-weapon/lasso">lasso</Link>, <Link to="/eq-weapon/longbow">longbow</Link>, <Link to="/eq-weapon/longspear">longspear</Link>, <Link to="/eq-weapon/net">net</Link>, <Link to="/eq-weapon/quarterstaff">quarterstaff</Link>, <Link to="/eq-weapon/shortbow">shortbow</Link>, <Link to="/eq-weapon/shortspear">shortspear</Link>, <Link to="/eq-weapon/sling">sling</Link>, <Link to="/eq-weapon/spear">spear</Link>, and <Link to="/eq-weapon/whip">whip</Link>. Jungle Lords are not proficient with armor and shields.</Pair>
</Ability>
<Ability id="arc-ranger-jungle_lord-bonus-language" icon={["info"]}>
<Pair single id="arc-ranger-jungle_lord-bonus-language">Bonus Language</Pair>
<Pair title="Info">A jungle lord's language options include Sylvan, the language of woodland creatures.</Pair>
</Ability>
<Ability id="arc-ranger-jungle_lord-animal-focus-su" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-jungle_lord-animal-focus-su">Animal Focus (Su)</Pair>
<Pair hl title="Replaces">Favored enemy</Pair>
<Pair title="Usage">1 minute/day per ranger level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Swift Action">A jungle lord can take on the aspect of an animal, gaining a bonus or a special ability based on the type of animal emulated. This ability functions as the hunter's <Link to="/ability/animal_focus">animal focus</Link> class feature, though it applies only to the jungle lord and not an animal companion.</Pair>
<Pair title="Special">He can emulate only one animal at a time.</Pair>
</Ability>
<Ability id="arc-ranger-jungle_lord-favored-terrain-ex" icon={["broken-shield"]}>
<Pair single id="arc-ranger-jungle_lord-favored-terrain-ex">Favored Terrain (Ex)</Pair>
<Pair hl title="Alters">Favored terrain</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Choice">A jungle lord must select jungle as his first <em>favored terrain.</em></Pair>
</Ability>
<Ability id="arc-ranger-jungle_lord-hunters-bond-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-ranger-jungle_lord-hunters-bond-ex">Hunter's Bond (Ex)</Pair>
<Pair hl title="Alters">Hunter's bond</Pair>
<Pair title="Ability">A jungle lord forms a close bond with an <Link to="/sidekick/animal_companion">animal companion</Link>. This ability functions like the druid <Link to="/ability/animal_companion">animal companion</Link> ability except that the jungle lord's effective druid level is equal to his ranger level - 3.</Pair>
<Pair title="Passive Ability">The jungle lord gains a +2 bonus on <em>wild empathy</em> and Handle Animal checks regarding his animal companion.</Pair>
<Pair title="Choice">A jungle lord can choose his companion from the following list: <Link to="/companion/ape">ape</Link>, <Link to="/companion/axe_beak">axe beak</Link>, <Link to="/companion/baboon">baboon</Link>, <Link to="/companion/bear">bear</Link>, <Link to="/companion/big_cat">big cat</Link> (lion, tiger), <Link to="/companion/bird">bird</Link>, <Link to="/companion/boar">boar</Link>, <Link to="/companion/crocodile">crocodile</Link> (alligator), dinosaur (<Link to="/companion/deinonychus">deinonychus</Link>, <Link to="/companion/pteranodon">pteranodon</Link>, <Link to="/companion/velociraptor">velociraptor</Link>), <Link to="/companion/dog">dog</Link>, <Link to="/companion/elephant">elephant</Link>, <Link to="/companion/giant_chameleon">giant chameleon</Link>, <Link to="/companion/giant_gecko">giant gecko</Link>, <Link to="/companion/giant_vulture">giant vulture</Link>, <Link to="/companion/giraffe">giraffe</Link>, <Link to="/companion/hippopotamus">hippopotamus</Link>, <Link to="/companion/moa">moa</Link>, <Link to="/companion/monitor_lizard">monitor lizard</Link>, <Link to="/companion/rhinoceros">rhinoceros</Link>, <Link to="/companion/small_cat">small cat</Link> (cheetah, leopard), snake (<Link to="/companion/constrictor">constrictor</Link>, <Link to="/companion/viper">viper</Link>), or <Link to="/companion/wolf">wolf</Link></Pair>
<Pair title="Special">The jungle lord can have up to four animal companions, but he must divide up his efiective druid level between his companions to determine the abilities of each companion. For example, a jungle lord with an effective druid level of 4 can have one 4th-level companion, two 2nd-level companions, or one lst-level and one 3rd-level companion. Each time a jungle lord's effective druid level increases, he must decide how to allocate the increase among his animal companions (including the option of adding a new 1st-level companion). Once an effective druid level is allocated to a particular companion, it cannot be redistributed while that companion is in the jungle lord's service (he must release a companion or wait until a companion dies to allocate its levels to another companion).</Pair>
</Ability>
<Ability id="arc-ranger-jungle_lord-hardened-by-nature-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-jungle_lord-hardened-by-nature-ex" flavor="The jungle lord's keen senses make him harder to hit and more able to withstand those blows that manage to sneak by his defenses.">Hardened by Nature (Ex)</Pair>
<Pair hl title="Replaces">Spellcasting ability</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">When unarmored and unencumbered, the jungle lord can add his Wisdom bonus (if any) to his AC and his CMB.</Pair>
<Pair title="At 6th Level">The jungle lord gains a +1 dodge bonus to AC.</Pair>
<Pair title="At 9th Level">The dodge bonus becomes +2.</Pair>
<Pair title="At 12th Level">The dodge bonus increases to +3.</Pair>
<Pair title="At 15th Level">The dodge bonus becomes +4.</Pair>
<Pair title="At 18th Level">The dodge bonus increases to +5.</Pair>
<Pair title="Special">He loses these bonuses when he wears any armor, when he carries a shield, or when he carries a medium or heavy load.</Pair>
</Ability>
<Ability id="arc-ranger-jungle_lord-brachiation-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-ranger-jungle_lord-brachiation-ex">Brachiation (Ex)</Pair>
<Pair hl title="Replaces">Favored terrain gained at 5th level</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">1 round/day per ranger level; these rounds need not be consecutive</Pair>
<Pair title="Free Action">A jungle lord can climb with a climb speed equal to his land speed, and gains a bonus on Acrobatics checks equal to his ranger level.</Pair>
</Ability>
<Ability id="arc-ranger-jungle_lord-inspired-moment-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-jungle_lord-inspired-moment-ex">Inspired Moment (Ex)</Pair>
<Pair hl title="Replaces">Quarry, improved quarry</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Free Action">The jungle lord can have an <em>inspired moment</em> once per day. The jungle lord gains the following benefits until the end of his next turn. His speed increases by 10 feet. He can take an extra <strong className="hl">move</strong> or <strong className="hl">swift action</strong> on his turn. He gains a +4 bonus to AC and on attack rolls, skill checks, or ability checks. Finally, he automatically confirms any critical threat he scores.</Pair>
<Pair title="At 19th Level">He can use this ability one additional time per day.</Pair>
</Ability>
<Ability id="arc-ranger-jungle_lord-strong-bond-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-jungle_lord-strong-bond-ex" flavor="The jungle lord strengthens his bond with his animal companions.">Strong Bond (Ex)</Pair>
<Pair hl title="Replaces">Camouflage</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">The jungle lord's effective druid level for his animal companions is now equal to his ranger level; he can immediately allocate these additional levels to his companions as he sees fit.</Pair>
</Ability>
<Ability id="arc-ranger-jungle_lord-victory-cry-ex" icon={["upgrade","shield-reflect"]}>
<Pair single id="arc-ranger-jungle_lord-victory-cry-ex" flavor="The jungle lord's signature battle cry rallies his animal friends to greater combat prowess and hardiness.">Victory Cry (Ex)</Pair>
<Pair hl title="Replaces">Master hunter</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Usage">Wisdom modifier times/day</Pair>
<Pair title="Standard Action">The jungle lord can shout his victory cry. Each time he does so, his animal companions within 200 feet gain a +6 morale bonus on attack rolls and to AC, and all threatened critical hits made by his animal companions are automatically confirmed. Furthermore, following his victory cry, the jungle lord can apply a number of <em>animal aspects</em> equal to his Wisdom modifier when using animal focus, rather than the usual limit of one. These effects last for 1 minute.</Pair>
</Ability>
</>};
const _lantern_lighter = {title: "Lantern Lighter", jsx: <><h2 id="arc-ranger-lantern_lighter-lantern-lighter">Lantern Lighter</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 113</Link>, <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 42</Link><br/>Lantern lighters were originally entrusted with secretly eliminating the drow and quarantining any knowledge of their existence, but in the new <Link to="/rule/lantern_bearers">Lantern Bearer</Link> era, the lantern lighters have refocused their efforts on helping to rescue those imprisoned by the drow, or even to help individual drow who seek to escape the cruelties of their society for a chance at redemption on the surface. Of course, escape from drow society is only the beginning of a drow's long and fraught path to redemption, and even the kindest or most repentant drow are likely to face prejudice from most of those who recognize her origins. In addition to their rescue efforts, lantern lighters often serve as sponsors for escapees and work to create pockets of civilization where redeemed drow can live in relative peace and safety by encouraging surface dwellers to cast aside the lurking shadows of prejudice and fear.</p>
<p>While the vast majority of lantern lighters are <Link to="/race/elves">elves</Link> from Kyonin, a few non-elven members of the organization have proven themselves trustworthy and dedicated enough to join their ranks. As their efforts to spread the light to other regions beyond Kyonin grow, lantern lighters of other races are beginning to round out the order's numbers, particularly in areas and regions that suffer under oppressive regimes.</p>
<Ability id="arc-ranger-lantern_lighter-daylight" icon={["spell-book"]}>
<Pair single id="arc-ranger-lantern_lighter-daylight">Daylight</Pair>
<Pair hl title="Alters">Spells</Pair>
<Pair title="Ability">A lantern lighter treats <Link to="/spell/daylight">daylight</Link> as a 3rd-level ranger spell.</Pair>
</Ability>
<Ability id="arc-ranger-lantern_lighter-enhanced-vision-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-lantern_lighter-enhanced-vision-ex" flavor="A lantern lighter hones his senses to better combat subterranean enemies.">Enhanced Vision (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Ability">He gains low-light vision. If the lantern lighter already has low-light vision, he can instead see three times as far as humans in areas of dim light.</Pair>
</Ability>
<Ability id="arc-ranger-lantern_lighter-poison-resistance-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-lantern_lighter-poison-resistance-ex">Poison Resistance (Ex)</Pair>
<Pair hl title="Replaces">Endurance</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A lantern lighter gains a +4 bonus on saving throws against poison.</Pair>
</Ability>
<Ability id="arc-ranger-lantern_lighter-favored-terrain-ex" icon={["broken-shield"]}>
<Pair single id="arc-ranger-lantern_lighter-favored-terrain-ex">Favored Terrain (Ex)</Pair>
<Pair hl title="Alters">Favored terrain</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A lantern lighter selects a <em>favored terrain</em> as normal.</Pair>
<Pair title="At 8th Level">The skill bonus and initiative bonus granted in this <em>favored terrain</em> increase by 2.</Pair>
<Pair title="At 13th Level">The skill bonus and initiative bonus granted in this <em>favored terrain</em> increase by 2.</Pair>
<Pair title="At 18th Level">The skill bonus and initiative bonus granted in this <em>favored terrain</em> increase by 2.</Pair>
</Ability>
<Ability id="arc-ranger-lantern_lighter-cavern-stride-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-lantern_lighter-cavern-stride-ex">Cavern Stride (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A lantern lighter's movement is unimpeded by nonmagical <Link to="/rule/difficult_terrain">difficult terrain</Link> underground and nonmagical webs.</Pair>
</Ability>
<Ability id="arc-ranger-lantern_lighter-darkvision-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-lantern_lighter-darkvision-ex">Darkvision (Ex)</Pair>
<Pair hl title="Replaces">8th-level favored terrain</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A lantern lighter's senses fully attune to the darkness, granting him darkvision to a distance of 60 feet. If the lantern lighter already has darkvision, its range increases by 30 feet.</Pair>
</Ability>
<Ability id="arc-ranger-lantern_lighter-poison-immunity-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-lantern_lighter-poison-immunity-ex">Poison Immunity (Ex)</Pair>
<Pair hl title="Replaces">Camouflage</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">A lantern lighter gains immunity to poison.</Pair>
</Ability>
<Ability id="arc-ranger-lantern_lighter-stunning-light-su" icon={["armor-downgrade"]}>
<Pair single id="arc-ranger-lantern_lighter-stunning-light-su" flavor="A lantern lighter learns to increase the effectiveness of bright light on creatures with light blindness.">Stunning Light (Su)</Pair>
<Pair hl title="Replaces">Favored terrain gained at 13th level</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability"><em>Daylight</em> spells cast by the lantern lighter or other sources of bright light he wields cause creatures with <Link to="/umr/light_blindness">light blindness</Link> within the area of bright light to become <Link to="/misc/stunned">stunned</Link> for 1 round in addition to being blinded.</Pair>
</Ability>
<Ability id="arc-ranger-lantern_lighter-camouflage-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-lantern_lighter-camouflage-ex">Camouflage (Ex)</Pair>
<Pair hl title="Replaces">Hide in plain sight</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">A lantern lighter gains <em>camouflage,</em> as the ranger class feature.</Pair>
</Ability>
<Ability id="arc-ranger-lantern_lighter-paralyzing-light-su" icon={["armor-downgrade"]}>
<Pair single id="arc-ranger-lantern_lighter-paralyzing-light-su" flavor="A lantern lighter can stop light-blind enemies in their tracks, often gaining a great edge in battle.">Paralyzing Light (Su)</Pair>
<Pair hl title="Replaces">Favored terrain gained at 18th level</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Ability"><em>Daylight</em> spells cast by the lantern lighter or sources of bright light wielded by him cause creatures with light blindness within the area of bright light to become <Link to="/rule/paralyzed">paralyzed</Link> for 1 round in addition to being blinded and stunned.</Pair>
</Ability>
</>};
const _nirmathi_irregular = {title: "Nirmathi Irregular", jsx: <><h2 id="arc-ranger-nirmathi_irregular-nirmathi-irregular">Nirmathi Irregular</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_magic">Inner Sea Magic pg. 37</Link><br/>The forested country of Nirmathas is known for its rangers - skilled trackers, marksmen, and silent stalkers under the leafy canopy. Nirmathas has no formal military, for her people love their freedom and are reluctant to take orders from anyone, so her defense falls to individual scouts and small groups of allied commandos. Many of Nirmathas's rangers take the <Link to="/arc-ranger/guide">guide</Link> or <Link to="/arc-ranger/skirmisher">skirmisher</Link> archetypes, but some focus on the magic of stealth. These irregular troops fight against the frequent invasions by Molthuni soldiers, striking quickly and melting into the green shadows as soon as their opponents rally themselves for a counterattack. A Nirmathi irregular has the following class features.</p>
<Ability id="arc-ranger-nirmathi_irregular-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-ranger-nirmathi_irregular-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Armor and weapon proficiency</Pair>
<Pair title="Ability">A Nirmathi irregular is proficient with all simple and martial weapons and with light armor.</Pair>
</Ability>
<Ability id="arc-ranger-nirmathi_irregular-focused-enemy-ex" icon={["broken-shield"]}>
<Pair single id="arc-ranger-nirmathi_irregular-focused-enemy-ex">Focused Enemy (Ex)</Pair>
<Pair hl title="Alters">Favored enemy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A Nirmathi irregular selects one <em>favored enemy</em> (usually "humanoid [human]"). He does not gain additional <em>favored enemies</em> at higher levels.</Pair>
<Pair title="At 5th Level">The <em>favored enemy</em> bonus becomes +4.</Pair>
<Pair title="At 10th Level">The <em>favored enemy</em> bonus increases to +6.</Pair>
<Pair title="At 15th Level">The <em>favored enemy</em> bonus becomes +8.</Pair>
<Pair title="At 20th Level">The <em>favored enemy</em> bonus increases to +10.</Pair>
<Pair title="Special">This otherwise acts as and replaces the standard <em>favored enemy</em> ability.</Pair>
</Ability>
<Ability id="arc-ranger-nirmathi_irregular-forest-ghost-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-nirmathi_irregular-forest-ghost-ex">Forest Ghost (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A Nirmathi irregular adds a bonus equal to 1/2 his level on all Perception and Survival skill checks he makes while located in forest terrain.<sup><InnerLink showBacklink="backlink-arc-ranger-nirmathi_irregular-fake-fn-1" id="arc-ranger-nirmathi_irregular-fake-fn-1" data-hash-target to="arc-ranger-nirmathi_irregular-fake-fn-1-target">1</InnerLink></sup></Pair>
</Ability>
<Ability id="arc-ranger-nirmathi_irregular-focused-terrain" icon={["broken-shield"]}>
<Pair single id="arc-ranger-nirmathi_irregular-focused-terrain">Focused Terrain</Pair>
<Pair hl title="Alters">Favored terrain</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A Nirmathi irregular selects one <em>favored terrain</em> (usually "forest"). He does not gain additional <em>favored terrains</em> at higher levels.</Pair>
<Pair title="At 8th Level">The <em>favored terrain</em> bonus becomes +4.</Pair>
<Pair title="At 13th Level">The <em>favored terrain</em> bonus increases to +6.</Pair>
<Pair title="At 18th Level">The <em>favored terrain</em> bonus becomes +8.</Pair>
<Pair title="Special">This otherwise acts as and replaces the standard <em>favored enemy</em> ability.</Pair>
</Ability>
<Ability id="arc-ranger-nirmathi_irregular-spells" icon={["spell-book"]}>
<Pair single id="arc-ranger-nirmathi_irregular-spells">Spells</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A Nirmathi irregular increases his number of spells per day by +1 for every spell level. This means the irregular gets at least 1 spell per day as soon as he gains access to a level of spells, even if the ranger's spell table lists 0 under spells per day.</Pair>
<Pair title="Ability">A Nirmathi irregular also learns to draw upon druidic magic, perhaps from association with the druids of Crystalhurst or a natural connection to the magic of the Fangwood. Each day when the ranger prepares spells, he may choose one <Link to="/main/druid_spell">druid spell</Link> and prepare it as if it were on the ranger spell list as a ranger spell of its druid spell level.</Pair>
</Ability>
<section data-footnotes><h3 id="arc-ranger-nirmathi_irregular-label">Footnotes</h3><ol>
<li id="arc-ranger-nirmathi_irregular-fake-fn-1-target"><p>There is no listed minimum, so the Nirmathi irregular starts out with a +0 bonus at 1st level. <InnerLink aria-label="Back to reference 1" id="backlink-arc-ranger-nirmathi_irregular-fake-fn-1" data-hash-target to="arc-ranger-nirmathi_irregular-fake-fn-1">↩</InnerLink></p></li>
</ol></section></>};
const _planar_scout = {title: "Planar Scout", jsx: <><h2 id="arc-ranger-planar_scout-planar-scout">Planar Scout</h2>
<p><strong>Sources</strong> <Link to="/source/planar_adventures">Planar Adventures pg. 17</Link><br/>Planar scouts are rangers specializing in traversing the planes - and surviving their journeys.</p>
<Ability icon={["skills"]} id="arc-ranger-planar_scout-undefined">
<Pair id="arc-ranger-planar_scout-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering)</Pair></Ability>
<Ability id="arc-ranger-planar_scout-planar-empathy-ex" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-ranger-planar_scout-planar-empathy-ex">Planar Empathy (Ex)</Pair>
<Pair hl title="Alters">Wild empathy</Pair>
<Pair title="Ability">A planar scout can use <em>wild empathy</em> only on animals with the <Link to="/subtype/extraplanar">extraplanar</Link> subtype. He can use this ability to influence outsiders with an Intelligence score of 1 or 2, but he takes a -4 penalty on the check.</Pair>
</Ability>
<Ability id="arc-ranger-planar_scout-planar-terrains-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-planar_scout-planar-terrains-ex">Planar Terrains (Ex)</Pair>
<Pair hl title="Alters">Favored terrain</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A planar scout gains a planar terrain. <em>Planar terrains</em> function in all ways like a ranger's <em>favored terrain;</em> he must select a new plane each time he gains a <em>favored terrain.</em></Pair>
</Ability>
<Ability id="arc-ranger-planar_scout-planar-bond-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-planar_scout-planar-bond-su">Planar Bond (Su)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">Rather than forge a bond with an animal or his allies, a planar scout forms a bond with a specific plane. The planar scout becomes infused with the essence of his plane of choice, taking on physical characteristics of denizens native to his chosen plane as well as the abilities listed below.</Pair>
</Ability>
<Ability id="arc-ranger-planar_scout-aligned-plane" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-ranger-planar_scout-aligned-plane">Aligned Plane</Pair>
<Pair title="Ability">If the planar scout selects a plane with an alignment trait, he gains a bonus on attack and damage rolls against outsiders and creatures with the extraplanar subtype whose alignments oppose this alignment trait. This bonus is equal to <Link to="/misc/one_fourth">one-fourth</Link> of his ranger level.</Pair>
</Ability>
<Ability id="arc-ranger-planar_scout-astral-plane" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-ranger-planar_scout-astral-plane">Astral Plane</Pair>
<Pair title="Move-Equivalent Action">Each day, the planar scout can teleport up to 5 feet per ranger level. This must be used in 5-foot increments.</Pair>
<Pair title="At 10th Level">He can do so as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-ranger-planar_scout-ethereal-plane" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-ranger-planar_scout-ethereal-plane">Ethereal Plane</Pair>
<Pair title="Ability">The planar scout can damage incorporeal creatures with mundane weapons as if they were <Link to="/magic-enh/ghost_touch">ghost touch</Link> weapons.</Pair>
<Pair title="At 10th Level">He can inflict critical hits and deal <Link to="/misc/precision_damage">precision damage</Link> to incorporeal creatures.</Pair>
</Ability>
<Ability id="arc-ranger-planar_scout-first-world" extraClasses="subAbility" icon={["heart-plus"]}>
<Pair single id="arc-ranger-planar_scout-first-world">First World</Pair>
<Pair title="Usage">Wisdom modifier times/day</Pair>
<Pair title="Swift Action">A planar scout can gain <Link to="/umr/fast_healing">fast healing</Link> 2 for a number of rounds equal to his ranger level.</Pair>
</Ability>
<Ability id="arc-ranger-planar_scout-plane-of-air" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-planar_scout-plane-of-air">Plane of Air</Pair>
<Pair title="Swift Action">The planar scout can gain a fly speed (average) equal to his base speed for a number of minutes equal to his ranger level (minimum 1 minute). This duration need not be used consecutively.</Pair>
</Ability>
<Ability id="arc-ranger-planar_scout-plane-of-earth" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-planar_scout-plane-of-earth">Plane of Earth</Pair>
<Pair title="Ability">The planar scout gains a bonus to his natural armor. This bonus is equal to one-fourth of his ranger level.</Pair>
</Ability>
<Ability id="arc-ranger-planar_scout-plane-of-fire" extraClasses="subAbility" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-ranger-planar_scout-plane-of-fire">Plane of Fire</Pair>
<Pair title="Usage">1 round/day per ranger level; these rounds need not be consecutive</Pair>
<Pair title="Swift Action">The planar scout can wreathe his body in flames. This grants the planar scout fire resistance 5 and causes his melee attacks to each deal 1d4 additional points of fire damage.</Pair>
<Pair title="At 9th Level">The scout's fire resistance becomes 10.</Pair>
<Pair title="At 14th Level">The scout's fire resistance increases to 15.</Pair>
</Ability>
<Ability id="arc-ranger-planar_scout-plane-of-shadow" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-ranger-planar_scout-plane-of-shadow">Plane of Shadow</Pair>
<Pair title="Ability">The planar scout gains darkvision 60 feet and a +4 bonus on Stealth checks.</Pair>
<Pair title="At 8th Level">The bonus on Stealth checks becomes +4.</Pair>
<Pair title="At 12th Level">The bonus on Stealth checks increases to +6.</Pair>
<Pair title="At 16th Level">The bonus on Stealth checks becomes +8.</Pair>
<Pair title="At 20th Level">The bonus on Stealth checks increases to +10.</Pair>
</Ability>
<Ability id="arc-ranger-planar_scout-plane-of-water" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-planar_scout-plane-of-water">Plane of Water</Pair>
<Pair title="Ability">The planar scout gains the <Link to="/umr/amphibious">amphibious</Link> subtype and a swim speed equal to base speed.</Pair>
</Ability>
<Ability id="arc-ranger-planar_scout-planar-adaptation-su" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="arc-ranger-planar_scout-planar-adaptation-su">Planar Adaptation (Su)</Pair>
<Pair hl title="Replaces">Evasion, improved evasion</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">A planar scout gains <Link to="/spell/planar_adaptation">planar adaptation</Link> when on his bonded plane.</Pair>
<Pair title="At 16th Level">He confers this protection to all allies within a 30-foot <Link to="/misc/spread">spread</Link>.</Pair>
</Ability>
<h3><Link to="/rule/planar_terrains">Planar Terrains</Link></h3><p>A staggering array of terrains await exploration in the Great Beyond. Some are akin to the forests, mountains, oceans, and plains of Material Plane worlds, but others are unlike anything found there, such as the ghostly reaches of the Ethereal Plane, the living and horrific reaches of the deep Abyss, the constantly burning inferno of the Plane of Fire, and the life-draining nothingness of the Negative Energy Plane.</p>
<p>Some classes, like the ranger, interact directly with terrain, and class abilities like <em>favored terrain</em> can become complicated in a plane-hopping campaign. In games that are largely limited to the Material Plane, the planes terrain category works fine, but if you intend to run a game set on another plane, you should consider breaking up that category into specific planes (thus, a ranger would choose Heaven or Ethereal Plane, or even a demiplane like Leng as a <em>favored terrain</em>), or simply doing away with the planes category entirely. With this latter solution, you should work with ranger players to help them anticipate the terrains featured in your upcoming campaign, with new categories like crystalline (for realms in the Plane of Earth or under Elysium, where immense crystal formations are common), living (for truly sentient realms like portions of the Abyss), or void (for empty reaches in the Astral Plane or the energy planes) potentially becoming new options for rangers to select from.</p>
</>};
const _poison_darter = {title: "Poison Darter", jsx: <><h2 id="arc-ranger-poison_darter-poison-darter">Poison Darter</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 9</Link><br/>In dense jungles, foliage and tight spaces hinder all but the most deceptively humble weapons: <Link to="/eq-weapon/blowgun">blowguns</Link> and poison.</p>
<Ability id="arc-ranger-poison_darter-debilitating-venom-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-poison_darter-debilitating-venom-ex" flavor="A poison darter can concoct potent toxins that he can apply to his weapons.">Debilitating Venom (Ex)</Pair>
<Pair hl title="Replaces">Favored enemy, master hunter</Pair>
<Pair title="Usage">A number of times/day equal to <Link to="/misc/half">half</Link> his ranger level + his Wisdom modifier</Pair>
<Pair title="Info">If he has the <Link to="/race/grippli">toxic skin alternate racial trait</Link>, he can expend a daily use of that poison to employ his <em>debilitating venom</em> ability an additional time.</Pair>
<Pair title="Ability"><p>The <em>debilitating venom</em> functions only for the poison darter and becomes inert if not used within 1 hour. Creating a <em>debilitating venom</em> is a <strong className="hl">standard action</strong>, and it can be applied to a weapon as a <strong className="hl">move action</strong>.</p>
<div className="sideNoteWrap"><ScrollContainer id="arc-ranger-poison_darter--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={9} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th colSpan={4} scope="col" className="title">Debilitating Venom</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the the poison darter's level + his Wis modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 4 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d3 <Link to="/rule/dex_damage">Dex damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div></Pair>
<Pair title="At 5th Level">The frequency increases to 6 rounds, and the toxin <Link to="/misc/sicken">sickens</Link> a creature for 1 round every time it fails its saving throw to resist the poison.</Pair>
<Pair title="At 10th Level">The the poison's Dexterity damage increases to 1d4, and two successful saving throws are needed to cure the poison.</Pair>
<Pair title="At 15th Level">The poison dart can choose to deal Strength, Dexterity, or Constitution damage with the <em>debilitating venom,</em> selected when he creates the toxin.</Pair>
<Pair title="At 20th Level">The poison's damage die increases to 1d6.</Pair>
</Ability>
<Ability id="arc-ranger-poison_darter-poison-use-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-poison_darter-poison-use-ex">Poison Use (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Ability">A poison darter is trained in the use of poison and cannot accidentally poison himself when applying poison to a weapon.</Pair>
</Ability>
<Ability id="arc-ranger-poison_darter-poison-style-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-poison_darter-poison-style-ex">Poison Style (Ex)</Pair>
<Pair hl title="Alters">Combat style feat</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">In place of a combat style feat, a poison darter can select any <Link to="/ability/rogue_talents">rogue talent</Link> that modifies sneak attacks or any alchemist <Link to="/ability/discovery">discovery</Link> that modifies poisons he creates and applies, using his Wisdom modifier in place of his Intelligence modifier and his ranger level in place of his alchemist or rogue level for the purpose of meeting prerequisites. He can use the <Link to="/discovery/sticky_poison">sticky poison</Link> discovery to apply a single dose of poison to two blowgun darts without reducing its potency.</Pair>
</Ability>
<Ability id="arc-ranger-poison_darter-precise-dart-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-poison_darter-precise-dart-ex">Precise Dart (Ex)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A poison darter gains a <Link to="/ability/sneak_attack">sneak attack</Link> identical to the rogue class feature, but only when attacking with a blowgun. This deals 1d6 extra points of damage.</Pair>
<Pair title="At 6th Level">The sneak attack damage becomes 2d6 damage.</Pair>
<Pair title="At 8th Level">The sneak attack damage increases to 3d6 damage.</Pair>
<Pair title="At 10th Level">The sneak attack damage becomes 4d6 damage.</Pair>
<Pair title="At 12th Level">The sneak attack damage increases to 5d6 damage.</Pair>
<Pair title="At 14th Level">The sneak attack damage becomes 6d6 damage.</Pair>
<Pair title="At 16th Level">The sneak attack damage increases to 7d6 damage.</Pair>
<Pair title="At 18th Level">The sneak attack damage becomes 8d6 damage.</Pair>
<Pair title="At 20th Level">The sneak attack damage increases to 9d6 damage.</Pair>
</Ability>
</>};
const _raven_master = {title: "Raven Master", jsx: <><h2 id="arc-ranger-raven_master-raven-master">Raven Master</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 175</Link><br/>While the <Link to="/rule/silver_ravens">Silver Ravens</Link> adopted their name as a way to honor the group of adventurers who defended Kintargo during the Chelish Civil War, some Silver Ravens have gone even farther, breeding and training actual ravens to serve both as living symbols of the organization and as fearsome weapons against House Thrune and its diabolic servants. These rangers, known as raven masters, eschew a ranger's usual connection to the natural world to form a mystic bond with their birds and to grant both animal and master a number of specialized abilities. Over time, the feathers of these raven companions take on a silvery sheen, causing them to resemble the birds produced by the figurines of wondrous power, which served as the original Silver Ravens' namesake.</p>
<p>Raven masters serve as messengers and spies for the Silver Ravens, using their ravens to scout the border between Ravounel and Cheliax and report any suspicious Thrune troop movements. Outside of Cheliax, raven companions alight on the rooftops and window ledges of palaces and keeps to eavesdrop on tyrants and dictators, feeding these precious secrets to the raven master so that she can more efficiently foment and organize rebellion.</p>
<Ability icon={["skills"]} id="arc-ranger-raven_master-undefined">
<Pair id="arc-ranger-raven_master-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/disguise">Disguise</Link> (CHA), <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> (DEX)</Pair>
<Pair title="Removed Skills">Climb, Heal, Intimidate, Ride, Swim</Pair></Ability>
<Ability id="arc-ranger-raven_master-avian-empathy-ex" icon={["broken-shield"]}>
<Pair single id="arc-ranger-raven_master-avian-empathy-ex">Avian Empathy (Ex)</Pair>
<Pair hl title="Alters">Wild empathy</Pair>
<Pair title="Info">A raven master's <em>wild empathy</em> affects only birds.</Pair>
</Ability>
<Ability id="arc-ranger-raven_master-raven-companion-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-raven_master-raven-companion-ex">Raven Companion (Ex)</Pair>
<Pair hl title="Alters">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A raven master earns the trust and companionship of a particularly large, powerful, and intelligent raven. This ability functions like the druid <Link to="/ability/animal_companion">animal companion</Link> ability, except that the raven master's effective druid level is equal to her ranger level - 3. The raven master must select a <Link to="/companion/bird">bird</Link> as her animal companion. The raven companion starts with an Intelligence score of 3 and can speak one language known by the raven master. In addition to the normal abilities an <Link to="/sidekick/animal_companion">animal companion</Link> gains as the raven master increases in level, the raven companion gains the following abilities.</Pair>
</Ability>
<Ability id="arc-ranger-raven_master-silver-champion-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-ranger-raven_master-silver-champion-ex">Silver Champion (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="At 7th Level">The raven companion takes on a silvery, metallic appearance. It treats all of its natural attacks as though they were magic and silver for the purpose of bypassing damage reduction.</Pair>
</Ability>
<Ability id="arc-ranger-raven_master-mimic-figurine-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-ranger-raven_master-mimic-figurine-su">Mimic Figurine (Su)</Pair>
<Pair hl title="Replaces">Swift tracker</Pair>
<Pair title="At 8th Level">Once per day as a <strong className="hl">standard action</strong>, the raven master can transform her raven companion into a token similar to a <Link to="/magic-wondrous/figurine_of_wondrous_power">figurine of wondrous power</Link>. Any gear worn by the raven melds into its body as part of this transformation, but held items do not. The raven can remain in this form indefinitely, or until the raven master spends a standard action to activate the statuette as though it were a <em>figurine of wondrous power.</em></Pair>
</Ability>
<Ability id="arc-ranger-raven_master-cheat-death-sp" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-raven_master-cheat-death-sp">Cheat Death (Sp)</Pair>
<Pair hl title="Replaces">Camouflage</Pair>
<Pair title="At 12th Level">Once per week, when a raven companion would otherwise be slain by an attack, spell, or effect, it can turn into a <em>figurine of wondrous power</em> as per its <em>mimic figurine</em> ability as an <strong className="hl">immediate action</strong>. Once transformed this way, the raven companion cannot transform back into a raven until the raven master next prepares spells.</Pair>
</Ability>
<Ability id="arc-ranger-raven_master-argent-magic" icon={["spell-book"]}>
<Pair single id="arc-ranger-raven_master-argent-magic">Argent Magic</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Ability">A raven master casts spells as do most rangers, but her spell list is somewhat expanded from the normal options most rangers can choose from, for her association with the bards and other talented performers among the Silver Ravens allows her to add a limited number of <Link to="/main/bard_spell">bard spells</Link> to her spell list. These spells function as divine spells, and are cast and prepared in the same manner as her other ranger spells.</Pair>
<Pair title="At 6th Level">The raven master selects one 1st-level bard spell of her choice and adds it to her spell list as a 1st-level ranger spell.</Pair>
<Pair title="At 9th Level">She does the same but for a 2nd-level bard spell.</Pair>
<Pair title="At 12th Level">She adds a 3rd-level bard spell.</Pair>
<Pair title="At 15th Level">She adds a 4th-level bard spell.</Pair>
</Ability>
</>};
const _realm_wanderer = {title: "Realm Wanderer", jsx: <><h2 id="arc-ranger-realm_wanderer-realm-wanderer">Realm Wanderer</h2>
<p><strong>Sources</strong> <Link to="/source/distant_realms">Distant Realms pg. 22</Link><br/>Some of the most free-roaming rangers are those who tread between locales so varied that they may as well be separate worlds altogether - and quite often these disparate places are literally <Link to="/rule/hell">Hell</Link> and the Material Plane. Like the Queen of Dis, whom many of them admire, these rangers take to heart the lessons they've learned from their vastly contrasting experiences and know that creatively embracing this wisdom is sometimes the difference between life and death.</p>
<Ability icon={["skills"]} id="arc-ranger-realm_wanderer-undefined">
<Pair id="arc-ranger-realm_wanderer-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/bluff">Bluff</Link> (CHA)</Pair>
<Pair title="Removed Skills">Intimidate, Stealth</Pair></Ability>
<Ability id="arc-ranger-realm_wanderer-deceptive-subtlety-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-realm_wanderer-deceptive-subtlety-ex">Deceptive Subtlety (Ex)</Pair>
<Pair hl title="Replaces">Track</Pair>
<Pair title="Ability">A realm wanderer adds half his level (minimum 1) to Diplomacy checks to influence a creature's attitude, to make requests of creatures, and for similar uses of the skill. He also adds half his level (minimum 1) to Bluff checks to deceive, lie, or convey secret messages.</Pair>
</Ability>
<Ability id="arc-ranger-realm_wanderer-queens-bond-ex" icon={["broken-shield"]}>
<Pair single id="arc-ranger-realm_wanderer-queens-bond-ex">Queen's Bond (Ex)</Pair>
<Pair hl title="Alters">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability"><p>A realm wanderer must choose an animal companion for his <em>hunter's bond.</em> This <Link to="/ability/animal_companion">animal companion</Link> gains the <Link to="/template/fiendish">fiendish</Link> template, likely either due to time it spent near a gate to Hell or due to infernal influences in its place of birth. Due to this insidious influence, this <Link to="/sidekick/animal_companion">animal companion</Link> always takes a penalty on attack rolls equal to <Link to="/misc/one_fifth">one-fifth</Link> of the realm wanderer's level (minimum 1).</p>
<p>If the realm wanderer releases his animal companion from service or it perishes, he can gain a new fiendish animal companion by completing the required ceremony. Alternatively, when the realm wanderer releases his animal companion or it dies in his service, he can use his influence over its fiendish nature to cause the animal to lose the fiendish template. If the animal companion is then raised or otherwise brought back from the dead after the realm wanderer removes its fiendish template, the animal companion no longer takes the penalty on attacks described above. (He cannot, however, gain a new non-fiendish animal companion by completing the ceremony to replace an animal companion.)</p>
</Pair>
</Ability>
<Ability id="arc-ranger-realm_wanderer-dual-master-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-realm_wanderer-dual-master-ex">Dual Master (Ex)</Pair>
<Pair hl title="Replaces">Swift tracker</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">The realm wanderer's bonuses from <em>deceptive subtlety</em> are doubled when he is in either of his two <em>favored terrain</em> types. However, this benefit applies only to the first two <em>favored terrain</em> types he selected; as he gains additional <em>favored terrains</em> at higher levels, this benefit does not apply in those additional terrain types.</Pair>
</Ability>
<Ability id="arc-ranger-realm_wanderer-shrewdest-monarch-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-ranger-realm_wanderer-shrewdest-monarch-su" flavor="The realm wanderer has become a true master of the territories with which he is familiar.">Shrewdest Monarch (Su)</Pair>
<Pair hl title="Replaces">Master hunter</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Usage">Four times/day, but not against the same creature more than once in a 24-hour period</Pair>
<Pair title="Standard Action">He can make a single attack at his full attack bonus against an enemy in one of the terrains chosen using the <em>dual master</em> ability. If the attack hits, the target takes damage normally and must succeed at a Fortitude saving throw or die. The DC of this saving throw is equal to 10 + half the realm wanderer's level + his Wisdom modifier. A realm wanderer can instead deal an amount of nonlethal damage equal to the creature's current hit points; the target can attempt a Fortitude save at the same DC to negates this damage.</Pair>
<Pair title="Passive Ability">The realm wanderer also gains a bonus on attack rolls equal to his Wisdom modifier against creatures that have successfully learned his alignment (using <Link to="/spell/detect_evil">detect chaos/evil/good/law</Link>, as appropriate, or similar effects).</Pair>
</Ability>
</>};
const _sable_company_marine = {title: "Sable Company Marine", jsx: <><h2 id="arc-ranger-sable_company_marine-sable-company-marine">Sable Company Marine</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 43</Link>, <Link to="/source/paizo_blog___sable_company_marine">Paizo Blog - Sable Company Marine</Link><br/>Sable Company marines receive their training at the elite Endrin Military Academy in Korvosa. A large portion of their education is the handling and riding of hippogriffs, the iconic mounts of members of the company.</p>
<Ability id="arc-ranger-sable_company_marine-hippogriff-companion" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-sable_company_marine-hippogriff-companion">Hippogriff Companion</Pair>
<Pair hl title="Replaces">Hunter's bond (but see text)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A Sable Company marine adds <Link to="/feat/monstrous_mount">Monstrous Mount</Link> to the list of bonus feats made available to him by his chosen <Link to="/ability/combat_styles">combat style</Link>, regardless of the style chosen. He can only use this feat to select a <Link to="/companion/hippogriff">hippogriff</Link> mount. If he does so, he treats his ranger level - 1 as his effective druid level. <strong>A marine who takes this option does not gain the <em>hunter's bond</em> class feature at 4th level.</strong></Pair>
<Pair title="At 6th Level">A Sable Company marine adds <Link to="/feat/monstrous_mount_mastery">Monstrous Mount Mastery</Link> to the list of available bonus feats granted by his chosen combat style. If he takes this feat as his 6th-level combat style bonus feat, note that he must wait until 8th level before he meets the effective druid level prerequisite to utilize his mount's <em>mastery</em> abilities.</Pair>
</Ability>
</>};
const _sentinel = {title: "Sentinel", jsx: <><h2 id="arc-ranger-sentinel-sentinel">Sentinel</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 42</Link><br/>A sentinel specializes in heightening all of her senses to expose spies and those who work for opposing factions, rooting out all who attempt to slip past her evervigilant watch. Her uncanny skills are in ready demand by city guards, business owners, and even criminal organizations that desire to keep the authorities out of their disreputable affairs.</p>
<Ability id="arc-ranger-sentinel-mugshot-sp" icon={["upgrade"]}>
<Pair single id="arc-ranger-sentinel-mugshot-sp">Mugshot (Sp)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Ability">A sentinel can spend 1 minute studying the appearance of a target or a likeness of the target in the form of a picture, carving, or visual illusion and memorize it with perfect recall. From that point on, the sentinel gains a +4 bonus on Perception checks to notice the target in disguise or pick him out of a crowd. The sentinel is automatically allowed a Perception check against the target's Disguise check whenever she sees the target, even if the individual isn't doing anything to draw attention to himself.</Pair>
<Pair title="Special">A sentinel can memorize the appearance of a number of targets equal to her Wisdom modifier (minimum 1) at any given time. Once a sentinel has reached her maximum number of memorized appearances, she must forget one of the memorized faces before gaining a new one.</Pair>
</Ability>
<Ability id="arc-ranger-sentinel-uncanny-alertness-ex" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="arc-ranger-sentinel-uncanny-alertness-ex" flavor="A sentinel is always ready to defend against incoming attacks.">Uncanny Alertness (Ex)</Pair>
<Pair hl title="Replaces">Hunter's bond, woodland stride</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A sentinel is never <Link to="/rule/flat_footed">flat-footed</Link> before acting in combat, even if she is surprised (she can still become flat-footed by any other effect or situation that would render her flat-footed).</Pair>
<Pair title="At 7th Level">The sentinel also always acts on the surprise round. If she would have acted on the surprise round anyway, or if there is no surprise round, she gains a bonus on initiative checks equal to half her ranger level.</Pair>
</Ability>
<Ability id="arc-ranger-sentinel-sense-intruder-su" icon={["abstract-091"]}>
<Pair single id="arc-ranger-sentinel-sense-intruder-su" flavor="A sentinel gains the ability to establish an incredibly effective watch by standing still and focusing on all of her senses as once.">Sense Intruder (Su)</Pair>
<Pair hl title="Replaces">Combat style feat gained at 6th level</Pair>
<Pair hl title="Alters">Combat style feats</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">At any time, she can spend 1 minute setting up this ability. Once she has done so, she must stand still, taking no other actions except to keep track of her surroundings; she can't even take free actions like talking. Her heightened senses grant her a supernatural awareness of her surroundings within 20 feet. If any Tiny or larger creature enters the area over which her awareness extends, she automatically knows that it did so (this part of the ability is a divination effect and can't be deceived by spells that block sensory input, only by extreme effects like <Link to="/spell/mind_blank">mind blank</Link>). Furthermore, unless that creature is simultaneously negating its visual, auditory, and scent stimuli (such as by being under <Link to="/spell/invisibility">invisibility</Link>, <Link to="/spell/silence">silence</Link>, and <Link to="/spell/negate_aroma">negate aroma</Link> all at once), the sentinel can attempt a Perception check as an <strong className="hl">immediate action</strong> to pinpoint the intruder's location, ignoring any Stealth bonuses the intruder might gain from effects that obscure only one of those senses, such as invisibility, camouflage, or other spells or abilities.</Pair>
<Pair title="At 10th Level">Starting at 10th level, whenever the sentinel gains a combat style feat, she can choose to trade it for a 10-foot increase in the radius of this ability.</Pair>
<Pair title="Special">This sort of heightened analysis of sensory stimuli is taxing, as much so as <Link to="/rule/hustling">hustling</Link> overland for an equivalent period of time, despite not moving from a single spot. The sentinel can use this ability for 1 hour without penalty. Using <em>sense intruder</em> for a second hour in between sleep cycles deals 1 point of nonlethal damage to the sentinel, and each additional hour deals twice the damage taken during the previous hour. A sentinel who takes any nonlethal damage from using this ability becomes <Link to="/misc/fatigued">fatigued</Link>. Each hour the sentinel uses <em>sense intruder</em> also counts as 1 hour of hustling overland for the purpose of determining how much nonlethal damage the sentinel takes in a single day.</Pair>
</Ability>
<Ability id="arc-ranger-sentinel-mugshot-quarry-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-sentinel-mugshot-quarry-ex">Mugshot Quarry (Ex)</Pair>
<Pair hl title="Alters">Quarry, improved quarry</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">The sentinel can activate her <em>quarry</em> ability (and her <em>improved quarry</em> ability at 19th level) against any of the targets she has memorized with the <em>mugshot</em> ability, even if the creature in question is not within her line of sight.</Pair>
</Ability>
</>};
const _shapeshifter = {title: "Shapeshifter", jsx: <><h2 id="arc-ranger-shapeshifter-shapeshifter">Shapeshifter</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 126</Link><br/>Most rangers venture into the wilderness, but there are some who let the wilderness seep into them. Whether by curse, disease, ancient rite, a slight lycanthropic influence in the blood, or the corrupting influence of chaos, these rangers embrace the wild to transform themselves into something untamed and feral. Shapeshifters are often held in awe, but are even more often feared. A shapeshifter has the following class features.</p>
<Ability id="arc-ranger-shapeshifter-combat-style-feat-ex" icon={["broken-shield"]}>
<Pair single id="arc-ranger-shapeshifter-combat-style-feat-ex">Combat Style Feat (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A shapeshifter ranger must choose the natural weapon <Link to="/ability/combat_styles">combat style</Link>.</Pair>
</Ability>
<Ability id="arc-ranger-shapeshifter-shifters-blessing-su" extraClasses="hasSubs" icon={["magic-swirl"]}>
<Pair single id="arc-ranger-shapeshifter-shifters-blessing-su">Shifter's Blessing (Su)</Pair>
<Pair hl title="Replaces">Favored terrain</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Swift Action">The shapeshifter can take on the aspects of a wild creature once per day. He can remain in this form for a number of rounds equal to his ranger level + his Wisdom modifier. While in one of his shifter's blessing forms, the ranger gains the <Link to="/subtype/shapechanger">shapechanger</Link> subtype.</Pair>
<Pair title="Choice">The shapeshifter must choose one of the following forms. Once this choice is made, it cannot be changed.</Pair>
<Pair title="At 8th Level">The ranger may select an additional form for his <em>shifter's blessing</em> and may use this ability 2 times per day.</Pair>
<Pair title="At 13th Level">The ranger may select an additional form for his <em>shifter's blessing</em> and may use this ability 3 times per day.</Pair>
<Pair title="At 18th Level">The ranger may select an additional form for his <em>shifter's blessing</em> and may use this ability 4 times per day.</Pair>
<Pair title="Special">This is not a polymorph ability; a ranger with <em>shifter's blessing</em> in one of his shifted forms can be affected by a polymorph ability and retain his bonus and traits gained by the class feature.</Pair>
</Ability>
<Ability id="arc-ranger-shapeshifter-form-of-the-bear" extraClasses="subAbility" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-ranger-shapeshifter-form-of-the-bear">Form of the Bear</Pair>
<Pair title="Ability">The ranger's muscles enlarge and tighten, and his facial features become more ursine. While in this form, the ranger gains a +4 enhancement bonus to Strength, but his base speed becomes 20 feet.</Pair>
</Ability>
<Ability id="arc-ranger-shapeshifter-form-of-the-cat" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-ranger-shapeshifter-form-of-the-cat">Form of the Cat</Pair>
<Pair title="Ability">The ranger's muscles become lean and defined, and his gait more deliberate and graceful. While in this form, the ranger increases his base speed by 10 feet, and he gains a +4 bonus on Acrobatics and Climb checks.</Pair>
</Ability>
<Ability id="arc-ranger-shapeshifter-form-of-the-dragon" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-shapeshifter-form-of-the-dragon">Form of the Dragon</Pair>
<Pair title="Ability">The ranger's skin becomes rough and scaly. While in this form, the ranger gains a +2 natural armor bonus to AC.</Pair>
</Ability>
<Ability id="arc-ranger-shapeshifter-form-of-the-eagle" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-ranger-shapeshifter-form-of-the-eagle">Form of the Eagle</Pair>
<Pair title="Ability">The ranger's skin stretches, his nose becomes hooked, and his eyes enlarge. While in this form, the ranger gains a +10 bonus on Perception checks.</Pair>
</Ability>
<Ability id="arc-ranger-shapeshifter-form-of-the-jackal" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-shapeshifter-form-of-the-jackal">Form of the Jackal</Pair>
<Pair title="Ability">The ranger becomes thin and hyperactive, his movements taking on a nervous spryness. While in this form, the ranger can spend a <strong className="hl">move action</strong> to move up to 1/2 his speed without provoking attacks of opportunity.</Pair>
</Ability>
<Ability id="arc-ranger-shapeshifter-form-of-the-otter" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-ranger-shapeshifter-form-of-the-otter">Form of the Otter</Pair>
<Pair title="Ability">The ranger's hands and feet grow webs, and his body grows an oily fur that is water resistant. While in this form, the ranger gains a swim speed of 30 feet and a +8 bonus on Swim checks.</Pair>
</Ability>
<Ability id="arc-ranger-shapeshifter-dual-form-shifter-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-shapeshifter-dual-form-shifter-ex">Dual Form Shifter (Ex)</Pair>
<Pair hl title="Replaces">Camouflage</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">When the shapeshifter takes on a <em>shifter's blessing</em> form, he can take on a hybrid of two of his forms. He gains the bonuses for both forms.</Pair>
</Ability>
<Ability id="arc-ranger-shapeshifter-master-shifter-su" extraClasses="hasSubs" icon={["upgrade"]}>
<Pair single id="arc-ranger-shapeshifter-master-shifter-su">Master Shifter (Su)</Pair>
<Pair hl title="Replaces">Master hunter </Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">The ranger's <em>shifter's blessing</em> forms improve, and he can take on true forms of beasts. The ranger can use <em>dual form shifter</em> with this ability, although he cannot use more than one polymorph effect at any one time. The ranger's forms from <em>shifter's blessing</em> improve to the following.</Pair>
</Ability>
<Ability id="arc-ranger-shapeshifter-form-of-the-bear" extraClasses="subAbility" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-ranger-shapeshifter-form-of-the-bear">Form of the Bear</Pair>
<Pair title="Ability">The ranger's muscles enlarge and tighten, and his facial features become more ursine. While in this form, the ranger gains a +8 enhancement bonus to Strength and he does not suffer any reduction of speed. Alternatively, the ranger can polymorph into the form of a bear as if the caster of <Link to="/spell/beast_shape_iv">beast shape IV</Link>.</Pair>
</Ability>
<Ability id="arc-ranger-shapeshifter-form-of-the-cat" extraClasses="subAbility" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-ranger-shapeshifter-form-of-the-cat">Form of the Cat</Pair>
<Pair title="Ability">The ranger's muscles become lean and defined, and his gait more deliberate and graceful. While in this form, the ranger increases his base speed by 20 feet and he gains a +10 bonus on Acrobatics and Climb checks. Alternatively, the ranger can polymorph into the form of a cat of any size as if the caster of <em>beast shape IV.</em></Pair>
</Ability>
<Ability id="arc-ranger-shapeshifter-form-of-the-dragon" extraClasses="subAbility" icon={["armor-upgrade","stairs-goal","magic-swirl"]}>
<Pair single id="arc-ranger-shapeshifter-form-of-the-dragon">Form of the Dragon</Pair>
<Pair title="Ability">The ranger's skin becomes rough and scaly. While in this form, the ranger gains a +4 natural armor bonus to AC and a fly speed of 30 feet with average maneuverability. Alternately, the ranger can polymorph into the form of a dragon as if the caster of <Link to="/spell/form_of_the_dragon_i">form of the dragon I</Link>.</Pair>
</Ability>
<Ability id="arc-ranger-shapeshifter-form-of-the-eagle" extraClasses="subAbility" icon={["upgrade","stairs-goal","magic-swirl"]}>
<Pair single id="arc-ranger-shapeshifter-form-of-the-eagle">Form of the Eagle</Pair>
<Pair title="Ability">The ranger's skin stretches, his nose becomes hooked, and his eyes enlarge. While in this form, the ranger gains a +10 bonus on Perception checks and a fly speed of 40 feet with good maneuverability. Alternatively, the ranger can polymorph into the form of an eagle or similar raptor as if the caster of <em>beast shape IV.</em></Pair>
</Ability>
<Ability id="arc-ranger-shapeshifter-form-of-the-jackal" extraClasses="subAbility" icon={["armor-upgrade","magic-swirl"]}>
<Pair single id="arc-ranger-shapeshifter-form-of-the-jackal">Form of the Jackal</Pair>
<Pair title="Ability">The ranger becomes thin and hyperactive, his movements taking on a nervous spryness. While in this form, the ranger does not provoke attacks of opportunity due to movement. Alternatively, the ranger can polymorph into the form of a jackal or other canine creature as if the caster of <em>beast shape IV.</em></Pair>
</Ability>
<Ability id="arc-ranger-shapeshifter-form-of-the-otter" extraClasses="subAbility" icon={["stairs-goal","upgrade","magic-swirl"]}>
<Pair single id="arc-ranger-shapeshifter-form-of-the-otter">Form of the Otter</Pair>
<Pair title="Ability">The ranger's hands and feet grow webs, and his body grows an oily fur that is water resistant. While in this form, the ranger gains a swim speed of 60 feet and a +5 bonus on Swim checks. Alternatively, the ranger can polymorph into the form of an otter or similar river mammal as if the caster of <em>beast shape IV.</em></Pair>
</Ability>
</>};
const _skirmisher = {title: "Skirmisher", jsx: <><h2 id="arc-ranger-skirmisher-skirmisher">Skirmisher</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 128</Link><br/>Many rangers rely on spells, but there are some who eschew aid from divine powers for their own reasons. Skirmishers rely on their wits, their wisdom, and sometimes even instinct to aid in their quests. A skirmisher has the following class features.</p>
<Ability id="arc-ranger-skirmisher-hunters-tricks" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-skirmisher-hunters-tricks" flavor={<>A skirmisher ranger learns the use of <em>hunter's tricks,</em> which typically grant a boon or bonus to the ranger or a nearby ally.</>}>Hunter's Tricks</Pair>
<Pair hl title="Replaces">Spellcasting ability</Pair>
<Pair title="At 5th Level">The ranger learns one trick, selected from the list below.</Pair>
<Pair title="Usage">A number of times per day equal to 1/2 his ranger level + his Wisdom modifier</Pair>
<Pair title="At 9th Level">He learns his 2nd trick.</Pair>
<Pair title="At 11th Level">He learns his 3rd trick.</Pair>
<Pair title="At 13th Level">He learns his 4th trick.</Pair>
<Pair title="At 15th Level">He learns his 5th trick.</Pair>
<Pair title="At 17th Level">He learns his 6th trick.</Pair>
<Pair title="At 19th Level">He learns his 7th trick.</Pair>
<Pair title="Special">Tricks are usually <strong className="hl">swift actions</strong>, but sometimes <strong className="hl">move</strong> or <strong className="hl">free</strong> actions that modify a <strong className="hl">standard action</strong>, usually an attack action. Once a trick is chosen, it can't be retrained. A ranger cannot select an individual trick more than once.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-aiding-attack-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-ranger-skirmisher-aiding-attack-ex">Aiding Attack (Ex)</Pair>
<Pair title="Free Action">The ranger can use this trick when he hits a creature with an attack. The next ally who makes an attack against the target creature before the start of the ranger's next turn gains a +2 circumstance bonus on that attack roll.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-bolster-companion-ex" extraClasses="subAbility" icon={["shield-reflect"]}>
<Pair single id="arc-ranger-skirmisher-bolster-companion-ex">Bolster Companion (Ex)</Pair>
<Pair title="Immediate Action">The ranger can use this trick when his animal companion is hit with an attack or a combat maneuver. The companion's AC and combat maneuver defense increase by +4 for the purposes of that attack. If the attack still hits, the animal companion only takes half damage (if any). The animal companion must be able to see and hear the ranger to benefit from this trick.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-catfall-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-skirmisher-catfall-ex">Catfall (Ex)</Pair>
<Pair title="Immediate Action">The ranger can use this trick when he falls 20 or more feet, ignoring the first 20 feet of the fall when calculating the <Link to="/rule/falling">falling damage</Link>. If the ranger takes no damage from the fall, he does not fall prone.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-chameleon-step-ex" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-ranger-skirmisher-chameleon-step-ex">Chameleon Step (Ex)</Pair>
<Pair title="Move-Equivalent Action">The ranger can move up to twice his speed. The ranger does not take any penalty on Stealth checks for movement during this move. This move provokes attacks of opportunity as normal.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-cunning-pantomime-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-skirmisher-cunning-pantomime-ex">Cunning Pantomime (Ex)</Pair>
<Pair title="Standard Action">The ranger can communicate with a single creature as if using the <Link to="/spell/tongues">tongues</Link> spell for 10 minutes. Because the communication is slow and lacks subtlety, the ranger suffers a -4 penalty on all Bluff and Diplomacy checks relating to the creature he is communicating with when using this trick.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-defensive-bow-stance-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-skirmisher-defensive-bow-stance-ex">Defensive Bow Stance (Ex)</Pair>
<Pair title="Swift Action">Until the start of his next turn, the ranger's ranged attacks do not provoke attacks of opportunity.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-deft-stand-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-skirmisher-deft-stand-ex">Deft Stand (Ex)</Pair>
<Pair title="Move-Equivalent Action">The ranger can spend a move action to stand up without provoking attacks of opportunity.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-distracting-attack-ex" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-ranger-skirmisher-distracting-attack-ex">Distracting Attack (Ex)</Pair>
<Pair title="Free Action">The ranger can use this trick before he makes an attack. If the attack hits, the target takes a -2 penalty on all attack rolls for 1 round.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-hateful-attack-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-ranger-skirmisher-hateful-attack-ex">Hateful Attack (Ex)</Pair>
<Pair title="Free Action">The ranger can use this trick when he makes an attack against one of his <em>favored enemies.</em> The ranger doubles the threat range of his weapon for this attack. This does not stack with other abilities that increase a weapon's threat range.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-heel-ex" extraClasses="subAbility" icon={["shield-reflect"]}>
<Pair single id="arc-ranger-skirmisher-heel-ex">Heel (Ex)</Pair>
<Pair title="Immediate Action">The ranger can use this trick when his animal companion moves. When the companion moves, the square it starts out in is not considered threatened by any opponent it can see, and therefore visible enemies do not get attacks of opportunity against it when it moves from that square. The companion must end this movement in a square adjacent to the ranger. The animal companion must be able to see and hear the ranger to take this movement.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-hobbling-attack-ex" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-ranger-skirmisher-hobbling-attack-ex">Hobbling Attack (Ex)</Pair>
<Pair title="Free Action">The ranger can use this trick when he hits with an attack. The target of the attack's land speed is reduced by 1/2 for 1d4 rounds.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-quick-climb-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-ranger-skirmisher-quick-climb-ex">Quick Climb (Ex)</Pair>
<Pair title="Move-Equivalent Action">The ranger can climb at his full speed without penalty.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-quick-healing-ex" extraClasses="subAbility" icon={["heart-plus"]}>
<Pair single id="arc-ranger-skirmisher-quick-healing-ex">Quick Healing (Ex)</Pair>
<Pair title="Swift Action">The ranger can make a Heal check to administer first aid on an adjacent dying character.</Pair>
<Pair title="Move-Equivalent Action">Alternatively, the ranger can administer a potion to an unconscious character.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-quick-swim-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-ranger-skirmisher-quick-swim-ex">Quick Swim (Ex)</Pair>
<Pair title="Move-Equivalent Action">The ranger can swim at his full speed without penalty.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-rangers-counsel-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-ranger-skirmisher-rangers-counsel-ex">Ranger's Counsel (Ex)</Pair>
<Pair title="Swift Action">The ranger can grant all allies within 30 feet that are within line of sight and can hear him a +2 bonus on skill checks with a single skill of his choice. The ranger must have at least one rank in the chosen skill. This bonus lasts for 1 round.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-rattling-strike-ex" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-ranger-skirmisher-rattling-strike-ex">Rattling Strike (Ex)</Pair>
<Pair title="Free Action">The ranger can use this trick before he makes a melee attack. If the attack hits, the target is shaken for 1d4 rounds.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-second-chance-strike-ex" extraClasses="subAbility" icon={["rolling-dices"]}>
<Pair single id="arc-ranger-skirmisher-second-chance-strike-ex">Second Chance Strike (Ex)</Pair>
<Pair title="Immediate Action">When he misses with a melee attack, the ranger may reroll his attack at a -5 penalty.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-sic-em-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-skirmisher-sic-em-ex">Sic-Em (Ex)</Pair>
<Pair title="Swift Action">The ranger's animal companion makes one melee attack against an adjacent creature. The animal companion must be able to see and hear the ranger to make this attack.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-skill-sage-ex" extraClasses="subAbility" icon={["rolling-dices"]}>
<Pair single id="arc-ranger-skirmisher-skill-sage-ex">Skill Sage (Ex)</Pair>
<Pair title="Free Action">The ranger can roll twice on any one skill check and take the better result. He must have at least 1 rank in that skill to use this ability.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-stags-leap-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-skirmisher-stags-leap-ex">Stag's Leap (Ex)</Pair>
<Pair title="Free Action">The ranger can attempt a running jump without moving 10 feet before the jump.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-surprise-shift-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-skirmisher-surprise-shift-ex">Surprise Shift (Ex)</Pair>
<Pair title="Swift Action">The ranger can move 5 feet. This movement does not provoke attacks of opportunity and does not count as a 5-foot step.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-tangling-attack-ex" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-ranger-skirmisher-tangling-attack-ex">Tangling Attack (Ex)</Pair>
<Pair title="Free Action">The ranger can use this attack when he makes an attack. If the attack hits, the target is entangled for 1 round.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-trick-shot-ex" extraClasses="subAbility" icon={["bowman"]}>
<Pair single id="arc-ranger-skirmisher-trick-shot-ex">Trick Shot (Ex)</Pair>
<Pair title="Standard Action">The ranger can make a ranged attack that ignores <Link to="/rule/concealment">concealment</Link> (but not total concealment), soft <Link to="/rule/cover">cover</Link>, and partial cover.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-uncanny-senses-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-ranger-skirmisher-uncanny-senses-ex">Uncanny Senses (Ex)</Pair>
<Pair title="Immediate Action">The ranger gains a +10 insight bonus on Perception checks for 1 round.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-upending-strike-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-skirmisher-upending-strike-ex">Upending Strike (Ex)</Pair>
<Pair title="Free Action">The ranger can use this trick just before he makes a melee attack. If the attack hits, he may make a free <Link to="/rule/trip">trip</Link> combat maneuver against the target.</Pair>
</Ability>
<Ability id="arc-ranger-skirmisher-vengeance-strike-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-skirmisher-vengeance-strike-ex">Vengeance Strike (Ex)</Pair>
<Pair title="Immediate Action">The ranger can use this trick when an enemy adjacent to him hits an ally with a melee or ranged attack. The ranger can make a single melee attack at his highest base attack bonus against the creature who attacked his ally.</Pair>
</Ability>
</>};
const _spirit_ranger = {title: "Spirit Ranger", jsx: <><h2 id="arc-ranger-spirit_ranger-spirit-ranger">Spirit Ranger</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 129</Link><br/>Some rangers nurture a connection with the spirits that reside in all things. By communing with these spirits, the spirit ranger can gain glimpses of things to come. A spirit ranger has the following class features.</p>
<Ability id="arc-ranger-spirit_ranger-spirit-bond-ex" icon={["magic-swirl"]}>
<Pair single id="arc-ranger-spirit_ranger-spirit-bond-ex">Spirit Bond (Ex)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">Instead of forming a bond with his hunting companions or an animal companion, the spirit ranger forms a bond with the spirits of nature themselves. Each day, as long as he is within one of his <em>favored terrains,</em> the ranger can cast <Link to="/spell/augury">augury</Link> as a spell-like ability with a caster level equal to his ranger level.</Pair>
<Pair title="Ability">In addition, he can call upon these spirits to cast any one ranger spell that he is capable of casting, without having to prepare the spell.</Pair>
<Pair title="At 12th Level">He can cast a 2nd additional spell in this way.</Pair>
<Pair title="At 16th Level">He can cast a 3rd additional spell in this way.</Pair>
<Pair title="At 20th Level">He can cast a 4th additional spell in this way.</Pair>
</Ability>
<Ability id="arc-ranger-spirit_ranger-wisdom-of-the-spirits-sp" icon={["upgrade"]}>
<Pair single id="arc-ranger-spirit_ranger-wisdom-of-the-spirits-sp">Wisdom of the Spirits (Sp)</Pair>
<Pair hl title="Replaces">Camouflage</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">The spirit ranger can use his <em>augury</em> spell-like ability even when he is not in one of his <em>favored terrains.</em> If he is within one of his <em>favored terrains,</em> the ranger can cast <Link to="/spell/divination">divination</Link> instead. Like <em>augury,</em> the caster level of the divination is equal to the ranger's level.</Pair>
</Ability>
</>};
const _stormwalker = {title: "Stormwalker", jsx: <><h2 id="arc-ranger-stormwalker-stormwalker">Stormwalker</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 72</Link><br/>Rangers who walk in the tempest unafraid draw the power of the storm into themselves and become stormwalkers.</p>
<Ability id="arc-ranger-stormwalker-combat-style-feat-ex" icon={["broken-shield"]}>
<Pair single id="arc-ranger-stormwalker-combat-style-feat-ex">Combat Style Feat (Ex)</Pair>
<Pair hl title="Alters">Combat style</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A stormwalker must choose the archery <Link to="/ability/combat_styles">combat style</Link>.</Pair>
</Ability>
<Ability id="arc-ranger-stormwalker-thundershot-su" icon={["upgrade"]}>
<Pair single id="arc-ranger-stormwalker-thundershot-su" flavor="A stormwalker can wreathe his weapon in lightning.">Thundershot (Su)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Standard Action">He can grant a single weapon he holds the <Link to="/magic-enh/shock">shock</Link> special ability for 1 minute; while under this effect, the weapon counts as magic for the purpose of overcoming damage reduction.</Pair>
<Pair title="At 12th Level">Weapons affected by this ability gain the <Link to="/magic-enh/shocking_burst">shocking burst</Link> special ability, instead.</Pair>
</Ability>
<Ability id="arc-ranger-stormwalker-wind-treader-ex" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-ranger-stormwalker-wind-treader-ex">Wind Treader (Ex)</Pair>
<Pair hl title="Replaces">Swift tracker</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">A stormwalker becomes immune to the effects of strong <Link to="/rule/winds">wind</Link>. He can move without hindrance in windy conditions, and his ranged attacks take no penalties from nonmagical wind.</Pair>
</Ability>
<Ability id="arc-ranger-stormwalker-flash-step-su" icon={["stairs-goal","bowman"]}>
<Pair single id="arc-ranger-stormwalker-flash-step-su" flavor="A stormwalker can move across the battlefield like a bolt of lightning.">Flash Step (Su)</Pair>
<Pair hl title="Replaces">Quarry</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Full-Round Action">He can transform into lightning and move to any unoccupied square within 60 feet without provoking attacks of opportunity. He can make a single ranged attack before or after this movement.</Pair>
</Ability>
<Ability id="arc-ranger-stormwalker-control-weather-sp" icon={["magic-swirl"]}>
<Pair single id="arc-ranger-stormwalker-control-weather-sp">Control Weather (Sp)</Pair>
<Pair hl title="Replaces">Improved evasion</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Ability">A stormwalker can cast <Link to="/spell/control_weather">control weather</Link> as a spell-like ability once per day.</Pair>
</Ability>
<Ability id="arc-ranger-stormwalker-flash-shot-su" icon={["bowman"]}>
<Pair single id="arc-ranger-stormwalker-flash-shot-su">Flash Shot (Su)</Pair>
<Pair hl title="Replaces">Improved quarry</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Ability">When a stormwalker uses <em>flash step,</em> he can make a ranged attack both before and after his movement. Both of these attacks are made at his highest base attack bonus.</Pair>
</Ability>
</>};
const _summit_sentinel = {title: "Summit Sentinel", jsx: <><h2 id="arc-ranger-summit_sentinel-summit-sentinel">Summit Sentinel</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 72</Link><br/>Some rangers eschew the path of the swift skirmisher and embrace the implacable strength of the mountain.</p>
<Ability id="arc-ranger-summit_sentinel-roots-of-the-mountain-su" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-summit_sentinel-roots-of-the-mountain-su">Roots of the Mountain (Su)</Pair>
<Pair hl title="Replaces">Combat style feats</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A summit sentinel gains <Link to="/feat/toughness">Toughness</Link> as a bonus feat.</Pair>
<Pair title="Move-Equivalent Action">She can enter a defensive stance for 1 minute. While in this stance, the summit sentinel's speed is reduced to 5 feet, she gains a +2 enhancement bonus to her natural armor, and she gains a +2 bonus to her CMD against maneuvers that would move her or knock her prone. If the ranger loses contact with the ground or other solid surface, the stance ends immediately.</Pair>
<Pair title="Usage">3 + Constitution modifier times/day</Pair>
<Pair title="At 6th Level">The enhancement bonus to natural armor increases to +3 and the bonus to CMD becomes +4.</Pair>
<Pair title="At 10th Level">The enhancement bonus to natural armor increases to +4 and the bonus to CMD becomes +6.</Pair>
<Pair title="At 14th Level">The enhancement bonus to natural armor increases to +5 and the bonus to CMD becomes +8.</Pair>
<Pair title="At 18th Level">The enhancement bonus to natural armor increases to +6 and the bonus to CMD becomes +10.</Pair>
</Ability>
<Ability id="arc-ranger-summit_sentinel-mountain-mastery-ex" icon={["broken-shield"]}>
<Pair single id="arc-ranger-summit_sentinel-mountain-mastery-ex">Mountain Mastery (Ex)</Pair>
<Pair hl title="Alters">Favored terrain</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Info">A summit sentinel must select mountains as her <em>favored terrain,</em> and she does not gain additional <em>favored terrains</em> at higher levels.</Pair>
<Pair title="At 8th Level">A summit sentinel draws strength from the earth. When she and her target are both in contact with the ground or an earthen floor, the summit sentinel gains a +1 bonus on attack and damage rolls against the target.</Pair>
<Pair title="At 10th Level">The bonus from this <em>favored terrain</em> becomes +4.</Pair>
<Pair title="At 15th Level">The bonus from this <em>favored terrain</em> increases to +6.</Pair>
<Pair title="At 18th Level">The bonus on attack and damage rolls increases to +2.</Pair>
<Pair title="At 20th Level">The bonus from this <em>favored terrain</em> becomes +8.</Pair>
</Ability>
<Ability id="arc-ranger-summit_sentinel-spells" icon={["spell-book"]}>
<Pair single id="arc-ranger-summit_sentinel-spells">Spells</Pair>
<Pair hl title="Alters">Spells</Pair>
<Pair title="Ability">A summit sentinel adds <Link to="/spell/stoneskin">stoneskin</Link> to the ranger spell list as a 4th-level spell.</Pair>
</Ability>
<Ability id="arc-ranger-summit_sentinel-rockslide-su" icon={["tornado-discs"]}>
<Pair single id="arc-ranger-summit_sentinel-rockslide-su">Rockslide (Su)</Pair>
<Pair hl title="Replaces">Swift tracker</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Standard Action">Once per day, a summit sentinel can create a rushing wave of earth and stone. The summit sentinel chooses a point on the ground or floor within 30 feet. Rippling waves of earth and stone emanate from the chosen point in a 25-foot cone in a direction of the summit sentinel's choice. Each creature in the area takes 4d6 points of bludgeoning damage and is pushed to the end of the cone. A target that succeeds at a Reflex save (DC = 10 + half the ranger's level + the ranger's Wisdom modifier) takes half damage and is not pushed.</Pair>
</Ability>
<Ability id="arc-ranger-summit_sentinel-invincible-su" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-summit_sentinel-invincible-su" flavor="A summit sentinel takes on the unyielding hardness of the mountains.">Invincible (Su)</Pair>
<Pair hl title="Replaces">Hide in plain sight</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">While in her <em>roots of the mountain</em> defensive stance, she is immune to critical hits and <Link to="/misc/precision_damage">precision damage</Link>.</Pair>
</Ability>
</>};
const _sword_devil = {title: "Sword-Devil", jsx: <><h2 id="arc-ranger-sword_devil-sword-devil">Sword-Devil</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_worldscape_1">Pathfinder Worldscape #1 pg. 27</Link><br/>Agile, vengeful, and deadly, a sword-devil fights with precision and grace, channeling the difficult lessons of a star-crossed life into unparalleled battle prowess. Favoring speed and evasive techniques over brute force, sword-devils choose precision over power and acrobatics over armor. Charismatic and carefree, a sword-devil makes fast friends and inspires her companions to greatness, even while vowing a swift death upon her enemies.</p>
<Ability icon={["skills"]} id="arc-ranger-sword_devil-undefined">
<Pair id="arc-ranger-sword_devil-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX)</Pair>
<Pair title="Removed Skills">Spellcraft</Pair></Ability>
<Ability id="arc-ranger-sword_devil-death-vow-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-sword_devil-death-vow-ex">Death Vow (Ex)</Pair>
<Pair hl title="Replaces">Favored enemy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">1 time/day + 1 per three ranger levels beyond 1st<ByLevelPop levels={[[1,1],[4,2],[7,3],[10,4],[13,5],[16,6],[19,7]]} unit="time" postText="/day" /></Pair>
<Pair title="Swift Action">A sword-devil may focus all her fury and determination on a single foe she swears to slay. The sword-devil gains a bonus on weapon attack and damage rolls against her sworn target equal to half her sword-devil level (minimum +1). The <em>death vow</em> effect remains until the target of the <em>death vow</em> is dead, or the next time the sword-devil rests and regains use of this ability.</Pair>
</Ability>
<Ability id="arc-ranger-sword_devil-slashing-fury-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-sword_devil-slashing-fury-ex">Slashing Fury (Ex)</Pair>
<Pair hl title="Replaces">Favored terrain</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">The sword-devil can use her Charisma score in place of her Intelligence score as a prerequisite for combat feats.</Pair>
<Pair title="Ability">She selects one type of light or one-handed slashing melee weapon. When using this weapon, she may use her Dexterity modifier instead of her Strength modifier on melee attack rolls.</Pair>
<Pair title="At 8th Level">The sword-devil may select an additional type of light or one-handed slashing weapon she may use with this ability.</Pair>
<Pair title="At 13th Level">The sword-devil may select an additional type of light or one-handed slashing weapon she may use with this ability.</Pair>
<Pair title="At 18th Level">The sword-devil may select an additional type of light or one-handed slashing weapon she may use with this ability.</Pair>
<Pair title="Special">This ability counts as having the <Link to="/feat/weapon_finesse">Weapon Finesse</Link> feat for the purpose of meeting feat prerequisites.</Pair>
</Ability>
<Ability id="arc-ranger-sword_devil-inspiring-example-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-sword_devil-inspiring-example-ex" flavor="The sword-devil forms a bond with her companions, inspiring them to greater zeal in combat by the example of her weaponcraft.">Inspiring Example (Ex)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Standard Action">The sword-devil may grant half her <em>death vow</em> bonus against a single victim of her <em>death vow</em> to all allies within 30 feet who can see and hear her. This bonus lasts for a number of rounds equal to the sword-devil's Charisma modifier (minimum 1).</Pair>
<Pair title="Special">This bonus does not stack with any <em>death vow</em> bonuses possessed by the sword-devil's allies; they use whichever bonus is higher.</Pair>
</Ability>
<Ability id="arc-ranger-sword_devil-untouchable-ex" icon={["armor-upgrade","hazard-sign"]}>
<Pair single id="arc-ranger-sword_devil-untouchable-ex" flavor="The sword-devil's confidence and personality distract her foes in combat, making her more difficult to hit.">Untouchable (Ex)</Pair>
<Pair hl title="Replaces">Spellcasting ability</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">The sword-devil may add her Charisma bonus (if any) to her AC and her CMD.</Pair>
<Pair title="At 6th Level">The sword-devil gains a +1 dodge bonus to AC.</Pair>
<Pair title="At 9th Level">The dodge bonus becomes +2.</Pair>
<Pair title="At 12th Level">The dodge bonus increases to +3.</Pair>
<Pair title="At 15th Level">The dodge bonus becomes +4.</Pair>
<Pair title="At 18th Level">The dodge bonus increases to +5.</Pair>
<Pair title="Special">She loses these bonuses when she wears any armor, when she carries a shield, or when she carries a medium or heavy load.</Pair>
</Ability>
<Ability id="arc-ranger-sword_devil-second-combat-style-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-sword_devil-second-combat-style-ex">Second Combat Style (Ex)</Pair>
<Pair hl title="Replaces">Quarry</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">The sword-devil chooses a second ranger <Link to="/ability/combat_styles">combat style</Link>. When she recieves a bonus combat feat, she may select any feat from either combat style's list.</Pair>
</Ability>
<Ability id="arc-ranger-sword_devil-seething-fury-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-sword_devil-seething-fury-ex" flavor={<>The sword-devil's countless battles harden her soul and make her lose touch with her humanity. Her growing lack of control over her wrath fuels the potency of her <em>death vow.</em></>}>Seething Fury (Ex)</Pair>
<Pair hl title="Replaces">Improved quarry</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Ability">She adds her Charisma bonus on weapon attack and damage rolls against targets of her <em>death vow,</em> and automatically confirms threatened critical hits against them.</Pair>
</Ability>
<Ability id="arc-ranger-sword_devil-avatar-of-vengeance-su" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-sword_devil-avatar-of-vengeance-su" flavor="A sword-devil becomes a living avatar of vengeance, infused with supernatural powers that push her beyond the mortal, and recognized for her battle prowess and unparalleled skill at killing by a potent otherworldly entity.">Avatar of Vengeance (Su)</Pair>
<Pair hl title="Replaces">Master hunter</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Info">The sword-devil becomes the living vessel of an immortal, intangible, and inscrutable being obsessed only with slaying her foes, meting out violent retribution to those who have wronged her, or simply dispatching her enemies in dazzling display of wanton destruction.</Pair>
<Pair title="Usage">10 minutes per day, but it must be used in 1-minute increments.</Pair>
<Pair title="Standard Action">The sword-devil allows herself to be infused with this killing spirit. She gains a fly speed of 60-feet (perfect), a +6 morale bonus to AC, and fire resistance 30.</Pair>
</Ability>
</>};
const _tanglebriar_demonslayer = {title: "Tanglebriar Demonslayer", jsx: <><h2 id="arc-ranger-tanglebriar_demonslayer-tanglebriar-demonslayer">Tanglebriar Demonslayer</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 46</Link><br/>During the elves' long absence from Golarion, the nascent demon lord <Link to="/monster/treerazer">Treerazer</Link> took up residence in the Fierani Forest in what is now the Elven kingdom of Kyonin. Eventually, the demon's presence in the forest drew the elves back to Golarion, who sought to purge the fiendish blight from this once-sacred land. They defeated Treerazer but could not destroy him, forcing him instead into the southern reaches of the Fierani, a corrupted region of twisted plants and fiendish denizens called Tanglebriar. Even today, the <Link to="/race/elves">elves</Link> constantly battle to keep the corruption in the Tanglebriar from spreading to the rest of the Fierani Forest and beyond. Though they are sworn foes of Treerazer and his kin, Tanglebriar demonslayers are known to venture forth from Kyonin to broaden their expertise in the destruction of demons.</p>
<Ability icon={["skills"]} id="arc-ranger-tanglebriar_demonslayer-undefined">
<Pair id="arc-ranger-tanglebriar_demonslayer-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT)</Pair></Ability>
<Ability id="arc-ranger-tanglebriar_demonslayer-favored-enemy-ex" icon={["broken-shield","armor-upgrade"]}>
<Pair single id="arc-ranger-tanglebriar_demonslayer-favored-enemy-ex">Favored Enemy (Ex)</Pair>
<Pair hl title="Replaces">Favored enemy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">A Tanglebriar demonslayer must choose <em>favored enemy</em> (evil outsider).</Pair>
<Pair title="Info">Every time he advances his <em>favored enemy</em> bonus, the demonslayer must advance his bonus against evil outsiders.</Pair>
<Pair title="Passive Ability">In addition to the normal benefits of <em>favored enemy,</em> a Tanglebriar demonslayer gains a bonus equal to 1/2 his <em>favored enemy</em> bonus on saving throws against spells, spell-like abilities, and supernatural abilities of evil outsiders.</Pair>
<Pair title="Special">This ability is otherwise identical to and replaces the <em>favored enemy</em> ranger class ability.</Pair>
</Ability>
<Ability id="arc-ranger-tanglebriar_demonslayer-demonologist-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-tanglebriar_demonslayer-demonologist-ex" flavor="A Tanglebriar demonslayer gains insight into his Abyssal enemies.">Demonologist (Ex)</Pair>
<Pair hl title="Replaces">Endurance</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">The demonslayer gains a bonus equal to 1/2 his class level on Knowledge (planes) checks that relate to demons, Perception checks to pierce a demon's disguise, and Survival checks while tracking demons. This bonus stacks with any bonuses from <em>favored enemy.</em></Pair>
</Ability>
<Ability id="arc-ranger-tanglebriar_demonslayer-expanded-spell-list" icon={["spell-book"]}>
<Pair single id="arc-ranger-tanglebriar_demonslayer-expanded-spell-list">Expanded Spell List</Pair>
<Pair title="Ability">A Tanglebriar demonslayer adds the following spells to his spell list at the listed spell level.</Pair>
<Pair plain title="1st"><Link to="/spell/protection_from_evil">Protection from evil</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/align_weapon">Align weapon</Link>, <Link to="/spell/magic_circle_against_evil">magic circle against evil</Link></Pair>
<Pair plain title="4th"><Link to="/spell/dimensional_anchor">Dimensional anchor</Link>, <Link to="/spell/dismissal">dismissal</Link></Pair>
</Ability>
<Ability id="arc-ranger-tanglebriar_demonslayer-fiendish-quarry-su" icon={["upgrade"]}>
<Pair single id="arc-ranger-tanglebriar_demonslayer-fiendish-quarry-su">Fiendish Quarry (Su)</Pair>
<Pair hl title="Replaces">Quarry</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">When a Tanglebriar demonslayer chooses an evil outsider as his <em>quarry,</em> he can the forgo the normal +2 attack bonus and instead treat his weapon as if it were good-aligned versus his <em>quarry.</em></Pair>
<Pair title="Special">This ability is otherwise identical to <em>quarry</em> and replaces that ability.</Pair>
</Ability>
<Ability id="arc-ranger-tanglebriar_demonslayer-improved-fiendish-quarry-su" icon={["upgrade"]}>
<Pair single id="arc-ranger-tanglebriar_demonslayer-improved-fiendish-quarry-su">Improved Fiendish Quarry (Su)</Pair>
<Pair hl title="Replaces">Improved quarry</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Ability">When a Tanglebriar demonslayer chooses an evil outsider as his <em>quarry,</em> he can forgo the normal +4 attack bonus and instead treat his weapon as if it had the <Link to="/magic-enh/holy">holy</Link> weapon special ability while attacking his quarry.</Pair>
<Pair title="Special">This ability is otherwise identical to <em>improved quarry</em> and replaces that ability.</Pair>
</Ability>
</>};
const _tidal_hunter = {title: "Tidal Hunter", jsx: <><h2 id="arc-ranger-tidal_hunter-tidal-hunter">Tidal Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 73</Link><br/>The tidal hunter draws strength from the fish and other wildlife of the deep.</p>
<Ability id="arc-ranger-tidal_hunter-waterborn-su" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-tidal_hunter-waterborn-su">Waterborn (Su)</Pair>
<Pair hl title="Replaces">Wild empathy, 6th-level combat style feat</Pair>
<Pair title="Ability">A tidal hunter can breathe water for up to 10 minutes per ranger level each day.</Pair>
<Pair title="At 6th Level">He can breathe underwater indefinitely.</Pair>
</Ability>
<Ability id="arc-ranger-tidal_hunter-keen-scent-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-tidal_hunter-keen-scent-ex">Keen Scent (Ex)</Pair>
<Pair hl title="Replaces">Track, camouflage</Pair>
<Pair title="Ability">A tidal hunter gains <Link to="/umr/scent">scent</Link> as per the universal monster rule.</Pair>
<Pair title="At 12th Level">While in water, the tidal hunter can detect particularly strong or distinct odors (such as blood) up to 1 mile away.</Pair>
</Ability>
<Ability id="arc-ranger-tidal_hunter-aquatic-mastery-ex" icon={["broken-shield"]}>
<Pair single id="arc-ranger-tidal_hunter-aquatic-mastery-ex">Aquatic Mastery (Ex)</Pair>
<Pair hl title="Alters">Favored terrain</Pair>
<Pair title="At 3rd Level">A tidal hunter must select water as his <em>favored terrain,</em> and he doesn't gain additional <em>favored terrains.</em></Pair>
<Pair title="At 8th Level">The bonus from this <em>favored terrain</em> increases by 2.</Pair>
<Pair title="At 13th Level">The bonus from this <em>favored terrain</em> increases by 2.</Pair>
<Pair title="At 18th Level">The bonus from this <em>favored terrain</em> increases by 2.</Pair>
</Ability>
<Ability id="arc-ranger-tidal_hunter-wave-rush-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-tidal_hunter-wave-rush-ex">Wave Rush (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A tidal hunter gains a swim speed equal to his base speed. If he already has a swim speed, it increases by 10 feet.</Pair>
</Ability>
<Ability id="arc-ranger-tidal_hunter-tidal-surge-sp" icon={["magic-swirl"]}>
<Pair single id="arc-ranger-tidal_hunter-tidal-surge-sp" flavor="A tidal hunter gains control over water, and he can use the tides to attack his foes.">Tidal Surge (Sp)</Pair>
<Pair hl title="Replaces">Improved evasion</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Ability">Once per day, he can cast <Link to="/spell/tidal_surge">tidal surge</Link> as a spell-like ability.</Pair>
</Ability>
</>};
const _toxic_herbalist = {title: "Toxic Herbalist", jsx: <><h2 id="arc-ranger-toxic_herbalist-toxic-herbalist">Toxic Herbalist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 74</Link><br/>Saviors and destroyers in equal measure, toxic herbalists use nature's bounty to craft remedies and poisons.</p>
<Ability id="arc-ranger-toxic_herbalist-toxic-touch-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-toxic_herbalist-toxic-touch-ex">Toxic Touch (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Passive Ability">A toxic herbalist studies the safe handling of deadly substances. He cannot accidentally poison himself when he applies poison to a weapon.</Pair>
</Ability>
<Ability id="arc-ranger-toxic_herbalist-natures-mercy-ex-and-su" icon={["stairs-goal","heart-plus"]}>
<Pair single id="arc-ranger-toxic_herbalist-natures-mercy-ex-and-su" flavor="A toxic herbalist's knowledge of the natural world offers respite from wounds and illness.">Nature's Mercy (Ex and Su)</Pair>
<Pair hl title="Replaces">Endurance</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">Once per day, he can spend 1 hour in a wilderness area gathering herbs and other natural materials and combine them into a medicinal poultice - this hour can be integrated with the hour required for the ranger to prepare spells.</Pair>
<Pair title="Ability">Placing the poultice on a wound or ingesting it is a <strong className="hl">standard action</strong>; the creature receiving the poultice heals a number of hit points equal to 1d6 + the ranger's Wisdom modifier.</Pair>
<Pair title="At 8th Level">A poultice neutralizes one poison affecting the recipient, as per <Link to="/spell/neutralize_poison">neutralize poison</Link>.</Pair>
<Pair title="At 11th Level">The ranger can now create 2 poultices per day.</Pair>
<Pair title="At 13th Level">A poultice also attempts to cure one disease affecting the recipient, as per <Link to="/spell/remove_disease">remove disease</Link>.</Pair>
<Pair title="At 19th Level">The ranger can now create 3 poultices per day.</Pair>
<Pair title="Special">The caster level of the neutralizing/curing effects is equal to the toxic herbalist's level. These additional effects are supernatural effects.</Pair>
</Ability>
<Ability id="arc-ranger-toxic_herbalist-sudden-onset-ex" icon={["upgrade","spell-book"]}>
<Pair single id="arc-ranger-toxic_herbalist-sudden-onset-ex">Sudden Onset (Ex)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Swift Action">A toxic herbalist can administer a poultice he created via <em>nature's mercy</em> or poison a weapon as a swift action.</Pair>
<Pair title="Info">Additionally, the toxic herbalist adds the following spells to the ranger spell list at the indicated spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/nauseating_dart">Nauseating dart</Link>, <Link to="/spell/ray_of_sickening">ray of sickening</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/pernicious_poison">Pernicious poison</Link>, <Link to="/spell/pox_pustules">pox pustules</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/poison">Poison</Link>, <Link to="/spell/toxic_gift">toxic gift</Link></Pair>
<Pair plain title="4th"><Link to="/spell/absorb_toxicity">Absorb toxicity</Link>, <Link to="/spell/cloudkill">cloudkill</Link></Pair>
</Ability>
<Ability id="arc-ranger-toxic_herbalist-grim-harvest-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-toxic_herbalist-grim-harvest-ex">Grim Harvest (Ex)</Pair>
<Pair hl title="Replaces">Swift tracker</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A toxic herbalist can spend 1 hour foraging for poisonous substances to create a dose of poison (this hour can be integrated with the hour required to prepare spells or poultices). The toxic herbalist rolls 1d20 and adds his ranger level and his Intelligence modifier. The DC of this check is equal to the Craft DC of the poison he wishes to create. If he succeeds at this check, the ranger creates 1 dose of the chosen poison. The poison remains potent for a number of hours equal to the toxic herbalist's level, regardless of the means used in attempts to preserve it, and it can't be sold.</Pair>
<Pair title="Special">This ability functions only while the toxic herbalist is within one of his <em>favored terrains.</em></Pair>
</Ability>
<Ability id="arc-ranger-toxic_herbalist-potent-venom-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-toxic_herbalist-potent-venom-ex" flavor="A toxic herbalist's poisons become even deadlier.">Potent Venom (Ex)</Pair>
<Pair hl title="Replaces">Quarry</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">When he poisons a <em>favored enemy,</em> the DC of the poison's saving throw increases by half the toxic herbalist's <em>favored enemy</em> bonus against that target.</Pair>
</Ability>
<Ability id="arc-ranger-toxic_herbalist-poisonous-reaper-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-toxic_herbalist-poisonous-reaper-ex">Poisonous Reaper (Ex)</Pair>
<Pair hl title="Replaces">Improved quarry</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Passive Ability">A single dose of poison on a toxic herbalist's weapon remains potent for the entirety of a full attack, instead of for a single strike.</Pair>
</Ability>
</>};
const _toxophilite = {title: "Toxophilite", jsx: <><h2 id="arc-ranger-toxophilite-toxophilite">Toxophilite</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 11</Link><br/>While many rangers use bows and arrows, the toxophilite takes special pride in her skill at archery. The toxophilite emulates the sharpshooting rangers of legend, who could pin a fly to the wall with a single shot or split one arrow with another. A truly talented toxophilite can even shoot down an enemy's arrow while it's still in flight.</p>
<Ability id="arc-ranger-toxophilite-arrow-splitter-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-toxophilite-arrow-splitter-ex">Arrow-Splitter (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Ability">A toxophilite gains a +1 bonus on ranged attack rolls against creatures or objects two or more size categories smaller than her. The toxophilite's ranged attacks also deal full damage to objects instead of half damage.</Pair>
</Ability>
<Ability id="arc-ranger-toxophilite-combat-style-feat-ex" icon={["broken-shield"]}>
<Pair single id="arc-ranger-toxophilite-combat-style-feat-ex">Combat Style Feat (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Choice">A toxophilite must select one of two ranged <Link to="/ability/combat_styles">combat styles</Link> to pursue: archery or crossbow.</Pair>
</Ability>
<Ability id="arc-ranger-toxophilite-intercept-arrow-ex" icon={["shield-reflect"]}>
<Pair single id="arc-ranger-toxophilite-intercept-arrow-ex">Intercept Arrow (Ex)</Pair>
<Pair hl title="Replaces">Endurance</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A toxophilite can <Link to="/rule/ready">ready</Link> a ranged attack to deflect a ranged weapon attack against her or an ally within 30 feet. To deflect the attack, the toxophilite makes an attack with a ranged weapon. If her attack roll is greater than the attacking opponent's roll, the opponent's initial attack automatically misses. For each size category the attacking creature is larger than the toxophilite, the toxophilite takes a -4 penalty on her attack roll.</Pair>
<Pair title="Special">The toxophilite must declare the use of this ability after the attack is announced, but before the roll is made. Unusually massive ranged weapons, such as boulders or ballista bolts, and ranged attacks by firearms or generated by natural attacks or spell effects can't be deflected.</Pair>
</Ability>
<Ability id="arc-ranger-toxophilite-improved-intercept-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-toxophilite-improved-intercept-ex">Improved Intercept (Ex)</Pair>
<Pair hl title="Replaces">Quarry</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">When the toxophilite takes a full-attack action with a ranged weapon, she can choose to forgo one of her attacks. If she does so, she can use her <em>intercept arrow</em> ability as an <strong className="hl">immediate action</strong> instead of a readied action at any time before her next turn. Her attack roll to intercept uses the same bonuses as the attack she chose to forgo during her previous action.</Pair>
</Ability>
<Ability id="arc-ranger-toxophilite-greater-intercept-ex" icon={["bowman"]}>
<Pair single id="arc-ranger-toxophilite-greater-intercept-ex">Greater Intercept (Ex)</Pair>
<Pair hl title="Replaces">Improved quarry</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Ability">Whenever a toxophilite successfully deflects an attack with her <em>intercept arrow</em> ability, she can redirect the attack against a target within 30 feet, using the intercepted attack's attack roll against the new target's AC.</Pair>
</Ability>
</>};
const _transporter = {title: "Transporter", jsx: <><h2 id="arc-ranger-transporter-transporter">Transporter</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 43</Link><br/>Transporters specialize in smuggling people as efficiently as possible through harsh and difficult environments. Individuals such as escaped political exiles, refugees fleeing danger, and various criminals all seek the transporter's services. While some transporters actively work to serve justice or a political cause, others are wily opportunists filling a need and profiting from the high price that desperate people are willing to pay for safe, discrete passage.</p>
<Ability id="arc-ranger-transporter-trailbreaker-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-transporter-trailbreaker-ex" flavor="A transporter constantly works to obscure his trail.">Trailbreaker (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Passive Ability">He increases the Survival DC to track him, or a group of which he is a part, by an amount equal to half his ranger level (minimum 1). This does not stack with similar abilities, such as a <Link to="/arc-inquisitor/traceless_operative">traceless operative's</Link> <em>trackless</em> ability.</Pair>
</Ability>
<Ability id="arc-ranger-transporter-plot-course-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-ranger-transporter-plot-course-ex">Plot Course (Ex)</Pair>
<Pair hl title="Replaces">Favored terrain</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A transporter can spend 1d4 hours and attempt a DC 15 Knowledge (geography) check to plot a subtle course of travel between his current location and another destination. The transporter's course of travel is almost never direct, as it is optimized for smuggling. Thereafter, the transporter gains a +2 bonus on initiative, Knowledge (geography), Perception, Stealth, and Survival checks involving traveling along his plotted course.</Pair>
<Pair title="At 8th Level">If the transporter's Knowledge (geography) check exceeds the DC by 10, the bonuses increase to +4.</Pair>
<Pair title="At 13th Level">If the transporter's Knowledge (geography) check exceeds the DC by 20, the bonuses increase to +6.</Pair>
<Pair title="At 18th Level">If the transporter's Knowledge (geography) check exceeds the DC by 30, the bonuses increase to +8.</Pair>
<Pair title="Special">A transporter can gain the benefits of only a single plotted course at any given time. If the transporter ever strays from the course or attempts to plot a new course for any reason, he loses the benefits of his current course immediately. A transporter can retry his Knowledge (geography) check to plot a course as long as he spends 1d4 hours each time.</Pair>
</Ability>
<Ability id="arc-ranger-transporter-smugglers-bond-ex" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-ranger-transporter-smugglers-bond-ex">Smuggler's Bond (Ex)</Pair>
<Pair hl title="Alters">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Info">A transporter must choose his allies as his <em>hunter's bond,</em> not an animal companion.</Pair>
<Pair title="Passive Ability">Instead of granting the transporter's <em>favored enemy</em> bonus to his allies as a move action, he instead grants his <em>plot course</em> bonus to his allies constantly.</Pair>
</Ability>
<Ability id="arc-ranger-transporter-hideaway-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-transporter-hideaway-ex">Hideaway (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Ability">A transporter<sup><InnerLink showBacklink="backlink-arc-ranger-transporter-fake-fn-1" id="arc-ranger-transporter-fake-fn-1" data-hash-target to="arc-ranger-transporter-fake-fn-1-target">1</InnerLink></sup> can spend 1 hour and attempt a DC 20 Survival check to create a hidden shelter, useful for staying unseen by patrols of enemy creatures. The transporter's shelter can hold the transporter and one additional creature for every 2 by which the transporter exceeds the DC. The created shelter incorporates scents from the local area, preventing creatures on the inside from being detected by the <Link to="/umr/scent">scent</Link> ability of creatures outside of the shelter, and vice versa. Additionally, its floor is either elevated or constructed of a different substance than the nearby ground, preventing creatures outside of the shelter from using <Link to="/umr/tremorsense">tremorsense</Link> to detect creatures inside, and vice versa. Finally, the clever structure of the hideaway causes creatures outside of the shelter to take a -10 penalty on Perception checks to notice creatures inside, as if through a 1-foot-thick wall, while only causing creatures inside to take a -2 penalty on Perception checks to notice creatures outside.</Pair>
<Pair title="Special">These bonuses do not apply if the enemy creatures are intimately familiar with the area in which the hideaway was built (such as an area right near their home).</Pair>
</Ability>
<section data-footnotes><h3 id="arc-ranger-transporter-label">Footnotes</h3><ol>
<li id="arc-ranger-transporter-fake-fn-1-target"><p>There is no listed level at which this ability is granted. Given that it replaces a 7th-level ability, the intention was probably that this ability would also be gained at 7th level. Consult your GM. <InnerLink aria-label="Back to reference 1" id="backlink-arc-ranger-transporter-fake-fn-1" data-hash-target to="arc-ranger-transporter-fake-fn-1">↩</InnerLink></p></li>
</ol></section></>};
const _trapper = {title: "Trapper", jsx: <><h2 id="arc-ranger-trapper-trapper">Trapper</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 65</Link><br/>A trapper is a ranger who focuses exclusively on traps, rather than learning conventional magic. A trapper has the following class features.</p>
<Ability icon={["skills"]} id="arc-ranger-trapper-undefined">
<Pair id="arc-ranger-trapper-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/disable_device">Disable Device</Link> (DEX)</Pair></Ability>
<Ability id="arc-ranger-trapper-trapfinding" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-ranger-trapper-trapfinding">Trapfinding</Pair>
<Pair title="Passive Ability">A trapper adds 1/2 her ranger level on Perception skill checks made to locate traps and on Disable Device skill checks (minimum +1).</Pair>
<Pair title="Ability">A trapper can use Disable Device to disarm magic traps.</Pair>
</Ability>
<Ability id="arc-ranger-trapper-trap" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-trapper-trap">Trap</Pair>
<Pair hl title="Replaces">Spellcasting ability</Pair>
<Pair title="At 5th Level">A trapper learns how to create a <Link to="/rangertrap/snare_trap">snare trap</Link> and one other <Link to="/ability/ranger_traps">ranger trap</Link> of her choice.</Pair>
<Pair title="At 7th Level">She learns another trap.</Pair>
<Pair title="At 9th Level">She learns another trap.</Pair>
<Pair title="At 11th Level">She learns another trap.</Pair>
<Pair title="At 13th Level">She learns another trap.</Pair>
<Pair title="At 15th Level">She learns another trap.</Pair>
<Pair title="At 17th Level">She learns another trap.</Pair>
<Pair title="At 19th Level">She learns another trap.</Pair>
<Pair title="Special">The trapper can use these traps a total number of times per day equal to 1/2 her ranger level + her Wisdom modifier. Once a trap is learned, it can't be unlearned and replaced with a different type of trap. The trapper cannot select an individual trap more than once.</Pair>
</Ability>
<Ability id="arc-ranger-trapper-launch-trap" icon={["bowman"]}>
<Pair single id="arc-ranger-trapper-launch-trap">Launch Trap</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">A trapper can affix a magical ranger trap to an arrow, crossbow bolt, or thrown weapon, allowing her to set the trap remotely or use it as a direct attack. Attaching the trap to the projectile is part of the <strong className="hl">full-round action</strong> of creating a new trap. The trapped projectile is fired or thrown in the normal manner. If fired at a square, the trap is treated as if the ranger had set the trap in that square, except the DC is 5 lower than normal. If fired at a creature, the target takes damage from the ranged weapon and is treated as if it had triggered the trap (saving throw applies, if any). The attack has a maximum range of 60 feet, and range increments apply to the attack roll.</Pair>
<Pair title="Special">The duration of the trapped projectile starts from when it is created, not from when it is used.</Pair>
</Ability>
</>};
const _trophy_hunter = {title: "Trophy Hunter", jsx: <><h2 id="arc-ranger-trophy_hunter-trophy-hunter">Trophy Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 67</Link><br/>Some rangers have taken up the mysteries of black powder in order to become big game hunters. Finding firearms useful for taking down large and dangerous prey, they enter the fight with the crack of black powder fire, often ranging far and wide in their safaris and searches for ever-more-dangerous denizens of the wild to track, study, appreciate - and kill. While this might strike some as going against the ranger's usual respect for nature and the creatures of the wild, trophy hunters understand that they are just more pieces in nature's grand puzzle, and that the laws of the jungle - the right to kill and feed on those weaker than you, and the need to establish dominance through cunning and bloodshed - are both their rights and their duty as the current top of the food chain.</p>
<Ability id="arc-ranger-trophy_hunter-improved-tracking-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-ranger-trophy_hunter-improved-tracking-ex">Improved Tracking (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A trophy hunter gains a +2 bonus on Survival skill checks when following or identifying tracks. When he tracks, he can also attempt a Knowledge (nature) check at DC 15. On a success, the trophy hunter can discern the type and condition of any animals or magical beasts he tracks. By studying their tracks, the trophy hunter is able to identify a rough approximation of their health, maneuverability, and their general behavior as compared to the norm.</Pair>
</Ability>
<Ability id="arc-ranger-trophy_hunter-firearm-style" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-trophy_hunter-firearm-style">Firearm Style</Pair>
<Pair hl title="Replaces">All combat style feats</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A trophy hunter gains the <Link to="/feat/amateur_gunslinger">Amateur Gunslinger</Link> feat and <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link> (firearms), and can use any 1st-level <Link to="/ability/gunslinger_deeds">gunslinger deed</Link>.</Pair>
<Pair title="At 6th Level">The trophy hunter can take a <Link to="/main/grit_feat">grit feat</Link> or select a gunslinger deed of his level or lower, ranger's choice.</Pair>
<Pair title="At 10th Level">The trophy hunter can take a <Link to="/main/grit_feat">grit feat</Link> or select a gunslinger deed of his level or lower, ranger's choice.</Pair>
<Pair title="At 14th Level">The trophy hunter can take a <Link to="/main/grit_feat">grit feat</Link> or select a gunslinger deed of his level or lower, ranger's choice.</Pair>
<Pair title="At 18th Level">The trophy hunter can take a <Link to="/main/grit_feat">grit feat</Link> or select a gunslinger deed of his level or lower, ranger's choice.</Pair>
</Ability>
<Ability id="arc-ranger-trophy_hunter-hunters-aim-ex" icon={["smoking-finger"]}>
<Pair single id="arc-ranger-trophy_hunter-hunters-aim-ex" flavor={<>A trophy hunter gains a specific understanding of the weaknesses and vulnerabilities of his <em>favored enemies,</em> and his careful study of these enemies reveals the best way to hurt them.</>}>Hunter's Aim (Ex)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">When the trophy hunter makes a firearm attack against a <em>favored enemy,</em> he can target touch AC in the first two range increments of his firearm.</Pair>
<Pair title="Special">This ability stacks with other effects that increase the range increments to target touch AC, adding one range increment to the effect.</Pair>
</Ability>
</>};
const _urban_ranger = {title: "Urban Ranger", jsx: <><h2 id="arc-ranger-urban_ranger-urban-ranger">Urban Ranger</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 130</Link><br/>For the urban ranger, the streets and sewers of the city are just as dangerous as the barren wastelands or the deep forests. An urban ranger has the following class features.</p>
<Ability icon={["skills"]} id="arc-ranger-urban_ranger-undefined">
<Pair id="arc-ranger-urban_ranger-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/disable_device">Disable Device</Link> (DEX), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT)</Pair>
<Pair title="Removed Skills">Handle Animal, Knowledge (nature)</Pair></Ability>
<Ability id="arc-ranger-urban_ranger-favored-community-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-urban_ranger-favored-community-ex">Favored Community (Ex)</Pair>
<Pair hl title="Replaces">Favored terrain</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">The urban ranger forms a bond with a community. While inside the limits of this community, he gains a +2 bonus on initiative checks and Knowledge (local), Perception, Stealth, and Survival skill checks. An urban ranger traveling through his favored community leaves no trail and cannot be tracked (although he may leave a trail if he so desires).</Pair>
<Pair title="At 8th Level">An urban ranger may select an additional favored community. In addition, the skill bonus and initiative bonus in any one favored community (including the one just selected, if so desired) increases by +2.</Pair>
<Pair title="At 13th Level">An urban ranger may select an additional favored community. In addition, the skill bonus and initiative bonus in any one favored community (including the one just selected, if so desired) increases by +2.</Pair>
<Pair title="At 18th Level">An urban ranger may select an additional favored community. In addition, the skill bonus and initiative bonus in any one favored community (including the one just selected, if so desired) increases by +2.</Pair>
<Pair title="Special">For the purposes of this ability, a community is any settlement consisting of 100 or more individuals. The community may be larger than this minimum. Outlying farms, fields, and houses are not considered part of a community.</Pair>
</Ability>
<Ability id="arc-ranger-urban_ranger-trapfinding-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-urban_ranger-trapfinding-ex">Trapfinding (Ex)</Pair>
<Pair hl title="Replaces">Endurance</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">An urban ranger can find and disable traps, as the rogue class feature of the <Link to="/ability/trapfinding">same name</Link>.</Pair>
</Ability>
<Ability id="arc-ranger-urban_ranger-push-through-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-urban_ranger-push-through-ex">Push Through (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">An urban ranger is never slowed by <Link to="/rule/difficult_terrain">difficult terrain</Link> in his favored communities. In addition, he can move through the space occupied by local citizens as if they were allies. This does not apply to creatures intent on harming the ranger. Areas that are enchanted or magically manipulated to impede motion, however, still affect him.</Pair>
</Ability>
<Ability id="arc-ranger-urban_ranger-blend-in-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-ranger-urban_ranger-blend-in-ex">Blend In (Ex)</Pair>
<Pair hl title="Replaces">Camouflage</Pair>
<Pair title="At 12th Level">An urban ranger can use his Stealth bonus in place of a Disguise skill check in any of his favored communities. This disguise does not take an action to don. He must make a check whenever someone attempts to pick him out from the local citizens. If his check is successful, he blends into the crowd. While not invisible, enemies do not notice his presence and take no actions against him unless they are taking actions against the local citizens in general.</Pair>
</Ability>
<Ability id="arc-ranger-urban_ranger-invisibility-trick-sp" icon={["magic-swirl"]}>
<Pair single id="arc-ranger-urban_ranger-invisibility-trick-sp">Invisibility Trick (Sp)</Pair>
<Pair hl title="Replaces">Hide in plain sight</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Usage">Wisdom modifier times/day (minimum 1)</Pair>
<Pair title="Swift Action">The urban ranger can cast <Link to="/spell/greater_invisibility">greater invisibility</Link> on himself as a wizard of his ranger level.</Pair>
</Ability>
</>};
const _warden = {title: "Warden", jsx: <><h2 id="arc-ranger-warden-warden">Warden</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 68</Link><br/>All rangers have a bond with the wilderness, but the warden may have the strongest. This protector sits guard in the middle of the wilderness, keeping a lookout for any dangers that might spill from the deeper wilderness beyond, and protecting civilization from the savagery of nature - and vice versa. His long weeks, months, and sometimes years of isolation cause him to "hear" what the land is saying. Not all are crazy.</p>
<Ability id="arc-ranger-warden-master-of-terrain-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-warden-master-of-terrain-ex">Master of Terrain (Ex)</Pair>
<Pair hl title="Replaces">1st favored enemy</Pair>
<Pair title="At 1st Level">A warden selects his first <em>favored terrain.</em></Pair>
<Pair title="At 3rd Level">He gains another favored terrain.</Pair>
<Pair title="At 8th Level">He gains another favored terrain.</Pair>
<Pair title="At 13th Level">He gains another favored terrain.</Pair>
<Pair title="At 18th Level">He gains another favored terrain.</Pair>
</Ability>
<Ability id="arc-ranger-warden-live-in-comfort-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-warden-live-in-comfort-ex">Live in Comfort (Ex)</Pair>
<Pair hl title="Replaces">All combat style feats</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Info">A warden is truly at home within his <em>favored terrains.</em> He knows all the signs of the wilderness. He rarely gets lost. He can easily live off the land in comfort, and can provide for companions.</Pair>
<Pair title="Ability">The warden can take 10 on any Survival check involving any of his <em>favored terrains,</em> even when in immediate danger and distracted. If the warden is not in immediate danger and distracted, he can take 20 even if the check has a penalty for failure.</Pair>
</Ability>
<Ability id="arc-ranger-warden-terrain-bond-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-ranger-warden-terrain-bond-ex" flavor="A warden forms a bond with the land itself, enabling him to direct others in such terrain.">Terrain Bond (Ex)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">When in his <em>favored terrain,</em> the warden grants all allies within line of sight and that can hear him a +2 bonus on initiative checks and Perception, Stealth, and Survival skill checks. Also, as long as they travel with him, the warden's allies leave no trail and can't be tracked. The warden can choose for the group to leave a trail, or even for specific members of the group to leave a trail if he so desires.</Pair>
</Ability>
<Ability id="arc-ranger-warden-able-explorer-ex" icon={["rolling-dices"]}>
<Pair single id="arc-ranger-warden-able-explorer-ex">Able Explorer (Ex)</Pair>
<Pair hl title="Replaces">2nd, 3rd, and 4th favored enemies</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">When making an Acrobatics, Climb, Fly, Ride, or Swim check in any of his <em>favored terrains,</em> a warden can make two skill checks and take the higher.</Pair>
</Ability>
<Ability id="arc-ranger-warden-wilderness-whispers-su" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-ranger-warden-wilderness-whispers-su">Wilderness Whispers (Su)</Pair>
<Pair hl title="Replaces">5th favored enemy, master hunter</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A warden cannot be surprised and always acts as if he had rolled a natural 20 on any initiative check while within any of his <em>favored terrains.</em> A warden can always move at full speed while using Survival to follow tracks without penalty.</Pair>
</Ability>
</>};
const _wave_warden = {title: "Wave Warden", jsx: <><h2 id="arc-ranger-wave_warden-wave-warden">Wave Warden</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 194</Link><br/>The wave warden patrols beneath the sea, preserving the safety and secrets of merfolk communities. Though he fares best beneath the water, dry land is no haven to his quarry.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-ranger-wave_warden--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/merfolk">Merfolk</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-ranger-wave_warden-deep-sentinel-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-wave_warden-deep-sentinel-ex">Deep Sentinel (Ex)</Pair>
<Pair hl title="Replaces">Track</Pair>
<Pair title="Passive Ability">A wave warden adds half his level (minimum +1) on Perception checks made to notice creatures underwater.</Pair>
</Ability>
<Ability id="arc-ranger-wave_warden-aquatic-prowess-feat-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-wave_warden-aquatic-prowess-feat-ex">Aquatic Prowess Feat (Ex)</Pair>
<Pair hl title="Replaces">All combat style bonus feats</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">And every four levels thereafter, a wave warden selects a bonus feat that improves his prowess in aquatic environments. He can choose these feats even if he does not meet the prerequisites. Initially, he may choose from the following feats: <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/mobility">Mobility</Link>, <Link to="/feat/net_adept">Net Adept</Link>, <Link to="/feat/net_and_trident">Net and Trident</Link>, <Link to="/feat/net_maneuvering">Net Maneuvering</Link>, <Link to="/feat/precise_shot">Precise Shot</Link>, <Link to="/feat/rapid_reload">Rapid Reload</Link>, <Link to="/feat/sea_hunter">Sea Hunter</Link>, and <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link>.</Pair>
<Pair title="At 6th Level">He can select another bonus feat, following the rules above. He adds <Link to="/feat/improved_two_weapon_fighting">Improved Two-Weapon Fighting</Link>, <Link to="/feat/net_trickery">Net Trickery</Link>, and <Link to="/feat/spring_attack">Spring Attack</Link> to the list of feats.</Pair>
<Pair title="At 10th Level">He can select another bonus feat, following the rules above. He adds <Link to="/feat/greater_two_weapon_fighting">Greater Two-Weapon Fighting</Link> and <Link to="/feat/improved_precise_shot">Improved Precise Shot</Link> to the list.</Pair>
<Pair title="At 14th Level">He can select another bonus feat, following the rules above.</Pair>
<Pair title="At 18th Level">He can select another bonus feat, following the rules above.</Pair>
<Pair title="Special">This ability otherwise functions like and replaces the standard ranger's combat style bonus feats, including the limitations on armor worn.</Pair>
</Ability>
<Ability id="arc-ranger-wave_warden-favored-terrain-ex" icon={["broken-shield"]}>
<Pair single id="arc-ranger-wave_warden-favored-terrain-ex">Favored Terrain (Ex)</Pair>
<Pair hl title="Replaces">Favored terrain</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A wave warden gains water as a <em>favored terrain.</em> He does not gain additional <em>favored terrains.</em> This otherwise functions like the standard ranger's <em>favored terrain</em> ability and replaces that ability.</Pair>
<Pair title="At 8th Level">His bonus in aquatic terrain increases by +2.</Pair>
<Pair title="At 13th Level">His bonus in aquatic terrain increases by +2.</Pair>
<Pair title="At 18th Level">His bonus in aquatic terrain increases by +2.</Pair>
</Ability>
<Ability id="arc-ranger-wave_warden-seaborn-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-wave_warden-seaborn-ex">Seaborn (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A wave warden may move through any sort of aquatic growth (such as coral or seaweed) or across a wet surface at his normal speed and without taking damage or suffering any other impairment. Obstacles that are enchanted or magically manipulated to impede motion still affect him.</Pair>
</Ability>
<Ability id="arc-ranger-wave_warden-watery-summons-sp" icon={["magic-swirl"]}>
<Pair single id="arc-ranger-wave_warden-watery-summons-sp">Watery Summons (Sp)</Pair>
<Pair hl title="Replaces">Swift tracker</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Full-Round Action">A wave warden can summon allies once per day. This functions as <Link to="/spell/summon_natures_ally_iii">summon nature's ally III</Link>, except it can only be used to summon creatures with the aquatic or water subtypes. The warden's caster level is equal to his ranger level.</Pair>
<Pair title="At 14th Level">This ability improves to <Link to="/spell/summon_natures_ally_iv">summon nature's ally IV</Link>.</Pair>
<Pair title="At 17th Level">This ability improves to <Link to="/spell/summon_natures_ally_v">summon nature's ally V</Link>.</Pair>
<Pair title="At 20th Level">This ability improves to <Link to="/spell/summon_natures_ally_vi">summon nature's ally VI</Link>.</Pair>
</Ability>
</>};
const _wild_hunter = {title: "Wild Hunter", jsx: <><h2 id="arc-ranger-wild_hunter-wild-hunter">Wild Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 108</Link><br/>A wild hunter seeks to emulate the animals around him to keep him safe while he tracks his prey. Instead of studying the traits and behaviors of a <em>favored enemy,</em> a wild hunter studies those of various animals, incorporating those attributes into his hunting strategy.</p>
<Ability id="arc-ranger-wild_hunter-animal-focus-su" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-wild_hunter-animal-focus-su">Animal Focus (Su)</Pair>
<Pair hl title="Replaces">Favored enemy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">1 minute/day per ranger level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Swift Action">A wild hunter can take on the <Link to="/ability/animal_foci">aspect of an animal</Link>, gaining a bonus or special ability based on the type of animal emulated. This functions as the hunter's <em>animal focus</em> class feature, though this only applies to the wild hunter and not an animal companion (see <em>shared focus,</em> below).</Pair>
<Pair title="Special">He can only emulate one animal at a time.</Pair>
</Ability>
<Ability id="arc-ranger-wild_hunter-shared-focus-su" icon={["upgrade"]}>
<Pair single id="arc-ranger-wild_hunter-shared-focus-su">Shared Focus (Su)</Pair>
<Pair hl title="Replaces">Woodland stride, swift tracker</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A wild hunter can share his current animal focus with one creature appropriate to his <em>hunter's bond.</em> If the wild <em>hunter's bond</em> is with an animal companion, the companion automatically gains the benefits of the wild hunter's current animal focus. If the wild <em>hunter's bond</em> is with his companions, as a <strong className="hl">swift action</strong> he can select one bonded ally to gain the benefits of the hunter's current animal focus; this lasts until the <em>hunter's bond</em> ends, the animal focus ends for the wild hunter, or the wild hunter selects a different companion.</Pair>
</Ability>
</>};
const _wild_shadow = {title: "Wild Shadow", jsx: <><h2 id="arc-ranger-wild_shadow-wild-shadow">Wild Shadow</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 45</Link><br/>The isolation that some <Link to="/race/half_elves">half-elves</Link> feel leads them to live a life of isolation amid the wild places of the world. Such rangers stalk the wild like shadows, creating close bonds with the wild itself instead of seeking the solace and aid of companions. While ill at ease within cities and other urban areas, they are adept at using the terrain to tactical advantage; they dart through brambles and rough terrain with uncommon grace and use the land itself to lock down enemies. A wild shadow has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-ranger-wild_shadow--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/half_elf">Half-elf</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-ranger-wild_shadow-wild-at-heart-ex" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-ranger-wild_shadow-wild-at-heart-ex">Wild at Heart (Ex)</Pair>
<Pair hl title="Alters">Track, wild empathy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A wild shadow adds only 1/2 his class level when making <em>wild empathy</em> checks while in urban areas, and adds only 1/4 his class level to follow or identify tracks in such areas. In non-urban settings, he is considered two levels higher when determining the bonuses for such checks.</Pair>
</Ability>
<Ability id="arc-ranger-wild_shadow-favored-terrain-ex" icon={["broken-shield"]}>
<Pair single id="arc-ranger-wild_shadow-favored-terrain-ex">Favored Terrain (Ex)</Pair>
<Pair hl title="Alters">Favored terrain</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Info">When a wild shadow chooses a <em>favored terrain,</em> he cannot choose urban as the terrain type. Furthermore, when he chooses a new <em>favored terrain</em> type, he cannot choose the urban terrain type.</Pair>
</Ability>
<Ability id="arc-ranger-wild_shadow-woodland-stride-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-wild_shadow-woodland-stride-ex">Woodland Stride (Ex)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="At 4th Level">This ability functions as the 7th-level ranger class feature <Link to="/ability/woodland_stride">of the same name</Link>, but the wild shadow gains it at 4th level instead.</Pair>
</Ability>
<Ability id="arc-ranger-wild_shadow-unfettered-step-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-wild_shadow-unfettered-step-ex">Unfettered Step (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A wild shadow's <em>woodland stride</em> class feature functions in any <Link to="/rule/difficult_terrain">difficult terrain</Link> within any of his <em>favored terrains,</em> even in areas that are enchanted or magically manipulated to impede motion.</Pair>
</Ability>
<Ability id="arc-ranger-wild_shadow-harrying-attack-ex" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="arc-ranger-wild_shadow-harrying-attack-ex" flavor={<>A wild shadow can use his knowledge of terrain to make shrewd attacks in combat. Such attacks can make foes fumble or cause them to become entangled within areas of the wild shadow's <em>favored terrain.</em></>}>Harrying Attack (Ex)</Pair>
<Pair hl title="Replaces">Quarry</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Standard Action">The wild shadow denotes one target within line of sight and within one of his <em>favored terrains</em> as his <em>harried prey.</em> Once the foe is so designated, every time the wild shadow hits this <em>harried prey</em> with a melee or ranged weapon attack (either manufactured or natural), that creature is <Link to="/rule/entangled">entangled</Link> for 1 round. A wild shadow can have no more than one <em>harried prey</em> at a time and that creature must correspond to one of his <em>favored enemy</em> types.</Pair>
<Pair title="Special">He can dismiss this effect at any time as a <strong className="hl">free action</strong>, but he cannot select a new <em>harried prey</em> for 24 hours. If the wild shadow sees proof that his <em>harried prey</em> is dead, he can select a new <em>harried prey</em> after waiting 1 hour.</Pair>
</Ability>
<Ability id="arc-ranger-wild_shadow-wild-stalker-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-wild_shadow-wild-stalker-ex" flavor="A wild shadow learns to better use natural surroundings to obscure his position in combat.">Wild Stalker (Ex)</Pair>
<Pair hl title="Replaces">Camouflage</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">Whenever a wild shadow is within one of his <em>favored terrains</em> and a feature of that terrain grants him <Link to="/rule/cover">cover</Link>, the bonuses to AC and Reflex saves for that cover improve by 1. Additionally, while he is within one of his <em>favored terrains,</em> if he gains <Link to="/rule/concealment">concealment</Link> or total concealment, the miss chance of either type of concealment improves by 10%.</Pair>
<Pair title="At 16th Level">The bonuses granted by cover increase by 1 and the miss chance increases by another 10%.</Pair>
<Pair title="At 19th Level">The bonuses granted by cover increase by 1 and the miss chance increases by another 10%.</Pair>
</Ability>
<Ability id="arc-ranger-wild_shadow-master-of-terrain-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-wild_shadow-master-of-terrain-ex">Master of Terrain (Ex)</Pair>
<Pair hl title="Replaces">Improved quarry</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Choice">A wild shadow can use his <em>harrying attack</em> against creatures other than his <em>favored enemy</em> or he can spend a <strong className="hl">standard action</strong> to designate up to two of his <em>favored enemies</em> as his <em>harried prey</em> instead.</Pair>
</Ability>
</>};
const _wild_soul = {title: "Wild Soul", jsx: <><h2 id="arc-ranger-wild_soul-wild-soul">Wild Soul</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 75</Link><br/>Hailing from primitive roots in the wild, some rangers venture to more civilized lands and learn their ways. Wild souls carry these more refined teachings back to the frontier lands of their birth, and they employ that knowledge in defense of their homes.</p>
<Ability id="arc-ranger-wild_soul-unfettered-soul" icon={["hazard-sign"]}>
<Pair single id="arc-ranger-wild_soul-unfettered-soul">Unfettered Soul</Pair>
<Pair title="Info">A wild soul swears to himself never to make use of advanced technology, alchemy, arcane magic, or firearms. He also must oppose their use on his person, refusing to be a willing target and attempting a saving throw if possible (even if the effect is harmless or beneficial). Violating this oath causes a wild soul to lose the abilities granted by this archetype until he <Link to="/spell/atonement">atones</Link>.</Pair>
</Ability>
<Ability id="arc-ranger-wild_soul-nemesis-ex" icon={["upgrade"]}>
<Pair single id="arc-ranger-wild_soul-nemesis-ex">Nemesis (Ex)</Pair>
<Pair hl title="Replaces">Favored enemy</Pair>
<Pair title="Passive Ability">A wild soul gains a +2 bonus on Intimidate, Knowledge, Perception, Sense Motive, Spellcraft, and Survival checks against creatures that wield advanced technology, alchemical weapons (including an alchemist's bombs), or firearms and against those that cast arcane spells (this does not apply to creatures that use spell-like abilities). Likewise, he gains a +2 bonus on weapon attack and damage rolls against such opponents.</Pair>
<Pair title="Ability">The wild soul can attempt Craft (alchemy), Knowledge (arcana), and Spellcraft checks untrained when attempting to identify enemy magic or advanced technology.</Pair>
<Pair title="At 5th Level">These bonuses become +3.</Pair>
<Pair title="At 10th Level">These bonuses increase to +4.</Pair>
<Pair title="At 15th Level">These bonuses become +5.</Pair>
<Pair title="At 20th Level">These bonuses increase to +6.</Pair>
</Ability>
<Ability id="arc-ranger-wild_soul-nemesis-defense-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-wild_soul-nemesis-defense-ex">Nemesis Defense (Ex)</Pair>
<Pair hl title="Replaces">Swift tracker</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">A wild soul adds his <em>nemesis</em> bonus on saving throws against advanced technology, alchemical items (including an alchemist's bombs and extracts), and arcane spells. He also adds this bonus to his AC against advanced technological items, alchemical items (including alchemist bombs), arcane spells that require attack rolls, and firearms.</Pair>
</Ability>
<Ability id="arc-ranger-wild_soul-break-the-interloper-su" icon={["armor-downgrade","heart-plus"]}>
<Pair single id="arc-ranger-wild_soul-break-the-interloper-su">Break the Interloper (Su)</Pair>
<Pair hl title="Replaces">Quarry</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">When a wild soul hits an arcane spellcaster, a creature with <em>extract</em> slots, or a creature with <em>grit</em> (but not grit-like pools such as <em>panache</em>) with a weapon attack, the target either loses its highest-level available spell or extract slot or loses 1 point of grit, and the wild soul gains 5 <Link to="/rule/temporary_hit_points">temporary hit points</Link>.</Pair>
<Pair title="Special">A target of this ability can negate this effect with a successful Fortitude save (DC = 10 + half the ranger's level + his Wisdom modifier). Regardless of the outcome of the saving throw, the target is immune to this ability for 24 hours.</Pair>
</Ability>
<Ability id="arc-ranger-wild_soul-dizzying-onslaught-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-ranger-wild_soul-dizzying-onslaught-ex" flavor="A wild soul lands punishing blows that devastate his nemeses' ability to focus.">Dizzying Onslaught (Ex)</Pair>
<Pair hl title="Replaces">Improved quarry</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Ability">When he confirms a critical hit against a creature against whom his <em>nemesis</em> bonus applies, for 1 minute the target must succeed at a <Link to="/rule/concentration">concentration</Link> check (DC = 20 + the wild soul's Wisdom modifier + twice the spell's level) to cast an arcane spell, create an <em>extract,</em> or use an alchemist's bomb, and the target can't spend or gain <em>grit.</em></Pair>
</Ability>
<Ability id="arc-ranger-wild_soul-nemesis-slayer-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-wild_soul-nemesis-slayer-ex" flavor="A wild soul becomes death incarnate to his nemeses.">Nemesis Slayer (Ex)</Pair>
<Pair hl title="Replaces">Master hunter</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Usage">Five times per day, but cannot be used against the same creature more than once in a 24-hour period</Pair>
<Pair title="Standard Action">He can make a single attack against a <em>nemesis</em> at his full attack bonus. If the attack hits, the target takes damage normally and must succeed at a Fortitude save (DC = 10 + half the wild soul's level + his Wisdom modifier) or die. The wild soul can instead deal an amount of nonlethal damage equal to the creature's current hit points, which the target can negate with a successful save at the same DC.</Pair>
</Ability>
</>};
const _wild_stalker = {title: "Wild Stalker", jsx: <><h2 id="arc-ranger-wild_stalker-wild-stalker">Wild Stalker</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 68</Link><br/>Civilization grows stronger and more decadent with each passing year. It tears into unclaimed wilderness and destroys the fragile ecology in its constant push for expansion and exploitation. The wild stalker forsakes the bonds of community and lives in the trackless wilds far from others of his kind, or perhaps grew up there, never knowing of civilization as anything more than his enemy. He drives pioneers back to civilization and strives to keep the land unspoiled.</p>
<Ability id="arc-ranger-wild_stalker-strong-senses-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-ranger-wild_stalker-strong-senses-ex" flavor="A wild stalker's life among the wild has sharpened his senses.">Strong Senses (Ex)</Pair>
<Pair hl title="Replaces">1st favored enemy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">He gains low-light vision and a bonus on Perception checks equal to 1 + <Link to="/misc/one_fourth">one-fourth</Link> of his ranger level. If he already has low-light vision, the bonus becomes 2 + one-fourth of his ranger level.<sup><InnerLink showBacklink="backlink-arc-ranger-wild_stalker-fake-fn-1" id="arc-ranger-wild_stalker-fake-fn-1" data-hash-target to="arc-ranger-wild_stalker-fake-fn-1-target">1</InnerLink></sup></Pair>
</Ability>
<Ability id="arc-ranger-wild_stalker-uncanny-dodge-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-wild_stalker-uncanny-dodge-ex">Uncanny Dodge (Ex)</Pair>
<Pair hl title="Replaces">2nd-level combat style feat</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A wild stalker gains <Link to="/ability/uncanny_dodge">uncanny dodge</Link> as the barbarian class feature.</Pair>
</Ability>
<Ability id="arc-ranger-wild_stalker-rage-of-the-wild-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-wild_stalker-rage-of-the-wild-ex">Rage of the Wild (Ex)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A wild stalker gains the <em>rage</em> ability as the <Link to="/class/barbarian">barbarian</Link> class feature, but its barbarian level is considered to be his ranger level - 3.</Pair>
</Ability>
<Ability id="arc-ranger-wild_stalker-rage-ex" extraClasses="subAbility" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-ranger-wild_stalker-rage-ex" flavor="Text from the barbarian class.">Rage (Ex)</Pair>
<Pair title="Usage">2 rounds/day + double your barbarian level + your Constitution modifier</Pair>
<Pair title="Free Action">You can enter (or end) a rage. You gain a +4 morale bonus to your Strength and Constitution, as well as a +2 morale bonus on Will saves. The increase to Constitution grants you 2 hit points per Hit Dice, but these disappear when the rage ends and are not lost first like <Link to="/rule/temporary_hit_points">temporary hit points</Link>.</Pair>
<Pair title="Passive Ability">While in rage, you take a -2 penalty to Armor Class, and you cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except Acrobatics, Fly, Intimidate, and Ride) or any ability that requires patience or concentration. You are <Link to="/misc/fatigued">fatigued</Link> after <em>rage</em> for a number of rounds equal to 2 times the number of rounds spent in the rage. You cannot enter a new <em>rage</em> while fatigued or <Link to="/misc/exhausted">exhausted</Link> but can otherwise enter <em>rage</em> multiple times during a single encounter or combat. If you fall unconscious, your rage immediately ends, placing you in peril of death.</Pair>
<Pair title="Special">Temporary increases to Constitution, such as those gained from rage and spells like <Link to="/spell/bears_endurance">bear's endurance</Link>, do not increase the total number of rounds that a barbarian can rage per day. The total number of rounds of rage per day is renewed after resting for 8 hours, although these hours do not need to be consecutive.</Pair>
</Ability>
<Ability id="arc-ranger-wild_stalker-rage-powers" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-wild_stalker-rage-powers">Rage Powers</Pair>
<Pair hl title="Replaces">2nd, 3rd, 4th, and 5th favored enemy</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A wild stalker ranger gains a single <Link to="/ability/rage_powers">rage power</Link>, as the barbarian class feature.</Pair>
<Pair title="At 10th Level">He gains another rage power.</Pair>
<Pair title="At 15th Level">He gains another rage power.</Pair>
<Pair title="At 20th Level">He gains another rage power.</Pair>
</Ability>
<Ability id="arc-ranger-wild_stalker-wild-talents-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-ranger-wild_stalker-wild-talents-ex">Wild Talents (Ex)</Pair>
<Pair hl title="Replaces">6th-, 10th-, 14th-, and 18th-level combat style feat</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Choice">A wild stalker can either take a rage power, or gain a +2 insight bonus into any one of the following skills: Acrobatics, Climb, Perception, Stealth, Survival, or Swim.<sup><InnerLink showBacklink="backlink-arc-ranger-wild_stalker-fake-fn-2" id="arc-ranger-wild_stalker-fake-fn-2" data-hash-target to="arc-ranger-wild_stalker-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="At 10th Level">The wild stalker can gain one of these two benefits again.</Pair>
<Pair title="At 14th Level">The wild stalker can gain one of these two benefits again.</Pair>
<Pair title="At 18th Level">The wild stalker can gain one of these two benefits again.</Pair>
</Ability>
<section data-footnotes><h3 id="arc-ranger-wild_stalker-label">Footnotes</h3><ol>
<li id="arc-ranger-wild_stalker-fake-fn-1-target"><p>The original text reads: <em>"This bonus increases by +1 for every four levels after 1st."</em> This implies a 1/5/9/13/17 progression, which would only reach +5/+6 at 20th level, but the text continues, <em>"(to a maximum of +6 [or +7] at 20th level),"</em> which only makes sense if the bonus increases <em>at 4th level</em> and every four levels thereafter. This is the interpretation used here. <InnerLink aria-label="Back to reference 1" id="backlink-arc-ranger-wild_stalker-fake-fn-1" data-hash-target to="arc-ranger-wild_stalker-fake-fn-1">↩</InnerLink></p></li>
<li id="arc-ranger-wild_stalker-fake-fn-2-target"><p>The original text reads: <em>"The wild stalker can gain one of these two benefits again every five levels after 6th (to a maximum of 4 times at 20th level)."</em> The listed progression only gives three benefits (at levels 6/11/16), not four. Either the maximum is wrong, or the level progression is wrong. Given that this ability replaces four bonus feats (at levels 6/10/14/18), the latter interpretation has been used here, and the ability is granted every <em>four</em> levels instead of five (which matches the levels of the bonus feats). <InnerLink aria-label="Back to reference 2" id="backlink-arc-ranger-wild_stalker-fake-fn-2" data-hash-target to="arc-ranger-wild_stalker-fake-fn-2">↩</InnerLink></p></li>
</ol></section></>};
const _wilderness_explorer = {title: "Wilderness Explorer", jsx: <><h2 id="arc-ranger-wilderness_explorer-wilderness-explorer">Wilderness Explorer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 74</Link><br/>Wilderness explorers are adept at making peaceful contact with remote societies.</p>
<Ability icon={["skills"]} id="arc-ranger-wilderness_explorer-undefined">
<Pair id="arc-ranger-wilderness_explorer-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT)</Pair>
<Pair title="Removed Skills">Intimidate, Knowledge (dungeoneering)</Pair></Ability>
<Ability id="arc-ranger-wilderness_explorer-cultural-contact-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-wilderness_explorer-cultural-contact-ex">Cultural Contact (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Passive Ability">A wilderness explorer gains the ability to communicate with creatures with which he doesn't share a common language. Only basic concepts can be conveyed or understood, such as "I need help," "I come in peace," "Come over here," "Go over there," and the like. This allows the wilderness explorer to ignore the common language requirement of social interaction and language-dependent spells and effects, but he can do so only when the information being shared is relatively simple. The creature with which the wilderness explorer communicates must understand at least one language for this ability to function.</Pair>
<Pair title="Ability">Additionally, a wilderness explorer can peacefully influence the initial attitude of humanoids that have Intelligence scores of 2 or lower. This ability functions just like <em>wild empathy,</em> but it works on humanoids instead of on animals. The wilderness explorer can also use this ability to influence a monstrous humanoid with 2 or lower Intelligence, but the wilderness explorer takes a -4 penalty on the check.</Pair>
</Ability>
<Ability id="arc-ranger-wilderness_explorer-hazard-sense-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-wilderness_explorer-hazard-sense-ex" flavor="A wilderness explorer gains an intuitive understanding of natural hazards and traps fashioned from a natural environment.">Hazard Sense (Ex)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">He gains a bonus on Reflex saves against natural hazards and wilderness traps and a dodge bonus to AC against attacks from wilderness traps. Both of these bonuses are equal to <Link to="/misc/one_fourth">one-fourth</Link> of his ranger level.</Pair>
</Ability>
<Ability id="arc-ranger-wilderness_explorer-indigenous-spirit-su" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-wilderness_explorer-indigenous-spirit-su" flavor="A wilderness explorer attracts the aid of native spirits, which reward his appreciation of their home with whispered warnings.">Indigenous Spirit (Su)</Pair>
<Pair hl title="Replaces">Swift tracker</Pair>
<Pair hl title="Alters">Favored terrain</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">The wilderness explorer gains <Link to="/ability/uncanny_dodge">uncanny dodge</Link> as long as he remains within one of his chosen <em>favored terrains.</em> This works like the barbarian ability of the same name.</Pair>
</Ability>
<Ability id="arc-ranger-wilderness_explorer-guardian-spirit-su" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-wilderness_explorer-guardian-spirit-su" flavor="A wilderness explorer gains the aid of indigenous spirits, which favor him when he is defending himself against multiple foes that surround him.">Guardian Spirit (Su)</Pair>
<Pair hl title="Replaces">Quarry</Pair>
<Pair hl title="Alters">Favored terrain</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">He gains <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link>; this ability functions only while the ranger is within one of his <em>favored terrains.</em></Pair>
</Ability>
<Ability id="arc-ranger-wilderness_explorer-manifest-spirit-su" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-wilderness_explorer-manifest-spirit-su" flavor="A wilderness explorer is shielded from magic by those guardian spirits that favor him.">Manifest Spirit (Su)</Pair>
<Pair hl title="Replaces">Improved quarry</Pair>
<Pair hl title="Alters">Favored terrain</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Special">He gains spell resistance equal to 11 + his ranger level. This ability functions only while the wilderness explorer is within one of his <em>favored terrains.</em></Pair>
</Ability>
</>};
const _wilderness_medic = {title: "Wilderness Medic", jsx: <><h2 id="arc-ranger-wilderness_medic-wilderness-medic">Wilderness Medic</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 5</Link><br/>Wilderness medics know a variety of ways they can supply and preserve a rebellion or similar movement without requiring any resources that might make them easier to track down.</p>
<Ability id="arc-ranger-wilderness_medic-herbalist-training-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-ranger-wilderness_medic-herbalist-training-ex">Herbalist Training (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A wilderness medic can attempt Profession (herbalism) checks untrained and the wilderness medic gains a bonus equal to 1/2 his ranger level (minimum +1) on Heal checks and Profession (herbalism) checks. When he successfully <Link to="/rule/foraging">forages</Link> for herbs, he finds twice as many doses of any herb he would normally.</Pair>
</Ability>
<Ability id="arc-ranger-wilderness_medic-herbal-medicine-ex" icon={["heart-plus"]}>
<Pair single id="arc-ranger-wilderness_medic-herbal-medicine-ex">Herbal Medicine (Ex)</Pair>
<Pair hl title="Replaces">Endurance, evasion</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A wilderness medic can mimic the effects of <Link to="/spell/stabilize">stabilize</Link> at will in any wilderness area by spending one use of a <Link to="/eq-misc/healers_kit">healer's kit</Link> as long as he can see the target.</Pair>
<Pair title="Standard Action">The wilderness medic can use encouraging words and herbs to lessen the severity of certain conditions affecting a touched target. If the target is <Link to="/misc/exhausted">exhausted</Link>, it becomes <Link to="/misc/fatigued">fatigued</Link> instead. If the target is <Link to="/misc/frightened">frightened</Link>, it becomes <Link to="/misc/shaken">shaken</Link> instead. If the target is <Link to="/misc/nauseated">nauseated</Link>, it becomes <Link to="/misc/sickened">sickened</Link> instead. The duration of the effect is unchanged; the effect is simply reduced to the lesser version.</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="At 9th Level">The wilderness medic can lessen the severity of additional conditions for the target and cure other conditions that the target suffers. If the target creature is <Link to="/misc/blinded">blinded</Link>, it becomes <Link to="/misc/dazzled">dazzled</Link> instead. If the target is <Link to="/misc/panicked">panicked</Link>, it becomes shaken instead. If it has any of the following conditions, they are cured: <Link to="/misc/deafened">deafened</Link>, fatigued, shaken, and sickened.</Pair>
<Pair title="Special">The wilderness medic is able to use the non-<em>stabilize</em> ability on a given touched target once every 24 hours.</Pair>
</Ability>
<Ability id="arc-ranger-wilderness_medic-rallying-bond-sp" icon={["broken-shield","heart-plus","upgrade"]}>
<Pair single id="arc-ranger-wilderness_medic-rallying-bond-sp">Rallying Bond (Sp)</Pair>
<Pair hl title="Replaces">Improved evasion</Pair>
<Pair hl title="Alters">Hunter's bond</Pair>
<Pair title="At 4th Level">A wilderness medic must choose his companions for his <em>hunter's bond.</em></Pair>
<Pair title="At 9th Level">The wilderness medic can encourage all of his companions when he uses his <em>hunter's bond</em> to benefit his companions (see the ranger's <em>hunter's bond</em> ability). As a <strong className="hl">free action</strong> when the wilderness medic uses a <strong className="hl">move action</strong> to grant affected allies half his <em>favored enemy</em> bonus, he can also grant affected allies the benefits of <Link to="/spell/remove_fear">remove fear</Link>.</Pair>
<Pair title="At 14th Level">When the wilderness medic uses this ability, he can instead affect all allies that benefit from his <em>hunter's bond</em> with <Link to="/spell/blessing_of_fervor">blessing of fervor</Link>, using his ranger level as his caster level.</Pair>
<Pair title="Usage">Wisdom modifier times/day</Pair>
</Ability>
</>};
const _witchguard = {title: "Witchguard", jsx: <><h2 id="arc-ranger-witchguard-witchguard">Witchguard</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_north">People of the North pg. 25</Link><br/>Witchguards are the sworn defenders of the White Witches of Irrisen. Although the White Witches are spellcasters of immense power, even they cannot defend themselves against every attack. Witchguards dedicate their lives to protecting their charges, and they gain some arcane knowledge in return. They are trained to work closely with witches and defend their charges from harm. Witchguards learn magical abilities from the same patrons that grant witches their powers, though they can use their abilities to protect any kind of spellcaster, not just a witch. A witchguard is ready to face any foe that might threaten his charge, and he is ever prepared to lay down his life to protect the life of the person he is sworn to defend.</p>
<Ability icon={["skills"]} id="arc-ranger-witchguard-undefined">
<Pair id="arc-ranger-witchguard-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT), <Link to="/skill/sense_motive">Sense Motive</Link> (WIS)</Pair>
<Pair title="Removed Skills">Handle Animal, Knowledge (dungeoneering)</Pair></Ability>
<Ability id="arc-ranger-witchguard-defend-charge-ex" icon={["shield-reflect"]}>
<Pair single id="arc-ranger-witchguard-defend-charge-ex">Defend Charge (Ex)</Pair>
<Pair hl title="Replaces">Hunter's bond</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Usage">1 time/day + 1 per three ranger levels beyond 4th<ByLevelPop levels={[[4,1],[7,2],[10,3],[13,4],[16,5],[19,6]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">A witchguard forms a bond with a spellcaster he has sworn to defend. This bond allows the witchguard to spend a <strong className="hl">move action</strong> to grant an adjacent spellcaster a +2 dodge bonus to AC and a +2 circumstance bonus on <Link to="/rule/concentration">concentration</Link> checks. The bonuses last for a number of rounds equal to the witchguard's Wisdom modifier (minimum 1).</Pair>
<Pair title="At 5th Level">These bonuses become +4.</Pair>
<Pair title="At 10th Level">These bonuses increase to +6.</Pair>
<Pair title="At 15th Level">These bonuses become +8.</Pair>
<Pair title="At 20th Level">These bonuses increase to +10.</Pair>
</Ability>
<Ability id="arc-ranger-witchguard-bodyguard-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-witchguard-bodyguard-ex">Bodyguard (Ex)</Pair>
<Pair hl title="Replaces">Endurance</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A witchguard gains <Link to="/feat/bodyguard">Bodyguard</Link> as a bonus feat, even if he doesn't meet the prerequisite.</Pair>
</Ability>
<Ability id="arc-ranger-witchguard-patron-su" icon={["spell-book"]}>
<Pair single id="arc-ranger-witchguard-patron-su" flavor="A witchguard learns something of arcane magic from the witches he defends.">Patron (Su)</Pair>
<Pair title="At 4th Level">When a witchguard gains the ability to cast spells, he must also select a <Link to="/ability/patrons">patron</Link>, as the witch class feature. This patron is usually the same as the patron of the witch he is sworn to protect, but the witchguard may choose any patron. The witchguard adds the first four spells from his patron's spell list to his ranger spell list. The witchguard cannot cast patron spells of a level he is unable to cast.</Pair>
</Ability>
<Ability id="arc-ranger-witchguard-sworn-defender-ex" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-witchguard-sworn-defender-ex">Sworn Defender (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A witchguard gains <Link to="/feat/in_harms_way">In Harm's Way</Link> as a bonus feat.</Pair>
</Ability>
</>};
const _yokai_hunter = {title: "Yokai Hunter", jsx: <><h2 id="arc-ranger-yokai_hunter-yokai-hunter">Yokai Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/dragon_empires_primer">Dragon Empires Primer pg. 23</Link><br/>Yokai hunters possess a supernatural tether to the spirit worlds that shroud mortal existence. They use their powers to peer into the realm of the dead, and are adept at hunting those who dwell in the realm between the Material Plane and the Great Beyond, the supernatural beings Tians refer to as yokai. The yokai hunter is an archetype of the ranger class.</p>
<Ability id="arc-ranger-yokai_hunter-favored-yokai-su" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-ranger-yokai_hunter-favored-yokai-su" flavor={<>A yokai hunter possesses a supernatural ability to sense beings connected to the spirit world, such as <Link to="/family/kami">kami</Link>, <Link to="/family/oni">oni</Link>, and <Link to="/template/ghost">ghosts</Link>, and is formidable at fighting them.</>}>Favored Yokai (Su)</Pair>
<Pair hl title="Replaces">Favored enemy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A yokai hunter gains a +2 bonus on weapon attacks and damage rolls against one of the following creature types (and subtypes, if applicable), which are considered yokai for the purposes of this archetype: aberration, dragon, fey, magical beast, outsider (native), and undead (incorporeal). (A GM may choose to alter this list for the purposes of her campaign.)</Pair>
<Pair title="Ability">In addition, whenever a yokai hunter sees a <em>favored yokai</em> that is disguised or has not made its otherworldly essence known, he gains an automatic check to identify the creature as such. To make this check, a yokai hunter rolls 1d20 and adds his yokai hunter level and Charisma modifier (DC 10 + 1/2 the yokai's Hit Dice + the yokai's Cha modifier). A successful check means that the yokai hunter recognizes the creature's ties to the spiritual world. Regardless of whether the check is successful, a yokai hunter gains the bonus on weapon attacks and damage rolls against <em>favored yokai.</em></Pair>
<Pair title="At 5th Level">A yokai hunter may select another <em>favored yokai</em> from the list above, gaining a +2 bonus on weapon attacks and damage rolls against that yokai.</Pair>
<Pair title="At 10th Level">A yokai hunter may select another <em>favored yokai</em> from the list above, gaining a +2 bonus on weapon attacks and damage rolls against that yokai.</Pair>
<Pair title="At 15th Level">A yokai hunter may select another <em>favored yokai</em> from the list above, gaining a +2 bonus on weapon attacks and damage rolls against that yokai.</Pair>
<Pair title="At 20th Level">A yokai hunter may select another <em>favored yokai</em> from the list above, gaining a +2 bonus on weapon attacks and damage rolls against that yokai.</Pair>
<Pair title="Special">Ranger abilities that rely on a <em>favored enemy</em> instead rely on this ability.</Pair>
</Ability>
<Ability id="arc-ranger-yokai_hunter-yokai-sense-su" icon={["stairs-goal"]}>
<Pair single id="arc-ranger-yokai_hunter-yokai-sense-su">Yokai Sense (Su)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A yokai hunter can sense yokai he has identified with his <em>favored yokai</em> ability as though he had <Link to="/umr/blindsense">blindsense</Link> out to a range of 60 feet.</Pair>
</Ability>
<Ability id="arc-ranger-yokai_hunter-resist-yokai-su" icon={["armor-upgrade"]}>
<Pair single id="arc-ranger-yokai_hunter-resist-yokai-su">Resist Yokai (Su)</Pair>
<Pair hl title="Replaces">Camouflage</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">A yokai hunter can attempt to shrug off the magical energies of a yokai. He gains a +4 insight bonus on saving throws to resist the spells, spell-like abilities, and supernatural abilities of <em>favored yokai.</em></Pair>
<Pair title="Standard Action">Once per day, a yokai hunter can shed an effect placed on him by a yokai as <Link to="/spell/break_enchantment">break enchantment</Link>, using his yokai hunter level as his caster level.</Pair>
</Ability>
</>};
export default {abendego_diver:_abendego_diver,battle_scout:_battle_scout,beast_master:_beast_master,blightwarden:_blightwarden,bow_nomad:_bow_nomad,cinderwalker:_cinderwalker,code_runner:_code_runner,corpse_hunter:_corpse_hunter,dandy:_dandy,darklands_sailor:_darklands_sailor,deep_walker:_deep_walker,divine_tracker:_divine_tracker,dragon_hunter:_dragon_hunter,drake_warden:_drake_warden,dungeon_rover:_dungeon_rover,dusk_stalker:_dusk_stalker,elemental_envoy:_elemental_envoy,falconer:_falconer,flamewarden:_flamewarden,fortune_finder:_fortune_finder,freebooter:_freebooter,galvanic_saboteur:_galvanic_saboteur,groom:_groom,guide:_guide,guildbreaker:_guildbreaker,hooded_champion:_hooded_champion,horse_lord:_horse_lord,ilsurian_archer:_ilsurian_archer,infiltrator:_infiltrator,jungle_lord:_jungle_lord,lantern_lighter:_lantern_lighter,nirmathi_irregular:_nirmathi_irregular,planar_scout:_planar_scout,poison_darter:_poison_darter,raven_master:_raven_master,realm_wanderer:_realm_wanderer,sable_company_marine:_sable_company_marine,sentinel:_sentinel,shapeshifter:_shapeshifter,skirmisher:_skirmisher,spirit_ranger:_spirit_ranger,stormwalker:_stormwalker,summit_sentinel:_summit_sentinel,sword_devil:_sword_devil,tanglebriar_demonslayer:_tanglebriar_demonslayer,tidal_hunter:_tidal_hunter,toxic_herbalist:_toxic_herbalist,toxophilite:_toxophilite,transporter:_transporter,trapper:_trapper,trophy_hunter:_trophy_hunter,urban_ranger:_urban_ranger,warden:_warden,wave_warden:_wave_warden,wild_hunter:_wild_hunter,wild_shadow:_wild_shadow,wild_soul:_wild_soul,wild_stalker:_wild_stalker,wilderness_explorer:_wilderness_explorer,wilderness_medic:_wilderness_medic,witchguard:_witchguard,yokai_hunter:_yokai_hunter}