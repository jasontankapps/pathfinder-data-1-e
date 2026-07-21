import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
const _not_found = {title: "Error", jsx: <><p>Unable to find the requested bardic performance.</p>
</>};
const _countersong = {title: "Countersong", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 36</Link></p>
<Ability id="countersong-su" icon={["shield-reflect","armor-upgrade"]}>
<Pair single id="countersong-su">Countersong (Su)</Pair>
<Pair title="At 1st Level"><p>A bard learns to counter magic effects that depend on sound (but not spells that have verbal components). Each round of the <em>countersong</em> he makes a <Link to="/skill/perform">Perform</Link> (keyboard, percussion, wind, string, or sing) skill check. Any creature within 30 feet of the bard (including the bard himself) that is affected by a sonic or language-dependent magical attack may use the bard's Perform check result in place of its saving throw if, after the saving throw is rolled, the Perform check result proves to be higher.</p>
<p>If a creature within range of the <em>countersong</em> is already under the effect of a non-instantaneous sonic or language-dependent magical attack, it gains another saving throw against the effect each round it hears the <em>countersong,</em> but it must use the bard's Perform skill check result for the save.</p>
</Pair>
<Pair title="Special"><em>Countersong</em> does not work on effects that don't allow saves. <em>Countersong</em> relies on audible components.</Pair>
</Ability>
</>};
const _distraction = {title: "Distraction", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 36</Link></p>
<Ability id="distraction-su" icon={["shield-reflect","armor-upgrade"]}>
<Pair single id="distraction-su">Distraction (Su)</Pair>
<Pair title="At 1st Level"><p>A bard can use his performance to counter magic effects that depend on sight. Each round of the <em>distraction,</em> he makes a <Link to="/skill/perform">Perform</Link> (act, comedy, dance, or oratory) skill check. Any creature within 30 feet of the bard (including the bard himself) that is affected by an illusion (pattern) or illusion (figment) magical attack may use the bard's Perform check result in place of its saving throw if, after the saving throw is rolled, the Perform skill check proves to be higher.</p>
<p>If a creature within range of the <em>distraction</em> is already under the effect of a non-instantaneous illusion (pattern) or illusion (figment) magical attack, it gains another saving throw against the effect each round it sees the <em>distraction</em>, but it must use the bard's Perform skill check result for the save.</p>
</Pair>
<Pair title="Special"><em>Distraction</em> does not work on effects that don't allow saves. <em>Distraction</em> relies on visual components.</Pair>
</Ability>
</>};
const _fascinate = {title: "Fascinate", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 37</Link></p>
<Ability id="fascinate-su" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="fascinate-su">Fascinate (Su)</Pair>
<Pair title="At 1st Level"><p>A bard can use his performance to cause one or more creatures to become <Link to="/misc/fascinated">fascinated</Link> with him. Each creature to be <em>fascinated</em> must be within 90 feet, able to see and hear the bard, and capable of paying attention to him. The bard must also be able to see the creatures affected. The distraction of a nearby combat or other dangers prevents this ability from working.</p>
<p>Each creature within range receives a Will save (DC 10 + 1/2 the bard's level + the bard's Cha modifier) to negate the effect. If a creature's saving throw succeeds, the bard cannot attempt to <em>fascinate</em> that creature again for 24 hours. If its saving throw fails, the creature sits quietly and observes the performance for as long as the bard continues to maintain it. While <em>fascinated,</em> a target takes a -4 penalty on all skill checks made as reactions, such as Perception checks. Any potential threat to the target allows the target to make a new saving throw against the effect. Any obvious threat, such as someone drawing a weapon, casting a spell, or aiming a weapon at the target, automatically breaks the effect.</p>
</Pair>
<Pair title="At 1st Level">The bard can <em>fascinate</em> one creature.</Pair>
<Pair title="At 4th Level">The number of creatures the bard can <em>fascinate</em> becomes 2.</Pair>
<Pair title="At 7th Level">The number of creatures the bard can <em>fascinate</em> increases to 3.</Pair>
<Pair title="At 10th Level">The number of creatures the bard can <em>fascinate</em> becomes 4.</Pair>
<Pair title="At 13th Level">The number of creatures the bard can <em>fascinate</em> increases to 5.</Pair>
<Pair title="At 16th Level">The number of creatures the bard can <em>fascinate</em> becomes 6.</Pair>
<Pair title="At 19th Level">The number of creatures the bard can <em>fascinate</em> increases to 7.</Pair>
<Pair title="Special"><em>Fascinate</em> is an enchantment (compulsion), mind-affecting ability. <em>Fascinate</em> relies on audible and visual components in order to function.</Pair>
</Ability>
</>};
const _inspire_courage = {title: "Inspire Courage", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 37</Link></p>
<Ability id="inspire-courage-su" icon={["upgrade"]}>
<Pair single id="inspire-courage-su">Inspire Courage (Su)</Pair>
<Pair title="At 1st Level">A bard can use his performance to <em>inspire courage</em> in his allies (including himself), bolstering them against fear and improving their combat abilities. To be affected, an ally must be able to perceive the bard's performance. An affected ally receives a +1 morale bonus on saving throws against charm and fear effects and a +1 competence bonus on attack and weapon damage rolls.</Pair>
<Pair title="At 5th Level">These bonuses become +2.</Pair>
<Pair title="At 11th Level">These bonuses increase to +3.</Pair>
<Pair title="At 17th Level">These bonuses become +4.</Pair>
<Pair title="Special"><em>Inspire courage</em> is a mind-affecting ability. <em>Inspire courage</em> can use audible or visual components. The bard must choose which component to use when starting his performance.</Pair>
</Ability>
</>};
const _inspire_competence = {title: "Inspire Competence", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 37</Link></p>
<Ability id="inspire-competence-su" icon={["upgrade"]}>
<Pair single id="inspire-competence-su">Inspire Competence (Su)</Pair>
<Pair title="At 1st Level">A bard can use his performance to help an ally succeed at a task. That ally must be within 30 feet and be able to hear the bard. The ally gets a +2 competence bonus on skill checks with a particular skill as long as she continues to hear the bard's performance.</Pair>
<Pair title="At 7th Level">This bonus becomes +3.</Pair>
<Pair title="At 11th Level">This bonus increases to +4.</Pair>
<Pair title="At 15th Level">This bonus becomes +5.</Pair>
<Pair title="At 19th Level">This bonus increases to +6.</Pair>
<Pair title="Special">Certain uses of this ability are infeasible, such as Stealth, and may be disallowed at the GM's discretion. A bard can't <em>inspire competence</em> in himself. <em>Inspire competence</em> relies on audible components.</Pair>
</Ability>
</>};
const _suggestion = {title: "Suggestion", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 37</Link></p>
<Ability id="suggestion-sp" icon={["magic-swirl"]}>
<Pair single id="suggestion-sp">Suggestion (Sp)</Pair>
<Pair title="At 6th Level">A bard can use his performance to make a <Link to="/spell/suggestion">suggestion</Link> (as per the spell) to a creature he has already <Link to="/performance/fascinate">fascinated</Link>. Using this ability does not disrupt the <em>fascinate</em> effect, but it does require a <strong className="hl">standard action</strong> to activate (in addition to the <strong className="hl">free action</strong> to continue the <em>fascinate</em> effect). A bard can use this ability more than once against an individual creature during an individual performance.</Pair>
<Pair title="Special">Making a <em>suggestion</em> does not count against a bard's daily use of bardic performance. A Will saving throw (DC 10 + 1/2 the bard's level + the bard's Cha modifier) negates the effect. This ability affects only a single creature. <em>Suggestion</em> is an enchantment (compulsion), mind affecting, language-dependent ability and relies on audible components.</Pair>
</Ability>
</>};
const _dirge_of_doom = {title: "Dirge of Doom", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 37</Link></p>
<Ability id="dirge-of-doom-su" icon={["armor-downgrade"]}>
<Pair single id="dirge-of-doom-su">Dirge of Doom (Su)</Pair>
<Pair title="At 8th Level">A bard can use his performance to foster a sense of growing dread in his enemies, causing them to become <Link to="/misc/shaken">shaken</Link>. To be affected, an enemy must be within 30 feet and able to see and hear the bard's performance. The effect persists for as long as the enemy is within 30 feet and the bard continues his performance.</Pair>
<Pair title="Special">This performance cannot cause a creature to become <Link to="/misc/frightened">frightened</Link> or <Link to="/misc/panicked">panicked</Link>, even if the targets are already shaken from another effect. <em>Dirge of doom</em> is a mind-affecting fear effect, and it relies on audible and visual components.</Pair>
</Ability>
</>};
const _inspire_greatness = {title: "Inspire Greatness", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 37</Link></p>
<Ability id="inspire-greatness-su" icon={["remedy","upgrade","armor-upgrade"]}>
<Pair single id="inspire-greatness-su">Inspire Greatness (Su)</Pair>
<Pair title="At 9th Level">A bard can use his performance to <em>inspire greatness</em> in himself or a single willing ally within 30 feet, granting extra fighting capability. To <em>inspire greatness,</em> all of the targets must be able to see and hear the bard. A creature <em>inspired with greatness</em> gains 2 bonus Hit Dice (d10s), the commensurate number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> (apply the target's Constitution modifier, if any, to these bonus Hit Dice), a +2 competence bonus on attack rolls, and a +1 competence bonus on Fortitude saves. The bonus Hit Dice count as regular Hit Dice for determining the effect of spells that are Hit Dice dependent.</Pair>
<Pair title="At 12th Level">The number of creatures he can target becomes 2.</Pair>
<Pair title="At 15th Level">The number of creatures he can target increases to 3.</Pair>
<Pair title="At 18th Level">The number of creatures he can target becomes 4.</Pair>
<Pair title="Special"><em>Inspire greatness</em> is a mind-affecting ability and it relies on audible and visual components.</Pair>
</Ability>
</>};
const _soothing_performance = {title: "Soothing Performance", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 38</Link></p>
<Ability id="soothing-performance-su" icon={["remedy"]}>
<Pair single id="soothing-performance-su">Soothing Performance (Su)</Pair>
<Pair title="At 12th Level">A bard can use his performance to create an effect equivalent to a <Link to="/spell/mass_cure_serious_wounds">mass cure serious wounds</Link>, using the bard's level as the caster level. In addition, this performance removes the fatigued, sickened, and shaken conditions from all those affected.</Pair>
<Pair title="Special">Using this ability requires 4 rounds of continuous performance, and the targets must be able to see and hear the bard throughout the performance. <em>Soothing performance</em> affects all targets that remain within 30 feet throughout the performance. <em>Soothing performance</em> relies on audible and visual components.</Pair>
</Ability>
</>};
const _frightening_tune = {title: "Frightening Tune", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 38</Link></p>
<Ability id="frightening-tune-sp" icon={["armor-downgrade"]}>
<Pair single id="frightening-tune-sp">Frightening Tune (Sp)</Pair>
<Pair title="At 14th Level">A bard can use his performance to cause fear in his enemies. To be affected, an enemy must be able to hear the bard perform and be within 30 feet. Each enemy within range receives a Will save (DC 10 + 1/2 the bard's level + the bard's Cha modifier) to negate the effect. If the save succeeds, the creature is immune to this ability for 24 hours. If the save fails, the target becomes <Link to="/misc/frightened">frightened</Link> and flees for as long as the target can hear the bard's performance.</Pair>
<Pair title="Special"><em>Frightening tune</em> relies on audible components.</Pair>
</Ability>
</>};
const _inspire_heroics = {title: "Inspire Heroics", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 38</Link></p>
<Ability id="inspire-heroics-su" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="inspire-heroics-su">Inspire Heroics (Su)</Pair>
<Pair title="At 15th Level">A bard can inspire tremendous heroism in himself or a single ally within 30 feet. Inspired creatures gain a +4 morale bonus on saving throws and a +4 dodge bonus to AC.</Pair>
<Pair title="At 18th Level">The number of creatures he can <em>inspire</em> becomes 2.</Pair>
<Pair title="Special">To <em>inspire heroics,</em> all of the targets must be able to see and hear the bard. This effect lasts for as long as the targets are able to witness the performance. <em>Inspire heroics</em> is a mind-affecting ability that relies on audible and visual components.</Pair>
</Ability>
</>};
const _mass_suggestion = {title: "Mass Suggestion", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 38</Link></p>
<Ability id="mass-suggestion-sp" icon={["magic-swirl","upgrade"]}>
<Pair single id="mass-suggestion-sp">Mass Suggestion (Sp)</Pair>
<Pair title="At 18th Level">This ability functions just like <Link to="/performance/suggestion">suggestion</Link>, but allows a bard to make a <em>suggestion</em> simultaneously to any number of creatures that he has already <em>fascinated.</em></Pair>
<Pair title="Special"><em>Mass suggestion</em> is an enchantment (compulsion), mind-affecting, language-dependent ability that relies on audible components.</Pair>
</Ability>
</>};
const _deadly_performance = {title: "Deadly Performance", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 38</Link></p>
<Ability id="deadly-performance-su" icon={["armor-downgrade"]}>
<Pair single id="deadly-performance-su">Deadly Performance (Su)</Pair>
<Pair title="At 20th Level">A bard can use his performance to cause one enemy to die from joy or sorrow. To be affected, the target must be able to see and hear the bard perform for 1 full round and be within 30 feet. The target receives a Will save (DC 10 + 1/2 the bard's level + the bard's Cha modifier) to negate the effect. If a creature's saving throw succeeds, the target is <Link to="/misc/staggered">staggered</Link> for 1d4 rounds, and the bard cannot use <em>deadly performance</em> on that creature again for 24 hours. If a creature's saving throw fails, it dies.</Pair>
<Pair title="Special"><em>Deadly performance</em> is a mind-affecting death effect that relies on audible and visual components.</Pair>
</Ability>
</>};
export default {not_found:_not_found,countersong:_countersong,distraction:_distraction,fascinate:_fascinate,inspire_courage:_inspire_courage,inspire_competence:_inspire_competence,suggestion:_suggestion,dirge_of_doom:_dirge_of_doom,inspire_greatness:_inspire_greatness,soothing_performance:_soothing_performance,frightening_tune:_frightening_tune,inspire_heroics:_inspire_heroics,mass_suggestion:_mass_suggestion,deadly_performance:_deadly_performance}