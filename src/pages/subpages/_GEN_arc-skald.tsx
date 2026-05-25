import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
const _augur = {title: "Augur", jsx: <><h2 id="arc-skald-augur-augur">Augur</h2>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 25</Link><br/>Tales of Merivesta Olinchi are surprisingly common among the Bekyar of the Mwangi Expanse, who claim she spent some time studying their traditions and history. Most historians find it more likely that a Bekyar skald spent time in Nex, was exposed to the idea of divination as a tool of war from a copy of Cold Irony, and fabricated tales of how that knowledge came to be in his hands.</p>
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
<Pair title="At 2nd Level">An augur can read signs and portents to attempt to ascertain how events in the near future will play out. This allows the augur to cast <Link to="/spell/augury">augury</Link> as a spell-like ability.</Pair>
<Pair title="At 7th Level">He can instead use signs and portents to cast <Link to="/spell/divination">divination</Link> as a spell-like ability.</Pair>
<Pair title="At 12th Level">He can instead cast <Link to="/spell/commune">commune</Link> as a spell-like ability.</Pair>
<Pair title="At 17th Level">He can use signs and portents twice per day.</Pair>
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
<Pair title="Special">For each alcoholic drink or fermented berry consumed while raging, the skald is <Link to="/misc/nauseated">nauseated</Link> for 1 round after his <em>raging song</em> ends. The <Link to="/ragepower/internal_fortitude">internal fortitude</Link> rage power prevents this nauseated condition from occurring.</Pair>
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
<p><strong className="hl">Rage Powers:</strong> The following rage powers complement the bacchanal archetype: <Link to="/ragepower/animal_fury">animal fury</Link>, <Link to="/ragepower/boasting_taunt">boasting taunt</Link>, <Link to="/ragepower/fearless_rage">fearless rage</Link>, <Link to="/ragepower/fierce_fortitude">fierce fortitude</Link>, <Link to="/ragepower/increased_damage_reduction">increased damage reduction</Link>, internal fortitude, <Link to="/ragepower/liquid_courage">liquid courage</Link>, <Link to="/ragepower/night_vision">night vision</Link>, <Link to="/ragepower/roaring_drunk">roaring drunk</Link>, and <Link to="/ragepower/staggering_drunk">staggering drunk</Link>.</p>
</>};
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
<p><strong className="hl">Rage Powers:</strong> The following rage powers complement the boaster archetype: <Link to="/ragepower/boasting_taunt">boasting taunt</Link>, <Link to="/ragepower/come_and_get_me">come and get me</Link>, <Link to="/ragepower/fearless_rage">fearless rage</Link>, <Link to="/ragepower/fierce_fortitude">fierce fortitude</Link>, <Link to="/ragepower/intimidating_glare">intimidating glare</Link>, <Link to="/ragepower/raging_climber">raging climber</Link>, <Link to="/ragepower/raging_flier">raging flier</Link>, <Link to="/ragepower/raging_leaper">raging leaper</Link>, <Link to="/ragepower/raging_swimmer">raging swimmer</Link>, <Link to="/ragepower/sprint">sprint</Link>, <Link to="/ragepower/strength_surge">strength surge</Link>, and <Link to="/ragepower/swift_foot">swift foot</Link>.</p>
</>};
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
<p><strong>Wind Whistler (Su):</strong> At 1st level, a dragon skald adds <Link to="/spell/alter_winds">alter winds</Link>, <Link to="/spell/fog_cloud">fog cloud</Link>, and <Link to="/spell/obscuring_mist">obscuring mist</Link> to his class spell list, at the same levels the wizard gains them. He still must add these spells to his spells known as normal.</p>
<p>This ability replaces <strong className="hl">Scribe Scroll</strong>.</p>
<p><strong>Sea Legs (Ex):</strong> A dragon skald adds 1/2 his class level (minimum 1) on all Profession (sailor) checks, Survival checks while at sea, Acrobatics and Climb checks made while aboard a boat, and Swim checks.</p>
<p>This ability replaces <strong className="hl">bardic knowledge</strong>.</p>
<p><strong>Fearless Raider (Ex):</strong> At 2nd level, the dragon skald becomes resistant to fear effects. The dragon skald gains a +4 bonus on saving throws against fear effects, and DCs to affect the dragon skald with the Intimidate skill increase by 4.</p>
<p>This ability replaces <strong className="hl">well-versed</strong>.</p>
<p><strong>Raging Song (Su):</strong> A dragon skald gains access to the following raging song.</p>
<blockquote>
<p><strong>Glorious Epic (Su):</strong> At 3rd level, a dragon skald learns how to truly extol the virtues and prowess of the heroic figures in his epic tales. By performing for 10 minutes and expending 1 round of raging song, the dragon skald can influence opinions positively towards a heroic subject of the dragon skald's choice. If the subject of the epic attempts a Diplomacy or Intimidate check against anyone who listened to the full performance, he receives a circumstance bonus on that check equal to the Will save bonus granted by the dragon skald's inspired rage.</p>
</blockquote>
<p>This ability replaces <strong className="hl">song of marching</strong>.</p>
</>};
const _elegist = {title: "Elegist", jsx: <><h2 id="arc-skald-elegist-elegist">Elegist</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_spiral_of_bones_4">Pathfinder Spiral of Bones #4 pg. 29</Link><br/>Some skalds internalize the saddest and must mournful of stories, so much that they are able to manifest the emotions caused by these tales in physical form. These spirits are able to inflict the misery onto the elegist's enemies.</p>
<p><strong>Melancholic Apparition (Su):</strong> By using music, oration, and similar performances, an elegist can call forth a physical manifestation of the sorrow of his tales. This functions as a <Link to="/class/spiritualist">spiritualist's</Link> phantom with the <Link to="/emotionalfocus/despair">despair</Link> focus. He can manifest his melancholic apparition as a standard action and dismiss it as a free action. The <Link to="/sidekick/phantom">phantom</Link> appears adjacent to the skald and can act immediately. The melancholic apparition is immediately dismissed if the elegist is killed, paralyzed, stunned, knocked unconscious, or otherwise prevented from taking a free action each round to maintain the performance that keeps the phantom manifested. At 1st level, an elegist can keep his apparition manifested for a total number of rounds each day equal to 3 + his Charisma modifier. For each skald level beyond 1st, he can manifest his apparition 2 additional rounds per day.</p>
<p>Unlike a spiritualist's phantom, a melancholic apparition can't be harbored in the elegist's consciousness. When manifested, the melancholic apparition has the same number of hit points it had when previously manifested that day. It regains all of its hit points when the elegist regains his spells for the day. If the melancholic apparition is slain, the elegist can manifest it again in the same day by spending a number of additional rounds of this ability equal to half his skald level (minimum 1); the melancholic apparition returns with half its normal total of hit points.</p>
<p>This replaces <strong className="hl">raging song</strong> and all related <strong className="hl">performances</strong>, as well as <strong className="hl">rage powers</strong>.</p>
<p><strong>Steady Hearted (Ex):</strong> At 2nd level, an elegist receives a +4 bonus to saving throws against emotion effects.</p>
<p>This replaces <strong className="hl">well-versed</strong>.</p>
<p><strong>Somber Damage Reduction (Ex):</strong> The damage reduction an elegist gains at 9th level is shared by his melancholic apparition when it is manifested.</p>
<p>This alters <strong className="hl">damage reduction</strong>.</p>
<p><strong>Master Elegist (Su):</strong> At 20th level, the elegist can manifest his melancholic apparition as a swift action. If it is slain. the elegist can manifest a new phantom in the same day with no additional expenditure of rounds of the melancholic apparition ability, and the new phantom has all of its hit points.</p>
</>};
const _fated_champion = {title: "Fated Champion", jsx: <><h2 id="arc-skald-fated_champion-fated-champion">Fated Champion</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 114</Link><br/>Many cultures see fate as a limit that is both stifling and unwanted, regardless of the destiny that lurks in the days and years ahead. Among cultures where skalds are the keepers of lore and wisdom, there are those who learn to read the winds of fate and take up the mantle of the fated champion, knowing and embracing their destined paths with strength borne of conviction.</p>
<p><strong>Watcher of the Weave (Ex):</strong> At 2nd level, a fated champion learns to see the tapestry of events moments before it is woven. He gains an insight bonus on initiative checks equal to 1/2 his skald level.</p>
<p>This ability replaces <strong className="hl">well-versed</strong>.</p>
<p><strong>Far Seer (Su):</strong> At 5th level, a fated champion learns a method of spell kenning that is especially suited for divining and understanding the future, but not for directly harming opponents. For the purpose of determining what level spell slot he expends when using spell kenning, the skald treats the spell level of spells that predict the future (such as augury and divination) as one spell level lower (minimum spell level 1st), and treats the spell level of spells that deal damage as one spell level higher.</p>
<p>This alters the <strong className="hl">spell kenning</strong> class feature.</p>
<p><strong>Shield of Foresight (Su):</strong> At 10th level, a fated champion's certainty of his own fate grants him the ability to stare down fear and remain unbowed. When using raging song, he is immune to fear effects, and allies affected by his raging song gain a +5 bonus on saves attempted against fear effects.</p>
<p>This ability replaces the <strong className="hl">dirge of doom</strong> raging song.</p>
<p><strong>Not This Day (Su):</strong> At 20th level, the fated champion gains the ability to reweave the strands of fate. As an immediate action, he can expend 10 rounds of raging song to either reroll a saving throw or force an opponent to reroll an attack roll. The decision to use this ability must be made before the results of the initial roll are revealed, and the champion or his opponent must take the result of the reroll.</p>
<p>This ability replaces <strong className="hl">master skald</strong>.</p>
<p><strong>Rage Powers:</strong> The following rage powers complement the fated champion archetype: <Link to="/ragepower/boasting_taunt">boasting taunt</Link>, <Link to="/ragepower/clear_mind">clear mind</Link>, <Link to="/ragepower/eater_of_magic">eater of magic</Link>, <Link to="/ragepower/fierce_fortitude">fierce fortitude</Link>, <Link to="/ragepower/flesh_wound">flesh wound</Link>, <Link to="/ragepower/guarded_life">guarded life</Link>, <Link to="/ragepower/intimidating_glare">intimidating glare</Link>, <Link to="/ragepower/cairn_linnorm_death_curse">cairn linnorm death curse</Link>, <Link to="/ragepower/tarn_linnorm_death_curse">tarn linnorm death curse</Link>, and <Link to="/ragepower/renewed_vitality">renewed vitality</Link>.</p>
</>};
const _herald_of_the_horn = {title: "Herald of the Horn", jsx: <><h2 id="arc-skald-herald_of_the_horn-herald-of-the-horn">Herald of the Horn</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 115</Link><br/>Even the loudest voice can often times be drowned out by the din of battle. Whether with the polished metal trumpet of a standing army or the crude curved animal horn of savage raiders, a herald of the horn sounds his raging song with thunderous blasts, which can bolster allies or shatter castle walls.</p>
<p><strong>Arcane Bond (Ex):</strong> At 1st level, a herald of the horn forms a powerful bond with a horn (musical instrument). This functions like an <Link to="/sorcbloodline/arcane">arcane</Link> bloodline <Link to="/class/sorcerer">sorcerer's</Link> arcane bond with an object. Like a weapon, wand, or staff, the horn must be held in one hand when the herald of the horn casts skald spells.</p>
<p>This ability replaces <strong className="hl">Scribe Scroll</strong>.</p>
<p><strong>Rousing Retort (Su):</strong> At 5th level, a herald of the horn can use raging song to free allies from enchantment effects and fear. When beginning a raging song, he can expend 4 rounds of that ability to grant all allies within 60 feet a new saving throw against an ongoing enchantment or fear effect. The allies gain a +2 bonus on this new saving throw.</p>
<p>This ability replaces the first daily use of <strong className="hl">spell kenning</strong> gained at 5th level.</p>
<p><strong>Horn Call (Su):</strong> At 7th level, a herald's horn enhances his sonic spells. If a skald spell with the sonic descriptor is cast using the horn, its DC increases by 1. These DCs increase by an additional 1 at 13th and 19th levels.</p>
<p>This ability replaces <strong className="hl">lore master</strong>.</p>
<p><strong>Crumbling Blast (Su):</strong> At 11th level, a herald of the horn can use his horn to create a devastating shock wave of energy. Once per day, he can sound a note on the horn that functions like a <Link to="/magic-wondrous/horn_of_blasting">horn of blasting</Link> (DC = 10 + 1/2 the herald of the horn's level + his Charisma bonus). At 17th level, the herald of the horn can use this ability twice per day and it functions like a <Link to="/magic-wondrous/greater_horn_of_blasting">greater horn of blasting</Link>. Unlike an actual horn of blasting, this ability does not carry the risk of destroying the horn.</p>
<p>This ability replaces the second and third daily uses of <strong className="hl">spell kenning</strong> gained at 11th and 17th levels.</p>
<p><strong>Rage Powers:</strong> The following rage powers complement the herald of the horn archetype: <Link to="/ragepower/battle_roar">battle roar</Link>, <Link to="/ragepower/energy_absorption">energy absorption</Link>, <Link to="/ragepower/energy_eruption">energy eruption</Link>, <Link to="/ragepower/fearless_rage">fearless rage</Link>, <Link to="/ragepower/knockback">knockback</Link>, <Link to="/ragepower/knockdown">knockdown</Link>, <Link to="/ragepower/smasher">smasher</Link>, and <Link to="/ragepower/swift_foot">swift foot</Link>.</p>
</>};
const _hunt_caller = {title: "Hunt Caller", jsx: <><h2 id="arc-skald-hunt_caller-hunt-caller">Hunt Caller</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 85</Link><br/>Hunt callers are skalds whose songs draw their allies into the animal world. They can invoke the inner beasts of those who observe their supernatural performances - a talent that causes many to mistake the hunt caller and her allies for lycanthropes or other shapechanging creatures.</p>
<p><strong>Raging Song (Su):</strong> A hunt caller gains access to the following raging songs.</p>
<blockquote>
<p><strong>Song of the Senses (Su):</strong> At 2nd level, the hunt caller's raging song unlocks animalistic senses in her allies. By spending 1 round of raging song, the hunt caller can affect all allies within 60 feet for 1 hour. The allies gain low-light vision and a +2 competence bonus on Perception and Survival checks. If an ally already has low-light vision, the range doubles. The skald must continue to perform the song for the remainder of the hour; otherwise, its effects end, but only 1 round of raging song is expended for that hour.</p>
<p>This raging song replaces well-versed.</p>
<p><strong>Call of the Wild (Su):</strong> At 6th level, the hunt caller's raging song can transform herself and her allies within 60 feet into animalistic shapes, as per <Link to="/spell/beast_shape_i">beast shape I</Link> (Small animals only) at her caster level. The same transformation applies to all targets. By spending 1 round of raging song per target, the hunt caller can affect any number of allies within 60 feet for 1 hour. When in animal form, the hunt caller is treated as able to speak normally for the purpose of using raging song, but not for using other abilities that require speech (such as spellcasting). The skald must continue to perform the song for the remainder of the hour; otherwise, its effects end, but only 1 round of raging song per target is expended for that hour.</p>
<p>At 10th level, the hunt caller can instead choose a Medium animal shape. At 14th level, the hunt caller can choose shapechanger's gift or the effects of <Link to="/spell/beast_shape_ii">beast shape II</Link>. At 18th level, she can choose the effects of <Link to="/spell/beast_shape_iii">beast shape III</Link>.</p>
<p>This raging song replaces song of strength, song of the fallen, and the rage power gained at 18th level.</p>
</blockquote>
<p><strong>Wilderness Magic (Su):</strong> At 5th level and again at 11th level and 17th level, the hunt caller adds two spells of any level she can cast from the <Link to="/main/druid_spell">druid spell list</Link> to her class spell list and list of skald spells known.</p>
<p>This replaces <strong className="hl">spell kenning</strong>.</p>
<p><strong>Inspire Scent (Ex):</strong> At 6th level, the hunt caller gains the <Link to="/ragepower/scent">scent</Link> rage power. Her song of the senses and inspired rage raging songs both grant affected allies this rage power.</p>
<p>This replaces the <strong className="hl">rage power</strong> gained at 6th level.</p>
<p><strong>Rage Powers:</strong> The following rage powers complement the hunt caller archetype: <Link to="/ragepower/animal_fury">animal fury</Link>, <Link to="/ragepower/battle_roar">battle roar</Link>, <Link to="/ragepower/beast_totem_greater">beast totem (lesser, normal, and greater)</Link>, <Link to="/ragepower/intimidating_glare">intimidating glare</Link>, <Link to="/ragepower/low_light_vision">low-light vision</Link>, <Link to="/ragepower/no_escape">no escape</Link>, <Link to="/ragepower/primal_scent">primal scent</Link>, <Link to="/ragepower/quick_reflexes">quick reflexes</Link>, <Link to="/ragepower/sprint">sprint</Link>, and <Link to="/ragepower/swift_foot">swift foot</Link>.</p>
</>};
const _instigator = {title: "Instigator", jsx: <><h2 id="arc-skald-instigator-instigator">Instigator</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 49</Link><br/>The instigator influences the will of the people, turning them toward his own purposes. Regardless of whether what the instigator says is true or not, he inflames emotions in others and suspends their reason. Instigators are often revolutionaries, political or otherwise, but they might also be warmongering firebrands or wicked souls who spread prejudice against others.</p>
<p><strong>Raging Song (Su):</strong> An instigator gains the following raging songs.</p>
<blockquote>
<p><strong>Song of Rabble-Rousing (Sp):</strong> At 5th level, the instigator can perform for 1 full round and spend 4 rounds of raging song. This affects those who hear the song for up to 1 hour as per <Link to="/spell/enthrall">enthrall</Link>.</p>
</blockquote>
<p>This ability replaces <strong className="hl">spell kenning</strong>.</p>
<blockquote>
<p><strong>Song of Riot (Sp, Su):</strong> At 10th level, the instigator can fill the hearts of his listeners with hatred and rouse them into a frenzy. He can use this performance on all targets with fewer than 4 Hit Dice and a Wisdom score lower than 16 who are currently enthralled, without disrupting the enthrall effect (even if a creature succeeds at its saving throw). This ability requires a standard action to activate and costs 4 additional rounds of raging song.</p>
<p>Enthralled creatures must each attempt a new saving throw against an effect that functions as the <Link to="/spell/foster_hatred">foster hatred</Link> spell, except that, unlike with the spell, the instigator is free to choose subgroups, organizations, religions, or the like regardless of the targets' races. Creatures that fail the saving throw or choose to forego it also gain the effects of the instigator's raging song whenever they attack the target of their hatred, for as long as the foster hatred effect lasts; however, they do not gain the effects of the instigator's rage powers when they're under the effects of raging song in this way.</p>
</blockquote>
<p>This ability replaces <strong className="hl">dirge of doom</strong>.</p>
<p><strong>Revolutionary Heart (Su):</strong> At 7th level, an instigator's tumultuous mastery of demagoguery and revolution makes it difficult for others' compulsions to sway him. Once per day, when he fails a saving throw against a compulsion effect, he can attempt another saving throw after 1 time increment (1 round if the effect is measured in rounds, 1 minute if the effect is measured in minutes, 10 minutes if the spell is measured in 10-minute increments, and so on). Every 6 skald levels thereafter, he gains an additional daily use of this ability (to a maximum of 3 per day at 19th level).</p>
<p>This ability replaces <strong className="hl">lore master</strong>.</p>
</>};
const _red_tongue = {title: "Red Tongue", jsx: <><h2 id="arc-skald-red_tongue-red-tongue">Red Tongue</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 26</Link><br/>In the young tengu nation of Kwanlai, politicos argue endlessly over how best to rule and guide a people who have been parasites and vassals to other nations for millennia. The <Link to="/race/tengu">tengu</Link> tendency toward dramatic flourishes and rhetoric only complicates this debate, creating an environment in which political clubs led by hot-blooded firebrands - referred to as red tongues in polite company - dominate the political scene by swaying emotions in the moment and wielding magic in the shadows. Many political debates in Hisuikarasu end in violent brawls or daring duels.</p>
<p><strong>Great Orator:</strong> A red tongue can activate his raging song performances only by using the Perform (oratory) skill. He must select Perform (oratory) as his versatile performance choice at 2nd level.</p>
<p>This ability modifies the <strong className="hl">raging song</strong> and <strong className="hl">versatile performance</strong> abilities.</p>
<p><strong>Seed of Discord (Su):</strong> The fiery outlook of the red tongue imparts instinctual knowledge to invest arcane energy into his proclamations and denouncements. The red tongue gains the following bonus spells known as he reaches the appropriate level to cast each spell: <Link to="/spell/doom">doom</Link> (1st), <Link to="/spell/castigate">castigate</Link> (2nd), <Link to="/spell/charm_monster">charm monster</Link> (3rd), <Link to="/spell/denounce">denounce</Link> (4th), <Link to="/spell/greater_command">greater command</Link> (5th), <Link to="/spell/mass_eagles_splendor">mass eagle's splendor</Link> (6th).</p>
<p><strong>Rile (Ex):</strong> The red tongue is particularly skilled at provoking others to action, even when ignorant on a subject. He adds 1/2 his skald level on Bluff checks to deceive or conceal his motives and on Intimidate checks to improve a creature's attitude.</p>
<p>This ability replaces <strong className="hl">bardic knowledge</strong>.</p>
<p><strong>Rogue Talents (Ex):</strong> At 7th level, the red tongue learns a <Link to="/ability/rogue_talent">rogue talent</Link> of his choice, treating his skald level as his rogue level. He cannot select a talent that requires or modifies a class feature he does not have (such as sneak attack), and he must meet all other prerequisites. For every 5 skald levels beyond 7th, he gains a new rogue talent.</p>
<p>This ability replaces the <strong className="hl">versatile performance</strong> selections normally gained at 7th, 12th, and 17th levels.</p>
<p><strong>Duplicitous Rhetoric (Su):</strong> At 7th level, when a red tongue begins a raging song, he can select a single rogue talent he knows and grant it to all creatures under the influence of his inspired rage. If a rogue talent is limited to a certain number of uses per day, each creature affected is limited to a single use and cannot gain additional uses from a raging song for 24 hours, even if the red tongue ends his raging song and starts again.</p>
</>};
const _serpent_herald = {title: "Serpent Herald", jsx: <><h2 id="arc-skald-serpent_herald-serpent-herald">Serpent Herald</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 28</Link><br/>Warrior bands devoted to Ragadahn are often led by a serpent herald, whose deep roars shake the earth itself. Rumors tell of waves of snakes slithering forth from their nests in awe as these bellowing commanders take on serpentine features.</p>
<p><strong>Serpentine Rage (Su):</strong> At 3rd level, a serpent herald can call down Ragadahn's features onto his allies. Allies affected by the serpent herald's inspired rage ability gain a serpentine aspect of the serpent herald's choice (all affected allies gain the same aspect). The serpent herald may choose from the following aspects:</p>
<ul>
<li><em>Movement</em> (+8 competence bonus on Climb and Swim checks, and targets can take 10 on these checks even when rushed or threatened)</li>
<li><em>Scales</em> (+2 natural armor bonus)</li>
<li><em>Senses</em> (low-light vision and <Link to="/umr/scent">scent</Link>)</li>
<li><em>Natural bite attack</em> (1d4 damage <Link to="/umr/natural_attack">for a Medium creature</Link>, plus poison).</li>
</ul>
<div className="sideNoteWrap"><ScrollContainer id="arc-skald-serpent_herald--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={9} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th colSpan={4} scope="col" className="title">Poison</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Bite-injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the serpent herald's level + his Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1 <Link to="/rule/con_damage">Con damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><p>This is a polymorph effect; a creature under another polymorph effect, such as wild shape, does not gain the aspect. If the serpent herald grants one of these aspects to himself, he also gains the ability to <Link to="/spell/speak_with_animals">speak with animals</Link> (reptiles and creatures with the aquatic subtype only) for as long as he has the aspect. The serpent herald must have the <em>inspired rage</em> raging song to use this ability.</p>
<p>This ability replaces the <strong className="hl">rage power</strong> gained at 3rd level.</p>
<p><strong>Serpent Shape (Su):</strong> At 5th level, a serpent herald gains the ability to use wild shape to take the form of a reptile or an aquatic animal once per day, as the <Link to="/class/druid">druid</Link> class feature. His effective druid level for this ability is equal to his serpent herald level - 1. This doesn't allow him to assume other forms, such as elementals or other kinds of animals. When in animal form, the serpent herald is treated as able to speak normally for the purpose of using raging song, but not for using other abilities that require speech (such as spellcasting).</p>
<p>At 11th level, a serpent herald can use this ability twice per day and gains the benefits of the <Link to="/feat/wild_speech">Wild Speech</Link> feat while using this ability, treating his druid level as his serpent herald level - 1.</p>
<p>At 17th level, a serpent herald can use this ability three times per day. In addition, he gains the supernatural resiliency of a linnorm, gaining the effects of freedom of movement while using this ability.</p>
<p>This ability replaces <strong className="hl">spell kenning</strong>.</p>
<p><strong>Rage Powers:</strong> The following <Link to="/ability/rage_powers">rage powers</Link> complement the serpent herald archetype: animal fury, <Link to="/ragepower/battle_roar">battle roar</Link> <Link to="/ragepower/knockback">knockback</Link>, <Link to="/ragepower/knockdown">knockdown</Link>, linnorm death curse (any), <Link to="/ragepower/low_light_vision">low-light vision</Link>, <Link to="/ragepower/sprint">sprint</Link>, and <Link to="/ragepower/swift_foot">swift foot</Link>.</p>
</>};
const _spell_warrior = {title: "Spell Warrior", jsx: <><h2 id="arc-skald-spell_warrior-spell-warrior">Spell Warrior</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 116</Link><br/>The spell warrior uses his arcane knowledge rather than his rage to turn the tide of battle in favor of himself and his allies. With a clash of bracers and a sonorous chant, the Spell Warrior's song reaches out to touch the weapons of his allies, lending them arcane power. While his song does not inspire rage, he can use the power of his music to enchant the weapons of his allies and counter the spells of his foes.</p>
<p><strong>Improved Counterspell:</strong> At 1st level, the spell warrior receives the <Link to="/feat/improved_counterspell">Improved Counterspell</Link> feat as a bonus feat.</p>
<p>This ability replaces <strong className="hl">Scribe Scroll</strong>.</p>
<p><strong>Weapon Song (Su):</strong> A spell warrior gains the following raging song, allowing him to grant his ally's weapons enhancement bonuses and special powers.</p>
<blockquote>
<p><strong>Enhance Weapons (Su):</strong> At 1st level, the spell warrior can grant a +1 enhancement bonus to the weapons (including ammunition) of allies within 60 feet. At 5th level and every 5 levels thereafter, this enhancement bonus increases by 1. The maximum bonus gained is based upon the number of weapons affected: +5 to one weapon, +4 to two weapons, +3 to three weapons, or +2 to four or more weapons. Fifty pieces of ammunition count as one weapon for this purpose. The wielder of a weapon enhanced by this raging song counts as if he were under the effect of an inspired rage raging song for all purposes involving the skald's rage powers.</p>
<p>These bonuses can also be used to add any of the following weapon special abilities to the weapons enhanced by this ability: <Link to="/magic-enh/dancing">dancing</Link>, <Link to="/magic-enh/defending">defending</Link>, <Link to="/magic-enh/distance">distance</Link>, <Link to="/magic-enh/flaming">flaming</Link>, <Link to="/magic-enh/frost">frost</Link>, <Link to="/magic-enh/ghost_touch">ghost touch</Link>, <Link to="/magic-enh/keen">keen</Link>, <Link to="/magic-enh/mighty_cleaving">mighty cleaving</Link>, <Link to="/magic-enh/returning">returning</Link>, <Link to="/magic-enh/shock">shock</Link>, <Link to="/magic-enh/seeking">seeking</Link>, or <Link to="/magic-enh/speed">speed</Link>. Adding these weapon special abilities consumes an amount of bonus equal to the <Link to="/main/magic_enhancements">special ability's cost</Link>. These enhancement bonuses and special abilities overlap with any enhancements or special abilities the weapon already has, though duplicate special abilities do not stack. If an affected weapon is not magical, at least a +1 enhancement bonus must be added before any other special abilities can be.</p>
<p>The bonus and special abilities granted by this raging song are determined when the song begins, and cannot be changed until the raging song ends and another is begun. These bonuses apply to only one end of a double weapon.</p>
</blockquote>
<p>This ability replaces the <strong className="hl">inspired rage</strong> raging song.</p>
<p><strong>Greater Counterspell (Su):</strong> At 5th level, the spell warrior gains increased versatility when attempting to counteract enemy spellcasting. When counterspelling, he can expend two skald spell slots of the same level or higher than the opponent's spell, regardless of the school of that spell.</p>
<p>At 11th level, when counterspelling an opponent's spell, the spell warrior only has to expend one skald spell slot of the level of the spell being cast.</p>
<p>At 17th level, the spell warrior gains <Link to="/feat/parry_spell">Parry Spell</Link> as a bonus feat. The skald does not have to meet the prerequisites for this feat.</p>
<p>This ability replaces <strong className="hl">spell kenning</strong>.</p>
<p><strong>Song of Arcane Manipulation (Su):</strong> At 10th level, a spell warrior can sacrifice his own rage magic to counter an opponent's spell. When using raging song, he can counterspell as an immediate action without interrupting his raging song. However, in addition to expending a spell slot (or spell slots) to attempt to counter the opponent's spell, the skald must expend 1 round of raging song per spell level of the opponent's spell (for example, if attempting to counterspell a 3rd-level spell, the skald must expend one of his own 3rd-level spell slots and 3 rounds of raging song).</p>
<p>This ability replaces the <strong className="hl">dirge of doom</strong> raging song.</p>
<p><strong>Spell Tamper (Su):</strong> At 20th level, when a spell warrior successfully counterspells an opponent's spell, the opponent suffers a backlash of magical energy and takes 1d6 points of damage per spell level of the countered spell. If the opponent succeeds at a Will saving throw (DC = 10 + 1/2 the skald's level + the skald's Charisma modifier), the damage is reduced by half. This damage is magical and is not subject to damage reduction or energy resistance.</p>
<p>This ability replaces <strong className="hl">master skald</strong>.</p>
<p><strong>Rage Powers:</strong> The following rage powers complement the spell warrior archetype: <Link to="/ragepower/clear_mind">clear mind</Link>, <Link to="/ragepower/disruptive">disruptive</Link>, <Link to="/ragepower/eater_of_magic">eater of magic</Link>, <Link to="/ragepower/elemental_rage_greater">elemental rage (lesser, normal, and greater)</Link>, <Link to="/ragepower/energy_resistance">energy resistance</Link>, <Link to="/ragepower/spell_sunder">spell sunder</Link>, <Link to="/ragepower/spellbreaker">spellbreaker</Link>, <Link to="/ragepower/sunder_enchantment">sunder enchantment</Link>, <Link to="/ragepower/superstition">superstition</Link>, and <Link to="/ragepower/witch_hunter">witch hunter</Link>.</p>
</>};
const _sunsinger = {title: "Sunsinger", jsx: <><h2 id="arc-skald-sunsinger-sunsinger">Sunsinger</h2>
<p><strong>Sources</strong> <Link to="/source/qadira_jewel_of_the_east">Qadira, Jewel of the East pg. 33</Link><br/>Qadiran sunsingers are particularly religious skalds of Sarenrae who call down their goddess's glory to fill soldiers with fire.</p>
<p><strong>Alignment:</strong> A sunsinger skald must be lawful good, neutral good, or neutral, and must worship <Link to="/faith/sarenrae">Sarenrae</Link>.</p>
<p><strong>Pillar of Light (Su):</strong> At 3rd level, a sunsinger skald can use her raging song to call upon her goddess to imbue her with glory and make all who see it pay heed. A great beam of sunlight shines down upon the skald, casting bright light in a 30-foot radius, and allows the skald's raging song to function as the <Link to="/performance/fascinate">fascinate</Link> bardic performance.</p>
<p>This ability replaces <strong className="hl">song of marching</strong>.</p>
<p><strong>Channel Solar Energy (Su):</strong> At 5th level, a sunsinger skald can <Link to="/ability/channel_energy">channel energy</Link> as a cleric once per day to heal wounds or harm undead like a good-aligned cleric. When she does so, she fills the area affected by the channeled energy with light, and can outline creatures in the area of effect as per <Link to="/spell/faerie_fire">faerie fire</Link>. The sunsinger uses her skald level as her effective cleric level when channeling positive energy. Undead who are particularly harmed by sunlight take a -2 penalty on saving throws against this channeled energy, and take 1 additional point of damage per die of damage dealt by the effect.</p>
<p>At 11th level, a sunsinger can channel energy twice per day. At 17th level, she can use this ability three times per day.</p>
<p>This ability replaces <strong className="hl">spell kenning</strong>.</p>
</>};
const _totem_channeler = {title: "Totem Channeler", jsx: <><h2 id="arc-skald-totem_channeler-totem-channeler">Totem Channeler</h2>
<p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 24</Link><br/>Some Shoanti skalds discover deeper truths in their tribes' totems. These skalds, known as totem channelers, learn how to share the totems' gifts with their allies in the heat of battle.</p>
<p><strong>Totemic Versatility (Ex):</strong> When a totem channeler learns a new rage power, he can select from more than one group of <Link to="/arc-barbarian/totem_rage_power">totem rage powers</Link>, even though he normally could not do so. Totem rage powers grant benefits related to a theme, are organized in groups of three, and usually have the word "totem" in their name. When the totem channeler starts an inspired rage raging song, he can add totem rage powers from only one group at a time. He can change the group of added totem rage powers by ending the current inspired rage and starting a new one.</p>
<p>This replaces <strong className="hl">bardic knowledge</strong> and alters <strong className="hl">rage powers</strong>.</p>
<p><strong>Tandem Totems (Ex):</strong> At 5th level, when a totem channeler starts an inspired rage raging song and adds a totem rage power, he can add totem rage powers from a different group. Adding or maintaining totem rage powers from the additional group requires spending 1 additional round of raging song each round. He can activate up to two additional totem groups at 11th level and up to three additional totem groups at 17th level. He must spend 1 additional round of raging song each round for each additional totem group. If the totem channeler does not have enough rounds of raging song remaining to maintain his inspired rage, the song ends.</p>
<p>This replaces <strong className="hl">spell kenning</strong>.</p>
<p><strong>Totem's Guidance (Su):</strong> At 9th level, the totem channeler can draw strength and protection from his totem powers when he wades into battle with song on his lips. When he adds a totem rage power to his inspired rage, he and his allies gain a +1 insight bonus to AC and on saving throws for the duration of the totem channeler's raging song. At 14th level, this bonus increases to +2. This bonus applies only to the first totem rage power he applies to his inspired rage.</p>
<p>This replaces <strong className="hl">damage reduction</strong>.</p>
</>};
const _totemic_skald = {title: "Totemic Skald", jsx: <><h2 id="arc-skald-totemic_skald-totemic-skald">Totemic Skald</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 117</Link><br/>The totemic skald forms a close connection to an animal totem. Through the power of this mystical ally, the skald can change shapes, assuming its form as his own. Additionally, the totem animal grants the skald a measure of its spiritual power that he can share with his allies.</p>
<p><strong>Totem (Su):</strong> At 3rd level, the totemic skald chooses one animal from the hunter's <Link to="/ability/animal_focus">animal focus</Link> list. Once selected, this choice cannot be changed. This animal becomes the skald's personal totem animal and influences his later abilities. He gains the following rage power.</p>
<blockquote>
<p><strong>Song of the Beast (Su):</strong> The totemic skald grants the animal focus abilities of his totem animal (as the hunter's animal focus ability) to all allies affected by his raging song. He treats his skald level as his hunter level for determining the abilities of the animal focus (such as the improvements gained at 8th and 15th level).</p>
</blockquote>
<p>This ability replaces the <strong className="hl">rage power</strong> gained at 3rd level.</p>
<p><strong>Totem Empathy (Ex and Sp):</strong> At 4th level, the totemic skald can improve the attitude of animals of the same type as his totem. This ability functions just like a Diplomacy check to improve the attitude of a person. The skald rolls 1d20 and adds his skald level and his Charisma modifier to determine the totem empathy check result. The typical domestic animal has a starting attitude of indifferent, while wild animals are usually unfriendly.</p>
<p>In addition, at 4th level, the totemic skald can cast <Link to="/spell/charm_animal">charm animal</Link> once per day as a spell-like ability, using his skald level as his caster level and his Charisma modifier to determine the DC. This only functions against animals that are of the same type as his totem animal (subject to GM discretion). At 8th level, and every 4 levels thereafter, he can use this ability one additional time per day.</p>
<p>This ability replaces <strong className="hl">uncanny dodge</strong> and <strong className="hl">improved uncanny dodge</strong>.</p>
<p><strong>Wild Shape (Su):</strong> At 5th level, a totemic skald gains the ability to wild shape into the form of a Small or Medium version of his totem animal, as the <Link to="/class/druid">druid</Link> class feature. His effective druid level for this ability is equal to his skald level - 1. He can use this ability twice per day at 11th level, and three times per day at 17th level. This doesn't allow the skald to assume other forms, such as elementals, plants, or other kinds of animals.</p>
<p>When in animal form, the skald is treated as able to speak normally for the purpose of using raging song, but not for using other abilities that require speech (such as spellcasting). The skald uses his class level as his druid level for the purpose of qualifying for feats that affect wild shape (such as <Link to="/feat/wild_speech">Wild Speech</Link>).</p>
<p>This ability replaces <strong className="hl">spell kenning</strong>.</p>
<p><strong>Rage Powers:</strong> The following rage powers complement the totemic skald archetype: <Link to="/ragepower/animal_fury">animal fury</Link>, <Link to="/ragepower/beast_totem_greater">beast totem (lesser, normal, and greater)</Link>, <Link to="/ragepower/knockback">knockback</Link>, <Link to="/ragepower/knockdown">knockdown</Link>, <Link to="/ragepower/low_light_vision">low-light vision</Link>, <Link to="/ragepower/primal_scent">primal scent</Link>, <Link to="/ragepower/scent">scent</Link>, <Link to="/ragepower/sprint">sprint</Link>, and <Link to="/ragepower/swift_foot">swift foot</Link>.</p>
</>};
const _twilight_speaker = {title: "Twilight Speaker", jsx: <><h2 id="arc-skald-twilight_speaker-twilight-speaker">Twilight Speaker</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 12</Link><br/>From the extraordinarily reclusive Snowcaster elves come the twilight speakers, who consider it a sacred duty to seek out and befriend non-elven communities. These elves travel among outsiders as envoys, diplomats, traders, and even spies as events demand. Deeply devoted to the elven goddess Findeladlara, twilight speakers wander far and wide, vigilant for threats to their homes and their people.</p>
<p>Twilight speaker is a skald archetype that is available only to <Link to="/race/elves">elves</Link>.</p>
<p><strong>Devout:</strong> A twilight speaker must worship the elven goddess <Link to="/faith/findeladlara">Findeladlara</Link>, and his alignment must be within one step of chaotic good. A twilight speaker who does not meet these requirements cannot use inspired devotion or Findeladlara's blessing.</p>
<p><strong>Twilight Envoy:</strong> A twilight speaker gains a bonus equal to half his skald level on Bluff, Diplomacy, and Sense Motive checks.</p>
<p>This replaces <strong className="hl">bardic knowledge</strong>.</p>
<p><strong>Raging Song (Su):</strong> A twilight speaker gains the following raging songs.</p>
<blockquote>
<p><strong>Inspired Devotion (Su):</strong> The twilight speaker inspires fervor rather than fury. Affected allies gain a +1 competence bonus on attack rolls and a +1 morale bonus on saving throws. At 6th, 12th, and 18th levels, these bonuses increase by 1.</p>
<p><strong>Song of Understanding (Su):</strong> At 6th level, a twilight speaker can use his raging song to create an aura that allows creatures to speak and understand each others' languages. By expending 4 rounds of raging song, the twilight speaker creates an aura that grants him and creatures in a 60-foot <Link to="/misc/spread">spread</Link> centered on him the effects of <Link to="/spell/tongues">tongues</Link>. This aura uses the skald's level as the caster level for all purposes, including duration. A twilight speaker can dismiss this aura as a standard action.</p>
<p><strong>Song of Secrecy (Su):</strong> At 10th level, a twilight speaker can use his song to shroud allies from detection. Affected allies gain a bonus equal to half the twilight speaker's skald level on Stealth checks, and they can attempt such checks without cover or concealment. Song of secrecy is audible only to those affected.</p>
</blockquote>
<p>This replaces <strong className="hl">inspired rage</strong>, <strong className="hl">song of strength</strong>, and <strong className="hl">dirge of doom</strong>.</p>
<p><strong>Community Domain:</strong> At 2nd level, a twilight speaker gains the <Link to="/domain/community">Community</Link> domain and gains the powers and spells of the domain. He treats his skald level as his cleric level, and he uses his Charisma modifier in place of his Wisdom modifier for the purposes of the domain's abilities.</p>
<p>This replaces <strong className="hl">versatile performance</strong> and <strong className="hl">well-versed</strong>.</p>
<p><strong>Findeladlara's Blessing (Su):</strong> At 7th level, once per day a twilight speaker can activate any spell trigger or spell completion item as though the spell were on the skald spell list. He can use this ability an additional time per day at 13th and 19th levels.</p>
<p>This ability replaces <strong className="hl">lore master</strong>.</p>
<p><strong>Findeladlara's Hand:</strong> At 20th level, the twilight speaker can use Findeladlara's blessing at will.</p>
<p>This replaces <strong className="hl">master skald</strong>.</p>
</>};
const _undying_word = {title: "Undying Word", jsx: <><h2 id="arc-skald-undying_word-undying-word">Undying Word</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 5</Link><br/>Some who have survived the Mana Wastes cannot accept defeat, and those who have learned to speak the undying word can lend others the strength to endure.</p>
<p><strong>Bonus Feat:</strong> At 1st level and every 6 skald levels thereafter, an undying word gains a bonus feat in addition to those gained from normal advancement. He must meet the prerequisites for the feat, and it must include Endurance as a prerequisite or be selected from the following list: <Link to="/feat/endurance">Endurance</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, or <Link to="/feat/improved_great_fortitude">Improved Great Fortitude</Link>.</p>
<p>This replaces <strong className="hl">scribe scroll</strong> and <strong className="hl">lore master</strong>.</p>
<p><strong>Undying Song (Su):</strong> An undying word gains the following raging songs, granting his allies the ability to withstand punishment.</p>
<blockquote>
<p><strong>Inspire Resilience (Su):</strong> At 1st level, the undying word can grant his companions supernatural endurance. This functions as inspired rage, but it grants neither a bonus to his allies' Strength nor a -1 penalty to their AC.</p>
<p>This raging song replaces inspired rage.</p>
<p><strong>Song of Defiance (Su):</strong> At 6th level, an undying word can shield his allies against the environment. By expending 1 round of raging song, the undying word grants all allies within 60 feet the effects of <Link to="/spell/endure_elements">endure elements</Link> for the next hour. The undying word must continue to perform for the remainder of the hour; otherwise its effects end, but only 1 round of raging song is expended for that hour.</p>
<p>This raging song replaces song of strength.</p>
<p><strong>Dirge of Determination (Su):</strong> At 10th level, an undying word can urge his allies within 30 feet to overcome hardships. Affected allies treat ability damage, ability drain, and penalties to ability scores as though each were 2 lower. This reduction increases to 4 at 15th level, and to 6 at 20th level. The undying word can never reduce a penalty below 0 or increase an ability score beyond its original value in this manner.</p>
<p>This raging song replaces dirge of doom.</p>
</blockquote>
<p><strong>Endurance Power (Su):</strong> At 5th level and every 6 skald levels thereafter, an undying word learns an additional rage power that affects him and any allies under the influence of his inspire resilience. This rage power must be selected from the following list: <Link to="/ragepower/clear_mind">clear mind</Link>, <Link to="/ragepower/energy_absorption">energy absorption</Link>, <Link to="/ragepower/energy_resistance">energy resistance</Link>, <Link to="/ragepower/flesh_wound">flesh wound</Link>, <Link to="/ragepower/greater_energy_resistance">greater energy resistance</Link>, <Link to="/ragepower/greater_guarded_life">greater guarded life</Link>, <Link to="/ragepower/guarded_life">guarded life</Link>, <Link to="/ragepower/increased_damage_reduction">increased damage reduction</Link>, <Link to="/ragepower/internal_fortitude">internal fortitude</Link>, or <Link to="/ragepower/superstition">superstition</Link>. This otherwise functions as the skald's rage powers ability.</p>
<p>This replaces <strong className="hl">spell kenning</strong>.</p>
</>};
const _urban_skald = {title: "Urban Skald", jsx: <><h2 id="arc-skald-urban_skald-urban-skald">Urban Skald</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_streets">Heroes of the Streets pg. 25</Link><br/>The urban skald finds that challenging and mocking foes is sometimes more effective than inspiring uncontrolled rage in a city.</p>
<p><strong>Weapon and Armor Proficiency:</strong> An urban skald is not proficient with medium armor. This ability modifies the skald's weapon and armor proficiencies.</p>
<p><strong>Raging Song (Su):</strong> An urban skald gains a different selection of raging songs, as noted below. The save DC for a raging song that allows a save is equal to 10 + 1/2 the urban skald's skald level + his Charisma modifier.</p>
<blockquote>
<p><strong>Controlled Inspired Rage (Su):</strong> When the urban skald inspires rage, he does not grant the normal benefits. Instead, he can apply a +2 morale bonus to his allies' Strength, Dexterity, or Constitution. This bonus increases to +4 at 8th level and to +6 at 16th level. The urban skald can apply the full bonus to one ability score or split the bonus between several scores in increments of 2. The choice applies to all affected allies. The controlled inspired rage grants no bonus on Will saves, imposes no penalties to AC, and does not prevent affected allies from using Intelligence-, Dexterity-, or Charisma-based skills.</p>
</blockquote>
<p>This alters <strong className="hl">inspired rage</strong>.</p>
<blockquote>
<p><strong>Infuriating Mockery (Su):</strong> At 3rd level, the urban skald can inspire reckless fury in one foe within 30 feet. If the foe fails a Will saving throw, it takes a -2 penalty to AC and on attack rolls, cannot use any Intelligence-, Dexterity-, or Charisma-based skills, and must succeed at a <Link to="/rule/concentration">concentration</Link> check to cast spells (DC = 15 + spell level) for as long as it remains in range of the skald and the performance is maintained. At 7th level and every 4 levels thereafter, the urban skald can target an additional foe with this ability.</p>
</blockquote>
<p>This replaces <strong className="hl">song of marching</strong> and <strong className="hl">damage reduction</strong>.</p>
<blockquote>
<p><strong>Humiliating Defamation (Su):</strong> At 10th level, the urban skald can ostracize a foe. The song has one primary target, who the skald must see and name or describe. That target must attempt a Will save. On a failed save, the primary target cannot benefit from any morale bonus or teamwork feats, cannot treat any creature as an ally, and must attempt to save against any spell cast on it (including harmless spells, even if it casts them on itself). These effects remain as long as the primary target can hear the skald and the skald maintains the performance.</p>
<p>All other foes within 60 feet of the skald are secondary targets. Secondary targets must succeed at Will saves or they cannot treat the primary target as an ally, and cannot target it with spells or abilities that are harmless. These effects remain as long as the secondary targets are within 60 feet of the skald and the skald maintains the performance. This is a sonic mind-affecting charm effect.</p>
</blockquote>
<p>This ability replaces <strong className="hl">dirge of doom</strong>.</p>
<p><strong>Back of the Crowd (Ex):</strong> At 3rd level, an urban skald has learned to maximize the defensive benefit of being near allies. He gains a +1 dodge bonus to AC when adjacent to 2 or more allies. This bonus increases to +2 at 9th level and to +3 at 15th level.</p>
</>};
const _war_painter = {title: "War Painter", jsx: <><h2 id="arc-skald-war_painter-war-painter">War Painter</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 10</Link><br/>The gripplis of the Valashmai Jungle exhibit savage strength for their size - attributed in part to the frightful magical pigments applied to their skin by the tribes' mystical lore keepers.</p>
<p><strong>Furious Paint (Su):</strong> By spending 10 minutes preparing and applying special paints to his or an ally's skin, a war painter can create patterns that store the effects of one of his raging songs. The war painter must expend 1 or more rounds of his raging song class ability while anointing the ally, and the paint retains its potency until the war painter recovers his daily uses of raging song. The ally can activate the paint as a move action, gaining the benefits of the raging song, including any rage powers as appropriate. This effect lasts a number of rounds equal to the rounds of raging song the war painter expended + the war painter's ranks in Craft (calligraphy, paintings, or tattoos) - but no more than double the number of rounds of raging song expended. By halving the remaining number of rounds of raging song, an ally can suspend the paint's effects as a free action and activate the paint again later as a move action.</p>
<p>A war painter can apply the effects of any feats that affect bardic performance to his furious paint, except effects that extend the effects of performances, such as the <Link to="/feat/lingering_performance">Lingering Performance</Link> feat. A creature can be subject to only one application of furious paint at a time.</p>
<p>This ability modifies the <strong className="hl">raging song</strong> class feature and does not prevent a war painter from performing other raging songs.</p>
<p><strong>Thousand Totems (Su):</strong> At 5th level, a war painter can channel a powerful totem into his furious paints while applying the pigments on an ally. This grants the painted ally the benefits of one additional rage power when the ally activates the furious paints. The war painter does not need to know the rage power, but it must be one for which he qualifies. Furthermore, the war painter can select only <Link to="/ability/rage_powers">a blood rage power</Link> or a <Link to="/arc-barbarian/totem_rage_power">totem rage power</Link>. If the war painter already has a different blood rage or totem rage power that would be applied to the painted ally, this new rage power replaces it and any other rage powers that require it as a prerequisite.</p>
<p>A war painter can use this ability once per day at 5th level, and he gains one additional use at 11th and 17th levels. He can apply this ability multiple times to the same creature, though only to give it rage powers that use the granted rage power as a prerequisite (such as beast totem and greater beast totem).</p>
<p>This ability replaces <strong className="hl">spell kenning</strong>.</p>
<p><strong>Arcane Flourish (Su):</strong> At 7th level, once per day as he finishes applying his furious paint to a creature, a war painter can cast one skald spell with a casting time of no more than 1 standard action and infuse the spell into the paint. Once while benefiting from the paint's raging song, the painted ally can use a standard action to cast the infused spell on herself as if the war painter had cast it. The spell ends when the paint's other effects end. A war painter can infuse only a skald spell whose level is at least 2 levels lower than the highest-level skald spell he can cast. He can infuse any targeted spell in a painted ally, even if its range is personal. The war painter can use this ability twice per day at 13th level and three times per day at 19th level.</p>
<p>This ability replaces <strong className="hl">lore master</strong>.</p>
</>};
const _warlord = {title: "Warlord", jsx: <><h2 id="arc-skald-warlord-warlord">Warlord</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 49</Link><br/>The warlord wields his force of personality like a weapon, intimidating his allies and ensuring that his followers heed his commands. The warlord doesn't inspire his followers so much as instill fear in them. Always watching his foes for moments of vulnerability, the warlord seeks to exploit his enemies' weaknesses to gain victory.</p>
<p><strong>Intimidating Prowess:</strong> A warlord gains <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link> as a bonus feat.</p>
<p>This feat replaces the Scribe Scroll feat.</p>
<p><strong>Unshakable (Ex):</strong> At 2nd level, a warlord develops an unshakable resolve, gaining a +2 bonus on saving throws against fear effects.</p>
<p>This ability replaces <strong className="hl">well-versed</strong>.</p>
<p><strong>Raging Song (Su):</strong> A warlord gains the following raging song.</p>
<blockquote>
<p><strong>Fear Me (Su):</strong> At 5th level, the warlord can remind his allies that failing him is far more frightening than the opposition. This raging song works like distraction, except that it applies to saving throws against fear effects instead of patterns and figments, and the warlord attempts an Intimidate check with a -10 penalty instead of a Perform check. Additionally, the warlord's allies can use the warlord's Intimidate check result (with the -10 penalty) as the DC for attempts to demoralize them using Intimidate.</p>
</blockquote>
<p>This ability replaces <strong className="hl">spell kenning</strong>.</p>
<p><strong>Minions (Ex):</strong> At 7th level, a warlord attracts a group of followers through his fearsome reputation and gains the <Link to="/feat/leadership">Leadership</Link> feat as a bonus feat.</p>
<p>This replaces the <strong className="hl">lore master</strong> ability.</p>
<p><strong>Intimidated Push (Ex):</strong> At 8th level, a warlord inspires fear in his cohort and followers, ensuring they do not fail and thus suffer his wrath. When he uses inspired rage, his cohort increases her morale bonus on Will saves from inspired rage by 1 and his followers increase their morale bonuses on Will saves from inspired rage by 2.</p>
<p>This replaces <strong className="hl">improved uncanny dodge</strong>.</p>
</>};
const _wyrm_singer = {title: "Wyrm Singer", jsx: <><h2 id="arc-skald-wyrm_singer-wyrm-singer">Wyrm Singer</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 14</Link><br/>Wyrm singers spin fragments of the story of the ongoing struggle between noble Apsu and wicked Dahak.</p>
<p><strong>Wyrm Song (Su):</strong> A wyrm singer gains the following raging songs.</p>
<blockquote>
<p><strong>Draconic Rage (Su):</strong> At 1st level, a wyrm singer can kindle an echo of ancient rage felt between warring dragon clans in his allies. This ability acts as inspired rage, except those affected gain a +2 morale bonus on melee attack and damage rolls and a +2 morale bonus on saving throws against paralysis and sleep effects (but they still take a -1 penalty to their AC), rather than inspired rage's normal bonuses. At 4th level and every 4 skald levels thereafter, the song's bonuses on saves against paralysis and sleep effects increase by 1. At 8th and 16th levels, the song's bonus on melee attack and damage rolls increases by 1.</p>
</blockquote>
<p>This ability replaces <strong className="hl">inspired rage</strong>.</p>
<blockquote>
<p><strong>Wyrm Saga (Su):</strong> At 14th level, a wyrm singer embraces the essence of the draconic histories, allowing his allies to manifest aspects of a dragon in their physical forms. The wyrm singer selects a single ally within 60 feet to take on a draconic aspect (as per <Link to="/spell/form_of_the_dragon_i">form of the dragon I</Link>) of a type of the wyrm singer's choice. The ally cannot use the breath weapon attack provided by form of the dragon. The wyrm singer must expend 1 round of raging song each round to maintain wyrm saga, and can affect only a single ally at a time.</p>
</blockquote>
<p>This ability replaces <strong className="hl">song of the fallen</strong>.</p>
<p><strong>Breath Weapon (Su):</strong> At 12th level, once per day as a swift action, a wyrm singer can grant a breath weapon attack to himself or an ally affected by his draconic rage raging song. Using the breath weapon is a standard action, and it affects creatures in a 30-foot cone or a 60-foot line. The breath weapons deals 1d6 points of damage per 2 skald levels the wyrm singer has, and is of an energy type of the wyrm singer's choice (acid, cold, electricity, or fire). Creatures caught in the area can attempt a Reflex save (DC = 10 + 1/2 the wyrm singer's skald level + his Charisma modifier) to halve the damage.</p>
<p>This ability replaces the <strong className="hl">rage power</strong> gained at 12th level.</p>
</>};
export default {augur:_augur,bacchanal:_bacchanal,battle_scion:_battle_scion,bekyar_demon_dancer:_bekyar_demon_dancer,belkzen_war_drummer:_belkzen_war_drummer,boaster:_boaster,bold_schemer:_bold_schemer,court_poet:_court_poet,dragon_skald:_dragon_skald,elegist:_elegist,fated_champion:_fated_champion,herald_of_the_horn:_herald_of_the_horn,hunt_caller:_hunt_caller,instigator:_instigator,red_tongue:_red_tongue,serpent_herald:_serpent_herald,spell_warrior:_spell_warrior,sunsinger:_sunsinger,totem_channeler:_totem_channeler,totemic_skald:_totemic_skald,twilight_speaker:_twilight_speaker,undying_word:_undying_word,urban_skald:_urban_skald,war_painter:_war_painter,warlord:_warlord,wyrm_singer:_wyrm_singer}