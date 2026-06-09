import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _adaptive_shifter = {title: "Adaptive Shifter", jsx: <><h2 id="arc-shifter-adaptive_shifter-adaptive-shifter">Adaptive Shifter</h2>
<p><strong>Sources</strong> <Link to="/source/distant_realms">Distant Realms pg. 12</Link><br/>Rather than emulate other animals entirely, some shifters learn to reshape their forms on the fly in response to a range of stimuli, rarely taking on a new form for longer than necessary to overcome a challenge.</p>
<Ability id="arc-shifter-adaptive_shifter-adaptive-claws-su" icon={["mailed-fist"]}>
<Pair single id="arc-shifter-adaptive_shifter-adaptive-claws-su">Adaptive Claws (Su)</Pair>
<Pair hl title="Alters">Shifter claws</Pair>
<Pair title="Ability">When activating her <em>shifter claws</em> ability in her natural form, an adaptive shifter can instead manifest a single bite attack that deals bludgeoning, piercing, and slashing damage; a gore attack that deals piercing damage; or a tail slap that deals bludgeoning damage. This natural attack otherwise deals damage as the shifter's claws.</Pair>
</Ability>
<Ability id="arc-shifter-adaptive_shifter-reactive-aspect-su" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-shifter-adaptive_shifter-reactive-aspect-su">Reactive Aspect (Su)</Pair>
<Pair hl title="Replaces">Shifter aspect, chimeric aspect, greater chimeric aspect, final aspect</Pair>
<Pair title="Usage">3 + shifter level + Wisdom modifier times/day</Pair>
<Pair title="Ability">An adaptive shifter gains the ability to change parts of her body to avoid harm, gain a physical advantage, or overcome an obstacle. By activating this ability, either as an <strong className="hl">immediate action</strong> or as a <strong className="hl">swift action</strong>, an adaptive shifter gains the benefits of one of her <em>reactive forms</em> until the beginning of her next turn (see below). An adaptive shifter can assume only one <em>reactive form</em> at a time. Activating a new <em>reactive form</em> (or forms) ends all <em>reactive forms</em> currently manifested.</Pair>
<Pair title="At 9th Level">An adaptive shifter gains the benefits of up to two <em>reactive forms</em> whenever she uses this ability.</Pair>
<Pair title="At 14th Level">She can assume up to three forms.</Pair>
<Pair title="At 20th Level">She learns all <em>reactive forms</em> and doubles her effective Wisdom modifier for the purpose of calculating her uses of <em>reactive aspect</em> per day.</Pair>
</Ability>
<Ability id="arc-shifter-adaptive_shifter-reactive-form-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-adaptive_shifter-reactive-form-su">Reactive Form (Su)</Pair>
<Pair title="Ability">An adaptive shifter learns two <em>reactive forms</em> from the list below.</Pair>
<Pair title="At 4th Level">An adaptive shifter learns her 3rd <em>reactive form.</em></Pair>
<Pair title="At 6th Level">An adaptive shifter chooses her 4th <em>reactive form.</em></Pair>
<Pair title="At 8th Level">An adaptive shifter gains her 5th <em>reactive form.</em></Pair>
<Pair title="At 10th Level">An adaptive shifter learns her 6th <em>reactive form.</em></Pair>
<Pair title="At 12th Level">An adaptive shifter chooses her 7th <em>reactive form.</em></Pair>
<Pair title="At 14th Level">An adaptive shifter gains her 8th <em>reactive form.</em></Pair>
<Pair title="At 16th Level">An adaptive shifter learns her 9th <em>reactive form.</em></Pair>
<Pair title="At 18th Level">An adaptive shifter chooses her 10th <em>reactive form.</em></Pair>
<Pair title="At 20th Level">An adaptive shifter gains her 11th <em>reactive form.</em></Pair>
<Pair title="Special">Forms marked with an asterisk (&#42;) are <em>lasting forms.</em> An adaptive shifter can spend two uses of <em>reactive aspect</em> to increase a <em>lasting form's</em> duration to 1 minute. Forms not marked with an asterisk always last only until the beginning of her next turn.</Pair>
</Ability>
<Ability id="arc-shifter-adaptive_shifter-adaptive-defense" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-shifter-adaptive_shifter-adaptive-defense">Adaptive Defense</Pair>
<Pair title="Passive Ability">When assuming this form, the adaptive shifter chooses one saving throw and gains a competence bonus on the selected save equal to her Wisdom modifier.</Pair>
</Ability>
<Ability id="arc-shifter-adaptive_shifter-aligned-adaptation42" extraClasses="subAbility" icon={["magic-swirl","upgrade"]}>
<Pair single id="arc-shifter-adaptive_shifter-aligned-adaptation42">Aligned Adaptation&#42;</Pair>
<Pair title="Passive Ability">When assuming this form, the adaptive shifter chooses one alignment within one step of her own alignment on either the law/chaos axis or the good/evil axis. All spells, effects, and magic items affect the adaptive shifter as though that were her actual alignment.</Pair>
<Pair title="At 10th Level">Her natural weapon attacks overcome damage reduction as if they were weapons of her assumed alignment.</Pair>
</Ability>
<Ability id="arc-shifter-adaptive_shifter-aquatic-form42" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-adaptive_shifter-aquatic-form42">Aquatic Form&#42;</Pair>
<Pair title="Passive Ability">The adaptive shifter gains a swim speed equal to her base speed, and she can breathe underwater.</Pair>
</Ability>
<Ability id="arc-shifter-adaptive_shifter-climbing-form42" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-adaptive_shifter-climbing-form42">Climbing Form&#42;</Pair>
<Pair title="Passive Ability">The adaptive shifter gains a climb speed equal to her base speed.</Pair>
</Ability>
<Ability id="arc-shifter-adaptive_shifter-durable-form" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-shifter-adaptive_shifter-durable-form">Durable Form</Pair>
<Pair title="Prerequisites">8th-level shifter</Pair>
<Pair title="Passive Ability">The adaptive shifter gains DR/adamantine. This DR is equal to 1 + <Link to="/misc/half">half</Link> her skald level.</Pair>
</Ability>
<Ability id="arc-shifter-adaptive_shifter-evasive-form42" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade","upgrade"]}>
<Pair single id="arc-shifter-adaptive_shifter-evasive-form42">Evasive Form&#42;</Pair>
<Pair title="Passive Ability">The adaptive shifter gains <Link to="/umr/compression">compression</Link>, a +4 dodge bonus to her CMD against grapple combat maneuvers, and a competence bonus equal to her Wisdom modifier on Escape Artist checks.</Pair>
</Ability>
<Ability id="arc-shifter-adaptive_shifter-giant-form42" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-shifter-adaptive_shifter-giant-form42">Giant Form&#42;</Pair>
<Pair title="Passive Ability">The adaptive shifter increases in size, as per <Link to="/spell/enlarge_person">enlarge person</Link>.</Pair>
<Pair title="Special">The adaptive shifter can assume this form only as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-shifter-adaptive_shifter-resistant-form42" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-shifter-adaptive_shifter-resistant-form42">Resistant Form&#42;</Pair>
<Pair title="Passive Ability">When assuming this form, the adaptive shifter chooses acid, cold, electricity, fire, or sonic damage. She gains <Link to="/umr/resistance">resistance</Link> to the chosen damage type equal to 5 plus <Link to="/misc/half">half</Link> her level.</Pair>
<Pair title="Special">She can learn this form a second time, increasing the resistance granted to 10 plus her level.</Pair>
</Ability>
<Ability id="arc-shifter-adaptive_shifter-restoring-form" extraClasses="subAbility" icon={["remedy"]}>
<Pair single id="arc-shifter-adaptive_shifter-restoring-form">Restoring Form</Pair>
<Pair title="Passive Ability">The adaptive shifter regains 1d8 hit points.</Pair>
<Pair title="At 4th Level">This increases to 2d8.</Pair>
<Pair title="At 8th Level">This increases to 3d8.</Pair>
<Pair title="At 12th Level">This increases to 4d8.</Pair>
<Pair title="At 16th Level">This increases to 5d8.</Pair>
<Pair title="At 20th Level">This increases to 6d8.</Pair>
<Pair title="Special">The adaptive shifter can assume this form only as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-shifter-adaptive_shifter-scouting-form42" extraClasses="subAbility" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-shifter-adaptive_shifter-scouting-form42">Scouting Form&#42;</Pair>
<Pair title="Passive Ability">The adaptive shifter gains a competence bonus equal to her Wisdom modifier on Stealth checks, and she gains the benefits of the shifter's <em>trackless step</em> ability.</Pair>
<Pair title="At 12th Level">She can use Stealth to hide, even if she does not have cover or concealment (but not if observed).</Pair>
</Ability>
<Ability id="arc-shifter-adaptive_shifter-sensory-form42" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-shifter-adaptive_shifter-sensory-form42">Sensory Form&#42;</Pair>
<Pair title="Passive Ability">The adaptive shifter gains low-light vision and <Link to="/umr/scent">scent</Link>.</Pair>
<Pair title="Special">She can learn this form a second time to also gain darkvision with a range of 60 feet and a competence bonus on Perception checks equal to her Wisdom modifier.</Pair>
</Ability>
<Ability id="arc-shifter-adaptive_shifter-sky-hunter-form42" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-adaptive_shifter-sky-hunter-form42">Sky Hunter Form&#42;</Pair>
<Pair title="Prerequisites">6th-level shifter</Pair>
<Pair title="Passive Ability">The adaptive shifter gains a fly speed equal to her base speed with average maneuverability.</Pair>
<Pair title="Special">She can learn this form a second time, increasing her fly speed by 20 feet and improving her maneuverability to good.</Pair>
</Ability>
<Ability id="arc-shifter-adaptive_shifter-spiked-form42" extraClasses="subAbility" icon={["armor-upgrade","bowman"]}>
<Pair single id="arc-shifter-adaptive_shifter-spiked-form42">Spiked Form&#42;</Pair>
<Pair title="Passive Ability">The adaptive shifter grows spines over her body. Any foe striking her with an unarmed strike or a melee natural weapon takes an amount of piercing damage equal to the base damage of her <em>shifter claws,</em> which ignores any damage reduction her <em>shifter claws</em> would ignore.</Pair>
<Pair title="Special">She can learn this form a second time, allowing her to fling her spines as thrown natural weapons that deal piercing damage, have a range increment of 30 feet, and allow her to make multiple attacks with her spines as part of a full attack; these otherwise deal damage and overcome damage reduction as her <em>shifter claws.</em></Pair>
</Ability>
<Ability id="arc-shifter-adaptive_shifter-sprinting-form42" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-shifter-adaptive_shifter-sprinting-form42">Sprinting Form&#42;</Pair>
<Pair title="Passive Ability">The adaptive shifter's base speed increases by 20 feet.</Pair>
</Ability>
<Ability id="arc-shifter-adaptive_shifter-stretching-form" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-shifter-adaptive_shifter-stretching-form">Stretching Form</Pair>
<Pair title="Passive Ability">The adaptive shifter's reach with natural weapons increases by 5 feet.</Pair>
</Ability>
<Ability id="arc-shifter-adaptive_shifter-lasting-adaptation-su" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-adaptive_shifter-lasting-adaptation-su">Lasting Adaptation (Su)</Pair>
<Pair hl title="Replaces">Wild empathy, track, woodland stride, trackless step</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">An adaptive shifter can spend 1 minute willing her body to adapt in a more enduring way. At the end of the minute, she expends two uses of her <em>reactive aspect</em> and selects one <em>lasting form</em> she knows. She assumes this form and can maintain it until she regains her daily uses of <em>reactive aspect</em> or uses this ability again. This adaptation does not count against the maximum number of forms she can assume at once.</Pair>
<Pair title="At 15th Level">The adaptive shifter can maintain up to two <em>lasting adaptations</em> simultaneously, spending an additional minute and two uses of her <em>reactive aspect</em> each time she assumes a new adaptation.</Pair>
<Pair title="Special">She can select a form that has a minimum level only if her character level is at least 3 higher than the minimum level.</Pair>
</Ability>
<Ability id="arc-shifter-adaptive_shifter-unfettered-wild-shape-su" icon={["magic-swirl"]}>
<Pair single id="arc-shifter-adaptive_shifter-unfettered-wild-shape-su">Unfettered Wild Shape (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Usage">1 time/day per two shifter levels; these times need not be consecutive, but they must be spent in 1-time increments</Pair>
<Pair title="Ability">An adaptive shifter gains the ability to turn into other creatures. This functions as a <Link to="/class/druid">druid's</Link> <em>wild shape</em> ability, except she does not gain the ability to turn into an elemental. The shifter's effective druid level is equal to her shifter level.</Pair>
<Pair title="Special">For abilities that function based on <em>"uses of wild shape,"</em> each hour of unfettered <em>wild shape</em> counts as a use.</Pair>
</Ability>
</>};
const _dragonblood_shifter = {title: "Dragonblood Shifter", jsx: <><h2 id="arc-shifter-dragonblood_shifter-dragonblood-shifter">Dragonblood Shifter</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 5</Link><br/>Dragonblood shifters draw upon the inherent strength and majesty of the true dragons, gaining a measure of their powers from their association.</p>
<Ability id="arc-shifter-dragonblood_shifter-dragon-attacks" icon={["mailed-fist"]}>
<Pair single id="arc-shifter-dragonblood_shifter-dragon-attacks">Dragon Attacks</Pair>
<Pair title="Ability">A shifter that uses <strong className="hl">alternate natural attacks</strong> can choose from Bite (B, P, S), Tail slap (B), or Wing (B).</Pair>
</Ability>
<Ability id="arc-shifter-dragonblood_shifter-draconic-aspect-su" icon={["armor-upgrade","stairs-goal","tornado-discs"]}>
<Pair single id="arc-shifter-dragonblood_shifter-draconic-aspect-su">Draconic Aspect (Su)</Pair>
<Pair hl title="Replaces">Shifter aspect</Pair>
<Pair title="Usage">3 minutes/day + 1 minute per shifter level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Swift Action"><p>A dragonblood shifter can temporarily imbue her body with draconic majesty. When activating this ability, the shifter must select one of the chromatic or metallic dragon types from the table below. Her draconic aspect abilities grant resistances and deal a type of damage based on the chosen dragon type. While shifted into this form, she gains the <Link to="/umr/scent">scent</Link> ability and energy <Link to="/umr/resistance">resistance</Link> 5 against the energy type that corresponds to her selected dragon type.</p>
<ScrollContainer id="arc-shifter-dragonblood_shifter--table-0"><table>
<thead>
<tr>
<th>Dragon Type</th>
<th>Energy Type</th>
</tr>
</thead>
<tbody><tr>
<td>Black, Green, or Copper</td>
<td>Acid</td>
</tr>
<tr>
<td>Blue or Bronze</td>
<td>Electricity</td>
</tr>
<tr>
<td>Red, Brass, or Gold</td>
<td>Fire</td>
</tr>
<tr>
<td>White or Silver</td>
<td>Cold</td>
</tr>
</tbody></table></ScrollContainer>
</Pair>
<Pair title="At 5th Level">The energy resistance granted by the dragonblood shifter's draconic aspect increases to 10.</Pair>
<Pair title="At 10th Level">The energy resistance granted by the dragonblood shifter's draconic aspect increases to 15, and she gains a <Link to="/umr/breath_weapon">breath weapon</Link> of her energy type that deals 1d6 points of damage per shifter level within a 30-foot cone. A target can attempt a Reflex save (DC = 10 + half the dragonblood shifter's level + her Charisma modifier) to reduce damage by half. The dragonblood shifter can use her breath weapon once per day.</Pair>
<Pair title="At 15th Level">The energy resistance granted by the dragonblood shifter's draconic aspect increases to 20, and she can use her breath weapon twice per day.</Pair>
<Pair title="At 20th Level">The dragonblood shifter becomes <Link to="/umr/immune">immune</Link> to the energy type that corresponds to her selected dragon type while in her draconic aspect. In addition, she gains spell resistance equal to 10 + her shifter level, and she can use her breath weapon three times per day.</Pair>
<Pair title="Special">The shifter can select a different dragon type every time she uses this ability, but she must end her current draconic aspect and activate this ability again in order to change her chosen dragon type.</Pair>
</Ability>
<Ability id="arc-shifter-dragonblood_shifter-wyrmshifter-su" icon={["armor-upgrade","broken-shield"]}>
<Pair single id="arc-shifter-dragonblood_shifter-wyrmshifter-su" flavor="A dragonblood shifter can push her form closer to that of a true dragon.">Wyrmshifter (Su)</Pair>
<Pair hl title="Replaces">Chimeric aspect</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">She gains a +2 racial bonus on saving throws against sleep and paralysis effects.</Pair>
<Pair title="Ability">She does not gain the <em>wild shape</em> ability until 9th level. When using the ability, she takes on the form of a true dragon; this ability functions as <Link to="/spell/form_of_the_dragon_i">form of the dragon I</Link> instead of <Link to="/spell/beast_shape_ii">beast shape II</Link>.</Pair>
<Pair title="Usage">Shifter level + Wisdom modifier minutes/day; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Special">For abilities that function based on uses of <em>wild shape,</em> each minute of this ability counts as a use.</Pair>
</Ability>
<Ability id="arc-shifter-dragonblood_shifter-improved-wyrmshifter-su" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-shifter-dragonblood_shifter-improved-wyrmshifter-su" flavor="A dragonblood shifter's ties to her draconic abilities grow stronger.">Improved Wyrmshifter (Su)</Pair>
<Pair hl title="Replaces">Greater chimeric aspect</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">Her bonus on saves against sleep and paralysis effects increases to +4.</Pair>
<Pair title="Ability">Her <em>wild shape</em> ability now functions as <Link to="/spell/form_of_the_dragon_ii">form of the dragon II</Link>, and she can use it for a number of minutes each day equal to twice her shifter level + her Wisdom modifier, though it still must be used in 1-minute increments.</Pair>
</Ability>
<Ability id="arc-shifter-dragonblood_shifter-greater-wyrmshifter-su" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-shifter-dragonblood_shifter-greater-wyrmshifter-su" flavor="A dragonblood shifter's tie to her draconic abilities reaches its peak.">Greater Wyrmshifter (Su)</Pair>
<Pair hl title="Replaces">Final aspect</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">She becomes immune to sleep and paralysis effects.</Pair>
<Pair title="Ability">She can use <em>wild shape</em> to transform into a dragon for a number of hours each day equal to her shifter level + her Wisdom modifier. This duration does not need to be consecutive, but it must be spent in 1-hour increments.</Pair>
<Pair title="Special">For abilities that function based on uses of <em>wild shape,</em> each hour of this ability counts as a use.</Pair>
</Ability>
</>};
const _elementalist_shifter = {hasJL:true,title: "Elementalist Shifter", jsx: <><div className="jumpList" id="arc-shifter-elementalist_shifter-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arc-shifter-elementalist_shifter-elemental-aspects">Elemental Aspects</InnerLink></li></ul></div><h2 id="arc-shifter-elementalist_shifter-elementalist-shifter">Elementalist Shifter</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 78</Link><br/>Rather than drawing power from bestial aspects, elementalist shifters channel power from the Inner Sphere and can take on powerful elemental forms at the cost of the greater diversity available to traditional shifters. Although the elementalist shifter's powers seem more outlandish and supernatural than those of others of their kind, they remain equally immersed in the druidic traditions; their focus is simply rooted in expressions of nature found in extraplanar regions: the planes of Air, Earth, Fire, and Water.</p>
<Ability id="arc-shifter-elementalist_shifter-languages" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-elementalist_shifter-languages">Languages</Pair>
<Pair hl title="Alters">Languages</Pair>
<Pair title="Info">An elementalist shifter adds Aquan, Auran, Ignan, and Terran to her list of available bonus languages.</Pair>
</Ability>
<Ability id="arc-shifter-elementalist_shifter-elemental-aspect-su" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-elementalist_shifter-elemental-aspect-su">Elemental Aspect (Su)</Pair>
<Pair hl title="Alters">Shifter aspect</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">An elementalist shifter chooses one elemental aspect (<InnerLink toTop to="arc-shifter-elementalist_shifter-elemental-aspects">see below</InnerLink>) rather than a <em>shifter aspect.</em> This ability otherwise functions as <em>shifter aspect.</em></Pair>
<Pair title="At 5th Level">She gains her 2nd elemental aspect.</Pair>
<Pair title="At 10th Level">She gains a 3rd elemental aspect.</Pair>
<Pair title="At 15th Level">She gains her 4th elemental aspect.</Pair>
</Ability>
<Ability id="arc-shifter-elementalist_shifter-elemental-speech-su" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-elementalist_shifter-elemental-speech-su">Elemental Speech (Su)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Ability">When in her <em>elemental aspect,</em> an elementalist shifter gains the benefit of <Link to="/spell/tongues">tongues</Link> with creatures of the elemental subtype that matches her <em>elemental aspect.</em></Pair>
</Ability>
<Ability id="arc-shifter-elementalist_shifter-elemental-strike-su" icon={["mailed-fist"]}>
<Pair single id="arc-shifter-elementalist_shifter-elemental-strike-su">Elemental Strike (Su)</Pair>
<Pair hl title="Replaces">Shifter claws</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Swift Action">An elementalist shifter can charge her melee attacks with elemental energy. The elementalist shifter can charge her attacks only with an element she has chosen with <em>elemental aspect.</em> Once charged, each melee attack the elementalist shifter makes until the start of her next turn deal additional 1d6 points of energy damage based on the element she chooses when taking this action (see <InnerLink toTop to="arc-shifter-elementalist_shifter-elemental-aspects">Elemental Aspects</InnerLink> below).</Pair>
<Pair title="At 4th Level">This additional damage becomes +2d6 points of energy damage.</Pair>
<Pair title="At 8th Level">This additional damage increases to +3d6 points of energy damage.</Pair>
<Pair title="At 12th Level">This additional damage becomes +4d6 points of energy damage.</Pair>
<Pair title="At 16th Level">This additional damage increases to +5d6 points of energy damage.</Pair>
<Pair title="At 20th Level">This additional damage becomes +6d6 points of energy damage.</Pair>
<Pair title="Special">An elementalist shifter can't use <em>elemental strike</em> while under a polymorph effect.</Pair>
</Ability>
<Ability id="arc-shifter-elementalist_shifter-elemental-form-su" icon={["magic-swirl","broken-shield"]}>
<Pair single id="arc-shifter-elementalist_shifter-elemental-form-su">Elemental Form (Su)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">When an elementalist shifter uses <em>wild shape,</em> she is instead affected as if by <Link to="/spell/elemental_body_i">elemental body I</Link>, but she gains only the benefits listed in her <em>elemental aspect.</em> While in an <em>elemental form,</em> the elementalist shifter can speak only the elemental language associated with that form, and she can do so only if she knows it.</Pair>
</Ability>
<Ability id="arc-shifter-elementalist_shifter-omnielementalist-su" extraClasses="hasSubs" icon={["upgrade"]}>
<Pair single id="arc-shifter-elementalist_shifter-omnielementalist-su">Omnielementalist (Su)</Pair>
<Pair hl title="Replaces">Chimeric aspect, greater chimeric aspect</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">An elementalist shifter can fuse two <em>elemental forms</em> together, gaining combined powers of the different aspects and manifesting them in ways that bring to mind powerful natural weather phenomena. When the elementalist shifter takes on one minor form each from two of her <em>elemental aspects,</em> she gains an additional ability as long as she maintains the form. The effects of the abilities depend on the elemental combination, as detailed below.</Pair>
</Ability>
<Ability id="arc-shifter-elementalist_shifter-ash-storm-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-shifter-elementalist_shifter-ash-storm-su">Ash Storm (Su)</Pair>
<Pair title="Ability">By combining air and fire, the elementalist shifter surrounds herself with a storm of swirling ash, granting her a 20% miss chance against ranged attacks.</Pair>
</Ability>
<Ability id="arc-shifter-elementalist_shifter-downpour-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-shifter-elementalist_shifter-downpour-su">Downpour (Su)</Pair>
<Pair title="Ability">The elementalist shifter combines the powers of air and water to generate a torrential downpour in her square and squares adjacent to her. This rain automatically extinguishes all nonmagical fires in her square and squares adjacent to her (including flames on creatures that have caught on fire). It also has a chance to extinguish ongoing magical fire (but not instantaneous magical fire effects such as <Link to="/spell/fireball">fireball</Link>) within or that enters the area, as if the elementalist shifter had cast <Link to="/spell/dispel_magic">dispel magic</Link>, using her elementalist shifter level as her caster level for the effect.</Pair>
</Ability>
<Ability id="arc-shifter-elementalist_shifter-mudslide-su" extraClasses="subAbility" icon={["aura"]}>
<Pair single id="arc-shifter-elementalist_shifter-mudslide-su">Mudslide (Su)</Pair>
<Pair title="Ability">Combining the elements of earth and water causes the elementalist shifter to generate an aura of mud. This mud extends out to all squares adjacent to her and counts as <Link to="/rule/difficult_terrain">difficult terrain</Link>; it moves with her and vanishes when she ends her <em>elemental aspect.</em></Pair>
</Ability>
<Ability id="arc-shifter-elementalist_shifter-sandstorm-su" extraClasses="subAbility" icon={["aura"]}>
<Pair single id="arc-shifter-elementalist_shifter-sandstorm-su">Sandstorm (Su)</Pair>
<Pair title="Ability">Combining the high winds of air and fine particulates of earth produces a sandstorm that extends out to a radius of 20 feet from the elementalist shifter. All <Link to="/rule/light_level">light levels</Link> in the area diminish by one step, and creatures caught in the effect take 1d6 points of nonlethal damage each round they remain within the <em>sandstorm.</em></Pair>
</Ability>
<Ability id="arc-shifter-elementalist_shifter-steam-cloud-su" extraClasses="subAbility" icon={["aura"]}>
<Pair single id="arc-shifter-elementalist_shifter-steam-cloud-su">Steam Cloud (Su)</Pair>
<Pair title="Ability">When the elementalist shifter enters a minor form of fire and water at the same time, the heat of fire and moisture of water generate an explosive area of steam around her out to a radius of 20 feet as per <Link to="/spell/obscuring_mist">obscuring mist</Link>. The mist remains in place until she ends her <em>elemental aspect;</em> it doesn't move with her.</Pair>
</Ability>
<Ability id="arc-shifter-elementalist_shifter-volcanic-stride-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-shifter-elementalist_shifter-volcanic-stride-su">Volcanic Stride (Su)</Pair>
<Pair title="Standard Action">By combining earth and fire, the elementalist shifter can damage the ground around herself. She can deform a region of natural or artificial rock in her space, turning it into difficult terrain and causing creatures that pass through it to take an amount of fire damage equal to that dealt by her <em>elemental strike</em> with no save. Affected terrain remains transformed until the shifter ends her <em>elemental aspect.</em></Pair>
</Ability>
<h3 id="arc-shifter-elementalist_shifter-elemental-aspects" data-hash-target>Elemental Aspects</h3>
<p>Elementalist shifters do not infuse their bodies with bestial qualities taken from animal aspects. Rather, they take into themselves raw elemental power from the planes of Air, Earth, Fire, and Water. The following aspects are used by the elementalist shifter archetype; they cannot be selected as aspects by other shifters.</p>
<Ability id="arc-shifter-elementalist_shifter-air" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-elementalist_shifter-air">Air</Pair>
<Pair title="Info">You take on the power of an air elemental, gaining the ability to fly and to control powerful gusts of wind. You take inspiration from the patterns of clouds in the sky, the tumultuous fury of the storm, and the gentle caress of a cooling breeze. Flying creatures, such as bats and birds, are your favorites. Spring is your favored season - a time when storms bring freshness to the world but that lacks the brutality of winter's devastation.</Pair>
</Ability>
<Ability id="arc-shifter-elementalist_shifter-minor-form" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-shifter-elementalist_shifter-minor-form">Minor Form</Pair>
<Pair title="Ability">You gain a +2 enhancement bonus to your Dexterity score.</Pair>
<Pair title="At 8th Level">This bonus increases to +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="arc-shifter-elementalist_shifter-major-form" extraClasses="subAbility" icon={["magic-swirl","armor-upgrade"]}>
<Pair single id="arc-shifter-elementalist_shifter-major-form">Major Form</Pair>
<Pair title="Ability">Your shape changes to that of a <Link to="/monster/medium_air_elemental">Medium air elemental</Link>. While you are in this form, you gain a fly speed of 60 feet (average maneuverability) and airborne creatures take a -1 penalty on attack and damage rolls against you.</Pair>
<Pair title="At 8th Level">Your fly speed increases to 100 feet (perfect) and you gain the ability to transform yourself into a whirlwind as a standard action for 1 round per 2 shifter levels you have. This otherwise functions as per the <Link to="/umr/whirlwind">whirlwind</Link> universal monster rule.</Pair>
<Pair title="At 15th Level">You gain <Link to="/feat/improved_natural_attack">Improved Natural Attack</Link> with your slam.</Pair>
</Ability>
<Ability id="arc-shifter-elementalist_shifter-earth" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-elementalist_shifter-earth">Earth</Pair>
<Pair title="Info">You take on the power of an earth elemental, gaining the ability to burrow through the earth and deliver powerful blows. You take comfort in caverns, mountainous regions, and areas rent by canyons and chasms, and you feel a deep kinship to burrowing animals of all types. Be it the soothing feel of fresh topsoil or the devastating fury of an earthquake, you understand the raw power of earth. Your favored season is fall - the traditional time of the harvest, when bounty from the earth is offered.</Pair>
</Ability>
<Ability id="arc-shifter-elementalist_shifter-minor-form" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-shifter-elementalist_shifter-minor-form">Minor Form</Pair>
<Pair title="Ability">You gain a +2 enhancement bonus to your Constitution score.</Pair>
<Pair title="At 8th Level">This bonus increases to +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="arc-shifter-elementalist_shifter-major-form" extraClasses="subAbility" icon={["magic-swirl","upgrade","broken-shield"]}>
<Pair single id="arc-shifter-elementalist_shifter-major-form">Major Form</Pair>
<Pair title="Ability">Your shape changes to that of a <Link to="/monster/medium_earth_elemental">Medium earth elemental</Link>. While you are in this form, your base speed is reduced to 20 feet, but you gain a burrow speed of 10 feet, and you gain a +1 bonus on attack and damage rolls if both you and your target are touching the ground. If the target is airborne or waterborne, you take a -4 penalty on attack and damage rolls against it. These modifiers also apply to <Link to="/rule/bull_rush">bull rush</Link> and <Link to="/rule/overrun">overrun</Link> combat maneuvers, whether you are initiating or resisting these kinds of attacks.</Pair>
<Pair title="At 8th Level">Your burrow speed increases to 20 feet and you gain <Link to="/umr/earth_glide">earth glide</Link> as per the universal monster rule.</Pair>
<Pair title="At 15th Level">You gain Improved Natural Attack with your slam.</Pair>
</Ability>
<Ability id="arc-shifter-elementalist_shifter-fire" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-elementalist_shifter-fire">Fire</Pair>
<Pair title="Info">You take on the power of a fire elemental, becoming a being of living flame that can burn enemies and move with great speed. You enjoy regions where precipitation rarely intrudes, such as desert landscapes and dry savannas, but the slopes of volcanoes hold the greatest majesty to you. You enjoy the companionship of swiftly moving creatures and those who enjoy basking in the sun, for you empathize with their appreciation of the daytime's warmth. Forest fires are things of beauty to you, yet you respect fire and would never think to wantonly inflict it upon the natural world. Summer is your favorite season, for this is a time of heat waves and blistering sunny days.</Pair>
</Ability>
<Ability id="arc-shifter-elementalist_shifter-minor-form" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-shifter-elementalist_shifter-minor-form">Minor Form</Pair>
<Pair title="Ability">You gain a +2 enhancement bonus to your Dexterity score.</Pair>
<Pair title="At 8th Level">This bonus increases to +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="arc-shifter-elementalist_shifter-major-form" extraClasses="subAbility" icon={["magic-swirl","armor-upgrade","broken-shield","stairs-goal"]}>
<Pair single id="arc-shifter-elementalist_shifter-major-form">Major Form</Pair>
<Pair title="Ability">Your shape changes to that of a <Link to="/monster/medium_fire_elemental">Medium fire elemental</Link>. While you are in this form, your base speed changes to 50 feet and you gain <Link to="/umr/immunity">immunity</Link> to fire, <Link to="/umr/vulnerability">vulnerability</Link> to cold, and the <Link to="/umr/burn">burn</Link> special attack as per the universal monster rule, dealing damage equal to your slam attack whenever a creature fails its Reflex save against that ability.</Pair>
<Pair title="At 8th Level">You gain Improved Natural Attack with your slam.</Pair>
<Pair title="At 15th Level">You deal fire damage equal to double your slam damage against opponents that fail their saves against your burn ability.</Pair>
</Ability>
<Ability id="arc-shifter-elementalist_shifter-water" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-elementalist_shifter-water">Water</Pair>
<Pair title="Info">You take on the power of a water elemental, gaining the ability to move swiftly in water, rain down crashing blows on your enemies, and transform into a swirling vortex. You identify with aquatic animals of all types, be they water-breathing creatures such as fish, amphibians such as newts or frogs, or air-breathing mammals such as whales or walruses. The unrelenting churn of waves on the shoreline, the soothing babble of a gentle stream, and the pounding kiss of a deluge of rain all bring joy to your heart. Your favored season is winter, for it is at this time that the most powerful of storms bring water to all the world.</Pair>
</Ability>
<Ability id="arc-shifter-elementalist_shifter-minor-form" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-shifter-elementalist_shifter-minor-form">Minor Form</Pair>
<Pair title="Ability">You gain a +2 enhancement bonus to your Strength score.</Pair>
<Pair title="At 8th Level">This bonus increases to +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="arc-shifter-elementalist_shifter-major-form" extraClasses="subAbility" icon={["magic-swirl","upgrade","broken-shield","magic-swirl"]}>
<Pair single id="arc-shifter-elementalist_shifter-major-form">Major Form</Pair>
<Pair title="Ability">Your shape changes to that of a <Link to="/monster/medium_water_elemental">Medium water elemental</Link>. While you are in this form, your base speed is reduced to 20 feet but you gain a swim speed of 60 feet, and if both you and your target are touching water, you also gain a +1 bonus on attack and damage rolls. If the target is touching the ground, you take a -4 penalty on attack and damage rolls against it. These modifiers apply to bull rush and overrun combat maneuvers, whether you are initiating or resisting these kinds of attacks.</Pair>
<Pair title="At 8th Level">Your swim speed increases to 90 feet, your touch automatically extinguishes nonmagical flames of size Large or smaller, and you can dispel magical fires as per <Link to="/spell/dispel_magic">dispel magic</Link> using your shifter level as your effective caster level.</Pair>
<Pair title="At 15th Level">You gain Improved Natural Attack with your slam and the <em>vortex</em> special ability, which functions identically to the air aspect's <em>whirlwind</em> ability but can form only underwater and cannot leave the water.</Pair>
</Ability>
</>};
const _feyform_shifter = {title: "Feyform Shifter", jsx: <><h2 id="arc-shifter-feyform_shifter-feyform-shifter">Feyform Shifter</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 6</Link><br/>Feyform shifters are intimately linked to the First World, and can draw from it to gain otherworldly powers.</p>
<Ability id="arc-shifter-feyform_shifter-fey" icon={["mailed-fist"]}>
<Pair single id="arc-shifter-feyform_shifter-fey">Fey</Pair>
<Pair title="Ability">A shifter that uses <strong className="hl">alternate natural attacks</strong> can choose from Bite (B, P, S) and Sting (P).</Pair>
</Ability>
<Ability id="arc-shifter-feyform_shifter-fey-aspect-su" icon={["magic-swirl","armor-upgrade"]}>
<Pair single id="arc-shifter-feyform_shifter-fey-aspect-su">Fey Aspect (Su)</Pair>
<Pair hl title="Replaces">Shifter aspect and all improvements to it</Pair>
<Pair title="Usage">3 minutes/day + 1 minute per shifter level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Swift Action">A feyform shifter can take on a First World aspect and assume fey traits. While in this form, she gains low-light vision (or darkvision with a range of 30 feet, if she already has low-light vision) and DR 1/cold iron. Her body outline becomes indistinct; she is treated as though she has <Link to="/rule/concealment">concealment</Link>, except that she cannot use this concealment to attempt Stealth checks.</Pair>
<Pair title="At 5th Level">The feyform shifter's DR increases to 2/cold iron, and she grows a pair of butterfly-like wings that grant her a fly speed of 30 feet with average maneuverability.</Pair>
<Pair title="At 10th Level">The feyform shifter's DR increases to 5/cold iron, and she gains a +4 bonus on saving throws against enchantment spells and effects.</Pair>
<Pair title="At 15th Level">The feyform shifter's DR increases to 7/cold iron, and her fly speed maneuverability increases to good.</Pair>
<Pair title="At 20th Level">The feyform shifter's DR increases to 10/cold iron. She becomes resistant to movement-impairing effects (as <Link to="/spell/freedom_of_movement">freedom of movement</Link>) and gains spell resistance equal to 10 + her level.</Pair>
</Ability>
<Ability id="arc-shifter-feyform_shifter-fey-shape-su" icon={["magic-swirl"]}>
<Pair single id="arc-shifter-feyform_shifter-fey-shape-su">Fey Shape (Su)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A feyform shifter can use her <em>wild shape</em> ability to become a fey creature. The fey shifter must spend at least one use of <em>wild shape</em> to transform into a fey creature; this ability functions as <Link to="/spell/fey_form_i">fey form I</Link>, except that it lasts for only 1 minute per use of <em>wild shape</em> spent.</Pair>
<Pair title="At 8th Level">This ability instead functions as <Link to="/spell/fey_form_ii">fey form II</Link>.</Pair>
<Pair title="At 10th Level">This ability functions as <Link to="/spell/fey_form_iii">fey form III</Link>.</Pair>
<Pair title="At 14th Level">This functions as <Link to="/spell/fey_form_iv">fey form IV</Link>.</Pair>
<Pair title="Special">Using fey shape or reverting back is a <strong className="hl">standard action</strong> that does not cause attacks of opportunity.</Pair>
</Ability>
<Ability id="arc-shifter-feyform_shifter-fey-shifter-su" icon={["upgrade"]}>
<Pair single id="arc-shifter-feyform_shifter-fey-shifter-su">Fey Shifter (Su)</Pair>
<Pair hl title="Alters">Chimeric aspect</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A feyform shifter gains a second <em>shifter aspect,</em> chosen from the animal aspects normally available to shifters. When she uses her <em>shifter aspect</em> ability to take on her fey aspect, she can choose a second aspect and assume the minor form of that aspect, alongside her fey aspect, allowing her to combine her fey aspect with the animal aspects available to her.</Pair>
</Ability>
<Ability id="arc-shifter-feyform_shifter-greater-fey-shifter-su" icon={["upgrade"]}>
<Pair single id="arc-shifter-feyform_shifter-greater-fey-shifter-su">Greater Fey Shifter (Su)</Pair>
<Pair hl title="Alters">Greater chimeric aspect</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">A feyform shifter gains a third <em>aspect.</em> When she uses her <em>shifter aspect</em> ability to take on her fey aspect, she can choose two aspects and assume the minor form of each aspect, alongside her fey aspect.</Pair>
</Ability>
<Ability id="arc-shifter-feyform_shifter-final-aspect-su" icon={["upgrade"]}>
<Pair single id="arc-shifter-feyform_shifter-final-aspect-su">Final Aspect (Su)</Pair>
<Pair hl title="Alters">Final aspect</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A feyform shifter gains access to a fourth <em>aspect.</em> When she uses <em>shifter aspect,</em> she can assume the minor forms of all her aspects in addition to her fey aspect, and she can use her major and minor forms at will.</Pair>
</Ability>
</>};
const _fiendflesh_shifter = {title: "Fiendflesh Shifter", jsx: <><h2 id="arc-shifter-fiendflesh_shifter-fiendflesh-shifter">Fiendflesh Shifter</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 80</Link><br/>By forging dark pacts with extraplanar forces, fiendflesh shifters invoke sinister powers to assume the strengths of daemons, demons, or devils. Fiendflesh shifters care nothing for the natural world and are instead consumed by an ever-growing lust for power at any price. To other shifters, the fiendflesh shifter is often viewed as a monster herself - an intrusion into the natural order of things and a foe who must be sought out and destroyed. Very few druids will ever willingly ally with fiendflesh shifters; this leaves these outcasts to live bitter, lonely lives or to seek out fiendish cults or other abhorrent faiths for support and companionship.</p>
<Ability id="arc-shifter-fiendflesh_shifter-alignment" icon={["hazard-sign"]}>
<Pair single id="arc-shifter-fiendflesh_shifter-alignment">Alignment</Pair>
<Pair hl title="Alters">Alignment</Pair>
<Pair title="Info">A fiendflesh shifter must be evil in alignment. If the fiendflesh shifter becomes nonevil, she loses all powers granted by this archetype.</Pair>
</Ability>
<Ability id="arc-shifter-fiendflesh_shifter-infernal-claws-ex" icon={["mailed-fist"]}>
<Pair single id="arc-shifter-fiendflesh_shifter-infernal-claws-ex" flavor="A fiendflesh shifter's claws are infused with the unholy power of the evil Outer Planes.">Infernal Claws (Ex)</Pair>
<Pair hl title="Alters">Shifter claws</Pair>
<Pair title="At 1st Level">A fiendflesh <em>shifter's claws</em> are treated as evil weapons for the purpose of overcoming damage reduction. This ability otherwise functions as the <em>shifter claws</em> class feature.</Pair>
</Ability>
<Ability id="arc-shifter-fiendflesh_shifter-fiendish-aspect-su" icon={["magic-swirl","stairs-goal","mailed-fist","armor-upgrade"]}>
<Pair single id="arc-shifter-fiendflesh_shifter-fiendish-aspect-su">Fiendish Aspect (Su)</Pair>
<Pair hl title="Replaces">Wild shape, shifter aspect</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 minutes/day + 1 minute per shifter level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Swift Action">A fiendflesh shifter can temporarily transform her body into an amalgam of otherworldly evil creatures. While in this form, the fiendflesh shifter gains darkvision out to a range of 60 feet (or doubles the range of her darkvision if she already has it), a gore natural attack that deals 1d6 points of damage (1d4 points of damage if the shifter is Small), and DR 1/good.</Pair>
<Pair title="At 5th Level">The fiendflesh shifter's DR increases to 2/good and she also grows a pair of bat-like wings when in her <em>fiendish aspect,</em> granting her a fly speed of 30 feet with average maneuverability.</Pair>
<Pair title="At 10th Level">The fiendflesh shifter's DR increases to 5/good, and the electricity and fire resistance provided by her <em>fiendish resilience</em> ability (see below) doubles while she's in her <em>fiendish aspect.</em></Pair>
<Pair title="At 15th Level">The fiendflesh shifter's DR increases to 7/good and her fly speed increases to 60 feet.</Pair>
<Pair title="At 20th Level">The fiendflesh shifter's DR increases to 10/good. She also gains <Link to="/umr/immunity">immunity</Link> to electricity and fire and spell resistance equal to 15 + her shifter level.</Pair>
</Ability>
<Ability id="arc-shifter-fiendflesh_shifter-fiendish-resilience-su" icon={["armor-upgrade"]}>
<Pair single id="arc-shifter-fiendflesh_shifter-fiendish-resilience-su">Fiendish Resilience (Su)</Pair>
<Pair hl title="Replaces">Defensive instinct</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A fiendflesh shifter gains a +1 natural armor bonus to her AC and <Link to="/umr/resistance">resistance</Link> 5 to electricity and fire, but only while unencumbered and either wearing no armor or wearing light or medium nonmetal armor.</Pair>
<Pair title="At 4th Level">The natural armor bonus increases by 1.</Pair>
<Pair title="At 8th Level">Her resistance to electricity and fire becomes 10.</Pair>
<Pair title="At 12th Level">The natural armor bonus increases by 1.</Pair>
<Pair title="At 16th Level">Her resistance to electricity and fire increases to 15.</Pair>
<Pair title="At 20th Level">The natural armor bonus increases by 1.</Pair>
</Ability>
<Ability id="arc-shifter-fiendflesh_shifter-chimeric-fiend-su" extraClasses="hasSubs" icon={["armor-upgrade"]}>
<Pair single id="arc-shifter-fiendflesh_shifter-chimeric-fiend-su">Chimeric Fiend (Su)</Pair>
<Pair hl title="Replaces">Chimeric aspect</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">When a fiendflesh shifter uses her <em>fiendish aspect</em> ability, she can gain an additional ability from the list below. The fiendflesh shifter can change which ability she gains each time she uses <em>fiendish aspect.</em>.</Pair>
</Ability>
<Ability id="arc-shifter-fiendflesh_shifter-daemon" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-shifter-fiendflesh_shifter-daemon">Daemon</Pair>
<Pair title="Passive Ability">Acid resistance 10 and a +4 profane bonus on saves against disease.</Pair>
</Ability>
<Ability id="arc-shifter-fiendflesh_shifter-demon" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-shifter-fiendflesh_shifter-demon">Demon</Pair>
<Pair title="Passive Ability">The shifter's electricity resistance doubles.</Pair>
</Ability>
<Ability id="arc-shifter-fiendflesh_shifter-devil" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-shifter-fiendflesh_shifter-devil">Devil</Pair>
<Pair title="Passive Ability">The shifter's fire resistance doubles.</Pair>
</Ability>
<Ability id="arc-shifter-fiendflesh_shifter-greater-chimeric-fiend-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-fiendflesh_shifter-greater-chimeric-fiend-su">Greater Chimeric Fiend (Su)</Pair>
<Pair hl title="Replaces">Greater chimeric aspect</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">A fiendflesh shifter's <em>chimeric fiend</em> ability grants her additional bonuses as noted below.</Pair>
</Ability>
<Ability id="arc-shifter-fiendflesh_shifter-daemon" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-shifter-fiendflesh_shifter-daemon">Daemon</Pair>
<Pair title="Passive Ability">The shifter gains a +4 enhancement bonus to her Constitution score and immunity to disease.</Pair>
</Ability>
<Ability id="arc-shifter-fiendflesh_shifter-demon" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-shifter-fiendflesh_shifter-demon">Demon</Pair>
<Pair title="Passive Ability">The shifter gains a +4 enhancement bonus to her Strength score and increases the damage die of all natural attacks <Link to="/misc/by_one_step">by one step</Link>.</Pair>
</Ability>
<Ability id="arc-shifter-fiendflesh_shifter-devil" extraClasses="subAbility" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-shifter-fiendflesh_shifter-devil">Devil</Pair>
<Pair title="Passive Ability">The shifter gains a +4 enhancement bonus to her Dexterity score and <Link to="/umr/see_in_darkness">see in darkness</Link> as per the universal monster rule.</Pair>
</Ability>
</>};
const _holy_beast = {title: "Holy Beast", jsx: <><h2 id="arc-shifter-holy_beast-holy-beast">Holy Beast</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 12</Link><br/>Thousands of gods are venerated in Vudra, and devoted followers might have personal relationships with their chosen deities. Holy beast shifters pledge to hunt down their deity's enemies to earn that deity's blessing. These shifters tend to take on the aspect of their deity's sacred animal, and many of them seek to destroy <Link to="/family/rakshasa">rakshasas</Link>.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-shifter-holy_beast--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Must worship a deity</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-shifter-holy_beast-blessed-claws-su" icon={["mailed-fist","upgrade"]}>
<Pair single id="arc-shifter-holy_beast-blessed-claws-su">Blessed Claws (Su)</Pair>
<Pair hl title="Alters">Shifter claws</Pair>
<Pair title="Ability">This ability functions as the <em>shifter's claws</em> class feature, except the holy beast shifter's default claws are long and thin, dealing piercing damage.</Pair>
<Pair title="At 3rd Level">Her claws are treated as one type of aligned weapon (chaotic, evil, good, or lawful) within one step of her deity's alignment in addition to ignoring DR/cold iron, DR/magic, and DR/silver. If multiple alignment components are available to the holy beast, she selects one; this choice cannot be changed later.</Pair>
</Ability>
<Ability id="arc-shifter-holy_beast-divine-fury-su" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-holy_beast-divine-fury-su" flavor="A holy beast shifter focuses entirely on hunting down specific outsiders on behalf of her deity.">Divine Fury (Su)</Pair>
<Pair hl title="Replaces">Wild empathy, track, woodland stride, trackless step</Pair>
<Pair title="Ability">She gains the ranger's <Link to="/ability/favored_enemy">favored enemy</Link> class feature, except she can select only an outsider type from the <em>favored enemy</em> table. The bonus against her <em>favored enemy</em> is equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of her shifter level.</Pair>
<Pair title="At 5th Level">She can forgo gaining an additional <em>shifter aspect</em> to instead gain an additional outsider type as her <em>favored enemy.</em> Her bonuses from the <em>favored enemy</em> feature against new outsider types chosen in this way are equal to the bonus for the type chosen at 1st level.</Pair>
<Pair title="At 10th Level">She can forgo gaining an additional <em>shifter aspect</em> to instead gain an additional outsider type as her <em>favored enemy.</em></Pair>
<Pair title="At 15th Level">She can forgo gaining an additional <em>shifter aspect</em> to instead gain an additional outsider type as her <em>favored enemy.</em></Pair>
<Pair title="At 20th Level">She can forgo gaining an additional <em>shifter aspect</em> to instead gain an additional outsider type as her <em>favored enemy.</em></Pair>
</Ability>
</>};
const _leafshifter = {title: "Leafshifter", jsx: <><h2 id="arc-shifter-leafshifter-leafshifter">Leafshifter</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 18</Link><br/>Rather than assume aspects taken from the traits of natural animals, a leafshifter transforms into plant-animal hybrids that resemble <Link to="/monster/living_topiary">living topiaries</Link>. This affords the leafshifter the savage power of the animal kingdom while also granting her the strength and timelessness of plant life.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-shifter-leafshifter--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/ghoran">Ghoran</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-shifter-leafshifter-shifters-slam-ex" icon={["mailed-fist"]}>
<Pair single id="arc-shifter-leafshifter-shifters-slam-ex">Shifter's Slam (Ex)</Pair>
<Pair hl title="Alters">Shifter claws</Pair>
<Pair title="Ability">This ability functions as the <em>shifter claws</em> class feature, except the leafshifter gains two slam attacks instead of two claw attacks. These slam attacks are made with her arms, which are covered in jagged bark and thorns, so these attacks deal bludgeoning and piercing damage.</Pair>
</Ability>
<Ability id="arc-shifter-leafshifter-leafshifters-aspect-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-leafshifter-leafshifters-aspect-su">Leafshifter's Aspect (Su)</Pair>
<Pair hl title="Alters">Shifter aspect</Pair>
<Pair title="Ability">This ability functions as the <em>shifter aspect</em> ability of the standard shifter, except a leafshifter doesn't gain the minor forms of her aspects. Instead, whenever she gains a new aspect, she chooses one of the plant focus abilities from the <Link to="/arc-hunter/plant_master">plant master</Link> hunter archetype (listed below) to associate with her new aspect. This choice cannot be changed once made.</Pair>
</Ability>
<Ability id="arc-shifter-leafshifter-assassin-vine" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-shifter-leafshifter-assassin-vine">Assassin Vine</Pair>
<Pair title="Passive Ability">The creature gains a +2 bonus on combat maneuver checks to <Link to="/rule/grapple">grapple</Link>.</Pair>
<Pair title="At 8th Level">This bonus becomes +3.</Pair>
<Pair title="At 15th Level">This bonus increases to +4.</Pair>
</Ability>
<Ability id="arc-shifter-leafshifter-brambles" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-shifter-leafshifter-brambles">Brambles</Pair>
<Pair title="Passive Ability">When the creature is hit by an unarmed strike or natural attack, the attacker takes 1 point of piercing damage.</Pair>
<Pair title="At 8th Level">This increases to 2 points.</Pair>
<Pair title="At 15th Level">This becomes 3 points.</Pair>
</Ability>
<Ability id="arc-shifter-leafshifter-creeping-vine" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-shifter-leafshifter-creeping-vine">Creeping Vine</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Climb checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-shifter-leafshifter-giant-flytrap" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-shifter-leafshifter-giant-flytrap">Giant Flytrap</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Stealth checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-shifter-leafshifter-mushroom" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-shifter-leafshifter-mushroom">Mushroom</Pair>
<Pair title="Passive Ability">The creature gains a +4 enhancement bonus on saves against poison.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-shifter-leafshifter-oak" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-shifter-leafshifter-oak">Oak</Pair>
<Pair title="Passive Ability">The creature gains a +2 enhancement bonus to CMD.</Pair>
<Pair title="At 8th Level">This bonus becomes +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="arc-shifter-leafshifter-shrieker" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-leafshifter-shrieker">Shrieker</Pair>
<Pair title="Passive Ability">The creature gains darkvision with a range of 60 feet.</Pair>
<Pair title="At 8th Level">The range increases by 30 feet.</Pair>
<Pair title="At 15th Level">The creature also gains <Link to="/umr/blindsense">blindsense</Link> with a range of 10 feet.</Pair>
</Ability>
<Ability id="arc-shifter-leafshifter-spore" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-shifter-leafshifter-spore">Spore</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Fly checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-shifter-leafshifter-water-lily" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-shifter-leafshifter-water-lily">Water Lily</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Swim checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
</>};
const _oozemorph = {title: "Oozemorph", jsx: <><h2 id="arc-shifter-oozemorph-oozemorph">Oozemorph</h2>
<p><strong>Source</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 81</Link>, <a href="https://paizo.com/paizo/faq/v5748nruor1hj">official Paizo FAQ</a><br/>While most shifters are trained in druidic traditions that allow them to tap into animalistic powers, others look instead to the simplest forms of life for inspiration. Known as oozemorphs, these shifters focus on the ooze - a form of life as simple in construction as it is dangerous in combat. While some shifters consider the oozemorph to be unsettling or even vile, these shifters merely embrace a stranger form of life than most. They are not inherently evil, yet they are often misunderstood by druidic circles and these circles' shifter champions.</p>
<Ability id="arc-shifter-oozemorph-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-shifter-oozemorph-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Weapon and armor proficiencies</Pair>
<Pair title="Info">An oozemorph is proficient with all simple weapons and light armor.</Pair>
</Ability>
<Ability id="arc-shifter-oozemorph-compression-ex" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-oozemorph-compression-ex">Compression (Ex)</Pair>
<Pair title="Ability">An oozemorph gains <Link to="/umr/compression">compression</Link> as per the universal monster rule. This ability can be used regardless of the current form the oozemorph has taken.</Pair>
</Ability>
<Ability id="arc-shifter-oozemorph-fluidic-body-su" icon={["stairs-goal","armor-upgrade","broken-shield"]}>
<Pair single id="arc-shifter-oozemorph-fluidic-body-su">Fluidic Body (Su)</Pair>
<Pair hl title="Replaces">Chimeric aspect, greater chimeric aspect, wild shape, shifter aspect</Pair>
<Pair title="Info">An oozemorph's base form is not that of her race but rather that of a protoplasmic blob that has the same volume and weight. An oozemorph treats her creature type as both <Link to="/type/ooze">ooze</Link> and her base creature type from her race for the purposes of effects targeting creatures by type (such as <Link to="/magic-enh/bane">bane</Link> weapons and a ranger's <Link to="/ability/favored_enemy">favored enemy</Link>). In this form, the oozemorph is immune to critical hits and <Link to="/misc/precision_damage">precision damage</Link> and can't be flanked. However, she has no magic item slots and she cannot benefit from armor; cast spells; hold objects; speak; or use any magic item that requires activation, is held, or is worn on the body. An oozemorph reverts to this formless state whenever she is unconscious or in an area of antimagic. This is treated as a polymorph effect.</Pair>
<Pair title="Usage">1 time/day per two shifter levels (minimum 1)</Pair>
<Pair title="Move-Equivalent Action">An oozemorph can assume a humanoid form. This transformation is identical to <Link to="/spell/alter_self">alter self</Link>, except for the base duration. Each hour after this duration, the oozemorph must succeed at a DC 15 Fortitude save or revert back to her fluidic body until she rests for at least 8 hours. This save DC increases by 1 for each additional hour spent maintaining the form. Ending this transformation at any time reverts the oozemorph back to her ooze form and renders her <Link to="/misc/fatigued">fatigued</Link> for a number of minutes equal to the number of hours she maintained the form.</Pair>
<Pair title="At 8th Level">The oozemorph can treat this ability as <Link to="/spell/beast_shape_i">beast shape I</Link></Pair>
<Pair title="At 15th Level">She can treat this ability as <Link to="/spell/beast_shape_ii">beast shape II</Link> or <Link to="/spell/giant_form_i">giant form I</Link>.</Pair>
<Pair title="Special"><p><em>Fluidic Body</em> is essentially two effects in one. The first, which is a permanent part of your character once you become an oozemorph, is that your base form is now an ooze shape. Even if you lose fluidic body for some reason (<Link to="/spell/antimagic_field">antimagic field</Link>, violating your code of conduct, etc) your base form is still the amorphous ooze-like form. The other half of the ability is a supernatural <Link to="/spelldef/polymorph">polymorph</Link> effect to transform into humanoid (and later bestial) forms.</p>
<p>Despite having an ooze-like shape, an oozemorph's base form is not an ooze, though it does also count as an ooze for the purposes of effects targeting creatures by type. The ooze-like form doesn't gain any abilities of the ooze creature type except as stated by the archetype itself. This form retains the base senses and land speed of the oozemorph's original race, as well as racial abilities like <Link to="/race/dwarf">dwarfs'</Link> <em>greed</em> or <Link to="/race/gnome">gnomes'</Link> <em>obsession</em> that don't depend on shape, but it loses abilities dependent on form, including form-based speeds like <Link to="/race/strix">strix's</Link> flight (and most other racial speeds beyond land speed), racial natural attacks like <Link to="/race/catfolk">catfolks'</Link> claws, and other abilities like <Link to="/race/tiefling">tieflings'</Link> prehensile tail. However, if the oozemorph possesses a racial ability denied her in her ooze-like form and transforms into a member of her own race with fluidic body, she gains the full benefits of that racial ability for that duration, even if it isn't usually granted when using <em>alter self</em> (or the appropriate spell for a non-humanoid oozemorph). An oozemorph's compression, damage reduction, and morphic weaponry function in its ooze-like form and any form it takes via fluidic body, though not in forms it takes via other polymorph effects.</p>
<p>An oozemorph can carry items floating in its mass that are considered to be attuned. When it turns into a humanoid form via fluidic body, it can equip any number of those items (even armor, which usually takes time to don), leaving the rest on the ground in its space. If it turns into an animal via fluidic form, the items meld into the new form and grant some passive benefits, as normal for polymorph effects.</p>
</Pair>
</Ability>
<Ability id="arc-shifter-oozemorph-morphic-weaponry-ex" icon={["mailed-fist"]}>
<Pair single id="arc-shifter-oozemorph-morphic-weaponry-ex" flavor="An oozemorph can create a number of natural weapons to fight with from any portion of her body, regardless of her current form.">Morphic Weaponry (Ex)</Pair>
<Pair hl title="Replaces">Shifter claws</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Move-Equivalent Action">An oozemorph can form two primary natural attacks that each deal 1d6 points of bludgeoning, piercing, or slashing damage, chosen by the oozemorph when she forms them.</Pair>
<Pair title="Swift Action">An oozemorph can change the damage type of any number of her natural weapons.</Pair>
<Pair title="At 6th Level">An oozemorph gains an additional primary natural attack.</Pair>
<Pair title="At 15th Level">An oozemorph gains an additional primary natural attack.</Pair>
<Pair title="Special">The total number of natural attacks an oozemorph has at any given time includes those gained via her current form. For example, an 8th-level oozemorph who has taken the form of a wolf with <em>beast shape I</em> has a bite attack as part of that form; she can create only two additional natural attacks via <em>morphic weaponry,</em> for a total of three attacks available to her at that level. If the oozemorph later reverts to a humanoid form with no natural weapons, she can instead create three <em>morphic weapons.</em></Pair>
</Ability>
<Ability id="arc-shifter-oozemorph-ooze-empathy-ex" icon={["broken-shield"]}>
<Pair single id="arc-shifter-oozemorph-ooze-empathy-ex">Ooze Empathy (Ex)</Pair>
<Pair hl title="Alters">Wild empathy</Pair>
<Pair title="Ability">An oozemorph gains the shifter's <em>wild empathy</em> class feature, but she can use it only to influence the attitude of oozes with an Intelligence score of 2 or lower. An oozemorph can use this ability on mindless oozes; when she does so, she imparts a modicum of intellect to the ooze to allow it to respond to her commands.</Pair>
</Ability>
<Ability id="arc-shifter-oozemorph-damage-reduction-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-shifter-oozemorph-damage-reduction-ex">Damage Reduction (Ex)</Pair>
<Pair hl title="Replaces">Defensive instinct</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An oozemorph gains DR 4/slashing while unencumbered and either wearing no armor or wearing light nonmetal armor.</Pair>
<Pair title="At 4th Level">This damage reduction becomes 6.</Pair>
<Pair title="At 8th Level">This damage reduction increases to 8.</Pair>
<Pair title="At 12th Level">This damage reduction becomes 10.</Pair>
<Pair title="At 16th Level">This damage reduction increases to 12.</Pair>
<Pair title="At 20th Level">This damage reduction becomes 14.</Pair>
</Ability>
<Ability id="arc-shifter-oozemorph-clinging-ooze-ex" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-oozemorph-clinging-ooze-ex">Clinging Ooze (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">When in her natural form, an oozemorph gains a climb speed of 10 feet.</Pair>
</Ability>
</>};
const _rageshaper = {title: "Rageshaper", jsx: <><h2 id="arc-shifter-rageshaper-rageshaper">Rageshaper</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 82</Link><br/>Not all shifters represent the balance of nature. The rageshaper is a destructive force of nature brought to bear - a wild and uncontrollable engine of annihilation fueled by wrath. Rageshapers fly into bloodletting frenzies and rain down devastation like unstoppable natural disasters.</p>
<Ability id="arc-shifter-rageshaper-alignment" icon={["info","hazard-sign"]}>
<Pair single id="arc-shifter-rageshaper-alignment">Alignment</Pair>
<Pair hl title="Alters">Alignment</Pair>
<Pair title="Info">A rageshaper can be any nonlawful alignment. A rageshaper who becomes lawful cannot take any further levels in rageshaper, but he does not lose access to any rageshaper abilities he has already gained.</Pair>
</Ability>
<Ability id="arc-shifter-rageshaper-devastating-form-su" extraClasses="hasSubs" icon={["upgrade"]}>
<Pair single id="arc-shifter-rageshaper-devastating-form-su">Devastating Form (Su)</Pair>
<Pair hl title="Replaces">Wild shape, shifter aspect</Pair>
<Pair title="Ability"><p>A rageshaper can enter a state of intense fury, transforming into a living engine of destruction. This ability functions as the <Link to="/class/barbarian">barbarian's</Link> <em>rage</em> class feature, except entering this state of fury requires a <strong className="hl">full-round action</strong> that provokes attacks of opportunity and has additional effects as noted below. At the start of the rageshaper's next turn, he not only gains the benefit of <em>rage</em> but also grows one size category larger (though worn equipment and held items do not increase in size).</p>
<p>Armor or clothing the rageshaper wears that doesn't accommodate his changing size immediately gains the <Link to="/misc/broken">broken</Link> condition. If insufficient room is available to accommodate this change, the rageshaper attains the maximum possible size for the available space and can attempt a Strength check (using his increased Strength) to burst any enclosures in the process. If the check fails, he is constrained but not harmed by the materials enclosing him.</p>
<p><Link to="/rule/adding_racial_hit_dice">Look here</Link> for rules on attribute and skill bonuses and penalties due to a change of size.</p>
<p>A rageshaper can remain in his <em>devastating form</em> for a number of rounds per day equal to his shifter level. He can dismiss <em>devastating form</em> only with a successful Will save (DC = 10 + his shifter level) made as a <strong className="hl">free action</strong>. On a failed save, the attempted remains in <em>devastating form</em> for an additional round. If the rageshaper does not successfully end his <em>devastating form</em> before he runs out of daily rounds, the next time he fails his Will save to revert, he flies into an uncontrollable frenzy as if affected by <Link to="/spell/confusion">confusion</Link>, but he treats a roll of 26-50 as "attacks nearest creature." Each round the rageshaper spends in an uncontrollable frenzy, the Will save DC to exit devastating form decreases by 2.</p>
<p>When a rageshaper ends his <em>devastating form</em> ability, he is <Link to="/misc/fatigued">fatigued</Link> for a number of rounds equal to twice the number of rounds he spent in <em>devastating form.</em> A rageshaper cannot enter <em>devastating form</em> again while fatigued or exhausted. If a rageshaper falls unconscious, his <em>devastating form</em> ends immediately.</p>
</Pair>
<Pair title="At 10th Level">The rageshaper can grow up to a maximum of two size categories larger with <em>devastating form</em> and his <em>rage</em> is now treated as <em>greater rage.</em></Pair>
<Pair title="At 20th Level">The rageshaper can grow up to a maximum of three size categories larger with <em>devastating form</em> and his <em>rage</em> is treated as <em>mighty rage.</em></Pair>
</Ability>
<Ability id="arc-shifter-rageshaper-rage-ex" extraClasses="subAbility" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-shifter-rageshaper-rage-ex" flavor="Relevant text from the barbarian ability.">Rage (Ex)</Pair>
<Pair title="Ability">You gain a +4 morale bonus to your Strength and Constitution, as well as a +2 morale bonus on Will saves. The increase to Constitution grants you 2 hit points per Hit Dice, but these disappear when the <em>rage</em> ends and are not lost first like <Link to="/rule/temporary_hit_points">temporary hit points</Link>.</Pair>
<Pair title="Passive Ability">While in <em>rage,</em> you take a -2 penalty to Armor Class, and you cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except Acrobatics, Fly, Intimidate, and Ride) or any ability that requires patience or concentration.</Pair>
<Pair title="Special">Temporary increases to Constitution, such as those gained from <em>rage</em> and spells like <Link to="/spell/bears_endurance">bear's endurance</Link>, do not increase the total number of rounds that a barbarian can <em>rage</em> per day. The total number of rounds of <em>rage</em> per day is renewed after resting for 8 hours, although these hours do not need to be consecutive.</Pair>
</Ability>
<Ability id="arc-shifter-rageshaper-greater-rage-ex" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-shifter-rageshaper-greater-rage-ex" flavor="Relevant text from the barbarian ability.">Greater Rage (Ex)</Pair>
<Pair title="Passive Ability">When you enter a <em>rage,</em> the morale bonus to your Strength and Constitution increase to +6 and the morale bonus on your Will saves increases to +3.</Pair>
</Ability>
<Ability id="arc-shifter-rageshaper-mighty-rage-ex" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-shifter-rageshaper-mighty-rage-ex" flavor="Relevant text from the barbarian ability.">Mighty Rage (Ex)</Pair>
<Pair title="Passive Ability">When you enter a <em>rage,</em> the morale bonus to your Strength and Constitution increase to +8 and the morale bonus on your Will saves increases to +4.</Pair>
</Ability>
<Ability id="arc-shifter-rageshaper-terrible-slam-su" icon={["mailed-fist"]}>
<Pair single id="arc-shifter-rageshaper-terrible-slam-su">Terrible Slam (Su)</Pair>
<Pair hl title="Alters">Shifter claws</Pair>
<Pair title="Ability">A rageshaper can deliver blows that demolish his foes. This functions as the <em>shifter claws</em> class ability, except his natural weapons are treated as slam attacks. Additionally, rather than granting the ability to bypass different kinds of damage reduction, the rageshaper's <em>terrible slam</em> ignores some of an object's hardness.</Pair>
<Pair title="At 1st Level"><em>Terrible slam</em> ignores 5 points of an object's hardness.</Pair>
<Pair title="At 5th Level">This becomes 10 points.</Pair>
<Pair title="At 10th Level">This increases to 15 points.</Pair>
<Pair title="At 15th Level">This becomes 20 points.</Pair>
<Pair title="At 20th Level">This increases to 25 points.</Pair>
</Ability>
<Ability id="arc-shifter-rageshaper-invulnerable-defenses-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-shifter-rageshaper-invulnerable-defenses-ex" flavor={<>A rageshaper becomes difficult to harm in his <em>devastating form.</em></>}>Invulnerable Defenses (Ex)</Pair>
<Pair hl title="Replaces">Defensive instinct, chimeric aspect, greater chimeric aspect</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">Whenever the rageshaper takes on his <em>devastating form</em> and is unencumbered and either wearing no armor or wearing light or medium nonmetal armor, he gains a +2 natural armor bonus to his AC and DR 2/-.</Pair>
</Ability>
<Ability id="arc-shifter-rageshaper-unrestrained-stride-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-shifter-rageshaper-unrestrained-stride-ex">Unrestrained Stride (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">Whenever the rageshaper is in <em>devastating form,</em> he ignores movement penalties from <Link to="/rule/difficult_terrain">difficult terrain</Link> and is immune to the <Link to="/rule/entangled">entangled</Link> condition.</Pair>
</Ability>
<Ability id="arc-shifter-rageshaper-terrible-leap-ex" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-rageshaper-terrible-leap-ex">Terrible Leap (Ex)</Pair>
<Pair hl title="Replaces">Trackless step</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">1 round/day per shifter level</Pair>
<Pair title="Move-Equivalent Action">When a rageshaper is in his <em>devastating form,</em> he can perform a <em>terrible leap</em> without attempting an Acrobatics check, jumping any distance up to his move speed (upward movement counts as double, as when flying).</Pair>
</Ability>
</>};
const _style_shifter = {title: "Style Shifter", jsx: <><h2 id="arc-shifter-style_shifter-style-shifter">Style Shifter</h2>
<p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 16</Link><br/>Among the many warriors that train on Tian Xia's Wall of Heaven, a select few have been able to perfect their combat techniques to the point where they can augment a combat style by partially transforming into the creature that inspired it. These style shifters have honed their techniques and shared them with the rest of Golarion.</p>
<Ability id="arc-shifter-style_shifter-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-shifter-style_shifter-armor-proficiency">Armor Proficiency</Pair>
<Pair hl title="Alters">Armor proficiencies</Pair>
<Pair title="Info">A style shifter is not proficient with medium armor or shields.</Pair>
</Ability>
<Ability id="arc-shifter-style_shifter-natural-strikes-ex" icon={["info"]}>
<Pair single id="arc-shifter-style_shifter-natural-strikes-ex">Natural Strikes (Ex)</Pair>
<Pair hl title="Alters">Shifter claws</Pair>
<Pair title="Info">A style shifter is considered to have <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> for the purposes of feat prerequisites and can apply the effects of feats that have Improved Unarmed Strike as a prerequisite to her <em>shifter claws.</em></Pair>
</Ability>
<Ability id="arc-shifter-style_shifter-style-shifting-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-style_shifter-style-shifting-ex">Style Shifting (Ex)</Pair>
<Pair hl title="Replaces">Shifter aspect, chimeric aspect, greater chimeric aspect, final aspect</Pair>
<Pair title="Usage">3 minutes/day + 1 minute per shifter level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Ability">A style shifter gains access to <em>style aspects.</em> A style aspect provides benefits only while the style shifter is in the style feat stance associated with the appropriate aspect (such as <Link to="/feat/boar_style">Boar Style</Link> with <em>Form of the Boar</em>).</Pair>
<Pair title="Special">A style shifter can shift into a style aspect as a <strong className="hl">free action</strong> as part of entering a style feat's stance. Otherwise, shifting into a style aspect is a <strong className="hl">swift action</strong>, while ending the effect is a <strong className="hl">free action</strong> that can be taken only on the style shifter's turn. He can shift between any aspects he has during the duration without additional cost.</Pair>
</Ability>
<Ability id="arc-shifter-style_shifter-form-of-the-boar" extraClasses="subAbility" icon={["mailed-fist","armor-downgrade"]}>
<Pair single id="arc-shifter-style_shifter-form-of-the-boar">Form of the Boar</Pair>
<Pair title="Ability">Once per round when you hit a single foe with two or more unarmed strikes, you can tear flesh. When you do, you deal an additional 1 point of <Link to="/umr/bleed">bleed</Link> damage with the attack.</Pair>
<Pair title="At 8th Level">When you tear flesh, the target becomes <Link to="/misc/sickened">sickened</Link> for 1 round.</Pair>
<Pair title="At 15th Level">Whenever you confirm a critical hit, you can attempt an <Link to="/skill/intimidate">Intimidate</Link> check to demoralize a target within 30 feet as an <strong className="hl">immediate action</strong>.</Pair>
</Ability>
<Ability id="arc-shifter-style_shifter-form-of-the-crane" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-shifter-style_shifter-form-of-the-crane">Form of the Crane</Pair>
<Pair title="Ability">You reduce the penalty on attack rolls for <Link to="/misc/fighting_defensively">fighting defensively</Link> by 1, to a minimum penalty of 0.</Pair>
<Pair title="At 8th Level">When an attack misses you, you can move 5 feet as an <strong className="hl">immediate action</strong> without provoking attacks of opportunity.</Pair>
<Pair title="At 15th Level">When an attack misses you, you can move up to half your speed as an <strong className="hl">immediate action</strong> without provoking attacks of opportunity.</Pair>
</Ability>
<Ability id="arc-shifter-style_shifter-form-of-the-dragon" extraClasses="subAbility" icon={["armor-upgrade","upgrade","armor-downgrade"]}>
<Pair single id="arc-shifter-style_shifter-form-of-the-dragon">Form of the Dragon</Pair>
<Pair title="Ability">You gain a +1 dodge bonus to your AC for each ally you <Link to="/rule/charge">charge</Link> through when charging, up to a total equal to your Dexterity modifier (minimum +0).</Pair>
<Pair title="At 8th Level">Your unarmed strike's damage die increases by one step against <Link to="/misc/shaken">shaken</Link> targets.</Pair>
<Pair title="At 15th Level">Whenever you confirm a critical hit against a shaken target, the target becomes <Link to="/misc/frightened">frightened</Link> for 1 round.</Pair>
</Ability>
<Ability id="arc-shifter-style_shifter-form-of-the-monkey" extraClasses="subAbility" icon={["upgrade","armor-downgrade"]}>
<Pair single id="arc-shifter-style_shifter-form-of-the-monkey">Form of the Monkey</Pair>
<Pair title="Ability">You gain a bonus on damage rolls while prone equal to your Wisdom modifier (minimum +0).</Pair>
<Pair title="Move-Equivalent Action">You can crawl up to half your speed.</Pair>
<Pair title="At 8th Level">Whenever a creature provokes an attack of opportunity from you, that creature is considered <Link to="/rule/flat_footed">flat-footed</Link> against your attack.</Pair>
<Pair title="At 15th Level">Whenever you take a 5-foot step, you are treated as if you were still in your original space for the purposes of <Link to="/rule/flanking">flanking</Link> others until the start of your next turn (though you can't use this aspect to provide flanking for yourself), and you can crawl up to your full speed as a <strong className="hl">move action</strong>.</Pair>
</Ability>
<Ability id="arc-shifter-style_shifter-form-of-the-panther" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-shifter-style_shifter-form-of-the-panther">Form of the Panther</Pair>
<Pair title="Ability">You gain a bonus to damage rolls for retaliatory unarmed strikes made with Panther Style equal to your Wisdom modifier (minimum +0).</Pair>
<Pair title="At 8th Level">This bonus increases to twice your Wisdom modifier.</Pair>
<Pair title="At 15th Level">If a creature misses an attack of opportunity against you prompted by your movement through a threatened square, you can make a retaliatory unarmed strike against that creature, even if you would not normally be able to make any more retaliatory strikes this turn.</Pair>
</Ability>
<Ability id="arc-shifter-style_shifter-form-of-the-snake" extraClasses="subAbility" icon={["mailed-fist","armor-downgrade"]}>
<Pair single id="arc-shifter-style_shifter-form-of-the-snake">Form of the Snake</Pair>
<Pair title="Ability">Once per round when you hit a single foe with two or more unarmed strikes and deal piercing damage on your turn, you knock that foe off-balance. The foe is flat-footed until the start of its turn.</Pair>
<Pair title="At 8th Level">A foe you knock off-balance can't take attacks of opportunity until the start of its turn and remains flat-footed until the end of its turn.</Pair>
<Pair title="At 15th Level">When you confirm a critical hit, the target is knocked off-balance and provokes attacks of opportunity from you and your allies.</Pair>
</Ability>
<Ability id="arc-shifter-style_shifter-form-of-the-snapping-turtle" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-shifter-style_shifter-form-of-the-snapping-turtle">Form of the Snapping Turtle</Pair>
<Pair title="Ability">You double your shield bonus to AC from <Link to="/feat/snapping_turtle_style">Snapping Turtle Style</Link>.</Pair>
<Pair title="At 8th Level">You still gain your shield bonus to AC from Snapping Turtle Style even when you don't have one hand free.</Pair>
<Pair title="At 15th Level">There is a 10% chance that critical hits and sneak attacks fail to affect you. This stacks with the <Link to="/magic-enh/light_fortification">light fortification</Link> armor special ability and similar effects.</Pair>
</Ability>
<Ability id="arc-shifter-style_shifter-form-of-the-tiger" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-shifter-style_shifter-form-of-the-tiger">Form of the Tiger</Pair>
<Pair title="Ability">On a successful <Link to="/rule/bull_rush">bull rush</Link>, <Link to="/rule/overrun">overrun</Link>, or <Link to="/rule/trip">trip</Link> combat maneuver, you deal slashing damage equal to your Strength bonus to the target of the maneuver.</Pair>
<Pair title="At 8th Level">This damage increases to twice your Strength bonus.</Pair>
<Pair title="At 15th Level">If you hit with two or more unarmed strikes and deal slashing damage on your turn, you also rend your target, dealing damage equal to your unarmed strike plus 1-1/2 your Strength bonus.</Pair>
</Ability>
<Ability id="arc-shifter-style_shifter-style-mastery-ex" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-style_shifter-style-mastery-ex">Style Mastery (Ex)</Pair>
<Pair title="At 1st Level">A style shifter gains a bonus <Link to="/main/style_feat">style feat</Link>.</Pair>
<Pair title="At 5th Level">A style shifter gains either a bonus style feat, or can instead gain a wildcard style slot. Whenever he enters one or more styles, he can spend his wildcard style slots to gain feats in those styles' feat paths (such as <Link to="/feat/panther_claw">Panther Claw</Link> if he enters <Link to="/feat/panther_style">Panther Style</Link>) as long as he meets their prerequisites. Each time he changes styles, he can also change these wildcard style slots.</Pair>
<Pair title="At 10th Level">He can gain another style feat or wildcard style slot.</Pair>
<Pair title="At 15th Level">He can gain another style feat or wildcard style slot.</Pair>
<Pair title="At 20th Level">He can gain another style feat or wildcard style slot.</Pair>
<Pair title="Special">If he chooses to gain a new style feat, he does not need to meet the prerequisites of it.</Pair>
</Ability>
<Ability id="arc-shifter-style_shifter-form-of-the-wild-su" icon={["magic-swirl"]}>
<Pair single id="arc-shifter-style_shifter-form-of-the-wild-su">Form of the Wild (Su)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Usage">1 hour/day per three druid levels; these hours need not be consecutive, but they must be spent in 1-hour increments</Pair>
<Pair title="Ability">A style shifter gains the ability to turn into other creatures. This functions as a <Link to="/class/druid">druid's</Link> <em>wild shape</em> ability, except he does not gain the ability to turn into an elemental. The shifter's effective druid level is equal to his class level.</Pair>
<Pair title="Special">For abilities that function based on uses of <em>wild shape,</em> each hour of <em>form of the wild</em> counts as a use.</Pair>
</Ability>
</>};
const _swarm_shifter = {title: "Swarm Shifter", jsx: <><h2 id="arc-shifter-swarm_shifter-swarm-shifter">Swarm Shifter</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 7</Link><br/>Swarm shifters channel the essence of the basest and most overlooked animals, vermin.</p>
<Ability id="arc-shifter-swarm_shifter-swarm" icon={["mailed-fist"]}>
<Pair single id="arc-shifter-swarm_shifter-swarm">Swarm</Pair>
<Pair title="Ability">A shifter that uses <strong className="hl">alternate natural attacks</strong> can choose from Bite (B, P, S), Pincers (B), or Sting (P).</Pair>
</Ability>
<Ability id="arc-shifter-swarm_shifter-vermin-aspect-su" icon={["stairs-goal","armor-upgrade","upgrade"]}>
<Pair single id="arc-shifter-swarm_shifter-vermin-aspect-su">Vermin Aspect (Su)</Pair>
<Pair hl title="Replaces">Wild shape, shifter aspect</Pair>
<Pair title="Usage">3 minutes/day + 1 minute per shifter level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Swift Action">A swarm shifter can transform into a swarm of vermin. While in her vermin form, she gains a +2 bonus to natural armor. Her size increases by one size category (as <Link to="/spell/enlarge_person">enlarge person</Link>, except her reach does not increase to 10 feet), but she can occupy the same space as a creature of any size. She must still attack a target as normal, even if occupying the same space as her target.</Pair>
<Pair title="At 5th Level">A swarm shifter becomes immune to <Link to="/rule/bull_rush">bull rush</Link>, <Link to="/rule/grapple">grapple</Link>, and <Link to="/rule/trip">trip</Link> combat maneuvers while in vermin form.</Pair>
<Pair title="At 10th Level">The swarm shifter's bonus to natural armor increases to +4 while in vermin form.</Pair>
<Pair title="At 15th Level">A swarm shifter gains the <Link to="/umr/distraction">distraction</Link> universal monster ability while in vermin form.</Pair>
<Pair title="At 20th Level">The swarm shifter becomes immune to critical hits and <Link to="/rule/flanking">flanking</Link> while in vermin form, but unlike a normal swarm, doesn't become immune to normal weapon damage.</Pair>
</Ability>
<Ability id="arc-shifter-swarm_shifter-swarmer-su" icon={["magic-palm"]}>
<Pair single id="arc-shifter-swarm_shifter-swarmer-su">Swarmer (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Swift Action">While a swarm shifter is in her natural form, she can transform her hands into living vermin at will. This grants her a touch attack that deals 1d6 points of piercing damage and counts as an area attack for the purpose of overcoming the damage reduction of swarms. She doesn't add her Strength modifier as a bonus on damage rolls for this attack.</Pair>
<Pair title="At 7th Level">This damage becomes 2d6.</Pair>
<Pair title="At 10th Level">A swarm shifter can use this ability to automatically deal her touch attack damage to foes that she is grappling.</Pair>
<Pair title="At 11th Level">This damage increases to 3d6.</Pair>
<Pair title="At 15th Level">This damage becomes 4d6. A swarm shifter can use this ability while in her vermin form to automatically deal her touch attack damage to foes within her squares.</Pair>
<Pair title="At 19th Level">This damage increases to 5d6.</Pair>
<Pair title="Special">A swarm shifter can't use her normal <em>shifter claws</em> while her hands are transformed in this way.</Pair>
</Ability>
<Ability id="arc-shifter-swarm_shifter-swarm-flow-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-swarm_shifter-swarm-flow-su">Swarm Flow (Su)</Pair>
<Pair hl title="Replaces">Chimeric aspect</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">When a swarm shifter uses her <em>vermin aspect</em> ability, she gains a swarm ability from the list below. She can select a different ability each time she uses her <em>vermin aspect</em> ability.</Pair>
</Ability>
<Ability id="arc-shifter-swarm_shifter-crawling" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-swarm_shifter-crawling">Crawling</Pair>
<Pair title="Ability">The swarm shifter gains a climb speed equal to her base speed.</Pair>
</Ability>
<Ability id="arc-shifter-swarm_shifter-flying" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-swarm_shifter-flying">Flying</Pair>
<Pair title="Ability">The swarm shifter gains a fly speed equal to her base speed, with good maneuverability.</Pair>
</Ability>
<Ability id="arc-shifter-swarm_shifter-undulating" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-swarm_shifter-undulating">Undulating</Pair>
<Pair title="Ability">The swarm shifter gains a burrow speed equal to her base speed.</Pair>
</Ability>
<Ability id="arc-shifter-swarm_shifter-greater-swarm-flow-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-swarm_shifter-greater-swarm-flow-su">Greater Swarm Flow (Su)</Pair>
<Pair hl title="Replaces">Greater chimeric aspect</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">When using her <em>vermin aspect</em> ability, a swarm shifter also gains a greater swarm ability from the list below. She can select a different ability each time she uses her <em>vermin aspect</em> ability.</Pair>
</Ability>
<Ability id="arc-shifter-swarm_shifter-crawling" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-shifter-swarm_shifter-crawling">Crawling</Pair>
<Pair title="Ability">The swarm shifter gains <Link to="/umr/tremorsense">tremorsense</Link> with a range of 60 feet and a +4 bonus on Perception checks.</Pair>
</Ability>
<Ability id="arc-shifter-swarm_shifter-flying" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-shifter-swarm_shifter-flying">Flying</Pair>
<Pair title="Ability"><p>The swarm shifter's claws change to venomous stingers that deliver poison on each attack.</p>
<div className="sideNoteWrap"><ScrollContainer id="arc-shifter-swarm_shifter--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison; Claw-injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the swarm shifter's level + her Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d3 <Link to="/rule/dex_damage">Dex damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>2 consecutive saves</td></tr></tbody></table></ScrollContainer></div></Pair>
</Ability>
<Ability id="arc-shifter-swarm_shifter-undulating" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-shifter-swarm_shifter-undulating">Undulating</Pair>
<Pair title="Passive Ability">Whenever the swarm shifter is subject to a critical hit, she gains <Link to="/umr/fast_healing">fast healing</Link> equal to <Link to="/misc/one_third">one-third</Link> of her shifter level for a number of rounds equal to 3 + her Wisdom modifier.</Pair>
</Ability>
<Ability id="arc-shifter-swarm_shifter-final-aspect-su" icon={["magic-swirl"]}>
<Pair single id="arc-shifter-swarm_shifter-final-aspect-su">Final Aspect (Su)</Pair>
<Pair hl title="Alters">Final aspect</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A swarm shifter becomes an embodiment of swarms and can cast <Link to="/spell/swarm_skin">swarm skin</Link> as a spell-like ability at will with a caster level equal to her character level. She can separate into up to five swarms, regardless of the number of levels required per swarm. When transforming into swarms with this ability, the swarm shifter still selects swarm abilities granted by the <em>swarm flow</em> and <em>greater swarm flow</em> abilities to apply to her swarm forms. The chosen swarm abilities apply to all swarms.</Pair>
</Ability>
</>};
const _verdant_shifter = {title: "Verdant Shifter", jsx: <><h2 id="arc-shifter-verdant_shifter-verdant-shifter">Verdant Shifter</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 83</Link><br/>Verdant shifters have an affinity for plants rather than animals and gain a plant-like form that grows in power as they do. Verdant shifters are the enemies of creatures that would despoil the natural world, and they seek to maintain balance with civilization and industry to ensure the sanctity of wild spaces.</p>
<Ability id="arc-shifter-verdant_shifter-speak-with-plants-sp" icon={["magic-swirl"]}>
<Pair single id="arc-shifter-verdant_shifter-speak-with-plants-sp">Speak with Plants (Sp)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Ability">A verdant shifter gains the ability to cast <Link to="/spell/speak_with_plants">speak with plants</Link> as a spell-like ability.</Pair>
</Ability>
<Ability id="arc-shifter-verdant_shifter-verdant-body-su" icon={["stairs-goal","armor-upgrade","upgrade"]}>
<Pair single id="arc-shifter-verdant_shifter-verdant-body-su">Verdant Body (Su)</Pair>
<Pair hl title="Replaces">Shifter aspect</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A verdant shifter takes on plant qualities as vines grow over her body, flowers bloom in her hair, and bark grows from her skin. The verdant shifter is treated as both her normal creature type and a plant creature for purposes of spells or effects that target a creature by type (such as <Link to="/magic-enh/bane">bane</Link> weapons and a ranger's <Link to="/ability/favored_enemy">favored enemy</Link>). <em>Verdant body</em> also grants the verdant shifter a 25% immunity to critical hits and <Link to="/misc/precision_damage">precision damage</Link> (such as <Link to="/ability/sneak_attack">sneak attack</Link>).</Pair>
<Pair title="At 5th Level">The verdant shifter gains a +2 enhancement bonus to her Constitution score.</Pair>
<Pair title="At 8th Level">The enhancement bonus to her Constitution score increases to +4 and her immunity to critical hits increases to 50%.</Pair>
<Pair title="At 15th Level">The enhancement bonus her Constitution score increases to +6.</Pair>
</Ability>
<Ability id="arc-shifter-verdant_shifter-wild-armor-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-shifter-verdant_shifter-wild-armor-ex">Wild Armor (Ex)</Pair>
<Pair hl title="Replaces">Defensive instinct</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A verdant shifter gains a natural armor bonus to her AC while unencumbered and either wearing no armor or wearing light or medium nonmetal armor. This bonus is equal to 2 + <Link to="/misc/one_fourth">one-fourth</Link> of her shifter level.</Pair>
</Ability>
<Ability id="arc-shifter-verdant_shifter-plant-shape-su" icon={["magic-swirl"]}>
<Pair single id="arc-shifter-verdant_shifter-plant-shape-su">Plant Shape (Su)</Pair>
<Pair hl title="Replaces">Chimeric form, greater chimeric form</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Usage">1 round/day per shifter level</Pair>
<Pair title="Ability">A verdant shifter's <em>wild shape</em> ability instead functions as <Link to="/spell/plant_shape_i">plant shape I</Link>.</Pair>
<Pair title="At 12th Level">This ability instead functions as <Link to="/spell/plant_shape_ii">plant shape II</Link>.</Pair>
<Pair title="At 18th Level">It functions as <Link to="/spell/plant_shape_iii">plant shape III</Link>.</Pair>
<Pair title="Special">This ability otherwise functions as the standard <em>wild shape</em> shifter class feature.</Pair>
</Ability>
</>};
const _weretouched = {title: "Weretouched", jsx: <><h2 id="arc-shifter-weretouched-weretouched">Weretouched</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 83</Link><br/>Weretouched shifters are scions of lycanthropic forces, whether hereditary or supernaturally imposed. They can assume both animal and hybrid forms, as a lycanthrope does.</p>
<Ability id="arc-shifter-weretouched-lycanthrope-aspect-su" icon={["broken-shield","armor-upgrade"]}>
<Pair single id="arc-shifter-weretouched-lycanthrope-aspect-su">Lycanthrope Aspect (Su)</Pair>
<Pair hl title="Alters">Shifter aspect</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A weretouched gains the <em>shifter aspect</em> ability, except the animal aspect chosen is the only animal aspect the weretouched can gain.</Pair>
<Pair title="At 5th Level">A weretouched gains DR/silver equal to <Link to="/misc/half">half</Link> her shifter level, to a maximum of DR 10/silver at 20th level. Additionally, a weretouched shifter becomes immune to a lycanthrope's <Link to="/umr/curse_of_lycanthropy">curse of lycanthropy</Link>.</Pair>
<Pair title="Special">This alters her other class features, as detailed in each relevant class feature. Otherwise, this ability functions identically to <em>shifter aspect.</em></Pair>
</Ability>
<Ability id="arc-shifter-weretouched-lycanthropic-empathy-ex" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-shifter-weretouched-lycanthropic-empathy-ex">Lycanthropic Empathy (Ex)</Pair>
<Pair hl title="Alters">Wild empathy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A weretouched gains <em>wild empathy</em> and a +4 bonus on <em>wild empathy</em> checks, but this ability works only on the type of animal she chose for her lycanthrope aspect.</Pair>
</Ability>
<Ability id="arc-shifter-weretouched-lycanthropic-wild-shape-su" icon={["broken-shield","stairs-goal","upgrade"]}>
<Pair single id="arc-shifter-weretouched-lycanthropic-wild-shape-su">Lycanthropic Wild Shape (Su)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">When a weretouched uses <em>wild shape,</em> she can assume only the form of an animal of the same type as her lycanthrope aspect. However, instead of assuming a major form, she can assume a hybrid form that mixes the traits of her natural form and the major form of her aspect. While in a hybrid form, she gain a +2 size bonus to her Strength score, a +2 natural armor bonus to her AC, and all of the natural attacks and abilities listed by her major form. A weretouched also counts as being in her natural form for the purpose of determining whether she can extend her <em>shifter claws.</em></Pair>
<Pair title="Special">A weretouched's hybrid form is roughly the same size and shape as her natural form, albeit with bestial qualities such as digitigrade legs or shaggy fur, so her equipment does not merge into her new form when she shifts between her natural form and hybrid form. In addition, the size of a weretouched's hybrid form is the same as the size of her natural form. This otherwise counts as assuming a major form using <em>wild shape.</em></Pair>
</Ability>
</>};
const _wild_effigy = {title: "Wild Effigy", jsx: <><h2 id="arc-shifter-wild_effigy-wild-effigy">Wild Effigy</h2>
<p><strong>Sources</strong> <Link to="/source/construct_handbook">Construct Handbook pg. 15</Link><br/>A wild effigy still takes on the shapes of natural animals, but rather than transforming her body into flesh and muscle, she transforms into constructed effigies of her chosen aspects.</p>
<Ability id="arc-shifter-wild_effigy-armor-plating-su" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-shifter-wild_effigy-armor-plating-su">Armor Plating (Su)</Pair>
<Pair hl title="Replaces">Wild empathy, track, woodland stride, trackless step</Pair>
<Pair title="Ability">A wild effigy's animal aspects are made out of carved, living rock. When a wild effigy is shifted into one of her minor or major aspects, she gains an enhancement bonus to natural armor and gains DR/adamantine equal to half her shifter level (minimum 1). The enhancement bonus is equal to 1 + <Link to="/misc/one_fourth">one-fourth</Link> of her shifter level.</Pair>
<Pair title="At 6th Level">These bonuses also apply when the wild effigy is transformed into one of her aspects using <em>wild shape.</em></Pair>
</Ability>
<Ability id="arc-shifter-wild_effigy-heart-of-earth-su" icon={["armor-upgrade"]}>
<Pair single id="arc-shifter-wild_effigy-heart-of-earth-su" flavor="A wild effigy's stone aspects no longer require even the semblance of flesh and blood to function.">Heart of Earth (Su)</Pair>
<Pair hl title="Replaces">Defensive instinct</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">When a wild effigy is shifted into a minor or major aspect, or is transformed into one of her aspects using <em>wild shape,</em> she adds her shifter level on checks to stabilize at negative hit points and gains a 25% chance to ignore a critical hit or <Link to="/misc/precision_damage">precision damage</Link>.</Pair>
<Pair title="At 9th Level">This chance increases to 50% and she becomes immune to petrification.</Pair>
<Pair title="At 15th Level">This chance increases to 75% and she becomes immune to <Link to="/umr/bleed">bleed</Link> and <Link to="/umr/blood_drain">blood drain</Link> effects.</Pair>
<Pair title="Special">This does not stack with the <Link to="/magic-enh/fortification">fortification armor property</Link> or similar effects.</Pair>
</Ability>
<Ability id="arc-shifter-wild_effigy-stoneclaw-strike-su" icon={["upgrade"]}>
<Pair single id="arc-shifter-wild_effigy-stoneclaw-strike-su">Stoneclaw Strike (Su)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Usage">3 times per day</Pair>
<Pair title="Ability">A wild effigy can sacrifice minutes from her aspects' minor forms to turn her claws into adamantine. By expending a 1-minute increment of her shifter's minor aspect ability as a <strong className="hl">swift action</strong>, she can grant her <em>shifter's claws</em> the ability to ignore an amount of DR or hardness equal to her shifter level for 1 minute.</Pair>
</Ability>
</>};
export default {adaptive_shifter:_adaptive_shifter,dragonblood_shifter:_dragonblood_shifter,elementalist_shifter:_elementalist_shifter,feyform_shifter:_feyform_shifter,fiendflesh_shifter:_fiendflesh_shifter,holy_beast:_holy_beast,leafshifter:_leafshifter,oozemorph:_oozemorph,rageshaper:_rageshaper,style_shifter:_style_shifter,swarm_shifter:_swarm_shifter,verdant_shifter:_verdant_shifter,weretouched:_weretouched,wild_effigy:_wild_effigy}