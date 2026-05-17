import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _banishing_warden = {title: "Banishing Warden", jsx: <><h2 id="arc-paladin-banishing_warden-banishing-warden">Banishing Warden</h2>
<p><strong>Sources</strong> <Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook pg. 18</Link><br/>The banishing warden is an expert at fighting all types of evil outsiders and sending them back to their native planes.</p>
<Ability icon={["skills"]} id="arc-paladin-banishing_warden-undefined">
<Pair id="arc-paladin-banishing_warden-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (nobility)</Pair></Ability>
<Ability id="arc-paladin-banishing_warden-smite-evil-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-paladin-banishing_warden-smite-evil-su">Smite Evil (Su)</Pair>
<Pair hl title="Alters">Smite evil</Pair>
<Pair title="Info">A banishing warden's <em>smite evil</em> deals its bonus damage only on the first attack against outsiders (but not dragons or undead). However, it damages any evil outsider, not only those with the evil subtype (including <Link to="/subtype/native">native</Link> outsiders).</Pair>
</Ability>
<Ability id="arc-paladin-banishing_warden-banishing-smite-su" icon={["magic-swirl"]}>
<Pair single id="arc-paladin-banishing_warden-banishing-smite-su">Banishing Smite (Su)</Pair>
<Pair hl title="Replaces">3rd-level mercy</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">1 time/day + 1 per six paladin levels beyond 3rd<ByLevelPop levels={[[3,1],[9,2],[15,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">When the banishing warden confirms a critical hit against a target of her <em>smite evil</em> effect, she can attempt to forcibly <Link to="/spell/banishment">banish</Link> the target to its home plane. The creature struck must succeed at a Will save (DC = 10 + half the banishing warden's level + the banishing warden's Charisma modifier) or be sent back to its home plane as per <Link to="/spell/dismissal">dismissal</Link>.</Pair>
<Pair title="At 10th Level">A creature dismissed in this manner takes an amount of damage equal to 2 points per paladin level at the start of its next turn.</Pair>
<Pair title="Special">A banishing warden still receives the benefits of the <em>mercy</em> class ability starting at 6th level and onward.</Pair>
</Ability>
<Ability id="arc-paladin-banishing_warden-smiting-aura-su" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-banishing_warden-smiting-aura-su">Smiting Aura (Su)</Pair>
<Pair hl title="Alters">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">When an ally of the banishing warden is affected by her <em>aura of justice,</em> that ally can use <em>banishing smite.</em> This counts toward the banishing warden's number of uses per day and cannot be activated if the banishing warden has no uses of <em>banishing smite</em> remaining.</Pair>
</Ability>
</>};
const _champion_of_the_cascade = {title: "Champion of the Cascade", jsx: <><h2 id="arc-paladin-champion_of_the_cascade-champion-of-the-cascade">Champion of the Cascade</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 30</Link><br/>Great civilizations may rise and fall, but water will always mark the places where cities grow. Rivers carve trails through the ground, enabling travel and trade and delivering the fresh water necessary to make agrarian society possible. Champions of the cascade are paladins who defend the freedom and purity of waterways, protecting the very existence of the civilizations they belong to.</p>
<Ability id="arc-paladin-champion_of_the_cascade-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-paladin-champion_of_the_cascade-armor-proficiency">Armor Proficiency</Pair>
<Pair hl title="Alters">Armor proficiency</Pair>
<Pair title="Info">A champion of the cascade is proficient with light armor, medium armor, and shields (except tower shields).</Pair>
</Ability>
<Ability icon={["skills"]} id="arc-paladin-champion_of_the_cascade-undefined">
<Pair id="arc-paladin-champion_of_the_cascade-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/swim">Swim</Link> (STR)</Pair>
<Pair title="Removed Skills">Knowledge (nobility)</Pair></Ability>
<Ability id="arc-paladin-champion_of_the_cascade-swiftsurge-ex" icon={["upgrade"]}>
<Pair single id="arc-paladin-champion_of_the_cascade-swiftsurge-ex">Swiftsurge (Ex)</Pair>
<Pair hl title="Replaces">Divine health</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A champion of the cascade does not take any penalty on Acrobatics or Swim checks due to her armor check penalty.</Pair>
</Ability>
<Ability id="arc-paladin-champion_of_the_cascade-flowing-stride-su" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-champion_of_the_cascade-flowing-stride-su">Flowing Stride (Su)</Pair>
<Pair hl title="Replaces">Mercy</Pair>
<Pair title="At 3rd Level">Whenever a champion of the cascade uses <em>lay on hands</em> to restore hit points to one target, she can grant a willing target the ability to walk on water as <Link to="/spell/water_walk">water walk</Link> for 1 minute.</Pair>
<Pair title="At 9th Level">This extends to creatures healed by her <em>channel positive energy.</em></Pair>
<Pair title="At 15th Level">Healed creatures can walk on water for 24 hours.</Pair>
</Ability>
<Ability id="arc-paladin-champion_of_the_cascade-rising-tide-su" icon={["magic-swirl"]}>
<Pair single id="arc-paladin-champion_of_the_cascade-rising-tide-su" flavor="A champion of the cascade's connection to her deity allows her to summon rivers and alter her surroundings">Rising Tide (Su)</Pair>
<Pair hl title="Replaces">Divine bond</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">1 minute/day per paladin level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Standard Action">She can change up to two 5-foot squares per paladin level within 100 feet to become freshwater pools with a depth of up to 5 feet per paladin level. The squares must be adjacent to each other. Each creature standing in the area where she first creates the water must attempt a Reflex save (DC = 10 + half the paladin's level + the paladin's Charisma modifier) to jump to the nearest unaffected space and avoid falling into the water.</Pair>
<Pair title="Info">The changed squares revert back to their original form after the duration ends, and any creatures in the water are shunted out to the nearest open space.</Pair>
<Pair title="At 10th Level">As a <strong className="hl">swift action</strong>, she may spend 1 minute of her <em>rising tide's</em> duration to create a geyser in any body of water she has created, lifting an allied creature in that square up to 10 feet per paladin level into the air for 1 round.</Pair>
</Ability>
</>};
const _chaos_knight = {title: "Chaos Knight", jsx: <><h2 id="arc-paladin-chaos_knight-chaos-knight">Chaos Knight</h2>
<p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 18</Link><br/>Despite the entropic forces inherent in ganzis, some forgo a life of chaos, instead harnessing their heritage to enforce the power of law. The chaos knight is able to tap into the nature of the Maelstrom in order to grant or gain small, unpredictable blessings to aid on her quest for order. The following archetype is available to ganzi characters.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-paladin-chaos_knight--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/ganzi">Ganzi</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-paladin-chaos_knight-entropic-touch-su" icon={["shield-reflect","armor-upgrade"]}>
<Pair single id="arc-paladin-chaos_knight-entropic-touch-su" flavor="A chaos knight can employ the forces of entropy with a touch to shatter a mind-affecting spell or effect currently affecting an ally.">Entropic Touch (Su)</Pair>
<Pair hl title="Replaces">Lay on hands</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">A number of times per day equal to half his paladin level + his Charisma modifier</Pair>
<Pair title="Standard Action">He can touch a creature to grant that creature a new saving throw against one mind-affecting effect, with a bonus on the save equal to <Link to="/misc/one_third">one-third</Link> the chaos knight's level (minimum +0).</Pair>
<Pair title="Special">If the chaos knight targets himself, he can use this ability as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-paladin-chaos_knight-blessings-of-the-maelstrom-su" icon={["shield-reflect","armor-upgrade","upgrade"]}>
<Pair single id="arc-paladin-chaos_knight-blessings-of-the-maelstrom-su" flavor="A chaos knight can harness the unpredictable essence of the Maelstrom to bless a creature.">Blessings of the Maelstrom (Su)</Pair>
<Pair hl title="Replaces">Mercy</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability"><p>When he uses his <em>entropic touch</em> ability, the chaos knight can grant the touched creature a blessing from the table below that lasts for a number of rounds equal to 1 + the chaos knight's Charisma modifier (minimum 1 round). The creature rolls 1d4 and compares the result to the table below to determine the blessing. If the chaos knight targets himself with the blessing, he can roll twice and choose his preferred result.</p>
<ScrollContainer id="arc-paladin-chaos_knight--table-1"><table>
<thead>
<tr>
<th>D4</th>
<th>Blessing</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>The creature gains a sacred bonus to AC equal to 1/5 the paladin's level (minimum +1).</td>
</tr>
<tr>
<td>2</td>
<td>The creature gains a sacred bonus on weapon damage rolls equal to the chaos knight's Charisma modifier.</td>
</tr>
<tr>
<td>3</td>
<td>The creature gains <Link to="/umr/fast_healing">fast healing</Link> 2. This fast healing increases by 1 for every 3 levels the chaos knight has.</td>
</tr>
<tr>
<td>4</td>
<td>The creature gains an enhancement bonus to its movement speeds, adding 5 feet of movement for every 2 levels the chaos knight has (to a maximum of +40 feet).</td>
</tr>
</tbody></table></ScrollContainer>
<p>Only one creature can have this blessing at a time. If another creature gains the blessing, the previous blessing ends.</p>
</Pair>
<Pair title="At 5th Level">He can now maintain the blessing on 2 creatures at the same time.</Pair>
<Pair title="At 8th Level">He can now maintain the blessing on 3 creatures at the same time.</Pair>
<Pair title="At 11th Level">He can now maintain the blessing on 4 creatures at the same time.</Pair>
<Pair title="At 14th Level">He can now maintain the blessing on 5 creatures at the same time.</Pair>
<Pair title="At 17th Level">He can now maintain the blessing on 6 creatures at the same time.</Pair>
<Pair title="At 20th Level">He can now maintain the blessing on 7 creatures at the same time.</Pair>
</Ability>
<Ability id="arc-paladin-chaos_knight-aura-of-chaos-su" icon={["upgrade","armor-downgrade"]}>
<Pair single id="arc-paladin-chaos_knight-aura-of-chaos-su">Aura of Chaos (Su)</Pair>
<Pair hl title="Replaces">Aura of faith</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">A chaos knight treats his weapons as chaos-aligned for the purposes of bypassing damage reduction. In addition, the chaos knight treats attacks targeting enemies within 10 feet of him as chaos-aligned for the purpose of overcoming damage reduction.</Pair>
</Ability>
</>};
const _chosen_one = {title: "Chosen One", jsx: <><h2 id="arc-paladin-chosen_one-chosen-one">Chosen One</h2>
<p><strong>Sources</strong> <Link to="/source/familiar_folio">Familiar Folio pg. 6</Link><br/>Most paladins train for years at a temple to attain a holy status, but rarely, an emissary of the divine appears to one of humble origins and calls her directly to the charge. These chosen ones may lack experience, but their teamwork with their emissaries allows them to defeat any evil.</p>
<Ability id="arc-paladin-chosen_one-bondless" icon={["broken-shield"]}>
<Pair single id="arc-paladin-chosen_one-bondless">Bondless</Pair>
<Pair title="Info">A chosen one does not gain the <em>divine bond</em> class feature.</Pair>
</Ability>
<Ability id="arc-paladin-chosen_one-divine-emissary-ex" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-chosen_one-divine-emissary-ex">Divine Emissary (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A chosen one gains an <Link to="/arc-familiar/emissary">emissary</Link> <Link to="/ability/familiar">familiar</Link>, treating her paladin level as her <Link to="/class/wizard">wizard</Link> level for the purpose of this ability.</Pair>
</Ability>
<Ability id="arc-paladin-chosen_one-religious-mentor-ex" icon={["upgrade","broken-shield","skills"]}>
<Pair single id="arc-paladin-chosen_one-religious-mentor-ex" flavor={<>The <Link to="/sidekick/familiar">familiar's</Link> sworn duty is to help train the chosen one for her future glory.</>}>Religious Mentor (Ex)</Pair>
<Pair title="Passive Ability">The familiar is treated as having a number of ranks in Knowledge (religion) equal to the chosen one's paladin level.</Pair>
<Pair title="Special">The chosen one doesn't gain Knowledge (religion) as a class skill.</Pair>
</Ability>
<Ability id="arc-paladin-chosen_one-delayed-grace-su" icon={["info","broken-shield"]}>
<Pair single id="arc-paladin-chosen_one-delayed-grace-su" flavor="A chosen one begins her adventuring career without fully understanding her true potential.">Delayed Grace (Su)</Pair>
<Pair hl title="Alters">Divine grace, smite evil</Pair>
<Pair title="Passive Ability">The chosen one uses the Intuitive column to calculate her typical starting <Link to="/rule/age">age</Link>.</Pair>
<Pair title="Info">She receives the <em>smite evil</em> ability at 2nd level and the <em>divine grace</em> ability at 4th level. This does not affect the rate at which she gains additional uses per day of <em>smite evil,</em> so she still gains her second use at 4th level, her third at 7th level, and so on.</Pair>
</Ability>
<Ability id="arc-paladin-chosen_one-lay-on-paws-su" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-chosen_one-lay-on-paws-su" flavor="A chosen one's familiar is able to borrow some of her divine energy to heal itself and others.">Lay on Paws (Su)</Pair>
<Pair hl title="Alters">Lay on hands, channel positive energy</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">The familiar can use the chosen one's <em>lay on hands</em> ability, including all of her mercies, but each such use consumes two uses of the paladin's <em>lay on hands</em> ability.</Pair>
<Pair title="At 4th Level">The familiar can also <em>channel positive energy,</em> but each such use consumes four uses of the paladin's <em>lay on hands</em> ability.</Pair>
</Ability>
<Ability id="arc-paladin-chosen_one-true-form-ex" icon={["magic-swirl"]}>
<Pair single id="arc-paladin-chosen_one-true-form-ex">True Form (Ex)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A chosen one's familiar reveals its true form, transforming into an outsider <Link to="/ability/improved_familiars">improved familiar</Link> that matches the chosen one's patron's alignment (typically an <Link to="/monster/arbiter">arbiter</Link>, a <Link to="/monster/cassisian">cassisian</Link>, a <Link to="/monster/harbinger">harbinger</Link>, or a <Link to="/monster/silvanshee">silvanshee</Link>, but potentially any lawful neutral, lawful good, or neutral good outsider familiar depending on the patron). The familiar gains the <Link to="/umr/change_shape">change shape</Link> universal monster ability if it doesn't already have it, which it can use at will to transform into its original form or back to its true form.</Pair>
</Ability>
<Ability id="arc-paladin-chosen_one-emissarys-smite-su" icon={["upgrade"]}>
<Pair single id="arc-paladin-chosen_one-emissarys-smite-su">Emissary's Smite (Su)</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">A chosen one's familiar also benefits from the paladin's <em>smite evil</em> ability whenever the chosen one uses <em>smite evil.</em></Pair>
</Ability>
</>};
const _combat_healer_squire = {title: "Combat Healer Squire", jsx: <><h2 id="arc-paladin-combat_healer_squire-combat-healer-squire">Combat Healer Squire</h2>
<p><strong>Sources</strong> <Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea pg. 20</Link><br/>Always ready with bandages and potions, the combat healer squire keeps her knight on his feet against all odds, and always has just the right remedy on hand.</p>
<Ability id="arc-paladin-combat_healer_squire-careful-healer-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-paladin-combat_healer_squire-careful-healer-ex">Careful Healer (Ex)</Pair>
<Pair hl title="Replaces">Detect evil</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A combat healer squire provokes no attacks of opportunity when she uses the <Link to="/skill/heal">Heal</Link> skill to stabilize a creature or treat poison. In addition, when she administers long-term care with the Heal skill, she can restore a total number of additional hit points equal to her character level, divided as she wishes among those she is tending.</Pair>
</Ability>
<Ability id="arc-paladin-combat_healer_squire-dress-wounds-su" icon={["heart-plus"]}>
<Pair single id="arc-paladin-combat_healer_squire-dress-wounds-su">Dress Wounds (Su)</Pair>
<Pair hl title="Replaces">Divine grace</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A combat healer squire can hastily dress a deadly wound for her knight, temporary alleviating his suffering. This ability acts in all ways like using the Heal skill to treat deadly wounds, except the combat healer squire only needs to take a <strong className="hl">full-round action</strong> to use this ability. The hit points healed are temporary, and only last 10 minutes, but they are not lost first like <Link to="/rule/temporary_hit_points">temporary hit points</Link>.</Pair>
<Pair title="Special">A combat healer squire can only use this ability on her knight, not other creatures. A knight cannot benefit from this ability more than once per day, and cannot be treated for deadly wounds with the Heal skill within 24 hours of being subjected to this ability.</Pair>
</Ability>
<Ability id="arc-paladin-combat_healer_squire-swift-healer-ex" icon={["upgrade"]}>
<Pair single id="arc-paladin-combat_healer_squire-swift-healer-ex">Swift Healer (Ex)</Pair>
<Pair hl title="Replaces">Divine health</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A combat healer squire becomes even more adept when treating wounds, and can use the Heal skill to perform first aid or treat poison as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
</>};
const _divine_defender = {title: "Divine Defender", jsx: <><h2 id="arc-paladin-divine_defender-divine-defender">Divine Defender</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 116</Link><br/>Some paladins see themselves as the last line of defense between the teeming hordes of evil and the innocent folk trying to make a living in a harsh, unforgiving world. These defenders spend their lives protecting others and taking on foes that the common man should not even know exist. To aid them in their holy mission, they have special powers to protect themselves and those around them. The divine defender has the following class features.</p>
<Ability id="arc-paladin-divine_defender-shared-defense-su" icon={["shield-reflect"]}>
<Pair single id="arc-paladin-divine_defender-shared-defense-su">Shared Defense (Su)</Pair>
<Pair hl title="Replaces">Mercy</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Standard Action">A divine defender can spend one use of her <em>lay on hands</em> ability to grant all adjacent allies (including paladins) a bonus. Adjacent allies receive a +1 sacred bonus to their AC and CMD and on their saving throws. These bonuses last for a number of rounds equal to the divine defender's Charisma modifier.</Pair>
<Pair title="At 6th Level">These bonuses are granted to all allies within 10 feet, and allies that are at fewer than 0 hit points within this area are automatically stabilized.</Pair>
<Pair title="At 9th Level">The bonus becomes +2.</Pair>
<Pair title="At 12th Level">These bonuses are granted to all allies within 15 feet, and allies within this area are immune to <Link to="/umr/bleed">bleed</Link> damage.</Pair>
<Pair title="At 15th Level">The bonus increases to +3.</Pair>
<Pair title="At 18th Level">These bonuses are granted to all allies within 20 feet, and allies within this area gain a 25% chance to negate any sneak attack or critical hit scored against them. This ability does not stack with the chance provided from the light, medium, or heavy fortification armor special abilities.</Pair>
<Pair title="Special">These bonuses are cumulative with each other. Allies only benefit from these bonuses while in the listed area.</Pair>
</Ability>
<Ability id="arc-paladin-divine_defender-divine-bond-su" icon={["armor-upgrade","hazard-sign"]}>
<Pair single id="arc-paladin-divine_defender-divine-bond-su" flavor={<>Instead of forming a <em>divine bond</em> with her weapon or a mount, a divine defender can form a bond with her armor.</>}>Divine Bond (Su)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">1 time/day + 1 per three paladin levels beyond 5th<ByLevelPop levels={[[5,1],[8,2],[11,3],[14,4],[17,5],[20,6]]} unit="time" postText="/day" /></Pair>
<Pair title="Standard Action">A divine defender can enhance her armor by calling upon the aid of a celestial spirit. This bond lasts for 1 minute per paladin level. When called, the spirit causes the armor to shed light like a <Link to="/eq-misc/torch">torch</Link>. The spirit grants the armor a +1 enhancement bonus.</Pair>
<Pair title="At 8th Level">The armor gains a 2nd +1 enhancement bonus. These bonuses can be added to the armor, stacking with existing armor bonuses to a maximum of +3, or they can be used to add any of the following armor properties: <Link to="/magic-enh/champion">champion</Link>, <Link to="/magic-enh/ghost_touch_a">ghost touch</Link>, <Link to="/magic-enh/heavy_fortification">heavy fortification</Link>, <Link to="/magic-enh/invulnerability">invulnerability</Link>, <Link to="/magic-enh/light_fortification">light fortification</Link>, <Link to="/magic-enh/moderate_fortification">moderate fortification</Link>, <Link to="/magic-enh/spell_resistance">spell resistance</Link> (13, 15, 17, or 19). Adding these properties consumes an amount of bonus equal to the property's cost. If the armor is not magical, at least a +1 enhancement bonus must be added before any other properties can be added.</Pair>
<Pair title="At 11th Level">The armor gains a 3rd +1 enhancement bonus. In addition, the bonuses can be consumed at the listed amount to add any of the following armor properties: <Link to="/magic-enh/energy_resistance">energy resistance</Link> for +3 bonus, <Link to="/magic-enh/improved_energy_resistance">improved energy resistance</Link> for +5 bonus, or <Link to="/magic-enh/righteous">righteous</Link> for +4 bonus.</Pair>
<Pair title="At 14th Level">The armor gains a 4th +1 enhancement bonus.</Pair>
<Pair title="At 17th Level">The armor gains a 5th +1 enhancement bonus.</Pair>
<Pair title="At 20th Level">The armor gains a 6th +1 enhancement bonus.</Pair>
<Pair title="Special">These bonuses are added to any properties the armor already has, but duplicate abilities do not stack. The bonus and properties granted by the spirit are determined when the spirit is called and cannot be changed until the spirit is called again. The celestial spirit imparts no bonuses if the armor is worn by anyone other than the divine defender, but it resumes giving bonuses if the divine defender dons the armor again. If a suit of armor with a celestial spirit is destroyed, the divine defender loses the use of this ability for 30 days, or until she gains a level, whichever comes first. During this 30-day period, the divine defender takes a -1 penalty on attack and weapon damage rolls.</Pair>
</Ability>
</>};
const _divine_guardian = {title: "Divine Guardian", jsx: <><h2 id="arc-paladin-divine_guardian-divine-guardian">Divine Guardian</h2>
<p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions pg. 23</Link><br/>The divine guardian devotes herself to the protection and guardianship of one creature at a time, be that her liege lord, an allied cleric, or an innocent facing overwhelming danger at the hands of evil.</p>
<Ability id="arc-paladin-divine_guardian-martial-focus" icon={["broken-shield"]}>
<Pair single id="arc-paladin-divine_guardian-martial-focus">Martial Focus</Pair>
<Pair title="Info">The divine guardian devotes herself to the concerns of the material world, eschewing some divine studies. She does not gain access to divine spellcasting and cannot use <Link to="/misc/spell_completion">spell-completion</Link> magic items.</Pair>
</Ability>
<Ability id="arc-paladin-divine_guardian-divine-troth-sp" icon={["shield-reflect","magic-swirl"]}>
<Pair single id="arc-paladin-divine_guardian-divine-troth-sp">Divine Troth (Sp)</Pair>
<Pair hl title="Replaces">Detect evil</Pair>
<Pair title="Ability">Once per day the divine guardian pledges her protection to a willing creature for the day. This is done at the same time she prepares her spells. When the paladin first selects a creature for <em>divine troth,</em> that creature must be present and agree to receive the paladin's protection, but if the paladin already has a creature selected for <em>divine troth,</em> she can maintain that selection each day without her charge being present.</Pair>
<Pair title="Ability">Once per day, the divine guardian can cast <Link to="/spell/locate_creature">locate creature</Link> to find the current target of her <em>divine troth.</em></Pair>
</Ability>
<Ability id="arc-paladin-divine_guardian-guarding-hands-su" icon={["info","broken-shield"]}>
<Pair single id="arc-paladin-divine_guardian-guarding-hands-su">Guarding Hands (Su)</Pair>
<Pair hl title="Alters">Lay on hands</Pair>
<Pair title="Info">The paladin can use <em>lay on hands</em> to heal herself or her <em>divine troth</em> as a <strong className="hl">move action</strong>, but cannot use <em>lay on hands</em> to heal herself as a swift action. The divine guardian cannot use <em>lay on hands</em> more than once per round.</Pair>
</Ability>
<Ability id="arc-paladin-divine_guardian-courageous-defense-ex" icon={["shield-reflect","broken-shield"]}>
<Pair single id="arc-paladin-divine_guardian-courageous-defense-ex">Courageous Defense (Ex)</Pair>
<Pair hl title="Alters">Aura of courage</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A divine guardian can intercept attacks directed at the target of her <em>divine troth</em> as if she had the <Link to="/feat/bodyguard">Bodyguard</Link> and <Link to="/feat/in_harms_way">In Harm's Way</Link> feats.</Pair>
<Pair title="Info">The divine guardian's <em>aura of courage</em> does not grant a bonus to allies within 10 feet, but still grants her immunity to fear effects.</Pair>
</Ability>
<Ability id="arc-paladin-divine_guardian-bonus-feat" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-divine_guardian-bonus-feat">Bonus Feat</Pair>
<Pair title="At 7th Level">A divine guardian gains a bonus feat, chosen from the following list: <Link to="/feat/diehard">Diehard</Link>, <Link to="/feat/endurance">Endurance</Link>, <Link to="/feat/greater_shield_focus">Greater Shield Focus</Link>, <Link to="/feat/greater_shield_specialization">Greater Shield Specialization</Link>, <Link to="/feat/heroic_defiance">Heroic Defiance</Link>, <Link to="/feat/heroic_recovery">Heroic Recovery</Link>, <Link to="/feat/missile_shield">Missile Shield</Link>, <Link to="/feat/ray_shield">Ray Shield</Link>, <Link to="/feat/saving_shield">Saving Shield</Link>, <Link to="/feat/shield_focus">Shield Focus</Link>, <Link to="/feat/shield_specialization">Shield Specialization</Link>, or <Link to="/feat/tower_shield_proficiency">Tower Shield Proficiency</Link>.</Pair>
<Pair title="At 10th Level">She gains a second bonus feat from the list above.</Pair>
<Pair title="At 13th Level">She gains a third feat from the list above.</Pair>
<Pair title="Special">She must meet these feats' prerequisites, but for purposes of meeting the prerequisites of these bonus feats, she treats her paladin level as her fighter level, may use her Charisma score as her Dexterity score, and is considered to have the <Link to="/feat/spellbreaker">Spellbreaker</Link> feat.</Pair>
</Ability>
</>};
const _divine_hunter = {title: "Divine Hunter", jsx: <><h2 id="arc-paladin-divine_hunter-divine-hunter">Divine Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 62</Link><br/>Most paladins rush into battle, meeting evil toe-to-toe. The divine hunter prefers to engage evil from afar, striking down her foes before they can threaten her allies.</p>
<Ability id="arc-paladin-divine_hunter-precise-shot" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-divine_hunter-precise-shot">Precise Shot</Pair>
<Pair hl title="Replaces">Heavy Armor Proficiency</Pair>
<Pair title="At 1st Level">A divine hunter gains <Link to="/feat/precise_shot">Precise Shot</Link> as a bonus feat, even if she doesn't meet the prerequisites.</Pair>
</Ability>
<Ability id="arc-paladin-divine_hunter-shared-precision-su" icon={["upgrade"]}>
<Pair single id="arc-paladin-divine_hunter-shared-precision-su">Shared Precision (Su)</Pair>
<Pair hl title="Replaces">Aura of courage</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">When a divine hunter hits a creature with a ranged attack, she grants her allies within 10 feet of her the benefit of the Precise Shot feat against that target until the start of her next turn. Her allies must remain within 10 feet of her, and must be able both to see and hear the divine hunter to gain this benefit.</Pair>
</Ability>
<Ability id="arc-paladin-divine_hunter-divine-bond-su" icon={["upgrade"]}>
<Pair single id="arc-paladin-divine_hunter-divine-bond-su">Divine Bond (Su)</Pair>
<Pair hl title="Replaces">Divine bond</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A divine hunter forms a bond with her deity. This functions as the paladin's <em>divine bond</em> ability, except the bond must always take the form of a ranged or throwing weapon (excluding ammunition). In addition to the listed abilities, a divine hunter can add the <Link to="/magic-enh/distance">distance</Link>, <Link to="/magic-enh/returning">returning</Link>, or <Link to="/magic-enh/seeking">seeking</Link> special abilities to her weapon, but she cannot add the <em>defending</em> or <em>disruption</em> special abilities.</Pair>
<Pair title="Special">Special abilities added to throwing weapons function normally when the weapon is used in melee.</Pair>
</Ability>
<Ability id="arc-paladin-divine_hunter-distant-mercy-sp" icon={["heart-plus"]}>
<Pair single id="arc-paladin-divine_hunter-distant-mercy-sp">Distant Mercy (Sp)</Pair>
<Pair hl title="Replaces">6th-level mercy</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A divine hunter can expend two uses of her <em>lay on hands</em> abilities to use her <em>lay on hands</em> ability on a target within 5 feet per paladin level. <em>Distant mercy</em> has no effect on creatures harmed by positive energy, such as undead.</Pair>
</Ability>
<Ability id="arc-paladin-divine_hunter-aura-of-care-su" icon={["upgrade"]}>
<Pair single id="arc-paladin-divine_hunter-aura-of-care-su">Aura of Care (Su)</Pair>
<Pair hl title="Replaces">Aura of resolve</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">A divine hunter and her allies gain a preternatural awareness of each other's position in battle. She and any allies within 10 feet of her no longer provide <Link to="/rule/cover">cover</Link> against each other's ranged attacks unless they wish to. Allies who cannot move or otherwise take actions still provide cover, as do <Link to="/rule/flat_footed">flat-footed</Link> allies. The divine hunter and her allies must be able to see or hear each other to use this ability.</Pair>
</Ability>
<Ability id="arc-paladin-divine_hunter-hunters-blessing-su" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-divine_hunter-hunters-blessing-su">Hunter's Blessing (Su)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Swift Action">A divine hunter can expend a use of her <em>smite evil</em> ability to grant herself and all allies within 10 feet the <Link to="/feat/deadly_aim">Deadly Aim</Link>, Precise Shot, and <Link to="/feat/improved_precise_shot">Improved Precise Shot</Link> feats, even if they lack the prerequisites. The effects last for 1 minute.</Pair>
<Pair title="Special">Evil creatures gain no benefit from this ability.</Pair>
</Ability>
<Ability id="arc-paladin-divine_hunter-righteous-hunter-su" icon={["armor-downgrade"]}>
<Pair single id="arc-paladin-divine_hunter-righteous-hunter-su">Righteous Hunter (Su)</Pair>
<Pair hl title="Replaces">Aura of righteousness</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">A divine hunter's ranged weapons are treated as good-aligned for the purposes of overcoming damage reduction. Any ranged attacks made by an ally within 10 feet of her are likewise treated as good-aligned for the purposes of overcoming damage reduction.</Pair>
<Pair title="Special">This ability functions only while the divine hunter is conscious.</Pair>
</Ability>
</>};
const _dusk_knight = {title: "Dusk Knight", jsx: <><h2 id="arc-paladin-dusk_knight-dusk-knight">Dusk Knight</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 18</Link><br/>Some paladins focus their training to combat the shadows and use darkness to their advantage. Known as dusk knights, these paladins are primarily worshipers of <Link to="/faith/abadar">Abadar</Link>, but dusk knights who serve <Link to="/faith/iomedae">Iomedae</Link> and <Link to="/faith/irori">Irori</Link>, though rare, do exist.</p>
<Ability icon={["skills"]} id="arc-paladin-dusk_knight-undefined">
<Pair id="arc-paladin-dusk_knight-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/stealth">Stealth</Link> (DEX)</Pair>
<Pair title="Removed Skills">Sense Motive</Pair></Ability>
<Ability id="arc-paladin-dusk_knight-shadow-smite-su" icon={["armor-upgrade","broken-shield"]}>
<Pair single id="arc-paladin-dusk_knight-shadow-smite-su">Shadow Smite (Su)</Pair>
<Pair hl title="Alters">Smite evil</Pair>
<Pair title="Ability">A dusk knight gains <Link to="/rule/concealment">concealment</Link> for 1 round per paladin level against the target of her <em>smite evil</em> ability in addition to its other effects. The dusk knight doesn't deal additional damage with her <em>smite evil</em> ability.</Pair>
</Ability>
<Ability id="arc-paladin-dusk_knight-illuminating-zeal-su" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-dusk_knight-illuminating-zeal-su" flavor="A dusk knight gains the ability to grant darkvision to her allies.">Illuminating Zeal (Su)</Pair>
<Pair hl title="Replaces">Channel positive energy</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Standard Action">The dusk knight grants one target touched darkvision with a range of 60 feet for 1 hour. If the target already has darkvision, the range increases by 60 feet instead.</Pair>
<Pair title="Special">If the dusk knight targets herself, using this ability is a <strong className="hl">swift action</strong>. Using this ability consumes two uses of her <em>lay on hands</em> ability.</Pair>
</Ability>
<Ability id="arc-paladin-dusk_knight-shadows-embrace-su" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-dusk_knight-shadows-embrace-su" flavor="A dusk knight learns to fight effectively in areas of darkness.">Shadow's Embrace (Su)</Pair>
<Pair hl title="Replaces">Divine bond</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">She gains <Link to="/feat/blind_fight">Blind-Fight</Link> as a bonus feat and darkvision with a range of 60 feet. If she already has darkvision, the range increases by 30 feet instead.</Pair>
<Pair title="At 10th Level">A dusk knight gains <Link to="/feat/improved_blind_fight">Improved Blind-Fight</Link> as a bonus feat.</Pair>
<Pair title="At 15th Level">A dusk knight gains the <Link to="/umr/see_in_darkness">see in darkness</Link> ability.</Pair>
</Ability>
<Ability id="arc-paladin-dusk_knight-cloak-of-shadow-su" icon={["upgrade"]}>
<Pair single id="arc-paladin-dusk_knight-cloak-of-shadow-su" flavor="A dusk knight becomes adept at moving through darkness.">Cloak of Shadow (Su)</Pair>
<Pair hl title="Replaces">Aura of resolve</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">She ignores her armor penalty when attempting Stealth checks and gains a bonus on Stealth checks equal to half her paladin level while in areas of <Link to="/rule/dim_light">dim light</Link> or darkness.</Pair>
</Ability>
<Ability id="arc-paladin-dusk_knight-clouding-smite-su" icon={["armor-downgrade"]}>
<Pair single id="arc-paladin-dusk_knight-clouding-smite-su" flavor="A dusk knight's smite impairs her foe's abilities in the dark.">Clouding Smite (Su)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">When a dusk knight successfully smites a foe, she reduces the target's darkvision by 60 feet for the duration of the smite. If the target has the <em>see in darkness</em> ability, it must succeed at a Fortitude save or lose this ability for the duration of the smite. The save DC is equal to 10 + 1/2 the dusk knight's paladin level + her Charisma modifier.</Pair>
</Ability>
</>};
const _empyreal_knight = {title: "Empyreal Knight", jsx: <><h2 id="arc-paladin-empyreal_knight-empyreal-knight">Empyreal Knight</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 62</Link><br/>The empyreal knight dedicates her life to serving the celestial beings that guide mortals in their struggle toward the light.</p>
<Ability id="arc-paladin-empyreal_knight-voices-of-the-spheres" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-empyreal_knight-voices-of-the-spheres">Voices of the Spheres</Pair>
<Pair hl title="Replaces">Divine grace</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">An empyreal knight learns to speak and read Celestial, if she could not already.</Pair>
</Ability>
<Ability id="arc-paladin-empyreal_knight-celestial-heart-su" icon={["armor-upgrade","stairs-goal","shield-reflect"]}>
<Pair single id="arc-paladin-empyreal_knight-celestial-heart-su" flavor={<>As an empyreal knight advances, her ties with the celestial realms grant her a portion of the abilities and defenses of true <Link to="/family/angel">angels</Link>.</>}>Celestial Heart (Su)</Pair>
<Pair hl title="Replaces">Mercy</Pair>
<Pair title="At 3rd Level">She gains resistance 5 against acid, cold, and electricity.</Pair>
<Pair title="At 6th Level">She gains a +4 racial bonus on saves against poison.</Pair>
<Pair title="At 9th Level">Her defenses improve to resistance 10 against acid, cold, and electricity.</Pair>
<Pair title="At 12th Level">She gains immunity to petrification.</Pair>
<Pair title="At 15th Level">She gains <em>truespeech,</em> the ability to speak with any creature that has a language as though using a <Link to="/spell/tongues">tongues</Link> spell. This ability functions with a caster level equal to her character level, and is always active.</Pair>
<Pair title="At 18th Level">As a <strong className="hl">swift action</strong>, the empyreal knight can manifest a protective aura against evil. Against abilities or effects created by evil creatures, this ability provides a +4 deflection bonus to AC and a +4 resistance bonus on saving throws to anyone within 20 feet of her. It otherwise functions as a <Link to="/spell/magic_circle_against_evil">magic circle against evil</Link>. She can use this ability for a maximum of 1 round per day per paladin level. These rounds do not need to be consecutive.</Pair>
</Ability>
<Ability id="arc-paladin-empyreal_knight-celestial-ally-sp" icon={["magic-swirl"]}>
<Pair single id="arc-paladin-empyreal_knight-celestial-ally-sp">Celestial Ally (Sp)</Pair>
<Pair hl title="Replaces">Lay on hands, channel positive energy</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Usage">A number of times per day equal to the empyreal knight's Charisma modifier (minimum 1), but only one ally can be summoned at a time.</Pair>
<Pair title="Full-Round Action">An empyreal knight can summon a celestial ally. This functions as <Link to="/spell/summon_monster_i">summon monster I</Link>, except it can only be used to summon <Link to="/template/celestial">celestial</Link> creatures, <Link to="/family/archon">archons</Link>, and angels.</Pair>
<Pair title="At 6th Level">This improves to <Link to="/spell/summon_monster_ii">summon monster II</Link>.</Pair>
<Pair title="At 8th Level">This improves to <Link to="/spell/summon_monster_iii">summon monster III</Link>.</Pair>
<Pair title="At 10th Level">This improves to <Link to="/spell/summon_monster_iv">summon monster IV</Link>.</Pair>
<Pair title="At 12th Level">This improves to <Link to="/spell/summon_monster_v">summon monster V</Link>.</Pair>
<Pair title="At 14th Level">This improves to <Link to="/spell/summon_monster_vi">summon monster VI</Link>.</Pair>
<Pair title="At 16th Level">This improves to <Link to="/spell/summon_monster_vii">summon monster VII</Link>.</Pair>
<Pair title="At 18th Level">This improves to <Link to="/spell/summon_monster_viii">summon monster VIII</Link>.</Pair>
<Pair title="At 20th Level">This improves to <Link to="/spell/summon_monster_ix">summon monster IX</Link>.</Pair>
</Ability>
<Ability id="arc-paladin-empyreal_knight-divine-bond-su" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-empyreal_knight-divine-bond-su">Divine Bond (Su)</Pair>
<Pair hl title="Alters">Divine bond</Pair>
<Pair title="At 5th Level">An empyreal knight forms a bond with a mount, as the standard paladin ability.</Pair>
<Pair title="At 8th Level">Her mount gains the <em>celestial</em> template.</Pair>
<Pair title="At 12th Level">Her mount sprouts wings if it cannot already fly, and gains a fly speed of twice its land speed and good maneuverability. If the mount could already fly, its fly speed and maneuverability improve to at least this level.</Pair>
<Pair title="Special">This ability otherwise functions as the paladin ability of the same name.</Pair>
</Ability>
<Ability id="arc-paladin-empyreal_knight-empyreal-champion" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="arc-paladin-empyreal_knight-empyreal-champion">Empyreal Champion</Pair>
<Pair hl title="Replaces">Holy champion</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">An empyreal knight transcends her mortal self. Her DR increases to 10/evil. Her type is treated as <Link to="/type/outsider">outsider</Link> for the purposes of spells and magical effects. She gains darkvision 60 feet and low-light vision.</Pair>
<Pair title="Standard Action">As a supernatural ability, she can sprout wings that allow her to fly at twice her land speed with average maneuverability. Any armor or clothing reshapes to allow her to fly when she uses this ability. She can retract the wings as a <strong className="hl">free action</strong>.</Pair>
<Pair title="Special">Unlike other outsiders, an empyreal knight can still be brought back from the dead as if she were a member of her previous creature type.</Pair>
</Ability>
</>};
const _faithful_wanderer = {title: "Faithful Wanderer", jsx: <><h2 id="arc-paladin-faithful_wanderer-faithful-wanderer">Faithful Wanderer</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 18</Link><br/>While most paladins stride brazenly forth to battle evil in gleaming armor, faithful wanderers understand that to accomplish real change in Abyssal environments, a paladin must learn to be self-sufficient and unobtrusive and that she must pick her battles carefully, lest her mission end abruptly in a blaze of glory.</p>
<Ability icon={["skills"]} id="arc-paladin-faithful_wanderer-undefined">
<Pair id="arc-paladin-faithful_wanderer-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT), <Link to="/skill/perception">Perception</Link> (WIS), <Link to="/skill/stealth">Stealth</Link> (DEX), <Link to="/skill/survival">Survival</Link> (WIS)</Pair>
<Pair title="Removed Skills">Diplomacy, Handle Animal, Knowledge (nobility), Ride</Pair></Ability>
<Ability id="arc-paladin-faithful_wanderer-wanderers-lore" icon={["skills","upgrade"]}>
<Pair single id="arc-paladin-faithful_wanderer-wanderers-lore" flavor="A faithful wanderer quickly learns that everything in the wastes is evil, and she develops the skills she needs to survive.">Wanderer's Lore</Pair>
<Pair hl title="Replaces">Detect evil</Pair>
<Pair hl title="Alters">Skills per level</Pair>
<Pair title="Info">A faithful wanderer gains a number of skill ranks equal to 4 + her Intelligence modifier at each level (instead of gaining a number of skill ranks equal to 2 + her Intelligence modifier).</Pair>
</Ability>
<Ability id="arc-paladin-faithful_wanderer-hidden-aura-su" icon={["info","stairs-goal","armor-upgrade"]}>
<Pair single id="arc-paladin-faithful_wanderer-hidden-aura-su">Hidden Aura (Su)</Pair>
<Pair hl title="Replaces">Aura of good, aura of justice</Pair>
<Pair hl title="Alters">Aura of courage, aura of resolve, aura of faith, aura of righteousness</Pair>
<Pair title="Info">A faithful wanderer doesn't have an <em>aura of good</em> like other paladins do, as this would give her presence away to hostile denizens of the Abyssal wastelands. Her other auras likewise don't reveal her presence. The benefits of her <em>aura of courage, aura of resolve, aura of faith,</em> and <em>aura of righteousness</em> affect only her.</Pair>
<Pair title="At 3rd Level">Her alignment aura emulates the <Link to="/rule/alignment_traits">alignment planar traits</Link> of her current location (e.g. chaotic evil in the Worldwound or the Abyss) for the purposes of alignment-detection effects, though this doesn't change her actual alignment.</Pair>
<Pair title="At 8th Level">She takes no penalties from the mildly chaos-aligned and mildly evil-aligned planar traits and treats all opposed strongly aligned planar traits as if they were only mildly aligned.</Pair>
<Pair title="At 11th Level">She takes no penalties even in areas with strongly chaos- and evil-aligned planar traits.</Pair>
<Pair title="At 14th Level">She leaves no trail in areas with chaos- and evil-aligned planar traits, can't be tracked in such terrain, and can use Stealth to hide in such terrain, even if the terrain doesn't grant cover or concealment.</Pair>
<Pair title="At 17th Level">She can use Stealth to hide in areas with these planar traits even while being observed.</Pair>
</Ability>
<Ability id="arc-paladin-faithful_wanderer-stalk-evil-su" icon={["upgrade"]}>
<Pair single id="arc-paladin-faithful_wanderer-stalk-evil-su">Stalk Evil (Su)</Pair>
<Pair hl title="Replaces">Smite evil</Pair>
<Pair title="Ability">A faithful wanderer isn't interested in going out in a blaze of glory after exhausting a limited ability to <em>smite evil.</em> Instead, she has developed techniques to evade, stalk, and punish evil whenever necessary. She gains a +2 bonus on Knowledge, Perception, Sense Motive, Stealth, and Survival checks against evil outsiders, as well as a +2 bonus on weapon attack and damage rolls against them. These bonuses don't stack with <Link to="/ability/favored_enemy">favored enemy</Link> bonuses.</Pair>
<Pair title="At 5th Level">These bonuses become +4.</Pair>
<Pair title="At 7th Level">The faithful wanderer also gains these bonuses against undead.</Pair>
<Pair title="At 10th Level">These bonuses increase to +6.</Pair>
<Pair title="At 13th Level">She also gains these bonuses against evil dragons.</Pair>
<Pair title="At 15th Level">These bonuses become +8.</Pair>
<Pair title="At 20th Level">These bonuses increase to +10.</Pair>
</Ability>
<Ability id="arc-paladin-faithful_wanderer-champions-bond-su" icon={["info","armor-upgrade","magic-swirl"]}>
<Pair single id="arc-paladin-faithful_wanderer-champions-bond-su">Champion's Bond (Su)</Pair>
<Pair hl title="Replaces">Holy champion</Pair>
<Pair hl title="Alters">Divine bond</Pair>
<Pair title="At 5th Level">A faithful wanderer must choose the weapon option of her <em>divine bond</em> class feature.</Pair>
<Pair title="At 20th Level">Whenever her <em>divine bond</em> is active, she gains several additional benefits, as follows: Her DR improves to 5/-. Additionally, if she rolls a natural 20 on an attack roll against an evil outsider and confirms the critical hit, the outsider is also subject to <Link to="/spell/banishment">banishment</Link>, using the faithful wanderer's paladin level as the caster level (her weapon and holy symbol automatically count as objects that the subject hates). Finally, whenever she uses <em>lay on hands</em> to heal herself, she heals the maximum possible amount of hit points.</Pair>
</Ability>
</>};
const _forest_preserver = {title: "Forest Preserver", jsx: <><h2 id="arc-paladin-forest_preserver-forest-preserver">Forest Preserver</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 70</Link><br/>Forest preservers are sacred defenders of the woodlands and of the wild creatures and natural beauty within them.</p>
<Ability icon={["skills"]} id="arc-paladin-forest_preserver-undefined">
<Pair id="arc-paladin-forest_preserver-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/climb">Climb</Link> (STR), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS)</Pair>
<Pair title="Removed Skills">Diplomacy, Knowledge (nobility), Sense Motive</Pair></Ability>
<Ability id="arc-paladin-forest_preserver-favored-terrain-ex" icon={["upgrade"]}>
<Pair single id="arc-paladin-forest_preserver-favored-terrain-ex">Favored Terrain (Ex)</Pair>
<Pair hl title="Replaces">Aura of courage</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A forest preserver gains the ranger's <Link to="/ability/favored_terrain">favored terrain</Link> ability but must select either forest or jungle as her favored terrain.</Pair>
<Pair title="Info">Text from the ability: <em>The ranger gains a +2 bonus on initiative checks and Knowledge (geography), Perception, Stealth, and Survival skill checks when he is in this terrain. A ranger traveling through his favored terrain normally leaves no trail and cannot be tracked (though he may leave a trail if he so chooses).</em></Pair>
<Pair title="At 8th Level">The bonuses granted by this ability becomes +4.</Pair>
<Pair title="At 13th Level">The bonuses granted by this ability increases to +6.</Pair>
<Pair title="At 18th Level">The bonuses granted by this ability becomes +8.</Pair>
<Pair title="Special">She does not gain additional favored terrains.</Pair>
</Ability>
<Ability id="arc-paladin-forest_preserver-woodland-stride-ex" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-forest_preserver-woodland-stride-ex">Woodland Stride (Ex)</Pair>
<Pair hl title="Replaces">Divine health</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A forest preserver (as well as her <em>divine bond</em> creature, if she has one) gains <Link to="/ability/woodland_stride">woodland stride</Link>, as per the druid class feature.</Pair>
</Ability>
<Ability id="arc-paladin-forest_preserver-sacred-botany-ex" icon={["spell-book"]}>
<Pair single id="arc-paladin-forest_preserver-sacred-botany-ex">Sacred Botany (Ex)</Pair>
<Pair hl title="Replaces">Channel positive energy</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Info">A forest preserver adds the following spells to her spell list at the listed spell level.</Pair>
<Pair plain title="1st"><Link to="/spell/detect_animals_or_plants">Detect animals or plants</Link>, <Link to="/spell/entangle">entangle</Link>, <Link to="/spell/goodberry">goodberry</Link>, <Link to="/spell/shillelagh">shillelagh</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/barkskin">Barkskin</Link>, <Link to="/spell/eagle_eye">eagle eye</Link>, <Link to="/spell/tree_shape">tree shape</Link>, <Link to="/spell/warp_wood">warp wood</Link>, <Link to="/spell/wood_shape">wood shape</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/diminish_plants">Diminish plants</Link>, <Link to="/spell/plant_growth">plant growth</Link>, <Link to="/spell/snare">snare</Link>, <Link to="/spell/speak_with_plants">speak with plants</Link>, <Link to="/spell/spike_growth">spike growth</Link></Pair>
<Pair plain title="4th"><Link to="/spell/antiplant_shell">Antiplant shell</Link>, <Link to="/spell/awaken">awaken</Link> (trees only), <Link to="/spell/blight">blight</Link>, <Link to="/spell/command_plants">command plants</Link>, <Link to="/spell/commune_with_nature">commune with nature</Link>, <Link to="/spell/thorn_body">thorn body</Link>, <Link to="/spell/tree_stride">tree stride</Link>, <Link to="/spell/wall_of_thorns">wall of thorns</Link></Pair>
<Pair title="Special">In addition, she treats her caster level as 1 higher when casting these spells in her favored terrain.</Pair>
</Ability>
<Ability id="arc-paladin-forest_preserver-fireproof-aura-su" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="arc-paladin-forest_preserver-fireproof-aura-su">Fireproof Aura (Su)</Pair>
<Pair hl title="Replaces">Aura of resolve</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">A forest preserver and creatures within 10 feet of her gain a +2 bonus on saving throws against fire effects and gain fire resistance 5; these are doubled for plant allies, which also gain <Link to="/ability/evasion">evasion</Link> against fire effects only.</Pair>
<Pair title="Immediate Action">Whenever a fire spell would affect a creature within the <em>fireproof aura,</em> the forest preserver can expend three uses of her <em>lay on hands</em> ability to attempt to counter the effect, as if she had readied a <Link to="/spell/dispel_magic">dispel magic</Link> spell (caster level = her paladin level) to counterspell.</Pair>
<Pair title="Special">This ability functions only if the forest preserver is conscious.</Pair>
</Ability>
<Ability id="arc-paladin-forest_preserver-sacred-grove-su" icon={["magic-swirl"]}>
<Pair single id="arc-paladin-forest_preserver-sacred-grove-su">Sacred Grove (Su)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A forest preserver can expend two uses of her <em>smite evil</em> ability to consecrate a 20-foot-radius area that must contain a living tree. This fills the area with dense undergrowth, though it does not impede her allies' movement. In addition, animals, fey, and plants allied with the forest preserver gain a +1 sacred bonus on attack rolls, damage rolls, and saving throws, and animals, fey, and plants called or summoned within this area gain 1 hit point per Hit Die as long as the calling or summoning effect lasts or until the <em>sacred grove</em> effect ends (whichever comes first). If the area contains a shrine or hallowed area dedicated to a good-aligned deity (or at the GM's discretion, a place of natural magical power, such as a natural portal to the First World), these bonuses are doubled.</Pair>
<Pair title="Ability">When she uses this ability in her favored terrain, she can also imbue plants in the area with limited animation, allowing them to obscure vision and impede movement and attacks as if the area were affected by <Link to="/spell/solid_fog">solid fog</Link>.</Pair>
<Pair title="Special">A <em>sacred grove</em> remains enhanced in this way for a number of minutes equal to the paladin's level.</Pair>
</Ability>
<Ability id="arc-paladin-forest_preserver-aura-of-preservation-su" icon={["shield-reflect"]}>
<Pair single id="arc-paladin-forest_preserver-aura-of-preservation-su">Aura of Preservation (Su)</Pair>
<Pair hl title="Replaces">Aura of faith</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">A forest preserver grants animals and plants within 10 feet spell resistance equal to 11 + her paladin level. This spell resistance doesn't apply against harmless effects created by the forest preserver or allies within 10 feet of her. This ability functions only if the forest preserver is conscious.</Pair>
</Ability>
</>};
const _forgefathers_seeker = {title: "Forgefather's Seeker", jsx: <><h2 id="arc-paladin-forgefathers_seeker-forgefathers-seeker">Forgefather's Seeker</h2>
<p><strong>Sources</strong> <Link to="/source/construct_handbook">Construct Handbook pg. 13</Link><br/>Torag constantly seeks those who would use the power of creation to threaten or harm others. To this end, he sends his seekers to locate constructs that are used for evil or that become uncontrollable. These paladins are adept at battling constructed foes and guarding those threatened by such creations.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-paladin-forgefathers_seeker--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Must select <Link to="/faith/torag">Torag</Link> as her patron deity.</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-paladin-forgefathers_seeker-detect-construct-sp" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-forgefathers_seeker-detect-construct-sp">Detect Construct (Sp)</Pair>
<Pair hl title="Replaces">Detect evil</Pair>
<Pair title="Ability">A Forgefather's seeker can detect the presence of constructs at will. This functions as the spell <Link to="/spell/aura_sight">aura sight</Link>, except the duration is 1 round and a Forgefather's seeker learns the locations and power of all auras of all constructs, similar to <Link to="/spell/detect_undead">detect undead</Link>.</Pair>
</Ability>
<Ability id="arc-paladin-forgefathers_seeker-smite-construct-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-paladin-forgefathers_seeker-smite-construct-su">Smite Construct (Su)</Pair>
<Pair hl title="Alters">Smite evil</Pair>
<Pair title="Ability">This ability functions as the paladin's <em>smite evil</em> ability, but it functions only against constructs. Smiting a construct automatically bypasses any DR or hardness a construct might have.</Pair>
<Pair title="Ability">A Forgefather's seeker can still <em>smite evil,</em> but she adds only half her Charisma bonus on attack rolls, adds only half of her level on damage rolls, and doesn't increase her bonus damage against outsiders with the evil subtype, evil-aligned dragons, or undead.</Pair>
<Pair title="Special">This otherwise functions as <em>smite evil</em> for the purposes of feats, prerequisites, and other effects.</Pair>
</Ability>
<Ability id="arc-paladin-forgefathers_seeker-aura-of-destruction-su" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-forgefathers_seeker-aura-of-destruction-su">Aura of Destruction (Su)</Pair>
<Pair hl title="Alters">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A Forgefather seeker grants her allies <em>smite construct</em> with her <em>aura of justice</em> ability instead of <em>smite evil.</em></Pair>
</Ability>
<Ability id="arc-paladin-forgefathers_seeker-aura-of-unmaking-su" icon={["armor-downgrade"]}>
<Pair single id="arc-paladin-forgefathers_seeker-aura-of-unmaking-su">Aura of Unmaking (Su)</Pair>
<Pair hl title="Replaces">Aura of faith</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">A Forgefather's seeker's weapons are treated as <Link to="/eq-material/adamantine">adamantine</Link> for the purpose of overcoming damage reduction. Any attack made against an enemy within 10 feet of her is treated as adamantine for the purpose of overcoming damage reduction. This ability functions only while a Forgefather's seeker is conscious, not if she is unconscious or dead.</Pair>
</Ability>
<Ability id="arc-paladin-forgefathers_seeker-forgefathers-champion-su" icon={["armor-upgrade","heart-plus","stairs-goal"]}>
<Pair single id="arc-paladin-forgefathers_seeker-forgefathers-champion-su" flavor="A Forgefather's seeker becomes capable of completely dismantling constructs.">Forgefather's Champion (Su)</Pair>
<Pair hl title="Replaces">Holy champion</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">Her DR increases to 10/evil. In addition, whenever a Forgefather's seeker channels positive energy or uses <em>lay on hands</em> to heal a creature, she heals the maximum possible amount.</Pair>
<Pair title="Ability">Whenever she uses <em>smite construct</em> and hits a construct, she can immediately attempt to destroy the construct. The construct is reduced to 0 hit points and destroyed unless it succeeds at a Will save (DC = 10 + half the Forgefather's seeker's level + the Forgefather's seeker's Charisma modifier). After this destruction effect and the damage from the attack is resolved, the <em>smite</em> immediately ends.</Pair>
</Ability>
</>};
const _ghost_hunter = {title: "Ghost Hunter", jsx: <><h2 id="arc-paladin-ghost_hunter-ghost-hunter">Ghost Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 123</Link><br/>Ghost hunters devote their lives to eliminating malevolent spirits and putting them to rest.</p>
<Ability id="arc-paladin-ghost_hunter-ghostly-smite-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-paladin-ghost_hunter-ghostly-smite-su">Ghostly Smite (Su)</Pair>
<Pair hl title="Alters">Smite evil</Pair>
<Pair title="Ability">A ghost hunter's <em>smite evil</em> ability does not automatically bypass DR (other than DR/good). However, she treats her weapon as a <Link to="/magic-enh/ghost_touch">ghost touch</Link> weapon against the target of her <em>smite.</em> She does not deal extra damage on the first attack against evil outsiders and evil dragons, but she deals 3 points of damage per paladin level she possesses to undead creatures on the first attack (instead of 2 points).</Pair>
</Ability>
<Ability id="arc-paladin-ghost_hunter-exorcise-possession-su" icon={["magic-swirl","heart-plus"]}>
<Pair single id="arc-paladin-ghost_hunter-exorcise-possession-su">Exorcise Possession (Su)</Pair>
<Pair hl title="Replaces">6th-level mercy</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A ghost hunter can try to end any possession spells or effects, or effects that directly exercise mental control over a creature. She must touch the affected creature (this requires a melee touch attack if the target is neither willing nor helpless) and expend a use of her <em>lay on hands</em> ability. The target can immediately attempt a Will save against the original save DC of the controlling effect. If the save is successful, the effect immediately ends, as if the target had succeeded at its original saving throw.</Pair>
</Ability>
<Ability id="arc-paladin-ghost_hunter-speak-to-the-restless-sp" icon={["magic-swirl"]}>
<Pair single id="arc-paladin-ghost_hunter-speak-to-the-restless-sp">Speak to the Restless (Sp)</Pair>
<Pair hl title="Replaces">9th-level mercy</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A ghost hunter can commune with the spirits of the restless dead once per day. By holding a seance for 10 minutes, she can ask questions of a destroyed undead or a neutralized or destroyed <Link to="/rule/haunts">haunt</Link>. To use this ability on a corporeal undead, the ghost hunter must have the creature's head in her possession. For a haunt or incorporeal undead, this seance must be held in the haunt's location or where the incorporeal undead was destroyed. Treat this ability as <Link to="/spell/speak_with_haunt">speak with haunt</Link> or as <Link to="/spell/speak_with_dead">speak with dead</Link> (but affecting only undead rather than only corpses), using the ghost hunter's class level as the caster level.</Pair>
</Ability>
</>};
const _gray_paladin = {title: "Gray Paladin", jsx: <><h2 id="arc-paladin-gray_paladin-gray-paladin">Gray Paladin</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 69</Link><br/>Gray paladins have discovered that in a world of intrigue, a strict code of honor hinders their options. Their divergence from the paladin's normal code still drains them, but somehow, they have found a way to avoid losing all of their powers.</p>
<Ability id="arc-paladin-gray_paladin-alignment" icon={["info"]}>
<Pair single id="arc-paladin-gray_paladin-alignment">Alignment</Pair>
<Pair hl title="Alters">Alignment restrictions</Pair>
<Pair title="Info">A gray paladin can be lawful good, lawful neutral, or neutral good, though she must still follow a lawful good, neutral good, or lawful neutral deity.</Pair>
</Ability>
<Ability icon={["skills"]} id="arc-paladin-gray_paladin-undefined">
<Pair id="arc-paladin-gray_paladin-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/disguise">Disguise</Link> (CHA), <Link to="/skill/intimidate">Intimidate</Link> (CHA)</Pair></Ability>
<Ability id="arc-paladin-gray_paladin-weakened-grace" icon={["broken-shield","info"]}>
<Pair single id="arc-paladin-gray_paladin-weakened-grace" flavor="A gray paladin's loosened code weakens her connection to the power that grants her paladin abilities.">Weakened Grace</Pair>
<Pair hl title="Replaces">Aura of good, divine grace</Pair>
<Pair hl title="Alters">Smite evil, aura of courage, aura of resolve, aura of righteousness</Pair>
<Pair title="Info">She never gains the <em>aura of good</em> or <em>divine grace</em> class features. Her <em>aura of courage</em> does not make her immune to fear, her <em>aura of resolve</em> does not make her immune to charms, and her <em>aura of righteousness</em> does not make her immune to compulsions.</Pair>
<Pair title="At 2nd Level">She gains her first use of <em>smite evil</em> at 2nd level, instead of 1st.</Pair>
<Pair title="At 4th Level">She gains her 2nd use of <em>smite evil</em> per day.</Pair>
<Pair title="At 7th Level">She gains her 3rd use of <em>smite evil</em> per day.</Pair>
<Pair title="At 10th Level">She gains her 4th use of <em>smite evil</em> per day.</Pair>
<Pair title="At 13th Level">She gains her 5th use of <em>smite evil</em> per day.</Pair>
<Pair title="At 16th Level">She gains her 6th use of <em>smite evil</em> per day.</Pair>
<Pair title="At 19th Level">She gains her 7th use of <em>smite evil</em> per day.</Pair>
</Ability>
<Ability id="arc-paladin-gray_paladin-code-of-conduct" icon={["hazard-sign"]}>
<Pair single id="arc-paladin-gray_paladin-code-of-conduct">Code of Conduct</Pair>
<Pair hl title="Replaces">Code of conduct and associated abilities</Pair>
<Pair hl title="Alters">Ex-paladin</Pair>
<Pair title="Info">A gray paladin must be of lawful good, lawful neutral, or neutral good alignment and loses all class features except proficiencies if she ever willingly commits an evil act (for example, casting a spell with the evil descriptor). She should strive to act with honor and uphold the tenets of her faith, but failing to do so is not a violation of her code, and other than evil actions, she can do whatever else she feels is necessary to uphold the causes of law and good.</Pair>
</Ability>
<Ability id="arc-paladin-gray_paladin-enhanced-health-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-paladin-gray_paladin-enhanced-health-ex">Enhanced Health (Ex)</Pair>
<Pair hl title="Replaces">Divine health</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A gray paladin is far less a stranger to poisons than a normal paladin. She gains a +4 sacred bonus on all saving throws against poisons and diseases.</Pair>
</Ability>
<Ability id="arc-paladin-gray_paladin-smite-foe-su" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-gray_paladin-smite-foe-su">Smite Foe (Su)</Pair>
<Pair hl title="Replaces">Channel positive energy</Pair>
<Pair hl title="Alters">Smite evil</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A gray paladin can spend two uses of <em>smite evil</em> in order to smite a nongood creature that is not evil and gain her full benefits. The gray paladin must truly believe that the creature she smites is an opponent to the cause of good. Even if this nonevil foe is an outsider, undead, or dragon, she doesn't add increased damage to her first attack.</Pair>
</Ability>
<Ability id="arc-paladin-gray_paladin-aura-of-subtlety-sp-su" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="arc-paladin-gray_paladin-aura-of-subtlety-sp-su">Aura of Subtlety (Sp, Su)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">A gray paladin learns how to protect herself from detection. She and her allies within 10 feet gain a +4 morale bonus on saving throws against divination effects. Furthermore, casters of divinations that target the gray paladin or her nearby allies must succeed at a caster level check as though the gray paladin and her nearby allies were under the effect of a <Link to="/spell/nondetection">nondetection</Link> spell cast by the gray paladin, with a caster level equal to the gray paladin's paladin level.</Pair>
<Pair title="Special">This ability functions while the gray paladin is conscious and while she is sleeping, but not if she is unconscious for any other reason, or dead.</Pair>
</Ability>
</>};
const _holy_guide = {title: "Holy Guide", jsx: <><h2 id="arc-paladin-holy_guide-holy-guide">Holy Guide</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 107</Link><br/>A holy guide believes that it's his sacred calling to clear the roads of bandits between towns as well as to escort travelers to safety. He must enforce the rule of law in the wilderness and help those that cannot defend themselves against the many dangers of the area.</p>
<Ability icon={["skills"]} id="arc-paladin-holy_guide-undefined">
<Pair id="arc-paladin-holy_guide-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS)</Pair></Ability>
<Ability id="arc-paladin-holy_guide-favored-terrain-ex" icon={["upgrade"]}>
<Pair single id="arc-paladin-holy_guide-favored-terrain-ex">Favored Terrain (Ex)</Pair>
<Pair hl title="Replaces">3rd-level mercy</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Choice">A holy guide chooses a <Link to="/ability/favored_terrain">favored terrain</Link> from the ranger favored terrains table. This otherwise functions like the <Link to="/class/ranger">ranger</Link> ability of the same name.</Pair>
<Pair title="Ability">Every time a holy guide would be able to select another <em>mercy,</em> he can instead select another favored terrain and increase his bonuses for one existing favored terrain, just like a ranger.</Pair>
</Ability>
<Ability id="arc-paladin-holy_guide-teamwork-feat-ex" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-holy_guide-teamwork-feat-ex">Teamwork Feat (Ex)</Pair>
<Pair hl title="Replaces">6th-level mercy</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A holy guide gains a <Link to="/main/teamwork_feat">teamwork feat</Link> as a bonus feat. He must meet the prerequisites for this feat.</Pair>
<Pair title="Standard Action">He can expend one use of <em>smite evil</em> to grant this feat to all allies within 30 feet who can see and hear him. Allies retain the use of this bonus feat for 3 rounds plus 1 round for every 2 levels the holy guide possesses. Allies do not need to meet the prerequisites of this bonus feat. Evil creatures do not gain the benefit of this teamwork feat, even if the paladin considers them allies.</Pair>
</Ability>
</>};
const _holy_gun = {title: "Holy Gun", jsx: <><h2 id="arc-paladin-holy_gun-holy-gun">Holy Gun</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 63</Link><br/>Not all paladins are knights in shining armor. Holy guns roam the world searching for evil. And where they find it, they put it down.</p>
<Ability id="arc-paladin-holy_gun-weapon-and-armor-proficiency" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-paladin-holy_gun-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair title="Info">Holy guns are proficient with all simple and martial weapons, <Link to="/main/equipment_firearms">firearms</Link>, and light armor.</Pair>
</Ability>
<Ability id="arc-paladin-holy_gun-have-gun" icon={["stairs-goal","bowman"]}>
<Pair single id="arc-paladin-holy_gun-have-gun">Have Gun</Pair>
<Pair hl title="Replaces">Detect evil</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">The holy gun gains the <Link to="/feat/amateur_gunslinger">Amateur Gunslinger</Link> feat and <Link to="/feat/gunsmithing">Gunsmithing</Link> as a bonus feat. She also gains a battered gun identical to the one gained by the <Link to="/class/gunslinger">gunslinger</Link>.</Pair>
</Ability>
<Ability id="arc-paladin-holy_gun-divine-deed" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-holy_gun-divine-deed">Divine Deed</Pair>
<Pair hl title="Replaces">Smite evil</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">The holy gun gains the following deed. This deed works and interacts with grit the same way as <Link to="/ability/gunslinger_deeds">gunslinger deeds</Link>, but only the holy gun can use it. If the holy gun also has levels in gunslinger, she can spend grit points from that class to use this deed.</Pair>
</Ability>
<Ability id="arc-paladin-holy_gun-smiting-shot-su" extraClasses="subAbility" icon={["bowman"]}>
<Pair single id="arc-paladin-holy_gun-smiting-shot-su">Smiting Shot (Su)</Pair>
<Pair title="Standard Action">A holy gun can spend 1 grit point to make a <em>smiting shot</em> with a firearm attack. If the target is evil, the holy gun adds her Charisma bonus and her paladin level to the damage of the firearm attack. If the target of the <em>smiting shot</em> is an outsider with the evil subtype, an evil-aligned dragon, or an undead creature, the bonus to damage increases to the Charisma modifier plus 2 points of damage per level the paladin possess. Regardless of the target, <em>smiting shot</em> automatically bypasses any DR the creature might have.</Pair>
</Ability>
<Ability id="arc-paladin-holy_gun-divine-bond" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-holy_gun-divine-bond">Divine Bond</Pair>
<Pair hl title="Replaces">Divine bond</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A holy gun forms a bond with her deity. This functions as the paladin's <em>divine bond</em> ability, except the bond must always take the form of a firearm. In addition to the listed abilities, a holy gun can add the <Link to="/magic-enh/distance">distance</Link>, <Link to="/magic-enh/reliable">reliable</Link>, or <Link to="/magic-enh/seeking">seeking</Link> special abilities to her weapon, but she cannot add the <em>defending</em> or <em>disruption</em> special abilities.</Pair>
</Ability>
<Ability id="arc-paladin-holy_gun-holy-grit-ex" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-holy_gun-holy-grit-ex">Holy Grit (Ex)</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A holy gun gains a number of grit points equal to her Charisma modifier (minimum 1) and gains the use of a single gunslinger deed. She can select any deed that a 7th-level gunslinger could use.</Pair>
<Pair title="At 14th Level">The holy gun gains another point of grit and another gunslinger deed that a 10th-level gunslinger could use.</Pair>
<Pair title="At 17th Level">The holy gun gains another point of grit and another gunslinger deed that a 13th-level gunslinger could use.</Pair>
<Pair title="At 20th Level">The holy gun gains another point of grit and another gunslinger deed that a 16th-level gunslinger could use.</Pair>
<Pair title="Special">If she already has levels in gunslinger, she gains a bonus to the maximum amount of grit she can have each day, equal to her Charisma bonus (if any) but gains no extra grit as the start of each day.</Pair>
</Ability>
<Ability id="arc-paladin-holy_gun-holy-slinger-ex" icon={["info"]}>
<Pair single id="arc-paladin-holy_gun-holy-slinger-ex">Holy Slinger (Ex)</Pair>
<Pair hl title="Alters">Holy champion</Pair>
<Pair title="Info">This ability function like the <em>holy champion</em> paladin class feature, but the banishment occurs when she hits an evil outsider with the <em>smiting shot</em> deed.</Pair>
</Ability>
</>};
const _holy_tactician = {title: "Holy Tactician", jsx: <><h2 id="arc-paladin-holy_tactician-holy-tactician">Holy Tactician</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 64</Link><br/>The holy tactician inspires her allies on the field of battle. Her place is at their side against overwhelming odds, and her guidance brings out their true potential.</p>
<Ability id="arc-paladin-holy_tactician-weals-champion-su" icon={["upgrade"]}>
<Pair single id="arc-paladin-holy_tactician-weals-champion-su">Weal's Champion (Su)</Pair>
<Pair hl title="Replaces">Smite evil</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">1 time/day + 1 per three paladin levels beyond 1st<ByLevelPop levels={[[1,1],[4,2],[7,3],[10,4],[13,5],[16,6],[19,7]]} unit="time" postText="/day" /></Pair>
<Pair title="Swift Action"><p>A holy tactician can call on the powers of good to aid her against evil. Against evil targets, the holy tactician gains her Charisma bonus (if any) on her attack rolls against evil creatures, and if she hits, she adds 1/2 her paladin level on her weapon damage rolls as well. These bonuses last for 1 round for every two paladin levels the holy tactician has attained (minimum 1 round).</p>
<p>In addition, for 1 round after the holy tactician successfully strikes an evil creature, all non-evil allies within 30 feet of her gain a competence bonus on attack rolls equal to 1/2 her Charisma bonus against that creature as well as a competence bonus on damage rolls. The bonus on damage rolls is equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of her paladin level.</p>
</Pair>
<Pair title="Special">She can grant this bonus against more than one creature at a time. To gain this benefit, the holy tactician's allies must be able to see or hear her, and she must be conscious.</Pair>
</Ability>
<Ability id="arc-paladin-holy_tactician-tactical-acumen-ex" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-holy_tactician-tactical-acumen-ex">Tactical Acumen (Ex)</Pair>
<Pair hl title="Replaces">Divine health, divine bond</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A holy tactician gains a <Link to="/main/teamwork_feat">teamwork feat</Link> as a bonus feat.</Pair>
<Pair title="At 7th Level">She gains an additional bonus teamwork feat.</Pair>
<Pair title="At 11th Level">She gains an additional bonus teamwork feat.</Pair>
<Pair title="At 15th Level">She gains an additional bonus teamwork feat.</Pair>
<Pair title="At 19th Level">She gains an additional bonus teamwork feat.</Pair>
<Pair title="Special">She must meet the prerequisites for these feats.</Pair>
</Ability>
<Ability id="arc-paladin-holy_tactician-battlefield-presence-su" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-holy_tactician-battlefield-presence-su">Battlefield Presence (Su)</Pair>
<Pair hl title="Replaces">Aura of courage</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Standard Action">A tactician can direct her allies in battle, granting each ally within 30 feet one teamwork feat she possesses as a bonus feat. All allies must receive the same feat, but do not need to meet the prerequisites of this bonus feat.</Pair>
<Pair title="Swift Action">She may change the bonus feat granted.</Pair>
<Pair title="Special">This ability does not function if the paladin is <Link to="/rule/flat_footed">flat-footed</Link> or unconscious. Allies must be able to see and hear the holy tactician in order to gain this benefit.</Pair>
</Ability>
<Ability id="arc-paladin-holy_tactician-guide-the-battle-ex" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-holy_tactician-guide-the-battle-ex">Guide the Battle (Ex)</Pair>
<Pair hl title="Replaces">Aura of resolve</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Move-Equivalent Action">The paladin can direct her allies into an advantageous position once per round. Each ally (if physically able to) can move 5 feet without expending an action. This movement does not provoke attacks of opportunity. The allies must be able to see or hear the paladin in order to make this movement and cannot be flat-footed.</Pair>
<Pair title="At 15th Level">Her allies can make this 5-foot move and ignore <Link to="/rule/difficult_terrain">difficult terrain</Link>.</Pair>
</Ability>
<Ability id="arc-paladin-holy_tactician-weals-wrath-su" icon={["upgrade"]}>
<Pair single id="arc-paladin-holy_tactician-weals-wrath-su">Weal's Wrath (Su)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A tactician can expend two uses of her <em>weal's champion</em> ability at once to enhance its effects. This functions as <em>weal's champion,</em> except the bonus she provides to her allies lasts until each creature she strikes is slain, her <em>weal's champion</em> ability expires, or the paladin herself is slain or knocked unconscious, whichever happens first.</Pair>
</Ability>
<Ability id="arc-paladin-holy_tactician-masterful-presence-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-paladin-holy_tactician-masterful-presence-su">Masterful Presence (Su)</Pair>
<Pair hl title="Replaces">Holy champion</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A tactician gains the ability to grant a different bonus feat to each ally affected by her <em>battlefield presence.</em> In addition, all critical threats made by her and her allies against creatures affected by her <em>weal's champion</em> ability are automatically confirmed (no confirmation roll is needed).</Pair>
</Ability>
</>};
const _hospitaler = {title: "Hospitaler", jsx: <><h2 id="arc-paladin-hospitaler-hospitaler">Hospitaler</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 116</Link><br/>Paladins are known for their charity and for tending to the sick. The hospitaler takes to this calling above all others, spending much of her time healing the poor, and giving aid and succor to those in need. The hospitaler has the following class features.</p>
<Ability id="arc-paladin-hospitaler-smite-evil-su" icon={["broken-shield"]}>
<Pair single id="arc-paladin-hospitaler-smite-evil-su">Smite Evil (Su)</Pair>
<Pair hl title="Alters">Smite evil</Pair>
<Pair title="Info">This functions as the paladin ability, with the adjusted advancement stated below.</Pair>
<Pair title="Usage">1 time/day + 1 per six paladin levels beyond 1st<ByLevelPop levels={[[1,1],[7,2],[13,3],[19,4]]} unit="time" postText="/day" /></Pair>
</Ability>
<Ability id="arc-paladin-hospitaler-channel-positive-energy-su" icon={["abstract-091"]}>
<Pair single id="arc-paladin-hospitaler-channel-positive-energy-su">Channel Positive Energy (Su)</Pair>
<Pair hl title="Replaces">Channel positive energy</Pair>
<Pair title="At 4th Level">A hospitaler gains the ability to channel positive energy as a <Link to="/class/cleric">cleric</Link> equal to her paladin level - 3.</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Special">Using this ability does not expend uses of <em>lay on hands,</em> as it does with other paladins.</Pair>
</Ability>
<Ability id="arc-paladin-hospitaler-aura-of-healing-su" icon={["abstract-091","heart-plus"]}>
<Pair single id="arc-paladin-hospitaler-aura-of-healing-su">Aura of Healing (Su)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A hospitaler can expend one use of her <em>channel positive energy</em> ability to emit a 30-foot aura of healing for a number of rounds equal to her paladin level. Allies in this aura (including the hospitaler) automatically <Link to="/misc/stabilize">stabilize</Link> if below 0 hit points and are immune to <Link to="/umr/bleed">bleed</Link> damage.</Pair>
<Pair title="Passive Ability">Allies (including the paladin) that spend at least 1 full round inside the aura are healed an amount of damage equal to their total number of Hit Dice and may make a saving throw against any afflictions they are suffering from, such as a curse, disease, or poison. This saving throw only counts toward curing the affliction and does not impose any penalty on a failed save.</Pair>
<Pair title="Special">Allies can only be healed once by a use of this ability and they can only attempt additional saving throws once per day, even if they are exposed to this aura multiple times.</Pair>
</Ability>
</>};
const _hunting_paladin = {title: "Hunting Paladin", jsx: <><h2 id="arc-paladin-hunting_paladin-hunting-paladin">Hunting Paladin</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 70</Link><br/>Hunting paladins are tenacious trackers and stealthy stalkers in pursuit of evildoers.</p>
<Ability icon={["skills"]} id="arc-paladin-hunting_paladin-undefined">
<Pair id="arc-paladin-hunting_paladin-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/perception">Perception</Link> (WIS), <Link to="/skill/stealth">Stealth</Link> (DEX), <Link to="/skill/survival">Survival</Link> (WIS)</Pair>
<Pair title="Removed Skills">Diplomacy, Heal, Knowledge (nobility), Spellcraft</Pair></Ability>
<Ability id="arc-paladin-hunting_paladin-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-paladin-hunting_paladin-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Alters">Armor proficiencies</Pair>
<Pair title="Info">A hunting paladin is not proficient with heavy armor.</Pair>
</Ability>
<Ability id="arc-paladin-hunting_paladin-hunt-evil-su" icon={["upgrade","stairs-goal","rolling-dices","armor-upgrade","hazard-sign"]}>
<Pair single id="arc-paladin-hunting_paladin-hunt-evil-su">Hunt Evil (Su)</Pair>
<Pair hl title="Replaces">1st-level use of smite evil</Pair>
<Pair title="Ability">Once per day, a hunting paladin can designate a single evil creature within her sight or one that she has determined to be evil by declaring it the target of her hunt and following its tracks; this allows her to add her Charisma modifier as a bonus on Survival checks to follow that creature's tracks and on Perception and Stealth checks opposed by the target of her hunt. She can sense her target's presence and location, which lets her pinpoint her target's location when within 10 feet; if the target has <Link to="/rule/concealment">concealment</Link>, she can roll twice and use the better result on rolls to determine whether she misses due to the concealment. She gains <Link to="/ability/uncanny_dodge">uncanny dodge</Link> as per the <Link to="/class/barbarian">barbarian</Link> class feature against her target.</Pair>
<Pair title="Special">If the hunting paladin targets a nonevil creature with <em>hunt evil,</em> the ability fails and it is wasted. This ability ends after 24 hours (unless she spends the next day's use of this ability to continue hunting the same target), after the hunting paladin or the target is killed or when she designates a new target for her hunt.</Pair>
</Ability>
<Ability id="arc-paladin-hunting_paladin-detect-evil-su" icon={["broken-shield","magic-swirl"]}>
<Pair single id="arc-paladin-hunting_paladin-detect-evil-su">Detect Evil (Su)</Pair>
<Pair hl title="Alters">Detect evil</Pair>
<Pair title="Ability">A hunting paladin cannot use this ability as a move action. However, when a hunting paladin has successfully followed a creature's tracks for at least 1 minute, she can discern whether the tracked creature's alignment was evil, as if she had cast <Link to="/spell/detect_evil">detect evil</Link> in its presence and concentrated for 3 rounds.</Pair>
</Ability>
<Ability id="arc-paladin-hunting_paladin-smite-evil-su" icon={["broken-shield"]}>
<Pair single id="arc-paladin-hunting_paladin-smite-evil-su">Smite Evil (Su)</Pair>
<Pair hl title="Alters">Smite evil</Pair>
<Pair title="At 4th Level">A hunting paladin gains this ability at 4th level, and it functions at her paladin level - 3. She can expend a daily use of <em>smite evil</em> to gain an additional daily use of <em>hunt evil.</em> She can use <em>smite evil</em> and <em>hunt evil</em> against the same target.</Pair>
</Ability>
<Ability id="arc-paladin-hunting_paladin-spells" icon={["spell-book"]}>
<Pair single id="arc-paladin-hunting_paladin-spells">Spells</Pair>
<Pair hl title="Alters">Spells</Pair>
<Pair title="Ability">For each level of spell she can cast, a hunting paladin can prepare and cast one spell per day from the <Link to="/main/ranger_spell">ranger spell list</Link> rather than the paladin spell list.</Pair>
</Ability>
<Ability id="arc-paladin-hunting_paladin-tireless-aura-su" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="arc-paladin-hunting_paladin-tireless-aura-su">Tireless Aura (Su)</Pair>
<Pair hl title="Replaces">Aura of resolve</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">A hunting paladin becomes immune to <Link to="/misc/fatigue">fatigue</Link> and sleep effects, and allies within 10 feet gain a +4 bonus on saving throws to avoid becoming fatigued or falling asleep.</Pair>
</Ability>
</>};
const _invigorator = {title: "Invigorator", jsx: <><h2 id="arc-paladin-invigorator-invigorator">Invigorator</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 24</Link><br/>Invigorators devote themselves to keeping their allies bodily whole. These selfless paladins believe the best way to combat evil is by bolstering the health and spirits of those who fight alongside them. They play vital roles and often command troops among martial faiths, such as those of <Link to="/faith/iomedae">Iomedae</Link> and <Link to="/faith/torag">Torag</Link>.</p>
<Ability id="arc-paladin-invigorator-bestow-hope-su" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="arc-paladin-invigorator-bestow-hope-su">Bestow Hope (Su)</Pair>
<Pair hl title="Replaces">Smite evil</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Ability"><p>An invigorator is a champion of her faith who can call upon her deity's holy power to bathe battling allies in protective energy. As a <strong className="hl">swift action</strong> during combat, the invigorator can choose a number of nonevil allies within sight equal to her Charisma modifier upon whom to <em>bestow hope.</em> Once activated, <em>bestow hope</em> grants the invigorator and these allies DR 1/- until the combat ends, at which point the damage reduction immediately ends.</p>
<p>During a battle, the invigorator can change the allies this ability affects as a <strong className="hl">swift action</strong>. Ending it is a <strong className="hl">free action</strong>, but each time it is activated during a single combat, another use of the ability is expended. The invigorator must participate in the combat to use this ability. If she is frightened, panicked, paralyzed, stunned, unconscious, or otherwise prevented from participating in the combat, any DR this ability bestows is temporarily suspended until she can participate in the combat again; this doesn't count as ending the ability.</p>
</Pair>
<Pair title="At 4th Level">The DR becomes 2/-.</Pair>
<Pair title="At 7th Level">The DR increases to 3/-. The invigorator may choose a number of nonevil allies equal to her Charisma modifier + 1.</Pair>
<Pair title="At 10th Level">The DR becomes 4/-.</Pair>
<Pair title="At 13th Level">The DR increases to 5/-.</Pair>
<Pair title="At 16th Level">The DR becomes 6/-.</Pair>
<Pair title="At 19th Level">The DR increases to 7/-.</Pair>
<Pair title="At 20th Level">The invigorator may choose a number of nonevil allies equal to her Charisma modifier + 2.</Pair>
<Pair title="Special">The DR this ability grants does not stack with the DR the invigorator receives from <em>aura of righteousness</em> or <em>holy champion.</em></Pair>
</Ability>
<Ability id="arc-paladin-invigorator-holy-fount-su" icon={["heart-plus","abstract-091"]}>
<Pair single id="arc-paladin-invigorator-holy-fount-su">Holy Fount (Su)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Free Action">An invigorator can expend two uses of <em>bestow hope</em> to radiate healing energies to bolster her nearby allies. For a number of rounds equal to 1/2 the invigorator's paladin level, the invigorator and all nonevil allies within a 10-foot radius of her gain <Link to="/umr/fast_healing">fast healing</Link> 10.</Pair>
<Pair title="Special">This ability is an aura centered on the invigorator; allies must be within the aura at the beginning of their turns to benefit from the fast healing.</Pair>
</Ability>
<Ability id="arc-paladin-invigorator-champion-of-life-sp" icon={["magic-swirl","upgrade"]}>
<Pair single id="arc-paladin-invigorator-champion-of-life-sp" flavor="An invigorator's holy resolve can sometimes overcome death - or smite the horror that is undeath.">Champion of Life (Sp)</Pair>
<Pair hl title="Replaces">Holy champion</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Standard Action">Three per day, an invigorator can use <Link to="/spell/breath_of_life">breath of life</Link> as a spell-like ability, using her paladin level as her caster level. Creatures brought back to life with this ability do not suffer the normal temporary negative level the spell imposes.</Pair>
</Ability>
</>};
const _iomedaen_enforcer = {title: "Iomedaen Enforcer", jsx: <><h2 id="arc-paladin-iomedaen_enforcer-iomedaen-enforcer">Iomedaen Enforcer</h2>
<p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology pg. 6</Link><br/>Since the publication of The Majestic Book of the Prime Ascended, certain paladins have taken "Prime Commander" to heart and have developed their own methods of upholding the teachings in this book. Iomedaean enforcers have altered abilities that allow them to stand against the forces of chaos. They seek to maintain order and uphold the laws of just rulers and governments, pursuing any who break those laws or otherwise disrupt the peace. Still, they remain lawful good servants of <Link to="/faith/iomedae">Iomedae</Link>, and as such always seek to temper the justice they deliver with mercy.</p>
<Ability icon={["skills"]} id="arc-paladin-iomedaen_enforcer-undefined">
<Pair id="arc-paladin-iomedaen_enforcer-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/intimidate">Intimidate</Link> (CHA), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT)</Pair>
<Pair title="Removed Skills">Diplomacy, Knowledge (nobility)</Pair></Ability>
<Ability id="arc-paladin-iomedaen_enforcer-detect-chaos-sp" icon={["magic-swirl"]}>
<Pair single id="arc-paladin-iomedaen_enforcer-detect-chaos-sp">Detect Chaos (Sp)</Pair>
<Pair hl title="Replaces">Detect evil</Pair>
<Pair title="Move-Equivalent Action">At will, an Iomedaean enforcer can use <Link to="/spell/detect_chaos">detect chaos</Link>, as per the spell. The Iomedaean enforcer can concentrate on a single item or individual within 60 feet and determine whether it is chaotic, learning the strength of its aura as if she had studied it for 3 rounds. While focusing on one individual or object, the Iomedaean enforcer can't use <em>detect chaos</em> on any other object or individual within range.</Pair>
</Ability>
<Ability id="arc-paladin-iomedaen_enforcer-smite-chaos-su" icon={["info","upgrade"]}>
<Pair single id="arc-paladin-iomedaen_enforcer-smite-chaos-su">Smite Chaos (Su)</Pair>
<Pair hl title="Replaces">Smite evil</Pair>
<Pair title="Ability">This ability functions as the paladin's <em>smite evil</em> ability, but against chaotic-aligned creatures. Smite chaos is twice as effective against chaotic-aligned aberrations, outsiders with the chaotic subtype, and fey.</Pair>
</Ability>
<Ability id="arc-paladin-iomedaen_enforcer-aura-of-order" icon={["armor-downgrade","abstract-091"]}>
<Pair single id="arc-paladin-iomedaen_enforcer-aura-of-order">Aura of Order</Pair>
<Pair hl title="Alters">Aura of faith</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">The paladin's weapons are treated as lawful-aligned for the purposes of overcoming damage reduction. Any attack made against an enemy within 10 feet of the Iomedaean enforcer is treated as if it were lawful-aligned for the purpose of overcoming damage reduction.</Pair>
</Ability>
<Ability id="arc-paladin-iomedaen_enforcer-armor-of-law-su" icon={["info"]}>
<Pair single id="arc-paladin-iomedaen_enforcer-armor-of-law-su">Armor of Law (Su)</Pair>
<Pair hl title="Alters">Aura of righteousness, holy champion</Pair>
<Pair title="Info">When an enforcer gains damage reduction from <em>aura of righteousness,</em> it is DR 5/chaos instead of DR 5/evil. When that DR increases from the <em>holy champion</em> class feature, it increases to DR 10/chaos.</Pair>
</Ability>
</>};
const _iroran_paladin = {title: "Iroran Paladin", jsx: <><h2 id="arc-paladin-iroran_paladin-iroran-paladin">Iroran Paladin</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 39</Link><br/>Iroran paladins meditate on self-perfection and train relentlessly, knowing that their example can inspire others to excel. <Link to="/faith/irori">Irori</Link> offers no universal paladin code; each paladin in his service creates his own code as part of his spiritual journey, seeing the adherence to such a self-formulated creed as one of the many tests one must face to reach perfection.</p>
<Ability icon={["skills"]} id="arc-paladin-iroran_paladin-undefined">
<Pair id="arc-paladin-iroran_paladin-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX), <Link to="/skill/climb">Climb</Link> (STR), <Link to="/skill/swim">Swim</Link> (STR)</Pair></Ability>
<Ability id="arc-paladin-iroran_paladin-confident-defense-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-paladin-iroran_paladin-confident-defense-ex">Confident Defense (Ex)</Pair>
<Pair hl title="Replaces">Proficiency with medium armor, heavy armor, and shields</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">When wearing light or no armor and not using a shield, an Iroran paladin adds 1 point of his Charisma bonus (if any) per class level to his Dexterity bonus to his Armor Class. If he is caught <Link to="/rule/flat_footed">flat-footed</Link> or otherwise denied his Dexterity bonus, he also loses this bonus.</Pair>
</Ability>
<Ability id="arc-paladin-iroran_paladin-unarmed-strike" icon={["stairs-goal","mailed-fist"]}>
<Pair single id="arc-paladin-iroran_paladin-unarmed-strike">Unarmed Strike</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">An Iroran paladin gains <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat. In addition, he gains the unarmed strike <Link to="/class/monk">monk</Link> ability, treating his monk level as half his paladin level (minimum 1) for calculating his unarmed strike damage.</Pair>
</Ability>
<Ability id="arc-paladin-iroran_paladin-aura-of-law-su" icon={["info"]}>
<Pair single id="arc-paladin-iroran_paladin-aura-of-law-su">Aura of Law (Su)</Pair>
<Pair hl title="Replaces">Aura of good</Pair>
<Pair title="Info">The power of an Iroran paladin's <em>aura of law</em> is equal to his class level.</Pair>
</Ability>
<Ability id="arc-paladin-iroran_paladin-sense-perfection-su" icon={["magic-swirl"]}>
<Pair single id="arc-paladin-iroran_paladin-sense-perfection-su">Sense Perfection (Su)</Pair>
<Pair hl title="Replaces">Detect evil</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">At will, an Iroran paladin can detect life forces as if he were using a paladin's <em>detect evil</em> class ability; however, instead of sensing evil creatures, he senses creatures that have a ki pool. Each such creature has an aura like a cleric of an aligned deity, and treats its current number of ki points as its Hit Dice for the purposes of this ability.</Pair>
</Ability>
<Ability id="arc-paladin-iroran_paladin-personal-trial-su" icon={["upgrade"]}>
<Pair single id="arc-paladin-iroran_paladin-personal-trial-su">Personal Trial (Su)</Pair>
<Pair hl title="Replaces">Smite evil</Pair>
<Pair title="Usage">1 time/day + 1 per three paladin levels beyond 1st<ByLevelPop levels={[[1,1],[4,2],[7,3],[10,4],[13,5],[16,6],[19,7]]} unit="time" postText="/day" /></Pair>
<Pair title="Swift Action">An Iroran paladin can declare one target within line of sight as his <em>personal trial.</em> The Iroran paladin gains an insight bonus on attack rolls and damage rolls against that creature, to his AC against attacks made by the target, and on saving throws against the target's spells and special abilities. This bonus is equal to 1 + <Link to="/misc/one_fourth">one-fourth</Link> of his paladin level.</Pair>
<Pair title="Special">The <em>personal trial</em> effect remains until the target of the trial is dead or the next time the paladin rests and regains daily uses of this ability.</Pair>
</Ability>
<Ability id="arc-paladin-iroran_paladin-aura-of-excellence-su" icon={["armor-upgrade","shield-reflect","rolling-dices"]}>
<Pair single id="arc-paladin-iroran_paladin-aura-of-excellence-su">Aura of Excellence (Su)</Pair>
<Pair hl title="Replaces">Aura of courage</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">An Iroran paladin is immune to any effect that would force him to reroll a die against his will or roll twice and take the lower result. Whenever an ally within 10 feet of him would reroll a die against her will, she can roll twice and take the higher result. Whenever an ally within 10 feet would be forced to roll twice and take the lower result, she can instead roll three times and take the second-lowest result. This ability functions only while the Iroran paladin is conscious.</Pair>
</Ability>
<Ability id="arc-paladin-iroran_paladin-ki-pool-su" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="arc-paladin-iroran_paladin-ki-pool-su">Ki Pool (Su)</Pair>
<Pair hl title="Replaces">Channel positive energy</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">An Iroran paladin gains a ki pool with an effective monk level equal to his class level. The number of points in an Iroran paladin's ki pool is equal to 1/2 his class level + his Charisma modifier.</Pair>
<Pair title="Special">By spending 1 point from his ki pool, he can ignore any damage reduction possessed by the target of his <em>personal trial</em> ability for 1 round. This ability otherwise functions as the monk ability of the same name.</Pair>
</Ability>
<Ability id="arc-paladin-iroran_paladin-divine-body-su" icon={["info"]}>
<Pair single id="arc-paladin-iroran_paladin-divine-body-su">Divine Body (Su)</Pair>
<Pair hl title="Replaces">Divine bond</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Info">An Iroran paladin must form a bond with a weapon, except he can only choose to enhance his unarmed strike. This ability otherwise functions as <em>divine bond.</em></Pair>
</Ability>
<Ability id="arc-paladin-iroran_paladin-aura-of-perfection-su" icon={["rolling-dices"]}>
<Pair single id="arc-paladin-iroran_paladin-aura-of-perfection-su">Aura of Perfection (Su)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">Whenever an Iroran paladin or ally within 10 feet would reroll a die and take the second result even if it is lower (via the good fortune ability of the <Link to="/domain/luck">Luck</Link> domain, for example), he can roll an additional die as part of the reroll and use the higher of the two as the result of the reroll.</Pair>
<Pair title="Special">This ability functions only while the Iroran paladin is conscious.</Pair>
</Ability>
</>};
const _knight_of_coins = {title: "Knight of Coins", jsx: <><h2 id="arc-paladin-knight_of_coins-knight-of-coins">Knight of Coins</h2>
<p><strong>Sources</strong> <Link to="/source/merchants_manifest">Merchant's Manifest pg. 28</Link><br/>Servants of gods who revere wealth, knights of coins promote fair trade and stable commerce between cities and between nations. Many of these knights are Abadarans, and some have also taken the sacred shield archetype. Regardless, knights of coins know that a prosperous city can uplift and enrich more people than pious prayers alone.</p>
<Ability icon={["skills"]} id="arc-paladin-knight_of_coins-undefined">
<Pair id="arc-paladin-knight_of_coins-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/appraise">Appraise</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/perception">Perception</Link> (WIS), <Link to="/skill/use_magic_device">Use Magic Device</Link> (CHA)</Pair></Ability>
<Ability id="arc-paladin-knight_of_coins-skills" icon={["info"]}>
<Pair single id="arc-paladin-knight_of_coins-skills">Skills</Pair>
<Pair hl title="Alters">Skill ranks per level</Pair>
<Pair title="Info">She gains a number of skill ranks equal to 4 + her Intelligence modifier at each level, instead of a number of skill ranks equal to 2 + her Intelligence modifier.</Pair>
</Ability>
<Ability id="arc-paladin-knight_of_coins-eye-for-forgeries-sp" icon={["magic-swirl"]}>
<Pair single id="arc-paladin-knight_of_coins-eye-for-forgeries-sp">Eye for Forgeries (Sp)</Pair>
<Pair hl title="Replaces">Detect evil</Pair>
<Pair title="Move-Equivalent Action">At will, a knight of coins can concentrate on a single item within 30 feet. When she does, the knight of coins can detect if it is magical, as per the spell <Link to="/spell/detect_magic">detect magic</Link>. The knight of coins cannot concentrate on more than one item in this way at a time.</Pair>
</Ability>
<Ability id="arc-paladin-knight_of_coins-blessing-of-prosperity-su" extraClasses="hasSubs" icon={["upgrade"]}>
<Pair single id="arc-paladin-knight_of_coins-blessing-of-prosperity-su" flavor="A knight of coins is a patron of wealth and seeks to even the playing field for those who have unfair economic disadvantages.">Blessing of Prosperity (Su)</Pair>
<Pair hl title="Replaces">3rd-, 9th-, and 15th-level mercies</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Choice">At 3rd level, the paladin can select a <em>blessing</em> (see below).<sup><InnerLink showBacklink="backlink-arc-paladin-knight_of_coins-fake-fn-1" id="arc-paladin-knight_of_coins-fake-fn-1" data-hash-target to="arc-paladin-knight_of_coins-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Standard Action">By expending a use of <em>lay on hands,</em> the knight of coins can instead grant a boon to herself or a creature touched. These boons do not stack with themselves or with blessings from another knight of coins. A <em>blessing of prosperity</em> lasts up to 1 hour, though the knight of coins who bestowed it can end a <em>blessing's</em> benefits early (whether it affects her or another creature) as a <strong className="hl">free action</strong>. Using this ability requires only one free hand and is a standard action, unless the knight of coins targets herself, in which case it is a <strong className="hl">swift action</strong>.</Pair>
<Pair title="Info">A knight of coins who takes the <Link to="/feat/extra_mercy">Extra Mercy</Link> feat can gain an extra <em>blessing of prosperity</em> instead of an extra mercy. Once a <em>blessing of prosperity</em> is chosen, it can't be changed. A character who has benefited from a <em>blessing of prosperity</em> cannot benefit from that same <em>blessing</em> again (whether bestowed by the same knight of coins or another knight of coins) for 24 hours.</Pair>
<Pair title="At 6th Level">She can select her 2nd <em>blessing.</em></Pair>
<Pair title="At 9th Level">She can select her 3rd <em>blessing.</em></Pair>
<Pair title="At 12th Level">She can select her 4th <em>blessing.</em></Pair>
<Pair title="At 15th Level">She can select her 5th <em>blessing.</em></Pair>
<Pair title="At 18th Level">She can select her 6th <em>blessing.</em></Pair>
<Pair title="Special">If she knows multiple <em>blessings of prosperity,</em> the knight of coins can bestow multiple <em>blessings</em> on a single target as part of the action and the expenditure of a use of <em>lay on hands</em> required to use this ability. If she bestows multiple different <em>blessings,</em> these <em>blessings</em> are cumulative. For example, a 9th-level knight of coins' <em>blessing of prosperity</em> ability might grant a +4 sacred bonus on Appraise and Sense Motive checks as well as a +4 sacred bonus on Perception checks and to CMD against <Link to="/rule/disarm">disarm</Link> and <Link to="/rule/steal">steal</Link> combat maneuvers.</Pair>
</Ability>
<Ability id="arc-paladin-knight_of_coins-wealth" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-paladin-knight_of_coins-wealth">Wealth</Pair>
<Pair title="Passive Ability">The target adds an extra 10% to the gp value gained when selling off treasure (normally 50% of the item's original value).</Pair>
<Pair title="Special">This blessing cannot result in selling treasure for more than 100% of its original value.</Pair>
</Ability>
<Ability id="arc-paladin-knight_of_coins-insight" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-paladin-knight_of_coins-insight">Insight</Pair>
<Pair title="Passive Ability">The target gains a +4 sacred bonus on Appraise and Sense Motive checks.</Pair>
</Ability>
<Ability id="arc-paladin-knight_of_coins-seeing" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-paladin-knight_of_coins-seeing">Seeing</Pair>
<Pair title="Passive Ability">The target gains a +4 sacred bonus on Perception checks and to CMD against disarm and steal combat maneuvers.</Pair>
</Ability>
<Ability id="arc-paladin-knight_of_coins-work" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-paladin-knight_of_coins-work">Work</Pair>
<Pair title="Passive Ability">The target gains a +4 sacred bonus on Craft, Perform, and Profession checks.</Pair>
</Ability>
<Ability id="arc-paladin-knight_of_coins-seeking" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-paladin-knight_of_coins-seeking">Seeking</Pair>
<Pair title="Ability">The target can use <Link to="/spell/locate_object">locate object</Link> as a spell-like ability once, using the knight of coins' class level as the caster level.</Pair>
</Ability>
<Ability id="arc-paladin-knight_of_coins-quality" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-paladin-knight_of_coins-quality">Quality</Pair>
<Pair title="Passive Ability">The target can treat one <Link to="/rule/settlements_in_play">settlement</Link> as having its base value and purchase limit increased by 30%.</Pair>
<Pair title="Special">The target must choose the affected settlement when the knight of coins bestows this blessing.</Pair>
</Ability>
<Ability id="arc-paladin-knight_of_coins-variety" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-paladin-knight_of_coins-variety">Variety</Pair>
<Pair title="Passive Ability">The target can treat one settlement as being one size category larger for the purposes of determining available magic items.</Pair>
<Pair title="Special">The target must choose the affected settlement when the knight of coins bestows this blessing.</Pair>
</Ability>
<section data-footnotes><h3 id="arc-paladin-knight_of_coins-label">Footnotes</h3><ol>
<li id="arc-paladin-knight_of_coins-fake-fn-1-target"><p>The blessings were unnamed in the original text. They have been given names here for clarity. <InnerLink aria-label="Back to reference 1" id="backlink-arc-paladin-knight_of_coins-fake-fn-1" data-hash-target to="arc-paladin-knight_of_coins-fake-fn-1">↩</InnerLink></p></li>
</ol></section></>};
const _kraken_slayer = {title: "Kraken Slayer", jsx: <><h2 id="arc-paladin-kraken_slayer-kraken-slayer">Kraken Slayer</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_sea">Blood of the Sea pg. 15</Link><br/>Triton kraken slayers oppose all underwater threats, but they especially target the tentacled monstrosities called <Link to="/monster/kraken">krakens</Link>. Kraken slayers develop specialized tactics to defeat their hated enemies as well as learn to recognize the signs of kraken activity in an area. A kraken slayer's greatest responsibility is to destroy evil; all other commitments fall by the wayside. Though kraken slayers uphold all promises they make, they must balance their obligations as kraken slayers with their role as knights and defenders of the ocean.</p>
<Ability id="arc-paladin-kraken_slayer-smite-deepest-evil-su" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-paladin-kraken_slayer-smite-deepest-evil-su">Smite Deepest Evil (Su)</Pair>
<Pair hl title="Alters">Smite evil</Pair>
<Pair title="Ability">This functions as the <em>smite evil</em> ability, but the kraken slayer does not get a bonus of 2 points of damage per level on the first successful attack against any creatures other than evil creatures with the aquatic or water subtype. She gains a bonus of 2 points of damage per level on all smite attacks made against evil creatures with the aquatic or water subtype.</Pair>
</Ability>
<Ability id="arc-paladin-kraken_slayer-divine-immunity-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-paladin-kraken_slayer-divine-immunity-ex">Divine Immunity (Ex)</Pair>
<Pair hl title="Replaces">Divine health</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A kraken slayer is immune to poisons and diseases, including supernatural and magical diseases, delivered by the natural attacks of creatures with the aquatic or water subtype.</Pair>
</Ability>
<Ability id="arc-paladin-kraken_slayer-divine-bond-sp" icon={["info"]}>
<Pair single id="arc-paladin-kraken_slayer-divine-bond-sp">Divine Bond (Sp)</Pair>
<Pair hl title="Alters">Divine bond</Pair>
<Pair title="Ability">A kraken slayer who chooses a weapon as her <em>divine bond</em> may either increase her weapon's enhancement bonus or add any of the following properties to her weapon: <Link to="/magic-enh/axiomatic">axiomatic</Link>, <Link to="/magic-enh/brilliant_energy">brilliant energy</Link>, <Link to="/magic-enh/defending">defending</Link>, <Link to="/magic-enh/grayflame">grayflame</Link>, <Link to="/magic-enh/holy">holy</Link>, <Link to="/magic-enh/keen">keen</Link>, <Link to="/magic-enh/merciful">merciful</Link>, <Link to="/magic-enh/seaborne">seaborne</Link>, and <Link to="/magic-enh/speed">speed</Link>.</Pair>
<Pair title="Ability">A kraken slayer who chooses a mount must select one suitable for an aquatic environment, such as an <Link to="/companion/elasmosaurus">elasmosaurus</Link>, <Link to="/companion/giant_seahorse">giant seahorse</Link>, or <Link to="/companion/orca">orca</Link>.</Pair>
</Ability>
<Ability id="arc-paladin-kraken_slayer-aura-of-elusion-su" icon={["upgrade","armor-upgrade","shield-reflect"]}>
<Pair single id="arc-paladin-kraken_slayer-aura-of-elusion-su">Aura of Elusion (Su)</Pair>
<Pair hl title="Replaces">Aura of faith</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">A kraken slayer gains a sacred bonus equal to her kraken slayer level on Escape Artist checks and combat maneuver checks to escape a grapple and to her CMD to avoid being grappled. Each ally within 10 feet of her gains a sacred bonus equal to half her kraken slayer level on Escape Artist checks and combat maneuver checks to escape a grapple and to CMD to avoid being grappled.</Pair>
<Pair title="Special">This ability functions only while the paladin is conscious, not if she is unconscious or dead.</Pair>
</Ability>
</>};
const _legate = {title: "Legate", jsx: <><h2 id="arc-paladin-legate-legate">Legate</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 6</Link><br/>The first legates in the Inner Sea region were ambassadors from Holomog, a celestial-worshiping confederation in southern Garund. Though they hold to the same strict paladin code, legates present themselves not as armed crusaders, but as peaceful envoys and advisors, bringing wisdom garnered from the long, stable history of their nation. They often serve as diplomats (and sometimes spies) for good organizations. Yet woe to those who believe them defenseless, for a legate can call upon her divine patron to provide her with armor and weapons.</p>
<Ability id="arc-paladin-legate-celestial-armor-sp" icon={["magic-swirl","armor-upgrade"]}>
<Pair single id="arc-paladin-legate-celestial-armor-sp">Celestial Armor (Sp)</Pair>
<Pair hl title="Replaces">Mercy</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">A number of times per day equal to her Wisdom bonus plus <Link to="/misc/half">half</Link> her paladin level.</Pair>
<Pair title="Standard Action">A legate can conjure armor. This ability acts as the spell <Link to="/spell/instant_armor">instant armor</Link>, using her paladin level as her caster level, except as follows.</Pair>
<Pair title="Info">If the legate has a steed bond and is riding her steed, she can include her steed when summoning celestial armor, granting the steed barding with the same bonuses and special abilities (see below) as her own.</Pair>
<Pair title="At 6th Level">The armor gains an additional +1 enhancement bonus.</Pair>
<Pair title="At 9th Level">The armor gains an additional +1 enhancement bonus.</Pair>
<Pair title="At 12th Level">The armor gains an additional +1 enhancement bonus.</Pair>
<Pair title="At 15th Level">The armor gains an additional +1 enhancement bonus.</Pair>
<Pair title="At 18th Level">The armor gains an additional +1 enhancement bonus.</Pair>
<Pair title="Special"><p>These bonuses can be used to add any of the following armor special abilities: <Link to="/magic-enh/champion">champion</Link>, <Link to="/magic-enh/fortification">fortification</Link> (heavy, light, or medium), <Link to="/magic-enh/invulnerability">invulnerability</Link>, or <Link to="/magic-enh/spell_resistance">spell resistance</Link> (13, 15, 17, or 19).</p>
<p>In addition, the legate can grant her armor the <Link to="/magic-enh/energy_resistance">energy resistance</Link> special ability at the cost of a +3 bonus, the <Link to="/magic-enh/improved_energy_resistance">improved energy resistance</Link> special ability at the cost of a +5 bonus, or the <Link to="/magic-enh/righteous">righteous</Link> special ability at a cost of a +4 bonus.</p>
<p>The armor must have least a +1 enhancement bonus before any special abilities can be added. The bonus and special abilities granted are determined when this ability is used and cannot be changed until this ability is used again.</p>
</Pair>
</Ability>
</>};
const _martyr = {title: "Martyr", jsx: <><h2 id="arc-paladin-martyr-martyr">Martyr</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 64</Link><br/>Every paladin's code instructs him to put the welfare of others before his own, but some paladins take this farther than most, shouldering the blackest suffering of the world onto themselves in order to help others and inspiring their allies to achieve heights of valor rather than seeking the glory for themselves.</p>
<Ability id="arc-paladin-martyr-stigmata" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-paladin-martyr-stigmata">Stigmata</Pair>
<Pair hl title="Replaces">Smite evil</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">A number of rounds per day equal to 3 + your Charisma modifier + your paladin level.</Pair>
<Pair title="Standard Action">The martyr can chant hymns of faith and cause bleeding stigmata to visibly appear on his body. While his <em>stigmata</em> are active, he takes 1 point of <Link to="/umr/bleed">bleed</Link> damage, which automatically ceases when he ends this ability but otherwise does not relent, even in the face of magical healing or Heal checks. His <em>stigmata</em> assist his allies, duplicating the effect of the <Link to="/performance/countersong">countersong</Link>, <Link to="/performance/distraction">distraction</Link>, or <Link to="/performance/inspire_courage">inspire courage</Link> bardic performance of a bard of his paladin level, though both <em>countersong</em> and <em>distraction</em> use Heal skill checks instead of Perform skill checks.</Pair>
<Pair title="At 7th Level">He can manifest <em>stigmata</em> as a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 10th Level">He can choose to duplicate the effects of <Link to="/performance/inspire_greatness">inspire greatness</Link>.</Pair>
<Pair title="At 13th Level">He can manifest <em>stigmata</em> as a <strong className="hl">swift action</strong>.</Pair>
<Pair title="At 16th Level">He can choose to duplicate the effects of <Link to="/performance/inspire_heroics">inspire heroics</Link>.</Pair>
</Ability>
<Ability id="arc-paladin-martyr-see-no-evil-hear-no-evil-su" icon={["armor-upgrade"]}>
<Pair single id="arc-paladin-martyr-see-no-evil-hear-no-evil-su">See No Evil, Hear No Evil (Su)</Pair>
<Pair hl title="Replaces">Divine grace</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">The martyr and all allies within 20 feet of him gain a +4 morale bonus on saving throws against <Link to="/ability/bardic_performance">bardic performance</Link>, sonic effects, language-dependent effects, and <Link to="/umr/gaze">gaze</Link> attacks.</Pair>
<Pair title="Special">This ability functions only when the martyr is conscious.</Pair>
</Ability>
<Ability id="arc-paladin-martyr-aura-mastery-su" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-paladin-martyr-aura-mastery-su">Aura Mastery (Su)</Pair>
<Pair hl title="Alters">Aura of courage, aura of resolve, aura of righteousness</Pair>
<Pair title="Ability">The martyr's <em>aura of courage, aura of resolve,</em> and <em>aura of righteousness</em> have a radius of 20 feet instead of 10 feet, but the martyr does not gain immunity to fear, charms, or compulsions from those abilities.</Pair>
</Ability>
<Ability id="arc-paladin-martyr-aura-of-health-su" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="arc-paladin-martyr-aura-of-health-su">Aura of Health (Su)</Pair>
<Pair hl title="Replaces">Divine health</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">The martyr and all allies within 20 feet of him gain a +4 morale bonus on saving throws against diseases.</Pair>
<Pair title="Special">This ability functions only when the martyr is conscious.</Pair>
</Ability>
<Ability id="arc-paladin-martyr-martyrs-mercy-su" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-paladin-martyr-martyrs-mercy-su">Martyr's Mercy (Su)</Pair>
<Pair hl title="Alters">Lay on hands, mercy</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A martyr can apply any of the mercies for which he qualifies based on his paladin level to his <em>lay on hands,</em> even if he didn't select that mercy (or its prerequisites). However, when he uses a mercy he didn't select, he transfers the condition to himself for the remaining duration (ignoring any immunity he might have to the condition), and he can't use this ability if he already has that condition. If he transfers a condition to himself in this way, he can't remove it from himself with a personal-only ability.</Pair>
<Pair title="Special">The martyr can use <em>lay on hands</em> on any ally within 30 feet, rather than needing to touch the ally, but using <em>lay on hands</em> on himself is a <strong className="hl">standard action</strong>, not a swift action.</Pair>
</Ability>
</>};
const _mind_sword = {title: "Mind Sword", jsx: <><h2 id="arc-paladin-mind_sword-mind-sword">Mind Sword</h2>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 20</Link><br/>Veterans of mystical battles against demons of the Worldwound, mind swords merge psychic and divine power, probing and cleansing minds while their telekinetic blades cleave demonic flesh.</p>
<Ability id="arc-paladin-mind_sword-mind-arsenal-su" icon={["bowman"]}>
<Pair single id="arc-paladin-mind_sword-mind-arsenal-su">Mind Arsenal (Su)</Pair>
<Pair hl title="Replaces">Lay on hands</Pair>
<Pair title="At 2nd Level">A mind sword can make a telekinetic attack with a melee weapon. This functions as the <em>hand of the apprentice</em> <Link to="/arcaneschool/universalist">universalist</Link> wizard school ability, but any calculations of that ability based on Intelligence are instead based on Charisma.</Pair>
<Pair title="At 6th Level">A mind sword can expend two uses of this ability as a <strong className="hl">full-round action</strong> to attack the same opponent multiple times, as if using the full-attack action.</Pair>
<Pair title="At 12th Level">A mind sword can expend one use of this ability as a <strong className="hl">full-round action</strong> to combine melee attacks and ranged attacks aimed at different targets within 60 feet as part of a single full-attack action.</Pair>
</Ability>
<Ability id="arc-paladin-mind_sword-touch-treatment-su" extraClasses="hasSubs" icon={["heart-plus"]}>
<Pair single id="arc-paladin-mind_sword-touch-treatment-su">Touch Treatment (Su)</Pair>
<Pair hl title="Replaces">Mercy</Pair>
<Pair title="At 3rd Level">A mind sword can expend one use of her <em>mind arsenal</em> ability to remove minor harmful mental conditions, as per the <Link to="/class/mesmerist">mesmerist</Link> <em>touch treatment</em> class feature (minor ability).</Pair>
<Pair title="At 9th Level">Her <em>treatment</em> expands to the "moderate" version of the ability.</Pair>
<Pair title="At 15th Level">She can remove conditions as per the "greater" ability of <em>touch treatment.</em></Pair>
</Ability>
<Ability id="arc-paladin-mind_sword-touch-treatment-su" extraClasses="subAbility" icon={["heart-plus"]}>
<Pair single id="arc-paladin-mind_sword-touch-treatment-su" flavor="Text from the mesmerist ability.">Touch Treatment (Su)</Pair>
<Pair title="At 3rd Level">You can help allies shake off harmful conditions - especially those that affect their minds - by channeling psychic energy through your healing hands. You must be able to touch your target. You can remove the <em>fascinated</em> or <em>shaken</em> condition from your target each time you use this ability. This is the "minor" ability.</Pair>
<Pair title="At 6th Level">You can now also remove the <em>confused, dazed, frightened,</em> and <em>sickened</em> conditions. This is the "moderate" ability.</Pair>
<Pair title="At 10th Level">You can now also remove the <em>cowering, nauseated, panicked,</em> and <em>stunned</em> conditions. This is the "greater" ability.</Pair>
<Pair title="At 14th Level">You can instead expend one use of touch treatment to replicate the effects of <Link to="/spell/break_enchantment">break enchantment</Link>. This targets only one creature you are touching and follows all other restrictions of touch treatment.</Pair>
</Ability>
<Ability id="arc-paladin-mind_sword-spells" icon={["spell-book"]}>
<Pair single id="arc-paladin-mind_sword-spells">Spells</Pair>
<Pair hl title="Replaces">Channel positive energy</Pair>
<Pair title="Info">A mind sword adds the following psychic spells to her paladin spell list at the listed spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/detect_psychic_significance">Detect psychic significance</Link>, <Link to="/spell/mage_hand">mage hand</Link>, <Link to="/spell/telekinetic_projectile">telekinetic projectile</Link>, <Link to="/spell/thought_shield_i">thought shield I</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/apport_object">Apport object</Link>, <Link to="/spell/enshroud_thoughts">enshroud thoughts</Link>, <Link to="/spell/mental_barrier_i">mental barrier I</Link>, <Link to="/spell/thought_shield_ii">thought shield II</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/intellect_fortress_i">Intellect fortress I</Link>, <Link to="/spell/mental_barrier_ii">mental barrier II</Link>, <Link to="/spell/telekinetic_maneuver">telekinetic maneuver</Link>, <Link to="/spell/thought_shield_iii">thought shield III</Link></Pair>
<Pair plain title="4th"><Link to="/spell/intellect_fortress_ii">Intellect fortress II</Link>, <Link to="/spell/telekinesis">telekinesis</Link>, <Link to="/spell/thought_shield_iv">thought shield IV</Link>, <Link to="/spell/thoughtsense">thoughtsense</Link>, <Link to="/spell/tower_of_iron_will_i">tower of iron will I</Link></Pair>
<Pair title="Special">The mind sword can prepare and cast these psychic spells as divine paladin spells. However, the mind sword cannot use these spells for item creation, including making potions or scrolls of these spells.</Pair>
</Ability>
</>};
const _pearl_seeker = {title: "Pearl Seeker", jsx: <><h2 id="arc-paladin-pearl_seeker-pearl-seeker">Pearl Seeker</h2>
<p><strong>Sources</strong> <Link to="/source/aquatic_adventures">Aquatic Adventures pg. 54</Link><br/>Some paladins are called to their faith by strange empathic visions and dreams that beckon them to the oceans and beyond, to right aquatic injustice and search for a glorious gasping and whispering pearl they don't understand. Their contact with the strange but benevolent entity sending the dreams grants them unusual powers compared to other paladins.</p>
<Ability id="arc-paladin-pearl_seeker-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-paladin-pearl_seeker-armor-proficiency">Armor Proficiency</Pair>
<Pair hl title="Alters">Armor proficiency</Pair>
<Pair title="Info">A pearl seeker is proficient with light and medium armor but not with shields.</Pair>
</Ability>
<Ability icon={["skills"]} id="arc-paladin-pearl_seeker-undefined">
<Pair id="arc-paladin-pearl_seeker-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/swim">Swim</Link> (STR)</Pair></Ability>
<Ability id="arc-paladin-pearl_seeker-seek-impressions-ex-sp" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-pearl_seeker-seek-impressions-ex-sp" flavor="Pearl seekers gain their power from a rare resonant sensitivity to the vision-granting entity.">Seek Impressions (Ex, Sp)</Pair>
<Pair hl title="Replaces">Detect evil</Pair>
<Pair title="Ability">A pearl seeker gains <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> as a bonus feat and can use <Link to="/spell/detect_psychic_significance">detect psychic significance</Link> at will as a spell-like ability.</Pair>
</Ability>
<Ability id="arc-paladin-pearl_seeker-aquatic-domain-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-pearl_seeker-aquatic-domain-su">Aquatic Domain (Su)</Pair>
<Pair hl title="Replaces">Aura of courage, aura of resolve</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A pearl seeker gains the 1st-level domain power (Sealord) of the <Link to="/druiddomain/aquatic">Aquatic</Link> terrain domain, using her paladin level as her effective druid level.</Pair>
<Pair title="At 8th Level">She gains the 6th-level domain power (Seastrike) of the Aquatic terrain domain.</Pair>
</Ability>
<Ability id="arc-paladin-pearl_seeker-sealord-su" extraClasses="subAbility" icon={["abstract-091","heart-plus"]}>
<Pair single id="arc-paladin-pearl_seeker-sealord-su" flavor="From the Aquatic domain">Sealord (Su)</Pair>
<Pair title="At 1st Level">You can <Link to="/ability/channel_energy">channel energy</Link> (as a cleric of your druid level) a number of times per day equal to 3 + your Charisma modifier, but only to heal creatures with the aquatic or water subtype or to command them (similar to using the <Link to="/feat/command_undead">Command Undead</Link> feat against undead). You can take other feats to add to this ability, such as <Link to="/feat/extra_channel">Extra Channel</Link> and <Link to="/feat/improved_channel">Improved Channel</Link>, but not feats that alter this ability, such as <Link to="/feat/elemental_channel">Elemental Channel</Link> and <Link to="/feat/alignment_channel">Alignment Channel</Link>. The DC to save against this ability is equal to 10 + 1/2 your druid level + your Charisma modifier.</Pair>
</Ability>
<Ability id="arc-paladin-pearl_seeker-seastrike-su" extraClasses="subAbility" icon={["stairs-goal","bowman"]}>
<Pair single id="arc-paladin-pearl_seeker-seastrike-su" flavor="From the Aquatic domain">Seastrike (Su)</Pair>
<Pair title="At 8th Level">As a <strong className="hl">free action</strong>, you may use natural and manufactured weapons in water as if you had continuous <em>freedom of movement.</em> As a <strong className="hl">standard action</strong>, you can throw a weapon underwater without the normal penalties for throwing weapons; if your target is in or under the water, the weapon also acts as a <Link to="/magic-enh/returning">returning</Link> weapon for that attack.</Pair>
</Ability>
<Ability id="arc-paladin-pearl_seeker-vision-magic" icon={["spell-book","magic-swirl"]}>
<Pair single id="arc-paladin-pearl_seeker-vision-magic">Vision Magic</Pair>
<Pair hl title="Alters">Spells</Pair>
<Pair title="Ability">A pearl seeker casts divine spells spontaneously, using the spells known and spells per day from the <Link to="/class/bloodrager">bloodrager</Link> progression table.</Pair>
<Pair title="At 7th Level">She she gains <Link to="/spell/slipstream">slipstream</Link> as a bonus 1st-level spell known.</Pair>
<Pair title="At 10th Level">She gains <Link to="/spell/ride_the_waves">ride the waves</Link> as a bonus 2nd-level spell known</Pair>
<Pair title="At 13th Level">She gains <Link to="/spell/fluid_form">fluid form</Link> as a bonus 3rd-level spell known</Pair>
<Pair title="At 16th Level">She gains <Link to="/spell/seamantle">seamantle</Link> as a bonus 4th-level spell known.</Pair>
<Pair title="Special">She also adds <Link to="/spell/hydraulic_push">hydraulic push</Link> and <Link to="/spell/hydraulic_torrent">hydraulic torrent</Link> (as a 1st and 3rd level spells, respectively) to her paladin spell list (but must learn these spells as normal).</Pair>
</Ability>
<Ability id="arc-paladin-pearl_seeker-divine-hippocampus" icon={["info"]}>
<Pair single id="arc-paladin-pearl_seeker-divine-hippocampus">Divine Hippocampus</Pair>
<Pair hl title="Replaces">Channel positive energy</Pair>
<Pair hl title="Alters">Divine bond</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Info"><p>A pearl seeker must choose a mount as her <em>divine bond,</em> gaining a hippocampus mount with the following companion statistics. (These statistics are equal to the regular <Link to="/companion/hippocampus">hippocampus</Link> companion with the 7th-level <em>Monstrous Mount Mastery</em> benefits.)</p>
<blockquote>
<p><strong>Size</strong> Large<br/><strong>Speed</strong> 5 ft., swim 80 ft.<br/><strong>AC</strong> +4 natural armor<br/><strong>Attack</strong> bite (1d6), tail slap (1d4; secondary attack)<br/><strong>Ability Scores</strong> Str 18, Dex 13, Con 15, Int 2, Wis 12, Cha 11<br/><strong>Special Qualities</strong> darkvision 60 ft., low-light vision, <Link to="/umr/scent">scent</Link>, <Link to="/umr/water_dependency">water dependency</Link></p>
</blockquote>
</Pair>
</Ability>
</>};
const _redeemer = {title: "Redeemer", jsx: <><h2 id="arc-paladin-redeemer-redeemer">Redeemer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 55</Link><br/>As most half-orcs are outcasts, a half-orc paladin recognizes that often those who are monstrous are not necessarily evil and that sometimes even those who are evil became that way because of circumstances and misfortune. Some half-orc paladins take up these misunderstood creatures as their cause, standing up for the monstrous creatures and, when possible, leading them to the light. These paladins are called redeemers. A redeemer has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-paladin-redeemer--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/half_orc">Half-orc</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-paladin-redeemer-merciful-smite-su" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-redeemer-merciful-smite-su">Merciful Smite (Su)</Pair>
<Pair hl title="Replaces">Smite evil</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">When a redeemer chooses to smite a creature, she can have all of her attacks against the target deal nonlethal damage. She does not take the normal -4 attack roll penalty for using a lethal weapon to deal nonlethal damage. She cannot use this ability to deal nonlethal damage to outsiders with the evil subtype, evil-aligned dragons, or undead creatures (these creatures take lethal damage from her smite). This otherwise works like the standard paladin's <em>smite evil.</em></Pair>
</Ability>
<Ability id="arc-paladin-redeemer-monstrous-rapport-ex" icon={["upgrade"]}>
<Pair single id="arc-paladin-redeemer-monstrous-rapport-ex">Monstrous Rapport (Ex)</Pair>
<Pair hl title="Replaces">Detect evil</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Redeemers gain a +2 bonus on Diplomacy checks to influence creatures who are commonly considered monstrous. This includes but is not limited to "monstrous" races such as goblins and orcs, <Link to="/type/monstrous_humanoid">monstrous humanoids</Link>, and other intelligent non-humanoid monsters.</Pair>
</Ability>
<Ability id="arc-paladin-redeemer-pact-of-peace-sp" icon={["magic-swirl"]}>
<Pair single id="arc-paladin-redeemer-pact-of-peace-sp">Pact of Peace (Sp)</Pair>
<Pair hl title="Replaces">Aura of resolve</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A redeemer can force a defeated creature to accept a binding pact of peace as a condition of its surrender, as if using <Link to="/spell/lesser_geas">lesser geas</Link>. Her caster level for this ability is equal to her paladin level. Rather than assigning a mission or task, the redeemer gives the creature a simple set of prohibitions to protect others. Example geas include "Leave this city and do not return" or "Do not attack caravans." The prohibition must be against an area no larger than 300 square miles or one specific group of people (such as a tribe or citizens of a particular city). This ability lasts 1 month per paladin level.</Pair>
</Ability>
<Ability id="arc-paladin-redeemer-aura-of-mercy-su" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-redeemer-aura-of-mercy-su">Aura of Mercy (Su)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Free Action">A redeemer can expend two uses of her <em>merciful smite</em> ability to grant the <em>merciful smite</em> ability to all allies within 10 feet, using her bonuses. Allies must use this <em>merciful smite</em> ability by the start of the paladin's next turn and the bonuses last for 1 minute. Evil creatures gain no benefit from this ability.</Pair>
</Ability>
<Ability id="arc-paladin-redeemer-associates" icon={["info"]}>
<Pair single id="arc-paladin-redeemer-associates">Associates</Pair>
<Pair title="Info">A redeemer may ally with an evil creature as long as she feels the creature is capable of redemption. A redeemer may accept <Link to="/feat/leadership">henchmen, followers, or cohorts</Link> who are not lawful good provided they demonstrate they are willing to follow her and seek betterment under her tutelage.</Pair>
</Ability>
</>};
const _sacred_servant = {title: "Sacred Servant", jsx: <><h2 id="arc-paladin-sacred_servant-sacred-servant">Sacred Servant</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 117</Link><br/>Paladins as a general rule, venerate the gods of good and purity, but some take this a step further, dedicating themselves to a specific deity and furthering the cause of the faith. These sacred servants are rewarded for their devotion with additional spells and powerful allies. A sacred servant must select one deity to worship. This deity's alignment must be lawful good, lawful neutral, or neutral good. A sacred servant has the following class features.</p>
<Ability id="arc-paladin-sacred_servant-smite-evil-su" icon={["broken-shield"]}>
<Pair single id="arc-paladin-sacred_servant-smite-evil-su">Smite Evil (Su)</Pair>
<Pair hl title="Replaces">Smite evil</Pair>
<Pair title="Info">This functions as the paladin ability, but the sacred servant has fewer uses of <em>smite evil</em> per day.</Pair>
<Pair title="Usage">1 time/day + 1 per six paladin levels beyond 1st<ByLevelPop levels={[[1,1],[7,2],[13,3],[19,4]]} unit="time" postText="/day" /></Pair>
</Ability>
<Ability id="arc-paladin-sacred_servant-spells" icon={["spell-book","magic-swirl"]}>
<Pair single id="arc-paladin-sacred_servant-spells">Spells</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">When a sacred servant gains the ability to cast spells, she also chooses one <Link to="/ability/domains">domain</Link> associated with her deity. Her effective <Link to="/class/cleric">cleric</Link> level for this domain is equal to her paladin level - 3. In addition, she also gains one domain spell slot for each level of paladin spells she can cast. Every day she must prepare the domain spell from her chosen domain in that spell slot.</Pair>
</Ability>
<Ability id="arc-paladin-sacred_servant-divine-bond-su" icon={["upgrade","hazard-sign"]}>
<Pair single id="arc-paladin-sacred_servant-divine-bond-su" flavor={<>Instead of forming a <em>divine bond</em> with her weapon or a mount, a sacred servant forms a bond with her holy symbol.</>}>Divine Bond (Su)</Pair>
<Pair hl title="Alters">Divine bond</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Standard Action"><p>Once a day, a sacred servant can bind a celestial spirit to her holy symbol for 1 minute per paladin level. When called, the spirit causes the sacred servant's holy symbol to shed light like a <Link to="/eq-misc/torch">torch</Link>.</p>
<p>Starting out, the spirit grants one bonus. As the sacred servant gains levels, the spirit grants more bonuses. These bonuses can be spent in a number of ways to grant the paladin enhanced abilities to channel positive energy and to cast spells.</p>
<p>Each bonus can be used to grant one of the following enhancements:</p>
<ul>
<li>+1 caster level to any paladin spell cast</li>
<li>+1 to the DC to halve the damage of channel positive energy when used to harm undead</li>
<li>+1d6 to channel positive energy</li>
<li>+1 use/day of <em>lay on hands</em></li>
</ul>
<p>These enhancements stack and can be selected multiple times. The enhancements granted by the spirit are determined when the spirit is called and cannot be changed until the spirit is called again.</p>
<p>If the sacred servant increases her number of uses of <em>lay on hands</em> per day in this way, that choice is set for the rest of the day, and once used, these additional uses are not restored (even if the spirit is called again that day).</p>
</Pair>
<Pair title="At 8th Level">The spirit grants 2 bonuses.</Pair>
<Pair title="At 9th Level">A sacred servant can use this ability 2 times a day.</Pair>
<Pair title="At 11th Level">The spirit grants 3 bonuses.</Pair>
<Pair title="At 13th Level">A sacred servant can use this ability 3 times a day.</Pair>
<Pair title="At 14th Level">The spirit grants 4 bonuses.</Pair>
<Pair title="At 17th Level">A sacred servant can use this ability 4 times a day. The spirit grants 5 bonuses.</Pair>
<Pair title="At 20th Level">The spirit grants 6 bonuses.</Pair>
<Pair title="Special"><p>The celestial spirit imparts no enhancements if the holy symbol is held by anyone other than the sacred servant, but resumes giving enhancements if returned to the sacred servant.</p>
<p>If a holy symbol with a celestial spirit is destroyed, the sacred servant loses the use of this ability for 30 days, or until she gains a level, whichever comes first. During this 30-day period, the sacred servant takes a -1 penalty on attack and weapon damage rolls.</p>
</Pair>
</Ability>
<Ability id="arc-paladin-sacred_servant-call-celestial-ally-sp" icon={["magic-swirl"]}>
<Pair single id="arc-paladin-sacred_servant-call-celestial-ally-sp">Call Celestial Ally (Sp)</Pair>
<Pair hl title="Replaces">Aura of resolve</Pair>
<Pair title="At 8th Level">A sacred servant can call upon her deity for aid, in the form of a powerful servant. This allows the sacred servant to cast <Link to="/spell/lesser_planar_ally">lesser planar ally</Link> once per week as a spell-like ability without having to pay the material component cost or the servant (for reasonable tasks).</Pair>
<Pair title="At 12th Level">This improves to <Link to="/spell/planar_ally">planar ally</Link>.</Pair>
<Pair title="At 16th Level">This improves to <Link to="/spell/greater_planar_ally">greater planar ally</Link>.</Pair>
<Pair title="Special">The sacred servant's caster level for this effect is equal to her paladin level.</Pair>
</Ability>
</>};
const _sacred_shield = {title: "Sacred Shield", jsx: <><h2 id="arc-paladin-sacred_shield-sacred-shield">Sacred Shield</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 65</Link><br/>When faced by evil, the sacred shield reaches first not for a weapon, but for her trusty shield. With her faith, she can ward others from harm.</p>
<Ability id="arc-paladin-sacred_shield-bastion-of-good-su" icon={["shield-reflect","armor-upgrade"]}>
<Pair single id="arc-paladin-sacred_shield-bastion-of-good-su">Bastion of Good (Su)</Pair>
<Pair hl title="Replaces">Smite evil</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A sacred shield can call upon the powers of good to defend her and her allies against evil. This ability functions as <em>smite evil,</em> except that the paladin gains no benefit on attack or damage rolls against her target. Instead, any attacks the target makes against allies within 10 feet of the paladin deal half damage. Attacks against the paladin deal full damage, but the paladin gains a deflection bonus to her AC against attacks made by the target of the smite. This bonus is equal to her Charisma bonus (if any) + <Link to="/misc/one_fourth">one-fourth</Link> of her paladin level.</Pair>
<Pair title="Special">As with <em>smite evil,</em> if the paladin targets a creature that is not evil, her <em>bastion of good</em> ability is wasted with no effect. Feats, abilities, and the like that increase a paladin's number of uses of <em>smite evil</em> per day increase a sacred shield's uses of <em>bastion of good</em> per day.</Pair>
</Ability>
<Ability id="arc-paladin-sacred_shield-holy-shield-su" icon={["shield-reflect"]}>
<Pair single id="arc-paladin-sacred_shield-holy-shield-su">Holy Shield (Su)</Pair>
<Pair hl title="Replaces">Channel positive energy</Pair>
<Pair title="At 4th Level">A sacred shield can channel her faith into her shield, protecting any nearby allies. All allies adjacent to the paladin gain a shield bonus equal to the sacred shield's own shield bonus, including any increase from the shield's enhancement bonus. This bonus does not stack with any existing shield bonuses. The paladin herself radiates light as a <Link to="/spell/light">light</Link> spell while the shielding is active.</Pair>
<Pair title="At 11th Level">This protection expands to cover any allies within 10 feet and the radiance increases to the effects of a <Link to="/spell/daylight">daylight</Link> spell.</Pair>
<Pair title="At 20th Level">Any allies within 20 feet are protected.</Pair>
<Pair title="Special">Using this ability consumes two uses of the sacred shield's <em>lay on hands</em> ability, and the effects last for 3 rounds plus a number of rounds equal to her Charisma bonus (if any).</Pair>
</Ability>
<Ability id="arc-paladin-sacred_shield-divine-bond-su" icon={["armor-upgrade","hazard-sign"]}>
<Pair single id="arc-paladin-sacred_shield-divine-bond-su" flavor={<>Instead of forming a <em>divine bond</em> with her weapon or a mount, a sacred shield forms a bond with her shield.</>}>Divine Bond (Su)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">1 time/day + 1 per four paladin levels beyond 5th<ByLevelPop levels={[[5,1],[9,2],[13,3],[17,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Standard Action">A sacred shield can enhance her shield by calling on the aid of a celestial spirit. This bond lasts for 1 minute per paladin level. When called, the spirit causes the shield to shed light like a <Link to="/eq-misc/torch">torch</Link>. The spirit grants the shield a +1 enhancement bonus.</Pair>
<Pair title="Info">If a shield with a celestial spirit is destroyed, the sacred shield loses the use of this ability for 30 days, or until she gains a level, whichever comes first. During this period, the sacred shield takes a -1 penalty to her armor class and on saving throws.</Pair>
<Pair title="At 8th Level">The shield's bonus becomes +2.</Pair>
<Pair title="At 11th Level">The shield's bonus increases to +3.</Pair>
<Pair title="At 14th Level">The shield's bonus becomes +4.</Pair>
<Pair title="At 17th Level">The shield's bonus increases to +5.</Pair>
<Pair title="At 20th Level">The shield's bonus becomes +6.</Pair>
<Pair title="Special"><p>These bonuses can be added to the shield, stacking with existing enhancement bonuses to a maximum of +5, or they can be used to add any of the following armor special abilities: <Link to="/magic-enh/arrow_deflection">arrow deflection</Link>, <Link to="/magic-enh/bashing">bashing</Link>, <Link to="/magic-enh/blinding">blinding</Link>, <Link to="/magic-enh/fortification">fortification</Link> (any), <Link to="/magic-enh/reflecting">reflecting</Link>, and <Link to="/magic-enh/spell_resistance">spell resistance</Link> (any). The <em>reflecting</em> enhancement may be used once each time the sacred shield makes use of her <em>divine bond.</em></p>
<p>Adding these armor special abilities consumes an amount of bonus equal to the property's cost. These bonuses are added to any properties the shield already has, but duplicate special abilities do not grant any extra benefit. If the shield is not magical, at least a +1 enhancement bonus must be added before any other special abilities can be added.</p>
<p>The bonus and special abilities granted by the spirit are determined when the spirit is called and cannot be changed until the spirit is called again. The celestial spirit imparts no bonuses if the shield is used by anyone other than the sacred shield, but it resumes giving bonuses if the sacred shield resumes using the shield.</p>
</Pair>
</Ability>
<Ability id="arc-paladin-sacred_shield-improved-bastion" icon={["abstract-091"]}>
<Pair single id="arc-paladin-sacred_shield-improved-bastion">Improved Bastion</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">The radius of a sacred shield's <em>bastion of good</em> ability increases to 20 feet.</Pair>
</Ability>
<Ability id="arc-paladin-sacred_shield-perfect-bastion" icon={["heart-plus"]}>
<Pair single id="arc-paladin-sacred_shield-perfect-bastion">Perfect Bastion</Pair>
<Pair hl title="Replaces">Holy champion</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">A sacred shield and her allies within 20 feet gain <Link to="/umr/regeneration">regeneration</Link> 10 against the target of her <em>bastion of good</em> ability (essentially regeneration that is overcome by any damage not caused by the target).</Pair>
</Ability>
</>};
const _scion_of_talmandor = {title: "Scion of Talmandor", jsx: <><h2 id="arc-paladin-scion_of_talmandor-scion-of-talmandor">Scion of Talmandor</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 74</Link><br/>While all Steel Falcons are peerless proponents of the rights of the downtrodden, those who endeavor to make the spread of liberty as peaceful as possible often become scions of Talmandor, honoring the powerful avoral agathion who serves as the patron of the Steel Falcons. Talmandor is reluctant to act directly on behalf of the <Link to="/rule/eagle_knights">Eagle Knights</Link> and even more unwilling to accept their worship, preferring to lend assistance primarily by being a voice of reason and dispensing wise counsel when it is most needed. A scion of Talmandor attempts to exemplify this selfless altruism, offering assistance to the oppressed and facilitating the peaceful transfer of power from the few to the many.</p>
<p>Scions of Talmandor look to the brutality of the revolution in Galt, Andoran's neighbor, as a cautionary tale and an unfortunate blemish on populism's short history. They also reject the Nirmathi notion of freedom, thinking it too individualistic; instead, they strive to build strong communities both at home and abroad. Wherever possible, a scion of Talmandor opts for peaceful, grassroots solutions to problems facing the many oppressed peoples of the Inner Sea region, encouraging them to take a central role in bettering their lot in life.</p>
<Ability icon={["skills"]} id="arc-paladin-scion_of_talmandor-undefined">
<Pair id="arc-paladin-scion_of_talmandor-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/fly">Fly</Link> (DEX)</Pair>
<Pair title="Removed Skills">Ride</Pair></Ability>
<Ability id="arc-paladin-scion_of_talmandor-scions-faith-ex" icon={["info"]}>
<Pair single id="arc-paladin-scion_of_talmandor-scions-faith-ex">Scion's Faith (Ex)</Pair>
<Pair title="Info">A scion of Talmandor must worship a lawful good deity.</Pair>
</Ability>
<Ability id="arc-paladin-scion_of_talmandor-egalitarian-su" icon={["broken-shield","shield-reflect"]}>
<Pair single id="arc-paladin-scion_of_talmandor-egalitarian-su">Egalitarian (Su)</Pair>
<Pair hl title="Alters">Divine grace</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Swift Action">Once per day, a scion of Talmandor can halve her bonus on saving throws from <em>divine grace</em> (minimum +1) to grant the resulting bonus to herself and to all allies within 30 feet. This shared bonus lasts for a number of rounds equal to the scion's Charisma modifier, after which her <em>divine grace</em> is suppressed for 1 hour before returning to normal.</Pair>
</Ability>
<Ability id="arc-paladin-scion_of_talmandor-bonded-eagle-sp" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-scion_of_talmandor-bonded-eagle-sp">Bonded Eagle (Sp)</Pair>
<Pair hl title="Replaces">Divine bond</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A scion of Talmandor forms a bond with an <Link to="/companion/eagle">eagle</Link> using the statistics for a bird <Link to="/sidekick/animal_companion">animal companion</Link>. The eagle is a loyal companion that accompanies the scion on her adventures.</Pair>
<Pair title="Ability">When the scion activates <em>smite evil,</em> she can expend an additional use of <em>smite evil</em> to grant her eagle the bonuses granted from <em>smite evil</em> as well.</Pair>
<Pair title="Special">This ability functions like the druid <Link to="/ability/animal_companion">animal companion</Link> ability, using the scion's paladin level as her effective druid level.</Pair>
</Ability>
<Ability id="arc-paladin-scion_of_talmandor-consensus-ex" icon={["shield-reflect"]}>
<Pair single id="arc-paladin-scion_of_talmandor-consensus-ex">Consensus (Ex)</Pair>
<Pair hl title="Replaces">Aura of resolve</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Swift Action">Twice per day, during the first full round of combat, a scion of Talmandor can take a vote from a number of allies equal to or less than 3 + the scion's Charisma modifier, all of whom must be within 30 feet of the scion of Talmandor. In initiative order, each ally can vote for Freedom, Justice, or Responsibility. Allies who vote receive a +2 sacred bonus either on attack rolls (if Justice wins), on saving throws (if Freedom wins), or to Armor Class (if Responsibility wins) until the end of combat. The scion of Talmandor votes last, and in the case of a tie, her vote breaks the tie.</Pair>
</Ability>
<Ability id="arc-paladin-scion_of_talmandor-talmandors-gift-sp" icon={["magic-swirl"]}>
<Pair single id="arc-paladin-scion_of_talmandor-talmandors-gift-sp">Talmandor's Gift (Sp)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A scion of Talmandor can summon an <Link to="/monster/avoral">avoral agathion</Link> as if via <Link to="/spell/summon_monster_vii">summon monster VII</Link> (caster level equals the scion's character level).</Pair>
</Ability>
</>};
const _shining_knight = {title: "Shining Knight", jsx: <><h2 id="arc-paladin-shining_knight-shining-knight">Shining Knight</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 117</Link><br/>While paladins often are seen mounted atop a loyal steed, the shining knight is the true symbol of mounted bravery. They are never far from their steeds and are always clad in brightly polished armor. The shining knight has the following class features.</p>
<Ability id="arc-paladin-shining_knight-skilled-rider-ex-and-su" icon={["upgrade"]}>
<Pair single id="arc-paladin-shining_knight-skilled-rider-ex-and-su">Skilled Rider (Ex and Su)</Pair>
<Pair hl title="Replaces">Divine health</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A shining knight does not take any penalty to her Ride skill due to her armor check penalty. In addition, any mount she is riding gains the benefit of her <em>divine grace</em> class feature, adding her Charisma bonus (if any) to its saving throws.</Pair>
</Ability>
<Ability id="arc-paladin-shining_knight-divine-bond-su" icon={["info"]}>
<Pair single id="arc-paladin-shining_knight-divine-bond-su">Divine Bond (Su)</Pair>
<Pair hl title="Alters">Divine bond</Pair>
<Pair title="At 5th Level">A shining knight must form a bond with a mount. This ability otherwise functions as the paladin ability.</Pair>
</Ability>
<Ability id="arc-paladin-shining_knight-knights-charge-su" icon={["armor-upgrade","shield-reflect","armor-downgrade"]}>
<Pair single id="arc-paladin-shining_knight-knights-charge-su">Knight's Charge (Su)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">Whenever a mounted shining knight charges a foe, her movement does not provoke attacks of opportunity, for either her or her mount.</Pair>
<Pair title="Ability">If her target is also the target of her <em>smite evil</em> ability and the charge attack hits, the target must make a Will save or be <Link to="/misc/panicked">panicked</Link> for a number of rounds equal to 1/2 the shining knight's level. The DC of this save is equal to 10 + 1/2 the shining knight's level + the shining knight's Charisma modifier.</Pair>
</Ability>
</>};
const _silver_champion = {title: "Silver Champion", jsx: <><h2 id="arc-paladin-silver_champion-silver-champion">Silver Champion</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 25</Link><br/>Paladins who serve as priests of Apsu are almost always on the move, wandering from place to place and trying to show their dedication to the Waybringer in their deeds rather than depending on mere words. Good-aligned dragons are more likely to treat such paladins as they would treat other dragons (though perhaps not with the respect reserved for other true dragons), and evil dragons often target them as special threats.</p>
<p>More rarely a drake is so inspired by a paladin of Apsu that it chooses to assist the paladin in all her actions. These drake allies see the benefit of a silver champion remaining mobile and understand the powerful threats the champion must face, and in time even consent to serve their chosen paladins as a steed. Silver champions are often concerned by their drake allies' pragmatic natures, however, and are sure to treat them with respect, knowing that these lesser dragons must constantly be inspired to act on their better natures.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-paladin-silver_champion--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>A silver champion must worship <Link to="/faith/apsu">Apsu</Link>.</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-paladin-silver_champion-drake-mount" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-silver_champion-drake-mount">Drake Mount</Pair>
<Pair hl title="Replaces">Divine bond, channel energy, aura of justice, aura of righteousness</Pair>
<Pair hl title="Alters">Smite evil, mercy</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A silver champion gains a <Link to="/sidekick/drake">drake companion</Link>.</Pair>
<Pair title="Special">If the drake companion is at least one size larger than the silver champion, it gains the <em>mount</em> drake power as a bonus power. However, a silver champion doesn't gain additional uses per day of <em>smite evil</em> at 4th, 10th, and 16th levels, and doesn't gain mercies at 6th, 12th, and 18th levels.</Pair>
</Ability>
<Ability id="arc-paladin-silver_champion-dragon-magic" extraClasses="hasSubs" icon={["spell-book","broken-shield"]}>
<Pair single id="arc-paladin-silver_champion-dragon-magic">Dragon Magic</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Info">The silver champion does not have access to the normal paladin spell list. She instead adds the 1st- through 4th-level spells from the domains granted by Apsu (<Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/scalykind">Scalykind</Link>, <Link to="/domain/travel">Travel</Link>) and the god's associated subdomains (Archon, Construct, Dragon, Exploration, Toil, and Trade) to her class spell list. (The list of spells is included below.) A silver champion casts one fewer spell of each level than normal. If this reduces the number to less than 0, she can't cast spells of that level.</Pair>
<Pair plain title="1st"><Link to="/spell/animate_rope">Animate rope</Link>, <Link to="/spell/command">command</Link>, <Link to="/spell/divine_favor">divine favor</Link>, <Link to="/spell/expeditious_retreat">expeditious retreat</Link>, <Link to="/spell/floating_disk">floating disk</Link>, <Link to="/spell/longstrider">longstrider</Link>, <Link to="/spell/magic_fang">magic fang</Link>, <Link to="/spell/protection_from_chaos">protection from chaos</Link>, <Link to="/spell/protection_from_evil">protection from evil</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/align_weapon">Align weapon</Link> (good or law only), <Link to="/spell/animal_trance">animal trance</Link>, <Link to="/spell/locate_object">locate object</Link>, <Link to="/spell/wood_shape">wood shape</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/draconic_reservoir">Draconic reservoir</Link>, <Link to="/spell/fly">fly</Link>, <Link to="/spell/greater_magic_fang">greater magic fang</Link>, <Link to="/spell/magic_circle_against_chaos">magic circle against chaos</Link>, <Link to="/spell/magic_circle_against_evil">magic circle against evil</Link>, <Link to="/spell/prayer">prayer</Link>, <Link to="/spell/stone_shape">stone shape</Link></Pair>
<Pair plain title="4th"><Link to="/spell/dimension_door">Dimension door</Link>, <Link to="/spell/dragons_breath">dragon's breath</Link>, <Link to="/spell/holy_smite">holy smite</Link>, <Link to="/spell/minor_creation">minor creation</Link>, <Link to="/spell/orders_wrath">order's wrath</Link>, <Link to="/spell/poison">poison</Link></Pair>
</Ability>
</>};
const _soul_sentinel = {title: "Soul Sentinel", jsx: <><h2 id="arc-paladin-soul_sentinel-soul-sentinel">Soul Sentinel</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 65</Link><br/>In a world of horrors, some holy warriors fight to safeguard the minds and spirits of those exposed to evil. Soul sentinels use the strength of their resolve to stem the tide of corruption and insanity, as they believe that the greatest tragedy is a soul lost to evil when it was within their power to save it.</p>
<Ability id="arc-paladin-soul_sentinel-reprieve-su" icon={["heart-plus"]}>
<Pair single id="arc-paladin-soul_sentinel-reprieve-su" flavor="A soul sentinel relieves manic and tortured souls exposed to the harsh evil of the world.">Reprieve (Su)</Pair>
<Pair hl title="Replaces">6th-level mercy</Pair>
<Pair title="At 6th Level">When the soul sentinel uses her <em>lay on hands</em> ability to heal a living creature, she can remove <Link to="/misc/confused">confusion</Link> effects in place of applying one of her other mercies. If used on a creature suffering from a permanent confusion effect, this removes the effect for only 1 minute.</Pair>
</Ability>
<Ability id="arc-paladin-soul_sentinel-sacred-soul-su" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="arc-paladin-soul_sentinel-sacred-soul-su">Sacred Soul (Su)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">A sacred soul is immune to hexes and curse spells or abilities. Each ally within 10 feet of her gains a +4 morale bonus on saving throws against hexes or curses.</Pair>
<Pair title="Special">This ability functions only while the paladin is conscious, not if she is unconscious or dead.</Pair>
</Ability>
<Ability id="arc-paladin-soul_sentinel-greater-reprieve-su" icon={["heart-plus"]}>
<Pair single id="arc-paladin-soul_sentinel-greater-reprieve-su" flavor="The soul sentinel suppresses the stain of corruption on the spirits of those she heals.">Greater Reprieve (Su)</Pair>
<Pair hl title="Replaces">12th-level mercy</Pair>
<Pair title="At 12th Level">At 12th level, whenever she uses her <em>lay on hands</em> ability to heal a living creature (other than herself) or damage an undead creature, in place of applying one of her other mercies, she can suppress the stain from a <Link to="/rule/corruption">corrupted</Link> creature's most recent manifestation for 1 minute. Any gift from that manifestation is unaffected and remains available, unless the manifestation has a special note requiring the gift and stain be taken together, in which case greater reprieve also suppresses the gift.</Pair>
</Ability>
</>};
const _stonelord = {title: "Stonelord", jsx: <><h2 id="arc-paladin-stonelord-stonelord">Stonelord</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 16</Link><br/>A stonelord is a devoted sentinel of dwarven enclaves, drawing the power of the earth and ancient stone to protect her people.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-paladin-stonelord--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/dwarf">Dwarf</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-paladin-stonelord-stonestrike-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-paladin-stonelord-stonestrike-su" flavor="A stonelord can draw upon the power of the living rock.">Stonestrike (Su)</Pair>
<Pair hl title="Replaces">Smite evil</Pair>
<Pair title="Usage">1 time/day per paladin level</Pair>
<Pair title="Swift Action">She treats her melee attacks until the beginning of her next turn (whether armed or unarmed) as magical and <Link to="/eq-material/adamantine">adamantine</Link>, including ignoring hardness up to twice her paladin level, with a bonus on attack and damage rolls, as well as on combat maneuver checks. This bonus is equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of her paladin level, and it also applies to her CMD if she or her target is touching the ground or a stone structure.</Pair>
</Ability>
<Ability id="arc-paladin-stonelord-heartstone-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-paladin-stonelord-heartstone-ex">Heartstone (Ex)</Pair>
<Pair hl title="Replaces">Divine grace</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A stonelord's flesh becomes progressively rockier. She gains a +1 natural armor bonus to AC and DR/adamantine equal to 1/2 her paladin level.</Pair>
<Pair title="At 6th Level">The natural armor bonus becomes +2.</Pair>
<Pair title="At 10th Level">The natural armor bonus increases to +3.</Pair>
<Pair title="At 14th Level">The natural armor bonus becomes +4.</Pair>
<Pair title="At 18th Level">The natural armor bonus increases to +5.</Pair>
<Pair title="Special">These benefits are halved when not touching the ground or a stone structure.</Pair>
</Ability>
<Ability id="arc-paladin-stonelord-stoneblood-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-paladin-stonelord-stoneblood-ex">Stoneblood (Ex)</Pair>
<Pair hl title="Replaces">Divine health, 3rd-, 9th-, and 15th-level mercies</Pair>
<Pair title="At 3rd Level">A stonelord's vitals begin to calcify and her blood transforms into liquid stone. She adds her paladin level on checks to stabilize at negative hit points and gains a 25% chance to ignore a critical hit or <Link to="/misc/precision_damage">precision damage</Link>. This does not stack with <Link to="/magic-enh/fortification">fortification</Link> armor or similar effects.</Pair>
<Pair title="At 9th Level">This chance increases to 50% and she becomes immune to petrification.</Pair>
<Pair title="At 15th Level">This chance increases to 75% and she becomes immune to <Link to="/rule/bleed">bleed</Link> and <Link to="/umr/blood_drain">blood drain</Link> effects.</Pair>
</Ability>
<Ability id="arc-paladin-stonelord-defensive-stance-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-paladin-stonelord-defensive-stance-ex">Defensive Stance (Ex)</Pair>
<Pair hl title="Replaces">Spells</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A stonelord gains the <em>defensive stance</em> ability, as a <Link to="/pclass/stalwart_defender">stalwart defender</Link>. Levels of stalwart defender stack with her paladin levels when determining the total number of rounds that she can maintain her <em>defensive stance</em> per day.</Pair>
<Pair title="At 8th Level">The stonelord may select a <em>defensive power.</em></Pair>
<Pair title="At 12th Level">The stonelord may select a <em>defensive power.</em></Pair>
<Pair title="At 16th Level">The stonelord may select a <em>defensive power.</em></Pair>
<Pair title="At 20th Level">The stonelord may select a <em>defensive power.</em></Pair>
<Pair title="Special">A stonelord does not gain any spells or spellcasting abilities, does not have a caster level, and cannot use spell trigger or spell completion magic items.</Pair>
</Ability>
<Ability id="arc-paladin-stonelord-earth-channel-su" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-stonelord-earth-channel-su">Earth Channel (Su)</Pair>
<Pair hl title="Replaces">Channel positive energy</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A stonelord gains <Link to="/feat/elemental_channel">Elemental Channel</Link> (earth) as a bonus feat, which she may activate by spending two uses of her <em>lay on hands</em> ability, using her paladin level as her effective cleric level.</Pair>
</Ability>
<Ability id="arc-paladin-stonelord-stone-servant-su" icon={["magic-swirl"]}>
<Pair single id="arc-paladin-stonelord-stone-servant-su">Stone Servant (Su)</Pair>
<Pair hl title="Replaces">Divine bond</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A stonelord may call a <Link to="/monster/small_earth_elemental">Small earth elemental</Link> to her side, as a paladin calls her mount. This earth elemental is Lawful Good in alignment and possesses the <Link to="/template/celestial">celestial</Link> template.</Pair>
<Pair title="At 8th Level">She now summons a <Link to="/monster/medium_earth_elemental">Medium earth elemental</Link>.</Pair>
<Pair title="At 11th Level">She now summons a <Link to="/monster/large_earth_elemental">Large earth elemental</Link>.</Pair>
<Pair title="At 14th Level">She now summons a <Link to="/monster/huge_earth_elemental">Huge earth elemental</Link>.</Pair>
<Pair title="At 17th Level">She now summons a <Link to="/monster/greater_earth_elemental">Greater earth elemental</Link>.</Pair>
<Pair title="At 20th Level">She now summons an <Link to="/monster/elder_earth_elemental">Elder earth elemental</Link>.</Pair>
</Ability>
<Ability id="arc-paladin-stonelord-stonebane-su" icon={["upgrade"]}>
<Pair single id="arc-paladin-stonelord-stonebane-su">Stonebane (Su)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">When using <em>stonestrike,</em> a stonelord's attack gains the <Link to="/magic-enh/bane">bane</Link> weapon special ability against creatures with the earth subtype and constructs or objects made of earth or stone.</Pair>
</Ability>
<Ability id="arc-paladin-stonelord-phase-strike-su" icon={["armor-downgrade"]}>
<Pair single id="arc-paladin-stonelord-phase-strike-su" flavor={<>A stonelord's <em>stonestrike</em> may pass through stone and metal as if they weren't there.</>}>Phase Strike (Su)</Pair>
<Pair hl title="Replaces">12th-level mercy</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">By spending 2 uses of her <em>stonestrike</em> ability, she may ignore any cover less than total cover provided by stone or metal, and she ignores any AC bonus from stone or metal armor or shields as if wielding a <Link to="/magic-enh/brilliant_energy">brilliant energy</Link> weapon.</Pair>
<Pair title="Special">A <em>phase strike</em> cannot damage constructs, objects, or creatures with the earth subtype, but unlike a <em>brilliant energy</em> weapon, it can harm undead.</Pair>
</Ability>
<Ability id="arc-paladin-stonelord-mobile-defense-ex" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-stonelord-mobile-defense-ex">Mobile Defense (Ex)</Pair>
<Pair hl title="Replaces">18th-level mercy</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Ability">A stonelord can make one 5-foot step per round while maintaining her <em>defensive stance.</em></Pair>
</Ability>
<Ability id="arc-paladin-stonelord-stone-body-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-paladin-stonelord-stone-body-ex">Stone Body (Ex)</Pair>
<Pair hl title="Replaces">Holy champion</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Info">A stonelord's body transforms into living stone. She no longer needs to eat, drink, breathe, or sleep, and she becomes immune to paralysis, poison, and stunning. She is also no longer subject to critical hits or precision-based damage.</Pair>
</Ability>
</>};
const _sword_of_valor = {title: "Sword of Valor", jsx: <><h2 id="arc-paladin-sword_of_valor-sword-of-valor">Sword of Valor</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_magic">Inner Sea Magic pg. 39</Link><br/>The goddess Iomedae was once a mortal paladin, and those holy champions who follow her path seek to uphold her specific code of conduct in the hopes of honoring her name and destroying evil. Valor, justice, and honor are their lifeblood, and they would sooner cut out their own hearts than betray their comrades and faith. A sword of valor has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-paladin-sword_of_valor--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Must have <Link to="/faith/iomedae">Iomedae</Link> as a patron deity</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-paladin-sword_of_valor-first-into-battle-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-paladin-sword_of_valor-first-into-battle-su">First Into Battle (Su)</Pair>
<Pair hl title="Replaces">Divine grace</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A sword of valor can spend 1 use of <em>smite evil</em> or <em>lay on hands</em> to act in the surprise round, even if she is surprised. When the paladin makes an Initiative check, she gains a bonus to the check equal to her Charisma bonus.</Pair>
</Ability>
<Ability id="arc-paladin-sword_of_valor-prayer-of-the-fourth-act-su" icon={["heart-plus"]}>
<Pair single id="arc-paladin-sword_of_valor-prayer-of-the-fourth-act-su">Prayer of the Fourth Act (Su)</Pair>
<Pair hl title="Replaces">6th-level mercy</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">By spending 1 minute leading a prayer to Iomedae, the sword of valor can spend one use of <em>channel energy</em> to give living creatures in the channel burst <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to the amount that ability normally heals. These temporary hit points last for no more than 1 hour.</Pair>
</Ability>
<Ability id="arc-paladin-sword_of_valor-worthy-enemy-su" icon={["armor-downgrade"]}>
<Pair single id="arc-paladin-sword_of_valor-worthy-enemy-su">Worthy Enemy (Su)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">When a sword of valor critically hits an enemy with a <em>smite,</em> the target must make a Will saving throw (DC = 10 + 1/2 the paladin's level + the paladin's Charisma bonus) or be compelled to surrender to the paladin, as if affected by a <Link to="/spell/suggestion">suggestion</Link> spell (CL = the paladin's level) to lay down arms and give up the fight. An enemy that succumbs to this ability remains docile until it is injured by the paladin or one of his obvious allies, at which point the compulsion to surrender immediately ends and the enemy is free to make his own choices again.</Pair>
<Pair title="Special">If the enemy makes the save, it is not subject to this ability for 24 hours. <em>Worthy enemy</em> is a mind-affecting effect.</Pair>
</Ability>
</>};
const _tempered_champion = {title: "Tempered Champion", jsx: <><h2 id="arc-paladin-tempered_champion-tempered-champion">Tempered Champion</h2>
<p><strong>Sources</strong> <Link to="/source/weapon_masters_handbook">Weapon Master's Handbook pg. 7</Link><br/>Tempered champions are trained in the Tempering Hall in Absalom to master their deities' favored weapons.</p>
<Ability id="arc-paladin-tempered_champion-divine-weapon-specialization-ex" extraClasses="hasSubs" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-paladin-tempered_champion-divine-weapon-specialization-ex">Divine Weapon Specialization (Ex)</Pair>
<Pair hl title="Replaces">Spellcasting</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A tempered champion gains a bonus feat from the following list: <Link to="/feat/disruptive">Disruptive</Link>, <Link to="/feat/divine_fighting_technique">Divine Fighting Technique</Link>, <Link to="/feat/greater_penetrating_strike">Greater Penetrating Strike</Link>, <Link to="/feat/greater_weapon_focus">Greater Weapon Focus</Link>, <Link to="/feat/greater_weapon_specialization">Greater Weapon Specialization</Link>, <Link to="/feat/penetrating_strike">Penetrating Strike</Link>, <Link to="/feat/weapon_focus">Weapon Focus</Link>, <Link to="/feat/weapon_specialization">Weapon Specialization</Link>, and <Link to="/feat/weapon_trick">Weapon Trick</Link>.</Pair>
<Pair title="Ability">In addition, the tempered champion gains the increased base weapon damage of the <Link to="/class/warpriest">warpriest's</Link> <em>sacred weapon</em> ability at her tempered champion level.</Pair>
<Pair title="At 8th Level">The tempered champion gains another bonus feat from the list above.</Pair>
<Pair title="At 12th Level">The tempered champion gains another bonus feat from the list above.</Pair>
<Pair title="At 16th Level">The tempered champion gains another bonus feat from the list above.</Pair>
<Pair title="At 20th Level">The tempered champion gains another bonus feat from the list above.</Pair>
<Pair title="Special">If a feat requires choosing a weapon or weapon group, the tempered champion must choose her deity's favored weapon, or its group. The tempered champion must meet the feat's prerequisites, but treats her tempered champion levels as fighter levels for this purpose.</Pair>
</Ability>
<Ability id="arc-paladin-tempered_champion-sacred-weapon-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-paladin-tempered_champion-sacred-weapon-su" flavor="Relevant text from the warpriest ability">Sacred Weapon (Su)</Pair>
<Pair title="Passive Ability"><p>Whenever you hit with your sacred weapon, the weapon damage is based on your size and level and not the weapon type. You can decide to use the weapon's base damage instead of the sacred weapon damage - this must be declared before the attack roll is made. (If the weapon's base damage exceeds the sacred weapon damage, its damage is unchanged.) This increase in damage does not affect any other aspect of the weapon, and doesn't apply to alchemical items, bombs, or other weapons that only deal energy damage.</p>
<ScrollContainer id="arc-paladin-tempered_champion--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Damage (Small)</th>
<th>Damage (Medium)</th>
<th>Damage (Large)</th>
</tr>
</thead>
<tbody><tr>
<td>1st-4th</td>
<td>1d4</td>
<td>1d6</td>
<td>1d8</td>
</tr>
<tr>
<td>5th-7th</td>
<td>1d6</td>
<td>1d8</td>
<td>2d6</td>
</tr>
<tr>
<td>8th-9th</td>
<td>1d6</td>
<td>1d8</td>
<td>2d6</td>
</tr>
<tr>
<td>10th-11th</td>
<td>1d8</td>
<td>1d10</td>
<td>2d8</td>
</tr>
<tr>
<td>10th-14th</td>
<td>1d8</td>
<td>1d10</td>
<td>2d8</td>
</tr>
<tr>
<td>15th-19th</td>
<td>1d10</td>
<td>2d6</td>
<td>3d6</td>
</tr>
<tr>
<td>15th-19th</td>
<td>1d10</td>
<td>2d6</td>
<td>3d6</td>
</tr>
<tr>
<td>20th</td>
<td>2d6</td>
<td>2d8</td>
<td>3d8</td>
</tr>
</tbody></table></ScrollContainer>
</Pair>
</Ability>
<Ability id="arc-paladin-tempered_champion-divine-bond-su" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-paladin-tempered_champion-divine-bond-su">Divine Bond (Su)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A tempered champion must select a weapon for her <em>divine bond.</em> If she is out of daily uses, she can expend a use of <em>lay on hands</em> to activate this ability.</Pair>
</Ability>
</>};
const _temple_champion = {title: "Temple Champion", jsx: <><h2 id="arc-paladin-temple_champion-temple-champion">Temple Champion</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 107</Link><br/>A temple champion is a powerful warrior dedicated to a good or lawful deity. She thinks of herself primarily as a servant of her deity and secondarily as an agent of her deity's church. She has a refined understanding of a specific aspect of that faith and gives up standard paladin spellcasting in favor of a warpriest's domain-based blessings and granted powers.</p>
<Ability id="arc-paladin-temple_champion-spells" icon={["broken-shield"]}>
<Pair single id="arc-paladin-temple_champion-spells">Spells</Pair>
<Pair title="Info">A temple champion does not gain access to paladin spells, and does not have a paladin caster level or spell list. This is not considered a spellcasting class.</Pair>
</Ability>
<Ability id="arc-paladin-temple_champion-domain-granted-power" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-temple_champion-domain-granted-power">Domain Granted Power</Pair>
<Pair title="At 4th Level">A temple champion selects one <Link to="/ability/domains">domain</Link> granted by her deity (or a domain suitable for her ethos or goals, subject to GM approval). The temple champion gains the 1st-level granted power of that domain and uses her paladin level as her cleric level for determining the effects of that granted power. Any Wisdom-based aspects of that granted power instead use the temple champion's Charisma. The temple champion does not gain access to that domain's spell list.</Pair>
</Ability>
<Ability id="arc-paladin-temple_champion-blessing-su" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-temple_champion-blessing-su">Blessing (Su)</Pair>
<Pair hl title="Replaces">Divine bond, aura of justice</Pair>
<Pair title="At 5th Level">A temple champion gains the minor <Link to="/ability/blessings">blessing</Link> (as the <Link to="/class/warpriest">warpriest</Link> class feature) of the domain she selected at 4th level. She uses her paladin level as her warpriest level for determining the effects of that blessing. Any Wisdom-based aspects of that blessing instead use the temple champion's Charisma.</Pair>
<Pair title="At 11th Level">She gains the major blessing of her chosen domain.</Pair>
</Ability>
</>};
const _tortured_crusader = {title: "Tortured Crusader", jsx: <><h2 id="arc-paladin-tortured_crusader-tortured-crusader">Tortured Crusader</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 65</Link><br/>Though tortured crusaders may be beaten and battered, body, mind, and soul, they still somehow continue through torment and hardship. Despite setbacks and impossible odds, they shine like candles even in the darkest times. Somewhere in their minds, they realize that they can't win in the end, but this only strengthens their resolve to fight for what is right, rather than giving in to hopelessness.</p>
<Ability id="arc-paladin-tortured_crusader-torment" icon={["info"]}>
<Pair single id="arc-paladin-tortured_crusader-torment" flavor="A tortured crusader's great suffering in the face of inevitable horror strengthens her faith and resolve, even as it makes her introverted and far less personable than most paladins.">Torment</Pair>
<Pair hl title="Alters">Spellcasting, smite evil, lay on hands</Pair>
<Pair title="Info">A tortured crusader uses Wisdom instead of Charisma as her key spellcasting ability score (to determine her spell DCs, bonus spells per day, bonus on concentration checks, and so on), and to determine the effects of <em>lay on hands.</em></Pair>
</Ability>
<Ability icon={["skills"]} id="arc-paladin-tortured_crusader-undefined">
<Pair id="arc-paladin-tortured_crusader-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> (INT), <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT), <Link to="/skill/perception">Perception</Link> (WIS), <Link to="/skill/stealth">Stealth</Link> (DEX), <Link to="/skill/survival">Survival</Link> (WIS), <Link to="/skill/use_magic_device">Use Magic Device</Link> (CHA)</Pair>
<Pair title="Removed Skills">Diplomacy, Handle Animal</Pair></Ability>
<Ability id="arc-paladin-tortured_crusader-self-sufficient" icon={["upgrade"]}>
<Pair single id="arc-paladin-tortured_crusader-self-sufficient">Self-Sufficient</Pair>
<Pair hl title="Alters">Class skills, skill ranks per level</Pair>
<Pair title="Info">A tortured crusader gains a number of skill ranks equal to 4 + her Intelligence modifier at each level, instead of gaining a number of skill ranks equal to 2 + her Intelligence modifier.</Pair>
</Ability>
<Ability id="arc-paladin-tortured_crusader-all-is-darkness" icon={["broken-shield"]}>
<Pair single id="arc-paladin-tortured_crusader-all-is-darkness" flavor="Everything around a tortured crusader is so bleak that detecting evil only reminds her that the odds are always against her.">All is Darkness</Pair>
<Pair hl title="Replaces">Detect evil, divine grace</Pair>
<Pair hl title="Alters">Smite evil</Pair>
<Pair title="Info">A tortured crusader doesn't gain the <em>detect evil</em> or <em>divine grace</em> class features.</Pair>
<Pair title="At 1st Level">A tortured crusader gains the <em>smite evil</em> ability, but she doesn't add her Charisma bonus to attack rolls or a deflection bonus equal to her Charisma bonus to her AC against the target of her smite.</Pair>
<Pair title="At 2nd Level">She adds a +4 bonus to attack rolls and a +4 deflection bonus to AC against the target of her smite.</Pair>
</Ability>
<Ability id="arc-paladin-tortured_crusader-alone-in-the-dark" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-paladin-tortured_crusader-alone-in-the-dark" flavor="Faced with endless foes, a tortured crusader can't ask others to confront the same horrors she does.">Alone in the Dark</Pair>
<Pair hl title="Alters">Lay on hands, channel energy, divine bond, aura of courage, aura of resolve, aura of faith, aura of righteousness</Pair>
<Pair title="Info">She can't use her <em>lay on hands</em> ability to heal others or to channel energy. Her <em>aura of courage, aura of resolve, aura of faith,</em> and <em>aura of righteousness</em> affect only her, not her allies. When she selects a <em>divine bond,</em> it must be with a weapon, not a mount.</Pair>
<Pair title="At 4th Level">She can convert two uses of <em>lay on hands</em> into an additional use of <em>smite evil.</em></Pair>
</Ability>
<Ability id="arc-paladin-tortured_crusader-second-chance-su" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-tortured_crusader-second-chance-su">Second Chance (Su)</Pair>
<Pair hl title="Alters">Lay on hands, mercy</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">Once per day, a tortured crusader can spend two uses of <em>lay on hands</em> and choose an unambiguous trigger such as "when I am paralyzed" or "when I am about to fall unconscious from hit point damage," as well as a <em>mercy</em> she knows starting at 3rd level. When the named trigger occurs, the tortured crusader gains the benefits of a <em>lay on hands</em> with the chosen <em>mercy</em> without spending an action. This healing can prevent her from falling unconscious or dying. If the effect doesn't trigger, it expires the next time the tortured crusader recovers uses of <em>lay on hands.</em></Pair>
</Ability>
<Ability id="arc-paladin-tortured_crusader-last-stand-su" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-tortured_crusader-last-stand-su">Last Stand (Su)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A tortured crusader can spend an additional use of <em>smite evil</em> when declaring a smite to make it a <em>last stand.</em> The duration of <em>last stand's</em> benefits is only 1 minute (rather than 24 hours). However, the bonus damage from <em>smite evil</em> is doubled on every attack (this doesn't stack with the doubling if the smite's target is an evil outsider, undead, or evil dragon).</Pair>
</Ability>
</>};
const _tranquil_guardian = {title: "Tranquil Guardian", jsx: <><h2 id="arc-paladin-tranquil_guardian-tranquil-guardian">Tranquil Guardian</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 86</Link><br/>A tranquil guardian is a missionary of peace and tranquility, a soothing voice of succor in a violent and dangerous world. A tranquil guardian gains the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-paladin-tranquil_guardian--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/aasimar">Aasimar</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-paladin-tranquil_guardian-touch-of-serenity-su" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-tranquil_guardian-touch-of-serenity-su">Touch of Serenity (Su)</Pair>
<Pair hl title="Replaces">Smite evil</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A tranquil guardian gains <Link to="/feat/touch_of_serenity">Touch of Serenity</Link> as a bonus feat, even if she does not meet the prerequisites.</Pair>
<Pair title="At 6th Level">The duration of a tranquil guardian's Touch of Serenity is increased by an amount of rounds equal to <Link to="/misc/one_sixth">one-sixth</Link> of her paladin level. Each round on its turn, the target may attempt a new Will save to end the effect. The duration does not stack; only the longest remaining duration applies.</Pair>
</Ability>
<Ability id="arc-paladin-tranquil_guardian-serene-strike-su" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-tranquil_guardian-serene-strike-su">Serene Strike (Su)</Pair>
<Pair hl title="Replaces">Aura of courage</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Free Action">When a tranquil guardian confirms a critical hit, she may convert all damage from her attack to nonlethal damage, and when she does, she can activate Touch of Serenity through her weapon or unarmed strike.</Pair>
</Ability>
<Ability id="arc-paladin-tranquil_guardian-divine-bond-su" icon={["broken-shield"]}>
<Pair single id="arc-paladin-tranquil_guardian-divine-bond-su">Divine Bond (Su)</Pair>
<Pair title="Info">A tranquil guardian who chooses a weapon as her <em>divine bond</em> may only increase her weapon's enhancement bonus or add the following properties to her weapon: <em>conductive, defending, disruptive, grayflame,</em> or <em>merciful.</em></Pair>
</Ability>
<Ability id="arc-paladin-tranquil_guardian-aura-of-calm-su" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="arc-paladin-tranquil_guardian-aura-of-calm-su">Aura of Calm (Su)</Pair>
<Pair hl title="Replaces">Aura of resolve</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">A tranquil guardian is immune to all spells and spell-like abilities with the emotion descriptor, as well as all fear effects. Each ally within 10 feet of her gains a +4 morale bonus on saving throws against these effects.</Pair>
<Pair title="Special">This ability functions only while the tranquil guardian is conscious, not if she is unconscious or dead.</Pair>
</Ability>
<Ability id="arc-paladin-tranquil_guardian-waves-of-peace-su" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-tranquil_guardian-waves-of-peace-su">Waves of Peace (Su)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A tranquil guardian may expend 2 uses of her Touch of Serenity to affect each opponent within 5 feet of her with that effect. She does not need to touch the creature for the effect to take hold.</Pair>
</Ability>
<Ability id="arc-paladin-tranquil_guardian-apostle-of-peace-su" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-paladin-tranquil_guardian-apostle-of-peace-su">Apostle of Peace (Su)</Pair>
<Pair hl title="Replaces">Holy champion</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">A tranquil guardian's DR increases to 10/evil, and whenever she channels positive energy or uses <em>lay on hands</em> to heal, she heals the maximum possible amount. In addition, any creature struck by her Touch of Serenity, even if it saves, must make an additional Will save (DC 10 + 1/2 her tranquil guardian level + her Charisma modifier) the next time it tries to attack. If it fails this save, the attack (including spells or special abilities) automatically fails.</Pair>
</Ability>
</>};
const _undead_scourge = {title: "Undead Scourge", jsx: <><h2 id="arc-paladin-undead_scourge-undead-scourge">Undead Scourge</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 117</Link><br/>Undead are an abomination in the eyes of the just and righteous. It is no surprise then that there are some paladins that dedicate themselves to wiping these unholy terrors from the world. The following are the class features of the undead scourge.</p>
<Ability id="arc-paladin-undead_scourge-smite-evil-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-paladin-undead_scourge-smite-evil-su">Smite Evil (Su)</Pair>
<Pair title="Info">This functions as the paladin ability of the same name, but the undead scourge does not deal 2 points of damage per level on the first successful attack against evil dragons and evil outsiders. She does deal 2 points of damage per level on all smite attacks made against evil undead creatures.</Pair>
</Ability>
<Ability id="arc-paladin-undead_scourge-aura-of-life-su" icon={["abstract-091","armor-downgrade"]}>
<Pair single id="arc-paladin-undead_scourge-aura-of-life-su">Aura of Life (Su)</Pair>
<Pair hl title="Replaces">Aura of resolve</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">An undead scourge emits a 10-foot aura of life around her that weakens undead creatures. Undead in this aura take a -4 penalty on Will saves made to resist positive energy. In addition, undead in this aura do not regain hit points from channeled negative energy.</Pair>
</Ability>
<Ability id="arc-paladin-undead_scourge-undead-annihilation-su" icon={["mailed-fist"]}>
<Pair single id="arc-paladin-undead_scourge-undead-annihilation-su">Undead Annihilation (Su)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Standard Action">An undead scourge can expend one use of her <em>smite evil</em> ability and make a single melee attack against an undead creature. If this attack hits, the undead creature must make a Will save or be destroyed. The save DC is equal to 10 + 1/2 the undead scourge's level + the undead scourge's Charisma modifier.</Pair>
<Pair title="Special">Undead with twice as many Hit Dice as the undead scourge are unaffected by this ability. If the attack misses, the <em>smite evil</em> is wasted without effect.</Pair>
</Ability>
</>};
const _vindictive_bastard = {title: "Vindictive Bastard", jsx: <><h2 id="arc-paladin-vindictive_bastard-vindictive-bastard">Vindictive Bastard</h2>
<p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook pg. 14</Link><br/>While paladins often collaborate with less righteous adventurers in order to further their causes, those who spend too much time around companions with particularly loose morals run the risk of adopting those same unscrupulous ideologies and methods. Such a vindictive bastard, as these fallen paladins are known, strikes out for retribution and revenge, far more interested in tearing down those who have harmed her or her companions than furthering a distant deity's cause.</p>
<p><strong className="hl">This is an ex-class archetype and can be taken by a character immediately upon becoming an ex-paladin.</strong></p>
<p>The following archetype can be taken by an ex-paladin immediately upon becoming an ex-paladin, regardless of character level, replacing some or all of the lost class abilities. If another archetype the character had before she became an ex-paladin replaces the same ability as the ex-class archetype, she loses the old archetype in favor of the new one; otherwise, she can retain both archetypes as normal. Vindictive bastards can gain further levels in the paladin class, even though becoming an ex-paladin normally prohibits further advancement in the class. While an ex-member of a class can recant her failings and atone for her fall from her original class (typically involving an <Link to="/spell/atonement">atonement</Link> spell), her acceptance of her ex-class archetype means she must atone both for her initial fall and for further straying from the path. As a result, such a character must be the target of two <em>atonement</em> spells or a similar effect to regain her lost class features. Upon doing so, she immediately loses this archetype and regains her original class (and archetype, if she had one).</p>
<Ability id="arc-paladin-vindictive_bastard-no-aura" icon={["info"]}>
<Pair single id="arc-paladin-vindictive_bastard-no-aura">No Aura</Pair>
<Pair hl title="Alters">Aura</Pair>
<Pair title="Info">A vindictive bastard does not radiate an alignment aura.</Pair>
</Ability>
<Ability id="arc-paladin-vindictive_bastard-locate-ally-sp" icon={["magic-swirl"]}>
<Pair single id="arc-paladin-vindictive_bastard-locate-ally-sp">Locate Ally (Sp)</Pair>
<Pair hl title="Replaces">Detect evil</Pair>
<Pair title="Ability">Once per day, a vindictive bastard can cast <Link to="/spell/locate_creature">locate creature</Link> as a spell-like ability with a caster level equal to her paladin level, but she can do so only to target an ally whom she has spent at least 24 hours in close proximity to within the last week.</Pair>
</Ability>
<Ability id="arc-paladin-vindictive_bastard-vindictive-smite-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-paladin-vindictive_bastard-vindictive-smite-ex" flavor="A vindictive bastard is particularly ruthless against those who have harmed her or her allies.">Vindictive Smite (Ex)</Pair>
<Pair hl title="Replaces">Smite evil</Pair>
<Pair title="Usage">1 time/day + 1 per three paladin levels beyond 1st<ByLevelPop levels={[[1,1],[4,2],[7,3],[10,4],[13,5],[16,6],[19,7]]} unit="time" postText="/day" /></Pair>
<Pair title="Swift Action">She can <em>smite</em> one target within sight who has dealt hit point damage to her or an ally. She adds her Charisma modifier to her attack rolls and adds her paladin level to damage rolls against the target of her <em>smite.</em> In addition, while <em>vindictive smite</em> is in effect, the vindictive bastard gains a deflection bonus equal to her Charisma bonus (if any) to her AC against attacks by the target of the <em>smite.</em> If the target of <em>vindictive smite</em> has rendered an ally of the vindictive bastard unconscious or dead within the last 24 hours, the bonus on damage rolls on the first attack that hits increases by 2 for every paladin level she has.</Pair>
<Pair title="Special">The <em>vindictive smite</em> effect remains until the target of the <em>smite</em> is dead or the next time the vindictive bastard rests and regains her uses of this ability.</Pair>
</Ability>
<Ability id="arc-paladin-vindictive_bastard-faded-grace-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-paladin-vindictive_bastard-faded-grace-ex">Faded Grace (Ex)</Pair>
<Pair hl title="Replaces">Divine grace</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A vindictive bastard gains one of the following as a bonus feat: <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/iron_will">Iron Will</Link>, or <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>.</Pair>
</Ability>
<Ability id="arc-paladin-vindictive_bastard-solo-tactics-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-vindictive_bastard-solo-tactics-ex">Solo Tactics (Ex)</Pair>
<Pair hl title="Replaces">Lay on hands</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">A number of rounds per day equal to <Link to="/misc/half">half</Link> her paladin level + her Charisma modifier</Pair>
<Pair title="Ability">A vindictive bastard gains <em>solo tactics,</em> as per the <Link to="/class/inquisitor">inquisitor</Link> class feature. She can activate this ability as a <strong className="hl">swift action</strong> and gains the benefits of it for 1 round.</Pair>
</Ability>
<Ability id="arc-paladin-vindictive_bastard-solo-tactics-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-paladin-vindictive_bastard-solo-tactics-ex" flavor="Text from the inquisitor ability.">Solo Tactics (Ex)</Pair>
<Pair title="Passive Ability">All of your allies are treated as if they possessed the same teamwork feats as you for the purpose of determining whether you receives a bonus from your teamwork feats.</Pair>
<Pair title="Special">Your allies do not receive any bonuses from these feats unless they actually possess the feats themselves. Their positioning and actions must still meet the prerequisites listed in the teamwork feat for you to receive the listed bonus.</Pair>
</Ability>
<Ability id="arc-paladin-vindictive_bastard-spiteful-tenacity-ex" icon={["upgrade"]}>
<Pair single id="arc-paladin-vindictive_bastard-spiteful-tenacity-ex">Spiteful Tenacity (Ex)</Pair>
<Pair hl title="Replaces">Divine health</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">Whenever a vindictive bastard has a <em>vindictive smite</em> in effect, she gains the benefits of the <Link to="/feat/diehard">Diehard</Link> feat.</Pair>
</Ability>
<Ability id="arc-paladin-vindictive_bastard-teamwork-feat" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-vindictive_bastard-teamwork-feat">Teamwork Feat</Pair>
<Pair hl title="Replaces">Mercy, channel energy</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">The vindictive bastard gains a bonus feat in addition to those gained from normal advancement. These bonus feats must be selected from those listed as <Link to="/main/teamwork_feat">teamwork feats</Link>.</Pair>
<Pair title="At 9th Level">The vindictive bastard gains another bonus teamwork feat.</Pair>
<Pair title="At 15th Level">The vindictive bastard gains another bonus teamwork feat.</Pair>
<Pair title="Special">The vindictive bastard must meet the prerequisites of the selected bonus feats.</Pair>
</Ability>
<Ability id="arc-paladin-vindictive_bastard-gang-up-ex" icon={["upgrade"]}>
<Pair single id="arc-paladin-vindictive_bastard-gang-up-ex" flavor="A vindictive bastard forms a close bond with her companions.">Gang Up (Ex)</Pair>
<Pair hl title="Replaces">Divine bond</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Move-Equivalent Action">She can grant half her <em>vindictive smite</em> bonus against a single target to all allies within 30 feet who can see and hear her. This bonus lasts for a number of rounds equal to the vindictive bastard's Charisma modifier (minimum 1).</Pair>
</Ability>
<Ability id="arc-paladin-vindictive_bastard-swift-justice-ex" icon={["upgrade"]}>
<Pair single id="arc-paladin-vindictive_bastard-swift-justice-ex">Swift Justice (Ex)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A vindictive bastard can activate her <em>gang up</em> ability as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-paladin-vindictive_bastard-stalwart-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-vindictive_bastard-stalwart-ex">Stalwart (Ex)</Pair>
<Pair hl title="Replaces">Aura of faith</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">A vindictive bastard gains <em>stalwart,</em> as per the inquisitor class feature, except she can also benefit from this ability while wearing heavy armor.</Pair>
</Ability>
<Ability id="arc-paladin-vindictive_bastard-stalwart-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-paladin-vindictive_bastard-stalwart-ex" flavor="Relevant text from the inquisitor ability.">Stalwart (Ex)</Pair>
<Pair title="Usage">Only when not <Link to="/misc/helpless">helpless</Link>.</Pair>
<Pair title="Passive Ability">If you make a Fortitude or Will saving throw against an attack that has a reduced effect on a successful save, you instead avoid the effect entirely.</Pair>
</Ability>
<Ability id="arc-paladin-vindictive_bastard-aura-of-self-righteousness-ex" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="arc-paladin-vindictive_bastard-aura-of-self-righteousness-ex">Aura of Self-Righteousness (Ex)</Pair>
<Pair hl title="Replaces">Aura of righteousness</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">A vindictive bastard gains DR 5/lawful or good and immunity to compulsion spells and spell-like abilities. Each ally within 10 feet of her gains a +4 morale bonus on saving throws against compulsion effects.</Pair>
<Pair title="Special"><em>Aura of self-righteousness</em> functions only while the vindictive bastard is conscious, not if she is unconscious or dead.</Pair>
</Ability>
<Ability id="arc-paladin-vindictive_bastard-ultimate-vindication-ex" icon={["magic-swirl"]}>
<Pair single id="arc-paladin-vindictive_bastard-ultimate-vindication-ex">Ultimate Vindication (Ex)</Pair>
<Pair hl title="Replaces">Holy champion</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">If a foe kills one of a vindictive bastard's allies or knocks the vindictive bastard unconscious (and she later regains consciousness), the vindictive bastard musters a vindictive fury. The next time she hits that foe within 1 minute, the vindictive bastard can channel the effects of a <Link to="/spell/disintegrate">disintegrate</Link> spell through her weapon, using her paladin level as her effective caster level.</Pair>
<Pair title="Special">Whether or not the target succeeds at its save against the disintegrate effect, it is immune to this ability for the next 24 hours.</Pair>
</Ability>
</>};
const _virtuous_bravo = {title: "Virtuous Bravo", jsx: <><h2 id="arc-paladin-virtuous_bravo-virtuous-bravo">Virtuous Bravo</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court pg. 12</Link><br/>Although no less a beacon of hope and justice than other paladins, virtuous bravos rely on their wit and grace rather than might and strong armor.</p>
<Ability id="arc-paladin-virtuous_bravo-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-paladin-virtuous_bravo-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Alters">Armor proficiency</Pair>
<Pair title="Info">Virtuous bravos aren't proficient with heavy armor or shields (except for <Link to="/eq-armor/buckler">bucklers</Link>).</Pair>
</Ability>
<Ability id="arc-paladin-virtuous_bravo-bravos-finesse-ex" icon={["upgrade"]}>
<Pair single id="arc-paladin-virtuous_bravo-bravos-finesse-ex">Bravo's Finesse (Ex)</Pair>
<Pair title="Ability">A virtuous bravo can use her Dexterity modifier instead of her Strength modifier on attack rolls with light or one-handed piercing melee weapons (though if she carries a shield, she applies its armor check penalty to such attack rolls), and she can use her Charisma score in place of her Intelligence score to meet prerequisites of combat feats.</Pair>
<Pair title="Special">This ability counts as having the <Link to="/feat/weapon_finesse">Weapon Finesse</Link> feat for the purpose of meeting feat prerequisites.</Pair>
</Ability>
<Ability id="arc-paladin-virtuous_bravo-bravos-smite-su" icon={["broken-shield"]}>
<Pair single id="arc-paladin-virtuous_bravo-bravos-smite-su">Bravo's Smite (Su)</Pair>
<Pair hl title="Alters">Smite evil</Pair>
<Pair title="Info">When using <em>smite evil,</em> a virtuous bravo doesn't gain a deflection bonus to AC.</Pair>
</Ability>
<Ability id="arc-paladin-virtuous_bravo-nimble-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-paladin-virtuous_bravo-nimble-ex">Nimble (Ex)</Pair>
<Pair hl title="Replaces">Mercy</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A virtuous bravo gains a +1 dodge bonus to AC while wearing light armor or no armor.</Pair>
<Pair title="At 7th Level">This bonus becomes +2.</Pair>
<Pair title="At 11th Level">This bonus increases to +3.</Pair>
<Pair title="At 15th Level">This bonus becomes +4.</Pair>
<Pair title="At 19th Level">This bonus increases to +5.</Pair>
<Pair title="Special">Anything that causes the virtuous bravo to lose her Dexterity bonus to AC also causes her to lose this dodge bonus.</Pair>
</Ability>
<Ability id="arc-paladin-virtuous_bravo-panache-and-deeds-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-virtuous_bravo-panache-and-deeds-ex">Panache and Deeds (Ex)</Pair>
<Pair hl title="Replaces">Spellcasting</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A virtuous bravo gains the <Link to="/class/swashbuckler">swashbuckler's</Link> <em>panache</em> class feature along with the following swashbuckler deeds: <Link to="/swashdeed/dodging_panache">dodging panache</Link>, <Link to="/swashdeed/menacing_swordplay">menacing swordplay</Link>, <Link to="/swashdeed/opportune_parry_and_riposte">opportune parry and riposte</Link>, <Link to="/swashdeed/precise_strike">precise strike</Link>, and <Link to="/swashdeed/swashbuckler_initiative">swashbuckler initiative</Link>.</Pair>
<Pair title="Special">The virtuous bravo's paladin levels stack with any swashbuckler levels when using these deeds.</Pair>
</Ability>
<Ability id="arc-paladin-virtuous_bravo-panache-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-virtuous_bravo-panache-ex" flavor="Text from the swashbuckler ability">Panache (Ex)</Pair>
<Pair title="Ability"><p>At the start of each day, you gain a number of panache points equal to your Charisma modifier (minimum 1). Your panache goes up or down throughout the day, but usually cannot go higher than your Charisma modifier (minimum 1), though feats and magic items can affect this maximum. You spend panache to accomplish deeds, and regain panache in the following ways.</p>
<p>Each time you confirm a critical hit with a light or one-handed piercing melee weapon, you regain 1 panache point. Confirming a critical hit on a <Link to="/misc/helpless">helpless</Link> or unaware creature or a creature that has fewer Hit Dice than <Link to="/misc/half">half</Link> your character level doesn't restore panache.</p>
<p>When you reduce a creature to 0 or fewer hit points with a light or one-handed piercing melee weapon attack while in combat, you regain 1 panache point. Destroying an unattended object, reducing a helpless or unaware creature to 0 or fewer hit points, or reducing a creature that has fewer Hit Dice than half your character level to 0 or fewer hit points doesn't restore any panache.</p>
</Pair>
</Ability>
<Ability id="arc-paladin-virtuous_bravo-advanced-deeds-ex" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-virtuous_bravo-advanced-deeds-ex">Advanced Deeds (Ex)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A virtuous bravo gains the following swashbuckler deeds: <Link to="/swashdeed/bleeding_wound">bleeding wound</Link>, <Link to="/swashdeed/evasive">evasive</Link>, <Link to="/swashdeed/subtle_blade">subtle blade</Link>, <Link to="/swashdeed/superior_feint">superior feint</Link>, <Link to="/swashdeed/swashbucklers_grace">swashbuckler's grace</Link>, and <Link to="/swashdeed/targeted_strike">targeted strike</Link>.</Pair>
</Ability>
<Ability id="arc-paladin-virtuous_bravo-bravos-holy-strike-su" icon={["mailed-fist"]}>
<Pair single id="arc-paladin-virtuous_bravo-bravos-holy-strike-su" flavor="A virtuous bravo becomes a master at dispensing holy justice with her blade.">Bravo's Holy Strike (Su)</Pair>
<Pair hl title="Replaces">Holy champion</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">When the virtuous bravo confirms a critical hit with a light or one-handed piercing melee weapon, she can choose one of the following three effects in addition to dealing damage: the target is rendered <Link to="/misc/unconscious">unconscious</Link> for 1d4 hours, the target is <Link to="/rule/paralyzed">paralyzed</Link> for 2d6 rounds, or the target is slain. Regardless of the effect chosen, the target can attempt a Fortitude save. On a success, the target is instead <Link to="/misc/stunned">stunned</Link> for 1 round (it still takes damage). The DC of this save is equal to 10 + 1/2 the virtuous bravo's paladin level + her Charisma modifier.</Pair>
<Pair title="Special">Once a creature has been the target of a bravo's holy strike, regardless of whether or not it succeeds at the save, that creature is immune to that bravo's holy strike for 24 hours. Creatures that are immune to critical hits are also immune to this ability.</Pair>
</Ability>
</>};
const _warrior_of_the_holy_light = {title: "Warrior of the Holy Light", jsx: <><h2 id="arc-paladin-warrior_of_the_holy_light-warrior-of-the-holy-light">Warrior of the Holy Light</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 118</Link><br/>Some paladins use their gifts to focus on the holy light that shines within their souls. With the gifts of purity and redemption, these paladins spend much of their lives helping others find the true path. Unleashing this power takes patience and comes at a steep price. Warriors of the holy light have the following class features.</p>
<Ability id="arc-paladin-warrior_of_the_holy_light-power-of-faith-su" icon={["broken-shield","upgrade","armor-upgrade","shield-reflect","heart-plus"]}>
<Pair single id="arc-paladin-warrior_of_the_holy_light-power-of-faith-su">Power of Faith (Su)</Pair>
<Pair hl title="Replaces">Spells</Pair>
<Pair title="Info">A warrior of the holy light learns to use the power of her faith to bolster her defenses and aid her allies. A warrior of the holy light does not gain any spells or spellcasting abilities, does not have a caster level, and cannot use spell trigger or spell completion magic items.</Pair>
<Pair title="At 4th Level">The warrior of the holy light gains one additional use of her <em>lay on hands</em> ability per day. She can spend a use of her <em>lay on hands</em> ability to call upon the power of her faith as a <strong className="hl">standard action</strong>. This causes a nimbus of light to emanate from the warrior of the holy light in a 30-foot radius. All allies in this area (including the warrior of the holy light) receive a +1 morale bonus to AC and on attack rolls, damage rolls, and saving throws against fear as long as they remain in the area of light. This power lasts for 1 minute.</Pair>
<Pair title="At 8th Level">The warrior of the holy light gains one additional use of her <em>lay on hands</em> ability per day. The nimbus of light heals the paladin and her allies, curing of them of 1d4 points of ability damage, as per the spell <Link to="/spell/lesser_restoration">lesser restoration</Link>. A creature can only be healed in this way once per day.</Pair>
<Pair title="At 12th Level">The warrior of the holy light gains one additional use of her <em>lay on hands</em> ability per day. The nimbus of light is treated as <Link to="/spell/daylight">daylight</Link> for the purposes of affecting creatures with sensitivity to light. In addition, the nimbus grants the warrior of the holy light and her allies in the area <Link to="/umr/resistance">resistance</Link> 10 to one type of energy, selected by the warrior of the holy light when this power is activated.</Pair>
<Pair title="At 16th Level">The warrior of the holy light gains one additional use of her <em>lay on hands</em> ability per day. The nimbus of light grants the warrior of the holy light and her allies protection from critical hits. There is a 25% chance that critical hits made against the warrior of the holy light and her allies in the area are instead treated as normal hits. This does not stack with other abilities that grant similar protection (such as <Link to="/magic-enh/light_fortification">light fortification</Link>).</Pair>
<Pair title="At 20th Level">The warrior of the holy light gains one additional use of her <em>lay on hands</em> ability per day. The nimbus of light increases in size out to a range of 60 feet. In addition, all of its bonuses increase. The morale bonus to AC and on attack rolls, damage rolls, and saving throws against fear increases to +2. The amount of ability damage healed increases to 2d4. The energy resistance increases to 20 against one energy type. Finally, protection against critical hits increases to 50%.</Pair>
</Ability>
<Ability id="arc-paladin-warrior_of_the_holy_light-shining-light-su" icon={["abstract-091","armor-downgrade","heart-plus"]}>
<Pair single id="arc-paladin-warrior_of_the_holy_light-shining-light-su">Shining Light (Su)</Pair>
<Pair hl title="Replaces">Aura of faith</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Usage">1 time/day + 1 per three paladin levels beyond 14th<ByLevelPop levels={[[14,1],[17,2],[20,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Standard Action">Once per day, a warrior of the holy light can unleash a 30-foot <Link to="/misc/burst">burst</Link> of pure, white light. Evil creatures within this burst take 1d6 points of damage for every two paladin levels and are <Link to="/misc/blinded">blinded</Link> for 1 round. Evil dragons, evil outsiders, and evil undead are blinded for 1d4 rounds on a failed save. A Reflex save halves this damage and negates the blindness. The DC of this save is equal to 10 + 1/2 the warrior of the holy light's level + the warrior of the holy light's Charisma modifier.</Pair>
<Pair title="Special">Good creatures within this burst are healed 1d6 points of damage per two paladin levels and receive a +2 sacred bonus on ability checks, attack rolls, saving throws, and skill checks for 1 round.</Pair>
</Ability>
</>};
const _wilderness_warden = {title: "Wilderness Warden", jsx: <><h2 id="arc-paladin-wilderness_warden-wilderness-warden">Wilderness Warden</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 71</Link><br/>Wilderness wardens are vigilant guardians of natural places of all kinds, from mountain peaks to tangled thickets.</p>
<Ability icon={["skills"]} id="arc-paladin-wilderness_warden-undefined">
<Pair id="arc-paladin-wilderness_warden-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/climb">Climb</Link> (STR), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS), <Link to="/skill/swim">Swim</Link> (STR)</Pair>
<Pair title="Removed Skills">Diplomacy, Heal, Knowledge (nobility), Spellcraft</Pair></Ability>
<Ability id="arc-paladin-wilderness_warden-natural-defense-su" icon={["armor-upgrade"]}>
<Pair single id="arc-paladin-wilderness_warden-natural-defense-su">Natural Defense (Su)</Pair>
<Pair hl title="Replaces">Divine grace</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">Once per day, a wilderness warden can grant herself energy resistance 10 to cold, electricity, or fire and a +2 insight bonus to her CMD for a number of minutes equal to her paladin level.</Pair>
<Pair title="At 5th Level">The energy resistance increases to 15 and the CMD bonus increases to +3.</Pair>
<Pair title="At 10th Level">The energy resistance increases to 20 and the CMD bonus increases to +4.</Pair>
<Pair title="At 15th Level">The energy resistance increases to 25 and the CMD bonus increases to +5.</Pair>
<Pair title="At 20th Level">The energy resistance increases to 30 and the CMD bonus increases to +6.</Pair>
</Ability>
<Ability id="arc-paladin-wilderness_warden-smite-evil-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-paladin-wilderness_warden-smite-evil-su">Smite Evil (Su)</Pair>
<Pair hl title="Alters">Smite evil</Pair>
<Pair title="At 4th Level">A wilderness warden gains this ability at 4th level, and it functions at her paladin level - 3. She can expend a daily use of <em>smite evil</em> to gain an additional daily use of <em>natural defense.</em> She deals additional damage on her first successful attack when the target of her <em>smite evil</em> is an evil fey, humanoid (giant), magical beast, or monstrous humanoid, rather than an evil dragon, outsider (evil), or undead.</Pair>
</Ability>
<Ability id="arc-paladin-wilderness_warden-aura-of-comfort-ex" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="arc-paladin-wilderness_warden-aura-of-comfort-ex">Aura of Comfort (Ex)</Pair>
<Pair hl title="Replaces">Aura of courage</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A wilderness warden is comfortable in nearly any climate, as if she were affected by a constant <Link to="/spell/endure_elements">endure elements</Link> spell, and she and allies within 10 feet of her gain a +4 bonus on Constitution checks and saving throws to resist fatigue; exhaustion; and the effects of hunger, thirst, and hot or cold climates (including from magical effects).</Pair>
</Ability>
<Ability id="arc-paladin-wilderness_warden-favored-terrain-ex" icon={["stairs-goal"]}>
<Pair single id="arc-paladin-wilderness_warden-favored-terrain-ex">Favored Terrain (Ex)</Pair>
<Pair hl title="Replaces">3rd-, 9th-, and 15th-level mercies</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A wilderness warden selects a <Link to="/ability/favored_terrain">favored terrain</Link>, as per the <Link to="/class/ranger">ranger</Link> class feature.</Pair>
<Pair title="At 9th Level">She selects an additional favored terrain, and the bonuses she gains in her previous favored terrain(s) increase by 2.</Pair>
<Pair title="At 15th Level">She selects an additional favored terrain, and the bonuses she gains in her previous favored terrain(s) increase by 2.</Pair>
</Ability>
<Ability id="arc-paladin-wilderness_warden-spells" icon={["spell-book","magic-swirl"]}>
<Pair single id="arc-paladin-wilderness_warden-spells">Spells</Pair>
<Pair hl title="Alters">Spells</Pair>
<Pair title="Passive Ability">For each level of spell she can cast, a wilderness warden can prepare and cast one spell per day from the <Link to="/main/druid_spell">druid spell list</Link> rather than the paladin spell list.</Pair>
</Ability>
<Ability id="arc-paladin-wilderness_warden-aura-of-purity-su" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="arc-paladin-wilderness_warden-aura-of-purity-su">Aura of Purity (Su)</Pair>
<Pair hl title="Replaces">Aura of resolve</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">A wilderness warden gains immunity to poison. Each ally within 10 feet gains a +2 bonus on saving throws against disease and poison.</Pair>
</Ability>
<Ability id="arc-paladin-wilderness_warden-natural-shield-su" icon={["shield-reflect"]}>
<Pair single id="arc-paladin-wilderness_warden-natural-shield-su">Natural Shield (Su)</Pair>
<Pair hl title="Replaces">Aura of justice</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A wilderness warden can expend two daily uses of her <em>natural defense</em> ability to grant the benefits of that ability to all nonevil allies within 10 feet for 1 minute.</Pair>
</Ability>
</>};
export default {banishing_warden:_banishing_warden,champion_of_the_cascade:_champion_of_the_cascade,chaos_knight:_chaos_knight,chosen_one:_chosen_one,combat_healer_squire:_combat_healer_squire,divine_defender:_divine_defender,divine_guardian:_divine_guardian,divine_hunter:_divine_hunter,dusk_knight:_dusk_knight,empyreal_knight:_empyreal_knight,faithful_wanderer:_faithful_wanderer,forest_preserver:_forest_preserver,forgefathers_seeker:_forgefathers_seeker,ghost_hunter:_ghost_hunter,gray_paladin:_gray_paladin,holy_guide:_holy_guide,holy_gun:_holy_gun,holy_tactician:_holy_tactician,hospitaler:_hospitaler,hunting_paladin:_hunting_paladin,invigorator:_invigorator,iomedaen_enforcer:_iomedaen_enforcer,iroran_paladin:_iroran_paladin,knight_of_coins:_knight_of_coins,kraken_slayer:_kraken_slayer,legate:_legate,martyr:_martyr,mind_sword:_mind_sword,pearl_seeker:_pearl_seeker,redeemer:_redeemer,sacred_servant:_sacred_servant,sacred_shield:_sacred_shield,scion_of_talmandor:_scion_of_talmandor,shining_knight:_shining_knight,silver_champion:_silver_champion,soul_sentinel:_soul_sentinel,stonelord:_stonelord,sword_of_valor:_sword_of_valor,tempered_champion:_tempered_champion,temple_champion:_temple_champion,tortured_crusader:_tortured_crusader,tranquil_guardian:_tranquil_guardian,undead_scourge:_undead_scourge,vindictive_bastard:_vindictive_bastard,virtuous_bravo:_virtuous_bravo,warrior_of_the_holy_light:_warrior_of_the_holy_light,wilderness_warden:_wilderness_warden}