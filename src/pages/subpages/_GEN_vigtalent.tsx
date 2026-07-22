import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ByLevelPop from '../../components/ByLevelPop';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested vigilante talent.</p>
</>};
const _combat_skill = {title: "Combat Skill", addenda: ["avenger"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 14</Link></p>
<Ability id="combat-skill-ex" icon={["stairs-goal"]}>
<Pair single id="combat-skill-ex">Combat Skill (Ex)</Pair>
<Pair title="Ability">The vigilante gains any one <Link to="/main/combat_feat">combat feat</Link> as a bonus feat. He must meet the prerequisites for this feat, but he is treated as though he had a number of fighter levels equal to half his vigilante level for the purpose of qualifying for this feat.</Pair>
<Pair title="Special">This talent can be selected more than once, but each time the avenger must select a different feat.</Pair>
</Ability>
</>};
const _fist_of_the_avenger = {title: "Fist of the Avenger", addenda: ["avenger"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 14</Link></p>
<Ability id="fist-of-the-avenger-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="fist-of-the-avenger-ex">Fist of the Avenger (Ex)</Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat, if he doesn't have this feat already. In addition, whenever he successfully attacks with his fist or a gauntlet, he gains a bonus on damage rolls equal to half his vigilante level (minimum +1, maximum of +5).</Pair>
</Ability>
</>};
const _heavy_training = {title: "Heavy Training", addenda: ["avenger"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 14</Link></p>
<Ability id="heavy-training-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="heavy-training-ex">Heavy Training (Ex)</Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/heavy_armor_proficiency">Heavy Armor Proficiency</Link> as a bonus feat, if he does not have that feat already. The <Link to="/vigtalent/armor_skin">armor skin</Link> vigilante talent also applies to heavy armor.</Pair>
<Pair title="At 16th Level">If the vigilante has the <em>armor skin</em> vigilante talent, he can move at full speed in heavy armor.</Pair>
</Ability>
</>};
const _mad_rush = {title: "Mad Rush", addenda: ["avenger"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 15</Link></p>
<Ability id="mad-rush-ex" icon={["mailed-fist","broken-shield"]}>
<Pair single id="mad-rush-ex">Mad Rush (Ex)</Pair>
<Pair title="Prerequisites">12th-level avenger</Pair>
<Pair title="Ability">Whenever the vigilante <Link to="/rule/charge">charges</Link>, he can make a full attack. Whenever he uses this ability, he takes a -4 penalty to his AC until the start of his next turn (in addition to the AC penalty for charging).</Pair>
</Ability>
</>};
const _nothing_can_stop_me = {title: "Nothing Can Stop Me", addenda: ["avenger"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 15</Link></p>
<Ability id="nothing-can-stop-me-ex" icon={["mailed-fist"]}>
<Pair single id="nothing-can-stop-me-ex">Nothing Can Stop Me (Ex)</Pair>
<Pair title="Ability">Once per round, while the vigilante is moving, he can make one attack as a <strong className="hl">free action</strong> against an unattended object in the way of his path, such as a door or table. If his attack deals enough damage to destroy the object, he can continue to move. If he doesn't destroy the object, his move ends. This attack is made as part of his <strong className="hl">move action</strong> and doesn't count against his attacks this round. If his attack inadvertently targets a creature (such as a <Link to="/monster/mimic">mimic</Link>), it automatically misses and his move ends (although he can still attack the creature as normal at the end of his movement).</Pair>
</Ability>
</>};
const _signature_weapon = {title: "Signature Weapon", addenda: ["avenger"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 16</Link></p>
<Ability id="signature-weapon-ex" icon={["stairs-goal"]}>
<Pair single id="signature-weapon-ex">Signature Weapon (Ex)</Pair>
<Pair title="Ability">The vigilante must select one type of weapon (such as longsword or crossbow) when he gains this talent. He gains <Link to="/feat/weapon_focus">Weapon Focus</Link> as a bonus feat for his selected weapon type. If he already has the Weapon Focus feat with the selected weapon, he can immediately swap it for another feat for which he qualified at the level he chose Weapon Focus in the selected weapon.</Pair>
<Pair title="At 8th Level">He also gains <Link to="/feat/weapon_specialization">Weapon Specialization</Link> as a bonus feat for his selected weapon.</Pair>
<Pair title="Special">He doesn't have to meet any of the prerequisites for these feats.</Pair>
</Ability>
</>};
const _steel_soldier = {title: "Steel Soldier", addenda: ["avenger"], jsx: <><p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 7</Link></p>
<Ability id="steel-soldier-ex" icon={["stairs-goal","armor-upgrade","upgrade"]}>
<Pair single id="steel-soldier-ex" flavor={<>Some vigilantes ceaselessly tinker with their armor until the two seem inseparable; <Link to="/arc-vigilante/masked_maiden">masked maidens</Link> are particularly prone to developing this obsession.</>}>Steel Soldier (Ex)</Pair>
<Pair title="Ability">The vigilante can spend 1 day and 100 gp per class level modifying a set of armor with which he is proficient. The vigilante can conceal one set of unworn modified armor on his person as though it were an extraordinarily small object, as per <Link to="/skill/sleight_of_hand">Sleight of Hand</Link>, and can <Link to="/rule/don_armor">don modified armor</Link> without aid.</Pair>
<Pair title="At 8th Level">The vigilante treats modified armor's enhancement bonus (if any) as a weapon enhancement bonus when making attacks with the armor's gauntlets, if the armor has any.</Pair>
<Pair title="Special">The <Link to="/vigtalent/armor_skin">armor skin</Link> talent also applies to armor with this ability.</Pair>
</Ability>
</>};
const _sucker_punch = {title: "Sucker Punch", addenda: ["avenger"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 16</Link></p>
<Ability id="sucker-punch-ex" icon={["upgrade"]}>
<Pair single id="sucker-punch-ex">Sucker Punch (Ex)</Pair>
<Pair title="Ability">Whenever the vigilante attacks a foe that is unaware of his presence (or who views him as an ally), and the attack deals nonlethal damage, the attack deals an additional 1d6 points of nonlethal damage.</Pair>
<Pair title="At 6th Level">This additional damage becomes 2d6.</Pair>
<Pair title="At 12th Level">This additional damage increases to 3d6.</Pair>
<Pair title="At 18th Level">This additional damage becomes 4d6.</Pair>
</Ability>
</>};
const _sweeping_strike = {title: "Sweeping Strike", addenda: ["avenger"], jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook pg. 16</Link></p>
<Ability id="sweeping-strike-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="sweeping-strike-ex">Sweeping Strike (Ex)</Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/cleave">Cleave</Link> as a bonus feat.</Pair>
<Pair title="At 6th Level">He gains <Link to="/feat/great_cleave">Great Cleave</Link> as a bonus feat.</Pair>
<Pair title="At 12th Level">While using Great Cleave, he no longer has to hit a target in order to make an additional attack against a foe that is adjacent to that target.</Pair>
<Pair title="Special">He does not need to meet the prerequisites for these bonus feats.</Pair>
</Ability>
</>};
const _unkillable = {title: "Unkillable", addenda: ["avenger"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 16</Link></p>
<Ability id="unkillable-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="unkillable-ex">Unkillable (Ex)</Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/diehard">Diehard</Link> as a bonus feat, though he does not have to meet the prerequisites for this feat.</Pair>
<Pair title="At 6th Level">He doesn't lose hit points when he takes a standard action while <Link to="/misc/disabled">disabled</Link>.</Pair>
<Pair title="At 12th Level">When he would die from hit point damage, he remains alive for 1 round before dying (and if his hit points rise above a negative amount equal to his Constitution score before that round is over, he doesn't die).</Pair>
<Pair title="At 18th Level">He is no longer disabled at negative hit points and can take a full round's worth of actions.</Pair>
</Ability>
</>};
const _weapon_familiarity = {title: "Weapon Familiarity", addenda: ["avenger"], jsx: <><p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 23</Link></p>
<Ability id="weapon-familiarity-ex" icon={["stairs-goal"]}>
<Pair single id="weapon-familiarity-ex">Weapon Familiarity (Ex)</Pair>
<Pair title="Ability">The vigilante selects either two simple or martial weapons or one exotic weapon when he gains this talent. He gains proficiency with his chosen weapon or weapons.</Pair>
<Pair title="At 8th Level">He also gains <Link to="/feat/weapon_focus">Weapon Focus</Link> as a bonus feat for his selected weapon or weapons.</Pair>
</Ability>
</>};
const _blind_spot = {title: "Blind Spot", addenda: ["stalker"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 13</Link></p>
<Ability id="blind-spot-ex" icon={["upgrade"]}>
<Pair single id="blind-spot-ex">Blind Spot (Ex)</Pair>
<Pair title="Prerequisites">6th-level stalker</Pair>
<Pair title="Ability">The vigilante is so skilled at stealth, he can use the Stealth skill to hide from creatures with unusual senses that normally automatically detect creatures. This includes senses such as <Link to="/umr/blindsense">blindsense</Link>, <Link to="/umr/blindsight">blindsight</Link>, <Link to="/umr/lifesense">lifesense</Link>, <Link to="/umr/scent">scent</Link>, or <Link to="/umr/tremorsense">tremorsense</Link>. For each such ability that the creature possesses, if the vigilante is not bypassing the sense in another way - such as the <Link to="/spell/negate_aroma">negate aroma</Link> spell for scent or flying for tremorsense - the creature gains a stacking +20 circumstance bonus on all Perception checks to notice the vigilante, rather than automatically noticing the vigilante.</Pair>
</Ability>
</>};
const _evasive = {title: "Evasive", addenda: ["stalker"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 14</Link></p>
<Ability id="evasive-ex" icon={["armor-upgrade"]}>
<Pair single id="evasive-ex">Evasive (Ex)</Pair>
<Pair title="Ability">The vigilante is hard to catch with area attacks. He gains the <Link to="/ability/evasion">evasion</Link> ability.</Pair>
<Pair title="At 12th Level">He gains the <Link to="/talent/improved_evasion">improved evasion</Link> ability</Pair>
</Ability>
</>};
const _hide_in_plain_sight = {title: "Hide in Plain Sight", addenda: ["stalker"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 14</Link></p>
<Ability id="hide-in-plain-sight-ex" icon={["stairs-goal"]}>
<Pair single id="hide-in-plain-sight-ex">Hide in Plain Sight (Ex)</Pair>
<Pair title="Prerequisites">8th-level stalker</Pair>
<Pair title="Ability">The vigilante can use Stealth to hide even when being observed. As long as he is within 10 feet of <Link to="/rule/dim_light">dim light</Link> (his own shadow doesn't count), he can hide without anything to actually hide behind.</Pair>
</Ability>
</>};
const _rogue_talent = {title: "Rogue Talent", addenda: ["stalker"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 15</Link></p>
<Ability id="rogue-talent-ex" icon={["stairs-goal"]}>
<Pair single id="rogue-talent-ex">Rogue Talent (Ex)</Pair>
<Pair title="Ability">The vigilante gains a single <Link to="/ability/rogue_talent">rogue talent</Link> (not an advanced talent) of his choice. If he selects a rogue talent that modifies sneak attack, that talent applies to his <em>hidden strikes</em> instead of to sneak attacks, and if it has the limitation of only-one-talent-per-attack (a Primary Sneak Attack Talent), it is treated the same as a Hidden Strike Talent (A stalker vigilante can apply only one Hidden Strike Talent to a given <em>hidden strike,</em> and only when that <em>hidden strike</em> is dealt against a foe that is unaware of the stalker vigilante's presence [or who considers him an ally], unless otherwise noted).</Pair>
</Ability>
</>};
const _sniper = {title: "Sniper", addenda: ["stalker"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 16</Link></p>
<Ability id="sniper-ex" icon={["upgrade"]}>
<Pair single id="sniper-ex">Sniper (Ex)</Pair>
<Pair title="Prerequisites">6th-level stalker</Pair>
<Pair title="Ability">The vigilante can deal <em>hidden strike</em> damage with ranged attacks at any distance, rather than within 30 feet.</Pair>
</Ability>
</>};
const _stalker_sense = {title: "Stalker Sense", addenda: ["stalker"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 16</Link></p>
<Ability id="stalker-sense-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="stalker-sense-ex">Stalker Sense (Ex)</Pair>
<Pair title="Ability">The vigilante has a sense for danger. He always acts on the surprise round.</Pair>
<Pair title="At 6th Level">He gains <Link to="/ability/uncanny_dodge">uncanny dodge</Link>.</Pair>
<Pair title="At 12th Level">He gains <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link>.</Pair>
</Ability>
</>};
const _twisting_fear = {title: "Twisting Fear", addenda: ["stalker"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 16</Link></p>
<Ability id="twisting-fear-ex" icon={["armor-downgrade"]}>
<Pair single id="twisting-fear-ex">Twisting Fear (Ex)</Pair>
<Pair title="Ability">Whenever the vigilante causes an opponent to gain the <Link to="/misc/shaken">shaken</Link>, <Link to="/misc/frightened">frightened</Link>, or <Link to="/misc/panicked">panicked</Link> condition, that opponent takes an amount of nonlethal damage equal to the vigilante's reduced <em>hidden strike</em> damage, as the stress wears upon its body.</Pair>
<Pair title="Special">A creature can't take damage from <em>twisting fear</em> more than once per round. Panicked creatures that take damage from <em>twisting fear</em> are too winded even to scream as they flee in terror.</Pair>
</Ability>
</>};
const _up_close_and_personal = {title: "Up Close and Personal", addenda: ["stalker"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 17</Link></p>
<Ability id="up-close-and-personal-ex" icon={["mailed-fist"]}>
<Pair single id="up-close-and-personal-ex">Up Close and Personal (Ex)</Pair>
<Pair title="Prerequisites">4th-level stalker</Pair>
<Pair title="Swift Action">When the vigilante attempts an <Link to="/skill/acrobatics">Acrobatics</Link> check to move through an opponent's space during a move action, he can attempt a single melee attack against that opponent. If the Acrobatics check succeeds, this attack applies the vigilante's <em>hidden strike</em> damage as if the foe were unaware of the vigilante. Otherwise, the vigilante applies the <em>hidden strike</em> damage he would deal if the target were denied its Dexterity bonus to AC.</Pair>
</Ability>
</>};
const _foe_collision = {title: "Foe Collision", addenda: ["hiddenstrike"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 14</Link></p>
<Ability id="foe-collision-ex" icon={["mailed-fist"]}>
<Pair single id="foe-collision-ex" flavor="The vigilante can shove one of his foes into another.">Foe Collision (Ex)</Pair>
<Pair title="Ability">When the vigilante deals <em>hidden strike</em> damage to a corporeal foe with a melee attack, he can also deal an amount of nonlethal damage equal to his reduced <em>hidden strike</em> damage to an opponent adjacent to the first (even if the second opponent is out of his reach). The damage is bludgeoning damage, and if the colliding foe has any natural attacks, the damage is also considered magic, evil, or any other type of damage the natural attack deals.</Pair>
<Pair title="Special">Unlike normal vigilante talents that affect <em>hidden strikes,</em> this vigilante talent applies in all cases when the target is denied its Dexterity bonus to AC.</Pair>
</Ability>
</>};
const _leave_an_opening = {title: "Leave an Opening", addenda: ["hiddenstrike"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 14</Link></p>
<Ability id="leave-an-opening-ex" icon={["armor-downgrade"]}>
<Pair single id="leave-an-opening-ex" flavor={<>The vigilante's <em>hidden strike</em> leaves an unbalancing opening in a foe's defenses, setting up the foe to be attacked again.</>}>Leave an Opening (Ex)</Pair>
<Pair title="Ability">At the beginning of the foe's next turn, if the vigilante threatens the foe, the foe provokes an attack of opportunity from the vigilante. Multiple attacks against the same foe don't create multiple attacks of opportunity in the same round (but attacks against several foes can cause each to provoke one attack of opportunity).</Pair>
</Ability>
</>};
const _mighty_ambush = {title: "Mighty Ambush", addenda: ["hiddenstrike"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 15</Link></p>
<Ability id="mighty-ambush-ex" icon={["armor-downgrade"]}>
<Pair single id="mighty-ambush-ex">Mighty Ambush (Ex)</Pair>
<Pair title="Prerequisites">10th-level stalker</Pair>
<Pair title="Ability">Once per round, when the vigilante succeeds at a <em>hidden strike,</em> he can instantly drop the damaged enemy <Link to="/misc/unconscious">unconscious</Link> for 1d4 rounds. A successful Fortitude saving throw negates this effect (DC = 10 + 1/2 the vigilante's class level + the higher of the vigilante's Strength and Dexterity modifiers).</Pair>
<Pair title="Special">Whether or not a creature's saving throw is successful, it can't be affected by that vigilante's <em>mighty ambush</em> again for 24 hours.</Pair>
</Ability>
</>};
const _throat_jab = {title: "Throat Jab", addenda: ["hiddenstrike"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 16</Link></p>
<Ability id="throat-jab-ex" icon={["armor-downgrade"]}>
<Pair single id="throat-jab-ex">Throat Jab (Ex)</Pair>
<Pair title="Prerequisites">4th-level stalker</Pair>
<Pair title="Ability">The vigilante's <em>hidden strike</em> jabs his opponent in the throat, preventing that opponent from speaking until the vigilante's next turn. (If the vigilante uses this ability on the surprise round, it lasts until the end of his first full turn after the surprise round.) This prevents the target from calling out for help, using spells with verbal components, or doing anything else that requires speaking.</Pair>
<Pair title="Special">The target cannot be affected by that vigilante's throat jab again for 24 hours.</Pair>
</Ability>
</>};
const _animal_patron = {title: "Animal Patron", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 20</Link></p>
<Ability id="animal-patron-ex" icon={["stairs-goal"]}>
<Pair single id="animal-patron-ex">Animal Patron (Ex)</Pair>
<Pair title="Prerequisites">5th-level vigilante</Pair>
<Pair title="Ability">The vigilante gains the benefits of one <Link to="/class/shifter">minor shifter aspect</Link> for a number of minutes per day equal to 1 + half his vigilante level. He can shift into this minor aspect as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
</>};
const _another_day = {title: "Another Day", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 13</Link></p>
<Ability id="another-day-ex-su" icon={["armor-upgrade"]}>
<Pair single id="another-day-ex-su">Another Day (Ex, Su)</Pair>
<Pair title="Ability">When the vigilante is dropped unconscious due to hit point damage, he automatically <Link to="/misc/stabilize">stabilizes</Link>, but he can also appear to be dead, unless an examining creature succeeds at a Heal check (DC = 20 + the vigilante's class level) or, if using magic such as <Link to="/spell/deathwatch">deathwatch</Link>, a caster level check with the same DC (the ability to affect spells is supernatural; the rest of the ability is extraordinary).</Pair>
<Pair title="Special">The vigilante counts as having received aid and automatically succeeds at the Constitution check to become conscious after 1 hour (unless he has actually died in the meantime).</Pair>
</Ability>
</>};
const _aquatic_action = {title: "Aquatic Action", jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 20</Link></p>
<Ability id="aquatic-action-ex" icon={["stairs-goal"]}>
<Pair single id="aquatic-action-ex">Aquatic Action (Ex)</Pair>
<Pair title="Prerequisites">8th-level vigilante</Pair>
<Pair title="Ability">The vigilante uses weapons, natural weapons, and unarmed strikes in aquatic environments as though under the effect of <Link to="/spell/freedom_of_movement">freedom of movement</Link>, including when making melee attacks against targets in the water while the vigilante is on land. The vigilante ignores limitations and penalties on ranged attacks, including thrown weapons, imposed by being underwater for the first 15 feet. (See <Link to="/rule/underwater_combat">Underwater Combat</Link> for more information.)</Pair>
</Ability>
</>};
const _armor_skin = {title: "Armor Skin", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 13</Link></p>
<Ability id="armor-skin-ex" icon={["upgrade"]}>
<Pair single id="armor-skin-ex">Armor Skin (Ex)</Pair>
<Pair title="Ability">The vigilante's armor is like a second skin. He doesn't apply the armor check penalty for light and medium armor on Acrobatics, Escape Artist, or Stealth checks. This penalty applies on other skill checks as normal.</Pair>
<Pair title="At 8th Level">He can move at full speed in medium armor.</Pair>
</Ability>
</>};
const _brutal_maneuver = {title: "Brutal Maneuver", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 15</Link></p>
<Ability id="brutal-maneuver" icon={["mailed-fist"]}>
<Pair single id="brutal-maneuver">Brutal Maneuver</Pair>
<Pair title="Ability">The first time each round that the vigilante uses a weapon, including a natural attack or unarmed strike, to perform a combat maneuver in place of making an attack (such as by performing a <Link to="/rule/disarm">disarm</Link>, <Link to="/rule/sunder">sunder</Link>, or <Link to="/rule/trip">trip</Link> combat maneuver in place of making a melee attack), he can choose to take a -5 penalty on all his attack rolls during the round. If he does so and succeeds at his combat maneuver check, the vigilante deals damage to the target of his combat maneuver as if he had hit that target with a normal hit from his weapon.</Pair>
</Ability>
</>};
const _chase_master = {title: "Chase Master", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 14</Link></p>
<Ability id="chase-master-ex" icon={["upgrade"]}>
<Pair single id="chase-master-ex" flavor="Whether he is the pursuer or the pursued, few can best a vigilante at a chase.">Chase Master (Ex)</Pair>
<Pair title="Passive Ability">He receives a bonus on all checks during <Link to="/rule/chases">a chase</Link> equal to <Link to="/misc/half">half</Link> his vigilante level or +4, whichever is greater.</Pair>
</Ability>
</>};
const _close_the_gap = {title: "Close the Gap", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 14</Link></p>
<Ability id="close-the-gap-ex" icon={["armor-upgrade"]}>
<Pair single id="close-the-gap-ex">Close the Gap (Ex)</Pair>
<Pair title="Ability">Each round, at the start of his turn, the vigilante can designate one foe within 20 feet that isn't adjacent to him. When he moves, he doesn't provoke attacks of opportunity from that foe as long as he ends his move adjacent to that foe. If he <Link to="/rule/charge">charges</Link> that foe, he does not take the -2 penalty to his AC on any attacks made by the designated foe.</Pair>
</Ability>
</>};
const _combat_expertise = {title: "Combat Expertise", jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook pg. 16</Link></p>
<Ability id="combat-expertise-ex" icon={["stairs-goal"]}>
<Pair single id="combat-expertise-ex">Combat Expertise (Ex)</Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/combat_expertise">Combat Expertise</Link> as a bonus feat, even if he doesn't meet the prerequisites. If he already has Combat Expertise, he instead gains another feat he qualified for at the level when he chose Combat Expertise.</Pair>
<Pair title="Passive Ability">If the vigilante's Intelligence score is less than 13, it counts as 13 for the purpose of meeting the prerequisites of combat feats.</Pair>
</Ability>
</>};
const _concealed_strike = {title: "Concealed Strike", jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 27</Link></p>
<Ability id="concealed-strike-ex" icon={["stairs-goal"]}>
<Pair single id="concealed-strike-ex">Concealed Strike (Ex)</Pair>
<Pair title="Prerequisites">6th-level vigilante</Pair>
<Pair title="Ability">Whenever the vigilante attacks an opponent with a concealed weapon that his target wasn't aware of, he can attempt a Bluff check to <Link to="/rule/feint">feint</Link> that opponent as a <strong className="hl">move action</strong>. If he has the <Link to="/feat/improved_feint">Improved Feint</Link> feat, he attempts this check as a <strong className="hl">free action</strong> instead.</Pair>
</Ability>
</>};
const _cunning_feint = {title: "Cunning Feint", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 14</Link></p>
<Ability id="cunning-feint-ex" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="cunning-feint-ex">Cunning Feint (Ex)</Pair>
<Pair title="Ability">The vigilante can <Link to="/rule/feint">feint</Link> as a <strong className="hl">move action</strong> or in place of his first attack during a full attack.</Pair>
<Pair title="At 8th Level">When the vigilante successfully feints, the opponent is denied its Dexterity bonus to AC against all attacks until the vigilante's next turn.</Pair>
</Ability>
</>};
const _deceitful_trick = {title: "Deceitful Trick", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 15</Link></p>
<Ability id="deceitful-trick" icon={["mailed-fist"]}>
<Pair single id="deceitful-trick">Deceitful Trick</Pair>
<Pair title="Prerequisites"><Link to="/feat/greater_dirty_trick">Greater Dirty Trick</Link>, <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link></Pair>
<Pair title="Ability">The vigilante can perform a <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver in place of his first attack during a full attack. He can take a -4 penalty on his check in order to inflict two different conditions on his foe if he succeeds at his check. If the vigilante is successful, the target can remove both conditions as a <strong className="hl">standard action</strong>.</Pair>
</Ability>
</>};
const _environmental_weapon = {title: "Environmental Weapon", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 14</Link></p>
<Ability id="environmental-weapon-ex" icon={["stairs-goal"]}>
<Pair single id="environmental-weapon-ex">Environmental Weapon (Ex)</Pair>
<Pair title="Choice">When the vigilante gains this talent, he must select one type of terrain from the ranger's list of <Link to="/ability/favored_terrain">favored terrains</Link>.</Pair>
<Pair title="Swift Action"><p>While in the chosen terrain, the vigilante can find an <Link to="/misc/improvised_weapons">improvised weapon</Link> if there are any loose or moveable objects around (subject to the GM's discretion). He doesn't take a penalty for using these improvised weapons.</p>
<p>For example, if the vigilante selected the urban environment, he might attack a foe with a chair, an empty bottle, or even a door.</p>
</Pair>
<Pair title="At 5th Level">The vigilante can select an additional type of terrain.</Pair>
<Pair title="At 10th Level">The vigilante can select an additional type of terrain.</Pair>
<Pair title="At 15th Level">The vigilante can select an additional type of terrain.</Pair>
<Pair title="At 20th Level">The vigilante can select an additional type of terrain.</Pair>
</Ability>
</>};
const _one_with_the_wild = {title: "One with the Wild", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 20</Link></p>
<Ability id="one-with-the-wild-ex" icon={["upgrade"]}>
<Pair single id="one-with-the-wild-ex">One with the Wild (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/vigtalent/environmental_weapon">Environmental weapon</Link></Pair>
<Pair title="Passive Ability">In the same terrain for which he selected <em>environmental weapon,</em> he gains a +4 competence bonus on Stealth, Survival, and Perception checks.</Pair>
</Ability>
</>};
const _swamp_concoctions = {title: "Swamp Concoctions", jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 21</Link></p>
<Ability id="swamp-concoctions-ex" icon={["stairs-goal"]}>
<Pair single id="swamp-concoctions-ex">Swamp Concoctions (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/vigtalent/environmental_weapon">Environmental weapon</Link> (jungle, swamp, or water)</Pair>
<Pair title="Full-Round Action"><p>Twice per day, the vigilante can use the <em>environmental weapon</em> vigilante talent to improvise an alchemical weapon worth no more than 15 gp per vigilante level. This improvised weapon cannot be sold and must be used within 3 rounds before it becomes inert.</p>
<p>The vigilante gains the benefits of the <Link to="/feat/throw_anything">Throw Anything</Link> feat for the purpose of these improvised weapons. This ability cannot create improvised weapons that incorporate special materials unless those materials are also present.</p>
</Pair>
</Ability>
</>};
const _expose_weaknesses = {title: "Expose Weaknesses", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 14</Link></p>
<Ability id="expose-weaknesses-ex" icon={["mailed-fist"]}>
<Pair single id="expose-weaknesses-ex">Expose Weaknesses (Ex)</Pair>
<Pair title="Ability">The vigilante is able to use sneaky tricks to make it easier to damage a foe, whether it is throwing a bit of fine dust of cold iron over a fey creature or melting a glob of silver onto a lycanthrope's hide. The vigilante can add the ability to reduce a creature's damage reduction or hardness by 10 to the list of options when attempting a <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver check. This does not stack with itself, and it does not work against creatures with DR/&mdash;.</Pair>
</Ability>
</>};
const _fantastic_stride = {title: "Fantastic Stride", jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 27</Link></p>
<Ability id="fantastic-stride-ex" icon={["stairs-goal"]}>
<Pair single id="fantastic-stride-ex">Fantastic Stride (Ex)</Pair>
<Pair title="Prerequisites">6th-level vigilante</Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/spring_attack">Spring Attack</Link> as a bonus feat, ignoring its prerequisites.</Pair>
<Pair title="At 10th Level">The vigilante can designate one additional creature when he uses Spring Attack; the vigilante's movement this round does not provoke attacks of opportunity from any of the designated secondary creatures.</Pair>
<Pair title="At 14th Level">The vigilante can designate one additional creature when he uses Spring Attack; the vigilante's movement this round does not provoke attacks of opportunity from any of the designated secondary creatures.</Pair>
<Pair title="At 18th Level">The vigilante can designate one additional creature when he uses Spring Attack; the vigilante's movement this round does not provoke attacks of opportunity from any of the designated secondary creatures.</Pair>
</Ability>
</>};
const _favored_maneuver = {title: "Favored Maneuver", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 14</Link></p>
<Ability id="favored-maneuver-ex" icon={["stairs-goal"]}>
<Pair single id="favored-maneuver-ex">Favored Maneuver (Ex)</Pair>
<Pair title="Ability">The vigilante selects one type of <Link to="/rule/combat_maneuver">combat maneuver</Link> to be a <em>favored maneuver.</em> He gains the Improved feat corresponding to that combat maneuver (if one exists). He gains a +2 circumstance bonus on combat maneuver checks with that combat maneuver against a foe that is unaware of the vigilante's presence at the start of his combat maneuver.</Pair>
<Pair title="Special">A vigilante can select this talent more than once. Each time, it applies to a different combat maneuver.</Pair>
</Ability>
</>};
const _gator_wrangle = {title: "Gator Wrangle", jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 20</Link></p>
<Ability id="gator-wrangle-ex" icon={["armor-upgrade","upgrade"]}>
<Pair single id="gator-wrangle-ex">Gator Wrangle (Ex)</Pair>
<Pair title="Ability">The vigilante gains a +8 bonus to his CMD against grapple combat maneuvers when using the <Link to="/umr/grab">grab</Link> ability, and he halves all damage from <Link to="/umr/constrict">constrict</Link> attacks.</Pair>
<Pair title="Passive Ability">When attacking a creature that is grappling him, an avenger vigilante deals an additional amount of damage equal to half his vigilante level.</Pair>
</Ability>
</>};
const _inspired_vigilante = {title: "Inspired Vigilante", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 14</Link></p>
<Ability id="inspired-vigilante-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="inspired-vigilante-ex" flavor="The vigilante's powers of deduction are far beyond the norm.">Inspired Vigilante (Ex)</Pair>
<Pair title="Ability">This ability functions similarly to the <Link to="/class/investigator">investigator's</Link> <em>inspiration</em> ability, but the vigilante's <em>inspiration pool</em> is equal to his class level (do not add his Intelligence modifier), the vigilante can never use this ability without expending a use of <em>inspiration,</em> and it doesn't count as <em>inspiration</em> for any effects that interact with or require the <em>inspiration</em> class feature.</Pair>
</Ability>
<Ability id="inspiration-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="inspiration-ex" flavor="Relevant text from the investigator class ability.">Inspiration (Ex)</Pair>
<Pair title="Ability">You have an inspiration pool equal to <Link to="/misc/half">half</Link> your level. Your inspiration pool refreshes each day, typically after you get a restful night's sleep.</Pair>
<Pair title="Free Action">You can expend one use of inspiration from your pool to add 1d6 to the result of a check, including any on which you take 10 or 20. This choice is made after the check is rolled and before the results are revealed.</Pair>
<Pair title="Usage">You can only use inspiration once per check or roll.</Pair>
<Pair title="Special">Using inspiration on attack rolls and saving throws costs two uses of inspiration each time. In the case of saving throws, using inspiration is an <strong className="hl">immediate action</strong>.</Pair>
</Ability>
</>};
const _instant_plan = {title: "Instant Plan", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 33</Link></p>
<Ability id="instant-plan-ex" icon={["armor-upgrade","shield-reflect","upgrade"]}>
<Pair single id="instant-plan-ex" flavor="The vigilante can quickly manage a situation that seems to be spiraling out of control.">Instant Plan (Ex)</Pair>
<Pair title="Ability">Once per day, the vigilante can state a plan of action. All allies within 30 feet that can hear him gain a +2 morale bonus on saving throws against fear effects and are immune to being demoralized. They also gain a +1 morale bonus on skill checks or combat maneuver checks of the vigilante's choice. The benefits last for 1 round per vigilante level.</Pair>
</Ability>
</>};
const _leap_and_bound = {title: "Leap and Bound", jsx: <><p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 7</Link></p>
<Ability id="leap-and-bound-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="leap-and-bound-ex">Leap and Bound (Ex)</Pair>
<Pair title="Prerequisites">10th-level vigilante</Pair>
<Pair title="Ability"><p>A vigilante with this talent adds his Strength bonus on <Link to="/skill/acrobatics">Acrobatics</Link> checks in addition to his Dexterity modifier. He is always treated as having a running start when jumping, and his high jumps are treated as long jumps when determining the DC.</p>
<p>When the vigilante jumps, he does not fall until the end of his turn, allowing him to attack or perform other actions in midair.</p>
<p>If the vigilante grapples a creature capable of bearing his weight, he does not fall, instead remaining adjacent to the creature as it moves.</p>
</Pair>
</Ability>
</>};
const _lethal_grace = {title: "Lethal Grace", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 15</Link></p>
<Ability id="lethal-grace-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="lethal-grace-ex">Lethal Grace (Ex)</Pair>
<Pair title="Ability">The vigilante combines strength and speed into incredibly deadly attacks. He gains <Link to="/feat/weapon_finesse">Weapon Finesse</Link> as a bonus feat, and if he already has the Weapon Finesse feat, he can immediately swap it for another feat for which he qualified at the level he chose Weapon Finesse.</Pair>
<Pair title="Passive Ability">When using Weapon Finesse to make a melee attack using his Dexterity bonus on attack rolls and his Strength bonus on damage rolls, he also adds half his vigilante level on damage rolls. This bonus damage is not reduced or increased if the vigilante is wielding a weapon two-handed or in an off-hand.</Pair>
</Ability>
</>};
const _living_shield = {title: "Living Shield", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 15</Link></p>
<Ability id="living-shield-ex" icon={["armor-upgrade"]}>
<Pair single id="living-shield-ex">Living Shield (Ex)</Pair>
<Pair title="Immediate Action">Whenever the vigilante is grappling a creature and is targeted by an attack, he can attempt a combat maneuver check against the target of his <Link to="/rule/grapple">grapple</Link> (this combat maneuver check doesn't count as a grapple combat maneuver check). If he succeeds, the creature he is grappling becomes the new target of the attack. If the check fails, the creature escapes the grapple and the vigilante is the target of the attack as normal.</Pair>
<Pair title="Special">This ability must be used after the attack is declared against the vigilante, but before the attack is made and the results revealed.</Pair>
</Ability>
</>};
const _magical_familiarity = {title: "Magical Familiarity", jsx: <><p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 23</Link></p>
<Ability id="magical-familiarity-sp" icon={["magic-swirl"]}>
<Pair single id="magical-familiarity-sp" flavor="The vigilante taps into a past life's arcane secrets.">Magical Familiarity (Sp)</Pair>
<Pair title="Prerequisites">Intelligence 10+</Pair>
<Pair title="Ability">He selects a 0-level spell from the <Link to="/main/spells_sorcerer">sorcerer</Link>/<Link to="/main/spells_wizard">wizard</Link> spell list. The vigilante can cast the chosen spell three times per day as a spell-like ability, using his vigilante level as his caster level.</Pair>
<Pair title="At 6th Level">He chooses a second 0-level spell that he can also use three times per day as a spell-like ability.</Pair>
<Pair title="At 12th Level">In addition to these 0-level spells, he chooses a 1st-level spell that he can cast once per day as a spell-like ability.</Pair>
<Pair title="At 18th Level">He can cast his 1st-level spell three times per day and his 0-level spells at will.</Pair>
</Ability>
</>};
const _malleable_flesh = {title: "Malleable Flesh", jsx: <><p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 7</Link></p>
<Ability id="malleable-flesh-su" icon={["stairs-goal","magic-swirl","broken-shield"]}>
<Pair single id="malleable-flesh-su" flavor="Whether through mutation or alchemy, some vigilantes have flesh that is as moldable as clay and as fluid as ink.">Malleable Flesh (Su)</Pair>
<Pair title="Ability">A vigilante with this talent gains the <Link to="/subtype/shapechanger">shapechanger</Link> subtype and the <Link to="/umr/compression">compression</Link> universal monster rule. In addition, the vigilante can alter his appearance as <Link to="/spell/disguise_self">disguise self</Link>, except that the changes are physical rather than illusory. However, aspects of the vigilante's aesthetic persist in all forms, halving the bonus on Disguise checks gained from this effect and from <em>seamless guise.</em></Pair>
<Pair title="At 12th Level">The vigilante can pass through narrow openings, even mere cracks, along with any item he wears or carries (to a maximum of his light load).</Pair>
</Ability>
</>};
const _minor_magic = {title: "Minor Magic", jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 27</Link></p>
<Ability id="minor-magic-sp" icon={["magic-swirl"]}>
<Pair single id="minor-magic-sp">Minor Magic (Sp)</Pair>
<Pair title="Choice">A vigilante with this talent selects one of the following spells lists: <Link to="/main/spells_bard">bard</Link>, <Link to="/main/spells_cleric">cleric</Link>, <Link to="/main/spells_druid">druid</Link>, <Link to="/main/spells_psychic">psychic</Link>, <Link to="/main/spells_shaman">shaman</Link>, <Link to="/main/spells_wizard">sorcerer/wizard spell list</Link>, or <Link to="/main/spells_witch">witch</Link>. Once this decision is made, the selection cannot be changed.</Pair>
<Pair title="Ability">The vigilante gains the ability to cast a 0-level spell from the selected spell list. This spell can be cast two times per day as a spell-like ability. The caster level for this ability is equal to the vigilante's level. The save DC for this spell is equal to 10 + the vigilante's Intelligence modifier (for psychic, sorcerer/wizard, and witch spells), Wisdom (for cleric, druid, and shaman spells), or Charisma (for bard spells).</Pair>
</Ability>
</>};
const _major_magic = {title: "Major Magic", jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 27</Link></p>
<Ability id="major-magic-sp" icon={["magic-swirl"]}>
<Pair single id="major-magic-sp">Major Magic (Sp)</Pair>
<Pair title="Prerequisites">4th-level vigilante, <Link to="/vigtalent/minor_magic">minor magic</Link>, a score of at least 11 in the appropriate ability</Pair>
<Pair title="Ability">A vigilante with this talent gains the ability to cast a 1st-level spell drawn from the same spell list as the <em>minor magic</em> talent. The vigilante can cast this spell as a spell-like ability a number of times a day equal to <Link to="/misc/one_fourth">one-fourth</Link> of his vigilante level. The caster level for this ability is equal to the vigilante's level. The save DC for this spell is equal to 10 + the vigilante's Intelligence modifier (for psychic, sorcerer/wizard, and witch spells), Wisdom (for cleric, druid, and shaman spells), or Charisma (for bard spells).</Pair>
</Ability>
</>};
const _mockery = {title: "Mockery", jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 27</Link></p>
<Ability id="mockery-ex" icon={["upgrade"]}>
<Pair single id="mockery-ex">Mockery (Ex)</Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/antagonize">Antagonize</Link> as a bonus feat. He can target a creature with the Intimidate version of Antagonize twice each day, rather than just once.</Pair>
<Pair title="At 12th Level">The effects of the Intimidate version of Antagonize last a number of rounds equal to the vigilante's Charisma modifier (minimum 1).</Pair>
</Ability>
</>};
const _morphic_weaponry = {title: "Morphic Weaponry", jsx: <><p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 7</Link></p>
<Ability id="morphic-weaponry-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="morphic-weaponry-ex">Morphic Weaponry (Ex)</Pair>
<Pair title="Prerequisites">The <Link to="/subtype/shapechanger">shapechanger</Link> subtype</Pair>
<Pair title="Ability">The vigilante can shape his body into weaponry. This acts as the <Link to="/arc-shifter/oozemorph">oozemorph</Link> shifter's <em>morphic weaponry</em> ability, treating the vigilante's level as his shifter level.</Pair>
</Ability>
<Ability id="morphic-weaponry-ex" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="morphic-weaponry-ex" flavor="Text from the oozemorph ability.">Morphic Weaponry (Ex)</Pair>
<Pair title="Move-Equivalent Action">An oozemorph can form two primary natural attacks that each deal 1d6 points of bludgeoning, piercing, or slashing damage, chosen by the oozemorph when she forms them.</Pair>
<Pair title="Swift Action">An oozemorph can change the damage type of any number of her natural weapons.</Pair>
<Pair title="At 6th Level">An oozemorph gains an additional primary natural attack.</Pair>
<Pair title="At 15th Level">An oozemorph gains an additional primary natural attack.</Pair>
<Pair title="Special">The total number of natural attacks an oozemorph has at any given time includes those gained via her current form. For example, an 8th-level oozemorph who has taken the form of a wolf with <em>beast shape I</em> has a bite attack as part of that form; she can create only two additional natural attacks via <em>morphic weaponry,</em> for a total of three attacks available to her at that level. If the oozemorph later reverts to a humanoid form with no natural weapons, she can instead create three <em>morphic weapons.</em></Pair>
</Ability>
</>};
const _perfect_fall = {title: "Perfect Fall", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 15</Link></p>
<Ability id="perfect-fall-ex" icon={["armor-upgrade"]}>
<Pair single id="perfect-fall-ex">Perfect Fall (Ex)</Pair>
<Pair title="Ability">As long as there is a wall or another surface within arm's reach, the vigilante never takes falling damage. Even if no surface is available, he takes only half damage from falling and lands on his feet.</Pair>
</Ability>
</>};
const _perfect_vulnerability = {title: "Perfect Vulnerability", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 15</Link></p>
<Ability id="perfect-vulnerability-ex" icon={["upgrade"]}>
<Pair single id="perfect-vulnerability-ex">Perfect Vulnerability (Ex)</Pair>
<Pair title="Prerequisites">8th-level vigilante</Pair>
<Pair title="Standard Action">The vigilante can cleverly strike his foe where that foe is weakest. This attack targets the foe's touch AC, and the foe is denied her Dexterity bonus against the attack.</Pair>
<Pair title="Special">Once a foe has been the target of <em>perfect vulnerability,</em> she can't be the target of the same vigilante's perfect vulnerability for 24 hours.</Pair>
</Ability>
</>};
const _poisoner = {title: "Poisoner", jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook pg. 16</Link></p>
<Ability id="poisoner-ex" icon={["stairs-goal"]}>
<Pair single id="poisoner-ex">Poisoner (Ex)</Pair>
<Pair title="Ability">The vigilante gains the alchemist's <Link to="/ability/poison_use">poison use</Link> class feature.</Pair>
<Pair title="At 6th Level">When he has 5 doses of a single kind of poison, he can synthesize a dose of that poison once per day at no cost. This process takes 1 minute. It doesn't expend the 5 doses of poison, but the doses must be in the vigilante's possession to perform the synthesis. The poison produced requires careful storage and special skill to use. It becomes inert if it leaves the vigilante's possession and can't be sold. The vigilante can maintain only 1 dose of synthesized poison for every 5 doses of that poison in his possession.</Pair>
</Ability>
</>};
const _pull_into_the_shadows = {title: "Pull into the Shadows", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 15</Link></p>
<Ability id="pull-into-the-shadows-ex" icon={["mailed-fist","upgrade","armor-upgrade"]}>
<Pair single id="pull-into-the-shadows-ex">Pull into the Shadows (Ex)</Pair>
<Pair title="Full-Round Action">The vigilante can move up to his speed toward an opponent who is unaware of his presence (or who considers him an ally) and make a single attack against that opponent. If the attack hits, he can attempt a <Link to="/rule/drag">drag</Link> combat maneuver against that enemy with a +4 bonus and without provoking an attack of opportunity. If the drag succeeds, the vigilante doesn't need to have enough movement remaining to move with the enemy.</Pair>
<Pair title="Special">The vigilante can't use this ability on a true ally or a willing target.</Pair>
</Ability>
</>};
const _racial_paragon = {title: "Racial Paragon", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 15</Link></p>
<Ability id="racial-paragon" icon={["stairs-goal"]}>
<Pair single id="racial-paragon">Racial Paragon</Pair>
<Pair title="Usage">3 + half his vigilante level times/day (minimum 4)<ByLevelPop levels={[[1,4],[4,5],[6,6],[8,7],[10,8],[12,9],[14,10],[16,11],[18,12],[20,13]]} unit="time" postText="/day" /></Pair>
<Pair title="Move-Equivalent Action"><p>The vigilante can gain the benefit of a feat with a racial prerequisite he meets but doesn't have. This effect lasts for 1 minute. The vigilante must meet all the feat's prerequisites. The vigilante can use this ability again before the duration expires to replace a previous racial feat with another choice.</p>
<p>If a feat temporarily gained in this way has a daily use limitation, any uses of that feat while using this ability count toward that feat's daily limit.</p>
</Pair>
<Pair title="Special"><p>This vigilante talent can be selected multiple times. Each time it is selected after the first, the vigilante can use this ability to gain the benefits of one additional racial feat at the same time, or to reduce the action required to activate this talent by one step (a move action becomes a <strong className="hl">swift action</strong>, a swift action becomes a <strong className="hl">free action</strong>, and a free action becomes an <strong className="hl">immediate action</strong>).</p>
<p>If the vigilante chooses to gain the benefits of multiple feats, the feats selected must share the same racial prerequisite. He can use one of these feats to meet a prerequisite of a second feat; doing so means he cannot replace a feat currently fulfilling another's prerequisite without also replacing those feats that require it. Each individual feat selected counts toward his daily uses of this ability.</p>
</Pair>
</Ability>
</>};
const _returning_weapon = {title: "Returning Weapon", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 15</Link></p>
<Ability id="returning-weapon-ex" icon={["bowman"]}>
<Pair single id="returning-weapon-ex" flavor="The vigilante has a signature type of thrown weapon that returns to him.">Returning Weapon (Ex)</Pair>
<Pair title="Choice">Choose a type of thrown weapon, such as throwing axes.</Pair>
<Pair title="Ability">Whenever the vigilante uses the chosen type of weapon, it automatically returns as if it had the <Link to="/magic-enh/returning">returning</Link> property.</Pair>
<Pair title="At 14th Level">If the vigilante chose a type of thrown weapon that is treated as ammunition, such as <Link to="/eq-weapon/shuriken">shuriken</Link>, and buys a set of 50 magic ammunition of that type, he automatically replenishes them at no cost and never runs out. If he chose a non-ammunition thrown weapon instead, he can apply the magical properties of the first weapon he throws in a round to any nonmagical thrown weapons of that type he throws that round. This allows him to make a full attack with the benefits of his magical thrown weapon, even though it only returns next round.</Pair>
</Ability>
</>};
const _rooftop_infiltrator = {title: "Rooftop Infiltrator", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 15</Link></p>
<Ability id="rooftop-infiltrator-ex" icon={["stairs-goal"]}>
<Pair single id="rooftop-infiltrator-ex">Rooftop Infiltrator (Ex)</Pair>
<Pair title="Ability">The vigilante gains a climb speed equal to half his base speed, which increases to his full base speed when climbing a rope.</Pair>
</Ability>
</>};
const _monkeys_paws = {title: "Monkey's Paws", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 20</Link></p>
<Ability id="monkeys-paws-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="monkeys-paws-ex">Monkey's Paws (Ex)</Pair>
<Pair title="Prerequisites">5th-level vigilante, <Link to="/vigtalent/rooftop_infiltrator">rooftop infiltrator</Link></Pair>
<Pair title="Ability">The vigilante gains a climb speed equal to his base speed and a +4 competence bonus on <Link to="/skill/escape_artist">Escape Artist</Link> checks.</Pair>
</Ability>
</>};
const _shackle_smash = {title: "Shackle Smash", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 33</Link></p>
<Ability id="shackle-smash-ex" icon={["upgrade"]}>
<Pair single id="shackle-smash-ex">Shackle Smash (Ex)</Pair>
<Pair title="Ability">Perhaps trained to remove or destroy restraints from slaves and prisoners by the Twilight Talons or <Link to="/rule/bellflower_network">Bellflower Network</Link>, a vigilante with this talent can choose to make no more noise than people talking when he attempts a <Link to="/rule/sunder">sunder</Link> combat maneuver check or attempts a Strength check to break an object. He ignores half an object's hardness when attempting sunder combat maneuver checks and when attacking nonmagical objects.</Pair>
</Ability>
</>};
const _shadows_sight = {title: "Shadow's Sight", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 15</Link></p>
<Ability id="shadows-sight-ex" icon={["stairs-goal"]}>
<Pair single id="shadows-sight-ex">Shadow's Sight (Ex)</Pair>
<Pair title="Ability">The vigilante gains low-light vision and darkvision 60 feet. If he already had darkvision, its range increases by 30 feet.</Pair>
</Ability>
</>};
const _shadows_speed = {title: "Shadow's Speed", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 15</Link></p>
<Ability id="shadows-speed-ex" icon={["upgrade"]}>
<Pair single id="shadows-speed-ex">Shadow's Speed (Ex)</Pair>
<Pair title="Ability">The vigilante's base speed increases by 10 feet.</Pair>
<Pair title="At 10th Level">It increases by an additional 10 feet.</Pair>
</Ability>
</>};
const _shield_of_blades = {title: "Shield of Blades", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 16</Link></p>
<Ability id="shield-of-blades-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="shield-of-blades-ex" flavor="The vigilante's wild attacks allow him to block his foes' counterattacks.">Shield of Blades (Ex)</Pair>
<Pair title="Ability"><p>He gains <Link to="/feat/power_attack">Power Attack</Link> as a bonus feat. If he already has the Power Attack feat, he can immediately swap it for another feat for which he qualified at the level he chose Power Attack.</p>
<p>When he takes an attack or full attack action, if he uses Power Attack on every attack to make melee attacks that use his Strength bonus on attack rolls, he gains a shield bonus to his AC until his next turn equal to his penalty on attack rolls from Power Attack. This bonus applies only if he actually takes that penalty on at least one of the attack rolls.</p>
</Pair>
</Ability>
</>};
const _shield_of_fury = {title: "Shield of Fury", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 16</Link></p>
<Ability id="shield-of-fury-ex" icon={["stairs-goal"]}>
<Pair single id="shield-of-fury-ex">Shield of Fury (Ex)</Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/improved_shield_bash">Improved Shield Bash</Link> as a bonus feat. If he already has the Improved Shield Bash feat, he can immediately swap it for another feat for which he qualified at the level he chose Improved Shield Bash.</Pair>
<Pair title="At 6th Level">He is treated as if he has the <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link> feat as long as one of the weapons used is a shield. This allows him to take feats that require Two-Weapon Fighting as a prerequisite without meeting the Two-Weapon Fighting or Dexterity prerequisites, but these feats only apply while he is wielding a shield as one of his weapons (unless he takes Two-Weapon Fighting as normal, in which case this restriction is lifted).</Pair>
</Ability>
</>};
const _signature_arrows = {title: "Signature Arrows", jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook pg. 16</Link></p>
<Ability id="signature-arrows-ex" icon={["upgrade","magic-swirl"]}>
<Pair single id="signature-arrows-ex">Signature Arrows (Ex)</Pair>
<Pair title="Prerequisites">14th-level vigilante</Pair>
<Pair title="Choice">The vigilante must select one type of bow or crossbow (such as <Link to="/eq-weapon/shortbow">shortbow</Link> or <Link to="/eq-weapon/heavy_crossbow">heavy crossbow</Link>) when he selects this talent.</Pair>
<Pair title="Ability">After the first time the vigilante buys a set of 50 pieces of magic ammunition intended for the selected type of bow or crossbow, he can pay the construction cost instead of the purchase price for additional ammunition with identical magical effects for the same weapon, even if he could not normally craft magic ammunition.</Pair>
<Pair title="Special">This benefit applies only to the first type of magic ammunition that the vigilante buys 50 pieces of for the designated weapon. The vigilante can take this talent more than once; each time he takes it, he can purchase and gain this benefit with either a specific type of magic ammunition for a different type of bow or crossbow or a different type of magic ammunition for the original weapon.</Pair>
</Ability>
</>};
const _silent_dispatch = {title: "Silent Dispatch", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 16</Link></p>
<Ability id="silent-dispatch-ex" icon={["stairs-goal"]}>
<Pair single id="silent-dispatch-ex">Silent Dispatch (Ex)</Pair>
<Pair title="Ability">When the vigilante ambushes an enemy or enemies unaware of his presence, he can attempt a Stealth check at a -5 penalty. The result indicates the DC of Perception checks to hear the vigilante's attacks until an opponent's first action, when the DC returns to the normal -10 for hearing battle. Other enemies present can still see the attack; this talent only prevents the sounds of battle from alerting others.</Pair>
</Ability>
</>};
const _steely_resolve = {title: "Steely Resolve", jsx: <><p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 23</Link></p>
<Ability id="steely-resolve-ex" icon={["stairs-goal"]}>
<Pair single id="steely-resolve-ex">Steely Resolve (Ex)</Pair>
<Pair title="Immediate Action">Three times per day, when the vigilante fails a Will saving throw against a mind-affecting effect, the vigilante can delay the effect's onset for a number of rounds equal to <Link to="/misc/half">half</Link> his vigilante level, after which the vigilante is affected as normal by the entire effect. Rounds spent delaying the effect do not count toward the effect's duration.</Pair>
</Ability>
</>};
const _strike_the_unseen = {title: "Strike the Unseen", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 16</Link></p>
<Ability id="strike-the-unseen-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="strike-the-unseen-ex">Strike the Unseen (Ex)</Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/blind_fight">Blind-Fight</Link> as a bonus feat. He can also deal <em>hidden strike</em> damage against targets with total concealment.</Pair>
<Pair title="At 10th Level">He gains <Link to="/feat/improved_blind_fight">Improved Blind-Fight</Link> as a bonus feat and can deal all types of <Link to="/misc/precision_damage">precision damage</Link> against targets with <Link to="/rule/concealment">concealment</Link> or total concealment.</Pair>
<Pair title="At 16th Level">He gains <Link to="/feat/greater_blind_fight">Greater Blind-Fight</Link> as a bonus feat.</Pair>
<Pair title="Special">The vigilante does not have to meet the prerequisites for either Improved Blind-Fight or Greater Blind-Fight to gain these feats with this talent.</Pair>
</Ability>
</>};
const _sure_footed = {title: "Sure-Footed", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 16</Link></p>
<Ability id="sure-footed-ex" icon={["stairs-goal"]}>
<Pair single id="sure-footed-ex">Sure-Footed (Ex)</Pair>
<Pair title="Ability">The vigilante can move at full speed while using the Stealth and Acrobatics skills without penalty.</Pair>
<Pair title="At 8th Level">He can move at full speed across <Link to="/rule/difficult_terrain">difficult terrain</Link>.</Pair>
</Ability>
</>};
const _surprise_strike = {title: "Surprise Strike", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 16</Link></p>
<Ability id="surprise-strike-ex" icon={["upgrade"]}>
<Pair single id="surprise-strike-ex" flavor="The vigilante gains a greater advantage when his foe is unable to defend herself.">Surprise Strike (Ex)</Pair>
<Pair title="Ability">Whenever he makes an attack against a foe that is denied her Dexterity bonus to AC, he gains a +1 bonus on his attack roll.</Pair>
<Pair title="At 8th Level">This bonus becomes +2.</Pair>
<Pair title="At 16th Level">This bonus increases to +3.</Pair>
</Ability>
</>};
const _take_em_alive = {title: "Take 'Em Alive", jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 27</Link></p>
<Ability id="take-em-alive-ex" icon={["upgrade"]}>
<Pair single id="take-em-alive-ex">Take 'Em Alive (Ex)</Pair>
<Pair title="Ability">The vigilante doesn't take the usual -4 penalty on attack rolls made to deal nonlethal damage with weapons that normally deal lethal damage. In addition, the vigilante gains a +1 bonus on all attack and damage rolls for attacks that deal only nonlethal damage and have no secondary effects (such as poison).</Pair>
<Pair title="At 5th Level">This bonus becomes +2.</Pair>
<Pair title="At 8th Level">This bonus increases to +3.</Pair>
<Pair title="At 11th Level">This bonus becomes +4.</Pair>
<Pair title="At 14th Level">This bonus increases to +5.</Pair>
</Ability>
</>};
const _team_player = {title: "Team Player", jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 27</Link>, <Link to="/source/adventurers_guide">Adventurer's Guide pg. 42</Link></p>
<Ability id="team-player-ex" icon={["stairs-goal"]}>
<Pair single id="team-player-ex">Team Player (Ex)</Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/swift_aid">Swift Aid</Link> as a bonus feat, ignoring its prerequisites. Additionally, the vigilante can use the feat as a <strong className="hl">standard action</strong>, in which case it applies to every ally adjacent to the vigilante.</Pair>
<Pair title="At 10th Level">The vigilante can increase the bonus provided to one ally by this feat to +2 by using the <Link to="/rule/aid_another_2">aid another</Link> action as a <strong className="hl">move action</strong> rather than as a swift action.</Pair>
</Ability>
</>};
const _tigers_claws = {title: "Tiger's Claws", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 20</Link></p>
<Ability id="tigers-claws-ex" icon={["mailed-fist"]}>
<Pair single id="tigers-claws-ex">Tiger's Claws (Ex)</Pair>
<Pair title="Ability">The vigilante gains the ability to grow claws similar to a <Link to="/class/shifter">shifter's</Link>. These claws are <Link to="/umr/natural_weapons">natural weapons</Link> that can be extended at will and deal 1d4 points of piercing and slashing damage (1d3 if the vigilante is Small).</Pair>
<Pair title="At 11th Level">The damage increases to 1d6 (1d4 if Small).</Pair>
</Ability>
</>};
const _turnabout = {title: "Turnabout", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 33</Link></p>
<Ability id="turnabout-ex" icon={["mailed-fist"]}>
<Pair single id="turnabout-ex" flavor="A vigilante with this talent can capitalize on any opportunities in combat.">Turnabout (Ex)</Pair>
<Pair title="Ability">Whenever a foe provokes an attack of opportunity from the vigilante by attacking or casting a spell, the vigilante can attempt a <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver check in place of the attack of opportunity. If he succeeds at the check, in addition to the usual options, the vigilante can redirect the attack or spell to a new target or area the foe could have chosen.</Pair>
</Ability>
</>};
const _unexpected_strike = {title: "Unexpected Strike", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 16</Link></p>
<Ability id="unexpected-strike-ex" icon={["stairs-goal"]}>
<Pair single id="unexpected-strike-ex">Unexpected Strike (Ex)</Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/quick_draw">Quick Draw</Link> as a bonus feat.</Pair>
<Pair title="At 8th Level">He can draw hidden weapons as a <strong className="hl">swift action</strong> (instead of a move action).</Pair>
</Ability>
</>};
const _vigilantes_reflexes = {title: "Vigilante's Reflexes", jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook pg. 17</Link></p>
<Ability id="vigilantes-reflexes-ex" icon={["stairs-goal"]}>
<Pair single id="vigilantes-reflexes-ex">Vigilante's Reflexes (Ex)</Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/combat_reflexes">Combat Reflexes</Link> as a bonus feat. If he already has the Combat Reflexes feat, he instead gains another feat he qualified for at the level when he chose Combat Reflexes.</Pair>
<Pair title="At 8th Level">The number of additional attacks of opportunity per round the vigilante can make increases by 1, regardless of the vigilante's Dexterity bonus.</Pair>
<Pair title="At 16th Level">It increases by 1 again.</Pair>
</Ability>
</>};
const _vital_punishment = {title: "Vital Punishment", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 17</Link></p>
<Ability id="vital-punishment-ex" icon={["stairs-goal","mailed-fist"]}>
<Pair single id="vital-punishment-ex">Vital Punishment (Ex)</Pair>
<Pair title="Prerequisites">6th-level vigilante</Pair>
<Pair title="Ability">Once per round, before he makes an attack of opportunity, he can declare it to be a <em>vital punishment.</em> If the attack hits, the vigilante can apply the Vital Strike feat. The vigilante can apply the <Link to="/feat/improved_vital_strike">Improved Vital Strike</Link> or <Link to="/feat/greater_vital_strike">Greater Vital Strike</Link> feat as his <em>vital punishment</em> instead if he later gains those feats.</Pair>
</Ability>
</>};
const _volatile_arrows = {title: "Volatile Arrows", jsx: <><p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 7</Link></p>
<Ability id="volatile-arrows-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="volatile-arrows-ex">Volatile Arrows (Ex)</Pair>
<Pair title="Usage">3 + Intelligence modifier times/day</Pair>
<Pair title="Ability">A vigilante with this talent gains the ability to attach an <Link to="/class/alchemist">alchemist</Link> bomb to a ranged attack he makes with a bow or crossbow as part of firing the attack. If the attack hits, it deals an additional amount of damage equal to that of an alchemist bomb, using the vigilante's level as his alchemist level to determine the bomb's damage.</Pair>
<Pair title="Special">The vigilante can takes this talent multiple times. Each time he does, he can use the ability one additional time per day and he gains one <Link to="/ability/discovery">alchemist discovery</Link> that can modify bombs, treating his vigilante level as his alchemist level for any prerequisites. He can apply these discoveries to his bombs as normal.</Pair>
</Ability>
<Ability id="bomb-su" extraClasses="subAbility" icon={["smoking-finger"]}>
<Pair single id="bomb-su" flavor="Relevant text from the alchemist class ability.">Bomb (Su)</Pair>
<Pair title="Standard Action">On a direct hit, your bomb inflicts 1d6 points of fire damage + additional damage equal to your Intelligence modifier (this bonus damage is not multiplied on a critical hit or by using feats such as <Link to="/feat/vital_strike">Vital Strike</Link>).</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>Yes</Pair>
<Pair title="At 3rd Level">The base bomb damage becomes 2d6.</Pair>
<Pair title="At 5th Level">The base bomb damage becomes 3d6.</Pair>
<Pair title="At 7th Level">The base bomb damage becomes 4d6.</Pair>
<Pair title="At 9th Level">The base bomb damage becomes 5d6.</Pair>
<Pair title="At 11th Level">The base bomb damage becomes 6d6.</Pair>
<Pair title="At 13th Level">The base bomb damage becomes 7d6.</Pair>
<Pair title="At 15th Level">The base bomb damage becomes 8d6.</Pair>
<Pair title="At 17th Level">The base bomb damage becomes 9d6.</Pair>
<Pair title="At 19th Level">The base bomb damage becomes 10d6.</Pair>
</Ability>
</>};
const _vortex_splash = {title: "Vortex Splash", jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 21</Link></p>
<Ability id="vortex-splash-ex" icon={["mailed-fist"]}>
<Pair single id="vortex-splash-ex">Vortex Splash (Ex)</Pair>
<Pair title="Full-Round Action">When in rain or waist deep in water, the vigilante can make a whirling splash, allowing him to attempt a single <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver or <Link to="/rule/feint">feint</Link> against each adjacent foe. The vigilante can make a separate choice for each target.</Pair>
</Ability>
</>};
const _whip_of_vengeance = {title: "Whip of Vengeance", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 33</Link></p>
<Ability id="whip-of-vengeance-ex" icon={["stairs-goal"]}>
<Pair single id="whip-of-vengeance-ex">Whip of Vengeance (Ex)</Pair>
<Pair title="Ability">The vigilante gains <Link to="/feat/whip_mastery">Whip Mastery</Link> as a bonus feat. If he already has the Whip Mastery feat, he can immediately swap it for another feat he qualified for at the level when he chose Whip Mastery.</Pair>
<Pair title="At 6th Level">He also gains the <Link to="/feat/improved_whip_mastery">Improved Whip Mastery</Link> feat.</Pair>
<Pair title="Special">He treats his vigilante level as his vigilante base attack bonus for the purpose of meeting prerequisites of feats and abilities that have Whip Mastery as a prerequisite.</Pair>
</Ability>
</>};
export default {not_found:_not_found,combat_skill:_combat_skill,fist_of_the_avenger:_fist_of_the_avenger,heavy_training:_heavy_training,mad_rush:_mad_rush,nothing_can_stop_me:_nothing_can_stop_me,signature_weapon:_signature_weapon,steel_soldier:_steel_soldier,sucker_punch:_sucker_punch,sweeping_strike:_sweeping_strike,unkillable:_unkillable,weapon_familiarity:_weapon_familiarity,blind_spot:_blind_spot,evasive:_evasive,hide_in_plain_sight:_hide_in_plain_sight,rogue_talent:_rogue_talent,sniper:_sniper,stalker_sense:_stalker_sense,twisting_fear:_twisting_fear,up_close_and_personal:_up_close_and_personal,foe_collision:_foe_collision,leave_an_opening:_leave_an_opening,mighty_ambush:_mighty_ambush,throat_jab:_throat_jab,animal_patron:_animal_patron,another_day:_another_day,aquatic_action:_aquatic_action,armor_skin:_armor_skin,brutal_maneuver:_brutal_maneuver,chase_master:_chase_master,close_the_gap:_close_the_gap,combat_expertise:_combat_expertise,concealed_strike:_concealed_strike,cunning_feint:_cunning_feint,deceitful_trick:_deceitful_trick,environmental_weapon:_environmental_weapon,one_with_the_wild:_one_with_the_wild,swamp_concoctions:_swamp_concoctions,expose_weaknesses:_expose_weaknesses,fantastic_stride:_fantastic_stride,favored_maneuver:_favored_maneuver,gator_wrangle:_gator_wrangle,inspired_vigilante:_inspired_vigilante,instant_plan:_instant_plan,leap_and_bound:_leap_and_bound,lethal_grace:_lethal_grace,living_shield:_living_shield,magical_familiarity:_magical_familiarity,malleable_flesh:_malleable_flesh,minor_magic:_minor_magic,major_magic:_major_magic,mockery:_mockery,morphic_weaponry:_morphic_weaponry,perfect_fall:_perfect_fall,perfect_vulnerability:_perfect_vulnerability,poisoner:_poisoner,pull_into_the_shadows:_pull_into_the_shadows,racial_paragon:_racial_paragon,returning_weapon:_returning_weapon,rooftop_infiltrator:_rooftop_infiltrator,monkeys_paws:_monkeys_paws,shackle_smash:_shackle_smash,shadows_sight:_shadows_sight,shadows_speed:_shadows_speed,shield_of_blades:_shield_of_blades,shield_of_fury:_shield_of_fury,signature_arrows:_signature_arrows,silent_dispatch:_silent_dispatch,steely_resolve:_steely_resolve,strike_the_unseen:_strike_the_unseen,sure_footed:_sure_footed,surprise_strike:_surprise_strike,take_em_alive:_take_em_alive,team_player:_team_player,tigers_claws:_tigers_claws,turnabout:_turnabout,unexpected_strike:_unexpected_strike,vigilantes_reflexes:_vigilantes_reflexes,vital_punishment:_vital_punishment,volatile_arrows:_volatile_arrows,vortex_splash:_vortex_splash,whip_of_vengeance:_whip_of_vengeance}