import {IonRippleEffect} from '@ionic/react';
import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _optional_skill_changes = {title: "Optional Skill/Feat Changes", subtopics: ["alternate_crafting_rules","alternate_profession_rules","background_skills","consolidated_skills","grouped_skills","skill_unlocks","the_elephant_in_the_room"], jsx: <><p>These topics cover optional rules that change the way skills work.</p>
</>};
const _alternate_crafting_rules = {title: "Alternate Crafting Rules", parent_topics: ["optional_skill_changes"], siblings: ["alternate_crafting_rules","alternate_profession_rules","background_skills","consolidated_skills","grouped_skills","skill_unlocks","the_elephant_in_the_room"], subtopics: ["item_crafting_difficulties","supervising_helpers","workshop","special_raw_materials"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 72</Link></p>
<p>While the rules for crafting in the Core Rulebook are perfectly suitable for the needs of most campaigns, they can sometimes be cumbersome to use. Those rules assume that a character spends a full week crafting an item. They also involve complex multiplication to determine the degree of success and speed with which the item can be crafted. Not only are these rules significantly different from those for other skill checks, but they can slow down play at the table and give rise to strange circumstances where it takes an unreasonably long time to create relatively simple items that happen to have a high gold piece cost. Furthermore, while the system features rules for attempting daily checks, these rules can be cumbersome for players.</p>
<p>The following system presents crafting rules that are a little easier to use, especially in conjunction with the <Link to="/rule/downtime">downtime system</Link>.</p>
<p>With this alternative system, use the following version of the Craft skill instead of the one presented in the Core Rulebook.</p>
<h3 id="rule-alternate_crafting_rules-craft-int">Craft (Int)</h3>
<p>You are skilled in the creation of a specific group of items, such as armor or weapons. Like Knowledge, Perform, and Profession, Craft is actually a number of separate skills. You could have several Craft skills, each with its own ranks. The most common Craft skills are alchemy, armor, baskets, books, bows, calligraphy, carpentry, cloth, clothing, glass, jewelry, leather, locks, paintings, pottery, sculptures, ships, shoes, stonemasonry, traps, and weapons.</p>
<p>A Craft skill is specifically focused on creating something. If an endeavor does not result in a created product, it probably falls under the heading of a Profession skill.</p>
<p><strong className="hl">Check:</strong> You can practice your trade and make a decent living, earning your check result in silver pieces per day. You know how to use the tools of your trade, how to perform the craft's daily tasks, how to supervise untrained helpers, and how to handle common problems. (Untrained laborers and assistants earn an average of 1 silver piece per day.)</p>
<p>The basic function of the Craft skill, however, is to make an item of the appropriate type. Most items created with a Craft skill fall into one of several broad categories of complexity. Others have Craft DCs based on CR (in the case of traps) or on the Fortitude saves required to avoid or minimize their effects (in the case of poisons).</p>
<p>Before crafting an item, you must have tools and an appropriate workshop or area. If you don't have access to artisan tools, you can still attempt a Craft check, but you take a -2 penalty when attempting a check without such tools or with improvised tools. If you have masterwork artisan tools, you gain a +2 circumstance bonus on the skill check.</p>
<p>After you have a suitable area to craft and you've gathered your tools, you must then acquire raw materials whose value is equal to 1/4 the cost of the item or items you wish to craft. Given the necessary tools, materials, and workspace, you can attempt a Craft check of the appropriate DC each day. If you succeed, you make an amount of progress equal to the silver piece or gold piece value listed in the appropriate entry in the Base Progress per Day column of Table 2-4: Crafting DCs and Progress Values. If you exceed the DC by at least 5, your progress doubles. If you exceed the DC by at least 10, your progress triples, if you exceed it by at least 15, you quadruple your progress, and so on. When your total progress equals the cost of the item, that item is completed. Any remaining progress can be applied to a similar item; otherwise, all excess progress is lost.</p>
<p>If you fail the check, no progress is made that day. If you fail the check by 5 or more, you waste an amount of your raw materials equal to the item's base progress per day, up to a maximum of the initial cost of the raw materials. Such wasted material must be replenished before you can continue crafting the item.</p>
<p><strong className="hl">Setting Aside Crafting Items:</strong> As long as you can store an item in a secure and safe place, you can set aside an item that you began crafting and return to it again later with little or no effect. Your GM may rule that this is not possible, especially in the case of volatile alchemical items or perishable goods.</p>
<p><strong className="hl">Crafting Masterwork and Special Material Items:</strong> When you're crafting a masterwork item or an item made of a special material, its crafting difficulty increases by one step. For example, a longsword (which has a base difficulty of normal) is considered a complex item when crafted as a masterwork item (DC 20; 4 gp base progress per day). In the case of items crafted from special materials that also count as masterwork (such as adamantine armor and weapons), the complexity of the item increases by two steps.</p>
<p><strong className="hl">Repairing Items:</strong> You can use the appropriate Craft skill to repair items of that type. Repairing an item with the broken condition or that has taken damage (or both) requires tools and a work area, and you must pay 1/10 the item's cost in raw materials. Repairing an item has the same DC as crafting the item, but takes an amount of time based on the item's complexity. Extremely simple items take an hour to repair. Simple and normal items take 1d4 hours to repair. Complex and intricate items take a day to repair, and all other items take 1d4 days to repair.</p>
<h3 id="rule-alternate_crafting_rules-table-2-4-crafting-dcs-and-progress-values">Table 2-4: Crafting DCs and Progress Values</h3>
<ScrollContainer id="rule-alternate_crafting_rules--table-0"><table>
<thead>
<tr>
<th>Crafting Difficulty</th>
<th>Craft DC</th>
<th>Base Progress per Day</th>
</tr>
</thead>
<tbody><tr>
<td>Extremely simple</td>
<td>DC 5</td>
<td>5 sp</td>
</tr>
<tr>
<td>Simple</td>
<td>DC 10</td>
<td>1 gp</td>
</tr>
<tr>
<td>Normal</td>
<td>DC 15</td>
<td>2 gp</td>
</tr>
<tr>
<td>Complex</td>
<td>DC 20</td>
<td>4 gp</td>
</tr>
<tr>
<td>Intricate</td>
<td>DC 25</td>
<td>8 gp</td>
</tr>
<tr>
<td>Very intricate</td>
<td>DC 30</td>
<td>16 gp</td>
</tr>
<tr>
<td>Extremely intricate</td>
<td>DC 35</td>
<td>32 gp</td>
</tr>
<tr>
<td>Poisons</td>
<td>DC = the Fortitude DC of the poison</td>
<td>32 gp</td>
</tr>
<tr>
<td>Traps</td>
<td>Based on complexity, see text</td>
<td>32 gp</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _item_crafting_difficulties = {title: "Item Crafting Difficulties", parent_topics: ["optional_skill_changes","alternate_crafting_rules"], siblings: ["item_crafting_difficulties","supervising_helpers","workshop","special_raw_materials"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 73</Link></p>
<p>The following are the categories of crafting difficulties and the items within those categories. The items are split into general categories.</p>
<ul>
<li>Alchemical items and poisons require Craft (alchemy) checks.</li>
<li>Armor and shields require Craft (armor) checks.</li>
<li>Weapons require Craft (weapons) checks for melee weapons, thrown weapons, non-siege firearms, crossbows, or crossbow bolts; Craft (bows) checks for bows or arrows; Craft (alchemy) checks for firearm ammunition; and Craft (siege engines) checks for all forms of siege engines.</li>
<li>The Craft checks for mundane items depend on the item being crafted, with the most common ones being baskets, books, calligraphy, carpentry, cloth, clothing, glass, jewelry, leather, locks, paintings, pottery, sculptures, shoes, and stonemasonry.</li>
<li>Crafting vehicles requires Craft (carpentry) for most land-based vehicles, Craft (ships) for seaborne vessels and airships, and Craft (alchemy) for alchemical dragons and steam giants.</li>
<li>Crafting traps requires Craft (traps).</li>
</ul>
<h3 id="rule-item_crafting_difficulties-extremely-simple-dc-5">Extremely Simple (DC 5)</h3>
<p><strong className="hl">Alchemical Items:</strong> Casting plaster.</p>
<p><strong className="hl">Mundane Items:</strong> Very simple items such as wooden spoons, other carved one-piece items.</p>
<p><strong className="hl">Weapons:</strong> Manufactured clubs, quarterstaffs, slings.</p>
<h3 id="rule-item_crafting_difficulties-simple-dc-10">Simple (DC 10)</h3>
<p><strong className="hl">Alchemical Items:</strong> Light detector.</p>
<p><strong className="hl">Armor:</strong> Light armor, wooden shields.</p>
<p><strong className="hl">Mundane Items:</strong> Typical household items such as iron pots.</p>
<p><strong className="hl">Vehicles:</strong> Cart, raft.</p>
<p><strong className="hl">Weapons:</strong> Simple weapons (except crossbows).</p>
<h3 id="rule-item_crafting_difficulties-normal-dc-15">Normal (DC 15)</h3>
<p><strong className="hl">Alchemical Items:</strong> Acid; alchemical cement; alchemical grease; armor ointment; bladeguard; buoyant balloon; chill cream; glowing ink; invisible ink, simple; keros oil; liquid blade; marker dye; soothe syrup; water purification sponge.</p>
<p><strong className="hl">Armor:</strong> Medium armor, steel shields.</p>
<p><strong className="hl">Mundane Items:</strong> Most adventuring gear.</p>
<p><strong className="hl">Vehicles:</strong> Chariot, light; chariot, medium; chariot, heavy; rowboat; sleigh; wagon, light; wagon, medium; wagon, heavy.</p>
<p><strong className="hl">Weapons:</strong> Martial weapons and crossbows.</p>
<h3 id="rule-item_crafting_difficulties-complex-dc-20">Complex (DC 20)</h3>
<p><strong className="hl">Alchemical Items:</strong> Alchemical glue; alchemical solvent; alchemist's fire; alchemist's kindness; alkali flask; blackfire clay; candlerod; flash powder; foaming powder; ghast retch flask; impact foam; invisible ink, average; invisible ink, good; meditation tea; nushadir; paper candle firework; scent cloak; shard gel; smoke pellet; smokestick; star candle firework; tindertwig; vermin repellent; weapon blanch, cold iron; weapon blanch, silver; wismuth salix.</p>
<p><strong className="hl">Armor:</strong> Heavy armor.</p>
<p><strong className="hl">Mundane Items:</strong> Jewelry, kits, locks, complicated adventuring gear.</p>
<p><strong className="hl">Traps:</strong> All traps CR 1-5.</p>
<p><strong className="hl">Vehicles:</strong> Carriage, glider, keelboat, longship.</p>
<p><strong className="hl">Weapons:</strong> Early firearm ammunition, early one-handed firearms, early two-handed firearms, exotic weapons.</p>
<h3 id="rule-item_crafting_difficulties-intricate-dc-25">Intricate (DC 25)</h3>
<p><strong className="hl">Alchemical Items:</strong> Alchemical glue accelerant; antiplague; antitoxin; bloodblock; bottled lightning; burst jar; defoliant; embalming fluid; fire ward gel; frost ward gel; fuse grenade; invisible ink, superior; itching powder; liquid ice; mending paste; padzahr; pellet grenade; skyrocket firework; smelling salts; sneezing powder; starfountain firework; sunrod; tanglefoot bag; thunderstone; twitch tonic; weapon blanch, adamantine.</p>
<p><strong className="hl">Mundane Items:</strong> Clocks, other intricate items.</p>
<p><strong className="hl">Traps:</strong> All traps CR 6-10.</p>
<p><strong className="hl">Vehicles:</strong> Galley, sailing ship, warship.</p>
<p><strong className="hl">Weapons:</strong> Advanced firearm ammunition, advanced firearms, non-alchemical and non-firearm siege weapons.</p>
<h3 id="rule-item_crafting_difficulties-very-intricate-dc-30">Very Intricate (DC 30)</h3>
<p><strong className="hl">Alchemical Items:</strong> Banshee ballerina firework, flame fountain firework, rusting powder, soul stimulant, tangleburn bag, troll oil.</p>
<p><strong className="hl">Traps:</strong> All traps CR 11-15.</p>
<p><strong className="hl">Vehicles:</strong> Airship.</p>
<p><strong className="hl">Weapons:</strong> Alchemical siege engines, siege firearms.</p>
<h3 id="rule-item_crafting_difficulties-extremely-intricate-dc-35">Extremely Intricate (DC 35)</h3>
<p><strong className="hl">Traps:</strong> All traps CR 16+.</p>
<p><strong className="hl">Vehicles:</strong> Alchemical dragon, steam giant.</p>
</>};
const _supervising_helpers = {title: "Supervising Helpers", parent_topics: ["optional_skill_changes","alternate_crafting_rules"], siblings: ["item_crafting_difficulties","supervising_helpers","workshop","special_raw_materials"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 75</Link></p>
<p>As stated in both versions of the skill, Craft allows you to supervise untrained laborers. An untrained laborer has no ranks in Craft, but can attempt to aid in the process of creating items with the Craft skill. This is done by first paying the untrained laborer either 1 sp per day or 7 sp for a week's worth of work. Each untrained worker you hire can attempt to aid another on your Craft check with a +0 bonus (assuming an Intelligence score of 10 or 11 and no ranks in the appropriate Craft skill). Typically, you can hire no more than two artisans to help you craft most small or relatively simple items (such as adventuring gear, alchemical items, armor, poisons, and weapons), but for large and complex items (such as siege engines and vehicles), you can hire as many as 10 untrained laborers to assist you.</p>
<p>If your GM allows it, you can also hire and supervise trained laborers. These laborers have ranks in the appropriate Craft skill and have a greater chance to aid you in your crafting endeavors. Table 2-5: Trained Laborers gives the details on such trained laborers, how much they cost, the number of ranks they have in the appropriate Craft check, the bonus on their Craft checks, and the typical size of the settlement in which they are found. You can hire only trained laborers who have fewer ranks in the appropriate Craft than you have; a trained laborer with more ranks than you will not deign to assist you.</p>
<h3 id="rule-supervising_helpers-table-2-5-trained-laborers">Table 2-5: Trained Laborers</h3>
<ScrollContainer id="rule-supervising_helpers--table-0"><table>
<thead>
<tr>
<th>Ranks in Craft</th>
<th>Craft Bonus</th>
<th>Cost to Hire per Day</th>
<th>Cost to Hire per Week</th>
<th>Settlement Size</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>+4</td>
<td>3 sp</td>
<td>2 gp, 1 sp</td>
<td>Hamlet</td>
</tr>
<tr>
<td>2</td>
<td>+5</td>
<td>4 sp</td>
<td>2 gp, 8 sp</td>
<td>Village</td>
</tr>
<tr>
<td>3</td>
<td>+6</td>
<td>6 sp</td>
<td>4 gp, 2 sp</td>
<td>Small town</td>
</tr>
<tr>
<td>4</td>
<td>+7</td>
<td>8 sp</td>
<td>5 gp, 6 sp</td>
<td>Large town</td>
</tr>
<tr>
<td>5</td>
<td>+8</td>
<td>1 gp</td>
<td>7 gp</td>
<td>Small city</td>
</tr>
<tr>
<td>6</td>
<td>+9</td>
<td>1 gp, 5 sp</td>
<td>10 gp, 5 sp</td>
<td>Large city</td>
</tr>
<tr>
<td>7</td>
<td>+10</td>
<td>2 gp</td>
<td>14 gp</td>
<td>Metropolis</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _workshop = {title: "Workshop", parent_topics: ["optional_skill_changes","alternate_crafting_rules"], siblings: ["item_crafting_difficulties","supervising_helpers","workshop","special_raw_materials"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 75</Link></p>
<p>When crafting items, you need tools and an appropriate workspace. What constitutes an appropriate workspace is often situational. Repairing weapons or armor in the field requires only a relatively quiet and clear area, while crafting a suit of full plate requires a workshop and a forge. Typically, items of normal or greater complexity require a workshop of some sort, but under certain circumstances, the GM can rule that such items can be created in the field. Alchemical items and poisons are exceptions to these guidelines, as their compact nature makes them easier to craft in the field, especially with the help of an alchemist's lab.</p>
<p><strong className="hl">Masterwork Workspaces:</strong> Large, well-stocked workspaces can also aid in the crafting of items, particularly when you use trained and untrained labor. These masterwork workspaces grant trained and untrained laborers a +2 circumstance bonus on checks to aid another when they aid your Craft check. Furthermore, if a trained or untrained laborer succeeds at the check to aid another by 5 or more, that laborer grants you a +3 bonus on your check instead of the normal +2. It typically costs 5 gp per day to rent a masterwork workspace for crafting relatively small items (such as most adventuring gear, alchemical items, armor, poisons, and weapons) and 20 gp per day to rent a masterwork workspace for creating larger items (such as siege engines and vehicles).</p>
</>};
const _special_raw_materials = {title: "Special Raw Materials", parent_topics: ["optional_skill_changes","alternate_crafting_rules"], siblings: ["item_crafting_difficulties","supervising_helpers","workshop","special_raw_materials"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 75</Link></p>
<p>Crafting items requires a certain ratio of raw materials to start. Typically, these raw materials are some sort of trade good that is required to make the item. Making a suit of chainmail, for instance, requires 37 gp and 5 sp worth of steel (assuming you are using the alternate Craft skill presented above). But not all raw materials are the same - some raw materials are better suited for crafting. These are special raw materials.</p>
<p>Unlike normal raw materials, special raw materials have both a cost and a crafting cost. The cost of the special raw material is the amount for which it can be purchased and sold. Special raw materials are trade goods, and like all trade goods, they can be bought and sold for the same price. The crafting cost is the amount of gold they are considered to be worth for the purposes of crafting. For example, flawless steel's cost is 8 gp per pound, but its crafting cost per pound is 4 gp. It can be bought and sold for 8 gp per pound, but when used as the raw material for crafting items, it is considered to be worth only 4 gp per pound.</p>
<p>While special raw materials can be bought and sold, they work best when handed out as treasure. As the GM, if one of the PCs in your group has invested in the Craft skill, consider giving out these special trade goods in place of coin treasure every so often.</p>
<p>Special raw materials' crafting costs are always half their actual cost. They also have special traits when used as the raw material for crafting in the alternate Craft skill rules presented above. A special material cannot have more than one of the following special traits.</p>
<p><strong className="hl">Easily Worked Raw Materials:</strong> This type of raw material makes it easier to craft items faster. When using this raw material, the item's base progress per day is doubled. For example, if you are creating a suit of chainmail using easily worked steel, your base progress per day is 4 gp rather than 2 gp.</p>
<p><strong className="hl">Flawless Raw Materials:</strong> This material is so flawless that it can be used to create high-quality items with ease. When using flawless raw materials to create either masterwork or specialmaterial items, the crafting difficulty doesn't increase. For example, if you craft a suit of masterwork chainmail using flawless steel, the difficulty of the check remains normal (DC 15) rather than becoming complex (DC 20).</p>
<p><strong className="hl">Malleable Raw Materials:</strong> This type of special raw material can withstand crafting errors better than other normal materials of the same type. If you fail a Craft check by 5 or more when using malleable raw materials, you don't lose an amount of raw material equal to the item's base progress per day.</p>
<p><strong className="hl">Pure Raw Materials:</strong> This raw material makes it easier to craft an item. When using this raw material, you roll twice when attempting your Craft check and take the better result.</p>
<h3 id="rule-special_raw_materials-table-2-6-special-raw-material-cost">Table 2-6: Special Raw Material Cost</h3>
<ScrollContainer id="rule-special_raw_materials--table-0"><table>
<thead>
<tr>
<th>Special Raw Materials (1 lb.)</th>
<th>Easily Worked</th>
<th>Flawless</th>
<th>Malleable</th>
<th>Pure</th>
</tr>
</thead>
<tbody><tr>
<td>Adamantine</td>
<td>600 gp</td>
<td>600 gp</td>
<td>375 gp</td>
<td>450 gp</td>
</tr>
<tr>
<td>Alchemical silver</td>
<td>20 gp</td>
<td>20 gp</td>
<td>12 gp, 5 sp</td>
<td>15 gp</td>
</tr>
<tr>
<td>Angelskin</td>
<td>200 gp</td>
<td>200 gp</td>
<td>125 gp</td>
<td>150 gp</td>
</tr>
<tr>
<td>Blood crystal</td>
<td>80 gp</td>
<td>80 gp</td>
<td>50 gp</td>
<td>60 gp</td>
</tr>
<tr>
<td>Bone</td>
<td>2 gp</td>
<td>2 gp</td>
<td>1 gp, 2 sp, 5 cp</td>
<td>1 gp, 5 sp</td>
</tr>
<tr>
<td>Bronze</td>
<td>10 gp</td>
<td>10 gp</td>
<td>6 gp, 2 sp, 5 cp</td>
<td>7 gp, 5 sp</td>
</tr>
<tr>
<td>Cloth</td>
<td>8 gp</td>
<td>8 gp</td>
<td>5 gp</td>
<td>6 gp</td>
</tr>
<tr>
<td>Cold iron</td>
<td>100 gp</td>
<td>100 gp</td>
<td>62 gp, 5 sp</td>
<td>75 gp</td>
</tr>
<tr>
<td>Darkleaf cloth</td>
<td>20 gp</td>
<td>20 gp</td>
<td>12 gp, 5 sp</td>
<td>15 gp</td>
</tr>
<tr>
<td>Darkwood</td>
<td>20 gp</td>
<td>20 gp</td>
<td>12 gp, 5 sp</td>
<td>15 gp</td>
</tr>
<tr>
<td>Dragonhide</td>
<td>100 gp</td>
<td>100 gp</td>
<td>62 gp, 5 sp</td>
<td>75 gp</td>
</tr>
<tr>
<td>Eel hide</td>
<td>250 gp</td>
<td>250 gp</td>
<td>156 gp, 2 sp, 5 cp</td>
<td>187 gp, 5 sp</td>
</tr>
<tr>
<td>Elysian bronze</td>
<td>400 gp</td>
<td>400 gp</td>
<td>250 gp</td>
<td>300 gp</td>
</tr>
<tr>
<td>Fire-forged steel</td>
<td>300 gp</td>
<td>300 gp</td>
<td>187 gp, 5 sp</td>
<td>225 gp</td>
</tr>
<tr>
<td>Frost-forged steel</td>
<td>300 gp</td>
<td>300 gp</td>
<td>187 gp, 5 sp</td>
<td>225 gp</td>
</tr>
<tr>
<td>Gold</td>
<td>100 gp</td>
<td>100 gp</td>
<td>62 gp, 5 sp</td>
<td>75 gp</td>
</tr>
<tr>
<td>Greenwood</td>
<td>100 gp</td>
<td>100 gp</td>
<td>62 gp, 5 sp</td>
<td>75 gp</td>
</tr>
<tr>
<td>Griffon mane</td>
<td>80 gp</td>
<td>80 gp</td>
<td>50 gp</td>
<td>60 gp</td>
</tr>
<tr>
<td>Leather</td>
<td>6 gp</td>
<td>6 gp</td>
<td>3 gp, 7 sp, 5 cp</td>
<td>4 gp, 5 sp</td>
</tr>
<tr>
<td>Living steel</td>
<td>200 gp</td>
<td>200 gp</td>
<td>125 gp</td>
<td>150 gp</td>
</tr>
<tr>
<td>Mithral</td>
<td>800 gp</td>
<td>800 gp</td>
<td>500 gp</td>
<td>600 gp</td>
</tr>
<tr>
<td>Obsidian</td>
<td>6 gp</td>
<td>6 gp</td>
<td>3 gp, 7 sp, 5 cp</td>
<td>4 gp, 5 sp</td>
</tr>
<tr>
<td>Steel</td>
<td>8 gp</td>
<td>8 gp</td>
<td>5 gp</td>
<td>6 gp</td>
</tr>
<tr>
<td>Stone</td>
<td>6 gp</td>
<td>6 gp</td>
<td>3 gp, 7 sp, 5 cp</td>
<td>4 gp, 5 sp</td>
</tr>
<tr>
<td>Viridium</td>
<td>400 gp</td>
<td>400 gp</td>
<td>250 gp</td>
<td>300 gp</td>
</tr>
<tr>
<td>Whipwood</td>
<td>300 gp</td>
<td>300 gp</td>
<td>187 gp, 5 sp</td>
<td>225 gp</td>
</tr>
<tr>
<td>Wood</td>
<td>2 gp</td>
<td>2 gp</td>
<td>1 gp, 2 sp, 5 cp</td>
<td>1 gp, 5 sp</td>
</tr>
<tr>
<td>Wyroot</td>
<td>400 gp</td>
<td>400 gp</td>
<td>250 gp</td>
<td>300 gp</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _alternate_profession_rules = {title: "Alternate Profession Rules", parent_topics: ["optional_skill_changes"], siblings: ["alternate_crafting_rules","alternate_profession_rules","background_skills","consolidated_skills","grouped_skills","skill_unlocks","the_elephant_in_the_room"], subtopics: ["setting_up_shop","running_the_business","determining_profits","typical_business_setups"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 77</Link></p>
<p>While the rules for the Profession skill in the Core Rulebook are perfectly suitable for the needs of most campaigns, there is little opportunity to make them a meaningful part of play. Those rules assume that the character is spending a full week conducting business (when it is often more desirable for a PC to merely do a single day's work), and they offer few ideas on how to modify the basic check to account for circumstances, roleplaying opportunities, and so forth. For example, there are two primary methods of plying a trade while practicing the various professions suggested in the Pathfinder RPG. One is by setting up a place of business in a static location, and the other is by traveling from point to point, offering services. Both of these approaches are possible within a single area of expertise in almost every case, though there are advantages and disadvantages inherent in each. The Profession rules as written do not take any of this into account.</p>
<p>Of course, you can choose to fully roleplay the establishment and development of a business, making appropriate Profession checks along the way while incorporating most of the decision making and operations of the business into the PC's story. Alternatively, if you don't wish to delve into the complexities of creating a business and handling the bookkeeping to run it, then assume you find enough opportunities to convince the occasional passer-by to buy a good or service from you to make a small profit. You earn your check result in silver pieces per day in this fashion. However, if you want a system that's relatively easy to manage but that offers more choices and options for using the Profession skill, the following system provides rules that are a little more flavorful and involved.</p>
<p>With this alternative system, use the following version of the Profession skill instead of the one presented in the Core Rulebook.</p>
<h3 id="rule-alternate_profession_rules-profession-wisdom-trained-only">Profession (Wisdom; Trained Only)</h3>
<p>You are skilled at a specific job. Like Craft, Knowledge, and Perform, Profession is actually a number of separate skills. You could have several Profession skills, each with its own ranks. While a Craft skill represents ability in creating an item, a Profession skill represents an aptitude in a vocation requiring a broader range of less specific knowledge. The most common Profession skills are architect, baker, barrister, brewer, butcher, clerk, cook, courtesan, driver, engineer, farmer, fisherman, gambler, gardener, herbalist, innkeeper, librarian, merchant, midwife, miller, miner, porter, sailor, scribe, shepherd, stable master, soldier, tanner, trapper, and woodcutter.</p>
<p><strong className="hl">Check:</strong> You know how to use the tools of your trade, how to perform the profession's daily tasks, how to supervise apprentices and helpers, and how to handle common problems. You can also answer questions about your Profession. Basic questions have a DC of 10, while more complex questions have a DC of 15 or higher.</p>
</>};
const _setting_up_shop = {title: "Setting Up Shop", parent_topics: ["optional_skill_changes","alternate_profession_rules"], siblings: ["setting_up_shop","running_the_business","determining_profits","typical_business_setups"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 77</Link></p>
<p>The full function of the Profession skill allows you to run a business of the appropriate type successfully. Professions in most cases can be operated from static locations (such as store fronts or offices) or performed while traveling. They can be small operations requiring little in the way of assistance or large companies that demand numerous laborers. Table 2-7: Business Size and Setup lists the size of the business, the minimum and maximum number of employees needed to operate it, the amount of time it takes to establish the business (find and purchase equipment and the location from which to run the business, hire employees, renovate or repair the property, apply and pay for any licenses, advertise, etc.), the costs to open or upgrade the business, and the amount of profits to be gained.</p>
<h3 id="rule-setting_up_shop-table-2-7-business-size-and-setup">Table 2-7: Business Size and Setup</h3>
<ScrollContainer id="rule-setting_up_shop--table-0"><table>
<thead>
<tr>
<th>Business Size</th>
<th>Labor Factor</th>
<th>Minimum Employees</th>
<th>Maximum Employees</th>
<th>Setup Time</th>
<th>Initial/Upgrade Cost</th>
<th>Monthly Profits Factor</th>
</tr>
</thead>
<tbody><tr>
<td>Mobile</td>
<td>0</td>
<td>0</td>
<td>2</td>
<td>1 day</td>
<td>1 gp/rank</td>
<td>5</td>
</tr>
<tr>
<td>Small</td>
<td>-2</td>
<td>2</td>
<td>4</td>
<td>1 week</td>
<td>100 gp/rank</td>
<td>10</td>
</tr>
<tr>
<td>Medium</td>
<td>-5</td>
<td>5</td>
<td>10</td>
<td>2 weeks</td>
<td>1,000 gp/rank</td>
<td>100</td>
</tr>
<tr>
<td>Large</td>
<td>-10</td>
<td>10</td>
<td>20</td>
<td>1 month</td>
<td>5,000 gp/rank</td>
<td>1,000</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Labor Factor:</strong> This value indicates the minimum labor "cost" of running your business. It serves as a penalty on your Profession skill check to determine profits, accounting for the various laborers, assistants, experts, and apprentices you must employ to maintain a business of the associated size. Typically, your business can have a maximum number of employees equal to 2 &times; the positive value of its base Labor Factor (or a maximum of two employees for a mobile business), but each employee your business has beyond the minimum increases the Labor Factor penalty by 1.</p>
<p><strong className="hl">Minimum Employees:</strong> This is the minimum number of employees needed to run a business.</p>
<p><strong className="hl">Maximum Employees:</strong> This is the maximum number of employees a business can maintain.</p>
<p><strong className="hl">Initial/Upgrade Costs:</strong> The cost listed is the amount required to either establish (for a Mobile or Small business) or upgrade (from Small to Medium, or Medium to Large) a business. The value is multiplied by the number of ranks you have in the appropriate Profession skill, and reflects the quality of tools, equipment, decor, advertising, and so forth needed to maximize your talents and effectiveness at running a business of that size. If you gain more skill ranks, you must pay for the increased cost associated with those ranks in order to gain the benefit of those ranks on checks to determine profits - otherwise, all checks made to determine profits are capped at the highest skill rank for which you've paid. If you spend 125% of the listed cost, you set up a masterwork operation, with the finest equipment, tools, and furnishings available. Such a workspace grants you a +2 circumstance bonus on all associated Profession checks (including ones to determine profits).</p>
<p><strong className="hl">Monthly Profits Factor:</strong> This value is used to calculate net income earned after the cost of goods, overhead, and labor are taken into account.</p>
<p><strong className="hl">Mobile Business:</strong> Your business functions as a traveling operation, either as a small street-side setup within a town or city (such as a rug to display wares at a bazaar or a cart or wagon pulled through the city while the proprietor hawks the goods), as a roving professional service moving between multiple communities, or as a service that actually involves travel (such as that of a sailor, merchant, etc.).</p>
<p><strong className="hl">Small Business:</strong> Your business is a small shop, usually one of several within a single building. A Small business might cater to a community as small as a hamlet or to a single neighborhood within a metropolis.</p>
<p><strong className="hl">Medium Business:</strong> Your business is either a large shop occupying all of a single building or multiple smaller storefronts (each equivalent to a small business). A Medium business usually occupies a small town or larger community.</p>
<p><strong className="hl">Large Business:</strong> Your operations are sizable, either functioning as several Medium businesses within a single small city or larger settlement, or as multiple businesses of any size distributed among several small towns or larger communities.</p>
</>};
const _running_the_business = {title: "Running the Business", parent_topics: ["optional_skill_changes","alternate_profession_rules"], siblings: ["setting_up_shop","running_the_business","determining_profits","typical_business_setups"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 78</Link></p>
<p>Running a business using the Profession skill requires a great amount of time, and as such, most heroes don't maintain an active operation. Those who do often turn over most of the day-to-day tasks to subordinates so they themselves can continue adventuring. You can employ and supervise trained apprentices and assistants to help you manage the business affairs. For every assistant or apprentice you take on to help run your business, you reduce your time required to actively participate in the business by 25%. Thus, with one assistant, you work 75% of the time and are free the rest of the time. With two assistants, you can split your time evenly between the business and other endeavors, and so forth, up to four assistants, who can take complete control of the business operations on your behalf. You can choose to divide each day, week, or month between working and free time. Each assistant you add imposes a penalty equal to the appropriate Labor Factor penalty on your skill check to determine profits. See Table 2-7.</p>
<p>It takes time to find and hire such skilled employees. For each employee, you must spend 1d4 days &times; the number of ranks she possesses in the appropriate Profession skill searching her out and training her. You can only hire a trained worker who has at least half as many ranks in the appropriate Profession skill as you do, but no more than you do; a skilled individual with more ranks than you will not lower herself to be your assistant.</p>
</>};
const _determining_profits = {title: "Determining Profits", parent_topics: ["optional_skill_changes","alternate_profession_rules"], siblings: ["setting_up_shop","running_the_business","determining_profits","typical_business_setups"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 79</Link></p>
<p>To calculate the income you receive from your business, attempt a skill check in the associated Profession skill, taking the appropriate Labor Factor listed on Table 2-7 as a penalty. If you employ extra assistants, remember that each one increases the Labor Factor penalty on the check by 1. Multiply the result of this check by the Monthly Profits Factor on the table to determine your net monthly profits in gold pieces.</p>
<p>For example, if you are running a Small trading house with a modifier of +9 in Profession (merchant) and you have hired two extra assistants (beyond the two-employee minimum) to manage things for you while you adventure, your net modifier would be 9 - 2 (for the Labor Factor) - 2 (for the extra assistants) = 5. If you roll a 9, for a total of 14, you then multiply that total by 10 (the Monthly Profits Factor for a Small business) to determine that you've made a net profit of 140 gp over the course of the month. If you had chosen to manage the business in person, with no help from extra assistants, then your profits would have been 160 gp, but you would have been tied to the store and unable to adventure for half the month.</p>
</>};
const _typical_business_setups = {title: "Typical Business Setups", parent_topics: ["optional_skill_changes","alternate_profession_rules"], siblings: ["setting_up_shop","running_the_business","determining_profits","typical_business_setups"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 79</Link></p>
<p>Listed below are each of the professions featured in the Pathfinder RPG, along with a quick description of how a character could operate that business either as a traveling service or from a storefront. Of course, other professions are possible, limited only by a character's imagination.</p>
<p><strong className="hl">Architect:</strong> Mobile architects are very uncommon, and most often travel from noble to noble, providing expertise in the construction of manor houses and strongholds. A mobile architect might also serve as an attachment to a military unit or a mercenary company, training the soldiers in construction of defenses on the field of battle. More often, architects operate small businesses in larger towns and cities, creating and selling plans for construction or overseeing projects already under way.</p>
<p><strong className="hl">Baker:</strong> A baker can peddle goods (usually cooked at home) as a street vendor, often from a bazaar stall or cart. In rare instances, a renowned baker might travel the countryside, offering to create masterfully made baked goods in smaller communities, most often during holidays and other celebrations (and sometimes while in search of apprentices). A baker can also establish a storefront to sell all manner of breads, cakes, pastries, and pies, probably in conjunction with various Craft (baked goods) skill checks. The baker might also take special orders for custom creations, particularly catering to the wealthy within a sizable town.</p>
<p><strong className="hl">Barrister:</strong> Traveling barristers might operate on a predetermined circuit, attending to legal matters in small communities scattered through rural areas, often at the behest of the local nobility. However, most barristers serve in a fixed location, performing their legal duties in conjunction with an established court of law. Depending on the type of government that exists within a locale, the barrister might serve a set of clients among the general populace, or he might act more as judge and jury in all disputes.</p>
<p><strong className="hl">Brewer:</strong> A traveling brewer likely functions as a microbrewer, crafting his beverages at home then selling them from a wagon or cart, sometimes even between multiple communities or at local fairs. Larger brewing operations may set up shop in a rural community where the ingredients are fresh and then ship the finished product in larger towns, or they might receive the ingredients from elsewhere and craft their brews within the city walls.</p>
<p><strong className="hl">Butcher:</strong> A mobile butcher might move among several very small, rural communities, either buying livestock or offering to slaughter and dress them on the premises. Most butchers operate butcher's shops, selling fresh cuts of meat delivered from elsewhere. Very large operations might sell to nobles or armies in need of sustenance.</p>
<p><strong className="hl">Clerk:</strong> Traveling clerks, while not common, are not unheard of. They frequently roam from town to town, preparing paperwork on behalf of clergy members, mayors, and minor nobles. Clerks who operate storefront businesses tend to provide bookkeeping services to other businesses, and also offer the creation of announcements, invitations, and other printed materials.</p>
<p><strong className="hl">Cook:</strong> Cooks who travel often do so in the company of military units or caravans, while those who want to settle down frequently run restaurants or pubs. Some cooks also make a living serving fantastic dishes at court or operating catering services for other businesses.</p>
<p><strong className="hl">Courtesan:</strong> There are very few instances of traveling courtesans; most who claim to be are grifters or con artists, offering companionship only as part of some elaborate scheme. Most true courtesans are found either at court or working in a bawdy house. An individual could run a brothel as a full-time business using this Profession skill.</p>
<p><strong className="hl">Driver:</strong> By its nature, the profession of driving requires travel, so most mobile drivers work independently, serving military units or caravans, handling carts, wagons, carriages, and the animals that pull them. Localized driving businesses could offer dray work to other shops in a community, provide carriage service (like a taxi service), or even contract out full caravan service. Alternatively, mercenary drivers might participate in chariot games for sponsors willing to pay enough.</p>
<p><strong className="hl">Engineer:</strong> Engineers function in much the same way as architects. Mercenary captains who lead bands of military engineers for hire typically have some skill in this profession.</p>
<p><strong className="hl">Farmer:</strong> Mobile farmers often serve as traveling workers, moving between farms to gather crops on behalf of wealthy landowners. Some highly skilled farmers also travel between communities, demonstrating and selling new kinds of plant breeds or diagnosing diseases. Otherwise, farmers operate plots of land, growing produce to sell in urban areas.</p>
<p><strong className="hl">Fisherman:</strong> Fishermen must go where there is water, but some truly do travel, by either taking wealthy clients on fishing expeditions for sport or finding work as an independent contractor on a commercial fishing vessel. Fishermen who wish to start a local business often run a dockside company with one or more boats or ships with crews that bring in large catches, which the business owner then sells to local inns, taverns, and so forth.</p>
<p><strong className="hl">Gambler:</strong> A lone gambler who makes a living winning coin usually moves from place to place once her skills are noted and she wears out her welcome. Some occasionally hire on to teach others how to gamble effectively (this is particularly popular among nobles who are constantly trying to one-up one another). Gamblers who want to make a business of it often set up betting houses, bookie services, and casinos.</p>
<p><strong className="hl">Gardener:</strong> Mobile gardeners serve as landscapers, hiring out to grow and groom public parks. Some gardeners start local businesses that cater to either the city or wealthy nobles who want flower gardens, hedge mazes, and the like. Their employees visit clients regularly to plant new starts, trim and train established plants and trees, and ready gardens for the changing seasons.</p>
<p><strong className="hl">Herbalist:</strong> A traveling herbalist rides alone or with a caravan, moving between locales to gather fresh herbs and sell dried ones. Stationary herbalists sell their wares from small cottages in the rural parts of the country or from shops in big cities. The largest herbalist businesses conduct trade with large-scale food suppliers and hospitals, providing seasonings and remedies, respectively.</p>
<p><strong className="hl">Innkeeper:</strong> A traveling innkeeper serves as a hired hand who helps get struggling businesses back into profitable shape by arranging for better entertainment, bouncers, victuals, and other amenities. Inns run as businesses can range in size from small bed-and-breakfasts to large military barracks.</p>
<p><strong className="hl">Librarian:</strong> A traveling librarian moves about the land, dealing in books (particularly rare ones) with communities that either don't have access to a library of their own or with folks who simply can't afford much in the way of reading material. Permanent libraries can be anything from small, specialized shops that deal with very specific subjects to massive cultural edifices that represent the pinnacle of a given civilization. Private libraries that are run as businesses are rare and usually cater to clients with large amounts of money to spend.</p>
<p><strong className="hl">Merchant:</strong> Traveling merchants can bring goods either on pack mules or as part of a great caravan, and can be found hawking their wares on nearly every street corner. Shopkeepers of all ilks buy and sell every trade good imaginable. The largest trade consortiums manage hundreds of caravans, storefronts, and warehouses.</p>
<p><strong className="hl">Midwife:</strong> Some midwives travel between communities, helping to deliver babies at each stop. In more urban communities, they can be hired on by temples and hospitals that specialize in infant birthing.</p>
<p><strong className="hl">Miller:</strong> A traveling miller might go from village to village with a portable mill and set up shop for a few days or a week, grinding the community's grain before moving on to the next place. Millers running established operations in farming country would work out of a mill built near a flowing water source, while larger commercial milling operations in urban areas could serve all the farms and merchants for miles around.</p>
<p><strong className="hl">Miner:</strong> Miners must find work wherever the ore, stone, or precious materials they mine are found. However, a lone miner could make a living excavating foundations and basements, live as a prospector hunting for gems and panning for gold in the wild, or work as a mercenary employed to assist a military unit in building defenses or sapping the enemy's walls.</p>
<p><strong className="hl">Porter:</strong> Portage work tends to operate out of hubs of civilization, whether in small frontier towns where the need for porters to carry exploration and adventuring gear is high, or in great cities where merchants are in constant need of strong backs to carry, load, and unload cargo. A lone porter could hire out to anyone needing assistance on a short- or long-term basis, while a businessperson could run a portage and delivery service in any sized community.</p>
<p><strong className="hl">Sailor:</strong> Individual sailors not tied to a particular port simply hire on to ships that need an extra hand. However, organized groups of sailors sometimes hire themselves out to those with ships in need of full crews.</p>
<p><strong className="hl">Scribe:</strong> Lone scribes who travel from town to town offer not only writing services, but also sell fine papers, inks, pens, and scroll and map cases to customers. Larger enterprises can provide a full range of copying, translating, and illuminating services to a broad range of customers in villages, towns, and cities.</p>
<p><strong className="hl">Shepherd:</strong> A single shepherd will travel to find work wherever there is a need for tending sheep, especially during shearing and birthing season. Someone with a mind to run a shepherding business would have the skill to operate sheep ranches and wool-processing facilities, as well as working in conjunction with butchers to process meat.</p>
<p><strong className="hl">Soldier:</strong> Soldiers go where there is fighting. Individual mercenaries, guards, or marines serving aboard ships accept coin in exchange for their combat prowess. Mercenary captains in charge of whole units or armies effectively run sizable businesses. Urban organizations offering escort and guard services to wealthy nobles and merchants can also grow quite large.</p>
<p><strong className="hl">Stable Master:</strong> Anyone who has a way with horses could travel with caravans or armies, serving as a horse handler, while operations in small villages might exist side by side with inns and taprooms. Larger businesses could offer a full-service stable that buys, heals, races, sells, and trains horses.</p>
<p><strong className="hl">Tanner:</strong> A lone tanner might provide his leatherworking services to a number of communities in proximity to one another, and small businesses that offer both tanning services and finished goods for sale are common enough. Bigger operations usually set up near cities where large numbers of livestock are gathered for processing.</p>
<p><strong className="hl">Trapper:</strong> Solo trappers can catch and skin enough game to make a living in a frontier or wooded region, and small groups of them might establish a trading post where they could sell their wares along with other goods. A large trapping company might hire scores of individual trappers, bringing in massive quantities of furs that are then shipped to other parts of the world.</p>
<p><strong className="hl">Woodcutter:</strong> Individual loggers might move from place to place, felling enough timber to sell to one small community at a time. Large logging operations can potentially clear entire regions of forest in a short time, preparing and shipping the wood - either as whole logs or sawn lumber - by water or caravan to sell anywhere growth and development occurs. Shipyards also require substantial amounts of lumber and make good customers.</p>
</>};
const _background_skills = {title: "Background Skills", parent_topics: ["optional_skill_changes"], siblings: ["alternate_crafting_rules","alternate_profession_rules","background_skills","consolidated_skills","grouped_skills","skill_unlocks","the_elephant_in_the_room"], subtopics: ["skill_changes","gaining_adventuring_skills","gaining_background_skills","monsters_and_npcs","new_skills","expanded_skill_uses"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 46</Link></p>
<p>The skill system presented in the Core Rulebook has a lot of versatility. It allows characters to overcome various challenges related to their diverse talents, with simple rules for dealing with beneficial or adverse conditions. Though many players simply spend their skill ranks on the same skills at every level, it is also possible for a character to diversify his investment in order to gain access to more skills overall or to remedy a shortcoming.</p>
<p>However, not all skills provide the same benefit to characters. It's difficult to argue that a high bonus in a Profession skill has the same value as a high bonus in a more general skill such as Perception. Yet Profession is an important skill for non-player characters, as well as for players who wish to show that adventuring isn't the only thing their characters care about.</p>
<p>The background skills system recognizes that skills such as Craft, Knowledge, and Profession serve an important role in the game. Though these skills don't directly affect the careers of typical adventurers the same way that Bluff, Perception, and Stealth do, they are useful means for characters to interact with and explore the world outside of combat. You shouldn't have to choose between having the knowledge to understand the world and the ability to survive in it!</p>
<p>These skills are called background skills because they reflect the non-adventuring interests and passions of a player character, or the skills more important to NPCs. All other skills are called adventuring skills. In a campaign that uses the background skills system, each character gains an additional 2 skill ranks per level, which must be spent on background skills. More details appear in the <Link to="/rule/gaining_background_skills">Gaining Background Skills</Link> section. These new rules make characters and their skills more versatile, but because they boost non-adventuring skills, they're unlikely to unbalance a campaign.</p>
<h3 id="rule-background_skills-converting-characters">Converting Characters</h3>
<p>Implementing background skills in an established campaign is easy. To convert a character's skill ranks into this system, first determine the total number of background skill ranks she has - this is equal to 2 &times; the PC's character level. Next, find out how many ranks she has already spent on skills that are background skills under this system. The character gains that number of regular skill ranks to spend on any skills - essentially refunding the regular skill ranks spent on background skills. Finally, subtract this number from the character's total number of background skill ranks to determine how many background skill ranks she still has to spend. For example, a 5th-level rogue would have 10 background skill ranks. If she had already put 5 ranks into skills that are now background skills, she would spend 5 of her background skill ranks on those skills, freeing up the original 5 ranks to spend on any skills, and she would still have 5 background skill ranks left to spend on background skills.</p>
<p>The GM might want to allow some amount of retraining to factor in the new background skills. A character who took Profession (poet) might prefer to put those ranks in Artistry (poetry) instead, or a character who took Knowledge (geography) to represent the time she spent traveling a specific river might take Lore in that river instead.</p>
</>};
const _skill_changes = {title: "Skill Changes", parent_topics: ["optional_skill_changes","background_skills"], siblings: ["skill_changes","gaining_adventuring_skills","gaining_background_skills","monsters_and_npcs","new_skills","expanded_skill_uses"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 46</Link></p>
<p>Appraise, Craft, Handle Animal, Linguistics, Perform, Profession, and some Knowledge specialties are all background skills. While all of these skills can be useful, or even necessary, in certain types of campaigns (such as Profession [sailor] in a nautical-themed campaign) or for certain types of characters (such as Handle Animal for a druid or ranger), they are often of less immediate value than sneaking up on a foe using Stealth or journeying through the wilderness using Survival.</p>
<p>This system also adds two new background skills: Artistry and Lore. A counterpart to Craft and Perform, Artistry is about developing a creative work that isn't necessarily an object or a discrete performance. This skill can be used to write plays, musical compositions, poems, and all sorts of other works. Lore, on the other hand, functions like an especially specific Knowledge skill. A character might know Lore (elven history) without being trained more generally in Knowledge (history), or could be well versed in Lore (artistic masterpieces) without having ranks in Appraise, Artistry, or Craft.</p>
<p>New skill descriptions can be found on the following pages. These include entries on the new skills and expanded entries on existing skills that are now background skills. The table below lists the new and redefined skills, separated into adventuring and background skills</p>
<ScrollContainer id="rule-skill_changes--table-0"><table>
<thead>
<tr>
<th>Adventuring Skills</th>
<th>Background Skills</th>
</tr>
</thead>
<tbody><tr>
<td>Acrobatics</td>
<td>Appraise</td>
</tr>
<tr>
<td>Bluff</td>
<td>Artistry</td>
</tr>
<tr>
<td>Climb</td>
<td>Craft</td>
</tr>
<tr>
<td>Diplomacy</td>
<td>Handle Animal</td>
</tr>
<tr>
<td>Disable Device</td>
<td>Knowledge (engineering)</td>
</tr>
<tr>
<td>Disguise</td>
<td>Knowledge (geography)</td>
</tr>
<tr>
<td>Escape Artist</td>
<td>Knowledge (history)</td>
</tr>
<tr>
<td>Fly</td>
<td>Knowledge (nobility)</td>
</tr>
<tr>
<td>Heal</td>
<td>Linguistics</td>
</tr>
<tr>
<td>Intimidate</td>
<td>Lore</td>
</tr>
<tr>
<td>Knowledge (arcana)</td>
<td>Perform</td>
</tr>
<tr>
<td>Knowledge (dungeoneering)</td>
<td>Profession</td>
</tr>
<tr>
<td>Knowledge (local)</td>
<td>Sleight of Hand</td>
</tr>
<tr>
<td>Knowledge (nature)</td>
<td></td>
</tr>
<tr>
<td>Knowledge (planes)</td>
<td></td>
</tr>
<tr>
<td>Knowledge (religion)</td>
<td></td>
</tr>
<tr>
<td>Perception</td>
<td></td>
</tr>
<tr>
<td>Ride</td>
<td></td>
</tr>
<tr>
<td>Sense Motive</td>
<td></td>
</tr>
<tr>
<td>Spellcraft</td>
<td></td>
</tr>
<tr>
<td>Stealth</td>
<td></td>
</tr>
<tr>
<td>Survival</td>
<td></td>
</tr>
<tr>
<td>Swim</td>
<td></td>
</tr>
<tr>
<td>Use Magic Device</td>
<td></td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _gaining_adventuring_skills = {title: "Gaining Adventuring Skills", parent_topics: ["optional_skill_changes","background_skills"], siblings: ["skill_changes","gaining_adventuring_skills","gaining_background_skills","monsters_and_npcs","new_skills","expanded_skill_uses"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 47</Link></p>
<p>Adventuring skills are those skills that are most relevant for characters while they're actively adventuring. Adventuring skills are purchased with the standard skill ranks each character class receives, modified by a character's Intelligence (and sometimes by race or other factors). No adjustments need to be made to these skills when using the background skills system.</p>
<p>Most adventuring skills are related to training and practice, and each has a clear and specific application to the everyday challenges that face a professional adventurer. Adventuring skills get used for the majority of skill checks, so most skill ranks should be devoted to those skills.</p>
</>};
const _gaining_background_skills = {title: "Gaining Background Skills", parent_topics: ["optional_skill_changes","background_skills"], siblings: ["skill_changes","gaining_adventuring_skills","gaining_background_skills","monsters_and_npcs","new_skills","expanded_skill_uses"], subtopics: ["class_skills"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 47</Link></p>
<p>In addition to their normal allotment of regular skill ranks, all characters gain 2 background skill ranks each time they gain a level in a PC class. The character's Intelligence modifier doesn't adjust this value. Background skill ranks can be used to gain ranks only in background skills, not adventuring skills. Characters can expend their regular skill ranks on background skills if they desire.</p>
<p>Even the most dedicated adventurers have other things they enjoy doing in their spare time. Some pursue business interests during their downtime between adventures, and though these can be modeled with the <Link to="/rule/downtime">downtime rules</Link>, players who aren't interested in such a robust system still might wish to include elements of those interests on their character sheets.</p>
</>};
const _class_skills = {title: "Class Skills", parent_topics: ["optional_skill_changes","background_skills","gaining_background_skills"], siblings: ["class_skills"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 48</Link></p>
<p>In the background skills system, classes use their standard class skill lists. Any class that gains Craft or Perform as a class skill also counts Artistry as a class skill. Lore is always considered a class skill for all characters.</p>
<p>For example, a wizard has Appraise on his class skill list normally, so a wizard has the Appraise background skill as a class skill. Craft is also on his class skill list, so Artistry is a class skill for him as well (even though Perform isn't on his class skill list).</p>
<p>See: <Link to="/rule/converting_existing_characters">Converting Existing Characters</Link></p>
</>};
const _monsters_and_npcs = {title: "Monsters and NPCs", parent_topics: ["optional_skill_changes","background_skills"], siblings: ["skill_changes","gaining_adventuring_skills","gaining_background_skills","monsters_and_npcs","new_skills","expanded_skill_uses"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 48</Link></p>
<p>Typically, monsters don't gain access to the background skills system from their racial Hit Dice. The Game Master might decide that certain types of monsters might have extensive lives as workers and crafters (such as storm giants, for example) and therefore gain background skills, but this is optional.</p>
<p>NPCs gain background skills in the same fashion PCs do, but only for PC classes they possess. This also applies to monsters with levels in PC classes. NPCs don't have to spend their background skill ranks, and these skills rarely affect combat. Characters with only NPC classes - especially aristocrats, commoners, and experts - often spend their adventuring skill ranks on background skills.</p>
</>};
const _new_skills = {title: "New Skills", parent_topics: ["optional_skill_changes","background_skills"], siblings: ["skill_changes","gaining_adventuring_skills","gaining_background_skills","monsters_and_npcs","new_skills","expanded_skill_uses"], subtopics: ["artistry_int","lore_int"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 48</Link></p>
<p>The section presents full entries for two new skills: Artistry and Lore. Even if you're not using the background skills system, you can still incorporate these skills into your game as normal skills.</p>
</>};
const _artistry_int = {title: "Artistry", parent_topics: ["optional_skill_changes","background_skills","new_skills"], siblings: ["artistry_int","lore_int"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 48</Link></p>
<h3 id="rule-artistry_int-artistry-int">Artistry (Int)</h3>
<p>You are skilled in the creative arts, following your aesthetic sensibilities to bring to life the wonders of your imagination. Like Craft, Perform, and Profession, Artistry is actually a number of separate skills. You could have several Artistry skills, each with its own ranks. The most common Artistry skills are choreography, criticism, literature (including poetry), musical composition, philosophy, and playwriting.</p>
<p>Like Craft, an Artistry skill is focused on creating something. However, what it creates is not necessarily a physical object; it could be a pattern or blueprint for an item, or a better method for crafting a type of item. Thus, an Artistry (musical composition) check could be used to create a new song, but the important act of creation is the song itself, not the paper on which it is written or even the performance. An artist is not necessarily a skilled performer, though she might be. An artist's province is the creation of ideas and concepts, and the realization of those ideas in a way that can be enjoyed by others and contribute to the broader culture of the arts. Some art forms (such as painting or sculpture) skirt the line between Artistry and Craft. It's up to the GM to rule whether certain Craft skills can be taken as Artistry skills instead.</p>
<p><strong className="hl">Check:</strong> You can create works of art and try to earn a living by impressing possible patrons with your talent and ideas.</p>
<ScrollContainer id="rule-artistry_int--table-0"><table>
<thead>
<tr>
<th>Artistry DC</th>
<th>Workmanship</th>
</tr>
</thead>
<tbody><tr>
<td>10</td>
<td>Pedestrian work. No one buys your original work, but you get a few odd jobs using your skills - often just repairing or copying someone else's work. You earn 1d10 cp per day.</td>
</tr>
<tr>
<td>15</td>
<td>Pleasing work. In a prosperous city, you find a few who wish to purchase your work, and earn 1d10 sp per day.</td>
</tr>
<tr>
<td>20</td>
<td>Impressive work. In a prosperous city, you earn 3d10 sp per day, and may receive an artistic commission from a wealthy or public figure. As a result, you gain a local reputation.</td>
</tr>
<tr>
<td>25</td>
<td>Memorable work. In a prosperous city, you earn 1d6 gp per day, and you are likely to attract the attention of wealthy patrons and to develop a national reputation.</td>
</tr>
<tr>
<td>30</td>
<td>Masterful work. In a prosperous city, you earn 3d6 gp per day. In time, you may draw attention from distant patrons, or even from extraplanar beings.</td>
</tr>
</tbody></table></ScrollContainer>
<p>Since works of art are products of imagination, masterwork tools are of no use in their creation.</p>
<p><strong className="hl">Creating a Commissioned Work:</strong> If you are creating a specific commissioned work, determine the value of the work you wish to create by looking at the table below, then follow the listed steps. You must have a patron willing to pay this value to attempt to create a commissioned work. The amount earned from trying to make a living using Artistry is for works that are distributed among many people and publications, not bought by one patron.</p>
<ScrollContainer id="rule-artistry_int--table-1"><table>
<thead>
<tr>
<th>Quality of Work</th>
<th>DC</th>
<th>Commission Fee</th>
</tr>
</thead>
<tbody><tr>
<td>Pedestrian work</td>
<td>10</td>
<td>1 sp</td>
</tr>
<tr>
<td>Pleasing work</td>
<td>15</td>
<td>25 gp (250 sp)</td>
</tr>
<tr>
<td>Impressive work</td>
<td>20</td>
<td>50 gp (500 sp)</td>
</tr>
<tr>
<td>Memorable work</td>
<td>25</td>
<td>100 gp (1,000 sp)</td>
</tr>
<tr>
<td>Masterful work</td>
<td>30</td>
<td>200 gp (2,000 sp)</td>
</tr>
</tbody></table></ScrollContainer>
<p>To determine how much time and money it takes to complete a work of art, follow these steps.</p>
<p><strong className="hl">Step 1:</strong> Find the DC and price corresponding to the quality of the work you intend to create.</p>
<p><strong className="hl">Step 2:</strong> Spend 1/4 the price of the work you intend to create. This represents buying supplies such as parchment and ink, hiring the services of musicians, paying for research materials, and the like.</p>
<p><strong className="hl">Step 3:</strong> Attempt an Artistry check with the appropriate DC, representing 1 week's worth of work. If you succeed, multiply your check result by the DC. If the resulting value equals the price of the item in sp, then you have completed the work of art and gain your commission fee. (If the resulting value equals double or triple the price of the work in silver pieces, then you've completed the task in half or one-third of the time. Other multiples of the DC reduce the completion time in the same manner.) If the resulting value doesn't equal the price, then it represents the progress you've made this week in sp. If the check fails, you make no progress.</p>
<p>If you didn't complete the work of art, you can either continue working or call it done and cut your losses. If you continue working, you must spend 1/4 the price again for each week you work. Record the result of your check from the first week, and add your progress for each subsequent week to the total until you either complete the item or cut your losses. If you decide to cut your losses, you gain the commission of the highest-quality level that your total could have completed. For instance, if you were trying to create a memorable work (a commission price of 1,000 sp) and have made only 600 sp worth of progress, you can cut your losses to gain a commission fee for an impressive work (500 sp, or 50 gp). You can't earn the value for a higher quality than you were aiming for, so if you aimed to create a memorable work but ended up creating a masterful work, you couldn't gain a commission price higher than 100 gp. When you cut your losses, you don't gain back any money you spent on supplies and services. So if you spent 250 sp when trying to create a memorable work, selling an impressive work would net you only 250 sp total if you spent 1 week of work, and would cause you to break even if you spent 2 weeks. It's possible to lose money working on a commission.</p>
<p><strong className="hl">Action:</strong> Varies. Trying to earn money by creating minor works of art typically involves a full week's work. If you work less than 1 week, you earn the daily average amount appropriate for your level of workmanship. Creating a commissioned work typically takes a week or more.</p>
<p><strong className="hl">Try Again:</strong> Yes. Retries are allowed, but they don't negate previous failures. If you're trying to earn a living as an artist in a city where the public hasn't been impressed with your work (because you failed a DC 15 Artistry check in the previous week), you have a hard time breaking into the marketplace with future artwork (increase the DC by 2 for each previous failure). If you leave the area for a month or more before trying again, this increase resets to 0.</p>
</>};
const _lore_int = {title: "Lore", parent_topics: ["optional_skill_changes","background_skills","new_skills"], siblings: ["artistry_int","lore_int"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 50</Link></p>
<h3 id="rule-lore_int-lore-int-trained-only">Lore (Int; Trained Only)</h3>
<p>You possess a specialized area of knowledge, generally narrower than that of a full-fledged scholar. Lore acts as a catch-all skill for information, similar to how Craft handles artisanal skills and Profession handles professional skills. The category of a Lore skill can vary widely from that of another Lore skill. It could be regional (such as a city or country), about a discipline (such as cryptography), or related to a narrow set of people (such as famous musicians). The scope of region-based Lore skills can also refer to specific subcategories, such as taverns in a particular region.</p>
<p>A Lore skill must be narrow - far narrower than the most relevant Knowledge skill. The broader the scope of a given category of Lore, the shallower your knowledge is on that topic. If you know about taverns in a wide region, you know less about each of them than you would if you had Lore in taverns of a specific city. Lore skills normally can't be used to identify monsters the way Knowledge skills can, unless they refer to a specific type of monster (such as owlbears or vampires). If Lore involves a common, broad category of race or monster, it needs to be more specific. Lore (elves) would be too broad, as would Lore (dragons).</p>
<p><strong className="hl">Check:</strong> Lore skills use the same DC scale as Knowledge skills: DC 10 to answer easy questions, DC 15 for basic questions, and DC 20 to 30 for really tough questions. In many cases, Lore can substitute for a Knowledge skill, such as Lore (elven history) filling in for Knowledge (history) in a check involving elves. At the GM's discretion, a player might be able to apply a Lore skill that's only partially related to a subject with a -5 penalty, such as using a Lore skill about a region to recall information about a particular city in that region or applying knowledge of distilling to winemaking.</p>
<p>The table below describes some examples of Lore skills alongside examples of skills that would be too broad. This is by no means a comprehensive list, and the GM has final say on whether a particular Lore skill is appropriate.</p>
<ScrollContainer id="rule-lore_int--table-0"><table>
<thead>
<tr>
<th>Appropriate Lore Skills</th>
<th>Inappropriate Choices</th>
</tr>
</thead>
<tbody><tr>
<td>A particular small city (or smaller settlement)</td>
<td>Settlements</td>
</tr>
<tr>
<td>One district of a large city or metropolis</td>
<td>An entire large city or metropolis</td>
</tr>
<tr>
<td>A particular monastery</td>
<td>Monasteries</td>
</tr>
<tr>
<td>Taverns in a region</td>
<td>Taverns</td>
</tr>
<tr>
<td>Bandits in a region</td>
<td>Banditry</td>
</tr>
<tr>
<td>Famous battles in a region</td>
<td>Famous battles</td>
</tr>
<tr>
<td>The spice trade</td>
<td>Commerce</td>
</tr>
<tr>
<td>Cats</td>
<td>Animals</td>
</tr>
<tr>
<td>Drow matriarchs</td>
<td>Drow</td>
</tr>
<tr>
<td>Dwarven history</td>
<td>Dwarves</td>
</tr>
<tr>
<td>Frost giants</td>
<td>Giants</td>
</tr>
<tr>
<td>Sarenrae</td>
<td>Gods</td>
</tr>
<tr>
<td>Dagon</td>
<td>Demon lords</td>
</tr>
<tr>
<td>Phlegethon</td>
<td>Hell</td>
</tr>
<tr>
<td>Military commanders</td>
<td>Warfare</td>
</tr>
<tr>
<td>Famous singers</td>
<td>Music</td>
</tr>
<tr>
<td>Infernal contracts</td>
<td>Devils</td>
</tr>
<tr>
<td>Evocations</td>
<td>Spells</td>
</tr>
<tr>
<td>Silver and mithral</td>
<td>Metals</td>
</tr>
<tr>
<td>Tea</td>
<td>Beverages</td>
</tr>
<tr>
<td>Trees</td>
<td>Plants</td>
</tr>
<tr>
<td>Tattoos</td>
<td>Art</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Bards:</strong> Lore is treated as a Knowledge skill for the purposes of bardic knowledge and lore master, as well as similar abilities found in other classes, creatures, and archetypes. This applies only to Lore skills in which a character is trained. In other circumstances, use the more relevant Knowledge skill.</p>
</>};
const _expanded_skill_uses = {title: "Expanded Skill Uses", parent_topics: ["optional_skill_changes","background_skills"], siblings: ["skill_changes","gaining_adventuring_skills","gaining_background_skills","monsters_and_npcs","new_skills","expanded_skill_uses"], subtopics: ["expanded_craft","expanded_perform","expanded_profession"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 51</Link></p>
<p>Skills such as Craft, Perform, and Profession already include basic uses, such as crafting objects and making money. However, they can also be useful for other tasks related to practicing those skills. Further uses are expanded upon here, with sample DCs for common tasks. These expansions are meant to include additional uses to help these skills work into the framework of a regular game, and can be used separately from the background skills system if desired. These uses, particularly those that allow you to aid another at a lower DC, are at the GM's discretion. For more in-depth subsystems to replicate crafting and running a business, see <Link to="/rule/alternate_crafting_rules">Alternate Crafting Rules</Link> and <Link to="/rule/alternate_profession_rules">Alternate Profession Rules</Link>.</p>
</>};
const _expanded_craft = {title: "Expanded Craft", parent_topics: ["optional_skill_changes","background_skills","expanded_skill_uses"], siblings: ["expanded_craft","expanded_perform","expanded_profession"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 51</Link></p>
<p>An understanding of the properties and quality of an object comes part and parcel with the ability to craft it. Some of these checks could take extended periods of time, especially involved tasks like restoring a mural, as determined by the GM.</p>
<p>This entry also includes two useful Craft skills not specifically listed in the Core Rulebook: Craft (blacksmithing) and Craft (musical instruments).</p>
<ScrollContainer id="rule-expanded_craft--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>Craft Skill</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Determine what culture (e.g., elves, frost giants, etc.) made an item</td>
<td>By item type</td>
<td>15</td>
</tr>
<tr>
<td>Identify a famous maker's mark<sup><InnerLink showBacklink="backlink-rule-expanded_craft-ref-1-1" id="rule-expanded_craft-ref-1-1" data-hash-target to="rule-expanded_craft-1">1</InnerLink></sup></td>
<td>By item type</td>
<td>10</td>
</tr>
<tr>
<td>Identify an obscure maker's mark<sup><InnerLink showBacklink="backlink-rule-expanded_craft-ref-1-2" id="rule-expanded_craft-ref-1-2" data-hash-target to="rule-expanded_craft-1">1</InnerLink></sup></td>
<td>By item type</td>
<td>20</td>
</tr>
<tr>
<td>Identify the creator of an item with no mark<sup><InnerLink showBacklink="backlink-rule-expanded_craft-ref-1-3" id="rule-expanded_craft-ref-1-3" data-hash-target to="rule-expanded_craft-1">1</InnerLink></sup></td>
<td>By item type</td>
<td>30</td>
</tr>
<tr>
<td>Determine the hardness and hit points of an item<sup><InnerLink showBacklink="backlink-rule-expanded_craft-ref-1-4" id="rule-expanded_craft-ref-1-4" data-hash-target to="rule-expanded_craft-1">1</InnerLink></sup></td>
<td>By item type</td>
<td>20</td>
</tr>
<tr>
<td>Determine the items an alchemist makes with substances from his lab<sup><InnerLink showBacklink="backlink-rule-expanded_craft-ref-1-5" id="rule-expanded_craft-ref-1-5" data-hash-target to="rule-expanded_craft-1">1</InnerLink></sup></td>
<td>Alchemy</td>
<td>15</td>
</tr>
<tr>
<td>Etch metal armor plates with decorative designs</td>
<td>Armor or paintings</td>
<td>15</td>
</tr>
<tr>
<td>Identify a suit of masterwork armor on sight</td>
<td>Armor</td>
<td>15</td>
</tr>
<tr>
<td>Determine what type of environment a basket's material came from</td>
<td>Baskets</td>
<td>10</td>
</tr>
<tr>
<td>Determine the specific region a basket's material came from</td>
<td>Baskets</td>
<td>20</td>
</tr>
<tr>
<td>Smelt ore and refine the metal</td>
<td>Blacksmithing</td>
<td>15</td>
</tr>
<tr>
<td>Create armor spikes or shield spikes without Craft (armor)<sup><InnerLink showBacklink="backlink-rule-expanded_craft-ref-1-6" id="rule-expanded_craft-ref-1-6" data-hash-target to="rule-expanded_craft-1">1</InnerLink></sup></td>
<td>Blacksmithing</td>
<td>+5</td>
</tr>
<tr>
<td>Determine a book's approximate age</td>
<td>Books</td>
<td>10</td>
</tr>
<tr>
<td>Identify a composite bow on sight</td>
<td>Bows</td>
<td>10</td>
</tr>
<tr>
<td>Identify a masterwork bow on sight</td>
<td>Bows</td>
<td>15</td>
</tr>
<tr>
<td>Determine a writer's experience level and handedness<sup><InnerLink showBacklink="backlink-rule-expanded_craft-ref-1-7" id="rule-expanded_craft-ref-1-7" data-hash-target to="rule-expanded_craft-1">1</InnerLink></sup></td>
<td>Calligraphy</td>
<td>10</td>
</tr>
<tr>
<td>Write an invitation that matches appropriate social conventions</td>
<td>Calligraphy</td>
<td>10</td>
</tr>
<tr>
<td>Create a makeshift barrel or crate</td>
<td>Carpentry</td>
<td>10</td>
</tr>
<tr>
<td>Create a rudimentary raft from found materials</td>
<td>Carpentry or ships</td>
<td>15</td>
</tr>
<tr>
<td>Carve fine woodworking</td>
<td>Carpentry or sculptures</td>
<td>15</td>
</tr>
<tr>
<td>Create wooden armor or a wooden shield without Craft (armor)</td>
<td>Carpentry</td>
<td>+5</td>
</tr>
<tr>
<td>Correctly dye a garment or bolt of cloth</td>
<td>Cloth</td>
<td>10</td>
</tr>
<tr>
<td>Mend a sail</td>
<td>Cloth, clothing, or ships</td>
<td>15</td>
</tr>
<tr>
<td>Tailor a garment to another size or body shape</td>
<td>Clothing</td>
<td>10</td>
</tr>
<tr>
<td>Create temporary cold-weather gear (grants a +2 bonus)</td>
<td>Clothing</td>
<td>20</td>
</tr>
<tr>
<td>Create padded armor without Craft (armor)</td>
<td>Clothing</td>
<td>+5</td>
</tr>
<tr>
<td>Locate or identify naturally formed glass</td>
<td>Glass</td>
<td>10</td>
</tr>
<tr>
<td>Identify the work of famous jewelers</td>
<td>Jewelry</td>
<td>15</td>
</tr>
<tr>
<td>Create a fake gemstone<sup><InnerLink showBacklink="backlink-rule-expanded_craft-ref-1-8" id="rule-expanded_craft-ref-1-8" data-hash-target to="rule-expanded_craft-1">1</InnerLink></sup></td>
<td>Jewelry</td>
<td>Opposed<sup><InnerLink showBacklink="backlink-rule-expanded_craft-ref-2-1" id="rule-expanded_craft-ref-2-1" data-hash-target to="rule-expanded_craft-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>Identify the sort of creature from which a piece or leather came<sup><InnerLink showBacklink="backlink-rule-expanded_craft-ref-1-9" id="rule-expanded_craft-ref-1-9" data-hash-target to="rule-expanded_craft-1">1</InnerLink></sup></td>
<td>Leather</td>
<td>10<sup><InnerLink showBacklink="backlink-rule-expanded_craft-ref-3-1" id="rule-expanded_craft-ref-3-1" data-hash-target to="rule-expanded_craft-3">3</InnerLink></sup></td>
</tr>
<tr>
<td>Skin an animal and tan the hide</td>
<td>Leather</td>
<td>15</td>
</tr>
<tr>
<td>Create a high-quality item from the hide of a non-standard creature</td>
<td>Leather</td>
<td>20</td>
</tr>
<tr>
<td>Create leather, studded leather, or hide armor without Craft (armor)</td>
<td>Leather</td>
<td>+5</td>
</tr>
<tr>
<td>Aid another on a Disable Device check to open a lock<sup><InnerLink showBacklink="backlink-rule-expanded_craft-ref-1-10" id="rule-expanded_craft-ref-1-10" data-hash-target to="rule-expanded_craft-1">1</InnerLink></sup></td>
<td>Locsk</td>
<td>5</td>
</tr>
<tr>
<td>Tune a musical instrument</td>
<td>Musical instruments</td>
<td>10</td>
</tr>
<tr>
<td>Create paint or other pigments from scratch</td>
<td>Paintings</td>
<td>10</td>
</tr>
<tr>
<td>Re-create someone's likeness from memory</td>
<td>Paintings</td>
<td>15</td>
</tr>
<tr>
<td>Re-create someone's likeness from an eyewitness account</td>
<td>Paintings</td>
<td>20</td>
</tr>
<tr>
<td>Create a temporary or makeshift kiln</td>
<td>Pottery</td>
<td>20</td>
</tr>
<tr>
<td>Make a mold of an object or part of a body</td>
<td>Sculptures</td>
<td>10</td>
</tr>
<tr>
<td>Alter shoes to a different size or foot shape<sup><InnerLink showBacklink="backlink-rule-expanded_craft-ref-1-11" id="rule-expanded_craft-ref-1-11" data-hash-target to="rule-expanded_craft-1">1</InnerLink></sup></td>
<td>Shoes</td>
<td>10</td>
</tr>
<tr>
<td>Recognize a famous ship and where it likely came from</td>
<td>Ships</td>
<td>10</td>
</tr>
<tr>
<td>Identify whether a stone wall is entirely stone or a veneer</td>
<td>Stonemasonry</td>
<td>10</td>
</tr>
<tr>
<td>Create a temporary stone support or small rampart with found supplies</td>
<td>Stonemasonry</td>
<td>15</td>
</tr>
<tr>
<td>Determine the age of a mechanical trap</td>
<td>Traps</td>
<td>15</td>
</tr>
<tr>
<td>Identify a masterwork weapon on sight</td>
<td>Weapons</td>
<td>15</td>
</tr>
</tbody></table></ScrollContainer>
<p>The table below lists which craft skills to use for certain prominent items and adventuring tools. The list omits obvious items - outfits are made with Craft (clothing), keelboats with Craft (ships), and so on. More specific skills can also be used instead of the listed skill, such as using Craft (tattoos) instead of Craft (paintings) for a tattoo.</p>
<ScrollContainer id="rule-expanded_craft--table-1"><table>
<thead>
<tr>
<th>Item</th>
<th>Craft Skill</th>
</tr>
</thead>
<tbody><tr>
<td>Alchemist's lab</td>
<td>Alchemy</td>
</tr>
<tr>
<td>Artisan's tools</td>
<td>Blacksmithing or carpentry</td>
</tr>
<tr>
<td>Backpack</td>
<td>Clothing or leather</td>
</tr>
<tr>
<td>Barding</td>
<td>Armor</td>
</tr>
<tr>
<td>Bedroll</td>
<td>Cloth or leather</td>
</tr>
<tr>
<td>Caltrops</td>
<td>Weapons</td>
</tr>
<tr>
<td>Cart or carriage</td>
<td>Carpentry</td>
</tr>
<tr>
<td>Chain</td>
<td>Blacksmithing or traps</td>
</tr>
<tr>
<td>Chest</td>
<td>Carpentry or locks</td>
</tr>
<tr>
<td>Climber's Kit</td>
<td>Blacksmithing</td>
</tr>
<tr>
<td>Disguise Kit</td>
<td>Alchemy or paintings</td>
</tr>
<tr>
<td>Flint and steel</td>
<td>Blacksmithing or stonemasonry</td>
</tr>
<tr>
<td>Grappling hook</td>
<td>Blacksmithing or weapons</td>
</tr>
<tr>
<td>Gunslinger's kit</td>
<td>Alchemy or blacksmithing</td>
</tr>
<tr>
<td>Harrow deck</td>
<td>Paintings</td>
</tr>
<tr>
<td>Healer's kit</td>
<td>Alchemy or cloth</td>
</tr>
<tr>
<td>Hemp rope</td>
<td>Baskets or cloth</td>
</tr>
<tr>
<td>Lamp</td>
<td>Blacksmithing or glass</td>
</tr>
<tr>
<td>Manacles</td>
<td>Blacksmithing or locks</td>
</tr>
<tr>
<td>Masterwork tool</td>
<td>Blacksmithing</td>
</tr>
<tr>
<td>Musical instrument</td>
<td>Musical instuments</td>
</tr>
<tr>
<td>Saddle</td>
<td>Leather</td>
</tr>
<tr>
<td>Scroll case</td>
<td>Carpentry or leather</td>
</tr>
<tr>
<td>Signet ring</td>
<td>Jewelry</td>
</tr>
<tr>
<td>Silk rope</td>
<td>Cloth</td>
</tr>
<tr>
<td>Silver holy symbol</td>
<td>Blacksmithing or sculpture</td>
</tr>
<tr>
<td>Skeleton key</td>
<td>Locks</td>
</tr>
<tr>
<td>Spell component pouch</td>
<td>Leather</td>
</tr>
<tr>
<td>Spyglass</td>
<td>Glass</td>
</tr>
<tr>
<td>Tattoo</td>
<td>Paintings</td>
</tr>
<tr>
<td>Tent</td>
<td>Cloth or leather</td>
</tr>
<tr>
<td>Thieve's tools</td>
<td>Blacksmithing or locks</td>
</tr>
<tr>
<td>Waterskin</td>
<td>Leather</td>
</tr>
<tr>
<td>Wood holy symbol</td>
<td>Carpentry or sculpture</td>
</tr>
</tbody></table></ScrollContainer>
<p>The following table indicates which Craft skills are typically used to create common worn items. While the normal system for creating magic items doesn't incorporate Craft skills, such skills could reasonably be used while creating a magic item to make it appear especially ornate.</p>
<ScrollContainer id="rule-expanded_craft--table-2"><table>
<thead>
<tr>
<th>Worn Item</th>
<th>Craft Skill</th>
</tr>
</thead>
<tbody><tr>
<td>Amulet</td>
<td>Jewelry</td>
</tr>
<tr>
<td>Belt</td>
<td>Leather or clothing</td>
</tr>
<tr>
<td>Bracelet</td>
<td>Blacksmithing or jewelry</td>
</tr>
<tr>
<td>Bracer</td>
<td>Armor or leather</td>
</tr>
<tr>
<td>Brooch</td>
<td>Jewelry</td>
</tr>
<tr>
<td>Cape or cloak</td>
<td>Cloth or clothing</td>
</tr>
<tr>
<td>Circlet</td>
<td>Blacksmithing or jewelry</td>
</tr>
<tr>
<td>Crown</td>
<td>Blacksmithing or jewelry</td>
</tr>
<tr>
<td>Gauntlet</td>
<td>Armor</td>
</tr>
<tr>
<td>Girdle</td>
<td>Clothing or leather</td>
</tr>
<tr>
<td>Glasses or goggles</td>
<td>Glass</td>
</tr>
<tr>
<td>Glove</td>
<td>Clothing or leather</td>
</tr>
<tr>
<td>Hat</td>
<td>Clothing or leather</td>
</tr>
<tr>
<td>Headband</td>
<td>Cloth or clothing</td>
</tr>
<tr>
<td>Helm</td>
<td>Armor</td>
</tr>
<tr>
<td>Mask</td>
<td>Clothing or leather</td>
</tr>
<tr>
<td>Necklace</td>
<td>Blacksmithing or jewelry</td>
</tr>
<tr>
<td>Periapt</td>
<td>Jewelry</td>
</tr>
<tr>
<td>Phylactery</td>
<td>Leather or carpentry</td>
</tr>
<tr>
<td>Ring</td>
<td>Jewelry</td>
</tr>
<tr>
<td>Robe</td>
<td>Clothing</td>
</tr>
<tr>
<td>Vestments</td>
<td>Clothing</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-expanded_craft-label">Footnotes</h3>
<ol>
<li id="rule-expanded_craft-1">
<p>A character must be trained in the listed skill to attempt this task. <InnerLink id="backlink-rule-expanded_craft-ref-1-1" data-hash-target to="rule-expanded_craft-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink> <InnerLink id="backlink-rule-expanded_craft-ref-1-2" data-hash-target to="rule-expanded_craft-ref-1-2" aria-label="Back to reference 1-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-expanded_craft-ref-1-3" data-hash-target to="rule-expanded_craft-ref-1-3" aria-label="Back to reference 1-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-rule-expanded_craft-ref-1-4" data-hash-target to="rule-expanded_craft-ref-1-4" aria-label="Back to reference 1-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-rule-expanded_craft-ref-1-5" data-hash-target to="rule-expanded_craft-ref-1-5" aria-label="Back to reference 1-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-rule-expanded_craft-ref-1-6" data-hash-target to="rule-expanded_craft-ref-1-6" aria-label="Back to reference 1-6">↩<sup>6</sup></InnerLink> <InnerLink id="backlink-rule-expanded_craft-ref-1-7" data-hash-target to="rule-expanded_craft-ref-1-7" aria-label="Back to reference 1-7">↩<sup>7</sup></InnerLink> <InnerLink id="backlink-rule-expanded_craft-ref-1-8" data-hash-target to="rule-expanded_craft-ref-1-8" aria-label="Back to reference 1-8">↩<sup>8</sup></InnerLink> <InnerLink id="backlink-rule-expanded_craft-ref-1-9" data-hash-target to="rule-expanded_craft-ref-1-9" aria-label="Back to reference 1-9">↩<sup>9</sup></InnerLink> <InnerLink id="backlink-rule-expanded_craft-ref-1-10" data-hash-target to="rule-expanded_craft-ref-1-10" aria-label="Back to reference 1-10">↩<sup>10</sup></InnerLink> <InnerLink id="backlink-rule-expanded_craft-ref-1-11" data-hash-target to="rule-expanded_craft-ref-1-11" aria-label="Back to reference 1-11">↩<sup>11</sup></InnerLink></p>
</li>
<li id="rule-expanded_craft-2">
<p>With a successful opposed Perception or Craft (jewelry) check, a character identifies the work as a fake. <InnerLink id="backlink-rule-expanded_craft-ref-2-1" data-hash-target to="rule-expanded_craft-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="rule-expanded_craft-3">
<p>This DC is for items made from the hides of common animals, such as cattle, and increases by 5 for other types of creatures. <InnerLink id="backlink-rule-expanded_craft-ref-3-1" data-hash-target to="rule-expanded_craft-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _expanded_perform = {title: "Expanded Perform", parent_topics: ["optional_skill_changes","background_skills","expanded_skill_uses"], siblings: ["expanded_craft","expanded_perform","expanded_profession"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 52</Link></p>
<p>In addition to being able to put on a show, a performer knows the prominent works of her chosen type of performance.</p>
<ScrollContainer id="rule-expanded_perform--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>Perform Skill</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Mimic the style or a famous performer</td>
<td>Varies</td>
<td>15</td>
</tr>
<tr>
<td>Recall or recognize all the notes, lyrics, or lines of a popular work</td>
<td>Varies</td>
<td>15</td>
</tr>
<tr>
<td>Recall or recognize all the notes, lyrics, or lines of an obscure work</td>
<td>Varies</td>
<td>20</td>
</tr>
<tr>
<td>Improvise a routine on a specific subject</td>
<td>Act, comedy, oratory, or sing</td>
<td>20</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _expanded_profession = {title: "Expanded Profession", parent_topics: ["optional_skill_changes","background_skills","expanded_skill_uses"], siblings: ["expanded_craft","expanded_perform","expanded_profession"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 53</Link></p>
<p>A profession often encompasses many smaller areas of expertise, and these auxiliary skills can come in handy in situations beyond just making money or answering tradespecific questions. Below are some sample additional uses for Profession skills, and GMs are encouraged to create their own.</p>
<ScrollContainer id="rule-expanded_profession--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>Profession Skill</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Determine hardness and hitpoints of a structure</td>
<td>Architect or engineer</td>
<td>20</td>
</tr>
<tr>
<td>Prepare trail rations (takes 1 hour per day's worth of rations)</td>
<td>Baker or cook</td>
<td>10</td>
</tr>
<tr>
<td>Obtain a legal permit</td>
<td>Barrister or clerk</td>
<td>15</td>
</tr>
<tr>
<td>Get someone released from jail who has been imprisoned for a minor crime<sup><InnerLink showBacklink="backlink-rule-expanded_profession-ref-1-1" id="rule-expanded_profession-ref-1-1" data-hash-target to="rule-expanded_profession-1">1</InnerLink></sup></td>
<td>Barrister</td>
<td>20</td>
</tr>
<tr>
<td>Ask a special favor from a judge (such as arresting someone)</td>
<td>Barrister</td>
<td>30</td>
</tr>
<tr>
<td>Brew alcohol of exceptional quality</td>
<td>Brewer</td>
<td>20</td>
</tr>
<tr>
<td>Notice poison in a beverage</td>
<td>Brewer</td>
<td>25</td>
</tr>
<tr>
<td>Skin an animal and tan the hide</td>
<td>Butcher, shepherd, or tanner</td>
<td>10</td>
</tr>
<tr>
<td>Slaughter and butcher an animal</td>
<td>Butcher, cook, or shepherd</td>
<td>15</td>
</tr>
<tr>
<td>Reduce a legal fine or tax by half the result of the check in gp<sup><InnerLink showBacklink="backlink-rule-expanded_profession-ref-2-1" id="rule-expanded_profession-ref-2-1" data-hash-target to="rule-expanded_profession-2">2</InnerLink></sup></td>
<td>Clerk</td>
<td>20+</td>
</tr>
<tr>
<td>Cook a meal of exceptional quality</td>
<td>Cook</td>
<td>20</td>
</tr>
<tr>
<td>Notice poison in food</td>
<td>Cook</td>
<td>25</td>
</tr>
<tr>
<td>Find potential clients within an establishment or large group</td>
<td>Courtesan</td>
<td>10</td>
</tr>
<tr>
<td>Assess a social hierarchy</td>
<td>Courtesan</td>
<td>15</td>
</tr>
<tr>
<td>Continue steering a vehicle when you take damage</td>
<td>Driver or sailor</td>
<td>5</td>
</tr>
<tr>
<td>Take cover (as the Ride skill) while steering a vehicle</td>
<td>Driver or sailor</td>
<td>15</td>
</tr>
<tr>
<td>Identify a non-creature plant</td>
<td>Farmer or gardener</td>
<td>10</td>
</tr>
<tr>
<td>Rejuvenate dying plants</td>
<td>Farmer or gardener</td>
<td>15</td>
</tr>
<tr>
<td>Provide 1 day's worth of food for yourself and others in the wild or trapper</td>
<td>Fisherman or trapper</td>
<td>15<sup><InnerLink showBacklink="backlink-rule-expanded_profession-ref-3-1" id="rule-expanded_profession-ref-3-1" data-hash-target to="rule-expanded_profession-3">3</InnerLink></sup></td>
</tr>
<tr>
<td>Recall the rules of a game of chance</td>
<td>Gambler</td>
<td>10</td>
</tr>
<tr>
<td>Get a hunch regarding whether a game is rigged</td>
<td>Gambler</td>
<td>20</td>
</tr>
<tr>
<td>Reduce an average or lower cost of living by 50%</td>
<td>Innkeeper</td>
<td>15<sup><InnerLink showBacklink="backlink-rule-expanded_profession-ref-3-2" id="rule-expanded_profession-ref-3-2" data-hash-target to="rule-expanded_profession-3">3</InnerLink></sup></td>
</tr>
<tr>
<td>Sate hunger or thirst for 1 day</td>
<td>Herbalist</td>
<td>10</td>
</tr>
<tr>
<td>Identify common medicinal herbs</td>
<td>Herbalist</td>
<td>10</td>
</tr>
<tr>
<td>Identify rare medicinal herbs</td>
<td>Herbalist</td>
<td>15</td>
</tr>
<tr>
<td>Aid another on a Knowledge check using reference material</td>
<td>Librarian</td>
<td>5</td>
</tr>
<tr>
<td>Recall the name of a rare book</td>
<td>Librarian</td>
<td>15</td>
</tr>
<tr>
<td>Determine where an item was manufactured</td>
<td>Merchant</td>
<td>10<sup><InnerLink showBacklink="backlink-rule-expanded_profession-ref-4-1" id="rule-expanded_profession-ref-4-1" data-hash-target to="rule-expanded_profession-4">4</InnerLink></sup></td>
</tr>
<tr>
<td>Recall where a common good fetches a higher price</td>
<td>Merchant</td>
<td>15</td>
</tr>
<tr>
<td>Safely deliver a child</td>
<td>Midwife</td>
<td>15</td>
</tr>
<tr>
<td>Safely deliver a child despite complications</td>
<td>Midwife</td>
<td>20</td>
</tr>
<tr>
<td>Grind a small piece of a nonmagical substance into powder hardness</td>
<td>Miller</td>
<td>10+hardness</td>
</tr>
<tr>
<td>Identify common metal or semiprecious stone</td>
<td>Miner</td>
<td>5</td>
</tr>
<tr>
<td>Identify rare metal or precious gem</td>
<td>Miner</td>
<td>15</td>
</tr>
<tr>
<td>Ignore half hardness when attacking a stone or metal object</td>
<td>Miner</td>
<td>20</td>
</tr>
<tr>
<td>Increase carrying capacity for 8 hours as if Strength were 2 higher</td>
<td>Porter</td>
<td>15</td>
</tr>
<tr>
<td>Unload a vessel in half the normal time</td>
<td>Porter</td>
<td>20</td>
</tr>
<tr>
<td>Navigate a ship in fair conditions</td>
<td>Sailor</td>
<td>20</td>
</tr>
<tr>
<td>Pilot a ship safely through a hazardous seaway</td>
<td>Sailor</td>
<td>25+</td>
</tr>
<tr>
<td>Determine which scribe wrote a document</td>
<td>Scribe</td>
<td>10<sup><InnerLink showBacklink="backlink-rule-expanded_profession-ref-4-2" id="rule-expanded_profession-ref-4-2" data-hash-target to="rule-expanded_profession-4">4</InnerLink></sup></td>
</tr>
<tr>
<td>Copy a document (30 minutes per page; requires a blank book)</td>
<td>Scribe</td>
<td>10</td>
</tr>
<tr>
<td>Illuminate a manuscript (1 hour per page)</td>
<td>Scribe</td>
<td>20</td>
</tr>
<tr>
<td>Determine the quality of woolen textiles</td>
<td>Shepherd</td>
<td>10</td>
</tr>
<tr>
<td>Determine whether a weapon or armor is of masterwork quality</td>
<td>Soldier</td>
<td>10</td>
</tr>
<tr>
<td>Estimate the size of a military force</td>
<td>Soldier</td>
<td>15</td>
</tr>
<tr>
<td>Identify advantages and disadvantages of a military formation</td>
<td>Soldier</td>
<td>20</td>
</tr>
<tr>
<td>Keep horses fed in the wild</td>
<td>Stable master</td>
<td>10</td>
</tr>
<tr>
<td>Fit or remove barding in half the normal time</td>
<td>Stable master</td>
<td>15</td>
</tr>
<tr>
<td>Recognize damaged or sabotaged horse tack</td>
<td>Stable master</td>
<td>20</td>
</tr>
<tr>
<td>Determine the quality of leatherwork (and tell if it's masterwork quality)</td>
<td>Tanner</td>
<td>10</td>
</tr>
<tr>
<td>Aid another on an Escape Artist check to get out of a trap or snare</td>
<td>Trapper</td>
<td>5</td>
</tr>
<tr>
<td>Reset a trap in half the normal amount of time</td>
<td>Trapper</td>
<td>20</td>
</tr>
<tr>
<td>Scavenge wood suitable for campfire or shelter</td>
<td>Woodcutter</td>
<td>5</td>
</tr>
<tr>
<td>Ignore half hardness when attacking wooden object</td>
<td>Woodcutter</td>
<td>20</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-expanded_profession-label">Footnotes</h3>
<ol>
<li id="rule-expanded_profession-1">
<p>A major crime typically requires a trial involving a series of Bluff, Diplomacy, Intimidate, Profession (barrister), and Sense Motive skill checks, as well as appropriate Knowledge checks. <InnerLink id="backlink-rule-expanded_profession-ref-1-1" data-hash-target to="rule-expanded_profession-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="rule-expanded_profession-2">
<p>To a minimum of 25% of the original value. <InnerLink id="backlink-rule-expanded_profession-ref-2-1" data-hash-target to="rule-expanded_profession-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="rule-expanded_profession-3">
<p>Provide this benefit for yourself plus one other person for every 2 points by which your skill check exceeds the DC. <InnerLink id="backlink-rule-expanded_profession-ref-3-1" data-hash-target to="rule-expanded_profession-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink> <InnerLink id="backlink-rule-expanded_profession-ref-3-2" data-hash-target to="rule-expanded_profession-ref-3-2" aria-label="Back to reference 3-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="rule-expanded_profession-4">
<p>Increase the DC by 5 if the item is from a region the character is unfamiliar with, and by another 5 if it's more than 20 years old. Exceptionally rare or ancient pieces can't usually have their origin identified in this way. <InnerLink id="backlink-rule-expanded_profession-ref-4-1" data-hash-target to="rule-expanded_profession-ref-4-1" aria-label="Back to reference 4-1">↩</InnerLink> <InnerLink id="backlink-rule-expanded_profession-ref-4-2" data-hash-target to="rule-expanded_profession-ref-4-2" aria-label="Back to reference 4-2">↩<sup>2</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
const _consolidated_skills = {title: "Consolidated Skills", parent_topics: ["optional_skill_changes"], siblings: ["alternate_crafting_rules","alternate_profession_rules","background_skills","consolidated_skills","grouped_skills","skill_unlocks","the_elephant_in_the_room"], subtopics: ["skill_descriptions_pu","acrobatics_dex","athletics_str","finesse_dex","influence_cha","nature_int","perception_wis","performance_cha","religion_int","society_int","spellcraft_int","stealth_dex","survival_wis","racial_bonuses","class_skills_2","altering_skill_bonuses","altering_feats","altering_traits","special_class_rules"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 54</Link></p>
<p>The skills in the Core Rulebook allow for complex specialization. In some games, the GM might wish to use a smaller list to make characters more broadly talented, to group skills that characters typically choose together, and to speed up the leveling-up process. The consolidated skills system reduces the number of skills by combining related skills. In many cases, the new skills have been renamed to highlight the nature of the consolidated skill. This variant system makes each skill rank matter more. Even after reducing the number of skill ranks granted, characters will be somewhat more skilled. Character classes that are highly skilled, such as the bard or rogue, get the biggest boost.</p>
<p>The consolidated skills system reduces the number of skills from 35 to 12. Many knowledge skills have been placed into larger categories with a similar theme. Knowledge (arcana), for example, is combined with Use Magic Device under Spellcraft. The list of new skills appears on Table 2-1: Consolidated Skills, along with the key ability for each consolidated skill and the core skills it replaces. Several skills are removed and not replicated by this system, as indicated by a dash (-) on Table 2-2: Converting Core Skills. These are typically skills that are less important for adventuring, but can be put back into your game using the <Link to="/rule/background_skills">background skills variant</Link>. Skills can be converted to and from the consolidated skills system using Table 2-2. This is most helpful when running published adventures or using monsters built using the core system.</p>
<h3 id="rule-consolidated_skills-table-2-1-consolidated-skills">Table 2-1: Consolidated Skills</h3>
<ScrollContainer id="rule-consolidated_skills--table-0"><table>
<thead>
<tr>
<th>New Skill</th>
<th>Untrained</th>
<th>Ability</th>
<th>Core Skills Included</th>
</tr>
</thead>
<tbody><tr>
<td>Acrobatics</td>
<td>Yes</td>
<td>Dex*</td>
<td>Acrobatics (except jumping), Escape Artist, Fly, Ride</td>
</tr>
<tr>
<td>Athletics</td>
<td>Yes</td>
<td>Str*</td>
<td>Acrobatics (jumping), Climb, Swim</td>
</tr>
<tr>
<td>Finesse</td>
<td>No</td>
<td>Dex*</td>
<td>Disable Device, Sleight of Hands</td>
</tr>
<tr>
<td>Influence</td>
<td>Yes</td>
<td>Cha</td>
<td>Bluff, Diplomacy, Intimidate</td>
</tr>
<tr>
<td>Nature</td>
<td>No</td>
<td>Int</td>
<td>Handle Animal, Knowledge (dungeoneering, geography, nature)</td>
</tr>
<tr>
<td>Perception</td>
<td>Yes</td>
<td>Wis</td>
<td>Perception, Sense Motive</td>
</tr>
<tr>
<td>Performance</td>
<td>Yes</td>
<td>Cha</td>
<td>Disguise, Perform</td>
</tr>
<tr>
<td>Religion</td>
<td>No</td>
<td>Int</td>
<td>Knowledge (planes, religion)</td>
</tr>
<tr>
<td>Society</td>
<td>No</td>
<td>Int</td>
<td>Knowledge (history, local, nobility), Linguistics</td>
</tr>
<tr>
<td>Spellcraft</td>
<td>No</td>
<td>Int</td>
<td>Knowledge (arcana), Spellcraft, Use Magic Device</td>
</tr>
<tr>
<td>Stealth</td>
<td>Yes</td>
<td>Dex*</td>
<td>Stealth</td>
</tr>
<tr>
<td>Survival</td>
<td>Yes</td>
<td>Wis</td>
<td>Heal, Survival</td>
</tr>
</tbody></table></ScrollContainer>
<p>*Armor check penalty applies.</p>
<h3 id="rule-consolidated_skills-table-2-2-converting-core-skills">Table 2-2: Converting Core Skills</h3>
<ScrollContainer id="rule-consolidated_skills--table-1"><table>
<thead>
<tr>
<th>Core Skill</th>
<th>Consolidated Skill</th>
</tr>
</thead>
<tbody><tr>
<td>Acrobatics (except jumping)</td>
<td>Acrobatics</td>
</tr>
<tr>
<td>Acrobatics (jumping)*</td>
<td>Athletics</td>
</tr>
<tr>
<td>Appraise</td>
<td>-</td>
</tr>
<tr>
<td>Bluff</td>
<td>Influence</td>
</tr>
<tr>
<td>Climb</td>
<td>Athletics</td>
</tr>
<tr>
<td>Craft</td>
<td>-</td>
</tr>
<tr>
<td>Diplomacy</td>
<td>Influence</td>
</tr>
<tr>
<td>Disable Device</td>
<td>Finesse</td>
</tr>
<tr>
<td>Disguise</td>
<td>Performance</td>
</tr>
<tr>
<td>Escape Artist</td>
<td>Acrobatics</td>
</tr>
<tr>
<td>Fly</td>
<td>Acrobatics</td>
</tr>
<tr>
<td>Handle Animal*</td>
<td>Nature</td>
</tr>
<tr>
<td>Heal</td>
<td>Survival</td>
</tr>
<tr>
<td>Intimidate</td>
<td>Influence</td>
</tr>
<tr>
<td>Knowledge (arcana)</td>
<td>Spellcraft</td>
</tr>
<tr>
<td>Knowledge (dungeoneering)</td>
<td>Nature</td>
</tr>
<tr>
<td>Knowledge (engineering)</td>
<td>-</td>
</tr>
<tr>
<td>Knowledge (geography)</td>
<td>Nature</td>
</tr>
<tr>
<td>Knowledge (history)</td>
<td>Society</td>
</tr>
<tr>
<td>Knowledge (local)</td>
<td>Society</td>
</tr>
<tr>
<td>Knowledge (nature)</td>
<td>Nature</td>
</tr>
<tr>
<td>Knowledge (nobility)</td>
<td>Society</td>
</tr>
<tr>
<td>Knowledge (planes)</td>
<td>Religion</td>
</tr>
<tr>
<td>Knowledge (religion)</td>
<td>Religion</td>
</tr>
<tr>
<td>Linguistics</td>
<td>Society</td>
</tr>
<tr>
<td>Perception</td>
<td>Perception</td>
</tr>
<tr>
<td>Perform</td>
<td>Performance</td>
</tr>
<tr>
<td>Profession</td>
<td>-</td>
</tr>
<tr>
<td>Ride</td>
<td>Acrobatics</td>
</tr>
<tr>
<td>Sense Motive</td>
<td>Perception</td>
</tr>
<tr>
<td>Sleight of Hand</td>
<td>Finesse</td>
</tr>
<tr>
<td>Spellcraft</td>
<td>Spellcraft</td>
</tr>
<tr>
<td>Stealth</td>
<td>Stealth</td>
</tr>
<tr>
<td>Survival</td>
<td>Survival</td>
</tr>
<tr>
<td>Swim</td>
<td>Athletics</td>
</tr>
<tr>
<td>Use Magic Device*</td>
<td>Spellcraft</td>
</tr>
</tbody></table></ScrollContainer>
<p>* This skill's key ability changes under the consolidated skills system.</p>
</>};
const _skill_descriptions_pu = {title: "Skill Descriptions", parent_topics: ["optional_skill_changes","consolidated_skills"], siblings: ["skill_descriptions_pu","acrobatics_dex","athletics_str","finesse_dex","influence_cha","nature_int","perception_wis","performance_cha","religion_int","society_int","spellcraft_int","stealth_dex","survival_wis","racial_bonuses","class_skills_2","altering_skill_bonuses","altering_feats","altering_traits","special_class_rules"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 54</Link></p>
<p>This section describes each consolidated skill, its functions in the game, and a list of the core skills it replaces. Use these descriptions instead of those in the Core Rulebook, though many of the entries refer back to the <Link to="/main/skills">skill descriptions</Link> for more detailed explanations. Each skill listed below is broken down into its different functions, each of which is described in further detail. These details list the action needed to use the skill function, whether you can try again after a failed check, special benefits that apply to the function, and special circumstances that affect whether you can use that function untrained.</p>
<h3 id="rule-skill_descriptions_pu-monster-identification">Monster Identification</h3>
<p>You can use certain skills to identify monsters and their special powers or vulnerabilities. A successful check allows you to remember a bit of useful information about that monster. For every 5 points by which your check result exceeds the DC, you recall another piece of useful information.</p>
<ScrollContainer id="rule-skill_descriptions_pu--table-0"><table>
<thead>
<tr>
<th>Monster Rarity</th>
<th>Skill Check DC</th>
</tr>
</thead>
<tbody><tr>
<td>Common (<Link to="/monster/goblin">goblin</Link>)</td>
<td>5 + monster's CR</td>
</tr>
<tr>
<td>Most monsters</td>
<td>10 + monster's CR</td>
</tr>
<tr>
<td>Rare (<Link to="/monster/tarrasque">tarrasque</Link>)</td>
<td>15 + monster's CR</td>
</tr>
</tbody></table></ScrollContainer>
<p>The list of creature types below indicates which skill to use for each monster type.</p>
<ScrollContainer id="rule-skill_descriptions_pu--table-1"><table>
<thead>
<tr>
<th>Creature Type</th>
<th>Skill</th>
</tr>
</thead>
<tbody><tr>
<td>Aberration</td>
<td>Nature</td>
</tr>
<tr>
<td>Animal</td>
<td>Nature</td>
</tr>
<tr>
<td>Construct</td>
<td>Spellcraft</td>
</tr>
<tr>
<td>Dragon</td>
<td>Spellcraft</td>
</tr>
<tr>
<td>Fey</td>
<td>Nature</td>
</tr>
<tr>
<td>Humanoid</td>
<td>Society</td>
</tr>
<tr>
<td>Magical Beast</td>
<td>Spellcraft</td>
</tr>
<tr>
<td>Monstrous humanoid</td>
<td>Nature</td>
</tr>
<tr>
<td>Ooze</td>
<td>Nature</td>
</tr>
<tr>
<td>Outsider</td>
<td>Religion</td>
</tr>
<tr>
<td>Plant</td>
<td>Nature</td>
</tr>
<tr>
<td>Undead</td>
<td>Religion</td>
</tr>
<tr>
<td>Vermin</td>
<td>Nature</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Action:</strong> None.</p>
<h3 id="rule-skill_descriptions_pu-recall-knowledge">Recall Knowledge</h3>
<p>Some skills have the recall knowledge function. This lets you answer questions about the subjects in question. This has a DC of 10 (for really easy questions), 15 (for basic questions), or 20 to 30 (for really tough questions).</p>
<p><strong className="hl">Action:</strong> Usually none. Using a library (see Untrained, below) takes 1d4 hours.</p>
<p><strong className="hl">Untrained:</strong> You can't attempt an untrained knowledge check with a DC higher than 10 unless you have access to an extensive library on the subject.</p>
</>};
const _acrobatics_dex = {title: "Acrobatics", parent_topics: ["optional_skill_changes","consolidated_skills"], siblings: ["skill_descriptions_pu","acrobatics_dex","athletics_str","finesse_dex","influence_cha","nature_int","perception_wis","performance_cha","religion_int","society_int","spellcraft_int","stealth_dex","survival_wis","racial_bonuses","class_skills_2","altering_skill_bonuses","altering_feats","altering_traits","special_class_rules"], subtopics: ["balance","escape_from_restraints","execute_flying_maneuvers","ride_mounts","soften_falls","squeeze","tumble"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 54</Link></p>
<h3 id="rule-acrobatics_dex-acrobatics-dex-armor-check-penalty">Acrobatics (Dex; Armor Check Penalty)</h3>
<p>You have a talent for balance and coordination, including aerial maneuvers, gymnastics, and tumbling.</p>
<p><strong className="hl">Functions:</strong> Balance, escape from restraints, execute flying maneuvers, ride mounts, soften falls, squeeze, tumble.</p>
<p><strong className="hl">Core Skills:</strong> Acrobatics (except jumping), Escape Artist, Fly, Ride.</p>
<p><strong className="hl">Acrobatics Modifiers:</strong> The circumstances listed on the table below apply modifiers to Acrobatics check DCs. Although modifiers from different categories (such as slippery, sloped, etc.) stack with each other, only the most severe modifier from each particular category applies.</p>
<ScrollContainer id="rule-acrobatics_dex--table-0"><table>
<thead>
<tr>
<th>Acrobatics Circumstance</th>
<th>Acrobatics DC Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Slightly obstructed (gravel, sand)</td>
<td>+2</td>
</tr>
<tr>
<td>Severely obstructed (cavern, rubble)</td>
<td>+5</td>
</tr>
<tr>
<td>Slightly slippery (wet)</td>
<td>+2</td>
</tr>
<tr>
<td>Severely slippery (icy)</td>
<td>+5</td>
</tr>
<tr>
<td>Slightly sloped (&lt;45&deg;)</td>
<td>+2</td>
</tr>
<tr>
<td>Severely sloped (&gt;45&deg;)</td>
<td>+5</td>
</tr>
<tr>
<td>Slightly unsteady (boat in rough water)</td>
<td>+2</td>
</tr>
<tr>
<td>Moderately unsteady (boat in a storm)</td>
<td>+5</td>
</tr>
<tr>
<td>Severely unsteady (earthquake)</td>
<td>+10</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Special:</strong> If you have 3 or more ranks in Acrobatics, you gain a +3 dodge bonus to AC when fighting defensively instead of the usual +2, and a +6 dodge bonus to AC when taking the total defense action instead of the usual +4.</p>
</>};
const _balance = {title: "Balance", parent_topics: ["optional_skill_changes","consolidated_skills","acrobatics_dex"], siblings: ["balance","escape_from_restraints","execute_flying_maneuvers","ride_mounts","soften_falls","squeeze","tumble"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 55</Link></p>
<p>You can attempt an Acrobatics check to keep your balance while crossing narrow surfaces or treacherous ground. If you fail, you fall or are knocked prone. You move at half speed while balancing, but you can move at full speed if you increase the DC by 5. You're considered flat-footed while balancing. You need to attempt a check to balance only once per round, but if you take damage, you must attempt another check with the same DC. You don't need to attempt a check if the DC is lower than 10, but modifiers might raise a low DC to 10 or higher.</p>
<p><strong className="hl">Action:</strong> None.</p>
<ScrollContainer id="rule-balance--table-0"><table>
<thead>
<tr>
<th>Surface Width</th>
<th>Acrobatics DC</th>
</tr>
</thead>
<tbody><tr>
<td>Greater than 3 feet wide</td>
<td>0</td>
</tr>
<tr>
<td>1-3 feet wide</td>
<td>5</td>
</tr>
<tr>
<td>07-11 inches wide</td>
<td>10</td>
</tr>
<tr>
<td>2-6 inches wide</td>
<td>15</td>
</tr>
<tr>
<td>Less than 2 inches wide</td>
<td>20</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _escape_from_restraints = {title: "Escape from Restraints", parent_topics: ["optional_skill_changes","consolidated_skills","acrobatics_dex"], siblings: ["balance","escape_from_restraints","execute_flying_maneuvers","ride_mounts","soften_falls","squeeze","tumble"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 55</Link></p>
<p>Getting free of restraints, a grapple, or an entanglement requires an Acrobatics check. You can attempt an Acrobatics check instead of a combat maneuver check to escape a grapple or pin.</p>
<ScrollContainer id="rule-escape_from_restraints--table-0"><table>
<thead>
<tr>
<th>Restraint</th>
<th>Acrobatics DC</th>
</tr>
</thead>
<tbody><tr>
<td>Rope/bindings</td>
<td>Binder's CMB + 20</td>
</tr>
<tr>
<td>Net, <Link to="/spell/animate_rope">animate rope</Link></td>
<td>20</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/spell/snare">Snare<IonRippleEffect /></Link></td>
<td>23</td>
</tr>
<tr>
<td>Manacles</td>
<td>30</td>
</tr>
<tr>
<td>Masterwork manacles</td>
<td>35</td>
</tr>
<tr>
<td>Grappler</td>
<td>Grappler's CMD</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Action:</strong> 1 minute for restraints, full-round action for a net or a listed spell, standard action for a grapple or pin.</p>
<p><strong className="hl">Try Again:</strong> Yes. You can even take 20 if you're not being actively opposed.</p>
</>};
const _execute_flying_maneuvers = {title: "Execute Flying Maneuvers", parent_topics: ["optional_skill_changes","consolidated_skills","acrobatics_dex"], siblings: ["balance","escape_from_restraints","execute_flying_maneuvers","ride_mounts","soften_falls","squeeze","tumble"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 56</Link></p>
<p>This use of Acrobatics functions as the <Link to="/skill/fly">Fly core skill</Link> The skill alone doesn't give you the ability to fly.</p>
<p><strong className="hl">Action:</strong> None.</p>
</>};
const _ride_mounts = {title: "Ride Mounts", parent_topics: ["optional_skill_changes","consolidated_skills","acrobatics_dex"], siblings: ["balance","escape_from_restraints","execute_flying_maneuvers","ride_mounts","soften_falls","squeeze","tumble"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 56</Link></p>
<p>This use of Acrobatics functions as the <Link to="/skill/ride">Ride core skill</Link>.</p>
<p><strong className="hl">Action:</strong> Varies. Mounting or dismounting is normally a move action.</p>
</>};
const _soften_falls = {title: "Soften Falls", parent_topics: ["optional_skill_changes","consolidated_skills","acrobatics_dex"], siblings: ["balance","escape_from_restraints","execute_flying_maneuvers","ride_mounts","soften_falls","squeeze","tumble"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 56</Link></p>
<p>When you deliberately fall any distance, even as a result of a missed jump, you can attempt a DC 15 Acrobatics check to ignore the first 10 feet fallen. You still end up prone if you take damage from the fall.</p>
<p><strong className="hl">Action:</strong> None.</p>
</>};
const _squeeze = {title: "Squeeze", parent_topics: ["optional_skill_changes","consolidated_skills","acrobatics_dex"], siblings: ["balance","escape_from_restraints","execute_flying_maneuvers","ride_mounts","soften_falls","squeeze","tumble"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 56</Link></p>
<p>A successful DC 30 Acrobatics check allows you to squeeze through a gap through which your head fits but your shoulders don't. You can't fit through spaces smaller than your head.</p>
<p><strong className="hl">Action:</strong> 1 minute or longer, possibly requiring multiple checks.</p>
<p><strong className="hl">Try Again:</strong> Yes. You can even take 20 if you're not being actively opposed.</p>
</>};
const _tumble = {title: "Tumble", parent_topics: ["optional_skill_changes","consolidated_skills","acrobatics_dex"], siblings: ["balance","escape_from_restraints","execute_flying_maneuvers","ride_mounts","soften_falls","squeeze","tumble"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 56</Link></p>
<p>You can attempt an Acrobatics check to avoid provoking an attack of opportunity when moving through a threatened square. If you fail, your movement ends and you provoke an attack of opportunity from the threatening opponent. You move at half speed when you tumble, but you can move at full speed if you increase the DC by 10. If you try to tumble past multiple opponents in the same round, attempt an Acrobatics check against each of them. The DC increases by 2 for each opponent beyond the first.</p>
<p><strong className="hl">Action:</strong> None.</p>
<ScrollContainer id="rule-tumble--table-0"><table>
<thead>
<tr>
<th>Intended Movement</th>
<th>Acrobatics DC</th>
</tr>
</thead>
<tbody><tr>
<td>Move through a threatened area</td>
<td>Opponent's CMD</td>
</tr>
<tr>
<td>Move through an enemy's space</td>
<td>5 + opponent's CMD</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Loads:</strong> You can't tumble when carrying a medium or heavy load or wearing medium or heavy armor unless an ability allows you to move at full speed in such conditions.</p>
<p><strong className="hl">Prone:</strong> You can tumble while prone, but this is a full-round action to move 5 feet, and the DC increases by 5.</p>
</>};
const _athletics_str = {title: "Athletics", parent_topics: ["optional_skill_changes","consolidated_skills"], siblings: ["skill_descriptions_pu","acrobatics_dex","athletics_str","finesse_dex","influence_cha","nature_int","perception_wis","performance_cha","religion_int","society_int","spellcraft_int","stealth_dex","survival_wis","racial_bonuses","class_skills_2","altering_skill_bonuses","altering_feats","altering_traits","special_class_rules"], subtopics: ["catch","climb","jump","swim"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 56</Link></p>
<h3 id="rule-athletics_str-athletics-str-armor-check-penalty">Athletics (Str; Armor Check Penalty)</h3>
<p>You are skilled at deeds of physical prowess such as leaping, scaling walls, and swimming. Raw lifting ability uses a Strength check rather than an Athletics check.</p>
<p><strong className="hl">Functions:</strong> Catch, climb, jump, swim.</p>
<p><strong className="hl">Core Skills:</strong> Acrobatics (jumping only), Climb, Swim.</p>
</>};
const _catch = {title: "Catch", parent_topics: ["optional_skill_changes","consolidated_skills","athletics_str"], siblings: ["catch","climb","jump","swim"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 56</Link></p>
<p>You can attempt an Athletics check to catch yourself while falling along a wall or slope. The DC is equal to the wall's climb DC + 20 or the slope's climb DC + 10 (see <Link to="/rule/climb">Climb</Link>, below).</p>
<p>To catch another character that falls while within your reach, you must succeed at a melee touch attack (the target can forgo her Dexterity bonus to AC). If you hit, you then attempt an Athletics check with a DC equal to the wall's climb DC + 10. If you succeed, you catch the falling character, but if her total weight (with equipment) exceeds your heavy load limit, you fall. If you fail by 4 or less, you don't stop the character's fall but don't lose your grip. If you fail by 5 or more, you fail to stop her fall and you begin falling as well.</p>
<p><strong className="hl">Action:</strong> None.</p>
</>};
const _climb = {title: "Climb", parent_topics: ["optional_skill_changes","consolidated_skills","athletics_str"], siblings: ["catch","climb","jump","swim"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 56</Link></p>
<p>Using Athletics, you can advance up, down, or across a slope, wall, or other steep incline (or a ceiling if it has handholds). You move at one-quarter your speed, though you can move at half your speed if you take a -5 penalty. If you fail the check by 4 or less, you make no progress. If you fail by 5 or more, you fall. A perfectly smooth vertical (or inverted) surface can't be climbed.</p>
<p>You need both hands free to climb, but can cling with one hand while using the other to cast a spell or take some other action. You can't use a shield while climbing. You lose your Dexterity bonus to AC while climbing. If you take damage while climbing, you must succeed at an Athletics check against the DC of the surface or fall.</p>
<ScrollContainer id="rule-climb--table-0"><table>
<thead>
<tr>
<th>Surface or Activity</th>
<th>Athletics DC</th>
</tr>
</thead>
<tbody><tr>
<td>Slope too steep to walk up</td>
<td>0</td>
</tr>
<tr>
<td>Knotted rope with a wall to brace against</td>
<td>0</td>
</tr>
<tr>
<td>Knotted rope or rope affected by <Link to="/spell/rope_trick">rope trick</Link></td>
<td>5</td>
</tr>
<tr>
<td>Rope with a wall to brace against</td>
<td>5</td>
</tr>
<tr>
<td>Surface with ledges to hold on to or stand on</td>
<td>10</td>
</tr>
<tr>
<td>Pull yourself up when dangling</td>
<td>15</td>
</tr>
<tr>
<td>Surface with handholds and footholds</td>
<td>15</td>
</tr>
<tr>
<td>Unknotted rope</td>
<td>15</td>
</tr>
<tr>
<td>Uneven surface with handholds (dungeon wall)</td>
<td>20</td>
</tr>
<tr>
<td>Rough surface (natural rock or brick wall)</td>
<td>25</td>
</tr>
<tr>
<td>Overhang or ceiling with handholds only</td>
<td>30</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Climbing Modifiers:</strong> The circumstances listed on the table modify Athletics DCs. They stack with each other.</p>
<ScrollContainer id="rule-climb--table-1"><table>
<thead>
<tr>
<th>Climbing Circumstance</th>
<th>Athletics DC Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Bracing against two opposite walls (chimney)</td>
<td>-10</td>
</tr>
<tr>
<td>Bracing against perpendicular walls (corner)</td>
<td>-5</td>
</tr>
<tr>
<td>Surface is slippery</td>
<td>+5</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Action:</strong> None. Each move action you take requires a separate Athletics check.</p>
<p><strong className="hl">Making Handholds and Footholds:</strong> You can pound pitons into a wall to change the wall's base DC to 15. This takes 1 minute per piton, and one piton is needed per 5 feet of distance. You can cut your own handholds into an ice wall for the same purpose if you have a handaxe or similar implement.</p>
<p><strong className="hl">Climb Speeds:</strong> A creature with a climb speed gains a +8 racial bonus on Athletics checks to climb. See the <Link to="/skill/climb">Climb skill</Link> for more information on climb speeds.</p>
<p><strong className="hl">Hauling:</strong> You can haul a character up or down on a rope by sheer strength so that character doesn't need to attempt Athletics checks. You can lift double your maximum load in this manner.</p>
</>};
const _jump = {title: "Jump", parent_topics: ["optional_skill_changes","consolidated_skills","athletics_str"], siblings: ["catch","climb","jump","swim"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 57</Link></p>
<p>You can make jumps using Athletics. The DC is equal to the distance crossed (in feet) for a long jump or four times the height to be reached (in feet) for a high jump. If you don't have a running start of at least 10 feet, double the DC. If you fail an Athletics check to jump across a horizontal gap by 4 or less, you can attempt a DC 20 Reflex save to grab hold of the other side. If you fail by 5 or more, you fall (or land prone if you were attempting a high jump). The DC for a jump uses the same modifiers as the DC of an <Link to="/rule/acrobatics_dex">Acrobatics check</Link>, depending on the surface from which you're jumping. For example, the DC for a jump that begins on a sandy surface would increase by 2. You can't exceed your maximum movement for a round by jumping.</p>
<ScrollContainer id="rule-jump--table-0"><table>
<thead>
<tr>
<th>Long Jump</th>
<th>Acrobatics DC</th>
<th>High Jump</th>
<th>Acrobatics DC</th>
</tr>
</thead>
<tbody><tr>
<td>5 feet</td>
<td>5</td>
<td>1 foot</td>
<td>4</td>
</tr>
<tr>
<td>10 feet</td>
<td>10</td>
<td>2 feet</td>
<td>8</td>
</tr>
<tr>
<td>15 feet</td>
<td>15</td>
<td>3 feet</td>
<td>12</td>
</tr>
<tr>
<td>20 feet</td>
<td>20</td>
<td>4 feet</td>
<td>16</td>
</tr>
<tr>
<td>Greater than 20 feet</td>
<td>+5 per 5 feet</td>
<td>Greater than 4 feet</td>
<td>+4 per foot</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Action:</strong> None.</p>
<p><strong className="hl">Acrobatics:</strong> You can attempt to use Acrobatics instead of Athletics to jump, at a -5 penalty.</p>
<p><strong className="hl">Speed Bonus:</strong> If your base land speed is 40 feet or more, you gain a +4 racial bonus on Athletics checks to jump for every 10 feet by which your base land speed exceeds 30 feet. Likewise, you take a -4 racial penalty for every 10 feet your speed is below 30 feet.</p>
</>};
const _swim = {title: "Swim", parent_topics: ["optional_skill_changes","consolidated_skills","athletics_str"], siblings: ["catch","climb","jump","swim"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 57</Link></p>
<p>A successful Athletics check while you're in the water allows you to swim at either half your speed as a full-round action or one-quarter your speed as a move action. If you fail by 4 or less, you make no progress. If you fail by 5 or more, you go underwater. Attempt one Athletics check to swim each round.</p>
<ScrollContainer id="rule-swim--table-0"><table>
<thead>
<tr>
<th>Water</th>
<th>Athletics DC</th>
</tr>
</thead>
<tbody><tr>
<td>Calm water</td>
<td>10</td>
</tr>
<tr>
<td>Rough water</td>
<td>15</td>
</tr>
<tr>
<td>Stormy water</td>
<td>20*</td>
</tr>
</tbody></table></ScrollContainer>
<p>* You can't take 10 on an Athletics check to swim in stormy water.</p>
<p><strong className="hl">Action:</strong> Move action at one-quarter your speed or full-round action at half your speed.</p>
<p><strong className="hl">Holding Your Breath:</strong> When you're underwater, you can hold your breath for a number of rounds equal to twice your Constitution score. If you take a standard or full-round action, reduce the duration you can continue to hold your breath by 1 round. After you run out of rounds, you must succeed at a DC 10 Constitution check each round or begin to drown. Each round, the DC to resist drowning increases by 1. See the <Link to="/rule/drowning">Drowning</Link> rules from the Core Rulebook.</p>
<p><strong className="hl">Extended Swimming:</strong> Each hour you swim, you must succeed at a DC 20 Swim check or take 1d6 points of nonlethal damage.</p>
<p><strong className="hl">Swim Speeds:</strong> A creature with a swim speed gains a +8 racial bonus on Athletics checks to swim. See the <Link to="/skill/swim">Swim</Link> skill from the Core Rulebook for more information on swim speeds.</p>
</>};
const _finesse_dex = {title: "Finesse", parent_topics: ["optional_skill_changes","consolidated_skills"], siblings: ["skill_descriptions_pu","acrobatics_dex","athletics_str","finesse_dex","influence_cha","nature_int","perception_wis","performance_cha","religion_int","society_int","spellcraft_int","stealth_dex","survival_wis","racial_bonuses","class_skills_2","altering_skill_bonuses","altering_feats","altering_traits","special_class_rules"], subtopics: ["conceal_objects_on_your_body","disarm_traps_or_devices","open_locks","palm_objects","pilfer_objects_from_creatures"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 58</Link></p>
<h3 id="rule-finesse_dex-finesse-dex-armor-check-penalty-trained-only">Finesse (Dex; Armor Check Penalty; Trained Only)</h3>
<p>Your deft hands allow you to perform tasks that require fine manipulation.</p>
<p><strong className="hl">Functions:</strong> Conceal objects on your body, disarm traps or devices, open locks, palm objects, pilfer objects from creatures.</p>
<p><strong className="hl">Core Skills:</strong> Disable Device, Sleight of Hand.</p>
</>};
const _conceal_objects_on_your_body = {title: "Conceal Objects on Your Body", parent_topics: ["optional_skill_changes","consolidated_skills","finesse_dex"], siblings: ["conceal_objects_on_your_body","disarm_traps_or_devices","open_locks","palm_objects","pilfer_objects_from_creatures"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 58</Link></p>
<p>Hiding a small object on your person (such as a light weapon or easily concealed ranged weapon such as a dart, sling, or hand crossbow) requires a Finesse check opposed by the Perception check of anyone observing or frisking you. You gain a +2 bonus on this check if you're concealing a dagger. Someone frisking you gains a +4 bonus on this Perception check. The type of item you conceal and the nature of your attire can modify your check. These modifiers are cumulative.</p>
<ScrollContainer id="rule-conceal_objects_on_your_body--table-0"><table>
<thead>
<tr>
<th>Circumstance</th>
<th>Finesse DC</th>
</tr>
</thead>
<tbody><tr>
<td>Dagger</td>
<td>+2</td>
</tr>
<tr>
<td>Extraordinarily small object (coin, ring, shuriken)</td>
<td>+4</td>
</tr>
<tr>
<td>Heavy or baggy clothing</td>
<td>+2</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Action:</strong> Standard, or move at a -20 penalty.</p>
<p><strong className="hl">Try Again:</strong> Yes, but a second attempt against the same target increases the DC by 10.</p>
<p><strong className="hl">Drawing Weapons:</strong> Drawing a hidden weapon is a standard action that doesn't provoke attacks of opportunity.</p>
</>};
const _disarm_traps_or_devices = {title: "Disarm Traps or Devices", parent_topics: ["optional_skill_changes","consolidated_skills","finesse_dex"], siblings: ["conceal_objects_on_your_body","disarm_traps_or_devices","open_locks","palm_objects","pilfer_objects_from_creatures"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 58</Link></p>
<p>The GM rolls this type of Finesse check in secret so you don't know whether you're successful. If you succeed, you disable the device. If you fail by 4 or less, you don't disable it, but can try again. If you fail to disable a trap by 5 or more, the trap triggers. If you fail to sabotage a different type of device by 5 or more, you think you succeeded but the device actually functions normally.</p>
<p>You can attempt to leave no trace of your tampering, but this increases the DC by 5. You can rig simple devices (such as saddles and wagon wheels) to function normally and break after some period of time (usually 1d4 rounds or minutes of use).</p>
<ScrollContainer id="rule-disarm_traps_or_devices--table-0"><table>
<thead>
<tr>
<th>Device</th>
<th>Time</th>
<th>Finesse DC</th>
<th>Example</th>
</tr>
</thead>
<tbody><tr>
<td>Simple</td>
<td>1 round</td>
<td>10</td>
<td>Jam a lock</td>
</tr>
<tr>
<td>Tricky</td>
<td>1d4 rounds</td>
<td>15</td>
<td>Sabotage a wagon wheel</td>
</tr>
<tr>
<td>Difficult</td>
<td>2d4 rounds</td>
<td>20</td>
<td>Disarm or reset a trap</td>
</tr>
<tr>
<td>Extreme</td>
<td>2d4 rounds</td>
<td>25</td>
<td>Disarm a complex trap, cleverly sabotage a clockwork device</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Action:</strong> Varies (see table). Beginning or continuing the process of disarming is a full-round action.</p>
<p><strong className="hl">Try Again:</strong> Yes, but only if you fail by 4 or less.</p>
</>};
const _open_locks = {title: "Open Locks", parent_topics: ["optional_skill_changes","consolidated_skills","finesse_dex"], siblings: ["conceal_objects_on_your_body","disarm_traps_or_devices","open_locks","palm_objects","pilfer_objects_from_creatures"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 58</Link></p>
<p>The DC for opening a lock depends on the lock's quality.</p>
<ScrollContainer id="rule-open_locks--table-0"><table>
<thead>
<tr>
<th>Lock Quality</th>
<th>Finesse DC</th>
</tr>
</thead>
<tbody><tr>
<td>Simple</td>
<td>20</td>
</tr>
<tr>
<td>Average</td>
<td>25</td>
</tr>
<tr>
<td>Good</td>
<td>30</td>
</tr>
<tr>
<td>Superior</td>
<td>40</td>
</tr>
<tr>
<td>Lacking thieves' tools</td>
<td>+10</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Action:</strong> Full-round.</p>
<p><strong className="hl">Try Again:</strong> Yes.</p>
</>};
const _palm_objects = {title: "Palm Objects", parent_topics: ["optional_skill_changes","consolidated_skills","finesse_dex"], siblings: ["conceal_objects_on_your_body","disarm_traps_or_devices","open_locks","palm_objects","pilfer_objects_from_creatures"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 58</Link></p>
<p>Performing a minor feat of legerdemain or palming a coin-sized, unattended object requires a successful DC 10 Finesse check. If you're under close observation, the observer notices your action if it succeeds at an opposed Perception check against your Finesse check.</p>
<p><strong className="hl">Action:</strong> Standard, or move at a -20 penalty.</p>
<p><strong className="hl">Try Again:</strong> Yes, but a second attempt against the same target increases the DC by 10.</p>
</>};
const _pilfer_objects_from_creatures = {title: "Pilfer Objects from Creatures", parent_topics: ["optional_skill_changes","consolidated_skills","finesse_dex"], siblings: ["conceal_objects_on_your_body","disarm_traps_or_devices","open_locks","palm_objects","pilfer_objects_from_creatures"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 58</Link></p>
<p>Surreptitiously stealing an item from a creature requires a successful DC 20 Finesse check. The opponent attempts an opposed Perception check against the result of your Finesse check. If she succeeds, she notices your attempt regardless of whether you got the item. You can't attempt to pilfer an object during combat from a creature that's aware of your presence.</p>
<p><strong className="hl">Action:</strong> Standard, or move at a -20 penalty.</p>
<p><strong className="hl">Try Again:</strong> Yes, but a second attempt against the same target increases the DC by 10.</p>
</>};
const _influence_cha = {title: "Influence", parent_topics: ["optional_skill_changes","consolidated_skills"], siblings: ["skill_descriptions_pu","acrobatics_dex","athletics_str","finesse_dex","influence_cha","nature_int","perception_wis","performance_cha","religion_int","society_int","spellcraft_int","stealth_dex","survival_wis","racial_bonuses","class_skills_2","altering_skill_bonuses","altering_feats","altering_traits","special_class_rules"], subtopics: ["change_others_attitudes","create_diversions","demoralize","feint_in_combat","gather_information_pu","intimidate","lie","make_requests","pass_secret_messages"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 58</Link></p>
<h3 id="rule-influence_cha-influence-cha">Influence (Cha)</h3>
<p>You can manipulate other people through negotiation, deceit, or intimidation.</p>
<p><strong className="hl">Functions:</strong> Change others' attitudes, create diversions, demoralize, feint in combat, gather information, intimidate, lie, make requests, pass secret messages.</p>
<p><strong className="hl">Core Skills:</strong> Bluff, Diplomacy, Intimidate.</p>
</>};
const _change_others_attitudes = {title: "Change Others' Attitudes", parent_topics: ["optional_skill_changes","consolidated_skills","influence_cha"], siblings: ["change_others_attitudes","create_diversions","demoralize","feint_in_combat","gather_information_pu","intimidate","lie","make_requests","pass_secret_messages"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 58</Link></p>
<p>You can use Influence to change the attitudes of NPCs. The DC is determined by the target's starting attitude plus its Charisma modifier. If you succeed, you improve the target's attitude toward you by one step, plus one more step if you beat the DC by 5 or more. You can't shift an attitude by more than two steps with a single check. If you fail by 4 or less, the target's attitude is unchanged, and if you fail by 5 or more, the target's attitude decreases by one step. An attitude shift typically lasts 1d4 hours. You can use Influence to make a request of a creature whose attitude toward you is indifferent or better.</p>
<p>You can't change the attitude of a creature that doesn't understand you or that has an Intelligence score of 3 or lower. This function of Influence is generally ineffective in combat.</p>
<ScrollContainer id="rule-change_others_attitudes--table-0"><table>
<thead>
<tr>
<th>Starting Attitude</th>
<th>Influence DC</th>
</tr>
</thead>
<tbody><tr>
<td>Hostile</td>
<td>25 + target's Cha modifier</td>
</tr>
<tr>
<td>Unfriendly</td>
<td>20 + target's Cha modifier</td>
</tr>
<tr>
<td>Indifferent</td>
<td>15 + target's Cha modifier</td>
</tr>
<tr>
<td>Friendly</td>
<td>10 + target's Cha modifier</td>
</tr>
<tr>
<td>Helpful</td>
<td>0 + target's Cha modifier</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Action:</strong> 1 minute of continuous interaction.</p>
<p><strong className="hl">Try Again:</strong> You can't attempt to change a creature's attitude more than once per 24-hour period.</p>
</>};
const _create_diversions = {title: "Create Diversions", parent_topics: ["optional_skill_changes","consolidated_skills","influence_cha"], siblings: ["change_others_attitudes","create_diversions","demoralize","feint_in_combat","gather_information_pu","intimidate","lie","make_requests","pass_secret_messages"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 59</Link></p>
<p>You can create a diversion to hide. You attempt an Influence check against the viewer's opposed Perception check to sense motive. If you succeed, you can attempt a Stealth check. When applicable, use the same modifiers from the lie function.</p>
<p><strong className="hl">Action:</strong> Standard.</p>
<p><strong className="hl">Try Again:</strong> Yes.</p>
</>};
const _demoralize = {title: "Demoralize", parent_topics: ["optional_skill_changes","consolidated_skills","influence_cha"], siblings: ["change_others_attitudes","create_diversions","demoralize","feint_in_combat","gather_information_pu","intimidate","lie","make_requests","pass_secret_messages"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 59</Link></p>
<p>You can cause an opponent to become shaken. The DC equals 10 + the target's Hit Dice + the target's Wisdom modifier. If you succeed, the target is shaken for 1 round, plus 1 round for every 5 by which you exceeded the DC. Your target must be within 30 feet and able to clearly see and hear you. Demoralizing the same creature again extends the duration; it doesn't cause a stronger fear condition.</p>
<p><strong className="hl">Action:</strong> Standard.</p>
<p><strong className="hl">Try Again:</strong> Yes, but each additional check against the same target increases the DC by 5. This increase resets after 1 hour.</p>
<p><strong className="hl">Size Bonus:</strong> You gain a +4 bonus on checks to demoralize creatures smaller than you and take a -4 penalty on checks to demoralize creatures larger than you.</p>
</>};
const _feint_in_combat = {title: "Feint in Combat", parent_topics: ["optional_skill_changes","consolidated_skills","influence_cha"], siblings: ["change_others_attitudes","create_diversions","demoralize","feint_in_combat","gather_information_pu","intimidate","lie","make_requests","pass_secret_messages"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 59</Link></p>
<p><Link to="/rule/feint">Feinting in combat is described here.</Link> You use Influence instead of the Bluff core skill, and your opponent uses Perception instead of the Sense Motive core skill.</p>
<p><strong className="hl">Action:</strong> Standard.</p>
<p><strong className="hl">Try Again:</strong> Yes.</p>
</>};
const _gather_information_pu = {title: "Gather Information", parent_topics: ["optional_skill_changes","consolidated_skills","influence_cha"], siblings: ["change_others_attitudes","create_diversions","demoralize","feint_in_combat","gather_information_pu","intimidate","lie","make_requests","pass_secret_messages"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 60</Link></p>
<p>By canvassing people at local taverns, markets, and gathering places, you can attempt to learn about a specific topic or individual. The GM might rule that some topics are unknown to common folk.</p>
<ScrollContainer id="rule-gather_information_pu--table-0"><table>
<thead>
<tr>
<th>Information Sought</th>
<th>Influence DC</th>
</tr>
</thead>
<tbody><tr>
<td>Common facts or rumors</td>
<td>10</td>
</tr>
<tr>
<td>Obscure or secret knowledge</td>
<td>20 or higher</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Action:</strong> 1d4 hours.</p>
<p><strong className="hl">Try Again:</strong> Yes.</p>
</>};
const _intimidate = {title: "Intimidate", parent_topics: ["optional_skill_changes","consolidated_skills","influence_cha"], siblings: ["change_others_attitudes","create_diversions","demoralize","feint_in_combat","gather_information_pu","intimidate","lie","make_requests","pass_secret_messages"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 60</Link></p>
<p>You can force an opponent to act friendly toward you for 1d6 &times; 10 minutes with a successful Influence check. The DC of this check is equal to 10 + the target's Hit Dice + the target's Wisdom modifier. If you succeed, the target gives you the information you desire, takes actions that don't endanger it, and otherwise offers limited assistance. Once the intimidation expires, the target becomes unfriendly and might report you to the authorities. If you fail by 5 or more, the target attempts to deceive you or otherwise hinder your activities.</p>
<p><strong className="hl">Action:</strong> 1 minute of conversation.</p>
<p><strong className="hl">Try Again:</strong> Yes, but each additional check increases the DC by 5. This increase resets after 1 hour.</p>
<p><strong className="hl">Size Bonus:</strong> You gain a +4 bonus on checks to intimidate creatures smaller than you and take a -4 penalty on checks to intimidate creatures larger than you.</p>
</>};
const _lie = {title: "Lie", parent_topics: ["optional_skill_changes","consolidated_skills","influence_cha"], siblings: ["change_others_attitudes","create_diversions","demoralize","feint_in_combat","gather_information_pu","intimidate","lie","make_requests","pass_secret_messages"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 60</Link></p>
<p>You can try to fool someone by attempting an Influence check. The DC of this check is the result of your opponent's Perception check to sense motive. Apply the appropriate modifiers from the table below. These modifiers stack with each other, but apply only one modifier related to the believability of the lie - the more outlandish the lie, the harder it is to make others believe it. The GM might rule that attempts to tell extremely improbable lies automatically fail.</p>
<ScrollContainer id="rule-lie--table-0"><table>
<thead>
<tr>
<th>Lie Circumstances</th>
<th>Influence Check Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Target wants to believe you</td>
<td>+5</td>
</tr>
<tr>
<td>Lie is believable</td>
<td>+0</td>
</tr>
<tr>
<td>Lie is unlikely</td>
<td>-5</td>
</tr>
<tr>
<td>Lie is far-fetched</td>
<td>-10</td>
</tr>
<tr>
<td>Lie is impossible</td>
<td>-20</td>
</tr>
<tr>
<td>Target is drunk or impaired</td>
<td>+5</td>
</tr>
<tr>
<td>You have convincing proof</td>
<td>Up to +10</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Action:</strong> 1 round, or longer if the lie is elaborate.</p>
<p><strong className="hl">Try Again:</strong> Yes. Further checks against the same target take a -10 penalty.</p>
</>};
const _make_requests = {title: "Make Requests", parent_topics: ["optional_skill_changes","consolidated_skills","influence_cha"], siblings: ["change_others_attitudes","create_diversions","demoralize","feint_in_combat","gather_information_pu","intimidate","lie","make_requests","pass_secret_messages"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 60</Link></p>
<p>You can make a request of a creature if its attitude toward you is indifferent or better. Use the DC from the table in the Change Attitudes section, with one of the following modifiers. A creature that's helpful typically gives in to most requests without a check unless the request is against its nature or puts it in serious peril. The GM might rule that some requests automatically fail if they're against a creature's values or nature.</p>
<ScrollContainer id="rule-make_requests--table-0"><table>
<thead>
<tr>
<th>Request</th>
<th>Influence DC Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Give simple advice or directions</td>
<td>-5</td>
</tr>
<tr>
<td>Give detailed advice</td>
<td>+0</td>
</tr>
<tr>
<td>Give simple aid</td>
<td>+0</td>
</tr>
<tr>
<td>Reveal unimportant secret</td>
<td>+5</td>
</tr>
<tr>
<td>Give lengthy or complicated aid</td>
<td>+5</td>
</tr>
<tr>
<td>Give dangerous aid</td>
<td>+10</td>
</tr>
<tr>
<td>Reveal an important secret</td>
<td>+10 or more</td>
</tr>
<tr>
<td>Give aid that could result in punishment</td>
<td>+15 or more</td>
</tr>
<tr>
<td>Additional requests</td>
<td>+5 per request</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Action:</strong> 1 or more rounds, depending on the complexity of the request.</p>
<p><strong className="hl">Try Again:</strong> No, though you can make other requests of the same target.</p>
</>};
const _pass_secret_messages = {title: "Pass Secret Messages", parent_topics: ["optional_skill_changes","consolidated_skills","influence_cha"], siblings: ["change_others_attitudes","create_diversions","demoralize","feint_in_combat","gather_information_pu","intimidate","lie","make_requests","pass_secret_messages"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 60</Link></p>
<p>You can use innuendo to pass a hidden message to another character. If you succeed, the target automatically understands you if you're communicating in a language it understands. If you fail by 5 or more, you deliver the wrong message. Other creatures that receive the message can decipher it by succeeding at opposed Perception checks to <Link to="/rule/sense_motive">sense motive</Link> against your result. See the discern secret message function of <Link to="/skill/perception">Perception</Link> to determine when a secret message is intercepted.</p>
<ScrollContainer id="rule-pass_secret_messages--table-0"><table>
<thead>
<tr>
<th>Secret Message</th>
<th>Influence DC</th>
</tr>
</thead>
<tbody><tr>
<td>Simple message</td>
<td>15</td>
</tr>
<tr>
<td>Complex message</td>
<td>20</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Action:</strong> Twice as long as it would take to convey the message normally.</p>
<p><strong className="hl">Try Again:</strong> Yes.</p>
</>};
const _nature_int = {title: "Nature", parent_topics: ["optional_skill_changes","consolidated_skills"], siblings: ["skill_descriptions_pu","acrobatics_dex","athletics_str","finesse_dex","influence_cha","nature_int","perception_wis","performance_cha","religion_int","society_int","spellcraft_int","stealth_dex","survival_wis","racial_bonuses","class_skills_2","altering_skill_bonuses","altering_feats","altering_traits","special_class_rules"], subtopics: ["handle_animals","indentify_monsters","recall_knowledge_nature"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 60</Link></p>
<h3 id="rule-nature_int-nature-int-trained-only">Nature (Int; Trained Only)</h3>
<p>You know a great deal about the natural world, and have the ability to command and train wild creatures.</p>
<p><strong className="hl">Functions:</strong> Handle animals, identify monsters (aberrations, animals, fey, monstrous humanoids, oozes, plants, vermin), recall knowledge (about dungeons, geography, or nature).</p>
<p><strong className="hl">Core Skills:</strong> Handle Animal, Knowledge (dungeoneering), Knowledge (geography), Knowledge (nature).</p>
</>};
const _handle_animals = {title: "Handle Animals", parent_topics: ["optional_skill_changes","consolidated_skills","nature_int"], siblings: ["handle_animals","indentify_monsters","recall_knowledge_nature"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 61</Link></p>
<p>This use of Nature functions as the <Link to="/skill/handle_animal">Handle Animal core skill</Link>, but uses Intelligence instead of Charisma.</p>
<p><strong className="hl">Action:</strong> Varies. Handling an animal is a move action, while "pushing" an animal is a full-round action.</p>
<p><strong className="hl">Try Again:</strong> Yes, except for rearing an animal.</p>
</>};
const _indentify_monsters = {title: "Indentify Monsters", parent_topics: ["optional_skill_changes","consolidated_skills","nature_int"], siblings: ["handle_animals","indentify_monsters","recall_knowledge_nature"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 61</Link></p>
<p>Nature can be used to identify monsters of the aberration, animal, fey, monstrous humanoid, ooze, plant, and vermin types.</p>
</>};
const _recall_knowledge_nature = {title: "Recall Knowledge (Nature)", parent_topics: ["optional_skill_changes","consolidated_skills","nature_int"], siblings: ["handle_animals","indentify_monsters","recall_knowledge_nature"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 61</Link></p>
<p>Nature can be used to recall knowledge on the subjects of animals, climate, plants, seasons and cycles, spelunking, terrain, and weather. See <Link to="/rule/skill_descriptions_pu">Recall Knowledge</Link> for details. Use the following DCs for certain tasks.</p>
<ScrollContainer id="rule-recall_knowledge_nature--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>Nature DC</th>
</tr>
</thead>
<tbody><tr>
<td>Identify a common plant or animal</td>
<td>10</td>
</tr>
<tr>
<td>Identify mineral, stone, or metal</td>
<td>10</td>
</tr>
<tr>
<td>Determine slope</td>
<td>15</td>
</tr>
<tr>
<td>Identify unnatural weather phenomenon</td>
<td>15</td>
</tr>
<tr>
<td>Recognize regional terrain features</td>
<td>15</td>
</tr>
<tr>
<td>Identify a natural or an underground hazard</td>
<td>15 + hazard's CR</td>
</tr>
<tr>
<td>Determine the artificial nature of a feature</td>
<td>20</td>
</tr>
<tr>
<td>Determine depth underground</td>
<td>20</td>
</tr>
<tr>
<td>Know the location of the nearest noteworthy site</td>
<td>20</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _perception_wis = {title: "Perception", parent_topics: ["optional_skill_changes","consolidated_skills"], siblings: ["skill_descriptions_pu","acrobatics_dex","athletics_str","finesse_dex","influence_cha","nature_int","perception_wis","performance_cha","religion_int","society_int","spellcraft_int","stealth_dex","survival_wis","racial_bonuses","class_skills_2","altering_skill_bonuses","altering_feats","altering_traits","special_class_rules"], subtopics: ["discern_secret_messages","get_hunches","notice_creatures_and_details","search_locations","sense_enchantments","sense_motive"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 61</Link></p>
<h3 id="rule-perception_wis-perception-wis">Perception (Wis)</h3>
<p>The acuity of your senses allows you to notice fine details, see danger coming, and tell when people are lying or otherwise behaving suspiciously.</p>
<p><strong className="hl">Functions:</strong> Discern secret messages, get hunches, notice creatures and details, search locations, sense enchantments, sense motives.</p>
<p><strong className="hl">Core Skills:</strong> Perception, Sense Motive.</p>
</>};
const _discern_secret_messages = {title: "Discern Secret Messages", parent_topics: ["optional_skill_changes","consolidated_skills","perception_wis"], siblings: ["discern_secret_messages","get_hunches","notice_creatures_and_details","search_locations","sense_enchantments","sense_motive"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 61</Link></p>
<p>You can use Perception to detect that a secret message is being transmitted by someone using the Influence skill. Your Perception check is opposed by the sender's Influence check. You take a -2 penalty for each piece of information you lack relating to the message. If you succeed by 4 or less, you know there's a hidden message but don't know its content. If you exceed the DC by 5 or more, you intercept and understand the message. If you fail by 4 or less, you don't detect any hidden communication. If you fail by 5 or more, you might infer false information. See the <Link to="/rule/pass_secret_messages">pass secret message</Link> function of Influence for rules on sending a secret message.</p>
<p><strong className="hl">Action:</strong> None. This function is included in the time spent receiving the message.</p>
<p><strong className="hl">Try Again:</strong> No, though you can attempt a check against another hidden message.</p>
</>};
const _get_hunches = {title: "Get Hunches", parent_topics: ["optional_skill_changes","consolidated_skills","perception_wis"], siblings: ["discern_secret_messages","get_hunches","notice_creatures_and_details","search_locations","sense_enchantments","sense_motive"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 61</Link></p>
<p>You can make a gut assessment of a social situation with a successful DC 20 Perception check. You get a feeling that indicates whether something is wrong or if a person is generally untrustworthy, though you don't receive specific information. To attempt to determine whether a particular statement is a lie, use the sense motive function.</p>
<p><strong className="hl">Action:</strong> 1 minute.</p>
</>};
const _notice_creatures_and_details = {title: "Notice Creatures and Details", parent_topics: ["optional_skill_changes","consolidated_skills","perception_wis"], siblings: ["discern_secret_messages","get_hunches","notice_creatures_and_details","search_locations","sense_enchantments","sense_motive"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 61</Link></p>
<p>You can detect a creature that is using Stealth if you succeed at an opposed Perception check. You can also notice sights, sounds, and other stimuli detectable by your senses. Use the search function of Perception (see below) to find hidden objects, traps, secret doors, and other things that take time to detect.</p>
<ScrollContainer id="rule-notice_creatures_and_details--table-0"><table>
<thead>
<tr>
<th>Stimulus</th>
<th>Perception DC</th>
</tr>
</thead>
<tbody><tr>
<td>Hear a battle</td>
<td>-10</td>
</tr>
<tr>
<td>Smell rotting garbage</td>
<td>-10</td>
</tr>
<tr>
<td>Hear details of a conversation</td>
<td>0</td>
</tr>
<tr>
<td>See a visible creature</td>
<td>0</td>
</tr>
<tr>
<td>Smell smoke</td>
<td>0</td>
</tr>
<tr>
<td>Determine whether food is spoiled</td>
<td>5</td>
</tr>
<tr>
<td>Hear a creature walking</td>
<td>10</td>
</tr>
<tr>
<td>Hear details of a whispered conversation</td>
<td>15</td>
</tr>
<tr>
<td>Identify powers of a potion by taste</td>
<td>15 + potion's CL</td>
</tr>
<tr>
<td>Hear a key being turned in a lock</td>
<td>20</td>
</tr>
<tr>
<td>Hear a bow being drawn</td>
<td>25</td>
</tr>
<tr>
<td>Sense a burrowing creature underneath you</td>
<td>25</td>
</tr>
<tr>
<td>Notice a pickpocket</td>
<td>Opposed by Finesse</td>
</tr>
<tr>
<td>Notice a creature using Stealth</td>
<td>Opposed by Stealth</td>
</tr>
</tbody></table></ScrollContainer>
<p>The DCs of Perception checks to notice (and to search) are modified as indicated in the table below.</p>
<ScrollContainer id="rule-notice_creatures_and_details--table-1"><table>
<thead>
<tr>
<th>Notice Modifiers</th>
<th>Perception DC Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Distance to the source, object, or creature</td>
<td>+1 per 10 feet</td>
</tr>
<tr>
<td>Through a closed door</td>
<td>+5</td>
</tr>
<tr>
<td>Through a wall</td>
<td>+10 per foot of thickness</td>
</tr>
<tr>
<td>Favorable conditions</td>
<td>-2</td>
</tr>
<tr>
<td>Unfavorable conditions</td>
<td>+2</td>
</tr>
<tr>
<td>Terrible conditions</td>
<td>+5</td>
</tr>
<tr>
<td>Creature attempting the check is distracted</td>
<td>+5</td>
</tr>
<tr>
<td>Creature attempting the check is asleep</td>
<td>+10</td>
</tr>
<tr>
<td>Source, object, or creature is invisible</td>
<td>+20</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Action:</strong> None. This function is largely reactive in response to observable stimuli.</p>
<p><strong className="hl">Try Again:</strong> Yes.</p>
<p><strong className="hl">Conditions:</strong> Favorable, unfavorable, and terrible conditions depend on the sense being used. Bright light might be a favorable condition if the check involves sight, while dimmer conditions such as torchlight or moonlight could be unfavorable. Background noise could increase the DC for a check involving hearing, and competing odors could increase the DC of a scent-based check. Terrible conditions could include candlelight impeding a sight check, a dragon's roar drowning out other sounds, or an overpowering stench occluding a subtler smell.</p>
</>};
const _search_locations = {title: "Search Locations", parent_topics: ["optional_skill_changes","consolidated_skills","perception_wis"], siblings: ["discern_secret_messages","get_hunches","notice_creatures_and_details","search_locations","sense_enchantments","sense_motive"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 62</Link></p>
<p>You can thoroughly comb an area, looking for hidden traps, doors, and the like. The same modifiers that apply to Perception DCs to <Link to="/rule/notice_creatures_and_details">notice</Link> also apply to Perception DCs to search.</p>
<ScrollContainer id="rule-search_locations--table-0"><table>
<thead>
<tr>
<th>Hidden Object</th>
<th>Perception DC</th>
</tr>
</thead>
<tbody><tr>
<td>Find an average concealed door</td>
<td>15</td>
</tr>
<tr>
<td>Find an average secret door</td>
<td>20</td>
</tr>
<tr>
<td>Find a hidden trap</td>
<td>Varies by trap</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Action:</strong> Move. Each move action spent allows you to search a 10-foot-by-10-foot area.</p>
<p><strong className="hl">Try Again:</strong> Yes.</p>
</>};
const _sense_enchantments = {title: "Sense Enchantments", parent_topics: ["optional_skill_changes","consolidated_skills","perception_wis"], siblings: ["discern_secret_messages","get_hunches","notice_creatures_and_details","search_locations","sense_enchantments","sense_motive"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 62</Link></p>
<p>Determining that a creature's behavior is influenced by enchantment magic requires succeeding at a DC 25 Perception check (DC 15 if the creature is dominated).</p>
<p><strong className="hl">Action:</strong> 1 minute.</p>
</>};
const _sense_motive = {title: "Sense Motive", parent_topics: ["optional_skill_changes","consolidated_skills","perception_wis"], siblings: ["discern_secret_messages","get_hunches","notice_creatures_and_details","search_locations","sense_enchantments","sense_motive"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 62</Link></p>
<p>With an opposed Perception check, you can tell when a creature is lying to you. See the <strong>lie</strong> function of the <Link to="/rule/influence_cha">Influence skill</Link>.</p>
<p><strong className="hl">Action:</strong> None.</p>
<p><strong className="hl">Try Again:</strong> No, though you can attempt a Perception check against each lie.</p>
</>};
const _performance_cha = {title: "Performance", parent_topics: ["optional_skill_changes","consolidated_skills"], siblings: ["skill_descriptions_pu","acrobatics_dex","athletics_str","finesse_dex","influence_cha","nature_int","perception_wis","performance_cha","religion_int","society_int","spellcraft_int","stealth_dex","survival_wis","racial_bonuses","class_skills_2","altering_skill_bonuses","altering_feats","altering_traits","special_class_rules"], subtopics: ["disguise_yourself","impress_audiences"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 62</Link></p>
<h3 id="rule-performance_cha-performance-cha">Performance (Cha)</h3>
<p>You can compel an emotional reaction through a musical, oratory, or physical performance. Your ability to act convincingly and use stagecraft also makes you better at disguising yourself. This skill applies to performances of any type (unlike in the Core Rulebook).</p>
<p><strong className="hl">Functions:</strong> Disguise yourself, impress audiences.</p>
<p><strong className="hl">Core Skills:</strong> Disguise, Perform (all).</p>
</>};
const _disguise_yourself = {title: "Disguise Yourself", parent_topics: ["optional_skill_changes","consolidated_skills","performance_cha"], siblings: ["disguise_yourself","impress_audiences"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 62</Link></p>
<p>This use of Performance functions as the <Link to="/skill/disguise">Disguise core skill</Link>.</p>
<p><strong className="hl">Action:</strong> 1d3 &times; 10 minutes. Using magic (such as disguise self) reduces this to the time required to cast the spell or trigger the effect.</p>
<p><strong className="hl">Try Again:</strong> Yes, though if others know a disguise was attempted, they'll be more suspicious.</p>
</>};
const _impress_audiences = {title: "Impress Audiences", parent_topics: ["optional_skill_changes","consolidated_skills","performance_cha"], siblings: ["disguise_yourself","impress_audiences"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 62</Link></p>
<p>By performing a speech, song, play, or other artistic work, you can impress an audience. If you're in a prosperous city, you gain money for spending a day at this task. The amount depends on the result of your Perform check.</p>
<ScrollContainer id="rule-impress_audiences--table-0"><table>
<thead>
<tr>
<th>Performance Quality</th>
<th>Performance DC</th>
<th>Money Earned</th>
</tr>
</thead>
<tbody><tr>
<td>Routine (akin to begging)</td>
<td>10</td>
<td>1d10 cp per day</td>
</tr>
<tr>
<td>Enjoyable</td>
<td>15</td>
<td>1d10 sp per day</td>
</tr>
<tr>
<td>Great</td>
<td>20</td>
<td>3d10 sp per day</td>
</tr>
<tr>
<td>Memorable</td>
<td>25</td>
<td>1d6 gp per day</td>
</tr>
<tr>
<td>Extraordinary</td>
<td>30</td>
<td>3d6 gp per day</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Action:</strong> Anywhere between one evening and a full day.</p>
<p><strong className="hl">Try Again:</strong> Yes, though the DC increases by 2 for each previous routine performance the same audience has witnessed you make.</p>
<p><strong className="hl">Masterwork Instrument:</strong> A masterwork instrument grants a +2 bonus on Perform checks to impress an audience.</p>
</>};
const _religion_int = {title: "Religion", parent_topics: ["optional_skill_changes","consolidated_skills"], siblings: ["skill_descriptions_pu","acrobatics_dex","athletics_str","finesse_dex","influence_cha","nature_int","perception_wis","performance_cha","religion_int","society_int","spellcraft_int","stealth_dex","survival_wis","racial_bonuses","class_skills_2","altering_skill_bonuses","altering_feats","altering_traits","special_class_rules"], subtopics: ["identify_monsters_religion","recall_knowledge_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 63</Link></p>
<h3 id="rule-religion_int-religion-int-trained-only">Religion (Int; Trained Only)</h3>
<p>The secrets of deities, holy lore, and the extraplanar realms are open to you.</p>
<p><strong className="hl">Functions:</strong> Identify monsters (outsiders and undead), recall knowledge (about the planes or religions).</p>
<p><strong className="hl">Core Skills:</strong> Knowledge (planes), Knowledge (religion).</p>
</>};
const _identify_monsters_religion = {title: "Identify Monsters (Religion)", parent_topics: ["optional_skill_changes","consolidated_skills","religion_int"], siblings: ["identify_monsters_religion","recall_knowledge_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 63</Link></p>
<p>Religion can be used to identify monsters of the outsider and undead types.</p>
</>};
const _recall_knowledge_religion = {title: "Recall Knowledge (Religion)", parent_topics: ["optional_skill_changes","consolidated_skills","religion_int"], siblings: ["identify_monsters_religion","recall_knowledge_religion"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 63</Link></p>
<p>Religion can be used to recall knowledge on the subjects of gods, ecclesiastic tradition, holy symbols, mythic history, the planes, and planar magic. See <Link to="/rule/skill_descriptions_pu">Recall Knowledge</Link> for details. Use the following DCs for certain tasks.</p>
<ScrollContainer id="rule-recall_knowledge_religion--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>Religion DC</th>
</tr>
</thead>
<tbody><tr>
<td>Know the names of the planes</td>
<td>10</td>
</tr>
<tr>
<td>Recognize a common deity's symbol or clergy</td>
<td>10</td>
</tr>
<tr>
<td>Know common mythology and tenets</td>
<td>15</td>
</tr>
<tr>
<td>Recognize the current plane</td>
<td>15</td>
</tr>
<tr>
<td>Identify a creature's planar origin</td>
<td>20</td>
</tr>
<tr>
<td>Recognize an obscure deity's symbol or clergy</td>
<td>20</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _society_int = {title: "Society", parent_topics: ["optional_skill_changes","consolidated_skills"], siblings: ["skill_descriptions_pu","acrobatics_dex","athletics_str","finesse_dex","influence_cha","nature_int","perception_wis","performance_cha","religion_int","society_int","spellcraft_int","stealth_dex","survival_wis","racial_bonuses","class_skills_2","altering_skill_bonuses","altering_feats","altering_traits","special_class_rules"], subtopics: ["create_or_detect_forgeries","decipher_writing","identify_monsters_society","learn_language","recall_knowledge_society"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 63</Link></p>
<h3 id="rule-society_int-society-int-trained-only">Society (Int; Trained Only)</h3>
<p>You understand the people and systems that make civilization run, and you know the historical events that made societies what they are today. Part of this expertise includes a greater understanding of languages.</p>
<p><strong className="hl">Functions:</strong> Create or detect forgeries, decipher writing, identify monsters (humanoids), learn languages, recall knowledge (about history, locales, or nobility).</p>
<p><strong className="hl">Core Skills:</strong> Knowledge (history), Knowledge (local), Knowledge (nobility), Linguistics.</p>
</>};
const _create_or_detect_forgeries = {title: "Create or Detect Forgeries", parent_topics: ["optional_skill_changes","consolidated_skills","society_int"], siblings: ["create_or_detect_forgeries","decipher_writing","identify_monsters_society","learn_language","recall_knowledge_society"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 63</Link></p>
<p>You must have the proper writing materials to create a forgery. If the handwriting doesn't need to be specific to a person, you need only to have seen a similar document before, and you gain a +8 bonus on the check. To forge a signature, you need an autograph of that person to copy, which grants a +4 bonus on the check. You need a larger handwriting sample to forge a longer document in that person's script.</p>
<p>The GM rolls a Society check to create a forgery secretly, so you're not sure how good your forgery is until someone examines the work. The examiner attempts an opposed Society check, modified by any applicable bonuses or penalties listed under the decipher writing function of Society.</p>
<p><strong className="hl">Action:</strong> 1 minute to 1d4 minutes per page to create a forgery, or 1 round per page to detect a forgery.</p>
<p><strong className="hl">Try Again:</strong> Yes, though examiners who encounter forged documents will be more cautious of future documents.</p>
</>};
const _decipher_writing = {title: "Decipher Writing", parent_topics: ["optional_skill_changes","consolidated_skills","society_int"], siblings: ["create_or_detect_forgeries","decipher_writing","identify_monsters_society","learn_language","recall_knowledge_society"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 63</Link></p>
<p>A Society check can allow you to decipher writing in an unfamiliar language or a message written in an incomplete or archaic form. If you succeed at your check, you understand the general content of about one page worth of writing. If you fail, you must succeed at a DC 5 Wisdom check or draw a false conclusion about the text. Both checks are rolled by the GM in secret, so you don't know whether the conclusion you drew is true or false.</p>
<ScrollContainer id="rule-decipher_writing--table-0"><table>
<thead>
<tr>
<th>Unfamiliar Message</th>
<th>Society DC</th>
</tr>
</thead>
<tbody><tr>
<td>Simple message</td>
<td>20</td>
</tr>
<tr>
<td>Standard text</td>
<td>20</td>
</tr>
<tr>
<td>Intricate, exotic, or very old writing</td>
<td>20</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Action:</strong> 1 minute per page.</p>
<p><strong className="hl">Try Again:</strong> Yes.</p>
</>};
const _identify_monsters_society = {title: "Identify Monsters (Society)", parent_topics: ["optional_skill_changes","consolidated_skills","society_int"], siblings: ["create_or_detect_forgeries","decipher_writing","identify_monsters_society","learn_language","recall_knowledge_society"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 63</Link></p>
<p>Society can be used to identify monsters of the humanoid type.</p>
</>};
const _learn_language = {title: "Learn Language", parent_topics: ["optional_skill_changes","consolidated_skills","society_int"], siblings: ["create_or_detect_forgeries","decipher_writing","identify_monsters_society","learn_language","recall_knowledge_society"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 63</Link></p>
<p>Each time you put a rank in Society, you learn to speak and read a new language. See <Link to="/misc/languages">languages</Link> for a list of common languages.</p>
<p><strong className="hl">Action:</strong> None. Unlike with other skill uses, you gain this benefit at all times.</p>
</>};
const _recall_knowledge_society = {title: "Recall Knowledge (Society)", parent_topics: ["optional_skill_changes","consolidated_skills","society_int"], siblings: ["create_or_detect_forgeries","decipher_writing","identify_monsters_society","learn_language","recall_knowledge_society"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 63</Link></p>
<p>Society can be used to recall knowledge on the inhabitants of a region, important personalities, royalty, noble lineages, historical events, customs, legends, and laws. See <Link to="/rule/skill_descriptions_pu">Recall Knowledge</Link> for details. Use the following DCs for certain tasks.</p>
<ScrollContainer id="rule-recall_knowledge_society--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>Society DC</th>
</tr>
</thead>
<tbody><tr>
<td>Know laws, rulers, and popular locations</td>
<td>10</td>
</tr>
<tr>
<td>Know of a recent or historically significant event</td>
<td>10</td>
</tr>
<tr>
<td>Determine the approximate date of specific event</td>
<td>15</td>
</tr>
<tr>
<td>Know a common rumor or tradition</td>
<td>15</td>
</tr>
<tr>
<td>Know proper etiquette</td>
<td>15</td>
</tr>
<tr>
<td>Know hidden organizations, rulers, and locations</td>
<td>20</td>
</tr>
<tr>
<td>Know a line of succession</td>
<td>20</td>
</tr>
<tr>
<td>Know an obscure or ancient historical event</td>
<td>20</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _spellcraft_int = {title: "Spellcraft", parent_topics: ["optional_skill_changes","consolidated_skills"], siblings: ["skill_descriptions_pu","acrobatics_dex","athletics_str","finesse_dex","influence_cha","nature_int","perception_wis","performance_cha","religion_int","society_int","spellcraft_int","stealth_dex","survival_wis","racial_bonuses","class_skills_2","altering_skill_bonuses","altering_feats","altering_traits","special_class_rules"], subtopics: ["activate_magic_items","craft_magic_items_pu","identify_magic","identify_monsters_spellcraft","learn_or_borrow_spells","recall_knowledge_spellcraft"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 64</Link></p>
<h3 id="rule-spellcraft_int-spellcraft-int-trained-only">Spellcraft (Int; Trained Only)</h3>
<p>You know how spells and magic items work, and have picked up numerous bits of magical lore. Regardless of whether you're a spellcaster, you can use magic items even if you wouldn't normally be able to.</p>
<p><strong className="hl">Functions:</strong> Activate magic items (that you would normally be unable to use), craft magic items, identify magic, identify monsters (constructs, dragons, and magical beasts), learn or borrow spells (from spellbooks and scrolls), recall knowledge (about arcana).</p>
<p><strong className="hl">Core Skills:</strong> Knowledge (arcana), Spellcraft, Use Magic Device.</p>
<p><strong className="hl">Specialist Wizards:</strong> If you're a specialist wizard, you gain a +2 bonus on Spellcraft checks to identify, learn, and prepare spells from your chosen school. However, you take a -5 penalty on similar checks concerning spells from your opposition schools.</p>
</>};
const _activate_magic_items = {title: "Activate Magic Items", parent_topics: ["optional_skill_changes","consolidated_skills","spellcraft_int"], siblings: ["activate_magic_items","craft_magic_items_pu","identify_magic","identify_monsters_spellcraft","learn_or_borrow_spells","recall_knowledge_spellcraft"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 64</Link></p>
<p>This use of Spellcraft functions as the <Link to="/skill/use_magic_device">Use Magic Device core skill</Link>, but uses Intelligence instead of Charisma.</p>
<p><strong className="hl">Action:</strong> None.</p>
<p><strong className="hl">Try Again:</strong> Yes, but if you ever roll a natural 1 while attempting to activate an item and you fail, you can't try to activate that item again for 24 hours.</p>
</>};
const _craft_magic_items_pu = {title: "Craft Magic Items", parent_topics: ["optional_skill_changes","consolidated_skills","spellcraft_int"], siblings: ["activate_magic_items","craft_magic_items_pu","identify_magic","identify_monsters_spellcraft","learn_or_borrow_spells","recall_knowledge_spellcraft"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 64</Link></p>
<p>You must attempt a Spellcraft check as part of the process of crafting a magic item. The DC varies by the item. <Link to="/rule/magic_item_creation">See the full rules on creating magic items</Link>.</p>
<p><strong className="hl">Action:</strong> None.</p>
</>};
const _identify_magic = {title: "Identify Magic", parent_topics: ["optional_skill_changes","consolidated_skills","spellcraft_int"], siblings: ["activate_magic_items","craft_magic_items_pu","identify_magic","identify_monsters_spellcraft","learn_or_borrow_spells","recall_knowledge_spellcraft"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 64</Link></p>
<p>By succeeding at a Spellcraft check, you can determine specific types of spells as they're being cast or while they are in effect. You can also pinpoint magical auras in this manner, or decipher the magical writing on scrolls without casting <Link to="/spell/read_magic">read magic</Link>.</p>
<ScrollContainer id="rule-identify_magic--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>Spellcraft DC</th>
</tr>
</thead>
<tbody><tr>
<td>Identify auras while using <Link to="/spell/detect_magic">detect magic</Link></td>
<td>15 + spell level</td>
</tr>
<tr>
<td>Identify properties of a magic item using <em>detect magic</em></td>
<td>15 + item's caster level</td>
</tr>
<tr>
<td>Identify a spell as it is being cast</td>
<td>15 + spell level</td>
</tr>
<tr>
<td>Decipher a scroll without using <em>read magic</em></td>
<td>20 + spell level</td>
</tr>
<tr>
<td>Identify a spell effect that is in place</td>
<td>20 + spell level</td>
</tr>
<tr>
<td>Identify a spell that just targeted you</td>
<td>25 + spell level</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Action:</strong> None, in most cases. Deciphering a scroll is a full-round action, and attempting to identify the properties of a magic item takes 3 rounds per item.</p>
<p><strong className="hl">Try Again:</strong> You can retry checks to identify a spell. When using <em>detect magic</em> and <Link to="/spell/identify">identify</Link> to learn the properties of magic items, you can make only one attempt per item per day.</p>
<p><strong className="hl">Perception Penalties:</strong> Attempting to identify a spell as it's being cast incurs the same penalties as a Perception check due to distance, poor conditions, and other factors.</p>
</>};
const _identify_monsters_spellcraft = {title: "Identify Monsters (Spellcraft)", parent_topics: ["optional_skill_changes","consolidated_skills","spellcraft_int"], siblings: ["activate_magic_items","craft_magic_items_pu","identify_magic","identify_monsters_spellcraft","learn_or_borrow_spells","recall_knowledge_spellcraft"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 65</Link></p>
<p>Spellcraft can be used to identify monsters of the construct, dragon, and magical beast types.</p>
</>};
const _learn_or_borrow_spells = {title: "Learn or Borrow Spells", parent_topics: ["optional_skill_changes","consolidated_skills","spellcraft_int"], siblings: ["activate_magic_items","craft_magic_items_pu","identify_magic","identify_monsters_spellcraft","learn_or_borrow_spells","recall_knowledge_spellcraft"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 65</Link></p>
<p>To add new spells to your spellbook, or to prepare a spell out of someone else's spellbook, you must succeed at a Spellcraft check.</p>
<ScrollContainer id="rule-learn_or_borrow_spells--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>Spellcraft DC</th>
</tr>
</thead>
<tbody><tr>
<td>Learn a spell from a spellbook or scroll</td>
<td>15 + spell level</td>
</tr>
<tr>
<td>Prepare a spell from a borrowed spellbook</td>
<td>15 + spell level</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Action:</strong> Learning a spell takes 1 hour per level of the spell (or 30 minutes for a 0-level spell). Preparing a borrowed spell is a part of spell preparation and doesn't add any extra time.</p>
<p><strong className="hl">Try Again:</strong> If you fail to learn a spell from a spellbook, you can try again after 1 week. If you fail to prepare a spell from a borrowed spellbook, you can't try again until the next day.</p>
</>};
const _recall_knowledge_spellcraft = {title: "Recall Knowledge (Spellcraft)", parent_topics: ["optional_skill_changes","consolidated_skills","spellcraft_int"], siblings: ["activate_magic_items","craft_magic_items_pu","identify_magic","identify_monsters_spellcraft","learn_or_borrow_spells","recall_knowledge_spellcraft"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 65</Link></p>
<p>Spellcraft can be used to recall knowledge on the subjects of ancient mysteries, arcane symbols, and magic traditions. See <Link to="/rule/skill_descriptions_pu">Recall Knowledge</Link> for details. Use the following DCs for certain tasks.</p>
<ScrollContainer id="rule-recall_knowledge_spellcraft--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>Spellcraft DC</th>
</tr>
</thead>
<tbody><tr>
<td>Identify spells that use a specific material component</td>
<td>20</td>
</tr>
<tr>
<td>Identify materials manufactured by magic</td>
<td>20 + spell level</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _stealth_dex = {title: "Stealth", parent_topics: ["optional_skill_changes","consolidated_skills"], siblings: ["skill_descriptions_pu","acrobatics_dex","athletics_str","finesse_dex","influence_cha","nature_int","perception_wis","performance_cha","religion_int","society_int","spellcraft_int","stealth_dex","survival_wis","racial_bonuses","class_skills_2","altering_skill_bonuses","altering_feats","altering_traits","special_class_rules"], subtopics: ["avoid_being_noticed"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 65</Link></p>
<h3 id="rule-stealth_dex-stealth-dex-armor-check-penalty">Stealth (Dex; Armor Check Penalty)</h3>
<p>You are skilled at avoiding detection, allowing you to slip past foes or strike from an unseen position. This skill covers hiding and moving silently.</p>
<p><strong className="hl">Functions:</strong> Avoid being noticed.</p>
<p><strong className="hl">Core Skills:</strong> Stealth.</p>
</>};
const _avoid_being_noticed = {title: "Avoid Being Noticed", parent_topics: ["optional_skill_changes","consolidated_skills","stealth_dex"], siblings: ["avoid_being_noticed"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 65</Link></p>
<p>This use of Stealth functions as the <Link to="/skill/stealth">Stealth core skill</Link>.</p>
<p><strong className="hl">Action:</strong> None, though using Stealth immediately after making a ranged attack is a move action.</p>
</>};
const _survival_wis = {title: "Survival", parent_topics: ["optional_skill_changes","consolidated_skills"], siblings: ["skill_descriptions_pu","acrobatics_dex","athletics_str","finesse_dex","influence_cha","nature_int","perception_wis","performance_cha","religion_int","society_int","spellcraft_int","stealth_dex","survival_wis","racial_bonuses","class_skills_2","altering_skill_bonuses","altering_feats","altering_traits","special_class_rules"], subtopics: ["determine_true_north","follow_tracks","survive_in_the_wild","tend_wounds_and_ailments"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 65</Link></p>
<h3 id="rule-survival_wis-survival-wis">Survival (Wis)</h3>
<p>You know how to survive in the wild, navigate the wilderness, and tend wounds.</p>
<p><strong className="hl">Functions:</strong> Determine true north, follow tracks, survive in the wild, tend wounds and ailments.</p>
<p><strong className="hl">Core Skills:</strong> Heal, Survival.</p>
</>};
const _determine_true_north = {title: "Determine True North", parent_topics: ["optional_skill_changes","consolidated_skills","survival_wis"], siblings: ["determine_true_north","follow_tracks","survive_in_the_wild","tend_wounds_and_ailments"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 65</Link></p>
<p>If you are trained in Survival, you can automatically determine where true north lies in relation to yourself.</p>
<p><strong className="hl">Action:</strong> None.</p>
</>};
const _follow_tracks = {title: "Follow Tracks", parent_topics: ["optional_skill_changes","consolidated_skills","survival_wis"], siblings: ["determine_true_north","follow_tracks","survive_in_the_wild","tend_wounds_and_ailments"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 65</Link></p>
<p>You must succeed at a Survival check to find or follow tracks for up to 1 mile. You must attempt an additional check each time the tracks become difficult to follow. While following tracks, you move at half your speed. You can move at your normal speed by taking a -5 penalty on the check, or twice your normal speed by taking a -20 penalty on the check. The DC to follow tracks depends on the surface and the prevailing conditions (see the Surfaces section below).</p>
<ScrollContainer id="rule-follow_tracks--table-0"><table>
<thead>
<tr>
<th>Surface</th>
<th>Survival DC</th>
</tr>
</thead>
<tbody><tr>
<td>Very soft ground</td>
<td>5</td>
</tr>
<tr>
<td>Soft ground</td>
<td>10</td>
</tr>
<tr>
<td>Firm ground</td>
<td>15</td>
</tr>
<tr>
<td>Hard ground</td>
<td>20</td>
</tr>
</tbody></table></ScrollContainer>
<p>Your Survival check might be modified based on any of the following conditions. Multiple conditions could affect the same roll, but apply only the size modifier for the largest creature in a group being tracked and apply only the most severe penalty for poor visibility.</p>
<ScrollContainer id="rule-follow_tracks--table-1"><table>
<thead>
<tr>
<th>Size of creatures being tracked</th>
<th>Survival DC Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Fine</td>
<td>+8</td>
</tr>
<tr>
<td>Diminutive</td>
<td>+4</td>
</tr>
<tr>
<td>Tiny</td>
<td>+2</td>
</tr>
<tr>
<td>Small</td>
<td>+1</td>
</tr>
<tr>
<td>Medium</td>
<td>+0</td>
</tr>
<tr>
<td>Large</td>
<td>-1</td>
</tr>
<tr>
<td>Huge</td>
<td>-2</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>-4</td>
</tr>
<tr>
<td>Colossal</td>
<td>-8</td>
</tr>
</tbody></table></ScrollContainer>
<h4 id="rule-follow_tracks-visibility">Visibility</h4>
<ScrollContainer id="rule-follow_tracks--table-2"><table>
<thead>
<tr>
<th>Poor visibility</th>
<th>Survival DC Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Fog or precipitation</td>
<td>+3</td>
</tr>
<tr>
<td>Moonlight</td>
<td>+3</td>
</tr>
<tr>
<td>Overcast or moonless night</td>
<td>+6</td>
</tr>
<tr>
<td>Tracked party hides its trail and moves at half speed</td>
<td>+5</td>
</tr>
</tbody></table></ScrollContainer>
<h4 id="rule-follow_tracks-other-factors">Other Factors</h4>
<ScrollContainer id="rule-follow_tracks--table-3"><table>
<thead>
<tr>
<th>Other factors</th>
<th>Survival DC Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Multiple creatures in a group</td>
<td>-1 per three creatures</td>
</tr>
<tr>
<td>Time since the tracks were made</td>
<td>+1 per 24 hours</td>
</tr>
<tr>
<td>Rain since the tracks were made</td>
<td>+1 per hour of rain</td>
</tr>
<tr>
<td>Fresh snow since the tracks were made</td>
<td>+10</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Action:</strong> Full-round action or longer.</p>
<p><strong className="hl">Try Again:</strong> You can retry a failed check after 1 hour (outdoors) or 10 minutes (indoors).</p>
<p><strong className="hl">Untrained:</strong> You can follow tracks untrained, but only if the DC is 10 or lower.</p>
<p><strong className="hl">Perception:</strong> Detecting a footprint or similar sign of a creature's passage with the Perception skill uses the same DCs as Survival checks to follow tracks, but you can't use Perception to follow tracks.</p>
<h3 id="rule-follow_tracks-surfaces">Surfaces</h3>
<p>This section gives examples of surfaces for the first table presented above.</p>
<p><strong className="hl">Very Soft Ground:</strong> Any surface (fresh snow, thick dust, wet mud) that holds deep, clear impressions of footprints.</p>
<p><strong className="hl">Soft Ground:</strong> Any surface soft enough to yield to pressure, but firmer than wet mud or fresh snow, in which a creature leaves frequent but shallow footprints.</p>
<p><strong className="hl">Firm Ground:</strong> Most normal outdoor surfaces (such as lawns, fields, woods, and the like) or exceptionally soft or dirty indoor surfaces (thick rugs and very dirty or dusty floors). The creature might leave some traces (broken branches or tufts of hair), but it leaves only occasional or partial footprints.</p>
<p><strong className="hl">Hard Ground:</strong> Any surface that doesn't hold footprints at all, such as bare rock or an indoor floor. Most streambeds fall into this category, since any footprints left behind are obscured or washed away. The creature leaves only traces (scuff marks or displaced pebbles).</p>
</>};
const _survive_in_the_wild = {title: "Survive in the Wild", parent_topics: ["optional_skill_changes","consolidated_skills","survival_wis"], siblings: ["determine_true_north","follow_tracks","survive_in_the_wild","tend_wounds_and_ailments"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 66</Link></p>
<p>You can keep yourself and others fed and safe in the wilderness. Use the following DCs for certain tasks.</p>
<ScrollContainer id="rule-survive_in_the_wild--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>Survival DC</th>
</tr>
</thead>
<tbody><tr>
<td>Get along in the wild</td>
<td>10</td>
</tr>
<tr>
<td>Endure severe weather</td>
<td>15</td>
</tr>
<tr>
<td>Avoid natural hazards, such as quicksand</td>
<td>15</td>
</tr>
<tr>
<td>Keep from getting lost</td>
<td>15</td>
</tr>
<tr>
<td>Predict the weather up to 24 hours in advance</td>
<td>15</td>
</tr>
</tbody></table></ScrollContainer>
<p>When you get along in the wild, you can move up to half your overland speed while hunting and foraging without needing food and water supplies. You can provide food and water for one other character for every 2 points by which your check exceeds 10.</p>
<p>When you endure severe weather, you gain a +2 bonus on Fortitude saves against severe weather while moving at up to half your overland speed, or a +4 bonus if you remain stationary. You can grant this bonus to one other character for every 1 point by which your check exceeds 15.</p>
<p>When you predict the weather, you can predict the weather for one additional day in advance for every 5 points by which your check exceeds 15.</p>
<p><strong className="hl">Action:</strong> Varies. A single check could represent activity over the course of hours or a full day.</p>
<p><strong className="hl">Try Again:</strong> You can attempt a Survival check only once every 24 hours to get along in the wild or endure severe weather. You can attempt a check to avoid getting lost or avoid natural hazards for each situation that calls for one, but you can't retry a check to avoid getting lost in a specific situation or to avoid a specific natural hazard.</p>
</>};
const _tend_wounds_and_ailments = {title: "Tend Wounds and Ailments", parent_topics: ["optional_skill_changes","consolidated_skills","survival_wis"], siblings: ["determine_true_north","follow_tracks","survive_in_the_wild","tend_wounds_and_ailments"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 66</Link></p>
<p>This use of Survival functions as the <Link to="/skill/heal">Heal core skill</Link>.</p>
<p><strong className="hl">Action:</strong> Providing first aid, treating a wound, or treating poison is a standard action. Treating a disease or tending to a creature that has been wounded by a spike growth or spike stones spell requires 10 minutes of work. Treating deadly wounds requires 1 hour of work. Providing long-term care requires 8 hours of light activity.</p>
<p><strong className="hl">Try Again:</strong> Varies. Generally speaking, you can't try to tend wounds and ailments without witnessing proof of the original check's failure. You can always retry a check to provide first aid if the target is still alive.</p>
</>};
const _racial_bonuses = {title: "Racial Bonuses", parent_topics: ["optional_skill_changes","consolidated_skills"], siblings: ["skill_descriptions_pu","acrobatics_dex","athletics_str","finesse_dex","influence_cha","nature_int","perception_wis","performance_cha","religion_int","society_int","spellcraft_int","stealth_dex","survival_wis","racial_bonuses","class_skills_2","altering_skill_bonuses","altering_feats","altering_traits","special_class_rules"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 67</Link></p>
<p>The races of the Core Rulebook that gain bonuses to skills should change in the following ways.</p>
<p><strong className="hl">Dwarf:</strong> Greed functions the same way if the campaign uses background skills; otherwise, its bonus instead applies to Spellcraft checks to identify magic items that contain precious metals or gemstones.</p>
<p><strong className="hl">Elf:</strong> Keen senses grants a +1 bonus on Perception checks.</p>
<p><strong className="hl">Gnome:</strong> Keen senses grants a +1 bonus on Perception checks. Obsessive functions the same way if the campaign uses background skills; otherwise, it instead grants a +1 bonus on the character's choice of Perform or Spellcraft checks.</p>
<p><strong className="hl">Half-Elf:</strong> Keen senses grants a +1 bonus on Perception checks.</p>
<p><strong className="hl">Half-Orc:</strong> Intimidating applies only to Influence checks to demoralize or intimidate.</p>
<p><strong className="hl">Halfling:</strong> Keen senses grants a +1 bonus on Perception checks. Sure-footed grants a +1 racial bonus on Acrobatics and Athletics checks.</p>
</>};
const _class_skills_2 = {title: "Class Skills", parent_topics: ["optional_skill_changes","consolidated_skills"], siblings: ["skill_descriptions_pu","acrobatics_dex","athletics_str","finesse_dex","influence_cha","nature_int","perception_wis","performance_cha","religion_int","society_int","spellcraft_int","stealth_dex","survival_wis","racial_bonuses","class_skills_2","altering_skill_bonuses","altering_feats","altering_traits","special_class_rules"], subtopics: ["converting_existing_characters"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 67</Link></p>
<p>The bonus from class skills functions the same way under this system, and provides the same +3 bonus. However, the class skill lists change, with the following entries replacing the normal class skills lists. The number in parentheses indicates the number of skill ranks a character of this class gains at each level. Always add 1/2 the character's Intelligence modifier to this number, even if the modifier is negative. A character always gains a minimum of 1 skill rank per level.</p>
<p>Alchemist (2 + 1/2 Int): Finesse, Spellcraft, Survival.</p>
<p>Arcanist (1 + 1/2 Int): Religion, Society, Spellcraft.</p>
<p>Barbarian (1 + 1/2 Int): Athletics, Nature.</p>
<p>Bard (3 + 1/2 Int): Influence, Perception, Performance, Society, Spellcraft.</p>
<p>Bloodrager (2 + 1/2 Int): Athletics, Spellcraft.</p>
<p>Brawler (2 + 1/2 Int): Acrobatics, Athletics, Perception.</p>
<p>Cavalier (2 + 1/2 Int): Acrobatics, Athletics, Nature.</p>
<p>Cleric (1 + 1/2 Int): Religion, Spellcraft, Survival.</p>
<p>Druid (2 + 1/2 Int): Athletics, Nature, Survival.</p>
<p>Fighter (1 + 1/2 Int): Acrobatics, Athletics.</p>
<p>Gunslinger (2 + 1/2 Int): Athletics, Survival.</p>
<p>Hunter (3 + 1/2 Int): Athletics, Nature, Perception, Stealth.</p>
<p>Inquisitor (3 + 1/2 Int): Influence, Perception, Spellcraft, Stealth, Survival.</p>
<p>Investigator (3 + 1/2 Int): Acrobatics, Finesse, Influence, Perception, Society, Spellcraft.</p>
<p>Magus (1 + 1/2 Int): Athletics, Spellcraft.</p>
<p>Monk (2 + 1/2 Int): Acrobatics, Athletics, Perception.</p>
<p>Oracle (2 + 1/2 Int): Religion.</p>
<p>Paladin (1 + 1/2 Int): Religion, Survival.</p>
<p>Ranger (3 + 1/2 Int): Athletics, Nature, Perception, Stealth, Survival.</p>
<p>Rogue (4 + 1/2 Int): Acrobatics, Finesse, Influence, Perception, Society, Stealth.</p>
<p>Shaman (2 + 1/2 Int): Nature, Religion, Survival.</p>
<p>Skald (2 + 1/2 Int): Influence, Performance, Society, Spellcraft.</p>
<p>Slayer (3 + 1/2 Int): Athletics, Influence, Stealth, Survival.</p>
<p>Sorcerer (1 + 1/2 Int): Influence, Spellcraft.</p>
<p>Summoner (1 + 1/2 Int): Religion, Spellcraft.</p>
<p>Swashbuckler (2 + 1/2 Int): Acrobatics, Athletics, Influence, Perception.</p>
<p>Warpriest (1 + 1/2 Int): Athletics, Religion, Survival.</p>
<p>Witch (1 + 1/2 Int): Nature, Religion, Spellcraft.</p>
<p>Wizard (1 + 1/2 Int): Religion, Society, Spellcraft.</p>
</>};
const _converting_existing_characters = {title: "Converting Existing Characters", parent_topics: ["optional_skill_changes","consolidated_skills","class_skills_2"], siblings: ["converting_existing_characters"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 67</Link></p>
<p>When converting to the consolidated skills system in the middle of an ongoing campaign, it's typically best to allow each player to completely reset her character's skill ranks and spend them again from scratch. She should also be able to retrain any feats or other abilities that affect her skill bonuses.</p>
</>};
const _altering_skill_bonuses = {title: "Altering Skill Bonuses", parent_topics: ["optional_skill_changes","consolidated_skills"], siblings: ["skill_descriptions_pu","acrobatics_dex","athletics_str","finesse_dex","influence_cha","nature_int","perception_wis","performance_cha","religion_int","society_int","spellcraft_int","stealth_dex","survival_wis","racial_bonuses","class_skills_2","altering_skill_bonuses","altering_feats","altering_traits","special_class_rules"], subtopics: ["bonuses_for_function","prerequisites","monster_skill_bonuses"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 67</Link></p>
<p>To adjust the rest of the system, use the guidelines below. Generally, an ability or effect that would normally grant a bonus on multiple types of skill checks instead grants a bonus on half as many, rounded down (minimum 1).</p>
</>};
const _bonuses_for_function = {title: "Bonuses for Function", parent_topics: ["optional_skill_changes","consolidated_skills","altering_skill_bonuses"], siblings: ["bonuses_for_function","prerequisites","monster_skill_bonuses"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 67</Link></p>
<p>For feats and abilities that grant bonuses or penalties to skills, it's best for the GM to either ban them or adjust them to work only with specific functions of the feat. That is to say, the consolidated skills still cover the functions of the skills they've absorbed, so a bonus can still apply to only a specific function. For example, the <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link> feat should add a character's Strength modifier instead of Charisma only when using the Influence skill to intimidate, rather than adding it to the Influence skill in all cases. The <Link to="/spell/jump">jump</Link> spell should give a bonus only on Athletics checks to jump, rather than on all Athletics checks. There are no direct conversions for this effect, so it must be done on a case-by-case basis.</p>
</>};
const _prerequisites = {title: "Prerequisites", parent_topics: ["optional_skill_changes","consolidated_skills","altering_skill_bonuses"], siblings: ["bonuses_for_function","prerequisites","monster_skill_bonuses"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 67</Link></p>
<p>If a feat, prestige class, or other ability requires a certain number of ranks in a skill, directly convert that core skill to the consolidated skill. Use the same number of ranks. For example, the <Link to="/feat/mounted_combat">Mounted Combat</Link> feat would require Acrobatics 1 rank instead of Ride 1 rank.</p>
</>};
const _monster_skill_bonuses = {title: "Monster Skill Bonuses", parent_topics: ["optional_skill_changes","consolidated_skills","altering_skill_bonuses"], siblings: ["bonuses_for_function","prerequisites","monster_skill_bonuses"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 68</Link></p>
<p>When running a prebuilt monster, the GM can convert core skills to consolidated skills on the fly. The GM can choose one of two paths: either use the monster's highest printed bonus as its bonus with the relevant consolidated skill, or treat each bonus as though it applies only to a sub-function of a consolidated skill. For example, an ice devil has a +22 bonus on Acrobatics checks and a +13 bonus on Fly checks. The GM could either give the devil a +22 bonus on all Acrobatics checks, or use the +22 bonus if the monster is moving through a threatened area and the +13 bonus if it's flying. Either approach can work, but the GM should be consistent with which she uses.</p>
<p>A GM using the highest-bonus approach still might want to consider separating out the bonuses in the case of large racial modifiers. A monster with a climb speed should probably not get its +8 racial bonus on Athletics checks to jump or swim.</p>
</>};
const _altering_feats = {title: "Altering Feats", parent_topics: ["optional_skill_changes","consolidated_skills"], siblings: ["skill_descriptions_pu","acrobatics_dex","athletics_str","finesse_dex","influence_cha","nature_int","perception_wis","performance_cha","religion_int","society_int","spellcraft_int","stealth_dex","survival_wis","racial_bonuses","class_skills_2","altering_skill_bonuses","altering_feats","altering_traits","special_class_rules"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 68</Link></p>
<p>Feats that give bonuses on skill checks need to be adjusted or removed in the consolidated skills system. This section presents a list of the skill feats in the Core Rulebook that shouldn't be used with this system. It also presents an alternative version of <Link to="/feat/skill_focus">Skill Focus</Link> that replaces the core version to make its power level work better with this system. If an ability or class feature would grant access to one of the banned feats, use the most appropriate Skill Focus feat instead, as determined by the GM. For example, a familiar that grants <Link to="/feat/alertness">Alertness</Link> would instead grant Skill Focus (Perception). For feats that modify skills in other ways, see the <Link to="/rule/bonuses_for_function">Bonuses for Function</Link> section.</p>
<p><strong className="hl">Removed Feats:</strong> <Link to="/feat/acrobatic">Acrobatic</Link>, Alertness, <Link to="/feat/animal_affinity">Animal Affinity</Link>, <Link to="/feat/athletic">Athletic</Link>, <Link to="/feat/deceitful">Deceitful</Link>, <Link to="/feat/deft_hands">Deft Hands</Link>, <Link to="/feat/magical_aptitude">Magical Aptitude</Link>, <Link to="/feat/persuasive">Persuasive</Link>, <Link to="/feat/self_sufficient">Self-Sufficient</Link>, <Link to="/feat/stealthy">Stealthy</Link>.</p>
<h3 id="rule-altering_feats-skill-focus">Skill Focus</h3>
<p>Choose a skill. You are particularly adept at that skill.</p>
<p><strong className="hl">Benefit:</strong> You gain a +2 bonus on all checks involving the chosen skill. If you have 10 or more ranks in that skill, this bonus increases to +4.</p>
<p><strong>Special:</strong> You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new skill.</p>
</>};
const _altering_traits = {title: "Altering Traits", parent_topics: ["optional_skill_changes","consolidated_skills"], siblings: ["skill_descriptions_pu","acrobatics_dex","athletics_str","finesse_dex","influence_cha","nature_int","perception_wis","performance_cha","religion_int","society_int","spellcraft_int","stealth_dex","survival_wis","racial_bonuses","class_skills_2","altering_skill_bonuses","altering_feats","altering_traits","special_class_rules"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 68</Link></p>
<p>Many traits offer a +1 trait bonus on core skill checks and make those skills class skills. With the consolidated skills system, those traits instead grant a +1 trait bonus on traits involving the functions of those consolidated skills corresponding to the traits' listed core skills, or a +4 trait bonus if the skills are not class skills. If you later receive that skill as a class skill, this trait bonus reduces to +1.</p>
</>};
const _special_class_rules = {title: "Special Class Rules", parent_topics: ["optional_skill_changes","consolidated_skills"], siblings: ["skill_descriptions_pu","acrobatics_dex","athletics_str","finesse_dex","influence_cha","nature_int","perception_wis","performance_cha","religion_int","society_int","spellcraft_int","stealth_dex","survival_wis","racial_bonuses","class_skills_2","altering_skill_bonuses","altering_feats","altering_traits","special_class_rules"], subtopics: ["miscellaneous_abilities"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 68</Link></p>
<p>Some class features function differently because of the consolidated skills list. Clarifications appear here, divided by class. These entries cover only the main class features, so the GM might need to adjudicate how certain arcane schools, domains, and the like interact with the consolidated skills system. Class features are omitted if they can be handled with a simple substitution, such as changing an ability that requires a Disable Device check to instead require a Finesse check.</p>
<p><strong className="hl">Alchemist:</strong> Because the consolidated skills system removes Craft skills by default, the GM should either treat the alchemist's Craft (alchemy) bonus as though it were equal to his character level + his Intelligence modifier + 3 or use the background skills system.</p>
<p><strong className="hl">Barbarian:</strong> The Acrobatics skill and the intimidate function of Influence can be used while raging.</p>
<blockquote>
<p><strong>Rage Powers:</strong> Raging climber, raging leaper, and raging swimmer are replaced with raging athlete, which adds the barbarian's level as an enhancement bonus on all Athletics checks and treats all such checks to jump as though the character had a running start.</p>
</blockquote>
<p><strong className="hl">Bard:</strong> Note that Performance applies to all types of performance, rather than being broken down like the core Perform skills. Bardic knowledge adds 1/2 the bard's class level (minimum 1) on all Nature, Religion, Society, and Spellcraft checks, and the bard can attempt checks with these skills untrained. Versatile performance allows the bard to substitute Performance when attempting either Acrobatics or Influence checks. He must choose only one of these two skills, and doesn't increase the number of substituted skills at higher levels. Lore master applies to Nature, Religion, Society, and Spellcraft checks.</p>
<p><strong className="hl">Bloodrager:</strong> The Acrobatics skill and the intimidate function of Influence can be used while bloodraging.</p>
<p><strong className="hl">Cavalier:</strong> A cavalier order adds only one skill to the cavalier's list of class skills (of the GM's choice, but the choice can't overlap with the cavalier's normal class skills). The bonus on checks applies only to the specific skill function listed.</p>
<p><strong className="hl">Druid:</strong> Nature sense instead grants a +1 bonus on Nature and Survival checks.</p>
<p><strong className="hl">Hunter:</strong> The bonus from the monkey aspect applies only to Athletics checks to climb.</p>
<p><strong className="hl">Inquisitor:</strong> Stern gaze grants the inquisitor a bonus on Influence checks to intimidate and on Perception checks to sense motive.</p>
<p><strong className="hl">Investigator:</strong> Because the consolidated skills system removes Craft skills by default, the GM should either treat the investigator's Craft (alchemy) bonus as though it were equal to his character level + his Intelligence modifier + 3 or use the background skills system. The investigator's ability to apply inspiration without expending uses applies to Nature, Religion, Society, and Spellcraft checks (he must still be trained in the skill). The trapfinding bonus applies to both Perception checks to locate traps and Finesse checks to disable traps. An investigator can use Finesse to disable magical traps. Keen recollection applies to Nature, Religion, Society, and Spellcraft checks.</p>
<blockquote>
<p><strong>Investigator Talents:</strong> Device talent allows the investigator to use Spellcraft untrained, but has no effect if the investigator is trained in Spellcraft. Empathy applies only when the investigator uses Perception to sense motive. Expanded inspiration can be used with Perception and Survival checks. Inspirational expertise applies when the investigator identifies a monster's special powers or vulnerabilities using whichever skill is appropriate. Inspired intelligence applies to Nature, Religion, Society, and Spellcraft checks. Underworld inspiration applies to Finesse and Influence checks.</p>
</blockquote>
<p><strong className="hl">Oracle:</strong> An oracle gains two class skills from her mystery (chosen by the GM).</p>
<p><strong className="hl">Ranger:</strong> The favored enemy bonus applies to Perception and Survival checks against creatures of the selected type, and to checks with the monster knowledge function of the relevant skill. The favored terrain bonus applies to initiative checks, Nature checks, Perception checks to notice things, Stealth checks, and Survival checks.</p>
<p><strong className="hl">Rogue:</strong> The trapfinding bonus applies to both Perception checks to locate traps and Finesse checks to disable traps. A rogue can use Finesse to disable magical traps.</p>
<blockquote>
<p><strong>Rogue Talents:</strong> The skill mastery talent applies to a number of skills equal to 1 + 1/2 the rogue's Intelligence modifier. It can still be taken multiple times.</p>
</blockquote>
<p><strong className="hl">Skald:</strong> Note that Performance applies to all types of performance, rather than being broken down like the core Perform skills. Bardic knowledge adds 1/2 the skald's class level (minimum 1) on all Nature, Religion, Society, and Spellcraft checks, and the skald can attempt checks with these skills untrained. The Acrobatics skill and the intimidate function of Influence can be used while in an inspired rage. Versatile performance allows the skald to substitute Performance when attempting either Influence checks or Perception checks to sense motive. He must choose only one of these two skills, and doesn't increase the number of skills substituted at higher levels. Lore master applies to Nature, Religion, Society, and Spellcraft checks.</p>
<p><strong className="hl">Slayer:</strong> The studied target bonus applies to Influence checks to bluff, Perception checks, and Survival checks against the studied target. The stalker bonus applies to Influence checks to intimidate a creature, Perform checks to use a disguise, and Stealth checks.</p>
<blockquote>
<p><strong>Slayer Talents:</strong> Foil scrutiny applies to Influence checks to bluff a creature and Perform checks to use a disguise. Trapfinding grants Finesse as a class skill. The bonus from trapfinding applies to both Perception checks to locate traps and Finesse checks to disable traps. A slayer with trapfinding can use Finesse to disable magical traps.</p>
</blockquote>
<p><strong className="hl">Sorcerer:</strong> A bloodline's class skill applies to all uses of the corresponding consolidated skill.</p>
<p><strong className="hl">Summoner:</strong> Change the eidolon's class skills to Perception and Stealth. The summoner can choose two additional class skills for the eidolon. An eidolon with a fly speed does not gain Acrobatics as a class skill.</p>
<p><strong className="hl">Swashbuckler:</strong> Derring-do can be used on Acrobatics and Athletics checks. Swashbuckler's edge can be used on Acrobatics and Athletics checks.</p>
<p><strong className="hl">Witch:</strong> The bonus from the flight hex is a +4 racial bonus on Athletics checks to swim.</p>
</>};
const _miscellaneous_abilities = {title: "Miscellaneous Abilities", parent_topics: ["optional_skill_changes","consolidated_skills","special_class_rules"], siblings: ["miscellaneous_abilities"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 69</Link></p>
<p>Abilities that aren't tied only to one class appear here.</p>
<p><strong className="hl">Animal Companions:</strong> Change animal skills to Acrobatics, Athletics*, Perception*, Stealth*, and Survival. An asterisk (*) indicates a class skill.</p>
<p><strong className="hl">Familiars:</strong> The skill bonus from the familiar applies to all uses of the corresponding consolidated skill, but the bonus is reduced to +2. The raven familiar grants a +2 bonus on Society checks.</p>
</>};
const _grouped_skills = {title: "Grouped Skills", parent_topics: ["optional_skill_changes"], siblings: ["alternate_crafting_rules","alternate_profession_rules","background_skills","consolidated_skills","grouped_skills","skill_unlocks","the_elephant_in_the_room"], subtopics: ["skill_group_rules"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 70</Link></p>
<p>Using the grouped skills system, characters gain bonuses for large categories of skills and higher bonuses for specific skills. Instead of replacing or modifying the skill list, this system finds commonalities among skills and divides them into groups. Choosing skills is simplified, so instead of expending skill ranks to gain one skill at a time, a character gains training in a small number of skill groups, and gains specialties that give her bonuses to particular skills as she advances in level. The groups represent broad talents, and the skill specialties draw from the standard skill list.</p>
<p>With this system, players don't need to worry about expending skill ranks. A character adds 1/2 her level when attempting skill checks for her chosen grouped skills, thereby making that character at least somewhat competent in skills she might otherwise neglect. This system makes characters more broadly skilled, but gives them fewer skills they truly excel at - at least at low levels.</p>
<h3 id="rule-grouped_skills-grouped-skills-in-other-variants">Grouped Skills in Other Variants</h3>
<p>With a bit of adaptation, skill groups can work alongside the background skills or consolidated skills systems.</p>
<p><strong className="hl">Background Skills:</strong> Instead of gaining background skill ranks at every level, a character gains one additional skill specialty at 1st level that can be used only to select a background skill. She can expend her normal skill specialties to select either background or adventuring skills. The Artistry and Lore skills fall under the Scholarly skill group. The character can take a specialty in Lore any number of times, choosing a different type of Lore each time. To attempt a check with a Lore skill, a character must have a specialty in it. Having training in the Scholarly skill group doesn't allow a character to use all the potential Lore skills untrained, but it does enable a character with one or more Lore skills to add her full level as a bonus on those checks, rather than just 1/2 her level.</p>
<p><strong className="hl">Consolidated Skills:</strong> Reduce both the number of skill groups and the number of skill specialties characters gain by 1/2 (rounded down, to a minimum of 1). Use 1/2 the class's skill ranks per level from the core rules to determine that class's number of skill groups and specialties, not 1/2 the adjusted values presented in the <Link to="/rule/class_skills_2">Class Skills</Link> section.</p>
<p>You also need to change the skill groups to the following.</p>
<ScrollContainer id="rule-grouped_skills--table-0"><table>
<thead>
<tr>
<th>Skill Groups</th>
<th>Included Skills</th>
</tr>
</thead>
<tbody><tr>
<td>Natural</td>
<td>Nature, Survival</td>
</tr>
<tr>
<td>Perceptive</td>
<td>Perception</td>
</tr>
<tr>
<td>Physical</td>
<td>Acrobatics, Athletics</td>
</tr>
<tr>
<td>Scholarly</td>
<td>Religion, Society, Spellcraft</td>
</tr>
<tr>
<td>Social</td>
<td>Influence, Performance</td>
</tr>
<tr>
<td>Thieving</td>
<td>Finesse, Stealth</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _skill_group_rules = {title: "Skill Group Rules", parent_topics: ["optional_skill_changes","grouped_skills"], siblings: ["skill_group_rules"], subtopics: ["calculating_skill_bonuses","multiclassing_pu","linguistics"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 70</Link></p>
<p>At 1st level, a character gains training in a number of skill groups determined by her class's number of skill ranks per level, as shown on Table 2-3: Skill Specialties and Groups by Level. A character can gain training in any skill group, even if none of the included skills are class skills for her.</p>
<p>At 1st level, a character gains one skill specialty, plus a number of bonus skill specialties equal to 1/2 her Intelligence modifier. At 2nd level and every 2 levels thereafter, a character gains a specialty in one additional skill. If at any point her Intelligence modifier increases or decreases, her number of bonus skill specialties changes accordingly. Each skill specialty applies to a single, specific skill, and a character is allowed to take a specialty in a skill that isn't in one of her skill groups. However, her bonus with that skill isn't as high as it would be if she were also trained in the corresponding skill group.</p>
<p>When determining whether a character can use a trained-only skill, the character counts as trained if she has either a specialty in that skill or training in the skill's group.</p>
<ScrollContainer id="rule-skill_group_rules--table-0"><table>
<thead>
<tr>
<th>Skill Groups</th>
<th>Included Skills</th>
</tr>
</thead>
<tbody><tr>
<td>Natural</td>
<td>Handle Animal, Heal, Survival</td>
</tr>
<tr>
<td>Perceptive</td>
<td>Perception, Sense Motive</td>
</tr>
<tr>
<td>Physical</td>
<td>Acrobatics, Climb, Escape Artist, Fly, Ride, Swim</td>
</tr>
<tr>
<td>Scholarly</td>
<td>Appraise, Craft, Knowledge (All), Profession, Spellcraft</td>
</tr>
<tr>
<td>Social</td>
<td>Bluff, Diplomacy, Intimidate, Linguistics, Perform</td>
</tr>
<tr>
<td>Thieving</td>
<td>Disable Device, Disguise, Sleight of Hand, Stealth, Use Magic Device</td>
</tr>
</tbody></table></ScrollContainer>
<p>For example, a 1st-level druid with an Intelligence score of 12 gains training in two skill groups. She chooses Natural and Physical. She has one specialty to spend (1/2 her Intelligence modifier rounds down to 0 in this case, so she won't gain bonus specialties unless she increases her Intelligence score to 14 or higher). The druid chooses Perception for her skill specialty.</p>
<h3 id="rule-skill_group_rules-table-2-3-skill-specialties-and-groups-by-level">Table 2-3: Skill Specialties and Groups by Level</h3>
<ScrollContainer id="rule-skill_group_rules--table-1"><table>
<thead>
<tr>
<th>Character Level</th>
<th>Skill Specialties<sup><InnerLink showBacklink="backlink-rule-skill_group_rules-ref-1-1" id="rule-skill_group_rules-ref-1-1" data-hash-target to="rule-skill_group_rules-1">1</InnerLink></sup></th>
<th>2+Int<sup><InnerLink showBacklink="backlink-rule-skill_group_rules-ref-2-1" id="rule-skill_group_rules-ref-2-1" data-hash-target to="rule-skill_group_rules-2">2</InnerLink></sup></th>
<th>4+Int<sup><InnerLink showBacklink="backlink-rule-skill_group_rules-ref-3-1" id="rule-skill_group_rules-ref-3-1" data-hash-target to="rule-skill_group_rules-3">3</InnerLink></sup></th>
<th>6+Int<sup><InnerLink showBacklink="backlink-rule-skill_group_rules-ref-4-1" id="rule-skill_group_rules-ref-4-1" data-hash-target to="rule-skill_group_rules-4">4</InnerLink></sup></th>
<th>8+Int<sup><InnerLink showBacklink="backlink-rule-skill_group_rules-ref-5-1" id="rule-skill_group_rules-ref-5-1" data-hash-target to="rule-skill_group_rules-5">5</InnerLink></sup></th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>1</td>
<td>2</td>
<td>2</td>
<td>3</td>
<td>3</td>
</tr>
<tr>
<td>2nd</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>3</td>
<td>3</td>
</tr>
<tr>
<td>3rd</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>3</td>
<td>3</td>
</tr>
<tr>
<td>4th</td>
<td>3</td>
<td>2</td>
<td>2</td>
<td>3</td>
<td>3</td>
</tr>
<tr>
<td>5th</td>
<td>3</td>
<td>2</td>
<td>2</td>
<td>3</td>
<td>3</td>
</tr>
<tr>
<td>6th</td>
<td>4</td>
<td>2</td>
<td>2</td>
<td>3</td>
<td>3</td>
</tr>
<tr>
<td>7th</td>
<td>4</td>
<td>2</td>
<td>2</td>
<td>3</td>
<td>3</td>
</tr>
<tr>
<td>8th</td>
<td>5</td>
<td>2</td>
<td>3</td>
<td>3</td>
<td>4</td>
</tr>
<tr>
<td>9th</td>
<td>5</td>
<td>2</td>
<td>3</td>
<td>3</td>
<td>4</td>
</tr>
<tr>
<td>10th</td>
<td>6</td>
<td>3</td>
<td>3</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>11th</td>
<td>6</td>
<td>3</td>
<td>3</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>12th</td>
<td>7</td>
<td>3</td>
<td>3</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>13th</td>
<td>7</td>
<td>3</td>
<td>3</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>14th</td>
<td>8</td>
<td>3</td>
<td>3</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>15th</td>
<td>8</td>
<td>3</td>
<td>3</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>16th</td>
<td>9</td>
<td>3</td>
<td>3</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>17th</td>
<td>9</td>
<td>3</td>
<td>3</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>18th</td>
<td>10</td>
<td>3</td>
<td>4</td>
<td>4</td>
<td>5</td>
</tr>
<tr>
<td>19th</td>
<td>10</td>
<td>3</td>
<td>4</td>
<td>4</td>
<td>5</td>
</tr>
<tr>
<td>20th</td>
<td>11</td>
<td>3</td>
<td>4</td>
<td>4</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-skill_group_rules-label">Footnotes</h3>
<ol>
<li id="rule-skill_group_rules-1">
<p>A character adds 1/2 her Intelligence bonus to her number of specialties; characters always have a minimum of 1 specialty. <InnerLink id="backlink-rule-skill_group_rules-ref-1-1" data-hash-target to="rule-skill_group_rules-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="rule-skill_group_rules-2">
<p>This category includes the arcanist, cleric, fighter, magus, paladin, sorcerer, summoner, warpriest, witch, and wizard. <InnerLink id="backlink-rule-skill_group_rules-ref-2-1" data-hash-target to="rule-skill_group_rules-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="rule-skill_group_rules-3">
<p>This category includes the alchemist, barbarian, bloodrager, brawler, druid, gunslinger, monk, oracle, shaman, skald, and swashbuckler. <InnerLink id="backlink-rule-skill_group_rules-ref-3-1" data-hash-target to="rule-skill_group_rules-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
<li id="rule-skill_group_rules-4">
<p>This category includes the bard, cavalier, hunter, inquisitor, investigator, ranger, and slayer. <InnerLink id="backlink-rule-skill_group_rules-ref-4-1" data-hash-target to="rule-skill_group_rules-ref-4-1" aria-label="Back to reference 4-1">↩</InnerLink></p>
</li>
<li id="rule-skill_group_rules-5">
<p>This category includes the rogue. <InnerLink id="backlink-rule-skill_group_rules-ref-5-1" data-hash-target to="rule-skill_group_rules-ref-5-1" aria-label="Back to reference 5-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _calculating_skill_bonuses = {title: "Calculating Skill Bonuses", parent_topics: ["optional_skill_changes","grouped_skills","skill_group_rules"], siblings: ["calculating_skill_bonuses","multiclassing_pu","linguistics"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 70</Link></p>
<p>If a character has a specialty in a skill and that skill is also in a skill group she's trained in, her bonus on checks using the skill is equal to her relevant ability modifier + her character level. If only one applies - she only has a specialty in the skill or she is trained in that skill's group but doesn't have a specialty in the skill - her bonus is equal to her relevant ability modifier + 1/2 her character level (minimum 1).</p>
<p>If a skill is on her class skill list, she gains the +3 bonus if she's trained in its skill group or has a specialty in it; she doesn't have to both be trained and have a specialty. Class skill bonuses look only at specific skills, not groups. If Diplomacy is on a character's class skill list but Bluff isn't, having training in the Social skill group doesn't allow that character to gain the class skill bonus on Bluff checks. Any circumstance that modifies skill checks, such as the <Link to="/feat/skill_focus">Skill Focus</Link> feat or certain spells, still grants the same bonus or penalty as it would if the campaign weren't using grouped skills.</p>
</>};
const _multiclassing_pu = {title: "Multiclassing", parent_topics: ["optional_skill_changes","grouped_skills","skill_group_rules"], siblings: ["calculating_skill_bonuses","multiclassing_pu","linguistics"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 71</Link></p>
<p>A multiclassed character uses the class with the lowest number of skill ranks per level to determine her number of skill groups. This doesn't cause her to lose skill groups she's already selected if she gains a level in a new class that would have fewer skill groups at her character level - once a skill group has been selected, it can't be unselected. For instance, a character with 6 levels in rogue would have training in three skill groups. If she then took a level in druid, she would still have three groups, but the number of skill groups she knows would now increase to four at character level 18th instead of at character level 8th.</p>
</>};
const _linguistics = {title: "Linguistics", parent_topics: ["optional_skill_changes","grouped_skills","skill_group_rules"], siblings: ["calculating_skill_bonuses","multiclassing_pu","linguistics"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 71</Link></p>
<p>A character's bonus languages from the Linguistics skill work like the bonus on skill checks she gains from her level. She gains a number of bonus languages equal to 1/2 her level (minimum 1) if she has either a specialty in Linguistics or training in the Social skill group. If she has both a specialty in Linguistics and training in the Social skill group, she knows a number of bonus languages equal to her full level.</p>
</>};
const _skill_unlocks = {title: "Skill Unlocks", parent_topics: ["optional_skill_changes"], siblings: ["alternate_crafting_rules","alternate_profession_rules","background_skills","consolidated_skills","grouped_skills","skill_unlocks","the_elephant_in_the_room"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 82</Link></p>
<p>Skill unlocks give characters new abilities and ways to use their skills upon reaching 5, 10, 15, and 20 ranks in a skill. Any character with the <Link to="/feat/signature_skill">Signature Skill</Link> feat can earn skill unlocks for a single skill, and they are a prime feature of the <Link to="/class/unchained_rogue">revised version of the rogue</Link>, who uses her rogue's edge ability to gain skill unlocks for several of her most iconic skills. Alternatively, you might make skill unlocks a universal part of the game, but you should be aware they add significant power and flexibility to skills, so giving them for free to all classes would grant power boosts to other highly skilled classes such as the investigator and bard, particularly in comparison to the rogue. Another alternative is to eliminate access to the Signature Skill feat, limiting skill unlocks to rogues and rogues alone.</p>
<p>See <Link to="/main/skills">the individual skills</Link> for the skill unlocks.</p>
</>};
const _the_elephant_in_the_room = {title: "The Elephant in the Room", parent_topics: ["optional_skill_changes"], siblings: ["alternate_crafting_rules","alternate_profession_rules","background_skills","consolidated_skills","grouped_skills","skill_unlocks","the_elephant_in_the_room"], subtopics: ["elephant_overview","new_feats","combat_errata","class_errata","equipment_errata","bestiary_errata"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<div className="italicsDefault">
<blockquote>
<p>In September of 2012, my brother and I<sup><InnerLink showBacklink="backlink-rule-the_elephant_in_the_room-fake-fn-1" id="rule-the_elephant_in_the_room-fake-fn-1" data-hash-target to="rule-the_elephant_in_the_room-fake-fn-1-target">1</InnerLink></sup> released a blog post discussing the issue of feat taxes in the <em>Pathfinder Roleplaying Game.</em> Although the post was intended to be a one-off thought experiment based on our experiences building characters for organized play, it gained an inexplicable amount of traction on Reddit, Facebook, and the official Paizo forums.</p>
<p>In response to the interest expressed by the Pathfinder community, we decided to publish an updated version of our feat tree. This document, titled <em>The Elephant in the Room</em> after the original blog post, includes a reimagined version of the entire feat section found in the <em>Pathfinder Roleplaying Game Core Rulebook.</em></p>
<ul>
<li>Dozens of weak or situational feats have been reworked (such as Shield Focus) or merged together (such as Dodge and Mobility)</li>
<li>Power Attack, Deadly Aim, and Combat Expertise are now combat options available to any character with at least +1 BAB</li>
<li>10 completely new feats have been created to improve dead-end feat lines: Vital Strike as part of a spring attack/charge with Savage Charge or gain evasion when wielding a shield with Iron Guard</li>
<li>Master multiple combat maneuvers with a single feat - including the new Hamstring combat maneuver</li>
<li>Enjoy a <em>Pathfinder Core Campaign</em> experience with best-of options curated from the <em>Advanced Players Guide</em> and <em>Pathfinder Unchained</em></li>
</ul>
<p>More than anything, we hope that this document continues to spur interesting and lively discussion of the <em>Pathfinder Roleplaying Game,</em> just as the original blog post did.</p>
</blockquote>
</div>
<div className="showIfNoElephant">
<p>You have toggled <em>Elephant</em>-related information off on the <Link to="/settings">settings page</Link>. You may want to toggle it back on to see <em>Elephant</em>-related notes and reminders on other pages.</p>
</div>
<section data-footnotes><h3 id="rule-the_elephant_in_the_room-label">Footnotes</h3><ol>
<li id="rule-the_elephant_in_the_room-fake-fn-1-target"><p>This is verbatim from the source. <em>Pf Data 1e</em> has no connection to the authors. <InnerLink aria-label="Back to reference 1" id="backlink-rule-the_elephant_in_the_room-fake-fn-1" data-hash-target to="rule-the_elephant_in_the_room-fake-fn-1">↩</InnerLink></p></li>
</ol></section></>};
const _elephant_overview = {title: "Overview", parent_topics: ["optional_skill_changes","the_elephant_in_the_room"], siblings: ["elephant_overview","new_feats","combat_errata","class_errata","equipment_errata","bestiary_errata"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link><br/>Rules for how feat prerequisites and feat types function remain unchanged from the <em>Pathfinder RPG Core Rulebook.</em></p>
<blockquote className="showIfNoElephant">
<p><em>You have toggled <em>Elephant</em>-related information off on the <Link to="/settings">settings page</Link>. You will need to toggle it back on to see the changes in the feats linked below.</em></p>
</blockquote>
<h3 id="rule-elephant_overview-altered-feats">Altered Feats</h3>
<p>These feats have been adjusted so that they work very differently from the original feats.</p>
<ScrollContainer id="rule-elephant_overview--table-0"><table>
<thead>
<tr>
<th>Altered Feat</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td>Agile Combatant</td>
<td>Formerly titled <Link to="/feat/agile_maneuvers">Agile Maneuvers</Link>. Includes the hamstring combat maneuver and acknowledges the changes to Weapon Finesse.</td>
</tr>
<tr>
<td><Link to="/feat/catch_off_guard">Catch Off-Guard</Link></td>
<td>Combines the effects of Catch Off-Guard and Throw Anything.</td>
</tr>
<tr>
<td><Link to="/feat/deflect_arrows">Deflect Arrows</Link></td>
<td>Characters with Shield Focus may take this feat to deflect arrows with their shield.</td>
</tr>
<tr>
<td><Link to="/feat/dodge">Dodge</Link></td>
<td>Combines the effects of Dodge and Mobility.</td>
</tr>
<tr>
<td><Link to="/feat/greater_shield_focus">Greater Shield Focus</Link></td>
<td>The AC bonus granted by Shield Focus now affects ranged touch attacks (including rays and similar magical effects).</td>
</tr>
<tr>
<td><Link to="/feat/greater_two_weapon_fighting">Greater Two-Weapon Fighting</Link></td>
<td>Combines the effects of Improved Two-Weapon Fighting and Greater Two-Weapon Fighting.</td>
</tr>
<tr>
<td><Link to="/feat/improvised_weapon_mastery">Improvised Weapon Mastery</Link></td>
<td>Solely increases the damage dealt by improvised weapons, as Catch Off-Guard already removes all penalties to attack.</td>
</tr>
<tr>
<td><Link to="/feat/natural_spell">Natural Spell</Link></td>
<td>Now works with the wizard's change shape class feature.</td>
</tr>
<tr>
<td><Link to="/feat/rapid_reload">Rapid Reload</Link></td>
<td>Slings and sling staves may now be reloaded as a free action.</td>
</tr>
<tr>
<td><Link to="/feat/shield_focus">Shield Focus</Link></td>
<td>Grants an additional +4 bonus to AC against ranged attacks.</td>
</tr>
<tr>
<td><Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link></td>
<td>Verbiage changed to reflect the changes to Weapon Finesse.</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-elephant_overview-removed-feats1">Removed Feats<sup><InnerLink showBacklink="backlink-rule-elephant_overview-ref-1-1" id="rule-elephant_overview-ref-1-1" data-hash-target to="rule-elephant_overview-1">1</InnerLink></sup></h3>
<div className="columnar">
<ul>
<li><Link to="/feat/combat_expertise">Combat Expertise</Link></li>
<li><Link to="/feat/deadly_aim">Deadly Aim</Link></li>
<li><Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link></li>
<li><Link to="/feat/improved_bull_rush">Improved Bull Rush</Link></li>
<li><Link to="/feat/improved_disarm">Improved Disarm</Link></li>
<li><Link to="/feat/improved_feint">Improved Feint</Link></li>
<li><Link to="/feat/improved_grapple">Improved Grapple</Link></li>
<li><Link to="/feat/improved_overrun">Improved Overrun</Link></li>
<li><Link to="/feat/improved_sunder">Improved Sunder</Link></li>
<li><Link to="/feat/improved_trip">Improved Trip</Link></li>
<li><Link to="/feat/improved_two_weapon_fighting">Improved Two-Weapon Fighting</Link></li>
<li><Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link></li>
<li><Link to="/feat/martial_weapon_proficiency">Martial Weapon Proficiency</Link></li>
<li><Link to="/feat/mobility">Mobility</Link></li>
<li><Link to="/feat/power_attack">Power Attack</Link></li>
<li><Link to="/feat/scorpion_style">Scorpion Style</Link></li>
<li><Link to="/feat/stand_still">Stand Still</Link></li>
<li><Link to="/feat/throw_anything">Throw Anything</Link></li>
<li><Link to="/feat/weapon_finesse">Weapon Finesse</Link></li>
</ul>
</div>
<h3 id="rule-elephant_overview-feats-altered-slightly">Feats Altered Slightly</h3>
<p>These feats have had wording tweaked or their prerequisites modified, but generally work the same.</p>
<blockquote className="showIfNoElephant">
<p><em>You have toggled <em>Elephant</em>-related information off on the <Link to="/settings">settings page</Link>. You will need to toggle it back on to see the changes in the feats linked below.</em></p>
</blockquote>
<h3 id="rule-elephant_overview-other-feats">Other Feats</h3>
<p>These feats are specifically reprinted in <em>The Elephant in the Room.</em> GMs should use this info when considering how feats not in this list should behave under the <em>Elephant</em> rules.</p>
<div className="columnar">
<ul>
<li><Link to="/feat/alignment_channel">Alignment Channel</Link></li>
<li><Link to="/feat/animal_affinity">Animal Affinity</Link></li>
<li><Link to="/feat/arcane_armor_mastery">Arcane Armor Mastery</Link></li>
<li><Link to="/feat/arcane_armor_training">Arcane Armor Training</Link></li>
<li><Link to="/feat/arcane_strike">Arcane Strike</Link></li>
<li><Link to="/feat/athletic">Athletic</Link></li>
<li><Link to="/feat/augment_summoning">Augment Summoning</Link></li>
<li><Link to="/feat/bleeding_critical">Bleeding Critical</Link></li>
<li><Link to="/feat/blind_fight">Blind-Fight</Link></li>
<li><Link to="/feat/blinding_critical">Blinding Critical</Link></li>
<li><Link to="/feat/brew_potion">Brew Potion</Link></li>
<li><Link to="/feat/catch_off_guard">Catch Off-Guard</Link></li>
<li><Link to="/feat/channel_smite">Channel Smite</Link></li>
<li><Link to="/feat/combat_casting">Combat Casting</Link></li>
<li><Link to="/feat/combat_reflexes">Combat Reflexes</Link></li>
<li><Link to="/feat/command_undead">Command Undead</Link></li>
<li><Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link></li>
<li><Link to="/feat/craft_rod">Craft Rod</Link></li>
<li><Link to="/feat/craft_staff">Craft Staff</Link></li>
<li><Link to="/feat/craft_wand">Craft Wand</Link></li>
<li><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link></li>
<li><Link to="/feat/critical_focus">Critical Focus</Link></li>
<li><Link to="/feat/critical_mastery">Critical Mastery</Link></li>
<li><Link to="/feat/deafening_critical">Deafening Critical</Link></li>
<li><Link to="/feat/deceitful">Deceitful</Link></li>
<li><Link to="/feat/defensive_combat_training">Defensive Combat Training</Link></li>
<li><Link to="/feat/deflect_arrows">Deflect Arrows</Link></li>
<li><Link to="/feat/deft_hands">Deft Hands</Link></li>
<li><Link to="/feat/diehard">Diehard</Link></li>
<li><Link to="/feat/disruptive">Disruptive</Link></li>
<li><Link to="/feat/dodge">Dodge</Link></li>
<li><Link to="/feat/double_slice">Double Slice</Link></li>
<li><Link to="/feat/elemental_channel">Elemental Channel</Link></li>
<li><Link to="/feat/elemental_focus">Elemental Focus</Link></li>
<li><Link to="/feat/empower_spell">Empower Spell</Link></li>
<li><Link to="/feat/endurance">Endurance</Link></li>
<li><Link to="/feat/enlarge_spell">Enlarge Spell</Link></li>
<li><Link to="/feat/eschew_materials">Eschew Materials</Link></li>
<li><Link to="/feat/exhausting_critical">Exhausting Critical</Link></li>
<li><Link to="/feat/extend_spell">Extend Spell</Link></li>
<li><Link to="/feat/extra_channel">Extra Channel</Link></li>
<li><Link to="/feat/extra_ki">Extra Ki</Link></li>
<li><Link to="/feat/extra_lay_on_hands">Extra Lay On Hands</Link></li>
<li><Link to="/feat/extra_mercy">Extra Mercy</Link></li>
<li><Link to="/feat/extra_performance">Extra Performance</Link></li>
<li><Link to="/feat/extra_rage">Extra Rage</Link></li>
<li><Link to="/feat/extra_rogue_talent">Extra Rogue Talent</Link></li>
<li><Link to="/feat/fleet">Fleet</Link></li>
<li><Link to="/feat/forge_ring">Forge Ring</Link></li>
<li><Link to="/feat/great_fortitude">Great Fortitude</Link></li>
<li><Link to="/feat/greater_elemental_focus">Greater Elemental Focus</Link></li>
<li><Link to="/feat/greater_shield_focus">Greater Shield Focus</Link></li>
<li><Link to="/feat/greater_spell_focus">Greater Spell Focus</Link></li>
<li><Link to="/feat/greater_spell_penetration">Greater Spell Penetration</Link></li>
<li><Link to="/feat/greater_two_weapon_fighting">Greater Two-Weapon Fighting</Link></li>
<li><Link to="/feat/greater_vital_strike">Greater Vital Strike</Link></li>
<li><Link to="/feat/heavy_armor_proficiency">Heavy Armor Proficiency</Link></li>
<li><Link to="/feat/heighten_spell">Heighten Spell</Link></li>
<li><Link to="/feat/improved_channel">Improved Channel</Link></li>
<li><Link to="/feat/improved_counterspell">Improved Counterspell</Link></li>
<li><Link to="/feat/improved_familiar">Improved Familiar</Link></li>
<li><Link to="/feat/improved_great_fortitude">Improved Great Fortitude</Link></li>
<li><Link to="/feat/improved_initiative">Improved Initiative</Link></li>
<li><Link to="/feat/improved_lightning_reflexes">Improved Lightning Reflexes</Link></li>
<li><Link to="/feat/improved_precise_shot">Improved Precise Shot</Link></li>
<li><Link to="/feat/improved_shield_bash">Improved Shield Bash</Link></li>
<li><Link to="/feat/improved_vital_strike">Improved Vital Strike</Link></li>
<li><Link to="/feat/improvised_weapon_mastery">Improvised Weapon Mastery</Link></li>
<li><Link to="/feat/intimidating_prowess">Intimidating Prowess</Link></li>
<li><Link to="/feat/iron_will">Iron Will</Link></li>
<li><Link to="/feat/leadership">Leadership</Link></li>
<li><Link to="/feat/light_armor_proficiency">Light Armor Proficiency</Link></li>
<li><Link to="/feat/lightning_reflexes">Lightning Reflexes</Link></li>
<li><Link to="/feat/lightning_stance">Lightning Stance</Link></li>
<li><Link to="/feat/lunge">Lunge</Link></li>
<li><Link to="/feat/magical_aptitude">Magical Aptitude</Link></li>
<li><Link to="/feat/master_craftsman">Master Craftsman</Link></li>
<li><Link to="/feat/maximize_spell">Maximize Spell</Link></li>
<li><Link to="/feat/medium_armor_proficiency">Medium Armor Proficiency</Link></li>
<li><Link to="/feat/merciful_spell">Merciful Spell</Link></li>
<li><Link to="/feat/mounted_archery">Mounted Archery</Link></li>
<li><Link to="/feat/natural_spell">Natural Spell</Link></li>
<li><Link to="/feat/nimble_moves">Nimble Moves</Link></li>
<li><Link to="/feat/persuasive">Persuasive</Link></li>
<li><Link to="/feat/pinpoint_targeting">Pinpoint Targeting</Link></li>
<li><Link to="/feat/quick_draw">Quick Draw</Link></li>
<li><Link to="/feat/quicken_spell">Quicken Spell</Link></li>
<li><Link to="/feat/rapid_reload">Rapid Reload</Link></li>
<li><Link to="/feat/ride_by_attack">Ride-By Attack</Link></li>
<li><Link to="/feat/run">Run</Link></li>
<li><Link to="/feat/scribe_scroll">Scribe Scroll</Link></li>
<li><Link to="/feat/selective_channeling">Selective Channeling</Link></li>
<li><Link to="/feat/shield_focus">Shield Focus</Link></li>
<li><Link to="/feat/shield_proficiency">Shield Proficiency</Link></li>
<li><Link to="/feat/sickening_critical">Sickening Critical</Link></li>
<li><Link to="/feat/silent_spell">Silent Spell</Link></li>
<li><Link to="/feat/simple_weapon_proficiency">Simple Weapon Proficiency</Link></li>
<li><Link to="/feat/skill_focus">Skill Focus</Link></li>
<li><Link to="/feat/spell_focus">Spell Focus</Link></li>
<li><Link to="/feat/spell_mastery">Spell Mastery</Link></li>
<li><Link to="/feat/spell_penetration">Spell Penetration</Link></li>
<li><Link to="/feat/staggering_critical">Staggering Critical</Link></li>
<li><Link to="/feat/stealthy">Stealthy</Link></li>
<li><Link to="/feat/step_up">Step Up</Link></li>
<li><Link to="/feat/still_spell">Still Spell</Link></li>
<li><Link to="/feat/strike_back">Strike Back</Link></li>
<li><Link to="/feat/stunning_critical">Stunning Critical</Link></li>
<li><Link to="/feat/tiring_critical">Tiring Critical</Link></li>
<li><Link to="/feat/toughness">Toughness</Link></li>
<li><Link to="/feat/tower_shield_proficiency">Tower Shield Proficiency</Link></li>
<li><Link to="/feat/trample">Trample</Link></li>
<li><Link to="/feat/turn_undead">Turn Undead</Link></li>
<li><Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link></li>
<li><Link to="/feat/vital_strike">Vital Strike</Link></li>
<li><Link to="/feat/widen_spell">Widen Spell</Link></li>
<li><Link to="/feat/wind_stance">Wind Stance</Link></li>
</ul>
</div>
<section data-footnotes>
<h3 id="rule-elephant_overview-label">Footnotes</h3>
<ol>
<li id="rule-elephant_overview-1">
<p>The orignal blog post also removed the <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link>, <Link to="/feat/improved_drag">Improved Drag</Link>, <Link to="/feat/improved_reposition">Improved Reposition</Link>, <Link to="/feat/improved_steal">Improved Steal</Link>, and <Link to="/feat/martial_mastery">Martial Mastery</Link> feats. <InnerLink id="backlink-rule-elephant_overview-ref-1-1" data-hash-target to="rule-elephant_overview-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _new_feats = {title: "New Feats", parent_topics: ["optional_skill_changes","the_elephant_in_the_room"], siblings: ["elephant_overview","new_feats","combat_errata","class_errata","equipment_errata","bestiary_errata"], subtopics: ["deft_maneuvers","greater_hamstring","iron_guard","powerful_maneuvers","powerful_stride","savage_charge","scorpion_stance","unarmed_combatant","weapon_proficiency","whirling_cleave"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<ScrollContainer id="rule-new_feats--table-0"><table>
<thead>
<tr>
<th>New Feat</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td>Deft Maneuvers</td>
<td>Combines the effects of Improved Disarm, Improved Trip, and Improved Feint.</td>
</tr>
<tr>
<td>Greater Hamstring</td>
<td>Victims of your hamstring combat maneuvers cannot move for the rest of their turn.</td>
</tr>
<tr>
<td>Iron Guard</td>
<td>Gain the benefit of a rogue's evasion class feature when using a shield.</td>
</tr>
<tr>
<td>Powerful Maneuvers</td>
<td>Combines the effects of Improved Bull Rush, Improved Overrun, and Improved Sunder. Enables the use of the hamstring combat maneuver without attacks of opportunity.</td>
</tr>
<tr>
<td>Powerful Stride</td>
<td>Once per day, take a 10-foot step in place of a 5-foot step.</td>
</tr>
<tr>
<td>Savage Charge</td>
<td>Use Vital Strike as part of a charge or Spring Attack.</td>
</tr>
<tr>
<td>Scorpion Stance</td>
<td>Replaces Scorpion Style. Allows the use of bull rush, hamstring, overrun, and trip combat maneuvers against larger foes.</td>
</tr>
<tr>
<td>Unarmed Combatant</td>
<td>Combines the effects of Improved Grapple and Improved Unarmed Strike.</td>
</tr>
<tr>
<td>Weapon Proficiency</td>
<td>Allows you to make attack rolls with a single fighter weapon group normally.</td>
</tr>
<tr>
<td>Whirling Cleave</td>
<td>Take a single 5-foot step during a Cleave or Great Cleave.</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _deft_maneuvers = {title: "Deft Maneuvers (Combat)", parent_topics: ["optional_skill_changes","the_elephant_in_the_room","new_feats"], siblings: ["deft_maneuvers","greater_hamstring","iron_guard","powerful_maneuvers","powerful_stride","savage_charge","scorpion_stance","unarmed_combatant","weapon_proficiency","whirling_cleave"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<p>You are skilled in a variety of dextrous combat maneuvers.<br/><strong>Prerequisites:</strong> Dex 13.<br/><strong>Benefit:</strong> You do not provoke an attack of opportunity when performing a <Link to="/rule/trip">trip</Link> or <Link to="/rule/disarm">disarm</Link> combat maneuver.<sup><InnerLink showBacklink="backlink-rule-deft_maneuvers-ref-1-1" id="rule-deft_maneuvers-ref-1-1" data-hash-target to="rule-deft_maneuvers-1">1</InnerLink></sup> In addition, you receive a +2 bonus on checks with trip and disarm combat maneuvers, and you can make a <Link to="/skill/bluff">Bluff</Link> check to <Link to="/rule/feint">feint</Link> in combat as a move action.</p>
<p>You also receive a +2 bonus to your CMD whenever an opponent tries to trip or disarm you.<br/><strong>Normal:</strong> You provoke an attack of opportunity when performing a trip or disarm combat maneuver. Feinting in combat is a standard action.</p>
<section data-footnotes>
<h3 id="rule-deft_maneuvers-label">Footnotes</h3>
<ol>
<li id="rule-deft_maneuvers-1">
<p>The orignal blog post also applied this to <Link to="/rule/dirty_trick">dirty trick</Link>, <Link to="/rule/reposition">reposition</Link>, and <Link to="/rule/steal">steal</Link> maneuvers. <InnerLink id="backlink-rule-deft_maneuvers-ref-1-1" data-hash-target to="rule-deft_maneuvers-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _greater_hamstring = {title: "Greater Hamstring (Combat)", parent_topics: ["optional_skill_changes","the_elephant_in_the_room","new_feats"], siblings: ["deft_maneuvers","greater_hamstring","iron_guard","powerful_maneuvers","powerful_stride","savage_charge","scorpion_stance","unarmed_combatant","weapon_proficiency","whirling_cleave"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<p>You can stop enemies in their tracks.<br/><strong>Prerequisites:</strong> <Link to="/rule/powerful_maneuvers">Powerful Maneuvers</Link>, base attack bonus +6, Str 13.<br/><strong>Benefit:</strong> You receive a +2 bonus on checks made to <Link to="/rule/hamstring">hamstring</Link> a foe. This bonus stacks with the bonus granted by Powerful Maneuvers. When you successfully hamstring an opponent using an attack of opportunity, that opponent cannot move for the rest of his turn.</p>
</>};
const _iron_guard = {title: "Iron Guard (Combat)", parent_topics: ["optional_skill_changes","the_elephant_in_the_room","new_feats"], siblings: ["deft_maneuvers","greater_hamstring","iron_guard","powerful_maneuvers","powerful_stride","savage_charge","scorpion_stance","unarmed_combatant","weapon_proficiency","whirling_cleave"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<p>You are skilled at shielding yourself from flames and magical effects.<br/><strong>Prerequisites:</strong> <Link to="/feat/shield_focus">Shield Focus</Link>, <Link to="/feat/shield_proficiency">Shield Proficiency</Link>, base attack bonus +6.<br/><strong>Benefit:</strong> You gain the benefits of the rogue's <Link to="/ability/evasion">evasion</Link> class ability as long as you have a <Link to="/eq-armor/heavy_shield">heavy shield</Link> or <Link to="/eq-armor/tower_shield">tower shield</Link> in one hand. Unlike evasion, you do not need to be wearing light or medium armor to benefit from this effect.</p>
</>};
const _powerful_maneuvers = {title: "Powerful Maneuvers (Combat)", parent_topics: ["optional_skill_changes","the_elephant_in_the_room","new_feats"], siblings: ["deft_maneuvers","greater_hamstring","iron_guard","powerful_maneuvers","powerful_stride","savage_charge","scorpion_stance","unarmed_combatant","weapon_proficiency","whirling_cleave"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<p>You are skilled in a variety of strength-focused combat maneuvers.<br/><strong>Prerequisites:</strong> Str 13, base attack bonus +1.<br/><strong>Benefit:</strong> You do not provoke an attack of opportunity when performing a <Link to="/rule/bull_rush">bull rush</Link>, <Link to="/rule/hamstring">hamstring</Link>, <Link to="/rule/overrun">overrun</Link>, or <Link to="/rule/sunder">sunder</Link> combat maneuver.<sup><InnerLink showBacklink="backlink-rule-powerful_maneuvers-ref-1-1" id="rule-powerful_maneuvers-ref-1-1" data-hash-target to="rule-powerful_maneuvers-1">1</InnerLink></sup> In addition, you receive a +2 bonus on checks with these combat maneuvers. You also receive a +2 bonus to your CMD whenever an opponent tries to bull rush, hamstring, or overrun you or sunder your gear.</p>
<p>Targets of your overrun attempts may not choose to avoid you.<br/><strong>Normal:</strong> You provoke an attack of opportunity when performing a bull rush, hamstring, overrun, or sunder combat maneuver.</p>
<section data-footnotes>
<h3 id="rule-powerful_maneuvers-label">Footnotes</h3>
<ol>
<li id="rule-powerful_maneuvers-1">
<p>The original blog post also said this could be used for the <Link to="/rule/drag">drag</Link> maneuver. <InnerLink id="backlink-rule-powerful_maneuvers-ref-1-1" data-hash-target to="rule-powerful_maneuvers-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _powerful_stride = {title: "Powerful Stride", parent_topics: ["optional_skill_changes","the_elephant_in_the_room","new_feats"], siblings: ["deft_maneuvers","greater_hamstring","iron_guard","powerful_maneuvers","powerful_stride","savage_charge","scorpion_stance","unarmed_combatant","weapon_proficiency","whirling_cleave"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<p>Your movements on the battlefield are swift and steady.<br/><strong>Prerequisites:</strong> Str 15, Dex 13, <Link to="/feat/nimble_moves">Nimble Moves</Link>.<br/><strong>Benefit:</strong> Once per day, you can take a 10-foot step in place of a 5-foot step. This movement must be made in a straight line.<br/><strong>Special:</strong> If you have the <Link to="/feat/step_up">Step Up</Link> feat, you may still take a 5-foot step during your next turn after benefiting from its effects. In addition, any movement you make using Step Up does not subtract any distance from your movement during your next turn.</p>
</>};
const _savage_charge = {title: "Savage Charge (Combat)", parent_topics: ["optional_skill_changes","the_elephant_in_the_room","new_feats"], siblings: ["deft_maneuvers","greater_hamstring","iron_guard","powerful_maneuvers","powerful_stride","savage_charge","scorpion_stance","unarmed_combatant","weapon_proficiency","whirling_cleave"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<p>You fearlessly dive into battle, bringing the full weight of your weapon down on your opponent.<br/><strong>Prerequisites:</strong> Str 15, <Link to="/feat/spring_attack">Spring Attack</Link>, <Link to="/feat/vital_strike">Vital Strike</Link>, base attack bonus +8.<br/><strong>Benefit:</strong> You can Vital Strike as part of a charge action or Spring Attack.</p>
</>};
const _scorpion_stance = {title: "Scorpion Stance (Combat)", parent_topics: ["optional_skill_changes","the_elephant_in_the_room","new_feats"], siblings: ["deft_maneuvers","greater_hamstring","iron_guard","powerful_maneuvers","powerful_stride","savage_charge","scorpion_stance","unarmed_combatant","weapon_proficiency","whirling_cleave"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<p>You are skilled at incapacitating larger opponents.<br/><strong>Prerequisites:</strong> <Link to="/rule/unarmed_combatant">Unarmed Combatant</Link>, <Link to="/rule/deft_maneuvers">Deft Maneuvers</Link> or <Link to="/rule/powerful_maneuvers">Powerful Maneuvers</Link>.<br/><strong>Benefit:</strong> You can <Link to="/rule/bull_rush">bull rush</Link>, <Link to="/rule/hamstring">hamstring</Link>, <Link to="/rule/overrun">overrun</Link>, or <Link to="/rule/trip">trip</Link> an opponent who is up to two size categories larger than you. You are treated as one size category larger while <Link to="/rule/grappling">grappling</Link>.<br/><strong>Special:</strong> By spending 1 point from his ki pool, a monk can bull rush, hamstring, overrun, or trip an opponent who is up to three size categories larger than him and is treated as two size categories larger while grappling. This effect lasts for a number of rounds equal to his Wisdom modifier.<br/><strong>Normal:</strong> You can only bull rush, hamstring, overrun, or trip an opponent who is no more than one size category larger than you.</p>
</>};
const _unarmed_combatant = {title: "Unarmed Combatant (Combat)", parent_topics: ["optional_skill_changes","the_elephant_in_the_room","new_feats"], siblings: ["deft_maneuvers","greater_hamstring","iron_guard","powerful_maneuvers","powerful_stride","savage_charge","scorpion_stance","unarmed_combatant","weapon_proficiency","whirling_cleave"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<p>You are skilled at grappling and fighting while unarmed.<br/><strong>Prerequisites:</strong> Dex 13.<br/><strong>Benefit:</strong> You are considered to be armed even when unarmed - you do not provoke attacks of opportunity when you attack foes while unarmed. Your unarmed strikes now deal 1d6 damage if you are medium sized or 1d4 damage if you are small sized, and you can deal lethal or nonlethal damage, at your choice.</p>
<p>You do not provoke an attack of opportunity when performing a <Link to="/rule/grapple">grapple</Link> combat maneuver. In addition, you receive a +2 bonus on checks made to grapple a foe. You also receive a +2 bonus to your CMD whenever an opponent tries to grapple you.<br/><strong>Normal:</strong> Without this feat, you are considered unarmed when attacking with an unarmed strike, and you can deal only nonlethal damage with such an attack. You provoke an attack of opportunity when performing a grapple combat maneuver.</p>
</>};
const _weapon_proficiency = {title: "Weapon Proficiency (Combat)", parent_topics: ["optional_skill_changes","the_elephant_in_the_room","new_feats"], siblings: ["deft_maneuvers","greater_hamstring","iron_guard","powerful_maneuvers","powerful_stride","savage_charge","scorpion_stance","unarmed_combatant","weapon_proficiency","whirling_cleave"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<p>Choose one <Link to="/ability/weapon_groups">weapon group</Link> listed under the fighter's Weapon Training class feature. You understand how to use all weapons from that group.<br/><strong>Benefit:</strong> You make attack rolls with weapons from the selected group normally (without the non-proficient penalty).<br/><strong>Normal:</strong> Normal: When using a weapon with which you are not proficient, you take a -4 penalty on attack rolls.<br/><strong>Special:</strong> You can gain Weapon Proficiency multiple times. Each time you take the feat, it applies to a new weapon group.</p>
</>};
const _whirling_cleave = {title: "Whirling Cleave (Combat)", parent_topics: ["optional_skill_changes","the_elephant_in_the_room","new_feats"], siblings: ["deft_maneuvers","greater_hamstring","iron_guard","powerful_maneuvers","powerful_stride","savage_charge","scorpion_stance","unarmed_combatant","weapon_proficiency","whirling_cleave"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<p>You become a whirlwind of steel on the battlefield.<br/><strong>Prerequisites:</strong> Str 13, <Link to="/feat/cleave">Cleave</Link>, <Link to="/feat/great_cleave">Great Cleave</Link>, base attack bonus +6.<br/><strong>Benefit:</strong> You can take a single 5-foot step during a Cleave or Great Cleave, as long as it brings you within reach of another foe of which you are able to make an additional attack against. This 5-foot step is a free action and does not subtract from your normal movement for the round.</p>
</>};
const _combat_errata = {hasJL:true,title: "Combat Errata", parent_topics: ["optional_skill_changes","the_elephant_in_the_room"], siblings: ["elephant_overview","new_feats","combat_errata","class_errata","equipment_errata","bestiary_errata"], jsx: <><div className="jumpList" id="rule-combat_errata-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="rule-combat_errata-risky-strike-and-defensive-stance">Risky Strike and Defensive Stance</InnerLink></li><li><InnerLink toTop to="rule-combat_errata-nonlethal-damage">Nonlethal Damage</InnerLink></li></ul></div><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<h3 id="rule-combat_errata-new-combat-manuever-hamstring">New Combat Manuever: Hamstring</h3>
<p>A new combat maneuver called Hamstring has been added to replace the somewhat awkward <Link to="/feat/stand_still">Stand Still</Link> and <Link to="/feat/scorpion_style">Scorpion Style</Link> feats. These two feats shared the same purpose of slowing down enemy movement, but did not interact with other feats or combat options.</p>
<p><strong className="hl">Hamstring</strong>: You can attempt to hamstring your opponent's movement in place of a melee attack. You can only hamstring an opponent who is no more than one size category larger than you. If you do not have the <Link to="/rule/powerful_maneuvers">Powerful Maneuvers</Link> feat, or a similar ability, initiating a hamstring provokes an attack of opportunity from the target of your maneuver.</p>
<p>If your attack exceeds the target's CMD, the target is <Link to="/rule/entangled">entangled</Link> for 1 round. For every 5 by which your attack exceeds your opponent's CMD, the penalty lasts 1 additional round. Creatures that are immune to critical hits - such as elementals and oozes - cannot be hamstrung. Flying creatures can be hamstrung, but only if they use non-magical means for flight (such as wings).</p>
<h3 id="rule-combat_errata-risky-strike-and-defensive-stance" data-hash-target>Risky Strike and Defensive Stance</h3>
<p>In place of <Link to="/feat/power_attack">Power Attack</Link>, <Link to="/feat/deadly_aim">Deadly Aim</Link>, <Link to="/misc/fight_defensively">Fight Defensively</Link>, and <Link to="/feat/combat_expertise">Combat Expertise</Link>, players are granted two new combat options: Risky Strike and Defensive Stance. Both are usable by any character with a base attack bonus of at least +1, and neither option requires a feat to access.</p>
<p><strong className="hl">Risky Strike</strong><br/><strong>Prerequisite:</strong> Base attack bonus +1.<br/>You can choose to take a -1 penalty on all attack rolls and combat maneuver checks to gain a +2 bonus on all damage rolls. This bonus to damage is increased by half (+50%) if you are making an attack with a two-handed weapon, a one-handed weapon using two hands, or a primary natural weapon that adds 1-1/2 times your Strength modifier on damage rolls. This bonus to damage is halved (-50%) if you are making an attack with an off-hand weapon or secondary natural weapon.</p>
<p>When your base attack bonus reaches +4, and every 4 points thereafter, the penalty increases by -1 and the bonus to damage increases by +2.</p>
<p>You must choose to use Risky Strike before making an attack roll, and its effects last until your next turn. The bonus damage does not apply to touch attacks or effects that do not deal hit point damage.</p>
<p><strong className="hl">Defensive Stance</strong><br/><strong>Prerequisite:</strong> Base attack bonus +1.<br/>You can choose to take a -1 penalty on melee attack rolls and combat maneuver checks to gain a +1 dodge bonus to your Armor Class. When your base attack bonus reaches +4, the penalty increases by -1 and the dodge bonus increases by +1.</p>
<p>You must choose to use Defensive Stance before making an attack roll and its effects last until your next turn.</p>
<h3 id="rule-combat_errata-nonlethal-damage" data-hash-target>Nonlethal Damage</h3>
<p>Nonlethal damage rules have been very slightly tweaked: players no longer take a -4 penalty to attack rolls when inflicting nonlethal damage with a weapon that deals lethal damage, but instead lose the ability to confirm critical hits when doing so.</p>
<p><strong className="hl">Nonlethal Damage</strong><br/>Nonlethal damage represents harm to a character that is not life-threatening. Unlike normal damage, nonlethal damage is healed quickly with rest.</p>
<p><strong>Dealing Nonlethal Damage:</strong> Certain attacks deal nonlethal damage. Other effects, such as heat or being exhausted, also deal nonlethal damage. When you take nonlethal damage, keep a running total of how much you've accumulated. Do not deduct the nonlethal damage number from your current hit points. It is not "real" damage. Instead, when your nonlethal damage equals your current hit points, you're staggered (see below), and when it exceeds your current hit points, you fall unconscious.</p>
<p><strong>Nonlethal Damage with a Weapon that Deals Lethal Damage:</strong> You can use a melee weapon that deals lethal damage to deal nonlethal damage instead, but you cannot confirm critical hits when doing so.</p>
<p><strong>Lethal Damage with a Weapon that Deals Nonlethal Damage:</strong> You can use a weapon that deals nonlethal damage, including an unarmed strike, to deal lethal damage instead, but you take a -4 penalty on your attack roll.</p>
</>};
const _class_errata = {title: "Class Errata", parent_topics: ["optional_skill_changes","the_elephant_in_the_room"], siblings: ["elephant_overview","new_feats","combat_errata","class_errata","equipment_errata","bestiary_errata"], subtopics: ["teitr_druid","teitr_monk","teitr_ranger","teitr_rogue","teitr_sorcerer"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<p>Errata notes have been provided for all classes presented in the <em>Pathfinder RPG Core Rulebook,</em> save for the barbarian, monk, and rogue. It is suggested that players use the <em>Pathfinder Unchained</em> variations of these classes, which fall more in line with the revised feat tree.</p>
</>};
const _teitr_druid = {title: "Druid", parent_topics: ["optional_skill_changes","the_elephant_in_the_room","class_errata"], siblings: ["teitr_druid","teitr_monk","teitr_ranger","teitr_rogue","teitr_sorcerer"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<p>The druid's <Link to="/sidekick/animal_companion">animal companion</Link> feats have been adjusted to account for changes in the feat tree.</p>
<p><strong className="hl">Animal Feats</strong><br/>Animal companions can select from the following feats: <Link to="/feat/acrobatic">Acrobatic</Link>, Armor Proficiency (<Link to="/feat/light_armor_proficiency">light</Link>, <Link to="/feat/medium_armor_proficiency">medium</Link>, and <Link to="/feat/heavy_armor_proficiency">heavy</Link>), <Link to="/feat/athletic">Athletic</Link>, <Link to="/feat/blind_fight">Blind-Fight</Link>, <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/diehard">Diehard</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/endurance">Endurance</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/improved_natural_attack">Improved Natural Attack</Link>, <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link>, <Link to="/feat/iron_will">Iron Will</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, <strong className="hl"><Link to="/rule/powerful_maneuvers">Powerful Maneuvers</Link></strong>, <Link to="/feat/run">Run</Link>, <Link to="/feat/skill_focus">Skill Focus</Link>, <Link to="/feat/spring_attack">Spring Attack</Link>, <Link to="/feat/stealthy">Stealthy</Link>, <Link to="/feat/toughness">Toughness</Link>, and <Link to="/feat/weapon_focus">Weapon Focus</Link>. Animal companions with an Intelligence of 3 or higher can select any feat they are physically capable of using. GMs may expand this list to include feats from other sources.</p>
</>};
const _teitr_monk = {title: "Monk (Unchained)", parent_topics: ["optional_skill_changes","the_elephant_in_the_room","class_errata"], siblings: ["teitr_druid","teitr_monk","teitr_ranger","teitr_rogue","teitr_sorcerer"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<p>The bonus feat for the monk's unarmed strike class feature has been changed from Improved Unarmed Strike to <strong className="hl"><Link to="/rule/unarmed_combatant">Unarmed Combatant</Link></strong>. Additional, the monk's bonus feats have been adjusted to account for changes in the feat tree.</p>
<p><strong className="hl">Bonus Feat</strong><br/>At 1st level, 2nd level, and every 4 levels thereafter, a monk can select a bonus feat. These feats must be taken from the following list: <Link to="/feat/catch_off_guard">Catch Off-Guard</Link>, <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/deflect_arrows">Deflect Arrows</Link>, <Link to="/feat/dodge">Dodge</Link>, and <strong className="hl"><Link to="/rule/scorpion_stance">Scorpion Stance</Link></strong>. At 6th level, the following feats are added to the list: <strong className="hl"><Link to="/rule/deft_maneuvers">Deft Maneuvers</Link></strong>, <Link to="/feat/gorgons_fist">Gorgon's Fist</Link>, <Link to="/feat/greater_grapple">Greater Grapple</Link>, and <strong className="hl"><Link to="/rule/powerful_maneuvers">Powerful Maneuvers</Link></strong>. At 10th level, the following feats are added to the list: <Link to="/feat/improved_critical">Improved Critical</Link>, <Link to="/feat/medusas_wrath">Medusa's Wrath</Link>, <Link to="/feat/snatch_arrows">Snatch Arrows</Link>, and <Link to="/feat/spring_attack">Spring Attack</Link>. A monk need not have any of the prerequisites normally required for these feats to select them.</p>
</>};
const _teitr_ranger = {title: "Ranger", parent_topics: ["optional_skill_changes","the_elephant_in_the_room","class_errata"], siblings: ["teitr_druid","teitr_monk","teitr_ranger","teitr_rogue","teitr_sorcerer"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<p>The ranger's combat style feats have been adjusted to account for the changes in the feat tree.</p>
<p><strong className="hl">Combat Style Feat (Ex)</strong><br/>At 2nd level, a ranger must select one of two combat  styles to pursue: archery or two-weapon combat. The ranger's expertise manifests in the form of bonus feats at 2nd, 6th, 10th, 14th, and 18th level. He can choose feats from his selected combat style, even if he does not have the normal prerequisites.</p>
<p>If the ranger selects archery, he can choose from the following list whenever he gains a combat style feat: <Link to="/feat/far_shot">Far Shot</Link>, <Link to="/feat/point_blank_shot">Point-Blank Shot</Link>, <Link to="/feat/precise_shot">Precise Shot</Link>, <Link to="/feat/rapid_reload">Rapid Reload</Link>, and <Link to="/feat/rapid_shot">Rapid Shot</Link>. At 6th level, he adds <Link to="/feat/improved_precise_shot">Improved Precise Shot</Link>, <Link to="/feat/manyshot">Manyshot</Link>, <Link to="/feat/parting_shot">Parting Shot</Link>, and <Link to="/feat/point_blank_master">Point-Blank Master</Link> to the list. At 10th level, he adds <Link to="/feat/pinpoint_targeting">Pinpoint Targeting</Link> and <Link to="/feat/shot_on_the_run">Shot on the Run</Link> to the list.</p>
<p>If the ranger selects two-weapon combat, he can choose from the following list whenever he gains a combat style feat: <Link to="/feat/double_slice">Double Slice</Link>, <Link to="/feat/improved_shield_bash">Improved Shield Bash</Link>, <Link to="/feat/quick_draw">Quick Draw</Link>, <Link to="/feat/shield_focus">Shield Focus</Link>, and <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link>. At 6th level, he adds <Link to="/feat/greater_two_weapon_fighting">Greater Two-Weapon Fighting</Link>, <Link to="/feat/greater_shield_focus">Greater Shield Focus</Link>, and <Link to="/feat/two_weapon_defense">Two-Weapon Defense</Link> to the list. At 10th level, he adds <Link to="/feat/shield_slam">Shield Slam</Link> and <Link to="/feat/two_weapon_rend">Two-Weapon Rend</Link> to the list.</p>
<p>The benefits of the ranger's chosen style feats apply only when he wears light, medium, or no armor. He loses all benefits of his combat style feats when wearing heavy armor. Once a ranger selects a combat style, it cannot be changed.</p>
</>};
const _teitr_rogue = {title: "Rogue (Unchained)", parent_topics: ["optional_skill_changes","the_elephant_in_the_room","class_errata"], siblings: ["teitr_druid","teitr_monk","teitr_ranger","teitr_rogue","teitr_sorcerer"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<p>The rogue's finesse training class feature has been adjusted to account for equipment rule changes - specifically in regard to finesse and agile weapons. Additionally, the <Link to="/talent/combat_swipe">combat swipe</Link> rogue talent is no longer available.</p>
<p><strong className="hl">Finesse Training</strong><br/>At 1st level, a rogue gains <strong className="hl"><Link to="/rule/deft_maneuvers">Deft Maneuvers</Link></strong> as a bonus feat. In addition, starting at 3rd level, she can select any one <Link to="/ability/weapon_groups">weapon group</Link> listed under the fighter's Weapon Training class feature. Once this choice is made, it cannot be changed. Whenever she makes a successful melee attack with a <Link to="/rule/finesse">finesse</Link> weapon or an <Link to="/magic-enh/agile">agile</Link> weapon from this group, she adds her Dexterity modifier instead of her Strength modifier to the damage roll. If any effect would prevent the rogue from adding her Strength modifier to the damage roll, she does not add her Dexterity modifier. The rogue can select a second weapon group at 11th level and a third at 19th level.</p>
</>};
const _teitr_sorcerer = {title: "Sorcerer", parent_topics: ["optional_skill_changes","the_elephant_in_the_room","class_errata"], siblings: ["teitr_druid","teitr_monk","teitr_ranger","teitr_rogue","teitr_sorcerer"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<p>When determining bonus feats granted by a <Link to="/ability/sorcerer_bloodlines">sorcerer bloodline</Link>, replace removed feats according to the following table while ignoring duplicate feats.</p>
<ScrollContainer id="rule-teitr_sorcerer--table-0"><table>
<thead>
<tr>
<th>Old Feat</th>
<th>New Feat</th>
</tr>
</thead>
<tbody><tr>
<td><Link to="/feat/combat_expertise">Combat Expertise</Link></td>
<td><strong className="hl"><Link to="/rule/deft_maneuvers">Deft Maneuvers</Link></strong></td>
</tr>
<tr>
<td><Link to="/feat/improved_bull_rush">Improved Bull Rush</Link></td>
<td><Link to="/feat/greater_bull_rush">Greater Bull Rush</Link></td>
</tr>
<tr>
<td><Link to="/feat/improved_disarm">Improved Disarm</Link></td>
<td><Link to="/feat/greater_disarm">Greater Disarm</Link></td>
</tr>
<tr>
<td><Link to="/feat/improved_feint">Improved Feint</Link></td>
<td><Link to="/feat/greater_feint">Greater Feint</Link></td>
</tr>
<tr>
<td><Link to="/feat/improved_grapple">Improved Grapple</Link></td>
<td><Link to="/feat/greater_grapple">Greater Grapple</Link></td>
</tr>
<tr>
<td><Link to="/feat/improved_overrun">Improved Overrun</Link></td>
<td><Link to="/feat/greater_overrun">Greater Overrun</Link></td>
</tr>
<tr>
<td><Link to="/feat/improved_sunder">Improved Sunder</Link></td>
<td><Link to="/feat/greater_sunder">Greater Sunder</Link></td>
</tr>
<tr>
<td><Link to="/feat/improved_trip">Improved Trip</Link></td>
<td><Link to="/feat/greater_trip">Greater Trip</Link></td>
</tr>
<tr>
<td><Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link></td>
<td><strong className="hl"><Link to="/rule/unarmed_combatant">Unarmed Combatant</Link></strong></td>
</tr>
<tr>
<td><Link to="/feat/mobility">Mobility</Link></td>
<td><Link to="/feat/spring_attack">Spring Attack</Link></td>
</tr>
<tr>
<td><Link to="/feat/power_attack">Power Attack</Link></td>
<td><strong className="hl"><Link to="/rule/powerful_maneuvers">Powerful Maneuvers</Link></strong></td>
</tr>
<tr>
<td><Link to="/feat/weapon_finesse">Weapon Finesse</Link></td>
<td><strong className="hl"><Link to="/feat/agile_combatant">Agile Combatant</Link></strong></td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _equipment_errata = {title: "Equipment Errata", parent_topics: ["optional_skill_changes","the_elephant_in_the_room"], siblings: ["elephant_overview","new_feats","combat_errata","class_errata","equipment_errata","bestiary_errata"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<h3 id="rule-equipment_errata-weapon-finesse">Weapon Finesse</h3>
<p>The Weapon Finesse feat has been removed, and now any character may choose to use their dexterity bonus to hit with light melee weapons. As a consequence, the Light Melee Weapons designation has been renamed to Finesse Melee Weapons. A new special weapon feature called <strong>agile</strong> has been added for melee weapons that are one-handed or two-handed but can still be finessed, such as the <Link to="/eq-weapon/rapier">rapier</Link>.</p>
<h3 id="rule-equipment_errata-finesse-one-handed-and-two-handed-melee-weapons">Finesse, One-Handed, and Two-Handed Melee Weapons</h3>
<p>This designation is a measure of how much effort it takes to wield a weapon in combat. It indicates whether a melee weapon, when wielded by a character of the weapon's size category, is considered a finesse weapon, a one-handed weapon, or a two-handed weapon.</p>
<p><strong className="hl">Finesse:</strong> A finesse weapon is used in one hand. It is easier to use in one's off hand than a one-handed weapon is and can be used while <Link to="/rule/grappling">grappling</Link>.</p>
<p>A wielder may choose to use their Dexterity modifier instead of their Strength modifier on attack rolls with a finesse weapon. In either case, add the wielder's Strength modifier to damage rolls for melee attacks if it is used in the primary hand, or half the wielder's Strength bonus if it is used in the off hand. Using two hands to wield a finesse weapon gives no advantage on damage; the Strength bonus applies as though the weapon were held in the wielder's primary hand only.</p>
<p>Unarmed strikes and natural attacks are always considered finesse weapons.</p>
<h3 id="rule-equipment_errata-weapon-qualities">Weapon Qualities</h3>
<p><strong className="hl">Agile:</strong> You can apply your Dexterity modifier instead of your Strength modifier to attack rolls when wielding an agile weapon sized for you, even though it isn't a finesse weapon.</p>
<p>The <Link to="/eq-weapon/elven_curve_blade">Elven curve blade</Link>, <Link to="/eq-weapon/rapier">rapier</Link>, <Link to="/eq-weapon/spiked_chain">spiked chain</Link>, and <Link to="/eq-weapon/whip">whip</Link> have the <em>agile</em> quality by default.</p>
</>};
const _bestiary_errata = {title: "Bestiary Errata", parent_topics: ["optional_skill_changes","the_elephant_in_the_room"], siblings: ["elephant_overview","new_feats","combat_errata","class_errata","equipment_errata","bestiary_errata"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link></p>
<p>Monster stat blocks have not been adjusted to account for changes in the feat tree. Game masters have two options when creating encounters for their players.</p>
<h3 id="rule-bestiary_errata-method-i-quick-adjustment">Method I: Quick Adjustment</h3>
<p>Game masters may present monster stat blocks as they are written in the <em>Pathfinder RPG Bestiary,</em> while allowing monsters the use of both <Link to="/rule/combat_errata">Defensive Stance and Risky Strike</Link>.</p>
<p>Any defunct feats, such as <Link to="/feat/improved_trip">Improved Trip</Link> and <Link to="/feat/stand_still">Stand Still</Link>, are either disregarded or utilized according to their original wording in the <em>Pathfinder RPG Core Rulebook.</em></p>
<h3 id="rule-bestiary_errata-method-ii-feat-swapping">Method II: Feat Swapping</h3>
<p>Game masters may choose to re-assign a creature's feats using the monster builder in the <em>Pathfinder RPG Bestiary,</em> referencing the <Link to="/rule/elephant_overview">revised feat table</Link>.</p>
<p>Although there are no specific rules for feat swapping, Table 2-3: Bestiary Feat Swapping can be used as a starting point.</p>
<p>For monsters possessing <Link to="/feat/greater_weapon_focus">Greater Weapon Focus</Link>, <Link to="/feat/greater_weapon_specialization">Greater Weapon Specialization</Link>, <Link to="/feat/weapon_focus">Weapon Focus</Link>, and <Link to="/feat/weapon_specialization">Weapon Specialization</Link>, change the single weapon type to the corresponding weapon group.</p>
<h3 id="rule-bestiary_errata-monster-feats">Monster Feats</h3>
<p>Monster feats remain virtually unchanged, save for the removal of <Link to="/feat/power_attack">Power Attack</Link> and <Link to="/feat/improved_bull_rush">Improved Bull Rush</Link> (now replaced with <Link to="/rule/powerful_maneuvers">Powerful Maneuvers</Link>) as prerequisites for <Link to="/feat/awesome_blow">Awesome Blow</Link>.</p>
<h3 id="rule-bestiary_errata-table-2-3-bestiary-feat-swapping">Table 2-3: Bestiary Feat Swapping</h3>
<ScrollContainer id="rule-bestiary_errata--table-0"><table>
<thead>
<tr>
<th>Old Feat</th>
<th>New Feat</th>
</tr>
</thead>
<tbody><tr>
<td><Link to="/feat/combat_expertise">Combat Expertise</Link></td>
<td><Link to="/rule/deft_maneuvers">Deft Maneuvers</Link></td>
</tr>
<tr>
<td><Link to="/feat/deadly_aim">Deadly Aim</Link></td>
<td><Link to="/feat/far_shot">Far Shot</Link></td>
</tr>
<tr>
<td><Link to="/feat/greater_two_weapon_fighting">Greater Two-Weapon Fighting</Link></td>
<td><Link to="/feat/double_slice">Double Slice</Link></td>
</tr>
<tr>
<td><Link to="/feat/improved_bull_rush">Improved Bull Rush</Link></td>
<td><Link to="/feat/greater_bull_rush">Greater Bull Rush</Link></td>
</tr>
<tr>
<td><Link to="/feat/improved_disarm">Improved Disarm</Link></td>
<td><Link to="/feat/greater_disarm">Greater Disarm</Link></td>
</tr>
<tr>
<td><Link to="/feat/improved_feint">Improved Feint</Link></td>
<td><Link to="/feat/greater_feint">Greater Feint</Link></td>
</tr>
<tr>
<td><Link to="/feat/improved_grapple">Improved Grapple</Link></td>
<td><Link to="/feat/greater_grapple">Greater Grapple</Link></td>
</tr>
<tr>
<td><Link to="/feat/improved_overrun">Improved Overrun</Link></td>
<td><Link to="/feat/greater_overrun">Greater Overrun</Link></td>
</tr>
<tr>
<td><Link to="/feat/improved_sunder">Improved Sunder</Link></td>
<td><Link to="/feat/greater_sunder">Greater Sunder</Link></td>
</tr>
<tr>
<td><Link to="/feat/improved_trip">Improved Trip</Link></td>
<td><Link to="/feat/greater_trip">Greater Trip</Link></td>
</tr>
<tr>
<td><Link to="/feat/improved_two_weapon_fighting">Improved Two-Weapon Fighting</Link></td>
<td><Link to="/feat/greater_two_weapon_fighting">Greater Two-Weapon Fighting</Link></td>
</tr>
<tr>
<td><Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link></td>
<td><Link to="/rule/unarmed_combatant">Unarmed Combatant</Link></td>
</tr>
<tr>
<td><Link to="/feat/mobility">Mobility</Link></td>
<td><Link to="/feat/spring_attack">Spring Attack</Link> or <Link to="/feat/whirlwind_attack">Whirlwind Attack</Link> <sup><InnerLink showBacklink="backlink-rule-bestiary_errata-ref-1-1" id="rule-bestiary_errata-ref-1-1" data-hash-target to="rule-bestiary_errata-1">1</InnerLink></sup></td>
</tr>
<tr>
<td><Link to="/feat/point_blank_shot">Point-Blank Shot</Link></td>
<td><Link to="/feat/precise_shot">Precise Shot</Link></td>
</tr>
<tr>
<td><Link to="/feat/power_attack">Power Attack</Link></td>
<td><Link to="/rule/powerful_maneuvers">Powerful Maneuvers</Link></td>
</tr>
<tr>
<td><Link to="/feat/precise_shot">Precise Shot</Link></td>
<td><Link to="/feat/point_blank_shot">Point-Blank Shot</Link></td>
</tr>
<tr>
<td><Link to="/feat/stand_still">Stand Still</Link></td>
<td><Link to="/rule/greater_hamstring">Greater Hamstring</Link></td>
</tr>
<tr>
<td><Link to="/feat/throw_anything">Throw Anything</Link></td>
<td><Link to="/feat/catch_off_guard">Catch Off-Guard</Link> or <Link to="/feat/improvised_weapon_mastery">Improvised Weapon Mastery</Link> <sup><InnerLink showBacklink="backlink-rule-bestiary_errata-ref-2-1" id="rule-bestiary_errata-ref-2-1" data-hash-target to="rule-bestiary_errata-2">2</InnerLink></sup></td>
</tr>
<tr>
<td><Link to="/feat/weapon_finesse">Weapon Finesse</Link></td>
<td><Link to="/feat/agile_combatant">Agile Combatant</Link></td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-bestiary_errata-label">Footnotes</h3>
<ol>
<li id="rule-bestiary_errata-1">
<p>Creatures who already possess <Link to="/feat/dodge">Dodge</Link> and Spring Attack may instead choose Whirlwind Attack. <InnerLink id="backlink-rule-bestiary_errata-ref-1-1" data-hash-target to="rule-bestiary_errata-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="rule-bestiary_errata-2">
<p>Creatures who already possess Catch Off-Guard may instead choose Improved Weapon Mastery. <InnerLink id="backlink-rule-bestiary_errata-ref-2-1" data-hash-target to="rule-bestiary_errata-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
export default {optional_skill_changes:_optional_skill_changes,alternate_crafting_rules:_alternate_crafting_rules,item_crafting_difficulties:_item_crafting_difficulties,supervising_helpers:_supervising_helpers,workshop:_workshop,special_raw_materials:_special_raw_materials,alternate_profession_rules:_alternate_profession_rules,setting_up_shop:_setting_up_shop,running_the_business:_running_the_business,determining_profits:_determining_profits,typical_business_setups:_typical_business_setups,background_skills:_background_skills,skill_changes:_skill_changes,gaining_adventuring_skills:_gaining_adventuring_skills,gaining_background_skills:_gaining_background_skills,class_skills:_class_skills,monsters_and_npcs:_monsters_and_npcs,new_skills:_new_skills,artistry_int:_artistry_int,lore_int:_lore_int,expanded_skill_uses:_expanded_skill_uses,expanded_craft:_expanded_craft,expanded_perform:_expanded_perform,expanded_profession:_expanded_profession,consolidated_skills:_consolidated_skills,skill_descriptions_pu:_skill_descriptions_pu,acrobatics_dex:_acrobatics_dex,balance:_balance,escape_from_restraints:_escape_from_restraints,execute_flying_maneuvers:_execute_flying_maneuvers,ride_mounts:_ride_mounts,soften_falls:_soften_falls,squeeze:_squeeze,tumble:_tumble,athletics_str:_athletics_str,catch:_catch,climb:_climb,jump:_jump,swim:_swim,finesse_dex:_finesse_dex,conceal_objects_on_your_body:_conceal_objects_on_your_body,disarm_traps_or_devices:_disarm_traps_or_devices,open_locks:_open_locks,palm_objects:_palm_objects,pilfer_objects_from_creatures:_pilfer_objects_from_creatures,influence_cha:_influence_cha,change_others_attitudes:_change_others_attitudes,create_diversions:_create_diversions,demoralize:_demoralize,feint_in_combat:_feint_in_combat,gather_information_pu:_gather_information_pu,intimidate:_intimidate,lie:_lie,make_requests:_make_requests,pass_secret_messages:_pass_secret_messages,nature_int:_nature_int,handle_animals:_handle_animals,indentify_monsters:_indentify_monsters,recall_knowledge_nature:_recall_knowledge_nature,perception_wis:_perception_wis,discern_secret_messages:_discern_secret_messages,get_hunches:_get_hunches,notice_creatures_and_details:_notice_creatures_and_details,search_locations:_search_locations,sense_enchantments:_sense_enchantments,sense_motive:_sense_motive,performance_cha:_performance_cha,disguise_yourself:_disguise_yourself,impress_audiences:_impress_audiences,religion_int:_religion_int,identify_monsters_religion:_identify_monsters_religion,recall_knowledge_religion:_recall_knowledge_religion,society_int:_society_int,create_or_detect_forgeries:_create_or_detect_forgeries,decipher_writing:_decipher_writing,identify_monsters_society:_identify_monsters_society,learn_language:_learn_language,recall_knowledge_society:_recall_knowledge_society,spellcraft_int:_spellcraft_int,activate_magic_items:_activate_magic_items,craft_magic_items_pu:_craft_magic_items_pu,identify_magic:_identify_magic,identify_monsters_spellcraft:_identify_monsters_spellcraft,learn_or_borrow_spells:_learn_or_borrow_spells,recall_knowledge_spellcraft:_recall_knowledge_spellcraft,stealth_dex:_stealth_dex,avoid_being_noticed:_avoid_being_noticed,survival_wis:_survival_wis,determine_true_north:_determine_true_north,follow_tracks:_follow_tracks,survive_in_the_wild:_survive_in_the_wild,tend_wounds_and_ailments:_tend_wounds_and_ailments,racial_bonuses:_racial_bonuses,class_skills_2:_class_skills_2,converting_existing_characters:_converting_existing_characters,altering_skill_bonuses:_altering_skill_bonuses,bonuses_for_function:_bonuses_for_function,prerequisites:_prerequisites,monster_skill_bonuses:_monster_skill_bonuses,altering_feats:_altering_feats,altering_traits:_altering_traits,special_class_rules:_special_class_rules,miscellaneous_abilities:_miscellaneous_abilities,grouped_skills:_grouped_skills,skill_group_rules:_skill_group_rules,calculating_skill_bonuses:_calculating_skill_bonuses,multiclassing_pu:_multiclassing_pu,linguistics:_linguistics,skill_unlocks:_skill_unlocks,the_elephant_in_the_room:_the_elephant_in_the_room,elephant_overview:_elephant_overview,new_feats:_new_feats,deft_maneuvers:_deft_maneuvers,greater_hamstring:_greater_hamstring,iron_guard:_iron_guard,powerful_maneuvers:_powerful_maneuvers,powerful_stride:_powerful_stride,savage_charge:_savage_charge,scorpion_stance:_scorpion_stance,unarmed_combatant:_unarmed_combatant,weapon_proficiency:_weapon_proficiency,whirling_cleave:_whirling_cleave,combat_errata:_combat_errata,class_errata:_class_errata,teitr_druid:_teitr_druid,teitr_monk:_teitr_monk,teitr_ranger:_teitr_ranger,teitr_rogue:_teitr_rogue,teitr_sorcerer:_teitr_sorcerer,equipment_errata:_equipment_errata,bestiary_errata:_bestiary_errata}