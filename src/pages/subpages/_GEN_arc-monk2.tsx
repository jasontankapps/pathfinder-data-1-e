import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _perfect_scholar = {title: "Perfect Scholar", jsx: <><h2 id="arc-monk-perfect_scholar-perfect-scholar">Perfect Scholar</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 44</Link><br/>Perfect scholars, often worshipers of Irori, hone their minds and bodies through the accumulation of knowledge. They study and annotate the holy texts of Irori and other philosophies as well as collect lore on anatomy, medicine, philosophy, martial arts, and history, among other topics of erudition.</p>
<Ability icon={["skills"]} id="arc-monk-perfect_scholar-undefined">
<Pair id="arc-monk-perfect_scholar-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> (INT), <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/knowledge_history">Knowledge (history)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT), <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT), <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> (INT), <Link to="/skill/linguistics">Linguistics</Link> (INT)</Pair>
<Pair title="Removed Skills">Intimidate, Perform</Pair></Ability>
<Ability id="arc-monk-perfect_scholar-lore-ex" icon={["upgrade"]}>
<Pair single id="arc-monk-perfect_scholar-lore-ex">Lore (Ex)</Pair>
<Pair hl title="Replaces">Still mind</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">The perfect scholar gains a bonus equal to 1/2 his monk level on Knowledge checks and can attempt Knowledge checks untrained.</Pair>
</Ability>
<Ability id="arc-monk-perfect_scholar-learn-from-failure-ex" icon={["upgrade"]}>
<Pair single id="arc-monk-perfect_scholar-learn-from-failure-ex">Learn from Failure (Ex)</Pair>
<Pair hl title="Replaces">Slow fall</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">When the perfect scholar misses with an attack roll or fails a <Link to="/rule/research">Research check</Link>, he gains an insight bonus on his next attack roll or Research check against the same target attempted in the next 24 hours. The insight bonus is equal to <Link to="/misc/half">half</Link> his monk level - 1.</Pair>
<Pair title="Special">An individual target cannot be affected by this ability more than once in a 24-hour period.</Pair>
</Ability>
<Ability id="arc-monk-perfect_scholar-eye-of-the-sun-and-moon-ex" icon={["stairs-goal"]}>
<Pair single id="arc-monk-perfect_scholar-eye-of-the-sun-and-moon-ex">Eye of the Sun and Moon (Ex)</Pair>
<Pair hl title="Replaces">Tongue of the sun and moon</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">A perfect scholar can read all languages and write all languages he has read or heard.</Pair>
</Ability>
<Ability id="arc-monk-perfect_scholar-walk-with-the-master-su" icon={["magic-swirl"]}>
<Pair single id="arc-monk-perfect_scholar-walk-with-the-master-su">Walk with the Master (Su)</Pair>
<Pair hl title="Alters">Perfect self</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">The perfect scholar has mastered his spiritual resonance, allowing him to travel as if using <Link to="/spell/etherealness">etherealness</Link>, <Link to="/spell/plane_shift">plane shift</Link>, or <Link to="/spell/shadow_walk">shadow walk</Link> at his monk level by spending only 1 point from his <em>ki pool.</em> He cannot bring other creatures with him. He is treated as an <Link to="/type/outsider">outsider</Link> rather than his original type, although he can be brought back to life as if he were still of his former type.</Pair>
</Ability>
</>};
const _perfect_scholar_uc = {title: "Perfect Scholar (Unchained)", topLink: ["Unchained Monk","class/unchained_monk"], jsx: <><h2 id="arc-monk-perfect_scholar_uc-perfect-scholar">Perfect Scholar</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 44</Link><br/>Perfect scholars, often worshipers of Irori, hone their minds and bodies through the accumulation of knowledge. They study and annotate the holy texts of Irori and other philosophies as well as collect lore on anatomy, medicine, philosophy, martial arts, and history, among other topics of erudition.</p>
<Ability icon={["skills"]} id="arc-monk-perfect_scholar_uc-undefined">
<Pair id="arc-monk-perfect_scholar_uc-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> (INT), <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/knowledge_history">Knowledge (history)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT), <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT), <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> (INT), <Link to="/skill/linguistics">Linguistics</Link> (INT)</Pair>
<Pair title="Removed Skills">Intimidate, Perform</Pair></Ability>
<Ability id="arc-monk-perfect_scholar_uc-lore-ex" icon={["upgrade"]}>
<Pair single id="arc-monk-perfect_scholar_uc-lore-ex">Lore (Ex)</Pair>
<Pair hl title="Replaces">Still mind</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">The perfect scholar gains a bonus equal to 1/2 his monk level on Knowledge checks and can attempt Knowledge checks untrained.</Pair>
</Ability>
<Ability id="arc-monk-perfect_scholar_uc-learn-from-failure-ex" icon={["upgrade"]}>
<Pair single id="arc-monk-perfect_scholar_uc-learn-from-failure-ex">Learn from Failure (Ex)</Pair>
<Pair hl title="Replaces">4th-level ki power</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">When the perfect scholar misses with an attack roll or fails a <Link to="/rule/research">Research check</Link>, he gains an insight bonus on his next attack roll or Research check against the same target attempted in the next 24 hours. The insight bonus is equal to <Link to="/misc/half">half</Link> his monk level - 1.</Pair>
<Pair title="Special">An individual target cannot be affected by this ability more than once in a 24-hour period.</Pair>
</Ability>
<Ability id="arc-monk-perfect_scholar_uc-eye-of-the-sun-and-moon-ex" icon={["stairs-goal"]}>
<Pair single id="arc-monk-perfect_scholar_uc-eye-of-the-sun-and-moon-ex">Eye of the Sun and Moon (Ex)</Pair>
<Pair hl title="Replaces">Tongue of the sun and moon</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">A perfect scholar can read all languages and write all languages he has read or heard.</Pair>
</Ability>
<Ability id="arc-monk-perfect_scholar_uc-walk-with-the-master-su" icon={["magic-swirl"]}>
<Pair single id="arc-monk-perfect_scholar_uc-walk-with-the-master-su">Walk with the Master (Su)</Pair>
<Pair hl title="Alters">Perfect self</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">The perfect scholar has mastered his spiritual resonance, allowing him to travel as if using <Link to="/spell/etherealness">etherealness</Link>, <Link to="/spell/plane_shift">plane shift</Link>, or <Link to="/spell/shadow_walk">shadow walk</Link> at his monk level by spending only 1 point from his <em>ki pool.</em> He cannot bring other creatures with him. He is treated as an <Link to="/type/outsider">outsider</Link> rather than his original type, although he can be brought back to life as if he were still of his former type.</Pair>
</Ability>
</>};
const _qinggong_monk = {hasJL:true,title: "Qinggong Monk", jsx: <><div className="jumpList" id="arc-monk-qinggong_monk-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arc-monk-qinggong_monk-4th-level-ki-powers">4th-level Ki Powers</InnerLink></li><li><InnerLink toTop to="arc-monk-qinggong_monk-6th-level-ki-powers">6th-level Ki Powers</InnerLink></li><li><InnerLink toTop to="arc-monk-qinggong_monk-7th-level-ki-powers">7th-level Ki Powers</InnerLink></li><li><InnerLink toTop to="arc-monk-qinggong_monk-8th-level-ki-powers">8th-level Ki Powers</InnerLink></li><li><InnerLink toTop to="arc-monk-qinggong_monk-10th-level-ki-powers">10th-level Ki Powers</InnerLink></li><li><InnerLink toTop to="arc-monk-qinggong_monk-12th-level-ki-powers">12th-level Ki Powers</InnerLink></li><li><InnerLink toTop to="arc-monk-qinggong_monk-14th-level-ki-powers">14th-level Ki Powers</InnerLink></li><li><InnerLink toTop to="arc-monk-qinggong_monk-16th-level-ki-powers">16th-level Ki Powers</InnerLink></li><li><InnerLink toTop to="arc-monk-qinggong_monk-18th-level-ki-powers">18th-level Ki Powers</InnerLink></li><li><InnerLink toTop to="arc-monk-qinggong_monk-20th-level-ki-powers">20th-level Ki Powers</InnerLink></li></ul></div><h2 id="arc-monk-qinggong_monk-qinggong-monk">Qinggong Monk</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 51</Link>, <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 21</Link>, <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 149</Link><br/>The qinggong monk is a master of her ki, using it to perform superhuman stunts or even blast opponents with supernatural energy. Some achieve their power over ki through extreme discipline, while others attain this power by intentionally or accidentally ingesting rare herbs or strange mystical fruits, and a few are gifted these abilities by a dying qinggong master.</p>
<div style={{clear:"both"}}></div><Ability id="arc-monk-qinggong_monk-ki-power" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-monk-qinggong_monk-ki-power">Ki Power</Pair>
<Pair hl title="Replaces">The monk class abilities the qinggong monk gives up for a ki power.</Pair>
<Pair title="Ability">A qinggong monk can select a ki power (see below) for which she qualifies in place of the following monk class abilities.</Pair>
<Pair title="At 4th Level">Slow fall</Pair>
<Pair title="At 5th Level">High jump</Pair>
<Pair title="At 7th Level">Wholeness of body</Pair>
<Pair title="At 11th Level">Diamond body</Pair>
<Pair title="At 12th Level">Abundant step</Pair>
<Pair title="At 13th Level">Diamond soul</Pair>
<Pair title="At 15th Level">Quivering palm</Pair>
<Pair title="At 17th Level">Timeless body; Tongue of the sun and moon</Pair>
<Pair title="At 19th Level">Empty body</Pair>
<Pair title="At 20th Level">Perfect self</Pair>
<Pair title="Special">Ki powers are abilities that draw on the power of a monk's ki. The standard monk has several abilities that count as ki powers, such as <em>wholeness of body, abundant step,</em> and <em>empty body.</em> A qinggong monk can learn additional ki powers, which often replaces a non-ki monk ability such as <em>purity of body.</em> Ki powers are divided into three categories: <strong>feats, monk abilities,</strong> and <strong>spells.</strong></Pair>
</Ability>
<Ability id="arc-monk-qinggong_monk-feats" extraClasses="subAbility numbered" icon={["stairs-goal"]}>
<Pair single id="arc-monk-qinggong_monk-feats">Feats</Pair>
<Pair title="Info">These ki powers duplicate the effects of specific feats. A monk does not need to qualify for a feat to select it as a ki power. For example, a qinggong monk can select Spring Attack as a ki power even if she doesn't meet the prerequisites for selecting Spring Attack as a feat. Activating one of these ki powers is a <strong className="hl">free action</strong> on the monk's turn; until the start of her next turn, the monk is treated as if she had that feat. Some of these ki powers that duplicate feats may also be activated as an <strong className="hl">immediate action</strong>; these powers are noted in the ki powers list.</Pair>
</Ability>
<Ability id="arc-monk-qinggong_monk-monk-abilities" extraClasses="subAbility numbered" icon={["stairs-goal"]}>
<Pair single id="arc-monk-qinggong_monk-monk-abilities">Monk Abilities</Pair>
<Pair title="Info">Some ki powers are standard monk abilities. Even if a qinggong monk selects a different ki power in place of a standard monk ability, she can select that monk ability later as one of her ki powers.</Pair>
</Ability>
<Ability id="arc-monk-qinggong_monk-spells" extraClasses="subAbility numbered" icon={["magic-swirl"]}>
<Pair single id="arc-monk-qinggong_monk-spells">Spells</Pair>
<Pair title="Info">These ki powers duplicate the effects of a spell, and are spell-like abilities. A qinggong monk's class level is the caster level for these spell-like abilities, and she uses Wisdom to determine her <Link to="/rule/concentration">concentration</Link> check bonus.</Pair>
</Ability>
<Ability id="arc-monk-qinggong_monk-list-of-ki-powers" icon={["info"]}>
<Pair single id="arc-monk-qinggong_monk-list-of-ki-powers">List of Ki Powers</Pair>
<Pair title="Ability"><p>All ki powers have a minimum monk level requirement to select them. A monk who does not meet this requirement cannot select that ki power.</p>
<p>Most ki powers require the monk to spend ki points; the exact amount is listed after the ki power. Ki powers that cost 0 ki do not require the monk to have any ki points in her <em>ki pool</em> to use the ability.</p>
<p>The saving throw against a monk's ki power, if any, is equal to 10 + 1/2 the monk's level + the monk's Wisdom bonus.</p>
</Pair>
</Ability>
<h3 id="arc-monk-qinggong_monk-4th-level-ki-powers" data-hash-target>4th-level Ki Powers</h3>
<ScrollContainer id="arc-monk-qinggong_monk--table-0"><table>
<thead>
<tr>
<th>Feats</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/feat/acrobatic_steps">Acrobatic Steps</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/adder_strike">Adder Strike</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/death_from_above">Death from Above</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/deny_death">Deny Death</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-qinggong_monk-ref-I-1" id="arc-monk-qinggong_monk-ref-I-1" data-hash-target to="arc-monk-qinggong_monk-I">1</InnerLink></sup></td>
<td>0</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/ki_stand">Ki Stand</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-qinggong_monk-ref-I-2" id="arc-monk-qinggong_monk-ref-I-2" data-hash-target to="arc-monk-qinggong_monk-I">1</InnerLink></sup></td>
<td>0</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/power_attack">Power Attack</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/quick_draw">Quick Draw</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/throw_anything">Throw Anything</Link></strong></td>
<td>1</td>
</tr>
</tbody></table></ScrollContainer>
<ScrollContainer id="arc-monk-qinggong_monk--table-1"><table>
<thead>
<tr>
<th>Monk Abilities</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Slow Fall</strong></td>
<td>0</td>
</tr>
</tbody></table></ScrollContainer>
<ScrollContainer id="arc-monk-qinggong_monk--table-2"><table>
<thead>
<tr>
<th>Spells</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/spell/augury">Augury</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/barkskin">Barkskin</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-qinggong_monk-ref-S-1" id="arc-monk-qinggong_monk-ref-S-1" data-hash-target to="arc-monk-qinggong_monk-S">2</InnerLink></sup></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/burst_of_adrenaline">Burst of Adrenaline</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/burst_of_insight">Burst of Insight</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/calm_spirit">Calm Spirit</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/feather_step">Feather Step</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-qinggong_monk-ref-S-2" id="arc-monk-qinggong_monk-ref-S-2" data-hash-target to="arc-monk-qinggong_monk-S">2</InnerLink></sup></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/hydraulic_push">Hydraulic Push</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/ki_arrow">Ki Arrow</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/message">Message</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/mighty_fist_of_the_earth">Mighty Fist of the Earth</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-qinggong_monk-ref-K-1" id="arc-monk-qinggong_monk-ref-K-1" data-hash-target to="arc-monk-qinggong_monk-K">3</InnerLink></sup></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/psychic_reading">Psychic Reading</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/scorching_ray">Scorching Ray</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/stone_shield">Stone Shield</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/true_strike">True Strike</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-qinggong_monk-ref-S-3" id="arc-monk-qinggong_monk-ref-S-3" data-hash-target to="arc-monk-qinggong_monk-S">2</InnerLink></sup></td>
<td>1</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="arc-monk-qinggong_monk-6th-level-ki-powers" data-hash-target>6th-level Ki Powers</h3>
<ScrollContainer id="arc-monk-qinggong_monk--table-3"><table>
<thead>
<tr>
<th>Feats</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/feat/absorb_spirit">Absorb Spirit</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/heroic_recovery">Heroic Recovery</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-qinggong_monk-ref-I-3" id="arc-monk-qinggong_monk-ref-I-3" data-hash-target to="arc-monk-qinggong_monk-I">1</InnerLink></sup></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/sidestep">Sidestep</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-qinggong_monk-ref-I-4" id="arc-monk-qinggong_monk-ref-I-4" data-hash-target to="arc-monk-qinggong_monk-I">1</InnerLink></sup></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/snatch_arrows">Snatch Arrows</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-qinggong_monk-ref-I-5" id="arc-monk-qinggong_monk-ref-I-5" data-hash-target to="arc-monk-qinggong_monk-I">1</InnerLink></sup></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/spring_attack">Spring Attack</Link></strong></td>
<td>1</td>
</tr>
</tbody></table></ScrollContainer>
<ScrollContainer id="arc-monk-qinggong_monk--table-4"><table>
<thead>
<tr>
<th>Monk Abilities</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong>High Jump</strong></td>
<td>1</td>
</tr>
</tbody></table></ScrollContainer>
<ScrollContainer id="arc-monk-qinggong_monk--table-5"><table>
<thead>
<tr>
<th>Spells</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/spell/cloak_of_winds">Cloak of Winds</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-qinggong_monk-ref-S-4" id="arc-monk-qinggong_monk-ref-S-4" data-hash-target to="arc-monk-qinggong_monk-S">2</InnerLink></sup></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/enshroud_thoughts">Enshroud Thoughts</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/gaseous_form">Gaseous Form</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-qinggong_monk-ref-S-5" id="arc-monk-qinggong_monk-ref-S-5" data-hash-target to="arc-monk-qinggong_monk-S">2</InnerLink></sup></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/hydraulic_torrent">Hydraulic Torrent</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/mental_barrier_i">Mental Barrier I</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/object_reading">Object Reading</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/placebo_effect">Placebo Effect</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/remove_disease">Remove Disease</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/thought_shield_i">Thought Shield I</Link></strong></td>
<td>1</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="arc-monk-qinggong_monk-7th-level-ki-powers" data-hash-target>7th-level Ki Powers</h3>
<ScrollContainer id="arc-monk-qinggong_monk--table-6"><table>
<thead>
<tr>
<th>Monk Abilities</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Wholeness of Body</strong></td>
<td>2</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="arc-monk-qinggong_monk-8th-level-ki-powers" data-hash-target>8th-level Ki Powers</h3>
<ScrollContainer id="arc-monk-qinggong_monk--table-7"><table>
<thead>
<tr>
<th>Feats</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/feat/gliding_steps">Gliding Steps</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-qinggong_monk-ref-I-6" id="arc-monk-qinggong_monk-ref-I-6" data-hash-target to="arc-monk-qinggong_monk-I">1</InnerLink></sup></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/jawbreaker">Jawbreaker</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/spider_step">Spider Step</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/whirlwind_attack">Whirlwind Attack</Link></strong></td>
<td>2</td>
</tr>
</tbody></table></ScrollContainer>
<ScrollContainer id="arc-monk-qinggong_monk--table-8"><table>
<thead>
<tr>
<th>Spells</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/spell/deadly_juggernaut">Deadly Juggernaut</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/dragons_breath">Dragon's breath</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/hypercognition">Hypercognition</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/mantle_of_calm">Mantle of Calm</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/mental_barrier_ii">Mental Barrier II</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/neutralize_poison">Neutralize Poison</Link></strong></td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/poison">Poison</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/purge_spirit">Purge Spirit</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/restoration">Restoration</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-qinggong_monk-ref-S-6" id="arc-monk-qinggong_monk-ref-S-6" data-hash-target to="arc-monk-qinggong_monk-S">2</InnerLink></sup></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/share_memory">Share Memory</Link></strong></td>
<td>0</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/silk_to_steel">Silk to Steel</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/thought_shield_ii">Thought Shield II</Link></strong></td>
<td>1</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="arc-monk-qinggong_monk-10th-level-ki-powers" data-hash-target>10th-level Ki Powers</h3>
<ScrollContainer id="arc-monk-qinggong_monk--table-9"><table>
<thead>
<tr>
<th>Feats</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/feat/greater_bull_rush">Greater Bull Rush</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/greater_disarm">Greater Disarm</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/greater_feint">Greater Feint</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/greater_sunder">Greater Sunder</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/improved_blind_fight">Improved Blind-Fight</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-qinggong_monk-ref-I-7" id="arc-monk-qinggong_monk-ref-I-7" data-hash-target to="arc-monk-qinggong_monk-I">1</InnerLink></sup></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/lunge">Lunge</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/step_up_and_strike">Step Up and Strike</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-qinggong_monk-ref-I-8" id="arc-monk-qinggong_monk-ref-I-8" data-hash-target to="arc-monk-qinggong_monk-I">1</InnerLink></sup></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/wind_stance">Wind Stance</Link></strong></td>
<td>2</td>
</tr>
</tbody></table></ScrollContainer>
<ScrollContainer id="arc-monk-qinggong_monk--table-10"><table>
<thead>
<tr>
<th>Spells</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/spell/aura_alteration">Aura Alteration</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/discordant_blast">Discordant Blast</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/ethereal_fists">Ethereal Fists</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/glimpse_of_truth">Glimpse of Truth</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/ki_leech">Ki Leech</Link></strong></td>
<td>0</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/mental_barrier_iii">Mental Barrier III</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/persistent_vigor">Persistent Vigor</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/quieting_weapons">Quieting Weapons</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/retrocognition">Retrocognition</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/sessile_spirit">Sessile Spirit</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/shadow_step">Shadow Step</Link></strong></td>
<td>1</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/spit_venom">Spit Venom</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/thought_shield_iii">Thought Shield III</Link></strong></td>
<td>2</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="arc-monk-qinggong_monk-12th-level-ki-powers" data-hash-target>12th-level Ki Powers</h3>
<ScrollContainer id="arc-monk-qinggong_monk--table-11"><table>
<thead>
<tr>
<th>Feats</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/feat/bonebreaker">Bonebreaker</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/elemental_fist">Elemental Fists</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/improved_spring_attack">Improved Spring Attack</Link></strong></td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/improvised_weapon_mastery">Improvised Weapon Mastery</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/ki_throw">Ki Throw</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/punishing_kick">Punishing Kick</Link></strong></td>
<td>2</td>
</tr>
</tbody></table></ScrollContainer>
<ScrollContainer id="arc-monk-qinggong_monk--table-12"><table>
<thead>
<tr>
<th>Monk Abilities</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Abundant Step</strong></td>
<td>2</td>
</tr>
<tr>
<td><strong>Diamond Body</strong></td>
<td>0</td>
</tr>
</tbody></table></ScrollContainer>
<ScrollContainer id="arc-monk-qinggong_monk--table-13"><table>
<thead>
<tr>
<th>Spells</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/spell/battlemind_link">Battlemind Link</Link></strong></td>
<td>4</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/dust_form">Dust Form</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/entrap_spirit">Entrap Spirit</Link></strong></td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/mental_barrier_iv">Mental Barrier IV</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/shadow_walk">Shadow Walk</Link></strong></td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/thought_shield_iv">Thought Shield IV</Link></strong></td>
<td>2</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="arc-monk-qinggong_monk-14th-level-ki-powers" data-hash-target>14th-level Ki Powers</h3>
<ScrollContainer id="arc-monk-qinggong_monk--table-14"><table>
<thead>
<tr>
<th>Feats</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/feat/cloud_step">Cloud Step</Link></strong></td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/disarming_strike">Disarming Strike</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/improved_ki_throw">Improved Ki Throw</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/neckbreaker">Neckbreaker</Link></strong></td>
<td>2</td>
</tr>
</tbody></table></ScrollContainer>
<ScrollContainer id="arc-monk-qinggong_monk--table-15"><table>
<thead>
<tr>
<th>Monk Abilities</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Diamond Soul</strong></td>
<td>0</td>
</tr>
</tbody></table></ScrollContainer>
<ScrollContainer id="arc-monk-qinggong_monk--table-16"><table>
<thead>
<tr>
<th>Spells</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/spell/blood_crow_strike">Blood Crow Strike</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/cold_ice_strike">Cold Ice Strike</Link></strong></td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/ki_shout">Ki Shout</Link></strong></td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/mental_barrier_v">Mental Barrier V</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/prognostication">Prognostication</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/repress_memory">Repress Memory</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/sonic_thrust">Sonic Thrust</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/thought_shield_v">Thought Shield V</Link></strong></td>
<td>2</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="arc-monk-qinggong_monk-16th-level-ki-powers" data-hash-target>16th-level Ki Powers</h3>
<ScrollContainer id="arc-monk-qinggong_monk--table-17"><table>
<thead>
<tr>
<th>Feats</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/feat/bleeding_critical">Bleeding Critical</Link></strong></td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/greater_blind_fight">Greater Blind-Fight</Link></strong> <sup><InnerLink showBacklink="backlink-arc-monk-qinggong_monk-ref-I-9" id="arc-monk-qinggong_monk-ref-I-9" data-hash-target to="arc-monk-qinggong_monk-I">1</InnerLink></sup></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/improved_vital_strike">Improved Vital Strike</Link></strong></td>
<td>2</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/lightning_stance">Lightning Stance</Link></strong></td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/penetrating_strike">Penetrating Strike</Link></strong></td>
<td>2</td>
</tr>
</tbody></table></ScrollContainer>
<ScrollContainer id="arc-monk-qinggong_monk--table-18"><table>
<thead>
<tr>
<th>Monk Abilities</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Quivering Palm</strong></td>
<td>2</td>
</tr>
</tbody></table></ScrollContainer>
<ScrollContainer id="arc-monk-qinggong_monk--table-19"><table>
<thead>
<tr>
<th>Spells</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/spell/strangling_hair">Strangling Hair</Link></strong></td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/unshakeable_zeal">Unshakeable Zeal</Link></strong></td>
<td>2</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="arc-monk-qinggong_monk-18th-level-ki-powers" data-hash-target>18th-level Ki Powers</h3>
<ScrollContainer id="arc-monk-qinggong_monk--table-20"><table>
<thead>
<tr>
<th>Feats</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/feat/greater_spring_attack">Greater Spring Attack</Link></strong></td>
<td>3</td>
</tr>
</tbody></table></ScrollContainer>
<ScrollContainer id="arc-monk-qinggong_monk--table-21"><table>
<thead>
<tr>
<th>Monk Abilities</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Timeless Body</strong></td>
<td>0</td>
</tr>
<tr>
<td><strong>Tongue of the Sun and Moon</strong></td>
<td>0</td>
</tr>
</tbody></table></ScrollContainer>
<ScrollContainer id="arc-monk-qinggong_monk--table-22"><table>
<thead>
<tr>
<th>Spells</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/spell/bilocation">Bilocation</Link></strong></td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/true_prognostication">True Prognostication</Link></strong></td>
<td>2</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="arc-monk-qinggong_monk-20th-level-ki-powers" data-hash-target>20th-level Ki Powers</h3>
<ScrollContainer id="arc-monk-qinggong_monk--table-23"><table>
<thead>
<tr>
<th>Feats</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/feat/blinding_critical">Blinding Critical</Link></strong></td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/crippling_critical">Crippling Critical</Link></strong></td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/deafening_critical">Deafening Critical</Link></strong></td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/greater_penetrating_strike">Greater Penetrating Strike</Link></strong></td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/feat/tiring_critical">Tiring Critical</Link></strong></td>
<td>3</td>
</tr>
</tbody></table></ScrollContainer>
<ScrollContainer id="arc-monk-qinggong_monk--table-24"><table>
<thead>
<tr>
<th>Monk Abilities</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Empty Body</strong></td>
<td>3</td>
</tr>
<tr>
<td><strong>Perfect Self</strong></td>
<td>0</td>
</tr>
</tbody></table></ScrollContainer>
<ScrollContainer id="arc-monk-qinggong_monk--table-25"><table>
<thead>
<tr>
<th>Spells</th>
<th>Ki points</th>
</tr>
</thead>
<tbody><tr>
<td><strong className="hl"><Link to="/spell/akashic_form">Akashic Form</Link></strong></td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/divide_mind">Divide Mind</Link></strong></td>
<td>3</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/earthquake">Earthquake</Link></strong></td>
<td>4</td>
</tr>
<tr>
<td><strong className="hl"><Link to="/spell/frightful_aspect">Frightful Aspect</Link></strong></td>
<td>3</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="arc-monk-qinggong_monk-label">Footnotes</h3>
<ol>
<li id="arc-monk-qinggong_monk-I">
<p>Can be used as an immediate action. <InnerLink id="backlink-arc-monk-qinggong_monk-ref-I-1" data-hash-target to="arc-monk-qinggong_monk-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink> <InnerLink id="backlink-arc-monk-qinggong_monk-ref-I-2" data-hash-target to="arc-monk-qinggong_monk-ref-I-2" aria-label="Back to reference I-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-arc-monk-qinggong_monk-ref-I-3" data-hash-target to="arc-monk-qinggong_monk-ref-I-3" aria-label="Back to reference I-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-arc-monk-qinggong_monk-ref-I-4" data-hash-target to="arc-monk-qinggong_monk-ref-I-4" aria-label="Back to reference I-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-arc-monk-qinggong_monk-ref-I-5" data-hash-target to="arc-monk-qinggong_monk-ref-I-5" aria-label="Back to reference I-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-arc-monk-qinggong_monk-ref-I-6" data-hash-target to="arc-monk-qinggong_monk-ref-I-6" aria-label="Back to reference I-6">↩<sup>6</sup></InnerLink> <InnerLink id="backlink-arc-monk-qinggong_monk-ref-I-7" data-hash-target to="arc-monk-qinggong_monk-ref-I-7" aria-label="Back to reference I-7">↩<sup>7</sup></InnerLink> <InnerLink id="backlink-arc-monk-qinggong_monk-ref-I-8" data-hash-target to="arc-monk-qinggong_monk-ref-I-8" aria-label="Back to reference I-8">↩<sup>8</sup></InnerLink> <InnerLink id="backlink-arc-monk-qinggong_monk-ref-I-9" data-hash-target to="arc-monk-qinggong_monk-ref-I-9" aria-label="Back to reference I-9">↩<sup>9</sup></InnerLink></p>
</li>
<li id="arc-monk-qinggong_monk-S">
<p>Can only be used on himself. <InnerLink id="backlink-arc-monk-qinggong_monk-ref-S-1" data-hash-target to="arc-monk-qinggong_monk-ref-S-1" aria-label="Back to reference S-1">↩</InnerLink> <InnerLink id="backlink-arc-monk-qinggong_monk-ref-S-2" data-hash-target to="arc-monk-qinggong_monk-ref-S-2" aria-label="Back to reference S-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-arc-monk-qinggong_monk-ref-S-3" data-hash-target to="arc-monk-qinggong_monk-ref-S-3" aria-label="Back to reference S-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-arc-monk-qinggong_monk-ref-S-4" data-hash-target to="arc-monk-qinggong_monk-ref-S-4" aria-label="Back to reference S-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-arc-monk-qinggong_monk-ref-S-5" data-hash-target to="arc-monk-qinggong_monk-ref-S-5" aria-label="Back to reference S-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-arc-monk-qinggong_monk-ref-S-6" data-hash-target to="arc-monk-qinggong_monk-ref-S-6" aria-label="Back to reference S-6">↩<sup>6</sup></InnerLink></p>
</li>
<li id="arc-monk-qinggong_monk-K">
<p>If the monk has 0 ki points after activating this ki power, the rock created does not count as a <em>ki strike.</em> <InnerLink id="backlink-arc-monk-qinggong_monk-ref-K-1" data-hash-target to="arc-monk-qinggong_monk-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _sage_counselor = {title: "Sage Counselor", jsx: <><h2 id="arc-monk-sage_counselor-sage-counselor">Sage Counselor</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 67</Link><br/>Sage counselors are ascetics and mystics who leave the confines of the monastery walls to advise secular people about spiritual truths and to seek knowledge of the outside world. They often find work as mentors teaching religion and martial arts, and some of them even become counselors for people in high places. Sage counselors often speak in metaphors, knowing that indirect persuasion is more effective than speaking plainly, and they use indirect tactics in combat as well.</p>
<Ability icon={["skills"]} id="arc-monk-sage_counselor-undefined">
<Pair id="arc-monk-sage_counselor-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT)</Pair>
<Pair title="Removed Skills">Climb, Escape Artist, Perception</Pair></Ability>
<Ability id="arc-monk-sage_counselor-cunning-fist-ex" icon={["stairs-goal"]}>
<Pair single id="arc-monk-sage_counselor-cunning-fist-ex">Cunning Fist (Ex)</Pair>
<Pair hl title="Replaces">Bonus feats gained at 1st, 2nd, and 6th levels</Pair>
<Pair title="Ability">A sage counselor gains <Link to="/feat/combat_expertise">Combat Expertise</Link> as a bonus feat, and he can ignore the Intelligence prerequisite on feats that have Combat Expertise as a prerequisite.</Pair>
<Pair title="At 2nd Level">He gains <Link to="/feat/improved_feint">Improved Feint</Link>.</Pair>
<Pair title="At 6th Level">He gains <Link to="/feat/greater_feint">Greater Feint</Link>.</Pair>
<Pair title="Special">He doesn't need to meet the prerequisites of these bonus feats.</Pair>
</Ability>
<Ability id="arc-monk-sage_counselor-feinting-flurry" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-monk-sage_counselor-feinting-flurry">Feinting Flurry</Pair>
<Pair hl title="Replaces">The ability to spend ki to make an additional attack with a <em>flurry of blows</em>, bonus feat gained at 10th level</Pair>
<Pair hl title="Alters">Flurry of blows, ki pool</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Swift Action">A sage counselor can spend 1 ki point while performing a <em>flurry of blows</em> to <Link to="/skill/feint">feint</Link> an opponent, but he can't spend 1 ki point to make an additional attack when making a <em>flurry of blows.</em></Pair>
<Pair title="At 10th Level">He can also choose to replace his first attack during a <em>flurry of blows</em> with a feint check.</Pair>
</Ability>
<Ability id="arc-monk-sage_counselor-deceptive-ki-su" icon={["upgrade"]}>
<Pair single id="arc-monk-sage_counselor-deceptive-ki-su">Deceptive Ki (Su)</Pair>
<Pair hl title="Replaces">The ability to spend ki to increase his speed by 20 feet for 1 round</Pair>
<Pair hl title="Alters">Ki pool</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Swift Action">The sage counselor can spend 1 point from his <em>ki pool</em> to give himself a +4 insight bonus on his next Bluff check.</Pair>
</Ability>
</>};
const _sage_counselor_uc = {title: "Sage Counselor (Unchained)", topLink: ["Unchained Monk","class/unchained_monk"], jsx: <><h2 id="arc-monk-sage_counselor_uc-sage-counselor">Sage Counselor</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 67</Link><br/>Sage counselors are ascetics and mystics who leave the confines of the monastery walls to advise secular people about spiritual truths and to seek knowledge of the outside world. They often find work as mentors teaching religion and martial arts, and some of them even become counselors for people in high places. Sage counselors often speak in metaphors, knowing that indirect persuasion is more effective than speaking plainly, and they use indirect tactics in combat as well.</p>
<Ability icon={["skills"]} id="arc-monk-sage_counselor_uc-undefined">
<Pair id="arc-monk-sage_counselor_uc-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT)</Pair>
<Pair title="Removed Skills">Climb, Escape Artist, Perception</Pair></Ability>
<Ability id="arc-monk-sage_counselor_uc-cunning-fist-ex" icon={["stairs-goal"]}>
<Pair single id="arc-monk-sage_counselor_uc-cunning-fist-ex">Cunning Fist (Ex)</Pair>
<Pair hl title="Replaces">Bonus feats gained at 1st, 2nd, and 6th levels</Pair>
<Pair title="Ability">A sage counselor gains <Link to="/feat/combat_expertise">Combat Expertise</Link> as a bonus feat, and he can ignore the Intelligence prerequisite on feats that have Combat Expertise as a prerequisite.</Pair>
<Pair title="At 2nd Level">He gains <Link to="/feat/improved_feint">Improved Feint</Link>.</Pair>
<Pair title="At 6th Level">He gains <Link to="/feat/greater_feint">Greater Feint</Link>.</Pair>
<Pair title="Special">He doesn't need to meet the prerequisites of these bonus feats.</Pair>
</Ability>
<Ability id="arc-monk-sage_counselor_uc-feinting-flurry" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-monk-sage_counselor_uc-feinting-flurry">Feinting Flurry</Pair>
<Pair hl title="Replaces">The ability to spend ki to make an additional attack with a <em>flurry of blows</em>, bonus feat gained at 10th level</Pair>
<Pair hl title="Alters">Flurry of blows, ki pool</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Swift Action">A sage counselor can spend 1 ki point while performing a <em>flurry of blows</em> to <Link to="/skill/feint">feint</Link> an opponent, but he can't spend 1 ki point to make an additional attack when making a <em>flurry of blows.</em></Pair>
<Pair title="At 10th Level">He can also choose to replace his first attack during a <em>flurry of blows</em> with a feint check.</Pair>
</Ability>
<Ability id="arc-monk-sage_counselor_uc-deceptive-ki-su" icon={["upgrade"]}>
<Pair single id="arc-monk-sage_counselor_uc-deceptive-ki-su">Deceptive Ki (Su)</Pair>
<Pair hl title="Replaces">4th-level ki power</Pair>
<Pair hl title="Alters">Ki pool</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Swift Action">The sage counselor can spend 1 point from his <em>ki pool</em> to give himself a +4 insight bonus on his next Bluff check.</Pair>
</Ability>
</>};
const _scaled_fist = {title: "Scaled Fist", jsx: <><h2 id="arc-monk-scaled_fist-scaled-fist">Scaled Fist</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 14</Link><br/>Steeped in traditions that trace their origins to the warrior-monks who trained under the tutelage of draconic masters in Tian Xia, scaled fists eschew passive introspection in favor of unshakable confidence. Scaled fists learn to combine brutal intimidation with the brazen ferocity of an ancient wyrm to devastate their foes.</p>
<Ability id="arc-monk-scaled_fist-draconic-might" icon={["info"]}>
<Pair single id="arc-monk-scaled_fist-draconic-might">Draconic Might</Pair>
<Pair title="Info">Any of the scaled fist's class abilities that make calculations based on her Wisdom (including bonus feats with DCs or uses per day, such as <Link to="/feat/stunning_fist">Stunning Fist</Link>, but not Wisdom-based skills or Will saving throws) are instead based on her Charisma.</Pair>
</Ability>
<Ability id="arc-monk-scaled_fist-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="arc-monk-scaled_fist-bonus-feats">Bonus Feats</Pair>
<Pair hl title="Alters">Bonus feats</Pair>
<Pair title="At 1st Level">A scaled fist adds <Link to="/feat/dragon_style">Dragon Style</Link> and <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link> to her list of bonus feats.</Pair>
<Pair title="At 6th Level">She adds <Link to="/feat/dazzling_display">Dazzling Display</Link> and <Link to="/feat/dragon_ferocity">Dragon Ferocity</Link>.</Pair>
<Pair title="At 10th Level">She adds <Link to="/feat/disheartening_display">Disheartening Display</Link>, <Link to="/feat/dragon_roar">Dragon Roar</Link> and <Link to="/feat/shatter_defenses">Shatter Defenses</Link>.</Pair>
</Ability>
<Ability id="arc-monk-scaled_fist-draconic-mettle-su" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-scaled_fist-draconic-mettle-su">Draconic Mettle (Su)</Pair>
<Pair hl title="Replaces">Still mind</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A scaled fist gains a +2 bonus on saving throws attempted against all fear, paralysis, and sleep effects.</Pair>
</Ability>
<Ability id="arc-monk-scaled_fist-draconic-fury-su" icon={["mailed-fist"]}>
<Pair single id="arc-monk-scaled_fist-draconic-fury-su">Draconic Fury (Su)</Pair>
<Pair hl title="Replaces">Maneuver training</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Choice">The scaled fist has gained some control over the draconic energies she studies. She must select one type of energy: acid, cold, electricity, or fire. Once this choice is made, it cannot be changed.</Pair>
<Pair title="Swift Action">The scaled fist can expend 1 point from her <em>ki pool</em> to imbue her natural attacks with this energy, causing them to deal an extra 1d6 points of damage of the chosen energy type for a number of rounds equal to 1/2 her monk level.</Pair>
</Ability>
<Ability id="arc-monk-scaled_fist-draconic-breath-su" icon={["tornado-discs"]}>
<Pair single id="arc-monk-scaled_fist-draconic-breath-su">Draconic Breath (Su)</Pair>
<Pair hl title="Replaces">Quivering palm</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Standard Action">A scaled fist can spend 3 points from her <em>ki pool</em> to make a breath weapon attack that deals 1d6 points of damage of her energy type per monk level in a 30-foot cone. Those caught in the area of the breath can attempt a Reflex save (DC = 10 + 1/2 the scaled fist's monk level + her Charisma modifier) to halve the normal damage.</Pair>
</Ability>
</>};
const _scaled_fist_uc = {title: "Scaled Fist (Unchained)", topLink: ["Unchained Monk","class/unchained_monk"], jsx: <><h2 id="arc-monk-scaled_fist_uc-scaled-fist">Scaled Fist</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 14</Link><br/>Steeped in traditions that trace their origins to the warrior-monks who trained under the tutelage of draconic masters in Tian Xia, scaled fists eschew passive introspection in favor of unshakable confidence. Scaled fists learn to combine brutal intimidation with the brazen ferocity of an ancient wyrm to devastate their foes.</p>
<Ability id="arc-monk-scaled_fist_uc-draconic-might" icon={["info"]}>
<Pair single id="arc-monk-scaled_fist_uc-draconic-might">Draconic Might</Pair>
<Pair title="Info">Any of the scaled fist's class abilities that make calculations based on her Wisdom (including bonus feats with DCs or uses per day, such as <Link to="/feat/stunning_fist">Stunning Fist</Link>, but not Wisdom-based skills or Will saving throws) are instead based on her Charisma.</Pair>
</Ability>
<Ability id="arc-monk-scaled_fist_uc-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="arc-monk-scaled_fist_uc-bonus-feats">Bonus Feats</Pair>
<Pair hl title="Alters">Bonus feats</Pair>
<Pair title="At 1st Level">A scaled fist adds <Link to="/feat/dragon_style">Dragon Style</Link> and <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link> to her list of bonus feats.</Pair>
<Pair title="At 6th Level">She adds <Link to="/feat/dazzling_display">Dazzling Display</Link> and <Link to="/feat/dragon_ferocity">Dragon Ferocity</Link>.</Pair>
<Pair title="At 10th Level">She adds <Link to="/feat/disheartening_display">Disheartening Display</Link>, <Link to="/feat/dragon_roar">Dragon Roar</Link> and <Link to="/feat/shatter_defenses">Shatter Defenses</Link>.</Pair>
</Ability>
<Ability id="arc-monk-scaled_fist_uc-draconic-mettle-su" icon={["stairs-goal"]}>
<Pair single id="arc-monk-scaled_fist_uc-draconic-mettle-su">Draconic Mettle (Su)</Pair>
<Pair hl title="Replaces">4th-level ki power</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A scaled fist gains a +2 bonus on saving throws attempted against all fear, paralysis, and sleep effects.</Pair>
</Ability>
<Ability id="arc-monk-scaled_fist_uc-draconic-fury-su" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-scaled_fist_uc-draconic-fury-su">Draconic Fury (Su)</Pair>
<Pair hl title="Replaces">Still mind</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">The scaled fist gains the <Link to="/kipower/elemental_fury">elemental fury</Link> ki power.</Pair>
</Ability>
<Ability id="arc-monk-scaled_fist_uc-draconic-breath-su" icon={["tornado-discs"]}>
<Pair single id="arc-monk-scaled_fist_uc-draconic-breath-su">Draconic Breath (Su)</Pair>
<Pair hl title="Replaces">12th-level ki power</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Standard Action">A scaled fist can spend 3 points from her <em>ki pool</em> to make a breath weapon attack that deals 1d6 points of damage of her energy type per monk level in a 30-foot cone. Those caught in the area of the breath can attempt a Reflex save (DC = 10 + 1/2 the scaled fist's monk level + her Charisma modifier) to halve the normal damage.</Pair>
</Ability>
</>};
const _scarred_monk = {title: "Scarred Monk", jsx: <><h2 id="arc-monk-scarred_monk-scarred-monk">Scarred Monk</h2>
<p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms pg. 12</Link><br/>Scarred monks find unique clarity in physical discomfort. For monks who seek the truth hidden in pain, the practice of mortifications of the flesh helps to achieve enlightenment and acquire disturbing powers. Those who worship <Link to="/faith/zon_kuthon">Zon-Kuthon</Link> tend to be particularly eager to explore the limitations of the flesh, yet monks of his faith are not the only ones to use self-mutilation and scarification to seek personal enhancement and power.</p>
<Ability id="arc-monk-scarred_monk-mortifications-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-monk-scarred_monk-mortifications-su">Mortifications (Su)</Pair>
<Pair hl title="Replaces">High jump, wholeness of body, abundant step, empty body, the ability to spend ki points to do anything other than what's described below</Pair>
<Pair hl title="Alters">Ki pool</Pair>
<Pair title="Ability">Detailed below are a number of unusual, grisly, and harrowing processes known as mortifications that a monk can inflict upon herself in exchange for an unusual ki power. The monk must adhere to a philosophy that finds power in self-mortification; among the deities of the Inner Sea region, Zon-Kuthon's devoted are the most associated with this practice, but other lawful faiths, such as those dedicated to the empyreal lords <Link to="/faith/neshen">Neshen</Link> and <Link to="/faith/vildeis">Vildeis</Link>, the infernal duke <Link to="/faith/zaebos">Zaebos</Link>, or the whore queen <Link to="/faith/doloras">Doloras</Link>, count mortifications among their approved methods of self-enlightenment. While mortal followers of the mysterious <Link to="/family/kyton">kyton</Link> demagogues are rare in the Inner Sea region, the kytons also encourage their monk worshipers to invest deeply in mortifications.</Pair>
<Pair title="At 4th Level">A scarred monk chooses her first mortification, selecting one from the list of potential mortifications detailed below. When a scarred monk gains her first mortification, she gains a number of ki points equal to 1/2 her monk level + her Wisdom modifier. These ki points can only be spent to activate powers granted from mortifications or to make <em>ki strikes.</em></Pair>
<Pair title="At 7th Level">She selects her 2nd mortification.</Pair>
<Pair title="At 10th Level">She selects her 3rd mortification.</Pair>
<Pair title="At 13th Level">She selects her 4th mortification.</Pair>
<Pair title="At 16th Level">She selects her 5th mortification.</Pair>
<Pair title="At 19th Level">She selects her 6th mortification.</Pair>
<Pair title="Special">Once a scarred monk selects a mortification, she cannot change it. Some mortifications have prerequisites, such as already knowing certain mortifications or attaining a specific level (as noted in their descriptions). Unless otherwise stated, a scarred monk cannot select an individual mortification more than once.</Pair>
</Ability>
<Ability id="arc-monk-scarred_monk-armor-of-scars-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-scarred_monk-armor-of-scars-su">Armor of Scars (Su)</Pair>
<Pair title="Ability">A scarred monk can force ki into her extensive scars, hardening them like armor. Provided she has at least 1 ki point in her pool, she gains a +1 bonus to her natural armor. A scarred monk can take this mortification multiple times; its effects stack.</Pair>
</Ability>
<Ability id="arc-monk-scarred_monk-blood-eagle-su" extraClasses="subAbility" icon={["mailed-fist","upgrade"]}>
<Pair single id="arc-monk-scarred_monk-blood-eagle-su">Blood Eagle (Su)</Pair>
<Pair title="Info">The monk's rib bones are unusually prominent and press hideously against the flesh of her chest.</Pair>
<Pair title="Swift Action">She can spend 1 ki point to cause her ribs to break through her flesh, lacerating and tearing any opponent that has engaged her in a grapple attack or that has <Link to="/umr/swallow_whole">swallowed her whole</Link>. This does not cause the monk any damage; a few seconds after she extrudes them, the ribs retract into her body, leaving behind angry red welts. The ribs deal an amount of slashing damage equal to her base unarmed strike damage to any creature that is currently grappling her or has swallowed her whole. If the monk attempts to escape from that grapple in the same round, she adds the amount of damage her ribs inflicted to her Escape Artist or CMB check as a circumstance bonus.</Pair>
</Ability>
<Ability id="arc-monk-scarred_monk-contortionist-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-monk-scarred_monk-contortionist-su">Contortionist (Su)</Pair>
<Pair title="Info">Over the years, the scarred monk has broken many of her bones and reset them at odd and repulsive angles to allow her to contort into entirely unnatural forms.</Pair>
<Pair title="Free Action">The monk can spend 1 ki point to gain a +20 circumstance bonus on any Escape Artist check.</Pair>
</Ability>
<Ability id="arc-monk-scarred_monk-eyes-stitched-shut-su" extraClasses="subAbility" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-monk-scarred_monk-eyes-stitched-shut-su">Eyes Stitched Shut (Su)</Pair>
<Pair title="Ability">The scarred monk can stitch her eyes shut. This takes 1 minute to accomplish, after which the monk is effectively <Link to="/misc/blind">blind</Link>. However, as long as the monk retains at least 1 point in her <em>ki pool,</em> she gains <Link to="/umr/blindsense">blindsense</Link> to a distance of 60 feet. She can detect living creatures with at least 1 point of damage within 30 feet of her as if via <Link to="/umr/blindsight">blindsight</Link>.</Pair>
<Pair title="Full-Round Action">The monk can remove the stitches to restore her normal sight and end this effect.</Pair>
</Ability>
<Ability id="arc-monk-scarred_monk-face-collector-su" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-monk-scarred_monk-face-collector-su">Face Collector (Su)</Pair>
<Pair title="Info">This mortification requires a monk to surgically remove the flesh from her face, surrendering her appearance and all associated identity. The flesh of her face heals into a featureless mass of scars at the end of this surgical ritual.</Pair>
<Pair title="Standard Action">At the cost of 1 ki point, the scarred monk can alter her facial features to duplicate those of a dead body she touches. The body must be of the same creature type as the scarred monk, and as her face changes, the corpse's face withers away into rot and decay. This grants the scarred monk a +8 circumstance bonus on Disguise checks to appear as that individual (although the penalties for gender, race, age, and size still apply). As a side effect to this unnatural shifting of appearance, a scarred monk gains a +2 bonus on all saving throws against scrying effects. For 24 hours after claiming a new face, this bonus increases to +4.</Pair>
</Ability>
<Ability id="arc-monk-scarred_monk-doll-face-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-monk-scarred_monk-doll-face-su">Doll Face (Su)</Pair>
<Pair title="Prerequisites"><em>Face collector</em> mortification</Pair>
<Pair title="Ability">When acquiring a new face with the <em>face collector</em> mortification, the scarred monk can spend an additional 2 ki points to perform an eerie blood ritual that gives the stolen flesh the appearance of aged ceramic. When the face is stitched to her flesh, the monk gains the appearance of an aged porcelain doll, complete with cracked and peeling paint and a glassy, unblinking stare. A scarred monk with a <em>doll face</em> does not gain the bonus on Disguise checks but does gain a +4 bonus on Intimidate checks.</Pair>
<Pair title="Ability">Once per hour, the scarred monk can cause the <em>doll face</em> to shift and appear as the face of a lost loved one or friend of a single viewer within 30 feet - that targeted individual must succeed at a Will save (DC = 10 + 1/2 the scarred monk's monk level + the scarred monk's Charisma modifier) or become <Link to="/misc/nauseated">nauseated</Link> with fear for a number of rounds equal to the number of mortifications the scarred monk has. This is a mind-affecting fear effect.</Pair>
<Pair title="Special">Unlike a face of flesh, a <em>doll face</em> ages and cracks, falling off and restoring the scarred monk's true and deformed face after 24 hours.</Pair>
</Ability>
<Ability id="arc-monk-scarred_monk-pain-binding-su" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-monk-scarred_monk-pain-binding-su">Pain Binding (Su)</Pair>
<Pair title="Standard Action">By spending 1 ki point when she makes a single unarmed strike against a living creature, the scarred monk can link her own pain to the creature struck. For a number of rounds equal to the total number of mortifications the scarred monk has, any time the scarred monk takes lethal damage, the creature she has bound her pain to must succeed at a Will save (DC = 10 + 1/2 the monk's level + the monk's Charisma modifier) or take an equal amount of nonlethal damage.</Pair>
<Pair title="Special">The effects of pain binding end immediately once the pain-bound creature falls unconscious.</Pair>
</Ability>
<Ability id="arc-monk-scarred_monk-rings-of-pain-su" extraClasses="subAbility" icon={["aura"]}>
<Pair single id="arc-monk-scarred_monk-rings-of-pain-su">Rings of Pain (Su)</Pair>
<Pair title="Prerequisites">10th-level monk</Pair>
<Pair title="Info">The scarred monk has pierced her flesh with numerous large metal rings.</Pair>
<Pair title="Standard Action">At the cost of 2 ki points, she can tear one of these piercings free from her flesh to flood her body with searing pain. As she does so, she exudes waves of agony in a 30-foot radius to deal damage equal to twice the monk's unarmed strike modified by twice her Wisdom modifier to all creatures in the area of effect.</Pair>
<Pair title="Special">A successful Will save (DC = 10 + 1/2 the monk's level + her Wisdom modifier) halves the damage, but on a failed Will save, a creature is <Link to="/misc/sickened">sickened</Link> by the pain for 1 round.</Pair>
</Ability>
<Ability id="arc-monk-scarred_monk-share-pain-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-scarred_monk-share-pain-su">Share Pain (Su)</Pair>
<Pair title="Immediate Action">Whenever the monk takes damage from a weapon, she can spend 1 ki point to cause the body of her attacker to suffer the pain of that blow. The attacking creature must succeed at a Fortitude saving throw (DC = 10 + 1/2 the monk's level + the monk's Wisdom modifier) or take damage equal to the amount the weapon blow inflicted on the monk and become <Link to="/misc/staggered">staggered</Link> from the pain for 1 round as well.</Pair>
<Pair title="Special">A successful saving throw halves the damage the attacker suffers from shared pain and negates the staggered effect.</Pair>
</Ability>
<Ability id="arc-monk-scarred_monk-torturous-vision-su" extraClasses="subAbility" icon={["smoking-finger"]}>
<Pair single id="arc-monk-scarred_monk-torturous-vision-su">Torturous Vision (Su)</Pair>
<Pair title="Prerequisites"><em>Share pain</em> mortification, 13th-level monk</Pair>
<Pair title="Move-Equivalent Action">The scarred monk can spend 1 ki point to cause a creature that recently wounded her to suffer - in one sudden blast of agony - the pain of all the wounds the scarred monk has endured. The monk can target any living creature within 60 feet who has been affected by <em>share pain</em> in the last 24 hours. The creature becomes <Link to="/misc/stunned">stunned</Link> with pain for 1 round and then staggered for 1d3 rounds unless it succeeds at a Will save (DC = 10 + 1/2 the monk's level + the monk's Wisdom modifier).</Pair>
</Ability>
<Ability id="arc-monk-scarred_monk-third-eye-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-monk-scarred_monk-third-eye-su">Third Eye (Su)</Pair>
<Pair title="Prerequisites">13th-level monk</Pair>
<Pair title="Info">The scarred monk bores a hole in her brow and then implants a mummified or alchemically preserved third eye in this opening. The third eye must come from a creature of the same size and creature type as the scarred monk.</Pair>
<Pair title="Ability">The scarred monk can spend 1 ki point to gain <Link to="/spell/true_seeing">true seeing</Link>, as per the spell, for 1 round.</Pair>
</Ability>
<Ability id="arc-monk-scarred_monk-tongueless-master-su" extraClasses="subAbility" icon={["broken-shield","armor-downgrade"]}>
<Pair single id="arc-monk-scarred_monk-tongueless-master-su">Tongueless Master (Su)</Pair>
<Pair title="Info">The monk assumes a vow of silence and slices out her own tongue. Thereafter, she wears the preserved appendage on a cord about her neck. She can no longer speak or cast spells with verbal components.</Pair>
<Pair title="Ability">Whenever she hits a creature with an unarmed strike, she can spend 1 point from her <em>ki pool</em> to steal the voice from her target. The target can resist this effect with a successful Will save (DC = 10 + 1/2 the scarred monk's level + her Wisdom modifier), otherwise the victim loses the ability to speak or cast spells with verbal components for a number of minutes equal to the total number of mortifications known by the scarred monk. During this time, the scarred monk can speak in the victim's voice.</Pair>
</Ability>
</>};
const _sensei = {title: "Sensei", jsx: <><h2 id="arc-monk-sensei-sensei">Sensei</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 60</Link><br/>The sensei is a revered teacher who imparts lessons on the oneness of mind, body, and spirit, along with occasional correction that is subtle and swift. Rather than using wisdom for his own benefit alone, he uses it to better those around him.</p>
<Ability icon={["skills"]} id="arc-monk-sensei-undefined">
<Pair id="arc-monk-sensei-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/linguistics">Linguistics</Link> (INT), <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> (INT), <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/knowledge_history">Knowledge (history)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT), <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT), <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> (INT)</Pair></Ability>
<Ability id="arc-monk-sensei-advice-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-monk-sensei-advice-ex">Advice (Ex)</Pair>
<Pair hl title="Replaces">Flurry of blows, fast movement, improved evasion</Pair>
<Pair title="Ability">A sensei's <em>advice</em> is identical to <Link to="/ability/bardic_performance">bardic performance</Link> (using oratory).</Pair>
<Pair title="At 1st Level">He can <Link to="/performance/inspire_courage">inspire courage</Link>.</Pair>
<Pair title="At 3rd Level">He can <Link to="/performance/inspire_competence">inspire competence</Link>.</Pair>
<Pair title="At 9th Level">He can <Link to="/performance/inspire_greatness">inspire greatness</Link>.</Pair>
<Pair title="Special">These abilities are equal to a bard of the sensei's level, and are usable a total number of rounds per day equal to his level + his Wisdom modifier (minimum 1).</Pair>
</Ability>
<Ability id="arc-monk-sensei-insightful-strike-ex" icon={["upgrade"]}>
<Pair single id="arc-monk-sensei-insightful-strike-ex">Insightful Strike (Ex)</Pair>
<Pair hl title="Replaces">Evasion, bonus feat gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A sensei may use his Wisdom bonus in lieu of his Strength or Dexterity on attack rolls and combat maneuver checks with unarmed strikes or monk weapons.</Pair>
</Ability>
<Ability id="arc-monk-sensei-mystic-wisdom-su" icon={["upgrade","aura"]}>
<Pair single id="arc-monk-sensei-mystic-wisdom-su">Mystic Wisdom (Su)</Pair>
<Pair hl title="Replaces">Bonus feats gained at 6th, 10th, and 14th level</Pair>
<Pair title="At 6th Level">A sensei may use his <em>advice</em> ability when spending points from his <em>ki pool</em> to activate a class ability (using the normal actions required for each) in order to have that ability affect one ally within 30 feet rather than the sensei himself.</Pair>
<Pair title="At 10th Level">A sensei may affect all allies within 30 feet rather than himself (spending points from his <em>ki pool</em> only once, not once for each target). Or, a sensei may instead spend 1 point from his <em>ki pool</em> (as a <strong className="hl">swift action</strong>) while using <em>advice</em> to provide a single ally within 30 feet with <em>evasion, fast movement, high jump, purity of body,</em> or <em>slow fall.</em></Pair>
<Pair title="At 14th Level">A sensei may spend 2 points to grant one of the abilities listed above to all allies within 30 feet, or <em>diamond body, diamond soul,</em> or <em>improved evasion</em> to a single ally within 30 feet.</Pair>
<Pair title="Special">These abilities function at the sensei's level and last 1 round.</Pair>
</Ability>
</>};
const _serpent_fire_adept = {title: "Serpent-Fire Adept", jsx: <><h2 id="arc-monk-serpent_fire_adept-serpent-fire-adept">Serpent-Fire Adept</h2>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 20</Link><br/>A serpent-fire adept embraces the secrets of her chakras and mastery of their energetic flow.</p>
<Ability icon={["skills"]} id="arc-monk-serpent_fire_adept-undefined">
<Pair id="arc-monk-serpent_fire_adept-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/appraise">Appraise</Link> (INT), <Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/fly">Fly</Link> (DEX), <Link to="/skill/heal">Heal</Link> (WIS), <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/linguistics">Linguistics</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS)</Pair>
<Pair title="Removed Skills">Climb, Intimidate, Knowledge (history), Perform, Ride, Swim</Pair></Ability>
<Ability id="arc-monk-serpent_fire_adept-chakra-training" icon={["stairs-goal"]}>
<Pair single id="arc-monk-serpent_fire_adept-chakra-training">Chakra Training</Pair>
<Pair hl title="Replaces">Stunning fist, bonus feat gained at 1st level</Pair>
<Pair title="Ability">A serpent-fire adept gains <Link to="/feat/chakra_initiate">Chakra Initiate</Link> and <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> as bonus feats. She need not meet these feats' prerequisites, and can use her serpent-fire ki from Chakra Initiate to open and maintain her root chakra, despite not being 2nd level.</Pair>
</Ability>
<Ability id="arc-monk-serpent_fire_adept-chakra-expertise-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-serpent_fire_adept-chakra-expertise-ex">Chakra Expertise (Ex)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 2nd level</Pair>
<Pair title="At 2nd Level">The serpent-fire adept gains a bonus equal to 1/2 her monk level on Fortitude and Will saves attempted to maintain awakened chakras.</Pair>
<Pair title="At 8th Level">When she has opened one or more chakras, she can maintain those chakras (without opening any new chakras) for 1 round without taking a swift action, expending ki, or attempting Fortitude or Will saves to maintain the chakras.</Pair>
<Pair title="At 16th Level">This increases to 2 rounds.</Pair>
<Pair title="Special">After maintaining her chakras with <em>chakra expertise,</em> the monk must open a new chakra or maintain her open chakras normally before she can use <em>chakra expertise</em> again.</Pair>
</Ability>
<Ability id="arc-monk-serpent_fire_adept-light-spirit-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-monk-serpent_fire_adept-light-spirit-su">Light Spirit (Su)</Pair>
<Pair hl title="Replaces">Slow fall, high jump</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">When the serpent-fire adept has her sacral chakra open and chooses to benefit from its power, her fly speed is equal to either her base land speed or her bonus to her base speed from the monk <em>fast movement</em> class ability (whichever is higher). She maintains this fly speed for a number of rounds equal to her Wisdom bonus (minimum 1 round), even if she closes her chakras.</Pair>
</Ability>
<Ability id="arc-monk-serpent_fire_adept-chakra-adept-ex" icon={["stairs-goal"]}>
<Pair single id="arc-monk-serpent_fire_adept-chakra-adept-ex">Chakra Adept (Ex)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">The serpent-fire adept gains <Link to="/feat/chakra_adept">Chakra Adept</Link> as a bonus feat. She need not meet the feat's prerequisites.</Pair>
<Pair title="Special">When the serpent-fire adept has used all her rounds of <em>chakra expertise</em> to maintain open chakras, if she does not spend additional ki to maintain her open chakras on the next round, her highest chakra closes and she can spend a <strong className="hl">swift action</strong> to use any one of the abilities of her remaining open chakras. On the round after that, all her chakras close, and if she wishes to reopen them, she must start again with her root chakra.</Pair>
</Ability>
<Ability id="arc-monk-serpent_fire_adept-linked-chakras-ex" icon={["stairs-goal"]}>
<Pair single id="arc-monk-serpent_fire_adept-linked-chakras-ex">Linked Chakras (Ex)</Pair>
<Pair hl title="Replaces">Wholeness of body</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Standard Action">Once per day, the serpent-fire adept can open multiple chakras at once. The round that she does this, she is required to make saving throws only to resist being overwhelmed by the highest chakra she opens, though the save DCs are increased by 5.</Pair>
<Pair title="At 12th Level">She can now do this 2 times a day.</Pair>
<Pair title="At 17th Level">She can now do this 3 times a day.</Pair>
</Ability>
<Ability id="arc-monk-serpent_fire_adept-chakra-mastery-ex" icon={["stairs-goal"]}>
<Pair single id="arc-monk-serpent_fire_adept-chakra-mastery-ex">Chakra Mastery (Ex)</Pair>
<Pair hl title="Replaces">Bonus feats gained at 10th, 14th, and 18th level</Pair>
<Pair title="At 10th Level">The serpent-fire adept gains <Link to="/feat/chakra_master">Chakra Master</Link> as a bonus feat. She need not meet the feat's prerequisites. When maintaining her open chakras with <em>chakra expertise,</em> she can spend 1 point of ki to gain the benefits of two chakras rather than one in that round (or three chakras, if she has opened her crown chakra).</Pair>
<Pair title="At 14th Level">The serpent-fire adept's pool of serpent-fire ki increases to 7 points.</Pair>
<Pair title="At 18th Level">It increases to 9 points.</Pair>
</Ability>
</>};
const _serpent_fire_adept_uc = {title: "Serpent-Fire Adept (Unchained)", topLink: ["Unchained Monk","class/unchained_monk"], jsx: <><h2 id="arc-monk-serpent_fire_adept_uc-serpent-fire-adept">Serpent-Fire Adept</h2>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 20</Link><br/>A serpent-fire adept embraces the secrets of her chakras and mastery of their energetic flow.</p>
<Ability icon={["skills"]} id="arc-monk-serpent_fire_adept_uc-undefined">
<Pair id="arc-monk-serpent_fire_adept_uc-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/appraise">Appraise</Link> (INT), <Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/fly">Fly</Link> (DEX), <Link to="/skill/heal">Heal</Link> (WIS), <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/linguistics">Linguistics</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS)</Pair>
<Pair title="Removed Skills">Climb, Intimidate, Knowledge (history), Perform, Ride, Swim</Pair></Ability>
<Ability id="arc-monk-serpent_fire_adept_uc-chakra-training" icon={["stairs-goal"]}>
<Pair single id="arc-monk-serpent_fire_adept_uc-chakra-training">Chakra Training</Pair>
<Pair hl title="Replaces">Stunning fist, bonus feat gained at 1st level</Pair>
<Pair title="Ability">A serpent-fire adept gains <Link to="/feat/chakra_initiate">Chakra Initiate</Link> and <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> as bonus feats. She need not meet these feats' prerequisites, and can use her serpent-fire ki from Chakra Initiate to open and maintain her root chakra, despite not being 2nd level.</Pair>
</Ability>
<Ability id="arc-monk-serpent_fire_adept_uc-chakra-expertise-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-serpent_fire_adept_uc-chakra-expertise-ex">Chakra Expertise (Ex)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 2nd level</Pair>
<Pair title="At 2nd Level">The serpent-fire adept gains a bonus equal to 1/2 her monk level on Fortitude and Will saves attempted to maintain awakened chakras.</Pair>
<Pair title="At 8th Level">When she has opened one or more chakras, she can maintain those chakras (without opening any new chakras) for 1 round without taking a swift action, expending ki, or attempting Fortitude or Will saves to maintain the chakras.</Pair>
<Pair title="At 16th Level">This increases to 2 rounds.</Pair>
<Pair title="Special">After maintaining her chakras with <em>chakra expertise,</em> the monk must open a new chakra or maintain her open chakras normally before she can use <em>chakra expertise</em> again.</Pair>
</Ability>
<Ability id="arc-monk-serpent_fire_adept_uc-light-spirit-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-monk-serpent_fire_adept_uc-light-spirit-su">Light Spirit (Su)</Pair>
<Pair hl title="Replaces">4th-level ki power</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">When the serpent-fire adept has her sacral chakra open and chooses to benefit from its power, her fly speed is equal to either her base land speed or her bonus to her base speed from the monk <em>fast movement</em> class ability (whichever is higher). She maintains this fly speed for a number of rounds equal to her Wisdom bonus (minimum 1 round), even if she closes her chakras.</Pair>
</Ability>
<Ability id="arc-monk-serpent_fire_adept_uc-chakra-adept-ex" icon={["stairs-goal"]}>
<Pair single id="arc-monk-serpent_fire_adept_uc-chakra-adept-ex">Chakra Adept (Ex)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">The serpent-fire adept gains <Link to="/feat/chakra_adept">Chakra Adept</Link> as a bonus feat. She need not meet the feat's prerequisites.</Pair>
<Pair title="Special">When the serpent-fire adept has used all her rounds of <em>chakra expertise</em> to maintain open chakras, if she does not spend additional ki to maintain her open chakras on the next round, her highest chakra closes and she can spend a <strong className="hl">swift action</strong> to use any one of the abilities of her remaining open chakras. On the round after that, all her chakras close, and if she wishes to reopen them, she must start again with her root chakra.</Pair>
</Ability>
<Ability id="arc-monk-serpent_fire_adept_uc-linked-chakras-ex" icon={["stairs-goal"]}>
<Pair single id="arc-monk-serpent_fire_adept_uc-linked-chakras-ex">Linked Chakras (Ex)</Pair>
<Pair hl title="Replaces">8th-level ki power</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Standard Action">Once per day, the serpent-fire adept can open multiple chakras at once. The round that she does this, she is required to make saving throws only to resist being overwhelmed by the highest chakra she opens, though the save DCs are increased by 5.</Pair>
<Pair title="At 12th Level">She can now do this 2 times a day.</Pair>
<Pair title="At 17th Level">She can now do this 3 times a day.</Pair>
</Ability>
<Ability id="arc-monk-serpent_fire_adept_uc-chakra-mastery-ex" icon={["stairs-goal"]}>
<Pair single id="arc-monk-serpent_fire_adept_uc-chakra-mastery-ex">Chakra Mastery (Ex)</Pair>
<Pair hl title="Replaces">Bonus feats gained at 10th, 14th, and 18th level</Pair>
<Pair title="At 10th Level">The serpent-fire adept gains <Link to="/feat/chakra_master">Chakra Master</Link> as a bonus feat. She need not meet the feat's prerequisites. When maintaining her open chakras with <em>chakra expertise,</em> she can spend 1 point of ki to gain the benefits of two chakras rather than one in that round (or three chakras, if she has opened her crown chakra).</Pair>
<Pair title="At 14th Level">The serpent-fire adept's pool of serpent-fire ki increases to 7 points.</Pair>
<Pair title="At 18th Level">It increases to 9 points.</Pair>
</Ability>
</>};
const _sin_monk = {title: "Sin Monk", jsx: <><h2 id="arc-monk-sin_monk-sin-monk">Sin Monk</h2>
<p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook pg. 14</Link><br/>Some vices prove too tempting even to those who have trained their minds and bodies against such corruptions, and the seven sins of ancient Thassilon stand among the most alluring. Martial experts who have allowed such passions to lead them astray may find themselves gaining powers drawn from their newly embraced sins.</p>
<p><strong className="hl">This is an ex-class archetype and can be taken by a character immediately upon becoming an ex-monk.</strong></p>
<blockquote>
<p>The following archetype can be taken by an ex-monk immediately upon becoming an ex-monk, regardless of character level, replacing some or all of the lost class abilities. If another archetype the character had before she became an ex-monk replaces the same ability as the ex-class archetype, she loses the old archetype in favor of the new one; otherwise, she can retain both archetypes as normal. Sin monks can gain further levels in the monk class, even though becoming an ex-monk normally prohibits further advancement in the class. While an ex-member of a class can recant her failings and atone for her fall from her original class (typically involving an <Link to="/spell/atonement">atonement</Link> spell), her acceptance of her ex-class archetype means she must atone both for her initial fall and for further straying from the path. As a result, such a character must be the target of two atonement spells or a similar effect to regain her lost class features. Upon doing so, she immediately loses this archetype and regains her original class (and archetype, if she had one).</p>
</blockquote>
<Ability id="arc-monk-sin_monk-well-of-sin-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-monk-sin_monk-well-of-sin-su">Well of Sin (Su)</Pair>
<Pair hl title="Replaces">Ki pool, alters high jump</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A sin monk gains a pool of sin points, representing energy he has gained from indulging in forbidden vices. The sin monk has a number of sin points equal to half his class level + his Wisdom modifier; these points cannot be used on abilities that require spending ki points.</Pair>
<Pair title="Swift Action">He can spend 1 point from his sin pool to activate one of the following abilities until the start of his next turn.</Pair>
<Pair title="Special">When a sin monk gains a level in the monk class and would gain one of the following class features, he can forfeit that class feature to instead increase the size of his sin pool by 1 sin point: <em>purity of body, diamond body, diamond soul, timeless body, tongue of the sun and moon.</em> Once the decision is made, it cannot be changed.</Pair>
</Ability>
<Ability id="arc-monk-sin_monk-envy" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-monk-sin_monk-envy">Envy</Pair>
<Pair title="Passive Ability">The sin monk gains a +4 bonus on Perception and Sense Motive checks.</Pair>
<Pair title="At 10th Level">This bonus increases to +6.</Pair>
<Pair title="At 16th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-monk-sin_monk-gluttony" extraClasses="subAbility" icon={["remedy"]}>
<Pair single id="arc-monk-sin_monk-gluttony">Gluttony</Pair>
<Pair title="Ability">Each time the sin monk deals lethal damage with a melee attack, he regains a number of hit points equal to the amount of damage dealt (maximum 2). He can't exceed his maximum number of hit points.</Pair>
<Pair title="At 10th Level">The maximum number of hit points he regains increases to 4.</Pair>
<Pair title="At 16th Level">It increases to 6.</Pair>
</Ability>
<Ability id="arc-monk-sin_monk-greed" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-monk-sin_monk-greed">Greed</Pair>
<Pair title="Passive Ability">The sin monk's attacks count as being either cold iron or silver (sin monk's choice) for the purpose of overcoming DR.</Pair>
<Pair title="At 10th Level">He adamantine to the list of materials he can choose to have his attacks count as being for the purpose of overcoming DR.</Pair>
<Pair title="At 16th Level">The sin monk's attacks also ignore hardness.</Pair>
</Ability>
<Ability id="arc-monk-sin_monk-lust" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-monk-sin_monk-lust">Lust</Pair>
<Pair title="Passive Ability">The sin monk gains a +4 bonus on Bluff and Diplomacy checks.</Pair>
<Pair title="At 10th Level">This bonus increases to +6.</Pair>
<Pair title="At 16th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-monk-sin_monk-pride" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-sin_monk-pride">Pride</Pair>
<Pair title="Ability">The sin monk gains one illusory double of himself, which functions as mirror image. This double automatically disappears at the beginning of the sin monk's next turn unless destroyed first.</Pair>
<Pair title="At 10th Level">The sin monk gains two such replicas of himself.</Pair>
<Pair title="At 16th Level">He gains three.</Pair>
</Ability>
<Ability id="arc-monk-sin_monk-sloth" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-monk-sin_monk-sloth">Sloth</Pair>
<Pair title="Ability">The sin monk gains the benefits of <Link to="/feat/vital_strike">Vital Strike</Link>.</Pair>
<Pair title="At 10th Level">He also gains the benefits of <Link to="/feat/improved_vital_strike">Improved Vital Strike</Link>.</Pair>
<Pair title="At 16th Level">He also gains the benefits of <Link to="/feat/greater_vital_strike">Greater Vital Strike</Link>.</Pair>
</Ability>
<Ability id="arc-monk-sin_monk-wrath" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-monk-sin_monk-wrath">Wrath</Pair>
<Pair title="Ability">The sin monk increases the save DCs of his attacks with <Link to="/feat/stunning_fist">Stunning Fist</Link> (and <Link to="/feat/punishing_kick">Punishing Kick</Link>, if he has that feat) by 1.</Pair>
<Pair title="At 10th Level">The save DC instead increases by 2.</Pair>
<Pair title="At 16th Level">It now increases by 3.</Pair>
</Ability>
<Ability id="arc-monk-sin_monk-sinful-strike-su" icon={["upgrade"]}>
<Pair single id="arc-monk-sin_monk-sinful-strike-su">Sinful Strike (Su)</Pair>
<Pair hl title="Replaces">Wholeness of body</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Swift Action">A sin monk can spend 2 sin pointsto focus his power. The next time he deals damage before the end of his next turn, he deals an additional amount damage equal to his monk level.</Pair>
</Ability>
<Ability id="arc-monk-sin_monk-burden-with-sin-su" icon={["armor-downgrade"]}>
<Pair single id="arc-monk-sin_monk-burden-with-sin-su">Burden with Sin (Su)</Pair>
<Pair hl title="Replaces">Abundant step</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Swift Action">A sin monk can spend one daily use of Stunning Fist to draw his sinful nature to the fore of his consciousness. The next person he hits with a melee attack before the end of his next turn must succeed at a Will save (DC = 10 + half the sin monk's class level + his Wisdom modifier) or suffer the burden of the sin monk's sins. The target is treated as if she were <Link to="/rule/carrying_a_load">carrying a load</Link> one step heavier (from a light load to a medium load, and so on) and must succeed at a caster level check to use any form of teleportation (DC = 10 + the monk's class level).</Pair>
<Pair title="Special">This is a curse effect that lasts a number of rounds equal to the sin monk's Wisdom modifier unless it is removed through <Link to="/spell/remove_curse">remove curse</Link> or a similar effect.</Pair>
</Ability>
<Ability id="arc-monk-sin_monk-simultaneous-sins-su" icon={["stairs-goal"]}>
<Pair single id="arc-monk-sin_monk-simultaneous-sins-su">Simultaneous Sins (Su)</Pair>
<Pair hl title="Replaces">Empty body</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Swift Action">A sin monk can spend 3 points from his sin pool to gain the benefits of two different sins simultaneously.</Pair>
</Ability>
<Ability id="arc-monk-sin_monk-spawn-of-sin-ex" icon={["magic-swirl","armor-upgrade"]}>
<Pair single id="arc-monk-sin_monk-spawn-of-sin-ex">Spawn of Sin (Ex)</Pair>
<Pair hl title="Replaces">Perfect self</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">The sin monk becomes the physical manifestation of his sins. He is forevermore treated as an <Link to="/type/aberration">aberration</Link> rather than a humanoid (or whatever the monk's creature type was) for the purpose of spells and magical effects, and his mind is so consumed by sin that he gains immunity to mind-affecting effects. He does not change in appearance or gain other abilities; however, should the sin monk be slain and brought back from the dead, he returns to life as a <Link to="/monster/sinspawn">sinspawn</Link>, retaining his class levels but otherwise replacing his creature type and racial abilities with those of his new form and becoming an NPC under the GM's control.</Pair>
</Ability>
</>};
const _softstrike_monk = {title: "Softstrike Monk", jsx: <><h2 id="arc-monk-softstrike_monk-softstrike-monk">Softstrike Monk</h2>
<p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 6</Link><br/>The practices of softstrike monks date back to the peaceful eras of Imperial Lung Wa. Still common among warriors today, softstrike monks employ a nonlethal but effective form of combat.</p>
<Ability id="arc-monk-softstrike_monk-weapon-proficiency" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-monk-softstrike_monk-weapon-proficiency">Weapon Proficiency</Pair>
<Pair hl title="Replaces">Weapon proficiency</Pair>
<Pair title="Info">A softstrike monk is proficient with the <Link to="/eq-weapon/aklys">aklys</Link>, <Link to="/eq-weapon/bolas">bolas</Link>, <Link to="/eq-weapon/club">club</Link>, <Link to="/eq-weapon/light_flail">light flail</Link>, <Link to="/eq-weapon/light_mace">light mace</Link>, <Link to="/eq-weapon/nunchaku">nunchaku</Link>, <Link to="/eq-weapon/quarterstaff">quarterstaff</Link>, <Link to="/eq-weapon/sap">sap</Link>, <Link to="/eq-weapon/sling">sling</Link>, and any weapon with the monk special quality that can deal bludgeoning damage. He is considered proficient only with monk weapons that can deal multiple types of damage when dealing bludgeoning damage.</Pair>
</Ability>
<Ability id="arc-monk-softstrike_monk-feather-touch-ex" icon={["upgrade"]}>
<Pair single id="arc-monk-softstrike_monk-feather-touch-ex">Feather Touch (Ex)</Pair>
<Pair title="Passive Ability">A softstrike monk does not take the normal -4 penalty on attack rolls for using a lethal weapon to deal nonlethal damage. In addition, he can use his <em>stunning fist</em> ability while making a nonlethal attack with a weapon.</Pair>
</Ability>
<Ability id="arc-monk-softstrike_monk-nonlethal-strikes-ex" icon={["mailed-fist","broken-shield"]}>
<Pair single id="arc-monk-softstrike_monk-nonlethal-strikes-ex" flavor="A softstrike monk focuses on blows that do not inflict deadly harm.">Nonlethal Strikes (Ex)</Pair>
<Pair hl title="Alters">Unarmed strike</Pair>
<Pair title="Ability">When a softstrike monk deals nonlethal damage with his unarmed strikes, his monk level is treated as 4 levels higher for the purposes of determining the damage he deals (to a maximum of 4d8 at 20th level for a Medium monk).</Pair>
<Pair title="Special">When dealing lethal damage with his unarmed strikes, his monk level is treated as if it were 4 levels lower (minimum 1st level) for the purpose of determining damage.</Pair>
</Ability>
<Ability id="arc-monk-softstrike_monk-tenet-of-life-su" icon={["broken-shield"]}>
<Pair single id="arc-monk-softstrike_monk-tenet-of-life-su">Tenet of Life (Su)</Pair>
<Pair title="Passive Ability">Though a softstrike monk accepts that death may happen in combat, he cannot abide killing in cold blood. If he slays an <Link to="/misc/unconscious">unconscious</Link> or <Link to="/misc/helpless">helpless</Link> living foe, or merely stands by and allows such a killing to occur, he becomes <Link to="/misc/shaken">shaken</Link> for 1 hour. In addition, the act disrupts the softstrike monk's ki; if he has a <em>ki pool,</em> he loses a number of ki points equal to half his level, as if they had been spent.</Pair>
</Ability>
<Ability id="arc-monk-softstrike_monk-life-giving-blows-su" icon={["mailed-fist","armor-downgrade"]}>
<Pair single id="arc-monk-softstrike_monk-life-giving-blows-su" flavor="A softstrike monk can force a piece of his life force into a nonliving creature to disrupt its animating essence.">Life-Giving Blows (Su)</Pair>
<Pair hl title="Replaces">Bonus feats gained at 6th and 10th levels</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Free Action">If he hits an undead foe with an unarmed attack, he can spend 1 ki point to remove the target's immunity to nonlethal damage for a number of minutes equal to his Wisdom modifier. If, during this time, the target's nonlethal damage exceeds its current hit points, it is destroyed.</Pair>
<Pair title="At 10th Level">A softstrike monk can also use this ability against constructs.</Pair>
</Ability>
<Ability id="arc-monk-softstrike_monk-wholeness-of-body-and-spirit-su" icon={["broken-shield","remedy","armor-upgrade"]}>
<Pair single id="arc-monk-softstrike_monk-wholeness-of-body-and-spirit-su">Wholeness of Body and Spirit (Su)</Pair>
<Pair hl title="Alters">Wholeness of body</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A softstrike monk can use wholeness of body on both himself and other creatures, though it heals only nonlethal damage. If he uses this ability on an unconscious foe, he can spend 1 additional ki point to force the creature to accept a pact of life. The creature must succeed at a Will saving throw (DC = 10 + half the softstrike monk's level + his Wisdom modifier) or the pact renders it unable to directly attack the monk and any allies within 60 feet, as per <Link to="/spell/sanctuary">sanctuary</Link>, for a number of days equal to the softstrike monk's level.</Pair>
</Ability>
<Ability id="arc-monk-softstrike_monk-incapacitating-palm-su" icon={["broken-shield"]}>
<Pair single id="arc-monk-softstrike_monk-incapacitating-palm-su">Incapacitating Palm (Su)</Pair>
<Pair hl title="Alters">Quivering palm</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">A softstrike monk renders the target of his <em>quivering palm</em> unconscious instead of killing the creature. Upon failing its Fortitude saving throw, the target is knocked unconscious for a number of minutes equal to the softstrike monk's level.</Pair>
</Ability>
<Ability id="arc-monk-softstrike_monk-resilient-body-su" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-softstrike_monk-resilient-body-su">Resilient Body (Su)</Pair>
<Pair hl title="Replaces">Empty body</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Passive Ability">A softstrike monk's mastery of nonlethal combat lets him apply his techniques to his defense. A softstrike monk converts any <Link to="/misc/precision_damage">precision damage</Link> he takes to nonlethal damage.</Pair>
</Ability>
</>};
const _softstrike_monk_uc = {title: "Softstrike Monk (Unchained)", topLink: ["Unchained Monk","class/unchained_monk"], jsx: <><h2 id="arc-monk-softstrike_monk_uc-softstrike-monk">Softstrike Monk</h2>
<p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 6</Link><br/>The practices of softstrike monks date back to the peaceful eras of Imperial Lung Wa. Still common among warriors today, softstrike monks employ a nonlethal but effective form of combat.</p>
<Ability id="arc-monk-softstrike_monk_uc-weapon-proficiency" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-monk-softstrike_monk_uc-weapon-proficiency">Weapon Proficiency</Pair>
<Pair hl title="Replaces">Weapon proficiency</Pair>
<Pair title="Info">A softstrike monk is proficient with the <Link to="/eq-weapon/aklys">aklys</Link>, <Link to="/eq-weapon/bolas">bolas</Link>, <Link to="/eq-weapon/club">club</Link>, <Link to="/eq-weapon/light_flail">light flail</Link>, <Link to="/eq-weapon/light_mace">light mace</Link>, <Link to="/eq-weapon/nunchaku">nunchaku</Link>, <Link to="/eq-weapon/quarterstaff">quarterstaff</Link>, <Link to="/eq-weapon/sap">sap</Link>, <Link to="/eq-weapon/sling">sling</Link>, and any weapon with the monk special quality that can deal bludgeoning damage. He is considered proficient only with monk weapons that can deal multiple types of damage when dealing bludgeoning damage.</Pair>
</Ability>
<Ability id="arc-monk-softstrike_monk_uc-feather-touch-ex" icon={["upgrade"]}>
<Pair single id="arc-monk-softstrike_monk_uc-feather-touch-ex">Feather Touch (Ex)</Pair>
<Pair title="Passive Ability">A softstrike monk does not take the normal -4 penalty on attack rolls for using a lethal weapon to deal nonlethal damage. In addition, he can use his <em>stunning fist</em> ability while making a nonlethal attack with a weapon.</Pair>
</Ability>
<Ability id="arc-monk-softstrike_monk_uc-nonlethal-strikes-ex" icon={["mailed-fist","broken-shield"]}>
<Pair single id="arc-monk-softstrike_monk_uc-nonlethal-strikes-ex" flavor="A softstrike monk focuses on blows that do not inflict deadly harm.">Nonlethal Strikes (Ex)</Pair>
<Pair hl title="Alters">Unarmed strike</Pair>
<Pair title="Ability">When a softstrike monk deals nonlethal damage with his unarmed strikes, his monk level is treated as 4 levels higher for the purposes of determining the damage he deals (to a maximum of 4d8 at 20th level for a Medium monk).</Pair>
<Pair title="Special">When dealing lethal damage with his unarmed strikes, his monk level is treated as if it were 4 levels lower (minimum 1st level) for the purpose of determining damage.</Pair>
</Ability>
<Ability id="arc-monk-softstrike_monk_uc-tenet-of-life-su" icon={["broken-shield"]}>
<Pair single id="arc-monk-softstrike_monk_uc-tenet-of-life-su">Tenet of Life (Su)</Pair>
<Pair title="Passive Ability">Though a softstrike monk accepts that death may happen in combat, he cannot abide killing in cold blood. If he slays an <Link to="/misc/unconscious">unconscious</Link> or <Link to="/misc/helpless">helpless</Link> living foe, or merely stands by and allows such a killing to occur, he becomes <Link to="/misc/shaken">shaken</Link> for 1 hour. In addition, the act disrupts the softstrike monk's ki; if he has a <em>ki pool,</em> he loses a number of ki points equal to half his level, as if they had been spent.</Pair>
</Ability>
<Ability id="arc-monk-softstrike_monk_uc-life-giving-blows-su" icon={["mailed-fist","armor-downgrade"]}>
<Pair single id="arc-monk-softstrike_monk_uc-life-giving-blows-su" flavor="A softstrike monk can force a piece of his life force into a nonliving creature to disrupt its animating essence.">Life-Giving Blows (Su)</Pair>
<Pair hl title="Replaces">Bonus feats gained at 6th and 10th levels</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Free Action">If he hits an undead foe with an unarmed attack, he can spend 1 ki point to remove the target's immunity to nonlethal damage for a number of minutes equal to his Wisdom modifier. If, during this time, the target's nonlethal damage exceeds its current hit points, it is destroyed.</Pair>
<Pair title="At 10th Level">A softstrike monk can also use this ability against constructs.</Pair>
</Ability>
<Ability id="arc-monk-softstrike_monk_uc-wholeness-of-body-and-spirit-su" icon={["broken-shield","remedy","armor-upgrade"]}>
<Pair single id="arc-monk-softstrike_monk_uc-wholeness-of-body-and-spirit-su">Wholeness of Body and Spirit (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A softstrike monk can use wholeness of body on both himself and other creatures, though it heals only nonlethal damage. If he uses this ability on an unconscious foe, he can spend 1 additional ki point to force the creature to accept a pact of life. The creature must succeed at a Will saving throw (DC = 10 + half the softstrike monk's level + his Wisdom modifier) or the pact renders it unable to directly attack the monk and any allies within 60 feet, as per <Link to="/spell/sanctuary">sanctuary</Link>, for a number of days equal to the softstrike monk's level.</Pair>
<Pair title="Special">This ability only applies if the monk selects the <em>wholeness of body</em> ki power.</Pair>
</Ability>
<Ability id="arc-monk-softstrike_monk_uc-incapacitating-palm-su" icon={["broken-shield"]}>
<Pair single id="arc-monk-softstrike_monk_uc-incapacitating-palm-su">Incapacitating Palm (Su)</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">A softstrike monk renders the target of his <em>quivering palm</em> unconscious instead of killing the creature. Upon failing its Fortitude saving throw, the target is knocked unconscious for a number of minutes equal to the softstrike monk's level.</Pair>
<Pair title="Special">This ability only applies if the monk selects the <em>quivering palm</em> ki power.</Pair>
</Ability>
<Ability id="arc-monk-softstrike_monk_uc-resilient-body-su" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-softstrike_monk_uc-resilient-body-su">Resilient Body (Su)</Pair>
<Pair hl title="Replaces">Empty body</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Passive Ability">A softstrike monk's mastery of nonlethal combat lets him apply his techniques to his defense. A softstrike monk converts any <Link to="/misc/precision_damage">precision damage</Link> he takes to nonlethal damage.</Pair>
</Ability>
</>};
const _sohei = {title: "Sohei", jsx: <><h2 id="arc-monk-sohei-sohei">Sohei</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 60</Link><br/>The sohei are masters of the horse and the hunt. A monastic soldier, the sohei is equally adept at combat afoot or on horseback. While skilled in unarmed techniques, many sohei favor weapons they can use while mounted on horseback or against others' horses.</p>
<Ability icon={["skills"]} id="arc-monk-sohei-undefined">
<Pair id="arc-monk-sohei-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/handle_animal">Handle Animal</Link> (CHA)</Pair></Ability>
<Ability id="arc-monk-sohei-weapon-and-armor-proficiency" icon={["stairs-goal"]}>
<Pair single id="arc-monk-sohei-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Alters">Weapon and armor proficiencies</Pair>
<Pair title="Ability">A sohei is proficient with all simple and martial weapons and with light armor, instead of a monk's usual weapon and armor proficiencies.</Pair>
</Ability>
<Ability id="arc-monk-sohei-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="arc-monk-sohei-bonus-feats">Bonus Feats</Pair>
<Pair title="Ability">A sohei may select <Link to="/feat/mounted_combat">mounted combat</Link> feats as bonus feats.</Pair>
</Ability>
<Ability id="arc-monk-sohei-devoted-guardian-ex" icon={["stairs-goal","upgrade","rolling-dices"]}>
<Pair single id="arc-monk-sohei-devoted-guardian-ex">Devoted Guardian (Ex)</Pair>
<Pair hl title="Replaces">Stunning fist</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A sohei can always act in a surprise round even if he does not notice his enemies, though he remains <Link to="/rule/flat_footed">flat-footed</Link> until he acts. In addition, a sohei gains a bonus on initiative rolls equal to 1/2 his monk level.</Pair>
<Pair title="At 20th Level">At 20th level, a sohei's initiative roll is automatically a natural 20.</Pair>
</Ability>
<Ability id="arc-monk-sohei-unarmed-strike" icon={["broken-shield"]}>
<Pair single id="arc-monk-sohei-unarmed-strike">Unarmed Strike</Pair>
<Pair title="Info">A sohei's unarmed strike damage does not increase at 4th level and above.</Pair>
</Ability>
<Ability id="arc-monk-sohei-monastic-mount-su" icon={["remedy","shield-reflect","stairs-goal"]}>
<Pair single id="arc-monk-sohei-monastic-mount-su">Monastic Mount (Su)</Pair>
<Pair hl title="Replaces">Fast movement, increased unarmed damage</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A sohei may spend 1 point from his <em>ki pool</em> to grant his mount <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to twice his level for 1 hour per level. In addition, as long as the sohei and his mount are adjacent, including when mounted, the mount gains any of the following abilities the sohei possesses: <em>AC bonus, diamond soul, evasion, high jump, improved evasion, ki strike</em> (as long as the sohei has at least 1 point in his <em>ki pool</em>), <em>perfect self,</em> and <em>still mind.</em> When a sohei spends points from his <em>ki pool,</em> his mount gains the same benefits as the sohei.</Pair>
</Ability>
<Ability id="arc-monk-sohei-ki-weapon-su" icon={["upgrade"]}>
<Pair single id="arc-monk-sohei-ki-weapon-su">Ki Weapon (Su)</Pair>
<Pair hl title="Replaces">Slow fall, abundant step</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Swift Action">A sohei may spend 1 point from his <em>ki pool</em> to grant any weapon he wields (including his unarmed strike) an enhancement bonus on attack and damage rolls until the end of his next turn. This bonus is equal to <Link to="/misc/one_fourth">one-fourth</Link> of his monk level.</Pair>
</Ability>
<Ability id="arc-monk-sohei-weapon-training-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-monk-sohei-weapon-training-ex">Weapon Training (Ex)</Pair>
<Pair hl title="Replaces">Purity of body, diamond body, quivering palm, timeless body, tongue of sun and moon</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A sohei gains <em>weapon training</em> in one of the following <Link to="/ability/weapon_groups">weapon groups</Link>, as the <Link to="/class/fighter">fighter</Link> class feature: bows, crossbows, monk weapons, polearms, spears, or thrown weapons.</Pair>
<Pair title="At 12th Level">He may select an additional group of weapons.</Pair>
<Pair title="At 18th Level">He may select an additional group of weapons.</Pair>
<Pair title="Special">A sohei may use <em>flurry of blows</em> and <em>ki strike</em> with any weapon in which he has weapon training.</Pair>
</Ability>
<Ability id="arc-monk-sohei-weapon-training-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-monk-sohei-weapon-training-ex" flavor="Text from the fighter class ability, with levels adjusted.">Weapon Training (Ex)</Pair>
<Pair title="At 6th Level">Select one <Link to="/ability/weapon_groups">weapon group</Link>. Whenever you attack with a weapon from this group, you gain a +1 bonus on attack and damage rolls. You also add this bonus to any combat maneuver checks made with weapons from this group. This bonus also applies to your <Link to="/rule/cmd">CMD</Link> when defending against <Link to="/rule/disarm">disarm</Link> and <Link to="/rule/sunder">sunder</Link> attempts made against weapons from this group.</Pair>
<Pair title="At 12th Level">You select a new weapon group and gain the +1 bonus when using weapons from that group. Your previously selected group's bonus increases to +2.</Pair>
<Pair title="At 18th Level">You select a new weapon group and gain the +1 bonus when using weapons from that group. Your previously selected groups' bonuses increase to +2 and +3.</Pair>
</Ability>
</>};
const _soul_shepherd = {title: "Soul Shepherd", jsx: <><h2 id="arc-monk-soul_shepherd-soul-shepherd">Soul Shepherd</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_139_the_dead_road">Pathfinder #139: The Dead Road pg. 65</Link><br/>Whether studying at the feet of psychopomps or merely imitating the creatures' philosophy and methods, soul shepherds believe in safeguarding the Cycle of Souls.</p>
<Ability id="arc-monk-soul_shepherd-calming-strike-su" icon={["mailed-fist","magic-palm"]}>
<Pair single id="arc-monk-soul_shepherd-calming-strike-su">Calming Strike (Su)</Pair>
<Pair hl title="Replaces">Stunning fist</Pair>
<Pair title="Immediate Action">After hitting an incorporeal undead creature with an unarmed strike, a soul shepherd can attempt to calm the creature, encouraging it to move peacefully to the next stage of its metaphysical journey. The target must succeed at a Will save (DC = 10 + half soul shepherd's level + the soul shepherd's Wisdom modifier) or be calmed, as <Link to="/spell/calm_spirit">calm spirit</Link>, for 1 minute.</Pair>
<Pair title="Ability">The soul shepherd can use this ability against a haunt by making a touch attack against an AC of 10 + the haunt's CR. A haunt does not receive a saving throw against this ability, but the ability's duration changes to concentration + 1 round, up to 1 round per level.</Pair>
<Pair title="Usage">1 time/day per monk level</Pair>
</Ability>
<Ability id="arc-monk-soul_shepherd-otherworldly-resilience-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-soul_shepherd-otherworldly-resilience-ex">Otherworldly Resilience (Ex)</Pair>
<Pair hl title="Replaces">Evasion, improved evasion</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A soul shepherd gains <Link to="/rule/dr">DR</Link> 2/adamantine, cold resistance 5, and electricity resistance 5.</Pair>
<Pair title="At 9th Level">This improves to DR 5/adamantine, cold resistance 10, and electricity resistance 10.</Pair>
</Ability>
<Ability id="arc-monk-soul_shepherd-spirit-sense-su" icon={["stairs-goal"]}>
<Pair single id="arc-monk-soul_shepherd-spirit-sense-su">Spirit Sense (Su)</Pair>
<Pair hl title="Replaces">Abundant step</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Swift Action">A soul shepherd can spend 1 point from his <em>ki pool</em> to grant himself the ability to notice, locate, and distinguish between living and undead creatures within 30 feet, just as if he had a <Link to="/subtype/psychopomp">psychopomp's</Link> <em>spiritsense</em> ability, for a number of rounds equal to his Wisdom modifier (minimum 1).</Pair>
</Ability>
<Ability id="arc-monk-soul_shepherd-yamarajs-judgment-sp" icon={["remedy"]}>
<Pair single id="arc-monk-soul_shepherd-yamarajs-judgment-sp">Yamaraj's Judgment (Sp)</Pair>
<Pair hl title="Replaces">Quivering palm</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Standard Action">A soul shepherd can spend 1 point from his <em>ki pool</em> to attempt to free an enslaved soul from an effect that is imprisoning it, such as <Link to="/spell/soul_bind">soul bind</Link> or <Link to="/spell/trap_the_soul">trap the soul</Link>. This functions as a targeted <Link to="/spell/dispel_magic">dispel magic</Link> spell with a caster level equal to the soul shepherd's level. He can spend an additional ki point when he activates this ability to gain a +4 bonus on the caster level check. If the soul is held prisoner by a creature or a non-spell effect, the soul shepherd frees it if his caster level check result is at least 11 + the creature or effect's CR.</Pair>
</Ability>
</>};
const _soul_shepherd_uc = {title: "Soul Shepherd (Unchained)", topLink: ["Unchained Monk","class/unchained_monk"], jsx: <><h2 id="arc-monk-soul_shepherd_uc-soul-shepherd">Soul Shepherd</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_139_the_dead_road">Pathfinder #139: The Dead Road pg. 65</Link><br/>Whether studying at the feet of psychopomps or merely imitating the creatures' philosophy and methods, soul shepherds believe in safeguarding the Cycle of Souls.</p>
<Ability id="arc-monk-soul_shepherd_uc-calming-strike-su" icon={["mailed-fist","magic-palm"]}>
<Pair single id="arc-monk-soul_shepherd_uc-calming-strike-su">Calming Strike (Su)</Pair>
<Pair hl title="Replaces">Stunning fist</Pair>
<Pair title="Immediate Action">After hitting an incorporeal undead creature with an unarmed strike, a soul shepherd can attempt to calm the creature, encouraging it to move peacefully to the next stage of its metaphysical journey. The target must succeed at a Will save (DC = 10 + half soul shepherd's level + the soul shepherd's Wisdom modifier) or be calmed, as <Link to="/spell/calm_spirit">calm spirit</Link>, for 1 minute.</Pair>
<Pair title="Ability">The soul shepherd can use this ability against a haunt by making a touch attack against an AC of 10 + the haunt's CR. A haunt does not receive a saving throw against this ability, but the ability's duration changes to concentration + 1 round, up to 1 round per level.</Pair>
<Pair title="Usage">1 time/day per monk level</Pair>
</Ability>
<Ability id="arc-monk-soul_shepherd_uc-otherworldly-resilience-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-soul_shepherd_uc-otherworldly-resilience-ex">Otherworldly Resilience (Ex)</Pair>
<Pair hl title="Replaces">Evasion, improved evasion</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A soul shepherd gains <Link to="/rule/dr">DR</Link> 2/adamantine, cold resistance 5, and electricity resistance 5.</Pair>
<Pair title="At 9th Level">This improves to DR 5/adamantine, cold resistance 10, and electricity resistance 10.</Pair>
</Ability>
<Ability id="arc-monk-soul_shepherd_uc-spirit-sense-su" icon={["stairs-goal"]}>
<Pair single id="arc-monk-soul_shepherd_uc-spirit-sense-su">Spirit Sense (Su)</Pair>
<Pair hl title="Replaces">12th-level ki power</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Swift Action">A soul shepherd can spend 1 point from his <em>ki pool</em> to grant himself the ability to notice, locate, and distinguish between living and undead creatures within 30 feet, just as if he had a <Link to="/subtype/psychopomp">psychopomp's</Link> <em>spiritsense</em> ability, for a number of rounds equal to his Wisdom modifier (minimum 1).</Pair>
</Ability>
<Ability id="arc-monk-soul_shepherd_uc-yamarajs-judgment-sp" icon={["remedy"]}>
<Pair single id="arc-monk-soul_shepherd_uc-yamarajs-judgment-sp">Yamaraj's Judgment (Sp)</Pair>
<Pair hl title="Replaces">16th-level ki power</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Standard Action">A soul shepherd can spend 1 point from his <em>ki pool</em> to attempt to free an enslaved soul from an effect that is imprisoning it, such as <Link to="/spell/soul_bind">soul bind</Link> or <Link to="/spell/trap_the_soul">trap the soul</Link>. This functions as a targeted <Link to="/spell/dispel_magic">dispel magic</Link> spell with a caster level equal to the soul shepherd's level. He can spend an additional ki point when he activates this ability to gain a +4 bonus on the caster level check. If the soul is held prisoner by a creature or a non-spell effect, the soul shepherd frees it if his caster level check result is at least 11 + the creature or effect's CR.</Pair>
</Ability>
</>};
const _spirit_master = {title: "Spirit Master", jsx: <><h2 id="arc-monk-spirit_master-spirit-master">Spirit Master</h2>
<p><strong>Sources</strong> <Link to="/source/undead_slayers_handbook">Undead Slayer's Handbook pg. 22</Link><br/>Spirit masters are monks who specialize in combating the undead, laying their corpses to rest, and sending their souls to final judgment.</p>
<Ability id="arc-monk-spirit_master-resilient-soul-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-spirit_master-resilient-soul-ex">Resilient Soul (Ex)</Pair>
<Pair hl title="Replaces">Still mind</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A spirit master gains a +2 bonus on saving throws against necromancy spells and effects.</Pair>
</Ability>
<Ability id="arc-monk-spirit_master-spirit-combat-su" icon={["upgrade"]}>
<Pair single id="arc-monk-spirit_master-spirit-combat-su">Spirit Combat (Su)</Pair>
<Pair hl title="Replaces">Maneuver training</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Ability">A spirit master can charge his unarmed strike so it affects incorporeal creatures. The spirit master's unarmed strike deals half damage to incorporeal creatures, or full damage if it's a magic weapon (such as via an <Link to="/magic-wondrous/amulet_of_mighty_fists">amulet of mighty fists</Link>). This benefit lasts for a number of rounds equal to the spirit master's class level.</Pair>
</Ability>
<Ability id="arc-monk-spirit_master-diamond-spirit-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-spirit_master-diamond-spirit-ex">Diamond Spirit (Ex)</Pair>
<Pair hl title="Replaces">Purity of body</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A spirit master becomes fortified against the effects of <Link to="/rule/energy_drain">energy drain</Link>. When the spirit master gains a negative level, he does not take any penalties, his total hit points remain unchanged, and he is not considered lower level for the purpose of level-dependent variables.</Pair>
<Pair title="Ability">Once per day when attempting a Fortitude save to remove a temporary negative level, the spirit master may choose to automatically succeed.</Pair>
<Pair title="Special">The spirit master still dies if his number of negative levels equals or exceeds his number of Hit Dice.</Pair>
</Ability>
<Ability id="arc-monk-spirit_master-spirit-burst-su" icon={["aura"]}>
<Pair single id="arc-monk-spirit_master-spirit-burst-su">Spirit Burst (Su)</Pair>
<Pair hl title="Replaces">Wholeness of body</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Free Action">Whenever a spirit master destroys an undead creature with a melee attack, he may expend 2 points from his <em>ki pool</em> to release an 15-foot-radius <Link to="/misc/burst">burst</Link> of positive energy centered on the destroyed creature. Undead creatures in the affected area each take a number of points of damage equal the number of Hit Dice of the destroyed creature. Living creatures in the area are healed by the same amount.</Pair>
</Ability>
<Ability id="arc-monk-spirit_master-purifying-palm-su" icon={["mailed-fist","armor-downgrade"]}>
<Pair single id="arc-monk-spirit_master-purifying-palm-su" flavor="The spirit master gains the ability to alter the balance of positive and negative energy within an opponent's body.">Purifying Palm (Su)</Pair>
<Pair hl title="Replaces">Quivering palm</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">The spirit master can make a purifying palm attack once per day, and must announce his intention before making a melee attack roll. If his attack deals damage, the target must attempt a Will save (DC = 10 + 1/2 the spirit master's class level + the spirit master's Wisdom modifier). On a failed save, the target cannot <Link to="/ability/channel_energy">channel energy</Link>, nor can it be healed by positive or negative energy. This effect lasts for 1 round per class level. If the target is an undead creature, it must succeed at its Will save or be instantly destroyed.</Pair>
</Ability>
<Ability id="arc-monk-spirit_master-spirit-flow-su" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-spirit_master-spirit-flow-su" flavor="A spirit master can dramatically alter the flow of his own ki.">Spirit Flow (Su)</Pair>
<Pair hl title="Replaces">Empty body</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Immediate Action">The spirit master can expend 3 ki points to alter his ki for a number of rounds equal to his class level. During this time, he is healed by negative energy as if he were an undead creature. The spirit master is still healed by positive energy as normal.</Pair>
</Ability>
<Ability id="arc-monk-spirit_master-spirit-mastery-su" icon={["armor-upgrade","magic-swirl"]}>
<Pair single id="arc-monk-spirit_master-spirit-mastery-su">Spirit Mastery (Su)</Pair>
<Pair hl title="Replaces">Perfect self</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">A spirit master gains DR 10/evil and becomes immune to <Link to="/rule/ability_drain">ability drain and ability damage</Link>.</Pair>
<Pair title="Ability">Once per week, the spirit master may bring a dead creature back to life. This ability functions as <Link to="/spell/true_resurrection">true resurrection</Link>, except the spirit master may not resurrect a creature that has been dead for longer than 1 day per class level.</Pair>
</Ability>
</>};
const _student_of_stone = {title: "Student of Stone", jsx: <><h2 id="arc-monk-student_of_stone-student-of-stone">Student of Stone</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 146</Link><br/>By following the path of the stone, students of stone give up much of monks' mobility in favor of sheer resilience. A student of stone has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-monk-student_of_stone--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/oread">Oread</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-monk-student_of_stone-hard-as-stone-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-student_of_stone-hard-as-stone-ex">Hard as Stone (Ex)</Pair>
<Pair hl title="Replaces">Evasion</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">Whenever an opponent rolls to confirm a critical hit against a student of stone, treat the student of stone's AC as +4 higher than normal.</Pair>
</Ability>
<Ability id="arc-monk-student_of_stone-strength-of-stone-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-monk-student_of_stone-strength-of-stone-ex" flavor="A student of stone learns to draw strength from the earth.">Strength of Stone (Ex)</Pair>
<Pair hl title="Replaces">Fast movement</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">So long as both he and his opponent are touching the ground, the student of stone gains a +1 bonus on attack rolls, damage rolls, <Link to="/rule/bull_rush">bull rush</Link> and <Link to="/rule/trip">trip</Link> combat maneuver rolls, and to his CMD when resisting a bull rush or trip attempt.</Pair>
</Ability>
<Ability id="arc-monk-student_of_stone-bonus-feat" icon={["stairs-goal"]}>
<Pair single id="arc-monk-student_of_stone-bonus-feat">Bonus Feat</Pair>
<Pair hl title="Alters">Bonus feats</Pair>
<Pair title="At 6th Level">A student of stone adds <Link to="/feat/elemental_fist">Elemental Fist</Link> to his list of available bonus feats. If the student of stone selects Elemental Fist as a bonus feat, he may only deal acid damage when using the feat.</Pair>
<Pair title="At 10th Level">The student of stone adds <Link to="/feat/shaitan_style">Shaitan Style</Link> to his list of bonus feats.</Pair>
<Pair title="At 14th Level">He adds <Link to="/feat/shaitan_skin">Shaitan Skin</Link>.</Pair>
<Pair title="At 18th Level">He adds <Link to="/feat/shaitan_earthblast">Shaitan Earthblast</Link>.</Pair>
</Ability>
<Ability id="arc-monk-student_of_stone-bones-of-stone-su" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-student_of_stone-bones-of-stone-su">Bones of Stone (Su)</Pair>
<Pair hl title="Replaces">High jump</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Swift Action">A student of stone can spend 1 ki point to gain DR 2/magic until the beginning of his next turn.</Pair>
<Pair title="At 10th Level">He can spend 1 ki point to gain DR 2/chaotic until his next turn.</Pair>
<Pair title="At 15th Level">He can spend 1 ki point to gain DR 5/chaotic until his next turn.</Pair>
</Ability>
<Ability id="arc-monk-student_of_stone-body-of-stone-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-student_of_stone-body-of-stone-ex">Body of Stone (Ex)</Pair>
<Pair hl title="Replaces">Improved evasion</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">A student of stone gains the benefits of the <Link to="/magic-enh/light_fortification">light fortification</Link> armor property.</Pair>
</Ability>
<Ability id="arc-monk-student_of_stone-soul-of-stone-su" icon={["stairs-goal"]}>
<Pair single id="arc-monk-student_of_stone-soul-of-stone-su">Soul of Stone (Su)</Pair>
<Pair hl title="Replaces">Abundant step</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Swift Action">A student of stone can spend 1 ki point to gain <Link to="/umr/tremorsense">tremorsense</Link> 15 feet until his next turn.</Pair>
<Pair title="At 16th Level">The range of this tremorsense increases to 30 feet.</Pair>
</Ability>
<Ability id="arc-monk-student_of_stone-stone-self" icon={["magic-swirl","armor-upgrade","stairs-goal"]}>
<Pair single id="arc-monk-student_of_stone-stone-self">Stone Self</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Info">A student of stone becomes an <Link to="/subtype/earth">earth</Link> <Link to="/type/outsider">outsider</Link>. He gains the earth subtype, as well as DR 5/chaotic, burrow speed 20 feet, and tremorsense 20 feet.</Pair>
</Ability>
</>};
const _terra_cotta_monk = {title: "Terra-Cotta Monk", jsx: <><h2 id="arc-monk-terra_cotta_monk-terra-cotta-monk">Terra-Cotta Monk</h2>
<p><strong>Sources</strong> <Link to="/source/dungeoneers_handbook">Dungeoneer's Handbook pg. 22</Link><br/>Possessing a natural affinity for all things earthen, terracotta monks are experts at turning the stone around them against their enemies.</p>
<Ability icon={["skills"]} id="arc-monk-terra_cotta_monk-undefined">
<Pair id="arc-monk-terra_cotta_monk-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> (INT), <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT), <Link to="/skill/disable_device">Disable Device</Link> (DEX)</Pair>
<Pair title="Removed Skills">Knowledge (history), Perform, Ride</Pair></Ability>
<Ability id="arc-monk-terra_cotta_monk-trap-intuition-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-monk-terra_cotta_monk-trap-intuition-ex">Trap Intuition (Ex)</Pair>
<Pair hl title="Replaces">Evasion</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">Whenever a terra-cotta monk comes within 10 feet of a trap, he receives an immediate Perception check to notice the trap. The GM should make this check in secret. A terra-cotta monk gains a +2 bonus on Perception checks to notice traps. This bonus increases to +4 if the trap is located in a stone wall or floor.</Pair>
</Ability>
<Ability id="arc-monk-terra_cotta_monk-stone-grip-su" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-monk-terra_cotta_monk-stone-grip-su">Stone Grip (Su)</Pair>
<Pair hl title="Replaces">High jump</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A terra-cotta monk adds a bonus equal to his class level on all Climb checks.</Pair>
<Pair title="Ability">He can move at his full movement rate while climbing with no increase to the check's DC.</Pair>
<Pair title="Swift Action">By spending 1 point from his <em>ki pool,</em> a monk gains the benefits of <Link to="/spell/spider_climb">spider climb</Link> for 1 round.</Pair>
</Ability>
<Ability id="arc-monk-terra_cotta_monk-trap-dodge-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-terra_cotta_monk-trap-dodge-ex">Trap Dodge (Ex)</Pair>
<Pair hl title="Replaces">Improved evasion</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Passive Ability">A terra-cotta monk gains a bonus equal to his Wisdom modifier on all saving throws made against effects produced by mechanical traps.</Pair>
</Ability>
<Ability id="arc-monk-terra_cotta_monk-sudden-adit-su" icon={["magic-swirl"]}>
<Pair single id="arc-monk-terra_cotta_monk-sudden-adit-su">Sudden Adit (Su)</Pair>
<Pair hl title="Replaces">Abundant step</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Move-Equivalent Action">A terra-cotta monk can create passages through stone or dirt as if using the spell <Link to="/spell/passwall">passwall</Link> with a caster level equal to his monk level. Using this ability consumes 2 points of the monk's <em>ki pool.</em></Pair>
</Ability>
<Ability id="arc-monk-terra_cotta_monk-petrifying-strike-su" icon={["armor-downgrade"]}>
<Pair single id="arc-monk-terra_cotta_monk-petrifying-strike-su">Petrifying Strike (Su)</Pair>
<Pair hl title="Replaces">Quivering palm</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">A terra-cotta monk can turn an opponent to stone with a single strike. He can use this ability once per day, and must announce the attempt before making his attack roll. If the terra-cotta monk's strike is successful, the creature must succeed at a Fortitude save (DC = 10 + 1/2 the monk's level + the monk's Wis modifier) or be <Link to="/rule/petrified">petrified</Link> for 1 hour per monk level. Incorporeal creatures and creatures immune to petrification are unaffected by this ability.</Pair>
</Ability>
<Ability id="arc-monk-terra_cotta_monk-rainmaker-su" icon={["magic-swirl"]}>
<Pair single id="arc-monk-terra_cotta_monk-rainmaker-su">Rainmaker (Su)</Pair>
<Pair hl title="Replaces">Empty body</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Standard Action">Anytime a terra-cotta monk is underground, he may cause a section of the roof to come down on his enemies per the spell <Link to="/spell/earthquake">earthquake</Link>, with a caster level equal to his monk level. The terra-cotta monk may use this ability only while in a cave, cavern, or tunnel. Using this ability consumes 3 points from his <em>ki pool.</em></Pair>
</Ability>
</>};
const _tetori = {title: "Tetori", jsx: <><h2 id="arc-monk-tetori-tetori">Tetori</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 61</Link></p>
<p>The style of the tetori is that of the majestic wrestler - a warrior with a dizzying array of grabs, holds, and locks with which to bewilder and incapacitate his foes.</p>
<Ability id="arc-monk-tetori-bonus-feat" icon={["stairs-goal"]}>
<Pair single id="arc-monk-tetori-bonus-feat">Bonus Feat</Pair>
<Pair hl title="Replaces">Bonus feats</Pair>
<Pair title="Ability">A tetori gains the following bonus feats.</Pair>
<Pair title="At 1st Level"><Link to="/feat/improved_grapple">Improved Grapple</Link></Pair>
<Pair title="At 2nd Level"><Link to="/feat/stunning_pin">Stunning Pin</Link></Pair>
<Pair title="At 6th Level"><Link to="/feat/greater_grapple">Greater Grapple</Link></Pair>
<Pair title="At 10th Level">feat/Pinning Knockout›</Pair>
<Pair title="At 14th Level"><Link to="/feat/chokehold">Chokehold</Link></Pair>
<Pair title="At 18th Level"><Link to="/feat/neckbreaker">Neckbreaker</Link>.</Pair>
</Ability>
<Ability id="arc-monk-tetori-graceful-grappler-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-monk-tetori-graceful-grappler-ex">Graceful Grappler (Ex)</Pair>
<Pair hl title="Replaces">Flurry of blows</Pair>
<Pair title="Ability">A tetori uses his monk level in place of his base attack bonus to determine CMB and CMD for grappling.</Pair>
<Pair title="At 4th Level">He suffers no penalties on attack rolls, can make attacks of opportunity while grappling, and retains his Dexterity bonus to AC when pinning an opponent or when <Link to="/rule/grappled">grappled</Link>.</Pair>
<Pair title="At 8th Level">A tetori gains the <Link to="/umr/grab">grab</Link> special attack when using unarmed strikes, and can use this ability against creatures his own size or smaller by spending 1 point from his <em>ki pool,</em> or against larger creatures by spending 2 points from his <em>ki pool.</em></Pair>
<Pair title="At 15th Level">A tetori gains the <Link to="/umr/constrict">constrict</Link> special attack, inflicting his unarmed strike damage on any successful <Link to="/rule/grapple">grapple</Link> check.</Pair>
</Ability>
<Ability id="arc-monk-tetori-counter-grapple-ex" icon={["mailed-fist"]}>
<Pair single id="arc-monk-tetori-counter-grapple-ex">Counter-Grapple (Ex)</Pair>
<Pair hl title="Replaces">Slow fall</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A tetori wrestler may make an attack of opportunity against a creature attempting to grapple him. This ability does not allow the tetori to make an attack of opportunity against a creature with the Greater Grapple feat.</Pair>
<Pair title="At 6th Level">He may use <em>counter-grapple</em> even if his attacker has <Link to="/rule/concealment">concealment</Link> or total concealment.</Pair>
<Pair title="At 8th Level">He may <em>counter-grapple</em> even if he is flat-footed.</Pair>
<Pair title="At 10th Level">He may <em>counter-grapple</em> even if his attacker has exceptional reach.</Pair>
</Ability>
<Ability id="arc-monk-tetori-break-free-ex" icon={["upgrade"]}>
<Pair single id="arc-monk-tetori-break-free-ex">Break Free (Ex)</Pair>
<Pair hl title="Replaces">High jump</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A tetori adds his monk level on combat maneuver or Escape Artist checks made to escape a grapple.</Pair>
<Pair title="Immediate Action">If a tetori fails a save against an effect that causes him to become <Link to="/rule/entangled">entangled</Link>, <Link to="/rule/paralyzed">paralyzed</Link>, <Link to="/spell/slow">slowed</Link>, or <Link to="/misc/staggered">staggered</Link>, he may spend 1 point from his <em>ki pool</em> to attempt a new save.</Pair>
</Ability>
<Ability id="arc-monk-tetori-inescapable-grasp-su" icon={["armor-downgrade"]}>
<Pair single id="arc-monk-tetori-inescapable-grasp-su">Inescapable Grasp (Su)</Pair>
<Pair hl title="Replaces">Abundant step, improved evasion, timeless body, tongue of sun and moon</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Swift Action">A tetori can spend 1 point from his <em>ki pool</em> to suppress his opponents' <Link to="/spell/freedom_of_movement">freedom of movement</Link> and magical bonuses to Escape Artist or on checks to escape a grapple. This lasts until the beginning of the wrestler's next turn.</Pair>
<Pair title="At 13th Level">This ability also duplicates the effect of <Link to="/spell/dimensional_anchor">dimensional anchor</Link>.</Pair>
<Pair title="At 17th Level">The tetori's unarmed strike gains the <Link to="/magic-enh/ghost_touch">ghost touch</Link> special ability, and an <Link to="/subtype/incorporeal">incorporeal</Link> creature that he strikes gains the grappled condition (Reflex negates, DC 10 + 1/2 the wrestler's level + his Wisdom modifier).</Pair>
</Ability>
<Ability id="arc-monk-tetori-form-lock-su" icon={["magic-swirl"]}>
<Pair single id="arc-monk-tetori-form-lock-su">Form Lock (Su)</Pair>
<Pair hl title="Replaces">Diamond soul</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">A tetori can negate a polymorph effect by touch with a Wisdom check, adding a bonus equal to his monk level, against a DC of 11 + the caster level of the effect (or HD of the creature, for supernatural polymorph effects). This is a <strong className="hl">standard action</strong> requiring 2 points from the tetori's <em>ki pool,</em> or an <strong className="hl">immediate action</strong> if a creature the tetori is grappling attempts to use a polymorph effect.</Pair>
</Ability>
<Ability id="arc-monk-tetori-iron-body-su" icon={["armor-upgrade","upgrade","broken-shield"]}>
<Pair single id="arc-monk-tetori-iron-body-su">Iron Body (Su)</Pair>
<Pair hl title="Replaces">Empty body</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Move-Equivalent Action">A tetori can make his tissues ultra-dense for 1 minute as the <Link to="/spell/iron_body">iron body</Link> spell by spending 3 points from his <em>ki pool.</em></Pair>
</Ability>
</>};
const _treetop_monk = {title: "Treetop Monk", jsx: <><h2 id="arc-monk-treetop_monk-treetop-monk">Treetop Monk</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 206</Link><br/>While many vanaras follow traditional monastic training and traditions, others learn to blend exotic combat and the mysterious forces of ki with the natural world, allowing them to move through trees and overgrowth to deliver devastating attacks. A treetop monk has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-monk-treetop_monk--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/vanara">Vanara</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-monk-treetop_monk-branch-runner-ex" icon={["upgrade"]}>
<Pair single id="arc-monk-treetop_monk-branch-runner-ex">Branch Runner (Ex)</Pair>
<Pair hl title="Replaces">Still mind</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A treetop monk adds half the base speed bonus from his fast movement ability to his racial climb speed.</Pair>
</Ability>
<Ability id="arc-monk-treetop_monk-wood-affinity-su" icon={["stairs-goal"]}>
<Pair single id="arc-monk-treetop_monk-wood-affinity-su">Wood Affinity (Su)</Pair>
<Pair hl title="Replaces">Purity of body</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Free Action">A treetop monk may expend 1 point from his <em>ki pool</em> to treat a wooden object as if it were not broken for 1 minute (this includes a weapon with a wooden haft such as an axe or spear).</Pair>
<Pair title="At 8th Level">As a <strong className="hl">free action</strong>, a treetop monk can expend 1 point from his <em>ki pool</em> to use the <Link to="/feat/lunge">Lunge</Link> feat with any wooden or wood-hafted melee weapon.</Pair>
</Ability>
<Ability id="arc-monk-treetop_monk-freedom-of-movement-su" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-treetop_monk-freedom-of-movement-su">Freedom of Movement (Su)</Pair>
<Pair hl title="Replaces">Abundant step</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Swift Action">A treetop may expend 1 point from his <em>ki pool</em> to gain the effects of <Link to="/spell/freedom_of_movement">freedom of movement</Link> for 1 round.</Pair>
</Ability>
</>};
const _underfoot_adept = {title: "Underfoot Adept", jsx: <><h2 id="arc-monk-underfoot_adept-underfoot-adept">Underfoot Adept</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 65</Link><br/>An underfoot adept turns his diminutive stature and unorthodox footwork into a powerful weapon. Effortlessly moving across the battlefield, he ducks under the legs of larger creatures and then topples them with surprising attacks. An underfoot adept has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-monk-underfoot_adept--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/halfling">Halfling</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-monk-underfoot_adept-underfoot-grace-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-underfoot_adept-underfoot-grace-ex" flavor="An underfoot adept uses his size and grace to avoid the attacks of those he passes.">Underfoot Grace (Ex)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 1st level</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">When using the Acrobatics skill to avoid attacks of opportunity by moving through a threatened area or an enemy's space, he only takes a -5 penalty when doing so at full speed, instead of the normal -10 penalty.</Pair>
</Ability>
<Ability id="arc-monk-underfoot_adept-underfoot-trip-ex" icon={["stairs-goal"]}>
<Pair single id="arc-monk-underfoot_adept-underfoot-trip-ex" flavor="An underfoot adept learns a number of maneuvers and grabs that can cause even the largest opponents to stumble and fall.">Underfoot Trip (Ex)</Pair>
<Pair hl title="Replaces">Stunning fist</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">He gains <Link to="/feat/improved_trip">Improved Trip</Link> as a bonus feat, even if he does not meet the requirements.</Pair>
<Pair title="At 4th Level">He acts as if he is one size larger for the purposes of determining the maximum size of creatures he can trip and when determining his CMB and CMD for purposes of a <Link to="/rule/trip">trip</Link> combat maneuver.</Pair>
<Pair title="At 8th Level">He now acts as if he is 2 sizes larger.</Pair>
<Pair title="At 12th Level">He now acts as if he is 3 sizes larger.</Pair>
<Pair title="At 16th Level">He now acts as if he is 4 sizes larger.</Pair>
<Pair title="At 20th Level">He now acts as if he is 5 sizes larger.</Pair>
</Ability>
<Ability id="arc-monk-underfoot_adept-improved-underfoot-grace-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-underfoot_adept-improved-underfoot-grace-ex" flavor="An underfoot adept's ability to avoid attacks of opportunity against those he passes improves.">Improved Underfoot Grace (Ex)</Pair>
<Pair hl title="Replaces">High jump</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">When using the Acrobatics skill to avoid attacks of opportunity, while moving through a threatened area or through an enemy's space, he takes no penalty when doing so at full speed.</Pair>
</Ability>
</>};
const _wanderer = {title: "Wanderer", jsx: <><h2 id="arc-monk-wanderer-wanderer">Wanderer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 76</Link><br/>Some monks wander the world in humility to learn and to share wisdom and philosophy from their teachers with those they meet, often aiding those who are in need. A wanderer has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-monk-wanderer--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/human">Human</Link></td></tr></tbody></table></ScrollContainer></div><Ability icon={["skills"]} id="arc-monk-wanderer-undefined">
<Pair id="arc-monk-wanderer-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/linguistics">Linguistics</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS)</Pair></Ability>
<Ability id="arc-monk-wanderer-far-traveler-ex" icon={["stairs-goal"]}>
<Pair single id="arc-monk-wanderer-far-traveler-ex">Far Traveler (Ex)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 1st level</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">The wanderer gains either one additional language known or proficiency in one exotic or martial weapon.</Pair>
<Pair title="At 4th Level">She may gain a language or retrain again. The wanderer may gain an additional language known or may retrain her weapon proficiency from this ability to a different exotic or martial weapon.</Pair>
<Pair title="At 8th Level">She may gain a language or retrain again.</Pair>
<Pair title="At 12th Level">She may gain a language or retrain again.</Pair>
<Pair title="At 16th Level">She may gain a language or retrain again.</Pair>
<Pair title="At 20th Level">She may gain a language or retrain again.</Pair>
</Ability>
<Ability id="arc-monk-wanderer-long-walk-ex" icon={["stairs-goal","upgrade","armor-upgrade"]}>
<Pair single id="arc-monk-wanderer-long-walk-ex">Long Walk (Ex)</Pair>
<Pair hl title="Replaces">Still mind</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">The wanderer gains <Link to="/feat/endurance">Endurance</Link> as a bonus feat, and the feat bonus doubles when he makes Constitution checks because of a forced march. In addition, a wanderer gains a +2 bonus on saving throws against spells and effects that cause exhaustion and fatigue.</Pair>
</Ability>
<Ability id="arc-monk-wanderer-light-step-su" icon={["armor-upgrade","magic-swirl"]}>
<Pair single id="arc-monk-wanderer-light-step-su">Light Step (Su)</Pair>
<Pair hl title="Replaces">Slow fall</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A wanderer leaves no trail and cannot be tracked, though he can leave a trail if desired.</Pair>
<Pair title="Ability">By spending 1 point from his <em>ki pool,</em> he can use <Link to="/spell/ant_haul">ant haul</Link>, <Link to="/spell/feather_step">feather step</Link>, <Link to="/spell/pass_without_trace">pass without trace</Link>, or <Link to="/spell/tireless_pursuit">tireless pursuit</Link> as a spell-like ability (with a caster level equal to his monk level).</Pair>
</Ability>
<Ability id="arc-monk-wanderer-inscrutable-su" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-wanderer-inscrutable-su">Inscrutable (Su)</Pair>
<Pair hl title="Replaces">High jump</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">The wanderer gains a supernatural air of mystery. The DC to gain information or insight into the wanderer with Diplomacy, Knowledge skills, or Sense Motive increases by 5.</Pair>
<Pair title="Ability">By spending 1 point from his <em>ki pool,</em> the wanderer gains <Link to="/spell/nondetection">nondetection</Link> for 24 hours with a caster level equal to his monk level.</Pair>
</Ability>
<Ability id="arc-monk-wanderer-wanderers-wisdom-ex" icon={["upgrade"]}>
<Pair single id="arc-monk-wanderer-wanderers-wisdom-ex" flavor="The wanderer can dispense excellent advice in the form of philosophical proverbs and parables.">Wanderer's Wisdom (Ex)</Pair>
<Pair hl title="Replaces">Wholeness of body</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Swift Action">The wanderer can <Link to="/performance/inspire_courage">inspire courage</Link> or <Link to="/performance/inspire_competence">inspire competence</Link> as a <Link to="/class/bard">bard</Link> of his monk level by spending 2 points from his <em>ki pool.</em> This affects one creature within 30 feet and lasts a number of rounds equal to the wanderer's Wisdom modifier (minimum 1 round). This ability is language-dependent.</Pair>
</Ability>
<Ability id="arc-monk-wanderer-disappear-unnoticed-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-wanderer-disappear-unnoticed-ex">Disappear Unnoticed (Ex)</Pair>
<Pair hl title="Replaces">Abundant step</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">The wanderer may use Stealth to hide even while being directly observed or when no cover or concealment is available, as long as he is adjacent to at least one creature of his size or larger, by spending 1 point from his <em>ki pool.</em> This effect lasts until the beginning of the wanderer's next turn and may be continued in consecutive rounds by spending 1 ki point each round.</Pair>
</Ability>
<Ability id="arc-monk-wanderer-free-step-su" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-wanderer-free-step-su">Free Step (Su)</Pair>
<Pair hl title="Replaces">Diamond soul</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Passive Ability">The wanderer gains continuous <Link to="/spell/freedom_of_movement">freedom of movement</Link> as a continuous spell-like ability.</Pair>
</Ability>
</>};
const _wasteland_meditant = {title: "Wasteland Meditant", jsx: <><h2 id="arc-monk-wasteland_meditant-wasteland-meditant">Wasteland Meditant</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 64</Link><br/>Some monks journey to remote and isolated corners of the world to find serenity and a heightened sense of awareness.</p>
<Ability id="arc-monk-wasteland_meditant-dehydrating-strike-su" icon={["mailed-fist","armor-downgrade"]}>
<Pair single id="arc-monk-wasteland_meditant-dehydrating-strike-su">Dehydrating Strike (Su)</Pair>
<Pair hl title="Replaces">Stunning fist</Pair>
<Pair title="At 1st Level">As a <strong className="hl">free action</strong> as a part of a melee attack, a wasteland meditant can draw the moisture out of a living creature damaged by his unarmed strike. Unless the creature succeeds at a Will save (DC = 10 + half the monk's level + his Wisdom modifier), the creature is <Link to="/misc/fatigued">fatigued</Link> for a number of rounds equal to half the wasteland meditant's level (minimum 1).</Pair>
<Pair title="At 5th Level">The creature struck is also <Link to="/misc/staggered">staggered</Link> for 1 round if it fails its save.</Pair>
<Pair title="At 10th Level">A creature that fails its save is <Link to="/misc/exhausted">exhausted</Link> instead of fatigued.</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day, but only once per round</Pair>
<Pair title="Special">Creatures immune to critical hits or <Link to="/misc/precision_damage">precision damage</Link> are immune to this ability. When used against a plant creature or a creature with the water subtype, dehydrating strike inflicts the above conditions (as applicable) on a failed save and also deals damage equal to 1d6 + an additional number of d6s equal to <Link to="/misc/one_fourth">one-fourth</Link> of his monk level (2d6 total at 4th level, 3d6 at 8th level, etc.) This damage is in addition to the wasteland meditant's normal unarmed strike damage.</Pair>
</Ability>
<Ability id="arc-monk-wasteland_meditant-vigor-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-wasteland_meditant-vigor-ex">Vigor (Ex)</Pair>
<Pair hl title="Replaces">Evasion</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">When a wasteland meditant succeeds at a Fortitude save against an effect with a partial effect on a successful save, he instead suffers no effect.</Pair>
</Ability>
<Ability id="arc-monk-wasteland_meditant-desert-strider-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-monk-wasteland_meditant-desert-strider-ex">Desert Strider (Ex)</Pair>
<Pair hl title="Replaces">Slow fall</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A wasteland meditant ignores movement penalties for <Link to="/rule/difficult_terrain">difficult terrain</Link> when in desert terrain. Additionally, he kicks up dust around his body whenever he performs a double <strong className="hl">move action</strong> in desert terrain. This dust grants the wasteland meditant <Link to="/rule/concealment">concealment</Link>. The miss chance granted by this concealment is 10%.</Pair>
<Pair title="At 6th Level">The concealment becomes 20%.</Pair>
<Pair title="At 8th Level">The concealment increases to 30%.</Pair>
<Pair title="At 10th Level">The concealment becomes 40%.</Pair>
<Pair title="At 12th Level">The concealment increases to 50%.</Pair>
<Pair title="At 14th Level">The concealment becomes 60%.</Pair>
<Pair title="At 16th Level">The concealment increases to 70%.</Pair>
<Pair title="At 18th Level">The concealment becomes 80%.</Pair>
<Pair title="Special">This concealment lasts until the start of the meditant's next turn and stacks with any concealment provided by movement, such as from the <Link to="/feat/wind_stance">Wind Stance</Link> feat.</Pair>
</Ability>
<Ability id="arc-monk-wasteland_meditant-improved-vigor-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-wasteland_meditant-improved-vigor-ex">Improved Vigor (Ex)</Pair>
<Pair hl title="Replaces">Improved evasion</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">A wasteland meditant's <em>vigor</em> ability improves. He still takes no damage on a successful Fortitude saving throw against attacks, but henceforth he takes only half damage on a failed save.</Pair>
</Ability>
<Ability id="arc-monk-wasteland_meditant-pillar-of-salt-su" icon={["mailed-fist","armor-downgrade"]}>
<Pair single id="arc-monk-wasteland_meditant-pillar-of-salt-su" flavor="A wasteland meditant can transform a creature's body into a column of crumbling salt with a touch.">Pillar of Salt (Su)</Pair>
<Pair hl title="Replaces">Quivering palm</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">He can use <em>pillar of salt</em> once per day as part of an unarmed strike, and he must announce his intent before making his attack roll. Creatures immune to critical hits or transmutation effects cannot be affected.</Pair>
<Pair title="Info">A creature successfully damaged by the wasteland meditant's unarmed strike must succeed at a Fortitude saving throw (DC = 10 + half the monk's level + his Wisdom modifier) or begin to calcify. Each round thereafter, the target of <em>pillar of salt</em> takes 2 points of <Link to="/rule/dexterity_drain">Strength and Dexterity drain</Link> and gains a +1 bonus to its natural armor as a crust of salt begins to cover its body and restrict movement. These effects take place every round at the start of the wasteland meditant's turn and continue for 1 round per level the wasteland meditant has.</Pair>
<Pair title="Special">If the target is reduced to 0 Strength or Dexterity at any time during this duration, the creature is instantly killed and its body is transformed into a pillar of salt. A creature killed in this way can't be brought back to life except by <Link to="/spell/miracle">miracle</Link>, <Link to="/spell/true_resurrection">true resurrection</Link>, or <Link to="/spell/wish">wish</Link>. Total immersion in water suppresses the ongoing effects of <em>pillar of salt</em> but resets the accumulated natural armor bonus to zero. As long as the target lives, the ongoing effect of <em>pillar of salt</em> can be ended via a <Link to="/spell/heal">heal</Link> spell.</Pair>
</Ability>
</>};
const _water_dancer = {title: "Water Dancer", jsx: <><h2 id="arc-monk-water_dancer-water-dancer">Water Dancer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 65</Link><br/>Water dancers derive their martial training from ancient nereid traditions jealously guarded by these enigmatic fey.</p>
<Ability id="arc-monk-water_dancer-elemental-focus-su-and-sp" icon={["stairs-goal"]}>
<Pair single id="arc-monk-water_dancer-elemental-focus-su-and-sp">Elemental Focus (Su and Sp)</Pair>
<Pair hl title="Replaces">Flurry of blows, stunning fist, quivering palm</Pair>
<Pair title="Ability">A water dancer gains the <em>elemental focus</em> ability of the <Link to="/class/kineticist">kineticist</Link> class, but must choose water as his <Link to="/ability/elements">element</Link>. He gains the <Link to="/kinetic/basic_hydrokinesis">basic hydrokinesis</Link> wild talent as normal, and gains the <Link to="/kinetic/water_blast">kinetic blast</Link> feature of the kineticist class for the water element, using his monk level as his effective kineticist level. He can't use his kinetic blast when armored or encumbered.</Pair>
</Ability>
<Ability id="arc-monk-water_dancer-nereids-grace-su" icon={["armor-upgrade","info"]}>
<Pair single id="arc-monk-water_dancer-nereids-grace-su">Nereid's Grace (Su)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 1st level</Pair>
<Pair title="Passive Ability">When unarmored and unencumbered, a water dancer adds 1 point of Charisma bonus per monk level to his Armor Class as a dodge bonus. If he is caught <Link to="/rule/flat_footed">flat-footed</Link> or otherwise denied his Dexterity bonus, he also loses this bonus.</Pair>
<Pair title="Info">He uses his Charisma score instead of his Wisdom score to determine the size of his <em>ki pool</em> and the DC and effects of monk class features.</Pair>
</Ability>
<Ability id="arc-monk-water_dancer-unarmed-strike" icon={["mailed-fist","broken-shield"]}>
<Pair single id="arc-monk-water_dancer-unarmed-strike">Unarmed Strike</Pair>
<Pair hl title="Alters">Unarmed strike</Pair>
<Pair title="Ability">A water dancer gains the unarmed strike monk class feature but treats his unarmed strike damage as that of a monk 4 levels lower (minimum 1st level).</Pair>
</Ability>
<Ability id="arc-monk-water_dancer-burn-ex" icon={["stairs-goal"]}>
<Pair single id="arc-monk-water_dancer-burn-ex">Burn (Ex)</Pair>
<Pair hl title="Replaces">Evasion</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A water dancer gains the <em>burn</em> class feature of the kineticist class.</Pair>
</Ability>
<Ability id="arc-monk-water_dancer-wild-talents" icon={["stairs-goal"]}>
<Pair single id="arc-monk-water_dancer-wild-talents">Wild Talents</Pair>
<Pair hl title="Replaces">Bonus feats gained at 2nd, 6th, 10th, 14th, and 18th levels</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A water dancer selects a new <Link to="/ability/utility_wild_talents">utility wild talent</Link> from the list of options available to the kineticist class, treating his monk level - 2 (minimum 1) as his kineticist level for the purpose of fulfilling prerequisites as well as for level-dependent effects of the utility talent. He can select only universal wild talents or those that match his element (see <em>elemental focus</em> above).</Pair>
<Pair title="At 6th Level">He learns a 2nd wild talent, following the rules above. He can replace one of his utility wild talents with another wild talent of the same level or lower. He can't replace a wild talent that he used to qualify for another of his wild talents.</Pair>
<Pair title="At 10th Level">He learns a 3rd wild talent, following the rules above. He can replace one of his utility wild talents with another wild talent of the same level or lower. He can't replace a wild talent that he used to qualify for another of his wild talents.</Pair>
<Pair title="At 14th Level">He learns a 4th wild talent, following the rules above.</Pair>
<Pair title="At 16th Level">He can replace one of his utility wild talents with another wild talent of the same level or lower. He can't replace a wild talent that he used to qualify for another of his wild talents.</Pair>
<Pair title="At 18th Level">He learns a 5th wild talent, following the rules above.</Pair>
</Ability>
<Ability id="arc-monk-water_dancer-water-dance-su" icon={["stairs-goal"]}>
<Pair single id="arc-monk-water_dancer-water-dance-su">Water Dance (Su)</Pair>
<Pair hl title="Replaces">Slow fall</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A water dancer can move across any liquid surface as though it were solid ground up to a maximum distance of 20 feet before falling through the liquid's surface as normal.</Pair>
<Pair title="At 6th Level">The maximum distance becomes 2 feet.</Pair>
<Pair title="At 8th Level">The maximum distance increases to 3 feet.</Pair>
<Pair title="At 10th Level">The maximum distance becomes 4 feet. The water dancer can even move vertically up water surfaces (such as a flowing waterfall) as though under the effects of <Link to="/spell/spider_climb">spider climb</Link>. If he runs out of movement before reaching a solid surface when climbing a vertical water source, he immediately falls.</Pair>
<Pair title="At 12th Level">The maximum distance increases to 5 feet.</Pair>
<Pair title="At 14th Level">The maximum distance becomes 6 feet.</Pair>
<Pair title="At 16th Level">The maximum distance increases to 7 feet.</Pair>
<Pair title="At 18th Level">The maximum distance becomes 8 feet.</Pair>
</Ability>
<Ability id="arc-monk-water_dancer-metakinesis-su" icon={["magic-swirl"]}>
<Pair single id="arc-monk-water_dancer-metakinesis-su">Metakinesis (Su)</Pair>
<Pair hl title="Replaces">Improved evasion</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A water dancer gains the ability to alter his kinetic blasts as the kineticist's <em>metakinesis (empower)</em> class feature.</Pair>
</Ability>
<Ability id="arc-monk-water_dancer-water-stride-sp" icon={["magic-swirl"]}>
<Pair single id="arc-monk-water_dancer-water-stride-sp">Water Stride (Sp)</Pair>
<Pair hl title="Replaces">Abundant step</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Move-Equivalent Action">A water dancer can leap from one source of water to another as per <Link to="/spell/dimension_door">dimension door</Link> by expending 1 point of ki from his <em>ki pool.</em> He must begin and end his movement in a space of water equal to his size. He cannot take other creatures with him when he uses this ability.</Pair>
</Ability>
</>};
const _weapon_adept = {title: "Weapon Adept", jsx: <><h2 id="arc-monk-weapon_adept-weapon-adept">Weapon Adept</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 114</Link><br/>While all monks train in both unarmed combat and with weapons, the weapon adept seeks to become one with his weapons, transforming them into perfect extensions of his own body. Through such training, a weapon adept seeks to attain perfection by becoming a living weapon himself. A weapon adept has the following class features.</p>
<Ability id="arc-monk-weapon_adept-perfect-strike-ex" icon={["stairs-goal","rolling-dices"]}>
<Pair single id="arc-monk-weapon_adept-perfect-strike-ex">Perfect Strike (Ex)</Pair>
<Pair hl title="Replaces">Stunning Fist</Pair>
<Pair title="At 1st Level">A weapon adept gains <Link to="/feat/perfect_strike">Perfect Strike</Link> as a bonus feat, even if he does not meet the prerequisites.</Pair>
<Pair title="At 10th Level">The monk can roll his attack roll three times and take the higher result. If one of these rolls is a critical threat, he can choose which one of his other two rolls to use as his confirmation roll.</Pair>
</Ability>
<Ability id="arc-monk-weapon_adept-way-of-the-weapon-master-ex" icon={["stairs-goal"]}>
<Pair single id="arc-monk-weapon_adept-way-of-the-weapon-master-ex">Way of the Weapon Master (Ex)</Pair>
<Pair hl title="Replaces">Evasion</Pair>
<Pair title="At 2nd Level">A weapon adept gains <Link to="/feat/weapon_focus">Weapon Focus</Link> as a bonus feat with one of his monk weapons.</Pair>
<Pair title="At 6th Level">The monk gains <Link to="/feat/weapon_specialization">Weapon Specialization</Link> with the same weapon as a bonus feat, even if he does not meet the prerequisites.</Pair>
</Ability>
<Ability id="arc-monk-weapon_adept-evasion-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-monk-weapon_adept-evasion-ex">Evasion (Ex)</Pair>
<Pair hl title="Replaces">Improved evasion</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">The monk gains <Link to="/ability/evasion">evasion</Link>.</Pair>
</Ability>
<Ability id="arc-monk-weapon_adept-uncanny-initiative-ex" icon={["rolling-dices"]}>
<Pair single id="arc-monk-weapon_adept-uncanny-initiative-ex">Uncanny Initiative (Ex)</Pair>
<Pair hl title="Replaces">Timeless body</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">A weapon adept does not need to roll for initiative. He always treats his initiative roll as if it resulted in any number of his choosing (from 1 to 20).</Pair>
</Ability>
<Ability id="arc-monk-weapon_adept-pure-power" icon={["upgrade"]}>
<Pair single id="arc-monk-weapon_adept-pure-power">Pure Power</Pair>
<Pair hl title="Replaces">Perfect self</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">A weapon adept forsakes the ideals of the perfect self to become a bastion of the physical and mental virtues monks hold dear. The monk gains a +2 bonus to Strength, Dexterity, and Wisdom.</Pair>
</Ability>
</>};
const _wildcat = {title: "Wildcat", jsx: <><h2 id="arc-monk-wildcat-wildcat">Wildcat</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 105</Link><br/>A wildcat is a student of the school of hard knocks, who dedicates himself to learning how to take down foes by any means necessary. A wildcat isn't afraid to smash a tankard over a foe's head, stomp an opponent's foot, gouge an eye, or generally create mayhem to gain any possible advantage.</p>
<Ability id="arc-monk-wildcat-ready-for-anything-ex" icon={["upgrade"]}>
<Pair single id="arc-monk-wildcat-ready-for-anything-ex">Ready for Anything (Ex)</Pair>
<Pair hl title="Replaces">Still mind</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A wildcat gains a +2 bonus on initiative checks and Perception checks to act in a surprise round.</Pair>
</Ability>
<Ability id="arc-monk-wildcat-brawler-maneuver-training-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-monk-wildcat-brawler-maneuver-training-ex" flavor="A wildcat gains additional training with the dirty tricks.">Brawler Maneuver Training (Ex)</Pair>
<Pair hl title="Replaces">Ki pool, high jump</Pair>
<Pair title="At 4th Level">He gains a +1 bonus on combat maneuver checks when attempting a <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver and a +1 bonus to his CMD when defending against this maneuver.</Pair>
<Pair title="At 7th Level">A wildcat becomes further trained in another combat maneuver, gaining the above +1 bonus on combat maneuver checks and to CMD.</Pair>
<Pair title="At 10th Level">A wildcat becomes further trained in another combat maneuver, gaining the above +1 bonus on combat maneuver checks and to CMD.</Pair>
<Pair title="At 16th Level">A wildcat becomes further trained in another combat maneuver, gaining the above +1 bonus on combat maneuver checks and to CMD.</Pair>
<Pair title="Special">When he becomes trained in a new maneuver, the bonuses granted by previous <em>maneuver training</em> increase by 1 each. For example, when a wildcat reaches 7th level, he gains a +1 bonus on one type of combat maneuver, +1 to her CMD against that combat maneuver, and the bonuses for the dirty trick combat maneuver increase to +2.</Pair>
</Ability>
<Ability id="arc-monk-wildcat-improvised-weapon-mastery-ex" icon={["upgrade"]}>
<Pair single id="arc-monk-wildcat-improvised-weapon-mastery-ex">Improvised Weapon Mastery (Ex)</Pair>
<Pair hl title="Replaces">All instances of slow fall</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A wildcat's damage with improvised weapons increases. When wielding an <Link to="/misc/improvised_weapon">improvised weapon</Link>, he uses the unarmed strike damage of a monk four levels lower instead of the base damage for that weapon (minimum monk level 1). For example, a 6th-level Medium wildcat wielding a broken bottle deals 1d6 points of damage instead of the weapon's normal 1d4. If the weapon normally deals more damage than this, its damage is unchanged. This increase in damage does not affect any other aspect of the weapon.</Pair>
<Pair title="Special">The wildcat can decide to use the weapon's base damage instead of his adjusted unarmed strike damage. This must be declared before the attack roll is attempted.</Pair>
</Ability>
<Ability id="arc-monk-wildcat-bonus-feat" icon={["stairs-goal"]}>
<Pair single id="arc-monk-wildcat-bonus-feat">Bonus Feat</Pair>
<Pair title="At 6th Level">A wildcat adds the following feats to his list of bonus feats: <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link>, <Link to="/feat/improved_reposition">Improved Reposition</Link>, <Link to="/feat/improved_steal">Improved Steal</Link>.</Pair>
<Pair title="At 10th Level">He adds the following feats, too: <Link to="/feat/quick_dirty_trick">Quick Dirty Trick</Link>, <Link to="/feat/quick_reposition">Quick Reposition</Link>, <Link to="/feat/quick_steal">Quick Steal</Link>.</Pair>
</Ability>
<Ability id="arc-monk-wildcat-knockout-ex" icon={["mailed-fist","armor-downgrade"]}>
<Pair single id="arc-monk-wildcat-knockout-ex">Knockout (Ex)</Pair>
<Pair hl title="Replaces">Improved evasion, abundant step</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">Once per day a wildcat can unleash a devastating attack that can instantly knock a target unconscious. He must announce this intent before making his attack roll. If the wildcat's strike is successful and the target takes damage from the blow, the target must succeed at a Fortitude saving throw (DC = 10 + 1/2 the wildcat's level + the higher of the wildcat's Strength or Dexterity modifier) or fall <Link to="/misc/unconscious">unconscious</Link> for 1d6 rounds. Each round on its turn, the unconscious target can attempt a new saving throw to end the effect; this is a <strong className="hl">full-round action</strong> that does <strong className="hl">not</strong> provoke attacks of opportunity.</Pair>
<Pair title="At 12th Level">A wildcat can use this ability twice per day.</Pair>
<Pair title="Special">Creatures immune to critical hits or nonlethal damage are immune to this ability.</Pair>
</Ability>
<Ability id="arc-monk-wildcat-turn-the-tables-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-monk-wildcat-turn-the-tables-ex">Turn the Tables (Ex)</Pair>
<Pair hl title="Replaces">Diamond soul</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Passive Ability">Opponents provoke an attack of opportunity from the wildcat whenever they fail at a combat maneuver against the wildcat.</Pair>
</Ability>
<Ability id="arc-monk-wildcat-dirty-blow-ex" icon={["upgrade"]}>
<Pair single id="arc-monk-wildcat-dirty-blow-ex">Dirty Blow (Ex)</Pair>
<Pair hl title="Replaces">Empty body</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Ability">When a wildcat succeeds at a dirty trick combat maneuver, he can deal his unarmed strike damage to that opponent.</Pair>
</Ability>
</>};
const _windstep_master = {title: "Windstep Master", jsx: <><h2 id="arc-monk-windstep_master-windstep-master">Windstep Master</h2>
<p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 17</Link><br/>Most monks are agile and fleet of foot, but few can rival a windstep master's lightness of step. Windstep masters train in mountaintop monasteries and other holy houses dedicated to the wind, such as the Monastery of Unfolding Wind in Niswan.</p>
<Ability id="arc-monk-windstep_master-hurricane-punch-ex" icon={["stairs-goal"]}>
<Pair single id="arc-monk-windstep_master-hurricane-punch-ex">Hurricane Punch (Ex)</Pair>
<Pair hl title="Replaces">Stunning fist</Pair>
<Pair title="At 1st Level">A windstep master gains <Link to="/feat/hurricane_punch">Hurricane Punch</Link> as a bonus feat, even if he does not meet the prerequisites. While using this feat, he doesn't provoke an attack of opportunity, even if he doesn't have the <Link to="/feat/improved_bull_rush">Improved Bull Rush</Link> feat.</Pair>
<Pair title="At 4th Level">While using the Hurricane Punch feat, the windstep master can <Link to="/rule/bull_rush">bull rush</Link> a target up to two size categories larger.</Pair>
<Pair title="At 8th Level">When the windstep master uses the Hurricane Punch feat to successfully bull rush a creature, he can push the creature back an additional 5 feet.</Pair>
<Pair title="At 12th Level">The windstep master's Hurricane Punch target can be up to three size categories larger.</Pair>
<Pair title="At 16th Level">He can now push the target of his Hurricane Punch bull rush back an additional 10 feet.</Pair>
<Pair title="At 20th Level">The Hurricane Punch target can be of any size category.</Pair>
</Ability>
<Ability id="arc-monk-windstep_master-wind-step-su" icon={["stairs-goal"]}>
<Pair single id="arc-monk-windstep_master-wind-step-su" flavor="The windstep master's steps become supernaturally light.">Wind Step (Su)</Pair>
<Pair hl title="Replaces">Slow fall</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Move-Equivalent Action">He can use <Link to="/spell/air_walk">air walk</Link> (as per the spell) up to a distance equal to his fast movement bonus. He must reach a solid, level surface able to support his weight by the end of his turn or he falls.</Pair>
</Ability>
<Ability id="arc-monk-windstep_master-swift-ki-su" icon={["magic-swirl","upgrade"]}>
<Pair single id="arc-monk-windstep_master-swift-ki-su">Swift Ki (Su)</Pair>
<Pair hl title="Replaces">The ability to spend ki to increase his base speed</Pair>
<Pair hl title="Alters">Ki pool</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Swift Action">The windstep master can spend 1 point from his <em>ki pool</em> to sustain his <em>wind step</em> for 1 minute. During this time, the windstep master can remain airborne even if he doesn't reach a solid surface.</Pair>
<Pair title="Ability">He can also spend 1 point from his <em>ki pool</em> as a <strong className="hl">swift action</strong> to increase his wind step distance by 20 feet for 1 round.</Pair>
</Ability>
</>};
const _windstep_master_uc = {title: "Windstep Master (Unchained)", topLink: ["Unchained Monk","class/unchained_monk"], jsx: <><h2 id="arc-monk-windstep_master_uc-windstep-master">Windstep Master</h2>
<p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 17</Link><br/>Most monks are agile and fleet of foot, but few can rival a windstep master's lightness of step. Windstep masters train in mountaintop monasteries and other holy houses dedicated to the wind, such as the Monastery of Unfolding Wind in Niswan.</p>
<Ability id="arc-monk-windstep_master_uc-hurricane-punch-ex" icon={["stairs-goal"]}>
<Pair single id="arc-monk-windstep_master_uc-hurricane-punch-ex">Hurricane Punch (Ex)</Pair>
<Pair hl title="Replaces">Stunning fist</Pair>
<Pair title="At 1st Level">A windstep master gains <Link to="/feat/hurricane_punch">Hurricane Punch</Link> as a bonus feat, even if he does not meet the prerequisites. While using this feat, he doesn't provoke an attack of opportunity, even if he doesn't have the <Link to="/feat/improved_bull_rush">Improved Bull Rush</Link> feat.</Pair>
<Pair title="At 4th Level">While using the Hurricane Punch feat, the windstep master can <Link to="/rule/bull_rush">bull rush</Link> a target up to two size categories larger.</Pair>
<Pair title="At 8th Level">When the windstep master uses the Hurricane Punch feat to successfully bull rush a creature, he can push the creature back an additional 5 feet.</Pair>
<Pair title="At 12th Level">The windstep master's Hurricane Punch target can be up to three size categories larger.</Pair>
<Pair title="At 16th Level">He can now push the target of his Hurricane Punch bull rush back an additional 10 feet.</Pair>
<Pair title="At 20th Level">The Hurricane Punch target can be of any size category.</Pair>
</Ability>
<Ability id="arc-monk-windstep_master_uc-wind-step-su" icon={["stairs-goal"]}>
<Pair single id="arc-monk-windstep_master_uc-wind-step-su" flavor="The windstep master's steps become supernaturally light.">Wind Step (Su)</Pair>
<Pair hl title="Replaces">4th-level ki power</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Move-Equivalent Action">He can use <Link to="/spell/air_walk">air walk</Link> (as per the spell) up to a distance equal to his fast movement bonus. He must reach a solid, level surface able to support his weight by the end of his turn or he falls.</Pair>
</Ability>
<Ability id="arc-monk-windstep_master_uc-swift-ki-su" icon={["magic-swirl","upgrade"]}>
<Pair single id="arc-monk-windstep_master_uc-swift-ki-su">Swift Ki (Su)</Pair>
<Pair hl title="Replaces">The ability to spend ki to increase his base speed</Pair>
<Pair hl title="Alters">Ki pool</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Swift Action">The windstep master can spend 1 point from his <em>ki pool</em> to sustain his <em>wind step</em> for 1 minute. During this time, the windstep master can remain airborne even if he doesn't reach a solid surface.</Pair>
<Pair title="Ability">He can also spend 1 point from his <em>ki pool</em> as a <strong className="hl">swift action</strong> to increase his wind step distance by 20 feet for 1 round.</Pair>
</Ability>
</>};
const _zen_archer = {title: "Zen Archer", jsx: <><h2 id="arc-monk-zen_archer-zen-archer">Zen Archer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 115</Link><br/>Some monks seek to become one with another weapon entirely - the bow. The zen archer takes a weapon most other monks eschew and seeks perfection in the pull of a taut bowstring, the flex of a bow's limbs, and the flight of an arrow fired true.</p>
<Ability id="arc-monk-zen_archer-weapon-and-armor-proficiency" icon={["stairs-goal"]}>
<Pair single id="arc-monk-zen_archer-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair title="Info">Zen archers are proficient with <Link to="/eq-weapon/longbow">longbows</Link>, <Link to="/eq-weapon/shortbow">shortbows</Link>, <Link to="/eq-weapon/composite_longbow">composite longbows</Link>, and <Link to="/eq-weapon/composite_shortbow">composite shortbows</Link> in addition to their normal weapon proficiencies.</Pair>
</Ability>
<Ability id="arc-monk-zen_archer-flurry-of-blows-ex" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-monk-zen_archer-flurry-of-blows-ex">Flurry of Blows (Ex)</Pair>
<Pair hl title="Alters">Flurry of blows</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A zen archer can make a <em>flurry of blows</em> as a full-attack action, but only when using a bow (even though it is a ranged weapon). He may not make a <em>flurry of blows</em> with his unarmed attacks or any other weapons. A zen archer does not apply his Strength bonus on damage rolls made with <em>flurry of blows</em> unless he is using a composite bow with a Strength rating. A zen archer's <em>flurry of blows</em> otherwise functions as normal for a monk of his level.</Pair>
<Pair title="Special">A zen archer cannot use <Link to="/feat/rapid_shot">Rapid Shot</Link> or <Link to="/feat/manyshot">Manyshot</Link> when making a <em>flurry of blows</em> with his bow.</Pair>
</Ability>
<Ability id="arc-monk-zen_archer-bonus-feats" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-monk-zen_archer-bonus-feats">Bonus Feats</Pair>
<Pair hl title="Replaces">The monk's normal bonus feats</Pair>
<Pair title="At 1st Level">A zen archer's bonus feats must be taken from the following list: <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/deflect_arrows">Deflect Arrows</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/far_shot">Far Shot</Link>, <Link to="/feat/point_blank_shot">Point-Blank Shot</Link>, <Link to="/feat/precise_shot">Precise Shot</Link>, and Rapid Shot.</Pair>
<Pair title="At 6th Level">The following feats are added to the list: <Link to="/feat/focused_shot">Focused Shot</Link>, <Link to="/feat/improved_precise_shot">Improved Precise Shot</Link>, Manyshot, <Link to="/feat/mobility">Mobility</Link>, and <Link to="/feat/parting_shot">Parting Shot</Link>.</Pair>
<Pair title="At 10th Level">The following feats are added to the list: <Link to="/feat/improved_critical">Improved Critical</Link>, <Link to="/feat/pinpoint_targeting">Pinpoint Targeting</Link>, <Link to="/feat/shot_on_the_run">Shot on the Run</Link>, and <Link to="/feat/snatch_arrows">Snatch Arrows</Link>.</Pair>
<Pair title="Special">A monk need not have any of the prerequisites normally required for these feats to select them.</Pair>
</Ability>
<Ability id="arc-monk-zen_archer-perfect-strike-ex" icon={["stairs-goal","rolling-dices"]}>
<Pair single id="arc-monk-zen_archer-perfect-strike-ex">Perfect Strike (Ex)</Pair>
<Pair hl title="Replaces">Stunning Fist</Pair>
<Pair title="At 1st Level">A zen archer gains <Link to="/feat/perfect_strike">Perfect Strike</Link> as a bonus feat, even if he does not meet the prerequisites. A zen archer can use Perfect Strike with any bow.</Pair>
<Pair title="At 10th Level">The monk can roll his attack roll three times and take the highest result. If one of these rolls is a critical threat, the monk must choose one of his other two rolls to use as his confirmation roll.</Pair>
</Ability>
<Ability id="arc-monk-zen_archer-way-of-the-bow-ex" icon={["stairs-goal"]}>
<Pair single id="arc-monk-zen_archer-way-of-the-bow-ex">Way of the Bow (Ex)</Pair>
<Pair hl title="Replaces">Evasion</Pair>
<Pair title="At 2nd Level">A zen archer gains <Link to="/feat/weapon_focus">Weapon Focus</Link> as a bonus feat with one type of bow.</Pair>
<Pair title="At 6th Level">The monk gains <Link to="/feat/weapon_specialization">Weapon Specialization</Link> with the same weapon as a bonus feat, even if he does not meet the prerequisites.</Pair>
</Ability>
<Ability id="arc-monk-zen_archer-zen-archery-ex" icon={["upgrade"]}>
<Pair single id="arc-monk-zen_archer-zen-archery-ex">Zen Archery (Ex)</Pair>
<Pair hl title="Replaces">Maneuver training</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A zen archer may use his Wisdom modifier instead of his Dexterity modifier on ranged attack rolls when using a bow.</Pair>
</Ability>
<Ability id="arc-monk-zen_archer-point-blank-master-ex" icon={["stairs-goal"]}>
<Pair single id="arc-monk-zen_archer-point-blank-master-ex">Point Blank Master (Ex)</Pair>
<Pair hl title="Replaces">Still mind</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A zen archer gains <Link to="/feat/point_blank_master">Point-Blank Master</Link> as a bonus feat, even if he does not meet the prerequisites.</Pair>
</Ability>
<Ability id="arc-monk-zen_archer-ki-pool-su" icon={["bowman"]}>
<Pair single id="arc-monk-zen_archer-ki-pool-su">Ki Pool (Su)</Pair>
<Pair hl title="Alters">Ki pool</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">In addition to the normal abilities of his <em>ki pool,</em> a zen archer may spend 1 point from his <em>ki pool</em> to increase the range increment for his bow by 50 feet for 1 round.</Pair>
</Ability>
<Ability id="arc-monk-zen_archer-ki-arrows-su" icon={["upgrade","bowman"]}>
<Pair single id="arc-monk-zen_archer-ki-arrows-su">Ki Arrows (Su)</Pair>
<Pair hl title="Replaces">Purity of body</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Swift Action">A zen archer may spend 1 point from his <em>ki pool</em> to change the damage dice of arrows he shoots to that of his unarmed strikes. This lasts until the start of his next turn. For example, a Medium zen archer's short bow normally deals 1d6 damage; using this ability, his arrows deal 1d8 damage until the start of his next turn.</Pair>
</Ability>
<Ability id="arc-monk-zen_archer-reflexive-shot-ex" icon={["stairs-goal"]}>
<Pair single id="arc-monk-zen_archer-reflexive-shot-ex">Reflexive Shot (Ex)</Pair>
<Pair hl title="Replaces">Improved evasion</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A zen archer can make attacks of opportunity with arrows from his bow. The monk still threatens squares he could reach with unarmed strikes, and can still only make one attack of opportunity per round (unless he has Combat Reflexes).</Pair>
</Ability>
<Ability id="arc-monk-zen_archer-trick-shot-su" icon={["bowman","armor-downgrade"]}>
<Pair single id="arc-monk-zen_archer-trick-shot-su" flavor="A zen archer may hit targets that he might otherwise miss.">Trick Shot (Su)</Pair>
<Pair hl title="Replaces">Diamond body</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Swift Action">By spending 1 point from his <em>ki pool,</em> the zen archer can ignore <Link to="/rule/concealment">concealment</Link>. By spending 2 points, he can ignore total concealment or <Link to="/rule/cover">cover</Link>. By spending 3 points, he can ignore total cover, even firing arrows around corners. The arrow must still be able to reach the target; a target inside a closed building with no open doors or windows cannot be attacked. These effects last for 1 round.</Pair>
</Ability>
<Ability id="arc-monk-zen_archer-ki-focus-bow-su" icon={["upgrade"]}>
<Pair single id="arc-monk-zen_archer-ki-focus-bow-su">Ki Focus Bow (Su)</Pair>
<Pair hl title="Replaces">Tongue of the sun and moon</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">As long as he has at least 1 point of ki in his <em>ki pool,</em> a zen archer may treat arrows fired from his bow as if they were <Link to="/magic-enh/ki_focus">ki focus</Link> weapons, allowing him to use his special ki attacks as if his arrows were unarmed attacks.</Pair>
</Ability>
</>};
export default {perfect_scholar:_perfect_scholar,perfect_scholar_uc:_perfect_scholar_uc,qinggong_monk:_qinggong_monk,sage_counselor:_sage_counselor,sage_counselor_uc:_sage_counselor_uc,scaled_fist:_scaled_fist,scaled_fist_uc:_scaled_fist_uc,scarred_monk:_scarred_monk,sensei:_sensei,serpent_fire_adept:_serpent_fire_adept,serpent_fire_adept_uc:_serpent_fire_adept_uc,sin_monk:_sin_monk,softstrike_monk:_softstrike_monk,softstrike_monk_uc:_softstrike_monk_uc,sohei:_sohei,soul_shepherd:_soul_shepherd,soul_shepherd_uc:_soul_shepherd_uc,spirit_master:_spirit_master,student_of_stone:_student_of_stone,terra_cotta_monk:_terra_cotta_monk,tetori:_tetori,treetop_monk:_treetop_monk,underfoot_adept:_underfoot_adept,wanderer:_wanderer,wasteland_meditant:_wasteland_meditant,water_dancer:_water_dancer,weapon_adept:_weapon_adept,wildcat:_wildcat,windstep_master:_windstep_master,windstep_master_uc:_windstep_master_uc,zen_archer:_zen_archer}