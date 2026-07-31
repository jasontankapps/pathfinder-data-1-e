import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested ki power.</p>
</>};
const _abundant_step = {title: "Abundant Step", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 16</Link></p>
<Ability id="abundant-step-su" icon={["magic-swirl"]}>
<Pair single id="abundant-step-su">Abundant Step (Su)</Pair>
<Pair title="Prerequisites">8th-level monk</Pair>
<Pair title="Move-Equivalent Action">A monk with this ki power can slip magically between spaces, as if using the spell <Link to="/spell/dimension_door">dimension door</Link>. Using this ability consumes 2 ki points. The monk's caster level for this effect is equal to his monk level. He cannot take other creatures with him when he uses this ability.</Pair>
</Ability>
</>};
const _action_before_thought = {title: "Action Before Thought", jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 20</Link></p>
<Ability id="action-before-thought-ex" icon={["rolling-dices"]}>
<Pair single id="action-before-thought-ex">Action Before Thought (Ex)</Pair>
<Pair title="Prerequisites">6th-level monk</Pair>
<Pair title="Free Action">A monk with this ability can spend 2 ki points as part of rolling initiative to roll twice on the initiative check and take the higher result.</Pair>
</Ability>
</>};
const _breaking_down_koan = {title: "Breaking-Down Koan", jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 20</Link></p>
<Ability id="breaking-down-koan-su" icon={["armor-downgrade"]}>
<Pair single id="breaking-down-koan-su">Breaking-Down Koan (Su)</Pair>
<Pair title="Prerequisites">8th-level monk</Pair>
<Pair title="Swift Action">A monk with this ability can spend 1 ki point to present a paradox, riddle, or complicated question to a creature within 30 feet. The creature must succeed at a Will save (DC = 10 + 1/2 the monk's level + his Wisdom modifier) or be <Link to="/misc/confused">confused</Link> for 1 round.</Pair>
<Pair title="Special">This is a mind-affecting, language-dependent effect.</Pair>
</Ability>
</>};
const _building_up_koan = {title: "Building-Up Koan", jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 20</Link></p>
<Ability id="building-up-koan-su" icon={["armor-upgrade","upgrade","broken-shield"]}>
<Pair single id="building-up-koan-su">Building-Up Koan (Su)</Pair>
<Pair title="Prerequisites">8th-level monk</Pair>
<Pair title="Swift Action">A monk with this ability can spend 2 ki points to ask himself a koan, which he then tries to answer. The monk must attempt a Will save (DC 15 + 1/2 the monk's level). If successful, he gains an insight bonus equal to his Wisdom modifier to AC and on attack rolls, saving throws, skill checks and until the end of the round. If he fails, the monk is instead <Link to="/misc/confused">confused</Link> for 1 round.</Pair>
<Pair title="Special">This is a mind-affecting, language-dependent effect. A character who can't become confused can't benefit from this ability.</Pair>
</Ability>
</>};
const _master_thought_koan = {title: "Master-Thought Koan", jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 20</Link></p>
<Ability id="master-thought-koan-su" icon={["upgrade"]}>
<Pair single id="master-thought-koan-su">Master-Thought Koan (Su)</Pair>
<Pair title="Prerequisites">12th-level monk, either <Link to="/kipower/breaking_down_koan">breaking-down koan</Link> or <Link to="/kipower/building_up_koan">building-up koan</Link></Pair>
<Pair title="Ability">A monk with this ability can spend an additional 2 ki points when using either the <em>breaking-down koan</em> or <em>building-up koan</em> ki powers. When combined with <em>master-thought koan, breaking-down koan</em> affects a number of characters of your choice within 30 feet equal to the monk's wisdom modifier. When combined with <em>master-thought koan, building-up koan</em> can be used on an ally within 30 feet.</Pair>
</Ability>
</>};
const _diamond_body = {title: "Diamond Body", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 16</Link></p>
<Ability id="diamond-body-su" icon={["armor-upgrade"]}>
<Pair single id="diamond-body-su">Diamond Body (Su)</Pair>
<Pair title="Prerequisites">8th-level monk</Pair>
<Pair title="Ability">By spending 1 ki point, a monk with this power can remove one toxin from his body as if using <Link to="/spell/neutralize_poison">neutralize poison</Link>, using his monk level as his caster level. He can remove only one poison in this way per use of this ability.</Pair>
</Ability>
</>};
const _cobra_breath = {title: "Cobra Breath", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 16</Link></p>
<Ability id="cobra-breath-su" icon={["smoking-finger"]}>
<Pair single id="cobra-breath-su">Cobra Breath (Su)</Pair>
<Pair title="Prerequisites">12th-level monk, <Link to="/kipower/diamond_body">diamond body</Link></Pair>
<Pair title="Ability">Whenever a monk with this ki power uses <em>diamond body</em> to neutralize a poison, he can instead release that poison as a ranged touch attack against a single foe within 30 feet. If the attack hits, the foe must succeed at a saving throw (using the poison's original DC) or suffer the poison's effects, even if it was not originally a contact poison.</Pair>
</Ability>
</>};
const _diamond_mind = {title: "Diamond Mind", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 16</Link></p>
<Ability id="diamond-mind-su" icon={["armor-upgrade"]}>
<Pair single id="diamond-mind-su">Diamond Mind (Su)</Pair>
<Pair title="Prerequisites">6th-level monk</Pair>
<Pair title="Swift Action">By spending 1 ki point, a monk with this power can suppress a fear effect affecting him as if using <Link to="/spell/remove_fear">remove fear</Link>, using his monk level as his caster level.</Pair>
<Pair title="Special">He can spend 2 ki points to activate this ability even when <Link to="/misc/frightened">frightened</Link> or <Link to="/misc/panicked">panicked</Link>.</Pair>
</Ability>
</>};
const _diamond_resilience = {title: "Diamond Resilience", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 16</Link></p>
<Ability id="diamond-resilience-ex" icon={["armor-upgrade"]}>
<Pair single id="diamond-resilience-ex">Diamond Resilience (Ex)</Pair>
<Pair title="Prerequisites">12th-level monk</Pair>
<Pair title="Swift Action">By spending 1 ki point, the monk gains DR 2/-.</Pair>
<Pair title="At 16th Level">The damage reduction increases to 4/-.</Pair>
<Pair title="At 19th Level">It increases to DR 6/-.</Pair>
<Pair title="Special">This DR lasts for 1 minute.</Pair>
</Ability>
</>};
const _diamond_soul = {title: "Diamond Soul", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 16</Link></p>
<Ability id="diamond-soul-ex" icon={["armor-upgrade"]}>
<Pair single id="diamond-soul-ex">Diamond Soul (Ex)</Pair>
<Pair title="Prerequisites">12th-level monk</Pair>
<Pair title="Swift Action">A monk can spend 2 ki points to gain spell resistance equal to his monk level + 10. This spell resistance lasts for a number of rounds equal to the monk's level.</Pair>
</Ability>
</>};
const _ki_volley = {title: "Ki Volley", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 18</Link></p>
<Ability id="ki-volley-su" icon={["armor-upgrade","magic-swirl"]}>
<Pair single id="ki-volley-su">Ki Volley (Su)</Pair>
<Pair title="Prerequisites">16th-level monk, <Link to="/kipower/diamond_soul">diamond soul</Link></Pair>
<Pair title="Immediate Action">When a targeted spell or spell-like ability fails to overcome the monk's spell resistance from <em>diamond soul,</em> he can spend 2 ki points to send that spell back at its caster as <Link to="/spell/spell_turning">spell turning</Link>.</Pair>
</Ability>
</>};
const _elemental_fury = {title: "Elemental Fury", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 16</Link></p>
<Ability id="elemental-fury-su" icon={["mailed-fist","upgrade"]}>
<Pair single id="elemental-fury-su">Elemental Fury (Su)</Pair>
<Pair title="Prerequisites">6th-level monk</Pair>
<Pair title="Choice">A monk who selects this ki power must select one type of energy: acid, cold, electricity, or fire. Once this choice is made, it cannot be changed.</Pair>
<Pair title="Swift Action">The monk can expend 1 ki point to imbue his natural attacks with the chosen energy, causing them to deal 1d6 points of damage of the chosen type for a number of rounds equal to 1/2 his monk level.</Pair>
</Ability>
</>};
const _elemental_burst = {title: "Elemental Burst", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 16</Link></p>
<Ability id="elemental-burst-su" icon={["tornado-discs"]}>
<Pair single id="elemental-burst-su">Elemental Burst (Su)</Pair>
<Pair title="Prerequisites">18th-level monk, <Link to="/kipower/elemental_fury">elemental fury</Link></Pair>
<Pair title="Ability">A monk with this ability can spend 4 ki points to unleash a gout of energy in a 30-foot cone. Creatures within the cone take 20d6 points of damage of the same type as the monk's <em>elemental fury</em> ki power. A Reflex save (DC = 10 + 1/2 the monk's level + his Wisdom modifier) halves the damage.</Pair>
</Ability>
</>};
const _empty_body = {title: "Empty Body", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 16</Link></p>
<Ability id="empty-body-su" icon={["magic-swirl"]}>
<Pair single id="empty-body-su">Empty Body (Su)</Pair>
<Pair title="Move-Equivalent Action">A monk with this ki power gains the ability to assume an ethereal state for 1 minute as though using the spell <Link to="/spell/etherealness">etherealness</Link>, using his monk level as his caster level. Using this ability consumes 3 points from the monk's ki pool.</Pair>
<Pair title="Special">This ability affects only the monk and cannot be used to make other creatures ethereal.</Pair>
</Ability>
</>};
const _feather_balance = {title: "Feather Balance", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 17</Link></p>
<Ability id="feather-balance-ex" icon={["upgrade"]}>
<Pair single id="feather-balance-ex">Feather Balance (Ex)</Pair>
<Pair title="Swift Action">A monk with this ability can spend 1 ki point to achieve perfect balance. While this is active, the monk treats any <Link to="/skill/acrobatics">Acrobatics</Link> attempt made to balance as if he had rolled a 20. This ability lasts for 1 minute.</Pair>
</Ability>
</>};
const _light_steps = {title: "Light Steps", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 18</Link></p>
<Ability id="light-steps-ex" icon={["upgrade"]}>
<Pair single id="light-steps-ex" flavor="A monk with this ki power can move effortlessly across nearly any surface.">Light Steps (Ex)</Pair>
<Pair title="Prerequisites">8th-level monk, <Link to="/kipower/feather_balance">feather balance</Link></Pair>
<Pair title="Ability">Whenever the monk activates his <em>feather balance</em> ki power, he can also ignore all <Link to="/rule/difficult_terrain">difficult terrain</Link>. In addition, while active, he can cross any solid surface, even if it would normally not support his weight. This does not allow him to walk on liquids.</Pair>
</Ability>
</>};
const _floating_breath = {title: "Floating Breath", jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 31</Link></p>
<Ability id="floating-breath-su" icon={["magic-swirl"]}>
<Pair single id="floating-breath-su">Floating Breath (Su)</Pair>
<Pair title="Prerequisites">8th-level monk</Pair>
<Pair title="Swift Action">A monk with this ki power can spend 1 ki point to balance on the air, hovering in place, until the end of his next turn. This power does not allow the monk to fly or otherwise move into the air; he must jump or use some other ability to reach his position. This otherwise functions as <Link to="/spell/air_walk">air walk</Link>.</Pair>
</Ability>
</>};
const _formless_mastery = {title: "Formless Mastery", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 17</Link></p>
<Ability id="formless-mastery-ex" icon={["armor-upgrade","upgrade"]}>
<Pair single id="formless-mastery-ex" flavor="A monk with this ability varies his styles, never repeating the same move twice and capitalizing on the weaknesses of an opponent's style.">Formless Mastery (Ex)</Pair>
<Pair title="Prerequisites">7th-level monk</Pair>
<Pair title="Immediate Action">As long as he does not possess any style feat, the monk can spend 1 ki point to gain the following against opponents in the stance of a style feat: a +4 dodge bonus to AC, a +4 circumstance bonus on attack rolls, and a bonus equal to his monk level on damage rolls. These bonuses last until the end of the monk's next turn (or his current turn if he uses this ability on his own turn).</Pair>
<Pair title="Special">The monk can activate this ability and the <Link to="/kipower/furious_defense">furious defense</Link> ki power with the same immediate action for a total cost of 3 ki points.</Pair>
</Ability>
</>};
const _freedom_of_movement = {title: "Freedom of Movement", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 31</Link></p>
<Ability id="freedom-of-movement-su" icon={["magic-swirl"]}>
<Pair single id="freedom-of-movement-su">Freedom of Movement (Su)</Pair>
<Pair title="Prerequisites">8th-level monk</Pair>
<Pair title="Swift Action">A monk with this ability can spend 1 ki point to gain the effects of <Link to="/spell/freedom_of_movement">freedom of movement</Link> for 1 round.</Pair>
</Ability>
</>};
const _furious_defense = {title: "Furious Defense", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 17</Link></p>
<Ability id="furious-defense-ex" icon={["armor-upgrade"]}>
<Pair single id="furious-defense-ex">Furious Defense (Ex)</Pair>
<Pair title="Prerequisites">7th-level monk</Pair>
<Pair title="Immediate Action">By spending 1 ki point, a monk with this ki power can grant himself a +4 dodge bonus to AC until the end of his next turn.</Pair>
<Pair title="Special">The monk can activate this ability and the <Link to="/kipower/formless_mastery">formless mastery</Link> ki power with the same immediate action for a total cost of 3 ki points.</Pair>
</Ability>
</>};
const _high_jump = {title: "High Jump", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 17</Link></p>
<Ability id="high-jump-ex" icon={["upgrade"]}>
<Pair single id="high-jump-ex">High Jump (Ex)</Pair>
<Pair title="Passive Ability">A monk with this ki power adds his level as a bonus on all <Link to="/skill/acrobatics">Acrobatics</Link> checks to jump, both for vertical jumps and horizontal jumps. In addition, he always counts as having a running start when attempting Acrobatics checks to jump.</Pair>
<Pair title="Swift Action">By spending 1 ki point, the monk gains a +20 bonus on Acrobatics checks to jump for 1 round.</Pair>
</Ability>
</>};
const _wind_jump = {title: "Wind Jump", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 18</Link></p>
<Ability id="wind-jump-su" icon={["stairs-goal"]}>
<Pair single id="wind-jump-su">Wind Jump (Su)</Pair>
<Pair title="Prerequisites">8th-level monk, <Link to="/kipower/high_jump">high jump</Link></Pair>
<Pair title="Move-Equivalent Action">A monk with this ki power can spend 1 ki point to grant himself a fly speed (with perfect maneuverability) equal to his base land speed. He must end his movement each round on solid ground (or some other surface that can support his weight) or fall as normal. Once activated, this ability lasts for 1 minute.</Pair>
</Ability>
</>};
const _improvised_weapon_proficiency = {title: "Improvised Weapon Proficiency", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 31</Link></p>
<Ability id="improvised-weapon-proficiency-ex-su" icon={["upgrade"]}>
<Pair single id="improvised-weapon-proficiency-ex-su">Improvised Weapon Proficiency (Ex, Su)</Pair>
<Pair title="Passive Ability">A monk with this ability does not take a penalty on attack rolls for using an <Link to="/misc/improvised_weapon">improvised weapon</Link>.</Pair>
<Pair title="Ability">By spending 1 ki point, the monk can fight with a <Link to="/misc/broken">broken</Link> weapon without taking any penalties on attack rolls or damage rolls for 1 round.</Pair>
</Ability>
</>};
const _insightful_wisdom = {title: "Insightful Wisdom", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 17</Link></p>
<Ability id="insightful-wisdom-su" icon={["shield-reflect"]}>
<Pair single id="insightful-wisdom-su">Insightful Wisdom (Su)</Pair>
<Pair title="Prerequisites">8th-level monk</Pair>
<Pair title="Immediate Action">A monk with this ability can spend 2 ki points to give another ally within 30 feet just the right word of advice to prevent disaster. If the ally can hear the monk, she can reroll a single attack roll or saving throw. The ally must take the second result, even if it is worse.</Pair>
</Ability>
</>};
const _ki_blocker = {title: "Ki Blocker", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 17</Link></p>
<Ability id="ki-blocker-su" icon={["armor-downgrade"]}>
<Pair single id="ki-blocker-su">Ki Blocker (Su)</Pair>
<Pair title="Prerequisites">10th-level monk</Pair>
<Pair title="Free Action"><p>A monk with this ability can spend 1 ki point before making an unarmed strike against a foe. If the attack hits, the monk can interrupt the target's flow of ki.</p>
<p>If the monk successfully damages the target of his attack, that opponent's cost to activate abilities with ki increases by 1 ki point for 1 hour.</p>
</Pair>
<Pair title="Special">If the monk spends 2 ki points, he can use this ability to affect the target's <em>arcane pool, arcane reservoir, grit points, inspiration,</em> or <em>panache points</em> instead of its ki pool. The effects of this ability do not stack, but multiple hits increase the duration by 1 hour for each hit.</Pair>
</Ability>
</>};
const _ki_guardian = {title: "Ki Guardian", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 17</Link></p>
<Ability id="ki-guardian-su" icon={["shield-reflect"]}>
<Pair single id="ki-guardian-su">Ki Guardian (Su)</Pair>
<Pair title="Prerequisites">6th-level monk</Pair>
<Pair title="Immediate Action"><p>Before he rolls a saving throw against a targeted effect that also targets other allies or an area effect whose area includes other allies, a monk with this ability can spend any number of ki points and designate a number of adjacent allies equal to the number of ki points spent.</p>
<p>The monk rolls one saving throw for each designated ally, using his bonus instead of the ally's. For each successful saving throw, the corresponding ally treats the effect as if that ally had succeeded at the saving throw, and for each saving throw failed, the corresponding ally treats the effect as if that ally had failed the saving throw.</p>
<p>If the monk fails any of the saving throws (including his own original saving throw), the monk treats the effect as if he had failed the saving throw.</p>
</Pair>
</Ability>
</>};
const _ki_meditation = {title: "Ki Meditation", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 31</Link></p>
<Ability id="ki-meditation-su" icon={["upgrade"]}>
<Pair single id="ki-meditation-su">Ki Meditation (Su)</Pair>
<Pair title="Prerequisites"><Link to="/feat/combat_meditation">Combat Meditation</Link></Pair>
<Pair title="Full-Round Action">A monk with this ability can spend 2 ki points to meditate, as if using Combat Meditation. Alternatively, he can spend 4 ki points to meditate as a <strong className="hl">move action</strong> instead.</Pair>
<Pair title="Special">Using these ki points does not count as one of the monk's daily uses of Combat Meditation, but it grants him the usual benefits he would gain from his meditation feats for doing so.</Pair>
</Ability>
</>};
const _ki_metabolism = {title: "Ki Metabolism", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 17</Link></p>
<Ability id="ki-metabolism-su" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="ki-metabolism-su" flavor="A monk with this ability uses his ki to control his metabolism.">Ki Metabolism (Su)</Pair>
<Pair title="Passive Ability">As long as he has at least 1 point remaining in his ki pool, the monk needs to eat and drink only 1/4 as often as normal, needs only 2 hours of sleep each night (including to replenish his ki pool), and can <Link to="/misc/hold_his_breath">hold his breath</Link> for up to 1 hour per point of Constitution.</Pair>
<Pair title="Move-Equivalent Action">He can spend 1 ki point to enter a state of suspended animation, falling unconscious and appearing dead to all senses. At the time he enters this state, he indicates a preset period of time or a triggering condition, after which he awakens.</Pair>
</Ability>
</>};
const _ki_mount = {title: "Ki Mount", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 17</Link></p>
<Ability id="ki-mount-su" icon={["remedy"]}>
<Pair single id="ki-mount-su">Ki Mount (Su)</Pair>
<Pair title="Prerequisites">6th-level monk</Pair>
<Pair title="Standard Action">A monk with this ability can spend 1 ki point to grant 2 <Link to="/rule/temporary_hit_points">temporary hit points</Link> per monk level he possesses to his mount for 1 hour per monk level. As long as the monk and his mount are adjacent or the monk is mounted, the mount shares the benefits of whichever of the <em>AC bonus, evasion, high jump, improved evasion, ki strike, perfect self,</em> and <em>still mind</em> abilities the monk possesses.</Pair>
</Ability>
</>};
const _ki_range = {title: "Ki Range", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 17</Link></p>
<Ability id="ki-range-su" icon={["bowman","upgrade"]}>
<Pair single id="ki-range-su">Ki Range (Su)</Pair>
<Pair title="Swift Action">A monk with this ability can spend 1 ki point to increase the range increment of any thrown monk weapon by 20 feet.</Pair>
<Pair title="Special">Apply this benefit before doubling the range increment with the <Link to="/feat/far_shot">Far Shot</Link> feat.</Pair>
</Ability>
</>};
const _ki_sunder = {title: "Ki Sunder", jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 20</Link></p>
<Ability id="ki-sunder-ex" icon={["upgrade"]}>
<Pair single id="ki-sunder-ex">Ki Sunder (Ex)</Pair>
<Pair title="Free Action">A monk with this ability can spend 1 ki point when attempting a <Link to="/rule/sunder">sunder</Link> combat maneuver check to add his monk level as a bonus to the damage roll.</Pair>
</Ability>
</>};
const _bare_hand_block = {title: "Bare-Hand Block", jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 20</Link></p>
<Ability id="bare-hand-block-ex" icon={["mailed-fist"]}>
<Pair single id="bare-hand-block-ex">Bare-Hand Block (Ex)</Pair>
<Pair title="Prerequisites">8th-level monk, <Link to="/kipower/ki_sunder">ki sunder</Link></Pair>
<Pair title="Immediate Action">A monk with this ability can spend 1 ki point when attacked with a manufactured weapon to attempt an unarmed <Link to="/rule/sunder">sunder</Link> combat maneuver check against it. If he successfully sunders the weapon and grants it the <Link to="/misc/broken">broken</Link> condition, the attack deals no damage.</Pair>
<Pair title="Special">He can spend an additional 1 ki point when using this ability to activate <em>ki sunder</em> as a <strong className="hl">free action</strong>.</Pair>
</Ability>
</>};
const _ki_visions = {title: "Ki Visions", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 17</Link></p>
<Ability id="ki-visions-su" icon={["stairs-goal"]}>
<Pair single id="ki-visions-su" flavor="A monk with this ability often sees visions of spirits or hears the voice of his departed mentor in his dreams.">Ki Visions (Su)</Pair>
<Pair title="Prerequisites">10th-level monk</Pair>
<Pair title="Ability">On any given night during which the monk dreams, he can use this ability to gain the benefits of a <Link to="/spell/divination">divination</Link>. If he does, he spends 2 ki points from the next day's total.</Pair>
</Ability>
</>};
const _one_touch = {title: "One Touch", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 18</Link></p>
<Ability id="one-touch-ex" icon={["magic-palm"]}>
<Pair single id="one-touch-ex">One Touch (Ex)</Pair>
<Pair title="Prerequisites">12th-level monk</Pair>
<Pair title="Standard Action">As long as he has at least 1 point remaining in his ki pool, a monk with this power can make an unarmed strike against a foe as a touch attack. He adds 1/2 his monk level as a bonus on the damage roll.</Pair>
<Pair title="Special">He can spend 1 ki point to double this bonus for that attack.</Pair>
</Ability>
</>};
const _qinggong_power = {title: "Qinggong Power", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 18</Link></p>
<Ability id="qinggong-power-su" icon={["stairs-goal"]}>
<Pair single id="qinggong-power-su">Qinggong Power (Su)</Pair>
<Pair title="Ability">A monk with this power selects any of the <Link to="/arc-monk/qinggong_monk">qinggong monk</Link> ki powers for which he qualifies based on his monk level.</Pair>
<Pair title="Special">A monk can select this ability multiple times. Each time, he must select a different qinggong monk ki power.</Pair>
</Ability>
</>};
const _quivering_palm = {title: "Quivering Palm", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 18</Link></p>
<Ability id="quivering-palm-su" icon={["armor-downgrade"]}>
<Pair single id="quivering-palm-su">Quivering Palm (Su)</Pair>
<Pair title="Prerequisites">16th-level monk</Pair>
<Pair title="Standard Action"><p>A monk can set up vibrations within the body of another creature that can thereafter be fatal if the monk so desires. Using this ability costs 4 ki points, and the monk must announce his intent to use this ability (and spend the ki points) before making the attack roll.</p>
<p>Creatures immune to critical hits cannot be affected. Otherwise, if the attack hits and the target takes damage from the blow, the <em>quivering palm</em> attack succeeds. Thereafter, the monk can try to slay the victim at any time within a number of days equal to his monk level. To make such an attempt, the monk merely wills the target to die (a <strong className="hl">free action</strong>); unless the target succeeds at a Fortitude saving throw (DC = 10 + 1/2 the monk's level + the monk's Wisdom modifier), it dies.</p>
<p>If the saving throw is successful, the target is no longer in danger from that particular <em>quivering palm</em> attack, but it can still be affected by another one at a later time.</p>
</Pair>
<Pair title="Special">A monk can have no more than one <em>quivering palm</em> in effect at one time. If a monk uses <em>quivering palm</em> while another is still in effect, the previous one is negated.</Pair>
</Ability>
</>};
const _racing_current = {title: "Racing Current", jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 31</Link></p>
<Ability id="racing-current-su" icon={["magic-swirl"]}>
<Pair single id="racing-current-su">Racing Current (Su)</Pair>
<Pair title="Prerequisites">6th-level monk</Pair>
<Pair title="Move-Equivalent Action">A monk with this ki power can create a wave to help him maneuver allies upon the battlefield, as if using the spell <Link to="/spell/slipstream">slipstream</Link>. Using this ability costs 2 ki points, and the ability remains in effect for 1 minute.</Pair>
</Ability>
</>};
const _slow_fall = {title: "Slow Fall", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 18</Link></p>
<Ability id="slow-fall-su" icon={["armor-upgrade"]}>
<Pair single id="slow-fall-su">Slow Fall (Su)</Pair>
<Pair title="Ability">A monk within arm's reach of a wall can use it to slow his descent by expending 1 ki point. When he uses this ability, he takes no damage from the fall (as if using <Link to="/spell/feather_fall">feather fall</Link>), but he must be adjacent to a wall for the length of the fall (although this can be used to reduce the damage from a fall if only part of it is adjacent to a wall).</Pair>
</Ability>
</>};
const _sudden_speed = {title: "Sudden Speed", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 18</Link></p>
<Ability id="sudden-speed-su" icon={["upgrade"]}>
<Pair single id="sudden-speed-su">Sudden Speed (Su)</Pair>
<Pair title="Swift Action">A monk with this ki power can spend 1 ki point to grant himself a sudden burst of speed. This increases the monk's base land speed by 30 feet for 1 minute.</Pair>
</Ability>
</>};
const _branch_runner = {title: "Branch Runner", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 30</Link></p>
<Ability id="branch-runner-ex-su" icon={["upgrade"]}>
<Pair single id="branch-runner-ex-su">Branch Runner (Ex, Su)</Pair>
<Pair title="Prerequisites"><Link to="/kipower/sudden_speed">Sudden speed</Link></Pair>
<Pair title="Passive Ability">A monk with this ability adds half the base speed bonus from his <em>fast movement</em> ability to his racial climb speed. In addition, when he uses the <em>sudden speed</em> ki power, he adds the base speed bonus from that ki power to his racial climb speed for 1 round.</Pair>
</Ability>
</>};
const _ki_hurricane = {title: "Ki Hurricane", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 17</Link></p>
<Ability id="ki-hurricane-ex" icon={["stairs-goal","mailed-fist"]}>
<Pair single id="ki-hurricane-ex">Ki Hurricane (Ex)</Pair>
<Pair title="Prerequisites">10th-level monk, <Link to="/kipower/sudden_speed">sudden speed</Link></Pair>
<Pair title="Full-Round Action">A monk with this ability can move up to twice his speed. At any point in that movement, the monk can spend 1 ki point to make the first attack in his <em>flurry of blows.</em> He can later spend another ki point to make the next attack in his <em>flurry of blows,</em> and so on, until he either stops spending ki points or has exhausted all the attacks from his <em>flurry of blows.</em></Pair>
</Ability>
</>};
const _water_sprint = {title: "Water Sprint", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 18</Link></p>
<Ability id="water-sprint-su" icon={["magic-swirl"]}>
<Pair single id="water-sprint-su">Water Sprint (Su)</Pair>
<Pair title="Prerequisites">6th-level monk</Pair>
<Pair title="Swift Action">A monk with this ki power can spend 1 ki point to gain the ability to walk on water, as if under the effects of <Link to="/spell/water_walk">water walk</Link>. Once activated, this ability lasts for 1 minute per monk level.</Pair>
</Ability>
</>};
const _wholeness_of_body = {title: "Wholeness of Body", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 18</Link></p>
<Ability id="wholeness-of-body-su" icon={["remedy"]}>
<Pair single id="wholeness-of-body-su" flavor="A monk with this ki power can heal his own wounds.">Wholeness of Body (Su)</Pair>
<Pair title="Ability">By spending 2 ki points, he can heal an amount of damage equal to 1d8 + his monk level.</Pair>
</Ability>
</>};
const _zephyr_blow = {title: "Zephyr Blow", jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 31</Link></p>
<Ability id="zephyr-blow-su" icon={["magic-swirl"]}>
<Pair single id="zephyr-blow-su">Zephyr Blow (Su)</Pair>
<Pair title="Standard Action">By spending 1 ki point, a monk with this power can disrupt the wind and create a sharp blast of air, as if using the spell <Link to="/spell/gust_of_wind">gust of wind</Link>. The monk's caster level for this effect is equal to his monk level.</Pair>
</Ability>
</>};
export default {not_found:_not_found,abundant_step:_abundant_step,action_before_thought:_action_before_thought,breaking_down_koan:_breaking_down_koan,building_up_koan:_building_up_koan,master_thought_koan:_master_thought_koan,diamond_body:_diamond_body,cobra_breath:_cobra_breath,diamond_mind:_diamond_mind,diamond_resilience:_diamond_resilience,diamond_soul:_diamond_soul,ki_volley:_ki_volley,elemental_fury:_elemental_fury,elemental_burst:_elemental_burst,empty_body:_empty_body,feather_balance:_feather_balance,light_steps:_light_steps,floating_breath:_floating_breath,formless_mastery:_formless_mastery,freedom_of_movement:_freedom_of_movement,furious_defense:_furious_defense,high_jump:_high_jump,wind_jump:_wind_jump,improvised_weapon_proficiency:_improvised_weapon_proficiency,insightful_wisdom:_insightful_wisdom,ki_blocker:_ki_blocker,ki_guardian:_ki_guardian,ki_meditation:_ki_meditation,ki_metabolism:_ki_metabolism,ki_mount:_ki_mount,ki_range:_ki_range,ki_sunder:_ki_sunder,bare_hand_block:_bare_hand_block,ki_visions:_ki_visions,one_touch:_one_touch,qinggong_power:_qinggong_power,quivering_palm:_quivering_palm,racing_current:_racing_current,slow_fall:_slow_fall,sudden_speed:_sudden_speed,branch_runner:_branch_runner,ki_hurricane:_ki_hurricane,water_sprint:_water_sprint,wholeness_of_body:_wholeness_of_body,zephyr_blow:_zephyr_blow}