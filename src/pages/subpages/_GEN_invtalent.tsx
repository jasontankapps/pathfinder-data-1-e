import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested investigator talent.</p>
</>};
const _blinding_strike = {title: "Blinding Strike", addenda: ["studiedstrike"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="blinding-strike-ex" icon={["armor-downgrade"]}>
<Pair single id="blinding-strike-ex">Blinding Strike (Ex)</Pair>
<Pair title="Prerequisites">17th-level investigator</Pair>
<Pair title="Ability">When the investigator deals damage with <em>studied strike,</em> the opponent must succeed at a Fortitude saving throw or be permanently <Link to="/misc/blinded">blinded</Link>. A successful saving throw reduces this to <Link to="/misc/dazzled">dazzled</Link> for 1d4 rounds. The DC for this Fortitude save is equal to 10 + 1/2 the investigator's level + his Intelligence modifier.</Pair>
<Pair title="Special">This talent has no effect on creatures that do not rely on eyes for sight or creatures with more than two eyes (although multiple critical hits might cause blindness, at the GM's discretion). Blindness can be cured by <Link to="/spell/heal">heal</Link>, <Link to="/umr/regeneration">regeneration</Link>, <Link to="/spell/remove_blindness">remove blindness</Link>, or similar abilities.</Pair>
</Ability>
</>};
const _confusing_strike = {title: "Confusing Strike", addenda: ["studiedstrike"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="confusing-strike-ex" icon={["armor-downgrade"]}>
<Pair single id="confusing-strike-ex">Confusing Strike (Ex)</Pair>
<Pair title="Prerequisites">19th-level investigator</Pair>
<Pair title="Ability">When the investigator deals damage with <em>studied strike,</em> the opponent must succeed at a Fortitude saving throw or become <Link to="/misc/confused">confused</Link> for 1d4+1 rounds. A successful saving throw reduces the duration to 1 round. The DC for this Fortitude save is equal to 10 + 1/2 the investigator's level + his Intelligence modifier.</Pair>
<Pair title="Special">Constructs, mindless creatures, oozes, plants, undead, incorporeal creatures, and creatures immune to critical hits are not affected by this ability.</Pair>
</Ability>
</>};
const _deafening_strike = {title: "Deafening Strike", addenda: ["studiedstrike"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="deafening-strike-ex" icon={["armor-downgrade"]}>
<Pair single id="deafening-strike-ex">Deafening Strike (Ex)</Pair>
<Pair title="Prerequisites">15th-level investigator</Pair>
<Pair title="Ability">When an investigator deals damage with <em>studied strike,</em> the opponent must succeed at a Fortitude saving throw or be permanently <Link to="/misc/deafened">deafened</Link>. A successful Fortitude saving throw reduces the duration of this effect to 1 round. The DC for this save is equal to 10 + 1/2 the investigator's level + his Intelligence modifier.</Pair>
<Pair title="Special">This talent has no effect on deaf creatures. Deafness can be cured by <Link to="/spell/heal">heal</Link>, <Link to="/umr/regeneration">regeneration</Link>, <Link to="/spell/remove_blindness">remove blindness</Link>, or similar effects.</Pair>
</Ability>
</>};
const _domino_effect = {title: "Domino Effect", addenda: ["studiedstrike"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 15</Link></p>
<Ability id="domino-effect-ex" icon={["upgrade"]}>
<Pair single id="domino-effect-ex" flavor={<>When the investigator uses <em>studied strike,</em> he uses his opponents against each other and sets himself up for his next move.</>}>Domino Effect (Ex)</Pair>
<Pair title="Prerequisites">5th-level investigator</Pair>
<Pair title="Free Action">Whenever he successfully deals damage to an opponent with <em>studied strike,</em> the investigator can apply the effects of <em>studied combat</em> to an opponent adjacent to the first.</Pair>
</Ability>
</>};
const _iconclastic_strike = {title: "Iconclastic Strike", addenda: ["studiedstrike"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 31</Link></p>
<Ability id="iconclastic-strike-ex" icon={["mailed-fist"]}>
<Pair single id="iconclastic-strike-ex">Iconclastic Strike (Ex)</Pair>
<Pair title="Prerequisites">13th-level investigator</Pair>
<Pair title="Free Action">When the investigator deals damage with a <em>studied strike,</em> she can perform a <Link to="/rule/sunder">sunder</Link> combat maneuver against the creature the <em>studied strike</em> damaged.</Pair>
<Pair title="Special">If the object targeted is a holy symbol or divine scroll, this sunder does not provoke attacks of opportunity and deals maximum damage on a successful check.</Pair>
</Ability>
</>};
const _numerical_strike = {title: "Numerical Strike", addenda: ["studiedstrike"], jsx: <><p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 17</Link></p>
<Ability id="numerical-strike-ex" icon={["rolling-dices"]}>
<Pair single id="numerical-strike-ex">Numerical Strike (Ex)</Pair>
<Pair title="Prerequisites">5th-level investigator</Pair>
<Pair title="Ability">Once per day when the investigator has confirmed a critical hit with a <em>studied strike,</em> he can deal average damage instead of rolling damage as normal. This includes the damage dealt by the successful attack as well as the additional damage from the <em>studied strike.</em></Pair>
<Pair title="Special">He can expend a use of <em>inspiration</em> to use this ability a second time per day. Using this ability doesn't require an action.</Pair>
</Ability>
</>};
const _greater_numerical_strike = {title: "Greater Numerical Strike", addenda: ["studiedstrike"], jsx: <><p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 17</Link></p>
<Ability id="greater-numerical-strike-ex" icon={["upgrade"]}>
<Pair single id="greater-numerical-strike-ex">Greater Numerical Strike (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/invtalent/numerical_strike">Numerical strike</Link>, 13th-level investigator</Pair>
<Pair title="Ability">Once per day, when the investigator has confirmed a critical hit with a <em>studied strike,</em> he can deal the strike's maximum damage instead of rolling damage as normal. This includes the damage dealt by the successful attack as well as the additional damage from the <em>studied strike.</em></Pair>
<Pair title="Special">He can expend a use of <em>inspiration</em> to use this ability a second time per day. Using this ability doesn't require an action.</Pair>
</Ability>
</>};
const _masterful_numerical_strike = {title: "Masterful Numerical Strike", addenda: ["studiedstrike"], jsx: <><p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 17</Link></p>
<Ability id="masterful-numerical-strike-ex" icon={["upgrade"]}>
<Pair single id="masterful-numerical-strike-ex">Masterful Numerical Strike (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/invtalent/numerical_strike">Numerical strike</Link>, <Link to="/invtalent/greater_numerical_strike">greater numerical strike</Link>, 17th-level investigator</Pair>
<Pair title="Ability">The investigator can use both <em>numerical strike</em> and <em>greater numerical strike</em> three times per day. The investigator doesn't need to expend uses of <em>inspiration</em> to use either ability, but he can never use either more than three times per day each.</Pair>
</Ability>
</>};
const _prolonged_study = {title: "Prolonged Study", addenda: ["studiedstrike"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 15</Link></p>
<Ability id="prolonged-study-ex" icon={["upgrade"]}>
<Pair single id="prolonged-study-ex">Prolonged Study (Ex)</Pair>
<Pair title="Prerequisites">13th-level investigator</Pair>
<Pair title="Ability">The investigator can study his opponents for long periods of time. The effects of his <em>studied combat</em> ability last for a number of rounds equal to twice his Intelligence modifier (minimum 2) or until he deals damage with a <em>studied strike,</em> whichever comes first.</Pair>
</Ability>
</>};
const _repositioning_strike = {title: "Repositioning Strike", addenda: ["studiedstrike"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="repositioning-strike-ex" icon={["mailed-fist"]}>
<Pair single id="repositioning-strike-ex">Repositioning Strike (Ex)</Pair>
<Pair title="Prerequisites">13th-level investigator</Pair>
<Pair title="Free Action">When the investigator deals damage with <em>studied strike,</em> he can perform a <Link to="/rule/reposition">reposition</Link> combat maneuver against the creature damaged by <em>studied strike.</em> This reposition does not provoke attacks of opportunity.</Pair>
</Ability>
</>};
const _sapping_offensive = {title: "Sapping Offensive", addenda: ["studiedstrike"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="sapping-offensive-ex" icon={["armor-downgrade"]}>
<Pair single id="sapping-offensive-ex">Sapping Offensive (Ex)</Pair>
<Pair title="Prerequisites">5th-level investigator</Pair>
<Pair title="Ability">When the investigator damages a studied target, that creature cannot make attacks of opportunity for 1 round.</Pair>
</Ability>
</>};
const _sickening_offensive = {title: "Sickening Offensive", addenda: ["studiedstrike"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="sickening-offensive-ex" icon={["armor-downgrade"]}>
<Pair single id="sickening-offensive-ex">Sickening Offensive (Ex)</Pair>
<Pair title="Prerequisites">7th-level investigator</Pair>
<Pair title="Ability">When the investigator damages a studied target, that creature is also <Link to="/misc/sickened">sickened</Link> for 1 round.</Pair>
</Ability>
</>};
const _silencing_strike = {title: "Silencing Strike", addenda: ["studiedstrike"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 31</Link></p>
<Ability id="silencing-strike-ex" icon={["armor-downgrade"]}>
<Pair single id="silencing-strike-ex">Silencing Strike (Ex)</Pair>
<Pair title="Prerequisites">15th-level investigator</Pair>
<Pair title="Ability">When the investigator deals damage with a <em>studied strike,</em> the target must succeed at a Fortitude save (DC = 10 + 1/2 the investigator's class level + her Intelligence modifier) or be unable to speak (even for verbal components) for 1d4+1 rounds. A successful save reduces the duration to 1 round.</Pair>
<Pair title="Special">This talent has no effect on creatures immune to critical hits.</Pair>
</Ability>
</>};
const _slowing_strike = {title: "Slowing Strike", addenda: ["studiedstrike"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 15</Link></p>
<Ability id="slowing-strike-ex" icon={["armor-downgrade"]}>
<Pair single id="slowing-strike-ex">Slowing Strike (Ex)</Pair>
<Pair title="Prerequisites">7th-level investigator</Pair>
<Pair title="Ability">When the investigator deals damage with <em>studied strike,</em> the opponent must succeed at a Fortitude save (DC = 10 + 1/2 the investigator's class level + his Intelligence modifier) or be slowed by the crippling blow. A slowed opponent's movement speeds are each reduced by 5 feet (to a minimum of 5 feet) until the creature is healed through the application of any spell that cures hit point damage or with a successful DC 15 Heal check.</Pair>
<Pair title="Special">Multiple <em>slowing strikes</em> stack, to a minimum of 5 feet.</Pair>
</Ability>
</>};
const _stealing_strike = {title: "Stealing Strike", addenda: ["studiedstrike"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="stealing-strike-ex" icon={["mailed-fist"]}>
<Pair single id="stealing-strike-ex">Stealing Strike (Ex)</Pair>
<Pair title="Prerequisites">13th-level investigator</Pair>
<Pair title="Free Action">When the investigator deals damage with <em>studied strike,</em> he can perform a <Link to="/rule/steal">steal</Link> combat maneuver against the creature damaged by <em>studied strike.</em> This steal does not provoke attacks of opportunity.</Pair>
</Ability>
</>};
const _timed_strike = {title: "Timed Strike", addenda: ["studiedstrike"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 15</Link></p>
<Ability id="timed-strike-ex" icon={["upgrade"]}>
<Pair single id="timed-strike-ex" flavor={<>The longer the investigator studies his opponent, the greater the damage he ultimately deals with his <em>studied strike.</em></>}>Timed Strike (Ex)</Pair>
<Pair title="Ability">When the investigator makes a <em>studied strike,</em> he deal a number of points of additional damage equal to the number of consecutive rounds he studied the target with <em>studied combat.</em></Pair>
</Ability>
</>};
const _toppling_strike = {title: "Toppling Strike", addenda: ["studiedstrike"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="toppling-strike-ex" icon={["mailed-fist"]}>
<Pair single id="toppling-strike-ex">Toppling Strike (Ex)</Pair>
<Pair title="Prerequisites">9th-level investigator</Pair>
<Pair title="Free Action">When the investigator deals damage with <em>studied strike,</em> he can perform a <Link to="/rule/trip">trip</Link> combat maneuver against the creature damaged by <em>studied strike.</em> This trip does not provoke attacks of opportunity.</Pair>
</Ability>
</>};
const _twilight_talon_improvisation = {title: "Twilight Talon Improvisation", addenda: ["studiedstrike"], jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 31</Link></p>
<Ability id="twilight-talon-improvisation-ex" icon={["mailed-fist"]}>
<Pair single id="twilight-talon-improvisation-ex">Twilight Talon Improvisation (Ex)</Pair>
<Pair title="Free Action">Whenever the investigator deals <em>studied strike</em> damage with an <Link to="/misc/improvised_weapon">improvised weapon</Link>, she can perform a <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver targeting that foe. This combat maneuver provokes attacks of opportunity as normal unless the investigator has a feat or other ability to prevent it.</Pair>
</Ability>
</>};
const _didactic_strike = {title: "Didactic Strike", jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 147</Link></p>
<Ability id="didactic-strike" icon={["upgrade"]}>
<Pair single id="didactic-strike">Didactic Strike</Pair>
<Pair title="Ability"><p>When the investigator activates his <em>studied strike,</em> he can end his <em>studied combat</em> and choose not to deal his <em>studied strike</em> damage. He is instead able to show any allies within 30 feet who can see him a weak spot on the target.</p>
<p>Until the beginning of the investigator's next turn, each affected ally's first attack that hits the target deals additional damage equal to one-third the investigator's level.</p>
</Pair>
<Pair title="Special">He can end this effect as an <strong className="hl">immediate action</strong> to instead cause an affected ally's first successful attack to deal the investigator's <em>studied strike</em> damage. This additional damage is <Link to="/misc/precision_damage">precision damage</Link> and does not affect creatures that are immune to sneak attacks.</Pair>
</Ability>
</>};
const _quick_study = {title: "Quick Study", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="quick-study-ex" icon={["upgrade"]}>
<Pair single id="quick-study-ex">Quick Study (Ex)</Pair>
<Pair title="Ability">An investigator can use his <em>studied combat</em> ability as <strong className="hl">swift action</strong> instead of a move action.</Pair>
</Ability>
</>};
const _studied_defense = {title: "Studied Defense", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="studied-defense-ex" icon={["armor-upgrade"]}>
<Pair single id="studied-defense-ex">Studied Defense (Ex)</Pair>
<Pair title="Prerequisites">9th-level investigator</Pair>
<Pair title="Ability">When an investigator with this talent uses his <em>studied combat</em> ability, he can chose to apply that ability's insight bonus to his AC against attacks made by the target of his <em>studied combat</em> instead of to attack rolls against the target of his <em>studied combat.</em> (The insight bonus on damage rolls remains.)</Pair>
<Pair title="Special">He must choose which type of bonus he gains when using <em>studied combat,</em> and it cannot be changed until he uses <em>studied combat</em> again.</Pair>
</Ability>
</>};
const _amazing_inspiration = {title: "Amazing Inspiration", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="amazing-inspiration-ex" icon={["upgrade"]}>
<Pair single id="amazing-inspiration-ex">Amazing Inspiration (Ex)</Pair>
<Pair title="Prerequisites">7th-level investigator</Pair>
<Pair title="Passive Ability">When using <em>inspiration,</em> the investigator rolls a d8 instead of a d6.</Pair>
<Pair title="At 20th Level">The investigator rolls 2d8 and adds both dice to the result.</Pair>
</Ability>
</>};
const _applied_engineering = {title: "Applied Engineering", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 15</Link></p>
<Ability id="applied-engineering-ex" icon={["upgrade"]}>
<Pair single id="applied-engineering-ex" flavor="The investigator can leverage his knowledge of engineering to solve tasks that normally require brute strength or keen eyes.">Applied Engineering (Ex)</Pair>
<Pair title="Full-Round Action">He can expend one use of <em>inspiration</em> to study an object or area and attempt a <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> check. On his next turn, he can use the result of that Knowledge (engineering) check in place of a Strength check to break the object or in place of a Perception check to locate hidden doors or compartments in that area.</Pair>
</Ability>
</>};
const _atheist_inspiration = {title: "Atheist Inspiration", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 31</Link></p>
<Ability id="atheist-inspiration-ex" icon={["armor-upgrade"]}>
<Pair single id="atheist-inspiration-ex">Atheist Inspiration (Ex)</Pair>
<Pair title="Passive Ability">The investigator can use her <em>inspiration</em> on saving throws against divine spells without expending uses of <em>inspiration.</em></Pair>
<Pair title="Special">This talent counts as the <Link to="/feat/divine_defiance">Divine Defiance</Link> feat for the purpose of meeting the prerequisites of other feats.</Pair>
</Ability>
</>};
const _chroniclers_insight = {title: "Chronicler's Insight", jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 146</Link></p>
<Ability id="chroniclers-insight-ex" extraClasses="hasSubs" icon={["upgrade"]}>
<Pair single id="chroniclers-insight-ex">Chronicler's Insight (Ex)</Pair>
<Pair title="Standard Action">The investigator can peruse a <Link to="/eq-misc/pathfinder_chronicle">Pathfinder Chronicle</Link>, applying its benefits as though he had studied it for the full 1d4 rounds.</Pair>
<Pair title="Ability">Upon studying a Pathfinder Chronicle, the investigator can expend one use of <em>inspiration</em> to apply the volume's benefits for a number of hours equal to his Intelligence modifier and gain an additional benefit based on the volume's associated Knowledge skill during that time. The investigator can have only one such ongoing benefit at a time, and activating a new benefit ends the first one.</Pair>
</Ability>
<Ability id="arcana-nature-planes-or-religion" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arcana-nature-planes-or-religion">Arcana, Nature, Planes, or Religion</Pair>
<Pair title="Ability"><p>When performing a <em>studied strike,</em> the investigator's attack overcomes damage reduction as if it were a weapon with the following property based on the associated Knowledge check: adamantine (arcana), chaotic (planes), cold iron (nature), evil (planes), good (planes), lawful (planes), silver (religion).</p>
<p>He also gains a +1 insight bonus on saving throws against creatures identifiable by the associated Knowledge check (for example, outsiders for Knowledge [planes]).</p>
</Pair>
</Ability>
<Ability id="dungeoneering" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="dungeoneering">Dungeoneering</Pair>
<Pair title="Ability">The investigator can deal half his <em>studied strike</em> damage to creatures immune to sneak attacks.</Pair>
</Ability>
<Ability id="engineering" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="engineering">Engineering</Pair>
<Pair title="Ability">Whenever he uses his <em>inspiration</em> on <Link to="/skill/disable_device">Disable Device</Link> checks to open locks or on <Link to="/skill/perception">Perception</Link> checks to find hidden compartments, the investigator gains a circumstance bonus on the check equal to <Link to="/misc/one_third">one-third</Link> of his level.</Pair>
</Ability>
<Ability id="geography" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="geography">Geography</Pair>
<Pair title="Ability">The investigator increases any bonuses to AC and on Reflex saving throws he gains from partial <Link to="/rule/cover">cover</Link>, total cover, and improved cover by 1.</Pair>
</Ability>
<Ability id="history" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="history">History</Pair>
<Pair title="Full-Round Action">The investigator can study a foe using <em>studied combat</em> a second time in 24 hours without expending <em>inspiration.</em> Subsequent uses of <em>studied combat</em> require <em>inspiration</em> as normal.</Pair>
</Ability>
<Ability id="local" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="local">Local</Pair>
<Pair title="Ability">Whenever he uses his <em>inspiration</em> on <Link to="/skill/bluff">Bluff</Link> checks to feint, <Link to="/skill/diplomacy">Diplomacy</Link> checks to gather information, or <Link to="/skill/intimidate">Intimidate</Link> checks to improve a creature's attitude, the investigator gains a circumstance bonus on the check equal to one-third his level.</Pair>
</Ability>
<Ability id="nobility" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="nobility">Nobility</Pair>
<Pair title="Ability">Whenever he uses his <em>inspiration</em> on Bluff checks to lie, Diplomacy checks to request favors, or Intimidate checks to demoralize, the investigator gains a circumstance bonus on the check equal to one-third his level.</Pair>
</Ability>
</>};
const _combat_inspiration = {title: "Combat Inspiration", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="combat-inspiration-ex" icon={["upgrade"]}>
<Pair single id="combat-inspiration-ex">Combat Inspiration (Ex)</Pair>
<Pair title="Prerequisites">9th-level investigator</Pair>
<Pair title="Passive Ability">When an investigator uses <em>inspiration</em> on an attack roll or saving throw, he expends one use of <em>inspiration</em> instead of two.</Pair>
</Ability>
</>};
const _greater_combat_inspiration = {title: "Greater Combat Inspiration", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="greater-combat-inspiration-ex" icon={["upgrade"]}>
<Pair single id="greater-combat-inspiration-ex">Greater Combat Inspiration (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/invtalent/combat_inspiration">Combat inspiration</Link>, 19th-level investigator</Pair>
<Pair title="Choice">Choose a single weapon type (such as <Link to="/eq-weapon/sword_cane">sword cane</Link> or <Link to="/eq-weapon/short_sword">short sword</Link>). As long as the investigator has at least 1 inspiration point in his inspiration pool, he no longer has to expend a use of <em>inspiration</em> to use that ability with attacks made with this weapon.</Pair>
</Ability>
</>};
const _eidetic_recollection = {title: "Eidetic Recollection", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="eidetic-recollection-su" icon={["upgrade"]}>
<Pair single id="eidetic-recollection-su">Eidetic Recollection (Su)</Pair>
<Pair title="Prerequisites">11th-level investigator</Pair>
<Pair title="Ability"><p>An investigator can always choose to take 10 on any of his Knowledge checks, even if he's in immediate danger or distracted.</p>
<p>An investigator may expend one use of <em>inspiration</em> to take 20 on a Knowledge skill check even if he's in immediate danger or distracted.</p>
</Pair>
</Ability>
</>};
const _empathy = {title: "Empathy", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="empathy-ex-su" icon={["rolling-dices","stairs-goal"]}>
<Pair single id="empathy-ex-su">Empathy (Ex, Su)</Pair>
<Pair title="Prerequisites">5th-level investigator</Pair>
<Pair title="Ability"><p>When attempting a <Link to="/rule/sense_motive">Sense Motive</Link> check, the investigator makes two d20 rolls and takes the higher result.</p>
<p>If an investigator uses <em>inspiration</em> on a Sense Motive check, he rolls the <em>inspiration</em> dice twice and takes the higher result.</p>
</Pair>
<Pair title="Ability"><p>Once per day, the investigator can expend one use of <em>inspiration</em> to target a single creature that he can see and hear within 30 feet. Upon doing so, the investigator detects the surface thoughts of the target's mind, as if he concentrated for 3 rounds while using the <Link to="/spell/detect_thoughts">detect thoughts</Link> spell, unless the creature succeeds a Will saving throw. The DC of this save is 10 + 1/2 the investigator's level + his Intelligence modifier.</p>
<p>If the target fails, the investigator can continue to detect the surface thoughts of the target creature for a number of rounds equal to 1/2 his investigator level.</p>
</Pair>
</Ability>
</>};
const _expanded_inspiration = {title: "Expanded Inspiration", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="expanded-inspiration-ex" icon={["upgrade"]}>
<Pair single id="expanded-inspiration-ex">Expanded Inspiration (Ex)</Pair>
<Pair title="Ability">An investigator can use his <em>inspiration</em> ability when attempting Diplomacy, Heal, Perception, Profession, and Sense Motive checks without expending uses of <em>inspiration,</em> provided he's trained in the skill.</Pair>
</Ability>
</>};
const _rapid_perception = {title: "Rapid Perception", jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 27</Link></p>
<Ability id="rapid-perception-su" icon={["upgrade"]}>
<Pair single id="rapid-perception-su">Rapid Perception (Su)</Pair>
<Pair title="Prerequisites"><Link to="/invtalent/expanded_inspiration">Expanded inspiration</Link></Pair>
<Pair title="Ability">An investigator with this talent can attempt a <Link to="/skill/perception">Perception</Link> check to intentionally search for a specific item or creature as a <strong className="hl">swift action</strong> instead of a move action. If she is intentionally searching for an invisible creature, the creature's bonus on its Stealth check from its <Link to="/spell/invisibility">invisibility</Link> is halved.</Pair>
</Ability>
</>};
const _hidden_agendas = {title: "Hidden Agendas", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="hidden-agendas-ex" icon={["rolling-dices","armor-upgrade"]}>
<Pair single id="hidden-agendas-ex" flavor="An investigator learns to obscure his thoughts and endeavors from prying eyes and even intrusive magic.">Hidden Agendas (Ex)</Pair>
<Pair title="Prerequisites">11th-level investigator</Pair>
<Pair title="Ability"><p>When an investigator uses <em>inspiration</em> while attempting a <Link to="/skill/bluff">Bluff</Link> check to pass secret messages or attempting a <Link to="/skill/linguistics">Linguistics</Link> check to create forgeries, he can roll his <em>inspiration</em> dice twice and take the higher result.</p>
<p>In addition, the investigator can use <em>inspiration</em> when attempting a saving throw against a divination spell or effect without expending a use of <em>inspiration.</em></p>
</Pair>
</Ability>
</>};
const _inspirational_expertise = {title: "Inspirational Expertise", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="inspirational-expertise-ex" icon={["upgrade"]}>
<Pair single id="inspirational-expertise-ex">Inspirational Expertise (Ex)</Pair>
<Pair title="Prerequisites">7th-level investigator</Pair>
<Pair title="Swift Action">When an investigator succeeds at a Knowledge check to identify a monster's special powers or vulnerabilities, he can expend one use of <em>inspiration</em> to grant allies within 30 feet that can hear him a +4 insight bonus on attack rolls against that monster or type of monster for 1 round.</Pair>
</Ability>
</>};
const _sustained_inspirational_expertise = {title: "Sustained Inspirational Expertise", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 31</Link></p>
<Ability id="sustained-inspirational-expertise-ex" icon={["upgrade"]}>
<Pair single id="sustained-inspirational-expertise-ex">Sustained Inspirational Expertise (Ex)</Pair>
<Pair title="Prerequisites">11th-level investigator, <Link to="/invtalent/inspirational_expertise">inspirational expertise</Link></Pair>
<Pair title="Swift Action">When granting a bonus to allies via the <em>inspirational expertise</em> investigator talent, the investigator can spend one use of <em>inspiration</em> the following round to extend the duration of the granted bonus for 1 additional round. The insight bonus granted decreases by 1 each round this ability is used.</Pair>
</Ability>
</>};
const _inspired_alertness = {title: "Inspired Alertness", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="inspired-alertness-ex" icon={["armor-upgrade"]}>
<Pair single id="inspired-alertness-ex">Inspired Alertness (Ex)</Pair>
<Pair title="Ability">Whenever the investigator becomes <Link to="/rule/flat_footed">flat-footed</Link>, he can expend one use of <em>inspiration</em> to ignore that condition. He must be conscious to do so, and must decide to do so when he becomes flat-footed. Using this ability doesn't require an action.</Pair>
</Ability>
</>};
const _inspired_intelligence = {title: "Inspired Intelligence", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="inspired-intelligence-ex" icon={["upgrade"]}>
<Pair single id="inspired-intelligence-ex">Inspired Intelligence (Ex)</Pair>
<Pair title="Ability">An investigator can add his <em>inspiration</em> die to all Knowledge, Linguistics, or Spellcraft checks without expending a use of <em>inspiration,</em> even those he's not trained in.</Pair>
</Ability>
</>};
const _inspired_intimidator = {title: "Inspired Intimidator", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="inspired-intimidator-ex" icon={["armor-downgrade"]}>
<Pair single id="inspired-intimidator-ex">Inspired Intimidator (Ex)</Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/intimidate">Intimidate</Link></Pair>
<Pair title="Ability">When the investigator succeeds at an Intimidate check to demoralize an opponent, he can expend one use of <em>inspiration</em> to automatically increase the result of the check by 5 for the purpose of determining the duration of the demoralize effect. He can choose to spend multiple uses to <em>inspiration</em> in this manner to further increase the duration of the demoralize effect.</Pair>
<Pair title="Special">The <Link to="/invtalent/underworld_inspiration">underworld inspiration</Link> investigator talent has no effect on this talent.</Pair>
</Ability>
</>};
const _tenacious_inspiration = {title: "Tenacious Inspiration", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="tenacious-inspiration-ex" icon={["rolling-dices"]}>
<Pair single id="tenacious-inspiration-ex">Tenacious Inspiration (Ex)</Pair>
<Pair title="Prerequisites">13th-level investigator</Pair>
<Pair title="Passive Ability">When an investigator rolls his <em>inspiration</em> die, he can roll an additional <em>inspiration</em> die and take the higher result.</Pair>
</Ability>
</>};
const _unconventional_inspiration = {title: "Unconventional Inspiration", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="unconventional-inspiration-ex" icon={["upgrade"]}>
<Pair single id="unconventional-inspiration-ex">Unconventional Inspiration (Ex)</Pair>
<Pair title="Choice">An investigator with this talent can pick any one skill. He can add his <em>inspiration</em> die to checks attempted with that skill without expending a use of <em>inspiration.</em></Pair>
</Ability>
</>};
const _underworld_inspiration = {title: "Underworld Inspiration", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="underworld-inspiration-ex" icon={["upgrade"]}>
<Pair single id="underworld-inspiration-ex">Underworld Inspiration (Ex)</Pair>
<Pair title="Ability">An investigator can use his <em>inspiration</em> on Bluff, Disable Device, Disguise, Intimidate, or Sleight of Hand checks without expending uses of <em>inspiration,</em> provided he's trained in the skill.</Pair>
</Ability>
</>};
const _innocent_facade = {title: "Innocent Facade", jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 27</Link></p>
<Ability id="innocent-facade-sp" icon={["magic-swirl","armor-upgrade"]}>
<Pair single id="innocent-facade-sp">Innocent Facade (Sp)</Pair>
<Pair title="Prerequisites"><Link to="/invtalent/underworld_inspiration">Underworld inspiration</Link></Pair>
<Pair title="Ability">Once per day, an investigator with this talent can use <Link to="/spell/innocence">innocence</Link> as a spell-like ability, using her investigator level as the spell's caster level.</Pair>
</Ability>
</>};
const _alchemist_discovery = {title: "Alchemist Discovery", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="alchemist-discovery-ex" icon={["stairs-goal"]}>
<Pair single id="alchemist-discovery-ex">Alchemist Discovery (Ex)</Pair>
<Pair title="Ability"><p>The investigator can select one of the following <Link to="/ability/discoveries">alchemist discoveries</Link> as an investigator talent: <Link to="/discovery/combine_extracts">combine extracts</Link>, <Link to="/discovery/concentrate_poison">concentrate poison</Link>, <Link to="/discovery/dilution">dilution</Link>, <Link to="/discovery/elixir_of_life">elixir of life</Link>, <Link to="/discovery/enhance_potion">enhance potion</Link>, <Link to="/discovery/eternal_potion">eternal potion</Link>, <Link to="/discovery/extend_potion">extend potion</Link>, <Link to="/discovery/infusion">infusion</Link>, <Link to="/discovery/mutagen">mutagen</Link>, and <Link to="/discovery/poison_conversion">poison conversion</Link>.</p>
<p>He can also choose to learn an <Link to="/ability/annointings">annointing</Link>, instead. When selecting an alchemist discovery or annointing, he must be high enough level to qualify for it, using his investigator level as his alchemist level to determine if he qualifies.</p>
</Pair>
<Pair title="Special">This talent can be selected multiple times; each time grants a new alchemist discovery.</Pair>
</Ability>
</>};
const _anathema = {title: "Anathema", jsx: <><p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 15</Link></p>
<Ability id="anathema-ex" icon={["armor-downgrade"]}>
<Pair single id="anathema-ex">Anathema (Ex)</Pair>
<Pair title="Ability"><p>When an investigator creates or prepares a poison, including poisons derived from racial or class abilities, he can spend one use of <em>inspiration</em> to create an <em>anathema</em> instead. <em>Anathemas</em> count as poisons, but they can affect creatures that are normally immune to poison, as they exploit vulnerabilities in their very nature rather than their biology.</p>
<p>When an <em>anathema</em> is created, select a creature type (and subtype, if applicable) from the ranger <Link to="/ability/favored_enemy">favored enemy</Link> list; the <em>anathema</em> functions only against this chosen type. The investigator also chooses one of the following special abilities for the <em>anathema</em> to affect: damage reduction (except DR/-), energy resistance (one type chosen by the investigator), <Link to="/umr/fast_healing">fast healing</Link>, movement speed, or spell resistance.</p>
<p>The method of delivery (contact, ingested, inhaled, or injury) and the DC of the <em>anathema's</em> save are identical to those of the poison used to make the <em>anathema.</em> If the target fails its save against the <em>anathema</em> (even if the enemy is normally immune to effects that require a specific save, such as undead's immunity to effects that require a Fortitude save), the value of the chosen ability is lowered by 5 (minimum 0) for 1 round per investigator level.</p>
</Pair>
</Ability>
</>};
const _greater_anathema = {title: "Greater Anathema", jsx: <><p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 15</Link></p>
<Ability id="greater-anathema-ex" icon={["upgrade","armor-downgrade"]}>
<Pair single id="greater-anathema-ex">Greater Anathema (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/invtalent/anathema">Anathema</Link></Pair>
<Pair title="Ability"><p>The ability reduction of the investigator's <em>anathemas</em> increases to 10, and he adds DR/- and regeneration to the list of abilities he can lower with an <em>anathema.</em></p>
<p>In addition, when an investigator creates an <em>anathema,</em> he can designate a specific kind of creature (such as <Link to="/template/vampire">vampires</Link>) in addition to the creature type. When used against this specific foe, the DC of the save against the <em>anathema</em> is 2 higher than the component poison.</p>
</Pair>
</Ability>
</>};
const _false_spellcaster = {title: "False Spellcaster", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 31</Link></p>
<Ability id="false-spellcaster-ex" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="false-spellcaster-ex">False Spellcaster (Ex)</Pair>
<Pair title="Ability"><p>The investigator can modify her extracts to be delivered as oils she can apply covertly to her skin. She can fake verbal or somatic components as she uses an extract this way to trick observers into thinking she cast a spell to produce the extract's effect. She attempts a <Link to="/skill/bluff">Bluff</Link> check to determine how convincing the ruse is. If observers attempt to determine the spell she is casting, those who succeed at a <Link to="/skill/spellcraft">Spellcraft</Link> check opposed by her Bluff check realize the truth.</p>
<p>Whether or not an observer recognizes what is going on, the DC to identify the effect of the extract is equal to 20 + the extract's spell level.</p>
</Pair>
<Pair title="Special">If the investigator has the <Link to="/discovery/infusion">infusion</Link> alchemist discovery, she can deliver her infusions with a range of touch, but the hint of residue grants targets a +2 bonus on the opposed Spellcraft check to realize she is not truly casting spells.</Pair>
</Ability>
</>};
const _lingering_venom = {title: "Lingering Venom", jsx: <><p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 15</Link></p>
<Ability id="lingering-venom-ex" icon={["upgrade"]}>
<Pair single id="lingering-venom-ex">Lingering Venom (Ex)</Pair>
<Pair title="Prerequisites">5th-level investigator</Pair>
<Pair title="Ability">Poisons that the investigator personally applies to weapons and traps, or otherwise inflicts upon foes, require one additional successful save to cure.</Pair>
</Ability>
</>};
const _numerical_alchemy = {title: "Numerical Alchemy", jsx: <><p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 17</Link></p>
<Ability id="numerical-alchemy-su" icon={["upgrade"]}>
<Pair single id="numerical-alchemy-su" flavor="The investigator's skill with mental mathematics allows him to know exactly which muscle movements are necessary to mix an extract in the quickest, most efficient way.">Numerical Alchemy (Su)</Pair>
<Pair title="Ability">The investigator can expend one use of <em>inspiration</em> to mix an extract in 1 round (as opposed to 1 minute).</Pair>
</Ability>
</>};
const _greater_numerical_alchemy = {title: "Greater Numerical Alchemy", jsx: <><p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 17</Link></p>
<Ability id="greater-numerical-alchemy-su" icon={["upgrade"]}>
<Pair single id="greater-numerical-alchemy-su" flavor="The investigator can calculate his movements and account for his reactions to danger or unexpected situations with lightning speed.">Greater Numerical Alchemy (Su)</Pair>
<Pair title="Prerequisites"><Link to="/invtalent/numerical_alchemy">Numerical alchemy</Link>, 11th-level investigator</Pair>
<Pair title="Ability">He can expend a use of <em>inspiration</em> to mix an extract as a <strong className="hl">standard action</strong>.</Pair>
</Ability>
</>};
const _castling = {title: "Castling", jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 9</Link></p>
<Ability id="castling-ex" icon={["armor-upgrade"]}>
<Pair single id="castling-ex">Castling (Ex)</Pair>
<Pair title="Passive Ability">The investigator treats soft cover granted by creatures of her size or larger as though it were <Link to="/rule/cover">cover</Link> instead. Cover the investigator gains from this talent does not allow her to attempt Stealth checks.</Pair>
</Ability>
</>};
const _device_talent = {title: "Device Talent", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="device-talent-ex" icon={["upgrade"]}>
<Pair single id="device-talent-ex">Device Talent (Ex)</Pair>
<Pair title="Ability">The investigator can use the <Link to="/skill/use_magic_device">Use Magic Device</Link> skill even if not trained in that skill. If the investigator is trained in Use Magic Device, he can use the <em>inspiration</em> ability with that skill without expending uses of <em>inspiration.</em></Pair>
</Ability>
</>};
const _effortless_aid = {title: "Effortless Aid", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="effortless-aid-ex" icon={["upgrade"]}>
<Pair single id="effortless-aid-ex">Effortless Aid (Ex)</Pair>
<Pair title="Ability"><p>The investigator can use an <Link to="/rule/aid_another_2">aid another</Link> action as a <strong className="hl">move action</strong> instead of as a standard action.</p>
<p>An investigator can expend one use of <em>inspiration</em> to instead perform an aid another action as a <strong className="hl">swift action</strong>.</p>
</Pair>
</Ability>
</>};
const _eldritch_conduit = {title: "Eldritch Conduit", jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 7</Link></p>
<Ability id="eldritch-conduit-su" icon={["upgrade","magic-swirl"]}>
<Pair single id="eldritch-conduit-su" flavor="Survival in the Mana Wastes between the nations of Nex and Geb can depend heavily on locating sufficient magical equipment, which sometimes involves stealing power from a wand or scroll to power a more necessary one.">Eldritch Conduit (Su)</Pair>
<Pair title="Full-Round Action">An investigator with this talent can use two potions, two wands, or two scrolls. Each item is expended or loses a charge as if used normally. The investigator chooses to gain the magical effect of one, but calculates its effects using the caster level of the other.</Pair>
<Pair title="Special">The investigator must still succeed at a Use Magic Device check to operate scrolls or wands unless some other ability allows him to do so, but makes only one skill check to operate both items.</Pair>
</Ability>
</>};
const _extra_earthcraft = {title: "Extra Earthcraft", jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 9</Link></p>
<Ability id="extra-earthcraft" icon={["upgrade"]}>
<Pair single id="extra-earthcraft">Extra Earthcraft</Pair>
<Pair title="Ability">The investigator gains 2 additional earthcraft points each day. The investigator must have the <Link to="/arc-rogue/earthshadow">earthcraft</Link> ability to select this talent.</Pair>
</Ability>
</>};
const _favored_beat = {title: "Favored Beat", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 31</Link></p>
<Ability id="favored-beat-ex" icon={["stairs-goal"]}>
<Pair single id="favored-beat-ex" flavor={<>The investigator is familiar with a specific community in which she gains the benefits of <em>renown.</em></>}>Favored Beat (Ex)</Pair>
<Pair title="Ability">She gains the <Link to="/soctalent/renown">renown</Link> vigilante social talent. This community can be an entire settlement or portions of a settlement (such as a particular district or neighborhood) depending on the population, as allowed by the <em>renown</em> social talent.</Pair>
<Pair title="Special"><p>Anytime she could select another investigator talent, the investigator can also select from the following list of vigilante social talents, using her investigator level as her vigilante level for the purposes of meeting prerequisites: <Link to="/soctalent/celebrity_discount">celebrity discount</Link>, <Link to="/soctalent/celebrity_perks">celebrity perks</Link>, <Link to="/soctalent/gossip_collector">gossip collector</Link>, <Link to="/soctalent/great_renown">great renown</Link>, <Link to="/soctalent/incredible_renown">incredible renown</Link>, and <Link to="/soctalent/loyal_aid">loyal aid</Link>.</p>
<p>For the purpose of vigilante social talents, the investigator does not have a vigilante identity and is always considered to be in her social identity.</p>
</Pair>
</Ability>
</>};
const _fortified_position = {title: "Fortified Position", jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 9</Link></p>
<Ability id="fortified-position-ex" icon={["armor-upgrade"]}>
<Pair single id="fortified-position-ex">Fortified Position (Ex)</Pair>
<Pair title="Passive Ability">Whenever the investigator gains a bonus on Reflex saves due to cover, she gains an equal bonus on Fortitude saves.</Pair>
</Ability>
</>};
const _graceful_athlete = {title: "Graceful Athlete", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 6</Link></p>
<Ability id="graceful-athlete" icon={["stairs-goal"]}>
<Pair single id="graceful-athlete">Graceful Athlete</Pair>
<Pair title="Ability">Gain <Link to="/feat/graceful_athlete">Graceful Athlete</Link> as a bonus feat. You must meet the prerequisites for the feat.</Pair>
</Ability>
</>};
const _item_lore = {title: "Item Lore", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="item-lore-ex" icon={["upgrade","magic-swirl"]}>
<Pair single id="item-lore-ex">Item Lore (Ex)</Pair>
<Pair title="Prerequisites">7th-level investigator</Pair>
<Pair title="Ability">An investigator can use <Link to="/skill/spellcraft">Spellcraft</Link> to identify the properties and command words of magic items without the use of <Link to="/spell/detect_magic">detect magic</Link> or similar spells.</Pair>
</Ability>
</>};
const _just_a_face_in_the_crowd = {title: "Just a Face in the Crowd", jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 7</Link></p>
<Ability id="just-a-face-in-the-crowd-su" icon={["armor-upgrade","upgrade"]}>
<Pair single id="just-a-face-in-the-crowd-su" flavor="The rabble-rousers of Galt can blend into a crowd and are able to hide and spot others who appear to be hiding.">Just a Face in the Crowd (Su)</Pair>
<Pair title="Passive Ability">The investigator gains a bonus equal to <Link to="/misc/half">half</Link> his class level on <Link to="/skill/disguise">Disguise</Link> and <Link to="/skill/perception">Perception</Link> checks when 10 or more creatures of his size are within 30 feet of him.</Pair>
</Ability>
</>};
const _occult_dungeoneer = {title: "Occult Dungeoneer", jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 7</Link></p>
<Ability id="occult-dungeoneer-su" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="occult-dungeoneer-su" flavor="Street thieves in Absalom expect wares to be securely locked, and sometimes it takes high-quality tools and magic training to ensure there's a meal at the end of the day.">Occult Dungeoneer (Su)</Pair>
<Pair title="Ability"><p>An investigator with this ability can use <Link to="/misc/spell_trigger">spell trigger</Link> and <Link to="/misc/spell_completion">spell completion</Link> items as if the following spells were on a spell list to which he has access: <Link to="/spell/detect_secret_doors">detect secret doors</Link>, <Link to="/spell/find_traps">find traps</Link>, <Link to="/spell/knock">knock</Link>, <Link to="/spell/locate_object">locate object</Link>, and <Link to="/spell/obscure_object">obscure object</Link>.</p>
<p>If the <Link to="/misc/spell_trigger">spell-trigger</Link> device allows a wielder to apply his own caster level (such as with a staff), the investigator may use his class level as his caster level.</p>
</Pair>
<Pair title="Special">The investigator may also use <em>knock</em> as a supernatural ability once per day, using his investigator level as his caster level.</Pair>
</Ability>
</>};
const _one_of_those_faces = {title: "One of Those Faces", jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 21</Link></p>
<Ability id="one-of-those-faces-sp" icon={["magic-swirl"]}>
<Pair single id="one-of-those-faces-sp">One of Those Faces (Sp)</Pair>
<Pair title="Ability">Each day, you can use <Link to="/spell/disguise_self">disguise self</Link> as a spell-like ability for up to 10 minutes per character level. This duration need not be continuous, but it must be used in 10-minute increments. Additionally, once you have used this ability, whenever you use it for the next 24 hours you must take the same alternate appearance.</Pair>
</Ability>
</>};
const _perceptive_tracking = {title: "Perceptive Tracking", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="perceptive-tracking-ex" icon={["upgrade"]}>
<Pair single id="perceptive-tracking-ex">Perceptive Tracking (Ex)</Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/perception">Perception</Link></Pair>
<Pair title="Passive Ability">The investigator can use Perception instead of <Link to="/skill/survival">Survival</Link> to both find and follow tracks, using the same DCs listed under the Survival skill.</Pair>
</Ability>
</>};
const _rogue_talent = {title: "Rogue Talent", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 32</Link></p>
<Ability id="rogue-talent-ex" icon={["stairs-goal"]}>
<Pair single id="rogue-talent-ex">Rogue Talent (Ex)</Pair>
<Pair title="Ability"><p>An investigator can select one of the following rogue talents in place of an investigator talent: <Link to="/talent/acrobatic_assist">acrobatic assist</Link>, <Link to="/talent/assault_leader">assault leader</Link>, <Link to="/talent/black_market_connections">black market connections</Link>, <Link to="/talent/camouflage">camouflage</Link>, <Link to="/talent/canny_observer">canny observer</Link>, <Link to="/talent/charmer">charmer</Link>, <Link to="/talent/coax_information">coax information</Link>, <Link to="/talent/combat_swipe">combat swipe</Link>, <Link to="/talent/convincing_lie">convincing lie</Link>, <Link to="/talent/cunning_trigger">cunning trigger</Link>, <Link to="/talent/deft_palm">deft palm</Link>, <Link to="/talent/demand_attention">demand attention</Link>, <Link to="/talent/expert_leaper">expert leaper</Link>, <Link to="/talent/fast_fingers">fast fingers</Link>, <Link to="/talent/fast_getaway">fast getaway</Link>, <Link to="/talent/fast_picks">fast picks</Link>, <Link to="/talent/fast_stealth">fast stealth</Link>, <Link to="/talent/firearm_training">firearm training</Link>, <Link to="/talent/got_your_back">got your back</Link>, <Link to="/talent/guileful_polyglot">guileful polyglot</Link>, <Link to="/talent/grit">grit</Link>, <Link to="/talent/hard_to_fool">hard to fool</Link>, <Link to="/talent/hold_breath">hold breath</Link>, <Link to="/talent/honeyed_words">honeyed words</Link>, <Link to="/talent/iron_guts">iron guts</Link>, <Link to="/talent/lasting_poison">lasting poison</Link>, <Link to="/talent/ledge_walker">ledge walker</Link>, <Link to="/talent/major_magic">major magic</Link>, <Link to="/talent/minor_magic">minor magic</Link>, <Link to="/talent/nimble_climber">nimble climber</Link>, <Link to="/talent/peerless_maneuver">peerless maneuver</Link>, <Link to="/talent/quick_disable">quick disable</Link>, <Link to="/talent/quick_disguise">quick disguise</Link>, <Link to="/talent/quick_trapsmith">quick trapsmith</Link>, <Link to="/talent/resiliency">resiliency</Link>, <Link to="/talent/rogue_crawl">rogue crawl</Link>, <Link to="/talent/rope_master">rope master</Link>, <Link to="/talent/stand_up">stand up</Link>, <Link to="/talent/strong_stroke">strong stroke</Link>, <Link to="/talent/terrain_mastery">terrain mastery</Link>, <Link to="/talent/trap_spotter">trap spotter</Link>, or <Link to="/talent/wall_scramble">wall scramble</Link>.</p>
<p>Any talent effects based on rogue level use the investigator's class level. If the rogue talent has a prerequisite (such as the <em>major magic</em> rogue talent requiring the <em>minor magic</em> talent), the investigator must fulfill the prerequisite before selecting that rogue talent.</p>
</Pair>
<Pair title="Special">This talent can be selected multiple times; each time, it grants the investigator a new rogue talent.</Pair>
</Ability>
</>};
const _scry_slip = {title: "Scry Slip", jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 27</Link></p>
<Ability id="scry-slip-su" icon={["armor-upgrade"]}>
<Pair single id="scry-slip-su">Scry Slip (Su)</Pair>
<Pair title="Ability">Whenever an investigator with this talent is targeted by a scrying effect that allows a Will save, the caster of the divination must succeed at a caster level check (DC = 15 + the investigator's class level). This talent wards the investigator and any objects she is holding or carrying.</Pair>
</Ability>
</>};
const _scrying_familiarity = {title: "Scrying Familiarity", jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 2</Link></p>
<Ability id="scrying-familiarity-ex" icon={["rolling-dices","armor-upgrade","upgrade"]}>
<Pair single id="scrying-familiarity-ex">Scrying Familiarity (Ex)</Pair>
<Pair title="Ability">You are well acquainted with scrying sensors. You can roll twice and take the better result on saving throws against divination (scrying) spells and effects, on <Link to="/skill/perception">Perception</Link> checks to notice scrying sensors, and on caster level checks to overcome spell resistance when you use a scrying spell or effect.</Pair>
<Pair title="Special">If you notice a magical sensor, you can attempt a <Link to="/skill/stealth">Stealth</Link> check opposed by the caster's caster level check to avoid being detected by the sensor.</Pair>
</Ability>
</>};
const _spell_storing = {title: "Spell Storing", jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 7</Link></p>
<Ability id="spell-storing-su" icon={["magic-swirl"]}>
<Pair single id="spell-storing-su">Spell Storing (Su)</Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/use_magic_device">Use Magic Device</Link></Pair>
<Pair title="Ability">The investigator can store within himself a single targeted harmless spell of up to 2nd level. The spell must have a casting time of 1 standard action. Anytime a spell that meets these conditions is cast on the investigator, and he does not already have a spell stored, he can choose to store it rather than have it take effect immediately. Anytime afterward, as a <strong className="hl">standard action</strong>, the investigator can have the spell take effect (acting in all ways as if it had just been cast on him).</Pair>
</Ability>
</>};
const _the_whole_time = {title: "The Whole Time", jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 7</Link></p>
<Ability id="the-whole-time-su" icon={["stairs-goal","magic-swirl","armor-upgrade"]}>
<Pair single id="the-whole-time-su" flavor={<>Mercenaries in the employ of the <Link to="/rule/aspis_consortium">Aspis Consortium</Link> often use wands of <Link to="/spell/invisibility">invisibility</Link> to attack protected targets, then blend into the crowd to escape or disguise the source of the next attack.</>}>The Whole Time (Su)</Pair>
<Pair title="Ability">An investigator with this ability is practiced at attacking from magical concealment. He can use <Link to="/misc/spell_trigger">spell trigger</Link> and <Link to="/misc/spell_completion">spell completion</Link> items as if the following spells were on a spell list to which he has access: <Link to="/spell/greater_invisibility">greater invisibility</Link>, <em>invisibility,</em> and <Link to="/spell/vanish">vanish</Link></Pair>
<Pair title="Free Action">Additionally, if the investigator becomes visible as a result of a weapon or spell attack, he can sheathe his weapon and instantly adopt a neutral posture. With a successful <Link to="/skill/bluff">Bluff</Link> or <Link to="/skill/disguise">Disguise</Link> check (opposed by witnesses' <Link to="/skill/sense_motive">Sense Motive</Link> or <Link to="/skill/perception">Perception</Link> checks, whichever is higher), there is no obvious sign that the investigator is the source of the attack (though a lack of any other reasonable candidate can still lead observers to draw the correct conclusion).</Pair>
</Ability>
</>};
const _unbalancing_trick = {title: "Unbalancing Trick", jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 9</Link></p>
<Ability id="unbalancing-trick-ex" icon={["stairs-goal"]}>
<Pair single id="unbalancing-trick-ex">Unbalancing Trick (Ex)</Pair>
<Pair title="Ability">The investigator gains <Link to="/feat/improved_trip">Improved Trip</Link> as a bonus feat, even if she does not meet the prerequisites.</Pair>
<Pair title="At 6th Level">She is treated as if she meets all the prerequisites of <Link to="/feat/greater_trip">Greater Trip</Link> (although she must take the feat as normal to gain its benefits).</Pair>
</Ability>
</>};
export default {not_found:_not_found,blinding_strike:_blinding_strike,confusing_strike:_confusing_strike,deafening_strike:_deafening_strike,domino_effect:_domino_effect,iconclastic_strike:_iconclastic_strike,numerical_strike:_numerical_strike,greater_numerical_strike:_greater_numerical_strike,masterful_numerical_strike:_masterful_numerical_strike,prolonged_study:_prolonged_study,repositioning_strike:_repositioning_strike,sapping_offensive:_sapping_offensive,sickening_offensive:_sickening_offensive,silencing_strike:_silencing_strike,slowing_strike:_slowing_strike,stealing_strike:_stealing_strike,timed_strike:_timed_strike,toppling_strike:_toppling_strike,twilight_talon_improvisation:_twilight_talon_improvisation,didactic_strike:_didactic_strike,quick_study:_quick_study,studied_defense:_studied_defense,amazing_inspiration:_amazing_inspiration,applied_engineering:_applied_engineering,atheist_inspiration:_atheist_inspiration,chroniclers_insight:_chroniclers_insight,combat_inspiration:_combat_inspiration,greater_combat_inspiration:_greater_combat_inspiration,eidetic_recollection:_eidetic_recollection,empathy:_empathy,expanded_inspiration:_expanded_inspiration,rapid_perception:_rapid_perception,hidden_agendas:_hidden_agendas,inspirational_expertise:_inspirational_expertise,sustained_inspirational_expertise:_sustained_inspirational_expertise,inspired_alertness:_inspired_alertness,inspired_intelligence:_inspired_intelligence,inspired_intimidator:_inspired_intimidator,tenacious_inspiration:_tenacious_inspiration,unconventional_inspiration:_unconventional_inspiration,underworld_inspiration:_underworld_inspiration,innocent_facade:_innocent_facade,alchemist_discovery:_alchemist_discovery,anathema:_anathema,greater_anathema:_greater_anathema,false_spellcaster:_false_spellcaster,lingering_venom:_lingering_venom,numerical_alchemy:_numerical_alchemy,greater_numerical_alchemy:_greater_numerical_alchemy,castling:_castling,device_talent:_device_talent,effortless_aid:_effortless_aid,eldritch_conduit:_eldritch_conduit,extra_earthcraft:_extra_earthcraft,favored_beat:_favored_beat,fortified_position:_fortified_position,graceful_athlete:_graceful_athlete,item_lore:_item_lore,just_a_face_in_the_crowd:_just_a_face_in_the_crowd,occult_dungeoneer:_occult_dungeoneer,one_of_those_faces:_one_of_those_faces,perceptive_tracking:_perceptive_tracking,rogue_talent:_rogue_talent,scry_slip:_scry_slip,scrying_familiarity:_scrying_familiarity,spell_storing:_spell_storing,the_whole_time:_the_whole_time,unbalancing_trick:_unbalancing_trick}