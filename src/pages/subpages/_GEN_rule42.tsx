import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
const _optional_pc_advancement_changes = {title: "Optional PC Advancement Changes", subtopics: ["automatic_bonus_progression","innate_item_bonuses","fractional_base_bonuses","staggered_advancement","variant_multiclassing"], jsx: <><p>These topics cover optional rules that change the way combat works.</p>
</>};
const _automatic_bonus_progression = {title: "Automatic Bonus Progression", parent_topics: ["optional_pc_advancement_changes"], siblings: ["automatic_bonus_progression","innate_item_bonuses","fractional_base_bonuses","staggered_advancement","variant_multiclassing"], subtopics: ["bonuses","magic_weapons_and_armor"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 156</Link></p>
<p>In order to face the dangers of the game, characters in the Pathfinder RPG normally need items that grant bonuses to their statistics. With this variant, characters instead gain those bonuses automatically as they increase in level, allowing them to use magic item slots for more interesting items.</p>
<p>All characters gain the abilities listed on the table below when they reach the appropriate level. Decrease character <Link to="/rule/placing_treasure">wealth by level</Link> to half the normal amount. The automatic bonuses are often more beneficial than that reduction in wealth, but characters have less flexibility, so the advantages and disadvantages balance out. Items that only grant bonuses to AC, saving throws, and ability scores don't exist in this variant, and wish and similar spells never grant inherent bonuses to ability scores. Magic weapons and armor do exist, but grant only special abilities, not enhancement bonuses; calculate their prices with the table in the <Link to="/rule/magic_weapons_and_armor">Magic Weapons and Armor section</Link>.</p>
<p>If you want to remove magic items entirely (or make them so exceedingly rare that there is no expectation of finding them), consider giving the characters bonuses from the following table as if they were 2 levels higher. The table extends to 22nd level to account for games without magic items.</p>
<ScrollContainer id="rule-automatic_bonus_progression--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Bonus Gained</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>Resistance +1</td>
</tr>
<tr>
<td>4th</td>
<td>Armor attunement +1, weapon attunement +1</td>
</tr>
<tr>
<td>5th</td>
<td>Deflection +1</td>
</tr>
<tr>
<td>6th</td>
<td>Mental prowess +2</td>
</tr>
<tr>
<td>7th</td>
<td>Physical prowess +2</td>
</tr>
<tr>
<td>8th</td>
<td>Armor attunement +1/+1, resistance +2, toughening +1, weapon attunement +1/+1</td>
</tr>
<tr>
<td>9th</td>
<td>Armor attunement +2, weapon attunement +2</td>
</tr>
<tr>
<td>10th</td>
<td>Deflection +2, resistance +3</td>
</tr>
<tr>
<td>11th</td>
<td>Mental prowess +4</td>
</tr>
<tr>
<td>12th</td>
<td>Physical prowess +4</td>
</tr>
<tr>
<td>13th</td>
<td>Mental prowess +4/+2, physical prowess +4/+2, resistance +4, toughening +2</td>
</tr>
<tr>
<td>14th</td>
<td>Armor attunement +2/+2 or +3, resistance +5, weapon attunement +2/+2 or +3</td>
</tr>
<tr>
<td>15th</td>
<td>Armor attunement +3/+3 or +4, mental prowess +6/+2 or +4/+4, weapon attunement +3/+3 or +4</td>
</tr>
<tr>
<td>16th</td>
<td>Deflection +3, physical prowess +6/+2 or +4/+4, toughening +3</td>
</tr>
<tr>
<td>17th</td>
<td>Armor attunement +4/+3 or +5, deflection +4, mental prowess +6/+2/+2 or +4/+4/+2, physical prowess +6/+2/+2 or +4/+4/+2, toughening +4, weapon attunement +4/+3 or +5</td>
</tr>
<tr>
<td>18th</td>
<td>Deflection +5, mental prowess +6/+4/+2 or +4/+4/+4, physical prowess +6/+4/+2 or +4/+4/+4, toughening +5</td>
</tr>
<tr>
<td>19th</td>
<td>3 legendary gifts</td>
</tr>
<tr>
<td>20th</td>
<td>5 legendary gifts (8 total)</td>
</tr>
<tr>
<td>21st</td>
<td>7 legendary gifts (15 total)</td>
</tr>
<tr>
<td>22nd</td>
<td>8 legendary gifts (23 total)</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _bonuses = {title: "Bonuses", parent_topics: ["optional_pc_advancement_changes","automatic_bonus_progression"], siblings: ["bonuses","magic_weapons_and_armor"], subtopics: ["armor_attunement","deflection","legendary_gifts","mental_prowess","physical_prowess","resistance","toughening","weapon_attunement"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 156</Link></p>
<p>The entries below describe the bonuses characters gain.</p>
</>};
const _armor_attunement = {title: "Armor Attunement", parent_topics: ["optional_pc_advancement_changes","automatic_bonus_progression","bonuses"], siblings: ["armor_attunement","deflection","legendary_gifts","mental_prowess","physical_prowess","resistance","toughening","weapon_attunement"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 156</Link></p>
<p>The character can attune herself to one suit of armor or one shield in her possession; she can change that attunement once per day. If she selects a normal set of clothing as her armor, it counts as having a starting enhancement bonus of +0. The attuned suit of armor gains a +1 enhancement bonus at 4th level. At 8th level, she can split her attunement between a suit of armor and a shield, granting each a +1 enhancement bonus. At 9th level, she can grant a suit of armor or a shield a +2 enhancement bonus (instead of granting each a +1 enhancement bonus). At 14th level, she can either grant a suit of armor or a shield a +3 enhancement bonus or grant each a +2 enhancement bonus. At 15th level, she can either grant a suit of armor or a shield a +4 enhancement bonus or grant both a +3 enhancement bonus. At 17th level, she can either grant a suit of armor or a shield a +5 enhancement bonus or grant one a +4 enhancement bonus and the other a +3 enhancement bonus.</p>
</>};
const _deflection = {title: "Deflection", parent_topics: ["optional_pc_advancement_changes","automatic_bonus_progression","bonuses"], siblings: ["armor_attunement","deflection","legendary_gifts","mental_prowess","physical_prowess","resistance","toughening","weapon_attunement"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 156</Link></p>
<p>The character gains a +1 deflection bonus to AC at 5th level; this bonus increases to +2 at 10th level, to +3 at 16th level, to +4 at 17th level, and to +5 at 18th level.</p>
</>};
const _legendary_gifts = {title: "Legendary Gifts", parent_topics: ["optional_pc_advancement_changes","automatic_bonus_progression","bonuses"], siblings: ["armor_attunement","deflection","legendary_gifts","mental_prowess","physical_prowess","resistance","toughening","weapon_attunement"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 156</Link></p>
<p>The character gains three legendary gifts at 19th level and five more at 20th level. (If you're using the variant with no magic treasure, characters gain seven more legendary gifts when their effective level reaches 21 and eight more when it reaches 22.) Select these legendary gifts from the following list.</p>
<p><strong className="hl">Legendary Ability:</strong> Gain a +1 inherent bonus to any ability score. You can select this legendary gift multiple times, and it stacks up to +5 in any one ability score.</p>
<p><strong className="hl">Legendary Armor:</strong> Your enhancement bonus from armor attunement increases by 2. If you are attuned to a suit of armor and a shield, you can either increase both bonuses by 1 or increase one bonus by 2. The enhancement bonus on a single attuned item can't exceed +5, but you can use the excess to add special abilities to the armor or shield (see <Link to="/rule/magic_weapons_and_armor">Magic Weapons and Armor</Link>. You can select this legendary gift multiple times; it stacks up to +10 on any one suit of armor or shield.</p>
<p><strong className="hl">Legendary Body:</strong> Increase your bonuses from physical prowess to +6/+6/+4. This counts as two legendary gifts.</p>
<p><strong className="hl">Legendary Body 2:</strong> Increase your bonuses from physical prowess to +6/+6/+6. You must already have legendary body to select this legendary gift.</p>
<p><strong className="hl">Legendary Mind:</strong> Increase your bonuses from mental prowess to +6/+6/+4. This counts as two legendary gifts.</p>
<p><strong className="hl">Legendary Mind 2:</strong> Increase your bonuses from mental prowess to +6/+6/+6. You must already have legendary mind to select this legendary gift.</p>
<p><strong className="hl">Legendary Shieldmaster:</strong> Gain a +5 enhancement bonus from armor attunement for both your armor and your shield. You can select this legendary gift multiple times, choosing a different attuned suit of armor or shield each time.</p>
<p><strong className="hl">Legendary Twin Weapons:</strong> Gain a +5 enhancement bonus from weapon attunement for two weapons at the same time. This counts as two legendary gifts. You can select this legendary gift multiple times, adding an additional attuned weapon with a +5 enhancement bonus each time.</p>
<p><strong className="hl">Legendary Weapon:</strong> Your enhancement bonus from weapon attunement increases by 1. If you are attuned to more than one weapon, you can increase only one weapon's enhancement bonus in this way. The enhancement bonus on a single weapon can't exceed +5, but you can use the excess to add magic abilities to weapons (see <Link to="/rule/magic_weapons_and_armor">Magic Weapons and Armor</Link>, below). You can select this legendary gift multiple times, and it stacks up to +10 for any one weapon.</p>
</>};
const _mental_prowess = {title: "Mental Prowess", parent_topics: ["optional_pc_advancement_changes","automatic_bonus_progression","bonuses"], siblings: ["armor_attunement","deflection","legendary_gifts","mental_prowess","physical_prowess","resistance","toughening","weapon_attunement"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 157</Link></p>
<p>At 6th level, the character chooses one mental ability score (Intelligence, Wisdom, or Charisma) to gain a permanent +2 enhancement bonus. At 11th level, this bonus increases to +4. At 13th level, the character chooses a second mental ability score to gain a permanent +2 enhancement bonus. At 15th level, the character increases one of these enhancement bonuses by 2. At 17th level, she chooses a third mental ability score to gain a permanent +2 enhancement bonus.</p>
</>};
const _physical_prowess = {title: "Physical Prowess", parent_topics: ["optional_pc_advancement_changes","automatic_bonus_progression","bonuses"], siblings: ["armor_attunement","deflection","legendary_gifts","mental_prowess","physical_prowess","resistance","toughening","weapon_attunement"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 157</Link></p>
<p>At 7th level, the character chooses one physical ability score (Strength, Dexterity, or Constitution) to gain a permanent +2 enhancement bonus. At 12th level, this bonus increases to +4. At 13th level, the character chooses a second physical ability score to gain a permanent +2 enhancement bonus. At 16th level, the character increases one of these enhancement bonuses by 2. At 17th level, she chooses a third physical ability score to gain a permanent +2 enhancement bonus.</p>
</>};
const _resistance = {title: "Resistance", parent_topics: ["optional_pc_advancement_changes","automatic_bonus_progression","bonuses"], siblings: ["armor_attunement","deflection","legendary_gifts","mental_prowess","physical_prowess","resistance","toughening","weapon_attunement"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 157</Link></p>
<p>At 3rd level, the character gains a +1 resistance bonus on all saving throws. This bonus increases to +2 at 8th level, to +3 at 10th level, to +4 at 13th level, and to +5 at 14th level.</p>
</>};
const _toughening = {title: "Toughening", parent_topics: ["optional_pc_advancement_changes","automatic_bonus_progression","bonuses"], siblings: ["armor_attunement","deflection","legendary_gifts","mental_prowess","physical_prowess","resistance","toughening","weapon_attunement"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 157</Link></p>
<p>At 8th level, the character gains a +1 enhancement bonus to natural armor. This bonus increases to +2 at 13th level, to +3 at 16th level, to +4 at 17th level, and to +5 at 18th level.</p>
</>};
const _weapon_attunement = {title: "Weapon Attunement", parent_topics: ["optional_pc_advancement_changes","automatic_bonus_progression","bonuses"], siblings: ["armor_attunement","deflection","legendary_gifts","mental_prowess","physical_prowess","resistance","toughening","weapon_attunement"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 157</Link></p>
<p>The character can attune herself to any one weapon in her possession, and can change that attunement once per day. The attuned weapon gains a +1 enhancement bonus at 4th level. At 8th level, the character can split her attunement between two weapons, granting each a +1 enhancement bonus. At 9th level, she can grant a single weapon a +2 enhancement bonus instead of granting two weapons a +1 enhancement bonus each. At 14th level, she can either grant a single weapon a +3 enhancement bonus or grant two weapons a +2 enhancement bonus each. At 15th level, she can either grant a single weapon a +4 enhancement bonus or grant two weapons a +3 enhancement bonus each. At 17th level, she can either grant a single weapon a +5 enhancement bonus or grant one weapon a +4 enhancement bonus and another weapon a +3 enhancement bonus.</p>
</>};
const _magic_weapons_and_armor = {title: "Magic Weapons and Armor", parent_topics: ["optional_pc_advancement_changes","automatic_bonus_progression"], siblings: ["bonuses","magic_weapons_and_armor"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 157</Link></p>
<p>In this system, magic weapons, armor, and shields never have enhancement bonuses of their own; those bonuses are granted only through attunement. Any weapon, armor, or shield special abilities on attuned items count against a character's enhancement bonus from attunement. To determine an attuned magic item's enhancement bonus, subtract the cost of its special ability from the enhancement bonus granted by attunement. (This applies only to special abilities whose cost is equivalent to an enhancement bonus, not to those that cost a flat amount of gold pieces.) For example, if a character with a +3 enhancement bonus from weapon attunement wields a <Link to="/magic-enh/keen">keen</Link> scimitar, she subtracts 1 point of her enhancement bonus (for the cost of keen), leaving her with a +2 keen scimitar. If a character doesn't have enough of an enhancement bonus to afford the special ability (such as a 4th-level character with a <Link to="/magic-enh/vorpal">vorpal</Link> longsword), she can still use the weapon's power on its own, but the weapon gains no enhancement bonus.</p>
<p>In this system, adding bonus-equivalent special abilities to items costs significantly less because you are paying only for the special ability, not for a base enhancement bonus (see the table below). To determine the price of specific weapons and armor, remove the flat enhancement bonus and reduce the item's cost by the amount listed on the table below. For example, a <Link to="/magic-weapon/flame_tongue">flame tongue</Link> is normally worth 20,715 gp, but under this system, it would lose its +1 enhancement bonus and its price would be reduced to 18,715 gp. Specific weapons and armor can be attuned; they then grant the character's enhancement bonuses from weapon attunement and armor attunement as normal.</p>
<ScrollContainer id="rule-magic_weapons_and_armor--table-0"><table>
<thead>
<tr>
<th>Base Price Modifier</th>
<th>Weapon Cost</th>
<th>Armor/Shield Cost</th>
</tr>
</thead>
<tbody><tr>
<td>+1</td>
<td>2,000 gp</td>
<td>1,000 gp</td>
</tr>
<tr>
<td>+2</td>
<td>8,000 gp</td>
<td>4,000 gp</td>
</tr>
<tr>
<td>+3</td>
<td>18,000 gp</td>
<td>9,000 gp</td>
</tr>
<tr>
<td>+4</td>
<td>32,000 gp</td>
<td>16,000 gp</td>
</tr>
<tr>
<td>+5</td>
<td>50,000 gp</td>
<td>25,000 gp</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _innate_item_bonuses = {title: "Innate Item Bonuses", parent_topics: ["optional_pc_advancement_changes"], siblings: ["automatic_bonus_progression","innate_item_bonuses","fractional_base_bonuses","staggered_advancement","variant_multiclassing"], subtopics: ["wondrous_items_pu","rings_pu","arms_and_armor"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 158</Link></p>
<p>Some GMs may find themselves frustrated by the need for players to seek out magic items granting specific bonuses. Under this new system, characters gain the statistical bonuses they're expected to gain from magic items as they level up so long as they have any item in the relevant slot, instead of needing specific items. The system involves minimal alterations to existing items, and works especially well for campaigns with higher than normal wealth.</p>
<p>The rules in the <Link to="/rule/automatic_bonus_progression">Automatic Bonus Progression section</Link> downplay the role of magic items by granting bonuses to characters directly as they increase in level, and restricting the abilities of magic items. However, those rules don't work as well as the innate item bonuses system does in games that include more magic items than is assumed in the Core Rulebook. In addition, this system helps those GMs who prefer to emphasize the wonder and power of magic items.</p>
<h3 id="rule-innate_item_bonuses-bonus-and-price-overview">Bonus and Price Overview</h3>
<p>In this system, the bonus a magic item grants corresponds to the item's starting market price as it appears in the item's original statistics. This price is shown on each table in this section in the "Starting Price" column. The second column shows the value of the bonus at a particular price range, and the header indicates to which statistics the bonus applies. In addition, any item that gains an innate item bonus also increases its market price by the amount shown on each table's "Price Increase" column.</p>
<p>For example, a belt of dwarvenkind isn't a popular choice, since players typically want a belt of giant strength +4 or similar item for close to the same price. When using innate bonuses, items such as the belt of giant strength - which only grants an enhancement bonus - wouldn't exist, and the belt of dwarvenkind would count as a body slot item (see the <Link to="/rule/wondrous_items_pu">Altered Item Slots section under Wondrous Items</Link>). Since it costs 14,900 gp in the Core Rulebook, it would grant a +2 bonus to two ability scores in addition to its usual effects, and cost an additional 10,000 gp, for a total of 24,900 gp.</p>
<p>The price increase means that a significant range of prices doesn't come into play in a campaign that uses this system. For example, if a neck slot item would normally have a base market price of 2,000 gp, it would now grant an additional +1 enhancement bonus to natural armor, and its price would increase by 2,000 gp. That means a neck slot item can't have a final price between 2,000 gp and 3,999 gp. If you need treasure at a value in that range, look at items that don't grant innate bonuses.</p>
<p>To use this system, institute the following changes.</p>
</>};
const _wondrous_items_pu = {title: "Wondrous Items", parent_topics: ["optional_pc_advancement_changes","innate_item_bonuses"], siblings: ["wondrous_items_pu","rings_pu","arms_and_armor"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 158</Link></p>
<p>Most items that grant bonuses to statistics fall into the wondrous items category.</p>
<p><strong className="hl">Removed Items:</strong> Remove all amulets of natural armor, cloaks of resistance, and items that grant enhancement bonuses to ability scores.</p>
<p><strong className="hl">Altered Item Slots:</strong> Remove the belt and headband slots. For the remaining items in those slots (those that do not grant enhancement bonuses), move all belt slot items to the body slot and all headband slot items to the head slot. This alteration reduces the total number of magic item slots, and does mean that some items that could normally be worn in tandem can't in this system.</p>
<p><strong className="hl">Ability Changes:</strong> If the table specifies that an item grants enhancement bonuses to ability scores, the wearer can change the associated ability scores by removing an item and then putting it back on. This causes the new bonus to become temporary for 24 hours. All items capable of granting an Intelligence bonus increase the bonus of a preset skill, just like a <Link to="/magic-wondrous/headband_of_vast_intelligence">headband of vast intelligence</Link>. <Link to="/magic-wondrous/amulet_of_mighty_fists">Amulets of mighty fists</Link> and <Link to="/magic-wondrous/bracers_of_armor">bracers of armor</Link> follow the rules for weapons and armor; this means it is possible to make more powerful (+10 equivalent) <em>amulets of mighty fists</em> and <em>bracers of armor</em> than before.</p>
<h3 id="rule-wondrous_items_pu-table-4-8-body-slot-items">Table 4-8: Body Slot Items</h3>
<ScrollContainer id="rule-wondrous_items_pu--table-0"><table>
<thead>
<tr>
<th>Starting Price</th>
<th>Enhancement Bonus to Physical Ability Scores</th>
<th>Price Increase</th>
</tr>
</thead>
<tbody><tr>
<td>0-3,999 gp</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4,000-9,999 gp</td>
<td>+2 to one score</td>
<td>+4,000 gp</td>
</tr>
<tr>
<td>10,000-15,999 gp</td>
<td>+2 to two scores</td>
<td>+10,000 gp</td>
</tr>
<tr>
<td>16,000-35,999 gp</td>
<td>+4 to one score, or +2 to all three</td>
<td>+16,000 gp</td>
</tr>
<tr>
<td>36,000-39,999 gp</td>
<td>6 to one score, or +4 to one and +2 to two others</td>
<td>+36,000 gp</td>
</tr>
<tr>
<td>40,000-63,999 gp</td>
<td>Any choice above, or +4 to two scores</td>
<td>+40,000 gp</td>
</tr>
<tr>
<td>64,000-89,999 gp</td>
<td>+6 to one score and +4 to another, or +4 to all three</td>
<td>+64,000 gp</td>
</tr>
<tr>
<td>90,000-143,999 gp</td>
<td>+6 to two scores, or +6 to one and +4 to two others</td>
<td>+90,000 gp</td>
</tr>
<tr>
<td>144,000+ gp</td>
<td>+6 to all three scores</td>
<td>+144,000 gp</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-wondrous_items_pu-table-4-9-head-slot-items">Table 4-9: Head Slot Items</h3>
<ScrollContainer id="rule-wondrous_items_pu--table-1"><table>
<thead>
<tr>
<th>Starting Price</th>
<th>Enhancement Bonus to Mental Ability Scores</th>
<th>Price Increase</th>
</tr>
</thead>
<tbody><tr>
<td>0-3,999 gp</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4,000-9,999 gp</td>
<td>+2 to one score</td>
<td>+4,000 gp</td>
</tr>
<tr>
<td>10,000-15,999 gp</td>
<td>+2 to two scores</td>
<td>+10,000 gp</td>
</tr>
<tr>
<td>16,000-35,999 gp</td>
<td>+4 to one score, or +2 to all three</td>
<td>+16,000 gp</td>
</tr>
<tr>
<td>36,000-39,999 gp</td>
<td>6 to one score, or +4 to one and +2 to two others</td>
<td>+36,000 gp</td>
</tr>
<tr>
<td>40,000-63,999 gp</td>
<td>Any choice above, or +4 to two scores</td>
<td>+40,000 gp</td>
</tr>
<tr>
<td>64,000-89,999 gp</td>
<td>+6 to one score and +4 to another, or +4 to all three</td>
<td>+64,000 gp</td>
</tr>
<tr>
<td>90,000-143,999 gp</td>
<td>+6 to two scores, or +6 to one and +4 to two others</td>
<td>+90,000 gp</td>
</tr>
<tr>
<td>144,000+ gp</td>
<td>+6 to all three scores</td>
<td>+144,000 gp</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-wondrous_items_pu-table-4-10-neck-slot-items">Table 4-10: Neck Slot Items</h3>
<ScrollContainer id="rule-wondrous_items_pu--table-2"><table>
<thead>
<tr>
<th>Starting Price</th>
<th>Enhancement Bonus to Natural Armor</th>
<th>Price Increase</th>
</tr>
</thead>
<tbody><tr>
<td>0-1,999 gp</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2,000-7,999 gp</td>
<td>+1</td>
<td>+2,000 gp</td>
</tr>
<tr>
<td>8,000-17,999 gp</td>
<td>+2</td>
<td>+8,000 gp</td>
</tr>
<tr>
<td>18,000-31,999 gp</td>
<td>+3</td>
<td>+18,000 gp</td>
</tr>
<tr>
<td>32,000-49,999 gp</td>
<td>+4</td>
<td>+32,000 gp</td>
</tr>
<tr>
<td>50,000+ gp</td>
<td>+5</td>
<td>+50,000 gp</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-wondrous_items_pu-table-4-11-shoulder-slot-items">Table 4-11: Shoulder Slot Items</h3>
<ScrollContainer id="rule-wondrous_items_pu--table-3"><table>
<thead>
<tr>
<th>Starting Price</th>
<th>Resistance Bonus on Saving Throws</th>
<th>Price Increase</th>
</tr>
</thead>
<tbody><tr>
<td>0-999 gp</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>1,000-3,999 gp</td>
<td>+1</td>
<td>+1,000 gp</td>
</tr>
<tr>
<td>4,000-8,999 gp</td>
<td>+2</td>
<td>+4,000 gp</td>
</tr>
<tr>
<td>9,000-15,999 gp</td>
<td>+3</td>
<td>+9,000 gp</td>
</tr>
<tr>
<td>16,000-24,999 gp</td>
<td>+4</td>
<td>+16,000 gp</td>
</tr>
<tr>
<td>25,000+ gp</td>
<td>+5</td>
<td>+25,000 gp</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _rings_pu = {title: "Rings", parent_topics: ["optional_pc_advancement_changes","innate_item_bonuses"], siblings: ["wondrous_items_pu","rings_pu","arms_and_armor"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 159</Link></p>
<p>Rings work in much the same way as wondrous items.</p>
<p><strong className="hl">Removed Items:</strong> Remove all <Link to="/magic-ring/ring_of_protection_1">rings of protection</Link>, and add the deflection bonus specified on Table 4-12: Rings to all other rings.</p>
<p><strong className="hl">Multiple Rings:</strong> Note that deflection bonuses granted by multiple rings don't stack. It's up to the GM to decide how to deal with this, with two main options. The first option is to follow the rule outlined above and charge the price increase for each ring - consider the additional cost the price of essentially getting a third ring slot. The other option is to make the deflection bonus granted by rings (and the associated price increases) optional on a ring-by-ring basis, allowing characters to avoid paying twice for a non-stacking bonus. Doing so adds additional bookkeeping, however.</p>
<h3 id="rule-rings_pu-table-4-12-rings">Table 4-12: Rings</h3>
<ScrollContainer id="rule-rings_pu--table-0"><table>
<thead>
<tr>
<th>Starting Price</th>
<th>Deflection Bonus to AC</th>
<th>Price Increase</th>
</tr>
</thead>
<tbody><tr>
<td>0-1,999 gp</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2,000-7,999 gp</td>
<td>+1</td>
<td>+2,000 gp</td>
</tr>
<tr>
<td>8,000-17,999 gp</td>
<td>+2</td>
<td>+8,000 gp</td>
</tr>
<tr>
<td>18,000-31,999 gp</td>
<td>+3</td>
<td>+18,000 gp</td>
</tr>
<tr>
<td>32,000-49,999 gp</td>
<td>+4</td>
<td>+32,000 gp</td>
</tr>
<tr>
<td>50,000+ gp</td>
<td>+5</td>
<td>+50,000 gp</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _arms_and_armor = {title: "Arms and Armor", parent_topics: ["optional_pc_advancement_changes","innate_item_bonuses"], siblings: ["wondrous_items_pu","rings_pu","arms_and_armor"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 159</Link></p>
<p>Under this system, weapons and armor are not forged with pure enhancement bonuses, and don't need to have a +1 enhancement bonus to have a special ability. Instead, add up the effective enhancement bonus for the item's special abilities, then assign the total to the item as its new enhancement bonus on attack and damage rolls. To find the new price, multiply the total cost of its original special abilities - not counting the new enhancement bonus - by 4.</p>
<p>For example, the <Link to="/magic-enh/keen">keen</Link> ability is equivalent to a +1 bonus and would normally cost 2,000 gp. Under these rules, a keen falchion would gain a +1 bonus on top of its keen ability, and the cost would become 8,000 gp. A keen <Link to="/magic-enh/holy">holy</Link> falchion, on the other hand, normally costs 18,000 gp and has abilities equivalent to a +3 bonus, so it would gain a +3 enhancement bonus on top of its abilities and cost 72,000 gp instead.</p>
</>};
const _fractional_base_bonuses = {title: "Multiclass Fractional Base Bonuses", parent_topics: ["optional_pc_advancement_changes"], siblings: ["automatic_bonus_progression","innate_item_bonuses","fractional_base_bonuses","staggered_advancement","variant_multiclassing"], subtopics: ["base_attack_bonus","base_save_bonus","bonuses_by_level"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 40</Link></p>
<p>Multiclass characters in the core rules are at a slight disadvantage when it comes to their statistics. This fractional base bonuses variant is designed to help multiclass characters fulfill their true potential and stand tall among their single-class peers. It is ideal for campaigns featuring many multiclass characters, particularly if those characters take levels in many different classes or prestige classes.</p>
<p>Base attack bonuses and base save bonuses in the Core Rulebook progress at a fractional rate, but those fractions are eliminated because of rounding; it doesn't make sense to distinguish a base attack bonus of +6-1/2 from a base attack bonus of +6 when a character with either bonus would hit AC 17 on a roll of 11 and miss on a 10. For ease of reference, the values in the class tables are rounded this way since it never makes a difference for single-class characters. However, for multiclass characters, this rounding often results in a base attack bonus that's too low, as well as base save bonuses that are imbalanced. The following variant results in more accurate base bonuses for multiclass characters, based on the formulas behind the class progression tables rather than on the tables themselves.</p>
<p>For example, a character who's a 1st-level wizard and a 1st-level rogue has a base attack bonus (BAB) of +0 from each class, resulting in a total BAB of +0 - worse than a 2nd-level wizard or 2nd-level rogue. But that's only because each fraction was rounded down to 0 before adding them together; the character theoretically has a BAB of +3/4 from her rogue level and +1/2 from her wizard level. If the rounding was done after adding the fractional values together rather than before, the character would have a BAB of +1 (rounded down from +1-1/4) - the same as a 2nd-level wizard or rogue.</p>
<h3 id="rule-fractional_base_bonuses-table-1-7-fractional-bonuses-by-class-level">Table 1-7: Fractional Bonuses by Class Level</h3>
<ScrollContainer id="rule-fractional_base_bonuses--table-0"><table>
<thead>
<tr>
<th>Class Level</th>
<th>Base Save Bonus (Good)*</th>
<th>Base Save Bonus (Poor)</th>
<th>Base Attack Bonus (d10 or d12)</th>
<th>Base Attack Bonus (d8)</th>
<th>Base Attack Bonus (d6)</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+1/2</td>
<td>+1/3</td>
<td>+1</td>
<td>+3/4</td>
<td>+1/2</td>
</tr>
<tr>
<td>2nd</td>
<td>+1</td>
<td>+2/3</td>
<td>+2</td>
<td>+1-1/2</td>
<td>+1</td>
</tr>
<tr>
<td>3rd</td>
<td>+1-1/2</td>
<td>+1</td>
<td>+3</td>
<td>+2-1/4</td>
<td>+1-1/2</td>
</tr>
<tr>
<td>4th</td>
<td>+2</td>
<td>+1-1/3</td>
<td>+4</td>
<td>+3</td>
<td>+2</td>
</tr>
<tr>
<td>5th</td>
<td>+2-1/2</td>
<td>+1-2/3</td>
<td>+5</td>
<td>+3-3/4</td>
<td>+2-1/2</td>
</tr>
<tr>
<td>6th</td>
<td>+3</td>
<td>+2</td>
<td>+6</td>
<td>+4-1/2</td>
<td>+3</td>
</tr>
<tr>
<td>7th</td>
<td>+3-1/2</td>
<td>+2-1/3</td>
<td>+7</td>
<td>+5-1/4</td>
<td>+3-1/2</td>
</tr>
<tr>
<td>8th</td>
<td>+4</td>
<td>+2-2/3</td>
<td>+8</td>
<td>+6</td>
<td>+4</td>
</tr>
<tr>
<td>9th</td>
<td>+4-1/2</td>
<td>+3</td>
<td>+9</td>
<td>+6-3/4</td>
<td>+4-1/2</td>
</tr>
<tr>
<td>10th</td>
<td>+5</td>
<td>+3-1/3</td>
<td>+10</td>
<td>+7-1/2</td>
<td>+5</td>
</tr>
<tr>
<td>11th</td>
<td>+5-1/2</td>
<td>+3-2/3</td>
<td>+11</td>
<td>+8-1/4</td>
<td>+5-1/2</td>
</tr>
<tr>
<td>12th</td>
<td>+6</td>
<td>+4</td>
<td>+12</td>
<td>+9</td>
<td>+6</td>
</tr>
<tr>
<td>13th</td>
<td>+6-1/2</td>
<td>+4-1/3</td>
<td>+13</td>
<td>+9-3/4</td>
<td>+6-1/2</td>
</tr>
<tr>
<td>14th</td>
<td>+7</td>
<td>+4-2/3</td>
<td>+14</td>
<td>+10-1/2</td>
<td>+7</td>
</tr>
<tr>
<td>15th</td>
<td>+7-1/2</td>
<td>+5</td>
<td>+15</td>
<td>+11-1/4</td>
<td>+7-1/2</td>
</tr>
<tr>
<td>16th</td>
<td>+8</td>
<td>+5-1/3</td>
<td>+16</td>
<td>+12</td>
<td>+8</td>
</tr>
<tr>
<td>17th</td>
<td>+8-1/2</td>
<td>+5-2/3</td>
<td>+17</td>
<td>+12-3/4</td>
<td>+8-1/2</td>
</tr>
<tr>
<td>18th</td>
<td>+9</td>
<td>+6</td>
<td>+18</td>
<td>+13-1/2</td>
<td>+9</td>
</tr>
<tr>
<td>19th</td>
<td>+9-1/2</td>
<td>+6-1/3</td>
<td>+19</td>
<td>+14-1/4</td>
<td>+9-1/2</td>
</tr>
<tr>
<td>20th</td>
<td>+10</td>
<td>+6-2/3</td>
<td>+20</td>
<td>+15</td>
<td>+10</td>
</tr>
</tbody></table></ScrollContainer>
<p>*If at least one of the character's classes has a <Link to="/misc/good_saving_throws">good saving throw</Link> progression for the save in question, add 2 to the total save bonus.</p>
</>};
const _base_attack_bonus = {title: "Base Attack Bonus", parent_topics: ["optional_pc_advancement_changes","fractional_base_bonuses"], siblings: ["base_attack_bonus","base_save_bonus","bonuses_by_level"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 40</Link></p>
<p>There are three base attack bonus progressions. For classes with a d6 Hit Die, their BAB increases by 1/2 per level. For classes with a d8 Hit Die, their BAB increases by 3/4 per level. For classes with a d10 or d12 Hit Die, their BAB increases by 1 per level (so it's not necessary to round the BAB for these classes). A multiclass character's base attack bonus will only ever improve using this variant.</p>
<p>For example, a character who's a 2nd-level rogue and a 9th-level wizard would have a BAB of +5 in the core rules: +1 from her rogue levels and +4 from her wizard levels. Using the fractional system, that character's BAB would be +6, with +1-1/2 from her rogue levels and +4-1/2 from her wizard levels - enough for her to gain a second attack at a +1 bonus.</p>
</>};
const _base_save_bonus = {title: "Base Save Bonus", parent_topics: ["optional_pc_advancement_changes","fractional_base_bonuses"], siblings: ["base_attack_bonus","base_save_bonus","bonuses_by_level"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 40</Link></p>
<p>There are only two base saving throw progressions: good and poor. Good saves progress at a rate of +1/2 per level, while poor saves progress at +1/3 per level. Additionally, saving throw bonuses with a good saving throw progression start higher, effectively incorporating an additional +2 bonus. Under the core rules, this additional bonus stacks between classes, letting a character who's a 1st-level barbarian and a 1st-level fighter have a +4 Fortitude save bonus while his Reflex and Will saves stagnate. However, this higher initial saving throw bonus is intended to act like the +3 bonus received on a class skill: you should get it only once for a particular type of saving throw, regardless of the number of classes in which you have levels. Under this variant, the +2 bonus at 1st level to a good save no longer stacks between classes, so a character's strongest saves are sometimes decreased. However, the improvements to that character's weakest saves usually make up the difference, and such characters are much less likely to leap ahead of (or fall dramatically behind) their single-class peers.</p>
<p>When calculating each saving throw bonus, first determine whether each class you have levels in grants a good or poor saving throw progression for that type of save. To tell whether a class has a good or poor save progression for a particular saving throw, look at the 1st-level saving throw bonus it receives for that save in the core rules. If the bonus is +2, the class has a good save progression for that type of save. If it's +0, the class has a poor save progression for that type of save. Next, for each class, find the value in Table 1-7: Fractional Bonuses by Level corresponding to your level in that class and whether the saving throw progression is good or poor. Add the values from all your classes; if you have a good saving throw progression from at least one class, add 2 to the total (this is a one-time increase and doesn't stack).</p>
<p>For example, in a standard game, a character who's a 5th-level cleric and a 2nd-level fighter would have a Fortitude base save bonus of +7, a Reflex base save bonus of +1, and a Will base save bonus of +4. In this variant, the same character would have a Fortitude base save bonus of +5 (rounded down from +5-1/2), a Reflex base save bonus of +2 (rounded down from +2-1/3), and a Will base save bonus of +5 (rounded down from +5-1/6).</p>
<p>In the core Pathfinder rules, prestige classes advance at the same rate as base classes but have different class bonuses. These adjusted bonuses were meant to compensate for the leftover fractions from the character's base classes, since the only way to gain a prestige class is via multiclassing - taking levels in both your original class and the prestige class - or racial Hit Dice. Because fractional base bonuses already account for those fractions, instead use the base save bonuses from Table 1-7 just as you would for any other class. To tell whether a prestige class has a good or poor save progression for a saving throw, look at the 1st-level saving throw bonuses it receives for that save. If the bonus is +1, it has a good save progression. If it's +0, it has a poor save progression.</p>
</>};
const _bonuses_by_level = {title: "Bonuses by Level", parent_topics: ["optional_pc_advancement_changes","fractional_base_bonuses"], siblings: ["base_attack_bonus","base_save_bonus","bonuses_by_level"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 41</Link></p>
<p>The table above presents fractional values for the base save and base attack bonuses. To determine the total base save bonus or base attack bonus of a multiclass character, calculate the fractional values for each of the character's classes using the table and add them together.</p>
<p>This rule affects only multiclass characters, and such characters will have a number of attacks depending on their combined base attack bonuses from several classes. For this reason, the table does not list the multiple attacks gained by characters with a BAB of +6 or greater. Just remember that a second attack is gained when a character's total BAB reaches +6, a third at +11, and a fourth at +16, just as normal. For a character who's an 11th-level fighter and a 9th-level rogue, adding a BAB of +11 to a BAB of +6-3/4 yields a BAB of +17 (rounded down from +17-3/4), with additional attacks with BABs of +12, +7, and +2, respectively.</p>
</>};
const _staggered_advancement = {title: "Staggered Advancement", parent_topics: ["optional_pc_advancement_changes"], siblings: ["automatic_bonus_progression","innate_item_bonuses","fractional_base_bonuses","staggered_advancement","variant_multiclassing"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 42</Link></p>
<p>When increasing in level, characters often gain new abilities and powers seemingly overnight. The following advancement variant allows you to add some verisimilitude to the way in which your characters grow in power. Instead of gaining all your new abilities when you advance to the next level, you divide them among four XP tiers: 25%, 50%, 75%, and 100%. Each XP tier represents a specific percentage of the XP required to advance to the next level.</p>
<h3 id="rule-staggered_advancement-using-staggered-advancement">Using Staggered Advancement</h3>
<p>First, select the class in which you'll gain your next level. You must meet all the prerequisites for that class level. Whenever you reach a new XP tier, gain the appropriate universal abilities and skill ranks for that class as detailed in Table 1-8: Staggered Advancement. Your feat, ability score, and spell progressions remain unchanged.</p>
<p><strong className="hl">Universal Abilities:</strong> Universal abilities include your selected class's base attack bonus, hit points (hp), and saving throw bonuses. At the 25%, 50%, and 75% XP tiers, you can select one of the following options.</p>
<blockquote>
<p><strong className="hl">Base Attack Bonus:</strong> Increase your selected class's base attack bonus (if applicable).</p>
<p><strong className="hl">Hit Points:</strong> Determine the number of hit points you would gain for advancing to the next level in your class and add 50% of those hit points (rounding down) to your hit point maximum. When you advance fully to the next level of your selected class, add the remaining hit points.</p>
<p><strong className="hl">Saving Throw Bonuses:</strong> Increase your class's saving throw bonuses (if applicable).</p>
</blockquote>
<p>Each of the above options can only be selected once per level. Additionally, the base attack bonuses and saving throw bonuses of some classes don't increase each time they advance in level. If only one universal ability is applicable, incorporate it at the 75% tier. If two are applicable, incorporate one at the 50% tier and the other at the 75% tier (your choice).</p>
<p><strong className="hl">Class Features:</strong> Characters gain all class features upon reaching the next level.</p>
<p><strong className="hl">Skill Ranks:</strong> Determine the total number of skill ranks you would gain for advancing to the next level in your selected class, and allocate 50% of the skill ranks (rounding down) when you reach the 50% XP tier. When you advance fully to the next level, you can spend the remaining skill ranks.</p>
<p>The following table assumes you are using the medium XP advancement track. If you use the fast or slow XP advancement track, you can use this table as a model from which to extrapolate the XP requirements for each XP tier.</p>
<h3 id="rule-staggered_advancement-table-1-8-staggered-advancement">Table 1-8: Staggered Advancement</h3>
<ScrollContainer id="rule-staggered_advancement--table-0"><table>
<thead>
<tr>
<th>Character Level</th>
<th>XP</th>
<th>XP Tier</th>
<th>Universal Abilities</th>
<th>Class Abilities</th>
<th>Skill Ranks</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>0</td>
<td>-</td>
<td>As standard rules for a 1st-level character</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td></td>
<td>500</td>
<td>25%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td></td>
<td>1,000</td>
<td>50%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>50%</td>
</tr>
<tr>
<td></td>
<td>1,500</td>
<td>75%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>2,000</td>
<td>-</td>
<td>Remaining 50% of hp</td>
<td>All</td>
<td>Remaining 50%</td>
</tr>
<tr>
<td></td>
<td>2,750</td>
<td>25%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td></td>
<td>3,500</td>
<td>50%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>50%</td>
</tr>
<tr>
<td></td>
<td>4,250</td>
<td>75%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>5,000</td>
<td>-</td>
<td>Remaining 50% of hp</td>
<td>All</td>
<td>Remaining 50%</td>
</tr>
<tr>
<td></td>
<td>6,000</td>
<td>25%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td></td>
<td>7,000</td>
<td>50%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>50%</td>
</tr>
<tr>
<td></td>
<td>8,000</td>
<td>75%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>9,000</td>
<td>-</td>
<td>Remaining 50% of hp</td>
<td>All</td>
<td>Remaining 50%</td>
</tr>
<tr>
<td></td>
<td>10,500</td>
<td>25%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td></td>
<td>12,000</td>
<td>50%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>50%</td>
</tr>
<tr>
<td></td>
<td>13,500</td>
<td>75%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>15,000</td>
<td>-</td>
<td>Remaining 50% of hp</td>
<td>All</td>
<td>Remaining 50%</td>
</tr>
<tr>
<td></td>
<td>17,000</td>
<td>25%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td></td>
<td>19,000</td>
<td>50%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>50%</td>
</tr>
<tr>
<td></td>
<td>21,000</td>
<td>75%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>23,000</td>
<td>-</td>
<td>Remaining 50% of hp</td>
<td>All</td>
<td>Remaining 50%</td>
</tr>
<tr>
<td></td>
<td>26,000</td>
<td>25%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td></td>
<td>29,000</td>
<td>50%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>50%</td>
</tr>
<tr>
<td></td>
<td>32,000</td>
<td>75%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>35,000</td>
<td>-</td>
<td>Remaining 50% of hp</td>
<td>All</td>
<td>Remaining 50%</td>
</tr>
<tr>
<td></td>
<td>39,000</td>
<td>25%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td></td>
<td>43,000</td>
<td>50%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>50%</td>
</tr>
<tr>
<td></td>
<td>47,000</td>
<td>75%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>51,000</td>
<td>-</td>
<td>Remaining 50% of hp</td>
<td>All</td>
<td>Remaining 50%</td>
</tr>
<tr>
<td></td>
<td>57,000</td>
<td>25%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td></td>
<td>63,000</td>
<td>50%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>50%</td>
</tr>
<tr>
<td></td>
<td>69,000</td>
<td>75%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>75,000</td>
<td>-</td>
<td>Remaining 50% of hp</td>
<td>All</td>
<td>Remaining 50%</td>
</tr>
<tr>
<td></td>
<td>82,500</td>
<td>25%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td></td>
<td>90,000</td>
<td>50%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>50%</td>
</tr>
<tr>
<td></td>
<td>97,500</td>
<td>75%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>105,000</td>
<td>-</td>
<td>Remaining 50% of hp</td>
<td>All</td>
<td>Remaining 50%</td>
</tr>
<tr>
<td></td>
<td>117,500</td>
<td>25%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td></td>
<td>130,000</td>
<td>50%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>50%</td>
</tr>
<tr>
<td></td>
<td>142,500</td>
<td>75%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>155,000</td>
<td>-</td>
<td>Remaining 50% of hp</td>
<td>All</td>
<td>Remaining 50%</td>
</tr>
<tr>
<td></td>
<td>171,250</td>
<td>25%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td></td>
<td>187,500</td>
<td>50%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>50%</td>
</tr>
<tr>
<td></td>
<td>203,750</td>
<td>75%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>220,000</td>
<td>-</td>
<td>Remaining 50% of hp</td>
<td>All</td>
<td>Remaining 50%</td>
</tr>
<tr>
<td></td>
<td>243,7500</td>
<td>25%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td></td>
<td>267,500</td>
<td>50%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>50%</td>
</tr>
<tr>
<td></td>
<td>291,250</td>
<td>75%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>315,000</td>
<td>-</td>
<td>Remaining 50% of hp</td>
<td>All</td>
<td>Remaining 50%</td>
</tr>
<tr>
<td></td>
<td>347,500</td>
<td>25%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td></td>
<td>380,000</td>
<td>50%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>50%</td>
</tr>
<tr>
<td></td>
<td>412,500</td>
<td>75%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>445,000</td>
<td>-</td>
<td>Remaining 50% of hp</td>
<td>All</td>
<td>Remaining 50%</td>
</tr>
<tr>
<td></td>
<td>492,500</td>
<td>25%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td></td>
<td>540,000</td>
<td>50%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>50%</td>
</tr>
<tr>
<td></td>
<td>587,500</td>
<td>75%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>635,000</td>
<td>-</td>
<td>Remaining 50% of hp</td>
<td>All</td>
<td>Remaining 50%</td>
</tr>
<tr>
<td></td>
<td>698,750</td>
<td>25%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td></td>
<td>762,500</td>
<td>50%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>50%</td>
</tr>
<tr>
<td></td>
<td>826,250</td>
<td>75%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>890,000</td>
<td>-</td>
<td>Remaining 50% of hp</td>
<td>All</td>
<td>Remaining 50%</td>
</tr>
<tr>
<td></td>
<td>992,500</td>
<td>25%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td></td>
<td>1,095,000</td>
<td>50%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>50%</td>
</tr>
<tr>
<td></td>
<td>1,197,500</td>
<td>75%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>1,300,000</td>
<td>-</td>
<td>Remaining 50% of hp</td>
<td>All</td>
<td>Remaining 50%</td>
</tr>
<tr>
<td></td>
<td>1,425,000</td>
<td>25%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td></td>
<td>1,550,000</td>
<td>50%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>50%</td>
</tr>
<tr>
<td></td>
<td>1,675,000</td>
<td>75%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>18th</td>
<td>1,800,000</td>
<td>-</td>
<td>Remaining 50% of hp</td>
<td>All</td>
<td>Remaining 50%</td>
</tr>
<tr>
<td></td>
<td>1,987,500</td>
<td>25%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td></td>
<td>2,175,000</td>
<td>50%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>50%</td>
</tr>
<tr>
<td></td>
<td>2,362,500</td>
<td>75%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>19th</td>
<td>2,550,000</td>
<td>-</td>
<td>Remaining 50% of hp</td>
<td>All</td>
<td>Remaining 50%</td>
</tr>
<tr>
<td></td>
<td>2,812,500</td>
<td>25%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td></td>
<td>3,075,000</td>
<td>50%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>50%</td>
</tr>
<tr>
<td></td>
<td>3,337,500</td>
<td>75%</td>
<td>BAB, 50% hp, or saves</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>20th</td>
<td>3,600,000</td>
<td>-</td>
<td>Remaining 50% of hp</td>
<td>All</td>
<td>Remaining 50%</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _variant_multiclassing = {title: "Variant Multiclassing", parent_topics: ["optional_pc_advancement_changes"], siblings: ["automatic_bonus_progression","innate_item_bonuses","fractional_base_bonuses","staggered_advancement","variant_multiclassing"], subtopics: ["core_classes","base_classes_pu"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 88</Link></p>
<p>Under the core rules, multiclassing can lead to a wide disparity in character ability. With this system, each character can choose a secondary class at 1st level that she trains in throughout her career, without giving up levels in her primary class. Once selected, this choice is permanent (though if using the <Link to="/rule/retraining">retraining rules</Link>, the secondary class can be retrained by paying half the cost of retraining all her class levels). A character who selects this option doesn't gain feats at 3rd, 7th, 11th, 15th, and 19th levels, but instead gains class features from her secondary class as described on Table 2-8: Multiclass Character Advancement. It is probably a good idea to use either this variant system or normal multiclassing, but it's possible for the two systems to be used together. In a game using both systems, a character can't take levels in the secondary class she gains from this variant.</p>
<h3 id="rule-variant_multiclassing-table-2-8-multiclass-character-advancement">Table 2-8: Multiclass Character Advancement</h3>
<ScrollContainer id="rule-variant_multiclassing--table-0"><table>
<thead>
<tr>
<th>Character Level</th>
<th>Ability</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>Feat</td>
</tr>
<tr>
<td>2nd</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>Secondary class feature</td>
</tr>
<tr>
<td>4th</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>Feat</td>
</tr>
<tr>
<td>6th</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>Secondary class feature</td>
</tr>
<tr>
<td>8th</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>Feat</td>
</tr>
<tr>
<td>10th</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>Secondary class feature</td>
</tr>
<tr>
<td>12th</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>Feat</td>
</tr>
<tr>
<td>14th</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>Secondary class feature</td>
</tr>
<tr>
<td>16th</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>Feat</td>
</tr>
<tr>
<td>18th</td>
<td>-</td>
</tr>
<tr>
<td>19th</td>
<td>Secondary class feature</td>
</tr>
<tr>
<td>20th</td>
<td>-</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _core_classes = {title: "Core Classes", parent_topics: ["optional_pc_advancement_changes","variant_multiclassing"], siblings: ["core_classes","base_classes_pu"], subtopics: ["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","wizard"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 88</Link></p>
<p>The following secondary class features are based on features of the classes found in the Core Rulebook.</p>
</>};
const _barbarian = {title: "Barbarian", parent_topics: ["optional_pc_advancement_changes","variant_multiclassing","core_classes"], siblings: ["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","wizard"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 88</Link></p>
<p>A character who chooses <Link to="/class/barbarian">barbarian</Link> as her secondary class gains the following secondary class features.</p>
<p><strong className="hl">Rage:</strong> At 3rd level, she gains the rage class feature for a number of rounds per day equal to her Constitution modifier + her character level.</p>
<p><strong className="hl">Uncanny Dodge:</strong> At 7th level, she gains uncanny dodge.</p>
<p><strong className="hl">Rage Power:</strong> At 11th level, she gains a <Link to="/ability/rage_powers">rage power</Link>. For the purpose of which rage powers she can select, her effective barbarian level is equal to 1/2 her character level, but for the purpose of the rage power's effect, her effective barbarian level is equal to her full character level.</p>
<p><strong className="hl">Damage Reduction:</strong> At 15th level, she gains DR 3/-.</p>
<p><strong className="hl">Greater Rage:</strong> At 19th level, she gains greater rage.</p>
</>};
const _bard = {title: "Bard", parent_topics: ["optional_pc_advancement_changes","variant_multiclassing","core_classes"], siblings: ["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","wizard"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 88</Link></p>
<p>A character who chooses <Link to="/class/bard">bard</Link> as his secondary class gains the following secondary class features.</p>
<p><strong className="hl">Bardic Knowledge:</strong> At 3rd level, he gains the bardic knowledge class feature, treating his character level as his effective bard level.</p>
<p><strong className="hl">Bardic Performance:</strong> At 7th level, he gains the ability to inspire courage and inspire competence as a bard of his character level - 4 for a number of rounds per day equal to his Charisma modifier + his character level.</p>
<p><strong className="hl">Versatile Performance:</strong> At 11th level, he gains versatile performance in one Perform skill of his choice. He can retrain all his ranks in the two associated skills for free.</p>
<p><strong className="hl">Lore Master:</strong> At 15th level, he gains lore master as a 5th-level bard.</p>
<p><strong className="hl">Additional Performances:</strong> At 19th level, he gains the ability to use dirge of doom and inspire greatness as a bard of his character level - 4.</p>
</>};
const _cleric = {title: "Cleric", parent_topics: ["optional_pc_advancement_changes","variant_multiclassing","core_classes"], siblings: ["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","wizard"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 88</Link></p>
<p>A character who chooses <Link to="/class/cleric">cleric</Link> as her secondary class gains the following secondary class features.</p>
<p><strong className="hl">Deity:</strong> At 1st level, she must select a deity within one alignment step of her own. She gains the cleric's aura, bonus languages, code of conduct, and restriction from casting spells of opposed alignments. She also gains the cleric's spontaneous casting ability, which she can use with any prepared casting classes that have the appropriate spells on their spell lists.</p>
<p><strong className="hl">Domain:</strong> At 3rd level, she selects one <Link to="/ability/domains">domain</Link> her deity grants, gaining that domain's 1st-level granted power, treating her character level as her effective cleric level.</p>
<p><strong className="hl">Channel:</strong> At 7th level, she gains the ability to channel energy as a cleric of her character level - 6 a number of times per day equal to her Charisma modifier + 1.</p>
<p><strong className="hl">Improved Channel:</strong> At 11th level, her ability to channel energy improves to that of a cleric of her character level - 4.</p>
<p><strong className="hl">Improved Domain:</strong> At 15th level, she gains the additional domain power of her chosen domain, treating her character level as her effective cleric level.</p>
<p><strong className="hl">Greater Channel:</strong> At 19th level, her channel energy ability improves to that of a cleric of her character level - 2.</p>
</>};
const _druid = {title: "Druid", parent_topics: ["optional_pc_advancement_changes","variant_multiclassing","core_classes"], siblings: ["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","wizard"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 88</Link></p>
<p>A character who chooses <Link to="/class/druid">druid</Link> as her secondary class gains the following secondary class features.</p>
<p><strong className="hl">Code:</strong> At 1st level, she gains Druidic as a bonus language and must abide by the druidic code of conduct - respecting nature, not teaching the Druidic language to outsiders, not wearing metal armor, and so on.</p>
<p><strong className="hl">Wild Empathy:</strong> At 3rd level, she gains <Link to="/ability/wild_empathy">wild empathy</Link>, treating her character level as her effective druid level.</p>
<p><strong className="hl">Companion:</strong> At 7th level, she gains an <Link to="/ability/druid_companions">animal companion</Link> as a druid of her character level - 4. No ability other than Improved Companion can ever increase her effective druid level for this purpose.</p>
<p><strong className="hl">Improved Companion:</strong> At 11th level, her animal companion increases to that of a druid of her full character level.</p>
<p><strong className="hl">Wild Shape:</strong> At 15th level, she gains the ability to use wild shape to turn into a Small or Medium animal two times per day for up to 1 hour per character level each time.</p>
<p><strong className="hl">Greater Wildshape:</strong> At 19th level, her wild shape improves to include the 6th-level druid options, and she can use wild shape three times per day.</p>
</>};
const _fighter = {title: "Fighter", parent_topics: ["optional_pc_advancement_changes","variant_multiclassing","core_classes"], siblings: ["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","wizard"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 89</Link></p>
<p>A character who chooses <Link to="/class/fighter">fighter</Link> as his secondary class gains the following secondary class features.</p>
<p><strong className="hl">Bravery:</strong> At 3rd level, he gains the bravery class feature as a fighter of his character level - 1.</p>
<p><strong className="hl">Armor Training 1:</strong> At 7th level, he gains armor training 1.</p>
<p><strong className="hl">Weapon Training 1:</strong> At 11th level, he gains weapon training 1.</p>
<p><strong className="hl">Armor Training 2:</strong> At 15th level, he gains armor training 2.</p>
<p><strong className="hl">Weapon Training 2:</strong> At 19th level, he gains weapon training 2.</p>
</>};
const _monk = {title: "Monk", parent_topics: ["optional_pc_advancement_changes","variant_multiclassing","core_classes"], siblings: ["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","wizard"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 89</Link></p>
<p>A character who chooses <Link to="/class/monk">monk</Link> as his secondary class gains the following secondary class features.</p>
<p><strong className="hl">Armor:</strong> At 1st level, he loses all his secondary monk abilities when wearing armor, using a shield, or carrying a medium or heavy load.</p>
<p><strong className="hl">Unarmed Strike:</strong> At 3rd level, he gains the <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> feat and the unarmed damage of a monk of his character level - 2.</p>
<p><strong className="hl">Evasion:</strong> At 7th level, he gains evasion.</p>
<p><strong className="hl">Ki Pool:</strong> At 11th level, he gains the ki pool class feature of a monk of his character level - 2, with a number of ki points equal to 1/2 his character level. He only ever gains ki pool (lawful) if he is of lawful alignment.</p>
<p><strong className="hl">AC Bonus:</strong> At 15th level, he gains a +3 dodge bonus to AC.</p>
<p><strong className="hl">Improved Evasion:</strong> At 19th level, he gains improved evasion.</p>
</>};
const _paladin = {title: "Paladin", parent_topics: ["optional_pc_advancement_changes","variant_multiclassing","core_classes"], siblings: ["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","wizard"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 89</Link></p>
<p>A character who chooses <Link to="/class/paladin">paladin</Link> as her secondary class gains the following secondary class features.</p>
<p><strong className="hl">Code:</strong> At 1st level, she must follow the paladin's code of conduct and gains the paladin's aura of good.</p>
<p><strong className="hl">Detect Evil:</strong> At 3rd level, she can <Link to="/spell/detect_evil">detect evil</Link> as a 1st-level paladin.</p>
<p><strong className="hl">Lay on Hands:</strong> At 7th level, she gains the ability to lay on hands a number of times per day equal to half her character level, healing as much as a paladin of her character level - 4.</p>
<p><strong className="hl">Smite Evil:</strong> At 11th level, she gains the ability to smite evil once per day as a paladin of her character level - 4.</p>
<p><strong className="hl">Mercy:</strong> At 15th level, she selects one <Link to="/ability/mercies">mercy</Link> from the paladin's 3rd-level mercy list.</p>
<p><strong className="hl">Divine Bond:</strong> At 19th level, she gains a divine bond to a weapon as a paladin of her character level - 3.</p>
</>};
const _ranger = {title: "Ranger", parent_topics: ["optional_pc_advancement_changes","variant_multiclassing","core_classes"], siblings: ["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","wizard"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 89</Link></p>
<p>A character who chooses <Link to="/class/ranger">ranger</Link> as his secondary class gains the following secondary class features.</p>
<p><strong className="hl">Track:</strong> At 3rd level, he gains the track class feature, treating his character level as his effective ranger level.</p>
<p><strong className="hl">Favored Enemy:</strong> At 7th level, he gains the 1st <Link to="/ability/favored_enemy">favored enemy</Link> class feature.</p>
<p><strong className="hl">Favored Terrain:</strong> At 11th level, he gains the 1st <Link to="/ability/favored_terrain">favored terrain</Link> class feature.</p>
<p><strong className="hl">Expert Tracker:</strong> At 15th level, he gains the woodland stride and swift tracker class features.</p>
<p><strong className="hl">Quarry:</strong> At 19th level, he gains the quarry class feature.</p>
</>};
const _rogue = {title: "Rogue", parent_topics: ["optional_pc_advancement_changes","variant_multiclassing","core_classes"], siblings: ["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","wizard"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 89</Link></p>
<p>A character who chooses <Link to="/class/rogue">rogue</Link> as her secondary class gains the following secondary class features.</p>
<p><strong className="hl">Trapfinding:</strong> At 3rd level, she gains the trapfinding class feature.</p>
<p><strong className="hl">Sneak Attack:</strong> At 7th level, she gains the sneak attack class feature. She can deal 1d6 points of extra damage. This extra damage increases by 1d6 for every 4 levels beyond 7th, to a maximum of 4d6 at 19th level.</p>
<p><strong className="hl">Evasion:</strong> At 11th level, she gains evasion.</p>
<p><strong className="hl">Uncanny Dodge:</strong> At 15th level, she gains uncanny dodge.</p>
<p><strong className="hl">Improved Uncanny Dodge:</strong> At 19th level, she gains improved uncanny dodge, treating her character level as her effective rogue level.</p>
</>};
const _sorcerer = {title: "Sorcerer", parent_topics: ["optional_pc_advancement_changes","variant_multiclassing","core_classes"], siblings: ["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","wizard"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 89</Link></p>
<p>A character who chooses <Link to="/class/sorcerer">sorcerer</Link> as her secondary class gains the following secondary class features.</p>
<p><strong className="hl">Bloodline:</strong> At 1st level, she must select a <Link to="/ability/sorcerer_bloodlines">sorcerer bloodline</Link>. She treats her character level as her effective sorcerer level for all bloodline powers.</p>
<p><strong className="hl">Bloodline Power:</strong> At 3rd level, she gains her bloodline's 1st-level bloodline power.</p>
<p><strong className="hl">Improved Bloodline Power:</strong> At 7th level, she gains her bloodline's 3rd-level bloodline power</p>
<p><strong className="hl">Blood Feat:</strong> At 11th level, she gains one of her bloodline's feats or <Link to="/feat/eschew_materials">Eschew Materials</Link>.</p>
<p><strong className="hl">Greater Bloodline Power:</strong> At 15th level, she gains her bloodline's 9th-level bloodline power.</p>
<p><strong className="hl">True Bloodline Power:</strong> At 19th level, she gains her bloodline's 15th-level bloodline power.</p>
</>};
const _wizard = {title: "Wizard", parent_topics: ["optional_pc_advancement_changes","variant_multiclassing","core_classes"], siblings: ["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","wizard"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 90</Link></p>
<p>A character who chooses <Link to="/class/wizard">wizard</Link> as his secondary class gains the following secondary class features.</p>
<p><strong className="hl">School:</strong> At 1st level, he chooses a <Link to="/ability/arcane_schools">school of magic</Link> in which to specialize. For all powers of that school, he treats his character level as his effective wizard level.</p>
<p><strong className="hl">Familiar:</strong> At 3rd level, he gains a <Link to="/sidekick/familiar">familiar</Link>, treating his character level as his effective wizard level.</p>
<p><strong className="hl">School Power:</strong> At 7th level, he gains the 1st-level powers of his chosen school. If any of those powers grant an extra effect at 20th level, the character does not gain that extra effect.</p>
<p><strong className="hl">Cantrip:</strong> At 11th level, if he has an Intelligence score of 10 or higher, he chooses a wizard cantrip from his chosen school and can cast that cantrip as a spell-like ability at will. He uses his character level as the caster level and Intelligence as the cantrip's key ability score.</p>
<p><strong className="hl">Discovery:</strong> At 15th level, he gains an <Link to="/class/wizard">arcane discovery</Link> or wizard bonus feat, treating his character level as his effective wizard level.</p>
<p><strong className="hl">Greater School Power:</strong> At 19th level, he gains the 8th-level power of his chosen school.</p>
</>};
const _base_classes_pu = {title: "Base Classes", parent_topics: ["optional_pc_advancement_changes","variant_multiclassing"], siblings: ["core_classes","base_classes_pu"], subtopics: ["alchemist","cavalier","gunslinger","inquisitor","magus","oracle","summoner","witch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 90</Link></p>
<p>The following secondary class features are based on features of the classes.</p>
</>};
const _alchemist = {title: "Alchemist", parent_topics: ["optional_pc_advancement_changes","variant_multiclassing","base_classes_pu"], siblings: ["alchemist","cavalier","gunslinger","inquisitor","magus","oracle","summoner","witch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 90</Link></p>
<p>A character who chooses <Link to="/class/alchemist">alchemist</Link> as his secondary class gains the following secondary class features.</p>
<p><strong className="hl">Alchemy:</strong> At 3rd level, he adds his character level as a competence bonus on all Craft (alchemy) checks and can use Craft (alchemy) to identify potions.</p>
<p><strong className="hl">Bombs:</strong> At 7th level, he gains the ability to create a number of bombs per day equal to his Intelligence modifier + 1/2 his character level. The bombs deal damage as an alchemist of his character level, but since he doesn't have the alchemist's throw anything class feature, he doesn't add his Intelligence modifier to the damage.</p>
<p><strong className="hl">Mutagen:</strong> At 11th level, he gains the mutagen class feature, with a duration equal to 10 minutes per character level. He counts as an alchemist for the purposes of drinking a mutagen.</p>
<p><strong className="hl">Swift Poisoning:</strong> At 15th level, he gains the poison use and swift poisoning abilities.</p>
<p><strong className="hl">Poison Immunity:</strong> At 19th level, he becomes immune to poison.</p>
</>};
const _cavalier = {title: "Cavalier", parent_topics: ["optional_pc_advancement_changes","variant_multiclassing","base_classes_pu"], siblings: ["alchemist","cavalier","gunslinger","inquisitor","magus","oracle","summoner","witch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 90</Link></p>
<p>A character who chooses <Link to="/class/cavalier">cavalier</Link> as his secondary class gains the following secondary class features.</p>
<p><strong className="hl">Order:</strong> At 1st level, he chooses an <Link to="/ability/orders">order</Link>. He must follow the edicts of his order.</p>
<p><strong className="hl">Challenge:</strong> At 3rd level, he gains the ability to issue a challenge as a cavalier of his character level - 2 once per day. He adds the appropriate order adjustment to his challenge based on the order he selected.</p>
<p><strong className="hl">Order Ability:</strong> At 7th level, he gains the 2nd-level ability of his chosen order, treating his character level as his effective cavalier level.</p>
<p><strong className="hl">Tactician:</strong> At 11th level, he gains the tactician class feature, treating his character level as his effective cavalier level.</p>
<p><strong className="hl">Greater Order Ability:</strong> At 15th level, he gains the 8th-level ability of his chosen order, treating his character level as his effective cavalier level.</p>
<p><strong className="hl">Greater Tactician:</strong> At 19th level, he gains the greater tactician class feature, treating his character level as his effective cavalier level.</p>
</>};
const _gunslinger = {title: "Gunslinger", parent_topics: ["optional_pc_advancement_changes","variant_multiclassing","base_classes_pu"], siblings: ["alchemist","cavalier","gunslinger","inquisitor","magus","oracle","summoner","witch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 90</Link></p>
<p>A character who chooses <Link to="/class/gunslinger">gunslinger</Link> as her secondary class gains the following secondary class features.</p>
<p><strong className="hl">Firearm Proficiency:</strong> At 3rd level, she gains proficiency in all firearms.</p>
<p><strong className="hl">Gunsmith:</strong> At 7th level, she gains the gunsmith class feature.</p>
<p><strong className="hl">Deed:</strong> At 11th level, she gains the <Link to="/feat/amateur_gunslinger">Amateur Gunslinger</Link> feat.</p>
<p><strong className="hl">Improved Deed:</strong> At 15th level, she gains a 3rd-level <Link to="/ability/gunslinger_deeds">gunslinger deed</Link> of her choice.</p>
<p><strong className="hl">Greater Deed:</strong> At 19th level, she gains a 7th-level gunslinger deed of her choice.</p>
</>};
const _inquisitor = {title: "Inquisitor", parent_topics: ["optional_pc_advancement_changes","variant_multiclassing","base_classes_pu"], siblings: ["alchemist","cavalier","gunslinger","inquisitor","magus","oracle","summoner","witch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 90</Link></p>
<p>A character who chooses <Link to="/class/inquisitor">inquisitor</Link> as her secondary class gains the following secondary class features.</p>
<p><strong className="hl">Deity:</strong> At 1st level, she must select a deity within one alignment step of her alignment. She gains the inquisitor's code of conduct and restriction on casting spells of opposed alignments.</p>
<p><strong className="hl">Stern Gaze:</strong> At 3rd level, she gains the stern gaze class feature, treating her character level as her effective inquisitor level.</p>
<p><strong className="hl">Judgment:</strong> At 7th level, once per day, she can use the judgment class feature as an inquisitor of her character level - 3.</p>
<p><strong className="hl">Solo Tactics:</strong> At 11th level, she gains the solo tactics class feature.</p>
<p><strong className="hl">Additional Judgment:</strong> At 15th level, she can use the judgment class feature twice per day.</p>
<p><strong className="hl">Second Judgment:</strong> At 19th level, she gains the second judgment ability.</p>
</>};
const _magus = {title: "Magus", parent_topics: ["optional_pc_advancement_changes","variant_multiclassing","base_classes_pu"], siblings: ["alchemist","cavalier","gunslinger","inquisitor","magus","oracle","summoner","witch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 90</Link></p>
<p>A character who chooses <Link to="/class/magus">magus</Link> as his secondary class gains the following secondary class features.</p>
<p><strong className="hl">Arcane Pool:</strong> At 3rd level, he gains the arcane pool class feature as a magus of his character level - 2.</p>
<p><strong className="hl">Magus Arcana:</strong> At 7th level, he gains one <Link to="/ability/magus_arcana">magus arcana</Link>. He treats his character level as his effective magus level when determining whether or not he can select an arcana.</p>
<p><strong className="hl">Spellstrike:</strong> At 11th level, he gains the <em>spellstrike</em> class feature, but he can use it only with spells that are on the magus spell list, even though he can cast them using another class's spell slots.</p>
<p><strong className="hl">Improved Arcana:</strong> At 15th level, he gains one additional magus arcana.</p>
<p><strong className="hl">Greater Arcana:</strong> At 19th level, he gains one additional magus arcana.</p>
</>};
const _oracle = {title: "Oracle", parent_topics: ["optional_pc_advancement_changes","variant_multiclassing","base_classes_pu"], siblings: ["alchemist","cavalier","gunslinger","inquisitor","magus","oracle","summoner","witch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 91</Link></p>
<p>A character who chooses <Link to="/class/oracle">oracle</Link> as her secondary class gains the following secondary class features.</p>
<p><strong className="hl">Mystery:</strong> At 1st level, she must select a mystery. She never qualifies for the <Link to="/feat/extra_revelation">Extra Revelation</Link> feat.</p>
<p><strong className="hl">Curse:</strong> At 1st level, she must select a <Link to="/ability/oracle_curses">curse</Link>. She gains all effects of the curse, treating her effective oracle level as equal to 1/2 her character level.</p>
<p><strong className="hl">Revelation:</strong> At 3rd level, she gains one of the following revelations from the list of those available to her mystery as an oracle of her character level - 6 (minimum 1). She must have an effective oracle level high enough to select the revelation.</p>
<blockquote>
<p><strong><Link to="/mystery/battle">Battle</Link>:</strong> Battlecry, battlefield clarity, combat healer, iron skin, resiliency, skill at arms, surprising charge, war sight.</p>
<p><strong><Link to="/mystery/bones">Bones</Link>:</strong> Armor of bones, bleeding wounds, death's touch, near death, raise the dead, resist life, soul siphon, spirit walk, undead servitude, voice of the grave.</p>
<p><strong><Link to="/mystery/flame">Flame</Link>:</strong> Burning magic, fire breath, form of flame, gaze of flames, heat aura, molten skin, touch of flame, wings of fire.</p>
<p><strong><Link to="/mystery/heavens">Heavens</Link>:</strong> Coat of many stars, dweller in darkness, guiding star, interstellar void, lure of the heavens, mantle of moonlight, spray of shooting stars, star chart.</p>
<p><strong><Link to="/mystery/life">Life</Link>:</strong> Channel, delay affliction, energy body, enhanced cures, healing hands, life link, lifesense, safe curing, spirit boost.</p>
<p><strong><Link to="/mystery/lore">Lore</Link>:</strong> Arcane archivist, automatic writing, brain drain, mental acuity, spontaneous symbology, think on it, whirlwind lesson.</p>
<p><strong><Link to="/mystery/nature">Nature</Link>:</strong> Erosion touch, life leach, natural divination, speak with animals, spirit of nature, transcendental bond, undo artifice.</p>
<p><strong><Link to="/mystery/stone">Stone</Link>:</strong> Acid skin, clobbering strike, crystal sight, earth glide, mighty pebble, rock throwing, shard explosion, steelbreaker skin, touch of acid.</p>
<p><strong><Link to="/mystery/waves">Waves</Link>:</strong> Blizzard, fluid nature, fluid travel, freezing spells, ice armor, icy skin, punitive transformation, water form, water sight, wintry touch.</p>
<p><strong><Link to="/mystery/wind">Wind</Link>:</strong> Air barrier, gaseous form, invisibility, lightning breath, spark skin, thunderburst, touch of electricity, vortex spells, wind sight, wings of air.</p>
</blockquote>
<p><strong className="hl">Orison:</strong> At 7th level, if she has a Charisma score of 10 or higher, she chooses an oracle orison to cast as a spell-like ability at will. She uses her character level as the caster level and Charisma as the orison's key ability score.</p>
<p><strong className="hl">Curse Focus:</strong> At 11th level, she adds 5 to her effective oracle level for the purposes of determining her curse's effects.</p>
<p><strong className="hl">Improved Revelation:</strong> At 15th level, she gains one additional revelation.</p>
<p><strong className="hl">Greater Revelation:</strong> At 19th level, she gains one additional revelation.</p>
</>};
const _summoner = {title: "Summoner", parent_topics: ["optional_pc_advancement_changes","variant_multiclassing","base_classes_pu"], siblings: ["alchemist","cavalier","gunslinger","inquisitor","magus","oracle","summoner","witch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 91</Link></p>
<p>A character who chooses <Link to="/class/summoner">summoner</Link> as his secondary class gains the following secondary class features.</p>
<p><strong className="hl">Summon Monster:</strong> At 3rd level, he gains the summoner's <Link to="/spell/summon_monster">summon monster</Link> spell-like ability as a summoner of his character level - 2. He can use this ability once per day; the casting time is 1 full round, and the duration is 1 round per effective summoner level.</p>
<p><strong className="hl">Eidolon:</strong> At 7th level, he gains the ability to summon an eidolon, using the statistics of an eidolon for a summoner of his character level - 4, except with half as many evolution points. This eidolon can only be summoned using his <em>summon monster</em> spell-like ability.</p>
<p><strong className="hl">Additional Summons:</strong> At 11th level, he can use his <em>summon monster</em> spell-like ability three times per day.</p>
<p><strong className="hl">Shield Ally:</strong> At 15th level, he gains the shield ally class feature.</p>
<p><strong className="hl">Aspect:</strong> At 19th level, he gains the aspect class feature, except he can divert only 1 evolution point from his eidolon to himself.</p>
</>};
const _witch = {title: "Witch", parent_topics: ["optional_pc_advancement_changes","variant_multiclassing","base_classes_pu"], siblings: ["alchemist","cavalier","gunslinger","inquisitor","magus","oracle","summoner","witch"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 91</Link></p>
<p>A character who chooses <Link to="/class/witch">witch</Link> as her secondary class gains the following secondary class features.</p>
<p><strong className="hl">Patron:</strong> At 1st level, she chooses a <Link to="/ability/patrons">patron</Link>. She never qualifies for the <Link to="/feat/extra_hex">Extra Hex</Link> feat.</p>
<p><strong className="hl">Witch's Familiar:</strong> At 3rd level, she gains a <Link to="/sidekick/familiar">familiar</Link>, treating her character level as her effective witch level.</p>
<p><strong className="hl">Hex:</strong> At 7th level, she gains a <Link to="/ability/hexes">hex</Link> of her choice as a 1st-level witch. If she chooses the slumber hex, it can affect only creatures with Hit Dice less than or equal to her character level.</p>
<p><strong className="hl">Cantrip:</strong> At 11th level, if she has an Intelligence score of 10 or higher, she chooses a witch cantrip and can cast that cantrip as a spell-like ability at will. She uses her character level as the caster level and Intelligence as the cantrip's key ability score.</p>
<p><strong className="hl">Improved Hex:</strong> At 15th level, she gains a second hex as a 1st-level witch, and her first hex advances as if she were an 8th-level witch.</p>
<p><strong className="hl">Major Hex:</strong> At 19th level, she gains a major hex as a 10th-level witch. She cannot gain the ice tomb hex.</p>
</>};
export default {optional_pc_advancement_changes:_optional_pc_advancement_changes,automatic_bonus_progression:_automatic_bonus_progression,bonuses:_bonuses,armor_attunement:_armor_attunement,deflection:_deflection,legendary_gifts:_legendary_gifts,mental_prowess:_mental_prowess,physical_prowess:_physical_prowess,resistance:_resistance,toughening:_toughening,weapon_attunement:_weapon_attunement,magic_weapons_and_armor:_magic_weapons_and_armor,innate_item_bonuses:_innate_item_bonuses,wondrous_items_pu:_wondrous_items_pu,rings_pu:_rings_pu,arms_and_armor:_arms_and_armor,fractional_base_bonuses:_fractional_base_bonuses,base_attack_bonus:_base_attack_bonus,base_save_bonus:_base_save_bonus,bonuses_by_level:_bonuses_by_level,staggered_advancement:_staggered_advancement,variant_multiclassing:_variant_multiclassing,core_classes:_core_classes,barbarian:_barbarian,bard:_bard,cleric:_cleric,druid:_druid,fighter:_fighter,monk:_monk,paladin:_paladin,ranger:_ranger,rogue:_rogue,sorcerer:_sorcerer,wizard:_wizard,base_classes_pu:_base_classes_pu,alchemist:_alchemist,cavalier:_cavalier,gunslinger:_gunslinger,inquisitor:_inquisitor,magus:_magus,oracle:_oracle,summoner:_summoner,witch:_witch}