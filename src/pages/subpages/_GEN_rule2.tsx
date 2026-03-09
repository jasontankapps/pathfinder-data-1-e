import {IonRippleEffect,IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _equipment = {title: "Equipment", parent_topics: ["basics"], siblings: ["how_to_play","common_terms","character_creation","ability_scores","races","classes","character_advancement","alignment","skills","feats","equipment","traits_and_other_details","magic_items","movement","vision_and_light","breaking_things","magic"], subtopics: ["wealth_and_money","weapons","armor","other_goods_and_services","carrying_capacity"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 140</Link></p>
<p>A well-equipped character can take on nearly any challenge, from surviving in the wilderness to making an impression at the king's banquet. This section presents all manner of mundane and exotic equipment for the PCs to purchase and use, from weapons to armor, alchemical items to masterwork tools, fine wines to trail rations. The equipment presented here should be relatively easy to find and purchase in most towns and cities, although GMs might wish to restrict the availability of some of the more expensive and exotic items. Magic items are much more difficult to purchase.</p>
</>};
const _wealth_and_money = {hasJL:true,title: "Wealth and Money", parent_topics: ["basics","equipment"], siblings: ["wealth_and_money","weapons","armor","other_goods_and_services","carrying_capacity"], jsx: <><div className="jumpList" id="rule-wealth_and_money-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="rule-wealth_and_money-coins">Coins</InnerLink></li><li><InnerLink toTop to="rule-wealth_and_money-trade-goods">Trade Goods</InnerLink></li><li><InnerLink toTop to="rule-wealth_and_money-selling-treasure">Selling Treasure</InnerLink></li></ul></div><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 40</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 93</Link></p>
<p>Each character begins play with a number of gold pieces that he can spend on weapons, armor, and other equipment. As a character adventures, he accumulates more wealth that can be spent on better gear and magic items. Table 6-1 lists the starting gold piece values by class. In addition, each character begins play with an outfit worth 10 gp or less. For characters above 1st level, see <Link to="/rule/placing_treasure">Table 12-4</Link>.</p>
<h3 id="rule-wealth_and_money-table-6-1-starting-character-wealth">Table 6-1: Starting Character Wealth</h3>
<ScrollContainer id="rule-wealth_and_money--table-0"><table>
<thead>
<tr>
<th>Class</th>
<th>Starting Wealth</th>
<th>Average</th>
</tr>
</thead>
<tbody><tr>
<td>Arcanist, Druid, Psychic, Sorcerer, Spiritualist, Summoner<sup><InnerLink showBacklink="backlink-rule-wealth_and_money-ref-U-1" id="rule-wealth_and_money-ref-U-1" data-hash-target to="rule-wealth_and_money-U">1</InnerLink></sup>, Wizard</td>
<td>2d6 &times; 10 gp</td>
<td>70 gp</td>
</tr>
<tr>
<td>Alchemist, Barbarian<sup><InnerLink showBacklink="backlink-rule-wealth_and_money-ref-U-2" id="rule-wealth_and_money-ref-U-2" data-hash-target to="rule-wealth_and_money-U">1</InnerLink></sup>, Bard, Bloodrager, Brawler, Investigator, Mesmerist, Monk<sup><InnerLink showBacklink="backlink-rule-wealth_and_money-ref-U-3" id="rule-wealth_and_money-ref-U-3" data-hash-target to="rule-wealth_and_money-U">1</InnerLink></sup>, Oracle, Shaman, Shifter, Skald, Witch</td>
<td>3d6 &times; 10 gp</td>
<td>105 gp</td>
</tr>
<tr>
<td>Cleric, Hunter, Inquisitor, Magus, Medium, Ninja, Occultist, Rouge<sup><InnerLink showBacklink="backlink-rule-wealth_and_money-ref-U-4" id="rule-wealth_and_money-ref-U-4" data-hash-target to="rule-wealth_and_money-U">1</InnerLink></sup></td>
<td>4d6 &times; 10 gp</td>
<td>140 gp</td>
</tr>
<tr>
<td>Antipaladin, Cavalier, Gunslinger, Fighter, Paladin, Ranger, Samurai, Slayer, Swashbuckler, Vigilante, Warpriest</td>
<td>5d6 &times; 10 gp</td>
<td>175 gp</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-wealth_and_money-coins" data-hash-target>Coins</h3>
<p>The most common coin is the gold piece (gp). A gold piece is worth 10 silver pieces (sp). Each silver piece is worth 10 copper pieces (cp). In addition to copper, silver, and gold coins, there are also platinum pieces (pp), which are each worth 10 gp.</p>
<p>The standard coin weighs about a third of an ounce (50 to the pound).</p>
<h3 id="rule-wealth_and_money-table-6-2-coins">Table 6-2: Coins</h3>
<ScrollContainer id="rule-wealth_and_money--table-1"><table>
<thead>
<tr>
<th>Exchange Value</th>
<th>cp</th>
<th>sp</th>
<th>gp</th>
<th>pp</th>
</tr>
</thead>
<tbody><tr>
<td>Copper Piece (cp)</td>
<td>1</td>
<td>1/10</td>
<td>1/100</td>
<td>1/1,000</td>
</tr>
<tr>
<td>Silver Piece (sp)</td>
<td>10</td>
<td>1</td>
<td>1/10</td>
<td>1/100</td>
</tr>
<tr>
<td>Gold Piece (gp)</td>
<td>100</td>
<td>10</td>
<td>1</td>
<td>1/10</td>
</tr>
<tr>
<td>Platinum Piece (pp)</td>
<td>1,000</td>
<td>100</td>
<td>10</td>
<td>1</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-wealth_and_money-trade-goods" data-hash-target>Trade Goods</h3>
<p>Merchants commonly exchange trade goods without using currency. As a means of comparison, some trade goods are detailed on Table 6-3. Trade goods are the exception to the rule that you can sell an item for half its price; they're valuable enough to be exchanged almost as if they were cash itself. Trade goods are usually transported and sold in larger quantities than the amount listed. A farmer may have 10- and 20-pound sacks of potatoes to sell to a large family or restaurant, and be resistant to tearing open a bag just to sell a few individual potatoes.</p>
<p>Trade goods fall into several categories.</p>
<p><strong className="hl">Animals:</strong> The listed price is for one live animal. For larger animals such as pigs and cows, the price includes a short length of cheap rope, allowing you to lead the creature away. For smaller animals such as chickens and geese, the purchase might include a bag for carrying them.</p>
<p><strong className="hl">Food:</strong> Food items includes staples such as wheat, nuts, or cheese, plus more exotic foods or ingredients such as chilies, coffee beans, or honey. Note that some of the food items here have different prices than in the section on food, because purchasing that item as something ready to eat includes the cost (in money or labor) of preparing and cooking the food. For example, turnips as a trade good are 2 cp per pound, but a poor meal (which primarily consists of turnips) is 1 sp per day. You can buy a 10-pound bag of turnips for 2 sp, but you'd have to cut and boil them to turn them into a meal.</p>
<p><strong className="hl">Raw Materials:</strong> Raw materials have little use as-is but can be made into other useful or valuable items. Iron, stone, darkwood, leather, cloth, and fur pelts are raw materials. Metals are usually sold as ingots or rough nuggets, but can be transported or sold as ore.</p>
<p>The value of metal ore depends on its grade: how much of it is valuable metal out of the total volume of common rock. For a typical fantasy campaign, an ore's grade may be as high as 60% (for some particularly rich iron deposits) or as low as 5% (any less than this and it's not cost-effective to mine it). For convenience, assume that typical ore is 25% grade. Multiply the pure metal's price per pound by this grade percentage to determine the best value of the ore. For example, gold is 50 gp per pound, so a 25% grade ore is worth about 50 gp &times; 25% = 12-1/2 gp per pound. Given the cost of smelting, ore is usually worth one-half to three-quarters this value (so the 25% grade gold ore is actually bought and sold for about 6 gp to 9 gp per pound).</p>
<p><strong className="hl">Spices:</strong> Spices such as garlic, cumin, fennel, salt, and ginger are used to flavor other foods. They are usually sold in jars, bottles, or waxed-cloth packets.</p>
<h3 id="rule-wealth_and_money-table-6-3-trade-goods">Table 6-3: Trade Goods</h3>
<ScrollContainer id="rule-wealth_and_money--table-2"><table>
<thead>
<tr>
<th>Cost</th>
<th>Item</th>
</tr>
</thead>
<tbody><tr>
<td>1 cp</td>
<td>One pound of wheat; guinea pig; rat</td>
</tr>
<tr>
<td>2 cp</td>
<td>One pound of flour, beans, cheese, potatoes, or turnips; one chicken</td>
</tr>
<tr>
<td>3 cp</td>
<td>One pound of citrus fruits or nuts; twenty pounds of charcoal or peat</td>
</tr>
<tr>
<td>5 cp</td>
<td>One pound of coffee beans, sugar, or masonry stone; twenty pounds of coal</td>
</tr>
<tr>
<td>1 sp</td>
<td>One pound of iron</td>
</tr>
<tr>
<td>5 sp</td>
<td>One pound of garlic, mint, mustard, oregano, tobacco, copper; one square yard of thin leather</td>
</tr>
<tr>
<td>1 gp</td>
<td>One pound of allspice, basil, cinnamon, cloves, dill, honey, maple syrup, nutmeg, rosemary, or glass; one goat</td>
</tr>
<tr>
<td>2 gp</td>
<td>One pound of chilies, cardamom, cumin, fennel, ginger, pepper, vanilla; one beaver pelt; one sheep</td>
</tr>
<tr>
<td>3 gp</td>
<td>One pig; fox pelt; mink pelt; one square yard of thick leather</td>
</tr>
<tr>
<td>4 gp</td>
<td>One square yard of linen; ermine pelt</td>
</tr>
<tr>
<td>5 gp</td>
<td>One pound of salt, marble, or silver; seal pelt</td>
</tr>
<tr>
<td>10 gp</td>
<td>One square yard of silk; one cow; one pound of chocolate or darkwood</td>
</tr>
<tr>
<td>15 gp</td>
<td>One pound of saffron or cloves, or one ox</td>
</tr>
<tr>
<td>50 gp</td>
<td>One pound of gold or cold iron</td>
</tr>
<tr>
<td>300 gp</td>
<td>One pound of adamantine</td>
</tr>
<tr>
<td>500 gp</td>
<td>One pound of mithral or platinum</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-wealth_and_money-selling-treasure" data-hash-target>Selling Treasure</h3>
<p>In general, a character can sell something for half its listed price, including weapons, armor, gear, and magic items. This also includes character-created items.</p>
<p>Trade goods are the exception to the half-price rule. A trade good, in this sense, is a valuable good that can be easily exchanged almost as if it were cash itself.</p>
<section data-footnotes>
<h3 id="rule-wealth_and_money-label">Footnotes</h3>
<ol>
<li id="rule-wealth_and_money-U">
<p>The Unchained version of this class has the same starting gold. <InnerLink id="backlink-rule-wealth_and_money-ref-U-1" data-hash-target to="rule-wealth_and_money-ref-U-1" aria-label="Back to reference U-1">↩</InnerLink> <InnerLink id="backlink-rule-wealth_and_money-ref-U-2" data-hash-target to="rule-wealth_and_money-ref-U-2" aria-label="Back to reference U-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-wealth_and_money-ref-U-3" data-hash-target to="rule-wealth_and_money-ref-U-3" aria-label="Back to reference U-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-rule-wealth_and_money-ref-U-4" data-hash-target to="rule-wealth_and_money-ref-U-4" aria-label="Back to reference U-4">↩<sup>4</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
const _weapons = {title: "Weapons", parent_topics: ["basics","equipment"], siblings: ["wealth_and_money","weapons","armor","other_goods_and_services","carrying_capacity"], subtopics: ["weapon_types","weapon_encumbrance","weapon_descriptions","weapon_special_features","masterwork_weapons"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 140</Link></p>
<p>From the common longsword to the exotic dwarven urgrosh, <Link to="/main/equipment_weapons">weapons</Link> come in a wide variety of shapes and sizes.</p>
<p>All weapons deal hit point damage. This damage is subtracted from the current hit points of any creature struck by the weapon. When the result of the die roll to make an attack is a natural 20 (that is, the die actually shows a 20), this is known as a critical threat (although some weapons can score a critical threat on a roll of less than 20). If a critical threat is scored, another attack roll is made, using the same modifiers as the original attack roll. If this second attack roll is equal to or greater than the target's AC, the hit becomes a critical hit, dealing additional damage.</p>
<p>Weapons are grouped into several interlocking sets of categories. These categories pertain to what training is needed to become proficient in a weapon's use (simple, martial, or exotic), the weapon's usefulness either in close combat (melee) or at a distance (ranged, which includes both thrown and projectile weapons), its relative encumbrance (light, one-handed, or two-handed), and its size (Small, Medium, or Large).</p>
</>};
const _weapon_types = {title: "Weapon Types", parent_topics: ["basics","equipment","weapons"], siblings: ["weapon_types","weapon_encumbrance","weapon_descriptions","weapon_special_features","masterwork_weapons"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 140</Link></p>
<p><strong className="hl">Simple, Martial, and Exotic Weapons:</strong> Anybody but a druid, monk, or wizard is proficient with all simple weapons. Barbarians, fighters, paladins, and rangers are proficient with all simple and all martial weapons. Characters of other classes are proficient with an assortment of simple weapons and possibly some martial or even exotic weapons. All characters are proficient with unarmed strikes and any natural weapons possessed by their race. A character who uses a weapon with which he is not proficient takes a -4 penalty on attack rolls.</p>
<p><strong className="hl">Melee and Ranged Weapons:</strong> Melee weapons are used for making melee attacks, though some of them can be thrown as well. Ranged weapons are thrown weapons or projectile weapons that are not effective in melee.</p>
<p><strong className="hl">Reach Weapons:</strong> Glaives, guisarmes, lances, longspears, ranseurs, and whips are reach weapons. A reach weapon is a melee weapon that allows its wielder to strike at targets that aren't adjacent to him. Most reach weapons double the wielder's natural reach, meaning that a typical Small or Medium wielder of such a weapon can attack a creature 10 feet away, but not a creature in an adjacent square. A typical Large character wielding a reach weapon of the appropriate size can attack a creature 15 or 20 feet away, but not adjacent creatures or creatures up to 10 feet away.</p>
<p><strong className="hl">Double Weapons:</strong> Dire flails, dwarven urgroshes, gnome hooked hammers, orc double axes, quarterstaves, and two-bladed swords are double weapons. A character can fight with both ends of a double weapon as if fighting with two weapons, but he incurs all the normal attack penalties associated with two-weapon combat, just as though the character were wielding a one-handed weapon and a light weapon (see <Link to="/rule/two_weapon_fighting">two-weapon fighting</Link>).</p>
<p>The character can also choose to use a double weapon two-handed, attacking with only one end of it. A creature wielding a double weapon in one hand can't use it as a double weapon - only one end of the weapon can be used in any given round.</p>
<p><strong className="hl">Thrown Weapons:</strong> Daggers, clubs, shortspears, spears, darts, javelins, throwing axes, light hammers, tridents, shuriken, and nets are thrown weapons. The wielder applies his Strength modifier to damage dealt by thrown weapons (except for splash weapons). It is possible to throw a weapon that isn't designed to be thrown (that is, a melee weapon that doesn't have a numeric entry in the Range column), and a character who does so takes a -4 penalty on the attack roll. Throwing a light or one-handed weapon is a standard action, while throwing a two-handed weapon is a full-round action. Regardless of the type of weapon, such an attack scores a threat only on a natural roll of 20 and deals double damage on a critical hit. Such a weapon has a range increment of 10 feet.</p>
<p><strong className="hl">Projectile Weapons:</strong> Blowguns, light crossbows, slings, heavy crossbows, shortbows, composite shortbows, longbows, composite longbows, halfling sling staves, hand crossbows, and repeating crossbows are projectile weapons. Most projectile weapons require two hands to use (see specific weapon descriptions). A character gets no Strength bonus on damage rolls with a projectile weapon unless it's a specially built composite shortbow or longbow, or a sling. If the character has a penalty for low Strength, apply it to damage rolls when he uses a bow or a sling.</p>
<p><strong className="hl">Ammunition:</strong> Projectile weapons use ammunition: arrows (for bows), bolts (for crossbows), darts (for blowguns), or sling bullets (for slings and halfling sling staves). When using a bow, a character can draw ammunition as a free action; crossbows and slings require an action for reloading (as noted in their descriptions). Generally speaking, ammunition that hits its target is destroyed or rendered useless, while ammunition that misses has a 50% chance of being destroyed or lost.</p>
<p>Although they are thrown weapons, shuriken are treated as ammunition for the purposes of drawing them, crafting masterwork or otherwise special versions of them (see <Link to="/rule/masterwork_weapons">Masterwork Weapons</Link>), and what happens to them after they are thrown.</p>
</>};
const _weapon_encumbrance = {title: "Weapon Encumbrance and Size", parent_topics: ["basics","equipment","weapons"], siblings: ["weapon_types","weapon_encumbrance","weapon_descriptions","weapon_special_features","masterwork_weapons"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 141</Link></p>
<p><strong className="hl">Light, One-Handed, and Two-Handed Melee Weapons:</strong> This designation is a measure of how much effort it takes to wield a weapon in combat. It indicates whether a melee weapon, when wielded by a character of the weapon's size category, is considered a light weapon, a one-handed weapon, or a two-handed weapon.</p>
<p><strong className="hl">Light:</strong> A light weapon is used in one hand. It is easier to use in one's off hand than a one-handed weapon is, and can be used while <Link to="/rule/grapple">grappling</Link>. Add the wielder's Strength modifier to damage rolls for melee attacks with a light weapon if it's used in the primary hand, or half the wielder's Strength bonus if it's used in the off hand. Using two hands to wield a light weapon gives no advantage on damage; the Strength bonus applies as though the weapon were held in the wielder's primary hand only. An unarmed strike is always considered a light weapon.</p>
<p><strong className="hl">One-Handed:</strong> A one-handed weapon can be used in either the primary hand or the off hand. Add the wielder's Strength bonus to damage rolls for melee attacks with a one-handed weapon if it's used in the primary hand, or 1/2 his Strength bonus if it's used in the off hand. If a one-handed weapon is wielded with two hands during melee combat, add 1-1/2 times the character's Strength bonus to damage rolls.</p>
<p><strong className="hl">Two-Handed:</strong> Two hands are required to use a two-handed melee weapon effectively. Apply 1-1/2 times the character's Strength bonus to damage rolls for melee attacks with such a weapon.</p>
<p><strong className="hl">Weapon Size:</strong> Every weapon has a size category. This designation indicates the size of the creature for which the weapon was designed.</p>
<p>A weapon's size category isn't the same as its size as an object. Instead, a weapon's size category is keyed to the size of the intended wielder. In general, a light weapon is an object two size categories smaller than the wielder, a one-handed weapon is an object one size category smaller than the wielder, and a two-handed weapon is an object of the same size category as the wielder.</p>
<p><strong className="hl">Inappropriately Sized Weapons:</strong> A creature can't make optimum use of a weapon that isn't properly sized for it. A cumulative -2 penalty applies on attack rolls for each size category of difference between the size of its intended wielder and the size of its actual wielder. If the creature isn't proficient with the weapon, a -4 nonproficiency penalty also applies.</p>
<p>The measure of how much effort it takes to use a weapon (whether the weapon is designated as a light, one-handed, or two-handed weapon for a particular wielder) is altered by one step for each size category of difference between the wielder's size and the size of the creature for which the weapon was designed. For example, a Small creature would wield a Medium one-handed weapon as a two-handed weapon. If a weapon's designation would be changed to something other than light, one-handed, or two-handed by this alteration, the creature can't wield the weapon at all.</p>
<p><strong className="hl">Improvised Weapons:</strong> Sometimes objects not crafted to be weapons nonetheless see use in combat. Because such objects are not designed for this use, any creature that uses an improvised weapon in combat is considered to be nonproficient with it and takes a -4 penalty on attack rolls made with that object. To determine the size category and appropriate damage for an improvised weapon, compare its relative size and damage potential to the weapon list to find a reasonable match. An improvised weapon scores a threat on a natural roll of 20 and deals double damage on a critical hit. An improvised thrown weapon has a range increment of 10 feet.</p>
<blockquote>
<p><em>Also see: <Link to="/rule/improvised_weapon_special_features">Improvised Weapon Special Features</Link></em></p>
</blockquote>
<div className="sideNoteWrap singular optional elephant"><ScrollContainer id="rule-weapon_encumbrance--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/the_elephant_in_the_room"><IonIcon aria-label="The Elephant in the Room" icon="/icons/elephant.svg" /></ThLink><td><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link><br/>The Light weapon designation is renamed to Finesse.</p>
<p><strong className="hl">Finesse:</strong> A finesse weapon is used in one hand. It is easier to use in one's off hand than a one-handed weapon is and can be used while grappling.</p>
<p>A wielder may choose to use their Dexterity modifier instead of their Strength modifier on attack rolls with a finesse weapon. In either case, add the wielder's Strength modifier to damage rolls for melee attacks if it is used in the primary hand, or half the wielder's Strength bonus if it is used in the off hand. Using two hands to wield a finesse weapon gives no advantage on damage; the Strength bonus applies as though the weapon were held in the wielder's primary hand only.</p>
<p>Unarmed strikes and natural attacks are always considered finesse weapons.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _weapon_descriptions = {title: "Weapon Descriptions", parent_topics: ["basics","equipment","weapons"], siblings: ["weapon_types","weapon_encumbrance","weapon_descriptions","weapon_special_features","masterwork_weapons"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 144</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 137</Link></p>
<p><strong className="hl">Cost:</strong> This value is the weapon's cost in gold pieces (gp) or silver pieces (sp). The cost includes miscellaneous gear that goes with the weapon, such as a scabbard or quiver. This cost is the same for a Small or Medium version of the weapon. A Large version costs twice the listed price.</p>
<p><strong className="hl">Dmg:</strong> These columns give the damage dealt by the weapon on a successful hit. The column labeled <strong>Dmg (S)</strong> is for Small weapons. The column labeled <strong>Dmg (M)</strong> is for Medium weapons. If two damage ranges are given, then the weapon is a double weapon. Use the second damage figure given for the double weapon's extra attack. Table 6-5 gives weapon damage values for Tiny and Large weapons.</p>
<h3 id="rule-weapon_descriptions-table-6-5-tiny-and-large-weapon-damage">Table 6-5: Tiny and Large Weapon Damage</h3>
<ScrollContainer id="rule-weapon_descriptions--table-0"><table>
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
<p><strong className="hl">Critical:</strong> The entry in this column notes how the weapon is used with the rules for critical hits. When your character scores a critical hit, roll the damage two, three, or four times, as indicated by its critical multiplier (using all applicable modifiers on each roll), and add all the results together.</p>
<p>Extra damage over and above a weapon's normal damage is not multiplied when you score a critical hit.</p>
<blockquote>
<p><strong>&times;2:</strong> The weapon deals double damage on a critical hit.</p>
<p><strong>&times;3:</strong> The weapon deals triple damage on a critical hit.</p>
<p><strong>&times;3/&times;4:</strong> One head of this double weapon deals triple damage on a critical hit. The other head deals quadruple damage on a critical hit.</p>
<p><strong>&times;4:</strong> The weapon deals quadruple damage on a critical hit.</p>
<p><strong>19-20/&times;2:</strong> The weapon scores a threat on a natural roll of 19 or 20 (instead of just 20) and deals double damage on a critical hit.</p>
<p><strong>18-20/&times;2:</strong> The weapon scores a threat on a natural roll of 18, 19, or 20 (instead of just 20) and deals double damage on a critical hit.</p>
</blockquote>
<p><strong className="hl">Range:</strong> Any attack at more than this distance is penalized for range. Beyond this range, the attack takes a cumulative -2 penalty for each full range increment (or fraction thereof) of distance to the target. For example, a dagger (with a range of 10 feet) thrown at a target that is 25 feet away would incur a -4 penalty. A thrown weapon has a maximum range of five range increments. A projectile weapon can shoot to 10 range increments.</p>
<p><strong className="hl">Weight:</strong> This column gives the weight of a Medium version of the weapon. Halve this number for Small weapons and double it for Large weapons. Some weapons have a special weight. See the weapon's description for details.</p>
<p><strong className="hl">Type:</strong> Weapons are classified according to the type of damage they deal: B for bludgeoning, P for piercing, or S for slashing. Some monsters may be resistant or immune to attacks from certain types of weapons.</p>
<p>Some weapons deal damage of multiple types. If a weapon causes two types of damage, the type it deals is not half one type and half another; all damage caused is of both types. Therefore, a creature would have to be immune to both types of damage to ignore any of the damage caused by such a weapon.</p>
<p>In other cases, a weapon can deal either of two types of damage. In a situation where the damage type is significant, the wielder can choose which type of damage to deal with such a weapon.</p>
<p><strong className="hl">Scatter:</strong> A weapon with the scatter weapon quality can shoot two different types of ammunition. It can fire normal bullets that target one creature, or it can make a scattering shot, attacking all creatures within a cone. Cannons with the scatter weapon quality only fire grapeshot, unless their descriptions state otherwise. When a scatter weapon attacks all creatures within a cone, it makes a separate attack roll against each creature within the cone. Each attack roll takes a -2 penalty, and its attack damage cannot be modified by <Link to="/misc/precision_damage">precision damage</Link> or damage-increasing feats such as <Link to="/feat/vital_strike">Vital Strike</Link>. Effects that grant <Link to="/rule/concealment">concealment</Link>, such as fog or smoke, or the <Link to="/spell/blur">blur</Link>, <Link to="/spell/invisibility">invisibility</Link>, or <Link to="/spell/mirror_image">mirror image</Link> spells, do not foil a scatter attack. If any of the attack rolls threaten a critical, confirm the critical for that attack roll alone. A firearm that makes a scatter shot misfires only if all of the attack rolls made misfire. If a scatter weapon explodes on a misfire, it deals triple its damage to all creatures within the misfire radius.</p>
</>};
const _weapon_special_features = {title: "Weapon Special Features", parent_topics: ["basics","equipment","weapons"], siblings: ["weapon_types","weapon_encumbrance","weapon_descriptions","weapon_special_features","masterwork_weapons"], subtopics: ["improvised_weapon_special_features"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 144</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 130, 149</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 22</Link></p>
<p>Some weapons have special features in addition to those noted in their descriptions.</p>
<p><strong className="hl">Blocking:</strong> When you use this weapon to fight defensively, you gain a +1 shield bonus to AC.</p>
<p><strong className="hl">Brace:</strong> If you use a readied action to set a brace weapon against a charge, you deal double damage on a successful hit against a charging character.</p>
<p><strong className="hl">Broken:</strong> Items that have taken damage in excess of half their total hit points gain the <Link to="/misc/broken">broken</Link> condition, meaning they are less effective at their designated task. Attacks made with a broken weapon suffer a -2 penalty on attack and damage rolls. Such weapons only score a critical hit on a natural 20 and only deal &times;2 damage on a confirmed critical hit. Both firearms and <em>fragile</em> weapons (see below) include effects that grant a weapon the broken condition without the weapon explicitly taking damage.</p>
<p>If a weapon gains the broken condition from an effect, that weapon is considered to have taken damage equal to half its hit points +1. This damage is repaired either by something that addresses the effect that granted the weapon the broken condition (like quick clear in the case of firearm misfires or the <Link to="/feat/field_repair">Field Repair</Link> feat in the case of weapons with the fragile quality) or by the normal method for recovering item hit points (detailed in the broken condition description). When an effect that grants the broken condition is removed, the weapon regains the hit points it lost when the broken condition was applied.</p>
<p>Damage done by an attack against a weapon cannot be repaired by an effect that removes the broken condition.</p>
<p><strong className="hl">Deadly:</strong> When you use this weapon to deliver a <Link to="/misc/coup_de_grace">coup de grace</Link>, it gains a +4 bonus to damage when calculating the DC of the Fortitude saving throw to see whether the target of the coup de grace dies from the attack. The bonus is not added to the actual damage of the coup de grace attack.</p>
<p><strong className="hl">Disarm:</strong> When you use a disarm weapon, you get a +2 bonus on Combat Maneuver Checks to <Link to="/rule/disarm">disarm</Link> an enemy.</p>
<p><strong className="hl">Distracting:</strong> You gain a +2 bonus on Bluff skill checks to <Link to="/rule/feint">feint</Link> in combat while wielding this weapon.</p>
<p><strong className="hl">Double:</strong> You can use a double weapon to fight as if <Link to="/rule/two_weapon_fighting">fighting with two weapons</Link>, but if you do, you incur all the normal attack penalties associated with fighting with two weapons, just as if you were using a one-handed weapon and a light weapon. You can choose to wield one end of a double weapon two-handed, but it cannot be used as a double weapon when wielded in this way - only one end of the weapon can be used in any given round.</p>
<p><strong className="hl">Fragile:</strong> Weapons and armor with the fragile quality cannot take the beating that sturdier weapons can. A fragile weapon gains the <em>broken</em> condition (see above) if the wielder rolls a natural 1 on an attack roll with the weapon. If a fragile weapon is already broken, the roll of a natural 1 destroys it instead. Masterwork and magical fragile weapons and armor lack these flaws unless otherwise noted in the item description or the special material description. If a weapon gains the broken condition in this way, that weapon is considered to have taken damage equal to half its hit points +1. This damage is repaired either by something that addresses the effect that granted the weapon the broken condition (like quick clear in the case of firearm misfires or the Field Repair feat) or by the repair methods described in the broken condition. When an effect that grants the broken condition is removed, the weapon regains the hit points it lost when the broken condition was applied. Damage done by an attack against a weapon (such as from a <Link to="/rule/sunder">sunder</Link> combat maneuver) cannot be repaired by an effect that removes the broken condition.</p>
<p><strong className="hl">Grapple:</strong> On a successful critical hit with a weapon of this type, you can <Link to="/rule/grapple">grapple</Link> the target of the attack. The wielder can then attempt a combat maneuver check to grapple his opponent as a free action. This grapple attempt does not provoke an attack of opportunity from the creature you are attempting to grapple if that creature is not threatening you. While you grapple the target with a grappling weapon, you can only move or damage the creature on your turn. You are still considered <Link to="/rule/grappled">grappled</Link>, though you do not have to be adjacent to the creature to continue the grapple. If you move far enough away to be out of the weapon's reach, you end the grapple with that action.</p>
<p><strong className="hl">Monk:</strong> A monk weapon can be used by a <Link to="/class/monk">monk</Link> to perform a flurry of blows.</p>
<p><strong className="hl">Nonlethal:</strong> These weapons deal nonlethal damage.</p>
<p><strong className="hl">Performance:</strong> When wielding this weapon, if an attack or combat maneuver made with this weapon prompts a <Link to="/rule/performance_combat">combat performance check</Link>, you gain a +2 bonus on that check.</p>
<p><strong className="hl">Reach:</strong> A reach weapon is a melee weapon that allows its wielder to strike at targets that aren't adjacent to him. Most reach weapons double the wielder's natural reach, meaning that a typical Small or Medium wielder of such a weapon can attack a creature 10 feet away, but not a creature in an adjacent square. A typical Large character wielding a reach weapon of the appropriate size can attack a creature 15 or 20 feet away, but not adjacent creatures or creatures up to 10 feet away.</p>
<p><strong className="hl">Sunder:</strong> When you use a sunder weapon, you get a +2 bonus on Combat Maneuver Checks to sunder attempts.</p>
<p><strong className="hl">Trip:</strong> You can use any weapon to make <Link to="/rule/trip">trip</Link> attacks, but if you are tripped during your own trip attempt, you can drop a trip weapon to avoid being tripped. If the weapon has any other bonuses that apply during a trip attempt, those bonuses also apply during <Link to="/rule/drag">drag</Link> and <Link to="/rule/reposition">reposition</Link> combat maneuvers.</p>
</>};
const _improvised_weapon_special_features = {title: "Improvised Weapon Special Features", parent_topics: ["basics","equipment","weapons","weapon_special_features"], siblings: ["improvised_weapon_special_features"], jsx: <><p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 22</Link></p>
<p>Without the appropriate feats, abilities, or magic, <Link to="/misc/improvised_weapons">improvised weapons</Link> generally impart a -4 nonproficiency penalty on attack rolls, threaten critical hits only on a natural 20, have a critical multiplier of &times;2, and possess a range increment of 10 feet. At the GM's discretion, some improvised weapons may have additional qualities, such as those listed below. Improvised weapons only ever have one quality, determined by the GM.</p>
<p><strong className="hl">Burning:</strong> A burning or heated object, such as a fireplace poker or burning log, deals 1 point of fire damage, but its base damage die is usually <Link to="/misc/one_size_category_smaller">one size category smaller</Link>.</p>
<p><strong className="hl">Covering:</strong> A large, soft item like a sheet of canvas, a blanket, or a drapery can be used to entangle foes as a <Link to="/eq-weapon/net">net</Link>, though it is always treated as being unfolded, and thus imparts and additional -4 penalty on the attack roll to use it as an improvised weapon.</p>
<p><strong className="hl">Disk-Shaped:</strong> Plates and other thin, circular objects have a range increment of 20 feet, but they are usually destroyed after an attack, like ammunition.</p>
<p><strong className="hl">Gross:</strong> Disgusting items, like hunks of rotting meat, the severed limb of a target's ally, or the contents of a chamberpot, can be used as improvised weapons that deal no damage but <Link to="/misc/sicken">sicken</Link> the target for 1d4 rounds. A successful DC 12 Fortitude saving throw negates this condition.</p>
<p><strong className="hl">Jagged:</strong> Broken bottles and similar jagged, fragile items have a critical threat range of 19-20 but are destroyed on an attack roll of a natural 1.</p>
<p><strong className="hl">Heavy:</strong> Anvils, sledgehammers, and other very heavy items deal damage as if one size category larger, but attacking with the weapon puts the attacker off-balance, imparting a -2 penalty to AC until the start of the attacker's next turn.</p>
<p><strong className="hl">Pronged:</strong> Items with large prongs or flanges, like a pitchfork or the antlers of some taxidermic trophies, provide a +1 bonus on combat maneuver checks to <Link to="/rule/disarm">disarm</Link> an enemy.</p>
<p><strong className="hl">Silverware:</strong> Items made of silver bypass damage resistance like alchemical silver weapons, but the wielder takes a -1 penalty on damage rolls.</p>
<p><strong className="hl">Weapon-Like:</strong> Wall hanger swords, replicas, and other objects shaped very much like real weapons impart only a -2 nonproficiency penalty if the wielder is proficient in the weapon the object resembles.</p>
</>};
const _masterwork_weapons = {title: "Masterwork Weapons", parent_topics: ["basics","equipment","weapons"], siblings: ["weapon_types","weapon_encumbrance","weapon_descriptions","weapon_special_features","masterwork_weapons"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 149</Link></p>
<p>A masterwork weapon is a finely crafted version of a normal weapon. Wielding it provides a +1 enhancement bonus on attack rolls.</p>
<p>You can't add the masterwork quality to a weapon after it is created; it must be crafted as a masterwork weapon (see the <Link to="/skill/craft_any">Craft (any)</Link> skill). The masterwork quality adds 300 gp to the cost of a normal weapon (or 6 gp to the cost of a single unit of ammunition). Adding the masterwork quality to a double weapon costs twice the normal increase (+600 gp).</p>
<p>Masterwork ammunition is damaged (effectively destroyed) when used. The enhancement bonus of masterwork ammunition does not stack with any enhancement bonus of the projectile weapon firing it.</p>
<p>All magic weapons are automatically considered to be of masterwork quality. The enhancement bonus granted by the masterwork quality doesn't stack with the enhancement bonus provided by the weapon's magic.</p>
<p>Even though some types of armor and shields can be used as weapons, you can't create a masterwork version of such an item that confers an enhancement bonus on attack rolls. Instead, masterwork armor and shields have lessened armor check penalties.</p>
</>};
const _armor = {title: "Armor", parent_topics: ["basics","equipment"], siblings: ["wealth_and_money","weapons","armor","other_goods_and_services","carrying_capacity"], subtopics: ["masterwork_armor","armor_for_unusual_creatures","getting_into_and_out_of_armor"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 149</Link></p>
<p>For most, armor is the simplest way to protect oneself in a world of rampant threats and dangers. Many characters can wear only the simplest of armors, and only some can use shields. To wear heavier armor effectively, a character can select the Armor Proficiency feats, but most classes are automatically proficient with the armors that work best for them.</p>
<p>Armor and shields <Link to="/main/equipment_armor">are listed here</Link>. They use the following format.</p>
<p><strong className="hl">Cost:</strong> The cost in gold pieces of the armor for Small or Medium humanoid creatures. See <Link to="/rule/armor_for_unusual_creatures">Table 6-8</Link> for armor prices for other creatures.</p>
<p><strong className="hl">Armor/Shield Bonus:</strong> Each type of armor grants an armor bonus to AC, while shields grant a shield bonus to AC. The armor bonus from a suit of armor doesn't stack with other effects or items that grant an armor bonus. Similarly, the shield bonus from a shield doesn't stack with other effects that grant a shield bonus.</p>
<p><strong className="hl">Maximum Dex Bonus:</strong> This number is the maximum Dexterity bonus to AC that this type of armor allows. Dexterity bonuses in excess of this number are reduced to this number for the purposes of determining the wearer's AC. Heavier armors limit mobility, reducing the wearer's ability to dodge blows. This restriction doesn't affect any other Dexterity-related abilities.</p>
<p>Even if a character's Dexterity bonus to AC drops to 0 because of armor, this situation does not count as losing his Dexterity bonus to AC.</p>
<p>A character's encumbrance (the amount of gear carried, including armor) may also restrict the maximum Dexterity bonus that can be applied to his Armor Class.</p>
<p><strong className="hl">Shields:</strong> Shields do not affect a character's maximum Dexterity bonus, except for tower shields.</p>
<p><strong className="hl">Armor Check Penalty:</strong> Any armor heavier than leather, as well as any shield, hurts a character's ability to use Dexterity- and Strength-based skills. An armor check penalty applies to all Dexterity- and Strength-based skill checks. A character's encumbrance may also incur an armor check penalty.</p>
<p><strong className="hl">Shields:</strong> If a character is wearing armor and using a shield, both armor check penalties apply.</p>
<p><strong className="hl">Nonproficient with Armor Worn:</strong> A character who wears armor and/or uses a shield with which he is not proficient takes the armor's (and/or shield's) armor check penalty on attack rolls as well as on all Dexterity- and Strength-based ability and skill checks. The penalty for nonproficiency with armor stacks with the penalty for shields.</p>
<p><strong className="hl">Sleeping in Armor:</strong> A character who sleeps in medium or heavy armor is automatically fatigued the next day. He takes a -2 penalty on Strength and Dexterity and can't charge or run. Sleeping in light armor does not cause fatigue.</p>
<p><strong className="hl">Arcane Spell Failure Chance:</strong> Armor interferes with the gestures that a spellcaster must make to cast an arcane spell that has a somatic component. Arcane spellcasters face the possibility of arcane spell failure if they're wearing armor. Bards can wear light armor and use shields without incurring any arcane spell failure chance for their bard spells.</p>
<blockquote>
<p><strong className="hl">Casting an Arcane Spell in Armor:</strong> A character who casts an arcane spell while wearing armor must usually make an arcane spell failure check. The number in the Arcane Spell Failure Chance column is the percentage chance that the spell fails and is ruined. If the spell lacks a somatic component, however, it can be cast with no chance of arcane spell failure.</p>
<p>If a character is wearing armor and using a shield, add the two numbers together to get a single arcane spell failure chance.</p>
</blockquote>
<p><strong className="hl">Speed:</strong> Medium or heavy armor slows the wearer down. The number on the chart is the character's speed while wearing the armor. Humans, elves, half-elves, and half-orcs have an unencumbered speed of 30 feet. They use the first column. Dwarves, gnomes, and halflings have an unencumbered speed of 20 feet. They use the second column. Remember, however, that a dwarf's land speed remains 20 feet even in medium or heavy armor or when carrying a medium or heavy load. Shields do not affect a character's speed.</p>
<p><strong className="hl">Weight:</strong> This column gives the weight of the armor sized for a Medium wearer. Armor fitted for Small characters weighs half as much, and armor for Large characters weighs twice as much.</p>
</>};
const _masterwork_armor = {title: "Masterwork Armor", parent_topics: ["basics","equipment","armor"], siblings: ["masterwork_armor","armor_for_unusual_creatures","getting_into_and_out_of_armor"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 153</Link></p>
<p>Just as with <Link to="/rule/masterwork_weapons">weapons</Link>, you can purchase or craft masterwork versions of armor or shields. Such a well-made item functions like the normal version, except that its armor check penalty is lessened by 1.</p>
<p>A masterwork suit of armor or shield costs an extra 150 gp over and above the normal cost for that type of armor or shield.</p>
<p>The masterwork quality of a suit of armor or shield never provides a bonus on attack or damage rolls, even if the armor or shield is used as a weapon.</p>
<p>All magic armors and shields are automatically considered to be of masterwork quality.</p>
<p>You can't add the masterwork quality to armor or a shield after it is created; it must be crafted as a masterwork item.</p>
</>};
const _armor_for_unusual_creatures = {title: "Armor for Unusual Creatures", parent_topics: ["basics","equipment","armor"], siblings: ["masterwork_armor","armor_for_unusual_creatures","getting_into_and_out_of_armor"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 153</Link></p>
<p>Armor and shields for unusually big creatures, unusually little creatures, and non-humanoid creatures (such as horses) have different costs and weights. Refer to the appropriate line on Table 6-8 and apply the multipliers to cost and weight for the armor type in question.</p>
<h3 id="rule-armor_for_unusual_creatures-table-6-8-armor-for-unusual-creatures">Table 6-8: Armor for Unusual Creatures</h3>
<ScrollContainer id="rule-armor_for_unusual_creatures--table-0"><table>
<thead>
<tr>
<th>Size</th>
<th>Cost (humanoid)</th>
<th>Weight (humanoid)</th>
<th>Cost (non-humanoid)</th>
<th>Weight (non-humanoid)</th>
</tr>
</thead>
<tbody><tr>
<td>Tiny or smaller*</td>
<td>&times;1/2</td>
<td>&times;1/10</td>
<td>&times;1</td>
<td>&times;1/10</td>
</tr>
<tr>
<td>Small</td>
<td>&times;1</td>
<td>&times;1/2</td>
<td>&times;2</td>
<td>&times;1/2</td>
</tr>
<tr>
<td>Medium</td>
<td>&times;1</td>
<td>&times;1</td>
<td>&times;2</td>
<td>&times;1</td>
</tr>
<tr>
<td>Large</td>
<td>&times;2</td>
<td>&times;2</td>
<td>&times;4</td>
<td>&times;2</td>
</tr>
<tr>
<td>Huge</td>
<td>&times;4</td>
<td>&times;5</td>
<td>&times;8</td>
<td>&times;5</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>&times;8</td>
<td>&times;8</td>
<td>&times;16</td>
<td>&times;8</td>
</tr>
<tr>
<td>Colossal</td>
<td>&times;16</td>
<td>&times;12</td>
<td>&times;32</td>
<td>&times;12</td>
</tr>
</tbody></table></ScrollContainer>
<p>*Divide armor bonus by 2.</p>
</>};
const _getting_into_and_out_of_armor = {title: "Getting Into and Out of Armor", parent_topics: ["basics","equipment","armor"], siblings: ["masterwork_armor","armor_for_unusual_creatures","getting_into_and_out_of_armor"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 153</Link></p>
<p>The time required to don armor depends on its type; see Table 6-7.</p>
<p><strong className="hl">Don:</strong> This column tells how long it takes a character to put the armor on. (One minute is 10 rounds.) Readying (strapping on) a shield is only a move action.</p>
<p><strong className="hl">Don Hastily:</strong> This column tells how long it takes to put the armor on in a hurry. The armor check penalty and armor bonus for hastily donned armor are each 1 point worse than normal.</p>
<p><strong className="hl">Remove:</strong> This column tells how long it takes to get the armor off. Removing a shield from the arm and dropping it is only a move action.</p>
<h3 id="rule-getting_into_and_out_of_armor-table-6-7-donning-armor">Table 6-7: Donning Armor</h3>
<ScrollContainer id="rule-getting_into_and_out_of_armor--table-0"><table>
<thead>
<tr>
<th>Armor Type</th>
<th>Don</th>
<th>Don Hastily</th>
<th>Remove</th>
</tr>
</thead>
<tbody><tr>
<td>Shield (any)</td>
<td>1 move action</td>
<td>n/a</td>
<td>1 move action</td>
</tr>
<tr>
<td>Padded, leather, hide, studded leather, or chain shirt</td>
<td>1 minute</td>
<td>5 rounds</td>
<td>1 minute<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor-ref-1-1" id="rule-getting_into_and_out_of_armor-ref-1-1" data-hash-target to="rule-getting_into_and_out_of_armor-1">1</InnerLink></sup></td>
</tr>
<tr>
<td>Breastplate, scale mail, chainmail, banded mail, or splint mail</td>
<td>4 minutes<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor-ref-1-2" id="rule-getting_into_and_out_of_armor-ref-1-2" data-hash-target to="rule-getting_into_and_out_of_armor-1">1</InnerLink></sup></td>
<td>1 minute</td>
<td>1 minute<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor-ref-1-3" id="rule-getting_into_and_out_of_armor-ref-1-3" data-hash-target to="rule-getting_into_and_out_of_armor-1">1</InnerLink></sup></td>
</tr>
<tr>
<td>Half-plate or full plate</td>
<td>4 minutes<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor-ref-2-1" id="rule-getting_into_and_out_of_armor-ref-2-1" data-hash-target to="rule-getting_into_and_out_of_armor-2">2</InnerLink></sup></td>
<td>4 minutes<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor-ref-1-4" id="rule-getting_into_and_out_of_armor-ref-1-4" data-hash-target to="rule-getting_into_and_out_of_armor-1">1</InnerLink></sup></td>
<td>1d4+1 minutes<sup><InnerLink showBacklink="backlink-rule-getting_into_and_out_of_armor-ref-1-5" id="rule-getting_into_and_out_of_armor-ref-1-5" data-hash-target to="rule-getting_into_and_out_of_armor-1">1</InnerLink></sup></td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-getting_into_and_out_of_armor-label">Footnotes</h3>
<ol>
<li id="rule-getting_into_and_out_of_armor-1">
<p>If the character has some help, cut this time in half. A single character doing nothing else can help one or two adjacent characters. Two characters can't help each other don armor at the same time. <InnerLink id="backlink-rule-getting_into_and_out_of_armor-ref-1-1" data-hash-target to="rule-getting_into_and_out_of_armor-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink> <InnerLink id="backlink-rule-getting_into_and_out_of_armor-ref-1-2" data-hash-target to="rule-getting_into_and_out_of_armor-ref-1-2" aria-label="Back to reference 1-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-getting_into_and_out_of_armor-ref-1-3" data-hash-target to="rule-getting_into_and_out_of_armor-ref-1-3" aria-label="Back to reference 1-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-rule-getting_into_and_out_of_armor-ref-1-4" data-hash-target to="rule-getting_into_and_out_of_armor-ref-1-4" aria-label="Back to reference 1-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-rule-getting_into_and_out_of_armor-ref-1-5" data-hash-target to="rule-getting_into_and_out_of_armor-ref-1-5" aria-label="Back to reference 1-5">↩<sup>5</sup></InnerLink></p>
</li>
<li id="rule-getting_into_and_out_of_armor-2">
<p>The wearer must have help to don this armor. Without help, it can be donned only hastily. <InnerLink id="backlink-rule-getting_into_and_out_of_armor-ref-2-1" data-hash-target to="rule-getting_into_and_out_of_armor-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _other_goods_and_services = {title: "Other Goods and Services", parent_topics: ["basics","equipment"], siblings: ["wealth_and_money","weapons","armor","other_goods_and_services","carrying_capacity"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 155</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 56</Link></p>
<p><strong className="hl">Adventuring Gear:</strong> Beyond armor and weapons, a character can carry a whole variety of useful <Link to="/main/equipment_misc">adventuring gear</Link>.</p>
<p><strong className="hl">Alchemical Items:</strong> This includes a <Link to="/main/equipment_alchemical">wide variety of items</Link>, including concoctions, tinctures, reagents, tools, and more. Most can be crafted using Craft (alchemy).</p>
<p><strong className="hl">Kits:</strong> <Link to="/main/equipment_class_kits">This section</Link> includes several kits of preselected gear for each character class or for specific adventuring purposes (dungeoneering, spelunking, and so on). GMs can use these kits to quickly round out an NPC's gear. Players can use them to equip new PCs in a hurry or as a shorthand for providing gear for cohorts, followers, minions, and hirelings. The listed price for the kit includes a small discount for purchasing these items as a group. Items in a kit that are used up, destroyed, or lost cost the full price to replace.</p>
<p><strong className="hl">Tools and Skill Kits:</strong> <Link to="/main/equipment_tools">These items</Link> are particularly useful to characters with certain skills and class abilities.</p>
<p><strong className="hl">Clothing:</strong> All characters begin play with one outfit, valued at 10 gp or less. <Link to="/main/equipment_clothing">Additional outfits</Link> can be purchased normally.</p>
<p><strong className="hl">Food, Drink, and Lodging:</strong> These prices are for <Link to="/main/equipment_food_and_drink">meals and accommodations</Link> at establishments in an average city, as well as things like trail rations.</p>
<p><strong className="hl">Mounts, Pets and Related Gear:</strong> These are listed separately under <Link to="/main/equipment_mounts_pets">mounts or pets</Link> and <Link to="/main/equipment_animal_gear">animal gear</Link>.</p>
<p><strong className="hl">Transport:</strong> <Link to="/main/equipment_transport">This section</Link> includes a cost per mile for riding in a vehicle, and costs for purchasing vehicles outright. Vehicle prices generally exclude crew or animals.</p>
<p><strong className="hl">Entertainment, Spellcasting, and Services:</strong> Many adventurers like to sit down and play a game now and then to pass the time - or make some easy gold. But sometimes the best solution to a problem is to <Link to="/main/equipment_entertainment_services">hire someone else</Link> to take care of it.</p>
</>};
const _carrying_capacity = {title: "Carrying Capacity and Encumbrance", parent_topics: ["basics","equipment"], siblings: ["wealth_and_money","weapons","armor","other_goods_and_services","carrying_capacity"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 169</Link></p>
<p>These carrying capacity rules determine how much a character's equipment slows him down. Encumbrance comes in two parts: encumbrance by armor and encumbrance by total weight.</p>
<p><strong className="hl">Encumbrance by Armor:</strong> A character's armor determines his maximum Dexterity bonus to AC, armor check penalty, speed, and running speed. Unless your character is weak or carrying a lot of gear, that's all you need to know; the extra gear your character carries won't slow him down any more than the armor already does.</p>
<p>If your character is weak or carrying a lot of gear, however, then you'll need to calculate encumbrance by weight. Doing so is most important when your character is trying to carry some heavy object.</p>
<p><strong className="hl">Encumbrance by Weight:</strong> If you want to determine whether your character's gear is heavy enough to slow him down more than his armor already does, total the weight of all the character's items, including armor, weapons, and gear. Compare this total to the character's Strength on Table 7-4. Depending on the character's carrying capacity, he or she may be carrying a light, medium, or heavy load. Like armor, a character's load affects his maximum Dexterity bonus to AC, carries a check penalty (which works like an armor check penalty), reduces the character's speed, and affects how fast the character can run, as shown on Table 7-5. A medium or heavy load counts as medium or heavy armor for the purpose of abilities or skills that are restricted by armor. Carrying a light load does not encumber a character.</p>
<p>If your character is wearing armor, use the worse figure (from armor or from load) for each category. Do not stack the penalties.</p>
<p><strong className="hl">Lifting and Dragging:</strong> A character can lift as much as his maximum load over his head. A character's maximum load is the highest amount of weight listed for a character's Strength in the heavy load column of Table 7-4.</p>
<p>A character can lift as much as double his maximum load off the ground, but he or she can only stagger around with it. While overloaded in this way, the character loses any Dexterity bonus to AC and can move only 5 feet per round (as a full-round action).</p>
<p>A character can generally push or drag along the ground as much as five times his maximum load. Favorable conditions can double these numbers, and bad circumstances can reduce them by half or more.</p>
<p><strong className="hl">Bigger and Smaller Creatures:</strong> The figures on Table 7-4 are for Medium bipedal creatures. A larger bipedal creature can carry more weight depending on its size category, as follows: Large &times;2, Huge &times;4, Gargantuan &times;8, Colossal &times;16. A smaller creature can carry less weight depending on its size category, as follows: Small &times;3/4, Tiny &times;1/2, Diminutive &times;1/4, Fine &times;1/8.</p>
<p>Quadrupeds can carry heavier loads than bipeds can. Multiply the values corresponding to the creature's Strength score from Table 7-4 by the appropriate modifier, as follows: Fine &times;1/4, Diminutive &times;1/2, Tiny &times;3/4, Small &times;1, Medium &times;1-1/2, Large &times;3, Huge &times;6, Gargantuan &times;12, Colossal &times;24.</p>
<h3 id="rule-carrying_capacity-table-7-4-carrying-capacity">Table 7-4: Carrying Capacity</h3>
<ScrollContainer id="rule-carrying_capacity--table-0"><table>
<thead>
<tr>
<th>Strength Score</th>
<th>Light Load</th>
<th>Medium Load</th>
<th>Heavy Load</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>3 lbs. or less</td>
<td>4-6 lbs.</td>
<td>7-10 lbs.</td>
</tr>
<tr>
<td>2</td>
<td>6 lbs. or less</td>
<td>7-13 lbs.</td>
<td>14-20 lbs.</td>
</tr>
<tr>
<td>3</td>
<td>10 lbs. or less</td>
<td>11-20 lbs.</td>
<td>21-30 lbs.</td>
</tr>
<tr>
<td>4</td>
<td>13 lbs. or less</td>
<td>13-26 lbs.</td>
<td>27-40 lbs.</td>
</tr>
<tr>
<td>5</td>
<td>16 lbs. or less</td>
<td>17-33 lbs.</td>
<td>34-50 lbs.</td>
</tr>
<tr>
<td>6</td>
<td>20 lbs. or less</td>
<td>21-40 lbs.</td>
<td>41-60 lbs.</td>
</tr>
<tr>
<td>7</td>
<td>23 lbs. or less</td>
<td>24-46 lbs.</td>
<td>47-70 lbs.</td>
</tr>
<tr>
<td>8</td>
<td>26 lbs. or less</td>
<td>27-53 lbs.</td>
<td>54-80 lbs.</td>
</tr>
<tr>
<td>9</td>
<td>30 lbs. or less</td>
<td>31-60 lbs.</td>
<td>61-90 lbs.</td>
</tr>
<tr>
<td>10</td>
<td>33 lbs. or less</td>
<td>34-66 lbs.</td>
<td>67-100 lbs.</td>
</tr>
<tr>
<td>11</td>
<td>38 lbs. or less</td>
<td>39-76 lbs.</td>
<td>77-115 lbs.</td>
</tr>
<tr>
<td>12</td>
<td>43 lbs. or less</td>
<td>44-86 lbs.</td>
<td>87-130 lbs.</td>
</tr>
<tr>
<td>13</td>
<td>50 lbs. or less</td>
<td>51-100 lbs.</td>
<td>101-150 lbs.</td>
</tr>
<tr>
<td>14</td>
<td>58 lbs. or less</td>
<td>59-116 lbs.</td>
<td>117-175 lbs.</td>
</tr>
<tr>
<td>15</td>
<td>66 lbs. or less</td>
<td>67-134 lbs.</td>
<td>134-200 lbs.</td>
</tr>
<tr>
<td>16</td>
<td>76 lbs. or less</td>
<td>77-153 lbs.</td>
<td>154-230 lbs.</td>
</tr>
<tr>
<td>17</td>
<td>86 lbs. or less</td>
<td>87-173 lbs.</td>
<td>174-260 lbs.</td>
</tr>
<tr>
<td>18</td>
<td>100 lbs. or less</td>
<td>101-200 lbs.</td>
<td>201-300 lbs.</td>
</tr>
<tr>
<td>19</td>
<td>116 lbs. or less</td>
<td>117-233 lbs.</td>
<td>234-350 lbs.</td>
</tr>
<tr>
<td>20</td>
<td>133 lbs. or less</td>
<td>134-266 lbs.</td>
<td>267-400 lbs.</td>
</tr>
<tr>
<td>21</td>
<td>153 lbs. or less</td>
<td>154-306 lbs.</td>
<td>307-460 lbs.</td>
</tr>
<tr>
<td>22</td>
<td>173 lbs. or less</td>
<td>174-346 lbs.</td>
<td>347-520 lbs.</td>
</tr>
<tr>
<td>23</td>
<td>200 lbs. or less</td>
<td>201-400 lbs.</td>
<td>401-600 lbs.</td>
</tr>
<tr>
<td>24</td>
<td>233 lbs. or less</td>
<td>234-466 lbs.</td>
<td>467-700 lbs.</td>
</tr>
<tr>
<td>25</td>
<td>266 lbs. or less</td>
<td>267-533 lbs.</td>
<td>534-800 lbs.</td>
</tr>
<tr>
<td>26</td>
<td>306 lbs. or less</td>
<td>307-613 lbs.</td>
<td>614-920 lbs.</td>
</tr>
<tr>
<td>27</td>
<td>346 lbs. or less</td>
<td>347-693 lbs.</td>
<td>694-1,040 lbs.</td>
</tr>
<tr>
<td>28</td>
<td>400 lbs. or less</td>
<td>401-800 lbs.</td>
<td>801-1,200 lbs.</td>
</tr>
<tr>
<td>29</td>
<td>466 lbs. or less</td>
<td>467-933 lbs.</td>
<td>934-1,400 lbs.</td>
</tr>
<tr>
<td>+10</td>
<td>&times;4</td>
<td>&times;4</td>
<td>&times;4</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Tremendous Strength:</strong> For Strength scores not shown on Table 7-4, find the Strength score between 20 and 29 that has the same number in the "ones" digit as the creature's Strength score does and multiply the numbers in that row by 4 for every 10 points the creature's Strength is above the score for that row.</p>
<h3 id="rule-carrying_capacity-table-7-5-encumbrance-effects">Table 7-5: Encumbrance Effects</h3>
<ScrollContainer id="rule-carrying_capacity--table-1"><table>
<thead>
<tr>
<th>Load</th>
<th>Max Dex</th>
<th>Check Penalty</th>
<th>Speed 30 ft.</th>
<th>Speed 20 ft.</th>
<th>Run</th>
</tr>
</thead>
<tbody><tr>
<td>Medium</td>
<td>+3</td>
<td>-3</td>
<td>20 ft.</td>
<td>15 ft.</td>
<td>&times;4</td>
</tr>
<tr>
<td>Heavy</td>
<td>+1</td>
<td>-6</td>
<td>20 ft.</td>
<td>15 ft.</td>
<td>&times;3</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-carrying_capacity-armor-and-encumbrance-for-other-base-speeds">Armor and Encumbrance for Other Base Speeds</h3>
<p>The table below provides reduced speed figures for all base speeds from 5 feet to 120 feet (in 5-foot increments).</p>
<ScrollContainer id="rule-carrying_capacity--table-2"><table>
<thead>
<tr>
<th>Base Speed</th>
<th>Reduced Speed</th>
</tr>
</thead>
<tbody><tr>
<td>5 ft.</td>
<td>5 ft.</td>
</tr>
<tr>
<td>10 ft.-15 ft.</td>
<td>10 ft.</td>
</tr>
<tr>
<td>20 ft.</td>
<td>15 ft.</td>
</tr>
<tr>
<td>25 ft.-30 ft.ft.</td>
<td>20 ft.</td>
</tr>
<tr>
<td>35 ft.</td>
<td>25 ft.</td>
</tr>
<tr>
<td>40 ft.-45 ft.</td>
<td>30 ft.</td>
</tr>
<tr>
<td>50 ft.</td>
<td>35 ft.</td>
</tr>
<tr>
<td>55 ft.-60 ft.</td>
<td>40 ft.</td>
</tr>
<tr>
<td>65 ft.</td>
<td>45 ft.</td>
</tr>
<tr>
<td>70 ft.-75 ft.</td>
<td>50 ft.</td>
</tr>
<tr>
<td>80 ft.</td>
<td>55 ft.</td>
</tr>
<tr>
<td>85 ft.-90 ft.</td>
<td>60 ft.</td>
</tr>
<tr>
<td>95 ft.</td>
<td>65 ft.</td>
</tr>
<tr>
<td>100 ft.-105 ft.</td>
<td>70 ft.</td>
</tr>
<tr>
<td>110 ft.</td>
<td>75 ft.</td>
</tr>
<tr>
<td>115 ft.-120 ft.</td>
<td>80 ft.</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _magic_items = {title: "Magic Items", parent_topics: ["basics"], siblings: ["how_to_play","common_terms","character_creation","ability_scores","races","classes","character_advancement","alignment","skills","feats","equipment","traits_and_other_details","magic_items","movement","vision_and_light","breaking_things","magic"], subtopics: ["magic_items_and_detect_magic","using_items","size_and_magic_items","magic_items_on_the_body","saving_throws_against_magic_item_powers","damaging_magic_items","repairing_magic_items","charges_doses_and_multiple_uses","purchasing_magic_items","magic_item_descriptions","intelligent_items","cursed_items","artifacts","magic_item_creation"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 458</Link></p>
<p>From the common potion of cure light wounds to the mighty holy avenger, magic items are valuable tools used by heroes and villains alike. This section contains a wide variety of items to enhance any character.</p>
<p>Magic items are divided into categories: armor, weapons, potions, rings, rods, scrolls, staves, wands, and wondrous items. In addition, some magic items are cursed or intelligent. Finally, a few magic items are of such rarity and power that they are considered to belong to a category of their own: artifacts. Artifacts are classified in turn as minor (extremely rare but not one-of-a-kind items) or major (each one unique and incredibly potent).</p>
</>};
const _magic_items_and_detect_magic = {title: "Magic Items and Detect Magic", parent_topics: ["basics","magic_items"], siblings: ["magic_items_and_detect_magic","using_items","size_and_magic_items","magic_items_on_the_body","saving_throws_against_magic_item_powers","damaging_magic_items","repairing_magic_items","charges_doses_and_multiple_uses","purchasing_magic_items","magic_item_descriptions","intelligent_items","cursed_items","artifacts","magic_item_creation"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 458</Link></p>
<p>When detect magic identifies a magic item's school of magic, this information refers to the school of the spell placed within the potion, scroll, or wand, or the prerequisite given for the item. The description of each item provides its aura strength and the school to which it belongs.</p>
<p>If more than one spell is given as a prerequisite, use the highest-level spell. If no spells are included in the prerequisites, use the following default guidelines.</p>
<ScrollContainer id="rule-magic_items_and_detect_magic--table-0"><table>
<thead>
<tr>
<th>Item Nature</th>
<th>School</th>
</tr>
</thead>
<tbody><tr>
<td>Armors and protection items</td>
<td>Abjuration</td>
</tr>
<tr>
<td>Weapons or offensive items</td>
<td>Evocation</td>
</tr>
<tr>
<td>Bonus to ability score, skill check, etc.</td>
<td>Transmutation</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _using_items = {title: "Using Magic Items", parent_topics: ["basics","magic_items"], siblings: ["magic_items_and_detect_magic","using_items","size_and_magic_items","magic_items_on_the_body","saving_throws_against_magic_item_powers","damaging_magic_items","repairing_magic_items","charges_doses_and_multiple_uses","purchasing_magic_items","magic_item_descriptions","intelligent_items","cursed_items","artifacts","magic_item_creation"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 458</Link></p>
<p>To use a magic item, it must be activated, although sometimes activation simply means putting a ring on your finger. Some items, once donned, function constantly. In most cases, though, using an item requires a standard action that does not provoke attacks of opportunity. By contrast, spell completion items are treated like spells in combat and do provoke attacks of opportunity.</p>
<p>Activating a magic item is a standard action unless the item description indicates otherwise. However, the casting time of a spell is the time required to activate the same power in an item, regardless of the type of magic item, unless the item description specifically states otherwise.</p>
<p>The four ways to activate magic items are described below.</p>
<p><strong className="hl">Spell Completion:</strong> This is the activation method for scrolls. A scroll is a spell that is mostly finished. The preparation is done for the caster, so no preparation time is needed beforehand as with normal spellcasting. All that's left to do is perform the finishing parts of the spellcasting (the final gestures, words, and so on). To use a spell completion item safely, a character must be of high enough level in the right class to cast the spell already. If he can't already cast the spell, there's a chance he'll make a mistake.<sup><InnerLink showBacklink="backlink-rule-using_items-ref-M-1" id="rule-using_items-ref-M-1" data-hash-target to="rule-using_items-M">1</InnerLink></sup> Activating a spell completion item is a standard action (or the spell's casting time, whichever is longer) and provokes attacks of opportunity exactly as casting a spell does.</p>
<p><strong className="hl">Spell Trigger:</strong> Spell trigger activation is similar to spell completion, but it's even simpler. No gestures or spell finishing is needed, just a special knowledge of spellcasting that an appropriate character would know, and a single word that must be spoken. Spell trigger items can be used by anyone whose class can cast the corresponding spell. This is the case even for a character who can't actually cast spells, such as a 3rd-level paladin. The user must still determine what spell is stored in the item before she can activate it. Activating a spell trigger item is a standard action and does not provoke attacks of opportunity.</p>
<p><strong className="hl">Command Word:</strong> If no activation method is suggested either in the magic item description or by the nature of the item, assume that a command word is needed to activate it. Command word activation means that a character speaks the word and the item activates. No other special knowledge is needed.</p>
<p>A command word can be a real word, but when this is the case, the holder of the item runs the risk of activating the item accidentally by speaking the word in normal conversation. More often, the command word is some seemingly nonsensical word, or a word or phrase from an ancient language no longer in common use. Activating a command word magic item is a standard action and does not provoke attacks of opportunity.</p>
<p>Sometimes the command word to activate an item is written right on the item. Occasionally, it might be hidden within a pattern or design engraved on, carved into, or built into the item, or the item might bear a clue to the command word.</p>
<p>The Knowledge (arcana) and Knowledge (history) skills might be useful in helping to identify command words or deciphering clues regarding them. A successful check against DC 30 is needed to come up with the word itself. If that check is failed, succeeding on a second check (DC 25) might provide some insight into a clue. The spells <Link to="/spell/detect_magic">detect magic</Link>, <Link to="/spell/identify">identify</Link>, and <Link to="/spell/analyze_dweomer">analyze dweomer</Link> all reveal command words if the properties of the item are successfully identified.</p>
<p><strong className="hl">Use Activated:</strong> This type of item simply has to be used in order to activate it. A character has to drink a potion, swing a sword, interpose a shield to deflect a blow in combat, look through a lens, sprinkle dust, wear a ring, or don a hat. Use activation is generally straightforward and self-explanatory.</p>
<p>Many use-activated items are objects that a character wears. Continually functioning items are practically always items that one wears. A few must simply be in the character's possession (meaning on his person). However, some items made for wearing must still be activated. Although this activation sometimes requires a command word (see above), usually it means mentally willing the activation to happen. The description of an item states whether a command word is needed in such a case.</p>
<p>Unless stated otherwise, activating a use-activated magic item is either a standard action or not an action at all and does not provoke attacks of opportunity, unless the use involves performing an action that provokes an attack of opportunity in itself. If the use of the item takes time before a magical effect occurs, then use activation is a standard action. If the item's activation is subsumed in its use and takes no extra time use, activation is not an action at all.</p>
<p>Use activation doesn't mean that if you use an item, you automatically know what it can do. You must know (or at least guess) what the item can do and then use the item in order to activate it, unless the benefit of the item comes automatically, such as from drinking a potion or swinging a sword.</p>
<section data-footnotes>
<h3 id="rule-using_items-label">Footnotes</h3>
<ol>
<li id="rule-using_items-M">
<p>This is explained in the <Link to="/rule/scrolls">scrolls</Link> section. <InnerLink id="backlink-rule-using_items-ref-M-1" data-hash-target to="rule-using_items-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _size_and_magic_items = {title: "Size and Magic Items", parent_topics: ["basics","magic_items"], siblings: ["magic_items_and_detect_magic","using_items","size_and_magic_items","magic_items_on_the_body","saving_throws_against_magic_item_powers","damaging_magic_items","repairing_magic_items","charges_doses_and_multiple_uses","purchasing_magic_items","magic_item_descriptions","intelligent_items","cursed_items","artifacts","magic_item_creation"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 459</Link></p>
<p>When an article of magic clothing or jewelry is discovered, most of the time size shouldn't be an issue. Many magic garments are made to be easily adjustable, or they adjust themselves magically to the wearer. Size should not keep characters of various kinds from using magic items. There may be rare exceptions, especially with race-specific items.</p>
<p><strong className="hl">Armor and Weapon Sizes:</strong> Armor and weapons that are found at random have a 30% chance of being Small (01-30), a 60% chance of being Medium (31-90), and a 10% chance of being any other size (91-100).</p>
</>};
const _magic_items_on_the_body = {title: "Magic Items on the Body", parent_topics: ["basics","magic_items"], siblings: ["magic_items_and_detect_magic","using_items","size_and_magic_items","magic_items_on_the_body","saving_throws_against_magic_item_powers","damaging_magic_items","repairing_magic_items","charges_doses_and_multiple_uses","purchasing_magic_items","magic_item_descriptions","intelligent_items","cursed_items","artifacts","magic_item_creation"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 459</Link></p>
<p>Many magic items need to be donned by a character who wants to employ them or benefit from their abilities. It's possible for a creature with a humanoid-shaped body to wear as many as 15 magic items at the same time. However, each of those items must be worn on (or over) a particular part of the body, known as a "slot."</p>
<p>A humanoid-shaped body can be decked out in magic gear consisting of one item from each of the following groups, keyed to which slot on the body the item is worn.</p>
<blockquote>
<p><strong className="hl">Armor:</strong> suits of armor.</p>
<p><strong className="hl">Belts:</strong> belts and girdles.</p>
<p><strong className="hl">Body:</strong> robes and vestments.</p>
<p><strong className="hl">Chest:</strong> mantles, shirts, and vests.</p>
<p><strong className="hl">Eyes:</strong> eyes, glasses, and goggles.</p>
<p><strong className="hl">Feet:</strong> boots, shoes, and slippers.</p>
<p><strong className="hl">Hands:</strong> gauntlets and gloves.</p>
<p><strong className="hl">Head:</strong> circlets, crowns, hats, helms, and masks.</p>
<p><strong className="hl">Headband:</strong> headbands and phylacteries.</p>
<p><strong className="hl">Neck:</strong> amulets, brooches, medallions, necklaces, periapts, and scarabs.</p>
<p><strong className="hl">Ring (up to two):</strong> rings.</p>
<p><strong className="hl">Shield:</strong> shields.</p>
<p><strong className="hl">Shoulders:</strong> capes and cloaks.</p>
<p><strong className="hl">Wrist:</strong> bracelets and bracers.</p>
</blockquote>
<p>Of course, a character may carry or possess as many items of the same type as he wishes. However, additional items beyond those in the slots listed above have no effect.</p>
<p>Some items can be worn or carried without taking up a slot on a character's body. The description of an item indicates when an item has this property.</p>
<blockquote>
<p><em>Also see: <Link to="/rule/magic_items_for_familiars_and_animal_companions">Magic Items for Familiars and Animal Companions</Link></em></p>
</blockquote>
</>};
const _saving_throws_against_magic_item_powers = {title: "Saving Throws Against Magic Item Powers", parent_topics: ["basics","magic_items"], siblings: ["magic_items_and_detect_magic","using_items","size_and_magic_items","magic_items_on_the_body","saving_throws_against_magic_item_powers","damaging_magic_items","repairing_magic_items","charges_doses_and_multiple_uses","purchasing_magic_items","magic_item_descriptions","intelligent_items","cursed_items","artifacts","magic_item_creation"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 459</Link></p>
<p>Magic items produce spells or spell-like effects. For a saving throw against a spell or spell-like effect from a magic item, the DC is 10 + the level of the spell or effect + the ability modifier of the minimum ability score needed to cast that level of spell.</p>
<p>Staves are an exception to the rule. Treat the saving throw as if the wielder cast the spell, including caster level and all modifiers to save DCs.</p>
<p>Most item descriptions give saving throw DCs for various effects, particularly when the effect has no exact spell equivalent (making its level otherwise difficult to determine quickly).</p>
</>};
const _damaging_magic_items = {title: "Damaging Magic Items", parent_topics: ["basics","magic_items"], siblings: ["magic_items_and_detect_magic","using_items","size_and_magic_items","magic_items_on_the_body","saving_throws_against_magic_item_powers","damaging_magic_items","repairing_magic_items","charges_doses_and_multiple_uses","purchasing_magic_items","magic_item_descriptions","intelligent_items","cursed_items","artifacts","magic_item_creation"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 459</Link></p>
<p>A magic item doesn't need to make a saving throw unless it is unattended, it is specifically targeted by the effect, or its wielder rolls a natural 1 on his save. Magic items should always get a saving throw against spells that might deal damage to them - even against attacks from which a nonmagical item would normally get no chance to save. Magic items use the same saving throw bonus for all saves, no matter what the type (Fortitude, Reflex, or Will). A magic item's saving throw bonus equals 2 + 1/2 its caster level (rounded down). The only exceptions to this are intelligent magic items, which make Will saves based on their own Wisdom scores.</p>
<p>Magic items, unless otherwise noted, take damage as nonmagical items of the same sort. A damaged magic item continues to function, but if it is destroyed, all its magical power is lost. Magic items that take damage in excess of half their total hit points, but not more than their total hit points, gain the <Link to="/misc/broken">broken condition</Link>, and might not function properly.</p>
</>};
const _repairing_magic_items = {title: "Repairing Magic Items", parent_topics: ["basics","magic_items"], siblings: ["magic_items_and_detect_magic","using_items","size_and_magic_items","magic_items_on_the_body","saving_throws_against_magic_item_powers","damaging_magic_items","repairing_magic_items","charges_doses_and_multiple_uses","purchasing_magic_items","magic_item_descriptions","intelligent_items","cursed_items","artifacts","magic_item_creation"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 459</Link></p>
<p>Repairing a magic item requires material components equal to half the cost to create the item, and requires half the time. The make whole spell can also repair a damaged (or even a destroyed) magic item - if the caster is high enough level.</p>
</>};
const _charges_doses_and_multiple_uses = {title: "Charges, Doses, and Multiple Uses", parent_topics: ["basics","magic_items"], siblings: ["magic_items_and_detect_magic","using_items","size_and_magic_items","magic_items_on_the_body","saving_throws_against_magic_item_powers","damaging_magic_items","repairing_magic_items","charges_doses_and_multiple_uses","purchasing_magic_items","magic_item_descriptions","intelligent_items","cursed_items","artifacts","magic_item_creation"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 459</Link></p>
<p>Many items, particularly wands and staves, are limited in power by the number of charges they hold. Normally, charged items have 50 charges at most (10 for staves). If such an item is found as a random part of a treasure, roll d% and divide by 2 to determine the number of charges left (round down, minimum 1). If the item has a maximum number of charges other than 50, roll randomly to determine how many charges are left.</p>
<p>Prices listed are always for fully charged items. (When an item is created, it is fully charged.) For an item that's worthless when its charges run out (which is the case for almost all charged items), the value of the partially used item is proportional to the number of charges left. For an item that has usefulness in addition to its charges, only part of the item's value is based on the number of charges left.</p>
</>};
const _purchasing_magic_items = {title: "Purchasing Magic Items", parent_topics: ["basics","magic_items"], siblings: ["magic_items_and_detect_magic","using_items","size_and_magic_items","magic_items_on_the_body","saving_throws_against_magic_item_powers","damaging_magic_items","repairing_magic_items","charges_doses_and_multiple_uses","purchasing_magic_items","magic_item_descriptions","intelligent_items","cursed_items","artifacts","magic_item_creation"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 460</Link></p>
<p>Magic items are valuable, and most major cities have at least one or two purveyors of magic items, from a simple potion merchant to a weapon smith that specializes in magic swords. Of course, not every item is available in every town.</p>
<p>The following guidelines are presented to help GMs determine what items are available in a given community. These guidelines assume a setting with an average level of magic. Some cities might deviate wildly from these baselines, subject to GM discretion. The GM should keep a list of what items are available from each merchant and should replenish the stocks on occasion to represent new acquisitions.</p>
<p>The number and types of magic items available in a community depend upon its size. Each community has a base value associated with it (see Table 15-1). There is a 75% chance that any item of that value or lower can be found for sale with little effort in that community. In addition, the community has a number of other items for sale. These items are randomly determined and are broken down by category (minor, medium, or major). After determining the number of items available in each category, refer to Table 15-2 to determine the type of each item (potion, scroll, ring, weapon, etc.) before moving on to the individual charts to determine the exact item. Reroll any items that fall below the community's base value.</p>
<p>If you are running a campaign with low magic, reduce the base value and the number of items in each community by half. Campaigns with little or no magic might not have magic items for sale at all. GMs running these sorts of campaigns should make some adjustments to the challenges faced by the characters due to their lack of magic gear.</p>
<p>Campaigns with an abundance of magic items might have communities with twice the listed base value and random items available. Alternatively, all communities might count as one size category larger for the purposes of what items are available. In a campaign with very common magic, all magic items might be available for purchase in a metropolis.</p>
<p>Nonmagical items and gear are generally available in a community of any size unless the item is particularly expensive, such as full plate, or made of an unusual material, such as an adamantine longsword. These items should follow the base value guidelines to determine their availability, subject to GM discretion.</p>
<h3 id="rule-purchasing_magic_items-table-15-1-available-magic-items">Table 15-1: Available Magic Items</h3>
<ScrollContainer id="rule-purchasing_magic_items--table-0"><table>
<thead>
<tr>
<th>Community Size</th>
<th>Base Value</th>
<th>Minor</th>
<th>Medium</th>
<th>Major</th>
</tr>
</thead>
<tbody><tr>
<td>Thorp</td>
<td>50 gp</td>
<td>1d4 items</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>Hamlet</td>
<td>200 gp</td>
<td>1d6 items</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>Village</td>
<td>500 gp</td>
<td>2d4 items</td>
<td>1d4 items</td>
<td>-</td>
</tr>
<tr>
<td>Small town</td>
<td>1,000 gp</td>
<td>3d4 items</td>
<td>1d6 items</td>
<td>-</td>
</tr>
<tr>
<td>Large town</td>
<td>2,000 gp</td>
<td>3d4 items</td>
<td>2d4 items</td>
<td>1d4 items</td>
</tr>
<tr>
<td>Small city</td>
<td>4,000 gp</td>
<td>4d4 items</td>
<td>3d4 items</td>
<td>1d6 items</td>
</tr>
<tr>
<td>Large city</td>
<td>8,000 gp</td>
<td>4d4 items</td>
<td>3d4 items</td>
<td>2d4 items</td>
</tr>
<tr>
<td>Metropolis</td>
<td>16,000 gp</td>
<td>*</td>
<td>4d4 items</td>
<td>3d4 items</td>
</tr>
</tbody></table></ScrollContainer>
<p>* In a metropolis, nearly all minor magic items are available.</p>
<h3 id="rule-purchasing_magic_items-table-15-2-random-magic-item-generation">Table 15-2: Random Magic Item Generation</h3>
<ScrollContainer id="rule-purchasing_magic_items--table-1"><table>
<thead>
<tr>
<th>Minor</th>
<th>Medium</th>
<th>Major</th>
<th>Item</th>
</tr>
</thead>
<tbody><tr>
<td>01-04</td>
<td>01-10</td>
<td>01-10</td>
<td>Armor and shields</td>
</tr>
<tr>
<td>05-09</td>
<td>11-20</td>
<td>11-20</td>
<td>Weapons</td>
</tr>
<tr>
<td>10-44</td>
<td>21-30</td>
<td>21-25</td>
<td>Potions</td>
</tr>
<tr>
<td>45-46</td>
<td>31-40</td>
<td>26-35</td>
<td>Rings</td>
</tr>
<tr>
<td>-</td>
<td>41-50</td>
<td>36-45</td>
<td>Rods</td>
</tr>
<tr>
<td>47-81</td>
<td>51-65</td>
<td>46-55</td>
<td>Scrolls</td>
</tr>
<tr>
<td>-</td>
<td>66-68</td>
<td>56-75</td>
<td>Staves</td>
</tr>
<tr>
<td>82-91</td>
<td>69-83</td>
<td>56-80</td>
<td>Wands</td>
</tr>
<tr>
<td>92-100</td>
<td>84-100</td>
<td>81-100</td>
<td>Wondrous items</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _magic_item_descriptions = {title: "Magic Item Descriptions", parent_topics: ["basics","magic_items"], siblings: ["magic_items_and_detect_magic","using_items","size_and_magic_items","magic_items_on_the_body","saving_throws_against_magic_item_powers","damaging_magic_items","repairing_magic_items","charges_doses_and_multiple_uses","purchasing_magic_items","magic_item_descriptions","intelligent_items","cursed_items","artifacts","magic_item_creation"], subtopics: ["extradimensional_spaces","magic_armor","magic_weapons","potions","rings","rods","scrolls","staves","wands","wondrous_items"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 460</Link></p>
<p>Each general type of magic item gets an overall description, followed by descriptions of specific items.</p>
<p>General descriptions include notes on activation, random generation, and other material. The AC, hardness, hit points, and break DC are given for typical examples of some magic items. The AC assumes that the item is unattended and includes a -5 penalty for the item's effective Dexterity of 0. If a creature holds the item, use the creature's Dexterity modifier in place of the -5 penalty.</p>
<p>Some individual items, notably those that just store spells, don't get full-blown descriptions. Reference the spell's description for details, modified by the form of the item (potion, scroll, wand, and so on). Assume that the spell is cast at the minimum level required to cast it. Items with full descriptions have their powers detailed, and each of the following topics is covered in notational form as part of its entry.</p>
<p><strong className="hl">Aura:</strong> Most of the time, a detect magic spell reveals the school of magic associated with a magic item and the strength of the aura an item emits. This information (when applicable) is given at the beginning of the item's notational entry. See the <Link to="/spell/detect_magic">detect magic</Link> spell description for details.</p>
<p><strong className="hl">Caster Level (CL):</strong> The next item in a notational entry gives the caster level of the item, indicating its relative power. The caster level determines the item's saving throw bonus, as well as range or other level-dependent aspects of the powers of the item (if variable). It also determines the level that must be contended with should the item come under the effect of a <Link to="/spell/dispel_magic">dispel magic</Link> spell or similar situation.</p>
<p>For potions, scrolls, and wands, the creator can set the caster level of an item at any number high enough to cast the stored spell but not higher than her own caster level. For other magic items, the caster level is determined by the item itself.</p>
<p><strong className="hl">Slot:</strong> Most magic items can only be utilized if worn or wielded in their proper slots. If the item is stowed or placed elsewhere, it does not function. If the slot lists "none," the item must be held or otherwise carried to function.</p>
<p><strong className="hl">Price:</strong> This is the cost, in gold pieces, to purchase the item, if it is available for sale. Generally speaking, magic items can be sold by PCs for half this value.</p>
<p><strong className="hl">Weight:</strong> This is the weight of an item. When a weight figure is not given, the item has no weight worth noting (for purposes of determining how much of a load a character can carry).</p>
<p><strong className="hl">Description:</strong> This section of a magic item describes the item's powers and abilities. Potions, scrolls, staves, and wands refer to various spells as part of their descriptions.</p>
<p><strong className="hl">Construction:</strong> With the exception of artifacts, most magic items can be built by a spellcaster with the appropriate feats and prerequisites. This section describes those prerequisites.</p>
<p><strong className="hl">Requirements:</strong> Certain requirements must be met in order for a character to create a magic item. These include feats, spells, and miscellaneous requirements such as level, alignment, and race or kind.</p>
<p>A spell prerequisite may be provided by a character who has prepared the spell (or who knows the spell, in the case of a sorcerer or bard), or through the use of a spell completion or spell trigger magic item or a spell-like ability that produces the desired spell effect. For each day that passes in the creation process, the creator must expend one spell completion item or one charge from a spell trigger item if either of those objects is used to supply a prerequisite.</p>
<p>It is possible for more than one character to cooperate in the creation of an item, with each participant providing one or more of the prerequisites. In some cases, cooperation may even be necessary.</p>
<p>If two or more characters cooperate to create an item, they must agree among themselves who will be considered the creator for the purpose of determinations where the creator's level must be known.</p>
<p><strong className="hl">Cost:</strong> This is the cost in gold pieces to create the item. Generally this cost is equal to half the price of an item, but additional material components might increase this number. The cost to create includes the costs derived from the base cost plus the costs of the components.</p>
</>};
const _extradimensional_spaces = {title: "Extradimensional Spaces", parent_topics: ["basics","magic_items","magic_item_descriptions"], siblings: ["extradimensional_spaces","magic_armor","magic_weapons","potions","rings","rods","scrolls","staves","wands","wondrous_items"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 501</Link></p>
<p>A number of spells and magic items utilize extradimensional spaces, such as <Link to="/spell/rope_trick">rope trick</Link>, a <Link to="/magic-wondrous/bag_of_holding">bag of holding</Link>, a <Link to="/magic-wondrous/handy_haversack">handy haversack</Link>, and a <Link to="/magic-wondrous/portable_hole">portable hole</Link>. These spells and magic items create a tiny pocket space that does not exist in any dimension. Such items do not function, however, inside another extradimensional space. If placed inside such a space, they cease to function until removed from the extradimensional space. For example, if a bag of holding is brought into a rope trick, the contents of the bag of holding become inaccessible until the bag of holding is taken outside the rope trick. The only exception to this is when a bag of holding and a portable hole interact, forming a rift to the <Link to="/rule/astral_plane">Astral Plane</Link>, as noted in their descriptions.</p>
</>};
const _magic_armor = {title: "Magic Armor", parent_topics: ["basics","magic_items","magic_item_descriptions"], siblings: ["extradimensional_spaces","magic_armor","magic_weapons","potions","rings","rods","scrolls","staves","wands","wondrous_items"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 461</Link></p>
<p>In general, magic armor protects the wearer to a greater extent than nonmagical armor. Magic armor bonuses are enhancement bonuses, never rise above +5, and stack with regular armor bonuses (and with shield and magic shield enhancement bonuses). All magic armor is also masterwork armor, reducing armor check penalties by 1.</p>
<p>In addition to an enhancement bonus, armor may have special abilities. Special abilities usually count as additional bonuses for determining the market value of an item, but do not improve AC. A suit of armor cannot have an effective bonus (enhancement plus special ability bonus equivalents, including from character abilities and spells) higher than +10. A suit of armor with a special ability must also have at least a +1 enhancement bonus.</p>
<p>A suit of armor or a shield may be made of an unusual material. Roll d%: 01-95 indicates that the item is of a standard sort, and 96-100 indicates that it is made of a special material.</p>
<p>Armor is always created so that if the type of armor comes with a pair of boots, a helm, or a set of gauntlets, these pieces can be switched for other magic boots, helms, or gauntlets.</p>
<p><strong className="hl">Caster Level for Armor and Shields:</strong> The caster level of a magic shield or magic armor with a special ability is given in the item description. For an item with only an enhancement bonus, the caster level is three times the enhancement bonus. If an item has both an enhancement bonus and a special ability, the higher of the two caster level requirements must be met.</p>
<p><strong className="hl">Shields:</strong> Shield enhancement bonuses stack with armor enhancement bonuses. Shield enhancement bonuses do not act as attack or damage bonuses when the shield is used in a shield bash. The <Link to="/magic-enh/bashing">bashing</Link> special ability, however, does grant a +1 bonus on attack and damage rolls.</p>
<p>A shield could be built that also acted as a magic weapon, but the cost of the enhancement bonus on attack rolls would need to be added into the cost of the shield and its enhancement bonus to AC.</p>
<p>As with armor, special abilities built into the shield add to the market value in the form of additions to the bonus of the shield, although they do not improve AC. A shield cannot have an effective bonus (enhancement plus special ability bonus equivalents) higher than +10. A shield with a special ability must also have at least a +1 enhancement bonus.</p>
<p><strong className="hl">Activation:</strong> Usually a character benefits from magic armor and shields in exactly the way a character benefits from nonmagical armor and shields: by wearing them. If armor or a shield has a special ability that the user needs to activate, then the user usually needs to utter the command word (a standard action).</p>
<p><strong className="hl">Armor for Unusual Creatures:</strong> The cost of armor for non-humanoid creatures, as well as for creatures who are neither Small nor Medium, <Link to="/rule/armor_for_unusual_creatures">varies</Link>. The cost of the masterwork quality and any magical enhancement remains the same.</p>
<h3 id="rule-magic_armor-table-15-3-armor-and-shields">Table 15-3: Armor and Shields</h3>
<ScrollContainer id="rule-magic_armor--table-0"><table>
<thead>
<tr>
<th>Minor</th>
<th>Medium</th>
<th>Major</th>
<th>Item</th>
<th>Base Price</th>
</tr>
</thead>
<tbody><tr>
<td>01-60</td>
<td>01-05</td>
<td>-</td>
<td>+1 shield</td>
<td>1,000 gp</td>
</tr>
<tr>
<td>61-80</td>
<td>06-10</td>
<td>-</td>
<td>+1 armor</td>
<td>1,000 gp</td>
</tr>
<tr>
<td>81-85</td>
<td>11-20</td>
<td>-</td>
<td>+2 shield</td>
<td>4,000 gp</td>
</tr>
<tr>
<td>86-87</td>
<td>21-30</td>
<td>-</td>
<td>+2 armor</td>
<td>4,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>31-40</td>
<td>01-08</td>
<td>+3 shield</td>
<td>9,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>41-50</td>
<td>09-16</td>
<td>+3 armor</td>
<td>9,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>51-55</td>
<td>17-27</td>
<td>+4 shield</td>
<td>16,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>56-57</td>
<td>28-38</td>
<td>+4 armor</td>
<td>16,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>39-49</td>
<td>+5 shield</td>
<td>25,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>50-57</td>
<td>+5 armor</td>
<td>25,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>-</td>
<td>+6 armor/shield<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-1-1" id="rule-magic_armor-ref-1-1" data-hash-target to="rule-magic_armor-1">1</InnerLink></sup></td>
<td>36,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>-</td>
<td>+7 armor/shield<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-1-2" id="rule-magic_armor-ref-1-2" data-hash-target to="rule-magic_armor-1">1</InnerLink></sup></td>
<td>49,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>-</td>
<td>+8 armor/shield<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-1-3" id="rule-magic_armor-ref-1-3" data-hash-target to="rule-magic_armor-1">1</InnerLink></sup></td>
<td>64,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>-</td>
<td>+9 armor/shield<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-1-4" id="rule-magic_armor-ref-1-4" data-hash-target to="rule-magic_armor-1">1</InnerLink></sup></td>
<td>81,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>-</td>
<td>+10 armor/shield<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-1-5" id="rule-magic_armor-ref-1-5" data-hash-target to="rule-magic_armor-1">1</InnerLink></sup></td>
<td>100,000 gp</td>
</tr>
<tr>
<td>88-89</td>
<td>58-60</td>
<td>58-60</td>
<td>Specific armor (below)</td>
<td>-</td>
</tr>
<tr>
<td>90-91</td>
<td>61-63</td>
<td>61-63</td>
<td>Specific shield (below)</td>
<td>-</td>
</tr>
<tr>
<td>92-100</td>
<td>64-100</td>
<td>64-100</td>
<td>Special ability (below) and roll again</td>
<td>-</td>
</tr>
</tbody></table></ScrollContainer>
<p><em>Also see: <Link to="/rule/random_armor_and_shields">Random Armor and Shields (Gamemastery)</Link></em></p>
<h3 id="rule-magic_armor-table-15-6-specific-armors">Table 15-6: Specific Armors</h3>
<ScrollContainer id="rule-magic_armor--table-1"><table>
<thead>
<tr>
<th>Minor</th>
<th>Medium</th>
<th>Major</th>
<th>Specific Armor</th>
<th>Market Price</th>
</tr>
</thead>
<tbody><tr>
<td>01-50</td>
<td>01-25</td>
<td>-</td>
<td className="ion-activatable"><Link to="/eq-armor/mithral_shirt">Mithral shirt<IonRippleEffect /></Link></td>
<td>1,100 gp</td>
</tr>
<tr>
<td>51-80</td>
<td>26-45</td>
<td>-</td>
<td className="ion-activatable"><Link to="/eq-armor/dragonhide_plate">Dragonhide plate<IonRippleEffect /></Link></td>
<td>3,300 gp</td>
</tr>
<tr>
<td>81-100</td>
<td>46-57</td>
<td>-</td>
<td className="ion-activatable"><Link to="/eq-armor/elven_chain">Elven chain<IonRippleEffect /></Link></td>
<td>5,150 gp</td>
</tr>
<tr>
<td>-</td>
<td>58-67</td>
<td>-</td>
<td className="ion-activatable"><Link to="/magic-armor/rhino_hide">Rhino hide<IonRippleEffect /></Link></td>
<td>5,165 gp</td>
</tr>
<tr>
<td>-</td>
<td>68-82</td>
<td>01-10</td>
<td className="ion-activatable"><Link to="/eq-armor/adamantine_breastplate">Adamantine breastplate<IonRippleEffect /></Link></td>
<td>10,200 gp</td>
</tr>
<tr>
<td>-</td>
<td>83-97</td>
<td>11-20</td>
<td className="ion-activatable"><Link to="/eq-armor/dwarven_plate">Dwarven plate<IonRippleEffect /></Link></td>
<td>16,500 gp</td>
</tr>
<tr>
<td>-</td>
<td>98-100</td>
<td>21-32</td>
<td className="ion-activatable"><Link to="/magic-armor/banded_mail_of_luck">Banded mail of luck<IonRippleEffect /></Link></td>
<td>18,900 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>33-50</td>
<td className="ion-activatable"><Link to="/magic-armor/celestial_armor">Celestial armor<IonRippleEffect /></Link></td>
<td>22,400 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>51-60</td>
<td className="ion-activatable"><Link to="/magic-armor/plate_armor_of_the_deep">Plate armor of the deep<IonRippleEffect /></Link></td>
<td>24,650 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>61-75</td>
<td className="ion-activatable"><Link to="/magic-armor/breastplate_of_command">Breastplate of command<IonRippleEffect /></Link></td>
<td>25,400 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>76-90</td>
<td className="ion-activatable"><Link to="/magic-armor/mithral_full_plate_of_speed">Mithral full plate of speed<IonRippleEffect /></Link></td>
<td>26,500 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>91-100</td>
<td className="ion-activatable"><Link to="/magic-armor/demon_armor">Demon armor<IonRippleEffect /></Link></td>
<td>52,260 gp</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-magic_armor-table-15-7-specific-shields">Table 15-7: Specific Shields</h3>
<ScrollContainer id="rule-magic_armor--table-2"><table>
<thead>
<tr>
<th>Minor</th>
<th>Medium</th>
<th>Major</th>
<th>Specific Armor</th>
<th>Market Price</th>
</tr>
</thead>
<tbody><tr>
<td>01-30</td>
<td>01-20</td>
<td>-</td>
<td className="ion-activatable"><Link to="/eq-armor/darkwood_buckler">Darkwood buckler<IonRippleEffect /></Link></td>
<td>203 gp</td>
</tr>
<tr>
<td>31-80</td>
<td>21-45</td>
<td>-</td>
<td className="ion-activatable"><Link to="/eq-armor/darkwood_shield">Darkwood shield<IonRippleEffect /></Link></td>
<td>257 gp</td>
</tr>
<tr>
<td>81-95</td>
<td>46-70</td>
<td>-</td>
<td className="ion-activatable"><Link to="/eq-armor/mithral_heavy_shield">Mithral heavy shield<IonRippleEffect /></Link></td>
<td>1,020 gp</td>
</tr>
<tr>
<td>96-100</td>
<td>71-85</td>
<td>01-20</td>
<td className="ion-activatable"><Link to="/magic-armor/casters_shield">Caster's shield<IonRippleEffect /></Link></td>
<td>3,153 gp</td>
</tr>
<tr>
<td>-</td>
<td>86-90</td>
<td>21-40</td>
<td className="ion-activatable"><Link to="/magic-armor/spined_shield">Spined shield<IonRippleEffect /></Link></td>
<td>5,580 gp</td>
</tr>
<tr>
<td>-</td>
<td>91-95</td>
<td>41-60</td>
<td className="ion-activatable"><Link to="/magic-armor/lions_shield">Lion's shield<IonRippleEffect /></Link></td>
<td>9,170 gp</td>
</tr>
<tr>
<td>-</td>
<td>96-100</td>
<td>61-90</td>
<td className="ion-activatable"><Link to="/magic-armor/winged_shield">Winged shield<IonRippleEffect /></Link></td>
<td>17,257 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>91-100</td>
<td className="ion-activatable"><Link to="/magic-armor/absorbing_shield">Absorbing shield<IonRippleEffect /></Link></td>
<td>50,170 gp</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-magic_armor-table-15-4-armor-special-abilities">Table 15-4: Armor Special Abilities</h3>
<ScrollContainer id="rule-magic_armor--table-3"><table>
<thead>
<tr>
<th>Minor</th>
<th>Medium</th>
<th>Major</th>
<th>Special Ability</th>
<th>Base Price Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>01-25</td>
<td>01-05</td>
<td>01-03</td>
<td className="ion-activatable"><Link to="/magic-enh/glamered">Glamered<IonRippleEffect /></Link></td>
<td>+2,700 gp</td>
</tr>
<tr>
<td>26-32</td>
<td>06-08</td>
<td>04</td>
<td className="ion-activatable"><Link to="/magic-enh/fortification_light">Fortification, light<IonRippleEffect /></Link></td>
<td>+1 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-1" id="rule-magic_armor-ref-2-1" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>33-52</td>
<td>09-11</td>
<td>-</td>
<td className="ion-activatable"><Link to="/magic-enh/slick">Slick<IonRippleEffect /></Link></td>
<td>+3,750 gp</td>
</tr>
<tr>
<td>53-92</td>
<td>12-17</td>
<td>-</td>
<td className="ion-activatable"><Link to="/magic-enh/shadow">Shadow<IonRippleEffect /></Link></td>
<td>+3,750 gp</td>
</tr>
<tr>
<td>93-96</td>
<td>18-19</td>
<td>-</td>
<td className="ion-activatable"><Link to="/magic-enh/spell_resistance_13">Spell resistance (13)<IonRippleEffect /></Link></td>
<td>+2 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-2" id="rule-magic_armor-ref-2-2" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>97</td>
<td>20-29</td>
<td>05-07</td>
<td className="ion-activatable"><Link to="/magic-enh/slick_improved">Slick, improved<IonRippleEffect /></Link></td>
<td>+15,000 gp</td>
</tr>
<tr>
<td>98-99</td>
<td>30-49</td>
<td>08-13</td>
<td className="ion-activatable"><Link to="/magic-enh/shadow_improved">Shadow, improved<IonRippleEffect /></Link></td>
<td>+15,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>50-74</td>
<td>14-28</td>
<td className="ion-activatable"><Link to="/magic-enh/energy_resistance">Energy resistance<IonRippleEffect /></Link></td>
<td>+18,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>75-79</td>
<td>29-33</td>
<td className="ion-activatable"><Link to="/magic-enh/ghost_touch_a">Ghost touch<IonRippleEffect /></Link></td>
<td>+3 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-3" id="rule-magic_armor-ref-2-3" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>-</td>
<td>80-84</td>
<td>34-35</td>
<td className="ion-activatable"><Link to="/magic-enh/invulnerability">Invulnerability<IonRippleEffect /></Link></td>
<td>+3 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-4" id="rule-magic_armor-ref-2-4" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>-</td>
<td>85-89</td>
<td>36-40</td>
<td className="ion-activatable"><Link to="/magic-enh/fortification_moderate">Fortification, moderate<IonRippleEffect /></Link></td>
<td>+3 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-5" id="rule-magic_armor-ref-2-5" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>-</td>
<td>90-94</td>
<td>41-42</td>
<td className="ion-activatable"><Link to="/magic-enh/spell_resistance_15">Spell resistance (15)<IonRippleEffect /></Link></td>
<td>+3 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-6" id="rule-magic_armor-ref-2-6" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>-</td>
<td>95-99</td>
<td>43</td>
<td className="ion-activatable"><Link to="/magic-enh/wild">Wild<IonRippleEffect /></Link></td>
<td>+3 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-7" id="rule-magic_armor-ref-2-7" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>44-48</td>
<td className="ion-activatable"><Link to="/magic-enh/slick_greater">Slick, greater<IonRippleEffect /></Link></td>
<td>+33,750 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>49-58</td>
<td className="ion-activatable"><Link to="/magic-enh/shadow_greater">Shadow, greater<IonRippleEffect /></Link></td>
<td>+33,750 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>59-83</td>
<td className="ion-activatable"><Link to="/magic-enh/energy_resistance_improved">Energy resistance, improved<IonRippleEffect /></Link></td>
<td>+42,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>84-88</td>
<td className="ion-activatable"><Link to="/magic-enh/spell_resistance_17">Spell resistance (17)<IonRippleEffect /></Link></td>
<td>+4 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-8" id="rule-magic_armor-ref-2-8" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>89</td>
<td className="ion-activatable"><Link to="/magic-enh/etherealness">Etherealness<IonRippleEffect /></Link></td>
<td>+49,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>90</td>
<td className="ion-activatable"><Link to="/magic-enh/undead_controlling">Undead controlling<IonRippleEffect /></Link></td>
<td>+49,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>91-92</td>
<td className="ion-activatable"><Link to="/magic-enh/fortification_heavy">Fortification, heavy<IonRippleEffect /></Link></td>
<td>+5 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-9" id="rule-magic_armor-ref-2-9" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>93-94</td>
<td className="ion-activatable"><Link to="/magic-enh/spell_resistance_19">Spell resistance (19)<IonRippleEffect /></Link></td>
<td>+5 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-10" id="rule-magic_armor-ref-2-10" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>95-99</td>
<td className="ion-activatable"><Link to="/magic-enh/energy_resistance_greater">Energy resistance, greater<IonRippleEffect /></Link></td>
<td>+66,000 gp</td>
</tr>
<tr>
<td>100</td>
<td>100</td>
<td>100</td>
<td>Roll twice again<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-3-1" id="rule-magic_armor-ref-3-1" data-hash-target to="rule-magic_armor-3">3</InnerLink></sup></td>
<td>-</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-magic_armor-table-15-5-shield-special-abilities">Table 15-5: Shield Special Abilities</h3>
<ScrollContainer id="rule-magic_armor--table-4"><table>
<thead>
<tr>
<th>Minor</th>
<th>Medium</th>
<th>Major</th>
<th>Special Ability</th>
<th>Base Price Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>01-20</td>
<td>01-10</td>
<td>01-05</td>
<td className="ion-activatable"><Link to="/magic-enh/arrow_catching">Arrow catching<IonRippleEffect /></Link></td>
<td>+1 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-11" id="rule-magic_armor-ref-2-11" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>21-40</td>
<td>11-20</td>
<td>06-08</td>
<td className="ion-activatable"><Link to="/magic-enh/bashing">Bashing<IonRippleEffect /></Link></td>
<td>+1 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-12" id="rule-magic_armor-ref-2-12" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>41-50</td>
<td>21-25</td>
<td>09-10</td>
<td className="ion-activatable"><Link to="/magic-enh/blinding">Blinding<IonRippleEffect /></Link></td>
<td>+1 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-13" id="rule-magic_armor-ref-2-13" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>51-75</td>
<td>26-40</td>
<td>11-15</td>
<td className="ion-activatable"><Link to="/magic-enh/fortification_light">Fortification, light<IonRippleEffect /></Link></td>
<td>+1 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-14" id="rule-magic_armor-ref-2-14" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>76-92</td>
<td>41-50</td>
<td>16-20</td>
<td className="ion-activatable"><Link to="/magic-enh/arrow_deflection">Arrow deflection<IonRippleEffect /></Link></td>
<td>+2 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-15" id="rule-magic_armor-ref-2-15" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>93-97</td>
<td>51-57</td>
<td>21-25</td>
<td className="ion-activatable"><Link to="/magic-enh/animated">Animated<IonRippleEffect /></Link></td>
<td>+2 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-16" id="rule-magic_armor-ref-2-16" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>98-99</td>
<td>58-59</td>
<td>-</td>
<td className="ion-activatable"><Link to="/magic-enh/spell_resistance_13">Spell resistance (13)<IonRippleEffect /></Link></td>
<td>+2 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-17" id="rule-magic_armor-ref-2-17" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>-</td>
<td>60-79</td>
<td>26-41</td>
<td className="ion-activatable"><Link to="/magic-enh/energy_resistance">Energy resistance<IonRippleEffect /></Link></td>
<td>+18,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>80-85</td>
<td>42-46</td>
<td className="ion-activatable"><Link to="/magic-enh/ghost_touch_a">Ghost touch<IonRippleEffect /></Link></td>
<td>+3 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-18" id="rule-magic_armor-ref-2-18" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>-</td>
<td>86-95</td>
<td>47-56</td>
<td className="ion-activatable"><Link to="/magic-enh/fortification_moderate">Fortification, moderate<IonRippleEffect /></Link></td>
<td>+3 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-19" id="rule-magic_armor-ref-2-19" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>-</td>
<td>96-98</td>
<td>57-58</td>
<td className="ion-activatable"><Link to="/magic-enh/spell_resistance_15">Spell resistance (15)<IonRippleEffect /></Link></td>
<td>+3 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-20" id="rule-magic_armor-ref-2-20" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>-</td>
<td>99</td>
<td>59</td>
<td className="ion-activatable"><Link to="/magic-enh/wild">Wild<IonRippleEffect /></Link></td>
<td>+3 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-21" id="rule-magic_armor-ref-2-21" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>60-84</td>
<td className="ion-activatable"><Link to="/magic-enh/energy_resistance_improved">Energy resistance, improved<IonRippleEffect /></Link></td>
<td>+42,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>85-86</td>
<td className="ion-activatable"><Link to="/magic-enh/spell_resistance_17">Spell resistance (17)<IonRippleEffect /></Link></td>
<td>+4 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-22" id="rule-magic_armor-ref-2-22" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>87</td>
<td className="ion-activatable"><Link to="/magic-enh/undead_controlling">Undead controlling<IonRippleEffect /></Link></td>
<td>+49,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>88-91</td>
<td className="ion-activatable"><Link to="/magic-enh/fortification_heavy">Fortification, heavy<IonRippleEffect /></Link></td>
<td>+5 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-23" id="rule-magic_armor-ref-2-23" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>92-93</td>
<td className="ion-activatable"><Link to="/magic-enh/reflecting">Reflecting<IonRippleEffect /></Link></td>
<td>+5 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-24" id="rule-magic_armor-ref-2-24" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>94</td>
<td className="ion-activatable"><Link to="/magic-enh/spell_resistance_19">Spell resistance (19)<IonRippleEffect /></Link></td>
<td>+5 bonus<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-2-25" id="rule-magic_armor-ref-2-25" data-hash-target to="rule-magic_armor-2">2</InnerLink></sup></td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>95-99</td>
<td className="ion-activatable"><Link to="/magic-enh/energy_resistance_greater">Energy resistance, greater<IonRippleEffect /></Link></td>
<td>+66,000 gp</td>
</tr>
<tr>
<td>100</td>
<td>100</td>
<td>100</td>
<td>Roll twice again<sup><InnerLink showBacklink="backlink-rule-magic_armor-ref-3-2" id="rule-magic_armor-ref-3-2" data-hash-target to="rule-magic_armor-3">3</InnerLink></sup></td>
<td>-</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-magic_armor-label">Footnotes</h3>
<ol>
<li id="rule-magic_armor-1">
<p>Armor and shields can't have enhancement bonuses higher than +5. Use these lines to determine price when special abilities are added in. <InnerLink id="backlink-rule-magic_armor-ref-1-1" data-hash-target to="rule-magic_armor-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-1-2" data-hash-target to="rule-magic_armor-ref-1-2" aria-label="Back to reference 1-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-1-3" data-hash-target to="rule-magic_armor-ref-1-3" aria-label="Back to reference 1-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-1-4" data-hash-target to="rule-magic_armor-ref-1-4" aria-label="Back to reference 1-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-1-5" data-hash-target to="rule-magic_armor-ref-1-5" aria-label="Back to reference 1-5">↩<sup>5</sup></InnerLink></p>
</li>
<li id="rule-magic_armor-2">
<p>Add to enhancement bonus on Table 15-3 to determine total market price. <InnerLink id="backlink-rule-magic_armor-ref-2-1" data-hash-target to="rule-magic_armor-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-2" data-hash-target to="rule-magic_armor-ref-2-2" aria-label="Back to reference 2-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-3" data-hash-target to="rule-magic_armor-ref-2-3" aria-label="Back to reference 2-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-4" data-hash-target to="rule-magic_armor-ref-2-4" aria-label="Back to reference 2-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-5" data-hash-target to="rule-magic_armor-ref-2-5" aria-label="Back to reference 2-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-6" data-hash-target to="rule-magic_armor-ref-2-6" aria-label="Back to reference 2-6">↩<sup>6</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-7" data-hash-target to="rule-magic_armor-ref-2-7" aria-label="Back to reference 2-7">↩<sup>7</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-8" data-hash-target to="rule-magic_armor-ref-2-8" aria-label="Back to reference 2-8">↩<sup>8</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-9" data-hash-target to="rule-magic_armor-ref-2-9" aria-label="Back to reference 2-9">↩<sup>9</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-10" data-hash-target to="rule-magic_armor-ref-2-10" aria-label="Back to reference 2-10">↩<sup>10</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-11" data-hash-target to="rule-magic_armor-ref-2-11" aria-label="Back to reference 2-11">↩<sup>11</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-12" data-hash-target to="rule-magic_armor-ref-2-12" aria-label="Back to reference 2-12">↩<sup>12</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-13" data-hash-target to="rule-magic_armor-ref-2-13" aria-label="Back to reference 2-13">↩<sup>13</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-14" data-hash-target to="rule-magic_armor-ref-2-14" aria-label="Back to reference 2-14">↩<sup>14</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-15" data-hash-target to="rule-magic_armor-ref-2-15" aria-label="Back to reference 2-15">↩<sup>15</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-16" data-hash-target to="rule-magic_armor-ref-2-16" aria-label="Back to reference 2-16">↩<sup>16</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-17" data-hash-target to="rule-magic_armor-ref-2-17" aria-label="Back to reference 2-17">↩<sup>17</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-18" data-hash-target to="rule-magic_armor-ref-2-18" aria-label="Back to reference 2-18">↩<sup>18</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-19" data-hash-target to="rule-magic_armor-ref-2-19" aria-label="Back to reference 2-19">↩<sup>19</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-20" data-hash-target to="rule-magic_armor-ref-2-20" aria-label="Back to reference 2-20">↩<sup>20</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-21" data-hash-target to="rule-magic_armor-ref-2-21" aria-label="Back to reference 2-21">↩<sup>21</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-22" data-hash-target to="rule-magic_armor-ref-2-22" aria-label="Back to reference 2-22">↩<sup>22</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-23" data-hash-target to="rule-magic_armor-ref-2-23" aria-label="Back to reference 2-23">↩<sup>23</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-24" data-hash-target to="rule-magic_armor-ref-2-24" aria-label="Back to reference 2-24">↩<sup>24</sup></InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-2-25" data-hash-target to="rule-magic_armor-ref-2-25" aria-label="Back to reference 2-25">↩<sup>25</sup></InnerLink></p>
</li>
<li id="rule-magic_armor-3">
<p>If you roll a special ability twice, only one counts. If you roll two versions of the same special ability, use the better. <InnerLink id="backlink-rule-magic_armor-ref-3-1" data-hash-target to="rule-magic_armor-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink> <InnerLink id="backlink-rule-magic_armor-ref-3-2" data-hash-target to="rule-magic_armor-ref-3-2" aria-label="Back to reference 3-2">↩<sup>2</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
const _magic_weapons = {title: "Magic Weapons", parent_topics: ["basics","magic_items","magic_item_descriptions"], siblings: ["extradimensional_spaces","magic_armor","magic_weapons","potions","rings","rods","scrolls","staves","wands","wondrous_items"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 468</Link></p>
<p>A magic weapon is enhanced to strike more truly and deliver more damage. Magic weapons have enhancement bonuses ranging from +1 to +5. They apply these bonuses to both attack and damage rolls when used in combat. All magic weapons are also masterwork weapons, but their masterwork bonuses on attack rolls do not stack with their enhancement bonuses on attack rolls.</p>
<p>Weapons come in two basic categories: <strong className="hl">melee</strong> and <strong className="hl">ranged</strong>. Some of the weapons listed as melee weapons can also be used as ranged weapons. In this case, their enhancement bonuses apply to both melee and ranged attacks.</p>
<p>Some magic weapons have special abilities. Special abilities count as additional bonuses for determining the market value of the item, but do not modify attack or damage bonuses except where specifically noted). A single weapon cannot have a modified bonus (enhancement bonus plus special ability bonus equivalents, including from character abilities and spells) higher than +10. A weapon with a special ability must also have at least a +1 enhancement bonus. Weapons cannot possess the same special ability more than once.</p>
<p>Weapons or ammunition can be made of an unusual material. Roll d%: 01-95 indicates that the item is of a standard sort, and 96-100 indicates that it is made of a <Link to="/main/equipment_materials">special material</Link>.</p>
<p><strong className="hl">Caster Level for Weapons:</strong> The caster level of a weapon with a special ability is given in the item description. For an item with only an enhancement bonus and no other abilities, the caster level is three times the enhancement bonus. If an item has both an enhancement bonus and a special ability, the higher of the two caster level requirements must be met.</p>
<p><strong className="hl">Additional Damage Dice:</strong> Some magic weapons deal additional dice of damage. Unlike other modifiers to damage, additional dice of damage are not multiplied when the attacker scores a critical hit.</p>
<p><strong className="hl">Ranged Weapons and Ammunition:</strong> The enhancement bonus from a ranged weapon does not stack with the enhancement bonus from ammunition. Only the higher of the two enhancement bonuses applies.</p>
<p>Ammunition fired from a projectile weapon with an enhancement bonus of +1 or higher is treated as a magic weapon for the purpose of overcoming damage reduction. Similarly, ammunition fired from a projectile weapon with an alignment gains the alignment of that projectile weapon.</p>
<p><strong className="hl">Magic Ammunition and Breakage:</strong> When a magic arrow, crossbow bolt, or sling bullet misses its target, there is a 50% chance it breaks or is otherwise rendered useless. A magic arrow, bolt, or bullet that successfully hits a target is automatically destroyed after it delivers its damage.</p>
<p><strong className="hl">Light Generation:</strong> Fully 30% of magic weapons shed light equivalent to a light spell. These glowing weapons are quite obviously magical. Such a weapon can't be concealed when drawn, nor can its light be shut off. Some of the specific weapons detailed below always or never glow, as defined in their descriptions.</p>
<p><strong className="hl">Hardness and Hit Points:</strong> Each +1 of a magic weapon's enhancement bonus adds +2 to its hardness and +10 to its hit points. See also <Link to="/rule/breaking_things">Table 7-12</Link>.</p>
<p><strong className="hl">Activation:</strong> Usually a character benefits from a magic weapon in the same way a character benefits from a mundane weapon: by wielding (attacking with) it. If a weapon has a special ability that the user needs to activate, then the user usually needs to utter a command word (a standard action). A character can activate the special abilities of 50 pieces of ammunition at the same time, assuming each piece has identical abilities.</p>
<p><strong className="hl">Magic Weapons and Critical Hits:</strong> Some weapon special abilities and some specific weapons have an extra effect on a critical hit. This special effect also functions against creatures not normally subject to critical hits. On a successful critical roll, apply the special effect, but do not multiply the weapon's regular damage.</p>
<p><strong className="hl">Weapons for Unusually Sized Creatures:</strong> The cost of weapons for creatures who are neither Small nor Medium varies. The cost of the masterwork quality and any magical enhancement remains the same.</p>
<p><strong className="hl">Special Qualities:</strong> Roll d%. A 01-30 result indicates that the item sheds light, 31-45 indicates that something (a design, inscription, or the like) provides a clue to the weapon's function, and 46-100 indicates no special qualities.</p>
<h3 id="rule-magic_weapons-table-15-8-weapons">Table 15-8: Weapons</h3>
<ScrollContainer id="rule-magic_weapons--table-0"><table>
<thead>
<tr>
<th>Minor</th>
<th>Medium</th>
<th>Major</th>
<th>Weapon Bonus</th>
<th>Base Price<sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-1-1" id="rule-magic_weapons-ref-1-1" data-hash-target to="rule-magic_weapons-1">1</InnerLink></sup></th>
</tr>
</thead>
<tbody><tr>
<td>01-70</td>
<td>01-10</td>
<td>-</td>
<td>+1</td>
<td>2,000 gp</td>
</tr>
<tr>
<td>71-85</td>
<td>11-29</td>
<td>-</td>
<td>+2</td>
<td>8,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>30-58</td>
<td>01-20</td>
<td>+3</td>
<td>18,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>59-62</td>
<td>21-38</td>
<td>+4</td>
<td>32,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>39-49</td>
<td>+5</td>
<td>50,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>-</td>
<td>+6<sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-2-1" id="rule-magic_weapons-ref-2-1" data-hash-target to="rule-magic_weapons-2">2</InnerLink></sup></td>
<td>72,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>-</td>
<td>+7<sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-2-2" id="rule-magic_weapons-ref-2-2" data-hash-target to="rule-magic_weapons-2">2</InnerLink></sup></td>
<td>98,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>-</td>
<td>+8<sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-2-3" id="rule-magic_weapons-ref-2-3" data-hash-target to="rule-magic_weapons-2">2</InnerLink></sup></td>
<td>128,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>-</td>
<td>+9<sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-2-4" id="rule-magic_weapons-ref-2-4" data-hash-target to="rule-magic_weapons-2">2</InnerLink></sup></td>
<td>162,000 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>-</td>
<td>+10<sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-2-5" id="rule-magic_weapons-ref-2-5" data-hash-target to="rule-magic_weapons-2">2</InnerLink></sup></td>
<td>200,000 gp</td>
</tr>
<tr>
<td>86-90</td>
<td>63-68</td>
<td>50-63</td>
<td>Specific weapon (below)</td>
<td>-</td>
</tr>
<tr>
<td>92-100</td>
<td>69-100</td>
<td>64-100</td>
<td>Special ability (below) and roll again</td>
<td>-</td>
</tr>
</tbody></table></ScrollContainer>
<p><em>Also see: <Link to="/rule/random_weapons">Random Weapons (Gamemastery)</Link></em></p>
<h3 id="rule-magic_weapons-table-15-9-melee-weapon-special-abilities">Table 15-9: Melee Weapon Special Abilities</h3>
<ScrollContainer id="rule-magic_weapons--table-1"><table>
<thead>
<tr>
<th>Minor</th>
<th>Medium</th>
<th>Major</th>
<th>Special Ability</th>
<th>*</th>
<th>Base Price Modifier<sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-1-2" id="rule-magic_weapons-ref-1-2" data-hash-target to="rule-magic_weapons-1">1</InnerLink></sup></th>
</tr>
</thead>
<tbody><tr>
<td>01-10</td>
<td>01-06</td>
<td>01-03</td>
<td className="ion-activatable"><Link to="/magic-enh/bane">Bane<IonRippleEffect /></Link></td>
<td></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>11-17</td>
<td>07-12</td>
<td>-</td>
<td className="ion-activatable"><Link to="/magic-enh/defending">Defending<IonRippleEffect /></Link></td>
<td></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>18-27</td>
<td>13-19</td>
<td>04-06</td>
<td className="ion-activatable"><Link to="/magic-enh/flaming">Flaming<IonRippleEffect /></Link></td>
<td></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>28-37</td>
<td>20-26</td>
<td>07-09</td>
<td className="ion-activatable"><Link to="/magic-enh/frost">Frost<IonRippleEffect /></Link></td>
<td></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>38-47</td>
<td>27-33</td>
<td>10-12</td>
<td className="ion-activatable"><Link to="/magic-enh/shock">Shock<IonRippleEffect /></Link></td>
<td></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>48-56</td>
<td>34-38</td>
<td>13-15</td>
<td className="ion-activatable"><Link to="/magic-enh/ghost_touch_weapon">Ghost touch (weapon)<IonRippleEffect /></Link></td>
<td></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>57-67</td>
<td>39-44</td>
<td>-</td>
<td className="ion-activatable"><Link to="/magic-enh/keen">Keen<IonRippleEffect /></Link></td>
<td><sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-4-1" id="rule-magic_weapons-ref-4-1" data-hash-target to="rule-magic_weapons-4">3</InnerLink></sup></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>68-71</td>
<td>45-48</td>
<td>16-19</td>
<td className="ion-activatable"><Link to="/magic-enh/ki_focus">Ki focus<IonRippleEffect /></Link></td>
<td></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>72-75</td>
<td>49-50</td>
<td>-</td>
<td className="ion-activatable"><Link to="/magic-enh/merciful">Merciful<IonRippleEffect /></Link></td>
<td></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>76-82</td>
<td>51-54</td>
<td>20-21</td>
<td className="ion-activatable"><Link to="/magic-enh/mighty_cleaving">Mighty cleaving<IonRippleEffect /></Link></td>
<td></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>83-87</td>
<td>55-59</td>
<td>22-24</td>
<td className="ion-activatable"><Link to="/magic-enh/spell_storing_weapon">Spell storing (weapon)<IonRippleEffect /></Link></td>
<td></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>88-91</td>
<td>60-63</td>
<td>25-28</td>
<td className="ion-activatable"><Link to="/magic-enh/throwing">Throwing<IonRippleEffect /></Link></td>
<td></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>92-95</td>
<td>64-65</td>
<td>29-32</td>
<td className="ion-activatable"><Link to="/magic-enh/thundering">Thundering<IonRippleEffect /></Link></td>
<td></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>96-99</td>
<td>66-69</td>
<td>33-36</td>
<td className="ion-activatable"><Link to="/magic-enh/vicious">Vicious<IonRippleEffect /></Link></td>
<td></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>-</td>
<td>70-72</td>
<td>37-41</td>
<td className="ion-activatable"><Link to="/magic-enh/anarchic">Anarchic<IonRippleEffect /></Link></td>
<td></td>
<td>+2 bonus</td>
</tr>
<tr>
<td>-</td>
<td>73-75</td>
<td>42-46</td>
<td className="ion-activatable"><Link to="/magic-enh/axiomatic">Axiomatic<IonRippleEffect /></Link></td>
<td></td>
<td>+2 bonus</td>
</tr>
<tr>
<td>-</td>
<td>76-78</td>
<td>47-49</td>
<td className="ion-activatable"><Link to="/magic-enh/disruption">Disruption<IonRippleEffect /></Link></td>
<td><sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-5-1" id="rule-magic_weapons-ref-5-1" data-hash-target to="rule-magic_weapons-5">4</InnerLink></sup></td>
<td>+2 bonus</td>
</tr>
<tr>
<td>-</td>
<td>79-81</td>
<td>50-54</td>
<td className="ion-activatable"><Link to="/magic-enh/flaming_burst">Flaming burst<IonRippleEffect /></Link></td>
<td></td>
<td>+2 bonus</td>
</tr>
<tr>
<td>-</td>
<td>82-84</td>
<td>55-59</td>
<td className="ion-activatable"><Link to="/magic-enh/icy_burst">Icy burst<IonRippleEffect /></Link></td>
<td></td>
<td>+2 bonus</td>
</tr>
<tr>
<td>-</td>
<td>85-87</td>
<td>60-64</td>
<td className="ion-activatable"><Link to="/magic-enh/holy">Holy<IonRippleEffect /></Link></td>
<td></td>
<td>+2 bonus</td>
</tr>
<tr>
<td>-</td>
<td>88-90</td>
<td>65-69</td>
<td className="ion-activatable"><Link to="/magic-enh/shocking_burst">Shocking burst<IonRippleEffect /></Link></td>
<td></td>
<td>+2 bonus</td>
</tr>
<tr>
<td>-</td>
<td>91-93</td>
<td>70-74</td>
<td className="ion-activatable"><Link to="/magic-enh/unholy">Unholy<IonRippleEffect /></Link></td>
<td></td>
<td>+2 bonus</td>
</tr>
<tr>
<td>-</td>
<td>94-95</td>
<td>75-78</td>
<td className="ion-activatable"><Link to="/magic-enh/wounding">Wounding<IonRippleEffect /></Link></td>
<td></td>
<td>+2 bonus</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>79-83</td>
<td className="ion-activatable"><Link to="/magic-enh/speed">Speed<IonRippleEffect /></Link></td>
<td></td>
<td>+3 bonus</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>84-86</td>
<td className="ion-activatable"><Link to="/magic-enh/brilliant_energy">Brilliant energy<IonRippleEffect /></Link></td>
<td></td>
<td>+4 bonus</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>87-88</td>
<td className="ion-activatable"><Link to="/magic-enh/dancing">Dancing<IonRippleEffect /></Link></td>
<td></td>
<td>+4 bonus</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>89-90</td>
<td className="ion-activatable"><Link to="/magic-enh/vorpal">Vorpal<IonRippleEffect /></Link></td>
<td><sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-4-2" id="rule-magic_weapons-ref-4-2" data-hash-target to="rule-magic_weapons-4">3</InnerLink></sup></td>
<td>+5 bonus</td>
</tr>
<tr>
<td>100</td>
<td>96-100</td>
<td>91-100</td>
<td>Roll again twice</td>
<td><sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-6-1" id="rule-magic_weapons-ref-6-1" data-hash-target to="rule-magic_weapons-6">5</InnerLink></sup></td>
<td>-</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-magic_weapons-table-15-10-ranged-weapon-special-abilities">Table 15-10: Ranged Weapon Special Abilities</h3>
<ScrollContainer id="rule-magic_weapons--table-2"><table>
<thead>
<tr>
<th>Minor</th>
<th>Medium</th>
<th>Major</th>
<th>Special Ability</th>
<th>*</th>
<th>Base Price Modifier<sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-3-1" id="rule-magic_weapons-ref-3-1" data-hash-target to="rule-magic_weapons-3">6</InnerLink></sup></th>
</tr>
</thead>
<tbody><tr>
<td>01-12</td>
<td>01-08</td>
<td>01-04</td>
<td className="ion-activatable"><Link to="/magic-enh/bane">Bane<IonRippleEffect /></Link></td>
<td><sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-7-1" id="rule-magic_weapons-ref-7-1" data-hash-target to="rule-magic_weapons-7">7</InnerLink></sup></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>13-25</td>
<td>09-16</td>
<td>05-08</td>
<td className="ion-activatable"><Link to="/magic-enh/distance">Distance<IonRippleEffect /></Link></td>
<td></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>26-40</td>
<td>17-28</td>
<td>09-12</td>
<td className="ion-activatable"><Link to="/magic-enh/flaming">Flaming<IonRippleEffect /></Link></td>
<td><sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-7-2" id="rule-magic_weapons-ref-7-2" data-hash-target to="rule-magic_weapons-7">7</InnerLink></sup></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>41-55</td>
<td>29-40</td>
<td>13-16</td>
<td className="ion-activatable"><Link to="/magic-enh/frost">Frost<IonRippleEffect /></Link></td>
<td><sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-7-3" id="rule-magic_weapons-ref-7-3" data-hash-target to="rule-magic_weapons-7">7</InnerLink></sup></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>56-60</td>
<td>41-42</td>
<td>-</td>
<td className="ion-activatable"><Link to="/magic-enh/merciful">Merciful<IonRippleEffect /></Link></td>
<td><sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-7-4" id="rule-magic_weapons-ref-7-4" data-hash-target to="rule-magic_weapons-7">7</InnerLink></sup></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>61-68</td>
<td>43-47</td>
<td>17-21</td>
<td className="ion-activatable"><Link to="/magic-enh/returning">Returning<IonRippleEffect /></Link></td>
<td></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>69-83</td>
<td>48-59</td>
<td>22-25</td>
<td className="ion-activatable"><Link to="/magic-enh/shock">Shock<IonRippleEffect /></Link></td>
<td><sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-7-5" id="rule-magic_weapons-ref-7-5" data-hash-target to="rule-magic_weapons-7">7</InnerLink></sup></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>84-93</td>
<td>60-64</td>
<td>26-27</td>
<td className="ion-activatable"><Link to="/magic-enh/seeking">Seeking<IonRippleEffect /></Link></td>
<td></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>94-99</td>
<td>65-68</td>
<td>28-29</td>
<td className="ion-activatable"><Link to="/magic-enh/thundering">Thundering<IonRippleEffect /></Link></td>
<td><sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-7-6" id="rule-magic_weapons-ref-7-6" data-hash-target to="rule-magic_weapons-7">7</InnerLink></sup></td>
<td>+1 bonus</td>
</tr>
<tr>
<td>-</td>
<td>69-71</td>
<td>30-34</td>
<td className="ion-activatable"><Link to="/magic-enh/anarchic">Anarchic<IonRippleEffect /></Link></td>
<td><sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-7-7" id="rule-magic_weapons-ref-7-7" data-hash-target to="rule-magic_weapons-7">7</InnerLink></sup></td>
<td>+2 bonus</td>
</tr>
<tr>
<td>-</td>
<td>72-74</td>
<td>35-39</td>
<td className="ion-activatable"><Link to="/magic-enh/axiomatic">Axiomatic<IonRippleEffect /></Link></td>
<td><sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-7-8" id="rule-magic_weapons-ref-7-8" data-hash-target to="rule-magic_weapons-7">7</InnerLink></sup></td>
<td>+2 bonus</td>
</tr>
<tr>
<td>-</td>
<td>75-79</td>
<td>40-49</td>
<td className="ion-activatable"><Link to="/magic-enh/flaming_burst">Flaming burst<IonRippleEffect /></Link></td>
<td><sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-7-9" id="rule-magic_weapons-ref-7-9" data-hash-target to="rule-magic_weapons-7">7</InnerLink></sup></td>
<td>+2 bonus</td>
</tr>
<tr>
<td>-</td>
<td>80-82</td>
<td>50-54</td>
<td className="ion-activatable"><Link to="/magic-enh/holy">Holy<IonRippleEffect /></Link></td>
<td><sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-7-10" id="rule-magic_weapons-ref-7-10" data-hash-target to="rule-magic_weapons-7">7</InnerLink></sup></td>
<td>+2 bonus</td>
</tr>
<tr>
<td>-</td>
<td>83-87</td>
<td>55-64</td>
<td className="ion-activatable"><Link to="/magic-enh/icy_burst">Icy burst<IonRippleEffect /></Link></td>
<td><sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-7-11" id="rule-magic_weapons-ref-7-11" data-hash-target to="rule-magic_weapons-7">7</InnerLink></sup></td>
<td>+2 bonus</td>
</tr>
<tr>
<td>-</td>
<td>88-92</td>
<td>65-74</td>
<td className="ion-activatable"><Link to="/magic-enh/shocking_burst">Shocking burst<IonRippleEffect /></Link></td>
<td><sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-7-12" id="rule-magic_weapons-ref-7-12" data-hash-target to="rule-magic_weapons-7">7</InnerLink></sup></td>
<td>+2 bonus</td>
</tr>
<tr>
<td>-</td>
<td>93-95</td>
<td>75-79</td>
<td className="ion-activatable"><Link to="/magic-enh/unholy">Unholy<IonRippleEffect /></Link></td>
<td><sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-7-13" id="rule-magic_weapons-ref-7-13" data-hash-target to="rule-magic_weapons-7">7</InnerLink></sup></td>
<td>+2 bonus</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>80-84</td>
<td className="ion-activatable"><Link to="/magic-enh/speed">Speed<IonRippleEffect /></Link></td>
<td></td>
<td>+3 bonus</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>85-90</td>
<td className="ion-activatable"><Link to="/magic-enh/brilliant_energy">Brilliant energy<IonRippleEffect /></Link></td>
<td></td>
<td>+4 bonus</td>
</tr>
<tr>
<td>100</td>
<td>96-100</td>
<td>91-100</td>
<td>Roll again twice</td>
<td><sup><InnerLink showBacklink="backlink-rule-magic_weapons-ref-6-2" id="rule-magic_weapons-ref-6-2" data-hash-target to="rule-magic_weapons-6">5</InnerLink></sup></td>
<td>-</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-magic_weapons-table-1511-specific-weapons">Table 15–11: Specific Weapons</h3>
<ScrollContainer id="rule-magic_weapons--table-3"><table>
<thead>
<tr>
<th>Minor</th>
<th>Medium</th>
<th>Major</th>
<th>Specific Weapon</th>
<th>Market Price</th>
</tr>
</thead>
<tbody><tr>
<td>01–15</td>
<td>-</td>
<td>-</td>
<td className="ion-activatable"><Link to="/magic-weapon/sleep_arrow">Sleep arrow<IonRippleEffect /></Link></td>
<td>132 gp</td>
</tr>
<tr>
<td>16–25</td>
<td>-</td>
<td>-</td>
<td className="ion-activatable"><Link to="/magic-weapon/screaming_bolt">Screaming bolt<IonRippleEffect /></Link></td>
<td>267 gp</td>
</tr>
<tr>
<td>26–45</td>
<td>-</td>
<td>-</td>
<td className="ion-activatable"><Link to="/eq-weapon/masterwork_silver_dagger">Masterwork silver dagger<IonRippleEffect /></Link></td>
<td>322 gp</td>
</tr>
<tr>
<td>46–65</td>
<td>-</td>
<td>-</td>
<td className="ion-activatable"><Link to="/eq-weapon/cold_iron_masterwork_longsword">Cold iron masterwork longsword<IonRippleEffect /></Link></td>
<td>330 gp</td>
</tr>
<tr>
<td>66–75</td>
<td>01–09</td>
<td>-</td>
<td className="ion-activatable"><Link to="/magic-weapon/javelin_of_lightning">Javelin of lightning<IonRippleEffect /></Link></td>
<td>1,500 gp</td>
</tr>
<tr>
<td>76–80</td>
<td>10–15</td>
<td>-</td>
<td className="ion-activatable"><Link to="/magic-weapon/slaying_arrow">Slaying arrow<IonRippleEffect /></Link></td>
<td>2,282 gp</td>
</tr>
<tr>
<td>81–90</td>
<td>16–24</td>
<td>-</td>
<td className="ion-activatable"><Link to="/eq-weapon/adamantine_dagger">Adamantine dagger<IonRippleEffect /></Link></td>
<td>3,002 gp</td>
</tr>
<tr>
<td>91–100</td>
<td>25–33</td>
<td>-</td>
<td className="ion-activatable"><Link to="/eq-weapon/adamantine_battleaxe">Adamantine battleaxe<IonRippleEffect /></Link></td>
<td>3,010 gp</td>
</tr>
<tr>
<td>-</td>
<td>34–37</td>
<td>-</td>
<td className="ion-activatable"><Link to="/magic-weapon/slaying_arrow_greater">Slaying arrow (greater)<IonRippleEffect /></Link></td>
<td>4,057 gp</td>
</tr>
<tr>
<td>-</td>
<td>38–40</td>
<td>-</td>
<td className="ion-activatable"><Link to="/magic-weapon/shatterspike">Shatterspike<IonRippleEffect /></Link></td>
<td>4,315 gp</td>
</tr>
<tr>
<td>-</td>
<td>41–46</td>
<td>-</td>
<td className="ion-activatable"><Link to="/magic-weapon/dagger_of_venom">Dagger of venom<IonRippleEffect /></Link></td>
<td>8,302 gp</td>
</tr>
<tr>
<td>-</td>
<td>47–51</td>
<td>-</td>
<td className="ion-activatable"><Link to="/magic-weapon/trident_of_warning">Trident of warning<IonRippleEffect /></Link></td>
<td>10,115 gp</td>
</tr>
<tr>
<td>-</td>
<td>52–57</td>
<td>01–04</td>
<td className="ion-activatable"><Link to="/magic-weapon/assassins_dagger">Assassin's dagger<IonRippleEffect /></Link></td>
<td>10,302 gp</td>
</tr>
<tr>
<td>-</td>
<td>58–62</td>
<td>05–07</td>
<td className="ion-activatable"><Link to="/magic-weapon/shifters_sorrow">Shifter's sorrow<IonRippleEffect /></Link></td>
<td>12,780 gp</td>
</tr>
<tr>
<td>-</td>
<td>63–66</td>
<td>08–09</td>
<td className="ion-activatable"><Link to="/magic-weapon/trident_of_fish_command">Trident of fish command<IonRippleEffect /></Link></td>
<td>18,650 gp</td>
</tr>
<tr>
<td>-</td>
<td>67–74</td>
<td>10–13</td>
<td className="ion-activatable"><Link to="/magic-weapon/flame_tongue">Flame tongue<IonRippleEffect /></Link></td>
<td>20,715 gp</td>
</tr>
<tr>
<td>-</td>
<td>75–79</td>
<td>14–17</td>
<td className="ion-activatable"><Link to="/magic-weapon/luck_blade_0_wishes">Luck blade (0 wishes)<IonRippleEffect /></Link></td>
<td>22,060 gp</td>
</tr>
<tr>
<td>-</td>
<td>80–86</td>
<td>18–24</td>
<td className="ion-activatable"><Link to="/magic-weapon/sword_of_subtlety">Sword of subtlety<IonRippleEffect /></Link></td>
<td>22,310 gp</td>
</tr>
<tr>
<td>-</td>
<td>87–91</td>
<td>25–31</td>
<td className="ion-activatable"><Link to="/magic-weapon/sword_of_the_planes">Sword of the planes<IonRippleEffect /></Link></td>
<td>22,315 gp</td>
</tr>
<tr>
<td>-</td>
<td>92–95</td>
<td>32–37</td>
<td className="ion-activatable"><Link to="/magic-weapon/nine_lives_stealer">Nine lives stealer<IonRippleEffect /></Link></td>
<td>23,057 gp</td>
</tr>
<tr>
<td>-</td>
<td>96–98</td>
<td>38–42</td>
<td className="ion-activatable"><Link to="/magic-weapon/oathbow">Oathbow<IonRippleEffect /></Link></td>
<td>25,600 gp</td>
</tr>
<tr>
<td>-</td>
<td>99–100</td>
<td>43–46</td>
<td className="ion-activatable"><Link to="/magic-weapon/sword_of_life_stealing">Sword of life stealing<IonRippleEffect /></Link></td>
<td>25,715 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>47–51</td>
<td className="ion-activatable"><Link to="/magic-weapon/mace_of_terror">Mace of terror<IonRippleEffect /></Link></td>
<td>38,552 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>52–57</td>
<td className="ion-activatable"><Link to="/magic-weapon/life_drinker">Life-drinker<IonRippleEffect /></Link></td>
<td>40,320 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>58–62</td>
<td className="ion-activatable"><Link to="/magic-weapon/sylvan_scimitar">Sylvan scimitar<IonRippleEffect /></Link></td>
<td>47,315 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>63–67</td>
<td className="ion-activatable"><Link to="/magic-weapon/rapier_of_puncturing">Rapier of puncturing<IonRippleEffect /></Link></td>
<td>50,320 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>68–73</td>
<td className="ion-activatable"><Link to="/magic-weapon/sun_blade">Sun blade<IonRippleEffect /></Link></td>
<td>50,335 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>74–79</td>
<td className="ion-activatable"><Link to="/magic-weapon/frost_brand">Frost brand<IonRippleEffect /></Link></td>
<td>54,475 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>80–84</td>
<td className="ion-activatable"><Link to="/magic-weapon/dwarven_thrower">Dwarven thrower<IonRippleEffect /></Link></td>
<td>60,312 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>85–91</td>
<td className="ion-activatable"><Link to="/magic-weapon/luck_blade_1_wish">Luck blade (1 wish)<IonRippleEffect /></Link></td>
<td>62,360 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>92–95</td>
<td className="ion-activatable"><Link to="/magic-weapon/mace_of_smiting">Mace of smiting<IonRippleEffect /></Link></td>
<td>75,312 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>96–97</td>
<td className="ion-activatable"><Link to="/magic-weapon/luck_blade_2_wishes">Luck blade (2 wishes)<IonRippleEffect /></Link></td>
<td>102,660 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>98–99</td>
<td className="ion-activatable"><Link to="/magic-weapon/holy_avenger">Holy avenger<IonRippleEffect /></Link></td>
<td>120,630 gp</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>100</td>
<td className="ion-activatable"><Link to="/magic-weapon/luck_blade_3_wishes">Luck blade (3 wishes)<IonRippleEffect /></Link></td>
<td>142,960 gp</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-magic_weapons-label">Footnotes</h3>
<ol>
<li id="rule-magic_weapons-1">
<p>For ammunition, this price is for 50 arrows, bolts, or bullets. <InnerLink id="backlink-rule-magic_weapons-ref-1-1" data-hash-target to="rule-magic_weapons-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink> <InnerLink id="backlink-rule-magic_weapons-ref-1-2" data-hash-target to="rule-magic_weapons-ref-1-2" aria-label="Back to reference 1-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="rule-magic_weapons-2">
<p>A weapon can't have an enhancement bonus higher than +5. Use these lines to determine price when special abilities are added in. <InnerLink id="backlink-rule-magic_weapons-ref-2-1" data-hash-target to="rule-magic_weapons-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink> <InnerLink id="backlink-rule-magic_weapons-ref-2-2" data-hash-target to="rule-magic_weapons-ref-2-2" aria-label="Back to reference 2-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-magic_weapons-ref-2-3" data-hash-target to="rule-magic_weapons-ref-2-3" aria-label="Back to reference 2-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-rule-magic_weapons-ref-2-4" data-hash-target to="rule-magic_weapons-ref-2-4" aria-label="Back to reference 2-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-rule-magic_weapons-ref-2-5" data-hash-target to="rule-magic_weapons-ref-2-5" aria-label="Back to reference 2-5">↩<sup>5</sup></InnerLink></p>
</li>
<li id="rule-magic_weapons-4">
<p>Piercing or slashing weapons only (slashing only for vorpal). Reroll if randomly generated for a bludgeoning weapon. <InnerLink id="backlink-rule-magic_weapons-ref-4-1" data-hash-target to="rule-magic_weapons-ref-4-1" aria-label="Back to reference 4-1">↩</InnerLink> <InnerLink id="backlink-rule-magic_weapons-ref-4-2" data-hash-target to="rule-magic_weapons-ref-4-2" aria-label="Back to reference 4-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="rule-magic_weapons-5">
<p>Bludgeoning weapons only. Reroll if randomly generated for a piercing or slashing weapon. <InnerLink id="backlink-rule-magic_weapons-ref-5-1" data-hash-target to="rule-magic_weapons-ref-5-1" aria-label="Back to reference 5-1">↩</InnerLink></p>
</li>
<li id="rule-magic_weapons-6">
<p>Reroll if you get a duplicate special ability, an ability incompatible with an ability that you've already rolled, or if the extra ability puts you over the +10 limit. A weapon's enhancement bonus and special ability bonus equivalents can't total more than +10. <InnerLink id="backlink-rule-magic_weapons-ref-6-1" data-hash-target to="rule-magic_weapons-ref-6-1" aria-label="Back to reference 6-1">↩</InnerLink> <InnerLink id="backlink-rule-magic_weapons-ref-6-2" data-hash-target to="rule-magic_weapons-ref-6-2" aria-label="Back to reference 6-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="rule-magic_weapons-3">
<p>Add to enhancement bonus on Table 15-8 to determine total market price. <InnerLink id="backlink-rule-magic_weapons-ref-3-1" data-hash-target to="rule-magic_weapons-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
<li id="rule-magic_weapons-7">
<p>Bows, crossbows, and slings crafted with this ability bestow this power upon their ammunition. <InnerLink id="backlink-rule-magic_weapons-ref-7-1" data-hash-target to="rule-magic_weapons-ref-7-1" aria-label="Back to reference 7-1">↩</InnerLink> <InnerLink id="backlink-rule-magic_weapons-ref-7-2" data-hash-target to="rule-magic_weapons-ref-7-2" aria-label="Back to reference 7-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-magic_weapons-ref-7-3" data-hash-target to="rule-magic_weapons-ref-7-3" aria-label="Back to reference 7-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-rule-magic_weapons-ref-7-4" data-hash-target to="rule-magic_weapons-ref-7-4" aria-label="Back to reference 7-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-rule-magic_weapons-ref-7-5" data-hash-target to="rule-magic_weapons-ref-7-5" aria-label="Back to reference 7-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-rule-magic_weapons-ref-7-6" data-hash-target to="rule-magic_weapons-ref-7-6" aria-label="Back to reference 7-6">↩<sup>6</sup></InnerLink> <InnerLink id="backlink-rule-magic_weapons-ref-7-7" data-hash-target to="rule-magic_weapons-ref-7-7" aria-label="Back to reference 7-7">↩<sup>7</sup></InnerLink> <InnerLink id="backlink-rule-magic_weapons-ref-7-8" data-hash-target to="rule-magic_weapons-ref-7-8" aria-label="Back to reference 7-8">↩<sup>8</sup></InnerLink> <InnerLink id="backlink-rule-magic_weapons-ref-7-9" data-hash-target to="rule-magic_weapons-ref-7-9" aria-label="Back to reference 7-9">↩<sup>9</sup></InnerLink> <InnerLink id="backlink-rule-magic_weapons-ref-7-10" data-hash-target to="rule-magic_weapons-ref-7-10" aria-label="Back to reference 7-10">↩<sup>10</sup></InnerLink> <InnerLink id="backlink-rule-magic_weapons-ref-7-11" data-hash-target to="rule-magic_weapons-ref-7-11" aria-label="Back to reference 7-11">↩<sup>11</sup></InnerLink> <InnerLink id="backlink-rule-magic_weapons-ref-7-12" data-hash-target to="rule-magic_weapons-ref-7-12" aria-label="Back to reference 7-12">↩<sup>12</sup></InnerLink> <InnerLink id="backlink-rule-magic_weapons-ref-7-13" data-hash-target to="rule-magic_weapons-ref-7-13" aria-label="Back to reference 7-13">↩<sup>13</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
const _potions = {title: "Potions", parent_topics: ["basics","magic_items","magic_item_descriptions"], siblings: ["extradimensional_spaces","magic_armor","magic_weapons","potions","rings","rods","scrolls","staves","wands","wondrous_items"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 477</Link></p>
<p>A potion is a magic liquid that produces its effect when imbibed. Potions vary incredibly in appearance. Magic oils are similar to potions, except that oils are applied externally rather than imbibed. A potion or oil can be used only once. It can duplicate the effect of a spell of up to 3rd level that has a casting time of less than 1 minute and targets one or more creatures or objects. The price of a potion is equal to the level of the spell &times; the creator's caster level &times; 50 gp. If the potion has a material component cost, it is added to the base price and cost to create. Table 15-12 gives sample prices for potions created at the lowest possible caster level for each spellcasting class. Note that some spells appear at different levels for different casters. The level of such spells depends on the caster brewing the potion.</p>
<p>Potions are like spells cast upon the imbiber. The character taking the potion doesn't get to make any decisions about the effect - the caster who brewed the potion has already done so. The drinker of a potion is both the effective target and the caster of the effect (though the potion indicates the caster level, the drinker still controls the effect).</p>
<p>The person applying an oil is the effective caster, but the object is the target.</p>
<p><strong className="hl">Physical Description:</strong> A typical potion or oil consists of 1 ounce of liquid held in a ceramic or glass vial fitted with a tight stopper. The stoppered container is usually no more than 1 inch wide and 2 inches high. The vial has AC 13, 1 hit point, hardness 1, and a break DC of 12.</p>
<p><strong className="hl">Identifying Potions:</strong> In addition to the standard methods of identification, PCs can sample from each container they find to attempt to determine the nature of the liquid inside with a Perception check. The DC of this check is equal to 15 + the spell level of the potion (although this DC might be higher for rare or unusual potions).</p>
<p><strong className="hl">Activation:</strong> Drinking a potion or applying an oil requires no special skill. The user merely removes the stopper and swallows the potion or smears on the oil. The following rules govern potion and oil use.</p>
<p>Drinking a potion or using an oil is a standard action. The potion or oil takes effect immediately. Using a potion or oil provokes attacks of opportunity. An enemy may direct an attack of opportunity against the potion or oil container rather than against the character. A successful attack of this sort can destroy the container, preventing the character from drinking the potion or applying the oil.</p>
<p>A creature must be able to swallow a potion or smear on an oil. Because of this, incorporeal creatures cannot use potions or oils. Any corporeal creature can imbibe a potion or use an oil.</p>
<p>A character can carefully administer a potion to an unconscious creature as a full-round action, trickling the liquid down the creature's throat. Likewise, it takes a full-round action to apply an oil to an unconscious creature.</p>
<h3 id="rule-potions-table-15-12-potions">Table 15-12: Potions</h3>
<ScrollContainer id="rule-potions--table-0"><table>
<thead>
<tr>
<th>Minor</th>
<th>Medium</th>
<th>Major</th>
<th>Spell Level</th>
<th>Caster Level</th>
</tr>
</thead>
<tbody><tr>
<td>01-20</td>
<td>-</td>
<td>-</td>
<td>0</td>
<td>1st</td>
</tr>
<tr>
<td>21-60</td>
<td>01-20</td>
<td>-</td>
<td>1st</td>
<td>1st</td>
</tr>
<tr>
<td>61-100</td>
<td>21-60</td>
<td>01-20</td>
<td>2nd</td>
<td>3rd</td>
</tr>
<tr>
<td>-</td>
<td>61-100</td>
<td>21-100</td>
<td>3rd</td>
<td>5th</td>
</tr>
</tbody></table></ScrollContainer>
<p><em>Also see: <Link to="/rule/random_potions_and_oils">Random Potions and Oils (Gamemastery)</Link></em></p>
<h3 id="rule-potions-potion-costs">Potion Costs</h3>
<ScrollContainer id="rule-potions--table-1"><table>
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
</>};
const _rings = {title: "Rings", parent_topics: ["basics","magic_items","magic_item_descriptions"], siblings: ["extradimensional_spaces","magic_armor","magic_weapons","potions","rings","rods","scrolls","staves","wands","wondrous_items"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 478</Link></p>
<p>Rings bestow magical powers upon their wearers. Only a rare few have charges - most magic rings are permanent and potent magic items. Anyone can use a ring.</p>
<p>A character can only effectively wear two magic rings. A third magic ring doesn't work if the wearer is already wearing two magic rings.</p>
<p><strong className="hl">Physical Description:</strong> Rings have no appreciable weight. Although exceptions exist that are crafted from glass or bone, the vast majority of rings are forged from metal - usually precious metals such as gold, silver, and platinum. A ring has AC 13, 2 hit points, hardness 10, and a break DC of 25.</p>
<p><strong className="hl">Activation:</strong> A ring's ability is usually activated by a spoken command word (a standard action that does not provoke attacks of opportunity) or its effects work continually. Some rings have unusual activations, as mentioned in the ring's specific description.</p>
<p><strong className="hl">Special Qualities:</strong> Roll d%. A result of 01 indicates the ring is intelligent, 02-31 indicates that something (a design, inscription, or the like) provides a clue to its function, and 32-100 indicates no special qualities. Intelligent items have extra abilities and sometimes <Link to="/rule/intelligent_items">extraordinary powers and special purposes</Link>. Rings with charges can never be intelligent.</p>
<h3 id="rule-rings-table-15-13-rings">Table 15-13: Rings</h3>
<ScrollContainer id="rule-rings--table-0"><table>
<thead>
<tr>
<th>Minor</th>
<th>Medium</th>
<th>Major</th>
<th>Ring</th>
<th>Market Price</th>
</tr>
</thead>
<tbody><tr>
<td>01-18</td>
<td>&mdash;</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_protection_1">Ring of Protection +1<IonRippleEffect /></Link></td>
<td>2,000 gp</td>
</tr>
<tr>
<td>19-28</td>
<td>&mdash;</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_feather_falling">Ring of Feather falling<IonRippleEffect /></Link></td>
<td>2,200 gp</td>
</tr>
<tr>
<td>29-36</td>
<td>&mdash;</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_sustenance">Ring of Sustenance<IonRippleEffect /></Link></td>
<td>2,500 gp</td>
</tr>
<tr>
<td>37-44</td>
<td>&mdash;</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_climbing">Ring of Climbing<IonRippleEffect /></Link></td>
<td>2,500 gp</td>
</tr>
<tr>
<td>45-52</td>
<td>&mdash;</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_jumping">Ring of Jumping<IonRippleEffect /></Link></td>
<td>2,500 gp</td>
</tr>
<tr>
<td>53-60</td>
<td>&mdash;</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_swimming">Ring of Swimming<IonRippleEffect /></Link></td>
<td>2,500 gp</td>
</tr>
<tr>
<td>61-70</td>
<td>01-05</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_counterspells">Ring of Counterspells<IonRippleEffect /></Link></td>
<td>4,000 gp</td>
</tr>
<tr>
<td>71-75</td>
<td>06-08</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_mind_shielding">Ring of Mind shielding<IonRippleEffect /></Link></td>
<td>8,000 gp</td>
</tr>
<tr>
<td>76-80</td>
<td>09-18</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_protection_2">Ring of Protection +2<IonRippleEffect /></Link></td>
<td>8,000 gp</td>
</tr>
<tr>
<td>81-85</td>
<td>19-23</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_force_shield">Ring of Force shield<IonRippleEffect /></Link></td>
<td>8,500 gp</td>
</tr>
<tr>
<td>86-90</td>
<td>24-28</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_the_ram">Ring of the Ram<IonRippleEffect /></Link></td>
<td>8,600 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>29-34</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_climbing_improved">Ring of Climbing, improved<IonRippleEffect /></Link></td>
<td>10,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>35-40</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_jumping_improved">Ring of Jumping, improved<IonRippleEffect /></Link></td>
<td>10,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>41-46</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_swimming_improved">Ring of Swimming, improved<IonRippleEffect /></Link></td>
<td>10,000 gp</td>
</tr>
<tr>
<td>91-93</td>
<td>47-50</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_animal_friendship">Ring of Animal friendship<IonRippleEffect /></Link></td>
<td>10,800 gp</td>
</tr>
<tr>
<td>94-96</td>
<td>51-56</td>
<td>01-02</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_energy_resistance_minor">Ring of Energy resistance, minor<IonRippleEffect /></Link></td>
<td>12,000 gp</td>
</tr>
<tr>
<td>97-98</td>
<td>57-61</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_chameleon_power">Ring of Chameleon power<IonRippleEffect /></Link></td>
<td>12,700 gp</td>
</tr>
<tr>
<td>99-100</td>
<td>62-66</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_water_walking">Ring of Water walking<IonRippleEffect /></Link></td>
<td>15,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>67-71</td>
<td>03-07</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_protection_3">Ring of Protection +3<IonRippleEffect /></Link></td>
<td>18,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>72-76</td>
<td>08-10</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_spell_storing_minor">Ring of Spell storing, minor<IonRippleEffect /></Link></td>
<td>18,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>77-81</td>
<td>11-15</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_invisibility">Ring of Invisibility<IonRippleEffect /></Link></td>
<td>20,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>82-85</td>
<td>16-19</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_wizardry_type_i">Ring of Wizardry (Type I)<IonRippleEffect /></Link></td>
<td>20,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>86-90</td>
<td>20-25</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_evasion">Ring of Evasion<IonRippleEffect /></Link></td>
<td>25,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>91-93</td>
<td>26-28</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_x_ray_vision">Ring of X-ray vision<IonRippleEffect /></Link></td>
<td>25,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>94-97</td>
<td>29-32</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_blinking">Ring of Blinking<IonRippleEffect /></Link></td>
<td>27,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>98-100</td>
<td>33-39</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_energy_resistance_major">Ring of Energy resistance, major<IonRippleEffect /></Link></td>
<td>28,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>&mdash;</td>
<td>40-49</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_protection_4">Ring of Protection +4<IonRippleEffect /></Link></td>
<td>32,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>&mdash;</td>
<td>50-55</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_wizardry_type_ii">Ring of Wizardry (Type II)<IonRippleEffect /></Link></td>
<td>40,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>&mdash;</td>
<td>56-60</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_freedom_of_movement">Ring of Freedom of movement<IonRippleEffect /></Link></td>
<td>40,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>&mdash;</td>
<td>61-63</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_energy_resistance_greater">Ring of Energy resistance, greater<IonRippleEffect /></Link></td>
<td>44,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>&mdash;</td>
<td>64-65</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_friend_shield">Ring of Friend shield (pair)<IonRippleEffect /></Link></td>
<td>50,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>&mdash;</td>
<td>66-70</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_protection_5">Ring of Protection +5<IonRippleEffect /></Link></td>
<td>50,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>&mdash;</td>
<td>71-74</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_shooting_stars">Ring of Shooting stars<IonRippleEffect /></Link></td>
<td>50,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>&mdash;</td>
<td>75-79</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_spell_storing">Ring of Spell storing<IonRippleEffect /></Link></td>
<td>50,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>&mdash;</td>
<td>80-83</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_wizardry_type_iii">Ring of Wizardry (Type III)<IonRippleEffect /></Link></td>
<td>70,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>&mdash;</td>
<td>84-86</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_telekinesis">Ring of Telekinesis<IonRippleEffect /></Link></td>
<td>75,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>&mdash;</td>
<td>87-88</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_regeneration">Ring of Regeneration<IonRippleEffect /></Link></td>
<td>90,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>&mdash;</td>
<td>89-91</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_spell_turning">Ring of Spell turning<IonRippleEffect /></Link></td>
<td>100,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>&mdash;</td>
<td>92-93</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_wizardry_type_iv">Ring of Wizardry (Type IV)<IonRippleEffect /></Link></td>
<td>100,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>&mdash;</td>
<td>94</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_three_wishes">Ring of Three wishes<IonRippleEffect /></Link></td>
<td>120,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>&mdash;</td>
<td>95</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_djinni_calling">Ring of Djinni calling<IonRippleEffect /></Link></td>
<td>125,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>&mdash;</td>
<td>96</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_elemental_command">Ring of Elemental command (air)<IonRippleEffect /></Link></td>
<td>200,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>&mdash;</td>
<td>97</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_elemental_command">Ring of Elemental command (earth)<IonRippleEffect /></Link></td>
<td>200,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>&mdash;</td>
<td>98</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_elemental_command">Ring of Elemental command (fire)<IonRippleEffect /></Link></td>
<td>200,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>&mdash;</td>
<td>99</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_elemental_command">Ring of Elemental command (water)<IonRippleEffect /></Link></td>
<td>200,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>&mdash;</td>
<td>100</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_spell_storing_major">Ring of Spell storing, major<IonRippleEffect /></Link></td>
<td>200,000 gp</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _rods = {title: "Rods", parent_topics: ["basics","magic_items","magic_item_descriptions"], siblings: ["extradimensional_spaces","magic_armor","magic_weapons","potions","rings","rods","scrolls","staves","wands","wondrous_items"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 484</Link></p>
<p>Rods are scepter-like devices that have unique magical powers and do not usually have charges. Anyone can use a rod.</p>
<p><strong className="hl">Physical Description:</strong> Rods weigh approximately 5 pounds. They range from 2 feet to 3 feet long and are usually made of iron or some other metal. (Many, as noted in their descriptions, can function as light maces or clubs due to their hardy construction.) These sturdy items have AC 9, 10 hit points, hardness 10, and a break DC of 27.</p>
<p><strong className="hl">Activation:</strong> Details relating to rod use vary from item to item. Unless noted otherwise, you must be holding a rod to use its abilities. See the individual descriptions for specifics.</p>
<p><strong className="hl">Special Qualities:</strong> Roll d%. A 01 result indicates the rod is intelligent, 02-31 indicates that something (a design, inscription, or the like) provides a clue to its function, and 32-100 indicates no special qualities. Intelligent items have extra abilities and sometimes extraordinary powers and special purposes (see <Link to="/rule/intelligent_items">Intelligent Items</Link>).</p>
<p>Rods with charges can never be intelligent.</p>
<h3 id="rule-rods-metamagic-rods">Metamagic Rods</h3>
<p>Metamagic rods hold the essence of a metamagic feat, allowing the user to apply metamagic effects to spells (but not spell-like abilities) as they are cast. This does not change the spell slot of the altered spell. Metamagic rods are use-activated (but casting spells in a threatened area still draws an attack of opportunity). A caster may only use one metamagic rod on any given spell, but it is permissible to combine a rod with metamagic feats possessed by the rod's wielder. In this case, only the feats possessed by the wielder adjust the spell slot of the spell being cast.</p>
<p>Possession of a metamagic rod does not confer the associated feat on the owner, only the ability to use the given feat a specified number of times per day. A sorcerer still must take a full-round action when using a metamagic rod, just as if using a metamagic feat he possesses (except for quicken metamagic rods, which can be used as a swift action).</p>
<p><strong className="hl">Lesser and Greater Metamagic Rods:</strong> Normal metamagic rods can be used with spells of 6th level or lower. Lesser rods can be used with spells of 3rd level or lower, while greater rods can be used with spells of 9th level or lower.</p>
<h3 id="rule-rods-table-15-14-rods">Table 15-14: Rods</h3>
<ScrollContainer id="rule-rods--table-0"><table>
<thead>
<tr>
<th>Medium</th>
<th>Major</th>
<th>Rod</th>
<th>Market Price</th>
</tr>
</thead>
<tbody><tr>
<td>01-07</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_metamagic_enlarge_lesser">Rod of Metamagic, Enlarge, lesser<IonRippleEffect /></Link></td>
<td>3,000 gp</td>
</tr>
<tr>
<td>08-14</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_metamagic_extend_lesser">Rod of Metamagic, Extend, lesser<IonRippleEffect /></Link></td>
<td>3,000 gp</td>
</tr>
<tr>
<td>15-21</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_metamagic_silent_lesser">Rod of Metamagic, Silent, lesser<IonRippleEffect /></Link></td>
<td>3,000 gp</td>
</tr>
<tr>
<td>22-28</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-rod/immovable_rod">Immovable Rod<IonRippleEffect /></Link></td>
<td>5,000 gp</td>
</tr>
<tr>
<td>29-35</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_metamagic_empower_lesser">Rod of Metamagic, Empower, lesser<IonRippleEffect /></Link></td>
<td>9,000 gp</td>
</tr>
<tr>
<td>36-42</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_metal_and_mineral_detection">Rod of Metal and mineral detection<IonRippleEffect /></Link></td>
<td>10,500 gp</td>
</tr>
<tr>
<td>43-53</td>
<td>01-04</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_cancellation">Rod of Cancellation<IonRippleEffect /></Link></td>
<td>11,000 gp</td>
</tr>
<tr>
<td>54-57</td>
<td>05-06</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_metamagic_enlarge">Rod of Metamagic, Enlarge<IonRippleEffect /></Link></td>
<td>11,000 gp</td>
</tr>
<tr>
<td>58-61</td>
<td>07-08</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_metamagic_extend">Rod of Metamagic, Extend<IonRippleEffect /></Link></td>
<td>11,000 gp</td>
</tr>
<tr>
<td>62-65</td>
<td>09-10</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_metamagic_silent">Rod of Metamagic, Silent<IonRippleEffect /></Link></td>
<td>11,000 gp</td>
</tr>
<tr>
<td>66-71</td>
<td>11-14</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_wonder">Rod of Wonder<IonRippleEffect /></Link></td>
<td>12,000 gp</td>
</tr>
<tr>
<td>72-79</td>
<td>15-19</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_the_python">Rod of the Python<IonRippleEffect /></Link></td>
<td>13,000 gp</td>
</tr>
<tr>
<td>80-83</td>
<td>&mdash;</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_metamagic_maximize_lesser">Rod of Metamagic, Maximize, lesser<IonRippleEffect /></Link></td>
<td>14,000 gp</td>
</tr>
<tr>
<td>84-89</td>
<td>20-21</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_flame_extinguishing">Rod of Flame extinguishing<IonRippleEffect /></Link></td>
<td>15,000 gp</td>
</tr>
<tr>
<td>90-97</td>
<td>22-25</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_the_viper">Rod of the Viper<IonRippleEffect /></Link></td>
<td>19,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>26-30</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_enemy_detection">Rod of Enemy detection<IonRippleEffect /></Link></td>
<td>23,500 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>31-36</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_metamagic_enlarge_greater">Rod of Metamagic, Enlarge, greater<IonRippleEffect /></Link></td>
<td>24,500 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>37-42</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_metamagic_extend_greater">Rod of Metamagic, Extend, greater<IonRippleEffect /></Link></td>
<td>24,500 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>43-48</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_metamagic_silent_greater">Rod of Metamagic, Silent, greater<IonRippleEffect /></Link></td>
<td>24,500 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>49-53</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_splendor">Rod of Splendor<IonRippleEffect /></Link></td>
<td>25,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>54-58</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_withering">Rod of Withering<IonRippleEffect /></Link></td>
<td>25,000 gp</td>
</tr>
<tr>
<td>98-99</td>
<td>59-64</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_metamagic_empower">Rod of Metamagic, Empower<IonRippleEffect /></Link></td>
<td>32,500 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>65-69</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_thunder_and_lightning">Rod of Thunder and lightning<IonRippleEffect /></Link></td>
<td>33,000 gp</td>
</tr>
<tr>
<td>100</td>
<td>70-73</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_metamagic_quicken_lesser">Rod of Metamagic, Quicken, lesser<IonRippleEffect /></Link></td>
<td>35,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>74-77</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_negation">Rod of Negation<IonRippleEffect /></Link></td>
<td>37,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>78-80</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_absorption">Rod of Absorption<IonRippleEffect /></Link></td>
<td>50,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>81-84</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_flailing">Rod of Flailing<IonRippleEffect /></Link></td>
<td>50,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>85-86</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_metamagic_maximize">Rod of Metamagic, Maximize<IonRippleEffect /></Link></td>
<td>54,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>87-88</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_rulership">Rod of Rulership<IonRippleEffect /></Link></td>
<td>60,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>89-90</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_security">Rod of Security<IonRippleEffect /></Link></td>
<td>61,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>91-92</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_lordly_might">Rod of Lordly might<IonRippleEffect /></Link></td>
<td>70,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>93-94</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_metamagic_empower_greater">Rod of Metamagic, Empower, greater<IonRippleEffect /></Link></td>
<td>73,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>95-96</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_metamagic_quicken">Rod of Metamagic, Quicken<IonRippleEffect /></Link></td>
<td>75,500 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>97-98</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_alertness">Rod of Alertness<IonRippleEffect /></Link></td>
<td>85,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>99</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_metamagic_maximize_greater">Rod of Metamagic, Maximize, greater<IonRippleEffect /></Link></td>
<td>121,500 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>100</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_metamagic_quicken_greater">Rod of Metamagic, Quicken, greater<IonRippleEffect /></Link></td>
<td>170,000 gp</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _scrolls = {title: "Scrolls", parent_topics: ["basics","magic_items","magic_item_descriptions"], siblings: ["extradimensional_spaces","magic_armor","magic_weapons","potions","rings","rods","scrolls","staves","wands","wondrous_items"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 490</Link></p>
<p>A scroll is a spell (or collection of spells) that has been stored in written form. A spell on a scroll can be used only once. The writing vanishes from the scroll when the spell is activated. Using a scroll is basically like casting a spell. The price of a scroll is equal to the level of the spell &times; the creator's caster level &times; 25 gp. If the scroll has a material component cost, it is added to the base price and cost to create. Table 15-15 gives sample prices for scrolls created at the lowest possible caster level for each spellcasting class. Note that some spells appear at different levels for different casters. The level of such spells depends on the caster scribing the scroll.</p>
<p><strong className="hl">Physical Description:</strong> A scroll is a heavy sheet of fine vellum or high-quality paper. An area about 8-1/2 inches wide and 11 inches long is sufficient to hold one spell. The sheet is reinforced at the top and bottom with strips of leather slightly longer than the sheet is wide. A scroll holding more than one spell has the same width (about 8-1/2 inches) but is an extra foot or so long for each additional spell. Scrolls that hold three or more spells are usually fitted with reinforcing rods at each end rather than simple strips of leather. A scroll has AC 9, 1 hit point, hardness 0, and a break DC of 8.</p>
<p>To protect it from wrinkling or tearing, a scroll is rolled up from both ends to form a double cylinder. (This also helps the user unroll the scroll quickly.) The scroll is placed in a tube of ivory, jade, leather, metal, or wood. Most scroll cases are inscribed with magic symbols which often identify the owner or the spells stored on the scrolls inside. The symbols sometimes hide magic traps.</p>
<p><strong className="hl">Activation:</strong> To activate a scroll, a spellcaster must read the spell written on it. This involves several steps and conditions.</p>
<p><strong className="hl">Decipher the Writing:</strong> The writing on a scroll must be deciphered before a character can use it or know exactly what spell it contains. This requires a <Link to="/spell/read_magic">read magic</Link> spell or a successful Spellcraft check (DC 20 + spell level). Deciphering a scroll is a full-round action.</p>
<p>Deciphering a scroll to determine its contents does not activate its magic unless it is a specially prepared cursed scroll. A character can decipher the writing on a scroll in advance so that she can proceed directly to the next step when the time comes to use the scroll.</p>
<p><strong className="hl">Activate the Spell:</strong> Activating a scroll requires reading the spell from the scroll. The character must be able to see and read the writing on the scroll. Activating a scroll spell requires no material components or focus. (The creator of the scroll provided these when scribing the scroll.) Note that some spells are effective only when cast on an item or items. In such a case, the scroll user must provide the item when activating the spell. Activating a scroll spell is subject to disruption just as casting a normally prepared spell would be. Using a scroll is like casting a spell for purposes of arcane spell failure chance.</p>
<p>To have any chance of activating a scroll spell, the scroll user must meet the following requirements.</p>
<ul>
<li>The spell must be of the correct type (arcane, divine, or psychic).<ul>
<li>Arcane spellcasters (alchemists, arcanists, bards, bloodragers, investigators, magi, skalds, sorcerers, summoner, witches, wizards) can only create and use scrolls containing arcane spells.</li>
<li>Divine spellcasters (antipaladins, clerics, druids, hunters, inquisitors, oracles, paladins, rangers, shamans, warpriests) can only create and use scrolls containing divine spells.</li>
<li>Psychic spellcasters (mediums, mesmerists, occultists, psychics, spiritualists) can only create and use scrolls containing psychic spells.</li>
</ul>
</li>
<li>The user must have the spell on her class list.</li>
<li>The user must have the requisite ability score.</li>
</ul>
<p>If the user meets all the requirements noted above, and her caster level is at least equal to the spell's caster level, she can automatically activate the spell without a check. If she meets all three requirements but her own caster level is lower than the scroll spell's caster level, then she has to make a caster level check (DC = scroll's caster level + 1) to cast the spell successfully. If she fails, she must make a DC 5 Wisdom check to avoid a mishap (see Scroll Mishaps). A natural roll of 1 always fails, whatever the modifiers. If the caster level check fails but no mishap occurs, the scroll is not expended. Activating a scroll is a standard action (or the spell's casting time, whichever is longer) and it provokes attacks of opportunity exactly as casting a spell does.</p>
<p><strong className="hl">Determine Effect:</strong> A spell successfully activated from a scroll works exactly like a spell prepared and cast the normal way. Assume the scroll spell's caster level is always the minimum level required to cast the spell for the character who scribed the scroll, unless the scriber specifically desired otherwise.</p>
<p>The writing for an activated spell disappears from the scroll as the spell is cast.</p>
<p><strong className="hl">Scroll Mishaps:</strong> When a mishap occurs, the spell on the scroll has a reversed or harmful effect. Possible mishaps are given below.</p>
<ul>
<li>A surge of uncontrolled magical energy deals 1d6 points of damage per spell level to the scroll user.</li>
<li>Spell strikes the scroll user or an ally instead of the intended target, or a random target nearby if the scroll user was the intended recipient.</li>
<li>Spell takes effect at some random location within spell range.</li>
<li>Spell's effect on the target is contrary to the spell's normal effect.</li>
<li>The scroll user suffers some minor but bizarre effect related to the spell in some way. Most such effects should last only as long as the original spell's duration, or 2d10 minutes for instantaneous spells.</li>
<li>Some innocuous item or items appear in the spell's area.</li>
<li>Spell has delayed effect. Sometime within the next 1d12 hours, the spell activates. If the scroll user was the intended recipient, the spell takes effect normally. If the user was not the intended recipient, the spell goes off in the general direction of the original recipient or target, up to the spell's maximum range, if the target has moved away.</li>
</ul>
<h3 id="rule-scrolls-table-15-15-scrolls">Table 15-15: Scrolls</h3>
<ScrollContainer id="rule-scrolls--table-0"><table>
<thead>
<tr>
<th>Minor</th>
<th>Medium</th>
<th>Major</th>
<th>Spell Level</th>
<th>Caster Level</th>
</tr>
</thead>
<tbody><tr>
<td>01-05</td>
<td>-</td>
<td>-</td>
<td>0</td>
<td>1st</td>
</tr>
<tr>
<td>06-50</td>
<td>-</td>
<td>-</td>
<td>1</td>
<td>1st</td>
</tr>
<tr>
<td>51-95</td>
<td>01-05</td>
<td>-</td>
<td>2</td>
<td>3rd</td>
</tr>
<tr>
<td>96-100</td>
<td>06-65</td>
<td>-</td>
<td>3</td>
<td>5th</td>
</tr>
<tr>
<td>-</td>
<td>66-95</td>
<td>01-05</td>
<td>4</td>
<td>7th</td>
</tr>
<tr>
<td>-</td>
<td>96-100</td>
<td>06-50</td>
<td>5</td>
<td>9th</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>51-70</td>
<td>6</td>
<td>11th</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>71-85</td>
<td>7</td>
<td>13th</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>86-95</td>
<td>8</td>
<td>15th</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>96-100</td>
<td>9</td>
<td>17th</td>
</tr>
</tbody></table></ScrollContainer>
<p><em>Also see: <Link to="/rule/random_scrolls">Random Scrolls (Gamemastery)</Link></em></p>
<h3 id="rule-scrolls-scroll-costs">Scroll Costs</h3>
<ScrollContainer id="rule-scrolls--table-1"><table>
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
<td>12.5 gp</td>
<td>12.5 gp</td>
<td>12.5 gp</td>
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
</>};
const _staves = {title: "Staves", parent_topics: ["basics","magic_items","magic_item_descriptions"], siblings: ["extradimensional_spaces","magic_armor","magic_weapons","potions","rings","rods","scrolls","staves","wands","wondrous_items"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 491</Link></p>
<p>A staff is a long shaft that stores several spells. Unlike wands, which can contain a wide variety of spells, each staff is of a certain kind and holds specific spells. A staff has 10 charges when created.</p>
<p><strong className="hl">Physical Description:</strong> A typical staff measures anywhere from 4 feet to 7 feet long and is 2 inches to 3 inches thick, weighing about 5 pounds. Most staves are wood, but an exotic few are bone, metal, or even glass. A staff often has a gem or some device at its tip or is shod in metal at one or both ends. Staves are often decorated with carvings or runes. A typical staff is like a walking stick, quarterstaff, or cudgel. It has AC 7, 10 hit points, hardness 5, and a break DC of 24.</p>
<p><strong className="hl">Activation:</strong> Staves use the spell trigger activation method, so casting a spell from a staff is usually a standard action that doesn't provoke attacks of opportunity. (If the spell being cast has a longer casting time than 1 standard action, however, it takes that long to cast the spell from a staff.) To activate a staff, a character must hold it forth in at least one hand (or whatever passes for a hand, for non-humanoid creatures).</p>
<p><strong className="hl">Special Qualities:</strong> Roll d%. A 01-30 result indicates that something (a design, inscription, or the like) provides some clue to the staff's function, and 31-100 indicates no special qualities.</p>
<p><strong className="hl">Using Staves:</strong> Staves use the wielder's ability score and relevant feats to set the DC for saves against their spells. Unlike with other sorts of magic items, the wielder can use his caster level when activating the power of a staff if it's higher than the caster level of the staff.</p>
<p>This means that staves are far more potent in the hands of a powerful spellcaster. Because they use the wielder's ability score to set the save DC for the spell, spells from a staff are often harder to resist than those from other magic items, which use the minimum ability score required to cast the spell. Not only are aspects of the spell dependent on caster level (range, duration, and so on) potentially higher, but spells from a staff are also harder to dispel and have a better chance of overcoming a target's spell resistance.</p>
<p>Staves hold a maximum of 10 charges. Each spell cast from a staff consumes one or more charges. When a staff runs out of charges, it cannot be used until it is recharged. Each morning, when a spellcaster prepares spells or regains spell slots, he can also imbue one staff with a portion of his power so long as one or more of the spells cast by the staff is on his spell list and he is capable of casting at least one of the spells. Imbuing a staff with this power restores one charge to the staff, but the caster must forgo one prepared spell or spell slot of a level equal to the highest-level spell cast by the staff. For example, a 9th-level wizard with a staff of fire could imbue the staff with one charge per day by using up one of his 4th-level spells. A staff cannot gain more than one charge per day and a caster cannot imbue more than one staff per day.</p>
<p>Furthermore, a staff can hold a spell of any level, unlike a wand, which is limited to spells of 4th level or lower. The minimum caster level of a staff is 8th.</p>
<h3 id="rule-staves-table-15-16-staves">Table 15-16: Staves</h3>
<ScrollContainer id="rule-staves--table-0"><table>
<thead>
<tr>
<th>Medium</th>
<th>Major</th>
<th>Staff</th>
<th>Market Price</th>
</tr>
</thead>
<tbody><tr>
<td>01-15</td>
<td>01-03</td>
<td className="ion-activatable"><Link to="/magic-staff/staff_of_charming">Staff of Charming<IonRippleEffect /></Link></td>
<td>17,600 gp</td>
</tr>
<tr>
<td>16-30</td>
<td>04-09</td>
<td className="ion-activatable"><Link to="/magic-staff/staff_of_fire">Staff of Fire<IonRippleEffect /></Link></td>
<td>18,950 gp</td>
</tr>
<tr>
<td>31-40</td>
<td>10-11</td>
<td className="ion-activatable"><Link to="/magic-staff/staff_of_swarming_insects">Staff of Swarming Insects<IonRippleEffect /></Link></td>
<td>22,800 gp</td>
</tr>
<tr>
<td>41-55</td>
<td>12-13</td>
<td className="ion-activatable"><Link to="/magic-staff/staff_of_size_alteration">Staff of Size Alteration<IonRippleEffect /></Link></td>
<td>26,150 gp</td>
</tr>
<tr>
<td>56-75</td>
<td>14-19</td>
<td className="ion-activatable"><Link to="/magic-staff/staff_of_healing">Staff of Healing<IonRippleEffect /></Link></td>
<td>29,600 gp</td>
</tr>
<tr>
<td>76-90</td>
<td>20-24</td>
<td className="ion-activatable"><Link to="/magic-staff/staff_of_frost">Staff of Frost<IonRippleEffect /></Link></td>
<td>41,400 gp</td>
</tr>
<tr>
<td>91-95</td>
<td>25-31</td>
<td className="ion-activatable"><Link to="/magic-staff/staff_of_illumination">Staff of Illumination<IonRippleEffect /></Link></td>
<td>51,500 gp</td>
</tr>
<tr>
<td>96-100</td>
<td>32-38</td>
<td className="ion-activatable"><Link to="/magic-staff/staff_of_defense">Staff of Defense<IonRippleEffect /></Link></td>
<td>62,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>39-45</td>
<td className="ion-activatable"><Link to="/magic-staff/staff_of_abjuration">Staff of Abjuration<IonRippleEffect /></Link></td>
<td>82,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>46-50</td>
<td className="ion-activatable"><Link to="/magic-staff/staff_of_conjuration">Staff of Conjuration<IonRippleEffect /></Link></td>
<td>82,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>51-55</td>
<td className="ion-activatable"><Link to="/magic-staff/staff_of_divination">Staff of Divination<IonRippleEffect /></Link></td>
<td>82,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>56-60</td>
<td className="ion-activatable"><Link to="/magic-staff/staff_of_enchantment">Staff of Enchantment<IonRippleEffect /></Link></td>
<td>82,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>61-65</td>
<td className="ion-activatable"><Link to="/magic-staff/staff_of_evocation">Staff of Evocation<IonRippleEffect /></Link></td>
<td>82,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>66-70</td>
<td className="ion-activatable"><Link to="/magic-staff/staff_of_illusion">Staff of Illusion<IonRippleEffect /></Link></td>
<td>82,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>71-75</td>
<td className="ion-activatable"><Link to="/magic-staff/staff_of_necromancy">Staff of Necromancy<IonRippleEffect /></Link></td>
<td>82,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>76-80</td>
<td className="ion-activatable"><Link to="/magic-staff/staff_of_transmutation">Staff of Transmutation<IonRippleEffect /></Link></td>
<td>82,000 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>81-85</td>
<td className="ion-activatable"><Link to="/magic-staff/staff_of_earth_and_stone">Staff of Earth and Stone<IonRippleEffect /></Link></td>
<td>85,800 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>86-90</td>
<td className="ion-activatable"><Link to="/magic-staff/staff_of_the_woodlands">Staff of the Woodlands<IonRippleEffect /></Link></td>
<td>100,400 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>91-95</td>
<td className="ion-activatable"><Link to="/magic-staff/staff_of_life">Staff of Life<IonRippleEffect /></Link></td>
<td>109,400 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>96-98</td>
<td className="ion-activatable"><Link to="/magic-staff/staff_of_passage">Staff of Passage<IonRippleEffect /></Link></td>
<td>206,900 gp</td>
</tr>
<tr>
<td>&mdash;</td>
<td>99-100</td>
<td className="ion-activatable"><Link to="/magic-staff/staff_of_power">Staff of Power<IonRippleEffect /></Link></td>
<td>235,000 gp</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _wands = {title: "Wands", parent_topics: ["basics","magic_items","magic_item_descriptions"], siblings: ["extradimensional_spaces","magic_armor","magic_weapons","potions","rings","rods","scrolls","staves","wands","wondrous_items"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 496</Link></p>
<p>A wand is a thin baton that contains a single spell of 4th level or lower. A wand has 50 charges when created - each charge allows the use of the wand's spell one time. A wand that runs out of charges is just a stick. The price of a wand is equal to the level of the spell &times; the creator's caster level &times; 750 gp. If the wand has a material component cost, it is added to the base price and cost to create once for each charge (50 &times; material component cost). Table 15-17 gives sample prices for wands created at the lowest possible caster level for each spellcasting class. Note that some spells appear at different levels for different casters. The level of such spells depends on the caster crafting the wand.</p>
<p><strong className="hl">Physical Description:</strong> A wand is 6 to 12 inches long, 1/4 inch thick, and weighs no more than 1 ounce. Most wands are wood, but some are bone, metal, or even crystal. A typical wand has AC 7, 5 hit points, hardness 5, and a break DC of 16.</p>
<p><strong className="hl">Activation:</strong> Wands use the spell trigger activation method, so casting a spell from a wand is usually a standard action that doesn't provoke attacks of opportunity. (If the spell being cast has a longer casting time than 1 action, however, it takes that long to cast the spell from a wand.) To activate a wand, a character must hold it in hand (or whatever passes for a hand, for non-humanoid creatures) and point it in the general direction of the target or area. A wand may be used while grappling or while swallowed whole.</p>
<p><strong className="hl">Special Qualities:</strong> Roll d%. A 01-30 result indicates that something (a design, inscription, or the like) provides some clue to the wand's function, and 31-100 indicates no special qualities.</p>
<h3 id="rule-wands-table-15-17-wands">Table 15-17: Wands</h3>
<ScrollContainer id="rule-wands--table-0"><table>
<thead>
<tr>
<th>Minor</th>
<th>Medium</th>
<th>Major</th>
<th>Spell Level</th>
<th>Caster Level</th>
</tr>
</thead>
<tbody><tr>
<td>01-05</td>
<td>-</td>
<td>-</td>
<td>0</td>
<td>1st</td>
</tr>
<tr>
<td>06-60</td>
<td>-</td>
<td>-</td>
<td>1st</td>
<td>1st</td>
</tr>
<tr>
<td>61-100</td>
<td>01-606</td>
<td>-</td>
<td>2nd</td>
<td>3rd</td>
</tr>
<tr>
<td>-</td>
<td>61-100</td>
<td>01-60</td>
<td>3rd</td>
<td>5th</td>
</tr>
<tr>
<td>-</td>
<td>-</td>
<td>61-100</td>
<td>4th</td>
<td>7th</td>
</tr>
</tbody></table></ScrollContainer>
<p><em>Also see: <Link to="/rule/random_wands">Random Wands (Gamemastery)</Link></em></p>
<h3 id="rule-wands-wand-costs">Wand Costs</h3>
<ScrollContainer id="rule-wands--table-1"><table>
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
</>};
const _wondrous_items = {title: "Wondrous Items", parent_topics: ["basics","magic_items","magic_item_descriptions"], siblings: ["extradimensional_spaces","magic_armor","magic_weapons","potions","rings","rods","scrolls","staves","wands","wondrous_items"], subtopics: ["minor_wondrous_items","medium_wondrous_items","major_wondrous_items"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 496</Link></p>
<p>This is a catch all category for anything that doesn't fall into the other groups. Anyone can use a wondrous item (unless specified otherwise in the description).</p>
<p><strong className="hl">Physical Description:</strong> Varies.</p>
<p><strong className="hl">Activation:</strong> Usually use-activated or command word, but details vary from item to item.</p>
<p><strong className="hl">Special Qualities:</strong> Roll d%. An 01 result indicates the wondrous item is intelligent, 02-31 indicates that something (a design, inscription, or the like) provides a clue to its function, and 32-100 indicates no special qualities. <Link to="/rule/intelligent_items">Intelligent items</Link> have extra abilities and sometimes extraordinary powers and special purposes.</p>
<p>Wondrous items with charges can never be intelligent.</p>
</>};
const _minor_wondrous_items = {title: "Table 15-18: Minor Wondrous Items", parent_topics: ["basics","magic_items","magic_item_descriptions","wondrous_items"], siblings: ["minor_wondrous_items","medium_wondrous_items","major_wondrous_items"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 497</Link></p>
<ScrollContainer id="rule-minor_wondrous_items--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Item</th>
<th>Market Price</th>
</tr>
</thead>
<tbody><tr>
<td>01</td>
<td className="ion-activatable"><Link to="/magic-wondrous/feather_token_anchor">Feather token, anchor<IonRippleEffect /></Link></td>
<td>50 gp</td>
</tr>
<tr>
<td>02</td>
<td className="ion-activatable"><Link to="/magic-wondrous/universal_solvent">Universal solvent<IonRippleEffect /></Link></td>
<td>50 gp</td>
</tr>
<tr>
<td>03</td>
<td className="ion-activatable"><Link to="/magic-wondrous/elixir_of_love">Elixir of love<IonRippleEffect /></Link></td>
<td>150 gp</td>
</tr>
<tr>
<td>04</td>
<td className="ion-activatable"><Link to="/magic-wondrous/unguent_of_timelessness">Unguent of timelessness<IonRippleEffect /></Link></td>
<td>150 gp</td>
</tr>
<tr>
<td>05</td>
<td className="ion-activatable"><Link to="/magic-wondrous/feather_token_fan">Feather token, fan<IonRippleEffect /></Link></td>
<td>200 gp</td>
</tr>
<tr>
<td>06</td>
<td className="ion-activatable"><Link to="/magic-wondrous/dust_of_tracelessness">Dust of tracelessness<IonRippleEffect /></Link></td>
<td>250 gp</td>
</tr>
<tr>
<td>07</td>
<td className="ion-activatable"><Link to="/magic-wondrous/elixir_of_hiding">Elixir of hiding<IonRippleEffect /></Link></td>
<td>250 gp</td>
</tr>
<tr>
<td>08</td>
<td className="ion-activatable"><Link to="/magic-wondrous/elixir_of_tumbling">Elixir of tumbling<IonRippleEffect /></Link></td>
<td>250 gp</td>
</tr>
<tr>
<td>09</td>
<td className="ion-activatable"><Link to="/magic-wondrous/elixir_of_swimming">Elixir of swimming<IonRippleEffect /></Link></td>
<td>250 gp</td>
</tr>
<tr>
<td>10</td>
<td className="ion-activatable"><Link to="/magic-wondrous/elixir_of_vision">Elixir of vision<IonRippleEffect /></Link></td>
<td>250 gp</td>
</tr>
<tr>
<td>11</td>
<td className="ion-activatable"><Link to="/magic-wondrous/silversheen">Silversheen<IonRippleEffect /></Link></td>
<td>250 gp</td>
</tr>
<tr>
<td>12</td>
<td className="ion-activatable"><Link to="/magic-wondrous/feather_token_bird">Feather token, bird<IonRippleEffect /></Link></td>
<td>300 gp</td>
</tr>
<tr>
<td>13</td>
<td className="ion-activatable"><Link to="/magic-wondrous/feather_token_tree">Feather token, tree<IonRippleEffect /></Link></td>
<td>400 gp</td>
</tr>
<tr>
<td>14</td>
<td className="ion-activatable"><Link to="/magic-wondrous/feather_token_swan_boat">Feather token, swan boat<IonRippleEffect /></Link></td>
<td>450 gp</td>
</tr>
<tr>
<td>15</td>
<td className="ion-activatable"><Link to="/magic-wondrous/elixir_of_truth">Elixir of truth<IonRippleEffect /></Link></td>
<td>500 gp</td>
</tr>
<tr>
<td>16</td>
<td className="ion-activatable"><Link to="/magic-wondrous/feather_token_whip">Feather token, whip<IonRippleEffect /></Link></td>
<td>500 gp</td>
</tr>
<tr>
<td>17</td>
<td className="ion-activatable"><Link to="/magic-wondrous/dust_of_dryness">Dust of dryness<IonRippleEffect /></Link></td>
<td>850 gp</td>
</tr>
<tr>
<td>18</td>
<td className="ion-activatable"><Link to="/magic-wondrous/hand_of_the_mage">Hand of the mage<IonRippleEffect /></Link></td>
<td>900 gp</td>
</tr>
<tr>
<td>19</td>
<td className="ion-activatable"><Link to="/magic-wondrous/bracers_of_armor_1">Bracers of armor +1<IonRippleEffect /></Link></td>
<td>1,000 gp</td>
</tr>
<tr>
<td>20</td>
<td className="ion-activatable"><Link to="/magic-wondrous/cloak_of_resistance_1">Cloak of resistance +1<IonRippleEffect /></Link></td>
<td>1,000 gp</td>
</tr>
<tr>
<td>21</td>
<td className="ion-activatable"><Link to="/magic-wondrous/pearl_of_power_1st">Pearl of power, 1st-level spell<IonRippleEffect /></Link></td>
<td>1,000 gp</td>
</tr>
<tr>
<td>22</td>
<td className="ion-activatable"><Link to="/magic-wondrous/phylactery_of_faithfulness">Phylactery of faithfulness<IonRippleEffect /></Link></td>
<td>1,000 gp</td>
</tr>
<tr>
<td>23</td>
<td className="ion-activatable"><Link to="/magic-wondrous/salve_of_slipperiness">Salve of slipperiness<IonRippleEffect /></Link></td>
<td>1,000 gp</td>
</tr>
<tr>
<td>24</td>
<td className="ion-activatable"><Link to="/magic-wondrous/elixir_of_fire_breath">Elixir of fire breath<IonRippleEffect /></Link></td>
<td>1,100 gp</td>
</tr>
<tr>
<td>25</td>
<td className="ion-activatable"><Link to="/magic-wondrous/pipes_of_the_sewers">Pipes of the sewers<IonRippleEffect /></Link></td>
<td>1,150 gp</td>
</tr>
<tr>
<td>26</td>
<td className="ion-activatable"><Link to="/magic-wondrous/dust_of_illusion">Dust of illusion<IonRippleEffect /></Link></td>
<td>1,200 gp</td>
</tr>
<tr>
<td>27</td>
<td className="ion-activatable"><Link to="/magic-wondrous/brooch_of_shielding">Brooch of shielding<IonRippleEffect /></Link></td>
<td>1,500 gp</td>
</tr>
<tr>
<td>28</td>
<td className="ion-activatable"><Link to="/magic-wondrous/necklace_of_fireballs_type_i">Necklace of fireballs type I<IonRippleEffect /></Link></td>
<td>1,650 gp</td>
</tr>
<tr>
<td>29</td>
<td className="ion-activatable"><Link to="/magic-wondrous/dust_of_appearance">Dust of appearance<IonRippleEffect /></Link></td>
<td>1,800 gp</td>
</tr>
<tr>
<td>30</td>
<td className="ion-activatable"><Link to="/magic-wondrous/hat_of_disguise">Hat of disguise<IonRippleEffect /></Link></td>
<td>1,800 gp</td>
</tr>
<tr>
<td>31</td>
<td className="ion-activatable"><Link to="/magic-wondrous/pipes_of_sounding">Pipes of sounding<IonRippleEffect /></Link></td>
<td>1,800 gp</td>
</tr>
<tr>
<td>32</td>
<td className="ion-activatable"><Link to="/magic-wondrous/efficient_quiver">Efficient quiver<IonRippleEffect /></Link></td>
<td>1,800 gp</td>
</tr>
<tr>
<td>33</td>
<td className="ion-activatable"><Link to="/magic-wondrous/amulet_of_natural_armor_1">Amulet of natural armor +1<IonRippleEffect /></Link></td>
<td>2,000 gp</td>
</tr>
<tr>
<td>34</td>
<td className="ion-activatable"><Link to="/magic-wondrous/handy_haversack">Handy haversack<IonRippleEffect /></Link></td>
<td>2,000 gp</td>
</tr>
<tr>
<td>35</td>
<td className="ion-activatable"><Link to="/magic-wondrous/horn_of_fog">Horn of fog<IonRippleEffect /></Link></td>
<td>2,000 gp</td>
</tr>
<tr>
<td>36</td>
<td className="ion-activatable"><Link to="/magic-wondrous/elemental_gem">Elemental gem<IonRippleEffect /></Link></td>
<td>2,250 gp</td>
</tr>
<tr>
<td>37</td>
<td className="ion-activatable"><Link to="/magic-wondrous/robe_of_bones">Robe of bones<IonRippleEffect /></Link></td>
<td>2,400 gp</td>
</tr>
<tr>
<td>38</td>
<td className="ion-activatable"><Link to="/magic-wondrous/sovereign_glue">Sovereign glue<IonRippleEffect /></Link></td>
<td>2,400 gp</td>
</tr>
<tr>
<td>39</td>
<td className="ion-activatable"><Link to="/magic-wondrous/bag_of_holding_type_i">Bag of holding type I<IonRippleEffect /></Link></td>
<td>2,500 gp</td>
</tr>
<tr>
<td>40</td>
<td className="ion-activatable"><Link to="/magic-wondrous/boots_of_elvenkind">Boots of elvenkind<IonRippleEffect /></Link></td>
<td>2,500 gp</td>
</tr>
<tr>
<td>41</td>
<td className="ion-activatable"><Link to="/magic-wondrous/boots_of_the_winterlands">Boots of the winterlands<IonRippleEffect /></Link></td>
<td>2,500 gp</td>
</tr>
<tr>
<td>42</td>
<td className="ion-activatable"><Link to="/magic-wondrous/candle_of_truth">Candle of truth<IonRippleEffect /></Link></td>
<td>2,500 gp</td>
</tr>
<tr>
<td>43</td>
<td className="ion-activatable"><Link to="/magic-wondrous/cloak_of_elvenkind">Cloak of elvenkind<IonRippleEffect /></Link></td>
<td>2,500 gp</td>
</tr>
<tr>
<td>44</td>
<td className="ion-activatable"><Link to="/magic-wondrous/eyes_of_the_eagle">Eyes of the eagle<IonRippleEffect /></Link></td>
<td>2,500 gp</td>
</tr>
<tr>
<td>45</td>
<td className="ion-activatable"><Link to="/magic-wondrous/goggles_of_minute_seeing">Goggles of minute seeing<IonRippleEffect /></Link></td>
<td>2,500 gp</td>
</tr>
<tr>
<td>46</td>
<td className="ion-activatable"><Link to="/magic-wondrous/scarab_golembane">Scarab, golembane<IonRippleEffect /></Link></td>
<td>2,500 gp</td>
</tr>
<tr>
<td>47</td>
<td className="ion-activatable"><Link to="/magic-wondrous/necklace_of_fireballs_type_ii">Necklace of fireballs type II<IonRippleEffect /></Link></td>
<td>2,700 gp</td>
</tr>
<tr>
<td>48</td>
<td className="ion-activatable"><Link to="/magic-wondrous/stone_of_alarm">Stone of alarm<IonRippleEffect /></Link></td>
<td>2,700 gp</td>
</tr>
<tr>
<td>49</td>
<td className="ion-activatable"><Link to="/magic-wondrous/bead_of_force">Bead of force<IonRippleEffect /></Link></td>
<td>3,000 gp</td>
</tr>
<tr>
<td>50</td>
<td className="ion-activatable"><Link to="/magic-wondrous/chime_of_opening">Chime of opening<IonRippleEffect /></Link></td>
<td>3,000 gp</td>
</tr>
<tr>
<td>51</td>
<td className="ion-activatable"><Link to="/magic-wondrous/horseshoes_of_speed">Horseshoes of speed<IonRippleEffect /></Link></td>
<td>3,000 gp</td>
</tr>
<tr>
<td>52</td>
<td className="ion-activatable"><Link to="/magic-wondrous/rope_of_climbing">Rope of climbing<IonRippleEffect /></Link></td>
<td>3,000 gp</td>
</tr>
<tr>
<td>53</td>
<td className="ion-activatable"><Link to="/magic-wondrous/bag_of_tricks_gray">Bag of tricks, gray<IonRippleEffect /></Link></td>
<td>3,400 gp</td>
</tr>
<tr>
<td>54</td>
<td className="ion-activatable"><Link to="/magic-wondrous/dust_of_disappearance">Dust of disappearance<IonRippleEffect /></Link></td>
<td>3,500 gp</td>
</tr>
<tr>
<td>55</td>
<td className="ion-activatable"><Link to="/magic-wondrous/lens_of_detection">Lens of detection<IonRippleEffect /></Link></td>
<td>3,500 gp</td>
</tr>
<tr>
<td>56</td>
<td className="ion-activatable"><Link to="/magic-wondrous/vestment_druids">Vestment, druid's<IonRippleEffect /></Link></td>
<td>3,750 gp</td>
</tr>
<tr>
<td>57</td>
<td className="ion-activatable"><Link to="/magic-wondrous/figurine_of_wondrous_power_silver_raven">Figurine of wondrous power, silver raven<IonRippleEffect /></Link></td>
<td>3,800 gp</td>
</tr>
<tr>
<td>58</td>
<td className="ion-activatable"><Link to="/magic-wondrous/amulet_of_mighty_fists_1">Amulet of mighty fists +1<IonRippleEffect /></Link></td>
<td>4,000 gp</td>
</tr>
<tr>
<td>59</td>
<td className="ion-activatable"><Link to="/magic-wondrous/belt_of_giant_strength_2">Belt of giant strength +2<IonRippleEffect /></Link></td>
<td>4,000 gp</td>
</tr>
<tr>
<td>60</td>
<td className="ion-activatable"><Link to="/magic-wondrous/belt_of_incredible_dexterity_2">Belt of incredible dexterity +2<IonRippleEffect /></Link></td>
<td>4,000 gp</td>
</tr>
<tr>
<td>61</td>
<td className="ion-activatable"><Link to="/magic-wondrous/belt_of_mighty_constitution_2">Belt of mighty constitution +2<IonRippleEffect /></Link></td>
<td>4,000 gp</td>
</tr>
<tr>
<td>62</td>
<td className="ion-activatable"><Link to="/magic-wondrous/bracers_of_armor_2">Bracers of armor +2<IonRippleEffect /></Link></td>
<td>4,000 gp</td>
</tr>
<tr>
<td>63</td>
<td className="ion-activatable"><Link to="/magic-wondrous/cloak_of_resistance_2">Cloak of resistance +2<IonRippleEffect /></Link></td>
<td>4,000 gp</td>
</tr>
<tr>
<td>64</td>
<td className="ion-activatable"><Link to="/magic-wondrous/gloves_of_arrow_snaring">Gloves of arrow snaring<IonRippleEffect /></Link></td>
<td>4,000 gp</td>
</tr>
<tr>
<td>65</td>
<td className="ion-activatable"><Link to="/magic-wondrous/headband_of_alluring_charisma_2">Headband of alluring charisma +2<IonRippleEffect /></Link></td>
<td>4,000 gp</td>
</tr>
<tr>
<td>66</td>
<td className="ion-activatable"><Link to="/magic-wondrous/headband_of_inspired_wisdom_2">Headband of inspired wisdom +2<IonRippleEffect /></Link></td>
<td>4,000 gp</td>
</tr>
<tr>
<td>67</td>
<td className="ion-activatable"><Link to="/magic-wondrous/headband_of_vast_intelligence_2">Headband of vast intelligence +2<IonRippleEffect /></Link></td>
<td>4,000 gp</td>
</tr>
<tr>
<td>68</td>
<td className="ion-activatable"><Link to="/magic-ioun/clear_spindle">Clear spindle ioun stone<IonRippleEffect /></Link></td>
<td>4,000 gp</td>
</tr>
<tr>
<td>69</td>
<td className="ion-activatable"><Link to="/magic-wondrous/restorative_ointment">Restorative ointment<IonRippleEffect /></Link></td>
<td>4,000 gp</td>
</tr>
<tr>
<td>70</td>
<td className="ion-activatable"><Link to="/magic-wondrous/marvelous_pigments">Marvelous pigments<IonRippleEffect /></Link></td>
<td>4,000 gp</td>
</tr>
<tr>
<td>71</td>
<td className="ion-activatable"><Link to="/magic-wondrous/pearl_of_power_2nd">Pearl of power, 2nd-level spell<IonRippleEffect /></Link></td>
<td>4,000 gp</td>
</tr>
<tr>
<td>72</td>
<td className="ion-activatable"><Link to="/magic-wondrous/stone_salve">Stone salve<IonRippleEffect /></Link></td>
<td>4,000 gp</td>
</tr>
<tr>
<td>73</td>
<td className="ion-activatable"><Link to="/magic-wondrous/necklace_of_fireballs_type_iii">Necklace of fireballs type III<IonRippleEffect /></Link></td>
<td>4,350 gp</td>
</tr>
<tr>
<td>74</td>
<td className="ion-activatable"><Link to="/magic-wondrous/circlet_of_persuasion">Circlet of persuasion<IonRippleEffect /></Link></td>
<td>4,500 gp</td>
</tr>
<tr>
<td>75</td>
<td className="ion-activatable"><Link to="/magic-wondrous/slippers_of_spider_climbing">Slippers of spider climbing<IonRippleEffect /></Link></td>
<td>4,800 gp</td>
</tr>
<tr>
<td>76</td>
<td className="ion-activatable"><Link to="/magic-wondrous/incense_of_meditation">Incense of meditation<IonRippleEffect /></Link></td>
<td>4,900 gp</td>
</tr>
<tr>
<td>77</td>
<td className="ion-activatable"><Link to="/magic-wondrous/bag_of_holding_type_ii">Bag of holding type II<IonRippleEffect /></Link></td>
<td>5,000 gp</td>
</tr>
<tr>
<td>78</td>
<td className="ion-activatable"><Link to="/magic-wondrous/bracers_of_archery_lesser">Bracers of archery, lesser<IonRippleEffect /></Link></td>
<td>5,000 gp</td>
</tr>
<tr>
<td>79</td>
<td className="ion-activatable"><Link to="/magic-ioun/dusty_rose_prism">Dusty rose prism ioun stone<IonRippleEffect /></Link></td>
<td>5,000 gp</td>
</tr>
<tr>
<td>80</td>
<td className="ion-activatable"><Link to="/magic-wondrous/helm_of_comprehend_languages_and_read_magic">Helm of comprehend languages and read magic<IonRippleEffect /></Link></td>
<td>5,200 gp</td>
</tr>
<tr>
<td>81</td>
<td className="ion-activatable"><Link to="/magic-wondrous/vest_of_escape">Vest of escape<IonRippleEffect /></Link></td>
<td>5,200 gp</td>
</tr>
<tr>
<td>82</td>
<td className="ion-activatable"><Link to="/magic-wondrous/eversmoking_bottle">Eversmoking bottle<IonRippleEffect /></Link></td>
<td>5,400 gp</td>
</tr>
<tr>
<td>83</td>
<td className="ion-activatable"><Link to="/magic-wondrous/sustaining_spoon">Sustaining spoon<IonRippleEffect /></Link></td>
<td>5,400 gp</td>
</tr>
<tr>
<td>84</td>
<td className="ion-activatable"><Link to="/magic-wondrous/necklace_of_fireballs_type_iv">Necklace of fireballs type IV<IonRippleEffect /></Link></td>
<td>5,400 gp</td>
</tr>
<tr>
<td>85</td>
<td className="ion-activatable"><Link to="/magic-wondrous/boots_of_striding_and_springing">Boots of striding and springing<IonRippleEffect /></Link></td>
<td>5,500 gp</td>
</tr>
<tr>
<td>86</td>
<td className="ion-activatable"><Link to="/magic-wondrous/wind_fan">Wind fan<IonRippleEffect /></Link></td>
<td>5,500 gp</td>
</tr>
<tr>
<td>87</td>
<td className="ion-activatable"><Link to="/magic-wondrous/necklace_of_fireballs_type_v">Necklace of fireballs type V<IonRippleEffect /></Link></td>
<td>5,850 gp</td>
</tr>
<tr>
<td>88</td>
<td className="ion-activatable"><Link to="/magic-wondrous/horseshoes_of_a_zephyr">Horseshoes of a zephyr<IonRippleEffect /></Link></td>
<td>6,000 gp</td>
</tr>
<tr>
<td>89</td>
<td className="ion-activatable"><Link to="/magic-wondrous/pipes_of_haunting">Pipes of haunting<IonRippleEffect /></Link></td>
<td>6,000 gp</td>
</tr>
<tr>
<td>90</td>
<td className="ion-activatable"><Link to="/magic-wondrous/gloves_of_swimming_and_climbing">Gloves of swimming and climbing<IonRippleEffect /></Link></td>
<td>6,250 gp</td>
</tr>
<tr>
<td>91</td>
<td className="ion-activatable"><Link to="/magic-wondrous/crown_of_blasting_minor">Crown of blasting, minor<IonRippleEffect /></Link></td>
<td>6,480 gp</td>
</tr>
<tr>
<td>92</td>
<td className="ion-activatable"><Link to="/magic-wondrous/horn_of_goodness_or_evil">Horn of goodness or evil<IonRippleEffect /></Link></td>
<td>6,500 gp</td>
</tr>
<tr>
<td>93</td>
<td className="ion-activatable"><Link to="/magic-wondrous/robe_of_useful_items">Robe of useful items<IonRippleEffect /></Link></td>
<td>7,000 gp</td>
</tr>
<tr>
<td>94</td>
<td className="ion-activatable"><Link to="/magic-wondrous/boat_folding">Boat, folding<IonRippleEffect /></Link></td>
<td>7,200 gp</td>
</tr>
<tr>
<td>95</td>
<td className="ion-activatable"><Link to="/magic-wondrous/cloak_of_the_manta_ray">Cloak of the manta ray<IonRippleEffect /></Link></td>
<td>7,200 gp</td>
</tr>
<tr>
<td>96</td>
<td className="ion-activatable"><Link to="/magic-wondrous/bottle_of_air">Bottle of air<IonRippleEffect /></Link></td>
<td>7,250 gp</td>
</tr>
<tr>
<td>97</td>
<td className="ion-activatable"><Link to="/magic-wondrous/bag_of_holding_type_iii">Bag of holding type III<IonRippleEffect /></Link></td>
<td>7,400 gp</td>
</tr>
<tr>
<td>98</td>
<td className="ion-activatable"><Link to="/magic-wondrous/periapt_of_health">Periapt of health<IonRippleEffect /></Link></td>
<td>7,400 gp</td>
</tr>
<tr>
<td>99</td>
<td className="ion-activatable"><Link to="/magic-wondrous/boots_of_levitation">Boots of levitation<IonRippleEffect /></Link></td>
<td>7,500 gp</td>
</tr>
<tr>
<td>100</td>
<td className="ion-activatable"><Link to="/magic-wondrous/harp_of_charming">Harp of charming<IonRippleEffect /></Link></td>
<td>7,500 gp</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _medium_wondrous_items = {title: "Table 15-19: Medium Wondrous Items", parent_topics: ["basics","magic_items","magic_item_descriptions","wondrous_items"], siblings: ["minor_wondrous_items","medium_wondrous_items","major_wondrous_items"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 498</Link></p>
<ScrollContainer id="rule-medium_wondrous_items--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Item</th>
<th>Market Price</th>
</tr>
</thead>
<tbody><tr>
<td>01</td>
<td className="ion-activatable"><Link to="/magic-wondrous/amulet_of_natural_armor_2">Amulet of natural armor +2<IonRippleEffect /></Link></td>
<td>8,000 gp</td>
</tr>
<tr>
<td>02</td>
<td className="ion-activatable"><Link to="/magic-wondrous/golem_manual_flesh">Golem manual, flesh<IonRippleEffect /></Link></td>
<td>8,000 gp</td>
</tr>
<tr>
<td>03</td>
<td className="ion-activatable"><Link to="/magic-wondrous/hand_of_glory">Hand of glory<IonRippleEffect /></Link></td>
<td>8,000 gp</td>
</tr>
<tr>
<td>04</td>
<td className="ion-activatable"><Link to="/magic-ioun/deep_red_sphere">Deep red sphere ioun stone<IonRippleEffect /></Link></td>
<td>8,000 gp</td>
</tr>
<tr>
<td>05</td>
<td className="ion-activatable"><Link to="/magic-ioun/incandescent_blue_sphere">Incandescent blue sphere ioun stone<IonRippleEffect /></Link></td>
<td>8,000 gp</td>
</tr>
<tr>
<td>06</td>
<td className="ion-activatable"><Link to="/magic-ioun/pale_blue_rhomboid">Pale blue rhomboid ioun stone<IonRippleEffect /></Link></td>
<td>8,000 gp</td>
</tr>
<tr>
<td>07</td>
<td className="ion-activatable"><Link to="/magic-ioun/pink_and_green_sphere">Pink and green sphere ioun stone<IonRippleEffect /></Link></td>
<td>8,000 gp</td>
</tr>
<tr>
<td>08</td>
<td className="ion-activatable"><Link to="/magic-ioun/pink_rhomboid">Pink rhomboid ioun stone<IonRippleEffect /></Link></td>
<td>8,000 gp</td>
</tr>
<tr>
<td>09</td>
<td className="ion-activatable"><Link to="/magic-ioun/scarlet_and_blue_sphere">Scarlet and blue sphere ioun stone<IonRippleEffect /></Link></td>
<td>8,000 gp</td>
</tr>
<tr>
<td>10</td>
<td className="ion-activatable"><Link to="/magic-wondrous/deck_of_illusions">Deck of illusions<IonRippleEffect /></Link></td>
<td>8,100 gp</td>
</tr>
<tr>
<td>11</td>
<td className="ion-activatable"><Link to="/magic-wondrous/necklace_of_fireballs_type_vi">Necklace of fireballs type VI<IonRippleEffect /></Link></td>
<td>8,100 gp</td>
</tr>
<tr>
<td>12</td>
<td className="ion-activatable"><Link to="/magic-wondrous/candle_of_invocation">Candle of invocation<IonRippleEffect /></Link></td>
<td>8,400 gp</td>
</tr>
<tr>
<td>13</td>
<td className="ion-activatable"><Link to="/magic-wondrous/robe_of_blending">Robe of blending<IonRippleEffect /></Link></td>
<td>8,400 gp</td>
</tr>
<tr>
<td>14</td>
<td className="ion-activatable"><Link to="/magic-wondrous/bag_of_tricks_rust">Bag of tricks, rust<IonRippleEffect /></Link></td>
<td>8,500 gp</td>
</tr>
<tr>
<td>15</td>
<td className="ion-activatable"><Link to="/magic-wondrous/necklace_of_fireballs_type_vii">Necklace of fireballs type VII<IonRippleEffect /></Link></td>
<td>8,700 gp</td>
</tr>
<tr>
<td>16</td>
<td className="ion-activatable"><Link to="/magic-wondrous/bracers_of_armor_3">Bracers of armor +3<IonRippleEffect /></Link></td>
<td>9,000 gp</td>
</tr>
<tr>
<td>17</td>
<td className="ion-activatable"><Link to="/magic-wondrous/cloak_of_resistance_3">Cloak of resistance +3<IonRippleEffect /></Link></td>
<td>9,000 gp</td>
</tr>
<tr>
<td>18</td>
<td className="ion-activatable"><Link to="/magic-wondrous/decanter_of_endless_water">Decanter of endless water<IonRippleEffect /></Link></td>
<td>9,000 gp</td>
</tr>
<tr>
<td>19</td>
<td className="ion-activatable"><Link to="/magic-wondrous/necklace_of_adaptation">Necklace of adaptation<IonRippleEffect /></Link></td>
<td>9,000 gp</td>
</tr>
<tr>
<td>20</td>
<td className="ion-activatable"><Link to="/magic-wondrous/pearl_of_power_3rd">Pearl of power, 3rd-level spell<IonRippleEffect /></Link></td>
<td>9,000 gp</td>
</tr>
<tr>
<td>21</td>
<td className="ion-activatable"><Link to="/magic-wondrous/figurine_of_wondrous_power_serpentine_owl">Figurine of wondrous power, serpentine owl<IonRippleEffect /></Link></td>
<td>9,100 gp</td>
</tr>
<tr>
<td>22</td>
<td className="ion-activatable"><Link to="/magic-wondrous/strand_of_prayer_beads_lesser">Strand of prayer beads, lesser<IonRippleEffect /></Link></td>
<td>9,600 gp</td>
</tr>
<tr>
<td>23</td>
<td className="ion-activatable"><Link to="/magic-wondrous/bag_of_holding_type_iv">Bag of holding type IV<IonRippleEffect /></Link></td>
<td>10,000 gp</td>
</tr>
<tr>
<td>24</td>
<td className="ion-activatable"><Link to="/magic-wondrous/belt_of_physical_might_2">Belt of physical might +2<IonRippleEffect /></Link></td>
<td>10,000 gp</td>
</tr>
<tr>
<td>25</td>
<td className="ion-activatable"><Link to="/magic-wondrous/figurine_of_wondrous_power_bronze_griffon">Figurine of wondrous power, bronze griffon<IonRippleEffect /></Link></td>
<td>10,000 gp</td>
</tr>
<tr>
<td>26</td>
<td className="ion-activatable"><Link to="/magic-wondrous/figurine_of_wondrous_power_ebony_fly">Figurine of wondrous power, ebony fly<IonRippleEffect /></Link></td>
<td>10,000 gp</td>
</tr>
<tr>
<td>27</td>
<td className="ion-activatable"><Link to="/magic-wondrous/glove_of_storing">Glove of storing<IonRippleEffect /></Link></td>
<td>10,000 gp</td>
</tr>
<tr>
<td>28</td>
<td className="ion-activatable"><Link to="/magic-wondrous/headband_of_mental_prowess_2">Headband of mental prowess +2<IonRippleEffect /></Link></td>
<td>10,000 gp</td>
</tr>
<tr>
<td>29</td>
<td className="ion-activatable"><Link to="/magic-ioun/dark_blue_rhomboid">Dark blue rhomboid ioun stone<IonRippleEffect /></Link></td>
<td>10,000 gp</td>
</tr>
<tr>
<td>30</td>
<td className="ion-activatable"><Link to="/magic-wondrous/cape_of_the_mountebank">Cape of the mountebank<IonRippleEffect /></Link></td>
<td>10,800 gp</td>
</tr>
<tr>
<td>31</td>
<td className="ion-activatable"><Link to="/magic-wondrous/phylactery_of_negative_channeling">Phylactery of negative channeling<IonRippleEffect /></Link></td>
<td>11,000 gp</td>
</tr>
<tr>
<td>32</td>
<td className="ion-activatable"><Link to="/magic-wondrous/phylactery_of_positive_channeling">Phylactery of positive channeling<IonRippleEffect /></Link></td>
<td>11,000 gp</td>
</tr>
<tr>
<td>33</td>
<td className="ion-activatable"><Link to="/magic-wondrous/gauntlet_of_rust">Gauntlet of rust<IonRippleEffect /></Link></td>
<td>11,500 gp</td>
</tr>
<tr>
<td>34</td>
<td className="ion-activatable"><Link to="/magic-wondrous/boots_of_speed">Boots of speed<IonRippleEffect /></Link></td>
<td>12,000 gp</td>
</tr>
<tr>
<td>35</td>
<td className="ion-activatable"><Link to="/magic-wondrous/goggles_of_night">Goggles of night<IonRippleEffect /></Link></td>
<td>12,000 gp</td>
</tr>
<tr>
<td>36</td>
<td className="ion-activatable"><Link to="/magic-wondrous/golem_manual_clay">Golem manual, clay<IonRippleEffect /></Link></td>
<td>12,000 gp</td>
</tr>
<tr>
<td>37</td>
<td className="ion-activatable"><Link to="/magic-wondrous/medallion_of_thoughts">Medallion of thoughts<IonRippleEffect /></Link></td>
<td>12,000 gp</td>
</tr>
<tr>
<td>38</td>
<td className="ion-activatable"><Link to="/magic-wondrous/blessed_book">Blessed book<IonRippleEffect /></Link></td>
<td>12,500 gp</td>
</tr>
<tr>
<td>39</td>
<td className="ion-activatable"><Link to="/magic-wondrous/gem_of_brightness">Gem of brightness<IonRippleEffect /></Link></td>
<td>13,000 gp</td>
</tr>
<tr>
<td>40</td>
<td className="ion-activatable"><Link to="/magic-wondrous/lyre_of_building">Lyre of building<IonRippleEffect /></Link></td>
<td>13,000 gp</td>
</tr>
<tr>
<td>41</td>
<td className="ion-activatable"><Link to="/magic-wondrous/robe_monks">Robe, Monk's<IonRippleEffect /></Link></td>
<td>13,000 gp</td>
</tr>
<tr>
<td>42</td>
<td className="ion-activatable"><Link to="/magic-wondrous/cloak_of_arachnida">Cloak of arachnida<IonRippleEffect /></Link></td>
<td>14,000 gp</td>
</tr>
<tr>
<td>43</td>
<td className="ion-activatable"><Link to="/magic-wondrous/belt_of_dwarvenkind">Belt of dwarvenkind<IonRippleEffect /></Link></td>
<td>14,900 gp</td>
</tr>
<tr>
<td>44</td>
<td className="ion-activatable"><Link to="/magic-wondrous/periapt_of_wound_closure">Periapt of wound closure<IonRippleEffect /></Link></td>
<td>15,000 gp</td>
</tr>
<tr>
<td>45</td>
<td className="ion-activatable"><Link to="/magic-wondrous/pearl_of_the_sirines">Pearl of the sirines<IonRippleEffect /></Link></td>
<td>15,300 gp</td>
</tr>
<tr>
<td>46</td>
<td className="ion-activatable"><Link to="/magic-wondrous/figurine_of_wondrous_power_onyx_dog">Figurine of wondrous power, onyx dog<IonRippleEffect /></Link></td>
<td>15,500 gp</td>
</tr>
<tr>
<td>47</td>
<td className="ion-activatable"><Link to="/magic-wondrous/amulet_of_mighty_fists_2">Amulet of mighty fists +2<IonRippleEffect /></Link></td>
<td>16,000 gp</td>
</tr>
<tr>
<td>48</td>
<td className="ion-activatable"><Link to="/magic-wondrous/bag_of_tricks_tan">Bag of tricks, tan<IonRippleEffect /></Link></td>
<td>16,000 gp</td>
</tr>
<tr>
<td>49</td>
<td className="ion-activatable"><Link to="/magic-wondrous/belt_of_giant_strength_4">Belt of giant strength +4<IonRippleEffect /></Link></td>
<td>16,000 gp</td>
</tr>
<tr>
<td>50</td>
<td className="ion-activatable"><Link to="/magic-wondrous/belt_of_incredible_dexterity_4">Belt of incredible dexterity +4<IonRippleEffect /></Link></td>
<td>16,000 gp</td>
</tr>
<tr>
<td>51</td>
<td className="ion-activatable"><Link to="/magic-wondrous/belt_of_mighty_constitution_4">Belt of mighty constitution +4<IonRippleEffect /></Link></td>
<td>16,000 gp</td>
</tr>
<tr>
<td>52</td>
<td className="ion-activatable"><Link to="/magic-wondrous/belt_of_physical_perfection_2">Belt of physical perfection +2<IonRippleEffect /></Link></td>
<td>16,000 gp</td>
</tr>
<tr>
<td>53</td>
<td className="ion-activatable"><Link to="/magic-wondrous/boots_winged">Boots, winged<IonRippleEffect /></Link></td>
<td>16,000 gp</td>
</tr>
<tr>
<td>54</td>
<td className="ion-activatable"><Link to="/magic-wondrous/bracers_of_armor_4">Bracers of armor +4<IonRippleEffect /></Link></td>
<td>16,000 gp</td>
</tr>
<tr>
<td>55</td>
<td className="ion-activatable"><Link to="/magic-wondrous/cloak_of_resistance_4">Cloak of resistance +4<IonRippleEffect /></Link></td>
<td>16,000 gp</td>
</tr>
<tr>
<td>56</td>
<td className="ion-activatable"><Link to="/magic-wondrous/headband_of_alluring_charisma_4">Headband of alluring charisma +4<IonRippleEffect /></Link></td>
<td>16,000 gp</td>
</tr>
<tr>
<td>57</td>
<td className="ion-activatable"><Link to="/magic-wondrous/headband_of_inspired_wisdom_4">Headband of inspired wisdom +4<IonRippleEffect /></Link></td>
<td>16,000 gp</td>
</tr>
<tr>
<td>58</td>
<td className="ion-activatable"><Link to="/magic-wondrous/headband_of_mental_superiority_2">Headband of mental superiority +2<IonRippleEffect /></Link></td>
<td>16,000 gp</td>
</tr>
<tr>
<td>59</td>
<td className="ion-activatable"><Link to="/magic-wondrous/headband_of_vast_intelligence_4">Headband of vast intelligence +4<IonRippleEffect /></Link></td>
<td>16,000 gp</td>
</tr>
<tr>
<td>60</td>
<td className="ion-activatable"><Link to="/magic-wondrous/pearl_of_power_4th">Pearl of power, 4th-level spell<IonRippleEffect /></Link></td>
<td>16,000 gp</td>
</tr>
<tr>
<td>61</td>
<td className="ion-activatable"><Link to="/magic-wondrous/scabbard_of_keen_edges">Scabbard of keen edges<IonRippleEffect /></Link></td>
<td>16,000 gp</td>
</tr>
<tr>
<td>62</td>
<td className="ion-activatable"><Link to="/magic-wondrous/figurine_of_wondrous_power_golden_lions">Figurine of wondrous power, golden lions<IonRippleEffect /></Link></td>
<td>16,500 gp</td>
</tr>
<tr>
<td>63</td>
<td className="ion-activatable"><Link to="/magic-wondrous/chime_of_interruption">Chime of interruption<IonRippleEffect /></Link></td>
<td>16,800 gp</td>
</tr>
<tr>
<td>64</td>
<td className="ion-activatable"><Link to="/magic-wondrous/broom_of_flying">Broom of flying<IonRippleEffect /></Link></td>
<td>17,000 gp</td>
</tr>
<tr>
<td>65</td>
<td className="ion-activatable"><Link to="/magic-wondrous/figurine_of_wondrous_power_marble_elephant">Figurine of wondrous power, marble elephant<IonRippleEffect /></Link></td>
<td>17,000 gp</td>
</tr>
<tr>
<td>66</td>
<td className="ion-activatable"><Link to="/magic-wondrous/amulet_of_natural_armor_3">Amulet of natural armor +3<IonRippleEffect /></Link></td>
<td>18,000 gp</td>
</tr>
<tr>
<td>67</td>
<td className="ion-activatable"><Link to="/magic-ioun/iridescent_spindle">Iridescent spindle ioun stone<IonRippleEffect /></Link></td>
<td>18,000 gp</td>
</tr>
<tr>
<td>68</td>
<td className="ion-activatable"><Link to="/magic-wondrous/bracelet_of_friends">Bracelet of friends<IonRippleEffect /></Link></td>
<td>19,000 gp</td>
</tr>
<tr>
<td>69</td>
<td className="ion-activatable"><Link to="/magic-wondrous/carpet_of_flying_5_ft_by_5_ft">Carpet of flying, 5 ft. by 5 ft.<IonRippleEffect /></Link></td>
<td>20,000 gp</td>
</tr>
<tr>
<td>70</td>
<td className="ion-activatable"><Link to="/magic-wondrous/horn_of_blasting">Horn of blasting<IonRippleEffect /></Link></td>
<td>20,000 gp</td>
</tr>
<tr>
<td>71</td>
<td className="ion-activatable"><Link to="/magic-ioun/pale_lavender_ellipsoid">Pale lavender ellipsoid ioun stone<IonRippleEffect /></Link></td>
<td>20,000 gp</td>
</tr>
<tr>
<td>72</td>
<td className="ion-activatable"><Link to="/magic-ioun/pearly_white_spindle">Pearly white spindle ioun stone<IonRippleEffect /></Link></td>
<td>20,000 gp</td>
</tr>
<tr>
<td>73</td>
<td className="ion-activatable"><Link to="/magic-wondrous/portable_hole">Portable hole<IonRippleEffect /></Link></td>
<td>20,000 gp</td>
</tr>
<tr>
<td>74</td>
<td className="ion-activatable"><Link to="/magic-wondrous/stone_of_good_luck_luckstone">Stone of good luck (luckstone)<IonRippleEffect /></Link></td>
<td>20,000 gp</td>
</tr>
<tr>
<td>75</td>
<td className="ion-activatable"><Link to="/magic-wondrous/figurine_of_wondrous_power_ivory_goats">Figurine of wondrous power, ivory goats<IonRippleEffect /></Link></td>
<td>21,000 gp</td>
</tr>
<tr>
<td>76</td>
<td className="ion-activatable"><Link to="/magic-wondrous/rope_of_entanglement">Rope of entanglement<IonRippleEffect /></Link></td>
<td>21,000 gp</td>
</tr>
<tr>
<td>77</td>
<td className="ion-activatable"><Link to="/magic-wondrous/golem_manual_stone">Golem manual, stone<IonRippleEffect /></Link></td>
<td>22,000 gp</td>
</tr>
<tr>
<td>78</td>
<td className="ion-activatable"><Link to="/magic-wondrous/mask_of_the_skull">Mask of the skull<IonRippleEffect /></Link></td>
<td>22,000 gp</td>
</tr>
<tr>
<td>79</td>
<td className="ion-activatable"><Link to="/magic-wondrous/mattock_of_the_titans">Mattock of the titans<IonRippleEffect /></Link></td>
<td>23,348 gp</td>
</tr>
<tr>
<td>80</td>
<td className="ion-activatable"><Link to="/magic-wondrous/crown_of_blasting_major">Crown of blasting, major<IonRippleEffect /></Link></td>
<td>23,760 gp</td>
</tr>
<tr>
<td>81</td>
<td className="ion-activatable"><Link to="/magic-wondrous/cloak_of_displacement_minor">Cloak of displacement, minor<IonRippleEffect /></Link></td>
<td>24,000 gp</td>
</tr>
<tr>
<td>82</td>
<td className="ion-activatable"><Link to="/magic-wondrous/helm_of_underwater_action">Helm of underwater action<IonRippleEffect /></Link></td>
<td>24,000 gp</td>
</tr>
<tr>
<td>83</td>
<td className="ion-activatable"><Link to="/magic-wondrous/bracers_of_archery_greater">Bracers of archery, greater<IonRippleEffect /></Link></td>
<td>25,000 gp</td>
</tr>
<tr>
<td>84</td>
<td className="ion-activatable"><Link to="/magic-wondrous/bracers_of_armor_5">Bracers of armor +5<IonRippleEffect /></Link></td>
<td>25,000 gp</td>
</tr>
<tr>
<td>85</td>
<td className="ion-activatable"><Link to="/magic-wondrous/cloak_of_resistance_5">Cloak of resistance +5<IonRippleEffect /></Link></td>
<td>25,000 gp</td>
</tr>
<tr>
<td>86</td>
<td className="ion-activatable"><Link to="/magic-wondrous/eyes_of_doom">Eyes of doom<IonRippleEffect /></Link></td>
<td>25,000 gp</td>
</tr>
<tr>
<td>87</td>
<td className="ion-activatable"><Link to="/magic-wondrous/pearl_of_power_5th">Pearl of power, 5th-level spell<IonRippleEffect /></Link></td>
<td>25,000 gp</td>
</tr>
<tr>
<td>88</td>
<td className="ion-activatable"><Link to="/magic-wondrous/maul_of_the_titans">Maul of the titans<IonRippleEffect /></Link></td>
<td>25,305 gp</td>
</tr>
<tr>
<td>89</td>
<td className="ion-activatable"><Link to="/magic-wondrous/cloak_of_the_bat">Cloak of the bat<IonRippleEffect /></Link></td>
<td>26,000 gp</td>
</tr>
<tr>
<td>90</td>
<td className="ion-activatable"><Link to="/magic-wondrous/iron_bands_of_binding">Iron bands of binding<IonRippleEffect /></Link></td>
<td>26,000 gp</td>
</tr>
<tr>
<td>91</td>
<td className="ion-activatable"><Link to="/magic-wondrous/cube_of_frost_resistance">Cube of frost resistance<IonRippleEffect /></Link></td>
<td>27,000 gp</td>
</tr>
<tr>
<td>92</td>
<td className="ion-activatable"><Link to="/magic-wondrous/helm_of_telepathy">Helm of telepathy<IonRippleEffect /></Link></td>
<td>27,000 gp</td>
</tr>
<tr>
<td>93</td>
<td className="ion-activatable"><Link to="/magic-wondrous/periapt_of_proof_against_poison">Periapt of proof against poison<IonRippleEffect /></Link></td>
<td>27,000 gp</td>
</tr>
<tr>
<td>94</td>
<td className="ion-activatable"><Link to="/magic-wondrous/robe_of_scintillating_colors">Robe of scintillating colors<IonRippleEffect /></Link></td>
<td>27,000 gp</td>
</tr>
<tr>
<td>95</td>
<td className="ion-activatable"><Link to="/magic-wondrous/manual_of_bodily_health_1">Manual of bodily health +1<IonRippleEffect /></Link></td>
<td>27,500 gp</td>
</tr>
<tr>
<td>96</td>
<td className="ion-activatable"><Link to="/magic-wondrous/manual_of_gainful_exercise_1">Manual of gainful exercise +1<IonRippleEffect /></Link></td>
<td>27,500 gp</td>
</tr>
<tr>
<td>97</td>
<td className="ion-activatable"><Link to="/magic-wondrous/manual_of_quickness_of_action_1">Manual of quickness of action +1<IonRippleEffect /></Link></td>
<td>27,500 gp</td>
</tr>
<tr>
<td>98</td>
<td className="ion-activatable"><Link to="/magic-wondrous/tome_of_clear_thought_1">Tome of clear thought +1<IonRippleEffect /></Link></td>
<td>27,500 gp</td>
</tr>
<tr>
<td>99</td>
<td className="ion-activatable"><Link to="/magic-wondrous/tome_of_leadership_and_influence_1">Tome of leadership and influence +1<IonRippleEffect /></Link></td>
<td>27,500 gp</td>
</tr>
<tr>
<td>100</td>
<td className="ion-activatable"><Link to="/magic-wondrous/tome_of_understanding_1">Tome of understanding +1<IonRippleEffect /></Link></td>
<td>27,500 gp</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _major_wondrous_items = {title: "Table 15-20: Major Wondrous Items", parent_topics: ["basics","magic_items","magic_item_descriptions","wondrous_items"], siblings: ["minor_wondrous_items","medium_wondrous_items","major_wondrous_items"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 499</Link></p>
<ScrollContainer id="rule-major_wondrous_items--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Item</th>
<th>Market Price</th>
</tr>
</thead>
<tbody><tr>
<td>01</td>
<td className="ion-activatable"><Link to="/magic-wondrous/dimensional_shackles">Dimensional shackles<IonRippleEffect /></Link></td>
<td>28,000 gp</td>
</tr>
<tr>
<td>02</td>
<td className="ion-activatable"><Link to="/magic-wondrous/figurine_of_wondrous_power_obsidian_steed">Figurine of wondrous power, obsidian steed<IonRippleEffect /></Link></td>
<td>28,500 gp</td>
</tr>
<tr>
<td>03</td>
<td className="ion-activatable"><Link to="/magic-wondrous/drums_of_panic">Drums of panic<IonRippleEffect /></Link></td>
<td>30,000 gp</td>
</tr>
<tr>
<td>04</td>
<td className="ion-activatable"><Link to="/magic-ioun/orange_prism">Orange prism ioun stone<IonRippleEffect /></Link></td>
<td>30,000 gp</td>
</tr>
<tr>
<td>05</td>
<td className="ion-activatable"><Link to="/magic-ioun/pale_green_prism">Pale green prism ioun stone<IonRippleEffect /></Link></td>
<td>30,000 gp</td>
</tr>
<tr>
<td>06</td>
<td className="ion-activatable"><Link to="/magic-wondrous/lantern_of_revealing">Lantern of revealing<IonRippleEffect /></Link></td>
<td>30,000 gp</td>
</tr>
<tr>
<td>07</td>
<td className="ion-activatable"><Link to="/magic-wondrous/amulet_of_natural_armor_4">Amulet of natural armor +4<IonRippleEffect /></Link></td>
<td>32,000 gp</td>
</tr>
<tr>
<td>08</td>
<td className="ion-activatable"><Link to="/magic-wondrous/amulet_of_proof_against_detection_and_location">Amulet of proof against detection and location<IonRippleEffect /></Link></td>
<td>35,000 gp</td>
</tr>
<tr>
<td>09</td>
<td className="ion-activatable"><Link to="/magic-wondrous/carpet_of_flying_5_ft_by_10_ft">Carpet of flying, 5 ft. by 10 ft.<IonRippleEffect /></Link></td>
<td>35,000 gp</td>
</tr>
<tr>
<td>10</td>
<td className="ion-activatable"><Link to="/magic-wondrous/golem_manual_iron">Golem manual, iron<IonRippleEffect /></Link></td>
<td>35,000 gp</td>
</tr>
<tr>
<td>11</td>
<td className="ion-activatable"><Link to="/magic-wondrous/amulet_of_mighty_fists_3">Amulet of mighty fists +3<IonRippleEffect /></Link></td>
<td>36,000 gp</td>
</tr>
<tr>
<td>12</td>
<td className="ion-activatable"><Link to="/magic-wondrous/belt_of_giant_strength_6">Belt of giant strength +6<IonRippleEffect /></Link></td>
<td>36,000 gp</td>
</tr>
<tr>
<td>13</td>
<td className="ion-activatable"><Link to="/magic-wondrous/belt_of_incredible_dexterity_6">Belt of incredible dexterity +6<IonRippleEffect /></Link></td>
<td>36,000 gp</td>
</tr>
<tr>
<td>14</td>
<td className="ion-activatable"><Link to="/magic-wondrous/belt_of_mighty_constitution_6">Belt of mighty constitution +6<IonRippleEffect /></Link></td>
<td>36,000 gp</td>
</tr>
<tr>
<td>15</td>
<td className="ion-activatable"><Link to="/magic-wondrous/bracers_of_armor_6">Bracers of armor +6<IonRippleEffect /></Link></td>
<td>36,000 gp</td>
</tr>
<tr>
<td>16</td>
<td className="ion-activatable"><Link to="/magic-wondrous/headband_of_alluring_charisma_6">Headband of alluring charisma +6<IonRippleEffect /></Link></td>
<td>36,000 gp</td>
</tr>
<tr>
<td>17</td>
<td className="ion-activatable"><Link to="/magic-wondrous/headband_of_inspired_wisdom_6">Headband of inspired wisdom +6<IonRippleEffect /></Link></td>
<td>36,000 gp</td>
</tr>
<tr>
<td>18</td>
<td className="ion-activatable"><Link to="/magic-wondrous/headband_of_vast_intelligence_6">Headband of vast intelligence +6<IonRippleEffect /></Link></td>
<td>36,000 gp</td>
</tr>
<tr>
<td>19</td>
<td className="ion-activatable"><Link to="/magic-ioun/vibrant_purple_prism">Vibrant purple prism ioun stone<IonRippleEffect /></Link></td>
<td>36,000 gp</td>
</tr>
<tr>
<td>20</td>
<td className="ion-activatable"><Link to="/magic-wondrous/pearl_of_power_6th">Pearl of power, 6th-level spell<IonRippleEffect /></Link></td>
<td>36,000 gp</td>
</tr>
<tr>
<td>21</td>
<td className="ion-activatable"><Link to="/magic-wondrous/scarab_of_protection">Scarab of protection<IonRippleEffect /></Link></td>
<td>38,000 gp</td>
</tr>
<tr>
<td>22</td>
<td className="ion-activatable"><Link to="/magic-wondrous/belt_of_physical_might_4">Belt of physical might +4<IonRippleEffect /></Link></td>
<td>40,000 gp</td>
</tr>
<tr>
<td>23</td>
<td className="ion-activatable"><Link to="/magic-wondrous/headband_of_mental_prowess_4">Headband of mental prowess +4<IonRippleEffect /></Link></td>
<td>40,000 gp</td>
</tr>
<tr>
<td>24</td>
<td className="ion-activatable"><Link to="/magic-ioun/lavender_and_green_ellipsoid">Lavender and green ellipsoid ioun stone<IonRippleEffect /></Link></td>
<td>40,000 gp</td>
</tr>
<tr>
<td>25</td>
<td className="ion-activatable"><Link to="/magic-wondrous/ring_gates">Ring gates<IonRippleEffect /></Link></td>
<td>40,000 gp</td>
</tr>
<tr>
<td>26</td>
<td className="ion-activatable"><Link to="/magic-wondrous/crystal_ball">Crystal ball<IonRippleEffect /></Link></td>
<td>42,000 gp</td>
</tr>
<tr>
<td>27</td>
<td className="ion-activatable"><Link to="/magic-wondrous/golem_manual_stone_guardian">Golem manual, stone guardian<IonRippleEffect /></Link></td>
<td>44,000 gp</td>
</tr>
<tr>
<td>28</td>
<td className="ion-activatable"><Link to="/magic-wondrous/strand_of_prayer_beads">Strand of prayer beads<IonRippleEffect /></Link></td>
<td>45,800 gp</td>
</tr>
<tr>
<td>29</td>
<td className="ion-activatable"><Link to="/magic-wondrous/orb_of_storms">Orb of storms<IonRippleEffect /></Link></td>
<td>48,000 gp</td>
</tr>
<tr>
<td>30</td>
<td className="ion-activatable"><Link to="/magic-wondrous/boots_of_teleportation">Boots of teleportation<IonRippleEffect /></Link></td>
<td>49,000 gp</td>
</tr>
<tr>
<td>31</td>
<td className="ion-activatable"><Link to="/magic-wondrous/bracers_of_armor_7">Bracers of armor +7<IonRippleEffect /></Link></td>
<td>49,000 gp</td>
</tr>
<tr>
<td>32</td>
<td className="ion-activatable"><Link to="/magic-wondrous/pearl_of_power_7th">Pearl of power, 7th-level spell<IonRippleEffect /></Link></td>
<td>49,000 gp</td>
</tr>
<tr>
<td>33</td>
<td className="ion-activatable"><Link to="/magic-wondrous/amulet_of_natural_armor_5">Amulet of natural armor +5<IonRippleEffect /></Link></td>
<td>50,000 gp</td>
</tr>
<tr>
<td>34</td>
<td className="ion-activatable"><Link to="/magic-wondrous/cloak_of_displacement_major">Cloak of displacement, major<IonRippleEffect /></Link></td>
<td>50,000 gp</td>
</tr>
<tr>
<td>35</td>
<td className="ion-activatable"><Link to="/magic-wondrous/crystal_ball_see_invisibility">Crystal ball (see invisibility)<IonRippleEffect /></Link></td>
<td>50,000 gp</td>
</tr>
<tr>
<td>36</td>
<td className="ion-activatable"><Link to="/magic-wondrous/horn_of_valhalla">Horn of Valhalla<IonRippleEffect /></Link></td>
<td>50,000 gp</td>
</tr>
<tr>
<td>37</td>
<td className="ion-activatable"><Link to="/magic-wondrous/crystal_ball_detect_thoughts">Crystal ball (detect thoughts)<IonRippleEffect /></Link></td>
<td>51,000 gp</td>
</tr>
<tr>
<td>38</td>
<td className="ion-activatable"><Link to="/magic-wondrous/wings_of_flying">Wings of flying<IonRippleEffect /></Link></td>
<td>54,000 gp</td>
</tr>
<tr>
<td>39</td>
<td className="ion-activatable"><Link to="/magic-wondrous/cloak_of_etherealness">Cloak of etherealness<IonRippleEffect /></Link></td>
<td>55,000 gp</td>
</tr>
<tr>
<td>40</td>
<td className="ion-activatable"><Link to="/magic-wondrous/instant_fortress">Instant fortress<IonRippleEffect /></Link></td>
<td>55,000 gp</td>
</tr>
<tr>
<td>41</td>
<td className="ion-activatable"><Link to="/magic-wondrous/manual_of_bodily_health_2">Manual of bodily health +2<IonRippleEffect /></Link></td>
<td>55,000 gp</td>
</tr>
<tr>
<td>42</td>
<td className="ion-activatable"><Link to="/magic-wondrous/manual_of_gainful_exercise_2">Manual of gainful exercise +2<IonRippleEffect /></Link></td>
<td>55,000 gp</td>
</tr>
<tr>
<td>43</td>
<td className="ion-activatable"><Link to="/magic-wondrous/manual_of_quickness_of_action_2">Manual of quickness of action +2<IonRippleEffect /></Link></td>
<td>55,000 gp</td>
</tr>
<tr>
<td>44</td>
<td className="ion-activatable"><Link to="/magic-wondrous/tome_of_clear_thought_2">Tome of clear thought +2<IonRippleEffect /></Link></td>
<td>55,000 gp</td>
</tr>
<tr>
<td>45</td>
<td className="ion-activatable"><Link to="/magic-wondrous/tome_of_leadership_and_influence_2">Tome of leadership and influence +2<IonRippleEffect /></Link></td>
<td>55,000 gp</td>
</tr>
<tr>
<td>46</td>
<td className="ion-activatable"><Link to="/magic-wondrous/tome_of_understanding_2">Tome of understanding +2<IonRippleEffect /></Link></td>
<td>55,000 gp</td>
</tr>
<tr>
<td>47</td>
<td className="ion-activatable"><Link to="/magic-wondrous/eyes_of_charming">Eyes of charming<IonRippleEffect /></Link></td>
<td>56,000 gp</td>
</tr>
<tr>
<td>48</td>
<td className="ion-activatable"><Link to="/magic-wondrous/robe_of_stars">Robe of stars<IonRippleEffect /></Link></td>
<td>58,000 gp</td>
</tr>
<tr>
<td>49</td>
<td className="ion-activatable"><Link to="/magic-wondrous/carpet_of_flying_10_ft_by_10_ft">Carpet of flying, 10 ft. by 10 ft.<IonRippleEffect /></Link></td>
<td>60,000 gp</td>
</tr>
<tr>
<td>50</td>
<td className="ion-activatable"><Link to="/magic-wondrous/darkskull">Darkskull<IonRippleEffect /></Link></td>
<td>60,000 gp</td>
</tr>
<tr>
<td>51</td>
<td className="ion-activatable"><Link to="/magic-wondrous/cube_of_force">Cube of force<IonRippleEffect /></Link></td>
<td>62,000 gp</td>
</tr>
<tr>
<td>52</td>
<td className="ion-activatable"><Link to="/magic-wondrous/amulet_of_mighty_fists_4">Amulet of mighty fists +4<IonRippleEffect /></Link></td>
<td>64,000 gp</td>
</tr>
<tr>
<td>53</td>
<td className="ion-activatable"><Link to="/magic-wondrous/belt_of_physical_perfection_4">Belt of physical perfection +4<IonRippleEffect /></Link></td>
<td>64,000 gp</td>
</tr>
<tr>
<td>54</td>
<td className="ion-activatable"><Link to="/magic-wondrous/bracers_of_armor_8">Bracers of armor +8<IonRippleEffect /></Link></td>
<td>64,000 gp</td>
</tr>
<tr>
<td>55</td>
<td className="ion-activatable"><Link to="/magic-wondrous/headband_of_mental_superiority_4">Headband of mental superiority +4<IonRippleEffect /></Link></td>
<td>64,000 gp</td>
</tr>
<tr>
<td>56</td>
<td className="ion-activatable"><Link to="/magic-wondrous/pearl_of_power_8th">Pearl of power, 8th-level spell<IonRippleEffect /></Link></td>
<td>64,000 gp</td>
</tr>
<tr>
<td>57</td>
<td className="ion-activatable"><Link to="/magic-wondrous/crystal_ball_telepathy">Crystal ball (telepathy)<IonRippleEffect /></Link></td>
<td>70,000 gp</td>
</tr>
<tr>
<td>58</td>
<td className="ion-activatable"><Link to="/magic-wondrous/horn_of_blasting_greater">Horn of blasting, greater<IonRippleEffect /></Link></td>
<td>70,000 gp</td>
</tr>
<tr>
<td>59</td>
<td className="ion-activatable"><Link to="/magic-wondrous/pearl_of_power_two_spells">Pearl of power, two spells<IonRippleEffect /></Link></td>
<td>70,000 gp</td>
</tr>
<tr>
<td>60</td>
<td className="ion-activatable"><Link to="/magic-wondrous/helm_of_teleportation">Helm of teleportation<IonRippleEffect /></Link></td>
<td>73,500 gp</td>
</tr>
<tr>
<td>61</td>
<td className="ion-activatable"><Link to="/magic-wondrous/gem_of_seeing">Gem of seeing<IonRippleEffect /></Link></td>
<td>75,000 gp</td>
</tr>
<tr>
<td>62</td>
<td className="ion-activatable"><Link to="/magic-wondrous/robe_of_the_archmagi">Robe of the archmagi<IonRippleEffect /></Link></td>
<td>75,000 gp</td>
</tr>
<tr>
<td>63</td>
<td className="ion-activatable"><Link to="/magic-wondrous/mantle_of_faith">Mantle of faith<IonRippleEffect /></Link></td>
<td>76,000 gp</td>
</tr>
<tr>
<td>64</td>
<td className="ion-activatable"><Link to="/magic-wondrous/crystal_ball_true_seeing">Crystal ball (true seeing)<IonRippleEffect /></Link></td>
<td>80,000 gp</td>
</tr>
<tr>
<td>65</td>
<td className="ion-activatable"><Link to="/magic-wondrous/pearl_of_power_9th">Pearl of power, 9th-level spell<IonRippleEffect /></Link></td>
<td>81,000 gp</td>
</tr>
<tr>
<td>66</td>
<td className="ion-activatable"><Link to="/magic-wondrous/well_of_many_worlds">Well of many worlds<IonRippleEffect /></Link></td>
<td>82,000 gp</td>
</tr>
<tr>
<td>67</td>
<td className="ion-activatable"><Link to="/magic-wondrous/manual_of_bodily_health_3">Manual of bodily health +3<IonRippleEffect /></Link></td>
<td>82,500 gp</td>
</tr>
<tr>
<td>68</td>
<td className="ion-activatable"><Link to="/magic-wondrous/manual_of_gainful_exercise_3">Manual of gainful exercise +3<IonRippleEffect /></Link></td>
<td>82,500 gp</td>
</tr>
<tr>
<td>69</td>
<td className="ion-activatable"><Link to="/magic-wondrous/manual_of_quickness_of_action_3">Manual of quickness of action +3<IonRippleEffect /></Link></td>
<td>82,500 gp</td>
</tr>
<tr>
<td>70</td>
<td className="ion-activatable"><Link to="/magic-wondrous/tome_of_clear_thought_3">Tome of clear thought +3<IonRippleEffect /></Link></td>
<td>82,500 gp</td>
</tr>
<tr>
<td>71</td>
<td className="ion-activatable"><Link to="/magic-wondrous/tome_of_leadership_and_influence_3">Tome of leadership and influence +3<IonRippleEffect /></Link></td>
<td>82,500 gp</td>
</tr>
<tr>
<td>72</td>
<td className="ion-activatable"><Link to="/magic-wondrous/tome_of_understanding_3">Tome of understanding +3<IonRippleEffect /></Link></td>
<td>82,500 gp</td>
</tr>
<tr>
<td>73</td>
<td className="ion-activatable"><Link to="/magic-wondrous/apparatus_of_the_crab">Apparatus of the crab<IonRippleEffect /></Link></td>
<td>90,000 gp</td>
</tr>
<tr>
<td>74</td>
<td className="ion-activatable"><Link to="/magic-wondrous/belt_of_physical_might_6">Belt of physical might +6<IonRippleEffect /></Link></td>
<td>90,000 gp</td>
</tr>
<tr>
<td>75</td>
<td className="ion-activatable"><Link to="/magic-wondrous/headband_of_mental_prowess_6">Headband of mental prowess +6<IonRippleEffect /></Link></td>
<td>90,000 gp</td>
</tr>
<tr>
<td>76</td>
<td className="ion-activatable"><Link to="/magic-wondrous/mantle_of_spell_resistance">Mantle of spell resistance<IonRippleEffect /></Link></td>
<td>90,000 gp</td>
</tr>
<tr>
<td>77</td>
<td className="ion-activatable"><Link to="/magic-wondrous/mirror_of_opposition">Mirror of opposition<IonRippleEffect /></Link></td>
<td>92,000 gp</td>
</tr>
<tr>
<td>78</td>
<td className="ion-activatable"><Link to="/magic-wondrous/strand_of_prayer_beads_greater">Strand of prayer beads, greater<IonRippleEffect /></Link></td>
<td>95,800 gp</td>
</tr>
<tr>
<td>79</td>
<td className="ion-activatable"><Link to="/magic-wondrous/amulet_of_mighty_fists_5">Amulet of mighty fists +5<IonRippleEffect /></Link></td>
<td>100,000 gp</td>
</tr>
<tr>
<td>80</td>
<td className="ion-activatable"><Link to="/magic-wondrous/manual_of_bodily_health_4">Manual of bodily health +4<IonRippleEffect /></Link></td>
<td>110,000 gp</td>
</tr>
<tr>
<td>81</td>
<td className="ion-activatable"><Link to="/magic-wondrous/manual_of_gainful_exercise_4">Manual of gainful exercise +4<IonRippleEffect /></Link></td>
<td>110,000 gp</td>
</tr>
<tr>
<td>82</td>
<td className="ion-activatable"><Link to="/magic-wondrous/manual_of_quickness_of_action_4">Manual of quickness of action +4<IonRippleEffect /></Link></td>
<td>110,000 gp</td>
</tr>
<tr>
<td>83</td>
<td className="ion-activatable"><Link to="/magic-wondrous/tome_of_clear_thought_4">Tome of clear thought +4<IonRippleEffect /></Link></td>
<td>110,000 gp</td>
</tr>
<tr>
<td>84</td>
<td className="ion-activatable"><Link to="/magic-wondrous/tome_of_leadership_and_influence_4">Tome of leadership and influence +4<IonRippleEffect /></Link></td>
<td>110,000 gp</td>
</tr>
<tr>
<td>85</td>
<td className="ion-activatable"><Link to="/magic-wondrous/tome_of_understanding_4">Tome of understanding +4<IonRippleEffect /></Link></td>
<td>110,000 gp</td>
</tr>
<tr>
<td>86</td>
<td className="ion-activatable"><Link to="/magic-wondrous/amulet_of_the_planes">Amulet of the planes<IonRippleEffect /></Link></td>
<td>120,000 gp</td>
</tr>
<tr>
<td>87</td>
<td className="ion-activatable"><Link to="/magic-wondrous/robe_of_eyes">Robe of eyes<IonRippleEffect /></Link></td>
<td>120,000 gp</td>
</tr>
<tr>
<td>88</td>
<td className="ion-activatable"><Link to="/magic-wondrous/helm_of_brilliance">Helm of brilliance<IonRippleEffect /></Link></td>
<td>125,000 gp</td>
</tr>
<tr>
<td>89</td>
<td className="ion-activatable"><Link to="/magic-wondrous/manual_of_bodily_health_5">Manual of bodily health +5<IonRippleEffect /></Link></td>
<td>137,500 gp</td>
</tr>
<tr>
<td>90</td>
<td className="ion-activatable"><Link to="/magic-wondrous/manual_of_gainful_exercise_5">Manual of gainful exercise +5<IonRippleEffect /></Link></td>
<td>137,500 gp</td>
</tr>
<tr>
<td>91</td>
<td className="ion-activatable"><Link to="/magic-wondrous/manual_of_quickness_of_action_5">Manual of quickness of action +5<IonRippleEffect /></Link></td>
<td>137,500 gp</td>
</tr>
<tr>
<td>92</td>
<td className="ion-activatable"><Link to="/magic-wondrous/tome_of_clear_thought_5">Tome of clear thought +5<IonRippleEffect /></Link></td>
<td>137,500 gp</td>
</tr>
<tr>
<td>93</td>
<td className="ion-activatable"><Link to="/magic-wondrous/tome_of_leadership_and_influence_5">Tome of leadership and influence +5<IonRippleEffect /></Link></td>
<td>137,500 gp</td>
</tr>
<tr>
<td>94</td>
<td className="ion-activatable"><Link to="/magic-wondrous/tome_of_understanding_5">Tome of understanding +5<IonRippleEffect /></Link></td>
<td>137,500 gp</td>
</tr>
<tr>
<td>95</td>
<td className="ion-activatable"><Link to="/magic-wondrous/belt_of_physical_perfection_6">Belt of physical perfection +6<IonRippleEffect /></Link></td>
<td>144,000 gp</td>
</tr>
<tr>
<td>96</td>
<td className="ion-activatable"><Link to="/magic-wondrous/headband_of_mental_superiority_6">Headband of mental superiority +6<IonRippleEffect /></Link></td>
<td>144,000 gp</td>
</tr>
<tr>
<td>97</td>
<td className="ion-activatable"><Link to="/magic-wondrous/efreeti_bottle">Efreeti bottle<IonRippleEffect /></Link></td>
<td>145,000 gp</td>
</tr>
<tr>
<td>98</td>
<td className="ion-activatable"><Link to="/magic-wondrous/cubic_gate">Cubic gate<IonRippleEffect /></Link></td>
<td>164,000 gp</td>
</tr>
<tr>
<td>99</td>
<td className="ion-activatable"><Link to="/magic-wondrous/iron_flask">Iron flask<IonRippleEffect /></Link></td>
<td>170,000 gp</td>
</tr>
<tr>
<td>10</td>
<td className="ion-activatable"><Link to="/magic-wondrous/mirror_of_life_trapping">Mirror of life trapping<IonRippleEffect /></Link></td>
<td>200,000 gp</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _intelligent_items = {title: "Intelligent Items", parent_topics: ["basics","magic_items"], siblings: ["magic_items_and_detect_magic","using_items","size_and_magic_items","magic_items_on_the_body","saving_throws_against_magic_item_powers","damaging_magic_items","repairing_magic_items","charges_doses_and_multiple_uses","purchasing_magic_items","magic_item_descriptions","intelligent_items","cursed_items","artifacts","magic_item_creation"], subtopics: ["designing_an_intelligent_item","intelligent_item_alignment","intelligent_item_ability_scores","languages_spoken_by_item","senses_and_communication","intelligent_item_powers","special_purpose_items","dedicated_powers","item_quirks","item_ego","items_against_characters"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 532</Link></p>
<p>Magic items sometimes have intelligence of their own. Magically imbued with sentience, these items think and feel the same way characters do and should be treated as NPCs. Intelligent items have extra abilities and sometimes extraordinary powers and special purposes. Only permanent magic items (as opposed to single-use items or those with charges) can be intelligent. (This means that potions, scrolls, and wands, among other items, are never intelligent.) In general, less than 1% of magic items have intelligence.</p>
<p>Intelligent items can actually be considered creatures because they have Intelligence, Wisdom, and Charisma scores. Treat them as constructs. Intelligent items often have the ability to illuminate their surroundings at will (as magic weapons do); many cannot see otherwise.</p>
<p>Unlike most magic items, intelligent items can activate their own powers without waiting for a command word from their owner. Intelligent items act during their owner's turn in the initiative order.</p>
</>};
const _designing_an_intelligent_item = {title: "Designing an Intelligent Item", parent_topics: ["basics","magic_items","intelligent_items"], siblings: ["designing_an_intelligent_item","intelligent_item_alignment","intelligent_item_ability_scores","languages_spoken_by_item","senses_and_communication","intelligent_item_powers","special_purpose_items","dedicated_powers","item_quirks","item_ego","items_against_characters"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 532</Link></p>
<p>Creating a magic item with intelligence follows these simple guidelines. Intelligent items must have an alignment, mental ability scores, languages, senses, and at least one other special ability. These statistics and abilities can be improved during creation, increasing the item's overall cost. Many of these abilities add to an item's Ego score. Intelligent items with high Ego scores are difficult to control and can sometimes take control of their owner, making them dangerous to possess.</p>
<p>An intelligent magic item has a base price increase of 500 gp. When determining the total value of an intelligent item, add this value to the sum of the prices of all of its additional abilities gained through being intelligent, before adding them to the magic item's base price.</p>
</>};
const _intelligent_item_alignment = {title: "Intelligent Item Alignment", parent_topics: ["basics","magic_items","intelligent_items"], siblings: ["designing_an_intelligent_item","intelligent_item_alignment","intelligent_item_ability_scores","languages_spoken_by_item","senses_and_communication","intelligent_item_powers","special_purpose_items","dedicated_powers","item_quirks","item_ego","items_against_characters"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 533</Link></p>
<p>Any item with intelligence has an alignment (see Table 15-21). Note that intelligent weapons already have alignments, either stated or by implication. If you're generating a random intelligent weapon, that weapon's alignment must fit with any alignment-oriented special abilities it has.</p>
<p>Any character whose alignment does not correspond to that of the item (except as noted by the asterisks on the table) gains one negative level if he or she so much as picks up the item. Although this negative level never results in actual level loss, it remains as long as the item is in hand and cannot be overcome in any way (including by <Link to="/spell/restoration">restoration</Link> spells). This negative level is cumulative with any other penalties the item might place on inappropriate wielders. Items with <Link to="/rule/item_ego">Ego scores</Link> of 20 to 29 bestow two negative levels. Items with Ego scores of 30 or higher bestow three negative levels.</p>
<h3 id="rule-intelligent_item_alignment-table-15-21">Table 15-21</h3>
<ScrollContainer id="rule-intelligent_item_alignment--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Alignment of Item</th>
</tr>
</thead>
<tbody><tr>
<td>01-10</td>
<td>Chaotic good</td>
</tr>
<tr>
<td>11-20</td>
<td>Chaotic neutral<sup><InnerLink showBacklink="backlink-rule-intelligent_item_alignment-ref-1-1" id="rule-intelligent_item_alignment-ref-1-1" data-hash-target to="rule-intelligent_item_alignment-1">1</InnerLink></sup></td>
</tr>
<tr>
<td>21-35</td>
<td>Chaotic evil</td>
</tr>
<tr>
<td>36-45</td>
<td>Neutral evil<sup><InnerLink showBacklink="backlink-rule-intelligent_item_alignment-ref-1-2" id="rule-intelligent_item_alignment-ref-1-2" data-hash-target to="rule-intelligent_item_alignment-1">1</InnerLink></sup></td>
</tr>
<tr>
<td>46-55</td>
<td>Lawful evil</td>
</tr>
<tr>
<td>56-70</td>
<td>Lawful good</td>
</tr>
<tr>
<td>71-80</td>
<td>Lawful neutral<sup><InnerLink showBacklink="backlink-rule-intelligent_item_alignment-ref-1-3" id="rule-intelligent_item_alignment-ref-1-3" data-hash-target to="rule-intelligent_item_alignment-1">1</InnerLink></sup></td>
</tr>
<tr>
<td>81-90</td>
<td>Neutral good<sup><InnerLink showBacklink="backlink-rule-intelligent_item_alignment-ref-1-4" id="rule-intelligent_item_alignment-ref-1-4" data-hash-target to="rule-intelligent_item_alignment-1">1</InnerLink></sup></td>
</tr>
<tr>
<td>91-100</td>
<td>Neutral</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-intelligent_item_alignment-label">Footnotes</h3>
<ol>
<li id="rule-intelligent_item_alignment-1">
<p>The item can also be used by any character whose alignment corresponds to the non-neutral portion of the item's alignment. <InnerLink id="backlink-rule-intelligent_item_alignment-ref-1-1" data-hash-target to="rule-intelligent_item_alignment-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink> <InnerLink id="backlink-rule-intelligent_item_alignment-ref-1-2" data-hash-target to="rule-intelligent_item_alignment-ref-1-2" aria-label="Back to reference 1-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-intelligent_item_alignment-ref-1-3" data-hash-target to="rule-intelligent_item_alignment-ref-1-3" aria-label="Back to reference 1-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-rule-intelligent_item_alignment-ref-1-4" data-hash-target to="rule-intelligent_item_alignment-ref-1-4" aria-label="Back to reference 1-4">↩<sup>4</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
const _intelligent_item_ability_scores = {title: "Intelligent Item Ability Scores", parent_topics: ["basics","magic_items","intelligent_items"], siblings: ["designing_an_intelligent_item","intelligent_item_alignment","intelligent_item_ability_scores","languages_spoken_by_item","senses_and_communication","intelligent_item_powers","special_purpose_items","dedicated_powers","item_quirks","item_ego","items_against_characters"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 533</Link></p>
<p>Intelligent magic items possess all three mental ability scores: Intelligence, Wisdom, and Charisma. Each one of these ability scores begins at a value of 10, but can be increased to as high as 20. Table 15-22 shows the cost to increase one of the item's ability scores. This cost must be paid for each ability score raised above 10. For example, an intelligent magic item with a 15 Intelligence, 12 Wisdom, and 10 Charisma would cost at least 2,400 gp more than the base item (including the 500 gp for being an intelligent item).</p>
<h3 id="rule-intelligent_item_ability_scores-table-15-22">Table 15-22</h3>
<ScrollContainer id="rule-intelligent_item_ability_scores--table-0"><table>
<thead>
<tr>
<th>Score Base</th>
<th>Price Modifier</th>
<th>Ego Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>10</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11</td>
<td>+200 gp</td>
<td>-</td>
</tr>
<tr>
<td>12</td>
<td>+500 gp</td>
<td>+1</td>
</tr>
<tr>
<td>13</td>
<td>+700 gp</td>
<td>+1</td>
</tr>
<tr>
<td>14</td>
<td>+1,000 gp</td>
<td>+2</td>
</tr>
<tr>
<td>15</td>
<td>+1,400 gp</td>
<td>+2</td>
</tr>
<tr>
<td>16</td>
<td>+2,000 gp</td>
<td>+3</td>
</tr>
<tr>
<td>17</td>
<td>+2,800 gp</td>
<td>+3</td>
</tr>
<tr>
<td>18</td>
<td>+4,000 gp</td>
<td>+4</td>
</tr>
<tr>
<td>19</td>
<td>+5,200 gp</td>
<td>+4</td>
</tr>
<tr>
<td>20</td>
<td>+8,000 gp</td>
<td>+5</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _languages_spoken_by_item = {title: "Languages Spoken by Item", parent_topics: ["basics","magic_items","intelligent_items"], siblings: ["designing_an_intelligent_item","intelligent_item_alignment","intelligent_item_ability_scores","languages_spoken_by_item","senses_and_communication","intelligent_item_powers","special_purpose_items","dedicated_powers","item_quirks","item_ego","items_against_characters"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 533</Link></p>
<p>Like a character, an intelligent item understands Common plus one additional language per point of Intelligence bonus. Choose appropriate <Link to="/misc/languages">languages</Link>, taking into account the item's origin and purposes. If the item does not possess speech, it can still read and understand the languages it knows.</p>
</>};
const _senses_and_communication = {title: "Senses and Communication", parent_topics: ["basics","magic_items","intelligent_items"], siblings: ["designing_an_intelligent_item","intelligent_item_alignment","intelligent_item_ability_scores","languages_spoken_by_item","senses_and_communication","intelligent_item_powers","special_purpose_items","dedicated_powers","item_quirks","item_ego","items_against_characters"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 533</Link></p>
<p>Every intelligent magic item begins with the ability to see and hear within 30 feet, as well as the ability to communicate empathically with its owner. Empathy only allows the item to encourage or discourage certain actions through urges and emotions. Additional forms of communication and better senses increase the item's cost and Ego score, as noted on Table 15-23.</p>
<p><strong className="hl">Empathy (Su):</strong> Empathy allows the item to encourage or discourage certain actions by communicating emotions and urges. It does not allow for verbal communication.</p>
<p><strong className="hl">Speech (Su):</strong> An intelligent item with the capability for speech can talk using any of the languages it knows.</p>
<p><strong className="hl">Telepathy (Su):</strong> Telepathy allows an intelligent item to communicate with its wielder telepathically, regardless of its known languages. The wielder must be touching the item to communicate in this way.</p>
<p><strong className="hl">Senses:</strong> Senses allow an intelligent magic item to see and hear out to the listed distance. Adding darkvision or blindsense allows the item to use those senses out to the same range as the item's base senses.</p>
<p><strong className="hl">Read Languages (Ex):</strong> The item can read script in any language, regardless of its known languages.</p>
<p><strong className="hl">Read Magic (Sp):</strong> An intelligent magic item with this ability can read magical writings and scrolls as if through <Link to="/spell/read_magic">read magic</Link>. This ability does not allow the magic item to activate scrolls or other items. An intelligent magic item can suppress and resume this ability as a free action.</p>
<h3 id="rule-senses_and_communication-table-15-23">Table 15-23</h3>
<ScrollContainer id="rule-senses_and_communication--table-0"><table>
<thead>
<tr>
<th>Ability Base</th>
<th>Price Modifier</th>
<th>Ego Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Empathy</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>Speech</td>
<td>+500 gp</td>
<td>-</td>
</tr>
<tr>
<td>Telepathy</td>
<td>+1,000 gp</td>
<td>+1</td>
</tr>
<tr>
<td>Senses (30 ft.)</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>Senses (60 ft.)</td>
<td>+500 gp</td>
<td>-</td>
</tr>
<tr>
<td>Senses (120 ft.)</td>
<td>+1,000 gp</td>
<td>-</td>
</tr>
<tr>
<td>Darkvision</td>
<td>+500 gp</td>
<td>-</td>
</tr>
<tr>
<td>Blindsense</td>
<td>+5,000 gp</td>
<td>+1</td>
</tr>
<tr>
<td>Read languages</td>
<td>+1,000 gp</td>
<td>+1</td>
</tr>
<tr>
<td>Read magic</td>
<td>+2,000 gp</td>
<td>+1</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _intelligent_item_powers = {title: "Intelligent Item Powers", parent_topics: ["basics","magic_items","intelligent_items"], siblings: ["designing_an_intelligent_item","intelligent_item_alignment","intelligent_item_ability_scores","languages_spoken_by_item","senses_and_communication","intelligent_item_powers","special_purpose_items","dedicated_powers","item_quirks","item_ego","items_against_characters"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 535</Link></p>
<p>Each intelligent item should possess at least one power, although more powerful items might possess a host of powers. To find the item's specific powers, choose or roll on Table 15-24. All powers function at the direction of the item, although intelligent items generally follow the wishes of their owner. Activating a power or concentrating on an active one is a standard action the item takes. The caster level for these effects is equal to the item's caster level. Save DCs are based off the item's highest mental ability score.</p>
<h3 id="rule-intelligent_item_powers-table-15-24">Table 15-24</h3>
<ScrollContainer id="rule-intelligent_item_powers--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Item Power</th>
<th>Base Price Modifier</th>
<th>Ego Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>01-10</td>
<td>Item can cast a 0-level spell at will</td>
<td>+1,000 gp</td>
<td>+1</td>
</tr>
<tr>
<td>11-20</td>
<td>Item can cast a 1st-level spell 3/day</td>
<td>+1,200 gp</td>
<td>+1</td>
</tr>
<tr>
<td>21-25</td>
<td>Item can use magic aura on itself at will</td>
<td>+2,000 gp</td>
<td>+1</td>
</tr>
<tr>
<td>26-35</td>
<td>Item can cast a 2nd-level spell 1/day</td>
<td>+2,400 gp</td>
<td>+1</td>
</tr>
<tr>
<td>36-45</td>
<td>Item has 5 ranks in one skill<sup><InnerLink showBacklink="backlink-rule-intelligent_item_powers-ref-1-1" id="rule-intelligent_item_powers-ref-1-1" data-hash-target to="rule-intelligent_item_powers-1">1</InnerLink></sup></td>
<td>+2,500 gp</td>
<td>+1</td>
</tr>
<tr>
<td>46-50</td>
<td>Item can sprout limbs and move with a speed of 10 feet</td>
<td>+5,000 gp</td>
<td>+1</td>
</tr>
<tr>
<td>51-55</td>
<td>Item can cast a 3rd-level spell 1/day</td>
<td>+6,000 gp</td>
<td>+1</td>
</tr>
<tr>
<td>56-60</td>
<td>Item can cast a 2nd-level spell 3/day</td>
<td>+7,200 gp</td>
<td>+1</td>
</tr>
<tr>
<td>61-70</td>
<td>Item has 10 ranks in one skill<sup><InnerLink showBacklink="backlink-rule-intelligent_item_powers-ref-1-2" id="rule-intelligent_item_powers-ref-1-2" data-hash-target to="rule-intelligent_item_powers-1">1</InnerLink></sup></td>
<td>+10,000 gp</td>
<td>+2</td>
</tr>
<tr>
<td>71-75</td>
<td>Item can change shape into one other form of the same size</td>
<td>+10,000 gp</td>
<td>+2</td>
</tr>
<tr>
<td>76-80</td>
<td>Item can fly, as per the spell, at a speed of 30 feet</td>
<td>+10,000 gp</td>
<td>+2</td>
</tr>
<tr>
<td>81-85</td>
<td>Item can cast a 4th-level spell 1/day</td>
<td>+11,200 gp</td>
<td>+2</td>
</tr>
<tr>
<td>86-90</td>
<td>Item can teleport itself 1/day</td>
<td>+15,000 gp</td>
<td>+2</td>
</tr>
<tr>
<td>91-95</td>
<td>Item can cast a 3rd-level spell 3/day</td>
<td>+18,000 gp</td>
<td>+2</td>
</tr>
<tr>
<td>96-100</td>
<td>Item can cast a 4th-level spell 3/day</td>
<td>+33,600 gp</td>
<td>+2</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-intelligent_item_powers-label">Footnotes</h3>
<ol>
<li id="rule-intelligent_item_powers-1">
<p>Intelligent items can only possess Intelligence-, Wisdom-, or Charisma-based skills, unless they also possess some form of ability to move. <InnerLink id="backlink-rule-intelligent_item_powers-ref-1-1" data-hash-target to="rule-intelligent_item_powers-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink> <InnerLink id="backlink-rule-intelligent_item_powers-ref-1-2" data-hash-target to="rule-intelligent_item_powers-ref-1-2" aria-label="Back to reference 1-2">↩<sup>2</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
const _special_purpose_items = {title: "Special Purpose Items", parent_topics: ["basics","magic_items","intelligent_items"], siblings: ["designing_an_intelligent_item","intelligent_item_alignment","intelligent_item_ability_scores","languages_spoken_by_item","senses_and_communication","intelligent_item_powers","special_purpose_items","dedicated_powers","item_quirks","item_ego","items_against_characters"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 535</Link></p>
<p>Some intelligent items have special purposes that guide their actions. Intelligent magic items with a special purpose gain a +2 Ego bonus. An item's purpose must suit the type and alignment of the item and should always be treated reasonably. A purpose of "defeat/slay arcane spellcasters" doesn't mean that the sword forces the wielder to kill every wizard she sees. Nor does it mean that the sword believes it is possible to kill every wizard, sorcerer, and bard in the world. It does mean that the item hates arcane spellcasters and wants to bring the local wizards' cabal to ruin, as well as end the rule of a sorcerer-queen in a nearby land. Likewise, a purpose of "defend elves" doesn't mean that if the wielder is an elf, he only wants to help the wielder. It means that the item wants to be used in furthering the cause of elves, stamping out their enemies and aiding their leaders. A purpose of "defeat/slay all" isn't just a matter of self-preservation. It means that the item won't rest (or let its wielder rest) until it places itself above all others.</p>
<p>Table 15-25 has a number of sample purposes that a magic item might possess. If the wielder specifically ignores or goes against an intelligent item's special purpose, the item gains a +4 bonus to its Ego until the wielder cooperates. This is in addition to the +2 Ego bonus gained by items with a special purpose.</p>
<h3 id="rule-special_purpose_items-table-15-25">Table 15-25</h3>
<ScrollContainer id="rule-special_purpose_items--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Purpose</th>
<th>Ego Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>01-20</td>
<td>Defeat/slay diametrically opposed alignment<sup><InnerLink showBacklink="backlink-rule-special_purpose_items-ref-1-1" id="rule-special_purpose_items-ref-1-1" data-hash-target to="rule-special_purpose_items-1">1</InnerLink></sup></td>
<td>+2</td>
</tr>
<tr>
<td>21-30</td>
<td>Defeat/slay arcane spellcasters (including spellcasting monsters and those that use spell-like abilities)</td>
<td>+2</td>
</tr>
<tr>
<td>31-40</td>
<td>Defeat/slay divine spellcasters (including divine entities and servitors)</td>
<td>+2</td>
</tr>
<tr>
<td>41-50</td>
<td>Defeat/slay non-spellcasters</td>
<td>+2</td>
</tr>
<tr>
<td>51-55</td>
<td>Defeat/slay a particular creature type (see the <Link to="/magic-enh/bane">bane</Link> special ability for choices)</td>
<td>+2</td>
</tr>
<tr>
<td>56-60</td>
<td>Defeat/slay a particular race or kind of creature</td>
<td>+2</td>
</tr>
<tr>
<td>61-70</td>
<td>Defend a particular race or kind of creature</td>
<td>+2</td>
</tr>
<tr>
<td>71-80</td>
<td>Defeat/slay the servants of a specific deity</td>
<td>+2</td>
</tr>
<tr>
<td>81-90</td>
<td>Defend the servants and interests of a specific deity</td>
<td>+2</td>
</tr>
<tr>
<td>91-95</td>
<td>Defeat/slay all (other than the item and the wielder)</td>
<td>+2</td>
</tr>
<tr>
<td>96-100</td>
<td>Choose one</td>
<td>+2</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-special_purpose_items-label">Footnotes</h3>
<ol>
<li id="rule-special_purpose_items-1">
<p>The purpose of the neutral (N) version of this item is to preserve the balance by defeating/slaying powerful beings of the extreme alignments (LG, LE, CG, CE). <InnerLink id="backlink-rule-special_purpose_items-ref-1-1" data-hash-target to="rule-special_purpose_items-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _dedicated_powers = {title: "Dedicated Powers", parent_topics: ["basics","magic_items","intelligent_items"], siblings: ["designing_an_intelligent_item","intelligent_item_alignment","intelligent_item_ability_scores","languages_spoken_by_item","senses_and_communication","intelligent_item_powers","special_purpose_items","dedicated_powers","item_quirks","item_ego","items_against_characters"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 535</Link></p>
<p>A dedicated power operates only when an intelligent item is in pursuit of its special purpose. This determination is always made by the item. It should always be easy and straightforward to see how the ends justify the means. Unlike its other powers, an intelligent item can refuse to use its dedicated powers even if the owner is dominant (see <Link to="/rule/items_against_characters">Items Against Characters</Link>). The caster level for these effects is equal to the item's caster level. Save DCs are based on the item's highest mental ability score. See Table 15-26 for a list of dedicated powers.</p>
<h3 id="rule-dedicated_powers-table-15-26">Table 15-26</h3>
<ScrollContainer id="rule-dedicated_powers--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Dedicated Power</th>
<th>Base Price Modifier</th>
<th>Ego Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>01-20</td>
<td>Item can detect any special purpose foes within 60 feet</td>
<td>+10,000 gp</td>
<td>+1</td>
</tr>
<tr>
<td>21-35</td>
<td>Item can use a 4th-level spell at will</td>
<td>+56,000 gp</td>
<td>+2</td>
</tr>
<tr>
<td>36-50</td>
<td>Wielder gets +2 luck bonus on attacks, saves, and checks</td>
<td>+80,000 gp</td>
<td>+2</td>
</tr>
<tr>
<td>51-65</td>
<td>Item can use a 5th-level spell at will</td>
<td>+90,000 gp</td>
<td>+2</td>
</tr>
<tr>
<td>66-80</td>
<td>Item can use a 6th-level spell at will</td>
<td>+132,000 gp</td>
<td>+2</td>
</tr>
<tr>
<td>81-95</td>
<td>Item can use a 7th-level spell at will</td>
<td>+182,000 gp</td>
<td>+2</td>
</tr>
<tr>
<td>96-100</td>
<td>Item can use <Link to="/spell/true_resurrection">true resurrection</Link> on wielder, once per month</td>
<td>+200,000 gp</td>
<td>+2</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _item_quirks = {title: "Item Quirks", parent_topics: ["basics","magic_items","intelligent_items"], siblings: ["designing_an_intelligent_item","intelligent_item_alignment","intelligent_item_ability_scores","languages_spoken_by_item","senses_and_communication","intelligent_item_powers","special_purpose_items","dedicated_powers","item_quirks","item_ego","items_against_characters"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 355</Link></p>
<p>Many intelligent items have personalities as quirky and robust as any other NPC. Roll on the following table to determine one or more personality quirks for intelligent items.</p>
<h3 id="rule-item_quirks-table-6-11-intelligent-item-personality-quirks">Table 6-11: Intelligent Item Personality Quirks</h3>
<ScrollContainer id="rule-item_quirks--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Personality Trait</th>
</tr>
</thead>
<tbody><tr>
<td>01</td>
<td>Always agrees with people, but changes its mind quickly</td>
</tr>
<tr>
<td>02</td>
<td>Is very noisy about treasure</td>
</tr>
<tr>
<td>03</td>
<td>Act mysteriously and answers questions poetically</td>
</tr>
<tr>
<td>04</td>
<td>Doesn't like new people</td>
</tr>
<tr>
<td>05</td>
<td>Makes token bets about minor things</td>
</tr>
<tr>
<td>06</td>
<td>Refers to itself in the third person</td>
</tr>
<tr>
<td>07</td>
<td>Bargains for the use of some of its powers</td>
</tr>
<tr>
<td>08</td>
<td>Constantly asks how things taste and smell</td>
</tr>
<tr>
<td>09</td>
<td>Yells when it is excited</td>
</tr>
<tr>
<td>10</td>
<td>Know-it-all</td>
</tr>
<tr>
<td>11</td>
<td>Is polite but obviously insincere</td>
</tr>
<tr>
<td>12</td>
<td>Constantly apologizes as a verbal tic</td>
</tr>
<tr>
<td>13</td>
<td>Makes a lot of threats it cannot back up</td>
</tr>
<tr>
<td>14</td>
<td>Very mellow; advises people to take a philosophical approach to both success and failure</td>
</tr>
<tr>
<td>15</td>
<td>Says as little as possible</td>
</tr>
<tr>
<td>16</td>
<td>Snickers or laughs at the misfortunes of others</td>
</tr>
<tr>
<td>17</td>
<td>Calls people by the wrong name, though often consistently</td>
</tr>
<tr>
<td>18</td>
<td>Prays a lot</td>
</tr>
<tr>
<td>19</td>
<td>Is quick to praise people even for little things</td>
</tr>
<tr>
<td>20</td>
<td>Often appears surprised and slightly offended when spoken to</td>
</tr>
<tr>
<td>21</td>
<td>Does not like to make decisions</td>
</tr>
<tr>
<td>22</td>
<td>Has a list of numbered rules or maxims covering different situations and quotes them when appropriate</td>
</tr>
<tr>
<td>23</td>
<td>Tells people the "real" reason they are doing things</td>
</tr>
<tr>
<td>24</td>
<td>Asks for advice or opinions about very unlikely situations</td>
</tr>
<tr>
<td>25</td>
<td>Speaks with great formality; never uses contractions and employs bigger words than necessary</td>
</tr>
<tr>
<td>26</td>
<td>Easily distracted by minor events in the area</td>
</tr>
<tr>
<td>27</td>
<td>Usually needs someone to explain a joke or metaphor</td>
</tr>
<tr>
<td>28</td>
<td>Has a particular core belief, potentially a rather odd one, and steadfastly looks at everything through the lens of that opinion</td>
</tr>
<tr>
<td>29</td>
<td>Likes to count things and has fun with numbers</td>
</tr>
<tr>
<td>30</td>
<td>Always tries to find compromise</td>
</tr>
<tr>
<td>31</td>
<td>Is always talking to itself</td>
</tr>
<tr>
<td>32</td>
<td>Very bad liar</td>
</tr>
<tr>
<td>33</td>
<td>Asks rude questions without realizing they cause offense</td>
</tr>
<tr>
<td>34</td>
<td>Grumbles and complains about its form and plight</td>
</tr>
<tr>
<td>35</td>
<td>Very sensitive about criticism or conflict</td>
</tr>
<tr>
<td>36</td>
<td>Absent-minded</td>
</tr>
<tr>
<td>37</td>
<td>Blames a particular type of creature for its troubles</td>
</tr>
<tr>
<td>38</td>
<td>Intellectual bully</td>
</tr>
<tr>
<td>39</td>
<td>Makes allusions to events from history or mythology without bothering to explain them</td>
</tr>
<tr>
<td>40</td>
<td>Hates a particular terrain type and complains loudly while within that terrain</td>
</tr>
<tr>
<td>41</td>
<td>Constantly ask questions about things that are outside its vision</td>
</tr>
<tr>
<td>42</td>
<td>Makes a list of things for its wearer or wielder to accomplish each day</td>
</tr>
<tr>
<td>43</td>
<td>Cannot keep a secret</td>
</tr>
<tr>
<td>44</td>
<td>Seems slightly surprised when anyone else has a good idea or does something productive</td>
</tr>
<tr>
<td>45</td>
<td>Often whines</td>
</tr>
<tr>
<td>46</td>
<td>Easily angered</td>
</tr>
<tr>
<td>47</td>
<td>Constantly warns about the danger of disease</td>
</tr>
<tr>
<td>48</td>
<td>Has a stock phrase</td>
</tr>
<tr>
<td>49</td>
<td>Habitually mumbles a word that rhymes with the final word other people speak before they pause</td>
</tr>
<tr>
<td>50</td>
<td>Delighted by puns and other sorts of word games</td>
</tr>
<tr>
<td>51</td>
<td>Makes animal noises when feeling threatened or excited</td>
</tr>
<tr>
<td>52</td>
<td>A lover or literature and poetry, it takes any opportunity to spout of a line or two of prose or verse</td>
</tr>
<tr>
<td>53</td>
<td>Very superstitious</td>
</tr>
<tr>
<td>54</td>
<td>Spurs on its wielder or wearer to brave or foolhardy acts</td>
</tr>
<tr>
<td>55</td>
<td>Never uses one word when 10 will do</td>
</tr>
<tr>
<td>56</td>
<td>Constantly asks to be destroyed, but panics if taken seriously</td>
</tr>
<tr>
<td>57</td>
<td>Always has a reason why something will not work</td>
</tr>
<tr>
<td>58</td>
<td>Claims to be in love with the bearer</td>
</tr>
<tr>
<td>59</td>
<td>Tells boring stories about something mundane</td>
</tr>
<tr>
<td>60</td>
<td>Constantly suggests ways to make activities more "fun" and "exciting"</td>
</tr>
<tr>
<td>61</td>
<td>Collects words from languages it doesn't know, and uses them in place of words in the language it most commonly uses</td>
</tr>
<tr>
<td>62</td>
<td>Dotes on its wearer or wielder</td>
</tr>
<tr>
<td>63</td>
<td>Often ignores its wearer or wielder</td>
</tr>
<tr>
<td>64</td>
<td>Loathes itself</td>
</tr>
<tr>
<td>65</td>
<td>Occasionally chants annoying little rhymes</td>
</tr>
<tr>
<td>66</td>
<td>Acts as if it is friends with, but obviously hates, its wearer or wielder</td>
</tr>
<tr>
<td>67</td>
<td>Openly scornful of organized religion and believes all gods are selfish liars</td>
</tr>
<tr>
<td>68</td>
<td>Gets angrier and more determined with each setback</td>
</tr>
<tr>
<td>69</td>
<td>Thinks most objects are intelligent items</td>
</tr>
<tr>
<td>70</td>
<td>Lacks a moral compass when making plans and often proposes horrific solutions to minor problems</td>
</tr>
<tr>
<td>71</td>
<td>Falls quiet for stretches where it will not talk to anyone for days</td>
</tr>
<tr>
<td>72</td>
<td>Believes it is losing its mind</td>
</tr>
<tr>
<td>73</td>
<td>Constantly name-drops a famous past bearer</td>
</tr>
<tr>
<td>74</td>
<td>Has terrible syntax and diction</td>
</tr>
<tr>
<td>75</td>
<td>Never tires of learning new and interesting bits of information</td>
</tr>
<tr>
<td>76</td>
<td>Complains about smells that no one else notices</td>
</tr>
<tr>
<td>77</td>
<td>Wants to be dipped in ale, wine, or other forms of alcohol, and when it is, acts drunk</td>
</tr>
<tr>
<td>78</td>
<td>Loves to sing but is tone deaf</td>
</tr>
<tr>
<td>79</td>
<td>Blames everyone else for its plight</td>
</tr>
<tr>
<td>80</td>
<td>Is a seemingly endless font of gossip - though most details are fabricated</td>
</tr>
<tr>
<td>81</td>
<td>Treats all others as lesser forms of intelligence</td>
</tr>
<tr>
<td>82</td>
<td>Very cheerful; tries to raise downcast spirits with song, jokes, and uplifting stories</td>
</tr>
<tr>
<td>83</td>
<td>Grows more and more relaxed the worse things get; conversely, on edge and nervous when things seem to go well</td>
</tr>
<tr>
<td>84</td>
<td>Constantly remembers details wrong</td>
</tr>
<tr>
<td>85</td>
<td>Makes up stories</td>
</tr>
<tr>
<td>86</td>
<td>Avoids speaking with creatures other than its wielder or wearer</td>
</tr>
<tr>
<td>87</td>
<td>Has a need for constant attention</td>
</tr>
<tr>
<td>88</td>
<td>Is a little unhinged when away from its wielder or wearer</td>
</tr>
<tr>
<td>89</td>
<td>Questions others about their background in order to determine if they are "suitable"</td>
</tr>
<tr>
<td>90</td>
<td>Is often confused by the deeds of others and regularly asks about the reason for certain actions</td>
</tr>
<tr>
<td>91</td>
<td>Very jealous and possessive about its wielder or wearer</td>
</tr>
<tr>
<td>92</td>
<td>Continually mentions a heroic battle it participated in and how nothing else compares</td>
</tr>
<tr>
<td>93</td>
<td>Diagnoses everyone with a mania, fixation, or curse, but is often wrong</td>
</tr>
<tr>
<td>94</td>
<td>Explains simple things that don't need explanations</td>
</tr>
<tr>
<td>95</td>
<td>Wishes it was free from its item and seeks someone who can perform such a task</td>
</tr>
<tr>
<td>96</td>
<td>Believe it is a trapped god</td>
</tr>
<tr>
<td>97</td>
<td>Has an imaginary ethereal friend</td>
</tr>
<tr>
<td>98</td>
<td>Is afraid of the dark</td>
</tr>
<tr>
<td>99</td>
<td>Admonishes people for using profanity</td>
</tr>
<tr>
<td>100</td>
<td>Rarely talks but frequently emits a drone of insane giggles</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _item_ego = {title: "Item Ego", parent_topics: ["basics","magic_items","intelligent_items"], siblings: ["designing_an_intelligent_item","intelligent_item_alignment","intelligent_item_ability_scores","languages_spoken_by_item","senses_and_communication","intelligent_item_powers","special_purpose_items","dedicated_powers","item_quirks","item_ego","items_against_characters"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 535</Link></p>
<p>Ego is a measure of the total power and force of personality that an item possesses. An item's Ego score is the sum of all of its Ego modifiers plus an additional bonus for the cost of the base magic item (excluding the cost of all of the intelligent item enhancements). An item's Ego score helps determine whether the item or the character is dominant in their relationship, as detailed below.</p>
<ScrollContainer id="rule-item_ego--table-0"><table>
<thead>
<tr>
<th>Base Magic Item Value</th>
<th>Ego Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Up to 1,000 gp</td>
<td>-</td>
</tr>
<tr>
<td>1,001 gp to 5,000 gp</td>
<td>+1</td>
</tr>
<tr>
<td>5,001 gp to 10,000 gp</td>
<td>+2</td>
</tr>
<tr>
<td>10,001 gp to 20,000 gp</td>
<td>+3</td>
</tr>
<tr>
<td>20,001 gp to 50,000 gp</td>
<td>+4</td>
</tr>
<tr>
<td>50,001 gp to 100,000 gp</td>
<td>+6</td>
</tr>
<tr>
<td>100,001 gp to 200,000 gp</td>
<td>+8</td>
</tr>
<tr>
<td>200,001 gp and higher</td>
<td>+12</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _items_against_characters = {title: "Items against Characters", parent_topics: ["basics","magic_items","intelligent_items"], siblings: ["designing_an_intelligent_item","intelligent_item_alignment","intelligent_item_ability_scores","languages_spoken_by_item","senses_and_communication","intelligent_item_powers","special_purpose_items","dedicated_powers","item_quirks","item_ego","items_against_characters"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 535</Link></p>
<p>When an item has an Ego of its own, it has a will of its own. The item is absolutely true to its alignment. If the character who possesses the item is not true to that alignment's goals or the item's special purpose, personality conflict - item against character - results. Similarly, any item with an Ego score of 20 or higher always considers itself superior to any character, and a personality conflict results if the possessor does not always agree with the item.</p>
<p>When a personality conflict occurs, the possessor must make a Will saving throw (DC = item's Ego). If the possessor succeeds, she is dominant. If she fails, the item is dominant. Dominance lasts for 1 day or until a critical situation occurs (such as a major battle, a serious threat to either the item or the character, and so on). Should an item gain dominance, it resists the character's desires and demands concessions such as any of the following:</p>
<ul>
<li>Removal of associates or items whose alignment or personality is distasteful to the item.</li>
<li>The character divesting herself of all other magic items or items of a certain type.</li>
<li>Obedience from the character so the item can direct where they go for its own purposes.</li>
<li>Immediate seeking out and slaying of creatures hateful to the item.</li>
<li>Magical protections and devices to safeguard the item from molestation when it is not in use.</li>
<li>That the character carry the item with her on all occasions.</li>
<li>That the character relinquish the item to a more suitable possessor due to alignment differences or conduct.</li>
</ul>
<p>In extreme circumstances, the item can resort to even harsher measures, such as the following:</p>
<ul>
<li>Force its possessor into combat.</li>
<li>Refuse to strike opponents.</li>
<li>Strike at its wielder or her associates.</li>
<li>Force its possessor to surrender to an opponent.</li>
<li>Cause itself to drop from the character's grasp.</li>
</ul>
<p>Naturally, such actions are unlikely when harmony reigns between the character's and item's alignments or when their purposes and personalities are well matched. Even so, an item might wish to have a lesser character possess it in order to easily establish and maintain dominance over him, or a higher-level possessor so as to better accomplish its goals.</p>
<p>All magic items with personalities desire to play an important role in whatever activity is under way, particularly combat. Such items are natural rivals, even with others of the same alignment. No intelligent item wants to share its wielder with others. An intelligent item is aware of the presence of any other intelligent item within 60 feet, and most intelligent items try their best to mislead or distract their host so that she ignores or destroys the rival. Of course, alignment might change this sort of behavior.</p>
<p>Items with personalities are never totally controlled or silenced by the characters that possess them, even though they may never successfully control their possessors. They may be powerless to force their demands, but most remain undaunted and continue to air their wishes and demands.</p>
</>};
const _cursed_items = {title: "Cursed Magic Items", parent_topics: ["basics","magic_items"], siblings: ["magic_items_and_detect_magic","using_items","size_and_magic_items","magic_items_on_the_body","saving_throws_against_magic_item_powers","damaging_magic_items","repairing_magic_items","charges_doses_and_multiple_uses","purchasing_magic_items","magic_item_descriptions","intelligent_items","cursed_items","artifacts","magic_item_creation"], subtopics: ["common_cursed_item_effects"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 536</Link></p>
<p>Cursed items are magic items with some sort of potentially negative impact. Occasionally they mix bad with good, forcing characters to make difficult choices. Cursed items are almost never made intentionally. Instead they are the result of rushed work, inexperienced crafters, or a lack of proper components. While many of these items still have functions, they either do not work as intended or come with serious drawbacks. When a magic item creation skill check fails by 5 or more, roll on Table 15-27 to determine the type of curse possessed by the item.</p>
<p><strong className="hl">Identifying Cursed Items:</strong> Cursed items are identified like any other magic item with one exception: unless the check made to identify the item exceeds the DC by 10 or more, the curse is not detected. If the check is not made by 10 or more, but still succeeds, all that is revealed is the magic item's original intent. If the item is known to be cursed, the nature of the curse can be determined using the standard DC to identify the item.</p>
<p><strong className="hl">Removing Cursed Items:</strong> While some cursed items can be simply discarded, others force a compulsion upon the user to keep the item, no matter the costs. Others reappear even if discarded or are impossible to throw away. These items can only be discarded after the character or item is targeted by a <Link to="/spell/remove_curse">remove curse</Link> or similar magic. The DC of the caster level check to undo the curse is equal to 10 + the item's caster level. If the spell is successful, the item can be discarded on the following round, but the curse reasserts itself if the item is used again.</p>
</>};
const _common_cursed_item_effects = {title: "Common Cursed Item Effects", parent_topics: ["basics","magic_items","cursed_items"], siblings: ["common_cursed_item_effects"], className: "lastColumnStart", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 536</Link></p>
<p>The following are some of the most common cursed item effects. GMs should feel free to invent new cursed item effects to fit specific items.</p>
<h3 id="rule-common_cursed_item_effects-table-15-27-common-item-curses">Table 15-27: Common Item Curses</h3>
<ScrollContainer id="rule-common_cursed_item_effects--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Curse</th>
</tr>
</thead>
<tbody><tr>
<td>01-15</td>
<td>Delusion</td>
</tr>
<tr>
<td>16-35</td>
<td>Opposite effect or target</td>
</tr>
<tr>
<td>36-45</td>
<td>Intermittent functioning</td>
</tr>
<tr>
<td>46-60</td>
<td>Requirement</td>
</tr>
<tr>
<td>61-75</td>
<td>Drawback</td>
</tr>
<tr>
<td>76-90</td>
<td>Completely different effect</td>
</tr>
<tr>
<td>91-100</td>
<td>Substitute specific cursed item</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Delusion:</strong> The user believes the item is what it appears to be, yet it actually has no magical power other than to deceive. The user is mentally fooled into thinking the item is functioning and cannot be convinced otherwise without the casting of <Link to="/spell/remove_curse">remove curse</Link>.</p>
<p><strong className="hl">Opposite Effect or Target:</strong> These cursed items malfunction, so that either they do the opposite of what the creator intended, or they target the user instead of someone else. The interesting point to keep in mind here is that these items aren't always bad to have. Opposite-effect items include weapons that impose penalties on attack and damage rolls rather than bonuses. Just as a character shouldn't necessarily immediately know what the enhancement bonus of a non-cursed magic item is, she shouldn't immediately know that a weapon is cursed. Once she knows, however, the item can be discarded unless some sort of compulsion is placed upon it that compels the wielder to keep and use it. In such cases, a <em>remove curse</em> spell is generally needed to get rid of the item.</p>
<p><strong className="hl">Intermittent Functioning:</strong> The three varieties of intermittent functioning items all function perfectly as intended - at least some of the time. The three varieties are unreliable, dependent, and uncontrolled items.</p>
<p><strong className="hl">Unreliable:</strong> Each time the item is activated, there is a 5% chance (01-05 on d%) that it does not function.</p>
<p><strong className="hl">Dependent:</strong> The item only functions in certain situations. To determine the situation, select or roll on the following table.</p>
<ScrollContainer id="rule-common_cursed_item_effects--table-1"><table>
<thead>
<tr>
<th>d%</th>
<th>Situation</th>
</tr>
</thead>
<tbody><tr>
<td>01-03</td>
<td>Temperature below freezing</td>
</tr>
<tr>
<td>04-06</td>
<td>Temperature above freezing</td>
</tr>
<tr>
<td>07-10</td>
<td>During the day</td>
</tr>
<tr>
<td>11-15</td>
<td>During the night</td>
</tr>
<tr>
<td>16-20</td>
<td>In direct sunlight</td>
</tr>
<tr>
<td>21-25</td>
<td>Out of direct sunlight</td>
</tr>
<tr>
<td>26-34</td>
<td>Underwater</td>
</tr>
<tr>
<td>35-37</td>
<td>Out of water</td>
</tr>
<tr>
<td>38-45</td>
<td>Underground</td>
</tr>
<tr>
<td>46-55</td>
<td>Aboveground</td>
</tr>
<tr>
<td>56-60</td>
<td>Within 10 feet of a random creature type</td>
</tr>
<tr>
<td>61-64</td>
<td>Within 10 feet of a random race or kind of creature</td>
</tr>
<tr>
<td>65-72</td>
<td>Within 10 feet of an arcane spellcaster</td>
</tr>
<tr>
<td>73-80</td>
<td>Within 10 feet of a divine spellcaster</td>
</tr>
<tr>
<td>81-85</td>
<td>In the hands of a non-spellcaster</td>
</tr>
<tr>
<td>86-90</td>
<td>In the hands of a spellcaster</td>
</tr>
<tr>
<td>91-95</td>
<td>In the hands of a creature of a particular alignment</td>
</tr>
<tr>
<td>96</td>
<td>In the hands of a creature of a particular gender</td>
</tr>
<tr>
<td>97-99</td>
<td>On holy days or during particular astrological events</td>
</tr>
<tr>
<td>100</td>
<td>More than 100 miles from a particular site</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Uncontrolled:</strong> An uncontrolled item occasionally activates at random times. Roll d% every day. On a result of 01-05 the item activates at some random point during that day.</p>
<p><strong className="hl">Requirement:</strong> Some items have stringent requirements that must be met for them to be usable. To keep an item with this kind of curse functioning, one or more of the following conditions must be met.</p>
<ul>
<li>Character must eat twice as much as normal.</li>
<li>Character must sleep twice as much as normal.</li>
<li>Character must undergo a specific quest (one time only, and the item functions normally thereafter).</li>
<li>Character must sacrifice (destroy) 100 gp in valuables per day.</li>
<li>Character must sacrifice (destroy) 2,000 gp worth of magic items each week.</li>
<li>Character must swear fealty to a particular noble or to his entire family.</li>
<li>Character must discard all other magic items.</li>
<li>Character must worship a particular deity.</li>
<li>Character must change her name to a specific name. The item only works for characters of that name.</li>
<li>Character must add a specific class at the next opportunity if not of that class already.</li>
<li>Character must have a minimum number of ranks in a particular skill.</li>
<li>Character must sacrifice some part of her life energy (2 points of Constitution) one time. If the character gets the Constitution points back (such as from a <Link to="/spell/restoration">restoration</Link> spell), the item ceases functioning. (The item does not cease functioning if the character receives a Constitution increase caused by level gain, a <Link to="/spell/wish">wish</Link>, or the use of a magic item.)</li>
<li>Item must be cleansed with holy water each day.</li>
<li>Item must be used to kill a living creature each day.</li>
<li>Item must be bathed in volcanic lava once per month.</li>
<li>Item must be used at least once a day, or it won't function again for its current possessor.</li>
<li>Item must draw blood when wielded (weapons only). It can't be put away or exchanged for another weapon until it has scored a hit.</li>
<li>Item must have a particular spell cast upon it each day (such as <Link to="/spell/bless">bless</Link>, <Link to="/spell/atonement">atonement</Link>, or <Link to="/spell/animate_objects">animate objects</Link>).</li>
</ul>
<p>Requirements are so dependent upon suitability to the item that they should never be determined randomly. An intelligent item with a requirement often imposes its requirement through its personality. If the requirement is not met, the item ceases to function. If it is met, usually the item functions for one day before the requirement must be met again (although some requirements are one time only, others monthly, and still others continuous).</p>
<p><strong className="hl">Drawback:</strong> Items with drawbacks are usually still beneficial to the possessor but carry some negative aspect. Although sometimes drawbacks occur only when the item is used (or held, in the case of some weapons), usually the drawback remains with the character for as long as she has the item. Unless otherwise indicated, drawbacks remain in effect as long as the item is possessed. The DC to save against any of these effects is usually equal to 10 + the item's caster level.</p>
<ScrollContainer id="rule-common_cursed_item_effects--table-2"><table>
<thead>
<tr>
<th>d%</th>
<th>Drawback</th>
</tr>
</thead>
<tbody><tr>
<td>01-04</td>
<td>Character's hair grows 1 inch longer every hour.</td>
</tr>
<tr>
<td>05-09</td>
<td>Character either shrinks 6 inches (01-50 on d%) or grows that much taller (51-100). Only happens once.</td>
</tr>
<tr>
<td>10-13</td>
<td>Temperature around item is 10&deg; F cooler than normal.</td>
</tr>
<tr>
<td>14-17</td>
<td>Temperature around item is 10&deg; F warmer than normal.</td>
</tr>
<tr>
<td>18-21</td>
<td>Character's hair color changes.</td>
</tr>
<tr>
<td>22-25</td>
<td>Character's skin color changes.</td>
</tr>
<tr>
<td>26-29</td>
<td>Character now bears some identifying mark (tattoo, weird glow, or the like).</td>
</tr>
<tr>
<td>30-32</td>
<td>Character's gender changes.</td>
</tr>
<tr>
<td>33-34</td>
<td>Character's race or kind changes.</td>
</tr>
<tr>
<td>35</td>
<td>Character is afflicted with a random disease that cannot be cured.</td>
</tr>
<tr>
<td>36-39</td>
<td>Item continually emits a disturbing sound (moaning, weeping, screaming, cursing, insults).</td>
</tr>
<tr>
<td>40</td>
<td>Item looks ridiculous (garishly colored, silly shape, glows bright pink).</td>
</tr>
<tr>
<td>41-45</td>
<td>Character becomes selfishly possessive.</td>
</tr>
<tr>
<td>46-49</td>
<td>Character becomes paranoid about losing the item and afraid of damage occurring to it.</td>
</tr>
<tr>
<td>50-51</td>
<td>Character's alignment changes.</td>
</tr>
<tr>
<td>52-54</td>
<td>Character must attack nearest creature (5% chance [01-05 on d%] each day).</td>
</tr>
<tr>
<td>55-57</td>
<td>Character is stunned for 1d4 rounds once item function is finished (or randomly, 1/day).</td>
</tr>
<tr>
<td>58-60</td>
<td>Character's vision is blurry (-2 penalty on attack rolls, saves, and skill checks requiring vision).</td>
</tr>
<tr>
<td>61-64</td>
<td>Character gains one negative level.</td>
</tr>
<tr>
<td>65</td>
<td>Character gains two negative levels.</td>
</tr>
<tr>
<td>66-70</td>
<td>Character must make a Will save each day or take 1 point of Intelligence damage.</td>
</tr>
<tr>
<td>71-75</td>
<td>Character must make a Will save each day or take 1 point of Wisdom damage.</td>
</tr>
<tr>
<td>76-80</td>
<td>Character must make a Will save each day or take 1 point of Charisma damage.</td>
</tr>
<tr>
<td>81-85</td>
<td>Character must make a Fortitude save each day or take 1 point of Constitution damage.</td>
</tr>
<tr>
<td>86-90</td>
<td>Character must make a Fortitude save each day or take 1 point of Strength damage.</td>
</tr>
<tr>
<td>91-95</td>
<td>Character must make a Fortitude save each day or take 1 point of Dexterity damage.</td>
</tr>
<tr>
<td>96</td>
<td>Character is polymorphed into a specific creature (5% chance [01-05 on d%] each day).</td>
</tr>
<tr>
<td>97</td>
<td>Character cannot cast arcane spells.</td>
</tr>
<tr>
<td>98</td>
<td>Character cannot cast divine spells.</td>
</tr>
<tr>
<td>99</td>
<td>Character cannot cast any spells.</td>
</tr>
<tr>
<td>100</td>
<td>Either pick one of the above that's appropriate or create a drawback specifically for that item.</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Specific Cursed Items:</strong> Perhaps the most dangerous and insidious of all cursed items are those whose intended functions are completely replaced by a curse. Yet even these items can have their uses, particularly as traps or weapons. The cursed items listed <Link to="/main/magic_cursed">here</Link> are provided as specific examples of cursed items. Instead of prerequisites, each cursed item is associated with one or more ordinary magic items whose creation might result in the cursed item. Cursed items can be sold, if the curse is not known to the buyer, as if they were the item they appear to be.</p>
<p>Cursed suits of armor and weapons can come in many forms, and the examples listed here are merely the most common. For example, a cursed -2 sword, might appear as a +3 shortsword or a +1 dagger, with a similar negative instead of the listed -2.</p>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 343</Link></p>
<ScrollContainer id="rule-common_cursed_item_effects--table-3"><table>
<thead>
<tr>
<th>d%</th>
<th>Specific Cursed Item</th>
</tr>
</thead>
<tbody><tr>
<td>01-02</td>
<td className="ion-activatable"><Link to="/magic-weapon/cursed_sword">-2 cursed sword<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>03-04</td>
<td className="ion-activatable"><Link to="/magic-wondrous/amulet_of_inescapable_location">Amulet of inescapable location<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>05-06</td>
<td className="ion-activatable"><Link to="/magic-armor/armor_of_arrow_attraction">Armor of arrow attraction<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>07-08</td>
<td className="ion-activatable"><Link to="/magic-armor/armor_of_rage">Armor of rage<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>09-10</td>
<td className="ion-activatable"><Link to="/magic-weapon/arrowbreak_bow">Arrowbreak bow<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>11-12</td>
<td className="ion-activatable"><Link to="/magic-wondrous/bag_of_devouring">Bag of devouring<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>13-14</td>
<td className="ion-activatable"><Link to="/magic-wondrous/belt_of_weakness">Belt of weakness<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>15-16</td>
<td className="ion-activatable"><Link to="/magic-weapon/berserking_sword">Berserking sword<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>17-18</td>
<td className="ion-activatable"><Link to="/magic-weapon/biting_battleaxe">Biting battleaxe<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>19-20</td>
<td className="ion-activatable"><Link to="/magic-wondrous/boots_of_dancing">Boots of dancing<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>21-22</td>
<td className="ion-activatable"><Link to="/magic-wondrous/bracers_of_defenselessness">Bracers of defenselessness<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>23-24</td>
<td className="ion-activatable"><Link to="/magic-wondrous/broom_of_animated_attack">Broom of animated attack<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>25-26</td>
<td className="ion-activatable"><Link to="/magic-wondrous/cape_of_anchoring">Cape of anchoring<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>27-28</td>
<td className="ion-activatable"><Link to="/magic-weapon/cursed_backbiter_spear">Cursed backbiter spear<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>29-30</td>
<td className="ion-activatable"><Link to="/magic-wondrous/crystal_hypnosis_ball">Crystal hypnosis ball<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>31-32</td>
<td className="ion-activatable"><Link to="/magic-weapon/deadly_returns_throwing_axe">Deadly returns throwing axe<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>33-34</td>
<td className="ion-activatable"><Link to="/magic-wondrous/drums_of_lethargy">Drums of lethargy<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>35-36</td>
<td className="ion-activatable"><Link to="/magic-wondrous/dust_of_sneezing_and_choking">Dust of sneezing and choking<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>37-38</td>
<td className="ion-activatable"><Link to="/magic-wondrous/eyes_of_blindness">Eyes of blindness<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>39-40</td>
<td className="ion-activatable"><Link to="/magic-wondrous/flask_of_curses">Flask of curses<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>41-42</td>
<td className="ion-activatable"><Link to="/magic-wondrous/gauntlets_of_fumbling">Gauntlets of fumbling<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>43</td>
<td className="ion-activatable"><Link to="/magic-wondrous/headband_of_stupidity">Headband of stupidity<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>44-45</td>
<td className="ion-activatable"><Link to="/magic-weapon/heavy_hammer">Heavy hammer<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>46-47</td>
<td className="ion-activatable"><Link to="/magic-wondrous/helm_of_opposite_alignment">Helm of opposite alignment<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>48-49</td>
<td className="ion-activatable"><Link to="/magic-wondrous/incense_of_obsession">Incense of obsession<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>50-51</td>
<td className="ion-activatable"><Link to="/magic-weapon/mace_of_blood">Mace of blood<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>52-53</td>
<td className="ion-activatable"><Link to="/magic-wondrous/mask_of_ugliness">Mask of ugliness<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>54-55</td>
<td className="ion-activatable"><Link to="/magic-wondrous/medallion_of_thought_projection">Medallion of thought projection<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>56-57</td>
<td className="ion-activatable"><Link to="/magic-weapon/nearfiring_bow">Nearfiring bow<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>58</td>
<td className="ion-activatable"><Link to="/magic-wondrous/necklace_of_strangulation">Necklace of strangulation<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>59-60</td>
<td className="ion-activatable"><Link to="/magic-weapon/net_of_snaring">Net of snaring<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>61-62</td>
<td className="ion-activatable"><Link to="/magic-weapon/ornery_pistol">Ornery pistol<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>63-64</td>
<td className="ion-activatable"><Link to="/magic-wondrous/pauldrons_of_the_jackass">Pauldrons of the jackass<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>65-66</td>
<td className="ion-activatable"><Link to="/magic-wondrous/periapt_of_foul_rotting">Periapt of foul rotting<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>67-68</td>
<td className="ion-activatable"><Link to="/magic-wondrous/petrifying_cloak">Petrifying cloak<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>69-70</td>
<td className="ion-activatable"><Link to="/magic-wondrous/poisonous_cloak">Poisonous cloak<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>71-72</td>
<td className="ion-activatable"><Link to="/magic-wondrous/potion_of_poison">Potion of poison<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>73-74</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_clumsiness">Ring of clumsiness<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>75-76</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_lifebleed">Ring of lifebleed<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>77-78</td>
<td className="ion-activatable"><Link to="/magic-ring/ring_of_spell_devouring">Ring of spell devouring<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>79-80</td>
<td className="ion-activatable"><Link to="/magic-wondrous/robe_of_powerlessness">Robe of powerlessness<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>81-82</td>
<td className="ion-activatable"><Link to="/magic-wondrous/robe_of_vermin">Robe of vermin<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>83-84</td>
<td className="ion-activatable"><Link to="/magic-rod/rod_of_foiled_magic">Rod of foiled magic<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>85-86</td>
<td className="ion-activatable"><Link to="/magic-wondrous/scarab_of_death">Scarab of death<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>87-88</td>
<td className="ion-activatable"><Link to="/magic-wondrous/scattershot_bracers">Scattershot bracers<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>89-90</td>
<td className="ion-activatable"><Link to="/magic-staff/staff_of_occasional_wonder">Staff of occasional wonder<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>91-92</td>
<td className="ion-activatable"><Link to="/magic-wondrous/stone_of_weight">Stone of weight<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>93-94</td>
<td className="ion-activatable"><Link to="/magic-wondrous/unguent_of_aging">Unguent of aging<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>95-96</td>
<td className="ion-activatable"><Link to="/magic-wondrous/unlucky_figurine">Unlucky figurine<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>97</td>
<td className="ion-activatable"><Link to="/magic-weapon/unstable_musket">Unstable musket<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>98</td>
<td className="ion-activatable"><Link to="/magic-weapon/unwieldy_glaive">Unwieldy glaive<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>99-100</td>
<td>GM's choice</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _artifacts = {title: "Artifacts", parent_topics: ["basics","magic_items"], siblings: ["magic_items_and_detect_magic","using_items","size_and_magic_items","magic_items_on_the_body","saving_throws_against_magic_item_powers","damaging_magic_items","repairing_magic_items","charges_doses_and_multiple_uses","purchasing_magic_items","magic_item_descriptions","intelligent_items","cursed_items","artifacts","magic_item_creation"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 543</Link></p>
<p><Link to="/main/magic_artifacts">Artifacts</Link> are extremely powerful. Rather than merely another form of magical equipment, they are the sorts of legendary relics that whole campaigns can be based on. Each could be the center of a whole set of adventures - a quest to recover it, a fight against an opponent wielding it, a mission to cause its destruction, and so on.</p>
<p>Unlike normal magic items, artifacts are not easily destroyed. Instead of construction information, each artifact includes one possible means by which it might be destroyed.</p>
<p>Artifacts can never be purchased, nor are they found as part of a random treasure hoard. When placing an artifact in your game, be sure to consider its impact and role. Remember that artifacts are fickle objects, and if they become too much of a nuisance, they can easily disappear or become lost once again.</p>
<p><strong className="hl">Minor artifacts</strong> are not necessarily unique items. Even so, they are magic items that no longer can be created, at least by common mortal means.</p>
<p><strong className="hl">Major artifacts</strong> are unique items - only one of each such item exists. These are the most potent of magic items, capable of altering the balance of a campaign. Unlike all other magic items, major artifacts are not easily destroyed. Each should have only a single, specific means of destruction.</p>
</>};
export default {equipment:_equipment,wealth_and_money:_wealth_and_money,weapons:_weapons,weapon_types:_weapon_types,weapon_encumbrance:_weapon_encumbrance,weapon_descriptions:_weapon_descriptions,weapon_special_features:_weapon_special_features,improvised_weapon_special_features:_improvised_weapon_special_features,masterwork_weapons:_masterwork_weapons,armor:_armor,masterwork_armor:_masterwork_armor,armor_for_unusual_creatures:_armor_for_unusual_creatures,getting_into_and_out_of_armor:_getting_into_and_out_of_armor,other_goods_and_services:_other_goods_and_services,carrying_capacity:_carrying_capacity,magic_items:_magic_items,magic_items_and_detect_magic:_magic_items_and_detect_magic,using_items:_using_items,size_and_magic_items:_size_and_magic_items,magic_items_on_the_body:_magic_items_on_the_body,saving_throws_against_magic_item_powers:_saving_throws_against_magic_item_powers,damaging_magic_items:_damaging_magic_items,repairing_magic_items:_repairing_magic_items,charges_doses_and_multiple_uses:_charges_doses_and_multiple_uses,purchasing_magic_items:_purchasing_magic_items,magic_item_descriptions:_magic_item_descriptions,extradimensional_spaces:_extradimensional_spaces,magic_armor:_magic_armor,magic_weapons:_magic_weapons,potions:_potions,rings:_rings,rods:_rods,scrolls:_scrolls,staves:_staves,wands:_wands,wondrous_items:_wondrous_items,minor_wondrous_items:_minor_wondrous_items,medium_wondrous_items:_medium_wondrous_items,major_wondrous_items:_major_wondrous_items,intelligent_items:_intelligent_items,designing_an_intelligent_item:_designing_an_intelligent_item,intelligent_item_alignment:_intelligent_item_alignment,intelligent_item_ability_scores:_intelligent_item_ability_scores,languages_spoken_by_item:_languages_spoken_by_item,senses_and_communication:_senses_and_communication,intelligent_item_powers:_intelligent_item_powers,special_purpose_items:_special_purpose_items,dedicated_powers:_dedicated_powers,item_quirks:_item_quirks,item_ego:_item_ego,items_against_characters:_items_against_characters,cursed_items:_cursed_items,common_cursed_item_effects:_common_cursed_item_effects,artifacts:_artifacts}