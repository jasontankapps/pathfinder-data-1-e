import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _magic_item_creation = {title: "Magic Item Creation", parent_topics: ["basics","magic_items"], siblings: ["magic_items_and_detect_magic","using_items","size_and_magic_items","magic_items_on_the_body","saving_throws_against_magic_item_powers","damaging_magic_items","repairing_magic_items","charges_doses_and_multiple_uses","purchasing_magic_items","magic_item_descriptions","intelligent_items","cursed_items","artifacts","magic_item_creation"], subtopics: ["magic_item_gold_piece_values","creating_magic_armor","creating_magic_weapons","creating_potions","creating_rings","creating_rods","creating_scrolls","creating_staves","creating_wands","creating_wondrous_items","adding_new_abilities"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 548</Link></p>
<p>To create magic items, spellcasters use special feats which allow them to invest time and money in an item's creation. At the end of this process, the spellcaster must make a single skill check (usually Spellcraft, but sometimes another skill) to finish the item. If an item type has multiple possible skills, you choose which skill to make the check with. The DC to create a magic item is 5 + the caster level for the item. Failing this check means that the item does not function and the materials and time are wasted. Failing this check by 5 or more results in a cursed item (see <Link to="/rule/cursed_items">Cursed Items</Link> for more information).</p>
<p>Note that all items have prerequisites in their descriptions. These prerequisites must be met for the item to be created. Most of the time, they take the form of spells that must be known by the item's creator (although access through another magic item or spellcaster is allowed). The DC to create a magic item increases by +5 for each prerequisite the caster does not meet. The only exception to this is the requisite item creation feat, which is mandatory. In addition, you cannot create potions, spell-trigger, or spell-completion magic items without meeting their spell prerequisites.</p>
<p>While item creation costs are handled in detail below, note that normally the two primary factors are the caster level of the creator and the level of the spell or spells put into the item. A creator can create an item at a lower caster level than her own, but never lower than the minimum level needed to cast the needed spell. Using metamagic feats, a caster can place spells in items at a higher level than normal.</p>
<p>Magic supplies for items are always half of the base price in gp. For many items, the market price equals the base price. Armor, shields, weapons, and items with value independent of their magically enhanced properties add their item cost to the market price. The item cost does not influence the base price (which determines the cost of magic supplies), but it does increase the final market price.</p>
<p>In addition, some items cast or replicate spells with costly material components. For these items, the market price equals the base price plus an extra price for the spell component costs. The cost to create these items is the magic supplies cost plus the costs for the components. Descriptions of these items include an entry that gives the total cost of creating the item.</p>
<p>The creator also needs a fairly quiet, comfortable, and well lit place in which to work. Any place suitable for preparing spells is suitable for making items. Creating an item requires 8 hours of work per 1,000 gp in the item's base price (or fraction thereof), with a minimum of at least 8 hours. Potions and scrolls are an exception to this rule; they can take as little as 2 hours to create (if their base price is 250 gp or less). Scrolls and potions whose base price is more than 250 gp, but less than 1,000 gp, take 8 hours to create, just like any other magic item. The character must spend the gold at the beginning of the construction process. Regardless of the time needed for construction, a caster can create no more than one magic item per day. This process can be accelerated to 4 hours of work per 1,000 gp in the item's base price (or fraction thereof) by increasing the DC to create the item by +5.</p>
<p>The caster can work for up to 8 hours each day. He cannot rush the process by working longer each day, but the days need not be consecutive, and the caster can use the rest of his time as he sees fit. If the caster is out adventuring, he can devote 4 hours each day to item creation, although he nets only 2 hours' worth of work. This time is not spent in one continuous period, but rather during lunch, morning preparation, and during watches at night. If time is dedicated to creation, it must be spent in uninterrupted 4-hour blocks. This work is generally done in a controlled environment, where distractions are at a minimum, such as a laboratory or shrine. Work that is performed in a distracting or dangerous environment nets only half the amount of progress (just as with the adventuring caster).</p>
<p>A character can work on only one item at a time. If a character starts work on a new item, all materials used on the under-construction item are wasted.</p>
</>};
const _magic_item_gold_piece_values = {title: "Magic Item Gold Piece Values", parent_topics: ["basics","magic_items","magic_item_creation"], siblings: ["magic_item_gold_piece_values","creating_magic_armor","creating_magic_weapons","creating_potions","creating_rings","creating_rods","creating_scrolls","creating_staves","creating_wands","creating_wondrous_items","adding_new_abilities"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 549</Link></p>
<p>Many factors must be considered when determining the price of new magic items. The easiest way to come up with a price is to compare the new item to an item that is already priced, using that price as a guide. Otherwise, use the guidelines summarized on the table below.</p>
<p><strong className="hl">Multiple Similar Abilities:</strong> For items with multiple similar abilities that don't take up space on a character's body, use the following formula: Calculate the price of the single most costly ability, then add 75% of the value of the next most costly ability, plus 1/2 the value of any other abilities.</p>
<p><strong className="hl">Multiple Different Abilities:</strong> Abilities such as an attack roll bonus or saving throw bonus and a spell-like function are not similar, and their values are simply added together to determine the cost. For items that take up a space on a character's body, each additional power not only has no discount but instead has a 50% increase in price.</p>
<p><strong className="hl">0-Level Spells:</strong> When multiplying spell levels to determine value, 0-level spells should be treated as 1/2 level.</p>
<p><strong className="hl">Other Considerations:</strong> Once you have a cost figure, reduce that number if either of the following conditions applies:</p>
<p><strong className="hl">Item Requires Skill to Use:</strong> Some items require a specific skill to get them to function. This factor should reduce the cost about 10%.</p>
<p><strong className="hl">Item Requires Specific Class or Alignment to Use:</strong> Even more restrictive than requiring a skill, this limitation cuts the price by 30%.</p>
<p>Prices presented in the magic item descriptions (the gold piece value following the item's slot) are the market value, which is generally twice what it costs the creator to make the item. Since different classes get access to certain spells at different levels, the prices for two characters to make the same item might actually be different. An item is only worth two times what the caster of the lowest possible level can make it for. Calculate the market price based on the lowest possible level caster, no matter who makes the item.</p>
<p>Not all items adhere to these formulas. First and foremost, these few formulas aren't enough to truly gauge the exact differences between items. The price of a magic item may be modified based on its actual worth. The formulas only provide a starting point. The pricing of scrolls assumes that, whenever possible, a wizard or cleric created it. Potions and wands follow the formulas exactly. Staves follow the formulas closely, and other items require at least some judgment calls.</p>
<blockquote>
<p><strong className="hl">Also See:</strong> <Link to="/rule/magic_item_creation_ucp">Magic Item Creation (Advanced Magic Topics)</Link></p>
</blockquote>
<h3 id="rule-magic_item_gold_piece_values-estimating-magic-item-gold-piece-values">Estimating Magic Item Gold Piece Values</h3>
<ScrollContainer id="rule-magic_item_gold_piece_values--table-0"><table>
<thead>
<tr>
<th>Effect</th>
<th>Base Price</th>
<th>Example</th>
</tr>
</thead>
<tbody><tr>
<td>Ability bonus (enhancement)</td>
<td>Bonus squared &times; 1,000 gp</td>
<td>Belt of incredible dexterity +2</td>
</tr>
<tr>
<td>Armor bonus (enhancement)</td>
<td>Bonus squared &times; 1,000 gp</td>
<td>+1 chainmail</td>
</tr>
<tr>
<td>Bonus spell</td>
<td>Spell level squared &times; 1,000 gp</td>
<td>Pearl of power</td>
</tr>
<tr>
<td>AC bonus (deflection)</td>
<td>bonus squared &times; 2,000 gp</td>
<td>Ring of protection +3</td>
</tr>
<tr>
<td>AC bonus (other)<sup><InnerLink showBacklink="backlink-rule-magic_item_gold_piece_values-ref-1-1" id="rule-magic_item_gold_piece_values-ref-1-1" data-hash-target to="rule-magic_item_gold_piece_values-1">1</InnerLink></sup></td>
<td>bonus squared &times; 2,500 gp</td>
<td>Ioun stone (dusty rose prism)</td>
</tr>
<tr>
<td>Natural armor bonus (enhancement)</td>
<td>bonus squared &times; 2,000 gp</td>
<td>Amulet of natural armor +1</td>
</tr>
<tr>
<td>Save bonus (resistance)</td>
<td>bonus squared &times; 1,000 gp</td>
<td>Cloak of resistance +5</td>
</tr>
<tr>
<td>Save bonus (other)<sup><InnerLink showBacklink="backlink-rule-magic_item_gold_piece_values-ref-1-2" id="rule-magic_item_gold_piece_values-ref-1-2" data-hash-target to="rule-magic_item_gold_piece_values-1">1</InnerLink></sup></td>
<td>bonus squared &times; 2,000 gp</td>
<td>Stone of good luck</td>
</tr>
<tr>
<td>Skill bonus (competence)</td>
<td>bonus squared &times; 100 gp</td>
<td>Cloak of elvenkind</td>
</tr>
<tr>
<td>Spell resistance</td>
<td>10,000 gp per point over SR 12; SR 13 minimum</td>
<td>Mantle of spell resistance</td>
</tr>
<tr>
<td>Weapon bonus (enhancement)</td>
<td>bonus squared &times; 2,000 gp</td>
<td>+1 longsword</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-magic_item_gold_piece_values-estimating-by-spell-effect">Estimating by Spell Effect</h3>
<ScrollContainer id="rule-magic_item_gold_piece_values--table-1"><table>
<thead>
<tr>
<th>Spell Effect</th>
<th>Base Price</th>
<th>Example</th>
</tr>
</thead>
<tbody><tr>
<td>Single use, spell completion</td>
<td>Spell level &times; caster level &times; 25 gp</td>
<td>Scroll of haste</td>
</tr>
<tr>
<td>Single use, use-activated</td>
<td>Spell level &times; caster level &times; 50 gp</td>
<td>Potion of cure light wounds</td>
</tr>
<tr>
<td>50 charges, spell trigger</td>
<td>Spell level &times; caster level &times; 750 gp</td>
<td>Wand of fireball</td>
</tr>
<tr>
<td>Command word</td>
<td>Spell level &times; caster level &times; 1,800 gp</td>
<td>Cape of the mountebank</td>
</tr>
<tr>
<td>Use-activated or continuous</td>
<td>Spell level &times; caster level &times; 2,000 gp<sup><InnerLink showBacklink="backlink-rule-magic_item_gold_piece_values-ref-2-1" id="rule-magic_item_gold_piece_values-ref-2-1" data-hash-target to="rule-magic_item_gold_piece_values-2">2</InnerLink></sup></td>
<td>Lantern of revealing</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-magic_item_gold_piece_values-estimating-by-other-variables">Estimating by Other Variables</h3>
<ScrollContainer id="rule-magic_item_gold_piece_values--table-2"><table>
<thead>
<tr>
<th>Special</th>
<th>Base Price Adjustment</th>
<th>Example</th>
</tr>
</thead>
<tbody><tr>
<td>Charges per day</td>
<td>Divide by (5 divided by charges per day)</td>
<td>Boots of teleportation</td>
</tr>
<tr>
<td>No space limitation<sup><InnerLink showBacklink="backlink-rule-magic_item_gold_piece_values-ref-3-1" id="rule-magic_item_gold_piece_values-ref-3-1" data-hash-target to="rule-magic_item_gold_piece_values-3">3</InnerLink></sup></td>
<td>Multiply entire cost by 2</td>
<td>Ioun stone</td>
</tr>
<tr>
<td>Multiple different abilities</td>
<td>Multiply lower item cost by 1.5</td>
<td>Helm of brilliance</td>
</tr>
<tr>
<td>Charged (50 charges)</td>
<td>1/2 unlimited use base price</td>
<td>Ring of the ram</td>
</tr>
<tr>
<td>Component</td>
<td>Extra Cost</td>
<td>Example</td>
</tr>
<tr>
<td>Armor, shield, or weapon</td>
<td>Add cost of masterwork item</td>
<td>+1 composite longbow</td>
</tr>
<tr>
<td>Spell has material component cost</td>
<td>Add directly into price of item per charge<sup><InnerLink showBacklink="backlink-rule-magic_item_gold_piece_values-ref-4-1" id="rule-magic_item_gold_piece_values-ref-4-1" data-hash-target to="rule-magic_item_gold_piece_values-4">4</InnerLink></sup></td>
<td>Wand of stoneskin</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Spell Level:</strong> A 0-level spell is half the value of a 1st-level spell for determining price.</p>
<section data-footnotes>
<h3 id="rule-magic_item_gold_piece_values-label">Footnotes</h3>
<ol>
<li id="rule-magic_item_gold_piece_values-1">
<p>Such as a luck, insight, sacred, or profane bonus. <InnerLink id="backlink-rule-magic_item_gold_piece_values-ref-1-1" data-hash-target to="rule-magic_item_gold_piece_values-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink> <InnerLink id="backlink-rule-magic_item_gold_piece_values-ref-1-2" data-hash-target to="rule-magic_item_gold_piece_values-ref-1-2" aria-label="Back to reference 1-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="rule-magic_item_gold_piece_values-2">
<p>If a continuous item has an effect based on a spell with a duration measured in rounds, multiply the cost by 4. If the duration of the spell is 1 minute/level, multiply the cost by 2, and if the duration is 10 minutes/level, multiply the cost by 1.5. If the spell has a 24-hour duration or greater, divide the cost in half. <InnerLink id="backlink-rule-magic_item_gold_piece_values-ref-2-1" data-hash-target to="rule-magic_item_gold_piece_values-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="rule-magic_item_gold_piece_values-3">
<p>An item that does not take up one of the spaces on a body costs double. <InnerLink id="backlink-rule-magic_item_gold_piece_values-ref-3-1" data-hash-target to="rule-magic_item_gold_piece_values-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
<li id="rule-magic_item_gold_piece_values-4">
<p>If item is continuous or unlimited, not charged, determine cost as if it had 100 charges. If it has some daily limit, determine as if it had 50 charges. <InnerLink id="backlink-rule-magic_item_gold_piece_values-ref-4-1" data-hash-target to="rule-magic_item_gold_piece_values-ref-4-1" aria-label="Back to reference 4-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _creating_magic_armor = {title: "Creating Magic Armor", parent_topics: ["basics","magic_items","magic_item_creation"], siblings: ["magic_item_gold_piece_values","creating_magic_armor","creating_magic_weapons","creating_potions","creating_rings","creating_rods","creating_scrolls","creating_staves","creating_wands","creating_wondrous_items","adding_new_abilities"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 550</Link></p>
<p>To create magic armor, a character needs a heat source and some iron, wood, or leatherworking tools. He also needs a supply of materials, the most obvious being the armor or the pieces of the armor to be assembled. Armor to be made into magic armor must be masterwork armor, and the masterwork cost is added to the base price to determine final market value. Additional magic supply costs for the materials are subsumed in the cost for creating the magic armor - half the base price of the item. Creating magic armor has a special prerequisite: The creator's caster level must be at least three times the enhancement bonus of the armor. If an item has both an enhancement bonus and a special ability, the higher of the two caster level requirements must be met. Magic armor or a magic shield must have at least a +1 enhancement bonus to have any armor or shield special abilities.</p>
<p>If spells are involved in the prerequisites for making the armor, the creator must have prepared the spells to be cast (or must know the spells, in the case of a sorcerer or bard) and must provide any material components or focuses the spells require. The act of working on the armor triggers the prepared spells, making them unavailable for casting during each day of the armor's creation. (That is, those spell slots are expended from the caster's currently prepared spells, just as if they had been cast.)</p>
<p>Creating some armor may entail other prerequisites beyond or other than spellcasting. See the individual descriptions for details.</p>
<p>Crafting magic armor requires one day for each 1,000 gp value of the base price.</p>
<p><em>Item Creation Feat Required:</em> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>.</p>
<p><em>Skill Used in Creation:</em> Spellcraft or Craft (armor).</p>
</>};
const _creating_magic_weapons = {title: "Creating Magic Weapons", parent_topics: ["basics","magic_items","magic_item_creation"], siblings: ["magic_item_gold_piece_values","creating_magic_armor","creating_magic_weapons","creating_potions","creating_rings","creating_rods","creating_scrolls","creating_staves","creating_wands","creating_wondrous_items","adding_new_abilities"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 551</Link></p>
<p>To create a magic weapon, a character needs a heat source and some iron, wood, or leatherworking tools. She also needs a supply of materials, the most obvious being the weapon or the pieces of the weapon to be assembled. Only a masterwork weapon can become a magic weapon, and the masterwork cost is added to the total cost to determine final market value. Additional magic supplies costs for the materials are subsumed in the cost for creating the magic weapon - half the base price of the item based upon the item's total effective bonus.</p>
<p>Creating a magic weapon has a special prerequisite: The creator's caster level must be at least three times the enhancement bonus of the weapon. If an item has both an enhancement bonus and a special ability, the higher of the two caster level requirements must be met. A magic weapon must have at least a +1 enhancement bonus to have any melee or ranged special weapon abilities.</p>
<p>If spells are involved in the prerequisites for making the weapon, the creator must have prepared the spells to be cast (or must know the spells, in the case of a sorcerer or bard) but need not provide any material components or focuses the spells require. The act of working on the weapon triggers the prepared spells, making them unavailable for casting during each day of the weapon's creation. (That is, those spell slots are expended from the caster's currently prepared spells, just as if they had been cast.)</p>
<p>At the time of creation, the creator must decide if the weapon glows or not as a side-effect of the magic imbued within it. This decision does not affect the price or the creation time, but once the item is finished, the decision is binding.</p>
<p>Creating magic double-headed weapons is treated as creating two weapons when determining cost, time, and special abilities.</p>
<p>Creating some weapons may entail other prerequisites beyond or other than spellcasting. See the individual descriptions for details.</p>
<p>Crafting a magic weapon requires 1 day for each 1,000 gp value of the base price.</p>
<p><em>Item Creation Feat Required:</em> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>.</p>
<p><em>Skill Used in Creation:</em> Spellcraft, Craft (bows) (for magic bows and arrows), or Craft (weapons) (for all other weapons).</p>
</>};
const _creating_potions = {title: "Creating Potions", parent_topics: ["basics","magic_items","magic_item_creation"], siblings: ["magic_item_gold_piece_values","creating_magic_armor","creating_magic_weapons","creating_potions","creating_rings","creating_rods","creating_scrolls","creating_staves","creating_wands","creating_wondrous_items","adding_new_abilities"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 551</Link></p>
<p>The creator of a potion needs a level working surface and at least a few containers in which to mix liquids, as well as a source of heat to boil the brew. In addition, he needs ingredients. The costs for materials and ingredients are subsumed in the cost for brewing the potion: 25 gp &times; the level of the spell &times; the level of the caster.</p>
<p>All ingredients and materials used to brew a potion must be fresh and unused. The character must pay the full cost for brewing each potion. (Economies of scale do not apply.) The imbiber of the potion is both the caster and the target. Spells with a range of personal cannot be made into potions. The creator must have prepared the spell to be placed in the potion (or must know the spell, in the case of a sorcerer or bard) and must provide any material component or focus the spell requires.</p>
<p>Material components are consumed when he begins working, but a focus is not. (A focus used in brewing a potion can be reused.) The act of brewing triggers the prepared spell, making it unavailable for casting until the character has rested and regained spells. (That is, that spell slot is expended from the caster's currently prepared spells, just as if it had been cast.) Brewing a potion requires 1 day.</p>
<p><em>Item Creation Feat Required:</em> <Link to="/feat/brew_potion">Brew Potion</Link>.</p>
<p><em>Skill Used in Creation:</em> Spellcraft or Craft (alchemy)</p>
<h3 id="rule-creating_potions-potion-base-costs-by-brewers-class">Potion Base Costs (By Brewer's Class)</h3>
<ScrollContainer id="rule-creating_potions--table-0"><table>
<thead>
<tr>
<th>Spell Level</th>
<th>Full Casters</th>
<th>Spontaneous Full Casters</th>
<th>Two-Thirds Casters</th>
<th>Delayed Casters</th>
</tr>
</thead>
<tbody><tr>
<td>0</td>
<td>25 gp</td>
<td>25 gp</td>
<td>25 gp</td>
<td>-</td>
</tr>
<tr>
<td>1st</td>
<td>50 gp</td>
<td>50 gp</td>
<td>50 gp</td>
<td>50 gp</td>
</tr>
<tr>
<td>2nd</td>
<td>300 gp</td>
<td>400 gp</td>
<td>400 gp</td>
<td>400 gp</td>
</tr>
<tr>
<td>3rd</td>
<td>750 gp</td>
<td>900 gp</td>
<td>1,050 gp</td>
<td>1,050 gp</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Full Casters:</strong> Cleric, Druid, Shaman, Witch, Wizard</p>
<p><strong className="hl">Spontaneous Full Casters:</strong> Arcanist, Sorcerer, Oracle, Psychic</p>
<p><strong className="hl">Two-Thirds Casters:</strong> Alchemist, Bard, Hunter, Inquisitor, Investigator, Magus, Mesmerist, Occultist, Skald, Spiritualist, Summoner, Unchained Summoner, Warpriest</p>
<p><strong className="hl">Delayed Casters:</strong> (Caster level is equal to class level - 3) Antipaladin, Bloodrager, Medium, Paladin, Ranger</p>
<p>Prices assume that the potion was made at the minimum caster level. The cost to create a potion is half the base price.</p>
</>};
const _creating_rings = {title: "Creating Rings", parent_topics: ["basics","magic_items","magic_item_creation"], siblings: ["magic_item_gold_piece_values","creating_magic_armor","creating_magic_weapons","creating_potions","creating_rings","creating_rods","creating_scrolls","creating_staves","creating_wands","creating_wondrous_items","adding_new_abilities"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 551</Link></p>
<p>To create a magic ring, a character needs a heat source. He also needs a supply of materials, the most obvious being a ring or the pieces of the ring to be assembled. The cost for the materials is subsumed in the cost for creating the ring. Ring costs are difficult to determine. Refer to <Link to="/rule/magic_item_gold_piece_values">Magic Item Gold Piece Values</Link> and use the ring prices in the ring descriptions as a guideline. Creating a ring generally costs half the ring's market price.</p>
<p>Rings that duplicate spells with costly material components add in the value of 50 &times; the spell's component cost. Having a spell with a costly component as a prerequisite does not automatically incur this cost. The act of working on the ring triggers the prepared spells, making them unavailable for casting during each day of the ring's creation. (That is, those spell slots are expended from the caster's currently prepared spells, just as if they had been cast.)</p>
<p>Creating some rings may entail other prerequisites beyond or other than spellcasting. See the individual descriptions for details.</p>
<p>Forging a ring requires 1 day for each 1,000 gp of the base price.</p>
<p><em>Item Creation Feat Required:</em> <Link to="/feat/forge_ring">Forge Ring</Link>.</p>
<p><em>Skill Used in Creation:</em> Spellcraft or Craft (jewelry).</p>
</>};
const _creating_rods = {title: "Creating Rods", parent_topics: ["basics","magic_items","magic_item_creation"], siblings: ["magic_item_gold_piece_values","creating_magic_armor","creating_magic_weapons","creating_potions","creating_rings","creating_rods","creating_scrolls","creating_staves","creating_wands","creating_wondrous_items","adding_new_abilities"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 552</Link></p>
<p>To create a magic rod, a character needs a supply of materials, the most obvious being a rod or the pieces of the rod to be assembled. The cost for the materials is subsumed in the cost for creating the rod. Rod costs are difficult to determine. Refer to <Link to="/rule/magic_item_gold_piece_values">Magic Item Gold Piece Values</Link> and use the rod prices in the rod descriptions as a guideline. Creating a rod costs half the market value listed.</p>
<p>If spells are involved in the prerequisites for making the rod, the creator must have prepared the spells to be cast (or must know the spells, in the case of a sorcerer or bard) but need not provide any material components or focuses the spells require. The act of working on the rod triggers the prepared spells, making them unavailable for casting during each day of the rod's creation. (That is, those spell slots are expended from the caster's currently prepared spells, just as if they had been cast.)</p>
<p>Creating some rods may entail other prerequisites beyond or other than spellcasting. See the individual descriptions for details.</p>
<p>Crafting a rod requires 1 day for each 1,000 gp of the base price.</p>
<p><em>Item Creation Feat Required:</em> <Link to="/feat/craft_rod">Craft Rod</Link>.</p>
<p><em>Skill Used in Creation:</em> Spellcraft, Craft (jewelry), Craft (sculptures), or Craft (weapons).</p>
</>};
const _creating_scrolls = {title: "Creating Scrolls", parent_topics: ["basics","magic_items","magic_item_creation"], siblings: ["magic_item_gold_piece_values","creating_magic_armor","creating_magic_weapons","creating_potions","creating_rings","creating_rods","creating_scrolls","creating_staves","creating_wands","creating_wondrous_items","adding_new_abilities"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 552</Link></p>
<p>To create a scroll, a character needs a supply of choice writing materials, the cost of which is subsumed in the cost for scribing the scroll: 12.5 gp &times; the level of the spell &times; the level of the caster.</p>
<p>All writing implements and materials used to scribe a scroll must be fresh and unused. A character must pay the full cost for scribing each spell scroll no matter how many times she previously has scribed the same spell.</p>
<p>The creator must have prepared the spell to be scribed (or must know the spell, in the case of a sorcerer or bard) and must provide any material component or focus the spell requires. A material component is consumed when she begins writing, but a focus is not. (A focus used in scribing a scroll can be reused.) The act of writing triggers the prepared spell, making it unavailable for casting until the character has rested and regained spells. (That is, that spell slot is expended from the caster's currently prepared spells, just as if it had been cast.)</p>
<p>Scribing a scroll requires 1 day per 1,000 gp of the base price. Although an individual scroll might contain more than one spell, each spell must be scribed as a separate effort, meaning that no more than 1 spell can be scribed in a day.</p>
<p><em>Item Creation Feat Required:</em> <Link to="/feat/scribe_scroll">Scribe Scroll</Link>.</p>
<p><em>Skill Used in Creation:</em> Spellcraft, Craft (calligraphy), or Profession (scribe).</p>
<h3 id="rule-creating_scrolls-scroll-base-costs-by-scribers-class">Scroll Base Costs (By Scriber's Class)</h3>
<ScrollContainer id="rule-creating_scrolls--table-0"><table>
<thead>
<tr>
<th>Spell Level</th>
<th>Full Casters</th>
<th>Spontaneous Full Casters</th>
<th>Two-Thirds Casters</th>
<th>Delayed Casters</th>
</tr>
</thead>
<tbody><tr>
<td>0</td>
<td>12 gp 5 sp</td>
<td>12 gp 5 sp</td>
<td>12 gp 5 sp</td>
<td>-</td>
</tr>
<tr>
<td>1st</td>
<td>25 gp</td>
<td>25 gp</td>
<td>25 gp</td>
<td>25 gp</td>
</tr>
<tr>
<td>2nd</td>
<td>150 gp</td>
<td>200 gp</td>
<td>200 gp</td>
<td>200 gp</td>
</tr>
<tr>
<td>3rd</td>
<td>375 gp</td>
<td>450 gp</td>
<td>525 gp</td>
<td>525 gp</td>
</tr>
<tr>
<td>4th</td>
<td>700 gp</td>
<td>800 gp</td>
<td>1,000 gp</td>
<td>1,000 gp</td>
</tr>
<tr>
<td>5th</td>
<td>1,125 gp</td>
<td>1,250 gp</td>
<td>1,625 gp</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>1,650 gp</td>
<td>1,800 gp</td>
<td>2,400 gp</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>2,275 gp</td>
<td>2,450 gp</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>3,000 gp</td>
<td>3,200 gp</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>3,825 gp</td>
<td>4,050 gp</td>
<td>-</td>
<td>-</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Full Casters:</strong> Cleric, Druid, Shaman, Witch, Wizard</p>
<p><strong className="hl">Spontaneous Full Casters:</strong> Arcanist, Sorcerer, Oracle, Psychic</p>
<p><strong className="hl">Two-Thirds Casters:</strong> Alchemist, Bard, Hunter, Inquisitor, Investigator, Magus, Mesmerist, Occultist, Skald, Spiritualist, Summoner, Unchained Summoner, Warpriest</p>
<p><strong className="hl">Delayed Casters:</strong> (Caster level is equal to class level - 3) Antipaladin, Bloodrager, Medium, Paladin, Ranger</p>
<p>Prices assume that the scroll was made at the minimum caster level. The cost to create a scroll is half the base price.</p>
</>};
const _creating_staves = {title: "Creating Staves", parent_topics: ["basics","magic_items","magic_item_creation"], siblings: ["magic_item_gold_piece_values","creating_magic_armor","creating_magic_weapons","creating_potions","creating_rings","creating_rods","creating_scrolls","creating_staves","creating_wands","creating_wondrous_items","adding_new_abilities"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 552</Link></p>
<p>To create a magic staff, a character needs a supply of materials, the most obvious being a staff or the pieces of the staff to be assembled.</p>
<p>The materials cost is subsumed in the cost of creation: 400 gp &times; the level of the highest-level spell &times; the level of the caster, plus 75% of the value of the next most costly ability (300 gp &times; the level of the spell &times; the level of the caster), plus 1/2 the value of any other abilities (200 gp &times; the level of the spell &times; the level of the caster). Staves are always fully charged (10 charges) when created.</p>
<p>If desired, a spell can be placed into the staff at less than the normal cost, but then activating that particular spell drains additional charges from the staff. Divide the cost of the spell by the number of charges it consumes to determine its final price. Note that this does not change the order in which the spells are priced (the highest level spell is still priced first, even if it requires more than one charge to activate). The caster level of all spells in a staff must be the same, and no staff can have a caster level of less than 8th, even if all the spells in the staff are low-level spells.</p>
<p>The creator must have prepared the spells to be stored (or must know the spells, in the case of a sorcerer or bard) and must provide any focus the spells require as well as material component costs sufficient to activate the spell 50 times (divide this amount by the number of charges one use of the spell expends). Material components are consumed when he begins working, but focuses are not. (A focus used in creating a staff can be reused.) The act of working on the staff triggers the prepared spells, making them unavailable for casting during each day of the staff's creation. (That is, those spell slots are expended from the caster's currently prepared spells, just as if they had been cast.)</p>
<p>Creating a few staves may entail other prerequisites beyond spellcasting. See the individual descriptions for details.</p>
<p>Crafting a staff requires 1 day for each 1,000 gp of the base price.</p>
<p><em>Item Creation Feat Required:</em> <Link to="/feat/craft_staff">Craft Staff</Link>.</p>
<p><em>Skill Used in Creation:</em> Spellcraft, Craft (jewelry), Craft (sculptures), or Profession (woodcutter).</p>
</>};
const _creating_wands = {title: "Creating Wands", parent_topics: ["basics","magic_items","magic_item_creation"], siblings: ["magic_item_gold_piece_values","creating_magic_armor","creating_magic_weapons","creating_potions","creating_rings","creating_rods","creating_scrolls","creating_staves","creating_wands","creating_wondrous_items","adding_new_abilities"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 553</Link></p>
<p>To create a magic wand, a character needs a small supply of materials, the most obvious being a baton or the pieces of the wand to be assembled. The cost for the materials is subsumed in the cost for creating the wand: 375 gp &times; the level of the spell &times; the level of the caster. Wands are always fully charged (50 charges) when created.</p>
<p>The creator must have prepared the spell to be stored (or must know the spell, in the case of a sorcerer or bard) and must provide any focuses the spell requires. Fifty of each needed material component are required (one for each charge). Material components are consumed when work begins, but focuses are not. A focus used in creating a wand can be reused. The act of working on the wand triggers the prepared spell, making it unavailable for casting during each day devoted to the wand's creation. (That is, that spell slot is expended from the caster's currently prepared spells, just as if it had been cast.)</p>
<p>Crafting a wand requires 1 day per each 1,000 gp of the base price.</p>
<p><em>Item Creation Feat Required:</em> <Link to="/feat/craft_wand">Craft Wand</Link>.</p>
<p><em>Skill Used in Creation:</em> Spellcraft, Craft (jewelry), Craft (sculptures), or Profession (woodcutter).</p>
<h3 id="rule-creating_wands-wand-base-costs-by-crafters-class">Wand Base Costs (By Crafter's Class)</h3>
<ScrollContainer id="rule-creating_wands--table-0"><table>
<thead>
<tr>
<th>Spell Level</th>
<th>Full Casters</th>
<th>Spontaneous Full Casters</th>
<th>Two-Thirds Casters</th>
<th>Delayed Casters</th>
</tr>
</thead>
<tbody><tr>
<td>0</td>
<td>375 gp</td>
<td>375 gp</td>
<td>375 gp</td>
<td>-</td>
</tr>
<tr>
<td>1st</td>
<td>750 gp</td>
<td>750 gp</td>
<td>750 gp</td>
<td>750 gp</td>
</tr>
<tr>
<td>2nd</td>
<td>4,500 gp</td>
<td>6,000 gp</td>
<td>6,000 gp</td>
<td>6,000 gp</td>
</tr>
<tr>
<td>3rd</td>
<td>11,250 gp</td>
<td>13,500 gp</td>
<td>15,750 gp</td>
<td>15,750 gp</td>
</tr>
<tr>
<td>4th</td>
<td>21,000 gp</td>
<td>24,000 gp</td>
<td>30,000 gp</td>
<td>30,000 gp</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Full Casters:</strong> Cleric, Druid, Shaman, Witch, Wizard</p>
<p><strong className="hl">Spontaneous Full Casters:</strong> Arcanist, Sorcerer, Oracle, Psychic</p>
<p><strong className="hl">Two-Thirds Casters:</strong> Alchemist, Bard, Hunter, Inquisitor, Investigator, Magus, Mesmerist, Occultist, Skald, Spiritualist, Summoner, Unchained Summoner, Warpriest</p>
<p><strong className="hl">Delayed Casters:</strong> (Caster level is equal to class level - 3) Antipaladin, Bloodrager, Medium, Paladin, Ranger</p>
<p>Prices assume that the wand was made at the minimum caster level. The cost to create a wand is half the base price</p>
</>};
const _creating_wondrous_items = {title: "Creating Wondrous Items", parent_topics: ["basics","magic_items","magic_item_creation"], siblings: ["magic_item_gold_piece_values","creating_magic_armor","creating_magic_weapons","creating_potions","creating_rings","creating_rods","creating_scrolls","creating_staves","creating_wands","creating_wondrous_items","adding_new_abilities"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 553</Link></p>
<p>To create a wondrous item, a character usually needs some sort of equipment or tools to work on the item. She also needs a supply of materials, the most obvious being the item itself or the pieces of the item to be assembled. The cost for the materials is subsumed in the cost for creating the item. Wondrous item costs are difficult to determine. Refer to <Link to="/rule/magic_item_gold_piece_values">Magic Item Gold Piece Values</Link> and use the item prices in the item descriptions as a guideline. Creating an item costs half the market value listed.</p>
<p>If spells are involved in the prerequisites for making the item, the creator must have prepared the spells to be cast (or must know the spells, in the case of a sorcerer or bard) but need not provide any material components or focuses the spells require. The act of working on the item triggers the prepared spells, making them unavailable for casting during each day of the item's creation. (That is, those spell slots are expended from the caster's currently prepared spells, just as if they had been cast.)</p>
<p>Creating some items may entail other prerequisites beyond or other than spellcasting. See the individual descriptions for details.</p>
<p>Crafting a wondrous item requires 1 day for each 1,000 gp of the base price.</p>
<p><em>Item Creation Feat Required:</em> <Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>.</p>
<p><em>Skill Used In Creation:</em> Spellcraft or an applicable Craft or Profession skill check.</p>
</>};
const _adding_new_abilities = {title: "Adding New Abilities", parent_topics: ["basics","magic_items","magic_item_creation"], siblings: ["magic_item_gold_piece_values","creating_magic_armor","creating_magic_weapons","creating_potions","creating_rings","creating_rods","creating_scrolls","creating_staves","creating_wands","creating_wondrous_items","adding_new_abilities"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 553</Link></p>
<p>Sometimes, lack of funds or time make it impossible for a magic item crafter to create the desired item from scratch. Fortunately, it is possible to enhance or build upon an existing magic item. Only time, gold, and the various prerequisites required of the new ability to be added to the magic item restrict the type of additional powers one can place.</p>
<p>The cost to add additional abilities to an item is the same as if the item was not magical, less the value of the original item. Thus, a +1 longsword can be made into a +2 vorpal longsword, with the cost to create it being equal to that of a +2 vorpal sword minus the cost of a +1 longsword.</p>
<p>If the item is one that occupies a specific place on a character's body, the cost of adding any additional ability to that item increases by 50%. For example, if a character adds the power to confer invisibility to her ring of protection +2, the cost of adding this ability is the same as for creating a ring of invisibility multiplied by 1.5.</p>
<blockquote>
<p><strong className="hl">Also See:</strong> <Link to="/rule/upgrading_items">Upgrading Items</Link>.</p>
</blockquote>
</>};
const _movement = {title: "Movement", parent_topics: ["basics"], siblings: ["how_to_play","common_terms","character_creation","ability_scores","races","classes","character_advancement","alignment","skills","feats","equipment","traits_and_other_details","magic_items","movement","vision_and_light","breaking_things","magic"], subtopics: ["tactical_movement","local_movement","overland_movement","evasion_and_pursuit"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 170</Link></p>
<p>There are three movement scales, as follows:</p>
<ul>
<li><strong>Tactical,</strong> for combat, measured in feet (or 5-foot squares) per round.</li>
<li><strong>Local,</strong> for exploring an area, measured in feet per minute.</li>
<li><strong>Overland,</strong> for getting from place to place, measured in miles per hour or miles per day.</li>
</ul>
<h3 id="rule-movement-modes-of-movement">Modes of Movement</h3>
<p>While moving at the different movement scales, creatures generally <em>walk, hustle,</em> or <em>run.</em></p>
<p><strong className="hl">Walk:</strong> A walk represents unhurried but purposeful movement (3 miles per hour for an unencumbered adult human).</p>
<p><strong className="hl">Hustle:</strong> A hustle is a jog (about 6 miles per hour for an unencumbered human). A character moving his speed twice in a single round, or moving that speed in the same round that he or she performs a standard action or another move action, is hustling when he or she moves.</p>
<p><strong className="hl">Run (&times;3):</strong> Moving three times speed is a running pace for a character in heavy armor (about 7 miles per hour for a human in full plate).</p>
<p><strong className="hl">Run (&times;4):</strong> Moving four times speed is a running pace for a character in light, medium, or no armor (about 12 miles per hour for an unencumbered human, or 9 miles per hour for a human in chainmail). See Table 7-6 for details.</p>
<h3 id="rule-movement-table-7-6-movement-and-distance">Table 7-6: Movement and Distance</h3>
<ScrollContainer id="rule-movement--table-0"><table>
<thead>
<tr>
<th>Speed</th>
<th>15 feet</th>
<th>20 feet</th>
<th>30 feet</th>
<th>40 feet</th>
</tr>
</thead>
<tbody><tr>
<td>One Round (Tactical)<sup><InnerLink showBacklink="backlink-rule-movement-ref-1-1" id="rule-movement-ref-1-1" data-hash-target to="rule-movement-1">1</InnerLink></sup> Walk</td>
<td>15 ft.</td>
<td>20 ft.</td>
<td>30 ft.</td>
<td>40 ft.</td>
</tr>
<tr>
<td>One Round (Tactical)<sup><InnerLink showBacklink="backlink-rule-movement-ref-1-2" id="rule-movement-ref-1-2" data-hash-target to="rule-movement-1">1</InnerLink></sup> Hustle</td>
<td>30 ft.</td>
<td>40 ft.</td>
<td>60 ft.</td>
<td>80 ft.</td>
</tr>
<tr>
<td>One Round (Tactical)<sup><InnerLink showBacklink="backlink-rule-movement-ref-1-3" id="rule-movement-ref-1-3" data-hash-target to="rule-movement-1">1</InnerLink></sup> Run (&times;3)</td>
<td>45 ft.</td>
<td>60 ft.</td>
<td>90 ft.</td>
<td>120 ft.</td>
</tr>
<tr>
<td>One Round (Tactical)<sup><InnerLink showBacklink="backlink-rule-movement-ref-1-4" id="rule-movement-ref-1-4" data-hash-target to="rule-movement-1">1</InnerLink></sup> Run (&times;4)</td>
<td>60 ft.</td>
<td>80 ft.</td>
<td>120 ft.</td>
<td>160 ft.</td>
</tr>
<tr>
<td>One Minute (Local) Walk</td>
<td>150 ft.</td>
<td>200 ft.</td>
<td>300 ft.</td>
<td>400 ft.</td>
</tr>
<tr>
<td>One Minute (Local) Hustle</td>
<td>300 ft.</td>
<td>400 ft.</td>
<td>600 ft.</td>
<td>800 ft.</td>
</tr>
<tr>
<td>One Minute (Local) Run (&times;3)</td>
<td>450 ft.</td>
<td>600 ft.</td>
<td>900 ft.</td>
<td>1,200 ft.</td>
</tr>
<tr>
<td>One Minute (Local) Run (&times;4)</td>
<td>600 ft.</td>
<td>800 ft.</td>
<td>1,200 ft.</td>
<td>1,600 ft.</td>
</tr>
<tr>
<td>One Hour (Overland) Walk</td>
<td>1-1/2 miles</td>
<td>2 miles</td>
<td>3 miles</td>
<td>4 miles</td>
</tr>
<tr>
<td>One Hour (Overland) Hustle</td>
<td>3 miles</td>
<td>4 miles</td>
<td>6 miles</td>
<td>8 miles</td>
</tr>
<tr>
<td>One Hour (Overland) Run</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>One Day (Overland) Walk</td>
<td>12 miles</td>
<td>16 miles</td>
<td>24 miles</td>
<td>32 miles</td>
</tr>
<tr>
<td>One Day (Overland) Hustle</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>One Day (Overland) Run</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-movement-label">Footnotes</h3>
<ol>
<li id="rule-movement-1">
<p>Tactical Movement is often measured in squares on the battle grid (1 square = 5 feet) rather than feet. <InnerLink id="backlink-rule-movement-ref-1-1" data-hash-target to="rule-movement-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink> <InnerLink id="backlink-rule-movement-ref-1-2" data-hash-target to="rule-movement-ref-1-2" aria-label="Back to reference 1-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-movement-ref-1-3" data-hash-target to="rule-movement-ref-1-3" aria-label="Back to reference 1-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-rule-movement-ref-1-4" data-hash-target to="rule-movement-ref-1-4" aria-label="Back to reference 1-4">↩<sup>4</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
const _tactical_movement = {title: "Tactical Movement", parent_topics: ["basics","movement"], siblings: ["tactical_movement","local_movement","overland_movement","evasion_and_pursuit"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 170</Link></p>
<p>Tactical movement is used for combat. Characters generally don't walk during combat, for obvious reasons - they hustle or run instead. A character who moves his speed and takes some action is hustling for about half the round and doing something else the other half.</p>
<p><strong className="hl">Hampered Movement:</strong> <Link to="/rule/difficult_terrain">Difficult terrain</Link>, obstacles, and poor visibility can hamper movement (see Table 7-7 for details). When movement is hampered, each square moved into usually counts as two squares, effectively reducing the distance that a character can cover in a move. If more than one hampering condition applies, multiply all additional costs that apply. This is a specific exception to the normal rule for doubling.</p>
<p>In some situations, your movement may be so hampered that you don't have sufficient speed even to move 5 feet (1 square). In such a case, you may use a full-round action to move 5 feet (1 square) in any direction, even diagonally. Even though this looks like a 5-foot step, it's not, and thus it provokes attacks of opportunity normally. (You can't take advantage of this rule to move through impassable terrain or to move when all movement is prohibited to you.)</p>
<p>You can't run or charge through any square that would hamper your movement.</p>
<h3 id="rule-tactical_movement-table-7-7-hampered-movement">Table 7-7: Hampered Movement</h3>
<ScrollContainer id="rule-tactical_movement--table-0"><table>
<thead>
<tr>
<th>Condition</th>
<th>Additional Movement Cost</th>
</tr>
</thead>
<tbody><tr>
<td>Difficult Terrain</td>
<td>&times;2</td>
</tr>
<tr>
<td>Obstacle<sup><InnerLink showBacklink="backlink-rule-tactical_movement-ref-1-1" id="rule-tactical_movement-ref-1-1" data-hash-target to="rule-tactical_movement-1">1</InnerLink></sup></td>
<td>&times;2</td>
</tr>
<tr>
<td>Poor Visibility</td>
<td>&times;2</td>
</tr>
<tr>
<td>Impassable</td>
<td>-</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-tactical_movement-label">Footnotes</h3>
<ol>
<li id="rule-tactical_movement-1">
<p>May require a skill check <InnerLink id="backlink-rule-tactical_movement-ref-1-1" data-hash-target to="rule-tactical_movement-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _local_movement = {title: "Local Movement", parent_topics: ["basics","movement"], siblings: ["tactical_movement","local_movement","overland_movement","evasion_and_pursuit"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 170</Link></p>
<p>Characters exploring an area use local movement, measured in feet per minute.</p>
<p><strong className="hl">Walk:</strong> A character can walk without a problem on the local scale.</p>
<p><strong className="hl">Hustle:</strong> A character can hustle without a problem on the local scale. See Overland Movement (next topic) for movement measured in miles per hour.</p>
<p><strong className="hl">Run:</strong> A character can run for a number of rounds equal to his Constitution score on the local scale without needing to rest. See <Link to="/rule/run">here</Link> for rules covering extended periods of running.</p>
</>};
const _overland_movement = {title: "Overland Movement", parent_topics: ["basics","movement"], siblings: ["tactical_movement","local_movement","overland_movement","evasion_and_pursuit"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 171</Link></p>
<p>Characters covering long distances cross-country use overland movement. Overland movement is measured in miles per hour or miles per day. A day represents 8 hours of actual travel time. For rowed watercraft, a day represents 10 hours of rowing. For a sailing ship, it represents 24 hours.</p>
<p><strong className="hl">Walk:</strong> A character can walk 8 hours in a day of travel without a problem. Walking for longer than that can wear him out (see Forced March, below).</p>
<p><strong className="hl">Hustle:</strong> A character can hustle for 1 hour without a problem. Hustling for a second hour in between sleep cycles deals 1 point of nonlethal damage, and each additional hour deals twice the damage taken during the previous hour of hustling. A character who takes any nonlethal damage from hustling becomes fatigued.</p>
<p>A fatigued character can't run or charge and takes a penalty of -2 to Strength and Dexterity. Eliminating the nonlethal damage also eliminates the fatigue.</p>
<p><strong className="hl">Run:</strong> A character can't run for an extended period of time. Attempts to run and rest in cycles effectively work out to a hustle.</p>
<p><strong className="hl">Terrain:</strong> The terrain through which a character travels affects the distance he can cover in an hour or a day (see Table 7-8). A highway is a straight, major, paved road. A road is typically a dirt track. A trail is like a road, except that it allows only single-file travel and does not benefit a party traveling with vehicles. Trackless terrain is a wild area with no paths.</p>
<p><strong className="hl">Forced March:</strong> In a day of normal walking, a character walks for 8 hours. The rest of the daylight time is spent making and breaking camp, resting, and eating.</p>
<p>A character can walk for more than 8 hours in a day by making a forced march. For each hour of marching beyond 8 hours, a Constitution check (DC 10, +2 per extra hour) is required. If the check fails, the character takes 1d6 points of nonlethal damage. A character who takes any nonlethal damage from a forced march becomes fatigued. Eliminating the nonlethal damage also eliminates the fatigue. It's possible for a character to march into unconsciousness by pushing himself too hard.</p>
<p><strong className="hl">Mounted Movement:</strong> A mount bearing a rider can move at a hustle. The damage it takes when doing so, however, is lethal damage, not nonlethal damage. The creature can also be ridden in a forced march, but its Constitution checks automatically fail, and the damage it takes is lethal damage. Mounts also become fatigued when they take any damage from hustling or forced marches.</p>
<p>See Table 7-9: Mounts and Vehicles for mounted speeds and speeds for vehicles pulled by draft animals.</p>
<p><strong className="hl">Waterborne Movement:</strong> See Table 7-9: Mounts and Vehicles for speeds for water vehicles.</p>
<h3 id="rule-overland_movement-table-7-8-terrain-and-overland-movement">Table 7-8: Terrain and Overland Movement</h3>
<ScrollContainer id="rule-overland_movement--table-0"><table>
<thead>
<tr>
<th>Terrain</th>
<th>Highway</th>
<th>Road or Trail</th>
<th>Trackless</th>
</tr>
</thead>
<tbody><tr>
<td>Desert, sandy</td>
<td>&times;1</td>
<td>&times;1/2</td>
<td>&times;1/2</td>
</tr>
<tr>
<td>Forest</td>
<td>&times;1</td>
<td>&times;1</td>
<td>&times;1/2</td>
</tr>
<tr>
<td>Hills</td>
<td>&times;1</td>
<td>&times;3/4</td>
<td>&times;1/2</td>
</tr>
<tr>
<td>Jungle</td>
<td>&times;1</td>
<td>&times;3/4</td>
<td>&times;1/4</td>
</tr>
<tr>
<td>Moor</td>
<td>&times;1</td>
<td>&times;1</td>
<td>&times;3/4</td>
</tr>
<tr>
<td>Mountains</td>
<td>&times;3/4</td>
<td>&times;3/4</td>
<td>&times;1/2</td>
</tr>
<tr>
<td>Plains</td>
<td>&times;1</td>
<td>&times;1</td>
<td>&times;3/4</td>
</tr>
<tr>
<td>Swamp</td>
<td>&times;1</td>
<td>&times;3/4</td>
<td>&times;1/2</td>
</tr>
<tr>
<td>Tundra, frozen</td>
<td>&times;1</td>
<td>&times;3/4</td>
<td>&times;3/4</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-overland_movement-table-7-9-mounts-and-vehicles">Table 7-9: Mounts and Vehicles</h3>
<ScrollContainer id="rule-overland_movement--table-1"><table>
<thead>
<tr>
<th>Mount (carrying load)/Vehicle/Ship</th>
<th>Per Hour</th>
<th>Per Day</th>
</tr>
</thead>
<tbody><tr>
<td>Light horse</td>
<td>5miles</td>
<td>40 miles</td>
</tr>
<tr>
<td>Light horse (175-525 lbs.)<sup><InnerLink showBacklink="backlink-rule-overland_movement-ref-1-1" id="rule-overland_movement-ref-1-1" data-hash-target to="rule-overland_movement-1">1</InnerLink></sup></td>
<td>3-1/2miles</td>
<td>28 miles</td>
</tr>
<tr>
<td>Heavy horse</td>
<td>5 miles</td>
<td>40 miles</td>
</tr>
<tr>
<td>Heavy Horse (229-690 lbs.)<sup><InnerLink showBacklink="backlink-rule-overland_movement-ref-1-2" id="rule-overland_movement-ref-1-2" data-hash-target to="rule-overland_movement-1">1</InnerLink></sup></td>
<td>3-1/2 miles</td>
<td>28 miles</td>
</tr>
<tr>
<td>Pony</td>
<td>4 miles</td>
<td>32 miles</td>
</tr>
<tr>
<td>Pony (151-450 lbs.)<sup><InnerLink showBacklink="backlink-rule-overland_movement-ref-1-3" id="rule-overland_movement-ref-1-3" data-hash-target to="rule-overland_movement-1">1</InnerLink></sup></td>
<td>3 miles</td>
<td>24 miles</td>
</tr>
<tr>
<td>Dog, riding</td>
<td>4 miles</td>
<td>32 miles</td>
</tr>
<tr>
<td>Dog, riding (101-300 lbs.)<sup><InnerLink showBacklink="backlink-rule-overland_movement-ref-1-4" id="rule-overland_movement-ref-1-4" data-hash-target to="rule-overland_movement-1">1</InnerLink></sup></td>
<td>3 miles</td>
<td>24 miles</td>
</tr>
<tr>
<td>Cart or wagon</td>
<td>2 miles</td>
<td>16 miles</td>
</tr>
<tr>
<td>Raft or barge (poled or towed)<sup><InnerLink showBacklink="backlink-rule-overland_movement-ref-2-1" id="rule-overland_movement-ref-2-1" data-hash-target to="rule-overland_movement-2">2</InnerLink></sup></td>
<td>1/2 mile</td>
<td>5 miles</td>
</tr>
<tr>
<td>Keelboat (rowed)<sup><InnerLink showBacklink="backlink-rule-overland_movement-ref-2-2" id="rule-overland_movement-ref-2-2" data-hash-target to="rule-overland_movement-2">2</InnerLink></sup></td>
<td>1 mile</td>
<td>10 miles</td>
</tr>
<tr>
<td>Rowboat (rowed)<sup><InnerLink showBacklink="backlink-rule-overland_movement-ref-2-3" id="rule-overland_movement-ref-2-3" data-hash-target to="rule-overland_movement-2">2</InnerLink></sup></td>
<td>1-1/2 miles</td>
<td>15 miles</td>
</tr>
<tr>
<td>Sailing ship (sailed)</td>
<td>2 miles</td>
<td>48 miles</td>
</tr>
<tr>
<td>Warship (sailed and rowed)</td>
<td>2-1/2 miles</td>
<td>60 miles</td>
</tr>
<tr>
<td>Longship (sailed and rowed)</td>
<td>3 miles</td>
<td>72 miles</td>
</tr>
<tr>
<td>Galley (rowed and sailed)</td>
<td>4 miles</td>
<td>96 miles</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-overland_movement-label">Footnotes</h3>
<ol>
<li id="rule-overland_movement-1">
<p>Quadrupeds, such as horses, can carry heavier load than characters can. See <Link to="/rule/carrying_capacity">Carrying Capacity</Link> for more information. <InnerLink id="backlink-rule-overland_movement-ref-1-1" data-hash-target to="rule-overland_movement-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink> <InnerLink id="backlink-rule-overland_movement-ref-1-2" data-hash-target to="rule-overland_movement-ref-1-2" aria-label="Back to reference 1-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-overland_movement-ref-1-3" data-hash-target to="rule-overland_movement-ref-1-3" aria-label="Back to reference 1-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-rule-overland_movement-ref-1-4" data-hash-target to="rule-overland_movement-ref-1-4" aria-label="Back to reference 1-4">↩<sup>4</sup></InnerLink></p>
</li>
<li id="rule-overland_movement-2">
<p>Rafts, barges, keelboats, and rowboats are most often used on lakes and rivers. If going downstream, add the speed of the current (typically 3 miles per hour) to the speed of the vehicle. In addition to 10 hours of being rowed, the vehicle can also float an additional 14 hours, if someone can guide it, adding an additional 42 miles to the daily distance traveled. These vehicles can't be rowed against any significant current, but they can be pulled upstream by draft animals on the shores. <InnerLink id="backlink-rule-overland_movement-ref-2-1" data-hash-target to="rule-overland_movement-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink> <InnerLink id="backlink-rule-overland_movement-ref-2-2" data-hash-target to="rule-overland_movement-ref-2-2" aria-label="Back to reference 2-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-overland_movement-ref-2-3" data-hash-target to="rule-overland_movement-ref-2-3" aria-label="Back to reference 2-3">↩<sup>3</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
const _evasion_and_pursuit = {title: "Evasion and Pursuit", parent_topics: ["basics","movement"], siblings: ["tactical_movement","local_movement","overland_movement","evasion_and_pursuit"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 171</Link></p>
<p>In round-by-round movement, when simply counting off squares, it's impossible for a slow character to get away from a determined fast character without mitigating circumstances. Likewise, it's no problem for a fast character to get away from a slower one.</p>
<p>When the speeds of the two concerned characters are equal, there's a simple way to resolve a chase: If one creature is pursuing another, both are moving at the same speed, and the chase continues for at least a few rounds, have them make opposed Dexterity checks to see who is the faster over those rounds. If the creature being chased wins, it escapes. If the pursuer wins, it catches the fleeing creature.</p>
<p>Sometimes a chase occurs overland and could last all day, with the two sides only occasionally getting glimpses of each other at a distance. In the case of a long chase, an opposed Constitution check made by all parties determines which can keep pace the longest. If the creature being chased rolls the highest, it gets away. If not, the chaser runs down its prey, outlasting it with stamina.</p>
<p><strong>Also see:</strong> <Link to="/rule/chases">Chases (Gamemastery)</Link> and <Link to="/rule/pursuit">Pursuit (Advanced GM Topics)</Link></p>
</>};
const _vision_and_light = {title: "Vision and Light", parent_topics: ["basics"], siblings: ["how_to_play","common_terms","character_creation","ability_scores","races","classes","character_advancement","alignment","skills","feats","equipment","traits_and_other_details","magic_items","movement","vision_and_light","breaking_things","magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 172</Link></p>
<p>Dwarves and half-orcs have darkvision, but other races need light to see by. See Table 7-10 for the radius that a light source illuminates and how long it lasts. The increased entry indicates an area outside the lit radius in which the light level is increased by one step (from darkness to dim light, for example).</p>
<p>In an area of <strong className="hl">bright light</strong> all characters can see clearly. Some creatures, such as those with <Link to="/umr/light_sensitivity">light sensitivity</Link> and <Link to="/umr/light_blindness">light blindness</Link>, take penalties while in areas of bright light. A creature can't use Stealth in an area of bright light unless it is invisible or has cover. Areas of bright light include outside in direct sunshine and inside the area of a daylight spell.</p>
<p><strong className="hl">Normal light</strong> functions just like bright light, but characters with light sensitivity and light blindness do not take penalties. Areas of normal light include underneath a forest canopy during the day, within 20 feet of a torch, and inside the area of a light spell.</p>
<p>In an area of <strong className="hl">dim light</strong> a character can see somewhat. Creatures within this area have concealment (20% miss chance in combat) from those without darkvision or the ability to see in darkness. A creature within an area of dim light can make a Stealth check to conceal itself. Areas of dim light include outside at night with a moon in the sky, bright starlight, and the area between 20 and 40 feet from a torch.</p>
<p>In areas of darkness, creatures without darkvision are effectively blinded. In addition to the obvious effects, a blinded creature has a 50% miss chance in combat (all opponents have <Link to="/rule/concealment">total concealment</Link>), loses any Dexterity bonus to AC, takes a -2 penalty to AC, and takes a -4 penalty on Perception checks that rely on sight and most Strength- and Dexterity-based skill checks. Areas of darkness include an unlit dungeon chamber, most caverns, and outside on a cloudy, moonless night.</p>
<p>Characters with low-light vision (elves, gnomes, and half-elves) can see objects twice as far away as the given radius. Double the effective radius of bright light, normal light, and dim light for such characters.</p>
<p>Characters with darkvision (dwarves and half-orcs) can see lit areas normally as well as dark areas within 60 feet. A creature can't hide within 60 feet of a character with darkvision unless it is invisible or has cover.</p>
<h3 id="rule-vision_and_light-table-7-10-light-sources-and-illumination">Table 7-10: Light Sources and Illumination</h3>
<ScrollContainer id="rule-vision_and_light--table-0"><table>
<thead>
<tr>
<th>Object/Spell</th>
<th>Normal</th>
<th>Increased</th>
<th>Duration</th>
</tr>
</thead>
<tbody><tr>
<td>Candle</td>
<td>n/a<sup><InnerLink showBacklink="backlink-rule-vision_and_light-ref-1-1" id="rule-vision_and_light-ref-1-1" data-hash-target to="rule-vision_and_light-1">1</InnerLink></sup></td>
<td>5 ft.</td>
<td>1 hr.</td>
</tr>
<tr>
<td>Everburning torch</td>
<td>20 ft.</td>
<td>40 ft.</td>
<td>Permanent</td>
</tr>
<tr>
<td>Lamp, common</td>
<td>15 ft.</td>
<td>30 ft.</td>
<td>6 hr./pint</td>
</tr>
<tr>
<td>Lantern, bullseye</td>
<td>60-ft. cone</td>
<td>120-ft. cone</td>
<td>6 hr./pint</td>
</tr>
<tr>
<td>Lantern, hooded</td>
<td>30 ft.</td>
<td>60 ft.</td>
<td>6 hr./pint</td>
</tr>
<tr>
<td>Sunrod</td>
<td>30 ft.</td>
<td>60 ft.</td>
<td>6 hr.</td>
</tr>
<tr>
<td>Torch</td>
<td>20 ft.</td>
<td>40 ft.</td>
<td>1 hr.</td>
</tr>
<tr>
<td><Link to="/spell/continual_flame">Continual flame</Link></td>
<td>20 ft.</td>
<td>40 ft.</td>
<td>Permanent</td>
</tr>
<tr>
<td><Link to="/spell/dancing_lights">Dancing lights</Link> (torches)</td>
<td>20 ft. (each)</td>
<td>40 ft. (each)</td>
<td>1 min.</td>
</tr>
<tr>
<td><Link to="/spell/daylight">Daylight</Link></td>
<td>60 ft.<sup><InnerLink showBacklink="backlink-rule-vision_and_light-ref-2-1" id="rule-vision_and_light-ref-2-1" data-hash-target to="rule-vision_and_light-2">2</InnerLink></sup></td>
<td>120 ft.</td>
<td>10 min./level</td>
</tr>
<tr>
<td><Link to="/spell/light">Light</Link></td>
<td>20 ft.</td>
<td>40 ft.</td>
<td>10 min./level</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-vision_and_light-label">Footnotes</h3>
<ol>
<li id="rule-vision_and_light-1">
<p>A candle does not provide normal illumination, only dim light. <InnerLink id="backlink-rule-vision_and_light-ref-1-1" data-hash-target to="rule-vision_and_light-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="rule-vision_and_light-2">
<p>The light for a daylight spell is bright light. <InnerLink id="backlink-rule-vision_and_light-ref-2-1" data-hash-target to="rule-vision_and_light-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _breaking_things = {title: "Breaking Things", parent_topics: ["basics"], siblings: ["how_to_play","common_terms","character_creation","ability_scores","races","classes","character_advancement","alignment","skills","feats","equipment","traits_and_other_details","magic_items","movement","vision_and_light","breaking_things","magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 173</Link></p>
<p>When attempting to break an object, you have two choices: smash it with a weapon or <InnerLink toTop to="rule-breaking_things-breaking-items">break it</InnerLink> with sheer strength.</p>
<h3 id="rule-breaking_things-smashing-an-object">Smashing an Object</h3>
<p>Smashing a weapon or shield with a slashing or bludgeoning weapon is accomplished with the <Link to="/rule/sunder">sunder</Link> combat maneuver. Smashing an object is like sundering a weapon or shield, except that your combat maneuver check is opposed by the object's AC. Generally, you can smash an object only with a bludgeoning or slashing weapon.</p>
<p><strong className="hl">Armor Class:</strong> Objects are easier to hit than creatures because they don't usually move, but many are tough enough to shrug off some damage from each blow. An object's Armor Class is equal to 10 + its size modifier (see Table 7-11) + its Dexterity modifier. An inanimate object has not only a Dexterity of 0 (-5 penalty to AC), but also an additional -2 penalty to its AC. Furthermore, if you take a full-round action to line up a shot, you get an automatic hit with a melee weapon and a +5 bonus on attack rolls with a ranged weapon.</p>
<p><strong className="hl">Hardness:</strong> Each object has <strong>hardness</strong> - a number that represents how well it resists damage. When an object is damaged, subtract its hardness from the damage. Only damage in excess of its hardness is deducted from the object's hit points (see Table 7-12, Table 7-13, and Table 7-14).</p>
<p><strong className="hl">Hit Points:</strong> An object's hit point total depends on what it is made of and how big it is (see Table 7-12, Table 7-13, and Table 7-14). Objects that take damage equal to or greater than half their total hit points gain the <Link to="/misc/broken">broken condition</Link>. When an object's hit points reach 0, it's ruined.</p>
<p>Very large objects have separate hit point totals for different sections.</p>
<p><strong className="hl">Energy Attacks:</strong> Energy attacks deal half damage to most objects. Divide the damage by 2 before applying the object's hardness. Some energy types might be particularly effective against certain objects, subject to GM discretion. For example, fire might do full damage against parchment, cloth, and other objects that burn easily. Sonic might do full damage against glass and crystal objects.</p>
<p><strong className="hl">Ranged Weapon Damage:</strong> Objects take half damage from ranged weapons (unless the weapon is a <Link to="/rule/siege_engines">siege engine</Link> or something similar). Divide the damage dealt by 2 before applying the object's hardness.</p>
<p><strong className="hl">Ineffective Weapons:</strong> Certain weapons just can't effectively deal damage to certain objects. Likewise, most melee weapons have little effect on stone walls and doors, unless they are designed for breaking up stone, such as a pick or hammer.</p>
<p><strong className="hl">Immunities:</strong> Objects are immune to nonlethal damage and to critical hits.</p>
<p><strong className="hl">Magic Armor, Shields, and Weapons:</strong> Each +1 of enhancement bonus adds 2 to the hardness of armor, a weapon, or a shield, and +10 to the item's hit points.</p>
<p><strong className="hl">Vulnerability to Certain Attacks:</strong> Certain attacks are especially successful against some objects. In such cases, attacks deal double their normal damage and may ignore the object's hardness.</p>
<p><strong className="hl">Damaged Objects:</strong> A damaged object remains functional with the broken condition until the item's hit points are reduced to 0, at which point it is destroyed.</p>
<p>Damaged (but not destroyed) objects can be repaired with the Craft skill and a number of spells.</p>
<p><strong className="hl">Saving Throws:</strong> Nonmagical, unattended items never make saving throws. They are considered to have failed their saving throws, so they are always fully affected by spells and other attacks that allow saving throws to resist or negate. An item attended by a character (being grasped, touched, or worn) makes saving throws as the character (that is, using the character's saving throw bonus).</p>
<p>Magic items always get saving throws. A magic item's Fortitude, Reflex, and Will save bonuses are equal to 2 + half its caster level. An attended magic item either makes saving throws as its owner or uses its own saving throw bonus, whichever is better.</p>
<p><strong className="hl">Animated Objects:</strong> Animated objects count as creatures for purposes of determining their Armor Class (do not treat them as inanimate objects).</p>
<h3 id="rule-breaking_things-table-7-11-size-and-armor-class-of-objects">Table 7-11: Size and Armor Class of Objects</h3>
<ScrollContainer id="rule-breaking_things--table-0"><table>
<thead>
<tr>
<th>Size</th>
<th>AC Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Colossal</td>
<td>-8</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>-4</td>
</tr>
<tr>
<td>Huge</td>
<td>-2</td>
</tr>
<tr>
<td>Large</td>
<td>-1</td>
</tr>
<tr>
<td>Medium</td>
<td>+0</td>
</tr>
<tr>
<td>Small</td>
<td>+1</td>
</tr>
<tr>
<td>Tiny</td>
<td>+2</td>
</tr>
<tr>
<td>Diminutive</td>
<td>+4</td>
</tr>
<tr>
<td>Fine</td>
<td>+8</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-breaking_things-table-7-12-common-armor-weapon-and-shield-hardness-and-hit-points">Table 7-12: Common Armor, Weapon, and Shield Hardness and Hit Points</h3>
<ScrollContainer id="rule-breaking_things--table-1"><table>
<thead>
<tr>
<th>Weapon or Shield</th>
<th>Hardness<sup><InnerLink showBacklink="backlink-rule-breaking_things-ref-1-1" id="rule-breaking_things-ref-1-1" data-hash-target to="rule-breaking_things-1">1</InnerLink></sup></th>
<th>Hit Points<sup><InnerLink showBacklink="backlink-rule-breaking_things-ref-2-1" id="rule-breaking_things-ref-2-1" data-hash-target to="rule-breaking_things-2">2</InnerLink></sup></th>
</tr>
</thead>
<tbody><tr>
<td>Light blade</td>
<td>10</td>
<td>2</td>
</tr>
<tr>
<td>One-handed blade</td>
<td>10</td>
<td>5</td>
</tr>
<tr>
<td>Two-handed blade</td>
<td>10</td>
<td>10</td>
</tr>
<tr>
<td>Light metal-hafted weapon</td>
<td>10</td>
<td>10</td>
</tr>
<tr>
<td>One-handed metal-hafted weapon</td>
<td>10</td>
<td>20</td>
</tr>
<tr>
<td>Light hafted weapon</td>
<td>5</td>
<td>2</td>
</tr>
<tr>
<td>One-handed hafted weapon</td>
<td>5</td>
<td>5</td>
</tr>
<tr>
<td>Two-handed hafted weapon</td>
<td>5</td>
<td>10</td>
</tr>
<tr>
<td>Projectile weapon</td>
<td>5</td>
<td>5</td>
</tr>
<tr>
<td>Armor</td>
<td>Special<sup><InnerLink showBacklink="backlink-rule-breaking_things-ref-3-1" id="rule-breaking_things-ref-3-1" data-hash-target to="rule-breaking_things-3">3</InnerLink></sup></td>
<td>armor bonus &times; 5</td>
</tr>
<tr>
<td>Buckler</td>
<td>10</td>
<td>5</td>
</tr>
<tr>
<td>Light wooden shield</td>
<td>5</td>
<td>7</td>
</tr>
<tr>
<td>Heavy wooden shield</td>
<td>5</td>
<td>15</td>
</tr>
<tr>
<td>Light steel shield</td>
<td>10</td>
<td>10</td>
</tr>
<tr>
<td>Heavy steel shield</td>
<td>10</td>
<td>20</td>
</tr>
<tr>
<td>Tower shield</td>
<td>5</td>
<td>20</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-breaking_things-table-7-13-substance-hardness-and-hit-points">Table 7-13: Substance Hardness and Hit Points</h3>
<ScrollContainer id="rule-breaking_things--table-2"><table>
<thead>
<tr>
<th>Substance</th>
<th>Hardness</th>
<th>Hit Points</th>
</tr>
</thead>
<tbody><tr>
<td>Glass</td>
<td>1</td>
<td>1/in. of thickness</td>
</tr>
<tr>
<td>Paper or cloth</td>
<td>0</td>
<td>2/in. of thickness</td>
</tr>
<tr>
<td>Rope</td>
<td>0</td>
<td>2/in. of thickness</td>
</tr>
<tr>
<td>Ice</td>
<td>0</td>
<td>3/in. of thickness</td>
</tr>
<tr>
<td>Leather or hide</td>
<td>2</td>
<td>5/in. of thickness</td>
</tr>
<tr>
<td>Wood</td>
<td>5</td>
<td>10/in. of thickness</td>
</tr>
<tr>
<td>Stone</td>
<td>8</td>
<td>15/in. of thickness</td>
</tr>
<tr>
<td>Iron or steel</td>
<td>10</td>
<td>30/in. of thickness</td>
</tr>
<tr>
<td>Mithral</td>
<td>15</td>
<td>30/in. of thickness</td>
</tr>
<tr>
<td>Adamantine</td>
<td>20</td>
<td>40/in. of thickness</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-breaking_things-table-7-14-object-hardness-and-hit-points">Table 7-14: Object Hardness and Hit Points</h3>
<ScrollContainer id="rule-breaking_things--table-3"><table>
<thead>
<tr>
<th>Object</th>
<th>Hardness</th>
<th>Hit Points</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Rope (1 in. diameter)</td>
<td>0</td>
<td>2</td>
<td>23</td>
</tr>
<tr>
<td>Simple wooden door</td>
<td>5</td>
<td>10</td>
<td>13</td>
</tr>
<tr>
<td>Small chest</td>
<td>5</td>
<td>1</td>
<td>17</td>
</tr>
<tr>
<td>Good wooden door</td>
<td>5</td>
<td>15</td>
<td>18</td>
</tr>
<tr>
<td>Treasure chest</td>
<td>5</td>
<td>15</td>
<td>23</td>
</tr>
<tr>
<td>Strong wooden door</td>
<td>5</td>
<td>20</td>
<td>23</td>
</tr>
<tr>
<td>Masonry wall (1 ft. thick)</td>
<td>8</td>
<td>90</td>
<td>35</td>
</tr>
<tr>
<td>Hewn stone (3 ft. thick)</td>
<td>8</td>
<td>540</td>
<td>50</td>
</tr>
<tr>
<td>Chain</td>
<td>10</td>
<td>5</td>
<td>26</td>
</tr>
<tr>
<td>Manacles</td>
<td>10</td>
<td>10</td>
<td>26</td>
</tr>
<tr>
<td>Masterwork manacles</td>
<td>10</td>
<td>10</td>
<td>28</td>
</tr>
<tr>
<td>Iron door (2 in. thick)</td>
<td>10</td>
<td>60</td>
<td>28</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-breaking_things-breaking-items">Breaking Items</h3>
<p>When a character tries to break or burst something with sudden force rather than by dealing damage, use a Strength check (rather than an attack roll and damage roll, as with the sunder special attack) to determine whether he succeeds. Since hardness doesn't affect an object's break DC, this value depends more on the construction of the item than on the material the item is made of. Consult Table 7-15 for a list of common break DCs.</p>
<p>If an item has lost half or more of its hit points, the item gains the <Link to="/misc/broken">broken condition</Link> and the DC to break it drops by 2.</p>
<p>Larger and smaller creatures get size bonuses and size penalties on Strength checks to break open doors as follows: Fine -16, Diminutive -12, Tiny -8, Small -4, Large +4, Huge +8, Gargantuan +12, Colossal +16.</p>
<p>A <Link to="/eq-misc/crowbar">crowbar</Link> or <Link to="/eq-misc/portable_ram">portable ram</Link> improves a character's chance of breaking open a door.</p>
<h3 id="rule-breaking_things-table-7-15-dcs-to-break-or-burst-items">Table 7-15: DCs to Break or Burst Items</h3>
<ScrollContainer id="rule-breaking_things--table-4"><table>
<thead>
<tr>
<th>Strength Check to:</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Break down simple door</td>
<td>13</td>
</tr>
<tr>
<td>Break down good door</td>
<td>18</td>
</tr>
<tr>
<td>Break down strong door</td>
<td>23</td>
</tr>
<tr>
<td>Burst rope bonds</td>
<td>23</td>
</tr>
<tr>
<td>Bend iron bars</td>
<td>24</td>
</tr>
<tr>
<td>Break down barred door</td>
<td>25</td>
</tr>
<tr>
<td>Burst chain bonds</td>
<td>26</td>
</tr>
<tr>
<td>Break down iron door</td>
<td>28</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-breaking_things-conditions-that-alter-dcs">Conditions That Alter DCs</h3>
<ScrollContainer id="rule-breaking_things--table-5"><table>
<thead>
<tr>
<th>Condition</th>
<th>DC Adjustment*</th>
</tr>
</thead>
<tbody><tr>
<td>Hold portal</td>
<td>+5</td>
</tr>
<tr>
<td>Arcane lock</td>
<td>+10</td>
</tr>
</tbody></table></ScrollContainer>
<p>* If both apply, use the larger number.</p>
<section data-footnotes>
<h3 id="rule-breaking_things-label">Footnotes</h3>
<ol>
<li id="rule-breaking_things-1">
<p>Add +2 for each +1 enhancement bonus of magic items. <InnerLink id="backlink-rule-breaking_things-ref-1-1" data-hash-target to="rule-breaking_things-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="rule-breaking_things-2">
<p>The hp value given is for Medium armor, weapons, and shields. Divide by 2 for each size category of the item smaller than Medium, or multiply it by 2 for each size category larger than Medium. Add 10 hp for each +1 enhancement bonus of magic items. <InnerLink id="backlink-rule-breaking_things-ref-2-1" data-hash-target to="rule-breaking_things-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="rule-breaking_things-3">
<p>Varies by material; see Table 7-13: Substance Hardness and Hit Points. <InnerLink id="backlink-rule-breaking_things-ref-3-1" data-hash-target to="rule-breaking_things-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _magic = {title: "Magic and Spellcasting", parent_topics: ["basics"], siblings: ["how_to_play","common_terms","character_creation","ability_scores","races","classes","character_advancement","alignment","skills","feats","equipment","traits_and_other_details","magic_items","movement","vision_and_light","breaking_things","magic"], subtopics: ["casting_spells","spell_descriptions","arcane_spells","divine_spells","psychic_magic","special_abilities"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 206</Link></p>
<p>From creating a wisp of light to causing the ground itself to shatter and break, spells are a source of immense power. A spell is a one-time magical effect. Spells come in two types: arcane (cast by bards, sorcerers, and wizards) and divine (cast by clerics, druids, and experienced paladins and rangers). Some spellcasters select their spells from a limited list of spells known, while others have access to a wide variety of options.</p>
<p>Most spellcasters prepare spells in advance - whether from a spellbook or through prayers - while some cast spells spontaneously without preparation. Despite these different ways characters use to learn or prepare their spells, when it comes to casting them, the spells are very much alike.</p>
</>};
const _casting_spells = {title: "Casting Spells", parent_topics: ["basics","magic"], siblings: ["casting_spells","spell_descriptions","arcane_spells","divine_spells","psychic_magic","special_abilities"], subtopics: ["choosing_a_spell","concentration","counterspells","caster_level","spell_failure","special_spell_effects","combining_magic_effects"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 206</Link></p>
<p>Whether a spell is arcane or divine, and whether a character prepares spells in advance or chooses them on the spot, casting a spell works the same way.</p>
</>};
const _choosing_a_spell = {title: "Choosing a Spell", parent_topics: ["basics","magic","casting_spells"], siblings: ["choosing_a_spell","concentration","counterspells","caster_level","spell_failure","special_spell_effects","combining_magic_effects"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 206</Link></p>
<p>First you must choose which spell to cast. If you're a cleric, druid, experienced paladin, experienced ranger, or wizard, you select from among spells prepared earlier in the day and not yet cast (see Preparing Wizard Spells and Preparing Divine Spells).</p>
<p>If you're a bard or sorcerer, you can select any spell you know, provided you are capable of casting spells of that level or higher.</p>
<p>To cast a spell, you must be able to speak (if the spell has a verbal component), gesture (if it has a somatic component), and manipulate the material components or focus (if any). Additionally, you must concentrate to cast a spell.</p>
<p>If a spell has multiple versions, you choose which version to use when you cast it. You don't have to prepare (or learn, in the case of a bard or sorcerer) a specific version of the spell.</p>
<p>Once you've cast a prepared spell, you can't cast it again until you prepare it again. (If you've prepared multiple copies of a single spell, you can cast each copy once.) If you're a bard or sorcerer, casting a spell counts against your daily limit for spells of that spell level, but you can cast the same spell again if you haven't reached your limit.</p>
</>};
const _concentration = {title: "Concentration", parent_topics: ["basics","magic","casting_spells"], siblings: ["choosing_a_spell","concentration","counterspells","caster_level","spell_failure","special_spell_effects","combining_magic_effects"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 206</Link></p>
<p>To cast a spell, you must concentrate. If something interrupts your concentration while you're casting, you must make a concentration check or lose the spell. When you make a concentration check, you roll d20 and add your caster level and the ability score modifier used to determine bonus spells of the same type. Clerics, druids, and rangers add their Wisdom modifier. Bards, paladins, and sorcerers add their Charisma modifier. Finally, wizards add their Intelligence modifier. The more distracting the interruption and the higher the level of the spell you are trying to cast, the higher the DC (see Table 9-1). If you fail the check, you lose the spell just as if you had cast it to no effect.</p>
<p><strong className="hl">Injury:</strong> If you take damage while trying to cast a spell, you must make a concentration check with a DC equal to 10 + the damage taken + the level of the spell you're casting. If you fail the check, you lose the spell without effect. The interrupting event strikes during spellcasting if it comes between the time you started and the time you complete a spell (for a spell with a casting time of 1 full round or more) or if it comes in response to your casting the spell (such as an attack of opportunity provoked by the spell or a contingent attack, such as a readied action).</p>
<p>If you are taking continuous damage, such as from an acid arrow or by standing in a lake of lava, half the damage is considered to take place while you are casting a spell. You must make a concentration check with a DC equal to 10 + 1/2 the damage that the continuous source last dealt + the level of the spell you're casting. If the last damage dealt was the last damage that the effect could deal, then the damage is over and does not distract you.</p>
<p><strong className="hl">Spell:</strong> If you are affected by a spell while attempting to cast a spell of your own, you must make a concentration check or lose the spell you are casting. If the spell affecting you deals damage, the DC is 10 + the damage taken + the level of the spell you're casting.</p>
<p>If the spell interferes with you or distracts you in some other way, the DC is the spell's saving throw DC + the level of the spell you're casting. For a spell with no saving throw, it's the DC that the spell's saving throw would have if a save were allowed (10 + spell level + caster's ability score).</p>
<p><strong className="hl">Grappled or Pinned:</strong> Casting a spell while you have the grappled or pinned condition is difficult and requires a concentration check (DC 10 + the grappler's CMB + the level of the spell you're casting). Pinned creatures can only cast spells that do not have somatic components.</p>
<p><strong className="hl">Vigorous Motion:</strong> If you are riding on a moving mount, taking a bouncy ride in a wagon, on a small boat in rough water, belowdecks in a storm-tossed ship, or simply being jostled in a similar fashion, you must make a concentration check (DC 10 + the level of the spell you're casting) or lose the spell.</p>
<p><strong className="hl">Violent Motion:</strong> If you are on a galloping horse, taking a very rough ride in a wagon, on a small boat in rapids or in a storm, on deck in a storm-tossed ship, or being pitched roughly about in a similar fashion, you must make a concentration check (DC 15 + the level of the spell you're casting) or lose the spell. If the motion is extremely violent, such as that caused by an earthquake, the DC is equal to 20 + the level of the spell you're casting.</p>
<p><strong className="hl">Violent Weather:</strong> You must make a concentration check if you try to cast a spell in violent weather. If you are in a high wind carrying blinding rain or sleet, the DC is 5 + the level of the spell you're casting. If you are in wind-driven hail, dust, or debris, the DC is 10 + the level of the spell you're casting. In either case, you lose the spell if you fail the concentration check. If the weather is caused by a spell, use the rules as described in the spell's description.</p>
<p><strong className="hl">Casting Defensively:</strong> If you want to cast a spell without provoking any attacks of opportunity, you must make a concentration check (DC 15 + double the level of the spell you're casting) to succeed. You lose the spell if you fail.</p>
<p><strong className="hl">Entangled:</strong> If you want to cast a spell while entangled in a net or by a tanglefoot bag or while you're affected by a spell with similar effects, you must make a concentration check to cast the spell (DC 15 + the level of the spell you're casting). You lose the spell if you fail.</p>
<h3 id="rule-concentration-table-9-1-concentration-check-dcs">Table 9-1: Concentration Check DCs</h3>
<ScrollContainer id="rule-concentration--table-0"><table>
<thead>
<tr>
<th>Situation</th>
<th>Concentration Check DC</th>
</tr>
</thead>
<tbody><tr>
<td>Cast defensively</td>
<td>15 + double spell level</td>
</tr>
<tr>
<td>Injured while casting</td>
<td>10 + damage dealt + spell level</td>
</tr>
<tr>
<td>Continuous damage while casting</td>
<td>10 + 1/2 damage dealt + spell level</td>
</tr>
<tr>
<td>Affected by a non-damaging spell while casting</td>
<td>DC of the spell + spell level</td>
</tr>
<tr>
<td>Grappled or pinned while casting</td>
<td>10 + grappler's CMB + spell level</td>
</tr>
<tr>
<td>Vigorous motion while casting</td>
<td>10 + spell level</td>
</tr>
<tr>
<td>Violent motion while casting</td>
<td>15 + spell level</td>
</tr>
<tr>
<td>Extremely violent motion while casting</td>
<td>20 + spell level</td>
</tr>
<tr>
<td>Wind with rain or sleet while casting</td>
<td>5 + spell level</td>
</tr>
<tr>
<td>Wind with hail and debris while casting</td>
<td>10 + spell level</td>
</tr>
<tr>
<td>Weather caused by spell</td>
<td>see spell</td>
</tr>
<tr>
<td>Entangled while casting</td>
<td>15 + spell level</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _counterspells = {title: "Counterspells", parent_topics: ["basics","magic","casting_spells"], siblings: ["choosing_a_spell","concentration","counterspells","caster_level","spell_failure","special_spell_effects","combining_magic_effects"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 207</Link></p>
<p>It is possible to cast any spell as a counterspell. By doing so, you are using the spell's energy to disrupt the casting of the same spell by another character. Counterspelling works even if one spell is divine and the other arcane.</p>
<p><strong className="hl">How Counterspells Work:</strong> To use a counterspell, you must select an opponent as the target of the counterspell. You do this by choosing to ready an action (<Link to="/rule/combat">see Combat</Link>). In doing so, you elect to wait to complete your action until your opponent tries to cast a spell. You may still move at your normal speed, since ready is a standard action.</p>
<p>If the target of your counterspell tries to cast a spell, make a Spellcraft check (DC 15 + the spell's level). This check is a free action. If the check succeeds, you correctly identify the opponent's spell and can attempt to counter it. If the check fails, you can't do either of these things.</p>
<p>To complete the action, you must then cast an appropriate spell. As a general rule, a spell can only counter itself. If you are able to cast the same spell and you have it prepared (or have a slot of the appropriate level available), you cast it, creating a counterspell effect. If the target is within range, both spells automatically negate each other with no other results.</p>
<p><strong className="hl">Counterspelling Metamagic Spells:</strong> Metamagic feats are not taken into account when determining whether a spell can be countered.</p>
<p><strong className="hl">Specific Exceptions:</strong> Some spells can counter other specific spells, often those with diametrically opposed effects.</p>
<p><strong className="hl">Dispel Magic as a Counterspell:</strong> You can usually use <Link to="/spell/dispel_magic">dispel magic</Link> to counterspell another spell being cast without needing to identify the spell being cast. Dispel magic doesn't always work as a counterspell (see the spell description).</p>
</>};
const _caster_level = {title: "Caster Level", parent_topics: ["basics","magic","casting_spells"], siblings: ["choosing_a_spell","concentration","counterspells","caster_level","spell_failure","special_spell_effects","combining_magic_effects"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 208</Link></p>
<p>A spell's power often depends on its caster level, which for most spellcasting characters is equal to her class level in the class she's using to cast the spell.</p>
<p>You can cast a spell at a lower caster level than normal, but the caster level you choose must be high enough for you to cast the spell in question, and all level-dependent features must be based on the same caster level.</p>
<p>In the event that a class feature or other special ability provides an adjustment to your caster level, that adjustment applies not only to effects based on caster level (such as range, duration, and damage dealt), but also to your caster level check to overcome your target's spell resistance and to the caster level used in dispel checks (both the dispel check and the DC of the check).</p>
</>};
const _spell_failure = {title: "Spell Failure", parent_topics: ["basics","magic","casting_spells"], siblings: ["choosing_a_spell","concentration","counterspells","caster_level","spell_failure","special_spell_effects","combining_magic_effects"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 208</Link></p>
<p>If you ever try to cast a spell in conditions where the characteristics of the spell cannot be made to conform, the casting fails and the spell is wasted.</p>
<p>Spells also fail if your concentration is broken and might fail if you're wearing armor while casting a spell with somatic components.</p>
</>};
const _special_spell_effects = {title: "Special Spell Effects", parent_topics: ["basics","magic","casting_spells"], siblings: ["choosing_a_spell","concentration","counterspells","caster_level","spell_failure","special_spell_effects","combining_magic_effects"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 208</Link></p>
<p>Once you know which creatures (or objects or areas) are affected, and whether those creatures have made successful saving throws (if any were allowed), you can apply whatever results a spell entails.</p>
<p>Many special spell effects are handled according to the school of the spells in question. Certain other special spell features are found across spell schools.</p>
<p><strong className="hl">Attacks:</strong> Some spell descriptions refer to attacking. All offensive combat actions, even those that don't damage opponents, are considered attacks. Attempts to channel energy count as attacks if it would harm any creatures in the area. All spells that opponents resist with saving throws, that deal damage, or that otherwise harm or hamper subjects are attacks. Spells that summon monsters or other allies are not attacks because the spells themselves don't harm anyone.</p>
<p><strong className="hl">Bonus Types:</strong> Usually, a bonus has a type that indicates how the spell grants the bonus. The important aspect of bonus types is that two bonuses of the same type don't generally stack. With the exception of dodge bonuses, most circumstance bonuses, and racial bonuses, only the better bonus of a given type works (see <Link to="/rule/combining_magic_effects">Combining Magical Effects</Link>). The same principle applies to penalties - a character taking two or more penalties of the same type applies only the worst one, although most penalties have no type and thus always stack. Bonuses without a type always stack, unless they are from the same source.</p>
<h3 id="rule-special_spell_effects-bringing-back-the-dead">Bringing Back the Dead</h3>
<p>Several spells have the power to restore slain characters to life.</p>
<p>When a living creature dies, its soul departs its body, leaves the Material Plane, travels through the Astral Plane, and goes to abide on the plane where the creature's deity resides. If the creature did not worship a deity, its soul departs to the plane corresponding to its alignment. Bringing someone back from the dead involves magically retrieving his soul and returning it to his body.</p>
<p><strong className="hl">Negative Levels:</strong> Any creature brought back to life usually gains one or more permanent <Link to="/rule/negative_levels">negative levels</Link>. These levels apply a penalty to most rolls until removed through spells such as <Link to="/spell/restoration">restoration</Link>. If the character was 1st level at the time of death, he loses 2 points of Constitution instead of gaining a negative level.</p>
<p><strong className="hl">Preventing Revivification:</strong> Enemies can take steps to make it more difficult for a character to be returned from the dead. Keeping the body prevents others from using <Link to="/spell/raise_dead">raise dead</Link> or <Link to="/spell/resurrection">resurrection</Link> to restore the slain character to life. Casting <Link to="/spell/trap_the_soul">trap the soul</Link> prevents any sort of revivification unless the soul is first released.</p>
<p><strong className="hl">Revivification Against One's Will:</strong> A soul can't be returned to life if it doesn't wish to be. A soul knows the name, alignment, and patron deity (if any) of the character attempting to revive it and may refuse to return on that basis.</p>
</>};
const _combining_magic_effects = {title: "Combining Magic Effects", parent_topics: ["basics","magic","casting_spells"], siblings: ["choosing_a_spell","concentration","counterspells","caster_level","spell_failure","special_spell_effects","combining_magic_effects"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 208</Link></p>
<p>Spells or magical effects usually work as described, no matter how many other spells or magical effects happen to be operating in the same area or on the same recipient. Except in special cases, a spell does not affect the way another spell operates. Whenever a spell has a specific effect on other spells, the spell description explains that effect. Several other general rules apply when spells or magical effects operate in the same place:</p>
<p><strong className="hl">Stacking Effects:</strong> Spells that provide bonuses or penalties on attack rolls, damage rolls, saving throws, and other attributes usually do not stack with themselves. More generally, two bonuses of the same type don't stack even if they come from different spells (or from effects other than spells; see Bonus Types, above).</p>
<p><strong className="hl">Different Bonus Types:</strong> The bonuses or penalties from two different spells stack if the modifiers are of different types. A bonus that doesn't have a type stacks with any bonus.</p>
<p><strong className="hl">Same Effect More than Once in Different Strengths:</strong> In cases when two or more identical spells are operating in the same area or on the same target, but at different strengths, only the one with the highest strength applies.</p>
<p><strong className="hl">Same Effect with Differing Results:</strong> The same spell can sometimes produce varying effects if applied to the same recipient more than once. Usually the last spell in the series trumps the others. None of the previous spells are actually removed or dispelled, but their effects become irrelevant while the final spell in the series lasts.</p>
<p><strong className="hl">One Effect Makes Another Irrelevant:</strong> Sometimes, one spell can render a later spell irrelevant. Both spells are still active, but one has rendered the other useless in some fashion.</p>
<p><strong className="hl">Multiple Mental Control Effects:</strong> Sometimes magical effects that establish mental control render each other irrelevant, such as spells that remove the subject's ability to act. Mental controls that don't remove the recipient's ability to act usually do not interfere with each other. If a creature is under the mental control of two or more creatures, it tends to obey each to the best of its ability, and to the extent of the control each effect allows. If the controlled creature receives conflicting orders simultaneously, the competing controllers must make opposed Charisma checks to determine which one the creature obeys.</p>
<p><strong className="hl">Spells with Opposite Effects:</strong> Spells with opposite effects apply normally, with all bonuses, penalties, or changes accruing in the order that they apply. Some spells negate or counter each other. This is a special effect that is noted in a spell's description.</p>
<p><strong className="hl">Instantaneous Effects:</strong> Two or more spells with instantaneous durations work cumulatively when they affect the same target.</p>
</>};
const _spell_descriptions = {title: "Spell Descriptions", parent_topics: ["basics","magic"], siblings: ["casting_spells","spell_descriptions","arcane_spells","divine_spells","psychic_magic","special_abilities"], subtopics: ["school_subschool","level","casting_time","range","aiming_a_spell","duration","saving_throw","spell_resistance","descriptive_text"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 209</Link></p>
<p>The description of each spell is presented in a standard format. Each category of information is explained and defined below.</p>
</>};
const _school_subschool = {title: "Name, School, Subschool, Descriptor", parent_topics: ["basics","magic","spell_descriptions"], siblings: ["school_subschool","level","casting_time","range","aiming_a_spell","duration","saving_throw","spell_resistance","descriptive_text"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 209</Link></p>
<p>The first line of every spell description gives the name by which the spell is generally known.</p>
<p>Beneath the spell name is a line giving the school of magic (and the subschool, if any) to which the spell belongs.</p>
<p>Almost every spell belongs to one of eight schools of magic. A school of magic is a group of related spells that work in similar ways.</p>
<ul>
<li><Link to="/spelldef/abjuration">Abjuration</Link></li>
<li><Link to="/spelldef/divination">Divination</Link></li>
<li><Link to="/spelldef/conjuration">Conjuration</Link></li>
<li><Link to="/spelldef/enchantment">Enchantment</Link></li>
<li><Link to="/spelldef/evocation">Evocation</Link></li>
<li><Link to="/spelldef/illusion">Illusion</Link></li>
<li><Link to="/spelldef/necromancy">Necromancy</Link></li>
<li><Link to="/spelldef/transmutation">Transmutation</Link></li>
</ul>
<p>Some of the schools have <em>subschools</em> which further delineate their effects. And a small number of spells (<Link to="/spell/arcane_mark">arcane mark</Link>, <Link to="/spell/limited_wish">limited wish</Link>, <Link to="/spell/permanency">permanency</Link>, <Link to="/spell/prestidigitation">prestidigitation</Link>, and <Link to="/spell/wish">wish</Link>) are <Link to="/spelldef/universal">universal</Link>, belonging to no school.</p>
<p>Appearing on the same line as the school and subschool, when applicable, is a descriptor that further categorizes the spell in some way. Some spells have more than one descriptor.</p>
<p>The descriptors are <Link to="/spelldef/acid">acid</Link>, <Link to="/spelldef/air">air</Link>, <Link to="/spelldef/chaotic">chaotic</Link>, <Link to="/spelldef/cold">cold</Link>, <Link to="/spelldef/curse">curse</Link>, <Link to="/spelldef/darkness">darkness</Link>, <Link to="/spelldef/death">death</Link>, <Link to="/spelldef/disease">disease</Link>, <Link to="/spelldef/draconic">draconic</Link>, <Link to="/spelldef/earth">earth</Link>, <Link to="/spelldef/electricity">electricity</Link>, <Link to="/spelldef/emotion">emotion</Link>, <Link to="/spelldef/evil">evil</Link>, <Link to="/spelldef/fear">fear</Link>, <Link to="/spelldef/fire">fire</Link>, <Link to="/spelldef/force">force</Link>, <Link to="/spelldef/good">good</Link>, <Link to="/spelldef/language_dependent">language-dependent</Link>, <Link to="/spelldef/lawful">lawful</Link>, <Link to="/spelldef/light">light</Link>, <Link to="/spelldef/meditative">meditative</Link>, <Link to="/spelldef/mind_affecting">mind-affecting</Link>, <Link to="/spelldef/pain">pain</Link>, <Link to="/spelldef/poison">poison</Link>, <Link to="/spelldef/ruse">ruse</Link>, <Link to="/spelldef/shadow_descriptor">shadow</Link>, <Link to="/spelldef/sonic">sonic</Link>, and <Link to="/spelldef/water">water</Link>.</p>
<p>Most of these descriptors have no game effect by themselves, but they govern how the spell interacts with other spells, with special abilities, with unusual creatures, with alignment, and so on.</p>
<p>A <em>language-dependent</em> spell uses intelligible language as a medium for communication. If the target cannot understand or cannot hear what the caster of a <em>language-dependant</em> spell says, the spell fails.</p>
<p>A <em>mind-affecting</em> spell works only against creatures with an Intelligence score of 1 or higher.</p>
</>};
const _level = {title: "Level, Components", parent_topics: ["basics","magic","spell_descriptions"], siblings: ["school_subschool","level","casting_time","range","aiming_a_spell","duration","saving_throw","spell_resistance","descriptive_text"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 212</Link></p>
<p>The next line of a spell description gives the spell's level, a number between 0 and 9 that defines the spell's relative power. This number is preceded by a list of classes whose members can cast the spell. A spell's level affects the DC for any save allowed against its effects.</p>
<p>A spell's components explain what you must do or possess to cast the spell. The components entry in a spell description includes abbreviations that tell you what type of components it requires. Specifics for material and focus components are given at the end of the descriptive text. Usually you don't need to worry about components, but when you can't use a component for some reason or when a material or focus component is expensive, then the components are important.</p>
<p><strong className="hl">Verbal (V):</strong> A verbal component is a spoken incantation. To provide a verbal component, you must be able to speak in a strong voice. A silence spell or a gag spoils the incantation (and thus the spell). A spellcaster who has been deafened has a 20% chance of spoiling any spell with a verbal component that he tries to cast.</p>
<p><strong className="hl">Somatic (S):</strong> A somatic component is a measured and precise movement of the hand. You must have at least one hand free to provide a somatic component.</p>
<p><strong className="hl">Material (M):</strong> A material component consists of one or more physical substances or objects that are annihilated by the spell energies in the casting process. Unless a cost is given for a material component, the cost is negligible. Don't bother to keep track of material components with negligible cost. Assume you have all you need as long as you have your spell component pouch.</p>
<p><strong className="hl">Focus (F):</strong> A focus component is a prop of some sort. Unlike a material component, a focus is not consumed when the spell is cast and can be reused. As with material components, the cost for a focus is negligible unless a price is given. Assume that focus components of negligible cost are in your spell component pouch.</p>
<p><strong className="hl">Divine Focus (DF):</strong> A divine focus component is an item of spiritual significance. The divine focus for a cleric or a paladin is a holy symbol appropriate to the character's faith. The divine focus for a druid or a ranger is a sprig of holly, or some other sacred plant.</p>
<p>If the Components line includes F/DF or M/DF, the arcane version of the spell has a focus component or a material component (the abbreviation before the slash) and the divine version has a divine focus component (the abbreviation after the slash).</p>
</>};
const _casting_time = {title: "Casting Time", parent_topics: ["basics","magic","spell_descriptions"], siblings: ["school_subschool","level","casting_time","range","aiming_a_spell","duration","saving_throw","spell_resistance","descriptive_text"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 213</Link></p>
<p>Most spells have a casting time of 1 standard action. Others take 1 round or more, while a few require only a swift action.</p>
<p>A spell that takes 1 round to cast is a full-round action. It comes into effect just before the beginning of your turn in the round after you began casting the spell. You then act normally after the spell is completed.</p>
<p>A spell that takes 1 minute to cast comes into effect just before your turn 1 minute later (and for each of those 10 rounds, you are casting a spell as a full-round action, just as noted above for 1-round casting times). These actions must be consecutive and uninterrupted, or the spell automatically fails.</p>
<p>When you begin a spell that takes 1 round or longer to cast, you must continue the concentration from the current round to just before your turn in the next round (at least). If you lose concentration before the casting is complete, you lose the spell.</p>
<p>A spell with a casting time of 1 swift action doesn't count against your normal limit of one spell per round. However, you may cast such a spell only once per round. Casting a spell with a casting time of 1 swift action doesn't provoke attacks of opportunity.</p>
<p>You make all pertinent decisions about a spell (range, target, area, effect, version, and so forth) when the spell comes into effect.</p>
</>};
const _range = {title: "Range", parent_topics: ["basics","magic","spell_descriptions"], siblings: ["school_subschool","level","casting_time","range","aiming_a_spell","duration","saving_throw","spell_resistance","descriptive_text"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 213</Link></p>
<p>A spell's range indicates how far from you it can reach, as defined in the range entry of the spell description. A spell's range is the maximum distance from you that the spell's effect can occur, as well as the maximum distance at which you can designate the spell's point of origin. If any portion of the spell's area would extend beyond this range, that area is wasted. Standard ranges include the following.</p>
<p><strong className="hl">Personal:</strong> The spell affects only you.</p>
<p><strong className="hl">Touch:</strong> You must touch a creature or object to affect it. A touch spell that deals damage can score a critical hit just as a weapon can. A touch spell threatens a critical hit on a natural roll of 20 and deals double damage on a successful critical hit. Some touch spells allow you to touch multiple targets. You can touch up to 6 willing targets as part of the casting, but all targets of the spell must be touched in the same round that you finish casting the spell. If the spell allows you to touch targets over multiple rounds, touching 6 creatures is a full-round action.</p>
<p><strong className="hl">Close:</strong> The spell reaches as far as 25 feet away from you. The maximum range increases by 5 feet for every two full caster levels.</p>
<p><strong className="hl">Medium:</strong> The spell reaches as far as 100 feet + 10 feet per caster level.</p>
<p><strong className="hl">Long:</strong> The spell reaches as far as 400 feet + 40 feet per caster level.</p>
<p><strong className="hl">Unlimited:</strong> The spell reaches anywhere on the same plane of existence.</p>
<p><strong className="hl">Range Expressed in Feet:</strong> Some spells have no standard range category, just a range expressed in feet.</p>
</>};
const _aiming_a_spell = {hasJL:true,title: "Aiming a Spell", parent_topics: ["basics","magic","spell_descriptions"], siblings: ["school_subschool","level","casting_time","range","aiming_a_spell","duration","saving_throw","spell_resistance","descriptive_text"], jsx: <><div className="jumpList" id="rule-aiming_a_spell-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="rule-aiming_a_spell-target-or-targets">Target or Targets</InnerLink></li><li><InnerLink toTop to="rule-aiming_a_spell-effect">Effect</InnerLink></li><li><InnerLink toTop to="rule-aiming_a_spell-ray">Ray</InnerLink></li><li><InnerLink toTop to="rule-aiming_a_spell-area">Area</InnerLink></li><li><InnerLink toTop to="rule-aiming_a_spell-larger-creatures-and-area">Larger Creatures and Area</InnerLink></li><li><InnerLink toTop to="rule-aiming_a_spell-burst-emanation-spread">Burst, Emanation, Spread</InnerLink></li><li><InnerLink toTop to="rule-aiming_a_spell-cone-cylinder-line-sphere">Cone, Cylinder, Line, Sphere</InnerLink></li><li><InnerLink toTop to="rule-aiming_a_spell-other-aiming-types">Other Aiming Types</InnerLink></li><li><InnerLink toTop to="rule-aiming_a_spell-shapeable">Shapeable</InnerLink></li><li><InnerLink toTop to="rule-aiming_a_spell-line-of-effect">Line of Effect</InnerLink></li></ul></div><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 213</Link></p>
<p>You must make choices about whom a spell is to affect or where an effect is to originate, depending on a spell's type. The next entry in a spell description defines the spell's target (or targets), its effect, or its area, as appropriate.</p>
<h3 id="rule-aiming_a_spell-target-or-targets" data-hash-target>Target or Targets</h3>
<p>Some spells have a target or targets. You cast these spells on creatures or objects, as defined by the spell itself. You must be able to see or touch the target, and you must specifically choose that target. You do not have to select your target until you finish casting the spell.</p>
<p>If the target of a spell is yourself (the Target line of the spell description includes "You"), you do not receive a saving throw, and spell resistance does not apply. The saving throw and spell resistance lines are omitted from such spells.</p>
<p>Some spells restrict you to willing targets only. Declaring yourself as a willing target is something that can be done at any time (even if you're flat-footed or it isn't your turn). Unconscious creatures are automatically considered willing, but a character who is conscious but immobile or helpless (such as one who is bound, cowering, grappling, paralyzed, pinned, or stunned) is not automatically willing.</p>
<p>Some spells allow you to redirect the effect to new targets or areas after you cast the spell. Redirecting a spell is a move action that does not provoke attacks of opportunity.</p>
<h3 id="rule-aiming_a_spell-effect" data-hash-target>Effect</h3>
<p>Some spells create or summon things rather than affecting things that are already present.</p>
<p>You must designate the location where these things are to appear, either by seeing it or defining it. Range determines how far away an effect can appear, but if the effect is mobile, after it appears it can move regardless of the spell's range.</p>
<h3 id="rule-aiming_a_spell-ray" data-hash-target>Ray</h3>
<p>Some effects are rays. You aim a ray as if using a ranged weapon, though typically you make a ranged touch attack rather than a normal ranged attack. As with a ranged weapon, you can fire into the dark or at an invisible creature and hope you hit something. You don't have to see the creature you're trying to hit, as you do with a targeted spell. Intervening creatures and obstacles, however, can block your line of sight or provide cover for the creature at which you're aiming.</p>
<p>If a ray spell has a duration, it's the duration of the effect that the ray causes, not the length of time the ray itself persists.</p>
<p>If a ray spell deals damage, you can score a critical hit just as if it were a weapon. A ray spell threatens a critical hit on a natural roll of 20 and deals double damage on a successful critical hit.</p>
<h3 id="rule-aiming_a_spell-area" data-hash-target>Area</h3>
<p>Some spells affect an area. Sometimes a spell description specifies a specially defined area, but usually an area falls into one of the categories defined below.</p>
<p>Regardless of the shape of the area, you select the point where the spell originates, but otherwise you don't control which creatures or objects the spell affects. The point of origin of a spell is always a grid intersection. When determining whether a given creature is within the area of a spell, count out the distance from the point of origin in squares just as you do when moving a character or when determining the range for a ranged attack. The only difference is that instead of counting from the center of one square to the center of the next, you count from intersection to intersection.</p>
<p>You can count diagonally across a square, but remember that every second diagonal counts as 2 squares of distance. If the far edge of a square is within the spell's area, anything within that square is within the spell's area. If the spell's area only touches the near edge of a square, however, anything within that square is unaffected by the spell.</p>
<h4 id="rule-aiming_a_spell-larger-creatures-and-area" data-hash-target>Larger Creatures and Area</h4>
<p><strong>Sources</strong> <Link to="/source/pathfinder_91_battle_of_bloodmarch_hills">Pathfinder #91: Battle of Bloodmarch Hills pg. 72</Link><br/>The rules for many character options in the Pathfinder RPG Core Rulebook and other Pathfinder RPG products often assume that creatures are Medium or Small. In the case of a handful of spells with areas that feature a "radius emanation centered on you" such as <Link to="/spell/antimagic_field">antimagic field</Link>, <Link to="/spell/aura_of_doom">aura of doom</Link>, and <Link to="/spell/zone_of_silence">zone of silence</Link>, this can result in an area that is effectively useless when coming from a Large or larger caster. As an optional rule, when a creature casts an emanation or burst spell with the text "centered on you," treat the creature's entire space as the spell's point of origin, and measure the spell's area or effect from the edge of the creature's space. For instance, an <em>antimagic field</em> cast by a fire giant would extend 10 feet beyond his space (effectively increasing the emanation's radius by 5 feet).</p>
<h3 id="rule-aiming_a_spell-burst-emanation-spread" data-hash-target>Burst, Emanation, Spread</h3>
<p>Most spells that affect an area function as a burst, an emanation, or a spread. In each case, you select the spell's point of origin and measure its effect from that point.</p>
<p>A <strong className="hl">burst</strong> spell affects whatever it catches in its area, including creatures that you can't see. It can't affect creatures with total cover from its point of origin (in other words, its effects don't extend around corners). The default shape for a burst effect is a sphere, but some burst spells are specifically described as cone-shaped. A burst's area defines how far from the point of origin the spell's effect extends.</p>
<p>An <strong className="hl">emanation</strong> spell functions like a burst spell, except that the effect continues to radiate from the point of origin for the duration of the spell. Most emanations are cones or spheres.</p>
<p>A <strong className="hl">spread</strong> spell, often a cloud or fog spell, extends out like an emanation but can turn corners. You select a grid intersection, and the spell spreads out a given distance in all directions. The effect can extend around corners and into areas that you can't see. Figure distance by actual distance traveled, taking into account turns the spell effect takes. When determining distance for spread effects, count around walls, not through them. As with movement, do not trace diagonals across corners. You must designate the point of origin for such an effect, but you need not have line of effect (see below) to all portions of the effect.</p>
<h3 id="rule-aiming_a_spell-cone-cylinder-line-sphere" data-hash-target>Cone, Cylinder, Line, Sphere</h3>
<p>Most spells that affect an area have a particular shape.</p>
<p>A <strong className="hl">cone-shaped</strong> spell shoots away from you in a quarter-circle in the direction you designate. It starts from any corner of your square and widens out as it goes. Most cones are either bursts or emanations (see above), and thus won't go around corners.</p>
<p>When casting a <strong className="hl">cylinder-shaped</strong> spell, you select the spell's point of origin. This point is the center of a horizontal circle, and the spell shoots down from the circle, filling a cylinder. A cylinder-shaped spell ignores any obstructions within its area.</p>
<p>A <strong className="hl">line-shaped</strong> spell shoots away from you in a line in the direction you designate. It starts from any corner of your square and extends to the limit of its range or until it strikes a barrier that blocks line of effect. A line-shaped spell affects all creatures in squares through which the line passes.</p>
<p>A <strong className="hl">sphere-shaped</strong> spell expands from its point of origin to fill a spherical area. Spheres may be bursts, emanations, or spreads.</p>
<h3 id="rule-aiming_a_spell-other-aiming-types" data-hash-target>Other Aiming Types</h3>
<p><strong className="hl">Creatures:</strong> A spell with this kind of area affects creatures directly (like a targeted spell), but it affects all creatures in an area of some kind rather than individual creatures you select. The area might be a spherical burst, a cone-shaped burst, or some other shape.</p>
<p>Many spells affect "living creatures," which means all creatures other than constructs and undead. Creatures in the spell's area that are not of the appropriate type do not count against the creatures affected.</p>
<p><strong className="hl">Objects:</strong> A spell with this kind of area affects objects within an area you select (as Creatures, but affecting objects instead).</p>
<p><strong className="hl">Other:</strong> A spell can have a unique area, as defined in its description.</p>
<h3 id="rule-aiming_a_spell-shapeable" data-hash-target>Shapeable</h3>
<p>If an area or effect entry ends with "(S)", you can shape the spell. A shaped effect or area can have no dimension smaller than 10 feet. Many effects or areas are given as cubes to make it easy to model irregular shapes. Three-dimensional volumes are most often needed to define aerial or underwater effects and areas.</p>
<h3 id="rule-aiming_a_spell-line-of-effect" data-hash-target>Line of Effect</h3>
<p>A line of effect is a straight, unblocked path that indicates what a spell can affect. A line of effect is canceled by a solid barrier. It's like line of sight for ranged weapons, except that it's not blocked by fog, darkness, and other factors that limit normal sight.</p>
<p>You must have a clear line of effect to any target that you cast a spell on or to any space in which you wish to create an effect. You must have a clear line of effect to the point of origin of any spell you cast.</p>
<p>A burst, cone, cylinder, or emanation spell affects only an area, creature, or object to which it has line of effect from its origin (a spherical burst's center point, a cone-shaped burst's starting point, a cylinder's circle, or an emanation's point of origin).</p>
<p>An otherwise solid barrier with a hole of at least 1 square foot through it does not block a spell's line of effect. Such an opening means that the 5-foot length of wall containing the hole is no longer considered a barrier for purposes of a spell's line of effect.</p>
</>};
const _duration = {title: "Duration", parent_topics: ["basics","magic","spell_descriptions"], siblings: ["school_subschool","level","casting_time","range","aiming_a_spell","duration","saving_throw","spell_resistance","descriptive_text"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 215</Link></p>
<p>A spell's duration entry tells you how long the magical energy of the spell lasts.</p>
<p><strong className="hl">Timed Durations:</strong> Many durations are measured in rounds, minutes, hours, or other increments. When the time is up, the magic goes away and the spell ends. If a spell's duration is variable, the duration is rolled secretly so the caster doesn't know how long the spell will last.</p>
<p><strong className="hl">Instantaneous:</strong> The spell energy comes and goes the instant the spell is cast, though the consequences might be long-lasting.</p>
<p><strong className="hl">Permanent:</strong> The energy remains as long as the effect does. This means the spell is vulnerable to <Link to="/spell/dispel_magic">dispel magic</Link>.</p>
<p><strong className="hl">Concentration:</strong> The spell lasts as long as you concentrate on it. Concentrating to maintain a spell is a standard action that does not provoke attacks of opportunity. Anything that could break your concentration when casting a spell can also break your <Link to="/rule/concentration">concentration</Link> while you're maintaining one, causing the spell to end.</p>
<p>You can't cast a spell while concentrating on another one. Some spells last for a short time after you cease concentrating.</p>
<p><strong className="hl">Subjects, Effects, and Areas:</strong> If the spell affects creatures directly, the result travels with the subjects for the spell's duration. If the spell creates an effect, the effect lasts for the duration. The effect might move or remain still. Such an effect can be destroyed prior to when its duration ends. If the spell affects an area, then the spell stays with that area for its duration.</p>
<p>Creatures become subject to the spell when they enter the area and are no longer subject to it when they leave.</p>
<p><strong className="hl">Touch Spells and Holding the Charge:</strong> In most cases, if you don't discharge a touch spell on the round you cast it, you can hold the charge (postpone the discharge of the spell) indefinitely. You can make touch attacks round after round until the spell is discharged. If you cast another spell, the touch spell dissipates.</p>
<p>Some touch spells allow you to touch multiple targets as part of the spell. You can't hold the charge of such a spell; you must touch all targets of the spell in the same round that you finish casting the spell.</p>
<p><strong className="hl">Discharge:</strong> Occasionally a spells lasts for a set duration or until triggered or discharged.</p>
<p><strong className="hl">(D) Dismissible:</strong> If the duration line ends with "(D)", you can dismiss the spell at will. You must be within range of the spell's effect and must speak words of dismissal, which are usually a modified form of the spell's verbal component. If the spell has no verbal component, you can dismiss the effect with a gesture. Dismissing a spell is a standard action that does not provoke attacks of opportunity.</p>
<p>A spell that depends on concentration is dismissible by its very nature, and dismissing it does not take an action, since all you have to do to end the spell is to stop concentrating on your turn.</p>
</>};
const _saving_throw = {title: "Saving Throw", parent_topics: ["basics","magic","spell_descriptions"], siblings: ["school_subschool","level","casting_time","range","aiming_a_spell","duration","saving_throw","spell_resistance","descriptive_text"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 216</Link></p>
<p>Usually a harmful spell allows a target to make a saving throw to avoid some or all of the effect. The saving throw entry in a spell description defines which type of saving throw the spell allows and describes how saving throws against the spell work.</p>
<p><strong className="hl">Negates:</strong> The spell has no effect on a subject that makes a successful saving throw.</p>
<p><strong className="hl">Partial:</strong> The spell has an effect on its subject. A successful saving throw means that some lesser effect occurs.</p>
<p><strong className="hl">Half:</strong> The spell deals damage, and a successful saving throw halves the damage taken (round down).</p>
<p><strong className="hl">None:</strong> No saving throw is allowed.</p>
<p><strong className="hl">Disbelief:</strong> A successful save lets the subject ignore the spell's effect.</p>
<p><strong className="hl">(object):</strong> The spell can be cast on objects, which receive saving throws only if they are magical or if they are attended (held, worn, grasped, or the like) by a creature resisting the spell, in which case the object uses the creature's saving throw bonus unless its own bonus is greater. This notation does not mean that a spell can be cast only on objects. Some spells of this sort can be cast on creatures or objects. A magic item's saving throw bonuses are each equal to 2 + 1/2 the item's caster level.</p>
<p><strong className="hl">(harmless):</strong> The spell is usually beneficial, not harmful, but a targeted creature can attempt a saving throw if it desires.</p>
<p><strong className="hl">Saving Throw Difficulty Class:</strong> A saving throw against your spell has a DC of 10 + the level of the spell + your bonus for the relevant ability (Intelligence for a wizard, Charisma for a bard, paladin, or sorcerer, or Wisdom for a cleric, druid, or ranger). A spell's level can vary depending on your class. Always use the spell level applicable to your class.</p>
<p><strong className="hl">Succeeding on a Saving Throw:</strong> A creature that successfully saves against a spell that has no obvious physical effects feels a hostile force or a tingle, but cannot deduce the exact nature of the attack. Likewise, if a creature's saving throw succeeds against a targeted spell, you sense that the spell has failed. You do not sense when creatures succeed on saves against effect and area spells.</p>
<p><strong className="hl">Automatic Failures and Successes:</strong> A natural 1 (the d20 comes up 1) on a saving throw is always a failure, and the spell may cause damage to exposed items (see Items Surviving after a Saving Throw, below). A natural 20 (the d20 comes up 20) is always a success.</p>
<p><strong className="hl">Voluntarily Giving up a Saving Throw:</strong> A creature can voluntarily forego a saving throw and willingly accept a spell's result. Even a character with a special resistance to magic can suppress this quality.</p>
<p><strong className="hl">Items Surviving after a Saving Throw:</strong> Unless the descriptive text for the spell specifies otherwise, all items carried or worn by a creature are assumed to survive a magical attack. If a creature rolls a natural 1 on its saving throw against the effect, however, an exposed item is harmed (if the attack can harm objects). Refer to Table 9-2: Items Affected by Magical Attacks. Determine which four objects carried or worn by the creature are most likely to be affected and roll randomly among them. The randomly determined item must make a saving throw against the attack form and take whatever damage the attack dealt. If the selected item is not carried or worn and is not magical, it does not get a saving throw. It simply is dealt the appropriate damage.</p>
<h3 id="rule-saving_throw-table-9-2-items-affected-by-magical-attacks">Table 9-2: Items Affected by Magical Attacks</h3>
<ScrollContainer id="rule-saving_throw--table-0"><table>
<thead>
<tr>
<th>Order*</th>
<th>Item</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>Shield</td>
</tr>
<tr>
<td>2nd</td>
<td>Armor</td>
</tr>
<tr>
<td>3rd</td>
<td>Magic helmet, hat, or headband</td>
</tr>
<tr>
<td>4th</td>
<td>Item in hand (including weapon, wand, or the like)</td>
</tr>
<tr>
<td>5th</td>
<td>Magic cloak</td>
</tr>
<tr>
<td>6th</td>
<td>Stowed or sheathed weapon</td>
</tr>
<tr>
<td>7th</td>
<td>Magic bracers</td>
</tr>
<tr>
<td>8th</td>
<td>Magic clothing</td>
</tr>
<tr>
<td>9th</td>
<td>Magic jewelry (including rings)</td>
</tr>
<tr>
<td>10th</td>
<td>Anything else</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _spell_resistance = {title: "Spell Resistance", parent_topics: ["basics","magic","spell_descriptions"], siblings: ["school_subschool","level","casting_time","range","aiming_a_spell","duration","saving_throw","spell_resistance","descriptive_text"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 217</Link></p>
<p>Spell resistance is a special defensive ability. If your spell is being resisted by a creature with spell resistance, you must make a caster level check (1d20 + caster level) at least equal to the creature's spell resistance for the spell to affect that creature. The defender's spell resistance is like an Armor Class against magical attacks. Include any adjustments to your caster level to this caster level check.</p>
<p>The Spell Resistance entry and the descriptive text of a spell description tell you whether spell resistance protects creatures from the spell. In many cases, spell resistance applies only when a resistant creature is targeted by the spell, not when a resistant creature encounters a spell that is already in place.</p>
<p>The terms "object" and "harmless" mean the same thing for spell resistance as they do for <Link to="/rule/saving_throw">saving throws</Link>. A creature with spell resistance must voluntarily lower the resistance (a standard action) in order to be affected by such spells without forcing the caster to make a caster level check.</p>
</>};
const _descriptive_text = {title: "Descriptive Text", parent_topics: ["basics","magic","spell_descriptions"], siblings: ["school_subschool","level","casting_time","range","aiming_a_spell","duration","saving_throw","spell_resistance","descriptive_text"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 218</Link></p>
<p>This portion of a spell description details what the spell does and how it works. If one of the previous entries in the description includes "see text," this is where the explanation is found.</p>
</>};
const _arcane_spells = {title: "Arcane Spells", parent_topics: ["basics","magic"], siblings: ["casting_spells","spell_descriptions","arcane_spells","divine_spells","psychic_magic","special_abilities"], subtopics: ["preparing_wizard_spells","arcane_magical_writing","sorcerers_and_bards","arcane_spells_and_armor"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 218</Link></p>
<p>Wizards, sorcerers, and bards cast arcane spells. Compared to divine spells, arcane spells are more likely to produce dramatic results.</p>
<p><strong className="hl">Spell Slots:</strong> The various character class tables show how many spells of each level a character can cast per day. These openings for daily spells are called spell slots. A spellcaster always has the option to fill a higher-level spell slot with a lower-level spell. A spellcaster who lacks a high enough ability score to cast spells that would otherwise be his due still gets the slots but must fill them with spells of lower levels.</p>
</>};
const _preparing_wizard_spells = {title: "Preparing Wizard Spells", parent_topics: ["basics","magic","arcane_spells"], siblings: ["preparing_wizard_spells","arcane_magical_writing","sorcerers_and_bards","arcane_spells_and_armor"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 218</Link></p>
<p>A wizard's level limits the number of spells he can prepare and cast. His high Intelligence score might allow him to prepare a few extra spells. He can prepare the same spell more than once, but each preparation counts as one spell toward his daily limit. To prepare a spell, the wizard must have an Intelligence score of at least 10 + the spell's level.</p>
<p><strong className="hl">Rest:</strong> To prepare his daily spells, a wizard must first sleep for 8 hours. The wizard does not have to slumber for every minute of the time, but he must refrain from movement, combat, spellcasting, skill use, conversation, or any other fairly demanding physical or mental task during the rest period. If his rest is interrupted, each interruption adds 1 hour to the total amount of time he has to rest in order to clear his mind, and he must have at least 1 hour of uninterrupted rest immediately prior to preparing his spells. If the character does not need to sleep for some reason, he still must have 8 hours of restful calm before preparing any spells.</p>
<p><strong className="hl">Recent Casting Limit/Rest Interruptions:</strong> If a wizard has cast spells recently, the drain on his resources reduces his capacity to prepare new spells. When he prepares spells for the coming day, all the spells he has cast within the last 8 hours count against his daily limit.</p>
<p><strong className="hl">Preparation Environment:</strong> To prepare any spell, a wizard must have enough peace, quiet, and comfort to allow for proper concentration. The wizard's surroundings need not be luxurious, but they must be free from distractions. Exposure to inclement weather prevents the necessary concentration, as does any injury or failed saving throw the character might experience while studying. Wizards also must have access to their spellbooks to study from and sufficient light to read them. There is one major exception: a wizard can prepare a <Link to="/spell/read_magic">read magic</Link> spell even without a spellbook.</p>
<p><strong className="hl">Spell Preparation Time:</strong> After resting, a wizard must study his spellbook to prepare any spells that day. If he wants to prepare all his spells, the process takes 1 hour. Preparing some smaller portion of his daily capacity takes a proportionally smaller amount of time, but always at least 15 minutes, the minimum time required to achieve the proper mental state.</p>
<p><strong className="hl">Spell Selection and Preparation:</strong> Until he prepares spells from his spellbook, the only spells a wizard has available to cast are the ones that he already had prepared from the previous day and has not yet used. During the study period, he chooses which spells to prepare. If a wizard already has spells prepared (from the previous day) that he has not cast, she can abandon some or all of them to make room for new spells.</p>
<p>When preparing spells for the day, a wizard can leave some of these spell slots open. Later during that day, he can repeat the preparation process as often as he likes, time and circumstances permitting. During these extra sessions of preparation, the wizard can fill these unused spell slots. He cannot, however, abandon a previously prepared spell to replace it with another one or fill a slot that is empty because he has cast a spell in the meantime. That sort of preparation requires a mind fresh from rest. Like the first session of the day, this preparation takes at least 15 minutes, and it takes longer if the wizard prepares more than one-quarter of his spells.</p>
<p><strong className="hl">Prepared Spell Retention:</strong> Once a wizard prepares a spell, it remains in his mind as a nearly cast spell until he uses the prescribed components to complete and trigger it or until he abandons it. Certain other events, such as the effects of magic items or special attacks from monsters, can wipe a prepared spell from a character's mind.</p>
<p><strong className="hl">Death and Prepared Spell Retention:</strong> If a spellcaster dies, all prepared spells stored in his mind are wiped away. Potent magic (such as <Link to="/spell/raise_dead">raise dead</Link>, <Link to="/spell/resurrection">resurrection</Link>, or <Link to="/spell/true_resurrection">true resurrection</Link>) can recover the lost energy when it recovers the character.</p>
</>};
const _arcane_magical_writing = {title: "Arcane Magical Writing", parent_topics: ["basics","magic","arcane_spells"], siblings: ["preparing_wizard_spells","arcane_magical_writing","sorcerers_and_bards","arcane_spells_and_armor"], subtopics: ["wizard_spells_and_borrowed_spellbooks","adding_spells_to_a_wizards_spellbook","writing_a_new_spell_into_a_spellbook","replacing_and_copying_spellbooks","selling_a_spellbook"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 218</Link></p>
<p>To record an arcane spell in written form, a character uses complex notation that describes the magical forces involved in the spell. The writer uses the same system no matter what her native language or culture. However, each character uses the system in his own way. Another person's magical writing remains incomprehensible to even the most powerful wizard until he takes time to study and decipher it.</p>
<p>To decipher an arcane magical writing (such as a single spell in another's spellbook or on a scroll), a character must make a Spellcraft check (DC 20 + the spell's level). If the skill check fails, the character cannot attempt to read that particular spell again until the next day. A <Link to="/spell/read_magic">read magic</Link> spell automatically deciphers magical writing without a skill check. If the person who created the magical writing is on hand to help the reader, success is also automatic.</p>
<p>Once a character deciphers a particular piece of magical writing, he does not need to decipher it again. Deciphering magical writing allows the reader to identify the spell and gives some idea of its effects (as explained in the spell description). If the magical writing is a scroll and the reader can cast arcane spells, he can attempt to use the scroll.</p>
</>};
const _wizard_spells_and_borrowed_spellbooks = {title: "Wizard Spells and Borrowed Spellbooks", parent_topics: ["basics","magic","arcane_spells","arcane_magical_writing"], siblings: ["wizard_spells_and_borrowed_spellbooks","adding_spells_to_a_wizards_spellbook","writing_a_new_spell_into_a_spellbook","replacing_and_copying_spellbooks","selling_a_spellbook"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 219</Link></p>
<p>A wizard can use a borrowed spellbook to prepare a spell he already knows and has recorded in his own spellbook, but preparation success is not assured. First, the wizard must decipher the writing in the book (see <Link to="/rule/arcane_magical_writing">Arcane Magical Writing</Link>). Once a spell from another spellcaster's book is deciphered, the reader must make a Spellcraft check (DC 15 + spell's level) to prepare the spell. If the check succeeds, the wizard can prepare the spell. He must repeat the check to prepare the spell again, no matter how many times he has prepared it before. If the check fails, he cannot try to prepare the spell from the same source again until the next day. However, as explained above, he does not need to repeat a check to decipher the writing.</p>
</>};
const _adding_spells_to_a_wizards_spellbook = {title: "Adding Spells to a Wizard's Spellbook", parent_topics: ["basics","magic","arcane_spells","arcane_magical_writing"], siblings: ["wizard_spells_and_borrowed_spellbooks","adding_spells_to_a_wizards_spellbook","writing_a_new_spell_into_a_spellbook","replacing_and_copying_spellbooks","selling_a_spellbook"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 219</Link></p>
<p>Wizards can add new spells to their spellbooks through several methods. A wizard can only learn new spells that belong to the wizard spell lists.</p>
<p><strong className="hl">Spells Gained at a New Level:</strong> Wizards perform a certain amount of spell research between adventures. Each time a character attains a new wizard level, he gains two spells of his choice to add to his spellbook. The two free spells must be of spell levels he can cast.</p>
<p><strong className="hl">Spells Copied from Another's Spellbook or a Scroll:</strong> A wizard can also add a spell to his book whenever he encounters one on a magic scroll or in another wizard's spellbook. No matter what the spell's source, the wizard must first decipher the magical writing (see <Link to="/rule/arcane_magical_writing">Arcane Magical Writing</Link>). Next, he must spend 1 hour studying the spell. At the end of the hour, he must make a Spellcraft check (DC 15 + spell's level). A wizard who has specialized in a school of spells gains a +2 bonus on the Spellcraft check if the new spell is from his specialty school. If the check succeeds, the wizard understands the spell and can copy it into his spellbook (see <Link to="/rule/writing_a_new_spell_into_a_spellbook">Writing a New Spell into a Spellbook</Link>). The process leaves a spellbook that was copied from unharmed, but a spell successfully copied from a magic scroll disappears from the parchment.</p>
<p>If the check fails, the wizard cannot understand or copy the spell. He cannot attempt to learn or copy that spell again until one week has passed. If the spell was from a scroll, a failed Spellcraft check does not cause the spell to vanish.</p>
<p>In most cases, wizards charge a fee for the privilege of copying spells from their spellbooks. This fee is usually equal to half the cost to write the spell into a spellbook (see Writing a New Spell into a Spellbook). Rare and unique spells might cost significantly more.</p>
<p><strong className="hl">Independent Research:</strong> A wizard can also research a spell independently, duplicating an existing spell or creating an entirely new one. The cost to research a new spell, and the time required, are left up to GM discretion, but it should probably take at least 1 week and cost at least 1,000 gp per level of the spell to be researched. This should also require a number of Spellcraft and Knowledge (arcana) checks.</p>
</>};
const _writing_a_new_spell_into_a_spellbook = {title: "Writing a New Spell into a Spellbook", parent_topics: ["basics","magic","arcane_spells","arcane_magical_writing"], siblings: ["wizard_spells_and_borrowed_spellbooks","adding_spells_to_a_wizards_spellbook","writing_a_new_spell_into_a_spellbook","replacing_and_copying_spellbooks","selling_a_spellbook"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 219</Link></p>
<p>Once a wizard understands a new spell, he can record it into his spellbook.</p>
<p><strong className="hl">Time:</strong> The process takes 1 hour per spell level. Cantrips (0 levels spells) take 30 minutes to record.</p>
<p><strong className="hl">Space in the Spellbook:</strong> A spell takes up one page of the spellbook per spell level. Even a 0-level spell (cantrip) takes one page. A spellbook has 100 pages.</p>
<p><strong className="hl">Materials and Costs:</strong> The cost for writing a new spell into a spellbook depends on the level of the spell, as noted on the following table. Note that a wizard does not have to pay these costs in time or gold for spells he gains for free at each new level.</p>
<ScrollContainer id="rule-writing_a_new_spell_into_a_spellbook--table-0"><table>
<thead>
<tr>
<th>Spell Level</th>
<th>Writing Cost</th>
</tr>
</thead>
<tbody><tr>
<td>0</td>
<td>5 gp</td>
</tr>
<tr>
<td>1</td>
<td>10 gp</td>
</tr>
<tr>
<td>2</td>
<td>40 gp</td>
</tr>
<tr>
<td>3</td>
<td>90 gp</td>
</tr>
<tr>
<td>4</td>
<td>160 gp</td>
</tr>
<tr>
<td>5</td>
<td>250 gp</td>
</tr>
<tr>
<td>6</td>
<td>360 gp</td>
</tr>
<tr>
<td>7</td>
<td>490 gp</td>
</tr>
<tr>
<td>8</td>
<td>640 gp</td>
</tr>
<tr>
<td>9</td>
<td>810 gp</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _replacing_and_copying_spellbooks = {title: "Replacing and Copying Spellbooks", parent_topics: ["basics","magic","arcane_spells","arcane_magical_writing"], siblings: ["wizard_spells_and_borrowed_spellbooks","adding_spells_to_a_wizards_spellbook","writing_a_new_spell_into_a_spellbook","replacing_and_copying_spellbooks","selling_a_spellbook"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 219</Link></p>
<p>A wizard can use the procedure for learning a spell to reconstruct a lost spellbook. If he already has a particular spell prepared, he can write it directly into a new book at the same cost required to write a spell into a spellbook. The process wipes the prepared spell from his mind, just as casting it would. If he does not have the spell prepared, he can prepare it from a borrowed spellbook and then write it into a new book.</p>
<p>Duplicating an existing spellbook uses the same procedure as replacing it, but the task is much easier. The time requirement and cost per spell are halved.</p>
</>};
const _selling_a_spellbook = {title: "Selling a Spellbook", parent_topics: ["basics","magic","arcane_spells","arcane_magical_writing"], siblings: ["wizard_spells_and_borrowed_spellbooks","adding_spells_to_a_wizards_spellbook","writing_a_new_spell_into_a_spellbook","replacing_and_copying_spellbooks","selling_a_spellbook"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 220</Link></p>
<p>Captured spellbooks can be sold for an amount equal to half the cost of purchasing and inscribing the spells within.</p>
</>};
const _sorcerers_and_bards = {title: "Sorcerers and Bards", parent_topics: ["basics","magic","arcane_spells"], siblings: ["preparing_wizard_spells","arcane_magical_writing","sorcerers_and_bards","arcane_spells_and_armor"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 220</Link></p>
<p>Sorcerers and bards cast arcane spells, but they do not use spellbooks or prepare spells. Their class level limits the number of spells she can cast (see these class descriptions). Her high Charisma score might allow her to cast a few extra spells. A member of either class must have a Charisma score of at least 10 + the spell's level to cast the spell.</p>
<p><strong className="hl">Daily Readying of Spells:</strong> Each day, sorcerers and bards must focus their minds on the task of casting their spells. A sorcerer or bard needs 8 hours of rest (just like a wizard), after which she spends 15 minutes concentrating. (A bard must sing, recite, or play an instrument of some kind while concentrating.) During this period, the sorcerer or bard readies her mind to cast her daily allotment of spells. Without such a period to refresh herself, the character does not regain the spell slots she used up the day before.</p>
<p><strong className="hl">Recent Casting Limit:</strong> Any spells cast within the last 8 hours count against the sorcerer's or bard's daily limit.</p>
<p><strong className="hl">Adding Spells to a Sorcerer's or Bard's Repertoire:</strong> A sorcerer or bard gains spells each time she attains a new level in her class and never gains spells any other way. When your sorcerer or bard gains a new level, consult Table 3-4 or Table 3-15 to learn how many spells from the appropriate spell list she now knows. With permission from the GM, sorcerers and bards can also select the spells they gain from new and unusual spells that they come across while adventuring.</p>
</>};
const _arcane_spells_and_armor = {title: "Arcane Spells and Armor", parent_topics: ["basics","magic","arcane_spells"], siblings: ["preparing_wizard_spells","arcane_magical_writing","sorcerers_and_bards","arcane_spells_and_armor"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 83</Link></p>
<p>Armor restricts the complicated gestures required while casting any spell that has a somatic component. The armor and shield descriptions list the arcane spell failure chance for different armors and shields.</p>
<p>If a spell doesn't have a somatic component, an arcane spellcaster can cast it with no arcane spell failure chance while wearing armor. Such spells can also be cast even if the caster's hands are bound or he is grappling (although concentration checks still apply normally). The metamagic feat <Link to="/feat/still_spell">Still Spell</Link> allows a spellcaster to prepare or cast a spell without the somatic component at one spell level higher than normal. This also provides a way to cast a spell while wearing armor without risking arcane spell failure.</p>
</>};
const _divine_spells = {title: "Divine Spells", parent_topics: ["basics","magic"], siblings: ["casting_spells","spell_descriptions","arcane_spells","divine_spells","psychic_magic","special_abilities"], subtopics: ["preparing_divine_spells","divine_magical_writing","new_divine_spells"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 220</Link></p>
<p>Clerics, druids, experienced paladins, and experienced rangers can cast divine spells. Unlike arcane spells, divine spells draw power from a divine source. Clerics gain spell power from deities or from divine forces. The divine force of nature powers druid and ranger spells, and the divine forces of law and good power paladin spells. Divine spells tend to focus on healing and protection and are less flashy, destructive, and disruptive than arcane spells.</p>
</>};
const _preparing_divine_spells = {title: "Preparing Divine Spells", parent_topics: ["basics","magic","divine_spells"], siblings: ["preparing_divine_spells","divine_magical_writing","new_divine_spells"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 220</Link></p>
<p>Divine spellcasters prepare their spells in largely the same manner as wizards do, but with a few differences. The relevant ability for most divine spells is Wisdom (Charisma for paladins). To prepare a divine spell, a character must have a Wisdom score (or Charisma score for paladins) of 10 + the spell's level. Likewise, bonus spells are based on Wisdom.</p>
<p><strong className="hl">Time of Day:</strong> A divine spellcaster chooses and prepares spells ahead of time, but unlike a wizard, does not require a period of rest to prepare spells. Instead, the character chooses a particular time of day to pray and receive spells. The time is usually associated with some daily event. If some event prevents a character from praying at the proper time, she must do so as soon as possible. If the character does not stop to pray for spells at the first opportunity, she must wait until the next day to prepare spells.</p>
<p><strong className="hl">Spell Selection and Preparation:</strong> A divine spellcaster selects and prepares spells ahead of time through prayer and meditation at a particular time of day. The time required to prepare spells is the same as it is for a wizard (1 hour), as is the requirement for a relatively peaceful environment. When preparing spells for the day, a divine spellcaster can leave some of her spell slots open. Later during that day, she can repeat the preparation process as often as she likes. During these extra sessions of preparation, she can fill these unused spell slots. She cannot, however, abandon a previously prepared spell to replace it with another one or fill a slot that is empty because she has cast a spell in the meantime. Like the first session of the day, this preparation takes at least 15 minutes, and it takes longer if she prepares more than one-quarter of her spells.</p>
<p>Divine spellcasters do not require spellbooks. However, a divine spellcaster's spell selection is limited to the spells on the list for her class. Clerics, druids, paladins, and rangers have separate spell lists. A cleric also has access to two domains determined during character creation. Each domain gives her access to a number of special abilities and bonus spells.</p>
<p><strong className="hl">Spell Slots:</strong> The character class tables show how many spells of each level each can cast per day. These openings for daily spells are called spell slots. A spellcaster always has the option to fill a higher-level spell slot with a lower-level spell. A spellcaster who lacks a high enough ability score to cast spells that would otherwise be her due still gets the slots but must fill them with spells of lower levels.</p>
<p><strong className="hl">Recent Casting Limit:</strong> As with arcane spells, at the time of preparation any spells cast within the previous 8 hours count against the number of spells that can be prepared.</p>
<p><strong className="hl">Spontaneous Casting of Cure and Inflict Spells:</strong> A good cleric (or a cleric of a good deity) can spontaneously cast a cure spell in place of a prepared spell of the same level or higher, but not in place of a bonus domain spell. An evil cleric (or a cleric of an evil deity) can spontaneously cast an inflict spell in place of a prepared spell (that is not a domain spell) of the same level or higher. Each neutral cleric of a neutral deity spontaneously casts either <Link to="/main/cure_spells">cure spells</Link> like a good cleric or inflict spells like an evil one, depending on which option the player chooses when creating the character. The divine energy of the spell that the cure or inflict spell substitutes for is converted into the cure or inflict spell as if that spell had been prepared all along.</p>
<p><strong className="hl">Spontaneous Casting of Summon Nature's Ally Spells:</strong> A druid can spontaneously cast summon nature's ally in place of a prepared spell of the same level or higher. The divine energy of the spell that the summon spell substitutes for is converted as if that spell had been prepared all along.</p>
</>};
const _divine_magical_writing = {title: "Divine Magical Writing", parent_topics: ["basics","magic","divine_spells"], siblings: ["preparing_divine_spells","divine_magical_writing","new_divine_spells"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 221</Link></p>
<p>Divine spells can be written and deciphered like arcane spells (see <Link to="/rule/arcane_magical_writing">Arcane Magical Writing</Link>). A Spellcraft check can decipher divine magical writing and identify it. Only characters who have the spell (in its divine form) on their class spell list can cast a divine spell from a scroll.</p>
</>};
const _new_divine_spells = {title: "New Divine Spells", parent_topics: ["basics","magic","divine_spells"], siblings: ["preparing_divine_spells","divine_magical_writing","new_divine_spells"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 221</Link></p>
<p>Divine spellcasters gain new spells as follows.</p>
<p><strong className="hl">Spells Gained at a New Level:</strong> Characters who can cast divine spells undertake a certain amount of study between adventures. Each time such a character receives a new level of divine spells, she learns all of the spells from that level automatically.</p>
<p><strong className="hl">Independent Research:</strong> A divine spellcaster can also research a spell independently, much as an arcane spellcaster can. Only the creator of such a spell can prepare and cast it, unless she decides to share it with others.</p>
</>};
const _psychic_magic = {title: "Psychic Magic", parent_topics: ["basics","magic"], siblings: ["casting_spells","spell_descriptions","arcane_spells","divine_spells","psychic_magic","special_abilities"], subtopics: ["components_oa","undercasting_spells"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 144</Link></p>
<p>Wizards study ancient tomes to unlock arcane secrets of the universe, and clerics pray to distant deities to grant them divine power. Yet there is a third, more esoteric kind of magic, connected to every creature's composite being, from the conscious mind to the deepest desire, from the life force to the spirit, from the very soul to the cosmic self. This third type of magic is psychic magic.</p>
<p>A psychic spell largely functions like any other spell. It's another type of magic, similar to arcane or divine magic - in fact, those who use psychic magic are easily mistaken for practitioners of arcane and divine traditions. <Link to="/main/metamagic_feat">Metamagic feats</Link> and any other rules that alter or trigger from spells can usually be used with psychic spells (though see the Components section below for a few exceptions). Psychic spellcasters aren't affected by effects that target only arcane or divine spellcasters, nor can they use arcane or divine scrolls or other items or feats that state they can be utilized by only arcane or divine spellcasters.</p>
</>};
const _components_oa = {title: "Components", parent_topics: ["basics","magic","psychic_magic"], siblings: ["components_oa","undercasting_spells"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 144</Link></p>
<p>Psychic magic originates from the distinctive qualities of the caster's composite being, rather than through arcane formulae or rote supplication to divine entities. Therefore, psychic spells never have verbal or somatic components, and have only expensive material components. Psychic spells are purely mental actions, and they can be cast even while the caster is pinned or paralyzed. Focus components work the same way with psychic spells as they do with other spells.</p>
<p>When a spell calls for an expensive material component, a psychic spellcaster can instead use any item with both significant meaning and a value greater than or equal to the spell's component cost. For example, if a spiritualist wanted to cast <Link to="/spell/raise_dead">raise dead</Link> to bring her dead husband back from the grave, she could use her 5,000 gp wedding ring as the spell's material component.</p>
<p>Instead of verbal and somatic components, all psychic spells have components related to the caster's inner being. The two psychic components are called <strong className="hl">emotion components</strong> and <strong className="hl">thought components</strong>. If a spell's components line lists a somatic component, that spell instead requires an emotion component when cast by psychic spellcasters, and if it has a verbal component, it instead requires a thought component when cast by psychic spellcasters. Psychic spells cast by non-psychic arcane and divine casters use any listed somatic and verbal components as normal.</p>
<p><strong className="hl">Emotion Components:</strong> Emotion components represent a particular emotional state required to cast the spell. A psychic spellcaster marshals her desire in order to focus and release the spell's energy. It is impossible to cast a spell with an emotion component while the spellcaster is under the influence of a non-harmless effect with the emotion or fear descriptors. Even if the effect's emotion matches the necessary emotion to cast the psychic spell, the spellcaster is not in control of her own desires and animal impulses, which is a necessary part of providing an emotion component.</p>
<p><strong className="hl">Thought Components:</strong> Thought components represent mental constructs necessary for the spell's function, such as picturing a wolf in vivid detail - down to the saliva dripping from its jaws - in order to cast <Link to="/spell/beast_shape_1">beast shape</Link> to transform into a wolf. Thought components are so mentally demanding that they make interruptions and distractions extremely challenging. The DC for any <Link to="/rule/concentration">concentration</Link> check for a spell with a thought component increases by 10. A psychic spellcaster casting a spell with a thought component can take a move action before beginning to cast the spell to center herself; she can then use the normal DC instead of the increased DC.</p>
<p>Just as spell-like abilities never require verbal, somatic, or material components, these abilities also don't require thought or emotion components. A psychic spellcaster can replace verbal and somatic components with thought and emotion components only for the purposes of the spell components themselves, not for the purposes of any other rules elements that relate to verbal and somatic components. She can't use <Link to="/feat/silent_spell">Silent Spell</Link> to ignore the thought component of a spell, for example. The new feats <Link to="/feat/intuitive_spell">Intuitive Spell</Link> and <Link to="/feat/logical_spell">Logical Spell</Link> serve a similar function for these new components.</p>
</>};
const _undercasting_spells = {title: "Undercasting Spells", parent_topics: ["basics","magic","psychic_magic"], siblings: ["components_oa","undercasting_spells"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 144</Link></p>
<p>Some psychic spells can be undercast. This means that the spellcaster can cast the spell at the level that he knows, or as any lower-level version of that spell, using the appropriate spell slot. When a spellcaster undercasts a spell, it is treated exactly like the lower-level version, including when determining its effect, saving throw, and other variables. For example, a psychic spellcaster who adds <Link to="/spell/ego_whip_iii">ego whip III</Link> to his list of spells known can cast it as ego whip I, II or III. If he casts it as <Link to="/spell/ego_whip_i">ego whip I</Link>, it is treated in all ways as that spell; it uses the text and the saving throw DC for that spell, and requires him to expend a 3rd-level spell slot.</p>
<p>Whenever a spontaneous spellcaster adds a spell to his list of spells known that can be undercast, he can immediately learn a spell in place of each lower-level version of that spell he knows. In essence, he loses each earlier version and can replace it with another spell of the same level that is on his spell list.</p>
</>};
const _special_abilities = {title: "Special Abilities", parent_topics: ["basics","magic"], siblings: ["casting_spells","spell_descriptions","arcane_spells","divine_spells","psychic_magic","special_abilities"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 221</Link></p>
<p>A number of classes and creatures gain the use of special abilities, many of which function like spells.</p>
<p><strong className="hl">Spell-Like Abilities:</strong> Usually, a spell-like ability works just like the spell of that name. A spell-like ability has no verbal, somatic, or material component, nor does it require a focus. The user activates it mentally. Armor never affects a spell-like ability's use, even if the ability resembles an arcane spell with a somatic component.</p>
<p>A spell-like ability has a casting time of 1 standard action unless noted otherwise in the ability or spell description. In all other ways, a spell-like ability functions just like a spell.</p>
<p>Spell-like abilities are subject to spell resistance and <Link to="/spell/dispel_magic">dispel magic</Link>. They do not function in areas where magic is suppressed or negated. Spell-like abilities cannot be used to counterspell, nor can they be counterspelled.</p>
<p>If a character class grants a spell-like ability that is not based on an actual spell, the ability's effective spell level is equal to the highest-level class spell the character can cast, and is cast at the class level the ability is gained.</p>
<p><strong className="hl">Supernatural Abilities:</strong> These can't be disrupted in combat and generally don't provoke attacks of opportunity. They aren't subject to spell resistance, counterspells, or <em>dispel magic,</em> and don't function in antimagic areas.</p>
<p><strong className="hl">Extraordinary Abilities:</strong> These abilities cannot be disrupted in combat, as spells can, and they generally do not provoke attacks of opportunity. Effects or areas that negate or disrupt magic have no effect on extraordinary abilities. They are not subject to dispelling, and they function normally in an antimagic field. Indeed, extraordinary abilities do not qualify as magical, though they may break the laws of physics.</p>
<p><strong className="hl">Natural Abilities:</strong> This category includes abilities a creature has because of its physical nature. Natural abilities are those not otherwise designated as extraordinary, supernatural, or spell-like.</p>
</>};
export default {magic_item_creation:_magic_item_creation,magic_item_gold_piece_values:_magic_item_gold_piece_values,creating_magic_armor:_creating_magic_armor,creating_magic_weapons:_creating_magic_weapons,creating_potions:_creating_potions,creating_rings:_creating_rings,creating_rods:_creating_rods,creating_scrolls:_creating_scrolls,creating_staves:_creating_staves,creating_wands:_creating_wands,creating_wondrous_items:_creating_wondrous_items,adding_new_abilities:_adding_new_abilities,movement:_movement,tactical_movement:_tactical_movement,local_movement:_local_movement,overland_movement:_overland_movement,evasion_and_pursuit:_evasion_and_pursuit,vision_and_light:_vision_and_light,breaking_things:_breaking_things,magic:_magic,casting_spells:_casting_spells,choosing_a_spell:_choosing_a_spell,concentration:_concentration,counterspells:_counterspells,caster_level:_caster_level,spell_failure:_spell_failure,special_spell_effects:_special_spell_effects,combining_magic_effects:_combining_magic_effects,spell_descriptions:_spell_descriptions,school_subschool:_school_subschool,level:_level,casting_time:_casting_time,range:_range,aiming_a_spell:_aiming_a_spell,duration:_duration,saving_throw:_saving_throw,spell_resistance:_spell_resistance,descriptive_text:_descriptive_text,arcane_spells:_arcane_spells,preparing_wizard_spells:_preparing_wizard_spells,arcane_magical_writing:_arcane_magical_writing,wizard_spells_and_borrowed_spellbooks:_wizard_spells_and_borrowed_spellbooks,adding_spells_to_a_wizards_spellbook:_adding_spells_to_a_wizards_spellbook,writing_a_new_spell_into_a_spellbook:_writing_a_new_spell_into_a_spellbook,replacing_and_copying_spellbooks:_replacing_and_copying_spellbooks,selling_a_spellbook:_selling_a_spellbook,sorcerers_and_bards:_sorcerers_and_bards,arcane_spells_and_armor:_arcane_spells_and_armor,divine_spells:_divine_spells,preparing_divine_spells:_preparing_divine_spells,divine_magical_writing:_divine_magical_writing,new_divine_spells:_new_divine_spells,psychic_magic:_psychic_magic,components_oa:_components_oa,undercasting_spells:_undercasting_spells,special_abilities:_special_abilities}