import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import ByLevelPop from '../../components/ByLevelPop';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested rogue talent.</p>
</>};
const _armor_piercer = {title: "Armor Piercer", addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook pg. 9</Link></p>
<Ability id="armor-piercer-ex" icon={["armor-downgrade"]}>
<Pair single id="armor-piercer-ex" flavor="A rogue with this talent can cause her sneak attacks to pierce through natural armor.">Armor Piercer (Ex)</Pair>
<Pair title="Ability">When she hits with an attack that deals sneak attack damage, she can forgo one or more of her sneak attack dice to reduce the target's natural armor bonus by that amount (minimum natural armor bonus of +0) until the end of her next turn. A creature cannot be affected by this ability again for 1 minute.</Pair>
</Ability>
</>};
const _befuddling_strike = {title: "Befuddling Strike", addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 130</Link></p>
<Ability id="befuddling-strike-ex" icon={["armor-downgrade"]}>
<Pair single id="befuddling-strike-ex">Befuddling Strike (Ex)</Pair>
<Pair title="Passive Ability">When the rogue deals sneak attack damage against an opponent, that opponent takes a -2 penalty on attack rolls against the rogue for 1d4 rounds.</Pair>
</Ability>
</>};
const _bleeding_attack = {title: "Bleeding Attack", addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 68</Link></p>
<Ability id="bleeding-attack-ex" icon={["upgrade"]}>
<Pair single id="bleeding-attack-ex">Bleeding Attack (Ex)</Pair>
<Pair title="Ability">A rogue with this ability can cause living opponents to bleed by hitting them with a sneak attack. This attack causes the target to take 1 additional point of damage each round for each die of the rogue's sneak attack (e.g., 4d6 equals 4 points of <Link to="/rule/bleed">bleed</Link>). Bleeding creatures take that amount of damage every round at the start of each of their turns. The bleeding can be stopped by a DC 15 Heal check or the application of any effect that heals hit point damage. Bleeding damage from this ability does not stack with itself. Bleeding damage bypasses any damage reduction the creature might possess.</Pair>
</Ability>
</>};
const _distracting_attack = {title: "Distracting Attack", addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 130</Link></p>
<Ability id="distracting-attack-ex" icon={["armor-downgrade"]}>
<Pair single id="distracting-attack-ex" flavor="A rogue with this talent can make sneak attacks with subtle flourishes that disorient and distract her enemy.">Distracting Attack (Ex)</Pair>
<Pair title="Ability">When she hits a creature with a melee attack that deals sneak attack damage, she can forgo the additional damage to cause the creature to become <Link to="/rule/flat_footed">flat-footed</Link> against one target of her choosing until the beginning of her next turn. The rogue cannot designate herself as the creature gaining the benefit of this talent.</Pair>
<Pair title="Special">Creatures with <Link to="/ability/uncanny_dodge">uncanny dodge</Link> are immune to distracting attack.</Pair>
</Ability>
</>};
const _emboldening_strike = {title: "Emboldening Strike", addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 8</Link></p>
<Ability id="emboldening-strike-ex" icon={["armor-upgrade"]}>
<Pair single id="emboldening-strike-ex">Emboldening Strike (Ex)</Pair>
<Pair title="Ability">When a rogue with this talent hits a creature with a melee attack that deals sneak attack damage, she gains a +1 circumstance bonus on saving throws for every 2 sneak attack dice rolled (minimum +1) for 1 round.</Pair>
</Ability>
</>};
const _extinguishing_strike = {title: "Extinguishing Strike", addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 8</Link></p>
<Ability id="extinguishing-strike-ex" icon={["magic-swirl"]}>
<Pair single id="extinguishing-strike-ex">Extinguishing Strike (Ex)</Pair>
<Pair title="Ability">When a rogue with this talent hits a creature with a melee attack that deals sneak attack damage, any nonmagical light sources worn or carried by the creature (such as lit torches, lanterns, or sunrods) are automatically extinguished.</Pair>
<Pair title="Ability">Once per day, the rogue can use this ability to also attempt a dispel check (as per <Link to="/spell/dispel_magic">dispel magic</Link>) against any magical sources of light a target carries, using her rogue level as the caster level.</Pair>
</Ability>
</>};
const _focusing_attack = {title: "Focusing Attack", addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 8</Link></p>
<Ability id="focusing-attack-ex" icon={["armor-upgrade"]}>
<Pair single id="focusing-attack-ex">Focusing Attack (Ex)</Pair>
<Pair title="Ability">When a rogue selects this talent, she must choose the <Link to="/misc/confused">confused</Link>, <Link to="/misc/shaken">shaken</Link>, or <Link to="/misc/sickened">sickened</Link> condition. When the rogue has the selected condition and hits a creature with a melee attack that deals sneak attack damage, the rogue no longer has that condition.</Pair>
<Pair title="Special">A rogue can take this talent up to three times. Each time, she must select a different condition that she is able to remove from herself with a melee attack that deals sneak attack damage. Even if the rogue has taken this talent multiple times, she can remove only a single effect on herself with each melee attack that deals sneak attack damage.</Pair>
</Ability>
</>};
const _obscuring_blow = {title: "Obscuring Blow", addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 8</Link></p>
<Ability id="obscuring-blow-ex" icon={["armor-downgrade"]}>
<Pair single id="obscuring-blow-ex">Obscuring Blow (Ex)</Pair>
<Pair title="Ability"><p>Once per day, the rogue can forgo her potential to deal sneak attack damage to attempt to cloud an opponent's vision. She must declare the use of <em>obscuring blow</em> before she makes the attack.</p>
<p>If the attack hits, it does normal damage but, instead of dealing sneak attack damage (and any effect that triggers when the rogue deals sneak attack damage), the target treats all other creatures as if they had <Link to="/rule/concealment">concealment</Link>, suffering a 20% miss chance on all attack rolls for a number of rounds equal to half the rogue's level. A successful Fortitude saving throw reduces this effect to 1 round. The DC of this saving throw is equal to 10 + 1/2 the rogue's level + the rogue's Intelligence modifier.</p>
</Pair>
</Ability>
</>};
const _offensive_defense = {title: "Offensive Defense", addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 130</Link></p>
<Ability id="offensive-defense-ex" icon={["armor-upgrade"]}>
<Pair single id="offensive-defense-ex">Offensive Defense (Ex)</Pair>
<Pair title="Ability">When a rogue with this talent hits a creature with a melee attack that deals sneak attack damage, the rogue gains a +1 dodge bonus to AC for each sneak attack die rolled for 1 round.</Pair>
</Ability>
</>};
const _powerful_sneak = {title: "Powerful Sneak", addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 131</Link></p>
<Ability id="powerful-sneak-ex" icon={["broken-shield","upgrade"]}>
<Pair single id="powerful-sneak-ex">Powerful Sneak (Ex)</Pair>
<Pair title="Ability">Whenever a rogue with this talent takes a full attack action, she can elect to take a -2 penalty on all attack rolls until the start of her next turn. If an attack during this time is a sneak attack, she treats all 1s on the sneak attack damage dice as 2s.</Pair>
</Ability>
</>};
const _powerful_sneak_unchained_rogue = {title: "Powerful Sneak (Unchained Rogue)", topLink: ["Unchained Rogue Talents","ability/unchained_rogue_talents"], addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 22</Link></p>
<Ability id="powerful-sneak-unchained-rogue-ex" icon={["broken-shield","upgrade"]}>
<Pair single id="powerful-sneak-unchained-rogue-ex">Powerful Sneak (Unchained Rogue) (Ex)</Pair>
<Pair title="Ability">Whenever a rogue with this talent takes a full attack action, she can elect to take a -2 penalty on all attack rolls until the start of her next turn. If an attack during this time is a sneak attack, she treats all 1s on the sneak attack damage dice as 2s. She can reroll multiple dice, but she can't reroll any individual die more than once per attack.</Pair>
</Ability>
</>};
const _sacred_sneak_attack = {title: "Sacred Sneak Attack", addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity pg. 25</Link></p>
<Ability id="sacred-sneak-attack-su" icon={["upgrade"]}>
<Pair single id="sacred-sneak-attack-su">Sacred Sneak Attack (Su)</Pair>
<Pair title="Prerequisites">Good alignment</Pair>
<Pair title="Passive Ability">When making a sneak attack against an undead creature or evil outsider, the rogue's sneak attack damage is considered good-aligned for the purpose of overcoming damage reduction. Normal weapon damage is unaffected for this attack.</Pair>
</Ability>
</>};
const _sever_alignment = {title: "Sever Alignment", addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/distant_realms">Distant Realms pg. 13</Link></p>
<Ability id="sever-alignment-su" icon={["armor-downgrade"]}>
<Pair single id="sever-alignment-su">Sever Alignment (Su)</Pair>
<Pair title="Prerequisites"><Link to="/talent/aligned_sneak_attack">Aligned sneak attack</Link></Pair>
<Pair title="Ability">When making a sneak attack against an opponent with an alignment subtype, a rogue with this talent can forgo her sneak attack damage to scramble the creature's metaphysical nature. If the attack succeeds, the rogue deals weapon damage as normal, and the target must succeed at a Fortitude save (DC = 10 + half the rogue's level + the rogue's Intelligence modifier) or lose all damage reduction overcome by aligned weapons (such as DR 10/good), lose all <Link to="/umr/regeneration">regeneration</Link> overcome by aligned sources (such as regeneration 10 [good]).</Pair>
</Ability>
</>};
const _shadows_chill = {title: "Shadow's Chill", addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 8</Link></p>
<Ability id="shadows-chill-su" icon={["upgrade"]}>
<Pair single id="shadows-chill-su">Shadow's Chill (Su)</Pair>
<Pair title="Prerequisites">Cold <Link to="/umr/resistance">resistance</Link> from a racial trait</Pair>
<Pair title="Ability">When a rogue with this talent hits a creature with a melee weapon that deals sneak attack damage, a number of points of the damage dealt equal to the number of sneak attack dice rolled is cold damage. The remainder of the sneak attack damage and the normal weapon damage are unaffected.</Pair>
</Ability>
</>};
const _silencing_strike = {title: "Silencing Strike", addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 53</Link></p>
<Ability id="silencing-strike-su" icon={["armor-downgrade"]}>
<Pair single id="silencing-strike-su" flavor={<>Using magic stolen from the <Link to="/rule/hellknights">Hellknights</Link>, Council agents can render foes silent.</>}>Silencing Strike (Su)</Pair>
<Pair title="Usage">1 time/day per two rogue levels<ByLevelPop levels={[[2,1],[4,2],[6,3],[8,4],[10,5],[12,6],[14,7],[16,8],[18,9],[20,10]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">When a creature is damaged by the rogue's sneak attack, the rogue magically renders the creature mute for 1 round unless it succeeds at a Will save (DC = 10 + half the rogue's level + the rogue's Charisma modifier).</Pair>
</Ability>
</>};
const _slow_reactions = {title: "Slow Reactions", addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 68</Link></p>
<Ability id="slow-reactions-ex" icon={["armor-downgrade"]}>
<Pair single id="slow-reactions-ex">Slow Reactions (Ex)</Pair>
<Pair title="Ability">Opponents damaged by the rogue's sneak attack can't make attacks of opportunity for 1 round.</Pair>
</Ability>
</>};
const _sneaky_maneuver = {title: "Sneaky Maneuver", addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace pg. 26</Link></p>
<Ability id="sneaky-maneuver-ex" icon={["mailed-fist"]}>
<Pair single id="sneaky-maneuver-ex">Sneaky Maneuver (Ex)</Pair>
<Pair title="Ability">Anytime a rogue with this talent could hit an opponent with a melee sneak attack on her turn, she may take a -2 penalty on her attack roll and attempt a <Link to="/rule/dirty_trick">dirty trick</Link>, <Link to="/rule/disarm">disarm</Link>, <Link to="/rule/steal">steal</Link>, <Link to="/rule/sunder">sunder</Link>, or <Link to="/rule/trip">trip</Link> combat maneuver instead of dealing sneak attack damage. If the attack succeeds, the rogue deals weapon damage as normal and then attempts a combat maneuver check as a <strong className="hl">swift action</strong> (the -2 penalty only applies to the initial attack roll, not the combat maneuver check). This combat maneuver still provokes attacks of opportunity unless the rogue has a feat or ability that allows her to perform it without provoking attacks of opportunity.</Pair>
</Ability>
</>};
const _stem_the_flow = {title: "Stem the Flow", addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity pg. 25</Link></p>
<Ability id="stem-the-flow-su" icon={["armor-downgrade"]}>
<Pair single id="stem-the-flow-su">Stem the Flow (Su)</Pair>
<Pair title="Ability">When making a successful sneak attack against a creature with the ability to <Link to="/ability/channel_energy">channel energy</Link>, the rogue may forgo 3d6 points of sneak attack damage to instead prevent the target from channeling energy for a number of rounds equal to half her rogue level.</Pair>
</Ability>
</>};
const _underhanded = {title: "Underhanded", addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 70</Link></p>
<Ability id="underhanded-ex" icon={["upgrade"]}>
<Pair single id="underhanded-ex">Underhanded (Ex)</Pair>
<Pair title="Passive Ability">A rogue with this talent gains a +4 circumstance bonus on all <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> checks made to conceal a weapon.</Pair>
<Pair title="Ability">Furthermore, if she makes a sneak attack during the surprise round using a concealed weapon that her opponent didn't know about, she does not have to roll sneak attack damage, and the sneak attack deals maximum damage.</Pair>
<Pair title="Usage">Charisma modifier times/day</Pair>
</Ability>
</>};
const _aligned_sneak_attack = {title: "Aligned Sneak Attack", jsx: <><p><strong>Sources</strong> <Link to="/source/distant_realms">Distant Realms pg. 13</Link></p>
<Ability id="aligned-sneak-attack-su" icon={["armor-downgrade"]}>
<Pair single id="aligned-sneak-attack-su">Aligned Sneak Attack (Su)</Pair>
<Pair title="Ability">When making a sneak attack against a creature that has damage reduction that can be overcome by weapons of a particular alignment (such as DR 5/good), the rogue's attack reduces that damage reduction by an amount equal to the number of sneak attack dice rolled until the end of the rogue's turn.</Pair>
</Ability>
</>};
const _careful_stab = {title: "Careful Stab", jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 53</Link></p>
<Ability id="careful-stab-ex" icon={["stairs-goal"]}>
<Pair single id="careful-stab-ex">Careful Stab (Ex)</Pair>
<Pair title="Ability">When a rogue with this talent reduces a creature to fewer than 0 hp with <Link to="/misc/precision_damage">precision damage</Link>, she can choose to leave that creature at -1 hp and <Link to="/misc/stable">stable</Link>.</Pair>
</Ability>
</>};
const _demand_attention = {title: "Demand Attention", jsx: <><p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions pg. 27</Link></p>
<Ability id="demand-attention-ex" icon={["armor-downgrade"]}>
<Pair single id="demand-attention-ex">Demand Attention (Ex)</Pair>
<Pair title="Ability"><p>The first time each round that you deal sneak attack damage to an opponent, you can forgo sneak attack damage to distract the creature. The target must succeed at a Will save (DC = 10 + the number of sneak attack dice sacrificed + your Charisma modifier) or become distracted until the start of your next turn.</p>
<p>Distracted opponents are entirely focused on you, and pay little attention to their surroundings; they are not considered to be observing other characters within 30 feet, allowing them to attempt Stealth checks to hide. A distracted opponent automatically fails Perception checks against creatures more than 30 feet away.</p>
</Pair>
</Ability>
</>};
const _disabling_stunt = {title: "Disabling Stunt", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 16</Link></p>
<Ability id="disabling-stunt-ex" icon={["upgrade"]}>
<Pair single id="disabling-stunt-ex">Disabling Stunt (Ex)</Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/disable_device">Disable Device</Link></Pair>
<Pair title="Standard Action">A rogue with this talent can attempt a Disable Device check against a construct's CMD. If the check is successful, the rogue can ignore the construct's damage reduction when dealing sneak attack damage for 1 minute.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
<Pair title="Special">The normal penalties apply to this check if the rogue attempts it without using <Link to="/eq-misc/thieves_tools">thieves' tools</Link>.</Pair>
</Ability>
</>};
const _fast_getaway = {title: "Fast Getaway", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 130</Link></p>
<Ability id="fast-getaway-ex" icon={["stairs-goal"]}>
<Pair single id="fast-getaway-ex">Fast Getaway (Ex)</Pair>
<Pair title="Ability">After successfully making a sneak attack or <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> check, a rogue with this talent can spend a <strong className="hl">move action</strong> to take the <Link to="/rule/withdraw">withdraw</Link> action. She can move no more than her speed during this movement.</Pair>
</Ability>
</>};
const _set_up = {title: "Set-Up", jsx: <><p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions pg. 27</Link></p>
<Ability id="set-up-ex" icon={["armor-downgrade"]}>
<Pair single id="set-up-ex">Set-Up (Ex)</Pair>
<Pair title="Ability">When you successfully hit a target with a sneak attack in melee, you can choose to forgo your additional sneak attack damage to make the target more vulnerable to one of your allies adjacent to it. The first melee attack that ally makes against the target before the beginning of your next turn treats the target as <Link to="/rule/flanked">flanked</Link>, even if your ally is not flanking the target. This has no effect on creatures you could not flank with that ally, even if the ally was properly positioned.</Pair>
</Ability>
</>};
const _sneak_training = {title: "Sneak Training", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_130_city_in_the_lions_eye">Pathfinder #130: City in the Lion's Eye pg. 76</Link></p>
<Ability id="sneak-training-ex" icon={["upgrade"]}>
<Pair single id="sneak-training-ex">Sneak Training (Ex)</Pair>
<Pair title="Passive Ability">The rogue counts as having the sneak attack class feature of a rogue of her level for the purpose of meeting prestige class requirements, although this talent doesn't improve the rogue's existing sneak attack ability or grant her the sneak attack class feature if she doesn't already have it. This talent is most useful for rogues that lack the sneak attack class feature, such as those with the <Link to="/arc-rogue/phantom_thief">phantom thief</Link> archetype.</Pair>
</Ability>
</>};
const _snipers_eye = {title: "Sniper's Eye", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 131</Link></p>
<Ability id="snipers-eye-ex" icon={["upgrade"]}>
<Pair single id="snipers-eye-ex">Sniper's Eye (Ex)</Pair>
<Pair title="Ability">A rogue with this talent can apply her sneak attack damage on ranged attacks targeting foes within 30 feet that benefit from <Link to="/rule/concealment">concealment</Link>. Foes with total concealment are still immune.</Pair>
</Ability>
</>};
const _surprise_attack = {title: "Surprise Attack", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 69</Link></p>
<Ability id="surprise-attack-ex" icon={["armor-downgrade"]}>
<Pair single id="surprise-attack-ex">Surprise Attack (Ex)</Pair>
<Pair title="Passive Ability">During the surprise round, opponents are always considered <Link to="/rule/flat_footed">flat-footed</Link> to a rogue with this ability, even if they have already acted.</Pair>
</Ability>
</>};
const _surprise_attack_unchained_rogue = {title: "Surprise Attack (Unchained Rogue)", topLink: ["Unchained Rogue Talents","ability/unchained_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 22</Link></p>
<Ability id="surprise-attack-unchained-rogue-ex" icon={["armor-downgrade","upgrade"]}>
<Pair single id="surprise-attack-unchained-rogue-ex">Surprise Attack (Unchained Rogue) (Ex)</Pair>
<Pair title="Passive Ability">During the surprise round, opponents are always considered <Link to="/rule/flat_footed">flat-footed</Link> to a rogue with this ability, even if they have already acted. A rogue with this ability adds 1/2 her rogue level to her <Link to="/ability/sneak_attack">sneak attack</Link> damage rolls made during the surprise round.</Pair>
</Ability>
</>};
const _swimming_stunt = {title: "Swimming Stunt", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 16</Link></p>
<Ability id="swimming-stunt-ex" icon={["armor-downgrade"]}>
<Pair single id="swimming-stunt-ex">Swimming Stunt (Ex)</Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/swim">Swim</Link></Pair>
<Pair title="Ability">Once per round, when making an attack against an opponent underwater that qualifies for sneak attack damage, a rogue with this talent can attempt a Swim check as a <strong className="hl">free action</strong> against her opponent's CMD. If the attack and Swim check are both successful, and the attack deals sneak attack damage, the rogue can choose to forgo one or more of her sneak attack dice to reduce the number of total rounds her opponent can <Link to="/misc/hold_its_breath">hold its breath</Link> by 1 round per die.</Pair>
</Ability>
</>};
const _accurate_poisoner = {title: "Accurate Poisoner", jsx: <><p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 13</Link></p>
<Ability id="accurate-poisoner-ex" icon={["upgrade"]}>
<Pair single id="accurate-poisoner-ex" flavor="A rogue with this talent delivers poisons with deadly precision.">Accurate Poisoner (Ex)</Pair>
<Pair title="Ability">When the rogue successfully hits an opponent with a poisoned weapon and would deal sneak attack damage, she can forgo the sneak attack damage and increase the poison's potency. If she does, the poison's duration increases by 2 (for example, <Link to="/eq-poison/large_scorpion_venom">large scorpion venom</Link> lasts for 8 rounds instead of 6 rounds, and <Link to="/eq-poison/drow_poison">drow poison</Link> lasts for 4 minutes instead of 2 minutes).</Pair>
</Ability>
</>};
const _developed_poison_immunity = {title: "Developed Poison Immunity", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_wild">Heroes of the Wild pg. 21</Link></p>
<Ability id="developed-poison-immunity-ex" icon={["armor-upgrade"]}>
<Pair single id="developed-poison-immunity-ex">Developed Poison Immunity (Ex)</Pair>
<Pair title="Choice">When this talent is taken, select a single animal or plant poison that the rogue has been poisoned with but survived.</Pair>
<Pair title="Passive Ability">The rogue automatically succeeds at all Fortitude saves against exposure to the selected poison.</Pair>
</Ability>
</>};
const _iron_guts = {title: "Iron Guts", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 69</Link></p>
<Ability id="iron-guts-ex" icon={["armor-upgrade"]}>
<Pair single id="iron-guts-ex">Iron Guts (Ex)</Pair>
<Pair title="Passive Ability">A rogue with this talent has a cast-iron stomach or has trained herself to withstand poisons, especially ingested ones. She gains a +1 bonus on all saves against ingested poisons as well as a +4 bonus on saves against all spells and effects that cause the rogue to be <Link to="/misc/nauseated">nauseated</Link> or <Link to="/misc/sickened">sickened</Link>.</Pair>
</Ability>
</>};
const _knockout_queen = {title: "Knockout Queen", jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 53</Link></p>
<Ability id="knockout-queen-ex" icon={["stairs-goal"]}>
<Pair single id="knockout-queen-ex" flavor="Sabriune has passed on the secret of swiftly manufacturing drow poison.">Knockout Queen (Ex)</Pair>
<Pair title="Ability">Once per day, the rogue can create 1 or more doses of <Link to="/eq-poison/drow_poison">drow poison</Link> by spending 25 gp per dose; this process takes 30 minutes of work, regardless of the number of doses she creates. She can create no more than 1 dose for every 3 rogue levels she has (minimum 1 dose). Creating drow poison in this way does not require a skill check, but the created poison spoils if not used within 24 hours. (This spoilage means that selling doses of this poison for a profit to unsuspecting merchants might well result in unwanted repercussions and reprisals!)</Pair>
</Ability>
</>};
const _lasting_poison = {title: "Lasting Poison", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 131</Link></p>
<Ability id="lasting-poison-ex" icon={["upgrade","broken-shield"]}>
<Pair single id="lasting-poison-ex">Lasting Poison (Ex)</Pair>
<Pair title="Ability">A rogue with this talent can apply poison to a weapon in such a way that it is effective for two successful attacks instead of one. The poison has a reduced effect, however, and saves made against the poison receive a +2 circumstance bonus. Applying poison in this way requires a <strong className="hl">full-round action</strong>, or a <strong className="hl">standard action</strong> if the rogue has the <Link to="/talent/swift_poison">swift poison</Link> talent.</Pair>
</Ability>
</>};
const _lasting_poison_unchained_rogue = {title: "Lasting Poison (Unchained Rogue)", topLink: ["Unchained Rogue Talents","ability/unchained_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 21</Link></p>
<Ability id="lasting-poison-unchained-rogue-ex" icon={["upgrade","broken-shield"]}>
<Pair single id="lasting-poison-unchained-rogue-ex">Lasting Poison (Unchained Rogue) (Ex)</Pair>
<Pair title="Ability">A rogue with this talent can apply poison to a weapon in such a way that it is effective for a number of successful attacks equal to her Dexterity modifier (minimum two) instead of one. This poison has a reduced effect, however, and saves made against the poison gain a +2 circumstance bonus. Applying poison in this way is a <strong className="hl">full-round action</strong>, or a <strong className="hl">standard action</strong> if the rogue has the <Link to="/talent/swift_poison">swift poison</Link> rogue talent.</Pair>
</Ability>
</>};
const _lingering_poison = {title: "Lingering Poison", jsx: <><p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 13</Link></p>
<Ability id="lingering-poison-ex" icon={["stairs-goal"]}>
<Pair single id="lingering-poison-ex">Lingering Poison (Ex)</Pair>
<Pair title="Ability">A rogue with this talent can have a poison remain inert until a later time. When she delivers a contact or injury poison, instead of the poison's normal onset time, the rogue can delay the poison's effects until up to 1 day from when it is delivered (minimum 1 round). The delayed poison can be detected as normal by spells such as <Link to="/spell/detect_poison">detect poison</Link> and similar abilities.</Pair>
</Ability>
</>};
const _poison_use = {title: "Poison Use", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 8</Link></p>
<Ability id="poison-use-ex" icon={["armor-upgrade"]}>
<Pair single id="poison-use-ex">Poison Use (Ex)</Pair>
<Pair title="Ability">The rogue is trained in the use of poison, and can't accidentally poison herself when applying poison to a weapon.</Pair>
</Ability>
</>};
const _signature_poison = {title: "Signature Poison", jsx: <><p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 13</Link></p>
<Ability id="signature-poison-ex" icon={["upgrade"]}>
<Pair single id="signature-poison-ex">Signature Poison (Ex)</Pair>
<Pair title="Choice">A rogue with this talent chooses one poison (such as <Link to="/eq-poison/bloodroot">bloodroot</Link> or <Link to="/eq-poison/oil_of_taggit">oil of taggit</Link>) as her signature poison.</Pair>
<Pair title="Ability">When she uses the chosen poison, the poison's saving throw DC increases by +2.</Pair>
<Pair title="Special">A rogue can take this talent multiple times, each time applying it to a new poison.</Pair>
</Ability>
</>};
const _suppress_poison = {title: "Suppress Poison", jsx: <><p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 13</Link></p>
<Ability id="suppress-poison-ex" icon={["armor-upgrade"]}>
<Pair single id="suppress-poison-ex" flavor="A rogue with this talent can stave off the effects of a poison.">Suppress Poison (Ex)</Pair>
<Pair title="Immediate Action">When she fails a saving throw against a poison, the rogue can attempt the saving throw a second time. If she succeeds at this second saving throw, the poison does not affect her for a number of rounds equal to her Constitution modifier (minimum 1 round), but this time it counts against the poison's duration. This talent has no effect on poisons with an onset longer than immediate.</Pair>
</Ability>
</>};
const _swift_poison = {title: "Swift Poison", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 131</Link></p>
<Ability id="swift-poison-ex" icon={["upgrade"]}>
<Pair single id="swift-poison-ex">Swift Poison (Ex)</Pair>
<Pair title="Ability">A rogue with this talent can apply poison to a weapon as a <strong className="hl">move action</strong>, instead of a <strong className="hl">standard action</strong>.</Pair>
</Ability>
</>};
const _toxic_regurgitation = {title: "Toxic Regurgitation", jsx: <><p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 13</Link></p>
<Ability id="toxic-regurgitation-ex" icon={["smoking-finger"]}>
<Pair single id="toxic-regurgitation-ex">Toxic Regurgitation (Ex)</Pair>
<Pair title="Standard Action">A rogue with this talent can drink a non-inhaled poison and suspend it within her body. She is not affected by the poison while it is suspended within her, and she doesn't need to attempt saving throws against it. She can suspend a poison within herself in this way for a number of hours equal to her Constitution modifier (minimum 1), after which she must immediately expel the poison or be affected by it as normal.</Pair>
<Pair title="Ability">At any time while the poison is suspended within her, the rogue can spit up the poison as a ranged touch attack at any creature within 10 feet. This does not provoke attacks of opportunity. On a successful hit, the struck creature is exposed to the poison as if it were a contact poison.</Pair>
<Pair title="Special">The rogue can maintain only a single suspended poison at a time. If she suspends a new poison, any older suspended poison immediately affects her as normal.</Pair>
</Ability>
</>};
const _deadly_scratch = {title: "Deadly Scratch", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 92</Link></p>
<Ability id="deadly-scratch-ex" icon={["stairs-goal"]}>
<Pair single id="deadly-scratch-ex">Deadly Scratch (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/race/catfolk">Catfolk</Link>, <em>cat's claws</em> racial trait, <Link to="/ability/poison_use">poison use</Link> class feature</Pair>
<Pair title="Ability">A catfolk rogue with this talent can apply poison to her claws without accidentally poisoning herself.</Pair>
</Ability>
</>};
const _disarming_luck = {title: "Disarming Luck", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 92</Link></p>
<Ability id="disarming-luck-ex" icon={["armor-upgrade","rolling-dices"]}>
<Pair single id="disarming-luck-ex">Disarming Luck (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/race/catfolk">Catfolk</Link></Pair>
<Pair title="Ability">Once per day, when a catfolk rogue attempts to disable a device and fails by 5 or more, she can reroll the check as a <strong className="hl">free action</strong>. She must take the result of the reroll, even if it's worse than the original roll.</Pair>
</Ability>
</>};
const _graceful_faller = {title: "Graceful Faller", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 92</Link></p>
<Ability id="graceful-faller-ex" icon={["stairs-goal"]}>
<Pair single id="graceful-faller-ex">Graceful Faller (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/race/catfolk">Catfolk</Link></Pair>
<Pair title="Ability">A catfolk rogue with this talent lands on her feet even when she takes lethal damage from a fall.</Pair>
<Pair title="Special">If the catfolk rogue also has the <em>nimble faller</em> racial trait, she takes damage from any fall as if it were 20 feet shorter than it actually is.</Pair>
</Ability>
</>};
const _nimble_climber_catfolk = {title: "Nimble Climber", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 92</Link></p>
<Ability id="nimble-climber-ex" icon={["upgrade"]}>
<Pair single id="nimble-climber-ex">Nimble Climber (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/race/catfolk">Catfolk</Link></Pair>
<Pair title="Passive Ability">A catfolk rogue with this talent gains a +4 bonus on Climb checks.</Pair>
<Pair title="Special">If she has the <em>climber racial</em> trait, she can take 10 on her Climb checks even when in immediate danger or distracted.</Pair>
</Ability>
</>};
const _single_minded_appraiser = {title: "Single-Minded Appraiser", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 92</Link></p>
<Ability id="single-minded-appraiser-ex" icon={["stairs-goal"]}>
<Pair single id="single-minded-appraiser-ex">Single-Minded Appraiser (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/race/catfolk">Catfolk</Link></Pair>
<Pair title="Ability">A catfolk rogue with this talent is skilled at determining the value of sparkly things. She can always take 10 when appraising gems and jewelry.</Pair>
</Ability>
</>};
const _vicious_claws = {title: "Vicious Claws", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 92</Link></p>
<Ability id="vicious-claws-ex" icon={["upgrade"]}>
<Pair single id="vicious-claws-ex">Vicious Claws (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/race/catfolk">Catfolk</Link>, <em>cat's claws</em> racial trait</Pair>
<Pair title="Ability">A catfolk with this talent uses d8s to roll sneak attack damage instead of d6s, but only when she uses her claws to make the sneak attack.</Pair>
</Ability>
</>};
const _cloying_shades = {title: "Cloying Shades", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 7</Link></p>
<Ability id="cloying-shades-su" icon={["armor-downgrade"]}>
<Pair single id="cloying-shades-su">Cloying Shades (Su)</Pair>
<Pair title="Prerequisites">Has <em>dimension door</em> as a spell or spell-like ability (including the <em>abundant step</em> or <em>shadow jump</em> class feature)</Pair>
<Pair title="Ability">When a rogue with this talent uses <Link to="/spell/dimension_door">dimension door</Link> as a spell or spell-like ability, including the <em>abundant step</em> or <em>shadow jump</em> class feature, then all creatures adjacent to the rogue at the start and end of her teleportation are <Link to="/rule/entangled">entangled</Link> by grasping shadows for 1 round (although the creatures are not anchored in place). A successful Reflex saving throw negates this effect. The DC of this saving throw is equal to 10 + 1/2 the rogue's level + the rogue's Intelligence or Charisma modifier (whichever is higher).</Pair>
</Ability>
</>};
const _extra_earthcraft = {title: "Extra Earthcraft", jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 9</Link></p>
<Ability id="extra-earthcraft" icon={["upgrade"]}>
<Pair single id="extra-earthcraft">Extra Earthcraft</Pair>
<Pair title="Prerequisites">The <Link to="/arc-rogue/earthshadow">earthcraft</Link> ability</Pair>
<Pair title="Passive Ability">The rogue gains 2 additional earthcraft points each day.</Pair>
</Ability>
</>};
const _minor_magic = {title: "Minor Magic", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 68</Link></p>
<Ability id="minor-magic-sp" icon={["magic-swirl"]}>
<Pair single id="minor-magic-sp">Minor Magic (Sp)</Pair>
<Pair title="Prerequisites">Intelligence 10+</Pair>
<Pair title="Ability">A rogue with this talent gains the ability to cast a 0-level spell from the <Link to="/main/spells_sorcerer">sorcerer</Link>/<Link to="/main/spells_wizard">wizard</Link> spell list. This spell can be cast three times a day as a spell-like ability. The caster level for this ability is equal to the rogue's level. The save DC for this spell is 10 + the rogue's Intelligence modifier.</Pair>
</Ability>
</>};
const _demon_lantern = {title: "Demon Lantern", jsx: <><p><strong>Sources</strong> <Link to="/source/the_harrow_handbook">The Harrow Handbook pg. 20</Link></p>
<Ability id="demon-lantern-sp" icon={["magic-swirl"]}>
<Pair single id="demon-lantern-sp">Demon Lantern (Sp)</Pair>
<Pair title="Prerequisites">Intelligence 11+, <Link to="/talent/minor_magic">minor magic</Link> (<em>dancing lights</em>) or otherwise able to cast <em>dancing lights</em></Pair>
<Pair title="Ability">Once per day when she casts <Link to="/spell/dancing_lights">dancing lights</Link>, the rogue can conjure a single <em>demon's lantern</em> instead of the usual four lights. A <em>demon lantern</em> acts in all ways as a <Link to="/spell/hypnotic_pattern">hypnotic pattern</Link> spell cast by a wizard, except it also casts light as a <Link to="/eq-misc/torch">torch</Link> and it <Link to="/misc/fascinate">fascinates</Link> only a single target whose Hit Dice do not exceed the rogue's class level. The save DC of this effect is equal to 11 + the rogue's Intelligence modifier.</Pair>
</Ability>
</>};
const _gloom_magic = {title: "Gloom Magic", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 8</Link></p>
<Ability id="gloom-magic-sp" icon={["magic-swirl"]}>
<Pair single id="gloom-magic-sp">Gloom Magic (Sp)</Pair>
<Pair title="Prerequisites">Intelligence 12+, <Link to="/talent/minor_magic">minor magic</Link></Pair>
<Pair title="Ability">A rogue with this talent gains the ability to cast <Link to="/spell/darkness">darkness</Link> two times per day as a spell-like ability. The darkness created by this ability does not impair the rogue's vision. The caster level for this ability is equal to the rogue's level.</Pair>
</Ability>
</>};
const _greater_gloom_magic = {title: "Greater Gloom Magic", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 8</Link></p>
<Ability id="greater-gloom-magic-sp" icon={["magic-swirl"]}>
<Pair single id="greater-gloom-magic-sp">Greater Gloom Magic (Sp)</Pair>
<Pair title="Prerequisites">Intelligence 13+, <Link to="/talent/gloom_magic">gloom magic</Link>, <Link to="/talent/minor_magic">minor magic</Link></Pair>
<Pair title="Ability">A rogue with this talent gains the ability to cast <Link to="/spell/deeper_darkness">deeper darkness</Link> once each day as a spell-like ability. The darkness created by this ability does not impair the rogue's vision. The caster level for this ability is equal to the rogue's level.</Pair>
</Ability>
</>};
const _innocent_facade = {title: "Innocent Facade", jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 27</Link></p>
<Ability id="innocent-facade-sp" icon={["magic-swirl"]}>
<Pair single id="innocent-facade-sp">Innocent Facade (Sp)</Pair>
<Pair title="Prerequisites"><Link to="/talent/minor_magic">Minor magic</Link></Pair>
<Pair title="Ability">Once per day, a rogue with this talent can use <Link to="/spell/innocence">innocence</Link> as a spell-like ability, using her rogue level as the spell's caster level.</Pair>
</Ability>
</>};
const _major_magic = {title: "Major Magic", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 68</Link></p>
<Ability id="major-magic-sp" icon={["magic-swirl"]}>
<Pair single id="major-magic-sp">Major Magic (Sp)</Pair>
<Pair title="Prerequisites">Intelligence 11+, <Link to="/talent/minor_magic">minor magic</Link></Pair>
<Pair title="Ability">A rogue with this talent gains the ability to cast a 1st-level spell from the <Link to="/main/spells_sorcerer">sorcerer</Link>/<Link to="/main/spells_wizard">wizard</Link> spell list two times a day as a spell-like ability. The caster level for this ability is equal to the rogue's level. The save DC for this spell is 11 + the rogue's Intelligence modifier.</Pair>
</Ability>
</>};
const _one_of_those_faces = {title: "One of Those Faces", jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 21</Link></p>
<Ability id="one-of-those-faces-sp" icon={["magic-swirl"]}>
<Pair single id="one-of-those-faces-sp">One of Those Faces (Sp)</Pair>
<Pair title="Ability">Each day, you can use <Link to="/spell/disguise_self">disguise self</Link> as a spell-like ability for up to 10 minutes per character level. This duration need not be continuous, but it must be used in 10-minute increments.</Pair>
<Pair title="Special">Once you have used this ability, whenever you use it for the next 24 hours you must take the same alternate appearance.</Pair>
</Ability>
</>};
const _shadow_duplicate = {title: "Shadow Duplicate", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 8</Link></p>
<Ability id="shadow-duplicate-sp" icon={["armor-upgrade"]}>
<Pair single id="shadow-duplicate-sp">Shadow Duplicate (Sp)</Pair>
<Pair title="Usage">1 time/day + 1 per five rogue levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Immediate Action">When the rogue is hit, the rogue can create a single shadow duplicate of herself, as per <Link to="/spell/mirror_image">mirror image</Link>. The GM randomly determines whether the attack hit the rogue or the shadow duplicate. The shadow duplicate lasts for a number of rounds equal to the rogue's level, or until the shadow duplicate is dispelled or destroyed. This ability does not stack with the <em>mirror image</em> spell. The caster level for this ability is equal to the rogue's level.</Pair>
</Ability>
</>};
const _wild_magic = {title: "Wild Magic", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_wild">Heroes of the Wild pg. 21</Link></p>
<Ability id="wild-magic-sp" icon={["magic-swirl"]}>
<Pair single id="wild-magic-sp">Wild Magic (Sp)</Pair>
<Pair title="Prerequisites">Wisdom 10+</Pair>
<Pair title="Ability">A rogue with this talent gains the ability to cast a 0-level spell from the <Link to="/main/druid_spell">druid spell list</Link>. This spell can be cast three times per day as a spell-like ability. The caster level for this ability is equal to the rogue's level. The save DC for this spell is 10 + the rogue's Wisdom modifier.</Pair>
</Ability>
</>};
const _expert_cypher = {title: "Expert Cypher", jsx: <><p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology pg. 7</Link></p>
<Ability id="expert-cypher-ex" icon={["upgrade"]}>
<Pair single id="expert-cypher-ex">Expert Cypher (Ex)</Pair>
<Pair title="Ability">A rogue with this ability can attempt a Linguistics check to decipher a single page of text as a <strong className="hl">full-round action</strong> instead of taking 1 minute as normal.</Pair>
<Pair title="Passive Ability">When the rogue attempts a <Link to="/skill/use_magic_device">Use Magic Device</Link> check to cast a spell from a scroll, she is treated as though she had the minimum score in the appropriate ability score to cast that spell.</Pair>
<Pair title="Ability">The rogue can choose to add her Intelligence modifier to her Use Magic Device skill checks instead of her Charisma modifier.</Pair>
</Ability>
</>};
const _occult_dungeoneer = {title: "Occult Dungeoneer", jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 7</Link></p>
<Ability id="occult-dungeoneer-su" icon={["magic-swirl","upgrade"]}>
<Pair single id="occult-dungeoneer-su" flavor="Street thieves in Absalom expect wares to be securely locked, and sometimes it takes high-quality tools and magic training to ensure there's a meal at the end of the day.">Occult Dungeoneer (Su)</Pair>
<Pair title="Ability"><p>A rogue with this ability can use <Link to="/misc/spell_trigger">spell trigger</Link> and <Link to="/misc/spell_completion">spell completion</Link> items as if the following spells were on a spell list to which he has access: <Link to="/spell/detect_secret_doors">detect secret doors</Link>, <Link to="/spell/detect_snares_and_pits">detect snares and pits</Link>, <Link to="/spell/knock">knock</Link>, <Link to="/spell/locate_object">locate object</Link>, and <Link to="/spell/obscure_object">obscure object</Link>.</p>
<p>If the spell-trigger device allows a wielder to apply his own caster level (such as with a staff), the rogue may use his class level as his caster level.</p>
</Pair>
<Pair title="Ability">The rogue may also use <em>knock</em> as a supernatural ability once per day, using his rogue level as his caster level.</Pair>
</Ability>
</>};
const _spell_storing = {title: "Spell Storing", jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 7</Link></p>
<Ability id="spell-storing-su" icon={["magic-swirl"]}>
<Pair single id="spell-storing-su">Spell Storing (Su)</Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/use_magic_device">Use Magic Device</Link></Pair>
<Pair title="Ability">The rogue can store within himself a single targeted harmless spell of up to 2nd level. The spell must have a casting time of 1 standard action. Anytime a spell that meets these conditions is cast on the rogue, and he does not already have a spell stored, he can choose to store it rather than have it take effect immediately. Anytime afterward, as a <strong className="hl">standard action</strong>, the rogue can have the spell take effect (acting in all ways as if it had just been cast on him).</Pair>
</Ability>
</>};
const _the_whole_time = {title: "The Whole Time", jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 7</Link></p>
<Ability id="the-whole-time-su" icon={["magic-swirl","armor-upgrade"]}>
<Pair single id="the-whole-time-su" flavor={<>Mercenaries in the employ of the <Link to="/rule/aspis_consortium">Aspis Consortium</Link> often use <em>wands of invisibility</em> to attack protected targets, then blend into the crowd to escape or disguise the source of the next attack.</>}>The Whole Time (Su)</Pair>
<Pair title="Ability"><p>A rogue with this ability is practiced at attacking from magical concealment. He can use <Link to="/misc/spell_trigger">spell trigger</Link> and <Link to="/misc/spell_completion">spell completion</Link> items as if the following spells were on a spell list to which he has access: <Link to="/spell/greater_invisibility">greater invisibility</Link>, <Link to="/spell/invisibility">invisibility</Link>, and <Link to="/spell/vanish">vanish</Link>.</p>
<p>Additionally, if the rogue becomes visible as a result of a weapon or spell attack, he can sheathe his weapon as a <strong className="hl">free action</strong> and instantly adopt a neutral posture. With a successful Bluff or Disguise check (opposed by witnesses' Sense Motive or Perception checks, whichever is higher), there is no obvious sign that the rogue is the source of the attack (though a lack of any other reasonable candidate can still lead observers to draw the correct conclusion).</p>
</Pair>
</Ability>
</>};
const _aspexias_mysticism = {title: "Aspexia's Mysticism", jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 53</Link></p>
<Ability id="aspexias-mysticism-ex" icon={["stairs-goal"]}>
<Pair single id="aspexias-mysticism-ex">Aspexia's Mysticism (Ex)</Pair>
<Pair title="Ability">The rogue has been trained in a minor occult technique. The rogue gains <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> as a bonus feat.</Pair>
</Ability>
</>};
const _black_market_connections = {title: "Black Market Connections", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 69</Link></p>
<Ability id="black-market-connection-ex" icon={["upgrade"]}>
<Pair single id="black-market-connection-ex">Black Market Connection (Ex)</Pair>
<Pair title="Ability"><p>A rogue with this talent gains better access to magic items from black market connections. She treats every <Link to="/rule/settlements_and_districts">settlement</Link> as one size greater for the purpose of determining the gp limit of the base value of items for sale, as well as the number of minor, medium, and major magic items for sale in the settlement. If the settlement is already a metropolis, all minor and medium magic items are for sale, as well as 3d8 major magic items.</p>
<p>With a successful Diplomacy check, the rogue can treat the settlement as two sizes larger. If the settlement is already a metropolis and she succeeds at the check, all magic items are for sale. If the settlement is already a large city and she succeeds at the check, all minor and medium magic items are for sale, as well as 3d8 major magic items.</p>
<p>With a successful check, the rogue can also sell stolen items on the black market. If the check fails by 5 or more, the rogue does something to spook the market, and treats the city as normal for 1 week. Furthermore, those in control of the black market may alert the authorities to the rogue's presence in an act of reprisal for spooking the market or to divert attention away from their illicit activities. The DCs of the checks are by settlement size and are given in the table below.</p>
<ScrollContainer id="talent-black_market_connections--table-0"><table>
<thead>
<tr>
<th>Community Size</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Thorp</td>
<td>10</td>
</tr>
<tr>
<td>Hamlet</td>
<td>12</td>
</tr>
<tr>
<td>Village</td>
<td>15</td>
</tr>
<tr>
<td>Small town</td>
<td>18</td>
</tr>
<tr>
<td>Large town</td>
<td>20</td>
</tr>
<tr>
<td>Small city</td>
<td>25</td>
</tr>
<tr>
<td>Large city</td>
<td>30</td>
</tr>
<tr>
<td>Metropolis</td>
<td>35</td>
</tr>
</tbody></table></ScrollContainer>
</Pair>
</Ability>
</>};
const _bomber = {title: "Bomber", jsx: <><p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 7</Link></p>
<Ability id="bomber-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="bomber-su">Bomber (Su)</Pair>
<Pair title="Ability">A rogue with this talent can make a number of bombs per day equal to her Intelligence modifier (minimum 1). These bombs act as <Link to="/class/alchemist">alchemist's</Link> bombs, except they deal damage equal to the damage dealt by the rogue's <Link to="/ability/sneak_attack">sneak attack</Link> (the rogue doesn't add her Intelligence modifier to this damage).</Pair>
</Ability>
<Ability id="bomb-su" extraClasses="subAbility" icon={["smoking-finger"]}>
<Pair single id="bomb-su" flavor="Relevant text from the alchemist class ability.">Bomb (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Standard Action">You can make and throw bombs. Drawing the components of, creating, and throwing a bomb is a single action. Thrown bombs have a range of 20 feet and use the <Link to="/rule/throw_splash_weapon">Throw Splash Weapon special attack</Link>. On a direct hit, your bomb inflicts 1d6 points of fire damage.</Pair>
<Pair title="Info"><p>In addition to magical extracts, alchemists are adept at swiftly mixing various volatile chemicals and infusing them with their magical reserves to create powerful bombs that they can hurl at their enemies. Bombs are unstable, and if not used in the round they are created, they degrade and become inert - their method of creation prevents large volumes of explosive material from being created and stored.</p>
<p>Bombs are considered weapons and can be selected using feats such as <Link to="/feat/point_blank_shot">Point-Blank Shot</Link> and <Link to="/feat/weapon_focus">Weapon Focus</Link>.</p>
</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>Yes</Pair>
</Ability>
</>};
const _bombers_discovery = {title: "Bomber's Discovery", jsx: <><p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 7</Link></p>
<Ability id="bombers-discovery-su" icon={["stairs-goal"]}>
<Pair single id="bombers-discovery-su">Bomber's Discovery (Su)</Pair>
<Pair title="Prerequisites"><Link to="/talent/bomber">Bomber</Link></Pair>
<Pair title="Ability">A rogue with this talent gains an alchemist's <Link to="/ability/discovery">discovery</Link> that modifies a bomb.</Pair>
</Ability>
</>};
const _eldritch_conduit = {title: "Eldritch Conduit", jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 7</Link></p>
<Ability id="eldritch-conduit-su" icon={["magic-swirl"]}>
<Pair single id="eldritch-conduit-su" flavor="Survival in the Mana Wastes between the nations of Nex and Geb can depend heavily on locating sufficient magical equipment, which sometimes involves stealing power from a wand or scroll to power a more necessary one.">Eldritch Conduit (Su)</Pair>
<Pair title="Full-Round Action">A rogue with this talent can use two potions, two wands, or two scrolls. Each item is expended or loses a charge as if used normally. The rogue chooses to gain the magical effect of one, but calculates its effects using the caster level of the other. The rogue must still succeed at a <Link to="/skill/use_magic_device">Use Magic Device</Link> check to operate scrolls or wands unless some other ability allows him to do so, but makes only one skill check to operate both items.</Pair>
</Ability>
</>};
const _follow_along = {title: "Follow Along", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 44</Link></p>
<Ability id="follow-along-ex" icon={["armor-downgrade"]}>
<Pair single id="follow-along-ex" flavor="A rogue with this talent is familiar enough with enchantment magic to fool it, using spellcasters' complacency to set them up for a surprise attack.">Follow Along (Ex)</Pair>
<Pair title="Ability"><p>Whenever she succeeds at a saving throw against an enchantment effect, the rogue learns the spell's effect on a failed save, allowing her to play along and pretend to have failed her save. If she does so, the spellcaster does not learn that she succeeded at her saving throw, even if she was the only target, though she must succeed at an opposed Bluff check against a spellcaster's Sense Motive check to determine whether she is under the enchantment's effects.</p>
<p>While this ruse is in place, the spellcaster is <Link to="/rule/flat_footed">flat-footed</Link> against the rogue's first attack. If the spellcaster sees the rogue perform (or fail to perform) an action that would be impossible if she were under the enchantment's effect, he automatically discovers her ruse.</p>
</Pair>
</Ability>
</>};
const _grig_jig = {title: "Grig Jig", jsx: <><p><strong>Sources</strong> <Link to="/source/the_harrow_handbook">The Harrow Handbook pg. 20</Link></p>
<Ability id="grig-jig-su" icon={["magic-swirl"]}>
<Pair single id="grig-jig-su">Grig Jig (Su)</Pair>
<Pair title="Prerequisites">Intelligence 12+</Pair>
<Pair title="Usage">1 time/day + 1 per five rogue levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability"><p>The rogue can weave a bit of old Varisian magic into her footwork, dancing with an infectious passion that compels another nearby to join in. The rogue can target one humanoid within 30 feet and attempt a <Link to="/skill/perform">Perform</Link> (dance) check as a <strong className="hl">full-round action</strong> that does not provoke an attack of opportunity. Her target must succeed at a Will save (DC equal to the rogue's Perform [dance]) or it begins to dance uncontrollably.</p>
<p>So long as the rogue continues to spend a full-round action dancing each round, the affected target does so as well. If the target is attacked or otherwise in immediate danger while dancing, the effect ends.</p>
<p>Each round on its turn, the target can attempt an <Link to="/skill/acrobatics">Acrobatics</Link> or Perform (dance) check or a Will save (target's choice) against the rogue's Perform (dance) check to end the effect.</p>
</Pair>
<Pair title="Special">A target who resists the <em>jig</em> can not be affected by the same rogue's <em>jig</em> for 24 hours. The <em>grig jig</em> is a mind-affecting effect.</Pair>
</Ability>
</>};
const _scry_slip = {title: "Scry Slip", jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 27</Link></p>
<Ability id="scry-slip-su" icon={["armor-upgrade"]}>
<Pair single id="scry-slip-su">Scry Slip (Su)</Pair>
<Pair title="Passive Ability">Whenever a rogue with this talent is targeted by a scrying effect that allows a Will save, the caster of the divination must succeed at a caster level check (DC = 15 + the rogue's class level). This talent wards the rogue and any objects she is holding or carrying.</Pair>
</Ability>
</>};
const _scrying_familiarity = {title: "Scrying Familiarity", jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 22</Link></p>
<Ability id="scrying-familiarity-ex" icon={["armor-upgrade","rolling-dices"]}>
<Pair single id="scrying-familiarity-ex" flavor="You are well acquainted with scrying sensors.">Scrying Familiarity (Ex)</Pair>
<Pair title="Ability"><p>You can roll twice and take the better result on saving throws against <Link to="/spelldef/scrying">divination (scrying)</Link> spells and effects, on <Link to="/skill/perception">Perception</Link> checks to notice scrying sensors, and on caster level checks to overcome spell resistance when you use a scrying spell or effect.</p>
<p>If you notice a magical sensor, you can attempt a <Link to="/skill/stealth">Stealth</Link> check opposed by the caster's caster level check to avoid being detected by the sensor.</p>
</Pair>
</Ability>
</>};
const _shades_of_gray = {title: "Shades of Gray", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 44</Link></p>
<Ability id="shades-of-gray-ex" icon={["armor-upgrade"]}>
<Pair single id="shades-of-gray-ex">Shades of Gray (Ex)</Pair>
<Pair title="Ability">A rogue with this talent uses mental and emotional tricks to protect herself from attempts to discern her alignment. This offers her the benefits of <Link to="/spell/undetectable_alignment">undetectable alignment</Link> whenever she chooses, though she must be conscious to maintain the effect.</Pair>
</Ability>
</>};
const _umbral_gear = {title: "Umbral Gear", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 8</Link></p>
<Ability id="umbral-gear-su" icon={["magic-swirl"]}>
<Pair single id="umbral-gear-su">Umbral Gear (Su)</Pair>
<Pair title="Standard Action"><p>While in an area of <Link to="/rule/dim_light">dim light</Link> or darkness, a rogue with this talent can coalesce wisps of shadow into a quasi-real, functional item. The rogue must choose whether to make a <Link to="/eq-misc/crowbar">crowbar</Link>, 50 feet of <Link to="/eq-misc/silk_rope">silk rope</Link>, a <Link to="/eq-misc/glass_cutter">glass cutter</Link>, a <Link to="/main/equipment_weapons_light">light</Link> melee weapon with which she is proficient, a <Link to="/eq-misc/reversible_cloak">reversible cloak</Link>, <Link to="/eq-misc/thieves_tools">thieves' tools</Link>, or a <Link to="/eq-misc/wire_saw">wire saw</Link>; the GM may allow other similar items. The rogue can use such items for a number of minutes per day equal to 10 plus her rogue level. This duration does not need to be consecutive, but it must be used in 1-minute increments.</p>
<p>An item created with this ability remains until the rogue is no longer touching it, or until the rogue runs out of duration for this talent, at which time it dissolves.</p>
</Pair>
<Pair title="Special">A rogue can select this talent more than once, gaining an additional 10 minutes of duration each time this talent is selected. If a rogue has selected this talent at least twice, she adds 50 feet of silk rope with a <Link to="/eq-misc/grappling_hook">grappling hook</Link>, a <Link to="/rule/masterwork_a">masterwork</Link> light melee weapon with which she is proficient, and <Link to="/eq-misc/masterwork_thieves_tools">masterwork thieves' tools</Link> to the list of things she can create.</Pair>
</Ability>
</>};
const _acrobatic_assist = {title: "Acrobatic Assist", jsx: <><p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions pg. 27</Link></p>
<Ability id="acrobatic-assist-ex" icon={["upgrade","shield-reflect"]}>
<Pair single id="acrobatic-assist-ex">Acrobatic Assist (Ex)</Pair>
<Pair title="Ability"><p>You can expend an attack of opportunity to perform an <Link to="/rule/aid_another">aid another</Link> action to assist an adjacent ally's Acrobatics check, so long as he makes the check as part of movement that passes through your space or an adjacent space.</p>
<p>Additionally, whenever you use the aid another action to assist an ally in making an Acrobatics check and you succeed, your ally gains a +1 dodge bonus to AC against attacks of opportunity caused when he moves out of or within a threatened area, until the end of his turn.</p>
</Pair>
</Ability>
</>};
const _assault_leader = {title: "Assault Leader", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 130</Link></p>
<Ability id="assault-leader-ex" icon={["mailed-fist"]}>
<Pair single id="assault-leader-ex">Assault Leader (Ex)</Pair>
<Pair title="Ability">Once per day, when the rogue misses with an attack on a flanked opponent, she can designate a single ally who is also <Link to="/rule/flanking">flanking</Link> the target that her attack missed. That ally can make a single melee attack against the opponent as an immediate action.</Pair>
</Ability>
</>};
const _got_your_back = {title: "Got Your Back", jsx: <><p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions pg. 27</Link></p>
<Ability id="got-your-back-ex" icon={["upgrade"]}>
<Pair single id="got-your-back-ex">Got Your Back (Ex)</Pair>
<Pair title="Immediate Action">Once per round, you may expend an attack of opportunity to attempt an <Link to="/rule/aid_another_2">aid another</Link> check to improve an ally's attack. You and your ally must both be <Link to="/rule/flanking">flanking</Link> the same opponent. This counts as an attack of opportunity.</Pair>
</Ability>
</>};
const _heads_up = {title: "Heads Up", jsx: <><p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions pg. 27</Link></p>
<Ability id="heads-up-ex" icon={["upgrade"]}>
<Pair single id="heads-up-ex">Heads Up (Ex)</Pair>
<Pair title="Ability">When you make a <Link to="/skill/perception">Perception</Link> check, as an <strong className="hl">immediate</strong> or <strong className="hl">swift action</strong> you can allow one adjacent ally to act as if they had also made a Perception check with the same result.</Pair>
</Ability>
</>};
const _sacrifice_self = {title: "Sacrifice Self", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity pg. 25</Link></p>
<Ability id="sacrifice-self-ex" icon={["shield-reflect"]}>
<Pair single id="sacrifice-self-ex">Sacrifice Self (Ex)</Pair>
<Pair title="Prerequisites"><em>Evasion</em></Pair>
<Pair title="Ability"><p>A rogue who makes a successful Reflex save against an area effect can ignore the benefits of her <Link to="/ability/evasion">evasion</Link> ability to shield an adjacent ally against the effect, essentially halving the damage that ally would normally take.</p>
<p>A rogue with <Link to="/talent/improved_evasion">improved evasion</Link> can attempt a secondary save against her ally's damage. If the save is successful, neither she nor her ally takes any damage.</p>
</Pair>
</Ability>
</>};
const _shove_aside = {title: "Shove Aside", jsx: <><p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions pg. 27</Link></p>
<Ability id="shove-aside-ex" icon={["shield-reflect"]}>
<Pair single id="shove-aside-ex">Shove Aside (Ex)</Pair>
<Pair title="Prerequisites"><em>Evasion</em></Pair>
<Pair title="Ability">When you and an adjacent ally are both in the area of an attack that requires a saving throw, you can take a -4 penalty on your saving throw to grant your ally a +4 bonus on his saving throw. You lose the <Link to="/ability/evasion">evasion</Link> ability against this attack. If you have <Link to="/talent/improved_evasion">improved evasion</Link>, it is reduced to evasion for this attack instead.</Pair>
</Ability>
</>};
const _acrobatic_stunt = {title: "Acrobatic Stunt", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 16</Link></p>
<Ability id="acrobatic-stunt-ex" icon={["armor-upgrade","broken-shield"]}>
<Pair single id="acrobatic-stunt-ex">Acrobatic Stunt (Ex)</Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/acrobatics">Acrobatics</Link></Pair>
<Pair title="Usage">1 time/day + 1 per five rogue levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Immediate Action">When flanked by at least two opponents, a rogue with this talent can, when any of the threatening opponents attacks her, attempt an Acrobatics check against the highest CMD of the threatening creatures plus 2 per threatening creature beyond the second. If successful, the rogue may take a 5-foot step in any direction, so long as she remains within the reach of the attacker triggering the movement. The rogue's final position is used to determine whether the attacker benefits from <Link to="/rule/flanking">flanking</Link>. On a failed check, the rogue falls <Link to="/rule/prone">prone</Link> in her original position and the attack resolves as normal (the opponent gains a +4 bonus for attacking a prone target).</Pair>
</Ability>
</>};
const _ambuscading_grapple = {title: "Ambuscading Grapple", jsx: <><p><strong>Sources</strong> <Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook pg. 9</Link></p>
<Ability id="ambuscading-grapple-ex" icon={["mailed-fist"]}>
<Pair single id="ambuscading-grapple-ex">Ambuscading Grapple (Ex)</Pair>
<Pair title="Ability">When a rogue with this talent succeeds at a combat maneuver check to grapple an unaware opponent, she can immediately deal her sneak attack damage to the target. This counts as having hit with a sneak attack for the purpose of other abilities and talents.</Pair>
</Ability>
</>};
const _card_sharp = {title: "Card Sharp", jsx: <><p><strong>Sources</strong> <Link to="/source/the_harrow_handbook">The Harrow Handbook pg. 20</Link></p>
<Ability id="card-sharp-su" icon={["stairs-goal","bowman"]}>
<Pair single id="card-sharp-su">Card Sharp (Su)</Pair>
<Pair title="Ability">The rogue gains <Link to="/feat/deadly_dealer">Deadly Dealer</Link> as a bonus feat, even if she does not meet the prerequisites. Thrown cards are treated as <Link to="/eq-weapon/dart">darts</Link>, but the rogue cannot imbue cards with additional power unless she has the <Link to="/feat/arcane_strike">Arcane Strike</Link> feat. This talent otherwise functions as the Deadly Dealer feat.</Pair>
</Ability>
</>};
const _castling = {title: "Castling", jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 9</Link></p>
<Ability id="castling-ex" icon={["armor-upgrade"]}>
<Pair single id="castling-ex">Castling (Ex)</Pair>
<Pair title="Passive Ability">The rogue treats soft cover granted by creatures of her size or larger as though it were <Link to="/rule/cover">cover</Link> instead. Cover the rogue gains from this talent does not allow her to attempt Stealth checks.</Pair>
</Ability>
</>};
const _combat_swipe = {title: "Combat Swipe", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 130</Link>, <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<Ability id="combat-swipe" icon={["stairs-goal"]}>
<Pair single id="combat-swipe">Combat Swipe</Pair>
<Pair title="Ability">A rogue who selects this talent gains <Link to="/feat/improved_steal">Improved Steal</Link> as a bonus feat.</Pair>
</Ability>
<div className="sideNoteWrap singular optional elephant"><ScrollContainer id="talent-combat_swipe--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/the_elephant_in_the_room"><IonIcon aria-label="The Elephant in the Room" icon="/icons/elephant.svg" /></ThLink><td><p>This talent does not exist.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _combat_swipe_unchained_rogue = {title: "Combat Swipe (Unchained Rogue)", topLink: ["Unchained Rogue Talents","ability/unchained_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 21</Link>, <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<Ability id="combat-swipe-unchained-rogue" icon={["stairs-goal"]}>
<Pair single id="combat-swipe-unchained-rogue">Combat Swipe (Unchained Rogue)</Pair>
<Pair title="Ability">A rogue who selects this talent gains <Link to="/feat/improved_steal">Improved Steal</Link> as a bonus feat.</Pair>
<Pair title="At 6th Level">She is treated as if she met all the prerequisites for <Link to="/feat/greater_steal">Greater Steal</Link> (although she must take the feat as normal).</Pair>
</Ability>
<div className="sideNoteWrap singular optional elephant"><ScrollContainer id="talent-combat_swipe_unchained_rogue--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/the_elephant_in_the_room"><IonIcon aria-label="The Elephant in the Room" icon="/icons/elephant.svg" /></ThLink><td><p>This talent does not exist.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _combat_trick = {title: "Combat Trick", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 68</Link></p>
<Ability id="combat-trick" icon={["stairs-goal"]}>
<Pair single id="combat-trick">Combat Trick</Pair>
<Pair title="Ability">A rogue that selects this talent gains a bonus <Link to="/main/combat_feat">combat feat</Link>.</Pair>
</Ability>
</>};
const _deft_palm = {title: "Deft Palm", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 69</Link></p>
<Ability id="deft-palm-ex" icon={["stairs-goal"]}>
<Pair single id="deft-palm-ex">Deft Palm (Ex)</Pair>
<Pair title="Ability">A rogue with this talent can make a <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> check to conceal a weapon while holding it in plain sight, even while she is being observed.</Pair>
</Ability>
</>};
const _disease_use = {title: "Disease Use", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon pg. 19</Link></p>
<Ability id="disease-use" icon={["stairs-goal","mailed-fist"]}>
<Pair single id="disease-use">Disease Use</Pair>
<Pair title="Ability">A rogue with this talent can apply filth from garbage, a sewer, a city street, a polluted area, or long-unwashed clothing or fur to a weapon as a <strong className="hl">standard action</strong>. Doing so causes the weapon to inflict <Link to="/disease/filth_fever">filth fever</Link> on its next strike. The rogue does not risk exposure to this disease unless she is damaged by the weapon.</Pair>
<Pair title="Special">After a successful attack with the weapon, the filth is dispersed and must be reapplied.</Pair>
</Ability>
</>};
const _eerie_disappearance = {title: "Eerie Disappearance", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_streets">Heroes of the Streets pg. 26</Link></p>
<Ability id="eerie-disappearance-ex" icon={["stairs-goal"]}>
<Pair single id="eerie-disappearance-ex">Eerie Disappearance (Ex)</Pair>
<Pair title="Prerequisites">6th-level rogue</Pair>
<Pair title="Full-Round Action"><p>The rogue can move up to her speed. If she successfully reaches a location that offers her <Link to="/rule/cover">cover</Link> or <Link to="/rule/concealment">concealment</Link>, any creature observing her must attempt a Perception check opposed by the rogue's Stealth check. On a failed check, the observer loses track of the rogue and fails to note where she moved to. The rogue does not take a penalty on this Stealth check for moving up to her speed.</p>
<p>At the end of her movement, the rogue can attempt an Intimidate check to demoralize all foes within 60 feet who were aware of her at any point during her movement and are unaware of her current location. She rolls the Intimidate check only once and compares her result to the DC for each opponent.</p>
</Pair>
</Ability>
</>};
const _escaping_stunt = {title: "Escaping Stunt", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 16</Link></p>
<Ability id="escaping-stunt-ex" icon={["armor-upgrade"]}>
<Pair single id="escaping-stunt-ex">Escaping Stunt (Ex)</Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/escape_artist">Escape Artist</Link></Pair>
<Pair title="Immediate Action">A rogue with this talent can attempt an Escape Artist check in place of a Reflex saving throw against any effect that would impose the <Link to="/rule/entangled">entangled</Link> condition on her.</Pair>
<Pair title="Ability">When she is the target of a grapple combat maneuver, a rogue with this talent can attempt an Escape Artist check as an <strong className="hl">immediate action</strong>, using the result of the skill check in place of her CMD against that combat maneuver attempt.</Pair>
<Pair title="Usage">1 grapple/day + 1 per five rogue levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
</Ability>
</>};
const _false_attacker = {title: "False Attacker", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_streets">Heroes of the Streets pg. 26</Link></p>
<Ability id="false-attacker-ex" icon={["stairs-goal"]}>
<Pair single id="false-attacker-ex">False Attacker (Ex)</Pair>
<Pair title="Immediate Action">Whenever the rogue strikes a foe from hiding, she can attempt a <Link to="/skill/bluff">Bluff</Link> check (opposed by the target's Sense Motive or Perception check, whichever has a higher bonus) before rolling damage to convince the foe that another creature was the attacker. This Bluff check applies the normal modifiers for convincing a creature of a falsehood, but can be accomplished with just physical trickery (a shared language is not required).</Pair>
<Pair title="Special">If the Bluff is successful, and the rogue maintains concealment or cover, the rogue's stealth does not end.</Pair>
</Ability>
</>};
const _feint_from_shadows = {title: "Feint from Shadows", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 8</Link></p>
<Ability id="feint-from-shadows-ex" icon={["armor-downgrade"]}>
<Pair single id="feint-from-shadows-ex">Feint from Shadows (Ex)</Pair>
<Pair title="Ability">A rogue with this talent can <Link to="/skill/feint">feint</Link> in combat using a ranged weapon against a target within 30 feet and cause the opponent to lose his Dexterity modifier against her next melee or ranged attack. The rogue must have <Link to="/rule/concealment">concealment</Link> (but not full concealment) from the target of the feint.</Pair>
</Ability>
</>};
const _finesse_rogue = {title: "Finesse Rogue", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 68</Link></p>
<Ability id="finesse-rogue" icon={["stairs-goal"]}>
<Pair single id="finesse-rogue">Finesse Rogue</Pair>
<Pair title="Ability">A rogue that selects this talent gains <Link to="/feat/weapon_finesse">Weapon Finesse</Link> as a bonus feat.</Pair>
</Ability>
</>};
const _firearm_training = {title: "Firearm Training", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 69</Link></p>
<Ability id="firearm-training-ex" icon={["stairs-goal"]}>
<Pair single id="firearm-training-ex">Firearm Training (Ex)</Pair>
<Pair title="Ability">A rogue with this talent gains <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link> (firearms).</Pair>
</Ability>
</>};
const _grit = {title: "Grit", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 69</Link></p>
<Ability id="grit-ex" icon={["stairs-goal"]}>
<Pair single id="grit-ex">Grit (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/talent/firearm_training">Firearm training</Link></Pair>
<Pair title="Ability">A rogue with this talent gains the <Link to="/feat/amateur_gunslinger">Amateur Gunslinger</Link> feat and one <Link to="/main/grit_feat">grit feat</Link> of her choice. She must fulfill the prerequisites of the grit feat in order to choose it.</Pair>
</Ability>
</>};
const _flying_stunt = {title: "Flying Stunt", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 16</Link></p>
<Ability id="flying-stunt-ex" icon={["upgrade"]}>
<Pair single id="flying-stunt-ex">Flying Stunt (Ex)</Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/fly">Fly</Link></Pair>
<Pair title="Swift Action">A rogue with this talent can attempt a Fly check against a target's CMD when <Link to="/rule/charging">charging</Link> from above that target. Success allows the rogue to add an amount damage equal to her Dexterity modifier to the attack's damage.</Pair>
<Pair title="Special">This additional damage is <Link to="/misc/precision_damage">precision damage</Link> and is not multiplied on a critical hit. A creature immune to sneak attacks is immune to this additional damage.</Pair>
</Ability>
</>};
const _fortified_position = {title: "Fortified Position", jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 9</Link></p>
<Ability id="fortified-position-ex" icon={["armor-upgrade"]}>
<Pair single id="fortified-position-ex">Fortified Position (Ex)</Pair>
<Pair title="Passive Ability">Whenever the rogue gains a bonus on Reflex saves due to <Link to="/rule/cover">cover</Link>, she gains an equal bonus on Fortitude saves.</Pair>
</Ability>
</>};
const _maneuvering_dodge = {title: "Maneuvering Dodge", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 32</Link></p>
<Ability id="maneuvering-dodge-ex" icon={["upgrade"]}>
<Pair single id="maneuvering-dodge-ex">Maneuvering Dodge (Ex)</Pair>
<Pair title="Passive Ability">Whenever a foe of the rogue's size or larger misses the rogue with a melee attack, the rogue gains a +2 bonus on any Acrobatics, Climb, Fly, and Swim checks she attempts for 1 round.</Pair>
<Pair title="At 8th Level">This bonus increases to +4.</Pair>
</Ability>
</>};
const _mien_of_despair = {title: "Mien of Despair", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 8</Link></p>
<Ability id="mien-of-despair-su" icon={["armor-downgrade"]}>
<Pair single id="mien-of-despair-su">Mien of Despair (Su)</Pair>
<Pair title="Ability">When a rogue with this talent successfully demoralizes an opponent using the <Link to="/skill/intimidate">Intimidate</Link> skill or performs a successful <Link to="/rule/feint">feint</Link> against an opponent, the opponent loses any morale bonuses and cannot benefit from any morale bonuses for 1d4+1 rounds.</Pair>
</Ability>
</>};
const _positioning_attack = {title: "Positioning Attack", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 131</Link></p>
<Ability id="positioning-attack-ex" icon={["mailed-fist"]}>
<Pair single id="positioning-attack-ex">Positioning Attack (Ex)</Pair>
<Pair title="Ability">Once per day, when a rogue with this talent hits a creature with a melee attack, she can move up to 30 feet without provoking attacks of opportunity. The movement must end in a space adjacent to the creature hit with the melee attack.</Pair>
</Ability>
</>};
const _resiliency = {title: "Resiliency", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 68</Link></p>
<Ability id="resiliency-ex" icon={["remedy"]}>
<Pair single id="resiliency-ex">Resiliency (Ex)</Pair>
<Pair title="Immediate Action">Once per day, a rogue with this ability can gain a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to the rogue's level. Activating this ability can only be performed when she is brought to below 0 hit points. This ability can be used to prevent her from dying.</Pair>
<Pair title="Special">These temporary hit points last for 1 minute. If the rogue's hit points drop below 0 due to the loss of these temporary hit points, she falls <Link to="/misc/unconscious">unconscious</Link> and is <Link to="/misc/dying">dying</Link> as normal.</Pair>
</Ability>
</>};
const _rogue_crawl = {title: "Rogue Crawl", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 68</Link></p>
<Ability id="rogue-crawl-ex" icon={["stairs-goal"]}>
<Pair single id="rogue-crawl-ex">Rogue Crawl (Ex)</Pair>
<Pair title="Ability">While <Link to="/rule/prone">prone</Link>, a rogue with this ability can move at half speed. This movement provokes attacks of opportunity as normal. A rogue with this talent can take a 5-foot step while crawling.</Pair>
</Ability>
</>};
const _rogue_crawl_unchained_rogue = {title: "Rogue Crawl (Unchained Rogue)", topLink: ["Unchained Rogue Talents","ability/unchained_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 22</Link></p>
<Ability id="rogue-crawl-unchained-rogue-ex" icon={["stairs-goal","upgrade","armor-upgrade"]}>
<Pair single id="rogue-crawl-unchained-rogue-ex">Rogue Crawl (Unchained Rogue) (Ex)</Pair>
<Pair title="Ability">While <Link to="/rule/prone">prone</Link>, a rogue with this ability can move at half speed. This movement provokes attacks of opportunity as normal. A rogue with this talent can take a 5-foot step while crawling and she reduces her attack roll and AC penalties for being prone by 2.</Pair>
</Ability>
</>};
const _sleight_of_hand_stunt = {title: "Sleight of Hand Stunt", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 16</Link></p>
<Ability id="sleight-of-hand-stunt-ex" icon={["stairs-goal"]}>
<Pair single id="sleight-of-hand-stunt-ex">Sleight of Hand Stunt (Ex)</Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/sleight_of_hand">Sleight of Hand</Link></Pair>
<Pair title="Ability">In place of an attack of opportunity, a rogue with this talent can attempt a <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> check against the CMD of an opponent that provokes an attack of opportunity by firing a projectile weapon while threatened. If successful, the rogue plucks the ammunition from the provoking weapon, negating the attack.</Pair>
<Pair title="Special">The rogue may use this ability as many times in a round as she could make attacks of opportunity. At the GM's discretion, certain projectile weapons may not be susceptible to this ability, such as siege engines or firearms.</Pair>
</Ability>
</>};
const _snap_shot = {title: "Snap Shot", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 131</Link></p>
<Ability id="snap-shot-ex" icon={["bowman"]}>
<Pair single id="snap-shot-ex">Snap Shot (Ex)</Pair>
<Pair title="Ability">A rogue with this talent may treat her intitiative roll as a 20 for a surprise round, regardless of her initiative, but she may only take an attack action with a ranged weapon. Her normal initiative roll is used in subsequent rounds.</Pair>
<Pair title="Special">If two or more rogues possess this talent, their initiative determines the order in which they act, but they all go before any other creature. If a rogue is prevented from acting in the surprise round, this talent has no effect.</Pair>
</Ability>
</>};
const _stand_up = {title: "Stand Up", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 68</Link></p>
<Ability id="stand-up-ex" icon={["stairs-goal"]}>
<Pair single id="stand-up-ex">Stand Up (Ex)</Pair>
<Pair title="Ability">A rogue with this ability can stand up from a <Link to="/rule/prone">prone</Link> position as a <strong className="hl">free action</strong>. This still provokes attacks of opportunity for standing up while threatened by a foe.</Pair>
</Ability>
</>};
const _stand_up_unchained_rogue = {title: "Stand Up (Unchained Rogue)", topLink: ["Unchained Rogue Talents","ability/unchained_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 22</Link></p>
<Ability id="stand-up-unchained-rogue-ex" icon={["stairs-goal"]}>
<Pair single id="stand-up-unchained-rogue-ex">Stand Up (Unchained Rogue) (Ex)</Pair>
<Pair title="Ability">A rogue with this ability can stand up from a <Link to="/rule/prone">prone</Link> position as a <strong className="hl">free action</strong>. This still provokes attacks of opportunity for standing up while threatened by a foe.</Pair>
<Pair title="Special">A rogue with this ability can stand up from a prone position as a <strong className="hl">swift action</strong> without provoking attacks of opportunity.</Pair>
</Ability>
</>};
const _stealth_stunt = {title: "Stealth Stunt", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 16</Link></p>
<Ability id="stealth-stunt-ex" icon={["armor-downgrade"]}>
<Pair single id="stealth-stunt-ex">Stealth Stunt (Ex)</Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/stealth">Stealth</Link></Pair>
<Pair title="Ability">When benefiting from <Link to="/rule/concealment">concealment</Link>, a rogue with this talent can forgo an attack of opportunity to attempt a <Link to="/skill/stealth">Stealth</Link> check against the provoking opponent's CMD. Success allows the rogue to treat her opponent as <Link to="/rule/flat_footed">flat-footed</Link> against the rogue's first melee attack before the end of her next turn. Using this ability does not count against the rogue's available attacks of opportunity for the round.</Pair>
</Ability>
</>};
const _superior_sniper = {title: "Superior Sniper", jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 27</Link></p>
<Ability id="superior-sniper" icon={["stairs-goal"]}>
<Pair single id="superior-sniper">Superior Sniper</Pair>
<Pair title="Ability">A rogue who selects this talent gains <Link to="/feat/expert_sniper">Expert Sniper</Link> as a bonus feat. If she already has this feat, she can instead select any feat that lists Expert Sniper as a prerequisite, as long as she meets the feat's prerequisites.</Pair>
</Ability>
</>};
const _unbalancing_trick = {title: "Unbalancing Trick", jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 9</Link></p>
<Ability id="unbalancing-trick-ex" icon={["stairs-goal"]}>
<Pair single id="unbalancing-trick-ex">Unbalancing Trick (Ex)</Pair>
<Pair title="Ability">The rogue gains <Link to="/feat/improved_trip">Improved Trip</Link> as a bonus feat, even if she does not meet the prerequisites.</Pair>
<Pair title="At 6th Level">She is treated as if she meets all the prerequisites of <Link to="/feat/greater_trip">Greater Trip</Link> (although she must take the feat as normal to gain its benefits).</Pair>
</Ability>
</>};
const _underhanded_trick = {title: "Underhanded Trick", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 8</Link></p>
<Ability id="underhanded-trick" icon={["stairs-goal"]}>
<Pair single id="underhanded-trick">Underhanded Trick</Pair>
<Pair title="Ability">A rogue who selects this talent gains <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link> as a bonus feat, even if she does not meet the prerequisites.</Pair>
<Pair title="At 6th Level">She is treated as if she meets all the prerequisites for <Link to="/feat/greater_dirty_trick">Greater Dirty Trick</Link> (although she must take the feat as normal).</Pair>
<Pair title="Special">If she succeeds in giving her target the <Link to="/misc/blinded">blinded</Link> condition, the target cannot remove the condition during the first round of blindness.</Pair>
</Ability>
</>};
const _weapon_training = {title: "Weapon Training", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 69</Link></p>
<Ability id="weapon-training" icon={["stairs-goal"]}>
<Pair single id="weapon-training">Weapon Training</Pair>
<Pair title="Ability">A rogue that selects this talent gains <Link to="/feat/weapon_focus">Weapon Focus</Link> as a bonus feat.</Pair>
</Ability>
</>};
const _without_a_trace = {title: "Without a Trace", jsx: <><p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 7</Link></p>
<Ability id="without-a-trace-ex" icon={["armor-upgrade"]}>
<Pair single id="without-a-trace-ex">Without a Trace (Ex)</Pair>
<Pair title="Immediate Action">When the rogue successfully uses <Link to="/ability/evasion">evasion</Link> or <Link to="/talent/improved_evasion">improved evasion</Link> to avoid taking damage, she can attempt to hide. The rogue attempts a Stealth check with a -20 penalty, but gains a +1 bonus on her check for every die of damage the avoided attack would have dealt. The rogue can attempt this check even while being observed, as long as she has <Link to="/rule/cover">cover</Link> or <Link to="/rule/concealment">concealment</Link> or an ability that allows her to use the Stealth skill while being observed without cover or concealment.</Pair>
</Ability>
</>};
const _canny_observer = {title: "Canny Observer", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 130</Link></p>
<Ability id="canny-observer-ex" icon={["upgrade"]}>
<Pair single id="canny-observer-ex">Canny Observer (Ex)</Pair>
<Pair title="Passive Ability">When a rogue with this talent makes a Perception check to hear the details of a conversation or to find concealed or secret objects (including doors and traps), she gains a +4 bonus.</Pair>
</Ability>
</>};
const _cunning_trigger = {title: "Cunning Trigger", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 130</Link></p>
<Ability id="cunning-trigger-ex" icon={["stairs-goal"]}>
<Pair single id="cunning-trigger-ex">Cunning Trigger (Ex)</Pair>
<Pair title="Swift Action">A rogue with this talent can set off any trap within 30 feet that she constructed.</Pair>
</Ability>
</>};
const _quick_trapsmith = {title: "Quick Trapsmith", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 131</Link></p>
<Ability id="quick-trapsmith-ex" icon={["stairs-goal"]}>
<Pair single id="quick-trapsmith-ex">Quick Trapsmith (Ex)</Pair>
<Pair title="Full-Round Action">A rogue with this talent can set a simple trap with a CR no greater than 1/2 her rogue level. To do this, she must purchase the components, spend the required time constructing the trap in advance, and have its components at hand. The type of trap that can be constructed in this way is subject to GM discretion.</Pair>
</Ability>
</>};
const _trap_spotter = {title: "Trap Spotter", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 69</Link></p>
<Ability id="trap-spotter-ex" icon={["stairs-goal"]}>
<Pair single id="trap-spotter-ex">Trap Spotter (Ex)</Pair>
<Pair title="Passive Ability">Whenever a rogue with this talent comes within 10 feet of a trap, she receives an immediate Perception skill check to notice the trap. This check should be made in secret by the GM.</Pair>
</Ability>
</>};
const _fast_picks = {title: "Fast Picks", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 130</Link></p>
<Ability id="fast-picks-ex" icon={["upgrade"]}>
<Pair single id="fast-picks-ex">Fast Picks (Ex)</Pair>
<Pair title="Ability">A rogue with this talent can use the <Link to="/skill/disable_device">Disable Device</Link> skill to attempt to open a lock as a <strong className="hl">standard action</strong> instead of a <strong className="hl">full-round action</strong>.</Pair>
</Ability>
</>};
const _hairpin_trick = {title: "Hairpin Trick", jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 53</Link></p>
<Ability id="hairpin-trick-ex" icon={["upgrade"]}>
<Pair single id="hairpin-trick-ex">Hairpin Trick (Ex)</Pair>
<Pair title="Ability">The rogue is skilled at making do with anything she can find. She takes no penalty on <Link to="/skill/disable_device">Disable Device</Link> checks for using improvised tools, and can attempt such checks without any tools at a -4 penalty. She treats all non-improvised <Link to="/eq-misc/thieves_tools">thieves' tools</Link> as masterwork and doubles the bonus she gets from <Link to="/eq-misc/masterwork_thieves_tools">masterwork thieves' tools</Link> from +2 to +4.</Pair>
</Ability>
</>};
const _last_ditch_effort = {title: "Last Ditch Effort", jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_sands">People of the Sands pg. 19</Link></p>
<Ability id="last-ditch-effort" icon={["armor-upgrade"]}>
<Pair single id="last-ditch-effort">Last Ditch Effort</Pair>
<Pair title="Ability">Once per day, a rogue with this ability who accidentally activates a trap while attempting to disarm it may immediately attempt another Disable Device check to disarm it, albeit at a -5 penalty. The result of the second check is taken even if the result is lower.</Pair>
</Ability>
</>};
const _papercraft_tools = {title: "Papercraft Tools", jsx: <><p><strong>Sources</strong> <Link to="/source/the_harrow_handbook">The Harrow Handbook pg. 2</Link></p>
<Ability id="papercraft-tools-ex" icon={["stairs-goal"]}>
<Pair single id="papercraft-tools-ex" flavor="Traditional thieves' tools might be suspicious, but no guard looks twice at a common deck of cards.">Papercraft Tools (Ex)</Pair>
<Pair title="Ability">So long has the rogue has access to a <Link to="/eq-misc/deck_of_cards">deck of cards</Link>, she can destroy one card to attempt a single <Link to="/skill/disable_device">Disable Device</Link> check as if she had a set of <Link to="/eq-misc/thieves_tools">thieves tools</Link>. If she uses a <Link to="/eq-misc/harrow_deck">harrow card</Link> for this purpose, she can treat the card as a set of <Link to="/eq-misc/masterwork_thieves_tools">masterwork thieves' tools</Link> (granting her a +2 circumstance bonus on the Disable Device check), though the card is still destroyed after use.</Pair>
</Ability>
</>};
const _quick_disable = {title: "Quick Disable", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 68</Link></p>
<Ability id="quick-disable-ex" icon={["upgrade"]}>
<Pair single id="quick-disable-ex">Quick Disable (Ex)</Pair>
<Pair title="Passive Ability">It takes a rogue with this ability half the normal amount of time to disable a trap using the <Link to="/skill/disable_device">Disable Device</Link> skill (minimum 1 round).</Pair>
</Ability>
</>};
const _quick_disable_unchained_rogue = {title: "Quick Disable (Unchained Rogue)", topLink: ["Unchained Rogue Talents","ability/unchained_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 22</Link></p>
<Ability id="quick-disable-unchained-rogue-ex" icon={["upgrade"]}>
<Pair single id="quick-disable-unchained-rogue-ex">Quick Disable (Unchained Rogue) (Ex)</Pair>
<Pair title="Ability">It takes a rogue with this ability half the normal amount of time to disable a trap using the <Link to="/skill/disable_device">Disable Device</Link> skill (minimum 1 round). When she uses Disable Device to open a lock that would normally take a full-round action to open, she reduces the duration to a <strong className="hl">standard action</strong>.</Pair>
</Ability>
</>};
const _camouflage = {title: "Camouflage", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 130</Link></p>
<Ability id="camouflage-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="camouflage-ex">Camouflage (Ex)</Pair>
<Pair title="Ability">Once per day, a rogue with this talent can craft simple but effective camouflage from the surrounding foliage. The rogue needs 1 minute to prepare the camouflage, but once she does, it is good for the rest of the day or until the rogue fails a saving throw against an area effect spell that deals fire, cold, or acid damage, whichever comes first. The rogue gains a +4 bonus on Stealth checks while within terrain that matches the foliage used to make the camouflage. This ability cannot be used in areas without natural foliage.</Pair>
</Ability>
</>};
const _charmer = {title: "Charmer", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 130</Link></p>
<Ability id="charmer-ex" icon={["rolling-dices"]}>
<Pair single id="charmer-ex">Charmer (Ex)</Pair>
<Pair title="Usage">1 time/day + 1 per five rogue levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">The rogue can roll two dice while making a Diplomacy check, and take the better result. She must choose to use this talent before making the Diplomacy check.</Pair>
</Ability>
</>};
const _coax_information = {title: "Coax Information", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 1</Link></p>
<Ability id="coax-information-ex" icon={["upgrade"]}>
<Pair single id="coax-information-ex">Coax Information (Ex)</Pair>
<Pair title="Ability">A rogue with this talent can use <Link to="/skill/bluff">Bluff</Link> or <Link to="/skill/diplomacy">Diplomacy</Link> in place of <Link to="/skill/intimidate">Intimidate</Link> to force an opponent to act friendly toward her.</Pair>
</Ability>
</>};
const _coax_information_unchained_rogue = {title: "Coax Information", topLink: ["Unchained Rogue Talents","ability/unchained_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 21</Link></p>
<Ability id="coax-information-ex" icon={["upgrade"]}>
<Pair single id="coax-information-ex">Coax Information (Ex)</Pair>
<Pair title="Ability">A rogue with this talent can use <Link to="/skill/bluff">Bluff</Link> or <Link to="/skill/diplomacy">Diplomacy</Link> in place of <Link to="/skill/intimidate">Intimidate</Link> to force an opponent to act friendly toward her. When the duration of the attitude shift ends, that opponents' attitude toward the rogue returns to its previous level, rather than dropping one level.</Pair>
</Ability>
</>};
const _convincing_lie = {title: "Convincing Lie", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 69</Link></p>
<Ability id="convincing-lie-ex" icon={["upgrade"]}>
<Pair single id="convincing-lie-ex" flavor="When a rogue with this talent lies, she creates fabrications so convincing that others treat them as truth.">Convincing Lie (Ex)</Pair>
<Pair title="Ability">When a rogue with this talent successfully uses the <Link to="/skill/bluff">Bluff</Link> skill to convince someone that what she is saying is true, if that individual is questioned later about the statement or story, that person uses the rogue's Bluff skill modifier to convince the questioner, rather than his own. If his Bluff skill modifier is better than the rogue's, the individual can use his own modifier and gain a +2 bonus on any check to convince others of the lie.</Pair>
<Pair title="Special">This effect lasts for a number of days equal to 1/2 the rogue's level + the rogue's Charisma modifier.</Pair>
</Ability>
</>};
const _dampen_presence = {title: "Dampen Presence", jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 27</Link></p>
<Ability id="dampen-presence" icon={["stairs-goal"]}>
<Pair single id="dampen-presence">Dampen Presence</Pair>
<Pair title="Ability">A rogue who selects this talent gains <Link to="/feat/dampen_presence">Dampen Presence</Link> as a bonus feat. The rogue does not need to meet the feat's prerequisites. The rogue is also considered to have the <Link to="/feat/skill_focus">Skill Focus</Link> (Stealth) feat for the purpose of satisfying the prerequisites of any feat that lists Dampen Presence as a prerequisite.</Pair>
</Ability>
</>};
const _face_in_the_crowd = {title: "Face in the Crowd", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon pg. 19</Link></p>
<Ability id="face-in-the-crowd" icon={["upgrade"]}>
<Pair single id="face-in-the-crowd">Face in the Crowd</Pair>
<Pair title="Ability">A rogue with this talent can blend into groups easily. Opposed <Link to="/skill/perception">Perception</Link> and <Link to="/skill/sense_motive">Sense Motive</Link> checks take a -2 penalty when made against the rogue's <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/disguise">Disguise</Link>, <Link to="/skill/sleight_of_hand">Sleight of Hand</Link>, or <Link to="/skill/stealth">Stealth</Link> checks if she's within 30 feet of at least two non-hostile characters of her apparent creature type. This penalty increases to -4 if she's within 30 feet of at least eight such creatures or is currently in a square occupied by a crowd.</Pair>
</Ability>
</>};
const _false_friend = {title: "False Friend", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 193</Link></p>
<Ability id="false-friend-ex" icon={["upgrade"]}>
<Pair single id="false-friend-ex">False Friend (Ex)</Pair>
<Pair title="Passive Ability">A rogue with this talent gains a +4 bonus when making Bluff checks to convince someone she has never met or who doesn't know her well that they are previously acquainted or know each other well.</Pair>
</Ability>
</>};
const _fast_fingers = {title: "Fast Fingers", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 130</Link></p>
<Ability id="fast-fingers-ex" icon={["rolling-dices"]}>
<Pair single id="fast-fingers-ex">Fast Fingers (Ex)</Pair>
<Pair title="Usage">1 time/day + 1 per five rogue levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">A rogue with this talent can roll two dice while making a <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> check and take the better result. She must choose to use this talent before making the Sleight of Hand check.</Pair>
</Ability>
</>};
const _fast_stealth = {title: "Fast Stealth", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 68</Link></p>
<Ability id="fast-stealth-ex" icon={["upgrade"]}>
<Pair single id="fast-stealth-ex">Fast Stealth (Ex)</Pair>
<Pair title="Ability">This ability allows a rogue to move at full speed using the <Link to="/skill/stealth">Stealth</Link> skill without penalty.</Pair>
</Ability>
</>};
const _honeyed_words = {title: "Honeyed Words", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 131</Link></p>
<Ability id="honeyed-words-ex" icon={["rolling-dices"]}>
<Pair single id="honeyed-words-ex">Honeyed Words (Ex)</Pair>
<Pair title="Usage">1 time/day + 1 per five rogue levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">The rogue can roll two dice while making a Bluff check, and take the better result. She must choose to use this talent before making the Bluff check.</Pair>
</Ability>
</>};
const _innocuous_servant = {title: "Innocuous Servant", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 32</Link></p>
<Ability id="innocuous-servant-ex" icon={["upgrade"]}>
<Pair single id="innocuous-servant-ex" flavor="The rogue is an expert at appearing to be an unimportant servant, be it an attach&eacute;, bodyguard, driver, maid, kitchen assistant, or similar staff member.">Innocuous Servant (Ex)</Pair>
<Pair title="Passive Ability"><p>The rogue gains a +2 bonus on <Link to="/skill/disguise">Disguise</Link> checks to appear to be a servant, but not to impersonate a particular servant. She also gains a +2 bonus on <Link to="/skill/bluff">Bluff</Link> checks to lie to maintain this guise.</p>
<p>While disguised as a servant, she gains a +2 bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to gather information among servants. Because she is easily overlooked as a servant, she can gather information from those she serves without asking them questions directly or alerting them to her interest. Doing so takes 1d4 days and requires a successful Bluff check instead of a Diplomacy check.</p>
</Pair>
<Pair title="At 8th Level">The bonuses granted by this talent increase to +4.</Pair>
</Ability>
</>};
const _just_a_face_in_the_crowd = {title: "Just a Face in the Crowd", jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 7</Link></p>
<Ability id="just-a-face-in-the-crowd-su" icon={["upgrade"]}>
<Pair single id="just-a-face-in-the-crowd-su" flavor="The rabble-rousers of Galt can blend into a crowd and are able to hide and spot others who appear to be hiding.">Just a Face in the Crowd (Su)</Pair>
<Pair title="Passive Ability">The rogue gains a bonus equal to <Link to="/misc/half">half</Link> his class level on Disguise and Perception checks when 10 or more creatures of his size are within 30 feet of him.</Pair>
</Ability>
</>};
const _obfuscate_story = {title: "Obfuscate Story", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 193</Link></p>
<Ability id="obfuscate-story-ex" icon={["armor-downgrade"]}>
<Pair single id="obfuscate-story-ex">Obfuscate Story (Ex)</Pair>
<Pair title="Ability">While another individual attempts to give an account of an event, the rogue makes an opposed <Link to="/skill/diplomacy">Diplomacy</Link> check to deftly interject comments or statements over the course of the storytelling that cause the individual to muddle his ability to recall accurate or specific details. If the rogue succeeds, her target remains unaware that the rogue's interjections caused the confusion. However, if she fails, the target is allowed a <Link to="/skill/sense_motive">Sense Motive</Link> check (DC equal to the rogue's failed Diplomacy check) to figure out that she made deliberate attempts to confuse the story.</Pair>
</Ability>
</>};
const _steal_the_story = {title: "Steal the Story", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 193</Link></p>
<Ability id="steal-the-story-ex" icon={["armor-downgrade"]}>
<Pair single id="steal-the-story-ex">Steal the Story (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/talent/obfuscate_story">Obfuscate story</Link></Pair>
<Pair title="Ability">After muddling another's account using <em>obfuscate story,</em> the rogue may make another opposed <Link to="/skill/diplomacy">Diplomacy</Link> check to alter the details further in order to discredit, insult, or humiliate the target. If the check succeeds, the target takes a penalty on Diplomacy and Intimidate checks against anyone who heard the altered story. This penalty is equal to the rogue's Intelligence, Wisdom, or Charisma bonus (whichever is highest), and lasts until the target is able to repair his reputation or discredit the rogue.</Pair>
</Ability>
</>};
const _quick_disguise = {title: "Quick Disguise", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 131</Link></p>
<Ability id="quick-disguise-ex" icon={["upgrade"]}>
<Pair single id="quick-disguise-ex">Quick Disguise (Ex)</Pair>
<Pair title="Ability"><p>A rogue with this talent can use the items at hand and seemingly innocuous material hidden on her person to create startlingly effective disguises, reducing the amount of time it takes to create a disguise using the <Link to="/skill/disguise">Disguise</Link> skill.</p>
<p>The time needed for the rogue to alter her appearance in this manner is based on the complexity of the disguise, as noted on the following table. The times are cumulative, so if a female rogue wants to disguise herself as a male of a different race, that takes 2 minutes.</p>
<ScrollContainer id="talent-quick_disguise--table-0"><table>
<thead>
<tr>
<th>Disguise</th>
<th>Time</th>
</tr>
</thead>
<tbody><tr>
<td>Minor details only</td>
<td>1 full-round action</td>
</tr>
<tr>
<td>Disguise as a different gender</td>
<td>1 minute</td>
</tr>
<tr>
<td>Disguise as a different race</td>
<td>1 minute</td>
</tr>
<tr>
<td>Disguise as a different age category</td>
<td>1 minute</td>
</tr>
<tr>
<td>Disguise as a different size category</td>
<td>1 minute</td>
</tr>
</tbody></table></ScrollContainer>
</Pair>
</Ability>
</>};
const _rapid_boost = {title: "Rapid Boost", jsx: <><p><strong>Sources</strong> <Link to="/source/the_harrow_handbook">The Harrow Handbook pg. 2</Link></p>
<Ability id="rapid-boost-ex" icon={["rolling-dices"]}>
<Pair single id="rapid-boost-ex">Rapid Boost (Ex)</Pair>
<Pair title="Usage">1 time/day + 1 per five rogue levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">The rogue can roll two dice while attempting a <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> check and take the better result. She must choose to use this talent before attempting the Sleight of Hand check.</Pair>
</Ability>
</>};
const _sczarni_smuggler = {title: "Sczarni Smuggler", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 32</Link></p>
<Ability id="sczarni-smuggler-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="sczarni-smuggler-ex" flavor="The rogue has picked up Sczarni tricks for making masterful forgeries and using bribery to evade trade rules.">Sczarni Smuggler (Ex)</Pair>
<Pair title="Ability"><p>The rogue needs to learn only the approximate appearance of a document that doesn't require a particular person's signature to accurately forge the document with <Link to="/skill/linguistics">Linguistics</Link> (gaining a +8 bonus on the check to create the forgery, as if she had seen a similar document before). The rogue needs only a small sample of a person's handwriting to make a convincing forgery of great length in that person's handwriting.</p>
<p>The rogue can always take 10 on <Link to="/skill/diplomacy">Diplomacy</Link> checks to offer bribes. In addition, the rogue automatically gains an extra advantage at the start of a <Link to="/rule/pursuit">pursuit</Link> in an urban environment.</p>
</Pair>
</Ability>
</>};
const _scavenger = {title: "Scavenger", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon pg. 19</Link></p>
<Ability id="scavenger" icon={["stairs-goal","upgrade"]}>
<Pair single id="scavenger">Scavenger</Pair>
<Pair title="Ability">A rogue with this talent can pick up and stow an object as a <strong className="hl">swift action</strong> instead of two separate move actions. She gains a +2 bonus on <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> checks to pick the pockets of creatures that are <Link to="/misc/stunned">stunned</Link> or <Link to="/misc/disabled">disabled</Link>.</Pair>
</Ability>
</>};
const _terrain_mastery = {title: "Terrain Mastery", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 70</Link></p>
<Ability id="terrain-mastery-ex" icon={["stairs-goal"]}>
<Pair single id="terrain-mastery-ex">Terrain Mastery (Ex)</Pair>
<Pair title="Ability">A rogue with this talent gains a <Link to="/ability/favored_terrain">favored terrain</Link> as the ranger ability of the same name, though the favored terrain ability does not increase with her level as the ranger's ability does.</Pair>
<Pair title="Special">A rogue can take this ability multiple times, each time applying it to a new terrain.</Pair>
</Ability>
</>};
const _bardic_pretender = {title: "Bardic Pretender", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_130_city_in_the_lions_eye">Pathfinder #130: City in the Lion's Eye pg. 76</Link></p>
<Ability id="bardic-pretender-ex" icon={["stairs-goal"]}>
<Pair single id="bardic-pretender-ex">Bardic Pretender (Ex)</Pair>
<Pair title="Ability">The rogue knows enough about music and performance to survive in a bardic college and can fake what she doesn't know. The rogue qualifies as having the <Link to="/performance/inspire_competence">inspire competence</Link> bardic performance class feature for the purpose of meeting prestige class requirements, although this talent doesn't grant her the <em>bardic performance</em> ability.</Pair>
</Ability>
</>};
const _certainty = {title: "Certainty", topLink: ["Unchained Rogue Talents","ability/unchained_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 21</Link></p>
<Ability id="certainty-ex" icon={["rolling-dices"]}>
<Pair single id="certainty-ex">Certainty (Ex)</Pair>
<Pair title="Prerequisites"><em>Rogue's edge</em> class feature</Pair>
<Pair title="Choice">The rogue chooses one of the skills she selected with <em>rogue's edge.</em></Pair>
<Pair title="Ability">The rogue can reroll a skill check she just made with the selected skill and take the better result.</Pair>
<Pair title="Usage">1 time/day per five rogue levels (minimum 1)<ByLevelPop levels={[[1,1],[10,2],[15,3],[20,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Special">A rogue can select this talent multiple times. Each time, the rogue must choose a different skill.</Pair>
</Ability>
</>};
const _claimed_turf = {title: "Claimed Turf", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 32</Link></p>
<Ability id="claimed-turf-ex" icon={["stairs-goal"]}>
<Pair single id="claimed-turf-ex">Claimed Turf (Ex)</Pair>
<Pair title="Ability"><p>The rogue is well known in a specific community in which she gains the benefits of <em>renown.</em> She gains the <Link to="/soctalent/renown">renown</Link> vigilante social talent. This community can be an entire settlement or portions of a settlement (such as a particular district or neighborhood), depending on the population as allowed by the <em>renown</em> social talent.</p>
<p>Anytime she could select another rogue talent, the rogue can also select from the following list of social talents, using her rogue level as her vigilante level for the purpose meeting of prerequisites: <Link to="/soctalent/celebrity_discount">celebrity discount</Link>, <Link to="/soctalent/celebrity_perks">celebrity perks</Link>, <Link to="/soctalent/gossip_collector">gossip collector</Link>, <Link to="/soctalent/great_renown">great renown</Link>, <Link to="/soctalent/incredible_renown">incredible renown</Link>, <Link to="/soctalent/loyal_aid">loyal aid</Link>, and <Link to="/soctalent/safe_house">safe house</Link>.</p>
</Pair>
<Pair title="Special">For the purposes of vigilante social talents, the rogue does not have a vigilante identity and is always considered to be in her social identity.</Pair>
</Ability>
</>};
const _climbing_stunt = {title: "Climbing Stunt", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 16</Link></p>
<Ability id="climbing-stunt-ex" icon={["stairs-goal"]}>
<Pair single id="climbing-stunt-ex">Climbing Stunt (Ex)</Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/climb">Climb</Link></Pair>
<Pair title="Ability">A rogue with this talent can take a -10 penalty on a Climb check to move at full speed while climbing.</Pair>
</Ability>
</>};
const _esoteric_scholar = {title: "Esoteric Scholar", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 69</Link></p>
<Ability id="esoteric-scholar-ex" icon={["stairs-goal"]}>
<Pair single id="esoteric-scholar-ex">Esoteric Scholar (Ex)</Pair>
<Pair title="Ability">Once a day, a rogue with this talent may attempt a <Link to="/skill/knowledge">Knowledge</Link> check, even when she is not trained in that Knowledge skill.</Pair>
</Ability>
</>};
const _expert_leaper = {title: "Expert Leaper", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 130</Link></p>
<Ability id="expert-leaper-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="expert-leaper-ex">Expert Leaper (Ex)</Pair>
<Pair title="Passive Ability">When making jump checks, the rogue is always considered to have a running start. Also, when the rogue deliberately falls, a DC 15 Acrobatics check allows her to ignore the first 20 feet fallen, instead of the first 10 feet.</Pair>
</Ability>
</>};
const _expert_leaper_unchained_rogue = {title: "Expert Leaper (Unchained Rogue)", topLink: ["Unchained Rogue Talents","ability/unchained_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 21</Link></p>
<Ability id="expert-leaper-unchained-rogue-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="expert-leaper-unchained-rogue-ex">Expert Leaper (Unchained Rogue) (Ex)</Pair>
<Pair title="Passive Ability">When making jump checks, the rogue is always considered to have a running start, and adds her rogue level to the check result. Also, when the rogue deliberately falls, a DC 15 Acrobatics check allows her to ignore the first 20 feet fallen, instead of the first 10 feet. For every 5 by which she exceeds the DC of this check, she can ignore an additional 10 feet of distance fallen.</Pair>
</Ability>
</>};
const _favored_terrain = {title: "Favored Terrain", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_wild">Heroes of the Wild pg. 21</Link></p>
<Ability id="favored-terrain-ex" icon={["stairs-goal"]}>
<Pair single id="favored-terrain-ex">Favored Terrain (Ex)</Pair>
<Pair title="Prerequisites">5th-level rogue</Pair>
<Pair title="Ability">The rogue selects one terrain from the ranger's <Link to="/ability/favored_terrain">favored terrain</Link> list; she gains this as a <em>favored terrain,</em> as the ranger class feature.</Pair>
<Pair title="Special">If the rogue also has or later takes the <Link to="/talent/hide_in_plain_sight">hide in plain sight</Link> advanced rogue talent, her <em>favored terrain</em> must match a terrain she has selected for that advanced talent. If the rogue has ranger levels, her effective ranger level is equal to her ranger level + 5 for purposes of improving the bonuses from this <em>favored terrain</em> and gaining new <em>favored terrains.</em></Pair>
</Ability>
</>};
const _follow_clues = {title: "Follow Clues", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 130</Link></p>
<Ability id="follow-clues-ex" icon={["upgrade"]}>
<Pair single id="follow-clues-ex">Follow Clues (Ex)</Pair>
<Pair title="Ability">A rogue with this talent can use <Link to="/skill/perception">Perception</Link> to follow tracks as per the <Link to="/skill/survival">Survival</Link> skill.</Pair>
</Ability>
</>};
const _getaway_artist = {title: "Getaway Artist", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 69</Link></p>
<Ability id="getaway-artist-ex" icon={["skills","upgrade"]}>
<Pair single id="getaway-artist-ex">Getaway Artist (Ex)</Pair>
<Pair title="Passive Ability">A rogue with this talent adds <Link to="/skill/fly">Fly</Link>, <Link to="/skill/handle_animal">Handle Animal</Link>, and <Link to="/skill/ride">Ride</Link> to her list of class skills, and gains a +2 bonus on all <Link to="/rule/driving_check">driving checks</Link>.</Pair>
</Ability>
</>};
const _graceful_athlete = {title: "Graceful Athlete", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 6</Link></p>
<Ability id="graceful-athlete" icon={["stairs-goal"]}>
<Pair single id="graceful-athlete">Graceful Athlete</Pair>
<Pair title="Ability">Gain <Link to="/feat/graceful_athlete">Graceful Athlete</Link> as a bonus feat. You must meet the prerequisites for the feat.</Pair>
</Ability>
</>};
const _green_tongue = {title: "Green Tongue", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_wild">Heroes of the Wild pg. 21</Link></p>
<Ability id="green-tongue-ex" icon={["stairs-goal"]}>
<Pair single id="green-tongue-ex">Green Tongue (Ex)</Pair>
<Pair title="Ability">The rogue gains Aklo, Aquan, Auran, Giant, Ignan, Sylvan, or Terran as a bonus language. In addition, the rogue can attempt a DC 15 <Link to="/skill/linguistics">Linguistics</Link> check to communicate basic concepts with magical beasts and monstrous humanoids with which she does not share a common language.</Pair>
</Ability>
</>};
const _guileful_polyglot = {title: "Guileful Polyglot", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 130</Link></p>
<Ability id="guileful-polyglot-ex" icon={["stairs-goal"]}>
<Pair single id="guileful-polyglot-ex">Guileful Polyglot (Ex)</Pair>
<Pair title="Ability">A rogue with this talent who has at least one rank in <Link to="/skill/linguistics">Linguistics</Link> gains four additional <Link to="/misc/languages">languages</Link>.</Pair>
<Pair title="Special">A rogue with this talent who does not have any ranks in Linguistics gains two additional languages. If the rogue later gains ranks in Linguistics, she gains two additional languages, to a total of four additional languages above those granted by the Linguistics skill itself.</Pair>
</Ability>
</>};
const _hard_to_fool = {title: "Hard to Fool", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 130</Link></p>
<Ability id="hard-to-fool-ex" icon={["rolling-dices"]}>
<Pair single id="hard-to-fool-ex">Hard to Fool (Ex)</Pair>
<Pair title="Usage">1 time/day + 1 per five rogue levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">A rogue with this talent can roll two dice while making a <Link to="/skill/sense_motive">Sense Motive</Link> check, and take the better result. She must choose to use this talent before making the Sense Motive check.</Pair>
</Ability>
</>};
const _hold_breath = {title: "Hold Breath", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 69</Link></p>
<Ability id="hold-breath-ex" icon={["upgrade"]}>
<Pair single id="hold-breath-ex">Hold Breath (Ex)</Pair>
<Pair title="Passive Ability">A rogue with this talent increases the number of rounds she can <Link to="/misc/hold_her_breath">hold her breath</Link> by 2.</Pair>
<Pair title="Special">She can take this talent multiple times.</Pair>
</Ability>
</>};
const _ki_pool = {title: "Ki Pool", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 69</Link></p>
<Ability id="ki-pool-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="ki-pool-ex">Ki Pool (Ex)</Pair>
<Pair title="Ability">A rogue with this talent gains a small ki pool. This ki pool is similar to a <Link to="/class/ninja">ninja's</Link> ki pool, but the rogue's ki pool does not grant any extra attacks. The rogue gains a number of ki points equal to her Wisdom modifier (minimum 1). These ki points replenish at the start of each day.</Pair>
<Pair title="Ability">She can spend a ki point to gain a +10-foot bonus to movement until the end of her turn.</Pair>
<Pair title="Special">If she already has a ki pool, or gains a ki pool later, she gains half her Wisdom bonus (minimum 1) as bonus ki points to her ki pool.</Pair>
</Ability>
</>};
const _ledge_walker = {title: "Ledge Walker", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 68</Link></p>
<Ability id="ledge-walker-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="ledge-walker-ex">Ledge Walker (Ex)</Pair>
<Pair title="Ability">The rogue can move along narrow surfaces at full speed using the Acrobatics skill without penalty. In addition, a rogue with this talent is not <Link to="/rule/flat_footed">flat-footed</Link> when using Acrobatics to move along narrow surfaces.</Pair>
</Ability>
</>};
const _ledge_walker_unchained_rogue = {title: "Ledge Walker (Unchained Rogue)", topLink: ["Unchained Rogue Talents","ability/unchained_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 22</Link></p>
<Ability id="ledge-walker-unchained-rogue-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="ledge-walker-unchained-rogue-ex">Ledge Walker (Unchained Rogue) (Ex)</Pair>
<Pair title="Ability">The rogue can move along narrow surfaces at full speed using the Acrobatics skill without penalty. In addition, a rogue with this talent is not <Link to="/rule/flat_footed">flat-footed</Link> when using Acrobatics to move along narrow surfaces and retains her Dexterity bonus to AC.</Pair>
</Ability>
</>};
const _multitalented = {title: "Multitalented", topLink: ["Unchained Rogue Talents","ability/unchained_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 22</Link></p>
<Ability id="multitalented-ex" icon={["stairs-goal"]}>
<Pair single id="multitalented-ex" flavor="The rogue can use her rogue talents more often.">Multitalented (Ex)</Pair>
<Pair title="Ability">Once per day, she can use a rogue talent that is normally only usable once per day one additional time.</Pair>
<Pair title="At 10th Level">She can use this talent one additional time per day (for a total of 2).</Pair>
<Pair title="At 18th Level">She can use this talent one additional time per day (for a total of 3).</Pair>
<Pair title="Special">The uses of this talent do not have to be spent on the same rogue talent. This ability cannot be used with an <em>advanced talent.</em></Pair>
</Ability>
</>};
const _nimble_climber = {title: "Nimble Climber", topLink: ["Unchained Rogue Talents","ability/unchained_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 22</Link></p>
<Ability id="nimble-climber-ex" icon={["armor-upgrade"]}>
<Pair single id="nimble-climber-ex">Nimble Climber (Ex)</Pair>
<Pair title="Ability">Whenever the rogue fails a Climb check by 5 or more, she can attempt a Reflex save (using the same DC as the Climb check) to catch herself and avoid falling.</Pair>
</Ability>
</>};
const _ninja_trick = {title: "Ninja Trick", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 70</Link></p>
<Ability id="ninja-trick-ex" icon={["stairs-goal"]}>
<Pair single id="ninja-trick-ex">Ninja Trick (Ex)</Pair>
<Pair title="Ability">A rogue with this talent can choose a trick from the <Link to="/ability/ninja_tricks">ninja trick</Link> list. The rogue cannot choose a ninja trick with the same name as a rogue talent.</Pair>
<Pair title="Special">The rogue can choose but cannot use talents that require ki points, unless she has a ki pool. A rogue can pick this talent more than once.</Pair>
</Ability>
</>};
const _peerless_maneuver = {title: "Peerless Maneuver", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 131</Link></p>
<Ability id="peerless-maneuver-ex" icon={["rolling-dices"]}>
<Pair single id="peerless-maneuver-ex">Peerless Maneuver (Ex)</Pair>
<Pair title="Usage">1 time/day + 1 per five rogue levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">A rogue with this talent can roll two dice while making an <Link to="/skill/acrobatics">Acrobatics</Link> check, and take the better result. She must choose to use this talent before making the Acrobatics check.</Pair>
</Ability>
</>};
const _philologist = {title: "Philologist", jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_sands">People of the Sands pg. 19</Link></p>
<Ability id="philologist" icon={["rolling-dices","upgrade"]}>
<Pair single id="philologist">Philologist</Pair>
<Pair title="Ability">A rogue with this talent can reroll any <Link to="/skill/linguistics">Linguistics</Link> skill check made to decipher writing in an unfamiliar language, and never risks drawing a false conclusion from a failed Wisdom check after a failed Linguistics check.</Pair>
<Pair title="Special">A rogue with this talent is allowed only one reroll per inscription, message, or text encountered.</Pair>
</Ability>
</>};
const _quick_scrounge = {title: "Quick Scrounge", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon pg. 19</Link></p>
<Ability id="quick-scrounge" icon={["upgrade"]}>
<Pair single id="quick-scrounge">Quick Scrounge</Pair>
<Pair title="Ability">The rogue can search a creature, object, or area in half as much time as normal. If her <Link to="/skill/perception">Perception</Link> check would normally require a full-round action or less, it becomes one step shorter along the following progression: <strong className="hl">full-round action</strong>, <strong className="hl">standard action</strong>, <strong className="hl">move action</strong>, <strong className="hl">swift action</strong>, <strong className="hl">immediate action</strong>.</Pair>
<Pair title="Special">This talent has no effect on Perception checks that are attempted as free actions or Perception checks that don't require an action.</Pair>
</Ability>
</>};
const _rapid_perception = {title: "Rapid Perception", jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 27</Link></p>
<Ability id="rapid-perception-su" icon={["upgrade"]}>
<Pair single id="rapid-perception-su">Rapid Perception (Su)</Pair>
<Pair title="Ability">A rogue with this talent can attempt a <Link to="/skill/perception">Perception</Link> check to intentionally search for a specific item or creature as a <strong className="hl">swift action</strong> instead of a move action. If she is intentionally searching for an invisible creature, the creature's bonus on its Stealth check from its invisibility is halved.</Pair>
</Ability>
</>};
const _riding_stunt = {title: "Riding Stunt", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 16</Link></p>
<Ability id="riding-stunt-ex" icon={["upgrade"]}>
<Pair single id="riding-stunt-ex">Riding Stunt (Ex)</Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/ride">Ride</Link></Pair>
<Pair title="Ability"><p>A rogue with this talent takes only a -2 penalty on <Link to="/skill/ride">Ride</Link> checks when riding a mount bareback instead of the normal -5 penalty.</p>
<p>When using the Ride skill to make a mount leap, a rogue with this talent can use her Ride modifier or her mount's jump modifier, whichever is higher, instead of using the lower of the two.</p>
<p>A rogue with this talent gains a +5 competence bonus when using the Ride skill to soften a fall from her mount or to perform a fast mount or dismount.</p>
<p>Finally, a rogue with this talent can attempt a DC 15 Ride check to recover from a position of cover as a <strong className="hl">free action</strong> instead of as a move action. Failing this check results in the recovery requiring a move action as normal.</p>
</Pair>
</Ability>
</>};
const _rope_master = {title: "Rope Master", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 70</Link></p>
<Ability id="rope-master-ex" icon={["upgrade"]}>
<Pair single id="rope-master-ex">Rope Master (Ex)</Pair>
<Pair title="Ability">A rogue with this ability can move at her normal speed when using rope on a <Link to="/skill/climb">Climb</Link> check, can take 10 when using <Link to="/skill/acrobatics">Acrobatics</Link> to move over narrow surfaces even when in danger or distracted, and gains a +4 bonus when determining the DC to escape bonds when she ties up a creature.</Pair>
</Ability>
</>};
const _strong_impression = {title: "Strong Impression", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 131</Link></p>
<Ability id="strong-impression" icon={["stairs-goal"]}>
<Pair single id="strong-impression">Strong Impression</Pair>
<Pair title="Ability">A rogue who selects this talent gains <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link> as a bonus feat.</Pair>
</Ability>
</>};
const _strong_stroke = {title: "Strong Stroke", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 70</Link></p>
<Ability id="strong-stroke-ex" icon={["rolling-dices","upgrade"]}>
<Pair single id="strong-stroke-ex">Strong Stroke (Ex)</Pair>
<Pair title="Ability">A rogue with this talent rolls twice when making <Link to="/skill/swim">Swim</Link> checks and takes the better result. If she already rolls twice while making a Swim check because of another ability or effect, she gains a +2 insight bonus on both of those rolls instead. If the rogue is under the effect of a spell or ability that forces her to roll two dice and take the worse result, she only needs to roll 1d20 while making Swim checks.</Pair>
</Ability>
</>};
const _survivalist = {title: "Survivalist", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 131</Link></p>
<Ability id="survivalist" icon={["skills"]}>
<Pair single id="survivalist">Survivalist</Pair>
<Pair title="Info">A rogue with this talent adds <Link to="/skill/heal">Heal</Link> and <Link to="/skill/survival">Survival</Link> to her list of class skills.</Pair>
</Ability>
</>};
const _swift_tracker = {title: "Swift Tracker", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_wild">Heroes of the Wild pg. 21</Link></p>
<Ability id="swift-tracker-ex" icon={["upgrade"]}>
<Pair single id="swift-tracker-ex">Swift Tracker (Ex)</Pair>
<Pair title="Ability">While following tracks, the rogue can move at her normal speed without penalty while using the <Link to="/skill/survival">Survival</Link> skill. In addition, the penalty for moving at up to twice her normal speed while following tracks is reduced to -10.</Pair>
</Ability>
</>};
const _thrill_of_the_chase = {title: "Thrill of the Chase", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 32</Link></p>
<Ability id="thrill-of-the-chase-ex" icon={["rolling-dices","stairs-goal"]}>
<Pair single id="thrill-of-the-chase-ex" flavor="The rogue revels in the thrill and adrenaline rush of a challenging chase.">Thrill of the Chase (Ex)</Pair>
<Pair title="Ability"><p>When engaged in <Link to="/rule/chases">a chase</Link> or <Link to="/rule/pursuit">pursuit</Link>, the rogue gains one d20 reroll which she can use at any time after the original roll is made but before the results of the roll are revealed; she must take the second result, even if it is lower.</p>
<p>She can use this reroll once per chase or once per day during a pursuit.</p>
</Pair>
<Pair title="Ability">Additionally, she gains <Link to="/feat/run">Run</Link> as a bonus feat.</Pair>
</Ability>
</>};
const _wall_scramble = {title: "Wall Scramble", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 70</Link></p>
<Ability id="wall-scramble-ex" icon={["rolling-dices","upgrade"]}>
<Pair single id="wall-scramble-ex">Wall Scramble (Ex)</Pair>
<Pair title="Ability">A rogue with this talent rolls twice when making <Link to="/skill/climb">Climb</Link> checks and takes the better of the two rolls. If she already rolls twice while making a Climb check because of another ability or effect, she gains a +2 insight bonus on both of those rolls instead. If the rogue is under the effect of a spell or ability that forces her to roll two dice and take the worse result, she only needs to roll 1d20 while making Climb checks.</Pair>
</Ability>
</>};
const _confounding_blades = {title: "Confounding Blades", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 70</Link></p>
<Ability id="confounding-blades-ex" icon={["armor-downgrade"]}>
<Pair single id="confounding-blades-ex">Confounding Blades (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/talent/slow_reactions">Slow reactions</Link></Pair>
<Pair title="Ability">When a rogue with this talent hits a creature with a melee weapon that deals sneak attack damage, her target cannot make attacks of opportunity for 1d4+1 rounds.</Pair>
</Ability>
</>};
const _crippling_strike = {title: "Crippling Strike", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 69</Link></p>
<Ability id="crippling-strike-ex" icon={["armor-downgrade"]}>
<Pair single id="crippling-strike-ex">Crippling Strike (Ex)</Pair>
<Pair title="Ability">A rogue with this ability can sneak attack opponents with such precision that her blows weaken and hamper them. An opponent damaged by one of her sneak attacks also takes 2 points of <Link to="/rule/strength_damage">Strength damage</Link>.</Pair>
</Ability>
</>};
const _deadly_sneak = {title: "Deadly Sneak", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 131</Link></p>
<Ability id="deadly-sneak-ex" icon={["upgrade"]}>
<Pair single id="deadly-sneak-ex">Deadly Sneak (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/talent/powerful_sneak">Powerful sneak</Link></Pair>
<Pair title="Passive Ability">Whenever a rogue with this talent uses the <em>powerful sneak</em> rogue talent, she treats all 1s and 2s on the sneak attack damage dice as 3s.</Pair>
</Ability>
</>};
const _deadly_sneak_unchained_rogue = {title: "Deadly Sneak (Unchained Rogue)", topLink: ["Advanced Unchained Rogue Talents","ability/advanced_unchained_rogue_talents"], addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 23</Link></p>
<Ability id="deadly-sneak-unchained-rogue-ex" icon={["rolling-dices"]}>
<Pair single id="deadly-sneak-unchained-rogue-ex">Deadly Sneak (Unchained Rogue) (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/talent/powerful_sneak">Powerful sneak</Link></Pair>
<Pair title="Ability">When a rogue with this talent uses the <em>powerful sneak</em> talent, she rerolls all sneak attack dice that resulted in 1s or 2s. She can reroll multiple dice, but she can't reroll any individual die more than once per attack.</Pair>
</Ability>
</>};
const _dispelling_attack = {title: "Dispelling Attack", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 70</Link></p>
<Ability id="dispelling-attack-su" icon={["armor-downgrade"]}>
<Pair single id="dispelling-attack-su">Dispelling Attack (Su)</Pair>
<Pair title="Prerequisites"><Link to="/talent/major_magic">Major magic</Link></Pair>
<Pair title="Ability">Opponents that are dealt sneak attack damage by a rogue with this ability are affected by a targeted <Link to="/spell/dispel_magic">dispel magic</Link>, targeting the lowest-level spell effect active on the target. The caster level for this ability is equal to the rogue's level.</Pair>
</Ability>
</>};
const _double_debilitation = {title: "Double Debilitation", topLink: ["Advanced Unchained Rogue Talents","ability/advanced_unchained_rogue_talents"], addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 24</Link></p>
<Ability id="double-debilitation-ex" icon={["armor-downgrade"]}>
<Pair single id="double-debilitation-ex">Double Debilitation (Ex)</Pair>
<Pair title="Ability">Whenever the rogue inflicts a penalty against a target using the <em>debilitating injury</em> class feature, she can select two penalties to inflict. The target can never be subject to more than two penalties in this way at one time. If any additional penalties are inflicted, any previous penalties immediately end. Any effect that heals damage to the target negates both of the penalties.</Pair>
</Ability>
</>};
const _entanglement_of_blades = {title: "Entanglement of Blades", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 131</Link></p>
<Ability id="entanglement-of-blades-ex" icon={["armor-downgrade"]}>
<Pair single id="entanglement-of-blades-ex">Entanglement of Blades (Ex)</Pair>
<Pair title="Ability">When a rogue with this talent hits a creature with a melee attack that deals sneak attack damage, the target cannot take a 5-foot step until the beginning of the rogue's next turn.</Pair>
</Ability>
</>};
const _hamstring_strike = {title: "Hamstring Strike", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace pg. 26</Link></p>
<Ability id="hamstring-strike-ex" icon={["armor-downgrade"]}>
<Pair single id="hamstring-strike-ex">Hamstring Strike (Ex)</Pair>
<Pair title="Ability">Anytime a rogue with this talent successfully hits an opponent with a sneak attack, she may forgo her sneak attack damage to try to hamstring her opponent. If the attack succeeds, the rogue deals weapon damage as normal, but instead of the rogue dealing sneak attack damage, the target is knocked <Link to="/rule/prone">prone</Link> and is unable to take move actions during its next turn. A successful Fortitude save (DC = 10 + 1/2 the rogue's level + the rogue's Dexterity modifier) negates this effect.</Pair>
</Ability>
</>};
const _harrow_strike = {title: "Harrow Strike", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_harrow_handbook">The Harrow Handbook pg. 21</Link></p>
<Ability id="harrow-strike-ex" icon={["armor-downgrade"]}>
<Pair single id="harrow-strike-ex">Harrow Strike (Ex)</Pair>
<Pair title="Ability">Once per day while making a sneak attack against a creature, you can draw a random card from a <Link to="/eq-misc/harrow_deck">harrow deck</Link> you own. If your attack hits, instead of dealing sneak attack damage as normal, you deal a number of points of ability damage equal to your number of sneak attack dice. The ability score damaged is the score affiliated with the suit of the harrow card drawn.</Pair>
<Pair title="At 15th Level">You can use this 2 times/day.</Pair>
<Pair title="At 20th Level">You can use this 3 times/day.</Pair>
</Ability>
</>};
const _improved_shadows_chill = {title: "Improved Shadow's Chill", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 9</Link></p>
<Ability id="improved-shadows-chill-su" icon={["upgrade"]}>
<Pair single id="improved-shadows-chill-su">Improved Shadow's Chill (Su)</Pair>
<Pair title="Prerequisites">Has cold <Link to="/umr/resistance">resistance</Link> from a racial trait, <Link to="/talent/shadows_chill">shadow's chill</Link></Pair>
<Pair title="Ability">When a rogue with this talent hits a creature with a melee weapon that deals sneak attack damage, the sneak attack damage is cold damage. Normal weapon damage is unaffected.</Pair>
</Ability>
</>};
const _petrifying_strike = {title: "Petrifying Strike", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 9</Link></p>
<Ability id="petrifying-strike-su" icon={["armor-downgrade"]}>
<Pair single id="petrifying-strike-su">Petrifying Strike (Su)</Pair>
<Pair title="Ability">Whenever the rogue damages a creature with one of her sneak attacks, she also deals 2 points of <Link to="/rule/dexterity_damage">Dexterity damage</Link> to that creature as its body petrifies.</Pair>
</Ability>
</>};
const _resonating_rumbles = {title: "Resonating Rumbles", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], addenda: ["sneakattack"], jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 9</Link></p>
<Ability id="resonating-rumbles-su" icon={["armor-downgrade"]}>
<Pair single id="resonating-rumbles-su">Resonating Rumbles (Su)</Pair>
<Pair title="Ability">When a rogue with this talent makes a successful sneak attack against a creature with <Link to="/umr/tremorsense">tremorsense</Link>, the rogue can subtract 3 dice from her sneak attack damage to prevent the target from using tremorsense for a number of rounds equal to half her rogue level.</Pair>
</Ability>
</>};
const _aligned_disguise = {title: "Aligned Disguise", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 8</Link></p>
<Ability id="aligned-disguise-sp" icon={["armor-upgrade"]}>
<Pair single id="aligned-disguise-sp">Aligned Disguise (Sp)</Pair>
<Pair title="Prerequisites">Has <em>disguise self</em> as a spell-like ability</Pair>
<Pair title="Ability">When a rogue with this talent uses the <Link to="/spell/disguise_self">disguise self</Link> spell-like ability, she can also alter her alignment aura to deceive spells that discern alignment (such as <Link to="/spell/detect_evil">detect evil</Link>) for the duration of the disguise self effect. She can choose to detect as any specific alignment, or to detect as no alignment at all. This ability does not protect against spells or effects that cause harm based on alignment.</Pair>
</Ability>
</>};
const _familiar = {title: "Familiar", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 70</Link></p>
<Ability id="familiar-ex" icon={["stairs-goal"]}>
<Pair single id="familiar-ex">Familiar (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/talent/minor_magic">Minor magic</Link>, <Link to="/talent/major_magic">major magic</Link></Pair>
<Pair title="Ability">A rogue with this talent gains a <Link to="/sidekick/familiar">familiar</Link> as the <Link to="/ability/familiar">familiar</Link> option of the wizard's <em>arcane bond</em> class feature. This ability functions exactly like that part of the class feature, but the rogue's effective wizard level is her rogue level -4.</Pair>
</Ability>
</>};
const _founders_blessing = {title: "Founders' Blessing", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 53</Link></p>
<Ability id="founders-blessing" icon={["upgrade"]}>
<Pair single id="founders-blessing" flavor="The rogue can call upon the mystical legacies of the Council.">Founders' Blessing</Pair>
<Pair title="Ability">Once per day, she can choose a skill in which she has no ranks. After she spends 10 minutes communing with these mystical spirits, they grant her a luck bonus equal to her rogue level with that skill, and she can attempt checks with that skill as if she were trained in its use. The effects of <em>founder's blessing</em> last for 8 hours.</Pair>
</Ability>
</>};
const _glib_facade = {title: "Glib Facade", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 27</Link></p>
<Ability id="glib-facade-sp" icon={["magic-swirl"]}>
<Pair single id="glib-facade-sp">Glib Facade (Sp)</Pair>
<Pair title="Prerequisites"><Link to="/talent/innocent_facade">Innocent facade</Link></Pair>
<Pair title="Ability">Once per day, a rogue with this advanced talent can use <Link to="/spell/glibness">glibness</Link> as a spell-like ability, using her rogue level as the spell's caster level.</Pair>
</Ability>
</>};
const _hidden_mind = {title: "Hidden Mind", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 44</Link></p>
<Ability id="hidden-mind-ex" icon={["armor-upgrade"]}>
<Pair single id="hidden-mind-ex">Hidden Mind (Ex)</Pair>
<Pair title="Ability">A rogue with this talent uses various devious techniques, including mental exercises and dusting her clothing with a small amount of lead, to protect herself from divinations, with the same benefits as if she cast <Link to="/spell/nondetection">nondetection</Link> on herself with a caster level equal to her rogue level.</Pair>
</Ability>
</>};
const _slippery_mind = {title: "Slippery Mind", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 70</Link></p>
<Ability id="slippery-mind-ex" icon={["armor-upgrade"]}>
<Pair single id="slippery-mind-ex" flavor="This ability represents the rogue's ability to wriggle free from magical effects that would otherwise control or compel her.">Slippery Mind (Ex)</Pair>
<Pair title="Passive Ability">If a rogue with <em>slippery mind</em> is affected by an enchantment spell or effect and fails her saving throw, she can attempt it again 1 round later at the same DC. She gets only this one extra chance to succeed on her saving throw.</Pair>
</Ability>
</>};
const _against_the_wall = {title: "Against the Wall", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 9</Link></p>
<Ability id="against-the-wall-ex" icon={["upgrade"]}>
<Pair single id="against-the-wall-ex">Against the Wall (Ex)</Pair>
<Pair title="Ability">A rogue with this talent is considered to be <Link to="/rule/flanking">flanking</Link> any opponent adjacent to a stone wall (whether the stone is worked or unworked).</Pair>
</Ability>
</>};
const _another_day = {title: "Another Day", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 131</Link></p>
<Ability id="another-day-ex" icon={["armor-upgrade","broken-shield"]}>
<Pair single id="another-day-ex">Another Day (Ex)</Pair>
<Pair title="Immediate Action">Once per day, when the rogue would be reduced to 0 or fewer hit points by a melee attack, she can take a 5-foot step. If the movement takes her out of the reach of the attack, she takes no damage from the attack. The rogue is <Link to="/misc/staggered">staggered</Link> for 1 round on her next turn.</Pair>
</Ability>
</>};
const _blinding_strike = {title: "Blinding Strike", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 9</Link></p>
<Ability id="blinding-strike" icon={["stairs-goal"]}>
<Pair single id="blinding-strike">Blinding Strike</Pair>
<Pair title="Prerequisites">15th-level rogue, <Link to="/talent/obscuring_blow">obscuring blow</Link></Pair>
<Pair title="Ability">A rogue who selects this talent gains <Link to="/feat/blinding_critical">Blinding Critical</Link> as a bonus feat, even if she doesn't meet the prerequisites.</Pair>
</Ability>
</>};
const _dance_of_disorienting_shadows = {title: "Dance of Disorienting Shadows", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 9</Link></p>
<Ability id="dance-of-disorienting-shadows-ex" icon={["mailed-fist"]}>
<Pair single id="dance-of-disorienting-shadows-ex">Dance of Disorienting Shadows (Ex)</Pair>
<Pair title="Ability">A rogue with this talent can attempt a <Link to="/skill/perform">Perform</Link> (dance) check in place of a combat maneuver check when attempting a <Link to="/rule/reposition">reposition</Link> combat maneuver.</Pair>
</Ability>
</>};
const _deadly_cocktail = {title: "Deadly Cocktail", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 131</Link></p>
<Ability id="deadly-cocktail-ex" icon={["stairs-goal"]}>
<Pair single id="deadly-cocktail-ex">Deadly Cocktail (Ex)</Pair>
<Pair title="Ability">A rogue with this talent can apply two doses of poison to a weapon at once. These can be separate poisons, in which case they both affect the target individually, or two doses of the same toxin, in which case the poisons' frequency is extended by 50% and the save DC increases by +2.</Pair>
<Pair title="Special">This talent is an exception to the rule that injury poisons can only be delivered one dose at a time.</Pair>
</Ability>
</>};
const _defensive_roll = {title: "Defensive Roll", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 69</Link></p>
<Ability id="defensive-roll-ex" icon={["armor-upgrade"]}>
<Pair single id="defensive-roll-ex" flavor="With this advanced talent, the rogue can roll with a potentially lethal blow to take less damage from it than she otherwise would.">Defensive Roll (Ex)</Pair>
<Pair title="Ability">Once per day, when she would be reduced to 0 or fewer hit points by damage in combat (from a weapon or other blow, not a spell or special ability), the rogue can attempt to roll with the damage. To use this ability, the rogue must attempt a Reflex saving throw (DC = damage dealt). If the save succeeds, she takes only half damage from the blow; if it fails, she takes full damage. She must be aware of the attack and able to react to it in order to execute her defensive roll&mdash;if she is denied her Dexterity bonus to AC, she can't use this ability.</Pair>
<Pair title="Special">Since this effect would not normally allow a character to make a Reflex save for half damage, the rogue's <Link to="/ability/evasion">evasion</Link> ability does not apply to the defensive roll.</Pair>
</Ability>
</>};
const _fast_tumble = {title: "Fast Tumble", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 131</Link></p>
<Ability id="fast-tumble-ex" icon={["upgrade"]}>
<Pair single id="fast-tumble-ex">Fast Tumble (Ex)</Pair>
<Pair title="Ability">When a rogue with this talent uses <Link to="/skill/acrobatics">Acrobatics</Link> to move at full speed through a threatened square without provoking an attack of opportunity, the DC of the Acrobatics check does not increase by 10.</Pair>
</Ability>
</>};
const _grazing_shot = {title: "Grazing Shot", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/agents_of_evil">Agents of Evil pg. 24</Link></p>
<Ability id="grazing-shot-ex" icon={["bowman"]}>
<Pair single id="grazing-shot-ex" flavor="Particularly deft rogues can strike two foes with one well-placed shot.">Grazing Shot (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/race/drow">Drow</Link></Pair>
<Pair title="Standard Action">A rogue with this talent can fire a <Link to="/eq-weapon/hand_crossbow">hand crossbow</Link> at an enemy who is granted <Link to="/rule/cover">cover</Link> by another opponent. Make one ranged attack roll and compare the result to each opponent's AC. Each hit deals 1 point of damage. Any special weapon properties or <Link to="/misc/precision_damage">precision damage</Link> apply to only a single target, but any poison applied to the bolt affects all targets struck.</Pair>
</Ability>
</>};
const _hard_minded = {title: "Hard Minded", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 70</Link></p>
<Ability id="hard-minded-ex" icon={["armor-upgrade"]}>
<Pair single id="hard-minded-ex" flavor="A rogue with this talent is hard to fool with illusions.">Hard Minded (Ex)</Pair>
<Pair title="Passive Ability">She automatically receives a save to disbelieve any illusion she can see each round at the start of her turn, even if she hasn't interacted with it. If she fails a saving throw against an illusion that is not to disbelieve, she can attempt to save again again 1 round later at the same DC. She gets only one extra chance to succeed at her saving throw.</Pair>
</Ability>
</>};
const _hunters_surprise = {title: "Hunter's Surprise", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 132</Link></p>
<Ability id="hunters-surprise-ex" icon={["upgrade"]}>
<Pair single id="hunters-surprise-ex">Hunter's Surprise (Ex)</Pair>
<Pair title="Ability">Once per day, a rogue with this talent can designate a single enemy she is adjacent to as her prey. Until the end of her next turn, she can add her sneak attack damage to all attacks made against her prey, even if she is not flanking it or it is not flat-footed.</Pair>
</Ability>
</>};
const _improved_evasion = {title: "Improved Evasion", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 70</Link></p>
<Ability id="improved-evasion-ex" icon={["armor-upgrade"]}>
<Pair single id="improved-evasion-ex">Improved Evasion (Ex)</Pair>
<Pair title="Ability">This works like <Link to="/ability/evasion">evasion</Link>, except that while the rogue still takes no damage on a successful Reflex saving throw against attacks, she henceforth takes only half damage on a failed save. A <Link to="/misc/helpless">helpless</Link> rogue does not gain the benefit of <em>improved evasion.</em></Pair>
</Ability>
</>};
const _knock_out_blow = {title: "Knock-Out Blow", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 132</Link></p>
<Ability id="knock-out-blow-ex" icon={["armor-downgrade"]}>
<Pair single id="knock-out-blow-ex">Knock-Out Blow (Ex)</Pair>
<Pair title="Ability">Once per day, the rogue can forgo her sneak attack damage to attempt to knock out an opponent. She must declare the use of <em>knock-out blow</em> before she makes the attack. If the attack hits, it does normal damage, but instead of dealing sneak attack damage (and instead of any effect that triggers when the rogue deals sneak attack damage), the target falls <Link to="/misc/unconscious">unconscious</Link> for 1d4 rounds. A successful Fortitude save reduces this effect to <Link to="/misc/staggered">staggered</Link> for 1 round. The DC of this save is equal to 10 + 1/2 the rogue's level + the rogue's Intelligence modifier.</Pair>
</Ability>
</>};
const _light_walker = {title: "Light Walker", topLink: ["Advanced Unchained Rogue Talents","ability/advanced_unchained_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 24</Link></p>
<Ability id="light-walker-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="light-walker-ex">Light Walker (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/talent/ledge_walker">Ledge walker</Link> rogue</Pair>
<Pair title="Ability">The rogue can move at full speed through <Link to="/rule/difficult_terrain">difficult terrain</Link> and can take 5-foot steps into difficult terrain.</Pair>
</Ability>
</>};
const _opportunist = {title: "Opportunist", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 70</Link></p>
<Ability id="opportunist-ex" icon={["stairs-goal"]}>
<Pair single id="opportunist-ex">Opportunist (Ex)</Pair>
<Pair title="Ability">Once per round, the rogue can make an attack of opportunity against an opponent who has just been struck for damage in melee by another character. This attack counts as an attack of opportunity for that round.</Pair>
<Pair title="Special">Even a rogue with the <Link to="/feat/combat_reflexes">Combat Reflexes</Link> feat can't use the <em>opportunist</em> ability more than once per round.</Pair>
</Ability>
</>};
const _quick_shot = {title: "Quick Shot", topLink: ["Advanced Unchained Rogue Talents","ability/advanced_unchained_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 24</Link></p>
<Ability id="quick-shot-ex" icon={["bowman"]}>
<Pair single id="quick-shot-ex">Quick Shot (Ex)</Pair>
<Pair title="Ability">Whenever the rogue rolls initiative, she can also make a single attack with a ranged weapon as a <strong className="hl">swift action</strong>. She can use this ability only if she has a weapon in hand and it is loaded (if applicable).</Pair>
<Pair title="Special">If more than one rogue has this talent, their initiative check results determine the order in which they make their attacks. After these attacks are resolved, the round proceeds as normal.</Pair>
</Ability>
</>};
const _redirect_attack = {title: "Redirect Attack", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 132</Link></p>
<Ability id="redirect-attack-ex" icon={["armor-upgrade"]}>
<Pair single id="redirect-attack-ex">Redirect Attack (Ex)</Pair>
<Pair title="Ability">Once per day, when a rogue with this talent is hit with a melee attack, she can redirect the attack to strike at an adjacent creature with a <strong className="hl">free action</strong>. The creature targeted must be within melee reach of the attack that hit the rogue, and the creature that made the attack against the rogue must make a new attack roll against the new target.</Pair>
</Ability>
</>};
const _reflexive_shadow_shield = {title: "Reflexive Shadow Shield", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 9</Link></p>
<Ability id="reflexive-shadow-shield-su" icon={["armor-upgrade"]}>
<Pair single id="reflexive-shadow-shield-su">Reflexive Shadow Shield (Su)</Pair>
<Pair title="Prerequisites"><Link to="/talent/resiliency">Resiliency</Link></Pair>
<Pair title="Immediate Action">Once per day, the rogue can gain an amount of cold <Link to="/umr/resistance">resistance</Link> or electricity resistance equal to half the rogue's level. This resistance lasts for 1 round.</Pair>
<Pair title="Special">If the rogue has the <em>shadowy resistance</em> racial trait, the cold or electricity resistance stacks with the resistance that trait grants; otherwise, the energy resistance does not stack with any cold or electricity resistance the rogue has.</Pair>
</Ability>
</>};
const _shrinewalk = {title: "Shrinewalk", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 53</Link></p>
<Ability id="shrinewalk-sp" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="shrinewalk-sp">Shrinewalk (Sp)</Pair>
<Pair title="Ability">Council agents can walk the mystic paths between Westcrown's shrines. A rogue with <em>shrinewalk</em> can create her own shrine simply by designating an area in any urban region by placing a unique marking or rune on a wall or the ground. This marking is not magical, and if it is defaced or erased, it can no longer be used by the rogue (the marking can be hidden from view without removing its usability, including painting over the marking in question).</Pair>
<Pair title="Ability">Once placed, the rogue can use <Link to="/spell/word_of_recall">word of recall</Link> once per day to return to the shrine.</Pair>
<Pair title="Special">A rogue can maintain one shrine at a time; if a new marking is created in a new location, the previous shrine becomes inactive.</Pair>
</Ability>
</>};
const _stealthy_sniper = {title: "Stealthy Sniper", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 132</Link></p>
<Ability id="stealthy-sniper-ex" icon={["upgrade"]}>
<Pair single id="stealthy-sniper-ex">Stealthy Sniper (Ex)</Pair>
<Pair title="Ability">When a rogue with this talent uses the <Link to="/skill/stealth">Stealth</Link> skill to snipe, she only suffers a -10 penalty on the Stealth check, instead of -20.</Pair>
</Ability>
</>};
const _unwitting_ally = {title: "Unwitting Ally", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 71</Link></p>
<Ability id="unwitting-ally-ex" icon={["stairs-goal"]}>
<Pair single id="unwitting-ally-ex">Unwitting Ally (Ex)</Pair>
<Pair title="Ability">A rogue with this talent can spend a <strong className="hl">swift action</strong> to attempt to make an opponent act like an ally for purposes of providing a <Link to="/rule/flank">flank</Link> until the beginning of the rogue's next turn. The opponent must be able to hear and see the rogue, and the rogue must succeed at a Bluff check opposed by the opponent's Sense Motive. If the check succeeds, the opponent acts as an ally for the purpose of providing a flank.</Pair>
<Pair title="Special">Whether or not the check succeeds, the rogue cannot use this trick again on the same opponent for the next 24 hours. If the rogue fails the check by 5 or more, she cannot use the <em>unwitting ally</em> ability on any opponent within line of sight of the failed attempt for 24 hours.</Pair>
</Ability>
</>};
const _weapon_snatcher = {title: "Weapon Snatcher", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 71</Link></p>
<Ability id="weapon-snatcher-ex" icon={["mailed-fist"]}>
<Pair single id="weapon-snatcher-ex">Weapon Snatcher (Ex)</Pair>
<Pair title="Ability">A rogue with this talent can make a <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> check in place of a combat maneuver check when attempting to <Link to="/rule/disarm">disarm</Link> an opponent.</Pair>
</Ability>
</>};
const _cutting_edge = {title: "Cutting Edge", topLink: ["Advanced Unchained Rogue Talents","ability/advanced_unchained_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 23</Link></p>
<Ability id="cutting-edge-ex" icon={["stairs-goal"]}>
<Pair single id="cutting-edge-ex">Cutting Edge (Ex)</Pair>
<Pair title="Ability">A rogue with this ability immediately selects two additional skills with her <em>rogue's edge</em> ability.</Pair>
<Pair title="Special">She can select this advanced talent multiple times.</Pair>
</Ability>
</>};
const _feat = {title: "Feat", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 70</Link></p>
<Ability id="feat" icon={["stairs-goal"]}>
<Pair single id="feat">Feat</Pair>
<Pair title="Ability">A rogue may gain any feat that she qualifies for in place of a rogue talent.</Pair>
</Ability>
</>};
const _frugal_trapsmith = {title: "Frugal Trapsmith", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 132</Link></p>
<Ability id="frugal-trapsmith-ex" icon={["upgrade"]}>
<Pair single id="frugal-trapsmith-ex">Frugal Trapsmith (Ex)</Pair>
<Pair title="Ability">When a rogue with this talent constructs a mechanical trap, she only pays 75% of the normal cost.</Pair>
</Ability>
</>};
const _getaway_master = {title: "Getaway Master", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 70</Link></p>
<Ability id="getaway-master-ex" icon={["info"]}>
<Pair single id="getaway-master-ex">Getaway Master (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/talent/getaway_artist">Getaway artist</Link></Pair>
<Pair title="Ability">A rogue with this talent gains a +10 bonus on all <Link to="/rule/driving_check">drive checks</Link>.</Pair>
</Ability>
</>};
const _hide_in_plain_sight = {title: "Hide in Plain Sight", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 71</Link></p>
<Ability id="hide-in-plain-sight-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="hide-in-plain-sight-ex">Hide in Plain Sight (Ex)</Pair>
<Pair title="Ability">A rogue with this talent can select a single terrain from the ranger's <Link to="/ability/favored_terrain">favored terrain</Link> list. She is a master at hiding in that terrain, and while within that terrain, she can use the <Link to="/skill/stealth">Stealth</Link> skill to hide, even while being observed.</Pair>
<Pair title="Special">A rogue may take this advanced talent more than once, each time selecting a different terrain from the favored terrain list.</Pair>
</Ability>
</>};
const _master_of_disguise = {title: "Master of Disguise", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 132</Link></p>
<Ability id="master-of-disguise-ex" icon={["upgrade"]}>
<Pair single id="master-of-disguise-ex">Master of Disguise (Ex)</Pair>
<Pair title="Ability">Once per day, a rogue with this talent gains a +10 bonus on a single <Link to="/skill/disguise">Disguise</Link> check.</Pair>
</Ability>
</>};
const _master_tricks = {title: "Master Tricks", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 71</Link></p>
<Ability id="master-tricks" icon={["stairs-goal"]}>
<Pair single id="master-tricks">Master Tricks</Pair>
<Pair title="Ability">The rogue can select a ninja trick from the list of <Link to="/ability/master_tricks">master tricks</Link> in place of a rogue talent. The rogue cannot select a ninja trick that has the same name as a rogue talent. The rogue can choose but cannot use tricks that require ki points, unless she has a ki pool.</Pair>
</Ability>
</>};
const _greater_multitalented = {title: "Greater Multitalented", topLink: ["Advanced Unchained Rogue Talents","ability/advanced_unchained_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 24</Link></p>
<Ability id="greater-multitalented-ex" icon={["stairs-goal"]}>
<Pair single id="greater-multitalented-ex">Greater Multitalented (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/talent/multitalented">Multitalented</Link></Pair>
<Pair title="Ability">A rogue with this talent can use the <em>multitalented</em> rogue talent to gain additional uses of <em>advanced talents.</em></Pair>
</Ability>
</>};
const _pierce_the_darkness = {title: "Pierce the Darkness", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_streets">Heroes of the Streets pg. 26</Link></p>
<Ability id="pierce-the-darkness-ex" icon={["stairs-goal"]}>
<Pair single id="pierce-the-darkness-ex" flavor="The rogue can extend her senses of hearing and smell in darkness or when blinded.">Pierce the Darkness (Ex)</Pair>
<Pair title="Ability">She gains <Link to="/umr/blindsense">blindsense</Link> out to a range of 5 feet, but only against creatures concealed by darkness or her own blindness. She still suffers the normal miss chance for attacking creatures with <Link to="/rule/concealment">concealment</Link>.</Pair>
</Ability>
</>};
const _rumormonger = {title: "Rumormonger", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 71</Link></p>
<Ability id="rumormonger-ex" icon={["stairs-goal"]}>
<Pair single id="rumormonger-ex">Rumormonger (Ex)</Pair>
<Pair title="Ability"><p>A rogue with this talent can attempt to spread a rumor though a small town or larger settlement by making a <Link to="/skill/bluff">Bluff</Link> check. She can do so a number of times per week equal to her Charisma modifier (minimum 0). The DC is based on the size of the settlement, and it takes a week for the rumor to propagate through the settlement. If the check succeeds, the rumor is practically accepted as fact within the community; succeeding by 5 or more over the DC decreases the time it takes the rumor to propagate by 1d4 days. A failed check means the rumor failed to gain traction, while failing by 5 or more causes the opposite of the rumor or some other competing theory involving the rumor's subject to take hold.</p>
<ScrollContainer id="talent-rumormonger--table-0"><table>
<thead>
<tr>
<th>Community Size</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Small town</td>
<td>18</td>
</tr>
<tr>
<td>Large town</td>
<td>20</td>
</tr>
<tr>
<td>Small city</td>
<td>25</td>
</tr>
<tr>
<td>Large city</td>
<td>30</td>
</tr>
<tr>
<td>Metropolis</td>
<td>35</td>
</tr>
</tbody></table></ScrollContainer>
</Pair>
</Ability>
</>};
const _see_in_darkness = {title: "See in Darkness", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 9</Link></p>
<Ability id="see-in-darkness-su" icon={["stairs-goal"]}>
<Pair single id="see-in-darkness-su">See in Darkness (Su)</Pair>
<Pair title="Prerequisites">Darkvision</Pair>
<Pair title="Ability">The rogue gains the <Link to="/umr/see_in_darkness">see in darkness</Link> ability.</Pair>
</Ability>
</>};
const _skill_mastery = {title: "Skill Mastery", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 70</Link></p>
<Ability id="skill-mastery" icon={["upgrade"]}>
<Pair single id="skill-mastery" flavor="The rogue becomes so confident in the use of certain skills that she can use them reliably even under adverse conditions.">Skill Mastery</Pair>
<Pair title="Choice">Upon gaining this ability, the rogue selects a number of skills equal to 3 + her Intelligence modifier.</Pair>
<Pair title="Ability">When making a skill check with one of these skills, she may take 10 even if stress and distractions would normally prevent her from doing so.</Pair>
<Pair title="Special">A rogue may gain this special ability multiple times, selecting additional skills for <em>skill mastery</em> to apply to each time.</Pair>
</Ability>
</>};
const _skill_mastery_unchained_rogue = {title: "Skill Mastery", topLink: ["Advanced Unchained Rogue Talents","ability/advanced_unchained_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 24</Link></p>
<Ability id="skill-mastery" icon={["upgrade"]}>
<Pair single id="skill-mastery" flavor="The rogue becomes so confident in the use of certain skills that she can use them reliably even under adverse conditions.">Skill Mastery</Pair>
<Pair title="Choice">The rogue selects a number of skills equal to her Intelligence modifier.</Pair>
<Pair title="Ability">When making a skill check with one of the selected skills (or any of the skills selected through the <em>rogue's edge</em> class feature), she can take 10 even if stress and distractions would normally prevent her from doing so.</Pair>
<Pair title="Special">A rogue can gain this special ability multiple times, selecting additional skills for <em>skill mastery</em> to apply to each time.</Pair>
</Ability>
</>};
const _stalker_talent = {title: "Stalker Talent", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 44</Link></p>
<Ability id="stalker-talent" icon={["stairs-goal"]}>
<Pair single id="stalker-talent">Stalker Talent</Pair>
<Pair title="Ability">The rogue can select a <Link to="/ability/vigilante_talents">vigilante talent</Link>. For the purposes of selecting and using this talent, she counts as a 10th-level <Link to="/class/vigilante">vigilante</Link> with the <em>stalker</em> specialization, regardless of her actual rogue level. Her sneak attack counts as a <em>hidden strike</em> with reduced damage for the purpose of determining the effects of her vigilante talent, which means, among other things, that she can't apply any of the <em>hidden strike talents</em> to her sneak attacks.</Pair>
</Ability>
</>};
const _stony_skin = {title: "Stony Skin", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 9</Link></p>
<Ability id="stony-skin-ex" icon={["armor-upgrade"]}>
<Pair single id="stony-skin-ex">Stony Skin (Ex)</Pair>
<Pair title="Ability">A rogue with this talent gains DR 2/adamantine.</Pair>
<Pair title="Special">A rogue can select this talent up to three times; each additional time the rogue selects this talent, the DR granted by this talent increases by 1.</Pair>
</Ability>
</>};
const _greater_terrain_mastery = {title: "Greater Terrain Mastery", topLink: ["Advanced Unchained Rogue Talents","ability/advanced_unchained_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 24</Link></p>
<Ability id="greater-terrain-mastery-ex" icon={["upgrade"]}>
<Pair single id="greater-terrain-mastery-ex">Greater Terrain Mastery (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/talent/terrain_mastery">Terrain mastery</Link></Pair>
<Pair title="Ability">A rogue with this talent can select a single <Link to="/ability/favored_terrain">favored terrain</Link>. Her bonuses in that terrain increase to +4.</Pair>
<Pair title="At 13th Level">Her bonuses become +6.</Pair>
<Pair title="At 18th Level">Her bonuses increase to +8.</Pair>
</Ability>
</>};
const _thoughtful_reexamining = {title: "Thoughtful Reexamining", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 132</Link></p>
<Ability id="thoughtful-reexamining-ex" icon={["rolling-dices"]}>
<Pair single id="thoughtful-reexamining-ex">Thoughtful Reexamining (Ex)</Pair>
<Pair title="Ability">Once per day, a rogue with this talent can reroll a <Link to="/skill/knowledge">Knowledge</Link>, <Link to="/skill/sense_motive">Sense Motive</Link>, or <Link to="/skill/perception">Perception</Link> skill check to try to gain new or better information from the roll. This reroll can be made any time during the same day as the original check.</Pair>
</Ability>
</>};
const _unlock_ki = {title: "Unlock Ki", topLink: ["Advanced Rogue Talents","ability/advanced_rogue_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 27</Link></p>
<Ability id="unlock-ki-su" icon={["upgrade"]}>
<Pair single id="unlock-ki-su">Unlock Ki (Su)</Pair>
<Pair title="Prerequisites">Has a ki pool</Pair>
<Pair title="Ability">A rogue with this advanced talent increases the number of points in the ki pool that she gains from the <Link to="/talent/ki_pool">ki pool</Link> rogue talent to be equal to 1/2 her rogue level + her highest mental ability score modifier (Intelligence, Wisdom, or Charisma).</Pair>
<Pair title="Swift Action">In addition, she can spend 2 points from her ki pool to gain the skill unlocks for one skill of her choice as appropriate for her number of ranks in that skill. This benefit lasts for 1 minute.</Pair>
</Ability>
</>};
export default {not_found:_not_found,armor_piercer:_armor_piercer,befuddling_strike:_befuddling_strike,bleeding_attack:_bleeding_attack,distracting_attack:_distracting_attack,emboldening_strike:_emboldening_strike,extinguishing_strike:_extinguishing_strike,focusing_attack:_focusing_attack,obscuring_blow:_obscuring_blow,offensive_defense:_offensive_defense,powerful_sneak:_powerful_sneak,powerful_sneak_unchained_rogue:_powerful_sneak_unchained_rogue,sacred_sneak_attack:_sacred_sneak_attack,sever_alignment:_sever_alignment,shadows_chill:_shadows_chill,silencing_strike:_silencing_strike,slow_reactions:_slow_reactions,sneaky_maneuver:_sneaky_maneuver,stem_the_flow:_stem_the_flow,underhanded:_underhanded,aligned_sneak_attack:_aligned_sneak_attack,careful_stab:_careful_stab,demand_attention:_demand_attention,disabling_stunt:_disabling_stunt,fast_getaway:_fast_getaway,set_up:_set_up,sneak_training:_sneak_training,snipers_eye:_snipers_eye,surprise_attack:_surprise_attack,surprise_attack_unchained_rogue:_surprise_attack_unchained_rogue,swimming_stunt:_swimming_stunt,accurate_poisoner:_accurate_poisoner,developed_poison_immunity:_developed_poison_immunity,iron_guts:_iron_guts,knockout_queen:_knockout_queen,lasting_poison:_lasting_poison,lasting_poison_unchained_rogue:_lasting_poison_unchained_rogue,lingering_poison:_lingering_poison,poison_use:_poison_use,signature_poison:_signature_poison,suppress_poison:_suppress_poison,swift_poison:_swift_poison,toxic_regurgitation:_toxic_regurgitation,deadly_scratch:_deadly_scratch,disarming_luck:_disarming_luck,graceful_faller:_graceful_faller,nimble_climber_catfolk:_nimble_climber_catfolk,single_minded_appraiser:_single_minded_appraiser,vicious_claws:_vicious_claws,cloying_shades:_cloying_shades,extra_earthcraft:_extra_earthcraft,minor_magic:_minor_magic,demon_lantern:_demon_lantern,gloom_magic:_gloom_magic,greater_gloom_magic:_greater_gloom_magic,innocent_facade:_innocent_facade,major_magic:_major_magic,one_of_those_faces:_one_of_those_faces,shadow_duplicate:_shadow_duplicate,wild_magic:_wild_magic,expert_cypher:_expert_cypher,occult_dungeoneer:_occult_dungeoneer,spell_storing:_spell_storing,the_whole_time:_the_whole_time,aspexias_mysticism:_aspexias_mysticism,black_market_connections:_black_market_connections,bomber:_bomber,bombers_discovery:_bombers_discovery,eldritch_conduit:_eldritch_conduit,follow_along:_follow_along,grig_jig:_grig_jig,scry_slip:_scry_slip,scrying_familiarity:_scrying_familiarity,shades_of_gray:_shades_of_gray,umbral_gear:_umbral_gear,acrobatic_assist:_acrobatic_assist,assault_leader:_assault_leader,got_your_back:_got_your_back,heads_up:_heads_up,sacrifice_self:_sacrifice_self,shove_aside:_shove_aside,acrobatic_stunt:_acrobatic_stunt,ambuscading_grapple:_ambuscading_grapple,card_sharp:_card_sharp,castling:_castling,combat_swipe:_combat_swipe,combat_swipe_unchained_rogue:_combat_swipe_unchained_rogue,combat_trick:_combat_trick,deft_palm:_deft_palm,disease_use:_disease_use,eerie_disappearance:_eerie_disappearance,escaping_stunt:_escaping_stunt,false_attacker:_false_attacker,feint_from_shadows:_feint_from_shadows,finesse_rogue:_finesse_rogue,firearm_training:_firearm_training,grit:_grit,flying_stunt:_flying_stunt,fortified_position:_fortified_position,maneuvering_dodge:_maneuvering_dodge,mien_of_despair:_mien_of_despair,positioning_attack:_positioning_attack,resiliency:_resiliency,rogue_crawl:_rogue_crawl,rogue_crawl_unchained_rogue:_rogue_crawl_unchained_rogue,sleight_of_hand_stunt:_sleight_of_hand_stunt,snap_shot:_snap_shot,stand_up:_stand_up,stand_up_unchained_rogue:_stand_up_unchained_rogue,stealth_stunt:_stealth_stunt,superior_sniper:_superior_sniper,unbalancing_trick:_unbalancing_trick,underhanded_trick:_underhanded_trick,weapon_training:_weapon_training,without_a_trace:_without_a_trace,canny_observer:_canny_observer,cunning_trigger:_cunning_trigger,quick_trapsmith:_quick_trapsmith,trap_spotter:_trap_spotter,fast_picks:_fast_picks,hairpin_trick:_hairpin_trick,last_ditch_effort:_last_ditch_effort,papercraft_tools:_papercraft_tools,quick_disable:_quick_disable,quick_disable_unchained_rogue:_quick_disable_unchained_rogue,camouflage:_camouflage,charmer:_charmer,coax_information:_coax_information,coax_information_unchained_rogue:_coax_information_unchained_rogue,convincing_lie:_convincing_lie,dampen_presence:_dampen_presence,face_in_the_crowd:_face_in_the_crowd,false_friend:_false_friend,fast_fingers:_fast_fingers,fast_stealth:_fast_stealth,honeyed_words:_honeyed_words,innocuous_servant:_innocuous_servant,just_a_face_in_the_crowd:_just_a_face_in_the_crowd,obfuscate_story:_obfuscate_story,steal_the_story:_steal_the_story,quick_disguise:_quick_disguise,rapid_boost:_rapid_boost,sczarni_smuggler:_sczarni_smuggler,scavenger:_scavenger,terrain_mastery:_terrain_mastery,bardic_pretender:_bardic_pretender,certainty:_certainty,claimed_turf:_claimed_turf,climbing_stunt:_climbing_stunt,esoteric_scholar:_esoteric_scholar,expert_leaper:_expert_leaper,expert_leaper_unchained_rogue:_expert_leaper_unchained_rogue,favored_terrain:_favored_terrain,follow_clues:_follow_clues,getaway_artist:_getaway_artist,graceful_athlete:_graceful_athlete,green_tongue:_green_tongue,guileful_polyglot:_guileful_polyglot,hard_to_fool:_hard_to_fool,hold_breath:_hold_breath,ki_pool:_ki_pool,ledge_walker:_ledge_walker,ledge_walker_unchained_rogue:_ledge_walker_unchained_rogue,multitalented:_multitalented,nimble_climber:_nimble_climber,ninja_trick:_ninja_trick,peerless_maneuver:_peerless_maneuver,philologist:_philologist,quick_scrounge:_quick_scrounge,rapid_perception:_rapid_perception,riding_stunt:_riding_stunt,rope_master:_rope_master,strong_impression:_strong_impression,strong_stroke:_strong_stroke,survivalist:_survivalist,swift_tracker:_swift_tracker,thrill_of_the_chase:_thrill_of_the_chase,wall_scramble:_wall_scramble,confounding_blades:_confounding_blades,crippling_strike:_crippling_strike,deadly_sneak:_deadly_sneak,deadly_sneak_unchained_rogue:_deadly_sneak_unchained_rogue,dispelling_attack:_dispelling_attack,double_debilitation:_double_debilitation,entanglement_of_blades:_entanglement_of_blades,hamstring_strike:_hamstring_strike,harrow_strike:_harrow_strike,improved_shadows_chill:_improved_shadows_chill,petrifying_strike:_petrifying_strike,resonating_rumbles:_resonating_rumbles,aligned_disguise:_aligned_disguise,familiar:_familiar,founders_blessing:_founders_blessing,glib_facade:_glib_facade,hidden_mind:_hidden_mind,slippery_mind:_slippery_mind,against_the_wall:_against_the_wall,another_day:_another_day,blinding_strike:_blinding_strike,dance_of_disorienting_shadows:_dance_of_disorienting_shadows,deadly_cocktail:_deadly_cocktail,defensive_roll:_defensive_roll,fast_tumble:_fast_tumble,grazing_shot:_grazing_shot,hard_minded:_hard_minded,hunters_surprise:_hunters_surprise,improved_evasion:_improved_evasion,knock_out_blow:_knock_out_blow,light_walker:_light_walker,opportunist:_opportunist,quick_shot:_quick_shot,redirect_attack:_redirect_attack,reflexive_shadow_shield:_reflexive_shadow_shield,shrinewalk:_shrinewalk,stealthy_sniper:_stealthy_sniper,unwitting_ally:_unwitting_ally,weapon_snatcher:_weapon_snatcher,cutting_edge:_cutting_edge,feat:_feat,frugal_trapsmith:_frugal_trapsmith,getaway_master:_getaway_master,hide_in_plain_sight:_hide_in_plain_sight,master_of_disguise:_master_of_disguise,master_tricks:_master_tricks,greater_multitalented:_greater_multitalented,pierce_the_darkness:_pierce_the_darkness,rumormonger:_rumormonger,see_in_darkness:_see_in_darkness,skill_mastery:_skill_mastery,skill_mastery_unchained_rogue:_skill_mastery_unchained_rogue,stalker_talent:_stalker_talent,stony_skin:_stony_skin,greater_terrain_mastery:_greater_terrain_mastery,thoughtful_reexamining:_thoughtful_reexamining,unlock_ki:_unlock_ki}