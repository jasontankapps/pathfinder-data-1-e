import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _blood_god_disciple = {title: "Blood God Disciple", jsx: <><h2 id="arc-summoner-blood_god_disciple-blood-god-disciple">Blood God Disciple</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 53</Link><br/>A half-orc summoner who devotes himself to one of the bloody orc gods may believe his eidolon is an avatar of that god rather than a mere supernatural creature. A blood god disciple generally fights by the avatar's side and offers it blood sacrifices in exchange for martial prowess. A blood god disciple has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-summoner-blood_god_disciple--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/half_orc">Half-orc</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-summoner-blood_god_disciple-blood-feast-su" icon={["upgrade"]}>
<Pair single id="arc-summoner-blood_god_disciple-blood-feast-su">Blood Feast (Su)</Pair>
<Pair hl title="Replaces">Summon monster I, III, V, VII, and IX spell-like abilities</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Ability"><p>A blood god disciple can feed a recently fallen foe to his eidolon, allowing the outsider to channel some of its power into the summoner. The eidolon must spend a <strong className="hl">standard action</strong> to eat some of the opponent, which must be a living, corporeal creature killed or knocked unconscious by the eidolon or summoner in the past minute. This eating deals damage to the target as if the eidolon had attacked it with one natural attack (typically a bite). The fallen creature must have at least half as many Hit Dice as the summoner.</p>
<p>Once the feeding is complete, the summoner may manifest one 1-point evolution. This lasts for 1 minute. The <Link to="/ability/evolutions">evolution's</Link> effects use the summoner's Hit Dice and ability scores rather than the eidolon's.</p>
<p>The blood god disciple may only apply one use of this ability at a time (using it a second time replaces any evolution manifested with this ability), and can only manifest evolutions his eidolon has.</p>
</Pair>
<Pair title="At 5th Level">When the blood god disciple uses <em>blood feast,</em> he may manifest one 2-point evolution instead of a 1-point evolution.</Pair>
<Pair title="At 9th Level">He may manifest up to two evolutions worth a total of 3 evolution points or fewer.</Pair>
<Pair title="At 13th Level">He may manifest up to two evolutions worth a total of 4 evolution points or fewer.</Pair>
<Pair title="At 17th Level">He may manifest up to three evolutions worth a total of 5 evolution points or fewer.</Pair>
</Ability>
<Ability id="arc-summoner-blood_god_disciple-bloody-gift-su" icon={["stairs-goal"]}>
<Pair single id="arc-summoner-blood_god_disciple-bloody-gift-su">Bloody Gift (Su)</Pair>
<Pair hl title="Replaces">Summon monster II spell-like ability</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">When a blood god disciple uses <em>blood feast</em> to manifest an evolution, he may touch one ally and grant it that evolution as well. Each affected ally counts as one use per day of the <em>blood feast</em> ability.</Pair>
<Pair title="At 7th Level">The blood god disciple can affect an additional creature with this ability (each one counting as a use per day of <em>blood feast</em>).</Pair>
<Pair title="At 11th Level">He can affect an additional creature, following the rules above.</Pair>
<Pair title="At 15th Level">He can affect an additional creature, following the rules above.</Pair>
<Pair title="At 19th Level">He can affect an additional creature, following the rules above.</Pair>
<Pair title="Special">If the blood god disciple can manifest multiple evolutions per use of <em>blood feast,</em> his selected allies manifest these multiple evolutions as well.</Pair>
</Ability>
<Ability id="arc-summoner-blood_god_disciple-avatar-gambit-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-summoner-blood_god_disciple-avatar-gambit-ex">Avatar Gambit (Ex)</Pair>
<Pair hl title="Replaces">Summon monster IV spell-like ability</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">When a blood god disciple dismisses his eidolon, he <em>rages</em> like a <Link to="/class/barbarian">barbarian</Link> for a number of rounds equal to half his summoner level (he may end this <em>rage</em> early just like a barbarian, but if he does so, any remaining rounds of rage from this ability are lost).</Pair>
</Ability>
<Ability id="arc-summoner-blood_god_disciple-rage-ex" extraClasses="subAbility" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-summoner-blood_god_disciple-rage-ex" flavor="Relevant text from the barbarian ability.">Rage (Ex)</Pair>
<Pair title="Free Action">You can enter (or end) a <em>rage.</em> You gain a +4 morale bonus to your Strength and Constitution, as well as a +2 morale bonus on Will saves. The increase to Constitution grants you 2 hit points per Hit Dice, but these disappear when the <em>rage</em> ends and are not lost first like <Link to="/rule/temporary_hit_points">temporary hit points</Link>.</Pair>
<Pair title="Passive Ability">While in <em>rage,</em> you take a -2 penalty to Armor Class, and you cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except Acrobatics, Fly, Intimidate, and Ride) or any ability that requires patience or concentration. You are <Link to="/misc/fatigued">fatigued</Link> after <em>rage</em> for a number of rounds equal to 2 times the number of rounds spent in the <em>rage.</em> You cannot enter a new <em>rage</em> while fatigued or <Link to="/misc/exhausted">exhausted</Link> but can otherwise enter <em>rage</em> multiple times during a single encounter or combat. If you fall unconscious, your <em>rage</em> immediately ends, placing you in peril of death.</Pair>
<Pair title="Special">Temporary increases to Constitution, such as those gained from <em>rage</em> and spells like <Link to="/spell/bears_endurance">bear's endurance</Link>, do not increase the total number of rounds that a barbarian can <em>rage</em> per day. The total number of rounds of <em>rage</em> per day is renewed after resting for 8 hours, although these hours do not need to be consecutive.</Pair>
</Ability>
<Ability id="arc-summoner-blood_god_disciple-rage-power-ex" icon={["stairs-goal"]}>
<Pair single id="arc-summoner-blood_god_disciple-rage-power-ex">Rage Power (Ex)</Pair>
<Pair hl title="Replaces">Summon monster VI and VIII spell-like abilities</Pair>
<Pair title="At 11th Level">A blood god disciple selects a barbarian <Link to="/ability/rage_powers">rage power</Link>, which he may use when <em>raging</em> (whether from the <em>avatar gambit</em> ability or actual barbarian <em>rage</em>).</Pair>
<Pair title="At 15th Level">He selects a second rage power.</Pair>
</Ability>
</>};
const _blood_summoner = {title: "Blood Summoner", jsx: <><h2 id="arc-summoner-blood_summoner-blood-summoner">Blood Summoner</h2>
<p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption pg. 24</Link><br/>A blood summoner conjures an eidolon born from violence and blood. These cruel spellcasters are common among the god-callers of now-shattered Sarkoris, where the influence of the Worldwound has warped them into beings of chilling malevolence.</p>
<Ability icon={["skills"]} id="arc-summoner-blood_summoner-undefined">
<Pair id="arc-summoner-blood_summoner-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/heal">Heal</Link> (WIS)</Pair></Ability>
<Ability id="arc-summoner-blood_summoner-blood-offering-su" icon={["upgrade"]}>
<Pair single id="arc-summoner-blood_summoner-blood-offering-su">Blood Offering (Su)</Pair>
<Pair hl title="Replaces">Shield ally</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Standard Action">The blood summoner can sacrifice a flask of blood, extracted up to 1 day ago from a living creature or a corpse that's been dead no longer than 1 minute, to aid and appease an evil outsider within 30 feet. The offering grants the outsider a +2 enhancement bonus to the ability score of the blood summoner's choice and grants the blood summoner a +4 circumstance bonus on Diplomacy checks and Charisma checks to bargain with it.</Pair>
<Pair title="Special">This blood can be extracted from a willing or helpless creature as a <strong className="hl">full-round action</strong> that deals 1 point of <Link to="/rule/constitution_damage">Constitution damage</Link>. The bonuses last for 10 minutes. The offering cannot be made to the same fiend twice in the same day.</Pair>
</Ability>
<Ability id="arc-summoner-blood_summoner-blood-travel-su" icon={["magic-swirl"]}>
<Pair single id="arc-summoner-blood_summoner-blood-travel-su">Blood Travel (Su)</Pair>
<Pair hl title="Replaces">Transposition</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A blood summoner can use his <em>maker's call</em> ability to allow his eidolon to travel through the blood of other creatures instead of bringing it to his side. The eidolon can either emerge from the blood of a living creature within range that has fewer than its maximum hit points remaining, or burst from the corpse of a Small or larger creature within range that has been dead for no longer than 1 minute. If the eidolon emerges from an injured creature, that creature takes 4d6 points of damage, which is halved if the creature succeeds at a Fortitude save (DC = 10 + 1/2 the blood summoner's level + his Charisma modifier). The eidolon appears in its choice of the nearest unoccupied square to the creature or corpse it emerged from, and is <Link to="/misc/staggered">staggered</Link> for 1 round.</Pair>
</Ability>
<Ability id="arc-summoner-blood_summoner-fiendish-calling-su" icon={["magic-swirl"]}>
<Pair single id="arc-summoner-blood_summoner-fiendish-calling-su">Fiendish Calling (Su)</Pair>
<Pair hl title="Replaces">Greater shield ally</Pair>
<Pair title="At 10th Level">The blood summoner's <em>summon monster</em> ability can additionally be used as <Link to="/spell/lesser_planar_binding">lesser planar binding</Link> as a <strong className="hl">standard action</strong>, but only to call evil outsiders.</Pair>
<Pair title="At 13th Level">He can instead use it as <Link to="/spell/planar_binding">planar binding</Link>.</Pair>
<Pair title="At 16th Level">He can instead use it as <Link to="/spell/greater_planar_binding">greater planar binding</Link>.</Pair>
</Ability>
<Ability id="arc-summoner-blood_summoner-blood-possession-su" icon={["magic-swirl"]}>
<Pair single id="arc-summoner-blood_summoner-blood-possession-su">Blood Possession (Su)</Pair>
<Pair hl title="Replaces">Merge forms</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Usage">1 time/day + 1 per two summoner levels beyond 16th<ByLevelPop levels={[[16,1],[18,2],[20,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Full-Round Action">A blood summoner's eidolon can enter and control the body of any corporeal creature that has blood. This ability functions as <Link to="/spell/marionette_possession">marionette possession</Link>, except that the eidolon's body also enters the target and the target can be unwilling. A successful Will save (DC = 10 + 1/2 the blood summoner's level + his Charisma modifier) negates this effect. The eidolon can end this possession at any time as a <strong className="hl">standard action</strong>.</Pair>
<Pair title="Special">If the host body is slain while the eidolon is possessing it, the eidolon is immediately ejected, takes 4d6 points of damage, and is <Link to="/misc/stunned">stunned</Link> for 1 round.</Pair>
</Ability>
</>};
const _broodmaster = {title: "Broodmaster", jsx: <><h2 id="arc-summoner-broodmaster-broodmaster">Broodmaster</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 78</Link><br/>Most summoners bond with one eidolon for their entire lives, but the broodmaster forges a link with multiple smaller eidolons that make up his brood. Separately, a broodmaster's eidolons are no match for a summoner's single eidolon, but taken as a whole, an eidolon brood makes up in quantity what it lacks in individual power.</p>
<Ability id="arc-summoner-broodmaster-eidolon-brood" icon={["stairs-goal"]}>
<Pair single id="arc-summoner-broodmaster-eidolon-brood">Eidolon Brood</Pair>
<Pair hl title="Replaces">Eidolon</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability"><p>Instead of a single eidolon, a broodmaster summons two Small <Link to="/sidekick/eidolon">eidolons</Link> to his side, each less powerful than the single eidolon of a standard summoner. Each eidolon has it own base form and associated base statistics and free evolutions. Regardless of the number of eidolons in the brood, each eidolon has the same base attack bonus and base saving throw bonuses, but the rest of the eidolons' base statistics must be divided between the eidolons, including Hit Dice (minimum 1), skill points, number of feats, armor bonus, Str/Dex bonus, evolution pool (but see below), and maximum number of natural attacks. Individual eidolons in the brood must purchase evolutions separately. Once a broodmaster decides on the forms and abilities of his eidolons, they cannot be changed until the summoner gains a level.</p>
<p><strong>Example:</strong> A 2nd-level broodmaster can summon two eidolons. Each eidolon has 1 Hit Dice, BAB +2, +3 on its two <Link to="/misc/good_saves">good saves</Link> and +0 on its bad save. The broodmaster decides to give the first eidolon 4 skill points, one feat, a +1 armor bonus, a +1 bonus to Strength, 2 points from the evolution pool, and a maximum of two attacks. The remaining 4 skill points, +1 armor bonus, +1 bonus to Dexterity, and 2 points from the evolution pool go to the second eidolon, but it gains no feats and can have only one natural attack.</p>
</Pair>
<Pair title="Special">The broodmaster must dismiss all of his eidolons at one time. Likewise, all of the eidolons in a brood are banished if the broodmaster is unconscious, asleep, or killed. However, each eidolon in the brood is sent back to its home plane individually when its hit points are reduced to a negative number equal to or greater than its Constitution score.</Pair>
</Ability>
<hr/>
<p>The following are new class features of the broodmaster archetype. Those with the same name as the standard summoner class have slightly different rules, but otherwise work as and replace the standard summoner class features of the same name.</p>
<Ability id="arc-summoner-broodmaster-brood-link-su" icon={["shield-reflect"]}>
<Pair single id="arc-summoner-broodmaster-brood-link-su">Brood Link (Su)</Pair>
<Pair hl title="Replaces">Life link</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A broodmaster forms a close bond with his eidolons. This ability works like the standard summoner <em>life link</em> ability, except the broodmaster can only sacrifice hit points to prevent damage to one eidolon in the brood at a time. If two or more eidolons in the brood take enough damage to send them back to their home plane, the broodmaster can only sacrifice hit points to prevent damage to one of them.</Pair>
</Ability>
<Ability id="arc-summoner-broodmaster-bond-senses-su" icon={["stairs-goal"]}>
<Pair single id="arc-summoner-broodmaster-bond-senses-su">Bond Senses (Su)</Pair>
<Pair title="At 2nd Level">The broodmaster can only share the senses of one eidolon in his brood at a time.</Pair>
</Ability>
<Ability id="arc-summoner-broodmaster-shield-ally-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-summoner-broodmaster-shield-ally-ex">Shield Ally (Ex)</Pair>
<Pair title="At 4th Level">The broodmaster or an ally can only gain the bonuses from <em>shield ally</em> once, regardless of how many eidolons in the brood are within reach.</Pair>
</Ability>
<Ability id="arc-summoner-broodmaster-makers-call-su" icon={["stairs-goal"]}>
<Pair single id="arc-summoner-broodmaster-makers-call-su">Maker's Call (Su)</Pair>
<Pair title="At 6th Level">The broodmaster can only call one eidolon in the brood to his side with each use of this ability.</Pair>
</Ability>
<Ability id="arc-summoner-broodmaster-transposition-su" icon={["magic-swirl"]}>
<Pair single id="arc-summoner-broodmaster-transposition-su">Transposition (Su)</Pair>
<Pair title="At 8th Level">The broodmaster swaps his location with that of one eidolon in the brood with each use of this ability.</Pair>
</Ability>
<Ability id="arc-summoner-broodmaster-larger-brood" icon={["upgrade"]}>
<Pair single id="arc-summoner-broodmaster-larger-brood">Larger Brood</Pair>
<Pair title="At 8th Level">The broodmaster can spend 4 evolution points from the evolution pool for the <Link to="/evolution/large">large</Link> evolution; unlike with other evolutions, he spends these 4 points before he assigns evolution points to his individual eidolons (for an 8th-level broodmaster with 11 evolution points, this leaves 7 evolution points to distribute among the eidolons). This allows him to summon two Medium eidolons, four Small eidolons, or one Medium eidolon and two Small eidolons.</Pair>
<Pair title="At 13th Level">If the broodmaster has purchased the large evolution for his brood, he can spend an additional 6 evolution points from the evolution pool for the 'huge' option of the large evolution, distributing the remaining points among his eidolons. This allows him to call two Large eidolons, four Medium eidolons, eight Small eidolons, or any similar combination in which two smaller eidolons count as one eidolon of one size larger.</Pair>
</Ability>
<Ability id="arc-summoner-broodmaster-greater-shield-ally-su" icon={["shield-reflect"]}>
<Pair single id="arc-summoner-broodmaster-greater-shield-ally-su">Greater Shield Ally (Su)</Pair>
<Pair title="At 12th Level">The broodmaster or an ally can only gain the bonuses from <em>greater shield ally,</em> regardless of how many eidolons in the brood are within reach.</Pair>
</Ability>
<Ability id="arc-summoner-broodmaster-brood-bond-su" icon={["armor-upgrade"]}>
<Pair single id="arc-summoner-broodmaster-brood-bond-su">Brood Bond (Su)</Pair>
<Pair hl title="Replaces">Life bond</Pair>
<Pair title="At 14th Level">A summoner's life becomes linked to his brood. This functions as the <em>life bond</em> ability, except the broodmaster can only transfer damage to one eidolon in the brood at a time. If that eidolon takes enough damage to send it back to its home plane, all excess damage remains with the broodmaster, killing him.</Pair>
</Ability>
<Ability id="arc-summoner-broodmaster-merge-forms-su" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="arc-summoner-broodmaster-merge-forms-su">Merge Forms (Su)</Pair>
<Pair hl title="Replaces">Merge forms</Pair>
<Pair title="At 16th Level">The broodmaster can only merge with one eidolon in the brood at a time.</Pair>
</Ability>
<h3 id="arc-summoner-broodmaster-hoarders-of-summoned-monsters">Hoarders of Summoned Monsters</h3>
<p>The broodmaster and master summoner archetypes can potentially have 5, 10, or even more summoned creatures in play. This is a deliberate feature of these archetypes, and means that the summoner can potentially be a strong candidate for "solo" adventuring by one player. However, in the hands of an inexperienced or moderately experienced player, dealing with all of those creatures in combat can take a long time, forcing other players to wait extended periods between their turns in the initiative. It is strongly recommended that GMs only allow these archetypes for experienced players, or decide on a way to speed up the summoner's turn (such as by allowing other players to control some of the summoned monsters).</p>
</>};
const _counter_summoner = {title: "Counter-Summoner", jsx: <><h2 id="arc-summoner-counter_summoner-counter-summoner">Counter-Summoner</h2>
<p><strong>Sources</strong> <Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook pg. 8</Link><br/>While most summoners excel at conjuring monsters, there are those who focus instead on disrupting the conjurations of opponents. The counter-summoner harnesses powerful abjuration magic to instantly thwart the conjuration and summoning abilities of other casters, though at the cost of weakening his own powers of conjuration.</p>
<Ability id="arc-summoner-counter_summoner-counter-summon-su" icon={["magic-swirl"]}>
<Pair single id="arc-summoner-counter_summoner-counter-summon-su">Counter-Summon (Su)</Pair>
<Pair hl title="Replaces">Summon monster</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Ability">A counter-summoner can attempt to counter a conjuration spell cast by another creature. He must identify the spell being cast as normal for <Link to="/rule/counterspells">counterspelling</Link>. If he does so, he can attempt to counter the spell as a <strong className="hl">swift</strong> or <strong className="hl">immediate action</strong>. To counter the spell, the counter-summoner must attempt a dispel check as if using <Link to="/spell/dispel_magic">dispel magic</Link>. If the spell being countered is a <Link to="/spell/summon_monster">summon monster</Link> or <Link to="/spell/summon_natures_ally">summon nature's ally</Link> spell, the counter-summoner gains a +5 bonus on the dispel check.</Pair>
</Ability>
<Ability id="arc-summoner-counter_summoner-detect-summons-su" icon={["stairs-goal"]}>
<Pair single id="arc-summoner-counter_summoner-detect-summons-su">Detect Summons (Su)</Pair>
<Pair hl title="Replaces">Bond senses</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Swift Action">A counter-summoner can target a single creature he can see and determine if it has been summoned to its current plane from another. This ability reveals whether the target has been conjured by a conjuration (summoning) or (calling) spell, and allows the counter-summoner to attempt a Spellcraft check to identify the spell that conjured it (using the same DC as if the counter-summoner had witnessed the spell being cast).</Pair>
</Ability>
<Ability id="arc-summoner-counter_summoner-weaken-summons-su" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="arc-summoner-counter_summoner-weaken-summons-su">Weaken Summons (Su)</Pair>
<Pair hl title="Replaces">Aspect</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Standard Action">A counter-summoner can attempt to weaken a summoned or called creature within 60 feet. The targeted creature takes a -2 penalty on attack and damage rolls and to Armor Class for 1 minute per summoner level. A successful Will save (DC = 10 1/2 the counter-summoner's class level his Charisma modifier) negates this effect. A given summoned creature can't be targeted by this ability more than once per 24-hour period.</Pair>
</Ability>
<Ability id="arc-summoner-counter_summoner-improved-weaken-summons-su" icon={["armor-downgrade"]}>
<Pair single id="arc-summoner-counter_summoner-improved-weaken-summons-su">Improved Weaken Summons (Su)</Pair>
<Pair hl title="Replaces">Greater aspect</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Ability">The penalty for the counter-summoner's <em>weaken summons</em> ability changes to -4.</Pair>
</Ability>
</>};
const _evolutionist = {title: "Evolutionist", jsx: <><h2 id="arc-summoner-evolutionist-evolutionist">Evolutionist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 79</Link><br/>Changing an eidolon's evolutions is normally a slow process. As a summoner progresses in levels, his control over his eidolon's abilities increases. But an evolutionist possesses greater power over his eidolon's form, and is able to evolve his eidolon and its abilities to meet any challenge or face any threat as it comes up, seemingly on a whim.</p>
<Ability id="arc-summoner-evolutionist-mutate-eidolon-su" icon={["stairs-goal"]}>
<Pair single id="arc-summoner-evolutionist-mutate-eidolon-su">Mutate Eidolon (Su)</Pair>
<Pair hl title="Replaces">Maker's call</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">An evolutionist can change his eidolon's <Link to="/ability/evolutions">evolutions</Link> as if he had gained a level. To mutate his eidolon, the evolutionist must perform an arcane ritual that requires 24 hours of uninterrupted concentration and costs 200 gp per summoner level in material components.</Pair>
</Ability>
<Ability id="arc-summoner-evolutionist-evolve-base-form-su" icon={["stairs-goal"]}>
<Pair single id="arc-summoner-evolutionist-evolve-base-form-su">Evolve Base Form (Su)</Pair>
<Pair hl title="Replaces">Transposition</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">Whenever he gains a level, the evolutionist can change his eidolon's base form to a new base form. Once chosen, this base form is set until the evolutionist gains another summoner level.</Pair>
</Ability>
<Ability id="arc-summoner-evolutionist-transmogrify-sp" icon={["magic-swirl"]}>
<Pair single id="arc-summoner-evolutionist-transmogrify-sp">Transmogrify (Sp)</Pair>
<Pair hl title="Replaces">Greater shield ally</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">The evolutionist can cast <Link to="/spell/transmogrify">transmogrify</Link> as a spell-like ability once per day without the need for a material component. This ability has a casting time of 1 minute.</Pair>
</Ability>
</>};
const _first_worlder = {title: "First Worlder", jsx: <><h2 id="arc-summoner-first_worlder-first-worlder">First Worlder</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_magic">Inner Sea Magic pg. 35</Link><br/>Most summoners have a close connection to creatures from the farthest reaches of the planes. A few have a primal connection to nature, and their power is tied to the First World. It is not unusual for these summoners to associate with druids, for like druids, first worlders have a powerful tie to the natural world. Some first worlders are driven half-mad by the strange energies and intelligences that seep into their minds and bodies, though, and these poor souls are prone to lash out at loggers, druids, or innocent passers-by without considering whether or not they are threats. A first worlder's <Link to="/sidekick/eidolon">eidolon</Link> usually resembles a fey creature or a plant monster, though some are fantastic otherworldly animals with exaggerated features. A first worlder has the following class features.</p>
<Ability id="arc-summoner-first_worlder-summon-natures-ally-sp" icon={["spell-book","magic-swirl"]}>
<Pair single id="arc-summoner-first_worlder-summon-natures-ally-sp">Summon Nature's Ally (Sp)</Pair>
<Pair hl title="Replaces">Summon monster</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">A first worlder can cast <Link to="/spell/summon_natures_ally">summon nature's ally</Link> a number of times per day equal to 3 + his Charisma modifier.</Pair>
<Pair title="Ability">At levels where a summoner would gain a more powerful <em>summon monster</em> spell as a spell-like ability, he instead gains the equivalent <em>summon nature's ally</em> spell (at 19th level, he can use <Link to="/spell/summon_natures_ally_ix">summon nature's ally IX</Link> or <Link to="/spell/gate">gate</Link>).</Pair>
<Pair title="Special">When a first worlder gains a <em>summon nature's ally</em> spell as a spell-like ability, he adds it to his class spell list (he must still select it as a spell known if he wants to cast it as an actual spell).</Pair>
</Ability>
<Ability id="arc-summoner-first_worlder-fey-summons-su" icon={["magic-swirl"]}>
<Pair single id="arc-summoner-first_worlder-fey-summons-su">Fey Summons (Su)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability"><p>A first worlder adds the following creatures to the lists of what he can summon with his <em>summon nature's ally</em> spell-like ability:</p>
<blockquote>
<p><em>Summon nature's ally II:</em> gremlin (<Link to="/monster/jinkin">jinkin</Link>, <Link to="/monster/pugwampi">pugwampi</Link>, or <Link to="/monster/vexgit">vexgit</Link>).</p>
<p><em>Summon nature's ally III:</em> gremlin (<Link to="/monster/nuglub">nuglub</Link>).</p>
<p><em>Summon nature's ally IV:</em> <Link to="/monster/unicorn">unicorn</Link>.</p>
<p><em>Summon nature's ally V:</em> <Link to="/monster/pixie">pixie</Link>, <Link to="/monster/satyr">satyr</Link>.</p>
<p><em>Summon nature's ally VII:</em> <Link to="/monster/nymph">nymph</Link>.</p>
</blockquote>
</Pair>
</Ability>
<Ability id="arc-summoner-first_worlder-eidolon" icon={["stairs-goal"]}>
<Pair single id="arc-summoner-first_worlder-eidolon">Eidolon</Pair>
<Pair hl title="Replaces">Eidolon</Pair>
<Pair title="Info"><p>Instead of an outsider, a first worlder's eidolon has the <Link to="/type/fey">fey</Link> creature type and the <Link to="/subtype/extraplanar">extraplanar</Link> subtype. Its statistics are changed from a standard eidolon as follows:</p>
<blockquote>
<p><strong>Hit Dice:</strong> d6 Hit Die (instead of d10).<br/><strong>BAB:</strong> Equal to 1/2 the eidolon's Hit Dice.<br/><strong>Good/Bad Saves:</strong> The eidolon's <Link to="/misc/good_saves">good saves</Link> area always Reflex and Will.</p>
<p><strong>Skills:</strong> The eidolon's class skills are <Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/climb">Climb</Link>, <Link to="/skill/craft">Craft</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/disguise">Disguise</Link>, <Link to="/skill/escape_artist">Escape Artist</Link>, <Link to="/skill/fly">Fly</Link>, <Link to="/skill/knowledge_geography">Knowledge (geography)</Link>, <Link to="/skill/knowledge_nature">Knowledge (nature)</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/perform">Perform</Link>, <Link to="/skill/sense_motive">Sense Motive</Link>, <Link to="/skill/sleight_of_hand">Sleight of Hand</Link>, <Link to="/skill/stealth">Stealth</Link>, <Link to="/skill/swim">Swim</Link>, and <Link to="/skill/use_magic_device">Use Magic Device</Link>.</p>
<p><strong>Senses:</strong> The eidolon gains low-light vision instead of darkvision. The summoner can grant the eidolon darkvision 60 ft. as a 1-point evolution.</p>
<p><strong>Damage Reduction:</strong> If the first worlder chooses <Link to="/evolution/damage_reduction">this evolution</Link>, he may select DR/cold iron instead of one of the alignment-based types of damage reduction.</p>
</blockquote>
</Pair>
</Ability>
</>};
const _god_caller = {title: "God Caller", jsx: <><h2 id="arc-summoner-god_caller-god-caller">God Caller</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 40</Link><br/>God callers follow a fractured tradition that originated in the now-lost nation of Sarkoris. They speak to an assortment of ancient divine powers to lead their communities and sometimes stir up reformations in faiths with ideals similar to their personal convictions.</p>
<Ability icon={["skills"]} id="arc-summoner-god_caller-undefined">
<Pair id="arc-summoner-god_caller-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/intimidate">Intimidate</Link> (CHA)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering), Knowledge (engineering), Knowledge (geography), Knowledge (nature), Use Magic Device</Pair></Ability>
<p><strong>Guidance (Sp):</strong> A god caller's eidolon has a tiny spark of divinity. It can use <Link to="/spell/guidance">guidance</Link> as a spell-like ability at will. However, the eidolon and the god caller must remain within 50 feet of one another for the eidolon to remain at full strength. If the eidolon is beyond 50 feet but closer than 1,000 feet, its current and maximum hit point totals are reduced by half.</p>
<p>This ability alters <strong className="hl">life link</strong>.</p>
<p><strong>Divine Word (Ex):</strong> At 8th level, if a god caller's eidolon would grant him a bonus with the aid another action on a Diplomacy or Intimidate check, the god caller can instead choose to roll twice and take the better result. He makes the choice before rolling. Once per day while his eidolon uses the aid another action to assist him in such a check, if the god caller would improve a target's attitude toward him, or gain a success if using the individual <Link to="/rule/influence">influence rules</Link>, he instead improves that target's attitude by 2 steps or it counts as 2 successes.</p>
<p>This ability replaces <strong className="hl">transposition</strong>.</p>
<p><strong>Divine Awareness (Sp):</strong> At 10th level, after 10 minutes of concentration, a god caller's eidolon can see from afar as per <Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link>. The eidolon can do this once per day at 10th level, and an additional time per day every 4 summoner levels thereafter (maximum of 3 times per day at 18th level).</p>
<p>This ability replaces <strong className="hl">aspect</strong>.</p>
<p><strong>Divine Might (Ex):</strong> At 18th level, a god caller's eidolon's attacks are treated as epic for the purpose of overcoming damage reduction and harming mythic creatures.</p>
<p>This ability replaces <strong className="hl">greater aspect</strong>.</p>
<p><strong>Overwhelming Presence (Sp):</strong> At 20th level, a god caller's eidolon can use <Link to="/spell/overwhelming_presence">overwhelming presence</Link> three times per day. The save DC is equal to 19 + the eidolon's Charisma modifier.</p>
<p>This ability replaces <strong className="hl">twin eidolon</strong>.</p>
</>};
const _leshy_caller = {title: "Leshy Caller", jsx: <><h2 id="arc-summoner-leshy_caller-leshy-caller">Leshy Caller</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 94</Link><br/>A leshy caller summons creatures from the First World and forges a bond with a leshy eidolon.</p>
<p><strong>Leshy Eidolon:</strong> When a leshy caller summons her eidolon, the eidolon's body is created from extraplanar plant material and imbued with the intelligence of a leshy spirit. Its statistics are changed from those of a standard eidolon as follows.</p>
<p><strong>Type:</strong> The eidolon is still an outsider, and its statistics don't change, but it also counts as a plant. As it isn't truly a plant, it doesn't gain the plant immunities.</p>
<p><strong>Base Form:</strong> The leshy caller chooses one of the base forms listed below for her eidolon. When the eidolon is summoned in an environment matching one of these base forms, the leshy caller can change the eidolon's base form to the matching form by sacrificing one daily use of her summon nature's ally ability as a free action.</p>
<p>Plant eidolon base forms are as follows.</p>
<blockquote className="hanging">
<p><strong>Cactus (Desert):</strong> <em>Size</em> Medium; <em>Speed</em> 30 ft.; <em>AC</em> +2 natural armor; <em>Saves</em> Fort (good), Ref (good), Will (bad); <em>Attack</em> sting (1d4); <em>Ability Scores</em> Str 14, Dex 14, Con 13, Int 7, Wis 10, Cha 11; <em>Free Evolutions</em> <Link to="/evolution/limbs">limbs</Link> (arms), limbs (legs), <Link to="/evolution/sting">sting</Link>.</p>
<p><strong>Conifer (Forest, Mountain):</strong> <em>Size</em> Medium; <em>Speed</em> 30 ft.; <em>AC</em> +2 natural armor; <em>Saves</em> Fort (good), Ref (bad), Will (good); <em>Attack</em> 2 claws (1d4); <em>Ability Scores</em> Str 14, Dex 12, Con 15, Int 7, Wis 10, Cha 11; <em>Free Evolutions</em> <Link to="/evolution/claws">claws</Link>, <Link to="/evolution/limbs">limbs</Link> (arms), limbs (legs).</p>
<p><strong>Fungus (Swamp, Underground):</strong> <em>Size</em> Medium; <em>Speed</em> 30 ft.; <em>AC</em> +2 natural armor; <em>Saves</em> Fort (good), Ref (good), Will (bad); <em>Attack</em> bite (1d6); <em>Ability Scores</em> Str 14, Dex 14, Con 13, Int 7, Wis 10, Cha 11; <em>Free Evolutions</em> <Link to="/evolution/bite">bite</Link>, <Link to="/evolution/limbs">limbs</Link> (arms), limbs (legs).</p>
<p><strong>Leaf (Forest, Jungle, Swamp):</strong> <em>Size</em> Medium; <em>Speed</em> 30 ft.; <em>AC</em> +2 natural armor; <em>Saves</em> Fort (good), Ref (good), Will (bad); <em>Attack</em> slam (1d8); <em>Ability Scores</em> Str 16, Dex 12, Con 13, Int 7, Wis 10, Cha 11; <em>Free Evolutions</em> <Link to="/evolution/limbs">limbs</Link> (arms), limbs (legs), <Link to="/evolution/slam">slam</Link>.</p>
<p><strong>Seaweed (Aquatic):</strong> <em>Size</em> Medium; <em>Speed</em> 20 ft., swim 40 ft.; <em>AC</em> +2 natural armor; <em>Saves</em> Fort (good), Ref (good), Will (bad); <em>Attack</em> slam (1d8); <em>Ability Scores</em> Str 12, Dex 14, Con 15, Int 7, Wis 10, Cha 11; <em>Free Evolutions</em> <Link to="/evolution/limbs">limbs</Link> (arms), <Link to="/evolution/slam">slam</Link>, <Link to="/evolution/swim">swim</Link> (2).</p>
</blockquote>
<p>This alters the summoner's <strong className="hl">eidolon</strong>.</p>
<p><strong>Summon Nature's Ally (Sp):</strong> A leshy caller can cast <Link to="/spell/summon_natures_ally">summon nature's ally</Link> as a spell-like ability a number of times per day equal to 3 + her Charisma modifier. At levels where a regular summoner would gain access to a new level of summon monster as a spell-like ability, the leshy caller instead gains the equivalent summon nature's ally spell; at 19th level, she can cast <Link to="/spell/summon_natures_ally_ix">summon nature's ally IX</Link> or <Link to="/spell/gate">gate</Link>. When a leshy caller gains a summon nature's ally spell as a spell-like ability, she adds it to her class spell list (though she must still select it as a spell known if she wants to gain the ability to cast it as a normal spell). She adds <Link to="/monster/leaf_leshy">leaf leshys</Link>, <Link to="/monster/gourd_leshy">gourd leshys</Link>, <Link to="/monster/fungus_leshy">fungus leshys</Link>, <Link to="/monster/seaweed_leshy">seaweed leshys</Link>, and <Link to="/monster/lotus_leshy">lotus leshys</Link> to her list of creatures for summon nature's ally I, II, III, IV, and V, respectively.</p>
<p>This alters <strong className="hl">summon monster</strong>.</p>
</>};
const _master_summoner = {title: "Master Summoner", jsx: <><h2 id="arc-summoner-master_summoner-master-summoner">Master Summoner</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 80</Link><br/>Most summoners forge a bond with a single, powerful eidolon, but some summoners seek to control a variety of creatures. The master summoner sacrifices the power of his eidolon in favor of summoning a plethora of otherworldly creatures to aid him.</p>
<p><strong>Lesser Eidolon:</strong> A master summoner's class level is halved (minimum 1) for the purposes of determining his <Link to="/sidekick/eidolon">eidolon's</Link> abilities, Hit Dice, evolution pool, and so on. The eidolon otherwise functions as normal.</p>
<p>This ability replaces the summoner's normal <strong className="hl">eidolon</strong> ability.</p>
<p><strong>Summoning Mastery (Sp):</strong> Starting at 1st level, a master summoner can cast <Link to="/spell/summon_monster_i">summon monster I</Link> as a spell-like ability a number of times per day equal to 5 + his Charisma modifier. The summoner can use this ability when his eidolon is summoned. Only one summon monster spell may be in effect while the eidolon is summoned. If the summoner's eidolon is not summoned, the number of creatures that can be summoned with this ability is only limited by its uses per day. This ability otherwise functions as the summoner's normal summon monster I ability. Other than these restrictions, there is no limit to how many summon monster or <Link to="/spell/gate">gate</Link> spells the summoner can have active at one time.</p>
<p>This ability replaces the summoner's normal <strong className="hl">summon monster I</strong> ability and <strong className="hl">shield ally</strong>.</p>
<p><strong>Augment Summoning:</strong> At 2nd level, a master summoner gains <Link to="/feat/augment_summoning">Augment Summoning</Link> as a bonus feat. He does not have to meet any requirements for this feat.</p>
<p>This ability replaces <strong className="hl">bond senses</strong>.</p>
<h3 id="arc-summoner-master_summoner-hordes-of-summoned-monsters">Hordes of Summoned Monsters</h3>
<p>The broodmaster and master summoner archetypes can potentially have 5, 10, or even more summoned creatures in play. This is a deliberate feature of these archetypes, and means that the summoner can potentially be a strong candidate for "solo" adventuring by one player. However, in the hands of an inexperienced or moderately experienced player, dealing with all of those creatures in combat can take a long time, forcing other players to wait extended periods between their turns in the initiative. It is strongly recommended that GMs only allow these archetypes for experienced players, or decide on a way to speed up the summoner's turn (such as by allowing other players to control some of the summoned monsters).</p>
</>};
const _morphic_savant = {title: "Morphic Savant", jsx: <><h2 id="arc-summoner-morphic_savant-morphic-savant">Morphic Savant</h2>
<p><strong>Sources</strong> <Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook pg. 16</Link><br/>A morphic savant is an agent of change who draws power from the Abyss, Elysium, or the Maelstrom to fulfill whatever goals strike his fancy. Chaotic evil and chaotic neutral morphic savants often train with <Link to="/pclass/blackfire_adept">Blackfire Adepts</Link> in the hopes of learning greater powers of chaotic unmaking, and chaotic good morphic savants are most common as agents of the <Link to="/rule/bellflower_network">Bellflower Network</Link>.</p>
<p><strong>Alignment:</strong> Any chaotic.</p>
<p><strong>Eidolon of Chaos:</strong> A morphic savant's eidolon must be of a chaotic alignment. The morphic savant's eidolon has three base forms: biped, quadruped, and serpentine. Each form has the same feats and skills, but has its own set of evolutions. When the summoner meditates and regains his spell slots for the day, he can select any of the three base forms of his eidolon. The eidolon has 1 fewer evolution point than normal for an eidolon of the morphic savant's summoner level, and has 1 fewer skill point per Hit Die.</p>
<p>This ability alters <strong className="hl">eidolon</strong>.</p>
<p><strong>Morphic Monsters:</strong> Since a morphic savant's power is drawn from planar energies aligned with chaos, all the creatures he summons must be of a chaotic alignment. If a creature would normally be celestial or fiendish, it is instead an <Link to="/template/entropic">entropic creature</Link>.</p>
<p>This also causes the morphic savant's summoning power to be less reliable than a standard summoner's. Each time he uses his summon monster spell-like ability to summon multiple creatures, there is a 50% chance he summons one more monster than normal for the summon monster spell he uses, in which case the creatures remain for only 1 round per level (instead of 1 minute per level).</p>
<p>Also, starting at 2nd level, the morphic savant can grant one 1-point <Link to="/ability/evolutions">evolution</Link> to all the creatures he summons with his summon monster spell-like ability. He can't grant an evolution that duplicates the function of, or has the same name as, any ability the summoned creatures already possess (for example, he can't grant a creature with a bite attack another bite attack), nor can he add an evolution that causes the summoned monsters to have more attacks than his eidolon's maximum number of attacks. The creatures do not have to be of the correct subtype to gain an evolution, but do have to meet any other prerequisites.</p>
<p>This ability alters <strong className="hl">summon monster</strong>.</p>
<p><strong>Chaos Magic:</strong> A morphic savant gains the following bonus spells known at the listed spell level: 1st-<Link to="/spell/protection_from_law">protection from law</Link>, 2nd-<Link to="/spell/shard_of_chaos">shard of chaos</Link>, 3rd-<Link to="/spell/magic_circle_against_law">magic circle against law</Link>, 4th-<Link to="/spell/chaos_hammer">chaos hammer</Link>, 5th-<Link to="/spell/dispel_law">dispel law</Link>, 6th-<Link to="/spell/word_of_chaos">word of chaos</Link>. The morphic savant gains one fewer spell known per spell level for spell levels 1-6.</p>
<p>This ability alters the summoner's <strong className="hl">spells</strong> known.</p>
</>};
const _naturalist = {title: "Naturalist", jsx: <><h2 id="arc-summoner-naturalist-naturalist">Naturalist</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 123</Link><br/>A naturalist is a summoner who is in tune with the natural world, using his magic like a lens to focus various animal aspects onto his eidolon. More akin to a hunter than to other arcane spellcasters, a naturalist instinctively masters the power of such creatures as the bear, wolf, mouse, or tiger to make his exotic eidolon the perfect living tool for battle or stealth, and he eventually discovers how to apply these transformations to himself as well.</p>
<p><strong>Nature's Call (Sp):</strong> Starting at 1st level, the naturalist can cast <Link to="/spell/summon_natures_ally_i">summon nature's ally I</Link> as a spell-like ability a number of times per day equal to 3 + his Charisma modifier. He can only use this ability to summon creatures of the animal, magical beast, or vermin type. This ability otherwise functions as the summon monster I class feature (increasing in level as the naturalist goes up in level and with the same restrictions).</p>
<p>This ability replaces <strong className="hl">summon monster I</strong>.</p>
<p><strong>Animal Focus (Su):</strong> At 4th level, as a swift action a naturalist can enhance his eidolon with the aspect of an animal. Each time he uses this ability, he can select a hunter's <Link to="/ability/animal_focus">animal aspect</Link> and apply it to his eidolon. His hunter level for this ability is equal to his summoner level - 2. He does not gain the ability to add an animal aspect to himself (see Shared Focus, below). This effect lasts until the eidolon is dismissed or sent back to its home plane.</p>
<p>When an animal aspect is applied to an eidolon, its form is altered by superficial physical changes appropriate to that aspect. For example, using aspect of the <Link to="/aspect/bat">bat</Link> might give the eidolon larger ears and eyes and perhaps membranes of skin connecting its limbs to its body, while using aspect of the <Link to="/aspect/stag">stag</Link> might give the eidolon antlers and hoof-like nails on its feat. None of these changes interfere with any of the eidolon's natural or magical abilities.</p>
<p>This ability replaces <strong className="hl">shield ally</strong> and <strong className="hl">greater shield ally</strong>.</p>
<p><strong>Second Animal Focus (Su):</strong> At 10th level, whenever a naturalist uses animal focus, he may apply two different animal aspects to his eidolon. The eidolon's form gains superficial physical charges appropriate to the chosen aspect.</p>
<p>This replaces the <strong className="hl">aspect</strong> summoner class ability.</p>
<p><strong>Shared Focus (Su):</strong> At 14th level, the naturalist begins to take on some of the feral nature of his eidolon. Whenever the naturalist uses animal focus to grant an aspect to his eidolon, he also gains the effects of the chosen aspect. The naturalist keeps this aspect until his eidolon is dismissed or sent back to its home plane. The naturalist gains the effects of only one aspect, even if the eidolon gains more than one (naturalist's choice).</p>
<p>This ability replaces <strong className="hl">life bond</strong>.</p>
<p><strong>Third Animal Focus (Su):</strong> At 18th level, whenever a naturalist uses his animal focus ability, he can apply three different animal aspects to his eidolon (one of which lasts until he decides to change it).</p>
<p>This ability replaces <strong className="hl">greater aspect</strong>.</p>
</>};
const _pyroclast = {title: "Pyroclast", jsx: <><h2 id="arc-summoner-pyroclast-pyroclast">Pyroclast</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_95_anvil_of_fire">Pathfinder #95: Anvil of Fire pg. 72</Link><br/>Pyroclasts harness the primal elemental energy of magma. Their eidolons often resemble elemental beings.</p>
<p><strong>Diminished Spellcasting:</strong> A pyroclast receives one fewer spell per day of each level than normal. If this reduces the number of spells for a level to 0, he can cast spells of that level only if his Charisma score grants him <Link to="/rule/bonus_spells">bonus spells</Link> of that level.</p>
<p>This alters the summoner's <strong className="hl">spells</strong>.</p>
<p><strong>Bound to Fire (Ex):</strong> A pyroclast's eidolon begins with resist fire 10 and vulnerability to cold. This improves to resist fire 20 when the pyroclast reaches 5th level. A pyroclast's eidolon gains the fire subtype and immunity to fire when he reaches 10th level. This ability permanently reduces the eidolon's evolution pool by 1 point.</p>
<p><strong>Detonate (Su):</strong> At 6th level, a pyroclast can banish his eidolon in an explosion of fiery shards. This slays the eidolon and deals 1d6 points of damage per Hit Die of the eidolon to every creature in a 20-foot-radius <Link to="/misc/burst">burst</Link> (Reflex half, DC = 10 + 1/2 his summoner level + his Charisma modifier). Half of this damage is fire, and the other half is piercing. At 12th level, the pyroclast can reduce the damage by 4d6 to increase the burst radius to 40 feet. The pyroclast can use this ability once per day.</p>
<p>This ability replaces <strong className="hl">maker's call</strong>.</p>
<p><strong>Heart of Earth and Fire (Ex):</strong> At 8th level, a pyroclast grants any of his summoned creatures with the earth or fire subtypes a +1 morale bonus on attack rolls, saving throws, and weapon damage rolls when he is within 30 feet. At 10th level, the pyroclast also grants these bonuses to his eidolon.</p>
<p>This ability replaces <strong className="hl">transposition</strong>.</p>
</>};
const _shadow_caller = {title: "Shadow Caller", jsx: <><h2 id="arc-summoner-shadow_caller-shadow-caller">Shadow Caller</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 110</Link><br/>While most summoners can call any manner of creature from across the planes to serve them in combat, supplementing the skills of their eidolon with a diverse range of creatures, others eschew this broad utility and instead concentrate upon calling forth entities from the Shadow Plane. A shadow caller has the following class features.</p>
<Ability icon={["skills"]} id="arc-summoner-shadow_caller-undefined">
<Pair id="arc-summoner-shadow_caller-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/stealth">Stealth</Link> (DEX)</Pair>
<Pair title="Removed Skills">Use Magic Device</Pair></Ability>
<p><strong>Shadow Summoning (Sp):</strong> When a shadow caller uses his summon monster ability or casts the <Link to="/spell/summon_monster">summon monster</Link> spell, he typically summons creatures from the Shadow Plane or creatures closely associated with shadow. When a creature on the summon monster spell list indicates that it is summoned with either the celestial or the fiendish template based on the alignment of the caster, the creature summoned by the shadow caller has the <Link to="/template/shadow">shadow</Link> creature template instead. Furthermore, the summon monster lists are modified in the following ways (these changes also apply to using a higher-level summon spell to summon multiple creatures from a lower-level list).</p>
<blockquote>
<p><em>Summon Monster I:</em> No changes.</p>
<p><em>Summon Monster II:</em> A shadow caller cannot summon Small elementals or lemures, but instead can summon <Link to="/monster/zoog">zoogs</Link>.</p>
<p><em>Summon Monster III:</em> A shadow caller cannot summon dretches or lantern archons, but can summon <Link to="/monster/augur_kyton">augur kytons</Link>.</p>
<p><em>Summon Monster IV:</em> A shadow caller cannot summon Medium elementals, hell hounds, hound archons, or mephits, but can summon <Link to="/monster/allip">allips</Link>, <Link to="/monster/gloomwing">gloomwings</Link>, and <Link to="/monster/shadow">shadows</Link>.</p>
<p><em>Summon Monster V:</em> A shadow caller cannot summon babau, bearded devils, bralani azatas, Large elementals, salamanders, or xills, but can summon <Link to="/monster/shadow_mastiff">shadow mastiffs</Link> and <Link to="/monster/shae">shae</Link>.</p>
<p><em>Summon Monster VI:</em> A shadow caller cannot summon Huge elementals, erinyes, lillend azatas, or succubi, but can summon <Link to="/monster/cloaker">cloakers</Link>.</p>
<p><em>Summon Monster VII:</em> A shadow caller cannot summon bebiliths, bone devils, greater elementals, or vrocks, but can summon <Link to="/monster/greater_shadow">greater shadows</Link>.</p>
<p><em>Summon Monster VIII:</em> A shadow caller can only summon <Link to="/monster/derghodaemon">derghodaemons</Link> and young <Link to="/family/umbral_dragon">umbral dragons</Link>.</p>
<p><em>Summon Monster IX:</em> A shadow caller can only summon <Link to="/monster/interlocutor_kyton">interlocutor kytons</Link> and <Link to="/monster/nightwing">nightwings</Link>.</p>
</blockquote>
<p>This ability otherwise functions as and replaces the summoner's normal summon monster spell-like abilities.</p>
<p><strong>Shadow Eidolon:</strong> A shadow caller's eidolon is at once a thing of shadow called from the deep of the Shadow Plane and his own shadow; the two are inseparable. When his eidolon manifests, his shadow lengthens and finally detaches from him as a creature unto itself. For as long as the shadow caller's eidolon is manifested, he and the eidolon do not have distinct shadows, regardless of the presence or absence of light. This lack of a shadow replaces the magical symbol that identifies the summoner and his eidolon.</p>
<p>This ability alters the summoner's <strong className="hl">eidolon</strong> ability.</p>
</>};
const _shaitan_binder = {title: "Shaitan Binder", jsx: <><h2 id="arc-summoner-shaitan_binder-shaitan-binder">Shaitan Binder</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 146</Link><br/>Shaitan binders call upon a reflection of their genie ancestors to serve as their eidolons. A shaitan binder has the following class features.</p>
<p><strong>Base Form:</strong> At 1st level, if a shaitan binder's eidolon has the biped base form, it gains a +2 bonus to one ability score. The shaitan binder must make this choice at 1st level. If at any time the shaitan binder's eidolon has another base form, it loses this bonus until it returns to biped form. A shaitan binder's eidolon does not gain the share spells ability.</p>
<p><strong>Shaitan Magic (Su):</strong> At 4th level, a shaitan binder's eidolon gains the <Link to="/evolution/basic_magic">basic magic</Link> evolution as a free evolution. At 6th level, it gains the <Link to="/evolution/minor_magic">minor magic</Link> evolution.</p>
<p>At 8th level, it gains the <Link to="/evolution/major_magic">major magic</Link> evolution as a free evolution, and adds the following to the list of available spells for that evolution: <Link to="/spell/glitterdust">glitterdust</Link> and <Link to="/spell/soften_earth_and_stone">soften earth and stone</Link>.</p>
<p>At 12th level, it gains the <Link to="/evolution/ultimate_magic">ultimate magic</Link> evolution as a free evolution, and adds the following to the list of available spells for that evolution: <Link to="/spell/meld_into_stone">meld into stone</Link> and <Link to="/spell/stone_shape">stone shape</Link>.</p>
<p>Although the shaitan binder gains the standard versions of these evolutions for free, he must pay the normal cost to upgrade them to the improved versions.</p>
<p>This ability replaces <strong className="hl">shield ally</strong> and <strong className="hl">greater shield ally</strong>.</p>
<p><strong>Earth Glide (Su):</strong> At 10th level, if a shaitan binder's eidolon has the <Link to="/evolution/burrow">burrow</Link> evolution, it gains the <Link to="/umr/earth_glide">earth glide</Link> universal monster ability and can use this ability to travel at its full base speed.</p>
<p>This ability replaces <strong className="hl">aspect</strong>.</p>
<p><strong>Stone Curse (Su):</strong> At 18th level, a shaitan binder may select stone curse as a 4-point evolution. This allows the eidolon to trap creatures in stone like the <Link to="/monster/shaitan">shaitan</Link> stone curse ability. The DC to resist or break free of the stone curse is 10 + 1/2 the eidolon's Hit Dice + the eidolon's Strength score.</p>
<p>This ability replaces <strong className="hl">greater aspect</strong>.</p>
<p><strong>Noble Eidolon (Sp):</strong> At 20th level, a shaitan binder's eidolon gains the ability to grant its summoner's wishes. Once per day, the eidolon can cast <Link to="/spell/limited_wish">limited wish</Link> as a spell-like ability. The eidolon's caster level is equal to its level. The wish must be spoken aloud by the shaitan binder, beginning with the words "I wish," and cannot duplicate a wish the eidolon has granted within the past 24 hours. If the eidolon uses this ability to duplicate a spell with a costly material component, the shaitan binder must provide that component.</p>
<p>This ability replaces <strong className="hl">twin eidolon</strong>.</p>
</>};
const _spirit_summoner = {title: "Spirit Summoner", jsx: <><h2 id="arc-summoner-spirit_summoner-spirit-summoner">Spirit Summoner</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 123</Link><br/>A spirit summoner is an arcane spellcaster whose eidolon is a manifestation of a shamanic spirit. The bond connecting the summoner and this spirit might be friendly, as a member of a tribe giving flesh to his protector spirit, or hostile, as an outlander or rival compelling service from an unwilling spirit. The summoner can draw upon the divine power of this spirit, but is not constrained by the spirit's morals or ethics.</p>
<p><strong>Spirit (Su):</strong> A spirit summoner forms a mystical bond with <Link to="/ability/shaman_spirits">one spirit from the shaman class</Link>. He gains the spirit ability of that spirit and uses his summoner level as his shaman level for determining its effects. The spirit summoner can select spells granted by that spirit as summoner spells known, using the shaman level of the spell as the summoner spell level. The summoner cannot select spirit spells that are above 6th level.</p>
<p>At 9th level, the summoner gains the abilities listed in the greater version of his selected spirit.</p>
<p>At 17th level, the summoner gains the abilities listed for the true version of his selected spirit.</p>
<p>This ability replaces <strong className="hl">summon monster</strong>.</p>
<p><strong>Eidolon:</strong> At 1st level, a spirit summoner begins play with a powerful outsider called an eidolon. The eidolon's form and abilities must be appropriate to his chosen spirit, at the GM's discretion - for example, a summoner with the <Link to="/shamanspirit/flame">flame</Link> spirit cannot have an eidolon with ice or water abilities, a summoner with a <Link to="/shamanspirit/heavens">heavens</Link> spirit cannot have a fiend-like eidolon, and so on. The summoner can use temporary effects (such as evolution surge) to alter the eidolon into an inappropriate form, but cannot use permanent effects (such as transmogrify) to do so.</p>
<p>This ability alters the <strong className="hl">eidolon</strong> class feature.</p>
<p><strong>Hex:</strong> At 6th level, a spirit summoner can select a shaman hex that is appropriate to his spirit, chosen from the general list of <Link to="/ability/shaman_hexes">shaman hexes</Link> or the specific hexes allowed by his spirit. This otherwise functions as a shaman's hex, and uses his summoner level as his shaman level. Like a shaman, a spirit summoner uses his Wisdom modifier to determine hex DCs.</p>
<p>At 8th, 10th, and 16th levels, the summoner can select another hex.</p>
<p>This ability replaces <strong className="hl">aspect</strong>, <strong className="hl">maker's call</strong>, <strong className="hl">merge forms</strong>, and <strong className="hl">transposition</strong>.</p>
</>};
const _storm_caller = {title: "Storm Caller", jsx: <><h2 id="arc-summoner-storm_caller-storm-caller">Storm Caller</h2>
<p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 16</Link><br/>Many summoners beckon monsters from the Elemental Planes, but few are as specialized as storm callers, who channel the elemental energies of the Plane of Air. Storm callers are most commonly encountered in areas where thunderstorms appear frequently, including supernaturally stormy places like the Sodden Lands.</p>
<p><strong>Stormy Eidolon:</strong> A storm caller must select the <Link to="/evolution/resistance">resistance</Link> (electricity) or <Link to="/evolution/immunity">immunity</Link> (electricity) evolution for his eidolon. If the eidolon has neither of these evolutions, it becomes nauseated until it regains one of them.</p>
<p>This ability alters <strong className="hl">eidolon</strong>.</p>
<p><strong>Summon Storm's Fury (Sp):</strong> A storm caller can summon creatures infused with the power of the storm to help him. This functions as the summoner's summon monster I-IX abilities, except the storm caller can summon only the following creatures at the indicated spell levels: I-<Link to="/monster/eagle">eagle</Link>; II-<Link to="/monster/small_air_elemental">small air elemental</Link>, <Link to="/monster/small_lightning_elemental">small lightning elemental</Link>; III-<Link to="/monster/dire_bat">dire bat</Link>; IV-<Link to="/monster/medium_air_elemental">medium air elemental</Link>, <Link to="/monster/medium_lightning_elemental">medium lightning elemental</Link>, <Link to="/monster/pteranodon">pteranodon</Link>; V-<Link to="/monster/large_air_elemental">large air elemental</Link>, <Link to="/monster/large_lightning_elemental">large lightning elemental</Link>; VI-<Link to="/monster/huge_air_elemental">huge air elemental</Link>, <Link to="/monster/huge_lightning_elemental">huge lightning elemental</Link>; VII-<Link to="/monster/roc">roc</Link>; VIII-<Link to="/monster/elder_air_elemental">elder air elemental</Link>, <Link to="/monster/elder_lightning_elemental">elder lightning elemental</Link>; IX-<Link to="/template/advanced">advanced</Link> elder air elemental, advanced elder lightning elemental. Any creatures summoned with this ability gain immunity to electricity.</p>
<p>Alternatively, whenever his eidolon is not summoned, a storm caller can expend a daily use of this ability to summon a magical storm as a standard action. This functions as <Link to="/spell/call_lightning">call lightning</Link> with a caster level equal to his summoner level, except as noted below.</p>
<p>Each bolt of lightning deals 1d6 points of electricity damage. This damage increases by 1d6 at 3rd level and every 2 levels thereafter, to a maximum of 10d6 at 19th level. The prevailing weather has no effect on the damage of the lightning bolts. The Reflex save DC is equal to 10 + half the storm caller's summoner level + his Charisma modifier. If the storm caller uses this ability again before he has used all of his available bolts of lightning (to summon another magical storm, to summon a monster, or to use the gate spell), any unused bolts are expended with no effect.</p>
<p>The storm caller adds call lightning to his summoner spell list as a 3rd-level spell and <Link to="/spell/call_lightning_storm">call lightning storm</Link> to his summoner spell list as a 5th-level spell, but he does not automatically add them to his list of spells known.</p>
<p>This alters the summoner's <strong className="hl">summon monster I-IX</strong> abilities.</p>
<p><strong>Electrical Polarity (Su):</strong> At 4th level, a storm caller and his eidolon can temporarily form an electrical current between them. The storm caller can expend a use of his summon storm's fury ability as a standard action to create an instantaneous line of lightning between him and his eidolon, provided that the eidolon is within 60 feet of him. The lightning arc deals the same amount of damage to all creatures in the line and has the same save DC as a bolt of lightning from the summon storm's fury ability (unlike call lightning, this damage is dealt only once). The storm caller and his eidolon are not affected by this lightning.</p>
<p>At 12th level, the storm caller gains the benefit of his eidolon's resistance (electricity) or immunity (electricity) evolution whenever he is within 30 feet of the eidolon.</p>
<p>This ability replaces <strong className="hl">shield ally</strong> and <strong className="hl">greater shield ally</strong>.</p>
<p><strong>Storm's Wings (Su):</strong> At 6th level, a storm caller can borrow some of his eidolon's elemental might. He can gain the <Link to="/evolution/flight">flight</Link> evolution as though he were using the summoner's aspect ability, deducting 2 evolution points from the eidolon's evolution pool. If he does so, his eidolon is unable to take the flight evolution as long as the storm caller has that evolution.</p>
<p>At 8th level, the storm caller's eidolon can have the flight evolution even if the storm caller has that evolution.</p>
<p>At 10th level, the storm caller automatically gains the flight evolution without reducing the number of evolution points available to the eidolon. He can use the aspect ability (and at 18th level, the greater aspect ability) to gain additional evolutions.</p>
<p>This ability replaces <strong className="hl">maker's call</strong> and <strong className="hl">transposition</strong>.</p>
</>};
const _story_summoner = {title: "Story Summoner", jsx: <><h2 id="arc-summoner-story_summoner-story-summoner">Story Summoner</h2>
<p><strong>Sources</strong> <Link to="/source/the_harrow_handbook">The Harrow Handbook pg. 25</Link><br/>Story summoners rely on the harrow to weave the paths they walk, turning their tales into reality. They channel magic through their harrow decks to influence the strange extraplanar beings they summon, bringing familiar and fateful characters to life. Some focus on the more whimsical figures of the harrow, while others bring its darkest icons into the real world.</p>
<p><strong>Storykin Eidolon:</strong> Unlike most eidolons, a story summoner's eidolon cannot touch or attack creatures warded by <Link to="/spell/protection_from_evil">protection from evil</Link> and similar effects that prevent contact with summoned creatures. As a standard action while his eidolon is summoned, the story summoner can draw a random card from a complete <Link to="/eq-misc/harrow_deck">harrow deck</Link> he owns. For a number of rounds equal to 1/2 the summoner's class level (minimum 1), the eidolon's alignment changes to match that of the harrow card drawn, and the eidolon gains a +4 enhancement bonus on the ability score linked to the drawn card's suit. The eidolon continues to follow its summoner's orders regardless of its alignment. The story summoner can use this ability a number of times per day equal to 3 + his Charisma modifier.</p>
<p><strong>Summon Arcana:</strong> At 2nd level, a story summoner can use a complete harrow deck he owns as an additional focus component for his summon monster spell-like ability. When he does so, the summoner draws a random card from the deck and applies a simple template to the summoned monster based on the card's alignment: <Link to="/template/celestial">celestial</Link> (any good), <Link to="/template/fiendish">fiendish</Link> (any evil), <Link to="/template/resolute">resolute</Link> (any lawful), or <Link to="/template/entropic">entropic</Link> (any chaotic). If a card has more than one alignment - such as a lawful evil or chaotic good card - the summoner can choose which template to apply to the summoned creature. This ability allows a story summoner to summon and command creatures normally prohibited by their alignment.</p>
<p>This ability replaces <strong className="hl">bond senses</strong>.</p>
<p><strong>Evolve Base Form (Su):</strong> Starting at 8th level, whenever he gains a level, the story summoner can change his eidolon's base form to a new base form. Once chosen, this base form is set until the story summoner gains another summoner level.</p>
<p>This ability replaces <strong className="hl">transposition</strong>.</p>
</>};
const _synthesist = {title: "Synthesist", jsx: <><h2 id="arc-summoner-synthesist-synthesist">Synthesist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 81</Link><br/>Rather than summon an eidolon to serve by his side, the synthesist fuses his eidolon's essence to his own. Instead of two creatures, the synthesist is a fusion of the summoner and eidolon into a single being.</p>
<p><strong>Fused Eidolon:</strong> A synthesist summons the essence of a powerful outsider to meld with his own being. The synthesist wears the eidolon like translucent, living armor. The eidolon mimics all of the synthesist's movements, and the synthesist perceives through the eidolon's senses and speaks through its voice, as the two are now one creature. The synthesist directs all of the eidolon's actions while fused, perceives through its senses, and speaks through its voice, as the two are now one creature.</p>
<p>While fused with his eidolon, the synthesist uses the eidolon's Strength, Dexterity, and Constitution, but retains his own Intelligence, Wisdom, and Charisma. The synthesist gains the eidolon's hit points as temporary hit points. When these hit points reach 0, the eidolon is killed and sent back to its home plane. The synthesist uses the eidolon's base attack bonus, and gains the eidolon's armor and natural armor bonuses and modifiers to ability scores. The synthesist also gains access to the eidolon's special abilities and the eidolon's evolutions. The synthesist is still limited to the eidolon's maximum number of natural attacks. The eidolon has no skills or feats of its own. The eidolon must be at least the same size as the synthesist. The eidolon must have <Link to="/evolution/limbs">limbs</Link> for the synthesist to cast spells with somatic components. The eidolon's temporary hit points can be restored with the rejuvenate eidolon spell.</p>
<p>While fused, the synthesist loses the benefits of his armor. He counts both as his original type and as an outsider for any effect related to type, whichever is worse for the synthesist. Spells such as <Link to="/spell/banishment">banishment</Link> or <Link to="/spell/dismissal">dismissal</Link> work normally on the eidolon, but the synthesist is unaffected. Neither the synthesist nor his eidolon can be targeted separately, as they are fused into one creature. The synthesist and eidolon cannot take separate actions. While fused with his eidolon, the synthesist can use all of his own abilities and gear, except for his armor. In all other cases, this ability functions as the summoner's normal eidolon ability (for example, the synthesist cannot use his summon monster ability while the eidolon is present).</p>
<p>This ability replaces the class's <strong className="hl">eidolon</strong> ability, <strong className="hl">bond senses</strong>, and <strong className="hl">life bond</strong>.</p>
<p>The following class abilities function differently for synthesist summoners.</p>
<p><strong>Fused Link (Su):</strong> Starting at 1st level, the synthesist forms a close bond with his eidolon. Whenever the temporary hit points from his eidolon would be reduced to 0, the summoner can, as a free action, sacrifice any number of his own hit points. Each hit point sacrificed this way prevents 1 point of damage done to the eidolon (thus preventing the loss of the summoner's temporary hit points), preventing the eidolon from being killed and sent back to its home plane.</p>
<p>This ability replaces <strong className="hl">life link</strong>.</p>
<p><strong>Shielded Meld (Ex):</strong> At 4th level, whenever the synthesist is fused with his eidolon, he gains a +2 shield bonus to his Armor Class and a +2 circumstance bonus on his saving throws.</p>
<p>This ability replaces <strong className="hl">shield ally</strong>.</p>
<p><strong>Maker's Jump (Sp):</strong> At 6th level, whenever the synthesist is fused with his eidolon, the synthesist can cast <Link to="/spell/dimension_door">dimension door</Link> as a spell-like ability using his caster level. This ability only affects the fused synthesist and eidolon. The synthesist can use this ability once per day at 6th level, plus one additional time per day for every six levels beyond 6th.</p>
<p>This ability replaces <strong className="hl">maker's call</strong> and <strong className="hl">transposition</strong>.</p>
<p><strong>Greater Shielded Meld (Ex):</strong> At 12th level, whenever the synthesist is fused with his eidolon, he gains a +4 shield bonus to his Armor Class and a +4 circumstance bonus on his saving throws.</p>
<p>This ability replaces <strong className="hl">greater shield ally</strong>.</p>
<p><strong>Split Forms (Su):</strong> At 16th level, as a swift action, the synthesist and his fused eidolon can split into two creatures: the synthesist and the eidolon. Both have the same evolutions. The synthesist emerges in a square adjacent to the eidolon if possible. All effects and spells currently targeting the fused synthesist-eidolon affect both the synthesist and the eidolon.</p>
<p>The synthesist can use this ability for a number of rounds per day equal to his summoner level. He can end this effect at any time as a full-round action. For the duration of this effect, the eidolon functions as a normal eidolon of the summoner's class level.</p>
<p>This ability replaces <strong className="hl">merge forms</strong>.</p>
</>};
const _twinned_summoner = {hasJL:true,title: "Twinned Summoner", jsx: <><div className="jumpList" id="arc-summoner-twinned_summoner-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arc-summoner-twinned_summoner-twinned-eidolon-evolutions">Twinned Eidolon Evolutions</InnerLink></li></ul></div><h2 id="arc-summoner-twinned_summoner-twinned-summoner">Twinned Summoner</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 18</Link><br/>Reflecting the connected nature of Imbrex, a twinned summoner and his eidolon appear identical save for any obvious differences, such as evolutions or equipment.</p>
<p><strong>Twinned Eidolon:</strong> The twinned summoner's eidolon is restricted to the biped base form. If the summoner's natural size is smaller than Medium, the twinned summoner's eidolon must be Small. This ability may require a different base form to match the twinned summoner's natural form, at the GM's discretion, if the twinned summoner is not a bipedal creature.</p>
<p><strong>Teamwork Feats (Ex):</strong> At 4th level and at 12th level, a twinned summoner gains <Link to="/main/feats_teamwork">a bonus teamwork feat</Link>. He must meet the prerequisites of the selected teamwork feat. The twinned summoner automatically grants all of his teamwork feats to his eidolon. The eidolon doesn't need to meet the prerequisites of these teamwork feats.</p>
<p>This ability replaces <strong className="hl">shield ally</strong> and <strong className="hl">greater shield ally</strong>.</p>
<p><strong>Twinned Transposition (Su):</strong> At 6th level, as a standard action, a twinned summoner can swap locations with his eidolon as if each were using <Link to="/spell/dimension_door">dimension door</Link>, using the twinned summoner's caster level. If the eidolon is out of range, the ability is wasted. If either the twinned summoner or his eidolon occupies more squares than the other, each must occupy one or more squares that were occupied by the other if possible, or as close as possible if not. The twinned summoner can use this ability once per day at 6th level, plus one additional time per day for every 4 levels beyond 6th. At 8th level, he can use this ability as a swift action.</p>
<p>This ability replaces <strong className="hl">maker's call</strong> and <strong className="hl">transposition</strong>.</p>
<p><strong>Twin Summoner (Su):</strong> At 16th level, a twinned summoner can touch his eidolon as a standard action, enhancing its similarity to the summoner. The eidolon loses any natural weapons or size increases gained from evolutions, and its Intelligence, Wisdom, and Charisma scores change to match the base scores of the summoner. The eidolon can cast any of the summoner's spells known using the summoner's caster level and spell slots. It doesn't gain the benefit of any of the summoner's items, feats, or other effects that affect spellcasting. The eidolon can keep this form for a number of minutes per day equal to the summoner's class level. This duration does not need to be consecutive, but it must be spent in 1-minute increments. The summoner can end this effect as a free action.</p>
<p>This ability replaces the <strong className="hl">merge forms</strong> class feature.</p>
<h3 id="arc-summoner-twinned_summoner-twinned-eidolon-evolutions" data-hash-target>Twinned Eidolon Evolutions</h3>
<p>The following evolutions are only available to this archetype.</p>
<h4 id="arc-summoner-twinned_summoner-shared-evolution">Shared Evolution</h4>
<p><strong>Cost:</strong> 1 point</p>
<p>Select a 1-point or 2-point evolution the eidolon has. As a standard action, the eidolon can touch the summoner and transfer the selected evolution to him. This functions as the summoner's aspect ability, and the same limitations apply. The summoner can touch the eidolon as a standard action to return the evolution. The evolution returns to the eidolon automatically if the eidolon is dismissed by the summoner or sent back to its home plane.</p>
<h4 id="arc-summoner-twinned_summoner-extra-feat">Extra Feat</h4>
<p><strong>Cost:</strong> 2 points</p>
<p>The eidolon gains an extra feat. It must meet the prerequisites of the feat.</p>
<h4 id="arc-summoner-twinned_summoner-shared-slot">Shared Slot</h4>
<p><strong>Cost:</strong> 2 points</p>
<p>Select a magic item slot. A magic item worn by the eidolon in that slot remains active even if the summoner is also wearing a magic item in that slot. This evolution can be selected more than once. Each time an eidolon selects this evolution, it applies to a new slot.</p>
</>};
const _unwavering_conduit = {title: "Unwavering Conduit", jsx: <><h2 id="arc-summoner-unwavering_conduit-unwavering-conduit">Unwavering Conduit</h2>
<p><strong>Sources</strong> <Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook pg. 17</Link><br/>Unwavering conduits work to keep everything ordered and regimented, drawing on power from the Eternal City of Axis, Heaven, or Hell to enforce whichever laws the summoner finds paramount. Lawful good unwavering conduits often work with Riftwardens to protect the integrity of the Great Beyond, while lawful evil unwavering conduits are commonly diabolists in Cheliax.</p>
<p><strong>Alignment:</strong> Any lawful.</p>
<p><strong>Eidolon of Law:</strong> An unwavering conduit's eidolon must be of a lawful alignment. Once selected, the evolutions of the unwavering conduit's eidolon cannot be changed when a new class level is gained (though they can be altered normally with the transmogrify spell). At least half the eidolon's skill points must be spent on skills in which the unwavering conduit also has ranks. The eidolon gains a +1 resistance bonus on saving throws against spells and abilities of the conjuration, enchantment, and transmutation schools. This bonus increases to +2 at 3rd level, and by an additional 1 for every 3 levels thereafter. The eidolon has 1 fewer evolution point than normal for an eidolon of the unwavering conduit's summoner level.</p>
<p>This ability alters <strong className="hl">eidolon</strong>.</p>
<p><strong>Unwavering Monsters:</strong> Since an unwavering conduit's power is drawn from planar energies aligned with law, all the creatures he summons must be of a lawful alignment. If a creature would normally be celestial or fiendish, it is instead a <Link to="/template/resolute">resolute creature</Link>.</p>
<p>This also causes the unwavering conduit's summoning power to be more set than a standard summoner's. Beginning at 3rd level, each time he uses summon monster to summon multiple monsters, rather than rolling a die to see how many creatures he summons, he receives a specific number (two creatures for 1d3, or four creatures for 1d4+1). If an item, spell, or ability would increase the number of creatures summoned, the set number increases by that amount.</p>
<p>Also, starting at 2nd level, creatures summoned by the unwavering conduit receive a +1 resistance bonus on saving throws against spells and abilities of the conjuration, enchantment, and transmutation schools. This bonus increases to +2 at 6th level, and by an additional 1 every 4 class levels thereafter.</p>
<p>This ability alters <strong className="hl">summon monster</strong>.</p>
<p><strong>Law Magic:</strong> The unwavering conduit gains the following bonus spells known at the listed spell level: 1st-<Link to="/spell/protection_from_chaos">protection from chaos</Link>, 2nd-<Link to="/spell/arrow_of_law">arrow of law</Link>, 3rd-<Link to="/spell/magic_circle_against_chaos">magic circle against chaos</Link>, 4th-<Link to="/spell/orders_wrath">order's wrath</Link>, 5th-<Link to="/spell/dispel_chaos">dispel chaos</Link>, 6th-<Link to="/spell/dictum">dictum</Link>. The unwavering conduit gains one fewer spell known per spell level for spell levels 1-6.</p>
<p>This ability alters the summoner's <strong className="hl">spells</strong> known.</p>
</>};
const _wild_caller_arg = {title: "Wild Caller (ARG)", jsx: <><h2 id="arc-summoner-wild_caller_arg-wild-caller-arg">Wild Caller (ARG)</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 44</Link><br/>Often a half-elf's ties to nature and elven heritage are so strong that they can dramatically affect the nature of his summonings. The wild caller calls eidolons that take more natural and savage forms and summons from nature rather than the Great Beyond. A wild caller has the following class features.</p>
<p><strong>Spells:</strong> A wild caller does not have access to summon monster spells. Instead, he swaps out those spells on his spell list with summon nature's ally spells of the same level.</p>
<p>This ability alters the normal <strong className="hl">spell list</strong> of the summoner.</p>
<p><strong>Eidolon:</strong> The eidolon of a wild caller tends to take more natural and more savage forms than other summoners' eidolons. A wild caller gains 1/4 his class level as bonus evolution points in his eidolon's evolution pool, but his eidolon cannot take the following evolutions:</p>
<blockquote>
<p><em>1-point evolutions:</em> basic magic, magic attacks, skilled (while the eidolon can select this evolution, it can only do so with the following skills: Acrobatics, Climb, Escape Artist, Fly, Intimidate, Perception, Survival, and Swim), unnatural aura; <em>2-point evolutions:</em> energy attacks, immunity, weapon training, channel resistance, head, minor magic, undead appearance; <em>3-point evolutions:</em> damage reduction, frightful presence, major magic; <em>4-point evolutions:</em> breath weapon, spell resistance, dimension door, incorporeal form, lifesense, no breath, ultimate magic.</p>
</blockquote>
<p>This ability alters the normal summoner's <strong className="hl">eidolon</strong> class feature, but is otherwise identical to that class feature.</p>
<p><strong>Summon Nature's Ally I (Sp):</strong> Starting at 1st level, a wild caller can cast <Link to="/spell/summon_natures_ally">summon nature's ally</Link> a number of times per day equal to 3 + his Charisma modifier. At 3rd level and every 2 levels thereafter, the power of this ability increases by one spell level, allowing him to summon more powerful creatures (to a maximum of summon nature's ally IX at 17th level). Furthermore, at 19th level, the wild caller cannot use <em>gate</em> as a spell-like ability, but can use either <Link to="/spell/summon_elder_worm">summon elder worm</Link> or <Link to="/spell/summon_froghemoth">summon froghemoth</Link> instead. This ability otherwise functions like the standard summoner's summon monster I ability and replaces that ability.</p>
</>};
const _wild_caller_hotw = {title: "Wild Caller (HotW)", jsx: <><h2 id="arc-summoner-wild_caller_hotw-wild-caller-hotw">Wild Caller (HotW)</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_wild">Heroes of the Wild pg. 25</Link><br/>A wild caller summons creatures from the First World and forges a bond with an eidolon with a plant body.</p>
<p><strong>Plant Eidolon:</strong> When a wild caller summons his eidolon, the eidolon's body is created from extraplanar plant material and imbued with the intelligence of a being from the First World. Its statistics are changed from a standard eidolon as follows.</p>
<p><strong>Type:</strong> The eidolon has the <Link to="/type/plant">plant</Link> creature type and <Link to="/subtype/extraplanar">extraplanar</Link> subtype. Unlike other plant creatures, the eidolon is not immune to mind-affecting or polymorph effects, though it does gain immunity to paralysis, poison, sleep effects, and stunning.</p>
<p><strong>Base Form:</strong> The wild caller chooses one of the base forms listed below for his plant eidolon. When the eidolon is summoned in an environment matching one of these base forms, the wild caller can choose to change the eidolon's base form to the matching form by sacrificing one daily use of his summon nature's ally ability as a free action.</p>
<p>Plant eidolon base forms are as follows.</p>
<blockquote className="hanging">
<p><strong>Cactus (desert):</strong> <em>Size</em> Medium; <em>Speed</em> 30 ft.; <em>AC</em> +2 natural armor; <em>Saves</em> Fort (good), Ref (good), Will (bad); <em>Attack</em>s slam (1d8), sting (1d4); <em>Ability Scores</em> Str 14, Dex 14, Con 13, Int 7, Wis 10, Cha 11; <em>Free Evolutions</em> <Link to="/evolution/limbs">limbs</Link> (arms), limbs (legs), <Link to="/evolution/sting">sting</Link>, <Link to="/evolution/tail">tail</Link>.</p>
<p><strong>Conifer (forest, mountain):</strong> <em>Size</em> Medium; <em>Speed</em> 30 ft.; <em>AC</em> +2 natural armor; <em>Saves</em> Fort (good), Ref (bad), Will (good); <em>Attack</em>s 2 claws (1d4); <em>Ability Scores</em> Str 14, Dex 12, Con 15, Int 7, Wis 10, Cha 11; Resist cold 10; <em>Free Evolutions</em> <Link to="/evolution/claws">claws</Link>, <Link to="/evolution/limbs">limbs</Link> (arms), limbs (legs), <Link to="/evolution/resistance">resistance</Link> (cold).</p>
<p><strong>Mushroom (swamp, underground):</strong> <em>Size</em> Medium; <em>Speed</em> 20 ft.; <em>AC</em> +2 natural armor; <em>Saves</em> Fort (good), Ref (good), Will (bad); <em>Attack</em> bite (1d6) plus poison; <em>Ability Scores</em> Str 14, Dex 14, Con 13, Int 7, Wis 10, Cha 11; <em>Free Evolutions</em> <Link to="/evolution/bite">bite</Link>, <Link to="/evolution/limbs">limbs</Link> (arms), limbs (legs), <Link to="/evolution/poison">poison</Link>.</p>
<p><strong>Tree (forest, jungle, swamp):</strong> <em>Size</em> Medium; <em>Speed</em> 20 ft.; <em>AC</em> +4 natural armor; <em>Saves</em> Fort (good), Ref (good), Will (bad); <em>Attack</em>s 2 slams (1d8); <em>Ability Scores</em> Str 16, Dex 12, Con 13, Int 7, Wis 10, Cha 11; <em>Free Evolutions</em> <Link to="/evolution/improved_natural_armor">improved natural armor</Link>, <Link to="/evolution/limbs">limbs</Link> (arms), limbs (legs), <Link to="/evolution/slam">slam</Link> &times;2.</p>
</blockquote>
<p>This ability alters the summoner's <strong className="hl">eidolon</strong>.</p>
<p><strong>Summon Nature's Ally (Sp):</strong> A wild caller can cast <Link to="/spell/summon_natures_ally">summon nature's ally</Link> as a spell-like ability a number of times per day equal to 3 + his Charisma modifier. At levels where a regular summoner would gain access to a new level of summon monster as a spell-like ability, the wild caller instead gains the equivalent summon nature's ally spell; at 19th level, he can use <Link to="/spell/summon_natures_ally_ix">summon nature's ally IX</Link> or <Link to="/spell/gate">gate</Link>. When a wild caller gains a summon nature's ally spell as a spell-like ability, he adds it to his class spell list (though he must still select it as a spell known if he wants to gain the ability to cast it as a normal spell).</p>
<p>This ability alters the <strong className="hl">summon monster</strong> ability.</p>
<p><strong>Fey Friend (Ex):</strong> At 10th level, the wild caller gains a +4 bonus on Bluff, Diplomacy, and Sense Motive checks against fey.</p>
<p>This ability replaces <strong className="hl">aspect</strong>, which is instead gained at 18th level in place of <strong className="hl">greater aspect</strong>.</p>
</>};
export default {blood_god_disciple:_blood_god_disciple,blood_summoner:_blood_summoner,broodmaster:_broodmaster,counter_summoner:_counter_summoner,evolutionist:_evolutionist,first_worlder:_first_worlder,god_caller:_god_caller,leshy_caller:_leshy_caller,master_summoner:_master_summoner,morphic_savant:_morphic_savant,naturalist:_naturalist,pyroclast:_pyroclast,shadow_caller:_shadow_caller,shaitan_binder:_shaitan_binder,spirit_summoner:_spirit_summoner,storm_caller:_storm_caller,story_summoner:_story_summoner,synthesist:_synthesist,twinned_summoner:_twinned_summoner,unwavering_conduit:_unwavering_conduit,wild_caller_arg:_wild_caller_arg,wild_caller_hotw:_wild_caller_hotw}