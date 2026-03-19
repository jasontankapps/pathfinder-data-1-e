import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
const _scaling_items = {title: "Scaling Items", parent_topics: ["optional_magic_changes"], siblings: ["dynamic_magic_item_creation","esoteric_material_components","relics","scaling_items","legacy_items","simplified_spellcasting","words_of_power"], subtopics: ["adjusting_treasure","buying_and_selling_scaling_items","crafting_scaling_items","pricing_new_scaling_items","standalone_new_scaling_items","scaling_item_examples"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 160</Link></p>
<p>Typically, player characters find themselves buying and selling magic items as they gain levels to keep up with the increasing threats they face. Items come and go from each character's inventory with such frequency that they hardly have the chance to impact the game's story. Scaling items, however, increase in power along with the characters who carry them, allowing an old and cherished item to develop and retain its utility rather than being sold and forgotten.</p>
<p>Scaling items work like normal magic items, but they gain new powers as their wielders gain levels, and their existing powers sometimes also improve. Additional item powers appear in a scaling magic item's entry with a header indicating the character level at which they unlock.</p>
<p>The caster level of the item scales up as well. A scaling item's effective caster level is its listed caster level or the character level of its wielder, whichever is higher, to a maximum of the item's highest-level ability. For instance, if an item has a base caster level of 5th and additional abilities at 7th and 9th levels, it's treated as caster level 8th in the hands of an 8th-level character, but is treated as only caster level 9th in the hands of a 10th-level character.</p>
<p>Each scaling item has a base price that represents its value to a character whose level is equal to or less than the item's caster level. As the item's caster level increases in the hands of a more powerful character, the item's value increases as well. The values of such items fall into three categories (baubles, prizes, and wonders), which indicate the rough percentage of the character's wealth a scaling item represents.</p>
<p>The weakest items, baubles, represent 5% of a PC's <Link to="/rule/placing_treasure">character wealth at her level</Link> and can be compared to consumable magic items (even though baubles aren't destroyed by use). Items in the middle category, prizes, represent 15% of a PC's suggested wealth and correspond to magic items of moderate power. An item of the most valuable category, wonders, represents 30% of a PC's suggested wealth and corresponds to a major magic item, such as a fighter's most beloved and powerful sword. Wonders exceed the normal cost assumptions of the game at their highest level. Such items approach the power of minor artifacts, though they're not indestructible and can still be created normally.</p>
<p><strong>Also See:</strong> <Link to="/rule/relics">Relics</Link> and <Link to="/rule/legacy_items">Legacy Items</Link></p>
</>};
const _adjusting_treasure = {title: "Adjusting Treasure", parent_topics: ["optional_magic_changes","scaling_items"], siblings: ["adjusting_treasure","buying_and_selling_scaling_items","crafting_scaling_items","pricing_new_scaling_items","standalone_new_scaling_items","scaling_item_examples"], subtopics: ["maximum_level","mismatched_levels"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 160</Link></p>
<p>Since scaling items improve as characters level up, they effectively add wealth to their owners over time. To balance this out, the Game Master should reduce treasure awards in proportion to how many scaling items the party has. This can be done per character or for the whole group, as described below. Note that the original level and price of a scaling item don't matter once the character's level exceeds the minimum caster level of the item, since the item accrues value based on its category (bauble, prize, or wonder), not on its original price. The adjustments to treasure awards are the same for all items in a category.</p>
<h3 id="rule-adjusting_treasure-table-4-13-value-of-scaling-items">Table 4-13: Value of Scaling Items</h3>
<ScrollContainer id="rule-adjusting_treasure--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Bauble (5%)</th>
<th>Prize (15%)</th>
<th>Wonder (30%)</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>15 gp</td>
<td>45 gp</td>
<td>90 gp</td>
</tr>
<tr>
<td>2nd</td>
<td>50 gp</td>
<td>150 gp</td>
<td>300 gp</td>
</tr>
<tr>
<td>3rd</td>
<td>150 gp</td>
<td>450 gp</td>
<td>900 gp</td>
</tr>
<tr>
<td>4th</td>
<td>300 gp</td>
<td>900 gp</td>
<td>1,800 gp</td>
</tr>
<tr>
<td>5th</td>
<td>525 gp</td>
<td>1,575 gp</td>
<td>3,150 gp</td>
</tr>
<tr>
<td>6th</td>
<td>80 gp</td>
<td>2,400 gp</td>
<td>4,800 gp</td>
</tr>
<tr>
<td>7th</td>
<td>1,750 gp</td>
<td>3,525 gp</td>
<td>7,050 gp</td>
</tr>
<tr>
<td>8th</td>
<td>1,650 gp</td>
<td>4,950 gp</td>
<td>9,900 gp</td>
</tr>
<tr>
<td>9th</td>
<td>2,300 gp</td>
<td>6,900 gp</td>
<td>13,800 gp</td>
</tr>
<tr>
<td>10th</td>
<td>3,100 gp</td>
<td>9,300 gp</td>
<td>18,600 gp</td>
</tr>
<tr>
<td>11th</td>
<td>4,100 gp</td>
<td>12,300 gp</td>
<td>24,600 gp</td>
</tr>
<tr>
<td>12th</td>
<td>5,400 gp</td>
<td>16,200 gp</td>
<td>32,400 gp</td>
</tr>
<tr>
<td>13th</td>
<td>7,000 gp</td>
<td>21,000 gp</td>
<td>42,000 gp</td>
</tr>
<tr>
<td>14th</td>
<td>9,250 gp</td>
<td>27,750 gp</td>
<td>55,500 gp</td>
</tr>
<tr>
<td>15th</td>
<td>12,000 gp</td>
<td>36,000 gp</td>
<td>72,000 gp</td>
</tr>
<tr>
<td>16th</td>
<td>15,750 gp</td>
<td>47,250 gp</td>
<td>94,500 gp</td>
</tr>
<tr>
<td>17th</td>
<td>20,500 gp</td>
<td>61,500 gp</td>
<td>129,000 gp</td>
</tr>
<tr>
<td>18th</td>
<td>26,500 gp</td>
<td>79,500 gp</td>
<td>159,000 gp</td>
</tr>
<tr>
<td>19th</td>
<td>34,250 gp</td>
<td>102,750 gp</td>
<td>205,500 gp</td>
</tr>
<tr>
<td>20th</td>
<td>44,000 gp</td>
<td>132,000 gp</td>
<td>264,000 gp</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Per Character:</strong> If you apply the scaling item treasure reduction for each character, do so after dividing up shares of treasure for the characters. Reduce the treasure received by a character with a scaling item by the percentage listed for the item's category (5% for baubles, 15% for prizes, and 30% for wonders). If the character has multiple scaling items, combine the percentages before adjusting the amount of treasure.</p>
<p>For example, a PC with a wonder and a prize would receive 45% less treasure, because the PC has effectively already received that amount of treasure in the form of the items' increased values. Since the value of a scaling item is based on wealth for an entire level, apply this adjustment to every treasure allotment the character receives. If you'd prefer to keep the adjustments more tied to the game world, you can instead replace the character's lost treasure share with a magical substance that must be used to increase the power of scaling items. This might be magical residue, vibrant crystals, or spellbook-style pages of magical phrases that increase the item's power. In any case, this substance should be treated as almost worthless to sell, and therefore useful only for upgrading scaling items.</p>
<p><strong className="hl">Group Basis:</strong> You can use the scaling items of the whole party to adjust treasure. This implementation works best if all or most of the characters possess scaling items, and no character possesses a far higher number than the others. This method has the advantage of hiding behind the scenes, requiring no in-game justification. Add up the percentages of all scaling items owned by all PCs. Divide this percentage by the number of PCs, and reduce the total value of treasure the party finds by that percentage before dividing it among the characters. For example, if a group of four PCs have between them one bauble, three prizes, and a wonder, their treasure is reduced by 20% (80% divided by 4).</p>
</>};
const _maximum_level = {title: "Maximum Level", parent_topics: ["optional_magic_changes","scaling_items","adjusting_treasure"], siblings: ["maximum_level","mismatched_levels"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 161</Link></p>
<p>Many scaling items unlock new powers all the way up to 20th level. Others reach the caps on their abilities at lower levels. Once an item reaches the level of its most powerful ability, stop adjusting treasure for that item. At that point, the scaling item is considered fully "paid for."</p>
</>};
const _mismatched_levels = {title: "Mismatched Levels", parent_topics: ["optional_magic_changes","scaling_items","adjusting_treasure"], siblings: ["maximum_level","mismatched_levels"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 161</Link></p>
<p>If a PC receives a scaling item of a caster level lower than her character level, she effectively receives an item that's worth more than the price listed in the stat block. Reference <Link to="/rule/adjusting_treasure">Table 4-13: Value of Scaling Items</Link> and use the PC's level to estimate how much the item is really worth to that PC, and use that purchase price as its treasure value. Giving an item with a caster level higher than the character's level doesn't present the same problems; it just means the PC won't be unlocking the item's higher-level powers for some time. Don't reduce treasure for such an item until the PC's level exceeds the item's caster level.</p>
</>};
const _buying_and_selling_scaling_items = {title: "Buying and Selling Scaling Items", parent_topics: ["optional_magic_changes","scaling_items"], siblings: ["adjusting_treasure","buying_and_selling_scaling_items","crafting_scaling_items","pricing_new_scaling_items","standalone_new_scaling_items","scaling_item_examples"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 161</Link></p>
<p>Selling a scaling item presents a tricky balance proposition. Such an item is worth more to a higher-level buyer, and a high-level seller has spent more effective wealth acquiring and keeping the item. The maximum amount a PC can get for a scaling item is half the value (as normal for selling magic items) listed on Table 4-13 for the item's category and the PC's current level. To get this amount, the PC must find a motivated buyer of her level or higher, which may involve considerable time and effort. If the PC must sell in a hurry, she might get 25% of the listed value, or even less. A PC can't sell a scaling item for more than 50% of the item's value for her current level, even if she sells it to a higher-level NPC.</p>
</>};
const _crafting_scaling_items = {title: "Crafting Scaling Items", parent_topics: ["optional_magic_changes","scaling_items"], siblings: ["adjusting_treasure","buying_and_selling_scaling_items","crafting_scaling_items","pricing_new_scaling_items","standalone_new_scaling_items","scaling_item_examples"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 161</Link></p>
<p>Scaling items must be crafted at their highest level of power, with a cost determined by referencing <Link to="/rule/adjusting_treasure">Table 4-13</Link>. Start with the value listed on the table for the item's category and its highest-level ability. Divide this by 2 to get the crafting cost, and add the value of any nonmagical armor or weapon component. The crafting cost is always much higher than the market price of a scaling item, since the crafting cost is based on the full set of abilities but the market price is based on the minimum caster level. When a PC crafts a scaling item, he doesn't need to pay any further cost in reduced treasure for keeping the item, because the full value of the item has already been accounted for. When setting the DC for crafting a scaling item, use the item's highest-level ability instead of its base caster level.</p>
</>};
const _pricing_new_scaling_items = {title: "Pricing New Scaling Items", parent_topics: ["optional_magic_changes","scaling_items"], siblings: ["adjusting_treasure","buying_and_selling_scaling_items","crafting_scaling_items","pricing_new_scaling_items","standalone_new_scaling_items","scaling_item_examples"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 161</Link></p>
<p>To determine the price when creating a new scaling item, determine the cost of the base item without any of the level-based upgrades, and increase that price based on each additional ability as described below.</p>
<p><strong className="hl">Pricing the Base Item:</strong> First, decide whether the new item is a wonder (best for major items), a prize (best for utility items), or a bauble (suitable for items that are interesting but not significant). Price the base item according to the <Link to="/rule/magic_item_creation">normal rules for creating magic items</Link>. Then, using the column on <Link to="/rule/adjusting_treasure">Table 4-13</Link> that corresponds to the item's category, find the lowest gp value that includes that initial price. Use that value to determine the item's starting caster level.</p>
<p><strong className="hl">Adding Scaling Abilities:</strong> Use the following steps to assign additional abilities and spells, and the levels at which those abilities unlock.</p>
<p><strong className="hl">Adding Unlockable Abilities:</strong> Determine the first unlockable ability or increase in power. Price the item again, using the new ability plus all the abilities of the base item; you will use this price to determine the level at which the ability unlocks (see below). However, because many scaling items have a large range of limited-use abilities, following the standard rules can result in items that are too expensive for their actual utility. Therefore, on worn items, you should typically waive the 50% increase in price for an additional power unless it's a particularly useful ability or has a strong synergy with the item's other abilities. For instance, if you create a set of gloves with a <Link to="/spell/burning_hands">burning hands</Link> effect, you wouldn't need to pay the extra cost for a higher-level ability that grants you fire resistance, but you would for an ability that grants fire resistance to all allies within 10 feet of you since that ability complements <em>burning hands</em> so well.</p>
<p><strong className="hl">Adding Spells:</strong> Assign a price for any spells the item allows its owner to use. Table 4-14: Spell Prices includes the typical prices of one daily use of spells at different caster levels. Because the price of spells varies based on the item's caster level, it's usually best to price other abilities first, then estimate the finished caster level, then price the spell at that caster level. If a spell doesn't improve significantly at higher caster levels, price it using the item's minimum caster level. If the spell becomes more powerful with level increases (as does <Link to="/spell/fireball">fireball</Link>), use the caster level of the level at which it's unlocked to determine its price. Cap a spell's caster level at the highest level that makes a significant difference, such as 10th level for <em>fireball.</em> Generally, if only the spell's duration changes with caster level, spells with a duration of 1 minute per level or 1 round per level should use the full caster level, but those with longer durations (10 minutes per level or more) should use the minimum caster level.</p>
<p>Remember to readjust the price at each further power unlock level, since the caster level of the item will match the owner's level. On a worn item, waive the standard 50% price increase on the additional spells.</p>
<p><strong className="hl">Assigning an Unlock Level:</strong> Now that you have a cost for the next scaling ability, assign a level at which that ability unlocks. This follows the same process as the Pricing the Base Item step, but using the new cost. You should usually round down, but if you're almost at the higher-level price, bump up the level. For example, a prize that priced out at 8,000 gp at a given set of powers would unlock those powers at 9th level (6,900 gp), but if the price hits 9,000 gp, the abilities should instead unlock at 10th level (9,300 gp).</p>
<p><strong className="hl">Completing the Item:</strong> Repeat this process for each set of new powers. Try to add a new unlockable ability every 2 to 4 levels. It's not necessary to scale every item all the way to 20th level, however - stop when the set of abilities feels complete.</p>
<h3 id="rule-pricing_new_scaling_items-table-price-by-spell-level">Table Price by Spell Level</h3>
<ScrollContainer id="rule-pricing_new_scaling_items--table-0"><table>
<thead>
<tr>
<th>CL</th>
<th>0</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
<th>6</th>
<th>7</th>
<th>8</th>
<th>9</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>180 gp</td>
<td>360 gp</td>
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
<td>360 gp</td>
<td>720 gp</td>
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
<td>540 gp</td>
<td>1,080 gp</td>
<td>2,160 gp</td>
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
<td>720 gp</td>
<td>1,440 gp</td>
<td>2,880 gp</td>
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
<td>900 gp</td>
<td>1,800 gp</td>
<td>3,600 gp</td>
<td>5,400 gp</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>1,080 gp</td>
<td>2,160 gp</td>
<td>4,320 gp</td>
<td>6,480 gp</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>1,260 gp</td>
<td>2,520 gp</td>
<td>5,040 gp</td>
<td>7,560 gp</td>
<td>10,080 gp</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>1,440 gp</td>
<td>2,800 gp</td>
<td>5,760 gp</td>
<td>8,640 gp</td>
<td>11,520 gp</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>1,620 gp</td>
<td>3,240 gp</td>
<td>6,480 gp</td>
<td>9,720 gp</td>
<td>12,960 gp</td>
<td>16,200 gp</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>1,800 gp</td>
<td>3,600 gp</td>
<td>7,200 gp</td>
<td>10,800 gp</td>
<td>14,400 gp</td>
<td>18,000 gp</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>1,980 gp</td>
<td>3,960 gp</td>
<td>7,920 gp</td>
<td>11,880 gp</td>
<td>15,840 gp</td>
<td>19,800 gp</td>
<td>23,760 gp</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>2,160 gp</td>
<td>4,320 gp</td>
<td>8,640 gp</td>
<td>12,960 gp</td>
<td>17,280 gp</td>
<td>21,600 gp</td>
<td>25,920 gp</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>2,340 gp</td>
<td>4,680 gp</td>
<td>9,360 gp</td>
<td>14,040 gp</td>
<td>18,720 gp</td>
<td>23,400 gp</td>
<td>28,080 gp</td>
<td>32,760 gp</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>2,520 gp</td>
<td>5,040 gp</td>
<td>10,080 gp</td>
<td>15,120 gp</td>
<td>20,160 gp</td>
<td>25,200 gp</td>
<td>30,240 gp</td>
<td>35,280 gp</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>2,700 gp</td>
<td>5,400 gp</td>
<td>10,800 gp</td>
<td>16,200 gp</td>
<td>21,600 gp</td>
<td>27,000 gp</td>
<td>32,400 gp</td>
<td>37,800 gp</td>
<td>43,200 gp</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>2,880 gp</td>
<td>5,760 gp</td>
<td>11,520 gp</td>
<td>17,280 gp</td>
<td>23,040 gp</td>
<td>28,800 gp</td>
<td>34,560 gp</td>
<td>40,320 gp</td>
<td>46,080 gp</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>3,060 gp</td>
<td>6,120 gp</td>
<td>12,240 gp</td>
<td>18,360 gp</td>
<td>24,480 gp</td>
<td>30,600 gp</td>
<td>36,720 gp</td>
<td>42,840 gp</td>
<td>48,960 gp</td>
<td>55,080 gp</td>
</tr>
<tr>
<td>18th</td>
<td>3,240 gp</td>
<td>6,480 gp</td>
<td>12,960 gp</td>
<td>19,440 gp</td>
<td>25,920 gp</td>
<td>32,400 gp</td>
<td>38,880 gp</td>
<td>45,360 gp</td>
<td>51,840 gp</td>
<td>58,320 gp</td>
</tr>
<tr>
<td>19th</td>
<td>3,420 gp</td>
<td>6,840 gp</td>
<td>13,680 gp</td>
<td>20,520 gp</td>
<td>27,360 gp</td>
<td>34,200 gp</td>
<td>41,040 gp</td>
<td>47,880 gp</td>
<td>54,720 gp</td>
<td>61,560 gp</td>
</tr>
<tr>
<td>20th</td>
<td>3,600 gp</td>
<td>7,200 gp</td>
<td>14,400 gp</td>
<td>21,600 gp</td>
<td>28,800 gp</td>
<td>36,000 gp</td>
<td>43,200 gp</td>
<td>50,400 gp</td>
<td>57,600 gp</td>
<td>64,800 gp</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _standalone_new_scaling_items = {title: "Standalone New Scaling Items", parent_topics: ["optional_magic_changes","scaling_items"], siblings: ["adjusting_treasure","buying_and_selling_scaling_items","crafting_scaling_items","pricing_new_scaling_items","standalone_new_scaling_items","scaling_item_examples"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 163</Link></p>
<p>A GM can include specific scaling items as individual pieces of treasure even if she isn't using the scaling items system in her game. The base item can be used without any of the higher-level upgrades, or the GM can pick a higher level and create an individual item that has the base abilities plus one or more unlocked levels. She should use the standard price for that level of scaling item, as described on <Link to="/rule/adjusting_treasure">Table 4-13</Link></p>
<p>For example, a GM could give out a <Link to="/rule/scaling_magic_weapons">spear of the huntmaster</Link> as a CL 6th item worth 3,202 gp with just the base abilities, a CL 8th item worth 4,950 gp with the base abilities plus the 8th-level unlockable ability, a CL 10th item worth 9,300 gp with the base abilities plus the 8th- and 10th-level unlockable abilities, and so on.</p>
</>};
const _scaling_item_examples = {title: "Scaling Item Examples", parent_topics: ["optional_magic_changes","scaling_items"], siblings: ["adjusting_treasure","buying_and_selling_scaling_items","crafting_scaling_items","pricing_new_scaling_items","standalone_new_scaling_items","scaling_item_examples"], subtopics: ["scaling_magic_armor_and_shields","scaling_magic_weapons","scaling_rings","scaling_rods","scaling_staves","scaling_wondrous_items"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 162</Link></p>
<p>The following scaling items include several examples of wonders, prizes, and baubles.</p>
</>};
const _scaling_magic_armor_and_shields = {title: "Scaling Magic Armor and Shields", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples"], siblings: ["scaling_magic_armor_and_shields","scaling_magic_weapons","scaling_rings","scaling_rods","scaling_staves","scaling_wondrous_items"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 162</Link></p>
<p>The following section includes armor and shields with unusual powers and magical abilities. Magic armor can have abilities that need to be activated to function or powers that work passively and constantly.</p>
<h3 id="rule-scaling_magic_armor_and_shields-armageddon-plate">Armageddon Plate</h3>
<p><strong>Slot</strong> armor; CL 5th; <strong>Weight</strong> 50 lbs.<br/><strong>Aura</strong> faint transmutation; <strong>Price</strong> 2,650 gp; <strong>Scaling</strong> wonder</p>
<h4 id="rule-scaling_magic_armor_and_shields-description">Description</h4>
<p>A suit of armageddon plate acts as +1 <Link to="/eq-armor/full_plate">full plate</Link> for nearly any wearer - it automatically resizes when donned to fit wearers of size Small to Large. The armor is blackened, with joints and helm in a style reminiscent of the legendary tarrasque.</p>
<p><strong className="hl">6th Level:</strong> Armageddon plate is +1 <Link to="/magic-enh/light_fortification">light fortification</Link> full plate.</p>
<p><strong className="hl">8th Level:</strong> Armageddon plate retaliates against melee attackers when its fortification ability triggers. When an attacker strikes the wearer with a melee weapon and the armor negates a critical hit or sneak attack, the power of the armor leaves the attacker shaken for 1d4 rounds (Will DC 16 negates). This is a mind-affecting fear effect, and can stack with itself to make an attacker frightened or panicked.</p>
<p><strong className="hl">11th Level:</strong> Armageddon plate is +1 <Link to="/magic-enh/moderate_fortification">moderate fortification</Link> full plate.</p>
<p><strong className="hl">13th Level:</strong> Armageddon plate is +2 <em>moderate fortification</em> full plate. The save DC of its fear effect increases to 20, and it affects attackers who use both ranged and melee weapons.</p>
<p><strong className="hl">16th Level:</strong> Armageddon plate is +2 <em>moderate fortification</em> full plate of <Link to="/magic-enh/invulnerability">invulnerability</Link>. Armageddon plate grants DR 5/- instead of DR 5/magic.</p>
<p><strong className="hl">18th Level:</strong> Armageddon plate is +2 <em>moderate fortification</em> adamantine full plate of <Link to="/magic-enh/determination">determination</Link> and <em>invulnerability.</em> The damage reduction from adamantine stacks with the modified invulnerability effect for a total of DR 8/-.</p>
<p><strong className="hl">20th Level:</strong> Armageddon plate is +2 <Link to="/magic-enh/heavy_fortification">heavy fortification</Link> adamantine full plate of <em>determination</em> and <em>invulnerability.</em> Once per day, the wearer can lengthen the spines of the armor and release a volley of six spines as a full-attack action, all at the wearer's highest base attack bonus with a range increment of 120 feet. Each spine that hits deals 2d10 damage + the wearer's Strength bonus. If the spines attack multiple targets, all targets must be within 30 feet of each other. Once per day, the wearer can change her base land speed to 150 feet for 1 round as a free action. If she chooses to do so, she does not apply any other modifications that increase her movement speed for that round.</p>
<h4 id="rule-scaling_magic_armor_and_shields-construction-requirements">Construction Requirements</h4>
<p><Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/breath_of_life">breath of life</Link>, <Link to="/spell/fear">fear</Link>, either <Link to="/spell/limited_wish">limited wish</Link> or <Link to="/spell/miracle">miracle</Link>; <strong>Cost</strong> 133,650 gp</p>
<h3 id="rule-scaling_magic_armor_and_shields-armor-of-the-celestial-host">Armor of the Celestial Host</h3>
<p><strong>Slot</strong> armor; CL 9th; <strong>Weight</strong> 20 lbs.<br/><strong>Aura</strong> moderate transmutation; <strong>Price</strong> 6,900 gp; <strong>Scaling</strong> prize</p>
<h4 id="rule-scaling_magic_armor_and_shields-description">Description</h4>
<p>This bright, silver-and-gold +1 chainmail is so fine and light that it can be worn under normal clothing without betraying its presence. It has a maximum Dexterity bonus of +5, an armor check penalty of -2, and an arcane spell failure chance of 15%. It is considered light armor.</p>
<p><strong className="hl">11th Level:</strong> The wearer can use <Link to="/spell/fly">fly</Link> on command once per day.</p>
<p><strong className="hl">13th Level:</strong> The armor is +3 chainmail, and the maximum Dexterity bonus increases to +7.</p>
<p><strong className="hl">15th Level:</strong> The armor is +4 chainmail, the maximum Dexterity bonus increases to +8, and the armor check penalty decreases to -1.</p>
<p><strong className="hl">17th Level:</strong> The armor is +5 chainmail, and the wearer can activate the <em>fly</em> ability on command as a swift action.</p>
<p><strong className="hl">19th Level:</strong> The armor causes the wearer to grow feathery white wings, granting her a constant fly speed of 60 feet with good maneuverability.</p>
<h4 id="rule-scaling_magic_armor_and_shields-construction-requirements">Construction Requirements</h4>
<p><Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/fly">fly</Link>, creator must be good; <strong>Cost</strong> 51,375 gp</p>
<h3 id="rule-scaling_magic_armor_and_shields-dragonshield">Dragonshield</h3>
<p><strong>Slot</strong> shield; CL 14th; <strong>Weight</strong> 10 lbs.<br/><strong>Aura</strong> strong abjuration; <strong>Price</strong> 28,557 gp; <strong>Scaling</strong> prize</p>
<h4 id="rule-scaling_magic_armor_and_shields-description">Description</h4>
<p>This +1 heavy wooden shield is covered in stretched dragonhide and reinforced with petrified plates carved from a dragon's thickest scales. A dragonshield's enhancement bonus to AC increases by 1 against any creature with the dragon type, or by 2 against a dragon of the specific type used in the creation of the dragonshield. The enhancement bonus also applies on saving throws against dragons' breath weapons. If the wielder succeeds at a saving throw against a dragon's breath weapon, she takes no damage.</p>
<p><strong className="hl">12th Level:</strong> The shield gains the <Link to="/magic-enh/bolstering">bolstering</Link> shield special ability. The saving throw bonus granted by this ability is increased by 1 against creatures of the dragon type and by 2 against dragons of the same type as the shield's dragonhide.</p>
<p><strong className="hl">14th Level:</strong> The shield gains the <Link to="/magic-enh/energy_resistance">energy resistance</Link> special ability. The type of resistance matches the breath weapon energy type of the dragon whose dragonhide was used in the shield's construction.</p>
<p><strong className="hl">16th Level:</strong> The shield's enhancement bonus increases to +2, and the wearer gains a +6 morale bonus on saving throws against a dragon's frightful presence.</p>
<h4 id="rule-scaling_magic_armor_and_shields-construction-requirements">Construction Requirements</h4>
<p><Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/heroism">heroism</Link>, <Link to="/spell/remove_fear">remove fear</Link>, <Link to="/spell/resist_energy">resist energy</Link>; <strong>Cost</strong> 47,557 gp</p>
</>};
const _scaling_magic_weapons = {title: "Scaling Magic Weapons", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples"], siblings: ["scaling_magic_armor_and_shields","scaling_magic_weapons","scaling_rings","scaling_rods","scaling_staves","scaling_wondrous_items"], subtopics: ["scaling_magic_weapons_legacy_arrow","scaling_magic_weapons_multimetal_mace","scaling_magic_weapons_sacred_avenger","scaling_magic_weapons_spear_of_the_huntsman","scaling_magic_weapons_thirsting_blade"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 163</Link></p>
<p>The subtopics include weapons with unusual powers and magical abilities. Magic weapons can have abilities that need to be activated to function or powers that work passively and constantly.</p>
</>};
const _scaling_magic_weapons_legacy_arrow = {title: "Legacy Arrow", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_magic_weapons"], siblings: ["scaling_magic_weapons_legacy_arrow","scaling_magic_weapons_multimetal_mace","scaling_magic_weapons_sacred_avenger","scaling_magic_weapons_spear_of_the_huntsman","scaling_magic_weapons_thirsting_blade"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 163</Link></p>
<p><strong>Slot</strong> none; CL 4th; <strong>Weight</strong> 1/10 lb.<br/><strong>Aura</strong> faint transmutation; <strong>Price</strong> 305 gp; <strong>Scaling</strong> bauble</p>
<h3 id="rule-scaling_magic_weapons_legacy_arrow-description">Description</h3>
<p>This ornately carved arrow always survives being fired. By concentrating as a standard action, the last person to shoot the arrow can sense the direction in which it lies, up to a distance of 1 mile. This effect fades 24 hours after firing. Initially, a legacy arrow acts merely as a masterwork arrow, but it always retains its ability to survive and be recovered after use. Legacy arrows can be found as other sorts of ammunition, including bolts, shuriken, sling bullets, and even firearm bullets.</p>
<p><strong className="hl">6th Level:</strong> The arrow has the <Link to="/magic-enh/distance">distance</Link> special ability, normally not available to ammunition. When fired, it loses this weapon special ability and any gained at higher levels for 1 day.</p>
<p><strong className="hl">9th Level:</strong> The arrow has the distance and <Link to="/magic-enh/seeking">seeking</Link> special abilities.</p>
<p><strong className="hl">11th Level:</strong> When fired, the arrow regains its special abilities after 10 minutes instead of 1 day.</p>
<p><strong className="hl">14th Level:</strong> Once per day as a standard action, the arrow's wielder can designate it as a <Link to="/magic-enh/bane">bane</Link> arrow for a category of her choice. It retains its current bane properties until they are changed. The arrow still takes 10 minutes to regain the use of bane, as usual.</p>
<p><strong className="hl">16th Level:</strong> The arrow retains its bane, distance, and seeking special abilities after being fired.</p>
<p><strong className="hl">18th Level:</strong> Once per week, the wielder can take a standard action to fire the arrow, giving it the properties of a <Link to="/magic-weapon/greater_slaying_arrow">greater slaying arrow</Link> (keyed to the same category as its bane ability) in addition to its other special abilities. After being fired, the arrow loses all special abilities for 1 week.</p>
<p><strong className="hl">20th Level:</strong> The greater slaying ability can be used once per day (after which the arrow loses all special abilities for 1 day) rather than once per week. The arrow overcomes damage reduction as though adamantine.</p>
<h3 id="rule-scaling_magic_weapons_legacy_arrow-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/feat/heighten_spell">Heighten Spell</Link>, <Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link>, <Link to="/spell/finger_of_death">finger of death</Link>, <Link to="/spell/summon_monster_i">summon monster I</Link>, <Link to="/spell/true_seeing">true seeing</Link>; <strong>Cost</strong> 22,000 gp</p>
</>};
const _scaling_magic_weapons_multimetal_mace = {title: "Multimetal Mace", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_magic_weapons"], siblings: ["scaling_magic_weapons_legacy_arrow","scaling_magic_weapons_multimetal_mace","scaling_magic_weapons_sacred_avenger","scaling_magic_weapons_spear_of_the_huntsman","scaling_magic_weapons_thirsting_blade"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 163</Link></p>
<p><strong>Slot</strong> none; CL 6th; <strong>Weight</strong> 4 lbs.<br/><strong>Aura</strong> moderate transmutation; <strong>Price</strong> 2,650 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-scaling_magic_weapons_multimetal_mace-description">Description</h3>
<p>This +1 light mace has bands of several different metals around its hilt, each band one inch thick. Once per day, the mace's owner can transform the mace into a different metal as a standard action. The multimetal mace remains that type of metal until transformed again. To begin with, it can transform to silver or back to steel. It retains all magical abilities when it transforms, along with any ongoing spells and effects currently affecting it.</p>
<p><strong className="hl">8th Level:</strong> The multimetal mace can be transformed into cold iron.</p>
<p><strong className="hl">10th Level:</strong> The multimetal mace can be transformed into adamantine.</p>
<p><strong className="hl">12th Level:</strong> The multimetal mace is a +2 light mace.</p>
<h3 id="rule-scaling_magic_weapons_multimetal_mace-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/heart_of_the_metal">heart of the metal</Link>; <strong>Cost</strong> 11,405 gp</p>
</>};
const _scaling_magic_weapons_sacred_avenger = {title: "Sacred Avenger", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_magic_weapons"], siblings: ["scaling_magic_weapons_legacy_arrow","scaling_magic_weapons_multimetal_mace","scaling_magic_weapons_sacred_avenger","scaling_magic_weapons_spear_of_the_huntsman","scaling_magic_weapons_thirsting_blade"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 163</Link></p>
<p><strong>Slot</strong> none; CL 6th; <strong>Weight</strong> 4 lbs.<br/><strong>Aura</strong> moderate abjuration [good]; <strong>Price</strong> 4,800 gp; <strong>Scaling</strong> wonder</p>
<h3 id="rule-scaling_magic_weapons_sacred_avenger-description">Description</h3>
<p>This masterwork cold iron longsword becomes a +1 cold iron longsword in the hands of a paladin.</p>
<p><strong className="hl">8th Level:</strong> The sacred avenger is a +1 cold iron longsword that becomes a +2 cold iron longsword in the hands of a paladin.</p>
<p><strong className="hl">10th Level:</strong> The sacred avenger becomes a +3 cold iron longsword in the hands of a paladin.</p>
<p><strong className="hl">12th Level:</strong> The sacred avenger is a +2 cold iron longsword that becomes a +4 cold iron longsword in the hands of a paladin.</p>
<p><strong className="hl">14th Level:</strong> The sacred avenger becomes a +5 cold iron longsword in the hands of a paladin.</p>
<p><strong className="hl">17th Level:</strong> The sacred avenger allows a paladin to use the area dispel version of <Link to="/spell/greater_dispel_magic">greater dispel magic</Link> at will as a standard action and grants the paladin and adjacent allies spell resistance equal to 5 + her paladin level.</p>
<h3 id="rule-scaling_magic_weapons_sacred_avenger-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/holy_aura">holy aura</Link>, creator must be good; <strong>Cost</strong> 64,500 gp</p>
</>};
const _scaling_magic_weapons_spear_of_the_huntsman = {title: "Spear of the Huntsmaster", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_magic_weapons"], siblings: ["scaling_magic_weapons_legacy_arrow","scaling_magic_weapons_multimetal_mace","scaling_magic_weapons_sacred_avenger","scaling_magic_weapons_spear_of_the_huntsman","scaling_magic_weapons_thirsting_blade"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 163</Link></p>
<p><strong>Slot</strong> none; CL 6th; <strong>Weight</strong> 6 lbs.<br/><strong>Aura</strong> moderate divination; <strong>Price</strong> 2,650 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-scaling_magic_weapons_spear_of_the_huntsman-description">Description</h3>
<p>This +1 spear of jet-black wood has a head of polished amber. The spear's wielder can use <Link to="/spell/know_direction">know direction</Link> at will.</p>
<p><strong className="hl">8th Level:</strong> With the spear in hand, the wielder gains a +5 competence bonus on Survival checks.</p>
<p><strong className="hl">10th Level:</strong> A wielder with the <Link to="/class/ranger">quarry class feature</Link> can use the spear to use <Link to="/spell/locate_creature">locate creature</Link> once per day to find his quarry. If his quarry is within range, the amber spearhead glows brightly when pointed in the proper direction.</p>
<p><strong className="hl">12th Level:</strong> The spear gains the <Link to="/magic-enh/returning">returning</Link> weapon special ability.</p>
<h3 id="rule-scaling_magic_weapons_spear_of_the_huntsman-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/detect_animals_or_plants">detect animals or plants</Link>, <Link to="/spell/know_direction">know direction</Link>, <em>locate creature,</em> <Link to="/spell/telekinesis">telekinesis</Link>; <strong>Cost</strong> 10,380 gp</p>
</>};
const _scaling_magic_weapons_thirsting_blade = {title: "Thirsting Blade", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_magic_weapons"], siblings: ["scaling_magic_weapons_legacy_arrow","scaling_magic_weapons_multimetal_mace","scaling_magic_weapons_sacred_avenger","scaling_magic_weapons_spear_of_the_huntsman","scaling_magic_weapons_thirsting_blade"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 163</Link></p>
<p><strong>Slot</strong> none; CL 6th; <strong>Weight</strong> 2 lbs.<br/><strong>Aura</strong> moderate necromancy; <strong>Price</strong> 4,800 gp; <strong>Scaling</strong> wonder</p>
<h3 id="rule-scaling_magic_weapons_thirsting_blade-description">Description</h3>
<p>This long, curved +1 dagger gives off a contented hum when soaked with blood. It can be thrown normally despite its length and has a critical threat range of 18-20.</p>
<p><strong className="hl">8th Level:</strong> The thirsting blade is a +1 <Link to="/magic-enh/keen">keen</Link> dagger.</p>
<p><strong className="hl">10th Level:</strong> The thirsting blade deals 1 point of bleed damage on a successful critical hit.</p>
<p><strong className="hl">14th Level:</strong> The thirsting blade is a +1 keen <Link to="/magic-enh/wounding">wounding</Link> dagger. On a successful critical hit, the dagger deals 2 points of bleed damage instead of 1.</p>
<p><strong className="hl">15th Level:</strong> The thirsting blade is a +2 keen wounding dagger.</p>
<p><strong className="hl">16th Level:</strong> The thirsting blade is a +3 keen wounding dagger.</p>
<p><strong className="hl">17th Level:</strong> The thirsting blade is a +4 keen wounding dagger.</p>
<p><strong className="hl">19th Level:</strong> On a successful critical hit against an opponent with blood, the thirsting blade's wielder recovers 2 hit points. This ability functions only for the first wielder each day to score a critical hit with the thirsting blade. The wielder can recover a number of hit points in this way each day up to that wielder's normal maximum hit points. On a successful critical hit against an opponent with blood, that opponent is flat-footed against the wielder's attacks with the thirsting blade as long as it continues to take the bleed damage from the critical hit.</p>
<p><strong className="hl">20th Level:</strong> The thirsting blade is a +5 keen <Link to="/magic-enh/vicious">vicious</Link> wounding dagger.</p>
<h3 id="rule-scaling_magic_weapons_thirsting_blade-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/bleed">bleed</Link>, <Link to="/spell/enervation">enervation</Link>, <Link to="/spell/keen_edge">keen edge</Link>, <Link to="/spell/vampiric_touch">vampiric touch</Link>; <strong>Cost</strong> 132,000 gp</p>
</>};
const _scaling_rings = {title: "Scaling Rings", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples"], siblings: ["scaling_magic_armor_and_shields","scaling_magic_weapons","scaling_rings","scaling_rods","scaling_staves","scaling_wondrous_items"], subtopics: ["scaling_rings_fivefold","scaling_rings_flame","scaling_rings_forest","scaling_rings_frost","scaling_rings_sea","scaling_rings_earthlord","scaling_rings_trickster"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 165</Link></p>
<p>Rings bestow magical powers upon their wearers. Anyone can use a ring, but a character can gain the benefits of only two magic rings at a time.</p>
</>};
const _scaling_rings_fivefold = {title: "Fivefold Rings of Fire", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_rings"], siblings: ["scaling_rings_fivefold","scaling_rings_flame","scaling_rings_forest","scaling_rings_frost","scaling_rings_sea","scaling_rings_earthlord","scaling_rings_trickster"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 165</Link></p>
<p><strong>Slot</strong> ring; CL 10th; <strong>Weight</strong> -<br/><strong>Aura</strong> moderate evocation; <strong>Price</strong> 10,800 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-scaling_rings_fivefold-description">Description</h3>
<p>These five golden rings are each set with a fire opal and are linked together by thin golden chains (making them take up only a single ring item slot). The wearer can release up to five <Link to="/spell/scorching_ray">scorching rays</Link> each day, one from each of the five rings. She can release one ray as a standard action or two rays (from two different rings) as a full-round action.</p>
<p><strong className="hl">12th Level:</strong> Each day, the wearer can ignore up to 40 points of fire damage as if using <Link to="/spell/protection_from_energy">protection from energy</Link>. This fire damage is absorbed into the fivefold rings of fire; when this happens, if the wearer has already expended one or more of her <em>scorching rays</em> for the day, she can recharge one of the rings for every 20 points of fire damage she absorbs.</p>
<p><strong className="hl">14th Level:</strong> In place of a <Link to="/spell/scorching_ray">scorching ray</Link>, the wearer can choose to create a <Link to="/spell/flaming_sphere">flaming sphere</Link>. The effect takes the form of hollow rings of flame instead of a sphere, but otherwise functions as the spell.</p>
<p><strong className="hl">16th Level:</strong> The amount of fire damage the wearer can absorb each day increases to 100 points.</p>
<h3 id="rule-scaling_rings_fivefold-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <em>flaming sphere, protection from energy, scorching ray;</em> <strong>Cost</strong> 23,625 gp</p>
</>};
const _scaling_rings_flame = {title: "Ring of the Dragon (Flame)", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_rings"], siblings: ["scaling_rings_fivefold","scaling_rings_flame","scaling_rings_forest","scaling_rings_frost","scaling_rings_sea","scaling_rings_earthlord","scaling_rings_trickster"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 165</Link></p>
<p><strong>Slot</strong> ring; CL 9th; <strong>Weight</strong> -<br/><strong>Aura</strong> moderate abjuration; <strong>Price</strong> 6,000 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-scaling_rings_flame-description">Description</h3>
<p>Carved from a red stone in the shape of a dragon with glowing wings, this ring grants its wearer fire resistance 5. The ring has a sulfuric smell that lingers when it protects its wearer.</p>
<p><strong className="hl">11th Level:</strong> The ring grants fire resistance 10.</p>
<p><strong className="hl">14th Level:</strong> The ring grants fire resistance 20.</p>
<p><strong className="hl">17th Level:</strong> The ring grants fire resistance 30. The wearer increases her land speed by 5 feet. Once per day, the ring's wearer can make a primary bite attack as a swift action. If she does not already possess a bite attack, her teeth elongate into draconic fangs as part of the swift action, granting a bite attack that deals 1d6 points of damage for a Medium wearer (1d4 for a Small wearer).</p>
<p><strong className="hl">20th Level:</strong> The ring's wearer can transform into a flame drake once per day. This functions as transforming into a red dragon via <Link to="/spell/form_of_the_dragon_ii">form of the dragon II</Link>, except that the wearer's fire breath weapon damages a 20-foot-radius spread within 180 feet of her.</p>
<h3 id="rule-scaling_rings_flame-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/forge_ring">Forge Ring</Link>, <em>form of the dragon II,</em> <Link to="/spell/haste">haste</Link>, <Link to="/spell/resist_energy">resist energy</Link>; <strong>Cost</strong> 66,000 gp</p>
</>};
const _scaling_rings_forest = {title: "Ring of the Drake (Forest)", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_rings"], siblings: ["scaling_rings_fivefold","scaling_rings_flame","scaling_rings_forest","scaling_rings_frost","scaling_rings_sea","scaling_rings_earthlord","scaling_rings_trickster"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 165</Link></p>
<p><strong>Slot</strong> ring; CL 9th; <strong>Weight</strong> -<br/><strong>Aura</strong> moderate abjuration; <strong>Price</strong> 6,000 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-scaling_rings_forest-description">Description</h3>
<p>Carved from a gray-green stone in the shape of a drake's head, this rings grants its wearer acid resistance 5. The stone ring has an acidic smell that lingers when it protects its wearer.</p>
<p><strong className="hl">11th Level:</strong> The ring grants acid resistance 10.</p>
<p><strong className="hl">14th Level:</strong> The ring grants acid resistance 20.</p>
<p><strong className="hl">17th Level:</strong> The ring grants acid resistance 30. The wearer gains the ability to breathe underwater. Once per day, the ring's wearer can make a primary bite attack as a swift action. If she does not possess a bite attack, her teeth elongate into draconic fangs as part of the swift action, granting a bite attack that deals 1d6 damage for a Medium wearer (1d4 for a Small wearer).</p>
<p><strong className="hl">20th Level:</strong> The ring's wearer can transform into a forest drake once per day. This functions as transforming into a green dragon via <Link to="/spell/form_of_the_dragon_ii">form of the dragon II</Link>, except that the wearer's acid breath weapon damages a 10-foot-radius spread within 60 feet of her and remains in place as an obscuring mist for 1d4 rounds.</p>
<h3 id="rule-scaling_rings_forest-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/forge_ring">Forge Ring</Link>, <em>form of the dragon II,</em> <Link to="/spell/haste">haste</Link>, <Link to="/spell/resist_energy">resist energy</Link>; <strong>Cost</strong> 66,000 gp</p>
</>};
const _scaling_rings_frost = {title: "Ring of the Drake (Frost)", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_rings"], siblings: ["scaling_rings_fivefold","scaling_rings_flame","scaling_rings_forest","scaling_rings_frost","scaling_rings_sea","scaling_rings_earthlord","scaling_rings_trickster"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 165</Link></p>
<p><strong>Slot</strong> ring; CL 9th; <strong>Weight</strong> -<br/><strong>Aura</strong> moderate abjuration; <strong>Price</strong> 6,000 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-scaling_rings_frost-description">Description</h3>
<p>Carved from a white stone in the shape of a coiled dragon, this ring grants its wearer cold resistance 5. The ring has a crisp smell that lingers when it protects its wearer.</p>
<p><strong className="hl">11th Level:</strong> The ring grants cold resistance 10.</p>
<p><strong className="hl">14th Level:</strong> The ring grants cold resistance 20.</p>
<p><strong className="hl">17th Level:</strong> The ring grants cold resistance 30. The wearer can see perfectly in snowy conditions, and does not take any penalties on Perception checks while in snow. Once per day, the ring's wearer can make a primary bite attack as a swift action. If she does not possess a bite attack, her teeth elongate into draconic fangs as part of the swift action, granting a bite attack that deals 1d6 points of damage for a Medium wearer (1d4 for a Small wearer).</p>
<p><strong className="hl">20th Level:</strong> The ring's wearer can transform into a frost drake once per day. This functions as transforming into a white dragon via <Link to="/spell/form_of_the_dragon_ii">form of the dragon II</Link>, except that the wearer's cold breath weapon affects a 10-foot-radius spread within 60 feet of her. All surfaces within the spread are coated with slippery ice that turns the area into difficult terrain for 2d4 rounds.</p>
<h3 id="rule-scaling_rings_frost-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/forge_ring">Forge Ring</Link>, <em>form of the dragon II,</em> <Link to="/spell/haste">haste</Link>, <Link to="/spell/resist_energy">resist energy</Link>; <strong>Cost</strong> 66,000 gp</p>
</>};
const _scaling_rings_sea = {title: "Ring of the Drake (Sea)", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_rings"], siblings: ["scaling_rings_fivefold","scaling_rings_flame","scaling_rings_forest","scaling_rings_frost","scaling_rings_sea","scaling_rings_earthlord","scaling_rings_trickster"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 165</Link></p>
<p><strong>Slot</strong> ring; CL 9th; <strong>Weight</strong> -<br/><strong>Aura</strong> moderate abjuration; <strong>Price</strong> 6,000 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-scaling_rings_sea-description">Description</h3>
<p>Carved from a blue-green stone in the shape of a swimming dragon, this ring grants its wearer electricity resistance 5. The ring exudes a smell of the sea that lingers when it protects its wearer.</p>
<p><strong className="hl">11th Level:</strong> The ring grants electricity resistance 10.</p>
<p><strong className="hl">14th Level:</strong> The ring grants electricity resistance 20.</p>
<p><strong className="hl">17th Level:</strong> The ring grants electricity resistance 30. The wearer gains the ability to breathe underwater. Once per day, the ring's wearer can make a primary bite attack as a swift action. If she does not already possess a bite attack, her teeth elongate into draconic fangs as part of the swift action, granting a bite attack that deals 1d6 points of damage for a Medium wearer (1d4 for a Small wearer).</p>
<p><strong className="hl">20th Level:</strong> The ring's wearer can transform into a sea drake once per day. This functions as transforming into a blue dragon via <Link to="/spell/form_of_the_dragon_ii">form of the dragon II</Link>, except that the wearer's electricity breath weapon targets one creature within 100 feet of her, then arcs to up to seven secondary targets within 20 feet of the primary target. The secondary bolts each strike one target and deal as much damage as the primary bolt.</p>
<h3 id="rule-scaling_rings_sea-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/forge_ring">Forge Ring</Link>, <em>form of the dragon II,</em> <Link to="/spell/haste">haste</Link>, <Link to="/spell/resist_energy">resist energy</Link>; <strong>Cost</strong> 66,000 gp</p>
</>};
const _scaling_rings_earthlord = {title: "Ring of the Earthlord", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_rings"], siblings: ["scaling_rings_fivefold","scaling_rings_flame","scaling_rings_forest","scaling_rings_frost","scaling_rings_sea","scaling_rings_earthlord","scaling_rings_trickster"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 165</Link></p>
<p><strong>Slot</strong> ring; CL 6th; <strong>Weight</strong> -<br/><strong>Aura</strong> moderate conjuration; <strong>Price</strong> 4,800 gp; <strong>Scaling</strong> wonder</p>
<h3 id="rule-scaling_rings_earthlord-description">Description</h3>
<p>This stone ring is constantly covered in a thin layer of dirt. It grants its wearer the ability to <Link to="/spell/meld_into_stone">meld into stone</Link> once per day.</p>
<p><strong className="hl">8th Level:</strong> The wearer can also use <Link to="/spell/soften_earth_and_stone">soften earth and stone</Link> once per day. She can speak Terran, and she gains a +2 resistance bonus on saving throws against attacks by creatures from the Plane of Earth and a +4 morale bonus on attack rolls against such creatures. Additionally, these creatures take a -1 penalty on attack rolls against her. The wearer takes a -2 penalty on all saving throws against air or electricity effects.</p>
<p><strong className="hl">11th Level:</strong> Earth elementals can't attack the wearer or even approach within 5 feet of her. If she wishes, the wearer can attempt to use <Link to="/spell/charm_monster">charm monster</Link> on an earth elemental (DC 17 Will save negates). If she fails the attempt, she loses the protection against that elemental and can't attempt to charm that elemental again.</p>
<p><strong className="hl">14th Level:</strong> The wearer can use <Link to="/spell/stone_shape">stone shape</Link> twice per day and use <Link to="/spell/stoneskin">stoneskin</Link> on herself once per week.</p>
<p><strong className="hl">16th Level:</strong> The wearer can use <Link to="/spell/wall_of_stone">wall of stone</Link> once per day and can now use <em>meld into stone</em> three times per day.</p>
<p><strong className="hl">17th Level:</strong> The wearer can use <Link to="/spell/passwall">passwall</Link> once per week and can now use <Link to="/spell/meld_into_stone">meld into stone</Link> at will.</p>
<p><strong className="hl">18th Level:</strong> The wearer can now use <em>passwall</em> twice per week and <Link to="/spell/soften_earth_and_stone">soften earth and stone</Link> at will.</p>
<h3 id="rule-scaling_rings_earthlord-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/forge_ring">Forge Ring</Link>, <em>meld into stone, passwall, soften earth and stone,</em> <Link to="/spell/stone_shape">stone shape</Link>, <Link to="/spell/stoneskin">stoneskin</Link>, <Link to="/spell/summon_monster_vi">summon monster VI</Link>, <em>wall of stone;</em> <strong>Cost</strong> 79,500 gp</p>
</>};
const _scaling_rings_trickster = {title: "Ring of the Trickster", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_rings"], siblings: ["scaling_rings_fivefold","scaling_rings_flame","scaling_rings_forest","scaling_rings_frost","scaling_rings_sea","scaling_rings_earthlord","scaling_rings_trickster"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 165</Link></p>
<p><strong>Slot</strong> ring; CL 4th; <strong>Weight</strong> -<br/><strong>Aura</strong> faint illusion; <strong>Price</strong> 1,080 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-scaling_rings_trickster-description">Description</h3>
<p>This five-piece puzzle ring must be properly assembled before it can be placed on a finger. Once per day as a move action, the wearer can create a single <Link to="/spell/mirror_image">mirror image</Link> as if using the <Link to="/domain/trickery">Trickery domain's copycat power</Link>. If the wearer is a cleric with the Trickery domain and the copycat power, she instead gains two additional uses of that ability.</p>
<p><strong className="hl">6th Level:</strong> The wearer can use <Link to="/spell/prestidigitation">prestidigitation</Link> at will.</p>
<p><strong className="hl">8th Level:</strong> By spending 1 full round reconfiguring the ring's puzzle, the wearer can find a way to solve the puzzle with four of the pieces while twisting the final piece into a tiny shape that grows into another simple object. Treat the result as if the wearer had reconfigured a <Link to="/magic-wondrous/travelers_any_tool">traveler's any-tool</Link>, except that the resulting object additionally grants a +2 competence bonus on a skill check of the wearer's choice that could conceivably involve the object. As long as she does not lose the object, the wearer can return the fifth piece to the ring by spending another full round. The wearer cannot use any of the ring's creation powers without all five pieces.</p>
<p><strong className="hl">10th Level:</strong> By spending 1 minute reconfiguring the ring's puzzle, the wearer can find a way to solve the puzzle with four of the pieces while twisting the final piece into a tiny shape that grows into a new object as <Link to="/spell/minor_creation">minor creation</Link>, except that the wearer uses Disable Device rather than Craft to create a complex object. The fifth piece of the ring mysteriously reappears 24 hours after the new object vanishes. The wearer cannot use any of the ring's creation powers without all five pieces.</p>
<p><strong className="hl">12th Level:</strong> By spending 10 minutes reconfiguring the ring's puzzle, the wearer can find a way to solve the puzzle with four of the pieces while twisting the final piece into a tiny shape that grows into a new object as <Link to="/spell/major_creation">major creation</Link>, except that the wearer uses Disable Device rather than Craft to create a complex object. The fifth piece mysteriously reappears 24 hours after the new object vanishes. The wearer cannot use any of the ring's creation powers without all five pieces.</p>
<p><strong className="hl">15th Level:</strong> Once per day as a standard action, the wearer can create a duplicate while becoming invisible, as <Link to="/spell/mislead">mislead</Link>.</p>
<h3 id="rule-scaling_rings_trickster-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/forge_ring">Forge Ring</Link>, <em>major creation,</em> <Link to="/spell/mirror_image">mirror image</Link>, <Link to="/spell/prestidigitation">prestidigitation</Link>; <strong>Cost</strong> 18,000 gp</p>
</>};
const _scaling_rods = {title: "Scaling Rods", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples"], siblings: ["scaling_magic_armor_and_shields","scaling_magic_weapons","scaling_rings","scaling_rods","scaling_staves","scaling_wondrous_items"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 167</Link></p>
<p>Rods are scepter-like devices that have unique magical powers and usually do not have any charges. Anyone can use a rod.</p>
<h3 id="rule-scaling_rods-mimetic-rod">Mimetic Rod</h3>
<p><strong>Slot</strong> none; CL 7th; <strong>Weight</strong> 2 lbs.<br/><strong>Aura</strong> moderate divination; <strong>Price</strong> 1,350 gp; <strong>Scaling</strong> bauble</p>
<h4 id="rule-scaling_rods-description">Description</h4>
<p>The smooth surface of this rod is polished to a mirror sheen. Two cabochons - one amber and one viridian - set into the ends of the rod control its functions. A creature can press the viridian stone and roll the rod across a piece of writing on a flat surface to copy that writing into the rod, leaving the original text intact. By pressing the amber cabochon and rolling the rod across a different flat surface, a creature can replicate the original text. The text remains stored in the rod until the viridian stone is pressed again. The rod can copy a text the size of its surface area: 10 inches by 12 inches. Spellbook pages can be copied into a mimetic rod, but this is only useful for saving the text to transcribe later; the caster must still pay the full price for copying the spell into a spellbook. The rod can't copy traps that use magical writing, such as <Link to="/spell/explosive_runes">explosive runes</Link>, but attempting to do so doesn't trigger the trap unless the movement of the magic item over the text would normally trigger it.</p>
<p><strong className="hl">9th Level:</strong> The rod can be used to copy faces. It must first be waved in front of either a person's actual face or a high-quality reproduction while the wielder presses the viridian cabochon. The stored face can then be replicated over someone else's face as though they'd been affected by <Link to="/spell/disguise_self">disguise self</Link> (though this can change only the face - not height, weight, or other features). This effect lasts for 10 minutes per character level possessed by the person activating the rod (to a maximum of 140 minutes). The rod can store only one face at a time, and can't store a face while it's storing text.</p>
<p><strong className="hl">11th Level:</strong> If the rod's user speaks the name of a language, the rod automatically translates any text stored in it to that language. When that text is reproduced, it comes out in the language it has been translated to. A piece of text can be translated any number of times while stored in the rod.</p>
<p><strong className="hl">14th Level:</strong> The rod can copy and reproduce magical traps that rely on text, including symbols. The rod's user must succeed at a caster level check (caster level 14th) with a DC equal to 11 + the targeted spell's caster level to do so. If she succeeds, the trap is stored harmlessly in the rod and can be replicated just as text would. Unlike with normal text, the spell is erased from inside the rod when it's replicated. The size of the rod's surface area doesn't limit the size of magical trap text it can copy. When the rod reproduces the magical writing, any decisions made by the original caster are unchanged. The rod's wielder can also press the viridian cabochon to harmlessly extinguish the spell instead of reproducing it.</p>
<h4 id="rule-scaling_rods-construction-requirements">Construction Requirements</h4>
<p><Link to="/feat/craft_rod">Craft Rod</Link>, <em>disguise self,</em> <Link to="/spell/memorize_page">memorize page</Link>, <Link to="/spell/tongues">tongues</Link>; <strong>Cost</strong> 4,625 gp</p>
<h3 id="rule-scaling_rods-rod-of-the-deadlord">Rod of the Deadlord</h3>
<p><strong>Slot</strong> none; CL 9th; <strong>Weight</strong> 4 lbs.<br/><strong>Aura</strong> moderate necromancy; <strong>Price</strong> 16,005 gp; <strong>Scaling</strong> wonder</p>
<h4 id="rule-scaling_rods-description">Description</h4>
<p>This baton and the small skull that tops it are both made of blackened adamantine. The rod can be wielded as a +1 <Link to="/magic-enh/conductive">conductive</Link> light mace. At the wielder's command, it transforms into a morningstar, heavy mace, flail, or heavy flail. It returns to its normal shape if left unattended for 1 round. Commanders of undead legions often wield such rods as symbols of authority. Changing the weapon's type can be used to signal a change in strategy for the undead horde, with the mace indicating a steady march, the morningstar calling for an aggressive assault, a flail indicating a retreat, and so on.</p>
<p><strong className="hl">11th Level:</strong> The rod's enhancement bonus increases to +2.</p>
<p><strong className="hl">13th Level:</strong> Any creature hit by the rod of the deadlord gains a temporary negative level. The target avoids this negative level if it succeeds at a Fortitude save with a DC equal to 6 + the wielder's Hit Dice (maximum 21). This negative level lasts for 12 hours, and can't become a permanent negative level.</p>
<p><strong className="hl">15th Level:</strong> If the wielder confirms a critical hit, instead of gaining a temporary negative level the target gains a permanent negative level with no saving throw. Each day thereafter, the target must succeed at a Fortitude save (using the same DC as the 13th-level unlockable ability) or acquire another negative level. This is a curse effect that continues until removed (DC 23) or until the target dies. A target slain by this curse cannot be revived from death until the curse is removed.</p>
<p><strong className="hl">17th Level:</strong> The rod's enhancement bonus increases to +3. Once per day, the rod's owner can tap the rod on the ground as a standard action to duplicate the effects of <Link to="/spell/animate_dead">animate dead</Link>. The total HD of undead the owner can control in this way is equal to her level. If she controls other undead from castings of <em>animate dead,</em> she uses only the highest maximum she can control; the values do not stack. She ceases to control undead created by the rod if the rod leaves her possession.</p>
<h4 id="rule-scaling_rods-construction-requirements">Construction Requirements</h4>
<p><Link to="/feat/craft_rod">Craft Rod</Link>, <Link to="/spell/bestow_curse">bestow curse</Link>, <Link to="/spell/enervation">enervation</Link>, <Link to="/spell/major_creation">major creation</Link>, <Link to="/spell/spectral_hand">spectral hand</Link>; <strong>Cost</strong> 67,505 gp</p>
</>};
const _scaling_staves = {title: "Scaling Staves", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples"], siblings: ["scaling_magic_armor_and_shields","scaling_magic_weapons","scaling_rings","scaling_rods","scaling_staves","scaling_wondrous_items"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p>A staff is a long shaft that stores several spells. Staves usually hold spells grouped by a theme and sometimes possess other abilities that they grant to the wielder. A staff has 10 charges when created but can be recharged by a spellcaster with the appropriate spells.</p>
<h3 id="rule-scaling_staves-staff-of-the-pyre-lord">Staff of the Pyre Lord</h3>
<p><strong>Slot</strong> none; CL 8th; <strong>Weight</strong> 1 lb.<br/><strong>Aura</strong> moderate evocation; <strong>Price</strong> 8,800 gp; <strong>Scaling</strong> wonder</p>
<h4 id="rule-scaling_staves-description">Description</h4>
<p>This staff is carved entirely of polished obsidian inset with rubies. Flickering flames seem to dance across its surface. As the wielder goes up in level, the illusory flames grow larger and change in color, starting out a faint yellow and eventually becoming a deep blue. This staff allows the use of the following spells.</p>
<ul>
<li><Link to="/spell/spark">Spark</Link> (1 charge)</li>
<li><Link to="/spell/scorching_ray">Scorching ray</Link> (2 charges)</li>
</ul>
<p><strong className="hl">10th Level:</strong> <em>Scorching ray</em> now costs only 1 charge, and the staff allows the use of <Link to="/spell/fireball">fireball</Link> for 2 charges.</p>
<p><strong className="hl">12th Level:</strong> The staff's <em>fireball</em> spells become <Link to="/feat/empowered">empowered</Link> <em>fireball.</em> The staff counts as a +1 <Link to="/magic-enh/flaming">flaming</Link> quarterstaff when used as a weapon.</p>
<p><strong className="hl">14th Level:</strong> The staff allows the use of <Link to="/spell/summon_monster_vi">summon monster VI</Link> for 2 charges to summon fire elementals only.</p>
<p><strong className="hl">16th Level:</strong> The staff replaces <em>summon monster VI</em> with <Link to="/spell/summon_monster_viii">summon monster VIII</Link> for 3 charges to summon fire elementals only. It also allows the use of <Link to="/spell/fire_storm">fire storm</Link> for 2 charges.</p>
<p><strong className="hl">18th Level:</strong> The staff allows the use of <Link to="/spell/meteor_swarm">meteor swarm</Link> for 3 charges. The cost for <em>summon monster VIII</em> decreases to 2 charges, and empowered <em>fireball</em> now costs 1 charge.</p>
<p><strong className="hl">20th Level:</strong> The cost of <em>meteor swarm</em> and <em>fire storm</em> each decrease to 1 charge.</p>
<h4 id="rule-scaling_staves-construction-requirements">Construction Requirements</h4>
<p><Link to="/feat/craft_staff">Craft Staff</Link>, <Link to="/feat/empower_spell">Empower Spell</Link>, <em>fire storm,</em> <Link to="/spell/fireball">fireball</Link>, <em>meteor swarm,</em> <Link to="/spell/scorching_ray">scorching ray</Link>, <Link to="/spell/spark">spark</Link>, <Link to="/spell/summon_monster_vi">summon monster VI</Link>, <em>summon monster VIII;</em> <strong>Cost</strong> 132,000 gp</p>
<h3 id="rule-scaling_staves-staff-of-ways">Staff of Ways</h3>
<p><strong>Slot</strong> none; CL 10th; <strong>Weight</strong> 1 lb.<br/><strong>Aura</strong> moderate transmutation; <strong>Price</strong> 8,000 gp; <strong>Scaling</strong> prize</p>
<h4 id="rule-scaling_staves-description">Description</h4>
<p>This wooden staff is carved with intricate patterns of waves, wind, trails, and vines. As the wielder goes up in level, the patterns begin to move, slowly at first, but gradually increasing in speed and magnitude. At the highest levels, the staff appears to be filled with a twisting and complex nature scene, with forking paths and raging tsunamis. This staff allows the use of the following spells.</p>
<ul>
<li><Link to="/spell/longstrider">Longstrider</Link> (1 charge)</li>
<li><Link to="/spell/expeditious_retreat">Expeditious retreat</Link> (2 charges)</li>
<li><Link to="/spell/monkey_fish">Monkey fish</Link> (2 charges)</li>
</ul>
<p><strong className="hl">12th Level:</strong> The staff allows the use of <Link to="/spell/spider_climb">spider climb</Link> for 2 charges. The cost of <em>expeditious retreat</em> and <em>monkey fish</em> each reduce to 1 charge.</p>
<p><strong className="hl">14th Level:</strong> The staff allows the use of <Link to="/spell/fly">fly</Link> for 2 charges. The cost of <em>spider climb</em> decreases to 1 charge.</p>
<p><strong className="hl">16th Level:</strong> The staff grants its owner a permanent +10-foot enhancement bonus to her base movement speed, a swim speed of 10 feet, and a climb speed of 10 feet. The staff can no longer be used to cast <em>longstrider</em> or <em>monkey fish.</em> The staff allows the use of <Link to="/spell/freedom_of_movement">freedom of movement</Link> for 2 charges and <Link to="/spell/water_breathing">water breathing</Link> for 3 charges. The cost of <em>fly</em> decreases to 1 charge.</p>
<p><strong className="hl">18th Level:</strong> The staff allows the use of <Link to="/spell/find_the_path">find the path</Link> for 3 charges. The cost for <em>water breathing</em> decreases to 1 charge.</p>
<p><strong className="hl">20th Level:</strong> The staff grants its owner a fly speed of 30 feet (poor maneuverability). <em>Find the path</em> now costs 2 charges, and <em>freedom of movement</em> costs only 1 charge. If the staff's wielder breaks the staff in two as a full-round action, she can transport herself and up to 19 allies to a safe location she knows extremely well. This ability ignores local conditions as if it were the transport travelers effect of a <Link to="/spell/wish">wish</Link>.</p>
<h4 id="rule-scaling_staves-construction-requirements">Construction Requirements</h4>
<p><Link to="/feat/craft_staff">Craft Staff</Link>, <Link to="/spell/expeditious_retreat">expeditious retreat</Link>, <em>find the path,</em> <Link to="/spell/fly">fly</Link>, <em>freedom of movement,</em> <Link to="/spell/longstrider">longstrider</Link>, <Link to="/spell/monkey_fish">monkey fish</Link>, <Link to="/spell/spider_climb">spider climb</Link>, <em>water breathing;</em> <strong>Cost</strong> 66,500 gp</p>
</>};
const _scaling_wondrous_items = {title: "Scaling Wondrous Items", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples"], siblings: ["scaling_magic_armor_and_shields","scaling_magic_weapons","scaling_rings","scaling_rods","scaling_staves","scaling_wondrous_items"], subtopics: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p>Wondrous items are diverse. Some must be worn in a specific magic item slot in order to work, while others must merely be possessed and used. "Wondrous item" is a catch-all category for anything that doesn't fall into other groups, such as weapons, staves, and so on. Anyone can use a wondrous item, unless the item specifies otherwise. There are two main categories of wondrous items: slotted and slotless. Slotted items take up a magic item slot, and must be worn by those who want to benefit from them.</p>
</>};
const _swi_arachnid = {title: "Arachnid Cloak", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> shoulders; CL 4th; <strong>Weight</strong> 1 lb.<br/><strong>Aura</strong> faint transmutation; <strong>Price</strong> 900 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-swi_arachnid-description">Description</h3>
<p>This red-and-violet silk garment, delicately embroidered with a barely perceptible web-like pattern, grants its wearer a +2 luck bonus on saving throws against spider poison.</p>
<p><strong className="hl">7th Level:</strong> The cloak allows its wearer to move at half speed among spider webs without any chance of being trapped by them.</p>
<p><strong className="hl">10th Level:</strong> The wearer is treated as if constantly under the effects of a <Link to="/spell/spider_climb">spider climb</Link> spell.</p>
<p><strong className="hl">12th Level:</strong> The wearer cannot be entrapped by <Link to="/spell/web">web</Link> spells or webs of any sort, and can climb along webs like a spider, moving at her full climb speed.</p>
<p><strong className="hl">14th Level:</strong> Normal spiders, including spider swarms and unusually large spiders, will not attack the cloak's wearer unless she attacks them first or they are instructed to do so by some other creature, such as through a use of vermin empathy or a spell. The cloak's wearer can summon forth a swarm of spiders once per day as the spell <Link to="/spell/summon_swarm">summon swarm</Link>.</p>
<p><strong className="hl">16th Level:</strong> The cloak's wearer can attempt to influence spiders, as the <Link to="/monster/mite">mite's vermin empathy ability</Link>. The wearer does not gain a racial bonus to vermin empathy. She can change into the form of a Small or Medium spider and back at will as a standard action, as <Link to="/spell/vermin_shape_i">vermin shape I</Link>.</p>
<p><strong className="hl">17th Level:</strong> The cloak's wearer can summon a swarm of spiders at will, instead of once per day. When she changes into the form of a spider, she can change into the form of a Tiny, Small, Medium, or Large spider as <Link to="/spell/vermin_shape_ii">vermin shape II</Link>.</p>
<h3 id="rule-swi_arachnid-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/spider_climb">spider climb</Link>, <em>summon swarm, vermin shape II,</em> <Link to="/spell/web">web</Link>; <strong>Cost</strong> 30,750 gp</p>
</>};
const _swi_bag = {title: "Bag of Endless Holding", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> none; CL 10th; <strong>Weight</strong> 15 lbs.<br/><strong>Aura</strong> moderate transmutation; <strong>Price</strong> 3,100 gp; <strong>Scaling</strong> bauble</p>
<h3 id="rule-swi_bag-description">Description</h3>
<p>This appears to be a common cloth sack about 2 feet by 4 feet in size. However, it opens into a non-dimensional space far larger than its outside dimensions. It acts as a <Link to="/magic-wondrous/bag_of_holding_type_i">bag of holding (type I)</Link>, but retrieving an item from the bag does not provoke an attack of opportunity.</p>
<p><strong className="hl">12th Level:</strong> The bag's capacity and weight increase as a bag of holding (type II).</p>
<p><strong className="hl">14th Level:</strong> The bag's capacity and weight increase as a bag of holding (type III).</p>
<p><strong className="hl">15th Level:</strong> The bag's capacity and weight increase as a bag of holding (type IV).</p>
<h3 id="rule-swi_bag-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/secret_chest">secret chest</Link>; <strong>Cost</strong> 6,000 gp</p>
</>};
const _swi_bat = {title: "Bat Cloak", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<h3 id="rule-swi_bat-bat-cloak">Bat Cloak</h3>
<p><strong>Slot</strong> shoulders; CL 4th; <strong>Weight</strong> 1 lb.<br/><strong>Aura</strong> faint transmutation; <strong>Price</strong> 900 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-swi_bat-description">Description</h3>
<p>Fashioned of dark brown or black cloth, this cloak resembles gigantic bat wings. It allows its wearer to hang upside down from the ceiling like a bat.</p>
<p><strong className="hl">7th Level:</strong> The cloak grants its wearer a +5 competence bonus on Stealth checks.</p>
<p><strong className="hl">10th Level:</strong> The wearer can grasp the edges of the cloak to fly (as the <Link to="/spell/fly">fly</Link> spell) for up to 7 minutes three times per day, but only in dim light or lower. After each use of this ability, the wearer must wait for at least as long as the <em>fly</em> effect lasted until using this ability again.</p>
<p><strong className="hl">12th Level:</strong> For each daily use of <em>fly,</em> the wearer can instead choose to transform into an ordinary bat as <Link to="/spell/beast_shape_iii">beast shape III</Link> for the same duration.</p>
<p><strong className="hl">14th Level:</strong> The wearer can use <em>fly</em> or <em>beast shape III</em> any number of times per day, but is still subject to the dim light restriction and the limit on using the ability again after a previous use.</p>
<p><strong className="hl">16th Level:</strong> The wearer can also transform into a dire bat with <em>beast shape III,</em> and he can summon a swarm of bats at will as <Link to="/spell/summon_swarm">summon swarm</Link>.</p>
<p><strong className="hl">18th Level:</strong> The wearer constantly gains the echolocation of a bat. He can hear high-pitched sounds such as bat echolocation, and he gains blindsense 20 feet. This blindsense is sound-based, and is blocked by spells such as <Link to="/spell/silence">silence</Link>.</p>
<p><strong className="hl">20th Level:</strong> The wearer's blindsense increases to blindsense 60 feet, like that of a dire bat. Instead of using beast shape or <Link to="/spell/fly">fly</Link>, he can transform himself into a bat swarm, gaining the abilities of a bat as <em>beast shape III</em> plus the bat swarm's distraction, immunity to weapon damage, swarm traits, and wounding abilities.</p>
<h3 id="rule-swi_bat-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/beast_shape_iii">beast shape III</Link>, <Link to="/spell/echolocation">echolocation</Link>, <em>fly, summon swarm;</em> <strong>Cost</strong> 66,000 gp</p>
</>};
const _swi_beaker = {title: "Beaker of Plentiful Poisons", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> none; CL 7th; <strong>Weight</strong> 1 lb.<br/><strong>Aura</strong> moderate conjuration; <strong>Price</strong> 3,600 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-swi_beaker-description">Description</h3>
<p>This flared and stoppered flask of tempered glass can store up to 5 doses of poison, all of which can be different types. The owner can craft up to 5 doses of poison simultaneously using the beaker. She must still attempt separate Craft (alchemy) checks for each dose of poison to ensure successful crafting, but she can make progress on all five poisons simultaneously (making checks for the week's or day's progress at the same time).</p>
<p>The user can also add already-completed doses of poison to the beaker. All poisons remain separate and unmixed as long as they remain within the beaker, and the user can decant any of the poisons (including incomplete poisons) by naming the poison she wishes to pour forth.</p>
<p><strong className="hl">9th Level:</strong> When crafting a poison within the beaker, the crafter uses the poison's gp value instead of its sp value when determining her progress.</p>
<p><strong className="hl">11th Level:</strong> Once per day, the owner of a beaker of plentiful poisons can produce 1 additional dose of any completed poison stored in the flask. The additional dose loses its efficacy 1 minute after being decanted. The market price of the duplicated poison can't exceed an amount equal to 20 gp &times; the beaker's caster level; any unused value is lost. A creature must have had the beaker of plentiful poisons in its possession for at least 24 hours to create poisons in this way.</p>
<p><strong className="hl">13th Level:</strong> The beaker can create 2 doses of poison per day, with a total market price up to 40 gp &times; the beaker's caster level.</p>
<p><strong className="hl">15th Level:</strong> The beaker can create 3 doses of poison per day, with a total market price of up to 60 gp &times; the beaker's caster level.</p>
<h3 id="rule-swi_beaker-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/minor_creation">minor creation</Link>, <Link to="/spell/poison">poison</Link>; <strong>Cost</strong> 18,000 gp</p>
</>};
const _swi_boots_readiness = {title: "Boots of Readiness", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> feet; CL 9th; <strong>Weight</strong> 1 lb.<br/><strong>Aura</strong> moderate divination; <strong>Price</strong> 2,650 gp; <strong>Scaling</strong> bauble</p>
<h3 id="rule-swi_boots_readiness-description">Description</h3>
<p>These tight-fitting, black leather boots make their wearer more prepared before she acts in battle. When the wearer has not yet acted at the beginning of a fight, the boots provide a +2 luck bonus on saving throws and 12 temporary hit points. Both effects fade when the wearer's first turn arrives, even if she delays.</p>
<p><strong className="hl">11th Level:</strong> The wearer of these boots can't be caught flat-footed.</p>
<p><strong className="hl">13th Level:</strong> Before the wearer has taken her first turn in combat, she can move up to her speed as an immediate action without provoking attacks of opportunity. She can no longer use this ability once her first turn arrives, even if she delays.</p>
<h3 id="rule-swi_boots_readiness-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/haste">haste</Link>, <Link to="/spell/moment_of_prescience">moment of prescience</Link>; <strong>Cost</strong> 3,500 gp</p>
</>};
const _swi_boots_elven_spirit = {title: "Boots of the Elven Spirit", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> feet; CL 10th; <strong>Weight</strong> 1 lb.<br/><strong>Aura</strong> moderate transmutation; <strong>Price</strong> 3,100 gp; <strong>Scaling</strong> bauble</p>
<h3 id="rule-swi_boots_elven_spirit-description">Description</h3>
<p>These elegant, lightweight boots are durable yet soft in texture, being partially made of living leaves and other natural materials. They grant the wearer a +5 competence bonus on Acrobatics checks and allow her to treat the first square of difficult terrain she enters each round as if it weren't difficult terrain.</p>
<p><strong className="hl">12th Level:</strong> The boots allow the wearer to ignore the adverse movement effects of difficult terrain entirely.</p>
<p><strong className="hl">14th Level:</strong> The boots grant the wearer a +10-foot enhancement bonus to her base movement speed, and she leaves no tracks.</p>
<p><strong className="hl">17th Level:</strong> The boots allow the wearer to walk so lightly that she doesn't trigger pressure plate traps and can walk across any surface - including water, but not air - as long as she ends her movement each round on a surface that can support her weight.</p>
<p><strong className="hl">20th Level:</strong> The boots allow the wearer to gain the effects of <Link to="/spell/haste">haste</Link> for 10 rounds per day, as <Link to="/magic-wondrous/boots_of_speed">boots of speed</Link>. If the wearer also wears the <Link to="/rule/swi_cloak">cloak of the elven spirit</Link>, the boots grant her the ability to use <Link to="/spell/tree_stride">tree stride</Link> as the spell, entering up to 20 trees each day.</p>
<h3 id="rule-swi_boots_elven_spirit-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/expeditious_retreat">expeditious retreat</Link>, <Link to="/spell/feather_step">feather step</Link>, <em>haste, tree stride,</em> creator must be an <Link to="/race/elf">elf</Link>; <strong>Cost</strong> 22,000 gp</p>
</>};
const _swi_bracelets = {title: "Bracelets of the Fey Touch", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> wrists; CL 4th; <strong>Weight</strong> -<br/><strong>Aura</strong> faint enchantment; <strong>Price</strong> 480 gp; <strong>Scaling</strong> bauble</p>
<h3 id="rule-swi_bracelets-description">Description</h3>
<p>These bracelets are crafted from thin yet surprisingly durable silver, and they glitter and sparkle faintly in moonlight or shadow. The wearer can activate the bracelets once per day as a free action to gain a +4 competence bonus on a Bluff or Stealth check.</p>
<p><strong className="hl">6th Level:</strong> The wearer can activate the bracelets to increase the DC of the next enchantment spell she casts by 1 instead of gaining a bonus on a skill check.</p>
<p><strong className="hl">8th Level:</strong> The bracelets can be used twice per day, but no more than once per hour.</p>
<h3 id="rule-swi_bracelets-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/charm_person">charm person</Link>, <Link to="/spell/invisibility">invisibility</Link>, creator must be fey; <strong>Cost</strong> 825 gp</p>
</>};
const _swi_brutish = {title: "Brutish Boots", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> feet; CL 8th; <strong>Weight</strong> 6 lbs.<br/><strong>Aura</strong> moderate transmutation; <strong>Price</strong> 5,814 gp; <strong>Scaling</strong> wonder</p>
<h3 id="rule-swi_brutish-description">Description</h3>
<p>These coarse, heavy boots are fitted with numerous iron plates and rusted spikes that give them an intimidating appearance. The wearer can use brutish boots to attack as if using a masterwork cold iron gauntlet or masterwork cold iron spiked gauntlet, depending on which portion of the boot he uses.</p>
<p>These boots also protect the wearer's feet as if they had hardness 8. This hardness applies only against effects that directly affect the target's feet, such as caltrops, <Link to="/spell/spike_growth">spike growth</Link>, <Link to="/spell/spike_stones">spike stones</Link>, or stepping into a puddle of acid. It also applies against effects that deal damage to an attacker, such as <Link to="/spell/fire_shield">fire shield</Link>, <Link to="/spell/thorn_body">thorn body</Link>, or the barbed defense of a <Link to="/monster/barbed_devil">barbed devil</Link>, but only if the wearer is using the brutish boots to make the attack.</p>
<p><strong className="hl">10th Level:</strong> If the wearer confirms a critical hit on an attack using the boots, he can attempt a combat maneuver check to trip the target. This maneuver doesn't provoke an attack of opportunity.</p>
<p><strong className="hl">12th Level:</strong> Attack and damage rolls made with the boots gain a +1 enhancement bonus.</p>
<p><strong className="hl">14th Level:</strong> If a creature within the wearer's reach is knocked prone, that creature provokes an attack of opportunity from the wearer. This attack of opportunity must be made with the brutish boots.</p>
<h3 id="rule-swi_brutish-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/telekinesis">telekinesis</Link>; <strong>Cost</strong> 13,200 gp</p>
</>};
const _swi_cloak = {title: "Cloak of the Elven Spirit", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> shoulders; CL 12th; <strong>Weight</strong> 1 lb.<br/><strong>Aura</strong> strong transmutation; <strong>Price</strong> 5,400 gp; <strong>Scaling</strong> bauble</p>
<h3 id="rule-swi_cloak-description">Description</h3>
<p>When this plain gray cloak is worn with the hood drawn up around the head, the wearer gains a +5 competence bonus on Stealth checks. If the wearer spends at least 1 minute concentrating on blending the cloak's colors to match her surroundings, she can attempt Stealth checks without cover or concealment until she makes an attack or moves more than half her base speed on her turn. Once she breaks this effect, she must spend another minute to reactivate it.</p>
<p><strong className="hl">14th Level:</strong> The cloak grants its wearer the camouflage <Link to="/class/ranger">ranger</Link> ability in forested areas.</p>
<p><strong className="hl">18th Level:</strong> At will, when the wearer envelops herself in the cloak as a standard action, she can become invisible as <Link to="/spell/invisibility">invisibility</Link>.</p>
<p><strong className="hl">20th Level:</strong> If the wearer also wears the <Link to="/rule/swi_boots_elven_spirit">boots of the elven spirit</Link>, she can focus the cloak's <em>invisibility</em> effect. As a free action, she can choose to make it so her attacks do not end the <em>invisibility</em> effect for 1 round. She can use this ability for 10 rounds per day, but the rounds need not be consecutive.</p>
<h3 id="rule-swi_cloak-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/blend">blend</Link>, <Link to="/spell/greater_invisibility">greater invisibility</Link>, <em>invisibility,</em> creator must be an <Link to="/race/elf">elf</Link>; <strong>Cost</strong> 22,000 gp</p>
</>};
const _swi_cord = {title: "Cord of Unearthly Grace", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> belt; CL 8th; <strong>Weight</strong> 1 lb.<br/><strong>Aura</strong> moderate transmutation; <strong>Price</strong> 5,000 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-swi_cord-description">Description</h3>
<p>When tied around the waist, this humble, coarse rope grants its wearer a +10 competence bonus on Acrobatics checks relating to balance.</p>
<p><strong className="hl">9th Level:</strong> Once per day as a swift action, the wearer can gain a +30-foot enhancement bonus to his base speed for 1 round. During this round, he ignores the adverse movement effects of terrain and his movement doesn't provoke attacks of opportunity.</p>
<p><strong className="hl">11th Level:</strong> The wearer can stand from prone as an immediate action that does not provoke attacks of opportunity.</p>
<p><strong className="hl">12th Level:</strong> The wearer can use the belt's ability to increase his speed and ignore difficult terrain three times per day.</p>
<h3 id="rule-swi_cord-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/cats_grace">cat's grace</Link>, <Link to="/spell/grace">grace</Link>, creator must have 10 ranks in the Acrobatics skill; <strong>Cost</strong> 8,100 gp</p>
</>};
const _swi_crystal = {title: "Crystal Tiara", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> head; CL 3rd; <strong>Weight</strong> -<br/><strong>Aura</strong> faint conjuration; <strong>Price</strong> 1,000 gp; <strong>Scaling</strong> wonder</p>
<h3 id="rule-swi_crystal-description">Description</h3>
<p>This elaborate tiara looks as though it's made of intricately carved ice adorned with small, crystalline gemstones. Despite the item's fragile appearance, it has hardness 12 and 10 hit points. Its wearer gains the constant effects of <Link to="/spell/endure_elements">endure elements</Link> against cold conditions only.</p>
<p><strong className="hl">5th Level:</strong> Once per day, the wearer can summon a <Link to="/monster/small_ice_elemental">Small ice elemental</Link> as <Link to="/spell/summon_monster_ii">summon monster II</Link>.</p>
<p><strong className="hl">7th Level:</strong> As a standard action, the wearer can launch an icicle at a foe within 30 feet as a ranged attack. On a hit, the icicle deals 1d6 points of piercing damage and 1d6 points of cold damage. In addition, the wearer can walk across icy ground without slipping.</p>
<p><strong className="hl">10th Level:</strong> As part of her move action, the wearer can step into the air, creating crystalline stairs beneath her feat, adding new steps in whichever direction she travels. These steps melt away behind her. If others try to climb the steps, they crumble away, leaving only the portions beneath the wearer's feet intact. This otherwise acts as the <Link to="/spell/air_walk">air walk</Link> spell. She can use this ability each day for 10 minutes per level, divided any way she chooses in 10-minute intervals.</p>
<p><strong className="hl">12th Level:</strong> Once per day, the wearer can call forth an <Link to="/spell/ice_storm">ice storm</Link>. When she uses the tiara to summon ice elementals, she can summon either 1d4 Small ice elementals or one <Link to="/monster/medium_ice_elemental">Medium ice elemental</Link> as <Link to="/spell/summon_monster_iv">summon monster IV</Link>.</p>
<p><strong className="hl">14th Level:</strong> Once per day, the wearer can travel to a safe, very familiar location, as if she had cast <Link to="/spell/ice_crystal_teleport">ice crystal teleport</Link> on herself. When she uses the tiara to summon ice elementals, she can choose to summon 1d3 Medium ice elementals or one <Link to="/monster/large_ice_elemental">Large ice elemental</Link> as <Link to="/spell/summon_monster_v">summon monster V</Link>.</p>
<p><strong className="hl">16th Level:</strong> The wearer can use the tiara to call up a tower of ice, as an <Link to="/magic-wondrous/instant_fortress">instant fortress</Link> (except that the tiara does not transform into the tower, the tower takes 1 minute to rise instead of 1 round, the walls of the tower have only hardness 12, and damage to the tower does not carry over between multiple uses of this ability).</p>
<p><strong className="hl">18th Level:</strong> When the wearer calls forth a tower of ice, if there is enough open space, she can choose to call forth a small palace instead, 100 feet square at the base with 20-foot-high rooms, with a central tower 20 feet square and 100 feet high. At will, she can spend 5 rounds to transform into a flurry of snowflakes that can move at incredible speed. Treat this as <Link to="/spell/wind_walk">wind walk</Link> except she gains vulnerability to fire. It normally takes 5 rounds to transform back into her normal shape. However, she can revert to her original form early as a standard action. If she does so, she cannot transform into snowflakes again for 24 hours. When she uses the tiara to summon ice elementals, she can choose to summon 1d4+1 Medium ice elementals, 1d3 Large ice elementals, or one <Link to="/monster/huge_ice_elemental">Huge ice elemental</Link> as <Link to="/spell/summon_monster_vi">summon monster VI</Link>.</p>
<p><strong className="hl">20th Level:</strong> The wearer gains cold resistance 30. When she uses the tiara to summon ice elementals, she can also choose to summon 1d4+1 Huge ice elementals, 1d3 <Link to="/monster/greater_ice_elemental">greater ice elementals</Link>, or one <Link to="/monster/elder_ice_elemental">elder ice elemental</Link> as <Link to="/spell/summon_monster_viii">summon monster VIII</Link>. She can create ice stairs without a daily limit, and if she wishes, they last for 1 minute before melting, even if another creature tries to climb them. If she chooses to make them last longer, she can dismiss the stairs behind her as a swift action, potentially causing creatures climbing the stairs to fall.</p>
<h3 id="rule-swi_crystal-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/air_walk">air walk</Link>, <Link to="/spell/ice_crystal_teleport">ice crystal teleport</Link>, <Link to="/spell/ice_storm">ice storm</Link>, <em>summon monster VIII, wind walk;</em> <strong>Cost</strong> 132,000 gp</p>
</>};
const _swi_dragon = {title: "Dragon Robe", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> body; CL 12th; <strong>Weight</strong> 1 lb.<br/><strong>Aura</strong> strong transmutation; <strong>Price</strong> 38,000 gp; <strong>Scaling</strong> wonder</p>
<h3 id="rule-swi_dragon-description">Description</h3>
<p>Embroidered dragons of gold thread adorn this red silk robe. The wearer gains a +3 enhancement bonus to natural armor and fire resistance 10. Once per day, the wearer can gain the benefit of <Link to="/spell/darkvision">darkvision</Link>, as the spell. A typical dragon robe is attuned to red dragons, though variants attuned to other types of dragons exist.</p>
<p><strong className="hl">14th Level:</strong> The wearer can use <Link to="/spell/dragons_breath">dragon's breath</Link> (red dragon) once per day. The save DC is equal to 13 + the wearer's Constitution modifier, and spell resistance does not apply.</p>
<p><strong className="hl">16th Level:</strong> The wearer's enhancement bonus to natural armor increases to +4, and his fire resistance increases to 20.</p>
<p><strong className="hl">18th Level:</strong> The wearer can use <em>dragon's breath</em> three times per day. The wearer can also use <Link to="/spell/form_of_the_dragon_iii">form of the dragon III</Link> once per day, with a save DC equal to 22 + the wearer's Constitution modifier.</p>
<p><strong className="hl">20th Level:</strong> The wearer's enhancement bonus to natural armor increases to +5 and his fire resistance to 30. In addition, any <em>dragon's breath</em> effect created by this item is <Link to="/feat/maximized">maximized</Link>.</p>
<h3 id="rule-swi_dragon-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/feat/maximize_spell">Maximize Spell</Link>, <Link to="/spell/darkvision">darkvision</Link>, <Link to="/spell/dragons_breath">dragon's breath</Link>, <em>form of the dragon III,</em> <Link to="/spell/resist_energy">resist energy</Link>; <strong>Cost</strong> 132,000 gp</p>
</>};
const _swi_eternal = {title: "Eternal Feather Token", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> none; CL 4th; <strong>Weight</strong> -<br/><strong>Aura</strong> faint conjuration; <strong>Price</strong> 2,650 gp; <strong>Scaling</strong> bauble</p>
<h3 id="rule-swi_eternal-description">Description</h3>
<p>This small, colorful feather waves gently as if blown by a constant breeze. As a standard action, the feather's owner can change its form into another variety of <Link to="/magic-wondrous/feather_token">feather token</Link>. Any owner can use an eternal feather token to duplicate the effects of an anchor feather token. Higher-level owners have additional options. The token remains transformed until its owner commands it to change again, or until it is activated in that form like a normal feather token. Once activated, the token reverts to the appearance of a normal feather of a dingy gray color. Over the next week, it slowly regains its color. A week after its last activation, it can be used again.</p>
<p><strong className="hl">7th Level:</strong> The feather can become a fan feather token.</p>
<p><strong className="hl">9th Level:</strong> The feather can become a bird feather token.</p>
<p><strong className="hl">11th Level:</strong> The feather can become a tree feather token.</p>
<p><strong className="hl">13th Level:</strong> The feather can become a swan boat feather token or whip feather token.</p>
<p><strong className="hl">15th Level:</strong> The feather recharges its color and is usable after 1 day instead of 1 week.</p>
<h3 id="rule-swi_eternal-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/major_creation">major creation</Link>, <Link to="/spell/make_whole">make whole</Link>; <strong>Cost</strong> 6,000 gp</p>
</>};
const _swi_filthy = {title: "Filthy Rags", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> body; CL 8th; <strong>Weight</strong> 6 lbs.<br/><strong>Aura</strong> moderate necromancy; <strong>Price</strong> 5,000 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-swi_filthy-description">Description</h3>
<p>These ragged robes are threadbare and frayed, caked with dirt and grime. Through constant exposure to innocuous forms of disease, the wearer becomes inured to sickness and filth, gaining a +4 alchemical bonus on saving throws versus disease and effects that cause the nauseated or sickened condition. Filthy rags can be worn in conjunction with armor.</p>
<p><strong className="hl">10th Level:</strong> The rags begin to crawl with insects and spiders, granting the wearer familiarity with the feeling of tiny creatures crawling over her body. After wearing the rags for 24 consecutive hours, the wearer gains a +2 circumstance bonus on saving throws against the distraction ability of swarms. Once per day, she can make the spiders in her rags swarm out and attack her foes, causing the rags to expel spiders as the spell <Link to="/spell/vomit_swarm">vomit swarm</Link>.</p>
<p><strong className="hl">11th Level:</strong> Wasps build a small hive somewhere in the rags' interior. When the wearer uses <em>vomit swarm,</em> she can choose between spiders and wasps.</p>
<p><strong className="hl">13th Level:</strong> The rags' diseases become more communicable. Any living creature striking the wearer with a bite attack contracts <Link to="/disease/filth_fever">filth fever</Link>. A successful DC 14 Fortitude negates the disease. Oozes and vermin are immune to this effect, as are creatures such as <Link to="/monster/otyugh">otyughs</Link> and rats that are at home in exceptional filth.</p>
<p><strong className="hl">16th Level:</strong> Army ants build a colony within the rags, and the rags' filth becomes utterly vile. The wearer can also choose army ants when using <em>vomit swarm.</em> Any biting creature that fails its saving throw against the rags' filth fever becomes nauseated for 1d4 rounds, and even on a successful save, the creature is still sickened for 1 round.</p>
<h3 id="rule-swi_filthy-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/contagion">contagion</Link>, <Link to="/spell/remove_sickness">remove sickness</Link>, <Link to="/spell/stinking_cloud">stinking cloud</Link>, <Link to="/spell/vomit_swarm">vomit swarm</Link>; <strong>Cost</strong> 23,625 gp</p>
</>};
const _swi_flask = {title: "Flask of Reconcoction", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> none; CL 4th; <strong>Weight</strong> -<br/><strong>Aura</strong> faint conjuration and divination; <strong>Price</strong> 2,650 gp; <strong>Scaling</strong> bauble</p>
<h3 id="rule-swi_flask-description">Description</h3>
<p>This thin silver flask can hold a single ounce of liquid. If a potion of a 1st-level spell is poured into the flask, the flask's interior analyzes and bonds to that potion. Once the potion is drunk, the flask begins to hiss and bubble, as strange liquids and reagents slowly mix within it. After 1 full week, the flask has produced a new potion of the same 1st-level spell at minimum caster level. If anyone drinks or empties the flask before the week is over, they gain no benefit, the nascent potion is lost, and the flask ceases concocting until it is filled with a new 1st-level potion. If a potion in the flask is poured out of the flask, rather than drunk directly from it, the flask does not reconcoct that potion.</p>
<p><strong className="hl">6th Level:</strong> The flask takes only 1 day to reconcoct a 1st-level potion, rather than 1 week.</p>
<p><strong className="hl">8th Level:</strong> The flask can reconcoct a potion of a 2nd-level spell, but it takes 1 week.</p>
<p><strong className="hl">10th Level:</strong> The flask takes only 1 day to reconcoct a 2nd-level potion, rather than 1 week.</p>
<p><strong className="hl">12th Level:</strong> The flask can reconcoct a potion of a 3rd-level spell, but it takes 1 week.</p>
<p><strong className="hl">14th Level:</strong> The flask takes only 1 day to reconcoct a 3rd-level potion, rather than 1 week.</p>
<h3 id="rule-swi_flask-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/alchemical_allocation">alchemical allocation</Link>; <strong>Cost</strong> 6,000 gp</p>
</>};
const _swi_force = {title: "Force Bracers", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> wrists; CL 8th; <strong>Weight</strong> 2 lbs.<br/><strong>Aura</strong> moderate evocation; <strong>Price</strong> 5,950 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-swi_force-description">Description</h3>
<p>These crystal-accented bracers are bound with metallic straps and a fine lacework of embedded wire. The wearer can cause the bracers to create a shield of force to protect him. Each bracer can create a shield for up to 10 total minutes per day. This duration must be used in 1-minute increments. If only one force bracer is used, it creates a buckler, light shield, or heavy shield of force. If the wearer activates both force bracers, the shield of force is the equivalent of a tower shield.</p>
<p>Regardless of which type of force shield is created, the shield is weightless and has only half the normal armor check penalty, but otherwise follows all of the normal rules for shield use and proficiency. The shield grants the corresponding shield bonus to AC. Because the shield is made of force, its bonus applies against incorporeal touch attacks.</p>
<p><strong className="hl">10th Level:</strong> If the wearer has created a heavy shield of force, the wearer can expend 1 minute of the shield's duration to make a single shield bash attack as if the shield had the <Link to="/magic-enh/bashing">bashing</Link> special ability, with an enhancement bonus on the attack roll equal to 1/4 the wearer's Hit Dice (maximum +5).</p>
<p><strong className="hl">12th Level:</strong> If the wearer has created a tower shield of force, the wearer can release the tower shield from his person and use it as a <Link to="/spell/forceful_hand">forceful hand</Link> with hit points equal to 1/2 the wearer's hit points. The wearer gains none of the benefits of using a tower shield while the <em>forceful hand</em> exists. Each round of using the forceful hand consumes 1 minute of duration from each bracer.</p>
<h3 id="rule-swi_force-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <em>forceful hand,</em> <Link to="/spell/shield">shield</Link>; <strong>Cost</strong> 8,100 gp</p>
</>};
const _swi_forgemasters = {title: "Forgemaster's Gauntlets", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> hands; CL 7th; <strong>Weight</strong> 4 lbs.<br/><strong>Aura</strong> moderate abjuration; <strong>Price</strong> 3,750 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-swi_forgemasters-description">Description</h3>
<p>These scorched gauntlets of heavy padded leather are reinforced with metallic mesh and ceramic pads to diffuse heat. The wearer gains a +5 competence bonus on Craft (armor) and Craft (weapons) checks.</p>
<p><strong className="hl">8th Level:</strong> The wearer can use <Link to="/spell/spark">spark</Link> at will.</p>
<p><strong className="hl">10th Level:</strong> The wearer gains fire resistance 5, and her hands are immune to fire damage, so she can pick up hot objects or touch flames without being harmed. Weapons affected by <Link to="/spell/heat_metal">heat metal</Link> or similar effects deal no damage to the wearer, and the wearer likewise ignores damage from effects like <Link to="/spell/fire_shield">fire shield</Link> (hot flames version) that deal fire damage to a creature attacking in melee.</p>
<p><strong className="hl">11th Level:</strong> The forgemaster's gauntlets are +1 gauntlets.</p>
<p><strong className="hl">12th Level:</strong> The wearer of the forgemaster's gauntlets can heat objects she touches. She can use <em>heat metal</em> (DC 13) at will. If she's targeting a metal object worn by a foe, she must succeed at a melee touch attack. If the targeted item is being held or wielded, the wearer of the forgemaster's gauntlets must attempt a combat maneuver check as if she were attempting to sunder the item. This maneuver does not provoke attacks of opportunity, even if the wearer does not have the <Link to="/feat/improved_sunder">Improved Sunder</Link> feat.</p>
<p><strong className="hl">13th Level:</strong> The wearer's fire resistance increases to 10.</p>
<p><strong className="hl">14th Level:</strong> The forgemaster's gauntlets are +1 <Link to="/magic-enh/flaming">flaming</Link> gauntlets.</p>
<p><strong className="hl">15th Level:</strong> The forgemaster's gauntlets are +1 <Link to="/magic-enh/flaming_burst">flaming burst</Link> gauntlets.</p>
<h3 id="rule-swi_forgemasters-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>; <Link to="/spell/flame_blade">flame blade</Link>, <Link to="/spell/flame_strike">flame strike</Link>, or <Link to="/spell/fireball">fireball</Link>; <Link to="/spell/heat_metal">heat metal</Link>; <Link to="/spell/resist_energy">resist energy</Link>; <Link to="/spell/spark">spark</Link>; creator must have 5 ranks in Craft (armor) and Craft (weapons); <strong>Cost</strong> 18,000 gp</p>
</>};
const _swi_fruitful = {title: "Fruitful Sash", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> belt; CL 5th; <strong>Weight</strong> 1 lb.<br/><strong>Aura</strong> faint conjuration; <strong>Price</strong> 710 gp; <strong>Scaling</strong> bauble</p>
<h3 id="rule-swi_fruitful-description">Description</h3>
<p>This colorful sash seems to be the sort normally worn by any common sailor or traveler, yet within its folds is a bountiful pocket. The wearer can reach into this hidden pocket and remove a piece of fruit a number of times per day equal to his character level. The type of fruit varies. One piece of fruit has enough nourishment and water to sustain one humanoid for 24 hours.</p>
<p>After 24 hours, the fruit rots and cannot nourish anyone. Once removed from its wearer, the sash doesn't produce fruit for anyone else for 24 hours. If redonned by its most recent wearer during that time, the sash resumes function normally (and the amount of fruit remaining within it isn't reset).</p>
<p><strong className="hl">6th Level:</strong> Consuming a fruit produced from the sash cures a creature of 1 point of damage as if it were a <Link to="/spell/goodberry">goodberry</Link>. A given creature can recover a maximum of 8 hit points in this way in a 24-hour period.</p>
<p><strong className="hl">8th Level:</strong> Three times per day, the wearer can draw forth a large, ripe piece of healing fruit that explodes when thrown. This functions as a splash weapon, but cures a target it hits of 1d6 points of damage and cures each creature it splashes on of 1 point of damage. This counts against the total number of pieces of fruit the sash can produce per day.</p>
<p><strong className="hl">10th Level:</strong> Once per day, the wearer can draw forth one piece of fruit that acts as a <Link to="/spell/cure_moderate_wounds">potion of cure moderate wounds</Link>, <Link to="/spell/delay_poison">delay poison</Link>, <Link to="/spell/lesser_restoration">lesser restoration</Link>, or <Link to="/spell/remove_paralysis">remove paralysis</Link>. This counts against the total number of pieces of fruit the sash can produce per day.</p>
<p><strong className="hl">13th Level:</strong> The fruits produced by the sash cure 1d4 points of damage each instead of 1 point. An exploding fruit's healing power is unchanged.</p>
<p><strong className="hl">15th Level:</strong> Once per week, the sash can produce the effects of <Link to="/spell/heroes_feast">heroes' feast</Link>.</p>
<h3 id="rule-swi_fruitful-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/create_food_and_water">create food and water</Link>, <Link to="/spell/cure_moderate_wounds">cure moderate wounds</Link>, <em>delay poison,</em> <Link to="/spell/goodberry">goodberry</Link>, <em>heroes' feast, lesser restoration, remove paralysis;</em> <strong>Cost</strong> 6,000 gp</p>
</>};
const _swi_galvanic = {title: "Galvanic Gauntlets", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> hands; CL 5th; <strong>Weight</strong> 2 lbs.<br/><strong>Aura</strong> faint evocation; <strong>Price</strong> 1,882 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-swi_galvanic-description">Description</h3>
<p>These gloves are woven of a fine copper mesh and wire, and infuse the wearer's hands with an electric charge. The wearer can use the galvanic gauntlets to make a melee touch attack dealing 1d6 points of electricity damage. She gains a +3 bonus on the attack if the target is wearing metal armor or is composed of metal.</p>
<p><strong className="hl">7th Level:</strong> The touch attack's damage increases to 2d6 points of electricity damage.</p>
<p><strong className="hl">9th Level:</strong> If the wearer uses her hands to make unarmed strikes (including when making a combat maneuver check to damage an opponent in a grapple), those attacks deal an additional 1d6 points of electricity damage on each hit, as if she were using a weapon with the <Link to="/magic-enh/shock">shock</Link> weapon special ability.</p>
<p><strong className="hl">11th Level:</strong> Any item held in the wearer's hands gains a powerful static charge, and any creature attempting to disarm the wearer of an object she is holding (or to make a steal combat maneuver against the gloves themselves) takes 1d6 points of electrical damage and must succeed at a DC 19 Fortitude save or be staggered for 1 round by the shock. This static charge does not harm items the wearer is holding.</p>
<p><strong className="hl">13th Level:</strong> The shock ability of the gauntlets improves to the <Link to="/magic-enh/shocking_burst">shocking burst</Link> weapon special ability.</p>
<p><strong className="hl">15th Level:</strong> Once per day when the wearer hits a creature with the gauntlets' touch attack, she can create electric arcs that strike nearby creatures. This functions as though the target of the attack had been the primary target of a <Link to="/spell/chain_lightning">chain lightning</Link> spell (Reflex DC 19 half), though the hit creature doesn't take any additional damage.</p>
<h3 id="rule-swi_galvanic-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <em>chain lightning,</em> <Link to="/spell/shocking_grasp">shocking grasp</Link>; <strong>Cost</strong> 18,302 gp</p>
</>};
const _swi_glorious = {title: "Glorious Gorget", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> neck; CL 8th; <strong>Weight</strong> 2 lbs.<br/><strong>Aura</strong> moderate enchantment; <strong>Price</strong> 5,000 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-swi_glorious-description">Description</h3>
<p>This gilded neckpiece is inlaid with sunstone and diamond and engraved with wreaths of laurel. The wearer possesses great eloquence and gravitas, gaining a +5 competence bonus on Diplomacy, Intimidate, and Perform (oratory) checks.</p>
<p><strong className="hl">10th Level:</strong> The wearer's speeches can fill her allies with purpose. As a full-round action, she can attempt a DC 20 Perform (oratory) check to affect all allies who can hear her with <Link to="/spell/good_hope">good hope</Link> for 1 round. If she fails the check, all allies who heard her ineloquent speech cannot benefit from this ability for 24 hours.</p>
<p><strong className="hl">12th Level:</strong> The wearer can improve someone's attitude up to three steps when using Diplomacy. When she uses Intimidate to influence someone, she can present herself as glorious and powerful without threatening them, causing the attempt to operate like a Diplomacy check to influence instead.</p>
<p><strong className="hl">14th Level:</strong> When the wearer uses the gorget's <em>good hope</em> ability, it lasts 1 additional round for every 10 by which her result exceeds the Perform (oratory) check DC. Once per day, she can extend the duration to the full duration of <em>good hope.</em></p>
<h3 id="rule-swi_glorious-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <em>good hope;</em> <strong>Cost</strong> 13,875 gp</p>
</>};
const _swi_gloves = {title: "Gloves of Coud Shaping", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> hands; CL 8th; <strong>Weight</strong> 1 lb.<br/><strong>Aura</strong> moderate transmutation; <strong>Price</strong> 5,400 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-swi_gloves-description">Description</h3>
<p>The wearer of these cloud-blue, cool-to-the-touch gloves can sculpt and shape creations of cloud and mist: both her own and those of others. The wearer can call upon the power of the gloves up to three times per day when creating a cloud of gas or mist with a spell, spell-like ability, supernatural ability, or magical item in order to make the area of effect.</p>
<p>Alternatively, the wearer can use the gloves to disperse an existing cloud of gas or mist by touch, as if using <Link to="/spell/dispel_magic">dispel magic</Link>. If the effect is nonmagical, it is automatically dispersed in a 20-foot-radius spread centered on the wearer.</p>
<p><strong className="hl">10th Level:</strong> The wearer can use <Link to="/spell/fog_cloud">fog cloud</Link> twice per day.</p>
<p><strong className="hl">12th Level:</strong> The wearer can disrupt a creature under the effects of <Link to="/spell/gaseous_form">gaseous form</Link>. To do so, she must succeed at a melee touch attack against the gaseous target. If the attack hits, the wearer can choose to either lock the gaseous creature in place as if using <Link to="/spell/hold_monster">hold monster</Link> or disperse the target, dealing 5d6 points of damage and nauseating the target for 5 rounds. In either case, the target is also locked into its gaseous form and can't resume solid form until the effect expires. A successful DC 17 Will saving throw negates this effect.</p>
<p><strong className="hl">14th Level:</strong> The wearer can use <Link to="/spell/cloudkill">cloudkill</Link> once per day.</p>
<h3 id="rule-swi_gloves-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <em>cloudkill,</em> <Link to="/spell/control_weather">control weather</Link>, <em>fog cloud;</em> <strong>Cost</strong> 13,875 gp</p>
</>};
const _swi_heart = {title: "Heart of the Elder Tree", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> neck; CL 9th; <strong>Weight</strong> -<br/><strong>Aura</strong> moderate transmutation; <strong>Price</strong> 14,000 gp; <strong>Scaling</strong> wonder</p>
<h3 id="rule-swi_heart-description">Description</h3>
<p>This carved darkwood amulet resembles a human heart. As a move action while standing on earth, stone, or wood, its wearer can sprout woody, root-like tendrils from his legs that anchor his feet to the ground. While so anchored, he gains a +4 bonus to his CMD against bull rush, drag, grapple, overrun, reposition, trip, and other combat maneuvers that would force him from his space, as well as on saving throws against effects that would force him from his space on a failed save. The roots fall away if the wearer moves from his space, even involuntarily.</p>
<p><strong className="hl">11th Level:</strong> When anchored to the ground, the wearer's roots interfere with adjacent foes. Foes adjacent to the wearer must succeed at a DC 13 Reflex save each round or be entangled by the roots as if by the spell <Link to="/spell/entangle">entangle</Link>. If the wearer's roots fall away due to movement, all entangled enemies are immediately released.</p>
<p><strong className="hl">13th Level:</strong> When struck by a nonliving wooden or woodenhafted weapon of Huge size or smaller, the wearer can lash back and affect that weapon with <Link to="/spell/warp_wood">warp wood</Link> as an immediate action (Will DC 20 negates). This ability is usable three times per day.</p>
<p><strong className="hl">15th Level:</strong> The wearer can make a secondary natural attack with his roots, dealing an amount of damage equal to 1d4 + 1/2 the user's Strength bonus. At the beginning of the wearer's turn, if he still possesses roots from a previous round, the secondary root attack gains 5 feet of reach. This increase stacks with itself to a maximum of triple the wearer's natural reach, but it doesn't stack with any other increases. The reach resets whenever the roots fall away.</p>
<p><strong className="hl">17th Level:</strong> The wearer gains the <Link to="/umr/pull">pull (root, 10 feet)</Link> universal monster ability.</p>
<p><strong className="hl">20th Level:</strong> As long as the wearer's roots are planted in the ground, he gains the effect of a <Link to="/magic-ring/ring_of_regeneration">ring of regeneration</Link>. When the roots fall away, it counts as removing the ring, so he only regenerates damage taken after planting the roots and before moving. As long as the wearer activates his roots for at least 8 hours each day, he does not need to sleep. The wearer's +4 bonus on saving throws for planting his roots now also applies to paralysis, poison, polymorph effects, sleep effects, and stun.</p>
<h3 id="rule-swi_heart-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/entangle">entangle</Link>, <Link to="/spell/plant_shape_iii">plant shape III</Link>, <Link to="/spell/warp_wood">warp wood</Link>; <strong>Cost</strong> 132,000 gp</p>
</>};
const _swi_heroic = {title: "Heroic Saddle", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> none; CL 8th; <strong>Weight</strong> 40 lbs.<br/><strong>Aura</strong> moderate abjuration; <strong>Price</strong> 6,000 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-swi_heroic-description">Description</h3>
<p>This elaborate military saddle is embellished with intricate tooling and a panoply of tassels, ribbons, and bells fit to announce a mighty hero's marvelous return. A new tassel, ribbon, or bell appears on the saddle after each victory. Whenever the rider of a mount wearing a heroic saddle is targeted with a conjuration (healing) effect, that effect also affects the mount. Use the rider's level to determine the scaling abilities of this item.</p>
<p><strong className="hl">10th Level:</strong> The mount gains a +1 resistance bonus on saving throws and a +1 deflection bonus to Armor Class.</p>
<p><strong className="hl">11th Level:</strong> Once per day as a full-round action, the rider of a mount wearing a heroic saddle can command the heroic saddle to grant the mount 1d8 + 10 temporary hit points. These temporary hit points last for 24 hours or until expended, and they do not stack with themselves but do stack with temporary hit points from other sources.</p>
<p><strong className="hl">13th Level:</strong> The saddle's bonuses on saving throws and to AC increase to +2.</p>
<p><strong className="hl">15th Level:</strong> The saddle's bonuses on saving throws and to AC increase to +3. When the rider commands the saddle to grant his mount temporary hit points, the rider also gains a number of temporary hit points equal to half the amount his mount gains.</p>
<h3 id="rule-swi_heroic-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/aid">aid</Link>, <Link to="/spell/resistance">resistance</Link>, <Link to="/spell/shield_other">shield other</Link>; <strong>Cost</strong> 18,000 gp</p>
</>};
const _swi_lantern = {title: "Lantern Pendant", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> neck; CL 4th; <strong>Weight</strong> -<br/><strong>Aura</strong> faint evocation; <strong>Price</strong> 1,000 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-swi_lantern-description">Description</h3>
<p>This small pendant of brass and glass is crafted in the shape of a lantern and continuously sheds light as a <Link to="/spell/light">light</Link> spell. As a move action, the wearer can open the miniature lantern pendant and direct the tiny phantasmal fire within to float to any point within 110 feet. This functions as <Link to="/spell/dancing_lights">dancing lights</Link>, but the wearer can create a number of lights equal to 1/2 his character level, up to a maximum of four, and can create only torch-like lights, not glowing spheres or humanoid shapes. While the <em>dancing lights</em> are active, the light of the lantern pendant itself is extinguished.</p>
<p><strong className="hl">6th Level:</strong> Once per day, the wearer can command the phantasmal fire to fly forth and limn all creatures in an area as <Link to="/spell/faerie_fire">faerie fire</Link>. Just as when using <em>dancing lights,</em> the pendant's light is extinguished throughout the duration.</p>
<p><strong className="hl">8th Level:</strong> The wearer can choose between <em>faerie fire</em> and <Link to="/spell/glitterdust">glitterdust</Link> (Will DC 13) when he uses the 6th-level ability.</p>
<p><strong className="hl">10th Level:</strong> Once per day, the wearer can focus the lantern's power, causing its light to increase from the <em>light</em> spell to the <Link to="/spell/daylight">daylight</Link> spell, with a duration as <em>daylight.</em> The <em>daylight</em> is suppressed whenever he activates any other ability that extinguishes the pendant's light, but such time still counts against its duration.</p>
<p><strong className="hl">13th Level:</strong> Once per day, the wearer can release the lantern's lights in the form of <Link to="/spell/wandering_star_motes">wandering star motes</Link> (Will DC 16). During the duration, the pendant's light is extinguished.</p>
<h3 id="rule-swi_lantern-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/dancing_lights">dancing lights</Link>, <em>daylight, faerie fire,</em> <Link to="/spell/light">light</Link>, <em>wandering star motes;</em> <strong>Cost</strong> 10,500 gp</p>
</>};
const _swi_mark = {title: "Mark of the Grinning Skull", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> headband; CL 8th; <strong>Weight</strong> 1 lb.<br/><strong>Aura</strong> moderate necromancy; <strong>Price</strong> 2,000 gp; <strong>Scaling</strong> bauble</p>
<h3 id="rule-swi_mark-description">Description</h3>
<p>An ebony skull adorns this tarnished silver band. When the wearer successfully demoralizes a creature with an Intimidate check, the penalties for being shaken increase by 2 on checks and rolls involving the wearer. For example, attacks made against the wearer and saves against her spells would take a -4 penalty rather than a -2 penalty.</p>
<p><strong className="hl">11th Level:</strong> Once per day, the wearer can attempt to frighten a creature with an Intimidate check instead of demoralizing it. She must declare she is doing so before attempting the Intimidate check. The penalty increase for checks and rolls involving the wearer also applies if the creature is frightened in this way.</p>
<p><strong className="hl">14th Level:</strong> The wearer can attempt to demoralize opponents as a move action instead of as a standard action. If the wearer can already do so because of the intimidating glare barbarian power or a similar ability, she can instead demoralize opponents as a swift action.</p>
<h3 id="rule-swi_mark-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/cause_fear">cause fear</Link>, <Link to="/spell/doom">doom</Link>; <strong>Cost</strong> 4,625 gp</p>
</>};
const _swi_mask = {title: "Mask of Mad Memories", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> head; CL 6th; <strong>Weight</strong> 1 lb.<br/><strong>Aura</strong> moderate divination; <strong>Price</strong> 2,500 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-swi_mask-description">Description</h3>
<p>This mask of malleable mithral can be attached to any helmet and worn in conjunction with it. The mask can be placed over the face of a helpless humanoid or monstrous humanoid creature, living or dead, and activated with a command word. The mask absorbs the creature's thoughts and memories and reshapes itself into the creature's likeness - a process that takes 10 minutes. Anyone wearing the mask after it has been activated gains a +5 competence bonus on Knowledge checks, Charisma checks, and Charisma-based skill checks relating to the creature whose memories were absorbed, including checks made to impersonate that creature.</p>
<p><strong className="hl">8th Level:</strong> The wearer can transform into the target creature's shape, as <Link to="/spell/disguise_self">disguise self</Link>. Additionally, 10 minutes after the command word is spoken, the mask can alter the target's memories as well as absorb them, as <Link to="/spell/modify_memory">modify memory</Link> (Will DC 17 negates).</p>
<p><strong className="hl">10th Level:</strong> The creature speaking the command can substitute <Link to="/spell/nightmare">nightmare</Link> for <em>modify memory,</em> with the same DC. Additionally, the mask's wearer can understand and read (but not speak) all languages the target creature knows.</p>
<p><strong className="hl">12th Level:</strong> The mask's wearer can also speak the languages the target creature knows. Additionally, she can attempt to pry the answers to specific questions from the absorbed memories once per day. Treat this as <Link to="/spell/speak_with_dead">speak with dead</Link> if the target creature was dead, and otherwise as <Link to="/spell/contact_other_plane">contact other plane</Link> to contact a creature from the Astral Plane with no chance of ability score decrease.</p>
<p><strong className="hl">14th Level:</strong> If the target creature is a humanoid, the wearer can take its form as <Link to="/spell/alter_self">alter self</Link> instead of <em>disguise self.</em></p>
<p><strong className="hl">17th Level:</strong> If the target creature is a Small or Medium monstrous humanoid, the wearer can take its form as <Link to="/spell/monstrous_physique_i">monstrous physique I</Link> instead of <em>disguise self.</em></p>
<h3 id="rule-swi_mask-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <em>alter self, contact other plane,</em> <Link to="/spell/detect_thoughts">detect thoughts</Link>, <Link to="/spell/disguise_self">disguise self</Link>, <Link to="/spell/modify_memory">modify memory</Link>, <Link to="/spell/monstrous_physique_1">monstrous physique</Link>, <Link to="/spell/nightmare">nightmare</Link>, <em>speak with dead,</em> <Link to="/spell/tongues">tongues</Link>; <strong>Cost</strong> 30,750 gp</p>
</>};
const _swi_necklace = {title: "Necklace of Infernos", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> neck; CL 10th; <strong>Weight</strong> -<br/><strong>Aura</strong> moderate evocation; <strong>Price</strong> 9,300 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-swi_necklace-description">Description</h3>
<p>This golden chain is strung with glowing red-golden spheres of various sizes. It does not count as an item worn around the neck for the purpose of determining which of a character's worn magic items is effective. It acts as a <Link to="/magic-wondrous/necklace_of_fireballs_type_i">necklace of fireballs (type I)</Link> with a 6d6 sphere instead of the 5d6 sphere. After a bead explodes, a tiny new sphere of the same type that exploded begins to bloom along the chain, growing in size and intensity over the course of 1 week, after which it is ready to detonate again.</p>
<p><strong className="hl">12th Level:</strong> The necklace acts as a necklace of fireballs (type II) with an additional 4d6 sphere.</p>
<p><strong className="hl">14th Level:</strong> The necklace acts as a necklace of fireballs (type IV) with a 9d6 sphere instead of the 8d6 sphere.</p>
<p><strong className="hl">16th Level:</strong> The necklace acts as a necklace of fireballs (type VII) with an additional 5d6 sphere.</p>
<p><strong className="hl">18th Level:</strong> The spheres grow back in 1 day instead of 1 week.</p>
<h3 id="rule-swi_necklace-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/fireball">fireball</Link>; <strong>Cost</strong> 39,750 gp</p>
</>};
const _swi_pearl = {title: "Pearl of Puissance", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> none; CL 5th; <strong>Weight</strong> -<br/><strong>Aura</strong> faint transmutation; <strong>Price</strong> 1,575 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-swi_pearl-description">Description</h3>
<p>This seemingly normal pearl of average size and luster holds the secret to endless magical power. It acts as a <Link to="/magic-wondrous/pearl_of_power_1st">pearl of power (1st level)</Link>, and the user gains a +1 bonus to her caster level when she casts the spell from the slot she recalled with the pearl.</p>
<p><strong className="hl">9th Level:</strong> The pearl acts as a pearl of power (2nd level).</p>
<p><strong className="hl">11th Level:</strong> The pearl acts as a pearl of power (3rd level).</p>
<p><strong className="hl">14th Level:</strong> The pearl acts as a pearl of power (5th level), but it grants the +1 caster level bonus only if used to recall a spell of 4th level or lower.</p>
<p><strong className="hl">15th Level:</strong> The pearl acts as a pearl of power (6th level), but it grants the +1 caster level bonus only if used to recall a spell of 5th level or lower.</p>
<p><strong className="hl">16th Level:</strong> The pearl acts as a pearl of power (7th level), but it grants the +1 caster level bonus only if used to recall a spell of 6th level or lower.</p>
<p><strong className="hl">17th Level:</strong> The pearl acts as a pearl of power (8th level), but it grants the +1 caster level bonus only if used to recall a spell of 7th level or lower.</p>
<p><strong className="hl">19th Level:</strong> The pearl acts as a pearl of power (9th level), but it grants the +1 caster level bonus only if used to recall a spell of 8th level or lower. Alternatively, the pearl can act as a pearl of power (two spells), but when used in this way, it doesn't provide a caster level boost.</p>
<h3 id="rule-swi_pearl-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, creator must be able to cast 9th-level spells; <strong>Cost</strong> 51,375 gp</p>
</>};
const _swi_pouch = {title: "Pouch of Pixie Dust", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> none; CL 1st; <strong>Weight</strong> 1 lb.<br/><strong>Aura</strong> faint transmutation; <strong>Price</strong> 15 gp; <strong>Scaling</strong> bauble</p>
<h3 id="rule-swi_pouch-description">Description</h3>
<p>This delicate pouch contains sparkling dust of various iridescent colors. The owner can withdraw the dust and use it as an unlimited supply of normal colorful powder. She always withdraws powder of the color she desires.</p>
<p><strong className="hl">4th Level:</strong> Once per day, the owner can imbue the pixie dust she draws from the pouch with fey power to reveal the unseen. This functions as <Link to="/spell/faerie_fire">faerie fire</Link> with a 1-minute duration, but she must throw the powder as a thrown weapon with a range increment of 10 feet against an AC of 5 to hit the correct grid intersection. On a miss, treat the dust as a splash weapon to determine the center of the effect.</p>
<p><strong className="hl">6th Level:</strong> The owner can use the <em>faerie fire</em> ability three times per day.</p>
<p><strong className="hl">8th Level:</strong> The owner can use the <em>faerie fire</em> ability at will.</p>
<p><strong className="hl">10th Level:</strong> The owner can increase the power of the pixie dust once per day, producing a <Link to="/spell/glitterdust">glitterdust</Link> effect (Will DC 13 negates the blindness) for 3 rounds. She must throw the powder as a thrown weapon with a range increment of 10 feet against an AC of 5 to hit the correct grid intersection. On a miss, treat the dust as a splash weapon to determine the center of the effect.</p>
<p><strong className="hl">13th Level:</strong> The owner can use the <em>glitterdust</em> ability three times per day.</p>
<p><strong className="hl">15th Level:</strong> The owner can sprinkle the pixie dust on herself or an adjacent willing target once per day, granting the target the ability to fly (as the <Link to="/spell/fly">fly</Link> spell) for 5 minutes.</p>
<p><strong className="hl">18th Level:</strong> The owner can use the fly ability three times per day, and she can also throw the pixie dust to grant <em>fly</em> to a non-adjacent target. To hit a willing non-adjacent target with the pixie dust, she must throw the dust as a thrown weapon with a range increment of 10 feet and hit an AC of 5 + any modifiers that add to both the target's flat-footed and touch AC, such as deflection bonuses and cover bonuses. On a miss, treat the dust as a splash weapon; if there are creatures in the resulting square, randomly determine which creature in that square is targeted by the <em>fly</em> effect.</p>
<h3 id="rule-swi_pouch-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/faerie_fire">faerie fire</Link>, <em>fly,</em> <Link to="/spell/glitterdust">glitterdust</Link>; <strong>Cost</strong> 13,250 gp</p>
</>};
const _swi_robe = {title: "Robe of the Faerie Queen", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> body; CL 6th; <strong>Weight</strong> 1 lb.<br/><strong>Aura</strong> moderate transmutation; <strong>Price</strong> 4,800 gp; <strong>Scaling</strong> wonder</p>
<h3 id="rule-swi_robe-description">Description</h3>
<p>When donned, this sheer, sleeved robe fades to near invisibility. It grants the wearer a +4 competence bonus on Bluff, Diplomacy, Intimidate, and Sense Motive checks against fey. On command, the mantle glows in delicate <Link to="/spell/faerie_fire">faerie fire</Link> of any color of the wearer's choice, and a second command word ends the glow.</p>
<p><strong className="hl">8th Level:</strong> The mantle magnifies and sharpens the wearer's beauty such that her +4 competence bonus now applies on all Charisma checks, Charisma-based skill checks, and Sense Motive checks against any creature. Against fey, the bonus increases to +6.</p>
<p><strong className="hl">10th Level:</strong> The mantle's wearer becomes manipulative and eloquent in social situations. Whenever she converses with creatures, she can insert a <Link to="/spell/suggestion">suggestion</Link> (Will DC 14 negates) for every 10 minutes of conversation by succeeding at a DC 14 Perform (oratory) check. If she ever fails the Perform (oratory) check to use this ability, all creatures who witnessed her misstep are immune to this ability for 24 hours.</p>
<p><strong className="hl">12th Level:</strong> Once per day, the wearer can release the glow within the mantle in a single coruscating burst of color. This blinds creatures in a 10-foot radius (Reflex DC 19 negates) for 1d4 rounds and completely dispels any darkness spells of 6th level or lower whose source is within its area.</p>
<p><strong className="hl">14th Level:</strong> The wearer grows a pair of gossamer wings. The wings are delicate and weak, carrying the wearer only with difficulty. She gains a fly speed of 30 feet (poor maneuverability).</p>
<p><strong className="hl">16th Level:</strong> The wearer's wings grow stronger, more agile, and more beautiful, and iridescent patterns trace along them. Her fly speed increases to 60 feet (good maneuverability), and she gains a +5 competence bonus on Fly checks.</p>
<p><strong className="hl">18th Level:</strong> The wearer gains a small domain in the fey realm. She can access her domain from any location, creating a silvery gateway. Treat her domain as a <Link to="/spell/mages_magnificent_mansion">mage's magnificent mansion</Link> except that its size equals 20 10-foot cubes/level, the domain appears as wilderness instead of a mansion, and the servants are tiny fey instead of nearly transparent liveried servants.</p>
<p><strong className="hl">20th Level:</strong> The wearer's type changes to <Link to="/type/fey">fey</Link>, and she gains DR 10/cold iron. If the wearer's type was already fey and she already possessed DR/cold iron, her DR increases by 10 and magic weapons with enhancement bonuses of +3 or greater do not count as cold iron for the purpose of bypassing her DR.</p>
<h3 id="rule-swi_robe-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/eagles_splendor">eagle's splendor</Link>, <Link to="/spell/faerie_fire">faerie fire</Link>, <Link to="/spell/fly">fly</Link>, <em>mage's magnificent mansion,</em> <Link to="/spell/sunburst">sunburst</Link>, <Link to="/spell/suggestion">suggestion</Link>, creator must be fey; <strong>Cost</strong> 132,000 gp</p>
</>};
const _swi_spectacles = {title: "Spectacles of Thought-Seeing", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> eyes; CL 7th; <strong>Weight</strong> -<br/><strong>Aura</strong> moderate divination; <strong>Price</strong> 3,600 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-swi_spectacles-description">Description</h3>
<p>The wearer of these ornate crystal lenses gains a +6 competence bonus on Sense Motive checks. When she uses Sense Motive to determine whether someone is lying to her, she gets a brief flash of the liar's thoughts at that instant.</p>
<p><strong className="hl">9th Level:</strong> When the wearer concentrates, she can perceive the thoughts of a single creature as writing in the air, rendered in the subject's native language. This functions as though the wearer had concentrated on the creature for 3 rounds using <Link to="/spell/detect_thoughts">detect thoughts</Link>, and can be blocked with a successful Will save with a DC equal to the wearer's character level + 6 (to a maximum DC of 20). A creature that succeeds at its save can't be affected again for 24 hours. Maintaining concentration requires a standard action each round (as for a spell), and once the wearer ceases concentrating on a creature, she cannot observe thoughts again for 1 minute. This ability can be used for a total of 5 minutes per day. These minutes do not need to be consecutive, but must be used in 1-minute increments. The glasses fail to function against creatures with an Intelligence score of 2 or lower or without a written language.</p>
<p><strong className="hl">11th Level:</strong> The competence bonus on Sense Motive checks increases to +8. The <em>detect thoughts</em> effect can be used for 10 minutes per day. In addition to seeing the creature's thoughts in its native language, the wearer gets visual impressions of the creature's thoughts. She might see the face of someone the creature is thinking about, for instance, or see an image of that creature stabbing someone if it's planning an attack.</p>
<p><strong className="hl">13th Level:</strong> The competence bonus on Sense Motive checks increases to +10. The <em>detect thoughts</em> effect is constant - the wearer no longer needs to concentrate to maintain it, and there is no longer a limit on the number of rounds per day.</p>
<h3 id="rule-swi_spectacles-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <em>detect thoughts,</em> creator must have 10 ranks in Sense Motive; <strong>Cost</strong> 15,250 gp</p>
</>};
const _swi_star = {title: "Star of Vision", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> eyes; CL 11th; <strong>Weight</strong> -<br/><strong>Aura</strong> moderate divination; <strong>Price</strong> 14,400 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-swi_star-description">Description</h3>
<p>When touched to an eye, this star-shaped gem affixes itself until willingly removed or pried from an unconscious wearer. On command, the wearer can share her vision of her surroundings with allies within 60 feet. This gives them the benefit of any special visual sense she has (such as <Link to="/spell/darkvision">darkvision</Link> or <Link to="/spell/see_invisibility">see invisibility</Link>) and even allows blind allies to see, assuming the wearer is not herself blind. This effect lasts for 1 minute, and once used, can't be activated again for 30 minutes. While the effect is active, an ally of the wearer can switch back and forth at will between sharing the wearer's vision and seeing through his own eyes.</p>
<p><strong className="hl">12th Level:</strong> The shared senses effect lasts for 10 minutes. While sharing senses, the wearer automatically discovers the number and location of secret doors in a 60-foot cone in front of her, as though she had been studying the area for 2 rounds with <Link to="/spell/detect_secret_doors">detect secret doors</Link>. (This effect doesn't grant any of the other benefits of <em>detect secret doors.</em>)</p>
<p><strong className="hl">14th Level:</strong> While sharing senses, the wearer gains the benefit of <em>see invisibility.</em></p>
<p><strong className="hl">16th Level:</strong> Once per day, when the wearer activates the star of vision, she gains the benefit of <Link to="/spell/true_seeing">true seeing</Link> for the duration of the effect.</p>
<h3 id="rule-swi_star-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <em>detect secret doors,</em> <Link to="/spell/see_invisibility">see invisibility</Link>, <Link to="/spell/telepathic_bond">telepathic bond</Link>, <em>true seeing;</em> <strong>Cost</strong> 23,625 gp</p>
</>};
const _swi_stargazers = {title: "Stargazer's Glass", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> none; CL 7th; <strong>Weight</strong> 1 lb.<br/><strong>Aura</strong> moderate divination; <strong>Price</strong> 1,250 gp; <strong>Scaling</strong> bauble</p>
<h3 id="rule-swi_stargazers-description">Description</h3>
<p>This spyglass grants enhanced vision of celestial bodies and the movements of the cosmos in the dark of night. Anyone looking through the spyglass gains a +5 competence bonus on skill checks to learn about the movements of the heavens or the constellations. These are typically Knowledge (nature) checks.</p>
<p><strong className="hl">9th Level:</strong> Objects viewed through the spyglass are magnified to 4 times their size instead of 2 times their size. This ability functions at all times, not just at night.</p>
<p><strong className="hl">11th Level:</strong> Looking through the spyglass also grants the viewer low-light vision at night, and objects viewed through the spyglass are magnified to 6 times their size.</p>
<p><strong className="hl">13th Level:</strong> While outdoors at night and looking through the stargazer's glass, the user can increase the range of a spell she casts of the pattern subschool or with the light descriptor as if using the <Link to="/feat/reach_spell">Reach Spell</Link> metamagic feat. She increases the spell's range by one category - from touch to close range, close to medium range, or medium to long range - without increasing the spell's level. This ability can be used once per night. Objects viewed through the spyglass are magnified to 8 times their size.</p>
<p><strong className="hl">15th Level:</strong> The user can extend the range of the spell by two categories instead of one. Objects viewed through the spyglass are magnified to 10 times their size.</p>
<h3 id="rule-swi_stargazers-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, Reach Spell, <Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link>, <Link to="/spell/keen_senses">keen senses</Link>; <strong>Cost</strong> 6,000 gp</p>
</>};
const _swi_strand = {title: "Strand of Many Prayer Beads", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> none; CL 4th; <strong>Weight</strong> 1/2 lb.<br/><strong>Aura</strong> faint (many schools); <strong>Price</strong> 900 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-swi_strand-description">Description</h3>
<p>This item appears to be a simple string of prayer beads until the owner casts a divine spell while carrying the beads. Once that occurs, she learns how to activate one of the strand's special beads - a <Link to="/magic-wondrous/strand_of_prayer_beads_lesser">bead of blessing</Link> - to cast <Link to="/spell/bless">bless</Link> once per day.</p>
<p><strong className="hl">9th Level:</strong> The owner can also activate the strand's bead of healing to cast <Link to="/spell/cure_serious_wounds">cure serious wounds</Link> once per day.</p>
<p><strong className="hl">10th Level:</strong> The owner can also activate the strand's bead of healing to cast <Link to="/spell/remove_blindness_deafness">remove blindness/deafness</Link> or <Link to="/spell/remove_disease">remove disease</Link> instead of <em>cure serious wounds.</em></p>
<p><strong className="hl">14th Level:</strong> The owner can also activate the strand's bead of smiting to cast <Link to="/spell/chaos_hammer">chaos hammer</Link>, <Link to="/spell/holy_smite">holy smite</Link>, <Link to="/spell/orders_wrath">order's wrath</Link>, or <Link to="/spell/unholy_blight">unholy blight</Link> (whichever was used to craft the item) once per day.</p>
<p><strong className="hl">16th Level:</strong> The owner can also activate the strand's bead of karma to cast her spells with a +4 caster level bonus for 10 minutes once per day.</p>
<p><strong className="hl">19th Level:</strong> The owner can also activate the strand's bead of wind walking to cast <Link to="/spell/wind_walk">wind walk</Link> once per day.</p>
<h3 id="rule-swi_strand-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/bless">bless</Link>, <Link to="/spell/cure_serious_wounds">cure serious wounds</Link>, <Link to="/spell/remove_blindness_deafness">remove blindness/deafness</Link>, <Link to="/spell/remove_disease">remove disease</Link>, <Link to="/spell/righteous_might">righteous might</Link>, <em>wind walk,</em> and either <em>chaos hammer, holy smite, order's wrath,</em> or <em>unholy blight;</em> <strong>Cost</strong> 51,375 gp</p>
</>};
const _swi_vest_golden = {title: "Vest of Golen Leaves", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> chest; CL 6th; <strong>Weight</strong> 4 lbs.<br/><strong>Aura</strong> moderate transmutation; <strong>Price</strong> 2,400 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-swi_vest_golden-description">Description</h3>
<p>This garment is lined with gilded leaves, magically preserved in their autumnal splendor. The leaves retain this natural appearance in urban areas or natural settings other than forests or wooded areas. When the wearer is in a forest environment, the vest's leaves change to match the local flora. As long as the wearer moves no more than half her base speed in a given round, she gains a +4 bonus on Stealth checks and can attempt Stealth checks without cover or concealment. Each time the wearer attacks, the leaves turn blood red, negating this effect for 1 minute.</p>
<p><strong className="hl">8th Level:</strong> Once per day, the wearer can detach one of the leaves of the garment and send it floating toward a location she specifies, borne on the wind but otherwise identical in effect to an <Link to="/spell/animal_messenger">animal messenger</Link>.</p>
<p><strong className="hl">11th Level:</strong> Once per day, the wearer can either assume <Link to="/spell/tree_shape">tree shape</Link> or transform herself into a cloud of leaves floating, falling, and swirling about in a mass the same size as the wearer's actual body. This leaf form is equivalent to <Link to="/spell/gaseous_form">gaseous form</Link>, but the wearer also gains vulnerability to fire.</p>
<p><strong className="hl">13th Level:</strong> The wearer can, in place of using either of the vest's 11th-level abilities, choose to release a number of leaves equal to 1/2 her Hit Dice as remote magical sensors. These leaves are identical in effect to <Link to="/spell/prying_eyes">prying eyes</Link>, except that they have vulnerability to fire.</p>
<p><strong className="hl">16th Level:</strong> The leaves warp and distort the wearer's location as <Link to="/spell/blur">blur</Link>, providing a 20% miss chance.</p>
<p><strong className="hl">20th Level:</strong> The wearer can step into any tree that possesses leaves and out of another tree of the same kind that also possesses leaves, as <Link to="/spell/tree_stride">tree stride</Link>. She can use this ability a number of times per day equal to her Hit Dice.</p>
<h3 id="rule-swi_vest_golden-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/arcane_eye">arcane eye</Link>, <Link to="/spell/blend">blend</Link>, <em>blur,</em> <Link to="/spell/command_plants">command plants</Link>, <em>prying eyes,</em> <Link to="/spell/tree_shape">tree shape</Link>, <em>tree stride;</em> <strong>Cost</strong> 66,000 gp</p>
</>};
const _swi_vest_eldritch = {title: "Vest of Eldritch Preservation", parent_topics: ["optional_magic_changes","scaling_items","scaling_item_examples","scaling_wondrous_items"], siblings: ["swi_arachnid","swi_bag","swi_bat","swi_beaker","swi_boots_readiness","swi_boots_elven_spirit","swi_bracelets","swi_brutish","swi_cloak","swi_cord","swi_crystal","swi_dragon","swi_eternal","swi_filthy","swi_flask","swi_force","swi_forgemasters","swi_fruitful","swi_galvanic","swi_glorious","swi_gloves","swi_heart","swi_heroic","swi_lantern","swi_mark","swi_mask","swi_necklace","swi_pearl","swi_pouch","swi_robe","swi_spectacles","swi_star","swi_stargazers","swi_strand","swi_vest_golden","swi_vest_eldritch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 168</Link></p>
<p><strong>Slot</strong> chest; CL 9th; <strong>Weight</strong> 1 lb.<br/><strong>Aura</strong> moderate abjuration; <strong>Price</strong> 8,000 gp; <strong>Scaling</strong> prize</p>
<h3 id="rule-swi_vest_eldritch-description">Description</h3>
<p>Woven of aranea silk, this vest grants potent protection against spells that would warp the wearer's mind or body. Its wearer gains a +2 bonus on saving throws against curses, enchantments, and transmutations.</p>
<p><strong className="hl">11th Level:</strong> Once per day, the wearer can remove the shaken or sickened condition from himself or an ally with a touch. This is a standard action, or a swift action if he cures himself. In addition, the wearer can't be compelled to keep a cursed item. This doesn't prevent the cursed item's effects, but does allow the wearer to freely discard the item.</p>
<p><strong className="hl">13th Level:</strong> Once per day as an immediate action, the wearer can use <Link to="/spell/break_enchantment">break enchantment</Link> against an effect that has just taken hold of him, even if the effect causes him to lose consciousness or control of his actions. Only a single effect can be targeted by this use of <em>break enchantment.</em> This protection can be recharged by casting <em>break enchantment</em> on the vest.</p>
<p><strong className="hl">15th Level:</strong> The conditions the wearer can remove with a touch now also include cursed (as <Link to="/spell/remove_curse">remove curse</Link>), dazed, and frightened.</p>
<h3 id="rule-swi_vest_eldritch-construction-requirements">Construction Requirements</h3>
<p><Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <em>break enchantment;</em> <strong>Cost</strong> 18,000 gp</p>
</>};
const _legacy_items = {title: "Legacy Items", parent_topics: ["optional_magic_changes"], siblings: ["dynamic_magic_item_creation","esoteric_material_components","relics","scaling_items","legacy_items","simplified_spellcasting","words_of_power"], jsx: <><p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 20</Link></p>
<p>Whether members of professionally acquisitive organizations such as the <Link to="/rule/pathfinder_society">Pathfinder Society</Link> or simply amateur treasure hunters, adventurers dream of discovering powerful relics wielded by legendary figures from the murky past. While these might be simple artifacts or heirlooms, some rare items are infused by the mighty deeds of their former owners, and an adventurer lucky enough to recover such items could unlock their hidden potential should their own exploits prove worthy. Legacy items work much like the <Link to="/rule/scaling_items">scaling items</Link> introduced in <em>Pathfinder Unchained,</em> save that each has a unique reward ability unlocked by attaining a goal related to the item's original owner. These items represent famous possessions of specific individuals from the history of Golarion, so unlike typical magic items, they cannot be crafted, though they can still be destroyed normally.</p>
<p>Legacy items can be found under <Link to="/main/magic_misc">Miscellaneous Magic Items</Link>.</p>
<h3 id="rule-legacy_items-purchasing-legacy-items">Purchasing Legacy Items</h3>
<p>Though legacy items are not intended for purchase, some GMs may wish to allow their PCs to purchase these items. In this case, GMs should look to the <em>scaling items</em> section to more accurately determine the price. Alternatively, GMs can instead use the following quick pricing rules.</p>
<p>An item that requires a slot has a price of 3,000 gp, a set of armor or shield has a price of 4,000 gp, a weapon has a price of 5,000 gp, and a slotless item has a price of 6,000 gp. The price is increased for each ability that would be active at the PC's current level, with each ability adding 1,000 gp times the ability's level. Finally, the total price of the legacy item is increased by 50% to pay for the reward ability. A PC would need to pay for abilities as they unlock them. For example, the <Link to="/magic-legacy/ring_of_sealed_souls">ring of sealed souls</Link> would cost 11,000 gp for an 8th-level PC (3,000 gp base price plus 8,000 gp for the 8th-level ability) and she would have to pay 5,500 gp if she were to accomplish the item's goal to unlock that ability. She would then pay 11,000 gp to unlock the 11th-level ability, and so on.</p>
</>};
export default {scaling_items:_scaling_items,adjusting_treasure:_adjusting_treasure,maximum_level:_maximum_level,mismatched_levels:_mismatched_levels,buying_and_selling_scaling_items:_buying_and_selling_scaling_items,crafting_scaling_items:_crafting_scaling_items,pricing_new_scaling_items:_pricing_new_scaling_items,standalone_new_scaling_items:_standalone_new_scaling_items,scaling_item_examples:_scaling_item_examples,scaling_magic_armor_and_shields:_scaling_magic_armor_and_shields,scaling_magic_weapons:_scaling_magic_weapons,scaling_magic_weapons_legacy_arrow:_scaling_magic_weapons_legacy_arrow,scaling_magic_weapons_multimetal_mace:_scaling_magic_weapons_multimetal_mace,scaling_magic_weapons_sacred_avenger:_scaling_magic_weapons_sacred_avenger,scaling_magic_weapons_spear_of_the_huntsman:_scaling_magic_weapons_spear_of_the_huntsman,scaling_magic_weapons_thirsting_blade:_scaling_magic_weapons_thirsting_blade,scaling_rings:_scaling_rings,scaling_rings_fivefold:_scaling_rings_fivefold,scaling_rings_flame:_scaling_rings_flame,scaling_rings_forest:_scaling_rings_forest,scaling_rings_frost:_scaling_rings_frost,scaling_rings_sea:_scaling_rings_sea,scaling_rings_earthlord:_scaling_rings_earthlord,scaling_rings_trickster:_scaling_rings_trickster,scaling_rods:_scaling_rods,scaling_staves:_scaling_staves,scaling_wondrous_items:_scaling_wondrous_items,swi_arachnid:_swi_arachnid,swi_bag:_swi_bag,swi_bat:_swi_bat,swi_beaker:_swi_beaker,swi_boots_readiness:_swi_boots_readiness,swi_boots_elven_spirit:_swi_boots_elven_spirit,swi_bracelets:_swi_bracelets,swi_brutish:_swi_brutish,swi_cloak:_swi_cloak,swi_cord:_swi_cord,swi_crystal:_swi_crystal,swi_dragon:_swi_dragon,swi_eternal:_swi_eternal,swi_filthy:_swi_filthy,swi_flask:_swi_flask,swi_force:_swi_force,swi_forgemasters:_swi_forgemasters,swi_fruitful:_swi_fruitful,swi_galvanic:_swi_galvanic,swi_glorious:_swi_glorious,swi_gloves:_swi_gloves,swi_heart:_swi_heart,swi_heroic:_swi_heroic,swi_lantern:_swi_lantern,swi_mark:_swi_mark,swi_mask:_swi_mask,swi_necklace:_swi_necklace,swi_pearl:_swi_pearl,swi_pouch:_swi_pouch,swi_robe:_swi_robe,swi_spectacles:_swi_spectacles,swi_star:_swi_star,swi_stargazers:_swi_stargazers,swi_strand:_swi_strand,swi_vest_golden:_swi_vest_golden,swi_vest_eldritch:_swi_vest_eldritch,legacy_items:_legacy_items}