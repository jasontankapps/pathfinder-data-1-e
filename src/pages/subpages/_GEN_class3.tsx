import {IonIcon} from '@ionic/react';
import DisplayTable from '../../components/DisplayTable';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _unchained_monk = {hasJL:true,title: "Unchained Monk", jsx: <><div className="jumpList" id="class-unchained_monk-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-unchained_monk-ac-bonus-ex">AC Bonus</InnerLink></li><li><InnerLink toTop to="class-unchained_monk-bonus-feat">Bonus Feat</InnerLink></li><li><InnerLink toTop to="class-unchained_monk-flurry-of-blows-ex">Flurry of Blows</InnerLink></li><li><InnerLink toTop to="class-unchained_monk-stunning-fist-ex">Stunning Fist</InnerLink></li><li><InnerLink toTop to="class-unchained_monk-unarmed-strike-ex">Unarmed Strike</InnerLink></li><li><InnerLink toTop to="class-unchained_monk-evasion-ex">Evasion</InnerLink></li><li><InnerLink toTop to="class-unchained_monk-fast-movement-ex">Fast Movement</InnerLink></li><li><InnerLink toTop to="class-unchained_monk-ki-pool-su">Ki Pool</InnerLink></li><li><InnerLink toTop to="class-unchained_monk-ki-powers-su">Ki Powers and Still Mind</InnerLink></li><li><InnerLink toTop to="class-unchained_monk-purity-of-body-ex">Purity of Body and Style Strikes</InnerLink></li><li><InnerLink toTop to="class-unchained_monk-improved-evasion-ex">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-unchained_monk-ex-monks">Ex-Monks</InnerLink></li><li><InnerLink toTop to="class-unchained_monk-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-unchained_monk-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-unchained_monk-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-unchained_monk-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-unchained_monk-unchained-monk">Unchained Monk</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 14</Link></p>
<p>Physical and mental perfection: that is the life goal of every monk. For these skilled warriors, martial prowess and mental clarity are one and the same. Capable of pummeling foes with both fist and weapon, monks are among the more versatile combatants on the battlefield. Monks are also able to harness their ki, a spiritual life force that resides within, allowing them to perform amazing acts of acrobatics and mystical skill. All of this depends on incredible discipline and focus, and monks spend their entire lives perfecting these arts.</p>
<blockquote>
<p><strong className="hl">Unchained:</strong> Much of the <Link to="/class/monk">monk</Link> has been reworked, including its base attack bonus, Hit Die, saves, and many of its special abilities. The result is a version of the monk that not only is easier to play, but also possesses a great deal more versatility. Flurry of blows is now much simpler to use in play. Many of the higher-level abilities of the monk, such as abundant step and quivering palm, have been incorporated into the new system of ki powers. As a monk advances in level, he can select from a variety of ki powers, allowing the player to truly customize his character.</p>
</blockquote>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any lawful</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td>NG</td><td>N</td><td>NE</td></tr><tr><td>CG</td><td>CN</td><td>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d10</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>1d6 &times; 10 gp (average 35 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>4 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/escape_artist">Escape Artist</Link>, <Link to="/skill/ride">Ride</Link>, <Link to="/skill/stealth">Stealth</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_history">Knowledge (history)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/perform_any">Perform (any)</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-unchained_monk-class-features">Class Features</h3>
<ScrollContainer id="class-unchained_monk--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Base Attack Bonus</th>
<th>Fort Save</th>
<th>Ref Save</th>
<th>Will Save</th>
<th>Special</th>
<th>Unarmed Damage</th>
<th>AC Bonus</th>
<th>Fast Movement</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+1</td>
<td>+2</td>
<td>+2</td>
<td>+0</td>
<td>Bonus feat, flurry of blows (bonus attack), stunning fist, unarmed strike</td>
<td>1d6</td>
<td>+0</td>
<td>+0 ft.</td>
</tr>
<tr>
<td>2nd</td>
<td>+2</td>
<td>+3</td>
<td>+3</td>
<td>+0</td>
<td>Bonus feat, evasion</td>
<td>1d6</td>
<td>+0</td>
<td>+0 ft.</td>
</tr>
<tr>
<td>3rd</td>
<td>+3</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>Fast movement, ki pool, ki strike (magic)</td>
<td>1d6</td>
<td>+0</td>
<td>+10 ft.</td>
</tr>
<tr>
<td>4th</td>
<td>+4</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>Ki power, still mind</td>
<td>1d8</td>
<td>+1</td>
<td>+10 ft.</td>
</tr>
<tr>
<td>5th</td>
<td>+5</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>Purity of body, style strike (1/round)</td>
<td>1d8</td>
<td>+1</td>
<td>+10 ft.</td>
</tr>
<tr>
<td>6th</td>
<td>+6/+1</td>
<td>+5</td>
<td>+5</td>
<td>+2</td>
<td>Bonus feat, ki power</td>
<td>1d8</td>
<td>+1</td>
<td>+20 ft.</td>
</tr>
<tr>
<td>7th</td>
<td>+7/+2</td>
<td>+5</td>
<td>+5</td>
<td>+2</td>
<td>Ki strike (cold iron/silver)</td>
<td>1d8</td>
<td>+1</td>
<td>+20 ft.</td>
</tr>
<tr>
<td>8th</td>
<td>+8/+3</td>
<td>+6</td>
<td>+6</td>
<td>+2</td>
<td>Ki power</td>
<td>1d10</td>
<td>+2</td>
<td>+20 ft.</td>
</tr>
<tr>
<td>9th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+6</td>
<td>+3</td>
<td>Improved evasion, style strike</td>
<td>1d10</td>
<td>+2</td>
<td>+30 ft.</td>
</tr>
<tr>
<td>10th</td>
<td>+10/+5</td>
<td>+7</td>
<td>+7</td>
<td>+3</td>
<td>Bonus feat, ki power, ki strike (lawful)</td>
<td>1d10</td>
<td>+2</td>
<td>+30 ft.</td>
</tr>
<tr>
<td>11th</td>
<td>+11/+6/+1</td>
<td>+7</td>
<td>+7</td>
<td>+3</td>
<td>Flurry of blows (bonus attack)</td>
<td>1d10</td>
<td>+2</td>
<td>+30 ft.</td>
</tr>
<tr>
<td>12th</td>
<td>+12/+7/+2</td>
<td>+8</td>
<td>+8</td>
<td>+4</td>
<td>Ki power</td>
<td>2d6</td>
<td>+3</td>
<td>+40 ft.</td>
</tr>
<tr>
<td>13th</td>
<td>+13/+8/+3</td>
<td>+8</td>
<td>+8</td>
<td>+4</td>
<td>Style strike, tongue of the sun and moon</td>
<td>2d6</td>
<td>+3</td>
<td>+40 ft.</td>
</tr>
<tr>
<td>14th</td>
<td>+14/+9/+4</td>
<td>+9</td>
<td>+9</td>
<td>+4</td>
<td>Bonus feat, ki power</td>
<td>2d6</td>
<td>+3</td>
<td>+40 ft.</td>
</tr>
<tr>
<td>15th</td>
<td>+15/+10/+5</td>
<td>+9</td>
<td>+9</td>
<td>+5</td>
<td>Style strike (2/round)</td>
<td>2d6</td>
<td>+3</td>
<td>+50 ft.</td>
</tr>
<tr>
<td>16th</td>
<td>+16/+11/+6/+1</td>
<td>+10</td>
<td>+10</td>
<td>+5</td>
<td>Ki power, ki strike (adamantine)</td>
<td>2d8</td>
<td>+4</td>
<td>+50 ft.</td>
</tr>
<tr>
<td>17th</td>
<td>+17/+12/+7/+2</td>
<td>+10</td>
<td>+10</td>
<td>+5</td>
<td>Style strike, timeless body</td>
<td>2d8</td>
<td>+4</td>
<td>+50 ft.</td>
</tr>
<tr>
<td>18th</td>
<td>+18/+13/+8/+3</td>
<td>+11</td>
<td>+11</td>
<td>+6</td>
<td>Bonus feat, ki power</td>
<td>2d8</td>
<td>+4</td>
<td>+60 ft.</td>
</tr>
<tr>
<td>19th</td>
<td>+19/+14/+9/+4</td>
<td>+11</td>
<td>+11</td>
<td>+6</td>
<td>Flawless mind</td>
<td>2d8</td>
<td>+4</td>
<td>+60 ft.</td>
</tr>
<tr>
<td>20th</td>
<td>+20/+15/+10/+5</td>
<td>+12</td>
<td>+12</td>
<td>+6</td>
<td>Ki power, perfect self</td>
<td>2d10</td>
<td>+5</td>
<td>+60 ft.</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={9}>Weapons</th><td><Link to="/eq-weapon/club">club</Link></td><td><Link to="/eq-weapon/dagger">dagger</Link></td></tr><tr><td><Link to="/eq-weapon/light_crossbow">light crossbow</Link></td><td><Link to="/eq-weapon/heavy_crossbow">heavy crossbow</Link></td></tr><tr><td><Link to="/eq-weapon/handaxe">handaxe</Link></td><td><Link to="/eq-weapon/javelin">javelin</Link></td></tr><tr><td><Link to="/eq-weapon/kama">kama</Link></td><td><Link to="/eq-weapon/nunchaku">nunchaku</Link></td></tr><tr><td><Link to="/eq-weapon/quarterstaff">quarterstaff</Link></td><td><Link to="/eq-weapon/sai">sai</Link></td></tr><tr><td><Link to="/eq-weapon/short_sword">short sword</Link></td><td><Link to="/eq-weapon/shortspear">shortspear</Link></td></tr><tr><td><Link to="/eq-weapon/shuriken">shuriken</Link></td><td><Link to="/eq-weapon/siangham">siangham</Link></td></tr><tr><td><Link to="/eq-weapon/sling">sling</Link></td><td><Link to="/eq-weapon/spear">spear</Link></td></tr><tr><td colSpan={2}>Any weapon with the <Link to="/misc/monk">monk</Link> special weapon quality.</td></tr><tr><th>Armor?</th><td colSpan={2}>No</td></tr><tr><th>Shields?</th><td colSpan={2}>No</td></tr><tr><td colSpan={3} className="sw se">Wearing armor or using a shield can stifle some of your abilities.</td></tr></tbody></table>
<Ability id="class-unchained_monk-ac-bonus-ex" icon={["armor-upgrade"]}>
<Pair single id="class-unchained_monk-ac-bonus-ex">AC Bonus (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">When unarmored and unencumbered, you add your Wisdom bonus (if any) to your AC and CMD.</Pair>
<Pair title="At 4th Level">You gain an additional bonus to AC and CMD equal to <Link to="/misc/one_fourth">one-fourth</Link> of your monk level.</Pair>
<Pair title="Special">These bonuses to AC apply even against touch attacks or when you're <Link to="/rule/flat_footed">flat-footed</Link>. You lose these bonuses when immobilized or helpless, when you wear any armor, when you carry a shield, or when you carry a medium or heavy load.</Pair>
</Ability>
<Ability id="class-unchained_monk-bonus-feat" icon={["stairs-goal"]}>
<Pair single id="class-unchained_monk-bonus-feat">Bonus Feat</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You gain a bonus feat from the following list: <Link to="/feat/catch_off_guard">Catch Off-Guard</Link>, <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/deflect_arrows">Deflect Arrows</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/improved_grapple">Improved Grapple</Link>, <Link to="/feat/ki_diversity">Ki Diversity</Link>, <Link to="/feat/scorpion_style">Scorpion Style</Link>, and <Link to="/feat/throw_anything">Throw Anything</Link>. You need not have any of the prerequisites normally required for these feats to select them.</Pair>
<Pair title="At 2nd Level">You gain another bonus feat from the list.</Pair>
<Pair title="At 6th Level">You gain another bonus feat from the list. You add these feats to the list: <Link to="/feat/gorgons_fist">Gorgon's Fist</Link>, <Link to="/feat/hamatulatsu">Hamatulatsu</Link>, <Link to="/feat/horn_of_the_criosphinx">Horn of the Criosphinx</Link>, <Link to="/feat/improved_bull_rush">Improved Bull Rush</Link>, <Link to="/feat/improved_disarm">Improved Disarm</Link>, <Link to="/feat/improved_feint">Improved Feint</Link>, <Link to="/feat/improved_trip">Improved Trip</Link>, and <Link to="/feat/mobility">Mobility</Link>.</Pair>
<Pair title="At 10th Level">You gain another bonus feat from the list. You add these feats to the list: <Link to="/feat/improved_critical">Improved Critical</Link>, <Link to="/feat/ki_throw">Ki Throw</Link>, <Link to="/feat/medusas_wrath">Medusa's Wrath</Link>, <Link to="/feat/snatch_arrows">Snatch Arrows</Link>, and <Link to="/feat/spring_attack">Spring Attack</Link>.</Pair>
<Pair title="At 14th Level">You gain another bonus feat from the list. You add these feats to the list: <Link to="/feat/binding_throw">Binding Throw</Link> and <Link to="/feat/improved_ki_throw">Improved Ki Throw</Link>.</Pair>
<Pair title="At 18th Level">You gain another bonus feat from the list.</Pair>
</Ability>
<div className="sideNoteWrap singular optional elephant"><ScrollContainer id="class-unchained_monk--table-1"><table><tbody><tr><ThLink scope="row" to="/rule/the_elephant_in_the_room"><IonIcon aria-label="The Elephant in the Room" icon="/icons/elephant.svg" /></ThLink><td><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link><br/>At 1st level, 2nd level, and every 4 levels thereafter, a monk can select a bonus feat. These feats must be taken from the following list: <Link to="/feat/catch_off_guard">Catch Off-Guard</Link>, <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/deflect_arrows">Deflect Arrows</Link>, <Link to="/feat/dodge">Dodge</Link>, and <strong className="hl"><Link to="/rule/scorpion_stance">Scorpion Stance</Link></strong>. At 6th level, the following feats are added to the list: <strong className="hl"><Link to="/rule/deft_maneuvers">Deft Maneuvers</Link></strong>, <Link to="/feat/gorgons_fist">Gorgon's Fist</Link>, <Link to="/feat/greater_grapple">Greater Grapple</Link>, and <strong className="hl"><Link to="/rule/powerful_maneuvers">Powerful Maneuvers</Link></strong>. At 10th level, the following feats are added to the list: <Link to="/feat/improved_critical">Improved Critical</Link>, <Link to="/feat/medusas_wrath">Medusa's Wrath</Link>, <Link to="/feat/snatch_arrows">Snatch Arrows</Link>, and <Link to="/feat/spring_attack">Spring Attack</Link>. A monk need not have any of the prerequisites normally required for these feats to select them.</p>
</td></tr></tbody></table></ScrollContainer></div><Ability id="class-unchained_monk-flurry-of-blows-ex" icon={["mailed-fist"]}>
<Pair single id="class-unchained_monk-flurry-of-blows-ex">Flurry of Blows (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Full-Round Action">You can make a flurry of blows as a full-attack action. When doing this, you can make one additional attack at your highest base attack bonus. This additional attack stacks with the bonus attacks from <Link to="/spell/haste">haste</Link> and other similar effects. When using this ability, you can make these attacks with any combination of your unarmed strikes and weapons that have the monk special weapon quality. You take no penalty for using multiple weapons when making a flurry of blows, but you do not gain any additional attacks beyond what's already granted by the flurry for doing so. (You can still gain additional attacks from a high base attack bonus, from this ability, and from <em>haste</em> and similar effects).</Pair>
<Pair title="At 11th Level">You can now make two additional attacks at your highest base attack bonus during your flurry of blows. This still stacks with <em>haste</em> and similar effects.</Pair>
</Ability>
<Ability id="class-unchained_monk-stunning-fist-ex" icon={["mailed-fist"]}>
<Pair single id="class-unchained_monk-stunning-fist-ex">Stunning Fist (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You gain <Link to="/feat/stunning_fist">Stunning Fist</Link> as a bonus feat, even if you don't meet the prerequisites.</Pair>
<Pair title="At 4th Level">You gain the ability to apply <Link to="/misc/fatigue">fatigue</Link> to the target of your Stunning Fist. This condition replaces stunning the target for 1 round, and a successful saving throw still negates the effect.</Pair>
<Pair title="At 8th Level">You can now make the target <Link to="/misc/sickened">sickened</Link> for 1 minute.</Pair>
<Pair title="At 12th Level">You can make the target <Link to="/misc/staggered">staggered</Link> for 1d6+1 rounds</Pair>
<Pair title="At 16th Level">You can permanently <Link to="/misc/blind">blind</Link> or <Link to="/misc/deafen">deafen</Link> the target.</Pair>
<Pair title="At 20th Level">You can <Link to="/rule/paralyze">paralyze</Link> the target for 1d6+1 rounds.</Pair>
<Pair title="Special">You must choose which condition will apply before the attack roll is made. These effects do not stack with themselves (a creature fatigued by Stunning Fist cannot become <Link to="/misc/exhausted">exhausted</Link> if hit by Stunning Fist again), but additional hits do increase the duration.</Pair>
</Ability>
<Ability id="class-unchained_monk-unarmed-strike-ex" icon={["mailed-fist"]}>
<Pair single id="class-unchained_monk-unarmed-strike-ex">Unarmed Strike (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You gain <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat. Your attacks can be with fists, elbows, knees, and feet. This means that you can make unarmed strikes with your hands full. There is no such thing as an off-hand attack when you're striking unarmed. You can apply your full Strength bonus on damage rolls for all your unarmed strikes. Your unarmed strikes deal lethal damage, although you can choose to deal nonlethal damage with no penalty on the attack roll. You can make this choice while grappling as well.</Pair>
<Pair title="Special">Your unarmed strike is treated as both a manufactured weapon and a natural weapon for the purpose of spells and effects that enhance or improve either manufactured weapons or natural weapons. The damage of your strike is determined by your size and level, shown on the chart below.</Pair>
</Ability>
<div className="p">
<ScrollContainer id="class-unchained_monk--table-2"><table>
<thead>
<tr>
<th>Level</th>
<th>Damage (Small Monk)</th>
<th>Damage (Medium)</th>
<th>Damage (Large)</th>
</tr>
</thead>
<tbody><tr>
<td>1st-3rd</td>
<td>1d4</td>
<td>1d6</td>
<td>1d8</td>
</tr>
<tr>
<td>4th-7th</td>
<td>1d6</td>
<td>1d8</td>
<td>2d6</td>
</tr>
<tr>
<td>8th-11th</td>
<td>1d8</td>
<td>1d10</td>
<td>2d8</td>
</tr>
<tr>
<td>12th-15th</td>
<td>1d10</td>
<td>2d6</td>
<td>3d6</td>
</tr>
<tr>
<td>16th-19th</td>
<td>2d6</td>
<td>2d8</td>
<td>3d8</td>
</tr>
<tr>
<td>20th</td>
<td>2d8</td>
<td>2d10</td>
<td>4d8</td>
</tr>
</tbody></table></ScrollContainer>
</div>
<div className="sideNoteWrap singular optional elephant"><ScrollContainer id="class-unchained_monk--table-3"><table><tbody><tr><ThLink scope="row" to="/rule/the_elephant_in_the_room"><IonIcon aria-label="The Elephant in the Room" icon="/icons/elephant.svg" /></ThLink><td><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link><br/>Instead of Improved Unarmed Strike, monks gain <strong className="hl"><Link to="/rule/unarmed_combatant">Unarmed Combatant</Link></strong> as a bonus feat.</p>
</td></tr></tbody></table></ScrollContainer></div><Ability id="class-unchained_monk-evasion-ex" icon={["armor-upgrade"]}>
<Pair single id="class-unchained_monk-evasion-ex" flavor="A monk can avoid damage from many area-effect attacks.">Evasion (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">If you succeed at a Reflex saving throw against an attack that normally deals half damage on a successful save, you instead take no damage.</Pair>
<Pair title="Special"><em>Evasion</em> can be used only if you are wearing light armor or no armor, and are also not <Link to="/misc/helpless">helpless</Link>.</Pair>
</Ability>
<Ability id="class-unchained_monk-fast-movement-ex" icon={["upgrade"]}>
<Pair single id="class-unchained_monk-fast-movement-ex">Fast Movement (Ex)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">You gain an enhancement bonus to your land speed equal to <Link to="/misc/one_third">one-third</Link> of your monk level &times; 10.</Pair>
<Pair title="Special">If you wear armor or are carrying a medium or heavy load, you lose this extra speed.</Pair>
</Ability>
<Ability id="class-unchained_monk-ki-pool-su" icon={["magic-swirl","mailed-fist"]}>
<Pair single id="class-unchained_monk-ki-pool-su" flavor="A monk gains supernatural energy he can use to accomplish amazing feats.">Ki Pool (Su)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">You gain a pool of ki points. The number of points in your ki pool is equal to 1/2 your monk level + your Wisdom modifier.</Pair>
<Pair title="Swift Action">By spending 1 point from your ki pool, you can make one additional unarmed strike at your highest attack bonus when making a flurry of blows attack. This bonus attack stacks with all bonus attacks gained from flurry of blows, as well as those from <em>haste</em> and similar effects.</Pair>
<Pair title="Passive Ability">As long as you have at least 1 point in your ki pool, you can make a <em>ki strike,</em> which allows your unarmed attacks to be treated as magic weapons for the purpose of overcoming <Link to="/rule/damage_reduction">damage reduction</Link>.</Pair>
<Pair title="At 7th Level">Your <em>ki strikes</em> are also treated as cold iron and silver for the purpose of overcoming damage reduction.</Pair>
<Pair title="At 10th Level">Your <em>ki strikes</em> are also treated as lawful weapons for the purpose of overcoming damage reduction.</Pair>
<Pair title="At 16th Level">Your <em>ki strikes</em> are treated as <Link to="/eq-material/adamantine">adamantine</Link> weapons for the purpose of overcoming damage reduction and bypassing <Link to="/rule/hardness">hardness</Link>.</Pair>
<Pair title="Special">You gain additional powers that consume points from your ki pool as you gain levels. The ki pool is replenished each morning after 8 hours of rest or meditation; these hours do not need to be consecutive.</Pair>
</Ability>
<Ability id="class-unchained_monk-ki-powers-su" icon={["stairs-goal"]}>
<Pair single id="class-unchained_monk-ki-powers-su" flavor="A monk gains powers that allow him to perform amazing feats of mystical power and acrobatic prowess by expending points from his ki pool.">Ki Powers (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">You gain one <Link to="/ability/ki_powers">ki power</Link> of your choice. Once a ki power is selected, it cannot be changed.</Pair>
<Pair title="Special">Some ki powers require you to be of a specific level or higher before they can be chosen. Unless otherwise noted, you cannot select an individual ki power more than once.</Pair>
</Ability>
<Ability id="class-unchained_monk-still-mind-ex" icon={["armor-upgrade"]}>
<Pair single id="class-unchained_monk-still-mind-ex">Still Mind (Ex)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">You gain a +2 bonus on saving throws against enchantment spells and effects.</Pair>
</Ability>
<Ability id="class-unchained_monk-purity-of-body-ex" icon={["armor-upgrade"]}>
<Pair single id="class-unchained_monk-purity-of-body-ex">Purity of Body (Ex)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">You gain immunity to all diseases, including supernatural and magical diseases.</Pair>
</Ability>
<Ability id="class-unchained_monk-style-strike-ex" icon={["mailed-fist"]}>
<Pair single id="class-unchained_monk-style-strike-ex">Style Strike (Ex)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">You learn one type of <Link to="/ability/style_strikes">style strike</Link>. Whenever you make a flurry of blows, you can designate one of your unarmed strikes as a style strike. This attack is resolved as normal, but it has an additional effect depending on the type of strike chosen.</Pair>
<Pair title="At 9th Level">You learn an additional style strike.</Pair>
<Pair title="At 13th Level">You learn an additional style strike.</Pair>
<Pair title="At 15th Level">You can designate up to two of your unarmed strikes each round as a style strike, and each one can be a different type.</Pair>
<Pair title="At 17th Level">You learn an additional style strike.</Pair>
<Pair title="Special">You must choose which style strike to apply before the attack roll is made.</Pair>
</Ability>
<Ability id="class-unchained_monk-improved-evasion-ex" icon={["armor-upgrade"]}>
<Pair single id="class-unchained_monk-improved-evasion-ex">Improved Evasion (Ex)</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">Your <em>evasion</em> improves. You still take no damage on successful Reflex saving throws against attacks, but henceforth you take only half damage on failed saves.</Pair>
<Pair title="Special">You do not gain the benefit of <em>improved evasion</em> while helpless.</Pair>
</Ability>
<Ability id="class-unchained_monk-tongue-of-the-sun-and-moon-ex" icon={["stairs-goal"]}>
<Pair single id="class-unchained_monk-tongue-of-the-sun-and-moon-ex">Tongue of the Sun and Moon (Ex)</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Passive Ability">You can understand and speak with any living creature, as if under a permanent <Link to="/spell/tongues">tongues</Link> effect.</Pair>
</Ability>
<Ability id="class-unchained_monk-timeless-body-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="class-unchained_monk-timeless-body-ex">Timeless Body (Ex)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">You no longer take penalties to your ability scores for aging and cannot be magically <Link to="/rule/age">aged</Link>. Any such penalties that you have already taken, however, remain in place.</Pair>
<Pair title="Special">Age bonuses still accrue, and you still die of old age when your time is up.</Pair>
</Ability>
<Ability id="class-unchained_monk-flawless-mind" icon={["armor-upgrade","rolling-dices"]}>
<Pair single id="class-unchained_monk-flawless-mind" flavor="A monk gains total control over his mental faculties.">Flawless Mind</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Passive Ability">Whenever you attempt a Will save, you can roll twice and take the better result. If you fail a Will saving throw against a spell or effect that has a duration longer than 1 hour, you can attempt a new saving throw at the end of each hour to end the effect.</Pair>
</Ability>
<Ability id="class-unchained_monk-perfect-self" icon={["upgrade","armor-upgrade","stairs-goal"]}>
<Pair single id="class-unchained_monk-perfect-self">Perfect Self</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You become a magical creature. You are forevermore treated as an outsider rather than a humanoid (or whatever your original creature type was) for the purpose of spells and magical effects. You gain DR 10/chaotic. Unlike other outsiders, you can still be brought back from the dead as if you were a member of your previous creature type.</Pair>
<Pair title="Ability">You gain the ability to enter a state of perfect calm. During this time, you can take no actions, but you regain ki at the rate of 1 point per 10 minutes spent at calm. You cannot use this ability to gain an amount of ki in excess of your maximum.</Pair>
</Ability>
<h3 id="class-unchained_monk-ex-monks" data-hash-target>Ex-Monks</h3>
<p>A monk who becomes nonlawful cannot gain new levels as a monk but retains all monk abilities.</p>
<h3 id="class-unchained_monk-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-unchained_monk--table-4"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Ki Sage (Su)</td><td>At 20th level, the character is fully attuned to his own body and the ki that flows within. The character gains two <Link to="/ability/ki_powers">ki powers</Link> from those available to the unchained monk, treating his character level as his monk level for the purpose of any requirements. In addition, his ki pool increases by four. This capstone is available to any class with a ki pool.</td></tr>
<tr><td>Old Dog, New Tricks (Ex)</td><td>At 20th level, the character shows that a true warrior always has one more surprise the enemy hasn't seen. The character gains four <Link to="/main/combat_feat">combat feats</Link>. This capstone is available to characters of any class that gains at least four bonus combat feats.</td></tr>
<tr><td>Old Master (Ex)</td><td>At 20th level, the monk has reached the highest levels of his martial arts school. The monk gains one additional attack at his highest base attack bonus when using flurry of blows, and his dodge bonus to AC increases by 2.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-unchained_monk-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-unchained_monk-ref-A-1" id="class-unchained_monk-ref-A-1" data-hash-target to="class-unchained_monk-A">1</InnerLink></sup></p>
</div>
<h3 id="class-unchained_monk-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-monk/black_asp_uc">Black Asp (UC)</Link></p><p><strong>Modifies or Replaces:</strong> Stunning Fist; Still Mind</p><p>The black asps are a sinister order of monks who train as assassins and infiltrators with no need for weapons to achieve their goals.</p></div>
<div className="archetype"><p><Link to="/arc-monk/brazen_disciple_uc">Brazen Disciple (UC)</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; 1st, 6th-level Bonus Feats; Still Mind; 12th-level Ki Power; Perfect Self</p><p>Brazen disciples use deception in their fighting style, and many go a step further, incorporating fire and smoke both mundane and magical.</p></div>
<div className="archetype"><p><Link to="/arc-monk/disciple_of_wholeness_uc">Disciple of Wholeness (UC)</Link></p><p><strong>Modifies or Replaces:</strong> Ki Pool; Purity of Body; 4th, 12th, 14th level Ki Power</p><p>Disciples of wholeness train to bring themselves and others closer to physical and spiritual perfection.</p></div>
<div className="archetype"><p><Link to="/arc-monk/elemental_monk_uc">Elemental Monk (UC)</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Stunning Fist; Bonus Feats; Evasion; Purity of Body; 10th-level Ki Power; Ki Pool</p><p>Elemental monks draw inspiration from genies to create their fighting style. Their adaptability and versatility make them capable of serving as emissaries of elemental balance.</p></div>
<div className="archetype"><p><Link to="/arc-monk/invested_regent_uc">Invested Regent (UC)</Link></p><p><strong>Modifies or Replaces:</strong> 1st-level Bonus Feat</p><p>The invested regent can harness a divine spark to perform superhuman stunts, influence others, and escape injury.</p></div>
<div className="archetype"><p><Link to="/arc-monk/lifting_hand_uc">Lifting Hand (UC)</Link></p><p><strong>Modifies or Replaces:</strong> Stunning Fist; Bonus Feats; 12th-level Ki Power</p><p>When facing a master of the lifting hand, an enemy is likely to find itself sailing through the air or locked in a tortuous compliance hold.</p></div>
<div className="archetype"><p><Link to="/arc-monk/monk_of_the_mantis_uc">Monk of the Mantis (UC)</Link></p><p><strong>Modifies or Replaces:</strong> 2nd, 6th, 10th, 14th, and 18th-level Bonus Feats; 6th, 10th, 12th-level Ki Powers; Quivering Palm</p><p>A body contains many points where the flesh, mind, and spirit coincide. A monk of the mantis is skilled at manipulating these points.</p></div>
<div className="archetype"><p><Link to="/arc-monk/perfect_scholar_uc">Perfect Scholar (UC)</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Still Mind; 4th-level Ki Power; Tongue of the Sun and Moon; Perfect Self</p><p>Perfect scholars, often worshipers of Irori, hone their minds and bodies through the accumulation of knowledge</p></div>
<div className="archetype"><p><Link to="/arc-monk/sage_counselor_uc">Sage Counselor (UC)</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; 1st, 2nd, 6th, 10th-level Bonus Feat; 4th-level Ki Power</p><p>Sage counselors are ascetics and mystics who leave the confines of the monastery walls to advise secular people about spiritual truths and to seek knowledge of the outside world.</p></div>
<div className="archetype"><p><Link to="/arc-monk/scaled_fist_uc">Scaled Fist (UC)</Link></p><p><strong>Modifies or Replaces:</strong> Bonus Feats; Still Mind; 4th, 12th-level Ki Power</p><p>Scaled fists eschew passive introspection in favor of unshakable confidence. Steeped in traditions that trace their origins to the warrior-monks who trained under the tutelage of draconic masters in Tian Xia, scaled fists eschew passive introspection in favor of unshakable confidence. Scaled fists learn to combine brutal intimidation with the brazen ferocity of an ancient wyrm to devastate their foes.</p></div>
<div className="archetype"><p><Link to="/arc-monk/serpent_fire_adept_uc">Serpent-Fire Adept (UC)</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Stunning Fist; 1st, 2nd, 6th, 10th, 14th, and 18th-level Bonus Feats; 4th, 8th-level Ki Power</p><p>A serpent-fire adept embraces the secrets of her chakras and mastery of their energetic flow.</p></div>
<div className="archetype"><p><Link to="/arc-monk/softstrike_monk_uc">Softstrike Monk (UC)</Link></p><p><strong>Modifies or Replaces:</strong> Weapon Proficiency; Unarmed Strike; 6th, 10th-level Bonus Feats; Wholeness of Body; Quivering Palm; Empty Body</p><p>Softstrike monks employ a nonlethal but effective form of combat.</p></div>
<div className="archetype"><p><Link to="/arc-monk/soul_shepherd_uc">Soul Shepherd (UC)</Link></p><p><strong>Modifies or Replaces:</strong> Stunning Fist; Evasion; Improved Evasion; 12th, 16th-level Bonus Feat</p><p>Whether studying at the feet of psychopomps or merely imitating the creatures' philosophy and methods, soul shepherds believe in safeguarding the Cycle of Souls.</p></div>
<div className="archetype"><p><Link to="/arc-monk/windstep_master_uc">Windstep Master (UC)</Link></p><p><strong>Modifies or Replaces:</strong> Stunning Fist; 4th-level Ki Power; Ki Pool</p><p>Most monks are agile and fleet of foot, but few can rival a windstep master's lightness of step.</p></div>
<h3 id="class-unchained_monk-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"unchained monk archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Bonus Feats"},{"header":"1st-level Bonus Feat"},{"header":"2nd-level Bonus Feat"},{"header":"6th-level Bonus Feat"},{"header":"10th-level Bonus Feat"},{"header":"12th-level Bonus Feat"},{"header":"14th-level Bonus Feat"},{"header":"16th-level Bonus Feat"},{"header":"18th-level Bonus Feat"},{"header":"Class Skills"},{"header":"Empty Body"},{"header":"Evasion"},{"header":"Improved Evasion"},{"header":"Ki Pool"},{"header":"4th-level Ki Power"},{"header":"6th-level Ki Power"},{"header":"8th-level Ki Power"},{"header":"10th-level Ki Power"},{"header":"12th-level Ki Power"},{"header":"14th-level Ki Power"},{"header":"Perfect Self"},{"header":"Purity of Body"},{"header":"Quivering Palm"},{"header":"Still Mind"},{"header":"Stunning Fist"},{"header":"Tongue of the Sun and Moon"},{"header":"Unarmed Strike"},{"header":"Weapon Proficiency"},{"header":"Wholeness of Body"}],"data":[["‹arc-monk/Black Asp<_uc›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null],["‹arc-monk/Brazen Disciple<_uc›",null,null,"X",null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,"X",null,null,"X",null,null,null,null,null],["‹arc-monk/Disciple of Wholeness<_uc›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,"X","X",null,"X",null,null,null,null,null,null,null],["‹arc-monk/Elemental Monk<_uc›","X","X",null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,"X",null,null,null,"X",null,null,"X",null,null,null,null],["‹arc-monk/Invested Regent<_uc›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-monk/Lifting Hand<_uc›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null],["‹arc-monk/Monk of the Mantis<_uc›",null,null,null,"X","X","X",null,"X",null,"X",null,null,null,null,null,null,"X",null,"X","X",null,null,null,"X",null,null,null,null,null,null],["‹arc-monk/Perfect Scholar<_uc›",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,"X",null,null,"X",null,"X",null,null,null],["‹arc-monk/Sage Counselor<_uc›",null,null,"X","X","X","X",null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-monk/Scaled Fist<_uc›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,"X",null,null,null,null,null],["‹arc-monk/Serpent-Fire Adept<_uc›",null,null,"X","X","X","X",null,"X",null,"X","X",null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-monk/Softstrike Monk<_uc›",null,null,null,null,"X","X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X","X","X"],["‹arc-monk/Soul Shepherd<_uc›",null,null,null,null,null,null,"X",null,"X",null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-monk/Windstep Master<_uc›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-unchained_monk-label">Footnotes</h3>
<ol>
<li id="class-unchained_monk-A">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-unchained_monk-ref-A-1" data-hash-target to="class-unchained_monk-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _ninja = {hasJL:true,title: "Ninja", jsx: <><div className="jumpList" id="class-ninja-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-ninja-poison-use">Poison Use</InnerLink></li><li><InnerLink toTop to="class-ninja-sneak-attack">Sneak Attack</InnerLink></li><li><InnerLink toTop to="class-ninja-ki-pool-su">Ki Pool</InnerLink></li><li><InnerLink toTop to="class-ninja-ninja-tricks">Ninja Tricks</InnerLink></li><li><InnerLink toTop to="class-ninja-no-trace-ex">No Trace</InnerLink></li><li><InnerLink toTop to="class-ninja-uncanny-dodge-ex">Uncanny Dodge</InnerLink></li><li><InnerLink toTop to="class-ninja-light-steps-ex">Light Steps</InnerLink></li><li><InnerLink toTop to="class-ninja-improved-uncanny-dodge-ex">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-ninja-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-ninja-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-ninja-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-ninja-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-ninja-ninja">Ninja</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 13</Link></p>
<p>When the wealthy and the powerful need an enemy eliminated quietly and without fail, they call upon the ninja. When a general needs to sabotage the siege engines of his foes before they can reach the castle walls, he calls upon the ninja. And when fools dare to move against a ninja or her companions, they will find the ninja waiting for them while they sleep, ready to strike. These shadowy killers are masters of infiltration, sabotage, and assassination, using a wide variety of weapons, practiced skills, and mystical powers to achieve their goals.</p>
<p><strong>Role:</strong> The ninja spends almost all of her time honing her skills, practicing her art, or working on her next assignment. Even when not specifically working, the ninja is ever vigilant and ready for the situation to turn deadly. Her line of work earns her many enemies, but it is a list that she frequently reduces through assassination and misdirection. The ninja is an alternate class for the rogue core class.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Parent Class(es)</th><td colSpan={2}><Link to="/class/rogue">Rogue</Link>.</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>4d6 &times; 10 gp (average 140 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>8 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/disable_device">Disable Device</Link>, <Link to="/skill/escape_artist">Escape Artist</Link>, <Link to="/skill/sleight_of_hand">Sleight of Hand</Link>, <Link to="/skill/stealth">Stealth</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/appraise">Appraise</Link>, <Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_local">Knowledge (local)</Link>, <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link>, <Link to="/skill/linguistics">Linguistics</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/disguise">Disguise</Link>, <Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/perform_any">Perform (any)</Link>, <Link to="/skill/use_magic_device">Use Magic Device</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-ninja-class-features">Class Features</h3>
<ScrollContainer id="class-ninja--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Base Attack Bonus</th>
<th>Fort Save</th>
<th>Ref Save</th>
<th>Will Save</th>
<th>Special</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+0</td>
<td>+0</td>
<td>+2</td>
<td>+0</td>
<td>Poison use, sneak attack +1d6</td>
</tr>
<tr>
<td>2nd</td>
<td>+1</td>
<td>+0</td>
<td>+3</td>
<td>+0</td>
<td><em>Ki</em> pool, ninja trick</td>
</tr>
<tr>
<td>3rd</td>
<td>+2</td>
<td>+1</td>
<td>+3</td>
<td>+1</td>
<td>No trace +1, sneak attack +2d6</td>
</tr>
<tr>
<td>4th</td>
<td>+3</td>
<td>+1</td>
<td>+4</td>
<td>+1</td>
<td>Ninja trick, uncanny dodge</td>
</tr>
<tr>
<td>5th</td>
<td>+3</td>
<td>+1</td>
<td>+4</td>
<td>+1</td>
<td>Sneak attack +3d6</td>
</tr>
<tr>
<td>6th</td>
<td>+4</td>
<td>+2</td>
<td>+5</td>
<td>+2</td>
<td>Light steps, ninja trick, no trace +2</td>
</tr>
<tr>
<td>7th</td>
<td>+5</td>
<td>+2</td>
<td>+5</td>
<td>+2</td>
<td>Sneak attack +4d6</td>
</tr>
<tr>
<td>8th</td>
<td>+6/+1</td>
<td>+2</td>
<td>+6</td>
<td>+2</td>
<td>Improved uncanny dodge, ninja trick</td>
</tr>
<tr>
<td>9th</td>
<td>+6/+1</td>
<td>+3</td>
<td>+6</td>
<td>+3</td>
<td>No trace +3, sneak attack +5d6</td>
</tr>
<tr>
<td>10th</td>
<td>+7/+2</td>
<td>+3</td>
<td>+7</td>
<td>+3</td>
<td>Master tricks, ninja trick</td>
</tr>
<tr>
<td>11th</td>
<td>+8/+3</td>
<td>+3</td>
<td>+7</td>
<td>+3</td>
<td>Sneak attack +6d6</td>
</tr>
<tr>
<td>12th</td>
<td>+9/+4</td>
<td>+4</td>
<td>+8</td>
<td>+4</td>
<td>Ninja trick, no trace +4</td>
</tr>
<tr>
<td>13th</td>
<td>+9/+4</td>
<td>+4</td>
<td>+8</td>
<td>+4</td>
<td>Sneak attack +7d6</td>
</tr>
<tr>
<td>14th</td>
<td>+10/+5</td>
<td>+4</td>
<td>+9</td>
<td>+4</td>
<td>Ninja trick</td>
</tr>
<tr>
<td>15th</td>
<td>+11/+6/+1</td>
<td>+5</td>
<td>+9</td>
<td>+5</td>
<td>No trace +5, sneak attack +8d6</td>
</tr>
<tr>
<td>16th</td>
<td>+12/+7/+2</td>
<td>+5</td>
<td>+10</td>
<td>+5</td>
<td>Ninja trick</td>
</tr>
<tr>
<td>17th</td>
<td>+12/+7/+2</td>
<td>+5</td>
<td>+10</td>
<td>+5</td>
<td>Sneak attack +9d6</td>
</tr>
<tr>
<td>18th</td>
<td>+13/+8/+3</td>
<td>+6</td>
<td>+11</td>
<td>+6</td>
<td>Ninja trick, no trace +6</td>
</tr>
<tr>
<td>19th</td>
<td>+14/+9/+4</td>
<td>+6</td>
<td>+11</td>
<td>+6</td>
<td>Sneak attack +10d6</td>
</tr>
<tr>
<td>20th</td>
<td>+15/+10/+5</td>
<td>+6</td>
<td>+12</td>
<td>+6</td>
<td>Hidden master, ninja trick</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={6}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td><Link to="/eq-weapon/kama">kama</Link></td><td><Link to="/eq-weapon/katana">katana</Link></td></tr><tr><td><Link to="/eq-weapon/kusarigama">kusarigama</Link></td><td><Link to="/eq-weapon/nunchaku">nunchaku</Link></td></tr><tr><td><Link to="/eq-weapon/sai">sai</Link></td><td><Link to="/eq-weapon/shortbow">shortbow</Link></td></tr><tr><td><Link to="/eq-weapon/short_sword">short sword</Link></td><td><Link to="/eq-weapon/shuriken">shuriken</Link></td></tr><tr><td><Link to="/eq-weapon/siangham">siangham</Link></td><td><Link to="/eq-weapon/wakizashi">wakizashi</Link></td></tr><tr><th>Armor?</th><td colSpan={2}>Light armor</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">No</td></tr></tbody></table>
<Ability id="class-ninja-poison-use" icon={["armor-upgrade"]}>
<Pair single id="class-ninja-poison-use">Poison Use</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">You are trained in the use of poison and cannot accidentally poison yourself when applying poison to a weapon.</Pair>
</Ability>
<Ability id="class-ninja-sneak-attack" icon={["stairs-goal"]}>
<Pair single id="class-ninja-sneak-attack">Sneak Attack</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You have the ability to <Link to="/ability/sneak_attack">sneak attack</Link>, the same as a rogue.</Pair>
</Ability>
<Ability id="class-ninja-ki-pool-su" icon={["magic-swirl","mailed-fist"]}>
<Pair single id="class-ninja-ki-pool-su" flavor="A ninja gains supernatural energy she can use to accomplish amazing feats.">Ki Pool (Su)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">You gain a pool of ki points. The number of points in your ki pool is equal to <Link to="/misc/half">half</Link> your ninja level + your Charisma modifier.</Pair>
<Pair title="Swift Action">By spending 1 point from your ki pool, you can do one of the following: 1) take one additional attack at your highest attack bonus when making a full attack, 2) increase your speed by 20 feet for one round, or 3) give yourself a +4 insight bonus on Stealth checks for 1 round.</Pair>
<Pair title="Passive Ability">As long as you have at least 1 point in your ki pool, you treat any <Link to="/skill/acrobatics">Acrobatics</Link> skill check made to jump as if you had a running start.</Pair>
<Pair title="At 10th Level">As long as you have at least 1 point in your ki pool, you reduce the DC of Acrobatics skill checks made to jump by 1/2 (although you still can't move farther than your speed allows).</Pair>
<Pair title="Special">You can gain additional powers that consume points from your ki pool by selecting certain <em>ninja tricks</em> (see below). The ki pool is replenished each morning after 8 hours of rest or meditation; these hours do not need to be consecutive.</Pair>
</Ability>
<p>If the ninja has levels in another class that grants points to a <em>ki</em> pool, all of these levels stack to determine the total number of <em>ki</em> points in the combined pool, but only one ability score modifier is added to the total. The choice of which score to use is made when the second class ability is gained, and once made, the choice is set. The ninja can now use <em>ki</em> points from this pool to power the abilities of every class she possesses that grants a <em>ki</em> pool.</p>
<Ability id="class-ninja-ninja-tricks" icon={["stairs-goal"]}>
<Pair single id="class-ninja-ninja-tricks" flavor="As a ninja continues her training, she learns a number of ninja tricks that allow her to confuse her foes and grant her supernatural abilities.">Ninja Tricks</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">You gain one <Link to="/ability/ninja_tricks">ninja trick</Link>.</Pair>
<Pair title="At 4th Level">You gain a new ninja trick.</Pair>
<Pair title="At 6th Level">You gain a new ninja trick.</Pair>
<Pair title="At 8th Level">You gain a new ninja trick.</Pair>
<Pair title="At 10th Level">You gain either a new ninja trick, or a <em>master trick</em> (see below).</Pair>
<Pair title="At 12th Level">You gain a new ninja trick or master trick.</Pair>
<Pair title="At 14th Level">You gain a new ninja trick or master trick.</Pair>
<Pair title="At 16th Level">You gain a new ninja trick or master trick.</Pair>
<Pair title="At 18th Level">You gain a new ninja trick or master trick.</Pair>
<Pair title="At 20th Level">You gain a new ninja trick or master trick.</Pair>
<Pair title="Special">Unless otherwise noted, you cannot select an individual ninja trick more than once. If you have multiple tricks that add effects to your sneak attacks, only one may be used per attack.</Pair>
</Ability>
<Ability id="class-ninja-no-trace-ex" icon={["armor-upgrade"]}>
<Pair single id="class-ninja-no-trace-ex" flavor="A ninja learns to cover her tracks, remain hidden, and conceal her presence.">No Trace (Ex)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">The DC to track you using the Survival skill increases by an amount equal to one-third of your ninja level. In addition, your training gives you a insight bonus on Disguise skill checks and on opposed Stealth checks whenever you are stationary and do not take any action for at least 1 round. This bonus is equal to one-third of your ninja level.</Pair>
</Ability>
<Ability id="class-ninja-uncanny-dodge-ex" icon={["armor-upgrade"]}>
<Pair single id="class-ninja-uncanny-dodge-ex" flavor="A ninja can react to danger before her senses would normally allow her to do so.">Uncanny Dodge (Ex)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">You cannot be caught <Link to="/rule/flat_footed">flat-footed</Link>, nor do you lose your Dexterity bonus to AC if the attacker is invisible. You still lose your Dexterity bonus to AC if immobilized, or if if an opponent successfully uses the <Link to="/skill/bluff">feint</Link> action against you.</Pair>
<Pair title="Special">If you already possess uncanny dodge from a different class, you automatically gain <em>improved uncanny dodge,</em> instead.</Pair>
</Ability>
<Ability id="class-ninja-light-steps-ex" icon={["stairs-goal"]}>
<Pair single id="class-ninja-light-steps-ex" flavor="A ninja learns to move while barely touching the surface underneath you.">Light Steps (Ex)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Full-Round Action">You can move up to twice your speed, ignoring <Link to="/rule/difficult_terrain">difficult terrain</Link>. While moving in this way, any surface will support you, no matter how much you weigh. This allows you to move across water, lava, or even the thinnest tree branches. You must end your move on a surface that can support you normally. You cannot move across air in this way, nor can you walk up walls or other vertical surfaces. When moving in this way, you do not take damage from surfaces or hazards that react to being touched, such as lava or caltrops, nor do you need to make Acrobatics checks to avoid falling on slippery or rough surfaces. Finally, when using <em>light steps,</em> you ignore any mechanical traps that use a location-based trigger.</Pair>
</Ability>
<Ability id="class-ninja-improved-uncanny-dodge-ex" icon={["armor-upgrade"]}>
<Pair single id="class-ninja-improved-uncanny-dodge-ex">Improved Uncanny Dodge (Ex)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">You can no longer be <Link to="/rule/flanked">flanked</Link>. This defense denies another ninja (or rogue) the ability to sneak attack you by flanking you, unless the attacker has at least four more ninja (or rogue) levels than you do.</Pair>
<Pair title="Special">If you already have uncanny dodge from another class, the levels from the classes that grant uncanny dodge stack when determining the minimum ninja (or rogue) level required to flank you.</Pair>
</Ability>
<Ability id="class-ninja-master-tricks" icon={["stairs-goal"]}>
<Pair single id="class-ninja-master-tricks">Master Tricks</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">When you would gain a new ninja trick, you can choose a <Link to="/ability/master_tricks">master trick</Link> instead.</Pair>
</Ability>
<Ability id="class-ninja-hidden-master-su" icon={["magic-swirl","upgrade"]}>
<Pair single id="class-ninja-hidden-master-su">Hidden Master (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Standard Action">You can cast <Link to="/spell/greater_invisibility">greater invisibility</Link> on yourself. While invisible in this way, you cannot be detected by any means, and not even <Link to="/spell/invisibility_purge">invisibility purge</Link>, <Link to="/spell/see_invisibility">see invisibility</Link>, and <Link to="/spell/true_seeing">true seeing</Link> can reveal you. You use your ninja level as your caster level for this ability. Using this ability consumes 3 <em>ki</em> points from your <em>ki</em> pool.</Pair>
<Pair title="Ability">In addition, whenever you deal sneak attack damage, you can sacrifice additional damage dice to apply a penalty to one ability score of the target equal to the number of dice sacrificed for 1 minute. This penalty does not stack with itself and cannot reduce an ability score below 1.</Pair>
</Ability>
<h3 id="class-ninja-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-ninja--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Ki Sage (Su)</td><td>At 20th level, the character is fully attuned to his own body and the ki that flows within. The character gains two <Link to="/ability/ki_powers">ki powers</Link> from those available to the unchained monk, treating his character level as his monk level for the purpose of any requirements. In addition, his ki pool increases by four. This capstone is available to any class with a ki pool.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>Slicing Wind (Su)</td><td>At 20th level, the ninja is a creature of wind and blades. When using light steps, the ninja can move up to four times her speed and make a single attack at her highest base attack bonus at any point during the movement.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>The Right Spot (Ex)</td><td>At 20th level, the character can hit an opponent's weak spot effortlessly. Once per round, the character can apply her sneak attack damage to an attack, even if the target is not flanked or denied its Dexterity bonus to AC. This does not allow the character to sneak attack targets that are immune to sneak attacks (such as oozes). This capstone is available for any class with the sneak attack class feature.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-ninja-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-ninja-ref-A-1" id="class-ninja-ref-A-1" data-hash-target to="class-ninja-A">1</InnerLink></sup></p>
</div>
<h3 id="class-ninja-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-ninja/frozen_shadow">Frozen Shadow</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Ki Pool; Uncanny Dodge; Improved Uncanny Dodge</p><p>Frozen shadows belong to a rare ninja clan operating in Avistan and they work as thieves, power brokers, and spies loosely guided by secretive masters with unknown agendas.</p></div>
<div className="archetype"><p><Link to="/arc-ninja/gunpowder_bombardier">Gunpowder Bombardier</Link></p><p><strong>Modifies or Replaces:</strong> Ki Pool; 2nd-level Ninja Trick; Uncanny Dodge; Improved Uncanny Dodge</p><p>Ratfolk assassins and other ninjas with an affinity for gunpowder demonstrate masterful control of bombs, using the explosives to inflict major damage or impair their foes</p></div>
<div className="archetype"><p><Link to="/arc-ninja/hunting_serpent">Hunting Serpent</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; No Trace; Uncanny Dodge; Improved Uncanny Dodge; 10th, 12th, 16th-level Ninja Trick</p><p>Hunting serpents are specially trained killers to that hunt relentlessly and fight from the shadows.</p></div>
<div className="archetype"><p><Link to="/arc-ninja/mask_of_the_living_god">Mask of the Living God</Link></p><p><strong>Modifies or Replaces:</strong> Weapon and Armor Proficiency; Poison Use; Ki Pool; No Trace</p><p>When the Living God needs to silence the voices of those heretics who question too loudly, these enforcers are the tools he employs.</p></div>
<div className="archetype"><p><Link to="/arc-ninja/petal_ninja">Petal Ninja</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; 2nd-level Ninja Trick; No Trace; Uncanny Dodge; Improved Uncanny Dodge; Light Steps</p><p>(Ghoran Only) Petal ninjas are a secretive clan of ghoran infiltrators, in touch with their plant-like nature to the point where they can change their forms, allowing them access into places that were previously impossible to reach.</p></div>
<h3 id="class-ninja-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"ninja archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Class Skills"},{"header":"Ki Pool"},{"header":"Light Steps"},{"header":"2nd-level Ninja Trick"},{"header":"10th, 12th, and 16th-level Ninja Tricks"},{"header":"No Trace"},{"header":"Poison Use"},{"header":"Uncanny Dodge"},{"header":"Improved Uncanny Dodge"},{"header":"Weapon/Armor Proficiency"}],"data":[["‹arc-ninja/Frozen Shadow›","X","X",null,null,null,null,null,"X","X",null],["‹arc-ninja/Gunpowder Bombardier›",null,"X",null,"X",null,null,null,"X","X",null],["‹arc-ninja/Hunting Serpent›","X",null,null,null,"X","X",null,"X","X",null],["‹arc-ninja/Mask of the Living God›",null,"X",null,null,null,"X","X",null,null,"X"],["‹arc-ninja/Petal Ninja›","X",null,"X","X",null,"X",null,"X","X",null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-ninja-label">Footnotes</h3>
<ol>
<li id="class-ninja-A">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-ninja-ref-A-1" data-hash-target to="class-ninja-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _occultist = {hasJL:true,title: "Occultist", jsx: <><div className="jumpList" id="class-occultist-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-occultist-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-occultist-implements-su">Implements</InnerLink></li><li><InnerLink toTop to="class-occultist-mental-focus-su">Mental Focus</InnerLink></li><li><InnerLink toTop to="class-occultist-focus-powers-su">Focus Powers</InnerLink></li><li><InnerLink toTop to="class-occultist-magic-item-skill-ex">Magic Item Skill</InnerLink></li><li><InnerLink toTop to="class-occultist-object-reading-su">Object Reading</InnerLink></li><li><InnerLink toTop to="class-occultist-shift-focus-su">Shift Focus</InnerLink></li><li><InnerLink toTop to="class-occultist-aura-sight-su">Aura Sight</InnerLink></li><li><InnerLink toTop to="class-occultist-magic-circles-su">Magic Circles</InnerLink></li><li><InnerLink toTop to="class-occultist-outside-contact-su">Outside Contact</InnerLink></li><li><InnerLink toTop to="class-occultist-binding-circles-su">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-occultist-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-occultist-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-occultist-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-occultist-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-occultist-occultist">Occultist</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 46</Link></p>
<p>The occultist focuses on the world around him, grounded in the powers that flow throughout his environment. He studies the magic that infuses everything, from psychic resonances left in everyday items to powerful incantations that fuel the mightiest spells.</p>
<p>The occultist channels his psychic might through implements - items that allow him to focus his power and produce incredible effects. For him, implements are more than simple tools. They are a repository of history and a tie to the events of the past. The occultist uses these implements to influence and change the present, adding his legend to theirs. Though some of these implements might be magic items in their own right, most of them are merely of historical or personal significance to the occultist.</p>
<p><strong>Role:</strong> Occultists are always eager to travel in the company of adventurers, explorers, and archaeologists, as those three groups of people have a knack for finding items with rich histories and great significance.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>4d6 &times; 10 gp (average 140 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>4 + Int modifier</td></tr><tr><th scope="row" rowSpan={4} className="sw">Class Skills</th><td><Link to="/skill/disable_device">Disable Device</Link>, <Link to="/skill/fly">Fly</Link>, <Link to="/skill/sleight_of_hand">Sleight of Hand</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/appraise">Appraise</Link>, <Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link>, <Link to="/skill/knowledge_history">Knowledge (history)</Link>, <Link to="/skill/knowledge_planes">Knowledge (planes)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, <Link to="/skill/linguistics">Linguistics</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/disguise">Disguise</Link>, <Link to="/skill/use_magic_device">Use Magic Device</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-occultist-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-occultist--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Base Attack Bonus</th>
<th>Fort Save</th>
<th>Ref Save</th>
<th>Will Save</th>
<th>Special</th>
<th>1st</th>
<th>2nd</th>
<th>3rd</th>
<th>4th</th>
<th>5th</th>
<th>6th</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+0</td>
<td>+2</td>
<td>+0</td>
<td>+2</td>
<td>Focus powers, implements 2, knacks, mental focus</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>+1</td>
<td>+3</td>
<td>+0</td>
<td>+3</td>
<td>Implements 3, magic item skill, object reading</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>+2</td>
<td>+3</td>
<td>+1</td>
<td>+3</td>
<td>Focus power</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>+3</td>
<td>+4</td>
<td>+1</td>
<td>+4</td>
<td>Shift focus</td>
<td>3</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>+3</td>
<td>+4</td>
<td>+1</td>
<td>+4</td>
<td>Aura sight, focus power</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>+4</td>
<td>+5</td>
<td>+2</td>
<td>+5</td>
<td>Implements 4</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>+5</td>
<td>+5</td>
<td>+2</td>
<td>+5</td>
<td>Focus power</td>
<td>4</td>
<td>3</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>+6/+1</td>
<td>+6</td>
<td>+2</td>
<td>+6</td>
<td>Magic circles, outside contact 1</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>+6/+1</td>
<td>+6</td>
<td>+3</td>
<td>+6</td>
<td>Focus power</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>+7/+2</td>
<td>+7</td>
<td>+3</td>
<td>+7</td>
<td>Implements 5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>+8/+3</td>
<td>+7</td>
<td>+3</td>
<td>+7</td>
<td>Focus power</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>+9/+4</td>
<td>+8</td>
<td>+4</td>
<td>+8</td>
<td>Binding circles, outside contact 2</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>+9/+4</td>
<td>+8</td>
<td>+4</td>
<td>+8</td>
<td>Focus power</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>+10/+5</td>
<td>+9</td>
<td>+4</td>
<td>+9</td>
<td>Implements 6</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>+11/+6/+1</td>
<td>+9</td>
<td>+5</td>
<td>+9</td>
<td>Focus power</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>+12/+7/+2</td>
<td>+10</td>
<td>+5</td>
<td>+10</td>
<td>Fast circles, outside contact 3</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>1</td>
</tr>
<tr>
<td>17th</td>
<td>+12/+7/+2</td>
<td>+10</td>
<td>+5</td>
<td>+10</td>
<td>Focus power</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>2</td>
</tr>
<tr>
<td>18th</td>
<td>+13/+8/+3</td>
<td>+11</td>
<td>+6</td>
<td>+11</td>
<td>Implements 7</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
</tr>
<tr>
<td>19th</td>
<td>+14/+9/+4</td>
<td>+11</td>
<td>+6</td>
<td>+11</td>
<td>Focus power</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
</tr>
<tr>
<td>20th</td>
<td>+15/+10/+5</td>
<td>+12</td>
<td>+6</td>
<td>+12</td>
<td>Implement mastery, outside contact 4</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={2}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td colSpan={2}>All <Link to="/main/equipment_weapons_martial">martial weapons</Link></td></tr><tr><th>Armor?</th><td colSpan={2}>Light and Medium armors</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">Yes, except tower shields</td></tr></tbody></table>
<Ability id="class-occultist-spells" icon={["magic-swirl"]}><Pair single id="class-occultist-spells">Spells</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">To learn or cast a spell, you must have a Intelligence score equal to at least 10 + the spell level. You can cast only a certain number of spells of each spell level per day, as shown on the table above. In addition, you receive <Link to="/rule/determine_bonuses">bonus spells per day</Link> if you have a high Intelligence score.</Pair>
<Pair title="Ability">You gain the ability to cast psychic spells which are drawn from the <Link to="/main/spells_occultist">occultist spell list</Link>, limited by the implement groups you know. The DC for a saving throw against spells you cast is 10 + the spell level + your Intelligence modifier. You must choose and prepare your spells in advance.</Pair><Pair title="Info"><p>An occultist's selection of spells is limited. For each implement school you learn to use, you can add one spell of each level you can cast to your list of spells known, chosen from that school's spell list. If you select the same implement school multiple times, you add one spell of each level from that school's list for each time you have selected that school. When you learn to cast a new level of spells, you immediately add one spell of that level to your list of spells known from each implement school you know (plus any extra spells from schools you have selected multiple times).</p>
<p>At 5th level, and every three levels thereafter (8th, 11th, and so on), you can choose to learn a new spell in place of one you already know. In effect, you "lose" the old spell in exchange for the new one. The new spell's level must be the same as that of the spell being exchanged. The spell learned must come from the same list of spells provided by the implement school of the spell lost. You may swap out only a single spell at any given level and must choose whether or not to swap the spell at the same time that you gain new spells known for the level.</p></Pair><Pair title="Special">Every occultist spell has an implement component (described below).</Pair></Ability><Ability id="class-occultist-knacks" icon={["magic-swirl"]}>
<Pair single id="class-occultist-knacks">Knacks</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You learn one knack, or 0-level psychic spell, each time you select an implement school (including when you again select a school that you have already learned to use). These spells are cast like any other spell, but they can be cast any number of times per day. Knacks cast using any other spell slots because of metamagic feats applied to them, for example, consume spell slots as normal.</Pair>
</Ability>
<Ability id="class-occultist-implements-su" icon={["magic-swirl"]}>
<Pair single id="class-occultist-implements-su">Implements (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>You learn to use two <Link to="/ability/implements">implement schools</Link>. Each implement school adds one spell per spell level of that school of magic to your spell list. No spells from any other school are considered to be on your spell list until you select the associated implement school. You can't use spell trigger or spell completion magic items from unknown schools without succeeding at the appropriate Use Magic Device check.</p>
<p>Each implement school is represented by a small list of objects. Every day, you select one item from that school's list to be your implement for the day for each implement school you know. You need only one such item to cast spells of the corresponding school, unless you selected that implement school multiple times, in which case you need one item for each set of spells gained from that school. Implements don't need to be magic items, and nonmagical implements don't take up a magic item slot even if they're worn. Implements that are not magic items are often of some historical value or of personal significance to you, such as the finger bone of a saint, the broken scepter of a long-dead king, the skull of a mentor's familiar, or the glass eye of an uncanny ancestor.</p>
<p>Whenever you cast a spell, you must have the corresponding implement in your possession and present the implement to the target or toward the area of effect. This act is part of casting the spell and doesn't require any additional action. If you lack the corresponding implement, you can attempt to cast the spell, but must succeed at a <Link to="/rule/concentration">concentration</Link> check (DC = 20 + the spell's level) to do so. Spells you cast without the appropriate implement are always treated as if they were cast at the minimum caster level for the spell in question (caster level 1st for a 1st-level spell, caster level 4th for a 2nd-level spell, and so on).</p>
<p>Each implement school also grants a <strong className="hl">base focus power</strong>. This power is added to the list of focus powers you possess. In addition, each implement school grants access to a number of other focus powers that you can select from using your mental focus class feature.</p>
</Pair>
<Pair title="At 2nd Level">You learn to use one additional implement school.</Pair>
<Pair title="At 6th Level">You learn to use one additional implement school.</Pair>
<Pair title="At 10th Level">You learn to use one additional implement school.</Pair>
<Pair title="At 14th Level">You learn to use one additional implement school.</Pair>
<Pair title="At 18th Level">You learn to use one additional implement school.</Pair>
<Pair title="Special">You can select an implement school more than once in order to learn additional spells from the associated school.</Pair>
</Ability>
<Ability id="class-occultist-mental-focus-su" icon={["magic-swirl"]}>
<Pair single id="class-occultist-mental-focus-su" flavor="An occultist can invest a portion of his mental focus into his chosen implements for the day, allowing him to utilize a variety of abilities depending on the implements and the amount of mental focus invested in them.">Mental Focus (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>You have a number of points of mental focus equal to your occultist level + your Intelligence modifier; these points refresh each day. You can divide this mental focus between your implements in any way you desire. If an implement is lost or destroyed, the focus invested in it is lost as well, though you still refresh those points of focus normally.</p>
<p>Once mental focus is invested inside an implement, the implement gains the <strong className="hl">resonant power</strong> of its implement school, and you can expend the mental focus stored in the implement to activate the associated focus powers you know. If a resonant power grants a bonus that varies based on the amount of mental focus invested in the implement, the bonus is determined when the focus is invested, and is not reduced or altered by expending the mental focus invested in the item. Once all of the mental focus in an implement has been expended, it loses its resonant power until mental focus is once again invested in the implement.</p>
<p>The implement grants its resonant power to whoever possesses it; you can lend the implement to an ally to assist that ally, but if you do so, you have difficulty casting that implement's spells and can't expend that implement's focus on focus powers until you retrieve the implement or refresh your focus.</p>
<p>You refresh your mental focus once each day after receiving at least 8 hours of sleep. After refreshing your mental focus, you must spend 1 hour preparing your implements and investing them with this power. Mental focus that is not used before the next time you refresh your focus is lost.</p>
<p>You can choose to save generic mental focus inside your own body instead of investing all of it, but expending this focus comes at a higher cost. Any focus power you activate with generic focus costs twice as much mental focus to use (and to maintain, if applicable). You can expend your generic focus through an appropriate implement on any focus power you know, but an implement you didn't invest any focus in at the start of the day grants no resonant power.</p>
</Pair>
</Ability>
<Ability id="class-occultist-focus-powers-su" icon={["magic-swirl"]}>
<Pair single id="class-occultist-focus-powers-su">Focus Powers (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You learn the base focus power from both of your two implement schools and can select one more focus power from the list of those available to you through those schools. Whenever you learn a new implement school, you gain the base power of that school.</Pair>
<Pair title="At 3rd Level">You learn a new focus power selected from the options granted by all of the implement schools you know.</Pair>
<Pair title="At 5th Level">You learn a new focus power, as above.</Pair>
<Pair title="At 7th Level">You learn a new focus power, as above.</Pair>
<Pair title="At 9th Level">You learn a new focus power, as above.</Pair>
<Pair title="At 11th Level">You learn a new focus power, as above.</Pair>
<Pair title="At 13th Level">You learn a new focus power, as above.</Pair>
<Pair title="At 15th Level">You learn a new focus power, as above.</Pair>
<Pair title="At 17th Level">You learn a new focus power, as above.</Pair>
<Pair title="At 19th Level">You learn a new focus power, as above.</Pair>
<Pair title="Special">You can use focus powers only by expending mental focus. Unless otherwise noted, the DC for any saving throw against a focus power equals 10 + <Link to="/misc/half">half</Link> your level + your Intelligence modifier. You can't select a focus power more than once. Some focus powers require you to reach a specific occultist level before you can choose them.</Pair>
</Ability>
<Ability id="class-occultist-magic-item-skill-ex" icon={["upgrade"]}>
<Pair single id="class-occultist-magic-item-skill-ex">Magic Item Skill (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">Your knowledge of magic items grants you a bonus when attempting to use them. You gain a bonus on all <Link to="/skill/use_magic_device">Use Magic Device</Link> checks equal to 1/2 your occultist level.</Pair>
</Ability>
<Ability id="class-occultist-object-reading-su" icon={["stairs-goal"]}>
<Pair single id="class-occultist-object-reading-su">Object Reading (Su)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">You learn how to read information from items you examine. Examining an item in this way requires you to spend 1 minute handling the item. If the item is a magic item, you learn its properties and command word as if you had successfully examined the item using <Link to="/spell/detect_magic">detect magic</Link> and succeeded at a Spellcraft check. This ability does not reveal whether the item is cursed unless your class level is equal to or greater than the caster level of the item. If the item has any historical significance, you learn one piece of information about its past (as determined by the GM). Finally, if the item was last used no longer than 1 day ago per your class level, you learn one piece of information about the last creature to use the item. This information might be a glimpse of the creature's appearance, a brief vision of what it saw while using the item, or perhaps its emotional state when it last used the item. The GM determines what information is gained in this way. This functions like the <Link to="/skill/psychometry">psychometry occult skill unlock</Link>, but doesn't require a skill check and can be used at will.</Pair>
</Ability>
<Ability id="class-occultist-shift-focus-su" icon={["stairs-goal"]}>
<Pair single id="class-occultist-shift-focus-su">Shift Focus (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">You gain the ability to shift your mental focus from one implement to another, though some of the focus is lost along the way. Shifting mental focus removes a number of points of mental focus from one implement and adds the same number - 1 to another implement; this takes 1 minute of quiet contemplation while touching both implements.</Pair>
<Pair title="Special">You can shift your mental focus only from one implement to another implement; you can't shift generic focus into an implement. Unlike expending focus normally, this shift can reduce the effect of a resonant power in the implement from which the mental focus was taken. It does not, however, add to the resonant power of the implement to which the focus is added.</Pair>
</Ability>
<Ability id="class-occultist-aura-sight-su" icon={["stairs-goal"]}>
<Pair single id="class-occultist-aura-sight-su">Aura Sight (Su)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Standard Action">You can read the auras of creatures around you. This functions as the <Link to="/spell/aura_sight">aura sight</Link> spell with a duration of 1 round.</Pair>
</Ability>
<Ability id="class-occultist-magic-circles-su" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="class-occultist-magic-circles-su">Magic Circles (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">You learn how to draw magic circles. To draw a circle, you must have chalk, salt, blood, powdered silver, or some other appropriate substance at hand (although you can press a magic circle into a softer surface such as dirt or clay). Drawing a circle takes 1 minute and requires you to expend 1 point of mental focus (either generic focus or focus from any one of your implements). Once completed, this circle functions as a permanent <Link to="/spell/magic_circle">magic circle</Link> against any alignment of your choosing. The circle can't be against a component of your alignment (if you are lawful good, for example, it can't be a <em>against good</em> or <em>against law</em>).</Pair>
<Pair title="Special">The circle remains until its form is physically broken (for example, if the lines are smeared or the salt is scattered). Only a living creature can break the circle; environmental effects can't break it. You can have only one circle created in this way at a time. If you create a second circle, the first one loses all its magic powers. This type of magic circle can't normally be focused inward to bind an outsider.</Pair>
</Ability>
<Ability id="class-occultist-outside-contact-su" icon={["magic-swirl"]}>
<Pair single id="class-occultist-outside-contact-su">Outside Contact (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability"><p>You learn the true name of one particular outsider. This outsider can have no more than 3 Hit Dice. Whenever you create a <em>magic circle,</em> you can expend 1 additional point of mental focus to focus the circle inward and lure that outsider to the circle (similar to using <Link to="/spell/lesser_planar_binding">lesser planar binding</Link>).</p>
<p>While bound, you can bargain with the outsider for one piece of information. This requires a payment of at least 20 gp (or items of at least that value that are of interest to the outsider). The bargaining requires you to attempt a Diplomacy or Intimidate check opposed by the outsider's Sense Motive check. Succeeding at the check by 5 or more reduces this cost to 10 gp. Failure increases the price to 30 gp, whereas failure by 5 or more allows the outsider to escape without giving any information (or receiving payment). The information gained can be anything that might be learned through a <Link to="/spell/divination">divination</Link> spell. The information is always correct but is frequently cryptic. It typically takes the outsider 1d3 hours to gather the information, at which point it returns of its own accord to deliver the information as promised. The outsider always resents being used in this way, even if you and the outsider share an alignment component. After you bargain with the outsider, the magic circle loses all power and the outsider is sent back to its home plane.</p>
</Pair>
<Pair title="At 12th Level">You learn to contact one additional outsider of the same type or a different type. Although you can call only one outsider in this way at a time, you can ask such an outsider one additional question, all for the same bargaining price. The questions must be in some way related to one another.</Pair>
<Pair title="At 16th Level">You learn to contact one more outsider of the same type or different type, and you may ask one more related question, as above. Also, in lieu of asking questions, you can demand that the outsider deliver a message to any one friendly creature that you know personally. You can also task the outsider to deliver one object weighing no more than 1 pound. Either of these demands requires an opposed check as described above. Delivery typically takes 1d4 hours, but this period is reduced to 1d6 minutes if the recipient is within 1 mile of you (or even less if the recipient is within sight). You must be able to accurately describe the recipient in both name and appearance. This ability can't be used to deliver anything to a location, or to enemies or creatures that are unfriendly to you.</Pair>
<Pair title="At 20th Level">You learn to contact a fourth outsider of the same type or different type, and you may ask one more related question, as above.</Pair>
</Ability>
<Ability id="class-occultist-binding-circles-su" icon={["magic-swirl"]}>
<Pair single id="class-occultist-binding-circles-su">Binding Circles (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">Whenever you create a magic circle you can expend 1 additional point of mental focus to make it a binding circle. A binding circle is invisible and counts as a trap. If a living creature of the corresponding alignment steps inside it, the trap triggers and binds the creature inside the circle. While it can move freely within the circle, it can't leave the circle, make attacks against targets outside the circle, cast spells that cross the circle's boundary (the circle blocks line of effect from the inside), or use any ability that would allow it to leave the circle or disturb the circle in any way. When the circle traps a creature in this way, the creature can attempt a Reflex save to dive out of the circle before the magic takes hold (DC = 10 + 1/2 your level + your Intelligence modifier).</Pair>
<Pair title="Special">A creature that can see the circle gains a +4 bonus on this save. If it fails its save, the creature must remain in the circle, although it can attempt a Will save at the same DC at the end of each hour of imprisonment to escape. A binding circle can be spotted with a successful Perception check (DC = 25 + 1/2 your level). It can also be disarmed using Disable Device, with the same DC. Anything crossing the boundary of the circle from the outside, such as a weapon, spell effect, or special ability, immediately breaks the circle and frees the creature trapped inside.</Pair>
</Ability>
<Ability id="class-occultist-fast-circles-su" icon={["upgrade"]}>
<Pair single id="class-occultist-fast-circles-su">Fast Circles (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Ability">You learn to draw magic circles very quickly. You can draw a magic circle as a <strong className="hl">full-round action</strong>, but any circle drawn in this way has a duration of 1 minute per occultist level (unless it's drawn in conjunction with the <em>outside contact</em> class feature, in which case it lasts for 10 minutes as normal). If you draw a <em>binding circle</em> in this way, its duration is 1 round per occultist level.</Pair>
</Ability>
<Ability id="class-occultist-implement-mastery-su" icon={["upgrade"]}>
<Pair single id="class-occultist-implement-mastery-su">Implement Mastery (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You select one implement school to master. Whenever you use a focus power from an implement of that school, the DC to resist any of the effects increases by 4 and you treat your occultist level as 4 higher when determining the effects and duration of that power. The hardness of each of your implements of the mastered school increases by an additional 20 as long as the item has at least 1 point of mental focus stored within.</Pair>
<Pair title="Ability">In addition, you gain 4 extra points of mental focus, but these points must always be invested in implements of the mastered school. You can't save these points or expend them for any ability other than the focus powers of those implements.</Pair>
</Ability>
<h3 id="class-occultist-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-occultist--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Collector of the Strange (Su)</td><td>At 20th level, the occultist has no end of odd curios hanging about his body. The occultist gains two new focus powers and increases his mental focus pool by 6, but he can have no more than one-third of his points invested into any one implement school.</td></tr>
<tr><td>Deep Magics (Su)</td><td>At 20th level, the character's repertoire of spells deepens dramatically. She gains an additional spell known for each spell level she can cast. A character of any class with spells known can select this capstone.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-occultist-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Dwarf:</strong> Gain a +1/3 bonus on Appraise and Use Magic Device checks involving stone and metal objects.<sup><InnerLink showBacklink="backlink-class-occultist-ref-A-1" id="class-occultist-ref-A-1" data-hash-target to="class-occultist-A">1</InnerLink></sup></p>
<p><strong>Elf:</strong> Increase the occultist's total number of points of mental focus by 1/2 point.<sup><InnerLink showBacklink="backlink-class-occultist-ref-A-2" id="class-occultist-ref-A-2" data-hash-target to="class-occultist-A">1</InnerLink></sup></p>
<p><strong>Gnome:</strong> Increase the duration of the occultist's minor figment by 1 minute, and increase the total concealment miss chance from the occultist's distortion resonant power by 2%. This doesn't increase the maximum miss chance.<sup><InnerLink showBacklink="backlink-class-occultist-ref-B-1" id="class-occultist-ref-B-1" data-hash-target to="class-occultist-B">2</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Gain a +1/2 bonus on Spellcraft checks to identify the properties of magic items and a +1/2 bonus on Use Magic Device checks to emulate a race.<sup><InnerLink showBacklink="backlink-class-occultist-ref-B-2" id="class-occultist-ref-B-2" data-hash-target to="class-occultist-B">2</InnerLink></sup></p>
<p><strong>Halfling:</strong> Add 1/2 point of mental focus per day.<sup><InnerLink showBacklink="backlink-class-occultist-ref-B-3" id="class-occultist-ref-B-3" data-hash-target to="class-occultist-B">2</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Deal an additional 1/2 point of damage with focus powers.<sup><InnerLink showBacklink="backlink-class-occultist-ref-B-4" id="class-occultist-ref-B-4" data-hash-target to="class-occultist-B">2</InnerLink></sup></p>
<p><strong>Human:</strong> Gain 1/6 of a new focus power.<sup><InnerLink showBacklink="backlink-class-occultist-ref-B-5" id="class-occultist-ref-B-5" data-hash-target to="class-occultist-B">2</InnerLink></sup></p>
<p><strong>Human:</strong> Add a +1/3 bonus on any skill check attempted as a part of an <Link to="/rule/occult_rituals">occult ritual</Link>.<sup><InnerLink showBacklink="backlink-class-occultist-ref-C-1" id="class-occultist-ref-C-1" data-hash-target to="class-occultist-C">3</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-occultist-ref-D-1" id="class-occultist-ref-D-1" data-hash-target to="class-occultist-D">4</InnerLink></sup></p>
<p><strong>Ratfolk:</strong> Gain 1/6 of a new focus power.<sup><InnerLink showBacklink="backlink-class-occultist-ref-E-1" id="class-occultist-ref-E-1" data-hash-target to="class-occultist-E">5</InnerLink></sup></p>
<p><strong>Vanara:</strong> Gain 1/6 of a new focus power.<sup><InnerLink showBacklink="backlink-class-occultist-ref-F-1" id="class-occultist-ref-F-1" data-hash-target to="class-occultist-F">6</InnerLink></sup></p>
</div>
<h3 id="class-occultist-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-occultist/ancestral_aspirant">Ancestral Aspirant</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Implements; Object Reading; Outside Contact</p><p>It is common for a noble to possess a deep pride for his family's past, but when such self-importance gives way to obsession, an ancestral aspirant is born.</p></div>
<div className="archetype"><p><Link to="/arc-occultist/battle_host">Battle Host</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Weapon/Armor Proficiency; Implements; Mental Focus; Spellcasting; Implement Mastery; Magic Item Skill; Object Reading; Shift Focus; Magic Circles; Binding Circles; Fast Circles; Aura Sight; Outside Contact</p><p>Well versed in military history, battlefield lore, and the occult, a battle host forms a supernatural bond with a chosen weapon, suit of armor, or shield, from which he can channel psychic energy to cast spells, conjure the spirit of the object's former owner, increase his own physical might, and produce a number of other remarkable abilities.</p></div>
<div className="archetype"><p><Link to="/arc-occultist/construct_collector">Construct Collector</Link></p><p><strong>Modifies or Replaces:</strong> 3rd, 9th, 15th-level Focus Power; Magic Circles; Outside Contact; Binding Circles; Fast Circles</p><p>Construct collectors draw out a construct's spiritual presence and use it to gain unlikely power in the battlefield.</p></div>
<div className="archetype"><p><Link to="/arc-occultist/curator">Curator</Link></p><p><strong>Modifies or Replaces:</strong> Implements; 3rd-level Focus Power; Shift Focus; Outside Contact; Magic Circles; Binding Circles; Fast Circles</p><p>Most occultists acquire and study antiques at a steady pace, learning new techniques one at a time. A lucky few join wealthy organizations replete with relics or inherit undocumented vaults full of historical treasures, and dabble in a wide variety of implements while mastering few</p></div>
<div className="archetype"><p><Link to="/arc-occultist/esoteric_initiate">Esoteric Initiate</Link></p><p><strong>Modifies or Replaces:</strong> Mental Focus; Implements; Shift Focus; Aura Sight</p><p>While most occultists learn to draw power from a variety of implements and objects, esoteric initiates have focused their study entirely on items of antiquity connected to the teachings of the Esoteric Order of the Palatine Eye, believing such items to be more powerful than mundane items.</p></div>
<div className="archetype"><p><Link to="/arc-occultist/extemporaneous_channeler">Extemporaneous Channeler</Link></p><p><strong>Modifies or Replaces:</strong> Weapon Proficiencies; Mental Focus; Shift Focus; Magic Circles; Outside Contact; Binding Circles; Fast Circles</p><p>Extemporaneous channelers study the power of transformation and use items in unintended ways to awaken their potential.</p></div>
<div className="archetype"><p><Link to="/arc-occultist/geomancer">Geomancer</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Mental Focus; Implements; Magic Item Skill; Aura Sight; 7th and 13th-level Focus Powers</p><p>A geomancer studies every type of land, deriving power from the differences between types of terrain.</p></div>
<div className="archetype"><p><Link to="/arc-occultist/haunt_collector">Haunt Collector</Link></p><p><strong>Modifies or Replaces:</strong> Implements; Aura Sight; Outside Contact; Magic Circles; Binding Circles; Fast Circles</p><p>Haunt collectors use items haunted by their former owners to create ghostly presences imbued with psychic power.</p></div>
<div className="archetype"><p><Link to="/arc-occultist/naturalist">Naturalist</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Mental Focus; Magic Circles; Fast Circles; Outside Contact; Binding Circles</p><p>A naturalist eschews the contact with outsiders that other occultists use as the core of their work. Instead, he attunes his mind to the natural spirits that exist everywhere, just out of sight for the unawakened mind.</p></div>
<div className="archetype"><p><Link to="/arc-occultist/necroccultist">Necroccultist</Link></p><p><strong>Modifies or Replaces:</strong> Implements; Implement Mastery; Object Reading; Aura Sight; Outside Contact</p><p>Necroccultists' fascination with death and the undead drives them to explore the forbidden necromantic arts as they search for secrets they can use to manipulate the natural cycle of life and death.</p></div>
<div className="archetype"><p><Link to="/arc-occultist/occult_historian">Occult Historian</Link></p><p><strong>Modifies or Replaces:</strong> Object Reading; Aura Sight; 3rd-level Focus Power; Outside Contact 2, 3, and 4</p><p>Many wilderness areas contain the remnants of ancient civilizations, with some waiting to be discovered and some held by fierce monsters or devious cults. An occult historian seeks these ruins not only for their esoteric artifacts but also to learn the structures' secrets.</p></div>
<div className="archetype"><p><Link to="/arc-occultist/panoply_savant">Panoply Savant</Link></p><p><strong>Modifies or Replaces:</strong> Shift Focus; Outside Contact; Magic Circles; Binding Circles; Fast Circles</p><p>Some occultists specialize in a particular panoply, fully dedicating themselves to mastering the secrets of the psychic resonance of each of its component implements, as well as the way they interact with one another.</p></div>
<div className="archetype"><p><Link to="/arc-occultist/planar_harmonizer">Planar Harmonizer</Link></p><p><strong>Modifies or Replaces:</strong> Implements; Implement Mastery; Magic Item Skill; Shift Focus; 5th, 7th-level Focus Power; Magic Circles; Aura Sight</p><p>Planar harmonizers are masters of the planar symphony, forging bonds with tuning forks to unlock the true potential of these instruments</p></div>
<div className="archetype"><p><Link to="/arc-occultist/psychodermist">Psychodermist</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Implements; Magic Item Skill; Object Reading; Aura Sight; Outside Contact; Binding Circles; Fast Circles</p><p>Rather than tapping the psychic energy residing within esoteric items, psychodermists form supernatural bonds with trophies taken from creatures they have slain. Through these mementos, these occultists manifest not only their own magic, but also the unique powers of their fallen foes.</p></div>
<div className="archetype"><p><Link to="/arc-occultist/reliquarian">Reliquarian</Link></p><p><strong>Modifies or Replaces:</strong> Weapon Proficiencies; Spells; Focus Powers; Implements; Knacks; Mental Focus</p><p>Not all occultists derive their power from psychic impressions left on objects. Some find faith first, and draw out the divine potential in religious relics.</p></div>
<div className="archetype"><p><Link to="/arc-occultist/secret_broker">Secret Broker</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Implements; Implement Mastery; Magic Item Skill; Shift Focus; Magic Circles; Binding Circles; Fast Circles</p><p>Whether as spymasters, extortionists, political fixers, or puppet masters, secret brokers use their talents with objects to gain information, then leverage that information for their own purposes.</p></div>
<div className="archetype"><p><Link to="/arc-occultist/shair">Sha'ir</Link></p><p><strong>Modifies or Replaces:</strong> Implements; Mental Focus; Spellcasting; Implement Mastery; Magic Item Skill; Object Reading; Aura Sight; Outside Contact</p><p>Sha'irs delve into the occult not through power over objects but instead via their connection with minor servitor genies from the elemental planes.</p></div>
<div className="archetype"><p><Link to="/arc-occultist/silksworn">Silksworn</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting; Class Skills; Knacks; Implements; Weapon and Armor Proficiency; Outside Contact; Magic Circles; Binding Circles; Fast Circles; Implement Mastery</p><p>Silksworn draw their power from wearing luxurious garments and can be found in many noble courts throughout Golarion</p></div>
<div className="archetype"><p><Link to="/arc-occultist/talisman_crafter">Talisman Crafter</Link></p><p><strong>Modifies or Replaces:</strong> Implements; Magic Item Skill; Object Reading; Shift Focus; Aura Sight; 5th, 17th-level Focus Powers</p><p>Talisman crafters specialize in the creation of seals, constructing master talismans to use as implements and inscribing wards with esoteric geometry.</p></div>
<div className="archetype"><p><Link to="/arc-occultist/tome_eater">Tome Eater</Link></p><p><strong>Modifies or Replaces:</strong> Implements; Mental Focus; Spellcasting; Implement Mastery; Shift Focus; 6th-level Implement; Magic Circles; Outside Contact; Binding Circles; Fast Circles; Aura Sight</p><p>Tome eaters have learned how to tap into the latent psychic energy of the written word by physically devouring books and scrolls to create magical effects and gain mystical insights.</p></div>
<h3 id="class-occultist-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"occultist archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Aura Sight"},{"header":"Class Skills"},{"header":"Implements"},{"header":"6th-level Implement"},{"header":"Implement Mastery"},{"header":"Knacks"},{"header":"Magic Circles"},{"header":"Binding Circles"},{"header":"Fast Circles"},{"header":"Magic Item Skill"},{"header":"Mental Focus"},{"header":"Shift Focus"},{"header":"Focus Powers"},{"header":"3rd-level Focus Power"},{"header":"5th-level Focus Power"},{"header":"7th-level Focus Power"},{"header":"9th-level Focus Power"},{"header":"13th-level Focus Power"},{"header":"15th-level Focus Power"},{"header":"17th-level Focus Power"},{"header":"Object Reading"},{"header":"Outside Contact"},{"header":"Outside Contact 2"},{"header":"Outside Contact 3"},{"header":"Outside Contact 4"},{"header":"Spellcasting"},{"header":"Weapon Proficiency"},{"header":"Weapon/Armor Proficiency"}],"data":[["‹arc-occultist/Ancestral Aspirant›",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null],["‹arc-occultist/Battle Host›","X","X","X",null,"X",null,"X","X","X","X","X","X",null,null,null,null,null,null,null,null,"X","X",null,null,null,"X",null,"X"],["‹arc-occultist/Construct Collector›",null,null,null,null,null,null,"X","X","X",null,null,null,null,"X",null,null,"X",null,"X",null,null,"X",null,null,null,null,null,null],["‹arc-occultist/Curator›",null,null,"X",null,null,null,"X","X","X",null,null,"X",null,"X",null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-occultist/Esoteric Initiate›","X",null,"X",null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-occultist/Extemporaneous Channeler›",null,null,null,null,null,null,"X","X","X",null,"X","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null],["‹arc-occultist/Geomancer›","X","X","X",null,null,null,null,null,null,"X","X",null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-occultist/Haunt Collector›","X",null,"X",null,null,null,"X","X","X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-occultist/Naturalist›",null,"X",null,null,null,null,"X","X","X",null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-occultist/Necroccultist›","X",null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null],["‹arc-occultist/Occult Historian›","X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,"X","X","X",null,null,null],["‹arc-occultist/Panoply Savant›",null,null,null,null,null,null,"X","X","X",null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-occultist/Planar Harmonizer›","X",null,"X",null,"X",null,"X",null,null,"X",null,"X",null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-occultist/Psychodermist›","X","X","X",null,null,null,null,"X","X","X",null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null],["‹arc-occultist/Reliquarian›",null,null,"X",null,null,"X",null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null],["‹arc-occultist/Secret Broker›",null,"X","X",null,"X",null,"X","X","X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-occultist/Sha'ir›","X",null,"X",null,"X",null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,"X","X",null,null,null,"X",null,null],["‹arc-occultist/Silksworn›",null,"X","X",null,"X","X","X","X","X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,"X"],["‹arc-occultist/Talisman Crafter›","X",null,"X",null,null,null,null,null,null,"X",null,"X",null,null,"X",null,null,null,null,"X","X",null,null,null,null,null,null,null],["‹arc-occultist/Tome Eater›","X",null,"X","X","X",null,"X","X","X",null,"X","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-occultist-label">Footnotes</h3>
<ol>
<li id="class-occultist-A">
<p><Link to="/source/occult_adventures">Occult Adventures pg. 84</Link> <InnerLink id="backlink-class-occultist-ref-A-1" data-hash-target to="class-occultist-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink> <InnerLink id="backlink-class-occultist-ref-A-2" data-hash-target to="class-occultist-ref-A-2" aria-label="Back to reference A-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-occultist-B">
<p>Occult Adventures pg. 85 <InnerLink id="backlink-class-occultist-ref-B-1" data-hash-target to="class-occultist-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink> <InnerLink id="backlink-class-occultist-ref-B-2" data-hash-target to="class-occultist-ref-B-2" aria-label="Back to reference B-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-class-occultist-ref-B-3" data-hash-target to="class-occultist-ref-B-3" aria-label="Back to reference B-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-class-occultist-ref-B-4" data-hash-target to="class-occultist-ref-B-4" aria-label="Back to reference B-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-class-occultist-ref-B-5" data-hash-target to="class-occultist-ref-B-5" aria-label="Back to reference B-5">↩<sup>5</sup></InnerLink></p>
</li>
<li id="class-occultist-C">
<p><Link to="/source/horror_adventures">Horror Adventures pg. 41</Link> <InnerLink id="backlink-class-occultist-ref-C-1" data-hash-target to="class-occultist-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-occultist-D">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-occultist-ref-D-1" data-hash-target to="class-occultist-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-occultist-E">
<p>Blood of the Beast pg. 20 <InnerLink id="backlink-class-occultist-ref-E-1" data-hash-target to="class-occultist-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-occultist-F">
<p>Blood of the Beast pg. 28 <InnerLink id="backlink-class-occultist-ref-F-1" data-hash-target to="class-occultist-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _oracle = {hasJL:true,title: "Oracle", jsx: <><div className="jumpList" id="class-oracle-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-oracle-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-oracle-mystery">Mystery</InnerLink></li><li><InnerLink toTop to="class-oracle-oracles-curse-ex">Oracle's Curse</InnerLink></li><li><InnerLink toTop to="class-oracle-revelation">Revelation</InnerLink></li><li><InnerLink toTop to="class-oracle-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-oracle-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-oracle-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-oracle-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-oracle-oracle">Oracle</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 42</Link></p>
<p>Although the gods work through many agents, perhaps none is more mysterious than the oracle. These divine vessels are granted power without their choice, selected by providence to wield powers that even they do not fully understand. Unlike a cleric, who draws her magic through devotion to a deity, oracles garner strength and power from many sources, namely those patron deities who support their ideals. Instead of worshiping a single source, oracles tend to venerate all of the gods that share their beliefs. While some see the powers of the oracle as a gift, others view them as a curse, changing the life of the chosen in unforeseen ways.</p>
<p><strong>Role:</strong> Oracles do not usually associate with any one church or temple, instead preferring to strike out on their own, or with a small group of like-minded individuals. Oracles typically use their spells and revelations to further their understanding of their mystery, be it through fighting mighty battles or tending to the poor and sick.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>3d6 &times; 10 gp (average 105 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>4 + Int modifier</td></tr><tr><th scope="row" rowSpan={4} className="sw">Class Skills</th><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_history">Knowledge (history)</Link>, <Link to="/skill/knowledge_planes">Knowledge (planes)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/heal">Heal</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/diplomacy">Diplomacy</Link></td><td className="c">(CHA)</td></tr><tr><td colSpan={2} className="se">You also receive additional class skills depending upon your <em>oracle mystery,</em> described below.</td></tr></tbody></table>
<h3 id="class-oracle-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-oracle--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Base Attack Bonus</th>
<th>Fort Save</th>
<th>Ref Save</th>
<th>Will Save</th>
<th>Special</th>
<th>1st</th>
<th>2nd</th>
<th>3rd</th>
<th>4th</th>
<th>5th</th>
<th>6th</th>
<th>7th</th>
<th>8th</th>
<th>9th</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+0</td>
<td>+0</td>
<td>+0</td>
<td>+2</td>
<td>Mystery, oracle's curse, orisons, revelation</td>
<td>3</td>
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
<td>+1</td>
<td>+0</td>
<td>+0</td>
<td>+3</td>
<td>Mystery spell</td>
<td>4</td>
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
<td>+2</td>
<td>+1</td>
<td>+1</td>
<td>+3</td>
<td>Revelation</td>
<td>5</td>
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
<td>+3</td>
<td>+1</td>
<td>+1</td>
<td>+4</td>
<td>Mystery spell</td>
<td>6</td>
<td>3</td>
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
<td>+3</td>
<td>+1</td>
<td>+1</td>
<td>+4</td>
<td>-</td>
<td>6</td>
<td>4</td>
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
<td>+4</td>
<td>+2</td>
<td>+2</td>
<td>+5</td>
<td>Mystery spell</td>
<td>6</td>
<td>5</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>+5</td>
<td>+2</td>
<td>+2</td>
<td>+5</td>
<td>Revelation</td>
<td>6</td>
<td>6</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>+6/+1</td>
<td>+2</td>
<td>+2</td>
<td>+6</td>
<td>Mystery spell</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>+6/+1</td>
<td>+3</td>
<td>+3</td>
<td>+6</td>
<td>-</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>+7/+2</td>
<td>+3</td>
<td>+3</td>
<td>+7</td>
<td>Mystery spell</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>+8/+3</td>
<td>+3</td>
<td>+3</td>
<td>+7</td>
<td>Revelation</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>+9/+4</td>
<td>+4</td>
<td>+4</td>
<td>+8</td>
<td>Mystery spell</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>+9/+4</td>
<td>+4</td>
<td>+4</td>
<td>+8</td>
<td>-</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>+10/+5</td>
<td>+4</td>
<td>+4</td>
<td>+9</td>
<td>Mystery spell</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>3</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>+11/+6/+1</td>
<td>+5</td>
<td>+5</td>
<td>+9</td>
<td>Revelation</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>4</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>+12/+7/+2</td>
<td>+5</td>
<td>+5</td>
<td>+10</td>
<td>Mystery spell</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>3</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>+12/+7/+2</td>
<td>+5</td>
<td>+5</td>
<td>+10</td>
<td>-</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>4</td>
<td>-</td>
</tr>
<tr>
<td>18th</td>
<td>+13/+8/+3</td>
<td>+6</td>
<td>+6</td>
<td>+11</td>
<td>Mystery spell</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>3</td>
</tr>
<tr>
<td>19th</td>
<td>+14/+9/+4</td>
<td>+6</td>
<td>+6</td>
<td>+11</td>
<td>Revelation</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>4</td>
</tr>
<tr>
<td>20th</td>
<td>+15/+10/+5</td>
<td>+6</td>
<td>+6</td>
<td>+12</td>
<td>Final revelation</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="class-oracle-spells-known">Spells Known</h3>
<ScrollContainer id="class-oracle--table-1"><table>
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
</tr>
</thead>
<tbody><tr>
<td>1st</td>
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
</tr>
<tr>
<td>2nd</td>
<td>5</td>
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
<td>3rd</td>
<td>5</td>
<td>3</td>
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
<td>6</td>
<td>3</td>
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
<td>5th</td>
<td>6</td>
<td>4</td>
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
<td>6th</td>
<td>7</td>
<td>4</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>7</td>
<td>5</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>8</td>
<td>5</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>8</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>9</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>18th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>19th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>2</td>
</tr>
<tr>
<td>20th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>3</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={1}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><th>Armor?</th><td colSpan={2}>Light and Medium armors</td></tr><tr><th>Shields?</th><td colSpan={2}>Yes, except tower shields</td></tr><tr><td colSpan={3} className="sw se">Some oracle revelations grant additional proficiencies.</td></tr></tbody></table>
<Ability id="class-oracle-spells" icon={["magic-swirl"]}><Pair single id="class-oracle-spells">Spells</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">To learn or cast a spell, you must have a Charisma score equal to at least 10 + the spell level. You can cast only a certain number of spells of each spell level per day, as shown on the table above. In addition, you receive <Link to="/rule/determine_bonuses">bonus spells per day</Link> if you have a high Charisma score.</Pair>
<Pair title="Ability">You gain the ability to cast divine spells which are drawn from the <Link to="/main/spells_oracle">oracle spell list</Link>. The DC for a saving throw against spells you cast is 10 + the spell level + your Charisma modifier. You do not need to prepare these spells in advance; you can cast any spell you know at any time, assuming you haven't yet used up your allotment of spells per day for the spell's level.</Pair><Pair title="Info"><p>An oracle's selection of spells is extremely limited. You begin play knowing four 0-level spells and two 1st-level spells of your choice. At each new oracle level you gain one or more new spells as indicated on the table above. Unlike spells per day, the number of spells you know is not affected by your Charisma score.</p>
<p>In addition to the spells gained by oracles as they gain levels, you also add all of either the <Link to="/main/spell_groupings">cure spells or the inflict spells</Link> to your list of spells known. This choice is made when you gain your first oracle level and cannot be changed. These spells are added as soon as you are capable of casting them.</p>
<p>At 4th level, and every two levels thereafter (6th, 8th, and so on), you can choose to learn a new spell in place of one you already know. In effect, you "lose" the old spell in exchange for the new one. The new spell's level must be the same as that of the spell being exchanged. You may swap out only a single spell at any given level and must choose whether or not to swap the spell at the same time that you gain new spells known for the level. You cannot swap any <em>cure</em> or <em>inflict</em> spells, nor can you swap any spells gained from your mystery.</p></Pair><Pair title="Special">Oracles do not need to provide a divine focus to cast spells that list divine focus (DF) as part of the components.</Pair></Ability><Ability id="class-oracle-orisons" icon={["magic-swirl"]}>
<Pair single id="class-oracle-orisons">Orisons</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You learn a number of orisons, or 0-level divine spells. These spells are cast like any other spell, but they don't consume slots and can be used again. Orisons cast using other spell slots, such as those due to metamagic feats, consume slots normally.</Pair>
</Ability>
<Ability id="class-oracle-mystery" icon={["stairs-goal","magic-swirl","skills"]}>
<Pair single id="class-oracle-mystery" flavor="Each oracle draws upon a divine mystery to grant her spells and powers.">Mystery</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You must pick one <Link to="/ability/mystery">mystery</Link> upon taking your first level of oracle. Once made, this choice cannot be changed. This mystery grants additional class skills and other special abilities.</Pair>
<Pair title="At 2nd Level">At 2nd level, and every two levels thereafter (4th, 6th, 8th, and so on), you learn an additional spell derived from your mystery. These spells are in addition to the number of spells gained each level. They cannot be exchanged for different spells at higher levels.</Pair>
</Ability>
<p>An oracle's mystery can represent a devotion to one ideal, prayers to deities that support the concept, or a natural calling to champion a cause. For example, an oracle with the <Link to="/mystery/waves">waves</Link> mystery might have been born at sea and found a natural calling to worship the gods of the oceans, rivers, and lakes, be they benign or malevolent. Regardless of its source, the mystery manifests in a number of ways as the oracle gains levels.</p>
<Ability id="class-oracle-oracles-curse-ex" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="class-oracle-oracles-curse-ex" flavor="Each oracle is cursed, but this curse comes with a benefit as well as a hindrance.">Oracle's Curse (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You must choose a single <Link to="/ability/oracle_curses">oracle curse</Link>. Once made, this choice cannot be changed, and it cannot be removed or dispelled without the aid of a deity. Your curse is based on your oracle level plus one for every two levels or Hit Dice other than oracle.</Pair>
</Ability>
<Ability id="class-oracle-revelation" icon={["stairs-goal"]}>
<Pair single id="class-oracle-revelation" flavor="An oracle uncovers a new secret about her mystery that grants her powers and abilities.">Revelation</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You select a revelation from the list of revelations available to your mystery. Unless otherwise noted, activating the power of a revelation is a <strong className="hl">standard action</strong>.</Pair>
<Pair title="At 3rd Level">You gain a new revelation.</Pair>
<Pair title="At 7th Level">You gain a new revelation.</Pair>
<Pair title="At 11th Level">You gain a new revelation.</Pair>
<Pair title="At 15th Level">You gain a new revelation.</Pair>
<Pair title="At 19th Level">You gain a new revelation.</Pair>
<Pair title="Special">If a revelation is chosen after 1st level, you gain all of the abilities and bonuses granted by that revelation based on your current level.</Pair>
</Ability>
<Ability id="class-oracle-final-revelation" icon={["stairs-goal"]}>
<Pair single id="class-oracle-final-revelation" flavor="At 20th level, an oracle learns the final revelation about her mystery, granting her amazing powers and abilities.">Final Revelation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">You gain the <em>final revelation</em> listed in your mystery. The nature of these bonuses depends upon the mystery.</Pair>
</Ability>
<h3 id="class-oracle-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-oracle--table-2"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Deep Magics (Su)</td><td>At 20th level, the character's repertoire of spells deepens dramatically. She gains an additional spell known for each spell level she can cast. A character of any class with spells known can select this capstone.</td></tr>
<tr><td>Diverse Mysteries (Su)</td><td>At 20th level, the oracle knows that sometimes she needs different tools to do her patron's work. The oracle can select two revelations from another mystery. She must meet the prerequisites for these revelations.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-oracle-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Aasimar:</strong> Add +1/6 to the oracle's level for the purpose of determining the effects of one revelation.<sup><InnerLink showBacklink="backlink-class-oracle-ref-A-1" id="class-oracle-ref-A-1" data-hash-target to="class-oracle-A">1</InnerLink></sup></p>
<p><strong>Catfolk:</strong> Add one spell known from the oracle spell list. This spell must be at least one level below the highest spell level the oracle can cast.<sup><InnerLink showBacklink="backlink-class-oracle-ref-B-1" id="class-oracle-ref-B-1" data-hash-target to="class-oracle-B">2</InnerLink></sup></p>
<p><strong>Changeling:</strong> Add +1/2 to the oracle's level for the purpose of determining the effects of the oracle's curse ability.<sup><InnerLink showBacklink="backlink-class-oracle-ref-C-1" id="class-oracle-ref-C-1" data-hash-target to="class-oracle-C">3</InnerLink></sup></p>
<p><strong>Dhampir:</strong> Add +1/2 point of negative energy damage to spells that deal negative energy damage.<sup><InnerLink showBacklink="backlink-class-oracle-ref-D-1" id="class-oracle-ref-D-1" data-hash-target to="class-oracle-D">4</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Reduce the penalty for not being proficient with one weapon by 1. When the nonproficiency penalty for a weapon becomes 0 because of this ability, the oracle is treated as having the appropriate Martial or Exotic Weapon Proficiency feat with that weapon.<sup><InnerLink showBacklink="backlink-class-oracle-ref-E-1" id="class-oracle-ref-E-1" data-hash-target to="class-oracle-E">5</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-oracle-ref-F-1" id="class-oracle-ref-F-1" data-hash-target to="class-oracle-F">6</InnerLink></sup></p>
<p><strong>Elf:</strong> Add +1/6 to the oracle's level for the purpose of determining the effects of one revelation.<sup><InnerLink showBacklink="backlink-class-oracle-ref-G-1" id="class-oracle-ref-G-1" data-hash-target to="class-oracle-G">7</InnerLink></sup></p>
<p><strong>Fetchling:</strong> Treat the oracle's level as +1/3 higher for the purposes of determining which of its racial spell-like abilities it can use.<sup><InnerLink showBacklink="backlink-class-oracle-ref-H-1" id="class-oracle-ref-H-1" data-hash-target to="class-oracle-H">8</InnerLink></sup></p>
<p><strong>Ganzi:</strong> Add one spell known of the enchantment school from the cleric or wizard spell list. This spell must be at least 1 level below the highest spell level the oracle can cast.<sup><InnerLink showBacklink="backlink-class-oracle-ref-I-1" id="class-oracle-ref-I-1" data-hash-target to="class-oracle-I">9</InnerLink></sup></p>
<p><strong>Gathlain:</strong> Add one spell known that is an enchantment spell from the sorcerer/wizard spell list. This spell must be at least one level below the highest spell level the oracle can cast. That spell is treated as one level higher unless it is also on the oracle spell list.<sup><InnerLink showBacklink="backlink-class-oracle-ref-J-1" id="class-oracle-ref-J-1" data-hash-target to="class-oracle-J">10</InnerLink></sup></p>
<p><strong>Gnome:</strong> Add +1/6 to the oracle's level for the purpose of determining the effects of the oracle's curse ability.<sup><InnerLink showBacklink="backlink-class-oracle-ref-K-1" id="class-oracle-ref-K-1" data-hash-target to="class-oracle-K">11</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-oracle-ref-L-1" id="class-oracle-ref-L-1" data-hash-target to="class-oracle-L">12</InnerLink></sup></p>
<p><strong>Goblin:</strong> Add +1 on <Link to="/rule/concentration">concentration</Link> checks made when casting spells with the fire descriptor.<sup><InnerLink showBacklink="backlink-class-oracle-ref-M-1" id="class-oracle-ref-M-1" data-hash-target to="class-oracle-M">13</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-oracle-ref-N-1" id="class-oracle-ref-N-1" data-hash-target to="class-oracle-N">14</InnerLink></sup></p>
<p><strong>Grippli:</strong> Add one spell known with the poison or water descriptor from the druid's spell list. This spell must be at least 1 level below the highest spell level the oracle can cast. The spell is treated as 1 spell level higher, unless it is also on the oracle spell list.<sup><InnerLink showBacklink="backlink-class-oracle-ref-O-1" id="class-oracle-ref-O-1" data-hash-target to="class-oracle-O">15</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Add one spell known from the oracle spell list. This spell must be at least one level below the highest spell level the oracle can cast.<sup><InnerLink showBacklink="backlink-class-oracle-ref-P-1" id="class-oracle-ref-P-1" data-hash-target to="class-oracle-P">16</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Select one revelation normally usable a number of times per day equal to 3 + the oracle's Charisma modifier. Add 1/2 to the number of uses per day of that revelation.<sup><InnerLink showBacklink="backlink-class-oracle-ref-Q-1" id="class-oracle-ref-Q-1" data-hash-target to="class-oracle-Q">17</InnerLink></sup></p>
<p><strong>Halfling:</strong> Add +1/2 to the oracle's level for the purpose of determining the effects of the oracle's curse ability.<sup><InnerLink showBacklink="backlink-class-oracle-ref-R-1" id="class-oracle-ref-R-1" data-hash-target to="class-oracle-R">18</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Add one spell known from the oracle spell list. This spell must be at least one level below the highest spell level the oracle can cast.<sup><InnerLink showBacklink="backlink-class-oracle-ref-S-1" id="class-oracle-ref-S-1" data-hash-target to="class-oracle-S">19</InnerLink></sup></p>
<p><strong>Human:</strong> Add one spell known from the oracle spell list. This spell must be at least one level below the highest spell level the oracle can cast.<sup><InnerLink showBacklink="backlink-class-oracle-ref-T-1" id="class-oracle-ref-T-1" data-hash-target to="class-oracle-T">20</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-oracle-ref-U-1" id="class-oracle-ref-U-1" data-hash-target to="class-oracle-U">21</InnerLink></sup></p>
<p><strong>Ifrit:</strong> Add +1/6 to the oracle's level for the purpose of determining the effects of one revelation.<sup><InnerLink showBacklink="backlink-class-oracle-ref-V-1" id="class-oracle-ref-V-1" data-hash-target to="class-oracle-V">22</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-oracle-ref-W-1" id="class-oracle-ref-W-1" data-hash-target to="class-oracle-W">23</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Reduce the penalty for not being proficient for one weapon by 1. When the nonproficiency penalty for a weapon becomes 0 because of this ability, the oracle is treated as having the appropriate Martial or Exotic Weapon Proficiency feat for that weapon.<sup><InnerLink showBacklink="backlink-class-oracle-ref-X-1" id="class-oracle-ref-X-1" data-hash-target to="class-oracle-X">24</InnerLink></sup></p>
<p><strong>Kobold:</strong> Add +1/4 to the armor or natural armor bonus granted by oracle spells she casts on herself.<sup><InnerLink showBacklink="backlink-class-oracle-ref-Y-1" id="class-oracle-ref-Y-1" data-hash-target to="class-oracle-Y">25</InnerLink></sup></p>
<p><strong>Merfolk:</strong> Add one spell known from the oracle spell list. This spell must be at least 1 level below the highest level spell the oracle can cast.<sup><InnerLink showBacklink="backlink-class-oracle-ref-Z-1" id="class-oracle-ref-Z-1" data-hash-target to="class-oracle-Z">26</InnerLink></sup></p>
<p><strong>Nagaji:</strong> Add 1/6 to the oracle's level for the purpose of determining the effects of one revelation.<sup><InnerLink showBacklink="backlink-class-oracle-ref-1-1" id="class-oracle-ref-1-1" data-hash-target to="class-oracle-1">27</InnerLink></sup></p>
<p><strong>Samsaran:</strong> Add one spell known from the oracle spell list. This spell must be at least one level below the highest spell level the oracle can cast.<sup><InnerLink showBacklink="backlink-class-oracle-ref-2-1" id="class-oracle-ref-2-1" data-hash-target to="class-oracle-2">28</InnerLink></sup></p>
<p><strong>Shabti:</strong> Add one spell from the psychic spell list that isn't on the cleric spell list to the list of spells the oracle knows. This spell must be at least 1 level below the highest spell level the oracle can cast.<sup><InnerLink showBacklink="backlink-class-oracle-ref-3-1" id="class-oracle-ref-3-1" data-hash-target to="class-oracle-3">29</InnerLink></sup></p>
<p><strong>Strix:</strong> Add one spell known from the oracle spell list. This spell must be at least 1 level below the highest spell level the oracle can cast.<sup><InnerLink showBacklink="backlink-class-oracle-ref-4-1" id="class-oracle-ref-4-1" data-hash-target to="class-oracle-4">30</InnerLink></sup></p>
<p><strong>Svirfneblin:</strong> Add one spell known from the oracle spell list. This spell must be at least one level below the highest spell level the oracle can cast.<sup><InnerLink showBacklink="backlink-class-oracle-ref-5-1" id="class-oracle-ref-5-1" data-hash-target to="class-oracle-5">31</InnerLink></sup></p>
<p><strong>Sylph:</strong> Add +1/6 to the oracle's level for the purpose of determining the effects of one revelation.<sup><InnerLink showBacklink="backlink-class-oracle-ref-6-1" id="class-oracle-ref-6-1" data-hash-target to="class-oracle-6">32</InnerLink></sup></p>
<p><strong>Tengu:</strong> Add +1/2 to the oracle's level for the purpose of determining the effects of the oracle's curse ability.<sup><InnerLink showBacklink="backlink-class-oracle-ref-7-1" id="class-oracle-ref-7-1" data-hash-target to="class-oracle-7">33</InnerLink></sup></p>
<p><strong>Vine leshy:</strong> An oracle with the nature or wood mystery adds one spell from the druid's spell list that isn't on the cleric spell list to the oracle's spell list; she still must select this spell as one of her spells known in order to cast it. This spell must be at least 1 level lower than the highest spell level the oracle can cast.<sup><InnerLink showBacklink="backlink-class-oracle-ref-8-1" id="class-oracle-ref-8-1" data-hash-target to="class-oracle-8">34</InnerLink></sup></p>
<p><strong>Wayang:</strong> Add one spell known from the wizard's illusion school spell list. This spell must be at least one level below the highest spell level the oracle can cast. That spell is treated as one level higher unless it is also on the oracle spell list.<sup><InnerLink showBacklink="backlink-class-oracle-ref-9-1" id="class-oracle-ref-9-1" data-hash-target to="class-oracle-9">35</InnerLink></sup></p>
<p><strong>Wyrwood:</strong> Add one spell known from the wizard's evocation school spell list. This spell must be at least 1 level below the highest-level spell the oracle can cast. That spell is treated as 1 level higher unless it is also on the oracle spell list.<sup><InnerLink showBacklink="backlink-class-oracle-ref-0-1" id="class-oracle-ref-0-1" data-hash-target to="class-oracle-0">36</InnerLink></sup></p>
<p><strong>Wyvaran:</strong> Add 1/4 to the oracle's level for the purpose of determining the effects of an oracle curse.<sup><InnerLink showBacklink="backlink-class-oracle-ref-!-1" id="class-oracle-ref-!-1" data-hash-target to="class-oracle-!">37</InnerLink></sup></p>
</div>
<h3 id="class-oracle-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-oracle/ancient_lorekeeper">Ancient Lorekeeper</Link></p><p><strong>Modifies or Replaces:</strong> Mystery Bonus Skills; 4th, 6th, 8th, 10th, 12th, 14th, 16th, and 18th-level Bonus Spells</p><p>(Elf Only) The ancient lorekeeper is a repository for all the beliefs and vast knowledge of an elven people.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/black_blooded_oracle">Black-Blooded Oracle</Link></p><p><strong>Modifies or Replaces:</strong> Oracle's Curse</p><p>The black-blooded oracle has been infused with the eerie influence of strange fluids that seep from the rock in the deepest pits of the Darklands, the so-called Black Blood of Orv.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/community_guardian">Community Guardian</Link></p><p><strong>Modifies or Replaces:</strong> Mystery Class Skills; 2nd, 4th, 6th, 10th, 12th level Mystery Bonus Spells; 1st, 3rd-level Revelations</p><p>(Halfling Only) The community guardian is chosen to protect and succor the weak and innocent within her community.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/cyclopean_seer">Cyclopean Seer</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Curse; Bonus Spells; 1st and 7th-level Revelations; Final Revelation</p><p>A cyclopean seer draws power from the mysterious prophetic abilities of ancient giants.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/divine_numerologist">Divine Numerologist</Link></p><p><strong>Modifies or Replaces:</strong> 10th, 12th, 14th, 16th, 18th-level Mystery Bonus Spells; 1st, 7th-level Revelation; Final Revelation</p><p>Divine numerologists use esoteric mathematics and numbers traditions to peer into the past and future and extract meaningful portents.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/dual_cursed_oracle">Dual-Cursed Oracle</Link></p><p><strong>Modifies or Replaces:</strong> Oracle's Curse; Mystery Class Skills; Mystery Bonus Spells</p><p>All oracles are cursed to some degree, but some oracles bear an even heavier burden.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/elementalist_oracle">Elementalist Oracle</Link></p><p><strong>Modifies or Replaces:</strong> 4th, 6th, 8th, 10th, 12th, 18th-level Mystery Bonus Spells; 1st, 11th-level Revelation; Final Revelation</p><p>An elementalist oracle has an affinity with the elements and elemental creatures. She can communicate with elemental creatures, and can eventually become an elemental herself.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/enlightened_philosopher">Enlightened Philosopher</Link></p><p><strong>Modifies or Replaces:</strong> Mystery Class Skills; Mystery Bonus Spells; 7th-level Revelation; Final Revelation</p><p>The enlightened philosopher seeks enlightenment through compassion, moderation, and humility.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/hermit">Hermit</Link></p><p><strong>Modifies or Replaces:</strong> Mystery; Curse; 4th, 8th, 12th, 16th-level Bonus Spells; 1st, 7th-level Revelation</p><p>A hermit is a recluse who gained her oracular powers from isolation in a deep desert, on a mountain peak, or in another secluded location.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/inerrant_voice">Inerrant Voice</Link></p><p><strong>Modifies or Replaces:</strong> 2nd, 4th, 8th, 14th-level Bonus Spells; 3rd-level Revelation</p><p>An inerrant voice serves as a spiritual advisor to either a monarch or noble.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/keleshite_prophet">Keleshite Prophet</Link></p><p><strong>Modifies or Replaces:</strong> Mystery Skills; 6th, 10th, 12th, 16th, 18th-level Bonus Spells; 1st-level Revelation</p><p>Keleshite prophets help guide and serve the vast Padishah Empire of Kelesh and its interests across Golarion.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/oceans_echo">Ocean's Echo</Link></p><p><strong>Modifies or Replaces:</strong> Mystery Bonus Skills; 4th, 8th, 10th, 12th, 14th-level Bonus Spells; 1st, 3rd, 15th-level Revelation</p><p>Although many merfolk claim deep connections to both art and the natural world, a rare few merfolk can manipulate the forces of nature and weave them into song.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/pei_zin_practitioner">Pei Zin Practitioner</Link></p><p><strong>Modifies or Replaces:</strong> Mystery Class Skills; 1st-level Revelation</p><p>In distant Tian Xia, herbalists practice an obscure alchemical art known as <Link to="/rule/pei_zin_herbalism">Pei Zin herbalism</Link>, which involves medicinal and restorative techniques that are used throughout much of that continent.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/planar_oracle">Planar Oracle</Link></p><p><strong>Modifies or Replaces:</strong> Mystery Bonus Spells; 3rd-level Revelation; Final Revelation</p><p>A planar oracle has an affinity with one of the Outer Planes.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/possessed_oracle">Possessed Oracle</Link></p><p><strong>Modifies or Replaces:</strong> Oracle's Curse; Mystery Bonus Spells; 1st-level Revelation</p><p>Some oracles are possessed by spirits, demons, or similar beings.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/psychic_searcher">Psychic Searcher</Link></p><p><strong>Modifies or Replaces:</strong> Bonus Spells; 2nd-level Mystery Spell; 3rd-level Revelation</p><p>A psychic searcher is devoted to revealing the hidden within the world around her by sensing and communing with residual mental energy, haunts, and fragments of living spirits that can dwell in objects or rooms.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/purifier">Purifier</Link></p><p><strong>Modifies or Replaces:</strong> Bonus Spells; Spellcasting; 3rd, 7th, 11th-level Revelation</p><p>(Aasimar Only) The purifier seeks out signs of possession or mind control that manifest from unwilling (and often unwitting) servants for fiendish corruptors and their mortal minions.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/reincarnated_oracle">Reincarnated Oracle</Link></p><p><strong>Modifies or Replaces:</strong> Oracle's Curse; Bonus Spells; 1st, 3rd, or 7th-level Revelations (must pick two)</p><p>(Samsaran Only) A reincarnated oracle draws her knowledge and power from the experiences of her previous lives.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/river_soul">River Soul</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; 2nd, 6th, 8th, 10th ,18th-level Mystery Bonus Spells; Oracle's Curse; 1st, 11th-level Revelation; Final Revelation</p><p>River soul oracles derive their powers from their bonds with rivers, whether these waterways are rapid cascades or lazy channels plied by boats.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/seeker">Seeker</Link></p><p><strong>Modifies or Replaces:</strong> Mystery Class Skills, 3rd-level Revelation, 15th-level Revelation</p><p>The seeker is obsessed with learning about their heritage and history, researching ancient texts and obscure ruins for clues.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/seer">Seer</Link></p><p><strong>Modifies or Replaces:</strong> Mystery Bonus Spells; 1st-level Revelation; 3rd-level Revelation</p><p>While all oracles possess some ability at divination, the seer is a true prophet, able to see things as they really are, or will be.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/shigenjo">Shigenjo</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Bonus Spells; 7th-level Revelation; Final Revelation</p><p>(Tengu Only) The shigenjo walks the path of enlightenment and transcendence by seeking oneness with the celestial spirits.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/spirit_guide">Spirit Guide</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; 3rd, 7th, and 15th-level Revelations</p><p>Through her exploration of the universe's mysteries, a spirit guide opens connections to the spirit world and forms bonds with the entities that inhabit it.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/stargazer">Stargazer</Link></p><p><strong>Modifies or Replaces:</strong> Mystery Bonus Spells; 1st-level Revelation; 7th-level Revelation</p><p>Some oracles seek meaning in the pattern of the stars across the night sky, the trails of comets, and the eternal orbits of the planets.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/tree_soul">Tree Soul</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Weapon and Armor Proficiency; 2nd, 10th, 12th, 14th, 16th, 18th-level Mystery Bonus Spells; Oracle's Curse; 1st, 11th-level Revelation; Final Revelation</p><p>Tree souls develop an affinity not just with trees but also with objects carved from them, feeling the essence of the tree's spirit living within.</p></div>
<div className="archetype"><p><Link to="/arc-oracle/warsighted">Warsighted</Link></p><p><strong>Modifies or Replaces:</strong> 1st, 7th, 11th, and 15th-level Revelations</p><p>A warsighted's unique gifts are not in strange magical revelations, but in her ability to adapt in the midst of a battle with new fighting techniques.</p></div>
<h3 id="class-oracle-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"oracle archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Bonus Spells"},{"header":"2nd-level Bonus Spell"},{"header":"4th-level Bonus Spell"},{"header":"6th-level Bonus Spell"},{"header":"8th-level Bonus Spell"},{"header":"10th-level Bonus Spell"},{"header":"12th-level Bonus Spell"},{"header":"14th-level Bonus Spell"},{"header":"16th-level Bonus Spell"},{"header":"18th-level Bonus Spell"},{"header":"Class Skills"},{"header":"Mystery"},{"header":"Mystery Skills"},{"header":"1st-level Revelation"},{"header":"1st, 3rd, or 7th-level Revelations (must pick two)"},{"header":"3rd-level Revelation"},{"header":"7th-level Revelation"},{"header":"11th-level Revelation"},{"header":"15th-level Revelation"},{"header":"Final Revelation"},{"header":"Oracle's Curse"},{"header":"Spellcasting"},{"header":"Weapon/Armor Proficiency"}],"data":[["‹arc-oracle/Ancient Lorekeeper›",null,null,"X","X","X","X","X","X","X","X",null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-oracle/Black-Blooded Oracle›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null],["‹arc-oracle/Community Guardian›",null,"X","X","X",null,"X","X",null,null,null,null,null,"X","X",null,"X",null,null,null,null,null,null,null],["‹arc-oracle/Cyclopean Seer›","X",null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,"X",null,null,"X","X",null,null],["‹arc-oracle/Divine Numerologist›",null,null,null,null,null,"X","X","X","X","X",null,null,null,"X",null,null,"X",null,null,"X",null,null,null],["‹arc-oracle/Dual-Cursed Oracle›","X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,null],["‹arc-oracle/Elementalist Oracle›",null,null,"X","X","X","X","X",null,null,"X",null,null,null,"X",null,null,null,"X",null,"X",null,null,null],["‹arc-oracle/Enlightened Philosopher›","X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,"X",null,null,null],["‹arc-oracle/Hermit›",null,null,"X",null,"X",null,"X",null,"X",null,null,"X",null,"X",null,null,"X",null,null,null,"X",null,null],["‹arc-oracle/Inerrant Voice›",null,"X","X",null,"X",null,null,"X",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-oracle/Keleshite Prophet›",null,null,null,"X",null,"X","X",null,"X","X",null,null,"X","X",null,null,null,null,null,null,null,null,null],["‹arc-oracle/Ocean's Echo›",null,null,"X",null,"X","X","X","X",null,null,null,null,"X","X",null,"X",null,null,"X",null,null,null,null],["‹arc-oracle/Pei Zin Practitioner›",null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null],["‹arc-oracle/Planar Oracle›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null],["‹arc-oracle/Possessed Oracle›","X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,null],["‹arc-oracle/Psychic Searcher›","X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-oracle/Purifier›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,"X",null],["‹arc-oracle/Reincarnated Oracle›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null],["‹arc-oracle/River Soul›",null,"X",null,"X","X","X",null,null,null,"X",null,null,"X","X",null,null,null,"X",null,"X","X",null,null],["‹arc-oracle/Seeker›",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,"X",null,null,null,null],["‹arc-oracle/Seer›","X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null],["‹arc-oracle/Shigenjo›","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,"X",null,null,null],["‹arc-oracle/Spirit Guide›",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X","X",null,"X",null,null,null,null],["‹arc-oracle/Stargazer›","X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null],["‹arc-oracle/Tree Soul›",null,"X",null,null,null,"X","X","X","X","X",null,null,"X","X",null,null,null,"X",null,"X","X",null,"X"],["‹arc-oracle/Warsighted›",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X","X","X",null,null,null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-oracle-label">Footnotes</h3>
<ol>
<li id="class-oracle-A">
<p><Link to="/source/advanced_race_guide">Advanced Race Guide pg. 85</Link> <InnerLink id="backlink-class-oracle-ref-A-1" data-hash-target to="class-oracle-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-oracle-B">
<p>Advanced Race Guide pg. 92 <InnerLink id="backlink-class-oracle-ref-B-1" data-hash-target to="class-oracle-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-oracle-C">
<p>Advanced Race Guide pg. 184 <InnerLink id="backlink-class-oracle-ref-C-1" data-hash-target to="class-oracle-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-oracle-D">
<p>Advanced Race Guide pg. 98 <InnerLink id="backlink-class-oracle-ref-D-1" data-hash-target to="class-oracle-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-oracle-E">
<p>Advanced Race Guide pg. 13 <InnerLink id="backlink-class-oracle-ref-E-1" data-hash-target to="class-oracle-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-oracle-F">
<p><Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 11</Link> <InnerLink id="backlink-class-oracle-ref-F-1" data-hash-target to="class-oracle-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-oracle-G">
<p>Advanced Race Guide pg. 23 <InnerLink id="backlink-class-oracle-ref-G-1" data-hash-target to="class-oracle-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-oracle-H">
<p>Advanced Race Guide pg. 109 <InnerLink id="backlink-class-oracle-ref-H-1" data-hash-target to="class-oracle-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-oracle-I">
<p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 19</Link> <InnerLink id="backlink-class-oracle-ref-I-1" data-hash-target to="class-oracle-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-oracle-J">
<p><Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 9</Link> <InnerLink id="backlink-class-oracle-ref-J-1" data-hash-target to="class-oracle-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
<li id="class-oracle-K">
<p>Advanced Race Guide pg. 33 <InnerLink id="backlink-class-oracle-ref-K-1" data-hash-target to="class-oracle-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
<li id="class-oracle-L">
<p>Advanced Player's Guide pg. 15 <InnerLink id="backlink-class-oracle-ref-L-1" data-hash-target to="class-oracle-ref-L-1" aria-label="Back to reference L-1">↩</InnerLink></p>
</li>
<li id="class-oracle-M">
<p>Advanced Race Guide pg. 115 <InnerLink id="backlink-class-oracle-ref-M-1" data-hash-target to="class-oracle-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink></p>
</li>
<li id="class-oracle-N">
<p><Link to="/source/goblins_of_golarion">Goblins of Golarion pg. 31</Link> <InnerLink id="backlink-class-oracle-ref-N-1" data-hash-target to="class-oracle-ref-N-1" aria-label="Back to reference N-1">↩</InnerLink></p>
</li>
<li id="class-oracle-O">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 8</Link> <InnerLink id="backlink-class-oracle-ref-O-1" data-hash-target to="class-oracle-ref-O-1" aria-label="Back to reference O-1">↩</InnerLink></p>
</li>
<li id="class-oracle-P">
<p>Advanced Race Guide pg. 43 <InnerLink id="backlink-class-oracle-ref-P-1" data-hash-target to="class-oracle-ref-P-1" aria-label="Back to reference P-1">↩</InnerLink></p>
</li>
<li id="class-oracle-Q">
<p><Link to="/source/horror_adventures">Horror Adventures pg. 40</Link> <InnerLink id="backlink-class-oracle-ref-Q-1" data-hash-target to="class-oracle-ref-Q-1" aria-label="Back to reference Q-1">↩</InnerLink></p>
</li>
<li id="class-oracle-R">
<p>Advanced Race Guide pg. 63 <InnerLink id="backlink-class-oracle-ref-R-1" data-hash-target to="class-oracle-ref-R-1" aria-label="Back to reference R-1">↩</InnerLink></p>
</li>
<li id="class-oracle-S">
<p>Advanced Race Guide pg. 53 <InnerLink id="backlink-class-oracle-ref-S-1" data-hash-target to="class-oracle-ref-S-1" aria-label="Back to reference S-1">↩</InnerLink></p>
</li>
<li id="class-oracle-T">
<p>Advanced Race Guide pg. 73 <InnerLink id="backlink-class-oracle-ref-T-1" data-hash-target to="class-oracle-ref-T-1" aria-label="Back to reference T-1">↩</InnerLink></p>
</li>
<li id="class-oracle-U">
<p>Advanced Player's Guide pg. 23 <InnerLink id="backlink-class-oracle-ref-U-1" data-hash-target to="class-oracle-ref-U-1" aria-label="Back to reference U-1">↩</InnerLink></p>
</li>
<li id="class-oracle-V">
<p>Advanced Race Guide pg. 127 <InnerLink id="backlink-class-oracle-ref-V-1" data-hash-target to="class-oracle-ref-V-1" aria-label="Back to reference V-1">↩</InnerLink></p>
</li>
<li id="class-oracle-W">
<p>Blood of the Beast pg. 12 <InnerLink id="backlink-class-oracle-ref-W-1" data-hash-target to="class-oracle-ref-W-1" aria-label="Back to reference W-1">↩</InnerLink></p>
</li>
<li id="class-oracle-X">
<p>Advanced Race Guide pg. 192 <InnerLink id="backlink-class-oracle-ref-X-1" data-hash-target to="class-oracle-ref-X-1" aria-label="Back to reference X-1">↩</InnerLink></p>
</li>
<li id="class-oracle-Y">
<p>Advanced Race Guide pg. 133 <InnerLink id="backlink-class-oracle-ref-Y-1" data-hash-target to="class-oracle-ref-Y-1" aria-label="Back to reference Y-1">↩</InnerLink></p>
</li>
<li id="class-oracle-Z">
<p><Link to="/source/blood_of_the_sea">Blood of the Sea pg. 13</Link> <InnerLink id="backlink-class-oracle-ref-Z-1" data-hash-target to="class-oracle-ref-Z-1" aria-label="Back to reference Z-1">↩</InnerLink></p>
</li>
<li id="class-oracle-1">
<p>Blood of the Beast pg. 16 <InnerLink id="backlink-class-oracle-ref-1-1" data-hash-target to="class-oracle-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="class-oracle-2">
<p>Advanced Race Guide pg. 198 <InnerLink id="backlink-class-oracle-ref-2-1" data-hash-target to="class-oracle-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="class-oracle-3">
<p>Plane-Hopper's Handbook pg. 23 <InnerLink id="backlink-class-oracle-ref-3-1" data-hash-target to="class-oracle-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
<li id="class-oracle-4">
<p><Link to="/source/pathfinder_101_the_kintargo_contract">Pathfinder #101: The Kintargo Contract pg. 73</Link> <InnerLink id="backlink-class-oracle-ref-4-1" data-hash-target to="class-oracle-ref-4-1" aria-label="Back to reference 4-1">↩</InnerLink></p>
</li>
<li id="class-oracle-5">
<p>Advanced Race Guide pg. 204 <InnerLink id="backlink-class-oracle-ref-5-1" data-hash-target to="class-oracle-ref-5-1" aria-label="Back to reference 5-1">↩</InnerLink></p>
</li>
<li id="class-oracle-6">
<p>Advanced Race Guide pg. 157 <InnerLink id="backlink-class-oracle-ref-6-1" data-hash-target to="class-oracle-ref-6-1" aria-label="Back to reference 6-1">↩</InnerLink></p>
</li>
<li id="class-oracle-7">
<p>Advanced Race Guide pg. 163 <InnerLink id="backlink-class-oracle-ref-7-1" data-hash-target to="class-oracle-ref-7-1" aria-label="Back to reference 7-1">↩</InnerLink></p>
</li>
<li id="class-oracle-8">
<p><Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 21</Link> <InnerLink id="backlink-class-oracle-ref-8-1" data-hash-target to="class-oracle-ref-8-1" aria-label="Back to reference 8-1">↩</InnerLink></p>
</li>
<li id="class-oracle-9">
<p>Advanced Race Guide pg. 210 <InnerLink id="backlink-class-oracle-ref-9-1" data-hash-target to="class-oracle-ref-9-1" aria-label="Back to reference 9-1">↩</InnerLink></p>
</li>
<li id="class-oracle-0">
<p><Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 6</Link> <InnerLink id="backlink-class-oracle-ref-0-1" data-hash-target to="class-oracle-ref-0-1" aria-label="Back to reference 0-1">↩</InnerLink></p>
</li>
<li id="class-oracle-!">
<p><Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 18</Link> <InnerLink id="backlink-class-oracle-ref-!-1" data-hash-target to="class-oracle-ref-!-1" aria-label="Back to reference !-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _paladin = {hasJL:true,title: "Paladin", jsx: <><div className="jumpList" id="class-paladin-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-paladin-code-of-conduct">Code of Conduct</InnerLink></li><li><InnerLink toTop to="class-paladin-aura-of-good-ex">Good and Evil</InnerLink></li><li><InnerLink toTop to="class-paladin-oaths">Oaths</InnerLink></li><li><InnerLink toTop to="class-paladin-divine-grace-su">Grace and Healing</InnerLink></li><li><InnerLink toTop to="class-paladin-aura-of-courage-su">Courage, Health, and Mercy</InnerLink></li><li><InnerLink toTop to="class-paladin-channel-positive-energy-su">Channel Positive Energy</InnerLink></li><li><InnerLink toTop to="class-paladin-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-paladin-divine-bond-sp-su">Divine Bond</InnerLink></li><li><InnerLink toTop to="class-paladin-aura-of-resolvesu">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-paladin-ex-paladins">Ex-Paladins</InnerLink></li><li><InnerLink toTop to="class-paladin-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-paladin-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-paladin-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-paladin-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-paladin-paladin">Paladin</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 60</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<p>Through a select, worthy few shines the power of the divine. Called paladins, these noble souls dedicate their swords and lives to the battle against evil. Knights, crusaders, and law-bringers, paladins seek not just to spread divine justice but to embody the teachings of the virtuous deities they serve. In pursuit of their lofty goals, they adhere to ironclad laws of morality and discipline. As reward for their righteousness, these holy champions are blessed with boons to aid them in their quests: powers to banish evil, heal the innocent, and inspire the faithful. Although their convictions might lead them into conflict with the very souls they would save, paladins weather endless challenges of faith and dark temptations, risking their lives to do right and fighting to bring about a brighter future.</p>
<p><strong>Role:</strong> Paladins serve as beacons for their allies within the chaos of battle. While deadly opponents of evil, they can also empower goodly souls to aid in their crusades. Their magic and martial skills also make them well suited to defending others and blessing the fallen with the strength to continue fighting.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Lawful good</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td>LN</td><td>LE</td></tr><tr><td>NG</td><td>N</td><td>NE</td></tr><tr><td>CG</td><td>CN</td><td>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d10</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>5d6 &times; 10 gp (average 175 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>2 + Int modifier</td></tr><tr><th scope="row" rowSpan={4} className="sw">Class Skills</th><td><Link to="/skill/ride">Ride</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/heal">Heal</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/handle_animal">Handle Animal</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-paladin-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-paladin--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Base Attack Bonus</th>
<th>Fort Save</th>
<th>Ref Save</th>
<th>Will Save</th>
<th>Special</th>
<th>1st</th>
<th>2nd</th>
<th>3rd</th>
<th>4th</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+1</td>
<td>+2</td>
<td>+0</td>
<td>+2</td>
<td>Aura of good, detect evil, smite evil 1/day</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>+2</td>
<td>+3</td>
<td>+0</td>
<td>+3</td>
<td>Divine grace, lay on hands</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>+3</td>
<td>Aura of courage, divine health, mercy</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>+4</td>
<td>Channel positive energy, smite evil 2/day</td>
<td>0</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>+5</td>
<td>+4</td>
<td>+1</td>
<td>+4</td>
<td>Divine bond</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>+6/+1</td>
<td>+5</td>
<td>+2</td>
<td>+5</td>
<td>Mercy</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>+7/+2</td>
<td>+5</td>
<td>+2</td>
<td>+5</td>
<td>Smite evil 3/day</td>
<td>1</td>
<td>0</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>+8/+3</td>
<td>+6</td>
<td>+2</td>
<td>+6</td>
<td>Aura of resolve</td>
<td>1</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+3</td>
<td>+6</td>
<td>Mercy</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>+10/+5</td>
<td>+7</td>
<td>+3</td>
<td>+7</td>
<td>Smite evil 4/day</td>
<td>2</td>
<td>1</td>
<td>0</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>+11/+6/+1</td>
<td>+7</td>
<td>+3</td>
<td>+7</td>
<td>Aura of justice</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>+12/+7/+2</td>
<td>+8</td>
<td>+4</td>
<td>+8</td>
<td>Mercy</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>+13/+8/+3</td>
<td>+8</td>
<td>+4</td>
<td>+8</td>
<td>Smite evil 5/day</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>14th</td>
<td>+14/+9/+4</td>
<td>+9</td>
<td>+4</td>
<td>+9</td>
<td>Aura of faith</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>15th</td>
<td>+15/+10/+5</td>
<td>+9</td>
<td>+5</td>
<td>+9</td>
<td>Mercy</td>
<td>3</td>
<td>2</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>16th</td>
<td>+16/+11/+6/+1</td>
<td>+10</td>
<td>+5</td>
<td>+10</td>
<td>Smite evil 6/day</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>17th</td>
<td>+17/+12/+7/+2</td>
<td>+10</td>
<td>+5</td>
<td>+10</td>
<td>Aura of righteousness</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>18th</td>
<td>+18/+13/+8/+3</td>
<td>+11</td>
<td>+6</td>
<td>+11</td>
<td>Mercy</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>19th</td>
<td>+19/+14/+9/+4</td>
<td>+11</td>
<td>+6</td>
<td>+11</td>
<td>Smite evil 7/day</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
</tr>
<tr>
<td>20th</td>
<td>+20/+15/+10/+5</td>
<td>+12</td>
<td>+6</td>
<td>+12</td>
<td>Holy champion</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={2}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td colSpan={2}>All <Link to="/main/equipment_weapons_martial">martial weapons</Link></td></tr><tr><th>Armor?</th><td colSpan={2}>Light, Medium, and Heavy armors</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">Yes, except tower shields</td></tr></tbody></table>
<p><strong className="hl" id="class-paladin-code-of-conduct" data-hash-target>Code of Conduct:</strong> A paladin must be of lawful good alignment and loses all class features except proficiencies if she ever willingly commits an evil act.</p>
<p>Additionally, a paladin's code requires that she respect legitimate authority, act with honor (not lying, not cheating, not using poison, and so forth), help those in need (provided they do not use the help for evil or chaotic ends), and punish those who harm or threaten innocents.</p>
<p><strong className="hl">Associates:</strong> While she may adventure with good or neutral allies, a paladin avoids working with evil characters or with anyone who consistently offends her moral code. Under exceptional circumstances, a paladin can ally with evil associates, but only to defeat what she believes to be a greater evil. A paladin should seek an <Link to="/spell/atonement">atonement</Link> spell periodically during such an unusual alliance, and should end the alliance immediately should she feel it is doing more harm than good. A paladin may accept only <Link to="/feat/leadership">henchmen, followers, or cohorts</Link> who are lawful good.</p>
<Ability id="class-paladin-aura-of-good-ex" icon={["abstract-091"]}>
<Pair single id="class-paladin-aura-of-good-ex">Aura of Good (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">The power of your aura of good (see <Link to="/spell/detect_good">detect good</Link>) is equal to your paladin level.</Pair>
</Ability>
<Ability id="class-paladin-detect-evil-sp" icon={["stairs-goal"]}>
<Pair single id="class-paladin-detect-evil-sp">Detect Evil (Sp)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">At will, you can use <Link to="/spell/detect_evil">detect evil</Link>, as the spell.</Pair>
<Pair title="Move-Equivalent Action">You can concentrate on a single item or individual within 60 feet and determine if it is evil, learning the strength of its aura as if having studied it for 3 rounds. While focusing on one individual or object, you do not <em>detect evil</em> in any other object or individual within range.</Pair>
</Ability>
<Ability id="class-paladin-smite-evil-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="class-paladin-smite-evil-su">Smite Evil (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Swift Action"><p>You can call out to the powers of good to aid you in your struggle against evil, choosing one target within sight to smite. If you target a creature that is not evil, the smite is wasted with no effect.</p>
<p>If this target is evil, you add your Charisma bonus (if any) on your attack rolls and add your paladin level to all damage rolls made against the target of your smite. If the target of <em>smite evil</em> is an <Link to="/type/outsider">outsider</Link> with the <Link to="/subtype/evil">evil</Link> subtype, an evil-aligned <Link to="/type/dragon">dragon</Link>, an <Link to="/type/undead">undead</Link> creature, or a creature with levels in <Link to="/class/antipaladin">antipaladin</Link>, the bonus to damage on the first successful attack increases to 2 points of damage per paladin level. Regardless of the target, <em>smite evil</em> attacks automatically bypass any DR the creature might possess.</p>
<p>In addition, while <em>smite evil</em> is in effect, you gain a deflection bonus equal to your Charisma modifier (if any) to your AC against attacks made by the target of the smite.</p>
<p>The <em>smite evil</em> effect remains until the target of the smite is dead or the next time you rest and regains your uses of this ability.</p>
</Pair>
<Pair title="At 4th Level">You can smite 2 times a day.</Pair>
<Pair title="At 7th Level">You can smite 3 times a day.</Pair>
<Pair title="At 10th Level">You can smite 4 times a day.</Pair>
<Pair title="At 13th Level">You can smite 5 times a day.</Pair>
<Pair title="At 16th Level">You can smite 6 times a day.</Pair>
<Pair title="At 19th Level">You can smite 7 times a day.</Pair>
</Ability>
<aside><p><strong className="hl" id="class-paladin-oaths" data-hash-target>Oaths:</strong> Optionally, a paladin may take <Link to="/ability/oaths">an oath</Link>. While all paladins have their own codes of conduct, either taught by an order, handed down from the gods, or inspired by personal conviction, an oathbound paladin devotes herself to a singular cause, which grants her additional powers but also gives further edicts she must follow. An oathbound paladin swears an oath to eradicate a certain kind of evil. This powerful oath gives her access to new spells and adds to or alters typical paladin abilities.</p>
</aside><Ability id="class-paladin-divine-grace-su" icon={["armor-upgrade"]}>
<Pair single id="class-paladin-divine-grace-su">Divine Grace (Su)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">You gain a bonus equal to your Charisma bonus (if any) on all saving throws.</Pair>
</Ability>
<Ability id="class-paladin-lay-on-hands-su" icon={["heart-plus"]}>
<Pair single id="class-paladin-lay-on-hands-su" flavor="A paladin can heal wounds (her own or those of others) by touch.">Lay On Hands (Su)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">Half your paladin level, plus your Cha modifier, times/day.</Pair>
<Pair title="Standard Action">You heal 1d6 hit points of damage for every two paladin levels you possess. Despite the name of this ability, you only need one free hand to use this ability.</Pair>
<Pair title="Swift Action">You can heal yourself instead of another creature, as above.</Pair>
<Pair title="Ability">Alternatively, as a melee touch attack, you can use this healing power to deal damage to undead creatures, dealing 1d6 points of damage for every two paladin levels you possess. This doesn't provoke an attack of opportunity. Undead do not receive a saving throw against this damage.</Pair>
</Ability>
<Ability id="class-paladin-aura-of-courage-su" icon={["armor-upgrade","abstract-091"]}>
<Pair single id="class-paladin-aura-of-courage-su">Aura of Courage (Su)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">You are immune to fear (magical or otherwise). Each ally <Link to="/misc/emanation">within 10 feet of you</Link> gains a +4 morale bonus on saving throws against fear effects. This ability functions only while you are conscious, not if you're unconscious or dead.</Pair>
</Ability>
<Ability id="class-paladin-divine-health-ex" icon={["armor-upgrade"]}>
<Pair single id="class-paladin-divine-health-ex">Divine Health (Ex)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">You are immune to all diseases, including supernatural and magical diseases, including <Link to="/curse/mummy_rot">mummy rot</Link>.</Pair>
</Ability>
<Ability id="class-paladin-mercy-su" icon={["upgrade","heart-plus"]}>
<Pair single id="class-paladin-mercy-su">Mercy (Su)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">You gain one <Link to="/ability/mercy">mercy</Link>, which adds an effect to your <em>lay on hands</em> ability. Whenever you use <em>lay on hands</em> to heal damage to one target, the target also receives the additional effects from <strong>all</strong> of the mercies you possess. Once a condition or spell effect is chosen, it can't be changed.</Pair>
<Pair title="At 6th Level">You gain a new mercy.</Pair>
<Pair title="At 9th Level">You gain a new mercy.</Pair>
<Pair title="At 12th Level">You gain a new mercy.</Pair>
<Pair title="At 15th Level">You gain a new mercy.</Pair>
<Pair title="At 18th Level">You gain a new mercy.</Pair>
<Pair title="Special">A mercy can remove a condition caused by a curse, disease, or poison without curing the affliction. Such conditions return after 1 hour unless the mercy actually removes the affliction that causes the condition.</Pair>
</Ability>
<Ability id="class-paladin-channel-positive-energy-su" icon={["stairs-goal"]}>
<Pair single id="class-paladin-channel-positive-energy-su">Channel Positive Energy (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Standard Action">You gain the supernatural ability to <Link to="/ability/channel_positive_energy">channel positive energy</Link> like a cleric. Using this ability consumes two uses of your <em>lay on hands</em> ability. You use your level as your effective cleric level when channeling positive energy. This is a Charisma-based ability.</Pair>
</Ability>
<Ability id="class-paladin-spells" icon={["magic-swirl"]}>
<Pair single id="class-paladin-spells">Spells</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">You gain the ability to cast a small number of divine spells which are drawn from the <Link to="/main/paladin_spell">paladin spell list</Link>. The DC for a saving throw against spells you cast is 10 + the spell level + your Charisma modifier. You must choose and prepare your spells in advance. Like other spellcasters, you can cast only a certain number of spells of each spell level per day. In addition, you receive <Link to="/rule/bonus_spells">bonus spells per day</Link> if you have a high Charisma score.</Pair>
<Pair title="Usage">To prepare or cast a spell, you must have a Charisma score equal to at least 10 + the spell level.</Pair>
<Pair title="Info"><p>You must spend 1 hour each day in quiet prayer and meditation to regain your daily allotment of spells. You may prepare and cast any spell on the paladin spell list, provided that you can cast spells of that level, but you must choose which spells to prepare during your daily meditation.</p>
<p>Through 3rd level, you have no caster level. At 4th level and higher, your caster level is equal to your paladin level - 3.</p>
</Pair>
<Pair title="Special">When it is indicated that you get 0 spells per day of a given spell level, you gain only the bonus spells you would be entitled to based on your Charisma score for that spell level.</Pair>
</Ability>
<Ability id="class-paladin-divine-bond-sp-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="class-paladin-divine-bond-sp-su" flavor="A paladin forms a divine bond with her god.">Divine Bond (Sp, Su)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">This bond can take one of two forms: bonded weapon or bonded mount. Once the form is chosen, it cannot be changed.</Pair>
</Ability>
<Ability id="class-paladin-bonded-weapon" extraClasses="subAbility numbered" icon={["mailed-fist"]}>
<Pair single id="class-paladin-bonded-weapon">Bonded Weapon</Pair>
<Pair title="Usage">Once per day.</Pair>
<Pair title="Choice"><p>The first type of bond allows the paladin to enhance your weapon as a <strong className="hl">standard action</strong> by calling upon the aid of a celestial spirit for 1 minute per paladin level. This is a spell-like ability. When called, the spirit causes the weapon to shed light as a <Link to="/eq-misc/torch">torch</Link> and grants the weapon a +1 enhancement bonus.</p>
<p>For every three levels beyond 5th, the weapon gains another +1 enhancement bonus, to a maximum of +6 at 20th level. These bonuses can be added to the weapon, stacking with existing weapon bonuses to a maximum of +5, or they can be used to add any of the following weapon properties: <Link to="/magic-enh/axiomatic">axiomatic</Link>, <Link to="/magic-enh/brilliant_energy">brilliant energy</Link>, <Link to="/magic-enh/defending">defending</Link>, <Link to="/magic-enh/disruption">disruption</Link>, <Link to="/magic-enh/flaming">flaming</Link>, <Link to="/magic-enh/flaming_burst">flaming burst</Link>, <Link to="/magic-enh/holy">holy</Link>, <Link to="/magic-enh/keen">keen</Link>, <Link to="/magic-enh/merciful">merciful</Link>, and <Link to="/magic-enh/speed">speed</Link>. Adding these properties consumes an amount of bonus equal to the property's cost. These bonuses are added to any properties the weapon already has, but duplicate abilities do not stack. If the weapon is not magical, at least a +1 enhancement bonus must be added before any other properties can be added. The bonus and properties granted by the spirit are determined when the spirit is called and cannot be changed until the spirit is called again.</p>
<p>The celestial spirit imparts no bonuses if the weapon is held by anyone other than you, but resumes giving bonuses if returned to you. These bonuses apply to only one end of a double weapon.</p>
<p>If a weapon bonded with a celestial spirit is destroyed, you lose the use of this ability for 30 days, or until you gain a level, whichever comes first. During this 30-day period, you take a -1 penalty on attack and weapon damage rolls.</p>
</Pair>
<Pair title="At 9th Level">You can use this ability twice a day.</Pair>
<Pair title="At 13th Level">You can use this ability three times a day.</Pair>
<Pair title="At 17th Level">You can use this ability four times a day.</Pair>
</Ability>
<Ability id="class-paladin-bonded-mount" extraClasses="subAbility numbered" icon={["stairs-goal"]}>
<Pair single id="class-paladin-bonded-mount">Bonded Mount</Pair>
<Pair title="Usage">Once per day.</Pair>
<Pair title="Choice"><p>The second type of bond allows you to gain the service of an unusually intelligent, strong, and loyal steed to serve you in your crusade against evil. This mount functions as a druid's <Link to="/sidekick/animal_companion">animal companion</Link>, using your level as your effective druid level. Bonded mounts have an Intelligence of at least 6. This mount may come from the following lists:</p>
<blockquote>
<p><strong>Medium Paladins:</strong> <Link to="/companion/camel">Camel</Link>, <Link to="/companion/elk">Elk</Link>, <Link to="/companion/giraffe">Giraffe</Link>, <Link to="/companion/horse">Horse</Link>, <Link to="/companion/giant_seahorse">Giant Seahorse</Link>, <Link to="/companion/yak">Yak</Link>, <Link to="/companion/zebra">Zebra</Link></p>
<p><strong>Small Paladins:</strong> <Link to="/companion/antelope">Antelope</Link>, <Link to="/companion/boar">Boar</Link>, <Link to="/companion/capybara">Capybara</Link>, <Link to="/companion/dog">Dog</Link>, <Link to="/companion/eohippus">Eohippus</Link>, <Link to="/companion/pony">Pony</Link>, <Link to="/companion/ram">Ram</Link>, <Link to="/companion/reindeer">Reindeer</Link>, <Link to="/companion/stag">Stag</Link>, <Link to="/companion/giant_weasel">Giant Weasel</Link>, <Link to="/companion/wolfdog">Wolfdog</Link></p>
</blockquote>
<p>As a <strong className="hl">full-round action,</strong> you may magically call your mount to your side. This spell-like ability is the equivalent of a spell of a level equal to <Link to="/misc/one_third">one-third</Link> your paladin level. The mount immediately appears adjacent to you.</p>
<p>Should your mount die, you may not summon another mount for 30 days or until you gain an paladin level, whichever comes first. During this 30-day period, you take a -1 penalty on attack and weapon damage rolls.</p>
</Pair>
<Pair title="At 9th Level">You can use this ability twice a day.</Pair>
<Pair title="At 11th Level">The mount gains the <Link to="/template/celestial">celestial</Link> template and becomes a magical beast for the purposes of determining which spells affect it.</Pair>
<Pair title="At 13th Level">You can use this ability three times a day.</Pair>
<Pair title="At 15th Level">The mount gains spell resistance equal to your level + 11.</Pair>
<Pair title="At 17th Level">You can use this ability four times a day.</Pair>
</Ability>
<aside><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 25</Link><br/>Although all paladins commune with divine forces and celestial spirits, some are able to do so in ways that transcend the typical martial blessing or celestial servitor. The following three Divine Bond options are supernatural abilities that replace the Bonded Weapon/Bonded Mount ability.</p>
<p><strong>Agathion Bond</strong>: As a <strong className="hl">standard action</strong>, the paladin can call forth an <Link to="/family/agathion">agathion</Link> spirit that bonds to her healing hands for 1 minute per paladin level, causing her to manifest physical traits evocative of one kind of agathion. This bond allows the paladin to add her Charisma bonus to the amount of hit points that she restores with her spells, her <em>lay on hands</em> ability, and her <em>channel energy</em> ability. For every 3 levels beyond 5th, she restores 1 additional hit point with those abilities, up to a maximum of 5 + her Charisma modifier at 20th level. The paladin can use this ability once per day at 5th level, and one additional time per day for every 4 levels beyond 5th, up to a total of four times per day at 17th level.</p>
<p><strong>Angelic Bond</strong>: As a <strong className="hl">standard action</strong>, the paladin can call forth an <Link to="/family/angel">angel</Link> spirit that bonds to her, causing her to manifest a resplendent halo. This bond allows the paladin to shine light as per <Link to="/spell/continual_flame">continual flame</Link> for 1 minute per paladin level. Additionally, while the halo shines, all allies within 20 feet gain the benefits of <Link to="/spell/protection_from_evil">protection from evil</Link>, except the deflection and resistance bonuses are +3. For every 3 levels she has beyond 5th, the deflection bonus and resistance bonus provided by this effect increases by 1, up to a maximum of +8 at 20th level. The paladin can use this ability once per day at 5th level, and one additional time per day for every 4 levels beyond 5th, up to a total of four times per day at 17th level.</p>
<p><strong>Archon Bond</strong>: As a <strong className="hl">standard action</strong>, the paladin can call forth an <Link to="/family/archon">archon</Link> spirit that bonds to her brow, causing her eyes to glow with righteous fury for 1 minute per paladin level. While this bond is active, any hostile creature within a 10-foot radius of the paladin that looks at her must succeed at a Will saving throw (DC = 10 + 1/2 her paladin level + her Charisma modifier) or take a -2 penalty on attack rolls and saving throws and to AC for 24 hours. Whether or not the saving throw is successful, a creature cannot be affected by the same paladin's archon bond again for 24 hours, and the penalties from multiple archon bonds don't stack. Creatures that don't have eyesight are not affected by this ability. For every 3 levels beyond 5th, the radius of the paladin's archon bond increases by 5 feet, up to a 35-foot radius at 20th level. The paladin can use this ability once per day at 5th level, and one additional time per day for every 4 levels beyond 5th, up to a total of four times per day at 17th level.</p>
</aside><Ability id="class-paladin-aura-of-resolvesu" icon={["armor-upgrade"]}>
<Pair single id="class-paladin-aura-of-resolvesu">Aura of Resolve/(Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">You are immune to charm spells and spell-like abilities. Each ally within 10 feet of you gains a +4 morale bonus on saving throws against charm effects. This ability functions only while you are conscious, not if you are unconscious or dead.</Pair>
</Ability>
<Ability id="class-paladin-aura-of-justice-su" icon={["upgrade"]}>
<Pair single id="class-paladin-aura-of-justice-su">Aura of Justice (Su)</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Free Action">You can expend two uses of your <em>smite evil</em> ability to grant the ability to <em>smite evil</em> to all allies within 10 feet, using your bonuses. Allies must use this <em>smite evil</em> ability by the start of your next turn and the bonuses last for 1 minute. Evil creatures gain no benefit from this ability.</Pair>
</Ability>
<Ability id="class-paladin-aura-of-faith-su" icon={["armor-downgrade"]}>
<Pair single id="class-paladin-aura-of-faith-su">Aura of Faith (Su)</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">Your weapons are treated as good-aligned for the purposes of overcoming <Link to="/rule/damage_reduction">damage reduction</Link>. Any attack made against an enemy within 10 feet of you is treated as good-aligned for the purposes of overcoming damage reduction. This ability functions only while you are conscious, not if you are unconscious or dead.</Pair>
</Ability>
<Ability id="class-paladin-aura-of-righteousness-su" icon={["armor-upgrade"]}>
<Pair single id="class-paladin-aura-of-righteousness-su">Aura of Righteousness (Su)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">You gain DR 5/evil and immunity to compulsion spells and spell-like abilities. Each ally within 10 feet of you gains a +4 morale bonus on saving throws against compulsion effects. This ability functions only while you are conscious, not if you are unconscious or dead.</Pair>
</Ability>
<Ability id="class-paladin-holy-champion-su" icon={["armor-upgrade","upgrade","heart-plus"]}>
<Pair single id="class-paladin-holy-champion-su" flavor="You become a conduit for the power of your god.">Holy Champion (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">Your DR increases to 10/evil. Whenever you use <em>smite evil</em> and successfully strikes an evil outsider, the outsider is also subject to a <Link to="/spell/banishment">banishment</Link>, using your paladin level as the caster level (your weapon and holy symbol automatically count as objects that the subject hates). After the <em>banishment</em> effect and the damage from the attack is resolved, the <em>smite</em> immediately ends. In addition, whenever you channel positive energy or use <em>lay on hands</em> to heal a creature, you heal the maximum possible amount.</Pair>
</Ability>
<h3 id="class-paladin-ex-paladins" data-hash-target>Ex-Paladins</h3>
<p>A paladin who ceases to be lawful good, who willfully commits an evil act, or who violates the code of conduct loses all paladin spells and class features (including the service of the paladin's mount, but not weapon, armor, and shield proficiencies). She may not progress any further in levels as a paladin. She regains her abilities and advancement potential if she <Link to="/spell/atonement">atones</Link> for her violations, as appropriate.<sup><InnerLink showBacklink="backlink-class-paladin-ref-Ex-1" id="class-paladin-ref-Ex-1" data-hash-target to="class-paladin-Ex">1</InnerLink></sup></p>
<h3 id="class-paladin-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-paladin--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Crusader Champion (Su)</td><td>At 20th level, the paladin's zeal is so inspiring that it affects all around her. The ranges of all of the paladin's auras increase by 30 feet.</td></tr>
<tr><td>Great Beast (Su)</td><td>At 20th level, the character's <Link to="/sidekick/animal_companion">animal companion</Link> is a paragon of its kind - a hero and legend in its own right. The animal companion's Strength, Dexterity, Constitution, and Wisdom scores each increase by 4. This capstone is available to any class with an animal companion.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>Soul Channel (Su)</td><td>At 20th level, the character can channel energy six additional times per day, and her channel energy dice increase by one step. This capstone is available to characters with the channel energy class feature.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-paladin-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Aasimar:</strong> Add +1/6 to the morale bonus on saving throws provided by the paladin's auras.<sup><InnerLink showBacklink="backlink-class-paladin-ref-A-1" id="class-paladin-ref-A-1" data-hash-target to="class-paladin-A">2</InnerLink></sup></p>
<p><strong>Drow:</strong> Add a +1/2 sacred bonus to saving throws against spells of the shadow subschool or that have the darkness or shadow descriptor.<sup><InnerLink showBacklink="backlink-class-paladin-ref-B-1" id="class-paladin-ref-B-1" data-hash-target to="class-paladin-B">3</InnerLink></sup></p>
<p><strong>Duskwalker:</strong> Add 1/2 point to hit points restored by the paladin's lay on hands ability (whether using it to heal or harm).<sup><InnerLink showBacklink="backlink-class-paladin-ref-C-1" id="class-paladin-ref-C-1" data-hash-target to="class-paladin-C">4</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Add a +1 bonus on <Link to="/rule/concentration">concentration</Link> checks when casting paladin spells.<sup><InnerLink showBacklink="backlink-class-paladin-ref-D-1" id="class-paladin-ref-D-1" data-hash-target to="class-paladin-D">5</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-paladin-ref-E-1" id="class-paladin-ref-E-1" data-hash-target to="class-paladin-E">6</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Choose a creature type (and subtype, if necessary) from the ranger's <Link to="/ability/favored_enemies">favored enemies</Link> list. Add a +1/2 bonus on Knowledge checks to identify creatures of that type. You can choose the same creature type up to six times; if you choose the same creature type six times, add 1 point of damage when smiting creatures of that type.<sup><InnerLink showBacklink="backlink-class-paladin-ref-F-1" id="class-paladin-ref-F-1" data-hash-target to="class-paladin-F">7</InnerLink></sup></p>
<p><strong>Elf:</strong> Add +1/2 hit point to the paladin's lay on hands ability (whether using it to heal or harm).<sup><InnerLink showBacklink="backlink-class-paladin-ref-G-1" id="class-paladin-ref-G-1" data-hash-target to="class-paladin-G">8</InnerLink></sup></p>
<p><strong>Fetchling:</strong> Add +1/4 to the morale bonus the paladin grants on allies' saving throws against fear effects.<sup><InnerLink showBacklink="backlink-class-paladin-ref-H-1" id="class-paladin-ref-H-1" data-hash-target to="class-paladin-H">9</InnerLink></sup></p>
<p><strong>Gnome:</strong> Add +1/2 hit point to the paladin's lay on hands ability (whether using it to heal or harm).<sup><InnerLink showBacklink="backlink-class-paladin-ref-I-1" id="class-paladin-ref-I-1" data-hash-target to="class-paladin-I">10</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Add +1 foot to the size of all the paladin's aura class features. This option has no effect unless the paladin has selected it 5 times (or another increment of 5); an aura of 14 feet is effectively the same as a 10-foot aura, for example.<sup><InnerLink showBacklink="backlink-class-paladin-ref-J-1" id="class-paladin-ref-J-1" data-hash-target to="class-paladin-J">11</InnerLink></sup></p>
<p><strong>Halfling:</strong> Add +1/2 hit point to the paladin's lay on hands ability (whether using it to heal or harm).<sup><InnerLink showBacklink="backlink-class-paladin-ref-K-1" id="class-paladin-ref-K-1" data-hash-target to="class-paladin-K">12</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-paladin-ref-L-1" id="class-paladin-ref-L-1" data-hash-target to="class-paladin-L">13</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Add +1/3 on critical hit confirmation rolls made while using smite evil (maximum bonus of +5). This bonus does not stack with <Link to="/feat/critical_focus">Critical Focus</Link>.<sup><InnerLink showBacklink="backlink-class-paladin-ref-M-1" id="class-paladin-ref-M-1" data-hash-target to="class-paladin-M">14</InnerLink></sup></p>
<p><strong>Human:</strong> Add +1 to the paladin's energy resistance to one kind of energy (maximum +10).<sup><InnerLink showBacklink="backlink-class-paladin-ref-N-1" id="class-paladin-ref-N-1" data-hash-target to="class-paladin-N">15</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-paladin-ref-O-1" id="class-paladin-ref-O-1" data-hash-target to="class-paladin-O">16</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-paladin-ref-P-1" id="class-paladin-ref-P-1" data-hash-target to="class-paladin-P">17</InnerLink></sup></p>
<p><strong>Kobold:</strong> Add 1/4 to the deflection bonus granted by your smite evil ability.<sup><InnerLink showBacklink="backlink-class-paladin-ref-Q-1" id="class-paladin-ref-Q-1" data-hash-target to="class-paladin-Q">18</InnerLink></sup></p>
<p><strong>Nagaji:</strong> Add 1/2 minute to the duration of the paladin's divine bond with her weapon.<sup><InnerLink showBacklink="backlink-class-paladin-ref-R-1" id="class-paladin-ref-R-1" data-hash-target to="class-paladin-R">19</InnerLink></sup></p>
<p><strong>Oread:</strong> Add +1/4 to the bonus the paladin grants her allies with her aura of courage and aura of resolve special abilities.<sup><InnerLink showBacklink="backlink-class-paladin-ref-S-1" id="class-paladin-ref-S-1" data-hash-target to="class-paladin-S">20</InnerLink></sup></p>
<p><strong>Shabti:</strong> Add 1/2 to the paladin's level when determining the effect of smite evil against incorporeal and ethereal creatures.<sup><InnerLink showBacklink="backlink-class-paladin-ref-T-1" id="class-paladin-ref-T-1" data-hash-target to="class-paladin-T">21</InnerLink></sup></p>
<p><strong>Tiefling:</strong> Add +1 to the amount of damage the paladin heals with lay on hands, but only when the paladin uses that ability on herself.<sup><InnerLink showBacklink="backlink-class-paladin-ref-U-1" id="class-paladin-ref-U-1" data-hash-target to="class-paladin-U">22</InnerLink></sup></p>
<p><strong>Wayang:</strong> Add 1/3 hit point to the paladin's channel energy and lay on hands abilities (whether using it to heal or harm).<sup><InnerLink showBacklink="backlink-class-paladin-ref-V-1" id="class-paladin-ref-V-1" data-hash-target to="class-paladin-V">23</InnerLink></sup></p>
<p><strong>Wyrwood:</strong> The paladin gains 1/4 of a bonus spell per day of the highest-level spell that the paladin can cast.<sup><InnerLink showBacklink="backlink-class-paladin-ref-W-1" id="class-paladin-ref-W-1" data-hash-target to="class-paladin-W">24</InnerLink></sup></p>
<p><strong>Wyvaran:</strong> Add 1/2 to the paladin's level when determining the effect of smite evil against evil-aligned dragons.<sup><InnerLink showBacklink="backlink-class-paladin-ref-X-1" id="class-paladin-ref-X-1" data-hash-target to="class-paladin-X">25</InnerLink></sup></p>
</div>
<h3 id="class-paladin-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-paladin/banishing_warden">Banishing Warden</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; 3rd-level Mercy</p><p>The banishing warden is an expert at fighting all types of evil outsiders and sending them back to their native planes.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/champion_of_the_cascade">Champion of the Cascade</Link></p><p><strong>Modifies or Replaces:</strong> Armor Proficiency; Class Skills; Divine Health; Mercy; Divine Bond</p><p>Champions of the cascade are paladins who defend the freedom and purity of waterways, protecting the very existence of the civilizations they belong to.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/chaos_knight">Chaos Knight</Link></p><p><strong>Modifies or Replaces:</strong> Lay on Hands; Mercy; Aura of Faith</p><p>(Ganzi only) Despite the entropic forces inherent in ganzis, some forgo a life of chaos, instead harnessing their heritage to enforce the power of law</p></div>
<div className="archetype"><p><Link to="/arc-paladin/chosen_one">Chosen One</Link></p><p><strong>Modifies or Replaces:</strong> Divine Bond; Class Skills; Divine Grace; Smite Evil; Lay on Hands; Channel Positive Energy</p><p>Most paladins train for years at a temple to attain a holy status, but rarely, an emissary of the divine appears to one of humble origins and calls her directly to the charge.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/combat_healer_squire">Combat Healer Squire</Link></p><p><strong>Modifies or Replaces:</strong> Detect Evil; Divine Grace; Divine Health</p><p>The combat healer squire is always ready with bandages and potions.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/divine_defender">Divine Defender</Link></p><p><strong>Modifies or Replaces:</strong> Mercy; Divine Bond</p><p>Some paladins see themselves as the last line of defense between the teeming hordes of evil and the innocent folk trying to make a living in a harsh, unforgiving world.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/divine_guardian">Divine Guardian</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting; Detect Evil; Lay on Hands; Aura of Courage</p><p>The divine guardian devotes herself to the protection and guardianship of one creature at a time, be that her liege lord, an allied cleric, or an innocent facing overwhelming danger at the hands of evil.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/divine_hunter">Divine Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Heavy Armor Proficiency; Aura of Courage; Divine Bond; 6th-level Mercy; Aura of Resolve; Aura of Justice; Aura of Righteousness</p><p>The divine hunter prefers to engage evil from afar, striking down her foes before they can threaten her allies.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/dusk_knight">Dusk Knight</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Smite Evil; Channel Positive Energy; Divine Bond; Aura of Resolve; Aura of Justice</p><p>Some paladins focus their training to combat the shadows and use darkness to their advantage.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/empyreal_knight">Empyreal Knight</Link></p><p><strong>Modifies or Replaces:</strong> Divine Grace; Mercy; Lay on Hands; Channel Positive Energy; Divine Bond; Holy Champion</p><p>The empyreal knight dedicates her life to serving the celestial beings that guide mortals in their struggle toward the light.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/faithful_wanderer">Faithful Wanderer</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Detect Evil; Aura of Good; Aura of Justice; Aura of Courage; Aura of Resolve; Aura of Faith; Aura of Righteousness; Smite Evil; Divine Bond; Holy Champion</p><p>A faithful wanderer is self-sufficient and unobtrusive and learns to pick her battles carefully, lest her mission end abruptly in a blaze of glory</p></div>
<div className="archetype"><p><Link to="/arc-paladin/forest_preserver">Forest Preserver</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Aura of Courage; Divine Health; Channel Positive Energy; Aura of Resolve; Aura of Justice; Aura of Faith</p><p>Forest preservers are sacred defenders of the woodlands and of the wild creatures and natural beauty within them.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/forgefathers_seeker">Forgefather's Seeker</Link></p><p><strong>Modifies or Replaces:</strong> Deity; Detect Evil; Smite Evil; Aura of Justice; Aura of Faith; Holy Champion</p><p>Torag sends his seekers to locate constructs that are used for evil or that become uncontrollable</p></div>
<div className="archetype"><p><Link to="/arc-paladin/ghost_hunter">Ghost Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Smite Evil; 6th and 9th-level Mercy</p><p>Ghost hunters devote their lives to eliminating malevolent spirits and putting them to rest.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/gray_paladin">Gray Paladin</Link></p><p><strong>Modifies or Replaces:</strong> Alignment Restriction; Code of Conduct; Aura of Good; Class Skills; Smite Evil; Divine Grace; Aura of Courage; Aura of Resolve; Aura of Righteousness; Divine Health; Channel Positive Energy; Aura of Justice</p><p>Gray paladins have discovered that in a world of intrigue, a strict code of honor hinders their options</p></div>
<div className="archetype"><p><Link to="/arc-paladin/holy_guide">Holy Guide</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; 3rd and 6th-level Mercies</p><p>A holy guide believes that it's his sacred calling to clear the roads of bandits between towns as well as to escort travelers to safety.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/holy_gun">Holy Gun</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; Detect Evil; Smite Evil; Divine Bond</p><p>Not all paladins are knights in shining armor. Holy guns roam the world searching for evil. And where they find it, they put it down.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/holy_tactician">Holy Tactician</Link></p><p><strong>Modifies or Replaces:</strong> Smite Evil; Divine Health; Divine Bond; Aura of Courage; Aura of Resolve; Aura of Justice; Holy Champion</p><p>The holy tactician inspires her allies on the field of battle.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/hospitaler">Hospitaler</Link></p><p><strong>Modifies or Replaces:</strong> Smite Evil; Channel Positive Energy; Aura of Justice</p><p>Paladins are known for their charity and for tending to the sick. The hospitaler takes to this calling above all others, spending much of her time healing the poor, and giving aid and succor to those in need.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/hunting_paladin">Hunting Paladin</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Armor Proficiencies; Smite Evil; Detect Evil; Spells; Aura of Resolve</p><p>Hunting paladins are tenacious trackers and stealthy stalkers in pursuit of evildoers.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/invigorator">Invigorator</Link></p><p><strong>Modifies or Replaces:</strong> Smite Evil; Aura of Justice; Holy Champion</p><p>Invigorators devote themselves to keeping their allies bodily whole by bolstering their health and spirits.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/iomedaen_enforcer">Iomedaen Enforcer</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Detect Evil; Smite Evil; Aura of Faith; Aura of Righteousness; Holy Champion</p><p>Iomedaean enforcers have altered abilities that allow them to stand against the forces of chaos.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/iroran_paladin">Iroran Paladin</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Weapon/Armor Proficiency; Aura of Good; Detect Evil; Smite Evil; Aura of Courage; Channel Positive Energy; Divine Bond; Aura of Justice</p><p>Iroran paladins meditate on self-perfection and train relentlessly, knowing that their example can inspire others to excel.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/knight_of_coins">Knight of Coins</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Skill Ranks; Detect Evil; 3rd, 9th, 15th-level Mercy</p><p>Knights of coins promote fair trade and stable commerce between cities and between nations.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/kraken_slayer">Kraken Slayer</Link></p><p><strong>Modifies or Replaces:</strong> Smite Evil; Divine Health; Divine Bond; Aura of Faith</p><p>Triton kraken slayers oppose all underwater threats, but they especially target the tentacled monstrosities called krakens.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/legate">Legate</Link></p><p><strong>Modifies or Replaces:</strong> Mercy</p><p>Though they hold to the same strict paladin code, legates present themselves not as armed crusaders, but as peaceful envoys and advisors, bringing wisdom garnered from the long, stable history of their nation.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/martyr">Martyr</Link></p><p><strong>Modifies or Replaces:</strong> Smite Evil; Divine Grace; Aura of Courage; Aura of Resolve; Aura of Righteousness; Divine Health; Lay on Hands; Mercy</p><p>Martyrs shoulder the blackest suffering of the world onto themselves in order to help others and inspiring their allies to achieve heights of valor rather than seeking the glory for themselves.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/mind_sword">Mind Sword</Link></p><p><strong>Modifies or Replaces:</strong> Lay on Hands; Mercy; Channel Positive Energy</p><p>Veterans of mystical battles against demons of the Worldwound, mind swords merge psychic and divine power, probing and cleansing minds while their telekinetic blades cleave demonic flesh.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/pearl_seeker">Pearl Seeker</Link></p><p><strong>Modifies or Replaces:</strong> Armor Proficiency; Class Skills; Detect Evil; Aura of Courage; Aura of Resolve; Spells; Divine Bond; Channel Energy</p><p>Some paladins are called to their faith by strange empathic visions and dreams that beckon them to the oceans and beyond.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/redeemer">Redeemer</Link></p><p><strong>Modifies or Replaces:</strong> Smite Evil; Detect Evil; Aura of Resolve; Aura of Justice</p><p>(Half-Orc Only) As most half-orcs are outcasts, a half-orc paladin recognizes that often those who are monstrous are not necessarily evil and that sometimes even those who are evil became that way because of circumstances and misfortune.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/sacred_servant">Sacred Servant</Link></p><p><strong>Modifies or Replaces:</strong> Smite Evil; Divine Bond; Aura of Resolve</p><p>Paladins as a general rule, venerate the gods of good and purity, but some take this a step further, dedicating themselves to a specific deity and furthering the cause of the faith.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/sacred_shield">Sacred Shield</Link></p><p><strong>Modifies or Replaces:</strong> Smite Evil; Channel Positive Energy; Divine Bond; Aura of Justice; Holy Champion</p><p>When faced by evil, the sacred shield reaches first not for a weapon, but for her trusty shield. With her faith, she can ward others from harm.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/scion_of_talmandor">Scion of Talmandor</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Divine Grace; Divine Bond; Aura of Resolve; Aura of Justice</p><p>A scion of Talmandor serve by offering assistance to the oppressed and facilitating the peaceful transfer of power from the few to the many.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/shining_knight">Shining Knight</Link></p><p><strong>Modifies or Replaces:</strong> Divine Health; Aura of Justice</p><p>While paladins often are seen mounted atop a loyal steed, the shining knight is the true symbol of mounted bravery.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/silver_champion">Silver Champion</Link></p><p><strong>Modifies or Replaces:</strong> Divine Bond; Channel Energy; Aura of Justice; Aura of Righteousness; Spells; Mercy; Smite Evil</p><p>Drake-riding paladins who serve as priests of Apsu.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/soul_sentinel">Soul Sentinel</Link></p><p><strong>Modifies or Replaces:</strong> 6th, 12th-level Mercy; Aura of Justice</p><p>Soul sentinels use the strength of their resolve to stem the tide of corruption and insanity, as they believe that the greatest tragedy is a soul lost to evil when it was within their power to save it.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/stonelord">Stonelord</Link></p><p><strong>Modifies or Replaces:</strong> Smite Evil; Divine Grace; 3rd, 9th, 12th, 15th, 18th-level Mercies; Spells; Channel Positive Energy; Divine Bond; Aura of Justice; Holy Champion</p><p>(Dwarf Only) A stonelord is a devoted sentinel of dwarven enclaves, drawing the power of the earth and ancient stone to protect her people.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/sword_of_valor">Sword of Valor</Link></p><p><strong>Modifies or Replaces:</strong> Divine Grace; 6th-level Mercy; Aura of Justice</p><p>A paladin who chooses to follow in Iomedae's footsteps can become a sword of valor.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/tempered_champion">Tempered Champion</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting</p><p>Tempered champions are trained in the Tempering Hall in Absalom to master their deities' favored weapons.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/temple_champion">Temple Champion</Link></p><p><strong>Modifies or Replaces:</strong> Spells; Divine Bond; Aura of Justice</p><p>A temple champion is a powerful warrior dedicated to a good or lawful deity. She thinks of herself primarily as a servant of her deity and secondarily as an agent of her deity's church.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/tortured_crusader">Tortured Crusader</Link></p><p><strong>Modifies or Replaces:</strong> Key Ability Score; Skills; Detect Evil; Divine Grace; Smite Evil; Lay on Hands; Channel Energy; Divine Bond; Aura of Courage; Aura of Resolve; Aura of Faith; Aura of Righteousness; Aura of Justice; Lay on Hands</p><p>Though tortured crusaders may be beaten and battered, body, mind, and soul, they still somehow continue through torment and hardship. Despite setbacks and impossible odds, they shine like candles even in the darkest times</p></div>
<div className="archetype"><p><Link to="/arc-paladin/tranquil_guardian">Tranquil Guardian</Link></p><p><strong>Modifies or Replaces:</strong> Smite Evil; Aura of Courage; Divine Bond; Aura of Resolve; Aura of Justice; Holy Champion</p><p>(Aasimar Only) A tranquil guardian is a missionary of peace and tranquility, a soothing voice of succor in a violent and dangerous world.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/undead_scourge">Undead Scourge</Link></p><p><strong>Modifies or Replaces:</strong> Aura of Resolve; Aura of Justice</p><p>Undead are an abomination in the eyes of the just and righteous. It is no surprise then that there are some paladins that dedicate themselves to wiping these unholy terrors from the world.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/vindictive_bastard">Vindictive Bastard</Link></p><p><strong>Modifies or Replaces:</strong> Aura; Detect Evil; Smite Evil; Divine Grace; Lay on Hands; Divine Health; Mercy; Channel Energy; Divine Bond; Aura of Justice; Aura of Faith; Aura of Righteousness; Holy Champion</p><p>(Ex-paladin archetype) A vindictive bastard is a paladin that strikes out for retribution and revenge, far more interested in tearing down those who have harmed her or her companions than furthering a distant deity's cause.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/virtuous_bravo">Virtuous Bravo</Link></p><p><strong>Modifies or Replaces:</strong> Armor Proficiency; Smite Evil; Mercy; Spellcasting</p><p>Virtuous bravos rely on their wit and grace rather than might and strong armor.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/warrior_of_the_holy_light">Warrior of the Holy Light</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting; Aura of Faith</p><p>Some paladins use their gifts to focus on the holy light that shines within their souls.</p></div>
<div className="archetype"><p><Link to="/arc-paladin/wilderness_warden">Wilderness Warden</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Divine Grace; Smite Evil; Aura of Courage; 3rd, 9th, 15th-level Mercy; Spells; Aura of Resolve; Aura of Justice</p><p>Wilderness wardens are vigilant guardians of natural places of all kinds, from mountain peaks to tangled thickets.</p></div>
<h3 id="class-paladin-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"paladin archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment Restriction"},{"header":"Armor Proficiency"},{"header":"Aura of Courage"},{"header":"Aura of Faith"},{"header":"Aura of Good"},{"header":"Aura of Justice"},{"header":"Aura of Resolve"},{"header":"Aura of Righteousness"},{"header":"Channel Positive Energy"},{"header":"Class Skills"},{"header":"Code of Conduct"},{"header":"Deity"},{"header":"Detect Evil"},{"header":"Divine Bond"},{"header":"Divine Grace"},{"header":"Divine Health"},{"header":"Heavy Armor Proficiency"},{"header":"Holy Champion"},{"header":"Key Ability Score"},{"header":"Lay on Hands"},{"header":"Mercy"},{"header":"3rd-level Mercy"},{"header":"6th-level Mercy"},{"header":"9th-level Mercy"},{"header":"12th-level Mercy"},{"header":"15th-level Mercy"},{"header":"18th-level Mercy"},{"header":"Skill Ranks"},{"header":"Smite Evil"},{"header":"Spellcasting"},{"header":"Weapon/Armor Proficiency"}],"data":[["‹arc-paladin/Banishing Warden›",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-paladin/Champion of the Cascade›",null,"X",null,null,null,null,null,null,null,"X",null,null,null,"X",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-paladin/Chaos Knight›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null],["‹arc-paladin/Chosen One›",null,null,null,null,null,null,null,null,"X","X",null,null,null,"X","X",null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null],["‹arc-paladin/Combat Healer Squire›",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-paladin/Divine Defender›",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-paladin/Divine Guardian›",null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null],["‹arc-paladin/Divine Hunter›",null,null,"X",null,null,"X","X","X",null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-paladin/Dusk Knight›",null,null,null,null,null,"X","X",null,"X","X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null],["‹arc-paladin/Empyreal Knight›",null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X",null,null,"X",null,"X","X",null,null,null,null,null,null,null,null,null,null],["‹arc-paladin/Faithful Wanderer›",null,null,"X","X","X","X","X","X",null,"X",null,null,"X","X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null],["‹arc-paladin/Forest Preserver›",null,null,"X","X",null,"X","X",null,"X","X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-paladin/Forgefather's Seeker›",null,null,null,"X",null,"X",null,null,null,null,null,"X","X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null],["‹arc-paladin/Ghost Hunter›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,"X",null,null],["‹arc-paladin/Gray Paladin›","X",null,"X",null,"X","X","X","X","X","X","X",null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null],["‹arc-paladin/Holy Guide›",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null],["‹arc-paladin/Holy Gun›",null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X"],["‹arc-paladin/Holy Tactician›",null,null,"X",null,null,"X","X",null,null,null,null,null,null,"X",null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null],["‹arc-paladin/Hospitaler›",null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null],["‹arc-paladin/Hunting Paladin›",null,"X",null,null,null,null,"X",null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null],["‹arc-paladin/Invigorator›",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null],["‹arc-paladin/Iomedaen Enforcer›",null,null,null,"X",null,null,null,"X",null,"X",null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null],["‹arc-paladin/Iroran Paladin›",null,null,"X",null,"X","X",null,null,"X","X",null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X"],["‹arc-paladin/Knight of Coins›",null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,"X",null,"X",null,"X",null,"X",null,null,null],["‹arc-paladin/Kraken Slayer›",null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null],["‹arc-paladin/Legate›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-paladin/Martyr›",null,null,"X",null,null,null,"X","X",null,null,null,null,null,null,"X","X",null,null,null,"X","X",null,null,null,null,null,null,null,"X",null,null],["‹arc-paladin/Mind Sword›",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null],["‹arc-paladin/Pearl Seeker›",null,"X","X",null,null,null,"X",null,"X","X",null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null],["‹arc-paladin/Redeemer›",null,null,null,null,null,"X","X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null],["‹arc-paladin/Sacred Servant›",null,null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null],["‹arc-paladin/Sacred Shield›",null,null,null,null,null,"X",null,null,"X",null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null],["‹arc-paladin/Scion of Talmandor›",null,null,null,null,null,"X","X",null,null,"X",null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-paladin/Shining Knight›",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-paladin/Silver Champion›",null,null,null,null,null,"X",null,"X","X",null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,"X",null,"X",null,"X","X",null],["‹arc-paladin/Soul Sentinel›",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null],["‹arc-paladin/Stonelord›",null,null,null,null,null,"X",null,null,"X",null,null,null,null,"X","X",null,null,"X",null,null,null,"X",null,"X","X","X","X",null,"X","X",null],["‹arc-paladin/Sword of Valor›",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-paladin/Tempered Champion›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null],["‹arc-paladin/Temple Champion›",null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null],["‹arc-paladin/Tortured Crusader›",null,null,"X","X",null,"X","X","X","X","X",null,null,"X","X","X",null,null,null,"X","X",null,null,null,null,null,null,null,"X","X",null,null],["‹arc-paladin/Tranquil Guardian›",null,null,"X",null,null,"X","X",null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null],["‹arc-paladin/Undead Scourge›",null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-paladin/Vindictive Bastard›",null,null,null,"X","X","X",null,"X","X",null,null,null,"X","X","X","X",null,"X",null,"X","X",null,null,null,null,null,null,null,"X",null,null],["‹arc-paladin/Virtuous Bravo›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X","X",null],["‹arc-paladin/Warrior of the Holy Light›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null],["‹arc-paladin/Wilderness Warden›",null,null,"X",null,null,"X","X",null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,"X",null,"X",null,"X",null,null,"X","X",null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-paladin-label">Footnotes</h3>
<ol>
<li id="class-paladin-Ex">
<p>Also see the <Link to="/arc-paladin/vindictive_bastard">Vindictive Bastard</Link> archetype for more options. <InnerLink id="backlink-class-paladin-ref-Ex-1" data-hash-target to="class-paladin-ref-Ex-1" aria-label="Back to reference Ex-1">↩</InnerLink></p>
</li>
<li id="class-paladin-A">
<p><Link to="/source/advanced_race_guide">Advanced Race Guide pg. 85</Link> <InnerLink id="backlink-class-paladin-ref-A-1" data-hash-target to="class-paladin-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-paladin-B">
<p><Link to="/source/blood_of_shadows">Blood of Shadows pg. 15</Link> <InnerLink id="backlink-class-paladin-ref-B-1" data-hash-target to="class-paladin-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-paladin-C">
<p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 17</Link> <InnerLink id="backlink-class-paladin-ref-C-1" data-hash-target to="class-paladin-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-paladin-D">
<p>Advanced Race Guide pg. 13 <InnerLink id="backlink-class-paladin-ref-D-1" data-hash-target to="class-paladin-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-paladin-E">
<p><Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 11</Link> <InnerLink id="backlink-class-paladin-ref-E-1" data-hash-target to="class-paladin-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-paladin-F">
<p><Link to="/source/horror_adventures">Horror Adventures pg. 38</Link> <InnerLink id="backlink-class-paladin-ref-F-1" data-hash-target to="class-paladin-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-paladin-G">
<p>Advanced Race Guide pg. 23 <InnerLink id="backlink-class-paladin-ref-G-1" data-hash-target to="class-paladin-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-paladin-H">
<p>Blood of Shadows pg. 7 <InnerLink id="backlink-class-paladin-ref-H-1" data-hash-target to="class-paladin-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-paladin-I">
<p>Advanced Race Guide pg. 33 <InnerLink id="backlink-class-paladin-ref-I-1" data-hash-target to="class-paladin-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-paladin-J">
<p>Advanced Race Guide pg. 43 <InnerLink id="backlink-class-paladin-ref-J-1" data-hash-target to="class-paladin-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
<li id="class-paladin-K">
<p>Advanced Race Guide pg. 63 <InnerLink id="backlink-class-paladin-ref-K-1" data-hash-target to="class-paladin-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
<li id="class-paladin-L">
<p>Advanced Player's Guide pg. 21 <InnerLink id="backlink-class-paladin-ref-L-1" data-hash-target to="class-paladin-ref-L-1" aria-label="Back to reference L-1">↩</InnerLink></p>
</li>
<li id="class-paladin-M">
<p>Advanced Race Guide pg. 53 <InnerLink id="backlink-class-paladin-ref-M-1" data-hash-target to="class-paladin-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink></p>
</li>
<li id="class-paladin-N">
<p>Advanced Race Guide pg. 73 <InnerLink id="backlink-class-paladin-ref-N-1" data-hash-target to="class-paladin-ref-N-1" aria-label="Back to reference N-1">↩</InnerLink></p>
</li>
<li id="class-paladin-O">
<p>Advanced Player's Guide pg. 23 <InnerLink id="backlink-class-paladin-ref-O-1" data-hash-target to="class-paladin-ref-O-1" aria-label="Back to reference O-1">↩</InnerLink></p>
</li>
<li id="class-paladin-P">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-paladin-ref-P-1" data-hash-target to="class-paladin-ref-P-1" aria-label="Back to reference P-1">↩</InnerLink></p>
</li>
<li id="class-paladin-Q">
<p><Link to="/source/kobolds_of_golarion">Kobolds of Golarion pg. 15</Link> <InnerLink id="backlink-class-paladin-ref-Q-1" data-hash-target to="class-paladin-ref-Q-1" aria-label="Back to reference Q-1">↩</InnerLink></p>
</li>
<li id="class-paladin-R">
<p>Blood of the Beast pg. 16 <InnerLink id="backlink-class-paladin-ref-R-1" data-hash-target to="class-paladin-ref-R-1" aria-label="Back to reference R-1">↩</InnerLink></p>
</li>
<li id="class-paladin-S">
<p>Advanced Race Guide pg. 145 <InnerLink id="backlink-class-paladin-ref-S-1" data-hash-target to="class-paladin-ref-S-1" aria-label="Back to reference S-1">↩</InnerLink></p>
</li>
<li id="class-paladin-T">
<p>Plane-Hopper's Handbook pg. 23 <InnerLink id="backlink-class-paladin-ref-T-1" data-hash-target to="class-paladin-ref-T-1" aria-label="Back to reference T-1">↩</InnerLink></p>
</li>
<li id="class-paladin-U">
<p>Advanced Race Guide pg. 170 <InnerLink id="backlink-class-paladin-ref-U-1" data-hash-target to="class-paladin-ref-U-1" aria-label="Back to reference U-1">↩</InnerLink></p>
</li>
<li id="class-paladin-V">
<p>Blood of Shadows pg. 11 <InnerLink id="backlink-class-paladin-ref-V-1" data-hash-target to="class-paladin-ref-V-1" aria-label="Back to reference V-1">↩</InnerLink></p>
</li>
<li id="class-paladin-W">
<p><Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 6</Link> <InnerLink id="backlink-class-paladin-ref-W-1" data-hash-target to="class-paladin-ref-W-1" aria-label="Back to reference W-1">↩</InnerLink></p>
</li>
<li id="class-paladin-X">
<p><Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 18</Link> <InnerLink id="backlink-class-paladin-ref-X-1" data-hash-target to="class-paladin-ref-X-1" aria-label="Back to reference X-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _psychic = {hasJL:true,title: "Psychic", jsx: <><div className="jumpList" id="class-psychic-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-psychic-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-psychic-phrenic-pool-su">Phrenic Pool</InnerLink></li><li><InnerLink toTop to="class-psychic-phrenic-amplifications">Phrenic Amplifications</InnerLink></li><li><InnerLink toTop to="class-psychic-psi-tech">Psi-Tech</InnerLink></li><li><InnerLink toTop to="class-psychic-psychic-discipline-ex-or-sp">Psychic Discipline</InnerLink></li><li><InnerLink toTop to="class-psychic-detect-thoughts-sp">Detect Thoughts</InnerLink></li><li><InnerLink toTop to="class-psychic-telepathic-bond-sp">Telepathic Bond</InnerLink></li><li><InnerLink toTop to="class-psychic-major-amplifications">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-psychic-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-psychic-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-psychic-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-psychic-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-psychic-psychic">Psychic</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 60</Link></p>
<p>Within the mind of any sentient being lies power to rival that of the greatest magical artifact or holy site. By accessing these staggering vaults of mental energy, the psychic can shape the world around her, the minds of others, and pathways across the planes. No place or idea is too secret or remote for a psychic to access, and she can pull from every type of psychic magic. Many methods allow psychics to tap into their mental abilities, and the disciplines they follow affect their abilities.</p>
<p><strong>Role:</strong> With a large suite of spells, psychics can handle many situations, but they excel at moving and manipulating objects, as well as reading and influencing thoughts.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d6</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>2d6 &times; 10 gp (average 70 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>2 + Int modifier</td></tr><tr><th scope="row" rowSpan={4} className="sw">Class Skills</th><td><Link to="/skill/fly">Fly</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link>, <Link to="/skill/knowledge_geography">Knowledge (geography)</Link>, <Link to="/skill/knowledge_history">Knowledge (history)</Link>, <Link to="/skill/knowledge_local">Knowledge (local)</Link>, <Link to="/skill/knowledge_nature">Knowledge (nature)</Link>, <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link>, <Link to="/skill/knowledge_planes">Knowledge (planes)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, <Link to="/skill/linguistics">Linguistics</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/intimidate">Intimidate</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-psychic-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-psychic--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Base Attack Bonus</th>
<th>Fort Save</th>
<th>Ref Save</th>
<th>Will Save</th>
<th>Special</th>
<th>1st</th>
<th>2nd</th>
<th>3rd</th>
<th>4th</th>
<th>5th</th>
<th>6th</th>
<th>7th</th>
<th>8th</th>
<th>9th</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+0</td>
<td>+0</td>
<td>+0</td>
<td>+2</td>
<td>Discipline power, discipline spell, knacks, phrenic amplification, phrenic pool, psychic discipline</td>
<td>3</td>
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
<td>+1</td>
<td>+0</td>
<td>+0</td>
<td>+3</td>
<td><em>Detect thoughts</em></td>
<td>4</td>
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
<td>+1</td>
<td>+1</td>
<td>+1</td>
<td>+3</td>
<td>Phrenic amplification</td>
<td>5</td>
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
<td>+2</td>
<td>+1</td>
<td>+1</td>
<td>+4</td>
<td>Discipline spell</td>
<td>6</td>
<td>3</td>
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
<td>+2</td>
<td>+1</td>
<td>+1</td>
<td>+4</td>
<td>Discipline power</td>
<td>6</td>
<td>4</td>
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
<td>+3</td>
<td>+2</td>
<td>+2</td>
<td>+5</td>
<td>Discipline spell</td>
<td>6</td>
<td>5</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>+3</td>
<td>+2</td>
<td>+2</td>
<td>+5</td>
<td>Phrenic amplification</td>
<td>6</td>
<td>6</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>+4</td>
<td>+2</td>
<td>+2</td>
<td>+6</td>
<td>Discipline spell</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>+4</td>
<td>+3</td>
<td>+3</td>
<td>+6</td>
<td><em>Telepathic bond</em></td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>+5</td>
<td>+3</td>
<td>+3</td>
<td>+7</td>
<td>Discipline spell</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>+5</td>
<td>+3</td>
<td>+3</td>
<td>+7</td>
<td>Major amplifications, phrenic amplification</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>+6/+1</td>
<td>+4</td>
<td>+4</td>
<td>+8</td>
<td>Discipline spell</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>+6/+1</td>
<td>+4</td>
<td>+4</td>
<td>+8</td>
<td>Discipline power</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>+7/+2</td>
<td>+4</td>
<td>+4</td>
<td>+9</td>
<td>Discipline spell</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>3</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>+7/+2</td>
<td>+5</td>
<td>+5</td>
<td>+9</td>
<td>Phrenic amplification</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>4</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>+8/+3</td>
<td>+5</td>
<td>+5</td>
<td>+10</td>
<td>Discipline spell</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>3</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>+8/+3</td>
<td>+5</td>
<td>+5</td>
<td>+10</td>
<td>Telepathy</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>4</td>
<td>-</td>
</tr>
<tr>
<td>18th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+6</td>
<td>+11</td>
<td>Discipline spell</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>3</td>
</tr>
<tr>
<td>19th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+6</td>
<td>+11</td>
<td>Phrenic amplification</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>4</td>
</tr>
<tr>
<td>20th</td>
<td>+10/+5</td>
<td>+6</td>
<td>+6</td>
<td>+12</td>
<td>Remade self</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="class-psychic-spells-known">Spells Known</h3>
<ScrollContainer id="class-psychic--table-1"><table>
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
</tr>
</thead>
<tbody><tr>
<td>1st</td>
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
</tr>
<tr>
<td>2nd</td>
<td>5</td>
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
<td>3rd</td>
<td>5</td>
<td>3</td>
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
<td>6</td>
<td>3</td>
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
<td>5th</td>
<td>6</td>
<td>4</td>
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
<td>6th</td>
<td>7</td>
<td>4</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>7</td>
<td>5</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>8</td>
<td>5</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>8</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>9</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>18th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>19th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>2</td>
</tr>
<tr>
<td>20th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>3</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={1}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><th>Armor?</th><td colSpan={2}>No</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">No</td></tr></tbody></table>
<Ability id="class-psychic-spells" icon={["magic-swirl"]}><Pair single id="class-psychic-spells">Spells</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">To learn or cast a spell, you must have a Intelligence score equal to at least 10 + the spell level. You can cast only a certain number of spells of each spell level per day, as shown on the table above. In addition, you receive <Link to="/rule/determine_bonuses">bonus spells per day</Link> if you have a high Intelligence score.</Pair>
<Pair title="Ability">You gain the ability to cast psychic spells which are drawn from the <Link to="/main/spells_psychic">psychic spell list</Link>. The DC for a saving throw against spells you cast is 10 + the spell level + your Intelligence modifier. You do not need to prepare these spells in advance; you can cast any spell you know at any time, assuming you haven't yet used up your allotment of spells per day for the spell's level.</Pair><Pair title="Info"><p>A psychic's selection of spells is limited. You begin play knowing four 0-level spells and two 1st-level spells of your choice. At each new psychic level you gain one or more new spells as indicated on the table above. Unlike spells per day, the number of spells you know is not affected by your Intelligence score.</p>
<p>At 4th level, and every two levels thereafter (6th, 8th, and so on), you can choose to learn a new spell in place of one you already know. In effect, you "lose" the old spell in exchange for the new one. The new spell's level must be the same as that of the spell being exchanged, and it must be at least one level lower than the highest-level psychic spell you can cast. You may swap out only a single spell at any given level and must choose whether or not to swap the spell at the same time that you gain new spells known for the level.</p></Pair></Ability><Ability id="class-psychic-knacks" icon={["magic-swirl"]}>
<Pair single id="class-psychic-knacks">Knacks</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You learn a number of knacks, or 0-level psychic spells. These spells are cast like any other spell, but they don't consume slots and can be used again. Knacks cast using other spell slots, such as those due to metamagic feats, consume slots normally.</Pair>
</Ability>
<Ability id="class-psychic-phrenic-pool-su" icon={["stairs-goal"]}>
<Pair single id="class-psychic-phrenic-pool-su">Phrenic Pool (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You have a pool of supernatural mental energy that you can draw upon to manipulate psychic spells as you cast them. The maximum number of points in your <em>phrenic pool</em> is equal to <Link to="/misc/half">half</Link> your psychic level + your Wisdom or Charisma modifier, as determined by your <em>psychic discipline</em> (described below).</Pair>
<Pair title="Special">The <em>phrenic pool</em> is replenished each morning after 8 hours of rest or meditation; these hours don't need to be consecutive. You might be able to recharge points in your <em>phrenic pool</em> in additional circumstances dictated by your <em>psychic discipline.</em> Points gained in excess of the <em>pool's</em> maximum are lost.</Pair>
</Ability>
<Ability id="class-psychic-phrenic-amplifications" icon={["upgrade","magic-swirl"]}>
<Pair single id="class-psychic-phrenic-amplifications" flavor="A psychic develops particular techniques to empower her spellcasting.">Phrenic Amplifications</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">You can activate a <em>phrenic amplification</em> only while casting a spell using psychic magic, and the amplification modifies either the spell's effects or the process of casting it. The spell being cast is called the linked spell.</Pair>
<Pair title="Ability">You learn a <Link to="/ability/phrenic_amplifications">phrenic amplification</Link>. You can activate only one amplification each time you cast a spell, and doing so is part of the action used to cast the spell. You can use any amplification you know with any psychic spell, unless the amplification's description states that it can be linked only to certain types of spells.</Pair>
<Pair title="At 3rd Level">You learn a new <em>phrenic amplification.</em></Pair>
<Pair title="At 7th Level">You learn a new <em>phrenic amplification.</em></Pair>
<Pair title="At 11th Level">You learn a new <em>phrenic amplification</em> or <em>major phrenic amplification</em> (described below).</Pair>
<Pair title="At 15th Level">You learn a new <em>phrenic amplification</em> or <em>major phrenic amplification.</em></Pair>
<Pair title="At 19th Level">You learn a new <em>phrenic amplification</em> or <em>major phrenic amplification.</em></Pair>
<Pair title="Special">A <em>phrenic amplification</em> can't be selected more than once. Once a <em>phrenic amplification</em> has been selected, it can't be changed. <em>Phrenic amplifications</em> require you to expend 1 or more points from your <em>phrenic pool</em> to function.</Pair>
</Ability>
<aside><p><strong className="hl" id="class-psychic-psi-tech" data-hash-target>Psi-Tech:</strong> A psychic can learn a <Link to="/ability/psi_tech">psi-tech discovery</Link> in place of a <em>phrenic amplification</em> or a feat. Many of these discoveries use the rules for <Link to="/rule/technological_equipment">advanced technology</Link>.</p>
</aside><Ability id="class-psychic-psychic-discipline-ex-or-sp" icon={["stairs-goal"]}>
<Pair single id="class-psychic-psychic-discipline-ex-or-sp" flavor="Each psychic accesses and improves her mental powers through a particular method, such as rigorous study or attaining a particular mental state. This is called her psychic discipline.">Psychic Discipline (Ex or Sp)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">Choose one <Link to="/ability/disciplines">discipline</Link>. Once made, this choice can't be changed. You gain an additional spell known based on your selected discipline, and you gain its 1st-level discipline power. The DC of a saving throw against a <em>psychic discipline</em> ability equals 10 + 1/2 your psychic level + your Intelligence modifier.</Pair>
<Pair title="At 4th Level">You gain a new spell from your discipline.</Pair>
<Pair title="At 5th Level">You gain a new discipline power.</Pair>
<Pair title="At 6th Level">You gain a new spell from your discipline.</Pair>
<Pair title="At 8th Level">You gain a new spell from your discipline.</Pair>
<Pair title="At 10th Level">You gain a new spell from your discipline.</Pair>
<Pair title="At 12th Level">You gain a new spell from your discipline.</Pair>
<Pair title="At 13th Level">You gain a new discipline power.</Pair>
<Pair title="At 14th Level">You gain a new spell from your discipline.</Pair>
<Pair title="At 16th Level">You gain a new spell from your discipline.</Pair>
<Pair title="At 18th Level">You gain a new spell from your discipline.</Pair>
<Pair title="Special">The discipline determines which ability score you use for your <em>phrenic pool</em> and <em>phrenic amplifications</em> abilities. Spells learned from a discipline can't be exchanged for different spells at higher levels.</Pair>
</Ability>
<Ability id="class-psychic-detect-thoughts-sp" icon={["stairs-goal"]}>
<Pair single id="class-psychic-detect-thoughts-sp">Detect Thoughts (Sp)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Standard Action">You can use <Link to="/spell/detect_thoughts">detect thoughts</Link> as a spell-like ability once per day.</Pair>
<Pair title="Ability">You can also expend any unused spell slot of 1st level or higher to cast <em>detect thoughts.</em> If you do so, you use the level of the spell slot expended to determine the Will save DC.</Pair>
<Pair title="Special">When you gain this ability, if you already know <em>detect thoughts,</em> you can learn a different 1st-level spell in place of it, losing the old spell in exchange for the new one.</Pair>
</Ability>
<Ability id="class-psychic-telepathic-bond-sp" icon={["stairs-goal"]}>
<Pair single id="class-psychic-telepathic-bond-sp">Telepathic Bond (Sp)</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Standard Action">You can use <Link to="/spell/telepathic_bond">telepathic bond</Link> as a spell-like ability once per day, using your psychic level as your caster level. You can't leave yourself out of a <em>bond</em> created in this way.</Pair>
<Pair title="Ability">You can also expend any unused spell slot of 4th level or higher to cast <em>telepathic bond.</em> Casting the spell using a higher-level spell slot gives no benefit on its own, but you can apply metamagic feats that would increase the spell level to the appropriate level. For instance, if you know <Link to="/feat/extend_spell">Extend Spell</Link>, you can use a 5th-level spell slot to cast extended <em>telepathic bond</em> as a full-round action.</Pair>
<Pair title="Special">When you gain this ability, if you already know <em>telepathic bond,</em> you can learn a different 4th-level spell in place of it, losing the old spell in exchange for the new one.</Pair>
</Ability>
<Ability id="class-psychic-major-amplifications" icon={["upgrade"]}>
<Pair single id="class-psychic-major-amplifications">Major Amplifications</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">When you would learn a <em>phrenic amplification</em> from gaining a level, you can choose a <Link to="/ability/major_phrenic_amplifications">major phrenic amplification</Link> instead.</Pair>
</Ability>
<Ability id="class-psychic-telepathy-su" icon={["stairs-goal"]}>
<Pair single id="class-psychic-telepathy-su">Telepathy (Su)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">You can mentally communicate with any other creature within 100 feet that has a language. It is possible to address multiple creatures at once telepathically, although maintaining a telepathic conversation with more than one creature at a time is just as difficult as both speaking and listening to multiple people at the same time.</Pair>
<Pair title="Special">When you gain this ability, if you already know the <Link to="/spell/telepathy">telepathy</Link> spell, you can learn a different 5th-level spell in place of it, losing the old spell in exchange for the new one.</Pair>
</Ability>
<Ability id="class-psychic-remade-self-sp" icon={["stairs-goal","upgrade"]}>
<Pair single id="class-psychic-remade-self-sp">Remade Self (Sp)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You are affected by one of the following spells as a constant spell-like ability: <Link to="/spell/arcane_sight">arcane sight</Link>, <Link to="/spell/fly">fly</Link>, <Link to="/spell/haste">haste</Link>, <Link to="/spell/heroism">heroism</Link>, <Link to="/spell/nondetection">nondetection</Link>, or <Link to="/spell/tongues">tongues</Link>. This ability is chosen when you reach 20th level and can't be changed.</Pair>
<Pair title="Ability">While you are under the effects of this spell-like ability, each time you cast a psychic spell, you can link one <em>phrenic amplification</em> or <em>major amplification</em> you know that has a point cost of 1 to that spell without spending any points from your <em>phrenic pool.</em> This amplification is in addition to the normal maximum of one amplification per spell.</Pair>
</Ability>
<h3 id="class-psychic-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-psychic--table-2"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Deep Magics (Su)</td><td>At 20th level, the character's repertoire of spells deepens dramatically. She gains an additional spell known for each spell level she can cast. A character of any class with spells known can select this capstone.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>Phrenic Mastery (Su)</td><td>At 20th level, the psychic's mind is a legendary weapon in its own right. The psychic's phrenic pool increases by 6, and she gains two new phrenic amplifications.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-psychic-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Drow:</strong> Gain 1/6 of a phrenic amplification (or a major amplification if the psychic is at least 11th level).<sup><InnerLink showBacklink="backlink-class-psychic-ref-A-1" id="class-psychic-ref-A-1" data-hash-target to="class-psychic-A">1</InnerLink></sup></p>
<p><strong>Duergar:</strong> The psychic treats her Wisdom bonus as 1/3 point higher for the purpose of determining the number of uses or rounds per day of her discipline powers.<sup><InnerLink showBacklink="backlink-class-psychic-ref-B-1" id="class-psychic-ref-B-1" data-hash-target to="class-psychic-B">2</InnerLink></sup></p>
<p><strong>Dwarf:</strong> When casting psychic abjuration spells, add 1/2 level to the effective caster level of the spell, but only to determine the spell's duration.<sup><InnerLink showBacklink="backlink-class-psychic-ref-C-1" id="class-psychic-ref-C-1" data-hash-target to="class-psychic-C">3</InnerLink></sup></p>
<p><strong>Elf:</strong> Increase the total number of points in the psychic's phrenic pool by 1/3 point.<sup><InnerLink showBacklink="backlink-class-psychic-ref-C-2" id="class-psychic-ref-C-2" data-hash-target to="class-psychic-C">3</InnerLink></sup></p>
<p><strong>Gnome:</strong> Increase the total number of points in the psychic's phrenic pool by 1/3 point.<sup><InnerLink showBacklink="backlink-class-psychic-ref-D-1" id="class-psychic-ref-D-1" data-hash-target to="class-psychic-D">4</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Gain 1/6 of a new phrenic amplification.<sup><InnerLink showBacklink="backlink-class-psychic-ref-D-2" id="class-psychic-ref-D-2" data-hash-target to="class-psychic-D">4</InnerLink></sup></p>
<p><strong>Halfling:</strong> The psychic treats her Charisma bonus as 1/3 point higher for the purpose of determining the number of uses or rounds per day of her discipline powers.<sup><InnerLink showBacklink="backlink-class-psychic-ref-D-3" id="class-psychic-ref-D-3" data-hash-target to="class-psychic-D">4</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Gain a +1 bonus on <Link to="/rule/concentration">concentration</Link> checks required because of taking damage while casting spells from the psychic class.<sup><InnerLink showBacklink="backlink-class-psychic-ref-D-4" id="class-psychic-ref-D-4" data-hash-target to="class-psychic-D">4</InnerLink></sup></p>
<p><strong>Human:</strong> Add one spell known from the psychic spell list. This spell must be at least 1 level lower than the highest spell level the psychic can cast.<sup><InnerLink showBacklink="backlink-class-psychic-ref-D-5" id="class-psychic-ref-D-5" data-hash-target to="class-psychic-D">4</InnerLink></sup></p>
<p><strong>Human:</strong> Add a +1/4 bonus to AC when flat-footed, to a maximum of what the psychic's AC would be if not flat-footed.<sup><InnerLink showBacklink="backlink-class-psychic-ref-E-1" id="class-psychic-ref-E-1" data-hash-target to="class-psychic-E">5</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-psychic-ref-F-1" id="class-psychic-ref-F-1" data-hash-target to="class-psychic-F">6</InnerLink></sup></p>
<p><strong>Ratfolk:</strong> Gain 1/6 of a new phrenic amplification.<sup><InnerLink showBacklink="backlink-class-psychic-ref-G-1" id="class-psychic-ref-G-1" data-hash-target to="class-psychic-G">7</InnerLink></sup></p>
<p><strong>Vanara:</strong> When casting psychic divination spells, the psychic adds 1/2 to the effective caster level of the spell, but only to determine the spell's range and its d% chance to provide correct or meaningful information (such as with augury or divination).<sup><InnerLink showBacklink="backlink-class-psychic-ref-H-1" id="class-psychic-ref-H-1" data-hash-target to="class-psychic-H">8</InnerLink></sup></p>
<p><strong>Wyrwood:</strong> The psychic gains 1/6 of a phrenic amplification.<sup><InnerLink showBacklink="backlink-class-psychic-ref-I-1" id="class-psychic-ref-I-1" data-hash-target to="class-psychic-I">9</InnerLink></sup></p>
</div>
<h3 id="class-psychic-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-psychic/amnesiac">Amnesiac</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting</p><p>The amnesiac once possessed great psychic power, but mental blocks - resulting from either a traumatic event or intentional implantation - have caused her to forget what she knew before</p></div>
<div className="archetype"><p><Link to="/arc-psychic/esoteric_starseeker">Esoteric Starseeker</Link></p><p><strong>Modifies or Replaces:</strong> Discipline Spells; 1st, 11th-level Phrenic Amplifications; Major Amplifications</p><p>An esoteric starseeker is a psychic who focuses her studies on uncovering the secrets of the sky and the constellations of the Cosmic Caravan.</p></div>
<div className="archetype"><p><Link to="/arc-psychic/formless_adept">Formless Adept</Link></p><p><strong>Modifies or Replaces:</strong> Phrenic Pool; Psychic Discipline; Discipline Powers; 1st and 15th-level Phrenic Amplifications; Discipline Spells; Remade Self</p><p>Formless adepts master their psychic powers to unshackle themselves from the confines of the flesh and empower their spellcasting.</p></div>
<div className="archetype"><p><Link to="/arc-psychic/magaambyan_telepath">Magaambyan Telepath</Link></p><p><strong>Modifies or Replaces:</strong> Discipline Spells; 1st, 11th-level Phrenic Amplifications; Telepathic Bond; Telepathy</p><p>Followers of Old-Mage Jatembe's more esoteric wisdom instead focus on the occult connection between all living creatures and the resonance between the natural and supernatural world.</p></div>
<div className="archetype"><p><Link to="/arc-psychic/mutation_mind">Mutation Mind</Link></p><p><strong>Modifies or Replaces:</strong> 1st-level Phrenic Amplification; Phrenic Amplifications; Major Amplifications</p><p>Exposure to unintended spell effects, curses, or sources of radiation cause some to manifest psychic powers. When a mutation mind uses her psychic abilities, her physical body changes under the stress, and she risks losing control if she pushes too far.</p></div>
<div className="archetype"><p><Link to="/arc-psychic/psychic_duelist">Psychic Duelist</Link></p><p><strong>Modifies or Replaces:</strong> 4th-level Discipline Spell; 7th-level Phrenic Amplification; Phrenic Amplifications; Telepathic Bond; Telepathy</p><p>Psychic duelists hone their mental powers for combat, much as warriors do with their blades.</p></div>
<div className="archetype"><p><Link to="/arc-psychic/psychic_marauder">Psychic Marauder</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Detect Thoughts; 3rd, 11th, 19th-level Phrenic Amplification; Telepathic Bond; Remade Self</p><p>The psychic marauder's powers come hand in hand with madness, either from exposure to alien psyches or from terrifying glimpses into the cosmos that the psychic can't suppress.</p></div>
<div className="archetype"><p><Link to="/arc-psychic/terror_weaver">Terror Weaver</Link></p><p><strong>Modifies or Replaces:</strong> Detect Thoughts; Telepathic Bond; 11th, 15th, 19th-level Phrenic Amplifications</p><p>(Half-orcs Only) A number of exceptional Darklands half-orcs have developed potent psychic abilities, unlocked by generations of exposure to a specific combination of mind-altering fungi and radiation.</p></div>
<h3 id="class-psychic-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"psychic archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Detect Thoughts"},{"header":"Phrenic Amplifications"},{"header":"1st-level Phrenic Amplification"},{"header":"3rd-level Phrenic Amplification"},{"header":"7th-level Phrenic Amplification"},{"header":"11th-level Phrenic Amplification"},{"header":"15th-level Phrenic Amplification"},{"header":"19th-level Phrenic Amplification"},{"header":"Major Amplifications"},{"header":"Phrenic Pool"},{"header":"Psychic Discipline"},{"header":"Discipline Powers"},{"header":"Discipline Spells"},{"header":"4th-level Discipline Spell"},{"header":"Remade Self"},{"header":"Spellcasting"},{"header":"Telepathic Bond"},{"header":"Telepathy"}],"data":[["‹arc-psychic/Amnesiac›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null],["‹arc-psychic/Esoteric Starseeker›",null,null,null,"X",null,null,"X",null,null,"X",null,null,null,"X",null,null,null,null,null],["‹arc-psychic/Formless Adept›",null,null,null,"X",null,null,null,"X",null,null,"X","X","X","X",null,"X",null,null,null],["‹arc-psychic/Magaambyan Telepath›",null,null,null,"X",null,null,"X",null,null,null,null,null,null,"X",null,null,null,"X","X"],["‹arc-psychic/Mutation Mind›",null,null,"X","X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-psychic/Psychic Duelist›",null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,"X","X"],["‹arc-psychic/Psychic Marauder›","X","X",null,null,"X",null,"X",null,"X",null,null,null,null,null,null,"X",null,"X",null],["‹arc-psychic/Terror Weaver›",null,"X",null,null,null,null,"X","X","X",null,null,null,null,null,null,null,null,"X",null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-psychic-label">Footnotes</h3>
<ol>
<li id="class-psychic-A">
<p><Link to="/source/blood_of_shadows">Blood of Shadows pg. 15</Link> <InnerLink id="backlink-class-psychic-ref-A-1" data-hash-target to="class-psychic-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-psychic-B">
<p><Link to="/source/darklands_revisited">Darklands Revisited pg. 13</Link> <InnerLink id="backlink-class-psychic-ref-B-1" data-hash-target to="class-psychic-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-psychic-C">
<p><Link to="/source/occult_adventures">Occult Adventures pg. 84</Link> <InnerLink id="backlink-class-psychic-ref-C-1" data-hash-target to="class-psychic-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink> <InnerLink id="backlink-class-psychic-ref-C-2" data-hash-target to="class-psychic-ref-C-2" aria-label="Back to reference C-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-psychic-D">
<p>Occult Adventures pg. 85 <InnerLink id="backlink-class-psychic-ref-D-1" data-hash-target to="class-psychic-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink> <InnerLink id="backlink-class-psychic-ref-D-2" data-hash-target to="class-psychic-ref-D-2" aria-label="Back to reference D-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-class-psychic-ref-D-3" data-hash-target to="class-psychic-ref-D-3" aria-label="Back to reference D-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-class-psychic-ref-D-4" data-hash-target to="class-psychic-ref-D-4" aria-label="Back to reference D-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-class-psychic-ref-D-5" data-hash-target to="class-psychic-ref-D-5" aria-label="Back to reference D-5">↩<sup>5</sup></InnerLink></p>
</li>
<li id="class-psychic-E">
<p><Link to="/source/horror_adventures">Horror Adventures pg. 41</Link> <InnerLink id="backlink-class-psychic-ref-E-1" data-hash-target to="class-psychic-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-psychic-F">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-psychic-ref-F-1" data-hash-target to="class-psychic-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-psychic-G">
<p>Blood of the Beast pg. 20 <InnerLink id="backlink-class-psychic-ref-G-1" data-hash-target to="class-psychic-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-psychic-H">
<p>Blood of the Beast pg. 28 <InnerLink id="backlink-class-psychic-ref-H-1" data-hash-target to="class-psychic-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-psychic-I">
<p><Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 6</Link> <InnerLink id="backlink-class-psychic-ref-I-1" data-hash-target to="class-psychic-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
export default {unchained_monk:_unchained_monk,ninja:_ninja,occultist:_occultist,oracle:_oracle,paladin:_paladin,psychic:_psychic}