import {IonRippleEffect,IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _animal_companion = {hasJL:true,title: "Animal Companion", jsx: <><div className="jumpList" id="sidekick-animal_companion-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="sidekick-animal_companion-special">Special Abilities</InnerLink></li><li><InnerLink toTop to="sidekick-animal_companion-animal-skills">Animal Skills</InnerLink></li><li><InnerLink toTop to="sidekick-animal_companion-animal-feats">Animal Feats</InnerLink></li><li><InnerLink toTop to="sidekick-animal_companion-archetypes">Archetypes</InnerLink></li></ul></div><h2 id="sidekick-animal_companion-animal-companion">Animal Companion</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link><br/>An animal companion's abilities are determined by the druid's level and its animal racial traits. They remain creatures of the animal type for purposes of determining which spells can affect them.</p>
<h3 id="sidekick-animal_companion-base-statistics">Base Statistics</h3>
<ScrollContainer id="sidekick-animal_companion--table-0"><table>
<thead>
<tr>
<th>Class Level</th>
<th>HD</th>
<th>BAB</th>
<th>Fort</th>
<th>Ref</th>
<th>Will</th>
<th>Skills</th>
<th>Feats</th>
<th>Natural Armor Bonus</th>
<th>Str/Dex Bonus</th>
<th>Bonus Tricks</th>
<th>Special</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>2</td>
<td>+1</td>
<td>+3</td>
<td>+3</td>
<td>+0</td>
<td>2</td>
<td>1</td>
<td>+0</td>
<td>+0</td>
<td>1</td>
<td>Link, share spells</td>
</tr>
<tr>
<td>2nd</td>
<td>3</td>
<td>+2</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>3</td>
<td>2</td>
<td>+0</td>
<td>+0</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>3</td>
<td>+2</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>3</td>
<td>2</td>
<td>+2</td>
<td>+1</td>
<td>2</td>
<td>Evasion</td>
</tr>
<tr>
<td>4th</td>
<td>4</td>
<td>+3</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>4</td>
<td>2</td>
<td>+2</td>
<td>+1</td>
<td>2</td>
<td>Ability score increase</td>
</tr>
<tr>
<td>5th</td>
<td>5</td>
<td>+3</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>5</td>
<td>3</td>
<td>+2</td>
<td>+1</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>6</td>
<td>+4</td>
<td>+5</td>
<td>+5</td>
<td>+2</td>
<td>6</td>
<td>3</td>
<td>+4</td>
<td>+2</td>
<td>3</td>
<td>Devotion</td>
</tr>
<tr>
<td>7th</td>
<td>6</td>
<td>+4</td>
<td>+5</td>
<td>+5</td>
<td>+2</td>
<td>6</td>
<td>3</td>
<td>+4</td>
<td>+2</td>
<td>3</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>7</td>
<td>+5</td>
<td>+5</td>
<td>+5</td>
<td>+2</td>
<td>7</td>
<td>4</td>
<td>+4</td>
<td>+2</td>
<td>3</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>8</td>
<td>+6</td>
<td>+6</td>
<td>+6</td>
<td>+2</td>
<td>8</td>
<td>4</td>
<td>+6</td>
<td>+3</td>
<td>4</td>
<td>Ability score increase, Multiattack</td>
</tr>
<tr>
<td>10th</td>
<td>9</td>
<td>+6</td>
<td>+6</td>
<td>+6</td>
<td>+3</td>
<td>9</td>
<td>5</td>
<td>+6</td>
<td>+3</td>
<td>4</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>9</td>
<td>+6</td>
<td>+6</td>
<td>+6</td>
<td>+3</td>
<td>9</td>
<td>5</td>
<td>+6</td>
<td>+3</td>
<td>4</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>10</td>
<td>+7</td>
<td>+7</td>
<td>+7</td>
<td>+3</td>
<td>10</td>
<td>5</td>
<td>+8</td>
<td>+4</td>
<td>5</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>11</td>
<td>+8</td>
<td>+7</td>
<td>+7</td>
<td>+3</td>
<td>11</td>
<td>6</td>
<td>+8</td>
<td>+4</td>
<td>5</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>12</td>
<td>+9</td>
<td>+8</td>
<td>+8</td>
<td>+4</td>
<td>12</td>
<td>6</td>
<td>+8</td>
<td>+4</td>
<td>5</td>
<td>Ability score increase</td>
</tr>
<tr>
<td>15th</td>
<td>12</td>
<td>+9</td>
<td>+8</td>
<td>+8</td>
<td>+4</td>
<td>12</td>
<td>6</td>
<td>+10</td>
<td>+5</td>
<td>6</td>
<td>Improved evasion</td>
</tr>
<tr>
<td>16th</td>
<td>13</td>
<td>+9</td>
<td>+8</td>
<td>+8</td>
<td>+4</td>
<td>13</td>
<td>7</td>
<td>+10</td>
<td>+5</td>
<td>6</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>14</td>
<td>+10</td>
<td>+9</td>
<td>+9</td>
<td>+4</td>
<td>14</td>
<td>7</td>
<td>+10</td>
<td>+5</td>
<td>6</td>
<td>-</td>
</tr>
<tr>
<td>18th</td>
<td>15</td>
<td>+11</td>
<td>+9</td>
<td>+9</td>
<td>+5</td>
<td>15</td>
<td>8</td>
<td>+12</td>
<td>+6</td>
<td>7</td>
<td>-</td>
</tr>
<tr>
<td>19th</td>
<td>15</td>
<td>+11</td>
<td>+9</td>
<td>+9</td>
<td>+5</td>
<td>15</td>
<td>8</td>
<td>+12</td>
<td>+6</td>
<td>7</td>
<td>-</td>
</tr>
<tr>
<td>20th</td>
<td>16</td>
<td>+12</td>
<td>+10</td>
<td>+10</td>
<td>+5</td>
<td>16</td>
<td>8</td>
<td>+12</td>
<td>+6</td>
<td>7</td>
<td>Ability score increase</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Class Level:</strong> This is the character's druid level. The druid's class levels stack with levels of any other classes that are entitled to an animal companion for the purpose of determining the companion's statistics.</p>
<p><strong>HD:</strong> This is the total number of eight-sided (d8) Hit Dice the animal companion possesses, each of which gains a Constitution modifier, as normal.</p>
<p><strong>BAB:</strong> This is the animal companion's base attack bonus. An animal companion's base attack bonus is the same as that of a druid of a level equal to the animal's HD. Animal companions do not gain additional attacks using their natural weapons for a high base attack bonus.</p>
<p><strong>Fort/Ref/Will:</strong> These are the animal companion's base saving throw bonuses. An animal companion has <Link to="/misc/good_saves">good Fortitude and Reflex saves</Link>.</p>
<p><strong>Skills:</strong> This lists the animal's total skill ranks. Animal companions can assign skill ranks to any skill listed under Animal Skills below. If an animal companion increases its Intelligence to 10 or higher, it gains bonus skill ranks as normal. Animal companions with an Intelligence of 3 or higher can purchase ranks in any skill. An animal companion cannot have more ranks in a skill than it has Hit Dice.</p>
<p><strong>Feats:</strong> This is the total number of feats possessed by an animal companion. Animal companions should select their feats from those listed under Animal Feats. Animal companions can select other feats, although they are unable to utilize some feats (such as Martial Weapon Proficiency). Note that animal companions cannot select a feat with a requirement of base attack bonus +1 until they gain their second feat at 3 Hit Dice.</p>
<p><strong>Natural Armor Bonus:</strong> The number noted here is an improvement to the animal companion's existing natural armor bonus.</p>
<p><strong>Str/Dex Bonus:</strong> Add this modifier to the animal companion's Strength and Dexterity scores.</p>
<p><strong>Bonus Tricks:</strong> The value given in this column is the total number of "bonus" tricks that the animal knows in addition to any that the druid might choose to teach it (see <Link to="/skill/handle_animal">Handle Animal</Link>). These bonus tricks don't require any training time or Handle Animal checks, and they don't count against the normal limit of tricks known by the animal. The druid selects these bonus <Link to="/ability/animal_tricks">tricks</Link>, and once selected, they can't be changed.</p>
<aside><p>An animal companion can also be taught special <Link to="/ability/companion_tricks">animal companion tricks</Link>, though they may need specific characteristics to learn them.</p>
</aside><p><strong id="sidekick-animal_companion-special" data-hash-target>Special:</strong> This includes a number of abilities gained by animal companions as they increase in power. Each of these bonuses is described below.</p>
<ul>
<li><em>Link (Ex):</em> A druid can handle her animal companion as a free action, or push it as a move action, even if she doesn't have any ranks in the Handle Animal skill. The druid gains a +4 circumstance bonus on all <Link to="/ability/wild_empathy">wild empathy</Link> checks and Handle Animal checks made regarding an animal companion.</li>
<li><em>Share Spells (Ex):</em> The druid may cast a spell with a target of "You" on her animal companion (as a spell with a range of touch) instead of on herself. A druid may cast spells on her animal companion even if the spells normally do not affect creatures of the companion's type (animal). Spells cast in this way must come from a class that grants an animal companion. This ability does not allow the animal to share abilities that are not spells, even if they function like spells.</li>
<li><em>Evasion (Ex):</em> If an animal companion is subjected to an attack that normally allows a Reflex save for half damage, it takes no damage if it makes a successful saving throw.</li>
<li><em>Ability Score Increase (Ex):</em> The animal companion adds +1 to one of its ability scores.</li>
<li><em>Devotion (Ex):</em> An animal companion gains a +4 morale bonus on Will saves against enchantment spells and effects.</li>
<li><em>Multiattack:</em> An animal companion gains <Link to="/feat/multiattack">Multiattack</Link> as a bonus feat if it has three or more natural attacks and does not already have that feat. If it does not have the requisite three or more natural attacks, the animal companion instead gains a second attack with one of its natural weapons, albeit at a -5 penalty.</li>
<li><em>Improved Evasion (Ex):</em> When subjected to an attack that allows a Reflex saving throw for half damage, an animal companion takes no damage if it makes a successful saving throw and only half damage if the saving throw fails.</li>
</ul>
<h3 id="sidekick-animal_companion-animal-skills" data-hash-target>Animal Skills</h3>
<p>Animal companions can have ranks in any of the following skills: Acrobatics* (Dex), Climb* (Str), Escape Artist (Dex), Fly* (Dex), Intimidate (Cha), Perception* (Wis), Stealth* (Dex), Survival (Wis), and Swim* (Str). All of the skills marked with an (*) are class skills for animal companions. Animal companions with an Intelligence of 3 or higher can put ranks into any skill.</p>
<h3 id="sidekick-animal_companion-animal-feats" data-hash-target>Animal Feats</h3>
<p>Animal companions can select from the following feats.</p>
<ScrollContainer id="sidekick-animal_companion--table-1"><table>
<thead>
<tr>
<th>Feat</th>
<th>Prerequisites</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/feat/acrobatic">Acrobatic<IonRippleEffect /></Link></td>
<td>&mdash;</td>
<td>+2 bonus on Acrobatics and Fly checks</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/agile_maneuvers">Agile Maneuvers<IonRippleEffect /></Link></td>
<td>&mdash;</td>
<td>Use your Dex bonus when calculating your CMB</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/armor_proficiency_heavy">Armor Proficiency, Heavy<IonRippleEffect /></Link></td>
<td>Light Armor Proficiency, Medium Armor Proficiency.</td>
<td>No penalties on attack rolls while wearing heavy armor</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/armor_proficiency_light">Armor Proficiency, Light<IonRippleEffect /></Link></td>
<td>&mdash;</td>
<td>No penalties on attack rolls while wearing light armor</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/armor_proficiency_medium">Armor Proficiency, Medium<IonRippleEffect /></Link></td>
<td>Light Armor Proficiency.</td>
<td>No penalties on attack rolls while wearing medium armor</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/athletic">Athletic<IonRippleEffect /></Link></td>
<td>&mdash;</td>
<td>+2 bonus on Climb and Swim checks</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/blind_fight">Blind-Fight<IonRippleEffect /></Link></td>
<td>&mdash;</td>
<td>Reroll miss chances for <Link to="/rule/concealment">concealment</Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/combat_reflexes">Combat Reflexes<IonRippleEffect /></Link></td>
<td>&mdash;</td>
<td>Make additional attacks of opportunity</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/devotion_against_the_unnatural">Devotion Against the Unnatural<IonRippleEffect /></Link></td>
<td>Animal companion, devotion special ability.</td>
<td>Gain additional resistance to certain creature's abilities</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/diehard">Diehard<IonRippleEffect /></Link></td>
<td>Endurance.</td>
<td>Automatically stabilize and remain conscious below 0 hp</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/disruptive_companion">Disruptive Companion<IonRippleEffect /></Link></td>
<td>Animal companion.</td>
<td>Companion hinders spellcasting</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/dodge">Dodge<IonRippleEffect /></Link></td>
<td>Dex 13.</td>
<td>+1 dodge bonus to AC</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/endurance">Endurance<IonRippleEffect /></Link></td>
<td>&mdash;</td>
<td>+4 bonus on checks to avoid nonlethal damage</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/feral_grace">Feral Grace<IonRippleEffect /></Link></td>
<td>Weapon Finesse, base attack bonus +3, animal companion.</td>
<td>Gain bonus to damage from fighting with finesse</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/ferocious_beast">Ferocious Beast<IonRippleEffect /></Link></td>
<td>Intimidate 1 rank, animal companion.</td>
<td>Gain bonuses on Intimidate checks</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/ferocious_feint">Ferocious Feint<IonRippleEffect /></Link></td>
<td>Bluff 1 rank, animal companion.</td>
<td>Gain bonuses to feint</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/friendly_face">Friendly Face<IonRippleEffect /></Link></td>
<td>Animal companion.</td>
<td>Animals like you have a better starting attitude towards you and your master</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/great_fortitude">Great Fortitude<IonRippleEffect /></Link></td>
<td>&mdash;</td>
<td>+2 on Fortitude saves</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/greater_tenacious_hunter">Greater Tenacious Hunter<IonRippleEffect /></Link></td>
<td>Combat Reflexes, Tenacious Hunter, Perception 3 ranks, Stealth 3 ranks, animal companion.</td>
<td>Deny Dexterity bonus to creatures pinpointed</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/hefty_brute">Hefty Brute<IonRippleEffect /></Link></td>
<td>Animal companion or familiar.</td>
<td>You're treated as one size category larger for size-based abilities</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/improved_bull_rush">Improved Bull Rush<IonRippleEffect /></Link></td>
<td>Str 13, Power Attack, base attack bonus +1.</td>
<td>+2 bonus on bull rush attempts, no attack of opportunity</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/improved_initiative">Improved Initiative<IonRippleEffect /></Link></td>
<td>&mdash;</td>
<td>+4 bonus on initiative checks</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/improved_intercept_blow">Improved Intercept Blow<IonRippleEffect /></Link></td>
<td>Intercept Blow, base attack bonus +6, animal companion.</td>
<td>Further reduce damage while using Intercept Blows</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/improved_natural_armor">Improved Natural Armor<IonRippleEffect /></Link></td>
<td>Natural armor, Con 13.</td>
<td>Increase your natural armor by 1.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/improved_natural_attack">Improved Natural Attack<IonRippleEffect /></Link></td>
<td>Natural weapon, base attack bonus +4.</td>
<td>Increase the damage dice for one of your natural attacks.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/improved_overrun">Improved Overrun<IonRippleEffect /></Link></td>
<td>Str 13, Power Attack, base attack bonus +1.</td>
<td>+2 bonus on overrun attempts, no attack of opportunity</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/intercept_blow">Intercept Blow<IonRippleEffect /></Link></td>
<td>Base attack bonus +1, animal companion.</td>
<td>Shield master from attacks</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/intimidating_prowess">Intimidating Prowess<IonRippleEffect /></Link></td>
<td>&mdash;</td>
<td>Add Str to Intimidate in addition to Cha</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/iron_will">Iron Will<IonRippleEffect /></Link></td>
<td>&mdash;</td>
<td>+2 bonus on Will saves</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/lightning_reflexes">Lightning Reflexes<IonRippleEffect /></Link></td>
<td>&mdash;</td>
<td>+2 bonus on Reflex saves</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/linnorm_hunter_coordination">Linnorm Hunter Coordination<IonRippleEffect /></Link></td>
<td>Cha 13, Dex 13, Dodge, Linnorm Hunter Retreat, Linnorm Hunter Style, base attack bonus +6, must have or be an animal companion.</td>
<td>As a full-round action, you can make a single attack that deals extra damage</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/linnorm_hunter_retreat">Linnorm Hunter Retreat<IonRippleEffect /></Link></td>
<td>Cha 13, Dex 13, Dodge, Linnorm Hunter Style, base attack bonus +4, must have or be an animal companion.</td>
<td>Move 5 ft. as an immediate action when your ally attacks</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/linnorm_hunter_style">Linnorm Hunter Style<IonRippleEffect /></Link></td>
<td>Cha 13, must have or be an animal companion.</td>
<td>Enemies that provoke an attack of opportunity from your ally also provoke from you</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/mobility">Mobility<IonRippleEffect /></Link></td>
<td>Dex 13, Dodge.</td>
<td>+4 AC against attacks of opportunity from movement</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/power_attack">Power Attack<IonRippleEffect /></Link></td>
<td>Str 13, base attack bonus +1.</td>
<td>Trade melee attack bonus for damage</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/reflexive_interception">Reflexive Interception<IonRippleEffect /></Link></td>
<td>Intercept Blow, base attack bonus +3, animal companion, evasion.</td>
<td>Provide evasion to master</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/run">Run<IonRippleEffect /></Link></td>
<td>&mdash;</td>
<td>Run at 5 times your normal speed</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/share_feature">Share Feature<IonRippleEffect /></Link></td>
<td>Animal companion, master must have the chosen class feature.</td>
<td>Gain a class feature from master</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/skill_focus">Skill Focus<IonRippleEffect /></Link></td>
<td>&mdash;</td>
<td>+3 bonus on one skill (+6 at 10 ranks)</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/spring_attack">Spring Attack<IonRippleEffect /></Link></td>
<td>Dex 13, Dodge, Mobility, base attack bonus +4.</td>
<td>Move before and after melee attack</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/stealthy">Stealthy<IonRippleEffect /></Link></td>
<td>&mdash;</td>
<td>+2 bonus on Escape Artist and Stealth checks</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/tenacious_hunter">Tenacious Hunter<IonRippleEffect /></Link></td>
<td>Perception 3 ranks, Stealth 3 ranks, animal companion.</td>
<td>Pinpoint invisible creatures</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/thrill_of_the_hunt">Thrill of the Hunt<IonRippleEffect /></Link></td>
<td>Survival 1 rank; base attack bonus +4 or track class feature.</td>
<td>Designate a creature you are tracking as your prize to gain bonuses against it</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/toughness">Toughness<IonRippleEffect /></Link></td>
<td>&mdash;</td>
<td>+3 hit points, +1 per Hit Die beyond 3</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/feat/weapon_focus">Weapon Focus<IonRippleEffect /></Link></td>
<td>Proficiency with selected weapon, base attack bonus +1.</td>
<td>+1 bonus on attack rolls with one weapon</td>
</tr>
</tbody></table></ScrollContainer>
<p>Animal companions with an Intelligence of 3 or higher can select any feat they are physically capable of using. GMs might expand this list to include feats from other sources.</p>
<div className="sideNoteWrap singular optional elephant"><ScrollContainer id="sidekick-animal_companion--table-2"><table><tbody><tr><ThLink scope="row" to="/rule/the_elephant_in_the_room"><IonIcon aria-label="The Elephant in the Room" icon="/icons/elephant.svg" /></ThLink><td><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link><br/>Animal companions can select from the following feats: Acrobatic, Armor Proficiency (light, medium, and heavy), Athletic, Blind-Fight, Combat Reflexes, Diehard, Dodge, Endurance, Great Fortitude, Improved Initiative, Improved Natural Attack, Intimidating Prowess, Iron Will, Lightning Reflexes, <Link to="/rule/powerful_maneuvers">Powerful Maneuvers</Link>, Run, Skill Focus, Spring Attack, Stealthy, Toughness, and Weapon Focus. Animal companions with an Intelligence of 3 or higher can select any feat they are physically capable of using. GMs may expand this list to include feats from other sources.</p>
</td></tr></tbody></table></ScrollContainer></div><h3 id="sidekick-animal_companion-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-companion/aberrant_companion">Aberrant Companion</Link></p><p><strong>Modifies or Replaces:</strong> Devotion, Multiattack, Natural Armor Progression, Share Spells</p><p>Though aberrant companions are touched by eldritch magic or mutated by strange influences, they are still loyal, if unnatural, allies.</p></div>
<div className="archetype"><p><Link to="/arc-companion/accursed_companion">Accursed Companion</Link></p><p><strong>Modifies or Replaces:</strong> See text</p><p>When mortals fail to protect their bonded companions, so too shall those mortals suffer.</p></div>
<div className="archetype"><p><Link to="/arc-companion/ambusher">Ambusher</Link></p><p><strong>Modifies or Replaces:</strong> Devotion, Evasion, Improved Evasion, Multiattack, Share Spells</p><p>Ambushers sneak up on unsuspecting prey, pouncing on targets when they least expect it.</p></div>
<div className="archetype"><p><Link to="/arc-companion/apex_species">Apex Species</Link></p><p><strong>Modifies or Replaces:</strong> Devotion, Evasion, Improved Evasion, Multiattack, Share Spells</p><p>Some animals are masters of their habitats, perfectly evolved to take advantage of their native terrain. They need not be predators, of course - some herbivores are just as lethally suited to their homes.</p></div>
<div className="archetype"><p><Link to="/arc-companion/augmented_companion">Augmented Companion</Link></p><p><strong>Modifies or Replaces:</strong> Devotion, Share Spells</p><p>Augmented companions have suffered an injury, such as the loss of a wing, and parts of their bodies have been replaced by a master construct crafter.</p></div>
<div className="archetype"><p><Link to="/arc-companion/auspice">Auspice</Link></p><p><strong>Modifies or Replaces:</strong> Evasion, Improved Evasion, Share Spells</p><p>Auspices were born with a birthmark or other feature that seems to be in the shape of their master's deity's holy symbol.</p></div>
<div className="archetype"><p><Link to="/arc-companion/bodyguard">Bodyguard</Link></p><p><strong>Modifies or Replaces:</strong> Evasion, Improved Evasion, Multiattack, Share Spells</p><p>Some companions live lives of faithful devotion and steady vigilance, standing watch through long hours and always ready to leap into action to protect their masters.</p></div>
<div className="archetype"><p><Link to="/arc-companion/bully">Bully</Link></p><p><strong>Modifies or Replaces:</strong> Multiattack, Share Spells</p><p>Bigger than others of its kind, a bully is used to winning fights and displays of dominance for its choice of mates, territory, or other privileges.</p></div>
<div className="archetype"><p><Link to="/arc-companion/charger">Charger</Link></p><p><strong>Modifies or Replaces:</strong> Devotion, Evasion, Improved Evasion, Multiattack, Share Spells</p><p>The mighty charger is a boon to heavily armored and armed champions, bearing them and their ironmongery into battle without hesitation.</p></div>
<div className="archetype"><p><Link to="/arc-companion/daredevil">Daredevil</Link></p><p><strong>Modifies or Replaces:</strong> Devotion, Multiattack, Share Spells</p><p>Daredevil companions join the fray with graceful leaps or swooping dives, heedless of the danger.</p></div>
<div className="archetype"><p><Link to="/arc-companion/deathtouched_companion">Deathtouched Companion</Link></p><p><strong>Modifies or Replaces:</strong> Devotion, Share Spells</p><p>Deathtouched companions are living animals with a trace of the undead, somewhat like <Link to="/race/dhampir">dhampirs</Link>.</p></div>
<div className="archetype"><p><Link to="/arc-companion/draconic_companion">Draconic Companion</Link></p><p><strong>Modifies or Replaces:</strong> Devotion, Evasion, Improved Evasion, Multiattack, Share Spells</p><p>Draconic companions bear a faint trace of dragon blood that grants them special abilities.</p></div>
<div className="archetype"><p><Link to="/arc-companion/elemental_companion">Elemental Companion</Link></p><p><strong>Modifies or Replaces:</strong> Evasion, Improved Evasion, Multiattack</p><p>The heart of this companion beats with primal energy.</p></div>
<div className="archetype"><p><Link to="/arc-companion/feytouched_companion">Feytouched Companion</Link></p><p><strong>Modifies or Replaces:</strong> 4th or 7th-level Advancement, Size Advancement, Devotion, Evasion, Improved Evasion, Multiattack, Share Spells</p><p>Feytouched companions are strangely colored fauna native to the First World, the primal realm of the fey.</p></div>
<div className="archetype"><p><Link to="/arc-companion/precocious_companion">Precocious Companion</Link></p><p><strong>Modifies or Replaces:</strong> 4th or 7th-level Advancement, Evasion, Improved Evasion</p><p>Precocious companions are able to learn far more tricks than other companions.</p></div>
<div className="archetype"><p><Link to="/arc-companion/racer">Racer</Link></p><p><strong>Modifies or Replaces:</strong> Devotion, Share Spells</p><p>Some companions have uncanny speed, providing their masters with swift transport.</p></div>
<div className="archetype"><p><Link to="/arc-companion/totem_guide">Totem Guide</Link></p><p><strong>Modifies or Replaces:</strong> Devotion, Evasion, Improved Evasion, Multiattack</p><p>Totem guides embody the wisdom and spirituality of the natural world, providing guidance as well as aid in combat.</p></div>
<div className="archetype"><p><Link to="/arc-companion/tracker">Tracker</Link></p><p><strong>Modifies or Replaces:</strong> Devotion, Share Spells</p><p>Some companions are expert trackers, able to use their scent ability to follow any trail.</p></div>
<div className="archetype"><p><Link to="/arc-companion/unexpected_intellectual">Unexpected Intellectual</Link></p><p><strong>Modifies or Replaces:</strong> Share Spells</p><p>Sometimes, when an insect or other vermin is chosen to be an animal companion, it proves cleverer than expected. On occasion, it proves <em>much</em> cleverer.</p></div>
<div className="archetype"><p><Link to="/arc-companion/verdant_companion">Verdant Companion</Link></p><p><strong>Modifies or Replaces:</strong> Devotion, Evasion, Improved Evasion, Share Spells</p><p>Favorites of druids who balance their responsibilities between flora and fauna, verdant companions are animals with some of the abilities and physical aspects of plants.</p></div>
<div className="archetype"><p><Link to="/arc-companion/wrecker">Wrecker</Link></p><p><strong>Modifies or Replaces:</strong> Share Spells, Multiattack</p><p>Like unruly pets, some companions have a tendency to destroy nearby objects while unsupervised, and their masters can channel these destructive impulses into an advantage in battle.</p></div>
</>};
const _drake = {hasJL:true,title: "Drake", jsx: <><div className="jumpList" id="sidekick-drake-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="sidekick-drake-special">Special Abilities</InnerLink></li><li><InnerLink toTop to="sidekick-drake-drake-class-skills">Drake Class Skills</InnerLink></li><li><InnerLink toTop to="sidekick-drake-drake-starting-statistics">Drake Starting Statistics</InnerLink></li><li><InnerLink toTop to="sidekick-drake-drake-powers">Drake Powers</InnerLink></li></ul></div><h2 id="sidekick-drake-drake">Drake</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons</Link><br/>A drake can be a powerful ally to one who understands how to deal with its surly and obstinate attitude. Such a character is called the drake's "charge" as drakes refuse to refer to another being as their master. While drake companions enjoy accumulating hoards of shiny treasure, they adamantly refuse to wear barding, armor, or clothing items of any kind (belts, boots, and so on); they can wear magical jewelry such as amulets or rings but will agree to wear only one such item. Drake companions are not animal companions and don't count as animal companions for any purpose, including Handle Animal checks and tricks. Additionally, they are fairly lazy, and successful Diplomacy or Intimidate checks are needed to convince them to fatigue themselves or take major risks to their lives. Without the mount drake power, a drake companion actively refuses to suffer a rider and fights a rider it has not agreed to every step of the way, even if that rider is its charge. Drake companions are extreme oddities among drakes and irreplaceable to their charges, as it takes years to win a drake's trust. As such, should a drake companion die, her charge doesn't gain a replacement drake companion and must restore the companion from the dead. At the GM's discretion, a charge who lost his drake might be able to bond with a new drake after going on a quest to find another special drake and spending several years bonding with the new drake.</p>
<p>The <Link to="/arc-cavalier/drakerider">Drakerider</Link> cavalier archetype, <Link to="/arc-druid/draconic_druid">Draconic Druid</Link> archetype, <Link to="/arc-paladin/silver_champion">Silver Champion</Link> paladin archetype, <Link to="/arc-ranger/drake_warden">Drake Warden</Link> ranger archetype, and the <Link to="/arc-shaman/draconic_shaman">Draconic Shaman</Link> shaman archetype gain a drake companion.</p>
<ScrollContainer id="sidekick-drake--table-0"><table>
<thead>
<tr>
<th>Charge's Level</th>
<th>HD</th>
<th>BAB</th>
<th>Saves</th>
<th>Skills</th>
<th>Feats</th>
<th>Special</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>1</td>
<td>+1</td>
<td>+2</td>
<td>3</td>
<td>1</td>
<td>Darkvision, low-light vision, immunities, subtype</td>
</tr>
<tr>
<td>2nd</td>
<td>2</td>
<td>+2</td>
<td>+3</td>
<td>6</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>3</td>
<td>+3</td>
<td>+3</td>
<td>9</td>
<td>2</td>
<td>Drake power, natural armor</td>
</tr>
<tr>
<td>4th</td>
<td>3</td>
<td>+3</td>
<td>+3</td>
<td>12</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>4</td>
<td>+4</td>
<td>+4</td>
<td>15</td>
<td>2</td>
<td>Ability score increase, size increase</td>
</tr>
<tr>
<td>6th</td>
<td>5</td>
<td>+5</td>
<td>+4</td>
<td>18</td>
<td>3</td>
<td>Natural armor</td>
</tr>
<tr>
<td>7th</td>
<td>6</td>
<td>+6</td>
<td>+5</td>
<td>21</td>
<td>3</td>
<td>Drake power</td>
</tr>
<tr>
<td>8th</td>
<td>6</td>
<td>+6</td>
<td>+5</td>
<td>24</td>
<td>3</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>7</td>
<td>+7</td>
<td>+5</td>
<td>27</td>
<td>4</td>
<td>Natural armor, size increase</td>
</tr>
<tr>
<td>10th</td>
<td>8</td>
<td>+8</td>
<td>+6</td>
<td>30</td>
<td>4</td>
<td>Ability score increase</td>
</tr>
<tr>
<td>11th</td>
<td>9</td>
<td>+9</td>
<td>+6</td>
<td>34</td>
<td>5</td>
<td>Drake power</td>
</tr>
<tr>
<td>12th</td>
<td>9</td>
<td>+9</td>
<td>+6</td>
<td>36</td>
<td>5</td>
<td>Natural armor</td>
</tr>
<tr>
<td>13th</td>
<td>10</td>
<td>+10</td>
<td>+7</td>
<td>39</td>
<td>5</td>
<td>Size increase</td>
</tr>
<tr>
<td>14th</td>
<td>11</td>
<td>+11</td>
<td>+7</td>
<td>42</td>
<td>6</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>12</td>
<td>+12</td>
<td>+8</td>
<td>45</td>
<td>6</td>
<td>Ability score increase, drake power</td>
</tr>
<tr>
<td>16th</td>
<td>12</td>
<td>+12</td>
<td>+8</td>
<td>48</td>
<td>6</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>13</td>
<td>+13</td>
<td>+8</td>
<td>51</td>
<td>7</td>
<td>Size increase</td>
</tr>
<tr>
<td>18th</td>
<td>14</td>
<td>+14</td>
<td>+9</td>
<td>54</td>
<td>7</td>
<td>Natural armor</td>
</tr>
<tr>
<td>19th</td>
<td>15</td>
<td>+15</td>
<td>+9</td>
<td>57</td>
<td>8</td>
<td>Drake Power</td>
</tr>
<tr>
<td>20th</td>
<td>15</td>
<td>+15</td>
<td>+9</td>
<td>60</td>
<td>8</td>
<td>Ability score increase</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Charge's Level:</strong> This is the class level of the drake's charge in the class that grants the drake companion.</p>
<p><strong>HD:</strong> This is the drake's total number of 12-sided (d12) Hit Dice.</p>
<p><strong>BAB:</strong> This is the base attack bonus of the drake, which is equal to its number of Hit Dice.</p>
<p><strong>Saves:</strong> These are the drake's base saving throw bonuses.</p>
<p><strong>Skills:</strong> This entry lists the drake's total number of skill ranks. A drake with a high Intelligence score modifies this total as normal (for each Hit Die it has, it gains a number of skill ranks equal to 6 + its Intelligence modifier). A drake can't have more ranks in a skill than it has HD</p>
<p><strong>Feats:</strong> This is the drake's total number of feats.</p>
<p><strong id="sidekick-drake-special" data-hash-target>Special:</strong> As the drake increases in power, it gains the special abilities described below.</p>
<ul>
<li><em>Darkvision (Ex):</em> The drake has darkvision out to a range of 60 feet.</li>
<li><em>Low-Light Vision(Ex):</em> Drakes see twice as far as humans in dim light.</li>
<li><em>Immunities:</em> Drakes are immune to sleep and paralysis.</li>
<li><em>Subtype:</em> Each drake has an energy or elemental subtype, either aether, air, cold, earth, fire, or water, and gains a free drake power based on its subtype. When their charges reach 1st level, aether drakes gain <em>magic attacks,</em> air drakes gain <em>glide,</em> earth drakes gain <em>burrow,</em> and water drakes gain <em>swim.</em> When their charges reach 3rd level, fire drakes gain <em>breath weapon</em> (fire) and cold drakes gain <em>breath weapon</em> (cold).</li>
<li><em>Drake Power:</em> The drake gains a power for which it qualifies from the list of drake powers. Each power can be chosen only once.</li>
<li><em>Natural Armor:</em> The drake's natural armor bonus to its AC increases by 2 when the charge reaches 3rd level and every 3 levels thereafter.</li>
<li><em>Ability Score Increase (Ex):</em> The drake adds 1 to one of its ability scores when its charge reaches 5th level and every 5 levels thereafter</li>
<li><em>Size Increase:</em> The drake matures further and advances a size category when the charge reaches 5th level and every 4 levels thereafter. Each time this occurs, the drake's natural armor bonus to its AC increases by 2, its natural attacks increase in damage based on the new size category, and it gains the following ability scores adjustments: Str +4, Dex -2, Con +2. When the drake reaches Medium size, its speed increases from 20 feet to 30 feet.</li>
</ul>
<h3 id="sidekick-drake-drake-class-skills" data-hash-target>Drake Class Skills</h3>
<p>The following skills are class skills for a drake: Appraise (Int), Bluff (Cha), Climb (Str), Craft (Int), Diplomacy (Cha), Fly (Dex), Heal (Wis), Intimidate (Cha), Knowledge (all) (Int), Linguistics (Int), Perception (Wis), Sense Motive (Wis), Spellcraft (Int), Stealth (Dex), Survival (Wis), Swim (Str), and Use Magic Device (Cha).</p>
<h3 id="sidekick-drake-drake-starting-statistics" data-hash-target>Drake Starting Statistics</h3>
<p><strong>Size</strong> Tiny; <strong>Alignment</strong> any nongood; <strong>Speed</strong> 20 ft.; <strong>Attack</strong> bite (1d3), tail<sup><InnerLink showBacklink="backlink-sidekick-drake-ref-S-1" id="sidekick-drake-ref-S-1" data-hash-target to="sidekick-drake-S">1</InnerLink></sup> (1d3); <strong>Ability Scores</strong> Str 8, Dex 17, Con 11, Int 4, Wis 10, Cha 7; <strong>Languages</strong> Draconic.</p>
<h3 id="sidekick-drake-drake-powers" data-hash-target>Drake Powers</h3>
<p>Drake companions can select from the following drake powers.</p>
<p><strong>Aether Bite:</strong> The drake's bite applies 1-1/2 &times; its Strength modifier to the damage dealt by its bite attack, and its bite attack deals full damage to incorporeal creatures. To select aether bite, a drake must have the aether subtype and the drake's charge must be at least 7th level.</p>
<p><strong>Blindsense:</strong> The drake gains blindsense out to a range of 10 feet. To select blindsense, a drake must have scent and the drake's charge must be at least 11th level.</p>
<p><strong>Breath Weapon:</strong> The drake chooses acid, cold, electricity, or fire, and gains a breath weapon it can use once per day that fires a glob of the chosen energy up to 60 feet. It deals 4d6 points of damage of the appropriate type in a 10-foot-radius spread (Reflex half; DC = 10 + 1/2 the drake's Hit Dice + the drake's Constitution modifier).</p>
<p><strong>Breath Weapon, Greater:</strong> The drake's breath weapon has a 20-foot radius, deals 8d6 points of damage, and can be used five times per day (though it must wait 1d4 rounds between uses). To select this, a drake must have breath weapon and improved breath weapon and its charge must be at least 15th level.</p>
<p><strong>Breath Weapon, Improved:</strong> The drake's breath weapon has a 15-foot radius, deals 6d6 points of damage, and can be used three times per day (though it must wait 1d4 rounds between each use). To select improved breath weapon, a drake must have breath weapon and its charge must be at least 11th level</p>
<p><strong>Burrow:</strong> The drake gains a burrow speed of 10 feet.</p>
<p><strong>Burrow, Improved:</strong> The drake's burrow speed improves to 30 feet. To select improved burrow, a drake must have burrow and the earth subtype and its charge must be at least 7th level.</p>
<p><strong>Energy Bite:</strong> The drake's bite deals 1d6 extra points of damage of the same energy type as its breath weapon. To select energy bite, a drake must have breath weapon and the cold or fire subtype and its charge must be at least 7th level.</p>
<p><strong>Flight :</strong> The drake gains a fly speed of 40 feet (clumsy). To select flight, a drake must have glide and its charge must be at least 7th level.</p>
<p><strong>Flight, Greater:</strong> The drake's fly speed improves to 80 feet (good). To select greater flight, a drake must have glide, flight, improved flight, and the air subtype and its charge must be at least 15th level.</p>
<p><strong>Flight, Improved:</strong> The drake's fly speed improves to 60 feet (average). To select improved flight, a drake must have glide and flight and its charge must be at least 11th level.</p>
<p><strong>Glide:</strong> The drake is able to take ranks in Fly. It can slow its fall to 60 feet per round, and it takes no falling damage as long as it can take actions and succeeds at a DC 15 Fly check each round. As it falls, it can take a move action to move up to 30 feet laterally in a straight line, or two move actions to move up to 60 feet laterally in a straight line. The drake can't gain height while gliding.</p>
<p><strong>Intellect:</strong> The drake's Intelligence score increases by 4.</p>
<p><strong>Keen Mind:</strong> The drake's Intelligence, Wisdom, and Charisma scores each increase by 2. A drake must have intellect to select keen mind.</p>
<p><strong>Magic Attacks:</strong> The drake's attacks count as magic.</p>
<p><strong>Mount:</strong> The drake deigns to allow its charge to ride it, as long as she is at least one size category smaller than the drake. While carrying a rider, the drake can't burrow and it loses the benefits of the highest-level drake power it has from the following list (ordered from highest-level to lowest-level): greater flight, improved flight, flight, or glide. To select mount, a drake must have glide and its charge must be at least 7th level.</p>
<p><strong>Mount, Improved:</strong> The drake accepts any rider of the charge's choice who is at least one size category smaller than the drake (provided the rider remains in the drake's good graces), and it no longer loses a flight-based drake power when carrying a rider. To select this power, a drake must have glide and mount and its charge must be at least 11th level.</p>
<p><strong>Scent:</strong> The drake gains the scent ability.</p>
<p><strong>Swim:</strong> The drake gains a 20-foot swim speed.</p>
<p><strong>Swim, Improved:</strong> The drake's swim speed improves to 60 feet. To select improved swim, a drake must have swim and the water subtype and its charge must be at least 7th level.</p>
<section data-footnotes>
<h3 id="sidekick-drake-label">Footnotes</h3>
<ol>
<li id="sidekick-drake-S">
<p>This is a secondary natural attack. <InnerLink id="backlink-sidekick-drake-ref-S-1" data-hash-target to="sidekick-drake-ref-S-1" aria-label="Back to reference S-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _eidolon = {hasJL:true,title: "Eidolon", jsx: <><div className="jumpList" id="sidekick-eidolon-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="sidekick-eidolon-base-forms">Base Forms</InnerLink></li><li><InnerLink toTop to="sidekick-eidolon-base-statistics">Base Statistics</InnerLink></li><li><InnerLink toTop to="sidekick-eidolon-special">Special Abilities</InnerLink></li><li><InnerLink toTop to="sidekick-eidolon-eidolon-skills">Eidolon Skills</InnerLink></li><li><InnerLink toTop to="sidekick-eidolon-eidolon-models">Eidolon Models</InnerLink></li></ul></div><h2 id="sidekick-eidolon-eidolon">Eidolon</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 58</Link><br/>An eidolon's abilities are determined by the <Link to="/class/summoner">summoner's</Link> level and by the choices made using its evolution pool. Each eidolon possesses a base form that modifies these base statistics. Eidolons are outsiders for the purpose of determining which spells affect them.</p>
<h3 id="sidekick-eidolon-base-forms" data-hash-target>Base Forms</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 59</Link><br/>Each eidolon has one of the following base forms that determines its starting size, speed, AC, attacks, and ability scores. All natural attacks are made using the eidolon's full base attack bonus unless otherwise noted (such as in the case of secondary attacks). Eidolon attacks add the eidolon's Strength modifier to the damage roll, unless it is its only attack, in which case it adds 1-1/2 times its Strength modifier. These base forms also note any free evolutions that base form possesses. The bonuses from these free evolutions are already factored into the starting statistics.</p>
<p>Alternatively, any one of these base forms can be used to make a Small eidolon. If the eidolon is Small, it gains a +2 bonus to its Dexterity score. It also takes a -4 penalty to its Strength and a -2 penalty to its Constitution. It also gains a +1 size bonus to its AC and attack rolls, a -1 penalty to its CMB and CMD scores, a +2 bonus on its Fly skill checks, and a +4 bonus on its Stealth skill checks. Reduce the damage of all of its attacks by one step (1d6 becomes 1d4, 1d4 becomes 1d3). If this choice is made, the eidolon can be made Medium whenever the summoner can change the eidolon's evolution pool (which causes it to lose these modifiers for being Small).</p>
<blockquote>
<h4 id="sidekick-eidolon-aquatic">Aquatic</h4>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 74</Link><br/>Starting Statistics: <strong>Size</strong> Medium; <strong>Speed:</strong> 20 ft., swim 40 ft.; <strong>AC:</strong> +4 natural armor; <strong>Saves:</strong> Fort (good), Ref (good), Will (bad); <strong>Attack:</strong> bite (1d6); <strong>Ability Scores:</strong> Str 16, Dex 12, Con 13, Int 7, Wis 10, Cha 11; <strong>Free Evolutions:</strong> bite, improved natural armor, gills, swim (2)</p>
<h4 id="sidekick-eidolon-avian">Avian</h4>
<p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions pg. 9</Link><br/>Starting Statistics: <strong>Size</strong> Small/Medium (see Note); <strong>Speed:</strong> 30 ft., fly 30 ft. (good); <strong>AC:</strong> +2 natural armor; <strong>Saves:</strong> Fort (bad), Ref (good), Will (good); <strong>Attack:</strong> 2 claws (1d3); <strong>Ability Scores:</strong> Str 12, Dex 16, Con 13, Int 7, Wis 10, Cha 11; <strong>Free Evolutions:</strong> claws, flight, limbs (legs); <strong>Note:</strong> When summoned, an avian eidolon is Small unless it spends 2 points from its evolution pool. At 5th level, a Medium or larger avian eidolon's flight speed increases by 40 feet, as if it had 2 more points in the flight evolution.</p>
<h4 id="sidekick-eidolon-biped">Biped</h4>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 60</Link><br/>Starting Statistics: <strong>Size</strong> Medium; <strong>Speed:</strong> 30 ft.; <strong>AC:</strong> +2 natural armor; <strong>Saves:</strong> Fort (good), Ref (bad), Will (good); <strong>Attack:</strong> 2 claws (1d4); <strong>Ability Scores:</strong> Str 16, Dex 12, Con 13, Int 7, Wis 10, Cha 11; <strong>Free Evolutions:</strong> claws, limbs (arms), limbs (legs)</p>
<h4 id="sidekick-eidolon-quadruped">Quadruped</h4>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 60</Link><br/>Starting Statistics: <strong>Size</strong> Medium; <strong>Speed:</strong> 40 ft.; <strong>AC:</strong> +2 natural armor; <strong>Saves:</strong> Fort (good), Ref (good), Will (bad); <strong>Attack:</strong> bite (1d6); <strong>Ability Scores:</strong> Str 14, Dex 14, Con 13, Int 7, Wis 10, Cha 11; <strong>Free Evolutions:</strong> bite, limbs (legs) (2)</p>
<h4 id="sidekick-eidolon-serpentine">Serpentine</h4>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 60</Link><br/>Starting Statistics: <strong>Size</strong> Medium; <strong>Speed:</strong> 20 ft., climb 20 ft.; <strong>AC:</strong> +2 natural armor; <strong>Saves:</strong> Fort (bad), Ref (good), Will (good); <strong>Attack:</strong> bite (1d6), tail slap (1d6); <strong>Ability Scores:</strong> Str 12, Dex 16, Con 13, Int 7, Wis 10, Cha 11; <strong>Free Evolutions:</strong> bite, climb, reach (bite), tail, tail slap</p>
<h4 id="sidekick-eidolon-tauric">Tauric</h4>
<p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions pg. 9</Link><br/>Starting Statistics: <strong>Size</strong> Small/Medium (see Note); <strong>Speed:</strong> 40 ft.; <strong>AC:</strong> +2 natural armor; <strong>Saves:</strong> Fort (good), Ref (bad), Will (good); <strong>Attack:</strong> 2 claws (1d4); <strong>Ability Scores:</strong> Str 14, Dex 14, Con 13, Int 7, Wis 10, Cha 11; <strong>Free Evolutions:</strong> claws, limbs (arms), limbs (legs) (2); <strong>Note:</strong> When summoned, a tauric eidolon is Small unless it spends 2 points from its evolution pool.</p>
</blockquote>
<h3 id="sidekick-eidolon-base-statistics" data-hash-target>Base Statistics</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 58</Link></p>
<ScrollContainer id="sidekick-eidolon--table-0"><table>
<thead>
<tr>
<th>Class Level</th>
<th>HD</th>
<th>BAB</th>
<th>Good Saves</th>
<th>Bad Save</th>
<th>Skills</th>
<th>Feats</th>
<th>Armor Bonus</th>
<th>Str/Dex Bonus</th>
<th>Evolution Pool</th>
<th>Max. Attacks</th>
<th>Special</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>1</td>
<td>+1</td>
<td>+2</td>
<td>+0</td>
<td>4</td>
<td>1</td>
<td>+0</td>
<td>+0</td>
<td>3</td>
<td>3</td>
<td>Darkvision, link, share spells</td>
</tr>
<tr>
<td>2nd</td>
<td>2</td>
<td>+2</td>
<td>+3</td>
<td>+0</td>
<td>8</td>
<td>1</td>
<td>+2</td>
<td>+1</td>
<td>4</td>
<td>3</td>
<td>Evasion</td>
</tr>
<tr>
<td>3rd</td>
<td>3</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>12</td>
<td>2</td>
<td>+2</td>
<td>+1</td>
<td>5</td>
<td>3</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>3</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>12</td>
<td>2</td>
<td>+2</td>
<td>+1</td>
<td>7</td>
<td>4</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>4</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>16</td>
<td>2</td>
<td>+4</td>
<td>+2</td>
<td>8</td>
<td>4</td>
<td>Ability score increase</td>
</tr>
<tr>
<td>6th</td>
<td>5</td>
<td>+5</td>
<td>+4</td>
<td>+1</td>
<td>20</td>
<td>3</td>
<td>+4</td>
<td>+2</td>
<td>9</td>
<td>4</td>
<td>Devotion</td>
</tr>
<tr>
<td>7th</td>
<td>6</td>
<td>+6</td>
<td>+5</td>
<td>+2</td>
<td>24</td>
<td>3</td>
<td>+6</td>
<td>+3</td>
<td>10</td>
<td>4</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>6</td>
<td>+6</td>
<td>+5</td>
<td>+2</td>
<td>24</td>
<td>3</td>
<td>+6</td>
<td>+3</td>
<td>11</td>
<td>4</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>7</td>
<td>+7</td>
<td>+5</td>
<td>+2</td>
<td>28</td>
<td>4</td>
<td>+6</td>
<td>+3</td>
<td>13</td>
<td>5</td>
<td>Multiattack</td>
</tr>
<tr>
<td>10th</td>
<td>8</td>
<td>+8</td>
<td>+6</td>
<td>+2</td>
<td>32</td>
<td>4</td>
<td>+8</td>
<td>+4</td>
<td>14</td>
<td>5</td>
<td>Ability score increase</td>
</tr>
<tr>
<td>11th</td>
<td>9</td>
<td>+9</td>
<td>+6</td>
<td>+3</td>
<td>36</td>
<td>5</td>
<td>+8</td>
<td>+4</td>
<td>15</td>
<td>5</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>9</td>
<td>+9</td>
<td>+6</td>
<td>+3</td>
<td>36</td>
<td>5</td>
<td>+10</td>
<td>+5</td>
<td>16</td>
<td>5</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>10</td>
<td>+10</td>
<td>+7</td>
<td>+3</td>
<td>40</td>
<td>5</td>
<td>+10</td>
<td>+5</td>
<td>17</td>
<td>5</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>11</td>
<td>+11</td>
<td>+7</td>
<td>+3</td>
<td>44</td>
<td>6</td>
<td>+10</td>
<td>+5</td>
<td>19</td>
<td>6</td>
<td>Improved evasion</td>
</tr>
<tr>
<td>15th</td>
<td>12</td>
<td>+12</td>
<td>+8</td>
<td>+4</td>
<td>48</td>
<td>6</td>
<td>+12</td>
<td>+6</td>
<td>20</td>
<td>6</td>
<td>Ability score increase</td>
</tr>
<tr>
<td>16th</td>
<td>12</td>
<td>+12</td>
<td>+8</td>
<td>+4</td>
<td>48</td>
<td>6</td>
<td>+12</td>
<td>+6</td>
<td>21</td>
<td>6</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>13</td>
<td>+13</td>
<td>+8</td>
<td>+4</td>
<td>52</td>
<td>7</td>
<td>+14</td>
<td>+7</td>
<td>22</td>
<td>6</td>
<td>-</td>
</tr>
<tr>
<td>18th</td>
<td>14</td>
<td>+14</td>
<td>+9</td>
<td>+4</td>
<td>56</td>
<td>7</td>
<td>+14</td>
<td>+7</td>
<td>23</td>
<td>6</td>
<td>-</td>
</tr>
<tr>
<td>19th</td>
<td>15</td>
<td>+15</td>
<td>+9</td>
<td>+5</td>
<td>60</td>
<td>8</td>
<td>+14</td>
<td>+7</td>
<td>25</td>
<td>7</td>
<td>-</td>
</tr>
<tr>
<td>20th</td>
<td>15</td>
<td>+15</td>
<td>+9</td>
<td>+5</td>
<td>60</td>
<td>8</td>
<td>+16</td>
<td>+8</td>
<td>26</td>
<td>7</td>
<td>-</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Class Level:</strong> This is the character's summoner level.</p>
<p><strong>HD:</strong> This is the total number of 10-sided (d10) Hit Dice the eidolon possesses, each of which gains a Constitution modifier, as normal.</p>
<p><strong>BAB:</strong> This is the eidolon's base attack bonus. An eidolon's base attack bonus is equal to its Hit Dice. Eidolons do not gain additional attacks using their natural weapons for a high base attack bonus.</p>
<p><strong>Good/Bad Saves:</strong> These are the eidolon's base saving throw bonuses. An eidolon possesses two <Link to="/misc/good_saving_throws">good saving throws and one bad saving throw</Link>, determined by the creature's base form.</p>
<p><strong>Skills:</strong> This lists the eidolon's total skill ranks. An eidolon can assign skill ranks to any skill, but it must possess the appropriate appendages to use some skills. Eidolons with Intelligence scores above the base value modify these totals as normal (an eidolon receives a number of skill ranks equal to 6 + its Intelligence modifier per HD). An eidolon cannot have more ranks in a skill than it has Hit Dice. Eidolon skill ranks are set once chosen, even if the creature changes when the summoner gains a new level.</p>
<p><strong>Feats:</strong> This is the total number of feats possessed by an eidolon. Eidolons can select any feat that they qualify for, but they must possess the appropriate appendages to use some feats. Eidolon feats are set once chosen, even if the creature changes when the summoner gains a new level. If, due to changes, the eidolon no longer qualifies for a feat, the feat has no effect until the eidolon once again qualifies for the feat.</p>
<p><strong>Armor Bonus:</strong> The number noted here is the eidolon's base total armor bonus. This bonus may be split between an armor bonus and a natural armor bonus, as decided by the summoner. This number is modified by the eidolon's base form and some options available through its evolution pool. An eidolon cannot wear armor of any kind, as the armor interferes with the summoner's connection to the eidolon.</p>
<p><strong>Str/Dex Bonus:</strong> Add this modifier to the eidolon's Strength and Dexterity scores, as determined by its base form. Some options available through the eidolon's evolution pool might modify these scores.</p>
<p><strong>Evolution Pool:</strong> The value given in this column is the total number of points in the eidolon's evolution pool. Points from this pool can be spent on a wide variety of modifications and upgrades that add new abilities, attacks, and powers to the eidolon. Whenever the summoner gains a level, the number in this pool increases and the summoner can spend these points to change the abilities of the eidolon. These choices are not set. The summoner can change them whenever he gains a level (and through the <Link to="/spell/transmogrify">transmogrify</Link> spell).</p>
<p><strong>Max. Attacks:</strong> This indicates the maximum number of natural attacks that the eidolon is allowed to possess at the given level. If the eidolon is at its maximum, it cannot take evolutions that grant additional natural attacks. This does not include attacks made with weapons.</p>
<p><strong id="sidekick-eidolon-special" data-hash-target>Special:</strong> This includes a number of abilities gained by all eidolons as they increase in power. Each of these bonuses is described below.</p>
<blockquote>
<p><em>Darkvision (Ex):</em> The eidolon has darkvision out to a range of 60 feet.</p>
<p><em>Link (Ex):</em> A summoner and his eidolon share a mental link allows for communication across any distance (as long as they are on the same plane). This communication is a free action, allowing the summoner to give orders to his eidolon at any time. In addition, magic items interfere with the summoner's connection to his eidolon. As a result, the summoner and his eidolon share magic item slots. For example, if the summoner is wearing a ring, his eidolon can wear no more than one ring. In case of a conflict, the items worn by the summoner remain active, and those used by the eidolon become dormant. The eidolon must possess the appropriate appendages to utilize a magic item.</p>
<p><em>Share Spells (Ex):</em> The summoner may cast a spell with a target of "you" on his eidolon (as a spell with a range of touch) instead of on himself. A summoner may cast spells on his eidolon even if the spells normally do not affect creatures of the eidolon's type (outsider). Spells cast in this way must come from the summoner spell list. This ability does not allow the eidolon to share abilities that are not spells, even if they function like spells.</p>
<p><em>Evasion (Ex):</em> If an eidolon is subjected to an attack that normally allows a Reflex save for half damage, it takes no damage if it makes a successful saving throw.</p>
<p><em>Ability Score Increase (Ex):</em> The eidolon adds +1 to one of its ability scores.</p>
<p><em>Devotion (Ex):</em> An eidolon gains a +4 morale bonus on Will saves against enchantment spells and effects.</p>
<p><em>Multiattack:</em> An eidolon gains <Link to="/feat/multiattack">Multiattack</Link> as a bonus feat if it has 3 or more natural attacks and does not already have that feat. If it does not have the requisite 3 or more natural attacks (or it is reduced to less than 3 attacks), the eidolon instead gains a second attack with one of its natural weapons, albeit at a -5 penalty. If the eidolon later gains 3 or more natural attacks, it loses this additional attack and instead gains Multiattack.</p>
<p><em>Improved Evasion (Ex):</em> When subjected to an attack that allows a Reflex saving throw for half damage, an eidolon takes no damage if it makes a successful saving throw and only half damage if the saving throw fails.</p>
</blockquote>
<h3 id="sidekick-eidolon-eidolon-skills" data-hash-target>Eidolon Skills</h3>
<p>The following skills are class skills for eidolons: Bluff (Cha), Craft (Int), Knowledge (planes) (Int), Perception (Wis), Sense Motive (Wis), and Stealth (Dex). In addition, at 1st level, the summoner can choose 4 additional skills to be class skills for his eidolon. Note that eidolons with a fly speed receive Fly (Dex) as a free class skill, even if they do not gain a fly speed until a later level.</p>
<h3 id="sidekick-eidolon-eidolon-models" data-hash-target>Eidolon Models</h3>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 74</Link><br/>An eidolon can look like almost anything its summoner desires. Eidolon models are pre-built examples of base forms and evolutions that provide an easy guide to building an eidolon with a specific appearance or theme.</p>
<p>Using a model does not change the eidolon's type or give it special abilities unavailable to other eidolons - it is basically a shortcut to allow a player or GM to quickly create an eidolon with a specific look in mind. Each model states the total number of evolution points required to build a complete eidolon with that model; in many cases this build requires most of the summoner's evolution points, so only a more powerful summoner's eidolon is a close approximation of the intended creature. For a low-level summoner, some of the eidolon's features (such as extra hydra heads) may be cosmetic until he gains evolution points to spend.</p>
<p>The <strong>Base Form</strong> lists the eidolon's recommended base form for that model. <strong>Primary Evolutions</strong> are a list of recommended evolutions to choose when you start building an eidolon with that model. <strong>Additional Evolutions</strong> are a list of other evolutions to complete the modeled eidolon's form and abilities.</p>
<blockquote>
<p><em><strong>Note:</strong> This was published before the introductions of the Avian and Tauric base forms. They may make for better bases for some of these models.</em></p>
</blockquote>
<h4 id="sidekick-eidolon-aboleth">Aboleth</h4>
<p>The eidolon looks like an aberrant aquatic creature such as an aboleth.</p>
<p><strong>25 points: Base Form</strong> aquatic; <strong>Primary Evolutions</strong> <Link to="/evolution/reach">reach</Link> (tentacles), <Link to="/evolution/tentacle">tentacles</Link> (2); <strong>Secondary Evolutions</strong> <Link to="/evolution/basic_magic">basic magic</Link> (<Link to="/spell/ghost_sound">ghost sound</Link>), <Link to="/evolution/huge">huge</Link>, <Link to="/evolution/large">large</Link>, <Link to="/evolution/major_magic">major magic</Link> (<Link to="/spell/minor_image">minor image</Link>), <Link to="/evolution/minor_magic">minor magic</Link> (<Link to="/spell/silent_image">silent image</Link>), tentacles (2), <Link to="/evolution/ultimate_magic">ultimate magic</Link> (<Link to="/spell/major_image">major image</Link>).</p>
<h4 id="sidekick-eidolon-angel">Angel</h4>
<p>The eidolon looks like a celestial being such as an angel, archon, or azata. Angel eidolons usually appear as beautiful humanoids with large, feathered wings.</p>
<p><strong>24 points: Base Form</strong> biped; <strong>Primary Evolutions</strong> <Link to="/evolution/resistance">resistance</Link> (fire or electricity), <Link to="/evolution/weapon_training">weapon training</Link>; <strong>Secondary Evolutions</strong> <Link to="/evolution/basic_magic">basic magic</Link> (<Link to="/spell/stabilize">stabilize</Link>), <Link to="/evolution/damage_reduction">damage reduction</Link> (evil), <Link to="/evolution/flight">flight</Link>, <Link to="/evolution/immunity">immunity</Link> (acid or cold), <Link to="/evolution/major_magic">major magic</Link> (<Link to="/spell/cure_moderate_wounds">cure moderate wounds</Link> or <Link to="/spell/invisibility">invisibility</Link>), <Link to="/evolution/minor_magic">minor magic</Link> (<Link to="/spell/cure_light_wounds">cure light wounds</Link> or <Link to="/spell/detect_evil">detect evil</Link>), <Link to="/evolution/spell_resistance">spell resistance</Link>, <Link to="/evolution/ultimate_magic">ultimate magic</Link> (<Link to="/spell/cure_serious_wounds">cure serious wounds</Link>, <Link to="/spell/daylight">daylight</Link>, or <Link to="/spell/tongues">tongues</Link>) or <Link to="/evolution/dimension_door">dimension door</Link>.</p>
<h4 id="sidekick-eidolon-behir">Behir</h4>
<p>This model creates a multi-legged, reptilian eidolon that looks like a behir.</p>
<p><strong>24 points: Base Form</strong> quadruped; <strong>Primary Evolutions</strong> <Link to="/evolution/climb">climb</Link>, <Link to="/evolution/limbs">limbs</Link> (legs); <strong>Secondary Evolutions</strong> <Link to="/evolution/breath_weapon">breath weapon</Link> (electricity), <Link to="/evolution/grab">grab</Link> (bite), <Link to="/evolution/immunity">immunity</Link> (electricity), <Link to="/evolution/large">large</Link>, limbs (legs, 3), <Link to="/evolution/swallow_whole">swallow whole</Link>.</p>
<h4 id="sidekick-eidolon-bodyguard">Bodyguard</h4>
<p>The eidolon looks like a humanoid warrior. The natural armor of a bodyguard eidolon appears to be a suit of metal plate, though this armor is actually part of the eidolon's body. Bodyguard eidolons are normally trained in a variety of dangerous weapons.</p>
<p><strong>11 points: Base Form</strong> biped; <strong>Primary Evolutions</strong> <Link to="/evolution/improved_natural_armor">improved natural armor</Link>, <Link to="/evolution/weapon_training">weapon training</Link>; <strong>Secondary Evolutions</strong> <Link to="/evolution/ability_increase">ability increase</Link> (Strength), <Link to="/evolution/fast_healing">fast healing</Link>, <Link to="/evolution/weapon_training">weapon training</Link> (martial).</p>
<h4 id="sidekick-eidolon-centaur">Centaur</h4>
<p>The eidolon has the upper torso of a humanoid and the lower body of a quadruped (such as a horse). A centaur eidolon's upper humanoid torso is smaller than its quadrupedal body. As a result, it wields weapons as if it were one size category smaller than its actual size (Medium for most centaur eidolons). The centaur model can also be used to create a lamia (a centaur eidolon with the upper body of a woman and the lower body of a lion) by replacing the hooves evolution with <Link to="/evolution/claws">claws</Link> and taking <Link to="/evolution/basic_magic">basic magic</Link> (<Link to="/spell/touch_of_fatigue">touch of fatigue</Link>), <Link to="/evolution/minor_magic">minor magic</Link> (<Link to="/spell/ventriloquism">ventriloquism</Link>), <Link to="/evolution/major_magic">major magic</Link> (<Link to="/spell/daze_monster">daze monster</Link>), and <Link to="/evolution/ultimate_magic">ultimate magic</Link> (<Link to="/spell/major_image">major image</Link>), resulting in a 23-point model.</p>
<p><strong>13 points: Base Form</strong> quadruped; <strong>Primary Evolutions</strong> <Link to="/evolution/limbs">limbs</Link> (arms), <Link to="/evolution/hooves">hooves</Link>; <strong>Secondary Evolutions</strong> <Link to="/evolution/large">large</Link>, <Link to="/evolution/trample">trample</Link>, <Link to="/evolution/weapon_training">weapon training</Link>, weapon training (martial).</p>
<h4 id="sidekick-eidolon-chimera">Chimera</h4>
<p>The eidolon looks like chimera - a lion with wings and two additional heads, those of a dragon and a goat. The color of the dragon's head determines the chimera eidolon's breath weapon type.</p>
<p><strong>19 points: Base Form</strong> quadruped; <strong>Primary Evolutions</strong> <Link to="/evolution/claws">claws</Link>, <Link to="/evolution/head">head</Link>; <strong>Secondary Evolutions</strong> <Link to="/evolution/bite">bite</Link>, <Link to="/evolution/breath_weapon">breath weapon</Link>, <Link to="/evolution/flight">flight</Link>, <Link to="/evolution/gore">gore</Link>, <Link to="/evolution/head">head</Link>, <Link to="/evolution/large">large</Link>, <Link to="/evolution/scent">scent</Link>.</p>
<h4 id="sidekick-eidolon-demon">Demon</h4>
<p>The eidolon has a demonic appearance. Demon eidolons have no recommended base form, as demons can have almost any form. A marilith demon eidolon might have the serpentine base form, while a vrock demon eidolon would have the biped base form.</p>
<p><strong>26 points: Base Form</strong> any; <strong>Primary Evolutions</strong> <Link to="/evolution/resistance">resistance</Link> (acid, cold, fire); <strong>Secondary Evolutions</strong> <Link to="/evolution/basic_magic">basic magic</Link> (<Link to="/spell/acid_splash">acid splash</Link>); <Link to="/evolution/bite">bite</Link>, <Link to="/evolution/claws">claws</Link>, <Link to="/evolution/slam">slam</Link>, or <Link to="/evolution/tentacle">tentacle</Link>; <Link to="/evolution/damage_reduction">damage reduction</Link> (good); <Link to="/evolution/flight">flight</Link>; <Link to="/evolution/immunity">immunity</Link> (electricity); <Link to="/evolution/magic_attacks">magic attacks</Link>; <Link to="/evolution/major_magic">major magic</Link> (<Link to="/spell/darkness">darkness</Link> or <Link to="/spell/see_invisibility">see invisibility</Link>); <Link to="/evolution/minor_magic">minor magic</Link> (<Link to="/spell/detect_good">detect good</Link> or <Link to="/spell/vanish">vanish</Link>); <Link to="/evolution/spell_resistance">spell resistance</Link>; <Link to="/evolution/ultimate_magic">ultimate magic</Link> (<Link to="/spell/gaseous_form">gaseous form</Link> or <Link to="/spell/stinking_cloud">stinking cloud</Link>) or <Link to="/evolution/dimension_door">dimension door</Link>.</p>
<h4 id="sidekick-eidolon-devil">Devil</h4>
<p>The eidolon has an infernal appearance. Devil eidolons might have large bat wings or could fly magically.</p>
<p><strong>26 points: Base Form</strong> biped; <strong>Primary Evolutions</strong> <Link to="/evolution/basic_magic">basic magic</Link> (<Link to="/spell/daze">daze</Link> or <Link to="/spell/ray_of_frost">ray of frost</Link>), <Link to="/evolution/magic_attacks">magic attacks</Link>, <Link to="/evolution/resistance">resistance</Link> (acid or cold); <strong>Secondary Evolutions</strong> <Link to="/evolution/damage_reduction">damage reduction</Link> (good), <Link to="/evolution/flight">flight</Link>, <Link to="/evolution/immunity">immunity</Link> (fire), <Link to="/evolution/major_magic">major magic</Link> (<Link to="/spell/invisibility">invisibility</Link>, <Link to="/spell/minor_image">minor image</Link>, or <Link to="/spell/scorching_ray">scorching ray</Link>), <Link to="/evolution/minor_magic">minor magic</Link> (<Link to="/spell/burning_hands">burning hands</Link> or <Link to="/spell/detect_good">detect good</Link>), <Link to="/evolution/see_in_darkness">see in darkness</Link>, <Link to="/evolution/spell_resistance">spell resistance</Link>, <Link to="/evolution/ultimate_magic">ultimate magic</Link> (<Link to="/spell/fireball">fireball</Link>, <Link to="/spell/lightning_bolt">lightning bolt</Link>, or <Link to="/spell/major_image">major image</Link>) or <Link to="/evolution/dimension_door">dimension door</Link>.</p>
<h4 id="sidekick-eidolon-dragon">Dragon</h4>
<p>The eidolon appears to be a Medium dragon. Making a Small dragon eidolon creates a fairy dragon or pseudodragon. Large or Huge dragons can be created by exchanging one or more of the evolutions below for the <Link to="/evolution/large">large</Link> evolution.</p>
<p><strong>26 points: Base Form</strong> quadruped; <strong>Primary Evolutions</strong> <Link to="/evolution/claws">claws</Link>, <Link to="/evolution/tail">tail</Link>, <Link to="/evolution/tail_slap">tail slap</Link>; <strong>Secondary Evolutions</strong> <Link to="/evolution/basic_magic">basic magic</Link> (any), <Link to="/evolution/blindsense">blindsense</Link>, <Link to="/evolution/breath_weapon">breath weapon</Link>, <Link to="/evolution/flight">flight</Link>, <Link to="/evolution/frightful_presence">frightful presence</Link>, <Link to="/evolution/immunity">immunity</Link>, <Link to="/evolution/magic_attacks">magic attacks</Link>, <Link to="/evolution/minor_magic">minor magic</Link> (any), <Link to="/evolution/spell_resistance">spell resistance</Link>, <Link to="/evolution/wing_buffet">wing buffet</Link>.</p>
<h4 id="sidekick-eidolon-drider">Drider</h4>
<p>This centaurlike eidolon has the upper torso of a humanoid and the lower body of a giant spider. A drider eidolon's upper humanoid torso is smaller than its spider body. As a result, it wields weapons as if it were one size category smaller than its actual size (Medium for most drider eidolons).</p>
<p><strong>25 points: Base Form</strong> quadruped; <strong>Primary Evolutions</strong> <Link to="/evolution/climb">climb</Link>, <Link to="/evolution/limbs">limbs</Link> (arms); <strong>Secondary Evolutions</strong> <Link to="/evolution/basic_magic">basic magic</Link> (<Link to="/spell/dancing_lights">dancing lights</Link> or <Link to="/spell/detect_magic">detect magic</Link>), <Link to="/evolution/large">large</Link>, limbs (legs, 2), <Link to="/evolution/minor_magic">minor magic</Link> (<Link to="/spell/detect_good">detect good</Link> or <Link to="/spell/detect_law">detect law</Link>), <Link to="/evolution/poison">poison</Link>, <Link to="/evolution/spell_resistance">spell resistance</Link>, <Link to="/evolution/weapon_training">weapon training</Link>, <Link to="/evolution/web">web</Link>.</p>
<h4 id="sidekick-eidolon-fey">Fey</h4>
<p>The eidolon looks like a fey creature such as a dryad, nymph, pixie, or satyr. Fey eidolons usually appear as attractive humanoids and may have insect or butterfly wings. An aquatic fey such as a nixie can be created by adding the <Link to="/evolution/gills">gills</Link> and <Link to="/evolution/swim">swim</Link> evolutions, resulting in a 24-point model.</p>
<p><strong>22 points: Base Form</strong> biped; <strong>Primary Evolutions</strong> <Link to="/evolution/basic_magic">basic magic</Link> (<Link to="/spell/daze">daze</Link>, <Link to="/spell/dancing_lights">dancing lights</Link>, <Link to="/spell/detect_magic">detect magic</Link>, or <Link to="/spell/ghost_sound">ghost sound</Link>), <Link to="/evolution/weapon_training">weapon training</Link>; <strong>Secondary Evolutions</strong> <Link to="/evolution/damage_reduction">damage reduction</Link> (lawful), <Link to="/evolution/dimension_door">dimension door</Link>, <Link to="/evolution/flight">flight</Link>, <Link to="/evolution/low_light_vision">low-light vision</Link>, <Link to="/evolution/major_magic">major magic</Link> (<Link to="/spell/cure_moderate_wounds">cure moderate wounds</Link> or <Link to="/spell/invisibility">invisibility</Link>), <Link to="/evolution/minor_magic">minor magic</Link> (<Link to="/spell/obscuring_mist">obscuring mist</Link> or <Link to="/spell/vanish">vanish</Link>), <Link to="/evolution/spell_resistance">spell resistance</Link>.</p>
<h4 id="sidekick-eidolon-genie">Genie</h4>
<p>The eidolon looks like a genie such as a djinni, efreeti, janni, marid, or shaitan. The eidolon's movement, energy attacks, and immunity depend on what type of genie is created - a djinni has flight, electricity attacks, and immunity to acid; an efreeti has flight, fire attacks, and immunity to fire; a marid has swim, cold attacks, and immunity to cold; and a shaitan has burrow, acid attacks, and immunity to electricity.</p>
<p><strong>21-23 points: Base Form</strong> biped; <strong>Primary Evolutions</strong> <Link to="/evolution/basic_magic">basic magic</Link> (<Link to="/spell/detect_magic">detect magic</Link>), <Link to="/evolution/weapon_training">weapon training</Link>; <strong>Secondary Evolutions</strong> <Link to="/evolution/burrow">burrow</Link>, <Link to="/evolution/flight">flight</Link>, or <Link to="/evolution/swim">swim</Link>; <Link to="/evolution/energy_attacks">energy attacks</Link>; <Link to="/evolution/immunity">immunity</Link>; <Link to="/evolution/large">large</Link>; <Link to="/evolution/major_magic">major magic</Link> (<Link to="/spell/acid_arrow">acid arrow</Link>, <Link to="/spell/invisibility">invisibility</Link>, or <Link to="/spell/scorching_ray">scorching ray</Link>); <Link to="/evolution/minor_magic">minor magic</Link> (<Link to="/spell/burning_hands">burning hands</Link> or <Link to="/spell/obscuring_mist">obscuring mist</Link>); <Link to="/evolution/ultimate_magic">ultimate magic</Link> (<Link to="/spell/create_food_and_water">create food and water</Link>, <Link to="/spell/gaseous_form">gaseous form</Link>, or <Link to="/spell/water_breathing">water breathing</Link>).</p>
<h4 id="sidekick-eidolon-hydra">Hydra</h4>
<p>The eidolon looks like a multi-headed hydra. This model creates a five-headed hydra. A cryohydra or pyrohydra can be created by adding the <Link to="/evolution/breath_weapon">breath weapon</Link> and <Link to="/evolution/immunity">immunity</Link> evolutions, resulting in a 26-point model.</p>
<p><strong>20 points: Base Form</strong> serpentine; <strong>Primary Evolutions</strong> <Link to="/evolution/bite">bite</Link>, <Link to="/evolution/head">head</Link>; <strong>Secondary Evolutions</strong> bite (3), <Link to="/evolution/fast_healing">fast healing</Link>, head (3), <Link to="/evolution/large">large</Link>.</p>
<h4 id="sidekick-eidolon-linnorm">Linnorm</h4>
<p>The eidolon appears to be a Medium-sized linnorm. Large or Huge linnorms can be created by exchanging one or more of the evolutions below for the <Link to="/evolution/large">large</Link> evolution. This model can also be used to create a wingless dragon such as a Chinese dragon.</p>
<p><strong>23 points: Base Form</strong> serpentine; <strong>Primary Evolutions</strong> <Link to="/evolution/claws">claws</Link>, <Link to="/evolution/limbs">limbs</Link> (legs); <strong>Secondary Evolutions</strong> <Link to="/evolution/breath_weapon">breath weapon</Link>, <Link to="/evolution/fast_healing">fast healing</Link>, <Link to="/evolution/flight">flight</Link>, flight (magic), <Link to="/evolution/immunity">immunity</Link>, <Link to="/evolution/poison">poison</Link>, <Link to="/evolution/spell_resistance">spell resistance</Link>.</p>
<h4 id="sidekick-eidolon-mammoth">Mammoth</h4>
<p>The eidolon is a large, powerful creature with tusks and a prehensile trunk (using the tentacle evolution), such as an elephant or mastodon.</p>
<p><strong>14 points (20 points for Huge): Base Form</strong> quadruped; <strong>Primary Evolutions</strong> <Link to="/evolution/gore">gore</Link>, <Link to="/evolution/tentacle">tentacle</Link>; <strong>Secondary Evolutions</strong> <Link to="/evolution/grab">grab</Link> (tentacle), <Link to="/evolution/huge">huge</Link>, <Link to="/evolution/large">large</Link>, <Link to="/evolution/mount">mount</Link>, <Link to="/evolution/scent">scent</Link>, <Link to="/evolution/slam">slam</Link>, <Link to="/evolution/trample">trample</Link>.</p>
<h4 id="sidekick-eidolon-merfolk">Merfolk</h4>
<p>The eidolon has the upper body of a humanoid and the lower body of a fish. This model can be used to create an aquatic humanoid such as a merfolk or sahuagin.</p>
<p><strong>18 points: Base Form</strong> aquatic; <strong>Primary Evolutions</strong> <Link to="/evolution/limbs">limbs</Link> (arms), <Link to="/evolution/tail">tail</Link>; <strong>Secondary Evolutions</strong> <Link to="/evolution/blindsense">blindsense</Link>, <Link to="/evolution/claws">claws</Link> or <Link to="/evolution/pincers">pincers</Link>, <Link to="/evolution/immunity">immunity</Link> (cold), <Link to="/evolution/no_breath">no breath</Link>, <Link to="/evolution/tail_slap">tail slap</Link>, <Link to="/evolution/weapon_training">weapon training</Link>, weapon training (martial).</p>
<h4 id="sidekick-eidolon-nightmare">Nightmare</h4>
<p>The eidolon is a fiery equine similar to a nightmare, possibly suitable for use as a mount.</p>
<p><strong>17 points: Base Form</strong> quadruped; <strong>Primary Evolutions</strong> <Link to="/evolution/energy_attacks">energy attacks</Link> (fire), <Link to="/evolution/hooves">hooves</Link>; <strong>Secondary Evolutions</strong> <Link to="/evolution/flight">flight</Link> (magic), <Link to="/evolution/large">large</Link>, <Link to="/evolution/minor_magic">minor magic</Link> (<Link to="/spell/obscuring_mist">obscuring mist</Link>), <Link to="/evolution/mount">mount</Link>, <Link to="/evolution/resistance">resistance</Link> (fire), <Link to="/evolution/trample">trample</Link>.</p>
<h4 id="sidekick-eidolon-sea-serpent">Sea Serpent</h4>
<p>This serpentine, aquatic eidolon looks like a sea serpent or aquatic worm.</p>
<p><strong>18 points, 24 points (Huge): Base Form</strong> serpentine; <strong>Primary Evolutions</strong> <Link to="/evolution/gills">gills</Link>, <Link to="/evolution/resistance">resistance</Link> (fire), <Link to="/evolution/swim">swim</Link>; <strong>Secondary Evolutions</strong> <Link to="/evolution/constrict">constrict</Link>, <Link to="/evolution/grab">grab</Link> (bite and tail slap), <Link to="/evolution/immunity">immunity</Link> (cold), <Link to="/evolution/large">large</Link>, <Link to="/evolution/swallow_whole">swallow whole</Link>.</p>
<h4 id="sidekick-eidolon-shark">Shark</h4>
<p>The eidolon looks like a sleek aquatic predator such as a shark or orca.</p>
<p><strong>16 points: Base Form</strong> aquatic; <strong>Primary Evolutions</strong> <Link to="/evolution/grab">grab</Link> (bite), <Link to="/evolution/scent">scent</Link>; <strong>Secondary Evolutions</strong> <Link to="/evolution/blindsense">blindsense</Link>, <Link to="/evolution/improved_damage">improved damage</Link> (bite), <Link to="/evolution/keen_scent">keen scent</Link>, <Link to="/evolution/large">large</Link>, <Link to="/evolution/swallow_whole">swallow whole</Link>.</p>
<h4 id="sidekick-eidolon-thing-from-beyond">Thing from Beyond</h4>
<p>The eidolon has a form that was not meant to be seen by mortal eyes, such as that of a shoggoth, mi-go, star-spawn, or something even worse. The Thing from Beyond can have any base form, with multiple mouths, eyes, claws, and tentacles.</p>
<p><strong>25 points: Base Form</strong> any; <strong>Primary Evolutions</strong> <Link to="/evolution/tentacle">tentacles</Link> (3); <strong>Secondary Evolutions</strong> <Link to="/evolution/blindsense">blindsense</Link>, <Link to="/evolution/bite">bite</Link>, <Link to="/evolution/grab">grab</Link> (bite or tentacle) <Link to="/evolution/immunity">immunity</Link> (cold, sonic), <Link to="/evolution/large">large</Link>, <Link to="/evolution/resistance">resistance</Link> (acid, electricity, fire), <Link to="/evolution/swallow_whole">swallow whole</Link>, <Link to="/evolution/tremorsense">tremorsense</Link>.</p>
<h4 id="sidekick-eidolon-undead">Undead</h4>
<p>The eidolon appears to be an undead creature, whether a skeleton, zombie, mummy, or even an incorporeal ghost or shadow. A summoner with an undead eidolon must select the undead appearance evolution at 1st level.</p>
<p><strong>19 points: Base Form</strong> any; <strong>Primary Evolutions</strong> <Link to="/evolution/undead_appearance">undead appearance</Link>, <Link to="/evolution/unnatural_aura">unnatural aura</Link>; <strong>Secondary Evolutions</strong> <Link to="/evolution/channel_resistance">channel resistance</Link>, <Link to="/evolution/immunity">immunity</Link> (cold), <Link to="/evolution/incorporeal_form">incorporeal form</Link>, <Link to="/evolution/lifesense">lifesense</Link>, <Link to="/evolution/no_breath">no breath</Link>.</p>
<h4 id="sidekick-eidolon-vermin">Vermin</h4>
<p>The eidolon looks like a large insect or other vermin. Taking the limbs (legs) evolution an additional time creates a giant spider.</p>
<p><strong>16 points, 18 points (spider), 22 or 24 points (Huge): Base Form</strong> quadruped; <strong>Primary Evolutions</strong> <Link to="/evolution/climb">climb</Link>, <Link to="/evolution/limbs">limbs</Link> (legs); <strong>Secondary Evolutions</strong> <Link to="/evolution/flight">flight</Link>, <Link to="/evolution/poison">poison</Link>, <Link to="/evolution/sting">sting</Link>, <Link to="/evolution/tail">tail</Link>, <Link to="/evolution/trample">trample</Link>, <Link to="/evolution/tremorsense">tremorsense</Link>, <Link to="/evolution/web">web</Link>.</p>
<h4 id="sidekick-eidolon-winged-snake">Winged Snake</h4>
<p>The eidolon looks like a serpent with wings, such as a couatl or lillend.</p>
<p><strong>23 points (couatl), 26 points (lillend): Base Form</strong> serpentine; <strong>Primary Evolutions</strong> <Link to="/evolution/basic_magic">basic magic</Link> (any), <Link to="/evolution/grab">grab</Link>; <strong>Secondary Evolutions</strong> couatl (<Link to="/evolution/constrict">constrict</Link>, <Link to="/evolution/flight">flight</Link>, <Link to="/evolution/large">large</Link>, <Link to="/evolution/magic_attacks">magic attacks</Link>, <Link to="/evolution/major_magic">major magic</Link> [<Link to="/spell/invisibility">invisibility</Link>], <Link to="/evolution/minor_magic">minor magic</Link> [<Link to="/spell/detect_evil">detect chaos/evil/good/law</Link>], <Link to="/evolution/poison">poison</Link>, <Link to="/evolution/ultimate_magic">ultimate magic</Link> [<Link to="/spell/gaseous_form">gaseous form</Link>]); lillend (<Link to="/evolution/constrict">constrict</Link>, flight, <Link to="/evolution/immunity">immunity</Link> [electricity], large, <Link to="/evolution/limbs">limbs</Link> [arms], magic attacks, major magic [<Link to="/spell/darkness">darkness</Link> or <em>invisibility</em>], minor magic [<Link to="/spell/cure_light_wounds">cure light wounds</Link>], <Link to="/evolution/resistance">resistance</Link> [cold, fire], <Link to="/evolution/skilled">skilled</Link> [Perform], <Link to="/evolution/weapon_training">weapon training</Link> [martial]).</p>
</>};
const _unchained_eidolon = {hasJL:true,title: "Unchained Eidolon", jsx: <><div className="jumpList" id="sidekick-unchained_eidolon-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="sidekick-unchained_eidolon-base-forms">Base Forms</InnerLink></li><li><InnerLink toTop to="sidekick-unchained_eidolon-base-statistics">Base Statistics</InnerLink></li><li><InnerLink toTop to="sidekick-unchained_eidolon-special">Special Abilities</InnerLink></li><li><InnerLink toTop to="sidekick-unchained_eidolon-eidolon-skills">Eidolon Skills</InnerLink></li></ul></div><h2 id="sidekick-unchained_eidolon-unchained-eidolon">Unchained Eidolon</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained</Link><br/>An eidolon's abilities are determined by the <Link to="/class/summoner">summoner's</Link> level and by the choices made using its evolution pool. Each eidolon possesses a base form that modifies these base statistics. Eidolons are outsiders for the purpose of determining which spells affect them.</p>
<p>The first time a summoner calls his eidolon, he must decide on its <Link to="/ability/unchained_eidolon_subtypes">subtype</Link>. The eidolon's subtype determines a number of its base statistics and abilities, as well as its overall look and theme. The subtype also determines what sort of evolutions the summoner can select for his eidolon using the evolution pool. Once the choice of subtype is made, it cannot be changed.</p>
<h3 id="sidekick-unchained_eidolon-base-forms" data-hash-target>Base Forms</h3>
<p>Each eidolon has one of the following base forms that determines its starting size, speed, AC, attacks, and ability scores. All natural attacks are made using the eidolon's full base attack bonus unless otherwise noted (such as in the case of secondary attacks). An eidolon's attacks add the eidolon's Strength modifier to the damage rolls, unless the eidolon has only one attack, in which case the attack adds 1-1/2 times the eidolon's Strength modifier.</p>
<p>Alternatively, any one of these base forms can be used to make a Small eidolon. If the eidolon is Small, it gains a +2 bonus to Dexterity. It takes a -4 penalty to Strength and a -2 penalty to Constitution. It also has a +1 size bonus to AC and on attack rolls, a -1 penalty on combat maneuver checks and to CMD, a +2 bonus on Fly checks, and a +4 bonus on Stealth checks. Reduce the damage of all of its attacks by one step (for example, 1d6 becomes 1d4, and 1d4 becomes 1d3). If this choice is made, the eidolon can be made Medium whenever the summoner can change the eidolon's evolution pool (which causes it to lose these modifiers for being Small). Likewise, a Medium eidolon can be made Small whenever the summoner can change the eidolon's evolution pool.</p>
<blockquote>
<h4 id="sidekick-unchained_eidolon-aberrant">Aberrant</h4>
<p>Starting Statistics: <strong>Size</strong> Medium; <strong>Speed:</strong> 20f ft., swim 20 ft.; <strong>AC:</strong> +2 natural armor; <strong>Saves:</strong> Fort (good), Ref (poor), Will (good); <strong>Attack:</strong> bite (1d6), tentacles (1d6); <strong>Ability Scores:</strong> Str 12, Dex 13, Con 16, Int 7, Wis 10, Cha 11</p>
<h4 id="sidekick-unchained_eidolon-biped">Biped</h4>
<p>Starting Statistics: <strong>Size</strong> Medium; <strong>Speed:</strong> 30 ft.; <strong>AC:</strong> +2 natural armor; <strong>Saves:</strong> Fort (good), Ref (poor), Will (good); <strong>Attack:</strong> 2 claws (1d4); <strong>Ability Scores:</strong> Str 16, Dex 12, Con 13, Int 7, Wis 10, Cha 11</p>
<h4 id="sidekick-unchained_eidolon-quadruped">Quadruped</h4>
<p>Starting Statistics: <strong>Size</strong> Medium; <strong>Speed:</strong> 40 ft.; <strong>AC:</strong> +2 natural armor; <strong>Saves:</strong> Fort (good), Ref (good), Will (poor); <strong>Attack:</strong> bite (1d6); <strong>Ability Scores:</strong> Str 14, Dex 14, Con 13, Int 7, Wis 10, Cha 11</p>
<h4 id="sidekick-unchained_eidolon-serpentine">Serpentine</h4>
<p>Starting Statistics: <strong>Size</strong> Medium; <strong>Speed:</strong> 20 ft., climb 20 ft.; <strong>AC:</strong> +2 natural armor; <strong>Saves:</strong> Fort (poor), Ref (good), Will (good); <strong>Attack:</strong> bite (1d6), tail slap (1d6); <strong>Ability Scores:</strong> Str 12, Dex 16, Con 13, Int 7, Wis 10, Cha 11</p>
</blockquote>
<h3 id="sidekick-unchained_eidolon-base-statistics" data-hash-target>Base Statistics</h3>
<ScrollContainer id="sidekick-unchained_eidolon--table-0"><table>
<thead>
<tr>
<th>Class Level</th>
<th>HD</th>
<th>BAB</th>
<th>Good Saves</th>
<th>Bad Save</th>
<th>Skills</th>
<th>Feats</th>
<th>Armor Bonus</th>
<th>Str/Dex Bonus</th>
<th>Evolution Pool</th>
<th>Max. Attacks</th>
<th>Special</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>1</td>
<td>+1</td>
<td>+2</td>
<td>+0</td>
<td>4</td>
<td>1</td>
<td>+0</td>
<td>+0</td>
<td>1</td>
<td>3</td>
<td>Darkvision, link, share spells</td>
</tr>
<tr>
<td>2nd</td>
<td>2</td>
<td>+2</td>
<td>+3</td>
<td>+0</td>
<td>8</td>
<td>1</td>
<td>+2</td>
<td>+1</td>
<td>2</td>
<td>3</td>
<td>Evasion</td>
</tr>
<tr>
<td>3rd</td>
<td>3</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>12</td>
<td>2</td>
<td>+2</td>
<td>+1</td>
<td>3</td>
<td>3</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>3</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>12</td>
<td>2</td>
<td>+2</td>
<td>+1</td>
<td>3</td>
<td>4</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>4</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>16</td>
<td>2</td>
<td>+4</td>
<td>+2</td>
<td>4</td>
<td>4</td>
<td>Ability score increase</td>
</tr>
<tr>
<td>6th</td>
<td>5</td>
<td>+5</td>
<td>+4</td>
<td>+1</td>
<td>20</td>
<td>3</td>
<td>+4</td>
<td>+2</td>
<td>5</td>
<td>4</td>
<td>Devotion</td>
</tr>
<tr>
<td>7th</td>
<td>6</td>
<td>+6</td>
<td>+5</td>
<td>+2</td>
<td>24</td>
<td>3</td>
<td>+6</td>
<td>+3</td>
<td>6</td>
<td>4</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>6</td>
<td>+6</td>
<td>+5</td>
<td>+2</td>
<td>24</td>
<td>3</td>
<td>+6</td>
<td>+3</td>
<td>6</td>
<td>4</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>7</td>
<td>+7</td>
<td>+5</td>
<td>+2</td>
<td>28</td>
<td>4</td>
<td>+6</td>
<td>+3</td>
<td>7</td>
<td>5</td>
<td>Multiattack</td>
</tr>
<tr>
<td>10th</td>
<td>8</td>
<td>+8</td>
<td>+6</td>
<td>+2</td>
<td>32</td>
<td>4</td>
<td>+8</td>
<td>+4</td>
<td>8</td>
<td>5</td>
<td>Ability score increase</td>
</tr>
<tr>
<td>11th</td>
<td>9</td>
<td>+9</td>
<td>+6</td>
<td>+3</td>
<td>36</td>
<td>5</td>
<td>+8</td>
<td>+4</td>
<td>9</td>
<td>5</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>9</td>
<td>+9</td>
<td>+6</td>
<td>+3</td>
<td>36</td>
<td>5</td>
<td>+10</td>
<td>+5</td>
<td>9</td>
<td>5</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>10</td>
<td>+10</td>
<td>+7</td>
<td>+3</td>
<td>40</td>
<td>5</td>
<td>+10</td>
<td>+5</td>
<td>10</td>
<td>5</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>11</td>
<td>+11</td>
<td>+7</td>
<td>+3</td>
<td>44</td>
<td>6</td>
<td>+10</td>
<td>+5</td>
<td>11</td>
<td>6</td>
<td>Improved evasion</td>
</tr>
<tr>
<td>15th</td>
<td>12</td>
<td>+12</td>
<td>+8</td>
<td>+4</td>
<td>48</td>
<td>6</td>
<td>+12</td>
<td>+6</td>
<td>12</td>
<td>6</td>
<td>Ability score increase</td>
</tr>
<tr>
<td>16th</td>
<td>12</td>
<td>+12</td>
<td>+8</td>
<td>+4</td>
<td>48</td>
<td>6</td>
<td>+12</td>
<td>+6</td>
<td>12</td>
<td>6</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>13</td>
<td>+13</td>
<td>+8</td>
<td>+4</td>
<td>52</td>
<td>7</td>
<td>+14</td>
<td>+7</td>
<td>13</td>
<td>6</td>
<td>-</td>
</tr>
<tr>
<td>18th</td>
<td>14</td>
<td>+14</td>
<td>+9</td>
<td>+4</td>
<td>56</td>
<td>7</td>
<td>+14</td>
<td>+7</td>
<td>14</td>
<td>6</td>
<td>-</td>
</tr>
<tr>
<td>19th</td>
<td>15</td>
<td>+15</td>
<td>+9</td>
<td>+5</td>
<td>60</td>
<td>8</td>
<td>+14</td>
<td>+7</td>
<td>15</td>
<td>7</td>
<td>-</td>
</tr>
<tr>
<td>20th</td>
<td>15</td>
<td>+15</td>
<td>+9</td>
<td>+5</td>
<td>60</td>
<td>8</td>
<td>+16</td>
<td>+8</td>
<td>15</td>
<td>7</td>
<td>-</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Class Level:</strong> This is the character's summoner level.</p>
<p><strong>HD:</strong> This is the total number of 10-sided (d10) Hit Dice the eidolon possesses, each of which gains a Constitution modifier, as normal.</p>
<p><strong>BAB:</strong> This is the eidolon's base attack bonus. An eidolon's base attack bonus is equal to its Hit Dice. Eidolons do not gain additional attacks using their natural weapons for a high base attack bonus.</p>
<p><strong>Good Saves and Poor Saves:</strong> These are the eidolon's base saving throw bonuses. An eidolon possesses two <Link to="/misc/good_saving_throws">good saving throws and one bad saving throw</Link>, determined by the creature's base form.</p>
<p><strong>Skills:</strong> This lists the eidolon's total skill ranks. An eidolon can assign skill ranks to any skill, but it must possess the appropriate appendages to use some skills. Eidolons with Intelligence scores above the base value modify these totals as normal (an eidolon receives a number of skill ranks equal to 6 + its Intelligence modifier per HD). An eidolon cannot have more ranks in a skill than it has Hit Dice. Eidolon skill ranks are set once chosen, even if the creature changes when the summoner gains a new level.</p>
<p><strong>Feats:</strong> This is the total number of feats possessed by an eidolon. Eidolons can select any feat that they qualify for, but they must possess the appropriate appendages to use some feats. Eidolon feats are set once chosen, even if the creature changes when the summoner gains a new level. If, due to changes, the eidolon no longer qualifies for a feat, the feat has no effect until the eidolon once again qualifies for the feat.</p>
<p><strong>Armor Bonus:</strong> The number noted here is the eidolon's base total armor bonus. This bonus may be split between an armor bonus and a natural armor bonus, as decided by the summoner. This number is modified by the eidolon's base form and some options available through its evolution pool. An eidolon cannot wear armor of any kind, as the armor interferes with the summoner's connection to the eidolon.</p>
<p><strong>Str/Dex Bonus:</strong> Add this modifier to the eidolon's Strength and Dexterity scores, as determined by its base form. Some options available through the eidolon's evolution pool might modify these scores.</p>
<p><strong>Evolution Pool:</strong> The value given in this column is the total number of points in the eidolon's evolution pool. Points from this pool can be spent on a wide variety of modifications and upgrades that add new abilities, attacks, and powers to the eidolon. Whenever the summoner gains a level, the number in this pool increases and the summoner can spend these points to change the abilities of the eidolon. These choices are not set. The summoner can change them whenever he gains a level (and through the <Link to="/spell/transmogrify">transmogrify</Link> spell).</p>
<p><strong>Max. Attacks:</strong> This indicates the maximum number of natural attacks that the eidolon is allowed to possess at the given level. If the eidolon is at its maximum, it cannot take evolutions that grant additional attacks. Attacks made with weapons, including those granted by a high base attack bonus, are counted against this maximum.</p>
<p><strong id="sidekick-unchained_eidolon-special" data-hash-target>Special:</strong> This includes a number of abilities gained by all eidolons as they increase in power. Each of these bonuses is described below.</p>
<blockquote>
<p><em>Darkvision (Ex):</em> The eidolon has darkvision with a range of 60 feet.</p>
<p><em>Link (Ex):</em> A summoner and his eidolon share a mental link allows for communication across any distance (as long as they are on the same plane). This communication is a free action, allowing the summoner to give orders to his eidolon at any time. In addition, magic items interfere with the summoner's connection to his eidolon. As a result, the summoner and his eidolon share magic item slots. For example, if the summoner is wearing a ring, his eidolon can wear no more than one ring. In case of a conflict, the items worn by the summoner remain active, and those used by the eidolon become dormant. The eidolon must possess the appropriate appendages to utilize a magic item.</p>
<p><em>Share Spells (Ex):</em> The summoner may cast a spell with a target of "you" on his eidolon (as a spell with a range of touch) instead of on himself. A summoner can cast spells on his eidolon even if the spells normally do not affect creatures of the eidolon's type (outsider). Spells cast in this way must come from the summoner spell list. This ability does not allow the eidolon to share abilities that are not spells, even if they function like spells.</p>
<p><em>Evasion (Ex):</em> If an eidolon is subjected to an attack that normally allows a Reflex save for half damage, it takes no damage if it makes a successful saving throw.</p>
<p><em>Ability Score Increase (Ex):</em> The eidolon adds 1 to one of its ability scores.</p>
<p><em>Devotion (Ex):</em> An eidolon gains a +4 morale bonus on Will saves against enchantment spells and effects.</p>
<p><em>Multiattack:</em> An eidolon gains <Link to="/feat/multiattack">Multiattack</Link> as a bonus feat if it has 3 or more natural attacks and does not already have that feat. If it does not have the requisite 3 or more natural attacks (or it is reduced to less than 3 attacks), the eidolon instead gains a second attack with one of its natural weapons, albeit at a -5 penalty. If the eidolon later gains 3 or more natural attacks, it loses this additional attack and instead gains Multiattack.</p>
<p><em>Improved Evasion (Ex):</em> When subjected to an attack that allows a Reflex saving throw for half damage, an eidolon takes no damage if it makes a successful saving throw and only half damage if the saving throw fails.</p>
</blockquote>
<h3 id="sidekick-unchained_eidolon-eidolon-skills" data-hash-target>Eidolon Skills</h3>
<p>The following skills are class skills for eidolons: Bluff (Cha), Craft (Int), Knowledge (planes) (Int), Perception (Wis), Sense Motive (Wis), and Stealth (Dex). In addition, at 1st level, the summoner can choose four additional skills to be class skills for his eidolon. Note that eidolons with a fly speed receive Fly (Dex) as a free class skill, even if they do not gain a fly speed until a later level.</p>
</>};
const _familiar = {hasJL:true,title: "Familiar", jsx: <><div className="jumpList" id="sidekick-familiar-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="sidekick-familiar-familiar-basics">Familiar Basics</InnerLink></li><li><InnerLink toTop to="sidekick-familiar-familiar-ability-descriptions">Familiar Ability Descriptions</InnerLink></li><li><InnerLink toTop to="sidekick-familiar-archetypes">Archetypes</InnerLink></li></ul></div><h2 id="sidekick-familiar-familiar">Familiar</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link><br/>A familiar is an animal chosen by a spellcaster to aid him in his study of magic. It retains the appearance, Hit Dice, base attack bonus, base save bonuses, skills, and feats of the normal animal it once was, but is now a magical beast for the purpose of effects that depend on its type. Only a normal, unmodified animal may become a familiar. An animal companion cannot also function as a familiar.</p>
<p>A familiar grants special abilities to its master. These special abilities apply only when the master and familiar are within 1 mile of each other. <Link to="/ability/familiars">Here is the list of familiars and the abilities they grant.</Link></p>
<p>Levels of different classes that are entitled to familiars stack for the purpose of determining any familiar abilities that depend on the master's level.</p>
<p>If a familiar is dismissed, lost or dies, it can be replaced 1 week later through a specialized ritual that costs 200 gp per wizard level. The ritual takes 8 hours to complete.</p>
<h3 id="sidekick-familiar-familiar-basics" data-hash-target>Familiar Basics</h3>
<p>Use the basic statistics for a creature of the familiar's kind, but with the following changes.</p>
<p><em>Hit Dice:</em> For the purpose of effects related to number of Hit Dice, use the master's character level or the familiar's normal HD total, whichever is higher.</p>
<p><em>Hit Points:</em> The familiar has half the master's total hit points (not including temporary hit points), rounded down, regardless of its actual Hit Dice.</p>
<p><em>Attacks:</em> Use the master's base attack bonus, as calculated from all his classes. Use the familiar's Dexterity or Strength modifier, whichever is greater, to calculate the familiar's melee attack bonus with natural weapons.</p>
<p>Damage equals that of a normal creature of the familiar's kind.</p>
<p><em>Saving Throws:</em> For each saving throw, use either the familiar's base save bonus (Fortitude +2, Reflex +2, Will +0) or the master's (as calculated from all his classes), whichever is better. The familiar uses its own ability modifiers to saves, and it doesn't share any of the other bonuses that the master might have on saves.</p>
<p><em>Skills:</em> For each skill in which either the master or the familiar has ranks, use either the normal skill ranks for an animal of that type or the master's skill ranks, whichever is better. In either case, the familiar uses its own ability modifiers. Regardless of a familiar's total skill modifiers, some skills may remain beyond the familiar's ability to use. Familiars treat Acrobatics, Climb, Fly, Perception, Stealth, and Swim as class skills.</p>
<h3 id="sidekick-familiar-familiar-ability-descriptions" data-hash-target>Familiar Ability Descriptions</h3>
<p>All familiars have special abilities (or impart abilities to their masters) depending on the master's combined level in classes that grant familiars, as shown on the table below. The abilities are cumulative.</p>
<ScrollContainer id="sidekick-familiar--table-0"><table>
<thead>
<tr>
<th>Master Class Level</th>
<th>Natural Armor Adj.</th>
<th>Int</th>
<th>Special</th>
</tr>
</thead>
<tbody><tr>
<td>1st-2nd</td>
<td>+1</td>
<td>6</td>
<td>Alertness, improved evasion, share spells, empathic link</td>
</tr>
<tr>
<td>3rd-4th</td>
<td>+2</td>
<td>7</td>
<td>Deliver touch spells</td>
</tr>
<tr>
<td>5th-6th</td>
<td>+3</td>
<td>8</td>
<td>Speak with master</td>
</tr>
<tr>
<td>7th-8th</td>
<td>+4</td>
<td>9</td>
<td>Speak with animals of its kind</td>
</tr>
<tr>
<td>9th-10th</td>
<td>+5</td>
<td>10</td>
<td>-</td>
</tr>
<tr>
<td>11th-12th</td>
<td>+6</td>
<td>11</td>
<td>Spell resistance</td>
</tr>
<tr>
<td>13th-14th</td>
<td>+7</td>
<td>12</td>
<td>Scry on familiar</td>
</tr>
<tr>
<td>15th-16th</td>
<td>+8</td>
<td>13</td>
<td>-</td>
</tr>
<tr>
<td>17th-18th</td>
<td>+9</td>
<td>14</td>
<td>-</td>
</tr>
<tr>
<td>19th-20th</td>
<td>+10</td>
<td>15</td>
<td>-</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Natural Armor Adj.:</strong> The number noted here is in addition to the familiar's existing natural armor bonus.</p>
<p><strong>Int:</strong> The familiar's Intelligence score.</p>
<p><strong>Alertness (Ex):</strong> While a familiar is within arm's reach, the master gains the <Link to="/feat/alertness">Alertness</Link> feat.</p>
<p><strong>Improved Evasion (Ex):</strong> When subjected to an attack that normally allows a Reflex saving throw for half damage, a familiar takes no damage if it makes a successful saving throw and half damage even if the saving throw fails.</p>
<p><strong>Share Spells:</strong> The wizard may cast a spell with a target of "You" on his familiar (as a touch spell) instead of on himself. A wizard may cast spells on his familiar even if the spells do not normally affect creatures of the familiar's type (magical beast).</p>
<p><strong>Empathic Link (Su):</strong> The master has an empathic link with his familiar to a 1 mile distance. The master can communicate empathically with the familiar, but cannot see through its eyes. Because of the link's limited nature, only general emotions can be shared. The master has the same connection to an item or place that his familiar does.</p>
<p><strong>Deliver Touch Spells (Su):</strong> If the master is 3rd level or higher, a familiar can deliver touch spells for him. If the master and the familiar are in contact at the time the master casts a touch spell, he can designate his familiar as the "toucher." The familiar can then deliver the touch spell just as the master would. As usual, if the master casts another spell before the touch is delivered, the touch spell dissipates.</p>
<p><strong>Speak with Master (Ex):</strong> If the master is 5th level or higher, a familiar and the master can communicate verbally as if they were using a common language. Other creatures do not understand the communication without magical help.</p>
<p><strong>Speak with Animals of Its Kind (Ex):</strong> If the master is 7th level or higher, a familiar can communicate with animals of approximately the same kind as itself (including dire varieties): bats with bats, cats with felines, hawks and owls and ravens with birds, lizards and snakes with reptiles, monkeys with other simians, rats with rodents, toads with amphibians, and weasels with ermines and minks. Such communication is limited by the Intelligence of the conversing creatures.</p>
<p><strong>Spell Resistance (Ex):</strong> If the master is 11th level or higher, a familiar gains spell resistance equal to the master's level + 5. To affect the familiar with a spell, another spellcaster must get a result on a caster level check (1d20 + caster level) that equals or exceeds the familiar's spell resistance.</p>
<p><strong>Scry on Familiar (Sp):</strong> If the master is 13th level or higher, he may scry on his familiar (as if casting the <em>scrying</em> spell) once per day.</p>
<h3 id="sidekick-familiar-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-familiar/ambassador">Ambassador</Link></p><p><strong>Modifies or Replaces:</strong> Alertness, Class Skills, Intelligence Score Progression</p><p>An ambassador speaks on its master's behalf and sometimes on behalf of its master's patron or other extraplanar contacts.</p></div>
<div className="archetype"><p><Link to="/arc-familiar/animal_exemplar">Animal Exemplar</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills, Deliver Touch Spells, Scry on Familiar, Speak with Animals of its Kind, Spell Resistance</p><p>An animal exemplar is a paragon of its species, able to command the loyalty of others of its kind.</p></div>
<div className="archetype"><p><Link to="/arc-familiar/arcane_amplifier">Arcane Amplifier</Link></p><p><strong>Modifies or Replaces:</strong> Alertness, Deliver Touch Spells, Improved Evasion, Scry on Familiar, Speak with Animals of its Kind, Spell Resistance</p><p>Arcane amplifiers can improve the potency of spells they deliver for their masters.</p></div>
<div className="archetype"><p><Link to="/arc-familiar/decoy">Decoy</Link></p><p><strong>Modifies or Replaces:</strong> Alertness, Class Skills, Speak with Animals of its Kind, Speak with Master, Spell Resistance</p><p>A decoy misdirects its master's enemies, allowing the master to strike by surprise.</p></div>
<div className="archetype"><p><Link to="/arc-familiar/egotist">Egotist</Link></p><p><strong>Modifies or Replaces:</strong> Alertness, Class Skills, Deliver Touch Spells, Scry on Familiar, Speak with Master, Variable Familiar Bonus</p><p>An egotist believes itself to be the real master in the relationship - the power behind the throne. It often attempts to communicate "orders" for its master as best it can, interfering in matters ranging from spell choices and tactical combat decisions to its master's love life.</p></div>
<div className="archetype"><p><Link to="/arc-familiar/elemental_familiar">Elemental Familiar</Link></p><p><strong>Modifies or Replaces:</strong> Improved Evasion, Speak with Animals of its Kind</p><p>The raw power of an elemental plane suffuses the body of an elemental familiar.</p></div>
<div className="archetype"><p><Link to="/arc-familiar/emissary">Emissary</Link></p><p><strong>Modifies or Replaces:</strong> Alertness, Class Skills, Deliver Touch Spells, Share Spells</p><p>The emissary is touched by the divine, serving as a font of wisdom and a moral compass for its master.</p></div>
<div className="archetype"><p><Link to="/arc-familiar/figment">Figment</Link></p><p><strong>Modifies or Replaces:</strong> Deliver Touch Spells, Improved Evasion, Scry on Familiar, Speak with Animals of its Kind</p><p>Figments are born from their masters' imaginations rather than being ordinary creatures that are awakened.</p></div>
<div className="archetype"><p><Link to="/arc-familiar/infiltrator">Infiltrator</Link></p><p><strong>Modifies or Replaces:</strong> Alertness, Class Skills, Improved Evasion, Share Spells, Speak with Animals of its Kind, Spell Resistance</p><p>Familiars can be skilled spies, and infiltrators are the very best of their kind at the subtle art of espionage.</p></div>
<div className="archetype"><p><Link to="/arc-familiar/mascot">Mascot</Link></p><p><strong>Modifies or Replaces:</strong> Alertness, Class Skills, Deliver Touch Spells, Empathic Link, Improved Evasion, Scry on Familiar, Share Spells, Speak with Animals of its Kind, Speak with Master, Spell Resistance</p><p>A familiar sometimes serves as the centerpiece of an adventuring party. Known as a mascot, this type of familiar eventually treats the entire party as its master.</p></div>
<div className="archetype"><p><Link to="/arc-familiar/mauler">Mauler</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills, Deliver Touch Spells, Intelligence Score Progression, Speak with Animals of its Kind, Speak with Master, Spell Resistance</p><p>While most familiars are scouts and assistants, the mauler familiar cares only for the thrill of battle.</p></div>
<div className="archetype"><p><Link to="/arc-familiar/occult_messenger">Occult Messenger</Link></p><p><strong>Modifies or Replaces:</strong> Alertness, Deliver Touch Spells</p><p>Some familiars are messengers of greater powers than themselves.</p></div>
<div className="archetype"><p><Link to="/arc-familiar/parasite">Parasite</Link></p><p><strong>Modifies or Replaces:</strong> Deliver Touch Spells, Improved Evasion, Scry on Familiar, Share Spells, Speak with Animals of its Kind, Spell Resistance</p><p>Most familiars are still something akin to normal animals, conduits for power rather than powers themselves. The parasite is one of the more disturbing exceptions.</p></div>
<div className="archetype"><p><Link to="/arc-familiar/pilferer">Pilferer</Link></p><p><strong>Modifies or Replaces:</strong> Alertness, Class Skills, Deliver Touch Spells, Improved Evasion, Speak with Animals of its Kind</p><p>Some familiars are stealthy pilferers that perform tricks of thievery or simple spying on their master's behalf.</p></div>
<div className="archetype"><p><Link to="/arc-familiar/prankster">Prankster</Link></p><p><strong>Modifies or Replaces:</strong> Alertness, Class Skills, Deliver Touch Spells, Empathic Link, Improved Evasion, Scry on Familiar, Share Spells, Spell Resistance</p><p>Some familiars love to perform pranks on their unsuspecting masters, as well as on those around their masters-allies and enemies alike.</p></div>
<div className="archetype"><p><Link to="/arc-familiar/protector">Protector</Link></p><p><strong>Modifies or Replaces:</strong> Alertness, Deliver Touch Spells, Improved Evasion, Speak with Animals of its Kind, Spell Resistance</p><p>Protector familiars are so devoted that they would give their lives for their masters.</p></div>
<div className="archetype"><p><Link to="/arc-familiar/sage">Sage</Link></p><p><strong>Modifies or Replaces:</strong> Alertness, Class Skills, Intelligence Score Progression, Natural Armor Progression, Skill Ranks</p><p>Sages are masters of useful facts, able to recall them for their masters' benefit, though this leads many to become haughty and proud.</p></div>
<div className="archetype"><p><Link to="/arc-familiar/school_familiar">School Familiar</Link></p><p><strong>Modifies or Replaces:</strong> Cannot combine with any other Archetype</p><p>School familiars are tightly bound to the power of their master's chosen school of magic.</p></div>
<div className="archetype"><p><Link to="/arc-familiar/soulbound_familiar">Soulbound Familiar</Link></p><p><strong>Modifies or Replaces:</strong> Alertness, Scry on Familiar, Speak with Animals of its Kind</p><p>Soulbound familiars are born when a master uses the magical principles behind soulbound dolls to bind a soul fragment to an animal.</p></div>
<div className="archetype"><p><Link to="/arc-familiar/valet">Valet</Link></p><p><strong>Modifies or Replaces:</strong> Alertness, Class Skills, Deliver Touch Spells, Improved Evasion, Scry on Familiar, Share Spells, Speak with Animals of its Kind</p><p>A valet is a consummate personal servant, able to fetch, deliver, and perform for its master's every need.</p></div>
</>};
const _phantom = {hasJL:true,title: "Phantom", jsx: <><div className="jumpList" id="sidekick-phantom-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="sidekick-phantom-special">Special Abilities</InnerLink></li><li><InnerLink toTop to="sidekick-phantom-phantom-statistics">Phantom Statistics</InnerLink></li><li><InnerLink toTop to="sidekick-phantom-phantom-skills">Phantom Skills</InnerLink></li><li><InnerLink toTop to="sidekick-phantom-full-manifestation-forms">Full Manifestation Forms</InnerLink></li></ul></div><h2 id="sidekick-phantom-phantom">Phantom</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures</Link><br/>A phantom's abilities are determined by the spiritualist's level and the choice of manifestations the spiritualist makes when she performs the manifestation ritual. Each phantom possesses an <Link to="/ability/emotional_focus">emotional focus</Link> that modifies these base statistics and abilities. Phantoms are considered outsiders for the purpose of determining which spells affect them.</p>
<ScrollContainer id="sidekick-phantom--table-0"><table>
<thead>
<tr>
<th>Class Level</th>
<th>HD</th>
<th>BAB</th>
<th>Good Saves</th>
<th>Bad Save</th>
<th>Skills</th>
<th>Feats</th>
<th>Armor Bonus</th>
<th>Dex/Cha Bonus</th>
<th>Slam Damage Small</th>
<th>Slam Damage Medium</th>
<th>Slam Damage Large</th>
<th>Special</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>1</td>
<td>+1</td>
<td>+2</td>
<td>+0</td>
<td>2</td>
<td>1</td>
<td>+0</td>
<td>+0</td>
<td>1d4</td>
<td>1d6</td>
<td>1d8</td>
<td>Darkvision, link, share spells</td>
</tr>
<tr>
<td>2nd</td>
<td>2</td>
<td>+2</td>
<td>+3</td>
<td>+0</td>
<td>4</td>
<td>1</td>
<td>+2</td>
<td>+1</td>
<td>1d4</td>
<td>1d6</td>
<td>1d8</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>3</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>6</td>
<td>2</td>
<td>+2</td>
<td>+1</td>
<td>1d4</td>
<td>1d6</td>
<td>1d8</td>
<td>Deliver touch spells (30 ft.)</td>
</tr>
<tr>
<td>4th</td>
<td>3</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>6</td>
<td>2</td>
<td>+2</td>
<td>+1</td>
<td>1d4</td>
<td>1d6</td>
<td>1d8</td>
<td>Magic attacks</td>
</tr>
<tr>
<td>5th</td>
<td>4</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>8</td>
<td>2</td>
<td>+4</td>
<td>+2</td>
<td>1d6</td>
<td>1d8</td>
<td>2d6</td>
<td>Ability score increase</td>
</tr>
<tr>
<td>6th</td>
<td>5</td>
<td>+5</td>
<td>+4</td>
<td>+1</td>
<td>10</td>
<td>3</td>
<td>+4</td>
<td>+2</td>
<td>1d6</td>
<td>1d8</td>
<td>2d6</td>
<td>Devotion</td>
</tr>
<tr>
<td>7th</td>
<td>6</td>
<td>+6</td>
<td>+5</td>
<td>+2</td>
<td>12</td>
<td>3</td>
<td>+6</td>
<td>+2</td>
<td>1d6</td>
<td>1d8</td>
<td>2d6</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>6</td>
<td>+6</td>
<td>+5</td>
<td>+2</td>
<td>12</td>
<td>3</td>
<td>+6</td>
<td>+3</td>
<td>1d6</td>
<td>1d8</td>
<td>2d6</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>7</td>
<td>+7</td>
<td>+5</td>
<td>+2</td>
<td>14</td>
<td>4</td>
<td>+6</td>
<td>+3</td>
<td>1d8</td>
<td>1d10</td>
<td>2d8</td>
<td>Incorporeal flight</td>
</tr>
<tr>
<td>10th</td>
<td>8</td>
<td>+8</td>
<td>+6</td>
<td>+2</td>
<td>16</td>
<td>4</td>
<td>+8</td>
<td>+4</td>
<td>1d8</td>
<td>1d10</td>
<td>2d8</td>
<td>Ability score increase</td>
</tr>
<tr>
<td>11th</td>
<td>9</td>
<td>+9</td>
<td>+6</td>
<td>+3</td>
<td>18</td>
<td>5</td>
<td>+8</td>
<td>+4</td>
<td>1d8</td>
<td>1d10</td>
<td>2d8</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>9</td>
<td>+9</td>
<td>+6</td>
<td>+3</td>
<td>18</td>
<td>5</td>
<td>+10</td>
<td>+5</td>
<td>1d8</td>
<td>1d10</td>
<td>2d8</td>
<td>Deliver touch spells (50 ft.)</td>
</tr>
<tr>
<td>13th</td>
<td>10</td>
<td>+10</td>
<td>+7</td>
<td>+3</td>
<td>20</td>
<td>5</td>
<td>+10</td>
<td>+5</td>
<td>1d10</td>
<td>2d6</td>
<td>3d6</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>11</td>
<td>+11</td>
<td>+7</td>
<td>+3</td>
<td>22</td>
<td>6</td>
<td>+10</td>
<td>+5</td>
<td>1d10</td>
<td>2d6</td>
<td>3d6</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>12</td>
<td>+12</td>
<td>+8</td>
<td>+4</td>
<td>24</td>
<td>6</td>
<td>+12</td>
<td>+6</td>
<td>1d10</td>
<td>2d6</td>
<td>3d6</td>
<td>Ability score increase</td>
</tr>
<tr>
<td>16th</td>
<td>12</td>
<td>+12</td>
<td>+8</td>
<td>+4</td>
<td>24</td>
<td>6</td>
<td>+12</td>
<td>+6</td>
<td>1d10</td>
<td>2d6</td>
<td>3d6</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>13</td>
<td>+13</td>
<td>+8</td>
<td>+4</td>
<td>26</td>
<td>7</td>
<td>+14</td>
<td>+7</td>
<td>2d6</td>
<td>2d8</td>
<td>3d8</td>
<td>-</td>
</tr>
<tr>
<td>18th</td>
<td>14</td>
<td>+14</td>
<td>+9</td>
<td>+4</td>
<td>28</td>
<td>7</td>
<td>+14</td>
<td>+7</td>
<td>2d6</td>
<td>2d8</td>
<td>3d8</td>
<td>-</td>
</tr>
<tr>
<td>19th</td>
<td>15</td>
<td>+15</td>
<td>+9</td>
<td>+5</td>
<td>30</td>
<td>8</td>
<td>+14</td>
<td>+7</td>
<td>2d6</td>
<td>2d8</td>
<td>3d8</td>
<td>-</td>
</tr>
<tr>
<td>20th</td>
<td>15</td>
<td>+15</td>
<td>+9</td>
<td>+5</td>
<td>30</td>
<td>8</td>
<td>+16</td>
<td>+8</td>
<td>2d6</td>
<td>2d8</td>
<td>3d8</td>
<td>-</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Class Level:</strong> This is the spiritualist's class level.</p>
<p><strong>HD:</strong> This is the total number of 10-sided (d10) Hit Dice the phantom possesses, each of which is modified by the phantom's Constitution, as normal.</p>
<p><strong>BAB:</strong> This is the phantom's base attack bonus. A phantom's base attack bonus is equal to its Hit Dice. Phantoms do not gain additional attacks using their natural weapons at higher base attack bonuses.</p>
<p><strong>Good/Bad Saves:</strong> These are the phantom's base saving throw bonuses. A phantom possesses two <Link to="/misc/good_saving_throws">good saving throws and one bad saving throw</Link>, determined by the phantom's emotional focus.</p>
<p><strong>Skills:</strong> This lists the phantom's total skill ranks. A phantom can assign skill ranks to any skills, but it must possess the appropriate appendage to use some skills. Phantoms with Intelligence scores above the base value modify these totals as normal (a phantom gains a number of skill ranks equal to 2 + its Intelligence modifier per Hit Die). A phantom can't have more ranks in a skill than it has Hit Dice. Phantom skill ranks are set once chosen.</p>
<p><strong>Feats:</strong> This is the total number of feats possessed by a phantom. A phantom can select any feat it qualifies for, but it must possess the appropriate appendage in order to use some feats. Phantom feats are set once chosen.</p>
<p><strong>Armor Bonus:</strong> The number noted here is the increase to the phantom's natural armor bonus when it manifests as an ectoplasmic creature, and its deflection bonus when it manifests as an incorporeal creature. An ectoplasmic or incorporeal manifested phantom can't wear armor of any kind, as the armor interferes with the spiritualist's connection with the phantom; a phantom may seem to be wearing armor, but this appearance is just an illusory part of its appearance.</p>
<p><strong>Dex/Cha Bonus:</strong> Add this bonus to the phantom's Dexterity and Charisma scores.</p>
<p><strong>Slam Damage:</strong> Phantoms have two slam natural weapon attacks. Those attacks' damage is based on the size of the phantom and is sometimes modified by the abilities of the phantom's emotional focus. Often, an individual phantom manifests in a form that makes it appear as if it had weapons or other natural attacks. Regardless of their apparent forms, the phantom's attacks still deal the slam attack damage listed.</p>
<p><strong id="sidekick-phantom-special" data-hash-target>Special:</strong> This column includes a number of abilities gained by all phantoms as they increase in power. Each of these bonuses is described below.</p>
<blockquote>
<p><em>Darkvision (Ex):</em> The phantom has darkvision out to a range of 60 feet.</p>
<p><em>Link (Su):</em> A spiritualist and her phantom share a mental link that allows for communication across distances (as long as they are on the same plane). This communication is a free action that can be performed even when it isn't the spiritualist's turn, but the spiritualist and the phantom must both be conscious to communicate in this way. This allows the spiritualist to give orders to her phantom at any time. Magic items interfere with a spiritualist's connection to her phantom; as a result, the spiritualist and her phantom share magic item slots. For example, if the spiritualist is wearing a magic ring, her phantom can wear only one magic ring. In the case of a conflict, the items worn by the spiritualist remain active, and those worn by the phantom become dormant. The phantom must possess the appropriate appendages to utilize a magic item.</p>
<p><em>Share Spells (Su):</em> The spiritualist can cast a spell with a target of "you" on her phantom (as a spell with a range of touch) instead of on herself. A spiritualist can cast spells from the spiritualist spell list on her phantom even if the spells normally do not affect creatures of the phantom's type (outsider). This ability does not allow the phantom to share abilities that aren't spells, even if they function like spells.</p>
<p><em>Deliver Touch Spells (Su):</em> The phantom can deliver touch spells for the spiritualist when fully manifested in incorporeal or ectoplasmic form. The spiritualist and the phantom need not be in contact to accomplish this, but the phantom must be within 30 feet and the spiritualist must be able to see the phantom. If the spiritualist is 12th level or higher, the phantom can deliver touch spells within 50 feet of the spiritualist. The spiritualist can cast the spell, and then the phantom can deliver the touch as an immediate action. If the touch spell deals damage, the phantom must make the attack roll. The phantom can't hold the charge of a touch spell cast by the spiritualist using this ability. If the spell is delivered to the phantom, it must touch a target or the spell is lost. If the spell allows you to touch up to six willing targets, the phantom can accomplish this with an immediate action, but all of the willing targets must be within the phantom's melee reach at the time.</p>
<p><em>Magic Attacks (Su):</em> When the phantom manifests in ectoplasmic form, it treats its slam attacks as if they were magic for the purposes of overcoming damage reduction. If the spiritualist is 10th level or higher, all of the phantom's weapons are treated as the alignment of the phantom for the purpose of overcoming damage reduction.</p>
<p><em>Ability Score Increase (Ex):</em> The phantom adds 1 to one of its ability scores.</p>
<p><em>Devotion (Ex):</em> The phantom gains a +4 morale bonus on Will saves against enchantment spells and effects.</p>
<p><em>Incorporeal Flight (Su):</em> When the phantom manifests in incorporeal form, it has a fly speed of 40 feet (good).</p>
</blockquote>
<h3 id="sidekick-phantom-phantom-statistics" data-hash-target>Phantom Statistics</h3>
<p>A spiritualist's phantom is typically the same size as the spiritualist. A spiritualist can have a phantom that is one size category smaller than her, and if she is Small or smaller, she can have a phantom one size category larger than her. A phantom is always a humanoid-shaped creature, and looks somewhat like it did in its past life while manifested, though the emotional turmoil of its existence usually warps its appearance in some way.</p>
<p>Every phantom has the following base statistics, which are then modified by its size and <Link to="/ability/emotional_focus">emotional focus</Link>.</p>
<blockquote>
<p><strong>Type</strong> Outsider (phantom); <strong>Size</strong> As spiritualist or one size category smaller (or one size category larger, if the spiritualist is Small or smaller); <strong>Speed</strong> 30 ft.; <strong>AC</strong> +2 dodge (in incorporeal form) or +2 natural armor (in ectoplasmic form); <strong>Attack</strong> 2 slams (1d6 or 1d4 if size Small); <strong>Ability Scores</strong> Str 12, Dex 14, Con 13, Int 7, Wis 10, Cha 13.</p>
</blockquote>
<h3 id="sidekick-phantom-phantom-skills" data-hash-target>Phantom Skills</h3>
<p>The following skills are class skills for the phantom: Bluff (Cha), Craft (Int), Fly (Dex), Intimidate (Cha), Knowledge (planes) (Int), Perception (Wis), Sense Motive (Wis), and Stealth (Dex). In addition, at 1st level, the spiritualist can choose one additional skill as a class skill for her phantom. The phantom also gains two class skills based on its <em>emotional focus.</em> The phantom automatically gains bonus ranks in these two skills as the spiritualist increases in level-its number of ranks in these skills is always equal to its number of Hit Dice.</p>
<h3 id="sidekick-phantom-full-manifestation-forms" data-hash-target>Full Manifestation Forms</h3>
<p>Each time she fully manifests her phantom, the spiritualist must choose whether to manifest the phantom in either ectoplasmic or incorporeal form. The phantom gains the statistics presented above, modified by the phantom's emotional focus and by the type of manifestation the spiritualist chooses.</p>
<p><strong>Ectoplasmic:</strong> When the spiritualist manifests her phantom in ectoplasmic form, the phantom gains the following abilities.</p>
<blockquote>
<p><em>Damage Reduction:</em> A phantom manifested in ectoplasmic form has DR 5/slashing. When the spiritualist reaches 5th level, the phantom gains DR 5/magic. At 10th level, the damage resistance increases to 10/magic. At 15th level, it increases to 15/magic, and at 20th level, the damage reduction becomes DR 15/-.</p>
<p><em>Phase Lurch (Su):</em> A phantom in ectoplasmic form has the ability to pass through walls or material obstacles. In order to use this ability, it must begin and end its turn outside whatever wall or obstacle it's moving through. An ectoplasmic phantom can't move through corporeal creatures with this ability, and its movement speed is halved while moving through a wall or obstacle. Any surface it moves through is coated with a thin, silvery mucus that lingers for 1 minute.</p>
</blockquote>
<p><strong>Incorporeal:</strong> When the spiritualist chooses to manifest the phantom in incorporeal form, the phantom appears within 30 feet of the spiritualist as a ghostly apparition. It gains the incorporeal subtype, including a deflection bonus to AC equal to its Charisma modifier. Since it isn't an undead creature, it takes no damage from holy water or positive energy. Unlike other incorporeal creatures, an incorporeal phantom can't attack corporeal creatures, except to deliver touch-attack spells using the <em>deliver touch spell</em> ability. An incorporeal manifested phantom can make slam attacks against other incorporeal creatures as if it were in ectoplasmic form.</p>
</>};
export default {animal_companion:_animal_companion,drake:_drake,eidolon:_eidolon,unchained_eidolon:_unchained_eidolon,familiar:_familiar,phantom:_phantom}