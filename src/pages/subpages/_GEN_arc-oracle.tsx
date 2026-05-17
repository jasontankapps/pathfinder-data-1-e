import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _ancient_lorekeeper = {title: "Ancient Lorekeeper", jsx: <><h2 id="arc-oracle-ancient_lorekeeper-ancient-lorekeeper">Ancient Lorekeeper</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 24</Link><br/>The ancient lorekeeper is a repository for all the beliefs and vast knowledge of an <Link to="/race/elves">elven</Link> people. She shows a strong interest in and understanding of histories and creation legends at a young age, and as she matures her calling to serve as the memory of her long-lived people becomes clear to all who know her. An ancient lorekeeper has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-oracle-ancient_lorekeeper--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/elf">Elf</Link></td></tr></tbody></table></ScrollContainer></div><Ability icon={["skills"]} id="arc-oracle-ancient_lorekeeper-undefined">
<Pair id="arc-oracle-ancient_lorekeeper-undefined" single>Class Skills</Pair>
<Pair title="Replaces" hl>Bonus skills from the oracle's mystery</Pair>
<Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT)</Pair>
<Pair title="Passive Ability">Whenever she makes a Knowledge check of any kind about a question regarding elves (creatures of the elf subtype), the ancient lorekeeper adds half her class level on her check.</Pair></Ability>
<Ability id="arc-oracle-ancient_lorekeeper-elven-arcana-ex" icon={["spell-book","upgrade"]}>
<Pair single id="arc-oracle-ancient_lorekeeper-elven-arcana-ex">Elven Arcana (Ex)</Pair>
<Pair hl title="Replaces">Bonus spells gained from the oracle's mystery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">An ancient lorekeeper's mastery of elven legends and philosophy has allowed her to master one spell used by elven wizards. She selects one spell from the <Link to="/main/spells_wizard">sorcerer/wizard spell list</Link> that is at least one level lower than the highest-level oracle spell she can cast. The ancient lorekeeper gains this as a bonus spell known. The spell is treated as one level higher than its true level for all purposes.</Pair>
<Pair title="At 4th Level">The ancient lorekeeper may choose an additional spell.</Pair>
<Pair title="At 6th Level">The ancient lorekeeper may choose an additional spell.</Pair>
<Pair title="At 8th Level">The ancient lorekeeper may choose an additional spell.</Pair>
<Pair title="At 10th Level">The ancient lorekeeper may choose an additional spell.</Pair>
<Pair title="At 12th Level">The ancient lorekeeper may choose an additional spell.</Pair>
<Pair title="At 14th Level">The ancient lorekeeper may choose an additional spell.</Pair>
<Pair title="At 16th Level">The ancient lorekeeper may choose an additional spell.</Pair>
<Pair title="At 18th Level">The ancient lorekeeper may choose an additional spell.</Pair>
</Ability>
<p><strong className="hl">Mysteries:</strong> The following oracle mysteries complement the ancient lorekeeper archetype: <Link to="/mystery/lore">Lore</Link>, <Link to="/mystery/nature">Nature</Link>, <Link to="/mystery/waves">Waves</Link>, <Link to="/mystery/wind">Wind</Link>, <Link to="/mystery/ancestor">Ancestor</Link>, <Link to="/mystery/time">Time</Link>, <Link to="/mystery/wood">Wood</Link>.</p>
</>};
const _black_blooded_oracle = {title: "Black-Blooded Oracle", jsx: <><h2 id="arc-oracle-black_blooded_oracle-black-blooded-oracle">Black-Blooded Oracle</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_magic">Inner Sea Magic pg. 32</Link><br/>The black-blooded oracle has been infused with the eerie influence of strange fluids that seep from the rock in the deepest pits of the Darklands, the so-called "<Link to="/magic-artifact/black_blood_of_orv">Black Blood of Orv</Link>." Often, the eerie taint of the black blood can lie dormant in a lineage for generations before manifesting. It even seems capable of reaching out to touch those destined to become oracles through other strange methods. However an oracle becomes black-blooded, her divine powers carry within them the weird power of this chilling magical substance. A black-blooded oracle has the following class features.</p>
<p>See the link above for rules on the black blood itself, but note that a black-blooded oracle does not require access to this eldritch substance to function.</p>
<Ability id="arc-oracle-black_blooded_oracle-curse-of-black-blood-su" icon={["broken-shield","magic-swirl","armor-upgrade"]}>
<Pair single id="arc-oracle-black_blooded_oracle-curse-of-black-blood-su">Curse of Black Blood (Su)</Pair>
<Pair hl title="Replaces">Oracle's curse</Pair>
<Pair title="Info">All black-blooded oracles effectively share the same curse: the curse of black blood. The material affects these oracles physically and mentally, altering both physiology and mystic powers. The blood of a black-blooded oracle actually runs black, and wounds she suffers are infected by her own power and are difficult to heal.</Pair>
<Pair title="Passive Ability">She is immune to the effects (both beneficial and destructive) of black blood. Positive and negative energy affect a black-blooded oracle as if she were undead: positive energy harms her, while negative energy heals her (this aspect of the curse has no effect if the oracle is undead). The curse also dulls the oracle's coordination somewhat, imparting a -4 penalty on all Dexterity-based skill checks.</Pair>
<Pair title="At 5th Level">She gains cold resistance 5.</Pair>
<Pair title="At 10th Level">This increases to cold resistance 10.</Pair>
<Pair title="At 15th Level">She gains immunity to cold.</Pair>
</Ability>
<Ability id="arc-oracle-black_blooded_oracle-black-blood-revelations" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-oracle-black_blooded_oracle-black-blood-revelations">Black Blood Revelations</Pair>
<Pair title="Info">All black-blooded oracles have access to the following revelations, regardless of what mystery they choose.</Pair>
</Ability>
<Ability id="arc-oracle-black_blooded_oracle-black-blood-spray-su" extraClasses="subAbility" icon={["armor-upgrade","magic-palm"]}>
<Pair single id="arc-oracle-black_blooded_oracle-black-blood-spray-su">Black Blood Spray (Su)</Pair>
<Pair title="Usage">1 time/day per two oracle levels (minimum 1)<ByLevelPop levels={[[2,1],[4,2],[6,3],[8,4],[10,5],[12,6],[14,7],[16,8],[18,9],[20,10]]} unit="time" postText="/day" /></Pair>
<Pair title="Immediate Action">Whenever a black-blooded oracle takes piercing or slashing damage, she can cause some of her black blood to spray from the wound to strike any adjacent target. She must make a touch attack to hit the target (if she's attacking the creature that caused the wound, she gains a +4 circumstance bonus on her attack roll). If she hits, she deals 1d8 points of cold damage + an additional number of points equal to <Link to="/misc/half">half</Link> her oracle level.</Pair>
</Ability>
<Ability id="arc-oracle-black_blooded_oracle-dark-resilience-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-oracle-black_blooded_oracle-dark-resilience-su" flavor="The black blood flowing through a black-blooded oracle's veins gives her resistance to many effects to which undead are immune.">Dark Resilience (Su)</Pair>
<Pair title="Immediate Action">Once per day whenever she fails a saving throw against an <Link to="/rule/ability_drain">ability drain</Link>, a death effect, disease, <Link to="/rule/energy_drain">energy drain</Link>, paralysis, or poison, she may attempt that saving throw again with a +4 circumstance bonus. She must take the second result, even if it is worse.</Pair>
<Pair title="At 7th Level">She can use this ability twice per day.</Pair>
<Pair title="At 15th Level">She can use the ability 3 times per day.</Pair>
</Ability>
<Ability id="arc-oracle-black_blooded_oracle-darkvision-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-oracle-black_blooded_oracle-darkvision-ex">Darkvision (Ex)</Pair>
<Pair title="Ability">A black-blooded oracle gains darkvision with a range of 60 feet.</Pair>
<Pair title="At 15th Level">The range increases to 90 feet.</Pair>
</Ability>
</>};
const _community_guardian = {title: "Community Guardian", jsx: <><h2 id="arc-oracle-community_guardian-community-guardian">Community Guardian</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 63</Link><br/>The community guardian is chosen to protect and succor the weak and innocent within her community. Her calling also allows her to draw upon and focus the collective will in order to achieve those goals. A community guardian has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-oracle-community_guardian--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><ul><li><Link to="/race/halfling">Halfling</Link></li><li>Alignment must be good.</li></ul></td></tr></tbody></table></ScrollContainer></div><p><strong className="hl">Recommended Mysteries:</strong> <Link to="/mystery/ancestor">ancestor</Link>, <Link to="/mystery/life">life</Link>, <Link to="/mystery/lore">lore</Link>, <Link to="/mystery/nature">nature</Link>.</p>
<Ability icon={["skills"]} id="arc-oracle-community_guardian-undefined">
<Pair id="arc-oracle-community_guardian-undefined" single>Class Skills</Pair>
<Pair title="Replaces" hl>Bonus skills from the oracle's mystery</Pair>
<Pair title="New Class Skills"><Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/linguistics">Linguistics</Link> (INT), <Link to="/skill/perception">Perception</Link> (WIS), <Link to="/skill/survival">Survival</Link> (WIS)</Pair></Ability>
<Ability id="arc-oracle-community_guardian-bonus-spells" icon={["spell-book"]}>
<Pair single id="arc-oracle-community_guardian-bonus-spells">Bonus Spells</Pair>
<Pair hl title="Replaces">The bonus spells gained at 2nd, 4th, 6th, 10th, and 12th levels from the oracle's mystery</Pair>
<Pair title="Info">The oracle gains these bonus spells at the listed levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/bless_water">Bless water</Link></Pair>
<Pair plain title="4th"><Link to="/spell/consecrate">Consecrate</Link></Pair>
<Pair plain title="6th"><Link to="/spell/remove_disease">Remove disease</Link></Pair>
<Pair plain title="10th"><Link to="/spell/hallow">Hallow</Link></Pair>
<Pair plain title="12th"><Link to="/spell/heroes_feast">Heroes' feast</Link></Pair>
</Ability>
<Ability id="arc-oracle-community_guardian-revelations" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-oracle-community_guardian-revelations">Revelations</Pair>
<Pair title="Info">A community guardian must take the following revelations at the listed levels.</Pair>
</Ability>
<Ability id="arc-oracle-community_guardian-spirit-of-community-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-oracle-community_guardian-spirit-of-community-ex">Spirit of Community (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Move-Equivalent Action">You call upon the spirits of community. For the next round, you grant every ally within 30 feet a +1 competence bonus on a single skill check (of the ally's choice) that it makes before the end of this revelation's duration. Furthermore, allies within 30 feet can, as a <strong className="hl">free action</strong>, choose to forgo this bonus, and instead grant a single ally a +1 increase to its competence bonus granted by this ability (maximum +5).</Pair>
</Ability>
<Ability id="arc-oracle-community_guardian-renewing-radiance-su" extraClasses="subAbility" icon={["shield-reflect","heart-plus"]}>
<Pair single id="arc-oracle-community_guardian-renewing-radiance-su">Renewing Radiance (Su)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">Once per day you can produce a <Link to="/misc/burst">burst</Link> of swirling white light that provides a measure of protection and renewal to allies within 30 feet for 1 round. On their turn, the allies can choose either to gain a +1 sacred bonus to AC for 1 round or to heal a number of hit points equal to 1d6 + your Charisma bonus (their choice). If an ally is <Link to="/misc/dying">dying</Link>, it is <Link to="/misc/stabilize">stabilized</Link> instead.</Pair>
<Pair title="At 7th Level">The bonus to AC increases to +2, and the healing increases to 2d6 + your Charisma bonus hit points.</Pair>
<Pair title="At 14th Level">The bonus to AC increases to +3, and the healing increases to 3d6 + your Charisma bonus hit points.</Pair>
</Ability>
</>};
const _cyclopean_seer = {title: "Cyclopean Seer", jsx: <><h2 id="arc-oracle-cyclopean_seer-cyclopean-seer">Cyclopean Seer</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_monster_codex">Inner Sea Monster Codex pg. 17</Link><br/>A cyclopean seer draws power from the mysterious prophetic abilities of ancient giants.</p>
<p><strong className="hl">Recommended Mysteries:</strong> <Link to="/mystery/ancestor">Ancestor</Link>, <Link to="/mystery/lore">lore</Link>, <Link to="/mystery/nature">nature</Link>, <Link to="/mystery/occult">occult</Link>, <Link to="/mystery/time">time</Link>.</p>
<Ability icon={["skills"]} id="arc-oracle-cyclopean_seer-undefined">
<Pair id="arc-oracle-cyclopean_seer-undefined" single>Class Skills</Pair>
<Pair title="Replaces" hl>Bonus skills from the oracle's mystery</Pair>
<Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> (INT), <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT), <Link to="/skill/linguistics">Linguistics</Link> (INT)</Pair></Ability>
<Ability id="arc-oracle-cyclopean_seer-oracles-curse" icon={["info"]}>
<Pair single id="arc-oracle-cyclopean_seer-oracles-curse">Oracle's Curse</Pair>
<Pair title="Info">A cyclopean seer must choose the <Link to="/oraclecurse/haunted">haunted</Link>, <Link to="/oraclecurse/hunger">hunger</Link>, <Link to="/oraclecurse/powerless_prophecy">powerless prophecy</Link>, or <Link to="/oraclecurse/tongues">tongues</Link> curse.</Pair>
</Ability>
<Ability id="arc-oracle-cyclopean_seer-bonus-spells" icon={["spell-book"]}>
<Pair single id="arc-oracle-cyclopean_seer-bonus-spells">Bonus Spells</Pair>
<Pair hl title="Alters">Bonus spells granted by the oracle's mystery</Pair>
<Pair title="Ability">Each time a cyclopean seer would gain a bonus spell from her mystery, she instead selects a <Link to="/main/spells_divination">divination</Link> spell from any class's spell list. If the spell is not on the cleric/oracle spell list, it must be at least 1 level lower than the highest-level oracle spell the cyclopean seer can cast.</Pair>
</Ability>
<Ability id="arc-oracle-cyclopean_seer-assume-fate-su" icon={["armor-downgrade","armor-upgrade"]}>
<Pair single id="arc-oracle-cyclopean_seer-assume-fate-su">Assume Fate (Su)</Pair>
<Pair hl title="Replaces">Revelation gained at 1st level</Pair>
<Pair title="Usage">Charisma modifier times/day</Pair>
<Pair title="Immediate Action">When targeted by an effect that requires a saving throw, you can choose another creature within line of sight that is attempting a save against the same effect. The target takes a penalty on its saving throw equal to 1d4 + 1 for every 4 levels you possess. You gain the value of their penalty as a luck bonus on your saving throw.</Pair>
</Ability>
<Ability id="arc-oracle-cyclopean_seer-brutal-trance-su" icon={["magic-swirl"]}>
<Pair single id="arc-oracle-cyclopean_seer-brutal-trance-su">Brutal Trance (Su)</Pair>
<Pair hl title="Replaces">Revelation gained at 7th level</Pair>
<Pair title="Standard Action">You can enter a trance that lasts 1 round per oracle level you possess. While in this trance, you are <Link to="/misc/confused">confused</Link>, but each round that you can act normally, you can ask a single question as if using <Link to="/spell/commune">commune</Link>.</Pair>
</Ability>
<Ability id="arc-oracle-cyclopean_seer-revelations" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-oracle-cyclopean_seer-revelations">Revelations</Pair>
<Pair hl title="Alters">Revelations</Pair>
<Pair title="Info">All cyclopean seers have access to the following revelations, regardless of their chosen mysteries.</Pair>
</Ability>
<Ability id="arc-oracle-cyclopean_seer-doomsaying-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-oracle-cyclopean_seer-doomsaying-su">Doomsaying (Su)</Pair>
<Pair title="Usage">Charisma modifier times/day</Pair>
<Pair title="Standard Action">You can pronounce doom on a creature within 30 feet. The target takes a penalty equal to your oracle level on either all skill checks, all savings throws, or all attack rolls (your choice) for 1 minute or until he fails one such roll.</Pair>
<Pair title="Special">This is a curse effect.</Pair>
</Ability>
<Ability id="arc-oracle-cyclopean_seer-flash-of-insight-su" extraClasses="subAbility" icon={["rolling-dices"]}>
<Pair single id="arc-oracle-cyclopean_seer-flash-of-insight-su">Flash of Insight (Su)</Pair>
<Pair title="Ability">You gain the <Link to="/monster/cyclops">cyclops</Link> racial ability of the same name. If you already possess this ability, you gain an additional daily use.</Pair>
<Pair title="Immediate Action"><em>Text from the</em> cyclops <em>entry:</em> Once per day, a cyclops can peer into an occluded visual spectrum of possible futures, gaining insight that allows it to select the exact result of one die roll before the roll is made. This effect can alter an action taken by the cyclops only, and cannot be applied to the rolls of others.</Pair>
</Ability>
<Ability id="arc-oracle-cyclopean_seer-prescience-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-oracle-cyclopean_seer-prescience-ex">Prescience (Ex)</Pair>
<Pair title="Passive Ability">You gain a bonus to your Armor Class against attacks of opportunity and a bonus on <Link to="/rule/concentration">concentration</Link> checks. These bonuses are equal to 2 + <Link to="/misc/one_fifth">one-fifth</Link> of your oracle level.</Pair>
</Ability>
<Ability id="arc-oracle-cyclopean_seer-final-revelation" icon={["magic-swirl","rolling-dices"]}>
<Pair single id="arc-oracle-cyclopean_seer-final-revelation">Final Revelation</Pair>
<Pair hl title="Replaces">Final revelation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">Upon reaching 20th level, you embody ancient cyclopes' insight. You can use each of the following once per day as a spell-like ability: <Link to="/spell/discern_location">discern location</Link>, <Link to="/spell/prying_eyes">prying eyes</Link>, and <Link to="/spell/stone_tell">stone tell</Link>.</Pair>
<Pair title="Special">In addition, using <em>flash of insight</em> to select a d20 roll result equal to or lower than your Charisma modifier doesn't expend that ability.</Pair>
</Ability>
</>};
const _divine_numerologist = {title: "Divine Numerologist", jsx: <><h2 id="arc-oracle-divine_numerologist-divine-numerologist">Divine Numerologist</h2>
<p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 17</Link><br/>The Oracular Council of Po Li and those trained in their sacred methods often include divine numerologists, who use esoteric mathematics and numbers traditions to peer into the past and future and extract meaningful portents. The divine numerologist's ultimate goal is to learn and understand the patterns in the equations and algorithms that underscore even the most chaotic forms of reality and use them to their personal advantage.</p>
<p><strong className="hl">Recommended Mysteries:</strong> Any.</p>
<Ability id="arc-oracle-divine_numerologist-bonus-spells" icon={["spell-book"]}>
<Pair single id="arc-oracle-divine_numerologist-bonus-spells">Bonus Spells</Pair>
<Pair hl title="Replaces">The bonus spells gained at 10th, 12th, 14th, 16th, and 18th levels from the oracle's mystery</Pair>
<Pair title="Info">The oracle gains these bonus spells at the listed levels.</Pair>
<Pair plain title="10th"><Link to="/spell/prying_eyes">Prying eyes</Link></Pair>
<Pair plain title="12th"><Link to="/spell/numerological_evocation">Numerological evocation</Link></Pair>
<Pair plain title="14th"><Link to="/spell/greater_arcane_sight">Greater arcane sight</Link></Pair>
<Pair plain title="16th"><Link to="/spell/moment_of_prescience">Moment of prescience</Link></Pair>
<Pair plain title="18th"><Link to="/spell/foresight">Foresight</Link></Pair>
</Ability>
<Ability id="arc-oracle-divine_numerologist-revelations" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-oracle-divine_numerologist-revelations">Revelations</Pair>
<Pair hl title="Replaces">1st- and 7th-level revelations</Pair>
<Pair title="Ability">A divine numerologist must take the following revelations at the listed levels.</Pair>
</Ability>
<Ability id="arc-oracle-divine_numerologist-calculate-the-odds-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-oracle-divine_numerologist-calculate-the-odds-su">Calculate the Odds (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Swift Action">Once per day, the divine numerologist can quickly tabulate the variables affecting the current situation. This grants the divine numerologist a circumstance bonus equal to her Charisma modifier (minimum +1) to her next d20 roll within 1 round. If the divine numerologist does not use this bonus within 1 round, the use of this ability is wasted.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
<Pair title="At 7th Level">The divine numerologist can use this ability twice a day.</Pair>
<Pair title="At 15th Level">She may use this 3 times per day.</Pair>
</Ability>
<Ability id="arc-oracle-divine_numerologist-program-the-divine-algorithm-su" extraClasses="subAbility" icon={["rolling-dices"]}>
<Pair single id="arc-oracle-divine_numerologist-program-the-divine-algorithm-su" flavor="The divine numerologist's mastery of the divine mathematics allows her to set specific parameters in the divine equation to adjust the outcome of an event right as it is about to occur.">Program the Divine Algorithm (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Immediate Action">Once per day, the divine numerologist can take the average of a single roll of one or more dice, averaging each die separately (for example, the average of a d20 roll is 10, the average of 3d6 is 9, and so on). When using this ability, the divine numerologist can add any modifiers to the roll as normal.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
<Pair title="At 11th Level">She may use this ability twice a day.</Pair>
<Pair title="At 15th Level">She can use this three times a day, and instead of treating a roll as its average, she can instead treat the roll as its maximum result (for example, the divine numerologist can treat a d20 roll as if the result were 20).</Pair>
<Pair title="Special">The divine numerologist must decide to use this ability immediately before the roll she chooses to affect, and the divine numerologist cannot reroll this roll, even if she has a feat or another ability that would normally allow her to do so.</Pair>
</Ability>
<Ability id="arc-oracle-divine_numerologist-final-revelation" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-oracle-divine_numerologist-final-revelation">Final Revelation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">A divine numerologist understands the math behind the entirety of existence well enough to significantly tweak her own personal fate. The divine numerologist ceases aging. She no longer suffers age-related penalties to ability scores and cannot be magically aged.</Pair>
<Pair title="Ability">Once per day when the divine numerologist or another allied creature within 30 feet of her threatens a critical hit, the critical hit is automatically confirmed.</Pair>
</Ability>
</>};
const _dual_cursed_oracle = {title: "Dual-Cursed Oracle", jsx: <><h2 id="arc-oracle-dual_cursed_oracle-dual-cursed-oracle">Dual-Cursed Oracle</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 58</Link><br/>All oracles are cursed to some degree, but some oracles bear an even heavier burden. Though doubly afflicted with supernatural or physical hindrances, a dual-cursed oracle can manipulate fortune and gains greater insights into her mystery.</p>
<p><strong className="hl">Recommended Mysteries:</strong> Any.</p>
<Ability id="arc-oracle-dual_cursed_oracle-oracles-curse" icon={["info"]}>
<Pair single id="arc-oracle-dual_cursed_oracle-oracles-curse">Oracle's Curse</Pair>
<Pair hl title="Alters">Oracle's curse</Pair>
<Pair title="Info">A dual-cursed oracle must choose two curses at 1st level. One of these curses (oracle's choice) never changes its abilities as the oracle gains levels; for example, an oracle with <Link to="/oraclecurse/clouded_vision">clouded vision</Link> never gains darkvision 60 feet, blindsense, or blindsight. The other curse comes with its normal benefits.</Pair>
</Ability>
<Ability id="arc-oracle-dual_cursed_oracle-class-skills" icon={["broken-shield"]}>
<Pair single id="arc-oracle-dual_cursed_oracle-class-skills">Class Skills</Pair>
<Pair title="Info">A dual-cursed oracle gains no additional class skills from her mystery.</Pair>
</Ability>
<Ability id="arc-oracle-dual_cursed_oracle-bonus-spells" icon={["spell-book"]}>
<Pair single id="arc-oracle-dual_cursed_oracle-bonus-spells">Bonus Spells</Pair>
<Pair hl title="Replaces">The bonus spells gained at 2nd, 4th, and 6th levels from the oracle's mystery</Pair>
<Pair title="Info">The oracle gains these bonus spells at the listed levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/ill_omen">Ill omen</Link></Pair>
<Pair plain title="4th"><Link to="/spell/oracles_burden">Oracle's burden</Link></Pair>
<Pair plain title="6th"><Link to="/spell/bestow_curse">Bestow curse</Link></Pair>
</Ability>
<Ability id="arc-oracle-dual_cursed_oracle-revelations" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-oracle-dual_cursed_oracle-revelations">Revelations</Pair>
<Pair title="At 5th Level">A dual-cursed oracle gains a bonus revelation.</Pair>
<Pair title="At 13th Level">A dual-cursed oracle gains a bonus revelation.</Pair>
<Pair title="Special">The cursed oracle may select the following revelations in place of a mystery revelation.</Pair>
</Ability>
<Ability id="arc-oracle-dual_cursed_oracle-misfortune-ex" extraClasses="subAbility" icon={["rolling-dices"]}>
<Pair single id="arc-oracle-dual_cursed_oracle-misfortune-ex">Misfortune (Ex)</Pair>
<Pair title="Immediate Action">You can force a creature within 30 feet to reroll any one d20 roll that it has just made before the results of the roll are revealed. The creature must take the result of the reroll, even if it's worse than the original roll.</Pair>
<Pair title="Special">Once a creature has suffered from your misfortune, it cannot be the target of this revelation again for 1 day.</Pair>
</Ability>
<Ability id="arc-oracle-dual_cursed_oracle-fortune-ex" extraClasses="subAbility" icon={["rolling-dices"]}>
<Pair single id="arc-oracle-dual_cursed_oracle-fortune-ex">Fortune (Ex)</Pair>
<Pair title="Prerequisites">5th-level oracle</Pair>
<Pair title="Usage">1 time/day + 1 per six oracle levels beyond 5th<ByLevelPop levels={[[5,1],[11,2],[17,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Immediate Action">You can reroll any one d20 roll that you have just made before the results of the roll are revealed. You must take the result of the reroll, even if it's worse than the original roll.</Pair>
</Ability>
</>};
const _elementalist_oracle = {title: "Elementalist Oracle", jsx: <><h2 id="arc-oracle-elementalist_oracle-elementalist-oracle">Elementalist Oracle</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 68</Link>, <Link to="/source/people_of_the_sands">People of the Sands pg. 15</Link><br/>An elementalist oracle shares an affinity with the elements and elemental creatures. She can communicate with elemental creatures and can eventually become an elemental herself. She sees perfection in manifestations of elemental fury in the natural world, be they the thunderous wrath of the storm, the churning waters of the ocean's tides or a flooding river, the terrain-shaping power of a landslide or earthquake, or the apocalyptic fury of a volcanic eruption.</p>
<p><strong className="hl">Recommended Mysteries:</strong> <Link to="/mystery/flame">Flame</Link>, <Link to="/mystery/stone">stone</Link>, <Link to="/mystery/waves">waves</Link>, <Link to="/mystery/wind">wind</Link>.</p>
<Ability id="arc-oracle-elementalist_oracle-bonus-spells" icon={["spell-book"]}>
<Pair single id="arc-oracle-elementalist_oracle-bonus-spells">Bonus Spells</Pair>
<Pair hl title="Replaces">The bonus spells gained at 4th, 6th, 8th, 10th, 12th and 18th levels from the oracle's mystery</Pair>
<Pair title="Info">The oracle gains these bonus spells at the listed levels.</Pair>
<Pair plain title="4th"><Link to="/spell/elemental_touch">Elemental touch</Link></Pair>
<Pair plain title="6th"><Link to="/spell/protection_from_energy">Protection from energy</Link></Pair>
<Pair plain title="8th"><Link to="/spell/elemental_body_i">Elemental body I</Link></Pair>
<Pair plain title="10th"><Link to="/spell/summon_monster_v">Summon monster V</Link> (elementals only)</Pair>
<Pair plain title="12th"><Link to="/spell/elemental_body_iii">Elemental body III</Link></Pair>
<Pair plain title="18th"><Link to="/spell/elemental_swarm">Elemental swarm</Link></Pair>
</Ability>
<Ability id="arc-oracle-elementalist_oracle-revelations" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-oracle-elementalist_oracle-revelations">Revelations</Pair>
<Pair title="Info">An elementalist oracle must take the following revelations at the listed levels.</Pair>
</Ability>
<Ability id="arc-oracle-elementalist_oracle-elemental-linguist-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-oracle-elementalist_oracle-elemental-linguist-su">Elemental Linguist (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You gain a bonus language of your choice from the following list: Aquan, Auran, Ignan, or Terran.</Pair>
<Pair title="At 5th Level">You gain another language chosen from this list.</Pair>
<Pair title="At 10th Level">You gain another language chosen from this list.</Pair>
<Pair title="At 15th Level">You gain another language chosen from this list.</Pair>
</Ability>
<Ability id="arc-oracle-elementalist_oracle-elemental-form-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-oracle-elementalist_oracle-elemental-form-su">Elemental Form (Su)</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability"><p>You gain the <Link to="/subtype/air">air</Link>, <Link to="/subtype/earth">earth</Link>, <Link to="/subtype/fire">fire</Link>, or <Link to="/subtype/water">water</Link> subtype and an associated ability:</p>
<ul>
<li><strong className="hl">Air:</strong> Fly speed of 30 feet with perfect maneuverability.</li>
<li><strong className="hl">Earth:</strong> <Link to="/umr/tremorsense">Tremorsense</Link> with a range of 30 feet.</li>
<li><strong className="hl">Fire:</strong> Immunity to fire and vulnerability to cold.</li>
<li><strong className="hl">Water:</strong> Swim speed of 30 feet and the ability to breathe underwater.</li>
</ul>
</Pair>
</Ability>
<Ability id="arc-oracle-elementalist_oracle-elemental-revelation-su" extraClasses="subAbility" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="arc-oracle-elementalist_oracle-elemental-revelation-su">Elemental Revelation (Su)</Pair>
<Pair hl title="Replaces">Final revelation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">You fully harness the power of the elements. You can apply the <Link to="/feat/elemental_spell">Elemental Spell</Link> metamagic feat to spells you cast without increasing the level or casting time. You can choose acid, cold, electricity, or fire each time you use this ability.</Pair>
<Pair title="Passive Ability">Whenever you score a critical hit with an attack that deals energy damage, you ignore the target's energy resistance (if any). If you score such a critical hit against a creature that has immunity to the energy type you are attacking with, the creature takes half damage from the attack.</Pair>
</Ability>
</>};
const _enlightened_philosopher = {title: "Enlightened Philosopher", jsx: <><h2 id="arc-oracle-enlightened_philosopher-enlightened-philosopher">Enlightened Philosopher</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 58</Link><br/>The enlightened philosopher seeks enlightenment through compassion, moderation, and humility. By following her philosophy's teachings, the enlightened philosopher seeks to reach enlightenment and become one with the universe.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-oracle-enlightened_philosopher--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Alignment must be lawful</td></tr></tbody></table></ScrollContainer></div><p><strong className="hl">Recommended Mysteries:</strong> <Link to="/mystery/ancestor">ancestor</Link>, <Link to="/mystery/flame">flame</Link>, <Link to="/mystery/heavens">heavens</Link>, <Link to="/mystery/lore">lore</Link>, <Link to="/mystery/metal">metal</Link>, <Link to="/mystery/nature">nature</Link>, <Link to="/mystery/stone">stone</Link>, <Link to="/mystery/time">time</Link>, <Link to="/mystery/waves">waves</Link>, <Link to="/mystery/wood">wood</Link>.</p>
<Ability icon={["skills"]} id="arc-oracle-enlightened_philosopher-undefined">
<Pair id="arc-oracle-enlightened_philosopher-undefined" single>Class Skills</Pair>
<Pair title="Replaces" hl>Bonus skills from the oracle's mystery</Pair>
<Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> (INT), <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT), <Link to="/skill/linguistics">Linguistics</Link> (INT)</Pair></Ability>
<Ability id="arc-oracle-enlightened_philosopher-bonus-spells" icon={["spell-book"]}>
<Pair single id="arc-oracle-enlightened_philosopher-bonus-spells">Bonus Spells</Pair>
<Pair hl title="Replaces">All bonus spells gained from the oracle's mystery after 2nd level</Pair>
<Pair title="Info">The oracle gains these bonus spells at the listed levels.</Pair>
<Pair plain title="4th"><Link to="/spell/owls_wisdom">Owl's wisdom</Link></Pair>
<Pair plain title="6th"><Link to="/spell/water_walk">Water walk</Link></Pair>
<Pair plain title="8th"><Link to="/spell/discern_lies">Discern lies</Link></Pair>
<Pair plain title="10th"><Link to="/spell/true_seeing">True seeing</Link></Pair>
<Pair plain title="12th"><Link to="/spell/wind_walk">Wind walk</Link></Pair>
<Pair plain title="14th"><Link to="/spell/ethereal_jaunt">Ethereal jaunt</Link></Pair>
<Pair plain title="16th"><Link to="/spell/moment_of_prescience">Moment of prescience</Link></Pair>
<Pair plain title="18th"><Link to="/spell/astral_projection">Astral projection</Link></Pair>
</Ability>
<Ability id="arc-oracle-enlightened_philosopher-revelations" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-oracle-enlightened_philosopher-revelations">Revelations</Pair>
<Pair title="At 7th Level">An enlightened philosopher must take the following revelation.</Pair>
</Ability>
<Ability id="arc-oracle-enlightened_philosopher-mental-acuity-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-oracle-enlightened_philosopher-mental-acuity-ex" flavor="Your explorations into the secret mysteries of the world have granted you a preternatural understanding of all things - and you just keep getting smarter.">Mental Acuity (Ex)</Pair>
<Pair title="Info">This is the same as the <Link to="/mystery/lore">lore</Link> mystery revelation of the same name.</Pair>
<Pair title="Passive Ability">You gain a +1 inherent bonus to Intelligence upon taking this revelation.</Pair>
<Pair title="At 10th Level">The bonus to Intelligence becomes +2.</Pair>
<Pair title="At 13th Level">The bonus to Intelligence increases to +3.</Pair>
<Pair title="At 16th Level">The bonus to Intelligence becomes +4.</Pair>
<Pair title="At 19th Level">The bonus to Intelligence increases to +5.</Pair>
</Ability>
<Ability id="arc-oracle-enlightened_philosopher-final-revelation" icon={["armor-upgrade","stairs-goal","magic-swirl"]}>
<Pair single id="arc-oracle-enlightened_philosopher-final-revelation" flavor="You achieve true enlightenment and become one with the universe.">Final Revelation</Pair>
<Pair hl title="Replaces">Final revelation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You receive a bonus on all saving throws equal to your Charisma modifier. You become immune to confusion, exhaustion, fatigue, nausea, and sickened effects.</Pair>
<Pair title="Ability">You can take 20 on all Knowledge skill checks.</Pair>
<Pair title="Special">Should you die, you are reborn 3 days later as a living example of the summoning of your chosen philosophy (treat as the <Link to="/spell/reincarnate">reincarnate</Link> spell).</Pair>
</Ability>
</>};
const _hermit = {title: "Hermit", jsx: <><h2 id="arc-oracle-hermit-hermit">Hermit</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 22</Link><br/>A hermit is a recluse who gained her oracular powers from isolation in a deep desert, on a mountain peak, or in another secluded location. A connection to untraveled places gives the hermit powers to evade his enemies.</p>
<Ability id="arc-oracle-hermit-mystery" icon={["broken-shield"]}>
<Pair single id="arc-oracle-hermit-mystery">Mystery</Pair>
<Pair title="Choice">A hermit must choose a mystery that adds Survival to his list of class skills: <Link to="/mystery/apocalypse">apocalypse</Link>, <Link to="/mystery/heavens">heavens</Link>&#42;, <Link to="/mystery/juju">juju</Link>, <Link to="/mystery/life">life</Link>&#42;, <Link to="/mystery/lunar">lunar</Link>, <Link to="/mystery/nature">nature</Link>&#42;, <Link to="/mystery/outer_rifts">outer rifts</Link>, <Link to="/mystery/reaper">reaper</Link>, <Link to="/mystery/solar">solar</Link>, <Link to="/mystery/spellscar">spellscar</Link>, <Link to="/mystery/stone">stone</Link>&#42;, <Link to="/mystery/succor">succor</Link>, <Link to="/mystery/volcano">volcano</Link>, <Link to="/mystery/winter">winter</Link>, or <Link to="/mystery/wood">wood</Link>.</Pair>
<Pair title="Info">Mysteries marked with an asterisk (&#42;) are recommended.</Pair>
</Ability>
<Ability id="arc-oracle-hermit-oracles-curse" icon={["info"]}>
<Pair single id="arc-oracle-hermit-oracles-curse">Oracle's Curse</Pair>
<Pair title="Info">A hermit must choose the <Link to="/oraclecurse/reclusive">reclusive</Link> curse at 1st level.</Pair>
</Ability>
<Ability id="arc-oracle-hermit-bonus-spells" icon={["spell-book"]}>
<Pair single id="arc-oracle-hermit-bonus-spells">Bonus Spells</Pair>
<Pair hl title="Replaces">The bonus spells gained at 4th, 8th, 12th, and 16th levels from the oracle's mystery</Pair>
<Pair title="Info">The oracle gains these bonus spells at the listed levels.</Pair>
<Pair plain title="4th"><Link to="/spell/blindness_deafness">Blindness/deafness</Link></Pair>
<Pair plain title="8th"><Link to="/spell/crushing_despair">Crushing despair</Link></Pair>
<Pair plain title="12th"><Link to="/spell/wall_of_force">Wall of force</Link></Pair>
<Pair plain title="16th"><Link to="/spell/maze">Maze</Link></Pair>
</Ability>
<Ability id="arc-oracle-hermit-revelations" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-oracle-hermit-revelations">Revelations</Pair>
<Pair title="Info">A hermit must take the following revelations at the listed levels.</Pair>
</Ability>
<Ability id="arc-oracle-hermit-recluses-stride-su" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade","magic-swirl"]}>
<Pair single id="arc-oracle-hermit-recluses-stride-su">Recluse's Stride (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Your base speed increases by 10 feet.</Pair>
<Pair title="At 5th Level">Once per round when leaving a square, you can treat the square as though it isn't threatened by any opponents that you can see.</Pair>
<Pair title="At 10th Level">You can teleport a distance equal to your base land speed (as per <Link to="/spell/dimension_door">dimension door</Link>) as a <strong className="hl">move action</strong>, provided that there are no other creatures within 10 feet of you when you use this ability and no other creatures within 10 feet of your destination. You can teleport a number of times per day equal to 3 + your Charisma modifier.</Pair>
</Ability>
<Ability id="arc-oracle-hermit-fade-from-memory-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-oracle-hermit-fade-from-memory-su">Fade from Memory (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Usage">1 time/day per oracle level</Pair>
<Pair title="Free Action">Whenever there are no creatures within 10 feet of you at the end of your turn, you gain 20% <Link to="/rule/concealment">concealment</Link> until the beginning of your next turn.</Pair>
<Pair title="At 14th Level">You instead gain 50% concealment until the beginning of your next turn.</Pair>
</Ability>
</>};
const _inerrant_voice = {title: "Inerrant Voice", jsx: <><h2 id="arc-oracle-inerrant_voice-inerrant-voice">Inerrant Voice</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court pg. 17</Link><br/>An inerrant voice serves as a spiritual advisor to either a monarch or noble. Most Qadiran nobles retain one's services, for both guidance and protection.</p>
<p><strong className="hl">Recommended Mysteries:</strong> <Link to="/mystery/ancestor">Ancestor</Link>, <Link to="/mystery/intrigue">intrigue</Link>, <Link to="/mystery/life">life</Link>, <Link to="/mystery/lore">lore</Link>.</p>
<Ability id="arc-oracle-inerrant_voice-bonus-spells" icon={["spell-book"]}>
<Pair single id="arc-oracle-inerrant_voice-bonus-spells">Bonus Spells</Pair>
<Pair hl title="Replaces">The bonus spells gained at 2nd, 4th, 8th, and 14th levels from the oracle's mystery</Pair>
<Pair title="Info">The oracle gains these bonus spells at the listed levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/shield_other">Shield other</Link></Pair>
<Pair plain title="4th"><Link to="/spell/augury">Augury</Link></Pair>
<Pair plain title="8th"><Link to="/spell/divination">Divination</Link></Pair>
<Pair plain title="14th"><Link to="/spell/vision">Vision</Link></Pair>
</Ability>
<Ability id="arc-oracle-inerrant_voice-revelations" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-oracle-inerrant_voice-revelations">Revelations</Pair>
<Pair title="At 3rd Level">An inerrant voice must take the following revelation.</Pair>
</Ability>
<Ability id="arc-oracle-inerrant_voice-vigilant-protector-su" extraClasses="subAbility" icon={["shield-reflect"]}>
<Pair single id="arc-oracle-inerrant_voice-vigilant-protector-su">Vigilant Protector (Su)</Pair>
<Pair title="Choice">Each day when you recover your spells, you can select a specific person you know other than yourself as your ward.</Pair>
<Pair title="Usage">1 time/day + 1 per four oracle levels beyond 3rd<ByLevelPop levels={[[3,1],[7,2],[11,3],[15,4],[19,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Immediate Action">When your ward becomes the target of an attack or spell and you are aware of the attack, you can cast an abjuration spell you know on the ally. You must expend the appropriate spell slot and be able to target the ally as normal for the spell.</Pair>
<Pair title="At 11th Level">As an <strong className="hl">immediate action</strong> when you know your ward is targeted, you can transpose yourself with your ward, teleporting into the original target's square (and becoming the new target of the attack or spell) while your ally is teleported into yours; this is a teleportation effect that doesn't provoke attacks of opportunity.</Pair>
</Ability>
</>};
const _keleshite_prophet = {title: "Keleshite Prophet", jsx: <><h2 id="arc-oracle-keleshite_prophet-keleshite-prophet">Keleshite Prophet</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 42</Link><br/>Keleshite prophets help guide and serve the vast Padishah Empire of Kelesh and its interests across Golarion.</p>
<p><strong className="hl">Recommended Mysteries:</strong> Any.</p>
<Ability icon={["skills"]} id="arc-oracle-keleshite_prophet-undefined">
<Pair id="arc-oracle-keleshite_prophet-undefined" single>Class Skills</Pair>
<Pair title="Replaces" hl>Bonus skills from the oracle's mystery</Pair>
<Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> (INT), <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT), <Link to="/skill/perception">Perception</Link> (WIS), <Link to="/skill/perform">Perform</Link> (CHA)</Pair></Ability>
<Ability id="arc-oracle-keleshite_prophet-bonus-spells" icon={["spell-book"]}>
<Pair single id="arc-oracle-keleshite_prophet-bonus-spells">Bonus Spells</Pair>
<Pair hl title="Replaces">The bonus spells gained at 6th, 10th, 12th, 16th, and 18th levels from the oracle's mystery</Pair>
<Pair title="Info">The oracle gains these bonus spells at the listed levels.</Pair>
<Pair plain title="6th"><Link to="/spell/clairaudience_clairvoyance">Clairaudience/clairvoyance</Link></Pair>
<Pair plain title="10th"><Link to="/spell/prying_eyes">Prying eyes</Link></Pair>
<Pair plain title="12th"><Link to="/spell/true_seeing">True seeing</Link></Pair>
<Pair plain title="16th"><Link to="/spell/prediction_of_failure">Prediction of failure</Link></Pair>
<Pair plain title="18th"><Link to="/spell/foresight">Foresight</Link></Pair>
</Ability>
<Ability id="arc-oracle-keleshite_prophet-revelations" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-oracle-keleshite_prophet-revelations">Revelations</Pair>
<Pair title="Info">A Keleshite prophet must take the following revelation at 1st level.</Pair>
</Ability>
<Ability id="arc-oracle-keleshite_prophet-divining-dance-su" extraClasses="subAbility" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-oracle-keleshite_prophet-divining-dance-su">Divining Dance (Su)</Pair>
<Pair title="Ability"><p>Once per day, you can perform a sacred meditative dance that gives you great clarity of mind and prepares you for what lies ahead. This dance must last for at least 1 minute, uninterrupted, and you can take no other actions during the dance.</p>
<p>When you dance, attempt a Perform (dance) check; the results of the check determine the benefits you gain for the next 24 hours, as listed below. You can always choose the benefit from a lower result, if you wish (for example, if your Perform [dance] result is 15, you can choose to gain a +1 bonus on your divinations' saving throws instead of choosing to use <em>augury</em> once as a spell-like ability).</p>
<ScrollContainer id="arc-oracle-keleshite_prophet--table-0"><table>
<thead>
<tr>
<th>Perform (dance) Result</th>
<th>Benefit</th>
</tr>
</thead>
<tbody><tr>
<td>0-9</td>
<td>Increase the saving throw DC of any divination spells you cast by 1.</td>
</tr>
<tr>
<td>10-19</td>
<td>Once in the next 24 hours, as an <strong className="hl">immediate action</strong>, you can use <Link to="/spell/augury">augury</Link> as a spell-like ability, using your oracle level as your caster level.</td>
</tr>
<tr>
<td>20-29</td>
<td>Once in the next 24 hours, you can use <Link to="/spell/divination">divination</Link> as a spell-like ability, using your oracle level as your caster level. If you are at least 8th level, you can cast it in 1 minute instead of 10 minutes.</td>
</tr>
<tr>
<td>30-39</td>
<td>Once in the next 24 hours, you can use <Link to="/spell/commune">commune</Link> as a spell-like ability, using your oracle level as your caster level. If you are at least 10th level, its casting time is in 1 minute instead of 10 minutes.</td>
</tr>
<tr>
<td>40+</td>
<td>Once in the next 24 hours, you can use <Link to="/spell/contact_other_plane">contact other plane</Link> as a spell-like ability, using your oracle level as your caster level.</td>
</tr>
</tbody></table></ScrollContainer>
</Pair>
</Ability>
</>};
const _oceans_echo = {title: "Ocean's Echo", jsx: <><h2 id="arc-oracle-oceans_echo-oceans-echo">Ocean's Echo</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_sea">Blood of the Sea pg. 12</Link><br/>Although many <Link to="/race/merfolk">merfolk</Link> claim deep connections to both art and the natural world, a rare few merfolk can manipulate the forces of nature and weave them into song. An ocean's echo is a merfolk gifted with the powers of an oracle and a singing voice that evokes the legendary tales of merfolk virtuosos.</p>
<Ability icon={["skills"]} id="arc-oracle-oceans_echo-undefined">
<Pair id="arc-oracle-oceans_echo-undefined" single>Class Skills</Pair>
<Pair title="Replaces" hl>Bonus skills from the oracle's mystery</Pair>
<Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/intimidate">Intimidate</Link> (CHA), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/perform">Perform</Link> (CHA)</Pair></Ability>
<Ability id="arc-oracle-oceans_echo-bonus-spells" icon={["spell-book"]}>
<Pair single id="arc-oracle-oceans_echo-bonus-spells">Bonus Spells</Pair>
<Pair hl title="Replaces">The bonus spells gained at 4th, 8th, 10th, 12th, and 14th levels from the oracle's mystery</Pair>
<Pair title="Info">The oracle gains these bonus spells at the listed levels.</Pair>
<Pair plain title="4th"><Link to="/spell/sound_burst">Sound burst</Link></Pair>
<Pair plain title="8th"><Link to="/spell/shout">Shout</Link></Pair>
<Pair plain title="10th"><Link to="/spell/song_of_discord">Song of discord</Link></Pair>
<Pair plain title="12th"><Link to="/spell/greater_shout">Greater shout</Link></Pair>
<Pair plain title="14th"><Link to="/spell/pied_piping">Pied piping</Link></Pair>
</Ability>
<Ability id="arc-oracle-oceans_echo-inspiring-song-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-oracle-oceans_echo-inspiring-song-ex" flavor="The voice of an ocean's echo provides inspiration to allies.">Inspiring Song (Ex)</Pair>
<Pair hl title="Replaces">Revelations gained at 1st, 3rd, and 15th level</Pair>
<Pair title="Usage">A number of rounds/day equal to her level + her Charisma modifier (minimum 1).</Pair>
<Pair title="Ability">This ability is identical to <Link to="/ability/bardic_performance">bardic performance</Link> (using Perform [sing] only), as a bard of the ocean's echo's level.</Pair>
<Pair title="At 1st Level">She can <Link to="/performance/inspire_courage">inspire courage</Link>.</Pair>
<Pair title="At 3rd Level">She can <Link to="/performance/inspire_competence">inspire competence</Link>.</Pair>
<Pair title="At 15th Level">She learns to <Link to="/performance/inspire_heroics">inspire heroics</Link>.</Pair>
</Ability>
<p><strong className="hl">Recommended Mysteries:</strong> <Link to="/mystery/ancestor">Ancestor</Link>, <Link to="/mystery/heavens">heavens</Link>, <Link to="/mystery/life">life</Link>, <Link to="/mystery/lore">lore</Link>, <Link to="/mystery/nature">nature</Link>, <Link to="/mystery/time">time</Link>, <Link to="/mystery/waves">waves</Link>, <Link to="/mystery/wind">wind</Link>.</p>
</>};
const _pei_zin_practitioner = {title: "Pei Zin Practitioner", jsx: <><h2 id="arc-oracle-pei_zin_practitioner-pei-zin-practitioner">Pei Zin Practitioner</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 20</Link><br/>In distant Tian Xia, herbalists practice an obscure alchemical art known as <Link to="/rule/pei_zin_herbalism">Pei Zin herbalism</Link>, which involves medicinal and restorative techniques that are used throughout much of that continent. A few practitioners develop a talent for Pei Zin that transcends ordinary alchemy, allowing them to blur the line between applying alchemical medicine and coaxing divine miracles.</p>
<p>Like other masters of the art, Pei Zin practitioners can use the <Link to="/skill/profession">Profession (herbalist)</Link> skill in place of Craft (alchemy) to create alchemical remedies with recipes that include certain plant-derived reagents.</p>
<Ability id="arc-oracle-pei_zin_practitioner-master-herbalist-su" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-oracle-pei_zin_practitioner-master-herbalist-su">Master Herbalist (Su)</Pair>
<Pair hl title="Replaces">Class skills gained from the oracle's mystery</Pair>
<Pair title="Passive Ability">A Pei Zin practitioner has mastered countless alchemical techniques that supplement her divine powers and greatly aid her when she heals the sick and wounded. She gains a competence bonus on Profession (herbalist) checks equal to 1/2 her oracle level (minimum 1), and uses her Charisma modifier in place of her Wisdom modifier when attempting Profession (herbalist) checks.</Pair>
<Pair title="Special">Additionally, a Pei Zin practitioner can identify potions as if via <Link to="/spell/detect_magic">detect magic</Link> using Profession (herbalist) instead of Spellcraft, and she can attempt such a check after holding a potion for 1 round.</Pair>
</Ability>
<Ability id="arc-oracle-pei_zin_practitioner-healers-way-su" icon={["heart-plus"]}>
<Pair single id="arc-oracle-pei_zin_practitioner-healers-way-su" flavor="A Pei Zin practitioner combines alchemy, acupuncture, and divine magic to heal wounds by touch.">Healer's Way (Su)</Pair>
<Pair hl title="Replaces">Revelation gained at 1st level</Pair>
<Pair title="Usage">1 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">With one use of this ability, she uses positive energy to heal the target of 1d6 hit points for every 2 oracle levels she has. Using this ability is a standard action unless the oracle targets herself, in which case it is a <strong className="hl">swift action</strong>. Using this ability requires only one free hand.</Pair>
<Pair title="Special">This ability counts as a paladin's <Link to="/ability/lay_on_hands">lay on hands</Link> ability for the purposes of feats, spells, and effects that work with that class feature when it is used for healing purposes. Unlike <em>lay on hands,</em> this ability cannot be used to harm undead.</Pair>
</Ability>
<Ability id="arc-oracle-pei_zin_practitioner-master-healing-technique-su" extraClasses="hasSubs" icon={["heart-plus"]}>
<Pair single id="arc-oracle-pei_zin_practitioner-master-healing-technique-su">Master Healing Technique (Su)</Pair>
<Pair hl title="Replaces">Revelation gained at 7th level</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Free Action">Whenever a Pei Zin practitioner heals a living creature with her <em>healer's way</em> ability, she can attempt a Profession (herbalist) check to remove a condition from the target, with each condition having an accompanying Profession (herbalist) DC (see the list below). She cannot take 10 or 20 on this check, nor can she receive aid from any creature except another Pei Zin practitioner (though the practitioner need not be an oracle).</Pair>
<Pair title="Special">Failure by 5 or more causes the target to become <Link to="/misc/sickened">sickened</Link> for 1 round (if the Pei Zin practitioner is attempting to remove the sickened condition, this extends it by 1 round). Similarly, failure by 10 or more instead causes the target to become <Link to="/misc/nauseated">nauseated</Link> for 1 round or to have its existing nauseated condition extended by 1 round. A creature that cannot be sickened or nauseated cannot have conditions removed by this ability.</Pair>
</Ability>
<Ability id="arc-oracle-pei_zin_practitioner-minor-conditions-dc-20" extraClasses="subAbility" icon={["heart-plus"]}>
<Pair single id="arc-oracle-pei_zin_practitioner-minor-conditions-dc-20">Minor Conditions (DC 20)</Pair>
<Pair title="Ability">She can remove the fatigued, shaken, and sickened conditions.</Pair>
</Ability>
<Ability id="arc-oracle-pei_zin_practitioner-major-conditions-dc-25" extraClasses="subAbility" icon={["heart-plus"]}>
<Pair single id="arc-oracle-pei_zin_practitioner-major-conditions-dc-25">Major Conditions (DC 25)</Pair>
<Pair title="Ability">She can remove the dazed and staggered conditions.</Pair>
</Ability>
<Ability id="arc-oracle-pei_zin_practitioner-severe-conditions-dc-30" extraClasses="subAbility" icon={["heart-plus"]}>
<Pair single id="arc-oracle-pei_zin_practitioner-severe-conditions-dc-30">Severe Conditions (DC 30)</Pair>
<Pair title="Ability">She can remove the confused, exhausted, frightened, and nauseated conditions.</Pair>
</Ability>
<Ability id="arc-oracle-pei_zin_practitioner-dire-conditions-dc-35" extraClasses="subAbility" icon={["heart-plus"]}>
<Pair single id="arc-oracle-pei_zin_practitioner-dire-conditions-dc-35">Dire Conditions (DC 35)</Pair>
<Pair title="Ability">She can remove the blinded, deafened, paralyzed, and stunned conditions.</Pair>
</Ability>
<p><strong className="hl">Recommended Mysteries:</strong> <Link to="/mystery/life">Life</Link>, <Link to="/mystery/nature">nature</Link>, <Link to="/mystery/succor">succor</Link>.</p>
</>};
const _planar_oracle = {title: "Planar Oracle", jsx: <><h2 id="arc-oracle-planar_oracle-planar-oracle">Planar Oracle</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 59</Link><br/>A planar oracle has an affinity with one of the Outer Planes. She is at home on the multiple planes of the Great Beyond, and can eventually become an outsider herself.</p>
<p><strong className="hl">Recommended Mysteries:</strong> <Link to="/mystery/dark_tapestry">dark tapestry</Link>, <Link to="/mystery/flame">flame</Link>, <Link to="/mystery/heavens">heavens</Link>, <Link to="/mystery/stone">stone</Link>, <Link to="/mystery/waves">waves</Link>, <Link to="/mystery/wind">wind</Link>.</p>
<Ability id="arc-oracle-planar_oracle-bonus-spells" icon={["spell-book"]}>
<Pair single id="arc-oracle-planar_oracle-bonus-spells">Bonus Spells</Pair>
<Pair hl title="Replaces">All  bonus spells from the oracle's mystery</Pair>
<Pair title="Info">The oracle gains these bonus spells at the listed levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/endure_elements">Endure elements</Link></Pair>
<Pair plain title="4th"><Link to="/spell/elemental_speech">Elemental speech</Link></Pair>
<Pair plain title="6th"><Link to="/spell/tongues">Tongues</Link></Pair>
<Pair plain title="8th"><Link to="/spell/planar_adaptation">Planar adaptation</Link></Pair>
<Pair plain title="10th"><Link to="/spell/plane_shift">Plane shift</Link></Pair>
<Pair plain title="12th"><Link to="/spell/mass_planar_adaptation">Mass planar adaptation</Link></Pair>
<Pair plain title="14th"><Link to="/spell/shadow_walk">Shadow walk</Link></Pair>
<Pair plain title="16th"><Link to="/spell/etherealness">Etherealness</Link></Pair>
<Pair plain title="18th"><Link to="/spell/gate">Gate</Link></Pair>
</Ability>
<Ability id="arc-oracle-planar_oracle-revelations" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-oracle-planar_oracle-revelations">Revelations</Pair>
<Pair hl title="Replaces">3rd-level revelation</Pair>
<Pair title="At 1st Level">You must choose one Outer Plane with which you have an affinity. This choice cannot be changed.</Pair>
<Pair title="At 3rd Level">A planar oracle must take the following revelation.</Pair>
</Ability>
<Ability id="arc-oracle-planar_oracle-planar-resistance-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-oracle-planar_oracle-planar-resistance-su">Planar Resistance (Su)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">You gain energy resistance 10 against one energy type associated with your chosen plane.</Pair>
<Pair title="At 11th Level">Your energy resistance increases to 20.</Pair>
</Ability>
<Ability id="arc-oracle-planar_oracle-final-revelation" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-oracle-planar_oracle-final-revelation">Final Revelation</Pair>
<Pair hl title="Replaces">Final revelation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">You become an extraplanar creature. Choose one outer plane, such as Heaven or the Abyss. You gain superficial physical characteristics as appropriate to natives of your chosen outer plane. For example, if your chosen plane is Heaven, you gain angelic features such as a halo and metallic skin. This change does not alter your Hit Dice, hit points, saving throws, skill points, class skills, or proficiencies. Your type changes to <Link to="/type/outsider">outsider</Link> (<Link to="/subtype/extraplanar">extraplanar</Link>), except on your associated plane, where your type is outsider (native).</Pair>
<Pair title="Passive Ability">In addition, you gain immunity to your associated energy type and gain damage reduction 10/magic. Unlike other outsiders, you can still be brought back from the dead as if you were a member of your previous creature type.</Pair>
</Ability>
</>};
const _possessed_oracle = {title: "Possessed Oracle", jsx: <><h2 id="arc-oracle-possessed_oracle-possessed-oracle">Possessed Oracle</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 59</Link><br/>Some oracles are possessed by spirits, demons, or similar beings. Instead of the possessed oracle drawing her powers from deities, these otherworldly forces work their magic through her.</p>
<p><strong className="hl">Recommended Mysteries:</strong> Any.</p>
<Ability id="arc-oracle-possessed_oracle-oracles-curse" icon={["info"]}>
<Pair single id="arc-oracle-possessed_oracle-oracles-curse">Oracle's Curse</Pair>
<Pair title="Info">A possessed oracle must choose the <Link to="/oraclecurse/haunted">haunted</Link>, <Link to="/oraclecurse/pranked">pranked</Link>, or <Link to="/oraclecurse/tongues">tongues</Link> curse at 1st level.</Pair>
</Ability>
<Ability id="arc-oracle-possessed_oracle-bonus-spells" icon={["spell-book"]}>
<Pair single id="arc-oracle-possessed_oracle-bonus-spells">Bonus Spells</Pair>
<Pair hl title="Replaces">The bonus spells gained at 1st,<sup><InnerLink showBacklink="backlink-arc-oracle-possessed_oracle-fake-fn-1" id="arc-oracle-possessed_oracle-fake-fn-1" data-hash-target to="arc-oracle-possessed_oracle-fake-fn-1-target">1</InnerLink></sup> 4th, 6th, 8th, 10th, 12th, and 16th levels from the oracle's mystery</Pair>
<Pair title="Info">The oracle gains these bonus spells at the listed levels.</Pair>
<Pair plain title="1st"><Link to="/spell/ventriloquism">Ventriloquism</Link> <sup><InnerLink showBacklink="backlink-arc-oracle-possessed_oracle-fake-fn-1.2" id="arc-oracle-possessed_oracle-fake-fn-1.2" data-hash-target to="arc-oracle-possessed_oracle-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair plain title="4th"><Link to="/spell/spider_climb">Spider climb</Link></Pair>
<Pair plain title="6th"><Link to="/spell/screech">Screech</Link></Pair>
<Pair plain title="8th"><Link to="/spell/sleepwalk">Sleepwalk</Link></Pair>
<Pair plain title="10th"><Link to="/spell/telekinesis">Telekinesis</Link></Pair>
<Pair plain title="12th"><Link to="/spell/animate_objects">Animate objects</Link></Pair>
<Pair plain title="16th"><Link to="/spell/divine_vessel">Divine vessel</Link></Pair>
</Ability>
<Ability id="arc-oracle-possessed_oracle-revelations" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-oracle-possessed_oracle-revelations">Revelations</Pair>
<Pair title="At 1st Level">A possessed oracle must take the following revelation.</Pair>
</Ability>
<Ability id="arc-oracle-possessed_oracle-two-minds-su" extraClasses="subAbility" icon={["armor-upgrade","rolling-dices"]}>
<Pair single id="arc-oracle-possessed_oracle-two-minds-su">Two Minds (Su)</Pair>
<Pair title="Passive Ability">You gain a +2 bonus on Will saves against enchantment spells or effects.</Pair>
<Pair title="At 7th Level">You may reroll a failed Will save once per day as an <strong className="hl">immediate action</strong>. You must take the second result, even if it is worse.</Pair>
</Ability>
<section data-footnotes><h3 id="arc-oracle-possessed_oracle-label">Footnotes</h3><ol>
<li id="arc-oracle-possessed_oracle-fake-fn-1-target"><p>No mysteries give spells at 1st level. This is likely supposed to be 2nd level, but no errata was ever published. Consult your GM. <InnerLink aria-label="Back to reference 1" id="backlink-arc-oracle-possessed_oracle-fake-fn-1" data-hash-target to="arc-oracle-possessed_oracle-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-arc-oracle-possessed_oracle-fake-fn-1.2" data-hash-target to="arc-oracle-possessed_oracle-fake-fn-1.2">↩<sup>2</sup></InnerLink></p></li>
</ol></section></>};
const _psychic_searcher = {title: "Psychic Searcher", jsx: <><h2 id="arc-oracle-psychic_searcher-psychic-searcher">Psychic Searcher</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 106</Link><br/>A psychic searcher is devoted to revealing the hidden within the world around her by sensing and communing with residual mental energy, haunts, and fragments of living spirits that can dwell in objects or rooms.</p>
<Ability id="arc-oracle-psychic_searcher-bonus-spells" icon={["spell-book"]}>
<Pair single id="arc-oracle-psychic_searcher-bonus-spells">Bonus Spells</Pair>
<Pair hl title="Replaces">The bonus spells gained at 4th, 6th, 8th, 12th, 16th, and 18th levels from the oracle's mystery</Pair>
<Pair title="Info">The oracle gains these bonus spells at the listed levels.</Pair>
<Pair plain title="4th"><Link to="/spell/augury">Augury</Link></Pair>
<Pair plain title="6th"><Link to="/spell/locate_object">Locate object</Link></Pair>
<Pair plain title="8th"><Link to="/spell/divination">Divination</Link></Pair>
<Pair plain title="12th"><Link to="/spell/find_the_path">Find the path</Link></Pair>
<Pair plain title="16th"><Link to="/spell/discern_location">Discern location</Link></Pair>
<Pair plain title="18th"><Link to="/spell/foresight">Foresight</Link></Pair>
</Ability>
<Ability id="arc-oracle-psychic_searcher-inspiration-ex" icon={["stairs-goal"]}>
<Pair single id="arc-oracle-psychic_searcher-inspiration-ex">Inspiration (Ex)</Pair>
<Pair hl title="Replaces">Mystery spell gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A psychic searcher gains an inspiration pool, as the <Link to="/class/investigator">investigator</Link> class ability. A psychic searcher uses her oracle level as her investigator level to determine the effects of this ability. She gains free uses of inspiration on Diplomacy, Knowledge (arcana, history, local, nobility, planes, religion), and Sense Motive skill checks without spending a use of inspiration, provided she's trained in that skill. A psychic searcher's inspiration pool refreshes each day, usually when she refreshes her spells. A psychic searcher's inspiration pool is based on her Charisma modifier, not her Intelligence modifier.</Pair>
</Ability>
<Ability id="arc-oracle-psychic_searcher-psychic-talent-su" icon={["stairs-goal"]}>
<Pair single id="arc-oracle-psychic_searcher-psychic-talent-su">Psychic Talent (Su)</Pair>
<Pair hl title="Replaces">Revelation gained at 3rd level</Pair>
<Pair hl title="Alters">Revelations gained after 3rd level</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A psychic searcher's mastery of her supernatural insight grows, granting her a new investigator talent from the following list: <Link to="/invtalent/amazing_inspiration">amazing inspiration</Link>, <Link to="/invtalent/eidetic_recollection">eidetic recollection</Link>, <Link to="/invtalent/empathy">empathy</Link>, <Link to="/invtalent/inspired_alertness">inspired alertness</Link>, <Link to="/invtalent/item_lore">item lore</Link>, <Link to="/invtalent/perceptive_tracking">perceptive tracking</Link> (except using Sense Motive instead of Perception or Survival), <Link to="/invtalent/rogue_talent">rogue talent</Link> (only for <Link to="/talent/hard_to_fool">hard to fool</Link>), and <Link to="/invtalent/tenacious_inspiration">tenacious inspiration</Link>.</Pair>
<Pair title="Special">Whenever a psychic searcher can select a new revelation, she can instead select an investigator or rogue talent from the above list.</Pair>
</Ability>
<p><strong className="hl">Recommended Mysteries:</strong> <Link to="/mystery/ancestor">Ancestor</Link>, <Link to="/mystery/lore">lore</Link>, <Link to="/mystery/nature">nature</Link>.</p>
</>};
const _purifier = {title: "Purifier", jsx: <><h2 id="arc-oracle-purifier-purifier">Purifier</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 86</Link><br/>The purifier seeks out signs of possession or mind control that manifest from unwilling (and often unwitting) servants for fiendish corruptors and their mortal minions. A purifier seeks liberation of mind, body, and spirit from the bondage of sin and the taint of the unholy. A purifier gains the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-oracle-purifier--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/aasimar">Aasimar</Link></td></tr></tbody></table></ScrollContainer></div><p><strong className="hl">Recommended Mysteries:</strong> <Link to="/mystery/ancestor">ancestor</Link>, <Link to="/mystery/battle">battle</Link>, <Link to="/mystery/heavens">heavens</Link>, <Link to="/mystery/lore">lore</Link>.</p>
<Ability id="arc-oracle-purifier-bonus-spells" icon={["spell-book"]}>
<Pair single id="arc-oracle-purifier-bonus-spells">Bonus Spells</Pair>
<Pair hl title="Replaces">All bonus spells from the oracle's mystery</Pair>
<Pair title="Info">The oracle gains these bonus spells at the listed levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/veil_of_heaven">Veil of heaven</Link></Pair>
<Pair plain title="4th"><Link to="/spell/confess">Confess</Link></Pair>
<Pair plain title="6th"><Link to="/spell/cast_out">Cast out</Link></Pair>
<Pair plain title="8th"><Link to="/spell/denounce">Denounce</Link></Pair>
<Pair plain title="10th"><Link to="/spell/dispel_evil">Dispel evil</Link></Pair>
<Pair plain title="12th"><Link to="/spell/banishment">Banishment</Link></Pair>
<Pair plain title="14th"><Link to="/spell/holy_word">Holy word</Link></Pair>
<Pair plain title="16th"><Link to="/spell/mind_blank">Mind blank</Link></Pair>
<Pair plain title="18th"><Link to="/spell/freedom">Freedom</Link></Pair>
</Ability>
<Ability id="arc-oracle-purifier-diminished-spellcasting" icon={["broken-shield"]}>
<Pair single id="arc-oracle-purifier-diminished-spellcasting">Diminished Spellcasting</Pair>
<Pair title="Info">A purifier can use one fewer spell per day of each level and does not automatically learn cure or inflict spells. Her number of oracle spells known is unchanged.</Pair>
</Ability>
<Ability id="arc-oracle-purifier-revelations" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-oracle-purifier-revelations">Revelations</Pair>
<Pair hl title="Replaces">Revelations from her mystery gained at 3rd, 7th, and 11th levels</Pair>
<Pair title="Info">A purifier must take the following revelations at the listed levels.</Pair>
</Ability>
<Ability id="arc-oracle-purifier-see-sin-sp" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-oracle-purifier-see-sin-sp">See Sin (Sp)</Pair>
<Pair title="At 3rd Level">A purifier gains a bonus equal to 1/2 her oracle level on Sense Motive checks to sense enchantments, which she can make as a <strong className="hl">full-round action</strong>. She also gains a bonus equal to 1/2 her oracle level on Spellcraft checks to identify enchantment school spells and spells with the curse or emotion descriptor.</Pair>
</Ability>
<Ability id="arc-oracle-purifier-celestial-armor-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-oracle-purifier-celestial-armor-su">Celestial Armor (Su)</Pair>
<Pair title="At 7th Level">A purifier's armor takes on a golden or silvery sheen and becomes light as a feather. Her armor weighs half as much as long as she wears it, and she also gains <em>armor training</em> as a <Link to="/class/fighter">fighter</Link> 4 levels lower than her oracle level.</Pair>
<Pair title="At 11th Level">A purifier gains <Link to="/feat/heavy_armor_proficiency">heavy armor proficiency</Link>.</Pair>
</Ability>
<Ability id="arc-oracle-purifier-sin-eater-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-oracle-purifier-sin-eater-su">Sin Eater (Su)</Pair>
<Pair title="At 11th Level">A purifier can consume a curse, enchantment, or emotion effect by touch as a <strong className="hl">full-round action</strong>. She must make a Charisma check with a bonus equal to her oracle level against a DC of 11 + the caster level of the effect (or the Hit Dice of the creator for a supernatural effect). If the check succeeds, the effect is negated; however, the purifier is <Link to="/misc/sickened">sickened</Link> for 1d4 rounds.</Pair>
<Pair title="Usage">Charisma modifier times/day</Pair>
<Pair title="Special">If the target is possessed (such as by a <Link to="/spell/magic_jar">magic jar</Link> effect or a <Link to="/template/ghost">ghost's</Link> malevolence ability), the possessor is forced out on a successful check. Whether the check succeeds or fails, the possessor is sickened for 2d4 rounds.</Pair>
</Ability>
<Ability id="arc-oracle-purifier-sacred-scourge-su" icon={["abstract-091"]}>
<Pair single id="arc-oracle-purifier-sacred-scourge-su">Sacred Scourge (Su)</Pair>
<Pair title="At 5th Level">A purifier may channel holy power to harm evil outsiders as a cleric of her level using the <Link to="/feat/alignment_channel">Alignment Channel</Link> feat.</Pair>
<Pair title="Usage">1 + Charisma modifier times/day</Pair>
</Ability>
<Ability id="arc-oracle-purifier-holy-terror-su" icon={["upgrade"]}>
<Pair single id="arc-oracle-purifier-holy-terror-su">Holy Terror (Su)</Pair>
<Pair title="At 9th Level">A purifier may use her <em>sacred scourge</em> to panic evil outsiders as if using the <Link to="/feat/turn_undead">Turn Undead</Link> feat against undead.</Pair>
</Ability>
<Ability id="arc-oracle-purifier-celestial-master-su" icon={["upgrade"]}>
<Pair single id="arc-oracle-purifier-celestial-master-su">Celestial Master (Su)</Pair>
<Pair title="At 13th Level">A purifier may use her <em>sacred scourge</em> to compel good outsiders to serve her, as if using the <Link to="/feat/command_undead">Command Undead</Link> feat against undead.</Pair>
</Ability>
</>};
const _reincarnated_oracle = {title: "Reincarnated Oracle", jsx: <><h2 id="arc-oracle-reincarnated_oracle-reincarnated-oracle">Reincarnated Oracle</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 199</Link><br/>A reincarnated oracle draws her knowledge and power from the experiences of her previous lives. Her memories guide her through a spiritual ascension leading the way to her ultimate incarnation. A reincarnated oracle has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-oracle-reincarnated_oracle--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/samsaran">Samsaran</Link></td></tr></tbody></table></ScrollContainer></div><p><strong className="hl">Recommended Mysteries:</strong> <Link to="/mystery/ancestor">ancestor</Link>, <Link to="/mystery/lore">lore</Link>, <Link to="/mystery/time">time</Link>.</p>
<Ability id="arc-oracle-reincarnated_oracle-oracles-curse" icon={["info"]}>
<Pair single id="arc-oracle-reincarnated_oracle-oracles-curse">Oracle's Curse</Pair>
<Pair title="At 1st Level">A reincarnated oracle must choose the <Link to="/oraclecurse/haunted">haunted</Link> or <Link to="/oraclecurse/tongues">tongues</Link> curse.</Pair>
</Ability>
<Ability id="arc-oracle-reincarnated_oracle-bonus-spells" icon={["spell-book"]}>
<Pair single id="arc-oracle-reincarnated_oracle-bonus-spells">Bonus Spells</Pair>
<Pair hl title="Replaces">The bonus spells gained at 2nd, 4th, 10th, 16th, and 18th levels from the oracle's mystery</Pair>
<Pair title="Info">The oracle gains these bonus spells at the listed levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/see_alignment">See alignment</Link></Pair>
<Pair plain title="4th"><Link to="/spell/detect_thoughts">Detect thoughts</Link></Pair>
<Pair plain title="10th"><Link to="/spell/contact_other_plane">Contact other plane</Link></Pair>
<Pair plain title="16th"><Link to="/spell/moment_of_prescience">Moment of prescience</Link></Pair>
<Pair plain title="18th"><Link to="/spell/overwhelming_presence">Overwhelming presence</Link></Pair>
</Ability>
<Ability id="arc-oracle-reincarnated_oracle-revelations" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-oracle-reincarnated_oracle-revelations">Revelations</Pair>
<Pair title="Info">A reincarnated oracle must take the following revelations at one of the listed levels.</Pair>
</Ability>
<Ability id="arc-oracle-reincarnated_oracle-location-memories-su" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-oracle-reincarnated_oracle-location-memories-su">Location Memories (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Swift Action">You may search your past lives for memories of or insight about your current location. This grants you the <Link to="/umr/scent">scent</Link> ability, low-light vision, and a +2 insight bonus on Perception and Survival checks for 1 minute.</Pair>
<Pair title="Special">You must take this revelation at 1st level or 3rd level.</Pair>
</Ability>
<Ability id="arc-oracle-reincarnated_oracle-spirit-memories-su" extraClasses="subAbility" icon={["smoking-finger","armor-downgrade"]}>
<Pair single id="arc-oracle-reincarnated_oracle-spirit-memories-su">Spirit Memories (Su)</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Ability">Once per day, you call upon the unfulfilled desires and goals of your past lives and project their frustration and despair through your eyes at a target. This is a <Link to="/umr/gaze">gaze</Link> attack affecting one creature. The target must make a Will save (DC 10 + 1/2 your oracle level + your Charisma modifier) or be <Link to="/misc/sickened">sickened</Link> and <Link to="/misc/staggered">staggered</Link> for 1 round. This is a mind-affecting compulsion effect.</Pair>
<Pair title="Special">You must take this revelation at 1st, 3rd, or 7th level.</Pair>
</Ability>
</>};
const _river_soul = {title: "River Soul", jsx: <><h2 id="arc-oracle-river_soul-river-soul">River Soul</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 68</Link><br/>River soul oracles derive their powers from their bonds with rivers, whether these waterways are rapid cascades or lazy channels plied by boats. The powerful bond formed with a river is also the river soul oracle's curse, as he must always carry water from the river with him, and his fate is bound to it. River soul oracles can be gentle and still when calm, but they're raging torrents when angered.</p>
<Ability icon={["skills"]} id="arc-oracle-river_soul-undefined">
<Pair id="arc-oracle-river_soul-undefined" single>Class Skills</Pair>
<Pair title="Replaces" hl>Bonus skills from the oracle's mystery</Pair>
<Pair title="New Class Skills"><Link to="/skill/escape_artist">Escape Artist</Link> (DEX), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS), <Link to="/skill/swim">Swim</Link> (STR)</Pair></Ability>
<p><strong className="hl">Recommended Mysteries:</strong> <Link to="/mystery/life">Life</Link>, <Link to="/mystery/nature">nature</Link>, <Link to="/mystery/stone">stone</Link>, <Link to="/mystery/waves">waves</Link>.</p>
<Ability id="arc-oracle-river_soul-bonus-spells" icon={["spell-book"]}>
<Pair single id="arc-oracle-river_soul-bonus-spells">Bonus Spells</Pair>
<Pair hl title="Replaces">The bonus spells gained at 2nd, 6th, 8th, 10th, and 18th levels from the oracle's mystery</Pair>
<Pair title="Info">The oracle gains these bonus spells at the listed levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/hydraulic_push">Hydraulic push</Link></Pair>
<Pair plain title="6th"><Link to="/spell/hydraulic_torrent">Hydraulic torrent</Link></Pair>
<Pair plain title="8th"><Link to="/spell/control_water">Control water</Link></Pair>
<Pair plain title="10th"><Link to="/spell/cone_of_cold">Cone of cold</Link></Pair>
<Pair plain title="18th"><Link to="/spell/world_wave">World wave</Link></Pair>
</Ability>
<Ability id="arc-oracle-river_soul-river-bound-curse-su" icon={["info","hazard-sign"]}>
<Pair single id="arc-oracle-river_soul-river-bound-curse-su">River Bound Curse (Su)</Pair>
<Pair hl title="Replaces">Oracle's curse</Pair>
<Pair title="Info">You bind your power to one particular river, which is the source of your spells and class abilities. You must carry a small vessel containing water from the river you are bound to at all times. If the vessel is destroyed or travels more than 10 feet away from you, you are unable to cast oracle spells or use your supernatural or spell-like class abilities until you recover the vessel or fill a new one with water from the river to which you are bound.</Pair>
<Pair title="Ability">Once per month, you can bond with a different river in a ceremony at that river that takes 12 hours to complete. You lose your bond with the previous river in the process.</Pair>
</Ability>
<Ability id="arc-oracle-river_soul-revelations" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-oracle-river_soul-revelations">Revelations</Pair>
<Pair hl title="Replaces">Revelations gained at 1st and 11th levels</Pair>
<Pair title="Info">A river soul oracle must take the following revelations at the listed levels.</Pair>
</Ability>
<Ability id="arc-oracle-river_soul-river-flow-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-oracle-river_soul-river-flow-su">River Flow (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">1 + Charisma modifier times/day (minimum 1); these times need not be consecutive</Pair>
<Pair title="Free Action">While you are underwater, you can negate the <Link to="/rule/underwater_combat">penalties you take</Link> for making bludgeoning, piercing, and slashing melee attacks underwater.</Pair>
</Ability>
<Ability id="arc-oracle-river_soul-river-form-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-oracle-river_soul-river-form-su" flavor="You can become one with a river.">River Form (Su)</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Usage">3 + Charisma modifier hours/day</Pair>
<Pair title="Standard Action">Once a day, while immersed in a river, you can completely merge with it. Your body and all your gear meld into the water, as per <Link to="/spell/meld_into_stone">meld into stone</Link>, except abilities that control or shape water expel you and deal you 5d6 damage rather than abilities that control or shape stone. You travel along with the river at the rate it is currently moving.</Pair>
<Pair title="Special">Transforming back to your normal form is a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-oracle-river_soul-river-soul-revelation-su" icon={["armor-upgrade","magic-swirl"]}>
<Pair single id="arc-oracle-river_soul-river-soul-revelation-su" flavor="You strengthen your ties to the river with which you bonded.">River Soul Revelation (Su)</Pair>
<Pair hl title="Replaces">Final revelation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">While traveling on or immersed in the river, you gain <Link to="/umr/fast_healing">fast healing</Link> 10 and immunity to bleed, death attacks, exhaustion, fatigue, nausea effects, negative levels, and sickened effects.</Pair>
<Pair title="Special">If you are slain and your body or some part of your body (including your ashes, if applicable) is floated down the river in a specially prepared vessel costing 5,000 gp, you return to life as per <Link to="/spell/resurrection">resurrection</Link> once you reach the mouth of the river, as long as the trip has taken 24 hours or longer.</Pair>
</Ability>
</>};
const _seeker = {title: "Seeker", jsx: <><h2 id="arc-oracle-seeker-seeker">Seeker</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_society_field_guide">Pathfinder Society Field Guide pg. 29</Link><br/>Oracles and sorcerers gain their magical powers through strange and mysterious ways, be they chosen by fate or blood. While most might be content with their strange powers, some oracles and sorcerers join the Pathfinders specifically to find out more about their mysteries and bloodlines and determine the genesis and history of their eldritch talents. These spellcasters are known among the Spells as seekers, after their obsession with researching ancient texts and obscure ruins for any clues they can find about their heritage and histories. A seeker has the following class features.</p>
<Ability icon={["skills"]} id="arc-oracle-seeker-undefined">
<Pair id="arc-oracle-seeker-undefined" single>Class Skills</Pair>
<Pair title="Replaces" hl>Bonus skills from the oracle's mystery</Pair>
<Pair title="New Class Skills"><Link to="/skill/disable_device">Disable Device</Link> (DEX)</Pair></Ability>
<Ability id="arc-oracle-seeker-tinkering-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-oracle-seeker-tinkering-ex" flavor="Seekers often look to ancient devices, old tomes, and strange magical items in order to learn more about their oracle mysteries.">Tinkering (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A seeker adds half his oracle level on Perception checks made to locate traps and on all Disable Device skill checks (minimum +1).</Pair>
<Pair title="Ability">A seeker can use Disable Device to disarm magical traps. If the seeker also possesses levels in <Link to="/class/rogue">rogue</Link> or another class that provides the <Link to="/ability/trapfinding">trapfinding</Link> ability, those levels stack with his oracle levels for determining his overall bonus on these skill checks.</Pair>
</Ability>
<Ability id="arc-oracle-seeker-seeker-lore-ex" icon={["upgrade"]}>
<Pair single id="arc-oracle-seeker-seeker-lore-ex" flavor="A seeker has already learned much about his mystery, and is more comfortable using the bonus spells gained by that mystery.">Seeker Lore (Ex)</Pair>
<Pair hl title="Replaces">Revelation gained at 3rd level</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">He gains a +4 bonus on all <Link to="/rule/concentration">concentration</Link> checks, on caster level checks made to overcome spell resistance, and on all Knowledge (arcana) and Spellcraft checks made on topics associated with his bonus spells.</Pair>
</Ability>
<Ability id="arc-oracle-seeker-seeker-magic-su" icon={["magic-swirl","upgrade"]}>
<Pair single id="arc-oracle-seeker-seeker-magic-su">Seeker Magic (Su)</Pair>
<Pair hl title="Replaces">Revelation gained at 15th level</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">A seeker becomes skilled at modifying his mystery spells with metamagic. When a seeker applies a metamagic feat to any bonus spells granted by his mystery, he reduces the metamagic feat's spell level adjustment by 1. Thus, applying a Metamagic feat like <Link to="/feat/still_spell">Still Spell</Link> to a spell does not change its effective spell level at all, while applying <Link to="/feat/quicken_spell">Quicken Spell</Link> only increases the spell's effective spell level by 3 instead of by 4.</Pair>
<Pair title="Special">This reduction to the spell level adjustment for Metamagic feats does not stack with similar reductions from other abilities.</Pair>
</Ability>
</>};
const _seer = {title: "Seer", jsx: <><h2 id="arc-oracle-seer-seer">Seer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 59</Link><br/>While all oracles possess some ability at divination, the seer is a true prophet, able to see things as they really are, or will be.</p>
<p><strong className="hl">Recommended Mysteries:</strong> <Link to="/mystery/lore">lore</Link>, <Link to="/mystery/nature">nature</Link>, <Link to="/mystery/time">time</Link>.</p>
<Ability id="arc-oracle-seer-bonus-spells" icon={["spell-book"]}>
<Pair single id="arc-oracle-seer-bonus-spells">Bonus Spells</Pair>
<Pair hl title="Replaces">Bonus spells granted by the oracle's mystery after 2nd level</Pair>
<Pair title="Info">The oracle gains these bonus spells at the listed levels.</Pair>
<Pair plain title="4th"><Link to="/spell/detect_thoughts">Detect thoughts</Link></Pair>
<Pair plain title="6th"><Link to="/spell/clairaudience_clairvoyance">Clairaudience/clairvoyance</Link></Pair>
<Pair plain title="8th"><Link to="/spell/scrying">Scrying</Link></Pair>
<Pair plain title="10th"><Link to="/spell/true_seeing">True seeing</Link></Pair>
<Pair plain title="12th"><Link to="/spell/legend_lore">Legend lore</Link></Pair>
<Pair plain title="14th"><Link to="/spell/greater_scrying">Greater scrying</Link></Pair>
<Pair plain title="16th"><Link to="/spell/vision">Vision</Link></Pair>
<Pair plain title="18th"><Link to="/spell/foresight">Foresight</Link></Pair>
</Ability>
<Ability id="arc-oracle-seer-revelations" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-oracle-seer-revelations">Revelations</Pair>
<Pair title="Info">A seer must take the following revelations at the listed levels.</Pair>
</Ability>
<Ability id="arc-oracle-seer-natural-divination-ex" extraClasses="subAbility" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-oracle-seer-natural-divination-ex">Natural Divination (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Info">This is the same as the <Link to="/mystery/nature">nature</Link> mystery revelation of the same name.</Pair>
<Pair title="Ability">You can read the entrails of a freshly killed animal or humanoid to gain an insight bonus equal to your Charisma modifier on one saving throw.</Pair>
<Pair title="Ability">Alternatively, by observing and interpreting the flights of birds, you may apply a +10 competence bonus on any one skill check.</Pair>
<Pair title="Ability">Finally, by charting marks in dirt or stone, or observing the behavior of sand when thrown into the wind, you gain a +4 insight bonus on one initiative check.</Pair>
<Pair title="Usage">Making a natural divination takes 10 minutes. You may use natural divination (in any combination) once per day plus a number of additional times per day equal to <Link to="/misc/one_fourth">one-fourth</Link> of your oracle level.</Pair>
<Pair title="Special">These bonuses must be used during the next 24 hours and you must declare you are using the bonus before the check or save is made.</Pair>
</Ability>
<Ability id="arc-oracle-seer-gift-of-prophecy-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-oracle-seer-gift-of-prophecy-su">Gift of Prophecy (Su)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">Once per day, you can enter a trance to gain a glimpse of the future. This trance lasts for 1 minute, which must be uninterrupted and during which you can take no other actions. You gain the benefits of an <Link to="/spell/augury">augury</Link> spell with 90% effectiveness.</Pair>
<Pair title="At 5th Level">You gain the benefits of a <Link to="/spell/divination">divination</Link> spell with 90% effectiveness.</Pair>
<Pair title="At 9th Level">The knowledge you gain is equivalent to a <Link to="/spell/commune">commune</Link> spell.</Pair>
<Pair title="Special">None of these spell effects require material components.</Pair>
</Ability>
</>};
const _shigenjo = {title: "Shigenjo", jsx: <><h2 id="arc-oracle-shigenjo-shigenjo">Shigenjo</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 164</Link><br/>The shigenjo walks the path of enlightenment and transcendence by seeking oneness with the celestial spirits. In doing so, she unlocks the martial potential of her own spiritual power. A shigenjo has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-oracle-shigenjo--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><ul><li><Link to="/race/tengu">Tengu</Link></li><li>Alignment must have a neutral component</li></ul></td></tr></tbody></table></ScrollContainer></div><Ability icon={["skills"]} id="arc-oracle-shigenjo-undefined">
<Pair id="arc-oracle-shigenjo-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/survival">Survival</Link> (WIS)</Pair>
<Pair title="Removed Skills">Diplomacy</Pair></Ability>
<p><strong className="hl">Recommended Mysteries:</strong> <Link to="/mystery/ancestor">ancestor</Link>, <Link to="/mystery/battle">battle</Link>, <Link to="/mystery/flame">flame</Link>, <Link to="/mystery/heavens">heavens</Link>, <Link to="/mystery/lore">lore</Link>, <Link to="/mystery/metal">metal</Link>, <Link to="/mystery/nature">nature</Link>, <Link to="/mystery/stone">stone</Link>, <Link to="/mystery/time">time</Link>, <Link to="/mystery/waves">waves</Link>, <Link to="/mystery/wood">wood</Link>.</p>
<Ability id="arc-oracle-shigenjo-bonus-spells" icon={["spell-book"]}>
<Pair single id="arc-oracle-shigenjo-bonus-spells">Bonus Spells</Pair>
<Pair hl title="Replaces">The bonus spells gained at 2nd, 4th, 8th, 12th, 14th, and 16th levels from the oracle's mystery</Pair>
<Pair title="Info">The oracle gains these bonus spells at the listed levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/true_strike">True strike</Link></Pair>
<Pair plain title="4th"><Link to="/spell/alter_self">Alter self</Link></Pair>
<Pair plain title="8th"><Link to="/spell/divine_power">Divine power</Link></Pair>
<Pair plain title="12th"><Link to="/spell/magic_jar">Magic jar</Link></Pair>
<Pair plain title="14th"><Link to="/spell/ki_shout">Ki shout</Link></Pair>
<Pair plain title="16th"><Link to="/spell/moment_of_prescience">Moment of prescience</Link></Pair>
</Ability>
<Ability id="arc-oracle-shigenjo-ki-pool-su" icon={["magic-swirl"]}>
<Pair single id="arc-oracle-shigenjo-ki-pool-su">Ki Pool (Su)</Pair>
<Pair hl title="Replaces">7th-level revelation</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A shigenjo gains a pool of ki points, supernatural energy she can use to accomplish amazing feats. The number of points in the shigenjo's <em>ki pool</em> is equal to <Link to="/misc/one_third">one-third</Link> of her oracle level + her Charisma modifier. The <em>ki pool</em> is replenished each morning after 8 hours of rest or meditation; these hours do not need to be consecutive.</Pair>
<Pair title="Info">If the shigenjo possesses levels in another class that grants points to a <em>ki pool,</em> ki points gained from the shigenjo class stack with those gained from the other class to determine the total number of ki points in the combined <em>pool,</em> but only one ability score modifier is added to the total. The choice of which score to use is made when the second class ability is gained, and once made, the choice is permanent.</Pair>
<Pair title="Special">The shigenjo can use ki points from this <em>pool</em> to power the abilities of every class she possesses that grants a <em>ki pool.</em></Pair>
</Ability>
<Ability id="arc-oracle-shigenjo-ki-abilities" extraClasses="hasSubs" icon={["mailed-fist","stairs-goal"]}>
<Pair single id="arc-oracle-shigenjo-ki-abilities">Ki Abilities</Pair>
<Pair title="Ability">As long as she has at least 1 point in her <em>ki pool,</em> a shigenjo can make a <em>ki strike</em> as an <Link to="/class/unchained_monk">unchained monk</Link> whose level is equal to her oracle level - 3.</Pair>
<Pair title="Swift Action">She may spend 1 point of ki to gain one of the following benefits.</Pair>
</Ability>
<Ability id="arc-oracle-shigenjo-ki-magic" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-oracle-shigenjo-ki-magic">Ki Magic</Pair>
<Pair title="Passive Ability">Add +1 to the DC of the next spell she casts on her turn.</Pair>
</Ability>
<Ability id="arc-oracle-shigenjo-ki-curse" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-oracle-shigenjo-ki-curse">Ki Curse</Pair>
<Pair title="Passive Ability">Treat her oracle level as 5 higher for the purpose of determining the effects of her <em>curse</em> for the next round.</Pair>
</Ability>
<Ability id="arc-oracle-shigenjo-ki-insight" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-oracle-shigenjo-ki-insight">Ki Insight</Pair>
<Pair title="Passive Ability">Gain a +4 insight bonus on Spellcraft checks for 1 round.</Pair>
</Ability>
<Ability id="arc-oracle-shigenjo-quivering-palm-su" icon={["stairs-goal"]}>
<Pair single id="arc-oracle-shigenjo-quivering-palm-su">Quivering Palm (Su)</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">A shigenjo may learn quivering palm as the <Link to="/class/monk">monk</Link> ability of the same name in place of a revelation. She treats her oracle level as her monk level for this ability, and the DC is based on her Charisma bonus instead of her Wisdom bonus.</Pair>
</Ability>
<Ability id="arc-oracle-shigenjo-final-revelation" icon={["stairs-goal","armor-upgrade","magic-swirl"]}>
<Pair single id="arc-oracle-shigenjo-final-revelation" flavor="You achieve true enlightenment and becomes one with the celestial spirits.">Final Revelation</Pair>
<Pair hl title="Replaces">Final revelation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">You gain the ability to speak with any creature that uses a language. For a number of days equal to your Wisdom score, you can ignore the negative effects of extreme weather, starvation, thirst, and exhaustion. If you die, your powerful connection to the celestial realm allows you to be reborn 3 days later (as <Link to="/spell/reincarnate">reincarnate</Link>).</Pair>
</Ability>
</>};
const _spirit_guide = {title: "Spirit Guide", jsx: <><h2 id="arc-oracle-spirit_guide-spirit-guide">Spirit Guide</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 106</Link><br/>Through her exploration of the universe's mysteries, a spirit guide opens connections to the spirit world and forms bonds with the entities that inhabit it.</p>
<Ability icon={["skills"]} id="arc-oracle-spirit_guide-undefined">
<Pair id="arc-oracle-spirit_guide-undefined" single>Class Skills</Pair>
<Pair title="Replaces" hl>Bonus skills from the oracle's mystery</Pair>
<Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> (INT), <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT)</Pair></Ability>
<Ability id="arc-oracle-spirit_guide-bonded-spirit-su" icon={["magic-swirl"]}>
<Pair single id="arc-oracle-spirit_guide-bonded-spirit-su">Bonded Spirit (Su)</Pair>
<Pair hl title="Replaces">Revelations gained at 3rd, 7th, and 15th levels</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A spirit guide can form a temporary bond with a spirit, as the <Link to="/class/shaman">shaman's</Link> <em>wandering spirit</em> class feature. She must make this selection each day when she refreshes her spells. A spirit guide cannot bond with a <Link to="/ability/shaman_spirits">spirit</Link> that is incompatible with her alignment, ethos, or mystery (GM's discretion).</Pair>
<Pair title="Ability">A spirit guide gains one hex of her choice from the list of hexes available from that spirit. She uses her oracle level as her shaman level, and she switches Wisdom for Charisma and vice versa for the purpose of determining the hex's effects.</Pair>
<Pair title="At 4th Level">She adds the bonded spirit's <em>spirit magic</em> spells to her oracle spells known for that day, but only of spell levels she can cast.</Pair>
<Pair title="At 7th Level">She gains the <em>spirit ability</em> of her current bonded spirit.</Pair>
<Pair title="At 15th Level">She gains the <em>greater spirit ability</em> of her current bonded spirit.</Pair>
</Ability>
<p><strong className="hl">Recommended Mysteries:</strong> <Link to="/mystery/ancestor">Ancestor</Link>, <Link to="/mystery/heavens">heavens</Link>, <Link to="/mystery/lore">lore</Link>.</p>
</>};
const _stargazer = {title: "Stargazer", jsx: <><h2 id="arc-oracle-stargazer-stargazer">Stargazer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 59</Link><br/>Some oracles seek meaning in the pattern of the stars across the night sky, the trails of comets, and the eternal orbits of the planets.</p>
<p><strong className="hl">Recommended Mysteries:</strong> <Link to="/mystery/dark_tapestry">dark tapestry</Link>, <Link to="/mystery/heavens">heavens</Link>, <Link to="/mystery/lore">lore</Link>, <Link to="/mystery/nature">nature</Link>, <Link to="/mystery/time">time</Link>.</p>
<Ability icon={["skills"]} id="arc-oracle-stargazer-undefined">
<Pair id="arc-oracle-stargazer-undefined" single>Class Skills</Pair>
<Pair title="Replaces" hl>Bonus skills from the oracle's mystery</Pair>
<Pair title="New Class Skills"><Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/perform">Perform</Link> (CHA), <Link to="/skill/survival">Survival</Link> (WIS)</Pair></Ability>
<Ability id="arc-oracle-stargazer-bonus-spells" icon={["spell-book"]}>
<Pair single id="arc-oracle-stargazer-bonus-spells">Bonus Spells</Pair>
<Pair hl title="Replaces">The bonus spells gained at 2nd, 4th, 6th, 8th, and 18th levels from the oracle's mystery</Pair>
<Pair title="Info">The oracle gains these bonus spells at the listed levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/faerie_fire">Faerie fire</Link></Pair>
<Pair plain title="4th"><Link to="/spell/glitterdust">Glitterdust</Link></Pair>
<Pair plain title="6th"><Link to="/spell/guiding_star">Guiding star</Link></Pair>
<Pair plain title="8th"><Link to="/spell/wandering_star_motes">Wandering star motes</Link></Pair>
<Pair plain title="18th"><Link to="/spell/meteor_swarm">Meteor swarm</Link></Pair>
</Ability>
<Ability id="arc-oracle-stargazer-revelations" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-oracle-stargazer-revelations">Revelations</Pair>
<Pair title="Info">A stargazer must take the following revelations at the listed levels.</Pair>
</Ability>
<Ability id="arc-oracle-stargazer-guiding-star-su" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-oracle-stargazer-guiding-star-su">Guiding Star (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Info">This is the same as the <Link to="/mystery/heavens">heavens</Link> mystery revelation of the same name.</Pair>
<Pair title="Ability">Whenever you can see the open sky at night, you can determine your precise location.</Pair>
<Pair title="Passive Ability">When the night sky is visible to you, you may also add your Charisma modifier to your Wisdom modifier on all Wisdom-based checks.</Pair>
<Pair title="Ability">Once per night while outdoors, you can cast one spell as if it were modified by the <Link to="/feat/empower_spell">Empower Spell</Link>, <Link to="/feat/extend_spell">Extend Spell</Link>, <Link to="/feat/silent_spell">Silent Spell</Link>, or <Link to="/feat/still_spell">Still Spell</Link> feat without increasing the spell's casting time or level.</Pair>
</Ability>
<Ability id="arc-oracle-stargazer-star-chart-ex" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-oracle-stargazer-star-chart-ex">Star Chart (Ex)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Info">This is the same as the <em>heavens</em> mystery revelation of the same name.</Pair>
<Pair title="Ability">Your copious notes contain a working model of the night sky expressed in artistic scribbles and arcane mathematical formulae. Once per day, you may spend 10 minutes contemplating your star chart to gain the benefit of the spell <Link to="/spell/commune">commune</Link>.</Pair>
</Ability>
</>};
const _tree_soul = {title: "Tree Soul", jsx: <><h2 id="arc-oracle-tree_soul-tree-soul">Tree Soul</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 69</Link><br/>Tree souls develop an affinity not just with trees but also with objects carved from them, feeling the essence of the tree's spirit living within. By bonding to trees, they learn to manipulate the trees' power to produce divine energy. The type of tree a tree soul oracle bonds to often seems to influence the oracle's personality. A tree soul who is bound to a towering redwood may value traditions and be slow to anger, while a tree soul bound to a smaller pine tree might be quick to react and have a somewhat prickly personality. Regardless of the trees they form their metaphysical attachment to, tree soul oracles tend to be steadfast and stubborn, having an aura of timelessness even as the world changes around them.</p>
<Ability icon={["skills"]} id="arc-oracle-tree_soul-undefined">
<Pair id="arc-oracle-tree_soul-undefined" single>Class Skills</Pair>
<Pair title="Replaces" hl>Bonus skills from the oracle's mystery</Pair>
<Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX), <Link to="/skill/climb">Climb</Link> (STR), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS)</Pair></Ability>
<Ability id="arc-oracle-tree_soul-weapon-and-armor-proficiency" icon={["broken-shield","hazard-sign"]}>
<Pair single id="arc-oracle-tree_soul-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair title="Ability">Tree souls are proficient with light and medium armor but are prohibited from wearing metal armor. A tree soul can also wear wooden armor that has been altered by the <Link to="/spell/ironwood">ironwood</Link> spell so that it functions as though it were steel. Tree souls are proficient with shields (except tower shields) but can use only those crafted from wood.</Pair>
<Pair title="Info">A tree soul who wears prohibited armor or uses a prohibited shield is unable to cast oracle spells or use any of her supernatural or spell-like class abilities while doing so and for 24 hours thereafter.</Pair>
</Ability>
<p><strong className="hl">Recommended Mysteries:</strong> <Link to="/mystery/ancestor">Ancestor</Link>, <Link to="/mystery/lore">lore</Link>, <Link to="/mystery/nature">nature</Link>, <Link to="/mystery/wood">wood</Link>.</p>
<Ability id="arc-oracle-tree_soul-bonus-spells" icon={["spell-book"]}>
<Pair single id="arc-oracle-tree_soul-bonus-spells">Bonus Spells</Pair>
<Pair hl title="Replaces">The bonus spells gained at 2nd, 10th, 12th, 14th, 16th, and 18th levels from the oracle's mystery</Pair>
<Pair title="Info">The oracle gains these bonus spells at the listed levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/warp_wood">Warp wood</Link></Pair>
<Pair plain title="10th"><Link to="/spell/tree_stride">Tree stride</Link></Pair>
<Pair plain title="12th"><Link to="/spell/ironwood">Ironwood</Link></Pair>
<Pair plain title="14th"><Link to="/spell/changestaff">Changestaff</Link></Pair>
<Pair plain title="16th"><Link to="/spell/repel_metal_or_stone">Repel metal or stone</Link></Pair>
<Pair plain title="18th"><Link to="/spell/greater_siege_of_trees">Greater siege of trees</Link></Pair>
</Ability>
<Ability id="arc-oracle-tree_soul-tree-bound-curse-su" icon={["broken-shield"]}>
<Pair single id="arc-oracle-tree_soul-tree-bound-curse-su">Tree Bound Curse (Su)</Pair>
<Pair hl title="Replaces">Oracle's curse</Pair>
<Pair title="Ability">You bind your power to a specific tree. Any damage to the tree deals the same amount of damage to you, overcoming DR, energy resistance, and immunities. Damage you take in this way cannot be healed by normal or magical means until your bonded tree is healed or destroyed. The damage can reduce you to 0 hit points but not below. If the tree is destroyed, you are considered to be <Link to="/misc/staggered">staggered</Link> and are unable to cast oracle spells or use supernatural or spell-like class abilities until you bond with a new tree in a ceremony that takes 12 hours to complete.</Pair>
<Pair title="Special">Once per month, you can create a new bond with a different tree in a ceremony at that tree that takes 12 hours to complete. You lose your bond with your previous tree in the process.</Pair>
</Ability>
<Ability id="arc-oracle-tree_soul-revelations" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-oracle-tree_soul-revelations">Revelations</Pair>
<Pair title="Info">A tree soul oracle must take the following revelations at the listed levels.</Pair>
</Ability>
<Ability id="arc-oracle-tree_soul-transform-wood-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-oracle-tree_soul-transform-wood-su">Transform Wood (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Standard Action">You can temporarily transform a number of 5-foot cubes of wood each day equal to 1 + your Charisma modifier. The wood takes on the quality of <Link to="/eq-material/darkwood">darkwood</Link> for 1 minute per oracle level.</Pair>
<Pair title="At 11th Level">You can have it instead take on the quality of <Link to="/eq-material/living_steel">living steel</Link> for the same duration.</Pair>
</Ability>
<Ability id="arc-oracle-tree_soul-living-steel-dolls-ex" extraClasses="subAbility" icon={["spell-book","upgrade"]}>
<Pair single id="arc-oracle-tree_soul-living-steel-dolls-ex">Living Steel Dolls (Ex)</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">You add <Link to="/spell/animate_objects">animate objects</Link> to your list of spells known. When you cast this spell on wooden objects, the objects' wooden parts immediately transform into living steel. If the objects are destroyed or the duration ends, the wooden parts revert back to their original material.</Pair>
</Ability>
<Ability id="arc-oracle-tree_soul-tree-soul-revelation-su" extraClasses="subAbility" icon={["armor-upgrade","magic-swirl"]}>
<Pair single id="arc-oracle-tree_soul-tree-soul-revelation-su">Tree Soul Revelation (Su)</Pair>
<Pair hl title="Replaces">Final revelation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">Your skin takes on the appearance and properties of a tree trunk. This bark-like skin grants you a +4 natural armor bonus to your Armor Class and DR 10/slashing. You also regrow any severed limbs except your head within 24 hours as per <Link to="/spell/regenerate">regenerate</Link>.</Pair>
<Pair title="Standard Action">Once a day, you can assume the form of a <Link to="/monster/treant">treant</Link>, as per <Link to="/spell/plant_shape_iii">plant shape III</Link>, for a number of minutes equal to 3 + your Charisma modifier (minimum 1).</Pair>
</Ability>
</>};
const _warsighted = {title: "Warsighted", jsx: <><h2 id="arc-oracle-warsighted-warsighted">Warsighted</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 106</Link><br/>A warsighted's unique gifts are not in strange magical revelations, but in her ability to adapt in the midst of a battle with new fighting techniques. The warsighted is a master of combat, as dedicated as a fighter and as flexible as a brawler.</p>
<Ability id="arc-oracle-warsighted-martial-flexibility-ex" icon={["stairs-goal"]}>
<Pair single id="arc-oracle-warsighted-martial-flexibility-ex">Martial Flexibility (Ex)</Pair>
<Pair hl title="Replaces">Revelations gained at 1st, 7th, 11th, and 15th levels</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>A warsighted can use a <strong className="hl">move action</strong> to gain the benefit of a <Link to="/main/combat_feat">combat feat</Link> she doesn't possess. This effect lasts for 1 minute. The warsighted must otherwise meet all the feat's prerequisites. She can use this ability a number of times per day equal to 3 + <Link to="/misc/half">half</Link> her oracle level.</p>
<p>The warsighted can use this ability again before the duration expires in order to replace the previous combat feat with another choice.</p>
<p>If a combat feat has a daily use limitation (for example, <Link to="/feat/stunning_fist">Stunning Fist</Link>), any uses of that combat feat while using this ability count toward that feat's daily limit. At later levels, when she gains multiple feats through this ability, she can use those feats to meet the prerequisites of other feats she gains with this ability. Doing so means that she cannot replace a feat currently fulfilling another's prerequisite without also replacing those feats that require it. Each individual feat selected counts toward her daily uses of this ability.</p>
</Pair>
<Pair title="At 7th Level">A warsighted can use this ability to gain the benefit of two combat feats at the same time. She can select one feat as a <strong className="hl">swift action</strong> or two feats as a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 11th Level">A warsighted can use this ability to gain the benefits of three combat feats at the same time. She can select one feat as a <strong className="hl">free action</strong>, two feats as a <strong className="hl">swift action</strong>, or three feats as a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 15th Level">A warsighted can use this ability to gain the benefit of one combat feat as an <strong className="hl">immediate action</strong> or three combat feats as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<p><strong className="hl">Recommended Mysteries:</strong> <Link to="/mystery/battle">Battle</Link>, <Link to="/mystery/bones">bones</Link>, <Link to="/mystery/nature">nature</Link>, <Link to="/mystery/metal">metal</Link>.</p>
</>};
export default {ancient_lorekeeper:_ancient_lorekeeper,black_blooded_oracle:_black_blooded_oracle,community_guardian:_community_guardian,cyclopean_seer:_cyclopean_seer,divine_numerologist:_divine_numerologist,dual_cursed_oracle:_dual_cursed_oracle,elementalist_oracle:_elementalist_oracle,enlightened_philosopher:_enlightened_philosopher,hermit:_hermit,inerrant_voice:_inerrant_voice,keleshite_prophet:_keleshite_prophet,oceans_echo:_oceans_echo,pei_zin_practitioner:_pei_zin_practitioner,planar_oracle:_planar_oracle,possessed_oracle:_possessed_oracle,psychic_searcher:_psychic_searcher,purifier:_purifier,reincarnated_oracle:_reincarnated_oracle,river_soul:_river_soul,seeker:_seeker,seer:_seer,shigenjo:_shigenjo,spirit_guide:_spirit_guide,stargazer:_stargazer,tree_soul:_tree_soul,warsighted:_warsighted}