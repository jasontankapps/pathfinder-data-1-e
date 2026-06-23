import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import ByLevelPop from '../../components/ByLevelPop';
const _augur = {title: "Augur", jsx: <><h2 id="arc-skald-augur-augur">Augur</h2>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 25</Link><br/>Tales of Merivesta Olinchi are surprisingly common among the Bekyar of the Mwangi Expanse, who claim she spent some time studying their traditions and history. Most historians find it more likely that a Bekyar skald spent time in Nex, was exposed to the idea of divination as a tool of war from a copy of <Link to="/eq-spellbook/cold_irony">Cold Irony</Link>, and fabricated tales of how that knowledge came to be in his hands.</p>
<Ability id="arc-skald-augur-monster-insight-ex" icon={["upgrade"]}>
<Pair single id="arc-skald-augur-monster-insight-ex">Monster Insight (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">The augur applies his Charisma modifier in addition to his Intelligence modifier when attempting Knowledge checks to identify the abilities and weaknesses of creatures.</Pair>
<Pair title="Special">Monster insight counts as the <em>monster lore</em> class feature for prerequisites.</Pair>
</Ability>
<Ability id="arc-skald-augur-signs-and-portents-su" icon={["magic-swirl"]}>
<Pair single id="arc-skald-augur-signs-and-portents-su">Signs and Portents (Su)</Pair>
<Pair hl title="Replaces">All types of versatile performance</Pair>
<Pair title="At 2nd Level">An augur can read signs and portents to attempt to ascertain how events in the near future will play out. This allows the augur to cast <Link to="/spell/augury">augury</Link> as a spell-like ability once a day.</Pair>
<Pair title="At 7th Level">He can instead use <em>signs and portents</em> to cast <Link to="/spell/divination">divination</Link> as a spell-like ability.</Pair>
<Pair title="At 12th Level">He can instead cast <Link to="/spell/commune">commune</Link> as a spell-like ability.</Pair>
<Pair title="At 17th Level">He can use <em>signs and portents</em> twice per day.</Pair>
</Ability>
<Ability id="arc-skald-augur-predictive-strike-su" icon={["mailed-fist"]}>
<Pair single id="arc-skald-augur-predictive-strike-su" flavor="The augur accurately divines the possible movements of his enemies in combat.">Predictive Strike (Su)</Pair>
<Pair hl title="Replaces">Spell kenning</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Free Action">Once per day, he can declare one of his melee attacks to be a <em>predictive strike.</em> Against the augur's attack, the target is <Link to="/rule/flat_footed">flat-footed</Link> and gains no benefits from <Link to="/rule/concealment">concealment</Link> or <Link to="/rule/cover">cover</Link>. Attacks from other creatures are treated normally. The target still benefits from total concealment and total cover normally.</Pair>
<Pair title="At 11th Level">The augur can use this ability on a total of two attacks per day.</Pair>
<Pair title="At 17th Level">He can use this on three attacks per day.</Pair>
</Ability>
</>};
const _bacchanal = {title: "Bacchanal", jsx: <><h2 id="arc-skald-bacchanal-bacchanal">Bacchanal</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 84</Link><br/>Bacchanals are skalds who use ecstatic dancing and ribald songs to influence the primal instincts of listeners. To these skalds, the passionate frenzy of a celebration or feast shares many features with the violence of combat, and several of their talents blur the line between festival and battle in dramatic ways.</p>
<Ability id="arc-skald-bacchanal-fermented-fruit-sp" icon={["spell-book","magic-swirl","armor-upgrade"]}>
<Pair single id="arc-skald-bacchanal-fermented-fruit-sp">Fermented Fruit (Sp)</Pair>
<Pair hl title="Replaces">Scribe Scroll</Pair>
<Pair title="Ability">A bacchanal adds <Link to="/spell/goodberry">goodberry</Link> to his list of 1st-level skald spells known. In addition, he can cast it as a spell-like ability once per day. When he casts <em>goodberry</em> as a spell or spell-like ability, the targeted berries ferment; this causes each berry to act as a serving of an alcoholic beverage. A creature that eats a fermented berry does not gain a meal's nourishment, but it is cured of 1 point of damage and becomes slightly foolhardy as if tipsy, gaining a +1 bonus on saves against fear effects for 1 minute after eating the berry.</Pair>
</Ability>
<Ability id="arc-skald-bacchanal-drunken-dancer-su" icon={["stairs-goal","magic-swirl","armor-upgrade","upgrade"]}>
<Pair single id="arc-skald-bacchanal-drunken-dancer-su">Drunken Dancer (Su)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Move-Equivalent Action">While maintaining a <em>raging song,</em> a bacchanal can consume a berry affected by <em>goodberry,</em> a potion, or a serving of alcohol. A berry affected by <em>goodberry</em> or a potion has its normal effect, while an alcoholic drink or a berry affected by <em>goodberry</em> via <em>fermented fruit</em> (see above) allows the skald to maintain his <em>raging song</em> that round without expending a round of <em>raging song</em> for the day (instead of the normal effects of the alcohol or fermented berry).</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
<Pair title="At 7th Level">When the bacchanal consumes an alcoholic drink or fermented berry while maintaining his rage song, he can gain the benefits of <Link to="/spell/cure_light_wounds">cure light wounds</Link> or <Link to="/spell/remove_fear">remove fear</Link> (for the duration of the <em>raging song</em>) at his caster level by spending 2 rounds of <em>raging song.</em></Pair>
<Pair title="At 12th Level">The bacchanal can gain the benefits of <Link to="/spell/heroism">heroism</Link> (for the duration of the <em>raging song</em>) in this manner.</Pair>
<Pair title="At 17th Level">He can gain the benefits of <Link to="/spell/persistent_vigor">persistent vigor</Link> (for the duration of the <em>raging song</em>) in this manner.</Pair>
<Pair title="Special">For each alcoholic drink or fermented berry consumed while raging, the skald is <Link to="/misc/nauseated">nauseated</Link> for 1 round after his <em>raging song</em> ends. The <em>internal fortitude</em> rage power prevents this nauseated condition from occurring.</Pair>
</Ability>
<Ability id="arc-skald-bacchanal-raging-song-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-skald-bacchanal-raging-song-su">Raging Song (Su)</Pair>
<Pair title="Info">A bacchanal gains access to the following <em>raging songs.</em></Pair>
</Ability>
<Ability id="arc-skald-bacchanal-song-of-urging-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-skald-bacchanal-song-of-urging-su" flavor={<>The bacchanal's <em>raging song</em> can wordlessly influence creatures of the wild.</>}>Song of Urging (Su)</Pair>
<Pair hl title="Replaces">Song of marching</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">This <em>raging song</em> functions just like a <Link to="/skill/diplomacy">Diplomacy</Link> check to make a simple request or an Intimidate check but can influence only animals. The bacchanal rolls 1d20 and adds his skald level and his Charisma modifier to determine the <em>urging</em> check's result. Bonuses and penalties that apply to wild empathy checks apply to these <em>urging</em> checks. The typical domestic animal has a starting attitude of indifferent, while wild animals are usually unfriendly. The song can influence plants or magical beasts with Intelligence scores of 1 or 2 as well as drunken creatures of any Intelligence (even without sharing a language), but against these non-animals, the bacchanal takes a -4 penalty on this check. The bacchanal must continue to perform the song for the entire time required for the check; otherwise, its effect is wasted, but only 1 round of <em>raging song</em> is expended regardless of how long the check takes.</Pair>
</Ability>
<Ability id="arc-skald-bacchanal-maddening-dance-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-skald-bacchanal-maddening-dance-su">Maddening Dance (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">The bacchanal's <em>raging song</em> can compel a creature within 30 feet to perform an ecstatic dance. Unless it succeeds at its Will save, the victim becomes <Link to="/misc/confused">confused</Link>, takes a -2 penalty to its AC and on Reflex saving throws, and loses the benefit of any shield it holds. The effect ends when the target can no longer hear the bacchanal from within 30 feet.</Pair>
<Pair title="Info">As an <strong className="hl">immediate action</strong>, an ally of the bacchanal within 30 feet can dance along as a <strong className="hl">full-round action</strong> (taking all penalties except the confused condition for that round) to allow the bacchanal to target an additional creature.</Pair>
<Pair title="Special">A creature that succeeds at the Will saving throw against this <em>raging song</em> is immune to this effect for 24 hours. This is a compulsion, emotion, enchantment, and mind-affecting effect.</Pair>
</Ability>
<p><strong className="hl">The following rage powers complement the bacchanal archetype:</strong> <Link to="/ragepower/animal_fury">animal fury</Link>, <Link to="/ragepower/boasting_taunt">boasting taunt</Link>, <Link to="/ragepower/fearless_rage">fearless rage</Link>, <Link to="/ragepower/fierce_fortitude">fierce fortitude</Link>, <Link to="/ragepower/increased_damage_reduction">increased damage reduction</Link>, <Link to="/ragepower/internal_fortitude">internal fortitude</Link>, <Link to="/ragepower/liquid_courage">liquid courage</Link>, <Link to="/ragepower/night_vision">night vision</Link>, <Link to="/ragepower/roaring_drunk">roaring drunk</Link>, <Link to="/ragepower/staggering_drunk">staggering drunk</Link></p></>};
const _battle_scion = {title: "Battle Scion", jsx: <><h2 id="arc-skald-battle_scion-battle-scion">Battle Scion</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 48</Link><br/>The battle scion possesses a unique mixture of courtly grace alongside martial and magical prowess. She is a warrior-poet, as skilled with her words as she is with blades. Battle scions sometimes rule as queens over courts of brave knights who scour the world championing bold quests.</p>
<Ability id="arc-skald-battle_scion-courtly-presence-ex" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-skald-battle_scion-courtly-presence-ex" flavor="A battle scion's bearing radiates command and presence, allowing her to tower over her opponents in social situations.">Courtly Presence (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">The battle scion adds 1/2 her character level to <Link to="/skill/intimidate">Intimidate</Link> checks, and she starts any <Link to="/rule/verbal_duels">verbal duel</Link> with an extra edge that she can use for the presence tactic so long as she is not at a significant or extreme disadvantage in the duel. However, her bardic knowledge ability applies to only Knowledge (geography), Knowledge (history), Knowledge (local), and Knowledge (nobility).</Pair>
</Ability>
<Ability id="arc-skald-battle_scion-battle-prowess-ex" icon={["stairs-goal"]}>
<Pair single id="arc-skald-battle_scion-battle-prowess-ex">Battle Prowess (Ex)</Pair>
<Pair hl title="Replaces">Rage power</Pair>
<Pair title="Ability">Whenever a battle scion would gain a rage power from the skald's <em>rage power</em> ability (at 3rd level and every 3 skald levels thereafter), she can instead choose to gain a <Link to="/main/combat_feat">combat feat</Link> or <Link to="/main/teamwork_feat">teamwork feat</Link> for which she meets the prerequisites. Like rage powers she selects in this way, the battle scion can grant this feat to allies under the effect of <em>inspired rage,</em> as long as those allies also meet the prerequisites, but she must expend 2 rounds of <em>raging song</em> for each round in which she grants a combat feat or teamwork feat.</Pair>
<Pair title="Special">If the battle scion gains multiple feats from <em>battle prowess,</em> allies can use these feats to meet the prerequisites for other feats while they're affected by <em>battle prowess</em> (for example, a battle scion with <Link to="/feat/power_attack">Power Attack</Link> and <Link to="/feat/cleave">Cleave</Link> from <em>battle prowess</em> could grant both, allowing allies with a +1 base attack bonus and a Strength score of 13 to gain both, since they can use Power Attack to qualify for Cleave).</Pair>
</Ability>
<Ability id="arc-skald-battle_scion-raging-song-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-skald-battle_scion-raging-song-su">Raging Song (Su)</Pair>
<Pair title="Info">A battle scion gains the following <em>raging song.</em></Pair>
</Ability>
<Ability id="arc-skald-battle_scion-song-of-questing-su" extraClasses="subAbility" icon={["magic-swirl","hazard-sign"]}>
<Pair single id="arc-skald-battle_scion-song-of-questing-su">Song of Questing (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom, song of the fallen</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">The battle scion can spend 4 rounds of <em>raging song</em> to draw upon a target's honor, ambition, and sense of self in order to bind the target to an agreed-upon task, often a noble quest. This works like <Link to="/spell/geas_quest">geas/quest</Link>, except it applies only if the target is truly willing (not magically compelled or tricked), and the target automatically understands the full terms of the agreement before deciding whether he is willing.</Pair>
<Pair title="Info">The battle scion can offer a reward for the completion of the noble quest, but if she does so and fails to live up to her agreement, she becomes an ex-battle scion and loses all benefits gained from the archetype (she does not gain the abilities they replaced, either).</Pair>
<Pair title="At 14th Level">She can offer the same quest to up to one willing creature per skald level. If she does so, the effect ends for all creatures as soon as anyone completes the quest, though only the creature who completes it earns any offered reward.</Pair>
</Ability>
<Ability id="arc-skald-battle_scion-once-and-future-scion-su" icon={["magic-swirl","armor-upgrade"]}>
<Pair single id="arc-skald-battle_scion-once-and-future-scion-su" flavor="A battle scion becomes extremely difficult to kill.">Once and Future Scion (Su)</Pair>
<Pair hl title="Replaces">Master skald</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">Whenever she is slain, as long as her body isn't destroyed, she enters a deathlike sleep for 3 days, after which she returns to life as per <Link to="/spell/raise_dead">raise dead</Link>, except that it can restore her even if she was slain by a death effect. Spells that would restore her to life function as if she were dead during this time, allowing her to recover sooner.</Pair>
</Ability>
</>};
const _bekyar_demon_dancer = {title: "Bekyar Demon Dancer", jsx: <><h2 id="arc-skald-bekyar_demon_dancer-bekyar-demon-dancer">Bekyar Demon Dancer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 18</Link><br/>While the twisted power of the demon-worshiping Bekyar's skalds is great, it comes at a terrible price.</p>
<Ability icon={["skills"]} id="arc-skald-bekyar_demon_dancer-undefined">
<Pair id="arc-skald-bekyar_demon_dancer-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/perform">Perform</Link> (dance) (CHA)</Pair></Ability>
<Ability id="arc-skald-bekyar_demon_dancer-versatile-performance-ex" icon={["stairs-goal"]}>
<Pair single id="arc-skald-bekyar_demon_dancer-versatile-performance-ex">Versatile Performance (Ex)</Pair>
<Pair hl title="Alters">Versatile performance</Pair>
<Pair title="Info">A Bekyar demon dancer can choose Perform (dance) for the <em>versatile performance</em> class feature. Its associated skills are Acrobatics and Fly.</Pair>
</Ability>
<Ability id="arc-skald-bekyar_demon_dancer-fiendish-maw-su" icon={["stairs-goal"]}>
<Pair single id="arc-skald-bekyar_demon_dancer-fiendish-maw-su">Fiendish Maw (Su)</Pair>
<Pair hl title="Replaces">Rage power gained at 3rd level</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">Whenever a Bekyar demon dancer <em>inspires rage,</em> all who accept his rage gain a bite attack dealing 1d6 points of damage (for Medium allies; 1d4 points of damage if Small). If used as part of a full attack action, the bite attack is made at the creature's full base attack bonus - 5.</Pair>
<Pair title="At 7th Level">The bite damage increases to 1d8 (1d6 if Small).</Pair>
<Pair title="At 12th Level">The bite becomes 2d6 (1d8 if Small).</Pair>
<Pair title="At 17th Level">The bite increases to 3d6 (2d6 if Small).</Pair>
<Pair title="Special">The increases to bite damage effectively treat the affected creatures as though their sizes had increased by one size category, and so don't stack with any similar damage increases (such as the increase from the <Link to="/spell/strong_jaw">strong jaw</Link> spell) other than those due to an actual increase in size.</Pair>
</Ability>
<Ability id="arc-skald-bekyar_demon_dancer-abyssal-wrath-su" icon={["stairs-goal"]}>
<Pair single id="arc-skald-bekyar_demon_dancer-abyssal-wrath-su">Abyssal Wrath (Su)</Pair>
<Pair hl title="Alters">Rage powers gained at 6th and 9th levels</Pair>
<Pair title="At 6th Level">The Bekyar demon dancer gains the <Link to="/ragepower/fiend_totem">fiend totem</Link> rage power, even if he doesn't qualify for it.</Pair>
<Pair title="At 9th Level">He gains the <Link to="/ragepower/greater_fiend_totem">greater fiend totem</Link> rage power, ignoring the prerequisites.</Pair>
</Ability>
<Ability id="arc-skald-bekyar_demon_dancer-demonic-conquest-su" icon={["magic-swirl"]}>
<Pair single id="arc-skald-bekyar_demon_dancer-demonic-conquest-su" flavor="The Bekyar demon dancer's dances warp the minds of those who accept them even further.">Demonic Conquest (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">Whenever anyone affected by his <em>inspired rage</em> makes an attack against a creature, the urge to dominate this foe rises within the affected ally. The ally can attempt to resist this urge with a Will save (DC = 10 + 1/2 the skald's class level + his Charisma modifier). If she fails the save or chooses not to attempt one, the Strength and Constitution bonuses of the demon dancer's <em>inspire rage</em> increase by 2, and she must continue to attack the same target each round.</Pair>
<Pair title="Special">Once the target is defeated, she must burn or cut the symbol of a demon the Bekyar demon dancer worships into the target's flesh, which is a <strong className="hl">full-round action</strong>. The need to conquer and brand foes ends after this action or after the demon dancer stops performing, whichever comes first.</Pair>
</Ability>
</>};
const _belkzen_war_drummer = {title: "Belkzen War Drummer", jsx: <><h2 id="arc-skald-belkzen_war_drummer-belkzen-war-drummer">Belkzen War Drummer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 19</Link><br/>These fierce drummers are equally adept at tapping out a driving rhythm and rapping enemies upside the head with the same massive clubs they use to beat the crude hidecovered drums they carry into battle.</p>
<Ability id="arc-skald-belkzen_war_drummer-weapon-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-skald-belkzen_war_drummer-weapon-proficiency">Weapon Proficiency</Pair>
<Pair title="Info">A war drummer is proficient with all simple weapons and the <Link to="/eq-weapon/greatclub">greatclub</Link>.</Pair>
</Ability>
<Ability id="arc-skald-belkzen_war_drummer-fearsome-mien-ex" icon={["upgrade"]}>
<Pair single id="arc-skald-belkzen_war_drummer-fearsome-mien-ex">Fearsome Mien (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Passive Ability">A war drummer adds 1/2 his class level (minimum 1) to all Intimidate and Bluff skill checks.</Pair>
</Ability>
<Ability id="arc-skald-belkzen_war_drummer-deadly-rhythm-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-skald-belkzen_war_drummer-deadly-rhythm-ex">Deadly Rhythm (Ex)</Pair>
<Pair hl title="Replaces">Scribe Scroll</Pair>
<Pair title="At 1st Level">During his <em>raging song,</em> a Belkzen war drummer can draw <Link to="/eq-weapon/club">clubs</Link> and greatclubs as a <strong className="hl">free action</strong> as if he had the <Link to="/feat/quick_draw">Quick Draw</Link> feat.</Pair>
<Pair title="At 3rd Level">The war drummer gains a +1 bonus on damage rolls for attacks made with clubs or greatclubs.</Pair>
<Pair title="At 6th Level">The war drummer gains <Link to="/feat/improved_critical">Improved Critical</Link> with the club or the greatclub as a bonus feat.</Pair>
<Pair title="At 7th Level">This bonus becomes +2.</Pair>
<Pair title="At 11th Level">This bonus increases to +3.</Pair>
<Pair title="At 15th Level">This bonus becomes +4.</Pair>
<Pair title="At 19th Level">This bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-skald-belkzen_war_drummer-weapon-master-ex" icon={["stairs-goal"]}>
<Pair single id="arc-skald-belkzen_war_drummer-weapon-master-ex">Weapon Master (Ex)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A war drummer gains <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-skald-belkzen_war_drummer-raging-song-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-skald-belkzen_war_drummer-raging-song-su">Raging Song (Su)</Pair>
<Pair title="Info">A war drummer gains access to the following <em>raging song.</em></Pair>
</Ability>
<Ability id="arc-skald-belkzen_war_drummer-siege-drums-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-skald-belkzen_war_drummer-siege-drums-su">Siege Drums (Su)</Pair>
<Pair hl title="Replaces">7th-level versatile performance gained benefit</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">The Belkzen war drummer can shatter massive walls, doors, and other inanimate obstacles using his war drums. This ability works as the <Link to="/spell/shatter">shatter</Link> spell, except the drummer can increase the amount of damage and size of the object damaged by playing for longer periods. The siege drummer can affect objects weighing up to 10 pounds per level, plus an additional 5 pounds per level for each additional round he plays. The damage dealt increases by 2d6 per round (to a maximum of 20d6 after 10 rounds). The damage is dealt only after the drummer ceases playing.</Pair>
</Ability>
</>};
const _boaster = {title: "Boaster", jsx: <><h2 id="arc-skald-boaster-boaster">Boaster</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 84</Link><br/>Boasters use incredible tales and claims to challenge themselves and their allies to accomplish remarkable feats. With a properly delivered boast, a boaster can inspire listeners to attempt, and more often than not, succeed at stunts or tasks they may not have realized they were capable of doing.</p>
<Ability id="arc-skald-boaster-endurance" icon={["stairs-goal"]}>
<Pair single id="arc-skald-boaster-endurance">Endurance</Pair>
<Pair hl title="Replaces">Scribe Scroll</Pair>
<Pair title="Ability">The boaster gains <Link to="/feat/endurance">Endurance</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-skald-boaster-raging-song-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-skald-boaster-raging-song-su">Raging Song (Su)</Pair>
<Pair title="Info">A boaster gains access to the following <em>raging songs.</em></Pair>
</Ability>
<Ability id="arc-skald-boaster-song-of-endurance-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-skald-boaster-song-of-endurance-su">Song of Endurance (Su)</Pair>
<Pair hl title="Replaces">Uncanny dodge</Pair>
<Pair hl title="Alters">Song of marching</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">The boaster's <em>raging song</em> can inspire his allies to great feats of endurance. This <em>raging song</em> functions as <em>song of marching</em> except affected allies also gain the benefits of the Endurance feat in addition to the benefits of any of the following feats the boaster has (even if they don't meet the prerequisites): <Link to="/feat/deathless_initiate">Deathless Initiate</Link>, <Link to="/feat/deathless_master">Deathless Master</Link>, <Link to="/feat/deathless_zealot">Deathless Zealot</Link>, <Link to="/feat/diehard">Diehard</Link>, <Link to="/feat/fast_healer">Fast Healer</Link>, <Link to="/feat/heroic_defiance">Heroic Defiance</Link>, and <Link to="/feat/heroic_recovery">Heroic Recovery</Link>.</Pair>
</Ability>
<Ability id="arc-skald-boaster-song-of-surmounting-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-skald-boaster-song-of-surmounting-su">Song of Surmounting (Su)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">The boaster's <em>raging song</em> can inspire allies to move quickly and easily. By spending 1 round of <em>raging song,</em> the boaster can affect all allies within 90 feet for 1 hour. Affected allies gain a benefit according to the surrounding terrain (the benefits don't stack): a climb speed equal to half their base speed (forest, jungle, mountain, underground), a swim speed equal to their base speed (swamp, water), or a +10 foot enhancement bonus to their base speed (cold, desert, hill, plains, or urban). The skald must continue to perform the song for the remainder of the hour; otherwise, its effects end, but only 1 round of <em>raging song</em> is expended for that hour.</Pair>
<Pair title="At 13th Level">The speed or bonus granted by this ability doubles.</Pair>
<Pair title="At 19th Level">This ability grants triple the listed speed or bonus.</Pair>
</Ability>
<Ability id="arc-skald-boaster-frightful-boast-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-skald-boaster-frightful-boast-su">Frightful Boast (Su)</Pair>
<Pair hl title="Replaces">Song of the fallen</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">The boaster's <em>raging song</em> can frighten foes, as per the <Link to="/performance/frightening_tune">frightening tune</Link> bardic performance.</Pair>
</Ability>
<Ability id="arc-skald-boaster-rage-power-ex" icon={["broken-shield"]}>
<Pair single id="arc-skald-boaster-rage-power-ex">Rage Power (Ex)</Pair>
<Pair hl title="Alters">Rage powers</Pair>
<Pair title="Info">The boaster does not gain this ability until 4th level.</Pair>
</Ability>
<Ability id="arc-skald-boaster-greater-endurance" icon={["stairs-goal"]}>
<Pair single id="arc-skald-boaster-greater-endurance">Greater Endurance</Pair>
<Pair hl title="Replaces">Rage power gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">The boaster gains a bonus feat that he qualifies for. The feat must have Endurance as a prerequisite (such as Diehard or Fast Healer).</Pair>
</Ability>
<p><strong className="hl">The following rage powers complement the boaster archetype:</strong> <Link to="/ragepower/boasting_taunt">boasting taunt</Link>, <Link to="/ragepower/come_and_get_me">come and get me</Link>, <Link to="/ragepower/fearless_rage">fearless rage</Link>, <Link to="/ragepower/fierce_fortitude">fierce fortitude</Link>, <Link to="/ragepower/intimidating_glare">intimidating glare</Link>, <Link to="/ragepower/raging_climber">raging climber</Link>, <Link to="/ragepower/raging_flier">raging flier</Link>, <Link to="/ragepower/raging_leaper">raging leaper</Link>, <Link to="/ragepower/raging_swimmer">raging swimmer</Link>, <Link to="/ragepower/sprint">sprint</Link>, <Link to="/ragepower/strength_surge">strength surge</Link>, <Link to="/ragepower/swift_foot">swift foot</Link></p></>};
const _bold_schemer = {title: "Bold Schemer", jsx: <><h2 id="arc-skald-bold_schemer-bold-schemer">Bold Schemer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 48</Link><br/>The bold schemer combines wrath, wits, and daring to win battles and wars in unconventional ways, often through infiltration and deception. If raw force of arms is insufficient, she improvises ways to pull victory from the jaws of defeat.</p>
<Ability icon={["skills"]} id="arc-skald-bold_schemer-undefined">
<Pair id="arc-skald-bold_schemer-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/disable_device">Disable Device</Link> (DEX), <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> (DEX), <Link to="/skill/stealth">Stealth</Link> (DEX)</Pair>
<Pair title="Removed Skills">Knowledge (arcana), Knowledge (dungeoneering), Knowledge (planes)</Pair></Ability>
<Ability id="arc-skald-bold_schemer-bardic-knowledge" icon={["broken-shield"]}>
<Pair single id="arc-skald-bold_schemer-bardic-knowledge">Bardic knowledge</Pair>
<Pair hl title="Alters">Bardic knowledge</Pair>
<Pair title="Info">A bold schemer's <em>bardic knowledge</em> does not apply to Knowledge (arcana), Knowledge (dungeoneering), or Knowledge (planes).</Pair>
</Ability>
<Ability id="arc-skald-bold_schemer-skald-of-twists-and-turns-su" icon={["upgrade"]}>
<Pair single id="arc-skald-bold_schemer-skald-of-twists-and-turns-su" flavor="A bold schemer becomes increasingly adept at infiltration and devising cunning strategies to overcome enemy fortifications.">Skald of Twists and Turns (Su)</Pair>
<Pair hl title="Replaces">Uncanny dodge, improved uncanny dodge, damage reduction</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability"><p>A bold schemer can spend 8 hours observing a physical location (such as a fortress, a walled city, or perhaps even a section of an underground dungeon or cavern complex), contemplating methods to infiltrate the location and engage its defenders in battle in ways that subvert their defensive advantages.</p>
<p>At the end of the 8 hours, the bold schemer gains a +2 insight bonus on her Bluff, Disable Device, Disguise, Sleight of Hand, and Stealth checks while in that same physical location. The bonus lasts until the bold schemer observes a new location. While observing a location, the bold schemer must fully focus her attention; any distractions, such as engaging in combat, immediately ends the observation and the bold schemer must start a new period of observing a physical location to receive the bonus.</p>
</Pair>
<Pair title="At 8th Level">The insight bonus becomes +4.</Pair>
<Pair title="At 12th Level">The insight bonus increases to +6.</Pair>
<Pair title="At 16th Level">The insight bonus becomes +8.</Pair>
<Pair title="At 20th Level">The insight bonus increases to +10.</Pair>
</Ability>
<Ability id="arc-skald-bold_schemer-bold-strategy-su" icon={["upgrade"]}>
<Pair single id="arc-skald-bold_schemer-bold-strategy-su" flavor="A bold schemer can tailor her plans and observations so they are able to assist her allies as well.">Bold Strategy (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Passive Ability">As long as they can see or hear the bold schemer while inside the observed location, all of her allies gain half the insight bonus she gains from the <em>skald of twists and turns</em> ability.</Pair>
</Ability>
</>};
const _court_poet = {title: "Court Poet", jsx: <><h2 id="arc-skald-court_poet-court-poet">Court Poet</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court pg. 6</Link><br/>Many courts are places of artistic refinement, attracting those performers who wish to revel in an aristocratic art scene. Such artists may aim to become a darling of the court, focusing on the aesthetic requirements of a particular tradition as well as learning details about that court's history and culture. Court poets elevate the skald's love of history and poetry to an aristocratic ideal, captivating courts with complicated poetic traditions and inspiring others with their craft. Some court poets go on to create their own works, weaving their magic and force of personality into their unique performances.</p>
<Ability id="arc-skald-court_poet-raging-song-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-skald-court_poet-raging-song-su">Raging Song (Su)</Pair>
<Pair title="Info">A court poet gains the following <em>raging songs,</em> allowing her to use oratory, music, and other performances to elevate the aesthetic sensibilities of her allies.</Pair>
</Ability>
<Ability id="arc-skald-court_poet-insightful-contemplation-su" extraClasses="subAbility" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-skald-court_poet-insightful-contemplation-su">Insightful Contemplation (Su)</Pair>
<Pair hl title="Replaces">Inspired rage</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">Affected allies gain a +2 morale bonus to Intelligence and Charisma and a +1 morale bonus on Will saving throws, but they also take a -1 penalty to AC. While under the effects of <em>insightful contemplation,</em> allies other than the court poet can't use any Strength-based skills or make any physical effort that requires a Constitution check.</Pair>
<Pair title="At 4th Level">The song's bonus on Will saves increases to +2.</Pair>
<Pair title="At 8th Level">The song's bonuses to Intelligence and Charisma become +4. The song's bonus on Will saves increases to +3.</Pair>
<Pair title="At 12th Level">The song's bonus on Will saves increases to +4.</Pair>
<Pair title="At 16th Level">The song's bonuses to Intelligence and Charisma become +6. The song's bonus on Will saves increases to +5.</Pair>
<Pair title="At 20th Level">The song's bonus on Will saves increases to +6.</Pair>
<Pair title="Special">Unlike the barbarian's rage ability, those affected are not fatigued after the song ends.</Pair>
</Ability>
<Ability id="arc-skald-court_poet-song-of-inspiration-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-skald-court_poet-song-of-inspiration-su" flavor={<>A court poet can use <em>raging song</em> to inspire her allies to greater mental clarity.</>}>Song of Inspiration (Su)</Pair>
<Pair hl title="Replaces">Song of strength</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">Once each round while the court poet uses this performance, allies within 60 feet who can hear her can add 1/2 the court poet's skald level to a single Wisdom check or Wisdom-based skill check.</Pair>
</Ability>
<Ability id="arc-skald-court_poet-handling-the-crowd-ex" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-skald-court_poet-handling-the-crowd-ex">Handling the Crowd (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A court poet gains a +1 bonus to AC and on Perform checks when adjacent to two or more creatures. In addition, her movement is not impeded by crowds and she gains a bonus equal to 1/2 her skald level on Diplomacy checks to influence crowds.</Pair>
</Ability>
</>};
const _dragon_skald = {title: "Dragon Skald", jsx: <><h2 id="arc-skald-dragon_skald-dragon-skald">Dragon Skald</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 19</Link><br/>The Ulfen prize skalds on sea raids and linnorm hunts. Dragon skald performances involve song, whistling, or blowing mighty horns, and viking sailors often talk about having a skald along to whistle up a wind or sing away the mists on the morning of a momentous raid.</p>
<Ability id="arc-skald-dragon_skald-wind-whistler-su" icon={["spell-book"]}>
<Pair single id="arc-skald-dragon_skald-wind-whistler-su">Wind Whistler (Su)</Pair>
<Pair hl title="Replaces">Scribe Scroll</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A dragon skald adds <Link to="/spell/alter_winds">alter winds</Link>, <Link to="/spell/fog_cloud">fog cloud</Link>, and <Link to="/spell/obscuring_mist">obscuring mist</Link> to his class spell list, at the same levels the wizard gains them. He still must add these spells to his spells known as normal.</Pair>
</Ability>
<Ability id="arc-skald-dragon_skald-sea-legs-ex" icon={["upgrade"]}>
<Pair single id="arc-skald-dragon_skald-sea-legs-ex">Sea Legs (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Passive Ability">A dragon skald adds 1/2 his class level (minimum 1) on all Profession (sailor) checks, Survival checks while at sea, Acrobatics and Climb checks made while aboard a boat, and Swim checks.</Pair>
</Ability>
<Ability id="arc-skald-dragon_skald-fearless-raider-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-skald-dragon_skald-fearless-raider-ex" flavor="The dragon skald becomes resistant to fear effects.">Fearless Raider (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">The dragon skald gains a +4 bonus on saving throws against fear effects, and DCs to affect the dragon skald with the Intimidate skill increase by 4.</Pair>
</Ability>
<Ability id="arc-skald-dragon_skald-raging-song-su" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-skald-dragon_skald-raging-song-su">Raging Song (Su)</Pair>
<Pair title="Info">A dragon skald gains access to the following <em>raging song.</em></Pair>
</Ability>
<Ability id="arc-skald-dragon_skald-glorious-epic-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-skald-dragon_skald-glorious-epic-su">Glorious Epic (Su)</Pair>
<Pair hl title="Replaces">Song of marching</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A dragon skald learns how to truly extol the virtues and prowess of the heroic figures in his epic tales. By performing for 10 minutes and expending 1 round of <em>raging song,</em> the dragon skald can influence opinions positively towards a heroic subject of the dragon skald's choice. If the subject of the epic attempts a Diplomacy or Intimidate check against anyone who listened to the full performance, he receives a circumstance bonus on that check equal to the Will save bonus granted by the dragon skald's <em>inspired rage.</em></Pair>
</Ability>
</>};
const _elegist = {title: "Elegist", jsx: <><h2 id="arc-skald-elegist-elegist">Elegist</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_spiral_of_bones_4">Pathfinder Spiral of Bones #4 pg. 29</Link><br/>Some skalds internalize the saddest and must mournful of stories, so much that they are able to manifest the emotions caused by these tales in physical form. These spirits are able to inflict the misery onto the elegist's enemies.</p>
<Ability id="arc-skald-elegist-melancholic-apparition-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-skald-elegist-melancholic-apparition-su">Melancholic Apparition (Su)</Pair>
<Pair hl title="Replaces">Raging song and all related performances, rage powers</Pair>
<Pair title="Usage">An elegist can keep his apparition manifested for a total number of rounds each day equal to 1 + twice his skald level + his Charisma modifier.<ByLevelPop levels={[[1,3],[2,5],[3,7],[4,9],[5,11],[6,13],[7,15],[8,17],[9,19],[10,21],[11,23],[12,25],[13,27],[14,29],[15,31],[16,33],[17,35],[18,37],[19,39],[20,41]]} preText="Charisma modifier + " unit="round" postText="/day" /></Pair>
<Pair title="Ability">By using music, oration, and similar performances, an elegist can call forth a physical manifestation of the sorrow of his tales. This functions as a <Link to="/class/spiritualist">spiritualist's</Link> phantom with the <Link to="/emotionalfocus/despair">despair</Link> focus. He can manifest his melancholic apparition as a <strong className="hl">standard action</strong> and dismiss it as a <strong className="hl">free action</strong>. The <Link to="/sidekick/phantom">phantom</Link> appears adjacent to the skald and can act immediately. The melancholic apparition is immediately dismissed if the elegist is killed, paralyzed, stunned, knocked unconscious, or otherwise prevented from taking a <strong className="hl">free action</strong> each round to maintain the performance that keeps the phantom manifested.</Pair>
<Pair title="Special">Unlike a spiritualist's phantom, a melancholic apparition can't be harbored in the elegist's consciousness. When manifested, the melancholic apparition has the same number of hit points it had when previously manifested that day. It regains all of its hit points when the elegist regains his spells for the day. If the melancholic apparition is slain, the elegist can manifest it again in the same day by spending a number of additional rounds of this ability equal to <Link to="/misc/half">half</Link> his skald level (minimum 1); the melancholic apparition returns with half its normal total of hit points.</Pair>
</Ability>
<Ability id="arc-skald-elegist-phantom" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-skald-elegist-phantom" flavor="Relevant text from the spiritualist ability.">Phantom</Pair>
<Pair title="Ability"><p>You can manifest the phantom as an ectoplasmic or incorporeal entity. A phantom has the same alignment as you, and it can speak all the languages you can. Each phantom has an <Link to="/ability/emotional_focus">emotional focus</Link> - a powerful emotion based on some experience in life that keeps it tethered to the Material and Ethereal planes. This emotional focus also grants the phantom abilities that it can use while manifested. The type of each ability and its power are determined by your level. The emotional focus determines which bonus skill ranks the phantom gains. It also determines the saving throws of the manifested phantom and the special abilities the phantom gains as it increases in level.</p>
<p>The phantom does not heal naturally, and can be healed only with magic or by being tended to with the Heal skill while fully manifested in ectoplasmic form. If the phantom is banished to the Ethereal Plane, it can't manifest again for 24 hours.</p>
<p>While fully manifested, a phantom can't be returned to the Ethereal Plane by means of <Link to="/spell/dispel_magic">dispel magic</Link>, but spells such as <Link to="/spell/dismissal">dismissal</Link> and <Link to="/spell/banishment">banishment</Link> work normally.</p>
<p>Fully manifested phantoms can wear armor and use items (though not wield weapons) appropriate to their forms. Any items worn, carried, or held by a phantom are dropped when the phantom demanifests, and must be retrieved and donned anew if the phantom wishes to use them when it fully manifests in the future.</p>
<p>Phantoms are self-involved, even jealous, creatures that do not play well with other summoned companions. A phantom refuses to manifest in the presence of an eidolon or shadow you have summoned. Furthermore, if a phantom is manifested when such a creature is summoned, it immediately retreats and will not manifest again until the eidolon or shadow is dismissed.</p>
<p>A fully manifested phantom's abilities, feats, Hit Dice, saving throws, and skills are tied to your class level and increase as you gain levels.</p>
</Pair>
<Pair title="Special">When the phantom is fully manifested, you can change the form of the phantom's manifestation (either from ectoplasmic to incorporeal or vice versa) as a <strong className="hl">full-round action</strong> that provokes attacks of opportunity. A fully manifested phantom is treated as a summoned creature from the <Link to="/rule/ethereal_plane">Ethereal Plane</Link>, except it is not sent back to the Ethereal Plane until it is reduced to a negative amount of hit points equal to or greater than its Constitution score.</Pair>
</Ability>
<Ability id="arc-skald-elegist-despair" extraClasses="subAbility" icon={["upgrade","armor-upgrade","armor-downgrade"]}>
<Pair single id="arc-skald-elegist-despair" flavor="Relevant text from the emotional focus.">Despair</Pair>
<Pair title="Info">Despair phantoms often appear twisted or wounded, showing the grisly circumstances of their demise. Their coloration tends to have a grayish or sickly green cast. When they speak, they do so in terrifying whispers or high-pitched screeches.</Pair>
<Pair title="Passive Ability">The phantom gains a number of ranks in Intimidate and Stealth equal to its number of Hit Dice. Its <Link to="/misc/good_saving_throws">good saving throws</Link> are Fortitude and Will. The phantom gains a +2 bonus on attack and damage rolls against creatures that are shaken, frightened, panicked, cowering, or subject to effects such as <em>aura of despair</em> or <em>crushing despair.</em></Pair>
<Pair title="Ability"><em>"Miserable Strike"</em> - If the phantom hits a creature with a slam attack, that creature must succeed at a Will saving throw (DC = 10 + 1/2 the phantom's Hit Dice + the phantom's Charisma modifier) or take a -2 penalty on attack and damage rolls for 1 round. This is a mind-affecting fear and emotion effect. Penalties from multiple hits don't stack with themselves.</Pair>
<Pair title="At 7th Level">As a <strong className="hl">swift action</strong>, the phantom can emit a 10-foot <em>aura of despair.</em> Enemies within the aura take a -2 penalty on all saving throws. This is a fear effect. Deactivating the aura is a <strong className="hl">free action</strong>.</Pair>
<Pair title="At 12th Level">Three times per day as a <strong className="hl">standard action</strong>, the phantom can emit a shout that acts as <Link to="/spell/crushing_despair">crushing despair</Link>. The phantom uses its Hit Dice as its caster level for the effect, and the DC of the effect equals 10 + 1/2 the phantom's Hit Dice + the phantom's Charisma modifier.</Pair>
<Pair title="At 17th Level">If the phantom hits with its slam attack, the creature hit doesn't get a save to resist the effects of <em>miserable strike.</em></Pair>
</Ability>
<Ability id="arc-skald-elegist-steady-hearted-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-skald-elegist-steady-hearted-ex">Steady Hearted (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An elegist receives a +4 bonus to saving throws against emotion effects.</Pair>
</Ability>
<Ability id="arc-skald-elegist-somber-damage-reduction-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-skald-elegist-somber-damage-reduction-ex">Somber Damage Reduction (Ex)</Pair>
<Pair hl title="Alters">Damage reduction</Pair>
<Pair title="At 9th Level">The damage reduction an elegist gains at 9th level is shared by his melancholic apparition when it is manifested.</Pair>
</Ability>
<Ability id="arc-skald-elegist-master-elegist-su" icon={["upgrade"]}>
<Pair single id="arc-skald-elegist-master-elegist-su">Master Elegist (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">The elegist can manifest his melancholic apparition as a <strong className="hl">swift action</strong>. If it is slain. the elegist can manifest a new phantom in the same day with no additional expenditure of rounds of the melancholic apparition ability, and the new phantom has all of its hit points.</Pair>
</Ability>
</>};
const _fated_champion = {title: "Fated Champion", jsx: <><h2 id="arc-skald-fated_champion-fated-champion">Fated Champion</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 114</Link><br/>Many cultures see fate as a limit that is both stifling and unwanted, regardless of the destiny that lurks in the days and years ahead. Among cultures where skalds are the keepers of lore and wisdom, there are those who learn to read the winds of fate and take up the mantle of the fated champion, knowing and embracing their destined paths with strength borne of conviction.</p>
<Ability id="arc-skald-fated_champion-watcher-of-the-weave-ex" icon={["upgrade"]}>
<Pair single id="arc-skald-fated_champion-watcher-of-the-weave-ex" flavor="A fated champion learns to see the tapestry of events moments before it is woven.">Watcher of the Weave (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">He gains an insight bonus on initiative checks equal to 1/2 his skald level.</Pair>
</Ability>
<Ability id="arc-skald-fated_champion-far-seer-su" icon={["magic-swirl"]}>
<Pair single id="arc-skald-fated_champion-far-seer-su">Far Seer (Su)</Pair>
<Pair hl title="Alters">Spell kenning</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A fated champion learns a method of <em>spell kenning</em> that is especially suited for divining and understanding the future, but not for directly harming opponents. For the purpose of determining what level spell slot he expends when using <em>spell kenning,</em> the skald treats the spell level of spells that predict the future (such as <Link to="/spell/augury">augury</Link> and <Link to="/spell/divination">divination</Link>) as one spell level lower (minimum spell level 1st), and treats the spell level of spells that deal damage as one spell level higher.</Pair>
</Ability>
<Ability id="arc-skald-fated_champion-shield-of-foresight-su" icon={["armor-upgrade"]}>
<Pair single id="arc-skald-fated_champion-shield-of-foresight-su" flavor="A fated champion's certainty of his own fate grants him the ability to stare down fear and remain unbowed.">Shield of Foresight (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom <em>raging song</em></Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Passive Ability">When using <em>raging song,</em> he is immune to fear effects, and allies affected by his <em>raging song</em> gain a +5 bonus on saves attempted against fear effects.</Pair>
</Ability>
<Ability id="arc-skald-fated_champion-not-this-day-su" icon={["rolling-dices"]}>
<Pair single id="arc-skald-fated_champion-not-this-day-su" flavor="The fated champion gains the ability to reweave the strands of fate.">Not This Day (Su)</Pair>
<Pair hl title="Replaces">Master skald</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Immediate Action">He can expend 10 rounds of <em>raging song</em> to either reroll a saving throw or force an opponent to reroll an attack roll. The decision to use this ability must be made before the results of the initial roll are revealed, and the champion or his opponent must take the result of the reroll.</Pair>
</Ability>
<p><strong className="hl">The following rage powers complement the fated champion archetype:</strong> <Link to="/ragepower/boasting_taunt">boasting taunt</Link>, <Link to="/ragepower/clear_mind">clear mind</Link>, <Link to="/ragepower/eater_of_magic">eater of magic</Link>, <Link to="/ragepower/fierce_fortitude">fierce fortitude</Link>, <Link to="/ragepower/flesh_wound">flesh wound</Link>, <Link to="/ragepower/guarded_life">guarded life</Link>, <Link to="/ragepower/intimidating_glare">intimidating glare</Link>, <Link to="/ragepower/cairn_linnorm_death_curse">cairn linnorm death curse</Link>, <Link to="/ragepower/tarn_linnorm_death_curse">tarn linnorm death curse</Link>, <Link to="/ragepower/renewed_vitality">renewed vitality</Link></p></>};
const _herald_of_the_horn = {title: "Herald of the Horn", jsx: <><h2 id="arc-skald-herald_of_the_horn-herald-of-the-horn">Herald of the Horn</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 115</Link><br/>Even the loudest voice can often times be drowned out by the din of battle. Whether with the polished metal trumpet of a standing army or the crude curved animal horn of savage raiders, a herald of the horn sounds his <em>raging song</em> with thunderous blasts, which can bolster allies or shatter castle walls.</p>
<Ability id="arc-skald-herald_of_the_horn-arcane-bond-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-skald-herald_of_the_horn-arcane-bond-ex">Arcane Bond (Ex)</Pair>
<Pair hl title="Replaces">Scribe Scroll</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A herald of the horn forms a powerful bond with a horn (<Link to="/eq-misc/mwk_musical_instrument">musical instrument</Link>). This functions like an <Link to="/sorcbloodline/arcane">arcane</Link> bloodline <Link to="/class/sorcerer">sorcerer's</Link> arcane bond with an object. Like a weapon, wand, or staff, the horn must be held in one hand when the herald of the horn casts skald spells.</Pair>
</Ability>
<Ability id="arc-skald-herald_of_the_horn-arcane" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-skald-herald_of_the_horn-arcane" flavor="Relevant text from the sorcerer bloodline.">Arcane</Pair>
<Pair title="Ability">Your sorcerer levels stack with any wizard levels you possess when determining the powers of your bonded object. Once per day, your bonded item allows you to cast any one of your spells known (unlike a wizard's bonded item, which allows him to cast any one spell in his spellbook).</Pair>
</Ability>
<Ability id="arc-skald-herald_of_the_horn-bonded-object" extraClasses="subAbility" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-skald-herald_of_the_horn-bonded-object" flavor="Relevant text from the wizard ability.">Bonded Object</Pair>
<Pair title="Ability"><p>You begin play with a bonded object at no cost. This object is always masterwork quality. If you attempt to cast a spell without your bonded object in hand, you must make a <Link to="/rule/concentration">concentration</Link> check or lose the spell. The DC for this check is equal to 20 + the spell's level.</p>
<p>A bonded object can be used once per day to cast any one spell that you have in your spellbook and are capable of casting, even if the spell is not prepared. This spell is treated like any other spell cast by you, including casting time, duration, and other effects dependent on your level. This spell cannot be modified by metamagic feats or other abilities.</p>
<p>You can add additional magic abilities to your bonded object as if you have the required item creation feats and if you meet the level prerequisites of the feat. For example, a wizard with a bonded dagger must be at least 5th level to add magic abilities to the dagger (see <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>). The magic properties of a bonded object, including any magic abilities added to the object, only function for the wizard who owns it. If a bonded object's owner dies, or the item is replaced, the object reverts to being an ordinary masterwork item of the appropriate type.</p>
<p>If a bonded object is damaged, it is restored to full hit points the next time you prepare your spells. If the object of an arcane bond is lost or destroyed, it can be replaced after 1 week in a special ritual that costs 200 gp per wizard level plus the cost of the masterwork item. This ritual takes 8 hours to complete. Items replaced in this way do not possess any of the additional enchantments of the previous bonded item. You can designate an existing magic item as your bonded item. This functions in the same way as replacing a lost or destroyed item except that the new magic item retains its abilities while gaining the benefits and drawbacks of becoming a bonded item.</p>
</Pair>
</Ability>
<Ability id="arc-skald-herald_of_the_horn-rousing-retort-su" icon={["armor-upgrade"]}>
<Pair single id="arc-skald-herald_of_the_horn-rousing-retort-su" flavor={<>A herald of the horn can use <em>raging song</em> to free allies from enchantment effects and fear.</>}>Rousing Retort (Su)</Pair>
<Pair hl title="Replaces">The first daily use of spell kenning gained at 5th level</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">When beginning a <em>raging song,</em> he can expend 4 rounds of that ability to grant all allies within 60 feet a new saving throw against an ongoing enchantment or fear effect. The allies gain a +2 bonus on this new saving throw.</Pair>
</Ability>
<Ability id="arc-skald-herald_of_the_horn-horn-call-su" icon={["upgrade"]}>
<Pair single id="arc-skald-herald_of_the_horn-horn-call-su" flavor="A herald's horn enhances his sonic spells.">Horn Call (Su)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">If a skald spell with the sonic descriptor is cast using the horn, its DC increases by 1.</Pair>
<Pair title="At 13th Level">The DC now increases by 2.</Pair>
<Pair title="At 19th Level">The DC now increases by 3.</Pair>
</Ability>
<Ability id="arc-skald-herald_of_the_horn-crumbling-blast-su" icon={["magic-swirl"]}>
<Pair single id="arc-skald-herald_of_the_horn-crumbling-blast-su" flavor="A herald of the horn can use his horn to create a devastating shock wave of energy.">Crumbling Blast (Su)</Pair>
<Pair hl title="Replaces">The second and third daily uses of spell kenning gained at 11th and 17th levels</Pair>
<Pair title="At 11th Level">Once per day, he can sound a note on the horn that functions like a <Link to="/magic-wondrous/horn_of_blasting">horn of blasting</Link> (DC = 10 + 1/2 the herald of the horn's level + his Charisma bonus).</Pair>
<Pair title="At 17th Level">The herald of the horn can use this ability twice per day and it functions like a <Link to="/magic-wondrous/greater_horn_of_blasting">greater horn of blasting</Link>.</Pair>
<Pair title="Special">Unlike an actual horn of blasting, this ability does not carry the risk of destroying the horn.</Pair>
</Ability>
<p><strong className="hl">The following rage powers complement the herald of the horn archetype:</strong> <Link to="/ragepower/battle_roar">battle roar</Link>, <Link to="/ragepower/energy_absorption">energy absorption</Link>, <Link to="/ragepower/energy_eruption">energy eruption</Link>, <Link to="/ragepower/fearless_rage">fearless rage</Link>, <Link to="/ragepower/knockback">knockback</Link>, <Link to="/ragepower/knockdown">knockdown</Link>, <Link to="/ragepower/smasher">smasher</Link>, <Link to="/ragepower/swift_foot">swift foot</Link></p></>};
const _hunt_caller = {title: "Hunt Caller", jsx: <><h2 id="arc-skald-hunt_caller-hunt-caller">Hunt Caller</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 85</Link><br/>Hunt callers are skalds whose songs draw their allies into the animal world. They can invoke the inner beasts of those who observe their supernatural performances - a talent that causes many to mistake the hunt caller and her allies for lycanthropes or other shapechanging creatures.</p>
<Ability id="arc-skald-hunt_caller-raging-song-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-skald-hunt_caller-raging-song-su">Raging Song (Su)</Pair>
<Pair title="Info">A hunt caller gains access to the following <em>raging songs.</em></Pair>
</Ability>
<Ability id="arc-skald-hunt_caller-song-of-the-senses-su" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-skald-hunt_caller-song-of-the-senses-su" flavor={<>The hunt caller's <em>raging song</em> unlocks animalistic senses in her allies.</>}>Song of the Senses (Su)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">By spending 1 round of <em>raging song,</em> the hunt caller can affect all allies within 60 feet for 1 hour. The allies gain low-light vision and a +2 competence bonus on Perception and Survival checks. If an ally already has low-light vision, the range doubles. The skald must continue to perform the song for the remainder of the hour; otherwise, its effects end, but only 1 round of <em>raging song</em> is expended for that hour.</Pair>
</Ability>
<Ability id="arc-skald-hunt_caller-call-of-the-wild-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-skald-hunt_caller-call-of-the-wild-su">Call of the Wild (Su)</Pair>
<Pair hl title="Replaces">Song of strength, song of the fallen, rage power gained at 18th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">The hunt caller's <em>raging song</em> can transform herself and her allies within 60 feet into animalistic shapes, as per <Link to="/spell/beast_shape_i">beast shape I</Link> (Small animals only) at her caster level. The same transformation applies to all targets. By spending 1 round of <em>raging song</em> per target, the hunt caller can affect any number of allies within 60 feet for 1 hour. When in animal form, the hunt caller is treated as able to speak normally for the purpose of using <em>raging song,</em> but not for using other abilities that require speech (such as spellcasting). The skald must continue to perform the song for the remainder of the hour; otherwise, its effects end, but only 1 round of <em>raging song</em> per target is expended for that hour.</Pair>
<Pair title="At 10th Level">The hunt caller can instead choose a Medium animal shape.</Pair>
<Pair title="At 14th Level">The hunt caller can choose <Link to="/spell/shapechangers_gift">shapechanger's gift</Link> or the effects of <Link to="/spell/beast_shape_ii">beast shape II</Link>.</Pair>
<Pair title="At 18th Level">She can choose the effects of <Link to="/spell/beast_shape_iii">beast shape III</Link>.</Pair>
</Ability>
<Ability id="arc-skald-hunt_caller-wilderness-magic-su" icon={["spell-book"]}>
<Pair single id="arc-skald-hunt_caller-wilderness-magic-su">Wilderness Magic (Su)</Pair>
<Pair hl title="Replaces">Spell kenning</Pair>
<Pair title="At 5th Level">The hunt caller adds two spells of any level she can cast from the <Link to="/main/druid_spell">druid spell list</Link> to her class spell list and list of skald spells known.</Pair>
<Pair title="At 11th Level">She adds two more spells.</Pair>
<Pair title="At 17th Level">She adds two more spells.</Pair>
</Ability>
<Ability id="arc-skald-hunt_caller-inspire-scent-ex" icon={["stairs-goal"]}>
<Pair single id="arc-skald-hunt_caller-inspire-scent-ex">Inspire Scent (Ex)</Pair>
<Pair hl title="Replaces">Rage power gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">The hunt caller gains the <Link to="/ragepower/scent">scent</Link> rage power. Her <em>song of the senses</em> and <em>inspired rage raging songs</em> both grant affected allies this rage power.</Pair>
</Ability>
<p><strong className="hl">The following rage powers complement the hunt caller archetype:</strong> <Link to="/ragepower/animal_fury">animal fury</Link>, <Link to="/ragepower/battle_roar">battle roar</Link>, <Link to="/ragepower/beast_totem">beast totem</Link> (lesser, normal, and greater), <Link to="/ragepower/intimidating_glare">intimidating glare</Link>, <Link to="/ragepower/low_light_vision">low-light vision</Link>, <Link to="/ragepower/no_escape">no escape</Link>, <Link to="/ragepower/primal_scent">primal scent</Link>, <Link to="/ragepower/quick_reflexes">quick reflexes</Link>, <Link to="/ragepower/sprint">sprint</Link>, <Link to="/ragepower/swift_foot">swift foot</Link></p></>};
const _instigator = {title: "Instigator", jsx: <><h2 id="arc-skald-instigator-instigator">Instigator</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 49</Link><br/>The instigator influences the will of the people, turning them toward his own purposes. Regardless of whether what the instigator says is true or not, he inflames emotions in others and suspends their reason. Instigators are often revolutionaries, political or otherwise, but they might also be warmongering firebrands or wicked souls who spread prejudice against others.</p>
<Ability id="arc-skald-instigator-raging-song-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-skald-instigator-raging-song-su">Raging Song (Su)</Pair>
<Pair title="Info">An instigator gains the following <em>raging songs.</em></Pair>
</Ability>
<Ability id="arc-skald-instigator-song-of-rabble-rousing-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-skald-instigator-song-of-rabble-rousing-sp">Song of Rabble-Rousing (Sp)</Pair>
<Pair hl title="Replaces">Spell kenning</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">The instigator can perform for 1 full round and spend 4 rounds of <em>raging song.</em> This affects those who hear the song for up to 1 hour as per <Link to="/spell/enthrall">enthrall</Link>.</Pair>
</Ability>
<Ability id="arc-skald-instigator-song-of-riot-sp-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-skald-instigator-song-of-riot-sp-su" flavor="The instigator can fill the hearts of his listeners with hatred and rouse them into a frenzy.">Song of Riot (Sp, Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">He can use this performance on all targets with fewer than 4 Hit Dice and a Wisdom score lower than 16 who are currently <em>enthralled,</em> without disrupting the <em>enthrall</em> effect (even if a creature succeeds at its saving throw). This ability requires a <strong className="hl">standard action</strong> to activate and costs 4 additional rounds of <em>raging song.</em></Pair>
<Pair title="Special">Enthralled creatures must each attempt a new saving throw against an effect that functions as the <Link to="/spell/foster_hatred">foster hatred</Link> spell, except that, unlike with the spell, the instigator is free to choose subgroups, organizations, religions, or the like regardless of the targets' races. Creatures that fail the saving throw or choose to forego it also gain the effects of the instigator's <em>raging song</em> whenever they attack the target of their hatred, for as long as the <em>foster hatred</em> effect lasts; however, they do not gain the effects of the instigator's rage powers when they're under the effects of <em>raging song</em> in this way.</Pair>
</Ability>
<Ability id="arc-skald-instigator-revolutionary-heart-su" icon={["armor-upgrade"]}>
<Pair single id="arc-skald-instigator-revolutionary-heart-su" flavor="An instigator's tumultuous mastery of demagoguery and revolution makes it difficult for others' compulsions to sway him.">Revolutionary Heart (Su)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">Once per day, when he fails a saving throw against a compulsion effect, he can attempt another saving throw after 1 time increment (1 round if the effect is measured in rounds, 1 minute if the effect is measured in minutes, 10 minutes if the spell is measured in 10-minute increments, and so on).</Pair>
<Pair title="At 13th Level">The skald can use this ability 2 times/day.</Pair>
<Pair title="At 19th Level">The skald can use this ability 3 times/day.</Pair>
</Ability>
</>};
const _red_tongue = {title: "Red Tongue", jsx: <><h2 id="arc-skald-red_tongue-red-tongue">Red Tongue</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 26</Link><br/>In the young tengu nation of Kwanlai, politicos argue endlessly over how best to rule and guide a people who have been parasites and vassals to other nations for millennia. The tengu tendency toward dramatic flourishes and rhetoric only complicates this debate, creating an environment in which political clubs led by hot-blooded firebrands - referred to as red tongues in polite company - dominate the political scene by swaying emotions in the moment and wielding magic in the shadows. Many political debates in Hisuikarasu end in violent brawls or daring duels.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-skald-red_tongue--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/tengu">Tengu</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-skald-red_tongue-great-orator" icon={["broken-shield"]}>
<Pair single id="arc-skald-red_tongue-great-orator">Great Orator</Pair>
<Pair hl title="Alters">Raging song, versatile performance</Pair>
<Pair title="Info">A red tongue can activate his <em>raging song</em> performances only by using the Perform (oratory) skill.</Pair>
<Pair title="At 2nd Level">He must select Perform (oratory) as his versatile performance choice.</Pair>
</Ability>
<Ability id="arc-skald-red_tongue-seed-of-discord-su" icon={["spell-book"]}>
<Pair single id="arc-skald-red_tongue-seed-of-discord-su" flavor="The fiery outlook of the red tongue imparts instinctual knowledge to invest arcane energy into his proclamations and denouncements.">Seed of Discord (Su)</Pair>
<Pair title="Ability">The red tongue gains the following bonus spells known at the listed spell level as he reaches the appropriate level to cast each spell.</Pair>
<Pair plain title="1st"><Link to="/spell/doom">Doom</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/castigate">Castigate</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/charm_monster">Charm monster</Link></Pair>
<Pair plain title="4th"><Link to="/spell/denounce">Denounce</Link></Pair>
<Pair plain title="5th"><Link to="/spell/greater_command">Greater command</Link></Pair>
<Pair plain title="6th"><Link to="/spell/mass_eagles_splendor">Mass eagle's splendor</Link></Pair>
</Ability>
<Ability id="arc-skald-red_tongue-rile-ex" icon={["upgrade"]}>
<Pair single id="arc-skald-red_tongue-rile-ex" flavor="The red tongue is particularly skilled at provoking others to action, even when ignorant on a subject.">Rile (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Passive Ability">He adds 1/2 his skald level on Bluff checks to deceive or conceal his motives and on Intimidate checks to improve a creature's attitude.</Pair>
</Ability>
<Ability id="arc-skald-red_tongue-rogue-talents-ex" icon={["stairs-goal"]}>
<Pair single id="arc-skald-red_tongue-rogue-talents-ex">Rogue Talents (Ex)</Pair>
<Pair hl title="Replaces">Versatile performance selections normally gained at 7th, 12th, and 17th levels</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">The red tongue learns a <Link to="/ability/rogue_talent">rogue talent</Link> of his choice, treating his skald level as his rogue level. He cannot select a talent that requires or modifies a class feature he does not have (such as sneak attack), and he must meet all other prerequisites.</Pair>
<Pair title="At 12th Level">He gains a new rogue talent, following the rules above.</Pair>
<Pair title="At 17th Level">He gains a new rogue talent, following the rules above.</Pair>
</Ability>
<Ability id="arc-skald-red_tongue-duplicitous-rhetoric-su" icon={["stairs-goal"]}>
<Pair single id="arc-skald-red_tongue-duplicitous-rhetoric-su">Duplicitous Rhetoric (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">When a red tongue begins a <em>raging song,</em> he can select a single rogue talent he knows and grant it to all creatures under the influence of his <em>inspired rage.</em></Pair>
<Pair title="Special">If a rogue talent is limited to a certain number of uses per day, each creature affected is limited to a single use and cannot gain additional uses from a <em>raging song</em> for 24 hours, even if the red tongue ends his <em>raging song</em> and starts again.</Pair>
</Ability>
</>};
const _serpent_herald = {title: "Serpent Herald", jsx: <><h2 id="arc-skald-serpent_herald-serpent-herald">Serpent Herald</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 28</Link><br/>Warrior bands devoted to <Link to="/faith/ragadahn">Ragadahn</Link> are often led by a serpent herald, whose deep roars shake the earth itself. Rumors tell of waves of snakes slithering forth from their nests in awe as these bellowing commanders take on serpentine features.</p>
<Ability id="arc-skald-serpent_herald-serpentine-rage-su" icon={["upgrade","armor-upgrade","stairs-goal","mailed-fist"]}>
<Pair single id="arc-skald-serpent_herald-serpentine-rage-su">Serpentine Rage (Su)</Pair>
<Pair hl title="Replaces">Rage power gained at 3rd level</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability"><p>A serpent herald can call down Ragadahn's features onto his allies. Allies affected by the serpent herald's <em>inspired rage</em> ability gain a serpentine aspect of the serpent herald's choice (all affected allies gain the same aspect). The serpent herald may choose from the following aspects:</p>
<ul>
<li><em>Movement</em> (+8 competence bonus on Climb and Swim checks, and targets can take 10 on these checks even when rushed or threatened)</li>
<li><em>Scales</em> (+2 natural armor bonus)</li>
<li><em>Senses</em> (low-light vision and <Link to="/umr/scent">scent</Link>)</li>
<li><em>Natural bite attack</em> (1d4 damage <Link to="/umr/natural_attack">for a Medium creature</Link>, plus poison).</li>
</ul>
<div className="sideNoteWrap"><ScrollContainer id="arc-skald-serpent_herald--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={9} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th colSpan={4} scope="col" className="title">Poison</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Bite-injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the serpent herald's level + his Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1 <Link to="/rule/con_damage">Con damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><p>This is a polymorph effect; a creature under another polymorph effect, such as <em>wild shape,</em> does not gain the aspect. If the serpent herald grants one of these aspects to himself, he also gains the ability to <Link to="/spell/speak_with_animals">speak with animals</Link> (reptiles and creatures with the aquatic subtype only) for as long as he has the aspect.</p>
</Pair>
<Pair title="Info">The serpent herald must have the <em>inspired rage raging song</em> to use this ability.</Pair>
</Ability>
<Ability id="arc-skald-serpent_herald-serpent-shape-su" extraClasses="hasSubs" icon={["magic-swirl"]}>
<Pair single id="arc-skald-serpent_herald-serpent-shape-su">Serpent Shape (Su)</Pair>
<Pair hl title="Replaces">Spell kenning</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A serpent herald gains the ability to use <em>wild shape</em> to take the form of a reptile or an aquatic animal once per day, as the <Link to="/class/druid">druid</Link> class feature. His effective druid level for this ability is equal to his serpent herald level - 1. This doesn't allow him to assume other forms, such as elementals or other kinds of animals. When in animal form, the serpent herald is treated as able to speak normally for the purpose of using <em>raging song,</em> but not for using other abilities that require speech (such as spellcasting).</Pair>
<Pair title="At 11th Level">A serpent herald can use this ability 2 times/day. He gains the benefits of the <Link to="/feat/wild_speech">Wild Speech</Link> feat while using this ability, treating his druid level as his serpent herald level - 1.</Pair>
<Pair title="At 17th Level">A serpent herald can use this ability 3 times/day. In addition, he gains the supernatural resiliency of a <Link to="/family/linnorm">linnorm</Link>, gaining the effects of <Link to="/spell/freedom_of_movement">freedom of movement</Link> while using this ability.</Pair>
</Ability>
<Ability id="arc-skald-serpent_herald-wild-shape-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-skald-serpent_herald-wild-shape-su" flavor="Relevant text from the druid class ability.">Wild Shape (Su)</Pair>
<Pair title="Standard Action">You gain the ability to turn yourself into any Small or Medium animal and back again. Your options for new forms include all creatures with the <Link to="/main/monsters_animals">animal</Link> type. This ability functions like the <Link to="/spell/beast_shape_i">beast shape I</Link> spell, except as noted here. The effect lasts for 1 hour per druid level, or until you change back. The form chosen must be that of an animal with which you are familiar.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
<Pair title="At 6th Level">You can <em>wild shape</em> twice a day as <Link to="/spell/beast_shape_ii">beast shape II</Link>, and you can now change into a Large or Tiny animal.</Pair>
<Pair title="At 8th Level">You can <em>wild shape</em> 3 times/day as <Link to="/spell/beast_shape_iii">beast shape III</Link>, and you can now change into a Huge or Diminutive animal.</Pair>
<Pair title="Special">You lose your ability to speak while in animal form because you are limited to the sounds that a normal, untrained animal can make, but you can communicate normally with other animals of the same general grouping as your new form.</Pair>
</Ability>
<p><strong className="hl">The following rage powers complement the serpent herald archetype:</strong> <Link to="/ragepower/animal_fury">animal fury</Link>, <Link to="/ragepower/battle_roar">battle roar</Link>, <Link to="/ragepower/knockback">knockback</Link>, <Link to="/ragepower/knockdown">knockdown</Link>, <Link to="/ragepower/linnorm_death_curse">linnorm death curse</Link> (any), <Link to="/ragepower/low_light_vision">low-light vision</Link>, <Link to="/ragepower/sprint">sprint</Link>, <Link to="/ragepower/swift_foot">swift foot</Link></p></>};
const _spell_warrior = {title: "Spell Warrior", jsx: <><h2 id="arc-skald-spell_warrior-spell-warrior">Spell Warrior</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 116</Link><br/>The spell warrior uses his arcane knowledge rather than his rage to turn the tide of battle in favor of himself and his allies. With a clash of bracers and a sonorous chant, the Spell Warrior's song reaches out to touch the weapons of his allies, lending them arcane power. While his song does not inspire rage, he can use the power of his music to enchant the weapons of his allies and counter the spells of his foes.</p>
<Ability id="arc-skald-spell_warrior-improved-counterspell" icon={["stairs-goal"]}>
<Pair single id="arc-skald-spell_warrior-improved-counterspell">Improved Counterspell</Pair>
<Pair hl title="Replaces">Scribe Scroll</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">The spell warrior receives the <Link to="/feat/improved_counterspell">Improved Counterspell</Link> feat as a bonus feat.</Pair>
</Ability>
<Ability id="arc-skald-spell_warrior-weapon-song-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-skald-spell_warrior-weapon-song-su">Weapon Song (Su)</Pair>
<Pair title="Ability">A spell warrior gains the following <em>raging song,</em> allowing him to grant his ally's weapons enhancement bonuses and special powers.</Pair>
</Ability>
<Ability id="arc-skald-spell_warrior-enhance-weapons-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-skald-spell_warrior-enhance-weapons-su">Enhance Weapons (Su)</Pair>
<Pair hl title="Replaces">Inspired rage</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>The spell warrior can grant an enhancement bonus to the weapons (including ammunition) of allies within 60 feet. This bonus is equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of his skald level. The maximum bonus gained is based upon the number of weapons affected: +5 to one weapon, +4 to two weapons, +3 to three weapons, or +2 to four or more weapons. Fifty pieces of ammunition count as one weapon for this purpose. The wielder of a weapon enhanced by this <em>raging song</em> counts as if he were under the effect of an <em>inspired rage raging song</em> for all purposes involving the skald's rage powers.</p>
<p>These bonuses can also be used to add any of the following weapon special abilities to the weapons enhanced by this ability: <Link to="/magic-enh/dancing">dancing</Link>, <Link to="/magic-enh/defending">defending</Link>, <Link to="/magic-enh/distance">distance</Link>, <Link to="/magic-enh/flaming">flaming</Link>, <Link to="/magic-enh/frost">frost</Link>, <Link to="/magic-enh/ghost_touch">ghost touch</Link>, <Link to="/magic-enh/keen">keen</Link>, <Link to="/magic-enh/mighty_cleaving">mighty cleaving</Link>, <Link to="/magic-enh/returning">returning</Link>, <Link to="/magic-enh/shock">shock</Link>, <Link to="/magic-enh/seeking">seeking</Link>, or <Link to="/magic-enh/speed">speed</Link>. Adding these weapon special abilities consumes an amount of bonus equal to the <Link to="/main/magic_enhancements">special ability's cost</Link>. These enhancement bonuses and special abilities overlap with any enhancements or special abilities the weapon already has, though duplicate special abilities do not stack. If an affected weapon is not magical, at least a +1 enhancement bonus must be added before any other special abilities can be.</p>
</Pair>
<Pair title="Special">The bonus and special abilities granted by this <em>raging song</em> are determined when the song begins, and cannot be changed until the <em>raging song</em> ends and another is begun. These bonuses apply to only one end of a double weapon.</Pair>
</Ability>
<Ability id="arc-skald-spell_warrior-greater-counterspell-su" icon={["upgrade"]}>
<Pair single id="arc-skald-spell_warrior-greater-counterspell-su" flavor="The spell warrior gains increased versatility when attempting to counteract enemy spellcasting.">Greater Counterspell (Su)</Pair>
<Pair hl title="Replaces">Spell kenning</Pair>
<Pair title="At 5th Level">When counterspelling, he can expend two skald spell slots of the same level or higher than the opponent's spell, regardless of the school of that spell.</Pair>
<Pair title="At 11th Level">When counterspelling an opponent's spell, the spell warrior only has to expend one skald spell slot of the level of the spell being cast.</Pair>
<Pair title="At 17th Level">The spell warrior gains <Link to="/feat/parry_spell">Parry Spell</Link> as a bonus feat. The skald does not have to meet the prerequisites for this feat.</Pair>
</Ability>
<Ability id="arc-skald-spell_warrior-song-of-arcane-manipulation-su" icon={["magic-swirl"]}>
<Pair single id="arc-skald-spell_warrior-song-of-arcane-manipulation-su" flavor="A spell warrior can sacrifice his own rage magic to counter an opponent's spell.">Song of Arcane Manipulation (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Immediate Action">When using <em>raging song,</em> he can counterspell without interrupting his <em>raging song.</em> However, in addition to expending a spell slot (or spell slots) to attempt to counter the opponent's spell, the skald must expend 1 round of <em>raging song</em> per spell level of the opponent's spell (for example, if attempting to counterspell a 3rd-level spell, the skald must expend one of his own 3rd-level spell slots and 3 rounds of <em>raging song</em>).</Pair>
</Ability>
<Ability id="arc-skald-spell_warrior-spell-tamper-su" icon={["magic-swirl"]}>
<Pair single id="arc-skald-spell_warrior-spell-tamper-su">Spell Tamper (Su)</Pair>
<Pair hl title="Replaces">Master skald</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">When a spell warrior successfully counterspells an opponent's spell, the opponent suffers a backlash of magical energy and takes 1d6 points of damage per spell level of the countered spell. If the opponent succeeds at a Will saving throw (DC = 10 + 1/2 the skald's level + the skald's Charisma modifier), the damage is reduced by half. This damage is magical and is not subject to damage reduction or energy resistance.</Pair>
</Ability>
<p><strong className="hl">The following rage powers complement the spell warrior archetype:</strong> <Link to="/ragepower/clear_mind">clear mind</Link>, <Link to="/ragepower/disruptive">disruptive</Link>, <Link to="/ragepower/eater_of_magic">eater of magic</Link>, <Link to="/ragepower/elemental_rage">elemental rage</Link> (lesser, normal, and greater), <Link to="/ragepower/energy_resistance">energy resistance</Link>, <Link to="/ragepower/spell_sunder">spell sunder</Link>, <Link to="/ragepower/spellbreaker">spellbreaker</Link>, <Link to="/ragepower/sunder_enchantment">sunder enchantment</Link>, <Link to="/ragepower/superstition">superstition</Link>, <Link to="/ragepower/witch_hunter">witch hunter</Link></p></>};
const _sunsinger = {title: "Sunsinger", jsx: <><h2 id="arc-skald-sunsinger-sunsinger">Sunsinger</h2>
<p><strong>Sources</strong> <Link to="/source/qadira_jewel_of_the_east">Qadira, Jewel of the East pg. 33</Link><br/>Qadiran sunsingers are particularly religious skalds of Sarenrae who call down their goddess's glory to fill soldiers with fire.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-skald-sunsinger--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Must be lawful good, neutral good, or neutral, and must worship <Link to="/faith/sarenrae">Sarenrae</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-skald-sunsinger-pillar-of-light-su" icon={["stairs-goal"]}>
<Pair single id="arc-skald-sunsinger-pillar-of-light-su" flavor={<>A sunsinger skald can use her <em>raging song</em> to call upon her goddess to imbue her with glory and make all who see it pay heed.</>}>Pillar of Light (Su)</Pair>
<Pair hl title="Replaces">Song of marching</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A great beam of sunlight shines down upon the skald, casting <Link to="/rule/bright_light">bright light</Link> in a 30-foot radius, and allows the skald's <em>raging song</em> to function as the <Link to="/performance/fascinate">fascinate</Link> bardic performance.</Pair>
</Ability>
<Ability id="arc-skald-sunsinger-channel-solar-energy-su" icon={["aura"]}>
<Pair single id="arc-skald-sunsinger-channel-solar-energy-su">Channel Solar Energy (Su)</Pair>
<Pair hl title="Replaces">Spell kenning</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A sunsinger skald can <Link to="/ability/channel_energy">channel energy</Link> as a cleric once per day to heal wounds or harm undead like a good-aligned cleric. When she does so, she fills the area affected by the channeled energy with light, and can outline creatures in the area of effect as per <Link to="/spell/faerie_fire">faerie fire</Link>. The sunsinger uses her skald level as her effective cleric level when channeling positive energy.</Pair>
<Pair title="At 11th Level">A sunsinger can use this ability 2 times/day.</Pair>
<Pair title="At 17th Level">A sunsinger can use this ability 3 times/day.</Pair>
<Pair title="Special">Undead who are particularly harmed by sunlight take a -2 penalty on saving throws against this channeled energy, and take 1 additional point of damage per die of damage dealt by the effect.</Pair>
</Ability>
</>};
const _totem_channeler = {title: "Totem Channeler", jsx: <><h2 id="arc-skald-totem_channeler-totem-channeler">Totem Channeler</h2>
<p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 24</Link><br/>Some Shoanti skalds discover deeper truths in their tribes' totems. These skalds, known as totem channelers, learn how to share the totems' gifts with their allies in the heat of battle.</p>
<Ability id="arc-skald-totem_channeler-totemic-versatility-ex" icon={["stairs-goal"]}>
<Pair single id="arc-skald-totem_channeler-totemic-versatility-ex">Totemic Versatility (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair hl title="Alters">Rage powers</Pair>
<Pair title="Choice">When a totem channeler learns a new rage power, he can select from more than one group of <Link to="/arc-barbarian/totem_rage_power">totem rage powers</Link>, even though he normally could not do so. Totem rage powers grant benefits related to a theme, are organized in groups of three, and usually have the word "totem" in their name.</Pair>
<Pair title="Special">When the totem channeler starts an <em>inspired rage raging song,</em> he can add totem rage powers from only one group at a time. He can change the group of added totem rage powers by ending the current <em>inspired rage</em> and starting a new one.</Pair>
</Ability>
<Ability id="arc-skald-totem_channeler-tandem-totems-ex" icon={["stairs-goal"]}>
<Pair single id="arc-skald-totem_channeler-tandem-totems-ex">Tandem Totems (Ex)</Pair>
<Pair hl title="Replaces">Spell kenning</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">When a totem channeler starts an <em>inspired rage raging song</em> and adds a totem rage power, he can add totem rage powers from a different group. Adding or maintaining totem rage powers from the additional group requires spending 1 additional round of <em>raging song</em> each round.</Pair>
<Pair title="At 11th Level">He can activate up to two additional totem groups.</Pair>
<Pair title="At 17th Level">He can add up to three additional totem groups.</Pair>
<Pair title="Special">He must spend 1 additional round of <em>raging song</em> each round for each additional totem group. If the totem channeler does not have enough rounds of <em>raging song</em> remaining to maintain his <em>inspired rage,</em> the song ends.</Pair>
</Ability>
<Ability id="arc-skald-totem_channeler-totems-guidance-su" icon={["upgrade"]}>
<Pair single id="arc-skald-totem_channeler-totems-guidance-su" flavor="The totem channeler can draw strength and protection from his totem powers when he wades into battle with song on his lips.">Totem's Guidance (Su)</Pair>
<Pair hl title="Replaces">Damage reduction</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">When he adds a totem rage power to his <em>inspired rage,</em> he and his allies gain a +1 insight bonus to AC and on saving throws for the duration of the totem channeler's <em>raging song.</em></Pair>
<Pair title="At 14th Level">This bonus increases to +2.</Pair>
<Pair title="Special">This bonus applies only to the first totem rage power he applies to his <em>inspired rage.</em></Pair>
</Ability>
</>};
const _totemic_skald = {title: "Totemic Skald", jsx: <><h2 id="arc-skald-totemic_skald-totemic-skald">Totemic Skald</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 117</Link><br/>The totemic skald forms a close connection to an animal totem. Through the power of this mystical ally, the skald can change shapes, assuming its form as his own. Additionally, the totem animal grants the skald a measure of its spiritual power that he can share with his allies.</p>
<Ability id="arc-skald-totemic_skald-totem-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-skald-totemic_skald-totem-su">Totem (Su)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Choice">The totemic skald chooses one animal from the hunter's <Link to="/ability/animal_focus">animal focus</Link> list. Once selected, this choice cannot be changed. This animal becomes the skald's personal totem animal and influences his later abilities. He gains the following rage power.</Pair>
</Ability>
<Ability id="arc-skald-totemic_skald-song-of-the-beast-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-skald-totemic_skald-song-of-the-beast-su">Song of the Beast (Su)</Pair>
<Pair hl title="Replaces">Rage power gained at 3rd level</Pair>
<Pair title="Ability">The totemic skald grants the <em>animal focus</em> abilities of his totem animal (as the hunter's <em>animal focus</em> ability) to all allies affected by his <em>raging song.</em> He treats his skald level as his hunter level for determining the abilities of the animal focus (such as the improvements gained at 8th and 15th level).</Pair>
</Ability>
<Ability id="arc-skald-totemic_skald-totem-empathy-ex-and-sp" icon={["stairs-goal"]}>
<Pair single id="arc-skald-totemic_skald-totem-empathy-ex-and-sp">Totem Empathy (Ex and Sp)</Pair>
<Pair hl title="Replaces">Uncanny dodge, improved uncanny dodge</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">The totemic skald can improve the attitude of animals of the same type as his totem. This ability functions just like a Diplomacy check to improve the attitude of a person. The skald rolls 1d20 and adds his skald level and his Charisma modifier to determine the totem empathy check result. The typical domestic animal has a starting attitude of indifferent, while wild animals are usually unfriendly.</Pair>
<Pair title="Ability">In addition, the totemic skald can cast <Link to="/spell/charm_animal">charm animal</Link> as a spell-like ability, using his skald level as his caster level and his Charisma modifier to determine the DC. He can do this a number of times a day equal to <Link to="/misc/one_fourth">one-fourth</Link> of his skald level. This only functions against animals that are of the same type as his totem animal (subject to GM discretion).</Pair>
</Ability>
<Ability id="arc-skald-totemic_skald-wild-shape-su" extraClasses="hasSubs" icon={["magic-swirl"]}>
<Pair single id="arc-skald-totemic_skald-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Replaces">Spell kenning</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A totemic skald gains the ability to <em>wild shape</em> into the form of a Small or Medium version of his totem animal, as the <Link to="/class/druid">druid</Link> class feature. His effective druid level for this ability is equal to his skald level - 1.</Pair>
<Pair title="At 11th Level">He can use this ability 2 times/day.</Pair>
<Pair title="At 17th Level">He can use this ability 3 times/day.</Pair>
<Pair title="Special">This doesn't allow the skald to assume other forms, such as elementals, plants, or other kinds of animals. When in animal form, the skald is treated as able to speak normally for the purpose of using <em>raging song,</em> but not for using other abilities that require speech (such as spellcasting). The skald uses his class level as his druid level for the purpose of qualifying for feats that affect <em>wild shape</em> (such as <Link to="/feat/wild_speech">Wild Speech</Link>).</Pair>
</Ability>
<Ability id="arc-skald-totemic_skald-wild-shape-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-skald-totemic_skald-wild-shape-su" flavor="Relevant text from the druid class ability.">Wild Shape (Su)</Pair>
<Pair title="Standard Action">You gain the ability to turn yourself into any Small or Medium animal and back again. Your options for new forms include all creatures with the <Link to="/main/monsters_animals">animal</Link> type. This ability functions like the <Link to="/spell/beast_shape_i">beast shape I</Link> spell, except as noted here. The effect lasts for 1 hour per druid level, or until you change back. The form chosen must be that of an animal with which you are familiar.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
<Pair title="At 6th Level">You can <em>wild shape</em> twice a day as <Link to="/spell/beast_shape_ii">beast shape II</Link>, and you can now change into a Large or Tiny animal.</Pair>
<Pair title="At 8th Level">You can <em>wild shape</em> 3 times/day as <Link to="/spell/beast_shape_iii">beast shape III</Link>, and you can now change into a Huge or Diminutive animal.</Pair>
<Pair title="Special">You lose your ability to speak while in animal form because you are limited to the sounds that a normal, untrained animal can make, but you can communicate normally with other animals of the same general grouping as your new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)</Pair>
</Ability>
<p><strong className="hl">The following rage powers complement the totemic skald archetype:</strong> <Link to="/ragepower/animal_fury">animal fury</Link>, <Link to="/ragepower/beast_totem">beast totem</Link> (lesser, normal, and greater), <Link to="/ragepower/knockback">knockback</Link>, <Link to="/ragepower/knockdown">knockdown</Link>, <Link to="/ragepower/low_light_vision">low-light vision</Link>, <Link to="/ragepower/primal_scent">primal scent</Link>, <Link to="/ragepower/scent">scent</Link>, <Link to="/ragepower/sprint">sprint</Link>, <Link to="/ragepower/swift_foot">swift foot</Link></p></>};
const _twilight_speaker = {title: "Twilight Speaker", jsx: <><h2 id="arc-skald-twilight_speaker-twilight-speaker">Twilight Speaker</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 12</Link><br/>From the extraordinarily reclusive Snowcaster elves come the twilight speakers, who consider it a sacred duty to seek out and befriend non-elven communities. These elves travel among outsiders as envoys, diplomats, traders, and even spies as events demand. Deeply devoted to the elven goddess Findeladlara, twilight speakers wander far and wide, vigilant for threats to their homes and their people.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-skald-twilight_speaker--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/elf">Elf</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-skald-twilight_speaker-devout" icon={["hazard-sign"]}>
<Pair single id="arc-skald-twilight_speaker-devout">Devout</Pair>
<Pair title="Ability">A twilight speaker must worship the elven goddess <Link to="/faith/findeladlara">Findeladlara</Link>, and his alignment must be within one step of chaotic good. A twilight speaker who does not meet these requirements cannot use <em>inspired devotion</em> or <em>Findeladlara's blessing.</em></Pair>
</Ability>
<Ability id="arc-skald-twilight_speaker-twilight-envoy" icon={["upgrade"]}>
<Pair single id="arc-skald-twilight_speaker-twilight-envoy">Twilight Envoy</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Passive Ability">A twilight speaker gains a bonus equal to half his skald level on Bluff, Diplomacy, and Sense Motive checks.</Pair>
</Ability>
<Ability id="arc-skald-twilight_speaker-raging-song-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-skald-twilight_speaker-raging-song-su">Raging Song (Su)</Pair>
<Pair title="Info">A twilight speaker gains the following <em>raging songs.</em></Pair>
</Ability>
<Ability id="arc-skald-twilight_speaker-inspired-devotion-su" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-skald-twilight_speaker-inspired-devotion-su" flavor="The twilight speaker inspires fervor rather than fury.">Inspired Devotion (Su)</Pair>
<Pair title="Ability">Affected allies gain a competence bonus on attack rolls and a morale bonus on saving throws. Both of these bonuses are equal to 1 + <Link to="/misc/one_sixth">one-sixth</Link> of his skald level.</Pair>
</Ability>
<Ability id="arc-skald-twilight_speaker-song-of-understanding-su" extraClasses="subAbility" icon={["aura","stairs-goal"]}>
<Pair single id="arc-skald-twilight_speaker-song-of-understanding-su">Song of Understanding (Su)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A twilight speaker can use his <em>raging song</em> to create an aura that allows creatures to speak and understand each others' languages. By expending 4 rounds of <em>raging song,</em> the twilight speaker creates an aura that grants him and creatures in a 60-foot <Link to="/misc/spread">spread</Link> centered on him the effects of <Link to="/spell/tongues">tongues</Link>. This aura uses the skald's level as the caster level for all purposes, including duration. A twilight speaker can dismiss this aura as a <strong className="hl">standard action</strong>.</Pair>
</Ability>
<Ability id="arc-skald-twilight_speaker-song-of-secrecy-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-skald-twilight_speaker-song-of-secrecy-su">Song of Secrecy (Su)</Pair>
<Pair hl title="Replaces">Inspired rage, song of strength, dirge of doom</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">A twilight speaker can use his song to shroud allies from detection. Affected allies gain a bonus equal to half the twilight speaker's skald level on Stealth checks, and they can attempt such checks without <Link to="/rule/cover">cover</Link> or <Link to="/rule/concealment">concealment</Link>. Song of secrecy is audible only to those affected.</Pair>
</Ability>
<Ability id="arc-skald-twilight_speaker-community-domain" icon={["magic-swirl","spell-book"]}>
<Pair single id="arc-skald-twilight_speaker-community-domain">Community Domain</Pair>
<Pair hl title="Replaces">Versatile performance, well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A twilight speaker gains the <Link to="/domain/community">Community</Link> domain and gains the powers and spells of the domain. He treats his skald level as his cleric level, and he uses his Charisma modifier in place of his Wisdom modifier for the purposes of the domain's abilities.</Pair>
</Ability>
<Ability id="arc-skald-twilight_speaker-findeladlaras-blessing-su" icon={["upgrade"]}>
<Pair single id="arc-skald-twilight_speaker-findeladlaras-blessing-su">Findeladlara's Blessing (Su)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">Once per day a twilight speaker can activate any spell trigger or spell completion item as though the spell were on the skald spell list.</Pair>
<Pair title="At 13th Level">He can use this ability 2 times/day.</Pair>
<Pair title="At 19th Level">He can use this ability 3 times/day.</Pair>
</Ability>
<Ability id="arc-skald-twilight_speaker-findeladlaras-hand" icon={["upgrade"]}>
<Pair single id="arc-skald-twilight_speaker-findeladlaras-hand">Findeladlara's Hand</Pair>
<Pair hl title="Replaces">Master skald</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">The twilight speaker can use <em>Findeladlara's blessing</em> at will.</Pair>
</Ability>
</>};
const _undying_word = {title: "Undying Word", jsx: <><h2 id="arc-skald-undying_word-undying-word">Undying Word</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 5</Link><br/>Some who have survived the Mana Wastes cannot accept defeat, and those who have learned to speak the undying word can lend others the strength to endure.</p>
<Ability id="arc-skald-undying_word-bonus-feat" icon={["stairs-goal"]}>
<Pair single id="arc-skald-undying_word-bonus-feat">Bonus Feat</Pair>
<Pair hl title="Replaces">Scribe scroll, lore master</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">An undying word gains a bonus feat in addition to those gained from normal advancement. He must meet the prerequisites for the feat, and it must include Endurance as a prerequisite or be selected from the following list: <Link to="/feat/endurance">Endurance</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, or <Link to="/feat/improved_great_fortitude">Improved Great Fortitude</Link>.</Pair>
<Pair title="At 7th Level">He gains another bonus feat, following the restrictions above.</Pair>
<Pair title="At 13th Level">He gains another bonus feat, following the restrictions above.</Pair>
<Pair title="At 19th Level">He gains another bonus feat, following the restrictions above.</Pair>
</Ability>
<Ability id="arc-skald-undying_word-undying-song-su" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-skald-undying_word-undying-song-su">Undying Song (Su)</Pair>
<Pair title="Info">An undying word gains the following <em>raging songs,</em> granting his allies the ability to withstand punishment.</Pair>
</Ability>
<Ability id="arc-skald-undying_word-inspire-resilience-su" extraClasses="subAbility" icon={["broken-shield","armor-upgrade"]}>
<Pair single id="arc-skald-undying_word-inspire-resilience-su">Inspire Resilience (Su)</Pair>
<Pair hl title="Replaces">Inspired rage</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">The undying word can grant his companions supernatural endurance. This functions as <em>inspired rage,</em> but it grants neither a bonus to his allies' Strength nor a -1 penalty to their AC.</Pair>
</Ability>
<Ability id="arc-skald-undying_word-song-of-defiance-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-skald-undying_word-song-of-defiance-su" flavor="An undying word can shield his allies against the environment.">Song of Defiance (Su)</Pair>
<Pair hl title="Replaces">Song of strength</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">By expending 1 round of <em>raging song,</em> the undying word grants all allies within 60 feet the effects of <Link to="/spell/endure_elements">endure elements</Link> for the next hour. The undying word must continue to perform for the remainder of the hour; otherwise its effects end, but only 1 round of <em>raging song</em> is expended for that hour.</Pair>
</Ability>
<Ability id="arc-skald-undying_word-dirge-of-determination-su" extraClasses="subAbility" icon={["remedy"]}>
<Pair single id="arc-skald-undying_word-dirge-of-determination-su" flavor="An undying word can urge his allies within 30 feet to overcome hardships.">Dirge of Determination (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Passive Ability">Affected allies treat <Link to="/rule/ability_damage">ability damage, ability drain</Link>, and penalties to ability scores as though each were 2 lower.</Pair>
<Pair title="At 15th Level">This reduction becomes 4.</Pair>
<Pair title="At 20th Level">This reduction increases to 6.</Pair>
<Pair title="Special">The undying word can never reduce a penalty below 0 or increase an ability score beyond its original value in this manner.</Pair>
</Ability>
<Ability id="arc-skald-undying_word-endurance-power-su" icon={["stairs-goal"]}>
<Pair single id="arc-skald-undying_word-endurance-power-su">Endurance Power (Su)</Pair>
<Pair hl title="Replaces">Spell kenning</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">An undying word learns an additional rage power that affects him and any allies under the influence of his <em>inspire resilience.</em> This rage power must be selected from the following list: <Link to="/ragepower/clear_mind">clear mind</Link>, <Link to="/ragepower/energy_absorption">energy absorption</Link>, <Link to="/ragepower/energy_resistance">energy resistance</Link>, <Link to="/ragepower/flesh_wound">flesh wound</Link>, <Link to="/ragepower/greater_energy_resistance">greater energy resistance</Link>, <Link to="/ragepower/greater_guarded_life">greater guarded life</Link>, <Link to="/ragepower/guarded_life">guarded life</Link>, <Link to="/ragepower/increased_damage_reduction">increased damage reduction</Link>, <Link to="/ragepower/internal_fortitude">internal fortitude</Link>, or <Link to="/ragepower/superstition">superstition</Link>. This otherwise functions as the skald's <em>rage powers</em> ability.</Pair>
<Pair title="At 11th Level">He learns another rage power, following the restrictions above.</Pair>
<Pair title="At 17th Level">He learns another rage power, following the restrictions above.</Pair>
</Ability>
</>};
const _urban_skald = {title: "Urban Skald", jsx: <><h2 id="arc-skald-urban_skald-urban-skald">Urban Skald</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_streets">Heroes of the Streets pg. 25</Link><br/>The urban skald finds that challenging and mocking foes is sometimes more effective than inspiring uncontrolled rage in a city.</p>
<Ability id="arc-skald-urban_skald-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-skald-urban_skald-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Alters">Weapon and armor proficiencies</Pair>
<Pair title="Info">An urban skald is not proficient with medium armor.</Pair>
</Ability>
<Ability id="arc-skald-urban_skald-raging-song-su" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-skald-urban_skald-raging-song-su">Raging Song (Su)</Pair>
<Pair title="Info">An urban skald gains a different selection of <em>raging songs,</em> as noted below. The save DC for a <em>raging song</em> that allows a save is equal to 10 + 1/2 the urban skald's skald level + his Charisma modifier.</Pair>
</Ability>
<Ability id="arc-skald-urban_skald-controlled-inspired-rage-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-skald-urban_skald-controlled-inspired-rage-su">Controlled Inspired Rage (Su)</Pair>
<Pair hl title="Alters">Inspired rage</Pair>
<Pair title="Ability">When the urban skald <em>inspires rage,</em> he does not grant the normal benefits. Instead, he can apply a +2 morale bonus to his allies' Strength, Dexterity, or Constitution.</Pair>
<Pair title="At 8th Level">The bonus becomes +4.</Pair>
<Pair title="At 16th Level">The bonus increases to +6.</Pair>
<Pair title="Special">The urban skald can apply the full bonus to one ability score or split the bonus between several scores in increments of 2. The choice applies to all affected allies. The controlled <em>inspired rage</em> grants no bonus on Will saves, imposes no penalties to AC, and does not prevent affected allies from using Intelligence-, Dexterity-, or Charisma-based skills.</Pair>
</Ability>
<Ability id="arc-skald-urban_skald-infuriating-mockery-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-skald-urban_skald-infuriating-mockery-su">Infuriating Mockery (Su)</Pair>
<Pair hl title="Replaces">Song of marching, damage reduction</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">The urban skald can inspire reckless fury in one foe within 30 feet. If the foe fails a Will saving throw, it takes a -2 penalty to AC and on attack rolls, cannot use any Intelligence-, Dexterity-, or Charisma-based skills, and must succeed at a <Link to="/rule/concentration">concentration</Link> check to cast spells (DC = 15 + spell level) for as long as it remains in range of the skald and the performance is maintained.</Pair>
<Pair title="At 7th Level">The urban skald can target an additional foe with this ability.</Pair>
<Pair title="At 11th Level">The urban skald can target an additional foe with this ability.</Pair>
<Pair title="At 15th Level">The urban skald can target an additional foe with this ability.</Pair>
<Pair title="At 19th Level">The urban skald can target an additional foe with this ability.</Pair>
</Ability>
<Ability id="arc-skald-urban_skald-humiliating-defamation-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-skald-urban_skald-humiliating-defamation-su">Humiliating Defamation (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">The urban skald can ostracize a foe. The song has one primary target, who the skald must see and name or describe. That target must attempt a Will save. On a failed save, the primary target cannot benefit from any morale bonus or teamwork feats, cannot treat any creature as an ally, and must attempt to save against any spell cast on it (including harmless spells, even if it casts them on itself). These effects remain as long as the primary target can hear the skald and the skald maintains the performance.</Pair>
<Pair title="Passive Ability">All other foes within 60 feet of the skald are secondary targets. Secondary targets must succeed at Will saves or they cannot treat the primary target as an ally, and cannot target it with spells or abilities that are harmless. These effects remain as long as the secondary targets are within 60 feet of the skald and the skald maintains the performance.</Pair>
<Pair title="Special">This is a sonic mind-affecting charm effect.</Pair>
</Ability>
<Ability id="arc-skald-urban_skald-back-of-the-crowd-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-skald-urban_skald-back-of-the-crowd-ex" flavor="An urban skald has learned to maximize the defensive benefit of being near allies.">Back of the Crowd (Ex)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">He gains a +1 dodge bonus to AC when adjacent to 2 or more allies.</Pair>
<Pair title="At 9th Level">This bonus becomes +2.</Pair>
<Pair title="At 15th Level">This bonus increases to +3.</Pair>
</Ability>
</>};
const _war_painter = {title: "War Painter", jsx: <><h2 id="arc-skald-war_painter-war-painter">War Painter</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 10</Link><br/>The gripplis of the Valashmai Jungle exhibit savage strength for their size - attributed in part to the frightful magical pigments applied to their skin by the tribes' mystical lore keepers.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-skald-war_painter--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/grippli">Grippli</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-skald-war_painter-furious-paint-su" icon={["stairs-goal"]}>
<Pair single id="arc-skald-war_painter-furious-paint-su">Furious Paint (Su)</Pair>
<Pair hl title="Alters">Raging song</Pair>
<Pair title="Ability">By spending 10 minutes preparing and applying special paints to his or an ally's skin, a war painter can create patterns that store the effects of one of his <em>raging songs.</em> The war painter must expend 1 or more rounds of his <em>raging song</em> class ability while anointing the ally, and the paint retains its potency until the war painter recovers his daily uses of <em>raging song.</em> The ally can activate the paint as a <strong className="hl">move action</strong>, gaining the benefits of the <em>raging song,</em> including any rage powers as appropriate. This effect lasts a number of rounds equal to the rounds of <em>raging song</em> the war painter expended + the war painter's ranks in <Link to="/skill/craft">Craft</Link> (calligraphy, paintings, or tattoos) - but no more than double the number of rounds of <em>raging song</em> expended.</Pair>
<Pair title="Free Action">By halving the remaining number of rounds of <em>raging song,</em> an ally can suspend the paint's effects and activate the paint again later as a <strong className="hl">move action</strong>.</Pair>
<Pair title="Special">A war painter can apply the effects of any feats that affect <Link to="/ability/bardic_performance">bardic performance</Link> to his furious paint, except effects that extend the effects of performances, such as the <Link to="/feat/lingering_performance">Lingering Performance</Link> feat. A creature can be subject to only one application of furious paint at a time. The war painter can still use his <em>raging song</em> ability in the normal way.</Pair>
</Ability>
<Ability id="arc-skald-war_painter-thousand-totems-su" icon={["stairs-goal"]}>
<Pair single id="arc-skald-war_painter-thousand-totems-su">Thousand Totems (Su)</Pair>
<Pair hl title="Replaces">Spell kenning</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">Once per day</Pair>
<Pair title="Ability">A war painter can channel a powerful totem into his furious paints while applying the pigments on an ally. This grants the painted ally the benefits of one additional rage power when the ally activates the furious paints. The war painter does not need to know the rage power, but it must be one for which he qualifies. Furthermore, the war painter can select only <Link to="/ability/rage_powers">a blood rage power</Link> or a <Link to="/arc-barbarian/totem_rage_power">totem rage power</Link>. If the war painter already has a different blood rage or totem rage power that would be applied to the painted ally, this new rage power replaces it and any other rage powers that require it as a prerequisite.</Pair>
<Pair title="At 11th Level">He can use this ability 2 times/day.</Pair>
<Pair title="At 17th Level">He can use this ability 3 times/day.</Pair>
<Pair title="Special">He can apply this ability multiple times to the same creature, though only to give it rage powers that use the granted rage power as a prerequisite (such as <Link to="/ragepower/beast_totem">beast totem</Link> and <Link to="/ragepower/greater_beast_totem">greater beast totem</Link>).</Pair>
</Ability>
<Ability id="arc-skald-war_painter-arcane-flourish-su" icon={["magic-swirl"]}>
<Pair single id="arc-skald-war_painter-arcane-flourish-su">Arcane Flourish (Su)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">Once per day as he finishes applying his <em>furious paint</em> to a creature, a war painter can cast one skald spell with a casting time of no more than 1 standard action and infuse the spell into the paint. Once while benefiting from the paint's <em>raging song,</em> the painted ally can use a <strong className="hl">standard action</strong> to cast the infused spell on herself as if the war painter had cast it. The spell ends when the paint's other effects end.</Pair>
<Pair title="At 13th Level">He can use this ability 2 times/day.</Pair>
<Pair title="At 19th Level">He can use this ability 3 times/day.</Pair>
<Pair title="Special">A war painter can infuse only a skald spell whose level is at least 2 levels lower than the highest-level skald spell he can cast. He can infuse any targeted spell in a painted ally, even if its range is personal.</Pair>
</Ability>
</>};
const _warlord = {title: "Warlord", jsx: <><h2 id="arc-skald-warlord-warlord">Warlord</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 49</Link><br/>The warlord wields his force of personality like a weapon, intimidating his allies and ensuring that his followers heed his commands. The warlord doesn't inspire his followers so much as instill fear in them. Always watching his foes for moments of vulnerability, the warlord seeks to exploit his enemies' weaknesses to gain victory.</p>
<Ability id="arc-skald-warlord-intimidating-prowess" icon={["stairs-goal"]}>
<Pair single id="arc-skald-warlord-intimidating-prowess">Intimidating Prowess</Pair>
<Pair hl title="Replaces">Scribe Scroll feat</Pair>
<Pair title="Ability">A warlord gains <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-skald-warlord-unshakable-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-skald-warlord-unshakable-ex">Unshakable (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A warlord develops an unshakable resolve, gaining a +2 bonus on saving throws against fear effects.</Pair>
</Ability>
<Ability id="arc-skald-warlord-raging-song-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-skald-warlord-raging-song-su">Raging Song (Su)</Pair>
<Pair title="Info">A warlord gains the following <em>raging song.</em></Pair>
</Ability>
<Ability id="arc-skald-warlord-fear-me-su" extraClasses="subAbility" icon={["shield-reflect"]}>
<Pair single id="arc-skald-warlord-fear-me-su">Fear Me (Su)</Pair>
<Pair hl title="Replaces">Spell kenning</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">The warlord can remind his allies that failing him is far more frightening than the opposition. This <em>raging song</em> works like <Link to="/performance/distraction">distraction</Link>, except that it applies to saving throws against fear effects instead of patterns and figments, and the warlord attempts an Intimidate check with a -10 penalty instead of a Perform check. Additionally, the warlord's allies can use the warlord's Intimidate check result (with the -10 penalty) as the DC for attempts to demoralize them using Intimidate.</Pair>
</Ability>
<Ability id="arc-skald-warlord-distraction" extraClasses="subAbility" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="arc-skald-warlord-distraction" flavor={<>Text from the <em>distraction</em> ability</>}>Distraction</Pair>
<Pair title="Ability">A bard can use his performance to counter magic effects that depend on sight. Each round of the <em>distraction,</em> he makes a Perform (act, comedy, dance, or oratory) skill check. Any creature within 30 feet of the bard (including the bard himself) that is affected by an illusion (pattern) or illusion (figment) magical attack may use the bard's Perform check result in place of its saving throw if, after the saving throw is rolled, the Perform skill check proves to be higher. If a creature within range of the <em>distraction</em> is already under the effect of a non-instantaneous illusion (pattern) or illusion (figment) magical attack, it gains another saving throw against the effect each round it sees the <em>distraction,</em> but it must use the bard's Perform skill check result for the save. <em>Distraction</em> does not work on effects that don't allow saves. <em>Distraction</em> relies on visual components.</Pair>
</Ability>
<Ability id="arc-skald-warlord-minions-ex" icon={["stairs-goal"]}>
<Pair single id="arc-skald-warlord-minions-ex">Minions (Ex)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A warlord attracts a group of followers through his fearsome reputation and gains the <Link to="/feat/leadership">Leadership</Link> feat as a bonus feat.</Pair>
</Ability>
<Ability id="arc-skald-warlord-intimidated-push-ex" icon={["shield-reflect"]}>
<Pair single id="arc-skald-warlord-intimidated-push-ex">Intimidated Push (Ex)</Pair>
<Pair hl title="Replaces">Improved uncanny dodge</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A warlord inspires fear in his cohort and followers, ensuring they do not fail and thus suffer his wrath. When he uses <em>inspired rage,</em> his cohort increases her morale bonus on Will saves from <em>inspired rage</em> by 1 and his followers increase their morale bonuses on Will saves from <em>inspired rage</em> by 2.</Pair>
</Ability>
</>};
const _wyrm_singer = {title: "Wyrm Singer", jsx: <><h2 id="arc-skald-wyrm_singer-wyrm-singer">Wyrm Singer</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 14</Link><br/>Wyrm singers spin fragments of the story of the ongoing struggle between noble Apsu and wicked Dahak.</p>
<Ability id="arc-skald-wyrm_singer-wyrm-song-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-skald-wyrm_singer-wyrm-song-su">Wyrm Song (Su)</Pair>
<Pair title="Info">A wyrm singer gains the following <em>raging songs.</em></Pair>
</Ability>
<Ability id="arc-skald-wyrm_singer-draconic-rage-su" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-skald-wyrm_singer-draconic-rage-su">Draconic Rage (Su)</Pair>
<Pair hl title="Replaces">Inspired rage</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A wyrm singer can kindle an echo of ancient rage felt between warring dragon clans in his allies. This ability acts as <em>inspired rage,</em> except instead of <em>inspire rage's</em> normal bonuses, those affected gain a morale bonus on melee attack and damage rolls equal to 2 + <Link to="/misc/one_eighth">one-eighth</Link> of his skald level. Those affected also gain a morale bonus on saving throws against paralysis and sleep effects equal to 2 + one-fourth of his skald level. They still take a -1 penalty to their AC.</Pair>
</Ability>
<Ability id="arc-skald-wyrm_singer-wyrm-saga-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-skald-wyrm_singer-wyrm-saga-su">Wyrm Saga (Su)</Pair>
<Pair hl title="Replaces">Song of the fallen</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">A wyrm singer embraces the essence of the draconic histories, allowing his allies to manifest aspects of a dragon in their physical forms. The wyrm singer selects a single ally within 60 feet to take on a draconic aspect (as per <Link to="/spell/form_of_the_dragon_i">form of the dragon I</Link>) of a type of the wyrm singer's choice. The ally cannot use the breath weapon attack provided by form of the dragon. The wyrm singer must expend 1 round of <em>raging song</em> each round to maintain wyrm saga, and can affect only a single ally at a time.</Pair>
</Ability>
<Ability id="arc-skald-wyrm_singer-breath-weapon-su" icon={["tornado-discs","barbed-arrow"]}>
<Pair single id="arc-skald-wyrm_singer-breath-weapon-su">Breath Weapon (Su)</Pair>
<Pair hl title="Replaces">Rage power gained at 12th level</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Swift Action">Once per day, a wyrm singer can grant a breath weapon attack to himself or an ally affected by his draconic rage <em>raging song.</em> Using the breath weapon is a <strong className="hl">standard action</strong>, and it affects creatures in a 30-foot cone or a 60-foot line. The breath weapons deals 1d6 points of damage per 2 skald levels the wyrm singer has, and is of an energy type of the wyrm singer's choice (acid, cold, electricity, or fire). Creatures caught in the area can attempt a Reflex save (DC = 10 + 1/2 the wyrm singer's skald level + his Charisma modifier) to halve the damage.</Pair>
</Ability>
</>};
export default {augur:_augur,bacchanal:_bacchanal,battle_scion:_battle_scion,bekyar_demon_dancer:_bekyar_demon_dancer,belkzen_war_drummer:_belkzen_war_drummer,boaster:_boaster,bold_schemer:_bold_schemer,court_poet:_court_poet,dragon_skald:_dragon_skald,elegist:_elegist,fated_champion:_fated_champion,herald_of_the_horn:_herald_of_the_horn,hunt_caller:_hunt_caller,instigator:_instigator,red_tongue:_red_tongue,serpent_herald:_serpent_herald,spell_warrior:_spell_warrior,sunsinger:_sunsinger,totem_channeler:_totem_channeler,totemic_skald:_totemic_skald,twilight_speaker:_twilight_speaker,undying_word:_undying_word,urban_skald:_urban_skald,war_painter:_war_painter,warlord:_warlord,wyrm_singer:_wyrm_singer}