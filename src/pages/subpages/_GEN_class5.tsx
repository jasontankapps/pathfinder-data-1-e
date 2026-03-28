import {IonIcon} from '@ionic/react';
import DisplayTable from '../../components/DisplayTable';
import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _cavalier = {hasJL:true,title: "Cavalier", jsx: <><div className="jumpList" id="class-cavalier-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-cavalier-challenge-ex">Challenge</InnerLink></li><li><InnerLink toTop to="class-cavalier-mount-ex">Mount</InnerLink></li><li><InnerLink toTop to="class-cavalier-order-ex">Order</InnerLink></li><li><InnerLink toTop to="class-cavalier-tactician-ex">Tactician</InnerLink></li><li><InnerLink toTop to="class-cavalier-cavaliers-charge-ex">Cavalier's Charge</InnerLink></li><li><InnerLink toTop to="class-cavalier-expert-trainer-ex">Expert Trainer</InnerLink></li><li><InnerLink toTop to="class-cavalier-banner-ex">Banner</InnerLink></li><li><InnerLink toTop to="class-cavalier-bonus-feat">Bonus Feat</InnerLink></li><li><InnerLink toTop to="class-cavalier-greater-tactician-ex">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-cavalier-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-cavalier-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-cavalier-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-cavalier-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-cavalier-cavalier">Cavalier</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 32</Link></p>
<p>While many warriors strive to perfect their art, spending all of their time honing their skill at martial arms, others spend as much effort dedicating themselves to a cause. These warriors, known as cavaliers, swear themselves to a purpose, serving it above all else. Cavaliers are skilled at fighting from horseback, and are often found charging across a battlefield, with the symbol of their order trailing on a long, fluttering banner. The cavalier's true power comes from the conviction of his ideals, the oaths that he swears, and the challenges he makes.</p>
<p><strong>Role:</strong> Cavaliers tend to marshal forces on the battlefield, using their mounted talents and challenges to control the flow of the fight. Outside of battle, cavaliers can be found advancing their cause through diplomacy and, if needed, subterfuge. The cavalier is no stranger to courtly intrigue and can hold his own in even the most delicate of social situations.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d10</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>5d6 &times; 10 gp (average 175 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>4 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/ride">Ride</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/handle_animal">Handle Animal</Link>, <Link to="/skill/intimidate">Intimidate</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-cavalier-class-features">Class Features</h3>
<ScrollContainer id="class-cavalier--table-0"><table>
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
<td>Challenge 1/day, mount, order, tactician</td>
</tr>
<tr>
<td>2nd</td>
<td>+2</td>
<td>+3</td>
<td>+0</td>
<td>+0</td>
<td>Order ability</td>
</tr>
<tr>
<td>3rd</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>+1</td>
<td>Cavalier's charge</td>
</tr>
<tr>
<td>4th</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>+1</td>
<td>Challenge 2/day, expert trainer</td>
</tr>
<tr>
<td>5th</td>
<td>+5</td>
<td>+4</td>
<td>+1</td>
<td>+1</td>
<td>Banner</td>
</tr>
<tr>
<td>6th</td>
<td>+6/+1</td>
<td>+5</td>
<td>+2</td>
<td>+2</td>
<td>Bonus feat</td>
</tr>
<tr>
<td>7th</td>
<td>+7/+2</td>
<td>+5</td>
<td>+2</td>
<td>+2</td>
<td>Challenge 3/day</td>
</tr>
<tr>
<td>8th</td>
<td>+8/+3</td>
<td>+6</td>
<td>+2</td>
<td>+2</td>
<td>Order ability</td>
</tr>
<tr>
<td>9th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+3</td>
<td>+3</td>
<td>Greater tactician</td>
</tr>
<tr>
<td>10th</td>
<td>+10/+5</td>
<td>+7</td>
<td>+3</td>
<td>+3</td>
<td>Challenge 4/day</td>
</tr>
<tr>
<td>11th</td>
<td>+11/+6/+1</td>
<td>+7</td>
<td>+3</td>
<td>+3</td>
<td>Mighty charge</td>
</tr>
<tr>
<td>12th</td>
<td>+12/+7/+2</td>
<td>+8</td>
<td>+4</td>
<td>+4</td>
<td>Bonus feat, demanding challenge</td>
</tr>
<tr>
<td>13th</td>
<td>+13/+8/+3</td>
<td>+8</td>
<td>+4</td>
<td>+4</td>
<td>Challenge 5/day</td>
</tr>
<tr>
<td>14th</td>
<td>+14/+9/+4</td>
<td>+9</td>
<td>+4</td>
<td>+4</td>
<td>Greater banner</td>
</tr>
<tr>
<td>15th</td>
<td>+15/+10/+5</td>
<td>+9</td>
<td>+5</td>
<td>+5</td>
<td>Order ability</td>
</tr>
<tr>
<td>16th</td>
<td>+16/+11/+6/+1</td>
<td>+10</td>
<td>+5</td>
<td>+5</td>
<td>Challenge 6/day</td>
</tr>
<tr>
<td>17th</td>
<td>+17/+12/+7/+2</td>
<td>+10</td>
<td>+5</td>
<td>+5</td>
<td>Master tactician</td>
</tr>
<tr>
<td>18th</td>
<td>+18/+13/+8/+3</td>
<td>+11</td>
<td>+6</td>
<td>+6</td>
<td>Bonus feat</td>
</tr>
<tr>
<td>19th</td>
<td>+19/+14/+9/+4</td>
<td>+11</td>
<td>+6</td>
<td>+6</td>
<td>Challenge 7/day</td>
</tr>
<tr>
<td>20th</td>
<td>+20/+15/+10/+5</td>
<td>+12</td>
<td>+6</td>
<td>+6</td>
<td>Supreme charge</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={2}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td colSpan={2}>All <Link to="/main/equipment_weapons_martial">martial weapons</Link></td></tr><tr><th>Light Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Medium Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Heavy Armor?</th><td colSpan={2}>Yes</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">Yes, except tower shields</td></tr></tbody></table>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-cavalier-challenge-ex" data-hash-target><div className="box">Challenge (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Once a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">You challenge a foe to combat, choosing one target within sight to challenge. Your melee attacks deal extra damage whenever the attacks are made against the target of your challenge. This extra damage is equal to your level. Challenging a foe requires much of your concentration. You take a -2 penalty to your Armor Class, except against attacks made by the target of your challenge.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">You can <em>challenge</em> twice a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">You can <em>challenge</em> 3 times a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">You can <em>challenge</em> 4 times a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">You can <em>challenge</em> 5 times a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">You can <em>challenge</em> 6 times a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">You can <em>challenge</em> 7 times a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The challenge remains in effect until the target is dead or unconscious or until the combat ends. Each challenge also includes another effect which is listed in the section describing your <em>order.</em></div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-cavalier-mount-ex" data-hash-target><div className="box">Mount (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box"><p>You gain the service of a loyal and trusty steed to carry you into battle. This mount functions as a druid's <Link to="/sidekick/animal_companion">animal companion</Link>, using your level as your effective druid level. The creature must be one that you are capable of riding and is suitable as a mount. This mount may come from the following list:</p>
<p><strong>Medium Cavaliers:</strong> <Link to="/companion/axe_beak">Axe Beak</Link>, <Link to="/companion/camel">Camel</Link>, <Link to="/companion/elk">Elk</Link>, <Link to="/companion/giraffe">Giraffe</Link>, <Link to="/companion/horse">Horse</Link>, <Link to="/companion/giant_seahorse">Giant Seahorse</Link>, <Link to="/companion/giant_tortoise">Giant Tortoise</Link>, <Link to="/companion/zebra">Zebra</Link>; <strong>Small Cavaliers:</strong> <Link to="/companion/antelope">Antelope</Link>, <Link to="/companion/boar">Boar</Link> (requires 4th level), <Link to="/companion/capybara">Capybara</Link>, <Link to="/companion/dog">Dog</Link> (requires 4th level), <Link to="/companion/kangaroo">Kangaroo</Link>, <Link to="/companion/giant_gecko">Giant Gecko</Link>, <Link to="/companion/pony">Pony</Link>, <Link to="/companion/ram">Ram</Link>, Reindeer (uses elk statistics), <Link to="/companion/stag">Stag</Link>, <Link to="/companion/giant_weasel">Giant Weasel</Link>, <Link to="/companion/wolf">Wolf</Link>, <Link to="/companion/wolfdog">Wolfdog</Link></p>
<p>The GM might approve other animals as suitable mounts.</p>
<p>You do not take an armor check penalty on Ride checks while riding your mount. The mount is always considered combat trained and begins play with <Link to="/feat/light_armor_proficiency">Light Armor Proficiency</Link> as a bonus feat. Your mount does not gain the <em>share spells</em> special ability.</p>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Your bond with your mount is strong, with the two of you learning to anticipate each other's moods and moves. Should your mount die, you may find another mount to serve you after 1 week of mourning. This new mount does not gain the <em>link, evasion, devotion,</em> or <em>improved evasion</em> special abilities until the next time you gain a level.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-cavalier-order-ex" data-hash-target><div className="box">Order (Ex):</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You must pledge yourself to a specific <Link to="/ability/orders">order</Link>. The order grants you a number of bonuses, class skills, and special abilities. In addition, each order includes a number of edicts that you must follow. If you violate any of these edicts, you lose the benefits from your order's <em>challenge</em> ability for 24 hours. The violation of an edict is subject to GM interpretation.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You cannot change your order without undertaking a lengthy process to dedicate yourself to a new cause. When this choice is made, you immediately lose all of the benefits from your old order. You must then follow the edicts of your new order for one entire level without gaining any benefits from that order. Once accomplished, you gain all of the bonuses from your new order. (Note that the names of these orders might vary depending upon the campaign setting or GM's preference.)</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-cavalier-tactician-ex" data-hash-target><div className="box">Tactician (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You receive a <Link to="/main/teamwork_feat">teamwork feat</Link> as a bonus feat. You must meet the prerequisites for this feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can grant this feat to all allies within 30 feet who can see and hear you. Allies retain the use of this bonus feat for 3 rounds plus 1 round for every two levels you possess. Allies do not need to meet the prerequisites of these bonus feats.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">1 time/day + 1 per five fighter levels</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-cavalier-cavaliers-charge-ex" data-hash-target><div className="box">Cavalier's Charge (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You receive a +4 bonus on melee attack rolls on a <Link to="/rule/charge">charge</Link> while mounted (instead of the normal +2). In addition, you do not suffer any penalty to your AC after making a charge attack while mounted.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-cavalier-expert-trainer-ex" data-hash-target><div className="box">Expert Trainer (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You receive a bonus equal to <Link to="/misc/half">half</Link> your cavalier level whenever you use <Link to="/skill/handle_animal">Handle Animal</Link> on an animal that serves as a mount. In addition, you can reduce the time needed to teach a mount a new <Link to="/ability/animal_tricks">trick</Link> or train a mount for a general purpose to 1 day per 1 week required by increasing the DC by +5. You can also train more than one mount at once, although each mount after the first adds +2 to the DC.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-cavalier-banner-ex" data-hash-target><div className="box">Banner (Ex)</div><div className="flavor">A cavalier's banner becomes a symbol of inspiration to his allies and companions.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">As long as your banner is clearly visible, all allies within 60 feet receive a +2 morale bonus on saving throws against fear and a +1 morale bonus on attack rolls made as part of a charge. The save bonus is equal to 1 + one-fifth your cavalier level, while the charge bonus is equal to one-fifth your cavalier level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The banner must be at least Small or larger and must be carried or displayed by you or your mount to function.</div></div></div></div>
<aside><p>Some knights inspire and direct their allies with specialized tactics. A cavalier can select <Link to="/ability/banners">a different battle standard</Link> upon gaining the banner class feature, and its benefits replace the normal benefits of the banner and greater banner class features.</p>
</aside><div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-cavalier-bonus-feat" data-hash-target><div className="box">Bonus Feat</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 6th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain a bonus feat in addition to those gained from normal advancement. This bonus feat must be selected from those listed as <Link to="/main/combat_feat">combat feats</Link>. You must meet the prerequisites of this bonus feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">You gain another bonus feat, following the restrictions above.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">You gain another bonus feat, following the restrictions above.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-cavalier-greater-tactician-ex" data-hash-target><div className="box">Greater Tactician (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 9th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You receive an additional teamwork feat as a bonus feat. You must meet the prerequisites for this feat. You can grant this feat to your allies using the <em>tactician</em> ability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">Using the <em>tactician</em> ability becomes a <strong className="hl">swift action</strong>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-cavalier-mighty-charge-ex" data-hash-target><div className="box">Mighty Charge (Ex)</div><div className="flavor">A cavalier learns to make devastating charge attacks while mounted.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 11th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You double the threat range of any weapons wielded during a charge while mounted. This increase does not stack with other effects that increase the threat range of the weapon.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Free Action</div></div><div className="abEnd"><div className="box">In addition, you can make a free <Link to="/rule/bull_rush">bull rush</Link>, <Link to="/rule/disarm">disarm</Link>, <Link to="/rule/sunder">sunder</Link>, or <Link to="/rule/trip">trip</Link> combat maneuver if your charge attack is successful. This does not provoke an attack of opportunity.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-cavalier-demanding-challenge-ex" data-hash-target><div className="box">Demanding Challenge (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Whenever you declare a challenge, your target must pay attention to the threat you pose. As long as the target is within your threatened area, it takes a -2 penalty to its AC from attacks made by anyone other than you.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-cavalier-greater-banner-ex" data-hash-target><div className="box">Greater Banner (Ex)</div><div className="flavor">A cavlier's banner becomes a rallying call to his allies.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 14th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">All allies within 60 feet receive a +2 morale bonus on saving throws against charm and compulsion spells and effects.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">While your banner is displayed, you can wave the banner through the air, granting all allies within 60 feet an additional saving throw against any one spell or effect that is targeting them. This save is made at the original DC. Spells and effects that do not allow saving throws are unaffected by this ability. An ally cannot benefit from this ability more than once per day.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-cavalier-master-tactician-ex" data-hash-target><div className="box">Master Tactician (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 17th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You receive an additional teamwork feat as a bonus feat. You must meet the prerequisites for this feat. You can grant this feat to your allies using the <em>tactician</em> ability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Whenever you use the <em>tactician</em> ability, you grant any two teamwork feats that you know. You can select from <strong>any</strong> of your teamwork feats, not just your bonus feats.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-cavalier-supreme-charge-ex" data-hash-target><div className="box">Supreme Charge (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Whenever you make a charge attack while mounted, you deal double the normal amount of damage (or triple if using a <Link to="/eq-weapon/lance">lance</Link>). In addition, if you confirm a critical hit on a charge attack while mounted, the target is <Link to="/misc/stunned">stunned</Link> for 1d4 rounds. A Will save reduces this to <Link to="/misc/staggered">staggered</Link> for 1d4 rounds. The DC is equal to 10 + your base attack bonus.</div></div></div></div>
<h3 id="class-cavalier-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-cavalier--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Great Beast (Su)</td><td>At 20th level, the character's <Link to="/sidekick/animal_companion">animal companion</Link> is a paragon of its kind - a hero and legend in its own right. The animal companion's Strength, Dexterity, Constitution, and Wisdom scores each increase by 4. This capstone is available to any class with an animal companion.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>Tactical Genius (Ex)</td><td>At 20th level, the cavalier is a maestro of the battlefield, commanding and moving troops like so many game pieces. The cavalier gains a bonus teamwork feat, can grant up to three bonus feats with tactician, and increases the range of tactician by 90 feet.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-cavalier-favored-class-bonuses" data-hash-target>Favored Class Bonuses</h3>
<div className="hanging striped">
<p><strong>Aasimar:</strong> Add +1/4 to the cavalier's bonus on damage against targets of his challenge.<sup><InnerLink showBacklink="backlink-class-cavalier-ref-A-1" id="class-cavalier-ref-A-1" data-hash-target to="class-cavalier-A">1</InnerLink></sup></p>
<p><strong>Aquatic elf:</strong> Add 1 skill rank to the cavalier's mount. If the cavalier ever replaces his mount, the new mount gains these bonus skill ranks.<sup><InnerLink showBacklink="backlink-class-cavalier-ref-B-1" id="class-cavalier-ref-B-1" data-hash-target to="class-cavalier-B">2</InnerLink></sup></p>
<p><strong>Catfolk:</strong> Add +1/4 to the cavalier's banner bonus.<sup><InnerLink showBacklink="backlink-class-cavalier-ref-C-1" id="class-cavalier-ref-C-1" data-hash-target to="class-cavalier-C">3</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Add +1/2 to the cavalier's bonus to damage against targets of his challenge.<sup><InnerLink showBacklink="backlink-class-cavalier-ref-D-1" id="class-cavalier-ref-D-1" data-hash-target to="class-cavalier-D">4</InnerLink></sup></p>
<p><strong>Elf:</strong> Add +1 hit point to the cavalier's mount. If the cavalier ever replaces his mount, the new mount gains these bonus hit points.<sup><InnerLink showBacklink="backlink-class-cavalier-ref-E-1" id="class-cavalier-ref-E-1" data-hash-target to="class-cavalier-E">5</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-cavalier-ref-F-1" id="class-cavalier-ref-F-1" data-hash-target to="class-cavalier-F">6</InnerLink></sup></p>
<p><strong>Gathlain:</strong> Add a +1/2 bonus to the cavalier's Knowledge (nature) and Knowledge (nobility) checks relating to fey courts and fey courtiers.<sup><InnerLink showBacklink="backlink-class-cavalier-ref-G-1" id="class-cavalier-ref-G-1" data-hash-target to="class-cavalier-G">7</InnerLink></sup></p>
<p><strong>Gnome:</strong> Add +1 to the cavalier's mounted base speed. In combat this has no effect unless the cavalier has selected this reward five times (or another increment of five). If the cavalier ever replaces his mount, the new mount gains this bonus to its speed.<sup><InnerLink showBacklink="backlink-class-cavalier-ref-H-1" id="class-cavalier-ref-H-1" data-hash-target to="class-cavalier-H">8</InnerLink></sup></p>
<p><strong>Goblin:</strong> Add +1 hit points to the cavalier's mount companion. If the cavalier ever replaces his mount, the new mount gains these bonus hit points.<sup><InnerLink showBacklink="backlink-class-cavalier-ref-I-1" id="class-cavalier-ref-I-1" data-hash-target to="class-cavalier-I">9</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-cavalier-ref-J-1" id="class-cavalier-ref-J-1" data-hash-target to="class-cavalier-J">10</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Add +1 foot to the cavalier's mount's base speed. This option has no effect unless the cavalier has selected it 5 times (or another increment of 5); a speed of 54 feet is effectively a speed of 50 feet, for example. If the cavalier ever replaces his mount, the new companion gains this base speed bonus.<sup><InnerLink showBacklink="backlink-class-cavalier-ref-K-1" id="class-cavalier-ref-K-1" data-hash-target to="class-cavalier-K">11</InnerLink></sup></p>
<p><strong>Halfling:</strong> Add +1/2 to the cavalier's effective class level for the purposes of determining the damage he deals when making an attack of opportunity against a challenged foe.<sup><InnerLink showBacklink="backlink-class-cavalier-ref-L-1" id="class-cavalier-ref-L-1" data-hash-target to="class-cavalier-L">12</InnerLink></sup></p>
<p><strong>Halfling:</strong> The cavalier's mount gains a +1/2 bonus on saving throws against fear effects. If the cavalier ever replaces his mount, the new mount gains this bonus.<sup><InnerLink showBacklink="backlink-class-cavalier-ref-M-1" id="class-cavalier-ref-M-1" data-hash-target to="class-cavalier-M">13</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Add +1 hit point to the cavalier's mount companion. If the cavalier ever replaces his mount, the new mount gains these bonus hit points.<sup><InnerLink showBacklink="backlink-class-cavalier-ref-N-1" id="class-cavalier-ref-N-1" data-hash-target to="class-cavalier-N">14</InnerLink></sup></p>
<p><strong>Hobgoblin:</strong> Add a +1/2 bonus on Intimidate checks and Ride checks.<sup><InnerLink showBacklink="backlink-class-cavalier-ref-O-1" id="class-cavalier-ref-O-1" data-hash-target to="class-cavalier-O">15</InnerLink></sup></p>
<p><strong>Human:</strong> Add +1/4 to the cavalier's banner bonus.<sup><InnerLink showBacklink="backlink-class-cavalier-ref-P-1" id="class-cavalier-ref-P-1" data-hash-target to="class-cavalier-P">16</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-cavalier-ref-Q-1" id="class-cavalier-ref-Q-1" data-hash-target to="class-cavalier-Q">17</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-cavalier-ref-R-1" id="class-cavalier-ref-R-1" data-hash-target to="class-cavalier-R">18</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Add 1/4 to the cavalier's banner bonus.<sup><InnerLink showBacklink="backlink-class-cavalier-ref-R-2" id="class-cavalier-ref-R-2" data-hash-target to="class-cavalier-R">18</InnerLink></sup></p>
<p><strong>Kobold:</strong> Add 5 feet (up to 15 feet maximum) to the cavalier's mount's speed when it uses the charge or withdraw action.<sup><InnerLink showBacklink="backlink-class-cavalier-ref-S-1" id="class-cavalier-ref-S-1" data-hash-target to="class-cavalier-S">19</InnerLink></sup></p>
<p><strong>Locathah:</strong> Add 1 hit point to the cavalier's mount. If the cavalier ever replaces his mount, the new mount gains these bonus hit points.<sup><InnerLink showBacklink="backlink-class-cavalier-ref-T-1" id="class-cavalier-ref-T-1" data-hash-target to="class-cavalier-T">20</InnerLink></sup></p>
<p><strong>Nagaji:</strong> Add 1 foot to the base speed of the cavalier's mount. This has no effect in combat unless the cavalier has selected this reward five times (or another increment of five). If the cavalier ever replaces this mount, the new mount gains this bonus to its speed.<sup><InnerLink showBacklink="backlink-class-cavalier-ref-U-1" id="class-cavalier-ref-U-1" data-hash-target to="class-cavalier-U">21</InnerLink></sup></p>
<p><strong>Orc:</strong> Add +1 to the cavalier's CMB when making bull rush or overrun combat maneuvers against a challenged target.<sup><InnerLink showBacklink="backlink-class-cavalier-ref-V-1" id="class-cavalier-ref-V-1" data-hash-target to="class-cavalier-V">22</InnerLink></sup></p>
<p><strong>Vanara:</strong> Add 1/2 to the cavalier's level when determining the duration of the tactician ability.<sup><InnerLink showBacklink="backlink-class-cavalier-ref-W-1" id="class-cavalier-ref-W-1" data-hash-target to="class-cavalier-W">23</InnerLink></sup></p>
</div>
<h3 id="class-cavalier-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-cavalier/beast_rider">Beast Rider</Link></p><p><strong>Modifies or Replaces:</strong> Mount; Expert Trainer</p><p>Where some cavaliers are simply skilled with horses or well-trained knights, the beast rider spends his life in constant pursuit of the most perfect mount, forming bonds with greater, more powerful, and more exotic creatures.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/castellan">Castellan</Link></p><p><strong>Modifies or Replaces:</strong> Mount; Cavalier's Charge; Expert Trainer; Mighty Charge; Demanding Challenge; Supreme Charge</p><p>A castellan is a cavalier who dedicates himself to the defense of a castle or walled city.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/charger">Charger</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Weapon/Armor Proficiencies; Mount; Cavalier's Charge; Expert Trainer; Mighty Charge</p><p>(Centaur Only) No warrior better epitomizes the centaur's devastating martial power than the charger.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/circuit_judge">Circuit Judge</Link></p><p><strong>Modifies or Replaces:</strong> Tactician; Greater Tactician; Master Tactician; Challenge; Demanding Challenge</p><p>A circuit judge claims a specific region, becoming an expert in the local laws and, perhaps, becoming a fearsome executioner.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/constable">Constable</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Mount; Cavalier's Charge; Expert Trainer; Banner; Mighty Charge; Supreme Charge; Greater Banner</p><p>Constables keep order in the narrow streets and dark alleys of settlements.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/courtly_knight">Courtly Knight</Link></p><p><strong>Modifies or Replaces:</strong> Tactician; Greater Tactician; Master Tactician</p><p>These courtly knights are equally at home in a duel with words or swords.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/daring_champion">Daring Champion</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; Mount; Cavalier's Charge; Expert Trainer; Mighty Charge; Supreme Charge</p><p>While many cavaliers are the champions of old fighting forms, some younger, more daring cavaliers mix a martial style influenced by the lighter armored and more flamboyant swashbuckler forms with the dedication of cavalier orders.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/daring_general">Daring General</Link></p><p><strong>Modifies or Replaces:</strong> Bonus Feats; Demanding Challenge; Supreme Charge</p><p>Those cavaliers most gifted at command often become daring generals.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/disciple_of_the_pike">Disciple of the Pike</Link></p><p><strong>Modifies or Replaces:</strong> Mount; Cavalier's Charge; Expert Trainer; Banner; Greater Banner; Mighty Charge; Supreme Charge</p><p>The Hellknight Order of the Pike are renowned monster hunters, taking on large game using ancient weapon arts combined with modern equipment.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/drakerider">Drakerider</Link></p><p><strong>Modifies or Replaces:</strong> Mount; Tactician; Expert Trainer; Banner; Greater Tactician; Greater Banner; Master Tactician</p><p>While many cavaliers dream of riding a dragon into battle, drakeriders come to learn that the reality involves far more effort than they had expected.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/emissary">Emissary</Link></p><p><strong>Modifies or Replaces:</strong> Tactician; Banner; Greater Tactician; Greater Banner; Supreme Charge</p><p>Some cavaliers focus more on speed and mobility than they do on the raw power of the mounted charge.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/esquire">Esquire</Link></p><p><strong>Modifies or Replaces:</strong> Mount; Cavalier's Charge; Expert Trainer; Banner; Mighty Charge; Supreme Charge</p><p>The esquire is a roving knight who acquires the services of a faithful follower - an aide-de-camp - who serves as the esquire's assistant, spear carrier, and guard.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/fell_rider">Fell Rider</Link></p><p><strong>Modifies or Replaces:</strong> Mount; Cavalier's Charge; Expert Trainer; Banner; Mighty Charge; Greater Banner; Supreme Charge</p><p>(Hobgoblin Only) The fell rider rides a bestial steed, a mount mastered by him alone. He tramples his enemies down, leaving twisted bodies in his wake, and fear rides with him.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/first_mothers_fang">First Mother's Fang</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Weapon Proficiencies; Mount; Order</p><p>A first mother's fang acts as a servant of his nation, a skilled general and tactician in times of war and a noble governor during times of peace.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/gallant">Gallant</Link></p><p><strong>Modifies or Replaces:</strong> Order; Banner; Greater Banner</p><p>Gallants embody the virtues of honor, generosity, and civility. Their personal symbol serves as an inspiration to others in a courtly setting as much as on a battlefield.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/gendarme">Gendarme</Link></p><p><strong>Modifies or Replaces:</strong> Tactician; Greater Tactician; Master Tactician; Supreme Charge</p><p>The gendarme cares less for the finer points of tactical precision than he does for the exhilaration of the charge: the rush of wind through the visor of his helmet, the feel of his couched lance, the satisfying shriek of armor giving way before his weapon's force as the point drives past metal into his foes.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/ghost_rider">Ghost Rider</Link></p><p><strong>Modifies or Replaces:</strong> Mount; Tactician; Greater Tactician; Master Tactician; Cavalier's Charge; Expert Trainer; Banner; Mighty Charge; Greater Banner</p><p>Ghost riders are conflicted warriors who use the powers of the phantasmal dead even while seeking out and banishing the corruption of undeath from plagued communities.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/green_knight">Green Knight</Link></p><p><strong>Modifies or Replaces:</strong> Tactician; Mount; Order; Cavalier's Charge; Expert Trainer; Banner; Greater Tactician; Mighty Charge; Greater Banner; Master Tactician; Supreme Charge</p><p>Some knights serve nature itself and can be found protecting unspoiled natural places or serving fey beings.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/herald_squire">Herald Squire</Link></p><p><strong>Modifies or Replaces:</strong> Tactician; 2nd-level Order Ability; Cavalier's Charge</p><p>The herald squire is the eyes and ears of a traveling knight.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/honor_guard">Honor Guard</Link></p><p><strong>Modifies or Replaces:</strong> Challenge; Cavalier's Charge; Mighty Charge; Demanding Challenge</p><p>Certain cavaliers are trained not as advance combatants, but as loyal guards, standing as firm defenders in the face of threats to their chosen charge.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/hooded_knight">Hooded Knight</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Mount; Tactician; Greater Tactician; Master Tactician</p><p>Some cavaliers wander the lonely roads of the world - any world, including the First World - protecting travelers and acting as their honor guard.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/huntmaster">Huntmaster</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; Challenge; Mount; Tactician; Greater Tactician; Master Tactician; Cavalier's Charge; Expert Trainer; Banner; Bonus Feats; Mighty Charge; Greater Banner; Supreme Charge</p><p>Huntmasters train the beasts favored by lordly castes into swift and deadly trackers.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/hussar">Hussar</Link></p><p><strong>Modifies or Replaces:</strong> Armor Proficiencies; Class Skills; Tactician; Banner; Greater Banner; Bonus Feats; Greater Tactician; Master Tactician</p><p>Agile and maneuverable cavalry, hussars make up for their relatively light armor with their speed and cunning.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/knight_of_arnisant">Knight of Arnisant</Link></p><p><strong>Modifies or Replaces:</strong> Tactician; Expert Trainer; Banner; Greater Tactician; Demanding Challenge; Greater Tactician</p><p>The cavaliers known as knights of Arnisant revere the famous general who was crucial in the defeat of the Whispering Tyrant, the powerful wizard-king. Knights of Arnisant call upon Arnisant to grant them protection from evil magic, just as the Shield of Aroden protected him.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/luring_cavalier">Luring Cavalier</Link></p><p><strong>Modifies or Replaces:</strong> Challenge; Cavalier's Charge; Mighty Charge; Demanding Challenge; Supreme Charge</p><p>Those who study the perfection of strategy and tactics know that picking the battlefield can grant advantages that only overwhelming numbers of allies can eclipse.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/musketeer">Musketeer</Link></p><p><strong>Modifies or Replaces:</strong> Mount; Expert Trainer</p><p>Some cavaliers are entrusted by their masters with the care and use of expensive and powerful oddities - firearms.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/oceanrider">Oceanrider</Link></p><p><strong>Modifies or Replaces:</strong> Armor Proficiency; Mount; Expert Trainer</p><p>Oceanriders are underwater cavaliers who ride dolphins, orcas, or seahorses.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/qabarat_outrider">Qabarat Outrider</Link></p><p><strong>Modifies or Replaces:</strong> Armor Proficiency; Tactician; Greater Tactician; Master Tactician; Banner; Greater Banner</p><p>(Lashunta Only) The war colleges of the Castrovelian city-state of Qabarat produce a distinctive breed of cavalier known as the Qabarat outrider. In defense of the lashunta city-states, outriders lead small units of regular troops, the members of which can link minds with one another to form bonds in battle few can match.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/qadiran_horselord">Qadiran Horselord</Link></p><p><strong>Modifies or Replaces:</strong> Weapon and Armor Proficiency; Mount; Tactician; Cavalier's Charge; 6th-level Bonus Feat; Greater Tactician; Master Tactician</p><p>Much like the breed of horses they ride, Qadiran horselords pride themselves on their mobility and endurance.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/saurian_champion">Saurian Champion</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Weapon/Armor Proficiencies; Challenge; Order; Mount; Tactician; Greater Tactician; Master Tactician; Banner; Greater Banner</p><p>These primeval cavaliers idolize dinosaurs as apex predators and value them as powerful, oversized mounts.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/sister_in_arms">Sister-in-Arms</Link></p><p><strong>Modifies or Replaces:</strong> Challenge; Order; Mount; Cavalier's Charge; Expert Trainer; Mighty Charge; Supreme Charge</p><p>Some of the most charismatic Gray Maidens combine their devotion to their sisters with the intense tactical training they received, learning to perfectly direct their companions and inspiring them to survive and emerge victorious.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/spellscar_drifter">Spellscar Drifter</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; Tactician; Cavalier's Charge; Banner; Bonus Feats; Greater Tactician; Mighty Charge; Demanding Challenge; Master Tactician; Supreme Charge</p><p>Spellscar drifters are self-reliant and always keep their firearms loaded - in the Spellscar Desert, a rider with a slow draw doesn't live long.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/standard_bearer">Standard Bearer</Link></p><p><strong>Modifies or Replaces:</strong> Mount; Banner; Mighty Charge; Supreme Charge</p><p>Some cavaliers prefer to stand away from the fray, their banners a beacon shining brightly over the battlefield, rallying their troops to victory.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/strategist">Strategist</Link></p><p><strong>Modifies or Replaces:</strong> Expert Trainer; Greater Banner; 18th-level Bonus Feat</p><p>Some cavaliers make a lifelong mission out of their exceptional ability to direct troops on the battlefield, combining tactical insight with a preternatural skill at improving the teamwork of their allies in order to win the day.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/verdivant">Verdivant</Link></p><p><strong>Modifies or Replaces:</strong> Expert Trainer; Tactician; Banner; Greater Tactician; Greater Banner; Master Tactician; Bonus Feats; Cavalier's Charge</p><p>Some vine leshys' spirits are vibrant enough to project this animus beyond their own bodies</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/vermin_tamer">Vermin Tamer</Link></p><p><strong>Modifies or Replaces:</strong> Mount; Expert Trainer; Demanding Challenge</p><p>Due to the strange terrain, the lack of sunlight, and numerous other hazards, keeping a traditional mount in the Darklands can prove difficult. Cavaliers native to or traveling the region may choose to tame local creatures instead.</p></div>
<div className="archetype"><p><Link to="/arc-cavalier/wave_rider">Wave Rider</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; Mount</p><p>Throughout the Inner Sea region, wave riders patrol harbors, keeping them safe from dangerous sea creatures and watching for smugglers. The most famous of these is the hippocampus-riding Sea Cavalry of Absalom.</p></div>
<h3 id="class-cavalier-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"cavalier archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Armor Proficiency"},{"header":"Banner"},{"header":"Greater Banner"},{"header":"Bonus Feats"},{"header":"6th-level Bonus Feat"},{"header":"18th-level Bonus Feat"},{"header":"Cavalier's Charge"},{"header":"Mighty Charge"},{"header":"Supreme Charge"},{"header":"Challenge"},{"header":"Demanding Challenge"},{"header":"Class Skills"},{"header":"Expert Trainer"},{"header":"Mount"},{"header":"Order"},{"header":"2nd-level Order Ability"},{"header":"Tactician"},{"header":"Greater Tactician"},{"header":"Master Tactician"},{"header":"Weapon Proficiency"},{"header":"Weapon/Armor Proficiency"}],"data":[["‹arc-cavalier/Beast Rider›",null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null],["‹arc-cavalier/Castellan›",null,null,null,null,null,null,"X","X","X",null,"X",null,"X","X",null,null,null,null,null,null,null],["‹arc-cavalier/Charger›",null,null,null,null,null,null,"X","X",null,null,null,"X","X","X",null,null,null,null,null,null,"X"],["‹arc-cavalier/Circuit Judge›",null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,"X","X","X",null,null],["‹arc-cavalier/Constable›",null,"X","X",null,null,null,"X","X","X",null,null,"X","X","X",null,null,null,null,null,null,null],["‹arc-cavalier/Courtly Knight›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null],["‹arc-cavalier/Daring Champion›",null,null,null,null,null,null,"X","X","X",null,null,null,"X","X",null,null,null,null,null,null,"X"],["‹arc-cavalier/Daring General›",null,null,null,"X",null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-cavalier/Disciple of the Pike›",null,"X","X",null,null,null,"X","X","X",null,null,null,"X","X",null,null,null,null,null,null,null],["‹arc-cavalier/Drakerider›",null,"X","X",null,null,null,null,null,null,null,null,null,"X","X",null,null,"X","X","X",null,null],["‹arc-cavalier/Emissary›",null,"X","X",null,null,null,null,null,"X",null,null,null,null,null,null,null,"X","X",null,null,null],["‹arc-cavalier/Esquire›",null,"X",null,null,null,null,"X","X","X",null,null,null,"X","X",null,null,null,null,null,null,null],["‹arc-cavalier/Fell Rider›",null,"X","X",null,null,null,"X","X","X",null,null,null,"X","X",null,null,null,null,null,null,null],["‹arc-cavalier/First Mother's Fang›",null,null,null,null,null,null,null,null,null,null,null,"X",null,"X","X",null,null,null,null,"X",null],["‹arc-cavalier/Gallant›",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-cavalier/Gendarme›",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X","X","X",null,null],["‹arc-cavalier/Ghost Rider›",null,"X","X",null,null,null,"X","X",null,null,null,null,"X","X",null,null,"X","X","X",null,null],["‹arc-cavalier/Green Knight›",null,"X","X",null,null,null,"X","X","X",null,null,null,"X","X","X",null,"X","X","X",null,null],["‹arc-cavalier/Herald Squire›",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X","X",null,null,null,null],["‹arc-cavalier/Honor Guard›",null,null,null,null,null,null,"X","X",null,"X","X",null,null,null,null,null,null,null,null,null,null],["‹arc-cavalier/Hooded Knight›",null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,"X","X","X",null,null],["‹arc-cavalier/Huntmaster›",null,"X","X","X",null,null,"X","X","X","X",null,null,"X","X",null,null,"X","X","X",null,"X"],["‹arc-cavalier/Hussar›","X","X","X","X",null,null,null,null,null,null,null,"X",null,null,null,null,"X","X","X",null,null],["‹arc-cavalier/Knight of Arnisant›",null,"X",null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,"X","X",null,null,null],["‹arc-cavalier/Luring Cavalier›",null,null,null,null,null,null,"X","X","X","X","X",null,null,null,null,null,null,null,null,null,null],["‹arc-cavalier/Musketeer›",null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null],["‹arc-cavalier/Oceanrider›","X",null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null],["‹arc-cavalier/Qabarat Outrider›","X","X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null],["‹arc-cavalier/Qadiran Horselord›",null,null,null,null,"X",null,"X",null,null,null,null,null,null,"X",null,null,"X","X","X",null,"X"],["‹arc-cavalier/Saurian Champion›",null,"X","X",null,null,null,null,null,null,"X",null,"X",null,"X","X",null,"X","X","X",null,"X"],["‹arc-cavalier/Sister-in-Arms›",null,null,null,null,null,null,"X","X","X","X",null,null,"X","X","X",null,null,null,null,null,null],["‹arc-cavalier/Spellscar Drifter›",null,"X",null,"X",null,null,"X","X","X",null,"X",null,null,null,null,null,"X","X","X",null,"X"],["‹arc-cavalier/Standard Bearer›",null,"X",null,null,null,null,null,"X","X",null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-cavalier/Strategist›",null,null,"X",null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-cavalier/Verdivant›",null,"X","X","X",null,null,"X",null,null,null,null,null,"X",null,null,null,"X","X","X",null,null],["‹arc-cavalier/Vermin Tamer›",null,null,null,null,null,null,null,null,null,null,"X",null,"X","X",null,null,null,null,null,null,null],["‹arc-cavalier/Wave Rider›",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,"X"]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-cavalier-label">Footnotes</h3>
<ol>
<li id="class-cavalier-A">
<p><Link to="/source/advanced_race_guide">Advanced Race Guide pg. 85</Link> <InnerLink id="backlink-class-cavalier-ref-A-1" data-hash-target to="class-cavalier-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-cavalier-B">
<p><Link to="/source/blood_of_the_sea">Blood of the Sea pg. 5</Link> <InnerLink id="backlink-class-cavalier-ref-B-1" data-hash-target to="class-cavalier-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-cavalier-C">
<p>Advanced Race Guide pg. 92 <InnerLink id="backlink-class-cavalier-ref-C-1" data-hash-target to="class-cavalier-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-cavalier-D">
<p>Advanced Race Guide pg. 13 <InnerLink id="backlink-class-cavalier-ref-D-1" data-hash-target to="class-cavalier-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-cavalier-E">
<p>Advanced Race Guide pg. 23 <InnerLink id="backlink-class-cavalier-ref-E-1" data-hash-target to="class-cavalier-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-cavalier-F">
<p><Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 13</Link> <InnerLink id="backlink-class-cavalier-ref-F-1" data-hash-target to="class-cavalier-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-cavalier-G">
<p><Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 10</Link> <InnerLink id="backlink-class-cavalier-ref-G-1" data-hash-target to="class-cavalier-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-cavalier-H">
<p>Advanced Race Guide pg. 33 <InnerLink id="backlink-class-cavalier-ref-H-1" data-hash-target to="class-cavalier-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-cavalier-I">
<p>Advanced Race Guide pg. 115 <InnerLink id="backlink-class-cavalier-ref-I-1" data-hash-target to="class-cavalier-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-cavalier-J">
<p><Link to="/source/goblins_of_golarion">Goblins of Golarion pg. 31</Link> <InnerLink id="backlink-class-cavalier-ref-J-1" data-hash-target to="class-cavalier-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
<li id="class-cavalier-K">
<p>Advanced Race Guide pg. 42 <InnerLink id="backlink-class-cavalier-ref-K-1" data-hash-target to="class-cavalier-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
<li id="class-cavalier-L">
<p>Advanced Race Guide pg. 63 <InnerLink id="backlink-class-cavalier-ref-L-1" data-hash-target to="class-cavalier-ref-L-1" aria-label="Back to reference L-1">↩</InnerLink></p>
</li>
<li id="class-cavalier-M">
<p><Link to="/source/horror_adventures">Horror Adventures pg. 41</Link> <InnerLink id="backlink-class-cavalier-ref-M-1" data-hash-target to="class-cavalier-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink></p>
</li>
<li id="class-cavalier-N">
<p>Advanced Race Guide pg. 53 <InnerLink id="backlink-class-cavalier-ref-N-1" data-hash-target to="class-cavalier-ref-N-1" aria-label="Back to reference N-1">↩</InnerLink></p>
</li>
<li id="class-cavalier-O">
<p>Advanced Race Guide pg. 121 <InnerLink id="backlink-class-cavalier-ref-O-1" data-hash-target to="class-cavalier-ref-O-1" aria-label="Back to reference O-1">↩</InnerLink></p>
</li>
<li id="class-cavalier-P">
<p>Advanced Race Guide pg. 73 <InnerLink id="backlink-class-cavalier-ref-P-1" data-hash-target to="class-cavalier-ref-P-1" aria-label="Back to reference P-1">↩</InnerLink></p>
</li>
<li id="class-cavalier-Q">
<p>Advanced Player's Guide pg. 23 <InnerLink id="backlink-class-cavalier-ref-Q-1" data-hash-target to="class-cavalier-ref-Q-1" aria-label="Back to reference Q-1">↩</InnerLink></p>
</li>
<li id="class-cavalier-R">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-cavalier-ref-R-1" data-hash-target to="class-cavalier-ref-R-1" aria-label="Back to reference R-1">↩</InnerLink> <InnerLink id="backlink-class-cavalier-ref-R-2" data-hash-target to="class-cavalier-ref-R-2" aria-label="Back to reference R-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-cavalier-S">
<p>Advanced Race Guide pg. 133 <InnerLink id="backlink-class-cavalier-ref-S-1" data-hash-target to="class-cavalier-ref-S-1" aria-label="Back to reference S-1">↩</InnerLink></p>
</li>
<li id="class-cavalier-T">
<p>Blood of the Sea pg. 11 <InnerLink id="backlink-class-cavalier-ref-T-1" data-hash-target to="class-cavalier-ref-T-1" aria-label="Back to reference T-1">↩</InnerLink></p>
</li>
<li id="class-cavalier-U">
<p>Blood of the Beast pg. 16 <InnerLink id="backlink-class-cavalier-ref-U-1" data-hash-target to="class-cavalier-ref-U-1" aria-label="Back to reference U-1">↩</InnerLink></p>
</li>
<li id="class-cavalier-V">
<p>Advanced Race Guide pg. 139 <InnerLink id="backlink-class-cavalier-ref-V-1" data-hash-target to="class-cavalier-ref-V-1" aria-label="Back to reference V-1">↩</InnerLink></p>
</li>
<li id="class-cavalier-W">
<p>Blood of the Beast pg. 28 <InnerLink id="backlink-class-cavalier-ref-W-1" data-hash-target to="class-cavalier-ref-W-1" aria-label="Back to reference W-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _cleric = {hasJL:true,title: "Cleric", jsx: <><div className="jumpList" id="class-cleric-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-cleric-bonus-languages">Bonus Languages</InnerLink></li><li><InnerLink toTop to="class-cleric-aura-ex">Aura</InnerLink></li><li><InnerLink toTop to="class-cleric-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-cleric-chaotic-evil-good-and-lawful-spells">Aligned Spells</InnerLink></li><li><InnerLink toTop to="class-cleric-channel-energy-su">Channel Energy</InnerLink></li><li><InnerLink toTop to="class-cleric-domains">Domains</InnerLink></li><li><InnerLink toTop to="class-cleric-spontaneous-casting">Spontaneous Casting</InnerLink></li><li><InnerLink toTop to="class-cleric-ex-clerics">Ex-Clerics</InnerLink></li><li><InnerLink toTop to="class-cleric-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-cleric-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-cleric-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-cleric-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-cleric-cleric">Cleric</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 38</Link></p>
<p>In faith and the miracles of the divine, many find a greater purpose. Called to serve powers beyond most mortal understanding, all priests preach wonders and provide for the spiritual needs of their people. Clerics are more than mere priests, though; these emissaries of the divine work the will of their deities through strength of arms and the magic of their gods. Devoted to the tenets of the religions and philosophies that inspire them, these ecclesiastics quest to spread the knowledge and influence of their faith. Yet while they might share similar abilities, clerics prove as different from one another as the divinities they serve, with some offering healing and redemption, others judging law and truth, and still others spreading conflict and corruption. The ways of the cleric are varied, yet all who tread these paths walk with the mightiest of allies and bear the arms of the gods themselves.</p>
<p><strong>Role:</strong> More than capable of upholding the honor of their deities in battle, clerics often prove stalwart and capable combatants. Their true strength lies in their capability to draw upon the power of their deities, whether to increase their own and their allies' prowess in battle, to vex their foes with divine magic, or to lend healing to companions in need.</p>
<p>As their powers are influenced by their faith, all clerics must focus their worship upon a divine source. While the vast majority of clerics revere a specific deity, a small number dedicate themselves to a divine concept worthy of devotion - such as battle, death, justice, or knowledge - free of a deific abstraction. (Work with your GM if you prefer this path to selecting a specific deity.)</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>A cleric's alignment must be within one step of her deity's, along either the law/chaos axis or the good/evil axis.</span></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>4d6 &times; 10 gp (average 140 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>2 + Int modifier</td></tr><tr><th scope="row" rowSpan={3} className="sw">Class Skills</th><td><Link to="/skill/appraise">Appraise</Link>, <Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_history">Knowledge (history)</Link>, <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link>, <Link to="/skill/knowledge_planes">Knowledge (planes)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, <Link to="/skill/linguistics">Linguistics</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/heal">Heal</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/diplomacy">Diplomacy</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-cleric-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-cleric--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Base Attack Bonus</th>
<th>Fort Save</th>
<th>Ref Save</th>
<th>Will Save</th>
<th>Special</th>
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
<td>+0</td>
<td>+2</td>
<td>+0</td>
<td>+2</td>
<td>Aura, channel energy 1d6, domains, orisons</td>
<td>3</td>
<td>1+1</td>
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
<td>+3</td>
<td>+0</td>
<td>+3</td>
<td>-</td>
<td>4</td>
<td>2+1</td>
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
<td>+3</td>
<td>+1</td>
<td>+3</td>
<td>Channel energy 2d6</td>
<td>4</td>
<td>2+1</td>
<td>1+1</td>
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
<td>+4</td>
<td>+1</td>
<td>+4</td>
<td>-</td>
<td>4</td>
<td>3+1</td>
<td>2+1</td>
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
<td>+4</td>
<td>+1</td>
<td>+4</td>
<td>Channel energy 3d6</td>
<td>4</td>
<td>3+1</td>
<td>2+1</td>
<td>1+1</td>
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
<td>+5</td>
<td>+2</td>
<td>+5</td>
<td>-</td>
<td>4</td>
<td>3+1</td>
<td>3+1</td>
<td>2+1</td>
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
<td>+5</td>
<td>+2</td>
<td>+5</td>
<td>Channel energy 4d6</td>
<td>4</td>
<td>4+1</td>
<td>3+1</td>
<td>2+1</td>
<td>1+1</td>
<td>-</td>
<td>-</td>
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
<td>-</td>
<td>4</td>
<td>4+1</td>
<td>3+1</td>
<td>3+1</td>
<td>2+1</td>
<td>-</td>
<td>-</td>
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
<td>Channel energy 5d6</td>
<td>4</td>
<td>4+1</td>
<td>4+1</td>
<td>3+1</td>
<td>2+1</td>
<td>1+1</td>
<td>-</td>
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
<td>-</td>
<td>4</td>
<td>4+1</td>
<td>4+1</td>
<td>3+1</td>
<td>3+1</td>
<td>2+1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>+8/+3</td>
<td>+7</td>
<td>+3</td>
<td>+7</td>
<td>Channel energy 6d6</td>
<td>4</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>3+1</td>
<td>2+1</td>
<td>1+1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>+9/+4</td>
<td>+8</td>
<td>+4</td>
<td>+8</td>
<td>-</td>
<td>4</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>3+1</td>
<td>3+1</td>
<td>2+1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>+9/+4</td>
<td>+8</td>
<td>+4</td>
<td>+8</td>
<td>Channel energy 7d6</td>
<td>4</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>3+1</td>
<td>2+1</td>
<td>1+1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>+10/+5</td>
<td>+9</td>
<td>+4</td>
<td>+9</td>
<td>-</td>
<td>4</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>3+1</td>
<td>3+1</td>
<td>2+1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>+11/+6/+1</td>
<td>+9</td>
<td>+5</td>
<td>+9</td>
<td>Channel energy 8d6</td>
<td>4</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>3+1</td>
<td>2+1</td>
<td>1+1</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>+12/+7/+2</td>
<td>+10</td>
<td>+5</td>
<td>+10</td>
<td>-</td>
<td>4</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>3+1</td>
<td>3+1</td>
<td>2+1</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>+12/+7/+2</td>
<td>+10</td>
<td>+5</td>
<td>+10</td>
<td>Channel energy 9d6</td>
<td>4</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>3+1</td>
<td>2+1</td>
<td>1+1</td>
</tr>
<tr>
<td>18th</td>
<td>+13/+8/+3</td>
<td>+11</td>
<td>+6</td>
<td>+11</td>
<td>-</td>
<td>4</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>3+1</td>
<td>3+1</td>
<td>2+1</td>
</tr>
<tr>
<td>19th</td>
<td>+14/+9/+4</td>
<td>+11</td>
<td>+6</td>
<td>+11</td>
<td>Channel energy 10d6</td>
<td>4</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>3+1</td>
<td>3+1</td>
</tr>
<tr>
<td>20th</td>
<td>+15/+10/+5</td>
<td>+12</td>
<td>+6</td>
<td>+12</td>
<td>-</td>
<td>4</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
<td>4+1</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={2}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td colSpan={2}>The favored weapon of their deity</td></tr><tr><th>Light Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Medium Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Heavy Armor?</th><td colSpan={2}>No</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">Yes, except tower shields</td></tr></tbody></table>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-cleric-bonus-languages" data-hash-target><div className="box">Bonus Languages</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Your bonus language options include Celestial, Abyssal, and Infernal (the languages of good, chaotic evil, and lawful evil outsiders, respectively). These choices are in addition to the bonus languages available to you because of your race.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/abstract-091"><IonIcon icon="/icons/abstract-091.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-cleric-aura-ex" data-hash-target><div className="box">Aura (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">If you are a cleric of a chaotic, evil, good, or lawful deity, you have a particularly powerful aura corresponding to your deity's alignment (see <Link to="/spell/detect_evil">detect evil</Link>).</div></div></div></div>
<div className="ability"><div className="abIcon"><Link to="/icons"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-cleric-spells" data-hash-target><div className="box">Spells</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">To prepare or cast a spell, you must have a Wisdom score equal to at least 10 + the spell level. You can cast only a certain number of spells of each spell level per day, as shown on the table above. In addition, you receive <Link to="/rule/determine_bonuses">bonus spells per day</Link> if you have a high Wisdom score.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain the ability to cast divine spells which are drawn from the <Link to="/main/spells_cleric">cleric spell list</Link>. The DC for a saving throw against spells you cast is 10 + the spell level + your Wisdom modifier. Your alignment may restrict you from casting certain spells opposed to your moral or ethical beliefs; see <em>Chaotic, Evil, Good, and Lawful Spells.</em> You must choose and prepare your spells in advance.</div></div></div><div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You must choose a time when you must spend 1 hour each day in quiet meditation or supplication to regain your daily allotment of spells. You may prepare and cast any spell on your spell list, provided that you can cast spells of that level, but you must choose which spells to prepare.</div></div></div></div><div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-cleric-orisons" data-hash-target><div className="box">Orisons</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You learn a number of orisons, or 0-level divine spells. These spells are prepared like any other spell, but they are not expended when cast and may be used again. Orisons prepared using other spell slots, such as those due to metamagic feats, are expended normally.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-cleric-chaotic-evil-good-and-lawful-spells" data-hash-target><div className="box">Chaotic, Evil, Good, and Lawful Spells</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You can't cast spells of an alignment opposed to your own or your deity's (if you have one). Spells associated with particular alignments are indicated by the chaos, evil, good, and law descriptors in their spell descriptions.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/abstract-091"><IonIcon icon="/icons/abstract-091.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-cleric-channel-energy-su" data-hash-target><div className="box">Channel Energy (Su)</div><div className="flavor">Regardless of alignment, any cleric can release a wave of energy by channeling the power of her faith through her holy (or unholy) symbol. This energy can be used to cause or heal damage, depending on the type of energy channeled and the creatures targeted.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">3 + Cha modifier times/day</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You must present your holy symbol to channel energy. This causes a <Link to="/misc/burst">burst</Link> that affects all creatures of one type (either undead or living) in a 30-foot radius centered on you. This deals or heals (see below) 1d6 damage. You can choose whether or not to include yourself in this effect. Creatures that take damage from channeled energy receive a Will save to halve the damage, with a DC equal to 10 + <Link to="/misc/half">half</Link> your cleric level + your Charisma modifier.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Provokes <Link to="/rule/aoo">AoO?</Link></div></div><div className="abEnd"><div className="box">No</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 3rd Level</div></div><div className="abEnd"><div className="box">The damage becomes 2d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 5th Level</div></div><div className="abEnd"><div className="box">The damage becomes 3d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">The damage becomes 4d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">The damage becomes 5d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">The damage becomes 6d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">The damage becomes 7d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">The damage becomes 8d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 17th Level</div></div><div className="abEnd"><div className="box">The damage becomes 9d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">The damage becomes 10d6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">A good cleric (or one who worships a good deity) channels <strong className="hl">positive energy</strong> and can choose to deal damage to undead creatures or to heal living creatures. An evil cleric (or one who worships an evil deity) channels <strong className="hl">negative energy</strong> and can choose to deal damage to living creatures or to heal undead creatures. A neutral cleric who worships a neutral deity (or one who is not devoted to a particular deity) must choose whether she channels positive or negative energy. Once this choice is made, it cannot be reversed. <em>This decision also determines whether the cleric casts spontaneous</em> cure <em>or</em> inflict <em>spells (see</em> Spontaneous Casting <em>below).</em> Creatures healed by channeled energy cannot exceed their maximum hit point total - all excess healing is lost.</div></div></div></div>
<aside><p>Some deities may endow their mortal servants with the power to channel energies in other ways that more closely mirror their particular focus. You may choose one of these <Link to="/ability/variant_channeling">variant channeling abilities</Link> instead.</p>
</aside><div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-cleric-domains" data-hash-target><div className="box">Domains</div><div className="flavor">A cleric's deity influences her alignment, what magic she can perform, her values, and how others see her.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Choice</div></div><div className="abEnd"><div className="box"><p>You choose two <Link to="/ability/domains">domains</Link> from among those belonging to your deity. You can select an alignment domain (<Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/good">Good</Link>, or <Link to="/domain/law">Law</Link>) only if your alignment matches that domain. If you are not devoted to a particular deity, you still select two domains to represent your spiritual inclinations and abilities (subject to GM approval). The restriction on alignment domains still applies.</p>
<p>Each domain grants a number of <strong className="hl">domain powers</strong>, dependent upon your cleric level, as well as a number of bonus spells. You gain one <strong className="hl">domain spell slot</strong> for each level of cleric spell you can cast, from 1st on up. Each day, you can prepare one of the spells from your two domains in that slot. If a domain spell is not on the cleric spell list, you can prepare it only in your domain spell slot. Domain spells cannot be used to cast spells spontaneously.</p>
<p>In addition, you gain the listed powers from both of your domains, if you are of a high enough level. Unless otherwise noted, using a domain power is a <strong className="hl">standard action</strong>.</p>
</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-cleric-spontaneous-casting" data-hash-target><div className="box">Spontaneous Casting:</div><div className="flavor">A good cleric (or a neutral cleric of a good deity) can channel stored spell energy into healing spells that she did not prepare ahead of time.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can "lose" any prepared spell that is not an orison or domain spell in order to cast any <em>cure</em> spell of the same spell level or lower. This is only true if you channel positive energy. If you channel negative energy, you can convert spells to <em>inflict</em> spells.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">A <em>cure spell</em> is any spell with "cure" in its name, while an <em>inflict spell</em> is one with "inflict" in its name. These spells are <Link to="/main/spell_groupings">grouped here</Link>.</div></div></div></div>
<h3 id="class-cleric-ex-clerics" data-hash-target>Ex-Clerics</h3>
<p>A cleric who grossly violates the code of conduct required by her god loses all spells and class features, except for armor and shield proficiencies and proficiency with simple weapons. She cannot thereafter gain levels as a cleric of that god until she <Link to="/spell/atonement">atones</Link> for her deeds.<sup><InnerLink showBacklink="backlink-class-cleric-ref-Ex-1" id="class-cleric-ref-Ex-1" data-hash-target to="class-cleric-Ex">1</InnerLink></sup></p>
<h3 id="class-cleric-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-cleric--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>Proxy (Su)</td><td>At 20th level, the cleric forges a direct, personal connection to her deity. She knows instinctively whether her deity would approve or disapprove of a given course of action or idea (though deities rarely bother to form opinions about overly mundane or trivial events). In addition, she can select an additional domain from the list offered by her deity.</td></tr>
<tr><td>Soul Channel (Su)</td><td>At 20th level, the character can channel energy six additional times per day, and her channel energy dice increase by one step. This capstone is available to characters with the channel energy class feature.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-cleric-favored-class-bonuses" data-hash-target>Favored Class Bonuses</h3>
<div className="hanging striped">
<p><strong>Aasimar:</strong> Add +1/2 to damage when using positive energy against undead or using Alignment Channel to damage evil outsiders.<sup><InnerLink showBacklink="backlink-class-cleric-ref-A-1" id="class-cleric-ref-A-1" data-hash-target to="class-cleric-A">2</InnerLink></sup></p>
<p><strong>Aphorite:</strong> Add a +1/2 bonus on Knowledge (planes) checks relating to Axis and creatures with the lawful subtype.<sup><InnerLink showBacklink="backlink-class-cleric-ref-B-1" id="class-cleric-ref-B-1" data-hash-target to="class-cleric-B">3</InnerLink></sup></p>
<p><strong>Dhampir:</strong> Add +1 to the caster level of any channeling feat used to affect undead.<sup><InnerLink showBacklink="backlink-class-cleric-ref-C-1" id="class-cleric-ref-C-1" data-hash-target to="class-cleric-C">4</InnerLink></sup></p>
<p><strong>Drow:</strong> Select one domain power granted at 1st level that is normally usable a number of times per day equal to 3 + the cleric's Wisdom modifier. The cleric adds +1/2 to the number of uses per day of that domain power.<sup><InnerLink showBacklink="backlink-class-cleric-ref-D-1" id="class-cleric-ref-D-1" data-hash-target to="class-cleric-D">5</InnerLink></sup></p>
<p><strong>Duergar:</strong> Add a +1/2 bonus on checks made to craft magic items.<sup><InnerLink showBacklink="backlink-class-cleric-ref-E-1" id="class-cleric-ref-E-1" data-hash-target to="class-cleric-E">6</InnerLink></sup></p>
<p><strong>Duskwalker:</strong> Add 1/2 point of damage when using positive energy against undead.<sup><InnerLink showBacklink="backlink-class-cleric-ref-F-1" id="class-cleric-ref-F-1" data-hash-target to="class-cleric-F">7</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Select one domain power granted at 1st level that is normally usable a number of times per day equal to 3 + the cleric's Wisdom modifier. The cleric adds +1/2 to the number of uses per day of that domain power.<sup><InnerLink showBacklink="backlink-class-cleric-ref-G-1" id="class-cleric-ref-G-1" data-hash-target to="class-cleric-G">8</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-cleric-ref-H-1" id="class-cleric-ref-H-1" data-hash-target to="class-cleric-H">9</InnerLink></sup></p>
<p><strong>Elf:</strong> Select one domain power granted at 1st level that is normally usable a number of times per day equal to 3 + the cleric's Wisdom modifier. The cleric adds +1/2 to the number of uses per day of that domain power.<sup><InnerLink showBacklink="backlink-class-cleric-ref-I-1" id="class-cleric-ref-I-1" data-hash-target to="class-cleric-I">10</InnerLink></sup></p>
<p><strong>Fetchling:</strong> Add 1/2 point to negative energy damage dealt by channeling energy and <em>inflict wounds</em> spells.<sup><InnerLink showBacklink="backlink-class-cleric-ref-J-1" id="class-cleric-ref-J-1" data-hash-target to="class-cleric-J">11</InnerLink></sup></p>
<p><strong>Gnome:</strong> Add +1/2 to the cleric's channeled energy total when healing creatures of the animal, fey, and plant types.<sup><InnerLink showBacklink="backlink-class-cleric-ref-K-1" id="class-cleric-ref-K-1" data-hash-target to="class-cleric-K">12</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Add +1/3 to the amount of damage dealt or damage healed when the cleric uses channel energy.<sup><InnerLink showBacklink="backlink-class-cleric-ref-L-1" id="class-cleric-ref-L-1" data-hash-target to="class-cleric-L">13</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Add a +1/4 bonus on caster level checks to remove afflictions (curses, diseases, poisons, etc.).<sup><InnerLink showBacklink="backlink-class-cleric-ref-M-1" id="class-cleric-ref-M-1" data-hash-target to="class-cleric-M">14</InnerLink></sup></p>
<p><strong>Halfling:</strong> Select one domain power granted at 1st level that is normally usable a number of times per day equal to 3 + the cleric's Wisdom modifier. The cleric adds +1/2 to the number of uses per day of that domain power.<sup><InnerLink showBacklink="backlink-class-cleric-ref-N-1" id="class-cleric-ref-N-1" data-hash-target to="class-cleric-N">15</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-cleric-ref-O-1" id="class-cleric-ref-O-1" data-hash-target to="class-cleric-O">16</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Select one domain power granted at 1st level that is normally usable a number of times per day equal to 3 + the cleric's Wisdom modifier. The cleric adds +1/2 to the number of uses per day of that domain power.<sup><InnerLink showBacklink="backlink-class-cleric-ref-P-1" id="class-cleric-ref-P-1" data-hash-target to="class-cleric-P">17</InnerLink></sup></p>
<p><strong>Hobgoblin:</strong> Add +1/2 to negative energy spell damage, including inflict spells.<sup><InnerLink showBacklink="backlink-class-cleric-ref-Q-1" id="class-cleric-ref-Q-1" data-hash-target to="class-cleric-Q">18</InnerLink></sup></p>
<p><strong>Human:</strong> Add a +1 bonus on caster level checks made to overcome the spell resistance of outsiders.<sup><InnerLink showBacklink="backlink-class-cleric-ref-R-1" id="class-cleric-ref-R-1" data-hash-target to="class-cleric-R">19</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-cleric-ref-S-1" id="class-cleric-ref-S-1" data-hash-target to="class-cleric-S">20</InnerLink></sup></p>
<p><strong>Ifrit:</strong> Add a +1/2 bonus on Knowledge (planes) checks relating to the Plane of Fire and creatures with the fire subtype.<sup><InnerLink showBacklink="backlink-class-cleric-ref-T-1" id="class-cleric-ref-T-1" data-hash-target to="class-cleric-T">21</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-cleric-ref-U-1" id="class-cleric-ref-U-1" data-hash-target to="class-cleric-U">22</InnerLink></sup></p>
<p><strong>Kobold:</strong> Add +1 to channel energy damage dealt to creatures denied their Dexterity bonus to AC (whether or not the creature has a Dexterity bonus to AC).<sup><InnerLink showBacklink="backlink-class-cleric-ref-V-1" id="class-cleric-ref-V-1" data-hash-target to="class-cleric-V">23</InnerLink></sup></p>
<p><strong>Oread:</strong> Add a +1/2 bonus on Knowledge (planes) checks relating to the Plane of Earth and creatures with the earth subtype.<sup><InnerLink showBacklink="backlink-class-cleric-ref-W-1" id="class-cleric-ref-W-1" data-hash-target to="class-cleric-W">24</InnerLink></sup></p>
<p><strong>Sylph:</strong> Add a +1/2 bonus on Knowledge (planes) checks relating to the Plane of Air and creatures with the air subtype.<sup><InnerLink showBacklink="backlink-class-cleric-ref-X-1" id="class-cleric-ref-X-1" data-hash-target to="class-cleric-X">25</InnerLink></sup></p>
<p><strong>Tengu:</strong> Gain a +1/2 bonus on Diplomacy checks to gather information and on Knowledge (local and religion) checks to know local religious practices and superstitions.<sup><InnerLink showBacklink="backlink-class-cleric-ref-Y-1" id="class-cleric-ref-Y-1" data-hash-target to="class-cleric-Y">26</InnerLink></sup></p>
<p><strong>Tiefling:</strong> Add a +1 bonus on caster level checks made to overcome the spell resistance of outsiders.<sup><InnerLink showBacklink="backlink-class-cleric-ref-Z-1" id="class-cleric-ref-Z-1" data-hash-target to="class-cleric-Z">27</InnerLink></sup></p>
<p><strong>Undine:</strong> Add a +1 bonus on caster level checks to overcome the spell resistance of creatures with the aquatic or water subtype.<sup><InnerLink showBacklink="backlink-class-cleric-ref-1-1" id="class-cleric-ref-1-1" data-hash-target to="class-cleric-1">28</InnerLink></sup></p>
<p><strong>Wayang:</strong> Add a +1/2 bonus to damage rolls the cleric makes when using channel energy and casting spells that deal negative energy damage or positive energy damage, including cure and inflict spells. This bonus does not apply to healing via negative energy effects or positive energy effects.<sup><InnerLink showBacklink="backlink-class-cleric-ref-2-1" id="class-cleric-ref-2-1" data-hash-target to="class-cleric-2">29</InnerLink></sup></p>
<p><strong>Wyrwood:</strong> Add 1/4 to the cleric's caster level when casting spells or using abilities from the Law domain or one of its subdomains, or when casting spells with the lawful descriptor.<sup><InnerLink showBacklink="backlink-class-cleric-ref-3-1" id="class-cleric-ref-3-1" data-hash-target to="class-cleric-3">30</InnerLink></sup></p>
</div>
<h3 id="class-cleric-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-cleric/angelfire_apostle">Angelfire Apostle</Link></p><p><strong>Modifies or Replaces:</strong> Armor Proficiency; Spellcasting; Alignment; Channel Energy</p><p>Angelfire apostles use the powers of good to avoid violence when possible and cleanse both maladies and evil creatures with blinding flames.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/appeaser">Appeaser</Link></p><p><strong>Modifies or Replaces:</strong> Aura; Channel Energy; Alignment; Spells; Domains</p><p>A rare few seek the power of dark forces for brighter ends by focusing on the utilitarian aspects of a god's portfolio, appeasing their deities through high praise and glorifying their chosen gods' unaligned aspects.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/asmodean_advocate">Asmodean Advocate</Link></p><p><strong>Modifies or Replaces:</strong> Domains</p><p>For the faithful of Asmodeus, the words used in a negotiation or contract matter more than their intent.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/blossoming_light">Blossoming Light</Link></p><p><strong>Modifies or Replaces:</strong> Armor Proficiency; Alignment; Channel Energy; Domains</p><p>Blossoming lights are clerics who take their pursuit of purity and light to extremes.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/cardinal">Cardinal</Link></p><p><strong>Modifies or Replaces:</strong> Armor Proficiency; Spontaneous Casting; Domain; Class Skills; Skill Ranks; Base Attack Bonus</p><p>Cardinals wield significant political power, engaging in the game of intrigue on behalf of their churches</p></div>
<div className="archetype"><p><Link to="/arc-cleric/channeler_of_the_unknown">Channeler of the Unknown</Link></p><p><strong>Modifies or Replaces:</strong> Weapon and Armor Proficiency; Spells; Aura; Channel Energy; Domains; Spontaneous Casting</p><p>(Ex-cleric archetype) Channelers of the unknown are those faithless clerics who channel the power of an unknown entity or force of the universe</p></div>
<div className="archetype"><p><Link to="/arc-cleric/cloistered_cleric">Cloistered Cleric</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; Domains; Spells</p><p>Cloistered clerics typically live in a temple and rarely interact with the outside world. They are bookish and well learned in the lore of the faith, paying less attention to its magical and martial aspects.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/crashing_wave">Crashing Wave</Link></p><p><strong>Modifies or Replaces:</strong> Deity; Bonus Languages; Channel Energy; Spontaneous Casting</p><p>Clerics who live in or near the sea sometimes embrace the watery aspect of Gozreh over the deity's other dimensions and take the title of crashing wave; such clerics understand the tempestuousness and cruelty of the sea, but also its generosity and bounty</p></div>
<div className="archetype"><p><Link to="/arc-cleric/crusader">Crusader</Link></p><p><strong>Modifies or Replaces:</strong> Domains; Spells</p><p>Crusaders serve the militant arm of a church, ready to stand guard over the religion's holy places and to be its swift, avenging arm against those who resist its truth.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/demonic_apostle">Demonic Apostle</Link></p><p><strong>Modifies or Replaces:</strong> Domains; Channel Energy</p><p>(Drow Only) Demon worship is common among the drow, and so are ranks of demonic apostles, who gain magical insight from their dark lords and crush their chaotic masters' enemies by channeling demonic energy.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/divine_paragon">Divine Paragon</Link></p><p><strong>Modifies or Replaces:</strong> Domain; Aura</p><p>Divine paragons strive to emulate their god's ideals as closely as possible.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/divine_scourge">Divine Scourge</Link></p><p><strong>Modifies or Replaces:</strong> Domains; Channel Energy</p><p>Divine scourges take on the role of dealing out unique punishments on behalf of their deities, taking pleasure in carrying out their sacrosanct duties.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/divine_strategist">Divine Strategist</Link></p><p><strong>Modifies or Replaces:</strong> Domains; Channel Energy</p><p>The divine strategist leads the armies of the faithful, not from the front lines but through her clever strategy and tactical acumen.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/ecclesitheurge">Ecclesitheurge</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; Domain; Channel Energy</p><p>Eschewing physical armor for protection via the strength of his faith, an ecclesitheurge focuses on the miracles his deity bestows and the breadth of that deity's dominion.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/elder_mythos_cultist">Elder Mythos Cultist</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Domains; Channel Energy; Spontaneous Casting; 5th, 11th, and 19th-level Channel Energy increase</p><p>Typically grasping, secretive, and thoroughly mad, Elder Mythos cultists open their bodies and minds to horrifying realities not meant for the sane as they strive to prepare the world for the eventual return of their alien masters.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/evangelist">Evangelist</Link></p><p><strong>Modifies or Replaces:</strong> Domains; Channel Energy; Spontaneous Casting</p><p>The evangelist is the voice of her religion in the world.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/fiendish_vessel">Fiendish Vessel</Link></p><p><strong>Modifies or Replaces:</strong> Domains; Channel Energy</p><p>(Tiefling Only) Fiendish vessels, through their fiendish heritage, share an innate connection with their patron, and that connection grants them understanding and power.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/forgemaster">Forgemaster</Link></p><p><strong>Modifies or Replaces:</strong> Domains; Channel Energy</p><p>(Dwarf Only) Forgemasters are priestly dwarves who are ritual casters and expert enchanters, able to produce their rune-graven armaments with astonishing speed.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/foundation_of_faith">Foundation of Faith</Link></p><p><strong>Modifies or Replaces:</strong> Channel Energy</p><p>Whether aiding the faithful or defending against the depredations of unbelievers, a foundation of faith is unshakable in her convictions.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/herald_caller">Herald Caller</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Domains; Armor Proficiencies</p><p>Unlike warpriests or paladins, who charge headlong into battle in the name of their patron deities, herald callers are adept at calling powerful outsiders to aid their brethren in battle.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/hidden_priest">Hidden Priest</Link></p><p><strong>Modifies or Replaces:</strong> 1st-level Domain Power, 8th-level Domain Power</p><p>When practicing their religion is outlawed, the hidden priest learns to hide their true nature and practice magic in secret.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/idealist">Idealist</Link></p><p><strong>Modifies or Replaces:</strong> Spontaneous Casting; Channel Energy</p><p>Idealist clerics are personifications of belief, each embracing the purest ideal of his deity's realm.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/iron_priest">Iron Priest</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Channel Energy; Spellcasting</p><p>Iron priests preach of the messengers from beyond the stars, envoys of the divine brought to Golarion in a falling star.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/lawspeaker">Lawspeaker</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Domains</p><p>Lawspeakers spread their philosophy of certain and unwavering justice throughout the Inner Sea region.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/mendevian_priest">Mendevian Priest</Link></p><p><strong>Modifies or Replaces:</strong> Domains</p><p>Crusade-minded clerics of Iomedae, Gorum, and other churches come to Mendev to learn battlefield tactics and the weaknesses of demons.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/merciful_healer">Merciful Healer</Link></p><p><strong>Modifies or Replaces:</strong> Domains; Channel Energy</p><p>The merciful healer is a master of battlefield revivification, sustaining and restoring allies to keep them in the fight.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/roaming_exorcist">Roaming Exorcist</Link></p><p><strong>Modifies or Replaces:</strong> Skill Ranks; Weapon/Armor Proficiencies; Domains; Channel Energy</p><p>The roaming exorcist travels far and wide to root out possessions, hauntings, and hidden evils. The roaming exorcist extracts unruly spirits from not only victims of possession, but also haunted sites and accursed items.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/sacred_attendant">Sacred Attendant</Link></p><p><strong>Modifies or Replaces:</strong> Armor Proficiency; Channel Energy; Domains</p><p>Sacred attendants bring out the varied beauty in everyone they help, and they typically worship deities of beauty, love, and sex.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/scroll_scholar">Scroll Scholar</Link></p><p><strong>Modifies or Replaces:</strong> 1st Level Domain Power, Channel Energy 5th level increase, 4th-level spell slot</p><p>Those who trade some of their potential to better understand ancient texts and scrolls can become learned scroll scholars.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/separatist">Separatist</Link></p><p><strong>Modifies or Replaces:</strong> Domains</p><p>A radical cleric, unsatisfied with the orthodoxy of her deity's teachings, forges her own path of defiant divine expression.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/stoic_caregiver">Stoic Caregiver</Link></p><p><strong>Modifies or Replaces:</strong> Channel Energy; Domains</p><p>Stoic caregivers are champions of life in defiance of untimely death as well as undeath.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/theologian">Theologian</Link></p><p><strong>Modifies or Replaces:</strong> Domains</p><p>A theologian is an expert on one particular area of her religion</p></div>
<div className="archetype"><p><Link to="/arc-cleric/triadic_priest">Triadic Priest</Link></p><p><strong>Modifies or Replaces:</strong> Domains</p><p>Power comes not just from communion with one's deity, but also from the formation of divine triumvirates. At the head of these groups are triadic priests.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/undead_lord">Undead Lord</Link></p><p><strong>Modifies or Replaces:</strong> Domains</p><p>An undead lord is a cleric focused on using necromancy to control undead.</p></div>
<div className="archetype"><p><Link to="/arc-cleric/varisian_pilgrim">Varisian Pilgrim</Link></p><p><strong>Modifies or Replaces:</strong> Altered Domain Abilities; Medium Armor/Shield Proficiency; 8th-level Domain Power</p><p>While most clerics are associated with a particular temple, adventuring clerics spend much of their time away from their favored place of worship, and there are those who worship primarily on the road and during the journey.</p></div>
<h3 id="class-cleric-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"cleric archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Armor Proficiency"},{"header":"Aura"},{"header":"Base Attack Bonus"},{"header":"Bonus Languages"},{"header":"Channel Energy"},{"header":"5th-level Channel Energy increase"},{"header":"11th-level Channel Energy increase"},{"header":"19th-level Channel Energy increase"},{"header":"Class Skills"},{"header":"Deity"},{"header":"Domains"},{"header":"1st-level Domain Power"},{"header":"8th-level Domain Power"},{"header":"Skill Ranks"},{"header":"Spellcasting"},{"header":"4th-level spell slot"},{"header":"Spontaneous Casting"},{"header":"Weapon/Armor Proficiency"}],"data":[["‹arc-cleric/Angelfire Apostle›","X","X",null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-cleric/Appeaser›","X",null,"X",null,null,"X",null,null,null,null,null,"X",null,null,null,"X",null,null,null],["‹arc-cleric/Asmodean Advocate›",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-cleric/Blossoming Light›","X","X",null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-cleric/Cardinal›",null,"X",null,"X",null,null,null,null,null,"X",null,"X",null,null,"X",null,null,"X",null],["‹arc-cleric/Channeler of the Unknown›",null,null,"X",null,null,"X",null,null,null,null,null,"X",null,null,null,"X",null,"X","X"],["‹arc-cleric/Cloistered Cleric›",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,"X"],["‹arc-cleric/Crashing Wave›",null,null,null,null,"X","X",null,null,null,null,"X",null,null,null,null,null,null,"X",null],["‹arc-cleric/Crusader›",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null],["‹arc-cleric/Demonic Apostle›",null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-cleric/Divine Paragon›",null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-cleric/Divine Scourge›",null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-cleric/Divine Strategist›",null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-cleric/Ecclesitheurge›",null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,"X"],["‹arc-cleric/Elder Mythos Cultist›","X",null,null,null,null,"X","X","X","X",null,null,"X",null,null,null,null,null,"X",null],["‹arc-cleric/Evangelist›",null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,"X",null],["‹arc-cleric/Fiendish Vessel›",null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-cleric/Forgemaster›",null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-cleric/Foundation of Faith›",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-cleric/Herald Caller›",null,"X",null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null],["‹arc-cleric/Hidden Priest›",null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null],["‹arc-cleric/Idealist›",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null],["‹arc-cleric/Iron Priest›",null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,"X",null,null,null],["‹arc-cleric/Lawspeaker›","X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-cleric/Mendevian Priest›",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-cleric/Merciful Healer›",null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-cleric/Roaming Exorcist›",null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,"X",null,null,null,"X"],["‹arc-cleric/Sacred Attendant›",null,"X",null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-cleric/Scroll Scholar›",null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,"X",null,null],["‹arc-cleric/Separatist›",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-cleric/Stoic Caregiver›",null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-cleric/Theologian›",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-cleric/Triadic Priest›",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-cleric/Undead Lord›",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-cleric/Varisian Pilgrim›",null,"X",null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-cleric-label">Footnotes</h3>
<ol>
<li id="class-cleric-Ex">
<p>Also see the <Link to="/arc-cleric/channeler_of_the_unknown">Channeler of the Unknown</Link> archetype for options. <InnerLink id="backlink-class-cleric-ref-Ex-1" data-hash-target to="class-cleric-ref-Ex-1" aria-label="Back to reference Ex-1">↩</InnerLink></p>
</li>
<li id="class-cleric-A">
<p><Link to="/source/advanced_race_guide">Advanced Race Guide pg. 85</Link> <InnerLink id="backlink-class-cleric-ref-A-1" data-hash-target to="class-cleric-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-cleric-B">
<p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 15</Link> <InnerLink id="backlink-class-cleric-ref-B-1" data-hash-target to="class-cleric-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-cleric-C">
<p>Advanced Race Guide pg. 98 <InnerLink id="backlink-class-cleric-ref-C-1" data-hash-target to="class-cleric-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-cleric-D">
<p>Advanced Race Guide pg. 103 <InnerLink id="backlink-class-cleric-ref-D-1" data-hash-target to="class-cleric-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-cleric-E">
<p>Advanced Race Guide pg. 186 <InnerLink id="backlink-class-cleric-ref-E-1" data-hash-target to="class-cleric-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-cleric-F">
<p>Plane-Hopper's Handbook pg. 17 <InnerLink id="backlink-class-cleric-ref-F-1" data-hash-target to="class-cleric-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-cleric-G">
<p>Advanced Race Guide pg. 13 <InnerLink id="backlink-class-cleric-ref-G-1" data-hash-target to="class-cleric-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-cleric-H">
<p><Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 11</Link> <InnerLink id="backlink-class-cleric-ref-H-1" data-hash-target to="class-cleric-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-cleric-I">
<p>Advanced Race Guide pg. 23 <InnerLink id="backlink-class-cleric-ref-I-1" data-hash-target to="class-cleric-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-cleric-J">
<p><Link to="/source/blood_of_shadows">Blood of Shadows pg. 7</Link> <InnerLink id="backlink-class-cleric-ref-J-1" data-hash-target to="class-cleric-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
<li id="class-cleric-K">
<p>Advanced Race Guide pg. 33 <InnerLink id="backlink-class-cleric-ref-K-1" data-hash-target to="class-cleric-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
<li id="class-cleric-L">
<p>Advanced Race Guide pg. 42 <InnerLink id="backlink-class-cleric-ref-L-1" data-hash-target to="class-cleric-ref-L-1" aria-label="Back to reference L-1">↩</InnerLink></p>
</li>
<li id="class-cleric-M">
<p><Link to="/source/horror_adventures">Horror Adventures pg. 40</Link> <InnerLink id="backlink-class-cleric-ref-M-1" data-hash-target to="class-cleric-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink></p>
</li>
<li id="class-cleric-N">
<p>Advanced Race Guide pg. 63 <InnerLink id="backlink-class-cleric-ref-N-1" data-hash-target to="class-cleric-ref-N-1" aria-label="Back to reference N-1">↩</InnerLink></p>
</li>
<li id="class-cleric-O">
<p>Advanced Player's Guide pg. 21 <InnerLink id="backlink-class-cleric-ref-O-1" data-hash-target to="class-cleric-ref-O-1" aria-label="Back to reference O-1">↩</InnerLink></p>
</li>
<li id="class-cleric-P">
<p>Advanced Race Guide pg. 53 <InnerLink id="backlink-class-cleric-ref-P-1" data-hash-target to="class-cleric-ref-P-1" aria-label="Back to reference P-1">↩</InnerLink></p>
</li>
<li id="class-cleric-Q">
<p>Advanced Race Guide pg. 121 <InnerLink id="backlink-class-cleric-ref-Q-1" data-hash-target to="class-cleric-ref-Q-1" aria-label="Back to reference Q-1">↩</InnerLink></p>
</li>
<li id="class-cleric-R">
<p>Advanced Race Guide pg. 73 <InnerLink id="backlink-class-cleric-ref-R-1" data-hash-target to="class-cleric-ref-R-1" aria-label="Back to reference R-1">↩</InnerLink></p>
</li>
<li id="class-cleric-S">
<p>Advanced Player's Guide pg. 23 <InnerLink id="backlink-class-cleric-ref-S-1" data-hash-target to="class-cleric-ref-S-1" aria-label="Back to reference S-1">↩</InnerLink></p>
</li>
<li id="class-cleric-T">
<p>Advanced Race Guide pg. 127 <InnerLink id="backlink-class-cleric-ref-T-1" data-hash-target to="class-cleric-ref-T-1" aria-label="Back to reference T-1">↩</InnerLink></p>
</li>
<li id="class-cleric-U">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-cleric-ref-U-1" data-hash-target to="class-cleric-ref-U-1" aria-label="Back to reference U-1">↩</InnerLink></p>
</li>
<li id="class-cleric-V">
<p>Advanced Race Guide pg. 133 <InnerLink id="backlink-class-cleric-ref-V-1" data-hash-target to="class-cleric-ref-V-1" aria-label="Back to reference V-1">↩</InnerLink></p>
</li>
<li id="class-cleric-W">
<p>Advanced Race Guide pg. 145 <InnerLink id="backlink-class-cleric-ref-W-1" data-hash-target to="class-cleric-ref-W-1" aria-label="Back to reference W-1">↩</InnerLink></p>
</li>
<li id="class-cleric-X">
<p>Advanced Race Guide pg. 157 <InnerLink id="backlink-class-cleric-ref-X-1" data-hash-target to="class-cleric-ref-X-1" aria-label="Back to reference X-1">↩</InnerLink></p>
</li>
<li id="class-cleric-Y">
<p>Blood of the Beast pg. 24 <InnerLink id="backlink-class-cleric-ref-Y-1" data-hash-target to="class-cleric-ref-Y-1" aria-label="Back to reference Y-1">↩</InnerLink></p>
</li>
<li id="class-cleric-Z">
<p>Advanced Race Guide pg. 170 <InnerLink id="backlink-class-cleric-ref-Z-1" data-hash-target to="class-cleric-ref-Z-1" aria-label="Back to reference Z-1">↩</InnerLink></p>
</li>
<li id="class-cleric-1">
<p>Advanced Race Guide pg. 176 <InnerLink id="backlink-class-cleric-ref-1-1" data-hash-target to="class-cleric-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="class-cleric-2">
<p>Blood of Shadows pg. 10 <InnerLink id="backlink-class-cleric-ref-2-1" data-hash-target to="class-cleric-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="class-cleric-3">
<p><Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 6</Link> <InnerLink id="backlink-class-cleric-ref-3-1" data-hash-target to="class-cleric-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _druid = {hasJL:true,title: "Druid", jsx: <><div className="jumpList" id="class-druid-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-druid-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-druid-spontaneous-casting">Spontaneous Casting</InnerLink></li><li><InnerLink toTop to="class-druid-chaotic-evil-good-and-lawful-spells">Aligned Spells</InnerLink></li><li><InnerLink toTop to="class-druid-bonus-languages">Bonus Languages</InnerLink></li><li><InnerLink toTop to="class-druid-nature-bond-ex">Nature Bond</InnerLink></li><li><InnerLink toTop to="class-druid-nature-sense-ex">Nature Sense</InnerLink></li><li><InnerLink toTop to="class-druid-wild-empathy-ex">Wild Empathy</InnerLink></li><li><InnerLink toTop to="class-druid-woodland-stride-ex">Woodland Stride</InnerLink></li><li><InnerLink toTop to="class-druid-trackless-step-ex">Trackless Step</InnerLink></li><li><InnerLink toTop to="class-druid-resist-natures-lure-ex">Resist Nature's Lure</InnerLink></li><li><InnerLink toTop to="class-druid-wild-shape-su">Wild Shape</InnerLink></li><li><InnerLink toTop to="class-druid-venom-immunity-ex">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-druid-ex-druids">Ex-Druids</InnerLink></li><li><InnerLink toTop to="class-druid-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-druid-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-druid-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-druid-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-druid-druid">Druid</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 48</Link></p>
<p>Within the purity of the elements and the order of the wilds lingers a power beyond the marvels of civilization. Furtive yet undeniable, these primal magics are guarded over by servants of philosophical balance known as druids. Allies to beasts and manipulators of nature, these often misunderstood protectors of the wild strive to shield their lands from all who would threaten them and prove the might of the wilds to those who lock themselves behind city walls. Rewarded for their devotion with incredible powers, druids gain unparalleled shape-shifting abilities, the companionship of mighty beasts, and the power to call upon nature's wrath. The mightiest temper powers akin to storms, earthquakes, and volcanoes with primeval wisdom long abandoned and forgotten by civilization.</p>
<p><strong>Role:</strong> While some druids might keep to the fringe of battle, allowing companions and summoned creatures to fight while they confound foes with the powers of nature, others transform into deadly beasts and savagely wade into combat. Druids worship personifications of elemental forces, natural powers, or nature itself. Typically this means devotion to a nature deity, though druids are just as likely to revere vague spirits, animalistic demigods, or even specific awe-inspiring natural wonders.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any neutral</span><table className="basic alignment"><tbody><tr><td>LG</td><td data-lit>LN</td><td>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td>CG</td><td data-lit>CN</td><td>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>2d6 &times; 10 gp (average 70 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>4 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/fly">Fly</Link>, <Link to="/skill/ride">Ride</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_geography">Knowledge (geography)</Link>, <Link to="/skill/knowledge_nature">Knowledge (nature)</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/heal">Heal</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/survival">Survival</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/handle_animal">Handle Animal</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-druid-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-druid--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Base Attack Bonus</th>
<th>Fort Save</th>
<th>Ref Save</th>
<th>Will Save</th>
<th>Special</th>
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
<td>+0</td>
<td>+2</td>
<td>+0</td>
<td>+2</td>
<td>Nature bond, nature sense, orisons, wild empathy</td>
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
</tr>
<tr>
<td>2nd</td>
<td>+1</td>
<td>+3</td>
<td>+0</td>
<td>+3</td>
<td>Woodland stride</td>
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
<td>3rd</td>
<td>+2</td>
<td>+3</td>
<td>+1</td>
<td>+3</td>
<td>Trackless step</td>
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
</tr>
<tr>
<td>4th</td>
<td>+3</td>
<td>+4</td>
<td>+1</td>
<td>+4</td>
<td>Resist nature's lure, wild shape (1/day)</td>
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
</tr>
<tr>
<td>5th</td>
<td>+3</td>
<td>+4</td>
<td>+1</td>
<td>+4</td>
<td>-</td>
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
</tr>
<tr>
<td>6th</td>
<td>+4</td>
<td>+5</td>
<td>+2</td>
<td>+5</td>
<td>Wild shape (2/day)</td>
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
</tr>
<tr>
<td>7th</td>
<td>+5</td>
<td>+5</td>
<td>+2</td>
<td>+5</td>
<td>-</td>
<td>4</td>
<td>4</td>
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
<td>8th</td>
<td>+6/+1</td>
<td>+6</td>
<td>+2</td>
<td>+6</td>
<td>Wild shape (3/day)</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
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
<td>Venom immunity</td>
<td>4</td>
<td>4</td>
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
<td>10th</td>
<td>+7/+2</td>
<td>+7</td>
<td>+3</td>
<td>+7</td>
<td>Wild shape (4/day)</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>+8/+3</td>
<td>+7</td>
<td>+3</td>
<td>+7</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>+9/+4</td>
<td>+8</td>
<td>+4</td>
<td>+8</td>
<td>Wild shape (5/day)</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>+9/+4</td>
<td>+8</td>
<td>+4</td>
<td>+8</td>
<td>A thousand faces</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>+10/+5</td>
<td>+9</td>
<td>+4</td>
<td>+9</td>
<td>Wild shape (6/day)</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>+11/+6/+1</td>
<td>+9</td>
<td>+5</td>
<td>+9</td>
<td>Timeless body</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>+12/+7/+2</td>
<td>+10</td>
<td>+5</td>
<td>+10</td>
<td>Wild shape (7/day)</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>+12/+7/+2</td>
<td>+10</td>
<td>+5</td>
<td>+10</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>18th</td>
<td>+13/+8/+3</td>
<td>+11</td>
<td>+6</td>
<td>+11</td>
<td>Wild shape (8/day)</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
</tr>
<tr>
<td>19th</td>
<td>+14/+9/+4</td>
<td>+11</td>
<td>+6</td>
<td>+11</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
</tr>
<tr>
<td>20th</td>
<td>+15/+10/+5</td>
<td>+12</td>
<td>+6</td>
<td>+12</td>
<td>Wild shape (at will)</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={6}>Weapons</th><td><Link to="/eq-weapon/club">club</Link></td><td><Link to="/eq-weapon/dagger">dagger</Link></td></tr><tr><td><Link to="/eq-weapon/dart">dart</Link></td><td><Link to="/eq-weapon/quarterstaff">quarterstaff</Link></td></tr><tr><td><Link to="/eq-weapon/scimitar">scimitar</Link></td><td><Link to="/eq-weapon/scythe">scythe</Link></td></tr><tr><td><Link to="/eq-weapon/sickle">sickle</Link></td><td><Link to="/eq-weapon/shortspear">shortspear</Link></td></tr><tr><td><Link to="/eq-weapon/sling">sling</Link></td><td><Link to="/eq-weapon/spear">spear</Link></td></tr><tr><td colSpan={2}>All natural attacks (claw, bite, and so forth) of any form the druid assumes with wild shape</td></tr><tr><th>Light Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Medium Armor?</th><td colSpan={2}>Yes</td></tr><tr><th>Heavy Armor?</th><td colSpan={2}>No</td></tr><tr><th>Shields?</th><td colSpan={2}>Yes, except tower shields</td></tr><tr><th>Armor</th><td colSpan={2}>Druids are prohibited from wearing metal armor or using metal shields, but is allowed to wear wooden armor that has been altered by the <Link to="/spell/ironwood">ironwood</Link> spell so that it functions as though it were steel.</td></tr><tr><td colSpan={3} className="sw se">A druid who wears prohibited armor or uses a prohibited shield is unable to cast druid spells or use any of her supernatural or spell-like class abilities while doing so and for 24 hours thereafter.</td></tr></tbody></table>
<div className="ability"><div className="abIcon"><Link to="/icons"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-druid-spells" data-hash-target><div className="box">Spells</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">To prepare or cast a spell, you must have a Wisdom score equal to at least 10 + the spell level. You can cast only a certain number of spells of each spell level per day, as shown on the table above. In addition, you receive <Link to="/rule/determine_bonuses">bonus spells per day</Link> if you have a high Wisdom score.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain the ability to cast divine spells which are drawn from the <Link to="/main/spells_druid">druid spell list</Link>. The DC for a saving throw against spells you cast is 10 + the spell level + your Wisdom modifier. Your alignment may restrict you from casting certain spells opposed to your moral or ethical beliefs; see <em>Chaotic, Evil, Good, and Lawful Spells.</em> You must choose and prepare your spells in advance.</div></div></div><div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You must spend 1 hour each day in a trance-like meditation on the mysteries of nature to regain your daily allotment of spells. You may prepare and cast any spell on your spell list, provided that you can cast spells of that level, but you must choose which spells to prepare.</div></div></div></div><div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-druid-orisons" data-hash-target><div className="box">Orisons</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You learn a number of orisons, or 0-level divine spells. These spells are prepared like any other spell, but they are not expended when cast and may be used again. Orisons prepared using other spell slots, such as those due to metamagic feats, are expended normally.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-druid-spontaneous-casting" data-hash-target><div className="box">Spontaneous Casting</div><div className="flavor">A druid can channel stored spell energy into summoning spells that she hasn't prepared ahead of time.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can "lose" a prepared spell in order to cast any <Link to="/spell/summon_natures_ally">summon nature's ally</Link> spell of the same level or lower.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-druid-chaotic-evil-good-and-lawful-spells" data-hash-target><div className="box">Chaotic, Evil, Good, and Lawful Spells</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You can't cast spells of an alignment opposed to your own or your deity's (if you have one). Spells associated with particular alignments are indicated by the chaos, evil, good, and law descriptors in their spell descriptions.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-druid-bonus-languages" data-hash-target><div className="box">Bonus Languages</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Your bonus language options include Sylvan, the language of woodland creatures. This choice is in addition to the bonus languages available to you because of your race. You also know Druidic, a secret language known only to druids, which you learn upon becoming a 1st-level druid.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Druidic is a free language; that is, you know it in addition to your regular allotment of languages and it doesn't take up a language slot. Druids are forbidden to teach this language to non-druids. Druidic has its own alphabet.</div></div></div></div>
<div className="ability p hasSubs"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-druid-nature-bond-ex" data-hash-target><div className="box">Nature Bond (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Choice</div></div><div className="abEnd"><div className="box">You form a bond with nature. This bond can take one of three forms: domain, companion, or herbalism.</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-druid-domain" data-hash-target><div className="box">Domain</div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain one of the following cleric domains: <Link to="/domain/air">Air</Link>, <Link to="/domain/animal">Animal</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/plant">Plant</Link>, <Link to="/domain/water">Water</Link>, or <Link to="/domain/weather">Weather</Link>. Alternately, you can choose a <Link to="/ability/druid_domains">druid-specific domain</Link>. When determining the powers and bonus spells granted by this domain, your effective cleric level is equal to your druid level. A druid that selects this option also receives additional domain spell slots, just like a <Link to="/class/cleric">cleric</Link>. You must prepare the spell from your domain in this slot and this spell cannot be used to cast a spell spontaneously.</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-druid-companion" data-hash-target><div className="box">Companion</div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You may begin play with any of the animals listed in <Link to="/ability/druid_companions">Animal Companions</Link>, who becomes a loyal companion that accompanies you on your adventures. Unlike normal animals of its kind, an <Link to="/sidekick/animal_companion">animal companion's</Link> Hit Dice, abilities, skills, and feats advance as you advance in level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">If you receive an animal companion from more than one source, your effective druid levels stack for the purposes of determining the statistics and abilities of the companion. Most animal companions increase in size when their druid reaches 4th or 7th level, depending on the companion. If you release your companion from service, you may gain a new one by performing a ceremony requiring 24 uninterrupted hours of prayer in the environment where the new companion typically lives. This ceremony can also replace an animal companion that has perished.</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-druid-herbalism" data-hash-target><div className="box">Herbalism</div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">You can use combinations of nuts, berries, dried herbs, and other natural ingredients along with appropriate containers to create herbal concoctions or magic consumables that function like potions. This acts like the <Link to="/feat/brew_potion">Brew Potion</Link> feat, but only for spells on the druid spell list. Herbal concoctions are typically thick and sludgy, and their creation time, caster level, spell duplication capabilities, and all other variables and properties are identical to those of potions created using Brew Potion. Herbal concoctions created with herbs that cause special effects when ingested retain those effects as well as the appropriate spell effect.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Wis modifier times/day</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can create a free herbal concoction. Additional concoctions cost the same as creating an equivalent potion using Brew Potion. You can sell your concoctions just as if they were potions (though NPCs unfamiliar with druidic herbalism may need some convincing before purchasing these wares).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">You can now make a concoction of any spell on any list that you can cast. Your additional concoctions take <Link to="/misc/half">half</Link> the time to make, at half the cost. You can also disguise the effects of a concoction. When a creature fails a Perception or Spellcraft check to identify one, the concoction appears to be a different herbal concoction of your choice. You must designate this false result when creating the concoction. If a creature exceeds the check's DC by 5 or more, it correctly identifies the concoction, though not that you tried to fool it.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">A creature must exceed the DC by 10 to correctly identify a disguised concoction. Also, you can create any herbal concoction in 1 minute. You can also create a special concoction of any spell higher than 3rd level that you can cast, but you must expend a spell slot of the same level. These special concoctions do not cost you anything to create and function like extracts created by an <Link to="/class/alchemist">alchemist</Link> with the <Link to="/discovery/infusion">infusion</Link> discovery.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-druid-nature-sense-ex" data-hash-target><div className="box">Nature Sense (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain a +2 bonus on Knowledge (nature) and Survival checks.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-druid-wild-empathy-ex" data-hash-target><div className="box">Wild Empathy (Ex)</div><div className="flavor">A druid can improve the attitude of an animal.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">This ability functions just like a <Link to="/skill/diplomacy">Diplomacy</Link> check made to improve the attitude of a person. You roll 1d20 and add your druid level and your Charisma modifier to determine the wild empathy check result. The typical domestic animal has a starting attitude of indifferent, while wild animals are usually unfriendly. You can also use this ability to influence a magical beast with an Intelligence score of 1 or 2, but you take a -4 penalty on the check.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">To use wild empathy, you and the animal must be within 30 feet of one another under normal conditions. Generally, influencing an animal in this way takes 1 minute but, as with influencing people, it might take more or less time.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-druid-woodland-stride-ex" data-hash-target><div className="box">Woodland Stride (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You may move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at your normal speed and without taking damage or suffering any other impairment. Thorns, briars, and overgrown areas that have been magically manipulated to impede motion, however, still affect you.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-druid-trackless-step-ex" data-hash-target><div className="box">Trackless Step (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You leave no trail in natural surroundings and cannot be tracked. You may choose to leave a trail if so desired.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-druid-resist-natures-lure-ex" data-hash-target><div className="box">Resist Nature's Lure (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain a +4 bonus on saving throws against the spell-like and supernatural abilities of fey. This bonus also applies to spells and effects that utilize or target plants, such as <Link to="/spell/blight">blight</Link>, <Link to="/spell/entangle">entangle</Link>, <Link to="/spell/spike_growth">spike growth</Link>, and <Link to="/spell/warp_wood">warp wood</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-druid-wild-shape-su" data-hash-target><div className="box">Wild Shape (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Once a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You gain the ability to turn yourself into any Small or Medium animal and back again. Your options for new forms include all creatures with the <Link to="/main/monsters_animals">animal</Link> type. This ability functions like the <Link to="/spell/beast_shape_i">beast shape I</Link> spell, except as noted here. The effect lasts for 1 hour per druid level, or until you change back. The form chosen must be that of an animal with which you are familiar.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Provokes <Link to="/rule/aoo">AoO?</Link></div></div><div className="abEnd"><div className="box">No</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">You can <em>wild shape</em> twice a day as <Link to="/spell/beast_shape_ii">beast shape II</Link>, and you can now change into a Large or Tiny animal or a Small <Link to="/main/monsters_outsiders_elemental">elemental</Link> (as <Link to="/spell/elemental_body_i">elemental body I</Link>).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">You can <em>wild shape</em> 3 times/day as <Link to="/spell/beast_shape_iii">beast shape III</Link>, and you can now change into a Huge or Diminutive animal, a Small or Medium elemental (as <Link to="/spell/elemental_body_ii">elemental body II</Link>), or a Small or Medium <Link to="/main/monsters_plants">plant</Link> creature (as <Link to="/spell/plant_shape_i">plant shape I</Link>).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">You can <em>wild shape</em> 4 times/day, and can choose to change into a Small, Medium, or Large elemental (as <Link to="/spell/elemental_body_iii">elemental body III</Link>) or a Small, Medium, or Large plant creature (as <Link to="/spell/plant_shape_ii">plant shape II</Link>).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">You can <em>wild shape</em> 5 times/day, and can choose to change into a Small, Medium, Large, or Huge elemental (as <Link to="/spell/elemental_body_iv">elemental body IV</Link>) or a Small, Medium, Large, or Huge plant creature (as <Link to="/spell/plant_shape_iii">plant shape III</Link>).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 14th Level</div></div><div className="abEnd"><div className="box">You can <em>wild shape</em> 6 times/day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">You can <em>wild shape</em> 7 times/day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">You can <em>wild shape</em> 8 times/day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">You can <em>wild shape</em> at will.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You lose your ability to speak while in animal form because you are limited to the sounds that a normal, untrained animal can make, but you can communicate normally with other animals of the same general grouping as your new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-druid-venom-immunity-ex" data-hash-target><div className="box">Venom Immunity (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 9th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You have immunity to all poisons.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-druid-a-thousand-faces-su" data-hash-target><div className="box">A Thousand Faces (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 13th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can change your appearance at will, as if using the <Link to="/spell/alter_self">alter self</Link> spell, but only while in your normal form.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-druid-timeless-body-ex" data-hash-target><div className="box">Timeless Body (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 15th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You no longer take ability score penalties for aging and cannot be magically <Link to="/rule/age">aged</Link>. Any penalties you may have already incurred, however, remain in place. Bonuses still accrue, and you still die of old age when your time is up.</div></div></div></div>
<h3 id="class-druid-ex-druids" data-hash-target>Ex-Druids</h3>
<p>A druid who ceases to revere nature, changes to a prohibited alignment, or teaches the Druidic language to a non-druid loses all spells and druid abilities (including her animal companion, but not including weapon, armor, and shield proficiencies). She cannot thereafter gain levels as a druid until she <Link to="/spell/atonement">atones</Link>.<sup><InnerLink showBacklink="backlink-class-druid-ref-Ex-1" id="class-druid-ref-Ex-1" data-hash-target to="class-druid-Ex">1</InnerLink></sup></p>
<h3 id="class-druid-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-druid--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Great Beast (Su)</td><td>At 20th level, the character's <Link to="/sidekick/animal_companion">animal companion</Link> is a paragon of its kind - a hero and legend in its own right. The animal companion's Strength, Dexterity, Constitution, and Wisdom scores each increase by 4. This capstone is available to any class with an animal companion.</td></tr>
<tr><td>Home Ground (Su)</td><td>At 20th level, the druid knows every tree, every deer, every blade of grass, and every scuttling beetle of her home. The druid selects a specific area relevant to the campaign, such as a prominent forest, mountain, or even a patch of sea. The druid is constantly under the effect of <Link to="/spell/commune_with_nature">commune with nature</Link> with regards to that area and can change the facts she gleans from the spell when she prepares her spells each day. In addition, while on her home ground, the druid gains a +4 bonus to her caster level.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-druid-favored-class-bonuses" data-hash-target>Favored Class Bonuses</h3>
<div className="hanging striped">
<p><strong>Aquatic elf:</strong> Add 1 hit point to the druid's animal companion. If the druid ever replaces her animal companion, the new animal companion gains these bonus hit points. For a druid whose nature bond gives her a cleric domain, select one cleric domain power at 1st level that is normally usable a number of times per day equal to 3 + the druid's Wisdom modifier. The druid adds 1/2 to the number of uses per day of that domain power.<sup><InnerLink showBacklink="backlink-class-druid-ref-A-1" id="class-druid-ref-A-1" data-hash-target to="class-druid-A">2</InnerLink></sup></p>
<p><strong>Catfolk:</strong> Add +1 hit points to the druid's animal companion. If the druid ever replaces her animal companion, the new animal companion gains these bonus hit points.<sup><InnerLink showBacklink="backlink-class-druid-ref-B-1" id="class-druid-ref-B-1" data-hash-target to="class-druid-B">3</InnerLink></sup></p>
<p><strong>Drow:</strong> Add a +1 bonus to wild empathy checks to influence animals and magical beasts that live underground.<sup><InnerLink showBacklink="backlink-class-druid-ref-C-1" id="class-druid-ref-C-1" data-hash-target to="class-druid-C">4</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Select one domain power granted at 1st level that is normally usable a number of times per day equal to 3 + the druid's Wisdom modifier. The druid adds +1/2 to the number of uses per day of that domain power.<sup><InnerLink showBacklink="backlink-class-druid-ref-D-1" id="class-druid-ref-D-1" data-hash-target to="class-druid-D">5</InnerLink></sup></p>
<p><strong>Elf:</strong> Add +1/3 to the druid's natural armor bonus when using wild shape.<sup><InnerLink showBacklink="backlink-class-druid-ref-E-1" id="class-druid-ref-E-1" data-hash-target to="class-druid-E">6</InnerLink></sup></p>
<p><strong>Fetchling:</strong> The druid's animal companion gains resistance 1 against either cold or electricity. Each time the druid selects this reward, he increases his animal companion's resistance to one of those energy types by 1 (maximum 10 for any one energy type). If the druid ever replaces his animal companion, the new animal companion gains these resistances.<sup><InnerLink showBacklink="backlink-class-druid-ref-F-1" id="class-druid-ref-F-1" data-hash-target to="class-druid-F">7</InnerLink></sup></p>
<p><strong>Ganzi:</strong> The druid gains a +1 bonus on Knowledge (nature) or Knowledge (planes) checks related to extraplanar flora and fauna.<sup><InnerLink showBacklink="backlink-class-druid-ref-G-1" id="class-druid-ref-G-1" data-hash-target to="class-druid-G">8</InnerLink></sup></p>
<p><strong>Gathlain:</strong> Add a +1/2 bonus to wild empathy checks.<sup><InnerLink showBacklink="backlink-class-druid-ref-H-1" id="class-druid-ref-H-1" data-hash-target to="class-druid-H">9</InnerLink></sup></p>
<p><strong>Ghoran:</strong> When casting spells that target plants or plant creatures, add 1/3 to the effective caster level, but only for the purpose of determining duration.<sup><InnerLink showBacklink="backlink-class-druid-ref-I-1" id="class-druid-ref-I-1" data-hash-target to="class-druid-I">10</InnerLink></sup></p>
<p><strong>Gnome:</strong> The druid gains energy resistance 1 against acid, cold, electricity, or fire. Each time the druid selects this reward, increase her resistance to one of these energy types by +1 (maximum 10 for any one type).<sup><InnerLink showBacklink="backlink-class-druid-ref-J-1" id="class-druid-ref-J-1" data-hash-target to="class-druid-J">11</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-druid-ref-K-1" id="class-druid-ref-K-1" data-hash-target to="class-druid-K">12</InnerLink></sup></p>
<p><strong>Gnome:</strong> The druid's animal companion gains 1/4 point of DR/cold iron (maximum DR 5/cold iron). If the druid replaces her companion, the new companion gains this DR.<sup><InnerLink showBacklink="backlink-class-druid-ref-L-1" id="class-druid-ref-L-1" data-hash-target to="class-druid-L">13</InnerLink></sup></p>
<p><strong>Goblin:</strong> Add +1 hit points to the druid's animal companion. If the druid ever replaces her animal companion, the new animal companion gains these bonus hit points.<sup><InnerLink showBacklink="backlink-class-druid-ref-M-1" id="class-druid-ref-M-1" data-hash-target to="class-druid-M">14</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-druid-ref-N-1" id="class-druid-ref-N-1" data-hash-target to="class-druid-N">15</InnerLink></sup></p>
<p><strong>Grippli:</strong> Add a +1/2 bonus on <Link to="/rule/concentration">concentration</Link> checks. This bonus doubles in a forest or swamp terrain.<sup><InnerLink showBacklink="backlink-class-druid-ref-O-1" id="class-druid-ref-O-1" data-hash-target to="class-druid-O">16</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Select one cleric domain power at 1st level that is normally usable a number of times per day equal to 3 + the druid's Wisdom modifier. The druid adds +1/2 to the number of uses per day of that domain power. For druids whose nature bond gives them an animal companion, add +1 skill rank to the animal companion. If the druid ever replaces her animal companion, the new companion gains these bonus skill ranks.<sup><InnerLink showBacklink="backlink-class-druid-ref-P-1" id="class-druid-ref-P-1" data-hash-target to="class-druid-P">17</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-druid-ref-Q-1" id="class-druid-ref-Q-1" data-hash-target to="class-druid-Q">18</InnerLink></sup></p>
<p><strong>Halfling:</strong> Add a +1/4 luck bonus on the saving throws of the druid's animal companion.<sup><InnerLink showBacklink="backlink-class-druid-ref-R-1" id="class-druid-ref-R-1" data-hash-target to="class-druid-R">19</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Add +1/3 to the druid's natural armor bonus when using wild shape.<sup><InnerLink showBacklink="backlink-class-druid-ref-S-1" id="class-druid-ref-S-1" data-hash-target to="class-druid-S">20</InnerLink></sup></p>
<p><strong>Human:</strong> Add a +1/2 bonus on Diplomacy and Intimidate checks to change a creature's attitude.<sup><InnerLink showBacklink="backlink-class-druid-ref-T-1" id="class-druid-ref-T-1" data-hash-target to="class-druid-T">21</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-druid-ref-U-1" id="class-druid-ref-U-1" data-hash-target to="class-druid-U">22</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-druid-ref-V-1" id="class-druid-ref-V-1" data-hash-target to="class-druid-V">23</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Add a +1/2 bonus on Diplomacy and Intimidate checks to change a creature's attitude.<sup><InnerLink showBacklink="backlink-class-druid-ref-W-1" id="class-druid-ref-W-1" data-hash-target to="class-druid-W">24</InnerLink></sup></p>
<p><strong>Kobold:</strong> Add +1/2 to the druid's wild empathy bonus.<sup><InnerLink showBacklink="backlink-class-druid-ref-X-1" id="class-druid-ref-X-1" data-hash-target to="class-druid-X">25</InnerLink></sup></p>
<p><strong>Locathah:</strong> Add 1 skill rank to the druid's animal companion. If the druid ever replaces her animal companion, the new animal companion gains these bonus skill ranks.<sup><InnerLink showBacklink="backlink-class-druid-ref-Y-1" id="class-druid-ref-Y-1" data-hash-target to="class-druid-Y">26</InnerLink></sup></p>
<p><strong>Merfolk:</strong> Add +1 hit point to the druid's animal companion. If the merfolk ever replaces her animal companion, the new animal companion gains these bonus hit points.<sup><InnerLink showBacklink="backlink-class-druid-ref-Z-1" id="class-druid-ref-Z-1" data-hash-target to="class-druid-Z">27</InnerLink></sup></p>
<p><strong>Orc:</strong> Add +1/2 to the damage dealt by the druid's animal companion's natural attacks.<sup><InnerLink showBacklink="backlink-class-druid-ref-1-1" id="class-druid-ref-1-1" data-hash-target to="class-druid-1">28</InnerLink></sup></p>
<p><strong>Oread:</strong> Add a +1/2 bonus on Knowledge (nature) checks relating to plants and burrowing animals.<sup><InnerLink showBacklink="backlink-class-druid-ref-2-1" id="class-druid-ref-2-1" data-hash-target to="class-druid-2">29</InnerLink></sup></p>
<p><strong>Ratfolk:</strong> Add a +1 bonus on wild empathy checks made to influence animals and magical beasts that live underground.<sup><InnerLink showBacklink="backlink-class-druid-ref-3-1" id="class-druid-ref-3-1" data-hash-target to="class-druid-3">30</InnerLink></sup></p>
<p><strong>Strix:</strong> Add a +1/2 bonus to Knowledge (nature) checks related to weather and flying animals.<sup><InnerLink showBacklink="backlink-class-druid-ref-4-1" id="class-druid-ref-4-1" data-hash-target to="class-druid-4">31</InnerLink></sup></p>
<p><strong>Sylph:</strong> Add a +1/2 bonus on Knowledge (nature) checks relating to weather and flying animals.<sup><InnerLink showBacklink="backlink-class-druid-ref-5-1" id="class-druid-ref-5-1" data-hash-target to="class-druid-5">32</InnerLink></sup></p>
<p><strong>Tiefling:</strong> Add a +1 bonus on wild empathy checks made to improve the attitude of fiendish animals.<sup><InnerLink showBacklink="backlink-class-druid-ref-6-1" id="class-druid-ref-6-1" data-hash-target to="class-druid-6">33</InnerLink></sup></p>
<p><strong>Undine:</strong> Add a +1 bonus on wild empathy checks to influence animals and magical beasts with the aquatic subtype.<sup><InnerLink showBacklink="backlink-class-druid-ref-7-1" id="class-druid-ref-7-1" data-hash-target to="class-druid-7">34</InnerLink></sup></p>
<p><strong>Vanara:</strong> Add a +1/2 bonus on wild empathy checks and a +1/2 bonus on Handle Animal skill checks.<sup><InnerLink showBacklink="backlink-class-druid-ref-8-1" id="class-druid-ref-8-1" data-hash-target to="class-druid-8">35</InnerLink></sup></p>
<p><strong>Vine leshy:</strong> Add a +1/2 bonus to the druid's wild empathy or plant empathy checks.<sup><InnerLink showBacklink="backlink-class-druid-ref-9-1" id="class-druid-ref-9-1" data-hash-target to="class-druid-9">36</InnerLink></sup></p>
<p><strong>Wayang:</strong> Select one domain power granted at 1st level that is normally usable a number of times per day equal to 3 + the druid's Wisdom modifier. The druid adds +1/2 to the number of uses per day of that domain power. In addition, a druid that selects this bonus at 1st level can choose the Darkness domain with her natural bond ability.<sup><InnerLink showBacklink="backlink-class-druid-ref-0-1" id="class-druid-ref-0-1" data-hash-target to="class-druid-0">37</InnerLink></sup></p>
</div>
<h3 id="class-druid-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-druid/aerie_protector">Aerie Protector</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; Nature Bond; Wild Empathy; Woodland Stride; Resist Nature's Lure; Wild Shape; Venom Immunity</p><p>The aerie protector guards nature's nests and lairs in the highest mountains, and she is only ever truly at ease when under vast expanses of open sky.</p></div>
<div className="archetype"><p><Link to="/arc-druid/ancient_guardian">Ancient Guardian</Link></p><p><strong>Modifies or Replaces:</strong> Weapon Proficiencies; Nature Bond; Wild Empathy; Trackless Step; Woodland Stride; Spontaneous Casting; Resist Nature's Lure; A Thousand Faces</p><p>Ancient guardians revere nature and draw power from its divine energies, but also protect the customs, histories, and lore of their tribe and race.</p></div>
<div className="archetype"><p><Link to="/arc-druid/ape_shaman">Ape Shaman</Link></p><p><strong>Modifies or Replaces:</strong> A Thousand Faces; Venom Immunity</p><p>A shaman with this totem calls upon the mighty ape, a peaceful but powerful simian whose strength is beyond compare.</p></div>
<div className="archetype"><p><Link to="/arc-druid/aquatic_druid">Aquatic Druid</Link></p><p><strong>Modifies or Replaces:</strong> Woodland Stride; Trackless Step; Resist Nature's Lure; Venom Immunity; A Thousand Faces</p><p>Shepherds of the lakes and seas, aquatic druids guard ecosystems ranging from shallows streams to deep ocean trenches, ministering to their residents and communing with the tides.</p></div>
<div className="archetype"><p><Link to="/arc-druid/arctic_druid">Arctic Druid</Link></p><p><strong>Modifies or Replaces:</strong> Woodland Stride; Trackless Step; Resist Nature's Lure; Venom Immunity; A Thousand Faces</p><p>An arctic druid watches over the stark landscape of the far frozen reaches of the world.</p></div>
<div className="archetype"><p><Link to="/arc-druid/ashvawg_tamer">Ashvawg Tamer</Link></p><p><strong>Modifies or Replaces:</strong> Resist Nature's Lure, one less Wild Shape/day, Venom Immunity</p><p>Ashvawg Tamers are druids who have chosen to bond with a strange and monstrous creature.</p></div>
<div className="archetype"><p><Link to="/arc-druid/bat_shaman">Bat Shaman</Link></p><p><strong>Modifies or Replaces:</strong> A Thousand Faces; Venom Immunity</p><p>The bat shaman's totem is the agile bat, flitting and turning with incredible speed through even the most convoluted mazes.</p></div>
<div className="archetype"><p><Link to="/arc-druid/bear_shaman">Bear Shaman</Link></p><p><strong>Modifies or Replaces:</strong> A Thousand Faces; Venom Immunity</p><p>A shaman with this focus calls upon the mighty bear, titan of the woodlands and mountains, a paragon of strength and ferocity, and yet also a quiet protector rich in wisdom.</p></div>
<div className="archetype"><p><Link to="/arc-druid/blight_druid">Blight Druid</Link></p><p><strong>Modifies or Replaces:</strong> Wild Empathy; Trackless Step; Resist Nature's Lure; Venom Immunity; A Thousand Faces</p><p>The devoted servants of nature corrupted, ruined, and destroyed, blight druids are the caretakers of lands ravaged by natural disaster.</p></div>
<div className="archetype"><p><Link to="/arc-druid/boar_shaman">Boar Shaman</Link></p><p><strong>Modifies or Replaces:</strong> A Thousand Faces; Venom Immunity</p><p>A boar shaman chooses the stolid and ferocious boar as her totem.</p></div>
<div className="archetype"><p><Link to="/arc-druid/cave_druid">Cave Druid</Link></p><p><strong>Modifies or Replaces:</strong> Nature Sense; Woodland Stride; Trackless Step; Resist Nature's Lure</p><p>A few druids seek to preserve the hidden underdark and purge it of the fell horrors that creep up from below.</p></div>
<div className="archetype"><p><Link to="/arc-druid/death_druid">Death Druid</Link></p><p><strong>Modifies or Replaces:</strong> Nature Bond; Wild Shape; Resist Nature's Lure; Venom Immunity</p><p>Some druids believe that birth and death are the most important parts of the natural cycle.</p></div>
<div className="archetype"><p><Link to="/arc-druid/defender_of_the_true_world">Defender of the True World</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Wild Empathy; Trackless Step; Resist Nature's Lure; Venom Immunity; A Thousand Faces</p><p>Some druids specialize in protecting Golarion from the threat of First World inhabitants.</p></div>
<div className="archetype"><p><Link to="/arc-druid/desert_druid">Desert Druid</Link></p><p><strong>Modifies or Replaces:</strong> Woodland Stride; Trackless Step; Resist Nature's Lure; Venom Immunity; A Thousand Faces</p><p>Desert druids come to the desert to pay homage, protect and maintain the few habitable locales, and witness nature's majesty in all its burning, merciless glory.</p></div>
<div className="archetype"><p><Link to="/arc-druid/devolutionist">Devolutionist</Link></p><p><strong>Modifies or Replaces:</strong> Nature Bond; Resist Nature's Lure; Venom Immunity</p><p>Devolutionists believe that the world would be better off without any sentient life at all.</p></div>
<div className="archetype"><p><Link to="/arc-druid/dinosaur_druid">Dinosaur Druid</Link></p><p><strong>Modifies or Replaces:</strong> Spontaneous Casting; Nature's Bond; Wild Shape; Resist Nature's Lure</p><p>A dinosaur druid speaks for the spirit of prehistoric nature, even taking the form of great beasts of legend.</p></div>
<div className="archetype"><p><Link to="/arc-druid/draconic_druid">Draconic Druid</Link></p><p><strong>Modifies or Replaces:</strong> Nature Bond; Wild Empathy; Woodland Stride; Venom Immunity; A Thousand Faces; Timeless Body; Nature Sense; Resist Nature's Lure</p><p>Some druids believe that dragons are the ultimate expression of nature and eventually transform into draconic forms.</p></div>
<div className="archetype"><p><Link to="/arc-druid/dragon_shaman">Dragon Shaman</Link></p><p><strong>Modifies or Replaces:</strong> A Thousand Faces; 8th-level Wild Shape; Venom Immunity</p><p>Your totem is the legendary dragon, fearsome and deadly yet cunning and wise, a creature born of pure magic and raw elemental fury, bound within a shell of fangs, claws, and scales that few dare to challenge.</p></div>
<div className="archetype"><p><Link to="/arc-druid/drovier">Drovier</Link></p><p><strong>Modifies or Replaces:</strong> Nature Bond; Wild Shape</p><p>Droviers view their allies and adventuring companions as a herd or pack to be protected and directed.</p></div>
<div className="archetype"><p><Link to="/arc-druid/eagle_shaman">Eagle Shaman</Link></p><p><strong>Modifies or Replaces:</strong> A Thousand Faces; Venom Immunity</p><p>A shaman with this totem calls upon the noble eagle, stern and proud, soaring high above the world with keen and pitiless eyes that miss nothing.</p></div>
<div className="archetype"><p><Link to="/arc-druid/elemental_ally">Elemental Ally</Link></p><p><strong>Modifies or Replaces:</strong> Nature Bond; Wild Shape; Wild Empathy; Resist Nature's Lure</p><p>An elemental ally is a druid who has crafted powerful bonds of trust and friendship with one ally from each of the four primary elemental planes.</p></div>
<div className="archetype"><p><Link to="/arc-druid/feral_child">Feral Child</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; Class Skills; Nature Bond; Trackless Step; A Thousand Faces; Wild Shape; Resist Nature's Lure; Venom Immunity; Timeless Body</p><p>(Human Only) Some youths, abandoned in the wilderness and then raised by animals, are so connected with their adoptive home and family that they become feral.</p></div>
<div className="archetype"><p><Link to="/arc-druid/feral_shifter">Feral Shifter</Link></p><p><strong>Modifies or Replaces:</strong> Nature Bond; Venom Immunity; A Thousand Faces; Timeless Body</p><p>A feral shifter internalizes her communion with and mastery over animals. Instead of forming a bond with an animal companion or an aspect of nature, she alters her own essence or being as homage to the noble creatures of the wild.</p></div>
<div className="archetype"><p><Link to="/arc-druid/feyspeaker">Feyspeaker</Link></p><p><strong>Modifies or Replaces:</strong> Spontaneous Casting; Wild Shape; Nature Sense; Base Attack Bonus; Class Skills; Skill Ranks; Armor Proficiency</p><p>Some druids hear the whispers of the natural world like fey creatures do, and learn to mimic those tantalizing murmurs in order to influence the minds of both wild beasts and civilized people.</p></div>
<div className="archetype"><p><Link to="/arc-druid/fungal_pilgrim">Fungal Pilgrim</Link></p><p><strong>Modifies or Replaces:</strong> Nature Bond; Wild Shape; Timeless Body</p><p>Fungal pilgrims are druids seeking transformation into a more plant-like existence.</p></div>
<div className="archetype"><p><Link to="/arc-druid/goliath_druid">Goliath Druid</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Nature Sense; Nature Bond; Wild Empathy; Resist Nature's Lure; Wild Shape; Venom Immunity; A Thousand Faces</p><p>Goliath druids hone their spiritual and magical connections to nature's largest creatures, especially dinosaurs, giants, and megafauna, revering these massive creatures as living relics of a primeval time when all creatures were more in harmony with nature.</p></div>
<div className="archetype"><p><Link to="/arc-druid/green_faith_initiate">Green Faith Initiate</Link></p><p><strong>Modifies or Replaces:</strong> Trackless Step; 6th, 10th-level Wild Shape; Venom Immunity; A Thousand Faces</p><p>Druids who are initiated into the magic of nature as strict students of the Green Faith's traditions sometimes demonstrate abilities unique to their organization.</p></div>
<div className="archetype"><p><Link to="/arc-druid/green_scourge">Green Scourge</Link></p><p><strong>Modifies or Replaces:</strong> Spontaneous Casting; Nature Sense; Trackless Step; Resist Nature's Lure</p><p>Green scourges are militant druids sworn to restore natural order.</p></div>
<div className="archetype"><p><Link to="/arc-druid/halcyon_druid">Halcyon Druid</Link></p><p><strong>Modifies or Replaces:</strong> Nature Bond; Nature Sense; Class Skills; Wild Empathy; Spontaneous Casting; Wild Shape; Resist Nature's Lure; A Thousand Faces</p><p>Though they revere the natural world, halcyon druids are less focused on emulating its inhabitants. Instead, like Old-Mage Jatembe, they treat with beings from the Outer Sphere.</p></div>
<div className="archetype"><p><Link to="/arc-druid/jungle_druid">Jungle Druid</Link></p><p><strong>Modifies or Replaces:</strong> Woodland Stride; Trackless Step; Resist Nature's Lure; A Thousand Faces</p><p>The jungle druid waches over the fecund jungles of the equatorial regions, rich in life and ancient tradition.</p></div>
<div className="archetype"><p><Link to="/arc-druid/kraken_caller">Kraken Caller</Link></p><p><strong>Modifies or Replaces:</strong> Bonus Languages; Woodland Stride; Trackless Step; Resist Nature's Lure; Wild Shape; A Thousand Faces</p><p>Some druids draw upon power irreverently stolen from one of the most dangerous creatures of the depths: the kraken.</p></div>
<div className="archetype"><p><Link to="/arc-druid/leshy_warden">Leshy Warden</Link></p><p><strong>Modifies or Replaces:</strong> Nature Bond; Wild Empathy; Spontaneous Casting; Resist Nature's Lure; Wild Shape; A Thousand Faces</p><p>The natural world is full of bodiless nature spirits connected to the forces of glades, springs, and individual plants. Some druids hear their call keenly and are able to effortlessly incarnate them as the miniature creatures known as leshys.</p></div>
<div className="archetype"><p><Link to="/arc-druid/life_channeler">Life Channeler</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Nature Bond; Wild Shape; Venom Immunity</p><p>By sacrificing the life of a sentient creature, life channelers can generate energy that guarantees fertility and prosperity for lower creatures like plants and animals.</p></div>
<div className="archetype"><p><Link to="/arc-druid/lion_shaman">Lion Shaman</Link></p><p><strong>Modifies or Replaces:</strong> A Thousand Faces; Venom Immunity</p><p>A shaman with this totem calls upon the proud lion, imposing and majestic, the mighty leader of deadly hunters.</p></div>
<div className="archetype"><p><Link to="/arc-druid/mantella">Mantella</Link></p><p><strong>Modifies or Replaces:</strong> Wild Shape; Venom Immunity; Spontaneous Casting</p><p>(Grippli) A mantella focuses on exploring her poisonous heritage, whether or not it has manifested in her own personal biology.</p></div>
<div className="archetype"><p><Link to="/arc-druid/menhir_savant">Menhir Savant</Link></p><p><strong>Modifies or Replaces:</strong> Nature Sense; Wild Empathy; Woodland Stride; Trackless Step; A Thousand Faces</p><p>Some druids study the paths of nature's power through the nodes and ley lines that connect standing stones and megalithic circles, learning to tap into their energies.</p></div>
<div className="archetype"><p><Link to="/arc-druid/mooncaller">Mooncaller</Link></p><p><strong>Modifies or Replaces:</strong> Woodland Stride; Resist Nature's Lure; Venom Immunity; A Thousand Faces</p><p>A mooncaller is bound to the subtle influences of the ever-changing moon and its endless cycles from light to dark and back again.</p></div>
<div className="archetype"><p><Link to="/arc-druid/mountain_druid">Mountain Druid</Link></p><p><strong>Modifies or Replaces:</strong> Woodland Stride; Trackless Step; Resist Nature's Lure; Venom Immunity; A Thousand Faces</p><p>As more and more of the soft, easy lands become cultivated and civilized, many druids look for refuge and solitude among the eternal peaks of the highest mountains.</p></div>
<div className="archetype"><p><Link to="/arc-druid/naga_aspirant">Naga Aspirant</Link></p><p><strong>Modifies or Replaces:</strong> Spontaneous Casting; Resist Nature's Lure; Wild Shape; Venom Immunity; A Thousand Faces; Timeless Body</p><p>(Nagaji Only) The naga aspirant follows the ancient beliefs and engages in the rituals of a druidic sect dedicated to the transcendence of her nagaji form through absolute devotion to nagas and naga gods.</p></div>
<div className="archetype"><p><Link to="/arc-druid/nature_fang">Nature Fang</Link></p><p><strong>Modifies or Replaces:</strong> Nature Sense; Wild Empathy; Woodland Stride; Wild Shape; Resist Nature's Lure; Venom Immunity</p><p>A nature fang is a druid who stalks and slays those who despoil nature, kill scarce animals, or introduce diseases to unprotected habitats.</p></div>
<div className="archetype"><p><Link to="/arc-druid/nature_priest">Nature Priest</Link></p><p><strong>Modifies or Replaces:</strong> Deity; Class Skills; Weapon Proficiencies; Nature Sense; Nature Bond; Resist Nature's Lure; Venom Immunity</p><p>Nature priests serve two masters: their deities and nature itself, and can call upon the power of both to fuel their divine abilities.</p></div>
<div className="archetype"><p><Link to="/arc-druid/nithveil_adept">Nithveil Adept</Link></p><p><strong>Modifies or Replaces:</strong> Nature Sense; Nature Bond; Spontaneous Casting; Resist Nature's Lure</p><p>Nithveil adepts learn the secret magic of the First World fey in the moving, reality-phasing city of Nithveil</p></div>
<div className="archetype"><p><Link to="/arc-druid/pack_lord">Pack Lord</Link></p><p><strong>Modifies or Replaces:</strong> Nature Bond; 6th-level Wild Shape</p><p>Some druids bond with many animal companions rather than just one, achieving a level of communion rare even in druidic circles and leading their pack brothers and pack sisters with total authority.</p></div>
<div className="archetype"><p><Link to="/arc-druid/plains_druid">Plains Druid</Link></p><p><strong>Modifies or Replaces:</strong> Woodland Stride; Trackless Step; Resist Nature's Lure; Venom Immunity; A Thousand Faces</p><p>Out upon the wide and rolling prairies and savannahs, plains druids stand guard over the grasslands.</p></div>
<div className="archetype"><p><Link to="/arc-druid/planar_extremist">Planar Extremist</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Spells; Nature's Bond; Spontaneous Casting; Resist Nature's Lure; Wild Shape</p><p>(Ex-druid archetype) Planar extremists are those druids that have lost their neutral stance and find themselves gravitating toward one of the four most extreme alignments</p></div>
<div className="archetype"><p><Link to="/arc-druid/progenitor">Progenitor</Link></p><p><strong>Modifies or Replaces:</strong> Spontaneous Casting; Nature Bond; Wild Shape</p><p>Progenitors are druids who tap into the vibrant power of the First World to propagate natural and supernatural wonders.</p></div>
<div className="archetype"><p><Link to="/arc-druid/reincarnated_druid">Reincarnated Druid</Link></p><p><strong>Modifies or Replaces:</strong> Woodland Stride; Resist Nature's Lure; Venom Immunity; Timeless Body</p><p>Spun off into the endless circle of life, an incarnate druid is an embodiment of nature's eternal renewal.</p></div>
<div className="archetype"><p><Link to="/arc-druid/restorer">Restorer</Link></p><p><strong>Modifies or Replaces:</strong> Nature Sense; Spontaneous Casting; Resist Nature's Lure; A Thousand Faces</p><p>Restorers carefully tend to the health of both the environment and creatures in it.</p></div>
<div className="archetype"><p><Link to="/arc-druid/river_druid">River Druid</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Nature Sense; Woodland Stride; Trackless Step; Resist Nature's Lure; Wild Shape; Timeless Body</p><p>These druids are the guardians of rivers and the creatures that depend on them.</p></div>
<div className="archetype"><p><Link to="/arc-druid/road_keeper">Road Keeper</Link></p><p><strong>Modifies or Replaces:</strong> Spontaneous Casting; Nature Bond; Wild Empathy; Woodland Stride; Resist Nature's Lure; Wild Shape</p><p>Guardians of the lonely paths between cities, road keepers protect the wild from travelers, and travelers from the wild.</p></div>
<div className="archetype"><p><Link to="/arc-druid/rot_warden">Rot Warden</Link></p><p><strong>Modifies or Replaces:</strong> Spontaneous Casting; Nature Bond; Wild Empathy; Trackless Step; Venom Immunity; Resist Nature's Lure; Wild Shape</p><p>Harbingers of decay, rot wardens live in damp lands where insects and rot break down the dead to feed the living.</p></div>
<div className="archetype"><p><Link to="/arc-druid/saurian_shaman">Saurian Shaman</Link></p><p><strong>Modifies or Replaces:</strong> Venom Immunity</p><p>A shaman with this focus calls upon the primeval dinosaur, the archaic terror that lingers as a hungering, atavistic stranger at the fringes of the ecosystem, a destroyer and despoiler whose coming other animals dread.</p></div>
<div className="archetype"><p><Link to="/arc-druid/season_keeper">Season Keeper</Link></p><p><strong>Modifies or Replaces:</strong> Nature Bond; Trackless Step; Venom Immunity; Timeless Body; Wild Shape</p><p>(Triaxian Only) Imbued with the primeval potency of their planet's seasons, those druids known as season keepers guide Triaxian communities through the stark transition from summer to winter (and vice versa).</p></div>
<div className="archetype"><p><Link to="/arc-druid/season_sage">Season Sage</Link></p><p><strong>Modifies or Replaces:</strong> Wild Shape</p><p>(Gathlain) Season sages wander as the seasons change, turning the leaves and transforming nature as they pass and taking pleasure in the transition between seasons.</p></div>
<div className="archetype"><p><Link to="/arc-druid/serpent_shaman">Serpent Shaman</Link></p><p><strong>Modifies or Replaces:</strong> A Thousand Faces; Venom Immunity</p><p>A shaman with this totem calls upon the cunning serpent, the stealthy deceiver who draws the weak minded in and strikes while they are unaware.</p></div>
<div className="archetype"><p><Link to="/arc-druid/shark_shaman">Shark Shaman</Link></p><p><strong>Modifies or Replaces:</strong> A Thousand Faces; Venom Immunity</p><p>Some druids emulate the deadly shark, a remorseless hunter that marine dwellers dread.</p></div>
<div className="archetype"><p><Link to="/arc-druid/skinshaper">Skinshaper</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Wild Shape; A Thousand Faces</p><p>Using the same primal energy with which other druids assume animal forms, skinshapers can imitate some of the most dangerous beasts of all: humans and other humanoids.</p></div>
<div className="archetype"><p><Link to="/arc-druid/sky_druid">Sky Druid</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; Nature Bond; Woodland Stride; Resist Nature's Lure; Trackless Step; Wild Shape; Venom Immunity; A Thousand Faces</p><p>(Sylph Only) Some druids develop ties not to a particular landscape, but instead to the endless blue expanse of the skies.</p></div>
<div className="archetype"><p><Link to="/arc-druid/storm_druid">Storm Druid</Link></p><p><strong>Modifies or Replaces:</strong> Spontaneous Casting; Woodland Stride; Trackless Step; Resist Nature's Lure; Venom Immunity; A Thousand Faces</p><p>While most druids focus their attention upon the rich earth and the bounty of nature that springs forth from it, the storm druid's eyes have ever been cast to the skies and the endless expanse of blue, channeling the most raw and untamed aspects of nature.</p></div>
<div className="archetype"><p><Link to="/arc-druid/sunrider">Sunrider</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Weapon and Armor Proficiencies; Nature Bond; Woodland Stride; Trackless Step; Resist Nature's Lure; Wild Shape</p><p>Sunriders help their allies, be they fellow tribe members or fellow adventurers, to survive in harsh desert terrain, while simultaneously making it even harsher for their foes.</p></div>
<div className="archetype"><p><Link to="/arc-druid/supernaturalist">Supernaturalist</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; Nature Bond; Wild Empathy; Nature Sense; Trackless Step; Resist Nature's Lure; Wild Shape</p><p>Supernaturalists wholly embrace paranormal phenomena as extensions of nature.</p></div>
<div className="archetype"><p><Link to="/arc-druid/survivor">Survivor</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Weapon/Armor Proficiencies; Spellcasting; Nature Bond; Resist Nature's Lure; Wild Shape; Venom Immunity</p><p>The survivor embodies the neutral aspect of the natural world and eschews druidic magic in favor of more pragmatic and worldly survival methods.</p></div>
<div className="archetype"><p><Link to="/arc-druid/swamp_druid">Swamp Druid</Link></p><p><strong>Modifies or Replaces:</strong> Woodland Stride; Trackless Step; Resist Nature's Lure; A Thousand Faces</p><p>Some druids eschew pleasant glades and groves and instead seek out dank marshes, misty bogs and heaths, and trackless swamps as the place they call home and watch over with care, finding beauty and life in abundance in places few others would willingly enter.</p></div>
<div className="archetype"><p><Link to="/arc-druid/swarm_monger">Swarm Monger</Link></p><p><strong>Modifies or Replaces:</strong> Nature Bond; Woodland Stride; Nature Sense; Resist Nature's Lure; 12th-level Wild Shape options</p><p>(Ratfolk archetype) Whereas other druids commune with nature or even the spirit of a city, swarm mongers find beauty and strength in decay, and they draw their power from fungus, disease, and their own singular will to survive.</p></div>
<div className="archetype"><p><Link to="/arc-druid/tempest_druid">Tempest Druid</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Weapon and Armor Proficiencies; Nature Bond; Nature Sense; Trackless Step; Resist Nature's Lure; Venom Immunity</p><p>Some druids have come to worship the Eye of Abendego as an aspect of pure elemental fury, channeling its mysteries into their own magic</p></div>
<div className="archetype"><p><Link to="/arc-druid/tempest_tamer">Tempest Tamer</Link></p><p><strong>Modifies or Replaces:</strong> Bonus Languages; Resist Nature's Lure; Wild Shape</p><p>Druids draw upon the fiercest powers of nature, and tsunamis, typhoons, and whirlpools are among the most powerful forces in the ocean.</p></div>
<div className="archetype"><p><Link to="/arc-druid/toxicologist">Toxicologist</Link></p><p><strong>Modifies or Replaces:</strong> Spontaneous Casting; Wild Empathy; Woodland Stride; Trackless Step; Resist Nature's Lure; Wild Shape</p><p>Toxicologists specialize in the stealthy application of insidious poisons to their targets, believing word of their foes' horrifying deaths will deter others from attempting similar desecrations of the natural world.</p></div>
<div className="archetype"><p><Link to="/arc-druid/treesinger">Treesinger</Link></p><p><strong>Modifies or Replaces:</strong> Nature Bond; Wild Empathy; Wild Shape</p><p>(Elf and Vine Leshy Only) Some elves turn to the timeless growth of nature for solace, finding allies among the great trees themselves, and even leading the forest's plants into combat.</p></div>
<div className="archetype"><p><Link to="/arc-druid/troll_fury">Troll Fury</Link></p><p><strong>Modifies or Replaces:</strong> Wild Empathy; Resist Nature's Lure; Venom Immunity</p><p>(Troll Only) Troll furies combine a druid's love of natural balance with a single-minded devotion to the welfare of the troll tribe.</p></div>
<div className="archetype"><p><Link to="/arc-druid/undine_adept">Undine Adept</Link></p><p><strong>Modifies or Replaces:</strong> Domains; Woodland Stride; Trackless Step; Resist Nature's Lure; Wild Shape; Venom Immunity</p><p>(Undine Only) An undine adept dedicates herself to preserving the knowledge of the first undines and ensuring her people's ancient connections to the natural world remain undisturbed.</p></div>
<div className="archetype"><p><Link to="/arc-druid/urban_druid">Urban Druid</Link></p><p><strong>Modifies or Replaces:</strong> Spontaneous Casting; Woodland Stride; Trackless Step; Resist Nature's Lure; Venom Immunity</p><p>While many druids keep to the wilderness, some make their way within settlements, communing with the animals and vermin who live there and speaking for the nature that runs rampant in civilization's very cradle.</p></div>
<div className="archetype"><p><Link to="/arc-druid/urushiol">Urushiol</Link></p><p><strong>Modifies or Replaces:</strong> Nature Bond; Resist Nature's Lure</p><p>When an urushiol druid forms a bond with nature, it takes a vastly different form than for most druids. His body becomes increasingly toxic, allowing him to secrete a deadly poison through his pores.</p></div>
<div className="archetype"><p><Link to="/arc-druid/wild_whisperer">Wild Whisperer</Link></p><p><strong>Modifies or Replaces:</strong> Woodland Stride; Trackless Step; Resist Nature's Lure; Wild Shape</p><p>A wild whisperer is an expert at studying, predicting, and explaining animal behavior.</p></div>
<div className="archetype"><p><Link to="/arc-druid/wolf_shaman">Wolf Shaman</Link></p><p><strong>Modifies or Replaces:</strong> A Thousand Faces; Venom Immunity</p><p>A shaman with this totem calls upon the clever wolf, capable of roaming alone yet wise enough to run with a pack when facing dangers too great for one alone.</p></div>
<div className="archetype"><p><Link to="/arc-druid/world_walker">World Walker</Link></p><p><strong>Modifies or Replaces:</strong> Trackless Step; Resist Nature's Lure; Venom Immunity; Timeless Body</p><p>While all druids traverse the wilderness with ease, the world walkers take it upon themselves to travel the entire world.</p></div>
<h3 id="class-druid-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"druid archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"A Thousand Faces"},{"header":"Alignment"},{"header":"Armor Proficiency"},{"header":"Base Attack Bonus"},{"header":"Bonus Languages"},{"header":"Class Skills"},{"header":"Deity"},{"header":"Domains"},{"header":"Nature Bond"},{"header":"Nature Sense"},{"header":"Resist Nature's Lure"},{"header":"Skill Ranks"},{"header":"Spellcasting"},{"header":"Spontaneous Casting"},{"header":"Timeless Body"},{"header":"Trackless Step"},{"header":"Venom Immunity"},{"header":"Weapon Proficiency"},{"header":"Weapon/Armor Proficiency"},{"header":"Wild Empathy"},{"header":"Wild Shape"},{"header":"6th-level Wild Shape"},{"header":"8th-level Wild Shape"},{"header":"10th-level Wild Shape"},{"header":"12th-level Wild Shape"},{"header":"Woodland Stride"}],"data":[["‹arc-druid/Aerie Protector›",null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,"X",null,"X","X","X",null,null,null,null,"X"],["‹arc-druid/Ancient Guardian›","X",null,null,null,null,null,null,null,"X",null,"X",null,null,"X",null,"X",null,"X",null,"X",null,null,null,null,null,"X"],["‹arc-druid/Ape Shaman›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-druid/Aquatic Druid›","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X",null,null,null,null,null,null,null,null,"X"],["‹arc-druid/Arctic Druid›","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X",null,null,null,null,null,null,null,null,"X"],["‹arc-druid/Ashvawg Tamer›",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null],["‹arc-druid/Bat Shaman›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-druid/Bear Shaman›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-druid/Blight Druid›","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X",null,null,"X",null,null,null,null,null,null],["‹arc-druid/Boar Shaman›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-druid/Cave Druid›",null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X"],["‹arc-druid/Death Druid›",null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null],["‹arc-druid/Defender of the True World›","X",null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,"X","X",null,null,"X",null,null,null,null,null,null],["‹arc-druid/Desert Druid›","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X",null,null,null,null,null,null,null,null,"X"],["‹arc-druid/Devolutionist›",null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-druid/Dinosaur Druid›",null,null,null,null,null,null,null,null,"X",null,"X",null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null],["‹arc-druid/Draconic Druid›","X",null,null,null,null,null,null,null,"X","X","X",null,null,null,"X",null,"X",null,null,"X",null,null,null,null,null,"X"],["‹arc-druid/Dragon Shaman›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null],["‹arc-druid/Drovier›",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null],["‹arc-druid/Eagle Shaman›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-druid/Elemental Ally›",null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null],["‹arc-druid/Feral Child›","X",null,null,null,null,"X",null,null,"X",null,"X",null,null,null,"X","X","X",null,"X",null,"X",null,null,null,null,null],["‹arc-druid/Feral Shifter›","X",null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null],["‹arc-druid/Feyspeaker›",null,null,"X","X",null,"X",null,null,null,"X",null,"X",null,"X",null,null,null,null,null,null,"X",null,null,null,null,null],["‹arc-druid/Fungal Pilgrim›",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null],["‹arc-druid/Goliath Druid›","X",null,null,null,null,"X",null,null,"X","X","X",null,null,null,null,null,"X",null,null,"X","X",null,null,null,null,null],["‹arc-druid/Green Faith Initiate›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,"X",null,"X",null,null],["‹arc-druid/Green Scourge›",null,null,null,null,null,null,null,null,null,"X","X",null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-druid/Halcyon Druid›","X",null,null,null,null,"X",null,null,"X","X","X",null,null,"X",null,null,null,null,null,"X","X",null,null,null,null,null],["‹arc-druid/Jungle Druid›","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X"],["‹arc-druid/Kraken Caller›","X",null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,"X"],["‹arc-druid/Leshy Warden›","X",null,null,null,null,null,null,null,"X",null,"X",null,null,"X",null,null,null,null,null,"X","X",null,null,null,null,null],["‹arc-druid/Life Channeler›",null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null],["‹arc-druid/Lion Shaman›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-druid/Mantella›",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,"X",null,null,null,null,null],["‹arc-druid/Menhir Savant›","X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,"X"],["‹arc-druid/Mooncaller›","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X"],["‹arc-druid/Mountain Druid›","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X",null,null,null,null,null,null,null,null,"X"],["‹arc-druid/Naga Aspirant›","X",null,null,null,null,null,null,null,null,null,"X",null,null,"X","X",null,"X",null,null,null,"X",null,null,null,null,null],["‹arc-druid/Nature Fang›",null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,"X",null,null,"X","X",null,null,null,null,"X"],["‹arc-druid/Nature Priest›",null,null,null,null,null,"X","X",null,"X","X","X",null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null],["‹arc-druid/Nithveil Adept›",null,null,null,null,null,null,null,null,"X","X","X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-druid/Pack Lord›",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-druid/Plains Druid›","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X",null,null,null,null,null,null,null,null,"X"],["‹arc-druid/Planar Extremist›",null,"X",null,null,null,null,null,null,"X",null,"X",null,"X","X",null,null,null,null,null,null,"X",null,null,null,null,null],["‹arc-druid/Progenitor›",null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null],["‹arc-druid/Reincarnated Druid›",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,"X"],["‹arc-druid/Restorer›","X",null,null,null,null,null,null,null,null,"X","X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-druid/River Druid›",null,null,null,null,null,"X",null,null,null,"X","X",null,null,null,"X","X",null,null,null,null,"X",null,null,null,null,"X"],["‹arc-druid/Road Keeper›",null,null,null,null,null,null,null,null,"X",null,"X",null,null,"X",null,null,null,null,null,"X","X",null,null,null,null,"X"],["‹arc-druid/Rot Warden›",null,null,null,null,null,null,null,null,"X",null,"X",null,null,"X",null,"X","X",null,null,"X","X",null,null,null,null,null],["‹arc-druid/Saurian Shaman›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-druid/Season Keeper›",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X","X",null,null,null,"X",null,null,null,null,null],["‹arc-druid/Season Sage›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null],["‹arc-druid/Serpent Shaman›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-druid/Shark Shaman›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-druid/Skinshaper›","X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null],["‹arc-druid/Sky Druid›","X",null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,"X","X",null,"X",null,"X",null,null,null,null,"X"],["‹arc-druid/Storm Druid›","X",null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,"X","X",null,null,null,null,null,null,null,null,"X"],["‹arc-druid/Sunrider›",null,null,null,null,null,"X",null,null,"X",null,"X",null,null,null,null,"X",null,null,"X",null,"X",null,null,null,null,"X"],["‹arc-druid/Supernaturalist›",null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,"X",null,null,"X","X","X",null,null,null,null,null],["‹arc-druid/Survivor›",null,null,null,null,null,"X",null,null,"X",null,"X",null,"X",null,null,null,"X",null,"X",null,"X",null,null,null,null,null],["‹arc-druid/Swamp Druid›","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X"],["‹arc-druid/Swarm Monger›",null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X"],["‹arc-druid/Tempest Druid›",null,"X",null,null,null,null,null,null,"X","X","X",null,null,null,null,"X","X",null,"X",null,null,null,null,null,null,null],["‹arc-druid/Tempest Tamer›",null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null],["‹arc-druid/Toxicologist›",null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,"X",null,null,null,"X","X",null,null,null,null,"X"],["‹arc-druid/Treesinger›",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null],["‹arc-druid/Troll Fury›",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null],["‹arc-druid/Undine Adept›",null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,"X","X",null,null,null,"X",null,null,null,null,"X"],["‹arc-druid/Urban Druid›",null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,"X","X",null,null,null,null,null,null,null,null,"X"],["‹arc-druid/Urushiol›",null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-druid/Wild Whisperer›",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,"X"],["‹arc-druid/Wolf Shaman›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-druid/World Walker›",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X","X","X",null,null,null,null,null,null,null,null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-druid-label">Footnotes</h3>
<ol>
<li id="class-druid-Ex">
<p>Also see the <Link to="/arc-druid/planar_extremist">Planar Extremist</Link> archetype for options. <InnerLink id="backlink-class-druid-ref-Ex-1" data-hash-target to="class-druid-ref-Ex-1" aria-label="Back to reference Ex-1">↩</InnerLink></p>
</li>
<li id="class-druid-A">
<p><Link to="/source/blood_of_the_sea">Blood of the Sea pg. 5</Link> <InnerLink id="backlink-class-druid-ref-A-1" data-hash-target to="class-druid-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-druid-B">
<p><Link to="/source/advanced_race_guide">Advanced Race Guide pg. 92</Link> <InnerLink id="backlink-class-druid-ref-B-1" data-hash-target to="class-druid-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-druid-C">
<p><Link to="/source/blood_of_shadows">Blood of Shadows pg. 15</Link> <InnerLink id="backlink-class-druid-ref-C-1" data-hash-target to="class-druid-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-druid-D">
<p>Advanced Race Guide pg. 13 <InnerLink id="backlink-class-druid-ref-D-1" data-hash-target to="class-druid-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-druid-E">
<p>Advanced Race Guide pg. 23 <InnerLink id="backlink-class-druid-ref-E-1" data-hash-target to="class-druid-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-druid-F">
<p>Blood of Shadows pg. 7 <InnerLink id="backlink-class-druid-ref-F-1" data-hash-target to="class-druid-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-druid-G">
<p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 19</Link> <InnerLink id="backlink-class-druid-ref-G-1" data-hash-target to="class-druid-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-druid-H">
<p><Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 10</Link> <InnerLink id="backlink-class-druid-ref-H-1" data-hash-target to="class-druid-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-druid-I">
<p>Ultimate Wilderness pg. 16 <InnerLink id="backlink-class-druid-ref-I-1" data-hash-target to="class-druid-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-druid-J">
<p>Advanced Race Guide pg. 33 <InnerLink id="backlink-class-druid-ref-J-1" data-hash-target to="class-druid-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
<li id="class-druid-K">
<p><Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 15</Link> <InnerLink id="backlink-class-druid-ref-K-1" data-hash-target to="class-druid-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
<li id="class-druid-L">
<p><Link to="/source/horror_adventures">Horror Adventures pg. 39</Link> <InnerLink id="backlink-class-druid-ref-L-1" data-hash-target to="class-druid-ref-L-1" aria-label="Back to reference L-1">↩</InnerLink></p>
</li>
<li id="class-druid-M">
<p>Advanced Race Guide pg. 115 <InnerLink id="backlink-class-druid-ref-M-1" data-hash-target to="class-druid-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink></p>
</li>
<li id="class-druid-N">
<p><Link to="/source/goblins_of_golarion">Goblins of Golarion pg. 31</Link> <InnerLink id="backlink-class-druid-ref-N-1" data-hash-target to="class-druid-ref-N-1" aria-label="Back to reference N-1">↩</InnerLink></p>
</li>
<li id="class-druid-O">
<p>Advanced Race Guide pg. 190 <InnerLink id="backlink-class-druid-ref-O-1" data-hash-target to="class-druid-ref-O-1" aria-label="Back to reference O-1">↩</InnerLink></p>
</li>
<li id="class-druid-P">
<p>Advanced Race Guide pg. 42 <InnerLink id="backlink-class-druid-ref-P-1" data-hash-target to="class-druid-ref-P-1" aria-label="Back to reference P-1">↩</InnerLink></p>
</li>
<li id="class-druid-Q">
<p>Advanced Player's Guide pg. 17 <InnerLink id="backlink-class-druid-ref-Q-1" data-hash-target to="class-druid-ref-Q-1" aria-label="Back to reference Q-1">↩</InnerLink></p>
</li>
<li id="class-druid-R">
<p>Advanced Race Guide pg. 63 <InnerLink id="backlink-class-druid-ref-R-1" data-hash-target to="class-druid-ref-R-1" aria-label="Back to reference R-1">↩</InnerLink></p>
</li>
<li id="class-druid-S">
<p>Advanced Race Guide pg. 53 <InnerLink id="backlink-class-druid-ref-S-1" data-hash-target to="class-druid-ref-S-1" aria-label="Back to reference S-1">↩</InnerLink></p>
</li>
<li id="class-druid-T">
<p>Advanced Race Guide pg. 73 <InnerLink id="backlink-class-druid-ref-T-1" data-hash-target to="class-druid-ref-T-1" aria-label="Back to reference T-1">↩</InnerLink></p>
</li>
<li id="class-druid-U">
<p>Advanced Player's Guide pg. 23 <InnerLink id="backlink-class-druid-ref-U-1" data-hash-target to="class-druid-ref-U-1" aria-label="Back to reference U-1">↩</InnerLink></p>
</li>
<li id="class-druid-V">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-druid-ref-V-1" data-hash-target to="class-druid-ref-V-1" aria-label="Back to reference V-1">↩</InnerLink></p>
</li>
<li id="class-druid-W">
<p>Advanced Race Guide pg. 162 <InnerLink id="backlink-class-druid-ref-W-1" data-hash-target to="class-druid-ref-W-1" aria-label="Back to reference W-1">↩</InnerLink></p>
</li>
<li id="class-druid-X">
<p>Advanced Race Guide pg. 133 <InnerLink id="backlink-class-druid-ref-X-1" data-hash-target to="class-druid-ref-X-1" aria-label="Back to reference X-1">↩</InnerLink></p>
</li>
<li id="class-druid-Y">
<p>Blood of the Sea pg. 11 <InnerLink id="backlink-class-druid-ref-Y-1" data-hash-target to="class-druid-ref-Y-1" aria-label="Back to reference Y-1">↩</InnerLink></p>
</li>
<li id="class-druid-Z">
<p>Advanced Race Guide pg. 194 <InnerLink id="backlink-class-druid-ref-Z-1" data-hash-target to="class-druid-ref-Z-1" aria-label="Back to reference Z-1">↩</InnerLink></p>
</li>
<li id="class-druid-1">
<p>Advanced Race Guide pg. 139 <InnerLink id="backlink-class-druid-ref-1-1" data-hash-target to="class-druid-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="class-druid-2">
<p>Advanced Race Guide pg. 145 <InnerLink id="backlink-class-druid-ref-2-1" data-hash-target to="class-druid-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="class-druid-3">
<p>Advanced Race Guide pg. 151 <InnerLink id="backlink-class-druid-ref-3-1" data-hash-target to="class-druid-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
<li id="class-druid-4">
<p><Link to="/source/pathfinder_101_the_kintargo_contract">Pathfinder #101: The Kintargo Contract pg. 73</Link> <InnerLink id="backlink-class-druid-ref-4-1" data-hash-target to="class-druid-ref-4-1" aria-label="Back to reference 4-1">↩</InnerLink></p>
</li>
<li id="class-druid-5">
<p>Advanced Race Guide pg. 157 <InnerLink id="backlink-class-druid-ref-5-1" data-hash-target to="class-druid-ref-5-1" aria-label="Back to reference 5-1">↩</InnerLink></p>
</li>
<li id="class-druid-6">
<p>Advanced Race Guide pg. 170 <InnerLink id="backlink-class-druid-ref-6-1" data-hash-target to="class-druid-ref-6-1" aria-label="Back to reference 6-1">↩</InnerLink></p>
</li>
<li id="class-druid-7">
<p>Advanced Race Guide pg. 176 <InnerLink id="backlink-class-druid-ref-7-1" data-hash-target to="class-druid-ref-7-1" aria-label="Back to reference 7-1">↩</InnerLink></p>
</li>
<li id="class-druid-8">
<p>Advanced Race Guide pg. 206 <InnerLink id="backlink-class-druid-ref-8-1" data-hash-target to="class-druid-ref-8-1" aria-label="Back to reference 8-1">↩</InnerLink></p>
</li>
<li id="class-druid-9">
<p>Ultimate Wilderness pg. 21 <InnerLink id="backlink-class-druid-ref-9-1" data-hash-target to="class-druid-ref-9-1" aria-label="Back to reference 9-1">↩</InnerLink></p>
</li>
<li id="class-druid-0">
<p>Blood of Shadows pg. 11 <InnerLink id="backlink-class-druid-ref-0-1" data-hash-target to="class-druid-ref-0-1" aria-label="Back to reference 0-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _monk = {hasJL:true,title: "Monk", jsx: <><div className="jumpList" id="class-monk-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-monk-ac-bonus-ex">AC Bonus</InnerLink></li><li><InnerLink toTop to="class-monk-flurry-of-blows-ex">Flurry of Blows</InnerLink></li><li><InnerLink toTop to="class-monk-unarmed-strike">Unarmed Strike</InnerLink></li><li><InnerLink toTop to="class-monk-vows">Vows</InnerLink></li><li><InnerLink toTop to="class-monk-bonus-feat">Bonus Feat</InnerLink></li><li><InnerLink toTop to="class-monk-stunning-fist-ex">Stunning Fist</InnerLink></li><li><InnerLink toTop to="class-monk-evasion-ex">Evasion</InnerLink></li><li><InnerLink toTop to="class-monk-fast-movement-ex">Third-Level Abilities</InnerLink></li><li><InnerLink toTop to="class-monk-ki-pool-su">Ki Pool</InnerLink></li><li><InnerLink toTop to="class-monk-slow-fall-ex">Slow Fall</InnerLink></li><li><InnerLink toTop to="class-monk-high-jump-ex">Fifth-to-Tenth-Level Abilities</InnerLink></li><li><InnerLink toTop to="class-monk-diamond-body-su">Eleventh-to-Fourteenth-Level Abilities</InnerLink></li><li><InnerLink toTop to="class-monk-quivering-palm-su">Higher-Level Abilities</InnerLink></li><li><InnerLink toTop to="class-monk-ex-monks">Ex-Monks</InnerLink></li><li><InnerLink toTop to="class-monk-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-monk-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-monk-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-monk-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-monk-monk">Monk</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 56</Link></p>
<p>For the truly exemplary, martial skill transcends the battlefield - it is a lifestyle, a doctrine, a state of mind. These warrior-artists search out methods of battle beyond swords and shields, finding weapons within themselves just as capable of crippling or killing as any blade. These monks (so called since they adhere to ancient philosophies and strict martial disciplines) elevate their bodies to become weapons of war, from battle-minded ascetics to self-taught brawlers. Monks tread the path of discipline, and those with the will to endure that path discover within themselves not what they are, but what they are meant to be.</p>
<p><strong>Role:</strong> Monks excel at overcoming even the most daunting perils, striking where it's least expected, and taking advantage of enemy vulnerabilities. Fleet of foot and skilled in combat, monks can navigate any battlefield with ease, aiding allies wherever they are needed most.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any lawful</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td>NG</td><td>N</td><td>NE</td></tr><tr><td>CG</td><td>CN</td><td>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>1d6 &times; 10 gp (average 35 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>4 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/escape_artist">Escape Artist</Link>, <Link to="/skill/ride">Ride</Link>, <Link to="/skill/stealth">Stealth</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_history">Knowledge (history)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/perform_any">Perform (any)</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-monk-class-features">Class Features</h3>
<ScrollContainer id="class-monk--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Base Attack Bonus</th>
<th>Fort Save</th>
<th>Ref Save</th>
<th>Will Save</th>
<th>Special</th>
<th>Flurry of Blows Attack Bonus</th>
<th>Unarmed Damage</th>
<th>AC Bonus</th>
<th>Fast Movement</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+0</td>
<td>+2</td>
<td>+2</td>
<td>+2</td>
<td>Bonus feat, flurry of blows, stunning fist, unarmed strike</td>
<td>-1/-1</td>
<td>1d6</td>
<td>+0</td>
<td>+0 ft.</td>
</tr>
<tr>
<td>2nd</td>
<td>+1</td>
<td>+3</td>
<td>+3</td>
<td>+3</td>
<td>Bonus feat, evasion</td>
<td>+0/+0</td>
<td>1d6</td>
<td>+0</td>
<td>+0 ft.</td>
</tr>
<tr>
<td>3rd</td>
<td>+2</td>
<td>+3</td>
<td>+3</td>
<td>+3</td>
<td>Fast movement, maneuver training, still mind</td>
<td>+1/+1</td>
<td>1d6</td>
<td>+0</td>
<td>+10 ft.</td>
</tr>
<tr>
<td>4th</td>
<td>+3</td>
<td>+4</td>
<td>+4</td>
<td>+4</td>
<td><em>Ki</em> pool (magic), slow fall 20 ft.</td>
<td>+2/+2</td>
<td>1d8</td>
<td>+1</td>
<td>+10 ft.</td>
</tr>
<tr>
<td>5th</td>
<td>+3</td>
<td>+4</td>
<td>+4</td>
<td>+4</td>
<td>High jump, purity of body</td>
<td>+3/+3</td>
<td>1d8</td>
<td>+1</td>
<td>+10 ft.</td>
</tr>
<tr>
<td>6th</td>
<td>+4</td>
<td>+5</td>
<td>+5</td>
<td>+5</td>
<td>Bonus feat, slow fall 30 ft.</td>
<td>+4/+4/-1</td>
<td>1d8</td>
<td>+1</td>
<td>+20 ft.</td>
</tr>
<tr>
<td>7th</td>
<td>+5</td>
<td>+5</td>
<td>+5</td>
<td>+5</td>
<td><em>Ki</em> pool (cold iron/silver), wholeness of body</td>
<td>+5/+5/+0</td>
<td>1d8</td>
<td>+1</td>
<td>+20 ft.</td>
</tr>
<tr>
<td>8th</td>
<td>+6/+1</td>
<td>+6</td>
<td>+6</td>
<td>+6</td>
<td>Slow fall 40 ft.</td>
<td>+6/+6/+1/+1</td>
<td>1d10</td>
<td>+2</td>
<td>+20 ft.</td>
</tr>
<tr>
<td>9th</td>
<td>+6/+1</td>
<td>+6</td>
<td>+6</td>
<td>+6</td>
<td>Improved evasion</td>
<td>+7/+7/+2/+2</td>
<td>1d10</td>
<td>+2</td>
<td>+30 ft.</td>
</tr>
<tr>
<td>10th</td>
<td>+7/+2</td>
<td>+7</td>
<td>+7</td>
<td>+7</td>
<td>Bonus feat, <em>ki</em> pool (lawful), slow fall 50 ft.</td>
<td>+8/+8/+3/+3</td>
<td>1d10</td>
<td>+2</td>
<td>+30 ft.</td>
</tr>
<tr>
<td>11th</td>
<td>+8/+3</td>
<td>+7</td>
<td>+7</td>
<td>+7</td>
<td>Diamond body</td>
<td>+9/+9/+4/+4/-1</td>
<td>1d10</td>
<td>+2</td>
<td>+30 ft.</td>
</tr>
<tr>
<td>12th</td>
<td>+9/+4</td>
<td>+8</td>
<td>+8</td>
<td>+8</td>
<td>Abundant step, slow fall 60 ft.</td>
<td>+10/+10/+5/+5/+0</td>
<td>2d6</td>
<td>+3</td>
<td>+40 ft.</td>
</tr>
<tr>
<td>13th</td>
<td>+9/+4</td>
<td>+8</td>
<td>+8</td>
<td>+8</td>
<td>Diamond soul</td>
<td>+11/+11/+6/+6/+1</td>
<td>2d6</td>
<td>+3</td>
<td>+40 ft.</td>
</tr>
<tr>
<td>14th</td>
<td>+10/+5</td>
<td>+9</td>
<td>+9</td>
<td>+9</td>
<td>Bonus feat, slow fall 70 ft.</td>
<td>+12/+12/+7/+7/+2</td>
<td>2d6</td>
<td>+3</td>
<td>+40 ft.</td>
</tr>
<tr>
<td>15th</td>
<td>+11/+6/+1</td>
<td>+9</td>
<td>+9</td>
<td>+9</td>
<td>Quivering palm</td>
<td>+13/+13/+8/+8/+3/+3</td>
<td>2d6</td>
<td>+3</td>
<td>+50 ft.</td>
</tr>
<tr>
<td>16th</td>
<td>+12/+7/+2</td>
<td>+10</td>
<td>+10</td>
<td>+10</td>
<td><em>Ki</em> pool (adamantine), slow fall 80 ft.</td>
<td>+14/+14/+9/+9/+4/+4/-1</td>
<td>2d8</td>
<td>+4</td>
<td>+50 ft.</td>
</tr>
<tr>
<td>17th</td>
<td>+12/+7/+2</td>
<td>+10</td>
<td>+10</td>
<td>+10</td>
<td>Timeless body, tongue of the sun and moon</td>
<td>+15/+15/+10/+10/+5/+5/+0</td>
<td>2d8</td>
<td>+4</td>
<td>+50 ft.</td>
</tr>
<tr>
<td>18th</td>
<td>+13/+8/+3</td>
<td>+11</td>
<td>+11</td>
<td>+11</td>
<td>Bonus feat, slow fall 90 ft.</td>
<td>+16/+16/+11/+11/+6/+6/+1</td>
<td>2d8</td>
<td>+4</td>
<td>+60 ft.</td>
</tr>
<tr>
<td>19th</td>
<td>+14/+9/+4</td>
<td>+11</td>
<td>+11</td>
<td>+11</td>
<td>Empty body</td>
<td>+17/+17/+12/+12/+7/+7/+2</td>
<td>2d8</td>
<td>+4</td>
<td>+60 ft.</td>
</tr>
<tr>
<td>20th</td>
<td>+15/+10/+5</td>
<td>+12</td>
<td>+12</td>
<td>+12</td>
<td>Perfect self, slow fall any distance</td>
<td>+18/+18/+13/+13/+8/+8/+3</td>
<td>2d10</td>
<td>+5</td>
<td>+60 ft.</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={9}>Weapons</th><td><Link to="/eq-weapon/club">club</Link></td><td><Link to="/eq-weapon/dagger">dagger</Link></td></tr><tr><td><Link to="/eq-weapon/light_crossbow">light crossbow</Link></td><td><Link to="/eq-weapon/heavy_crossbow">heavy crossbow</Link></td></tr><tr><td><Link to="/eq-weapon/handaxe">handaxe</Link></td><td><Link to="/eq-weapon/javelin">javelin</Link></td></tr><tr><td><Link to="/eq-weapon/kama">kama</Link></td><td><Link to="/eq-weapon/nunchaku">nunchaku</Link></td></tr><tr><td><Link to="/eq-weapon/quarterstaff">quarterstaff</Link></td><td><Link to="/eq-weapon/sai">sai</Link></td></tr><tr><td><Link to="/eq-weapon/short_sword">short sword</Link></td><td><Link to="/eq-weapon/shortspear">shortspear</Link></td></tr><tr><td><Link to="/eq-weapon/shuriken">shuriken</Link></td><td><Link to="/eq-weapon/siangham">siangham</Link></td></tr><tr><td><Link to="/eq-weapon/sling">sling</Link></td><td><Link to="/eq-weapon/spear">spear</Link></td></tr><tr><td colSpan={2}>Any weapon with the <Link to="/misc/monk">monk</Link> special weapon quality.</td></tr><tr><th>Light Armor?</th><td colSpan={2}>No</td></tr><tr><th>Medium Armor?</th><td colSpan={2}>No</td></tr><tr><th>Heavy Armor?</th><td colSpan={2}>No</td></tr><tr><th>Shields?</th><td colSpan={2}>No</td></tr><tr><td colSpan={3} className="sw se">Wearing armor or using a shield can stifle some of your abilities.</td></tr></tbody></table>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-ac-bonus-ex" data-hash-target><div className="box">AC Bonus (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You add your Wisdom bonus (if any) to your AC and your CMD. These bonuses to AC apply even against touch attacks or when you are <Link to="/rule/flat_footed">flat-footed</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">You gain an additional bonus to your AC and CMD equal to <Link to="/misc/one_fourth">one-fourth</Link> of your monk level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You lose these bonuses when you are immobilized or <Link to="/misc/helpless">helpless</Link>, when you wear any armor, when you carry a shield, or when you carry a medium or heavy load.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-flurry-of-blows-ex" data-hash-target><div className="box">Flurry of Blows (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box"><p>You can make a flurry of blows as a full-attack action. When doing so you may make one additional attack using any combination of unarmed strikes or attacks with a special monk weapon (kama, nunchaku, quarterstaff, sai, shuriken, and siangham) as if using the <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link> feat (even if you do not meet the prerequisites for the feat). For the purpose of these attacks, your base attack bonus from your monk class levels is equal to your monk level. For all other purposes, such as qualifying for a feat or a prestige class, you use your normal base attack bonus.</p>
<p>You apply your full Strength bonus to your damage rolls for all successful attacks made with flurry of blows, whether the attacks are made with an off-hand or with a weapon wielded in both hands. You may substitute <Link to="/rule/disarm">disarm</Link>, <Link to="/rule/sunder">sunder</Link>, and <Link to="/rule/trip">trip</Link> combat maneuvers for unarmed attacks as part of a flurry of blows. You cannot use any weapon other than an unarmed strike or a special monk weapon as part of a flurry of blows. You cannot use natural weapons (if you have any) as part of a flurry of blows, nor can you make natural attacks in addition to your flurry of blows attacks.</p>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">You can make two additional attacks when you use flurry of blows, as if using <Link to="/feat/improved_two_weapon_fighting">Improved Two-Weapon Fighting</Link> (even if you do not meet the prerequisites for the feat).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">You can make three additional attacks when you use flurry of blows, as if using <Link to="/feat/greater_two_weapon_fighting">Greater Two-Weapon Fighting</Link> (even if you do not meet the prerequisites for the feat).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-unarmed-strike" data-hash-target><div className="box">Unarmed Strike</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box"><p>You gain <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat. Your attacks may be with fist, elbows, knees, and feet. This means that you may make unarmed strikes with your hands full. There is no such thing as an off-hand attack for your unarmed strikes, so you apply your full Strength bonus on damage rolls for all your unarmed strikes.</p>
<p>You also deal more damage with your unarmed strikes than a normal person would. The unarmed damage values listed on the table above are for Medium monks only. If you are Small, you deal 1d4 damage, and if you are Large, you deal 1d8 damage.</p>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">Your unarmed strike now deals 1d6 (Small), 1d8 (Medium), or 2d6 (Large) damage.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">Your unarmed strike now deals 1d8 (Small), 1d10 (Medium), or 2d8 (Large) damage.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">Your unarmed strike now deals 1d10 (Small), 2d6 (Medium), or 3d6 (Large) damage.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">Your unarmed strike now deals 2d6 (Small), 2d8 (Medium), or 3d8 (Large) damage.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">Your unarmed strike now deals 2d8 (Small), 2d10 (Medium), or 4d8 (Large) damage.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Usually your unarmed strikes deal lethal damage, but you can choose to deal nonlethal damage instead with no penalty on your attack roll. You have the same choice to deal lethal or nonlethal damage while grappling. Your unarmed strike is treated as both a manufactured weapon and a natural weapon for the purpose of spells and effects that enhance or improve either manufactured weapons or natural weapons.</div></div></div></div>
<aside><p><strong className="hl" id="class-monk-vows" data-hash-target>Vows:</strong> A monk can discipline his body to by upholding the strict tenets of a vow. By adhering to his <Link to="/ability/vows">vow's</Link> tenets, the monk's ki pool increases by the amount listed in the vow's description. Every vow comes with a penalty or limitation to offset this increase in ki. A monk can take a vow at any level, and can even take multiple vows over his career, but each vow does not add to his ki pool until he gains a ki pool as a class feature (usually at 4th level).</p>
<p>A monk who takes a vow never gains the <em>still mind</em> class feature, even if he later abandons all his vows.</p>
</aside><div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-bonus-feat" data-hash-target><div className="box">Bonus Feat</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain a bonus feat from the <strong>first</strong> list below. You need not have any of the prerequisites normally required for these feats to select them.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 2nd Level</div></div><div className="abEnd"><div className="box">You gain another bonus feat from the <strong>first</strong> list below.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">You gain another bonus feat from either the <strong>first or second</strong> list below.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">You gain another bonus feat from the <strong>first, second, or third</strong> list below.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 14th Level</div></div><div className="abEnd"><div className="box">You gain another bonus feat from <strong>any</strong> list below.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">You gain another bonus feat from <strong>any</strong> list below.</div></div></div></div>
<blockquote className="hanging">
<p><strong className="hl">1st and 2nd Levels:</strong> <Link to="/feat/catch_off_guard">Catch Off-Guard</Link>, <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/deflect_arrows">Deflect Arrows</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/improved_grapple">Improved Grapple</Link>, <Link to="/feat/ki_diversity">Ki Diversity</Link>, <Link to="/feat/scorpion_style">Scorpion Style</Link>, <Link to="/feat/throw_anything">Throw Anything</Link>, <Link to="/feat/wings_of_the_androsphinx">Wings of the Androsphinx</Link></p><p><strong className="hl">6th Level:</strong> <Link to="/feat/gorgons_fist">Gorgon's Fist</Link>, <Link to="/feat/hamatulatsu">Hamatulatsu</Link>, <Link to="/feat/horn_of_the_criosphinx">Horn of the Criosphinx</Link>, <Link to="/feat/improved_bull_rush">Improved Bull Rush</Link>, <Link to="/feat/improved_disarm">Improved Disarm</Link>, <Link to="/feat/improved_feint">Improved Feint</Link>, <Link to="/feat/improved_trip">Improved Trip</Link>, <Link to="/feat/mobility">Mobility</Link></p><p><strong className="hl">10th Level:</strong> <Link to="/feat/improved_critical">Improved Critical</Link>, <Link to="/feat/ki_throw">Ki Throw</Link>, <Link to="/feat/medusas_wrath">Medusa's Wrath</Link>, <Link to="/feat/snatch_arrows">Snatch Arrows</Link>, <Link to="/feat/spring_attack">Spring Attack</Link></p><p><strong className="hl">14th Level:</strong> <Link to="/feat/binding_throw">Binding Throw</Link>, <Link to="/feat/improved_ki_throw">Improved Ki Throw</Link></p></blockquote>
<aside><p>A monk may also choose a <Link to="/main/feats_meditation">meditation feat</Link> in place of a bonus feat, but he must meet their prerequisites.</p>
</aside><div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-stunning-fist-ex" data-hash-target><div className="box">Stunning Fist (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain <Link to="/feat/stunning_fist">Stunning Fist</Link> as a bonus feat, even if you don't meet the prerequisites.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">You gain the ability to apply <Link to="/misc/fatigue">fatigue</Link> to the target of your Stunning Fist. This condition replaces stunning the target for 1 round, and a successful saving throw still negates the effect.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">You can now make the target <Link to="/misc/sickened">sickened</Link> for 1 minute.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">You can make the target <Link to="/misc/staggered">staggered</Link> for 1d6+1 rounds</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">You can permanently <Link to="/misc/blind">blind</Link> or <Link to="/misc/deafen">deafen</Link> the target.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">You can <Link to="/rule/paralyze">paralyze</Link> the target for 1d6+1 rounds.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You must choose which condition will apply before the attack roll is made. These effects do not stack with themselves (a creature fatigued by Stunning Fist cannot become <Link to="/misc/exhausted">exhausted</Link> if hit by Stunning Fist again), but additional hits do increase the duration.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-evasion-ex" data-hash-target><div className="box">Evasion (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">If you make a successful Reflex saving throw against an attack that normally deals half damage on a successful save, you instead takes no damage.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">This only applies if you are wearing light armor or no armor, and are not <Link to="/misc/helpless">helpless</Link></div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-fast-movement-ex" data-hash-target><div className="box">Fast Movement (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain an enhancement bonus of +10 ft. to your land speed.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">The bonus becomes +20 ft.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">The bonus increases to +30 ft.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">The bonus becomes +40 ft.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">The bonus increases to +50 ft.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">The bonus becomes +60 ft.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">If you wear armor or carry a medium or heavy load, you lose this extra speed.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-maneuver-training-ex" data-hash-target><div className="box">Maneuver Training (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You use your monk level in place of your base attack bonus when calculating your Combat Maneuver Bonus. Base attack bonuses granted from other classes are unaffected and are added normally.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-still-mind-ex" data-hash-target><div className="box">Still Mind (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain a +2 bonus on saving throws against enchantment spells and effects.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-ki-pool-su" data-hash-target><div className="box">Ki Pool (Su)</div><div className="flavor">A monk gains supernatural energy he can use to accomplish amazing feats.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain a pool of ki points. The number of points in your ki pool is equal to 1/2 your monk level + your Wisdom modifier.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">By spending 1 point from your ki pool, you can make one additional unarmed strike at your highest attack bonus when making a flurry of blows attack. In addition, you can spend 1 point to increase your speed by 20 feet for 1 round. Finally, your can spend 1 point from your <em>ki</em> pool to give yourself a +4 dodge bonus to AC for 1 round.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">As long as you have at least 1 point in your ki pool, you can make a <em>ki strike,</em> which allows your unarmed attacks to be treated as magic weapons for the purpose of overcoming <Link to="/rule/damage_reduction">damage reduction</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">Your <em>ki strikes</em> are also treated as cold iron and silver for the purpose of overcoming damage reduction.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">Your <em>ki strikes</em> are also treated as lawful weapons for the purpose of overcoming damage reduction.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">Your <em>ki strikes</em> are treated as <Link to="/eq-material/adamantine">adamantine</Link> weapons for the purpose of overcoming damage reduction and bypassing <Link to="/rule/hardness">hardness</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">You gain additional powers that consume points from your ki pool as you gain levels. The ki pool is replenished each morning after 8 hours of rest or meditation; these hours do not need to be consecutive.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-slow-fall-ex" data-hash-target><div className="box">Slow Fall (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">If it within arm's reach, you can use a wall to slow your descent, taking damage as if your fall was shorter. When determining damage from a fall, you treat take your fall distance and subtract a number of feet equal to 10 &times; half your monk level. (For example, at 4th level, a 30 ft. fall is treated as a 10 ft. fall.)</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">You can use a nearby wall to slow your descent and fall any distance without harm.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-high-jump-ex" data-hash-target><div className="box">High Jump (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You add your level to all Acrobatics checks made to jump, both for vertical jumps and horizontal jumps. In addition, you always count as having a running start when making jump checks using Acrobatics.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">By spending 1 point from your <em>ki</em> pool, you gain a +20 bonus on Acrobatics checks made to jump for 1 round.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-purity-of-body-ex" data-hash-target><div className="box">Purity of Body (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain immunity to all diseases, including supernatural and magical diseases.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-wholeness-of-body-su" data-hash-target><div className="box">Wholeness of Body (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 7th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can heal a number of hit points of damage equal to your monk level by using 2 points from your ki pool.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-improved-evasion-ex" data-hash-target><div className="box">Improved Evasion (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 9th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Your evasion ability improves. As long as you are not helpless, you still take no damage on a successful Reflex saving throw against attacks, but you take only half damage on a failed save.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-diamond-body-su" data-hash-target><div className="box">Diamond Body (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 11th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You are immune to poisons of all kinds.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-abundant-step-su" data-hash-target><div className="box">Abundant Step (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Move-Equivalent Action</div></div><div className="abEnd"><div className="box">You can slip magically between spaces, as if using the spell <Link to="/spell/dimension_door">dimension door</Link>. Using this ability consumes 2 points from your <em>ki</em> pool. Your caster level for this effect is equal to your monk level. You cannot take other creatures with you when you use this ability.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-diamond-soul-ex" data-hash-target><div className="box">Diamond Soul (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 13th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain <Link to="/rule/spell_resistance">spell resistance</Link> equal to your monk level + 10.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-quivering-palm-su" data-hash-target><div className="box">Quivering Palm (Su)</div><div className="flavor">A monk can set up vibrations within the body of another creature that can thereafter be fatal.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 15th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Once a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You must announce your intent before making your attack roll. Creatures immune to critical hits cannot be affected. Otherwise, if you strike successfully and the target takes damage from the blow, the quivering palm attack succeeds. Thereafter, you can try to slay the victim at any later time, as long as the attempt is made within a number of days equal to your monk level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Free Action</div></div><div className="abEnd"><div className="box">You can merely will the target to die, and unless the target makes a Fortitude saving throw (DC 10 + 1/2 your monk level + your Wis modifier), it dies.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">If the saving throw is successful, the target is no longer in danger from that particular quivering palm attack, but it may still be affected by another one at a later time. You can have no more than 1 quivering palm in effect at one time. If you use quivering palm while another is still in effect, the previous effect is negated.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-timeless-body-ex" data-hash-target><div className="box">Timeless Body (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 17th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You no longer take penalties to your ability scores for aging and cannot be magically <Link to="/rule/age">aged</Link>. Any such penalties that you have already taken, however, remain in place.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Age bonuses still accrue, and you still die of old age when your time is up.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-tongue-of-the-sun-and-moon-ex" data-hash-target><div className="box">Tongue of the Sun and Moon (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 17th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You can speak with any living creature.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-empty-body-su" data-hash-target><div className="box">Empty Body (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 19th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Move-Equivalent Action</div></div><div className="abEnd"><div className="box">You gain the ability to assume an ethereal state for 1 minute as though using the spell <Link to="/spell/etherealness">etherealness</Link>. Using this ability consumes 3 points from your <em>ki</em> pool. This ability only affects you and cannot be used to make other creatures ethereal.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="class-monk-perfect-self" data-hash-target><div className="box">Perfect Self</div><div className="flavor">A monk becomes a magical creature.</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You are forevermore treated as an <Link to="/type/outsider">outsider</Link> rather than as a humanoid (or whatever your creature type was) for the purpose of spells and magical effects. Additionally, you gain DR 10/chaotic. Unlike other outsiders, you can still be brought back from the dead as if you were a member of your previous creature type.</div></div></div></div>
<h3 id="class-monk-ex-monks" data-hash-target>Ex-Monks</h3>
<p>A monk who becomes nonlawful cannot gain new levels as a monk but retains all monk abilities.<sup><InnerLink showBacklink="backlink-class-monk-ref-Ex-1" id="class-monk-ref-Ex-1" data-hash-target to="class-monk-Ex">1</InnerLink></sup></p>
<h3 id="class-monk-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-monk--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Ki Sage (Su)</td><td>At 20th level, the character is fully attuned to his own body and the ki that flows within. The character gains two <Link to="/ability/ki_powers">ki powers</Link> from those available to the unchained monk, treating his character level as his monk level for the purpose of any requirements. In addition, his ki pool increases by four. This capstone is available to any class with a ki pool.</td></tr>
<tr><td>Old Dog, New Tricks (Ex)</td><td>At 20th level, the character shows that a true warrior always has one more surprise the enemy hasn't seen. The character gains four <Link to="/main/combat_feat">combat feats</Link>. This capstone is available to characters of any class that gains at least four bonus combat feats.</td></tr>
<tr><td>Old Master (Ex)</td><td>At 20th level, the monk has reached the highest levels of his martial arts school. The monk gains one additional attack at his highest base attack bonus when using flurry of blows, and his dodge bonus to AC increases by 2.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-monk-favored-class-bonuses" data-hash-target>Favored Class Bonuses</h3>
<div className="hanging striped">
<p><strong>Catfolk:</strong> Add 1/2 to the monk's damage rolls with claw attacks and claw blades. A monk who selects this bonus at 1st level also treats claw blades as a monk weapon. If he is an unchained monk, he can use his style strikes with unarmed strike or claw blade attacks.<sup><InnerLink showBacklink="backlink-class-monk-ref-A-1" id="class-monk-ref-A-1" data-hash-target to="class-monk-A">2</InnerLink></sup></p>
<p><strong>Duskwalker:</strong> Add 1/4 point to the monk's ki pool.<sup><InnerLink showBacklink="backlink-class-monk-ref-B-1" id="class-monk-ref-B-1" data-hash-target to="class-monk-B">3</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Reduce the Hardness of any object made of clay, stone, or metal by 1 whenever the object is struck by the monk's unarmed strike (minimum of 0).<sup><InnerLink showBacklink="backlink-class-monk-ref-C-1" id="class-monk-ref-C-1" data-hash-target to="class-monk-C">4</InnerLink></sup></p>
<p><strong>Elf:</strong> Add +1 to the monk's base speed. In combat this option has no effect unless the monk has selected it five times (or another increment of five). This bonus stacks with the monk's fast movement class feature and applies under the same conditions as that feature.<sup><InnerLink showBacklink="backlink-class-monk-ref-D-1" id="class-monk-ref-D-1" data-hash-target to="class-monk-D">5</InnerLink></sup></p>
<p><strong>Fetchling:</strong> Add a +1/2 bonus on Escape Artist and Stealth checks attempted while in <Link to="/rule/dim_light">dim light</Link> or darkness.<sup><InnerLink showBacklink="backlink-class-monk-ref-E-1" id="class-monk-ref-E-1" data-hash-target to="class-monk-E">6</InnerLink></sup></p>
<p><strong>Gillman:</strong> Add 1 foot to the monk's swim speed. In combat, this option has no effect unless the monk has selected it five times (or another increment of five).<sup><InnerLink showBacklink="backlink-class-monk-ref-F-1" id="class-monk-ref-F-1" data-hash-target to="class-monk-F">7</InnerLink></sup></p>
<p><strong>Gnome:</strong> Add +1 to the monk's Acrobatics check bonus gained by spending a point from his <em>ki</em> pool. A monk must be at least 5th level to select this benefit.<sup><InnerLink showBacklink="backlink-class-monk-ref-G-1" id="class-monk-ref-G-1" data-hash-target to="class-monk-G">8</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Add +1/2 on Escape Artist checks and on Acrobatics checks to cross narrow surfaces.<sup><InnerLink showBacklink="backlink-class-monk-ref-H-1" id="class-monk-ref-H-1" data-hash-target to="class-monk-H">9</InnerLink></sup></p>
<p><strong>Halfling:</strong> Add +1 to the monk's CMD when resisting a grapple and +1/2 to the number of stunning attacks he can attempt per day.<sup><InnerLink showBacklink="backlink-class-monk-ref-I-1" id="class-monk-ref-I-1" data-hash-target to="class-monk-I">10</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-monk-ref-J-1" id="class-monk-ref-J-1" data-hash-target to="class-monk-J">11</InnerLink></sup></p>
<p><strong>Halfling:</strong> Gain a +1/4 bonus to CMD against trip and on damage rolls against prone targets that add the monk's Strength modifier.<sup><InnerLink showBacklink="backlink-class-monk-ref-K-1" id="class-monk-ref-K-1" data-hash-target to="class-monk-K">12</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Add +1 to the monk's CMD when resisting a grapple and +1/2 to the number of stunning attacks he can attempt per day.<sup><InnerLink showBacklink="backlink-class-monk-ref-L-1" id="class-monk-ref-L-1" data-hash-target to="class-monk-L">13</InnerLink></sup></p>
<p><strong>Hobgoblin:</strong> Add a +1/4 bonus on combat maneuver checks made to grapple or trip.<sup><InnerLink showBacklink="backlink-class-monk-ref-M-1" id="class-monk-ref-M-1" data-hash-target to="class-monk-M">14</InnerLink></sup></p>
<p><strong>Human:</strong> Add +1/4 point to the monk's <em>ki</em> pool.<sup><InnerLink showBacklink="backlink-class-monk-ref-N-1" id="class-monk-ref-N-1" data-hash-target to="class-monk-N">15</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-monk-ref-O-1" id="class-monk-ref-O-1" data-hash-target to="class-monk-O">16</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-monk-ref-P-1" id="class-monk-ref-P-1" data-hash-target to="class-monk-P">17</InnerLink></sup></p>
<p><strong>Kobold:</strong> Add +1/3 to the monk's AC bonus class ability.<sup><InnerLink showBacklink="backlink-class-monk-ref-Q-1" id="class-monk-ref-Q-1" data-hash-target to="class-monk-Q">18</InnerLink></sup></p>
<p><strong>Locathah:</strong> Add 1/4 point to the monk's ki pool.<sup><InnerLink showBacklink="backlink-class-monk-ref-R-1" id="class-monk-ref-R-1" data-hash-target to="class-monk-R">19</InnerLink></sup></p>
<p><strong>Merfolk:</strong> Add a +1/4 bonus on combat maneuver checks to grapple or trip.<sup><InnerLink showBacklink="backlink-class-monk-ref-S-1" id="class-monk-ref-S-1" data-hash-target to="class-monk-S">20</InnerLink></sup></p>
<p><strong>Nagaji:</strong> Add +1/4 point to the monk's <em>ki</em> pool.<sup><InnerLink showBacklink="backlink-class-monk-ref-T-1" id="class-monk-ref-T-1" data-hash-target to="class-monk-T">21</InnerLink></sup></p>
<p><strong>Oread:</strong> Add +1/3 on critical hit confirmation rolls made with unarmed strikes (maximum bonus of +5). This bonus does not stack with <Link to="/feat/critical_focus">Critical Focus</Link>.<sup><InnerLink showBacklink="backlink-class-monk-ref-U-1" id="class-monk-ref-U-1" data-hash-target to="class-monk-U">22</InnerLink></sup></p>
<p><strong>Ratfolk:</strong> Add +1 feet to the speed the monk can move while making a Stealth check without taking a penalty. This has no effect unless the monk has selected this reward five times (or another increment of five). This does not allow the monk to use Stealth while running or charging.<sup><InnerLink showBacklink="backlink-class-monk-ref-V-1" id="class-monk-ref-V-1" data-hash-target to="class-monk-V">23</InnerLink></sup></p>
<p><strong>Samsaran:</strong> Add a +1/2 bonus on the monk's saving throws to resist death attacks.<sup><InnerLink showBacklink="backlink-class-monk-ref-W-1" id="class-monk-ref-W-1" data-hash-target to="class-monk-W">24</InnerLink></sup></p>
<p><strong>Strix:</strong> Add +1/4 point to the monk's <em>ki</em> pool.<sup><InnerLink showBacklink="backlink-class-monk-ref-X-1" id="class-monk-ref-X-1" data-hash-target to="class-monk-X">25</InnerLink></sup></p>
<p><strong>Suli:</strong> Add +1/2 point of damage to elemental assault.<sup><InnerLink showBacklink="backlink-class-monk-ref-Y-1" id="class-monk-ref-Y-1" data-hash-target to="class-monk-Y">26</InnerLink></sup></p>
<p><strong>Tengu:</strong> Add +1/4 point to the monk's ki pool.<sup><InnerLink showBacklink="backlink-class-monk-ref-Z-1" id="class-monk-ref-Z-1" data-hash-target to="class-monk-Z">27</InnerLink></sup></p>
<p><strong>Undine:</strong> Add +1 to the monk's CMD when resisting a grapple and +1/3 to the number of stunning attacks he can attempt per day.<sup><InnerLink showBacklink="backlink-class-monk-ref-1-1" id="class-monk-ref-1-1" data-hash-target to="class-monk-1">28</InnerLink></sup></p>
<p><strong>Vanara:</strong> Add a +1 bonus on Acrobatics checks made to jump.<sup><InnerLink showBacklink="backlink-class-monk-ref-2-1" id="class-monk-ref-2-1" data-hash-target to="class-monk-2">29</InnerLink></sup></p>
<p><strong>Wayang:</strong> Add 1/6 to the monk's AC bonus.<sup><InnerLink showBacklink="backlink-class-monk-ref-3-1" id="class-monk-ref-3-1" data-hash-target to="class-monk-3">30</InnerLink></sup></p>
</div>
<h3 id="class-monk-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-monk/black_asp">Black Asp</Link></p><p><strong>Modifies or Replaces:</strong> Stunning Fist; Still Mind</p><p>The black asps are a sinister order of monks who train as assassins and infiltrators with no need for weapons to achieve their goals.</p></div>
<div className="archetype"><p><Link to="/arc-monk/brazen_disciple">Brazen Disciple</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; 1st, 6th-level Bonus Feats; Still Mind; Abundant Step; Perfect Self</p><p>Brazen disciples use deception in their fighting style, and many go a step further, incorporating fire and smoke both mundane and magical.</p></div>
<div className="archetype"><p><Link to="/arc-monk/disciple_of_wholeness">Disciple of Wholeness</Link></p><p><strong>Modifies or Replaces:</strong> Ki Pool; Purity of Body; Diamond Body; Diamond Soul</p><p>Disciples of wholeness train to bring themselves and others closer to physical and spiritual perfection.</p></div>
<div className="archetype"><p><Link to="/arc-monk/drunken_master">Drunken Master</Link></p><p><strong>Modifies or Replaces:</strong> Still Mind; Purity of Body; Diamond Body; Diamond Soul; Empty Body</p><p>The drunken master finds perfection through excess.</p></div>
<div className="archetype"><p><Link to="/arc-monk/elemental_monk">Elemental Monk</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Stunning Fist; Bonus Feats; Evasion; Purity of Body; Diamond Body; Ki Pool</p><p>Elemental monks draw inspiration from genies to create their fighting style. Their adaptability and versatility make them capable of serving as emissaries of elemental balance.</p></div>
<div className="archetype"><p><Link to="/arc-monk/far_strike_monk">Far Strike Monk</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; Flurry of Blows; Bonus Feats; Stunning Fist; Still Mind; Purity of Body; Diamond Body</p><p>Far strike monks are masters of thrown weapons, from shuriken to throwing axes to spears.</p></div>
<div className="archetype"><p><Link to="/arc-monk/flowing_monk">Flowing Monk</Link></p><p><strong>Modifies or Replaces:</strong> Stunning Fist; 2nd-level Bonus Feat; Fast Movement; Purity of Body; Diamond Body; Quivering Palm</p><p>The flowing monk is the wind and the river. He knows how the world flows, and forces his enemies to flow with it.</p></div>
<div className="archetype"><p><Link to="/arc-monk/gray_disciple">Gray Disciple</Link></p><p><strong>Modifies or Replaces:</strong> Slow Fall; Still Mind; High Jump; 6th-level Bonus Feat; Wholeness of Body; Abundant Step; Quivering Palm; Tongue of the Sun and Moon; Empty Body</p><p>(Duergar Only) The gray disciple contemplates the inner voice of duergar magic and the silent eternity of stone, mastering these dual mysteries and combining them to deadly effect.</p></div>
<div className="archetype"><p><Link to="/arc-monk/hamatulatsu_master">Hamatulatsu Master</Link></p><p><strong>Modifies or Replaces:</strong> Bonus Feats; Stunning Fist; Ki Pool; Purity of Body</p><p>Once part of the Sisterhood of Eiseth, the Sisterhood of the Golden Erinyes is an order of female monks dedicated to emulating the painful strikes of the barbed devil, leaving targets alive but permanently scarred and broken by pain - a method called hamatulatsu.</p></div>
<div className="archetype"><p><Link to="/arc-monk/harrow_warden">Harrow Warden</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; Stunning Fist; Improved Evasion; Diamond Body; Quivering Palm</p><p>Some who study the mysteries of the harrow do so to restore lost knowledge and pride to the Varisian people. The harrow warden fulfills this role as she seeks to bring her mind and body into alignment, and she protects her people by invoking the folklore that has guided them for so long. In mastering her own place in fate, a harrow warden learns how to misalign the destinies of others.</p></div>
<div className="archetype"><p><Link to="/arc-monk/hellcat">Hellcat</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Class Skills; Weapon Proficiencies; Bonus Feats; Stunning Fist; Fast Movement; Evasion; Purity of Body; Improved Evasion; Slow Fall; Still Mind; Ki Pool; Wholeness of Body; Diamond Body</p><p>Monks of the hellcat sect follow the teachings of Asmodeus or another infernal power.</p></div>
<div className="archetype"><p><Link to="/arc-monk/hungry_ghost_monk">Hungry Ghost Monk</Link></p><p><strong>Modifies or Replaces:</strong> Stunning Fist; Purity of Body; Wholeness of Body; Diamond Body; Diamond Soul</p><p>The hungry ghost monk looks to spirits that prey upon the living as models of perfection.</p></div>
<div className="archetype"><p><Link to="/arc-monk/invested_regent">Invested Regent</Link></p><p><strong>Modifies or Replaces:</strong> 1st-level Bonus Feat</p><p>The invested regent can harness a divine spark to perform superhuman stunts, influence others, and escape injury.</p></div>
<div className="archetype"><p><Link to="/arc-monk/ironskin_monk">Ironskin Monk</Link></p><p><strong>Modifies or Replaces:</strong> Monk's AC; Bonus Feats; Evasion; Ki Pool; High Jump; Fast Movement; Slow Fall; Improved Evasion; Tongue of the Sun and Moon; Perfect Self</p><p>(Hobgoblin Only) Through discipline and training, an ironskin monk hardens his body to withstand punishing blows.</p></div>
<div className="archetype"><p><Link to="/arc-monk/karmic_monk">Karmic Monk</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Class Skills; Stunning Fist; Still Mind; Ki Pool; Improved Evasion; Slow Fall; Perfect Self</p><p>A karmic monk contemplates the myriad harmonies that guide existence. He learns to use the disharmony in others against them, and to alter his own inner harmonies to exploit weaknesses in his opponents' defenses.</p></div>
<div className="archetype"><p><Link to="/arc-monk/kata_master">Kata Master</Link></p><p><strong>Modifies or Replaces:</strong> Stunning Fist; Still Mind; Ki Pool; Wholeness of Body; Quivering Palm</p><p>The kata master takes the visual aspect of his martial art to its logical extreme, harnessing her flowing movements and skilled maneuvers as a psychological weapon against her enemies.</p></div>
<div className="archetype"><p><Link to="/arc-monk/ki_mystic">Ki Mystic</Link></p><p><strong>Modifies or Replaces:</strong> Still Mind; Purity of Body; Diamond Body; Diamond Soul; Empty Body</p><p>The ki mystic believes that violence is sometimes necessary, but knowing and understanding is the true root of perfection.</p></div>
<div className="archetype"><p><Link to="/arc-monk/lifting_hand">Lifting Hand</Link></p><p><strong>Modifies or Replaces:</strong> Stunning Fist; Bonus Feats; Abundant Step</p><p>When facing a master of the lifting hand, an enemy is likely to find itself sailing through the air or locked in a tortuous compliance hold.</p></div>
<div className="archetype"><p><Link to="/arc-monk/maneuver_master">Maneuver Master</Link></p><p><strong>Modifies or Replaces:</strong> Flurry of Blows; Still Mind; Slow Fall; Purity of Body; Diamond Body; Quivering Palm</p><p>The maneuver master specializes in more complicated moves than simple damage-dealing strikes.</p></div>
<div className="archetype"><p><Link to="/arc-monk/martial_artist">Martial Artist</Link></p><p><strong>Modifies or Replaces:</strong> Still Mind; Slow Fall; Ki Pool; Purity of Body; Diamond Body; Perfect Self; Wholeness of Body; Timeless Body; Tongue of Sun and Moon; Abundant Step; Diamond Soul; Empty Body</p><p>The martial artist pursues a mastery of pure martial arts without the monastic traditions. He is a master of form, but lacks the ability to harness his ki.</p></div>
<div className="archetype"><p><Link to="/arc-monk/master_of_many_styles">Master of Many Styles</Link></p><p><strong>Modifies or Replaces:</strong> Bonus Feats; Flurry of Blows; Perfect Self</p><p>The master of many styles is a collector. For every move, he seeks a counter. For every style, he has a riposte.</p></div>
<div className="archetype"><p><Link to="/arc-monk/menhir_guardian">Menhir Guardian</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Weapon/Armor Proficiencies; Unarmed Strike; Ki Pool; Flurry of Blows; Stunning Fist; High Jump; Quivering Palm</p><p>Menhir guardians are ascetic protectors of sacred druidic sites, less concerned with structure and maintaining internal order than they are with preserving the natural balance of the world.</p></div>
<div className="archetype"><p><Link to="/arc-monk/monk_of_the_empty_hand">Monk of the Empty Hand</Link></p><p><strong>Modifies or Replaces:</strong> Monk Weapon Proficiencies; Still Mind; Purity of Body; Diamond Body</p><p>The monk of the empty hand eschews normal weapons in favor of whatever is lying around - rocks, chair legs, flagons of ale, even a simple quill pen all become deadly weapons in the hands of such a monk.</p></div>
<div className="archetype"><p><Link to="/arc-monk/monk_of_the_four_winds">Monk of the Four Winds</Link></p><p><strong>Modifies or Replaces:</strong> Stunning Fist; Abundant Step; Timeless Body; Perfect Self</p><p>The monk of the four winds is connected to the natural world in a way few other creatures - even other monks - can hope to match.</p></div>
<div className="archetype"><p><Link to="/arc-monk/monk_of_the_healing_hand">Monk of the Healing Hand</Link></p><p><strong>Modifies or Replaces:</strong> Wholeness of Body; Diamond Body; Quivering Palm; Perfect Self</p><p>Monks of the healing hand seek perfection through helping others.</p></div>
<div className="archetype"><p><Link to="/arc-monk/monk_of_the_lotus">Monk of the Lotus</Link></p><p><strong>Modifies or Replaces:</strong> Stunning Fist; Abundant Step; Quivering Palm; Tongue of the Sun and the Moon</p><p>While a monk of the lotus realizes that combat cannot always be avoided - and is more than capable in a fight - he understands that all creatures are connected, and to harm another is to harm the self.</p></div>
<div className="archetype"><p><Link to="/arc-monk/monk_of_the_mantis">Monk of the Mantis</Link></p><p><strong>Modifies or Replaces:</strong> 2nd, 6th, 10th, 14th, and 18th-level Bonus Feats; Wholeness of Body; Diamond Body; Diamond Soul; Quivering Palm</p><p>A body contains many points where the flesh, mind, and spirit coincide. A monk of the mantis is skilled at manipulating these points.</p></div>
<div className="archetype"><p><Link to="/arc-monk/monk_of_the_sacred_mountain">Monk of the Sacred Mountain</Link></p><p><strong>Modifies or Replaces:</strong> Evasion; Slow Fall; High Jump; Improved Evasion; Tongue of the Sun and the Moon</p><p>The monk of the sacred mountain finds strength and power in the earth beneath his feet.</p></div>
<div className="archetype"><p><Link to="/arc-monk/monk_of_the_seven_forms">Monk of the Seven Forms</Link></p><p><strong>Modifies or Replaces:</strong> Bonus Feats; Stunning Fist; Maneuver Training; Abundant Step; Quivering Palm</p><p>In their place, the monks of the isolated sanctuary now teach a style featuring lightning-fast strikes that mimic both dervish dances and the searing winds of the arid desert, favoring mobility and endurance.</p></div>
<div className="archetype"><p><Link to="/arc-monk/nimble_guardian">Nimble Guardian</Link></p><p><strong>Modifies or Replaces:</strong> Evasion; Still Mind; Purity of Body; Wholeness of Body; Improved Evasion</p><p>(Catfolk Only) Some catfolk monks dedicate their graceful prowess to the defense of others, especially those dedicated to a similar ethos or who prove themselves as stalwart allies of the monk's cause.</p></div>
<div className="archetype"><p><Link to="/arc-monk/nornkith">Nornkith</Link></p><p><strong>Modifies or Replaces:</strong> Key Ability Score; Stunning Fist; 1st-, 10th-level Bonus Feat; Purity of Body; Diamond Soul; Quivering Palm; Empty Body; Perfect Self</p><p>Nornkith hone their bodies and minds to follow the branching threefold paths of fate.</p></div>
<div className="archetype"><p><Link to="/arc-monk/ouat">Ouat</Link></p><p><strong>Modifies or Replaces:</strong> Greed, Hatred, Defensive Training, Stonecunning, Weapon Familiarity (Dwarven Racial Traits); Stunning Fist; Wholeness of Body</p><p>(Dwarf Only) The ascetic, desert-dwelling dwarves known as the Ouat have eschewed dwarven traditions, whose unchanging rigidity, they believe, shackles their people to the past and inhibits self-improvement.</p></div>
<div className="archetype"><p><Link to="/arc-monk/perfect_scholar">Perfect Scholar</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Still Mind; Slow Fall; Tongue of the Sun and Moon; Perfect Self</p><p>Perfect scholars, often worshipers of Irori, hone their minds and bodies through the accumulation of knowledge</p></div>
<div className="archetype"><p><Link to="/arc-monk/qinggong_monk">Qinggong Monk</Link></p><p><strong>Modifies or Replaces:</strong> Slow Fall; High Jump; Wholeness of Body; Diamond Body; Abundant Step; Diamond Soul; Quivering Palm; Timeless Body; Tongue of the Sun and Moon; Empty Body; Perfect Self</p><p>The qinggong monk is a master of her ki, using it to perform superhuman stunts or even blast opponents with supernatural energy.</p></div>
<div className="archetype"><p><Link to="/arc-monk/sage_counselor">Sage Counselor</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; 1st, 2nd, 6th, 10th-level Bonus Feat; Ki Pool</p><p>Sage counselors are ascetics and mystics who leave the confines of the monastery walls to advise secular people about spiritual truths and to seek knowledge of the outside world.</p></div>
<div className="archetype"><p><Link to="/arc-monk/scaled_fist">Scaled Fist</Link></p><p><strong>Modifies or Replaces:</strong> Bonus Feats; Still Mind; Maneuver Training; Quivering Palm</p><p>Scaled fists eschew passive introspection in favor of unshakable confidence. Steeped in traditions that trace their origins to the warrior-monks who trained under the tutelage of draconic masters in Tian Xia, scaled fists eschew passive introspection in favor of unshakable confidence. Scaled fists learn to combine brutal intimidation with the brazen ferocity of an ancient wyrm to devastate their foes.</p></div>
<div className="archetype"><p><Link to="/arc-monk/scarred_monk">Scarred Monk</Link></p><p><strong>Modifies or Replaces:</strong> Ki Pool; High Jump; Wholeness of Body; Abundant Step; Empty Body</p><p>For monks who seek the truth hidden in pain, the practice of mortifications of the flesh helps to achieve enlightenment and acquire disturbing powers.</p></div>
<div className="archetype"><p><Link to="/arc-monk/sensei">Sensei</Link></p><p><strong>Modifies or Replaces:</strong> Flurry of Blows; Fast Movement; Improved Evasion; Evasion; 2nd, 6th, 12th, 18th-level Bonus Feats</p><p>The sensei is a revered teacher who imparts lessons on the oneness of mind, body, and spirit, along with occasional correction that is subtle and swift.</p></div>
<div className="archetype"><p><Link to="/arc-monk/serpent_fire_adept">Serpent-Fire Adept</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Stunning Fist; 1st, 2nd, 6th, 10th, 14th, and 18th-level Bonus Feats; Slow Fall; High Jump; Wholeness of Body</p><p>A serpent-fire adept embraces the secrets of her chakras and mastery of their energetic flow.</p></div>
<div className="archetype"><p><Link to="/arc-monk/sin_monk">Sin Monk</Link></p><p><strong>Modifies or Replaces:</strong> Ki Pool; High Jump; Wholeness of Body; Abundant Step; Empty Body; Perfect Self</p><p>(Ex-monk archetype) Martial experts who have allowed such passions to lead them astray may find themselves gaining powers drawn from their newly embraced sins.</p></div>
<div className="archetype"><p><Link to="/arc-monk/softstrike_monk">Softstrike Monk</Link></p><p><strong>Modifies or Replaces:</strong> Weapon Proficiency; Unarmed Strike; 6th, 10th-level Bonus Feats; Wholeness of Body; Quivering Palm; Empty Body</p><p>Softstrike monks employ a nonlethal but effective form of combat.</p></div>
<div className="archetype"><p><Link to="/arc-monk/sohei">Sohei</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; Stunning Fist; Fast Movement; Increased Unarmed Damage; Slow Fall; Abundant Step; Purity of Body; Diamond Body; Quivering Palm; Timeless Body; Tongue of Sun and Moon</p><p>The sohei are masters of the horse and the hunt.</p></div>
<div className="archetype"><p><Link to="/arc-monk/soul_shepherd">Soul Shepherd</Link></p><p><strong>Modifies or Replaces:</strong> Stunning Fist; Evasion; Improved Evasion; Abundant Step; Quivering Palm</p><p>Whether studying at the feet of psychopomps or merely imitating the creatures' philosophy and methods, soul shepherds believe in safeguarding the Cycle of Souls.</p></div>
<div className="archetype"><p><Link to="/arc-monk/spirit_master">Spirit Master</Link></p><p><strong>Modifies or Replaces:</strong> Still Mind; Maneuver Training; Purity of Body; Wholeness of Body; Quivering Palm; Empty Body; Perfect Self</p><p>Spirit masters are monks who specialize in combating the undead, laying their corpses to rest, and sending their souls to final judgment.</p></div>
<div className="archetype"><p><Link to="/arc-monk/student_of_stone">Student of Stone</Link></p><p><strong>Modifies or Replaces:</strong> Evasion; Fast Movement; Bonus Feat; High Jump; Improved Evasion; Abundant Step</p><p>(Oread Only) By following the path of the stone, students of stone give up much of monks' mobility in favor of sheer resilience.</p></div>
<div className="archetype"><p><Link to="/arc-monk/terra_cotta_monk">Terra-Cotta Monk</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Evasion; High Jump; Improved Evasion; Abundant Step; Quivering Palm; Empty Body</p><p>Possessing a natural affinity for all things earthen, terracotta monks are experts at turning the stone around them against their enemies.</p></div>
<div className="archetype"><p><Link to="/arc-monk/tetori">Tetori</Link></p><p><strong>Modifies or Replaces:</strong> Bonus Feats; Flurry of Blows; Slow Fall; High Jump; Abundant Step; Improved Evasion; Timeless Body; Tongue of Sun and Moon; Diamond Soul; Empty Body</p><p>The style of the tetori is that of the majestic wrestler - a warrior with a dizzying array of grabs, holds, and locks with which to bewilder and incapacitate his foes.</p></div>
<div className="archetype"><p><Link to="/arc-monk/treetop_monk">Treetop Monk</Link></p><p><strong>Modifies or Replaces:</strong> Still Mind; Purity of Body; Abundant Step</p><p>(Vanara Only) While many vanaras follow traditional monastic training and traditions, others learn to blend exotic combat and the mysterious forces of ki with the natural world, allowing them to move through trees and overgrowth to deliver devastating attacks.</p></div>
<div className="archetype"><p><Link to="/arc-monk/underfoot_adept">Underfoot Adept</Link></p><p><strong>Modifies or Replaces:</strong> 1st-level Bonus Feat; Stunning Fist; High Jump</p><p>(Halfling Only) An underfoot adept turns his diminutive stature and unorthodox footwork into a powerful weapon.</p></div>
<div className="archetype"><p><Link to="/arc-monk/wanderer">Wanderer</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; 1st-level Bonus Feat; Still Mind; Slow Fall; High Jump; Wholeness of Body; Abundant Step; Diamond Soul</p><p>(Human Only) Some monks wander the world in humility to learn and to share wisdom and philosophy from their teachers with those they meet, often aiding those who are in need.</p></div>
<div className="archetype"><p><Link to="/arc-monk/wasteland_meditant">Wasteland Meditant</Link></p><p><strong>Modifies or Replaces:</strong> Stunning Fist; Evasion; Slow Fall; Improved Evasion; Quivering Palm</p><p>Some monks journey to remote and isolated corners of the world to find serenity and a heightened sense of awareness.</p></div>
<div className="archetype"><p><Link to="/arc-monk/water_dancer">Water Dancer</Link></p><p><strong>Modifies or Replaces:</strong> Flurry of Blows; Stunning Fist; Quivering Palm; 1st, 2nd, 6th, 10th, 14th, and 18th-level Bonus Feats; Unarmed Strike; Evasion; Slow Fall; Improved Evasion; Abundant Step</p><p>Water dancers derive their martial training from ancient nereid traditions jealously guarded by these enigmatic fey.</p></div>
<div className="archetype"><p><Link to="/arc-monk/weapon_adept">Weapon Adept</Link></p><p><strong>Modifies or Replaces:</strong> Stunning Fist; Evasion; Improved Evasion; Timeless Body; Perfect Self</p><p>While all monks train in both unarmed combat and with weapons, the weapon adept seeks to become one with his weapons, transforming them into perfect extensions of his own body.</p></div>
<div className="archetype"><p><Link to="/arc-monk/wildcat">Wildcat</Link></p><p><strong>Modifies or Replaces:</strong> Still Mind; Ki Pool; High Jump; Slow Fall; Improved Evasion; Abundant Step; Diamond Soul; Empty Body</p><p>A wildcat is a student of the school of hard knocks, who dedicates himself to learning how to take down foes by any means necessary.</p></div>
<div className="archetype"><p><Link to="/arc-monk/windstep_master">Windstep Master</Link></p><p><strong>Modifies or Replaces:</strong> Stunning Fist; Slow Fall; Ki Pool</p><p>Most monks are agile and fleet of foot, but few can rival a windstep master's lightness of step.</p></div>
<div className="archetype"><p><Link to="/arc-monk/zen_archer">Zen Archer</Link></p><p><strong>Modifies or Replaces:</strong> Stunning Fist; Ki Pool; Evasion; Maneuver Training; Still Mind; Purity of Body; Improved Evasion; Diamond Body; Tongue of the Sun and the Moon</p><p>The zen archer takes a weapon most other monks eschew and seeks perfection in the pull of a taut bowstring, the flex of a bow's limbs, and the flight of an arrow fired true.</p></div>
<h3 id="class-monk-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"monk archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Abundant Step"},{"header":"Alignment"},{"header":"Bonus Feats"},{"header":"1st-level Bonus Feat"},{"header":"2nd-level Bonus Feat"},{"header":"6th-level Bonus Feat"},{"header":"10th-level Bonus Feat"},{"header":"12th-level Bonus Feat"},{"header":"14th-level Bonus Feat"},{"header":"18th-level Bonus Feat"},{"header":"Class Skills"},{"header":"Diamond Body"},{"header":"Diamond Soul"},{"header":"Empty Body"},{"header":"Evasion"},{"header":"Improved Evasion"},{"header":"Fast Movement"},{"header":"Flurry of Blows"},{"header":"High Jump"},{"header":"Key Ability Score"},{"header":"Ki Pool"},{"header":"Maneuver Training"},{"header":"Monk's AC"},{"header":"Perfect Self"},{"header":"Purity of Body"},{"header":"Quivering Palm"},{"header":"Slow Fall"},{"header":"Still Mind"},{"header":"Stunning Fist"},{"header":"Timeless Body"},{"header":"Tongue of the Sun and Moon"},{"header":"Unarmed Strike"},{"header":"Weapon Proficiency"},{"header":"Weapon/Armor Proficiency"},{"header":"Wholeness of Body"}],"data":[["‹arc-monk/Black Asp›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null],["‹arc-monk/Brazen Disciple›","X",null,null,"X",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null],["‹arc-monk/Disciple of Wholeness›",null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-monk/Drunken Master›",null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null],["‹arc-monk/Elemental Monk›",null,"X","X",null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,"X",null,null,null,"X",null,null,null,"X",null,null,null,null,null,null],["‹arc-monk/Far Strike Monk›",null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,"X","X",null,null,null,null,"X",null],["‹arc-monk/Flowing Monk›",null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,"X","X",null,null,"X",null,null,null,null,null,null],["‹arc-monk/Gray Disciple›","X",null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,"X","X","X",null,null,"X",null,null,null,"X"],["‹arc-monk/Hamatulatsu Master›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,"X",null,null,null,null,null,null],["‹arc-monk/Harrow Warden›",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,"X",null],["‹arc-monk/Hellcat›",null,"X","X",null,null,null,null,null,null,null,"X","X",null,null,"X","X","X",null,null,null,"X",null,null,null,"X",null,"X","X","X",null,null,null,"X",null,"X"],["‹arc-monk/Hungry Ghost Monk›",null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,"X"],["‹arc-monk/Invested Regent›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-monk/Ironskin Monk›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,"X",null,"X",null,"X","X",null,null,"X",null,null,null,"X",null,null,null,null],["‹arc-monk/Karmic Monk›",null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,"X",null,null,"X",null,null,"X","X","X",null,null,null,null,null,null],["‹arc-monk/Kata Master›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,"X","X",null,null,null,null,null,"X"],["‹arc-monk/Ki Mystic›",null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null],["‹arc-monk/Lifting Hand›","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-monk/Maneuver Master›",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,"X","X","X","X",null,null,null,null,null,null,null],["‹arc-monk/Martial Artist›","X",null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null,"X",null,null,"X","X",null,"X","X",null,"X","X",null,null,null,"X"],["‹arc-monk/Master of Many Styles›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null],["‹arc-monk/Menhir Guardian›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,"X",null,null,null,null,"X",null,null,"X",null,null,"X",null,"X",null],["‹arc-monk/Monk of the Empty Hand›",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,"X",null,null],["‹arc-monk/Monk of the Four Winds›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X",null,null,null,null,null],["‹arc-monk/Monk of the Healing Hand›",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,"X"],["‹arc-monk/Monk of the Lotus›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,"X",null,null,null,null],["‹arc-monk/Monk of the Mantis›",null,null,null,null,"X","X","X",null,"X","X",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X"],["‹arc-monk/Monk of the Sacred Mountain›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,"X",null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null],["‹arc-monk/Monk of the Seven Forms›","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,"X",null,null,null,null,null,null],["‹arc-monk/Nimble Guardian›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,"X"],["‹arc-monk/Nornkith›",null,null,null,"X",null,null,"X",null,null,null,null,null,"X","X",null,null,null,null,null,"X",null,null,null,"X","X","X",null,null,"X",null,null,null,null,null,null],["‹arc-monk/Ouat›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X"],["‹arc-monk/Perfect Scholar›",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X","X",null,null,"X",null,null,null,null],["‹arc-monk/Qinggong Monk›","X",null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,"X",null,null,null,null,"X",null,"X","X",null,null,"X","X",null,null,null,"X"],["‹arc-monk/Sage Counselor›",null,null,null,"X","X","X","X",null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-monk/Scaled Fist›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,"X",null,null,null,null,null,null,null],["‹arc-monk/Scarred Monk›","X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X"],["‹arc-monk/Sensei›",null,null,null,null,"X","X",null,"X",null,"X",null,null,null,null,"X","X","X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-monk/Serpent-Fire Adept›",null,null,null,"X","X","X","X",null,"X","X","X",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,"X"],["‹arc-monk/Sin Monk›","X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,"X"],["‹arc-monk/Softstrike Monk›",null,null,null,null,null,"X","X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X",null,"X"],["‹arc-monk/Sohei›","X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,"X","X","X",null,"X","X","X","X",null,"X",null],["‹arc-monk/Soul Shepherd›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null],["‹arc-monk/Spirit Master›",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,"X","X","X",null,"X",null,null,null,null,null,null,"X"],["‹arc-monk/Student of Stone›","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-monk/Terra-Cotta Monk›","X",null,null,null,null,null,null,null,null,null,"X",null,null,"X","X","X",null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-monk/Tetori›","X",null,"X",null,null,null,null,null,null,null,null,null,"X","X",null,"X",null,"X","X",null,null,null,null,null,null,null,"X",null,null,"X","X",null,null,null,null],["‹arc-monk/Treetop Monk›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null],["‹arc-monk/Underfoot Adept›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-monk/Wanderer›","X",null,null,"X",null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,"X"],["‹arc-monk/Wasteland Meditant›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,"X","X",null,"X",null,null,null,null,null,null],["‹arc-monk/Water Dancer›","X",null,null,"X","X","X","X",null,"X","X",null,null,null,null,"X","X",null,"X",null,null,null,null,null,null,null,"X","X",null,"X",null,null,"X",null,null,null],["‹arc-monk/Weapon Adept›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,"X",null,null,null,null,"X","X",null,null,null,null,null],["‹arc-monk/Wildcat›","X",null,null,null,null,null,null,null,null,null,null,null,"X","X",null,"X",null,null,"X",null,"X",null,null,null,null,null,"X","X",null,null,null,null,null,null,null],["‹arc-monk/Windstep Master›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,"X",null,null,null,null,null,null],["‹arc-monk/Zen Archer›",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X","X",null,null,null,null,null,"X",null,null,"X",null,null,"X","X",null,"X",null,null,null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-monk-label">Footnotes</h3>
<ol>
<li id="class-monk-Ex">
<p>Also see the <Link to="/arc-monk/sin_monk">Sin Monk</Link> archetype for more options. <InnerLink id="backlink-class-monk-ref-Ex-1" data-hash-target to="class-monk-ref-Ex-1" aria-label="Back to reference Ex-1">↩</InnerLink></p>
</li>
<li id="class-monk-A">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 4</Link> <InnerLink id="backlink-class-monk-ref-A-1" data-hash-target to="class-monk-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-monk-B">
<p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 17</Link> <InnerLink id="backlink-class-monk-ref-B-1" data-hash-target to="class-monk-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-monk-C">
<p><Link to="/source/advanced_race_guide">Advanced Race Guide pg. 13</Link> <InnerLink id="backlink-class-monk-ref-C-1" data-hash-target to="class-monk-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-monk-D">
<p>Advanced Race Guide pg. 23 <InnerLink id="backlink-class-monk-ref-D-1" data-hash-target to="class-monk-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-monk-E">
<p><Link to="/source/blood_of_shadows">Blood of Shadows pg. 7</Link> <InnerLink id="backlink-class-monk-ref-E-1" data-hash-target to="class-monk-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-monk-F">
<p><Link to="/source/blood_of_the_sea">Blood of the Sea pg. 9</Link> <InnerLink id="backlink-class-monk-ref-F-1" data-hash-target to="class-monk-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-monk-G">
<p>Advanced Race Guide pg. 33 <InnerLink id="backlink-class-monk-ref-G-1" data-hash-target to="class-monk-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-monk-H">
<p>Advanced Race Guide pg. 43 <InnerLink id="backlink-class-monk-ref-H-1" data-hash-target to="class-monk-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-monk-I">
<p>Advanced Race Guide pg. 63 <InnerLink id="backlink-class-monk-ref-I-1" data-hash-target to="class-monk-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-monk-J">
<p><Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 21</Link> <InnerLink id="backlink-class-monk-ref-J-1" data-hash-target to="class-monk-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
<li id="class-monk-K">
<p><Link to="/source/horror_adventures">Horror Adventures pg. 41</Link> <InnerLink id="backlink-class-monk-ref-K-1" data-hash-target to="class-monk-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
<li id="class-monk-L">
<p>Advanced Race Guide pg. 53 <InnerLink id="backlink-class-monk-ref-L-1" data-hash-target to="class-monk-ref-L-1" aria-label="Back to reference L-1">↩</InnerLink></p>
</li>
<li id="class-monk-M">
<p>Advanced Race Guide pg. 121 <InnerLink id="backlink-class-monk-ref-M-1" data-hash-target to="class-monk-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink></p>
</li>
<li id="class-monk-N">
<p>Advanced Race Guide pg. 73 <InnerLink id="backlink-class-monk-ref-N-1" data-hash-target to="class-monk-ref-N-1" aria-label="Back to reference N-1">↩</InnerLink></p>
</li>
<li id="class-monk-O">
<p>Advanced Player's Guide pg. 23 <InnerLink id="backlink-class-monk-ref-O-1" data-hash-target to="class-monk-ref-O-1" aria-label="Back to reference O-1">↩</InnerLink></p>
</li>
<li id="class-monk-P">
<p>Blood of the Beast pg. 12 <InnerLink id="backlink-class-monk-ref-P-1" data-hash-target to="class-monk-ref-P-1" aria-label="Back to reference P-1">↩</InnerLink></p>
</li>
<li id="class-monk-Q">
<p>Advanced Race Guide pg. 133 <InnerLink id="backlink-class-monk-ref-Q-1" data-hash-target to="class-monk-ref-Q-1" aria-label="Back to reference Q-1">↩</InnerLink></p>
</li>
<li id="class-monk-R">
<p>Blood of the Sea pg. 11 <InnerLink id="backlink-class-monk-ref-R-1" data-hash-target to="class-monk-ref-R-1" aria-label="Back to reference R-1">↩</InnerLink></p>
</li>
<li id="class-monk-S">
<p>Blood of the Sea pg. 13 <InnerLink id="backlink-class-monk-ref-S-1" data-hash-target to="class-monk-ref-S-1" aria-label="Back to reference S-1">↩</InnerLink></p>
</li>
<li id="class-monk-T">
<p>Advanced Race Guide pg. 196 <InnerLink id="backlink-class-monk-ref-T-1" data-hash-target to="class-monk-ref-T-1" aria-label="Back to reference T-1">↩</InnerLink></p>
</li>
<li id="class-monk-U">
<p>Advanced Race Guide pg. 145 <InnerLink id="backlink-class-monk-ref-U-1" data-hash-target to="class-monk-ref-U-1" aria-label="Back to reference U-1">↩</InnerLink></p>
</li>
<li id="class-monk-V">
<p>Advanced Race Guide pg. 151 <InnerLink id="backlink-class-monk-ref-V-1" data-hash-target to="class-monk-ref-V-1" aria-label="Back to reference V-1">↩</InnerLink></p>
</li>
<li id="class-monk-W">
<p>Advanced Race Guide pg. 198 <InnerLink id="backlink-class-monk-ref-W-1" data-hash-target to="class-monk-ref-W-1" aria-label="Back to reference W-1">↩</InnerLink></p>
</li>
<li id="class-monk-X">
<p>Advanced Race Guide pg. 200 <InnerLink id="backlink-class-monk-ref-X-1" data-hash-target to="class-monk-ref-X-1" aria-label="Back to reference X-1">↩</InnerLink></p>
</li>
<li id="class-monk-Y">
<p>Advanced Race Guide pg. 203 <InnerLink id="backlink-class-monk-ref-Y-1" data-hash-target to="class-monk-ref-Y-1" aria-label="Back to reference Y-1">↩</InnerLink></p>
</li>
<li id="class-monk-Z">
<p>Advanced Race Guide pg. 163 <InnerLink id="backlink-class-monk-ref-Z-1" data-hash-target to="class-monk-ref-Z-1" aria-label="Back to reference Z-1">↩</InnerLink></p>
</li>
<li id="class-monk-1">
<p>Advanced Race Guide pg. 176 <InnerLink id="backlink-class-monk-ref-1-1" data-hash-target to="class-monk-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="class-monk-2">
<p>Advanced Race Guide pg. 206 <InnerLink id="backlink-class-monk-ref-2-1" data-hash-target to="class-monk-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="class-monk-3">
<p>Blood of Shadows pg. 11 <InnerLink id="backlink-class-monk-ref-3-1" data-hash-target to="class-monk-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
export default {cavalier:_cavalier,cleric:_cleric,druid:_druid,monk:_monk}