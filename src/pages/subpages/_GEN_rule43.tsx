import {IonRippleEffect} from '@ionic/react';
import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _optional_magic_changes = {title: "Optional Magic Changes", subtopics: ["dynamic_magic_item_creation","esoteric_material_components","relics","scaling_items","legacy_items","simplified_spellcasting","words_of_power"], jsx: <><p>These topics cover optional rules that change the way magic items and spellcasting work.</p>
</>};
const _dynamic_magic_item_creation = {title: "Dynamic Magic Item Creation", parent_topics: ["optional_magic_changes"], siblings: ["dynamic_magic_item_creation","esoteric_material_components","relics","scaling_items","legacy_items","simplified_spellcasting","words_of_power"], subtopics: ["dynamic_magic_item_overview","challenges_pu","paying_for_the_item","creation_time","adjustments","base_challenges","random_challenges","class_specific_challenges","perks","quirks","flaws"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 180</Link></p>
<p>In folklore, a major part of any magic item's mystique is the tale of its creation. With the dynamic magic item creation system, the crafting of magic items becomes a quick but interesting story in which the whole party can participate. Items created in this way have unusual properties that lend them character and remind the PCs of the choices they made during item creation.</p>
<p>Along with adding flavor to the crafting of magic items, this system changes the average cost of magic item creation to be variable - generally more expensive for a single creator, and possibly less expensive for a group that works together. The standard system for the creation of magic items presented in the Core Rulebook leads to automatic successes during crafting, and given enough days of downtime, it can lead to a wild power imbalance between PCs who opt into the crafting system and all other characters. The system presented here encourages characters to work together to play out the story of the item's creation while also adding unique touches to the resulting item.</p>
<p>For groups that prefer a more in-depth experience, replace the required skill checks below with roleplaying scenes.</p>
</>};
const _dynamic_magic_item_overview = {title: "Dynamic Magic Item Overview", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation"], siblings: ["dynamic_magic_item_overview","challenges_pu","paying_for_the_item","creation_time","adjustments","base_challenges","random_challenges","class_specific_challenges","perks","quirks","flaws"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 180</Link></p>
<p>The magic item creation system in this section divides the creation of magic items (other than potions and scrolls) into a series of challenges that the creators try to overcome. These challenges represent either setbacks or opportunities in the course of the creation process. The first and final challenges in the process are the same for every item: <Link to="/rule/base_challenges">preparing the vessel and completing the item</Link>.</p>
<p>Between those steps, the characters face a number of random challenges based on the total market price of the item. The process includes one additional challenge per 5,000 gp in the item's market price (minimum 1), though the GM could increase or decrease the number. Having more challenges means it's more likely that an item will have unexpected properties, for good or ill. It also makes the item's creation more expensive or time consuming on average for less skilled characters, and conversely the process will likely be cheaper and faster for a highly skilled party.</p>
</>};
const _challenges_pu = {title: "Challenges", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation"], siblings: ["dynamic_magic_item_overview","challenges_pu","paying_for_the_item","creation_time","adjustments","base_challenges","random_challenges","class_specific_challenges","perks","quirks","flaws"], subtopics: ["attempting_challenges","challenge_format"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 180</Link></p>
<p>Each challenge the PCs face represents a setback or opportunity in the magic item creation process. This system assumes that the PCs involved are gathering exotic ingredients, searching through the notes of others who have crafted similar items, and dealing with unexpected mystical variables. It allows the entire party to participate, so anyone who wishes to help counts as a creator, and only one creator needs to have the required item creation feat.</p>
</>};
const _attempting_challenges = {title: "Attempting Challenges", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","challenges_pu"], siblings: ["attempting_challenges","challenge_format"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 180</Link></p>
<p>Each challenge presents two tasks. One creator can choose a single task to attempt, or two creators can each choose to do a different task. This choice of tasks to attempt must be made before rolling any associated checks. Creators can't take 10 or 20 (even with bardic knowledge or skill mastery) or benefit from aid another on item creation tasks.</p>
<p>Some tasks don't require checks, but present other conditions for success. If a creator takes on such a task, it must be completed before attempting a task that involves a check.</p>
<p>If the creators decide to attempt both tasks for a given challenge, each task must be attempted by a different creator. For instance, when faced with a <Link to="/rule/random_challenges">sesquipedalian elucidation challenge</Link>, a wizard might pull out his dictionary and attempt a Linguistics check, while a rogue might choose to make up her own big words and attempt a Use Magic Device check. The number of tasks attempted and their success or failure determines the outcome of the challenge, as detailed below.</p>
<ScrollContainer id="rule-attempting_challenges--table-0"><table>
<thead>
<tr>
<th>One Task Attempted</th>
<th>Both Tasks Attempted</th>
<th>Challenge Result</th>
</tr>
</thead>
<tbody><tr>
<td>-</td>
<td>Succeed at both</td>
<td>Critical success</td>
</tr>
<tr>
<td>Succeed</td>
<td>Succeed at one and fail the other by less than 5</td>
<td>Success</td>
</tr>
<tr>
<td>Fail</td>
<td>Succeed at one and fail the other by 5 or more</td>
<td>Failure</td>
</tr>
<tr>
<td>-</td>
<td>Fail both</td>
<td>Critical failure</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _challenge_format = {title: "Challenge Format", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","challenges_pu"], siblings: ["attempting_challenges","challenge_format"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 180</Link></p>
<p>The stat block for a challenge includes a short description and the following sections.</p>
<p><strong className="hl">Tasks:</strong> These are the options a creator can choose from when trying to complete the challenge. They contain only short titles, and the GM should interpret the specifics in an interesting way that makes sense based on the story.</p>
<p><strong className="hl">Results:</strong> These entries cover the consequences of success or failure. Use the results from only one category; a critical success doesn't also give the benefits of a normal success, and a critical failure doesn't also impose the effects of a normal failure.</p>
</>};
const _paying_for_the_item = {title: "Paying for the Item", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation"], siblings: ["dynamic_magic_item_overview","challenges_pu","paying_for_the_item","creation_time","adjustments","base_challenges","random_challenges","class_specific_challenges","perks","quirks","flaws"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 181</Link></p>
<p>The default cost for item creation with this method is 85% of the item's market value. Various challenges can raise and lower this amount. A party encountering and critically succeeding at a large number of challenges can likely bring the cost below 50%.</p>
<p>You must purchase weapons, armor, and other items that require masterwork or ingredient components separately to begin the process. Subtract those costs from the item's market value for the purposes of all cost calculations (though not for the purposes of the required creation time or number of challenges encountered).</p>
<p>Before attempting the first challenge, the PCs purchase the initial materials by spending 25% of the item's market price. As part of the final challenge, the PCs must pay the remaining amount, accounting for any adjustments.</p>
<p>The PCs can abandon an item at any time. They don't have to pay the remaining amount, but they can't use the materials from one attempt on another item.</p>
</>};
const _creation_time = {title: "Creation Time", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation"], siblings: ["dynamic_magic_item_overview","challenges_pu","paying_for_the_item","creation_time","adjustments","base_challenges","random_challenges","class_specific_challenges","perks","quirks","flaws"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 181</Link></p>
<p>The default amount of time it takes to create an item with this system is the same as in the <Link to="/rule/magic_item_creation">normal item creation rules</Link>. The process can't be accelerated by increasing check DCs as with the normal rules.</p>
<p>Space the challenges out evenly. For instance, having four challenges for a 10,000 gp item (two base, two random) means having a challenge at the beginning, another after 3 days of work, the third challenge 7 days in, and the final on day 10.</p>
</>};
const _adjustments = {title: "Adjustments", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation"], siblings: ["dynamic_magic_item_overview","challenges_pu","paying_for_the_item","creation_time","adjustments","base_challenges","random_challenges","class_specific_challenges","perks","quirks","flaws"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 181</Link></p>
<p>The first challenge, preparing the vessel, sets some base statistics for the new magic item. Further challenges can cause adjustments to the magic item. The GM can create her own challenges, and should consider the DCs of the challenge's tasks when deciding adjustments. Challenges with lower DCs should typically have benefits that merely avoid negative adjustments, while challenges with higher DCs should be more likely to add beneficial adjustments.</p>
<p><strong className="hl">Cost:</strong> Challenges that adjust the cost increase or decrease the crafting cost by increments of 5% of the final market price. The cost can go over 100%, meaning the item would cost more to make than its market price. The final cost can never be lower than the initial 25% investment; the characters can't get a refund of that expenditure.</p>
<p><strong className="hl">Time:</strong> Challenges may add or subtract the number of remaining days of work required to create the item. When this happens, adjust the timing of challenges accordingly. The total number of days of work can never decrease below 1, nor can it decrease below the number of days the characters have already spent crafting the item. For example, if on day 3 of a 5-day process a successful challenge decreases the time by 1 day, the final challenge will happen on day 4 instead. But if the result says to decrease the time by 3 days, the PC is instead able to attempt the final challenge immediately.</p>
<p><strong className="hl">Perks, Quirks, and Flaws:</strong> A challenge may add a beneficial <Link to="/rule/perks">perk</Link>, a somewhat neutral <Link to="/rule/quirks">quirk</Link>, or a detrimental <Link to="/rule/flaws">flaw</Link> to the item. These three types of adjustments give an item a distinct flavor that sets it apart from others of its kind. The GM should secretly roll for perks, quirks, and flaws as they occur, rerolling duplicate or contradictory results. <Link to="/spell/detect_magic">Detect magic</Link> and <Link to="/spell/identify">identify</Link> typically don't reveal an item's perks, quirks, and flaws; <Link to="/spell/analyze_dweomer">analyze dweomer</Link> does, though only once the item is complete.</p>
<p><strong className="hl">Destruction:</strong> A few challenges can, if critically failed, destroy the in-progress item, which costs the PCs their current investment. Such challenges come with enticing benefits for critically succeeding, making them potentially worth the risk.</p>
</>};
const _base_challenges = {title: "Base Challenges", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation"], siblings: ["dynamic_magic_item_overview","challenges_pu","paying_for_the_item","creation_time","adjustments","base_challenges","random_challenges","class_specific_challenges","perks","quirks","flaws"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 181</Link></p>
<p>The following two challenges bookend the dynamic magic item creation process. Preparing the vessel is always the first challenge, and completing the item is always last.</p>
<h3 id="rule-base_challenges-prepare-the-vessel">Prepare the Vessel</h3>
<p>You must create or prepare an item to handle the magic you intend to instill within it.</p>
<h4 id="rule-base_challenges-tasks">Tasks</h4>
<p><strong className="hl">Forge a New Vessel</strong> Craft (item's type) DC 15 + item's caster level</p>
<p><strong className="hl">Mystical Preparations</strong> Spellcraft DC 15 + item's caster level</p>
<h4 id="rule-base_challenges-results">Results</h4>
<p><strong className="hl">Critical Success</strong> You have a superlative and efficient vessel. Set the base cost at 75% of the market price, and set the item's creation time to 1 day per 2,000 gp of the item's market price.</p>
<p><strong className="hl">Success</strong> You have a satisfactory vessel. Set the base cost at 85% of the market price, and set the item's creation time to 1 day per 1,000 gp of the item's market price.</p>
<p><strong className="hl">Failure</strong> You have a flawed vessel. Set the base cost at 100% of the market price, set the item's creation time to 1 day per 500 gp of the item's market price, and add one flaw.</p>
<p><strong className="hl">Critical Failure</strong> The vessel is destroyed.</p>
<h3 id="rule-base_challenges-complete-the-item">Complete the Item</h3>
<p>You put the finishing touches on the item.</p>
<h4 id="rule-base_challenges-tasks">Tasks</h4>
<p><strong className="hl">Improvise</strong> Use Magic Device DC 15 + item's caster level</p>
<p><strong className="hl">Provide the Requirements</strong> Meet all the item's prerequisites</p>
<h4 id="rule-base_challenges-results">Results</h4>
<p><strong className="hl">Critical Success</strong> You complete the item with a masterful flourish. Reduce the item's cost by 10%.</p>
<p><strong className="hl">Success</strong> You have completed the item.</p>
<p><strong className="hl">Failure</strong> The item is destroyed.</p>
<p><strong className="hl">Critical Failure</strong> -</p>
</>};
const _random_challenges = {title: "Random Challenges", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation"], siblings: ["dynamic_magic_item_overview","challenges_pu","paying_for_the_item","creation_time","adjustments","base_challenges","random_challenges","class_specific_challenges","perks","quirks","flaws"], subtopics: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 182</Link></p>
<p>The Game Master should roll on the table below to determine which challenges the player characters face while making the item. Alternatively, the GM can instead choose a particular challenge based on the circumstances of the campaign.</p>
<ScrollContainer id="rule-random_challenges--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Challenge</th>
</tr>
</thead>
<tbody><tr>
<td>01-04</td>
<td className="ion-activatable"><Link to="/rule/rc_aberrant_mutation">Aberrant mutation<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>05-08</td>
<td className="ion-activatable"><Link to="/rule/rc_challenging_construction">Challenging construction<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>09-12</td>
<td className="ion-activatable"><Link to="/rule/rc_contradictory_instructions">Contradictory instructions<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>13-16</td>
<td className="ion-activatable"><Link to="/rule/rc_cryptic_cross_reference">Cryptic cross-reference<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>17-20</td>
<td className="ion-activatable"><Link to="/rule/rc_distracting_visitor">Distracting visitor<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>21-24</td>
<td className="ion-activatable"><Link to="/rule/rc_emotion_requirement">Emotion requirement<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>25-28</td>
<td className="ion-activatable"><Link to="/rule/rc_energy_overload">Energy overload<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>29-32</td>
<td className="ion-activatable"><Link to="/rule/rc_enticing_offer">Enticing offer<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>33-36</td>
<td className="ion-activatable"><Link to="/rule/rc_fragile_components">Fragile components<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>37-40</td>
<td className="ion-activatable"><Link to="/rule/rc_historic_stumbling_block">Historic stumbling block<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>41-44</td>
<td className="ion-activatable"><Link to="/rule/rc_illegal_ingredients">Illegal ingredients<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>45-48</td>
<td className="ion-activatable"><Link to="/rule/rc_infested_ingredients">Infested ingredients<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>49-52</td>
<td className="ion-activatable"><Link to="/rule/rc_ingredients_develop_quasi_sentience">Ingredients develop quasi-sentience<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>53-56</td>
<td className="ion-activatable"><Link to="/rule/rc_intrusive_spirit">Intrusive spirit<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>57-60</td>
<td className="ion-activatable"><Link to="/rule/rc_ley_line_convergence">Ley line convergence<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>61-64</td>
<td className="ion-activatable"><Link to="/rule/rc_magical_resonance">Magical resonance<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>65-68</td>
<td className="ion-activatable"><Link to="/rule/rc_planar_peculiarity">Planar peculiarity<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>69-72</td>
<td className="ion-activatable"><Link to="/rule/rc_rare_reference">Rare reference<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>73-76</td>
<td className="ion-activatable"><Link to="/rule/rc_reagent_shortage">Reagent shortage<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>77-80</td>
<td className="ion-activatable"><Link to="/rule/rc_regal_requisite">Regal requisite<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>81-84</td>
<td className="ion-activatable"><Link to="/rule/rc_sesquipedalian_elucidation">Sesquipedalian elucidation<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>85-88</td>
<td className="ion-activatable"><Link to="/rule/rc_structural_flaw">Structural flaw<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>89-92</td>
<td className="ion-activatable"><Link to="/rule/rc_sudden_inspiration">Sudden inspiration<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>93-100</td>
<td className="ion-activatable"><Link to="/rule/class_specific_challenges">Class-specific challenge<IonRippleEffect /></Link></td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _rc_aberrant_mutation = {title: "Aberrant Mutation", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 182</Link><br/>The item's components have mutated, and so has your item, evolving in strange new ways.</p>
<h3 id="rule-rc_aberrant_mutation-tasks">Tasks</h3>
<p><strong className="hl">Alter Mutation</strong> Spellcraft DC 15 + item's caster level</p>
<p><strong className="hl">Analyze Mutation</strong> Knowledge (dungeoneering) DC 25</p>
<h3 id="rule-rc_aberrant_mutation-results">Results</h3>
<p><strong className="hl">Critical Success</strong> Mutation proves helpful. 1 perk.</p>
<p><strong className="hl">Success</strong> Mutation proves harmless. 1 quirk.</p>
<p><strong className="hl">Failure</strong> Mutation proves harmful. 1 flaw.</p>
<p><strong className="hl">Critical Failure</strong> Mutation spirals out of control. Item switches to a random item of the same type or slot, but of lesser value. If none exists, the item is instead destroyed; you lose 25% of the item's market price and must start over.</p>
</>};
const _rc_challenging_construction = {title: "Challenging Construction", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 182</Link><br/>One or more elements of your item's design are particularly difficult to execute.</p>
<h3 id="rule-rc_challenging_construction-tasks">Tasks</h3>
<p><strong className="hl">Blueprint and Plan</strong> Knowledge (engineering) DC 25</p>
<p><strong className="hl">Rely on Your Craftsmanship</strong> Craft (item's type) DC 20 + item's caster level</p>
<h3 id="rule-rc_challenging_construction-results">Results</h3>
<p><strong className="hl">Critical Success</strong> Challenge exceeded. -1 day, -10% cost.</p>
<p><strong className="hl">Success</strong> Challenge overcome. No adjustment.</p>
<p><strong className="hl">Failure</strong> Construction proved costly. +2 days, +5% cost.</p>
<p><strong className="hl">Critical Failure</strong> Construction botched. +15% cost, 1 flaw.</p>
</>};
const _rc_contradictory_instructions = {title: "Contradictory Instructions", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 182</Link><br/>Two respected sources disagree vehemently on the next step in the process.</p>
<h3 id="rule-rc_contradictory_instructions-tasks">Tasks</h3>
<p><strong className="hl">Discern the Sounder Choice</strong> Knowledge (arcana) DC 15 + item's caster level</p>
<p><strong className="hl">Take a Middle Path</strong> Spellcraft DC 20 + item's caster level</p>
<h3 id="rule-rc_contradictory_instructions-results">Results</h3>
<p><strong className="hl">Critical Success</strong> Best of both worlds. -3 days, -5% cost.</p>
<p><strong className="hl">Success</strong> Contradiction resolved. No adjustment.</p>
<p><strong className="hl">Failure</strong> Misstep. +3 days, +5% cost.</p>
<p><strong className="hl">Critical Failure</strong> Worst of both worlds. +7 days, +10% cost.</p>
</>};
const _rc_cryptic_cross_reference = {title: "Cryptic Cross-Reference", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 182</Link><br/>You're having trouble figuring out where to find the information you need across multiple volumes.</p>
<h3 id="rule-rc_cryptic_cross_reference-tasks">Tasks</h3>
<p><strong className="hl">Follow the Footnotes</strong> Linguistics DC 20</p>
<p><strong className="hl">Make Something Up</strong> Use Magic Device DC 15 + the item's caster level</p>
<h3 id="rule-rc_cryptic_cross_reference-results">Results</h3>
<p><strong className="hl">Critical Success</strong> Perfect coordination. -3 days, -5% cost.</p>
<p><strong className="hl">Success</strong> Excellent notes. -1 day.</p>
<p><strong className="hl">Failure</strong> Lost in paperwork. +3 days.</p>
<p><strong className="hl">Critical Failure</strong> Series of missteps. +3 days, 1 flaw.</p>
</>};
const _rc_distracting_visitor = {title: "Distracting Visitor", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 182</Link><br/>An unwanted interloper shows up while you're trying to work, making it challenging to concentrate.</p>
<h3 id="rule-rc_distracting_visitor-tasks">Tasks</h3>
<p><strong className="hl">Ignore the Distraction</strong> concentration DC 15 + item's caster level</p>
<p><strong className="hl">Send the Visitor Away</strong> Diplomacy or Intimidate DC 20</p>
<h3 id="rule-rc_distracting_visitor-results">Results</h3>
<p><strong className="hl">Critical Success</strong> Unexpected helpfulness. -1 day, -5% cost.</p>
<p><strong className="hl">Success</strong> Short chat. No adjustment.</p>
<p><strong className="hl">Failure</strong> Distracted. +1 day, 1 quirk.</p>
<p><strong className="hl">Critical Failure</strong> Offended visitor interferes. +2 days, +5% cost, 1 flaw.</p>
</>};
const _rc_emotion_requirement = {title: "Emotion Requirement", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 182</Link><br/>In order to create the item, you need to harness a particular raw emotion.</p>
<h3 id="rule-rc_emotion_requirement-tasks">Tasks</h3>
<p><strong className="hl">Elicit through Performance</strong> Perform (any) DC 20 + item's caster level</p>
<p><strong className="hl">Manipulate Others</strong> Bluff DC 20 + item's caster level</p>
<h3 id="rule-rc_emotion_requirement-results">Results</h3>
<p><strong className="hl">Critical Success</strong> Power from emotional surge. -5% cost, 1 perk.</p>
<p><strong className="hl">Success</strong> Harnessed emotions. No adjustment.</p>
<p><strong className="hl">Failure</strong> Tepid emotions. +1 day, +5% cost, 1 quirk.</p>
<p><strong className="hl">Critical Failure</strong> Interference from opposing emotions. +3 days, +10% cost, 1 flaw.</p>
</>};
const _rc_energy_overload = {title: "Energy Overload", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 183</Link><br/>A sudden surge of energy builds up within your item, threatening to damage or destroy it.</p>
<h3 id="rule-rc_energy_overload-tasks">Tasks</h3>
<p><strong className="hl">Channel into Your Body</strong> Fortitude DC 20 + item's caster level</p>
<p><strong className="hl">Divert to Another Item</strong> Craft (item's type) DC 20 + item's caster level</p>
<h3 id="rule-rc_energy_overload-results">Results</h3>
<p><strong className="hl">Critical Success</strong> Overload leveraged. -2 days, -10% cost, 1 perk.</p>
<p><strong className="hl">Success</strong> Overload diverted. 1 quirk.</p>
<p><strong className="hl">Failure</strong> Expensive damage. +7 days, +15% cost.</p>
<p><strong className="hl">Critical Failure</strong> Eldritch explosion. Item destroyed. Creators take 1d6 points of damage per caster level of the item.</p>
</>};
const _rc_enticing_offer = {title: "Enticing Offer", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 183</Link><br/>A shady figure approaches you with an offer that would make completing your item faster and cheaper.</p>
<h3 id="rule-rc_enticing_offer-tasks">Tasks</h3>
<p><strong className="hl">Discern True Worth</strong> Sense Motive DC 20</p>
<p><strong className="hl">Incorporate Offer</strong> Spellcraft DC 20 + item's caster level</p>
<h3 id="rule-rc_enticing_offer-results">Results</h3>
<p><strong className="hl">Critical Success</strong> It actually worked! -1 day, -5% cost, 1 quirk.</p>
<p><strong className="hl">Success</strong> Avoid mischief. No adjustment.</p>
<p><strong className="hl">Failure</strong> Not exactly as advertised. -1 day, -5% cost, 2 flaws.</p>
<p><strong className="hl">Critical Failure</strong> Completely duped. +1 day, +5% cost, 2 flaws.</p>
</>};
const _rc_fragile_components = {title: "Fragile Components", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 182</Link><br/>Some of the most important components of your item are extremely fragile.</p>
<h3 id="rule-rc_fragile_components-tasks">Tasks</h3>
<p><strong className="hl">Reinforce Design</strong> Craft (item's type) DC 15 + item's caster level</p>
<p><strong className="hl">Use a Delicate Touch</strong> Sleight of Hand DC 15 + item's caster level</p>
<h3 id="rule-rc_fragile_components-results">Results</h3>
<p><strong className="hl">Critical Success</strong> Flawless components. -10% cost.</p>
<p><strong className="hl">Success</strong> Undamaged components. No adjustment.</p>
<p><strong className="hl">Failure</strong> Damaged components. +1 day, +5% cost.</p>
<p><strong className="hl">Critical Failure</strong> Item destroyed. Lose 25% of the item's market price and start over.</p>
</>};
const _rc_historic_stumbling_block = {title: "Historic Stumbling Block", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 184</Link><br/>Your creation techniques have run across a challenging difficulty experienced by many past crafters.</p>
<h3 id="rule-rc_historic_stumbling_block-tasks">Tasks</h3>
<p><strong className="hl">Learn from History</strong> Knowledge (history) DC 25</p>
<p><strong className="hl">Solve It Yourself</strong> Spellcraft DC 20 + item's caster level</p>
<h3 id="rule-rc_historic_stumbling_block-results">Results</h3>
<p><strong className="hl">Critical Success</strong> An amazing workaround overcomes the issue. -3 days, -5% cost.</p>
<p><strong className="hl">Success</strong> Stumble avoided. -1 day.</p>
<p><strong className="hl">Failure</strong> Doomed to repeat the same mistake. +3 days, +10% cost.</p>
<p><strong className="hl">Critical Failure</strong> Misapplied techniques result in disaster. +7 days, +10% cost, 1 flaw.</p>
</>};
const _rc_illegal_ingredients = {title: "Illegal Ingredients", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 184</Link><br/>One or more of the necessary ingredients is flagrantly illegal, and needs to be acquired through criminal means.</p>
<h3 id="rule-rc_illegal_ingredients-tasks">Tasks</h3>
<p><strong className="hl">Entreat the Black Market</strong> Knowledge (local) DC 25</p>
<p><strong className="hl">Smuggle It Yourself</strong> Sleight of Hand DC 30</p>
<h3 id="rule-rc_illegal_ingredients-results">Results</h3>
<p><strong className="hl">Critical Success</strong> Sell surplus to a fence. -10% cost.</p>
<p><strong className="hl">Success</strong> Found just enough. No adjustment.</p>
<p><strong className="hl">Failure</strong> Failed procurement. +5 days, +5% cost, 1 quirk.</p>
<p><strong className="hl">Critical Failure</strong> Arrested and fined. +15% cost, creator attempting smuggling is arrested and sentenced to jail time or escapes custody and is on the run.</p>
</>};
const _rc_infested_ingredients = {title: "Infested Ingredients", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 184</Link><br/>Critical ingredients were infested by an exotic rot or colony of vermin, rendering them unusable.</p>
<h3 id="rule-rc_infested_ingredients-tasks">Tasks</h3>
<p><strong className="hl">Procure Inexpensive Replacements</strong> Appraise DC 25</p>
<p><strong className="hl">Purge the Infestation</strong> Heal DC 30</p>
<h3 id="rule-rc_infested_ingredients-results">Results</h3>
<p><strong className="hl">Critical Success</strong> Seller's market. -5% cost.</p>
<p><strong className="hl">Success</strong> Crisis averted. No adjustment.</p>
<p><strong className="hl">Failure</strong> Gouged on prices. +10% cost.</p>
<p><strong className="hl">Critical Failure</strong> Infestation spreads into item. +5% cost, 1 quirk, 1 flaw.</p>
</>};
const _rc_ingredients_develop_quasi_sentience = {title: "Ingredients Develop Quasi-Sentience", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 184</Link><br/>Somehow, one or more of your item's components have developed a limited intelligence.</p>
<h3 id="rule-rc_ingredients_develop_quasi_sentience-tasks">Tasks</h3>
<p><strong className="hl">Coax Ingredients to Greater Performance</strong> Handle Animal DC 30</p>
<p><strong className="hl">Magically Force Ingredients into Order</strong> Spellcraft DC 15 + item's caster level</p>
<h3 id="rule-rc_ingredients_develop_quasi_sentience-results">Results</h3>
<p><strong className="hl">Critical Success</strong> Item proceeds as normal but becomes an intelligent item of your alignment, and it likes you.</p>
<p><strong className="hl">Success</strong> Ingredients work with you. 1 perk if you coaxed the ingredients; -5% cost if you coerced the ingredients.</p>
<p><strong className="hl">Failure</strong> Ingredients rebel against you and escape or sabotage the item. +15% cost, 1 flaw.</p>
<p><strong className="hl">Critical Failure</strong> Item proceeds as normal but becomes an intelligent item of a contrary alignment, and it hates you.</p>
</>};
const _rc_intrusive_spirit = {title: "Intrusive Spirit", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 184</Link><br/>Your item's creation draws the attention of a wandering spirit with some affinity for the item.</p>
<h3 id="rule-rc_intrusive_spirit-tasks">Tasks</h3>
<p><strong className="hl">Exorcise Spirit</strong> Knowledge (religion) DC 25</p>
<p><strong className="hl">Seek Spirit's Aid</strong> Diplomacy DC 20 + item's caster level</p>
<h3 id="rule-rc_intrusive_spirit-results">Results</h3>
<p><strong className="hl">Critical Success</strong> Spirit's release. -3 days, -5% cost, 1 perk.</p>
<p><strong className="hl">Success</strong> No adjustment for exorcising the spirit; -1 day, -5% cost, 1 quirk for seeking the spirit's aid.</p>
<p><strong className="hl">Failure</strong> Spirit's interference. +3 days, +5% cost, 1 quirk.</p>
<p><strong className="hl">Critical Failure</strong> Spirit's wrath. Item is cursed.</p>
</>};
const _rc_ley_line_convergence = {title: "Ley Line Convergence", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 184</Link><br/>The item's creation is dependent on the energy of intersecting ley lines or of another magical location.</p>
<h3 id="rule-rc_ley_line_convergence-tasks">Tasks</h3>
<p><strong className="hl">Adjust Accordingly</strong> Knowledge (arcana) DC 20 + item's caster level</p>
<p><strong className="hl">Find the Perfect Spot</strong> Knowledge (geography) DC 25</p>
<h3 id="rule-rc_ley_line_convergence-results">Results</h3>
<p><strong className="hl">Critical Success</strong> Auspicious convergence. -2 days, 1 perk.</p>
<p><strong className="hl">Success</strong> Satisfactory location. No adjustment.</p>
<p><strong className="hl">Failure</strong> Misaligned location. +3 days, 1 quirk.</p>
<p><strong className="hl">Critical Failure</strong> Deleterious convergence. +10% cost, 1 flaw.</p>
</>};
const _rc_magical_resonance = {title: "Magical Resonance", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 184</Link><br/>The magical auras of several components thrum with a strange resonance whenever they are near each other.</p>
<h3 id="rule-rc_magical_resonance-tasks">Tasks</h3>
<p><strong className="hl">Analyze the Cause</strong> Spellcraft DC 15 + item's caster level</p>
<p><strong className="hl">Follow the Rhythm</strong> Perform (any) DC 15 + item's caster level</p>
<h3 id="rule-rc_magical_resonance-results">Results</h3>
<p><strong className="hl">Critical Success</strong> Resonant power revealed. -1 day, 1 perk.</p>
<p><strong className="hl">Success</strong> Resonance limited. 1 quirk.</p>
<p><strong className="hl">Failure</strong> Resonance interferes. +1 day, +5% cost, 1 quirk.</p>
<p><strong className="hl">Critical Failure</strong> Out of control! +3 days, +10% cost, 1 flaw.</p>
</>};
const _rc_planar_peculiarity = {title: "Planar Peculiarity", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 184</Link><br/>You realize that your item's creation is influenced by planar convergences or other peculiarities.</p>
<h3 id="rule-rc_planar_peculiarity-tasks">Tasks</h3>
<p><strong className="hl">Consult a Planar Orrery</strong> Knowledge (planes) DC 25</p>
<p><strong className="hl">Secure Outsider's Assistance</strong> Diplomacy DC 20 + item's caster level</p>
<h3 id="rule-rc_planar_peculiarity-results">Results</h3>
<p><strong className="hl">Critical Success</strong> Perfectly aligned. -3 days, -5% cost, 1 perk.</p>
<p><strong className="hl">Success</strong> Well aligned. -1 day.</p>
<p><strong className="hl">Failure</strong> Poorly aligned. +1 day, 1 quirk, 1 flaw.</p>
<p><strong className="hl">Critical Failure</strong> Catastrophically aligned. +3 days, +5% cost, 1 flaw.</p>
</>};
const _rc_rare_reference = {title: "Rare Reference", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 185</Link><br/>You uncovered a reference that a rare book located in a large library will help with the item's creation.</p>
<h3 id="rule-rc_rare_reference-tasks">Tasks</h3>
<p><strong className="hl">Check the Card Catalog</strong> Linguistics DC 20</p>
<p><strong className="hl">Scan the Shelves</strong> Perception DC 30</p>
<h3 id="rule-rc_rare_reference-results">Results</h3>
<p><strong className="hl">Critical Success</strong> Expedient search. -3 days.</p>
<p><strong className="hl">Success</strong> Found it! -1 day.</p>
<p><strong className="hl">Failure</strong> Lengthy search. +3 days.</p>
<p><strong className="hl">Critical Failure</strong> Huge delays and fees. +10 days, +5% cost.</p>
</>};
const _rc_reagent_shortage = {title: "Reagent Shortage", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 185</Link><br/>You suddenly realize that you don't have enough stock of an important ingredient.</p>
<h3 id="rule-rc_reagent_shortage-tasks">Tasks</h3>
<p><strong className="hl">Improvise a Substitution</strong> Craft (alchemy) DC 30</p>
<p><strong className="hl">Search for More</strong> Survival DC 25</p>
<h3 id="rule-rc_reagent_shortage-results">Results</h3>
<p><strong className="hl">Critical Success</strong> Amazing combination. -5% cost, 1 perk.</p>
<p><strong className="hl">Success</strong> Sufficient components. No adjustment.</p>
<p><strong className="hl">Failure</strong> Missing component. +10% cost.</p>
<p><strong className="hl">Critical Failure</strong> Terrible mix. +5% cost, 1 flaw.</p>
</>};
const _rc_regal_requisite = {title: "Regal Requisite", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 185</Link><br/>Your item requires a king's hair, a prince's kiss, or some other participation from high-ranking nobility.</p>
<h3 id="rule-rc_regal_requisite-tasks">Tasks</h3>
<p><strong className="hl">Exploit Noble Ties</strong> Knowledge (nobility) DC 25</p>
<p><strong className="hl">Falsify the Ingredients</strong> Use Magic Device DC 20 + item's caster level</p>
<h3 id="rule-rc_regal_requisite-results">Results</h3>
<p><strong className="hl">Critical Success</strong> Regal synergy. 1 perk.</p>
<p><strong className="hl">Success</strong> No adjustment for noble ties; 1 quirk for falsified ingredients.</p>
<p><strong className="hl">Failure</strong> Introduced impurities. 1 flaw.</p>
<p><strong className="hl">Critical Failure</strong> Impurities and ostracism. +3 days, 1 flaw, creator attempting to exploit noble ties is ostracized at court.</p>
</>};
const _rc_sesquipedalian_elucidation = {title: "Sesquipedalian Elucidation", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 185</Link><br/>The instructions for your next component are nearly impossible to understand due to abstruse language.</p>
<h3 id="rule-rc_sesquipedalian_elucidation-tasks">Tasks</h3>
<p><strong className="hl">Consult a Dictionary</strong> Linguistics DC 15 + item's caster level</p>
<p><strong className="hl">Make Up Your Own Big Words</strong> Use Magic Device DC 20 + item's caster level</p>
<h3 id="rule-rc_sesquipedalian_elucidation-results">Results</h3>
<p><strong className="hl">Critical Success</strong> Master of erudition. -3 days, -5% cost.</p>
<p><strong className="hl">Success</strong> Instructions elucidated. -1 day.</p>
<p><strong className="hl">Failure</strong> Nonplussed. +3 days, +5% cost.</p>
<p><strong className="hl">Critical Failure</strong> Confounded. +7 days, +10% cost.</p>
</>};
const _rc_structural_flaw = {title: "Structural Flaw", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 185</Link><br/>Partway through the creation process, you notice a flaw in the item's physical design.</p>
<h3 id="rule-rc_structural_flaw-tasks">Tasks</h3>
<p><strong className="hl">Disassemble and Adjust</strong> Disable Device DC 30</p>
<p><strong className="hl">Turn to Your Advantage</strong> Craft (item's type) DC 20 + item's caster level</p>
<h3 id="rule-rc_structural_flaw-results">Results</h3>
<p><strong className="hl">Critical Success</strong> Surprising benefits. +1 day, -10% cost, 1 perk.</p>
<p><strong className="hl">Success</strong> Meticulousness pays off. +1 day, -5% cost.</p>
<p><strong className="hl">Failure</strong> Insurmountable flaw. +3 days, +5% cost, 1 flaw.</p>
<p><strong className="hl">Critical Failure</strong> Item destroyed in disassembly. Lose 25% of the item's market price and start over.</p>
</>};
const _rc_sudden_inspiration = {title: "Sudden Inspiration", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation","random_challenges"], siblings: ["rc_aberrant_mutation","rc_challenging_construction","rc_contradictory_instructions","rc_cryptic_cross_reference","rc_distracting_visitor","rc_emotion_requirement","rc_energy_overload","rc_enticing_offer","rc_fragile_components","rc_historic_stumbling_block","rc_illegal_ingredients","rc_infested_ingredients","rc_ingredients_develop_quasi_sentience","rc_intrusive_spirit","rc_ley_line_convergence","rc_magical_resonance","rc_planar_peculiarity","rc_rare_reference","rc_reagent_shortage","rc_regal_requisite","rc_sesquipedalian_elucidation","rc_structural_flaw","rc_sudden_inspiration"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 185</Link><br/>You are struck with a sudden stroke of brilliance and alter the creation process.</p>
<h3 id="rule-rc_sudden_inspiration-tasks">Tasks</h3>
<p><strong className="hl">Improve the Item</strong> Spellcraft DC 20 + item's caster level</p>
<p><strong className="hl">Improve the Methodology</strong> Knowledge (arcana) DC 20 + item's caster level</p>
<h3 id="rule-rc_sudden_inspiration-results">Results</h3>
<p><strong className="hl">Critical Success</strong> Incredible breakthrough. -2 days, -5% cost, 1 perk.</p>
<p><strong className="hl">Success</strong> Breakthrough. 1 perk for improved item; -2 days for improved methodology.</p>
<p><strong className="hl">Failure</strong> False lead. +1 day, 1 quirk.</p>
<p><strong className="hl">Critical Failure</strong> Terrible idea. +2 days, +5% cost, 1 flaw.</p>
</>};
const _class_specific_challenges = {title: "Class-Specific Challenges", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation"], siblings: ["dynamic_magic_item_overview","challenges_pu","paying_for_the_item","creation_time","adjustments","base_challenges","random_challenges","class_specific_challenges","perks","quirks","flaws"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 185</Link></p>
<p>To generate a class-specific challenge, determine which of the following challenges applies to at least one creator working on the item and pick one randomly from among those options. If none of these applies, choose a fitting challenge from the previous section (such as illegal ingredients for a rogue or rare reference for a wizard).</p>
<ScrollContainer id="rule-class_specific_challenges--table-0"><table>
<thead>
<tr>
<th>Challenge</th>
<th>Appropriate Creators</th>
</tr>
</thead>
<tbody><tr>
<td>Crisis of faith</td>
<td>Divine spellcaster with a patron deity</td>
</tr>
<tr>
<td>Instability from within</td>
<td>Spellcaster who draws power from within, such as an oracle or a sorcerer</td>
</tr>
<tr>
<td>Natural disaster</td>
<td>Creator with a connection to nature, such as a druid or a ranger</td>
</tr>
<tr>
<td>Natural wonder</td>
<td>Creator with a connection to nature, such as a druid or a ranger</td>
</tr>
<tr>
<td>Otherworldly aid</td>
<td>Creator with a connection to outsiders, spirits, a patron, or a curse, such as an infernal sorcerer, an oracle, or a witch</td>
</tr>
<tr>
<td>Otherworldly interference</td>
<td>Creator with a connection to outsiders, spirits, a patron, or a curse, such as an infernal sorcerer, an oracle, or a witch</td>
</tr>
<tr>
<td>Personal surge</td>
<td>Spellcaster who draws power from within, such as an oracle or a sorcerer</td>
</tr>
<tr>
<td>Sign from the gods</td>
<td>Divine spellcaster with a patron deity</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-class_specific_challenges-crisis-of-faith">Crisis of Faith</h3>
<p>During the creation process, you experience ill omens from your patron deity that make you question your very faith.</p>
<h4 id="rule-class_specific_challenges-tasks">Tasks</h4>
<p><strong className="hl">Persevere</strong> Will DC 20 + item's caster level</p>
<p><strong className="hl">Search for Answers</strong> Knowledge (religion) DC 15 + item's caster level</p>
<h4 id="rule-class_specific_challenges-results">Results</h4>
<p><strong className="hl">Critical Success</strong> Perseverance pays off. 1 perk.</p>
<p><strong className="hl">Success</strong> Crisis overcome. No adjustment.</p>
<p><strong className="hl">Failure</strong> Shaken faith. +1 day, +5% cost, 1 quirk.</p>
<p><strong className="hl">Critical Failure</strong> Patron's ire. +3 days, +10% cost, 1 flaw.</p>
<h3 id="rule-class_specific_challenges-instability-from-within">Instability from Within</h3>
<p>Something within you emerges at an inopportune time and threatens the item's creation.</p>
<h4 id="rule-class_specific_challenges-tasks">Tasks</h4>
<p><strong className="hl">Account for the Instability</strong> Knowledge (arcana) DC 15 + item's caster level</p>
<p><strong className="hl">Roll with It</strong> Use Magic Device DC 20 + item's caster level</p>
<h4 id="rule-class_specific_challenges-results">Results</h4>
<p><strong className="hl">Critical Success</strong> Instability exploited. -5% cost, 1 quirk.</p>
<p><strong className="hl">Success</strong> Instability avoided. No adjustment.</p>
<p><strong className="hl">Failure</strong> Erratic item. +5% cost, 1 quirk.</p>
<p><strong className="hl">Critical Failure</strong> Unstable item. +5% cost, 1 quirk, 1 flaw.</p>
<h3 id="rule-class_specific_challenges-natural-disaster">Natural Disaster</h3>
<p>During a stage of the item's creation in a natural setting, there's an unexpected natural disaster.</p>
<h4 id="rule-class_specific_challenges-tasks">Tasks</h4>
<p><strong className="hl">Harness the Power</strong> Use Magic Device DC 20 + item's caster level</p>
<p><strong className="hl">Take the Proper Precautions</strong> Survival DC 15 + item's caster level</p>
<h4 id="rule-class_specific_challenges-results">Results</h4>
<p><strong className="hl">Critical Success</strong> Shaped by the disaster's power. -10% cost, 1 quirk, 1 perk.</p>
<p><strong className="hl">Success</strong> Danger avoided. 1 quirk for harnessing the power; no adjustment for precautions.</p>
<p><strong className="hl">Failure</strong> Damaging disaster. +7 days, +10% cost.</p>
<p><strong className="hl">Critical Failure</strong> Disastrous consequences. Item destroyed. Lose 25% of the item's market price and start over. Creators take 1d6 points of damage per item's caster level of an energy type appropriate to the disaster.</p>
<h3 id="rule-class_specific_challenges-natural-wonder">Natural Wonder</h3>
<p>During a stage of the item's creation in a natural setting, a rare wonder of nature reveals itself.</p>
<h4 id="rule-class_specific_challenges-tasks">Tasks</h4>
<p><strong className="hl">Reflect on the Wonder's Beauty</strong> Craft (item's type) DC 20 + item's caster level</p>
<p><strong className="hl">Show Respect for Nature</strong> Knowledge (nature) DC 20 + item's caster level</p>
<h4 id="rule-class_specific_challenges-results">Results</h4>
<p><strong className="hl">Critical Success</strong> Wondrous boon. -10% cost, 1 perk.</p>
<p><strong className="hl">Success</strong> Inspiring wonder. -5% cost, 1 quirk.</p>
<p><strong className="hl">Failure</strong> Ephemeral wonder. +1 day, 1 quirk.</p>
<p><strong className="hl">Critical Failure</strong> Distracting wonder. +7 days, +5% cost, 1 quirk.</p>
<h3 id="rule-class_specific_challenges-otherworldly-aid">Otherworldly Aid</h3>
<p>Otherworldly beings are tampering with your item's creation in an attempt to assist you.</p>
<h4 id="rule-class_specific_challenges-tasks">Tasks</h4>
<p><strong className="hl">Alter Construction Accordingly</strong> Craft (item's type) DC 20 + item's caster level</p>
<p><strong className="hl">Respectfully Redirect Their Efforts</strong> Diplomacy DC 20 + item's caster level</p>
<h4 id="rule-class_specific_challenges-results">Results</h4>
<p><strong className="hl">Critical Success</strong> Incredible Aid. -6 days, -10% cost, 1 quirk.</p>
<p><strong className="hl">Success</strong> Effective Aid. -3 days, -5% cost, 1 quirk.</p>
<p><strong className="hl">Failure</strong> Ineffective Aid. 1 quirk.</p>
<p><strong className="hl">Critical Failure</strong> Disaster. +3 days, +10% cost, 1 quirk, 1 flaw.</p>
<h3 id="rule-class_specific_challenges-otherworldly-interference">Otherworldly Interference</h3>
<p>Otherworldly beings are meddling with your item's creation, whether from near or afar.</p>
<h4 id="rule-class_specific_challenges-tasks">Tasks</h4>
<p><strong className="hl">Convince Them to Stop</strong> Diplomacy DC 20 + item's caster level</p>
<p><strong className="hl">Use Protective Measures</strong> Knowledge (religion or planes) DC 20 + item's caster level</p>
<h4 id="rule-class_specific_challenges-results">Results</h4>
<p><strong className="hl">Critical Success</strong> Otherworldly repairs. -3 days, -10% cost, 1 quirk.</p>
<p><strong className="hl">Success</strong> Inconsequential interference. No adjustment.</p>
<p><strong className="hl">Failure</strong> Unrelenting interference. +5% cost, 1 quirk.</p>
<p><strong className="hl">Critical Failure</strong> Severe interference. +3 days, +5% cost, 1 quirk, 1 flaw.</p>
<h3 id="rule-class_specific_challenges-personal-surge">Personal Surge</h3>
<p>A surge of beneficial power springs up from unknown depths within you.</p>
<h4 id="rule-class_specific_challenges-tasks">Tasks</h4>
<p><strong className="hl">Embrace the Power</strong> Use Magic Device DC 20 + item's caster level</p>
<p><strong className="hl">Focus the Surge</strong> Spellcraft DC 20 + item's caster level</p>
<h4 id="rule-class_specific_challenges-results">Results</h4>
<p><strong className="hl">Critical Success</strong> Incredible surge. -3 days, -5% cost, 1 perk.</p>
<p><strong className="hl">Success</strong> Surging boost. -1 day, -5% cost.</p>
<p><strong className="hl">Failure</strong> Squandered surge. 1 quirk.</p>
<p><strong className="hl">Critical Failure</strong> Overload. +5% cost, 1 quirk, 1 flaw.</p>
<h3 id="rule-class_specific_challenges-sign-from-the-gods">Sign from the Gods</h3>
<p>During the creation process, you receive signs that indicate your patron's favor.</p>
<h4 id="rule-class_specific_challenges-tasks">Tasks</h4>
<p><strong className="hl">Donate to the Faith</strong> Donate 5% of the item's market price or more to the patron's interests</p>
<p><strong className="hl">Offer Prayers of Thanks</strong> Knowledge (religion) DC 20 + item's caster level</p>
<h4 id="rule-class_specific_challenges-results">Results</h4>
<p><strong className="hl">Critical Success</strong> Divine intervention. Halve the remaining number of days, 1 perk.</p>
<p><strong className="hl">Success</strong> Favor's blessing. 1 perk.</p>
<p><strong className="hl">Failure</strong> Ingratitude's comeuppance. 1 flaw.</p>
<p><strong className="hl">Critical Failure</strong> -</p>
</>};
const _perks = {title: "Perks", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation"], siblings: ["dynamic_magic_item_overview","challenges_pu","paying_for_the_item","creation_time","adjustments","base_challenges","random_challenges","class_specific_challenges","perks","quirks","flaws"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 187</Link></p>
<p>Perks are beneficial adjustments to an item, often gained from critical success at a challenge. The strongest perks tend to have the highest numbers on the table below. Reroll duplicates and perks that don't fit the item. Feel free to invent your own perks or apply an appropriate perk without rolling.</p>
<ScrollContainer id="rule-perks--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Perk</th>
</tr>
</thead>
<tbody><tr>
<td>01-04</td>
<td>Lightweight</td>
</tr>
<tr>
<td>05-08</td>
<td>Durable</td>
</tr>
<tr>
<td>09-12</td>
<td>Impervious</td>
</tr>
<tr>
<td>13-16</td>
<td>Energy-kissed</td>
</tr>
<tr>
<td>17-20</td>
<td>Sacred</td>
</tr>
<tr>
<td>21-24</td>
<td>Faithful</td>
</tr>
<tr>
<td>25-28</td>
<td>Shielding</td>
</tr>
<tr>
<td>29-32</td>
<td>Tentacled touch</td>
</tr>
<tr>
<td>33-36</td>
<td>Inscribed</td>
</tr>
<tr>
<td>37-40</td>
<td>Eager</td>
</tr>
<tr>
<td>41-44</td>
<td>Enemy glow</td>
</tr>
<tr>
<td>45-48</td>
<td>Hated Foe</td>
</tr>
<tr>
<td>49-52</td>
<td>Skillful</td>
</tr>
<tr>
<td>53-56</td>
<td>Exemplar</td>
</tr>
<tr>
<td>57-60</td>
<td>Unassuming</td>
</tr>
<tr>
<td>61-64</td>
<td>Lucky</td>
</tr>
<tr>
<td>65-68</td>
<td>Draconic</td>
</tr>
<tr>
<td>69-72</td>
<td>Mindlinked</td>
</tr>
<tr>
<td>73-76</td>
<td>Messenger</td>
</tr>
<tr>
<td>77-79</td>
<td>Healthful</td>
</tr>
<tr>
<td>80-82</td>
<td>Energetic</td>
</tr>
<tr>
<td>83-85</td>
<td>Lunar</td>
</tr>
<tr>
<td>86-88</td>
<td>Solar</td>
</tr>
<tr>
<td>89-91</td>
<td>Potent</td>
</tr>
<tr>
<td>92-94</td>
<td>Spying</td>
</tr>
<tr>
<td>95-97</td>
<td>Resizing</td>
</tr>
<tr>
<td>98-100</td>
<td>Egoistic</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Draconic:</strong> Determine a random type of chromatic or metallic dragon. The item has a sheen in the color of that dragon's scales, and grants its bearer 3 points of energy resistance against the damage type that dragon's breath weapon deals.</p>
<p><strong className="hl">Durable:</strong> The item has twice as many hit points as it normally would.</p>
<p><strong className="hl">Eager:</strong> The item always wants to be worn or held by its owner. The owner can draw an eager weapon or handheld item as a swift action, don eager armor in half the time, and don any other eager item as a swift action, though it takes twice as long as normal to remove eager armor and 1 full round to remove or stow any other eager item. The DC to disarm or steal an eager item increases by 5.</p>
<p><strong className="hl">Egoistic:</strong> All of the bearer's feats and class features that affect a specific weapon or weapon group change to affect the egoistic weapon's type or group as long as she possesses the weapon. If the bearer can specify more than one type or group, she can choose which weapon or group she retains and which switch to the egoistic weapon's type or group.<sup><InnerLink showBacklink="backlink-rule-perks-ref-3-1" id="rule-perks-ref-3-1" data-hash-target to="rule-perks-3">1</InnerLink></sup></p>
<p><strong className="hl">Enemy Glow:</strong> The item glows when a specific type of creature is nearby. Either choose an appropriate type or roll one randomly on the <Link to="/class/ranger">ranger's</Link> favored enemy list.</p>
<p><strong className="hl">Energetic:</strong> The item deals 1 additional point of damage of an energy type randomly determined upon creation. This damage isn't multiplied on a critical hit.<sup><InnerLink showBacklink="backlink-rule-perks-ref-3-2" id="rule-perks-ref-3-2" data-hash-target to="rule-perks-3">1</InnerLink></sup></p>
<p><strong className="hl">Energy-Kissed:</strong> The item is immune to a random type of energy, but doesn't grant this immunity to its bearer.</p>
<p><strong className="hl">Exemplar:</strong> The item is a perfect example of its kind, granting advantages against similar items. Exemplar weapons grant a +1 AC bonus against other weapons of that type (such as longswords), armors grant a +1 bonus on attack rolls against enemies wearing that type of armor (such as breastplates), and activated items grant a +1 bonus on saving throws against other items of that exact function (so a <Link to="/magic-staff/staff_of_fire">staff of fire</Link> would grant its benefit against other staves of fire, but not against any other staves).<sup><InnerLink showBacklink="backlink-rule-perks-ref-4-1" id="rule-perks-ref-4-1" data-hash-target to="rule-perks-4">2</InnerLink></sup></p>
<p><strong className="hl">Faithful:</strong> The item's caster level is treated as 1 higher when its effects benefit the faithful of its creator's patron deity or when used against worshipers of one faith hated by that deity (selected by the creator if the patron hates multiple faiths). The item also gains a +1 bonus on damage rolls against hated worshipers. If more than one creator qualifies, the creators must choose one of their patrons.<sup><InnerLink showBacklink="backlink-rule-perks-ref-1-1" id="rule-perks-ref-1-1" data-hash-target to="rule-perks-1">3</InnerLink></sup></p>
<p><strong className="hl">Hated Foe:</strong> The weapon deals 1 additional point of damage when it hits a specific type of creature. Either choose an appropriate type or roll one randomly on the <Link to="/class/ranger">ranger's</Link> favored enemy list.<sup><InnerLink showBacklink="backlink-rule-perks-ref-3-3" id="rule-perks-ref-3-3" data-hash-target to="rule-perks-3">1</InnerLink></sup></p>
<p><strong className="hl">Healthful:</strong> The bearer of this item regains 1 additional hit point from any magical effect that causes her to regain hit points.</p>
<p><strong className="hl">Impervious:</strong> The item's hardness is 5 higher than usual.</p>
<p><strong className="hl">Inscribed:</strong> The item's bearer can spend a full-round action to inscribe a hidden message up to 25 words long on the item's surface. This message remains invisible until either the next time a creature holds the item or a specific passphrase is spoken. Inscribing a new message erases the previous one.</p>
<p><strong className="hl">Lightweight:</strong> The item weighs half as much as normal.</p>
<p><strong className="hl">Lucky:</strong> Each day, there's a 50% chance the item grants its bearer a +1 luck bonus on a random type of saving throw for that day.</p>
<p><strong className="hl">Lunar:</strong> While exposed to moonlight, this item causes any enemy adjacent to the bearer to take a -1 penalty on saving throws against sleep and similar effects.</p>
<p><strong className="hl">Messenger:</strong> Once per week, the item can transform into an animal and deliver a message as the <Link to="/spell/animal_messenger">animal messenger</Link> spell.</p>
<p><strong className="hl">Mindlinked:</strong> The item is linked to the owner, who can command it mentally. The action cost is the same, but it doesn't make noise and the activation is purely mental.<sup><InnerLink showBacklink="backlink-rule-perks-ref-5-1" id="rule-perks-ref-5-1" data-hash-target to="rule-perks-5">4</InnerLink></sup></p>
<p><strong className="hl">Potent:</strong> The item's caster level is 1 higher than intended.</p>
<p><strong className="hl">Resizing:</strong> This item automatically resizes itself to match the size of its bearer. The size change takes 1 minute.</p>
<p><strong className="hl">Sacred:</strong> The item glows with the image of its creator's holy or unholy symbol, counting as a holy or unholy symbol for all purposes. If more than one creator qualifies, the creators choose one of their patrons' holy or unholy symbols.<sup><InnerLink showBacklink="backlink-rule-perks-ref-1-2" id="rule-perks-ref-1-2" data-hash-target to="rule-perks-1">3</InnerLink></sup></p>
<p><strong className="hl">Shielding:</strong> This item negates the first <Link to="/spell/magic_missile">magic missile</Link> directed at it or its bearer each day. If a caster directs multiple missiles at the bearer simultaneously, reduce the number of missiles that strike the bearer by one.</p>
<p><strong className="hl">Skillful:</strong> The item grants a +1 competence bonus on checks with a random skill.</p>
<p><strong className="hl">Solar:</strong> While exposed to sunlight, this item causes an enemy adjacent to the bearer to become dazzled for as long as the two remain adjacent.</p>
<p><strong className="hl">Spying:</strong> The item transmits sensory information to its owner, as if it were the sensor for a <Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link> spell. The owner must concentrate on receiving this information instead of her own visual or auditory information as a standard action to gain this benefit, and the effect becomes inert while she isn't concentrating. Determine randomly upon the item's creation whether the item relays visual or auditory information.</p>
<p><strong className="hl">Tentacled Touch:</strong> As the aberrant <Link to="/rule/quirks">quirk</Link>, but the tentacles can extend, allowing the item to deliver any touch effects with an additional 5 feet of reach. This does not increase the weapon reach of a magic weapon.<sup><InnerLink showBacklink="backlink-rule-perks-ref-2-1" id="rule-perks-ref-2-1" data-hash-target to="rule-perks-2">5</InnerLink></sup></p>
<p><strong className="hl">Unassuming:</strong> The item registers as though it were nonmagical, as though affected by a <Link to="/spell/magic_aura">magic aura</Link> spell.</p>
<section data-footnotes>
<h3 id="rule-perks-label">Footnotes</h3>
<ol>
<li id="rule-perks-3">
<p>Item must be a weapon. <InnerLink id="backlink-rule-perks-ref-3-1" data-hash-target to="rule-perks-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink> <InnerLink id="backlink-rule-perks-ref-3-2" data-hash-target to="rule-perks-ref-3-2" aria-label="Back to reference 3-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-perks-ref-3-3" data-hash-target to="rule-perks-ref-3-3" aria-label="Back to reference 3-3">↩<sup>3</sup></InnerLink></p>
</li>
<li id="rule-perks-4">
<p>Item must be a weapon, armor, or an activated item. <InnerLink id="backlink-rule-perks-ref-4-1" data-hash-target to="rule-perks-ref-4-1" aria-label="Back to reference 4-1">↩</InnerLink></p>
</li>
<li id="rule-perks-1">
<p>Creator must have levels in a divine spellcasting class and have a patron deity. <InnerLink id="backlink-rule-perks-ref-1-1" data-hash-target to="rule-perks-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink> <InnerLink id="backlink-rule-perks-ref-1-2" data-hash-target to="rule-perks-ref-1-2" aria-label="Back to reference 1-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="rule-perks-5">
<p>Item must be activated by a command word. <InnerLink id="backlink-rule-perks-ref-5-1" data-hash-target to="rule-perks-ref-5-1" aria-label="Back to reference 5-1">↩</InnerLink></p>
</li>
<li id="rule-perks-2">
<p>Item must be one that delivers effects upon touch, such as a staff or a wand. <InnerLink id="backlink-rule-perks-ref-2-1" data-hash-target to="rule-perks-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _quirks = {title: "Quirks", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation"], siblings: ["dynamic_magic_item_overview","challenges_pu","paying_for_the_item","creation_time","adjustments","base_challenges","random_challenges","class_specific_challenges","perks","quirks","flaws"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 189</Link></p>
<p>Quirks are oddities that make an item unusual in a way that's generally neither positive nor negative, or may be a little of both. The more beneficial or double-edged quirks are higher on the following table. Feel free to invent your own quirks or apply an appropriate quirk without rolling.</p>
<ScrollContainer id="rule-quirks--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Quirk</th>
</tr>
</thead>
<tbody><tr>
<td>01</td>
<td>Flaw</td>
</tr>
<tr>
<td>02-04</td>
<td>Infested</td>
</tr>
<tr>
<td>05-08</td>
<td>Unusually colored</td>
</tr>
<tr>
<td>09-12</td>
<td>Color-altering</td>
</tr>
<tr>
<td>13-16</td>
<td>Mood coloration</td>
</tr>
<tr>
<td>17-20</td>
<td>Aberrant</td>
</tr>
<tr>
<td>21-24</td>
<td>Decorous*</td>
</tr>
<tr>
<td>25-28</td>
<td>Dirty</td>
</tr>
<tr>
<td>29-32</td>
<td>Junky</td>
</tr>
<tr>
<td>33-36</td>
<td>Magnificent appearance</td>
</tr>
<tr>
<td>37-40</td>
<td>Verdant</td>
</tr>
<tr>
<td>41-44</td>
<td>Noisy</td>
</tr>
<tr>
<td>45-48</td>
<td>Bloodthirsty</td>
</tr>
<tr>
<td>49-52</td>
<td>Levitating</td>
</tr>
<tr>
<td>53-56</td>
<td>Molting</td>
</tr>
<tr>
<td>57-60</td>
<td>Soprano</td>
</tr>
<tr>
<td>61-64</td>
<td>Bass</td>
</tr>
<tr>
<td>65-68</td>
<td>Giant-eared</td>
</tr>
<tr>
<td>69-72</td>
<td>Nose-enlarging</td>
</tr>
<tr>
<td>73-76</td>
<td>Spiritbound</td>
</tr>
<tr>
<td>77-80</td>
<td>Racially attuned</td>
</tr>
<tr>
<td>81-84</td>
<td>Loyal</td>
</tr>
<tr>
<td>85-87</td>
<td>Wet</td>
</tr>
<tr>
<td>88-90</td>
<td>Slimy</td>
</tr>
<tr>
<td>91-93</td>
<td>Unpredictable*</td>
</tr>
<tr>
<td>94-96</td>
<td>Convergent</td>
</tr>
<tr>
<td>97-99</td>
<td>Glittering</td>
</tr>
<tr>
<td>100</td>
<td>Perk</td>
</tr>
</tbody></table></ScrollContainer>
<p>* Must be an activated item.</p>
<p><strong className="hl">Aberrant:</strong> The item has eyes, maws, and tentacles, though this has no additional effect.</p>
<p><strong className="hl">Bass:</strong> The bearer's voice deepens an octave.</p>
<p><strong className="hl">Bloodthirsty:</strong> The item shakes slightly whenever blood is spilled within 20 feet of it.</p>
<p><strong className="hl">Color-Altering:</strong> The color of the bearer's eyes, hair, or skin changes when she carries or wears the item.</p>
<p><strong className="hl">Convergent:</strong> The item is connected to another plane, bringing its bearer into telepathic contact with an otherworldly entity. The entity can communicate with the bearer to serve its own ends. Choose an appropriate entity or choose randomly from among outsider subtypes. The entity shouldn't be a being that can cause harm to the bearer through telepathic contact, such as a <Link to="/monster/star_spawn_of_cthulhu">star-spawn of Cthulhu</Link>.</p>
<p><strong className="hl">Decorous:</strong> The item activates only if the user says "please" and ceases function for 1 hour if the user doesn't thank it afterward.</p>
<p><strong className="hl">Dirty:</strong> The item is always covered in dirt or mud, no matter how often it is washed or cleaned.</p>
<p><strong className="hl">Flaw:</strong> Roll on the table of flaws instead.</p>
<p><strong className="hl">Giant-Eared:</strong> The item's bearer's ears increase to five times their original length.</p>
<p><strong className="hl">Glittering:</strong> The item leaves a trail of glowing, magical motes as it moves. They dissipate after 1 round. This effect can be activated or deactivated with a command word.</p>
<p><strong className="hl">Infested:</strong> The item is infested with vermin or other Fine creatures that do not interfere with its operation or harm the bearer.</p>
<p><strong className="hl">Junky:</strong> The item looks extremely old, worn, rusted, or otherwise of low quality, hiding its true power.</p>
<p><strong className="hl">Levitating:</strong> This item always floats slightly above the ground when laid down, dropped, or otherwise unattended.</p>
<p><strong className="hl">Loyal:</strong> The item offers a perk (determined randomly upon creation) when used by one of its creators, but it presents a flaw (determined randomly upon creation) for all other users.</p>
<p><strong className="hl">Magnificent:</strong> The item looks extremely powerful and valuable, even if it isn't.</p>
<p><strong className="hl">Molting:</strong> Scaled skin covers this item, and the item occasionally sheds the skin and grows a new one.</p>
<p><strong className="hl">Mood Coloration:</strong> The item changes colors to reflect the mood of the bearer. Each item has its own mapping of colors to emotions, but someone with knowledge of the item's quirk and its mapping who can see the color change gains a +2 circumstance bonus on Sense Motive checks against the bearer.</p>
<p><strong className="hl">Noisy:</strong> The item makes an odd though not particularly loud noise when in use, such as a mace that squeaks when it's swung.</p>
<p><strong className="hl">Nose-Enlarging:</strong> The bearer's nose becomes five times longer than usual.</p>
<p><strong className="hl">Perk:</strong> Roll on the table of perks instead.</p>
<p><strong className="hl">Racially Attuned:</strong> The item's bearer counts as the race of one of the item's creators (determined randomly upon creation) as well as her own.</p>
<p><strong className="hl">Slimy:</strong> The item is covered in putrid slime, which seeps out to cover the bearer as well. The bearer gains a +5 circumstance bonus on Escape Artist checks, on combat maneuver checks to break grapples, and to CMD against grapples (these bonuses do not stack with grease or other similar effects), but takes a -2 penalty on Acrobatics, Disable Device, and Disguise checks, as well as on Diplomacy and Handle Animal checks except against creatures that aren't bothered by putrid slime.</p>
<p><strong className="hl">Soprano:</strong> The bearer's voice rises by an octave.</p>
<p><strong className="hl">Spiritbound:</strong> The item's reality is imprinted onto its intended owner (creator's choice), such that the item simply doesn't exist outside of that owner's possession. The item can't be lost or stolen, and it also can't be sold or transferred.</p>
<p><strong className="hl">Unpredictable:</strong> When activating the item, roll 1d6. On a 1 or 2, the DC and caster level of all the item's effects are treated as 1 lower for this activation; on a 3 or 4, there is no adjustment; and on a 5 or 6, the DC and caster level of all the item's effects are treated as 1 higher for this activation. If this puts the item below the minimum caster level for the intended effect, the activation fails but any charge or daily use is still consumed.</p>
<p><strong className="hl">Unusually Colored:</strong> The item is an odd color for an item of its type, such as a sword that is bright pink.</p>
<p><strong className="hl">Verdant:</strong> Leaves, moss, and vines cover the item, and leaves sprout from the targets of the item's effects.</p>
<p><strong className="hl">Wet:</strong> The item and bearer are constantly soaking wet. This imposes a -1 penalty on saves against environmental cold, cold effects, and electricity effects, but grants a +1 bonus on saves against environmental heat, fire effects, and catching on fire.</p>
</>};
const _flaws = {title: "Flaws", parent_topics: ["optional_magic_changes","dynamic_magic_item_creation"], siblings: ["dynamic_magic_item_overview","challenges_pu","paying_for_the_item","creation_time","adjustments","base_challenges","random_challenges","class_specific_challenges","perks","quirks","flaws"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 190</Link></p>
<p>Flaws are adjustments to an item that are detrimental in nature. Most are similar to curses, but not nearly as damaging or restrictive to the bearer. Whenever a challenge would add a flaw to an item, roll on the following table. In general, the more harmful flaws have higher numbers on the table. Reroll duplicates and flaws that do not fit the item. Feel free to invent your own flaws or simply choose an appropriate one.</p>
<p><strong className="hl">Accumulating Flaws:</strong> The more flaws the item has, the more likely it is to become cursed. For each flaw beyond the first, add a cumulative +5 modifier to the d% roll until the item gains a curse (after which the +5 modifiers no longer apply). When you decide to create a new flaw or choose an appropriate one rather than rolling, you should still roll first to determine whether the item gains a curse instead.</p>
<ScrollContainer id="rule-flaws--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Flaw</th>
</tr>
</thead>
<tbody><tr>
<td>01-04</td>
<td>Heavy</td>
</tr>
<tr>
<td>05-08</td>
<td>Fragile</td>
</tr>
<tr>
<td>09-12</td>
<td>Vulnerable</td>
</tr>
<tr>
<td>13-16</td>
<td>Energy weakened</td>
</tr>
<tr>
<td>17-20</td>
<td>Pungent</td>
</tr>
<tr>
<td>21-24</td>
<td>Faerie-lit</td>
</tr>
<tr>
<td>25-28</td>
<td>Singing</td>
</tr>
<tr>
<td>29-32</td>
<td>Vindictive</td>
</tr>
<tr>
<td>33-36</td>
<td>Anomalous</td>
</tr>
<tr>
<td>37-40</td>
<td>Extremely infested</td>
</tr>
<tr>
<td>41-44</td>
<td>Addictive</td>
</tr>
<tr>
<td>45-48</td>
<td>Gluttonous</td>
</tr>
<tr>
<td>49-52</td>
<td>Slothful</td>
</tr>
<tr>
<td>53-56</td>
<td>Hallucinogenic</td>
</tr>
<tr>
<td>57-60</td>
<td>Obedient</td>
</tr>
<tr>
<td>61-64</td>
<td>Uncivilized</td>
</tr>
<tr>
<td>65-68</td>
<td>Allergic</td>
</tr>
<tr>
<td>69-72</td>
<td>Zealous</td>
</tr>
<tr>
<td>73-76</td>
<td>Impotent</td>
</tr>
<tr>
<td>77-80</td>
<td>Pacifistic</td>
</tr>
<tr>
<td>81-84</td>
<td>Backlashing</td>
</tr>
<tr>
<td>85-87</td>
<td>Wrathful</td>
</tr>
<tr>
<td>88-90</td>
<td>Proud</td>
</tr>
<tr>
<td>91-93</td>
<td>Slippery</td>
</tr>
<tr>
<td>94-96</td>
<td>Enticing</td>
</tr>
<tr>
<td>97-99</td>
<td>Paranoid</td>
</tr>
<tr>
<td>100+</td>
<td>Cursed</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Addictive:</strong> The owner does not want to give up the item under any circumstances, and suffers the effects of <Link to="/rule/addiction">severe addiction</Link> when denied access to the item.</p>
<p><strong className="hl">Allergic:</strong> The item is especially sensitive to the presence of a particular type of creature, and ceases all magical functions whenever it is within 30 feet of such a creature. To determine the creature type, roll randomly or choose an appropriate type on the <Link to="/class/ranger">ranger's</Link> favored enemy list.</p>
<p><strong className="hl">Anomalous:</strong> The item is instead another random magic item of the same type or slot and the same or similar cost as the intended item.</p>
<p><strong className="hl">Backlashing:</strong> When attacking with or activating the item, the user takes 1d6 points of damage from magical energy backlash.</p>
<p><strong className="hl">Cursed:</strong> The item gains a curse. Roll on <Link to="/rule/common_cursed_item_effects">Table 15-27</Link> to determine the curse, or choose an appropriate curse.</p>
<p><strong className="hl">Energy Weakened:</strong> The item is particularly vulnerable to one random energy type. That energy type ignores the item's hardness and deals double damage to the item (but not to the item's bearer). Determine the energy type randomly, or choose one thematically tied to the challenge that caused the item to have the weakness.</p>
<p><strong className="hl">Enticing:</strong> Others covet the item and seek to possess it. Upon touching or examining the item, any creature that does not possess the item must succeed at a DC 20 Will save or covet the item, seeking to gain it by whatever means is most expedient and advantageous, though it need not do so immediately. After one attempt to gain the item (or a successful save), a creature is immune to the item's enticing effect for 24 hours.</p>
<p><strong className="hl">Extremely Infested:</strong> As the infested quirk, but the vermin or other creatures crawl over the bearer, requiring her to succeed at <Link to="/rule/concentration">concentration</Link> checks (DC = 15 + the spell's level) to cast spells or use other abilities that require concentration.</p>
<p><strong className="hl">Faerie-Lit:</strong> The bearer is constantly surrounded by colorful light, as if affected by a <Link to="/spell/faerie_fire">faerie fire</Link> spell.</p>
<p><strong className="hl">Fragile:</strong> The item has half as many hit points as normal.</p>
<p><strong className="hl">Gluttonous:</strong> The bearer must gorge upon 10 times as much food as normal or suffer the effects of starvation, ignoring effects that reduce the amount of food required (such as ring of sustenance).</p>
<p><strong className="hl">Hallucinogenic:</strong> The bearer sees and hears mild hallucinations. While readily discernible as such, these hallucinations still impose a -2 penalty on Perception and initiative checks.</p>
<p><strong className="hl">Heavy:</strong> The item weighs twice as much as normal.</p>
<p><strong className="hl">Impotent:</strong> The item's caster level is 1 lower than intended. If this would cause a wand or staff to fall below the minimum required caster level, reroll this flaw.</p>
<p><strong className="hl">Obedient:</strong> The bearer takes a -2 penalty on all Will saves against effects that exercise mental control. This includes all mind-affecting charm or compulsion effects, as well as any effect the GM deems appropriate.</p>
<p><strong className="hl">Pacifistic:</strong> When using this weapon, the wielder can only choose to deal nonlethal damage (in most cases imposing a -4 penalty on attack rolls), except against constructs and undead.<sup><InnerLink showBacklink="backlink-rule-flaws-ref-1-1" id="rule-flaws-ref-1-1" data-hash-target to="rule-flaws-1">1</InnerLink></sup></p>
<p><strong className="hl">Paranoid:</strong> The bearer no longer trusts anyone and must attempt saving throws against all abilities and spells but her own, even those that are harmless.</p>
<p><strong className="hl">Proud:</strong> The bearer can't grant or gain any benefit from the aid another action.</p>
<p><strong className="hl">Pungent:</strong> The item emits a foul and obvious odor. No mundane means can remove the stench, which overcomes even magical effects such as negate aroma.</p>
<p><strong className="hl">Singing:</strong> The item constantly sings in a loud belting soprano or tenor. <Link to="/spell/silence">Silence</Link> and other such spells can suppress the sound as normal.</p>
<p><strong className="hl">Slippery:</strong> The creature holding the item must succeed at a DC 15 Reflex save each round or drop the item.<sup><InnerLink showBacklink="backlink-rule-flaws-ref-3-1" id="rule-flaws-ref-3-1" data-hash-target to="rule-flaws-3">2</InnerLink></sup></p>
<p><strong className="hl">Slothful:</strong> The bearer must rest for 12 hours each day to gain the benefits of a full night's rest, ignoring effects that reduce the amount of sleep needed (such as <Link to="/magic-ring/ring_of_sustenance">ring of sustenance</Link>). This can affect the bearer's ability to prepare spells or regain spell slots.</p>
<p><strong className="hl">Uncivilized:</strong> The item doesn't function in any area that would count as urban terrain.</p>
<p><strong className="hl">Vindictive:</strong> When using this weapon, the wielder can only choose to deal lethal damage, not nonlethal damage. If the item can normally deal only nonlethal damage, this flaw overrides that restriction.<sup><InnerLink showBacklink="backlink-rule-flaws-ref-1-2" id="rule-flaws-ref-1-2" data-hash-target to="rule-flaws-1">1</InnerLink></sup></p>
<p><strong className="hl">Vulnerable:</strong> The item has a hardness that is 5 lower than usual (to a minimum of 0).</p>
<p><strong className="hl">Wrathful:</strong> In combat, the bearer's mind is clouded by rage, and she must succeed at a DC 20 Will save to use any ability that can't be used during a barbarian rage. This doesn't allow a barbarian to use those abilities when she is in a rage.</p>
<p><strong className="hl">Zealous:</strong> The item functions only for worshipers of the creator's patron deity. If more than one creator qualifies, roll randomly between their patron deities.<sup><InnerLink showBacklink="backlink-rule-flaws-ref-2-1" id="rule-flaws-ref-2-1" data-hash-target to="rule-flaws-2">3</InnerLink></sup></p>
<section data-footnotes>
<h3 id="rule-flaws-label">Footnotes</h3>
<ol>
<li id="rule-flaws-1">
<p>Item must be a weapon. <InnerLink id="backlink-rule-flaws-ref-1-1" data-hash-target to="rule-flaws-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink> <InnerLink id="backlink-rule-flaws-ref-1-2" data-hash-target to="rule-flaws-ref-1-2" aria-label="Back to reference 1-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="rule-flaws-3">
<p>Item must be a held item. <InnerLink id="backlink-rule-flaws-ref-3-1" data-hash-target to="rule-flaws-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
<li id="rule-flaws-2">
<p>Creator must have levels in a divine spellcasting class and have a patron deity. <InnerLink id="backlink-rule-flaws-ref-2-1" data-hash-target to="rule-flaws-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _esoteric_material_components = {title: "Esoteric Material Components", parent_topics: ["optional_magic_changes"], siblings: ["dynamic_magic_item_creation","esoteric_material_components","relics","scaling_items","legacy_items","simplified_spellcasting","words_of_power"], subtopics: ["buying_esoteric_components","implementing_esoteric_components","scrounging","esoteric_components","crafting_magic_items","feats_ucp"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 150</Link></p>
<p>A handful of hard-to-find, naturally occurring substances contain magical potency and can be used as special material components. Some spellcasters are trained to use these esoteric material components in their enhanced practice of the magical arts. The four more common types - entropic resin, geodes, prismatic sand, and verdant salts - link to two schools of magic each. A fifth type, yliaster, is extremely potent, but far more rare; it is universally useful, and can be substituted for any other material component.</p>
<p>Use the following rules for esoteric material components with the variants <Link to="/rule/implementing_esoteric_components">presented later</Link>.</p>
<p><strong className="hl">Component Cost:</strong> The value of esoteric material components that must be spent on a spell is equal to 1 gp &times; caster level &times; spell level, as shown on Table 4-7: Esoteric Material Component Costs. This value must be spent if esoteric components are mandatory in the campaign, or can be spent to replace normal material components if esoteric material components are optional.</p>
<p><strong className="hl">Expending Components:</strong> Each component works effectively for only two schools of magic. A caster can expend an esoteric component type that doesn't match his spell's school, but he must expend twice as much of the substitute component to fake the effects of the appropriate component. The esoteric components used in a spell need not all be of the same type. For example, a 3rd-level wizard casting <Link to="/spell/bears_endurance">bear's endurance</Link> could expend 6 gp worth of geodes, or 12 gp total worth of entropic resin and verdant salts, or 4 gp worth of geodes plus 4 gp worth of verdant salts, and so on.</p>
<p><strong className="hl">Greater Component Effects:</strong> Expending twice the amount of components indicated on Table 4-7 activates a greater component effect, which varies by esoteric component type. These benefits are listed under the component descriptions at the end of the section, and depend on the component expended. To obtain the greater component benefit, the caster must use a single component type; using a type that doesn't match the spell's school still costs twice as much. The wizard in the above example could gain the geodes' greater component benefit by expending an extra 6 gp worth of geodes, or gain the verdant salts' greater component benefit by expending an extra 12 gp worth of verdant salts. A single casting of a spell can normally benefit from only one greater component effect, but the caster can expend additional components and attempt a Spellcraft check with a DC equal to 20 + double the spell's level to add more. The caster must pay the cost in esoteric components even if the Spellcraft check fails. For each greater component effect beyond the second, the DC increases by 5 + the spell's level. If the caster fails this check by 5 or more, the spell fails and its slot is lost. You can't apply the greater component effect of a single type of component more than once on a single casting of a spell.</p>
<h3 id="rule-esoteric_material_components-table-4-7-esoteric-material-component-costs-by-spell-level">Table 4-7: Esoteric Material Component Costs by Spell Level</h3>
<ScrollContainer id="rule-esoteric_material_components--table-0"><table>
<thead>
<tr>
<th>CL</th>
<th>0</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
<th>6</th>
<th>7</th>
<th>8</th>
<th>9</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>5 sp</td>
<td>1 gp</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>1 gp</td>
<td>2 gp</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>1 gp, 5 sp</td>
<td>3 gp</td>
<td>6 gp</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>2 gp</td>
<td>4 gp</td>
<td>8 gp</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>2 gp, 5 sp</td>
<td>5 gp</td>
<td>10 gp</td>
<td>15 gp</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>3 gp</td>
<td>6 gp</td>
<td>12 gp</td>
<td>18 gp</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>3 gp, 5 sp</td>
<td>7 gp</td>
<td>14 gp</td>
<td>21 gp</td>
<td>28 gp</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>4 gp</td>
<td>8 gp</td>
<td>16 gp</td>
<td>24 gp</td>
<td>32 gp</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>4 gp, 5 sp</td>
<td>9 gp</td>
<td>18 gp</td>
<td>27 gp</td>
<td>36 gp</td>
<td>45 gp</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>5 gp</td>
<td>10 gp</td>
<td>20 gp</td>
<td>30 gp</td>
<td>40 gp</td>
<td>50 gp</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>5 gp, 5 sp</td>
<td>11 gp</td>
<td>22 gp</td>
<td>33 gp</td>
<td>44 gp</td>
<td>55 gp</td>
<td>66 gp</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>6 gp</td>
<td>12 gp</td>
<td>24 gp</td>
<td>36 gp</td>
<td>48 gp</td>
<td>60 gp</td>
<td>72 gp</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>6 gp, 5 sp</td>
<td>13 gp</td>
<td>26 gp</td>
<td>39 gp</td>
<td>52 gp</td>
<td>65 gp</td>
<td>78 gp</td>
<td>91 gp</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>7 gp</td>
<td>14 gp</td>
<td>28 gp</td>
<td>42 gp</td>
<td>56 gp</td>
<td>70 gp</td>
<td>84 gp</td>
<td>98 gp</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>7 gp, 5 sp</td>
<td>15 gp</td>
<td>30 gp</td>
<td>45 gp</td>
<td>60 gp</td>
<td>75 gp</td>
<td>90 gp</td>
<td>105 gp</td>
<td>120 gp</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>8 gp</td>
<td>16 gp</td>
<td>32 gp</td>
<td>48 gp</td>
<td>64 gp</td>
<td>80 gp</td>
<td>96 gp</td>
<td>112 gp</td>
<td>128 gp</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>8 gp, 5 sp</td>
<td>17 gp</td>
<td>34 gp</td>
<td>51 gp</td>
<td>68 gp</td>
<td>85 gp</td>
<td>102 gp</td>
<td>119 gp</td>
<td>136 gp</td>
<td>153 gp</td>
</tr>
<tr>
<td>18th</td>
<td>9 gp</td>
<td>18 gp</td>
<td>36 gp</td>
<td>54 gp</td>
<td>72 gp</td>
<td>90 gp</td>
<td>108 gp</td>
<td>126 gp</td>
<td>144 gp</td>
<td>162 gp</td>
</tr>
<tr>
<td>19th</td>
<td>9 gp, 5 sp</td>
<td>19 gp</td>
<td>38 gp</td>
<td>57 gp</td>
<td>76 gp</td>
<td>95 gp</td>
<td>114 gp</td>
<td>133 gp</td>
<td>152 gp</td>
<td>171 gp</td>
</tr>
<tr>
<td>20th</td>
<td>10 gp</td>
<td>20 gp</td>
<td>40 gp</td>
<td>60 gp</td>
<td>80 gp</td>
<td>100 gp</td>
<td>120 gp</td>
<td>140 gp</td>
<td>160 gp</td>
<td>180 gp</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _buying_esoteric_components = {title: "Buying Esoteric Components", parent_topics: ["optional_magic_changes","esoteric_material_components"], siblings: ["buying_esoteric_components","implementing_esoteric_components","scrounging","esoteric_components","crafting_magic_items","feats_ucp"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 150</Link></p>
<p>Each common esoteric material component has the same price, and a spellcaster buys them based on their gp value. Though each type of component comes in different sizes and purities, it's usually simplest to just track the total gp value of each type of component a spellcaster carries rather than the specific forms of those components. In a collection of geodes, some might be large and some small, some fine and some flawed.</p>
<p>Each bit of esoteric component goes a long way, so 500 gp worth of components weighs 1 pound regardless of its type. Esoteric material components aren't inherently magical, and can't be found using <Link to="/spell/detect_magic">detect magic</Link>.</p>
<p>Material components can be found either in the form of raw, unprocessed base components or refined units of various values. They can be found in nature, purchased from merchants, or discovered in treasure hoards. How often a PC finds esoteric components is determined by the <Link to="/rule/implementing_esoteric_components">variant</Link> you are using. Especially among the treasure of a spellcaster, it would be reasonable to find various quantities of multiple types of esoteric components. The same could be said for an alchemist's lab or a stash hidden by bandits who recently raided a wizards' college.</p>
<p>The rare esoteric component yliaster is a special case. Yliaster appears only in major treasure hoards, especially those belonging to powerful spellcasters. A GM who would prefer not to allow the effects of yliaster can simply use only the common esoteric components and leave the rare one out of the game entirely.</p>
</>};
const _implementing_esoteric_components = {title: "Implementing Esoteric Components", parent_topics: ["optional_magic_changes","esoteric_material_components"], siblings: ["buying_esoteric_components","implementing_esoteric_components","scrounging","esoteric_components","crafting_magic_items","feats_ucp"], subtopics: ["optional_components","mandatory_components","with_limited_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 151</Link></p>
<p>There's more than one way to introduce esoteric components to a game. Three variants are detailed below.</p>
</>};
const _optional_components = {title: "Optional Components", parent_topics: ["optional_magic_changes","esoteric_material_components","implementing_esoteric_components"], siblings: ["optional_components","mandatory_components","with_limited_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 151</Link></p>
<p>The esoteric material components system can be added directly on top of the normal spellcasting system. Spells don't need esoteric components to be cast, and normal material components function as normal. Expending esoteric material components worth the listed values allows the caster to replace normal material components she lacks (but not to replace expensive material components). It's far more useful in this system to pay double the amount of esoteric components to gain the greater component effect. A 6th-level wizard casting fireball can do so using a normal spell component pouch. If he's missing his pouch, he can expend 18 gp worth of entropic resin to cast the spell anyway. He could expend 36 gp worth (with or without a spell component pouch) to make the spell more powerful with its greater component effect.</p>
<p>Adding esoteric material components as an option makes spellcasters considerably more powerful. When used this way, esoteric components are essentially an additional type of treasure. Use esoteric components as treasure only rarely, and consider ignoring the rules that allow scrounging for components. Esoteric components might not be very well known in the world, and aren't readily available to purchase.</p>
</>};
const _mandatory_components = {title: "Mandatory Components", parent_topics: ["optional_magic_changes","esoteric_material_components","implementing_esoteric_components"], siblings: ["optional_components","mandatory_components","with_limited_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 151</Link></p>
<p>If esoteric components are mandatory, casting any spell that requires a material component requires expending the proper amount of esoteric material components instead. A 6th-level wizard casting <Link to="/spell/fireball">fireball</Link> must expend 18 gp worth of entropic resin, and can expend 36 gp worth to make the spell more powerful with its greater component effect. If he doesn't have enough components, he can't cast the spell. However, if he had 15 gp worth of entropic resin, he could cast the <em>fireball</em> at caster level 5th. A spell that doesn't require material components can be cast normally, but the caster can choose to expend esoteric components for the greater component effect.</p>
<p>Under this system, a spell component pouch includes 1 gp worth of each common component, plus an additional 1 gp worth of a common type of the buyer's choice. Requiring esoteric components significantly impacts a spellcaster's treasure acquisition, so the mandatory components variant should be used with caution, especially if the campaign already uses variants that make spellcasting less powerful (such as <Link to="/rule/limited_magic">limited magic</Link>. Include esoteric components in most treasure hoards and in NPC spellcasters' gear.</p>
<h3 id="rule-mandatory_components-lowering-your-caster-level">Lowering Your Caster Level</h3>
<p>A spellcaster using esoteric material components can voluntarily cast a spell as though she had a lower caster level. This means if she doesn't have enough components - or would like to save some money - she can still cast a less effective version of the spell. She can't lower her caster level to be lower than the level at which she could cast the spell. <Link to="/rule/esoteric_material_components">Table 4-7: Esoteric Material Component Cost</Link> shows this value for clerics, druids, and wizards, but a spellcaster with a slower progression has the same limitation. A bard couldn't cast a 3rd-level spell at a caster level lower than 7th, for example.</p>
<p>For spells that don't continue to increase in power after a certain caster level, it's usually best for the spellcaster to cast that spell as though she were a lower caster level to reduce the cost of her esoteric components.</p>
</>};
const _with_limited_magic = {title: "With Limited Magic", parent_topics: ["optional_magic_changes","esoteric_material_components","implementing_esoteric_components"], siblings: ["optional_components","mandatory_components","with_limited_magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 152</Link></p>
<p>In a game that uses the <Link to="/rule/limited_magic">limited magic variant</Link>, you can add esoteric components to take some of the sting out of the weakened spellcasting. It's best to include the components as described in the <Link to="/rule/optional_components">optional components variant</Link>, rather than saddling spellcasters with both weakened spellcasting and decreased treasure.</p>
<p>Limited magic uses a fixed caster level, which acts as the baseline for casting a spell using esoteric components or gaining the greater component benefits. When used together, the esoteric components and limited magic systems also allow another option: expending esoteric components to gain the benefits of a higher CL or save DC. The specific limited magic benefit is listed under each component description. The caster must expend components whose value is equal to twice the esoteric component cost for his caster level (rather than the spell's minimum caster level) to gain the limited magic benefit. For example, a 6th-level wizard casting <Link to="/spell/fireball">fireball</Link> could gain the limited magic benefit by expending 36 gp worth of entropic resin.</p>
<p>As with greater component effects, expending multiple types of esoteric components can apply other limited magic effects, but requires a Spellcraft check. This option is deliberately more expensive to discourage casters from using it too routinely.</p>
<p>A spellcaster can choose to apply either greater component effects or limited magic effects - but not both - on the same casting of a spell.</p>
</>};
const _scrounging = {title: "Scrounging", parent_topics: ["optional_magic_changes","esoteric_material_components"], siblings: ["buying_esoteric_components","implementing_esoteric_components","scrounging","esoteric_components","crafting_magic_items","feats_ucp"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 152</Link></p>
<p>This optional rule allows a low-level spellcaster to find enough components to keep casting her spells. It's recommended to use scrounging if esoteric components are mandatory.</p>
<p>Over the course of an adventuring day, a spellcaster can scrounge for esoteric components in her environment. At the end of each day, she can collect 1d6 gp worth of each common esoteric component. (Rare components can never be found by scrounging.) This requires her to explore a decent-sized area. Spending several days in one town or repeatedly going through the same few rooms in a dungeon doesn't yield more than 1 day's worth of components. Depending on the likelihood of finding a type of component in an area, the GM can adjust the die size up or down by one. For instance, while exploring caverns, a scrounger might find 1d8 gp worth of geodes, but only 1d4 gp worth of verdant salts. A scrounger can hunt exclusively for a specific type of common esoteric component. Because esoteric components are naturally occurring, she must succeed at a DC 15 Knowledge (nature) check or come up empty-handed. If she succeeds, she gains 2d6 gp worth of the component she was searching for and none of the others.</p>
</>};
const _esoteric_components = {title: "Esoteric Components", parent_topics: ["optional_magic_changes","esoteric_material_components"], siblings: ["buying_esoteric_components","implementing_esoteric_components","scrounging","esoteric_components","crafting_magic_items","feats_ucp"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 152</Link></p>
<p>This system uses four common esoteric components - entropic resin, geodes, prismatic sand, and verdant salts - plus one rare component called yliaster. A GM can change the descriptions of these components to different substances that better fit her game if she so chooses. The rare component could be a catch-all for a number of equally potent magical substances. The blood of a god, a sliver of stone from deep in the earth, or a piece of ethereal substance made solid could each be used as the rare component, even within the same campaign.</p>
<p>Each entry includes the associated schools, a description of the esoteric component type, the greater component effect, and the limited magic effect. The limited magic effect entry applies only if the campaign is also using the <Link to="/rule/limited_magic">limited magic system</Link>.</p>
<h3 id="rule-esoteric_components-entropic-resin">Entropic Resin</h3>
<p><strong className="hl">Associated Schools</strong> evocation, necromancy</p>
<p>This slightly viscous, pearlescent gray-black substance is most commonly stored in small vials, jars, and bottles. It's most frequently found at sites of carnage and places where undead creatures dwell. Locations where multiple creatures died from flames, acid, or lightning are excellent potential sources of entropic resin. It seems to be organic in nature, or at least formed of trace substances from the bodies of organic life forms, though there is some debate on the issue among necromantic scholars.</p>
<p>Unrefined entropic resin is potent, but can still be distilled and refined. The more it's refined, the darker and more solid it becomes. The most potent entropic resin is pitch black and snaps if bent.</p>
<p><strong className="hl">Greater Component Effect:</strong> Treat your caster level as though it were 1 higher for determining the number of damage dice used by this spell. This also increases the maximum number of damage dice a spell can have by 1, if applicable. For example, a 10th-level wizard casting <Link to="/spell/fireball">fireball</Link> could expend 60 gp worth of entropic resin to deal 11d6 points of fire damage.</p>
<p><strong className="hl">Limited Magic Effect:</strong> Use your full caster level (to a maximum of the spell's minimum caster level + 3) for determining the damage dice of the spell.</p>
<h3 id="rule-esoteric_components-geodes">Geodes</h3>
<p><strong className="hl">Associated Schools</strong> abjuration, transmutation</p>
<p>Geodes are loose, spheroid, rock-like structures found within flows of lava rock, areas of upheaval, and places associated with earth and fire elementals. Often mistaken for simple rocks due to their nondescript coating, geodes are hollow with various crystal formations hidden within. Formed from molten rock and exotic trapped gases that turn into crystals, geodes can have innate properties that help extend perceptions and pierce barriers, both astral and physical.</p>
<p>Small or crudely worked geode fragments or nodes are more than potent enough to be used with low-level spells, but for more complex spells, it's more efficient for the geodes to be cleansed, cut, and worked into a more refined state.</p>
<p><strong className="hl">Greater Component Effect:</strong> Treat your caster level as though it were 2 higher for determining the duration of this spell.</p>
<p><strong className="hl">Limited Magic Effect:</strong> Use your full caster level instead of the minimum for determining the duration of the spell.</p>
<h3 id="rule-esoteric_components-prismatic-sand">Prismatic Sand</h3>
<p><strong className="hl">Associated Schools</strong> conjuration, illusion</p>
<p>Made of incredibly tiny polyhedrons, prismatic sand reflects a rainbow of colors. Most commonly found by sifting sand from warm beaches, this substance appears to be normal glass cut into very specific multifaceted shapes. Due to the substance's apparent mundanity, spellcasters frequently try to manufacture it, but so far no attempt has been successful. When gathered in enough quantity, typically 2 ounces or so, prismatic sand takes on a rainbow sheen across its surface.</p>
<p>To make prismatic sand more effective, it must be carefully separated from the normal sand it's typically mixed with - it functions much better when pure. Prismatic sand also works better when treated with cleansing chemicals, polished, and shined with a variety of specialized cloths and materials. Individual grains come in all variety of prismatic shapes, and the more sides a grain has, the better its mirrored surface captures light. The most intricate grains bend, manipulate, and split light into a dazzling spectrum.</p>
<p><strong className="hl">Greater Component Effect:</strong> You can either treat your caster level as though it were 4 higher for determining the range of the spell, or increase or decrease the spell's area of effect by 5 feet if it's a burst, emanation, line, or spread with a radius or length of at least 20 feet.</p>
<p><strong className="hl">Limited Magic Effect:</strong> Use your full caster level for determining the spell's range and area.</p>
<h3 id="rule-esoteric_components-verdant-salts">Verdant Salts</h3>
<p><strong className="hl">Associated Schools</strong> divination, enchantment</p>
<p>Verdant salts are found upon the dried, post-flowering pods of a common plant used in making textiles. The salt gathers on the plant only on dewy mornings following a full moon. Consuming verdant salts alters perceptions, and is said to improve the eater's health. Grazing animals drawn to the salty taste frequently eat the crystals, so following deer or livestock that exhibit erratic behavior can lead a spellcaster to fields where verdant salts can be found.</p>
<p>Raw verdant salts can be dissolved, refined, and processed into more complex salt crystals or solid rods of compressed salt. Such refinements take time, and require special training in order for a wizard, alchemist, or craftsperson to produce properly.</p>
<p><strong className="hl">Greater Component Effect:</strong> Increase the DC of any saving throw, skill check, or ability check an enemy must attempt due to this spell by 1.</p>
<p><strong className="hl">Limited Magic Effect:</strong> The saving throw DC of the spell equals the base DC + 3, or 10 + the spell's level + your spellcasting ability modifier, whichever is lower.</p>
<h3 id="rule-esoteric_components-yliaster-rare-component">Yliaster (Rare Component)</h3>
<p><strong className="hl">Associated Schools</strong> All</p>
<p>The rare substance yliaster is the universal esoteric component, and has the same effect and price no matter the school of the spell it's used on. It can even be substituted for an equivalent value of an expensive material component - 5,000 gp worth of yliaster could be used to cast <Link to="/spell/raise_dead">raise dead</Link> without a diamond worth 5,000 gp, for example. Yliaster is a clay-like material found in small clods typically no bigger than a berry or thimble. It's remarkably light, seems to be composed of many colors, and does not crumble or compress in the same fashion as normal clay or soil.</p>
<p>A spell cast using yliaster can't also benefit from common esoteric components.</p>
<p><strong className="hl">Greater Component Effect:</strong> Increase the DC of any saving throw, skill check, or ability check an enemy must attempt due to this spell by 1. In addition, treat your caster level as though it were 2 higher for this spell. This increase can also raise the maximum damage dice of the spell beyond its limit. For example, a 10th-level wizard casting <Link to="/spell/fireball">fireball</Link> could expend 600 gp worth of yliaster to cast it at CL 12th and deal 12d6 points of fire damage. This bonus also applies on caster level checks to overcome spell resistance and on <Link to="/rule/concentration">concentration</Link> checks while casting the spell.</p>
<p><strong className="hl">Price:</strong> Unlike with other esoteric components, the required amount of yliaster doesn't vary with caster level. The cost of using yliaster is always 200 gp per spell level. Yliaster is even lighter than common components, weighing 1 pound per 2,000 gp of value. Few people, even experienced spellcasters, are able to find yliaster easily. Treat it as though it were a major magic item for the purposes of <Link to="/rule/purchasing_magic_items">determining its availability</Link>. It's typically sold in pieces worth 1,000 gp (five castings of a 1st-level spell), or multiples of 1,000 gp for larger pieces.</p>
</>};
const _crafting_magic_items = {title: "Crafting Magic Items", parent_topics: ["optional_magic_changes","esoteric_material_components"], siblings: ["buying_esoteric_components","implementing_esoteric_components","scrounging","esoteric_components","crafting_magic_items","feats_ucp"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 154</Link></p>
<p>Scrolls, wands, and magic items can be crafted using esoteric components. This increases the cost of the item accordingly. If a wizard expends 56 gp worth of prismatic sand while creating a <Link to="/spell/black_tentacles">scroll of black tentacles</Link>, that spell gains the greater component effect when cast from the scroll. For a staff or wand, the creator must make the same decision for all castings of a particular spell and pay the full price for each. He can't make a wand with 30 charges of <Link to="/spell/cure_light_wounds">cure light wounds</Link> and 20 charges of <em>cure light wounds</em> with the greater component effect, but can spend an additional 100 gp to give all the charges the greater component effect (for a CL 1st wand). In a game that uses mandatory components, magic item crafting becomes much more expensive since each casting of the spell requires spending components. A <Link to="/spell/burning_hands">wand of burning hands</Link> would cost a minimum of 800 gp (750 gp + 1 gp per charge).</p>
</>};
const _feats_ucp = {title: "Esoteric Feats", parent_topics: ["optional_magic_changes","esoteric_material_components"], siblings: ["buying_esoteric_components","implementing_esoteric_components","scrounging","esoteric_components","crafting_magic_items","feats_ucp"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 154</Link></p>
<p>In a campaign that uses the esoteric material component system, characters have access to <Link to="/main/feats">Esoteric feats</Link>. Any time a character would gain a bonus metamagic feat, he can choose to take an esoteric feat instead.</p>
<h3 id="rule-feats_ucp-alternate-eschew-materials">Alternate Eschew Materials</h3>
<p>Because it would function poorly with the esoteric components system, the <Link to="/feat/eschew_materials">Eschew Materials</Link> feat should be replaced in a game that uses esoteric material components. Use the alternate version below.</p>
<h4 id="rule-feats_ucp-eschew-materials">Eschew Materials</h4>
<p>You can cast spells using fewer esoteric material components.</p>
<p><strong className="hl">Benefit:</strong> When you cast a spell that uses esoteric material components, you can spend components as though your caster level were 2 lower (with a minimum of the spell's minimum caster level). This does not affect the cost of expensive material components.</p>
</>};
const _relics = {title: "Relics", parent_topics: ["optional_magic_changes"], siblings: ["dynamic_magic_item_creation","esoteric_material_components","relics","scaling_items","legacy_items","simplified_spellcasting","words_of_power"], subtopics: ["triumphs","relics_in_your_own_campaign","adapting_scaling_items"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_128_songbird_scion_saboteur">Pathfinder #128: Songbird, Scion, Saboteur pg. 77</Link></p>
<p>This article introduces relics: magic items that grow in power the more they are used in the pursuit of a specific cause. Each relic was once a typical magic item that played a central role in a massively important event, increasing dramatically in potency as it drew power from its shaping of fate. Relics occupy a space somewhere between normal magic items and artifacts. Unlike most magic items, relics can't be crafted. Unlike artifacts, however, they can be destroyed normally. Eventually, these extra-powerful items are misplaced, forgotten, or ignored, and their power wanes as a result - though it is not entirely lost.</p>
<p>When PCs find a relic, it has only the first set of base abilities listed in its stat block; to unlock a relic's full powers, its bearer must reawaken its latent energy.</p>
<p>PCs playing in the War for the Crown Adventure Path have the opportunity to discover two relics in each of the first four adventures (each of which is detailed in the following pages), and they can gradually increase the power of their relics by using them to perform bold deeds that help return Taldor to the resplendence of its heyday.</p>
<p><strong>Also See:</strong> <Link to="/rule/scaling_items">Scaling Items</Link> and <Link to="/rule/legacy_items">Legacy Items</Link></p>
</>};
const _triumphs = {title: "Triumphs", parent_topics: ["optional_magic_changes","relics"], siblings: ["triumphs","relics_in_your_own_campaign","adapting_scaling_items"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_128_songbird_scion_saboteur">Pathfinder #128: Songbird, Scion, Saboteur pg. 77</Link></p>
<p>As she adventures, the wielder of a relic might achieve great deeds, called triumphs, tied to the item's associated cause, which she can apply to the relic to increase its power. Each volume of the War for the Crown Adventure Path indicates which deeds qualify as a triumph for the relics of old Taldor. Each PC involved in achieving a triumph can apply that triumph to up to one of her carried relics, unlocking the next set of abilities for that item.</p>
<p>An individual relic can attain only the triumphs for which it is present, so if the PCs achieved two triumphs before finding <Link to="/magic-relic/korianas_blade">Koriana's Blade</Link>, the sword wouldn't gain the benefits listed under First Triumph until the PCs' third triumph. To be present for a triumph, a relic needs to be worn, held, or carried (as opposed to being stored in a <Link to="/magic-wondrous/bag_of_holding">bag of holding</Link>, for instance), and the PC carrying it must have been involved in the triumph in some way. Some triumphs improve on existing abilities, such as granting more uses of an ability per day or increasing a relic's enhancement bonus from +1 to +2. All other triumph abilities are cumulative with the item's base abilities and with each other. For example, a relic that has attained two triumphs grants both its first-triumph and second-triumph abilities along with its base abilities.</p>
<p><strong className="hl">Increasing DCs:</strong> Some effects have DCs that increase as the relic attains more triumphs; these are indicated by a note such as "DC = 15 + 1 per additional triumph attained." An effect with such a DC counts neither the triumph that the effect came from nor any previous triumphs. For example, if a relic's first triumph granted an effect with a DC of 15 + 1 per additional triumph attained, that DC would be 15. When that relic attained a second triumph, the DC would increase to 16.</p>
<p><strong className="hl">Fading Glory:</strong> When the PCs discover a relic, the power of the item has faded significantly since it has gone many years without being used for its cause. In most campaigns, it's unlikely that enough time will pass for the discovered relic's power to fade again. However, if years pass without a relic being used for its cause, its triumph abilities begin to go dormant, starting at the highest level and descending from there. This can vary by item and is ultimately determined by the GM, but a good benchmark is one triumph entry lost per 1d4 years.</p>
</>};
const _relics_in_your_own_campaign = {title: "Relics In Your Own Campaign", parent_topics: ["optional_magic_changes","relics"], siblings: ["triumphs","relics_in_your_own_campaign","adapting_scaling_items"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_128_songbird_scion_saboteur">Pathfinder #128: Songbird, Scion, Saboteur pg. 77</Link></p>
<p>To implement relics in your own game, you can use the Taldan items presented here, adjusting their themes and details as necessary. Alternatively, you can adapt <Link to="/rule/scaling_items">scaling items from Pathfinder RPG Pathfinder Unchained</Link> or create your own items to suit your needs.</p>
<p>You'll also need to set up potential triumphs the PCs can achieve to unlock the relics' abilities. These triumphs should happen every 2 to 3 character levels. A triumph should always be linked to the achievement of a major goal within the campaign's storyline. Include less frequent triumph events if the PCs are highly likely to succeed at all of them. If there's a high chance the PCs will fail to achieve a particular triumph, you might include another triumph event fairly soon after. You can always alter future triumph events if items are looking like they'll outpace the rate of one triumph every 2 levels. The theme of the relics you include should match the themes of the campaign. This doesn't mean their mechanics and powers need to correspond exactly, but the more history and flavor, the better.</p>
<p>Relics work best in a campaign that has clear goals and major events. These might be goals that you've built into the game, but it's also highly satisfying for players to define their own goals. If you make relics that are designed for a purpose that matches the purposes of one of the characters, you'll set up a stronger bond and unity of purpose for that character-relic pair.</p>
</>};
const _adapting_scaling_items = {title: "Adapting Scaling Items", parent_topics: ["optional_magic_changes","relics"], siblings: ["triumphs","relics_in_your_own_campaign","adapting_scaling_items"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_128_songbird_scion_saboteur">Pathfinder #128: Songbird, Scion, Saboteur pg. 78</Link></p>
<p>Relics work much like <Link to="/rule/scaling_items">scaling items</Link>, with the exceptions that they don't cost a share of your treasure and they scale up due to story events rather than at certain levels. This makes it easy to adapt the scaling items from that book to use as relics, either to replace ones listed here that don't suit your group in War for the Crown or to use in a different campaign. Doing so requires the following adjustments, in addition to adding thematic background elements to the items to tie them to the triumphs of your game.</p>
<p><strong className="hl">Remove Cost, Price, and Scaling Category:</strong> Because relics can't be crafted and aren't typically bought or sold, they don't have cost or price entries. Similarly, the scaling progression (bauble, prize, or wonder) is not usually relevant for relics. However, you might want to restrict yourself to only prizes and wonders when converting scaling items, since baubles aren't as impressive as relics should be.</p>
<p><strong className="hl">Determine Minimum PC Level:</strong> Since the abilities of a relic aren't explicitly tied to character levels, it's important to limit PCs' access to relics that would be too powerful for their level. In general, PCs should not gain access to a relic until their character level is at most 2 levels lower than the lowest-level ability of the scaling item on which that relic is based.</p>
<p><strong className="hl">Combine Lower-Level Scaling Abilities:</strong> Determine what level the PCs will likely be when they attain the relic. If this is higher than one or more of the item's scaling levels, combine all those levels' abilities into the base abilities of the item.</p>
<p><strong className="hl">Turn Unlockable Abilities into Triumph Abilities:</strong> Any remaining unlockable abilities can be unlocked by attaining triumphs rather than reaching a certain level. Look at your plans for what events will count as triumphs, because you might need to combine multiple unlockable abilities into one. This can happen if there's a long level gap between triumphs and you need to make each one stronger to catch up with the PCs' expected level.</p>
</>};
const _simplified_spellcasting = {title: "Simplified Spellcasting", parent_topics: ["optional_magic_changes"], siblings: ["dynamic_magic_item_creation","esoteric_material_components","relics","scaling_items","legacy_items","simplified_spellcasting","words_of_power"], subtopics: ["simplified_spellcasting_rules","other_spellcasters","metamagic","pearls_of_power"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 144</Link></p>
<p>For a 1st-level wizard who knows only a small handful of spells, it isn't too hard to decide which spells to prepare each day. But a 20th-level wizard could easily have more than 60 spells from which to select. Choosing them can eat up quite a bit of time, leaving the other players in your game twiddling their fingers.</p>
<p>With simplified spellcasting, you keep track of only your 3 highest levels of spells, and all the other spells are placed in a pool that you can use on the fly. The number of spells in the pool is smaller than the number of lower-level spells you could otherwise cast, but the pool is more flexible than preparing all the spells in advance would be, and allows you to save the tricky decision-making for your most important spells. Because this system affects only your 3 highest levels of spells, it doesn't change anything for a character who isn't yet able to cast 4th-level spells.</p>
</>};
const _simplified_spellcasting_rules = {title: "Simplified Spellcasting Rules", parent_topics: ["optional_magic_changes","simplified_spellcasting"], siblings: ["simplified_spellcasting_rules","other_spellcasters","metamagic","pearls_of_power"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 144</Link></p>
<p>To use simplified spellcasting, find the appropriate progression table for your class (or the table for a class that normally has the same spell progression as your class) and consult the row for your caster level. The 3 highest spell levels in the row each have a listed number indicating spells per day. Prepare these spells each day as you normally would; you still gain bonus spells per day for those levels if you have a high enough ability score. The letter "P" appears in the columns of all other available spell levels (except level 0) to indicate lower-level spells that are cast using your class's spell pool.</p>
<p>Each day, you can spontaneously cast a number of lower-level spells from your class's spell list equal to the number listed for your class level in the Pool column of the table. The level of spell doesn't matter (as long as it's one of the levels that uses your pool), so if you could cast five spells from your pool per day, it wouldn't matter if you cast five 1st-level spells, five 2nd-level spells, or a mix of the two. A spell cast using slots from your spell pool must still be on your spell list or in your spellbook, just as it would need to be if you were preparing the spell. It also must meet any other restrictions imposed by your class or other abilities, such as restrictions on casting spells of an opposing alignment. The slots in your spell pool refresh after 8 hours of rest, and any effect that prevents you from preparing spells also prevents you from refreshing your spell pool. Your pool increases if you have a high spellcasting ability modifier, similar to how you gain bonus spells in slots you prepare. Add a number of spells to your pool equal to 1/4 the ability score modifier of the ability score you would normally use to calculate your number of bonus spells per day.</p>
<p>If your class grants bonus spells that are selected from an extremely limited number of options (such as domain spells, spirit spells, or similar bonus spells), you gain those spells separately from your pool. If your class grants bonus spells from a somewhat limited list (such as wizards' specialty school spells), when you gain a pool, you gain one additional slot in your spell pool each day that can be used only to cast spells of that type, and at 13th level you gain a second additional slot with the same restriction.</p>
<p>For example, a 13th-level necromancer with an Intelligence score of 26 has a pool of five spells - three for being a 13th-level wizard and two for his high Intelligence (a +8 Intelligence modifier divided by 4) - as well as two additional spells per day that must be from the necromancy school. He could use the pool to cast his 1st- to 4th-level spells, but would still need to prepare his 5th- to 7th-level spells.</p>
<p><strong className="hl">Expending Multiple Spell Slots:</strong> If you have a class ability that requires expending multiple spell slots, such as a <Link to="/mystery/battle">battle oracle's combat healer revelation</Link> or a wizard's opposition school, you must expend the appropriate number of slots from your spell pool to use the ability. For instance, if the 13th-level necromancer in the example above has conjuration as an opposition school, he could expend two slots from his spell pool to cast <Link to="/spell/summon_monster_ii">summon monster II</Link>.</p>
<h3 id="rule-simplified_spellcasting_rules-table-4-1-magus-or-warpriest-spells-per-day">Table 4-1: Magus or Warpriest Spells per Day</h3>
<ScrollContainer id="rule-simplified_spellcasting_rules--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>0</th>
<th>1st</th>
<th>2nd</th>
<th>3rd</th>
<th>4th</th>
<th>5th</th>
<th>6th</th>
<th>Pool</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>3</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>4</td>
<td>3</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>5</td>
<td>P</td>
<td>4</td>
<td>3</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>1</td>
</tr>
<tr>
<td>11th</td>
<td>5</td>
<td>P</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>1</td>
</tr>
<tr>
<td>12th</td>
<td>5</td>
<td>P</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>1</td>
</tr>
<tr>
<td>13th</td>
<td>5</td>
<td>P</td>
<td>P</td>
<td>4</td>
<td>3</td>
<td>1</td>
<td>-</td>
<td>3</td>
</tr>
<tr>
<td>14th</td>
<td>5</td>
<td>P</td>
<td>P</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>3</td>
</tr>
<tr>
<td>15th</td>
<td>5</td>
<td>P</td>
<td>P</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>3</td>
</tr>
<tr>
<td>16th</td>
<td>5</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>4</td>
<td>3</td>
<td>1</td>
<td>4</td>
</tr>
<tr>
<td>17th</td>
<td>5</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>4</td>
</tr>
<tr>
<td>18th</td>
<td>5</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>4</td>
</tr>
<tr>
<td>19th</td>
<td>5</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>20th</td>
<td>5</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-simplified_spellcasting_rules-table-4-2-cleric-druid-shaman-witch-or-wizard-spells-per-day">Table 4-2: Cleric, Druid, Shaman, Witch, or Wizard Spells per Day</h3>
<ScrollContainer id="rule-simplified_spellcasting_rules--table-1"><table>
<thead>
<tr>
<th>Level</th>
<th>0</th>
<th>1st</th>
<th>2nd</th>
<th>3rd</th>
<th>4th</th>
<th>5th</th>
<th>6th</th>
<th>7th</th>
<th>8th</th>
<th>9th</th>
<th>Pool</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>3</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>4</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>4</td>
<td>P</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>1</td>
</tr>
<tr>
<td>8th</td>
<td>4</td>
<td>P</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>1</td>
</tr>
<tr>
<td>9th</td>
<td>4</td>
<td>P</td>
<td>P</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
</tr>
<tr>
<td>10th</td>
<td>4</td>
<td>P</td>
<td>P</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
</tr>
<tr>
<td>11th</td>
<td>4</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
</tr>
<tr>
<td>12th</td>
<td>4</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
</tr>
<tr>
<td>13th</td>
<td>4</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>3</td>
</tr>
<tr>
<td>14th</td>
<td>4</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>3</td>
</tr>
<tr>
<td>15th</td>
<td>4</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>4</td>
</tr>
<tr>
<td>16th</td>
<td>4</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>4</td>
</tr>
<tr>
<td>17th</td>
<td>4</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>5</td>
</tr>
<tr>
<td>18th</td>
<td>4</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>5</td>
</tr>
<tr>
<td>19th</td>
<td>4</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>5</td>
</tr>
<tr>
<td>20th</td>
<td>4</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>P</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _other_spellcasters = {title: "Other Spellcasters", parent_topics: ["optional_magic_changes","simplified_spellcasting"], siblings: ["simplified_spellcasting_rules","other_spellcasters","metamagic","pearls_of_power"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 145</Link></p>
<p>Though spontaneous casters can use this system, they gain relatively little, since they already don't need to select which spells to prepare in advance, and their spell slots are comparable in number to those they would have if they used a spell pool.</p>
<p>This system doesn't apply to spellcasters such as paladins and rangers, who gain only 1st- to 4th-level spells, since they have so few spell slots that they don't run into the same problems other spellcasters do.</p>
</>};
const _metamagic = {title: "Metamagic", parent_topics: ["optional_magic_changes","simplified_spellcasting"], siblings: ["simplified_spellcasting_rules","other_spellcasters","metamagic","pearls_of_power"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 145</Link></p>
<p>When using a <Link to="/main/metamagic_feat">metamagic feat</Link> to modify a spell cast from a spell pool, the caster is treated as if he were a spontaneous caster (increasing the casting time to a full-round action if applicable). The spell must still fall under the level he can cast with his pool. Otherwise, he must still expend one of his spell slots to prepare it.</p>
<p>For instance, our example 13th-level necromancer could cast an <Link to="/feat/enlarged">enlarged</Link> <Link to="/spell/fireball">fireball</Link> as a full-round action using his spell pool, but to cast an <Link to="/feat/empowered">empowered</Link> <em>fireball,</em> he would have to expend a 5th-level spell slot to prepare it, since 5th-level spells aren't part of his pool.</p>
</>};
const _pearls_of_power = {title: "Pearls of Power", parent_topics: ["optional_magic_changes","simplified_spellcasting"], siblings: ["simplified_spellcasting_rules","other_spellcasters","metamagic","pearls_of_power"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 145</Link></p>
<p>A <Link to="/magic-wondrous/pearl_of_power">pearl of power</Link> can be used only to regain a spell slot of a level you prepare, not to restore slots to your spell pool. Conversely, a <Link to="/magic-wondrous/runestone_of_power">runestone of power</Link> can allow the caster to cast a spell without expending a slot from his pool. The spell must be both of a level the runestone can restore and of a low enough level to be a part of his spell pool rather than a prepared spell.</p>
</>};
export default {optional_magic_changes:_optional_magic_changes,dynamic_magic_item_creation:_dynamic_magic_item_creation,dynamic_magic_item_overview:_dynamic_magic_item_overview,challenges_pu:_challenges_pu,attempting_challenges:_attempting_challenges,challenge_format:_challenge_format,paying_for_the_item:_paying_for_the_item,creation_time:_creation_time,adjustments:_adjustments,base_challenges:_base_challenges,random_challenges:_random_challenges,rc_aberrant_mutation:_rc_aberrant_mutation,rc_challenging_construction:_rc_challenging_construction,rc_contradictory_instructions:_rc_contradictory_instructions,rc_cryptic_cross_reference:_rc_cryptic_cross_reference,rc_distracting_visitor:_rc_distracting_visitor,rc_emotion_requirement:_rc_emotion_requirement,rc_energy_overload:_rc_energy_overload,rc_enticing_offer:_rc_enticing_offer,rc_fragile_components:_rc_fragile_components,rc_historic_stumbling_block:_rc_historic_stumbling_block,rc_illegal_ingredients:_rc_illegal_ingredients,rc_infested_ingredients:_rc_infested_ingredients,rc_ingredients_develop_quasi_sentience:_rc_ingredients_develop_quasi_sentience,rc_intrusive_spirit:_rc_intrusive_spirit,rc_ley_line_convergence:_rc_ley_line_convergence,rc_magical_resonance:_rc_magical_resonance,rc_planar_peculiarity:_rc_planar_peculiarity,rc_rare_reference:_rc_rare_reference,rc_reagent_shortage:_rc_reagent_shortage,rc_regal_requisite:_rc_regal_requisite,rc_sesquipedalian_elucidation:_rc_sesquipedalian_elucidation,rc_structural_flaw:_rc_structural_flaw,rc_sudden_inspiration:_rc_sudden_inspiration,class_specific_challenges:_class_specific_challenges,perks:_perks,quirks:_quirks,flaws:_flaws,esoteric_material_components:_esoteric_material_components,buying_esoteric_components:_buying_esoteric_components,implementing_esoteric_components:_implementing_esoteric_components,optional_components:_optional_components,mandatory_components:_mandatory_components,with_limited_magic:_with_limited_magic,scrounging:_scrounging,esoteric_components:_esoteric_components,crafting_magic_items:_crafting_magic_items,feats_ucp:_feats_ucp,relics:_relics,triumphs:_triumphs,relics_in_your_own_campaign:_relics_in_your_own_campaign,adapting_scaling_items:_adapting_scaling_items,simplified_spellcasting:_simplified_spellcasting,simplified_spellcasting_rules:_simplified_spellcasting_rules,other_spellcasters:_other_spellcasters,metamagic:_metamagic,pearls_of_power:_pearls_of_power}