import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested swashbuckler deed.</p>
</>};
const _derring_do = {title: "Derring-Do", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 56</Link></p>
<Ability id="derring-do-ex" icon={["upgrade"]}>
<Pair single id="derring-do-ex">Derring-Do (Ex)</Pair>
<Pair title="Prerequisites">1st-level swashbuckler</Pair>
<Pair title="Ability">A swashbuckler can spend 1 panache point when she makes an Acrobatics, Climb, Escape Artist, Fly, Ride, or Swim check to roll 1d6 and add the result to the check. She can do this after she makes the check but before the result is revealed.</Pair>
<Pair title="Special">If the result of the d6 roll is a natural 6, she rolls another 1d6 and adds it to the check. She can continue to do this as long as she rolls natural 6s, up to a number of times equal to her Dexterity modifier (minimum 1).</Pair>
</Ability>
</>};
const _dodging_panache = {title: "Dodging Panache", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 57</Link></p>
<Ability id="dodging-panache-ex" icon={["armor-upgrade"]}>
<Pair single id="dodging-panache-ex">Dodging Panache (Ex)</Pair>
<Pair title="Prerequisites">1st-level swashbuckler</Pair>
<Pair title="Immediate Action">When an opponent attempts a melee attack against the swashbuckler, the swashbuckler can spend 1 panache point to move 5 feet; doing so grants the swashbuckler a dodge bonus to AC equal to her Charisma modifier (minimum 0) against the triggering attack. This movement doesn't negate the attack, which is still resolved as if the swashbuckler had not moved from the original square.</Pair>
<Pair title="Special">This movement is not a 5-foot step; it provokes attacks of opportunity from creatures other than the one who triggered this deed. The swashbuckler can only perform this deed while wearing light or no armor, and while carrying no heavier than a light load.</Pair>
</Ability>
</>};
const _opportune_parry_and_riposte = {title: "Opportune Parry and Riposte", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 57</Link></p>
<Ability id="opportune-parry-and-riposte-ex" icon={["armor-upgrade","mailed-fist"]}>
<Pair single id="opportune-parry-and-riposte-ex">Opportune Parry and Riposte (Ex)</Pair>
<Pair title="Prerequisites">1st-level swashbuckler</Pair>
<Pair title="Ability"><p>When an opponent makes a melee attack against the swashbuckler, she can spend 1 panache point and expend a use of an attack of opportunity to attempt to parry that attack.</p>
<p>The swashbuckler makes an attack roll as if she were making an attack of opportunity; for each size category the attacking creature is larger than the swashbuckler, the swashbuckler takes a -2 penalty on this roll. If her result is greater than the attacking creature's result, the creature's attack automatically misses. The swashbuckler must declare the use of this ability after the creature's attack is announced, but before its attack roll is made.</p>
</Pair>
<Pair title="Immediate Action">Upon performing a successful parry and if she has at least 1 panache point, the swashbuckler can make an attack against the creature whose attack she parried, provided that creature is within her reach.</Pair>
<Pair title="Special">This deed's cost cannot be reduced by any ability or effect that reduces the number of panache points a deed costs.</Pair>
</Ability>
</>};
const _kip_up = {title: "Kip-Up", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 57</Link></p>
<Ability id="kip-up-ex" icon={["stairs-goal"]}>
<Pair single id="kip-up-ex">Kip-Up (Ex)</Pair>
<Pair title="Prerequisites">3rd-level swashbuckler</Pair>
<Pair title="Move-Equivalent Action">While the swashbuckler has at least 1 panache point, she can kip-up from <Link to="/rule/prone">prone</Link> without provoking an attack of opportunity.</Pair>
<Pair title="Special">She can kip-up as a <strong className="hl">swift action</strong> instead by spending 1 panache point.</Pair>
</Ability>
</>};
const _menacing_swordplay = {title: "Menacing Swordplay", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 57</Link></p>
<Ability id="menacing-swordplay-ex" icon={["armor-downgrade"]}>
<Pair single id="menacing-swordplay-ex">Menacing Swordplay (Ex)</Pair>
<Pair title="Prerequisites">3rd-level swashbuckler</Pair>
<Pair title="Ability">While she has at least 1 panache point, when a swashbuckler hits an opponent with a light or one-handed piercing melee weapon, she can choose to use Intimidate to demoralize that opponent as a <strong className="hl">swift action</strong> instead of a standard action.</Pair>
</Ability>
</>};
const _precise_strike = {title: "Precise Strike", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 57</Link></p>
<Ability id="precise-strike-ex" icon={["mailed-fist","upgrade"]}>
<Pair single id="precise-strike-ex">Precise Strike (Ex)</Pair>
<Pair title="Prerequisites">3rd-level swashbuckler</Pair>
<Pair title="Ability"><p>While she has at least 1 panache point, a swashbuckler gains the ability to strike precisely with a light or one-handed piercing melee weapon (though not natural weapon attacks), adding her swashbuckler level to the damage dealt.</p>
<p>To use this deed, a swashbuckler cannot attack with a weapon in her off hand or use a shield other than a buckler. She can even use this ability with thrown light or one-handed piercing melee weapons, so long as the target is within 30 feet of her.</p>
<p>This additional damage is <Link to="/misc/precision_damage">precision damage</Link>, and isn't multiplied on a critical hit. Any creature that is immune to sneak attacks is immune to the additional damage granted by <em>precise strike,</em> and any item or ability that protects a creature from critical hits also protects a creature from the additional damage of a <em>precise strike.</em></p>
</Pair>
<Pair title="Swift Action">A swashbuckler can spend 1 panache point to double her <em>precise strike's</em> damage bonus on the next attack. This benefit must be used before the end of her turn, or it is lost. This deed's cost cannot be reduced by any ability or effect that reduces the amount of panache points a deed costs (such as the <Link to="/feat/signature_deed">Signature Deed</Link> feat).</Pair>
</Ability>
</>};
const _swashbuckler_initiative = {title: "Swashbuckler Initiative", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 58</Link></p>
<Ability id="swashbuckler-initiative-ex" icon={["upgrade"]}>
<Pair single id="swashbuckler-initiative-ex">Swashbuckler Initiative (Ex)</Pair>
<Pair title="Prerequisites">3rd-level swashbuckler</Pair>
<Pair title="Passive Ability">While the swashbuckler has at least 1 panache point, she gains a +2 bonus on initiative checks. In addition, if she has the <Link to="/feat/quick_draw">Quick Draw</Link> feat, her hands are free and unrestrained, and she has any single light or one-handed piercing melee weapon that isn't hidden, she can draw that weapon as part of the initiative check.</Pair>
</Ability>
</>};
const _superior_feint = {title: "Superior Feint", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 58</Link></p>
<Ability id="superior-feint-ex" icon={["armor-downgrade"]}>
<Pair single id="superior-feint-ex">Superior Feint (Ex)</Pair>
<Pair title="Prerequisites">7th-level swashbuckler</Pair>
<Pair title="Standard Action">A swashbuckler with at least 1 panache point can purposefully miss a creature she could make a melee attack against with a wielded light or one-handed piercing weapon. When she does, the creature is denied its Dexterity bonus to AC until the start of the swashbuckler's next turn.</Pair>
</Ability>
</>};
const _swashbucklers_grace = {title: "Swashbuckler's Grace", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 58</Link></p>
<Ability id="swashbucklers-grace-ex" icon={["upgrade"]}>
<Pair single id="swashbucklers-grace-ex">Swashbuckler's Grace (Ex)</Pair>
<Pair title="Prerequisites">7th-level swashbuckler</Pair>
<Pair title="Passive Ability">While the swashbuckler has at least 1 panache point, she takes no penalty for moving at full speed when she uses Acrobatics to attempt to move through a threatened area or an enemy's space.</Pair>
</Ability>
</>};
const _targeted_strike = {title: "Targeted Strike", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 58</Link></p>
<Ability id="targeted-strike-ex" icon={["mailed-fist","armor-downgrade"]}>
<Pair single id="targeted-strike-ex">Targeted Strike (Ex)</Pair>
<Pair title="Prerequisites">7th-level swashbuckler</Pair>
<Pair title="Full-Round Action">The swashbuckler can spend 1 panache point to make an attack with a single light or one-handed piercing melee weapon that cripples part of a foe's body. The swashbuckler chooses a part of the body to target. If the attack succeeds, in addition to the attack's normal damage, the target suffers one of the following effects based on the part of the body targeted. If a creature doesn't have one of the listed body locations, that body part cannot be targeted.</Pair>
<Pair title="Arms">The target takes no damage from the attack, but it drops one carried item of the swashbuckler's choice, even if the item is wielded with two hands. Items held in a <Link to="/eq-armorenh/locked_gauntlet">locked gauntlet</Link> are not dropped on a hit.</Pair>
<Pair title="Head">The target is <Link to="/misc/confused">confused</Link> for 1 round. This is a mind-affecting effect.</Pair>
<Pair title="Legs">The target is knocked <Link to="/rule/prone">prone</Link>. Creatures with four or more legs or that are immune to <Link to="/rule/trip">trip</Link> attacks are immune to this effect.</Pair>
<Pair title="Torso or Wings">The target is <Link to="/misc/staggered">staggered</Link> for 1 round.</Pair>
<Pair title="Special">Creatures that are immune to sneak attacks are also immune to <em>targeted strikes.</em> Items or abilities that protect a creature from critical hits also protect a creature from <em>targeted strikes.</em></Pair>
</Ability>
</>};
const _bleeding_wound = {title: "Bleeding Wound", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 58</Link></p>
<Ability id="bleeding-wound-ex" icon={["upgrade"]}>
<Pair single id="bleeding-wound-ex">Bleeding Wound (Ex)</Pair>
<Pair title="Prerequisites">11th-level swashbuckler</Pair>
<Pair title="Free Action"><p>When the swashbuckler hits a living creature with a light or one-handed piercing melee weapon attack, she can spend 1 panache point to have that attack deal additional <Link to="/rule/bleed">bleed</Link> damage. The amount of bleed damage dealt is equal to the swashbuckler's Dexterity modifier (minimum 1).</p>
<p>Alternatively, the swashbuckler can spend 2 panache points to deal 1 point of <Link to="/rule/constitution_damage">Strength, Dexterity, or Constitution bleed damage</Link> instead (swashbuckler's choice).</p>
</Pair>
<Pair title="Special">Creatures that are immune to sneak attacks are also immune to these types of bleed damage.</Pair>
</Ability>
</>};
const _evasive = {title: "Evasive", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 59</Link></p>
<Ability id="evasive-ex" icon={["armor-upgrade"]}>
<Pair single id="evasive-ex">Evasive (Ex)</Pair>
<Pair title="Prerequisites">11th-level swashbuckler</Pair>
<Pair title="Passive Ability">While a swashbuckler has at least 1 panache point, she gains the benefits of the <Link to="/ability/evasion">evasion</Link>, <Link to="/ability/uncanny_dodge">uncanny dodge</Link>, and <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link> rogue class features. She uses her swashbuckler level as her rogue level for <em>improved uncanny dodge.</em></Pair>
</Ability>
</>};
const _subtle_blade = {title: "Subtle Blade", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 59</Link></p>
<Ability id="subtle-blade-ex" icon={["armor-upgrade"]}>
<Pair single id="subtle-blade-ex">Subtle Blade (Ex)</Pair>
<Pair title="Prerequisites">11th-level swashbuckler</Pair>
<Pair title="Passive Ability">While a swashbuckler has at least 1 panache point, she is immune to <Link to="/rule/disarm">disarm</Link>, <Link to="/rule/steal">steal</Link>, and <Link to="/rule/sunder">sunder</Link> combat maneuvers made against a light or one-handed piercing melee weapon she is wielding.</Pair>
</Ability>
</>};
const _dizzying_defense = {title: "Dizzying Defense", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 59</Link></p>
<Ability id="dizzying-defense-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="dizzying-defense-ex">Dizzying Defense (Ex)</Pair>
<Pair title="Prerequisites">15th-level swashbuckler</Pair>
<Pair title="Ability"><p>While wielding a light or one-handed piercing melee weapon in one hand, the swashbuckler can spend 1 panache point to take the <Link to="/misc/fighting_defensively">fighting defensively</Link> action as a <strong className="hl">swift action</strong> instead of a standard action.</p>
<p>When fighting defensively in this manner, the dodge bonus to AC gained from that action increases to +4, and the penalty to attack rolls is reduced to -2.</p>
</Pair>
</Ability>
</>};
const _perfect_thrust = {title: "Perfect Thrust", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 59</Link></p>
<Ability id="perfect-thrust-ex" icon={["magic-palm","armor-downgrade"]}>
<Pair single id="perfect-thrust-ex">Perfect Thrust (Ex)</Pair>
<Pair title="Prerequisites">15th-level swashbuckler</Pair>
<Pair title="Full-Round Action">While the swashbuckler has at least 1 panache point, she can make a <em>perfect thrust,</em> pooling all of her attack potential into a single melee attack made with a light or one-handed piercing melee weapon. When she does, she makes the attack against the target's touch AC, and ignores all damage reduction.</Pair>
</Ability>
</>};
const _swashbucklers_edge = {title: "Swashbuckler's Edge", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 59</Link></p>
<Ability id="swashbucklers-edge-ex" icon={["stairs-goal"]}>
<Pair single id="swashbucklers-edge-ex">Swashbuckler's Edge (Ex)</Pair>
<Pair title="Prerequisites">15th-level swashbuckler</Pair>
<Pair title="Ability">While the swashbuckler has at least 1 panache point, she can take 10 on any Acrobatics, Climb, Escape Artist, Fly, Ride, or Swim check, even while distracted or in immediate danger.</Pair>
<Pair title="Special">She can use this ability in conjunction with the <Link to="/swashdeed/derring_do">derring-do</Link> deed.</Pair>
</Ability>
</>};
const _cheat_death = {title: "Cheat Death", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 59</Link></p>
<Ability id="cheat-death-ex" icon={["armor-upgrade"]}>
<Pair single id="cheat-death-ex">Cheat Death (Ex)</Pair>
<Pair title="Prerequisites">19th-level swashbuckler</Pair>
<Pair title="Ability">Whenever the swashbuckler is reduced to 0 hit points or fewer, she can spend all of her remaining panache to instead be reduced to 1 hit point. She must have at least 1 panache point to spend.</Pair>
<Pair title="Special">Effects that kill the swashbuckler outright without dealing hit point damage are not affected by this ability.</Pair>
</Ability>
</>};
const _deadly_stab = {title: "Deadly Stab", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 59</Link></p>
<Ability id="deadly-stab-ex" icon={["armor-downgrade"]}>
<Pair single id="deadly-stab-ex">Deadly Stab (Ex)</Pair>
<Pair title="Prerequisites">19th-level swashbuckler</Pair>
<Pair title="Ability">When the swashbuckler confirms a critical hit with a light or one-handed piercing melee weapon, in addition to the normal damage, she can spend 1 panache point to inflict a <em>deadly stab.</em> The target must succeed at a Fortitude saving throw or die. The DC of this save is 10 + 1/2 the swashbuckler's level + the swashbuckler's Dexterity modifier.</Pair>
<Pair title="Special">This is a death attack. Performing this deed does not grant the swashbuckler a panache point.</Pair>
</Ability>
</>};
const _stunning_stab = {title: "Stunning Stab", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 59</Link></p>
<Ability id="stunning-stab-ex" icon={["armor-downgrade"]}>
<Pair single id="stunning-stab-ex">Stunning Stab (Ex)</Pair>
<Pair title="Prerequisites">19th-level swashbuckler</Pair>
<Pair title="Ability">When a swashbuckler hits a creature with a light or one-handed piercing melee weapon, she can spend 2 panache points. The creature must succeed at a Fortitude saving throw (DC = 10 + 1/2 the swashbuckler's level + the swashbuckler's Dexterity modifier) or be <Link to="/misc/stunned">stunned</Link> for 1 round.</Pair>
<Pair title="Special">Creatures that are immune to critical hits are also immune to this effect.</Pair>
</Ability>
</>};
export default {not_found:_not_found,derring_do:_derring_do,dodging_panache:_dodging_panache,opportune_parry_and_riposte:_opportune_parry_and_riposte,kip_up:_kip_up,menacing_swordplay:_menacing_swordplay,precise_strike:_precise_strike,swashbuckler_initiative:_swashbuckler_initiative,superior_feint:_superior_feint,swashbucklers_grace:_swashbucklers_grace,targeted_strike:_targeted_strike,bleeding_wound:_bleeding_wound,evasive:_evasive,subtle_blade:_subtle_blade,dizzying_defense:_dizzying_defense,perfect_thrust:_perfect_thrust,swashbucklers_edge:_swashbucklers_edge,cheat_death:_cheat_death,deadly_stab:_deadly_stab,stunning_stab:_stunning_stab}