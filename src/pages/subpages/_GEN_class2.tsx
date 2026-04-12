import {IonIcon} from '@ionic/react';
import DisplayTable from '../../components/DisplayTable';
import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _fighter = {hasJL:true,title: "Fighter", jsx: <><div className="jumpList" id="class-fighter-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-fighter-bonus-feats">Bonus Feats</InnerLink></li><li><InnerLink toTop to="class-fighter-bravery-ex">Bravery</InnerLink></li><li><InnerLink toTop to="class-fighter-armor-training-ex">Armor Training</InnerLink></li><li><InnerLink toTop to="class-fighter-weapon-training-ex">Weapon Training</InnerLink></li><li><InnerLink toTop to="class-fighter-armor-mastery-ex">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-fighter-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-fighter-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-fighter-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-fighter-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-fighter-fighter">Fighter</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 55</Link></p>
<p>Some take up arms for glory, wealth, or revenge. Others do battle to prove themselves, to protect others, or because they know nothing else. Still others learn the ways of weaponcraft to hone their bodies in battle and prove their mettle in the forge of war. Lords of the battlefield, fighters are a disparate lot, training with many weapons or just one, perfecting the uses of armor, learning the fighting techniques of exotic masters, and studying the art of combat, all to shape themselves into living weapons. Far more than mere thugs, these skilled warriors reveal the true deadliness of their weapons, turning hunks of metal into arms capable of taming kingdoms, slaughtering monsters, and rousing the hearts of armies. Soldiers, knights, hunters, and artists of war, fighters are unparalleled champions, and woe to those who dare stand against them.</p>
<p><strong>Role:</strong> Fighters excel at combat - defeating their enemies, controlling the flow of battle, and surviving such sorties themselves. While their specific weapons and methods grant them a wide variety of tactics, few can match fighters for sheer battle prowess.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d10</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>5d6 &times; 10 gp (average 175 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>2 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/ride">Ride</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/survival">Survival</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/handle_animal">Handle Animal</Link>, <Link to="/skill/intimidate">Intimidate</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-fighter-class-features">Class Features</h3>
<ScrollContainer id="class-fighter--table-0"><table>
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
<td>+1</td>
<td>+2</td>
<td>+0</td>
<td>+0</td>
<td>Bonus feat</td>
</tr>
<tr>
<td>2nd</td>
<td>+2</td>
<td>+3</td>
<td>+0</td>
<td>+0</td>
<td>Bonus feat, bravery +1</td>
</tr>
<tr>
<td>3rd</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>+1</td>
<td>Armor training 1</td>
</tr>
<tr>
<td>4th</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>+1</td>
<td>Bonus feat</td>
</tr>
<tr>
<td>5th</td>
<td>+5</td>
<td>+4</td>
<td>+1</td>
<td>+1</td>
<td>Weapon training 1</td>
</tr>
<tr>
<td>6th</td>
<td>+6/+1</td>
<td>+5</td>
<td>+2</td>
<td>+2</td>
<td>Bonus feat, bravery +2</td>
</tr>
<tr>
<td>7th</td>
<td>+7/+2</td>
<td>+5</td>
<td>+2</td>
<td>+2</td>
<td>Armor training 2</td>
</tr>
<tr>
<td>8th</td>
<td>+8/+3</td>
<td>+6</td>
<td>+2</td>
<td>+2</td>
<td>Bonus feat</td>
</tr>
<tr>
<td>9th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+3</td>
<td>+3</td>
<td>Weapon training 2</td>
</tr>
<tr>
<td>10th</td>
<td>+10/+5</td>
<td>+7</td>
<td>+3</td>
<td>+3</td>
<td>Bonus feat, bravery +3</td>
</tr>
<tr>
<td>11th</td>
<td>+11/+6/+1</td>
<td>+7</td>
<td>+3</td>
<td>+3</td>
<td>Armor training 3</td>
</tr>
<tr>
<td>12th</td>
<td>+12/+7/+2</td>
<td>+8</td>
<td>+4</td>
<td>+4</td>
<td>Bonus feat</td>
</tr>
<tr>
<td>13th</td>
<td>+13/+8/+3</td>
<td>+8</td>
<td>+4</td>
<td>+4</td>
<td>Weapon training 3</td>
</tr>
<tr>
<td>14th</td>
<td>+14/+9/+4</td>
<td>+9</td>
<td>+4</td>
<td>+4</td>
<td>Bonus feat, bravery +4</td>
</tr>
<tr>
<td>15th</td>
<td>+15/+10/+5</td>
<td>+9</td>
<td>+5</td>
<td>+5</td>
<td>Armor training 4</td>
</tr>
<tr>
<td>16th</td>
<td>+16/+11/+6/+1</td>
<td>+10</td>
<td>+5</td>
<td>+5</td>
<td>Bonus feat</td>
</tr>
<tr>
<td>17th</td>
<td>+17/+12/+7/+2</td>
<td>+10</td>
<td>+5</td>
<td>+5</td>
<td>Weapon training 4</td>
</tr>
<tr>
<td>18th</td>
<td>+18/+13/+8/+3</td>
<td>+11</td>
<td>+6</td>
<td>+6</td>
<td>Bonus feat, bravery +5</td>
</tr>
<tr>
<td>19th</td>
<td>+19/+14/+9/+4</td>
<td>+11</td>
<td>+6</td>
<td>+6</td>
<td>Armor mastery</td>
</tr>
<tr>
<td>20th</td>
<td>+20/+15/+10/+5</td>
<td>+12</td>
<td>+6</td>
<td>+6</td>
<td>Bonus feat, weapon mastery</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={2}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td colSpan={2}>All <Link to="/main/equipment_weapons_martial">martial weapons</Link></td></tr><tr><th>Light Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Medium Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Heavy Armor?</th><td colSpan={2}>Yes</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">Yes, including tower shields</td></tr></tbody></table>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-fighter-bonus-feats" data-hash-target><div className="box">Bonus Feats</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You start with a bonus feat, in addition to the free feat every class gets at 1st level. This bonus feat must be selected from those listed as <Link to="/main/combat_feat">combat feats</Link>, sometimes also called "fighter bonus feats."</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 2nd Level</div></div><div className="abEnd"><div className="box">You gain a bonus combat feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">You gain a bonus combat feat. You can also choose to learn a new bonus feat in place of a bonus feat you already learned. In effect, you lose the bonus feat in exchange for the new one. The old feat cannot be one that was used as a prerequisite for another feat, prestige class, or other ability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">You gain a bonus combat feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">You gain a bonus combat feat. You may also replace an older feat, following the rules given at 4th level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">You gain a bonus combat feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">You gain a bonus combat feat. You may also replace an older feat, following the rules given at 4th level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 14th Level</div></div><div className="abEnd"><div className="box">You gain a bonus combat feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">You gain a bonus combat feat. You may also replace an older feat, following the rules given at 4th level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">You gain a bonus combat feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">You gain a bonus combat feat. You may also replace an older feat, following the rules given at 4th level.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-fighter-bravery-ex" data-hash-target><div className="box">Bravery (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain a +1 bonus on Will saves against fear.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">This bonus becomes +2.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">This bonus increases to +3.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 14th Level</div></div><div className="abEnd"><div className="box">This bonus becomes +4.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">This bonus increases to +5.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-fighter-armor-training-ex" data-hash-target><div className="box">Armor Training (Ex)</div><div className="flavor">You learn to be more maneuverable while wearing armor.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Whenever you wear armor, you reduce the armor check penalty by 1 (to a minimum of 0) and increase the maximum Dexterity bonus allowed by the armor by 1. You can also move at your normal speed while wearing medium armor.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">The penalty is now reduced by 2 (minimum 0) and the maximum Dex bonus is now increased by +2. You can also move at your normal speed while wearing heavy armor.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">The penalty is now reduced by 3 (minimum 0) and the maximum Dex bonus is now increased by +3.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">The penalty is now reduced by 4 (minimum 0) and the maximum Dex bonus is now increased by +4.</div></div></div></div>
<aside><p>Optionally, a fighter may forego these increases to pick up a specific <Link to="/ability/advanced_armor_training">advanced armor training</Link>, instead. You must make a choice at 3rd, 7th, 11th, and 15th levels, and the choice you make is permanent.</p>
</aside><div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-fighter-weapon-training-ex" data-hash-target><div className="box">Weapon Training (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Select one <Link to="/ability/weapon_groups">weapon group</Link>. Whenever you attack with a weapon from this group, you gain a +1 bonus on attack and damage rolls. You also add this bonus to any combat maneuver checks made with weapons from this group. This bonus also applies to your <Link to="/rule/cmd">CMD</Link> when defending against <Link to="/rule/disarm">disarm</Link> and <Link to="/rule/sunder">sunder</Link> attempts made against weapons from this group.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">You select a new weapon group and gain the +1 bonus when using weapons from that group. Your previously selected group's bonus increases to +2.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">You select a new weapon group and gain the +1 bonus when using weapons from that group. Your previously selected groups' bonuses increase to +2 and +3.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 17th Level</div></div><div className="abEnd"><div className="box">You select a new weapon group and gain the +1 bonus when using weapons from that group. Your previously selected groups' bonuses increase to +2, +3, and +4.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Bonuses granted from overlapping groups do not stack. Take the highest bonus granted for a weapon if it resides in two or more groups.</div></div></div></div>
<aside><p>Optionally, instead of selecting an additional fighter weapon group at 9th, 13th, and 17th level, a fighter can choose an <Link to="/ability/advanced_weapon_training">advanced weapon training</Link> option for one fighter weapon group that he previously selected. This choice must be made when the fighter gains the level, and the choice is permanent.</p>
</aside><div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-fighter-armor-mastery-ex" data-hash-target><div className="box">Armor Mastery (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 19th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain DR 5/- whenever you are wearing armor or using a shield.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-fighter-weapon-mastery-ex" data-hash-target><div className="box">Weapon Mastery (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Choose one weapon, such as the <Link to="/eq-weapon/longsword">longsword</Link>, <Link to="/eq-weapon/greataxe">greataxe</Link>, or <Link to="/eq-weapon/longbow">longbow</Link>. Any attacks made with that weapon automatically confirm all critical threats and have their damage multiplier increased by 1 (&times;2 becomes &times;3, for example). In addition, you cannot be disarmed while wielding a weapon of this type.</div></div></div></div>
<h3 id="class-fighter-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-fighter--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Old Dog, New Tricks (Ex)</td><td>At 20th level, the character shows that a true warrior always has one more surprise the enemy hasn't seen. The character gains four <Link to="/main/combat_feat">combat feats</Link>. This capstone is available to characters of any class that gains at least four bonus combat feats.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>Veteran of Endless War (Ex)</td><td>At 20th level, the fighter has seen more combat than entire platoons of soldiers put together. The bonuses granted by his armor training and weapon training increase by 2 each.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-fighter-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Aphorite:</strong> Add 1 to the fighter's CMD when resisting disarm or trip attempts.<sup><InnerLink showBacklink="backlink-class-fighter-ref-A-1" id="class-fighter-ref-A-1" data-hash-target to="class-fighter-A">1</InnerLink></sup></p>
<p><strong>Aquatic elf:</strong> Choose a weapon from the following list: rapier, short sword, trident, or any weapon with "elven" in its name. Gain a +1/2 bonus on critical hit confirmation rolls made while using that type of weapon (maximum bonus +4). This bonus does not stack with those gained through <Link to="/feat/critical_focus">Critical Focus</Link> and similar effects.<sup><InnerLink showBacklink="backlink-class-fighter-ref-B-1" id="class-fighter-ref-B-1" data-hash-target to="class-fighter-B">2</InnerLink></sup></p>
<p><strong>Boggard:</strong> Increase the hit points of the fighter's tongue by 1 and add 1/2 on all opposed Strength checks to prevent a creature from detaching the fighter's tongue.<sup><InnerLink showBacklink="backlink-class-fighter-ref-C-1" id="class-fighter-ref-C-1" data-hash-target to="class-fighter-C">3</InnerLink></sup></p>
<p><strong>Dhampir:</strong> Add a +2 bonus on rolls to stabilize when dying.<sup><InnerLink showBacklink="backlink-class-fighter-ref-D-1" id="class-fighter-ref-D-1" data-hash-target to="class-fighter-D">4</InnerLink></sup></p>
<p><strong>Drow:</strong> Choose the disarm or reposition combat maneuver. Add +1/3 to the fighter's CMB when attempting this maneuver (maximum bonus of +4).<sup><InnerLink showBacklink="backlink-class-fighter-ref-E-1" id="class-fighter-ref-E-1" data-hash-target to="class-fighter-E">5</InnerLink></sup></p>
<p><strong>Duergar:</strong> Add +1 to the fighter's CMD when resisting a bull rush or trip attempt.<sup><InnerLink showBacklink="backlink-class-fighter-ref-F-1" id="class-fighter-ref-F-1" data-hash-target to="class-fighter-F">6</InnerLink></sup></p>
<p><strong>Duskwalker:</strong> Add 2 to the fighter's Constitution score for the purpose of determining death from negative hit points.<sup><InnerLink showBacklink="backlink-class-fighter-ref-G-1" id="class-fighter-ref-G-1" data-hash-target to="class-fighter-G">7</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Add +1 to the fighter's CMD when resisting a bull rush or trip.<sup><InnerLink showBacklink="backlink-class-fighter-ref-H-1" id="class-fighter-ref-H-1" data-hash-target to="class-fighter-H">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-fighter-ref-I-1" id="class-fighter-ref-I-1" data-hash-target to="class-fighter-I">9</InnerLink></sup></p>
<p><strong>Elf:</strong> Add +1 to the fighter's CMD when resisting a disarm or sunder attempt.<sup><InnerLink showBacklink="backlink-class-fighter-ref-J-1" id="class-fighter-ref-J-1" data-hash-target to="class-fighter-J">10</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-fighter-ref-K-1" id="class-fighter-ref-K-1" data-hash-target to="class-fighter-K">11</InnerLink></sup></p>
<p><strong>Fetchling:</strong> Choose a slashing melee weapon. Add +1/2 to critical hit confirmation rolls made while using that weapon (maximum bonus of +4). This bonus does not stack with <Link to="/feat/critical_focus">Critical Focus</Link>.<sup><InnerLink showBacklink="backlink-class-fighter-ref-L-1" id="class-fighter-ref-L-1" data-hash-target to="class-fighter-L">12</InnerLink></sup></p>
<p><strong>Gillman:</strong> Add +1 to the fighter's CMD when resisting two combat maneuvers of the character's choice.<sup><InnerLink showBacklink="backlink-class-fighter-ref-M-1" id="class-fighter-ref-M-1" data-hash-target to="class-fighter-M">13</InnerLink></sup></p>
<p><strong>Gnome:</strong> Add +1 to the fighter's CMD when resisting a dirty trick or steal attempt.<sup><InnerLink showBacklink="backlink-class-fighter-ref-N-1" id="class-fighter-ref-N-1" data-hash-target to="class-fighter-N">14</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Add +1 to the fighter's CMD when resisting a disarm or overrun combat maneuver.<sup><InnerLink showBacklink="backlink-class-fighter-ref-O-1" id="class-fighter-ref-O-1" data-hash-target to="class-fighter-O">15</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-fighter-ref-P-1" id="class-fighter-ref-P-1" data-hash-target to="class-fighter-P">16</InnerLink></sup></p>
<p><strong>Halfling:</strong> Add +1 to the fighter's CMD when resisting a trip or grapple attempt.<sup><InnerLink showBacklink="backlink-class-fighter-ref-Q-1" id="class-fighter-ref-Q-1" data-hash-target to="class-fighter-Q">17</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-fighter-ref-R-1" id="class-fighter-ref-R-1" data-hash-target to="class-fighter-R">18</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Add a +2 bonus on rolls to stabilize when dying.<sup><InnerLink showBacklink="backlink-class-fighter-ref-S-1" id="class-fighter-ref-S-1" data-hash-target to="class-fighter-S">19</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-fighter-ref-T-1" id="class-fighter-ref-T-1" data-hash-target to="class-fighter-T">20</InnerLink></sup></p>
<p><strong>Half-orc:</strong> The fighter gains 1/2 point of DR/- against nonlethal damage (maximum DR 10/-).<sup><InnerLink showBacklink="backlink-class-fighter-ref-U-1" id="class-fighter-ref-U-1" data-hash-target to="class-fighter-U">21</InnerLink></sup></p>
<p><strong>Hobgoblin:</strong> Add a +1/2 circumstance bonus on critical hit confirmation rolls with a weapon of the fighter's choice (maximum bonus +4). This bonus does not stack with <Link to="/feat/critical_focus">Critical Focus</Link>.<sup><InnerLink showBacklink="backlink-class-fighter-ref-V-1" id="class-fighter-ref-V-1" data-hash-target to="class-fighter-V">22</InnerLink></sup></p>
<p><strong>Human:</strong> Add +1 to the fighter's CMD when resisting two combat maneuvers of the character's choice.<sup><InnerLink showBacklink="backlink-class-fighter-ref-W-1" id="class-fighter-ref-W-1" data-hash-target to="class-fighter-W">23</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-fighter-ref-X-1" id="class-fighter-ref-X-1" data-hash-target to="class-fighter-X">24</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-fighter-ref-Y-1" id="class-fighter-ref-Y-1" data-hash-target to="class-fighter-Y">25</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Add 1/3 to damage rolls the fighter makes with weapon attacks against an opponent that he is flanking or that is denied its Dexterity bonus to AC.<sup><InnerLink showBacklink="backlink-class-fighter-ref-Y-2" id="class-fighter-ref-Y-2" data-hash-target to="class-fighter-Y">25</InnerLink></sup></p>
<p><strong>Kobold:</strong> Add +1/2 to damage rolls the fighter makes with weapon attacks against an opponent he is flanking or an opponent that is denied its Dexterity bonus to AC.<sup><InnerLink showBacklink="backlink-class-fighter-ref-Z-1" id="class-fighter-ref-Z-1" data-hash-target to="class-fighter-Z">26</InnerLink></sup></p>
<p><strong>Nagaji:</strong> Add +1 to the fighter's CMD when resisting a grapple or trip attempt.<sup><InnerLink showBacklink="backlink-class-fighter-ref-1-1" id="class-fighter-ref-1-1" data-hash-target to="class-fighter-1">27</InnerLink></sup></p>
<p><strong>Orc:</strong> Add +2 to the fighter's Constitution score for the purpose of determining when he dies from negative hit points.<sup><InnerLink showBacklink="backlink-class-fighter-ref-2-1" id="class-fighter-ref-2-1" data-hash-target to="class-fighter-2">28</InnerLink></sup></p>
<p><strong>Oread:</strong> Add +1 to the fighter's CMD when resisting a bull rush or drag attempt.<sup><InnerLink showBacklink="backlink-class-fighter-ref-3-1" id="class-fighter-ref-3-1" data-hash-target to="class-fighter-3">29</InnerLink></sup></p>
<p><strong>Ratfolk:</strong> Add +1 to the fighter's CMD when resisting a bull rush or grapple attempt.<sup><InnerLink showBacklink="backlink-class-fighter-ref-4-1" id="class-fighter-ref-4-1" data-hash-target to="class-fighter-4">30</InnerLink></sup></p>
<p><strong>Strix:</strong> Add +1/4 to the attack roll bonus from the strix's hatred racial trait.<sup><InnerLink showBacklink="backlink-class-fighter-ref-5-1" id="class-fighter-ref-5-1" data-hash-target to="class-fighter-5">31</InnerLink></sup></p>
<p><strong>Tengu:</strong> Add +1 to the fighter's CMD when resisting a grapple or trip attempt.<sup><InnerLink showBacklink="backlink-class-fighter-ref-6-1" id="class-fighter-ref-6-1" data-hash-target to="class-fighter-6">32</InnerLink></sup></p>
<p><strong>Vanara:</strong> Add +1 to the fighter's CMD when resisting a reposition or trip attempt.<sup><InnerLink showBacklink="backlink-class-fighter-ref-7-1" id="class-fighter-ref-7-1" data-hash-target to="class-fighter-7">33</InnerLink></sup></p>
<p><strong>Wayang:</strong> Add a +1/4 bonus on Stealth checks and on weapon damage rolls against flat-footed opponents.<sup><InnerLink showBacklink="backlink-class-fighter-ref-8-1" id="class-fighter-ref-8-1" data-hash-target to="class-fighter-8">34</InnerLink></sup></p>
</div>
<h3 id="class-fighter-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-fighter/aerial_assaulter">Aerial Assaulter</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Bravery; 2nd, 12th-level Bonus Feat; Armor Mastery; Weapon Mastery</p><p>Aerial assaulters leap to great heights and create higher ground where there is none.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/airborne_ambusher">Airborne Ambusher</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; Class Skills; Bravery; Weapon Training 1-4</p><p>(Strix Only) Driven by suspicion and hatred, strix doggedly guard their territories, making deadly use of their flight.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/aldori_defender">Aldori Defender</Link></p><p><strong>Modifies or Replaces:</strong> Armor Training; 6th, 8th, 10th-level Bonus Feat</p><p>Trained warrior in the art of the Aldori dueling sword.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/aquanaut">Aquanaut</Link></p><p><strong>Modifies or Replaces:</strong> Armor Proficiency; Bravery; Armor Training 1-4; Armor Mastery; Weapon Training 1-4</p><p>Aquanaut fighters master the movement of water, using its flow to their advantage in combat.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/archer">Archer</Link></p><p><strong>Modifies or Replaces:</strong> Bravery; Armor Training 1-4; Weapon Training 1-4; Armor Mastery</p><p>The archer is dedicated to the careful mastery of the bow, perfecting his skills with years of practice.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/armiger">Armiger</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Skill Points; 1st, 10th-level Bonus Feats; Bravery</p><p>Fighters who focus their training to become Hellknights.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/armor_master">Armor Master</Link></p><p><strong>Modifies or Replaces:</strong> Bravery; Weapon Training 1-4; Armor Mastery; Weapon Mastery</p><p>While many fighters hone their weapon skills to a point of inescapable grace and lethality, there are those who live under the maxim that a good offense can be accomplished though an impenetrable defense.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/brawler">Brawler</Link></p><p><strong>Modifies or Replaces:</strong> Armor Training 1-4; Weapon Training 1-4; Armor Mastery, Weapon Mastery</p><p>All melee is up close and personal, but some warriors bring it as close as they can get.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/cad">Cad</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; Bravery; Armor Training 1-4; Weapon Training 1-4; Weapon Mastery</p><p>In combat, most fighters have some sort of code of honor. Some believe that one should not kick enemies when they are down, or should limit use of other such dirty tricks to the most dire of circumstances. The cad places no such limitations on himself.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/calistrian_hunter">Calistrian Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; Class Skills; Bravery; Weapon Training 1-4; Weapon Mastery</p><p>Like a bounty hunter following his own rules, a Calistrian hunter tracks down elusive prey using his wits and delivers long-overdue retribution while easily ignoring his own injuries thanks to the joy he receives from a job well done.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/cavern_sniper">Cavern Sniper</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; 1st, 4th-level Fighter Bonus Feats; Bravery; Weapon Training 1-4; Weapon Mastery</p><p>(Drow Only) Perfectly at home in the darkness, the cavern sniper capitalizes on stealth and ranged attacks imbued with his spell-like abilities to harass his opponents.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/child_of_acavna_and_amaznen">Child of Acavna and Amaznen</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; Skills; 1st, 2nd, 8th, 12th, 16th, and 20th-level Combat Feats; Armor Training; Weapon Training</p><p>The child of Acavna and Amaznen has trained in the nearly forgotten arts of Azlant passed down by Aroden, which combine martial prowess with elementary wizardry. Inspired by the deities Aroden once worshiped long ago, children of Acavna and Amaznen strive to understand the dangers of the world and overcome them with knowledge and strength of arms.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/corsair">Corsair</Link></p><p><strong>Modifies or Replaces:</strong> 2nd-level Bonus Feat; Armor Training; 6th-level Bonus Feat</p><p>A corsair is a pirate who focuses on shipboard combat, relying on his strength of arms over his agility.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/crossbowman">Crossbowman</Link></p><p><strong>Modifies or Replaces:</strong> Armor Training 1-4; Weapon Training 1-4; Armor Mastery</p><p>The crossbowman has perfected the deadly use of the crossbow, a simple but cruelly efficient weapon, as a craftsman mastering a lethal tool.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/cyber_soldier">Cyber-Soldier</Link></p><p><strong>Modifies or Replaces:</strong> Weapon Training 1; Armor Training 2 and 4; Armor Mastery</p><p>Cyber-soldiers replace fallible flesh with precision-crafted machinery.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/dirty_fighter">Dirty Fighter</Link></p><p><strong>Modifies or Replaces:</strong> Bravery; Weapon Training 1-4</p><p>(Orc Only) The dirty fighter laughs at concepts like honor and fair play. He cares only for victory, no matter how he achieves it, and spends as much time mastering sneaky combat maneuvers as he does drilling with weapons or learning how to wear armor.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/dragonheir_scion">Dragonheir Scion</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; 1st, 4th, 6th-level Bonus Feats; Bravery; Armor Training; Armor Mastery; Weapon Mastery</p><p>Dragonheir scions are the martially inclined humanoid descendants of those influenced by draconic power.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/dragoon">Dragoon</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; 1st-level Bonus Feat; Weapon Training 1-4; Armor Training 2-4; Weapon Mastery</p><p>These gallant lancers serve in the vanguard of many armies or as knights-errant.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/drill_sergeant">Drill Sergeant</Link></p><p><strong>Modifies or Replaces:</strong> Bravery; Weapon Training 1-4</p><p>Drill sergeants excel at training other combatants in fighting techniques.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/druman_blackjacket">Druman Blackjacket</Link></p><p><strong>Modifies or Replaces:</strong> Bravery; 4th, 8th, 12th, 16th-level Bonus Feats</p><p>Known as the Blackjackets, the elite soldiers of Druma are and always have been mercenaries rather than a standing army.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/eldritch_guardian">Eldritch Guardian</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; 1st and 2nd-level Bonus Feats; Bravery</p><p>Eldritch guardians are trained to detect and give warning about magic threats to the people and places they protect.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/foehammer">Foehammer</Link></p><p><strong>Modifies or Replaces:</strong> Armor Training 1-4; Weapon Training 2-4; Armor Mastery; Weapon Mastery</p><p>(Dwarf Only) While the axe is the most famous dwarven weapon, the hammer is at the heart of dwarves' heritage as forgemasters and warriors alike.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/free_hand_fighter">Free Hand Fighter</Link></p><p><strong>Modifies or Replaces:</strong> Bravery; Armor Training 1-4; Weapon Training 1-4; Armor Mastery</p><p>The free hand fighter specializes in the delicate art of handling a single weapon in one hand while using his free hand to balance, block, tip, and distract his opponents.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/gladiator">Gladiator</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; Bravery</p><p>The gladiator is both a cunning warrior and a consummate performer, knowing life and death are balanced not only on a sword's edge, but also on the cheers or jeers of the crowd.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/gloomblade">Gloomblade</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Armor Proficiencies; Armor Training; Weapon Training</p><p>The Shadow Plane's substance is legendary for its versatility. In shadow-shrouded lands, secretive martial practitioners long ago learned to shape supernatural weapons from ribbons of pure darkness.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/high_guardian">High Guardian</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; 1st, 2nd, 4th-level Bonus Feats; Bravery</p><p>High guardians epitomize personal devotion, serving as the shield that protects his lord from the myriad dangers around every corner.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/lore_warden">Lore Warden</Link></p><p><strong>Modifies or Replaces:</strong> Armor Proficiencies; Bravery; 2nd-level Bonus Feat; Armor Training; Armor Mastery</p><p>Lore wardens are fighters who benefit from learning to outsmart and outmaneuver their foes rather than just overpower them.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/lore_warden_pfs_field_guide">Lore Warden (PFS Field Guide)</Link></p><p><strong>Modifies or Replaces:</strong> Medium Armor, Heavy Armor, and Shield Proficiency; Bravery 1; Armor Training 1-4; Armor Mastery</p><p>Lore wardens are fighters who benefit from learning to outsmart and outmaneuver their foes rather than just overpower them.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/martial_master">Martial Master</Link></p><p><strong>Modifies or Replaces:</strong> Weapon Training; Weapon Mastery</p><p>There are those who learn the fighting arts though countless hours of repetition and training, while others seem to pick up new stances and forms as if they were born to them.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/mobile_fighter">Mobile Fighter</Link></p><p><strong>Modifies or Replaces:</strong> Bravery; Weapon Training 1-4; Armor Training 3-4; Weapon Mastery</p><p>Where some fighters focus on strength and raw power, the mobile fighter relies on swiftness and mobility, gliding across the battlefield like a steel whirlwind and leaving destruction in his wake.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/molthuni_defender">Molthuni Defender</Link></p><p><strong>Modifies or Replaces:</strong> Armor Training</p><p>Taking advantage of their weighty armor, Molthuni defenders can hold back an onslaught of enemies intent on breaking through their line.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/mutation_warrior">Mutation Warrior</Link></p><p><strong>Modifies or Replaces:</strong> Armor Training 1-4; Armor Mastery</p><p>While most fighters rely on physical fitness and rigorous training to achieve martial superiority, a few prefer to create and imbibe dangerous concoctions that mutate them into fearsome creatures.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/opportunist">Opportunist</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Bravery; 1st, 4th, 8th, 12th, 16th, 20th-level Bonus Feat; Weapon Training 1</p><p>(Ratfolk archetype) Opportunists believe every battle is one of wits rather than arms.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/pack_mule">Pack Mule</Link></p><p><strong>Modifies or Replaces:</strong> Skill Ranks; 1st-level Bonus Feat; Bravery; Armor Training 1-4; Armor Mastery</p><p>Pack mules carry heavy loads with ease and small packages with discretion.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/phalanx_soldier">Phalanx Soldier</Link></p><p><strong>Modifies or Replaces:</strong> Bravery; Armor Training 1-4; Weapon Training 1-4; Weapon Mastery</p><p>The phalanx soldier specializes in defensive tactics, using his shield to guard himself and his allies and forming a shield wall like an unbreakable anvil against which his enemies break.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/polearm_master">Polearm Master</Link></p><p><strong>Modifies or Replaces:</strong> Bravery; Armor Training 1-4; Weapon Training 1-4; Armor Mastery</p><p>The polearm master is schooled in the ancient wisdom that enemies are best faced at the end of long striking pole.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/qadira_dawnflower_dervish">Qadira: Dawnflower Dervish</Link></p><p><strong>Modifies or Replaces:</strong> Armor Training 1-4</p><p>Spinning warrior dervish of Sarenrae, wielding a scimitar with devastating consequences.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/relic_master">Relic Master</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Armor Training; Weapon Training; Armor Mastery</p><p>Commonly trained in the well-funded temples of Osirion or Qadira, the relic master is skilled in magic item mastery.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/roughrider">Roughrider</Link></p><p><strong>Modifies or Replaces:</strong> Bravery; Armor Training 1-4; Weapon Training 1-4; Armor Mastery</p><p>Roughriders study and practice the fine points of mounted combat, drilling endlessly with warbeasts - from noble thoroughbreds to trained monsters - to form a perfect synergy between rider and steed.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/savage_warrior">Savage Warrior</Link></p><p><strong>Modifies or Replaces:</strong> Bravery; Weapon Training 1-4; Weapon Mastery</p><p>Warriors' might is not measured only by their skill with steel, but also by their ability to inflict death with fang and claw, horn and hoof, and every exotic appendage the natural and unnatural world has to offer.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/scrapper">Scrapper</Link></p><p><strong>Modifies or Replaces:</strong> Armor Training; Weapon Training 1</p><p>Scrappers are adept at collecting the leftovers from their enemy's armor and using these scraps to improve their own armor.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/seasoned_commander">Seasoned Commander</Link></p><p><strong>Modifies or Replaces:</strong> Armor Proficiencies; Skill Ranks per Level; Class Skills; 1st-level Bonus Feat; Armor Training 1, 3, 4; Weapon Training</p><p>The seasoned commander excels at leading troops through inspiration and the use of unit tactics.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/sensate">Sensate</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Weapon/Armor Proficiencies; Bravery; Armor Training 1-4; Weapon Training 2-4; Armor Mastery; Weapon Mastery</p><p>A sensate perceives battle through senses beyond mortal ken, anticipating his opponents' movements before they even begin to act.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/shielded_fighter">Shielded Fighter</Link></p><p><strong>Modifies or Replaces:</strong> Armor Training 1-4; Weapon Training 1-4; Armor Mastery; Weapon Mastery</p><p>A shielded fighter focuses on both offense and defense, blending weapon and shield in perfect balance to impede his enemies while delivering deadly blows, and even turning the shield itself into a formidable weapon.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/siegebreaker">Siegebreaker</Link></p><p><strong>Modifies or Replaces:</strong> 1st, 2nd, 4th, and 8th-level Bonus Feats; Bravery; Weapon Mastery</p><p>The siegebreaker is trained to break through lines of enemy soldiers.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/skirmisher">Skirmisher</Link></p><p><strong>Modifies or Replaces:</strong> Armor Proficiencies; Class Skills; Skill Ranks; 2nd-level Bonus Feat; Bravery; Armor Training; Armor Mastery</p><p>Not all battles are fought between armies; sometimes, a settlement or nation faces a threat too dire to fight in the open. In order to repel a much larger enemy force, some soldiers must abandon equipment and tactics designed for open-field warfare and instead rely on ambushes, hit-and-run tactics, and sabotage to whittle down their enemies' strength and morale.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/spear_fighter">Spear Fighter</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Armor Proficiencies; Bravery; Armor Training; Armor Mastery; Weapon Training; Weapon Mastery</p><p>One of the oldest spear-fighting styles originates in Vudra, where many martial arts traditions consider the spear to be the ultimate weapon.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/steelbound_fighter">Steelbound Fighter</Link></p><p><strong>Modifies or Replaces:</strong> 1st level Bonus Feat; Weapon Training 1-4</p><p>A fighter who has impressive martial resolve and technique with a specific weapon as the result of a powerful relationship a similar weapon had with one of his ancestors.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/swarm_fighter">Swarm Fighter</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; 1st, 2nd, 6th, 10th, 14th, 18th-level Bonus Feats; Bravery; Weapon Training 1-4; Weapon Mastery</p><p>(Kobold Only) Scuttling between the legs of friend and foe alike, the swarm fighter is an unshakable combatant.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/tactician">Tactician</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; 1st-level Bonus Feat; Bravery; Weapon Training 1; Armor Training 3, 4</p><p>While many fighters focus on the fundamentals of melee and ranged combat, there are those who are trained to view the bigger picture on the battlefield.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/taldor_rondelero_duelist">Taldor: Rondelero Duelist</Link></p><p><strong>Modifies or Replaces:</strong> Armor Training 1-3, Bravery, Weapon Training 1</p><p>One who has perfected the art of rondelero, fighting with falcata and buckler.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/thunderstriker">Thunderstriker</Link></p><p><strong>Modifies or Replaces:</strong> Armor Training 1-4; Weapon Training 3-4; Armor Mastery</p><p>The thunderstriker adopts an unusual fighting style, gripping a heavy weapon with both hands and switching to a defensive posture with weapon and buckler, lashing out with the shield with surprising speed and power.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/titan_fighter">Titan Fighter</Link></p><p><strong>Modifies or Replaces:</strong> 1st-level Bonus Feat; Armor Training; Weapon Training</p><p>Titan fighters make use of enormous weapons others can barely lift.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/tower_shield_specialist">Tower Shield Specialist</Link></p><p><strong>Modifies or Replaces:</strong> Bravery; Weapon Training 1-4; Weapon Mastery</p><p>Many fighters believe the tower shield is a tool suitable only for troops on the battlefield, claiming it is too large and bulky to use in skirmishes or within dungeon corridors.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/trench_fighter">Trench Fighter</Link></p><p><strong>Modifies or Replaces:</strong> Armor Training 1-4</p><p>Advances in technology have made archaic armors obsolete by the twentieth century, and modern soldiers concentrate training on firearms and swift feet.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/tribal_fighter">Tribal Fighter</Link></p><p><strong>Modifies or Replaces:</strong> 1st-level Bonus Feat; Weapon Training</p><p>A tribal fighter knows that it is not the weapon that matters but the hand that wields it. Instead of encasing himself in metal armor like the soldiers fighting and dying for the so-called civilized lands do, he prefers to wear something he or his ancestors have killed.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/two_handed_fighter">Two-Handed Fighter</Link></p><p><strong>Modifies or Replaces:</strong> Bravery; Armor Training 1-4; Armor Mastery</p><p>Some fighters focus their efforts on finding the biggest, heaviest, most imposing weapon they can find and training to manage and harness the weight of their massive weapons for maximum impact.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/two_weapon_warrior">Two-Weapon Warrior</Link></p><p><strong>Modifies or Replaces:</strong> Armor Training 1-4; Weapon Training 1-4; Armor Mastery</p><p>Trained under great masters who preached the simple truth that two are better than one when it comes to weapons, the two-weapon warrior is a terror when his hands are full.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/unarmed_fighter">Unarmed Fighter</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; 1st-level Bonus Feat; Bravery; Armor Training 1-4; Weapon Training 1-4; 8th, 12th-level Bonus Feat; Armor Mastery; Weapon Mastery</p><p>The unarmed fighter picks up a weapon only rarely, and when he does, he prefers the weapons of the monk.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/unbreakable">Unbreakable</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; 1st-level Bonus Feat; Bravery; Weapon Training 1-4; Armor Training 3-4; Weapon Mastery</p><p>The unbreakable is a warrior of indomitable will, unstoppable and implacable once he has set his mind upon a course of action.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/ustalavic_duelist">Ustalavic Duelist</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; 1st-level Bonus Feat; Weapon Training 1-4</p><p>The University of Lepidstadt has developed a reputation for churning out fearsome duelists. At the end of each academic year, the students all gather together and duel one another with light blades. Each student duels one opponent after another until he is marked on the cheek by an adversary's blade. These "Lepidstadt scars" are recognized throughout the Inner Sea region and beyond as marks of their prowess. The Lepidstadt Style is one of fluid motion and precise thrusts.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/varisian_free_style_fighter">Varisian Free-Style Fighter</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; 1st, 6th, 10th, and 12th-level Bonus Feats; Weapon Training; Weapon Mastery; Armor Training</p><p>Free-style fighters are most common in Varisia, where their training - with multiple teachers, or perhaps instruction in the anything-goes mentality of the Price of Freedom school in Kaer Maga - allows them to blend fighting styles into a greater whole.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/venomblade">Venomblade</Link></p><p><strong>Modifies or Replaces:</strong> 1st, 6th, 12th-level Bonus Feat; Bravery</p><p>(Nagaji) The venomblade has learned to take full advantage of his toxic spittle, blinding his targets and then rushing in to cut them down where they stand.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/viking">Viking</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; Bravery; Armor Training; Weapon Training; Bonus Feats</p><p>Vikings seek to raid "softer societies" and return with their longships filled with plunder. A viking strikes fear into the heart of her foes, and in battle she can fly into a terrible rage.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/warlord">Warlord</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Weapon and Armor Proficiency; Armor Training; Armor Mastery</p><p>Honorable, fearless experts in gun and blade, warlords eschew armor as impractical to their harsh and often desert-like environment</p></div>
<div className="archetype"><p><Link to="/arc-fighter/weapon_bearer_squire">Weapon Bearer Squire</Link></p><p><strong>Modifies or Replaces:</strong> 1st-level Bonus Feat; 2nd-level Bonus Feat; Armor Training 1</p><p>The weapon bearer squire ensures her knight is equipped for any task.</p></div>
<div className="archetype"><p><Link to="/arc-fighter/weapon_master">Weapon Master</Link></p><p><strong>Modifies or Replaces:</strong> Bravery; Armor Training 1-4; Weapon Training 1-4; Armor Mastery</p><p>Devoted to the perfection of a single weapon, the weapon master's meditations upon his favored weapon border on the obsessive, but none can deny his consummate skill.</p></div>
<h3 id="class-fighter-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"fighter archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Armor Proficiency"},{"header":"Armor Training"},{"header":"Armor Training 1"},{"header":"Armor Training 2"},{"header":"Armor Training 3"},{"header":"Armor Training 4"},{"header":"Armor Mastery"},{"header":"Bonus Feats"},{"header":"1st-level Bonus Feat"},{"header":"2nd-level Bonus Feat"},{"header":"4th-level Bonus Feat"},{"header":"6th-level Bonus Feat"},{"header":"8th-level Bonus Feat"},{"header":"10th-level Bonus Feat"},{"header":"12th-level Bonus Feat"},{"header":"14th-level Bonus Feat"},{"header":"16th-level Bonus Feat"},{"header":"18th-level Bonus Feat"},{"header":"20th-level Bonus Feat"},{"header":"Bravery"},{"header":"Class Skills"},{"header":"Skill Ranks"},{"header":"Weapon Training"},{"header":"Weapon Training 1"},{"header":"Weapon Training 2"},{"header":"Weapon Training 3"},{"header":"Weapon Training 4"},{"header":"Weapon Mastery"},{"header":"Weapon/Armor Proficiency"}],"data":[["‹arc-fighter/Aerial Assaulter›",null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,"X",null,null,null,null,"X","X",null,null,null,null,null,null,"X",null],["‹arc-fighter/Airborne Ambusher›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,"X",null,null,null,null,null,"X"],["‹arc-fighter/Aldori Defender›",null,"X",null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-fighter/Aquanaut›","X","X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null],["‹arc-fighter/Archer›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null],["‹arc-fighter/Armiger›",null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null],["‹arc-fighter/Armor Master›",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,"X",null],["‹arc-fighter/Brawler›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null],["‹arc-fighter/Cad›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,"X","X"],["‹arc-fighter/Calistrian Hunter›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,"X",null,null,null,null,"X","X"],["‹arc-fighter/Cavern Sniper›",null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,"X","X",null,"X",null,null,null,null,"X",null],["‹arc-fighter/Child of Acavna and Amaznen›",null,"X",null,null,null,null,null,null,"X","X",null,null,"X",null,"X",null,"X",null,"X",null,"X",null,"X",null,null,null,null,null,"X"],["‹arc-fighter/Corsair›",null,"X",null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-fighter/Crossbowman›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-fighter/Cyber-Soldier›",null,null,null,"X",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null],["‹arc-fighter/Dirty Fighter›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null],["‹arc-fighter/Dragonheir Scion›",null,"X",null,null,null,null,"X",null,"X",null,"X","X",null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,"X",null],["‹arc-fighter/Dragoon›",null,null,null,"X","X","X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X"],["‹arc-fighter/Drill Sergeant›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null],["‹arc-fighter/Druman Blackjacket›",null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,"X",null,"X",null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-fighter/Eldritch Guardian›",null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null],["‹arc-fighter/Foehammer›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X","X",null],["‹arc-fighter/Free Hand Fighter›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null],["‹arc-fighter/Gladiator›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X"],["‹arc-fighter/Gloomblade›","X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null],["‹arc-fighter/High Guardian›",null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null],["‹arc-fighter/Lore Warden›","X","X",null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-fighter/Lore Warden (PFS Field Guide)›","X","X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-fighter/Martial Master›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null],["‹arc-fighter/Mobile Fighter›",null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,"X",null],["‹arc-fighter/Molthuni Defender›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-fighter/Mutation Warrior›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-fighter/Opportunist›",null,null,null,null,null,null,null,null,"X",null,"X",null,"X",null,"X",null,"X",null,"X","X","X",null,null,"X",null,null,null,null,null],["‹arc-fighter/Pack Mule›",null,"X",null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null],["‹arc-fighter/Phalanx Soldier›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,"X",null],["‹arc-fighter/Polearm Master›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null],["‹arc-fighter/Qadira: Dawnflower Dervish›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-fighter/Relic Master›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null],["‹arc-fighter/Roughrider›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null],["‹arc-fighter/Savage Warrior›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,"X",null],["‹arc-fighter/Scrapper›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null],["‹arc-fighter/Seasoned Commander›","X",null,"X",null,"X","X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null],["‹arc-fighter/Sensate›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,"X","X","X","X","X"],["‹arc-fighter/Shielded Fighter›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null],["‹arc-fighter/Siegebreaker›",null,null,null,null,null,null,null,null,"X","X","X",null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null],["‹arc-fighter/Skirmisher›","X","X",null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null],["‹arc-fighter/Spear Fighter›","X","X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,"X",null,null,null,null,"X",null],["‹arc-fighter/Steelbound Fighter›",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-fighter/Swarm Fighter›",null,null,null,null,null,null,null,null,"X","X",null,"X",null,"X",null,"X",null,"X",null,"X",null,null,"X",null,null,null,null,"X","X"],["‹arc-fighter/Tactician›",null,null,null,null,"X","X",null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,"X"],["‹arc-fighter/Taldor: Rondelero Duelist›",null,null,"X","X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null],["‹arc-fighter/Thunderstriker›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null],["‹arc-fighter/Titan Fighter›",null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-fighter/Tower Shield Specialist›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,"X",null],["‹arc-fighter/Trench Fighter›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-fighter/Tribal Fighter›",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-fighter/Two-Handed Fighter›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-fighter/Two-Weapon Warrior›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-fighter/Unarmed Fighter›",null,"X",null,null,null,null,"X",null,"X",null,null,null,"X",null,"X",null,null,null,null,"X",null,null,"X",null,null,null,null,"X","X"],["‹arc-fighter/Unbreakable›",null,null,null,null,"X","X",null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,"X","X"],["‹arc-fighter/Ustalavic Duelist›",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X"],["‹arc-fighter/Varisian Free-Style Fighter›",null,"X",null,null,null,null,null,null,"X",null,null,"X",null,"X","X",null,null,null,null,null,"X",null,"X",null,null,null,null,"X",null],["‹arc-fighter/Venomblade›",null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-fighter/Viking›",null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,"X"],["‹arc-fighter/Warlord›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X"],["‹arc-fighter/Weapon Bearer Squire›",null,null,"X",null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-fighter/Weapon Master›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-fighter-label">Footnotes</h3>
<ol>
<li id="class-fighter-A">
<p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 15</Link> <InnerLink id="backlink-class-fighter-ref-A-1" data-hash-target to="class-fighter-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-fighter-B">
<p><Link to="/source/blood_of_the_sea">Blood of the Sea pg. 5</Link> <InnerLink id="backlink-class-fighter-ref-B-1" data-hash-target to="class-fighter-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-fighter-C">
<p><Link to="/source/monster_codex">Monster Codex pg. 8</Link> <InnerLink id="backlink-class-fighter-ref-C-1" data-hash-target to="class-fighter-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-fighter-D">
<p><Link to="/source/advanced_race_guide">Advanced Race Guide pg. 98</Link> <InnerLink id="backlink-class-fighter-ref-D-1" data-hash-target to="class-fighter-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-fighter-E">
<p>Advanced Race Guide pg. 104 <InnerLink id="backlink-class-fighter-ref-E-1" data-hash-target to="class-fighter-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-fighter-F">
<p>Advanced Race Guide pg. 186 <InnerLink id="backlink-class-fighter-ref-F-1" data-hash-target to="class-fighter-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-fighter-G">
<p>Plane-Hopper's Handbook pg. 17 <InnerLink id="backlink-class-fighter-ref-G-1" data-hash-target to="class-fighter-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-fighter-H">
<p>Advanced Race Guide pg. 13 <InnerLink id="backlink-class-fighter-ref-H-1" data-hash-target to="class-fighter-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-fighter-I">
<p><Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 11</Link> <InnerLink id="backlink-class-fighter-ref-I-1" data-hash-target to="class-fighter-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-fighter-J">
<p>Advanced Race Guide pg. 23 <InnerLink id="backlink-class-fighter-ref-J-1" data-hash-target to="class-fighter-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
<li id="class-fighter-K">
<p>Advanced Player's Guide pg. 13 <InnerLink id="backlink-class-fighter-ref-K-1" data-hash-target to="class-fighter-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
<li id="class-fighter-L">
<p><Link to="/source/blood_of_shadows">Blood of Shadows pg. 7</Link> <InnerLink id="backlink-class-fighter-ref-L-1" data-hash-target to="class-fighter-ref-L-1" aria-label="Back to reference L-1">↩</InnerLink></p>
</li>
<li id="class-fighter-M">
<p>Advanced Race Guide pg. 188 <InnerLink id="backlink-class-fighter-ref-M-1" data-hash-target to="class-fighter-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink></p>
</li>
<li id="class-fighter-N">
<p>Advanced Race Guide pg. 33 <InnerLink id="backlink-class-fighter-ref-N-1" data-hash-target to="class-fighter-ref-N-1" aria-label="Back to reference N-1">↩</InnerLink></p>
</li>
<li id="class-fighter-O">
<p>Advanced Race Guide pg. 43 <InnerLink id="backlink-class-fighter-ref-O-1" data-hash-target to="class-fighter-ref-O-1" aria-label="Back to reference O-1">↩</InnerLink></p>
</li>
<li id="class-fighter-P">
<p>Advanced Player's Guide pg. 17 <InnerLink id="backlink-class-fighter-ref-P-1" data-hash-target to="class-fighter-ref-P-1" aria-label="Back to reference P-1">↩</InnerLink></p>
</li>
<li id="class-fighter-Q">
<p>Advanced Race Guide pg. 63 <InnerLink id="backlink-class-fighter-ref-Q-1" data-hash-target to="class-fighter-ref-Q-1" aria-label="Back to reference Q-1">↩</InnerLink></p>
</li>
<li id="class-fighter-R">
<p>Advanced Player's Guide pg. 21 <InnerLink id="backlink-class-fighter-ref-R-1" data-hash-target to="class-fighter-ref-R-1" aria-label="Back to reference R-1">↩</InnerLink></p>
</li>
<li id="class-fighter-S">
<p>Advanced Race Guide pg. 53 <InnerLink id="backlink-class-fighter-ref-S-1" data-hash-target to="class-fighter-ref-S-1" aria-label="Back to reference S-1">↩</InnerLink></p>
</li>
<li id="class-fighter-T">
<p>Advanced Player's Guide pg. 19 <InnerLink id="backlink-class-fighter-ref-T-1" data-hash-target to="class-fighter-ref-T-1" aria-label="Back to reference T-1">↩</InnerLink></p>
</li>
<li id="class-fighter-U">
<p><Link to="/source/horror_adventures">Horror Adventures pg. 40</Link> <InnerLink id="backlink-class-fighter-ref-U-1" data-hash-target to="class-fighter-ref-U-1" aria-label="Back to reference U-1">↩</InnerLink></p>
</li>
<li id="class-fighter-V">
<p>Advanced Race Guide pg. 121 <InnerLink id="backlink-class-fighter-ref-V-1" data-hash-target to="class-fighter-ref-V-1" aria-label="Back to reference V-1">↩</InnerLink></p>
</li>
<li id="class-fighter-W">
<p>Advanced Race Guide pg. 73 <InnerLink id="backlink-class-fighter-ref-W-1" data-hash-target to="class-fighter-ref-W-1" aria-label="Back to reference W-1">↩</InnerLink></p>
</li>
<li id="class-fighter-X">
<p>Advanced Player's Guide pg. 23 <InnerLink id="backlink-class-fighter-ref-X-1" data-hash-target to="class-fighter-ref-X-1" aria-label="Back to reference X-1">↩</InnerLink></p>
</li>
<li id="class-fighter-Y">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-fighter-ref-Y-1" data-hash-target to="class-fighter-ref-Y-1" aria-label="Back to reference Y-1">↩</InnerLink> <InnerLink id="backlink-class-fighter-ref-Y-2" data-hash-target to="class-fighter-ref-Y-2" aria-label="Back to reference Y-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-fighter-Z">
<p>Advanced Race Guide pg. 133 <InnerLink id="backlink-class-fighter-ref-Z-1" data-hash-target to="class-fighter-ref-Z-1" aria-label="Back to reference Z-1">↩</InnerLink></p>
</li>
<li id="class-fighter-1">
<p>Advanced Race Guide pg. 196 <InnerLink id="backlink-class-fighter-ref-1-1" data-hash-target to="class-fighter-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="class-fighter-2">
<p>Advanced Race Guide pg. 139 <InnerLink id="backlink-class-fighter-ref-2-1" data-hash-target to="class-fighter-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="class-fighter-3">
<p>Advanced Race Guide pg. 145 <InnerLink id="backlink-class-fighter-ref-3-1" data-hash-target to="class-fighter-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
<li id="class-fighter-4">
<p>Advanced Race Guide pg. 151 <InnerLink id="backlink-class-fighter-ref-4-1" data-hash-target to="class-fighter-ref-4-1" aria-label="Back to reference 4-1">↩</InnerLink></p>
</li>
<li id="class-fighter-5">
<p>Advanced Race Guide pg. 200 <InnerLink id="backlink-class-fighter-ref-5-1" data-hash-target to="class-fighter-ref-5-1" aria-label="Back to reference 5-1">↩</InnerLink></p>
</li>
<li id="class-fighter-6">
<p>Advanced Race Guide pg. 163 <InnerLink id="backlink-class-fighter-ref-6-1" data-hash-target to="class-fighter-ref-6-1" aria-label="Back to reference 6-1">↩</InnerLink></p>
</li>
<li id="class-fighter-7">
<p>Advanced Race Guide pg. 206 <InnerLink id="backlink-class-fighter-ref-7-1" data-hash-target to="class-fighter-ref-7-1" aria-label="Back to reference 7-1">↩</InnerLink></p>
</li>
<li id="class-fighter-8">
<p>Blood of Shadows pg. 11 <InnerLink id="backlink-class-fighter-ref-8-1" data-hash-target to="class-fighter-ref-8-1" aria-label="Back to reference 8-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _hunter = {hasJL:true,title: "Hunter", jsx: <><div className="jumpList" id="class-hunter-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-hunter-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-hunter-chaotic-evil-good-and-lawful-spells">Aligned Spells</InnerLink></li><li><InnerLink toTop to="class-hunter-animal-companion-ex">Animal Companion</InnerLink></li><li><InnerLink toTop to="class-hunter-animal-focus-su">Animal Focus</InnerLink></li><li><InnerLink toTop to="class-hunter-wild-empathy-ex">Wild Empathy</InnerLink></li><li><InnerLink toTop to="class-hunter-precise-companion-ex">Precise Companion and Track</InnerLink></li><li><InnerLink toTop to="class-hunter-teamwork-feat">Teamwork and Tactics</InnerLink></li><li><InnerLink toTop to="class-hunter-improved-empathic-link-su">Improved Empathic Link</InnerLink></li><li><InnerLink toTop to="class-hunter-woodland-stride-ex">Woodland Stride</InnerLink></li><li><InnerLink toTop to="class-hunter-bonus-tricks-ex">Bonus Tricks</InnerLink></li><li><InnerLink toTop to="class-hunter-second-animal-focus-su">Second Animal Focus</InnerLink></li><li><InnerLink toTop to="class-hunter-swift-tracker-ex">Swift Tracker</InnerLink></li><li><InnerLink toTop to="class-hunter-raise-animal-companion-sp">Raise Animal Companion</InnerLink></li><li><InnerLink toTop to="class-hunter-speak-with-master-ex">Speak with Master</InnerLink></li><li><InnerLink toTop to="class-hunter-greater-empathic-link-su">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-hunter-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-hunter-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-hunter-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-hunter-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-hunter-hunter">Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 26</Link></p>
<p>Hunters are warriors of the wilds that have forged close bonds with trusted animal companions. They focus their tactics on fighting alongside their companion animals as a formidable team of two. Able to cast a wide variety of nature spells and take on the abilities and attributes of beasts, hunters magically improve both themselves and their animal companions.</p>
<p><strong>Role:</strong> Hunters can adapt their tactics to many kinds of opponents, and cherish their highly trained animal companions. As a team, the hunter and her companion can react to danger with incredible speed, making them excellent scouts, explorers, and saboteurs.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any neutral</span><table className="basic alignment"><tbody><tr><td>LG</td><td data-lit>LN</td><td>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td>CG</td><td data-lit>CN</td><td>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Parent Class(es)</th><td colSpan={2}><Link to="/class/druid">Druid</Link> and <Link to="/class/ranger">ranger</Link></td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>4d6 &times; 10 gp (average 140 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>6 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/ride">Ride</Link>, <Link to="/skill/stealth">Stealth</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, <Link to="/skill/knowledge_geography">Knowledge (geography)</Link>, <Link to="/skill/knowledge_nature">Knowledge (nature)</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/heal">Heal</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/survival">Survival</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/handle_animal">Handle Animal</Link>, <Link to="/skill/intimidate">Intimidate</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-hunter-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-hunter--table-0"><table>
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
<td>+2</td>
<td>+0</td>
<td>Animal companion, animal focus, nature training, orisons, wild empathy</td>
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
<td>+3</td>
<td>+0</td>
<td>Precise companion, track</td>
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
<td>+3</td>
<td>+1</td>
<td>Hunter tactics, teamwork feat</td>
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
<td>+4</td>
<td>+1</td>
<td>Improved empathic link</td>
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
<td>+4</td>
<td>+1</td>
<td>Woodland stride</td>
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
<td>+5</td>
<td>+2</td>
<td>Teamwork feat</td>
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
<td>+5</td>
<td>+2</td>
<td>Bonus trick</td>
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
<td>+6</td>
<td>+2</td>
<td>Second animal focus, swift tracker</td>
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
<td>+6</td>
<td>+3</td>
<td>Teamwork feat</td>
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
<td>+7</td>
<td>+3</td>
<td>Raise animal companion</td>
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
<td>+7</td>
<td>+3</td>
<td>Speak with master</td>
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
<td>+8</td>
<td>+4</td>
<td>Teamwork feat</td>
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
<td>+8</td>
<td>+4</td>
<td>Bonus trick</td>
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
<td>+9</td>
<td>+4</td>
<td>Greater empathic link</td>
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
<td>+9</td>
<td>+5</td>
<td>Teamwork feat</td>
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
<td>+10</td>
<td>+5</td>
<td>-</td>
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
<td>+10</td>
<td>+5</td>
<td>One with the wild</td>
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
<td>+11</td>
<td>+6</td>
<td>Teamwork feat</td>
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
<td>+11</td>
<td>+6</td>
<td>Bonus trick</td>
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
<td>+12</td>
<td>+6</td>
<td>Master hunter</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="class-hunter-spells-known">Spells Known</h3>
<ScrollContainer id="class-hunter--table-1"><table>
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
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={2}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td colSpan={2}>All <Link to="/main/equipment_weapons_martial">martial weapons</Link></td></tr><tr><th>Light Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Medium Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Heavy Armor?</th><td colSpan={2}>No</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">Yes, except tower shields</td></tr></tbody></table>
<div className="ability"><div className="abIcon"><Link to="/icons"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-hunter-spells" data-hash-target><div className="box">Spells</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">To learn or cast a spell, you must have a Wisdom score equal to at least 10 + the spell level. You can cast only a certain number of spells of each spell level per day, as shown on the table above. In addition, you receive <Link to="/rule/determine_bonuses">bonus spells per day</Link> if you have a high Wisdom score.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain the ability to cast divine spells which are drawn from the <Link to="/main/spells_hunter">hunter spell list</Link>. The DC for a saving throw against spells you cast is 10 + the spell level + your Wisdom modifier. Your alignment may restrict you from casting certain spells opposed to your moral or ethical beliefs; see <em>Chaotic, Evil, Good, and Lawful Spells.</em> You do not need to prepare these spells in advance; you can cast any spell you know at any time, assuming you haven't yet used up your allotment of spells per day for the spell's level.</div></div></div><div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box"><p>A hunter's selection of spells is extremely limited. You begin play knowing four 0-level spells and two 1st-level spells of your choice. At each new hunter level you gain one or more new spells as indicated on the table above. Unlike spells per day, the number of spells you know is not affected by your Wisdom score.</p>
<p>In addition to the spells gained by hunters as they gain levels, you also add all <Link to="/spell/summon_natures_ally">summon nature's ally</Link> spells to your list of spells known. These spells are added as soon as you are capable of casting them.</p>
<p>At 5th level, and every three levels thereafter (8th, 11th, and so on), you can choose to learn a new spell in place of one you already know. In effect, you "lose" the old spell in exchange for the new one. The new spell's level must be the same as that of the spell being exchanged. You may swap out only a single spell at any given level and must choose whether or not to swap the spell at the same time that you gain new spells known for the level. You cannot swap any <em>summon nature's ally</em> spells.</p></div></div></div></div><div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-hunter-orisons" data-hash-target><div className="box">Orisons</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You learn a number of orisons, or 0-level divine spells. These spells are cast like any other spell, but they don't consume slots and can be used again. Orisons cast using other spell slots, such as those due to metamagic feats, consume slots normally.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-hunter-chaotic-evil-good-and-lawful-spells" data-hash-target><div className="box">Chaotic, Evil, Good, and Lawful Spells</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You can't cast spells of an alignment opposed to your own or your deity's (if you have one). Spells associated with particular alignments are indicated by the chaos, evil, good, and law descriptors in their spell descriptions.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-hunter-animal-companion-ex" data-hash-target><div className="box">Animal Companion (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box"><p>You form a bond with an <Link to="/sidekick/animal_companion">animal companion</Link>. You may begin play with <Link to="/ability/druid_companions">any of the animals available to a druid</Link>. This animal is a loyal companion that accompanies you on your adventures. This ability functions like the druid <em>animal companion</em> ability. Your effective druid level is equal to your hunter level. If you receive an animal companion from more than one source, your effective druid levels stack for the purposes of determining the companion's statistics and abilities.</p>
<p>If you release your companion from service or your animal companion perishes, you may gain a new one by performing a ceremony requiring 24 uninterrupted hours of prayer in the environment where the new companion typically lives. While your animal companion is dead, any animal you summon with a <em>summon nature's ally</em> spell remains for 1 minute per level instead of 1 round per level. You cannot have more than one <em>summon nature's ally</em> spell active in this way at one time. If this ability is used again, any existing <em>summon nature's ally</em> immediately ends.</p>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You may teach your companion hunter's tricks from the <Link to="/arc-ranger/skirmisher">skirmisher</Link> ranger archetype instead of standard <Link to="/ability/animal_tricks">animal tricks</Link>. The animal companion can use skirmisher tricks when commanded, a number of times per day equal to <Link to="/misc/half">half</Link> its Hit Dice plus its Wisdom modifier.</div></div></div></div>
<aside><p>An animal companion can also be taught special <Link to="/ability/companion_tricks">animal companion tricks</Link>, though they may need specific characteristics to learn them.</p>
</aside><div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-hunter-nature-training-ex" data-hash-target><div className="box">Nature Training (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You count your total hunter level as both druid levels and ranger levels for the purpose of qualifying for feats, traits, and options that modify or improve an animal companion.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-hunter-animal-focus-su" data-hash-target><div className="box">Animal Focus (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">1 minute/day per hunter level; these minutes need not be consecutive, but they must be spent in 1-minute increments</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box"><p>You can take on the <Link to="/ability/animal_foci">aspect of an animal</Link>. You must select one type of animal to emulate, gaining a bonus or special ability based on the type of animal emulated and your hunter level. You can emulate only one animal at a time.</p>
<p>You can also apply one of these aspects to your animal companion. Unlike with you, there is no duration on the animal aspect applied to your animal companion. An aspect applied in this way does not count against your minutes of duration per day - it remains in effect until you change it. The companion's aspect can be the same aspect you have taken on or a different one. You can select or change the animal foci on both you and your animal companion as part of the same swift action.</p>
<p>If your animal companion is dead, you can apply your companion's animal focus to yourself instead of your animal companion. This is in addition to the normal one you can choose, and (as with a companion's focus) remains in effect until you change it instead of counting against your minutes per day.</p>
</div></div></div></div>
<aside><p>Characters with the <em>animal focus</em> feature can also gain <Link to="/ability/ward_aspects">ward aspects</Link> if they desire.</p>
</aside><div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-hunter-wild-empathy-ex" data-hash-target><div className="box">Wild Empathy (Ex)</div><div className="flavor">A hunter can improve the attitude of an animal.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">This ability functions just like a <Link to="/skill/diplomacy">Diplomacy</Link> check made to improve the attitude of a person. You roll 1d20 and add your hunter level and your Charisma modifier to determine the wild empathy check result. The typical domestic animal has a starting attitude of indifferent, while wild animals are usually unfriendly. You can also use this ability to influence a magical beast with an Intelligence score of 1 or 2, but you take a -4 penalty on the check.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">To use wild empathy, you and the animal must be within 30 feet of one another under normal conditions. Generally, influencing an animal in this way takes 1 minute but, as with influencing people, it might take more or less time.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-hunter-precise-companion-ex" data-hash-target><div className="box">Precise Companion (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Choose either <Link to="/feat/precise_shot">Precise Shot</Link> or <Link to="/feat/outflank">Outflank</Link> as a bonus feat. You do not need to meet the prerequisites for this feat. If you choose Outflank, you automatically grant this feat to your animal companion as well.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-hunter-track-ex" data-hash-target><div className="box">Track (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Add 1/2 your level to Survival skill checks made to follow tracks.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-hunter-teamwork-feat" data-hash-target><div className="box">Teamwork Feat</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain a bonus <Link to="/main/teamwork_feat">teamwork feat</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can choose to learn a new bonus teamwork feat in place of the most recent bonus teamwork feat you already learned. In effect, you lose the bonus feat in exchange for the new one. You can change only the most recent teamwork feat gained. Whenever you gain a new teamwork feat, your previous teamwork feats become permanent.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Wis modifier times/day (minimum 1)</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">You gain a new bonus teamwork feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">You gain a new bonus teamwork feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">You gain a new bonus teamwork feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">You gain a new bonus teamwork feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">You gain a new bonus teamwork feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You must meet the prerequisites of any teamwork feat you select.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-hunter-hunter-tactics-ex" data-hash-target><div className="box">Hunter Tactics (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You automatically grant your teamwork feats to your animal companion. The companion doesn't need to meet the prerequisites of these teamwork feats.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-hunter-improved-empathic-link-su" data-hash-target><div className="box">Improved Empathic Link (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain an empathic link with your animal companion. This functions like an empathic link with a <Link to="/sidekick/familiar">familiar</Link>, except you can also see through a companion's eyes as a <strong className="hl">swift action</strong>, maintaining this connection as long as you like (as long as the companion is within 1 mile) and ending it as a <strong className="hl">free action</strong>. You are <Link to="/misc/blinded">blinded</Link> while maintaining this connection.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-hunter-woodland-stride-ex" data-hash-target><div className="box">Woodland Stride (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You and your animal companion may move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at your normal speed and without taking damage or suffering any other impairment.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Thorns, briars, and overgrown areas that are enchanted or magically manipulated to impede motion will still affect you both.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-hunter-bonus-tricks-ex" data-hash-target><div className="box">Bonus Tricks (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 7th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Your animal companion learns a bonus <Link to="/ability/tricks">trick</Link> (in addition to the bonus tricks gained from your effective druid level).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">Your companion gains another trick.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">Your companion gains another trick.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-hunter-second-animal-focus-su" data-hash-target><div className="box">Second Animal Focus (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Whenever you use your <em>animal focus</em> ability, you select two different animal aspects for yourself instead of one, and can assign two aspects to your companion instead of one. As with your companion's previous aspect, the second one does not count against the minutes per day you can take on an aspect.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">If your companion is dead and you've applied the companion's animal aspect to yourself, that aspect does not count toward your maximum of two aspects at once. You can still apply only one of the dead companion's aspects, not both.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-hunter-swift-tracker-ex" data-hash-target><div className="box">Swift Tracker (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can move at your normal speed while using Survival to follow tracks without taking the normal -5 penalty. You take only a -10 penalty (instead of the normal -20) when moving at up to twice normal speed while tracking.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-hunter-raise-animal-companion-sp" data-hash-target><div className="box">Raise Animal Companion (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 10th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain <Link to="/spell/raise_animal_companion">raise animal companion</Link> as a spell-like ability; this is not restricted to raising only your own animal companion. Using this spell-like ability gives you a permanent <Link to="/rule/negative_level">negative level</Link>, which cannot be overcome in any way (including by <Link to="/spell/restoration">restoration</Link>), but automatically ends after 24 hours.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">This functions as <Link to="/spell/resurrection">resurrection</Link> instead of <Link to="/spell/raise_dead">raise dead</Link>, but otherwise operates as normal.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-hunter-speak-with-master-ex" data-hash-target><div className="box">Speak with Master (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 11th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You and your animal companion can communicate verbally, as if using a common language. Other creatures cannot understand the communication without magical aid.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-hunter-greater-empathic-link-su" data-hash-target><div className="box">Greater Empathic Link (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 14th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">The range of your <em>empathic link</em> with your animal companion increases to 10 miles. If the animal companion is within 1 mile, you can communicate with it telepathically.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-hunter-one-with-the-wild-ex" data-hash-target><div className="box">One with the Wild (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 17th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You and your animal companion are respected or even feared by other animals, so long as the animals are approximately of the same type as any of your current animal foci: bat for bats, tiger with felines, falcon for birds, snake for reptiles, and so on. No animal in this category (including dire varieties) willingly attacks you or your companion unless magically compelled to or if either of you attack it first.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">You and your companion can attempt to demoralize animals in the appropriate category, rolling 1d20 and adding your level and your Charisma modifier to determine the <Link to="/skill/intimidate">Intimidate</Link> check result.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-hunter-master-hunter-ex" data-hash-target><div className="box">Master Hunter (Ex)</div><div className="flavor">You become a master hunter, able to track down foes with ease.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can always move at full speed while using Survival to follow tracks without penalty. Additionally, each day when you regain your spell slots, you choose one <em>animal focus</em> to be active on yourself for the entire day. This focus is in addition to using your <em>animal focus</em> class ability (including the additional focus ability you are able to use on yourself if your animal companion is dead).</div></div></div></div>
<h3 id="class-hunter-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-hunter--table-2"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Deep Magics (Su)</td><td>At 20th level, the character's repertoire of spells deepens dramatically. She gains an additional spell known for each spell level she can cast. A character of any class with spells known can select this capstone.</td></tr>
<tr><td>Great Beast (Su)</td><td>At 20th level, the character's <Link to="/sidekick/animal_companion">animal companion</Link> is a paragon of its kind - a hero and legend in its own right. The animal companion's Strength, Dexterity, Constitution, and Wisdom scores each increase by 4. This capstone is available to any class with an animal companion.</td></tr>
<tr><td>Huntmaster (Ex)</td><td>At 20th level, the hunter learns to control all manner of beasts. The hunter gains a second animal companion. Her level is considered four lower for the purposes of her second animal companion. The hunter can use her animal focus feature to grant each animal companion a different animal aspect.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-hunter-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Catfolk:</strong> Gain 1/6 of a bonus teamwork feat.<sup><InnerLink showBacklink="backlink-class-hunter-ref-A-1" id="class-hunter-ref-A-1" data-hash-target to="class-hunter-A">1</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Gain a +1/2 bonus on wild empathy checks the hunter makes to influence animals and magical beasts that live underground.<sup><InnerLink showBacklink="backlink-class-hunter-ref-B-1" id="class-hunter-ref-B-1" data-hash-target to="class-hunter-B">2</InnerLink></sup></p>
<p><strong>Elf:</strong> Choose a weapon from the following list: longbow, longsword, rapier, short sword, shortbow, or any weapon with "elven" in its name. Gain a +1/2 bonus on critical hit confirmation rolls made while using that type of weapon (maximum bonus +4). This bonus does not stack with those gained through <Link to="/feat/critical_focus">Critical Focus</Link> and similar effects.<sup><InnerLink showBacklink="backlink-class-hunter-ref-B-2" id="class-hunter-ref-B-2" data-hash-target to="class-hunter-B">2</InnerLink></sup></p>
<p><strong>Fetchling:</strong> The hunter's animal companion gains DR 1/magic. Each additional time the hunter selects this benefit, the DR increases by +1/2 (maximum DR 10/magic). If the hunter ever replaces his animal companion, the new animal companion gains this DR.<sup><InnerLink showBacklink="backlink-class-hunter-ref-C-1" id="class-hunter-ref-C-1" data-hash-target to="class-hunter-C">3</InnerLink></sup></p>
<p><strong>Ganzi:</strong> The hunter's animal companion is specially trained for extraplanar expeditions and gains a +1 bonus on Stealth and Acrobatics checks while on a plane other than the Material Plane.<sup><InnerLink showBacklink="backlink-class-hunter-ref-D-1" id="class-hunter-ref-D-1" data-hash-target to="class-hunter-D">4</InnerLink></sup></p>
<p><strong>Gathlain:</strong> The hunter's animal companion gains DR 1/cold iron. Each time the hunter gains another level, this DR increases by 1/3 (maximum DR 5/cold iron). If the hunter replaces this animal companion, the new companion gains this damage reduction.<sup><InnerLink showBacklink="backlink-class-hunter-ref-E-1" id="class-hunter-ref-E-1" data-hash-target to="class-hunter-E">5</InnerLink></sup></p>
<p><strong>Ghoran:</strong> Add 1 skill rank to the hunter's plant companion. If the hunter replaces her plant companion, the new plant companion gains these bonus skill ranks.<sup><InnerLink showBacklink="backlink-class-hunter-ref-F-1" id="class-hunter-ref-F-1" data-hash-target to="class-hunter-F">6</InnerLink></sup></p>
<p><strong>Gnome:</strong> Add DR 1/magic to the hunter's animal companion. Each time the hunter gains another level, the DR increases by 1/2 (maximum DR 10/magic). If the hunter replaces her animal companion, the new companion gains this damage reduction.<sup><InnerLink showBacklink="backlink-class-hunter-ref-G-1" id="class-hunter-ref-G-1" data-hash-target to="class-hunter-G">7</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Add 1 foot to the hunter's companion's base speed. In combat, this has an effect only for every five increases in base speed.<sup><InnerLink showBacklink="backlink-class-hunter-ref-G-2" id="class-hunter-ref-G-2" data-hash-target to="class-hunter-G">7</InnerLink></sup></p>
<p><strong>Halfling:</strong> The hunter's animal companion gains a +1/4 luck bonus on saving throws. If the hunter replaces her animal companion, the new animal companion gains this bonus.<sup><InnerLink showBacklink="backlink-class-hunter-ref-G-3" id="class-hunter-ref-G-3" data-hash-target to="class-hunter-G">7</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Add 1 hit point to the hunter's animal companion. If the hunter replaces his animal companion, the new animal companion gains these bonus hit points.<sup><InnerLink showBacklink="backlink-class-hunter-ref-H-1" id="class-hunter-ref-H-1" data-hash-target to="class-hunter-H">8</InnerLink></sup></p>
<p><strong>Human:</strong> Add 1 skill rank to the hunter's animal companion. If the hunter replaces his animal companion, the new animal companion gains these bonus skill ranks.<sup><InnerLink showBacklink="backlink-class-hunter-ref-H-2" id="class-hunter-ref-H-2" data-hash-target to="class-hunter-H">8</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-hunter-ref-I-1" id="class-hunter-ref-I-1" data-hash-target to="class-hunter-I">9</InnerLink></sup></p>
<p><strong>Ratfolk:</strong> Add 1 skill rank to the hunter's badger, dire rat, or riding rat animal companion.<sup><InnerLink showBacklink="backlink-class-hunter-ref-J-1" id="class-hunter-ref-J-1" data-hash-target to="class-hunter-J">10</InnerLink></sup></p>
<p><strong>Strix:</strong> Add 1 hit point to the hunter's animal companion. If the hunter replaces her animal companion, the new animal companion gains these bonus hit points.<sup><InnerLink showBacklink="backlink-class-hunter-ref-K-1" id="class-hunter-ref-K-1" data-hash-target to="class-hunter-K">11</InnerLink></sup></p>
<p><strong>Tengu:</strong> Add 1 skill rank to the hunter's animal companion. If the hunter ever replaces her animal companion, the new companion gains these bonus skill ranks.<sup><InnerLink showBacklink="backlink-class-hunter-ref-L-1" id="class-hunter-ref-L-1" data-hash-target to="class-hunter-L">12</InnerLink></sup></p>
<p><strong>Vanara:</strong> Add 1 minute to the number of minutes per day that the hunter can use animal focus.<sup><InnerLink showBacklink="backlink-class-hunter-ref-M-1" id="class-hunter-ref-M-1" data-hash-target to="class-hunter-M">13</InnerLink></sup></p>
</div>
<h3 id="class-hunter-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-hunter/aquatic_beastmaster">Aquatic Beastmaster</Link></p><p><strong>Modifies or Replaces:</strong> Animal Focus; Wild Empathy; Improved Empathic Link</p><p>Hunters beneath the sea are just as committed as their surface-dwelling counterparts to working alongside their animal companions to eradicate threats.</p></div>
<div className="archetype"><p><Link to="/arc-hunter/chameleon_adept">Chameleon Adept</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Teamwork Feats; Hunter Tactics; Wild Empathy; Precise Companion; Woodland Stride; Raise Animal Companion; One with the Wild</p><p>Some hunters are masters of blending into every situation, even making their companions appear humanoid for brief periods of time.</p></div>
<div className="archetype"><p><Link to="/arc-hunter/colluding_scoundrel">Colluding Scoundrel</Link></p><p><strong>Modifies or Replaces:</strong> Animal Focus; Second Animal Focus; Master Hunter</p><p>The colluding scoundrel is a canny and conniving skirmisher, manipulating her enemies and leveraging her allies for her own benefit.</p></div>
<div className="archetype"><p><Link to="/arc-hunter/courtly_hunter">Courtly Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Animal Companion; Animal Focus; Precise Companion; Hunter Tactics; Teamwork Feats; Bonus Tricks</p><p>While most hunters find themselves at ease in the wildest parts of the world, courtly hunters instead make their homes in cultured urban environments.</p></div>
<div className="archetype"><p><Link to="/arc-hunter/divine_hunter">Divine Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Class Skills; Teamwork Feats; Hunter Tactics</p><p>While most hunters heed the call of nature and fight to protect its bounty, some are inspired to serve a higher power.</p></div>
<div className="archetype"><p><Link to="/arc-hunter/feral_hunter">Feral Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Animal Companion; Animal Focus; Hunter Tactics; Speak with Master; Precise Companion; Bonus Tricks; Improved Empathic Link; Greater Empathic Link; Master of the Wild; Raise Animal Companion; 6th, 9th, 12th, 15th, and 18th-level Teamwork Feats</p><p>A feral hunter has forged a bond with nature that's so strong that she doesn't merely channel the aspects of animals' she actually becomes an animal herself.</p></div>
<div className="archetype"><p><Link to="/arc-hunter/feykiller">Feykiller</Link></p><p><strong>Modifies or Replaces:</strong> Animal Focus; Wild Empathy; Speak with Master; Improved Empathic Link; One with the Wild</p><p>Some hunters in fey-plagued regions are dedicated to tracking down and eradicating these threats.</p></div>
<div className="archetype"><p><Link to="/arc-hunter/flood_flourisher">Flood Flourisher</Link></p><p><strong>Modifies or Replaces:</strong> Hunter Tactics; Woodland Stride; Teamwork Feats; Swift Tracker</p><p>Well adapted to their drenched surroundings, flood flourishers coordinate deadly ambushes with their loyal animal companions by capitalizing on their mastery of the soggy terrain.</p></div>
<div className="archetype"><p><Link to="/arc-hunter/forester">Forester</Link></p><p><strong>Modifies or Replaces:</strong> Animal Focus; Animal Companion; Precise Companion; Hunter Tactics; Improved Empathic Link; Bonus Tricks; Raise Animal Companion; Speak with Master; Greater Empathic Link</p><p>While all hunters have a bond with the natural world, a forester has a stronger tie to her environment than to the animals within it.</p></div>
<div className="archetype"><p><Link to="/arc-hunter/packmaster">Packmaster</Link></p><p><strong>Modifies or Replaces:</strong> Animal Companion; Animal Focus; Teamwork Feats; Second Animal Focus; Master Hunter</p><p>Some hunters form bonds with packs of well-trained creatures. Whether such a hunter is a northern berserker running with a pack of timber wolves or a savage warrior dashing through the jungle alongside her herd of dimetrodons, the packmaster revels in the thrill of the hunt and the glory of the kill.</p></div>
<div className="archetype"><p><Link to="/arc-hunter/patient_ambusher">Patient Ambusher</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Nature Training; Wild Empathy; Hunter Tactics; Teamwork Feats; Raise Animal Companion</p><p>Wandering the wilds, some hunters eschew the bond of innate teamwork with their animal companions. Instead, these hunters master the creation and deployment of intricate ranger traps, often using themselves or their animal companions to lure foes into their snares.</p></div>
<div className="archetype"><p><Link to="/arc-hunter/pelagic_hunter">Pelagic Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Animal Companion; Animal Focus; Woodland Stride</p><p>Pelagic hunters form strong bonds that extend deep beneath the sea.</p></div>
<div className="archetype"><p><Link to="/arc-hunter/plant_master">Plant Master</Link></p><p><strong>Modifies or Replaces:</strong> Animal Companion; Animal Focus; Wild Empathy; One with the Wild; Master Hunter</p><p>Some hunters form a bond with plant life instead of an animal and take on those aspects instead.</p></div>
<div className="archetype"><p><Link to="/arc-hunter/primal_companion_hunter">Primal Companion Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Animal Focus; Second Animal Focus; Master Hunter</p><p>Most hunters are skilled at awakening the primal beasts inside themselves. However, some can instead activate the primal essence within their animal companion.</p></div>
<div className="archetype"><p><Link to="/arc-hunter/roof_runner">Roof Runner</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Armor Proficieny; Track; Woodland Stride; Swift Tracker; Master Hunter</p><p>Roof runners are skilled ambushers, skirmishers, and spies who eschew heavier types of armor in order to remain light on their feet.</p></div>
<div className="archetype"><p><Link to="/arc-hunter/scarab_stalker">Scarab Stalker</Link></p><p><strong>Modifies or Replaces:</strong> Animal Focus; Woodland Stride</p><p>The forgotten ruins in the desert sands have given rise to a breed of hunters who call upon the powers of the pyramids to protect and explore the ancient sites of their people.</p></div>
<div className="archetype"><p><Link to="/arc-hunter/totem_bonded">Totem-Bonded</Link></p><p><strong>Modifies or Replaces:</strong> Animal Companion; Animal Focus</p><p>Totem-bonded are hunters who are able to form a true spiritual bond with the powerful fauna that dominate the wildlands.</p></div>
<div className="archetype"><p><Link to="/arc-hunter/treestrider">Treestrider</Link></p><p><strong>Modifies or Replaces:</strong> Animal Companion; Animal Focus; Second Animal Focus; Precise Companion; Raise Animal Companion</p><p>Some hunters are masters of the wild. Whether raised by apes or having some other link with simian creatures, these hunters glide through the wilderness with ease.</p></div>
<div className="archetype"><p><Link to="/arc-hunter/uprooter_scout">Uprooter Scout</Link></p><p><strong>Modifies or Replaces:</strong> Improved Empathic Link; Speak with Master; Greater Empathic Link; Raise Animal Companion; One with the Wild</p><p>The Uprooters are an elite band of Kyonin elves skilled and brave enough to foray into the Tanglebriar and take the offensive in the fight against Treerazer.</p></div>
<div className="archetype"><p><Link to="/arc-hunter/urban_hunter">Urban Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Animal Companion; Hunter Tactics; Teamwork Feat; Woodland Stride; One with the Wild</p><p>Urban hunters help guards track down and apprehend criminals or spies, find lost children and disaster victims, and protect animals from abuse in the city.</p></div>
<div className="archetype"><p><Link to="/arc-hunter/verminous_hunter">Verminous Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Animal Companion; Wild Empathy; Animal Focus; Woodland Stride</p><p>A verminous hunter calls on the ceaseless, single-minded dedication of vermin to hunt and overwhelm her prey.</p></div>
<h3 id="class-hunter-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"hunter archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Animal Companion"},{"header":"Animal Focus"},{"header":"Second Animal Focus"},{"header":"Armor Proficiency"},{"header":"Bonus Tricks"},{"header":"Class Skills"},{"header":"Hunter Tactics"},{"header":"Improved Empathic Link"},{"header":"Greater Empathic Link"},{"header":"Master Hunter"},{"header":"Master of the Wild"},{"header":"Nature Training"},{"header":"One with the Wild"},{"header":"Precise Companion"},{"header":"Raise Animal Companion"},{"header":"Speak with Master"},{"header":"Swift Tracker"},{"header":"Teamwork Feats"},{"header":"Track"},{"header":"Wild Empathy"},{"header":"Woodland Stride"}],"data":[["‹arc-hunter/Aquatic Beastmaster›",null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null],["‹arc-hunter/Chameleon Adept›",null,null,null,null,null,null,"X","X",null,null,null,null,null,"X","X","X",null,null,"X",null,"X","X"],["‹arc-hunter/Colluding Scoundrel›",null,null,"X","X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null],["‹arc-hunter/Courtly Hunter›",null,"X","X",null,null,"X","X","X",null,null,null,null,null,null,"X",null,null,null,"X",null,null,null],["‹arc-hunter/Divine Hunter›","X",null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-hunter/Feral Hunter›",null,"X","X",null,null,"X",null,"X","X","X",null,"X",null,null,"X","X","X",null,"X",null,null,null],["‹arc-hunter/Feykiller›",null,null,"X",null,null,null,null,null,"X",null,null,null,null,"X",null,null,"X",null,null,null,"X",null],["‹arc-hunter/Flood Flourisher›",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X","X",null,null,"X"],["‹arc-hunter/Forester›",null,"X","X",null,null,"X",null,"X","X","X",null,null,null,null,"X","X","X",null,null,null,null,null],["‹arc-hunter/Packmaster›",null,"X","X","X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,null,null],["‹arc-hunter/Patient Ambusher›",null,null,null,null,null,null,"X","X",null,null,null,null,"X",null,null,"X",null,null,"X",null,"X",null],["‹arc-hunter/Pelagic Hunter›",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X"],["‹arc-hunter/Plant Master›",null,"X","X",null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,"X",null],["‹arc-hunter/Primal Companion Hunter›",null,null,"X","X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null],["‹arc-hunter/Roof Runner›",null,null,null,null,"X",null,"X",null,null,null,"X",null,null,null,null,null,null,"X",null,"X",null,"X"],["‹arc-hunter/Scarab Stalker›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X"],["‹arc-hunter/Totem-Bonded›",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-hunter/Treestrider›",null,"X","X","X",null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null],["‹arc-hunter/Uprooter Scout›",null,null,null,null,null,null,null,null,"X","X",null,null,null,"X",null,"X","X",null,null,null,null,null],["‹arc-hunter/Urban Hunter›",null,"X",null,null,null,null,"X","X",null,null,null,null,null,"X",null,null,null,null,"X",null,null,"X"],["‹arc-hunter/Verminous Hunter›",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X"]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-hunter-label">Footnotes</h3>
<ol>
<li id="class-hunter-A">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 4</Link> <InnerLink id="backlink-class-hunter-ref-A-1" data-hash-target to="class-hunter-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-hunter-B">
<p><Link to="/source/advanced_class_guide">Advanced Class Guide pg. 69</Link> <InnerLink id="backlink-class-hunter-ref-B-1" data-hash-target to="class-hunter-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink> <InnerLink id="backlink-class-hunter-ref-B-2" data-hash-target to="class-hunter-ref-B-2" aria-label="Back to reference B-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-hunter-C">
<p><Link to="/source/blood_of_shadows">Blood of Shadows pg. 7</Link> <InnerLink id="backlink-class-hunter-ref-C-1" data-hash-target to="class-hunter-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-hunter-D">
<p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 19</Link> <InnerLink id="backlink-class-hunter-ref-D-1" data-hash-target to="class-hunter-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-hunter-E">
<p><Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 10</Link> <InnerLink id="backlink-class-hunter-ref-E-1" data-hash-target to="class-hunter-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-hunter-F">
<p>Ultimate Wilderness pg. 16 <InnerLink id="backlink-class-hunter-ref-F-1" data-hash-target to="class-hunter-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-hunter-G">
<p>Advanced Class Guide pg. 70 <InnerLink id="backlink-class-hunter-ref-G-1" data-hash-target to="class-hunter-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink> <InnerLink id="backlink-class-hunter-ref-G-2" data-hash-target to="class-hunter-ref-G-2" aria-label="Back to reference G-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-class-hunter-ref-G-3" data-hash-target to="class-hunter-ref-G-3" aria-label="Back to reference G-3">↩<sup>3</sup></InnerLink></p>
</li>
<li id="class-hunter-H">
<p>Advanced Class Guide pg. 71 <InnerLink id="backlink-class-hunter-ref-H-1" data-hash-target to="class-hunter-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink> <InnerLink id="backlink-class-hunter-ref-H-2" data-hash-target to="class-hunter-ref-H-2" aria-label="Back to reference H-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-hunter-I">
<p>Blood of the Beast pg. 12 <InnerLink id="backlink-class-hunter-ref-I-1" data-hash-target to="class-hunter-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-hunter-J">
<p>Blood of the Beast pg. 20 <InnerLink id="backlink-class-hunter-ref-J-1" data-hash-target to="class-hunter-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
<li id="class-hunter-K">
<p><Link to="/source/pathfinder_101_the_kintargo_contract">Pathfinder #101: The Kintargo Contract pg. 73</Link> <InnerLink id="backlink-class-hunter-ref-K-1" data-hash-target to="class-hunter-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
<li id="class-hunter-L">
<p>Blood of the Beast pg. 24 <InnerLink id="backlink-class-hunter-ref-L-1" data-hash-target to="class-hunter-ref-L-1" aria-label="Back to reference L-1">↩</InnerLink></p>
</li>
<li id="class-hunter-M">
<p>Blood of the Beast pg. 28 <InnerLink id="backlink-class-hunter-ref-M-1" data-hash-target to="class-hunter-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _inquisitor = {hasJL:true,title: "Inquisitor", jsx: <><div className="jumpList" id="class-inquisitor-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-inquisitor-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-inquisitor-chaotic-evil-good-and-lawful-spells">Aligned Spells</InnerLink></li><li><InnerLink toTop to="class-inquisitor-domain">Domain</InnerLink></li><li><InnerLink toTop to="class-inquisitor-judgment-su">Judgment</InnerLink></li><li><InnerLink toTop to="class-inquisitor-monster-lore-ex">Knowledge and Intimidation</InnerLink></li><li><InnerLink toTop to="class-inquisitor-cunning-initiative-ex">Cunning Initiative, Sensing, and Tracking</InnerLink></li><li><InnerLink toTop to="class-inquisitor-teamwork-feat">Teamwork and Tactics</InnerLink></li><li><InnerLink toTop to="class-inquisitor-bane-su">Bane and Discern Lies</InnerLink></li><li><InnerLink toTop to="class-inquisitor-second-judgment-ex">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-inquisitor-ex-inquisitors">Ex-Inquisitors</InnerLink></li><li><InnerLink toTop to="class-inquisitor-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-inquisitor-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-inquisitor-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-inquisitor-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-inquisitor-inquisitor">Inquisitor</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 38</Link></p>
<p>Grim and determined, the inquisitor roots out enemies of the faith, using trickery and guile when righteousness and purity is not enough. Although inquisitors are dedicated to a deity, they are above many of the normal rules and conventions of the church. They answer to their deity and their own sense of justice alone, and are willing to take extreme measures to meet their goals.</p>
<p><strong>Role:</strong> Inquisitors tend to move from place to place, chasing down enemies and researching emerging threats. As a result, they often travel with others, if for no other reason than to mask their presence. Inquisitors work with members of their faith whenever possible, but even such allies are not above suspicion.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Your alignment must be within one step of your deity's, along either the law/chaos axis or the good/evil axis.</span></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>4d6 &times; 10 gp (average 140 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>6 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/ride">Ride</Link>, <Link to="/skill/stealth">Stealth</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, <Link to="/skill/knowledge_nature">Knowledge (nature)</Link>, <Link to="/skill/knowledge_planes">Knowledge (planes)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/heal">Heal</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link>, <Link to="/skill/survival">Survival</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/disguise">Disguise</Link>, <Link to="/skill/intimidate">Intimidate</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-inquisitor-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-inquisitor--table-0"><table>
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
<td>Domain, judgment 1/day, monster lore, orisons, stern gaze</td>
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
<td>Cunning initiative, <em>detect alignment,</em> track</td>
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
<td>Solo tactics, teamwork feat</td>
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
<td>Judgment 2/day</td>
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
<td>Bane, <em>discern lies</em></td>
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
<td>Teamwork feat</td>
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
<td>Judgment 3/day</td>
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
<td>Second judgment</td>
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
<td>Teamwork feat</td>
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
<td>Judgment 4/day</td>
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
<td>Stalwart</td>
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
<td>Greater bane, teamwork feat</td>
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
<td>Judgment 5/day</td>
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
<td>Exploit weakness</td>
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
<td>Teamwork feat</td>
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
<td>Judgment 6/day, third judgment</td>
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
<td>Slayer</td>
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
<td>Teamwork feat</td>
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
<td>Judgment 7/day</td>
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
<td>True judgment</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="class-inquisitor-spells-known">Spells Known</h3>
<ScrollContainer id="class-inquisitor--table-1"><table>
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
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={4}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td><Link to="/eq-weapon/hand_crossbow">hand crossbow</Link></td><td><Link to="/eq-weapon/longbow">longbow</Link></td></tr><tr><td><Link to="/eq-weapon/repeating_crossbow">repeating crossbow</Link></td><td><Link to="/eq-weapon/shortbow">shortbow</Link></td></tr><tr><td colSpan={2}>your deity's favored weapon</td></tr><tr><th>Light Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Medium Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Heavy Armor?</th><td colSpan={2}>No</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">Yes, except tower shields</td></tr></tbody></table>
<div className="ability"><div className="abIcon"><Link to="/icons"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-inquisitor-spells" data-hash-target><div className="box">Spells</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">To learn or cast a spell, you must have a Wisdom score equal to at least 10 + the spell level. You can cast only a certain number of spells of each spell level per day, as shown on the table above. In addition, you receive <Link to="/rule/determine_bonuses">bonus spells per day</Link> if you have a high Wisdom score.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain the ability to cast divine spells which are drawn from the <Link to="/main/spells_inquisitor">inquisitor spell list</Link>. The DC for a saving throw against spells you cast is 10 + the spell level + your Wisdom modifier. Your alignment may restrict you from casting certain spells opposed to your moral or ethical beliefs; see <em>Chaotic, Evil, Good, and Lawful Spells.</em> You do not need to prepare these spells in advance; you can cast any spell you know at any time, assuming you haven't yet used up your allotment of spells per day for the spell's level.</div></div></div><div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box"><p>An inquisitor's selection of spells is extremely limited. You begin play knowing four 0-level spells and two 1st-level spells of your choice. At each new inquisitor level you gain one or more new spells as indicated on the table above. Unlike spells per day, the number of spells you know is not affected by your Wisdom score.</p>
<p>At 5th level, and every three levels thereafter (8th, 11th, and so on), you can choose to learn a new spell in place of one you already know. In effect, you "lose" the old spell in exchange for the new one. The new spell's level must be the same as that of the spell being exchanged, and it must be at least one level lower than the highest-level inquisitor spell you can cast. You may swap out only a single spell at any given level and must choose whether or not to swap the spell at the same time that you gain new spells known for the level.</p></div></div></div></div><div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-inquisitor-orisons" data-hash-target><div className="box">Orisons</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You learn a number of orisons, or 0-level divine spells. These spells are cast like any other spell, but they don't consume slots and can be used again. Orisons cast using other spell slots, such as those due to metamagic feats, consume slots normally.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-inquisitor-chaotic-evil-good-and-lawful-spells" data-hash-target><div className="box">Chaotic, Evil, Good, and Lawful Spells</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You can't cast spells of an alignment opposed to your own or your deity's (if you have one). Spells associated with particular alignments are indicated by the chaos, evil, good, and law descriptors in their spell descriptions.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-inquisitor-domain" data-hash-target><div className="box">Domain</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box"><p>You can select <Link to="/ability/domains">one domain</Link> from among those belonging to your deity, or <Link to="/ability/inquisitions">an inquisition</Link>. You can select an alignment domain only if your alignment matches that domain.</p>
<p>Like a cleric's deity, your deity influences your alignment, what magic you can perform, and your values. Although not as tied to the tenets of the deity as a cleric, you must still hold such guidelines in high regard, despite that fact you can go against them if it serves the greater good of the faith.</p>
<p>Each domain grants a number of domain powers, depending on your level. You do not gain the bonus spells listed for each domain, nor do you gain bonus spell slots. You use your level as your effective cleric level when determining the power and effect of your domain powers. If you have cleric levels, one of your two domain selections must be the same domain selected as an inquisitor. Levels of cleric and inquisitor stack for the purpose of determining domain powers and abilities, but not for bonus spells.</p>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">With the GM's approval, you can be devoted to an ideal instead of a deity, selecting one domain to represent your personal inclination and abilities. The restriction on alignment domains still applies.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-inquisitor-judgment-su" data-hash-target><div className="box">Judgment (Su)</div><div className="flavor">You can pronounce <Link to="/ability/judgments">judgment</Link> upon your foes.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Once a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box"><p>Starting when the judgment is made, you receive a bonus or special ability based on the type of judgment made.</p>
<p>Once activated, this ability lasts until the combat ends, at which point all of the bonuses immediately end. You must participate in the combat to gain these bonuses. If you are frightened, panicked, paralyzed, stunned, unconscious, or otherwise prevented from participating in the combat, the ability does not end, but the bonuses do not resume until you can participate in the combat again.</p>
<p>When you use this ability, you must select <Link to="/ability/judgments">one type of judgment</Link> to make. As a <strong className="hl">swift action</strong>, you can change this judgment to another type. If you are evil, you receive profane bonuses instead of sacred, as appropriate. Neutral inquisitors must select profane or sacred bonuses. Once made, this choice cannot be changed.</p>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">You can now use this ability twice a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">You can use this three times a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">You can use this four times a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">You can use this five times a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">You can use this six times a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">You can use this seven times a day.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-inquisitor-monster-lore-ex" data-hash-target><div className="box">Monster Lore (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You add your Wisdom modifier on <Link to="/skill/knowledge">Knowledge</Link> skill checks (in addition to your Intelligence modifier) when making skill checks to identify the abilities and weaknesses of creatures.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-inquisitor-stern-gaze-ex" data-hash-target><div className="box">Stern Gaze (Ex)</div><div className="flavor">Inquisitors are skilled at sensing deception and intimidating their foes.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You receive a morale bonus on all Intimidate and Sense Motive checks equal to <Link to="/misc/half">half</Link> your inquisitor level (minimum +1).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-inquisitor-cunning-initiative-ex" data-hash-target><div className="box">Cunning Initiative (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You add your Wisdom modifier on initiative checks (in addition to your Dexterity modifier).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-inquisitor-detect-alignment-sp" data-hash-target><div className="box">Detect Alignment (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">At will</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can use <Link to="/spell/detect_chaos">detect chaos</Link>, <Link to="/spell/detect_evil">detect evil</Link>, <Link to="/spell/detect_good">detect good</Link>, or <Link to="/spell/detect_law">detect law</Link>. You can only use one of these at any given time.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-inquisitor-track-ex" data-hash-target><div className="box">Track (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You add half your inquisitor level on Survival skill checks made to follow or identify tracks.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-inquisitor-teamwork-feat" data-hash-target><div className="box">Teamwork Feat</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain a bonus <Link to="/main/teamwork_feat">teamwork feat</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can choose to learn a new bonus teamwork feat in place of the most recent bonus teamwork feat you already learned. In effect, you lose the bonus feat in exchange for the new one. You can change only the most recent teamwork feat gained. Whenever you gain a new teamwork feat, your previous teamwork feats become permanent.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Wis modifier times/day (minimum 1)</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">You gain a new bonus teamwork feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">You gain a new bonus teamwork feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">You gain a new bonus teamwork feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">You gain a new bonus teamwork feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">You gain a new bonus teamwork feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You must meet the prerequisites of any teamwork feat you select.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-inquisitor-solo-tactics-ex" data-hash-target><div className="box">Solo Tactics (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">All of your allies are treated as if they possessed the same teamwork feats as you for the purpose of determining whether you receives a bonus from your teamwork feats.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Your allies do not receive any bonuses from these feats unless they actually possess the feats themselves. Their positioning and actions must still meet the prerequisites listed in the teamwork feat for you to receive the listed bonus.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-inquisitor-bane-su" data-hash-target><div className="box">Bane (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">1 round/day per inquisitor level; these rounds need not be consecutive</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">You can imbue one of your weapons with the <Link to="/magic-enh/bane">bane</Link> weapon special ability. You must select one creature type when you use this ability (and a subtype if the creature type selected is humanoid or outsider). Once selected, the type can be changed as another swift action.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">This ability only functions while you wield the weapon. If dropped or taken, the weapon resumes granting this ability if it is returned to you before the duration expires.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-inquisitor-discern-lies-sp" data-hash-target><div className="box">Discern Lies (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">1 round/day per inquisitor level; these rounds need not be consecutive</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Immediate Action</div></div><div className="abEnd"><div className="box">You can <Link to="/spell/discern_lies">discern lies</Link>, as per the spell.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-inquisitor-second-judgment-ex" data-hash-target><div className="box">Second Judgment (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Whenever you use your <em>judgment</em> ability, you select two different judgments, instead of one. This only consumes one use of your <em>judgment</em> ability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">You can change one of these judgments to another type.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-inquisitor-stalwart-ex" data-hash-target><div className="box">Stalwart (Ex)</div><div className="flavor">An inquisitor can use mental and physical resiliency to avoid certain attacks.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 11th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Only when wearing light armor, medium armor, or no armor, and not <Link to="/misc/helpless">helpless</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">If you make a Fortitude or Will saving throw against an attack that has a reduced effect on a successful save, you instead avoid the effect entirely.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-inquisitor-greater-bane-su" data-hash-target><div className="box">Greater Bane (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">When you use your bane ability, the amount of bonus damage dealt by the weapon against creatures of the selected type increases to 4d6.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-inquisitor-exploit-weakness-ex" data-hash-target><div className="box">Exploit Weakness (Ex)</div><div className="flavor">The inquisitor learns to take advantage of any opportunity that presents itself.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 14th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">When you score a critical hit, you ignores any <Link to="/rule/damage_reduction">damage reduction</Link> the target might have. In addition, if the target has <Link to="/umr/regeneration">regeneration</Link>, the creature loses regeneration on the round following the critical hit and can die normally during that round. Creatures whose regeneration always functions are immune to this ability. Finally, if you deal energy damage to a creature with vulnerability to that energy type, you deal +1 point of damage per die rolled.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-inquisitor-third-judgment-ex" data-hash-target><div className="box">Third Judgment (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Whenever you use your <em>judgment</em> ability, you select three different judgments, instead of just two. This only consumes one use of your <em>judgment</em> ability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">You can change one of these judgments to another type.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-inquisitor-slayer-ex" data-hash-target><div className="box">Slayer (Ex)</div><div className="flavor">An inquisitor learns to focus her judgment.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 17th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When you use your <em>judgment</em> ability, you must select one type of judgment. You are treated as if you were 5 levels higher for the purposes of determining the bonus granted by the judgment.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Unlike other types of judgment, the one enhanced by this ability cannot be changed for the remainder of the judgment.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-inquisitor-true-judgment-su" data-hash-target><div className="box">True Judgment (Su)</div><div className="flavor">An inquisitor can call true judgment down upon a foe during combat.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">Whenever you use your <em>judgment</em> ability, you can invoke <em>true judgment</em> on a foe. Once declared, you can make a single melee (or ranged attack, if the foe is within 30 feet) against the target. If the attack hits, it deals damage normally and the target must make a Fortitude save or die. The DC of this save is equal to 10 + 1/2 your inquisitor level + your Wisdom modifier.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Once this ability has been used, it cannot be used again for 1d4 rounds.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Regardless of whether or not the save is made, the target creature is immune to your <em>true judgment</em> ability for 24 hours.</div></div></div></div>
<h3 id="class-inquisitor-ex-inquisitors" data-hash-target>Ex-Inquisitors</h3>
<p>An inquisitor who slips into corruption or changes to a prohibited alignment loses all spells and the judgment ability. She cannot thereafter gain levels as an inquisitor until she <Link to="/spell/atonement">atones</Link>.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-Ex-1" id="class-inquisitor-ref-Ex-1" data-hash-target to="class-inquisitor-Ex">1</InnerLink></sup></p>
<h3 id="class-inquisitor-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-inquisitor--table-2"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Deep Magics (Su)</td><td>At 20th level, the character's repertoire of spells deepens dramatically. She gains an additional spell known for each spell level she can cast. A character of any class with spells known can select this capstone.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>Team Leader (Ex)</td><td>At 20th level, the inquisitor has grown accustomed to teaching farmers to fight, but what she can do with trained warriors is far more terrifying. When the inquisitor regains her spells each day, she can also spend 1 hour training a number of characters up to her Wisdom modifier in battle tactics. These characters receive three of the inquisitor's <Link to="/main/teamwork_feat">teamwork feats</Link> (the inquisitor's choice) as bonus feats for the next 24 hours.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-inquisitor-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Aasimar:</strong> Add +1/2 on Intimidate, Knowledge, and Sense Motive checks made against outsiders.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-A-1" id="class-inquisitor-ref-A-1" data-hash-target to="class-inquisitor-A">2</InnerLink></sup></p>
<p><strong>Aphorite:</strong> Add 1/4 to the number of times per day the inquisitor can change her most recent teamwork feat.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-B-1" id="class-inquisitor-ref-B-1" data-hash-target to="class-inquisitor-B">3</InnerLink></sup></p>
<p><strong>Catfolk:</strong> Add 1/2 to the inquisitor's track bonus.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-C-1" id="class-inquisitor-ref-C-1" data-hash-target to="class-inquisitor-C">4</InnerLink></sup></p>
<p><strong>Dhampir:</strong> Add a +1/2 bonus on Intimidate checks to demoralize humanoids.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-D-1" id="class-inquisitor-ref-D-1" data-hash-target to="class-inquisitor-D">5</InnerLink></sup></p>
<p><strong>Drow:</strong> Gain 1/4 of a teamwork feat.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-E-1" id="class-inquisitor-ref-E-1" data-hash-target to="class-inquisitor-E">6</InnerLink></sup></p>
<p><strong>Duergar:</strong> Add +1/6 to the number of times per day the inquisitor can use the judgment class feature.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-F-1" id="class-inquisitor-ref-F-1" data-hash-target to="class-inquisitor-F">7</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Add +1/2 to the inquisitor's level for the purpose of determining the effects of one type of judgment.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-G-1" id="class-inquisitor-ref-G-1" data-hash-target to="class-inquisitor-G">8</InnerLink></sup></p>
<p><strong>Elf:</strong> Add one spell known from the inquisitor's spell list. This spell must be at least one level below the highest-level spell the inquisitor can cast.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-H-1" id="class-inquisitor-ref-H-1" data-hash-target to="class-inquisitor-H">9</InnerLink></sup></p>
<p><strong>Fetchling:</strong> Add a +1 bonus on Knowledge (planes) checks made to identify creatures.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-I-1" id="class-inquisitor-ref-I-1" data-hash-target to="class-inquisitor-I">10</InnerLink></sup></p>
<p><strong>Gnome:</strong> Add a +1 bonus on concentration checks when casting inquisitor spells.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-J-1" id="class-inquisitor-ref-J-1" data-hash-target to="class-inquisitor-J">11</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Add +1/4 to the number of times per day the inquisitor can change her most recent teamwork feat.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-K-1" id="class-inquisitor-ref-K-1" data-hash-target to="class-inquisitor-K">12</InnerLink></sup></p>
<p><strong>Halfling:</strong> Add +1/4 to the number of times per day that an inquisitor can change her most recent teamwork feat.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-L-1" id="class-inquisitor-ref-L-1" data-hash-target to="class-inquisitor-L">13</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Add a +1/2 bonus on Intimidate checks and Knowledge checks to identify creatures.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-M-1" id="class-inquisitor-ref-M-1" data-hash-target to="class-inquisitor-M">14</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-inquisitor-ref-N-1" id="class-inquisitor-ref-N-1" data-hash-target to="class-inquisitor-N">15</InnerLink></sup></p>
<p><strong>Hobgoblin:</strong> Add a +1 bonus on concentration checks made to cast inquisitor spells.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-O-1" id="class-inquisitor-ref-O-1" data-hash-target to="class-inquisitor-O">16</InnerLink></sup></p>
<p><strong>Human:</strong> Add one spell known from the inquisitor spell list. This spell must be at least one level below the highest spell level the inquisitor can cast.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-P-1" id="class-inquisitor-ref-P-1" data-hash-target to="class-inquisitor-P">17</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-inquisitor-ref-Q-1" id="class-inquisitor-ref-Q-1" data-hash-target to="class-inquisitor-Q">18</InnerLink></sup></p>
<p><strong>Human:</strong> Add a +1/2 bonus on Perception checks to see through magical disguises or pinpoint invisible creatures.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-R-1" id="class-inquisitor-ref-R-1" data-hash-target to="class-inquisitor-R">19</InnerLink></sup></p>
<p><strong>Ifrit:</strong> Add a +1/2 bonus on Intimidate checks made against creatures with the fire subtype and a +1/2 bonus on Knowledge (planes) checks relating to the Plane of Fire.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-S-1" id="class-inquisitor-ref-S-1" data-hash-target to="class-inquisitor-S">20</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-T-1" id="class-inquisitor-ref-T-1" data-hash-target to="class-inquisitor-T">21</InnerLink></sup></p>
<p><strong>Kobold:</strong> Add 1/2 to Survival checks made to track creatures in total darkness.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-U-1" id="class-inquisitor-ref-U-1" data-hash-target to="class-inquisitor-U">22</InnerLink></sup></p>
<p><strong>Ratfolk:</strong> Add 1/2 to Sense Motive checks and Knowledge (dungeoneering) checks to identify creatures.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-V-1" id="class-inquisitor-ref-V-1" data-hash-target to="class-inquisitor-V">23</InnerLink></sup></p>
<p><strong>Sylph:</strong> Add a +1/2 bonus on Stealth checks while motionless and on opposed Perception checks.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-W-1" id="class-inquisitor-ref-W-1" data-hash-target to="class-inquisitor-W">24</InnerLink></sup></p>
<p><strong>Tiefling:</strong> Add a +1/2 bonus on Intimidate checks and Knowledge checks to identify creatures.<sup><InnerLink showBacklink="backlink-class-inquisitor-ref-X-1" id="class-inquisitor-ref-X-1" data-hash-target to="class-inquisitor-X">25</InnerLink></sup></p>
</div>
<h3 id="class-inquisitor-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-inquisitor/abolisher">Abolisher</Link></p><p><strong>Modifies or Replaces:</strong> Domains; Stern Gaze; Detect Alignment; Discern Lies</p><p>Abolishers are incorruptible inquisitors who weed out creatures of alien, unnatural origins, finding and exposing aberrations for what they are.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/cloaked_wolf">Cloaked Wolf</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Stern Gaze; Cunning Initiative; Monster Lore; Solo Tactics; Teamwork Feats</p><p>Some inquisitors are adept at appearing harmless until they throw off their unassuming facades and take their enemies by surprise.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/cold_iron_warden">Cold Iron Warden</Link></p><p><strong>Modifies or Replaces:</strong> Teamwork Feats; Bane; Discern Lies</p><p>The natural enemies of demoniacs and other cultists of fiendish forces, cold iron wardens are inquisitors who dedicate their lives to eradicating the taint of demonkind from Golarion.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/exarch">Exarch</Link></p><p><strong>Modifies or Replaces:</strong> Monster Lore; Detect Alignment; Bane; Second Judgment; Greater Bane; Third Judgment</p><p>(Dwarf Only) The gruff traditionalism of most dwarves finds its apex in those who adhere to a strict orthodoxy rooted in ancient principles and practices and who are not amenable whatsoever to change or innovation.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/exorcist">Exorcist</Link></p><p><strong>Modifies or Replaces:</strong> Second Judgment; Third Judgment; Slayer; True Judgment</p><p>Some inquisitors, as they learn more about the threat of possession and the machinations of the planes, task themselves to expel possessing spirits and conniving outsiders from the world whenever possible.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/expulsionist">Expulsionist</Link></p><p><strong>Modifies or Replaces:</strong> Domain; Monster Lore; Discern Lies</p><p>Expulsionists are inquisitors who seek to rid the material world of the corrupting influences of wicked spirits that twist mortals to their own ends.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/faith_hunter">Faith Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Domain; Justice, Destruction Judgment; Detect Alignment</p><p>Certain relentless inquisitors burn with special hatred for an enemy of specific convictions, and they stop at nothing when obsessively hunting these foes down.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/green_faith_marshal">Green Faith Marshal</Link></p><p><strong>Modifies or Replaces:</strong> Domain; Stern Gaze; Monster Lore; Discern Lies; Stalwart</p><p>The Green Faith marshal serves as a literal force of nature, hunting down and punishing those who have committed sins against nature through enslavement and mistreatment of animals or destruction of wild places.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/heretic">Heretic</Link></p><p><strong>Modifies or Replaces:</strong> Monster Lore</p><p>While all inquisitors hunt the enemies of the faith, sometimes, either through political maneuvering by her enemies or an unyielding tenacity that breaks her faith's basic tenets, an inquisitor can find herself a heretic.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/hexenhammer">Hexenhammer</Link></p><p><strong>Modifies or Replaces:</strong> Monster Lore; Stern Gaze; Domain; Cunning Initiative; Teamwork Feats; Solo Tactics; Spellcasting</p><p>Hexenhammers learn to use the hexes and some spells of witches, but must pay the price for dealing with supernatural powers, as they slip ever closer to the evil they seek to destroy.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/iconoclast">Iconoclast</Link></p><p><strong>Modifies or Replaces:</strong> Monster Lore; Detect Alignment; Discern Lies; Exploit Weakness; True Judgment</p><p>Some magic items are heretical by nature, enabling the unfaithful to spread wickedness. Iconoclasts seek out and remove such crutches, cleansing the taint these items exude.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/immolator">Immolator</Link></p><p><strong>Modifies or Replaces:</strong> Smiting Judgment; Bane; Greater Bane; True Judgment</p><p>(Ifrit Only) The immolator puts her pyromaniacal urges to work in the service of a deity. She brings burning retribution down upon the enemies of her faith, consigning their souls to the sacrificial flames.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/infiltrator">Infiltrator</Link></p><p><strong>Modifies or Replaces:</strong> Stern Gaze; Monster Lore; Track; Discern Lies</p><p>This inquisitor uses guile and deception to blend in among the enemies of the faith rather than confronting them head-on.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/keeper_of_construct">Keeper of Construct</Link></p><p><strong>Modifies or Replaces:</strong> Domain; Stern Gaze; Monster Lore; Exploit Weakness</p><p>Some of Brigh's inquisitors, and occasionally those who follow Torag, track down malicious construct crafters and fight renegade constructs with unrivaled expertise.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/keeper_of_the_current">Keeper of the Current</Link></p><p><strong>Modifies or Replaces:</strong> Track; Spellcasting; Discern Lies</p><p>Water-related deities all have organized churches beneath the waves that engage zealous followers to hunt down apostates and enemies. Regardless of their faith, these undersea zealots are known as keepers of the current.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/kinslayer">Kinslayer</Link></p><p><strong>Modifies or Replaces:</strong> Destruction Judgment; Teamwork Feats; Detect Alignment</p><p>(Dhampir Only) Appalled and guilt-ridden by the horrific circumstances of her birth, a kinslayer dedicates herself to eradicating the very creatures whose blood flows within her veins.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/living_grimoire">Living Grimoire</Link></p><p><strong>Modifies or Replaces:</strong> Monster Lore; Spellcasting; Cunning Initiative; Orisons; Judgment; Bane; Greater Bane; Second Judgment; Third Judgment; True Judgment</p><p>The living grimoire literally wields the sacred word of his deity, using his holy tome to smite the foes of his god with divine might.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/monster_tactician">Monster Tactician</Link></p><p><strong>Modifies or Replaces:</strong> Judgment; Discern Lies; Second Judgment; Third Judgment; Slayer; True Judgment</p><p>While most inquisitors have learned to take advantage of the movements of their opponents and allies in combat, some instead summon creatures as a means of claiming strategic advantage, exploiting the mystic connection between themselves and their summoned creatures to impart a bit of their own tactical knowledge.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/oathkeeper">Oathkeeper</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Class Skills; Monster Lore; Track</p><p>Oathkeepers formally oversee the creation of bargains and personally hunt down those who dare to violate them.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/preacher">Preacher</Link></p><p><strong>Modifies or Replaces:</strong> Solo Tactics</p><p>Some inquisitors wander the land to spread the true word of their faith.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/ravener_hunter">Ravener Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Domain; Spells; 3rd-level Teamwork Feat</p><p>For generations, the catfolk of Murraseth have viewed the cults of Angazhan with loathing and hatred, and they believe it is their sacred duty to hunt down the followers of the Ravener King and expel them from the Material Plane</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/reaper_of_secrets">Reaper of Secrets</Link></p><p><strong>Modifies or Replaces:</strong> Monster Lore; Stern Gaze; Solo Tactics</p><p>Masters of mind tricks and deception, these divine assassins track down and kill anyone who has forbidden knowledge about their faiths.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/relic_hunter">Relic Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting; Judgment; Domain; Bane; Greater Bane; Second Judgment; Third Judgment</p><p>Some inquisitors specialize in the use and recovery of long-lost relics of their faiths, drawing forth divine might from the recovered items in order to restore their sanctity and wield these artifacts against the enemies of their gods.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/royal_accuser">Royal Accuser</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Stern Gaze; Detect Alignment; Solo Tactics; Teamwork Bonus Feats</p><p>Royal accusers serve the prince of Ustalav, cutting through the nation's baroque politics and quietly facing its many threats.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/sacred_huntsmaster">Sacred Huntsmaster</Link></p><p><strong>Modifies or Replaces:</strong> Judgment; Solo Tactics; Second Judgment; Third Judgment; Slayer; True Judgment</p><p>Some inquisitors create a strong bond with an animal companion, and they hunt and punish threats to the faith as an awe-inspiring duo.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/sanctified_slayer">Sanctified Slayer</Link></p><p><strong>Modifies or Replaces:</strong> Judgment; Second Judgment; Third Judgment; Slayer; True Judgment</p><p>While all inquisitors root out enemies of the faith, in many orders and churches there's a select group of these religious hunters devoted to one goal, and one goal alone - to terminate the enemies of the faith wherever they can be found.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/secret_seeker">Secret Seeker</Link></p><p><strong>Modifies or Replaces:</strong> Monster Lore; Bane; Greater Bane; Exploit Weakness</p><p>Recognizing that torture is a poor method of securing truthful intelligence, secret seekers instead prefer magical means of inquiry.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/sin_eater">Sin Eater</Link></p><p><strong>Modifies or Replaces:</strong> Domain; 6th-level Teamwork Feat; Exploit Weakness</p><p>There is a sect of inquisitors in some religions that believes it is not enough to hunt the enemies of the church - one must also devour those enemies' sins.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/spellbreaker">Spellbreaker</Link></p><p><strong>Modifies or Replaces:</strong> Monster Lore; Teamwork Feats; Solo Tactics; True Judgment</p><p>The world is full of dangerous magic, and many recoil in the face of such power. The spellbreaker, by contrast, learns to recognize and resist certain types of magic, wading through waves of magic to reach her foes.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/suit_seeker">Suit Seeker</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Domain; Judgment; Second Judgment; Third Judgment; Detect Alignment; True Judgment</p><p>Though surrounded by meaning and tradition revered by most harrowers, the harrow is a tool that could be abused. Those inquisitors known as suit seekers take grave offense at the misuse of this ancient power, and dedicate their considerable skills to hunting and eliminating any who would abuse the harrow's magic and the heritage it represents.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/sworn_of_the_eldest">Sworn of the Eldest</Link></p><p><strong>Modifies or Replaces:</strong> Deity; Domain; Monster Lore; Stern Gaze; Solo Tactics; Teamwork Feats</p><p>(Gathlain Only) Although the Eldest rarely have adherents as other deities do, they still occasionally require mortal agents to advance their aims.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/tactical_leader">Tactical Leader</Link></p><p><strong>Modifies or Replaces:</strong> Stern Gaze; Solo Tactics; Teamwork Feats; Exploit Weakness</p><p>Rather than pursuing their holy missions alone, some inquisitors see the inherent value of working with like-minded allies to accomplish mutual goals.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/traceless_operative">Traceless Operative</Link></p><p><strong>Modifies or Replaces:</strong> Monster Lore; Stern Gaze; Track; Bane; Greater Bane</p><p>Traceless operatives practice subterfuge and careful preparation in order to accomplish their divine mandates.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/umbral_stalker">Umbral Stalker</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Domain; Justice Judgment</p><p>As a consummate lurker in the shadows, an umbral stalker observes the enemies of her faith and strikes before the unfortunate victims even know she is skulking nearby.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/urban_infiltrator">Urban Infiltrator</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Monster Lore; Stalwart</p><p>Masters of secretly gathering information to further their faith's ends, urban infiltrators excel at operating within an unfriendly society or infiltrating an enemy cult.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/vampire_hunter">Vampire Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Altered Judgments (Purity, Smiting); Detect Alignment; Altered Bane</p><p>The vampire hunter believes that the worst of undead are the ones with unnatural appetities for flesh and blood.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/vigilant_defender">Vigilant Defender</Link></p><p><strong>Modifies or Replaces:</strong> Judgment; Stern Gaze; Exploit Weakness; True Judgment</p><p>Some inquisitors focus more on protecting those who share their faiths and their ideals than on actively hunting their enemies.</p></div>
<div className="archetype"><p><Link to="/arc-inquisitor/witch_hunter">Witch Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Monster Lore; Detect Alignment; Discern Lies; True Judgment; Track; Exploit Weakness</p><p>When pursuing justice for their faith, inquisitors sometimes hunt sorcerers, witches, wizards, and other practitioners of arcane magic - but especially witches, since their devotion to a patron is often seen as suspect by many religions.</p></div>
<h3 id="class-inquisitor-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"inquisitor archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Bane"},{"header":"Greater Bane"},{"header":"Class Skills"},{"header":"Cunning Initiative"},{"header":"Deity"},{"header":"Detect Alignment"},{"header":"Discern Lies"},{"header":"Domain"},{"header":"Exploit Weakness"},{"header":"Judgment"},{"header":"Second Judgment"},{"header":"Third Judgment"},{"header":"True Judgment"},{"header":"Destruction Judgment"},{"header":"Justice Judgment"},{"header":"Purity Judgment"},{"header":"Smiting Judgment"},{"header":"Monster Lore"},{"header":"Orisons"},{"header":"Slayer"},{"header":"Solo Tactics"},{"header":"Spellcasting"},{"header":"Stalwart"},{"header":"Stern Gaze"},{"header":"Teamwork Feats"},{"header":"3rd-level Teamwork Feat"},{"header":"6th-level Teamwork Feat"},{"header":"Track"}],"data":[["‹arc-inquisitor/Abolisher›",null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-inquisitor/Cloaked Wolf›",null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,"X","X",null,null,null],["‹arc-inquisitor/Cold Iron Warden›",null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-inquisitor/Exarch›",null,"X","X",null,null,null,"X",null,null,null,null,"X","X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-inquisitor/Exorcist›",null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-inquisitor/Expulsionist›",null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-inquisitor/Faith Hunter›",null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-inquisitor/Green Faith Marshal›",null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X",null,null,null,null],["‹arc-inquisitor/Heretic›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-inquisitor/Hexenhammer›",null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,"X","X",null,"X","X",null,null,null],["‹arc-inquisitor/Iconoclast›",null,null,null,null,null,null,"X","X",null,"X",null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-inquisitor/Immolator›",null,"X","X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null],["‹arc-inquisitor/Infiltrator›",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,"X"],["‹arc-inquisitor/Keeper of Construct›",null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null],["‹arc-inquisitor/Keeper of the Current›",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X"],["‹arc-inquisitor/Kinslayer›",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-inquisitor/Living Grimoire›",null,"X","X",null,"X",null,null,null,null,null,"X","X","X","X",null,null,null,null,"X","X",null,null,"X",null,null,null,null,null,null],["‹arc-inquisitor/Monster Tactician›",null,null,null,null,null,null,null,"X",null,null,"X","X","X","X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-inquisitor/Oathkeeper›","X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X"],["‹arc-inquisitor/Preacher›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-inquisitor/Ravener Hunter›","X",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null],["‹arc-inquisitor/Reaper of Secrets›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,"X",null,null,null,null],["‹arc-inquisitor/Relic Hunter›",null,"X","X",null,null,null,null,null,"X",null,"X","X","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-inquisitor/Royal Accuser›",null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X","X",null,null,null],["‹arc-inquisitor/Sacred Huntsmaster›",null,null,null,null,null,null,null,null,null,null,"X","X","X","X",null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null],["‹arc-inquisitor/Sanctified Slayer›",null,null,null,null,null,null,null,null,null,null,"X","X","X","X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-inquisitor/Secret Seeker›",null,"X","X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-inquisitor/Sin Eater›",null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null],["‹arc-inquisitor/Spellbreaker›",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,"X",null,null,null,"X",null,null,null],["‹arc-inquisitor/Suit Seeker›",null,null,null,"X",null,null,"X",null,"X",null,"X","X","X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-inquisitor/Sworn of the Eldest›",null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,"X","X",null,null,null],["‹arc-inquisitor/Tactical Leader›",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X","X",null,null,null],["‹arc-inquisitor/Traceless Operative›",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,"X"],["‹arc-inquisitor/Umbral Stalker›",null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-inquisitor/Urban Infiltrator›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null],["‹arc-inquisitor/Vampire Hunter›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null],["‹arc-inquisitor/Vigilant Defender›",null,null,null,null,null,null,null,null,null,"X","X",null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-inquisitor/Witch Hunter›",null,null,null,null,null,null,"X","X",null,"X",null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X"]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-inquisitor-label">Footnotes</h3>
<ol>
<li id="class-inquisitor-Ex">
<p>Also see the <Link to="/arc-inquisitor/heretic">Heretic</Link> archetype for another option. <InnerLink id="backlink-class-inquisitor-ref-Ex-1" data-hash-target to="class-inquisitor-ref-Ex-1" aria-label="Back to reference Ex-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-A">
<p><Link to="/source/advanced_race_guide">Advanced Race Guide pg. 85</Link> <InnerLink id="backlink-class-inquisitor-ref-A-1" data-hash-target to="class-inquisitor-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-B">
<p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 15</Link> <InnerLink id="backlink-class-inquisitor-ref-B-1" data-hash-target to="class-inquisitor-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-C">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 4</Link> <InnerLink id="backlink-class-inquisitor-ref-C-1" data-hash-target to="class-inquisitor-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-D">
<p>Advanced Race Guide pg. 98 <InnerLink id="backlink-class-inquisitor-ref-D-1" data-hash-target to="class-inquisitor-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-E">
<p><Link to="/source/blood_of_shadows">Blood of Shadows pg. 15</Link> <InnerLink id="backlink-class-inquisitor-ref-E-1" data-hash-target to="class-inquisitor-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-F">
<p>Advanced Race Guide pg. 186 <InnerLink id="backlink-class-inquisitor-ref-F-1" data-hash-target to="class-inquisitor-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-G">
<p>Advanced Race Guide pg. 13 <InnerLink id="backlink-class-inquisitor-ref-G-1" data-hash-target to="class-inquisitor-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-H">
<p>Advanced Race Guide pg. 23 <InnerLink id="backlink-class-inquisitor-ref-H-1" data-hash-target to="class-inquisitor-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-I">
<p>Blood of Shadows pg. 7 <InnerLink id="backlink-class-inquisitor-ref-I-1" data-hash-target to="class-inquisitor-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-J">
<p>Advanced Race Guide pg. 33 <InnerLink id="backlink-class-inquisitor-ref-J-1" data-hash-target to="class-inquisitor-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-K">
<p>Advanced Race Guide pg. 43 <InnerLink id="backlink-class-inquisitor-ref-K-1" data-hash-target to="class-inquisitor-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-L">
<p>Advanced Race Guide pg. 63 <InnerLink id="backlink-class-inquisitor-ref-L-1" data-hash-target to="class-inquisitor-ref-L-1" aria-label="Back to reference L-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-M">
<p>Advanced Race Guide pg. 53 <InnerLink id="backlink-class-inquisitor-ref-M-1" data-hash-target to="class-inquisitor-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-N">
<p><Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 19</Link> <InnerLink id="backlink-class-inquisitor-ref-N-1" data-hash-target to="class-inquisitor-ref-N-1" aria-label="Back to reference N-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-O">
<p>Advanced Race Guide pg. 121 <InnerLink id="backlink-class-inquisitor-ref-O-1" data-hash-target to="class-inquisitor-ref-O-1" aria-label="Back to reference O-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-P">
<p>Advanced Race Guide pg. 73 <InnerLink id="backlink-class-inquisitor-ref-P-1" data-hash-target to="class-inquisitor-ref-P-1" aria-label="Back to reference P-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-Q">
<p>Advanced Player's Guide pg. 23 <InnerLink id="backlink-class-inquisitor-ref-Q-1" data-hash-target to="class-inquisitor-ref-Q-1" aria-label="Back to reference Q-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-R">
<p><Link to="/source/horror_adventures">Horror Adventures pg. 41</Link> <InnerLink id="backlink-class-inquisitor-ref-R-1" data-hash-target to="class-inquisitor-ref-R-1" aria-label="Back to reference R-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-S">
<p>Advanced Race Guide pg. 127 <InnerLink id="backlink-class-inquisitor-ref-S-1" data-hash-target to="class-inquisitor-ref-S-1" aria-label="Back to reference S-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-T">
<p>Blood of the Beast pg. 12 <InnerLink id="backlink-class-inquisitor-ref-T-1" data-hash-target to="class-inquisitor-ref-T-1" aria-label="Back to reference T-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-U">
<p><Link to="/source/kobolds_of_golarion">Kobolds of Golarion pg. 15</Link> <InnerLink id="backlink-class-inquisitor-ref-U-1" data-hash-target to="class-inquisitor-ref-U-1" aria-label="Back to reference U-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-V">
<p>Blood of the Beast pg. 20 <InnerLink id="backlink-class-inquisitor-ref-V-1" data-hash-target to="class-inquisitor-ref-V-1" aria-label="Back to reference V-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-W">
<p>Advanced Race Guide pg. 157 <InnerLink id="backlink-class-inquisitor-ref-W-1" data-hash-target to="class-inquisitor-ref-W-1" aria-label="Back to reference W-1">↩</InnerLink></p>
</li>
<li id="class-inquisitor-X">
<p>Advanced Race Guide pg. 170 <InnerLink id="backlink-class-inquisitor-ref-X-1" data-hash-target to="class-inquisitor-ref-X-1" aria-label="Back to reference X-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _investigator = {hasJL:true,title: "Investigator", jsx: <><div className="jumpList" id="class-investigator-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-investigator-alchemy-su">Alchemy and Extracts</InnerLink></li><li><InnerLink toTop to="class-investigator-inspiration-ex">Inspiration</InnerLink></li><li><InnerLink toTop to="class-investigator-trapfinding">Trapfinding</InnerLink></li><li><InnerLink toTop to="class-investigator-poison-lore-ex">Poison</InnerLink></li><li><InnerLink toTop to="class-investigator-investigator-talent-ex-or-su">Investigator Talent</InnerLink></li><li><InnerLink toTop to="class-investigator-keen-recollection">Keen Recollection</InnerLink></li><li><InnerLink toTop to="class-investigator-trap-sense-ex">Trap Sense</InnerLink></li><li><InnerLink toTop to="class-investigator-studied-combat-ex">Studied Combat</InnerLink></li><li><InnerLink toTop to="class-investigator-studied-strike-ex">Studied Strike</InnerLink></li><li><InnerLink toTop to="class-investigator-swift-alchemy-ex">Swift Alchemy</InnerLink></li><li><InnerLink toTop to="class-investigator-true-inspiration-ex">True Inspiration</InnerLink></li><li><InnerLink toTop to="class-investigator-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-investigator-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-investigator-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-investigator-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-investigator-investigator">Investigator</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 30</Link></p>
<p>Whether on the trail of a fugitive, a long-lost treasure trove, or a criminal mastermind, investigators are motivated by an intense curiosity about the world and use knowledge of it as a weapon. Mixing gumption and learnedness into a personal alchemy of daring, investigators are full of surprises. Observing the world around them, they gain valuable knowledge about the situation they're in, process that information using inspiration and deduction, and cut to the quick of the matter in unexpected ways. Investigators are always evaluating situations they encounter, sizing up potential foes, and looking out for secret dangers, all while using their vast knowledge and powers of perception to find solutions to the most perplexing problems.</p>
<p><strong>Role:</strong> Investigators live to solve mysteries and find inventive ways to get out of jams. They serve as advisors and support for their adventuring parties, but can take center stage when knowledge and cunning are needed. No slouches in battle, they know how to make surprise attacks and use inspiration to bring those attacks home.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Parent Class(es)</th><td colSpan={2}><Link to="/class/alchemist">Alchemist</Link> and <Link to="/class/rogue">rogue</Link>.</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>3d6 &times; 10 gp (average 105 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>6 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/disable_device">Disable Device</Link>, <Link to="/skill/escape_artist">Escape Artist</Link>, <Link to="/skill/sleight_of_hand">Sleight of Hand</Link>, <Link to="/skill/stealth">Stealth</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/appraise">Appraise</Link>, <Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link>, <Link to="/skill/knowledge_geography">Knowledge (geography)</Link>, <Link to="/skill/knowledge_history">Knowledge (history)</Link>, <Link to="/skill/knowledge_local">Knowledge (local)</Link>, <Link to="/skill/knowledge_nature">Knowledge (nature)</Link>, <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link>, <Link to="/skill/knowledge_planes">Knowledge (planes)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, <Link to="/skill/linguistics">Linguistics</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/heal">Heal</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/disguise">Disguise</Link>, <Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/perform_any">Perform (any)</Link>, <Link to="/skill/use_magic_device">Use Magic Device</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-investigator-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-investigator--table-0"><table>
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
<td>Alchemy, inspiration, trapfinding</td>
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
<td>Poison lore, poison resistance +2</td>
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
<td>Investigator talent, keen recollection, trap sense +1</td>
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
<td>Studied combat, studied strike +1d6, swift alchemy</td>
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
<td>Investigator talent, poison resistance +4</td>
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
<td>Studied strike +2d6, trap sense +2</td>
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
<td>Investigator talent</td>
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
<td>Poison resistance +6, studied strike +3d6</td>
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
<td>Investigator talent, trap sense +3</td>
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
<td>Studied strike +4d6</td>
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
<td>Investigator talent, poison immunity</td>
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
<td>Studied strike +5d6, trap sense +4</td>
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
<td>Investigator talent</td>
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
<td>Studied strike +6d6</td>
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
<td>Investigator talent, trap sense +5</td>
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
<td>Studied strike +7d6</td>
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
<td>Investigator talent</td>
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
<td>Studied strike +8d6, trap sense +6</td>
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
<td>Investigator talent</td>
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
<td>Studied strike +9d6, true inspiration</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={4}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td><Link to="/eq-weapon/hand_crossbow">hand crossbow</Link></td><td><Link to="/eq-weapon/rapier">rapier</Link></td></tr><tr><td><Link to="/eq-weapon/sap">sap</Link></td><td><Link to="/eq-weapon/shortbow">shortbow</Link></td></tr><tr><td><Link to="/eq-weapon/short_sword">short sword</Link></td><td><Link to="/eq-weapon/sword_cane">sword cane</Link></td></tr><tr><th>Light Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Medium Armor?</th><td colSpan={2}>No</td></tr><tr><th>Heavy Armor?</th><td colSpan={2}>No</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">No</td></tr></tbody></table>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-investigator-alchemy-su" data-hash-target><div className="box">Alchemy (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When using Craft (alchemy) to create an alchemical item, you gain a competence bonus equal to your class level on the Craft (alchemy) check. In addition, you can use Craft (alchemy) to identify potions as if using <Link to="/spell/detect_magic">detect magic</Link>. You must hold the potion for 1 round to make such a check.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Extracts</div></div><div className="abEnd"><div className="box"><p>You can prepare an extract of any formula you know. To learn or use an extract, you must have an Intelligence score equal to at least 10 + the extract's level. The DC for a saving throw against your extract is 10 + the extract level + the your Intelligence modifier.</p>
<p>Like an alchemist, you prepare your spells by mixing ingredients and a tiny fraction of your own magical power into a number of extracts, and then effectively cast the spell by drinking the extract. These extracts have powerful effects, but they are also bound to their creator. Extracts behave like spells in potion form, and as such their effects can be dispelled by <Link to="/spell/dispel_magic">dispel magic</Link> and similar effects, using your level as the caster level.</p>
<p>When you mix an extract, you infuse the chemicals and reagents in the extract with magic siphoned from your own magical aura. An extract immediately become inert if it leaves your possession, reactivating as soon as it returns to your keeping - you cannot normally pass out your extracts for allies to use. An extract, once created, remains potent for 1 day before losing its magic, so you must reprepare your extracts every day. Mixing an extract takes 1 minute of work.</p>
<p>Creating extracts consumes raw material, but the cost of those materials is insignificant - comparable to the valueless material components of most spells. If a spell normally has a costly material component, that component is expended during the consumption of that particular extract. Extracts cannot be made from spells that have focus requirements; extracts that duplicate divine spells never have a divine focus requirement.</p>
<p>You use formulae from the <Link to="/main/spells_investigator">investigator</Link> list to determine the extracts you can know. You may know any number of formulae. You store your formulae in a special tome called a formula book. You must refer to this book whenever you prepare an extract.</p>
<p>At 1st level, you start with two 1st-level formulae of your choice, plus a number of additional formulae equal to your Intelligence modifier. At each new investigator level, you gain one new formula for any level that you can create. You can also add formulae to your book just like a wizard <Link to="/rule/adding_spells_to_a_wizards_spellbook">adds spells to his spellbook</Link>, using the same costs, pages, and time requirements. A formula book costs as much as a <Link to="/eq-misc/spellbook">spellbook</Link>. You can study a <Link to="/class/wizard">wizard's</Link> spellbook to learn any formula that is equivalent to a spell the spellbook contains. A wizard, however, cannot learn spells from a formula book. You can also learn formulae from another investigator's or an alchemist's formula book (and vice versa). You do not need to decipher arcane writing before copying that formulae.</p>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">You can create only a certain number of extracts of each level per day. In addition, you receive <Link to="/rule/determine_bonuses">bonus extracts per day</Link> if you have a high Intelligence score, in the same way a wizard receives bonus spells per day.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-investigator-inspiration-ex" data-hash-target><div className="box">Inspiration (Ex)</div><div className="flavor">An investigator is beyond knowledgeable and skilled - he also possesses keen powers of observation and deduction that far surpass the abilities of others.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You have an inspiration pool equal to <Link to="/misc/half">half</Link> your level + your Intelligence modifier (minimum 1). Your inspiration pool refreshes each day, typically after you get a restful night's sleep.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Free Action</div></div><div className="abEnd"><div className="box">You can expend one use of inspiration from your pool to add 1d6 to the result of a check, including any on which you take 10 or 20. This choice is made after the check is rolled and before the results are revealed.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">You can only use inspiration once per check or roll.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You can use inspiration on any Knowledge, Linguistics, or Spellcraft skill checks without expending a use of inspiration, if you're trained in the skill. Using inspiration on attack rolls and saving throws costs two uses of inspiration each time. In the case of saving throws, using inspiration is an <strong className="hl">immediate action</strong>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-investigator-trapfinding" data-hash-target><div className="box">Trapfinding</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You add 1/2 your level to Perception skill checks made to locate traps and to Disable Device checks (minimum 1). You can use Disable Device to disarm magical traps.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-investigator-poison-lore-ex" data-hash-target><div className="box">Poison Lore (Ex)</div><div className="flavor">An investigator has a deep understanding and appreciation for poisons.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You cannot accidentally poison yourself when applying poison to a weapon.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">If you spend 1 minute physically examining the poison, you can attempt a Knowledge (nature) check to identify any natural poison or Knowledge (arcana) check to identify any magical poison (DC = the poison's saving throw DC). Lastly, once a poison is identified, you can spend 1 minute and attempt a Craft (alchemy) check (DC = the poison's saving throw DC) to neutralize 1 dose of the poison. Success renders the dose harmless. You have no chance of accidentally poisoning yourself when examining or attempting to neutralize a poison.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-investigator-poison-resistance-ex" data-hash-target><div className="box">Poison Resistance (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain a +2 bonus on all saving throws against poison.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 5th Level</div></div><div className="abEnd"><div className="box">The bonus becomes +4.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">The bonus becomes +6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">You are now completely immune to poison.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-investigator-investigator-talent-ex-or-su" data-hash-target><div className="box">Investigator Talent (Ex or Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain an <Link to="/ability/investigator_talents">investigator talent</Link>. Except where otherwise noted, each investigator talent can only be selected once.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 5th Level</div></div><div className="abEnd"><div className="box">You gain a new talent.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">You gain a new talent.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">You gain a new talent.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">You gain a new talent.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">You gain a new talent.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">You gain a new talent.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 17th Level</div></div><div className="abEnd"><div className="box">You gain a new talent.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">You gain a new talent.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Some investigator talents add effects to an your <em>studied combat</em> or <em>studied strike.</em> Only one of these talents can be applied to an individual attack, but the decision can be made when the damage is dealt.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-investigator-keen-recollection" data-hash-target><div className="box">Keen Recollection</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can attempt all Knowledge skill checks untrained.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-investigator-trap-sense-ex" data-hash-target><div className="box">Trap Sense (Ex)</div><div className="flavor">An investigator gains an intuitive sense that alerts him to danger from traps.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain a bonus on Reflex saving throws to avoid traps and a dodge bonus to AC against attacks by traps. Both of these bonuses are equal to one-third of your investigator level.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-investigator-studied-combat-ex" data-hash-target><div className="box">Studied Combat (Ex)</div><div className="flavor">With a keen eye and calculating mind, an investigator can assess the mettle of his opponent to take advantage of gaps in talent and training.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">This effect lasts for a number of rounds equal to your Intelligence modifier (minimum 1) or until you deal damage with a <em>studied strike,</em> whichever comes first.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Move-Equivalent Action</div></div><div className="abEnd"><div className="box">You can study a single enemy that you can see. You add 1/2 your investigator level as an insight bonus on melee attack rolls and as a bonus on damage rolls against the creature.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The bonus on damage rolls is <Link to="/misc/precision_damage">precision damage</Link>, and is not multiplied on a critical hit. You can only have one target of studied combat at a time, and once a creature has become a target of this, it cannot become the target of your <em>studied combat</em> again for 24 hours unless you expend one use of inspiration when using this ability.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-investigator-studied-strike-ex" data-hash-target><div className="box">Studied Strike (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Free Action</div></div><div className="abEnd"><div className="box"><p>Upon successfully hitting your <em>studied target</em> with a melee attack, you deal 1d6 additional damage. This is <Link to="/misc/precision_damage">precision damage</Link>, and is not multiplied on a critical hit; creatures that are immune to sneak attacks are also immune to <em>studied strike.</em></p>
<p>If your attack used a weapon that deals nonlethal damage (like a <Link to="/eq-weapon/sap">sap</Link>, <Link to="/eq-weapon/whip">whip</Link>, or an unarmed strike), you may choose to have the additional damage from studied strike be nonlethal damage instead of lethal damage. If you chose to make an attack with a lethal weapon instead deal nonlethal damage (with the usual -4 penalty), the studied strike damage may also deal nonlethal damage.</p>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">The damage becomes 2d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">The damage becomes 3d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">The damage becomes 4d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">The damage becomes 5d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 14th Level</div></div><div className="abEnd"><div className="box">The damage becomes 6d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">The damage becomes 7d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">The damage becomes 8d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">The damage becomes 9d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You cannot use <em>studied strike</em> against a creature with <Link to="/rule/concealment">concealment</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-investigator-swift-alchemy-ex" data-hash-target><div className="box">Swift Alchemy (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">It takes you half the normal amount of time to create alchemical items.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Move-Equivalent Action</div></div><div className="abEnd"><div className="box">You can apply poison to a weapon. (This is normally a standard action.)</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-investigator-true-inspiration-ex" data-hash-target><div className="box">True Inspiration (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Free Action</div></div><div className="abEnd"><div className="box">You can use inspiration on all skill checks - even ones you're not trained in - and all ability checks without spending inspiration. In addition, whenever you use inspiration on an ability check, attack roll, saving throw, or skill check, you add 2d6 rather than 1d6 to the result. Some talents can affect this. If using the <Link to="/invtalent/amazing_inspiration">amazing inspiration</Link> investigator talent, you roll 2d8 instead. If using this with <Link to="/invtalent/empathy">empathy</Link>, <Link to="/invtalent/tenacious_inspiration">tenacious inspiration</Link>, <Link to="/invtalent/underworld_inspiration">underworld inspiration</Link>, or a similar talent, you roll two sets of inspiration dice and use the higher of the two results.</div></div></div></div>
<h3 id="class-investigator-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-investigator--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Deadly Study (Ex)</td><td>At 20th level, the investigator knows just how to hit where it hurts. The investigator increases the bonus from studied combat by 4, and his studied strike damage increases by 3d6.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-investigator-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Aphorite:</strong> Gain a +1/4 bonus on damage rolls for critical hits made while using studied combat.<sup><InnerLink showBacklink="backlink-class-investigator-ref-A-1" id="class-investigator-ref-A-1" data-hash-target to="class-investigator-A">1</InnerLink></sup></p>
<p><strong>Catfolk:</strong> Add 1 to the bonus provided to a single skill (maximum +2) by inspiration. This skill must be one the investigator can already apply inspiration to. The investigator can select a different skill each level.<sup><InnerLink showBacklink="backlink-class-investigator-ref-B-1" id="class-investigator-ref-B-1" data-hash-target to="class-investigator-B">2</InnerLink></sup></p>
<p><strong>Duskwalker:</strong> Add a +1/3 bonus on inspiration rolls applied to Heal, Knowledge and Linguistics checks.<sup><InnerLink showBacklink="backlink-class-investigator-ref-C-1" id="class-investigator-ref-C-1" data-hash-target to="class-investigator-C">3</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Gain a +1/4 bonus on Perception checks when underground and +1/2 bonus to the investigator's trap sense ability regarding stone traps.<sup><InnerLink showBacklink="backlink-class-investigator-ref-D-1" id="class-investigator-ref-D-1" data-hash-target to="class-investigator-D">4</InnerLink></sup></p>
<p><strong>Elf:</strong> Increase the total number of points in the investigator's inspiration pool by 1/3.<sup><InnerLink showBacklink="backlink-class-investigator-ref-D-2" id="class-investigator-ref-D-2" data-hash-target to="class-investigator-D">4</InnerLink></sup></p>
<p><strong>Ganzi:</strong> Increase the total number of points in the investigator's inspiration pool by 1/3.<sup><InnerLink showBacklink="backlink-class-investigator-ref-E-1" id="class-investigator-ref-E-1" data-hash-target to="class-investigator-E">5</InnerLink></sup></p>
<p><strong>Gathlain:</strong> Add a +1/3 bonus on inspiration rolls applied to Bluff and Knowledge checks.<sup><InnerLink showBacklink="backlink-class-investigator-ref-F-1" id="class-investigator-ref-F-1" data-hash-target to="class-investigator-F">6</InnerLink></sup></p>
<p><strong>Gillman:</strong> Increase the total number of points in the investigator's inspiration pool by 1/3.<sup><InnerLink showBacklink="backlink-class-investigator-ref-G-1" id="class-investigator-ref-G-1" data-hash-target to="class-investigator-G">7</InnerLink></sup></p>
<p><strong>Gnome:</strong> Add one extract formula from the investigator's list to his formula book. This formula must be at least 1 formula level below the highest level the investigator can create.<sup><InnerLink showBacklink="backlink-class-investigator-ref-H-1" id="class-investigator-ref-H-1" data-hash-target to="class-investigator-H">8</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Gain a +1/4 bonus on all inspiration rolls.<sup><InnerLink showBacklink="backlink-class-investigator-ref-H-2" id="class-investigator-ref-H-2" data-hash-target to="class-investigator-H">8</InnerLink></sup></p>
<p><strong>Halfling:</strong> Add one extract formula from the investigator's list to his formula book. This formula must be at least 1 formula level below the highest level the investigator can create.<sup><InnerLink showBacklink="backlink-class-investigator-ref-H-3" id="class-investigator-ref-H-3" data-hash-target to="class-investigator-H">8</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Gain a +1/3 bonus on critical hit confirmation rolls made while using studied combat (maximum bonus of +5). This bonus does not stack with those gained through <Link to="/feat/critical_focus">Critical Focus</Link> and similar effects.<sup><InnerLink showBacklink="backlink-class-investigator-ref-I-1" id="class-investigator-ref-I-1" data-hash-target to="class-investigator-I">9</InnerLink></sup></p>
<p><strong>Human:</strong> Add one extract formula from the investigator's formula list to his formula book. This formula must be at least 1 formula level below the highest level the investigator can create.<sup><InnerLink showBacklink="backlink-class-investigator-ref-I-2" id="class-investigator-ref-I-2" data-hash-target to="class-investigator-I">9</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-investigator-ref-J-1" id="class-investigator-ref-J-1" data-hash-target to="class-investigator-J">10</InnerLink></sup></p>
<p><strong>Locathah:</strong> Add a +1/2 bonus on Bluff checks to feint and a +1/2 bonus on Diplomacy checks to gather information.<sup><InnerLink showBacklink="backlink-class-investigator-ref-K-1" id="class-investigator-ref-K-1" data-hash-target to="class-investigator-K">11</InnerLink></sup></p>
<p><strong>Ratfolk:</strong> Add 1 to the bonus provided to a single skill (maximum +2) by inspiration. This skill must be one to which the investigator can already apply inspiration. The investigator can select a different skill at each level.<sup><InnerLink showBacklink="backlink-class-investigator-ref-L-1" id="class-investigator-ref-L-1" data-hash-target to="class-investigator-L">12</InnerLink></sup></p>
<p><strong>Shabti:</strong> Add 1/6 rounds to the duration of the investigator's studied combat.<sup><InnerLink showBacklink="backlink-class-investigator-ref-M-1" id="class-investigator-ref-M-1" data-hash-target to="class-investigator-M">13</InnerLink></sup></p>
</div>
<h3 id="class-investigator-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-investigator/antiquarian">Antiquarian</Link></p><p><strong>Modifies or Replaces:</strong> Alchemy; Poison Lore; Poison Resistance; Poison Immunity; Swift Alchemy</p><p>Antiquarians are collectors, explorers, and scholars who delve into ruined places in search of lost lore and artifacts.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/bonded_investigator">Bonded Investigator</Link></p><p><strong>Modifies or Replaces:</strong> Poison Lore; Poison Resistance; Poison Immunity; 4th-level Studied Strike, 7th-level Investigator Talent</p><p>Bonded investigators use intelligent familiars to assist them in their investigations.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/cartographer">Cartographer</Link></p><p><strong>Modifies or Replaces:</strong> Poison Lore; Poison Resistance; Keen Recollection; Swift Alchemy</p><p>Cartographers are eager trailblazers who explore uncharted terrain, study landmarks, and find new paths through the wilderness.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/cipher">Cipher</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Inspiration; Trapfinding; Poison Lore; Poison Resistance; Poison Immunity; Trap Sense; Swift Alchemy; 3rd, 5th, 7th, 9th, 11th-level Investigator Talent; Studied Strike</p><p>A cipher trains himself to remain undetected and ignored in order to conduct his investigations without opposition or bothersome questions</p></div>
<div className="archetype"><p><Link to="/arc-investigator/conspirator">Conspirator</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Inspiration; Trap Sense; 7th-level Investigator Talent</p><p>A conspirator uses his knowledge of investigations to make sure he avoids any investigations that his rivals perform.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/cryptid_scholar">Cryptid Scholar</Link></p><p><strong>Modifies or Replaces:</strong> Poison Lore; Poison Resistance; Studied Combat; Studied Strike</p><p>Cryptid scholars research monsters that lurk secretly at the edge of civilization, developing a deep expertise regarding their anatomy, habits, and ecology.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/cult_hunter">Cult Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Poison Resistance; Poison Immunity; Poison Lore; Trap Sense; Swift Alchemy; Studied Combat; Studied Strike; 7th, 13th-level Investigator Talent</p><p>Cult hunters seek out heretical secret societies, purging their ideological taint and banishing summoned servants.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/dread_investigator">Dread Investigator</Link></p><p><strong>Modifies or Replaces:</strong> Inspiration; Studied Combat; Studied Strike; Poison Lore; Poison Resistance; Poison Immunity; 7th, 13th, and 19th-level Talents</p><p>The dread investigator observes human behavior after the fact, honing their intuition by delving into the mysteries of death.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/empiricist">Empiricist</Link></p><p><strong>Modifies or Replaces:</strong> Poison Lore; Poison Resistance; Swift Alchemy; True Inspiration</p><p>Champions of deductive reasoning and logical insight, empiricists put their faith in facts, data, confirmed observations, and consistently repeatable experiments - these things are their currency of truth.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/engineer">Engineer</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Poison Lore; Poison Resistance; Trap Sense</p><p>A number of investigators use their vast knowledge to build machines that replicate the intricacies of the world</p></div>
<div className="archetype"><p><Link to="/arc-investigator/forensic_physician">Forensic Physician</Link></p><p><strong>Modifies or Replaces:</strong> Inspiration; Trapfinding; Trap Sense; 3rd, 5th-level Investigator Talent</p><p>A forensic physician specializes in analyzing medical details in order to solve crimes and uncover evidence.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/gravedigger">Gravedigger</Link></p><p><strong>Modifies or Replaces:</strong> Weapon and Armor Proficiency; Alchemy; Trapfinding; Trap Sense; Poison Resistance; Poison Immunity; Studied Combat; Studied Strike; Swift Alchemy</p><p>Gravediggers pursue long buried mysteries, figuratively and literally digging up the truth and finding answers to secrets only moldering corpses and dry bones can tell.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/guardian_of_immortality">Guardian of Immortality</Link></p><p><strong>Modifies or Replaces:</strong> Poison Lore; Poison Resistance; 7th, 13th-level Investigator Talent; Poison Immunity</p><p>Guardians of immortality are Thuvian investigators charged with hunting down those who would attempt to steal or learn for themselves the secret to creating the sun orchid elixir.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/hallucinist">Hallucinist</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Trap Sense; 3rd, 5th, 7th, 9th, 11th, 15th-level Investigator Talent; Poison Lore; Poison Resistance; Poison Immunity; Keen Recollection; Studied Combat</p><p>A hallucinist imbibes magical drugs to expand his mind into the psychedelic world, extending his awareness to things he could not normally perceive.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/holomog_demolitionist">Holomog Demolitionist</Link></p><p><strong>Modifies or Replaces:</strong> Poison Lore; Poison Resistance; 3rd, 9th-level Investigator Talent; Studied Strike</p><p>Holomog is an ancient nation built on even more ancient ruins. Its renowned civil engineers develop skills that allow them to take full advantage of their environments.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/infiltrator">Infiltrator</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Poison Lore; Poison Resistance</p><p>An infiltrator specializes in investigating or disrupting groups from within.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/jinyiwei">Jinyiwei</Link></p><p><strong>Modifies or Replaces:</strong> Inspiration; Alchemy; Trapfinding; Trap Sense; Swift Alchemy</p><p>Jinyiwei are a special task force of secret police whose mission is to root out, expose, and counteract their government's existing wrongdoing.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/lamplighter">Lamplighter</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Poison Lore; Poison Resistance; Poison Immunity; Keen Recollection; Trap Sense</p><p>Lamplighters are investigators tasked with keeping the night streets safe and lit, and securing darkened areas against whatever dangers lurk in the shadows.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/lepidstadt_inspector">Lepidstadt Inspector</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Trap Sense; Poison Resistance; Poison Immunity; Swift Alchemy; 5th-level Investigator Talent</p><p>The ability of investigators trained at the University of Lepidstadt to get to the bottom of a mystery is legendary, and troubled settlements throughout the region often send petitions to the university requesting the aid of a formally trained inspector when some mystery threatens the community as a whole.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/majordomo">Majordomo</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Alchemy; Swift Alchemy; Trap Sense</p><p>In a world of intrigue where the loyalties of staff can be bought and sold, sometimes it takes the skills of an investigator to follow the byzantine paper trails and prevent embezzling and espionage within the estates of the elite.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/malice_binder">Malice Binder</Link></p><p><strong>Modifies or Replaces:</strong> Inspiration; Trapfinding; Trap Sense; Alchemy; Poison Resistance; Poison Immunity</p><p>A lock of hair, a bit of blood, even a footprint is enough to grant a wily witch hunter an edge. Malice binders often rise from the ranks of the common folk rather than from wealthy nobles or the church. Their magic is old and crude, but devastatingly effective against those they hunt.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/mastermind">Mastermind</Link></p><p><strong>Modifies or Replaces:</strong> Inspiration; Trapfinding; Trap Sense; Swift Alchemy; 9th-level Investigator Talent</p><p>Although some investigators use their honed senses and cunning insight for personal gain, no one excels at such endeavors like the mastermind.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/natural_philosopher">Natural Philosopher</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; Class Skills; Inspiration; Trapfinding; Alchemy; Trap Sense; 3rd-level Investigator Talent</p><p>Natural philosophers are scholars, explorers, and survivalists who feel at home in nature, seldom longing for the comforts of the city.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/portal_seeker">Portal Seeker</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Poison Resistance; Poison Lore; Studied Strike; Poison Immunity</p><p>While most investigators seek answers to mundane mysteries, portal seekers chase more unusual enigmas: portals to other planes.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/profiler">Profiler</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Poison Lore; Trap Sense; Poison Resistance; Poison Immunity; Swift Alchemy; 7th-level Investigator Talent</p><p>Profilers understand the human psyche to an intense degree, allowing them to predict the criminals they hunt.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/psychic_detective">Psychic Detective</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Alchemy; Poison Lore; Poison Resistance; Swift Alchemy; Poison Immunity; 3rd-level Talent; Investigator Talents</p><p>A psychic detective supplements her keen insight with occult skill to unravel mysteries both ordinary and supernatural.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/questioner">Questioner</Link></p><p><strong>Modifies or Replaces:</strong> Inspiration; Alchemy; Poison Lore</p><p>Dabblers in arcane magic and masters of stealth and guile, questioners are investigators who often find themselves mucking about in cases for less-than-savory clientele or that require an extra bit of subtlety.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/reckless_epicurean">Reckless Epicurean</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; 5th, 13th-level Investigator Talent; Poison Resistance; Poison Immunity</p><p>Whether an obsessive scientist, a healer determined to ensure the safety of her tinctures, or a seeker of new and interesting potions, a reckless epicurean's body is saturated with experimental chemicals and magic.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/ruthless_agent">Ruthless Agent</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Inspiration; Trapfinding; Trap Sense; Swift Alchemy; 11th, 17th-level Investigator Talents</p><p>Ruthless agents are often called upon for their skills at extracting information by any means necessary.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/scavenger">Scavenger</Link></p><p><strong>Modifies or Replaces:</strong> Alchemy; Inspiration; Poison Lore; Poison Resistance; Poison Immunity</p><p>(Ratfolk archetype) Scavengers are masters of systems: how they fit together, why they work, and how to make the most of their parts.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/skeptic">Skeptic</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Poison Resistance; Swift Alchemy; 7th level Investigator Talent</p><p>The skeptic accepts the existence of the occult world while challenging claims that the supernatural explains all of life's problems.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/sleuth">Sleuth</Link></p><p><strong>Modifies or Replaces:</strong> Alchemy; Swift Alchemy</p><p>A sleuth is an investigator who relies on good fortune and guile rather than alchemy.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/spiritualist">Spiritualist</Link></p><p><strong>Modifies or Replaces:</strong> Alchemy; Poison Lore; Poison Resistance; Trap Sense; Swift Alchemy; Poison Immunity</p><p>While most investigators look to the physical world to gain their knowledge, there are those who seek out knowledge beyond the pale.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/star_watcher">Star Watcher</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; Alchemy; Trapfinding; Trap Sense; Swift Alchemy</p><p>Star watchers study the movements and positions of the sun, the moon, and the stars, searching for secrets written in the sky.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/steel_hound">Steel Hound</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; Poison Lore; Swift Alchemy</p><p>Steel hounds are investigators who have taken to using firearms in place of the more mundane weapons their counterparts favor.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/tekritanin_arbiter">Tekritanin Arbiter</Link></p><p><strong>Modifies or Replaces:</strong> Trapfinding; Poison Lore; Poison Resistance; Trap Sense</p><p>The Tekritanin League facilitated trade and settled disputes between a vast array of diverse cultures. The arbiters were the first line of diplomatic defense, solving problems before they could become disruptive.</p></div>
<div className="archetype"><p><Link to="/arc-investigator/toxin_codexer">Toxin Codexer</Link></p><p><strong>Modifies or Replaces:</strong> Alchemy; Trapfinding; 3rd-level Investigator Talent; Keen Recollection; Trap Sense</p><p>A toxin codexer meticulously seeks out new poisons and catalogs their effects, both those that are harmful and those that are potentially beneficial.</p></div>
<h3 id="class-investigator-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"investigator archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alchemy"},{"header":"Alignment"},{"header":"Class Skills"},{"header":"Inspiration"},{"header":"Investigator Talents"},{"header":"3rd-level Talent"},{"header":"5th-level Talent"},{"header":"7th-level Talent"},{"header":"9th-level Talent"},{"header":"11th-level Talent"},{"header":"13th-level Talent"},{"header":"15th-level Talent"},{"header":"17th-level Talent"},{"header":"19th-level Talent"},{"header":"Keen Recollection"},{"header":"Poison Lore"},{"header":"Poison Resistance"},{"header":"Poison Immunity"},{"header":"Studied Combat"},{"header":"Studied Strike"},{"header":"4th-level Studied Strike"},{"header":"Swift Alchemy"},{"header":"Trapfinding"},{"header":"Trap Sense"},{"header":"True Inspiration"},{"header":"Weapon/Armor Proficiency"}],"data":[["‹arc-investigator/Antiquarian›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,"X",null,null,null,null],["‹arc-investigator/Bonded Investigator›",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X","X","X",null,null,"X",null,null,null,null,null],["‹arc-investigator/Cartographer›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,"X",null,null,null,null],["‹arc-investigator/Cipher›",null,null,"X","X",null,"X","X","X","X","X",null,null,null,null,null,"X","X","X",null,"X",null,"X","X","X",null,null],["‹arc-investigator/Conspirator›",null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null],["‹arc-investigator/Cryptid Scholar›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,"X","X",null,null,null,null,null,null],["‹arc-investigator/Cult Hunter›",null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,"X","X","X","X","X",null,"X","X","X",null,null],["‹arc-investigator/Dread Investigator›",null,null,null,"X",null,null,null,"X",null,null,"X",null,null,"X",null,"X","X","X","X","X",null,null,null,null,null,null],["‹arc-investigator/Empiricist›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,"X",null,null,"X",null],["‹arc-investigator/Engineer›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,"X","X",null,null],["‹arc-investigator/Forensic Physician›",null,null,null,"X",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null],["‹arc-investigator/Gravedigger›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X","X",null,"X","X","X",null,"X"],["‹arc-investigator/Guardian of Immortality›",null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,"X","X","X",null,null,null,null,null,null,null,null],["‹arc-investigator/Hallucinist›",null,null,null,null,null,"X","X","X","X","X",null,"X",null,null,"X","X","X","X","X",null,null,null,"X","X",null,null],["‹arc-investigator/Holomog Demolitionist›",null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,"X","X",null,null,"X",null,null,null,null,null,null],["‹arc-investigator/Infiltrator›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,"X",null,null,null],["‹arc-investigator/Jinyiwei›","X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null],["‹arc-investigator/Lamplighter›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X","X","X","X",null,null,null,null,null,"X",null,null],["‹arc-investigator/Lepidstadt Inspector›",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X","X",null,null,null,"X","X","X",null,null],["‹arc-investigator/Majordomo›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null],["‹arc-investigator/Malice Binder›","X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,"X","X",null,null],["‹arc-investigator/Mastermind›",null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null],["‹arc-investigator/Natural Philosopher›","X",null,"X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,"X"],["‹arc-investigator/Portal Seeker›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,"X",null,null,"X",null,null,null],["‹arc-investigator/Profiler›",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X","X","X",null,null,null,"X","X","X",null,null],["‹arc-investigator/Psychic Detective›","X",null,"X",null,"X","X",null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,"X",null,null,null,null],["‹arc-investigator/Questioner›","X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-investigator/Reckless Epicurean›",null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,"X","X",null,null,null,null,"X",null,null,null],["‹arc-investigator/Ruthless Agent›",null,"X",null,"X",null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,"X","X","X",null,null],["‹arc-investigator/Scavenger›","X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null,null],["‹arc-investigator/Skeptic›",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X",null,null,null],["‹arc-investigator/Sleuth›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-investigator/Spiritualist›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,"X",null,"X",null,null],["‹arc-investigator/Star Watcher›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,"X"],["‹arc-investigator/Steel Hound›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,"X"],["‹arc-investigator/Tekritanin Arbiter›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,"X","X",null,null],["‹arc-investigator/Toxin Codexer›","X",null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X","X",null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-investigator-label">Footnotes</h3>
<ol>
<li id="class-investigator-A">
<p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 15</Link> <InnerLink id="backlink-class-investigator-ref-A-1" data-hash-target to="class-investigator-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-investigator-B">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 4</Link> <InnerLink id="backlink-class-investigator-ref-B-1" data-hash-target to="class-investigator-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-investigator-C">
<p>Plane-Hopper's Handbook pg. 17 <InnerLink id="backlink-class-investigator-ref-C-1" data-hash-target to="class-investigator-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-investigator-D">
<p><Link to="/source/advanced_class_guide">Advanced Class Guide pg. 69</Link> <InnerLink id="backlink-class-investigator-ref-D-1" data-hash-target to="class-investigator-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink> <InnerLink id="backlink-class-investigator-ref-D-2" data-hash-target to="class-investigator-ref-D-2" aria-label="Back to reference D-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-investigator-E">
<p>Plane-Hopper's Handbook pg. 19 <InnerLink id="backlink-class-investigator-ref-E-1" data-hash-target to="class-investigator-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-investigator-F">
<p><Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 9</Link> <InnerLink id="backlink-class-investigator-ref-F-1" data-hash-target to="class-investigator-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-investigator-G">
<p><Link to="/source/blood_of_the_sea">Blood of the Sea pg. 9</Link> <InnerLink id="backlink-class-investigator-ref-G-1" data-hash-target to="class-investigator-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-investigator-H">
<p>Advanced Class Guide pg. 70 <InnerLink id="backlink-class-investigator-ref-H-1" data-hash-target to="class-investigator-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink> <InnerLink id="backlink-class-investigator-ref-H-2" data-hash-target to="class-investigator-ref-H-2" aria-label="Back to reference H-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-class-investigator-ref-H-3" data-hash-target to="class-investigator-ref-H-3" aria-label="Back to reference H-3">↩<sup>3</sup></InnerLink></p>
</li>
<li id="class-investigator-I">
<p>Advanced Class Guide pg. 71 <InnerLink id="backlink-class-investigator-ref-I-1" data-hash-target to="class-investigator-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink> <InnerLink id="backlink-class-investigator-ref-I-2" data-hash-target to="class-investigator-ref-I-2" aria-label="Back to reference I-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-investigator-J">
<p>Blood of the Beast pg. 12 <InnerLink id="backlink-class-investigator-ref-J-1" data-hash-target to="class-investigator-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
<li id="class-investigator-K">
<p>Blood of the Sea pg. 11 <InnerLink id="backlink-class-investigator-ref-K-1" data-hash-target to="class-investigator-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
<li id="class-investigator-L">
<p>Blood of the Beast pg. 20 <InnerLink id="backlink-class-investigator-ref-L-1" data-hash-target to="class-investigator-ref-L-1" aria-label="Back to reference L-1">↩</InnerLink></p>
</li>
<li id="class-investigator-M">
<p>Plane-Hopper's Handbook pg. 23 <InnerLink id="backlink-class-investigator-ref-M-1" data-hash-target to="class-investigator-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _kineticist = {hasJL:true,title: "Kineticist", jsx: <><div className="jumpList" id="class-kineticist-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-kineticist-elemental-focus-su">Elemental Focus</InnerLink></li><li><InnerLink toTop to="class-kineticist-wild-talents">Wild Talents</InnerLink></li><li><InnerLink toTop to="class-kineticist-burn-ex">Burn</InnerLink></li><li><InnerLink toTop to="class-kineticist-kinetic-blast-sp">Kinetic Blast</InnerLink></li><li><InnerLink toTop to="class-kineticist-gather-power-su">Gather Power</InnerLink></li><li><InnerLink toTop to="class-kineticist-infusion-su">Infusion</InnerLink></li><li><InnerLink toTop to="class-kineticist-elemental-defense-su">Elemental Defense</InnerLink></li><li><InnerLink toTop to="class-kineticist-elemental-overflow-ex">Elemental Overflow</InnerLink></li><li><InnerLink toTop to="class-kineticist-infusion-specialization-ex">Infusion Specialization</InnerLink></li><li><InnerLink toTop to="class-kineticist-metakinesis-su">Metakinesis</InnerLink></li><li><InnerLink toTop to="class-kineticist-internal-buffer-su">Internal Buffer</InnerLink></li><li><InnerLink toTop to="class-kineticist-expanded-element-su">Expanded Element</InnerLink></li><li><InnerLink toTop to="class-kineticist-supercharge-su">Supercharge</InnerLink></li><li><InnerLink toTop to="class-kineticist-composite-specialization-su">Composite Specialization</InnerLink></li><li><InnerLink toTop to="class-kineticist-metakinetic-master-su">Metakinetic Master</InnerLink></li><li><InnerLink toTop to="class-kineticist-omnikinesis-su">Omnikinesis</InnerLink></li><li><InnerLink toTop to="class-kineticist-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-kineticist-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-kineticist-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-kineticist-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-kineticist-kineticist">Kineticist</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 10</Link></p>
<p>Kineticists are living channels for elemental matter and energy, manipulating the world around them by drawing upon inner reserves from their own bodies. Kineticists often awaken to their kinetic abilities during a violent or traumatic experience, releasing their power involuntarily. As kinetic power is seldom inherited, kineticists are rarely able to find mentors to guide them, so they must delve into these mysteries on their own to learn to control their gifts.</p>
<p><strong>Role:</strong> Kineticists generally use their powers to assail their foes from range, but based on the way their talents develop, they can channel their kinetic abilities for a variety of situations. Kineticists are usually quite different from their families and friends, so they often strike out on their own or alongside others with extraordinary talents.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>1d6 &times; 10 gp (average 35 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>4 + Int modifier</td></tr><tr><th scope="row" rowSpan={4} className="sw">Class Skills</th><td><Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/stealth">Stealth</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/heal">Heal</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/use_magic_device">Use Magic Device</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-kineticist-class-features">Class Features</h3>
<ScrollContainer id="class-kineticist--table-0"><table>
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
<td>+2</td>
<td>+2</td>
<td>+0</td>
<td>Burn, elemental focus, gather power, infusion, kinetic blast</td>
</tr>
<tr>
<td>2nd</td>
<td>+1</td>
<td>+3</td>
<td>+3</td>
<td>+0</td>
<td>Elemental defense, utility wild talent</td>
</tr>
<tr>
<td>3rd</td>
<td>+2</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>Elemental overflow +1, infusion</td>
</tr>
<tr>
<td>4th</td>
<td>+3</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>Utility wild talent</td>
</tr>
<tr>
<td>5th</td>
<td>+3</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>Infusion, infusion specialization 1, metakinesis (empower)</td>
</tr>
<tr>
<td>6th</td>
<td>+4</td>
<td>+5</td>
<td>+5</td>
<td>+2</td>
<td>Elemental overflow +2, internal buffer +1, utility wild talent</td>
</tr>
<tr>
<td>7th</td>
<td>+5</td>
<td>+5</td>
<td>+5</td>
<td>+2</td>
<td>Expanded element</td>
</tr>
<tr>
<td>8th</td>
<td>+6/+1</td>
<td>+6</td>
<td>+6</td>
<td>+2</td>
<td>Infusion specialization 2, utility wild talent</td>
</tr>
<tr>
<td>9th</td>
<td>+6/+1</td>
<td>+6</td>
<td>+6</td>
<td>+3</td>
<td>Elemental overflow +3, infusion, metakinesis (maximize)</td>
</tr>
<tr>
<td>10th</td>
<td>+7/+2</td>
<td>+7</td>
<td>+7</td>
<td>+3</td>
<td>Utility wild talent</td>
</tr>
<tr>
<td>11th</td>
<td>+8/+3</td>
<td>+7</td>
<td>+7</td>
<td>+3</td>
<td>Infusion, infusion specialization 3, internal buffer 2, supercharge</td>
</tr>
<tr>
<td>12th</td>
<td>+9/+4</td>
<td>+8</td>
<td>+8</td>
<td>+4</td>
<td>Elemental overflow +4, utility wild talent</td>
</tr>
<tr>
<td>13th</td>
<td>+9/+4</td>
<td>+8</td>
<td>+8</td>
<td>+4</td>
<td>Infusion, metakinesis (quicken)</td>
</tr>
<tr>
<td>14th</td>
<td>+10/+5</td>
<td>+9</td>
<td>+9</td>
<td>+4</td>
<td>Infusion specialization 4, utility wild talent</td>
</tr>
<tr>
<td>15th</td>
<td>+11/+6/+1</td>
<td>+9</td>
<td>+9</td>
<td>+5</td>
<td>Expanded element, elemental overflow +5</td>
</tr>
<tr>
<td>16th</td>
<td>+12/+7/+2</td>
<td>+10</td>
<td>+10</td>
<td>+5</td>
<td>Composite specialization, internal buffer 3, utility wild talent</td>
</tr>
<tr>
<td>17th</td>
<td>+12/+7/+2</td>
<td>+10</td>
<td>+10</td>
<td>+5</td>
<td>Infusion, infusion specialization 5, metakinesis (twice)</td>
</tr>
<tr>
<td>18th</td>
<td>+13/+8/+3</td>
<td>+11</td>
<td>+11</td>
<td>+6</td>
<td>Elemental overflow +6, utility wild talent</td>
</tr>
<tr>
<td>19th</td>
<td>+14/+9/+4</td>
<td>+11</td>
<td>+11</td>
<td>+6</td>
<td>Infusion, metakinetic master</td>
</tr>
<tr>
<td>20th</td>
<td>+15/+10/+5</td>
<td>+12</td>
<td>+12</td>
<td>+6</td>
<td>Infusion specialization 6, omnikinesis, utility wild talent</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={1}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><th>Light Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Medium Armor?</th><td colSpan={2}>No</td></tr><tr><th>Heavy Armor?</th><td colSpan={2}>No</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">No</td></tr></tbody></table>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/skills"><IonIcon icon="/icons/skills.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-kineticist-elemental-focus-su" data-hash-target><div className="box">Elemental Focus (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You choose one primary <Link to="/ability/elements">element</Link> on which to focus. This element determines how you access the raw power of the Ethereal Plane, and grants you access to specific wild talents and additional class skills.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain your selected element's basic utility wild talent as a bonus wild talent.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-kineticist-wild-talents" data-hash-target><div className="box">Wild Talents</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box"><p>You can use wild talents - magical abilities similar to spells but drawn from your innate psychic talent and usable at will. Wild talents are typically spell-like abilities (though some are supernatural abilities), and take a <strong className="hl">standard action</strong> to use unless otherwise noted.</p>
<p>A wild talent always has the elemental descriptor or descriptors (aether, air, earth, fire, or water) matching its Element entry. A wild talent that can be used with any of several elements gains the appropriate elemental descriptor when used with an element. For example, the <Link to="/kinetic/wall">wall</Link> wild talent gains the earth descriptor when used by a geokineticist (a kineticist that focuses on the element of earth).</p>
<p>Every wild talent has an effective spell level. You can always select 1st-level wild talents, but you can select a wild talent of a higher level only if your kineticist level is at least double the wild talent's effective spell level. Kinetic blast and defense wild talents are always considered to have an effective spell level equal to <Link to="/misc/half">half</Link> your class level (to a maximum effective spell level of 9th at kineticist level 18th).</p>
<p>In addition to the wild talents you gain from your other class features, <strong className="hl">at 2nd level and every 2 levels thereafter,</strong> you select a new <Link to="/ability/wild_utility_talents">utility wild talent</Link> from the list of options available to you. You can select only <strong className="hl">universal wild talents</strong> or those that match your element.</p>
<p>At 6th, 10th, and 16th levels, you can replace one of your utility wild talents with another wild talent of the same level or lower. You can't replace a wild talent that you used to qualify for another of your wild talents.</p>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Unless otherwise noted, the DC for a saving throw against a wild talent is equal to 10 + the wild talent's effective spell level + your Constitution modifier. You use your Constitution modifier on all <Link to="/rule/concentration">concentration</Link> checks for wild talents.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-kineticist-burn-ex" data-hash-target><div className="box">Burn (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box"><p>You can overexert yourself to channel more power than normal, pushing past the limit of what is safe for your body by accepting <em>burn</em>. Some of your wild talents allow you to accept burn in exchange for a greater effect, while others require you to accept a certain amount of burn to use that talent at all.</p>
<p>For each point of burn you accept, you take 1 point of nonlethal damage per character level. This damage can't be healed by any means other than getting a full night's rest, which removes all burn and associated nonlethal damage. Nonlethal damage from burn can't be reduced or redirected, and a kineticist incapable of taking nonlethal damage can't accept burn. A kineticist who has accepted burn never benefits from abilities that allow her to ignore or alter the effects she receives from nonlethal damage.</p>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">You can accept a number of points of burn per round equal to one-third of your kineticist level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You can't choose to accept burn if it would raise your total points of burn higher than 3 + your Constitution modifier (though you can be forced to accept more burn from a source outside your control).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-kineticist-kinetic-blast-sp" data-hash-target><div className="box">Kinetic Blast (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain a <Link to="/ability/simple_kinetic_blasts">kinetic blast wild talent</Link> of your choice. This kinetic blast must be a simple blast that matches your element.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can unleash a kinetic blast at a single target up to a range of 30 feet. You must have at least one hand free to aim the blast (or one prehensile appendage, if you lack hands).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box"><p>All damage from a kinetic blast is treated as magic for the purpose of bypassing damage reduction.</p>
<p>Kinetic blasts count as a type of weapon for the purpose of feats such as <Link to="/feat/weapon_focus">Weapon Focus</Link>. You are never considered to be wielding or gripping the kinetic blast (regardless of effects from <em>form infusions</em>), and you can't use <Link to="/feat/vital_strike">Vital Strike</Link> feats with kinetic blasts.</p>
<p>Even the weakest kinetic blast involves a sizable mass of elemental matter or energy, so kinetic blasts always deal full damage to swarms of any size (though only area blasts deal extra damage to swarms).</p>
<p>A readied kinetic blast can be used to <Link to="/rule/counterspells">counterspell</Link> any spell of equal or lower level that shares its descriptor.</p>
<p>A kinetic blast that deals energy damage of any type (including force) has the corresponding descriptor.</p>
</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-kineticist-gather-power-su" data-hash-target><div className="box">Gather Power (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">If you have both hands free (or all of your prehensile appendages free), you can gather energy. Gathering energy creates an extremely loud, visible display in a 20-foot radius centered on you, as the energy or matter swirls around you.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Move-Equivalent Action</div></div><div className="abEnd"><div className="box">Gathering power in this way allows you to reduce the total burn cost of a blast wild talent you use in the same round by 1 point.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Full-Round Action</div></div><div className="abEnd"><div className="box">Gathering power in this way reduces the total burn cost of a blast wild talent used on your next turn by 2 points (to a minimum of 0 points). If you do so, you can also gather power as a <strong className="hl">move action</strong> during your next turn to reduce the burn cost by a total of 3 points.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">This ability can never reduce the burn cost of a wild talent below 0 points. If you take damage during or after gathering power and before using the kinetic blast that releases it, you must succeed at a <Link to="/rule/concentration">concentration</Link> check (DC = 10 + damage taken + effective spell level of your kinetic blast) or lose the energy in a wild surge that forces you to accept a number of points of burn equal to the number of points by which your gathered power would have reduced the burn cost.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-kineticist-infusion-su" data-hash-target><div className="box">Infusion (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box"><p>You gain an <Link to="/ability/infusion_wild_talents">infusion wild talent</Link> from the list of options available based on your elemental focus.</p>
<p>By using infusions along with your kinetic blasts, you can alter your kinetic blasts to suit your needs. Infusions come in two types, each of which changes a kinetic blast differently: a <strong className="hl">substance</strong> infusion causes an additional effect, while a <strong className="hl">form</strong> infusion causes the kinetic blast to manifest in a different way. Each infusion can alter only certain kinds of kinetic blasts, which are listed in its Associated Blasts entry.</p>
<p>Each time you use one of your kinetic blast wild talents, you can apply up to one associated form infusion and up to one associated substance infusion. Some infusions change the action required to activate a kinetic blast or entirely transform the kinetic blast's normal effects. The burn cost listed in each infusion's Burn entry is added to the burn cost of the kinetic blast the infusion modifies.</p>
<p>The DC for a save against an infusion is based on the associated kinetic blast's effective spell level, not the level of the infusion. The DCs for form infusions are calculated using your Dexterity modifier instead of your Constitution modifier.</p>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 3rd Level</div></div><div className="abEnd"><div className="box">You gain a new infusion.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 5th Level</div></div><div className="abEnd"><div className="box">You gain a new infusion. You can replace a previous infusion with another infusion of the same effective spell level or lower. You can't replace one you used to qualify for another of your wild talents.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">You gain a new infusion.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">You gain a new infusion. You can replace a previous infusion, as explained above.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">You gain a new infusion.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 17th Level</div></div><div className="abEnd"><div className="box">You gain a new infusion. You can replace a previous infusion, as explained above.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">You gain a new infusion.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">When you modify a kinetic blast with a form infusion and a substance infusion that both require saving throws, each target first attempts a saving throw against the form infusion. If a target succeeds and a successful save negates the infusion's effects, the entire kinetic blast is negated; otherwise, the target then attempts a saving throw against the substance infusion. If your form and substance infusions both alter the kinetic blast's damage, apply the substance infusion's alteration first.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-kineticist-elemental-defense-su" data-hash-target><div className="box">Elemental Defense (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain your element's <Link to="/ability/defense_wild_talents">defense wild talent</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-kineticist-elemental-overflow-ex" data-hash-target><div className="box">Elemental Overflow (Ex)</div><div className="flavor">A kineticist's body surges with energy from her chosen element whenever she accepts burn, causing her to glow with a nimbus of fire, weep water from her pores, or experience some other thematic effect.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You receive a bonus on your attack rolls with kinetic blasts equal to the total number of points of burn you currently have, to a maximum bonus of +1 for every 3 kineticist levels you possess. You also receives a bonus on damage rolls with your kinetic blast equal to double the bonus on attack rolls.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">When you have at least 3 points of burn, you gain a +2 size bonus to two physical ability scores of your choice. You also have a chance to ignore a critical hit or sneak attack equal to 5% &times; your current amount of burn.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">When you have at least 5 points of burn, these bonuses become a +4 size bonus to one physical ability score of your choice and a +2 size bonus to your other two physical ability scores.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">When you have at least 7 points of burn, these bonuses become a +6 size bonus to one physical ability score, +4 to another physical score, and +2 to the remaining score.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You can suppress the visual effects of <em>elemental overflow</em> by concentrating for 1 full round, but doing so suppresses all of this ability's other benefits, as well. The next time you use any wild talent, the visual effects and benefits return instantly.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-kineticist-infusion-specialization-ex" data-hash-target><div className="box">Infusion Specialization (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Whenever you use one or more infusions with a blast, you reduce the combined burn cost of the infusions by 1. This can't reduce the total cost of the infusions used below 0.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">You reduce the cost by 2.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">You reduce the cost by 3.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 14th Level</div></div><div className="abEnd"><div className="box">You reduce the cost by 4.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 17th Level</div></div><div className="abEnd"><div className="box">You reduce the cost by 5.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">You reduce the cost by 6.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-kineticist-metakinesis-su" data-hash-target><div className="box">Metakinesis (Su)</div><div className="flavor">A kineticist can alter her kinetic blasts as if with metamagic feats by accepting burn.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">By accepting 1 point of burn, you can empower a kinetic blast (as if using <Link to="/feat/empower_spell">Empower Spell</Link>).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">By accepting 2 points of burn, you can maximize a kinetic blast as if using <Link to="/feat/maximize_spell">Maximize Spell</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">By accepting 3 points of burn, you can quicken a kinetic blast as if using <Link to="/feat/quicken_spell">Quicken Spell</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 17th Level</div></div><div className="abEnd"><div className="box">By accepting 4 points of burn, you can use a kinetic blast twice with the same standard action, or as a swift action if you also use metakinesis to quicken the blast. When you use a double kinetic blast, all modifications, such as metakinesis and infusions, apply to both of the blasts, but you need to pay the burn cost only once.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-kineticist-internal-buffer-su" data-hash-target><div className="box">Internal Buffer (Su)</div><div className="flavor">A kineticist's study of her body and the elemental forces that course through it allow her to form an internal buffer to store extra energy.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 6th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain an internal buffer. The buffer starts empty and doesn't replenish each day. It can hold a maximum of 1 point.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Full-Round Action</div></div><div className="abEnd"><div className="box">You can accept 1 point of burn to add 1 point to the buffer.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When you would otherwise accept burn, you can spend 1 point from your buffer to avoid accepting 1 point of burn. You cannot spend more than 1 point from your buffer in this way for a single wild talent.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">The maximum becomes 2 points.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">The maximum becomes 3 points.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Once you add points to your buffer, they remain indefinitely until you spend them. Points spent from the internal buffer don't activate <em>elemental overflow</em> or add to its effects. Similarly, this buffer can be used to exceed the limit on the number of points of burn you can accept in a single turn.</div></div></div></div>
<div className="ability p hasSubs"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-kineticist-expanded-element-su" data-hash-target><div className="box">Expanded Element (Su)</div><div className="flavor">A kineticist learns to use another element or expands her understanding of her own element.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 7th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can choose any element, including your primary element.</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-kineticist-new-element" data-hash-target><div className="box">New Element</div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain one of that element's simple blast wild talents that you do not already possess, if any. You also gain all <Link to="/ability/composite_kinetic_blasts">composite blast wild talents</Link> whose prerequisites you meet, as well as the basic wild talent of your chosen expanded element (for instance, basic aerokinesis if you choose air). You don't gain the defense wild talent of the expanded element.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">Choose a different expanded element, and gain all of the benefits from this new element as above. Or, you can choose your primary element and gain the 7th-level benefits from it.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">If your expanded element is different from your primary element, you treat your kineticist level as 4 levels lower for the purpose of determining which wild talents you can learn from your expanded element.</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-kineticist-primary-element" data-hash-target><div className="box">Primary Element</div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain an additional utility wild talent or infusion of your choice from that element, as if from your <em>infusion</em> or <em>wild talent</em> class feature, as appropriate.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">If you choose your primary element again, for wild talents of your element, you gain a +1 bonus on attack rolls and damage rolls, as well as to caster level and DCs. Or, you can choose a different expanded element, and gain all of the benefits from this new element as if you chose it at 7th-level.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-kineticist-supercharge-su" data-hash-target><div className="box">Supercharge (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 11th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When using <em>gather power</em> as a move action, you can reduce the total burn cost of a single wild talent by 2 points instead of 1. When using <em>gather power</em> for 1 full round, you can reduce the burn cost of a single wild talent by 3 points instead of 2.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-kineticist-composite-specialization-su" data-hash-target><div className="box">Composite Specialization (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You reduce the burn cost of all composite blasts by 1 point. This can't reduce the cost of a composite blast below 0 points.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-kineticist-metakinetic-master-su" data-hash-target><div className="box">Metakinetic Master (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 19th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Choose one type of metakinesis, such as empower or quicken: you reduce the burn cost of that metakinesis by 1 point (to a minimum of 0 points).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-kineticist-omnikinesis-su" data-hash-target><div className="box">Omnikinesis (Su)</div><div className="flavor">A kineticist can transcend the distinction between the different elements and can bend all creation to her will.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">By accepting 1 point of burn (in addition to any burn requirement of the kinetic blast you choose), you can use any blast wild talent you don't know.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">By accepting 1 point of burn, you can change any of your wild talents into any other wild talent of the same category (such as simple blasts or defense) for 24 hours, ignoring any elemental requirements or restrictions (but not any other requirements or restrictions).</div></div></div></div>
<h3 id="class-kineticist-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-kineticist--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>Unbridled Power (Su)</td><td>At 20th level, the kineticist wields her chosen element like a knife, cutting through all opposition. The kineticist chooses one blast. Her damage with that blast increases by 2d6+2 (for physical blasts) or by 2d6 (for energy blasts), and the blast ignores the first 10 points of damage reduction or energy resistance that the target has.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-kineticist-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Duergar:</strong> Add 1/5 of an Extra Wild Talent feat that must be spent on an earth element wild talent.<sup><InnerLink showBacklink="backlink-class-kineticist-ref-A-1" id="class-kineticist-ref-A-1" data-hash-target to="class-kineticist-A">1</InnerLink></sup></p>
<p><strong>Duskwalker:</strong> Increase the capacity of the kineticist's internal buffer by 1/6 point.<sup><InnerLink showBacklink="backlink-class-kineticist-ref-B-1" id="class-kineticist-ref-B-1" data-hash-target to="class-kineticist-B">2</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Add 1/3 point of damage to earth element blasts that deal damage.<sup><InnerLink showBacklink="backlink-class-kineticist-ref-C-1" id="class-kineticist-ref-C-1" data-hash-target to="class-kineticist-C">3</InnerLink></sup></p>
<p><strong>Elf:</strong> Gain a +1/4 bonus on damage rolls that apply the kineticist's elemental overflow bonus.<sup><InnerLink showBacklink="backlink-class-kineticist-ref-C-2" id="class-kineticist-ref-C-2" data-hash-target to="class-kineticist-C">3</InnerLink></sup></p>
<p><strong>Gathlain:</strong> Increase the amount of burn cost reduction when using the kineticist's gather power ability by 1/6 point (the minimum burn cost of 0 still applies).<sup><InnerLink showBacklink="backlink-class-kineticist-ref-D-1" id="class-kineticist-ref-D-1" data-hash-target to="class-kineticist-D">4</InnerLink></sup></p>
<p><strong>Gnome:</strong> Gain a +1/2 bonus on Bluff, Diplomacy, Intimidate, and Sense Motive skill checks against creatures with the elemental subtype matching the kineticist's primary element.<sup><InnerLink showBacklink="backlink-class-kineticist-ref-C-3" id="class-kineticist-ref-C-3" data-hash-target to="class-kineticist-C">3</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Gain a +1/4 bonus on damage rolls that apply the kineticist's elemental overflow bonus.<sup><InnerLink showBacklink="backlink-class-kineticist-ref-E-1" id="class-kineticist-ref-E-1" data-hash-target to="class-kineticist-E">5</InnerLink></sup></p>
<p><strong>Halfling:</strong> Increase the capacity of the kineticist's internal buffer by 1/6 point.<sup><InnerLink showBacklink="backlink-class-kineticist-ref-E-2" id="class-kineticist-ref-E-2" data-hash-target to="class-kineticist-E">5</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Add 1/3 point of fire damage to fire-element blasts that deal fire damage.<sup><InnerLink showBacklink="backlink-class-kineticist-ref-E-3" id="class-kineticist-ref-E-3" data-hash-target to="class-kineticist-E">5</InnerLink></sup></p>
<p><strong>Human:</strong> Gain 1/6 of an Extra Wild Talent feat.<sup><InnerLink showBacklink="backlink-class-kineticist-ref-E-4" id="class-kineticist-ref-E-4" data-hash-target to="class-kineticist-E">5</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-kineticist-ref-F-1" id="class-kineticist-ref-F-1" data-hash-target to="class-kineticist-F">6</InnerLink></sup></p>
<p><strong>Tengu:</strong> Gain 1/6 of an Extra Wild Talent feat.<sup><InnerLink showBacklink="backlink-class-kineticist-ref-G-1" id="class-kineticist-ref-G-1" data-hash-target to="class-kineticist-G">7</InnerLink></sup></p>
<p><strong>Vanara:</strong> Add 1/3 to the total number of points of burn that the kineticist can accept before she can't choose to accept additional points of burn.<sup><InnerLink showBacklink="backlink-class-kineticist-ref-H-1" id="class-kineticist-ref-H-1" data-hash-target to="class-kineticist-H">8</InnerLink></sup></p>
<p><strong>Vine leshy:</strong> Gain 1/5 of the Extra Wild Talent feat. This feat must be spent on a wood-element talent.<sup><InnerLink showBacklink="backlink-class-kineticist-ref-I-1" id="class-kineticist-ref-I-1" data-hash-target to="class-kineticist-I">9</InnerLink></sup></p>
<p><strong>Wayang:</strong> Add 1/4 to the save DC of the kineticist's void infusions and wild talents.<sup><InnerLink showBacklink="backlink-class-kineticist-ref-J-1" id="class-kineticist-ref-J-1" data-hash-target to="class-kineticist-J">10</InnerLink></sup></p>
</div>
<h3 id="class-kineticist-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-kineticist/aquakinetcist">Aquakinetcist</Link></p><p><strong>Modifies or Replaces:</strong> Elemental Focus; Expanded Element; Basic Hydrokinesis; 2nd, 6th-level Utility Wild Talent; Elemental Defense</p><p>While all hydrokineticists have the ability to control water, aquakineticists' powers are tied to their determination to explore the world beneath the waves.</p></div>
<div className="archetype"><p><Link to="/arc-kineticist/arakineticist">Arakineticist</Link></p><p><strong>Modifies or Replaces:</strong> 4th, 6th, 8th, and 13th-level Utility Wild Talents</p><p>Those of strong will who live under a dark curse long enough might learn to control and channel the corrupt energy afflicting them.</p></div>
<div className="archetype"><p><Link to="/arc-kineticist/blightburner">Blightburner</Link></p><p><strong>Modifies or Replaces:</strong> Elemental Focus; Basic Geokinesis; 2nd-level Utility Wild Talent; Elemental Overflow; Flesh of Stone; Gather Power; Internal Buffer</p><p>Darklands geokineticists sometimes exhibit supernatural powers associated with blightburn crystals. Blightburner kineticists harness this radioactivity in pyrotechnic displays, an unusual feat for those connected to the element of earth.</p></div>
<div className="archetype"><p><Link to="/arc-kineticist/blighted_defiler">Blighted Defiler</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Gather Power; Key Ability Score; Internal Buffer; Elemental Defense; Omnikinesis</p><p>A few kineticists have developed the ability to steal the life force from the surrounding land in order to infuse themselves with unnatural strength beyond their bodies' normal capabilities.</p></div>
<div className="archetype"><p><Link to="/arc-kineticist/blood_kineticist">Blood Kineticist</Link></p><p><strong>Modifies or Replaces:</strong> 1st, 5th, 9th, and 11th-level Infusions; 6th and 8th-level Utility Wild Talent; Expanded Element; Omnikinesis</p><p>To a blood kineticist, the water in a creature's blood is just like any other sort, and she uses that knowledge to brutal ends.</p></div>
<div className="archetype"><p><Link to="/arc-kineticist/cinderlands_adept">Cinderlands Adept</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Elemental Focus; Expanded Element; Gather Power; 1st-level Infusion; 4th, 8th, 12th-level Utility Wild Talent</p><p>These kineticists are skilled riders, able to wield both weapons and fire with deadly skill.</p></div>
<div className="archetype"><p><Link to="/arc-kineticist/dark_elementalist">Dark Elementalist</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Key Ability Score; Burn; Elemental Overflow; Internal Buffer</p><p>Dark elementalists are loathe to suffer the consequences of channeling their power and study the darkest esoteric energies of the planes to use souls to fuel their occult might.</p></div>
<div className="archetype"><p><Link to="/arc-kineticist/elemental_annihilator">Elemental Annihilator</Link></p><p><strong>Modifies or Replaces:</strong> 1st, 3rd, 5th, and 9th-level Infusions; all utility wild talents</p><p>For some kineticists, nothing in life is as sweet as destruction and pain. Elemental annihilators pursue only uses of their powers that harm others.</p></div>
<div className="archetype"><p><Link to="/arc-kineticist/elemental_ascetic">Elemental Ascetic</Link></p><p><strong>Modifies or Replaces:</strong> Kinetic Blast; Elemental Overflow; Wild Talents; Elemental Defense; 5th, 9th, 13th-level Infusions</p><p>Combining the elemental powers of a kineticist with the rigid physical discipline of a monk, an elemental ascetic channels his powers through his body to enhance himself in combat.</p></div>
<div className="archetype"><p><Link to="/arc-kineticist/elemental_purist">Elemental Purist</Link></p><p><strong>Modifies or Replaces:</strong> Internal Buffer; Expanded Elements; 11th, 19th-level Infusion; Omnikinesis</p><p>An elemental purist spurns all elements that are not her own, for utter devotion can allow one to accomplish even seemingly impossible heroics.</p></div>
<div className="archetype"><p><Link to="/arc-kineticist/elysiokineticist">Elysiokineticist</Link></p><p><strong>Modifies or Replaces:</strong> Elemental Focus; Class Skills; Expanded Element; Basic Phytokinesis, 1st-level Infusion; Flesh of Wood</p><p>Similar to how phytokineticists draw their power from the First World, elysiokineticists trace their abilities to the riotous wilderness of the plane known as Elysium</p></div>
<div className="archetype"><p><Link to="/arc-kineticist/ioun_kineticist">Ioun Kineticist</Link></p><p><strong>Modifies or Replaces:</strong> Elemental Focus; Basic Telekinesis; Internal Buffer; Elemental Overflow</p><p>Some aetherkineticists dedicate themselves to unlocking ioun stones' cosmic secrets and seemingly limitless potential.</p></div>
<div className="archetype"><p><Link to="/arc-kineticist/kinetic_chirurgeon">Kinetic Chirurgeon</Link></p><p><strong>Modifies or Replaces:</strong> Infusions; Metakinesis; Infusion Specialization; Internal Buffer</p><p>While any hydrokineticist or telekineticist can learn the rudiments of healing, some kineticists are virtuosos of the curative arts.</p></div>
<div className="archetype"><p><Link to="/arc-kineticist/kinetic_knight">Kinetic Knight</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Kinetic Blast; Infusions; Metakinesis; Metakinetic Master; 3rd-level Infusion; Supercharge</p><p>A kinetic knight dons armor and wields a blade of elemental energy.</p></div>
<div className="archetype"><p><Link to="/arc-kineticist/leshykineticist">Leshykineticist</Link></p><p><strong>Modifies or Replaces:</strong> Element; Expanded Element; 6th, 10th-level Utility Wild Talents; Maximize Metakinesis; Basic Phytokinesis; Internal Buffer; Omnikinesis</p><p>(Vine Leshy only) Of all those who pursue the path of a kineticist, only leshykineticists are both made of plant matter and born of nature spirits. These curious creatures wield ancient powers unknown to any other kineticists.</p></div>
<div className="archetype"><p><Link to="/arc-kineticist/overwhelming_soul">Overwhelming Soul</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Wild Talents; Burn; Internal Buffer; Elemental Overflow</p><p>Some kineticists have such a powerful personality that they can seize control of their element with their minds alone, without endangering their bodies.</p></div>
<div className="archetype"><p><Link to="/arc-kineticist/psammokinetic">Psammokinetic</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Elemental Focus, Elemental Overflow; Expanded Element</p><p>Psammokinetics are ascetic kineticists who consider the harsh nature of the burning deserts of Osirion to be a tempering fire that can purify all their imperfections.</p></div>
<div className="archetype"><p><Link to="/arc-kineticist/psychokineticist">Psychokineticist</Link></p><p><strong>Modifies or Replaces:</strong> Key Ability Score; Burn; Elemental Overflow</p><p>Psychokineticists channel elemental power through their minds rather than their bodies and while this energy ravages their minds, it unleashes power locked in their ruptured emotions.</p></div>
<div className="archetype"><p><Link to="/arc-kineticist/terrakineticist">Terrakineticist</Link></p><p><strong>Modifies or Replaces:</strong> Elemental Focus; Kinetic Blast; Elemental Defense; Expanded Element; Omnikinesis</p><p>Terrakineticists have a stunted ability that allows them to access the Elemental Planes, but they've learned how to turn this limited talent into an incredible strength by tapping into the ambient elemental nature of the land surrounding them.</p></div>
<h3 id="class-kineticist-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"kineticist archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Burn"},{"header":"Class Skills"},{"header":"Elemental Defense"},{"header":"Elemental Focus"},{"header":"Elemental Overflow"},{"header":"Expanded Element"},{"header":"Gather Power"},{"header":"Infusions"},{"header":"1st-level Infusion"},{"header":"3rd-level Infusion"},{"header":"5th-level Infusion"},{"header":"9th-level Infusion"},{"header":"11th-level Infusion"},{"header":"13th-level Infusion"},{"header":"19th-level Infusion"},{"header":"Infusion Specialization"},{"header":"Internal Buffer"},{"header":"Key Ability Score"},{"header":"Kinetic Blast"},{"header":"Metakinesis"},{"header":"Metakinetic Master"},{"header":"Omnikinesis"},{"header":"Supercharge"},{"header":"Wild Talents"},{"header":"Utility Wild Talents"},{"header":"2nd-level Utility Wild Talent"},{"header":"4th-level Utility Wild Talent"},{"header":"6th-level Utility Wild Talent"},{"header":"8th-level Utility Wild Talent"},{"header":"10th-level Utility Wild Talent"},{"header":"12th-level Utility Wild Talent"},{"header":"13th-level Utility Wild Talent"}],"data":[["‹arc-kineticist/Aquakinetcist›",null,null,null,"X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null],["‹arc-kineticist/Arakineticist›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,"X"],["‹arc-kineticist/Blightburner›",null,null,null,"X","X","X",null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-kineticist/Blighted Defiler›","X",null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,"X","X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-kineticist/Blood Kineticist›",null,null,null,null,null,null,"X",null,null,"X",null,"X","X","X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X",null,null,null],["‹arc-kineticist/Cinderlands Adept›",null,null,"X",null,"X",null,"X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,"X",null],["‹arc-kineticist/Dark Elementalist›","X","X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-kineticist/Elemental Annihilator›",null,null,null,null,null,null,null,null,null,"X","X","X","X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-kineticist/Elemental Ascetic›",null,null,null,"X",null,"X",null,null,null,null,null,"X","X",null,"X",null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-kineticist/Elemental Purist›",null,null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,"X",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-kineticist/Elysiokineticist›",null,null,"X","X","X",null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-kineticist/Ioun Kineticist›",null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-kineticist/Kinetic Chirurgeon›",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X","X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-kineticist/Kinetic Knight›",null,null,"X",null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,"X","X","X",null,"X",null,null,null,null,null,null,null,null,null],["‹arc-kineticist/Leshykineticist›",null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,"X",null,null,null,null,null,"X",null,"X",null,null],["‹arc-kineticist/Overwhelming Soul›",null,"X","X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-kineticist/Psammokinetic›","X",null,null,null,"X","X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-kineticist/Psychokineticist›",null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-kineticist/Terrakineticist›",null,null,null,"X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-kineticist-label">Footnotes</h3>
<ol>
<li id="class-kineticist-A">
<p><Link to="/source/darklands_revisited">Darklands Revisited pg. 13</Link> <InnerLink id="backlink-class-kineticist-ref-A-1" data-hash-target to="class-kineticist-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-kineticist-B">
<p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 17</Link> <InnerLink id="backlink-class-kineticist-ref-B-1" data-hash-target to="class-kineticist-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-kineticist-C">
<p><Link to="/source/occult_adventures">Occult Adventures pg. 84</Link> <InnerLink id="backlink-class-kineticist-ref-C-1" data-hash-target to="class-kineticist-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink> <InnerLink id="backlink-class-kineticist-ref-C-2" data-hash-target to="class-kineticist-ref-C-2" aria-label="Back to reference C-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-class-kineticist-ref-C-3" data-hash-target to="class-kineticist-ref-C-3" aria-label="Back to reference C-3">↩<sup>3</sup></InnerLink></p>
</li>
<li id="class-kineticist-D">
<p><Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 9</Link> <InnerLink id="backlink-class-kineticist-ref-D-1" data-hash-target to="class-kineticist-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-kineticist-E">
<p>Occult Adventures pg. 85 <InnerLink id="backlink-class-kineticist-ref-E-1" data-hash-target to="class-kineticist-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink> <InnerLink id="backlink-class-kineticist-ref-E-2" data-hash-target to="class-kineticist-ref-E-2" aria-label="Back to reference E-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-class-kineticist-ref-E-3" data-hash-target to="class-kineticist-ref-E-3" aria-label="Back to reference E-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-class-kineticist-ref-E-4" data-hash-target to="class-kineticist-ref-E-4" aria-label="Back to reference E-4">↩<sup>4</sup></InnerLink></p>
</li>
<li id="class-kineticist-F">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-kineticist-ref-F-1" data-hash-target to="class-kineticist-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-kineticist-G">
<p>Blood of the Beast pg. 24 <InnerLink id="backlink-class-kineticist-ref-G-1" data-hash-target to="class-kineticist-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-kineticist-H">
<p>Blood of the Beast pg. 28 <InnerLink id="backlink-class-kineticist-ref-H-1" data-hash-target to="class-kineticist-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-kineticist-I">
<p><Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 21</Link> <InnerLink id="backlink-class-kineticist-ref-I-1" data-hash-target to="class-kineticist-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-kineticist-J">
<p><Link to="/source/blood_of_shadows">Blood of Shadows pg. 11</Link> <InnerLink id="backlink-class-kineticist-ref-J-1" data-hash-target to="class-kineticist-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
export default {fighter:_fighter,hunter:_hunter,inquisitor:_inquisitor,investigator:_investigator,kineticist:_kineticist}