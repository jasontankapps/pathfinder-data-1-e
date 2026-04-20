import {IonIcon} from '@ionic/react';
import DisplayTable from '../../components/DisplayTable';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _brawler = {hasJL:true,title: "Brawler", jsx: <><div className="jumpList" id="class-brawler-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-brawler-brawlers-cunning-ex">Brawler's Cunning</InnerLink></li><li><InnerLink toTop to="class-brawler-martial-flexibility-ex">Martial Flexibility</InnerLink></li><li><InnerLink toTop to="class-brawler-martial-training-ex">Martial Training</InnerLink></li><li><InnerLink toTop to="class-brawler-unarmed-strike">Unarmed Strike</InnerLink></li><li><InnerLink toTop to="class-brawler-bonus-combat-feats">Bonus Combat Feats</InnerLink></li><li><InnerLink toTop to="class-brawler-brawlers-flurry-ex">Brawler's Flurry</InnerLink></li><li><InnerLink toTop to="class-brawler-maneuver-training-ex">Maneuver Training</InnerLink></li><li><InnerLink toTop to="class-brawler-ac-bonus-ex">AC Bonus</InnerLink></li><li><InnerLink toTop to="class-brawler-knockout-ex">Knockout</InnerLink></li><li><InnerLink toTop to="class-brawler-brawlers-strike-ex">Brawler's Strike</InnerLink></li><li><InnerLink toTop to="class-brawler-close-weapon-mastery-ex">Close Weapon Mastery</InnerLink></li><li><InnerLink toTop to="class-brawler-awesome-blow-ex">Awesome Blow</InnerLink></li><li><InnerLink toTop to="class-brawler-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-brawler-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-brawler-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-brawler-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-brawler-brawler">Brawler</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 23</Link></p>
<p>Deadly even with nothing in her hands, a brawler eschews using the fighter's heavy armor and the monk's mysticism, focusing instead on perfecting many styles of brutal unarmed combat. Versatile, agile, and able to adapt to most enemy attacks, a brawler's body is a powerful weapon.</p>
<p><strong>Role:</strong> Brawlers are maneuverable and well suited for creating flanking situations or dealing with lightly armored enemies, as well as quickly adapting to a rapidly changing battlefield.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d10</td></tr><tr><th scope="row">Parent Class(es)</th><td colSpan={2}><Link to="/class/fighter">Fighter</Link> and <Link to="/class/monk">monk</Link>.</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>3d6 &times; 10 gp (average 105 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>4 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/escape_artist">Escape Artist</Link>, <Link to="/skill/ride">Ride</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, <Link to="/skill/knowledge_local">Knowledge (local)</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/handle_animal">Handle Animal</Link>, <Link to="/skill/intimidate">Intimidate</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-brawler-class-features">Class Features</h3>
<ScrollContainer id="class-brawler--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Base Attack Bonus</th>
<th>Fort Save</th>
<th>Ref Save</th>
<th>Will Save</th>
<th>Special</th>
<th>Unarmed Damage</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+1</td>
<td>+2</td>
<td>+2</td>
<td>+0</td>
<td>Brawler's cunning, martial flexibility, martial training, unarmed strike</td>
<td>1d6</td>
</tr>
<tr>
<td>2nd</td>
<td>+2</td>
<td>+3</td>
<td>+3</td>
<td>+0</td>
<td>Bonus combat feat, brawler's flurry (Two-Weapon Fighting)</td>
<td>1d6</td>
</tr>
<tr>
<td>3rd</td>
<td>+3</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>Maneuver training 1</td>
<td>1d6</td>
</tr>
<tr>
<td>4th</td>
<td>+4</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>AC bonus +1, knockout 1/day</td>
<td>1d8</td>
</tr>
<tr>
<td>5th</td>
<td>+5</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>Bonus combat feat, brawler's strike (magic), close weapon mastery</td>
<td>1d8</td>
</tr>
<tr>
<td>6th</td>
<td>+6/+1</td>
<td>+5</td>
<td>+5</td>
<td>+2</td>
<td>Martial flexibility (swift action)</td>
<td>1d8</td>
</tr>
<tr>
<td>7th</td>
<td>+7/+2</td>
<td>+5</td>
<td>+5</td>
<td>+2</td>
<td>Maneuver training 2</td>
<td>1d8</td>
</tr>
<tr>
<td>8th</td>
<td>+8/+3</td>
<td>+6</td>
<td>+6</td>
<td>+2</td>
<td>Bonus combat feat, brawler's flurry (Improved Two-Weapon Fighting)</td>
<td>1d10</td>
</tr>
<tr>
<td>9th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+6</td>
<td>+3</td>
<td>AC bonus +2, brawler's strike (cold iron and silver)</td>
<td>1d10</td>
</tr>
<tr>
<td>10th</td>
<td>+10/+5</td>
<td>+7</td>
<td>+7</td>
<td>+3</td>
<td>Martial flexibility (free action), knockout 2/day</td>
<td>1d10</td>
</tr>
<tr>
<td>11th</td>
<td>+11/+6/+1</td>
<td>+7</td>
<td>+7</td>
<td>+3</td>
<td>Bonus combat feat, maneuver training 3</td>
<td>1d10</td>
</tr>
<tr>
<td>12th</td>
<td>+12/+7/+2</td>
<td>+8</td>
<td>+8</td>
<td>+4</td>
<td>Brawler's strike (alignment), martial flexibility (immediate action)</td>
<td>2d6</td>
</tr>
<tr>
<td>13th</td>
<td>+13/+8/+3</td>
<td>+8</td>
<td>+8</td>
<td>+4</td>
<td>AC bonus +3</td>
<td>2d6</td>
</tr>
<tr>
<td>14th</td>
<td>+14/+9/+4</td>
<td>+9</td>
<td>+9</td>
<td>+4</td>
<td>Bonus combat feat</td>
<td>2d6</td>
</tr>
<tr>
<td>15th</td>
<td>+15/+10/+5</td>
<td>+9</td>
<td>+9</td>
<td>+5</td>
<td>Brawler's flurry (Greater Two-Weapon Fighting), maneuver training 4</td>
<td>2d6</td>
</tr>
<tr>
<td>16th</td>
<td>+16/+11/+6/+1</td>
<td>+10</td>
<td>+10</td>
<td>+5</td>
<td>Awesome blow, knockout 3/day</td>
<td>2d8</td>
</tr>
<tr>
<td>17th</td>
<td>+17/+12/+7/+2</td>
<td>+10</td>
<td>+10</td>
<td>+5</td>
<td>Bonus combat feat, brawler's strike (adamantine)</td>
<td>2d8</td>
</tr>
<tr>
<td>18th</td>
<td>+18/+13/+8/+3</td>
<td>+11</td>
<td>+11</td>
<td>+6</td>
<td>AC bonus +4</td>
<td>2d8</td>
</tr>
<tr>
<td>19th</td>
<td>+19/+14/+9/+4</td>
<td>+11</td>
<td>+11</td>
<td>+6</td>
<td>Maneuver training 5</td>
<td>2d8</td>
</tr>
<tr>
<td>20th</td>
<td>+20/+15/+10/+5</td>
<td>+12</td>
<td>+12</td>
<td>+6</td>
<td>Bonus combat feat, improved awesome blow, martial flexibility (any number)</td>
<td>2d10</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={3}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td><Link to="/eq-weapon/handaxe">handaxe</Link></td><td><Link to="/eq-weapon/short_sword">short sword</Link></td></tr><tr><td colSpan={2}>weapons from the close <Link to="/ability/weapon_groups">fighter weapon group</Link></td></tr><tr><th>Light Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Medium Armor?</th><td colSpan={2}>No</td></tr><tr><th>Heavy Armor?</th><td colSpan={2}>No</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">Yes, except tower shields</td></tr></tbody></table>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-brawler-brawlers-cunning-ex" data-hash-target><div className="box">Brawler's Cunning (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">If your Intelligence score is less than 13, it counts as 13 for the purpose of meeting the prerequisites of <Link to="/main/combat_feat">combat feats</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-brawler-martial-flexibility-ex" data-hash-target><div className="box">Martial Flexibility (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">3 times/day + 1 per two brawler levels<ByLevelPop levels={[[1,3],[2,4],[4,5],[6,6],[8,7],[10,8],[12,9],[14,10],[16,11],[18,12],[20,13]]} unit="time" postText="/day" /></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Move-Equivalent Action</div></div><div className="abEnd"><div className="box">You gain the benefit of a combat feat you don't possess. This effect lasts for 1 minute. You must meet all the feat's prerequisites.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">You can use this ability to gain the benefit of two combat feats at the same time. You may select one feat as a <strong className="hl">swift action</strong> or two feats as a <strong className="hl">move action</strong>. You may use one of these feats to meet a prerequisite of the second feat; doing so means that you cannot replace a feat currently fulfilling another's prerequisite without also replacing those feats that require it. Each individual feat selected counts toward your daily uses of this ability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">You can use this ability to gain the benefit of three combat feats at the same time. You may select one feat as a <strong className="hl">free action</strong>, two feats as a <strong className="hl">swift action</strong>, or three feats as a <strong className="hl">move action</strong>. You may use one of the feats to meet a prerequisite of the second and third feats, and use the second feat to meet a prerequisite of the third feat. Each individual feat selected counts toward your daily uses of this ability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">You gain the benefit of one combat feat as an <strong className="hl">immediate action</strong> or three combat feats as a <strong className="hl">swift action</strong>. Each individual feat selected counts toward your daily uses of this ability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">You can use this ability to gain the benefit of any number of combat feats as a <strong className="hl">swift action</strong>. Each feat selected counts toward your daily uses of this ability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You can use this ability again before the duration expires in order to replace the previous combat feat with another choice. If a combat feat has a daily use limitation (such as <Link to="/feat/stunning_fist">Stunning Fist</Link>), any uses of that combat feat while using this ability count toward that feat's daily limit.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-brawler-martial-training-ex" data-hash-target><div className="box">Martial Training (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You count your total brawler levels as both fighter levels and monk levels for the purpose of qualifying for feats. You also count as both a fighter and a monk for feats and magic items that have different effects based on whether the character has levels in those classes (such as <em>Stunning Fist</em> and a <Link to="/magic-wondrous/monks_robe">monk's robe</Link>).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">This ability does not automatically grant feats normally granted to fighters and monks based on class level, namely <em>Stunning Fist.</em></div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-brawler-unarmed-strike" data-hash-target><div className="box">Unarmed Strike</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat. You may attack with fists, elbows, knees, and feet. This means that you may make unarmed strikes with your hands full. You apply your full Strength modifier (not half) on damage rolls for all your unarmed strikes. Your unarmed strikes deal lethal damage, although you can choose to deal nonlethal damage with no penalty on the attack roll. You can make this choice while grappling as well.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Your unarmed strike is treated as both a manufactured weapon and a natural weapon for the purpose of spells and effects that enhance or improve either manufactured weapons or natural weapons. The damage of your strike is determined by your size and level, shown on the chart below.</div></div></div></div>
<div className="firstColumnEnd">
<ScrollContainer id="class-brawler--table-1"><table>
<thead>
<tr>
<th>Level</th>
<th>Damage (Small Brawler)</th>
<th>Damage (Medium Brawler)</th>
<th>Damage (Large Brawler)</th>
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
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-brawler-bonus-combat-feats" data-hash-target><div className="box">Bonus Combat Feats</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain a bonus combat feat in addition to those gained from normal advancement. This feat must be one that affect or improve your defenses or melee attacks. You must meet the prerequisites of the selected bonus combat feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 5th Level</div></div><div className="abEnd"><div className="box">You gain a new bonus combat feat, using the same limitations as above. You can choose to learn a new bonus combat feat in place of a bonus combat feat you have already learned. In effect, you lose the bonus combat feat in exchange for the new one. The old feat cannot be one that was used as a prerequisite for another feat, prestige class, or other ability. You can only change one feat, and must choose whether or not to swap the feat at the time you gain the bonus combat feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">You gain a new bonus combat feat and may swap out a previous combat feat (with the same limitations as above).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">You gain a new bonus combat feat and may swap out a previous combat feat (with the same limitations as above).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 14th Level</div></div><div className="abEnd"><div className="box">You gain a new bonus combat feat and may swap out a previous combat feat (with the same limitations as above).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 17th Level</div></div><div className="abEnd"><div className="box">You gain a new bonus combat feat and may swap out a previous combat feat (with the same limitations as above).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">You gain a new bonus combat feat and may swap out a previous combat feat (with the same limitations as above).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-brawler-brawlers-flurry-ex" data-hash-target><div className="box">Brawler's Flurry (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Full-Round Action</div></div><div className="abEnd"><div className="box">You can make a <em>brawler's flurry</em> as a full-attack action. When doing so, you have the <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link> feat when attacking with any combination of unarmed strikes, weapons from the close fighter weapon group, or weapons with the "monk" special feature. You do not need to use two different weapons to use this ability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">You gain use of the <Link to="/feat/improved_two_weapon_fighting">Improved Two-Weapon Fighting</Link> feat when using <em>brawler's flurry.</em></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">You gain use of the <Link to="/feat/greater_two_weapon_fighting">Greater Two-Weapon Fighting</Link> feat when using <em>brawler's flurry.</em></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You apply your full Strength modifier to your damage rolls for all attacks made with <em>brawler's flurry,</em> whether the attacks are made with an off-hand weapon or a weapon wielded in both hands. You can substitute <Link to="/rule/disarm">disarm</Link>, <Link to="/rule/sunder">sunder</Link>, and <Link to="/rule/trip">trip</Link> combat maneuvers for unarmed attacks as part of <em>brawler's flurry.</em> You can't use natural weapons as part of <em>brawler's flurry,</em> nor can you make natural weapon attacks in addition to your <em>brawler's flurry</em> attacks.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-brawler-maneuver-training-ex" data-hash-target><div className="box">Maneuver Training (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You can select one <Link to="/rule/combat_maneuver">combat maneuver</Link> to receive additional training. You gain a +1 bonus on combat maneuver checks when performing that combat maneuver and a +1 bonus to your CMD when defending against that maneuver.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">You select a new combat maneuver and gain the +1 bonuses above, while the previous maneuver's bonuses become +2.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">You select a new combat maneuver and gain the +1 bonuses above, while the previous maneuvers' bonuses become +2 and +3.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">You select a new combat maneuver and gain the +1 bonuses above, while the previous maneuvers' bonuses become +2, +3, and +4.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">You select a new combat maneuver and gain the +1 bonuses above, while the previous maneuvers' bonuses become +2, +3, +4, and +5.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-brawler-ac-bonus-ex" data-hash-target><div className="box">AC Bonus (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">When you wear light or no armor, you gain a +1 dodge bonus to AC and CMD. These bonuses to AC apply against touch attacks.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">These bonuses become +2.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">These bonuses increase to +3.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">These bonuses become +4.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You lose these bonuses while immobilized or <Link to="/misc/helpless">helpless</Link>, wearing medium or heavy armor, or carrying a medium or heavy load.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-brawler-knockout-ex" data-hash-target><div className="box">Knockout (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Once a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can unleash a devastating attack that can instantly knock a target unconscious. You must announce this intent before making your attack roll. If you hit and the target takes damage from the blow, the target must succeed at a Fortitude saving throw (DC = 10 + <Link to="/misc/half">half</Link> your brawler level + the higher of your Strength or Dexterity modifier) or fall unconscious for 1d6 rounds.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">You can use this twice a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">You can use this three times per day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Each round on its turn, the unconscious target may attempt a new saving throw to end the effect as a <strong className="hl">full-round action</strong> that does not provoke attacks of opportunity. Creatures immune to critical hits or nonlethal damage are immune to this ability.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-brawler-brawlers-strike-ex" data-hash-target><div className="box">Brawler's Strike (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Your unarmed strikes are treated as magic weapons for the purpose of overcoming damage reduction.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">Your unarmed attacks are also treated as cold iron and silver for the purpose of overcoming damage reduction.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">You choose one alignment component: chaotic, evil, good, or lawful; your unarmed strikes also count as this alignment for the purpose of overcoming damage reduction. (This alignment component cannot be the opposite of your actual alignment, such as a good brawler choosing evil strikes.)</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 17th Level</div></div><div className="abEnd"><div className="box">Your unarmed attacks are also treated as <Link to="/eq-material/adamantine">adamantine</Link> weapons for the purpose of overcoming damage reduction and bypassing hardness.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-brawler-close-weapon-mastery-ex" data-hash-target><div className="box">Close Weapon Mastery (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Your damage with weapons from the "close" weapon group increases. When wielding a <em>close weapon,</em> you use the unarmed strike damage of you 4 levels lower instead of the base damage for that weapon (for example, a 5th-level Medium brawler wielding a <Link to="/eq-weapon/punching_dagger">punching dagger</Link> deals 1d6 points of damage instead of the weapon's normal 1d4). If the weapon normally deals more damage than this, its damage is unchanged.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">This ability does not affect any other aspect of the weapon. You can decide to use the weapon's base damage instead of your adjusted unarmed strike damage - this must be declared before the attack roll is made.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-brawler-awesome-blow-ex" data-hash-target><div className="box">Awesome Blow (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can perform an <em>awesome blow</em> combat maneuver against a corporeal creature of your size or smaller. If the combat maneuver check succeeds, the opponent takes damage as if you hit it with the <em>close weapon</em> you are wielding or an unarmed strike, it is knocked flying 10 feet in a direction of your choice, and it falls <Link to="/rule/prone">prone</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You can only push the opponent in a straight line, and the opponent can't move closer to you than the square it started in. If an obstacle prevents the completion of the opponent's move, the opponent and the obstacle each take 1d6 points of damage, and the opponent is knocked prone in the space adjacent to the obstacle. (Unlike the <Link to="/feat/awesome_blow">Awesome Blow</Link> monster feat, you can be of any size to use this ability.)</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-brawler-improved-awesome-blow-ex" data-hash-target><div className="box">Improved Awesome Blow (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can use your <em>awesome blow</em> ability as an attack rather than as a standard action. You may use it on creatures of any size. If the maneuver roll is a natural 20, you can immediately attempt to confirm the critical by rolling another combat maneuver check with all the same modifiers as the one just rolled; if the confirmation roll is successful, the attack deals double damage, and the damage from hitting an obstacle (if any) is also doubled.</div></div></div></div>
<h3 id="class-brawler-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-brawler--table-2"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Old Dog, New Tricks (Ex)</td><td>At 20th level, the character shows that a true warrior always has one more surprise the enemy hasn't seen. The character gains four <Link to="/main/combat_feat">combat feats</Link>. This capstone is available to characters of any class that gains at least four bonus combat feats.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>Perfect Warrior (Ex)</td><td>At 20th level, the brawler has reached the highest levels of her art. The brawler's maneuver training increases by 2 and her dodge bonus to AC improves by 2. This replaces the 20th-level improvement to martial flexibility.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-brawler-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Dwarf:</strong> Reduce the hardness of any object made from clay, stone, or metal by 1 whenever the object is struck by the brawler's unarmed strike (minimum 0).<sup><InnerLink showBacklink="backlink-class-brawler-ref-A-1" id="class-brawler-ref-A-1" data-hash-target to="class-brawler-A">1</InnerLink></sup></p>
<p><strong>Elf:</strong> Add 1 foot to the brawler's base speed. In combat, this has an effect only for every five increases in the brawler's base speed.<sup><InnerLink showBacklink="backlink-class-brawler-ref-A-2" id="class-brawler-ref-A-2" data-hash-target to="class-brawler-A">1</InnerLink></sup></p>
<p><strong>Gnome:</strong> Increase the number of times per day the brawler can use martial flexibility by 1/4.<sup><InnerLink showBacklink="backlink-class-brawler-ref-B-1" id="class-brawler-ref-B-1" data-hash-target to="class-brawler-B">2</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Add 1 to the brawler's CMD when she's resisting a trip or overrun combat maneuver.<sup><InnerLink showBacklink="backlink-class-brawler-ref-B-2" id="class-brawler-ref-B-2" data-hash-target to="class-brawler-B">2</InnerLink></sup></p>
<p><strong>Halfling:</strong> Gain a +1 bonus to the brawler's CMD when resisting a grapple or overrun combat maneuver.<sup><InnerLink showBacklink="backlink-class-brawler-ref-B-3" id="class-brawler-ref-B-3" data-hash-target to="class-brawler-B">2</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Add 1/4 to the brawler's effective level to determine her unarmed strike damage.<sup><InnerLink showBacklink="backlink-class-brawler-ref-C-1" id="class-brawler-ref-C-1" data-hash-target to="class-brawler-C">3</InnerLink></sup></p>
<p><strong>Human:</strong> Gain a +1 bonus to the brawler's CMD when resisting two combat maneuvers of the brawler's choice.<sup><InnerLink showBacklink="backlink-class-brawler-ref-C-2" id="class-brawler-ref-C-2" data-hash-target to="class-brawler-C">3</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-brawler-ref-D-1" id="class-brawler-ref-D-1" data-hash-target to="class-brawler-D">4</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Increase the number of times per day the brawler can use martial flexibility by 1/4.<sup><InnerLink showBacklink="backlink-class-brawler-ref-D-2" id="class-brawler-ref-D-2" data-hash-target to="class-brawler-D">4</InnerLink></sup></p>
<p><strong>Strix:</strong> Add 1/4 to the brawler's effective class level to determine her unarmed strike damage.<sup><InnerLink showBacklink="backlink-class-brawler-ref-E-1" id="class-brawler-ref-E-1" data-hash-target to="class-brawler-E">5</InnerLink></sup></p>
<p><strong>Tengu:</strong> Gain a +1/2 insight bonus on attack rolls made with the beak as a secondary natural attack (to a maximum of +3); the brawler must have a beak natural attack to select this option.<sup><InnerLink showBacklink="backlink-class-brawler-ref-F-1" id="class-brawler-ref-F-1" data-hash-target to="class-brawler-F">6</InnerLink></sup></p>
<p><strong>Vanara:</strong> Gain 1/5 of a new Fleet feat.<sup><InnerLink showBacklink="backlink-class-brawler-ref-G-1" id="class-brawler-ref-G-1" data-hash-target to="class-brawler-G">7</InnerLink></sup></p>
</div>
<h3 id="class-brawler-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-brawler/battle_dancer">Battle Dancer</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Armor Proficiencies; Brawler's Cunning; Brawler's Flurry; AC Bonus; Knockout</p><p>Battle dancers practice a martial art that emphasizes constant motion</p></div>
<div className="archetype"><p><Link to="/arc-brawler/bouncer">Bouncer</Link></p><p><strong>Modifies or Replaces:</strong> Martial Flexibility; 2nd-level Bonus Feat; Close Weapon Mastery</p><p>Some taverns employ bouncers to keep out undesirables or for when their customers get too rowdy.</p></div>
<div className="archetype"><p><Link to="/arc-brawler/constructed_pugilist">Constructed Pugilist</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Martial Flexibility; Bonus Combat Feats</p><p>Brawlers that develop combat skills that use their prostheses so they always have a weapon at hand</p></div>
<div className="archetype"><p><Link to="/arc-brawler/exemplar">Exemplar</Link></p><p><strong>Modifies or Replaces:</strong> Unarmed Strike; Close Weapon Mastery; Maneuver Training; AC Bonus; Brawler's Strike</p><p>A versatile soldier who inspires her companions with her fighting prowess, an exemplar is at home on the front lines of battles anywhere.</p></div>
<div className="archetype"><p><Link to="/arc-brawler/feral_striker">Feral Striker</Link></p><p><strong>Modifies or Replaces:</strong> Martial Flexibility</p><p>A feral striker taps into a reservoir of druidic power hidden inside herself, allowing her to take animalistic characteristics.</p></div>
<div className="archetype"><p><Link to="/arc-brawler/hinyasi">Hinyasi</Link></p><p><strong>Modifies or Replaces:</strong> Armor Proficiencies; 2nd-level Bonus Feat; Knockout; Close Weapon Mastery</p><p>The hinyasi's martial traditions are centered on the use of farming tools and on other improvised weapons.</p></div>
<div className="archetype"><p><Link to="/arc-brawler/living_avalanche">Living Avalanche</Link></p><p><strong>Modifies or Replaces:</strong> 2nd and 5th-level Bonus Feats; Maneuver Training; AC Bonus; Awesome Blow; Improved Awesome Blow</p><p>When a living avalanche is on the move, no one can stand in her way.</p></div>
<div className="archetype"><p><Link to="/arc-brawler/mutagenic_mauler">Mutagenic Mauler</Link></p><p><strong>Modifies or Replaces:</strong> Martial Flexibility; AC Bonus</p><p>Not content with perfecting her body with natural methods, a mutagenic mauler resorts to alchemy to unlock the primal beast within.</p></div>
<div className="archetype"><p><Link to="/arc-brawler/shield_champion">Shield Champion</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; Maneuver Training; Brawler's Strike</p><p>Stalwart in battle, a shield champion has perfected an entire martial discipline relying on only her hand-to-hand fighting skills and her ever-present shield.</p></div>
<div className="archetype"><p><Link to="/arc-brawler/snakebite_striker">Snakebite Striker</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Martial Flexibility; 3rd, 7th, 11th, and 19th-level Maneuver Training</p><p>With her lightning quickness and guile, a snakebite striker keeps her foes' attention focused on her, because any one of her feints might be an actual attack.</p></div>
<div className="archetype"><p><Link to="/arc-brawler/steel_breaker">Steel-Breaker</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Brawler's Strike; Maneuver Training</p><p>The steel-breaker studies destruction and practices it as an art form.</p></div>
<div className="archetype"><p><Link to="/arc-brawler/strangler">Strangler</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Brawler's Flurry; AC Bonus; Knockout; Awesome Blow; Improved Awesome Blow</p><p>A strangler is trained to choke the life out of her victims with her vise-like grip.</p></div>
<div className="archetype"><p><Link to="/arc-brawler/strong_side_boxer">Strong-Side Boxer</Link></p><p><strong>Modifies or Replaces:</strong> AC Bonus; Maneuver Training; Close Weapon Mastery</p><p>A strong-side boxer employs a unique fighting style that incorporates a rope or cord wound around her hand.</p></div>
<div className="archetype"><p><Link to="/arc-brawler/turfer">Turfer</Link></p><p><strong>Modifies or Replaces:</strong> Maneuver Training; Knockout</p><p>A turfer has a mastery over particular types of terrain.</p></div>
<div className="archetype"><p><Link to="/arc-brawler/ulfen_beast_wrestler">Ulfen Beast-Wrestler</Link></p><p><strong>Modifies or Replaces:</strong> Maneuver Training; AC Bonus</p><p>For these mighty grapplers, wrestling normal opponents has lost its challenge - they seek greater targets for glory.</p></div>
<div className="archetype"><p><Link to="/arc-brawler/venomfist">Venomfist</Link></p><p><strong>Modifies or Replaces:</strong> Unarmed Strike; Knockout; Close Weapon Mastery</p><p>Thanks to alchemical experiments and rigorous study of venomous creatures, a venomfist has toxic unarmed strikes.</p></div>
<div className="archetype"><p><Link to="/arc-brawler/verdant_grappler">Verdant Grappler</Link></p><p><strong>Modifies or Replaces:</strong> 2nd and 11th-level Bonus Feats; Maneuver Training; Close Weapon Mastery</p><p>By accepting spirits of nature into her soul, a verdant grappler can entangle her foes with tangled undergrowth.</p></div>
<div className="archetype"><p><Link to="/arc-brawler/wild_child">Wild Child</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Bonus Combat Feats; Close Weapon Mastery; Maneuver Training</p><p>The wild child works with his sworn animal friend to conquer the challenges that lay before them.</p></div>
<div className="archetype"><p><Link to="/arc-brawler/winding_path_renegade">Winding Path Renegade</Link></p><p><strong>Modifies or Replaces:</strong> 2nd, 8th, 14th-level Bonus Feat; AC Bonus</p><p>Winding path renegades studied at the Houses of Perfection in Jalmeray, but while they grasped the mechanical aspects of the forms, they lacked the mental discipline required by the masters of the school.</p></div>
<h3 id="class-brawler-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"brawler archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"AC Bonus"},{"header":"Armor Proficiency"},{"header":"Awesome Blow"},{"header":"Improved Awesome Blow"},{"header":"Bonus Feats"},{"header":"2nd-level Bonus Feat"},{"header":"5th-level Bonus Feat"},{"header":"8th-level Bonus Feat"},{"header":"11th-level Bonus Feat"},{"header":"14th-level Bonus Feat"},{"header":"Brawler's Cunning"},{"header":"Brawler's Flurry"},{"header":"Brawler's Strike"},{"header":"Class Skills"},{"header":"Close Weapon Mastery"},{"header":"Knockout"},{"header":"Maneuver Training"},{"header":"3rd-level Maneuver Training"},{"header":"7th-level Maneuver Training"},{"header":"11th-level Maneuver Training"},{"header":"19th-level Maneuver Training"},{"header":"Martial Flexibility"},{"header":"Unarmed Strike"},{"header":"Weapon/Armor Proficiency"}],"data":[["‹arc-brawler/Battle Dancer›","X","X",null,null,null,null,null,null,null,null,"X","X",null,"X",null,"X",null,null,null,null,null,null,null,null],["‹arc-brawler/Bouncer›",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,null],["‹arc-brawler/Constructed Pugilist›",null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,null],["‹arc-brawler/Exemplar›","X",null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,"X",null,null,null,null,null,"X",null],["‹arc-brawler/Feral Striker›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null],["‹arc-brawler/Hinyasi›",null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null],["‹arc-brawler/Living Avalanche›","X",null,"X","X",null,"X","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-brawler/Mutagenic Mauler›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null],["‹arc-brawler/Shield Champion›",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,"X"],["‹arc-brawler/Snakebite Striker›",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X","X","X","X","X",null,null],["‹arc-brawler/Steel-Breaker›",null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,"X",null,null,null,null,null,null,null],["‹arc-brawler/Strangler›","X",null,"X","X",null,null,null,null,null,null,null,"X",null,"X",null,"X",null,null,null,null,null,null,null,null],["‹arc-brawler/Strong-Side Boxer›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null],["‹arc-brawler/Turfer›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null],["‹arc-brawler/Ulfen Beast-Wrestler›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-brawler/Venomfist›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,"X",null],["‹arc-brawler/Verdant Grappler›",null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null],["‹arc-brawler/Wild Child›",null,null,null,null,"X",null,null,null,null,null,null,null,null,"X","X",null,"X",null,null,null,null,null,null,null],["‹arc-brawler/Winding Path Renegade›","X",null,null,null,null,"X",null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-brawler-label">Footnotes</h3>
<ol>
<li id="class-brawler-A">
<p><Link to="/source/advanced_class_guide">Advanced Class Guide pg. 69</Link> <InnerLink id="backlink-class-brawler-ref-A-1" data-hash-target to="class-brawler-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink> <InnerLink id="backlink-class-brawler-ref-A-2" data-hash-target to="class-brawler-ref-A-2" aria-label="Back to reference A-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-brawler-B">
<p>Advanced Class Guide pg. 70 <InnerLink id="backlink-class-brawler-ref-B-1" data-hash-target to="class-brawler-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink> <InnerLink id="backlink-class-brawler-ref-B-2" data-hash-target to="class-brawler-ref-B-2" aria-label="Back to reference B-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-class-brawler-ref-B-3" data-hash-target to="class-brawler-ref-B-3" aria-label="Back to reference B-3">↩<sup>3</sup></InnerLink></p>
</li>
<li id="class-brawler-C">
<p>Advanced Class Guide pg. 71 <InnerLink id="backlink-class-brawler-ref-C-1" data-hash-target to="class-brawler-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink> <InnerLink id="backlink-class-brawler-ref-C-2" data-hash-target to="class-brawler-ref-C-2" aria-label="Back to reference C-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-brawler-D">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-brawler-ref-D-1" data-hash-target to="class-brawler-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink> <InnerLink id="backlink-class-brawler-ref-D-2" data-hash-target to="class-brawler-ref-D-2" aria-label="Back to reference D-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-brawler-E">
<p><Link to="/source/pathfinder_101_the_kintargo_contract">Pathfinder #101: The Kintargo Contract pg. 73</Link> <InnerLink id="backlink-class-brawler-ref-E-1" data-hash-target to="class-brawler-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-brawler-F">
<p>Blood of the Beast pg. 24 <InnerLink id="backlink-class-brawler-ref-F-1" data-hash-target to="class-brawler-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-brawler-G">
<p>Blood of the Beast pg. 28 <InnerLink id="backlink-class-brawler-ref-G-1" data-hash-target to="class-brawler-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _summoner = {hasJL:true,title: "Summoner", jsx: <><div className="jumpList" id="class-summoner-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-summoner-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-summoner-eidolon">Eidolon</InnerLink></li><li><InnerLink toTop to="class-summoner-life-link-su">Life Link</InnerLink></li><li><InnerLink toTop to="class-summoner-summon-monster-i-sp">Summon Monster</InnerLink></li><li><InnerLink toTop to="class-summoner-bond-senses-su">Bond Senses</InnerLink></li><li><InnerLink toTop to="class-summoner-shield-ally-ex">Shield Ally</InnerLink></li><li><InnerLink toTop to="class-summoner-makers-call-su">Maker's Call</InnerLink></li><li><InnerLink toTop to="class-summoner-transposition-su">Transposition</InnerLink></li><li><InnerLink toTop to="class-summoner-aspect-su">Aspect</InnerLink></li><li><InnerLink toTop to="class-summoner-greater-shield-ally-su">Greater Shield Ally</InnerLink></li><li><InnerLink toTop to="class-summoner-life-bond-su">Life Bond</InnerLink></li><li><InnerLink toTop to="class-summoner-merge-forms-su">Merge Forms</InnerLink></li><li><InnerLink toTop to="class-summoner-greater-aspect-su">Greater Aspect</InnerLink></li><li><InnerLink toTop to="class-summoner-twin-eidolon-su">Twin Eidolon</InnerLink></li><li><InnerLink toTop to="class-summoner-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-summoner-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-summoner-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-summoner-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-summoner-summoner">Summoner</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 54</Link></p>
<p>While many who dabble in the arcane become adept at beckoning monsters from the farthest reaches of the planes, none are more skilled at it than the summoner. This practitioner of the arcane arts forms a close bond with one particular outsider, known as an eidolon, who gains power as the summoner becomes more proficient at his summoning. Over time, the two become linked, eventually even sharing a shard of the same soul. But this power comes with a price: the summoner's spells and abilities are limited due to his time spent enhancing the power and exploring the nature of his eidolon.</p>
<p><strong>Role:</strong> Summoners spend much of their time exploring the arcane arts alongside their eidolons. While their power comes from within, they rely heavily on their eidolon companions in dangerous situations. While a summoner and his eidolon function as individuals, their true power lies in what they can accomplish together.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>2d6 &times; 10 gp (average 70 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>2 + Int modifier</td></tr><tr><th scope="row" rowSpan={4} className="sw">Class Skills</th><td><Link to="/skill/fly">Fly</Link>, <Link to="/skill/ride">Ride</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link>, <Link to="/skill/knowledge_geography">Knowledge (geography)</Link>, <Link to="/skill/knowledge_history">Knowledge (history)</Link>, <Link to="/skill/knowledge_local">Knowledge (local)</Link>, <Link to="/skill/knowledge_nature">Knowledge (nature)</Link>, <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link>, <Link to="/skill/knowledge_planes">Knowledge (planes)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, <Link to="/skill/linguistics">Linguistics</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/profession_any">Profession (any)</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/handle_animal">Handle Animal</Link>, <Link to="/skill/use_magic_device">Use Magic Device</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-summoner-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-summoner--table-0"><table>
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
<td>+0</td>
<td>+0</td>
<td>+2</td>
<td>Cantrips, eidolon, life link, <em>summon monster I</em></td>
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
<td>+0</td>
<td>+0</td>
<td>+3</td>
<td>Bond senses</td>
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
<td>+1</td>
<td>+1</td>
<td>+3</td>
<td><em>Summon monster II</em></td>
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
<td>+1</td>
<td>+1</td>
<td>+4</td>
<td>Shield ally</td>
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
<td>+1</td>
<td>+1</td>
<td>+4</td>
<td><em>Summon monster III</em></td>
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
<td>+2</td>
<td>+2</td>
<td>+5</td>
<td>Maker's call</td>
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
<td>+2</td>
<td>+2</td>
<td>+5</td>
<td><em>Summon monster IV</em></td>
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
<td>+2</td>
<td>+2</td>
<td>+6</td>
<td>Transposition</td>
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
<td>+3</td>
<td>+3</td>
<td>+6</td>
<td><em>Summon monster V</em></td>
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
<td>+3</td>
<td>+3</td>
<td>+7</td>
<td>Aspect</td>
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
<td>+3</td>
<td>+3</td>
<td>+7</td>
<td><em>Summon monster VI</em></td>
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
<td>+4</td>
<td>+4</td>
<td>+8</td>
<td>Greater shield ally</td>
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
<td>+4</td>
<td>+4</td>
<td>+8</td>
<td><em>Summon monster VII</em></td>
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
<td>+4</td>
<td>+4</td>
<td>+9</td>
<td>Life bond</td>
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
<td>+5</td>
<td>+5</td>
<td>+9</td>
<td><em>Summon monster VIII</em></td>
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
<td>+5</td>
<td>+5</td>
<td>+10</td>
<td>Merge forms</td>
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
<td>+5</td>
<td>+5</td>
<td>+10</td>
<td><em>Summon monster IX</em></td>
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
<td>+6</td>
<td>+6</td>
<td>+11</td>
<td>Greater aspect</td>
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
<td>+6</td>
<td>+6</td>
<td>+11</td>
<td><em>Gate</em></td>
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
<td>+6</td>
<td>+6</td>
<td>+12</td>
<td>Twin eidolon</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="class-summoner-spells-known">Spells Known</h3>
<ScrollContainer id="class-summoner--table-1"><table>
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
</tr>
<tr>
<td>2nd</td>
<td>5</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>6</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>6</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>6</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>6</td>
<td>4</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>2</td>
</tr>
<tr>
<td>17th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
</tr>
<tr>
<td>18th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>19th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
</tr>
<tr>
<td>20th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={1}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><th>Light Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Medium Armor?</th><td colSpan={2}>No</td></tr><tr><th>Heavy Armor?</th><td colSpan={2}>No</td></tr><tr><th>Shields?</th><td colSpan={2}>No</td></tr><tr><td colSpan={3} className="sw se">A summoner can cast summoner spells while wearing light armor without incurring the normal arcane spell failure chance. Like any other arcane spellcaster, a summoner wearing medium or heavy armor, or using a shield, incurs a chance of arcane spell failure if the spell in question has a somatic component. A multiclass summoner still incurs the normal arcane spell failure chance for arcane spells received from other classes.</td></tr></tbody></table>
<Ability id="class-summoner-spells" icon={["magic-swirl"]}><Pair single id="class-summoner-spells">Spells</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">To cast a spell, you must have a Charisma score equal to at least 10 + the spell level. You can cast only a certain number of spells of each spell level per day, as shown on the table above. In addition, you receive <Link to="/rule/determine_bonuses">bonus spells per day</Link> if you have a high Charisma score.</Pair>
<Pair title="Ability">You gain the ability to cast arcane spells which are drawn from the <Link to="/main/spells_summoner">summoner spell list</Link>. The DC for a saving throw against spells you cast is 10 + the spell level + your Charisma modifier. You do not need to prepare these spells in advance; you can cast any spell you know at any time, assuming you haven't yet used up your allotment of spells per day for the spell's level.</Pair><Pair title="Info"><p>A summoner's selection of spells is extremely limited. You begin play knowing four 0-level spells and two 1st-level spells of your choice. At each new summoner level you gain one or more new spells as indicated on the table above. Unlike spells per day, the number of spells you know is not affected by your Charisma score.</p>
<p>At 5th level, and every three levels thereafter (8th, 11th, and so on), you can choose to learn a new spell in place of one you already know. In effect, you "lose" the old spell in exchange for the new one. The new spell's level must be the same as that of the spell being exchanged, and it must be at least one level lower than the highest-level summoner spell you can cast. You may swap out only a single spell at any given level and must choose whether or not to swap the spell at the same time that you gain new spells known for the level.</p></Pair></Ability><div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-summoner-cantrips" data-hash-target><div className="box">Cantrips</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You learn a number of cantrips, or 0-level arcane spells. These spells are cast like any other spell, but they don't consume slots and can be used again. Cantrips cast using other spell slots, such as those due to metamagic feats, consume slots normally.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-summoner-eidolon" data-hash-target><div className="box">Eidolon</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box"><p>You begin play with the ability to summon to your side a powerful outsider called an eidolon. Your <Link to="/sidekick/eidolon">eidolon</Link> forms a link with you, who, forever after, summons an aspect of the same creature. Your eidolon has the same alignment as you and can speak all of your languages. Eidolons are treated as <Link to="/spelldef/summoning">summoned creatures</Link>, except that they are not sent back to their home plane until reduced to a number of negative hit points equal to or greater than their Constitution score. In addition, due to its tie to its summoner, an eidolon can touch and attack creatures warded by <Link to="/spell/protection_from_evil">protection from evil</Link> and similar effects that prevent contact with summoned creatures.</p>
<p>You can summon your eidolon in a ritual that takes 1 minute to perform. When summoned in this way, the eidolon hit points are unchanged from the last time it was summoned. The only exception to this is if the eidolon was slain, in which case it returns with <Link to="/misc/half">half</Link> its normal hit points. The eidolon does not heal naturally. The eidolon remains until dismissed by you (a <strong className="hl">standard action</strong>). If the eidolon is sent back to its home plane due to death, it cannot be summoned again until the following day. The eidolon cannot be sent back to its home plane by means of <Link to="/spell/dispel_magic">dispel magic</Link>, but spells such as <Link to="/spell/dismissal">dismissal</Link> and <Link to="/spell/banishment">banishment</Link> work normally. If you are unconscious, asleep, or killed, your eidolon is immediately banished.</p>
<p>The eidolon takes a form shaped by your desires. The eidolon's Hit Dice, saving throws, skills, feats, and abilities are tied to your class level and increase as you gain levels. In addition, each eidolon receives a pool of evolution points, based on your class level, that can be used to give the eidolon different abilities and powers, called <Link to="/ability/evolutions">evolutions</Link>. Whenever you gain a level, you must decide how these points are spent, and they are set until you gain another level of summoner.</p>
<p>The eidolon's physical appearance is up to you, but it always appears as some sort of fantastical creature. This control is not fine enough to make the eidolon appear like a specific creature. The eidolon also bears a glowing rune that is identical to a rune that appears on your forehead as long as the eidolon is summoned. While this rune can be hidden through mundane means, it cannot be concealed through magic that changes appearance, such as <Link to="/spell/alter_self">alter self</Link> or <Link to="/spell/polymorph">polymorph</Link> (although <Link to="/spell/invisibility">invisibility</Link> does conceal it as long as the spell lasts).</p>
</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/shield-reflect"><IonIcon icon="/icons/shield-reflect.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-summoner-life-link-su" data-hash-target><div className="box">Life Link (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Free Action</div></div><div className="abEnd"><div className="box">Whenever your eidolon takes enough damage to send it back to its home plane, you can sacrifice any number of hit points. Each hit point sacrificed in this way prevents 1 point of damage done to your eidolon. This can prevent your eidolon from being sent back to its home plane.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">In addition, you and your eidolon must remain within 100 feet of one another for your eidolon to remain at full strength. If your eidolon is beyond 100 feet but closer than 1,000 feet, its current and maximum hit point totals are reduced by 50%. If your eidolon is more than 1,000 feet away but closer than 10,000 feet, its current and maximum hit point totals are reduced by 75%. If your eidolon is more than 10,000 feet away, it is immediately returned to its home plane. Current hit points lost in this way are not restored when your eidolon gets closer to its summoner, but its maximum hit point total does return to normal.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-summoner-summon-monster-i-sp" data-hash-target><div className="box">Summon Monster I (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">3 + Cha modifier times/day</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can cast <Link to="/spell/summon_monster_i">summon monster I</Link> as a spell-like ability. Drawing upon this ability uses up the same power as you use to call your eidolon. As a result, you can only use this ability when your eidolon is not summoned. When you cast this spell, the creatures remain for 1 minute per level (instead of 1 round per level).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 3rd Level</div></div><div className="abEnd"><div className="box">This now behaves as <Link to="/spell/summon_monster_ii">summon monster II</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 5th Level</div></div><div className="abEnd"><div className="box">This now behaves as <Link to="/spell/summon_monster_iii">summon monster III</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">This now behaves as <Link to="/spell/summon_monster_iv">summon monster IV</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">This now behaves as <Link to="/spell/summon_monster_v">summon monster V</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">This now behaves as <Link to="/spell/summon_monster_vi">summon monster VI</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">This now behaves as <Link to="/spell/summon_monster_vii">summon monster VII</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">This now behaves as <Link to="/spell/summon_monster_viii">summon monster VIII</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 17th Level</div></div><div className="abEnd"><div className="box">This now behaves as <Link to="/spell/summon_monster_ix">summon monster IX</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">This now behaves as either <em>summon monster IX</em> or <Link to="/spell/gate">gate</Link>. If used as <em>gate,</em> you must pay any required material components.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You cannot have more than one <em>summon monster</em> or <em>gate</em> spell active in this way at one time. If this ability is used again, any existing <em>summon monster</em> or <em>gate</em> immediately ends. These summon spells are considered to be part of your spell list for the purposes of spell trigger and spell completion items. In addition, you can expend uses of this ability to fufill the construction requirements of any magic item you create, so long as you can use this ability to cast the required spell.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-summoner-bond-senses-su" data-hash-target><div className="box">Bond Senses (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">1 round/day per summoner level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can share the senses of your eidolon, hearing, seeing, smelling, tasting, and touching everything your eidolon does. There is no range to this effect, but your eidolon and you must be on the same plane. You can end this effect as a <strong className="hl">free action</strong>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-summoner-shield-ally-ex" data-hash-target><div className="box">Shield Ally (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Whenever you are within your eidolon's reach, you receive a +2 shield bonus to your Armor Class and a +2 circumstance bonus on your saving throws. This bonus does not apply if your eidolon is <Link to="/rule/grappled">grappled</Link>, <Link to="/misc/helpless">helpless</Link>, <Link to="/rule/paralyzed">paralyzed</Link>, <Link to="/misc/stunned">stunned</Link>, or <Link to="/misc/unconscious">unconscious</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-summoner-makers-call-su" data-hash-target><div className="box">Maker's Call (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 6th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">1 time/day + 1 per four summoner levels beyond 6th<ByLevelPop levels={[[6,1],[10,2],[14,3],[18,4]]} unit="time" postText="/day" /></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can call your eidolon to your side. This functions as <Link to="/spell/dimension_door">dimension door</Link>, using your caster level. When used, your eidolon appears adjacent to you (or as close as possible if all adjacent spaces are occupied). If your eidolon is out of range, the ability is wasted.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-summoner-transposition-su" data-hash-target><div className="box">Transposition (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can use your <em>maker's call</em> ability to swap locations with your eidolon. If it is larger than you, you can appear in any square occupied by your eidolon. The eidolon must occupy the square that was occupied by you if able, or as close as possible if it is not able.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-summoner-aspect-su" data-hash-target><div className="box">Aspect (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 10th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can divert up to 2 points from your eidolon's evolution pool to add evolutions to yourself. You cannot select any evolution that your eidolon could not possess, and you must be able to meet the requirements as well. You cannot select the <em>ability increase</em> evolution through this ability. Any points spent in this way are taken from your eidolon's evolution pool (reducing the total number available to your eidolon). You can change the evolutions you receive from these points any time you can change your eidolon's evolutions.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/shield-reflect"><IonIcon icon="/icons/shield-reflect.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-summoner-greater-shield-ally-su" data-hash-target><div className="box">Greater Shield Ally (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Whenever an ally is within your eidolon's reach, the ally receives a +2 shield bonus to its Armor Class and a +2 circumstance bonus on its saving throws. If this ally is you, these bonuses increase to +4. This bonus does not apply if your eidolon is grappled, helpless, paralyzed, stunned, or unconscious.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-summoner-life-bond-su" data-hash-target><div className="box">Life Bond (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 14th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">As long as your eidolon has 1 or more hit points, you are protected from harm. Damage in excess of that which would reduce you to fewer than 0 hit points is instead transferred to your eidolon. This damage is transferred 1 point at a time, meaning that as soon as your eidolon is reduced to a number of negative hit points equal to its Constitution score, all excess damage remains with you. Effects that cause death but not damage are unaffected by this ability. This ability does not affect spells like <Link to="/spell/baleful_polymorph">baleful polymorph</Link>, <Link to="/spell/flesh_to_stone">flesh to stone</Link>, or <Link to="/spell/imprisonment">imprisonment</Link>, or other spells that do not cause actual damage.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-summoner-merge-forms-su" data-hash-target><div className="box">Merge Forms (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">1 round/day per summoner level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Full-Round Action</div></div><div className="abEnd"><div className="box">You can touch your eidolon and merge forms with it. This transformation includes all of your gear. While merged in this way, you are protected from harm and cannot be the target of spells or effects. All effects and spells currently targeting you are suspended until you emerge from your eidolon (although durations continue to expire).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">You can end this effect at any time. You emerge in a square adjacent to your eidolon if able.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You can cast spells while inside your eidolon by taking control of your eidolon for the duration of the casting. Any material components used for these spells are taken from your gear, even though they are otherwise inaccessible. You can direct all of your eidolon's actions while merged, can perceive through its senses, and can speak through its voice. If your eidolon is returned to its home plane while you are merged with it, you are immediately ejected, taking 4d6 points of damage, and are stunned for 1 round.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-summoner-greater-aspect-su" data-hash-target><div className="box">Greater Aspect (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 18th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can divert more of your eidolon's evolutions to yourself. This ability functions as the <em>aspect</em> ability, but up to 6 evolution points can be taken. Unlike the <em>aspect</em> ability, your eidolon loses 1 point from its evolution pool for every 2 points (or fraction thereof) diverted to you.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-summoner-twin-eidolon-su" data-hash-target><div className="box">Twin Eidolon (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">1 minute/day per summoner level; these minutes need not be consecutive, but they must be spent in 1-minute increments</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can assume the shape of your eidolon, copying all of its evolutions, form, and abilities. Your Strength, Dexterity, and Constitution scores change to match the base scores of your eidolon. You can choose to have any gear that you carry become absorbed by your new form, as with spells from the polymorph subschool. Items with continuous effects continue to function while absorbed in this way. You lose your natural attacks and all racial traits (except bonus feats, skills, and languages) in favor of the abilities granted by your eidolon's evolutions. You retain all of your class features. You can end this effect as a <strong className="hl">free action</strong>.</div></div></div></div>
<h3 id="class-summoner-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-summoner--table-2"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Deep Magics (Su)</td><td>At 20th level, the character's repertoire of spells deepens dramatically. She gains an additional spell known for each spell level she can cast. A character of any class with spells known can select this capstone.</td></tr>
<tr><td>Grand Eidolon (Su)</td><td>At 20th level, the summoner's eidolon becomes an absolute monstrosity - a thing of legend and terror. The summoner gains 4 additional evolution points to spend as he likes, not subject to subtype-based requirements.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-summoner-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Aasimar:</strong> Add DR 1/evil to the summoner's eidolon. Each additional time the summoner selects this benefit, the DR/evil increases by +1/2 (maximum DR 10/evil).<sup><InnerLink showBacklink="backlink-class-summoner-ref-A-1" id="class-summoner-ref-A-1" data-hash-target to="class-summoner-A">1</InnerLink></sup></p>
<p><strong>Aquatic elf:</strong> As long as the summoner's eidolon has a swim speed, add 5 feet to its swim speed (max +20 feet).<sup><InnerLink showBacklink="backlink-class-summoner-ref-B-1" id="class-summoner-ref-B-1" data-hash-target to="class-summoner-B">2</InnerLink></sup></p>
<p><strong>Drow:</strong> Add 1 hit point or 1 skill rank to the summoner's eidolon.<sup><InnerLink showBacklink="backlink-class-summoner-ref-C-1" id="class-summoner-ref-C-1" data-hash-target to="class-summoner-C">3</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Add a +1/4 natural armor bonus to the AC of the summoner's eidolon.<sup><InnerLink showBacklink="backlink-class-summoner-ref-D-1" id="class-summoner-ref-D-1" data-hash-target to="class-summoner-D">4</InnerLink></sup></p>
<p><strong>Elf:</strong> The amount of time the summoner must spend to summon his eidolon is reduced by 1 round, to a minimum of 1 round.<sup><InnerLink showBacklink="backlink-class-summoner-ref-E-1" id="class-summoner-ref-E-1" data-hash-target to="class-summoner-E">5</InnerLink></sup></p>
<p><strong>Fetchling:</strong> The summoner's eidolon gains resistance 1 against either cold or electricity. Each time the summoner selects this reward, he increases his eidolon's resistance to one of those energy types by 1 (maximum 10 for any one energy type).<sup><InnerLink showBacklink="backlink-class-summoner-ref-F-1" id="class-summoner-ref-F-1" data-hash-target to="class-summoner-F">6</InnerLink></sup></p>
<p><strong>Gathlain:</strong> Add 1/4 evolution point to the eidolon's evolution pool. These bonus evolution points must be spent on evolutions that grant spell-like abilities or protect the eidolon from spells.<sup><InnerLink showBacklink="backlink-class-summoner-ref-G-1" id="class-summoner-ref-G-1" data-hash-target to="class-summoner-G">7</InnerLink></sup></p>
<p><strong>Gnome:</strong> Add +1 hit point to the summoner's eidolon.<sup><InnerLink showBacklink="backlink-class-summoner-ref-H-1" id="class-summoner-ref-H-1" data-hash-target to="class-summoner-H">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-summoner-ref-I-1" id="class-summoner-ref-I-1" data-hash-target to="class-summoner-I">9</InnerLink></sup></p>
<p><strong>Goblin:</strong> Add +1/4 evolution point to the eidolon's evolution pool. These bonus evolution points must be spent on evolutions that deal fire damage or protect the eidolon from fire (for example, resistance, energy attacks, immunity, breath weapon, and so on).<sup><InnerLink showBacklink="backlink-class-summoner-ref-J-1" id="class-summoner-ref-J-1" data-hash-target to="class-summoner-J">10</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Add +1/4 to the eidolon's evolution pool.<sup><InnerLink showBacklink="backlink-class-summoner-ref-K-1" id="class-summoner-ref-K-1" data-hash-target to="class-summoner-K">11</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-summoner-ref-L-1" id="class-summoner-ref-L-1" data-hash-target to="class-summoner-L">12</InnerLink></sup></p>
<p><strong>Halfling:</strong> Add +1 skill rank to the summoner's eidolon.<sup><InnerLink showBacklink="backlink-class-summoner-ref-M-1" id="class-summoner-ref-M-1" data-hash-target to="class-summoner-M">13</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-summoner-ref-N-1" id="class-summoner-ref-N-1" data-hash-target to="class-summoner-N">14</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Add +1 hit point to the summoner's eidolon.<sup><InnerLink showBacklink="backlink-class-summoner-ref-O-1" id="class-summoner-ref-O-1" data-hash-target to="class-summoner-O">15</InnerLink></sup></p>
<p><strong>Human:</strong> Add +1 hit point or +1 skill rank to the summoner's eidolon.<sup><InnerLink showBacklink="backlink-class-summoner-ref-P-1" id="class-summoner-ref-P-1" data-hash-target to="class-summoner-P">16</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-summoner-ref-Q-1" id="class-summoner-ref-Q-1" data-hash-target to="class-summoner-Q">17</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-summoner-ref-R-1" id="class-summoner-ref-R-1" data-hash-target to="class-summoner-R">18</InnerLink></sup></p>
<p><strong>Kobold:</strong> Add +1/4 to the summoner's shield ally bonus (maximum +2).<sup><InnerLink showBacklink="backlink-class-summoner-ref-S-1" id="class-summoner-ref-S-1" data-hash-target to="class-summoner-S">19</InnerLink></sup></p>
<p><strong>Nagaji:</strong> Add +1 hit point to the summoner's eidolon.<sup><InnerLink showBacklink="backlink-class-summoner-ref-T-1" id="class-summoner-ref-T-1" data-hash-target to="class-summoner-T">20</InnerLink></sup></p>
<p><strong>Oread:</strong> Add a +1/4 natural armor bonus to the AC of the summoner's eidolon.<sup><InnerLink showBacklink="backlink-class-summoner-ref-U-1" id="class-summoner-ref-U-1" data-hash-target to="class-summoner-U">21</InnerLink></sup></p>
<p><strong>Ratfolk:</strong> Add a +1 bonus on saving throws against poison made by the summoner's eidolon.<sup><InnerLink showBacklink="backlink-class-summoner-ref-V-1" id="class-summoner-ref-V-1" data-hash-target to="class-summoner-V">22</InnerLink></sup></p>
<p><strong>Tiefling:</strong> Add +1 hit point or +1 skill rank to the summoner's eidolon.<sup><InnerLink showBacklink="backlink-class-summoner-ref-W-1" id="class-summoner-ref-W-1" data-hash-target to="class-summoner-W">23</InnerLink></sup></p>
<p><strong>Undine:</strong> If the summoner's eidolon has an aquatic base form, add +5 feet to the range of the summoner's life link ability.<sup><InnerLink showBacklink="backlink-class-summoner-ref-X-1" id="class-summoner-ref-X-1" data-hash-target to="class-summoner-X">24</InnerLink></sup></p>
<p><strong>Vanara:</strong> Add 1/4 to the eidolon's evolution pool.<sup><InnerLink showBacklink="backlink-class-summoner-ref-Y-1" id="class-summoner-ref-Y-1" data-hash-target to="class-summoner-Y">25</InnerLink></sup></p>
<p><strong>Wayang:</strong> Add +1 skill rank to the summoner's eidolon.<sup><InnerLink showBacklink="backlink-class-summoner-ref-Z-1" id="class-summoner-ref-Z-1" data-hash-target to="class-summoner-Z">26</InnerLink></sup></p>
</div>
<h3 id="class-summoner-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-summoner/blood_god_disciple">Blood God Disciple</Link></p><p><strong>Modifies or Replaces:</strong> Summon Monster</p><p>(Half-Orc) A half-orc summoner who devotes himself to one of the bloody orc gods may believe his eidolon is an avatar of that god rather than a mere supernatural creature.</p></div>
<div className="archetype"><p><Link to="/arc-summoner/blood_summoner">Blood Summoner</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Shield Ally; Transposition; Greater Shield Ally; Merge Forms</p><p>A blood summoner conjures an eidolon born from violence and blood.</p></div>
<div className="archetype"><p><Link to="/arc-summoner/broodmaster">Broodmaster</Link></p><p><strong>Modifies or Replaces:</strong> Eidolon; Life Link; Life Bond; Merge Forms</p><p>Most summoners bond with one eidolon for their entire lives, but the broodmaster forges a link with multiple smaller eidolons that make up his brood.</p></div>
<div className="archetype"><p><Link to="/arc-summoner/counter_summoner">Counter-Summoner</Link></p><p><strong>Modifies or Replaces:</strong> Summon Monster; Bond Senses; Aspect; Greater Aspect</p><p>While most summoners excel at conjuring monsters, there are those who focus instead on disrupting the conjurations of opponents.</p></div>
<div className="archetype"><p><Link to="/arc-summoner/evolutionist">Evolutionist</Link></p><p><strong>Modifies or Replaces:</strong> Maker's Call; Transposition; Greater Shield Ally</p><p>An evolutionist possesses greater power over his eidolon's form, and is able to evolve his eidolon and its abilities to meet any challenge or face any threat as it comes up, seemingly on a whim.</p></div>
<div className="archetype"><p><Link to="/arc-summoner/first_worlder">First Worlder</Link></p><p><strong>Modifies or Replaces:</strong> Summon Monster; Eidolon</p><p>A first worlder summoner has a more primal connection to nature, their power being tied to the First World.</p></div>
<div className="archetype"><p><Link to="/arc-summoner/god_caller">God Caller</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Life Link; Transposition; Aspect; Greater Aspect; Twin Eidolon</p><p>God callers follow a fractured tradition that originated in the now-lost nation of Sarkoris. They speak to an assortment of ancient divine powers to lead their communities and sometimes stir up reformations in faiths with ideals similar to their personal convictions.</p></div>
<div className="archetype"><p><Link to="/arc-summoner/leshy_caller">Leshy Caller</Link></p><p><strong>Modifies or Replaces:</strong> Eidolon; Summon Monster</p><p>A leshy caller summons creatures from the First World and forges a bond with a leshy eidolon.</p></div>
<div className="archetype"><p><Link to="/arc-summoner/master_summoner">Master Summoner</Link></p><p><strong>Modifies or Replaces:</strong> Summon Monster I; Shield Ally; Bond Senses</p><p>The master summoner sacrifices the power of his eidolon in favor of summoning a plethora of otherworldly creatures to aid him.</p></div>
<div className="archetype"><p><Link to="/arc-summoner/morphic_savant">Morphic Savant</Link></p><p><strong>Modifies or Replaces:</strong> Eidolon; Summon Monster; Spells</p><p>A morphic savant is an agent of change who draws power from the Abyss, Elysium, or the Maelstrom to fulfill whatever goals strike his fancy.</p></div>
<div className="archetype"><p><Link to="/arc-summoner/naturalist">Naturalist</Link></p><p><strong>Modifies or Replaces:</strong> Summon Monster; Shield Ally; Greater Shield Ally; Aspect; Life Bond; Greater Aspect</p><p>A naturalist is a summoner who is in tune with the natural world, using his magic like a lens to focus various animal aspects onto his eidolon.</p></div>
<div className="archetype"><p><Link to="/arc-summoner/pyroclast">Pyroclast</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting; Eidolon; Maker's Call; Transposition</p><p>Pyroclasts harness the primal elemental energy of magma. Their eidolons often resemble elemental beings.</p></div>
<div className="archetype"><p><Link to="/arc-summoner/shadow_caller">Shadow Caller</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Summon Monster; Eidolon</p><p>(Fetchling Only) While most summoners can call any manner of creature from across the planes to serve them in combat, supplementing the skills of their eidolon with a diverse range of creatures, others eschew this broad utility and instead concentrate upon calling forth entities from the Shadow Plane.</p></div>
<div className="archetype"><p><Link to="/arc-summoner/shaitan_binder">Shaitan Binder</Link></p><p><strong>Modifies or Replaces:</strong> Share Spells; Shield Ally; Greater Shield Ally; Aspect; Greater Aspect; Twin Eidolon</p><p>(Oread Only) Shaitan binders call upon a reflection of their genie ancestors to serve as their eidolons.</p></div>
<div className="archetype"><p><Link to="/arc-summoner/spirit_summoner">Spirit Summoner</Link></p><p><strong>Modifies or Replaces:</strong> Summon Monster; Eidolon; Aspect; Maker's Call; Merge Forms; Transposition</p><p>A spirit summoner is an arcane spellcaster whose eidolon is a manifestation of a shamanic spirit.</p></div>
<div className="archetype"><p><Link to="/arc-summoner/storm_caller">Storm Caller</Link></p><p><strong>Modifies or Replaces:</strong> Eidolon; Summon Monster; Shield Ally; Greater Shield Ally; Maker's Call; Transposition</p><p>Many summoners beckon monsters from the Elemental Planes, but few are as specialized as storm callers, who channel the elemental energies of the Plane of Air.</p></div>
<div className="archetype"><p><Link to="/arc-summoner/story_summoner">Story Summoner</Link></p><p><strong>Modifies or Replaces:</strong> Eidolon; Bond Senses; Transposition</p><p>Story summoners rely on the harrow to weave the paths they walk, turning their tales into reality. They channel magic through their harrow decks to influence the strange extraplanar beings they summon, bringing familiar and fateful characters to life.</p></div>
<div className="archetype"><p><Link to="/arc-summoner/synthesist">Synthesist</Link></p><p><strong>Modifies or Replaces:</strong> Eidolon; Life Link; Shield Ally; Maker's Call; Transposition; Greater Shield Ally; Merge Forms</p><p>Rather than summon an eidolon to serve by his side, the synthesist fuses his eidolon's essence to his own.</p></div>
<div className="archetype"><p><Link to="/arc-summoner/twinned_summoner">Twinned Summoner</Link></p><p><strong>Modifies or Replaces:</strong> Shield Ally; Greater Shield Ally; Maker's Call; Transposition; Merge Forms</p><p>Reflecting the connected nature of Imbrex, a twinned summoner and his eidolon appear identical save for any obvious differences, such as evolutions or equipment.</p></div>
<div className="archetype"><p><Link to="/arc-summoner/unwavering_conduit">Unwavering Conduit</Link></p><p><strong>Modifies or Replaces:</strong> Eidolon; Summon Monster; Spells</p><p>Unwavering conduits work to keep everything ordered and regimented, drawing on power from the Eternal City of Axis, Heaven, or Hell to enforce whichever laws the summoner finds paramount.</p></div>
<div className="archetype"><p><Link to="/arc-summoner/wild_caller_arg">Wild Caller (ARG)</Link></p><p><strong>Modifies or Replaces:</strong> Summon Monster; Eidolon</p><p>(Half-Elf Only) The wild caller calls eidolons that take more natural and savage forms and summons from nature rather than the Great Beyond.</p></div>
<div className="archetype"><p><Link to="/arc-summoner/wild_caller_hotw">Wild Caller (HotW)</Link></p><p><strong>Modifies or Replaces:</strong> Eidolon; Summon Monster; Aspect; Greater Aspect</p><p>A wild caller summons creatures from the First World and forges a bond with an eidolon with a plant body.</p></div>
<h3 id="class-summoner-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"summoner archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Aspect"},{"header":"Greater Aspect"},{"header":"Bond Senses"},{"header":"Class Skills"},{"header":"Eidolon"},{"header":"Life Bond"},{"header":"Life Link"},{"header":"Maker's Call"},{"header":"Merge Forms"},{"header":"Share Spells"},{"header":"Shield Ally"},{"header":"Greater Shield Ally"},{"header":"Spellcasting"},{"header":"Summon Monster"},{"header":"Transposition"},{"header":"Twin Eidolon"}],"data":[["‹arc-summoner/Blood God Disciple›",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null],["‹arc-summoner/Blood Summoner›",null,null,null,"X",null,null,null,null,"X",null,"X","X",null,null,"X",null],["‹arc-summoner/Broodmaster›",null,null,null,null,"X","X","X",null,"X",null,null,null,null,null,null,null],["‹arc-summoner/Counter-Summoner›","X","X","X",null,null,null,null,null,null,null,null,null,null,"X",null,null],["‹arc-summoner/Evolutionist›",null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,"X",null],["‹arc-summoner/First Worlder›",null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null],["‹arc-summoner/God Caller›","X","X",null,"X",null,null,"X",null,null,null,null,null,null,null,"X","X"],["‹arc-summoner/Leshy Caller›",null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null],["‹arc-summoner/Master Summoner›",null,null,"X",null,null,null,null,null,null,null,"X",null,null,"X",null,null],["‹arc-summoner/Morphic Savant›",null,null,null,null,"X",null,null,null,null,null,null,null,"X","X",null,null],["‹arc-summoner/Naturalist›","X","X",null,null,null,"X",null,null,null,null,"X","X",null,"X",null,null],["‹arc-summoner/Pyroclast›",null,null,null,null,"X",null,null,"X",null,null,null,null,"X",null,"X",null],["‹arc-summoner/Shadow Caller›",null,null,null,"X","X",null,null,null,null,null,null,null,null,"X",null,null],["‹arc-summoner/Shaitan Binder›","X","X",null,null,null,null,null,null,null,"X","X","X",null,null,null,"X"],["‹arc-summoner/Spirit Summoner›","X",null,null,null,"X",null,null,"X","X",null,null,null,null,"X","X",null],["‹arc-summoner/Storm Caller›",null,null,null,null,"X",null,null,"X",null,null,"X","X",null,"X","X",null],["‹arc-summoner/Story Summoner›",null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,"X",null],["‹arc-summoner/Synthesist›",null,null,null,null,"X",null,"X","X","X",null,"X","X",null,null,"X",null],["‹arc-summoner/Twinned Summoner›",null,null,null,null,null,null,null,"X","X",null,"X","X",null,null,"X",null],["‹arc-summoner/Unwavering Conduit›",null,null,null,null,"X",null,null,null,null,null,null,null,"X","X",null,null],["‹arc-summoner/Wild Caller (ARG)›",null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null],["‹arc-summoner/Wild Caller (HotW)›","X","X",null,null,"X",null,null,null,null,null,null,null,null,"X",null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-summoner-label">Footnotes</h3>
<ol>
<li id="class-summoner-A">
<p><Link to="/source/advanced_race_guide">Advanced Race Guide pg. 86</Link> <InnerLink id="backlink-class-summoner-ref-A-1" data-hash-target to="class-summoner-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-summoner-B">
<p><Link to="/source/blood_of_the_sea">Blood of the Sea pg. 5</Link> <InnerLink id="backlink-class-summoner-ref-B-1" data-hash-target to="class-summoner-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-summoner-C">
<p><Link to="/source/blood_of_shadows">Blood of Shadows pg. 15</Link> <InnerLink id="backlink-class-summoner-ref-C-1" data-hash-target to="class-summoner-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-summoner-D">
<p>Advanced Race Guide pg. 13 <InnerLink id="backlink-class-summoner-ref-D-1" data-hash-target to="class-summoner-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-summoner-E">
<p>Advanced Race Guide pg. 23 <InnerLink id="backlink-class-summoner-ref-E-1" data-hash-target to="class-summoner-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-summoner-F">
<p>Advanced Race Guide pg. 109 <InnerLink id="backlink-class-summoner-ref-F-1" data-hash-target to="class-summoner-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-summoner-G">
<p><Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 10</Link> <InnerLink id="backlink-class-summoner-ref-G-1" data-hash-target to="class-summoner-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-summoner-H">
<p>Advanced Race Guide pg. 34 <InnerLink id="backlink-class-summoner-ref-H-1" data-hash-target to="class-summoner-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-summoner-I">
<p><Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 15</Link> <InnerLink id="backlink-class-summoner-ref-I-1" data-hash-target to="class-summoner-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-summoner-J">
<p>Advanced Race Guide pg. 116 <InnerLink id="backlink-class-summoner-ref-J-1" data-hash-target to="class-summoner-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
<li id="class-summoner-K">
<p>Advanced Race Guide pg. 43 <InnerLink id="backlink-class-summoner-ref-K-1" data-hash-target to="class-summoner-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
<li id="class-summoner-L">
<p>Advanced Player's Guide pg. 17 <InnerLink id="backlink-class-summoner-ref-L-1" data-hash-target to="class-summoner-ref-L-1" aria-label="Back to reference L-1">↩</InnerLink></p>
</li>
<li id="class-summoner-M">
<p>Advanced Race Guide pg. 63 <InnerLink id="backlink-class-summoner-ref-M-1" data-hash-target to="class-summoner-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink></p>
</li>
<li id="class-summoner-N">
<p>Advanced Player's Guide pg. 21 <InnerLink id="backlink-class-summoner-ref-N-1" data-hash-target to="class-summoner-ref-N-1" aria-label="Back to reference N-1">↩</InnerLink></p>
</li>
<li id="class-summoner-O">
<p>Advanced Race Guide pg. 53 <InnerLink id="backlink-class-summoner-ref-O-1" data-hash-target to="class-summoner-ref-O-1" aria-label="Back to reference O-1">↩</InnerLink></p>
</li>
<li id="class-summoner-P">
<p>Advanced Race Guide pg. 73 <InnerLink id="backlink-class-summoner-ref-P-1" data-hash-target to="class-summoner-ref-P-1" aria-label="Back to reference P-1">↩</InnerLink></p>
</li>
<li id="class-summoner-Q">
<p>Advanced Player's Guide pg. 23 <InnerLink id="backlink-class-summoner-ref-Q-1" data-hash-target to="class-summoner-ref-Q-1" aria-label="Back to reference Q-1">↩</InnerLink></p>
</li>
<li id="class-summoner-R">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-summoner-ref-R-1" data-hash-target to="class-summoner-ref-R-1" aria-label="Back to reference R-1">↩</InnerLink></p>
</li>
<li id="class-summoner-S">
<p>Advanced Race Guide pg. 134 <InnerLink id="backlink-class-summoner-ref-S-1" data-hash-target to="class-summoner-ref-S-1" aria-label="Back to reference S-1">↩</InnerLink></p>
</li>
<li id="class-summoner-T">
<p>Advanced Race Guide pg. 196 <InnerLink id="backlink-class-summoner-ref-T-1" data-hash-target to="class-summoner-ref-T-1" aria-label="Back to reference T-1">↩</InnerLink></p>
</li>
<li id="class-summoner-U">
<p>Advanced Race Guide pg. 145 <InnerLink id="backlink-class-summoner-ref-U-1" data-hash-target to="class-summoner-ref-U-1" aria-label="Back to reference U-1">↩</InnerLink></p>
</li>
<li id="class-summoner-V">
<p>Advanced Race Guide pg. 151 <InnerLink id="backlink-class-summoner-ref-V-1" data-hash-target to="class-summoner-ref-V-1" aria-label="Back to reference V-1">↩</InnerLink></p>
</li>
<li id="class-summoner-W">
<p>Advanced Race Guide pg. 170 <InnerLink id="backlink-class-summoner-ref-W-1" data-hash-target to="class-summoner-ref-W-1" aria-label="Back to reference W-1">↩</InnerLink></p>
</li>
<li id="class-summoner-X">
<p>Advanced Race Guide pg. 176 <InnerLink id="backlink-class-summoner-ref-X-1" data-hash-target to="class-summoner-ref-X-1" aria-label="Back to reference X-1">↩</InnerLink></p>
</li>
<li id="class-summoner-Y">
<p>Blood of the Beast pg. 28 <InnerLink id="backlink-class-summoner-ref-Y-1" data-hash-target to="class-summoner-ref-Y-1" aria-label="Back to reference Y-1">↩</InnerLink></p>
</li>
<li id="class-summoner-Z">
<p>Advanced Race Guide pg. 210 <InnerLink id="backlink-class-summoner-ref-Z-1" data-hash-target to="class-summoner-ref-Z-1" aria-label="Back to reference Z-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _unchained_summoner = {hasJL:true,title: "Unchained Summoner", jsx: <><div className="jumpList" id="class-unchained_summoner-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-unchained_summoner-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-unchained_summoner-eidolon">Eidolon</InnerLink></li><li><InnerLink toTop to="class-unchained_summoner-life-link-su">Life Link</InnerLink></li><li><InnerLink toTop to="class-unchained_summoner-summon-monster-i-sp">Summon Monster</InnerLink></li><li><InnerLink toTop to="class-unchained_summoner-bond-senses-su">Bond Senses</InnerLink></li><li><InnerLink toTop to="class-unchained_summoner-shield-ally-ex">Shield Ally</InnerLink></li><li><InnerLink toTop to="class-unchained_summoner-makers-call-su">Maker's Call</InnerLink></li><li><InnerLink toTop to="class-unchained_summoner-transposition-su">Transposition</InnerLink></li><li><InnerLink toTop to="class-unchained_summoner-aspect-su">Aspect</InnerLink></li><li><InnerLink toTop to="class-unchained_summoner-greater-shield-ally-su">Greater Shield Ally</InnerLink></li><li><InnerLink toTop to="class-unchained_summoner-life-bond-su">Life Bond</InnerLink></li><li><InnerLink toTop to="class-unchained_summoner-merge-forms-su">Merge Forms</InnerLink></li><li><InnerLink toTop to="class-unchained_summoner-greater-aspect-su">Greater Aspect</InnerLink></li><li><InnerLink toTop to="class-unchained_summoner-twin-eidolon-su">Twin Eidolon</InnerLink></li><li><InnerLink toTop to="class-unchained_summoner-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-unchained_summoner-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-unchained_summoner-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-unchained_summoner-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-unchained_summoner-unchained-summoner">Unchained Summoner</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 25</Link></p>
<p>There are those who take a different path when pursuing the arcane arts, reaching across the boundaries of the world to the far-flung planes to call forth all manner of creatures to do their bidding. Known as summoners, these arcane practitioners form close bonds with particular outsiders, known as eidolons, which increase in power along with their callers. In the end, summoners and their eidolons become linked, sharing shards of the same souls.</p>
<p><strong>Unchained:</strong> Most of the summoner's class features are the same as those of the class's original design - the biggest change comes to the eidolon. The unchained summoner selects a subtype for his eidolon (such as <Link to="/eidolon/angel">angel</Link>, <Link to="/eidolon/demon">demon</Link>, or <Link to="/eidolon/protean">protean</Link>), which determines a number of its evolutions and helps to shape the eidolon's general attitude and appearance. In addition, some of the evolutions are now tied to one or more subtypes and base forms, to make eidolons that better match the expected appearances and abilities of such creatures. Finally, the summoner spell list has been greatly revised, removing a number of imbalances.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>2d6 &times; 10 gp (average 70 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>2 + Int modifier</td></tr><tr><th scope="row" rowSpan={4} className="sw">Class Skills</th><td><Link to="/skill/fly">Fly</Link>, <Link to="/skill/ride">Ride</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link>, <Link to="/skill/knowledge_geography">Knowledge (geography)</Link>, <Link to="/skill/knowledge_history">Knowledge (history)</Link>, <Link to="/skill/knowledge_local">Knowledge (local)</Link>, <Link to="/skill/knowledge_nature">Knowledge (nature)</Link>, <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link>, <Link to="/skill/knowledge_planes">Knowledge (planes)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, <Link to="/skill/linguistics">Linguistics</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/profession_any">Profession (any)</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/handle_animal">Handle Animal</Link>, <Link to="/skill/use_magic_device">Use Magic Device</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-unchained_summoner-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-unchained_summoner--table-0"><table>
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
<td>+0</td>
<td>+0</td>
<td>+2</td>
<td>Cantrips, eidolon, life link, <em>summon monster I</em></td>
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
<td>+0</td>
<td>+0</td>
<td>+3</td>
<td>Bond senses</td>
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
<td>+1</td>
<td>+1</td>
<td>+3</td>
<td><em>Summon monster II</em></td>
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
<td>+1</td>
<td>+1</td>
<td>+4</td>
<td>Shield ally</td>
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
<td>+1</td>
<td>+1</td>
<td>+4</td>
<td><em>Summon monster III</em></td>
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
<td>+2</td>
<td>+2</td>
<td>+5</td>
<td>Maker's call</td>
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
<td>+2</td>
<td>+2</td>
<td>+5</td>
<td><em>Summon monster IV</em></td>
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
<td>+2</td>
<td>+2</td>
<td>+6</td>
<td>Transposition</td>
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
<td>+3</td>
<td>+3</td>
<td>+6</td>
<td><em>Summon monster V</em></td>
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
<td>+3</td>
<td>+3</td>
<td>+7</td>
<td>Aspect</td>
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
<td>+3</td>
<td>+3</td>
<td>+7</td>
<td><em>Summon monster VI</em></td>
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
<td>+4</td>
<td>+4</td>
<td>+8</td>
<td>Greater shield ally</td>
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
<td>+4</td>
<td>+4</td>
<td>+8</td>
<td><em>Summon monster VII</em></td>
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
<td>+4</td>
<td>+4</td>
<td>+9</td>
<td>Life bond</td>
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
<td>+5</td>
<td>+5</td>
<td>+9</td>
<td><em>Summon monster VIII</em></td>
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
<td>+5</td>
<td>+5</td>
<td>+10</td>
<td>Merge forms</td>
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
<td>+5</td>
<td>+5</td>
<td>+10</td>
<td><em>Summon monster IX</em></td>
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
<td>+6</td>
<td>+6</td>
<td>+11</td>
<td>Greater aspect</td>
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
<td>+6</td>
<td>+6</td>
<td>+11</td>
<td><em>Gate</em></td>
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
<td>+6</td>
<td>+6</td>
<td>+12</td>
<td>Twin eidolon</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="class-unchained_summoner-spells-known">Spells Known</h3>
<ScrollContainer id="class-unchained_summoner--table-1"><table>
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
</tr>
<tr>
<td>2nd</td>
<td>5</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>6</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>6</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>6</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>6</td>
<td>4</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>2</td>
</tr>
<tr>
<td>17th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
</tr>
<tr>
<td>18th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>19th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
</tr>
<tr>
<td>20th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={1}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><th>Light Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Medium Armor?</th><td colSpan={2}>No</td></tr><tr><th>Heavy Armor?</th><td colSpan={2}>No</td></tr><tr><th>Shields?</th><td colSpan={2}>No</td></tr><tr><td colSpan={3} className="sw se">A summoner can cast summoner spells while wearing light armor without incurring the normal arcane spell failure chance. Like any other arcane spellcaster, a summoner wearing medium or heavy armor, or using a shield, incurs a chance of arcane spell failure if the spell in question has a somatic component. A summoner still incurs the normal arcane spell failure chance for arcane spells granted by other classes.</td></tr></tbody></table>
<Ability id="class-unchained_summoner-spells" icon={["magic-swirl"]}><Pair single id="class-unchained_summoner-spells">Spells</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">To learn or cast a spell, you must have a Charisma score equal to at least 10 + the spell level. You can cast only a certain number of spells of each spell level per day, as shown on the table above. In addition, you receive <Link to="/rule/determine_bonuses">bonus spells per day</Link> if you have a high Charisma score.</Pair>
<Pair title="Ability">You gain the ability to cast arcane spells which are drawn from the <Link to="/main/spells_unchained_summoner">unchained summoner spell list</Link>. The DC for a saving throw against spells you cast is 10 + the spell level + your Charisma modifier. You do not need to prepare these spells in advance; you can cast any spell you know at any time, assuming you haven't yet used up your allotment of spells per day for the spell's level.</Pair><Pair title="Info"><p>An unchained summoner's selection of spells is limited. You begin play knowing four 0-level spells and two 1st-level spells of your choice. At each new unchained summoner level you gain one or more new spells as indicated on the table above. Unlike spells per day, the number of spells you know is not affected by your Charisma score.</p>
<p>At 5th level, and every three levels thereafter (8th, 11th, and so on), you can choose to learn a new spell in place of one you already know. In effect, you "lose" the old spell in exchange for the new one. The new spell's level must be the same as that of the spell being exchanged, and it must be at least one level lower than the highest-level unchained summoner spell you can cast. You may swap out only a single spell at any given level and must choose whether or not to swap the spell at the same time that you gain new spells known for the level.</p></Pair></Ability><div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_summoner-cantrips" data-hash-target><div className="box">Cantrips</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You learn a number of cantrips, or 0-level arcane spells. These spells are cast like any other spell, but they don't consume slots and can be used again. Cantrips cast using other spell slots, such as those due to metamagic feats, consume slots normally.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_summoner-eidolon" data-hash-target><div className="box">Eidolon</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box"><p>You begin play with the ability to summon to your side a powerful outsider called an eidolon. The <Link to="/sidekick/unchained_eidolon">eidolon</Link> forms a link with you, who, forever after, summons an aspect of the same creature. Each eidolon has a <Link to="/ability/unchained_eidolon_subtypes">subtype</Link>, chosen when the eidolon is first summoned, that determines its origin and many of its abilities. Your eidolon must be within one alignment step of you (so a neutral good summoner can call a neutral, lawful good, or chaotic good eidolon) and can speak all of your languages. An eidolon is treated as a <Link to="/spelldef/summoning">summoned creature</Link>, except that it is not sent back to its home plane until reduced to a number of negative hit points equal to or greater than its Constitution score. In addition, due to its tie to its summoner, an eidolon can touch and attack creatures warded by <Link to="/spell/protection_from_evil">protection from evil</Link> and similar effects that prevent contact with summoned creatures.</p>
<p>You can summon your eidolon in a ritual that takes 1 minute to perform. When summoned in this way, the eidolon's hit points are unchanged from the last time it was summoned. The only exception to this is if the eidolon was slain, in which case it returns with <Link to="/misc/half">half</Link> its normal hit points. The eidolon does not heal naturally. The eidolon remains until dismissed by you (a <strong className="hl">standard action</strong>). If the eidolon is sent back to its home plane due to death, it cannot be summoned again until the following day. The eidolon cannot be sent back to its home plane by means of <Link to="/spell/dispel_magic">dispel magic</Link>, but spells such as <Link to="/spell/dismissal">dismissal</Link> and <Link to="/spell/banishment">banishment</Link> function normally. If you are unconscious, asleep, or killed, your eidolon is immediately banished.</p>
<p>The eidolon takes a form shaped by your desires. The eidolon's Hit Dice, saving throws, skills, feats, and abilities are tied to your class level and increase as you gain levels. In addition, each eidolon gains a pool of evolution points based on your class level that can be used to give the eidolon different abilities and powers, called <Link to="/ability/unchained_evolutions">evolutions</Link>. Whenever you gain a level, you must decide how these points are spent, and they are set until you gain another level of summoner.</p>
<p>The eidolon's physical appearance is up to you, but it always appears as some sort of fantastical creature appropriate to its subtype. This control is not fine enough to make the eidolon appear like a specific creature. The eidolon also bears a glowing rune that is identical to a rune that appears on your forehead as long as the eidolon is summoned. While this rune can be hidden through mundane means, it cannot be concealed through magic that changes appearance, such as <Link to="/spell/alter_self">alter self</Link> or <Link to="/spell/polymorph">polymorph</Link> (although <Link to="/spell/invisibility">invisibility</Link> does conceal it as long as the spell lasts).</p>
</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/shield-reflect"><IonIcon icon="/icons/shield-reflect.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_summoner-life-link-su" data-hash-target><div className="box">Life Link (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Free Action</div></div><div className="abEnd"><div className="box">Whenever your eidolon takes enough damage to send it back to its home plane, as a reaction to the damage, you can sacrifice any number of hit points without using an action. Each hit point sacrificed in this way prevents 1 point of damage done to your eidolon. This can prevent your eidolon from being sent back to its home plane.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">In addition, you and your eidolon must remain within 100 feet of one another for your eidolon to remain at full strength. If your eidolon is beyond 100 feet but closer than 1,000 feet, its current and maximum hit point totals are reduced by 50%. If your eidolon is more than 1,000 feet away but closer than 10,000 feet, its current and maximum hit point totals are reduced by 75%. If your eidolon is more than 10,000 feet away, it is immediately returned to its home plane. Current hit points lost in this way are not restored when your eidolon gets closer to its summoner, but its maximum hit point total does return to normal.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_summoner-summon-monster-i-sp" data-hash-target><div className="box">Summon Monster I (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">3 + Cha modifier times/day</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can cast <Link to="/spell/summon_monster_i">summon monster I</Link> as a spell-like ability. Drawing upon this ability uses up the same power as you use to call your eidolon. As a result, you can only use this ability when your eidolon is not summoned. When you cast this spell, the creatures remain for 1 minute per level (instead of 1 round per level).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 3rd Level</div></div><div className="abEnd"><div className="box">This now behaves as <Link to="/spell/summon_monster_ii">summon monster II</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 5th Level</div></div><div className="abEnd"><div className="box">This now behaves as <Link to="/spell/summon_monster_iii">summon monster III</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">This now behaves as <Link to="/spell/summon_monster_iv">summon monster IV</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">This now behaves as <Link to="/spell/summon_monster_v">summon monster V</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">This now behaves as <Link to="/spell/summon_monster_vi">summon monster VI</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">This now behaves as <Link to="/spell/summon_monster_vii">summon monster VII</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">This now behaves as <Link to="/spell/summon_monster_viii">summon monster VIII</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 17th Level</div></div><div className="abEnd"><div className="box">This now behaves as <Link to="/spell/summon_monster_ix">summon monster IX</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">This now behaves as either <em>summon monster IX</em> or <Link to="/spell/gate">gate</Link>. If used as <em>gate,</em> you must pay any required material components.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You cannot have more than one <em>summon monster</em> or <em>gate</em> spell active in this way at one time. If this ability is used again, any existing <em>summon monster</em> or <em>gate</em> immediately ends. These summon spells are considered to be part of your spell list for the purposes of spell trigger and spell completion items. In addition, you can expend uses of this ability to fufill the construction requirements of any magic item you create, so long as you can use this ability to cast the required spell.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_summoner-bond-senses-su" data-hash-target><div className="box">Bond Senses (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">1 round/day per summoner level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can share the senses of your eidolon, hearing, seeing, smelling, tasting, and touching everything your eidolon does. There is no range to this effect, but your eidolon and you must be on the same plane. You can end this effect as a <strong className="hl">free action</strong>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_summoner-shield-ally-ex" data-hash-target><div className="box">Shield Ally (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Whenever you are within your eidolon's reach, you gain a +2 shield bonus to your Armor Class and a +2 circumstance bonus on your saving throws. This bonus does not apply if your eidolon is <Link to="/rule/grappled">grappled</Link>, <Link to="/misc/helpless">helpless</Link>, <Link to="/rule/paralyzed">paralyzed</Link>, <Link to="/misc/stunned">stunned</Link>, or <Link to="/misc/unconscious">unconscious</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_summoner-makers-call-su" data-hash-target><div className="box">Maker's Call (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 6th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">1 time/day + 1 per four summoner levels beyond 6th<ByLevelPop levels={[[6,1],[10,2],[14,3],[18,4]]} unit="time" postText="/day" /></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can call your eidolon to your side. This functions as <Link to="/spell/dimension_door">dimension door</Link>, using your caster level. When used, your eidolon appears adjacent to you (or as close as possible if all adjacent spaces are occupied). If your eidolon is out of range, the ability is wasted.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_summoner-transposition-su" data-hash-target><div className="box">Transposition (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can use your <em>maker's call</em> ability to swap locations with your eidolon. If it is larger than you, you can appear in any square occupied by your eidolon. The eidolon must occupy the square that was occupied by you if able, or as close as possible if it is not able.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_summoner-aspect-su" data-hash-target><div className="box">Aspect (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 10th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can divert up to 2 points from your eidolon's evolution pool to add evolutions to yourself. You cannot select any evolution that your eidolon could not possess, and you must be able to meet the requirements as well. You cannot select the <em>ability increase</em> evolution through this ability. Any points spent in this way are taken from your eidolon's evolution pool (reducing the total number available to your eidolon). You can change the evolutions you receive from these points any time you can change your eidolon's evolutions.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/shield-reflect"><IonIcon icon="/icons/shield-reflect.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_summoner-greater-shield-ally-su" data-hash-target><div className="box">Greater Shield Ally (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Whenever an ally is within your eidolon's reach, the ally receives a +2 shield bonus to its Armor Class and a +2 circumstance bonus on its saving throws. If this ally is you, these bonuses increase to +4. This bonus does not apply if your eidolon is grappled, helpless, paralyzed, stunned, or unconscious.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_summoner-life-bond-su" data-hash-target><div className="box">Life Bond (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 14th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">As long as your eidolon has 1 or more hit points, you are protected from harm. Damage in excess of that which would reduce you to fewer than 0 hit points is instead transferred to your eidolon. This damage is transferred 1 point at a time, meaning that as soon as your eidolon is reduced to a number of negative hit points equal to its Constitution score, all excess damage remains with you. Effects that cause death but not damage are unaffected by this ability. This ability does not affect spells like <Link to="/spell/baleful_polymorph">baleful polymorph</Link>, <Link to="/spell/flesh_to_stone">flesh to stone</Link>, or <Link to="/spell/imprisonment">imprisonment</Link>, or other spells that do not cause actual damage.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_summoner-merge-forms-su" data-hash-target><div className="box">Merge Forms (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">1 round/day per summoner level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Full-Round Action</div></div><div className="abEnd"><div className="box">You can touch your eidolon and merge forms with it. This transformation includes all of your gear. While merged in this way, you are protected from harm and cannot be the target of spells or effects. All effects and spells currently targeting you are suspended until you emerge from your eidolon (although durations continue to expire).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">You can end this effect at any time. You emerge in a square adjacent to your eidolon if able.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You can cast spells while inside your eidolon by taking control of your eidolon for the duration of the casting. Any material components used for these spells are taken from your gear, even though they are otherwise inaccessible. You can direct all of your eidolon's actions while merged, can perceive through its senses, and can speak through its voice. If your eidolon is returned to its home plane while you are merged with it, you are immediately ejected, taking 4d6 points of damage, and are stunned for 1 round.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_summoner-greater-aspect-su" data-hash-target><div className="box">Greater Aspect (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 18th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can divert more of your eidolon's evolutions to yourself. This ability functions as the <em>aspect</em> ability, but up to 6 evolution points can be taken. In addition, your eidolon loses 1 point from its evolution pool for every 2 points (or fraction thereof) diverted to you instead of losing 1 point from the evolution pool for each point diverted.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_summoner-twin-eidolon-su" data-hash-target><div className="box">Twin Eidolon (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">1 minute/day per summoner level; these minutes need not be consecutive, but they must be spent in 1-minute increments</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can assume the shape of your eidolon, copying all of its evolutions, form, and abilities. Your Strength, Dexterity, and Constitution scores change to match the base scores of your eidolon. You can choose to have any gear that you carry become absorbed by your new form, as with spells from the polymorph subschool. Items with continuous effects continue to function while absorbed in this way. You lose your natural attacks and all racial traits (except bonus feats, skills, and languages) in favor of the abilities granted by your eidolon's evolutions. You retain all of your class features. You can end this effect as a <strong className="hl">free action</strong>.</div></div></div></div>
<h3 id="class-unchained_summoner-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-unchained_summoner--table-2"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Deep Magics (Su)</td><td>At 20th level, the character's repertoire of spells deepens dramatically. She gains an additional spell known for each spell level she can cast. A character of any class with spells known can select this capstone.</td></tr>
<tr><td>Grand Eidolon (Su)</td><td>At 20th level, the summoner's eidolon becomes an absolute monstrosity - a thing of legend and terror. The summoner gains 4 additional evolution points to spend as he likes, not subject to subtype - based requirements.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-unchained_summoner-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-unchained_summoner-ref-A-1" id="class-unchained_summoner-ref-A-1" data-hash-target to="class-unchained_summoner-A">1</InnerLink></sup></p>
</div>
<h3 id="class-unchained_summoner-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-unchained_summoner/construct_caller">Construct Caller</Link></p><p><strong>Modifies or Replaces:</strong> Subtype; Summon Monster</p><p>Construct callers use their mechanical and planar understandings to work planar energies as a tinkerer works parts</p></div>
<div className="archetype"><p><Link to="/arc-unchained_summoner/devil_binder">Devil Binder</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Summon Monster I; Bond Senses; Shield Ally; Maker's Call; Transposition; Greater Shield Ally; Merge Forms; Twin Eidolon; Devotion</p><p>A devil binder borrows extraplanar quintessence from her eidolon, gaining strange abilities for herself and evolving her eidolon's magical powers.</p></div>
<div className="archetype"><p><Link to="/arc-unchained_summoner/devil_impostor">Devil Impostor</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Bond Senses; Eidolon; Summon Monster; Shield Ally; Greater Shield Ally; Transposition</p><p>Some summoners can't abide the cruelty of devils, or simply can't outwit them, but must appear to do so to get by in Cheliax, the Outer Planes, or similar areas of infernal influence. Rather than risk binding true devils, they reshape their eidolons into deceptive forms.</p></div>
<div className="archetype"><p><Link to="/arc-unchained_summoner/fey_caller">Fey Caller</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Summon Monster; Eidolon Subtype</p><p>Fey callers are summoners whose voices reach out into those strange faerie realms and call forth the fey who dwell there.</p></div>
<div className="archetype"><p><Link to="/arc-unchained_summoner/god_caller">God Caller</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Life Link; Transposition; Aspect; Greater Aspect; Twin Eidolon</p><p>God callers follow a fractured tradition that originated in the now-lost nation of Sarkoris. They speak to an assortment of ancient divine powers to lead their communities and sometimes stir up reformations in faiths with ideals similar to their personal convictions.</p></div>
<div className="archetype"><p><Link to="/arc-unchained_summoner/leshy_caller">Leshy Caller</Link></p><p><strong>Modifies or Replaces:</strong> Eidolon; Summon Monster</p><p>A leshy caller summons creatures from the First World and forges a bond with a leshy eidolon.</p></div>
<div className="archetype"><p><Link to="/arc-summoner/morphic_savant">Morphic Savant</Link></p><p><strong>Modifies or Replaces:</strong> Eidolon; Summon Monster; Spells</p><p>A morphic savant is an agent of change who draws power from the Abyss, Elysium, or the Maelstrom to fulfill whatever goals strike his fancy.</p></div>
<div className="archetype"><p><Link to="/arc-unchained_summoner/soulbound_summoner">Soulbound Summoner</Link></p><p><strong>Modifies or Replaces:</strong> Eidolon; Life Link; Summon Monster</p><p>Soulbound summoners, as a rule, never set out to bind their soul to a dangerous and enigmatic power. Rather, they have found themselves unintentional masters of eidolons through incredible circumstances.</p></div>
<div className="archetype"><p><Link to="/arc-unchained_summoner/storm_caller">Storm Caller</Link></p><p><strong>Modifies or Replaces:</strong> Eidolon; Summon Monster; Shield Ally; Greater Shield Ally; Maker's Call; Transposition</p><p>Many summoners beckon monsters from the Elemental Planes, but few are as specialized as storm callers, who channel the elemental energies of the Plane of Air.</p></div>
<div className="archetype"><p><Link to="/arc-unchained_summoner/twinned_summoner">Twinned Summoner</Link></p><p><strong>Modifies or Replaces:</strong> Shield Ally; Greater Shield Ally; Maker's Call; Transposition; Merge Forms</p><p>Reflecting the connected nature of Imbrex, a twinned summoner and his eidolon appear identical save for any obvious differences, such as evolutions or equipment.</p></div>
<h3 id="class-unchained_summoner-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"unchained summoner archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Aspect"},{"header":"Greater Aspect"},{"header":"Bond Senses"},{"header":"Class Skills"},{"header":"Devotion"},{"header":"Eidolon"},{"header":"Life Link"},{"header":"Maker's Call"},{"header":"Merge Forms"},{"header":"Shield Ally"},{"header":"Greater Shield Ally"},{"header":"Summon Monster"},{"header":"Transposition"},{"header":"Twin Eidolon"},{"header":"Spells"}],"data":[["‹arc-unchained_summoner/Construct Caller›",null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null],["‹arc-unchained_summoner/Devil Binder›","X",null,null,"X",null,"X",null,null,"X","X","X","X","X","X","X",null],["‹arc-unchained_summoner/Devil Impostor›",null,null,null,"X","X",null,"X",null,null,null,"X","X","X","X",null,null],["‹arc-unchained_summoner/Fey Caller›",null,null,null,null,"X",null,"X",null,null,null,null,null,"X",null,null,null],["‹arc-unchained_summoner/God Caller›",null,"X","X",null,"X",null,null,"X",null,null,null,null,null,"X","X",null],["‹arc-unchained_summoner/Leshy Caller›",null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null],["‹arc-summoner/Morphic Savant›",null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,"X"],["‹arc-unchained_summoner/Soulbound Summoner›",null,null,null,null,null,null,"X","X",null,null,null,null,"X",null,null,null],["‹arc-unchained_summoner/Storm Caller›",null,null,null,null,null,null,"X",null,"X",null,"X","X","X","X",null,null],["‹arc-unchained_summoner/Twinned Summoner›",null,null,null,null,null,null,null,null,"X","X","X","X",null,"X",null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-unchained_summoner-label">Footnotes</h3>
<ol>
<li id="class-unchained_summoner-A">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-unchained_summoner-ref-A-1" data-hash-target to="class-unchained_summoner-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _mesmerist = {hasJL:true,title: "Mesmerist", jsx: <><div className="jumpList" id="class-mesmerist-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-mesmerist-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-mesmerist-consummate-liar">Consummate Liar</InnerLink></li><li><InnerLink toTop to="class-mesmerist-hypnotic-stare-su">Hypnotic Stare</InnerLink></li><li><InnerLink toTop to="class-mesmerist-mesmerist-tricks-su">Mesmerist Tricks</InnerLink></li><li><InnerLink toTop to="class-mesmerist-painful-stare-su">Painful Stare</InnerLink></li><li><InnerLink toTop to="class-mesmerist-towering-ego-su">Towering Ego</InnerLink></li><li><InnerLink toTop to="class-mesmerist-bold-stare-su">Bold Stare</InnerLink></li><li><InnerLink toTop to="class-mesmerist-touch-treatment-su">Touch Treatment</InnerLink></li><li><InnerLink toTop to="class-mesmerist-manifold-tricks-su">Manifold Tricks</InnerLink></li><li><InnerLink toTop to="class-mesmerist-mental-potency-ex">Mental Potency</InnerLink></li><li><InnerLink toTop to="class-mesmerist-glib-lie-su">Glib Lie</InnerLink></li><li><InnerLink toTop to="class-mesmerist-masterful-tricks-su">Masterful Tricks</InnerLink></li><li><InnerLink toTop to="class-mesmerist-rule-minds-su">Rule Minds</InnerLink></li><li><InnerLink toTop to="class-mesmerist-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-mesmerist-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-mesmerist-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-mesmerist-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-mesmerist-mesmerist">Mesmerist</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 38</Link></p>
<p>Experts at charm and deceit, mesmerists compel others to heed their words and bend to their will. Psychic powers, primarily those of enchantment and illusion, give mesmerists the tools they need to manipulate others - usually for their own personal gain. The very gaze of a mesmerist can hypnotize someone into following his whims. Mesmerists frequently form cults of personality around themselves, and they develop skills and contingency plans in case their ploys are discovered. They draw their magic from the Astral Plane, and many consider their minds to be conduits to enigmatic spaces others can't comprehend.</p>
<p><strong>Role:</strong> Mesmerists wield power over lesser minds, suppressing foes' wills to weaken them. Priding themselves on their trickery and inventiveness, they also support their allies - and often themselves - with magical tricks, most of which offer protection. Their limited healing ability primarily provides <Link to="/rule/temporary_hit_points">temporary hit points</Link>, so mesmerists aren't the strongest primary healers, but they can easily remove conditions that typically affect the mind.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>3d6 &times; 10 gp (average 105 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>6 + Int modifier</td></tr><tr><th scope="row" rowSpan={4} className="sw">Class Skills</th><td><Link to="/skill/escape_artist">Escape Artist</Link>, <Link to="/skill/sleight_of_hand">Sleight of Hand</Link>, <Link to="/skill/stealth">Stealth</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/appraise">Appraise</Link>, <Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, <Link to="/skill/knowledge_history">Knowledge (history)</Link>, <Link to="/skill/knowledge_local">Knowledge (local)</Link>, <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, <Link to="/skill/linguistics">Linguistics</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/disguise">Disguise</Link>, <Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/perform_any">Perform (any)</Link>, <Link to="/skill/use_magic_device">Use Magic Device</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-mesmerist-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-mesmerist--table-0"><table>
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
<td>+0</td>
<td>+2</td>
<td>+2</td>
<td>Consummate liar, hypnotic stare, knacks, mesmerist trick, painful stare</td>
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
<td>+0</td>
<td>+3</td>
<td>+3</td>
<td>Mesmerist trick, towering ego</td>
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
<td>+1</td>
<td>+3</td>
<td>+3</td>
<td>Bold stare, touch treatment (minor)</td>
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
<td>+1</td>
<td>+4</td>
<td>+4</td>
<td>Mesmerist trick</td>
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
<td>+1</td>
<td>+4</td>
<td>+4</td>
<td>Manifold tricks (2), mental potency</td>
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
<td>+2</td>
<td>+5</td>
<td>+5</td>
<td>Mesmerist trick, touch treatment (moderate)</td>
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
<td>+2</td>
<td>+5</td>
<td>+5</td>
<td>Bold stare</td>
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
<td>+2</td>
<td>+6</td>
<td>+6</td>
<td>Hypnotic stare (-3), mesmerist trick</td>
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
<td>+3</td>
<td>+6</td>
<td>+6</td>
<td>Manifold tricks (3)</td>
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
<td>+3</td>
<td>+7</td>
<td>+7</td>
<td>Mesmerist trick, touch treatment (greater)</td>
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
<td>+3</td>
<td>+7</td>
<td>+7</td>
<td>Bold stare, glib lie</td>
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
<td>+4</td>
<td>+8</td>
<td>+8</td>
<td>Masterful tricks, mesmerist trick</td>
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
<td>+4</td>
<td>+8</td>
<td>+8</td>
<td>Manifold tricks (4)</td>
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
<td>+4</td>
<td>+9</td>
<td>+9</td>
<td>Mesmerist trick, touch treatment (<em>break enchantment</em>)</td>
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
<td>+5</td>
<td>+9</td>
<td>+9</td>
<td>Bold stare</td>
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
<td>+5</td>
<td>+10</td>
<td>+10</td>
<td>Mesmerist trick</td>
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
<td>+5</td>
<td>+10</td>
<td>+10</td>
<td>Manifold tricks (5)</td>
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
<td>+6</td>
<td>+11</td>
<td>+11</td>
<td>Mesmerist trick</td>
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
<td>+6</td>
<td>+11</td>
<td>+11</td>
<td>Bold stare</td>
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
<td>+6</td>
<td>+12</td>
<td>+12</td>
<td>Mesmerist trick, rule minds</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="class-mesmerist-spells-known">Spells Known</h3>
<ScrollContainer id="class-mesmerist--table-1"><table>
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
</tr>
<tr>
<td>2nd</td>
<td>5</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>6</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>6</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>6</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>6</td>
<td>4</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>2</td>
</tr>
<tr>
<td>17th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
</tr>
<tr>
<td>18th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>19th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
</tr>
<tr>
<td>20th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={3}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td><Link to="/eq-weapon/hand_crossbow">hand crossbow</Link></td><td><Link to="/eq-weapon/sap">sap</Link></td></tr><tr><td><Link to="/eq-weapon/sword_cane">sword cane</Link></td><td><Link to="/eq-weapon/whip">whip</Link></td></tr><tr><th>Light Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Medium Armor?</th><td colSpan={2}>No</td></tr><tr><th>Heavy Armor?</th><td colSpan={2}>No</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">No</td></tr></tbody></table>
<Ability id="class-mesmerist-spells" icon={["magic-swirl"]}><Pair single id="class-mesmerist-spells">Spells</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">To cast a spell, you must have a Charisma score equal to at least 10 + the spell level. You can cast only a certain number of spells of each spell level per day, as shown on the table above. In addition, you receive <Link to="/rule/determine_bonuses">bonus spells per day</Link> if you have a high Charisma score.</Pair>
<Pair title="Ability">You gain the ability to cast psychic spells which are drawn from the <Link to="/main/spells_mesmerist">mesmerist spell list</Link>. The DC for a saving throw against spells you cast is 10 + the spell level + your Charisma modifier. You do not need to prepare these spells in advance; you can cast any spell you know at any time, assuming you haven't yet used up your allotment of spells per day for the spell's level.</Pair><Pair title="Info"><p>A mesmerist's selection of spells is limited. You begin play knowing four 0-level spells and two 1st-level spells of your choice. At each new mesmerist level you gain one or more new spells as indicated on the table above. Unlike spells per day, the number of spells you know is not affected by your Charisma score.</p>
<p>At 5th level, and every three levels thereafter (8th, 11th, and so on), you can choose to learn a new spell in place of one you already know. In effect, you "lose" the old spell in exchange for the new one. The new spell's level must be the same as that of the spell being exchanged, and it must be at least one level lower than the highest-level mesmerist spell you can cast. You may swap out only a single spell at any given level and must choose whether or not to swap the spell at the same time that you gain new spells known for the level.</p></Pair></Ability><div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-mesmerist-knacks" data-hash-target><div className="box">Knacks</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You learn a number of knacks, or 0-level psychic spells. These spells are cast like any other spell, but they don't consume slots and can be used again. Knacks cast using other spell slots, such as those due to metamagic feats, consume slots normally.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-mesmerist-consummate-liar" data-hash-target><div className="box">Consummate Liar</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You add <Link to="/misc/half">half</Link> your mesmerist level (minimum 1) as a bonus on all Bluff checks. In addition, you qualify for the <Link to="/feat/improved_feint">Improved Feint</Link> and <Link to="/feat/greater_feint">Greater Feint</Link> feats, even if you don't have <Link to="/feat/combat_expertise">Combat Expertise</Link> or an Intelligence score of at least 13. You can also ignore Combat Expertise and an Intelligence score of 13 as prerequisites for other feats that require Improved Feint or Greater Feint.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-mesmerist-hypnotic-stare-su" data-hash-target><div className="box">Hypnotic Stare (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">You can focus your stare on one creature within 30 feet. That creature takes a -2 penalty on Will saving throws. You can maintain your <em>stare</em> against only one opponent at a time; it remains in effect until you stare at a new target, the opponent dies, the opponent moves farther than 30 feet away, or you fall unconscious or die. You can remove the memory of your <em>stare</em> from the target's mind; the creature doesn't remember that it was affected (nor does it realize that it is currently being affected) unless you allow it.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">The penalty becomes -3.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The <em>hypnotic stare</em> is a psychic effect, and relies more on your focus than the target's perception of your <em>stare.</em> It can't be avoided in the same ways a <Link to="/umr/gaze">gaze</Link> attack can. You can use this ability even while blinded, but must succeed at a DC 20 <Link to="/rule/concentration">concentration</Link> check to do so. Staring at a creature requires your focus, so if you use a gaze attack or similar ability, you must target the subject of your <em>hypnotic stare</em> or voluntarily end the <em>stare.</em> The penalties from multiple mesmerists' stares don't stack, nor do they stack with penalties from witches' <Link to="/hex/evil_eye">evil eye</Link> hexes. This is a mind-affecting effect.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-mesmerist-mesmerist-tricks-su" data-hash-target><div className="box">Mesmerist Tricks (Su)</div><div className="flavor">A mesmerist can create hypnotic bonds with his allies, implanting magical suggestions in their minds that you can later activate.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Half your mesmerist level (minimum 1) + your Charisma bonus (if any) tricks/day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">To implant a trick, you must either touch a willing creature or implant the trick in yourself. A creature can be the subject of only one <em>mesmerist trick</em> at a time. You can activate the trick as a <strong className="hl">free action</strong> when a triggering condition is met (as defined in the trick's description), even if it isn't your turn. The subject must be within medium range (100 feet + 10 feet per level) for you to trigger the trick. You monitor for the trick's triggering condition through a subtle telepathic connection, so you don't need line of sight to trigger it - but anything that blocks telepathic contact prevent you from triggering tricks. An implanted trick lasts until the next time you regain your spells. Each daily use of <em>mesmerist tricks</em> can be used to implant any trick you know.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You know one trick at 1st level, and learn another trick at 2nd level and every 2 levels thereafter (to a maximum of 11 tricks at 20th level). Here is the full list of <Link to="/ability/tricks">mesmerist tricks</Link>. Unless specifically noted in the trick's description, you can't choose a particular trick more than once.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You can have only one trick implanted at a given time, and implanting a new trick ends the previous one (you still lose the use of this ability you spent on the previous trick). Once triggered, a trick is no longer implanted, and can't be triggered again until you implant the trick again. The duration of the effect caused by triggering a trick is either instantaneous or appears in the trick's entry. The DC for any <em>mesmerist trick</em> or <em>masterful trick</em> that requires a saving throw or skill check is 10 + 1/2 your mesmerist level + your Charisma modifier</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/smoking-finger"><IonIcon icon="/icons/smoking-finger.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-mesmerist-painful-stare-su" data-hash-target><div className="box">Painful Stare (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Free Action</div></div><div className="abEnd"><div className="box">When an attack that deals damage hits the target of your <em>hypnotic stare,</em> you can cause the target to take an amount of additional damage equal to 1/2 your class level (minimum 1). You can use this ability even if it isn't your turn. If you use this ability to increase your own damage, the additional damage increases by 1d6 points for every 3 class levels you possess. This damage is <Link to="/misc/precision_damage">precision damage</Link> and is not multiplied on a critical hit. You can trigger this ability only once per round, but a single creature can take damage from multiple mesmerists' <em>painful stares</em> in a round.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-mesmerist-towering-ego-su" data-hash-target><div className="box">Towering Ego (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain a bonus equal to your Charisma bonus (minimum 0) on Will saving throws.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">If you are under any effect that would prevent you from providing the emotional component of psychic spells, you lose this bonus on saving throws.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-mesmerist-bold-stare-su" data-hash-target><div className="box">Bold Stare (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Your <em>hypnotic stare</em> imposes a further effect upon its target, chosen from this list of <Link to="/ability/stares">mesmerist stares</Link>. The choice can't be changed later.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">You choose a new <em>bold stare improvement.</em></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">You choose a new <em>bold stare improvement.</em></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">You choose a new <em>bold stare improvement.</em></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">You choose a new <em>bold stare improvement.</em></div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You can't choose the same <em>bold stare improvement</em> more than once unless otherwise noted. All of your <em>bold stare improvements</em> affect the target as long as it is affected by your <em>hypnotic stare.</em></div></div></div></div>
<aside><p>A mesmerist may take the <Link to="/feat/manifold_stare">Manifold Stare</Link> feat in place of a bold stare improvement. The mesmerist must meet the feat's prerequisites.</p>
</aside><div className="ability p"><div className="abIcon"><Link to="/icons/heart-plus"><IonIcon icon="/icons/heart-plus.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-mesmerist-touch-treatment-su" data-hash-target><div className="box">Touch Treatment (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">3 + Cha modifier times/day</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can help allies shake off harmful conditions - especially those that affect their minds - by channeling psychic energy through your healing hands. You must be able to touch your target. You can remove one condition on the <strong className="hl">minor conditions</strong> list from your target each time you use this ability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">You can use <em>touch treatment</em> on yourself.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">You can remove one condition from the <strong className="hl">minor</strong> or <strong className="hl">moderate condition</strong> lists.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">You can remove one condition from the <strong className="hl">minor</strong>, <strong className="hl">moderate</strong> or <strong className="hl">greater condition</strong> lists.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 14th Level</div></div><div className="abEnd"><div className="box">You can instead expend one use of touch treatment to replicate the effects of <Link to="/spell/break_enchantment">break enchantment</Link>. This targets only one creature you are touching and follows all other restrictions of touch treatment.</div></div></div></div>
<blockquote>
<p><strong className="hl">Minor Conditions:</strong> Fascinated, shaken.</p>
<p><strong className="hl">Moderate Conditions:</strong> Confused, dazed, frightened, sickened.</p>
<p><strong className="hl">Greater Conditions:</strong> Cowering, nauseated, panicked, stunned.</p>
</blockquote>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-mesmerist-manifold-tricks-su" data-hash-target><div className="box">Manifold Tricks (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You can have two <em>mesmerist tricks</em> implanted at a time.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">You can have three <em>mesmerist tricks</em> implanted at a time.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">You can have four <em>mesmerist tricks</em> implanted at a time.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 17th Level</div></div><div className="abEnd"><div className="box">You can have five <em>mesmerist tricks</em> implanted at a time.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Each creature can still be the subject of only one trick at a time. If you implant a new trick while you already have your maximum number of concurrent tricks implanted, you must choose one implanted trick to dismiss without triggering (the dismissed trick still expends a daily use of your tricks).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-mesmerist-mental-potency-ex" data-hash-target><div className="box">Mental Potency (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You can affect more powerful creatures or a greater number of creatures than normal with your mental effects. Both the HD limit and the total number of HD affected with each enchantment or illusion spell you cast increase by 1. For enchantment and illusion spells you cast that target a number of creatures greater than one, the number of creatures affected also increases by one (so a spell that targets one creature per level would be affected, but a spell that targets only one creature would not be). For example, a 5th-level mesmerist could affect 5 HD worth of creatures with <Link to="/spell/sleep">sleep</Link>, affect 2d4+1 HD worth of creatures with <Link to="/spell/hypnotism">hypnotism</Link>, and change the categories for <Link to="/spell/color_spray">color spray</Link> to "3 HD or fewer," "4 or 5 HD," and "6 or more HD."</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">The HD limits now increase by 2.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">The HD limits now increase by 3.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">The HD limits now increase by 4.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-mesmerist-glib-lie-su" data-hash-target><div className="box">Glib Lie (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 11th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You can deceive truth-detecting magic. A creature using this sort of magic against you must succeed at a caster level check against a DC of 15 + your class level to succeed (as if you were under the effect of a <Link to="/spell/glibness">glibness</Link> spell); failure means the magic doesn't detect your lies or force you to speak only the truth. This ability does not give you the <em>glibness</em> spell's bonus on Bluff checks.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-mesmerist-masterful-tricks-su" data-hash-target><div className="box">Masterful Tricks (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You can choose a <Link to="/ability/masterful_tricks">masterful trick</Link> in place of a <em>mesmerist trick.</em> Using a <em>masterful trick</em> consumes two uses of the <em>mesmerist trick</em> class feature instead of one.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-mesmerist-rule-minds-su" data-hash-target><div className="box">Rule Minds (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can permanently mentally enslave a creature. When you successfully affect the target of your <em>hypnotic stare</em> with an enchantment spell that requires a saving throw, you can force that creature to attempt a second Will saving throw with a DC equal to the spell's DC. The DC is reduced by 5 if the monster isn't a humanoid. If the creature fails, it becomes a permanent thrall to you (as <Link to="/spell/dominate_monster">dominate monster</Link>) until you die. If it succeeds, it can't be affected by <em>rule minds</em> again for 24 hours. You can have only one creature enthralled at a time. If you enthrall a new creature, the previous one is set free but is unaware that it was enthralled by you.</div></div></div></div>
<h3 id="class-mesmerist-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-mesmerist--table-2"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Deep Magics (Su)</td><td>At 20th level, the character's repertoire of spells deepens dramatically. She gains an additional spell known for each spell level she can cast. A character of any class with spells known can select this capstone.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>Piercing Gaze (Su)</td><td>At 20th level, the mesmerist's gaze carries with it something of the beyond. His stare penalty increases by 2.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-mesmerist-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Dwarf:</strong> Increase painful stare's damage by 1/4 point.<sup><InnerLink showBacklink="backlink-class-mesmerist-ref-A-1" id="class-mesmerist-ref-A-1" data-hash-target to="class-mesmerist-A">1</InnerLink></sup></p>
<p><strong>Elf:</strong> Gain a +1/2 bonus on Acrobatics checks to move through a threatened area and a +1/2 bonus on Bluff checks to feint.<sup><InnerLink showBacklink="backlink-class-mesmerist-ref-A-2" id="class-mesmerist-ref-A-2" data-hash-target to="class-mesmerist-A">1</InnerLink></sup></p>
<p><strong>Elf:</strong> Add a +1/4 bonus on grapple and trip combat maneuver checks.<sup><InnerLink showBacklink="backlink-class-mesmerist-ref-B-1" id="class-mesmerist-ref-B-1" data-hash-target to="class-mesmerist-B">2</InnerLink></sup></p>
<p><strong>Gathlain:</strong> Increase the number of mesmerist tricks the mesmerist can use per day by one-third.<sup><InnerLink showBacklink="backlink-class-mesmerist-ref-C-1" id="class-mesmerist-ref-C-1" data-hash-target to="class-mesmerist-C">3</InnerLink></sup></p>
<p><strong>Ghoran:</strong> Choose one mind-affecting mesmerist trick that the mesmerist knows. The mesmerist can affect intelligent plant creatures with that trick or spell as if they weren't immune to mind-affecting effects.<sup><InnerLink showBacklink="backlink-class-mesmerist-ref-D-1" id="class-mesmerist-ref-D-1" data-hash-target to="class-mesmerist-D">4</InnerLink></sup></p>
<p><strong>Gnome:</strong> Increase the number of mesmerist tricks the mesmerist can use per day by 1/3.<sup><InnerLink showBacklink="backlink-class-mesmerist-ref-E-1" id="class-mesmerist-ref-E-1" data-hash-target to="class-mesmerist-E">5</InnerLink></sup></p>
<p><strong>Half-elf:</strong> When casting mesmerist enchantment spells, add 1/2 to the effective caster level of the spell, but only to determine the spell's duration.<sup><InnerLink showBacklink="backlink-class-mesmerist-ref-E-2" id="class-mesmerist-ref-E-2" data-hash-target to="class-mesmerist-E">5</InnerLink></sup></p>
<p><strong>Halfling:</strong> Increase the number of mesmerist tricks the mesmerist can use per day by 1/3.<sup><InnerLink showBacklink="backlink-class-mesmerist-ref-E-3" id="class-mesmerist-ref-E-3" data-hash-target to="class-mesmerist-E">5</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Increase the mesmerist's bonus damage from painful stare by 1/2 point.<sup><InnerLink showBacklink="backlink-class-mesmerist-ref-E-4" id="class-mesmerist-ref-E-4" data-hash-target to="class-mesmerist-E">5</InnerLink></sup></p>
<p><strong>Human:</strong> Increase the mesmerist's towering ego bonus by 1/3 point (to a maximum increase of +2).<sup><InnerLink showBacklink="backlink-class-mesmerist-ref-E-5" id="class-mesmerist-ref-E-5" data-hash-target to="class-mesmerist-E">5</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-mesmerist-ref-F-1" id="class-mesmerist-ref-F-1" data-hash-target to="class-mesmerist-F">6</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Increase the number of mesmerist tricks the mesmerist can use per day by 1/3.<sup><InnerLink showBacklink="backlink-class-mesmerist-ref-F-2" id="class-mesmerist-ref-F-2" data-hash-target to="class-mesmerist-F">6</InnerLink></sup></p>
<p><strong>Merfolk:</strong> The mesmerist learns 1/4 of a new trick.<sup><InnerLink showBacklink="backlink-class-mesmerist-ref-G-1" id="class-mesmerist-ref-G-1" data-hash-target to="class-mesmerist-G">7</InnerLink></sup></p>
<p><strong>Nagaji:</strong> Add 1/5 to the Hit-Die limit and the total number of Hit Die affected with each enchantment or illusion spell the mesmerist casts. This bonus stacks with the mesmerist's mental potency class feature and is applicable under the same conditions as that ability.<sup><InnerLink showBacklink="backlink-class-mesmerist-ref-H-1" id="class-mesmerist-ref-H-1" data-hash-target to="class-mesmerist-H">8</InnerLink></sup></p>
<p><strong>Ratfolk:</strong> Gain a +1 bonus on concentration checks to maintain the mesmerist's hypnotic stare.<sup><InnerLink showBacklink="backlink-class-mesmerist-ref-I-1" id="class-mesmerist-ref-I-1" data-hash-target to="class-mesmerist-I">9</InnerLink></sup></p>
<p><strong>Tengu:</strong> Add 1/4 to the AC bonus provided by the meek facade mesmerist trick.<sup><InnerLink showBacklink="backlink-class-mesmerist-ref-J-1" id="class-mesmerist-ref-J-1" data-hash-target to="class-mesmerist-J">10</InnerLink></sup></p>
<p><strong>Wyvaran:</strong> Add 1/4 to the mesmerist's level for the purpose of determining the effect of mesmerist tricks.<sup><InnerLink showBacklink="backlink-class-mesmerist-ref-K-1" id="class-mesmerist-ref-K-1" data-hash-target to="class-mesmerist-K">11</InnerLink></sup></p>
</div>
<h3 id="class-mesmerist-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-mesmerist/aromaphile">Aromaphile</Link></p><p><strong>Modifies or Replaces:</strong> Hypnotic Stare; Painful Stare; Towering Ego; Bold Stare; Touch Treatment; Mental Potency</p><p>(Ghoran only) Rather than employ the baleful glares of the typical mesmerist, aromaphiles hypnotize others using an array of sickeningly sweet scents developed from their unique ghoran physiology.</p></div>
<div className="archetype"><p><Link to="/arc-mesmerist/autohypnotist">Autohypnotist</Link></p><p><strong>Modifies or Replaces:</strong> Hypnotic Stare; Mental Potency</p><p>An autohypnotist has incredibly powerful psychic abilities that he can't entirely control.</p></div>
<div className="archetype"><p><Link to="/arc-mesmerist/chart_caster">Chart Caster</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Mesmerist Tricks; Manifold Tricks; Touch Treatment</p><p>Lirgeni astrologists would divine their futures by consulting star charts, but some had no talent for astrology and simply faked their results. When prophecy died with Aroden, a few Lirgeni survivors continued with this "reliable" method.</p></div>
<div className="archetype"><p><Link to="/arc-mesmerist/cult_master">Cult Master</Link></p><p><strong>Modifies or Replaces:</strong> Consummate Liar; Painful Stare; Mesmerist Tricks; 3rd, 6th, and 14th-level Touch Treatments; 7th-level Bold Stare; Masterful Tricks; Rule Minds</p><p>The leaders of some cults are simply charlatans, bathing in the adulation of their followers. Others believe themselves to be truly in touch with an unknown power, bringing their unique messages to those willing to follow and obey them.</p></div>
<div className="archetype"><p><Link to="/arc-mesmerist/dreamstalker">Dreamstalker</Link></p><p><strong>Modifies or Replaces:</strong> Painful Stare; 1st-level Mesmerist Trick; Towering Ego; Touch Treatment; Manifold Tricks; Glib Lie</p><p>Many mesmerists concentrate their studies on conscious, rational thought, but dreamstalkers instead delve into the unleashed unconscious mind that wanders free in dreams.</p></div>
<div className="archetype"><p><Link to="/arc-mesmerist/enigma">Enigma</Link></p><p><strong>Modifies or Replaces:</strong> Hypnotic Stare; Consummate Liar; Painful Stare; Touch Treatment; Manifold Tricks; Glib Lie; Rule Minds</p><p>An enigma spends his life dedicated to developing psychic abilities that allow him to operate unnoticed.</p></div>
<div className="archetype"><p><Link to="/arc-mesmerist/eyebiter">Eyebiter</Link></p><p><strong>Modifies or Replaces:</strong> Consummate Liar; 1st-level Mesmerist Trick; Touch Treatment; Mental Potency; Glib Lie</p><p>An eyebiter's eyes become so infused with psychic might that they can leave the eyebiter's body and move about on their own.</p></div>
<div className="archetype"><p><Link to="/arc-mesmerist/fey_trickster">Fey Trickster</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Spellcasting; Towering Ego; Touch Treatment; Rule Minds</p><p>Most mesmerists draw psychic power from the Astral Plane, but a few gain their powers in an unusual way: from a brush with the fey.</p></div>
<div className="archetype"><p><Link to="/arc-mesmerist/gaslighter">Gaslighter</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Consummate Liar; Touch Treatment; Painful Stare</p><p>A gaslighter takes joy in others' suffering, delighting in driving them to madness.</p></div>
<div className="archetype"><p><Link to="/arc-mesmerist/hate_monger">Hate-Monger</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Consummate Liar; Touch Treatment; Mental Potency; Manifold Tricks; 7th-level Bold Stare; Glib Lie</p><p>Hate-mongers are xenophobic and judgmental rabblerousers who whip up mobs against enemies real or imagined.</p></div>
<div className="archetype"><p><Link to="/arc-mesmerist/material_manipulator">Material Manipulator</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting; Consummate Liar; 2nd-level Mesmerist Trick; Manifold Tricks; Touch Treatment; Rule Minds</p><p>Rather than waste time limiting himself to ruling minds, a material manipulator forces his whims upon reality and uses his magic to ensure that those around him comply with his demands.</p></div>
<div className="archetype"><p><Link to="/arc-mesmerist/mindwyrm_mesmer">Mindwyrm Mesmer</Link></p><p><strong>Modifies or Replaces:</strong> Consummate Liar; Painful Stare</p><p>Mindwyrm mesmers emulate the confidence, swagger, and fear inspired by dragons to bully and browbeat others into obedience.</p></div>
<div className="archetype"><p><Link to="/arc-mesmerist/projectionist">Projectionist</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting; 4th-level Mesmerist Trick; Mental Potency</p><p>Not content to simply command others from afar, a projectionist is able to use his mesmerizing powers to utterly dominate other creatures and objects by projecting his spirit from his body.</p></div>
<div className="archetype"><p><Link to="/arc-mesmerist/spirit_walker">Spirit Walker</Link></p><p><strong>Modifies or Replaces:</strong> Spells; Consummate Liar; Mental Potency; 3rd, 6th, 10th, and 14th-level Touch Treatments; Rule Minds</p><p>Some mesmerists specialize in dominating and controlling undead rather than the living.</p></div>
<div className="archetype"><p><Link to="/arc-mesmerist/thought_eater">Thought Eater</Link></p><p><strong>Modifies or Replaces:</strong> Consummate Liar; Towering Ego; Touch Treatment; Rule Minds</p><p>Mesmerists that learn to pierce deep into the minds of their victims are known as thought eaters, dangerous individuals capable of devouring thoughts and assuming the knowledge those notions represent for themselves.</p></div>
<div className="archetype"><p><Link to="/arc-mesmerist/toxitician">Toxitician</Link></p><p><strong>Modifies or Replaces:</strong> Consummate Liar; Hypnotic Stare; Painful Stare; Bold Stare; Touch Treatment; Glib Lie</p><p>Toxiticians forgo the mesmerist's stare, instead combining their psychic power with their alchemical knowledge to craft injections that torment their foes and bolster themselves and their allies.</p></div>
<div className="archetype"><p><Link to="/arc-mesmerist/umbral_mesmerist">Umbral Mesmerist</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting; 1st, 4th, 8th, 12th, 16th, and 20th-level Mesmerist Tricks; Towering Ego; Mental Potency</p><p>Trained in secret, umbral mesmerists are clandestine weapons who spend years learning how to shape terrifying creatures from the inky darkness in which they revel.</p></div>
<div className="archetype"><p><Link to="/arc-mesmerist/vexing_daredevil">Vexing Daredevil</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; 1st-level Mesmerist Trick; Touch Treatment; Bold Stare; Glib Lie</p><p>Vexing daredevils train their psychic powers for combat, specializing in momentarily blinding and confusing their foes with sudden feints and tricks.</p></div>
<div className="archetype"><p><Link to="/arc-mesmerist/vexing_trickster">Vexing Trickster</Link></p><p><strong>Modifies or Replaces:</strong> Consummate Liar, Touch Treatment</p><p>Vexing tricksters indulge in the various hijinks their power enables.</p></div>
<div className="archetype"><p><Link to="/arc-mesmerist/vizier">Vizier</Link></p><p><strong>Modifies or Replaces:</strong> Consummate Liar; 3rd-level Bold Stare; Towering Ego; Mental Potency</p><p>While many mesmerists focus on beguiling their foes or taking overt control of others with their mental powers, viziers carve out a subtler niche for themselves as advisors.</p></div>
<div className="archetype"><p><Link to="/arc-mesmerist/vox">Vox</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting; Towering Ego; 10th-level Mesmerist Trick; Touch Treatment; Hypnotic Stare</p><p>Most mesmerists practice their mental manipulation through their entrancing gaze, but others have learned to practice their skill through the lilt and intonation of their voice.</p></div>
<h3 id="class-mesmerist-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"mesmerist archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Bold Stare"},{"header":"3rd-level Bold Stare"},{"header":"7th-level Bold Stare"},{"header":"Class Skills"},{"header":"Consummate Liar"},{"header":"Glib Lie"},{"header":"Hypnotic Stare"},{"header":"Mental Potency"},{"header":"Mesmerist Tricks"},{"header":"1st-level Mesmerist Trick"},{"header":"2nd-level Mesmerist Trick"},{"header":"4th-level Mesmerist Trick"},{"header":"8th-level Mesmerist Trick"},{"header":"10th-level Mesmerist Trick"},{"header":"12th-level Mesmerist Trick"},{"header":"16th-level Mesmerist Trick"},{"header":"20th-level Mesmerist Trick"},{"header":"Manifold Tricks"},{"header":"Masterful Tricks"},{"header":"Painful Stare"},{"header":"Rule Minds"},{"header":"Spellcasting"},{"header":"Touch Treatment"},{"header":"3rd-level Touch Treatment"},{"header":"6th-level Touch Treatment"},{"header":"10th-level Touch Treatment"},{"header":"14th-level Touch Treatment"},{"header":"Towering Ego"}],"data":[["‹arc-mesmerist/Aromaphile›",null,"X",null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,"X"],["‹arc-mesmerist/Autohypnotist›",null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-mesmerist/Chart Caster›",null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null],["‹arc-mesmerist/Cult Master›",null,null,null,"X",null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,"X","X","X",null,null,"X","X",null,"X",null],["‹arc-mesmerist/Dreamstalker›",null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,"X",null,"X",null,null,"X",null,null,null,null,"X"],["‹arc-mesmerist/Enigma›",null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null,null,null,null,"X",null,"X","X",null,"X",null,null,null,null,null],["‹arc-mesmerist/Eyebiter›",null,null,null,null,null,"X","X",null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null],["‹arc-mesmerist/Fey Trickster›",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,"X"],["‹arc-mesmerist/Gaslighter›","X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null],["‹arc-mesmerist/Hate-Monger›","X",null,null,"X",null,"X","X",null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null],["‹arc-mesmerist/Material Manipulator›",null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,"X","X","X",null,null,null,null,null],["‹arc-mesmerist/Mindwyrm Mesmer›",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-mesmerist/Projectionist›",null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-mesmerist/Spirit Walker›",null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,"X","X","X","X",null],["‹arc-mesmerist/Thought Eater›",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,"X"],["‹arc-mesmerist/Toxitician›",null,"X",null,null,null,"X","X","X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null],["‹arc-mesmerist/Umbral Mesmerist›",null,null,null,null,null,null,null,null,"X",null,"X",null,"X","X",null,"X","X","X",null,null,null,null,"X",null,null,null,null,null,"X"],["‹arc-mesmerist/Vexing Daredevil›",null,"X",null,null,"X",null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null],["‹arc-mesmerist/Vexing Trickster›",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null],["‹arc-mesmerist/Vizier›",null,null,"X",null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X"],["‹arc-mesmerist/Vox›",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X","X",null,null,null,null,"X"]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-mesmerist-label">Footnotes</h3>
<ol>
<li id="class-mesmerist-A">
<p><Link to="/source/occult_adventures">Occult Adventures pg. 84</Link> <InnerLink id="backlink-class-mesmerist-ref-A-1" data-hash-target to="class-mesmerist-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink> <InnerLink id="backlink-class-mesmerist-ref-A-2" data-hash-target to="class-mesmerist-ref-A-2" aria-label="Back to reference A-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-mesmerist-B">
<p><Link to="/source/horror_adventures">Horror Adventures pg. 39</Link> <InnerLink id="backlink-class-mesmerist-ref-B-1" data-hash-target to="class-mesmerist-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-mesmerist-C">
<p><Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 9</Link> <InnerLink id="backlink-class-mesmerist-ref-C-1" data-hash-target to="class-mesmerist-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-mesmerist-D">
<p><Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 17</Link> <InnerLink id="backlink-class-mesmerist-ref-D-1" data-hash-target to="class-mesmerist-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-mesmerist-E">
<p>Occult Adventures pg. 85 <InnerLink id="backlink-class-mesmerist-ref-E-1" data-hash-target to="class-mesmerist-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink> <InnerLink id="backlink-class-mesmerist-ref-E-2" data-hash-target to="class-mesmerist-ref-E-2" aria-label="Back to reference E-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-class-mesmerist-ref-E-3" data-hash-target to="class-mesmerist-ref-E-3" aria-label="Back to reference E-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-class-mesmerist-ref-E-4" data-hash-target to="class-mesmerist-ref-E-4" aria-label="Back to reference E-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-class-mesmerist-ref-E-5" data-hash-target to="class-mesmerist-ref-E-5" aria-label="Back to reference E-5">↩<sup>5</sup></InnerLink></p>
</li>
<li id="class-mesmerist-F">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-mesmerist-ref-F-1" data-hash-target to="class-mesmerist-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink> <InnerLink id="backlink-class-mesmerist-ref-F-2" data-hash-target to="class-mesmerist-ref-F-2" aria-label="Back to reference F-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-mesmerist-G">
<p><Link to="/source/blood_of_the_sea">Blood of the Sea pg. 13</Link> <InnerLink id="backlink-class-mesmerist-ref-G-1" data-hash-target to="class-mesmerist-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-mesmerist-H">
<p>Blood of the Beast pg. 16 <InnerLink id="backlink-class-mesmerist-ref-H-1" data-hash-target to="class-mesmerist-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-mesmerist-I">
<p>Blood of the Beast pg. 20 <InnerLink id="backlink-class-mesmerist-ref-I-1" data-hash-target to="class-mesmerist-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-mesmerist-J">
<p>Blood of the Beast pg. 24 <InnerLink id="backlink-class-mesmerist-ref-J-1" data-hash-target to="class-mesmerist-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
<li id="class-mesmerist-K">
<p><Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 18</Link> <InnerLink id="backlink-class-mesmerist-ref-K-1" data-hash-target to="class-mesmerist-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _rogue = {hasJL:true,title: "Rogue", jsx: <><div className="jumpList" id="class-rogue-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-rogue-sneak-attack">Sneak Attack</InnerLink></li><li><InnerLink toTop to="class-rogue-trapfinding">Trapfinding</InnerLink></li><li><InnerLink toTop to="class-rogue-evasion-ex">Evasion</InnerLink></li><li><InnerLink toTop to="class-rogue-rogue-talents">Rogue Talents</InnerLink></li><li><InnerLink toTop to="class-rogue-trap-sense-ex">Trap Sense</InnerLink></li><li><InnerLink toTop to="class-rogue-uncanny-dodge-ex">Uncanny Dodge</InnerLink></li><li><InnerLink toTop to="class-rogue-advanced-talents">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-rogue-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-rogue-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-rogue-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-rogue-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-rogue-rogue">Rogue</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 67</Link></p>
<p>Life is an endless adventure for those who live by their wits. Ever just one step ahead of danger, rogues bank on their cunning, skill, and charm to bend fate to their favor. Never knowing what to expect, they prepare for everything, becoming masters of a wide variety of skills, training themselves to be adept manipulators, agile acrobats, shadowy stalkers, or masters of any of dozens of other professions or talents. Thieves and gamblers, fast talkers and diplomats, bandits and bounty hunters, and explorers and investigators all might be considered rogues, as well as countless other professions that rely upon wits, prowess, or luck. Although many rogues favor cities and the innumerable opportunities of civilization, some embrace lives on the road, journeying far, meeting exotic people, and facing fantastic danger in pursuit of equally fantastic riches. In the end, any who desire to shape their fates and live life on their own terms might come to be called rogues.</p>
<p><strong>Role:</strong> Rogues excel at moving about unseen and catching foes unaware, and tend to avoid head-to-head combat. Their varied skills and abilities allow them to be highly versatile, with great variations in expertise existing between different rogues. Most, however, excel in overcoming hindrances of all types, from unlocking doors and disarming traps to outwitting magical hazards and conning dull-witted opponents.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>4d6 &times; 10 gp (average 140 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>8 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/disable_device">Disable Device</Link>, <Link to="/skill/escape_artist">Escape Artist</Link>, <Link to="/skill/sleight_of_hand">Sleight of Hand</Link>, <Link to="/skill/stealth">Stealth</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/appraise">Appraise</Link>, <Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, <Link to="/skill/knowledge_local">Knowledge (local)</Link>, <Link to="/skill/linguistics">Linguistics</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/disguise">Disguise</Link>, <Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/perform_any">Perform (any)</Link>, <Link to="/skill/use_magic_device">Use Magic Device</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-rogue-class-features">Class Features</h3>
<ScrollContainer id="class-rogue--table-0"><table>
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
<td>Sneak attack +1d6, trapfinding</td>
</tr>
<tr>
<td>2nd</td>
<td>+1</td>
<td>+0</td>
<td>+3</td>
<td>+0</td>
<td>Evasion, rogue talent</td>
</tr>
<tr>
<td>3rd</td>
<td>+2</td>
<td>+1</td>
<td>+3</td>
<td>+1</td>
<td>Sneak attack +2d6, trap sense +1</td>
</tr>
<tr>
<td>4th</td>
<td>+3</td>
<td>+1</td>
<td>+4</td>
<td>+1</td>
<td>Rogue talent, uncanny dodge</td>
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
<td>Rogue talent, trap sense +2</td>
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
<td>Improved uncanny dodge, rogue talent</td>
</tr>
<tr>
<td>9th</td>
<td>+6/+1</td>
<td>+3</td>
<td>+6</td>
<td>+3</td>
<td>Sneak attack +5d6, trap sense +3</td>
</tr>
<tr>
<td>10th</td>
<td>+7/+2</td>
<td>+3</td>
<td>+7</td>
<td>+3</td>
<td>Advanced talents, rogue talent</td>
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
<td>Rogue talent, trap sense +4</td>
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
<td>Rogue talent</td>
</tr>
<tr>
<td>15th</td>
<td>+11/+6/+1</td>
<td>+5</td>
<td>+9</td>
<td>+5</td>
<td>Sneak attack +8d6, trap sense +5</td>
</tr>
<tr>
<td>16th</td>
<td>+12/+7/+2</td>
<td>+5</td>
<td>+10</td>
<td>+5</td>
<td>Rogue talent</td>
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
<td>Rogue talent, trap sense +6</td>
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
<td>Master strike, rogue talent</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={4}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td><Link to="/eq-weapon/hand_crossbow">hand crossbow</Link></td><td><Link to="/eq-weapon/rapier">rapier</Link></td></tr><tr><td><Link to="/eq-weapon/sap">sap</Link></td><td><Link to="/eq-weapon/shortbow">shortbow</Link></td></tr><tr><td colSpan={2}><Link to="/eq-weapon/short_sword">short sword</Link></td></tr><tr><th>Light Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Medium Armor?</th><td colSpan={2}>No</td></tr><tr><th>Heavy Armor?</th><td colSpan={2}>No</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">No</td></tr></tbody></table>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-rogue-sneak-attack" data-hash-target><div className="box">Sneak Attack</div><div className="flavor">If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Your attack deals extra damage any time your target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when you <Link to="/rule/flank">flank</Link> your target. This extra damage is a number of d6s equal to 1 + <Link to="/misc/half">half</Link> your rogue level. (1d6 at first, 2d6 at 3rd, 3d6 at 5th, and so on.) You must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. You cannot sneak attack while striking a creature with <Link to="/rule/concealment">concealment</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">If you score a critical hit with a sneak attack, this extra damage is not multiplied. Ranged attacks can count as sneak attacks only if the target is within 30 feet. With a weapon that deals nonlethal damage (like a sap, whip, or an unarmed strike), you can make a sneak attack that deals nonlethal damage instead of lethal damage. You cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual -4 penalty.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-rogue-trapfinding" data-hash-target><div className="box">Trapfinding</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You add 1/2 your level to Perception skill checks made to locate traps and to Disable Device skill checks (minimum +1). You can use Disable Device to disarm magic traps.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-rogue-evasion-ex" data-hash-target><div className="box">Evasion (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">If you make a successful Reflex saving throw against an attack that normally deals half damage on a successful save, you instead take no damage. Evasion can be used only if the you are not <Link to="/misc/helpless">helpless</Link> and are wearing light armor or no armor.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-rogue-rogue-talents" data-hash-target><div className="box">Rogue Talents</div><div className="flavor">As a rogue gains experience, she learns a number of talents that aid her and confound her foes.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain one <Link to="/ability/rogue_talent">rogue talent</Link>. You gain an additional rogue talent at every even-numbered level (4th, 6th, 8th, and so on).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You cannot select an individual talent more than once. Some talents add effects to your <em>sneak attack.</em> Only one of these talents can be applied to an individual <em>attack</em> and the decision must be made before the attack roll is made.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-rogue-trap-sense-ex" data-hash-target><div className="box">Trap Sense (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain a bonus on Reflex saves made to avoid traps and a dodge bonus to AC against attacks made by traps. Both of these bonuses are equal to one-third of your rogue level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Trap sense bonuses gained from multiple classes stack.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-rogue-uncanny-dodge-ex" data-hash-target><div className="box">Uncanny Dodge (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You cannot be caught <Link to="/rule/flat_footed">flat-footed</Link>, nor do you lose your Dex bonus to AC if the attacker is invisible. You still lose your Dexterity bonus to AC if immobilized, or if an opponent successfully uses the <Link to="/rule/feint">feint</Link> action against you.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">If you already have uncanny dodge from a different class, you automatically gain improved uncanny dodge instead.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-rogue-improved-uncanny-dodge-ex" data-hash-target><div className="box">Improved Uncanny Dodge (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You can no longer be <Link to="/rule/flanked">flanked</Link> This defense denies another rogue the ability to <em>sneak attack</em> you by flanking you, unless the attacker has at least four more rogue levels than you do.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">If you already have uncanny dodge from another class, the levels from the classes that grant uncanny dodge stack to determine the minimum rogue level required to flank you.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-rogue-advanced-talents" data-hash-target><div className="box">Advanced Talents</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 10th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can choose an <Link to="/ability/advanced_rogue_talent">advanced rogue talent</Link> in place of a <em>rogue talent.</em></div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-rogue-master-strike-ex" data-hash-target><div className="box">Master Strike (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Each time you deal <em>sneak attack</em> damage, you can choose one of the following three effects: the target can be put to sleep for 1d4 hours, <Link to="/rule/paralyzed">paralyzed</Link> for 2d6 rounds, or slain. Regardless of the effect chosen, the target receives a Fortitude save to negate the additional effect. The DC of this save is equal to 10 + 1/2 your rogue level + your Intelligence modifier.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Once a creature has been the target of a master strike, regardless of whether or not the save is made, that creature is immune to that rogue's master strike for 24 hours. Creatures that are immune to <em>sneak attack</em> damage are also immune to this ability.</div></div></div></div>
<h3 id="class-rogue-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-rogue--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Masterful Talent (Ex)</td><td>At 20th level, the rogue has been a thief, an actor, a merchant, a scout, a confessor, a friend, an assassin, and a dozen more things besides. The rogue gains a +4 bonus on all of her skills.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>The Right Spot (Ex)</td><td>At 20th level, the character can hit an opponent's weak spot effortlessly. Once per round, the character can apply her sneak attack damage to an attack, even if the target is not flanked or denied its Dexterity bonus to AC. This does not allow the character to sneak attack targets that are immune to sneak attacks (such as oozes). This capstone is available for any class with the sneak attack class feature.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-rogue-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Aphorite:</strong> Add a +1 bonus on Disable Device and Use Magic Device checks related to glyphs, scrolls, symbols, and other magical writings.<sup><InnerLink showBacklink="backlink-class-rogue-ref-A-1" id="class-rogue-ref-A-1" data-hash-target to="class-rogue-A">1</InnerLink></sup></p>
<p><strong>Catfolk:</strong> Add a +1/2 bonus on Bluff checks to feint and Sleight of Hands checks to pickpocket.<sup><InnerLink showBacklink="backlink-class-rogue-ref-B-1" id="class-rogue-ref-B-1" data-hash-target to="class-rogue-B">2</InnerLink></sup></p>
<p><strong>Changeling:</strong> The rogue gains 1/6 of a new rogue talent.<sup><InnerLink showBacklink="backlink-class-rogue-ref-C-1" id="class-rogue-ref-C-1" data-hash-target to="class-rogue-C">3</InnerLink></sup></p>
<p><strong>Dhampir:</strong> Add a +1/2 bonus on Stealth checks and Perception checks made in <Link to="/rule/dim_light">dim light</Link> or darkness.<sup><InnerLink showBacklink="backlink-class-rogue-ref-D-1" id="class-rogue-ref-D-1" data-hash-target to="class-rogue-D">4</InnerLink></sup></p>
<p><strong>Drow:</strong> Add a +1/2 bonus on Bluff checks to feint and pass secret messages.<sup><InnerLink showBacklink="backlink-class-rogue-ref-E-1" id="class-rogue-ref-E-1" data-hash-target to="class-rogue-E">5</InnerLink></sup></p>
<p><strong>Duskwalker:</strong> The rogue gains 1/6 of a new rogue talent.<sup><InnerLink showBacklink="backlink-class-rogue-ref-F-1" id="class-rogue-ref-F-1" data-hash-target to="class-rogue-F">6</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Add a +1/2 bonus on Disable Device checks regarding stone traps and a +1/2 bonus to trap sense regarding stone traps.<sup><InnerLink showBacklink="backlink-class-rogue-ref-G-1" id="class-rogue-ref-G-1" data-hash-target to="class-rogue-G">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-rogue-ref-H-1" id="class-rogue-ref-H-1" data-hash-target to="class-rogue-H">8</InnerLink></sup></p>
<p><strong>Elf:</strong> Add +1 to the number of times per day the rogue can cast a cantrip or 1st-level spell gained from the minor magic or major magic talent. The number of times this bonus is selected for the major magic talent cannot exceed the number of times it is selected for the minor magic talent. The rogue must possess the associated rogue talent to select these options.<sup><InnerLink showBacklink="backlink-class-rogue-ref-I-1" id="class-rogue-ref-I-1" data-hash-target to="class-rogue-I">9</InnerLink></sup></p>
<p><strong>Fetchling:</strong> Add a +1/2 bonus on Stealth and Sleight of Hand checks made while in <Link to="/rule/dim_light">dim light</Link> or darkness.<sup><InnerLink showBacklink="backlink-class-rogue-ref-J-1" id="class-rogue-ref-J-1" data-hash-target to="class-rogue-J">10</InnerLink></sup></p>
<p><strong>Ganzi:</strong> Add a +1/2 bonus on Stealth checks while on a plane other than the Material Plane.<sup><InnerLink showBacklink="backlink-class-rogue-ref-K-1" id="class-rogue-ref-K-1" data-hash-target to="class-rogue-K">11</InnerLink></sup></p>
<p><strong>Gathlain:</strong> Add a +1/2 bonus to Bluff checks to pass secret messages or create a distraction to hide and on Sleight of Hands checks to pickpocket.<sup><InnerLink showBacklink="backlink-class-rogue-ref-L-1" id="class-rogue-ref-L-1" data-hash-target to="class-rogue-L">12</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-rogue-ref-M-1" id="class-rogue-ref-M-1" data-hash-target to="class-rogue-M">13</InnerLink></sup></p>
<p><strong>Ghoran:</strong> Choose one type of ranger <Link to="/ability/favored_enemy">favored enemy</Link> (or one subtype in case of either humanoid or outsider). The rogue adds 1/2 to her sneak attack damage when using sneak attack against creatures of the chosen type (maximum +3).<sup><InnerLink showBacklink="backlink-class-rogue-ref-N-1" id="class-rogue-ref-N-1" data-hash-target to="class-rogue-N">14</InnerLink></sup></p>
<p><strong>Gillman:</strong> The rogue gains 1/6 of a new rogue talent.<sup><InnerLink showBacklink="backlink-class-rogue-ref-O-1" id="class-rogue-ref-O-1" data-hash-target to="class-rogue-O">15</InnerLink></sup></p>
<p><strong>Gnome:</strong> The rogue gains a +1/2 bonus on Disable Device and Use Magic Device checks related to glyphs, symbols, scrolls, and other magical writings.<sup><InnerLink showBacklink="backlink-class-rogue-ref-P-1" id="class-rogue-ref-P-1" data-hash-target to="class-rogue-P">16</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-rogue-ref-Q-1" id="class-rogue-ref-Q-1" data-hash-target to="class-rogue-Q">17</InnerLink></sup></p>
<p><strong>Gnome:</strong> Add 1/4 to the Perception and Disable Device DCs of traps the rogue creates.<sup><InnerLink showBacklink="backlink-class-rogue-ref-R-1" id="class-rogue-ref-R-1" data-hash-target to="class-rogue-R">18</InnerLink></sup></p>
<p><strong>Goblin:</strong> Add a +1 bonus on the rogue's sneak attack damage rolls during the surprise round or before the target has acted in combat.<sup><InnerLink showBacklink="backlink-class-rogue-ref-S-1" id="class-rogue-ref-S-1" data-hash-target to="class-rogue-S">19</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-rogue-ref-T-1" id="class-rogue-ref-T-1" data-hash-target to="class-rogue-T">20</InnerLink></sup></p>
<p><strong>Grippli:</strong> Add a +1/2 bonus on Perception checks while in a forest or swamp.<sup><InnerLink showBacklink="backlink-class-rogue-ref-U-1" id="class-rogue-ref-U-1" data-hash-target to="class-rogue-U">21</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Add a +1/2 bonus on Bluff checks to feint and Diplomacy checks to gather information.<sup><InnerLink showBacklink="backlink-class-rogue-ref-V-1" id="class-rogue-ref-V-1" data-hash-target to="class-rogue-V">22</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-rogue-ref-W-1" id="class-rogue-ref-W-1" data-hash-target to="class-rogue-W">23</InnerLink></sup></p>
<p><strong>Halfling:</strong> Choose a weapon from the following list: sling, dagger, or any weapon with "halfling" in its name. Add a +1/2 bonus on critical hit confirmation rolls with that weapon (maximum bonus +4). This bonus does not stack with <Link to="/feat/critical_focus">Critical Focus</Link>.<sup><InnerLink showBacklink="backlink-class-rogue-ref-X-1" id="class-rogue-ref-X-1" data-hash-target to="class-rogue-X">24</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-rogue-ref-Y-1" id="class-rogue-ref-Y-1" data-hash-target to="class-rogue-Y">25</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Add +1/3 on critical hit confirmation rolls made while using sneak attack (maximum bonus of +5). This bonus does not stack with Critical Focus.<sup><InnerLink showBacklink="backlink-class-rogue-ref-Z-1" id="class-rogue-ref-Z-1" data-hash-target to="class-rogue-Z">26</InnerLink></sup></p>
<p><strong>Hobgoblin:</strong> Reduce the penalty for not being proficient with one weapon by 1. When the nonproficiency penalty for a weapon becomes 0 because of this ability, the rogue is treated as having the appropriate Martial or Exotic Weapon Proficiency feat for that weapon.<sup><InnerLink showBacklink="backlink-class-rogue-ref-1-1" id="class-rogue-ref-1-1" data-hash-target to="class-rogue-1">27</InnerLink></sup></p>
<p><strong>Human:</strong> The rogue gains +1/6 of a new rogue talent.<sup><InnerLink showBacklink="backlink-class-rogue-ref-2-1" id="class-rogue-ref-2-1" data-hash-target to="class-rogue-2">28</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-rogue-ref-3-1" id="class-rogue-ref-3-1" data-hash-target to="class-rogue-3">29</InnerLink></sup></p>
<p><strong>Ifrit:</strong> Add a +1/2 bonus on Acrobatics checks to jump and a +1/2 bonus on Intimidate checks to demoralize enemies.<sup><InnerLink showBacklink="backlink-class-rogue-ref-4-1" id="class-rogue-ref-4-1" data-hash-target to="class-rogue-4">30</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-rogue-ref-5-1" id="class-rogue-ref-5-1" data-hash-target to="class-rogue-5">31</InnerLink></sup></p>
<p><strong>Kitsune:</strong> The rogue gains 1/6 of a new rogue talent.<sup><InnerLink showBacklink="backlink-class-rogue-ref-6-1" id="class-rogue-ref-6-1" data-hash-target to="class-rogue-6">32</InnerLink></sup></p>
<p><strong>Kobold:</strong> Add +1/2 to the rogue's trap sense bonus to AC.<sup><InnerLink showBacklink="backlink-class-rogue-ref-7-1" id="class-rogue-ref-7-1" data-hash-target to="class-rogue-7">33</InnerLink></sup></p>
<p><strong>Locathah:</strong> Choose a piercing melee weapon. Add a +1/2 bonus on critical hit confirmation rolls with that weapon (maximum bonus +4). This bonus does not stack with <Link to="/feat/critical_focus">Critical Focus</Link>.<sup><InnerLink showBacklink="backlink-class-rogue-ref-8-1" id="class-rogue-ref-8-1" data-hash-target to="class-rogue-8">34</InnerLink></sup></p>
<p><strong>Ratfolk:</strong> Add a +1/2 bonus on Escape Artist checks.<sup><InnerLink showBacklink="backlink-class-rogue-ref-9-1" id="class-rogue-ref-9-1" data-hash-target to="class-rogue-9">35</InnerLink></sup></p>
<p><strong>Samsaran:</strong> The rogue gains 1/6 of a new rogue talent.<sup><InnerLink showBacklink="backlink-class-rogue-ref-0-1" id="class-rogue-ref-0-1" data-hash-target to="class-rogue-0">36</InnerLink></sup></p>
<p><strong>Sylph:</strong> Add a +1/2 bonus on Acrobatics checks to jump and a +1/2 bonus on Sense Motive checks.<sup><InnerLink showBacklink="backlink-class-rogue-ref-!-1" id="class-rogue-ref-!-1" data-hash-target to="class-rogue-!">37</InnerLink></sup></p>
<p><strong>Tengu:</strong> Choose a weapon from those listed under the tengu's swordtrained ability. Add a +1/2 bonus on critical hit confirmation rolls with that weapon (maximum bonus +4). This bonus does not stack with Critical Focus.<sup><InnerLink showBacklink="backlink-class-rogue-ref-%40-1" id="class-rogue-ref-%40-1" data-hash-target to="class-rogue-%40">38</InnerLink></sup></p>
<p><strong>Tiefling:</strong> Add +1/2 to sneak attack damage dealt to creatures with the outsider type.<sup><InnerLink showBacklink="backlink-class-rogue-ref-%26-1" id="class-rogue-ref-%26-1" data-hash-target to="class-rogue-%26">39</InnerLink></sup></p>
<p><strong>Vanara:</strong> The rogue gains 1/6 of a new rogue talent.<sup><InnerLink showBacklink="backlink-class-rogue-ref-%25-1" id="class-rogue-ref-%25-1" data-hash-target to="class-rogue-%25">40</InnerLink></sup></p>
<p><strong>Vine leshy:</strong> Add a +1/2 bonus to Climb checks and on Stealth checks in forests.<sup><InnerLink showBacklink="backlink-class-rogue-ref-%23-1" id="class-rogue-ref-%23-1" data-hash-target to="class-rogue-%23">41</InnerLink></sup></p>
<p><strong>Vishkanya:</strong> Add +1 to the rogue's CMD when resisting a grapple or reposition attempt.<sup><InnerLink showBacklink="backlink-class-rogue-ref-%3B-1" id="class-rogue-ref-%3B-1" data-hash-target to="class-rogue-%3B">42</InnerLink></sup></p>
<p><strong>Wayang:</strong> The rogue gains 1/6 of a new rogue talent.<sup><InnerLink showBacklink="backlink-class-rogue-ref-%3F-1" id="class-rogue-ref-%3F-1" data-hash-target to="class-rogue-%3F">43</InnerLink></sup></p>
<p><strong>Wyrwood:</strong> The rogue gains 1/6 of a rogue talent.<sup><InnerLink showBacklink="backlink-class-rogue-ref-_-1" id="class-rogue-ref-_-1" data-hash-target to="class-rogue-_">44</InnerLink></sup></p>
<p><strong>Wyvaran:</strong> Add a +1/2 bonus to Stealth and Sleight of Hand checks to steal or hide objects.<sup><InnerLink showBacklink="backlink-class-rogue-ref-%3D-1" id="class-rogue-ref-%3D-1" data-hash-target to="class-rogue-%3D">45</InnerLink></sup></p>
</div>
<h3 id="class-rogue-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-rogue/acrobat">Acrobat</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Trap Sense</p><p>Whether they are daring thieves, infiltrating assassins, or intrepid spies, proper training in acrobatics is a valuable boon for rogues.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/bandit">Bandit</Link></p><p><strong>Modifies or Replaces:</strong> Uncanny Dodge</p><p>Bandits tend to have a variety of skills; sometimes these skills are similar to a ranger's, but a bandit's tactics always deal with surprise followed by intimidation, with the clear threat of naked force if intimidation does not do the trick.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/bekyar_kidnapper">Bekyar Kidnapper</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Trap Sense</p><p>A Bekyar kidnapper is not only adept at hiding herself in thick jungles and quickly subduing her prey, but also at spreading rumors of hidden ruins, buried treasure, and other such valuables that might lure an unwary foreigner into her traps.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/bellflower_irrigator">Bellflower Irrigator</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; 4th-level Rogue Talent; Uncanny Dodge; Improved Uncanny Dodge</p><p>Rather than focusing on saving slaves, Bellflower irrigators seek to defeat slavery by aiming to eliminate the source.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/burglar">Burglar</Link></p><p><strong>Modifies or Replaces:</strong> Uncanny Dodge; Improved Uncanny Dodge</p><p>Adept at infiltration, trap removal, and lock picking, burglars prey on the homes of the wealthy and forgotten tombs alike.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/carnivalist">Carnivalist</Link></p><p><strong>Modifies or Replaces:</strong> 2nd, 4th, 6th-level Rogue Talents; Sneak Attack; Trap Sense</p><p>Carnivalists train their miniature minions to perform acts of larceny and often hide their true talents behind theatrical sideshows.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/cat_burglar">Cat Burglar</Link></p><p><strong>Modifies or Replaces:</strong> Uncanny Dodge; Improved Uncanny Dodge</p><p>(Catfolk Only) Cat burglars are masters of breaking and entering, using their feline grace to make it seem as though no crime was ever committed in the first place.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/chameleon">Chameleon</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Trap Sense</p><p>An absolute master of disguise, a chameleon effortlessly blends into any environment.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/charlatan">Charlatan</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Trap Sense</p><p>A charlatan is a master of lies and deception.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/consigliere">Consigliere</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Trapfinding; Evasion; Uncanny Dodge; Improved Uncanny Dodge; Trap Sense; 10th-level Rogue Talent</p><p>Consiglieres act as trusted mediators and administrators for crime families and various criminal organizations, and many serve as the right hand to the leaders of such groups.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/construct_saboteur">Construct Saboteur</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Trapfinding; 2nd-level Rogue Talent; Trap Sense</p><p>The construct saboteur harnesses arcane energy to combat the golems and eldritch guardians that prowl the depths of ancient ruins and forgotten tombs.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/counterfeit_mage">Counterfeit Mage</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; 4th-level Rogue Talent</p><p>Charlatans and stage magicians use sleight of hand to fake magic. A counterfeit mage goes a step further, parroting the motions and activation phrases used by arcane casters to activate wands or other magical accoutrements.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/cutpurse">Cutpurse</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Trap Sense</p><p>Cutpurses are often trained by guilds to collect the guild's tax from local businesses on a daily basis, whether through intimidation or pickpocketing. Some find themselves taking up the mantle of adventurer, and their talents are generally appreciated in this role, but the cutpurse is still the first person her companions look to when an item goes missing.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/dark_lurker">Dark Lurker</Link></p><p><strong>Modifies or Replaces:</strong> Evasion; 2nd, 8th, 14th, and 20th-level Rogue Talents</p><p>Dark lurkers use darkness as an ally.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/deadly_courtesan">Deadly Courtesan</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; 2nd-level Rogue Talent; Trap Sense; Improved Uncanny Dodge</p><p>(Vishkanya Only) Skilled at manipulation and diversion, the deadly courtesan builds up those around her and periodically takes them down.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/desert_raider">Desert Raider</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Trapfinding; Trap Sense</p><p>Desert raider learn the secrets of the deserts and become inured to their dangers.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/discretion_specialist">Discretion Specialist</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Trap Sense/Danger Sense; 4th, 12th-level Rogue Talents; Uncanny Dodge; Improved Uncanny Dodge</p><p>Discretion specialists deal with bodies, inconvenient witnesses, and other loose ends.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/dreamthief">Dreamthief</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Sneak Attack; Master Strike; Trap Sense; Uncanny Dodge; Improved Uncanny Dodge; 12th-level Rogue Talent</p><p>Each dreamthief bears a focused fragment of emotion, known as a dreamshard, within her soul. This metaphysical crystal grants a dreamthief supernatural powers, which she supplements with skill and grace.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/driver">Driver</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Trap Sense</p><p>A driver makes her living driving vehicles in the service of those who can pay for her considerable talents.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/earthshadow">Earthshadow</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Evasion; 4th, 8th, 12th, 16th-level Rogue Talents</p><p>In the centuries since the Quest for the Sky, the mystic lore the dwarves call earthcraft has been passed down through the generations, and its practitioners are called earthshadows.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/eldritch_raider">Eldritch Raider</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Skill Ranks; 2nd-level Rogue Talent; Trap Sense</p><p>(Gillman Only) An eldritch raider is a rogue who seeks to unravel the mysteries of the destruction of the gillmen's homeland.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/eldritch_scoundrel">Eldritch Scoundrel</Link></p><p><strong>Modifies or Replaces:</strong> Armor Proficiency; Skills; Trap Sense; Sneak Attack; Rogue Talents; Uncanny Dodge; Improved Uncanny Dodge</p><p>Students of arcane magic, legerdemain, and stealth, eldritch scoundrels are a rare breed of adventurer most commonly found seeking lost and valuable arcane writings in the ruins of fallen empires, such as Thassilon or the Jistka Imperium.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/escapologist">Escapologist</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Uncanny Dodge; Improved Uncanny Dodge</p><p>The escapologist excels at escaping any confinement, whether physical, magical, or mental. Few restraints can hold an escapologist for long.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/false_medium">False Medium</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; 2nd-level Rogue Talent; Trap Sense</p><p>The false medium is a master of pretending to have occult powers in order to manipulate the emotions and atmosphere of the people and places around him, often reaping a healthy reward from the bereaved, who find solace in his comforting lies.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/fey_prankster">Fey Prankster</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; 2nd, 6th, 8th, and 12th-level Rogue Talents; Uncanny Dodge; Improved Uncanny Dodge</p><p>(Gathlain) Fey pranksters specialize in tricking others to teach a lesson or for their own entertainment.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/filcher">Filcher</Link></p><p><strong>Modifies or Replaces:</strong> Evasion; Trap Sense 1-6; Uncanny Dodge; Improved Uncanny Dodge</p><p>(Halfling Only) Whether cutting purses in the midst of combat or replacing prized items with fakes under the noses of their owners, the filcher is the master of the quick and quiet steal.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/galtan_agitator">Galtan Agitator</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Trap Sense; 4th, 8th, 12th-level Rogue Talent</p><p>Galtan agitators fight mightily to cast down the enemies of their ideals within the shambles of the tumultuous nation of Galt.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/guerrilla">Guerrilla</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Evasion; Trap Sense; Uncanny Dodge; Improved Uncanny Dodge</p><p>Guerrillas fight against oppressive leadership and governments including Chelish colonization in Sargava and the power structures in Cheliax proper, Nidal, and Razmiran</p></div>
<div className="archetype"><p><Link to="/arc-rogue/guild_agent">Guild Agent</Link></p><p><strong>Modifies or Replaces:</strong> Evasion; Uncanny Dodge; Improved Evasion; Master Strike</p><p>Guild agents are members of a thieves' guild or other shadowy organization. What they lose in independence, they more than make up for in benefits gained due to their association's infrastructure.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/gun_smuggler">Gun Smuggler</Link></p><p><strong>Modifies or Replaces:</strong> Weapon Proficiencies; Trapfinding; Sneak Attack; Trap Finding; 6th-level Rogue Talent; Uncanny Dodge; Improved Uncanny Dodge</p><p>Gun smugglers are adept at procuring firearms and concealing their secret weapons</p></div>
<div className="archetype"><p><Link to="/arc-rogue/heister">Heister</Link></p><p><strong>Modifies or Replaces:</strong> 2nd, 4th, 8th-level Rogue Talent; Uncanny Dodge; Improved Uncanny Dodge</p><p>Notorious for their stealth, imagination, and elaborately planned thefts and capers, heisters specialize in breaking into secure locations, stealing items of value, and escaping undetected.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/investigator">Investigator</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding</p><p>Not all rogues work against the law. Investigators use their skills to serve the law, often in the employ of nobles or in the pursuit of noble causes.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/kintargo_rebel">Kintargo Rebel</Link></p><p><strong>Modifies or Replaces:</strong> Trap Sense; Uncanny Dodge</p><p>Whenever the Chelish navy sails into the port, these rebels are quick to appear agreeably subservient in order to conceal their non-compliance and avoid retribution.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/kitsune_trickster">Kitsune Trickster</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Trap Sense</p><p>(Kitsune Only) The kitsune trickster combines her sharpened wit with minor arcane powers of charm and persuasion.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/knife_master">Knife Master</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Sneak Attack; Trap Sense</p><p>The knife master is a trained killer who specializes in close-up combat and the wave and weave of knife fighting.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/makeshift_scrapper">Makeshift Scrapper</Link></p><p><strong>Modifies or Replaces:</strong> Weapon Proficiencies; Trapfinding; Trap Sense; 12th-level Rogue Talent</p><p>Some combatants specialize in the study of certain weapons, but those without formal training often learn to survive a fight by making brilliant use of whatever is lying around.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/master_of_disguise">Master of Disguise</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; 2nd, 10th-level Rogue Talent</p><p>A master of disguise believes that never letting her adversaries know her true identity protects her from bad luck or missteps on a job.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/nameless_shadow">Nameless Shadow</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; 2nd, 4th, 6th, 8th, 10th, 14th, 18th-level Rogue Talents</p><p>Where bandits and tyrants prey on merchants and caravans, the nameless shadow preys on bandits and tyrants.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/needler">Needler</Link></p><p><strong>Modifies or Replaces:</strong> Evasion; Uncanny Dodge; 6th-level Rogue Talent; Improved Uncanny Dodge</p><p>Needlers use subtlety and misdirection to deliver deadly poisons to unsuspecting victims in creative and unorthodox ways.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/numerian_scavenger">Numerian Scavenger</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Uncanny Dodge; Improved Uncanny Dodge</p><p>A Numerian scavenger lives for the discovery of new technological wonders scraped from the depths of the strange ruins, metal caverns, and outlandish junkyards of Numeria.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/okeno_liberator">Okeno Liberator</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Trap Sense; Uncanny Dodge</p><p>The sight of yellow sails on the Inner Sea signals the approach of a ship from Okeno, home port of the most ruthless and feared of all slaving operations. Most who see these sails flee in terror, but some freedom fighters actually endeavor to be captured, knowing that being taken to Stonespine Island in manacles is the easiest way to infiltrate the city, liberate other slaves, and lead them to freedom.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/phantom_thief">Phantom Thief</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Sneak Attack; Trapfinding; Trap Sense; Master Strike</p><p>Phantom thieves come from the ranks of the elite, having grown bored with their finery, and seek thrills from acts of daring, skill, and crime.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/pirate">Pirate</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; 2nd-level Rogue Talent; Trapfinding</p><p>A pirate breaks from the confines of country and king to commit her crimes upon the high seas.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/planar_sneak">Planar Sneak</Link></p><p><strong>Modifies or Replaces:</strong> Trap Sense; Uncanny Dodge; Improved Uncanny Dodge</p><p>A planar sneak finds creative ways to defy conventional limitations when trying to overcome extraplanar obstacles.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/poisoner">Poisoner</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Trap Sense</p><p>The poisoner knows poison is just a tool toward an end, and is no different than any other weapon.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/rake">Rake</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Trap Sense</p><p>The rake is a rogue who is open about her skills and talents, often to the point of being boastful.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/relic_raider">Relic Raider</Link></p><p><strong>Modifies or Replaces:</strong> Uncanny Dodge; Improved Uncanny Dodge</p><p>Relic raiders are rogues who specialize in recovering treasures from ruins and tombs, some in a quest for knowledge, others out of a desire for riches.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/river_rat">River Rat</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Trapfinding; Trap Sense</p><p>River rats are skilled at hiding amid reeds and roots, striking the unwary from the shallows as others would from the shadows.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/roof_runner">Roof Runner</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Trap Sense</p><p>A specialized urban acrobat, the roof runner makes her home high atop the spires and gables of great cities.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/rotdrinker">Rotdrinker</Link></p><p><strong>Modifies or Replaces:</strong> Evasion; Uncanny Dodge; Improved Uncanny Dodge</p><p>Poisons are common tools in a rogue's trade, and some poison-using rogues are so frequently exposed to these toxins that they have developed resistances to particular poisons.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/sanctified_rogue">Sanctified Rogue</Link></p><p><strong>Modifies or Replaces:</strong> Uncanny Dodge; Improved Uncanny Dodge</p><p>The sanctified rogue serves a higher purpose, acting as a representative of a church or cult, or following the tenets of a specific faith or deity.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/sapper">Sapper</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; 2nd and 4th-level Rogue Talents</p><p>The sapper is a trained siege engineer and can deal with traps and other obstacles given plenty of time.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/scout">Scout</Link></p><p><strong>Modifies or Replaces:</strong> Uncanny Dodge; Improved Uncanny Dodge</p><p>Scouts frequently roam the wilderness, often banding together as bandits, but sometimes serving as guides, as trailblazers, or as companions to a ranger or barbarian warrior.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/scroll_scoundrel">Scroll Scoundrel</Link></p><p><strong>Modifies or Replaces:</strong> 2nd-level Rogue Talent, Trap Sense, Uncanny Dodge, Improved Uncanny Dodge, 10th-level Rogue Talent</p><p>Using knowledge from extensive research, the scroll scoundrel exploits overconfidence and predictability to better stay alive.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/sczarni_swindler">Sczarni Swindler</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Evasion; Trap Sense; Uncanny Dodge; Improved Uncanny Dodge</p><p>If life is a game, the Sczarni play to win. When skill and luck aren't enough, cheating is often the best option.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/seeker_of_the_lost">Seeker of the Lost</Link></p><p><strong>Modifies or Replaces:</strong> 2nd-level Rogue Talent; Uncanny Dodge; Improved Uncanny Dodge</p><p>Aquatic elven adventurers descending into the ruins of sunken Azlant developed techniques to ease their explorations, and they now share these techniques among a loose group of acquaintances calling themselves the seekers of the lost.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/shadow_scion">Shadow Scion</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; 2nd, 8th, 14th-level Rogue Talent; Master Strike</p><p>Shadow scions have learned the secrets of light and dark and draw power from the shadows themselves.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/shadow_walker">Shadow Walker</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; 2nd-level Rogue Talent; Trap Sense; Uncanny Dodge; Improved Uncanny Dodge</p><p>Shadow walkers are comfortable in light, darkness, and the shadows in between.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/sharper">Sharper</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; 2nd, 4th, 6th, 8th, 10th, 16th-level Rogue Talent; Trap Sense</p><p>Sharpers use trickery and deception to part an owner from his valuables.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/skulking_slayer">Skulking Slayer</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; Class Skills; Trapfinding; Rogue Talent; Advanced Rogue Talent; Trap Sense 1-4</p><p>(Half-Orc Only) Pushed into a life of crime by the society around them, half-orcs gravitate toward criminal activities that suit them best.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/sly_saboteur">Sly Saboteur</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Trap Sense; Uncanny Dodge; Improved Uncanny Dodge</p><p>Sly saboteurs are irregular soldiers who specialize in sabotage and surprise attacks.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/smuggler">Smuggler</Link></p><p><strong>Modifies or Replaces:</strong> Trap Sense; Trapfinding; Evasion</p><p>Smugglers specialize in moving contraband from one area to another while avoiding detection by authorities.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/snare_setter">Snare Setter</Link></p><p><strong>Modifies or Replaces:</strong> Sneak Attack; Trapfinding; Master Strike</p><p>(Kobold Only) Deep in darkness, the snare setter constructs his deadly traps and brutal mechanisms to confound and destroy any who try to invade his domain.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/sniper">Sniper</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Trap Sense</p><p>Some say that the sniper is the worst kind of assassin: a killer who waits silently in the shadows and then strikes from a distance without remorse.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/snoop">Snoop</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Evasion; Uncanny Dodge; Improved Uncanny Dodge; 8th-level Rogue Talent</p><p>Snoops act as information peddlers, specializing in gathering secrets through investigation, subterfuge, and coercion, and selling or trading those secrets for personal gain.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/spy">Spy</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Trap Sense</p><p>The best spies are like chameleons, but not only can they change their appearances to fit the situation, they can also change their personalities, allegiances, and even loves if that's what it takes to achieve their clandestine goals.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/survivalist">Survivalist</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Trap Sense</p><p>The survivalist focuses her talents on surviving harsh and unforgiving conditions that would kill a lesser rogue.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/swamp_poisoner">Swamp Poisoner</Link></p><p><strong>Modifies or Replaces:</strong> Racial Traits; Trapfinding; 2nd-level Rogue Talent; Trap Sense</p><p>(Grippli) Swamp poisoners use their own toxins to defend their homes and level the playing field</p></div>
<div className="archetype"><p><Link to="/arc-rogue/swashbuckler">Swashbuckler</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Trap Sense</p><p>A paragon of mobile swordplay, the swashbuckler is a rogue who focuses almost exclusively on honing her skill at arms and perfecting daring acrobatic moves and elaborate flourishes that border on performance.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/swordmaster">Swordmaster</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Trap Sense</p><p>(Tengu Only) A swordmaster meditates to strengthen her spiritual connection to her blade. She strives to perfect her skills by mastering six deadly trances.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/sylvan_trickster">Sylvan Trickster</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Trapfinding; Rogue Talents; Uncanny Dodge; Improved Uncanny Dodge</p><p>Sylvan tricksters are rogues who model themselves after the mischievous fey of legend.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/thug">Thug</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Trap Sense</p><p>Some criminals steal with finesse, their victims only discovering the crime when the rogue is long gone and the coin already spent. A thug, on the other hand, cares nothing for finesse.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/tidal_trickster">Tidal Trickster</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Trap Sense; Uncanny Dodge; Improved Uncanny Dodge; 4th, 8th-level Rogue Talent</p><p>Tidal tricksters roam the seas, using their skillful mastery of the currents to move across aquatic battlefields and throw their enemies off-balance.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/toxic_talon">Toxic Talon</Link></p><p><strong>Modifies or Replaces:</strong> Weapon Proficiencies; Trapfinding; Trap Sense; Uncanny Dodge; Improved Uncanny Dodge</p><p>A toxic talon spends resources and time combining easy-to-obtain materials into dangerous toxins to aid in the defense of Andoran.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/trapsmith">Trapsmith</Link></p><p><strong>Modifies or Replaces:</strong> Uncanny Dodge; Improved Uncanny Dodge</p><p>Some rogues are not content with just disabling traps - they love to build them, finding a captivating beauty in the turning of gears and the slither of ropes over pulleys.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/underground_chemist">Underground Chemist</Link></p><p><strong>Modifies or Replaces:</strong> Evasion; 4th-level Rogue Talent; Advanced Talents</p><p>Underground chemists are part of the rotting, fetid underbelly of the alchemical world.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/vexing_dodger">Vexing Dodger</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; 2nd-level Rogue Talent; Trap Sense; Uncanny Dodge; Improved Uncanny Dodge</p><p>Vexing dodgers take advantage of their smaller size to outmaneuver larger foes such as giants.</p></div>
<div className="archetype"><p><Link to="/arc-rogue/waylayer">Waylayer</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Uncanny Dodge; Improved Uncanny Dodge; 12th and 20th-level Rogue Talents</p><p>A clever rogue knows the easiest battle to win is the one that's over before your foe knows it has begun.</p></div>
<h3 id="class-rogue-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"rogue archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Armor Proficiency"},{"header":"Class Skills"},{"header":"Evasion"},{"header":"Improved Evasion"},{"header":"Master Strike"},{"header":"Rogue Talents"},{"header":"2nd-level Rogue Talent"},{"header":"4th-level Rogue Talent"},{"header":"6th-level Rogue Talent"},{"header":"8th-level Rogue Talent"},{"header":"10th-level Rogue Talent"},{"header":"12th-level Rogue Talent"},{"header":"14th-level Rogue Talent"},{"header":"16th-level Rogue Talent"},{"header":"18th-level Rogue Talent"},{"header":"20th-level Rogue Talent"},{"header":"Advanced Talents"},{"header":"Skill Ranks"},{"header":"Sneak Attack"},{"header":"Trap Sense"},{"header":"Trap Sense 1"},{"header":"Trap Sense 2"},{"header":"Trap Sense 3"},{"header":"Trap Sense 4"},{"header":"Trapfinding"},{"header":"Uncanny Dodge"},{"header":"Improved Uncanny Dodge"},{"header":"Weapon Proficiency"},{"header":"Weapon/Armor Proficiency"}],"data":[["‹arc-rogue/Acrobat›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Bandit›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-rogue/Bekyar Kidnapper›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Bellflower Irrigator›",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null],["‹arc-rogue/Burglar›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null],["‹arc-rogue/Carnivalist›",null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null],["‹arc-rogue/Cat Burglar›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null],["‹arc-rogue/Chameleon›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Charlatan›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Consigliere›",null,"X","X",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X","X",null,null],["‹arc-rogue/Construct Saboteur›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Counterfeit Mage›",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Cutpurse›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Dark Lurker›",null,null,"X",null,null,null,"X",null,null,"X",null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-rogue/Deadly Courtesan›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,null],["‹arc-rogue/Desert Raider›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Discretion Specialist›",null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,"X",null,null,null,null,"X","X","X",null,null],["‹arc-rogue/Dreamthief›",null,"X",null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,"X","X",null,null,null,null,null,"X","X",null,null],["‹arc-rogue/Driver›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Earthshadow›",null,null,"X",null,null,null,null,"X",null,"X",null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Eldritch Raider›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null],["‹arc-rogue/Eldritch Scoundrel›","X","X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X","X","X","X",null,null,null,null,null,"X","X",null,null],["‹arc-rogue/Escapologist›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null],["‹arc-rogue/False Medium›",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Fey Prankster›",null,null,null,null,null,null,"X",null,"X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null],["‹arc-rogue/Filcher›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X",null,null],["‹arc-rogue/Galtan Agitator›",null,null,null,null,null,null,null,"X",null,"X",null,"X",null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Guerrilla›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X","X",null,null],["‹arc-rogue/Guild Agent›",null,null,"X","X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-rogue/Gun Smuggler›",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,"X","X","X","X",null],["‹arc-rogue/Heister›",null,null,null,null,null,null,"X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null],["‹arc-rogue/Investigator›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Kintargo Rebel›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null],["‹arc-rogue/Kitsune Trickster›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Knife Master›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Makeshift Scrapper›",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,"X",null],["‹arc-rogue/Master of Disguise›",null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Nameless Shadow›",null,null,null,null,null,null,"X","X","X","X","X",null,"X",null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Needler›",null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null],["‹arc-rogue/Numerian Scavenger›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null],["‹arc-rogue/Okeno Liberator›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X",null,null,null],["‹arc-rogue/Phantom Thief›",null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Pirate›",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Planar Sneak›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X",null,null],["‹arc-rogue/Poisoner›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Rake›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Relic Raider›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null],["‹arc-rogue/River Rat›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Roof Runner›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Rotdrinker›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null],["‹arc-rogue/Sanctified Rogue›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null],["‹arc-rogue/Sapper›",null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Scout›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null],["‹arc-rogue/Scroll Scoundrel›",null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X",null,null],["‹arc-rogue/Sczarni Swindler›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X","X",null,null],["‹arc-rogue/Seeker of the Lost›",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null],["‹arc-rogue/Shadow Scion›",null,null,null,null,"X",null,"X",null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Shadow Walker›",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X","X",null,null],["‹arc-rogue/Sharper›",null,null,null,null,null,null,"X","X","X","X","X",null,null,"X",null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Skulking Slayer›",null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X","X","X","X","X",null,null,null,"X"],["‹arc-rogue/Sly Saboteur›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X",null,null],["‹arc-rogue/Smuggler›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Snare Setter›",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Sniper›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Snoop›",null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null],["‹arc-rogue/Spy›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Survivalist›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Swamp Poisoner›",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Swashbuckler›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Swordmaster›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-rogue/Sylvan Trickster›",null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null],["‹arc-rogue/Thug›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-rogue/Tidal Trickster›",null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X","X",null,null],["‹arc-rogue/Toxic Talon›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X","X","X",null],["‹arc-rogue/Trapsmith›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null],["‹arc-rogue/Underground Chemist›",null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-rogue/Vexing Dodger›",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X","X",null,null],["‹arc-rogue/Waylayer›",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,"X","X","X",null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-rogue-label">Footnotes</h3>
<ol>
<li id="class-rogue-A">
<p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 15</Link> <InnerLink id="backlink-class-rogue-ref-A-1" data-hash-target to="class-rogue-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-rogue-B">
<p><Link to="/source/advanced_race_guide">Advanced Race Guide pg. 92</Link> <InnerLink id="backlink-class-rogue-ref-B-1" data-hash-target to="class-rogue-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-rogue-C">
<p>Advanced Race Guide pg. 184 <InnerLink id="backlink-class-rogue-ref-C-1" data-hash-target to="class-rogue-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-rogue-D">
<p>Advanced Race Guide pg. 98 <InnerLink id="backlink-class-rogue-ref-D-1" data-hash-target to="class-rogue-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-rogue-E">
<p>Advanced Race Guide pg. 104 <InnerLink id="backlink-class-rogue-ref-E-1" data-hash-target to="class-rogue-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-rogue-F">
<p>Plane-Hopper's Handbook pg. 17 <InnerLink id="backlink-class-rogue-ref-F-1" data-hash-target to="class-rogue-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-rogue-G">
<p>Advanced Race Guide pg. 13 <InnerLink id="backlink-class-rogue-ref-G-1" data-hash-target to="class-rogue-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-rogue-H">
<p><Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 11</Link> <InnerLink id="backlink-class-rogue-ref-H-1" data-hash-target to="class-rogue-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-rogue-I">
<p>Advanced Race Guide pg. 23 <InnerLink id="backlink-class-rogue-ref-I-1" data-hash-target to="class-rogue-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-rogue-J">
<p>Advanced Race Guide pg. 109 <InnerLink id="backlink-class-rogue-ref-J-1" data-hash-target to="class-rogue-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
<li id="class-rogue-K">
<p>Plane-Hopper's Handbook pg. 19 <InnerLink id="backlink-class-rogue-ref-K-1" data-hash-target to="class-rogue-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
<li id="class-rogue-L">
<p><Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 10</Link> <InnerLink id="backlink-class-rogue-ref-L-1" data-hash-target to="class-rogue-ref-L-1" aria-label="Back to reference L-1">↩</InnerLink></p>
</li>
<li id="class-rogue-M">
<p><Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 9</Link> <InnerLink id="backlink-class-rogue-ref-M-1" data-hash-target to="class-rogue-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink></p>
</li>
<li id="class-rogue-N">
<p>Ultimate Wilderness pg. 17 <InnerLink id="backlink-class-rogue-ref-N-1" data-hash-target to="class-rogue-ref-N-1" aria-label="Back to reference N-1">↩</InnerLink></p>
</li>
<li id="class-rogue-O">
<p>Advanced Race Guide pg. 188 <InnerLink id="backlink-class-rogue-ref-O-1" data-hash-target to="class-rogue-ref-O-1" aria-label="Back to reference O-1">↩</InnerLink></p>
</li>
<li id="class-rogue-P">
<p>Advanced Race Guide pg. 33 <InnerLink id="backlink-class-rogue-ref-P-1" data-hash-target to="class-rogue-ref-P-1" aria-label="Back to reference P-1">↩</InnerLink></p>
</li>
<li id="class-rogue-Q">
<p>Advanced Player's Guide pg. 15 <InnerLink id="backlink-class-rogue-ref-Q-1" data-hash-target to="class-rogue-ref-Q-1" aria-label="Back to reference Q-1">↩</InnerLink></p>
</li>
<li id="class-rogue-R">
<p><Link to="/source/horror_adventures">Horror Adventures pg. 39</Link> <InnerLink id="backlink-class-rogue-ref-R-1" data-hash-target to="class-rogue-ref-R-1" aria-label="Back to reference R-1">↩</InnerLink></p>
</li>
<li id="class-rogue-S">
<p>Advanced Race Guide pg. 115 <InnerLink id="backlink-class-rogue-ref-S-1" data-hash-target to="class-rogue-ref-S-1" aria-label="Back to reference S-1">↩</InnerLink></p>
</li>
<li id="class-rogue-T">
<p><Link to="/source/goblins_of_golarion">Goblins of Golarion pg. 31</Link> <InnerLink id="backlink-class-rogue-ref-T-1" data-hash-target to="class-rogue-ref-T-1" aria-label="Back to reference T-1">↩</InnerLink></p>
</li>
<li id="class-rogue-U">
<p>Advanced Race Guide pg. 190 <InnerLink id="backlink-class-rogue-ref-U-1" data-hash-target to="class-rogue-ref-U-1" aria-label="Back to reference U-1">↩</InnerLink></p>
</li>
<li id="class-rogue-V">
<p>Advanced Race Guide pg. 43 <InnerLink id="backlink-class-rogue-ref-V-1" data-hash-target to="class-rogue-ref-V-1" aria-label="Back to reference V-1">↩</InnerLink></p>
</li>
<li id="class-rogue-W">
<p>Advanced Player's Guide pg. 17 <InnerLink id="backlink-class-rogue-ref-W-1" data-hash-target to="class-rogue-ref-W-1" aria-label="Back to reference W-1">↩</InnerLink></p>
</li>
<li id="class-rogue-X">
<p>Advanced Race Guide pg. 63 <InnerLink id="backlink-class-rogue-ref-X-1" data-hash-target to="class-rogue-ref-X-1" aria-label="Back to reference X-1">↩</InnerLink></p>
</li>
<li id="class-rogue-Y">
<p>Advanced Player's Guide pg. 21 <InnerLink id="backlink-class-rogue-ref-Y-1" data-hash-target to="class-rogue-ref-Y-1" aria-label="Back to reference Y-1">↩</InnerLink></p>
</li>
<li id="class-rogue-Z">
<p>Advanced Race Guide pg. 53 <InnerLink id="backlink-class-rogue-ref-Z-1" data-hash-target to="class-rogue-ref-Z-1" aria-label="Back to reference Z-1">↩</InnerLink></p>
</li>
<li id="class-rogue-1">
<p>Advanced Race Guide pg. 122 <InnerLink id="backlink-class-rogue-ref-1-1" data-hash-target to="class-rogue-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="class-rogue-2">
<p>Advanced Race Guide pg. 73 <InnerLink id="backlink-class-rogue-ref-2-1" data-hash-target to="class-rogue-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="class-rogue-3">
<p>Advanced Player's Guide pg. 23 <InnerLink id="backlink-class-rogue-ref-3-1" data-hash-target to="class-rogue-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
<li id="class-rogue-4">
<p>Advanced Race Guide pg. 127 <InnerLink id="backlink-class-rogue-ref-4-1" data-hash-target to="class-rogue-ref-4-1" aria-label="Back to reference 4-1">↩</InnerLink></p>
</li>
<li id="class-rogue-5">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-rogue-ref-5-1" data-hash-target to="class-rogue-ref-5-1" aria-label="Back to reference 5-1">↩</InnerLink></p>
</li>
<li id="class-rogue-6">
<p>Advanced Race Guide pg. 192 <InnerLink id="backlink-class-rogue-ref-6-1" data-hash-target to="class-rogue-ref-6-1" aria-label="Back to reference 6-1">↩</InnerLink></p>
</li>
<li id="class-rogue-7">
<p>Advanced Race Guide pg. 133 <InnerLink id="backlink-class-rogue-ref-7-1" data-hash-target to="class-rogue-ref-7-1" aria-label="Back to reference 7-1">↩</InnerLink></p>
</li>
<li id="class-rogue-8">
<p><Link to="/source/blood_of_the_sea">Blood of the Sea pg. 11</Link> <InnerLink id="backlink-class-rogue-ref-8-1" data-hash-target to="class-rogue-ref-8-1" aria-label="Back to reference 8-1">↩</InnerLink></p>
</li>
<li id="class-rogue-9">
<p>Advanced Race Guide pg. 151 <InnerLink id="backlink-class-rogue-ref-9-1" data-hash-target to="class-rogue-ref-9-1" aria-label="Back to reference 9-1">↩</InnerLink></p>
</li>
<li id="class-rogue-0">
<p>Advanced Race Guide pg. 198 <InnerLink id="backlink-class-rogue-ref-0-1" data-hash-target to="class-rogue-ref-0-1" aria-label="Back to reference 0-1">↩</InnerLink></p>
</li>
<li id="class-rogue-!">
<p>Advanced Race Guide pg. 157 <InnerLink id="backlink-class-rogue-ref-!-1" data-hash-target to="class-rogue-ref-!-1" aria-label="Back to reference !-1">↩</InnerLink></p>
</li>
<li id="class-rogue-%40">
<p>Advanced Race Guide pg. 163 <InnerLink id="backlink-class-rogue-ref-%40-1" data-hash-target to="class-rogue-ref-%40-1" aria-label="Back to reference @-1">↩</InnerLink></p>
</li>
<li id="class-rogue-%26">
<p>Advanced Race Guide pg. 170 <InnerLink id="backlink-class-rogue-ref-%26-1" data-hash-target to="class-rogue-ref-%26-1" aria-label="Back to reference &-1">↩</InnerLink></p>
</li>
<li id="class-rogue-%25">
<p>Advanced Race Guide pg. 206 <InnerLink id="backlink-class-rogue-ref-%25-1" data-hash-target to="class-rogue-ref-%25-1" aria-label="Back to reference %-1">↩</InnerLink></p>
</li>
<li id="class-rogue-%23">
<p>Ultimate Wilderness pg. 22 <InnerLink id="backlink-class-rogue-ref-%23-1" data-hash-target to="class-rogue-ref-%23-1" aria-label="Back to reference #-1">↩</InnerLink></p>
</li>
<li id="class-rogue-%3B">
<p>Advanced Race Guide pg. 208 <InnerLink id="backlink-class-rogue-ref-%3B-1" data-hash-target to="class-rogue-ref-%3B-1" aria-label="Back to reference ;-1">↩</InnerLink></p>
</li>
<li id="class-rogue-%3F">
<p><Link to="/source/blood_of_shadows">Blood of Shadows pg. 11</Link> <InnerLink id="backlink-class-rogue-ref-%3F-1" data-hash-target to="class-rogue-ref-%3F-1" aria-label="Back to reference ?-1">↩</InnerLink></p>
</li>
<li id="class-rogue-_">
<p><Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 6</Link> <InnerLink id="backlink-class-rogue-ref-_-1" data-hash-target to="class-rogue-ref-_-1" aria-label="Back to reference _-1">↩</InnerLink></p>
</li>
<li id="class-rogue-%3D">
<p><Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 18</Link> <InnerLink id="backlink-class-rogue-ref-%3D-1" data-hash-target to="class-rogue-ref-%3D-1" aria-label="Back to reference =-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _unchained_rogue = {hasJL:true,title: "Unchained Rogue", jsx: <><div className="jumpList" id="class-unchained_rogue-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-unchained_rogue-sneak-attack">Sneak Attack</InnerLink></li><li><InnerLink toTop to="class-unchained_rogue-trapfinding">Trapfinding</InnerLink></li><li><InnerLink toTop to="class-unchained_rogue-finesse-training-ex">Finesse Training</InnerLink></li><li><InnerLink toTop to="class-unchained_rogue-evasion-ex">Evasion</InnerLink></li><li><InnerLink toTop to="class-unchained_rogue-rogue-talents">Rogue Talents</InnerLink></li><li><InnerLink toTop to="class-unchained_rogue-danger-sense-ex">Danger Sense</InnerLink></li><li><InnerLink toTop to="class-unchained_rogue-debilitating-injury-ex">Debilitating Injury</InnerLink></li><li><InnerLink toTop to="class-unchained_rogue-uncanny-dodge-ex">Uncanny Dodge</InnerLink></li><li><InnerLink toTop to="class-unchained_rogue-rogues-edge-ex">Rogue's Edge</InnerLink></li><li><InnerLink toTop to="class-unchained_rogue-advanced-talents">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-unchained_rogue-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-unchained_rogue-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-unchained_rogue-favored-class-bonuses">Favored Class Bonuses</InnerLink></li></ul></div><h2 id="class-unchained_rogue-unchained-rogue">Unchained Rogue</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 20</Link></p>
<p>Thief, sneak, charmer, diplomat - all of these and more describe the rogue. When not skulking in the shadows, disarming traps, and stealing from the unaware, rogues may rub shoulders with powerful nobles or plot capers with fellow crooks. The rogue is the master of many faces, using her skills and talents to get herself both into and out of trouble with rakish aplomb. While others may call them charlatans and burglars, even the most larcenous rogues tend to consider themselves consummate professionals, willing to take on any job if the price is right.</p>
<p><strong>Unchained:</strong> While much of the unchained rogue will be familiar to those who have played the class from the <em>Core Rulebook,</em> there are a number of new class features that greatly enhance the power and flexibility of the rogue. Chief among these is the debilitating injury class feature. A rogue with this ability can severely hamper her foes, giving her a much-needed boost to her offense or defense, depending on the situation. In addition, with finesse training, the rogue now gains <Link to="/feat/weapon_finesse">Weapon Finesse</Link> for free at 1st level. This ability also lets her add her Dexterity to damage rolls with one weapon starting at 3rd level. Finally, the rogue's edge ability ties into a new system called skill unlocks. With this feature, the rogue can master a small set of chosen skills, outperforming all those characters without access to such talents.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>4d6 &times; 10 gp (average 140 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>8 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/disable_device">Disable Device</Link>, <Link to="/skill/escape_artist">Escape Artist</Link>, <Link to="/skill/sleight_of_hand">Sleight of Hand</Link>, <Link to="/skill/stealth">Stealth</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/appraise">Appraise</Link>, <Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, <Link to="/skill/knowledge_local">Knowledge (local)</Link>, <Link to="/skill/linguistics">Linguistics</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/disguise">Disguise</Link>, <Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/perform_any">Perform (any)</Link>, <Link to="/skill/use_magic_device">Use Magic Device</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-unchained_rogue-class-features">Class Features</h3>
<ScrollContainer id="class-unchained_rogue--table-0"><table>
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
<td>Finesse training, sneak attack +1d6, trapfinding</td>
</tr>
<tr>
<td>2nd</td>
<td>+1</td>
<td>+0</td>
<td>+3</td>
<td>+0</td>
<td>Evasion, rogue talent</td>
</tr>
<tr>
<td>3rd</td>
<td>+2</td>
<td>+1</td>
<td>+3</td>
<td>+1</td>
<td>Danger sense +1, finesse training, sneak attack +2d6</td>
</tr>
<tr>
<td>4th</td>
<td>+3</td>
<td>+1</td>
<td>+4</td>
<td>+1</td>
<td>Debilitating injury, rogue talent, uncanny dodge</td>
</tr>
<tr>
<td>5th</td>
<td>+3</td>
<td>+1</td>
<td>+4</td>
<td>+1</td>
<td>Rogue's edge, sneak attack +3d6</td>
</tr>
<tr>
<td>6th</td>
<td>+4</td>
<td>+2</td>
<td>+5</td>
<td>+2</td>
<td>Danger sense +2, rogue talent</td>
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
<td>Improved uncanny dodge, rogue talent</td>
</tr>
<tr>
<td>9th</td>
<td>+6/+1</td>
<td>+3</td>
<td>+6</td>
<td>+3</td>
<td>Danger sense +3, sneak attack +5d6</td>
</tr>
<tr>
<td>10th</td>
<td>+7/+2</td>
<td>+3</td>
<td>+7</td>
<td>+3</td>
<td>Advanced talents, rogue talent, rogue's edge</td>
</tr>
<tr>
<td>11th</td>
<td>+8/+3</td>
<td>+3</td>
<td>+7</td>
<td>+3</td>
<td>Finesse training, sneak attack +6d6</td>
</tr>
<tr>
<td>12th</td>
<td>+9/+4</td>
<td>+4</td>
<td>+8</td>
<td>+4</td>
<td>Danger sense +4, rogue talent</td>
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
<td>Rogue talent</td>
</tr>
<tr>
<td>15th</td>
<td>+11/+6/+1</td>
<td>+5</td>
<td>+9</td>
<td>+5</td>
<td>Danger sense +5, rogue's edge, sneak attack +8d6</td>
</tr>
<tr>
<td>16th</td>
<td>+12/+7/+2</td>
<td>+5</td>
<td>+10</td>
<td>+5</td>
<td>Rogue talent</td>
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
<td>Danger sense +6, rogue talent</td>
</tr>
<tr>
<td>19th</td>
<td>+14/+9/+4</td>
<td>+6</td>
<td>+11</td>
<td>+6</td>
<td>Finesse training, sneak attack +10d6</td>
</tr>
<tr>
<td>20th</td>
<td>+15/+10/+5</td>
<td>+6</td>
<td>+12</td>
<td>+6</td>
<td>Master strike, rogue talent, rogue's edge</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={4}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td><Link to="/eq-weapon/hand_crossbow">hand crossbow</Link></td><td><Link to="/eq-weapon/rapier">rapier</Link></td></tr><tr><td><Link to="/eq-weapon/sap">sap</Link></td><td><Link to="/eq-weapon/shortbow">shortbow</Link></td></tr><tr><td colSpan={2}><Link to="/eq-weapon/short_sword">short sword</Link></td></tr><tr><th>Light Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Medium Armor?</th><td colSpan={2}>No</td></tr><tr><th>Heavy Armor?</th><td colSpan={2}>No</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">No</td></tr></tbody></table>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_rogue-sneak-attack" data-hash-target><div className="box">Sneak Attack</div><div className="flavor">If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Your attack deals extra damage any time your target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when you <Link to="/rule/flank">flank</Link> your target. This extra damage is a number of d6s equal to 1 + <Link to="/misc/half">half</Link> your rogue level. (1d6 at first, 2d6 at 3rd, 3d6 at 5th, and so on.) You must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. You cannot sneak attack while striking a creature with <Link to="/rule/concealment">concealment</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">This additional damage is <Link to="/misc/precision_damage">precision damage</Link> and is not multiplied on a critical hit. Ranged attacks can count as sneak attacks only if the target is within 30 feet. With a weapon that deals nonlethal damage (like a sap, whip, or an unarmed strike), you can make a sneak attack that deals nonlethal damage instead of lethal damage. You cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual -4 penalty.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_rogue-trapfinding" data-hash-target><div className="box">Trapfinding</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You add 1/2 your level to Perception skill checks made to locate traps and to Disable Device skill checks (minimum +1). You can use Disable Device to disarm magic traps.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_rogue-finesse-training-ex" data-hash-target><div className="box">Finesse Training (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain <Link to="/feat/weapon_finesse">Weapon Finesse</Link> as a bonus feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 3rd Level</div></div><div className="abEnd"><div className="box">You can select any one type of weapon that can be used with Weapon Finesse (such as rapiers or <Link to="/eq-weapon/dagger">daggers</Link>). Once this choice is made, it cannot be changed. Whenever you make a successful melee attack with the selected weapon, you add your Dexterity modifier instead of your Strength modifier to the damage roll. If any effect would prevent you from adding your Strength modifier to the damage roll, you do not add your Dexterity modifier.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">You choose a second weapon to also gain these benefits with.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">You choose a third weapon to also gain these benefits with.</div></div></div></div>
<div className="sideNoteWrap singular optional elephant"><ScrollContainer id="class-unchained_rogue--table-1"><table><tbody><tr><ThLink scope="row" to="/rule/the_elephant_in_the_room"><IonIcon aria-label="The Elephant in the Room" icon="/icons/elephant.svg" /></ThLink><td><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link><br/>At 1st level, a rogue gains <strong className="hl"><Link to="/rule/deft_maneuvers">Deft Maneuvers</Link></strong> as a bonus feat. In addition, starting at 3rd level, she can select any one <Link to="/ability/weapon_groups">weapon group</Link> listed under the fighter's Weapon Training class feature. Once this choice is made, it cannot be changed. Whenever she makes a successful melee attack with a <Link to="/rule/finesse">finesse</Link> weapon or an <Link to="/magic-enh/agile">agile</Link> weapon from this group, she adds her Dexterity modifier instead of her Strength modifier to the damage roll. If any effect would prevent the rogue from adding her Strength modifier to the damage roll, she does not add her Dexterity modifier. The rogue can select a second weapon group at 11th level and a third at 19th level.</p>
</td></tr></tbody></table></ScrollContainer></div><div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_rogue-evasion-ex" data-hash-target><div className="box">Evasion (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">If you make a successful Reflex saving throw against an attack that normally deals half damage on a successful save, you instead take no damage. Evasion can be used only if the you are not <Link to="/misc/helpless">helpless</Link> and are wearing light armor or no armor.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_rogue-rogue-talents" data-hash-target><div className="box">Rogue Talents</div><div className="flavor">As a rogue gains experience, she learns a number of talents that aid her and confound her foes.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain one <Link to="/ability/unchained_rogue_talent">unchained rogue talent</Link>. You gain an additional rogue talent at every even-numbered level (4th, 6th, 8th, and so on).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You cannot select an individual talent more than once. Some talents add effects to your <em>sneak attack.</em> Only one of these talents can be applied to an individual <em>attack</em> and the decision must be made before the attack roll is made.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_rogue-danger-sense-ex" data-hash-target><div className="box">Danger Sense (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain a bonus on Reflex saves made to avoid traps and a dodge bonus to AC against attacks made by traps. In addition, you gain a bonus on Perception checks to avoid being surprised by a foe. These bonuses are equal to <Link to="/misc/one_third">one-third</Link> of your rogue level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">This ability counts as <Link to="/ability/trap_sense">trap sense</Link> for the purpose of any feat or class prerequisite, and can be replaced by any archetype class feature that replaces trap sense. The bonuses gained from this ability stack with those gained from trap sense (from another class).</div></div></div></div>
<div className="ability p hasSubs"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_rogue-debilitating-injury-ex" data-hash-target><div className="box">Debilitating Injury (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Whenever you deal <em>sneak attack</em> damage to a foe, you can also debilitate the target of your attack, causing it to take a penalty for 1 round (this is in addition to any penalty caused by a <em>rogue talent</em> or other special ability). You can choose to apply any one of the following penalties when the damage is dealt.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">These penalties do not stack with themselves, but additional attacks that deal sneak attack damage extend the duration by 1 round. A creature cannot suffer from more than one penalty from this ability at a time. If a new penalty is applied, the old penalty immediately ends. Any form of healing applied to a target suffering from one of these penalties also removes the penalty.</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_rogue-bewildered" data-hash-target><div className="box">Bewildered</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">The target becomes bewildered, taking a -2 penalty to AC. The target takes an additional -2 penalty to AC against all attacks made by you (for a total of -4).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">The additional penalty to AC against you becomes -4 (for a total of -6).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">The additional penalty to AC against you becomes -6 (for a total of -8).</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_rogue-disoriented" data-hash-target><div className="box">Disoriented</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">The target takes a -2 penalty on attack rolls. In addition, the target takes an additional -2 penalty on all attack rolls it makes against the rogue (for a total of -4).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">The additional penalty on attacks against you becomes -4 (for a total of -6).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">The additional penalty on attacks against you becomes -6 (for a total of -8).</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_rogue-hampered" data-hash-target><div className="box">Hampered</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">All of the target's speeds are reduced by half (to a minimum of 5 feet). In addition, the target cannot <Link to="/rule/take_a_5_foot_step">take a 5-foot step</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_rogue-uncanny-dodge-ex" data-hash-target><div className="box">Uncanny Dodge (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You cannot be caught <Link to="/rule/flat_footed">flat-footed</Link>, nor do you lose your Dex bonus to AC if the attacker is invisible. You still lose your Dexterity bonus to AC if immobilized, or if an opponent successfully uses the <Link to="/rule/feint">feint</Link> action against you.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">If you already have uncanny dodge from a different class, you automatically gain improved uncanny dodge instead.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_rogue-rogues-edge-ex" data-hash-target><div className="box">Rogue's Edge (Ex)</div><div className="flavor">A rogue has mastered a single skill beyond that skill's normal boundaries, gaining results that others can only dream about.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Choose a skill. You gain the skill unlock powers for that skill as appropriate for your number of ranks in that skill.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">You choose another skill and gain its skill unlock powers.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">You choose another skill and gain its skill unlock powers.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">You choose another skill and gain its skill unlock powers.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Skill unlocks can be found in each <Link to="/main/skills">skill's</Link> entry under the heading <em>Unchained Rogue Skill Unlocks.</em></div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_rogue-improved-uncanny-dodge-ex" data-hash-target><div className="box">Improved Uncanny Dodge (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You can no longer be <Link to="/rule/flanked">flanked</Link> This defense denies another rogue the ability to sneak attack you by flanking you, unless the attacker has at least four more rogue levels than you do.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">If you already have uncanny dodge from another class, the levels from the classes that grant uncanny dodge stack to determine the minimum rogue level required to flank you.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_rogue-advanced-talents" data-hash-target><div className="box">Advanced Talents</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 10th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can choose an <Link to="/ability/advanced_unchained_rogue_talent">advanced unchained rogue talent</Link> in place of a <em>rogue talent.</em></div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-unchained_rogue-master-strike-ex" data-hash-target><div className="box">Master Strike (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Each time you deal <em>sneak attack</em> damage, you can choose one of the following three effects: the target can be put to sleep for 1d4 hours, <Link to="/rule/paralyzed">paralyzed</Link> for 2d6 rounds, or slain. Regardless of the effect chosen, the target receives a Fortitude save to negate the additional effect. The DC of this save is equal to 10 + 1/2 your rogue level + your Intelligence modifier.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Once a creature has been the target of a master strike, regardless of whether or not the save is made, that creature is immune to that rogue's master strike for 24 hours. Creatures that are immune to <em>sneak attack</em> damage are also immune to this ability.</div></div></div></div>
<h3 id="class-unchained_rogue-archetypes" data-hash-target>Archetypes</h3>
<p>There are no official archetypes for the Unchained Rogue. You can use <Link to="/class/rogue">rogue</Link> archetypes if the features being replaced by the archetype match those of the unchained rogue.</p>
<h3 id="class-unchained_rogue-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-unchained_rogue--table-2"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Masterful Talent (Ex)</td><td>At 20th level, the rogue has been a thief, an actor, a merchant, a scout, a confessor, a friend, an assassin, and a dozen more things besides. The rogue gains a +4 bonus on all of her skills.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>The Right Spot (Ex)</td><td>At 20th level, the character can hit an opponent's weak spot effortlessly. Once per round, the character can apply her sneak attack damage to an attack, even if the target is not flanked or denied its Dexterity bonus to AC. This does not allow the character to sneak attack targets that are immune to sneak attacks (such as oozes). This capstone is available for any class with the sneak attack class feature.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-unchained_rogue-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-unchained_rogue-ref-A-1" id="class-unchained_rogue-ref-A-1" data-hash-target to="class-unchained_rogue-A">1</InnerLink></sup></p>
</div>
<section data-footnotes>
<h3 id="class-unchained_rogue-label">Footnotes</h3>
<ol>
<li id="class-unchained_rogue-A">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-unchained_rogue-ref-A-1" data-hash-target to="class-unchained_rogue-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
export default {brawler:_brawler,summoner:_summoner,unchained_summoner:_unchained_summoner,mesmerist:_mesmerist,rogue:_rogue,unchained_rogue:_unchained_rogue}