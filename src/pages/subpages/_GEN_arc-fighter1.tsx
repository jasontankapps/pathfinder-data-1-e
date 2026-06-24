import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _aerial_assaulter = {title: "Aerial Assaulter", jsx: <><h2 id="arc-fighter-aerial_assaulter-aerial-assaulter">Aerial Assaulter</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 27</Link><br/>As staunch believers in the value of higher ground, the Shory developed special fighting styles that capitalize on fighting from above. While many dismiss such techniques as a niche tactic, aerial assaulters leap to great heights and create higher ground where there is none.</p>
<Ability icon={["skills"]} id="arc-fighter-aerial_assaulter-undefined">
<Pair id="arc-fighter-aerial_assaulter-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX), <Link to="/skill/fly">Fly</Link> (DEX)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering), Ride, Swim</Pair></Ability>
<Ability id="arc-fighter-aerial_assaulter-aerial-expertise-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-aerial_assaulter-aerial-expertise-ex">Aerial Expertise (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An aerial assaulter gains a +2 bonus on Fly checks. Additionally, whenever he is affected by a spell or ability that grants him a fly speed, he treats that spell or ability as though its caster level were 2 higher for the purposes of determining its effects.</Pair>
<Pair title="At 6th Level">The bonus on Fly checks becomes +4.</Pair>
<Pair title="At 10th Level">The bonus on Fly checks increases to +6.</Pair>
<Pair title="At 14th Level">The bonus on Fly checks becomes +8.</Pair>
<Pair title="At 18th Level">The bonus on Fly checks increases to +10.</Pair>
</Ability>
<Ability id="arc-fighter-aerial_assaulter-take-the-high-ground-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-aerial_assaulter-take-the-high-ground-ex" flavor="An aerial assaulter can leap above his foes to gain an advantage in combat.">Take the High Ground (Ex)</Pair>
<Pair hl title="Replaces">Bonus feats gained at 2nd and 12th level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Move-Equivalent Action">He can attempt an Acrobatics check with the DC equal to the CMD of an adjacent enemy. If he succeeds, the aerial assaulter is treated as if he had <Link to="/rule/higher_ground">higher ground</Link> against that enemy until the beginning of his next turn.</Pair>
<Pair title="At 4th Level">An aerial assaulter increases his bonus from higher ground by an amount equal to <Link to="/misc/one_fourth">one-fourth</Link> of his fighter level.</Pair>
<Pair title="At 12th Level">An aerial assaulter can use this ability as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-fighter-aerial_assaulter-aerial-dodge-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-aerial_assaulter-aerial-dodge-ex" flavor="An aerial assaulter can perform an aerial dodge that allows him to evade attacks while flying.">Aerial Dodge (Ex)</Pair>
<Pair hl title="Replaces">Armor mastery</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Immediate Action">When an opponent attempts an attack against the aerial assaulter, he can attempt a Fly check with a DC equal to the result of the attacker's attack roll. If he succeeds, he can take a 5-foot step and gain a dodge bonus to his AC equal to his Dexterity modifier. This movement doesn't negate the attack if the aerial assaulter remains in range of the attacking enemy's reach at the end of the 5-foot step. If the Fly check fails, the aerial assaulter does not move, does not gain an AC bonus, and provokes an attack of opportunity from each creature that threatens him, including the initial attacker.</Pair>
<Pair title="Special">The aerial assaulter must be flying to use this ability.</Pair>
</Ability>
<Ability id="arc-fighter-aerial_assaulter-high-ground-mastery-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-fighter-aerial_assaulter-high-ground-mastery-ex">High Ground Mastery (Ex)</Pair>
<Pair hl title="Replaces">Weapon mastery</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">Whenever an aerial assaulter threatens a critical hit with an attack made from higher ground, he automatically confirms the critical hit, and the weapon's damage multiplier is increased by 1.</Pair>
<Pair title="Passive Ability">All bull rush, dirty trick, drag, grapple, reposition, and trip combat maneuver checks against the aerial assaulter fail when attempted by opponents on lower ground than he is.</Pair>
</Ability>
</>};
const _airborne_ambusher = {title: "Airborne Ambusher", jsx: <><h2 id="arc-fighter-airborne_ambusher-airborne-ambusher">Airborne Ambusher</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 201</Link><br/>Driven by suspicion and hatred, <Link to="/race/strix">strix</Link> doggedly guard their territories, making deadly use of their flight. Using swift strikes from above, strix plummet onto their foes with lethal force.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-fighter-airborne_ambusher--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/strix">Strix</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-fighter-airborne_ambusher-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-fighter-airborne_ambusher-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair title="Info">An airborne ambusher is not proficient with heavy armor or tower shields.</Pair>
</Ability>
<Ability icon={["skills"]} id="arc-fighter-airborne_ambusher-undefined">
<Pair id="arc-fighter-airborne_ambusher-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/fly">Fly</Link> (DEX)</Pair>
<Pair title="Removed Skills">Climb</Pair></Ability>
<Ability id="arc-fighter-airborne_ambusher-combat-flyer-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-airborne_ambusher-combat-flyer-ex">Combat Flyer (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Choice">An airborne ambusher may use his fighter bonus feats to select <Link to="/feat/flyby_attack">Flyby Attack</Link> and <Link to="/feat/hover">Hover</Link>.</Pair>
</Ability>
<Ability id="arc-fighter-airborne_ambusher-aerobatics-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-airborne_ambusher-aerobatics-ex">Aerobatics (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">An airborne ambusher may make a Fly check instead of an Acrobatics check to move through a threatened area or an enemy's space.</Pair>
</Ability>
<Ability id="arc-fighter-airborne_ambusher-flying-dodger-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-airborne_ambusher-flying-dodger-ex">Flying Dodger (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 2</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">When an airborne ambusher flies at least half its fly speed on its turn, it gains a +1 dodge bonus to AC for 1 round.</Pair>
<Pair title="At 11th Level">The bonus becomes +2.</Pair>
<Pair title="At 17th Level">The bonus increases to +4.</Pair>
</Ability>
<Ability id="arc-fighter-airborne_ambusher-plummeting-charge-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-airborne_ambusher-plummeting-charge-ex">Plummeting Charge (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 3 and 4</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Passive Ability">If an airborne ambusher flies at least half its fly speed as part of a <Link to="/rule/charge">charge</Link>, it gains a +2 racial bonus on the attack roll (in addition to the normal charge bonus) and a +4 bonus on its critical confirmation roll.</Pair>
<Pair title="At 17th Level">These bonuses improve to +4 and +6.</Pair>
</Ability>
</>};
const _aldori_defender = {title: "Aldori Defender", jsx: <><h2 id="arc-fighter-aldori_defender-aldori-defender">Aldori Defender</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 22</Link>, <Link to="/source/inner_sea_primer">Inner Sea Primer pg. 24</Link><br/>The Aldori swordlords of Brevoy are among the deadliest and most feared fighters of the Inner Sea. They have spent long years mastering the Aldori dueling sword, pitting themselves against other dueling swords and all manner of weaponry besides. Their speed and reflexes weave a net of impenetrable steel around them, from which they strike and harry their unfortunate opponents. The most common form of Aldori dueling (and arguably the easiest of the techniques to master) focuses on avoiding damage and disarming foes; these swordlords prefer to wear light or no armor, trusting their skill for protection. This archetype focuses on such techniques - characters seeking a more offensive method of focusing training on the Aldori dueling sword should consider the <Link to="/pclass/aldori_swordlord">Aldori swordlord</Link> prestige class. However, this archetype also synergizes well with the powers and skills the prestige class offers.</p>
<p><strong className="hl">Important:</strong> The following benefits apply only when an Aldori defender is wielding an <Link to="/eq-weapon/aldori_dueling_sword">Aldori dueling sword</Link> and carrying nothing in his other hand. An Aldori defender fights with his sword wielded with both hands only in moments of desperation.</p>
<Ability id="arc-fighter-aldori_defender-defensive-parry-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-aldori_defender-defensive-parry-ex">Defensive Parry (Ex)</Pair>
<Pair hl title="Replaces">Armor training</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">When an Aldori defender makes a <Link to="/rule/full_attack">full attack</Link> with an Aldori dueling sword, he gains a +1 shield bonus to his AC against melee attacks until the beginning of his next turn.</Pair>
<Pair title="At 7th Level">This bonus increases to +2.</Pair>
<Pair title="At 11th Level">The bonus becomes +3.</Pair>
<Pair title="At 15th Level">The bonus increases to +4.</Pair>
</Ability>
<Ability id="arc-fighter-aldori_defender-disarming-strike-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-aldori_defender-disarming-strike-ex">Disarming Strike (Ex)</Pair>
<Pair hl title="Replaces">6th level fighter bonus feat</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">When an Aldori defender successfully <Link to="/rule/disarm">disarms</Link> an opponent using an Aldori dueling sword, he also deals normal damage to the target, but without the normal Strength bonus to damage.</Pair>
</Ability>
<Ability id="arc-fighter-aldori_defender-steel-net-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-fighter-aldori_defender-steel-net-ex" flavor="An Aldori defender can create a blazing wall of steel to defend himself.">Steel Net (Ex)</Pair>
<Pair hl title="Replaces">8th level fighter bonus feat</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Full-Round Action">When <Link to="/misc/fighting_defensively">fighting defensively</Link> as a full-round action with an Aldori dueling sword, the Aldori defender's penalties on all attacks in a round are reduced by 2, and his dodge bonus to AC increases by 2 for the same round.</Pair>
</Ability>
<Ability id="arc-fighter-aldori_defender-counterattack-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-aldori_defender-counterattack-ex">Counterattack (Ex)</Pair>
<Pair hl title="Replaces">10th level fighter bonus feat</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">Once per round, an Aldori defender can make an attack of opportunity against an opponent who hits him with a melee attack (regardless of how many attacks of opportunity the Aldori defender can otherwise make), so long as the attacking creature is within the his reach.</Pair>
</Ability>
<p><strong className="hl">Suggested Feats:</strong> Although this archetype replaces some of the bonus feats that a fighter would normally have access to, Aldori defenders still have several opportunities to gain feats. The following feats are the most thematically appropriate for an Aldori defender, but the archetype does not require any of them: <Link to="/feat/aldori_dueling_mastery">Aldori Dueling Mastery</Link>, <Link to="/feat/combat_expertise">Combat Expertise</Link>, <Link to="/feat/dazzling_display">Dazzling Display</Link>, <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link> (Aldori dueling sword), <Link to="/feat/improved_disarm">Improved Disarm</Link>, <Link to="/feat/improved_feint">Improved Feint</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/lunge">Lunge</Link>, <Link to="/feat/quick_draw">Quick Draw</Link>, <Link to="/feat/weapon_finesse">Weapon Finesse</Link>, <Link to="/feat/weapon_focus">Weapon Focus</Link> (Aldori dueling sword), <Link to="/feat/weapon_specialization">Weapon Specialization</Link> (Aldori dueling sword).</p>
</>};
const _aquanaut = {title: "Aquanaut", jsx: <><h2 id="arc-fighter-aquanaut-aquanaut">Aquanaut</h2>
<p><strong>Sources</strong> <Link to="/source/aquatic_adventures">Aquatic Adventures pg. 51</Link><br/>Aquanaut fighters master the movement of water, using its flow to their advantage in combat.</p>
<Ability id="arc-fighter-aquanaut-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-fighter-aquanaut-armor-proficiency">Armor Proficiency</Pair>
<Pair hl title="Alters">Armor proficiency</Pair>
<Pair title="Info">An aquanaut is proficient with light and medium armor, but not with shields.</Pair>
</Ability>
<Ability id="arc-fighter-aquanaut-piercing-focus" icon={["upgrade"]}>
<Pair single id="arc-fighter-aquanaut-piercing-focus">Piercing Focus</Pair>
<Pair hl title="Alters">Bonus feats, weapon mastery</Pair>
<Pair title="Ability">If an aquanaut takes a fighter bonus feat that normally requires selecting a single weapon (except weapon proficiency feats), he can instead apply the feat to all melee piercing weapons with which he is already proficient and that meet all other prerequisites for that feat.</Pair>
<Pair title="Special">This ability counts as having the feat for each such individual weapon for the purpose of meeting prerequisites. This ability also applies to the <em>weapon mastery</em> class feature.</Pair>
</Ability>
<Ability id="arc-fighter-aquanaut-tidal-celerity" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-aquanaut-tidal-celerity">Tidal Celerity</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An aquanaut gains a +1 bonus on Reflex saves and saving throws against effects that would immobilize or paralyze him.</Pair>
<Pair title="At 6th Level">The bonus becomes +2.</Pair>
<Pair title="At 10th Level">The bonus increases to +3.</Pair>
<Pair title="At 14th Level">The bonus becomes +4.</Pair>
<Pair title="At 18th Level">The bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-aquanaut-aquadynamic-paragon" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-fighter-aquanaut-aquadynamic-paragon">Aquadynamic Paragon</Pair>
<Pair hl title="Replaces">Armor training, armor mastery</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">An aquanaut gains a swim speed equal to his unmodified base land speed (if he has a racial swim speed, he instead increases it by 10 feet).</Pair>
<Pair title="Free Action">He can choose to have a neutral <Link to="/rule/buoyancy">buoyancy</Link> once per turn.</Pair>
<Pair title="At 7th Level">He can choose any of the five states of buoyancy once per turn as a <strong className="hl">free action</strong>, and can take his buoyancy movement as part of that free action instead of at the end of his turn without becoming <Link to="/rule/off_balance">off-balance</Link> and without requiring a Swim check; additionally, he can choose to double or halve how far a <Link to="/rule/current">current</Link> moves him.</Pair>
<Pair title="At 11th Level">Whenever he takes a <em>move, double move, withdraw,</em> or <em>run</em> action underwater, he can leave a current behind him in the squares along his path; this current has a speed of 10 feet in the direction of his movement (if his movement was circuitous, so is the current) and lasts until the beginning of his next turn.</Pair>
<Pair title="At 15th Level">As a <strong className="hl">full-round action</strong>, an aquanaut can spin ferociously underwater, creating a whirlpool around himself with a spinning force that drags all creatures within 120 feet of him 30 feet closer to him. Creatures closer than 30 feet spend the 30 feet of movement circling around the aquanaut in a single direction of his choice. The whirlpool isn't fast enough to deal damage, but the aquanaut is unaffected by his own whirlpool, allowing him to make attacks of opportunity against creatures moving in it.</Pair>
<Pair title="At 19th Level">The aquanaut learns to use the water around him to soften blows, gaining DR 5/- while underwater.</Pair>
</Ability>
<Ability id="arc-fighter-aquanaut-underwater-training" icon={["upgrade"]}>
<Pair single id="arc-fighter-aquanaut-underwater-training">Underwater Training</Pair>
<Pair hl title="Replaces">Weapon training</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Choice">An aquanaut chooses bludgeoning, slashing, or piercing melee weapons. If he chooses piercing melee weapons, he gains a +1 bonus on attack and damage rolls with those weapons when attacking underwater. If he chooses bludgeoning or slashing melee weapons, he can ignore <Link to="/rule/physical_attacks_underwater">the usual underwater penalties</Link> for attacking with those weapons.</Pair>
<Pair title="At 9th Level">He can choose another type of melee weapon, applying this ability's initial benefit to his new choice and gaining an additional +1 bonus on attack and damage rolls to his previously chosen weapon type.</Pair>
<Pair title="At 13th Level">He gains the benefits with his remaining type of melee weapon, and gains another additional +1 bonus on attack and damage rolls to his previously chosen weapon types.</Pair>
<Pair title="At 17th Level">He gains an additional +1 bonus on attack and damage rolls with all three types.</Pair>
</Ability>
</>};
const _archer = {title: "Archer", jsx: <><h2 id="arc-fighter-archer-archer">Archer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 104</Link><br/>The archer is dedicated to the careful mastery of the bow, perfecting his skills with years of practice honed day after day on ranges and hunting for game, or else on the battlefield, raining destruction down on the enemy lines.</p>
<Ability id="arc-fighter-archer-hawkeye-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-archer-hawkeye-ex">Hawkeye (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An archer gains a bonus on Perception checks equal to 1 + <Link to="/misc/one_fourth">one-fourth</Link> his fighter level. The range increment for any bow he uses increases by 5 feet, plus an additional 5 feet for every four fighter levels he has.</Pair>
</Ability>
<Ability id="arc-fighter-archer-trick-shot-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-archer-trick-shot-ex">Trick Shot (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1, 2, 3, and 4</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Choice">An archer can choose one of the following combat maneuvers or actions: <Link to="/rule/disarm">disarm</Link>, <Link to="/rule/feint">feint</Link>, or <Link to="/rule/sunder">sunder</Link>. He can perform this action with a bow against any target within 30 feet, with a -4 penalty to his CMB.</Pair>
<Pair title="At 7th Level">He can choose a second option to receive this same benefit.</Pair>
<Pair title="At 11th Level">He can choose a third trick shot option. Those options expand to include <Link to="/rule/bull_rush">bull rush</Link>, <Link to="/rule/grapple">grapple</Link>, and <Link to="/rule/trip">trip</Link>. A target grappled by an arrow can break free by destroying the archer's arrow (hardness 5, hit points 1, break DC 13) or with an Escape Artist or CMB check (against the archer's CMD -4).</Pair>
<Pair title="At 15th Level">He can choose a fourth trick shot.</Pair>
<Pair title="At 19th Level">He can choose a fifth trick shot.</Pair>
<Pair title="Special">These maneuvers use up arrows as normal.</Pair>
</Ability>
<Ability id="arc-fighter-archer-expert-archer-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-archer-expert-archer-ex">Expert Archer (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">An archer gains a +1 bonus on attack and damage rolls with bows.</Pair>
<Pair title="At 9th Level">This bonus becomes +2.</Pair>
<Pair title="At 13th Level">This bonus increases to +3.</Pair>
<Pair title="At 17th Level">This bonus becomes +4.</Pair>
</Ability>
<Ability id="arc-fighter-archer-safe-shot-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-archer-safe-shot-ex">Safe Shot (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 2</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">An archer does not provoke attacks of opportunity when making ranged attacks with a bow.</Pair>
</Ability>
<Ability id="arc-fighter-archer-evasive-archer-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-archer-evasive-archer-ex">Evasive Archer (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 3</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Passive Ability">An archer gains a +2 dodge bonus to AC against ranged attacks.</Pair>
<Pair title="At 17th Level">This bonus becomes +4.</Pair>
</Ability>
<Ability id="arc-fighter-archer-volley-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-archer-volley-ex">Volley (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 4</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Full-Round Action">An archer can make a single bow attack at his highest base attack bonus against any number of creatures in a 15-foot-radius <Link to="/misc/burst">burst</Link>, making separate attack and damage rolls for each creature.</Pair>
</Ability>
<Ability id="arc-fighter-archer-ranged-defense-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-archer-ranged-defense-ex">Ranged Defense (Ex)</Pair>
<Pair hl title="Replaces">Armor mastery</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Passive Ability">An archer gains DR 5/- against ranged attacks.</Pair>
<Pair title="Immediate Action">He can catch an arrow fired at him and shoot it any target he chooses, as if he had the <Link to="/feat/snatch_arrows">Snatch Arrows</Link> feat.</Pair>
</Ability>
<Ability id="arc-fighter-archer-weapon-mastery-ex" icon={["info"]}>
<Pair single id="arc-fighter-archer-weapon-mastery-ex">Weapon Mastery (Ex)</Pair>
<Pair hl title="Alters">Weapon mastery</Pair>
<Pair title="Info">An archer must choose a type of bow.</Pair>
</Ability>
</>};
const _armiger = {title: "Armiger", jsx: <><h2 id="arc-fighter-armiger-armiger">Armiger</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 94</Link><br/>Until would-be <Link to="/rule/hellknights">Hellknights</Link> take the trial referred to simply as the Test, in which they enter single combat with a conjured devil and either emerge victorious or die, they are known as armigers. While this is a blanket term for all Hellknights-in-training (including those training to become <Link to="/pclass/hellknight_signifer">signifers</Link>), it also applies specifically to fighters who focus their training to become Hellknights. Despite their lack of recognized rank, armigers are skilled and deadly warriors.</p>
<p>Most armigers live and train at their order's citadel, working toward the day when they become full-fledged Hellknights. These armigers follow a brutally strict routine; they spend hours honing their combat skills against other trainees, obsessively studying in the citadel's libraries, or memorizing passages of the Hellknight philosophy known as the Measure and the Chain. At regular intervals, squads of armigers emerge from their citadels to patrol nearby cities or frontier lands, working to enforce Hellknight law and their order's edicts.</p>
<p>On occasion, some armigers travel farther from their citadels, searching out those who mock the law and bringing them to justice by any means necessary. While a few do so as squires to full-fledged Hellknights, others strike out on their own or join bands of adventurers. To make up for the broken routine of adventuring life and the frequent compromises necessary in the presence of such allies, such roaming armigers are expected to perform frequent reckonings. These painful acts of mortification, such as scourging oneself or drinking boiling water, keep the would-be Hellknight disciplined and focused on the strictures of the Measure and the Chain.</p>
<Ability id="arc-fighter-armiger-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-armiger-bonus-feats">Bonus Feats</Pair>
<Pair hl title="Alters">Bonus feats</Pair>
<Pair title="Info">When selecting fighter bonus feats, the armiger can select any feats whose names include the word "Hellknight" as though they were combat feats.</Pair>
</Ability>
<Ability id="arc-fighter-armiger-hellknight-order" icon={["info"]}>
<Pair single id="arc-fighter-armiger-hellknight-order">Hellknight Order</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">An armiger must select which Hellknight order she intends to join. If the armiger later gains levels in a Hellknight prestige class, she must select that same order.</Pair>
</Ability>
<Ability id="arc-fighter-armiger-studious-squire" icon={["skills","upgrade"]}>
<Pair single id="arc-fighter-armiger-studious-squire">Studious Squire</Pair>
<Pair hl title="Replaces">Bonus feats gained at 1st and 10th levels</Pair>
<Pair hl title="Alters">Class skills, skill points per level</Pair>
<Pair title="Info">An armiger gains 2 additional skill ranks at each level. These ranks must be put into Intimidate and Knowledge (planes). In addition, the armiger treats <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT) and <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT) as class skills.</Pair>
</Ability>
<Ability id="arc-fighter-armiger-ardent-su" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-armiger-ardent-su" flavor="Armigers are difficult to sway from their beliefs.">Ardent (Su)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An armiger gains a +1 bonus on Will saves against charm effects.</Pair>
<Pair title="Ability">Once per day, if an armiger is forced to take an action that is diametrically opposed to her order's beliefs and values while under the influence of a charm or compulsion effect, she can immediately attempt a Will save against the effect's DC to resist acting out that order. Success does not remove the existing charm or compulsion effect, but does allow the armiger to resist betraying her beliefs.</Pair>
<Pair title="At 6th Level">The Will save bonus becomes +2.</Pair>
<Pair title="At 10th Level">The Will save bonus increases to +3.</Pair>
<Pair title="At 14th Level">The Will save bonus becomes +4.</Pair>
<Pair title="At 18th Level">The Will save bonus increases to +5.</Pair>
</Ability>
</>};
const _armor_master = {title: "Armor Master", jsx: <><h2 id="arc-fighter-armor_master-armor-master">Armor Master</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 44</Link><br/>All fighters have two main tools of their trade: weapons and armor. While many fighters hone their weapon skills to a point of inescapable grace and lethality, there are those who live under the maxim that a good offense can be accomplished though an impenetrable defense. To these fighters, proper use of armor and shields ensures that they can fight another day, and that the frustration of enemies who can't seem to crack an armor master's superior defenses is just the first symptom of his foes' eventual defeat.</p>
<Ability id="arc-fighter-armor_master-deflective-shield-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-armor_master-deflective-shield-ex" flavor="An armor master specializes in using his shield to deflect attacks.">Deflective Shield (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">He gains a +1 bonus to his touch AC, and this bonus increases for every four levels beyond 2nd (+2 at 6th level, +3 at 10th level, +4 at 14th level, and finally +5 at 18th level); however, this bonus cannot exceed the sum of the armor and enhancement bonus to AC provided by the shield that the armor master is currently carrying.</Pair>
</Ability>
<Ability id="arc-fighter-armor_master-armored-defense-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-armor_master-armored-defense-ex">Armored Defense (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1 and 3, armor mastery</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">An armor master gains DR 1/- when wearing light armor, DR 2/- when wearing medium armor, and DR 3/- when wearing heavy armor.</Pair>
<Pair title="At 19th Level">This damage reduction increases to DR 4/- when wearing light armor, DR 8/- when wearing medium armor, and DR 12/- when wearing heavy armor.</Pair>
<Pair title="Special">This damage reduction stacks with that provided by <Link to="/eq-material/adamantine">adamantine</Link> armor, but not with other forms of damage reduction. This damage reduction does not apply if the armor master is stunned, unconscious, or helpless.</Pair>
</Ability>
<Ability id="arc-fighter-armor_master-fortification-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-armor_master-fortification-ex" flavor="An armor master can use his armor to shield critical areas from injury.">Fortification (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 2 and 4</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">He treats any armor he wears as if it had the <Link to="/magic-enh/light_fortification">light fortification</Link> special ability.</Pair>
<Pair title="At 13th Level">His armor gains the <Link to="/magic-enh/moderate_fortification">moderate fortification</Link> special ability.</Pair>
<Pair title="Special">This fortification does not stack in any way with armor that has these special abilities. In these cases the armor master takes the better of the two fortifications.</Pair>
</Ability>
<Ability id="arc-fighter-armor_master-indestructible-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-armor_master-indestructible-ex">Indestructible (Ex)</Pair>
<Pair hl title="Replaces">Weapon mastery</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">An armor master gains complete immunity to critical hits and sneak attacks while he is wearing armor. In addition, unless his armor has the <Link to="/misc/fragile">fragile</Link> armor quality, it cannot be <Link to="/rule/sunder">sundered</Link> while he is wearing it.</Pair>
</Ability>
</>};
const _brawler = {title: "Brawler", jsx: <><h2 id="arc-fighter-brawler-brawler">Brawler</h2>
<blockquote>
<p><em><strong>Note:</strong> This is a fighter archetype, and has no relation to the <Link to="/class/brawler">brawler</Link> hybrid class.</em></p>
</blockquote>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 44</Link><br/>All melee is up close and personal, but some warriors bring it as close as they can get. Brawlers can be found anywhere, among all races and societies. A brawler could be hired muscle in a tavern, a local crime syndicate enforcer, or a hotheaded recruit among the ranks of a baron's guard. Often brawlers' in-your-face attitudes are as powerful as their tactics.</p>
<Ability id="arc-fighter-brawler-close-control-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-fighter-brawler-close-control-ex" flavor="A brawler becomes skilled at forcefully moving his opponent around the battlefield.">Close Control (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">The brawler gains a +1 bonus on <Link to="/rule/bull_rush">bull rush</Link>, <Link to="/rule/drag">drag</Link>, and <Link to="/rule/reposition">reposition</Link> combat maneuver checks. The brawler also gains a +1 bonus to CMD when attacked with the bull rush, drag, and reposition maneuvers.</Pair>
<Pair title="At 6th Level">These bonuses become +2.</Pair>
<Pair title="At 10th Level">These bonuses increase to +3.</Pair>
<Pair title="At 14th Level">These bonuses become +4.</Pair>
<Pair title="At 18th Level">These bonuses increase to +5.</Pair>
</Ability>
<Ability id="arc-fighter-brawler-close-combatant-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-brawler-close-combatant-ex">Close Combatant (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1 and 2</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A brawler gains a +1 bonus on attack rolls and a +3 bonus on damage rolls with weapons in the close <Link to="/ability/weapon_groups">weapon group</Link>.</Pair>
<Pair title="At 7th Level">These bonuses increase to +2 and +4, respectively.</Pair>
<Pair title="At 11th Level">The bonuses become +3 and +5.</Pair>
<Pair title="At 15th Level">These bonuses increase to +4 and +6.</Pair>
<Pair title="At 19th Level">The bonuses become +5 on attack rolls and +7 on damage rolls.</Pair>
</Ability>
<Ability id="arc-fighter-brawler-menacing-stance-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-fighter-brawler-menacing-stance-ex" flavor="A brawler constantly harries and distracts his enemies.">Menacing Stance (Ex)</Pair>
<Pair hl title="Replaces">Armor training 2, 3, and 4, armor mastery</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">While adjacent to the brawler, enemies take a -1 penalty on attack rolls and a -4 penalty on <Link to="/rule/concentration">concentration</Link> checks.</Pair>
<Pair title="At 11th Level">These penalties increase to -2 and -5, respectively.</Pair>
<Pair title="At 15th Level">The penalties become -3 and -6.</Pair>
<Pair title="At 19th Level">These penalties increase to -4 on attack rolls and -7 on concentration checks.</Pair>
<Pair title="Special">Creatures do not take these penalties if the brawler is dazed, helpless, staggered, stunned, or unconscious.</Pair>
</Ability>
<Ability id="arc-fighter-brawler-no-escape-ex" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="arc-fighter-brawler-no-escape-ex">No Escape (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 3 and 4</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">Taking <Link to="/rule/a_5_foot_step">a 5-foot step</Link> out of the area of a brawler's <em>menacing stance</em> or moving out of the area of a brawler's <em>menacing stance</em> with a <Link to="/rule/withdraw">withdraw</Link> action provokes an attack of opportunity from the brawler.</Pair>
</Ability>
<Ability id="arc-fighter-brawler-stand-still" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-fighter-brawler-stand-still">Stand Still</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">A brawler gains <Link to="/feat/stand_still">Stand Still</Link> as a bonus feat, even if he does not have the <Link to="/feat/combat_reflexes">Combat Reflexes</Link> feat. If the brawler already has the Stand Still feat, he can take any other <Link to="/main/combat_feat">combat feat</Link> instead.</Pair>
<Pair title="Passive Ability">He gains a bonus equal to <Link to="/misc/half">half</Link> his fighter level on combat maneuver checks when using the Stand Still feat.</Pair>
</Ability>
<Ability id="arc-fighter-brawler-weapon-mastery-ex" icon={["info"]}>
<Pair single id="arc-fighter-brawler-weapon-mastery-ex">Weapon Mastery (Ex)</Pair>
<Pair hl title="Alters">Weapon mastery</Pair>
<Pair title="Choice">A brawler must select a close weapon for this ability.</Pair>
</Ability>
</>};
const _cad = {title: "Cad", jsx: <><h2 id="arc-fighter-cad-cad">Cad</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 45</Link><br/>In combat, most fighters have some sort of code of honor. Some believe that one should not kick enemies when they are down, or should limit use of other such dirty tricks to the most dire of circumstances. The cad places no such limitations on himself. Battles are for winning, and anything that gives the cad the upper hand against his enemies is a legitimate tactic. No trick is too treacherous if it leads to victory.</p>
<Ability id="arc-fighter-cad-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-fighter-cad-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair title="Info">A cad is not proficient with medium armor, heavy armor, or tower shields.</Pair>
</Ability>
<Ability icon={["skills"]} id="arc-fighter-cad-undefined">
<Pair id="arc-fighter-cad-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX), <Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/escape_artist">Escape Artist</Link> (DEX), <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> (DEX), <Link to="/skill/stealth">Stealth</Link> (DEX)</Pair></Ability>
<Ability id="arc-fighter-cad-dirty-maneuvers-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-fighter-cad-dirty-maneuvers-ex" flavor="A cad becomes skilled at deceiving and discomfiting his opponents.">Dirty Maneuvers (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">The cad gains a +1 bonus on <Link to="/rule/disarm">disarm</Link>, <Link to="/rule/dirty_trick">dirty trick</Link>, and <Link to="/rule/steal">steal</Link> combat maneuver checks. The cad also gains a +1 bonus to CMD when attacked with the disarm, dirty trick, and steal combat maneuvers.</Pair>
<Pair title="At 6th Level">These bonuses become +2.</Pair>
<Pair title="At 10th Level">These bonuses increase to +3.</Pair>
<Pair title="At 14th Level">These bonuses become +4.</Pair>
<Pair title="At 18th Level">These bonuses increase to +5.</Pair>
</Ability>
<Ability id="arc-fighter-cad-catch-off-guard" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-cad-catch-off-guard">Catch Off-Guard</Pair>
<Pair hl title="Replaces">Armor training 1</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">The cad gains the <Link to="/feat/catch_off_guard">Catch Off-Guard</Link> feat.</Pair>
</Ability>
<Ability id="arc-fighter-cad-payback-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-cad-payback-ex">Payback (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1, 3, and 4</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A cad gains a +1 bonus on attack and damage rolls against any creature that has attacked the cad since the beginning of his last turn.</Pair>
<Pair title="At 9th Level">This bonus becomes +2.</Pair>
<Pair title="At 13th Level">This bonus increases to +3.</Pair>
<Pair title="At 17th Level">This bonus becomes +4.</Pair>
</Ability>
<Ability id="arc-fighter-cad-deadly-surprise-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-cad-deadly-surprise-ex">Deadly Surprise (Ex)</Pair>
<Pair hl title="Replaces">Armor training 2</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">When a cad hits an opponent that is denied its Dexterity bonus to AC against him with a weapon or unarmed attack, he may attempt a dirty trick combat maneuver as an <strong className="hl">immediate action</strong> as part of the attack.</Pair>
</Ability>
<Ability id="arc-fighter-cad-razor-sharp-chair-leg-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-fighter-cad-razor-sharp-chair-leg-ex">Razor-Sharp Chair Leg (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 2</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Swift Action">A cad may alter the type of damage dealt by an <Link to="/misc/improvised_weapon">improvised weapon</Link> to bludgeoning, piercing, or slashing damage.</Pair>
<Pair title="Passive Ability">The cad has a critical threat range of 19-20/&times;2 with any improvised melee weapon.</Pair>
</Ability>
<Ability id="arc-fighter-cad-craven-combatant-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-cad-craven-combatant-ex">Craven Combatant (Ex)</Pair>
<Pair hl title="Replaces">Armor training 3</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">When <Link to="/misc/fighting_defensively">fighting defensively</Link> or using <Link to="/feat/combat_expertise">Combat Expertise</Link> or <Link to="/misc/total_defense">total defense</Link>, a cad cannot be <Link to="/rule/flanked">flanked</Link> except by a rogue or ninja whose level is four or more higher than the cad's fighter level.</Pair>
</Ability>
<Ability id="arc-fighter-cad-sweeping-prank-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-cad-sweeping-prank-ex">Sweeping Prank (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 3 and 4</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Standard Action">A cad can use a dirty trick maneuver against any two adjacent opponents that he can reach, making a separate combat maneuver check against each opponent. He must use the same dirty trick maneuver against each opponent.</Pair>
<Pair title="At 17th Level">The cad can use this ability as a <strong className="hl">full-round action</strong> to attempt a dirty trick maneuver against a number of enemies equal to 2 + his Dexterity bonus (if any).</Pair>
</Ability>
<Ability id="arc-fighter-cad-treacherous-blow-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-cad-treacherous-blow-ex">Treacherous Blow (Ex)</Pair>
<Pair hl title="Replaces">Armor training 4</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Immediate Action">When a cad confirms a critical hit, he can attempt a dirty trick combat maneuver as part of that attack.</Pair>
</Ability>
<Ability id="arc-fighter-cad-ultimate-payback-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-cad-ultimate-payback-ex">Ultimate Payback (Ex)</Pair>
<Pair hl title="Replaces">Weapon mastery</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">Any critical threats a cad makes against an opponent that has attacked him since the beginning of his last turn are automatically confirmed.</Pair>
</Ability>
</>};
const _calistrian_hunter = {title: "Calistrian Hunter", jsx: <><h2 id="arc-fighter-calistrian_hunter-calistrian-hunter">Calistrian Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 36</Link><br/>Not every <Link to="/faith/calistria">Calistrian</Link> who dedicates himself to the goddess can channel divine magic to track down those who deserve punishment. Like a bounty hunter following his own rules, a Calistrian hunter tracks down elusive prey using his wits and delivers long-overdue retribution while easily ignoring his own injuries thanks to the joy he receives from a job well done.</p>
<Ability id="arc-fighter-calistrian_hunter-weapon-and-armor-proficiency" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-fighter-calistrian_hunter-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Armor and weapon proficiencies</Pair>
<Pair title="Info">A Calistrian hunter is proficient with all simple and martial weapons, plus the <Link to="/eq-weapon/whip">whip</Link>. In addition, the hunter is proficient with light and medium armor as well as shields (except tower shields).</Pair>
</Ability>
<Ability icon={["skills"]} id="arc-fighter-calistrian_hunter-undefined">
<Pair id="arc-fighter-calistrian_hunter-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/perception">Perception</Link> (WIS)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering), Knowledge (engineering)</Pair></Ability>
<Ability id="arc-fighter-calistrian_hunter-tenacious-tracker-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-calistrian_hunter-tenacious-tracker-ex">Tenacious Tracker (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A Calistrian hunter gains a +1 bonus on Diplomacy checks to gather information and on Survival checks made to identify or follow tracks.</Pair>
<Pair title="At 6th Level">This bonus becomes +2.</Pair>
<Pair title="At 10th Level">This bonus increases to +3.</Pair>
<Pair title="At 14th Level">This bonus becomes +4.</Pair>
<Pair title="At 18th Level">This bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-calistrian_hunter-vengeance-ex" icon={["upgrade","armor-downgrade"]}>
<Pair single id="arc-fighter-calistrian_hunter-vengeance-ex">Vengeance (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A Calistrian hunter deals 1d4 points of <Link to="/rule/bleed">bleed</Link> damage when he damages a creature that has damaged him since the beginning of his last turn. Whenever a creature takes bleed damage from this effect, it also takes a -1 penalty on attack rolls, weapon damage rolls, saving throws, skill checks, and ability checks for 1 round. This penalty is a <Link to="/spelldef/pain">pain</Link> effect and does not stack with the effects of the <Link to="/misc/sickened">sickened</Link> condition.</Pair>
<Pair title="At 9th Level">The bleed damage becomes 1d6.</Pair>
<Pair title="At 13th Level">The bleed increases to 1d8.</Pair>
<Pair title="At 17th Level">The bleed damage increases to 2d6.</Pair>
</Ability>
<Ability id="arc-fighter-calistrian_hunter-savor-the-sting-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-calistrian_hunter-savor-the-sting-ex">Savor the Sting (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 2</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">Whenever a target takes bleed damage from a Calistrian hunter's <em>vengeance</em> ability, the Calistrian hunter gains an equal number of <Link to="/rule/temporary_hit_points">temporary hit points</Link>. These temporary hit points last for 1 minute and do not stack with each other.</Pair>
</Ability>
<Ability id="arc-fighter-calistrian_hunter-swift-revenge-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-calistrian_hunter-swift-revenge-ex">Swift Revenge (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 3</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">A Calistrian hunter gains the quarry class feature; this functions like the <Link to="/class/ranger">ranger</Link> ability of the same name, but the target must be one that has damaged the Calistrian hunter in the past hour.</Pair>
</Ability>
<Ability id="arc-fighter-calistrian_hunter-perceived-wrongs-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-calistrian_hunter-perceived-wrongs-ex">Perceived Wrongs (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 4</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">A Calistrian hunter can, once per day, use his <em>vengeance</em> ability against any creature - even one that has not harmed him. If the target is also one that has damaged him since the beginning of his last turn, the bleed damage increases to 3d6 and the target is sickened for as long as the bleed effect continues.</Pair>
</Ability>
<Ability id="arc-fighter-calistrian_hunter-certain-revenge-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-calistrian_hunter-certain-revenge-ex">Certain Revenge (Ex)</Pair>
<Pair hl title="Replaces">Weapon mastery</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A Calistrian hunter gains the <em>improved quarry</em> class feature; this functions like the ranger ability of the same name, but the target must have attacked him in the past day. Whenever he uses his <em>vengeance</em> ability against his quarry, the bleed damage increases by 2 per bleed damage die.</Pair>
</Ability>
</>};
const _cavern_sniper = {title: "Cavern Sniper", jsx: <><h2 id="arc-fighter-cavern_sniper-cavern-sniper">Cavern Sniper</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 104</Link><br/>Perfectly at home in the darkness, the cavern sniper capitalizes on stealth and ranged attacks imbued with his spell-like abilities to harass his opponents. The cavern sniper focuses on surprise, his innate magical abilities, and poison to take down unwary foes. The cavern sniper has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-fighter-cavern_sniper--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/drow">Drow</Link></td></tr></tbody></table></ScrollContainer></div><Ability icon={["skills"]} id="arc-fighter-cavern_sniper-undefined">
<Pair id="arc-fighter-cavern_sniper-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/stealth">Stealth</Link> (DEX)</Pair>
<Pair title="Removed Skills">Intimidate</Pair></Ability>
<Ability id="arc-fighter-cavern_sniper-imbued-shot-su" icon={["magic-swirl"]}>
<Pair single id="arc-fighter-cavern_sniper-imbued-shot-su">Imbued Shot (Su)</Pair>
<Pair hl title="Replaces">The 1st-level fighter bonus feat</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Swift Action">The cavern sniper gains the ability to imbue his arrows or bolts with the effect of one of his drow <Link to="/spell/faerie_fire">faerie fire</Link>, <Link to="/spell/darkness">darkness</Link>, or <Link to="/spell/deeper_darkness">deeper darkness</Link> spell-like abilities (provided he has access to the ability). When such an arrow or bolt is fired, the spell's area is centered where the arrow or bolt lands. If the target of the attack has a space larger than 5 feet, the cavern sniper can choose which square of the creature's space is the center of the spell-like ability's effect, as long as that square is within line of sight of the cavern sniper. The cavern sniper can instead choose to target a single square within line of sight with an imbued arrow or bolt, and uses that square as the center of the spell-like ability's area of effect on a hit (AC 5).</Pair>
<Pair title="Special">The arrow must be fired during the round it was imbued, or the spell-like ability is wasted. If the arrow or bolt misses, the use of the spell-like ability is wasted.</Pair>
</Ability>
<Ability id="arc-fighter-cavern_sniper-silent-shooter-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-cavern_sniper-silent-shooter-ex">Silent Shooter (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A cavern sniper gains a +2 bonus on Stealth checks made when loading a bow or crossbow, poisoning ammunition, and making sniping attempts.</Pair>
<Pair title="At 6th Level">This bonus becomes +4.</Pair>
<Pair title="At 10th Level">This bonus increases to +6.</Pair>
<Pair title="At 14th Level">This bonus becomes +8.</Pair>
<Pair title="At 18th Level">This bonus increases to +10.</Pair>
</Ability>
<Ability id="arc-fighter-cavern_sniper-quick-and-deadly-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-cavern_sniper-quick-and-deadly-ex">Quick and Deadly (Ex)</Pair>
<Pair hl title="Replaces">The 4th-level fighter bonus feat</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">The cavern sniper can move at full speed while using Stealth at no penalty.</Pair>
<Pair title="Swift Action">He can apply poison to a single arrow or crossbow bolt.</Pair>
</Ability>
<Ability id="arc-fighter-cavern_sniper-sniper-training-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-cavern_sniper-sniper-training-ex">Sniper Training (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1, 3, and 4</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Choice">The cavern sniper chooses the bow or crossbow <Link to="/ability/weapon_groups">weapon group</Link> and gains a +2 bonus on attack rolls and damage rolls.</Pair>
<Pair title="At 9th Level">This bonus becomes +2.</Pair>
<Pair title="At 13th Level">This bonus increases to +3.</Pair>
<Pair title="At 17th Level">This bonus becomes +4.</Pair>
</Ability>
<Ability id="arc-fighter-cavern_sniper-greater-imbued-shot-su" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-cavern_sniper-greater-imbued-shot-su">Greater Imbued Shot (Su)</Pair>
<Pair hl title="Replaces">Weapon training 2</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">The cavern sniper gains two extra uses of both his <em>faerie fire</em> and <em>darkness</em> spell-like abilities, but can only use these extra uses to imbue arrows and bolts with the <em>imbued shot</em> class feature.</Pair>
</Ability>
<Ability id="arc-fighter-cavern_sniper-weapon-mastery-ex" icon={["info"]}>
<Pair single id="arc-fighter-cavern_sniper-weapon-mastery-ex">Weapon Mastery (Ex)</Pair>
<Pair hl title="Alters">Weapon mastery</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Choice">When the cavern sniper gains <em>weapon mastery,</em> he must choose a weapon in either the bow or crossbow weapon group.</Pair>
</Ability>
</>};
const _child_of_acavna_and_amaznen = {title: "Child of Acavna and Amaznen", jsx: <><h2 id="arc-fighter-child_of_acavna_and_amaznen-child-of-acavna-and-amaznen">Child of Acavna and Amaznen</h2>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 10</Link><br/>The child of <Link to="/faith/acavna">Acavna</Link> and <Link to="/faith/amaznen">Amaznen</Link> has trained in the nearly forgotten arts of Azlant passed down by Aroden, which combine martial prowess with elementary wizardry. Inspired by the deities <Link to="/faith/aroden">Aroden</Link> once worshiped long ago, children of Acavna and Amaznen strive to understand the dangers of the world and overcome them with knowledge and strength of arms.</p>
<Ability id="arc-fighter-child_of_acavna_and_amaznen-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-fighter-child_of_acavna_and_amaznen-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Alters">Weapon and armor proficiency</Pair>
<Pair title="Info">A child of Acavna and Amaznen is not proficient with two-handed martial weapons or tower shields.</Pair>
</Ability>
<Ability id="arc-fighter-child_of_acavna_and_amaznen-eldritch-lore" icon={["skills"]}>
<Pair single id="arc-fighter-child_of_acavna_and_amaznen-eldritch-lore">Eldritch Lore</Pair>
<Pair hl title="Replaces">Bonus fighter combat feat gained at 1st level</Pair>
<Pair hl title="Alters">Skills</Pair>
<Pair title="Info">A child of Acavna and Amaznen gains 4 skill ranks + a number of skill ranks equal to her Intelligence modifier at each level, instead of the normal 2 skill ranks + her Intelligence modifier at each level. Furthermore, <Link to="/skill/knowledge">Knowledge</Link> (arcana, religion) (INT), <Link to="/skill/linguistics">Linguistics</Link> (INT), and <Link to="/skill/spellcraft">Spellcraft</Link> (INT) are all class skills for the child of Acavna and Amaznen.</Pair>
</Ability>
<Ability id="arc-fighter-child_of_acavna_and_amaznen-lore-of-acavna-and-amaznen-ex" icon={["spell-book","upgrade"]}>
<Pair single id="arc-fighter-child_of_acavna_and_amaznen-lore-of-acavna-and-amaznen-ex">Lore of Acavna and Amaznen (Ex)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability"><p>A child of Acavna and Amaznen is further initiated into the arcane secrets passed down from Azlant. This gives her minor spellcasting abilities and access to lore collected to give her an edge against the enemies of humanity.</p>
<p>The child of Acavna and Amaznen gains a spellbook containing four 0-level <Link to="/main/wizard_spell">wizard spells</Link> of her choice. She can prepare and cast these spells as a <Link to="/class/wizard">wizard</Link>, using her fighter level as her caster level. She can prepare a number of 0-level spells each day equal to 1 + <Link to="/misc/one_sixth">one-sixth</Link> of her fighter level (see the table below).</p>
</Pair>
<Pair title="Passive Ability">She also gains a +2 bonus on Knowledge checks relating to Azlant and the Azlanti, and on Knowledge checks to identify and learn the powers and weaknesses of aboleths, demons, serpentfolk, and undead.</Pair>
</Ability>
<Ability id="arc-fighter-child_of_acavna_and_amaznen-eldritch-armor-training-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-child_of_acavna_and_amaznen-eldritch-armor-training-ex">Eldritch Armor Training (Ex)</Pair>
<Pair hl title="Alters">Armor training</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A child of Acavna and Amaznen gains eldritch armor training. This functions as the normal <em>armor training</em> fighter ability.</Pair>
<Pair title="Swift Action">She can reduce the arcane spell failure chance due to armor she is wearing by 15% for any spells she casts this round.</Pair>
<Pair title="At 7th Level">This reduction increases to 20%.</Pair>
<Pair title="At 11th Level">It increases to 25%.</Pair>
<Pair title="At 15th Level">The reduction increases to 30%.</Pair>
<Pair title="Special">In addition, if she has <Link to="/feat/arcane_armor_training">Arcane Armor Training</Link> or <Link to="/feat/arcane_armor_mastery">Arcane Armor Mastery</Link>, rather than having their normal effects, each of those feats increases the arcane spell failure reduction of her eldritch armor training by 10%.</Pair>
</Ability>
<Ability id="arc-fighter-child_of_acavna_and_amaznen-spells" icon={["spell-book"]}>
<Pair single id="arc-fighter-child_of_acavna_and_amaznen-spells">Spells</Pair>
<Pair hl title="Replaces">Weapon training, bonus feats gained at 8th, 12th, 16th, and 20th level</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="ability"><p>The spellcasting ability of a child of Acavna and Amaznen increases to allow her to cast a limited number of spells drawn from the <Link to="/main/bloodrager_spell">bloodrager spell list</Link>. She automatically adds to her spellbook a number of 1st-level bloodrager spells equal to 3 + her Intelligence modifier. Her caster level for these spells is equal to her fighter level, and the bloodrager class spell list is considered to be her class spell list for the purposes of meeting prerequisites and using magic items.</p>
<p>She uses the <Link to="/class/ranger">ranger's</Link> spells per day (see below), but uses her Intelligence score to determine her <Link to="/rule/bonus_spells">bonus spells</Link> and spell saving throw DCs, just as a wizard does. She does not gain any other wizard abilities, such as an arcane bond or school.</p>
<ScrollContainer id="arc-fighter-child_of_acavna_and_amaznen--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>0</th>
<th>1st</th>
<th>2nd</th>
<th>3rd</th>
<th>4th</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>1</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>2</td>
<td>1</td>
<td>0</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>0</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>3</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>14th</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>15th</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>16th</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>17th</td>
<td>3</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>18th</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>19th</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
</tr>
<tr>
<td>20th</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
</tr>
</tbody></table></ScrollContainer>
</Pair>
<Pair title="Special">Each time she attains a new fighter level, she gains one bloodrager spell of her choice to add to her spellbook. The free spells must be of spell levels she can cast. She otherwise follows the rules for a wizard regarding her spellbook and learning or preparing spells.</Pair>
</Ability>
</>};
const _corsair = {title: "Corsair", jsx: <><h2 id="arc-fighter-corsair-corsair">Corsair</h2>
<p><strong>Sources</strong> <Link to="/source/pirates_of_the_inner_sea">Pirates of the Inner Sea pg. 22</Link><br/>A corsair is a pirate who focuses on shipboard combat, relying on his strength of arms over his agility. He specializes in traditional pirate weapons, but often wears heavier armor than is normally seen on a ship. A corsair moves and fights easily in his armor, however, even in the water. Captains value corsairs because of the skill they exhibit in defending the ship and in boarding actions.</p>
<Ability id="arc-fighter-corsair-pirate-weapons-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-corsair-pirate-weapons-ex" flavor="A corsair is well versed in the types of weapons favored by pirates.">Pirate Weapons (Ex)</Pair>
<Pair title="Choice">When selecting a <Link to="/ability/weapon_groups">group of weapons</Link> for his Weapon Training ability, he can select <strong>Pirate Weapons</strong> as a group. The Pirate Weapons group consists of the <Link to="/eq-weapon/crossbow">crossbow</Link> (all types), <Link to="/eq-weapon/cutlass">cutlass</Link>, <Link to="/eq-weapon/dagger">dagger</Link>, <Link to="/eq-weapon/hook_hand">hook hand</Link>, <Link to="/eq-weapon/rapier">rapier</Link>, and <Link to="/eq-weapon/short_sword">short sword</Link>.</Pair>
</Ability>
<Ability id="arc-fighter-corsair-deck-fighting-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-fighter-corsair-deck-fighting-ex" flavor="A corsair is used to fighting on crowded decks, and isn't fazed by fighting multiple opponents at once.">Deck Fighting (Ex)</Pair>
<Pair hl title="Replaces">The fighter's 2nd-level bonus feat</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">He gains <Link to="/feat/cleave">Cleave</Link> as a bonus feat. He may use this feat even if he does not meet the prerequisites. A corsair does not take the normal -2 penalty to his AC when using the Cleave feat.</Pair>
</Ability>
<Ability id="arc-fighter-corsair-armored-pirate-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-corsair-armored-pirate-ex" flavor="A corsair wears heavier armor than is common aboard a ship.">Armored Pirate (Ex)</Pair>
<Pair hl title="Replaces">Armor training</Pair>
<Pair title="At 3rd Level">The corsair reduces the armor check penalty of any light armor he wears to 0 for purposes of Acrobatics and Swim checks.</Pair>
<Pair title="At 7th Level">This becomes true of medium armor as well.</Pair>
<Pair title="At 11th Level">This now includes heavy armor.</Pair>
</Ability>
<Ability id="arc-fighter-corsair-improved-deck-fighting-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-fighter-corsair-improved-deck-fighting-ex">Improved Deck Fighting (Ex)</Pair>
<Pair hl title="Replaces">The fighter's 6th-level bonus feat</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">The corsair gains <Link to="/feat/great_cleave">Great Cleave</Link> as a bonus feat. He may use this feat even if he does not meet the prerequisites. A corsair does not take the normal -2 penalty to his AC when using the Great Cleave feat.</Pair>
</Ability>
</>};
const _crossbowman = {title: "Crossbowman", jsx: <><h2 id="arc-fighter-crossbowman-crossbowman">Crossbowman</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 104</Link><br/>The crossbowman has perfected the deadly use of the <Link to="/eq-weapon/crossbow">crossbow</Link>, a simple but cruelly efficient weapon, as a craftsman mastering a lethal tool.</p>
<Ability id="arc-fighter-crossbowman-deadshot-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-crossbowman-deadshot-ex">Deadshot (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">When a crossbowman attacks with a crossbow as a <Link to="/rule/readied_action">readied action</Link>, he may add <Link to="/misc/half">half</Link> his Dexterity bonus (minimum +1) on his damage roll.</Pair>
</Ability>
<Ability id="arc-fighter-crossbowman-crossbow-expert-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-crossbowman-crossbow-expert-ex">Crossbow Expert (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A crossbowman gains a +1 bonus on attack and damage rolls with crossbows.</Pair>
<Pair title="At 9th Level">This bonus becomes +2.</Pair>
<Pair title="At 13th Level">This bonus increases to +3.</Pair>
<Pair title="At 17th Level">This bonus becomes +4.</Pair>
</Ability>
<Ability id="arc-fighter-crossbowman-improved-deadshot-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-fighter-crossbowman-improved-deadshot-ex">Improved Deadshot (Ex)</Pair>
<Pair hl title="Replaces">Armor training 2</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">When a crossbowman attacks with a crossbow as a readied action, his target is denied its Dexterity bonus to its AC.</Pair>
</Ability>
<Ability id="arc-fighter-crossbowman-quick-sniper-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-crossbowman-quick-sniper-ex">Quick Sniper (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 2</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">A crossbowman gains a bonus equal to 1/2 his fighter level on Stealth checks when <Link to="/skill/sniping">sniping</Link>.</Pair>
<Pair title="Immediate Action">When he is hit with a ranged attack, he can shoot his crossbow at his attacker if it is loaded.</Pair>
</Ability>
<Ability id="arc-fighter-crossbowman-greater-deadshot-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-crossbowman-greater-deadshot-ex">Greater Deadshot (Ex)</Pair>
<Pair hl title="Replaces">Armor training 3</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">When a crossbowman attacks with a crossbow as a readied action, he may add his Dexterity bonus (minimum +1) on his damage roll.</Pair>
</Ability>
<Ability id="arc-fighter-crossbowman-safe-shot-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-crossbowman-safe-shot-ex">Safe Shot (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 3</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Passive Ability">A crossbowman does not provoke attacks of opportunity when making ranged attacks with a crossbow.</Pair>
</Ability>
<Ability id="arc-fighter-crossbowman-pinpoint-targeting" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-crossbowman-pinpoint-targeting">Pinpoint Targeting</Pair>
<Pair hl title="Replaces">Armor training 4</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">A crossbowman gains <Link to="/feat/pinpoint_targeting">Pinpoint Targeting</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-fighter-crossbowman-meteor-shot-ex" icon={["bowman"]}>
<Pair single id="arc-fighter-crossbowman-meteor-shot-ex">Meteor Shot (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 4</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Standard Action">A crossbowman can make one attack with a crossbow at a -4 penalty. If the attack hits, it inflicts damage normally and the target is subject to a <Link to="/rule/bull_rush">bull rush</Link> or a <Link to="/rule/trip">trip</Link> maneuver using the attack roll as the combat maneuver check. The crossbowman must decide which maneuver to attempt before making his attack roll.</Pair>
</Ability>
<Ability id="arc-fighter-crossbowman-penetrating-shot-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-crossbowman-penetrating-shot-ex">Penetrating Shot (Ex)</Pair>
<Pair hl title="Replaces">Armor mastery</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Passive Ability">When a crossbowman confirms a critical hit with a crossbow, the bolt pierces the target and can strike another creature in line behind it. The crossbowman must be able to trace a line starting at his space and passing through both targets to make this additional attack. The secondary attack is made at a -4 penalty, in addition to any modifiers for added range. If this attack is also a critical hit, the bolt can continue to hit another target, but the penalties stack.</Pair>
</Ability>
<Ability id="arc-fighter-crossbowman-weapon-mastery-ex" icon={["info"]}>
<Pair single id="arc-fighter-crossbowman-weapon-mastery-ex">Weapon Mastery (Ex)</Pair>
<Pair hl title="Alters">Weapon mastery</Pair>
<Pair title="Info">A crossbowman must choose a type of crossbow when he receives <em>weapon mastery.</em></Pair>
</Ability>
</>};
const _cyber_soldier = {title: "Cyber-Soldier", jsx: <><h2 id="arc-fighter-cyber_soldier-cyber-soldier">Cyber-Soldier</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 12</Link><br/>Cyber-soldiers replace fallible flesh with precision-crafted machinery. Some seek to exceed the limitations of humanoid flesh, while others become cyber-soldiers through drastic repairs necessitated by horrific injuries. A cyber-soldier has the following class features.</p>
<Ability id="arc-fighter-cyber_soldier-cybernetic-combat-ex" icon={["mailed-fist","upgrade"]}>
<Pair single id="arc-fighter-cyber_soldier-cybernetic-combat-ex">Cybernetic Combat (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A cyber-soldier gains a slam attack for each <em>cybernetic arm.</em> These attacks deal 1d6 points of bludgeoning damage for a Medium cyber-soldier and 1d4 points of bludgeoning damage for a Small cyber-soldier.</Pair>
<Pair title="Passive Ability">A cyber-soldier gains a +1 bonus on attack rolls and damage rolls with <Link to="/tech-cyber/implanted_weapons">implanted weapons</Link>, <Link to="/tech-cyber/cybernetic_arm">cybernetic arms</Link>, and melee or thrown weapons wielded with a <em>cybernetic arm.</em> Weapons wielded with two <em>cybernetic arms</em> receive double the bonus, except when such weapons are thrown. This attack bonus does not stack with the attack bonus for weapon training.</Pair>
<Pair title="At 9th Level">The damage bonus becomes +2.</Pair>
<Pair title="At 13th Level">The damage bonus increases to +3.</Pair>
<Pair title="At 17th Level">The damage bonus becomes +4.</Pair>
</Ability>
<Ability id="arc-fighter-cyber_soldier-improved-implantation-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-cyber_soldier-improved-implantation-ex">Improved Implantation (Ex)</Pair>
<Pair hl title="Replaces">Armor training 2 and 4</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Info">A cyber-soldier can exceed the normal limitations on <Link to="/rule/cybertech">cybertech</Link> implantation. Her brain and body slots each accommodate one more piece of cybertech than normal. In addition, her limit on implantation points increases by <Link to="/misc/half">half</Link> her cyber-soldier level. She can allocate these points between her Intelligence and Constitution scores as she chooses.</Pair>
<Pair title="At 15th Level">Her body slot can accommodate two more pieces of cybertech than normal.</Pair>
</Ability>
<Ability id="arc-fighter-cyber_soldier-resilience-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-cyber_soldier-resilience-ex">Resilience (Ex)</Pair>
<Pair hl title="Replaces">Armor mastery</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Passive Ability">A cyber-soldier has a reservoir of 5 <Link to="/rule/temporary_hit_points">temporary hit points</Link> for each piece of implanted cybertech in her body. Lost temporary hit points are recovered at the rate of 10 points per hour.</Pair>
</Ability>
</>};
const _dirty_fighter = {title: "Dirty Fighter", jsx: <><h2 id="arc-fighter-dirty_fighter-dirty-fighter">Dirty Fighter</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 140</Link><br/>The dirty fighter laughs at concepts like honor and fair play. He cares only for victory, no matter how he achieves it, and spends as much time mastering sneaky combat maneuvers as he does drilling with weapons or learning how to wear armor. A dirty fighter has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-fighter-dirty_fighter--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/orc">Orc</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-fighter-dirty_fighter-sidestep-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-dirty_fighter-sidestep-ex" flavor="A dirty fighter learns how to evade his enemies when they react to his combat maneuvers.">Sidestep (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">He gains a +1 dodge bonus to his AC against attacks of opportunity provoked by him while attempting a combat maneuver.</Pair>
<Pair title="At 6th Level">This bonus becomes +2.</Pair>
<Pair title="At 10th Level">This bonus increases to +3.</Pair>
<Pair title="At 14th Level">This bonus becomes +4.</Pair>
<Pair title="At 18th Level">This bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-dirty_fighter-maneuver-training-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-fighter-dirty_fighter-maneuver-training-ex" flavor="A dirty fighter becomes a master of dirty tricks.">Maneuver Training (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">He gains a +2 bonus on <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver checks and +2 to his CMD when he is the target of a dirty trick combat maneuver.</Pair>
</Ability>
<Ability id="arc-fighter-dirty_fighter-speedy-tricks-ex" icon={["mailed-fist"]}>
<Pair single id="arc-fighter-dirty_fighter-speedy-tricks-ex" flavor="A dirty fighter has perfected how to quickly perform dirty tricks.">Speedy Tricks (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 2</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">He can make a dirty trick combat maneuver as an attack instead of a standard action.</Pair>
</Ability>
<Ability id="arc-fighter-dirty_fighter-double-tricks-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-dirty_fighter-double-tricks-ex">Double Tricks (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 3 and 4</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">When a dirty fighter performs a combat maneuver, he may apply two different conditions to his target instead of one. Each penalty condition requires a separate action to remove.</Pair>
<Pair title="At 17th Level">He may apply three different conditions.</Pair>
</Ability>
</>};
const _dragonheir_scion = {title: "Dragonheir Scion", jsx: <><h2 id="arc-fighter-dragonheir_scion-dragonheir-scion">Dragonheir Scion</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 12</Link><br/>Dragonheir scions are the martially inclined humanoid descendants of those influenced by draconic power. Unlike their sorcerous brethren, dragonheir scions manifest their heritage in ways more suited to strength of arms and skill with steel than arcane energies. Those who follow this path are often the children of mighty dragon-blooded sorcerers and others who drew energy from their dragon blood, though they themselves might not exhibit spellcasting ability.</p>
<Ability icon={["skills"]} id="arc-fighter-dragonheir_scion-undefined">
<Pair id="arc-fighter-dragonheir_scion-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/use_magic_device">Use Magic Device</Link> (CHA)</Pair>
<Pair title="Removed Skills">Handle Animal, Ride</Pair></Ability>
<Ability id="arc-fighter-dragonheir_scion-draconic-bloodline-su" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-dragonheir_scion-draconic-bloodline-su" flavor="Each dragonheir scion can draw her lineage back to the influence of a great draconic progenitor.">Draconic Bloodline (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice"><p>A dragonheir scion must select one of the chromatic or metallic dragon types. Once chosen, this cannot be changed. A number of dragonheir scion's abilities deal damage and grant resistances based on her dragon type, as noted below.</p>
<ScrollContainer id="arc-fighter-dragonheir_scion--table-0"><table>
<thead>
<tr>
<th>Chromatic Dragon Type</th>
<th>Energy Type</th>
</tr>
</thead>
<tbody><tr>
<td>Black</td>
<td>Acid</td>
</tr>
<tr>
<td>Blue</td>
<td>Electricity</td>
</tr>
<tr>
<td>Green</td>
<td>Acid</td>
</tr>
<tr>
<td>Red</td>
<td>Fire</td>
</tr>
<tr>
<td>White</td>
<td>Cold</td>
</tr>
</tbody></table></ScrollContainer>
<ScrollContainer id="arc-fighter-dragonheir_scion--table-1"><table>
<thead>
<tr>
<th>Metallic Dragon Type</th>
<th>Energy Type</th>
</tr>
</thead>
<tbody><tr>
<td>Brass</td>
<td>Fire</td>
</tr>
<tr>
<td>Bronze</td>
<td>Electricity</td>
</tr>
<tr>
<td>Copper</td>
<td>Acid</td>
</tr>
<tr>
<td>Gold</td>
<td>Fire</td>
</tr>
<tr>
<td>Silver</td>
<td>Cold</td>
</tr>
</tbody></table></ScrollContainer>
</Pair>
<Pair title="Special">If a dragonheir scion takes a level in another class that grants a bloodline, the bloodlines must be of the same type, even if that means that the bloodline of one of the classes must change. Subject to GM discretion, the dragonheir scion can change her former bloodline to make them conform.</Pair>
</Ability>
<Ability id="arc-fighter-dragonheir_scion-eldritch-strikes-su" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-dragonheir_scion-eldritch-strikes-su">Eldritch Strikes (Su)</Pair>
<Pair hl title="Replaces">The bonus feat gained at 1st level</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A dragonheir scion gains <Link to="/feat/arcane_strike">Arcane Strike</Link> as a bonus feat. She does not need to meet its prerequisites.</Pair>
</Ability>
<Ability id="arc-fighter-dragonheir_scion-fearful-might-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-dragonheir_scion-fearful-might-ex">Fearful Might (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="At 1st Level">A dragonheir scion gains a +1 bonus on Intimidate checks to demoralize a foe.</Pair>
<Pair title="At 6th Level">This bonus increases to +2.</Pair>
<Pair title="At 10th Level">This bonus becomes +3.</Pair>
<Pair title="At 14th Level">This bonus increases to +4.</Pair>
<Pair title="At 18th Level">This bonus becomes +5.</Pair>
</Ability>
<Ability id="arc-fighter-dragonheir_scion-draconic-defense-su" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-dragonheir_scion-draconic-defense-su">Draconic Defense (Su)</Pair>
<Pair hl title="Replaces">Armor training 1, 2, and 3</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A dragonheir scion gains a +1 natural armor bonus and energy resistance 5 against her energy type.</Pair>
<Pair title="At 7th Level">This increases to a +2 natural armor bonus and energy resistance 10.</Pair>
<Pair title="At 13th Level">It increases to a +3 natural armor bonus and energy resistance 20.</Pair>
</Ability>
<Ability id="arc-fighter-dragonheir_scion-draconic-strike-su" icon={["upgrade"]}>
<Pair single id="arc-fighter-dragonheir_scion-draconic-strike-su">Draconic Strike (Su)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 4th level.<sup><InnerLink showBacklink="backlink-arc-fighter-dragonheir_scion-fake-fn-1" id="arc-fighter-dragonheir_scion-fake-fn-1" data-hash-target to="arc-fighter-dragonheir_scion-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">Whenever the dragonheir scion damages a target with an attack augmented by Arcane Strike, the attack deals an additional 1d4 points of damage of the dragonheir scion's energy type.</Pair>
</Ability>
<Ability id="arc-fighter-dragonheir_scion-draconic-presense-su" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-dragonheir_scion-draconic-presense-su">Draconic Presense (Su)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 6th level.<sup><InnerLink showBacklink="backlink-arc-fighter-dragonheir_scion-fake-fn-1.2" id="arc-fighter-dragonheir_scion-fake-fn-1.2" data-hash-target to="arc-fighter-dragonheir_scion-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">The dragonheir scion receives <Link to="/feat/dazzling_display">Dazzling Display</Link> as a bonus feat. She does not need a weapon in hand to use this ability, and can use it as a <strong className="hl">standard action</strong>.</Pair>
</Ability>
<Ability id="arc-fighter-dragonheir_scion-wings-su" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-dragonheir_scion-wings-su">Wings (Su)</Pair>
<Pair hl title="Replaces">Armor training 4, armor mastery</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Standard Action">A dragonheir scion can grow leathery dragon wings from her back, granting her a fly speed of 60 feet with average maneuverability. She can dismiss the wings as a <strong className="hl">free action</strong>.</Pair>
</Ability>
<Ability id="arc-fighter-dragonheir_scion-might-of-wyrms-su" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="arc-fighter-dragonheir_scion-might-of-wyrms-su">Might of Wyrms (Su)</Pair>
<Pair hl title="Replaces">Weapon mastery</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">A dragonheir scion's draconic heritage becomes manifest. She gains <Link to="/umr/immunity">immunity</Link> to paralysis, sleep, and damage of her energy type, as well as <Link to="/umr/blindsense">blindsense</Link> with a range of 60 feet.</Pair>
</Ability>
<section data-footnotes><h3 id="arc-fighter-dragonheir_scion-label">Footnotes</h3><ol>
<li id="arc-fighter-dragonheir_scion-fake-fn-1-target"><p>The original text says that <em>Draconic Strike</em> is a 3rd-level ability that replaces your 3rd-level bonus feat, and <em>Draconic Presense</em> likewise targets your 5th level. However, fighters do not get bonus feats at 3rd or 5th level. The general concensus is that they should be bumped to 4th and 6th level respectively, which is what is shown above. <InnerLink aria-label="Back to reference 1" id="backlink-arc-fighter-dragonheir_scion-fake-fn-1" data-hash-target to="arc-fighter-dragonheir_scion-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-arc-fighter-dragonheir_scion-fake-fn-1.2" data-hash-target to="arc-fighter-dragonheir_scion-fake-fn-1.2">↩<sup>2</sup></InnerLink></p></li>
</ol></section></>};
const _dragoon = {title: "Dragoon", jsx: <><h2 id="arc-fighter-dragoon-dragoon">Dragoon</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 46</Link><br/>These gallant lancers serve in the vanguard of many armies or as knights-errant. They are born leaders and masters of the mounted charge.</p>
<Ability id="arc-fighter-dragoon-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-fighter-dragoon-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair title="Info">A dragoon is not proficient with tower shields.</Pair>
</Ability>
<Ability id="arc-fighter-dragoon-skilled-rider-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-dragoon-skilled-rider-ex">Skilled Rider (Ex)</Pair>
<Pair hl title="Replaces">The 1st-level fighter bonus combat feat</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A dragoon gains both the <Link to="/feat/mounted_combat">Mounted Combat</Link> and <Link to="/feat/skill_focus">Skill Focus</Link> (Ride) feats as bonus feats.</Pair>
</Ability>
<Ability id="arc-fighter-dragoon-spear-training-ex" icon={["info"]}>
<Pair single id="arc-fighter-dragoon-spear-training-ex">Spear Training (Ex)</Pair>
<Pair hl title="Alters">Weapon training</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Choice">A dragoon must select <em>weapon training</em> with the <Link to="/ability/weapon_groups">spear group</Link>.</Pair>
<Pair title="At 9th Level">The dragoon's <em>weapon training</em> bonus with spears improves by +1 on attack rolls and +2 on damage rolls.</Pair>
<Pair title="At 13th Level">The dragoon's <em>weapon training</em> bonus with spears improves by another +1 on attack rolls and another +2 on damage rolls.</Pair>
<Pair title="At 17th Level">The dragoon's <em>weapon training</em> bonus with spears improves by yet another +1 on attack rolls and +2 on damage rolls.</Pair>
<Pair title="Special">The dragoon does not gain <em>weapon training</em> in any other groups as he increases in level.</Pair>
</Ability>
<Ability id="arc-fighter-dragoon-spinning-lance-ex" icon={["mailed-fist"]}>
<Pair single id="arc-fighter-dragoon-spinning-lance-ex">Spinning Lance (Ex)</Pair>
<Pair hl title="Replaces">Armor training 2</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A dragoon may alternate attacks with the piercing head of his <Link to="/eq-weapon/lance">lance</Link> with reach, or with the butt end (treat as a <Link to="/eq-weapon/club">club</Link>) against adjacent targets.</Pair>
<Pair title="Special">Unlike a double weapon, the masterwork quality and magical special abilities apply to both ends of the lance, except for those weapon special abilities that apply only to edged weapons.</Pair>
</Ability>
<Ability id="arc-fighter-dragoon-banner-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-dragoon-banner-ex">Banner (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 2, 3, and 4</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A dragoon may attach a banner to his lance. This is identical to the <Link to="/class/cavalier">cavalier</Link> class feature.</Pair>
<Pair title="At 14th Level">The bonuses provided by the dragoon's banner increase by +1.</Pair>
<Pair title="At 19th Level">The bonuses provided by the dragoon's banner increase by +2.</Pair>
<Pair title="Special">Cavalier levels stack with his dragoon level for determining the effect of his banner, and he can take the better banner progression.</Pair>
</Ability>
<Ability id="arc-fighter-dragoon-piercing-lance-ex" icon={["mailed-fist","upgrade"]}>
<Pair single id="arc-fighter-dragoon-piercing-lance-ex">Piercing Lance (Ex)</Pair>
<Pair hl title="Replaces">Armor training 3</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">As a <strong className="hl">standard action</strong> or as part of a <Link to="/rule/charge">charge</Link>, a dragoon attacking a mounted opponent can make two attacks, one against the mount and the other against the rider, using his highest base attack bonus. Furthermore, if the mount is hit and its rider attempts to negate the hit with the Mounted Combat feat, the dragoon's attack roll is considered 4 higher when calculating the DC of the Ride check to negate the hit.</Pair>
</Ability>
<Ability id="arc-fighter-dragoon-leaping-lance-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-dragoon-leaping-lance-ex">Leaping Lance (Ex)</Pair>
<Pair hl title="Replaces">Armor training 4</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Passive Ability">A dragoon and his mount suffer no armor check penalty on Acrobatics checks while mounted.</Pair>
<Pair title="Ability">When charging, a dragoon may jump from his mount toward his target. If he jumps 10 feet, his charge modifiers on attack rolls and to AC are doubled and he is still considered mounted for lance damage, mounted combat feats, and so on.</Pair>
<Pair title="Special">This ability qualifies you for the <Link to="/feat/rebounding_leap">Rebounding Leap</Link> feat.</Pair>
</Ability>
<Ability id="arc-fighter-dragoon-weapon-mastery" icon={["info"]}>
<Pair single id="arc-fighter-dragoon-weapon-mastery">Weapon Mastery</Pair>
<Pair hl title="Alters">Weapon mastery</Pair>
<Pair title="Choice">The dragoon must select the lance for <em>weapon mastery.</em></Pair>
</Ability>
</>};
const _drill_sergeant = {title: "Drill Sergeant", jsx: <><h2 id="arc-fighter-drill_sergeant-drill-sergeant">Drill Sergeant</h2>
<p><strong>Sources</strong> <Link to="/source/melee_tactics_toolbox">Melee Tactics Toolbox pg. 11</Link><br/>Drill sergeants excel at training other combatants in fighting techniques.</p>
<Ability id="arc-fighter-drill_sergeant-tactician-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-drill_sergeant-tactician-ex">Tactician (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A drill sergeant gains the <Link to="/class/cavalier">cavalier's</Link> <em>tactician</em> class feature, treating his fighter level as his cavalier level for the purposes of this ability.</Pair>
</Ability>
<Ability id="arc-fighter-drill_sergeant-tactician-ex" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-fighter-drill_sergeant-tactician-ex" flavor="Text from the cavalier class">Tactician (Ex)</Pair>
<Pair title="Ability">You receive a <Link to="/main/teamwork_feat">teamwork feat</Link> as a bonus feat. You must meet the prerequisites for this feat.</Pair>
<Pair title="Standard Action">You can grant this feat to all allies within 30 feet who can see and hear you. Allies retain the use of this bonus feat for 3 rounds plus 1 round for every two levels you possess. Allies do not need to meet the prerequisites of these bonus feats.</Pair>
<Pair title="Usage">1 time/day + 1 per five fighter levels<ByLevelPop levels={[[2,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
</Ability>
<Ability id="arc-fighter-drill_sergeant-weapon-training-ex" icon={["broken-shield"]}>
<Pair single id="arc-fighter-drill_sergeant-weapon-training-ex">Weapon Training (Ex)</Pair>
<Pair hl title="Alters">Weapon training 1</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A drill sergeant gains <em>weapon training</em> with one <Link to="/ability/weapon_groups">group of weapons</Link>. He doesn't gain <em>weapon training</em> with other groups at later levels, though his <em>weapon training</em> bonus improves by 1 for every 4 levels after 5th level.</Pair>
</Ability>
<Ability id="arc-fighter-drill_sergeant-greater-tactician-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-drill_sergeant-greater-tactician-ex">Greater Tactician (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 2</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">The drill sergeant gains the cavalier's <em>greater tactician</em> class feature.</Pair>
</Ability>
<Ability id="arc-fighter-drill_sergeant-greater-tactician-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-drill_sergeant-greater-tactician-ex" flavor="Text from the cavalier class">Greater Tactician (Ex)</Pair>
<Pair title="Ability">You receive an additional teamwork feat as a bonus feat. You must meet the prerequisites for this feat. You can grant this feat to your allies using the <em>tactician</em> ability.</Pair>
<Pair title="Swift Action">Using the <em>tactician</em> ability becomes a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-fighter-drill_sergeant-weapon-trainer-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-drill_sergeant-weapon-trainer-ex">Weapon Trainer (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 3</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Passive Ability">When a drill sergeant wields a weapon he has <em>weapon training</em> in, all allies within 30 feet who can see and hear the drill sergeant gain <Link to="/misc/half">half</Link> his <em>weapon training</em> bonus when they wield any weapon from the same weapon group. This bonus doesn't stack with any <em>weapon training</em> bonus an ally already possesses.</Pair>
</Ability>
<Ability id="arc-fighter-drill_sergeant-master-tactician-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-drill_sergeant-master-tactician-ex">Master Tactician (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 4</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">The drill sergeant gains the cavalier's <em>master tactician</em> class feature.</Pair>
</Ability>
<Ability id="arc-fighter-drill_sergeant-master-tactician-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-drill_sergeant-master-tactician-ex" flavor="Text from the cavalier ability">Master Tactician (Ex)</Pair>
<Pair title="Ability">You receive an additional teamwork feat as a bonus feat. You must meet the prerequisites for this feat. You can grant this feat to your allies using the <em>tactician</em> ability.</Pair>
<Pair title="Special">Whenever you use the <em>tactician</em> ability, you grant any two teamwork feats that you know. You can select from <strong>any</strong> of your teamwork feats, not just your bonus feats.</Pair>
</Ability>
</>};
const _druman_blackjacket = {title: "Druman Blackjacket", jsx: <><h2 id="arc-fighter-druman_blackjacket-druman-blackjacket">Druman Blackjacket</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 36</Link><br/>Known as the Blackjackets, the elite soldiers of Druma are and always have been mercenaries rather than a standing army. Still, gold buys loyalty, and the Kalistocrats pay best of all. As a result, the Blackjackets are well equipped and dedicate themselves to training in small-unit tactics, quickly communicating strategies and tricks to handle any threat to their charges.</p>
<Ability id="arc-fighter-druman_blackjacket-bonus-feats" icon={["upgrade"]}>
<Pair single id="arc-fighter-druman_blackjacket-bonus-feats">Bonus Feats</Pair>
<Pair hl title="Alters">Bonus fighter feats</Pair>
<Pair title="Choice">In addition to combat feats, a Druman Blackjacket can choose <Link to="/feat/improved_iron_will">Improved Iron Will</Link>, <Link to="/feat/iron_will">Iron Will</Link>, or any <Link to="/main/teamwork_feat">teamwork feat</Link> as bonus feats.</Pair>
</Ability>
<Ability id="arc-fighter-druman_blackjacket-well-paid-loyalty-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-druman_blackjacket-well-paid-loyalty-ex">Well-Paid Loyalty (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A Druman Blackjacket gains a +1 bonus on Will saves against compulsion spells, spell-like abilities, and effects.</Pair>
<Pair title="At 6th Level">This bonus becomes +2.</Pair>
<Pair title="At 10th Level">This bonus increases to +3.</Pair>
<Pair title="At 14th Level">This bonus becomes +4.</Pair>
<Pair title="At 18th Level">This bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-druman_blackjacket-blackjacket-tactics-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-druman_blackjacket-blackjacket-tactics-ex">Blackjacket Tactics (Ex)</Pair>
<Pair hl title="Replaces">The bonus feat gained at 4th level</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">Two or more Druman Blackjackets can spend 1 minute discussing strategy, then choose a single teamwork feat possessed by at least one of them. For a number of hours equal to the class level of the highest-level Blackjacket, the participants each gain the benefits of the selected feat even if they do not meet the feat's prerequisites. If a creature benefiting from this ability moves more than 30 feet away from any other participant, it loses all benefits of this ability until it is again within 30 feet.</Pair>
<Pair title="Special">Creatures that do not have levels in this archetype can't benefit from this ability, and no creature can benefit from this ability more than once at any given time.</Pair>
</Ability>
<Ability id="arc-fighter-druman_blackjacket-amateurs-ex" icon={["stairs-goal","upgrade","armor-upgrade"]}>
<Pair single id="arc-fighter-druman_blackjacket-amateurs-ex">Amateurs! (Ex)</Pair>
<Pair hl title="Replaces">The bonus feat gained at 8th level</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">When using the <em>Blackjacket tactics</em> ability, a Druman Blackjacket can include one or more creatures without levels in this archetype, but doing so reduces the duration of the effect to a number of minutes equal to the class level of the highest-level Blackjacket instead of a number of hours per level. If only Blackjackets are included in the effect, all Druman Blackjackets affected gain a +1 morale bonus on skill checks and saving throws for the duration of the effect.</Pair>
</Ability>
<Ability id="arc-fighter-druman_blackjacket-superior-tactics-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-druman_blackjacket-superior-tactics-ex">Superior Tactics (Ex)</Pair>
<Pair hl title="Replaces">The bonus feat gained at 12th level</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">A Druman Blackjacket who uses the <em>Blackjacket tactics</em> ability can allow all affected Blackjackets to gain a second bonus teamwork feat possessed by at least one of the participants.</Pair>
</Ability>
<Ability id="arc-fighter-druman_blackjacket-esprit-de-corps-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-fighter-druman_blackjacket-esprit-de-corps-ex">Esprit de Corps (Ex)</Pair>
<Pair hl title="Replaces">The bonus feat gained at 16th level</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Ability">A Druman Blackjacket grants all Blackjackets with whom he is sharing one or more teamwork feats through the <em>Blackjacket tactics</em> ability a +2 morale bonus on attack rolls, ability checks, skill checks, and saving throws. Each affected Blackjacket increases this bonus by 1 if another affected Blackjacket has been reduced to 0 or fewer hit points since the beginning of his last turn.</Pair>
</Ability>
</>};
const _eldritch_guardian = {title: "Eldritch Guardian", jsx: <><h2 id="arc-fighter-eldritch_guardian-eldritch-guardian">Eldritch Guardian</h2>
<p><strong>Sources</strong> <Link to="/source/familiar_folio">Familiar Folio pg. 7</Link><br/>Eldritch guardians are trained to detect and give warning about magic threats to the people and places they protect.</p>
<Ability icon={["skills"]} id="arc-fighter-eldritch_guardian-undefined">
<Pair id="arc-fighter-eldritch_guardian-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/perception">Perception</Link> (WIS), <Link to="/skill/spellcraft">Spellcraft</Link> (INT), <Link to="/skill/use_magic_device">Use Magic Device</Link> (CHA)</Pair>
<Pair title="Removed Skills">Intimidate, Ride, Swim</Pair></Ability>
<Ability id="arc-fighter-eldritch_guardian-familiar-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-eldritch_guardian-familiar-ex">Familiar (Ex)</Pair>
<Pair hl title="Replaces">The bonus feat gained at 1st level</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">An eldritch guardian gains a <Link to="/sidekick/familiar">familiar</Link>, treating his fighter level as his effective <Link to="/class/wizard">wizard</Link> level for the purpose of this ability.</Pair>
</Ability>
<Ability id="arc-fighter-eldritch_guardian-share-training-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-eldritch_guardian-share-training-ex">Share Training (Ex)</Pair>
<Pair hl title="Replaces">The bonus feat gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">When the familiar can see and hear its master, it can use any combat feat possessed by the eldritch guardian. The familiar doesn't have to meet the feat's prerequisites, but at the GM's discretion may be precluded from using certain combat feats due to its physical form. For example, an eldritch guardian's pig familiar with access to <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link> (spiked chain) would not gain the ability to use spiked chains, since it doesn't have any limbs capable of properly handling them.</Pair>
</Ability>
<Ability id="arc-fighter-eldritch_guardian-steel-will-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-eldritch_guardian-steel-will-ex">Steel Will (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">The eldritch guardian gains a +1 bonus on Will saves against fear and mind-affecting effects.</Pair>
<Pair title="At 6th Level">This bonus becomes +2.</Pair>
<Pair title="At 10th Level">This bonus increases to +3.</Pair>
<Pair title="At 14th Level">This bonus becomes +4.</Pair>
<Pair title="At 18th Level">This bonus increases to +5.</Pair>
</Ability>
</>};
const _foehammer = {title: "Foehammer", jsx: <><h2 id="arc-fighter-foehammer-foehammer">Foehammer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 14</Link><br/>While the axe is the most famous dwarven weapon, the hammer is at the heart of dwarves' heritage as forgemasters and warriors alike.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-fighter-foehammer--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/dwarf">Dwarf</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-fighter-foehammer-sledgehammer-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-foehammer-sledgehammer-ex">Sledgehammer (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A foehammer wielding a hammer gains a +2 circumstance bonus on combat maneuver checks made to <Link to="/rule/bull_rush">bull rush</Link>, <Link to="/rule/overrun">overrun</Link>, <Link to="/rule/sunder">sunder</Link>, or <Link to="/rule/trip">trip</Link>.</Pair>
</Ability>
<Ability id="arc-fighter-foehammer-weapon-training-ex" icon={["broken-shield"]}>
<Pair single id="arc-fighter-foehammer-weapon-training-ex">Weapon Training (Ex)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A foehammer must select hammers and does not gain weapon training with <Link to="/ability/weapon_groups">other groups</Link>, though his weapon training bonus improves by +1 every four levels after 5th.</Pair>
</Ability>
<Ability id="arc-fighter-foehammer-hammer-to-the-ground-ex" icon={["mailed-fist"]}>
<Pair single id="arc-fighter-foehammer-hammer-to-the-ground-ex">Hammer to the Ground (Ex)</Pair>
<Pair hl title="Replaces">Armor training 2 and 4</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">When a foehammer succeeds at a bull rush combat maneuver, he can make a trip combat maneuver at the end of the bull rush. If he does not move with the target, the force of his blow may still trip his foe, but he takes a -5 penalty on the combat maneuver check to trip.</Pair>
<Pair title="At 15th Level">Any creature a foehammer successfully bull rushes is automatically knocked <Link to="/rule/prone">prone</Link> at the end of the bull rush.</Pair>
</Ability>
<Ability id="arc-fighter-foehammer-rhythmic-blows-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-foehammer-rhythmic-blows-ex">Rhythmic Blows (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 2</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">Each time that a foehammer hits a target, he gains a +1 bonus on attack rolls against that target. This bonus stacks with each hit against that target, but lasts only until the end of the foehammer's turn.</Pair>
</Ability>
<Ability id="arc-fighter-foehammer-piledriver-ex" icon={["mailed-fist"]}>
<Pair single id="arc-fighter-foehammer-piledriver-ex">Piledriver (Ex)</Pair>
<Pair hl title="Replaces">Armor training 3</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Standard Action">A foehammer may make a single melee attack with a weapon from the hammer weapon training group. If the attack hits, he may make a bull rush or trip combat maneuver against the target of his attack as a <strong className="hl">free action</strong> that does not provoke an attack of opportunity.</Pair>
</Ability>
<Ability id="arc-fighter-foehammer-ground-breaker-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-foehammer-ground-breaker-ex">Ground Breaker (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 3</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Full-Round Action">A foehammer may strike the ground with his hammer. If the attack deals more damage than the floor's hardness, the space he occupies and all adjacent squares become <Link to="/rule/difficult_terrain">difficult terrain</Link>. Creatures in those squares, except for the foehammer, are knocked prone (DC 15 Reflex negates).</Pair>
</Ability>
<Ability id="arc-fighter-foehammer-hammer-master-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-foehammer-hammer-master-ex">Hammer Master (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 4</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">Any combat feats a foehammer has learned with any weapon from the hammer weapon training group (e.g., <Link to="/feat/improved_critical">Improved Critical</Link>, <Link to="/feat/weapon_focus">Weapon Focus</Link>) apply to all weapons from that group.</Pair>
</Ability>
<Ability id="arc-fighter-foehammer-devastating-blow-ex" icon={["mailed-fist"]}>
<Pair single id="arc-fighter-foehammer-devastating-blow-ex">Devastating Blow (Ex)</Pair>
<Pair hl title="Replaces">Armor mastery</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Standard Action">A foehammer may make a single melee attack with a weapon from the hammer weapon training group at a -5 penalty. If the attack hits, it is treated as a critical threat. Weapon special abilities that only activate on a critical hit do not activate if this critical hit is confirmed.</Pair>
</Ability>
<Ability id="arc-fighter-foehammer-weapon-mastery-ex" icon={["info"]}>
<Pair single id="arc-fighter-foehammer-weapon-mastery-ex">Weapon Mastery (Ex)</Pair>
<Pair hl title="Alters">Weapon mastery</Pair>
<Pair title="Info">A foehammer must choose a weapon from the hammer group.</Pair>
</Ability>
</>};
const _free_hand_fighter = {title: "Free Hand Fighter", jsx: <><h2 id="arc-fighter-free_hand_fighter-free-hand-fighter">Free Hand Fighter</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 105</Link><br/>The free hand fighter specializes in the delicate art of handling a single weapon in one hand while using his free hand to balance, block, tip, and distract his opponents. While not a brawler, his open hand is as much a weapon as a bow or blade. His fighting school benefits only apply when he is using a one-handed weapon and carrying nothing in his other hand.</p>
<Ability id="arc-fighter-free_hand_fighter-deceptive-strike-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-free_hand_fighter-deceptive-strike-ex">Deceptive Strike (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A free hand fighter gains a +1 bonus to CMB and CMD on <Link to="/rule/disarm">disarm</Link> checks and on Bluff checks to feint or create a diversion to hide.</Pair>
<Pair title="At 6th Level">This bonus becomes +2.</Pair>
<Pair title="At 10th Level">This bonus increases to +3.</Pair>
<Pair title="At 14th Level">This bonus becomes +4.</Pair>
<Pair title="At 18th Level">This bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-free_hand_fighter-elusive-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-free_hand_fighter-elusive-ex">Elusive (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1, 2, 3, and 4</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A free hand fighter gains a +1 dodge bonus to AC.</Pair>
<Pair title="At 6th Level">This bonus becomes +2.</Pair>
<Pair title="At 10th Level">This bonus increases to +3.</Pair>
<Pair title="At 14th Level">This bonus becomes +4.</Pair>
<Pair title="At 18th Level">This bonus increases to +5.</Pair>
<Pair title="Special">This bonus does not apply when wearing medium or heavy armor or carrying a medium or heavier load.</Pair>
</Ability>
<Ability id="arc-fighter-free_hand_fighter-singleton-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-free_hand_fighter-singleton-ex">Singleton (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1 and 4</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A free hand fighter gains a +1 bonus on attack and damage rolls when wielding a melee weapon in one hand and leaving his other hand free.</Pair>
<Pair title="At 11th Level">This bonus becomes +2.</Pair>
<Pair title="At 17th Level">This bonus increases to +3.</Pair>
</Ability>
<Ability id="arc-fighter-free_hand_fighter-timely-tip-ex" icon={["mailed-fist","armor-downgrade"]}>
<Pair single id="arc-fighter-free_hand_fighter-timely-tip-ex">Timely Tip (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 2</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Move-Equivalent Action">A free hand fighter can make a disarm combat maneuver against a target he threatens to push aside the target's shield. If successful, the target loses its shield bonus to AC against the free hand fighter's next attack.</Pair>
</Ability>
<Ability id="arc-fighter-free_hand_fighter-interference-ex" icon={["mailed-fist","armor-downgrade"]}>
<Pair single id="arc-fighter-free_hand_fighter-interference-ex">Interference (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 3</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Move-Equivalent Action">A free hand fighter can make a disarm or <Link to="/rule/trip">trip</Link> combat maneuver against a target he threatens to push his opponent off balance. If successful, the target becomes <Link to="/rule/flat_footed">flat-footed</Link>. This condition lasts until the target takes damage from a melee or ranged attack or until the beginning of the free hand fighter's next turn, whichever comes first.</Pair>
</Ability>
<Ability id="arc-fighter-free_hand_fighter-reversal-ex" icon={["mailed-fist","armor-upgrade"]}>
<Pair single id="arc-fighter-free_hand_fighter-reversal-ex">Reversal (Ex)</Pair>
<Pair hl title="Replaces">Armor mastery</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Immediate Action">A free hand fighter can make a disarm combat maneuver against a creature he threatens when he is the target of a melee attack from another creature. If successful, the attack changes to target the target of the free hand fighter's maneuver instead of the free hand fighter himself.</Pair>
</Ability>
</>};
const _gladiator = {title: "Gladiator", jsx: <><h2 id="arc-fighter-gladiator-gladiator">Gladiator</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 47</Link><br/>Most fighters battle out of necessity, with each battle a contest of life and death. Some, however, fight for glory and for the adulation of the crowd. The gladiator is both a cunning warrior and a consummate performer, knowing life and death are balanced not only on a sword's edge, but also on the cheers or jeers of the crowd.</p>
<Ability icon={["skills"]} id="arc-fighter-gladiator-undefined">
<Pair id="arc-fighter-gladiator-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/perform">Perform (act, comedy, and dance)</Link> (CHA)</Pair></Ability>
<Ability id="arc-fighter-gladiator-weapon-and-armor-proficiency" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-fighter-gladiator-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Proficiency with heavy armor and tower shields</Pair>
<Pair title="Ability">A gladiator gains the <Link to="/feat/performance_weapon_mastery">Performance Weapon Mastery</Link> feat at 1st level as a bonus feat. This bonus feat is in addition to the bonus feat a fighter gains at 1st level. Furthermore, a gladiator using <Link to="/rule/piecemeal_armor">piecemeal armor</Link> is considered to be wearing a suit of armor as long as he wearing two or three armor pieces, gaining the +1 to armor bonus but still taking the +5% chance of arcane spell failure if the pieces are mixed.</Pair>
</Ability>
<Ability id="arc-fighter-gladiator-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-gladiator-bonus-feats">Bonus Feats</Pair>
<Pair title="Ability">A gladiator may choose to take <Link to="/main/combat_feat">combat</Link> or <Link to="/main/feats_performance">performance</Link> feats as bonus feats.</Pair>
</Ability>
<Ability id="arc-fighter-gladiator-fame-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-gladiator-fame-ex">Fame (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">When a gladiator begins a <Link to="/rule/performance_combat">performance combat</Link>, he always starts with at least 1 victory point. If he already has victory points, he gains 1 extra victory point.</Pair>
<Pair title="At 10th Level">The gladiator starts out with at least 2 victory points. If he already has victory points, he gains 2 extra victory points.</Pair>
</Ability>
</>};
const _gloomblade = {title: "Gloomblade", jsx: <><h2 id="arc-fighter-gloomblade-gloomblade">Gloomblade</h2>
<p><strong>Sources</strong> <Link to="/source/planar_adventures">Planar Adventures pg. 14</Link><br/>The Shadow Plane's substance is legendary for its versatility. In shadow-shrouded lands, secretive martial practitioners long ago learned to shape supernatural weapons from ribbons of pure darkness.</p>
<Ability icon={["skills"]} id="arc-fighter-gloomblade-undefined">
<Pair id="arc-fighter-gloomblade-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX), <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT), <Link to="/skill/perception">Perception</Link> (WIS), <Link to="/skill/stealth">Stealth</Link> (DEX)</Pair>
<Pair title="Removed Skills">Climb, Handle Animal, Ride, Swim</Pair></Ability>
<Ability id="arc-fighter-gloomblade-shadow-weapon-su" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-fighter-gloomblade-shadow-weapon-su">Shadow Weapon (Su)</Pair>
<Pair hl title="Replaces">Armor training, proficiency with heavy armor and shields</Pair>
<Pair title="Move-Equivalent Action">A gloomblade can create a shadowy weapon in a free hand. This can take the form of any melee weapon with which he is proficient. A gloomblade can have only one shadow weapon in existence at a time; creating a new shadow weapon causes an existing shadow weapon to vanish.</Pair>
<Pair title="At 3rd Level">The shadow weapon acts as a magic weapon with a +1 enhancement bonus.</Pair>
<Pair title="At 6th Level">The weapon's enhancement bonus becomes +2.</Pair>
<Pair title="At 7th Level">A gloomblade can create (and maintain) two shadow weapons at a time as a <strong className="hl">move action</strong>; if he does, each weapon has an enhancement bonus 1 lower than normal. If a gloomblade creates only one weapon, it gains a weapon special ability of his choice (chosen upon creation); the ability must be valid for the shadow weapon's weapon type and must be chosen from <Link to="/magic-enh/defending">defending</Link>, <Link to="/magic-enh/flaming">flaming</Link>, <Link to="/magic-enh/frost">frost</Link>, <Link to="/magic-enh/keen">keen</Link>, <Link to="/magic-enh/ghost_touch">ghost touch</Link>, <Link to="/magic-enh/merciful">merciful</Link>, <Link to="/magic-enh/shock">shock</Link>, <Link to="/magic-enh/thundering">thundering</Link>, or <Link to="/magic-enh/vicious">vicious</Link>. (Additional special abilities might qualify, at the GM's discretion.)</Pair>
<Pair title="At 10th Level">The weapon's enhancement bonus increases to +3.</Pair>
<Pair title="At 11th Level">A gloomblade's shadow weapons each gain their full enhancement bonus if he creates two weapons. If a gloomblade creates only one shadow weapon, it gains additional weapon special abilities; the total effective bonus of these abilities cannot exceed +3. The gloomblade can now choose from the of <Link to="/magic-enh/anarchic">anarchic</Link>, <Link to="/magic-enh/axiomatic">axiomatic</Link>, <Link to="/magic-enh/flaming_burst">flaming burst</Link>, <Link to="/magic-enh/icy_burst">icy burst</Link>, <Link to="/magic-enh/holy">holy</Link>, <Link to="/magic-enh/shocking_burst">shocking burst</Link>, <Link to="/magic-enh/unholy">unholy</Link>, and <Link to="/magic-enh/wounding">wounding</Link> weapon special abilities as well as those from the list above.</Pair>
<Pair title="At 14th Level">The weapon's enhancement bonus becomes +4.</Pair>
<Pair title="At 15th Level">A gloomblade's shadow weapons each gain magic weapon special abilities with a total effective bonus of +2 per weapon. If a gloomblade creates only one shadow weapon, its magic weapon special abilities cannot exceed a total effective bonus of +5. The gloomblade adds <Link to="/magic-enh/brilliant_energy">brilliant energy</Link>, <Link to="/magic-enh/dancing">dancing</Link>, and <Link to="/magic-enh/speed">speed</Link> to the options he can choose as weapon special abilities for his shadow weapon.</Pair>
<Pair title="At 18th Level">The weapon's enhancement bonus increases to +5.</Pair>
<Pair title="Special">He retains proficiency in light and medium armor</Pair>
</Ability>
<Ability id="arc-fighter-gloomblade-shadow-weapon-training-ex" icon={["broken-shield"]}>
<Pair single id="arc-fighter-gloomblade-shadow-weapon-training-ex">Shadow Weapon Training (Ex)</Pair>
<Pair hl title="Alters">Weapon training</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A gloomblade gains weapon training, except that he does not select a weapon group; instead, the bonus applies to the shadow weapons he creates. A gloomblade does not select additional weapon groups as he gains levels.</Pair>
<Pair title="At 9th Level"><p>Whenever a gloomblade creates one or more shadow weapons, he can apply any one of the following shadow effects (chosen upon creation) to one of them.</p>
<ul>
<li>During the gloomblade's turn, he can increase his reach with that weapon by 5 feet.</li>
<li>The gloomblade can increase a thrown shadow weapon's range increment (if any) by 20 feet.</li>
<li>When he hits a foe with a melee attack with the weapon, he can use it to perform a <Link to="/rule/reposition">reposition</Link> combat maneuver against the creature hit as a <strong className="hl">swift action</strong>. This does not provoke attacks of opportunity.</li>
<li>Attacks made with the weapon ignore hardness equal to or less than the gloomblade's fighter level.</li>
</ul>
</Pair>
<Pair title="At 13th Level">The gloomblade can apply two effects to his shadow weapons. These effects can be split between multiple shadow weapons as a gloomblade desires, but they don't stack with themselves.</Pair>
<Pair title="At 17th Level">The gloomblade can apply three effects to his shadow weapons. These effects can be split between multiple shadow weapons as a gloomblade desires, but they don't stack with themselves.</Pair>
</Ability>
</>};
const _high_guardian = {title: "High Guardian", jsx: <><h2 id="arc-fighter-high_guardian-high-guardian">High Guardian</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court pg. 8</Link><br/>As the shield that protects his lord from the myriad dangers around every corner, the high guardian pledges his life to keep his charge safe. High guardians epitomize personal devotion, making them especially popular among Taldan nobles envious of the emperor's <Link to="/rule/ulfen_guard">Ulfen Guard</Link>, as well as in the courts of the Lands of the Linnorm Kings, the war councils of Molthune and Lastwall, and the refined chambers of Osirion.</p>
<Ability icon={["skills"]} id="arc-fighter-high_guardian-undefined">
<Pair id="arc-fighter-high_guardian-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering), Knowledge (engineering)</Pair></Ability>
<Ability id="arc-fighter-high_guardian-obligation-ex" icon={["stairs-goal","shield-reflect"]}>
<Pair single id="arc-fighter-high_guardian-obligation-ex">Obligation (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A high guardian can spend 1 minute of focused concentration each day to select a single ally as his <em>obligation,</em> vowing to keep that person alive for that day. Once he has chosen, he can't change his <em>obligation</em> until the following day. If his <em>obligation</em> dies, the high guardian must atone for 1 week before he can select another <em>obligation.</em></Pair>
</Ability>
<Ability id="arc-fighter-high_guardian-right-hand-ex" icon={["shield-reflect"]}>
<Pair single id="arc-fighter-high_guardian-right-hand-ex">Right Hand (Ex)</Pair>
<Pair hl title="Replaces">The bonus feat gained at 1st level</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Immediate Action">A high guardian can take <Link to="/rule/a_5_foot_step">a 5-foot step</Link>, as long as he ends this movement adjacent to his <em>obligation.</em> If he takes this step, he cannot take a 5-foot step during his next turn and his total movement is reduced by 5 feet during his next turn.</Pair>
</Ability>
<Ability id="arc-fighter-high_guardian-defenders-reflexes-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-high_guardian-defenders-reflexes-ex">Defender's Reflexes (Ex)</Pair>
<Pair hl title="Replaces">The bonus feat gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A high guardian gains <Link to="/feat/combat_reflexes">Combat Reflexes</Link> as a bonus feat, and he can use his Strength modifier instead of his Dexterity modifier to determine the number of additional attacks of opportunity he can make per round. If he already has Combat Reflexes, he instead gains <Link to="/feat/stand_still">Stand Still</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-fighter-high_guardian-unassailable-allegiance-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-high_guardian-unassailable-allegiance-ex">Unassailable Allegiance (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A high guardian gains a +1 bonus on Will saves against compulsion spells and effects.</Pair>
<Pair title="At 6th Level">This bonus becomes +2.</Pair>
<Pair title="At 10th Level">This bonus increases to +3.</Pair>
<Pair title="At 14th Level">This bonus becomes +4.</Pair>
<Pair title="At 18th Level">This bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-high_guardian-royal-protector-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-high_guardian-royal-protector-ex">Royal Protector (Ex)</Pair>
<Pair hl title="Replaces">The bonus feat gained at 4th level</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A high guardian gains <Link to="/feat/bodyguard">Bodyguard</Link> and <Link to="/feat/in_harms_way">In Harm's Way</Link> as bonus feats, though he can use them only to improve his <em>obligation's</em> AC or intercept a successful attack against his <em>obligation.</em></Pair>
</Ability>
</>};
const _lore_warden = {title: "Lore Warden", jsx: <><h2 id="arc-fighter-lore_warden-lore-warden">Lore Warden</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 144</Link><br/>Quick wits and deceptive techniques can often succeed where brute force might not. A lore warden is the consummate warrior-scholar of the <Link to="/rule/pathfinder_society">Pathfinder Society</Link>, outsmarting her competition even when locking blades with powerful foes. Outside of combat, a lore warden's extensive education also helps her document the past and survive great danger.</p>
<Ability id="arc-fighter-lore_warden-scholastic-ex" icon={["skills"]}>
<Pair single id="arc-fighter-lore_warden-scholastic-ex">Scholastic (Ex)</Pair>
<Pair hl title="Replaces">Proficiency with medium armor, heavy armor, and shields</Pair>
<Pair title="Info">A lore warden gains 2 additional skill ranks each level. These ranks must be spent on Intelligence-based skills. All <Link to="/skill/craft">Craft</Link> (CHA) and <Link to="/skill/knowledge">Knowledge</Link> (INT) skills are class skills for lore wardens, as are <Link to="/skill/linguistics">Linguistics</Link> (INT) and <Link to="/skill/spellcraft">Spellcraft</Link> (INT).</Pair>
</Ability>
<Ability id="arc-fighter-lore_warden-skill-over-strength-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-lore_warden-skill-over-strength-ex">Skill Over Strength (Ex)</Pair>
<Pair hl title="Replaces">Bravery, fighter bonus feat gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A lore warden qualifies for feats and other abilities as though she had the <Link to="/feat/combat_expertise">Combat Expertise</Link> feat.</Pair>
<Pair title="At 6th Level">Se gains Combat Expertise as a bonus feat, even if she would not normally qualify for the feat. If she already has Combat Expertise, she instead gains any one combat feat that includes Combat Expertise as a prerequisite (and for which she otherwise qualifies).</Pair>
<Pair title="At 10th Level">She can treat her base attack bonus as though it were 2 higher for the purpose of calculating the effects of Combat Expertise.</Pair>
</Ability>
<Ability id="arc-fighter-lore_warden-swords-secret-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-lore_warden-swords-secret-ex" flavor="A lore warden learns specialized techniques that help her to quickly analyze and defeat her foes.">Swords Secret (Ex)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Choice">A lore warden gains one swords secret. Except where noted, a lore warden cannot select the same swords secret more than once.</Pair>
<Pair title="At 7th Level">She chooses a second swords secret.</Pair>
<Pair title="At 11th Level">She chooses a third swords secret.</Pair>
<Pair title="At 15th Level">She chooses a fourth swords secret.</Pair>
<Pair title="At 19th Level">She chooses a fifth swords secret.</Pair>
</Ability>
<Ability id="arc-fighter-lore_warden-exploit-weakness-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-fighter-lore_warden-exploit-weakness-ex">Exploit Weakness (Ex)</Pair>
<Pair title="Passive Ability">The lore warden adds <Link to="/misc/one_third">one-third</Link> her class level on attack rolls to confirm critical hits.</Pair>
<Pair title="At 11th Level">Whenever she confirms a critical hit, her weapon attacks ignore the first 5 points of damage reduction or hardness the target has until the end of her next turn.</Pair>
<Pair title="At 19th Level">The lore warden can automatically confirm a critical hit once per round when she threatens a critical hit.</Pair>
</Ability>
<Ability id="arc-fighter-lore_warden-hairs-breadth-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-lore_warden-hairs-breadth-ex">Hair's Breadth (Ex)</Pair>
<Pair title="Prerequisites">11th-level lore warden</Pair>
<Pair title="Immediate Action">Once per day when subject to a critical hit, the lore warden can attempt an Acrobatics check to reduce the damage. If the result of this Acrobatics check is greater than the opponent's confirmation roll, she negates the critical hit; the attack still hits and deals normal damage.</Pair>
<Pair title="At 15th Level">She can use this secret one additional time per day.</Pair>
</Ability>
<Ability id="arc-fighter-lore_warden-know-thy-enemy-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-fighter-lore_warden-know-thy-enemy-ex">Know Thy Enemy (Ex)</Pair>
<Pair title="Standard Action">When the lore warden succeeds at a Knowledge check to identify a creature's abilities and weaknesses, she can also use a <strong className="hl">standard action</strong> to grant herself a +2 insight bonus on all attack and weapon damage rolls made against that enemy. This bonus lasts for a number of rounds equal to half her class level (minimum 2 rounds), or until the lore warden uses this ability against a different creature.</Pair>
<Pair title="At 11th Level">She also gains a +2 bonus to her AC against the creature when using this ability.</Pair>
<Pair title="At 19th Level">The insight bonus increases to +3.</Pair>
</Ability>
<Ability id="arc-fighter-lore_warden-swift-assessment-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-fighter-lore_warden-swift-assessment-ex">Swift Assessment (Ex)</Pair>
<Pair title="Prerequisites">Know Thy Enemy</Pair>
<Pair title="Ability">The lore warden can now use her <em>know thy enemy</em> swords secret as a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 15th Level">She can use this ability as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-fighter-lore_warden-maneuver-training-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-lore_warden-maneuver-training-ex">Maneuver Training (Ex)</Pair>
<Pair hl title="Replaces">Armor training, armor mastery</Pair>
<Pair title="Ability">The lore warden gains a brawler's <em>maneuver training</em> class feature, treating her fighter level as her <Link to="/class/brawler">brawler</Link> level.</Pair>
</Ability>
</>};
const _lore_warden_pfs_field_guide = {title: "Lore Warden (PFS Field Guide)", jsx: <><h2 id="arc-fighter-lore_warden_pfs_field_guide-lore-warden-pfs-field-guide">Lore Warden (PFS Field Guide)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_society_field_guide">Pathfinder Society Field Guide pg. 31</Link><br/>Quick thinking and deception can often carry the day where raw force might not. Lore wardens are the bodyguards, guardians, and soldiers of the <Link to="/rule/pathfinder_society">Pathfinder Society</Link>. Not only are they often called upon to protect and watch over important repositories of lore, but they themselves are impressive keepers of all manner of knowledge. Lore wardens are fighters who benefit from learning to outsmart and outmaneuver their foes rather than just overpower them. Even out of combat, lore wardens have a quick wit and a surprising breadth of knowledge that can often grant them significant advantages over enemies even before a battle begins. Indeed, for many lore wardens, a fight that can be won without a single weapon being drawn is the best kind of victory. A lore warden has the following class features.</p>
<Ability id="arc-fighter-lore_warden_pfs_field_guide-scholastic-ex" icon={["skills"]}>
<Pair single id="arc-fighter-lore_warden_pfs_field_guide-scholastic-ex">Scholastic (Ex)</Pair>
<Pair hl title="Replaces">Proficiency with medium armor, heavy armor, and shields</Pair>
<Pair title="Info">Lore wardens gain 2 additional skill ranks each level. These ranks must be spent on Intelligence-based skills. All Intelligence-based skills are class skills for lore wardens.</Pair>
</Ability>
<Ability id="arc-fighter-lore_warden_pfs_field_guide-expertise-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-lore_warden_pfs_field_guide-expertise-ex">Expertise (Ex)</Pair>
<Pair hl title="Replaces">Bravery 1</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A lore warden gains <Link to="/feat/combat_expertise">Combat Expertise</Link> as a bonus feat, even if he would not normally qualify for this feat.</Pair>
</Ability>
<Ability id="arc-fighter-lore_warden_pfs_field_guide-maneuver-mastery-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-fighter-lore_warden_pfs_field_guide-maneuver-mastery-ex">Maneuver Mastery (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A lore warden gains a +2 bonus on all CMB checks and to his CMD.</Pair>
<Pair title="At 7th Level">This bonus becomes +4.</Pair>
<Pair title="At 11th Level">This bonus increases to +6.</Pair>
<Pair title="At 15th Level">This bonus becomes +8.</Pair>
</Ability>
<Ability id="arc-fighter-lore_warden_pfs_field_guide-know-thy-enemy-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-lore_warden_pfs_field_guide-know-thy-enemy-ex">Know Thy Enemy (Ex)</Pair>
<Pair hl title="Replaces">Armor training 2</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Standard Action">A lore warden can study a specific target in sight. He must make a Knowledge check to determine the target's abilities and weaknesses as part of this standard action. If successful, the lore warden not only notes the appropriate abilities and weaknesses, as detailed under the Knowledge skill, but also gains a +2 competence bonus on all attack rolls and weapon damage rolls made against that enemy. This bonus lasts for the duration of an encounter, or until the lore warden attempts a new Knowledge check to use this ability on a different target.</Pair>
<Pair title="Special">Note that this bonus on attack and damage rolls applies only to that specific creature.</Pair>
</Ability>
<Ability id="arc-fighter-lore_warden_pfs_field_guide-hairs-breadth-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-lore_warden_pfs_field_guide-hairs-breadth-ex">Hair's Breadth (Ex)</Pair>
<Pair hl title="Replaces">Armor training 3</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Immediate Action">A lore warden can attempt an Acrobatics check to negate a confirmation role for a critical hit. The critical hit confirmation is negated (though the attack still hits and deals normal damage) if the Acrobatics check is greater than the opponent's confirmation roll.</Pair>
</Ability>
<Ability id="arc-fighter-lore_warden_pfs_field_guide-swift-lore-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-lore_warden_pfs_field_guide-swift-lore-ex">Swift Lore (Ex)</Pair>
<Pair hl title="Replaces">Armor training 4</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">A lore warden can use his <em>Know Thy Enemy</em> ability as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-fighter-lore_warden_pfs_field_guide-know-weakness-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-lore_warden_pfs_field_guide-know-weakness-ex">Know Weakness (Ex)</Pair>
<Pair hl title="Replaces">Armor mastery</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Ability">A lore warden can automatically confirm a critical hit once per round when he threatens a critical hit.</Pair>
</Ability>
</>};
const _martial_master = {title: "Martial Master", jsx: <><h2 id="arc-fighter-martial_master-martial-master">Martial Master</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 93</Link><br/>There are those who learn the fighting arts though countless hours of repetition and training, while others seem to pick up new stances and forms as if they were born to them.</p>
<Ability id="arc-fighter-martial_master-martial-flexibility-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-martial_master-martial-flexibility-ex">Martial Flexibility (Ex)</Pair>
<Pair hl title="Replaces">Weapon training, weapon mastery</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">3 times/day + 1 per two fighter levels<ByLevelPop levels={[[5,4],[6,5],[8,6],[10,7],[12,8],[14,9],[16,10],[18,11],[20,12]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability"><p>The martial master can use a <strong className="hl">move action</strong> to gain the benefit of a combat feat he doesn't possess. This effect lasts for 1 minute. The martial master must otherwise meet all the feat's prerequisites.</p>
<p>The martial master can use this ability again before the duration expires in order to replace the previous combat feat with another choice. If a combat feat has a daily use limitation (such as <Link to="/feat/stunning_fist">Stunning Fist</Link>), any uses of that combat feat while using this ability count toward that feat's daily limit. At later levels, when he gains multiple feats through this ability, the martial master can use those feats to meet the prerequisites of other feats he gains with this ability. Doing so means he cannot replace a feat currently fulfilling another's prerequisite without also replacing those feats that require it. Each individual feat selected counts toward his daily uses of this ability.</p>
</Pair>
<Pair title="At 9th Level">A martial master can use this ability to gain the benefit of two combat feats at the same time. He can select one feat as a <strong className="hl">swift action</strong> or two feats as a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 14th Level">A martial master can use this ability to gain the benefit of three combat feats at the same time. He can select one feat as a <strong className="hl">free action</strong>, two feats as a <strong className="hl">swift action</strong>, or three feats as a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 17th Level">A martial master can use this ability to gain the benefit of one combat feat as an <strong className="hl">immediate action</strong> or three combat feats as a <strong className="hl">swift action</strong>.</Pair>
<Pair title="At 20th Level">A martial master can use this ability to gain the benefit of any number of combat feats as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
</>};
const _mobile_fighter = {title: "Mobile Fighter", jsx: <><h2 id="arc-fighter-mobile_fighter-mobile-fighter">Mobile Fighter</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 105</Link><br/>Where some fighters focus on strength and raw power, the mobile fighter relies on swiftness and mobility, gliding across the battlefield like a steel whirlwind and leaving destruction in his wake.</p>
<Ability id="arc-fighter-mobile_fighter-agility-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-mobile_fighter-agility-ex">Agility (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A mobile fighter gains a +1 bonus on saving throws made against effects that cause him to become <Link to="/rule/paralyzed">paralyzed</Link>, <Link to="/spell/slow">slowed</Link>, or <Link to="/rule/entangled">entangled</Link>.</Pair>
<Pair title="At 6th Level">This bonus becomes +2.</Pair>
<Pair title="At 10th Level">This bonus increases to +3.</Pair>
<Pair title="At 14th Level">This bonus becomes +4.</Pair>
<Pair title="At 18th Level">This bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-mobile_fighter-leaping-attack-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-mobile_fighter-leaping-attack-ex">Leaping Attack (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1, 2, 3, and 4</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">When a mobile fighter moves at least 5 feet prior to attacking, he gains a +1 bonus on attack and damage rolls.</Pair>
<Pair title="At 9th Level">This bonus becomes +2.</Pair>
<Pair title="At 13th Level">This bonus increases to +3.</Pair>
<Pair title="At 17th Level">This bonus becomes +4.</Pair>
</Ability>
<Ability id="arc-fighter-mobile_fighter-rapid-attack-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-mobile_fighter-rapid-attack-ex">Rapid Attack (Ex)</Pair>
<Pair hl title="Replaces">Armor training 3</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A mobile fighter can combine a <Link to="/rule/full_attack">full attack</Link> action with a single move. He must forgo the attack at his highest bonus but may take the remaining attacks at any point during his movement. This movement provokes attacks of opportunity as normal.</Pair>
</Ability>
<Ability id="arc-fighter-mobile_fighter-fleet-footed-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-fighter-mobile_fighter-fleet-footed-ex">Fleet Footed (Ex)</Pair>
<Pair hl title="Replaces">Armor training 4</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">The mobile fighter's speed increases by 10 feet. He can <Link to="/rule/take_10">take 10</Link> on Acrobatics checks even while distracted or threatened, and can take 20 on an Acrobatics check three times per day.</Pair>
<Pair title="At 20th Level">He can take 20 four times a day.</Pair>
</Ability>
<Ability id="arc-fighter-mobile_fighter-whirlwind-blitz-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-mobile_fighter-whirlwind-blitz-ex">Whirlwind Blitz (Ex)</Pair>
<Pair hl title="Replaces">Weapon mastery</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Standard Action">A mobile fighter can make a full-attack action. He may also use the <Link to="/feat/whirlwind_attack">Whirlwind Attack</Link> feat as a <strong className="hl">standard action</strong>.</Pair>
</Ability>
</>};
const _molthuni_defender = {title: "Molthuni Defender", jsx: <><h2 id="arc-fighter-molthuni_defender-molthuni-defender">Molthuni Defender</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 6</Link><br/>Molthuni defenders occupy and protect contested territory in their war against Nirmathas. These heavily armored soldiers don't train for maneuverability, but rather for immovability. Taking advantage of their weighty armor, Molthuni defenders can hold back an onslaught of enemies intent on breaking through their line. The majority of Molthuni defenders were laborers who joined the military to gain citizenship, though a noteworthy minority are from stouter non-human races.</p>
<Ability id="arc-fighter-molthuni_defender-armored-defense-ex" icon={["armor-upgrade","armor-downgrade","upgrade"]}>
<Pair single id="arc-fighter-molthuni_defender-armored-defense-ex">Armored Defense (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1 through 4</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability"><p>A Molthuni defender gains a bonus to his CMD against bull rush, dirty trick, drag, grapple, overrun, reposition, and trip combat maneuver checks. This bonus also applies to the DC of foes' Acrobatics checks to move through squares he threatens. This bonus is +1 when the Molthuni defender is wearing medium armor, and +3 when he is wearing heavy armor.</p>
<p>In addition to this, the Molthuni defender is able to choose one of the following combat maneuvers: bull rush, dirty trick, drag, grapple, overrun, reposition, or trip. When he is wearing medium or heavy armor, the Molthuni defender adds <Link to="/misc/half">half</Link> his <em>armor training</em> bonus on combat maneuver checks for the selected maneuver.</p>
</Pair>
<Pair title="At 7th Level">The bonus becomes +2 in medium armor and +4 in heavy armor. He can choose an additional combat maneuver to add half his <em>armor training</em> bonus to.</Pair>
<Pair title="At 11th Level">The bonus becomes +3 in medium armor and +5 in heavy armor. He can choose a second combat maneuver to add half his <em>armor training</em> bonus to.</Pair>
<Pair title="At 15th Level">The bonus becomes +4 in medium armor and +6 in heavy armor. He can choose a third combat maneuver to add half his <em>armor training</em> bonus to.</Pair>
<Pair title="Special">This counts as <em>armor training</em> for the purposes of qualifying for feats and prestige classes. It does not count as <em>advanced armor training.</em></Pair>
</Ability>
</>};
const _mutation_warrior = {title: "Mutation Warrior", jsx: <><h2 id="arc-fighter-mutation_warrior-mutation-warrior">Mutation Warrior</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 93</Link><br/>While most fighters rely on physical fitness and rigorous training to achieve martial superiority, a few prefer to create and imbibe dangerous concoctions that mutate them into fearsome creatures.</p>
<Ability id="arc-fighter-mutation_warrior-mutagen-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-mutation_warrior-mutagen-su">Mutagen (Su)</Pair>
<Pair hl title="Replaces">Armor training 1</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A mutation warrior discovers how to create a mutagen that he can imbibe in order to heighten his physical prowess at the cost of his personality. This ability functions as the <Link to="/class/alchemist">alchemist's</Link> mutagen ability, using his fighter level as his alchemist level.</Pair>
</Ability>
<Ability id="arc-fighter-mutation_warrior-mutagen-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-fighter-mutation_warrior-mutagen-su" flavor="Text from the alchemist class">Mutagen (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Standard Action">You can drink a mutagen to heighten your physical prowess at the cost of your personality. You gain a +2 natural armor bonus, a +4 alchemical bonus to a physical stat, and a -2 penalty to a mental stat. See below for details.</Pair>
<Pair title="Usage">A mutagen lasts for 10 minutes per alchemist level.</Pair>
<Pair title="Info"><p>You learn how to create a mutagen that you can imbibe in order to heighten your physical prowess at the cost of your personality. It takes 1 hour to brew a dose of mutagen, and once brewed, it remains potent until used. You can only maintain one dose of mutagen at a time - if you brew a second dose, any existing mutagen becomes inert.</p>
<p>When you brew a mutagen, you select one physical ability score for it to boost - either Strength, Dexterity, or Constitution. If the mutagen enhances your Strength, it applies a penalty to your Intelligence. If it enhances your Dexterity, it applies a penalty to your Wisdom. If it enhances your Constitution, it applies a penalty to your Charisma.</p>
<p>A non-alchemist who drinks a mutagen must make a Fortitude save (DC 10 + 1/2 your alchemist level + your Intelligence modifier) or become <Link to="/misc/nauseated">nauseated</Link> for 1 hour - a non-alchemist can never gain the benefit of a mutagen, but you can gain the effects of another alchemist's mutagen if you drink it. (Although if the other alchemist creates a different mutagen, the effects of the "stolen" mutagen immediately cease.) The effects of a mutagen do not stack. Whenever you drink a mutagen, the effects of any previous mutagen immediately end.</p>
</Pair>
<Pair title="Special">A mutagen that is not in your possession becomes inert until you pick it up again.</Pair>
</Ability>
<Ability id="arc-fighter-mutation_warrior-mutagen-discovery-su" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-mutation_warrior-mutagen-discovery-su">Mutagen Discovery (Su)</Pair>
<Pair hl title="Replaces">Armor training 2, 3, 4, armor mastery</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Choice">The mutation warrior can choose one of the following alchemist discoveries to augment his abilities: <Link to="/discovery/feral_mutagen">feral mutagen</Link>, <Link to="/discovery/grand_mutagen">grand mutagen</Link>, <Link to="/discovery/greater_mutagen">greater mutagen</Link>, <Link to="/discovery/infuse_mutagen">infuse mutagen</Link>, <Link to="/discovery/nauseating_flesh">nauseating flesh</Link>, <Link to="/discovery/preserve_organs">preserve organs</Link>, <Link to="/discovery/rag_doll_mutagen">rag doll mutagen</Link>, <Link to="/discovery/spontaneous_healing">spontaneous healing</Link>, <Link to="/discovery/tentacle">tentacle</Link>, <Link to="/discovery/vestigial_arm">vestigial arm</Link>, <Link to="/discovery/wings">wings</Link>. The mutagen warrior uses his fighter level as his effective alchemist level for the purpose of these discoveries.</Pair>
<Pair title="At 11th Level">He can choose a second discovery from the given list.</Pair>
<Pair title="At 15th Level">He can choose a third such discovery.</Pair>
<Pair title="At 19th Level">He can choose a fourth such discovery.</Pair>
</Ability>
</>};
export default {aerial_assaulter:_aerial_assaulter,airborne_ambusher:_airborne_ambusher,aldori_defender:_aldori_defender,aquanaut:_aquanaut,archer:_archer,armiger:_armiger,armor_master:_armor_master,brawler:_brawler,cad:_cad,calistrian_hunter:_calistrian_hunter,cavern_sniper:_cavern_sniper,child_of_acavna_and_amaznen:_child_of_acavna_and_amaznen,corsair:_corsair,crossbowman:_crossbowman,cyber_soldier:_cyber_soldier,dirty_fighter:_dirty_fighter,dragonheir_scion:_dragonheir_scion,dragoon:_dragoon,drill_sergeant:_drill_sergeant,druman_blackjacket:_druman_blackjacket,eldritch_guardian:_eldritch_guardian,foehammer:_foehammer,free_hand_fighter:_free_hand_fighter,gladiator:_gladiator,gloomblade:_gloomblade,high_guardian:_high_guardian,lore_warden:_lore_warden,lore_warden_pfs_field_guide:_lore_warden_pfs_field_guide,martial_master:_martial_master,mobile_fighter:_mobile_fighter,molthuni_defender:_molthuni_defender,mutation_warrior:_mutation_warrior}