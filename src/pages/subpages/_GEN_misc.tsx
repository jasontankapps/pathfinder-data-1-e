import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested general info.</p>
</>};
const _blinded = {title: "Blinded", topLink: ["Awareness Conditions","rule/awareness_conditions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 565</Link><br/>The creature cannot see. It takes a -2 penalty to Armor Class, loses its Dexterity bonus to AC (if any), and takes a -4 penalty on most Strength- and Dexterity-based skill checks and on opposed Perception skill checks. All checks and activities that rely on vision (such as reading and Perception checks based on sight) automatically fail. All opponents are considered to have total <Link to="/rule/concealment">concealment</Link> (50% miss chance) against the blinded character. Blind creatures must make a DC 10 Acrobatics skill check to move faster than half speed. Creatures that fail this check fall prone. Characters who remain blinded for a long time grow accustomed to these drawbacks and can overcome some of them. Also see: <Link to="/rule/darkness">Darkness</Link>.</p>
</>};
const _confused = {title: "Confused", topLink: ["Awareness Conditions","rule/awareness_conditions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 566</Link><br/>A confused creature is mentally befuddled and cannot act normally. A confused creature cannot tell the difference between ally and foe, treating all creatures as enemies. Allies wishing to cast a beneficial spell that requires a touch on a confused creature must succeed on a melee touch attack. If a confused creature is attacked, it attacks the creature that last attacked it until that creature is dead or out of sight.</p>
<p>Roll on the following table at the beginning of each confused subject's turn each round to see what the subject does in that round.</p>
<ScrollContainer id="misc-confused--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td>01-25</td>
<td>Act normally.</td>
</tr>
<tr>
<td>26-50</td>
<td>Do nothing but babble incoherently.</td>
</tr>
<tr>
<td>51-75</td>
<td>Deal 1d8 points of damage + Str modifier to self with item in hand.</td>
</tr>
<tr>
<td>76-100</td>
<td>Attack nearest creature (for this purpose, a familiar counts as part of the subject's self).</td>
</tr>
</tbody></table></ScrollContainer>
<p>A confused creature who can't carry out the indicated action does nothing but babble incoherently. Attackers are not at any special advantage when attacking a confused creature. Any confused creature who is attacked automatically attacks its attackers on its next turn, as long as it is still confused when its turn comes. Note that a confused creature will not make attacks of opportunity against anything that it is not already devoted to attacking (either because of its most recent action or because it has just been attacked).</p>
</>};
const _dazed = {title: "Dazed", topLink: ["Awareness Conditions","rule/awareness_conditions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 566</Link><br/>The creature is unable to act normally. A dazed creature can take no actions, but has no penalty to AC. A dazed condition typically lasts 1 round.</p>
</>};
const _dazzled = {title: "Dazzled", topLink: ["Awareness Conditions","rule/awareness_conditions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 566</Link><br/>The creature is unable to see well because of overstimulation of the eyes. A dazzled creature takes a -1 penalty on attack rolls and sight-based Perception checks.</p>
</>};
const _deafened = {title: "Deafened", topLink: ["Awareness Conditions","rule/awareness_conditions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 566</Link><br/>A deafened character cannot hear. He takes a -4 penalty on initiative checks, automatically fails Perception checks based on sound, takes a -4 penalty on opposed Perception checks, and has a 20% chance of spell failure when casting spells with verbal components. Characters who remain deafened for a long time grow accustomed to these drawbacks and can overcome some of them.</p>
</>};
const _fascinated = {title: "Fascinated", topLink: ["Awareness Conditions","rule/awareness_conditions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 567</Link><br/>A fascinated creature is entranced by a supernatural or spell effect. The creature stands or sits quietly, taking no actions other than to pay attention to the fascinating effect, for as long as the effect lasts. It takes a -4 penalty on skill checks made as reactions, such as Perception checks. Any potential threat, such as a hostile creature approaching, allows the fascinated creature a new saving throw against the fascinating effect. Any obvious threat, such as someone drawing a weapon, casting a spell, or aiming a ranged weapon at the fascinated creature, automatically breaks the effect. A fascinated creature's ally may shake it free of the spell as a standard action.</p>
</>};
const _helpless = {title: "Helpless", topLink: ["Awareness Conditions","rule/awareness_conditions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 567</Link><br/>A helpless character is <Link to="/rule/paralyzed">paralyzed</Link>, held, bound, sleeping, <Link to="/misc/unconscious">unconscious</Link>, or otherwise completely at an opponent's mercy. A helpless target is treated as having a Dexterity of 0 (-5 modifier). Melee attacks against a helpless target get a +4 bonus (equivalent to attacking a <Link to="/rule/prone">prone</Link> target). Ranged attacks get no special bonus against helpless targets. Rogues can <Link to="/ability/sneak_attack">sneak attack</Link> helpless targets.</p>
<p>As a full-round action, an enemy can use a melee weapon to deliver a <em>coup de grace</em> to a helpless foe. An enemy can also use a bow or crossbow, provided he is adjacent to the target. The attacker automatically hits and scores a critical hit. (A rogue also gets his sneak attack damage bonus against a helpless foe when delivering a coup de grace.) If the defender survives, he must make a Fortitude save (DC 10 + damage dealt) or die. Delivering a coup de grace provokes attacks of opportunity.</p>
<p>Creatures that are immune to critical hits do not take critical damage, nor do they need to make Fortitude saves to avoid being killed by a <em>coup de grace.</em></p>
</>};
const _staggered = {title: "Staggered", topLink: ["Awareness Conditions","rule/awareness_conditions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 568</Link><br/>A staggered creature may take a single move action or standard action each round (but not both, nor can he take full-round actions). A staggered creature can still take free, swift, and immediate actions. A creature with nonlethal damage exactly equal to its current hit points gains the staggered condition.</p>
</>};
const _stunned = {title: "Stunned", topLink: ["Awareness Conditions","rule/awareness_conditions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 568</Link><br/>A stunned creature drops everything held, can't take actions, takes a -2 penalty to AC, and loses its Dexterity bonus to AC (if any).</p>
</>};
const _unconscious = {title: "Unconscious", topLink: ["Awareness Conditions","rule/awareness_conditions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 568</Link><br/>Unconscious creatures are knocked out and <Link to="/misc/helpless">helpless</Link>. Unconsciousness can result from having negative hit points (but not more than the creature's Constitution score), or from nonlethal damage in excess of current hit points.</p>
</>};
const _dead = {title: "Dead", topLink: ["Dying Conditions","rule/dying_conditions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 566</Link><br/>The character's hit points are reduced to a negative amount equal to his Constitution score, his Constitution drops to 0, or he is killed outright by a spell or effect. The character's soul leaves his body. Dead characters cannot benefit from normal or magical healing, but they can be restored to life via magic. A dead body decays normally unless magically preserved, but magic that restores a dead character to life also restores the body either to full health or to its condition at the time of death (depending on the spell or device). Either way, resurrected characters need not worry about rigor mortis, decomposition, and other conditions that affect dead bodies.</p>
</>};
const _disabled = {title: "Disabled", topLink: ["Dying Conditions","rule/dying_conditions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 566</Link><br/>A character with 0 hit points, or one who has negative hit points but has become stable and conscious, is disabled. A disabled character may take a single move action or standard action each round (but not both, nor can he take full-round actions, but he can still take swift, immediate, and free actions). He moves at half speed. Taking move actions doesn't risk further injury, but performing any standard action (or any other action the GM deems strenuous, including some free actions such as casting a quickened spell) deals 1 point of damage after the completion of the act. Unless the action increased the disabled character's hit points, he is now in negative hit points and <Link to="/misc/dying">dying</Link>.</p>
<p>A disabled character with negative hit points recovers hit points naturally if he is being helped. Otherwise, each day he can attempt a DC 10 Constitution check after resting for 8 hours, to begin recovering hit points naturally. The character takes a penalty on this roll equal to his negative hit point total. Failing this check causes the character to lose 1 hit point, but this does not cause the character to become <Link to="/misc/unconscious">unconscious</Link>. Once a character makes this check, he continues to heal naturally and is no longer in danger of losing hit points naturally.</p>
</>};
const _dying = {title: "Dying", topLink: ["Dying Conditions","rule/dying_conditions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 566</Link><br/>A dying creature is <Link to="/misc/unconscious">unconscious</Link> and near death. Creatures that have negative hit points and have not <Link to="/misc/stabilize">stabilized</Link> are dying. A dying creature can take no actions. On the character's next turn, after being reduced to negative hit points (but not dead), and on all subsequent turns, the character must make a DC 10 Constitution check to become <Link to="/misc/stable">stable</Link>. The character takes a penalty on this roll equal to his negative hit point total. A character that is stable does not need to make this check. A natural 20 on this check is an automatic success. If the character fails this check, he loses 1 hit point. If a dying creature has an amount of negative hit points equal to its Constitution score, it dies.</p>
</>};
const _stable = {title: "Stable", topLink: ["Dying Conditions","rule/dying_conditions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 568</Link><br/>A character who was <Link to="/misc/dying">dying</Link> but who has stopped losing hit points each round and still has negative hit points is stable. The character is no longer dying, but is still <Link to="/misc/unconscious">unconscious</Link>. If the character has become stable because of aid from another character (such as a Heal check or magical healing), then the character no longer loses hit points. The character can make a DC 10 Constitution check each hour to become conscious and <Link to="/misc/disabled">disabled</Link> (even though his hit points are still negative). The character takes a penalty on this roll equal to his negative hit point total.</p>
<p>If a character has become stable on his own and hasn't had help, he is still at risk of losing hit points. Each hour he can make a Constitution check to become stable (as a character that has received aid), but each failed check causes him to lose 1 hit point.</p>
</>};
const _exhausted = {title: "Exhausted", topLink: ["Exhaustion Conditions","rule/exhaustion_conditions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 567</Link><br/>An exhausted character moves at half speed, cannot run or charge, and takes a -6 penalty to Strength and Dexterity. After 1 hour of complete rest, an exhausted character becomes <Link to="/misc/fatigued">fatigued</Link>. A fatigued character becomes exhausted by doing something else that would normally cause fatigue.</p>
</>};
const _fatigued = {title: "Fatigued", topLink: ["Exhaustion Conditions","rule/exhaustion_conditions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 567</Link><br/>A fatigued character can neither run nor charge and takes a -2 penalty to Strength and Dexterity. Doing anything that would normally cause fatigue causes the fatigued character to become <Link to="/misc/exhausted">exhausted</Link>. After 8 hours of complete rest, fatigued characters are no longer fatigued.</p>
</>};
const _cowering = {title: "Cowering", topLink: ["Fear Conditions","rule/fear_conditions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 566</Link><br/>The character is frozen in fear and can take no actions. A cowering character takes a -2 penalty to Armor Class and loses his Dexterity bonus (if any).</p>
</>};
const _frightened = {title: "Frightened", topLink: ["Fear Conditions","rule/fear_conditions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 567</Link><br/>A frightened creature flees from the source of its fear as best it can. If unable to flee, it may fight. A frightened creature takes a -2 penalty on all attack rolls, saving throws, skill checks, and ability checks. A frightened creature can use special abilities, including spells, to flee; indeed, the creature must use such means if they are the only way to escape.</p>
<p>Frightened is like <Link to="/misc/shaken">shaken</Link>, except that the creature must flee if possible. <Link to="/misc/panicked">Panicked</Link> is a more extreme state of fear.</p>
</>};
const _panicked = {title: "Panicked", topLink: ["Fear Conditions","rule/fear_conditions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 568</Link><br/>A panicked creature must drop anything it holds and flee at top speed from the source of its fear, as well as any other dangers it encounters, along a random path. It can't take any other actions. In addition, the creature takes a -2 penalty on all saving throws, skill checks, and ability checks. If cornered, a panicked creature <Link to="/misc/cower">cowers</Link> and does not attack, typically using the <Link to="/misc/total_defense">total defense</Link> action in combat. A panicked creature can use special abilities, including spells, to flee; indeed, the creature must use such means if they are the only way to escape.</p>
<p>Panicked is a more extreme state of fear than <Link to="/misc/shaken">shaken</Link> or <Link to="/misc/frightened">frightened</Link>.</p>
</>};
const _shaken = {title: "Shaken", topLink: ["Fear Conditions","rule/fear_conditions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 568</Link><br/>A shaken character takes a -2 penalty on attack rolls, saving throws, skill checks, and ability checks. Shaken is a less severe state of fear than <Link to="/misc/frightened">frightened</Link> or <Link to="/misc/panicked">panicked</Link>.</p>
</>};
const _sickened = {title: "Sickened", topLink: ["Sickened Conditions","rule/sickened_conditions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 568</Link><br/>The character takes a -2 penalty on all attack rolls, weapon damage rolls, saving throws, skill checks, and ability checks.</p>
</>};
const _nauseated = {title: "Nauseated", topLink: ["Sickened Conditions","rule/sickened_conditions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 568</Link><br/>Creatures with the nauseated condition experience stomach distress. Nauseated creatures are unable to attack, cast spells, concentrate on spells, or do anything else requiring attention. The only action such a character can take is a single move action per turn.</p>
</>};
const _improvised_weapons = {title: "Improvised Weapons", topLink: ["Weapon Encumbrance and Size","rule/weapon_encumbrance"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 144</Link><br/>Sometimes objects not crafted to be weapons nonetheless see use in combat. Because such objects are not designed for this use, any creature that uses an improvised weapon in combat is considered to be nonproficient with it and takes a -4 penalty on attack rolls made with that object. To determine the size category and appropriate damage for an improvised weapon, compare its relative size and damage potential to the <Link to="/main/equipment_weapons">weapon list</Link> to find a reasonable match. An improvised weapon scores a threat on a natural roll of 20 and deals double damage on a critical hit. An improvised thrown weapon has a range increment of 10 feet.</p>
<blockquote>
<p><em>Also see: <Link to="/rule/improvised_weapon_special_features">Improvised Weapon Special Features</Link></em></p>
</blockquote>
</>};
const _damage_die_adjustments = {title: "Damage Die Adjustments", jsx: <><p>Many times, the rules will instruct you to increase or decrease the damage die of an attack. Below are the three main sources that list damage dice by steps.</p>
<hr/>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 315</Link></p>
<p>Damage dice increase as follows: 1d2, 1d3, 1d4, 1d6, 1d8, 2d6, 3d6, 4d6, 6d6, 8d6, 12d6.</p>
<p>A weapon or attack that deals 1d10 points of damage increases as follows: 1d10, 2d8, 3d8, 4d8, 6d8, 8d8, 12d8.</p>
<blockquote>
<p><em>&mdash; From <Link to="/feat/improved_natural_attack">Improved Natural Attack</Link></em></p>
</blockquote>
<hr/>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 296</Link></p>
<h3 id="misc-damage_die_adjustments-table-3-1-base-damage-of-natural-attacks-by-size">Table 3-1: Base Damage of Natural Attacks by Size</h3>
<p><em>(Individual creatures vary from values below as appropriate.)</em></p>
<ScrollContainer id="misc-damage_die_adjustments--table-0"><table>
<thead>
<tr>
<th>Natural Attack</th>
<th>Fine</th>
<th>Diminutive</th>
<th>Tiny</th>
<th>Small</th>
<th>Medium</th>
<th>Large</th>
<th>Huge</th>
<th>Gargantuan</th>
<th>Colossal</th>
<th>Damage Type</th>
<th>Attack Type</th>
</tr>
</thead>
<tbody><tr>
<td>Bite</td>
<td>1</td>
<td>1d2</td>
<td>1d3</td>
<td>1d4</td>
<td>1d6</td>
<td>1d8</td>
<td>2d6</td>
<td>2d8</td>
<td>4d6</td>
<td>B+S+P</td>
<td>Primary</td>
</tr>
<tr>
<td>Claw</td>
<td>-</td>
<td>1</td>
<td>1d2</td>
<td>1d3</td>
<td>1d4</td>
<td>1d6</td>
<td>1d8</td>
<td>2d6</td>
<td>2d8</td>
<td>B+S</td>
<td>Primary</td>
</tr>
<tr>
<td>Gore</td>
<td>1</td>
<td>1d2</td>
<td>1d3</td>
<td>1d4</td>
<td>1d6</td>
<td>1d8</td>
<td>2d6</td>
<td>2d8</td>
<td>4d6</td>
<td>P</td>
<td>Primary</td>
</tr>
<tr>
<td>Hoof, Tentacle, Wing</td>
<td>-</td>
<td>1</td>
<td>1d2</td>
<td>1d3</td>
<td>1d4</td>
<td>1d6</td>
<td>1d8</td>
<td>2d6</td>
<td>2d8</td>
<td>B</td>
<td>Secondary</td>
</tr>
<tr>
<td>Pincers, Tail Slap</td>
<td>1</td>
<td>1d2</td>
<td>1d3</td>
<td>1d4</td>
<td>1d6</td>
<td>1d8</td>
<td>2d6</td>
<td>2d8</td>
<td>4d6</td>
<td>B</td>
<td>Secondary</td>
</tr>
<tr>
<td>Slam</td>
<td>-</td>
<td>1</td>
<td>1d2</td>
<td>1d3</td>
<td>1d4</td>
<td>1d6</td>
<td>1d8</td>
<td>2d6</td>
<td>2d8</td>
<td>B</td>
<td>Primary</td>
</tr>
<tr>
<td>Sting</td>
<td>-</td>
<td>1</td>
<td>1d2</td>
<td>1d3</td>
<td>1d4</td>
<td>1d6</td>
<td>1d8</td>
<td>2d6</td>
<td>2d8</td>
<td>P</td>
<td>Primary</td>
</tr>
<tr>
<td>Talons</td>
<td>-</td>
<td>1</td>
<td>1d2</td>
<td>1d3</td>
<td>1d4</td>
<td>1d6</td>
<td>1d8</td>
<td>2d6</td>
<td>2d8</td>
<td>S</td>
<td>Primary</td>
</tr>
<tr>
<td>Other</td>
<td>-</td>
<td>1</td>
<td>1d2</td>
<td>1d3</td>
<td>1d4</td>
<td>1d6</td>
<td>1d8</td>
<td>2d6</td>
<td>2d8</td>
<td>B, S, and/or P</td>
<td>Secondary</td>
</tr>
</tbody></table></ScrollContainer>
<blockquote>
<p><em>&mdash; From <Link to="/umr/natural_attacks">Natural Attacks</Link></em></p>
</blockquote>
<hr/>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 144</Link></p>
<h3 id="misc-damage_die_adjustments-table-6-5-tiny-and-large-weapon-damage">Table 6-5: Tiny and Large Weapon Damage</h3>
<ScrollContainer id="misc-damage_die_adjustments--table-1"><table>
<thead>
<tr>
<th>Tiny Weapon Damage</th>
<th>Small Weapon Damage</th>
<th>Medium Weapon Damage</th>
<th>Large Weapon Damage</th>
</tr>
</thead>
<tbody><tr>
<td>-</td>
<td>1</td>
<td>1d2</td>
<td>1d3</td>
</tr>
<tr>
<td>1</td>
<td>1d2</td>
<td>1d3</td>
<td>1d4</td>
</tr>
<tr>
<td>1d2</td>
<td>1d3</td>
<td>1d4</td>
<td>1d6</td>
</tr>
<tr>
<td>1d3</td>
<td>1d4</td>
<td>1d6</td>
<td>1d8</td>
</tr>
<tr>
<td>1d4</td>
<td>1d6</td>
<td>1d8</td>
<td>2d6</td>
</tr>
<tr>
<td>1d4</td>
<td>1d6</td>
<td>2d4</td>
<td>2d6</td>
</tr>
<tr>
<td>1d6</td>
<td>1d8</td>
<td>1d10</td>
<td>2d8</td>
</tr>
<tr>
<td>1d8</td>
<td>1d10</td>
<td>1d12</td>
<td>3d6</td>
</tr>
<tr>
<td>1d8</td>
<td>1d10</td>
<td>2d6</td>
<td>3d6</td>
</tr>
<tr>
<td>1d10</td>
<td>2d6</td>
<td>2d8</td>
<td>3d8</td>
</tr>
<tr>
<td>2d6</td>
<td>2d8</td>
<td>2d10</td>
<td>4d8</td>
</tr>
</tbody></table></ScrollContainer>
<blockquote>
<p><em>&mdash; From <Link to="/rule/weapon_descriptions">Weapon Descriptions</Link></em></p>
</blockquote>
</>};
const _weapon_size = {title: "Weapon Size", topLink: ["Weapon Encumbrance and Size","rule/weapon_encumbrance"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 141</Link></p>
<p><strong className="hl">Weapon Size:</strong> Every weapon has a size category. This designation indicates the size of the creature for which the weapon was designed.</p>
<p>A weapon's size category isn't the same as its size as an object. Instead, a weapon's size category is keyed to the size of the intended wielder. In general, a light weapon is an object two size categories smaller than the wielder, a one-handed weapon is an object one size category smaller than the wielder, and a two-handed weapon is an object of the same size category as the wielder.</p>
<p><strong className="hl">Inappropriately Sized Weapons:</strong> A creature can't make optimum use of a weapon that isn't properly sized for it. A cumulative -2 penalty applies on attack rolls for each size category of difference between the size of its intended wielder and the size of its actual wielder. If the creature isn't proficient with the weapon, a -4 nonproficiency penalty also applies.</p>
<p>The measure of how much effort it takes to use a weapon (whether the weapon is designated as a light, one-handed, or two-handed weapon for a particular wielder) is altered by one step for each size category of difference between the wielder's size and the size of the creature for which the weapon was designed. For example, a Small creature would wield a Medium one-handed weapon as a two-handed weapon. If a weapon's designation would be changed to something other than light, one-handed, or two-handed by this alteration, the creature can't wield the weapon at all.</p>
</>};
const _burst = {title: "Burst", topLink: ["Aiming a Spell","rule/aiming_a_spell"], jsx: <><h3 id="misc-burst-burst-emanation-spread">Burst, Emanation, Spread</h3>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 214</Link><br/>Most spells that affect an area function as a burst, an emanation, or a spread. In each case, you select the spell's point of origin (this is always a grid intersection) and measure its effect from that point.</p>
<p>A <strong className="hl">burst</strong> spell affects whatever it catches in its area, including creatures that you can't see. It can't affect creatures with total <Link to="/rule/cover">cover</Link> from its point of origin (in other words, its effects don't extend around corners). The default shape for a burst effect is a sphere, but some burst spells are specifically described as cone-shaped. A burst's area defines how far from the point of origin the spell's effect extends.</p>
<p>An <strong className="hl">emanation</strong> spell functions like a burst spell, except that the effect continues to radiate from the point of origin for the duration of the spell. Most emanations are cones or spheres.</p>
<p>A <strong className="hl">spread</strong> spell, often a cloud or fog spell, extends out like an emanation but can turn corners. You select a grid intersection, and the spell spreads out a given distance in all directions. The effect can extend around corners and into areas that you can't see. Figure distance by actual distance traveled, taking into account turns the spell effect takes. When determining distance for spread effects, count around walls, not through them. As with movement, do not trace diagonals across corners. You must designate the point of origin for such an effect, but you need not have <Link to="/rule/aiming_a_spell">line of effect</Link> to all portions of the effect.</p>
<h3 id="misc-burst-larger-creatures">Larger Creatures</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_91_battle_of_bloodmarch_hills">Pathfinder #91: Battle of Bloodmarch Hills pg. 72</Link><br/>The rules for many character options in the Pathfinder RPG Core Rulebook and other Pathfinder RPG products often assume that creatures are Medium or Small. In the case of a handful of spells with areas that feature a "radius emanation centered on you" such as <Link to="/spell/antimagic_field">antimagic field</Link>, <Link to="/spell/aura_of_doom">aura of doom</Link>, and <Link to="/spell/zone_of_silence">zone of silence</Link>, this can result in an area that is effectively useless when coming from a Large or larger caster. As an optional rule, when a creature casts an emanation or burst spell with the text "centered on you," treat the creature's entire space as the spell's point of origin, and measure the spell's area or effect from the edge of the creature's space. For instance, an <em>antimagic field</em> cast by a fire giant would extend 10 feet beyond his space (effectively increasing the emanation's radius by 5 feet).</p>
</>};
const _blocking = {title: "Blocking", topLink: ["Weapon Special Features","rule/weapon_special_features"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 130</Link></p>
<p>Some weapons have special features in addition to those noted in their descriptions.</p>
<p><strong className="hl">Blocking:</strong> When you use this weapon to <Link to="/misc/fight_defensively">fight defensively</Link>, you gain a +1 shield bonus to AC.</p>
</>};
const _brace = {title: "Brace", topLink: ["Weapon Special Features","rule/weapon_special_features"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 144</Link></p>
<p>Some weapons have special features in addition to those noted in their descriptions.</p>
<p><strong className="hl">Brace:</strong> If you use a readied action to set a brace weapon against a <Link to="/rule/charge">charge</Link>, you deal double damage on a successful hit against a charging character.</p>
</>};
const _broken = {title: "Broken", topLink: ["Weapon Special Features","rule/weapon_special_features"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 149</Link></p>
<p>Some weapons have special features in addition to those noted in their descriptions.</p>
<p><strong className="hl">Broken:</strong> Items that have taken damage in excess of half their total hit points gain the <Link to="/rule/broken_and_fragile">broken condition</Link>, meaning they are less effective at their designated task. Attacks made with a broken weapon suffer a -2 penalty on attack and damage rolls. Such weapons only score a critical hit on a natural 20 and only deal &times;2 damage on a confirmed critical hit. Both firearms and <Link to="/misc/fragile">fragile</Link> weapons include effects that grant a weapon the broken condition without the weapon explicitly taking damage.</p>
<p>If a weapon gains the broken condition from an effect, that weapon is considered to have taken damage equal to half its hit points +1. This damage is repaired either by something that addresses the effect that granted the weapon the broken condition (like quick clear in the case of firearm misfires or the <Link to="/feat/field_repair">Field Repair</Link> feat in the case of weapons with the fragile quality) or by the normal method for recovering item hit points (detailed in the broken condition description). When an effect that grants the broken condition is removed, the weapon regains the hit points it lost when the broken condition was applied.</p>
<p>Damage done by an attack against a weapon cannot be repaired by an effect that removes the broken condition.</p>
</>};
const _deadly = {title: "Deadly", topLink: ["Weapon Special Features","rule/weapon_special_features"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 130</Link></p>
<p>Some weapons have special features in addition to those noted in their descriptions.</p>
<p><strong className="hl">Deadly:</strong> When you use this weapon to deliver a <Link to="/misc/coup_de_grace">coup de grace</Link>, it gains a +4 bonus to damage when calculating the DC of the Fortitude saving throw to see whether the target of the coup de grace dies from the attack. The bonus is not added to the actual damage of the coup de grace attack.</p>
</>};
const _disarm = {title: "Disarm", topLink: ["Weapon Special Features","rule/weapon_special_features"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 144</Link></p>
<p>Some weapons have special features in addition to those noted in their descriptions.</p>
<p><strong className="hl">Disarm:</strong> When you use a disarm weapon, you get a +2 bonus on Combat Maneuver Checks to <Link to="/rule/disarm">disarm</Link> an enemy.</p>
</>};
const _distracting = {title: "Distracting", topLink: ["Weapon Special Features","rule/weapon_special_features"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 130</Link></p>
<p>Some weapons have special features in addition to those noted in their descriptions.</p>
<p><strong className="hl">Distracting:</strong> You gain a +2 bonus on Bluff skill checks to <Link to="/rule/feint">feint</Link> in combat while wielding this weapon.</p>
</>};
const _double = {title: "Double", topLink: ["Weapon Special Features","rule/weapon_special_features"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 144</Link></p>
<p>Some weapons have special features in addition to those noted in their descriptions.</p>
<p><strong className="hl">Double:</strong> You can use a double weapon to fight as if fighting with <Link to="/rule/two_weapon_fighting">two weapons</Link>, but if you do, you incur all the normal attack penalties associated with fighting with two weapons, just as if you were using a one-handed weapon and a light weapon. You can choose to wield one end of a double weapon two-handed, but it cannot be used as a double weapon when wielded in this way - only one end of the weapon can be used in any given round.</p>
</>};
const _fragile = {title: "Fragile", topLink: ["Weapon Special Features","rule/weapon_special_features"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 22</Link></p>
<p>Some weapons have special features in addition to those noted in their descriptions.</p>
<p><strong className="hl">Fragile:</strong> Weapons and armor with the fragile quality cannot take the beating that sturdier weapons can. A fragile weapon gains the <Link to="/rule/broken_and_fragile">broken</Link> condition if the wielder rolls a natural 1 on an attack roll with the weapon. If a fragile weapon is already broken, the roll of a natural 1 destroys it instead. Masterwork and magical fragile weapons and armor lack these flaws unless otherwise noted in the item description or the special material description. If a weapon gains the broken condition in this way, that weapon is considered to have taken damage equal to half its hit points +1. This damage is repaired either by something that addresses the effect that granted the weapon the broken condition (like quick clear in the case of firearm misfires or the <Link to="/feat/field_repair">Field Repair</Link> feat) or by the repair methods described in the broken condition. When an effect that grants the broken condition is removed, the weapon regains the hit points it lost when the broken condition was applied. Damage done by an attack against a weapon (such as from a <Link to="/rule/sunder">sunder</Link> combat maneuver) cannot be repaired by an effect that removes the broken condition.</p>
</>};
const _grapple = {title: "Grapple", topLink: ["Weapon Special Features","rule/weapon_special_features"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 130</Link></p>
<p>Some weapons have special features in addition to those noted in their descriptions.</p>
<p><strong className="hl">Grapple:</strong> On a successful critical hit with a weapon of this type, you can <Link to="/rule/grapple">grapple</Link> the target of the attack. The wielder can then attempt a combat maneuver check to grapple his opponent as a free action. This grapple attempt does not provoke an attack of opportunity from the creature you are attempting to grapple if that creature is not threatening you. While you grapple the target with a grappling weapon, you can only move or damage the creature on your turn. You are still considered <Link to="/rule/grappled">grappled</Link>, though you do not have to be adjacent to the creature to continue the grapple. If you move far enough away to be out of the weapon's reach, you end the grapple with that action.</p>
</>};
const _monk = {title: "Monk", topLink: ["Weapon Special Features","rule/weapon_special_features"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 145</Link></p>
<p>Some weapons have special features in addition to those noted in their descriptions.</p>
<p><strong className="hl">Monk:</strong> A monk weapon can be used by a <Link to="/class/monk">monk</Link> to perform a flurry of blows.</p>
</>};
const _nonlethal = {title: "Nonlethal", topLink: ["Weapon Special Features","rule/weapon_special_features"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 145</Link></p>
<p>Some weapons have special features in addition to those noted in their descriptions.</p>
<p><strong className="hl">Nonlethal:</strong> These weapons deal nonlethal damage.</p>
</>};
const _performance = {title: "Performance", topLink: ["Weapon Special Features","rule/weapon_special_features"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 22</Link></p>
<p>Some weapons have special features in addition to those noted in their descriptions.</p>
<p><strong className="hl">Performance:</strong> When wielding this weapon, if an attack or combat maneuver made with this weapon prompts a <Link to="/rule/performance_combat">combat performance check</Link>, you gain a +2 bonus on that check.</p>
</>};
const _reach = {title: "Reach", topLink: ["Weapon Special Features","rule/weapon_special_features"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 145</Link></p>
<p>Some weapons have special features in addition to those noted in their descriptions.</p>
<p><strong className="hl">Reach:</strong> A reach weapon is a melee weapon that allows its wielder to strike at targets that aren't adjacent to him. Most reach weapons double the wielder's natural reach, meaning that a typical Small or Medium wielder of such a weapon can attack a creature 10 feet away, but not a creature in an adjacent square. A typical Large character wielding a reach weapon of the appropriate size can attack a creature 15 or 20 feet away, but not adjacent creatures or creatures up to 10 feet away.</p>
</>};
const _sunder = {title: "Sunder", topLink: ["Weapon Special Features","rule/weapon_special_features"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 145</Link></p>
<p>Some weapons have special features in addition to those noted in their descriptions.</p>
<p><strong className="hl">Sunder:</strong> When you use a sunder weapon, you get a +2 bonus on Combat Maneuver Checks to <Link to="/rule/sunder">sunder</Link> attempts.</p>
</>};
const _trip = {title: "Trip", topLink: ["Weapon Special Features","rule/weapon_special_features"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 145</Link></p>
<p>Some weapons have special features in addition to those noted in their descriptions.</p>
<p><strong className="hl">Trip:</strong> You can use any weapon to make <Link to="/rule/trip">trip</Link> attacks, but if you are tripped during your own trip attempt, you can drop a trip weapon to avoid being tripped. If the weapon has any other bonuses that apply during a trip attempt, those bonuses also apply during <Link to="/rule/drag">drag</Link> and <Link to="/rule/reposition">reposition</Link> combat maneuvers.</p>
</>};
const _automatic = {title: "Automatic", topLink: ["Tech Weapons","rule/tech_weapons"], jsx: <><p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 20</Link></p>
<p>Some weapons have special features in addition to those noted in their descriptions.</p>
<p><strong className="hl">Automatic:</strong> This weapon can act as a <Link to="/misc/semi_automatic">semi-automatic</Link> weapon, or it can fire a burst of shots with a single pull of the trigger to attack all creatures in a line. This line starts from any corner of the wielder's space and extends to the limit of the weapon's range or until it strikes a barrier it cannot penetrate. When using an automatic weapon to attack all creatures in a line, the wielder makes a separate attack roll against each creature in the line. Each creature in the line can be attacked with only one shot from each burst. Each attack roll takes a -2 penalty, and its damage cannot be modified by <Link to="/misc/precision_damage">precision damage</Link> or damage-increasing feats such as <Link to="/feat/vital_strike">Vital Strike</Link>. Effects that grant <Link to="/rule/concealment">concealment</Link>, such as fog or smoke, or the <Link to="/spell/blur">blur</Link>, <Link to="/spell/invisibility">invisibility</Link>, or <Link to="/spell/mirror_image">mirror image</Link> spells, do not affect an automatic weapon's line attack. Roll to confirm each attack roll that threatens a critical hit separately. A single burst with an automatic weapon consumes 10 charges. When taking a full-attack action with an automatic weapon, the wielder can fire as many bursts in a round as he has attacks, provided he has enough charges to make all of the attacks.</p>
</>};
const _semi_automatic = {title: "Semi-Automatic", topLink: ["Tech Weapons","rule/tech_weapons"], jsx: <><p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 20</Link></p>
<p>Some weapons have special features in addition to those noted in their descriptions.</p>
<p><strong className="hl">Semi-Automatic:</strong> A semi-automatic weapon normally fires one shot as an attack. However, the user can take a full-attack action to fire twice, as if using the <Link to="/feat/rapid_shot">Rapid Shot</Link> feat (including taking a -2 penalty on all attacks). If the wielder has the Rapid Shot feat, she can use the additional shot from that as well, but the penalty for all shots fired in that round increases to -6.</p>
</>};
const _slow_firing = {title: "Slow-Firing", topLink: ["Tech Weapons","rule/tech_weapons"], jsx: <><p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 20</Link></p>
<p>Some weapons have special features in addition to those noted in their descriptions.</p>
<p><strong className="hl">Slow-Firing:</strong> A slow-firing weapon requires a full-round action to use, and thus cannot be used to make iterative attacks.</p>
</>};
const _touch = {title: "Touch", topLink: ["Tech Weapons","rule/tech_weapons"], jsx: <><p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 20</Link></p>
<p>Some weapons have special features in addition to those noted in their descriptions.</p>
<p><strong className="hl">Touch:</strong> Attacks with the weapon resolve as touch attacks.</p>
</>};
const _scatter = {title: "Scatter", topLink: ["Weapon Special Features","rule/weapon_special_features"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 137</Link></p>
<p>Some weapons have special features in addition to those noted in their descriptions.</p>
<p><strong className="hl">Scatter:</strong> A weapon with the scatter weapon quality can shoot two different types of ammunition. It can fire normal bullets that target one creature, or it can make a scattering shot, attacking all creatures within a cone. Cannons with the scatter weapon quality only fire grapeshot, unless their descriptions state otherwise. When a scatter weapon attacks all creatures within a cone, it makes a separate attack roll against each creature within the cone. Each attack roll takes a -2 penalty, and its attack damage cannot be modified by <Link to="/misc/precision_damage">precision damage</Link> or damage-increasing feats such as <Link to="/feat/vital_strike">Vital Strike</Link>. Effects that grant <Link to="/rule/concealment">concealment</Link>, such as fog or smoke, or the <Link to="/spell/blur">blur</Link>, <Link to="/spell/invisibility">invisibility</Link>, or <Link to="/spell/mirror_image">mirror image</Link> spells, do not foil a scatter attack. If any of the attack rolls threaten a critical, confirm the critical for that attack roll alone. A firearm that makes a scatter shot misfires only if all of the attack rolls made misfire. If a scatter weapon explodes on a misfire, it deals triple its damage to all creatures within the misfire radius.</p>
</>};
const _alchemical_burn = {title: "Alchemical Burn", topLink: ["Alchemical Items","main/equipment_alchemical"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 234</Link></p>
<p><strong className="hl">Alchemical Burn:</strong> Some alchemical items allow you to accept alchemical burn. To accept alchemical burn, you voluntarily take 1 point of nonlethal damage per character level when imbibing the item to gain the listed benefit. This damage can't be healed by any means other than getting a full night's rest, which removes all alchemical burn and associated nonlethal damage. Nonlethal damage from alchemical burn can't be reduced or redirected, and if you are incapable of taking nonlethal damage, you gain no benefit from alchemical items that cause alchemical burn. You can accept alchemical burn only once per round, and can't accept both alchemical burn and burn from the <Link to="/class/kineticist">kineticist</Link> class in the same round. A kineticist can use her internal buffer to avoid accepting alchemical burn. If you have accepted alchemical burn, you cannot benefit from abilities that allow you to ignore or alter the effects received from nonlethal damage. You can benefit from only one item that uses alchemical burn at a time. If you imbibe another, the second item has no effect.</p>
</>};
const _alchemical_inspiration = {title: "Alchemical Inspiration", topLink: ["Alchemical Items","main/equipment_alchemical"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 234</Link></p>
<p><strong className="hl">Alchemical Inspiration:</strong> Items that grant alchemical inspiration function similar to the inspiration class feature of the <Link to="/class/investigator">investigator</Link> class. Such an alchemical item typically grants a number of uses of alchemical inspiration that can be used during the duration of the item. As a free action, you can expend one use of alchemical inspiration to add 1d6 to the result of a check of the type dictated by the alchemical item (as an alchemical bonus). This can be used even if you take 10 or 20. This choice is made after the check is rolled and before the results are revealed. You can use alchemical inspiration only once per check or roll, and can't use both inspiration and alchemical inspiration on the same check or roll. In addition, if you have the inspiration class feature, you gain an additional +1 bonus when using inspiration on the appropriate type of check, whether the inspiration came from your class feature or from alchemical inspiration. You can benefit from only one item that grants alchemical inspiration at a time. If you imbibe another during the duration, the second one has no effect, even if you have already used all of your alchemical inspiration from the first item.</p>
</>};
const _signal = {title: "Signals", topLink: ["Miscellaneous Tech","main/tech_misc"], jsx: <><h2 id="misc-signal-signals">Signals</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 43</Link><br/>Some items, like <Link to="/tech-misc/chipfinder_brown">chipfinders</Link>, <Link to="/tech-misc/commset">commsets</Link>, and <Link to="/tech-misc/detonator">detonators</Link>, can remotely interact with other objects via <strong className="hl">signals</strong>. Signals have a maximum range set by the device. Furthermore, a signal cannot penetrate solid barriers well. A signal is blocked by 1 foot of metal, 5 feet of stone, or 20 feet of organic matter. <Link to="/tech-misc/force_field_brown">Force fields</Link> do not block signals at all. <Link to="/tech-misc/signal_booster">Signal boosters</Link> and <Link to="/tech-misc/signal_jammer">signal jammers</Link> can also affect signal range.</p>
</>};
const _squeezing = {title: "Squeezing", topLink: ["Terrain and Obstacles","rule/terrain_and_obstacles"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 193</Link><br/>In some cases, you may have to squeeze into or through an area that isn't as wide as the space you take up. You can squeeze through or into a space that is at least half as wide as your normal space. Each move into or through a narrow space counts as if it were 2 squares, and while squeezed in a narrow space, you take a -4 penalty on attack rolls and a -4 penalty to AC.</p>
<p>When a Large creature (which normally takes up 4 squares) squeezes into a space that's 1 square wide, the creature's miniature figure occupies 2 squares, centered on the line between the 2 squares. For a bigger creature, center the creature likewise in the area it squeezes into.</p>
<p>A creature can squeeze past a creature while moving but it can't end its movement in an occupied square.</p>
<p>To squeeze through or into a space less than half your space's width, you must use the Escape Artist skill. You can't attack while using Escape Artist to squeeze through or into a narrow space, you take a -4 penalty to AC, and you lose any Dexterity bonus to AC.</p>
</>};
const _total_defense = {title: "Total Defense", topLink: ["Standard Actions","rule/standard_actions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 185</Link></p>
<p>The <strong className="hl">total defense</strong> action lets you defend yourself as a <Link to="/rule/standard_actions">standard action</Link>. You get a +4 dodge bonus to your AC for 1 round. Your AC improves at the start of this action. You can't combine total defense with <Link to="/misc/fighting_defensively">fighting defensively</Link> or with the benefit of the <Link to="/feat/combat_expertise">Combat Expertise</Link> feat. You can't make attacks of opportunity while using total defense.</p>
</>};
const _fighting_defensively = {title: "Fighting Defensively", topLink: ["Attack","rule/attack"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 184</Link></p>
<p>You can choose to <strong className="hl">fight defensively</strong> as a <Link to="/rule/standard_actions">standard action</Link> or when taking a <Link to="/rule/full_attack">full-attack</Link> action. If you do so, you take a -4 penalty on all attacks in a round to gain a +2 dodge bonus to AC until the start of your next turn.</p>
<div className="sideNoteWrap singular optional elephant"><ScrollContainer id="misc-fighting_defensively--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/the_elephant_in_the_room"><IonIcon aria-label="The Elephant in the Room" icon="/icons/elephant.svg" /></ThLink><td><p>This option may be replaced with the <Link to="/rule/combat_errata">Defensive Stance</Link> action.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _dismissible = {title: "Dismissible Spells", topLink: ["Spell Duration","rule/duration"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 215</Link></p>
<p><strong className="hl">(D) Dismissible:</strong> If the duration line ends with "(D)", you can dismiss the spell at will. You must be within range of the spell's effect and must speak words of dismissal, which are usually a modified form of the spell's verbal component. If the spell has no verbal component, you can dismiss the effect with a gesture. Dismissing a spell is a standard action that does not provoke attacks of opportunity.</p>
<p>A spell that depends on concentration is dismissible by its very nature, and dismissing it does not take an action, since all you have to do to end the spell is to stop concentrating on your turn.</p>
</>};
const _hold_your_breath = {title: "Holding Your Breath", topLink: ["Swim","skill/swim"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 108</Link><br/>You can hold your breath for a number of rounds equal to twice your Constitution score, but only if you do nothing other than take move actions or free actions. If you take a standard action or a full-round action (such as making an attack), the remainder of the duration for which you can hold your breath is reduced by 1 round. (Effectively, a character in combat can hold his breath only half as long as normal.) After that period of time, you must make a DC 10 Constitution check every round to continue holding your breath. Each round, the DC for that check increases by 1. If you fail the Constitution check, you begin to <Link to="/rule/suffocate">suffocate</Link>.</p>
</>};
const _spell_completion = {title: "Spell Completion Items", topLink: ["Using Magic Items","rule/using_items"], jsx: <><h2 id="misc-spell_completion-spell-completion">Spell Completion</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 458</Link><br/>This is the activation method for <Link to="/rule/scrolls">scrolls</Link>. A scroll is a spell that is mostly finished. The preparation is done for the caster, so no preparation time is needed beforehand as with normal spellcasting. All that's left to do is perform the finishing parts of the spellcasting (the final gestures, words, and so on). To use a spell completion item safely, a character must be of high enough level in the right class to cast the spell already. If he can't already cast the spell, there's a chance he'll make a mistake.<sup><InnerLink showBacklink="backlink-misc-spell_completion-ref-M-1" id="misc-spell_completion-ref-M-1" data-hash-target to="misc-spell_completion-M">1</InnerLink></sup> Activating a spell completion item is a standard action (or the spell's casting time, whichever is longer) and provokes attacks of opportunity exactly as casting a spell does.</p>
<section data-footnotes>
<h3 id="misc-spell_completion-label">Footnotes</h3>
<ol>
<li id="misc-spell_completion-M">
<p>This is explained in the scrolls section. <InnerLink id="backlink-misc-spell_completion-ref-M-1" data-hash-target to="misc-spell_completion-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _spell_trigger = {title: "Spell Trigger Items", topLink: ["Using Magic Items","rule/using_items"], jsx: <><h2 id="misc-spell_trigger-spell-trigger">Spell Trigger</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 458</Link><br/>Spell trigger activation is similar to <Link to="/misc/spell_completion">spell completion</Link>, but it's even simpler. No gestures or spell finishing is needed, just a special knowledge of spellcasting that an appropriate character would know, and a single word that must be spoken. Spell trigger items can be used by anyone whose class can cast the corresponding spell. This is the case even for a character who can't actually cast spells, such as a 3rd-level paladin. The user must still determine what spell is stored in the item before she can activate it. Activating a spell trigger item is a standard action and does not provoke attacks of opportunity.</p>
</>};
const _precision_damage = {title: "Precision Damage", topLink: ["Critical Hits","rule/critical_hits"], jsx: <><h2 id="misc-precision_damage-precision-damage">Precision Damage</h2>
<p>"Precision damage"<sup><InnerLink showBacklink="backlink-misc-precision_damage-ref-N-1" id="misc-precision_damage-ref-N-1" data-hash-target to="misc-precision_damage-N">1</InnerLink></sup> is extra damage that is caused because of a well-aimed attack at a vulnerable area. It is not multiplied on a critical hit; in fact, critical hits are considered a <em>form</em> of precision damage. The most common type of precision damage is the <Link to="/ability/sneak_attack">sneak attack</Link>. If an ability or attack deals precision damage, it will say so in its description. If something is immune to sneak attack damage and/or critical hits, it is usually immune to all precision damage.</p>
<section data-footnotes>
<h3 id="misc-precision_damage-label">Footnotes</h3>
<ol>
<li id="misc-precision_damage-N">
<p>There is no official, explicit defintion of this term, even though it is used a lot in the rulebooks. The above is a summary of what the rules imply. <InnerLink id="backlink-misc-precision_damage-ref-N-1" data-hash-target to="misc-precision_damage-ref-N-1" aria-label="Back to reference N-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _languages = {hasJL:true,title: "Languages", jsx: <><div className="jumpList" id="misc-languages-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="misc-languages-common-languages">Common Languages</InnerLink></li><li><InnerLink toTop to="misc-languages-regional-languages">Regional Languages</InnerLink></li><li><InnerLink toTop to="misc-languages-underground-languages">Underground Languages</InnerLink></li><li><InnerLink toTop to="misc-languages-planar-languages">Planar Languages</InnerLink></li><li><InnerLink toTop to="misc-languages-common-racial-languages">Common Racial Languages</InnerLink></li><li><InnerLink toTop to="misc-languages-uncommon-racial-languages">Uncommon Racial Languages</InnerLink></li><li><InnerLink toTop to="misc-languages-less-common-racial-langauges">Less Common Racial Langauges</InnerLink></li><li><InnerLink toTop to="misc-languages-ancient-and-obscure-languages">Ancient and Obscure Languages</InnerLink></li></ul></div><h2 id="misc-languages-pathfinder-languages">Pathfinder Languages</h2>
<p>Over the years, dozens of languages have been listed in Pathfinder products. There is no published listing of all of them. Below is an unofficial compilation of languages, grouped in unofficial categories in an effort to provide some sort of guidance for GMs and players. As always, consult your GM before using this information.</p>
<h3 id="misc-languages-common-languages" data-hash-target>Common Languages</h3>
<p>In Tian Xia, "Common" refers to Tien. In the general Inner Sea region, "Common" refers to Taldane. In the Mwangi Expanse, "Common" refers to Polyglot.</p>
<h3 id="misc-languages-regional-languages" data-hash-target>Regional Languages</h3>
<p>These are generally limited to those who reside in their regions.</p>
<div className="columnar">
<ul>
<li>Dtang (Southeast Tian Xia)</li>
<li>Erutaki (Crown of the World)</li>
<li>Hallit (Northern Avistan)</li>
<li>Hon-La (Northern Tien Xia)</li>
<li>Hwang (Southeast Tian Xia)</li>
<li>Iobarian (Casamaron)</li>
<li>Kelish (Kelesh Empire, Qadira, Goka)</li>
<li>Minatan (Southeast Tian Xia)</li>
<li>Minkaian (Northern and Central Tian Xia)</li>
<li>Osiriani (Osirion, Garund)</li>
<li>Senzar (Northeast Tian Xia, Wall of Heaven)</li>
<li>Shoanti (Varisia, Belkzen, Lands of the Linnorm Kings)</li>
<li>Skald (Lands of the Linnorm Kings)</li>
<li>Varisian (Varisia, South-Central Avistan)</li>
<li>Varki (Lands of the Linnorm Kings)</li>
<li>Vudrani (Vudra, Nex, Katapesh, Southwest Tian Xia, Goka)</li>
</ul>
</div>
<h3 id="misc-languages-underground-languages" data-hash-target>Underground Languages</h3>
<p>These are generally limited to those who reside beneath the surface.</p>
<ul>
<li>Aklo (Tian Xia Darklands, linnorms, aboleths, more)</li>
<li>Necril (Darklands ghouls, but also Nidal and undead)</li>
<li>Orvian (Lowest levels)</li>
<li>Undercommon (Upper Levels)</li>
</ul>
<h3 id="misc-languages-planar-languages" data-hash-target>Planar Languages</h3>
<p>These are spoken on their native planes, but are often learned by those who deal with deities and planar folk.</p>
<div className="columnar">
<ul>
<li>Abyssal (The Abyss)</li>
<li>Aquan (Plane of Water)</li>
<li>Auran (Plane of Air)</li>
<li>Celestial (Heaven, Nirvana, Elysium)</li>
<li>First Speech (The First World)</li>
<li>Ignan (Plane of Fire)</li>
<li>Infernal (Hell)</li>
<li>Protean (Maelstrom)</li>
<li>Shadowtongue (Shadow Plane)</li>
<li>Terran (Plane of Earth)</li>
</ul>
</div>
<h3 id="misc-languages-common-racial-languages" data-hash-target>Common Racial Languages</h3>
<p>These are spoken by commonly encountered humanoid races or are used for other purposes.</p>
<div className="columnar">
<ul>
<li>Draconic (dragons, arcane magic-users)</li>
<li>Dwarven</li>
<li>Elven</li>
<li>Giant</li>
<li>Gnome</li>
<li>Goblin</li>
<li>Halfling</li>
<li>Orc</li>
<li>Sylvan (fey creatures, plant creatures)</li>
</ul>
</div>
<h3 id="misc-languages-uncommon-racial-languages" data-hash-target>Uncommon Racial Languages</h3>
<p>These are often learned by other races for various reasons.</p>
<ul>
<li>Aboleth</li>
<li>Cyclops</li>
<li>Sphinx</li>
</ul>
<h3 id="misc-languages-less-common-racial-langauges" data-hash-target>Less Common Racial Langauges</h3>
<p>These are spoken by less-commonly encountered races.</p>
<div className="columnar">
<ul>
<li>Adlet</li>
<li>Boggard</li>
<li>Brethedan</li>
<li>Catfolk</li>
<li>D'ziriak</li>
<li>Dark Folk</li>
<li>Drow Sign Language</li>
<li>Ekekeh</li>
<li>Elder Thing</li>
<li>Flail Snail sign language</li>
<li>Garuda</li>
<li>Girtablilu</li>
<li>Gnoll</li>
<li>Grioth</li>
<li>Grippli</li>
<li>Ib</li>
<li>Kasatha</li>
<li>Kasthezvi</li>
<li>Kech</li>
<li>Kuru</li>
<li>Lashunta</li>
<li>Mi-go</li>
<li>Munavri</li>
<li>Nagaji</li>
<li>Reptoid</li>
<li>Rougarou</li>
<li>Samsaran</li>
<li>Sasquatch</li>
<li>Shae</li>
<li>Strix</li>
<li>Syrinx</li>
<li>Tanuki</li>
<li>Tengu</li>
<li>Thriae</li>
<li>Treant</li>
<li>Triaxian</li>
<li>Vanaran</li>
<li>Vegepygmy</li>
<li>Vishkanya</li>
<li>Wayang</li>
<li>Yaddithian</li>
<li>Yithian</li>
</ul>
</div>
<h3 id="misc-languages-ancient-and-obscure-languages" data-hash-target>Ancient and Obscure Languages</h3>
<p>These are generally only available to those that take certain traits, feats, or classes, or otherwise have experience with these ancient languages.</p>
<div className="columnar">
<ul>
<li>Jandelayan</li>
<li>Tekritanin</li>
<li>Jistka</li>
<li>Androffan</li>
<li>Azlanti</li>
<li>Ancient Osiriani</li>
<li>Thassilonian</li>
<li>Druidic</li>
</ul>
</div>
</>};
const _good_saves = {title: "Good and Poor Saves", topLink: ["Saving Throws","rule/saving_throws"], jsx: <><h2 id="misc-good_saves-good-and-poor-saves">"Good" and "Poor" Saves</h2>
<p>There are two saving throw progressions in Pathfinder, commonly called "good" and "poor" (or "bad").</p>
<p><strong className="hl">Good saving throw progression</strong>: The base save bonus is 2 + half your level (or hit dice).</p>
<p><strong className="hl">Poor saving throw progression</strong>: The bonus to the saving throw is one third your level (or hit dice).</p>
<p>The <Link to="/class/fighter">fighter</Link>, for example, has <strong className="hl">good</strong> Fortitude saves, and <strong className="hl">poor</strong> Reflex and Will saves.</p>
</>};
const _alchemy_lab = {title: "Alchemy Lab", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 94</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-alchemy_lab--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Alchemy Lab</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Goods, or Magic +10</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Counts as an <Link to="/eq-misc/alchemists_lab">alchemist's lab</Link></td></tr><tr><th scope="row">Create</th><td colSpan={3}>8 Goods, 1 Influence, 5 Labor, 1 Magic (390 gp)</td></tr><tr><th id="misc-alchemy_lab-alchemy-lab-room-time">Time</th><td headers="misc-alchemy_lab-alchemy-lab-room-time">16 days</td><th id="misc-alchemy_lab-alchemy-lab-room-size">Size</th><td headers="misc-alchemy_lab-alchemy-lab-room-size">8-16 squares</td></tr></tbody></table></ScrollContainer></div><p>This room aids you when you're attempting Craft (alchemy) checks, researching new alchemist formulae, and performing similar alchemical tasks. Up to three people can use the room at a time.</p>
</>};
const _altar = {title: "Altar", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 94</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-altar--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Altar</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>Influence +3</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Counts as a permanent fixture dedicated to your deity for the purpose of <Link to="/spell/consecrate">consecrate</Link> and similar spells</td></tr><tr><th scope="row">Create</th><td colSpan={3}>2 Goods, 1 Influence, 2 Labor, 1 Magic (210 gp)</td></tr><tr><th id="misc-altar-altar-room-time">Time</th><td headers="misc-altar-altar-room-time">4 days</td><th id="misc-altar-altar-room-size">Size</th><td headers="misc-altar-altar-room-size">2-8 squares</td></tr></tbody></table></ScrollContainer></div><p>This spiritual focal point has the iconography and materials required for a ceremony. A typical Altar takes the form of a stone altar, but it could also be a sacred pool, a sacrificial pyre, a collection of statuettes, or a similar sacred convergence.</p>
</>};
const _animal_pen = {title: "Animal Pen", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 94</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-animal_pen--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Animal Pen</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Goods, or Labor +8</td></tr><tr><th scope="row">Create</th><td colSpan={3}>6 Goods, 1 Influence, 5 Labor (250 gp)</td></tr><tr><th id="misc-animal_pen-animal-pen-room-time">Time</th><td headers="misc-animal_pen-animal-pen-room-time">16 days</td><th id="misc-animal_pen-animal-pen-room-size">Size</th><td headers="misc-animal_pen-animal-pen-room-size">4-16 squares</td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/habitat">Habitat</Link></td></tr></tbody></table></ScrollContainer></div><p>An Animal Pen houses animals that need more attention than horses and cattle. It could be used to house animals for food (like chickens or pigs), display (like song birds or reptiles), or protection (like dogs or large cats). One animal pen can support 1 Large, 2 Medium, 4 Small, or 8 Tiny or smaller creatures, providing them with water and shelter. Food is not provided.</p>
</>};
const _armory = {title: "Armory", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 94</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-armory--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Armory</th></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Provides for 1 Bunks or Guard Post, hastens donning armor</td></tr><tr><th scope="row">Create</th><td colSpan={3}>9 Goods, 3 Influence, 6 Labor (390 gp)</td></tr><tr><th id="misc-armory-armory-room-time">Time</th><td headers="misc-armory-armory-room-time">16 days</td><th id="misc-armory-armory-room-size">Size</th><td headers="misc-armory-armory-room-size">5-15 squares</td></tr></tbody></table></ScrollContainer></div><p>An Armory stores a variety of armor and weapons, providing enough equipment to supply one Bunks or Guard Post with common equipment (the guards or soldiers leave their armor and weapons here, and you don't have to pay for individual equipment for them as long as this room is not broken). The room is typically supplied with medium armor and appropriate martial weapons for the guards or soldiers in the building. The Armory contains an array of helpful tools to allow you to don armor in the time it normally takes to don hastily.</p>
</>};
const _artisans_workshop = {title: "Artisan's Workshop", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 94</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-artisans_workshop--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Artisan's Workshop</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Goods, or Influence +10</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Counts as <Link to="/eq-misc/masterwork_artisans_tools">masterwork artisan's tools</Link> for one Craft skill</td></tr><tr><th scope="row">Create</th><td colSpan={3}>9 Goods, 9 Labor (360 gp)</td></tr><tr><th id="misc-artisans_workshop-artisans-workshop-room-time">Time</th><td headers="misc-artisans_workshop-artisans-workshop-room-time">20 days</td><th id="misc-artisans_workshop-artisans-workshop-room-size">Size</th><td headers="misc-artisans_workshop-artisans-workshop-room-size">8-16 squares</td></tr></tbody></table></ScrollContainer></div><p>This specialist's workshop provides a variety of tools and materials for a particular art form, such as glassworking, gemcutting, or sculpting, which you choose when you build the room. Up to three people can use the room at a time.</p>
</>};
const _auditorium = {title: "Auditorium", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 94</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-auditorium--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Auditorium</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Influence +15</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Bonus on Perform checks</td></tr><tr><th scope="row">Create</th><td colSpan={3}>19 Goods, 1 Influence, 25 Labor (910 gp)</td></tr><tr><th id="misc-auditorium-auditorium-room-time">Time</th><td headers="misc-auditorium-auditorium-room-time">40 days</td><th id="misc-auditorium-auditorium-room-size">Size</th><td headers="misc-auditorium-auditorium-room-size">40-100 squares</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/ballroom">Ballroom</Link></td></tr></tbody></table></ScrollContainer></div><p>This large room is used for various artistic performances. It contains a stage, costumes, instruments, and seating for an audience. The superior acoustics and decor grant a +2 bonus on all Perform checks made in this room.</p>
</>};
const _ballroom = {title: "Ballroom", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 94</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-ballroom--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Ballroom</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Influence +10</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Bonus on Perform checks</td></tr><tr><th scope="row">Create</th><td colSpan={3}>19 Goods, 19 Labor (760 gp)</td></tr><tr><th id="misc-ballroom-ballroom-room-time">Time</th><td headers="misc-ballroom-ballroom-room-time">40 days</td><th id="misc-ballroom-ballroom-room-size">Size</th><td headers="misc-ballroom-ballroom-room-size">40-60 squares</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/common_room">Common Room</Link></td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/auditorium">Auditorium</Link></td></tr></tbody></table></ScrollContainer></div><p>This large open room is intended for dances, receptions, and other elaborate events. The superior acoustics and decor grant a +2 bonus on all Perform checks made in this room.</p>
</>};
const _bar = {title: "Bar", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 95</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-bar--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Bar</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Influence +10</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Bonus on Diplomacy checks to gather information</td></tr><tr><th scope="row">Create</th><td colSpan={3}>6 Goods, 1 Influence, 5 Labor (250 gp)</td></tr><tr><th id="misc-bar-bar-room-time">Time</th><td headers="misc-bar-bar-room-time">16 days</td><th id="misc-bar-bar-room-size">Size</th><td headers="misc-bar-bar-room-size">10-20 squares</td></tr></tbody></table></ScrollContainer></div><p>A Bar stores a selection of drinks and includes a counter for preparing them. After spending an hour with local people in this room, for the next 24 hours you gain a +1 bonus on Diplomacy checks you make to gather information in the settlement.</p>
</>};
const _bath = {title: "Bath", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 95</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-bath--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Bath</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Influence +3</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Bonus on Fortitude saves against disease</td></tr><tr><th scope="row">Create</th><td colSpan={3}>3 Goods, 1 Influence, 2 Labor (130 gp)</td></tr><tr><th id="misc-bath-bath-room-time">Time</th><td headers="misc-bath-bath-room-time">8 days</td><th id="misc-bath-bath-room-size">Size</th><td headers="misc-bath-bath-room-size">3-6 squares</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/sauna">Sauna</Link></td></tr></tbody></table></ScrollContainer></div><p>A Bath contains a single large bathtub or multiple smaller basins, along with a stove for heating water. After spending 1 hour in this room, you gain a +2 bonus on your next ongoing Fortitude save against disease.</p>
</>};
const _battle_ring = {title: "Battle Ring", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 95</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-battle_ring--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Battle Ring</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Influence +15</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Contestant gains a bonus on Intimidate and <Link to="/rule/performance_combat">performance combat</Link> checks</td></tr><tr><th scope="row">Create</th><td colSpan={3}>18 Goods, 4 Influence, 16 Labor (800 gp)</td></tr><tr><th id="misc-battle_ring-battle-ring-room-time">Time</th><td headers="misc-battle_ring-battle-ring-room-time">40 days</td><th id="misc-battle_ring-battle-ring-room-size">Size</th><td headers="misc-battle_ring-battle-ring-room-size">40-100 squares</td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/sports_field">Sports Field</Link></td></tr></tbody></table></ScrollContainer></div><p>This enclosed field is used for some form of dangerous contest, from nonlethal sports like wrestling or boxing to lethal blood sports such as animal fights or gladiatorial combat. It includes seating for spectators, appropriate flooring (padded or sandy), and often some manner of barrier between the audience and combatants. Each day, the person in charge of the Battle Ring can grant one combatant a +2 bonus on Intimidate and performance combat checks. This benefit applies only within the settlement.</p>
</>};
const _bedroom = {title: "Bedroom", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 95</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-bedroom--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Bedroom</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Influence +3</td></tr><tr><th scope="row">Create</th><td colSpan={3}>8 Goods, 7 Labor (300 gp)</td></tr><tr><th id="misc-bedroom-bedroom-room-time">Time</th><td headers="misc-bedroom-bedroom-room-time">20 days</td><th id="misc-bedroom-bedroom-room-size">Size</th><td headers="misc-bedroom-bedroom-room-size">4-8 squares</td></tr></tbody></table></ScrollContainer></div><p>A Bedroom provides comfort and privacy for one to two people, and typically features one large bed or two smaller beds. Many also have furnishings or features, such as chairs, wardrobes, chests, tables, or small fireplaces. A Bedroom might be the sleeping place of a building's owner or a comfortable room for rent.</p>
</>};
const _bell_tower = {title: "Bell Tower", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 95</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-bell_tower--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Bell Tower</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>Capital +1 (of a type the building already generates)</td></tr><tr><th scope="row">Create</th><td colSpan={3}>11 Goods, 3 Influence, 7 Labor (450 gp)</td></tr><tr><th id="misc-bell_tower-bell-tower-room-time">Time</th><td headers="misc-bell_tower-bell-tower-room-time">28 days</td><th id="misc-bell_tower-bell-tower-room-size">Size</th><td headers="misc-bell_tower-bell-tower-room-size">9-25 squares</td></tr></tbody></table></ScrollContainer></div><p>This two-story room contains one or more bells suitable for warnings or music, along with bell pulls for operating the instruments from below. The bells can be heard up to 1 mile away.</p>
</>};
const _book_repository = {title: "Book Repository", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 95</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-book_repository--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Book Repository</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Influence +8</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Bonus on Knowledge checks of one type</td></tr><tr><th scope="row">Create</th><td colSpan={3}>8 Goods, 2 Influence, 7 Labor, 1 Magic (460 gp)</td></tr><tr><th id="misc-book_repository-book-repository-room-time">Time</th><td headers="misc-book_repository-book-repository-room-time">16 days</td><th id="misc-book_repository-book-repository-room-size">Size</th><td headers="misc-book_repository-book-repository-room-size">4-12 squares</td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/magical_repository">Magical Repository</Link></td></tr></tbody></table></ScrollContainer></div><p>A Book Repository contains shelves upon shelves of books, in addition to chairs, desks, and tables for reading and studying. Most repositories contain books on a wide array of topics providing a general wealth of information, but some contain books focused on a specific topic. When you construct a Book Repository, select one Knowledge skill. If someone has a question relating to that Knowledge skill and is able to spend 1 hour researching in the Book Repository, she gains a +3 bonus on the Knowledge check to answer the question.</p>
</>};
const _brewery = {title: "Brewery", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 95</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-brewery--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Brewery</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Influence +10</td></tr><tr><th scope="row">Create</th><td colSpan={3}>9 Goods, 2 Influence, 7 Labor (380 gp)</td></tr><tr><th id="misc-brewery-brewery-room-time">Time</th><td headers="misc-brewery-brewery-room-time">24 days</td><th id="misc-brewery-brewery-room-size">Size</th><td headers="misc-brewery-brewery-room-size">12-24 squares</td></tr></tbody></table></ScrollContainer></div><p>A Brewery allows you to ferment or distill ingredients such as fruits and grain to create potent beverages.</p>
</>};
const _bunks = {title: "Bunks", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 95</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-bunks--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Bunks</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Labor +8</td></tr><tr><th scope="row">Create</th><td colSpan={3}>7 Goods, 4 Influence, 7 Labor (400 gp)</td></tr><tr><th id="misc-bunks-bunks-room-time">Time</th><td headers="misc-bunks-bunks-room-time">24 days</td><th id="misc-bunks-bunks-room-size">Size</th><td headers="misc-bunks-bunks-room-size">15-35 squares</td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/lodging">Lodging</Link></td></tr></tbody></table></ScrollContainer></div><p>Bunks provide housing and limited storage for up to 10 people. Though hardly private, this space typically includes beds or cots, linens, small chests with poor locks, and chamber pots. If this room is part of an Inn, the building is more of a flophouse or hostel than a traveler's hotel, which would have private rooms. If part of a Hospital, this room houses patients.</p>
</>};
const _burial_ground = {title: "Burial Ground", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 95</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-burial_ground--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Burial Ground</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Influence +4</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Prevents or creates undead</td></tr><tr><th scope="row">Create</th><td colSpan={3}>4 Goods, 3 Influence, 4 Labor, 1 Magic (350 gp)</td></tr><tr><th id="misc-burial_ground-burial-ground-room-time">Time</th><td headers="misc-burial_ground-burial-ground-room-time">8 days</td><th id="misc-burial_ground-burial-ground-room-size">Size</th><td headers="misc-burial_ground-burial-ground-room-size">20-30 squares</td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/crypt">Crypt</Link></td></tr></tbody></table></ScrollContainer></div><p>This somber plot of land is dedicated to the internment of the dead. Up to 20 Medium or smaller corpses can be buried here, their plots clearly marked by gravestones, statues, or other markers. For an additional 200 gp, this area can be consecrated as holy or unholy ground. A corpse buried in holy ground cannot be animated as an undead creature. A corpse buried in unholy ground has a 5% chance every month of reanimating as an uncontrolled zombie. If you upgrade a Burial Ground, the area retains the consecration effect.</p>
</>};
const _cell = {title: "Cell", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 96</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-cell--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Cell</th></tr><tr><th scope="row">Create</th><td colSpan={3}>5 Goods, 4 Labor (180 gp)</td></tr><tr><th id="misc-cell-cell-room-time">Time</th><td headers="misc-cell-cell-room-time">16 days</td><th id="misc-cell-cell-room-size">Size</th><td headers="misc-cell-cell-room-size">1-9 squares</td></tr></tbody></table></ScrollContainer></div><p>This uncomfortable room can imprison 1 to 4 captives. It is typically nothing more than a stone room with a straw-lined floor, though some might have the barest of comforts, like cots or chamber pots. One wall is typically constructed of sturdy bars and a door affixed with a simple lock. You can install manacles or masterwork manacles at the normal price of those items.</p>
</>};
const _ceremonial_room = {title: "Ceremonial Room", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 96</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-ceremonial_room--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Ceremonial Room</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>Capital +10</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Bonus on Bluff, Diplomacy, and Intimidate checks (see below)</td></tr><tr><th scope="row">Create</th><td colSpan={3}>16 Goods, 2 Influence, 15 Labor, 5 Magic (1,180 gp)</td></tr><tr><th id="misc-ceremonial_room-ceremonial-room-room-time">Time</th><td headers="misc-ceremonial_room-ceremonial-room-room-time">40 days</td><th id="misc-ceremonial_room-ceremonial-room-room-size">Size</th><td headers="misc-ceremonial_room-ceremonial-room-room-size">40-100 squares</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/common_room">Common Room</Link></td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/throne_room">Throne Room</Link></td></tr></tbody></table></ScrollContainer></div><p>This is a large, open room for important events such as religious services, town meetings, and weddings. It often features an elevated area for the focus or leader of the event, and might have seats for others in attendance. A person leading or officially speaking at the event gains a +1 bonus on Bluff, Diplomacy, and Intimidate checks to influence others at the event. This bonus ends when the event ends.</p>
</>};
const _classroom = {title: "Classroom", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 96</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-classroom--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Classroom</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>Capital +8</td></tr><tr><th scope="row">Create</th><td colSpan={3}>6 Goods, 1 Influence, 5 Labor (250 gp)</td></tr><tr><th id="misc-classroom-classroom-room-time">Time</th><td headers="misc-classroom-classroom-room-time">14 days</td><th id="misc-classroom-classroom-room-size">Size</th><td headers="misc-classroom-classroom-room-size">5-20 squares</td></tr></tbody></table></ScrollContainer></div><p>This small meeting place gives numerous attendees an unobstructed view of a single lecturer. Many classrooms contain seating for those in attendance, a lectern, and a display table or chalkboard.</p>
</>};
const _clockwork_shop = {title: "Clockwork Shop", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 96</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-clockwork_shop--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Clockwork Shop</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Goods, or Labor +10</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Counts as <Link to="/eq-misc/masterwork_artisans_tools">masterwork artisan's tools</Link> for Craft (clockwork)</td></tr><tr><th scope="row">Create</th><td colSpan={3}>9 Goods, 9 Labor (360 gp)</td></tr><tr><th id="misc-clockwork_shop-clockwork-shop-room-time">Time</th><td headers="misc-clockwork_shop-clockwork-shop-room-time">20 days</td><th id="misc-clockwork_shop-clockwork-shop-room-size">Size</th><td headers="misc-clockwork_shop-clockwork-shop-room-size">8-16 squares</td></tr></tbody></table></ScrollContainer></div><p>This workshop provides all of the precision tools and workstations required for creating delicate clockwork goods. Up to three people can use the room at a time.</p>
</>};
const _common_room = {title: "Common Room", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 96</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-common_room--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Common Room</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Influence +7</td></tr><tr><th scope="row">Create</th><td colSpan={3}>7 Goods, 8 Labor (300 gp)</td></tr><tr><th id="misc-common_room-common-room-room-time">Time</th><td headers="misc-common_room-common-room-room-time">16 days</td><th id="misc-common_room-common-room-room-size">Size</th><td headers="misc-common_room-common-room-room-size">10-30 squares</td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/ballroom">Ballroom</Link>, <Link to="/misc/ceremonial_room">Ceremonial Room</Link>, <Link to="/misc/throne_room">Throne Room</Link></td></tr></tbody></table></ScrollContainer></div><p>This versatile open area has enough space for many people to use at once. A Common Room is typically furnished with benches, chairs, cushions, mats, pews, or stools, and might have tables.</p>
</>};
const _confessional = {title: "Confessional", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 96</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-confessional--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Confessional</th></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Bonus on Stealth checks</td></tr><tr><th scope="row">Create</th><td colSpan={3}>2 Goods, 3 Labor (100 gp)</td></tr><tr><th id="misc-confessional-confessional-room-time">Time</th><td headers="misc-confessional-confessional-room-time">4 days</td><th id="misc-confessional-confessional-room-size">Size</th><td headers="misc-confessional-confessional-room-size">2-4 squares</td></tr></tbody></table></ScrollContainer></div><p>This pair of tiny, linked rooms allows for private conversations. Alternatively, you may construct a hidden space that allows you to watch another room without being observed, such as through a peephole in a tapestry or mosaic. One side of this room provides a +4 bonus on Stealth checks to hide from creatures in the adjoining room. A Confessional can be constructed in a way that allows this bonus to apply to creatures in both sides or just in one.</p>
</>};
const _courtyard = {title: "Courtyard", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 96</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-courtyard--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Courtyard</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>Capital +5 (of a type the building already generates)</td></tr><tr><th scope="row">Create</th><td colSpan={3}>4 Goods, 5 Labor (180 gp)</td></tr><tr><th id="misc-courtyard-courtyard-room-time">Time</th><td headers="misc-courtyard-courtyard-room-time">24 days</td><th id="misc-courtyard-courtyard-room-size">Size</th><td headers="misc-courtyard-courtyard-room-size">20-40 squares</td></tr></tbody></table></ScrollContainer></div><p>This large, open area might be constructed to feature decorative landscaping or be a more utilitarian space for drills, meetings, or storage.</p>
</>};
const _crypt = {title: "Crypt", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 96</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-crypt--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Crypt</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Influence, or Magic +5</td></tr><tr><th scope="row">Create</th><td colSpan={3}>5 Goods, 3 Influence, 5 Labor, 2 Magic (490 gp)</td></tr><tr><th id="misc-crypt-crypt-room-time">Time</th><td headers="misc-crypt-crypt-room-time">16 days</td><th id="misc-crypt-crypt-room-size">Size</th><td headers="misc-crypt-crypt-room-size">8-30 squares</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/burial_ground">Burial Ground</Link></td></tr></tbody></table></ScrollContainer></div><p>This space is dedicated to the storage of prominent corpses. Above ground this space might take the form of a tomb. The duration of spells that preserve or protect corpses (such as <Link to="/spell/gentle_repose">gentle repose</Link>) are doubled when cast on a corpse that remains in this room.</p>
</>};
const _defensive_wall = {title: "Defensive Wall", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 96</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-defensive_wall--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Defensive Wall</th></tr><tr><th scope="row">Create</th><td colSpan={3}>5 Goods, 2 Influence, 5 Labor (260 gp)</td></tr><tr><th id="misc-defensive_wall-defensive-wall-room-time">Time</th><td headers="misc-defensive_wall-defensive-wall-room-time">12 days</td><th id="misc-defensive_wall-defensive-wall-room-size">Size</th><td headers="misc-defensive_wall-defensive-wall-room-size">20-40 squares</td></tr></tbody></table></ScrollContainer></div><p>This simple wooden wall, fence, or hedge surrounds your structure and provides a modicum of security. It is no taller than 10 feet, includes a single gate with a simple lock, and can be scaled with a DC 14 Climb check. It can be constructed as a stone wall - increasing the height by up to 10 feet and the Climb DC to 20 - by doubling the price. If combined with a Guard Post, this can be a walkable wall with a parapet.</p>
</>};
const _dock = {title: "Dock", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 97</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-dock--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Dock</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Goods, Influence, or Labor +12</td></tr><tr><th scope="row">Create</th><td colSpan={3}>7 Goods, 2 Influence, 6 Labor (320 gp)</td></tr><tr><th id="misc-dock-dock-room-time">Time</th><td headers="misc-dock-dock-room-time">20 days</td><th id="misc-dock-dock-room-size">Size</th><td headers="misc-dock-dock-room-size">10-30 squares</td></tr></tbody></table></ScrollContainer></div><p>This is a series of walkways and sturdy posts used to safely moor a water vessel such as a boat or ship. If attached to Storage, it allows you to easily move cargo to and from the water.</p>
</>};
const _dojo = {title: "Dojo", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 97</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-dojo--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Dojo</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Influence, or Labor +8</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Counts as a training facility for training or retraining</td></tr><tr><th scope="row">Create</th><td colSpan={3}>7 Goods, 1 Influence, 7 Labor (310 gp)</td></tr><tr><th id="misc-dojo-dojo-room-time">Time</th><td headers="misc-dojo-dojo-room-time">20 days</td><th id="misc-dojo-dojo-room-size">Size</th><td headers="misc-dojo-dojo-room-size">15-30 squares</td></tr></tbody></table></ScrollContainer></div><p>This open area is used for practicing combat or other physical skills. If used for combat training, it includes humanoid-shaped training dummies or silhouettes for target practice. Most Dojos include simple floor mats or straw pallets to cushion falls, plus racks containing nonlethal versions of standard weapons. If used by a Thieves' Guild, instead of combat the Dojo might instead focus on evasion training, picking locks, and disabling traps. You can use a Dojo to train up to 10 people at a time. It can be used as Bunks, though it is much less comfortable than using actual beds or cots.</p>
</>};
const _drawbridge = {title: "Drawbridge", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 97</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-drawbridge--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Drawbridge</th></tr><tr><th scope="row">Create</th><td colSpan={3}>8 Goods, 2 Influence, 5 Labor (320 gp)</td></tr><tr><th id="misc-drawbridge-drawbridge-room-time">Time</th><td headers="misc-drawbridge-drawbridge-room-time">6 days</td><th id="misc-drawbridge-drawbridge-room-size">Size</th><td headers="misc-drawbridge-drawbridge-room-size">4-8 squares</td></tr></tbody></table></ScrollContainer></div><p>This retractable bridge spans a pit, moat, or similar danger, allowing you to control access to an area. You can raise or lower the bridge by spending a full-round action to operate the mechanisms constructed on either side of the span. When raised, the bridge creates a wooden barrier (hardness 5, 40 hit points). If the Drawbridge is destroyed, it can be rebuilt in the same place for half the initial construction price.</p>
</>};
const _escape_route = {title: "Escape Route", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 97</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-escape_route--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Escape Route</th></tr><tr><th scope="row">Create</th><td colSpan={3}>9 Goods, 9 Labor (360 gp)</td></tr><tr><th id="misc-escape_route-escape-route-room-time">Time</th><td headers="misc-escape_route-escape-route-room-time">16 days</td><th id="misc-escape_route-escape-route-room-size">Size</th><td headers="misc-escape_route-escape-route-room-size">6-12 squares</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/secret_room">Secret Room</Link></td></tr></tbody></table></ScrollContainer></div><p>This is a hallway or tunnel leading to a hidden exit from the building. The exit door is typically a simple wooden door with an average lock (Disable Device DC 20 to open). Either or both ends of the hallway can be secret doors (Perception DC 20 to notice).</p>
</>};
const _false_front = {title: "False Front", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 97</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-false_front--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">False Front</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Goods +2</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Bonus to Perception and Sense Motive DCs</td></tr><tr><th scope="row">Create</th><td colSpan={3}>4 Goods, 1 Influence, 4 Labor (190 gp)</td></tr><tr><th id="misc-false_front-false-front-room-time">Time</th><td headers="misc-false_front-false-front-room-time">12 days</td><th id="misc-false_front-false-front-room-size">Size</th><td headers="misc-false_front-false-front-room-size">10-20 squares</td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/storage">Storage</Link>, <Link to="/misc/storefront">Storefront</Link></td></tr></tbody></table></ScrollContainer></div><p>This simple, nondescript business uses an innocuous front to hide criminal dealings. It might appear to be a low-quality pawnshop or ill-stocked market. It has the bare necessities for functioning as the kind of business it pretends to be, but its true purpose is to conceal the nature of the building - typically a criminal enterprise or secret meeting place, such as a cult's sanctuary or a den of thieves. The room includes a secret door leading to the rest of the building. The room increases Perception and Sense Motive DCs by 5 for those trying to notice unusual activity or determine whether the building is what it seems. Since a False Front contains both a false Storefront and false display area, its space can be upgraded to both Storage and a Storefront simultaneously (or upgraded to just one, leaving the remaining area unused).</p>
</>};
const _farmland = {title: "Farmland", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 97</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-farmland--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Farmland</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Goods +10</td></tr><tr><th scope="row">Create</th><td colSpan={3}>15 Goods, 15 Labor (600 gp)</td></tr><tr><th id="misc-farmland-farmland-room-time">Time</th><td headers="misc-farmland-farmland-room-time">20 days</td><th id="misc-farmland-farmland-room-size">Size</th><td headers="misc-farmland-farmland-room-size">60-100 squares</td></tr></tbody></table></ScrollContainer></div><p>This large swath of fertile land is used for farming or fodder for livestock. The price for this room includes clearing the land, fertilizing the soil, and so on. At the GM's discretion, you might discover a plot of available land that automatically counts as a Farmland at no cost.</p>
</>};
const _forge = {title: "Forge", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 97</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-forge--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Forge</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Goods +10</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Counts as <Link to="/eq-misc/masterwork_artisans_tools">masterwork artisan's tools</Link> for smithing skills</td></tr><tr><th scope="row">Create</th><td colSpan={3}>9 Goods, 1 Influence, 8 Labor (370 gp)</td></tr><tr><th id="misc-forge-forge-room-time">Time</th><td headers="misc-forge-forge-room-time">20 days</td><th id="misc-forge-forge-room-size">Size</th><td headers="misc-forge-forge-room-size">8-16 squares</td></tr></tbody></table></ScrollContainer></div><p>A Forge includes a hearth, an anvil, a slack tub, metalworking tools, and other appropriate materials for shaping iron and other metals. A Forge counts as artisan's tools for up to three people working on metalworking skills such as Craft (armor) and Craft (weapons).</p>
</>};
const _game_room = {title: "Game Room", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 97</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-game_room--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Game Room</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp +10 (see below)</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Crime +1, Danger +10 (see below)</td></tr><tr><th scope="row">Create</th><td colSpan={3}>8 Goods, 7 Labor (300 gp)</td></tr><tr><th id="misc-game_room-game-room-room-time">Time</th><td headers="misc-game_room-game-room-room-time">16 days</td><th id="misc-game_room-game-room-room-size">Size</th><td headers="misc-game_room-game-room-room-size">10-20 squares</td></tr></tbody></table></ScrollContainer></div><p>A Game Room has tables for gambling or other forms of gaming, and is often used to make wagers on blood sports or other illicit activities. The listed earnings includes illegal gaming. If your building allows only legal gaming (whether recreational or using money), the earnings are gp +5 (not +10) and the benefit is Crime +0, Danger +0.</p>
</>};
const _garden = {title: "Garden", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 97</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-garden--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Garden</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Goods +8</td></tr><tr><th scope="row">Create</th><td colSpan={3}>5 Goods, 4 Labor (180 gp)</td></tr><tr><th id="misc-garden-garden-room-time">Time</th><td headers="misc-garden-garden-room-time">12 days</td><th id="misc-garden-garden-room-size">Size</th><td headers="misc-garden-garden-room-size">10-20 squares</td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/greenhouse">Greenhouse</Link></td></tr></tbody></table></ScrollContainer></div><p>This area of carefully tended soil is fit for growing plants that require greater attention than crops, though you can use it to grow food crops if you choose.</p>
</>};
const _gatehouse = {title: "Gatehouse", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 97</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-gatehouse--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Gatehouse</th></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Defenders get bonus on initiative and Perception checks</td></tr><tr><th scope="row">Create</th><td colSpan={3}>15 Goods, 3 Influence, 12 Labor (630 gp)</td></tr><tr><th id="misc-gatehouse-gatehouse-room-time">Time</th><td headers="misc-gatehouse-gatehouse-room-time">40 days</td><th id="misc-gatehouse-gatehouse-room-size">Size</th><td headers="misc-gatehouse-gatehouse-room-size">8-12 squares</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/gauntlet">Gauntlet</Link>, <Link to="/misc/guard_post">Guard Post</Link></td></tr></tbody></table></ScrollContainer></div><p>This defensive structure prevents access to a building. It is normally arranged so defenders have a clear line of sight to all room entrances or a clear view of all approaches to the building. It includes a strong wooden door with a good lock. You can improve this to an iron door for 500 gp. You can add a wooden portcullis for 500 gp or an iron portcullis for 1,000 gp. For an additional 80 gp, you can also count this room as a Gauntlet, allowing defenders to fall back and trap intruders here. You can construct this room in a tower layout (at no additional cost), which includes a second story that also counts as a Gatehouse. The listed price includes the cost of having unskilled employees as guards (1st-level commoners or experts with uniforms, but no armor or weapons). If the building has an Armory, these employees are armed and armored, but still mostly for show. If you want trained guards who can defend against dangerous intruders, hire professional guards or recruit a team of Guards or Soldiers. You can use a Gatehouse as a Tollbooth, which provides the same Earnings (gp or Goods +4). Any defender using the Gatehouse's defenses gains a +1 bonus on initiative checks and on Perception checks against intruders at the Gatehouse.</p>
</>};
const _gauntlet = {title: "Gauntlet", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 98</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-gauntlet--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Gauntlet</th></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Defenders get improved cover</td></tr><tr><th scope="row">Create</th><td colSpan={3}>4 Goods, 4 Labor (160 gp)</td></tr><tr><th id="misc-gauntlet-gauntlet-room-time">Time</th><td headers="misc-gauntlet-gauntlet-room-time">10 days</td><th id="misc-gauntlet-gauntlet-room-size">Size</th><td headers="misc-gauntlet-gauntlet-room-size">4-8 squares</td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/gatehouse">Gatehouse</Link></td></tr></tbody></table></ScrollContainer></div><p>This is an area with murder holes or similar defenses that give defenders an advantage when attacking or spying upon intruders. It has good wooden doors with simple locks to allow defenders to trap invaders inside. Any defender using the Gauntlet's defenses has improved cover against intruders in the Gauntlet, though these defenses limit what attacks the defenders can make. For example, a defender can shoot through a murder hole with a spell, bow, or crossbow, or can pour boiling water through it, but she can't attack through it with an axe.</p>
</>};
const _greenhouse = {title: "Greenhouse", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 98</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-greenhouse--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Greenhouse</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Goods, or Influence +12</td></tr><tr><th scope="row">Create</th><td colSpan={3}>8 Goods, 7 Labor (300 gp)</td></tr><tr><th id="misc-greenhouse-greenhouse-room-time">Time</th><td headers="misc-greenhouse-greenhouse-room-time">16 days</td><th id="misc-greenhouse-greenhouse-room-size">Size</th><td headers="misc-greenhouse-greenhouse-room-size">10-20 squares</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/garden">Garden</Link></td></tr></tbody></table></ScrollContainer></div><p>This garden is protected by glass and has its interior climate deliberately regulated. Delicate or exotic plants raised in this area grow larger and healthier than in a normal garden. Certain types of rare plants can be raised only in a Greenhouse.</p>
<blockquote>
<p><em>This room can upgrade into the Mystic Greenhouse in <Link to="/rule/wilderness_rooms">Wilderness Rooms</Link>.</em></p>
</blockquote>
</>};
const _guard_post = {title: "Guard Post", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 98</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-guard_post--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Guard Post</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Goods +4</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Defenders get a bonus on initiative and Perception checks</td></tr><tr><th scope="row">Create</th><td colSpan={3}>7 Goods, 2 Influence, 6 Labor (320 gp)</td></tr><tr><th id="misc-guard_post-guard-post-room-time">Time</th><td headers="misc-guard_post-guard-post-room-time">20 days</td><th id="misc-guard_post-guard-post-room-size">Size</th><td headers="misc-guard_post-guard-post-room-size">6-10 squares</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/tollbooth">Tollbooth</Link></td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/gatehouse">Gatehouse</Link></td></tr></tbody></table></ScrollContainer></div><p>This defensive structure prevents access to a building. It is normally arranged so defenders have a clear line of sight to all room entrances or a clear view of all approaches to the building. You can construct this room in a tower layout (at no additional cost), which includes a second story that also counts as a Guard Post. The listed price includes the cost of having unskilled employees as guards (1st-level commoners or experts with uniforms, but no armor or weapons). If the building has an Armory, these employees are armed and armored, but still mostly for show. If you want trained guards who can defend against dangerous intruders, hire professional guards or recruit a team of Guards or Soldiers. Any defender using the Guard Post's defenses gains a +1 bonus on initiative checks and on Perception checks against intruders at the Guard Post.</p>
</>};
const _habitat = {title: "Habitat", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 98</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-habitat--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Habitat</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Influence +12</td></tr><tr><th scope="row">Create</th><td colSpan={3}>18 Goods, 3 Influence, 17 Labor (790 gp)</td></tr><tr><th id="misc-habitat-habitat-room-time">Time</th><td headers="misc-habitat-habitat-room-time">40 days</td><th id="misc-habitat-habitat-room-size">Size</th><td headers="misc-habitat-habitat-room-size">40-60 squares</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/animal_pen">Animal Pen</Link>, <Link to="/misc/stall">Stall</Link></td></tr></tbody></table></ScrollContainer></div><p>A Habitat houses animals. Unlike a Stall or Hatchery, a Habitat provides comfortable lodging for exotic or rare creatures. This room contains cages and walled chambers for the resident creatures, with at least one wall constructed of bars or windows to allow visitors to observe the creatures. A Habitat built to house birds is often constructed with tall poles and netting to keep the creatures from flying away.</p>
</>};
const _hatchery = {title: "Hatchery", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 99</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-hatchery--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Hatchery</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Goods +5</td></tr><tr><th scope="row">Create</th><td colSpan={3}>4 Goods, 1 Influence, 3 Labor (170 gp)</td></tr><tr><th id="misc-hatchery-hatchery-room-time">Time</th><td headers="misc-hatchery-hatchery-room-time">10 days</td><th id="misc-hatchery-hatchery-room-size">Size</th><td headers="misc-hatchery-hatchery-room-size">2-6 squares</td></tr></tbody></table></ScrollContainer></div><p>A Hatchery is used for nesting and hatching egg-laying creatures such as birds, lizards, owlbears, or dragons. Alternatively, it can be used for fish, shellfish, or other aquatic egg-laying creatures. This room might be on the roof to allow flying creatures to come and go, or might be connected to the building on ground level. It contains cages and soft bedding to cradle the eggs, and might contain a small wood-burning stove to keep the eggs warm if parent animals aren't available.</p>
</>};
const _infirmary = {title: "Infirmary", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 99</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-infirmary--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Infirmary</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Influence +8</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Counts as a <Link to="/eq-misc/healers_kit">healer's kit</Link> (see below)</td></tr><tr><th scope="row">Create</th><td colSpan={3}>6 Goods, 1 Influence, 6 Labor, 1 Magic (370 gp)</td></tr><tr><th id="misc-infirmary-infirmary-room-time">Time</th><td headers="misc-infirmary-infirmary-room-time">16 days</td><th id="misc-infirmary-infirmary-room-size">Size</th><td headers="misc-infirmary-infirmary-room-size">4-12 squares</td></tr></tbody></table></ScrollContainer></div><p>An Infirmary is used for treating injured and sick people. It contains beds or cots, a wash basin, and medical supplies. This counts as having a healer's kit for up to two healers at a time. As long as the building doesn't have the broken condition, you don't need to track individual uses of these healer's kits.</p>
</>};
const _kitchen = {title: "Kitchen", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 99</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-kitchen--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Kitchen</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Goods +4</td></tr><tr><th scope="row">Create</th><td colSpan={3}>4 Goods, 4 Labor (160 gp)</td></tr><tr><th id="misc-kitchen-kitchen-room-time">Time</th><td headers="misc-kitchen-kitchen-room-time">12 days</td><th id="misc-kitchen-kitchen-room-size">Size</th><td headers="misc-kitchen-kitchen-room-size">2-6 squares</td></tr></tbody></table></ScrollContainer></div><p>A Kitchen is used to prepare food. It contains a stove, sink, and small pantry with basic cooking tools and supplies. A Kitchen for a business that serves food, such as an Inn, probably also has Storage just for foodstuffs.</p>
</>};
const _labyrinth = {title: "Labyrinth", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 99</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-labyrinth--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Labyrinth</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Influence +5</td></tr><tr><th scope="row">Create</th><td colSpan={3}>15 Goods, 15 Labor (370 gp)</td></tr><tr><th id="misc-labyrinth-labyrinth-room-time">Time</th><td headers="misc-labyrinth-labyrinth-room-time">30 days</td><th id="misc-labyrinth-labyrinth-room-size">Size</th><td headers="misc-labyrinth-labyrinth-room-size">40-100 squares</td></tr></tbody></table></ScrollContainer></div><p>A Labyrinth is a walled maze, hedge maze, or simple tiled pattern on the ground that those in need of tranquility can walk for quiet meditation.</p>
</>};
const _laundry = {title: "Laundry", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 99</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-laundry--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Laundry</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Goods +3</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Bonus on Fortitude saves against contracting disease</td></tr><tr><th scope="row">Create</th><td colSpan={3}>3 Goods, 3 Labor (120 gp)</td></tr><tr><th id="misc-laundry-laundry-room-time">Time</th><td headers="misc-laundry-laundry-room-time">8 days</td><th id="misc-laundry-laundry-room-size">Size</th><td headers="misc-laundry-laundry-room-size">2-6 squares</td></tr></tbody></table></ScrollContainer></div><p>A Laundry contains a large vat for soaking clothes, a cauldron to heat water, washboards, drying lines, and racks and bins for dry clothes. This might be an outside area adjacent to a building. Employees and regular users of a Laundry gain a +1 bonus on Fortitude saves to resist contracting a disease while they're in the settlement.</p>
</>};
const _lavatory = {title: "Lavatory", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 99</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-lavatory--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Lavatory</th></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Bonus on Fortitude saves against contracting disease</td></tr><tr><th scope="row">Create</th><td colSpan={3}>3 Goods, 3 Labor (120 gp)</td></tr><tr><th id="misc-lavatory-lavatory-room-time">Time</th><td headers="misc-lavatory-lavatory-room-time">4 days</td><th id="misc-lavatory-lavatory-room-size">Size</th><td headers="misc-lavatory-lavatory-room-size">1-4 squares</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/shack">Shack</Link></td></tr></tbody></table></ScrollContainer></div><p>A Lavatory includes up to four 5-foot-by-5-foot private rooms for dealing with biological functions. If a building doesn't have a Lavatory, people in it must go elsewhere for this sort of activity. Depending on the building and settlement, a Lavatory might be an outhouse, a closet with a chamber pot, or a stool connected to an external system such as a cesspit or pig trough. If the building has a Sewer Access, you can automatically connect all Lavatories in the building to the settlement's sewer system. The sanitation improvement from having a Lavatory mean residents, guests, employees, and others who frequent the building gain a +2 bonus on Fortitude saves to resist contracting a disease while in the settlement.</p>
</>};
const _leather_workshop = {title: "Leather Workshop", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 99</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-leather_workshop--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Leather Workshop</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Goods +10</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Counts as <Link to="/eq-misc/masterwork_artisans_tools">masterwork artisan's tools</Link> for leatherworking skills</td></tr><tr><th scope="row">Create</th><td colSpan={3}>7 Goods, 1 Influence, 7 Labor (310 gp)</td></tr><tr><th id="misc-leather_workshop-leather-workshop-room-time">Time</th><td headers="misc-leather_workshop-leather-workshop-room-time">16 days</td><th id="misc-leather_workshop-leather-workshop-room-size">Size</th><td headers="misc-leather_workshop-leather-workshop-room-size">4-10 squares</td></tr></tbody></table></ScrollContainer></div><p>This workshop includes a sturdy table, stool, vats, drying racks, and tools designed for turning raw hides into leather. The Leather Workshop counts as masterwork artisan's tools for up to three people creating leather goods with skills such as Craft (leather) and Craft (shoes).</p>
</>};
const _lodging = {title: "Lodging", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 99</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-lodging--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Lodging</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp +12</td></tr><tr><th scope="row">Create</th><td colSpan={3}>10 Goods, 1 Influence, 10 Labor (430 gp)</td></tr><tr><th id="misc-lodging-lodging-room-time">Time</th><td headers="misc-lodging-lodging-room-time">30 days</td><th id="misc-lodging-lodging-room-size">Size</th><td headers="misc-lodging-lodging-room-size">20-35 squares</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/bunks">Bunks</Link></td></tr></tbody></table></ScrollContainer></div><p>This area is subdivided into smaller chambers and provides private housing and limited storage for up to 10 people. Each chamber typically includes one or two small beds, linens, a chamber pot, and a small table and chair. The door to the chamber is a simple wooden door with a simple lock. You may upgrade individual locks by paying the price difference between a simple lock and the desired lock.</p>
</>};
const _magical_repository = {title: "Magical Repository", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 99</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-magical_repository--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Magical Repository</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Influence, or Magic +12</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Bonus on Knowledge (arcana), Spellcraft, and spell research checks</td></tr><tr><th scope="row">Create</th><td colSpan={3}>9 Goods, 3 Influence, 8 Labor, 3 Magic (730 gp)</td></tr><tr><th id="misc-magical_repository-magical-repository-room-time">Time</th><td headers="misc-magical_repository-magical-repository-room-time">20 days</td><th id="misc-magical_repository-magical-repository-room-size">Size</th><td headers="misc-magical_repository-magical-repository-room-size">4-12 squares</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/book_repository">Book Repository</Link></td></tr></tbody></table></ScrollContainer></div><p>A Magical Repository is similar to a Book Repository, but specific to the study of the arcane arts. It contains shelves of books, comfortable chairs, and tables for studying and for scribing notes and scrolls. If you construct this room from scratch, it grants someone who studies there for 1 hour a +3 bonus on a Knowledge (arcana) check to answer a question. If you upgrade a Book Repository into this room, you either keep the original Book Repository's bonus on Knowledge checks or change its skill to Knowledge (arcana). An hour of study in this room also grants a +3 bonus on Spellcraft checks. The room grants an additional +1 bonus on Knowledge (arcana) and Spellcraft checks for spell research (see <Link to="/rule/research_a_spell">Research a Spell</Link>) and crafting magic items.</p>
</>};
const _mill_room = {title: "Mill Room", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 100</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-mill_room--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Mill Room</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Goods +8</td></tr><tr><th scope="row">Create</th><td colSpan={3}>8 Goods, 7 Labor (300 gp)</td></tr><tr><th id="misc-mill_room-mill-room-room-time">Time</th><td headers="misc-mill_room-mill-room-room-time">20 days</td><th id="misc-mill_room-mill-room-room-size">Size</th><td headers="misc-mill_room-mill-room-room-size">20-30 squares</td></tr></tbody></table></ScrollContainer></div><p>A Mill Room contains a mechanism to process grain, foodstuffs, and other raw materials. Most simple mills are powered by hand, but those powered by horses or other beasts of burden require a stable, those powered by water require running water for the water wheel, and those powered by wind require a tower.</p>
</>};
const _nursery = {title: "Nursery", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 100</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-nursery--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Nursery</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Influence +6</td></tr><tr><th scope="row">Create</th><td colSpan={3}>6 Goods, 1 Influence, 5 Labor (250 gp)</td></tr><tr><th id="misc-nursery-nursery-room-time">Time</th><td headers="misc-nursery-nursery-room-time">14 days</td><th id="misc-nursery-nursery-room-size">Size</th><td headers="misc-nursery-nursery-room-size">8-16 squares</td></tr></tbody></table></ScrollContainer></div><p>A Nursery is used to care for infants and children. It contains cribs and beds for children, toys for their entertainment, a table for changing, and cabinets for supplies.</p>
</>};
const _observation_dome = {title: "Observation Dome", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 100</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-observation_dome--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Observation Dome</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Influence, or Magic +5</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Bonus on Knowledge (geography), Knowledge (nature), and Knowledge (planes) checks</td></tr><tr><th scope="row">Create</th><td colSpan={3}>8 Goods, 9 Labor, 1 Magic (440 gp)</td></tr><tr><th id="misc-observation_dome-observation-dome-room-time">Time</th><td headers="misc-observation_dome-observation-dome-room-time">20 days</td><th id="misc-observation_dome-observation-dome-room-size">Size</th><td headers="misc-observation_dome-observation-dome-room-size">10-20 squares</td></tr></tbody></table></ScrollContainer></div><p>This elevated room is open to the sky, has a skylight, or has a retractable roof to allow you to observe the passing of celestial bodies. An Observation Dome includes shelves containing records and notes, a telescope, and other devices dedicated to celestial study. If someone spends 1 hour researching in the Observation Dome, she gains a +2 bonus on Knowledge (geography), Knowledge (nature), and Knowledge (planes) checks to answer a question about the heavens.</p>
</>};
const _office = {title: "Office", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 100</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-office--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Office</th></tr><tr><th scope="row">Create</th><td colSpan={3}>3 Goods, 3 Labor (120 gp)</td></tr><tr><th id="misc-office-office-room-time">Time</th><td headers="misc-office-office-room-time">8 days</td><th id="misc-office-office-room-size">Size</th><td headers="misc-office-office-room-size">2-5 squares</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/storage">Storage</Link></td></tr></tbody></table></ScrollContainer></div><p>This simple room includes a door with a simple lock, a chair, and a large desk that has two drawers with simple locks. An Office affords its user privacy and a refuge from other activity in the building.</p>
</>};
const _pit = {title: "Pit", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 100</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-pit--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Pit</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Labor +1</td></tr><tr><th scope="row">Create</th><td colSpan={3}>1 Goods, 1 Labor (40 gp)</td></tr><tr><th id="misc-pit-pit-room-time">Time</th><td headers="misc-pit-pit-room-time">2 days</td><th id="misc-pit-pit-room-size">Size</th><td headers="misc-pit-pit-room-size">1-5 squares</td></tr></tbody></table></ScrollContainer></div><p>This is a place to dump things no longer needed. It can be used to contain refuse, dangerous waste, and piles of junk, or as a mass graveyard, communal latrine, or crude surface well. A typical pit is 5-15 feet deep with steep sides.</p>
</>};
const _printer = {title: "Printer", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 100</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-printer--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Printer</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Goods, Influence, or Labor +8</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Counts as <Link to="/eq-misc/masterwork_artisans_tools">masterwork artisan's tools</Link> for writing and printing skills</td></tr><tr><th scope="row">Create</th><td colSpan={3}>9 Goods, 2 Influence, 7 Labor (380 gp)</td></tr><tr><th id="misc-printer-printer-room-time">Time</th><td headers="misc-printer-printer-room-time">20 days</td><th id="misc-printer-printer-room-size">Size</th><td headers="misc-printer-printer-room-size">5-16 squares</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/scriptorium">Scriptorium</Link></td></tr></tbody></table></ScrollContainer></div><p>This specialized workshop contains a printing press, storage for paper, and drying racks for finished books and pamphlets. Up to three people can use the room at a time.</p>
</>};
const _reliquary = {title: "Reliquary", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 100</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-reliquary--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Reliquary</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Influence +5</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Bonus on Knowledge (religion) checks relating to its contents</td></tr><tr><th scope="row">Create</th><td colSpan={3}>4 Goods, 4 Labor, 1 Magic (260 gp)</td></tr><tr><th id="misc-reliquary-reliquary-room-time">Time</th><td headers="misc-reliquary-reliquary-room-time">12 days</td><th id="misc-reliquary-reliquary-room-size">Size</th><td headers="misc-reliquary-reliquary-room-size">1-4 squares</td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/vault">Vault</Link></td></tr></tbody></table></ScrollContainer></div><p>A Reliquary is built to securely store religious artifacts, and dedicated to a specific deity or philosophy. It contains shelves to house the items, special display cases to protect them, and sometimes chairs and tables to allow study. It's secured by a strong wooden door or grating with a good lock. Unlike a Vault, a Reliquary is intended to allow people to observe its contents. When stocked with relics appropriate to the chosen deity or philosophy, the room grants a +1 bonus on Knowledge (religion) checks relating to the history, powers, and purpose of those relics.</p>
</>};
const _sanctum = {title: "Sanctum", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 101</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-sanctum--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Sanctum</th></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Bonus on one Will save</td></tr><tr><th scope="row">Create</th><td colSpan={3}>2 Goods, 1 Influence, 1 Labor, 1 Magic (190 gp)</td></tr><tr><th id="misc-sanctum-sanctum-room-time">Time</th><td headers="misc-sanctum-sanctum-room-time">6 days</td><th id="misc-sanctum-sanctum-room-size">Size</th><td headers="misc-sanctum-sanctum-room-size">1-4 squares</td></tr></tbody></table></ScrollContainer></div><p>This is a basic room with simple and pleasing decorations, clean lines, and a calming environment perfect for meditation, prayer, and solitude. A person who spends at least 4 hours in a Sanctum doing nothing other than praying or meditating gains a +1 bonus on Will saves. This bonus ends once the person leaves the settlement or after the first time she attempts a Will save.</p>
</>};
const _sauna = {title: "Sauna", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 101</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-sauna--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Sauna</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Influence +3</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Bonus on disease and negative level recovery saves</td></tr><tr><th scope="row">Create</th><td colSpan={3}>3 Goods, 3 Labor (120 gp)</td></tr><tr><th id="misc-sauna-sauna-room-time">Time</th><td headers="misc-sauna-sauna-room-time">8 days</td><th id="misc-sauna-sauna-room-size">Size</th><td headers="misc-sauna-sauna-room-size">2-5 squares</td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/bath">Bath</Link></td></tr></tbody></table></ScrollContainer></div><p>This simple room contains benches, a central source of heat, stones, and a container of water with a ladle to help produce steam. Using a Sauna for an hour grants a person a +1 bonus on saving throws to overcome ongoing diseases (but not on saves to resist contracting diseases) and a +1 bonus on saving throws to recover from negative levels. This bonus goes away after 24 hours.</p>
</>};
const _scriptorium = {title: "Scriptorium", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 101</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-scriptorium--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Scriptorium</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Goods, Influence, Labor, or Magic +5</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Counts as masterwork artisan's tools for writing skills</td></tr><tr><th scope="row">Create</th><td colSpan={3}>7 Goods, 2 Influence, 6 Labor (320 gp)</td></tr><tr><th id="misc-scriptorium-scriptorium-room-time">Time</th><td headers="misc-scriptorium-scriptorium-room-time">16 days</td><th id="misc-scriptorium-scriptorium-room-size">Size</th><td headers="misc-scriptorium-scriptorium-room-size">5-16 squares</td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/printer">Printer</Link></td></tr></tbody></table></ScrollContainer></div><p>A Scriptorium is where scribes do their work. It contains chairs and writing desks, as well as ink, paper, and other supplies needed to create or copy written works. Up to three people can use the room at a time for scribing scrolls or using Craft (calligraphy) or Profession (scribe).</p>
</>};
const _scrying_room = {title: "Scrying Room", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 101</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-scrying_room--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Scrying Room</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Influence +2</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Increases the DC of scrying effects</td></tr><tr><th scope="row">Create</th><td colSpan={3}>6 Goods, 1 Influence, 5 Labor, 3 Magic (550 gp)</td></tr><tr><th id="misc-scrying_room-scrying-room-room-time">Time</th><td headers="misc-scrying_room-scrying-room-room-time">16 days</td><th id="misc-scrying_room-scrying-room-room-size">Size</th><td headers="misc-scrying_room-scrying-room-room-size">4-16 squares</td></tr></tbody></table></ScrollContainer></div><p>A Scrying Room is built to be a quiet place for scrying, seances, and similar divinations. It contains a table, chairs, and either a pool of water (at no additional cost) or a suitable focus object for a <Link to="/spell/scrying">scrying</Link> spell (for an additional 1,000 gp). A caster using <em>scrying,</em> <Link to="/spell/locate_creature">locate creature</Link>, or a similar targeted divination from here increases the spell's DC by 1.</p>
</>};
const _secret_room = {title: "Secret Room", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 101</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-secret_room--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Secret Room</th></tr><tr><th scope="row">Create</th><td colSpan={3}>5 Goods, 6 Labor (220 gp)</td></tr><tr><th id="misc-secret_room-secret-room-room-time">Time</th><td headers="misc-secret_room-secret-room-room-time">16 days</td><th id="misc-secret_room-secret-room-room-size">Size</th><td headers="misc-secret_room-secret-room-room-size">6-10 squares</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/vault">Vault</Link></td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/escape_route">Escape Route</Link></td></tr></tbody></table></ScrollContainer></div><p>This is either a room or a passage connecting two rooms in the building. The access to this space is controlled by a <Link to="/rule/doors">secret door</Link> (DC 20). A passage can have secret doors at both ends or a normal door at one end and a secret door at the other. If it's a room, it is typically used to hide someone or something you don't want discovered. If it's a passage, it's typically used for clandestine travel within the building, often for the purpose of smuggling or spying. For every 500 extra gp you spend, you can improve one secret door in the building to a well-hidden secret door (DC 30).</p>
</>};
const _sewer_access = {title: "Sewer Access", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 101</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-sewer_access--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Sewer Access</th></tr><tr><th scope="row">Create</th><td colSpan={3}>2 Goods, 1 Influence, 2 Labor (110 gp)</td></tr><tr><th id="misc-sewer_access-sewer-access-room-time">Time</th><td headers="misc-sewer_access-sewer-access-room-time">4 days</td><th id="misc-sewer_access-sewer-access-room-size">Size</th><td headers="misc-sewer_access-sewer-access-room-size">4-6 squares</td></tr></tbody></table></ScrollContainer></div><p>A Sewer Access might be a tunnel or room, or something as simple as a sturdy trap door in the floor. Constructing it requires a settlement with a sewer or septic system, and connects some part of the building to that system. You can use this as an Escape Route, but only to get to and from the sewer. The door to the sewer is a strong wooden door with a good lock. For an additional 500 gp, it has an iron door instead. If you have a Lavatory and Sewer Access, you may automatically connect the Lavatory to the sewer with indoor plumbing.</p>
</>};
const _sewing_room = {title: "Sewing Room", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 101</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-sewing_room--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Sewing Room</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Goods, or Influence +10</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Counts as <Link to="/eq-misc/masterwork_artisans_tools">masterwork artisan's tools</Link> for one Craft skill</td></tr><tr><th scope="row">Create</th><td colSpan={3}>8 Goods, 7 Labor (300 gp)</td></tr><tr><th id="misc-sewing_room-sewing-room-room-time">Time</th><td headers="misc-sewing_room-sewing-room-room-time">16 days</td><th id="misc-sewing_room-sewing-room-room-size">Size</th><td headers="misc-sewing_room-sewing-room-room-size">6-12 squares</td></tr></tbody></table></ScrollContainer></div><p>A Sewing Room is used for designing heraldry and making cloth garments, tapestries, blankets, carpets, linens, and other textiles. It contains a loom; a spinning wheel; tapestry frames; shelves for fabric; worktables; and tools for spinning, weaving, and sewing. Up to three people can use the room at once; gaining the benefit of masterwork artisan's tools for skills such as Craft (cloth) and Craft (clothing), and for related skills such as Craft (baskets).</p>
</>};
const _shack = {title: "Shack", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 101</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-shack--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Shack</th></tr><tr><th scope="row">Create</th><td colSpan={3}>3 Goods, 2 Labor (100 gp)</td></tr><tr><th id="misc-shack-shack-room-time">Time</th><td headers="misc-shack-shack-room-time">3 days</td><th id="misc-shack-shack-room-size">Size</th><td headers="misc-shack-shack-room-size">2-4 squares</td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/lavatory">Lavatory</Link>, <Link to="/misc/storage">Storage</Link></td></tr></tbody></table></ScrollContainer></div><p>This no-frills wooden shelter contains a simple table, pallet bed, and stool. One person can build a shack with simple tools and basic materials. For an additional 1 point of Goods and 2 points of Labor, you can construct a brick or stone hut instead of a wooden shack.</p>
</>};
const _sitting_room = {title: "Sitting Room", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 102</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-sitting_room--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Sitting Room</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>Influence +4</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Bonus on Bluff, Diplomacy, Intimidate, Knowledge (local), and Perform checks</td></tr><tr><th scope="row">Create</th><td colSpan={3}>12 Goods, 12 Labor (480 gp)</td></tr><tr><th id="misc-sitting_room-sitting-room-room-time">Time</th><td headers="misc-sitting_room-sitting-room-room-time">24 days</td><th id="misc-sitting_room-sitting-room-room-size">Size</th><td headers="misc-sitting_room-sitting-room-room-size">6-10 squares</td></tr></tbody></table></ScrollContainer></div><p>This is a room used for meeting and entertaining in a relaxed, comfortable setting, such as a den, dining room, or smoking room. It has furnishings appropriate to its function (chairs for a sitting room, table and chairs for a dining room, and so on). By spending an hour conversing with guests in a social manner, the host of the room gains a +1 bonus on Bluff, Diplomacy, Intimidate, Knowledge (local), and Perform checks to influence or learn about those guests for the next 24 hours.</p>
</>};
const _sports_field = {title: "Sports Field", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 102</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-sports_field--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Sports Field</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Influence +10</td></tr><tr><th scope="row">Create</th><td colSpan={3}>17 Goods, 3 Influence, 18 Labor (790 gp)</td></tr><tr><th id="misc-sports_field-sports-field-room-time">Time</th><td headers="misc-sports_field-sports-field-room-time">20 days</td><th id="misc-sports_field-sports-field-room-size">Size</th><td headers="misc-sports_field-sports-field-room-size">40-100 squares</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/battle_ring">Battle Ring</Link></td></tr></tbody></table></ScrollContainer></div><p>This outdoor area is used for jousting, athletics, war games, and other sports. A Sports Field contains a playing area, seats for spectators and equipment for one type of game.</p>
</>};
const _stall = {title: "Stall", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 102</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-stall--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Stall</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Goods, or Labor +8</td></tr><tr><th scope="row">Create</th><td colSpan={3}>6 Goods, 1 Influence, 5 Labor (250 gp)</td></tr><tr><th id="misc-stall-stall-room-time">Time</th><td headers="misc-stall-stall-room-time">16 days</td><th id="misc-stall-stall-room-size">Size</th><td headers="misc-stall-stall-room-size">6-16 squares</td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/habitat">Habitat</Link></td></tr></tbody></table></ScrollContainer></div><p>A Stall is a place to keep 1-2 horses or other Large domestic animals. It contains gates, feed troughs, feed, and straw.</p>
</>};
const _statue = {title: "Statue", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 102</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-statue--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Statue</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Influence +1</td></tr><tr><th scope="row">Create</th><td colSpan={3}>1 Goods, 2 Labor (60 gp)</td></tr><tr><th id="misc-statue-statue-room-time">Time</th><td headers="misc-statue-statue-room-time">2 days</td><th id="misc-statue-statue-room-size">Size</th><td headers="misc-statue-statue-room-size">1-9 squares</td></tr></tbody></table></ScrollContainer></div><p>This area contains a statue, fountain, or other large decoration. If it has religious significance, it might serve as a shrine. The listed cost and time are only to install a completed wood, bronze, or stone feature - they don't include the cost and time to create the feature in the first place, but it must be installed to produce Earnings.</p>
</>};
const _storage = {title: "Storage", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 102</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-storage--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Storage</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp +2</td></tr><tr><th scope="row">Create</th><td colSpan={3}>3 Goods, 3 Labor (120 gp)</td></tr><tr><th id="misc-storage-storage-room-time">Time</th><td headers="misc-storage-storage-room-time">8 days</td><th id="misc-storage-storage-room-size">Size</th><td headers="misc-storage-storage-room-size">4-8 squares</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/false_front">False Front</Link>, <Link to="/misc/shack">Shack</Link></td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/office">Office</Link>, <Link to="/misc/vault">Vault</Link></td></tr></tbody></table></ScrollContainer></div><p>Storage is any room used to store objects, keeping them out of the way for later use. Most Warehouses are just multiple Storage rooms built into a single building. A low-cost shop may allow its customers to browse items in the Storage area. A door to a Storage room includes an average lock.</p>
</>};
const _storefront = {title: "Storefront", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 103</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-storefront--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Storefront</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>Capital +5 (of a type the building already generates)</td></tr><tr><th scope="row">Create</th><td colSpan={3}>5 Goods, 1 Influence, 3 Labor (190 gp)</td></tr><tr><th id="misc-storefront-storefront-room-time">Time</th><td headers="misc-storefront-storefront-room-time">12 days</td><th id="misc-storefront-storefront-room-size">Size</th><td headers="misc-storefront-storefront-room-size">2-4 squares</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/false_front">False Front</Link></td></tr></tbody></table></ScrollContainer></div><p>This is a simple storefront, holding a wooden counter, a ledger, shelves, and other necessities to run a business.</p>
</>};
const _summmoning_chamber = {title: "Summmoning Chamber", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 103</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-summmoning_chamber--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Summmoning Chamber</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>Magic +3</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Bonus on Charisma, Diplomacy, Intimidate, and Knowledge (planes) checks</td></tr><tr><th scope="row">Create</th><td colSpan={3}>11 Goods, 4 Influence, 10 Labor, 5 Magic (1,040 gp)</td></tr><tr><th id="misc-summmoning_chamber-summmoning-chamber-room-time">Time</th><td headers="misc-summmoning_chamber-summmoning-chamber-room-time">28 days</td><th id="misc-summmoning_chamber-summmoning-chamber-room-size">Size</th><td headers="misc-summmoning_chamber-summmoning-chamber-room-size">6-16 squares</td></tr></tbody></table></ScrollContainer></div><p>A Summoning Chamber is used to perform magical rituals to conjure outsiders. It contains a well-drawn, nearly complete magic circle on the floor - which you can complete with just a few chalk marks - suitable for use with <Link to="/spell/magic_circle">magic circle</Link> spells, <Link to="/spell/planar_binding">planar binding</Link> spells, and so on. A person who uses a Summoning Chamber gains a +3 bonus on Knowledge (planes) checks relating to a creature being called or summoned, and a +3 bonus on Charisma checks, Diplomacy checks, and Intimidate checks to influence or bargain with a creature called or summoned here.</p>
</>};
const _throne_room = {title: "Throne Room", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 103</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-throne_room--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Throne Room</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>Influence +15</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Bonus on Bluff, Diplomacy, and Intimidate, Knowledge (local), and Perform checks</td></tr><tr><th scope="row">Create</th><td colSpan={3}>25 Goods, 5 Influence, 25 Labor, 5 Magic (1,650 gp)</td></tr><tr><th id="misc-throne_room-throne-room-room-time">Time</th><td headers="misc-throne_room-throne-room-room-time">40 days</td><th id="misc-throne_room-throne-room-room-size">Size</th><td headers="misc-throne_room-throne-room-room-size">40-80 squares</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/ceremonial_room">Ceremonial Room</Link>, <Link to="/misc/common_room">Common Room</Link></td></tr></tbody></table></ScrollContainer></div><p>A Throne Room is used to receive important visitors, such as nobles. The room contains a throne, various decorations, and a few seats for visitors. By spending an hour conversing with visitors, the host of the room gains a +1 bonus on Bluff, Diplomacy, Intimidate, Knowledge (local), and Perform checks to influence or learn about those guests for the next 24 hours.</p>
</>};
const _tollbooth = {title: "Tollbooth", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 103</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-tollbooth--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Tollbooth</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Goods +4</td></tr><tr><th scope="row">Create</th><td colSpan={3}>2 Goods, 1 Influence, 2 Labor (110 gp)</td></tr><tr><th id="misc-tollbooth-tollbooth-room-time">Time</th><td headers="misc-tollbooth-tollbooth-room-time">6 days</td><th id="misc-tollbooth-tollbooth-room-size">Size</th><td headers="misc-tollbooth-tollbooth-room-size">1-5 squares</td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/guard_post">Guard Post</Link></td></tr></tbody></table></ScrollContainer></div><p>A Tollbooth is a small shelter designed to restrict movement on a road or bridge so the owner can collect fees from travelers. If this room is built near a settlement, it requires 1 point of Influence per day to maintain - or might be illegal, depending on the settlement.</p>
</>};
const _torture_chamber = {title: "Torture Chamber", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 103</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-torture_chamber--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Torture Chamber</th></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Bonus on Intimidate checks</td></tr><tr><th scope="row">Create</th><td colSpan={3}>7 Goods, 3 Influence, 5 Labor (330 gp)</td></tr><tr><th id="misc-torture_chamber-torture-chamber-room-time">Time</th><td headers="misc-torture_chamber-torture-chamber-room-time">20 days</td><th id="misc-torture_chamber-torture-chamber-room-size">Size</th><td headers="misc-torture_chamber-torture-chamber-room-size">6-16 squares</td></tr></tbody></table></ScrollContainer></div><p>This grim room is used for interrogation as well as torture and other morally questionable acts. It contains structures to bind humanoids and various implements designed to inflict pain and discomfort. Interrogators in this room gain a +3 bonus on Intimidate checks to influence captives.</p>
</>};
const _trap = {title: "Trap", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 103</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-trap--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Trap</th></tr><tr><th scope="row">Benefit</th><td colSpan={3}>See below</td></tr><tr><th scope="row">Create</th><td colSpan={3}>See below</td></tr><tr><th id="misc-trap-trap-room-time">Time</th><td headers="misc-trap-trap-room-time">See below</td><th id="misc-trap-trap-room-size">Size</th><td headers="misc-trap-trap-room-size">1-4 squares</td></tr></tbody></table></ScrollContainer></div><p>This can be a specific room in a building or an augmentation to another room. A Trap room might appear empty or it might be decorated to appear to be harmless in order to lure a target into the trap. Trap costs are explained in <Link to="/rule/designing_a_trap">Designing a Trap</Link>, and building one uses the <Link to="/skill/craft">crafting rules</Link>, though you may spend Goods and Labor toward this cost.</p>
</>};
const _trophy_room = {title: "Trophy Room", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 103</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-trophy_room--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Trophy Room</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Influence +5</td></tr><tr><th scope="row">Create</th><td colSpan={3}>6 Goods, 1 Influence, 5 Labor (250 gp)</td></tr><tr><th id="misc-trophy_room-trophy-room-room-time">Time</th><td headers="misc-trophy_room-trophy-room-room-time">16 days</td><th id="misc-trophy_room-trophy-room-room-size">Size</th><td headers="misc-trophy_room-trophy-room-room-size">4-20 squares</td></tr></tbody></table></ScrollContainer></div><p>This is a place to hang trophies from your adventures, such as stuffed monster heads, rare paintings, strange statues, and old magic items you don't need any more. Because of the display cases and clutter, this room isn't much good for anything else, though it might include chairs or benches to allow people to sit while they admire your treasures. If you want to use your trophies to decorate another room instead of placing them in their own room, construct the Furnishings augmentation instead. A Museum makes money by charging visitors or sponsors to view items like these.</p>
</>};
const _vault = {title: "Vault", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 103</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-vault--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Vault</th></tr><tr><th scope="row">Create</th><td colSpan={3}>8 Goods, 7 Labor (300 gp)</td></tr><tr><th id="misc-vault-vault-room-time">Time</th><td headers="misc-vault-vault-room-time">16 days</td><th id="misc-vault-vault-room-size">Size</th><td headers="misc-vault-vault-room-size">4-8 squares</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/reliquary">Reliquary</Link>, <Link to="/misc/storage">Storage</Link></td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/secret_room">Secret Room</Link></td></tr></tbody></table></ScrollContainer></div><p>This is a secure room designed to keep out intruders. The access to this space is controlled by an iron door with a good lock. If you upgrade this room to a Secret Room, the door retains its material and lock and also becomes a secret door.</p>
</>};
const _war_room = {title: "War Room", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 103</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-war_room--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">War Room</th></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Bonus on mass combat and skill checks while scheming</td></tr><tr><th scope="row">Create</th><td colSpan={3}>8 Goods, 7 Labor (300 gp)</td></tr><tr><th id="misc-war_room-war-room-room-time">Time</th><td headers="misc-war_room-war-room-room-time">16 days</td><th id="misc-war_room-war-room-room-size">Size</th><td headers="misc-war_room-war-room-room-size">4-12 squares</td></tr></tbody></table></ScrollContainer></div><p>This is a room for planning military maneuvers, plotting grand heists, or providing briefings. It contains a large central table with plenty of chairs, maps, and figures to simulate troops and structures. When it's used for planning a battle, your army gains a +2 bonus on attack rolls and morale checks for their next battle within 24 hours. To grant the army this bonus, the army's commander must be present at the planning meeting for the battle or you must have some way of communicating these instructions to the commander. When used to <Link to="/rule/scheme_for_an_upcoming_adventure">scheme for an upcoming adventure</Link>, a War Room allows you to use the scheme's planning bonus on two skill checks instead of one.</p>
</>};
const _workstation = {title: "Workstation", topLink: ["Rooms","rule/rooms"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 103</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-workstation--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Workstation</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Goods, or Influence +8</td></tr><tr><th scope="row">Benefit</th><td colSpan={3}>Counts as <Link to="/eq-misc/masterwork_artisans_tools">masterwork artisan's tools</Link> for one Craft or Profession skill</td></tr><tr><th scope="row">Create</th><td colSpan={3}>8 Goods, 7 Labor (300 gp)</td></tr><tr><th id="misc-workstation-workstation-room-time">Time</th><td headers="misc-workstation-workstation-room-time">16 days</td><th id="misc-workstation-workstation-room-size">Size</th><td headers="misc-workstation-workstation-room-size">8-16 squares</td></tr></tbody></table></ScrollContainer></div><p>This includes a table, chair, and appropriate masterwork artisan's tools for one Craft or Profession skill you choose when you build the room. For example, if intended for a carpenter, it has clamps, saws, nails, hammers, and a sturdy worktable. Up to three people can use the room at a time.</p>
</>};
const _acolyte = {title: "Acolyte", topLink: ["Teams","rule/teams"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 104</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-acolyte--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Acolyte</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Influence, or Magic +4</td></tr><tr><th scope="row">Create</th><td colSpan={3}>2 Goods, 2 Influence, 2 Labor, 3 Magic (440 gp)</td></tr><tr><th id="misc-acolyte-acolyte-team-time">Time</th><td headers="misc-acolyte-acolyte-team-time">3 days</td><th id="misc-acolyte-acolyte-team-size">Size</th><td headers="misc-acolyte-acolyte-team-size">1 person</td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/priest">Priest</Link>, <Link to="/misc/sage">Sage</Link></td></tr></tbody></table></ScrollContainer></div><p>An Acolyte is a newly trained divine spellcaster, sufficient for tending to the sick or advising on religious matters. An Acolyte is typically a 1st-level adept, cleric, druid, or oracle, with light armor (or no armor if an adept) and a weapon appropriate to her faith.</p>
</>};
const _apprentice = {title: "Apprentice", topLink: ["Teams","rule/teams"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 104</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-apprentice--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Apprentice</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Influence, or Magic +4</td></tr><tr><th scope="row">Create</th><td colSpan={3}>2 Goods, 2 Influence, 1 Labor, 4 Magic (520 gp)</td></tr><tr><th id="misc-apprentice-apprentice-team-time">Time</th><td headers="misc-apprentice-apprentice-team-time">3 days</td><th id="misc-apprentice-apprentice-team-size">Size</th><td headers="misc-apprentice-apprentice-team-size">1 person</td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/mage">Mage</Link>, <Link to="/misc/sage">Sage</Link></td></tr></tbody></table></ScrollContainer></div><p>An Apprentice is a newly-trained arcane spellcaster, sufficient for helping with magical rituals, generating flashy effects, or advising on magical matters. An Apprentice is typically a 1st-level bard, sorcerer, summoner, witch, or wizard.</p>
</>};
const _archers = {title: "Archers", topLink: ["Teams","rule/teams"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 104</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-archers--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Archers</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Influence, or Labor +6</td></tr><tr><th scope="row">Create</th><td colSpan={3}>4 Goods, 3 Influence, 7 Labor (310 gp)</td></tr><tr><th id="misc-archers-archers-team-time">Time</th><td headers="misc-archers-archers-team-time">4 days</td><th id="misc-archers-archers-team-size">Size</th><td headers="misc-archers-archers-team-size">5 people</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/soldiers">Soldiers</Link></td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/elite_archers">Elite Archers</Link></td></tr></tbody></table></ScrollContainer></div><p>Archers are soldiers trained to use projectile weapons. They are typically 1st-level warriors, each with scale mail, a longbow, a buckler, and a longsword.</p>
<blockquote>
<p><em>This can also be upgraded into <Link to="/rule/wilderness_teams">Skirmishers</Link>.</em></p>
</blockquote>
</>};
const _bureaucrats = {title: "Bureaucrats", topLink: ["Teams","rule/teams"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 104</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-bureaucrats--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Bureaucrats</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Influence +4</td></tr><tr><th scope="row">Create</th><td colSpan={3}>2 Goods, 4 Influence, 2 Labor (200 gp)</td></tr><tr><th id="misc-bureaucrats-bureaucrats-team-time">Time</th><td headers="misc-bureaucrats-bureaucrats-team-time">2 days</td><th id="misc-bureaucrats-bureaucrats-team-size">Size</th><td headers="misc-bureaucrats-bureaucrats-team-size">5 people</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/scofflaws">Scofflaws</Link>, <Link to="/misc/soldiers">Soldiers</Link></td></tr></tbody></table></ScrollContainer></div><p>Bureaucrats interface with local government and deal with annoying paperwork related to running a business or organization. This type of team could include accountants, diplomats, lawyers, and scribes. A typical bureaucrat is a 1st-, 2nd-, or 3rd-level expert with ranks in Bluff, Diplomacy, Intimidate, Knowledge (local), Linguistics, and Profession (barrister, clerk, or scribe).</p>
</>};
const _cavalry = {title: "Cavalry", topLink: ["Teams","rule/teams"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 104</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-cavalry--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Cavalry</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Influence, or Labor +7</td></tr><tr><th scope="row">Create</th><td colSpan={3}>8 Goods, 8 Influence (410 gp)</td></tr><tr><th id="misc-cavalry-cavalry-team-time">Time</th><td headers="misc-cavalry-cavalry-team-time">6 days</td><th id="misc-cavalry-cavalry-team-size">Size</th><td headers="misc-cavalry-cavalry-team-size">5 people</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/elite_soldiers">Elite Soldiers</Link>, <Link to="/misc/soldiers">Soldiers</Link></td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/cavalry_archers">Cavalry Archers</Link></td></tr></tbody></table></ScrollContainer></div><p>Cavalry are soldiers trained to ride mounts in combat. They are typically 3rd-level warriors, each equipped with breastplate armor, a longsword, a lance, and a heavy steel shield and riding a combat-trained light horse.</p>
</>};
const _cavalry_archers = {title: "Cavalry Archers", topLink: ["Teams","rule/teams"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 104</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-cavalry_archers--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Cavalry Archers</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Influence, or Labor +8</td></tr><tr><th scope="row">Create</th><td colSpan={3}>9 Goods, 3 Influence, 10 Labor (470 gp)</td></tr><tr><th id="misc-cavalry_archers-cavalry-archers-team-time">Time</th><td headers="misc-cavalry_archers-cavalry-archers-team-time">7 days</td><th id="misc-cavalry_archers-cavalry-archers-team-size">Size</th><td headers="misc-cavalry_archers-cavalry-archers-team-size">5 people</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/cavalry">Cavalry</Link>, <Link to="/misc/elite_archers">Elite Archers</Link></td></tr></tbody></table></ScrollContainer></div><p>Cavalry Archers are soldiers trained to ride mounts and use ranged weapons in combat before closing to melee. They are typically 3rd-level warriors, each equipped with breastplate armor, a short bow, a longsword, a lance, and a heavy steel shield and riding a combat-trained light horse.</p>
</>};
const _craftspeople = {title: "Craftspeople", topLink: ["Teams","rule/teams"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 105</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-craftspeople--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Craftspeople</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Goods, or Labor +4</td></tr><tr><th scope="row">Create</th><td colSpan={3}>3 Goods, 2 Influence, 4 Labor (200 gp)</td></tr><tr><th id="misc-craftspeople-craftspeople-team-time">Time</th><td headers="misc-craftspeople-craftspeople-team-time">2 days</td><th id="misc-craftspeople-craftspeople-team-size">Size</th><td headers="misc-craftspeople-craftspeople-team-size">3 people</td></tr></tbody></table></ScrollContainer></div><p>Craftspeople are trained in a particular Craft or Profession skill and make a living using that skill. Examples of this team are alchemists, carpenters, leatherworkers, masons, and smiths. A typical carpenter is a 4th-level expert with 4 ranks each in Climb, Craft (carpentry), Diplomacy, and Knowledge (engineering and local). Craftspeople in other fields have a similar skill arrangement.</p>
</>};
const _cutpurses = {title: "Cutpurses", topLink: ["Teams","rule/teams"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 105</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-cutpurses--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Cutpurses</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Goods, or Labor +3</td></tr><tr><th scope="row">Create</th><td colSpan={3}>3 Influence, 1 Labor (110 gp)</td></tr><tr><th id="misc-cutpurses-cutpurses-team-time">Time</th><td headers="misc-cutpurses-cutpurses-team-time">1 days</td><th id="misc-cutpurses-cutpurses-team-size">Size</th><td headers="misc-cutpurses-cutpurses-team-size">5 people</td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/robbers">Robbers</Link></td></tr></tbody></table></ScrollContainer></div><p>Cutpurses are minor thieves (often youths) who earn money from petty crimes such as pickpocketing or stealing items from market stalls. They are typically 1st-level commoners, experts, or rogues with 1 rank in Perception, Sleight of Hand, and Stealth.</p>
</>};
const _drivers = {title: "Drivers", topLink: ["Teams","rule/teams"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 105</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-drivers--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Drivers</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Goods, or Labor +2</td></tr><tr><th scope="row">Create</th><td colSpan={3}>2 Goods, 1 Influence, 1 Labor (90 gp)</td></tr><tr><th id="misc-drivers-drivers-team-time">Time</th><td headers="misc-drivers-drivers-team-time">0 days</td><th id="misc-drivers-drivers-team-size">Size</th><td headers="misc-drivers-drivers-team-size">1 person</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/laborers">Laborers</Link></td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/lackeys">Lackeys</Link></td></tr></tbody></table></ScrollContainer></div><p>Drivers are trained to handle and move common animals' managing ox-drawn carts, herding cattle, or training riding horses. A Driver is typically 1st-level expert with ranks in Handle Animal, Knowledge (geography), Profession (driver), Ride, and Survival.</p>
</>};
const _elite_archers = {title: "Elite Archers", topLink: ["Teams","rule/teams"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 105</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-elite_archers--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Elite Archers</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Influence, or Labor +7</td></tr><tr><th scope="row">Create</th><td colSpan={3}>5 Goods, 4 Influence, 8 Labor (380 gp)</td></tr><tr><th id="misc-elite_archers-elite-archers-team-time">Time</th><td headers="misc-elite_archers-elite-archers-team-time">6 days</td><th id="misc-elite_archers-elite-archers-team-size">Size</th><td headers="misc-elite_archers-elite-archers-team-size">5 people</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/archers">Archers</Link>, <Link to="/misc/elite_soldiers">Elite Soldiers</Link></td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/cavalry_archers">Cavalry Archers</Link></td></tr></tbody></table></ScrollContainer></div><p>An Elite Archers team consists of 3rd-level warriors, each with scale mail, a longbow, a buckler, and a longsword.</p>
</>};
const _elite_guards = {title: "Elite Guards", topLink: ["Teams","rule/teams"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 105</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-elite_guards--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Elite Guards</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Influence, or Labor +4</td></tr><tr><th scope="row">Create</th><td colSpan={3}>3 Goods, 1 Influence, 4 Labor (170 gp)</td></tr><tr><th id="misc-elite_guards-elite-guards-team-time">Time</th><td headers="misc-elite_guards-elite-guards-team-time">2 days</td><th id="misc-elite_guards-elite-guards-team-size">Size</th><td headers="misc-elite_guards-elite-guards-team-size">5 people</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/guards">Guards</Link></td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/elite_soldiers">Elite Soldiers</Link></td></tr></tbody></table></ScrollContainer></div><p>Like Guards, this team defends a location but doesn't take on an active role. An Elite Guards team consists of 3rd-level warriors, each wearing a chain shirt or banded mail and using a heavy steel shield and shortspear, a guisarme, or a halberd.</p>
</>};
const _elite_soldiers = {title: "Elite Soldiers", topLink: ["Teams","rule/teams"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 105</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-elite_soldiers--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Elite Soldiers</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Influence, or Labor +6</td></tr><tr><th scope="row">Create</th><td colSpan={3}>5 Goods, 3 Influence, 7 Labor (330 gp)</td></tr><tr><th id="misc-elite_soldiers-elite-soldiers-team-time">Time</th><td headers="misc-elite_soldiers-elite-soldiers-team-time">5 days</td><th id="misc-elite_soldiers-elite-soldiers-team-size">Size</th><td headers="misc-elite_soldiers-elite-soldiers-team-size">5 people</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/elite_guards">Elite Guards</Link>, <Link to="/misc/soldiers">Soldiers</Link></td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/cavalry">Cavalry</Link>, <Link to="/misc/elite_archers">Elite Archers</Link></td></tr></tbody></table></ScrollContainer></div><p>Like Soldiers, this team will take aggressive action and seek out your enemies to kill them. An Elite Soldiers team consists of 3rd-level warriors, each wearing a chain shirt or banded mail and using a guisarme, a halberd, or a heavy steel shield and a shortspear.</p>
</>};
const _guards = {title: "Guards", topLink: ["Teams","rule/teams"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 106</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-guards--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Guards</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Influence, or Labor +2</td></tr><tr><th scope="row">Create</th><td colSpan={3}>2 Goods, 3 Labor (100 gp)</td></tr><tr><th id="misc-guards-guards-team-time">Time</th><td headers="misc-guards-guards-team-time">1 days</td><th id="misc-guards-guards-team-size">Size</th><td headers="misc-guards-guards-team-size">5 people</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/laborers">Laborers</Link></td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/elite_guards">Elite Guards</Link>, <Link to="/misc/soldiers">Soldiers</Link></td></tr></tbody></table></ScrollContainer></div><p>Guards train to watch over a person or location and defend that person or location if necessary. Unlike soldiers, guards are not expected to seek out trouble or take an aggressive role. Their purpose is to intimidate casual threats into leaving and defend against active threats. Each guard is typically a 1st-level warrior wearing scale mail and using either a glaive or a heavy wooden shield and shortspear.</p>
<blockquote>
<p><em>This can also be upgraded into <Link to="/rule/wilderness_teams">Skirmishers</Link>.</em></p>
</blockquote>
</>};
const _laborers = {title: "Laborers", topLink: ["Teams","rule/teams"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 106</Link></p>
<h3 id="misc-laborers-laborers">Laborers</h3>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-laborers--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Laborers</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Labor +2</td></tr><tr><th scope="row">Create</th><td colSpan={3}>1 Influence, 2 Labor (70 gp)</td></tr><tr><th id="misc-laborers-laborers-team-time">Time</th><td headers="misc-laborers-laborers-team-time">0 days</td><th id="misc-laborers-laborers-team-size">Size</th><td headers="misc-laborers-laborers-team-size">5 people</td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/drivers">Drivers</Link>, <Link to="/misc/guards">Guards</Link>, <Link to="/misc/lackeys">Lackeys</Link>, <Link to="/misc/sailors">Sailors</Link>, <Link to="/misc/scofflaws">Scofflaws</Link></td></tr></tbody></table></ScrollContainer></div><p>Laborers are unskilled workers who carry out basic orders. In most cases, their work is physical labor, though you may recruit laborers for specialized tasks such as begging for your thieves' guild, being professional mourners for your cult, or filling out the cast of a theater performance. They are typically 1st-level commoners with no ranks in Craft or Profession.</p>
<blockquote>
<p><em>This can also be upgraded into <Link to="/rule/wilderness_teams">Stewards</Link>.</em></p>
</blockquote>
</>};
const _lackeys = {title: "Lackeys", topLink: ["Teams","rule/teams"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 106</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-lackeys--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Lackeys</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>Influence or Labor +2</td></tr><tr><th scope="row">Create</th><td colSpan={3}>1 Goods, 2 Influence, 2 Labor (120 gp)</td></tr><tr><th id="misc-lackeys-lackeys-team-time">Time</th><td headers="misc-lackeys-lackeys-team-time">1 days</td><th id="misc-lackeys-lackeys-team-size">Size</th><td headers="misc-lackeys-lackeys-team-size">5 people</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/drivers">Drivers</Link>, <Link to="/misc/laborers">Laborers</Link></td></tr></tbody></table></ScrollContainer></div><p>Lackeys wait on you hand and foot and take care of common domestic and traveling issues; their ranks include butlers, valets, maids, heralds, footmen, ladies-in-waiting, and similar service personnel. Skilled Lackeys anticipate your needs and coordinate with your other employees as well as those of your guests or host. A typical Lackey is a 1st-level commoner or expert with ranks in a subset of Diplomacy, Disguise, Intimidate, Knowledge (local), Knowledge (nobility), Linguistics, Perception, and Sense Motive.</p>
</>};
const _mage = {title: "Mage", topLink: ["Teams","rule/teams"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 106</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-mage--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Mage</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Influence, or Magic +7</td></tr><tr><th scope="row">Create</th><td colSpan={3}>3 Goods, 2 Influence, 2 Labor, 8 Magic (960 gp)</td></tr><tr><th id="misc-mage-mage-team-time">Time</th><td headers="misc-mage-mage-team-time">7 days</td><th id="misc-mage-mage-team-size">Size</th><td headers="misc-mage-mage-team-size">1 person</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/apprentice">Apprentice</Link></td></tr></tbody></table></ScrollContainer></div><p>A Mage is a skilled but not especially remarkable arcane spellcaster, often a 3rd-level bard, sorcerer, summoner, witch, or wizard.</p>
</>};
const _priest = {title: "Priest", topLink: ["Teams","rule/teams"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 106</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-priest--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Priest</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Influence, or Magic +7</td></tr><tr><th scope="row">Create</th><td colSpan={3}>3 Goods, 3 Influence, 3 Labor, 6 Magic (810 gp)</td></tr><tr><th id="misc-priest-priest-team-time">Time</th><td headers="misc-priest-priest-team-time">7 days</td><th id="misc-priest-priest-team-size">Size</th><td headers="misc-priest-priest-team-size">1 person</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/acolyte">Acolyte</Link></td></tr></tbody></table></ScrollContainer></div><p>A Priest is a skilled but unremarkable divine spellcaster, typically a 3rd-level adept, cleric, druid, or oracle, with light armor (or no armor, if an adept) and a weapon appropriate to her faith.</p>
</>};
const _robbers = {title: "Robbers", topLink: ["Teams","rule/teams"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 106</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-robbers--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Robbers</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Goods, or Influence +4</td></tr><tr><th scope="row">Create</th><td colSpan={3}>1 Goods, 4 Influence, 3 Labor (200 gp)</td></tr><tr><th id="misc-robbers-robbers-team-time">Time</th><td headers="misc-robbers-robbers-team-time">3 days</td><th id="misc-robbers-robbers-team-size">Size</th><td headers="misc-robbers-robbers-team-size">5 people</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/cutpurses">Cutpurses</Link></td></tr></tbody></table></ScrollContainer></div><p>Robbers are expert thieves who commit burglary, robbery, and other violent crimes for profit. A typical robber is a 3rd-level expert or rogue with 3 ranks each in Climb, Disable Device, Intimidate, Perception, and Stealth.</p>
<blockquote>
<p><em>This can also be upgraded into <Link to="/rule/wilderness_teams">Skirmishers</Link>.</em></p>
</blockquote>
</>};
const _sage = {title: "Sage", topLink: ["Teams","rule/teams"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 106</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-sage--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Sage</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp or Influence +5</td></tr><tr><th scope="row">Create</th><td colSpan={3}>5 Goods, 2 Influence, 2 Labor (200 gp)</td></tr><tr><th id="misc-sage-sage-team-time">Time</th><td headers="misc-sage-sage-team-time">4 days</td><th id="misc-sage-sage-team-size">Size</th><td headers="misc-sage-sage-team-size">1 person</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/acolyte">Acolyte</Link>, <Link to="/misc/apprentice">Apprentice</Link></td></tr></tbody></table></ScrollContainer></div><p>A sage is a person with extensive knowledge in one or more related areas who can advise you about his areas of expertise. A typical sage is a 3rd-level expert with 3 ranks each in skills such as Appraise, Knowledge, Linguistics, Profession, and Spellcraft.</p>
</>};
const _sailors = {title: "Sailors", topLink: ["Teams","rule/teams"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 106</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-sailors--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Sailors</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Goods, or Labor +2</td></tr><tr><th scope="row">Create</th><td colSpan={3}>1 Goods, 1 Influence, 2 Labor (90 gp)</td></tr><tr><th id="misc-sailors-sailors-team-time">Time</th><td headers="misc-sailors-sailors-team-time">0 days</td><th id="misc-sailors-sailors-team-size">Size</th><td headers="misc-sailors-sailors-team-size">5 people</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/laborers">Laborers</Link></td></tr></tbody></table></ScrollContainer></div><p>Sailors know how to sail a ship, navigate while at sea, and defend the vessel against pirates and other hostile boarders. A typical sailor is a <Link to="/npc/old_sailor">2nd-level expert</Link> with 2 ranks each in Acrobatics, Climb, Perception, Profession (sailor), Survival, and Swim.</p>
</>};
const _scofflaws = {title: "Scofflaws", topLink: ["Teams","rule/teams"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 106</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-scofflaws--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Scofflaws</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Goods, or Influence +2</td></tr><tr><th scope="row">Create</th><td colSpan={3}>3 Influence, 2 Labor (130 gp)</td></tr><tr><th id="misc-scofflaws-scofflaws-team-time">Time</th><td headers="misc-scofflaws-scofflaws-team-time">1 days</td><th id="misc-scofflaws-scofflaws-team-size">Size</th><td headers="misc-scofflaws-scofflaws-team-size">5 people</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/laborers">Laborers</Link></td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/bureaucrats">Bureaucrats</Link></td></tr></tbody></table></ScrollContainer></div><p>Scofflaws provide illegal but consensual services such as gambling, moonshining, or underground fighting. Note that other kinds of teams might perform these services (you could recruit a Laborers team to work as prostitutes or a Guards team to run an arena, for example), but this kind of team is skilled at these tasks.</p>
</>};
const _soldiers = {title: "Soldiers", topLink: ["Teams","rule/teams"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 106</Link></p>
<div className="sideNoteWrap startAlign noIcon"><ScrollContainer id="misc-soldiers--table-0"><table><tbody><tr><th colSpan={4} scope="col" className="title">Soldiers</th></tr><tr><th scope="row">Earnings</th><td colSpan={3}>gp, Influence, or Labor +5</td></tr><tr><th scope="row">Create</th><td colSpan={3}>3 Goods, 2 Influence, 5 Labor (220 gp)</td></tr><tr><th id="misc-soldiers-soldiers-team-time">Time</th><td headers="misc-soldiers-soldiers-team-time">2 days</td><th id="misc-soldiers-soldiers-team-size">Size</th><td headers="misc-soldiers-soldiers-team-size">5 people</td></tr><tr><th scope="row">Upgrades From</th><td colSpan={3}><Link to="/misc/guards">Guards</Link></td></tr><tr><th scope="row">Upgrades To</th><td colSpan={3}><Link to="/misc/archers">Archers</Link>, <Link to="/misc/bureaucrats">Bureaucrats</Link>, <Link to="/misc/cavalry">Cavalry</Link>, <Link to="/misc/elite_soldiers">Elite Soldiers</Link></td></tr></tbody></table></ScrollContainer></div><p>Soldiers are trained in combat and have the means and will to kill your enemies. Unlike Guards, Soldiers actively engage in fighting on behest of a leader (although you can make Soldiers act as Guards). Depending on the nature of your organization, they might be enforcers rather than military-style soldiers. They are typically 1st-level warriors, each with scale mail, a longsword, a heavy wooden shield, and javelins.</p>
<blockquote>
<p><em>This can also be upgraded into <Link to="/rule/wilderness_teams">Skirmishers</Link>.</em></p>
</blockquote>
</>};
const _fractions_and_rounding = {title: "Fractions and Rounding", topLink: ["Common Terms","rule/common_terms"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 12</Link></p>
<p><strong className="hl">Rounding:</strong> Occasionally the rules ask you to round a result or value. Unless otherwise stated, <strong>always round down.</strong> For example, if you are asked to take half of 7, the result would be 3. One-third of 5 would be 1. One-fifth of 3 would be 0.</p>
</>};
const _shield_bash = {title: "Shield Bash", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 11-12</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 152</Link></p>
<p>Shield bashes can be done with <Link to="/eq-armor/light_shield">light shields</Link> or <Link to="/eq-armor/heavy_shield">heavy shields</Link>.</p>
<p><strong>Shield Bash Attacks:</strong> You can bash an opponent with a light or heavy shield. Used this way, a shield is a martial bludgeoning weapon. For the purpose of penalties on attack rolls, treat a light shield as a light weapon, and treat a heavy shield as a one-handed weapon. If you use your shield as a weapon, you lose its AC bonus until your next turn. An enhancement bonus on a shield does not improve the effectiveness of a shield bash made with it, but the shield can be made into a magic weapon in its own right.</p>
</>};
const _magic_items_by_category = {hasJL:true,title: "Magic Items by Category", topLink: ["Magic Items","rule/magic_items"], jsx: <><div className="jumpList" id="misc-magic_items_by_category-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="misc-magic_items_by_category-minor-items">Minor Items</InnerLink></li><li><InnerLink toTop to="misc-magic_items_by_category-medium-items">Medium Items</InnerLink></li><li><InnerLink toTop to="misc-magic_items_by_category-major-items">Major Items</InnerLink></li></ul></div><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 460</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 360</Link></p>
<p>The distinction between "minor", "medium" and "major" magic items is blurry, and never outright stated in any core book. But there are inferences we can make from the tables given in these books. In the <Link to="/rule/magic_items">Magic Items</Link> section of the <em>PRPG Core Rulebook,</em> the tables overlap heavily, making it possible to roll a "minor" item that's worth much more than a "medium" item; for example, it's possible to roll for a minor <Link to="/rule/magic_armor">Magic Armor</Link> and end up with an <em>improved slick, improved shadow elven chain</em> worth 35,150 gp! <em>Ultimate Equipment</em> was published later and included a <Link to="/rule/treasure_generator">Treasure Generator</Link> that ironed out most of these outliers, and it is what informs most of the information below.</p>
<h2 id="misc-magic_items_by_category-minor-items" data-hash-target>Minor Items</h2>
<ul>
<li><strong className="hl">Armor and shields:</strong> No more than a +2 bonus (including +1 special abilities), maxing out at about 5,000 gp.</li>
<li><strong className="hl">Weapons:</strong> No more than a +2 bonus (including +1 special abilities), maxing out at about 5,000 gp.</li>
<li><strong className="hl">Potions:</strong> Spell level 1 or 2, caster level 1.</li>
<li><strong className="hl">Rings:</strong> No more than 7,000 gp.</li>
<li><strong className="hl">Rods:</strong> Rods are <strong>never</strong> minor.</li>
<li><strong className="hl">Scrolls:</strong> Spell level 1-3, caster level 1-5.</li>
<li><strong className="hl">Staves:</strong> <strong>No</strong> staff is consider minor.</li>
<li><strong className="hl">Wands:</strong> Spell level 0-2, caster level 1-3.</li>
<li><strong className="hl">Wondrous Items:</strong> No more than 7,900 gp; includes items that give up to a +2 stat or armor bonus, pearls of power up to 2nd level, most bags of holding, and necklaces of fireballs up to Type V.</li>
</ul>
<h2 id="misc-magic_items_by_category-medium-items" data-hash-target>Medium Items</h2>
<ul>
<li><strong className="hl">Armor and shields:</strong> No more than a +4 bonus (including +1 or +2 special abilities), maxing out at about 16,000 gp.</li>
<li><strong className="hl">Weapons:</strong> No more than a +4 bonus (including +1 or +2 special abilities), maxing out at about 23,000 gp.</li>
<li><strong className="hl">Potions:</strong> Spell level 1-3, caster level 1-3.</li>
<li><strong className="hl">Rings:</strong> No more than 27,000 gp.</li>
<li><strong className="hl">Rods:</strong> No more than 19,000 gp, including <em>merciful</em> metamagic rods, lesser metamagic rods up to +3, and normal metmagic rods up to +2.</li>
<li><strong className="hl">Scrolls:</strong> Spell level 2-5, caster level 3-9.</li>
<li><strong className="hl">Staves:</strong> No more than 28,000 gp.</li>
<li><strong className="hl">Wands:</strong> Spell level 2 or 3, caster level 3-5.</li>
<li><strong className="hl">Wondrous Items:</strong> Between 8,000 gp and 27,500 gp; includes items that give a stat or armor bonus of +3, +4 or +5, items that give a +2 or +3 natural armor bonus, +1 manuals, brooms and small carpets of flying, type IV bags of holding, portable holes, pearls of power up to 5th level, and most ioun stones.</li>
</ul>
<h2 id="misc-magic_items_by_category-major-items" data-hash-target>Major Items</h2>
<ul>
<li><strong className="hl">Armor and shields:</strong> At least a +3 bonus, minimum 9,000 gp.</li>
<li><strong className="hl">Weapons:</strong> At least a +3 bonus, minimum 8,000 gp.</li>
<li><strong className="hl">Potions:</strong> Spell level 2 or 3, caster level 3-5.</li>
<li><strong className="hl">Rings:</strong> Minimum 28,000 gp.</li>
<li><strong className="hl">Rods:</strong> Minimum 20,000 gp, including all greater metamagic rods, normal metamagic rods +2 and up, and lesser rods +4 and up.</li>
<li><strong className="hl">Scrolls:</strong> Spell level 4 or more, caster level at least 7th.</li>
<li><strong className="hl">Staves:</strong> Minimum 28,000 gp.</li>
<li><strong className="hl">Wands:</strong> Spell level 3 or 4, caster level 5-7.</li>
<li><strong className="hl">Wondrous Items:</strong> Minimum 28,000 gp; includes items that give +4 and higher natural armor bonuses, items that give +6 and higher stat or armor bonuses, pearls of power 6th level and up, manuals of +2 and higher, all crystal balls, large flying carpets, and golem manuals.</li>
</ul>
</>};
const _natural_20_natural_1 = {title: "Natural 20, Natural 1", topLink: ["Combat","rule/combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 178, 180, 190, 199, 566</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 22</Link></p>
<p><strong className="hl">Attacks:</strong> A natural 1 (the d20 comes up 1) on an <Link to="/rule/attack_roll">attack roll</Link> is always a miss. A natural 20 (the d20 comes up 20) is always a hit. A natural 20 is also a threat - a possible critical hit (see <Link to="/rule/attack">the attack action</Link>).</p>
<p><strong className="hl">Combat Maneuvers:</strong> Rolling a natural 20 while attempting a <Link to="/rule/combat_maneuver">combat maneuver</Link> is always a success (except when attempting to escape from bonds), while rolling a natural 1 is always a failure.</p>
<p><strong className="hl">Saving Throws:</strong> A natural 1 (the d20 comes up 1) on a <Link to="/rule/saving_throw">saving throw</Link> is always a failure (and may cause damage to exposed items; see <Link to="/rule/saving_throw">Items Surviving after a Saving Throw</Link>). A natural 20 (the d20 comes up 20) is always a success.</p>
<p><strong className="hl">Dying:</strong> A natural 20 is always a success when rolling a Constitution check to become <Link to="/rule/stable_characters_and_recovery">stable or conscious</Link>.</p>
<p><strong className="hl"><Link to="/rule/broken_and_fragile">Broken and fragile</Link></strong> <strong className="hl">weapons and armor:</strong> A <em>fragile</em> weapon gains the <em>broken</em> condition if the wielder rolls a natural 1 on an attack roll with the weapon. If a <em>fragile</em> weapon is already <em>broken,</em> the roll of a natural 1 destroys it instead. If an attacker hits a creature wearing <em>fragile</em> armor with an attack roll of a natural 20 and confirms the critical hit (even if the creature is immune to critical hits), the armor gains the <em>broken</em> condition. If already <em>broken,</em> the armor is destroyed instead. <em>Fragile</em> armor is not broken or destroyed by critical threats that are not generated by natural 20s.</p>
</>};
const _ability_score = {title: "Ability Score", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-ability_score-ability-score">Ability Score</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 11</Link></p>
<p>Each <Link to="/misc/creature">creature</Link> has six ability scores: Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma. These scores represent a creature's most basic attributes. The higher the score, the more raw potential and talent your character possesses.</p>
</>};
const _action = {title: "Action", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-action-action">Action</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 11</Link></p>
<p>An action is a discrete measurement of time during a round of combat. Using abilities, casting spells, and making attacks all require actions to perform. There are a number of <Link to="/rule/actions_in_combat">different kinds of actions</Link>, such as a standard action, move action, swift action, free action, and full-round action.</p>
</>};
const _alignment = {title: "Alignment", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-alignment-alignment">Alignment</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 11</Link></p>
<p>Alignment represents a creature's basic moral and ethical attitude. Alignment has two components: one describing whether a <Link to="/misc/creature">creature</Link> is lawful, neutral, or chaotic, followed by another that describes whether a character is good, neutral, or evil. Alignments are usually abbreviated using the first letter of each alignment component, such as LN for lawful neutral or CE for chaotic evil. Creatures that are neutral in both components are denoted by a single "N."</p>
</>};
const _armor_class = {title: "Armor Class (AC)", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-armor_class-armor-class-ac">Armor Class (AC)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 11</Link></p>
<p>All creatures in the game have an Armor Class. This score represents how hard it is to hit a <Link to="/misc/creature">creature</Link> in combat. As with other scores, higher is better.</p>
</>};
const _base_attack_bonus = {title: "Base Attack Bonus (BAB)", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-base_attack_bonus-base-attack-bonus-bab">Base Attack Bonus (BAB)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 11</Link></p>
<p>Each <Link to="/misc/creature">creature</Link> has a base attack bonus and it represents its skill in combat. As a character gains <Link to="/misc/level">levels</Link> or <Link to="/misc/hit_dice">Hit Dice</Link>, his base attack bonus improves. When a creature's base attack bonus reaches +6, +11, or +16, he receives an additional attack in combat when he takes a full-attack action (which is one type of <Link to="/rule/full_round_actions">full-round action</Link>).</p>
</>};
const _bonus = {title: "Bonus", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-bonus-bonus">Bonus</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 11</Link></p>
<p>Bonuses are numerical values that are added to <Link to="/misc/check">checks</Link> and statistical scores. Most bonuses have a type, and as a general rule, bonuses of the same type are not cumulative (do not <Link to="/misc/stack">"stack"</Link>) - only the greater bonus granted applies.</p>
</>};
const _caster_level = {title: "Caster Level (CL)", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-caster_level-caster-level-cl">Caster Level (CL)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 11</Link></p>
<p>Caster level represents a creature's power and ability when casting spells. When a <Link to="/misc/creature">creature</Link> casts a spell, it often contains a number of variables, such as range or damage, that are based on the caster's level.</p>
</>};
const _class = {title: "Class", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-class-class">Class</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 11</Link></p>
<p><Link to="/main/classes">Classes</Link> represent chosen professions taken by characters and some other creatures. Classes give a host of bonuses and allow characters to take actions that they otherwise could not, such as casting spells or changing shape. As a <Link to="/misc/creature">creature</Link> gains <Link to="/misc/level">levels</Link> in a given class, it gains new, more powerful abilities. Most PCs gain levels in the core classes or prestige classes, since these are the most powerful. Most NPCs gain levels in NPC classes, which are less powerful.</p>
</>};
const _check = {title: "Check", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-check-check">Check</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 11</Link></p>
<p>A check is a d20 roll which may or may not be modified by another value. The most common types are attack rolls, skill checks, ability checks, and <Link to="/misc/saving_throw">saving throws</Link>.</p>
</>};
const _combat_maneuver = {title: "Combat Maneuver", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-combat_maneuver-combat-maneuver">Combat Maneuver</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 11</Link></p>
<p>This is <Link to="/rule/combat_maneuvers">an action taken in combat</Link> that does not directly cause harm to your opponent, such as attempting to trip him, disarm him, or grapple with him.</p>
</>};
const _combat_maneuver_bonus = {title: "Combat Maneuver Bonus (CMB)", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-combat_maneuver_bonus-combat-maneuver-bonus-cmb">Combat Maneuver Bonus (CMB)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 11</Link></p>
<p>This value represents how skilled a <Link to="/misc/creature">creature</Link> is at performing a <Link to="/misc/combat_maneuver">combat maneuver</Link>. When attempting to perform a combat maneuver, this value is added to the character's d20 roll.</p>
</>};
const _combat_maneuver_defense = {title: "Combat Maneuver Defense (CMD)", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-combat_maneuver_defense-combat-maneuver-defense-cmd">Combat Maneuver Defense (CMD)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 11</Link></p>
<p>This score represents how hard it is to perform a <Link to="/misc/combat_maneuver">combat maneuver</Link> against this <Link to="/misc/creature">creature</Link>. A creature's CMD is used as the <Link to="/misc/difficulty_class">difficulty class</Link> when performing a maneuver against that creature.</p>
</>};
const _concentration_check = {title: "Concentration Check", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-concentration_check-concentration-check">Concentration Check</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 11</Link></p>
<p>When a <Link to="/misc/creature">creature</Link> is casting a spell, but is disrupted during the casting, he must make a <Link to="/rule/concentration">concentration check</Link> or fail to cast the spell.</p>
</>};
const _creature = {title: "Creature", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-creature-creature">Creature</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 11</Link></p>
<p>A creature is an active participant in the story or world. This includes PCs, NPCs, and monsters.</p>
</>};
const _damage_reduction = {title: "Damage Reduction (DR)", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-damage_reduction-damage-reduction-dr">Damage Reduction (DR)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 12</Link></p>
<p>Creatures that are resistant to harm typically have damage reduction. This amount is subtracted from any damage dealt to them from a physical source. Most types of DR can be bypassed by certain types of weapons. This is denoted by a number followed by the type, such as "10/cold iron." Some types of DR apply to all physical attacks. Such DR is denoted with a dash instead of a type, e.g. "5/-."</p>
</>};
const _difficulty_class = {title: "Difficulty Class (DC)", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-difficulty_class-difficulty-class-dc">Difficulty Class (DC)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 12</Link></p>
<p>Whenever a <Link to="/misc/creature">creature</Link> attempts to perform an action whose success is not guaranteed, he must make some sort of <Link to="/misc/check">check</Link> (usually a skill check). The result of that check must meet or exceed the Difficulty Class of the action that the creature is attempting to perform in order for the action to be successful.</p>
</>};
const _extraordinary_abilities = {title: "Extraordinary Abilities (Ex)", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-extraordinary_abilities-extraordinary-abilities-ex">Extraordinary Abilities (Ex)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 12</Link></p>
<p>Extraordinary abilities are unusual abilities that do not rely on magic to function.</p>
</>};
const _experience_points = {title: "Experience Points (XP)", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-experience_points-experience-points-xp">Experience Points (XP)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 12</Link></p>
<p>As a character overcomes challenges, defeats monsters, and completes quests, he gains experience points. These points accumulate over time, and when they reach or surpass a specific value, the character gains a <Link to="/misc/level">level</Link>.</p>
</>};
const _feat = {title: "Feat", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-feat-feat">Feat</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 12</Link></p>
<p>A feat is an ability a <Link to="/misc/creature">creature</Link> has mastered. Feats often allow creatures to circumvent rules or restrictions. Creatures receive a number of feats based off their <Link to="/misc/hit_dice">Hit Dice</Link>, but some classes and other abilities grant bonus feats.</p>
</>};
const _game_master = {title: "Game Master (GM)", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-game_master-game-master-gm">Game Master (GM)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 12</Link></p>
<p>A Game Master is the person who adjudicates the rules and controls all of the elements of the story and world that the players explore. A GM's duty is to provide a fair and fun game.</p>
</>};
const _hit_dice = {title: "Hit Dice (HD)", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-hit_dice-hit-dice-hd">Hit Dice (HD)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 12</Link></p>
<p>Hit Dice represent a creature's general level of power and skill. As a <Link to="/misc/creature">creature</Link> gains <Link to="/misc/level">levels</Link>, it gains additional Hit Dice. Monsters, on the other hand, gain racial Hit Dice, which represent the monster's general prowess and ability. Hit Dice are represented by the number the creature possesses followed by a type of die, such as "3d8." This value is used to determine a creature's total hit points. In this example, the creature has 3 Hit Dice. When rolling for this creature's hit points, you would roll a d8 three times and add the results together, along with other modifiers.</p>
</>};
const _hit_points = {title: "Hit Points (hp)", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-hit_points-hit-points-hp">Hit Points (hp)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 12</Link></p>
<p>Hit points are an abstraction signifying how robust and healthy a <Link to="/misc/creature">creature</Link> is at the current moment. To determine a creature's hit points, roll the dice indicated by its <Link to="/misc/hit_dice">Hit Dice</Link>. A creature gains maximum hit points if its first Hit Die roll is for a character class level. Creatures whose first Hit Die comes from an NPC class or from his race roll their first Hit Die normally. Wounds subtract hit points, while healing (both natural and magical) restores hit points. Some abilities and spells grant <Link to="/rule/temporary_hit_points">temporary hit points</Link> that disappear after a specific duration. When a creature's hit points drop below 0, it becomes <Link to="/misc/unconscious">unconscious</Link>. When a creature's hit points reach a negative total equal to its Constitution score, it dies.</p>
</>};
const _initiative = {title: "Initiative", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-initiative-initiative">Initiative</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 12</Link></p>
<p>Whenever combat begins, all <Link to="/misc/creature">creatures</Link> involved in the battle must make an initiative <Link to="/misc/check">check</Link> to determine the order in which creatures act during combat. The higher the result of the check, the earlier a creature gets to act.</p>
</>};
const _level = {title: "Level", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-level-level">Level</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 12</Link></p>
<p>A character's level represents his overall ability and power. There are three types of levels. Class level is the number of levels of a specific <Link to="/misc/class">class</Link> possessed by a character. Character level is the sum of all of the levels possessed by a character in all of his classes. In addition, spells have a level associated with them numbered from 0 to 9. This level indicates the general power of the spell. As a spellcaster gains levels, he learns to cast spells of a higher level.</p>
</>};
const _monster = {title: "Monster", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-monster-monster">Monster</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 12</Link></p>
<p>Monsters are <Link to="/misc/creature">creatures</Link> that rely on racial <Link to="/misc/hit_dice">Hit Dice</Link> instead of class <Link to="/misc/level">levels</Link> for their powers and abilities (although some possess class levels as well). PCs are usually not monsters.</p>
</>};
const _multiplying = {title: "Multiplying", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-multiplying-multiplying">Multiplying</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 12</Link></p>
<p>When you are asked to apply more than one multiplier to a roll, the multipliers are not multiplied by one another. Instead, you combine them into a single multiplier, with each extra multiple adding 1 less than its value to the first multiple. For example, if you are asked to apply a &times;2 multiplier twice, the result would be &times;3, not &times;4.</p>
</>};
const _non_player_character = {title: "Non-Player Character (NPC)", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-non_player_character-non-player-character-npc">Non-Player Character (NPC)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 12</Link></p>
<p>These are characters controlled by the <Link to="/misc/gm">GM</Link>.</p>
</>};
const _penalty = {title: "Penalty", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-penalty-penalty">Penalty</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 12</Link></p>
<p>Penalties are numerical values that are subtracted from a <Link to="/misc/check">check</Link> or statistical score. Penalties do not have a type and most penalties <Link to="/misc/stack">stack</Link> with one another.</p>
</>};
const _player_character = {title: "Player Character (Character, PC)", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-player_character-player-character-character-pc">Player Character (Character, PC)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 12</Link></p>
<p>These are the characters portrayed by the players.</p>
</>};
const _round = {title: "Round", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-round-round">Round</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 12</Link></p>
<p>Combat is measured in rounds. During an individual round, all <Link to="/misc/creature">creatures</Link> have a chance to take a turn to act, in order of <Link to="/misc/initiative">initiative</Link>. A round represents 6 seconds in the game world.</p>
</>};
const _rounding = {title: "Rounding", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-rounding-rounding">Rounding</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 12</Link></p>
<p>Occasionally the rules ask you to round a result or value. Unless otherwise stated, always round down. For example, if you are asked to take half of 7, the result would be 3.</p>
</>};
const _saving_throw = {title: "Saving Throw", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-saving_throw-saving-throw">Saving Throw</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 12</Link></p>
<p>When a <Link to="/misc/creature">creature</Link> is the subject of a dangerous spell or effect, it often receives a <Link to="/rule/saving_throws">saving throw</Link> to mitigate the damage or result. Saving throws are passive, meaning that a character does not need to take an action to make a saving throw - they are made automatically. There are three types of saving throws: Fortitude (used to resist poisons, diseases, and other bodily ailments), Reflex (used to avoid effects that target an entire area, such as fireball), and Will (used to resist mental attacks and spells).</p>
</>};
const _skill = {title: "Skill", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-skill-skill">Skill</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 12</Link></p>
<p>A <Link to="/main/skills">skill</Link> represents a creature's ability to perform an ordinary task, such as climb a wall, sneak down a hallway, or spot an intruder. The number of ranks possessed by a <Link to="/misc/creature">creature</Link> in a given skill represents its proficiency in that skill. As a creature gains <Link to="/misc/hit_dice">Hit Dice</Link>, it also gains additional skill ranks that can be added to its skills.</p>
</>};
const _spell = {title: "Spell", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-spell-spell">Spell</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 13</Link></p>
<p>Spells can perform a wide variety of tasks, from harming enemies to bringing the dead back to life. Spells specify what they can target, what their effects are, and how they can be resisted or negated.</p>
</>};
const _spell_like_abilities = {title: "Spell-Like Abilities (Sp)", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-spell_like_abilities-spell-like-abilities-sp">Spell-Like Abilities (Sp)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 13</Link></p>
<p>Spell-like abilities function just like spells, but are granted through a special racial ability or by a specific <Link to="/misc/class">class</Link> ability (as opposed to spells, which are gained by spellcasting classes as a character gains levels).</p>
</>};
const _spell_resistance = {title: "Spell Resistance (SR)", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-spell_resistance-spell-resistance-sr">Spell Resistance (SR)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 13</Link></p>
<p>Some <Link to="/misc/creature">creatures</Link> are resistant to magic and gain spell resistance. When a creature with spell resistance is targeted by a spell, the caster of the spell must make a caster level check to see if the spell affects the target. The DC of this check is equal to the target creature's SR (some spells do not allow SR checks).</p>
</>};
const _stacking = {title: "Stacking", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-stacking-stacking">Stacking</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 13</Link></p>
<p>Stacking refers to the act of adding together bonuses or penalties that apply to one particular check or statistic. Generally speaking, most <Link to="/misc/bonus">bonuses</Link> of the same type do not stack. Instead, only the highest bonus applies. Most <Link to="/misc/penalty">penalties</Link> do stack, meaning that their values are added together. Penalties and bonuses generally stack with one another, meaning that the penalties might negate or exceed part or all of the bonuses, and vice versa.</p>
</>};
const _supernatural_abilities = {title: "Supernatural Abilities (Su)", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-supernatural_abilities-supernatural-abilities-su">Supernatural Abilities (Su)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 13</Link></p>
<p>Supernatural abilities are magical attacks, defenses, and qualities. These abilities can be always active or they can require a specific action to utilize. The supernatural ability's description includes information on how it is used and its effects.</p>
</>};
const _turn = {title: "Turn", topLink: ["Common Terms","rule/common_terms"], jsx: <><h2 id="misc-turn-turn">Turn</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 13</Link></p>
<p>In a <Link to="/misc/round">round</Link>, a <Link to="/misc/creature">creature</Link> receives one turn, during which it can perform a wide variety of <Link to="/misc/action">actions</Link>. Generally in the course of one turn, a character can perform one standard action, one move action, one swift action, and a number of free actions. Less-common combinations of actions are permissible as well, see <Link to="/rule/actions_in_combat">Actions in Combat</Link> for more details.</p>
</>};
const _variant_aasimar_abilities = {title: "Variant Aasimar Abilities", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_angels">Blood of Angels pg. 18</Link><br/>Some aasimars are blessed or cursed with unusual abilities. GMs may customize their aasimar NPCs using the following chart, or allow their players to do so by rolling a d%. Players with a particular character concept in mind may consult their GM if they want to select a specific variant ability. The abilities presented here replace an aasimar's spell-like ability racial trait. Any abilities that grant spells or spell-like abilities are treated as having a caster level equal to the aasimar's character level.</p>
<ScrollContainer id="misc-variant_aasimar_abilities--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Abilities</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>You can channel 1d6 points of positive energy once per day as a supernatural ability.</td>
</tr>
<tr>
<td>2</td>
<td>3/day as a spell-like ability, you can lay hands on a creature and heal them of 1 point of damage (or deal 1 point of positive energy damage to an undead creature). Treat this as a 0-level spell that uses Charisma as spellcasting stat, and your character level as caster level.</td>
</tr>
<tr>
<td>3</td>
<td>As a move action, you can manifest or dismiss a halo around your head that sheds colored light as a torch.</td>
</tr>
<tr>
<td>4</td>
<td>Once per day, you can drink a flask of holy water to heal 1d6 hit points.</td>
</tr>
<tr>
<td>5</td>
<td>You gain a +4 racial bonus on Knowledge (religion) checks pertaining to a deity of your choice.</td>
</tr>
<tr>
<td>6</td>
<td>You possess taloned fingers that act as natural weapons and deal 1d4 points of damage.</td>
</tr>
<tr>
<td>7</td>
<td>You gain DR 2/evil.</td>
</tr>
<tr>
<td>8</td>
<td>You use your Charisma score instead of your Constitution score to determine how many rounds you can <Link to="/misc/hold_your_breath">hold your breath</Link>.</td>
</tr>
<tr>
<td>9</td>
<td>You gain an additional +2 racial bonus to your Strength score.</td>
</tr>
<tr>
<td>10</td>
<td>You can subsist entirely on honey and wine.</td>
</tr>
<tr>
<td>11</td>
<td>You can breathe both thin and stale air without ill effects, and you never suffer from <Link to="/rule/altitude_sickness">altitude sickness</Link>.</td>
</tr>
<tr>
<td>12</td>
<td>You have a natural swim speed of 20 feet.</td>
</tr>
<tr>
<td>13</td>
<td>You gain a +2 racial bonus on attack rolls made to confirm critical hits against evil outsiders.</td>
</tr>
<tr>
<td>14</td>
<td>You possess the <Link to="/umr/unnatural_aura">unnatural aura</Link> universal monster ability, except the DC to make animals come near you is equal to 10 + 1/2 your character level + your Charisma modifier.</td>
</tr>
<tr>
<td>15</td>
<td>Once per day, when you are at 0 hit points, you can take a full round of actions without losing a hit point and falling unconscious.</td>
</tr>
<tr>
<td>16</td>
<td>You display exceptional grace and easily keep your balance. You gain a +2 racial bonus on Acrobatics checks.</td>
</tr>
<tr>
<td>17</td>
<td>You can cast <Link to="/spell/spear_of_purity">spear of purity</Link> once per day as a spell-like ability.</td>
</tr>
<tr>
<td>18</td>
<td>You gain a +2 racial bonus on saving throws made against poison.</td>
</tr>
<tr>
<td>19</td>
<td>Once you've reached adulthood, you never appear to age, although you take aging penalties normally and die when it is your time.</td>
</tr>
<tr>
<td>20</td>
<td>You gain an additional +2 racial bonus to your Dexterity score.</td>
</tr>
<tr>
<td>21</td>
<td>You can manipulate any metal armor you wear, causing it to appear to be made of shining silver or gold. This illusion lasts only as long as you wear your armor.</td>
</tr>
<tr>
<td>22</td>
<td>You gain a +1 racial bonus on Will saves.</td>
</tr>
<tr>
<td>23</td>
<td>You can cast <Link to="/spell/create_water">create water</Link> three times per day as a spell-like ability.</td>
</tr>
<tr>
<td>24</td>
<td>You gain sonic resistance 5.</td>
</tr>
<tr>
<td>25</td>
<td>Once per day, you can exhibit a burst of speed, moving as if your base land speed were 50 feet for 1 round.</td>
</tr>
<tr>
<td>26</td>
<td>You gain a +2 dodge bonus to AC against attacks of opportunity made by creatures of the human subtype.</td>
</tr>
<tr>
<td>27</td>
<td>You have a knack for creating high-quality objects. You gain a +2 racial bonus on any one kind of Craft check.</td>
</tr>
<tr>
<td>28</td>
<td>Once per day, for 1 minute, you can understand and be understood by any creature as though using <Link to="/spell/tongues">tongues</Link>.</td>
</tr>
<tr>
<td>29</td>
<td>You gain a +2 racial bonus on initiative checks during the day.</td>
</tr>
<tr>
<td>30</td>
<td>Pick one weapon that normally deals lethal damage. You can deal nonlethal damage with that weapon without the usual -4 penalty on your attack rolls.</td>
</tr>
<tr>
<td>31</td>
<td>You gain a +2 racial bonus on saving throws against charm effects.</td>
</tr>
<tr>
<td>32</td>
<td>You can cast <Link to="/spell/shield_other">shield other</Link> once per day as a spell-like ability.</td>
</tr>
<tr>
<td>33</td>
<td>When coins or other small metal objects pass through your hands, they become perfectly clean and shiny again.</td>
</tr>
<tr>
<td>34</td>
<td>You gain a +2 dodge bonus to your AC against attacks of opportunity from evil outsiders or undead.</td>
</tr>
<tr>
<td>35</td>
<td>You can cast <Link to="/spell/aid">aid</Link> once per day as a spell-like ability.</td>
</tr>
<tr>
<td>36</td>
<td>Nonmagical insects never bite or sting you unless magically compelled to do so.</td>
</tr>
<tr>
<td>37</td>
<td>You gain a +2 racial bonus on checks made with any one Perform skill.</td>
</tr>
<tr>
<td>38</td>
<td>Once per day, you can generate a glowing aura that emanates in a 20-foot radius centered on you. Any creature within the aura that is at negative hit points stabilizes immediately. The aura lasts for 1 round.</td>
</tr>
<tr>
<td>39</td>
<td>You can mimic the sound of any animal perfectly.</td>
</tr>
<tr>
<td>40</td>
<td>You gain an additional +2 racial bonus to your Intelligence score.</td>
</tr>
<tr>
<td>41</td>
<td>Three times per day, you can sing for 10 minutes to put one willing creature to sleep. Any creature that falls asleep to the sound of your song is protected from <Link to="/spell/nightmare">nightmare</Link> and similar spells for the duration of its rest.</td>
</tr>
<tr>
<td>42</td>
<td>Whenever you successfully use the aid another action to help someone make a skill check, you grant a +3 bonus instead of +2.</td>
</tr>
<tr>
<td>43</td>
<td>You gain a +2 racial bonus on saving throws made against fear effects.</td>
</tr>
<tr>
<td>44</td>
<td>If you stand atop a grave and meditate for 10 minutes, you learn the name of whoever lies buried below.</td>
</tr>
<tr>
<td>45</td>
<td>You have cat-like ears that grant you a +2 racial bonus on hearing-based Perception checks.</td>
</tr>
<tr>
<td>46</td>
<td>Once per day, you can breathe frosty air in a 10-foot cone. This acts as a breath weapon that deals a number of points of cold damage equal to 1d4 + 1/2 your level, to a maximum of 1d4+5.</td>
</tr>
<tr>
<td>47</td>
<td>You feel sick to your stomach and take a -1 penalty on ability checks when within 30 feet of an evil outsider.</td>
</tr>
<tr>
<td>48</td>
<td>You can cast <Link to="/spell/weapon_of_awe">weapon of awe</Link> once per day as a spell-like ability.</td>
</tr>
<tr>
<td>49</td>
<td>You gain a +1 racial bonus on Reflex saves.</td>
</tr>
<tr>
<td>50</td>
<td>You gain an additional +2 racial bonus to your Wisdom score.</td>
</tr>
<tr>
<td>51</td>
<td>You can make fruit ripen with a touch.</td>
</tr>
<tr>
<td>52</td>
<td>You can understand any written material as though under the effects of <Link to="/spell/comprehend_languages">comprehend languages</Link>.</td>
</tr>
<tr>
<td>53</td>
<td>You gain a +2 racial bonus to your CMD.</td>
</tr>
<tr>
<td>54</td>
<td>You gain a +2 racial bonus on saving throws against spells and effects that would cause you to become dazzled.</td>
</tr>
<tr>
<td>55</td>
<td>You can cast <Link to="/spell/augury">augury</Link> once per day as a spell-like ability.</td>
</tr>
<tr>
<td>56</td>
<td>You can cast <Link to="/spell/zone_of_truth">zone of truth</Link> once per day as a spell-like ability.</td>
</tr>
<tr>
<td>57</td>
<td>You gain a +2 racial bonus on Heal checks.</td>
</tr>
<tr>
<td>58</td>
<td>Any creature that bites you must succeed at a DC 12 Fortitude save or become sickened for 1d4 rounds.</td>
</tr>
<tr>
<td>59</td>
<td>Any good creature you call via <Link to="/spell/summon_monster">summon monster</Link> remains for 3 rounds longer than usual.</td>
</tr>
<tr>
<td>60</td>
<td>You always know the current position of the sun.</td>
</tr>
<tr>
<td>61</td>
<td>You gain a +1 racial bonus on attack and damage rolls against evil outsiders.</td>
</tr>
<tr>
<td>62</td>
<td>You gain a +4 racial bonus on saving throws to remove any temporary negative levels you possess.</td>
</tr>
<tr>
<td>63</td>
<td>You have a strong and stable build. You gain a +2 racial bonus to CMD against bull rush and trip attempts.</td>
</tr>
<tr>
<td>64</td>
<td>You gain a +4 racial bonus on Intimidate checks made to demoralize foes.</td>
</tr>
<tr>
<td>65</td>
<td>Once per day as a full-round action, you can summon a silver holy symbol out of thin air. The holy symbol remains in existence for 1 hour or until you drop it.</td>
</tr>
<tr>
<td>66</td>
<td>You are immune to undead creatures' create spawn special ability.</td>
</tr>
<tr>
<td>67</td>
<td>You gain a +2 racial bonus on Sense Motive checks.</td>
</tr>
<tr>
<td>68</td>
<td>You can cast <Link to="/spell/whispering_wind">whispering wind</Link> once per day as a spell-like ability.</td>
</tr>
<tr>
<td>69</td>
<td>Your tears cure disease. You can cast <Link to="/spell/remove_disease">remove disease</Link> once per day as a spell-like ability.</td>
</tr>
<tr>
<td>70</td>
<td>You gain an additional +2 racial bonus to your Constitution score.</td>
</tr>
<tr>
<td>71</td>
<td>You gain sustenance from sunlight. Standing in direct sunlight for half an hour nourishes you as though you had just eaten a hearty meal. You still need to drink water.</td>
</tr>
<tr>
<td>72</td>
<td>You gain spell resistance equal to 10 + 1/2 your Hit Dice.</td>
</tr>
<tr>
<td>73</td>
<td>If your body is placed on consecrated ground and prayers to your deity are recited continuously for 24 hours, you return to life as if by a <Link to="/spell/raise_dead">raise dead</Link> spell. This ability works 1d4 times in your lifetime.</td>
</tr>
<tr>
<td>74</td>
<td>Your kiss invigorates others. Once per day, you can kiss a creature to change its condition from exhausted to fatigued, or from fatigued to normal.</td>
</tr>
<tr>
<td>75</td>
<td>You can sense when a creature is pregnant by standing within 10 feet of the creature.</td>
</tr>
<tr>
<td>76</td>
<td>You gain a +2 racial bonus on saving throws made against curses.</td>
</tr>
<tr>
<td>77</td>
<td>You gain a +2 racial bonus on Knowledge (planes) checks.</td>
</tr>
<tr>
<td>78</td>
<td>You are always comfortably warm. You gain a +4 racial bonus to resist environmental cold effects.</td>
</tr>
<tr>
<td>79</td>
<td>You always know the current position of the stars.</td>
</tr>
<tr>
<td>80</td>
<td>You gain fire resistance 5.</td>
</tr>
<tr>
<td>81</td>
<td>You heal double the normal amount of hit points while resting.</td>
</tr>
<tr>
<td>82</td>
<td>You can cast <Link to="/spell/mending">mending</Link> three times per day as a spell-like ability.</td>
</tr>
<tr>
<td>83</td>
<td>You feel energized and gain a +1 racial bonus on ability checks while you are within 30 feet of a good outsider.</td>
</tr>
<tr>
<td>84</td>
<td>You gain a +4 racial bonus to resist environmental heat effects.</td>
</tr>
<tr>
<td>85</td>
<td>When targeted by <Link to="/spell/lesser_restoration">lesser restoration</Link> or another spell or effect that cures temporary ability damage, you heal an extra +1 point of temporary ability damage.</td>
</tr>
<tr>
<td>86</td>
<td>You can cast <Link to="/spell/blessing_of_courage_and_life">blessing of courage and life</Link> once per day as a spell-like ability.</td>
</tr>
<tr>
<td>87</td>
<td>You gain a +2 racial bonus on Handle Animal and Ride checks.</td>
</tr>
<tr>
<td>88</td>
<td>Once per day as a move action, you can make a melee weapon you are wielding <Link to="/magic-enh/holy">holy</Link>. The enchantment lasts for 3 rounds or until you drop or give away your weapon.</td>
</tr>
<tr>
<td>89</td>
<td>You gain a +2 racial bonus on saving throws made against disease.</td>
</tr>
<tr>
<td>90</td>
<td>You gain an additional +2 racial bonus to your Charisma score.</td>
</tr>
<tr>
<td>91</td>
<td>If you die, your body can never be reanimated as an undead creature.</td>
</tr>
<tr>
<td>92</td>
<td>You gain a +1 racial bonus on Fortitude saves.</td>
</tr>
<tr>
<td>93</td>
<td>You can summon a <Link to="/monster/lantern_archon">lantern archon</Link> once per day as though by <Link to="/spell/summon_monster_iii">summon monster III</Link>.</td>
</tr>
<tr>
<td>94</td>
<td>You can speak to horses and other equine animals.</td>
</tr>
<tr>
<td>95</td>
<td>You gain a +2 racial bonus on Diplomacy checks.</td>
</tr>
<tr>
<td>96</td>
<td>You gain a +2 racial bonus on Use Magic Device checks.</td>
</tr>
<tr>
<td>97</td>
<td>You gain DR 2/magic.</td>
</tr>
<tr>
<td>98</td>
<td>You can cast <Link to="/spell/compassionate_ally">compassionate ally</Link> once per day as a spell-like ability.</td>
</tr>
<tr>
<td>99</td>
<td>You have a natural fly speed of 20 feet (poor).</td>
</tr>
<tr>
<td>100</td>
<td>Roll on this table twice, ignoring any further rolls of 100.</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _variant_tiefling_abilities = {title: "Variant Tiefling Abilities", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_fiends">Blood of Fiends pg. 16</Link><br/>Some tieflings are blessed or cursed with unusual abilities. GMs may customize their tiefling NPCs using the following chart, or allow their players to do so by rolling a d%. Players with a particular character concept in mind may consult their GM if they want to select a specific variant ability.</p>
<p>The abilities presented here replace a tiefling's spell-like ability racial trait. Any abilities that grant spells or spell-like abilities are treated as having a caster level equal to the tiefling's character level.</p>
<ScrollContainer id="misc-variant_tiefling_abilities--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Ability</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>You can animate a 1 HD skeleton, as per <Link to="/spell/animate_dead">animate dead</Link>, once per day as a spell-like ability.</td>
</tr>
<tr>
<td>2</td>
<td>You possess some type of extrasensory organ, granting you all-around vision.</td>
</tr>
<tr>
<td>3</td>
<td>You enjoy being cut. The first time each day you take slashing damage, you gain a +1 bonus on attack and damage rolls for the following round.</td>
</tr>
<tr>
<td>4</td>
<td>You can use <Link to="/spell/mage_hand">mage hand</Link> three times per day as a spell-like ability.</td>
</tr>
<tr>
<td>5</td>
<td>Inherited memories grant you a +2 racial bonus on one Knowledge skill of your choice.</td>
</tr>
<tr>
<td>6</td>
<td>You can <Link to="/spell/levitate">levitate</Link> yourself plus 10 pounds at will, as per the spell. This is a supernatural ability.</td>
</tr>
<tr>
<td>7</td>
<td>You can eat and gain nourishment from ash, cinders, dust, and sand.</td>
</tr>
<tr>
<td>8</td>
<td>You gain a +1 bonus on all attack and damage rolls against good-aligned outsiders.</td>
</tr>
<tr>
<td>9</td>
<td>You gain an additional +2 racial bonus to your Charisma score.</td>
</tr>
<tr>
<td>10</td>
<td>You possess a bite that is treated as a natural weapon and deals 1d4 points of damage.</td>
</tr>
<tr>
<td>11</td>
<td>Once per day, you can exhibit a burst of speed, moving as if your base land speed were 50 feet for one move action.</td>
</tr>
<tr>
<td>12</td>
<td>You do not need to sleep. You are not immune to sleep effects.</td>
</tr>
<tr>
<td>13</td>
<td>You gain a +2 bonus on saving throws made against disease.</td>
</tr>
<tr>
<td>14</td>
<td>Your base land speed increases by +5 feet.</td>
</tr>
<tr>
<td>15</td>
<td>You possess a fiendishly cunning tongue, granting you a +2 racial bonus on all Diplomacy checks.</td>
</tr>
<tr>
<td>16</td>
<td>You have oversized limbs, allowing you to use Large weapons without penalty.</td>
</tr>
<tr>
<td>17</td>
<td>You possess claws that are treated as natural weapons and deal 1d4 points of damage.</td>
</tr>
<tr>
<td>18</td>
<td>You gain DR 2/bludgeoning.</td>
</tr>
<tr>
<td>19</td>
<td>You gain a Swim speed of 30 feet.</td>
</tr>
<tr>
<td>20</td>
<td>You gain a +2 racial bonus on combat maneuver checks.</td>
</tr>
<tr>
<td>21</td>
<td>You possess fiendish luck. Once per day, you can reroll one die roll. You must take the result of this second roll.</td>
</tr>
<tr>
<td>22</td>
<td>You can use <Link to="/spell/detect_evil">detect evil</Link>, as per the spell, three times per day.</td>
</tr>
<tr>
<td>23</td>
<td>You never need to drink to survive.</td>
</tr>
<tr>
<td>24</td>
<td>Once per day, you can produce a sharp barb from your body. This barb is removable and is treated as a dagger.</td>
</tr>
<tr>
<td>25</td>
<td>You gain acid resistance 5.</td>
</tr>
<tr>
<td>26</td>
<td>Your body produces intense, searing heat. Any creature that grapples you takes 1d4 points of fire damage per round.</td>
</tr>
<tr>
<td>27</td>
<td>You can speak two additional <Link to="/misc/languages">languages</Link> spoken by extraplanar beings.</td>
</tr>
<tr>
<td>28</td>
<td>Any evil creature you call via summon monster remains for 3 rounds longer than usual.</td>
</tr>
<tr>
<td>29</td>
<td>You gain a +1 bonus on all Reflex saving throws.</td>
</tr>
<tr>
<td>30</td>
<td>You can alter your shadow to make it appear as that of any creature or object of your size or smaller.</td>
</tr>
<tr>
<td>31</td>
<td>You can burrow through dirt, sand, and loose gravel at a rate of 5 feet per round.</td>
</tr>
<tr>
<td>32</td>
<td>You can sense weakness, granting you a +1 bonus on all rolls to confirm critical hits.</td>
</tr>
<tr>
<td>33</td>
<td>You gain DR 2/silver.</td>
</tr>
<tr>
<td>34</td>
<td>You do not lose consciousness until you are reduced to -5 hit points.</td>
</tr>
<tr>
<td>35</td>
<td>You possess long limbs and a powerful grip, features that grant you a +2 racial bonus on all Climb checks.</td>
</tr>
<tr>
<td>36</td>
<td>You can communicate telepathically with any sentient creature with which you are in contact.</td>
</tr>
<tr>
<td>37</td>
<td>Once per day, you can use <Link to="/spell/death_knell">death knell</Link> as a spell-like ability.</td>
</tr>
<tr>
<td>38</td>
<td>At will, you can spend a full-round action concentrating to receive the benefits of tremorsense 60 feet for 1 round.</td>
</tr>
<tr>
<td>39</td>
<td>Once per day, you can move at double your normal speed for 1 round.</td>
</tr>
<tr>
<td>40</td>
<td>As a full-round action, you can bleed and collect 5 sp worth of precious blood per day.</td>
</tr>
<tr>
<td>41</td>
<td>You possess spell resistance equal to 10 + 1/2 your Hit Dice.</td>
</tr>
<tr>
<td>42</td>
<td>The spell <Link to="/spell/animate_dead">animate dead</Link> can return you to life as per the spell <Link to="/spell/raise_dead">raise dead</Link> 1d4 times.</td>
</tr>
<tr>
<td>43</td>
<td>Your fiendish sorcery ability treats your Charisma score as if it were 3 points higher instead of 2.</td>
</tr>
<tr>
<td>44</td>
<td>You are unusually short, granting you all the standard traits of a Small creature.</td>
</tr>
<tr>
<td>45</td>
<td>Your features are subtly malleable, granting you a +2 racial bonus on all Disguise checks.</td>
</tr>
<tr>
<td>46</td>
<td>You gain an additional +2 racial bonus to your Intelligence score.</td>
</tr>
<tr>
<td>47</td>
<td>You can use <Link to="/spell/curse_water">curse water</Link> three times per day as a spell-like ability.</td>
</tr>
<tr>
<td>48</td>
<td>You are invisible to all unintelligent undead. This is a supernatural ability.</td>
</tr>
<tr>
<td>49</td>
<td>You are healed by both positive and negative channeled energy.</td>
</tr>
<tr>
<td>50</td>
<td>Your skin is unnaturally tough, granting you a +1 natural bonus to your AC.</td>
</tr>
<tr>
<td>51</td>
<td>You can speak to all birds.</td>
</tr>
<tr>
<td>52</td>
<td>You gain a +2 bonus on saving throws against poison.</td>
</tr>
<tr>
<td>53</td>
<td>You possess the scent special ability.</td>
</tr>
<tr>
<td>54</td>
<td>You gain DR 2/piercing.</td>
</tr>
<tr>
<td>55</td>
<td>You are unnaturally sly, granting you a +2 racial bonus on all Sleight of Hands checks.</td>
</tr>
<tr>
<td>56</td>
<td>Once per day, you can spit acid. This glob deals 1d4 points of acid damage and has a range increment of 5 feet.</td>
</tr>
<tr>
<td>57</td>
<td>Your body exudes painfully freezing cold. Any creature that grapples you takes 1d4 points of cold damage per round.</td>
</tr>
<tr>
<td>58</td>
<td>You heal yourself of double the normal amount of damage by resting.</td>
</tr>
<tr>
<td>59</td>
<td>You gain a +1 bonus on all Will saving throws.</td>
</tr>
<tr>
<td>60</td>
<td>You gain a +2 bonus on initiative checks at night.</td>
</tr>
<tr>
<td>61</td>
<td>You can manipulate any armor, gauntlets, or shield you wield, causing them to grow spikes. These spikes last only as long as you wear your armor.</td>
</tr>
<tr>
<td>62</td>
<td>You can use <Link to="/spell/deathwatch">deathwatch</Link> three times per day as a spell-like ability.</td>
</tr>
<tr>
<td>63</td>
<td>You have some manner of inhuman sensory organ. You gain a +2 bonus on saving throws against all gaze attacks.</td>
</tr>
<tr>
<td>64</td>
<td>Once per day, for 1 round, you may see through any substance less than 5 feet thick - except for lead - as if it were glass. This is a supernatural ability.</td>
</tr>
<tr>
<td>65</td>
<td>Your strange physiology grants you a +2 racial bonus on all Acrobatics checks.</td>
</tr>
<tr>
<td>66</td>
<td>You can drink and gain nourishment from ash, cinders, dust, and sand.</td>
</tr>
<tr>
<td>67</td>
<td>Your eyes glow fiendishly and you possess the <Link to="/umr/see_in_darkness">see in darkness</Link> ability as if you were a devil.</td>
</tr>
<tr>
<td>68</td>
<td>You gain damage reduction 2/cold iron.</td>
</tr>
<tr>
<td>69</td>
<td>Once per day, you can use <Link to="/spell/fog_cloud">fog cloud</Link> as a spell-like ability.</td>
</tr>
<tr>
<td>70</td>
<td>You are aware of and can choose the result of any attempt to detect your alignment.</td>
</tr>
<tr>
<td>71</td>
<td>Once per day, you can spend a full-round action eating from a corpse to regain 1d6+1 hit points.</td>
</tr>
<tr>
<td>72</td>
<td>You can communicate telepathically with any evil creature within 50 feet.</td>
</tr>
<tr>
<td>73</td>
<td>You can use <Link to="/spell/minor_image">minor image</Link> three times per day as a spell-like ability.</td>
</tr>
<tr>
<td>74</td>
<td>Once per day, as a spell-like ability, you can animate a Small or smaller object for a number of rounds equal to your level. Treat this object as an <Link to="/spell/animate_objects">animated object</Link>.</td>
</tr>
<tr>
<td>75</td>
<td>You gain sonic resistance 5.</td>
</tr>
<tr>
<td>76</td>
<td>You can <Link to="/misc/hold_your_breath">hold your breath</Link> for 3 rounds longer than normal.</td>
</tr>
<tr>
<td>77</td>
<td>You can speak to insects.</td>
</tr>
<tr>
<td>78</td>
<td>Your skin is spiky. Any creature that attempts to grapple you takes 1d4 points of damage.</td>
</tr>
<tr>
<td>79</td>
<td>You receive a +1 bonus on all Fortitude saving throws.</td>
</tr>
<tr>
<td>80</td>
<td>You gain a +2 bonus to your CMD.</td>
</tr>
<tr>
<td>81</td>
<td>Once per day, you can use <Link to="/spell/rage">rage</Link> on yourself as a spell-like ability.</td>
</tr>
<tr>
<td>82</td>
<td>You gain a +2 bonus on saving throws against mind-affecting effects.</td>
</tr>
<tr>
<td>83</td>
<td>Once per day, exposure to fire heals you of 1d6 points of damage. This ability does not negate fire damage.</td>
</tr>
<tr>
<td>84</td>
<td>You are immune to magic sleep and paralysis effects.</td>
</tr>
<tr>
<td>85</td>
<td>Supernatural awareness grants you a +2 racial bonus on all Perception checks.</td>
</tr>
<tr>
<td>86</td>
<td>Your anatomy is slightly unusual, giving you a 15% chance to ignore critical hits made against you.</td>
</tr>
<tr>
<td>87</td>
<td>You can survive on one-quarter the amount of food and water a human requires.</td>
</tr>
<tr>
<td>88</td>
<td>Any damage you deal with a melee weapon is treated as evil for the purposes of overcoming damage reduction.</td>
</tr>
<tr>
<td>89</td>
<td>Once per day, you can use <Link to="/spell/inflict_light_wounds">inflict light wounds</Link> as a spell-like ability.</td>
</tr>
<tr>
<td>90</td>
<td>You gain an additional +2 racial bonus to your Wisdom score.</td>
</tr>
<tr>
<td>91</td>
<td>You gain DR 2/slashing.</td>
</tr>
<tr>
<td>92</td>
<td>You can see creatures on the Ethereal Plane.</td>
</tr>
<tr>
<td>93</td>
<td>Once per day, you may ask a corpse one yes-or-no question, as per the spell <Link to="/spell/speak_with_dead">speak with dead</Link>. This is a spell-like ability.</td>
</tr>
<tr>
<td>94</td>
<td>You gain a +2 bonus on saving throws against nausea.</td>
</tr>
<tr>
<td>95</td>
<td>You are flexible and slightly slimy, and thus gain a +2 racial bonus on all Escape Artist checks.</td>
</tr>
<tr>
<td>96</td>
<td>You can use <Link to="/spell/ventriloquism">ventriloquism</Link> at will as a spell-like ability.</td>
</tr>
<tr>
<td>97</td>
<td>Once per day as a standard action, you may suppress your unusual tiefling physical features for a number of minutes equal to your Con modifier, thus appearing human.</td>
</tr>
<tr>
<td>98</td>
<td>You receive +1 bonus hit point per level.</td>
</tr>
<tr>
<td>99</td>
<td>Once per week, you may mentally contact a fiendish ancestor to gain information, as per the spell <Link to="/spell/commune">commune</Link>. This is a spell-like ability.</td>
</tr>
<tr>
<td>100</td>
<td>Roll on this table twice, ignoring any further rolls of 100.</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _spread = {..._burst, title: "Spread"};
const _emanation = {..._burst, title: "Emanation"};
export default {not_found:_not_found,blinded:_blinded,confused:_confused,dazed:_dazed,dazzled:_dazzled,deafened:_deafened,fascinated:_fascinated,helpless:_helpless,staggered:_staggered,stunned:_stunned,unconscious:_unconscious,dead:_dead,disabled:_disabled,dying:_dying,stable:_stable,exhausted:_exhausted,fatigued:_fatigued,cowering:_cowering,frightened:_frightened,panicked:_panicked,shaken:_shaken,sickened:_sickened,nauseated:_nauseated,improvised_weapons:_improvised_weapons,damage_die_adjustments:_damage_die_adjustments,weapon_size:_weapon_size,burst:_burst,blocking:_blocking,brace:_brace,broken:_broken,deadly:_deadly,disarm:_disarm,distracting:_distracting,double:_double,fragile:_fragile,grapple:_grapple,monk:_monk,nonlethal:_nonlethal,performance:_performance,reach:_reach,sunder:_sunder,trip:_trip,automatic:_automatic,semi_automatic:_semi_automatic,slow_firing:_slow_firing,touch:_touch,scatter:_scatter,alchemical_burn:_alchemical_burn,alchemical_inspiration:_alchemical_inspiration,signal:_signal,squeezing:_squeezing,total_defense:_total_defense,fighting_defensively:_fighting_defensively,dismissible:_dismissible,hold_your_breath:_hold_your_breath,spell_completion:_spell_completion,spell_trigger:_spell_trigger,precision_damage:_precision_damage,languages:_languages,good_saves:_good_saves,alchemy_lab:_alchemy_lab,altar:_altar,animal_pen:_animal_pen,armory:_armory,artisans_workshop:_artisans_workshop,auditorium:_auditorium,ballroom:_ballroom,bar:_bar,bath:_bath,battle_ring:_battle_ring,bedroom:_bedroom,bell_tower:_bell_tower,book_repository:_book_repository,brewery:_brewery,bunks:_bunks,burial_ground:_burial_ground,cell:_cell,ceremonial_room:_ceremonial_room,classroom:_classroom,clockwork_shop:_clockwork_shop,common_room:_common_room,confessional:_confessional,courtyard:_courtyard,crypt:_crypt,defensive_wall:_defensive_wall,dock:_dock,dojo:_dojo,drawbridge:_drawbridge,escape_route:_escape_route,false_front:_false_front,farmland:_farmland,forge:_forge,game_room:_game_room,garden:_garden,gatehouse:_gatehouse,gauntlet:_gauntlet,greenhouse:_greenhouse,guard_post:_guard_post,habitat:_habitat,hatchery:_hatchery,infirmary:_infirmary,kitchen:_kitchen,labyrinth:_labyrinth,laundry:_laundry,lavatory:_lavatory,leather_workshop:_leather_workshop,lodging:_lodging,magical_repository:_magical_repository,mill_room:_mill_room,nursery:_nursery,observation_dome:_observation_dome,office:_office,pit:_pit,printer:_printer,reliquary:_reliquary,sanctum:_sanctum,sauna:_sauna,scriptorium:_scriptorium,scrying_room:_scrying_room,secret_room:_secret_room,sewer_access:_sewer_access,sewing_room:_sewing_room,shack:_shack,sitting_room:_sitting_room,sports_field:_sports_field,stall:_stall,statue:_statue,storage:_storage,storefront:_storefront,summmoning_chamber:_summmoning_chamber,throne_room:_throne_room,tollbooth:_tollbooth,torture_chamber:_torture_chamber,trap:_trap,trophy_room:_trophy_room,vault:_vault,war_room:_war_room,workstation:_workstation,acolyte:_acolyte,apprentice:_apprentice,archers:_archers,bureaucrats:_bureaucrats,cavalry:_cavalry,cavalry_archers:_cavalry_archers,craftspeople:_craftspeople,cutpurses:_cutpurses,drivers:_drivers,elite_archers:_elite_archers,elite_guards:_elite_guards,elite_soldiers:_elite_soldiers,guards:_guards,laborers:_laborers,lackeys:_lackeys,mage:_mage,priest:_priest,robbers:_robbers,sage:_sage,sailors:_sailors,scofflaws:_scofflaws,soldiers:_soldiers,fractions_and_rounding:_fractions_and_rounding,shield_bash:_shield_bash,magic_items_by_category:_magic_items_by_category,natural_20_natural_1:_natural_20_natural_1,ability_score:_ability_score,action:_action,alignment:_alignment,armor_class:_armor_class,base_attack_bonus:_base_attack_bonus,bonus:_bonus,caster_level:_caster_level,class:_class,check:_check,combat_maneuver:_combat_maneuver,combat_maneuver_bonus:_combat_maneuver_bonus,combat_maneuver_defense:_combat_maneuver_defense,concentration_check:_concentration_check,creature:_creature,damage_reduction:_damage_reduction,difficulty_class:_difficulty_class,extraordinary_abilities:_extraordinary_abilities,experience_points:_experience_points,feat:_feat,game_master:_game_master,hit_dice:_hit_dice,hit_points:_hit_points,initiative:_initiative,level:_level,monster:_monster,multiplying:_multiplying,non_player_character:_non_player_character,penalty:_penalty,player_character:_player_character,round:_round,rounding:_rounding,saving_throw:_saving_throw,skill:_skill,spell:_spell,spell_like_abilities:_spell_like_abilities,spell_resistance:_spell_resistance,stacking:_stacking,supernatural_abilities:_supernatural_abilities,turn:_turn,variant_aasimar_abilities:_variant_aasimar_abilities,variant_tiefling_abilities:_variant_tiefling_abilities,spread:_spread,emanation:_emanation}