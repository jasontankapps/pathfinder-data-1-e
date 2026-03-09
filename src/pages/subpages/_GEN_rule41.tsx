import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _optional_combat_changes = {title: "Optional Combat Changes", subtopics: ["armor_as_damage_reduction","called_shots","piecemeal_armor","removing_iterative_attacks","revised_action_economy","wound_thresholds","wounds_and_vigor"], jsx: <><p>These topics cover optional rules that change the way combat works.</p>
</>};
const _armor_as_damage_reduction = {title: "Armor as Damage Reduction", parent_topics: ["optional_combat_changes"], siblings: ["armor_as_damage_reduction","called_shots","piecemeal_armor","removing_iterative_attacks","revised_action_economy","wound_thresholds","wounds_and_vigor"], subtopics: ["defense","armor_as_dr"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 191</Link></p>
<p>While the armor and Armor Class system presented in the Pathfinder Roleplaying Game is tried and tested, some players may yet have a sense that it feels slightly off. That is to say, if a suit of armor is actually protecting the wearer from attacks that strike but simply fail to cause the wearer harm, why then do we say that armor reduces the chance of a hit? The abstraction has been clarified in the rules by defining what it means to be "hit" in combat as actually being "hit in such a way as to effectively cause harm," but this explanation is still not enough for some players.</p>
<p>The following is an alternative system that allows armor to absorb the damage of attacks, rather than a system that provides an abstract way of determining when a hit does actual harm. Like all the rules presented in this section, it is a variant to the base system of the Pathfinder RPG. It is for GMs who want armor to reduce damage rather than increase Armor Class, and replaces the normal rules for armor.</p>
<p>In this system, a creatures no longer has an Armor Class. Instead it has a Defense score that a foe's attack roll must meet or exceed to hit the creature. Then any damage is reduced by damage reduction based on the creature's armor worn and any natural armor bonus the creature has. Furthermore, armor has a chance of reducing all critical hits to normal hits, by replacing the confirmation roll for critical hits with a critical defense check made by the creature threatened by the critical hit.</p>
</>};
const _defense = {title: "Defense", parent_topics: ["optional_combat_changes","armor_as_damage_reduction"], siblings: ["defense","armor_as_dr"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 191</Link></p>
<p>In this alternative system, a creature does not have an Armor Class (AC); it instead has a Defense score. Defense is similar to touch AC in the standard Pathfinder Roleplaying Game rules, but it also adds the shield bonus (including any enhancement bonus to the shield), and any enhancement bonus to armor.</p>
<blockquote>
<p>Defense = 10 + shield bonus + Dexterity modifier + other modifiers (including armor's enhancement bonus, but not armor bonus or natural armor bonus)</p>
</blockquote>
<p>Defense represents how easy or difficult it is to hit a creature. The shield bonus is added because a creature is considered to be actively blocking attacks with its shield whenever it can, which is whenever it would gain its Dexterity bonus to AC and not be flat-footed.</p>
<p><strong className="hl">Losing Dexterity Bonus to Defense:</strong> Situations or effects that would cause you to lose your Dexterity bonus to AC instead cause you to lose your Dexterity bonus to Defense. Also, whenever you lose your Dexterity bonus to Defense, you also lose any shield bonus to Defense, since when you lose your Dexterity bonus to AC, you also lose the ability to properly respond to attacks with your shield.</p>
<p><strong className="hl">Flat-Footed Defense:</strong> You do not gain your Dexterity or shield bonus to your Defense if you are flat-footed or lose your Dexterity bonus to Defense; thus, your Flat-Footed Defense is equal to your Defense minus your Dexterity bonus and shield bonus.</p>
<p><strong className="hl">Defense and Using a Shield without Proficiency:</strong> When a creature uses a shield it is not proficient with, it takes that shield's armor check penalty as a penalty to the shield bonus, along with the other penalties for using a shield without proficiency. Furthermore, it also takes this penalty to its Flat-Footed Defense, as the shield actually gets in the way instead of defending against incoming attacks.</p>
</>};
const _armor_as_dr = {title: "Armor as DR", parent_topics: ["optional_combat_changes","armor_as_damage_reduction"], siblings: ["defense","armor_as_dr"], subtopics: ["critical_hits_and_defense"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 191</Link></p>
<p>Armor in this system keeps all of its normal statistics and qualities, but its armor bonus (including any enhancement bonus added to armor bonus and natural armor bonus) is converted to DR/armor. The DR an armor provides is equal to its total armor bonus with a +1 bonus at 5th level or at 5 Hit Dice, with an increase to that bonus of +1 for every five levels above 5th level, or every 5 Hit Dice over 5 Hit Dice (to a maximum of +4 to DR at 20th level or at 20 or more Hit Dice), provided that the creature wearing the armor is also proficient with the armor.</p>
<p><strong className="hl">Using Armor without Proficiency:</strong> Creatures using armor they are not proficient with do not gain the bonus per level or Hit Dice to the DR, on top of any of the other normal penalties for using armor without proficiency.</p>
<p><strong className="hl">DR/Armor:</strong> This type of DR blocks the damage of all attacks that would normally be affected by DR, based on the composition of the armor (see Table 5-1). Unlike most forms of damage reduction, DR/armor stacks with other types of DR. For instances, when fighting a skeleton with DR 5/bludgeoning and DR 4/armor (+2 for armor, +2 for natural armor), the skeleton's DR/armor reduces 9 points of damage from non-bludgeoning attacks, and 4 damage from bludgeoning weapon attacks. Magic weapons and attacks from Large or larger creatures bypass the DR 4/armor, but not the DR 5/bludgeoning.</p>
<h3 id="rule-armor_as_dr-table-5-1-armor-composition-and-dr">Table 5-1: Armor Composition and DR</h3>
<ScrollContainer id="rule-armor_as_dr--table-0"><table>
<thead>
<tr>
<th>Material</th>
<th>DR Provided</th>
<th>Attacker Size to Bypass DR</th>
</tr>
</thead>
<tbody><tr>
<td>Nonmagical armor<sup><InnerLink showBacklink="backlink-rule-armor_as_dr-ref-1-1" id="rule-armor_as_dr-ref-1-1" data-hash-target to="rule-armor_as_dr-1">1</InnerLink></sup></td>
<td>DR/magic</td>
<td>Large</td>
</tr>
<tr>
<td>Magical armor<sup><InnerLink showBacklink="backlink-rule-armor_as_dr-ref-1-2" id="rule-armor_as_dr-ref-1-2" data-hash-target to="rule-armor_as_dr-1">1</InnerLink></sup></td>
<td>DR/adamantine</td>
<td>Huge</td>
</tr>
<tr>
<td>Adamantine armor<sup><InnerLink showBacklink="backlink-rule-armor_as_dr-ref-1-3" id="rule-armor_as_dr-ref-1-3" data-hash-target to="rule-armor_as_dr-1">1</InnerLink></sup></td>
<td>DR/-</td>
<td>Gargantuan</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Natural Armor Bonus and DR:</strong> Like a creature's armor bonus, a natural armor bonus is also converted into damage reduction. If a creature is wearing armor and has a natural armor bonus, the creature adds its armor bonus to its natural armor bonus to determine the amount of DR/armor that it has (see Table 5-2).</p>
<p>For instance, if a creature wearing a +2 chain shirt has DR 6/armor is then subject to a <Link to="/spell/barkskin">barkskin</Link> spell cast by a 6th-level druid (gaining a +3 natural armor bonus), its DR becomes DR 9/armor for the duration of the spell. This DR is bypassed by adamantine, or the attacks of Huge or larger creatures.</p>
<p>A creature that has both DR from a source other than armor and a natural armor bonus gains the effects of an enhanced form of DR, similar to how the composition of the armor grants special DR/armor defenses (see Table 5-1). If a creature has magical armor, natural armor, and DR, it takes the best form of the special protection provided by both its armor and its mix of DR and natural armor to its DR/armor.</p>
<p>For instance, if a creature has natural armor and DR/magic and is wearing adamantine armor, that creature's DR/armor functions as DR/-, and can be bypassed by Gargantuan or larger creatures, since the adamantine armor provides the best of the two damage reductions.</p>
<h3 id="rule-armor_as_dr-table-5-2-natural-armor-conversion-to-dr">Table 5-2: Natural Armor Conversion to DR</h3>
<ScrollContainer id="rule-armor_as_dr--table-1"><table>
<thead>
<tr>
<th>Armor</th>
<th>Type</th>
<th>Size</th>
</tr>
</thead>
<tbody><tr>
<td>Natural armor</td>
<td>DR/magic</td>
<td>Large</td>
</tr>
<tr>
<td>Natural armor with DR/magic</td>
<td>DR/adamantine</td>
<td>Huge</td>
</tr>
<tr>
<td>Natural armor with DR/adamantine</td>
<td>DR/-</td>
<td>Gargantuan</td>
</tr>
<tr>
<td>Natural armor with DR/-</td>
<td>DR/-<sup><InnerLink showBacklink="backlink-rule-armor_as_dr-ref-2-1" id="rule-armor_as_dr-ref-2-1" data-hash-target to="rule-armor_as_dr-2">2</InnerLink></sup></td>
<td>Colossal</td>
</tr>
<tr>
<td>Natural armor with DR/epic</td>
<td>DR/epic<sup><InnerLink showBacklink="backlink-rule-armor_as_dr-ref-2-2" id="rule-armor_as_dr-ref-2-2" data-hash-target to="rule-armor_as_dr-2">2</InnerLink></sup></td>
<td>n/a</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Unusual Creatures and Armor DR:</strong> Amorphous or incorporeal creatures have an easier time bypassing DR/armor. When they attack a creature with DR/armor, they typically treat that DR as a fraction of the DR/armor. Attacks by incorporeal creatures entirely ignore the DR unless that DR comes from a force effect or from armor with the <Link to="/magic-enh/ghost_touch_a">ghost touch</Link> special armor quality. These traits are detailed in Table 5-3.</p>
<h3 id="rule-armor_as_dr-table-5-3-unusual-creatures-and-armor-dr">Table 5-3: Unusual Creatures and Armor DR</h3>
<ScrollContainer id="rule-armor_as_dr--table-2"><table>
<thead>
<tr>
<th>Attacking Creature Type</th>
<th>DR Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Amorphous<sup><InnerLink showBacklink="backlink-rule-armor_as_dr-ref-3-1" id="rule-armor_as_dr-ref-3-1" data-hash-target to="rule-armor_as_dr-3">3</InnerLink></sup></td>
<td>&times; 1/2</td>
</tr>
<tr>
<td>Incorporeal</td>
<td>&times; 0 (&times;1 if DR is from force effect or <em>ghost touch</em> armor</td>
</tr>
<tr>
<td>Swarm of Tiny creatures</td>
<td>&times; 1/2</td>
</tr>
<tr>
<td>Swarm of Diminutive creatures</td>
<td>&times; 1/4</td>
</tr>
<tr>
<td>Swarm of Fine creatures</td>
<td>&times; 0</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-armor_as_dr-label">Footnotes</h3>
<ol>
<li id="rule-armor_as_dr-1">
<p><Link to="/magic-enh/brilliant_energy">Brilliant energy</Link> weapons bypass any DR provided by armor. In addition, DR from armor is halved if a creature is grappled or entangled, and does not apply when a creature is helpless or pinned. <InnerLink id="backlink-rule-armor_as_dr-ref-1-1" data-hash-target to="rule-armor_as_dr-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink> <InnerLink id="backlink-rule-armor_as_dr-ref-1-2" data-hash-target to="rule-armor_as_dr-ref-1-2" aria-label="Back to reference 1-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-armor_as_dr-ref-1-3" data-hash-target to="rule-armor_as_dr-ref-1-3" aria-label="Back to reference 1-3">↩<sup>3</sup></InnerLink></p>
</li>
<li id="rule-armor_as_dr-2">
<p>A creature that already has DR/- or DR/epic increases its DR by an amount equal to its natural armor bonus. <InnerLink id="backlink-rule-armor_as_dr-ref-2-1" data-hash-target to="rule-armor_as_dr-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink> <InnerLink id="backlink-rule-armor_as_dr-ref-2-2" data-hash-target to="rule-armor_as_dr-ref-2-2" aria-label="Back to reference 2-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="rule-armor_as_dr-3">
<p>Elementals, oozes, ooze-like creatures, and any creature with the amorphous defensive ability. <InnerLink id="backlink-rule-armor_as_dr-ref-3-1" data-hash-target to="rule-armor_as_dr-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _critical_hits_and_defense = {title: "Critical Hits and Defense", parent_topics: ["optional_combat_changes","armor_as_damage_reduction","armor_as_dr"], siblings: ["critical_hits_and_defense"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 192</Link></p>
<p>In this alternative system, when a creature threatens a critical hit, it does not make a critical hit confirmation roll. Instead, the target of that critical hit makes a critical defense check instead. A critical defense check is 1d20 + a bonus equal to the creature's DR + the creature's Dexterity modifier (up to the maximum Dexterity bonus allowed by any armor worn) + the sum of any deflection and shield bonus to Defense.</p>
<p>Critical defense check bonus = creature's DR + Dexterity modifier + shield bonus to Defense + deflection bonus</p>
<p>The DC of the check is based on the die roll for the critical threat. It is further modified by the base attack bonus of the attacking creature, how many critical feats the attacking creature has (if any; 10 maximum), and a bonus relationship between the size of the attacking creature and the target of the critical hit, if the attacking creature is larger than the creature it attacked.</p>
<p>Critical defense DC = critical hit roll + 1/2 attacker's base attack bonus + 1 for each critical feat + 1 for each size category larger attacker is than target</p>
<p>For instance, if a Medium creature is hit with a crossbow fired by a Medium 6th-level fighter with two critical feats, and the critical threat attack roll is a 19, the target of the potential critical hit makes a critical defense check with a DC of 24 to reduce the critical hit to a normal hit. If the target is wearing +1 leather armor, has a Dexterity of 18, and is using a +1 buckler, that target would have a +9 bonus on the critical defense check to reduce the critical hit to a normal hit. On a roll of 15 or higher, the critical hit is reduced to a normal hit, and the target takes normal damage for the hit (which is reduced by its DR). If the creature firing the crossbow had rolled a 20, the target of the critical hit would need to roll a 16 or higher on its critical defense check to reduce the impact of the critical hit, making it a normal hit.</p>
<p>On a failed critical defense check, the target of the critical hit takes the damage for the critical hit. That damage is still reduced by the target of the critical hit's DR.</p>
<p><strong className="hl">Fortification Special Armor Quality:</strong> The fortification special armor quality acts in concert with the check, coming into play if the armor check fails.</p>
</>};
const _called_shots = {title: "Called Shots", parent_topics: ["optional_combat_changes"], siblings: ["armor_as_damage_reduction","called_shots","piecemeal_armor","removing_iterative_attacks","revised_action_economy","wound_thresholds","wounds_and_vigor"], subtopics: ["making_called_shots","additional_rules","called_shot_effects"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 193</Link></p>
<p>The Pathfinder Roleplaying Game deals with hits and damage in a rather abstract way, treating almost all hits the same except for the amount and type of damage dealt. With these optional called shot rules, PCs, monsters, and villains alike can aim their attacks more precisely, potentially to devastating effect.</p>
<p>These rules are an optional addition to any campaign, and should be approached with care by the Game Master.</p>
</>};
const _making_called_shots = {title: "Making Called Shots", parent_topics: ["optional_combat_changes","called_shots"], siblings: ["making_called_shots","additional_rules","called_shot_effects"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 193</Link></p>
<p>A called shot is an attack aimed at a particular part of the body, in the hope of gaining some extra effect from the attack. The smaller or better guarded the area, the more difficult the called shot. A called shot is a single attack made as a full-round action, and thus can't be combined with a charge, feats like <Link to="/feat/vital_strike">Vital Strike</Link>, or multiple attacks with a full-attack action.</p>
<p>Called shots are divided into three basic difficulty groups: easy, tricky, and challenging. Easy called shots represent large areas of the body, and are made at a -2 penalty. They have relatively minor effects unless a critical hit is scored or massive damage is dealt. Tricky called shots represent either smaller areas, like a hand, or areas a creature protects well, like its head. Tricky shots receive a -5 penalty, and inflict more serious consequences. Challenging called shots represent very small areas like eyes, fingers, or creatures' necks. They receive a -10 penalty, and successful hits cause significant short-term impairment. Beyond these challenging ratings lie almost impossible called shots that receive a -20 penalty. For called shots against non-humanoid creatures, use common sense and the categories above as guidelines. For example, a flying creature's wings are treated as arms.</p>
<p><strong className="hl">Range and Reach:</strong> Called shots work best at close range. Melee called shots are at a -2 penalty if the target isn't adjacent to its attacker. For called shots made at range, all range penalties due to range increment are doubled, with a minimum penalty of -2 for any called shot against a target that's not within 30 feet.</p>
<p><strong className="hl">Critical Hits and Critical Threats:</strong> A called shot has the normal chance for a critical hit, and inflicts an extra effect if one is confirmed. The exact effects of a successful critical hit depend on where the target was hit, and are described under Called Shot Effects.</p>
</>};
const _additional_rules = {title: "Additional Rules", parent_topics: ["optional_combat_changes","called_shots"], siblings: ["making_called_shots","additional_rules","called_shot_effects"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 193</Link></p>
<p><strong className="hl">Automatic Hits:</strong> Some effects in the game, like true strike or the flash of insight ability of cyclopes, provide automatic or nearly automatic hits. Using such an ability on a called shot turns it into a normal attack, with none of the benefits or penalties associated with called shots. From a story perspective, this is because the effect cannot distinguish between a hit in general and a hit in a particular area, but it's also necessary to keep the power of such abilities in line with their original intended effects. Some Game Masters may prefer a more theatrical or dangerous game in which magic can make a shot through the eye nearly certain, in which case this rule can be ignored.</p>
<p><strong className="hl">Cover:</strong> Cover other than soft cover interferes with a called shot even more than with a normal shot. Double any AC bonuses provided by cover that isn't soft cover. In addition, cover may make certain called shots impossible.</p>
<p><strong className="hl">Concealment:</strong> The miss chance for a called shot against a creature with <Link to="/rule/concealment">concealment</Link> increases to 50%. It's not possible to make a called shot against a creature with total concealment. For effects that function like concealment, such as <Link to="/spell/blink">blink</Link> and <Link to="/spell/displacement">displacement</Link>, a miss chance of 50% or more prevents called shots, a miss chance of 20% increases to 50%, and miss chances of other values are doubled.</p>
<p><strong className="hl">Damage Reduction:</strong> If damage reduction completely negates the damage from a called shot, the called shot has no effect. If hit point damage does get through, the called shot has normal effects. Damage reduction does not reduce any ability damage, ability drain, penalties, or bleed damage caused by the called shot.</p>
<p><strong className="hl">Immunity:</strong> Immunity to critical hits protects against the extra effects of called shots. Partial protection, such as that provided by the fortification special ability of some magical armors, protects the creature as though the called shot were a critical hit.</p>
<p><strong className="hl">Regeneration:</strong> Regeneration provides no special protection against called shots, but it might negate or undo some of the effects, such as bleeding or limb loss.</p>
<p><strong className="hl">Saving Throws:</strong> If a saving throw is allowed on a called shot, the DC is equal to the Armor Class hit by the attack. In the case of an attack roll of a natural 20, the DC is the AC the attack would have hit if 20s did not automatically hit.</p>
<p><strong className="hl">Stacking:</strong> Unless otherwise stated, penalties for multiple called shots do not stack, even if they are to different areas of the body. Ability damage and drain caused by called shots always stacks.</p>
<p><strong className="hl">Touch Attacks:</strong> Touch attacks and ranged touch attacks made as called shots must target AC rather than touch AC. This represents the care it takes to target such strikes.</p>
</>};
const _called_shot_effects = {title: "Called Shot Effects", parent_topics: ["optional_combat_changes","called_shots"], siblings: ["making_called_shots","additional_rules","called_shot_effects"], subtopics: ["arm","chest","ear","eye","hand","head","heart","leg","neck","vitals"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 193</Link></p>
<p>The consequences of a successful called shot vary depending on whether the hit is a normal hit, a critical hit, or a debilitating blow (a hit for 50 points of damage or more). When more than one limb or organ can be affected by a called shot, the attacker can choose the target if desired; otherwise, it should be determined randomly.</p>
<p><strong className="hl">Called Shot:</strong> An attack aimed at a body part that deals fewer than 50 points of damage results in a normal called shot. Called shots inflict either minor penalties or temporary inconveniences.</p>
<p><strong className="hl">Critical Called Shot:</strong> When a called shot is confirmed as a critical hit but deals fewer than half the creature's hit points of damage (minimum 50), a critical called shot results. Critical called shots can cause ability damage, bleeding, and other serious effects.</p>
<p><strong className="hl">Debilitating Blow:</strong> A called shot that deals half the creature's hit points of damage (minimum 50) or more (whether a critical hit or not) results in a debilitating blow that has extra effects. A debilitating blow inflicts major consequences and potentially permanent consequences.</p>
<p><strong className="hl">Concentration Checks:</strong> <Link to="/rule/concentration">Concentration</Link> checks forced by called shots to parts of the body involved in spellcasting (generally the head for spells with verbal components, and the casting arm and hand for spells with somatic components) are made at a -5 penalty.</p>
<p><strong className="hl">Healing Called Shot Effects:</strong> Some called shot effects render a given location useless until healed. Remedying this condition requires the victim be healed (naturally or magically, and by one or more sources of healing) for as many hit points of damage as the called shot caused. If the victim is suffering from multiple wounds of this sort, divide healing equally between them. The regenerate spell repairs any and all effects of called shots except for ability damage and ability drain.</p>
</>};
const _arm = {title: "Arm", parent_topics: ["optional_combat_changes","called_shots","called_shot_effects"], siblings: ["arm","chest","ear","eye","hand","head","heart","leg","neck","vitals"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 194</Link></p>
<p>Arms are the manipulating limbs of a creature, including tentacles. Wings are also considered to be arms for purposes of a called shot. Called shots to the arm are easy (-2 penalty).</p>
<p><strong className="hl">Called Shot:</strong> A called shot to an arm deals no additional damage, but for 1d4 rounds, any attack rolls, ability checks, or skill checks made using the wounded arm take a -2 penalty. A flying creature shot in the wing must make a Fly check to avoid descending involuntarily.</p>
<p><strong className="hl">Critical Called Shot:</strong> A critical hit to the arm deals 1d4 points of Dexterity damage and 1d4 points of Strength damage. A successful Fortitude saving throw halves the ability damage (minimum 1 point to each attribute). The target also suffers the effects of a called shot to the arm for 1d4 minutes.</p>
<p><strong className="hl">Debilitating Blow:</strong> A debilitating blow deals 1d6 points of Dexterity damage and 1d6 points of Strength damage. The blow renders the arm useless until healed unless the target succeeds at a Fortitude saving throw. If the saving throw fails by 5 or more, the arm is severed or otherwise mangled such that only <Link to="/spell/regenerate">regenerate</Link> or similar effects can repair it. The target also suffers the effects of a called shot to the arm (if the arm remains usable) for 2d6 minutes.</p>
</>};
const _chest = {title: "Chest", parent_topics: ["optional_combat_changes","called_shots","called_shot_effects"], siblings: ["arm","chest","ear","eye","hand","head","heart","leg","neck","vitals"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 194</Link></p>
<p>Called shots to the chest are aimed at the well-protected center of mass of a creature. Called shots to the chest are easy (-2 penalty).</p>
<p><strong className="hl">Called Shot:</strong> A called shot to the chest deals no additional damage, but any skill checks caused by the hit (such as an Acrobatics check while balancing or a Climb check while climbing) take a -2 penalty.</p>
<p><strong className="hl">Critical Called Shot:</strong> A critical hit to the chest deals 1d4 points of Constitution damage and fatigues the target. A successful Fortitude saving throw (made after the Constitution damage is applied) negates the fatigue. The creature also suffers the effects of a called shot to the chest.</p>
<p><strong className="hl">Debilitating Blow:</strong> A debilitating blow to the chest deals 2d4 points of Constitution damage and exhausts the target. A successful Fortitude saving throw (made after the Constitution damage is applied) reduces the exhaustion to fatigue. If the saving throw fails by 5 or more, the creature's internal injuries deal 1 point of Constitution damage in any round the creature takes a standard action. The internal injuries can be healed by either a DC 25 Heal check or by healing as many hit points as the debilitating blow dealt, whether by magical or natural means. The creature also suffers the effects of a called shot to the chest.</p>
</>};
const _ear = {title: "Ear", parent_topics: ["optional_combat_changes","called_shots","called_shot_effects"], siblings: ["arm","chest","ear","eye","hand","head","heart","leg","neck","vitals"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 194</Link></p>
<p>Ears are the organs used to hear. Creatures without visible ears generally aren't susceptible to called shots to that location. Called shots to the ear are challenging (-10 penalty).</p>
<p><strong className="hl">Called Shot:</strong> A called shot to the ear deafens that ear for 1 round, and imposes a -2 penalty on Perception checks. A creature that loses hearing in all ears is deafened until hearing is returned by way of the remove blindness/deafness spell or a similar effect.</p>
<p><strong className="hl">Critical Called Shot:</strong> A critical hit to the ear deafens that ear for 2d6 minutes and leaves the target staggered for 1 round. The target also suffers the effects of a called shot to the ear for that duration.</p>
<p><strong className="hl">Debilitating Blow:</strong> A debilitating blow to the ear destroys that ear and stuns the target for 1 round, then leaves it staggered for 1d4 rounds, and deafened until removed with the <Link to="/spell/remove_blindness_deafness">remove blindness/deafness</Link> spell or a similar effect. A successful Fortitude saving throw deafens the creature until it is restored by the <em>remove blindness/deafness</em> spell or a similar effect.</p>
</>};
const _eye = {title: "Eye", parent_topics: ["optional_combat_changes","called_shots","called_shot_effects"], siblings: ["arm","chest","ear","eye","hand","head","heart","leg","neck","vitals"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 195</Link></p>
<p>Eyes include whatever organs a creature uses to see. At the Game Master's discretion, a called shot to the eye can also target sensory organs such as antennae, potentially negating abilities like blindsense. Generally, a creature can't be blinded until it has lost all vision in all of its eyes. Creatures with five or more eyes take no penalties from called shots to their eyes until they're blinded in enough eyes to bring them down a single functional eye, but can still be blinded in that eye by a critical hit or debilitating blow. Called shots to the eye are challenging (-10 penalty).</p>
<p><strong className="hl">Called Shot:</strong> A called shot to the eye gives all of the target's foes <Link to="/rule/concealment">concealment</Link> against its attacks for 1 round and gives it a -2 penalty on Perception checks. If the creature only has one functional eye prior to the called shot, it is blinded for 1 round instead.</p>
<p><strong className="hl">Critical Called Shot:</strong> A critical hit to the eye costs the target sight in that eye for 1d4 minutes. The target also suffers the effects of a called shot to the eye for that duration.</p>
<p><strong className="hl">Debilitating Blow:</strong> A debilitating blow to the eye destroys that eye, causes blindness until the condition is removed with a <Link to="/spell/remove_blindness_deafness">remove blindness/deafness</Link> spell or similar effect, and deals 1d6 points of bleed damage. A successful Reflex saving throw reduces this to 1d4 hours of loss of sight in that eye and eliminates the bleeding. The target also suffers the effects of a called shot to the eye for 2d6 minutes.</p>
</>};
const _hand = {title: "Hand", parent_topics: ["optional_combat_changes","called_shots","called_shot_effects"], siblings: ["arm","chest","ear","eye","hand","head","heart","leg","neck","vitals"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 195</Link></p>
<p>Hands include most extremities used for fine manipulation. Called shots to the hand are tricky (-5 penalty).</p>
<p><strong className="hl">Called Shot:</strong> For 1d4 rounds, any attack rolls, damage rolls, ability checks, or skill checks made using the wounded hand take a -2 penalty, including attack and damage rolls with two-handed weapons. In addition, the target takes a -4 penalty to its CMD to resist disarm attempts, and drops its weapon (if any) on an attack roll result of a natural 1.</p>
<p><strong className="hl">Critical Called Shot:</strong> A critical hit to the hand deals 1d4 points of Dexterity damage. In addition, the target drops anything it is holding in that hand unless it succeeds at a Reflex saving throw. Items held in two hands aren't dropped, but the target still loses its grip with the injured hand. The target also suffers the effects of a called shot to the hand for 1d4 minutes.</p>
<p><strong className="hl">Debilitating Blow:</strong> A debilitating blow deals 1d6 points of Dexterity damage. The blow renders the hand useless until healed unless the target succeeds at a Reflex saving throw. If the saving throw fails by 5 or more, the hand is severed or otherwise mangled such that only <Link to="/spell/regenerate">regenerate</Link> or similar effects can repair it. Regardless of the result of the saving throw, anything held in the wounded hand is automatically dropped, even items held in two or more hands. The target also suffers the effects of a called shot to the hand (if the hand remains usable) for 2d6 minutes.</p>
</>};
const _head = {title: "Head", parent_topics: ["optional_combat_changes","called_shots","called_shot_effects"], siblings: ["arm","chest","ear","eye","hand","head","heart","leg","neck","vitals"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 195</Link></p>
<p>Called shots to the head are tricky (-5 penalty), as most creatures show some skill at dodging attacks aimed at their faces. Some creatures, such as otyughs and purple worms, lack a proper head altogether. Creatures with multiple heads must be hit by called shots to all their heads in a single round to suffer ill effects, and even then, only suffer the least effect that is inflicted on any single head (so for example, an ettin would need to take critical hits to both heads to receive the effects of a critical called shot to the head).</p>
<p><strong className="hl">Called Shot:</strong> A called shot to the head leaves the target sickened for 1d4 rounds.</p>
<p><strong className="hl">Critical Called Shot:</strong> A critical hit to the head deals 1d6 points of Intelligence, Wisdom, or Charisma damage (randomly determine which) and staggers the target for 1d4 rounds. A successful Fortitude saving throw prevents the target from being staggered. The target also suffers the effects of a called shot to the head for 1d4 minutes.</p>
<p><strong className="hl">Debilitating Blow:</strong> A debilitating blow to the head deals 1d6 points of Intelligence, Wisdom, and Charisma damage (roll separately for each), and knocks the target unconscious for 1d10 rounds. A successful Fortitude saving throw prevents the target from being knocked unconscious, but leaves it staggered for 1d10 rounds instead. If the saving throw fails by 5 or more, the target is rendered senseless by severe brain trauma (as the <Link to="/spell/feeblemind">feeblemind</Link> spell) until it receives a <Link to="/spell/heal">heal</Link>, <Link to="/spell/greater_restoration">greater restoration</Link>, or similar effect. The target also suffers the effects of a called shot to the head for 2d6 minutes.</p>
</>};
const _heart = {title: "Heart", parent_topics: ["optional_combat_changes","called_shots","called_shot_effects"], siblings: ["arm","chest","ear","eye","hand","head","heart","leg","neck","vitals"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 196</Link></p>
<p>A called shot to the heart represents an attempt at a killing blow. If the hit isn't either a critical hit or a debilitating blow, the attempt fails and is just a normal hit. A called shot to the heart can be used for any small, likely fatal location on a creature, such as the only weakness on an unimaginably ancient red dragon. Called shots to the heart are challenging (-10 penalty).</p>
<p><strong className="hl">Called Shot:</strong> A called shot to the heart is just a normal hit with no extra effect.</p>
<p><strong className="hl">Critical Called Shot:</strong> A critical hit to the heart pierces the organ, causing exhaustion and 1d4 points of Constitution bleed damage. A successful Fortitude save reduces this to fatigue and 1 point of Constitution bleed damage. In either case, stopping the bleeding requires either <Link to="/spell/regenerate">regenerate</Link> (spell or <Link to="/umr/regeneration">special ability</Link>), magic healing that heals as many points of damage (from one or more sources) as the original blow dealt, or a successful DC 20 heal check that takes 1d4 rounds to complete.</p>
<p>A critical hit to the heart against a vampire made with a piercing weapon composed entirely of wood leaves the vampire impaled through the heart by the weapon if it fails its Fortitude save, <Link to="/template/vampire">with effects as described in its entry</Link>.</p>
<p><strong className="hl">Debilitating Blow:</strong> A debilitating blow to the heart destroys it, instantly killing any creature that relies on its heart to survive. Creatures that succeed at a Fortitude save suffer exhaustion and take 1d6 points of Constitution damage and 1d4 points of Constitution bleed damage, as do creatures that can survive without a heart.</p>
<p>A debilitating blow to the heart against a vampire made with a piercing weapon made entirely of wood affects the vampire as a critical hit to the heart; for example, it still receives a Fortitude save to avoid the consequences.</p>
</>};
const _leg = {title: "Leg", parent_topics: ["optional_combat_changes","called_shots","called_shot_effects"], siblings: ["arm","chest","ear","eye","hand","head","heart","leg","neck","vitals"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 197</Link></p>
<p>Legs are the ambulatory limbs of a creature, including feet. Called shots to the leg have no special effect on creatures with five or more legs. Called shots to the leg are easy (-2 penalty).</p>
<p><strong className="hl">Called Shot:</strong> A called shot to a leg lowers the target creature's speed by 10 feet for 1d4 rounds if it has two or fewer legs, and by 5 feet if it has three or four legs. In either case, the creature's speed cannot be reduced below 5 feet per round. Called shots to the leg have no effect on creatures with five or more legs. Hitting the same leg more than once has no extra effect, but the speed penalty for hits on different legs stack. Additionally, any skill or ability checks involving movement (such as Acrobatics or Swim checks) take a -2 penalty for 1d4 rounds.</p>
<p><strong className="hl">Critical Called Shot:</strong> A critical hit to the leg deals 1d4 points of Dexterity damage and knocks the target prone. A successful Fortitude save keeps the creature from falling prone. The creature also suffers the effects of a called shot to the leg for 1d4 minutes.</p>
<p><strong className="hl">Debilitating Blow:</strong> A debilitating blow to the leg knocks the creature prone. The blow renders the leg entirely useless until healed unless the target succeeds at a Fortitude saving throw. If the saving throw fails by 5 or more, the leg is severed or otherwise mangled such that only <Link to="/spell/regenerate">regenerate</Link> or similar effects can repair it. If the save succeeds, the target is instead lamed and moves at half speed until the leg is healed, or until it receives a successful DC 20 Heal check. A creature with a useless or severed leg moves at half speed if it still has more than half of its legs usable; otherwise, it cannot stand up and must crawl to move. The target also suffers the effects of a called shot to the leg (if the leg remains usable) for 2d6 minutes.</p>
</>};
const _neck = {title: "Neck", parent_topics: ["optional_combat_changes","called_shots","called_shot_effects"], siblings: ["arm","chest","ear","eye","hand","head","heart","leg","neck","vitals"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 197</Link></p>
<p>The neck makes for a difficult but rewarding target. Injuries to the neck keep a creature from speaking easily, and if blood vessels or the windpipe are damaged, such injuries rapidly lead to death. Creatures that lack vulnerable heads generally can't be attacked in the neck either. Called shots to the neck are challenging (-10 penalty).</p>
<p><strong className="hl">Called Shot:</strong> A called shot to the neck makes speaking above a hoarse whisper impossible for 1 round. Spells with verbal components have a 20% chance of failing outright, as do attempts to activate command-word items (although for magic items, the use of the item is not wasted).</p>
<p><strong className="hl">Critical Called Shot:</strong> A critical hit to the neck deals 1d6 points of bleed damage. In addition, the target must succeed at a Fortitude saving throw or suffer a crushed windpipe and be unable to breathe or speak, possibly suffocating. A crushed windpipe can be repaired by magical healing (from one or more sources) that heals as many hit points of damage as the original hit dealt, or by a DC 25 Heal check to open up a hole into the windpipe. The latter check deals 2d6 hit points of damage, and leaves the creature still unable to speak. If target makes its saving throw, it still suffers the effects of a called shot to the neck for 1d4 minutes.</p>
<p><strong className="hl">Debilitating Blow:</strong> A debilitating blow to the neck leaves the target unable to speak or breathe and deals 1d4 points of Constitution bleed damage. A successful Fortitude saving throw reduces this to 2d6 points of regular (hit point) bleed damage, and the target is only unable to speak and breathe for 1d4 minutes. The Constitution bleed damage caused by a debilitating blow to the neck can only be stopped by <Link to="/spell/regenerate">regenerate</Link> (spell or <Link to="/umr/regeneration">special ability</Link>), magical healing (from one or more sources) that heals as many points of damage as the original blow dealt, or a DC 20 Heal check that takes 1d4 rounds to complete.</p>
</>};
const _vitals = {title: "Vitals", parent_topics: ["optional_combat_changes","called_shots","called_shot_effects"], siblings: ["arm","chest","ear","eye","hand","head","heart","leg","neck","vitals"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 197</Link></p>
<p>The vitals correspond to the abdomen on a humanoid: critical organs not well-protected by bone. Attacks on the vitals can also include dastardly "low blows." Vitals for non-humanoid creatures can include nearly any location that is relatively hard to hit, poorly protected, and debilitating if struck. Called shots to the vitals are tricky (-5 penalty).</p>
<p><strong className="hl">Called Shot:</strong> A called shot to the vitals leaves the target sickened for 1d4 rounds. A successful Fortitude save reduces this duration to 1 round. While sickened from the blow, the target cannot run or charge.</p>
<p><strong className="hl">Critical Called Shot:</strong> A critical hit deals 1d4 points of Constitution damage. In addition, the target is nauseated for 1d4 rounds and sickened for 1d6 minutes. A successful Fortitude saving throw negates the nauseated condition. While the target is sickened from the blow, it cannot run or charge.</p>
<p><strong className="hl">Debilitating Blow:</strong> A debilitating blow to the vitals deals 1d6 points of Constitution drain, nauseates the target for 1d4 rounds, and sickens it for 2d6 minutes. A successful Fortitude save reduces the drain to damage and the nausea to 1 round. If the save fails by 5 or more, the target is disemboweled or otherwise horrifically wounded, and takes 1 point of Constitution bleed damage. The Constitution bleed damage caused by a debilitating blow to the vitals can only be stopped by <Link to="/spell/regenerate">regenerate</Link> (spell or <Link to="/umr/regeneration">special ability</Link>), magical healing that heals as many points of damage (from one or more sources) as the original blow dealt, or a DC 20 Heal check that takes 1d4 rounds to complete.</p>
</>};
const _piecemeal_armor = {title: "Piecemeal Armor", parent_topics: ["optional_combat_changes"], siblings: ["armor_as_damage_reduction","called_shots","piecemeal_armor","removing_iterative_attacks","revised_action_economy","wound_thresholds","wounds_and_vigor"], subtopics: ["armor_pieces_and_armor_suits","armor_pieces_and_proficiency","masterwork_special_material_and_magic_armor","getting_into_and_out_of_armor_pieces","armor_pieces_for_unusual_creatures","armor_and_armor_piece_hit_points_and_hardness","armor_piece_descriptions"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 198</Link></p>
<p>All armor in the Pathfinder Roleplaying Game is constructed of pieces and parts that are carefully (or hastily) donned each time the armor is used. While a full suit of armor is always more protective than wearing pieces of armor, sometimes a character does not have time to don an entire suit of armor before jumping into the fray. Other times characters may not have access to an entire suit of armor; in dire situations, they may need to find pieces or parts of armor among lower-level treasure hoards, or they have to scavenge from the bodies of fallen foes in order to protect themselves.</p>
<p>The following rules allow you to introduce piecemeal armor into your campaign. All of the armors presented are separated into three different and distinct sections or pieces: arms, legs, and torso.</p>
</>};
const _armor_pieces_and_armor_suits = {title: "Armor Pieces and Armor Suits", parent_topics: ["optional_combat_changes","piecemeal_armor"], siblings: ["armor_pieces_and_armor_suits","armor_pieces_and_proficiency","masterwork_special_material_and_magic_armor","getting_into_and_out_of_armor_pieces","armor_pieces_for_unusual_creatures","armor_and_armor_piece_hit_points_and_hardness","armor_piece_descriptions"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 198</Link></p>
<p>The piecemeal armor system splits up armor into three general types of armor pieces. An armor piece is a small group of armor parts, rather than simply being any discrete part of the armor. A single armor piece comprises the armor parts one needs to protect its corresponding area - either the arms, the legs, or the torso (including the head); a single arm or leg armor piece provides armor for both arms or both legs, respectively. A plate arm armor piece typically consists of pairs of pauldrons, gardbraces, rerebraces, vambraces, and gauntlets along with bits of chainmail and padded armor, while a chain lamellar arm armor piece consists of two chain sleeves, gauntlets, and perhaps pairs of pauldrons and couters. Both protect the arms, though they have a different number of specific parts and types of overall components.</p>
<p>The protective qualities of each individual piece of armor are listed in Table 5-7: Arm Armor Pieces, Table 5-8: Leg Armor Pieces, and Table 5-9: Torso Armor Pieces. If a character has only one armor piece, that piece is considered the totality of her armor, and she uses the statistics of that piece as her armor. If a character is wearing more than one armor piece, she add the armor costs, armor bonuses, and weights of the armor pieces, and takes the worst maximum Dexterity bonus, arcane spell failure chance, and speed limitations from among the various armor pieces to determine the full statistics and qualities of the armor she is wearing. As long as she is wearing a single armor piece, she is considered to be wearing armor for any effects that rely on wearing armor (such as the fighter class's armor training and armor mastery).</p>
<p>If a character is wearing all three categories of armor pieces, she is wearing a suit of armor. Suits of armor can have all armor pieces of the same type (all three plate pieces make a suit of full plate), or a mixture of armor pieces (a plate arm armor piece and torso armor piece combined with a chainmail leg armor piece creates a suit of half-plate).</p>
<p>Wearing an entire suit, whether its pieces are mixed or the same type, grants a +1 armor bonus on top of the protection the combination of pieces already grants the wearer. Wearing a mixed suit of armor increases the arcane spell failure chance by 5% because of the awkwardness of the design. Wearing less than a full suit of mixed armor does not increase the wearer's arcane spell failure chance. For example, if you wear a breastplate with a plate arm armor piece and a chain leg armor piece, you should consult Table 5-5: Half-Plate Suit Pieces for your armor's statistics. The top line lists the cost, bonuses, penalties, and so on for the half-plate suit as a whole, and the lines below list the statistics for the component pieces, as well as the benefits that result from the pieces constituting a suit.</p>
<h3 id="rule-armor_pieces_and_armor_suits-table-5-5-half-plate-suit-pieces">Table 5-5: Half-Plate Suit Pieces</h3>
<ScrollContainer id="rule-armor_pieces_and_armor_suits--table-0"><table>
<thead>
<tr>
<th>Armor Type</th>
<th>Cost</th>
<th>Armor Bonus</th>
<th>Maximum Dex Bonus</th>
<th>Armor Check Penalty</th>
<th>Arcane Spell Failure Chance</th>
<th>Speed 30 ft.</th>
<th>Speed 20 ft.</th>
<th>Weight</th>
</tr>
</thead>
<tbody><tr>
<td>Half-plate</td>
<td>600 gp</td>
<td>+8</td>
<td>+0</td>
<td>-7</td>
<td>40%</td>
<td>20 ft.</td>
<td>15 ft.</td>
<td>50 lbs.</td>
</tr>
<tr>
<td>(plate arm armor piece)</td>
<td>375 gp</td>
<td>+1</td>
<td>+0</td>
<td>-7</td>
<td>35%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>10 lbs.</td>
</tr>
<tr>
<td>(chain leg armor piece)</td>
<td>25 gp</td>
<td>+0</td>
<td>+2</td>
<td>-2</td>
<td>15%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>10 lbs.</td>
</tr>
<tr>
<td>(plate torso armor piece)</td>
<td>200 gp</td>
<td>+6</td>
<td>+3</td>
<td>-4</td>
<td>35%</td>
<td>20 ft.</td>
<td>15 ft.</td>
<td>30 lbs.</td>
</tr>
<tr>
<td>(suit)</td>
<td>-</td>
<td>+1</td>
<td>-</td>
<td>-</td>
<td>+5%</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _armor_pieces_and_proficiency = {title: "Armor Pieces and Proficiency", parent_topics: ["optional_combat_changes","piecemeal_armor"], siblings: ["armor_pieces_and_armor_suits","armor_pieces_and_proficiency","masterwork_special_material_and_magic_armor","getting_into_and_out_of_armor_pieces","armor_pieces_for_unusual_creatures","armor_and_armor_piece_hit_points_and_hardness","armor_piece_descriptions"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 198</Link></p>
<p>If you are proficient with an armor category, you are also proficient with the armor pieces of that category. For example, if you are proficient with light armor, you are proficient with all light armor pieces. Some torso armor pieces (such as chain, plate, and agile plate torso armor pieces) are a category lighter if worn alone (treat as a chain shirt, breastplate, and agile breastplate, respectively).</p>
<p>When a character is wearing at least one armor piece of a type with which he is not proficient, he takes the armor check penalty of that piece on attack rolls and on all skill checks that involve moving. If he is wearing more than one armor piece of a type with which he is not proficient, he takes the worst armor check penalty from among the pieces he is not proficient with on attack rolls and on all skill checks that involve moving.</p>
</>};
const _masterwork_special_material_and_magic_armor = {title: "Masterwork, Special Material, and Magic Armor", parent_topics: ["optional_combat_changes","piecemeal_armor"], siblings: ["armor_pieces_and_armor_suits","armor_pieces_and_proficiency","masterwork_special_material_and_magic_armor","getting_into_and_out_of_armor_pieces","armor_pieces_for_unusual_creatures","armor_and_armor_piece_hit_points_and_hardness","armor_piece_descriptions"], subtopics: ["adamantine","dragonhide","mithral"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 199</Link></p>
<p>Any individual armor piece can be of masterwork construction or constructed of special materials, or, if it is of masterwork construction, it can be magically enchanted at the standard cost listed in the Core Rulebook. In this manner, each armor piece is treated as its own type of armor, but most armorers and magic item crafters know that this is an inefficient way of making and enchanting armor.</p>
<p>The most efficient way to create masterwork armor or to enchant magical armor is to create or enchant the same suit. In order to do this, the suit's pieces need not all be of the same type, but they must be constructed and then enchanted together. The drawback is that none of the individual pieces are considered masterwork or magical on their own (though if magic, they do detect as magic, and can be identified as part of an armor suit). When used as piecemeal armor, they function like normal pieces of nonmagical and non-masterwork pieces of armor of their type.</p>
<p>If a character is wearing pieces of separately created or enchanted armor, the armor only takes the benefits provided by the masterwork quality and the magic of the most protective piece, typically the torso armor piece. If a character does not wear a torso armor piece, the most protective piece is the leg armor piece (the second most protective category of armor pieces), followed by the arm armor piece (the third most protective category).</p>
<p>For instance, if a character does not wear a torso or leg armor piece, but wears a +1 chain arm armor piece, she gains the benefit of wearing magic armor (the piece acts as masterwork and has a +1 enhancement bonus due to the enchantment). If that character then puts on a normal chain torso armor piece, she loses the +1 bonus due to magic and the reduction of armor check penalties for being masterwork, as the most protective armor piece no longer has either of these qualities.</p>
<p>In order for the armor to gain the benefits of a special material, all armor pieces worn must be made of the same special material. Because of this, armor pieces constructed of special materials can be constructed at a decreased cost based on which pieces are made of the special material. Constructing a whole suit of armor with the same special materials uses the standard costs detailed in the Core Rulebook.</p>
<p>In the case of chain shirts, breastplates, agile breastplates, and any other armor pieces that are treated as a category lighter when worn alone, to determine the cost of creating that piece of armor from a special material, use the base armor category (medium in the case of a chain torso armor piece, and heavy in the case of a plate torso armor piece) when pricing the item, but in the case of adamantine and similar armors, the item gains the material benefit of the lighter category (damage reduction 1/- in the case of the chain torso armor piece worn as a chain shirt, or damage reduction 2/- in the case of plate torso armor piece worn as a breastplate).</p>
</>};
const _adamantine = {title: "Adamantine", parent_topics: ["optional_combat_changes","piecemeal_armor","masterwork_special_material_and_magic_armor"], siblings: ["adamantine","dragonhide","mithral"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 199</Link></p>
<p>Armor pieces made of adamantine grant their wearers damage reduction of 1/- if they are light armor, 2/- if they are medium armor, and 3/- if they are heavy armor. Adamantine armor pieces are always masterwork in quality. Armor pieces normally made of steel that are made of adamantine have one-third more hit points than normal.</p>
<ScrollContainer id="rule-adamantine--table-0"><table>
<thead>
<tr>
<th>Type of Adamantine Item</th>
<th>Item Cost Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Medium arm armor piece</td>
<td>2,500 gp</td>
</tr>
<tr>
<td>Medium leg armor piece</td>
<td>2,500 gp</td>
</tr>
<tr>
<td>Medium torso armor piece</td>
<td>5,000 gp</td>
</tr>
<tr>
<td>Heavy arm armor piece</td>
<td>2,500 gp</td>
</tr>
<tr>
<td>Heavy leg armor piece</td>
<td>2,500 gp</td>
</tr>
<tr>
<td>Heavy torso armor piece</td>
<td>10,000 gp</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _dragonhide = {title: "Dragonhide", parent_topics: ["optional_combat_changes","piecemeal_armor","masterwork_special_material_and_magic_armor"], siblings: ["adamantine","dragonhide","mithral"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 199</Link></p>
<p>If the dragonhide used to construct this armor comes from a dragon that had immunity to an energy type, the armor pieces also have immunity to that energy type. A piece of dragonhide armor costs double the armor piece cost + 100 gp. Alternatively, a plate torso armor piece can be constructed from dragonhide for 700 gp, and an agile plate torso armor piece can be constructed from dragonhide for 1,100 gp. Dragonhide armor pieces retain dragonhide's usual 25% reduction in cost when adding matching energy protection to them.</p>
</>};
const _mithral = {title: "Mithral", parent_topics: ["optional_combat_changes","piecemeal_armor","masterwork_special_material_and_magic_armor"], siblings: ["adamantine","dragonhide","mithral"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 199</Link></p>
<p>Armor pieces made of mithral are lighter than steel, but are just as hard. Mithral armor pieces are less cumbersome to move in. Medium armor pieces that feature a reduced movement do not have a reduced movement when they are made from mithral. Heavy armor pieces that reduce the wearer's run speed to triple her speed instead of quadruple her speed do not do so when they are made from mithral or are part of a mithral armor suit.</p>
<p>As long as all the armor pieces a character wears are made of mithral, the spell failure chance decreases by 10%, the maximum Dexterity bonus increases by 2, and the armor check penalty decreases by 3 (to a minimum of 0).</p>
<p>An item made of mithral weighs half as much as the same item made from other metals. Armor pieces made of mithral are also considered masterwork.</p>
<ScrollContainer id="rule-mithral--table-0"><table>
<thead>
<tr>
<th>Type of Mithral Item</th>
<th>Item Cost Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Medium arm armor piece</td>
<td>1,500 gp</td>
</tr>
<tr>
<td>Medium leg armor piece</td>
<td>1,500 gp</td>
</tr>
<tr>
<td>Medium torso armor piece</td>
<td>1,000 gp</td>
</tr>
<tr>
<td>Heavy arm armor piece</td>
<td>2,500 gp</td>
</tr>
<tr>
<td>Heavy leg armor piece</td>
<td>2,500 gp</td>
</tr>
<tr>
<td>Heavy torso armor piece</td>
<td>4,000 gp</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _getting_into_and_out_of_armor_pieces = {title: "Getting Into and Out of Armor Pieces", parent_topics: ["optional_combat_changes","piecemeal_armor"], siblings: ["armor_pieces_and_armor_suits","armor_pieces_and_proficiency","masterwork_special_material_and_magic_armor","getting_into_and_out_of_armor_pieces","armor_pieces_for_unusual_creatures","armor_and_armor_piece_hit_points_and_hardness","armor_piece_descriptions"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 200</Link></p>
<p>The time required to don an armor piece is based on its type and the area it protects; see Table 5-6.</p>
<p><strong className="hl">Don:</strong> This column tells how long it takes a character to put on the armor piece. (One minute is 10 rounds.) Don Hastily: This column tells how long it takes a character to put on the armor piece in a hurry. The armor check penalty and armor bonus for hastily donned armor are each 1 point worse than normal (minimum 0 in the case of armor bonus).</p>
<p><strong className="hl">Remove:</strong> This column tells how long it takes a character to remove the armor piece.</p>
<h3 id="rule-getting_into_and_out_of_armor_pieces-table-5-6-donning-armor-pieces">Table 5-6: Donning Armor Pieces</h3>
<ScrollContainer id="rule-getting_into_and_out_of_armor_pieces--table-0"><table>
<thead>
<tr>
<th>Armor Piece Type and Protective Area</th>
<th>Don</th>
<th>Don Hastily</th>
<th>Remove</th>
</tr>
</thead>
<tbody><tr>
<td>Light arm armor piece</td>
<td>2 rounds</td>
<td>1 round</td>
<td>2 rounds<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-1" id="rule-getting_into_and_out_of_armor_pieces-ref-1-1" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-1">1</InnerLink></sup></td>
</tr>
<tr>
<td>Light leg armor piece</td>
<td>3 rounds</td>
<td>2 rounds</td>
<td>2 rounds<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-2" id="rule-getting_into_and_out_of_armor_pieces-ref-1-2" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-1">1</InnerLink></sup></td>
</tr>
<tr>
<td>Light torso armor piece</td>
<td>5 rounds</td>
<td>2 rounds</td>
<td>5 rounds<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-3" id="rule-getting_into_and_out_of_armor_pieces-ref-1-3" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-1">1</InnerLink></sup></td>
</tr>
<tr>
<td>Medium arm armor piece</td>
<td>1 minute<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-4" id="rule-getting_into_and_out_of_armor_pieces-ref-1-4" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-1">1</InnerLink></sup></td>
<td>2 rounds</td>
<td>2 rounds<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-5" id="rule-getting_into_and_out_of_armor_pieces-ref-1-5" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-1">1</InnerLink></sup></td>
</tr>
<tr>
<td>Medium leg armor piece</td>
<td>1 minute<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-6" id="rule-getting_into_and_out_of_armor_pieces-ref-1-6" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-1">1</InnerLink></sup></td>
<td>3 rounds</td>
<td>2 rounds<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-7" id="rule-getting_into_and_out_of_armor_pieces-ref-1-7" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-1">1</InnerLink></sup></td>
</tr>
<tr>
<td>Medium torso armor piece</td>
<td>1 minute<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-8" id="rule-getting_into_and_out_of_armor_pieces-ref-1-8" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-1">1</InnerLink></sup></td>
<td>5 rounds</td>
<td>3 rounds<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-9" id="rule-getting_into_and_out_of_armor_pieces-ref-1-9" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-1">1</InnerLink></sup></td>
</tr>
<tr>
<td>Heavy arm armor piece</td>
<td>1 minute<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-10" id="rule-getting_into_and_out_of_armor_pieces-ref-1-10" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-1">1</InnerLink></sup></td>
<td>1 minute<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-11" id="rule-getting_into_and_out_of_armor_pieces-ref-1-11" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-1">1</InnerLink></sup></td>
<td>1 minute<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-12" id="rule-getting_into_and_out_of_armor_pieces-ref-1-12" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-1">1</InnerLink></sup></td>
</tr>
<tr>
<td>Heavy leg armor piece</td>
<td>1 minute<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-13" id="rule-getting_into_and_out_of_armor_pieces-ref-1-13" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-1">1</InnerLink></sup></td>
<td>1 minute<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-14" id="rule-getting_into_and_out_of_armor_pieces-ref-1-14" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-1">1</InnerLink></sup></td>
<td>1 minute<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-15" id="rule-getting_into_and_out_of_armor_pieces-ref-1-15" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-1">1</InnerLink></sup></td>
</tr>
<tr>
<td>Heavy torso armor piece</td>
<td>2 minutes<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor_pieces-ref-2-1" id="rule-getting_into_and_out_of_armor_pieces-ref-2-1" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-2">2</InnerLink></sup></td>
<td>1 minute<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-16" id="rule-getting_into_and_out_of_armor_pieces-ref-1-16" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-1">1</InnerLink></sup></td>
<td>2 minutes<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-17" id="rule-getting_into_and_out_of_armor_pieces-ref-1-17" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-1">1</InnerLink></sup></td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-getting_into_and_out_of_armor_pieces-label">Footnotes</h3>
<ol>
<li id="rule-getting_into_and_out_of_armor_pieces-1">
<p>If the character has some help, this time is halved. A single character doing nothing else can help one or two adjacent creatures. Two characters can't help each other don or remove armor pieces at the same time. <InnerLink id="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-1" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink> <InnerLink id="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-2" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-ref-1-2" aria-label="Back to reference 1-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-3" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-ref-1-3" aria-label="Back to reference 1-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-4" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-ref-1-4" aria-label="Back to reference 1-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-5" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-ref-1-5" aria-label="Back to reference 1-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-6" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-ref-1-6" aria-label="Back to reference 1-6">↩<sup>6</sup></InnerLink> <InnerLink id="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-7" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-ref-1-7" aria-label="Back to reference 1-7">↩<sup>7</sup></InnerLink> <InnerLink id="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-8" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-ref-1-8" aria-label="Back to reference 1-8">↩<sup>8</sup></InnerLink> <InnerLink id="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-9" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-ref-1-9" aria-label="Back to reference 1-9">↩<sup>9</sup></InnerLink> <InnerLink id="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-10" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-ref-1-10" aria-label="Back to reference 1-10">↩<sup>10</sup></InnerLink> <InnerLink id="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-11" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-ref-1-11" aria-label="Back to reference 1-11">↩<sup>11</sup></InnerLink> <InnerLink id="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-12" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-ref-1-12" aria-label="Back to reference 1-12">↩<sup>12</sup></InnerLink> <InnerLink id="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-13" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-ref-1-13" aria-label="Back to reference 1-13">↩<sup>13</sup></InnerLink> <InnerLink id="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-14" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-ref-1-14" aria-label="Back to reference 1-14">↩<sup>14</sup></InnerLink> <InnerLink id="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-15" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-ref-1-15" aria-label="Back to reference 1-15">↩<sup>15</sup></InnerLink> <InnerLink id="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-16" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-ref-1-16" aria-label="Back to reference 1-16">↩<sup>16</sup></InnerLink> <InnerLink id="backlink-rule-getting_into_and_out_of_armor_pieces-ref-1-17" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-ref-1-17" aria-label="Back to reference 1-17">↩<sup>17</sup></InnerLink></p>
</li>
<li id="rule-getting_into_and_out_of_armor_pieces-2">
<p>The wearer must have help to don this armor piece. Without help, it can only be donned hastily. <InnerLink id="backlink-rule-getting_into_and_out_of_armor_pieces-ref-2-1" data-hash-target to="rule-getting_into_and_out_of_armor_pieces-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _armor_pieces_for_unusual_creatures = {title: "Armor Pieces for Unusual Creatures", parent_topics: ["optional_combat_changes","piecemeal_armor"], siblings: ["armor_pieces_and_armor_suits","armor_pieces_and_proficiency","masterwork_special_material_and_magic_armor","getting_into_and_out_of_armor_pieces","armor_pieces_for_unusual_creatures","armor_and_armor_piece_hit_points_and_hardness","armor_piece_descriptions"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 200</Link></p>
<p>Armor pieces for unusually big creatures, unusually little creatures, and non-humanoid creatures (such as horses) have different costs and weights from those given in Tables <Link to="/rule/arms">5-7</Link>, <Link to="/rule/legs">5-8</Link>, and <Link to="/rule/torso">5-9</Link>. Refer to the appropriate line in <Link to="/rule/armor_for_unusual_creatures">Table 6-8</Link> and apply the multipliers to cost and weight. For animals with four or more legs, the armor for half of the legs counts as the leg armor piece, and the armor for the other half counts as the arm armor piece.</p>
</>};
const _armor_and_armor_piece_hit_points_and_hardness = {title: "Armor and Armor Piece Hit Points and Hardness", parent_topics: ["optional_combat_changes","piecemeal_armor"], siblings: ["armor_pieces_and_armor_suits","armor_pieces_and_proficiency","masterwork_special_material_and_magic_armor","getting_into_and_out_of_armor_pieces","armor_pieces_for_unusual_creatures","armor_and_armor_piece_hit_points_and_hardness","armor_piece_descriptions"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 200</Link></p>
<p>To determine the hit points and hardness of your armor, use the hardness for the weakest material, and to determine hit points, add the total armor bonus (including the +1 for wearing a complete suit of armor) and multiply that value by 5. If you need to determine the hardness and hit points for a single armor piece, it has the hardness of its main material and hit points equal to its armor bonus (treat as +1 for armor pieces with a +0 armor bonus) &times; 5. <Link to="/rule/breaking_things">Hardness for substances can be found in Table 7-13</Link>.</p>
</>};
const _armor_piece_descriptions = {title: "Armor Piece Descriptions", parent_topics: ["optional_combat_changes","piecemeal_armor"], siblings: ["armor_pieces_and_armor_suits","armor_pieces_and_proficiency","masterwork_special_material_and_magic_armor","getting_into_and_out_of_armor_pieces","armor_pieces_for_unusual_creatures","armor_and_armor_piece_hit_points_and_hardness","armor_piece_descriptions"], subtopics: ["arms","legs","torso"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 200</Link></p>
<p>The following pieces of armor make up the piecemeal armor system, and are split into three armor groups.</p>
</>};
const _arms = {title: "Arms", parent_topics: ["optional_combat_changes","piecemeal_armor","armor_piece_descriptions"], siblings: ["arms","legs","torso"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 200</Link></p>
<p>With the smallest area to protect, arm armor pieces tend to have the lowest armor value of all the piecemeal armor types, with light armor pieces offering little to no protection unless they are part of a complete suit. Because arm armor pieces tend to interfere with hand movements needed for somatic components, they offer the highest spell failure chance.</p>
<h3 id="rule-arms-table-5-7-arm-armor-pieces">Table 5-7: Arm Armor Pieces</h3>
<ScrollContainer id="rule-arms--table-0"><table>
<thead>
<tr>
<th>Armor Category</th>
<th>Armor Type</th>
<th>Cost</th>
<th>Armor Bonus</th>
<th>Maximum Dex Bonus</th>
<th>Armor Check Penalty</th>
<th>Arcane Spell Failure Chance</th>
<th>30 ft.</th>
<th>20 ft.</th>
<th>Weight<sup><InnerLink showBacklink="backlink-rule-arms-ref-1-1" id="rule-arms-ref-1-1" data-hash-target to="rule-arms-1">1</InnerLink></sup></th>
</tr>
</thead>
<tbody><tr>
<td>Light</td>
<td>Lamellar, leather</td>
<td>15 gp</td>
<td>+0</td>
<td>+3</td>
<td>-1</td>
<td>20%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>5 lbs.</td>
</tr>
<tr>
<td>Light</td>
<td>Leather</td>
<td>2 gp</td>
<td>+0</td>
<td>+6</td>
<td>0</td>
<td>10%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>2 lbs.</td>
</tr>
<tr>
<td>Light</td>
<td>Padded</td>
<td>1 gp</td>
<td>+0</td>
<td>+6</td>
<td>0</td>
<td>5%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>2 lbs.</td>
</tr>
<tr>
<td>Light</td>
<td>Quilted cloth</td>
<td>25 gp</td>
<td>+0</td>
<td>+8</td>
<td>0</td>
<td>10%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>2 lbs.</td>
</tr>
<tr>
<td>Light</td>
<td>Studded leather</td>
<td>5 gp</td>
<td>+0</td>
<td>+5</td>
<td>0</td>
<td>15%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>2 lbs.</td>
</tr>
<tr>
<td>Light</td>
<td>Wooden</td>
<td>5 gp</td>
<td>+0</td>
<td>+3</td>
<td>-1</td>
<td>15%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>3 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Hide</td>
<td>2 gp</td>
<td>+0</td>
<td>+4</td>
<td>-2</td>
<td>20%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>3 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Kikko</td>
<td>5 gp</td>
<td>+0</td>
<td>+5</td>
<td>-1</td>
<td>20%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>5 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Chain</td>
<td>25 gp</td>
<td>+1</td>
<td>+2</td>
<td>-3</td>
<td>30%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>5 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Lamellar, horn</td>
<td>25 gp</td>
<td>+1</td>
<td>+5</td>
<td>-2</td>
<td>25%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>5 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Lamellar, steel</td>
<td>25 gp</td>
<td>+1</td>
<td>+3</td>
<td>-2</td>
<td>25%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>5 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Mountain pattern</td>
<td>50 gp</td>
<td>+1</td>
<td>+3</td>
<td>-2</td>
<td>30%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>10 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Scale</td>
<td>10 gp</td>
<td>+1</td>
<td>+3</td>
<td>-2</td>
<td>25%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>5 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>Agile plate</td>
<td>425 gp</td>
<td>+1</td>
<td>+0</td>
<td>-7</td>
<td>40%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>5 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>Banded</td>
<td>50 gp</td>
<td>+1</td>
<td>+1</td>
<td>-3</td>
<td>35%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>5 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>Kusari gusoku</td>
<td>50 gp</td>
<td>+1</td>
<td>+1</td>
<td>-3</td>
<td>35%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>5 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>Lamellar, iron</td>
<td>50 gp</td>
<td>+1</td>
<td>+0</td>
<td>-4</td>
<td>40%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>10 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>O-yoroi</td>
<td>250 gp</td>
<td>+1</td>
<td>+2</td>
<td>-5</td>
<td>35%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>5 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>Plate</td>
<td>375 gp</td>
<td>+1</td>
<td>+1</td>
<td>-7</td>
<td>35%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>10 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>Splint</td>
<td>50 gp</td>
<td>+1</td>
<td>+0</td>
<td>-4</td>
<td>20%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>5 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>Tatami-do</td>
<td>100 gp</td>
<td>+1</td>
<td>+3</td>
<td>-5</td>
<td>35%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>5 lbs.</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Agile Plate Arm Armor Piece:</strong> This armor piece consists of pauldrons, gardbraces, rerebraces, vambraces, and gauntlets all cunningly designed to increase the maneuverability of the wearer. When worn alone, with an agile plate torso armor piece, or with an agile plate torso armor piece and a chain leg armor piece (or lighter armor), the armor check penalty for Climb skill and jump checks is only -4 (masterwork and mithral versions of this armor and the above armor piece combination reduce this penalty as well as the normal penalty).</p>
<p><strong className="hl">Banded Arm Armor Piece:</strong> These overlapping strips of metal on leather usually take the form of long sleeves connected to pauldrons of the same material at the top of the sleeves and a pair of metal gauntlets at the hands of the armor piece.</p>
<p><strong className="hl">Chain Arm Armor Piece:</strong> This arm armor piece typically takes the form of sleeves of loose-fitting chain fitted to the shoulder, or separate lengths of chain attached to pauldrons and couters, and ending in a pair of gauntlets at the hands.</p>
<p><strong className="hl">Hide Arm Armor Piece:</strong> This arm armor piece consists of sleeves crafted from the tanned and preserved skin of a thick-skinned beast.</p>
<p><strong className="hl">Horn Lamellar Arm Armor Piece:</strong> This arm armor piece is constructed of a number of horn plates laced together in parallel rows and reinforced with leather.</p>
<p><strong className="hl">Iron Lamellar Arm Armor Piece:</strong> This arm armor piece is constructed of a number of iron plates laced together in parallel rows and reinforced with pieces of chainmail.</p>
<p><strong className="hl">Kikko Arm Armor Piece:</strong> This arm armor piece consists of sleeves of leather reinforced by hexagonal plates made from iron.</p>
<p><strong className="hl">Kusari Gusoku Arm Armor Piece:</strong> This arm armor piece is constructed of light lamellar shoulder guards and lacquered sleeves.</p>
<p><strong className="hl">Leather Arm Armor Piece:</strong> This arm armor piece consists of sleeves of hard-boiled leather that are carefully sewn together.</p>
<p><strong className="hl">Leather Lamellar Arm Armor Piece:</strong> Similar to a leather arm armor piece, a leather lamellar arm armor piece is constructed of a number of discrete hard-boiled leather plates laced together in parallel rows.</p>
<p><strong className="hl">Mountain Pattern Arm Armor Piece:</strong> These sleeves are made from many interlocking pieces of steel shaped to resemble a symbol for the word "mountain" and riveted onto cloth.</p>
<p><strong className="hl">O-Yoroi Arm Armor Piece:</strong> This armor piece consists of steel lamellar shoulder guards, and sleeves made of metal reinforced with leather. O-yoroi arms end in gauntlets.</p>
<p><strong className="hl">Padded Arm Armor Piece:</strong> These sleeves are made of heavy or quilted cloth.</p>
<p><strong className="hl">Plate Arm Armor Piece:</strong> A plate lamellar is composed of pauldrons, gardbraces, rerebraces, vambraces, and gauntlets, along with bits of chainmail and padded armor.</p>
<p><strong className="hl">Quilted Cloth Arm Armor Piece:</strong> These sleeves are made of heavy quilted cloth specially designed to trap arrows and other ranged piercing weapons. When worn alone, or with only other quilted cloth pieces, you gain DR 3/- against ranged piercing weapons.</p>
<p><strong className="hl">Scale Arm Armor Piece:</strong> These sleeves are made up of dozens of small overlapping metal plates. A scale arm armor piece includes a pair of gauntlets.</p>
<p><strong className="hl">Splint Arm Armor Piece:</strong> These sleeves are constructed of metal strips reinforced with chain mail. A splint arm armor piece includes a pair of gauntlets.</p>
<p><strong className="hl">Steel Lamellar Arm Armor Piece:</strong> These sleeves are constructed of a number of steel plates laced together in parallel rows. A steel lamellar arm armor piece includes a pair of gauntlets.</p>
<p><strong className="hl">Studded Leather Arm Armor Piece:</strong> These sleeves are constructed of hard-boiled leather carefully sewn together and reinforced with metal studs.</p>
<p><strong className="hl">Tatami-Do Arm Armor Piece:</strong> A lighter version of o-yoroi armor, a tatami-do arm armor piece is composed of a lighter lamellar shoulder guard and a lacquered sleeve. A set of tatami-do arm armor pieces includes a pair of gauntlets.</p>
<p><strong className="hl">Wooden Arm Armor Piece:</strong> These sleeves are constructed of fire-treated wood sewn over leather.</p>
<section data-footnotes>
<h3 id="rule-arms-label">Footnotes</h3>
<ol>
<li id="rule-arms-1">
<p>Weight figures are for armor pieces sized to fit Medium characters. Armor pieces fitted for Small characters weigh half as much, and armor pieces fitted for Large characters weigh twice as much. <InnerLink id="backlink-rule-arms-ref-1-1" data-hash-target to="rule-arms-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _legs = {title: "Legs", parent_topics: ["optional_combat_changes","piecemeal_armor","armor_piece_descriptions"], siblings: ["arms","legs","torso"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 202</Link></p>
<p>Heavier leg armor pieces slow down their wearers and provide higher armor check penalties, but are less restrictive to spellcasters than heavier arm armor pieces.</p>
<h3 id="rule-legs-table-5-8-leg-armor-pieces">Table 5-8: Leg Armor Pieces</h3>
<ScrollContainer id="rule-legs--table-0"><table>
<thead>
<tr>
<th>Armor Category</th>
<th>Armor Type</th>
<th>Cost</th>
<th>Armor Bonus</th>
<th>Maximum Dex Bonus</th>
<th>Armor Check Penalty</th>
<th>Arcane Spell Failure Chance</th>
<th>Speed 30 ft.</th>
<th>Speed 20 ft.</th>
<th>Weight<sup><InnerLink showBacklink="backlink-rule-legs-ref-1-1" id="rule-legs-ref-1-1" data-hash-target to="rule-legs-1">1</InnerLink></sup></th>
</tr>
</thead>
<tbody><tr>
<td>Light</td>
<td>Leather</td>
<td>3 gp</td>
<td>+0</td>
<td>+6</td>
<td>0</td>
<td>0%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>3 lbs.</td>
</tr>
<tr>
<td>Light</td>
<td>Padded</td>
<td>1 gp</td>
<td>+0</td>
<td>+8</td>
<td>0</td>
<td>0%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>3 lbs.</td>
</tr>
<tr>
<td>Light</td>
<td>Quilted cloth</td>
<td>25 gp</td>
<td>+0</td>
<td>+8</td>
<td>0</td>
<td>5%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>3 lbs.</td>
</tr>
<tr>
<td>Light</td>
<td>Lamellar, leather</td>
<td>15 gp</td>
<td>+1</td>
<td>+2</td>
<td>-1</td>
<td>10%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>10 lbs.</td>
</tr>
<tr>
<td>Light</td>
<td>Studded leather</td>
<td>5 gp</td>
<td>+1</td>
<td>+5</td>
<td>0</td>
<td>10%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>3 lbs.</td>
</tr>
<tr>
<td>Light</td>
<td>Wooden</td>
<td>5 gp</td>
<td>+1</td>
<td>+3</td>
<td>-1</td>
<td>5%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>7 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Chain</td>
<td>25 gp</td>
<td>+0</td>
<td>+2</td>
<td>-2</td>
<td>15%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>10 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Hide</td>
<td>3 gp</td>
<td>+1</td>
<td>+4</td>
<td>-2</td>
<td>10%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>7 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Kikko</td>
<td>10 gp</td>
<td>+1</td>
<td>+3</td>
<td>-1</td>
<td>10%</td>
<td>20 ft.</td>
<td>15 ft.</td>
<td>5 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Lamellar, horn</td>
<td>25 gp</td>
<td>+1</td>
<td>+3</td>
<td>-2</td>
<td>10%</td>
<td>20 ft.</td>
<td>15 ft.</td>
<td>5 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Lamellar, steel</td>
<td>25 gp</td>
<td>+1</td>
<td>+3</td>
<td>-2</td>
<td>15%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>5 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Mountain pattern</td>
<td>50 gp</td>
<td>+1</td>
<td>+3</td>
<td>-2</td>
<td>15%</td>
<td>20 ft.</td>
<td>15 ft.</td>
<td>10 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Scale</td>
<td>10 gp</td>
<td>+1</td>
<td>+3</td>
<td>-2</td>
<td>15%</td>
<td>30 ft.<sup><InnerLink showBacklink="backlink-rule-legs-ref-2-1" id="rule-legs-ref-2-1" data-hash-target to="rule-legs-2">2</InnerLink></sup></td>
<td>20 ft.<sup><InnerLink showBacklink="backlink-rule-legs-ref-2-2" id="rule-legs-ref-2-2" data-hash-target to="rule-legs-2">2</InnerLink></sup></td>
<td>10 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>Banded</td>
<td>50 gp</td>
<td>+1</td>
<td>+1</td>
<td>-3</td>
<td>15%</td>
<td>20 ft.<sup><InnerLink showBacklink="backlink-rule-legs-ref-2-3" id="rule-legs-ref-2-3" data-hash-target to="rule-legs-2">2</InnerLink></sup></td>
<td>15 ft.<sup><InnerLink showBacklink="backlink-rule-legs-ref-2-4" id="rule-legs-ref-2-4" data-hash-target to="rule-legs-2">2</InnerLink></sup></td>
<td>10 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>Kusari gusoku</td>
<td>100 gp</td>
<td>+1</td>
<td>+1</td>
<td>-3</td>
<td>20%</td>
<td>20 ft.<sup><InnerLink showBacklink="backlink-rule-legs-ref-2-5" id="rule-legs-ref-2-5" data-hash-target to="rule-legs-2">2</InnerLink></sup></td>
<td>15 ft.<sup><InnerLink showBacklink="backlink-rule-legs-ref-2-6" id="rule-legs-ref-2-6" data-hash-target to="rule-legs-2">2</InnerLink></sup></td>
<td>10 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>Lamellar, iron</td>
<td>50 gp</td>
<td>+1</td>
<td>+1</td>
<td>-4</td>
<td>20%</td>
<td>20 ft.<sup><InnerLink showBacklink="backlink-rule-legs-ref-2-7" id="rule-legs-ref-2-7" data-hash-target to="rule-legs-2">2</InnerLink></sup></td>
<td>15 ft.<sup><InnerLink showBacklink="backlink-rule-legs-ref-2-8" id="rule-legs-ref-2-8" data-hash-target to="rule-legs-2">2</InnerLink></sup></td>
<td>10 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>Plate</td>
<td>925 gp</td>
<td>+1</td>
<td>+1</td>
<td>-3</td>
<td>20%</td>
<td>20 ft.<sup><InnerLink showBacklink="backlink-rule-legs-ref-2-9" id="rule-legs-ref-2-9" data-hash-target to="rule-legs-2">2</InnerLink></sup></td>
<td>15 ft.<sup><InnerLink showBacklink="backlink-rule-legs-ref-2-10" id="rule-legs-ref-2-10" data-hash-target to="rule-legs-2">2</InnerLink></sup></td>
<td>10 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>Splint</td>
<td>50 gp</td>
<td>+1</td>
<td>+0</td>
<td>-4</td>
<td>20%</td>
<td>20 ft.<sup><InnerLink showBacklink="backlink-rule-legs-ref-2-11" id="rule-legs-ref-2-11" data-hash-target to="rule-legs-2">2</InnerLink></sup></td>
<td>15 ft.<sup><InnerLink showBacklink="backlink-rule-legs-ref-2-12" id="rule-legs-ref-2-12" data-hash-target to="rule-legs-2">2</InnerLink></sup></td>
<td>15 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>Tatami-do</td>
<td>150 gp</td>
<td>+1</td>
<td>+3</td>
<td>-3</td>
<td>15%</td>
<td>20 ft.<sup><InnerLink showBacklink="backlink-rule-legs-ref-2-13" id="rule-legs-ref-2-13" data-hash-target to="rule-legs-2">2</InnerLink></sup></td>
<td>15 ft.<sup><InnerLink showBacklink="backlink-rule-legs-ref-2-14" id="rule-legs-ref-2-14" data-hash-target to="rule-legs-2">2</InnerLink></sup></td>
<td>5 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>O-yoroi</td>
<td>300 gp</td>
<td>+1</td>
<td>+2</td>
<td>-3</td>
<td>20%</td>
<td>20 ft.<sup><InnerLink showBacklink="backlink-rule-legs-ref-2-15" id="rule-legs-ref-2-15" data-hash-target to="rule-legs-2">2</InnerLink></sup></td>
<td>15 ft.<sup><InnerLink showBacklink="backlink-rule-legs-ref-2-16" id="rule-legs-ref-2-16" data-hash-target to="rule-legs-2">2</InnerLink></sup></td>
<td>5 lbs.</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Banded Leg Armor Piece:</strong> These overlapping strips of metal on leather usually take the form of leggings or a skirt.</p>
<p><strong className="hl">Chain Leg Armor Piece:</strong> A chain leg piece takes the form of a long skirt made of chainmail that is further protected by steel greaves, or individual leggings of tighter-fitting chain reinforced by padding, steel kneeplates, and leather straps.</p>
<p><strong className="hl">Hide Leg Armor Piece:</strong> This armor piece consists of leggings or a skirt made of the tanned and preserved skin of a thick-skinned beast.</p>
<p><strong className="hl">Horn Lamellar Leg Armor Piece:</strong> These leggings are constructed of a number of horn plates laced together in parallel rows and reinforced with leather. Sometimes they take the form of a skirt made of such material. When in skirt form, the legs are further protected by leather greaves reinforced by horn.</p>
<p><strong className="hl">Iron Lamellar Leg Armor Piece:</strong> These leggings are constructed of a number of iron plates laced together in parallel rows and reinforced with chainmail. Sometimes they take the form of a skirt. The legs are further protected by leather greaves reinforced with iron.</p>
<p><strong className="hl">Kikko Leg Armor Piece:</strong> This leg armor piece is usually constructed of a leather skirt reinforced by hexagonal plates made from iron, and the legs are further protected by leather greaves reinforced with steel. Some versions of this leg armor piece consist of individual leather leggings reinforced by hexagonal plates.</p>
<p><strong className="hl">Kusari Gusoku Leg Armor Piece:</strong> This armor piece is constructed of light lamellar thigh guards and quilted cloth or leather leggings.</p>
<p><strong className="hl">Leather Lamellar Leg Armor Piece:</strong> This leg armor piece is constructed of a number of discrete hard-boiled leather plates laced together in parallel rows. They can take the form of a skirt or leggings.</p>
<p><strong className="hl">Leather Leg Armor Piece:</strong> This armor piece consists of leggings or a skirt constructed of hard-boiled leather carefully sewn together.</p>
<p><strong className="hl">Mountain Pattern Leg Armor Piece:</strong> The protection of this leg armor piece usually takes the form of a long skirt constructed of many interlocking pieces of steel riveted onto cloth, along with heavy cloth or leather greaves reinforced with steel plates. Some versions are made into individual leggings.</p>
<p><strong className="hl">O-Yoroi Leg Armor Piece:</strong> This armor piece consists of steel lamellar thigh guards and leggings made of metal reinforced with leather and cloth.</p>
<p><strong className="hl">Padded Leg Armor Piece:</strong> This armor piece consists of leggings or a skirt made of heavy or quilted cloth.</p>
<p><strong className="hl">Plate Leg Armor Piece:</strong> A plate leg armor piece is composed of faulds, tassets, cuisses, poleyns, and greaves along with bits of chainmail and padded armor for extra support and protection.</p>
<p><strong className="hl">Quilted Cloth Leg Armor Piece:</strong> These are leggings made of heavy quilted cloth. When worn alone, or with only other quilted cloth pieces, you gain DR 3/- against ranged piercing weapons.</p>
<p><strong className="hl">Scale Leg Armor Piece:</strong> Typically a scale leg piece is a skirt of overlapping metal plates and leather greaves reinforced with steel plates. Some suits feature long leggings of overlapping metal plates instead.</p>
<p><strong className="hl">Splint Leg Armor Piece:</strong> These thigh guards and leggings are constructed of metal strips and chainmail.</p>
<p><strong className="hl">Steel Lamellar Leg Armor Piece:</strong> This armor piece consists of thigh guards and leggings or a skirt constructed of steel plates laced together in parallel rows.</p>
<p><strong className="hl">Studded Leather Leg Armor Piece:</strong> These leggings are constructed of hard-boiled leather carefully sewn together and reinforced with metal studs.</p>
<p><strong className="hl">Tatami-Do Leg Armor Piece:</strong> This armor piece is constructed of light lamellar thigh guards and leggings.</p>
<p><strong className="hl">Wooden Leg Armor Piece:</strong> This armor piece consists of a pair of leggings or a skirt constructed of fire-treated wood sewn over leather.</p>
<section data-footnotes>
<h3 id="rule-legs-label">Footnotes</h3>
<ol>
<li id="rule-legs-1">
<p>Weight figures are for armor pieces sized to fit Medium characters. Armor pieces fitted for Small characters weigh half as much, and armor pieces fitted for Large characters weigh twice as much. <InnerLink id="backlink-rule-legs-ref-1-1" data-hash-target to="rule-legs-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="rule-legs-2">
<p>When running while wearing this armor piece, you move at only triple your speed, not quadruple. <InnerLink id="backlink-rule-legs-ref-2-1" data-hash-target to="rule-legs-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink> <InnerLink id="backlink-rule-legs-ref-2-2" data-hash-target to="rule-legs-ref-2-2" aria-label="Back to reference 2-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-legs-ref-2-3" data-hash-target to="rule-legs-ref-2-3" aria-label="Back to reference 2-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-rule-legs-ref-2-4" data-hash-target to="rule-legs-ref-2-4" aria-label="Back to reference 2-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-rule-legs-ref-2-5" data-hash-target to="rule-legs-ref-2-5" aria-label="Back to reference 2-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-rule-legs-ref-2-6" data-hash-target to="rule-legs-ref-2-6" aria-label="Back to reference 2-6">↩<sup>6</sup></InnerLink> <InnerLink id="backlink-rule-legs-ref-2-7" data-hash-target to="rule-legs-ref-2-7" aria-label="Back to reference 2-7">↩<sup>7</sup></InnerLink> <InnerLink id="backlink-rule-legs-ref-2-8" data-hash-target to="rule-legs-ref-2-8" aria-label="Back to reference 2-8">↩<sup>8</sup></InnerLink> <InnerLink id="backlink-rule-legs-ref-2-9" data-hash-target to="rule-legs-ref-2-9" aria-label="Back to reference 2-9">↩<sup>9</sup></InnerLink> <InnerLink id="backlink-rule-legs-ref-2-10" data-hash-target to="rule-legs-ref-2-10" aria-label="Back to reference 2-10">↩<sup>10</sup></InnerLink> <InnerLink id="backlink-rule-legs-ref-2-11" data-hash-target to="rule-legs-ref-2-11" aria-label="Back to reference 2-11">↩<sup>11</sup></InnerLink> <InnerLink id="backlink-rule-legs-ref-2-12" data-hash-target to="rule-legs-ref-2-12" aria-label="Back to reference 2-12">↩<sup>12</sup></InnerLink> <InnerLink id="backlink-rule-legs-ref-2-13" data-hash-target to="rule-legs-ref-2-13" aria-label="Back to reference 2-13">↩<sup>13</sup></InnerLink> <InnerLink id="backlink-rule-legs-ref-2-14" data-hash-target to="rule-legs-ref-2-14" aria-label="Back to reference 2-14">↩<sup>14</sup></InnerLink> <InnerLink id="backlink-rule-legs-ref-2-15" data-hash-target to="rule-legs-ref-2-15" aria-label="Back to reference 2-15">↩<sup>15</sup></InnerLink> <InnerLink id="backlink-rule-legs-ref-2-16" data-hash-target to="rule-legs-ref-2-16" aria-label="Back to reference 2-16">↩<sup>16</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
const _torso = {title: "Torso", parent_topics: ["optional_combat_changes","piecemeal_armor","armor_piece_descriptions"], siblings: ["arms","legs","torso"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 203</Link></p>
<p>The torso armor piece provides the most protection, but also usually provides the most hindrances to the wearer.</p>
<h3 id="rule-torso-table-5-9-torso-armor-pieces">Table 5-9: Torso Armor Pieces</h3>
<ScrollContainer id="rule-torso--table-0"><table>
<thead>
<tr>
<th>Armor Category</th>
<th>Armor Type</th>
<th>Cost</th>
<th>Armor Bonus</th>
<th>Maximum Dex Bonus</th>
<th>Armor Check Penalty</th>
<th>Arcane Spell Failure Chance</th>
<th>Speed 30 ft.</th>
<th>Speed 20 ft.</th>
<th>Weight<sup><InnerLink showBacklink="backlink-rule-torso-ref-1-1" id="rule-torso-ref-1-1" data-hash-target to="rule-torso-1">1</InnerLink></sup></th>
</tr>
</thead>
<tbody><tr>
<td>Light</td>
<td>Padded</td>
<td>3 gp</td>
<td>+0</td>
<td>+8</td>
<td>0</td>
<td>5%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>5 lbs.</td>
</tr>
<tr>
<td>Light</td>
<td>Quilted cloth</td>
<td>50 gp</td>
<td>+0</td>
<td>+8</td>
<td>0</td>
<td>10%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>10 lbs.</td>
</tr>
<tr>
<td>Light</td>
<td>Haramaki</td>
<td>3 gp</td>
<td>+1</td>
<td>+10</td>
<td>0</td>
<td>0%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>1 lb.</td>
</tr>
<tr>
<td>Light</td>
<td>Leather</td>
<td>5 gp</td>
<td>+1</td>
<td>+6</td>
<td>0</td>
<td>10%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>10 lbs.</td>
</tr>
<tr>
<td>Light</td>
<td>Silken ceremonial armor</td>
<td>30 gp</td>
<td>+1</td>
<td>+10</td>
<td>0</td>
<td>0%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>4 lbs.</td>
</tr>
<tr>
<td>Light</td>
<td>Studded leather</td>
<td>15 gp</td>
<td>+1</td>
<td>+5</td>
<td>0</td>
<td>15%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>15 lbs.</td>
</tr>
<tr>
<td>Light</td>
<td>Wooden</td>
<td>10 gp</td>
<td>+1</td>
<td>+3</td>
<td>-1</td>
<td>15%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>15 lbs.</td>
</tr>
<tr>
<td>Light</td>
<td>Lamellar cuirass</td>
<td>15 gp</td>
<td>+2</td>
<td>+4</td>
<td>0</td>
<td>5%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>8 lbs.</td>
</tr>
<tr>
<td>Light</td>
<td>Lamellar, leather</td>
<td>30 gp</td>
<td>+2</td>
<td>+3</td>
<td>-2</td>
<td>20%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>10 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Lamellar, steel</td>
<td>100 gp</td>
<td>+1</td>
<td>+3</td>
<td>-5</td>
<td>25%</td>
<td>20 ft.</td>
<td>15 ft.</td>
<td>25 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Hide</td>
<td>10 gp</td>
<td>+2</td>
<td>+4</td>
<td>-2</td>
<td>20%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>15 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Kikko</td>
<td>15 gp</td>
<td>+2</td>
<td>+4</td>
<td>-3</td>
<td>20%</td>
<td>20 ft.</td>
<td>15 ft.</td>
<td>15 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Lamellar, horn</td>
<td>50 gp</td>
<td>+2</td>
<td>+3</td>
<td>-4</td>
<td>25%</td>
<td>20 ft.</td>
<td>15 ft.</td>
<td>20 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Scale</td>
<td>30 gp</td>
<td>+2</td>
<td>+3</td>
<td>-2</td>
<td>25%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>15 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Mountain pattern</td>
<td>150 gp</td>
<td>+3</td>
<td>+3</td>
<td>-4</td>
<td>30%</td>
<td>20 ft.</td>
<td>15 ft.</td>
<td>20 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Armored coat</td>
<td>50 gp</td>
<td>+4</td>
<td>+3</td>
<td>-2</td>
<td>20%</td>
<td>20 ft.</td>
<td>15 ft.</td>
<td>20 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Chain</td>
<td>100 gp</td>
<td>+4</td>
<td>+4</td>
<td>-2</td>
<td>30%</td>
<td>30 ft.</td>
<td>20 ft.</td>
<td>25 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Do-maru</td>
<td>200 gp</td>
<td>+5</td>
<td>+4</td>
<td>-4</td>
<td>25%</td>
<td>20 ft.</td>
<td>15 ft.</td>
<td>30 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>Four-mirrored armor</td>
<td>20 gp</td>
<td>+5</td>
<td>+4</td>
<td>-5</td>
<td>30%</td>
<td>20 ft.</td>
<td>15 ft.</td>
<td>40 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>Banded</td>
<td>150 gp</td>
<td>+4</td>
<td>+1</td>
<td>-2</td>
<td>35%</td>
<td>20 ft.<sup><InnerLink showBacklink="backlink-rule-torso-ref-2-1" id="rule-torso-ref-2-1" data-hash-target to="rule-torso-2">2</InnerLink></sup></td>
<td>15 ft.<sup><InnerLink showBacklink="backlink-rule-torso-ref-2-2" id="rule-torso-ref-2-2" data-hash-target to="rule-torso-2">2</InnerLink></sup></td>
<td>20 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>Kusari gusoku</td>
<td>200 gp</td>
<td>+4</td>
<td>+1</td>
<td>-7</td>
<td>35%</td>
<td>20 ft.<sup><InnerLink showBacklink="backlink-rule-torso-ref-2-3" id="rule-torso-ref-2-3" data-hash-target to="rule-torso-2">2</InnerLink></sup></td>
<td>15 ft.<sup><InnerLink showBacklink="backlink-rule-torso-ref-2-4" id="rule-torso-ref-2-4" data-hash-target to="rule-torso-2">2</InnerLink></sup></td>
<td>20 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>Lamellar, iron</td>
<td>100 gp</td>
<td>+5</td>
<td>+0</td>
<td>-7</td>
<td>30%</td>
<td>20 ft.<sup><InnerLink showBacklink="backlink-rule-torso-ref-2-5" id="rule-torso-ref-2-5" data-hash-target to="rule-torso-2">2</InnerLink></sup></td>
<td>15 ft.<sup><InnerLink showBacklink="backlink-rule-torso-ref-2-6" id="rule-torso-ref-2-6" data-hash-target to="rule-torso-2">2</InnerLink></sup></td>
<td>15 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>Splint</td>
<td>100 gp</td>
<td>+4</td>
<td>+0</td>
<td>-3</td>
<td>30%</td>
<td>20 ft.<sup><InnerLink showBacklink="backlink-rule-torso-ref-2-7" id="rule-torso-ref-2-7" data-hash-target to="rule-torso-2">2</InnerLink></sup></td>
<td>15 ft.<sup><InnerLink showBacklink="backlink-rule-torso-ref-2-8" id="rule-torso-ref-2-8" data-hash-target to="rule-torso-2">2</InnerLink></sup></td>
<td>25 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>Tatami-do</td>
<td>500 gp</td>
<td>+4</td>
<td>+4</td>
<td>-6</td>
<td>35%</td>
<td>20 ft.<sup><InnerLink showBacklink="backlink-rule-torso-ref-2-9" id="rule-torso-ref-2-9" data-hash-target to="rule-torso-2">2</InnerLink></sup></td>
<td>15 ft.<sup><InnerLink showBacklink="backlink-rule-torso-ref-2-10" id="rule-torso-ref-2-10" data-hash-target to="rule-torso-2">2</InnerLink></sup></td>
<td>30 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>O-yoroi</td>
<td>750 gp</td>
<td>+5</td>
<td>+2</td>
<td>-6</td>
<td>35%</td>
<td>20 ft.<sup><InnerLink showBacklink="backlink-rule-torso-ref-2-11" id="rule-torso-ref-2-11" data-hash-target to="rule-torso-2">2</InnerLink></sup></td>
<td>15 ft.<sup><InnerLink showBacklink="backlink-rule-torso-ref-2-12" id="rule-torso-ref-2-12" data-hash-target to="rule-torso-2">2</InnerLink></sup></td>
<td>30 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>Agile Plate</td>
<td>400 gp</td>
<td>+6</td>
<td>+3</td>
<td>-4</td>
<td>25%</td>
<td>20 ft.<sup><InnerLink showBacklink="backlink-rule-torso-ref-2-13" id="rule-torso-ref-2-13" data-hash-target to="rule-torso-2">2</InnerLink></sup></td>
<td>15 ft.<sup><InnerLink showBacklink="backlink-rule-torso-ref-2-14" id="rule-torso-ref-2-14" data-hash-target to="rule-torso-2">2</InnerLink></sup></td>
<td>25 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>Plate</td>
<td>200 gp</td>
<td>+6</td>
<td>+3</td>
<td>-4</td>
<td>35%</td>
<td>20 ft.<sup><InnerLink showBacklink="backlink-rule-torso-ref-2-15" id="rule-torso-ref-2-15" data-hash-target to="rule-torso-2">2</InnerLink></sup></td>
<td>15 ft.<sup><InnerLink showBacklink="backlink-rule-torso-ref-2-16" id="rule-torso-ref-2-16" data-hash-target to="rule-torso-2">2</InnerLink></sup></td>
<td>30 lbs.</td>
</tr>
<tr>
<td>Heavy</td>
<td>Stone coat</td>
<td>500 gp</td>
<td>+8</td>
<td>+0</td>
<td>-7</td>
<td>40%</td>
<td>20 ft.<sup><InnerLink showBacklink="backlink-rule-torso-ref-2-17" id="rule-torso-ref-2-17" data-hash-target to="rule-torso-2">2</InnerLink></sup></td>
<td>15 ft.<sup><InnerLink showBacklink="backlink-rule-torso-ref-2-18" id="rule-torso-ref-2-18" data-hash-target to="rule-torso-2">2</InnerLink></sup></td>
<td>45 lbs.</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Agile Plate Torso Armor Piece:</strong> This breastplate is designed to allow its wearer extra flexibility. When worn alone, the wearer's armor check penalty for the Climb and jump checks is only -1 (masterwork and mithral versions of this armor reduce this penalty as well as the normal penalty).<sup><InnerLink showBacklink="backlink-rule-torso-ref-3-1" id="rule-torso-ref-3-1" data-hash-target to="rule-torso-3">3</InnerLink></sup></p>
<p>Alternatively, when worn with an agile lamellar arm armor piece and a chain leg armor piece (or lighter armor), the armor check penalty for Climb and jump checks is only -4 (masterwork and mithral versions of this armor and the above armor piece combination reduce this penalty as well as the normal penalty). Furthermore, when an agile plate torso armor piece is worn alone, it is considered to be medium armor instead of heavy armor except when creating special material versions of this armor.</p>
<p><strong className="hl">Armored Coat:</strong> This sturdy leather coat is reinforced with metal plates sewn into the lining. While more cumbersome than other torso armor pieces, and less effective, it can be donned or removed with a move action (there is no "don hastily" option for the armored coat). This torso armor piece can be worn with other armors, but the wearer takes the best armor bonus instead of adding up all the armor bonuses.</p>
<p><strong className="hl">Banded Torso Armor Piece:</strong> This armor piece is a shirt of overlapping metal plates reinforcing leather.</p>
<p><strong className="hl">Chain Torso Armor Piece:</strong> This armor piece is a shirt of chain mail. When worn alone, it is counted as light armor and acts as a chain shirt.<sup><InnerLink showBacklink="backlink-rule-torso-ref-3-2" id="rule-torso-ref-3-2" data-hash-target to="rule-torso-3">3</InnerLink></sup></p>
<p><strong className="hl">Do-Maru:</strong> This light-weight armor piece wraps around the body like a short armored coat made of lamellar.</p>
<p><strong className="hl">Four-Mirror Armor:</strong> This cuirass consists of four plates harnessed together with leather shoulder straps. It includes a helmet.</p>
<p><strong className="hl">Haramaki:</strong> Also called a belly-warmer, a haramaki is a simple silken sash lined with chainmail or articulated metal plates and tied about the stomach to protect it.</p>
<p><strong className="hl">Hide Torso Armor Piece:</strong> This armor piece is a shirt, wrap, or jacket constructed of the tanned and preserved skin of a thick-skinned beast.</p>
<p><strong className="hl">Horn Lamellar Torso Armor Piece:</strong> This armor piece consists of a shirt constructed of a number of horn plates that are laced together in parallel rows and reinforced with leather.</p>
<p><strong className="hl">Iron Lamellar Torso Armor Piece:</strong> This armor piece is a shirt constructed of a number of iron plates that are laced together in parallel rows and reinforced with bits of chainmail.</p>
<p><strong className="hl">Kikko Torso Armor Piece:</strong> This armor piece is a shirt of hexagonal iron plates sewn into cloth or leather.</p>
<p><strong className="hl">Kusari Gusoku Torso Armor Piece:</strong> This chain jacket is worn in place of heavier chest armor.</p>
<p><strong className="hl">Lamellar Cuirass:</strong> This cuirass is made of lacquered leather plates bound together and fitted over a silk shirt. It is sometimes worn alone, especially during ceremonial occasions when wearing other armor is frowned upon.</p>
<p><strong className="hl">Leather Lamellar Torso Armor Piece:</strong> This shirt or cuirass is constructed of a number of discrete hard-boiled leather plates laced together in parallel rows.</p>
<p><strong className="hl">Leather Torso Armor Piece:</strong> This armor piece is a shirt or jacket constructed of hard-boiled leather carefully sewn together into one piece.</p>
<p><strong className="hl">Mountain Pattern Torso Armor Piece:</strong> This armor piece is a shirt of a number of interlocking steel pieces riveted onto cloth or leather.</p>
<p><strong className="hl">O-Yoroi Torso Armor Piece:</strong> This complicated and multipart cuirass also includes a kabuto helmet and a ho-ate mask for further protection.</p>
<p><strong className="hl">Padded Torso Armor Piece:</strong> This shirt or jacket is made of heavy or quilted cloth.</p>
<p><strong className="hl">Plate Torso Armor Piece:</strong> This is a breastplate made of steel. When worn in conjunction with other armors, it also includes a helmet. When worn alone, it counts medium armor, acts as a breastplate, and does not include a helmet.<sup><InnerLink showBacklink="backlink-rule-torso-ref-3-3" id="rule-torso-ref-3-3" data-hash-target to="rule-torso-3">3</InnerLink></sup></p>
<p><strong className="hl">Quilted Cloth Torso Armor Piece:</strong> This shirt or jacket is made of heavy quilted cloth specially designed to trap arrows and other ranged piercing weapons. When worn alone, or with only other quilted cloth pieces, you gain DR 3/- against ranged piercing weapons.</p>
<p><strong className="hl">Scale Torso Armor Piece:</strong> This shirt or cuirass is made up of dozens of small overlapping metal plates.</p>
<p><strong className="hl">Silken Ceremonial Armor:</strong> Used primarily for ceremonial displays and sometimes worn over heavy armor, these robes consist of several layers of cloth over an outer layer of embroidered silk further reinforced with leather studs. It can be worn over other torso armor pieces, but does not grant any extra armor bonus, and increases the weight and cost of such armor.</p>
<p><strong className="hl">Splint Torso Armor Piece:</strong> This shirt or cuirass is constructed of metal strips reinforced with chain mail.</p>
<p><strong className="hl">Steel Lamellar Torso Armor Piece:</strong> This armor piece consists of a shirt or cuirass of steel plates laced together in parallel rows. A steel lamellar torso armor piece includes a helmet.</p>
<p><strong className="hl">Stone Coat:</strong> This weighty cuirass consists of lamellar crafted from alchemically treated stone. If worn with other armor pieces, this torso armor piece gains no armor bonus from the other armor pieces, and all of the added hindrances.</p>
<p><strong className="hl">Studded Leather Torso Armor Piece:</strong> This shirt or jacket is constructed of hard-boiled leather carefully sewn together and reinforced with metal studs.</p>
<p><strong className="hl">Tatami-Do Torso Armor Piece:</strong> A lighter version of an o-yoroi torso armor piece, this piece is constructed of a lighter lamellar shirt. It includes a collapsible kabuto helmet and an armored hood.</p>
<p><strong className="hl">Wooden Torso Armor Piece:</strong> This shirt or cuirass is constructed of fire-treated wood sewn over leather.</p>
<section data-footnotes>
<h3 id="rule-torso-label">Footnotes</h3>
<ol>
<li id="rule-torso-1">
<p>Weight figures are for armor pieces sized to fit Medium characters. Armor pieces fitted for Small characters weigh half as much, and armor pieces fitted for Large characters weigh twice as much. <InnerLink id="backlink-rule-torso-ref-1-1" data-hash-target to="rule-torso-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="rule-torso-2">
<p>When running while wearing this armor piece, you move only triple your speed, not quadruple. <InnerLink id="backlink-rule-torso-ref-2-1" data-hash-target to="rule-torso-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink> <InnerLink id="backlink-rule-torso-ref-2-2" data-hash-target to="rule-torso-ref-2-2" aria-label="Back to reference 2-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-torso-ref-2-3" data-hash-target to="rule-torso-ref-2-3" aria-label="Back to reference 2-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-rule-torso-ref-2-4" data-hash-target to="rule-torso-ref-2-4" aria-label="Back to reference 2-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-rule-torso-ref-2-5" data-hash-target to="rule-torso-ref-2-5" aria-label="Back to reference 2-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-rule-torso-ref-2-6" data-hash-target to="rule-torso-ref-2-6" aria-label="Back to reference 2-6">↩<sup>6</sup></InnerLink> <InnerLink id="backlink-rule-torso-ref-2-7" data-hash-target to="rule-torso-ref-2-7" aria-label="Back to reference 2-7">↩<sup>7</sup></InnerLink> <InnerLink id="backlink-rule-torso-ref-2-8" data-hash-target to="rule-torso-ref-2-8" aria-label="Back to reference 2-8">↩<sup>8</sup></InnerLink> <InnerLink id="backlink-rule-torso-ref-2-9" data-hash-target to="rule-torso-ref-2-9" aria-label="Back to reference 2-9">↩<sup>9</sup></InnerLink> <InnerLink id="backlink-rule-torso-ref-2-10" data-hash-target to="rule-torso-ref-2-10" aria-label="Back to reference 2-10">↩<sup>10</sup></InnerLink> <InnerLink id="backlink-rule-torso-ref-2-11" data-hash-target to="rule-torso-ref-2-11" aria-label="Back to reference 2-11">↩<sup>11</sup></InnerLink> <InnerLink id="backlink-rule-torso-ref-2-12" data-hash-target to="rule-torso-ref-2-12" aria-label="Back to reference 2-12">↩<sup>12</sup></InnerLink> <InnerLink id="backlink-rule-torso-ref-2-13" data-hash-target to="rule-torso-ref-2-13" aria-label="Back to reference 2-13">↩<sup>13</sup></InnerLink> <InnerLink id="backlink-rule-torso-ref-2-14" data-hash-target to="rule-torso-ref-2-14" aria-label="Back to reference 2-14">↩<sup>14</sup></InnerLink> <InnerLink id="backlink-rule-torso-ref-2-15" data-hash-target to="rule-torso-ref-2-15" aria-label="Back to reference 2-15">↩<sup>15</sup></InnerLink> <InnerLink id="backlink-rule-torso-ref-2-16" data-hash-target to="rule-torso-ref-2-16" aria-label="Back to reference 2-16">↩<sup>16</sup></InnerLink> <InnerLink id="backlink-rule-torso-ref-2-17" data-hash-target to="rule-torso-ref-2-17" aria-label="Back to reference 2-17">↩<sup>17</sup></InnerLink> <InnerLink id="backlink-rule-torso-ref-2-18" data-hash-target to="rule-torso-ref-2-18" aria-label="Back to reference 2-18">↩<sup>18</sup></InnerLink></p>
</li>
<li id="rule-torso-3">
<p>These armor pieces are considered to be one weight category lower when worn with no other armor pieces. A chain torso armor piece worn alone is a chain shirt (light armor), and a plate or agile plate torso armor piece is a breastplate (medium armor). <InnerLink id="backlink-rule-torso-ref-3-1" data-hash-target to="rule-torso-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink> <InnerLink id="backlink-rule-torso-ref-3-2" data-hash-target to="rule-torso-ref-3-2" aria-label="Back to reference 3-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-torso-ref-3-3" data-hash-target to="rule-torso-ref-3-3" aria-label="Back to reference 3-3">↩<sup>3</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
const _removing_iterative_attacks = {title: "Removing Iterative Attacks", parent_topics: ["optional_combat_changes"], siblings: ["armor_as_damage_reduction","called_shots","piecemeal_armor","removing_iterative_attacks","revised_action_economy","wound_thresholds","wounds_and_vigor"], subtopics: ["the_basics","two_weapon_fighting_pu","natural_attacks_pu","special_cases","variant_mobile_melee"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 110</Link></p>
<p>Iterative attacks allow combatants to deal a high amount of damage, but they can also make turns take a long time. Since a character's subsequent attacks have a bonus that's so much lower, this can lead to a lot of time spent on missed attacks. With this new system, an entire full attack resolves with a single d20 roll. Other sorts of attacks (such as attack actions, attacks of opportunity, and attacks granted by the <Link to="/feat/whirlwind_attack">Whirlwind Attack</Link> feat) are resolved as normal.</p>
</>};
const _the_basics = {title: "The Basics", parent_topics: ["optional_combat_changes","removing_iterative_attacks"], siblings: ["the_basics","two_weapon_fighting_pu","natural_attacks_pu","special_cases","variant_mobile_melee"], subtopics: ["attacking_multiple_targets","critical_hits_pu"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 110</Link></p>
<p>When making a full attack, roll only one attack roll and compare your result to the target's AC. If your attack result is lower than the target's AC by 6 or more, you miss and deal no damage. If your result is lower than the target's AC by 5 or less, you deliver a glancing blow, dealing an amount of damage equal to 1/2 the minimum damage you would normally deal on a hit with the weapon you're using. Effects that trigger on a hit do not trigger on a glancing blow. If your attack result equals or exceeds the target's AC, you score a hit, plus one additional hit for every 5 by which your roll exceeds that target's AC, up to your maximum number of hits. At first level, you can score a maximum of only one hit, but at base attack bonus +6 and at every +5 to your base attack bonus thereafter, you can score another. This is shown on Table 3-3, and also matches the progression of iterative attacks you'd gain if you were using the core rules for attacks. For each hit you score, roll damage separately; damage reduction applies to each hit.</p>
<p>For example, say you have a base attack bonus of +8, are using a melee weapon that deals 1d10 points of damage on a hit, and have a Strength modifier of +4. Your target has an AC of 21. If your attack roll result is 15 or lower, you miss. If your result is 16-20, you deal a glancing blow for 2 points of damage (your damage die's minimum of 1 plus your Strength modifier of +4, divided by 2 and rounded down). If your result is 21-25, you hit and deal 1d10+4 points of damage. If your result is 26 or higher, you hit twice and deal 1d10+4 points of damage twice. Even if your result were 31 or higher, you would still hit only twice because your base attack bonus is lower than +11.</p>
<p><strong className="hl">Tracking:</strong> When using this system, it speeds up the game if players calculate in advance the amount of damage they deal on a glancing blow with each weapon their characters use and write it on the character sheets. It also helps if the GM notes the monster's AC - 6, AC + 5, AC + 10, and AC + 15.</p>
<h3 id="rule-the_basics-table-3-2-attack-results">Table 3-2: Attack Results</h3>
<ScrollContainer id="rule-the_basics--table-0"><table>
<thead>
<tr>
<th>Attack Roll Result</th>
<th>Type of Hit</th>
<th>Damage Dealt</th>
</tr>
</thead>
<tbody><tr>
<td>Below AC by 6 or more</td>
<td>Miss</td>
<td>None</td>
</tr>
<tr>
<td>Below AC by 5 or less</td>
<td>Glancing Blow</td>
<td>1/2 minimum damage</td>
</tr>
<tr>
<td>Equal or exceed AC</td>
<td>Hit</td>
<td>Normal damage</td>
</tr>
<tr>
<td>Exceed AC by 5 or more*</td>
<td>Additional hit</td>
<td>Normal damage</td>
</tr>
</tbody></table></ScrollContainer>
<p>* You can gain an additional hit for every 5 by which the attack roll exceeds the target's AC, limited by your base attack bonus.</p>
<h3 id="rule-the_basics-table-3-3-maximum-hits">Table 3-3: Maximum Hits</h3>
<ScrollContainer id="rule-the_basics--table-1"><table>
<thead>
<tr>
<th>Base Attack Bonus</th>
<th>Maximum Hits</th>
</tr>
</thead>
<tbody><tr>
<td>+0 to +5</td>
<td>1</td>
</tr>
<tr>
<td>+6 to +10</td>
<td>2</td>
</tr>
<tr>
<td>+11 to +15</td>
<td>3</td>
</tr>
<tr>
<td>+16 to +20</td>
<td>4</td>
</tr>
<tr>
<td>+21 to +25*</td>
<td>5</td>
</tr>
<tr>
<td>+26 to +30*</td>
<td>6</td>
</tr>
</tbody></table></ScrollContainer>
<p>*Typically, only monsters have a base attack bonus this high.</p>
</>};
const _attacking_multiple_targets = {title: "Attacking Multiple Targets", parent_topics: ["optional_combat_changes","removing_iterative_attacks","the_basics"], siblings: ["attacking_multiple_targets","critical_hits_pu"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 110</Link></p>
<p>If you have more than one maximum hit, you can declare you're making a full attack against more than one target. In that case, your number of hits is determined by the highest AC among your targets, and you can allocate your hits however you like among all the targets after determining your total number of hits - you can even choose not to hit the target whose AC you rolled against. This doesn't allow you to bypass effects that would prevent you from hitting a creature normally. For instance, you couldn't assign a hit to a creature under a <Link to="/spell/sanctuary">sanctuary</Link> effect when making an attack roll against a different creature (unless you first succeeded on the required Will save).</p>
</>};
const _critical_hits_pu = {title: "Critical Hits", parent_topics: ["optional_combat_changes","removing_iterative_attacks","the_basics"], siblings: ["attacking_multiple_targets","critical_hits_pu"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 110</Link></p>
<p>When you threaten a critical hit, roll to confirm at your full bonus and apply the effects of the critical hit to any one of your hits. If your original attack roll scored multiple hits and the critical confirmation roll also falls within your weapon's critical threat range, you score two critical hits and can apply them to any two hits.</p>
</>};
const _two_weapon_fighting_pu = {title: "Two-Weapon Fighting", parent_topics: ["optional_combat_changes","removing_iterative_attacks"], siblings: ["the_basics","two_weapon_fighting_pu","natural_attacks_pu","special_cases","variant_mobile_melee"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 110</Link></p>
<p>When fighting with two weapons, use the lower attack bonus of the two weapons. If you score one hit, you also score a hit with your off-hand weapon. If you have <Link to="/feat/improved_two_weapon_fighting">Improved Two-Weapon Fighting</Link> and score two hits, you also score a second hit with your off-hand weapon, for a total of four. If you have <Link to="/feat/greater_two_weapon_fighting">Greater Two-Weapon Fighting</Link> and score three hits, you also score a third hit with your off-hand weapon, for a total of six.</p>
<p><strong className="hl">Critical Hits with Two-Weapon Fighting:</strong> If you threaten a critical hit when using Two-Weapon Fighting, roll a single confirmation roll using the lower attack bonus among the two weapons. If you confirm, you score one critical hit with each weapon, so long as the initial roll threatened a critical with both weapons. For example, if you're fighting with a rapier and a light pick, roll an 18 on your initial attack roll, and confirm the critical hit, you score a critical hit with only the rapier. However, if you roll a 20 and confirm, you score a critical hit with each weapon.</p>
</>};
const _natural_attacks_pu = {title: "Natural Attacks", parent_topics: ["optional_combat_changes","removing_iterative_attacks"], siblings: ["the_basics","two_weapon_fighting_pu","natural_attacks_pu","special_cases","variant_mobile_melee"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 110</Link></p>
<p>If a creature with at least three natural attacks makes a full attack using only natural weapons, the creature has a maximum number of hits equal to the number of secondary attacks plus 1/2 the number of primary attacks (rounded up). The creature uses the lowest attack bonus of its primary natural weapons for its attack roll. For each hit it scores, the creature can choose to deal damage with any two primary natural weapons or any one secondary natural weapon. If it misses by 5 or less, it hits with one primary natural weapon instead of dealing a glancing blow.</p>
<p>For example, a monster with two primary claw attacks and a secondary tail slap can score up to two hits. If it scores one hit, it can apply both of its claws or its tail slap. If it misses by 5 or less, it can apply one of its claws. If it succeeds by 5 or more, scoring two hits, it can apply all three of its attacks.</p>
</>};
const _special_cases = {title: "Special Cases", parent_topics: ["optional_combat_changes","removing_iterative_attacks"], siblings: ["the_basics","two_weapon_fighting_pu","natural_attacks_pu","special_cases","variant_mobile_melee"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 111</Link></p>
<p>Dealing with spells and abilities that grant additional attacks, rerolls, or high bonuses can be tricky under this system. So many rules are based around iterative attacks that it's not possible to cover every type of effect that needs to be adjusted. GMs should use the following rules as guidelines when interpreting how to implement similar spells and abilities.</p>
<h3 id="rule-special_cases-extra-attacks">Extra Attacks</h3>
<p>Effects such as haste that grant additional attacks instead raise your maximum number of hits by one. This includes secondary natural attacks made at the end of a manufactured weapon full attack.</p>
<h3 id="rule-special_cases-rerolls">Rerolls</h3>
<p>Since the full attack roll simulates a series of rolls, effects that grant or force single rerolls instead grant either a +2 bonus (if the attacker keeps the better roll, or the character causing the reroll intends to aid the attacker) or -2 penalty (if the attacker keeps the lower roll, or the character causing the reroll intends to hinder the attacker). Effects that would grant rerolls for all attack rolls made as part of the full attack allow the attacker to reroll the attack roll instead of imposing a bonus or penalty.</p>
<h3 id="rule-special_cases-true-strike">True Strike</h3>
<p>When using <Link to="/spell/true_strike">true strike</Link> with a full attack, first see how many hits you would have scored without <em>true strike.</em> A single casting of <em>true strike</em> adds at most one more hit.</p>
</>};
const _variant_mobile_melee = {title: "Variant: Mobile Melee", parent_topics: ["optional_combat_changes","removing_iterative_attacks"], siblings: ["the_basics","two_weapon_fighting_pu","natural_attacks_pu","special_cases","variant_mobile_melee"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 111</Link></p>
<p>This variant modification to removing iterative attacks allows a character greater mobility during a melee full attack rather than forcing them to stay put. When a character declares a melee full attack, she can also declare she will move before or after the attacks, up to a maximum of her movement speed. For every 5 feet she moves beyond the first 5 feet, she takes a -5 penalty on her attack roll for the purposes of determining extra hits only. Apply this penalty after determining whether she hits at least once.</p>
<p>The character can attempt an Acrobatics check to reduce this penalty by an amount equal to the result of her Acrobatics check divided by 5. No matter how high her Acrobatics check result may be, she can't reduce the penalty below -2 per 5 feet moved beyond the first 5 feet.</p>
<p>Characters with the <Link to="/feat/spring_attack">Spring Attack</Link> feat can move before, after, and in between the attacks when using this option, and they reduce the penalty to -4 for every 5 feet moved beyond the first 5 feet.</p>
</>};
const _revised_action_economy = {title: "Revised Action Economy", parent_topics: ["optional_combat_changes"], siblings: ["armor_as_damage_reduction","called_shots","piecemeal_armor","removing_iterative_attacks","revised_action_economy","wound_thresholds","wounds_and_vigor"], subtopics: ["revised_action_economy_overview","action_types_and_subtypes","simple_actions","advanced_actions","free_actions_pu","reactions","converting_other_actions","final_considerations"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 102</Link></p>
<p>The default action economy of the Pathfinder Roleplaying Game is intricate - full of exceptions, non-actions, and strange actions. This revised action economy streamlines the process of combat encounters. In many ways, it's a more active system that allows lower-level characters more options in a round while slightly limiting how much higher-level characters can do during their turns.</p>
<p>In this system, a character can commit up to 3 acts on her turn; these can be committed individually as simple actions, or combined into advanced actions. When it's not her turn, a character can take a single reaction per round. Iterative attacks have been discarded in this action economy. Instead, any character can make multiple attacks during her turn simply by taking multiple actions to do so.</p>
</>};
const _revised_action_economy_overview = {title: "Revised Action Economy Overview", parent_topics: ["optional_combat_changes","revised_action_economy"], siblings: ["revised_action_economy_overview","action_types_and_subtypes","simple_actions","advanced_actions","free_actions_pu","reactions","converting_other_actions","final_considerations"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 102</Link></p>
<p>To illustrate this system, we start at the initiative check and go though the turns and rounds of an encounter.</p>
<h2 id="rule-revised_action_economy_overview-initiative">Initiative</h2>
<p>At the start of combat, each participant rolls an initiative check as normal. Characters are flat-footed before they act in either the surprise round or the first round of combat.</p>
<h2 id="rule-revised_action_economy_overview-surprise-round">Surprise Round</h2>
<p>When combat starts, if some but not all of the participants are aware of their opponents, a surprise round occurs before the first round of combat. Those who are aware can commit up to 2 acts during the surprise round, and gain a reaction when that round is over. If all combatants are aware of their opponents, skip the surprise round.</p>
<h2 id="rule-revised_action_economy_overview-your-turn">Your Turn</h2>
<p>When your turn comes up in the initiative order, you can commit up to 3 acts. Sometimes, acts are committed discretely as simple actions, while other times 2 or more acts can be committed together as an advanced action. You can take these simple and advanced actions in any order you choose, except when the rules for individual actions state otherwise. You can also take a number of free actions your GM deems appropriate. Your turn ends once you have committed all 3 acts and any free actions you wish to take. Once your turn is over, you gain the ability to take one reaction before the start of your next turn. (Some abilities grant additional reactions; see <Link to="/rule/final_considerations">Final Considerations</Link>.)</p>
<p>When your turn comes up in the initiative order, you can choose to delay instead. When you do, you can't commit acts. You keep any reactions you haven't used since your previous turn, but don't gain any more. At any point after another combatant has taken its turn, you can choose to end your delay and reenter the initiative order. When you do so, your initiative changes to the point in the initiative order directly after the last acting creature's turn.</p>
<h2 id="rule-revised_action_economy_overview-others-turns">Others' Turns</h2>
<p>Reactions are like actions, but can be taken only when they are triggered, and only during other characters' turns. Usually, reactions are triggered by actions taken by other combatants. For instance, the most common reaction you'll likely take is the attack of opportunity: an attack you can make when a foe in your threatened area drops his guard (typically by moving, making a ranged attack, or attempting a complicated attack for which he lacks the proper training). Some reactions may provoke attacks of opportunity - the reaction's subtype, if any, determines whether it provokes attacks of opportunity.</p>
<p>Other times, something that happens to you might grant you the ability to take a reaction. Spells and abilities that are used as immediate actions in the default action economy are reactions in this system. For example, the spell <Link to="/spell/feather_fall">feather fall</Link> is cast an immediate action in the default action economy - in this system, it's a reaction.</p>
</>};
const _action_types_and_subtypes = {title: "Action Types and Subtypes", parent_topics: ["optional_combat_changes","revised_action_economy"], siblings: ["revised_action_economy_overview","action_types_and_subtypes","simple_actions","advanced_actions","free_actions_pu","reactions","converting_other_actions","final_considerations"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 102</Link></p>
<p>This section describes the various actions in the game, their costs within this system, and new rules on how each one works.</p>
<p>There are a number of different simple actions, free actions, and advanced actions you can take during your turn. Taking a simple action requires 1 act. Free actions don't cost any acts; you just say you want to take them, though some must be taken alongside other simple or advanced actions. In addition, the GM may limit the number of free actions you're allowed during your turn.</p>
<p>Advanced actions are more complicated; you must commit 2 or more acts to perform them. Some advanced actions require more acts than you can possibly commit during a single turn. In this case, you must continue committing acts toward that advanced action over multiple turns until the advanced action is complete. To take most advanced actions, you must commit all of their requisite acts consecutively. If you stop committing acts toward such an advanced action, it never comes to completion, and it must be started all over again in order to have a chance of success. Other advanced actions can be completed after committing the total requisite number of acts, which can be split up over time. In both cases, any roll attempted to determine whether an advanced action is successful is attempted after the appropriate number of acts are committed to that advanced action by the creature committing the final act. If an advanced action doesn't say whether it requires consecutive or non-consecutive acts, all its acts must be consecutive.</p>
<p>Some actions and reactions have one or more of the following subtypes. The subtypes are thematic, sometimes affect other actions taken later in the turn, and are used to determine whether (and at what point) an action provokes attacks of opportunity.</p>
<p><strong className="hl">Attack Actions:</strong> Actions with the attack subtype involve making at least one attack roll against an opponent or object. They typically provoke attacks of opportunity only if the attack is a ranged attack or you don't have the appropriate feat to take that attack action without provoking attacks of opportunity, such as <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> for unarmed strikes or <Link to="/feat/improved_trip">Improved Trip</Link> for trip attempts. In the latter case, the action provokes an attack of opportunity only from the creature you target. When an attack action provokes an attack of opportunity, the attack of opportunity is made before the provoking attack roll is made.</p>
<p>The first time during your turn that you take an action with this subtype, you roll the attack as normal. Each subsequent attack action taken during your turn imposes a cumulative -5 penalty on the attack roll or combat maneuver check (so the second attack action has a -5 penalty on the attack roll, the third has a -10 penalty, and so on).</p>
<p><strong className="hl">Complex Actions:</strong> These actions involve intense concentration, strenuous physical manipulation of objects, or some other source of complexity. A complex action always provokes attacks of opportunity, which are made before the complex action is taken. Complex actions that occur over multiple turns (whether consecutively or not) provoke attacks of opportunity on each turn that acts are committed toward their completion.</p>
<p><strong className="hl">Move Actions:</strong> These actions involve moving through the encounter area in some way. Actions with the move subtype provoke attacks of opportunity when you attempt to either leave a square in an enemy's threatened area or stand up from a prone position in a space that has at least 1 square in a foe's threatened area. Not all actions that allow you to move have the move subtype. For example, a step is a very slow and careful movement that doesn't have this subtype, and thus doesn't provoke attacks of opportunity when you take that action to leave a square in a threatened area.</p>
<p>Actions without a Subtype: Actions without a subtype don't provoke attacks of opportunity.</p>
<h2 id="rule-action_types_and_subtypes-two-weapon-fighting-and-flurry-of-blows">Two-Weapon Fighting and Flurry of Blows</h2>
<p>When you fight with a second weapon in your off hand or with a double weapon, you can make two attacks with the first attack simple action you take during your turn: one with your primary hand and another with your off hand. You take penalties on these attack rolls as listed on <Link to="/rule/two_weapon_fighting">Table 8-7: Two-Weapon Fighting Penalties</Link>. Any other attack simple actions you take during your turn allow only one attack roll, using either the weapon in your primary hand or the one in your off hand.</p>
<p>If you have the <Link to="/feat/improved_two_weapon_fighting">Improved Two-Weapon Fighting</Link> feat, you can make two attack rolls on both the first and second attack simple actions taken during your turn; both of the attacks made on the second attack action are made at a -5 penalty. Further attack simple actions taken during the same turn allow only one attack roll, using either the weapon in your primary hand or the one in your off hand.</p>
<p>If you have the <Link to="/feat/greater_two_weapon_fighting">Greater Two-Weapon Fighting</Link> feat, you can make two attacks on each of your attack simple actions on your turn, though you take all the normal penalties for two-weapon fighting, as well as the cumulative -5 penalty per attack simple action (all attacks made as part of the same attack action have the same penalty).</p>
<p>The <Link to="/class/monk">flurry of blows class feature</Link> works in a similar way. At 1st level, you can make an additional attack with a -2 penalty on your first attack simple action during a turn. At 8th level, you can make an additional attack on both your first and second attack simple actions during your turn. At 15th level, you can make an additional attack on each of your attack simple actions during your turn. You must, of course, take all the penalties associated with those attacks.</p>
</>};
const _simple_actions = {title: "Simple Actions", parent_topics: ["optional_combat_changes","revised_action_economy"], siblings: ["revised_action_economy_overview","action_types_and_subtypes","simple_actions","advanced_actions","free_actions_pu","reactions","converting_other_actions","final_considerations"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 103</Link></p>
<p>The following are some of the more common actions. To take any of them, you need to commit only 1 act (though some can be taken as free actions under special circumstances).</p>
<p><strong className="hl">Aid Another:</strong> You take the aid another action. This action has all of the subtypes of the action you aid.</p>
<p><strong className="hl">Appraise a Single Item:</strong> You spend time using your senses to appraise a single item that you can see. If you are holding the item, you gain a +2 bonus on the check and this action has the complex subtype.</p>
<p><strong className="hl">Attack (Attack):</strong> You make one or more attacks against a single foe within your melee reach (if making a melee attack) or range (if making a ranged attack).</p>
<p><strong className="hl">Bull Rush (Attack):</strong> You push a foe that is at most one size category larger than you straight back. Attempt a bull rush combat maneuver check. If you're successful, you push the foe back 5 feet. For every 5 by which your check exceeds your foe's CMD, you push that foe back 5 additional feet. You can choose to move along with the target if you have the necessary acts to do so. The foe's movement doesn't provoke attacks of opportunity unless you have the <Link to="/feat/greater_bull_rush">Greater Bull Rush</Link> Feat.</p>
<p><strong className="hl">Cast a Swift Spell:</strong> You cast a single spell or use a single spell-like ability with a casting time of 1 swift action.</p>
<p><strong className="hl">Control a Frightened Mount (Complex):</strong> You attempt to control a mount that's not trained for combat in battle. If you fail the Ride check, you can't try again until your next turn.</p>
<p><strong className="hl">Crawl (Move):</strong> You crawl 5 feet while prone.</p>
<p><strong className="hl">Demoralize:</strong> You shout threats at a foe within 30 feet that can see and hear you, attempting to demoralize it.</p>
<p><strong className="hl">Direct or Redirect a Spell:</strong> If a spell allows you to redirect an effect to a new target, you take this action to do so.</p>
<p><strong className="hl">Disarm (Attack):</strong> You attempt to disarm your foe. If your disarm combat maneuver check is successful, your foe drops one item of your choice that it's carrying or wielding (even if it's holding the item with two hands). If you exceed your foe's CMD by 10 or more, the foe drops two items of your choice. If you fail your combat maneuver by 10 or more, you drop any weapon you were using to disarm your foe.</p>
<p><strong className="hl">Dismiss a Spell:</strong> You dismiss the effects of a dismissible spell.</p>
<p><strong className="hl">Draw or Sheathe a Weapon:</strong> You draw or sheathe a weapon. If your base attack bonus is +0, this action provokes an attack of opportunity.</p>
<p><strong className="hl">Escape a Grapple:</strong> You attempt to escape or gain control of a grapple by attempting either an Escape Artist check or a combat maneuver check. The second time in a turn you take this action, you take a -5 penalty on the check. The third time, you take a -10 penalty on the check.</p>
<p><strong className="hl">Feint (Attack):</strong> You use Bluff to attempt a feint against an opponent. If you succeed, that opponent is denied its Dexterity bonus to AC for the next attack you make against it this turn. If you have the <Link to="/feat/improved_feint">Improved Feint</Link> feat, this action doesn't have the attack subtype.</p>
<p><strong className="hl">Handle an Animal:</strong> You command an animal to perform a trick it knows by attempting a Handle Animal check. Some class abilities let characters attempt this as a free action.</p>
<p><strong className="hl">Light a Torch with a Tindertwig or Open Flame:</strong> You ignite a torch with a tindertwig or an open flame.</p>
<p><strong className="hl">Load a Hand Crossbow or Light Crossbow (Complex):</strong> You load a hand crossbow or a light crossbow with a bolt. If you have the <Link to="/feat/rapid_reload">Rapid Reload</Link> feat with the weapon you are reloading, this is a free action.</p>
<p><strong className="hl">Lower or Reactivate Spell Resistance:</strong> You lower any spell resistance that is active, or reactivate a spell resistance that has been lowered.</p>
<p><strong className="hl">Manipulate an Item (Complex):</strong> You grab an item that is in a backpack, pouch, pocket, or other similar container on your person; pick up an item; or move a heavy object. Sometimes, the GM might rule that manipulating an item is an advanced action and determine the number of acts that must be committed to succeed. Based on what you want to do, those actions may need to be committed consecutively.</p>
<p><strong className="hl">Move (Move):</strong> You move up to your speed. Typically you move across the land at either a walk or a sprint, but this covers other movement modes, including burrowing, flying, jumping, and swimming.</p>
<p><strong className="hl">Mount or Dismount a Steed (Move):</strong> You mount or dismount a steed. You can do this as a free action by attempting a DC 20 Ride check; failure means you provoke attacks of opportunity.</p>
<p><strong className="hl">Open or Close a Door:</strong> You open or close a door that is within your reach (not counting expanded reach from reach weapons). You must have at least one hand free to take this action.</p>
<p><strong className="hl">Overrun (Attack):</strong> You move up to your speed, and over the course of this action you attempt to move through the space of a foe that is no more than one size category larger than you. When attempting to move through your foe's space, your foe can choose to allow you to pass through and let you continue your movement. If the foe doesn't choose to or can't let you move past, you attempt an overrun combat maneuver check. If you succeed, you move through the target's space. If your check exceeds your foe's CMD by 5 or more, you move through the target's space and the target is knocked prone. If the target has more than two legs, it gains a bonus to its CMD against overrun combat maneuvers equal to +2 for each additional leg it possesses. If you fail this check, your movement stops in the space directly in front of the opponent.</p>
<p><strong className="hl">Ready a Simple Action or an Advanced Action:</strong> You ready a single simple or advanced action that you can take before the start of your next turn as a reaction. You must designate a definite trigger for that reaction (such as "if a foe attacks me," "if a foe casts a spell," or "if a foe moves adjacent to me"), and you must have enough acts left to complete the action you ready. Once you ready an action, your turn ends. If you don't take the action you readied as a reaction by the start of your next turn, you lose that reaction.</p>
<p><strong className="hl">Ready or Drop a Shield:</strong> You either strap a shield to your arm to gain its shield bonus to AC or unstrap and drop the shield. If you have a base attack bonus of +1 or higher, you can do either of these as a free action when you take the move simple action.</p>
<p><strong className="hl">Search:</strong> You use Perception to search a room for salient hidden creatures or clues, or you make a detailed search of a 10-foot-square area to detect traps, triggers, hidden objects, or footprints. When you search an area, this action has the complex subtype.</p>
<p><strong className="hl">Spell Combat (Attack, Complex):</strong> You make an attack roll with a light or one-handed melee weapon, then cast a spell on the magus spell list with a casting time of 1 standard action. You take a -2 penalty on the melee attack, but the spell is cast regardless of whether the attack hits. If you cast the spell defensively, you can subtract your Intelligence bonus from the result of the attack roll to add the same value as a circumstance bonus on the <Link to="/rule/concentration">concentration</Link> check. You must have the <Link to="/class/magus">spell combat class feature</Link> to take this action, and can take this action only once per turn. To take this action, you must have one hand free. You can't also take the following actions this turn: cast a standard-action spell or cast a 1-round-action spell.</p>
<p><strong className="hl">Stand Up (Move):</strong> You stand up from being prone.</p>
<p><strong className="hl">Step:</strong> You move 5 feet.</p>
<p><strong className="hl">Sunder (Attack):</strong> You try to sunder an item held or worn by your foe. Attempt a sunder combat maneuver check. If you succeed, you deal damage to the item normally. Damage that exceeds the item's hardness is subtracted from its hit points. If an object has less than or equal to half its total hit points remaining, it gains the broken condition. If the damage you deal reduces the object to 0 or fewer hit points, you can choose to destroy the object. If you choose not to destroy it, the object is left with only 1 hit point.</p>
<p><strong className="hl">Trip (Attack):</strong> You try to trip your opponent. Attempt a trip combat maneuver check against a foe that is no more than one size category larger than you. If you succeed, you knock the target prone. If you fail by 10 or more, you are knocked prone instead. If the target has more than two legs, it gains a +2 bonus to its CMD against this attempt for each additional leg it possesses.</p>
<p><strong className="hl">Use a Swift Ability:</strong> You use a single ability that can be used as a swift action.</p>
</>};
const _advanced_actions = {title: "Advanced Actions", parent_topics: ["optional_combat_changes","revised_action_economy"], siblings: ["revised_action_economy_overview","action_types_and_subtypes","simple_actions","advanced_actions","free_actions_pu","reactions","converting_other_actions","final_considerations"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 105</Link></p>
<p>The following is a list of the main advanced actions in this system. The number of acts required to take each advanced action is listed in parentheses after the action's subtype (if any).</p>
<p><strong className="hl">Administer a Potion or Elixir, or Apply an Oil, to an Unconscious Creature (Complex; 3 Acts):</strong> You carefully administer a potion or elixir, or apply an oil, to an unconscious creature.</p>
<p><strong className="hl">Appraise a Hoard (3 Acts):</strong> You examine a treasure hoard to determine the most valuable item in the hoard.</p>
<p><strong className="hl">Cast a 1-Round-Action Spell (Complex; 3 Acts):</strong> You cast a spell with a casting time of 1 round. You can split the acts over 2 rounds, but those rounds must be consecutive. If you cast the entire spell in 1 turn, you can choose to have the spell's effects manifest at the end of that turn or at the start of your next turn. This isn't an attack action, even if the spell requires a ranged attack roll. If you provoke attacks of opportunity when casting the spell, you don't provoke attacks a second time when making the ranged attack roll.</p>
<p><strong className="hl">Cast a Standard-Action Spell (Complex; 2 Acts):</strong> You cast a spell with a casting time of 1 standard action. This isn't an attack action, even if the spell requires a ranged attack roll. If you provoke attacks of opportunity when casting the spell, you don't provoke attacks a second time when making the ranged attack roll.</p>
<p><strong className="hl">Charge (Move; 2 Acts):</strong> You move twice your speed directly toward a designated foe within your line of sight, ending the move in the closest space from which you can attack that foe. You must have a clear path to your foe. If anything hinders or blocks your movement along the path of a charge, you can't take the charge action. As long as you have a base attack bonus of +1 or higher, you can draw a weapon as a free action at any point during the charge. At the end of the charge, you gain a +2 bonus on any melee attacks, bull rush combat maneuver checks, or overrun combat maneuver checks you attempt until the end of your turn, as long as those attacks or combat maneuver checks are made against the creature you designated when you charged.</p>
<p><strong className="hl">Concentrate to Maintain an Active Spell (2 Acts):</strong> You concentrate to maintain an active spell.</p>
<p><strong className="hl">Continue a Grapple (2 Acts):</strong> You continue a grapple. If you initiated the grapple, you must either take this action at the start of each subsequent turn or end the grapple as a free action. When you take this action, you attempt a grapple combat maneuver check with a +5 bonus. If you're successful, you can either move, deal damage to, or pin the creature you are grappling. Alternatively, you can attempt to tie up the creature with a rope.</p>
<p><strong className="hl">Move:</strong> If you decide to move your target, immediately after the grapple, you can take a move simple action and move the creature you are grappling with you. At the end of that move action, you can place your target in any space adjacent to you. If you attempt to place your foe in a hazardous location, the target can attempt to free itself from the grapple as a reaction, and gains a +4 bonus on that attempt.</p>
<p><strong className="hl">Damage:</strong> If you decide to damage your opponent, you deal an amount of damage equal to that of your unarmed strike, natural attack, armor spikes, or a light or one-handed weapon you are holding. You can choose to make this damage either lethal or nonlethal.</p>
<p><strong className="hl">Pin:</strong> If you decide to pin your target, the target gains the pinned condition. You continue to have the grappled condition, but lose your Dexterity bonus to AC until you are no longer pinning the target.</p>
<p><strong className="hl">Tie Up a Grappled or Pinned Creature:</strong> If you have a rope in your hands, and you are grappling or pinning a foe, you can attempt a grapple combat maneuver check at a -10 penalty to tie up that foe. If you're successful, the ropes pin the creature until they are removed or the pinned foe succeeds at a combat maneuver check or Escape Artist check (DC = 20 + your CMB).</p>
<p><strong className="hl">Deliver a Coup de Grace (Complex; 3 Acts):</strong> You use a melee weapon to deliver a coup de grace to a helpless foe that isn't immune to critical hits. You can also use a ranged weapon, but you must be adjacent to the foe. When you take this action, you automatically hit and confirm a critical hit. If the foe survives the damage, it must succeed at a Fortitude save (DC = 10 + the damage dealt) or die.</p>
<p><strong className="hl">Detect Forgery (3 Acts):</strong> You use Linguistics to examine a single page to detect a forgery.</p>
<p><strong className="hl">Dirty Trick (Combat; 2 Acts):</strong> You attempt a dirty trick combat maneuver check. If you're successful, the target gains one of the following conditions: blinded, dazzled, deafened, entangled, shaken, or sickened. This condition lasts for 1 round. For every 5 by which your combat maneuver check exceeds the target's CMD, the condition lasts for 1 additional round. The target or an ally adjacent to the target can remove the condition by committing 1 act. Removing a condition applied by a dirty trick does not provoke attacks of opportunity.</p>
<p><strong className="hl">Disable Device (Complex; At Least 3 Acts):</strong> You attempt to unlock a lock or disable another device. For every round the action takes, you must commit 3 acts. These acts may or may not need to be consecutive based on the nature of the device. For example, acts committed to open a lock or disable a trap must nearly always be consecutive. The GM may rule that some complex devices take more than 3 acts to disable; for example, a complex arcane machine that will cause a devastating calamity in 1 minute could take 10 acts to disable, though the acts may not need to be consecutive.</p>
<p><strong className="hl">Drag (Combat; 2 Acts):</strong> You try to drag a foe that is no more than one size category larger than you 5 or more feet in a straight line. Attempt a drag combat maneuver check. If you succeed, you move 5 feet in one direction, and your opponent moves with you, staying adjacent to you. For every 5 by which your combat maneuver check exceeds the target's CMD, you can move 5 additional feet in the same direction. You can't drag a creature a distance greater than your speed with this advanced action. The target's movement does not provoke attacks of opportunity unless you have the <Link to="/feat/greater_drag">Greater Drag</Link> feat.</p>
<p><strong className="hl">Drink a Liquid or Apply an Oil (Complex; 2 Acts):</strong> You drink a potion, elixir, or another liquid, or apply an oil, gaining that liquid or oil's effects when the drinking or application is complete.</p>
<p><strong className="hl">Escape from a Net (Complex; 2 Acts):</strong> You attempt to escape from a net entangling you. Attempt a DC 20 Escape Artist check; if you succeed, you escape from the net.</p>
<p><strong className="hl">Extinguish Flames (Complex; 2 Acts):</strong> When on fire, you can roll on the ground or smother the fire with cloaks or similar objects to attempt another saving throw with a +4 bonus. If the saving throw is successful, you are no longer on fire.</p>
<p><strong className="hl">Find Tracks (At Least 3 Acts):</strong> You use Survival to find tracks. This requires at least 3 consecutive acts and may take more, as determined by the GM. If you lose a trail, it takes longer to try again.</p>
<p><strong className="hl">Initiate a Grapple (Attack; 2 Acts):</strong> You initiate a grapple against a creature within your melee reach.</p>
<p><strong className="hl">Light a Torch (Complex; 3 Acts):</strong> You light a torch with a flint and steel.</p>
<p><strong className="hl">Load a Heavy or Repeating Crossbow (Complex; 2 acts):</strong> You load a bolt in a heavy crossbow or place a new case of 5 bolts into a repeating crossbow.</p>
<p><strong className="hl">Load a One-Handed Early Firearm (Complex; 2 Acts):</strong> You load a single barrel of a one-handed early firearm. If you have the <Link to="/feat/rapid_reload">Rapid Reload</Link> feat for that firearm, this is reduced to a simple action.</p>
<p><strong className="hl">Load a Two-Handed Early Firearm (Complex; 3 Acts):</strong> You load a single barrel of a two-handed early firearm. If you have the Rapid Reload feat for that firearm, you need commit only 2 acts to reload that firearm.</p>
<p><strong className="hl">Lock or Unlock a Weapon in a Locked Gauntlet (Complex; 2 Acts):</strong> You either lock a weapon into a locked gauntlet or unlock a weapon already fastened to a locked gauntlet.</p>
<p><strong className="hl">Make All Natural Attacks (Attack; 3 Acts):</strong> A creature that is using only its natural attacks can make all its natural attacks with this action instead of making separate attacks with attack simple actions.</p>
<p><strong className="hl">Prepare a Flask of Oil as a Splash Weapon (Complex; 2 Acts):</strong> You prepare a flask of oil with a fuse so that you can throw it as a splash weapon.</p>
<p><strong className="hl">Provide First Aid, Treat a Wound, or Treat Poison (Complex; 2 Acts):</strong> You provide first aid, treat a wound, or treat poison using the Heal skill.</p>
<p><strong className="hl">Push an Animal (3 Acts):</strong> You attempt a Handle Animal check to get an animal to perform a trick it doesn't know but is physically capable of doing, or to push the animal to its limits. If the animal has taken hit point damage, nonlethal damage, or ability score damage, the DC of this check increases by 2. Characters with animal companions, such as druids or rangers, can push their companions as simple actions instead.</p>
<p><strong className="hl">Reposition (Combat; 2 Acts):</strong> You attempt a reposition combat maneuver check against a foe that is no more than one size category larger than you. If you succeed, you force that foe to move 5 feet. For every 5 by which your check exceeds the target's Combat Maneuver Defense, you can move that target an additional 5 feet. When you reposition the target, it must stay within your threatened area during all but the last 5 feet of the reposition movement, which can be to a space adjacent to your threatened area.</p>
<p><strong className="hl">Run (Move; 3 Acts):</strong> You move four times your speed in a straight line. When you do, you lose your Dexterity bonus to AC until the start of your next turn.</p>
<p>You can run for a number of rounds equal to your Constitution score; each round after that, you must succeed at a Constitution check to continue running (DC = 10 + 1 per previous check). If you fail, you stop running and are staggered for a number of minutes equal to 10 - your Constitution bonus (minimum 1).</p>
<p><strong className="hl">Sleight of Hand (Complex; 2 Acts):</strong> You use Sleight of Hand to palm an object or perform some feat of legerdemain. You can attempt this as a simple action by taking a -20 penalty on the check. In either case, if your check fails by 5 or more, you provoke an attack of opportunity from any creature from which you are trying to take an object with this action.</p>
<p><strong className="hl">Spellstrike (Complex; 2 Acts):</strong> You cast a spell from the magus spell list with a range of touch, but instead of making a touch attack, you make a melee attack with a weapon you are wielding. If the attack hits, the attack deals its normal damage as well as any effects of the spell. You must have the <Link to="/class/magus">spellstrike class feature</Link> to take this action.</p>
<p><strong className="hl">Steal (Combat; 2 Acts):</strong> You attempt a steal combat maneuver check against a foe within your melee reach (not counting expanded reach from reach weapons). You must have at least one hand free, and must select the item to be stolen before attempting the check. Items fastened to a foe grant the foe a +5 (or higher) bonus to its CMD against this attempt, and items securely worn can't be stolen in this way. If you're successful, you take the item you chose from the opponent.</p>
<p><strong className="hl">Total Defense (2 Acts):</strong> You concentrate on defense rather than attacking. Until the start of your next turn, you can't take actions with the attack subtype, and you gain a +4 dodge bonus to AC. If you already took an attack action earlier in the turn, you gain only a +2 dodge bonus to AC. If you have at least 3 ranks in Acrobatics, these bonuses increase to +6 and +3, respectively.</p>
<p><strong className="hl">Use a Command Word Item (2 Acts):</strong> You activate a magic item with a command word.</p>
<p><strong className="hl">Use a Spell Completion Item (Complex; 2 Acts):</strong> You cast a spell with a casting time of 1 standard action from a spell completion item. This isn't an attack action, even if the spell requires a ranged attack roll. If you provoke attacks of opportunity when casting the spell, you don't provoke further attacks when making the ranged attack roll.</p>
<p><strong className="hl">Use a Spell Trigger Item (2 Acts):</strong> You cast a spell from a spell trigger item. This isn't an attack action, even if the spell requires a ranged attack roll. If you provoke attacks of opportunity when casting the spell, you don't provoke further attacks when making the ranged attack roll.</p>
<p><strong className="hl">Use a Standard-Action Supernatural Ability (2 Acts):</strong> You use a supernatural ability that can be used as a standard action in the default action economy.</p>
<p><strong className="hl">Use a Touch Spell on up to Six Allies (Complex; 3 Acts):</strong> If you cast a spell that allows you to touch targets over multiple rounds, this action allows you to touch up to six willing creatures within your melee reach (not counting expanded reach from reach weapons).</p>
</>};
const _free_actions_pu = {title: "Free Actions", parent_topics: ["optional_combat_changes","revised_action_economy"], siblings: ["revised_action_economy_overview","action_types_and_subtypes","simple_actions","advanced_actions","free_actions_pu","reactions","converting_other_actions","final_considerations"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 109</Link></p>
<p>Unless stated otherwise in the action's description, a free action can be taken only on your turn. Theoretically, you can take as many free actions in a turn as you wish, though the GM may apply reasonable limitations on free actions. For instance, although speaking is a free action, since a round is only 6 seconds in length, your GM might stop you from spouting off a long diatribe during your turn (or between turns), and may even rule that if you are casting a rather complex spell with a verbal component, you aren't able to verbally warn your companions of some danger that you notice before they do. Typically, this limitation shouldn't be applied to reloading ranged weapons as a free action.</p>
<p>Sometimes a free action stipulates that you can take it only in conjunction with another action, or at a certain time during your turn. In these cases, you must take any requisite actions before you can take the free action.</p>
<p>The following are the main free actions of this system.</p>
<p><strong className="hl">Cast Defensively:</strong> When casting a spell, you can take a free action to do so defensively. You must attempt a <Link to="/rule/concentration">concentration</Link> check (DC = 15 + double the spell's level). If you succeed, that spell loses the complex subtype for that casting. If you fail, you lose the spell.</p>
<p><strong className="hl">Cease Concentrating on a Spell:</strong> You cease concentrating on a spell that you have cast.</p>
<p><strong className="hl">Draw and Nock an Arrow:</strong> You draw and nock an arrow to a longbow or shortbow.</p>
<p><strong className="hl">Drop an Item:</strong> You drop a held item into a square within your space or within your melee reach (not counting the expanded reach from a reach weapon, unless you are dropping that weapon).</p>
<p><strong className="hl">Drop Prone:</strong> You drop prone within your space.</p>
<p><strong className="hl">Fight Defensively:</strong> At the start of your turn, you can choose to fight defensively. When you do, you take a -4 penalty on all attack rolls, but gain a +2 dodge bonus to AC until the start of your next turn. If you have at least 3 ranks in Acrobatics, the dodge bonus increases to +3.</p>
<p><strong className="hl">Identify a Spell Being Cast:</strong> You use Spellcraft to identify a spell being cast. Unlike other free actions, you can take this action even when it is not your turn.</p>
<p><strong className="hl">Prepare Spell Components or a Spell Focus:</strong> While casting a spell, you prepare a material spell component or a spell focus. If this component or spell focus is particularly large or unwieldy, your GM might rule that this instead takes a simple action, or even an advanced action.</p>
<p><strong className="hl">Recall Knowledge:</strong> You attempt a Knowledge check to recall a detail in one of your fields of study, or to identify a monster and its abilities.</p>
<p><strong className="hl">Speak:</strong> You speak for no more than a few words using one or more free actions. Unlike other free actions, this action can be taken even when it's not your turn.</p>
<p><strong className="hl">Use a Free-Action Ability:</strong> You use an ability that can be used as a free action in the default action economy. If the ability must be used as part of another action, you must take that action before taking this free action.</p>
</>};
const _reactions = {title: "Reactions", parent_topics: ["optional_combat_changes","revised_action_economy"], siblings: ["revised_action_economy_overview","action_types_and_subtypes","simple_actions","advanced_actions","free_actions_pu","reactions","converting_other_actions","final_considerations"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 109</Link></p>
<p>The following are the main reactions of this system.</p>
<p><strong className="hl">Complete a Readied Action (Varies):</strong> When you have readied an action or advanced action, when the trigger you designate occurs, you can take that action. Unlike in the default action economy, your place in the initiative order does not change. This reaction's subtype is the same as the readied action's subtype.</p>
<p><strong className="hl">Make an Attack of Opportunity:</strong> When a foe you threaten provokes an attack of opportunity, you can make a single melee attack against that foe.</p>
<p><strong className="hl">Spend a Use of an Attack of Opportunity:</strong> If an ability you possess allows you to spend a use of an attack of opportunity to perform some other action in the default action economy, that action is a reaction in this system.</p>
<p><strong className="hl">Use an Immediate-Action Ability:</strong> You can use an ability that can be used as an immediate action in the default action economy, as long as any conditions to use that ability are met.</p>
</>};
const _converting_other_actions = {title: "Converting Other Actions", parent_topics: ["optional_combat_changes","revised_action_economy"], siblings: ["revised_action_economy_overview","action_types_and_subtypes","simple_actions","advanced_actions","free_actions_pu","reactions","converting_other_actions","final_considerations"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 107</Link></p>
<p>While the list of actions in this section is long and covers most of the major actions in the game, it's not exhaustive. There are many actions that are not covered in these pages. The following are guidelines for converting such actions from the default action economy to this one.</p>
<p><strong className="hl">Free Actions Are Always Free Actions:</strong> A free action in the default action economy is a free action in this one. Free actions typically don't have a subtype, and thus don't provoke attacks of opportunity. Keep in mind that some free actions are used in conjunction with other actions - that's still true in this system. To use such a free action, you must take the other action it supports.</p>
<p><strong className="hl">Swift Actions Are Always Simple Actions:</strong> A swift action in the default action economy is always a simple action in this system. You need commit only 1 act to take that action. In rare cases, a GM might want to limit a given swift action to only once per turn.</p>
<p><strong className="hl">Move Actions Are Always Simple Actions:</strong> A move action in the default action economy is always a simple action in this system.</p>
<p><strong className="hl">Standard-Action Attacks Are Typically Simple Actions:</strong> Most actions that involve an attack roll or a combat maneuver check as a standard action in the standard economy are simple actions in this system. For combat maneuvers that can't be substituted for one attack in a full-attack action and other complicated attacks, consider making them attack actions that require further consecutive acts to complete. Look at combat maneuvers such as drag, grapple, and reposition for examples of such actions.</p>
<p><strong className="hl">Standard-Action Supernatural and Spell-Like Abilities Are Advanced Actions:</strong> Typically, these actions are advanced actions that require 2 acts. Supernatural abilities tend not to have a subtype (unless they involve movement or attacking, in which case it might be fitting to grant them those subtypes), and spell-like abilities typically have the complex subtype.</p>
<p><strong className="hl">Full-Round Actions Are Advanced Actions:</strong> Full-round actions are nearly always advanced actions that require a consecutive 3-act commitment. (See the charge <Link to="/rule/advanced_actions">advanced action</Link> for an example of one that doesn't require 3 acts.)</p>
</>};
const _final_considerations = {title: "Final Considerations", parent_topics: ["optional_combat_changes","revised_action_economy"], siblings: ["revised_action_economy_overview","action_types_and_subtypes","simple_actions","advanced_actions","free_actions_pu","reactions","converting_other_actions","final_considerations"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 109</Link></p>
<p>Some spells and abilities in the game grant extra actions. The two benchmark abilities are the <Link to="/feat/combat_reflexes">Combat Reflexes</Link> feat and the <Link to="/spell/haste">haste</Link> spell. The following describes how to use these in this system, which should serve as a guide for how to fit in similar abilities.</p>
<p><strong className="hl">Combat Reflexes:</strong> If you have this feat, you can take a number of additional reactions between your turns equal to your Dexterity bonus, but those reactions can be used only to make attacks of opportunity. You gain all the other abilities of this feat.</p>
<p><strong className="hl">Haste:</strong> When under the effects of <em>haste,</em> you gain 1 additional act each round, which can be used only to take an attack simple action. This doesn't stack with any other effect that grants an increase in your number of acts per turn. If you have multiple effects that give you additional acts, you can pick only one such effect to benefit from each turn. You gain all the other benefits of the spell.</p>
</>};
const _wound_thresholds = {title: "Wound Thresholds", parent_topics: ["optional_combat_changes"], siblings: ["armor_as_damage_reduction","called_shots","piecemeal_armor","removing_iterative_attacks","revised_action_economy","wound_thresholds","wounds_and_vigor"], subtopics: ["setup","thresholds_and_conditions","monster_wound_thresholds","wounds_threshold_feats","gritty_mode"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 136</Link></p>
<p>In a standard Pathfinder game, when a dragon with 800 hit points has taken 798 points of damage, it's still fighting at full capacity, but as soon as it has taken 801 points of damage, it's knocked completely unconscious. Though this ensures that injured characters remain useful and effective, it can feel unrealistic, and it devalues any healing that doesn't strictly prevent a knockout. Consider using the following variant to add tension and increase the strategic value of healing, but be aware that it can lead to situations that punish the side that's already behind, and that the pace of fights could drag in the late stages as two injured parties slug it out. Wound thresholds also make it especially dangerous for a party to take on higher-CR opponents.</p>
</>};
const _setup = {title: "Setup", parent_topics: ["optional_combat_changes","wound_thresholds"], siblings: ["setup","thresholds_and_conditions","monster_wound_thresholds","wounds_threshold_feats","gritty_mode"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 136</Link></p>
<p>In the wound thresholds variant, a character divides her hit point total into four quarters, and takes penalties whenever she's not in her top quarter. A character at 3/4 of her maximum hit points is less effective than one at full hit points, one at 1/2 is less effective than one at 3/4, and so on.</p>
<p>To prevent the need to divide on the fly, start out by calculating 3/4, 1/2, and 1/4 of your total hit points and add them to your character sheet as "Grazed (-1)," "Wounded (-2)," and "Critical (-3)." If you have a Constitution bonus of +1 or higher, also write down the negative of your Constitution bonus next to the word "Disabled." These terms indicate the conditions a character gains as her hit points drop. For example, a 7th-level sorcerer with a maximum of 71 hit points would become grazed at 53 hit points, wounded at 35 hit points, and critical at 17 hit points. If she had a Constitution score of 12, she would be disabled if she had 0 or -1 hit points, and would start dying at -2 hit points. As usual, she would die when her hit points drop to -12 or lower.</p>
</>};
const _thresholds_and_conditions = {title: "Thresholds and Conditions", parent_topics: ["optional_combat_changes","wound_thresholds"], siblings: ["setup","thresholds_and_conditions","monster_wound_thresholds","wounds_threshold_feats","gritty_mode"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 136</Link></p>
<p>This rules variant uses three special conditions that apply automatically when a character reaches the corresponding wound thresholds: grazed, wounded, and critical. These conditions are not cumulative - only the most severe one applies at a given time. The disabled and staggered conditions have the same effects as in the core rules, but apply to a wider range of hit point totals, as described below. Unlike grazed, wounded, and critical, the disabled and staggered conditions stack, so a character who is disabled or staggered is still critical as well.</p>
<h3 id="rule-thresholds_and_conditions-healthy">Healthy</h3>
<p>A character above her grazed threshold (3/4 of her maximum hit points) is healthy, applying no special modifiers. The character doesn't gain a condition in this state.</p>
<h3 id="rule-thresholds_and_conditions-grazed">Grazed</h3>
<p>A character above her wounded threshold (1/2 of her maximum hit points) but at or below 3/4 of her maximum hit points is grazed. She takes a -1 penalty on all attack rolls, saving throws, skill checks, and ability checks, as well as to AC and caster level.</p>
<h3 id="rule-thresholds_and_conditions-wounded">Wounded</h3>
<p>A character above her critical threshold (1/4 of her maximum hit points) but at or below 1/2 of her maximum hit points is wounded. She takes a -2 penalty on all attack rolls, saving throws, skill checks, and ability checks, as well as to AC and caster level.</p>
<h3 id="rule-thresholds_and_conditions-critical">Critical</h3>
<p>A character at or below 1/4 of her maximum hit points is in critical condition. She takes a -3 penalty on all attack rolls, saving throws, skill checks, and ability checks, as well as to AC and caster level.</p>
<h3 id="rule-thresholds_and_conditions-disabled">Disabled</h3>
<p>A character with a Constitution score of 12 or higher who is at or below 0 hit points is disabled until she falls below a number of hit points equal to the negative of her Constitution modifier. For example, a character with a Constitution score of 18 would be disabled from 0 to -4 hit points and unconscious at -5 hit points. A character with a Constitution score of 11 or lower is disabled only while she has exactly 0 hit points.</p>
<h3 id="rule-thresholds_and_conditions-staggered">Staggered</h3>
<p>Instead of being staggered only when their amount of nonlethal damage equals their remaining hit points, characters using this system continue to be staggered from that point until their nonlethal damage exceeds their current hit points by an amount greater than their Constitution bonus, at which point they fall unconscious. A character with a Constitution score of 11 or lower is staggered only when her nonlethal damage exactly equals her current hit point total.</p>
<h3 id="rule-thresholds_and_conditions-caster-level-penalties">Caster Level Penalties</h3>
<p>The penalty to caster level from the grazed, wounded, or critical condition can make it so an injured spellcaster is unable to cast the highest levels of spells she would normally be able to. However, it doesn't cause her to lose any prepared spells or spell slots. The penalty to caster level also reduces her bonus on <Link to="/rule/concentration">concentration</Link> checks and lowers the range, duration, and effectiveness of her spells. The penalty can't make her effective caster level lower than 1.</p>
</>};
const _monster_wound_thresholds = {title: "Monster Wound Thresholds", parent_topics: ["optional_combat_changes","wound_thresholds"], siblings: ["setup","thresholds_and_conditions","monster_wound_thresholds","wounds_threshold_feats","gritty_mode"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 137</Link></p>
<p>Keeping track of wound thresholds for a horde of monsters can be a significant amount of work. To simplify the process, the GM can use only the wounded threshold and ignore the increased range for the disabled condition. This means she only needs to keep track of 1/2 of each monster's hit points and the -2 penalty. The GM should use this method primarily for large groups of monsters; prominent NPCs and enemies that fight on their own should use all the thresholds.</p>
</>};
const _wounds_threshold_feats = {title: "Wounds Threshold Feats", parent_topics: ["optional_combat_changes","wound_thresholds"], siblings: ["setup","thresholds_and_conditions","monster_wound_thresholds","wounds_threshold_feats","gritty_mode"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 137</Link></p>
<p>The following feats are either new feats or Core Rulebook feats adapted to work with the wound threshold system. Though the system doesn't require their use, they're a great way to expand the role of wound thresholds in your game.</p>
<h3 id="rule-wounds_threshold_feats-critical-cure">Critical Cure</h3>
<p>Your healing is more effective if your patient is badly injured.</p>
<p><strong className="hl">Benefit:</strong> When you cast a conjuration (healing) spell, it cures 1 additional hit point if the recipient of the healing is grazed, wounded, or critical. The additional healing increases by an additional 1 point at caster level 6th, and every 6 caster levels thereafter.</p>
<h3 id="rule-wounds_threshold_feats-endurance">Endurance</h3>
<p>Harsh conditions or long exertions do not easily tire you.</p>
<p><strong className="hl">Benefit:</strong> You reduce the penalty from being grazed, wounded, or critical by 1 (to -0, -1, and -2, respectively). In addition, you gain a +4 bonus on the following checks and saves: Swim checks to resist nonlethal damage from exhaustion, Constitution checks to continue running, Constitution checks to avoid nonlethal damage from a forced march, Constitution checks to hold your breath, Constitution checks to avoid nonlethal damage from starvation or thirst, Fortitude saves to avoid nonlethal damage from hot or cold environments, and Fortitude saves to resist damage from suffocation. You can sleep in light or medium armor without becoming fatigued.</p>
<p><strong className="hl">Normal:</strong> A character without this feat who sleeps in medium or heavier armor is fatigued the next day.</p>
<h3 id="rule-wounds_threshold_feats-twist-the-knife-combat">Twist the Knife (Combat)</h3>
<p>You're especially dangerous against enemies who are suffering from injuries.</p>
<p><strong className="hl">Benefit:</strong> You gain a +1 bonus on attack and damage rolls against grazed, wounded, or critical enemies.</p>
</>};
const _gritty_mode = {title: "Gritty Mode", parent_topics: ["optional_combat_changes","wound_thresholds"], siblings: ["setup","thresholds_and_conditions","monster_wound_thresholds","wounds_threshold_feats","gritty_mode"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 137</Link></p>
<p>For a grittier game in which wounds have a much larger impact, double the penalties imposed by the grazed, wounded, and critical conditions. Use this mode carefully, since it can cause a serious death spiral - in other words, the side that starts losing has tremendous disadvantages and is far more likely to die or need to escape. This adjustment also means that a spellcaster will always lose a level of spells she can cast when she drops from one wound threshold to a lower one, so the effects of wound thresholds on spellcasting are more predictable and stay consistent whether a character is at an even or odd level.</p>
</>};
const _wounds_and_vigor = {title: "Wounds and Vigor", parent_topics: ["optional_combat_changes"], siblings: ["armor_as_damage_reduction","called_shots","piecemeal_armor","removing_iterative_attacks","revised_action_economy","wound_thresholds","wounds_and_vigor"], subtopics: ["determining_wound_points_and_vigor_points","regaining_wound_points_and_vigor_points","attacks_that_deal_wound_point_damage","other_considerations_uc","wounds_and_vigor_variant_feats"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 206</Link></p>
<p>Hit points are an abstraction. When a fighter gains a level, his body does not suddenly become more resistant to damage. A sword's strike does not suddenly do proportionately less damage. Rather, hit points suggest that the fighter has undergone more training, and while he may have improved his ability to deal with wounds to a small degree, the hit points gained at higher levels reflect less his capacity for physical punishment and more his skill at avoiding hits, his ability to dodge and twist and turn. Each loss of hit points, in this case, suggests that he is becoming progressively less nimble over the course of combat - in other words, that the decreasing hit points are a marker for his overall endurance and condition. It's not quite as satisfying, however, to roll a critical hit and then tell a player that his opponent ducked out of the way, but that the sword's slash made the enemy a little less lucky.</p>
<p>This variant system for tracking wounds and vigor should help to remedy that. As with the other systems in this section, this system is entirely optional.</p>
</>};
const _determining_wound_points_and_vigor_points = {title: "Determining Wound Points and Vigor Points", parent_topics: ["optional_combat_changes","wounds_and_vigor"], siblings: ["determining_wound_points_and_vigor_points","regaining_wound_points_and_vigor_points","attacks_that_deal_wound_point_damage","other_considerations_uc","wounds_and_vigor_variant_feats"], subtopics: ["wound_points","vigor_points"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 206</Link></p>
<p>Instead of hit points, creatures using this system have a number of wound points and vigor points. These two replacement scores are kept track of separately, and represent different ways a character handles the damage inflicted on him. The following are descriptions of these scores and how they work within the variant system of damage tracking.</p>
</>};
const _wound_points = {title: "Wound Points", parent_topics: ["optional_combat_changes","wounds_and_vigor","determining_wound_points_and_vigor_points"], siblings: ["wound_points","vigor_points"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 206</Link></p>
<p>Typically a creature has a number of wound points equal to twice its Constitution score. It also has a wound threshold equal to its Constitution score.</p>
<p>Wound points represent the amount of physical punishment a creature can take before it dies. When a creature's wound points drop to or below its wound threshold, that creature becomes wounded. When a creature is wounded, it gains the staggered condition until it is no longer wounded. Furthermore, when a creature is wounded, if that creature takes any standard or move action on its turn, its remaining wound points are reduced by 1 and it must make a DC 10 Constitution check. If the creature fails that check, it falls unconscious.</p>
<p>When a creature reaches 0 or fewer wound points, it is dead.</p>
<p><strong className="hl">Wound Points and Constitution Damage, Drain, and Penalties:</strong> A creature's wound points and Constitution score are intrinsically linked. For each point of Constitution damage a creature takes, it loses 2 wound points, but this damage does not affect the creature's wound threshold. When a creature takes a penalty to its Constitution score or its Constitution is drained, it loses 1 wound point per point of drain or per penalty for the duration of the penalty or drain. A penalty to Constitution or Constitution drain has no effect on the creature's wound threshold.</p>
</>};
const _vigor_points = {title: "Vigor Points", parent_topics: ["optional_combat_changes","wounds_and_vigor","determining_wound_points_and_vigor_points"], siblings: ["wound_points","vigor_points"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 206</Link></p>
<p>Vigor represents a creature's ability to avoid the majority of actual physical damage it might take from an attack. When a creature takes damage, the damage typically reduces its vigor points first. Some special attacks either deal wound point damage directly or deal both vigor and wound point damage (see <Link to="/rule/attacks_that_deal_wound_point_damage">Critical Hits</Link>).</p>
<p>Creatures with one or more full Hit Dice or levels gain vigor points. With each level gained or each Hit Die a creature has, it gains a number of vigor points based on its Hit Die type. Use the creature's Hit Dice to generate its vigor points, just like you would hit points, but without adding the creature's Constitution modifier. A creature gains maximum vigor points on its first Hit Die if it comes from a character class level. Creatures whose first full Hit Die comes from an NPC class or from their race roll their Hit Dice to determine their starting vigor points. A creature with less than one Hit Die has no vigor points; it only has wound points.</p>
<p>When a creature no longer has any vigor points, any additional damage it takes reduces its wound point total.</p>
</>};
const _regaining_wound_points_and_vigor_points = {title: "Regaining Wound Points and Vigor Points", parent_topics: ["optional_combat_changes","wounds_and_vigor"], siblings: ["determining_wound_points_and_vigor_points","regaining_wound_points_and_vigor_points","attacks_that_deal_wound_point_damage","other_considerations_uc","wounds_and_vigor_variant_feats"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 206</Link></p>
<p>A creature can regain wound and vigor points in a number of ways, but in general it is easier to regain vigor points.</p>
<p><strong className="hl">Healing Spells and Effects:</strong> When casting healing spells or using an ability with a healing effect (such as channeling holy energy on living creatures or the paladin's lay on hands ability), the creature casting the spell or using the effect must choose whether it wants to heal wound points or vigor points. The creature decides this before casting the spell or using the ability. When that creature decides to heal vigor points, the healing spell or effect acts normally, replenishing a number of vigor points equal to the number of hit points the spell or effect would normally heal. If the creature decides to heal wound points, it heals a number of wound points equal to the number of dice it would normally roll for the healing spell or effect. In the case of effects like the <Link to="/spell/heal">heal</Link> spell, where a spell or effect heals 10 hit points per caster level, the creature heals its caster level in wound points.</p>
<p>For instance, if a 12th-level cleric uses her channel positive energy power to replenish wound points to living creatures, she would typically heal 6 wound points for all living creatures with her channel energy burst. If she casts the <em>heal</em> spell, she would restore 12 wound points to the creature touched.</p>
<p><strong className="hl">Rest:</strong> When a creature has a full night's rest (8 hours of sleep or more), that creature regains all its vigor points and 1 wound point. If there is a significant interruption during a rest, the creature regains neither wound points nor vigor points. If a creature undergoes complete bed rest for an entire day, it regains half its level in wound points and all its vigor points.</p>
<p><strong className="hl">Restoration and Similar Effects:</strong> When a creature regains Constitution points by way of the restoration spell or a similar effect, that creature regains 2 wound points for every Constitution point regained. Relieving a Constitution penalty or Constitution drain regains any wound points that were lost from that penalty or drain.</p>
</>};
const _attacks_that_deal_wound_point_damage = {title: "Attacks that Deal Wound Point Damage", parent_topics: ["optional_combat_changes","wounds_and_vigor"], siblings: ["determining_wound_points_and_vigor_points","regaining_wound_points_and_vigor_points","attacks_that_deal_wound_point_damage","other_considerations_uc","wounds_and_vigor_variant_feats"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 207</Link></p>
<p>Some attacks can be used to deal wound points damage directly.</p>
<p><strong className="hl">Critical Hits:</strong> When a creature is subject to a critical hit, the critical hit deals the damage normally, reducing vigor points first, and then reducing wound points when vigor points are gone. It also deals an amount of wound point damage equal to its critical multiplier (for example, 3 wound points for a weapon with a &times;3 modifier), on top of any wound point damage the creature might take from the critical hit.</p>
<p><strong className="hl">Negative Energy Damage:</strong> When a creature deals negative energy damage to a creature with a spell or effect, it can choose to deal wound point or vigor point damage (but not both) with the spell or effect. If that creature chooses to deal vigor point damage, the spell or effect deals negative energy damage normally, and that damage reduces vigor points only, even if it deals more damage than the target has vigor points. If the spell or effect deals negative energy damage to wound points directly, it deals an amount of wound point damage equal to the number of dice the creature would roll for that effect; if the effect deals a number of points per caster level (such as the <Link to="/spell/harm">harm</Link> spell), it deals a number of wound points equal to the caster level of the spell.</p>
</>};
const _other_considerations_uc = {title: "Other Considerations", parent_topics: ["optional_combat_changes","wounds_and_vigor"], siblings: ["determining_wound_points_and_vigor_points","regaining_wound_points_and_vigor_points","attacks_that_deal_wound_point_damage","other_considerations_uc","wounds_and_vigor_variant_feats"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 207</Link></p>
<p>The following are a few other considerations to take into account when using the wounds and vigor system.</p>
<p><strong className="hl">Temporary Hit Points:</strong> When a creature would normally gain temporary hit points, it gains temporary vigor points instead. When that creature takes damage, it loses these temporary vigor points first. If an attack deals damage to wound points only, these temporary vigor points are not lost.</p>
<p><strong className="hl">Nonlethal Damage:</strong> When a creature takes nonlethal damage, it takes that damage in vigor points only, even if the attack deals more damage than the creature has vigor points. If the creature has no vigor points (and no temporary vigor points), each time that creature takes damage from an attack that deals nonlethal damage, it takes either 1 wound point of damage, or a number of wound points in damage equal to the attack's critical hit modifier if the attack is a critical hit.</p>
<p><strong className="hl">Spells or Effects with Hit Point Triggers:</strong> When using this system, if a spell or an ability has an effect that occurs when you reduce a creature to 0 or fewer hit points (such as the <Link to="/spell/disintegrate">disintegrate</Link> spell), that effect is instead triggered when a creature is wounded. In the case of the harm spell or a similar effect where a creature cannot be reduced below 1 hit point by the spell or effect, a creature's wound points cannot be reduced to or below that creature's wound threshold.</p>
</>};
const _wounds_and_vigor_variant_feats = {title: "Wounds and Vigor Variant Feats", parent_topics: ["optional_combat_changes","wounds_and_vigor"], siblings: ["determining_wound_points_and_vigor_points","regaining_wound_points_and_vigor_points","attacks_that_deal_wound_point_damage","other_considerations_uc","wounds_and_vigor_variant_feats"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 207</Link></p>
<p>The following feats are either new for the wounds and vigor system or work differently in that system.</p>
<h3 id="rule-wounds_and_vigor_variant_feats-deathless-initiate-combat">Deathless Initiate (Combat)</h3>
<p>For you, impending death is a call to wrath.</p>
<p><strong>Prerequisites:</strong> Str 13, Con 13, <Link to="/feat/diehard">Diehard</Link>, <Link to="/feat/endurance">Endurance</Link>, base attack bonus +6, orc or half-orc.</p>
<p><strong>Benefit:</strong> You are not staggered when your wound points reach your wound threshold, but you lose 1 wound point if you take any action during your turn. You only take 1 wound point each round when you take actions. Furthermore, you gain a +2 bonus on melee attacks and damage rolls when your wound points are at or below your wound threshold.</p>
<h3 id="rule-wounds_and_vigor_variant_feats-deathless-master-combat">Deathless Master (Combat)</h3>
<p>Even if you suffer a grievous wound, you can shrug off the damage and continue your relentless assault.</p>
<p><strong>Prerequisites:</strong> Str 13, Con 15, <Link to="/feat/deathless_initiate">Deathless Initiate</Link>, Diehard, Endurance, <Link to="/feat/ironhide">Ironhide</Link>, base attack bonus +9, orc or half-orc.</p>
<p><strong>Benefit:</strong> When your wound points reach your wound threshold, you do not take 1 wound point when you take an action.</p>
<h3 id="rule-wounds_and_vigor_variant_feats-diehard">Diehard</h3>
<p>You keep on going, even when your wound points are lower than your wound threshold.</p>
<p><strong>Benefit:</strong> When your current wound point total is below your wound threshold, you do not need to succeed at the DC 10 Constitution check to stay conscious.</p>
<h3 id="rule-wounds_and_vigor_variant_feats-toughness">Toughness</h3>
<p>You have enhanced physical stamina.</p>
<p><strong>Benefit:</strong> You gain 1 wound point for every level or Hit Die your character has.</p>
</>};
export default {optional_combat_changes:_optional_combat_changes,armor_as_damage_reduction:_armor_as_damage_reduction,defense:_defense,armor_as_dr:_armor_as_dr,critical_hits_and_defense:_critical_hits_and_defense,called_shots:_called_shots,making_called_shots:_making_called_shots,additional_rules:_additional_rules,called_shot_effects:_called_shot_effects,arm:_arm,chest:_chest,ear:_ear,eye:_eye,hand:_hand,head:_head,heart:_heart,leg:_leg,neck:_neck,vitals:_vitals,piecemeal_armor:_piecemeal_armor,armor_pieces_and_armor_suits:_armor_pieces_and_armor_suits,armor_pieces_and_proficiency:_armor_pieces_and_proficiency,masterwork_special_material_and_magic_armor:_masterwork_special_material_and_magic_armor,adamantine:_adamantine,dragonhide:_dragonhide,mithral:_mithral,getting_into_and_out_of_armor_pieces:_getting_into_and_out_of_armor_pieces,armor_pieces_for_unusual_creatures:_armor_pieces_for_unusual_creatures,armor_and_armor_piece_hit_points_and_hardness:_armor_and_armor_piece_hit_points_and_hardness,armor_piece_descriptions:_armor_piece_descriptions,arms:_arms,legs:_legs,torso:_torso,removing_iterative_attacks:_removing_iterative_attacks,the_basics:_the_basics,attacking_multiple_targets:_attacking_multiple_targets,critical_hits_pu:_critical_hits_pu,two_weapon_fighting_pu:_two_weapon_fighting_pu,natural_attacks_pu:_natural_attacks_pu,special_cases:_special_cases,variant_mobile_melee:_variant_mobile_melee,revised_action_economy:_revised_action_economy,revised_action_economy_overview:_revised_action_economy_overview,action_types_and_subtypes:_action_types_and_subtypes,simple_actions:_simple_actions,advanced_actions:_advanced_actions,free_actions_pu:_free_actions_pu,reactions:_reactions,converting_other_actions:_converting_other_actions,final_considerations:_final_considerations,wound_thresholds:_wound_thresholds,setup:_setup,thresholds_and_conditions:_thresholds_and_conditions,monster_wound_thresholds:_monster_wound_thresholds,wounds_threshold_feats:_wounds_threshold_feats,gritty_mode:_gritty_mode,wounds_and_vigor:_wounds_and_vigor,determining_wound_points_and_vigor_points:_determining_wound_points_and_vigor_points,wound_points:_wound_points,vigor_points:_vigor_points,regaining_wound_points_and_vigor_points:_regaining_wound_points_and_vigor_points,attacks_that_deal_wound_point_damage:_attacks_that_deal_wound_point_damage,other_considerations_uc:_other_considerations_uc,wounds_and_vigor_variant_feats:_wounds_and_vigor_variant_feats}